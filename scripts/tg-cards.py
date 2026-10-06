#!/usr/bin/env python3
"""Color-grade the optic stills into Telegram cards. No new generation."""

from PIL import Image, ImageChops, ImageDraw, ImageEnhance, ImageFilter, ImageFont

SANS = "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"
REG = "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf"
OUT = "/workspace/public/optic"


def cover(path, w, h):
    im = Image.open(path).convert("RGB")
    sw, sh = im.size
    scale = max(w / sw, h / sh)
    im = im.resize((round(sw * scale), round(sh * scale)), Image.Resampling.LANCZOS)
    left = (im.width - w) // 2
    top = max(0, (im.height - h) // 3)
    return im.crop((left, top, left + w, top + h))


def wash(base, rgb, side):
    w, h = base.size
    tint = Image.new("RGB", (w, h), rgb)
    screen = ImageChops.screen(base, tint)
    mask = Image.linear_gradient("L").resize((h, w)).rotate(90 if side == "left" else -90, expand=True)
    mask = mask.resize((w, h))
    if side == "left":
        mask = Image.eval(mask, lambda p: int(p * 0.55))
    else:
        mask = Image.eval(mask, lambda p: int(p * 0.42))
    return Image.composite(screen, base, mask)


def grade(im):
    im = ImageEnhance.Color(im).enhance(1.85)
    im = ImageEnhance.Contrast(im).enhance(1.28)
    im = ImageEnhance.Brightness(im).enhance(0.92)
    im = wash(im, (0, 196, 255), "left")
    im = wash(im, (255, 30, 140), "right")
    return im.filter(ImageFilter.UnsharpMask(radius=1.2, percent=80, threshold=2))


def shade(im, strength=170):
    w, h = im.size
    veil = Image.new("L", (1, h))
    for y in range(h):
        t = y / (h - 1)
        veil.putpixel((0, y), int(strength * (t**1.6)))
    return Image.composite(Image.new("RGB", im.size, (8, 8, 12)), im, veil.resize((w, h)))


def draw_card(base, path, lines):
    im = shade(grade(base))
    d = ImageDraw.Draw(im)
    y = im.height - 36
    for text, size, fill, gap in reversed(lines):
        font = ImageFont.truetype(SANS if size >= 28 else REG, size)
        bbox = d.textbbox((0, 0), text, font=font)
        y -= bbox[3] - bbox[1]
        d.text((56, y), text, font=font, fill=fill)
        y -= gap
    im.save(path, "JPEG", quality=90, optimize=True)


aisle = cover("/workspace/public/optic/aisle.jpg", 1280, 720)
draw_card(
    aisle,
    f"{OUT}/tg-wide.jpg",
    [
        ("OPTICMRVL.XYZ", 22, (226, 160, 74), 18),
        ("The light between them.", 36, (231, 226, 216), 14),
        ("$OPTIC", 92, (255, 248, 236), 10),
    ],
)

fiber = cover("/workspace/public/optic/fiber.jpg", 1080, 1080)
draw_card(
    fiber,
    f"{OUT}/tg-square.jpg",
    [
        ("ONE WAVELENGTH", 26, (226, 160, 74), 16),
        ("$OPTIC", 84, (255, 248, 236), 8),
    ],
)

module = cover("/workspace/public/optic/module.jpg", 1080, 1350)
draw_card(
    module,
    f"{OUT}/tg-story.jpg",
    [
        ("NOT THE SHARE. THE LIGHT.", 28, (226, 160, 74), 18),
        ("The processor is not the constraint.", 34, (231, 226, 216), 16),
        ("$OPTIC", 86, (255, 248, 236), 8),
    ],
)
