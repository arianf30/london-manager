import Image from "next/image"

const THEMES = {
  transparent: "bg-transparent color-blanco1 hover:bg-[rgba(0,0,0,0.2)]",
  transparentWhite:
    "bg-transparent color-blanco1 hover:bg-[rgba(255,255,255,0.2)]",
  primary:
    "bg-[#404040] color-blanco1 hover:bg-gradient-to-br from-violeta via-violeta to-rojo",
  zoom: "hover:scale-105",
}

const SIZES = {
  big3: "w-20 h-20 min-w-20 min-h-20 text-5xl",
  big2: "w-16 h-16 min-w-16 min-h-16 text-4xl",
  big: "w-14 h-14 min-w-14 min-h-14 text-3xl",
  large: "w-12 h-12 min-w-12 min-h-12 text-2xl",
  medium: "w-10 h-10 min-w-10 min-h-10 text-xl",
  small: "w-8 h-8 min-w-8 min-h-8 text-lg",
}
const SIZE_DEFAULT = "w-12 h-12"

export default function CircleButton({
  theme,
  size,
  bg,
  color,
  margin,
  text,
  icon,
  iconSVG,
  iconSize,
  image,
  altImage,
  shadow,
  action,
}) {
  let styles =
    "relative flex items-center justify-center rounded-full cursor-pointer transition duration-300"
  if (shadow) {
    styles += " drop-shadow-md"
  }
  return (
    <button
      className={`${styles} ${THEMES[theme]} ${
        size ? SIZES[size] : SIZE_DEFAULT
      } ${bg} ${color} ${margin}`}
      onClick={action}
    >
      {text && text}
      {icon && <div className={`font-icons i-${icon}`} />}
      {iconSVG && (
        <div className={iconSize ? iconSize : "w-1/2"}>
          <svg viewBox={iconSVG.viewBox} xmlns="http://www.w3.org/2000/svg">
            {iconSVG.svg}
          </svg>
        </div>
      )}
      {image && (
        <Image
          className="object-cover rounded-full"
          src={image}
          alt={altImage}
          layout="fill"
          priority
        />
      )}
    </button>
  )
}
