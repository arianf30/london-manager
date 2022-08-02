import PopAvatar from "components/svg/icons/PopAvatar"
import UserAvatar from "components/svg/icons/UserAvatar"
import Image from "next/image"

const SIZES = {
  xs: "w-6 h-6",
  sm: "w-8 h-8",
  base: "w-10 h-10",
  lg: "w-14 h-14",
  xl: "w-24 h-24",
  "2xl": "w-[120px] h-[120px]",
  "3xl": "w-[180px] h-[180px]",
}

const TYPES = {
  pop: "bg-p500 text-p400",
  user: "bg-gs600 text-gs400",
}

export default function Avatar({ type, avatar, alt, size, shadow }) {
  let addStyles = ""
  if (shadow) {
    addStyles = "drop-shadow-[0_4px_12px_rgba(10,10,20,0.25)]"
  }
  return (
    <div
      className={`relative bg-p500 flex items-center justify-center rounded-full ${SIZES[size]} ${TYPES[type]} ${addStyles}`}
    >
      {avatar ? (
        <Image
          className="object-cover rounded-full"
          src={avatar}
          alt={alt}
          layout="fill"
          priority
        />
      ) : (
        <div className="w-full h-full p-[22%]">
          {type === "pop" && <PopAvatar />}
          {type === "user" && <UserAvatar />}
        </div>
      )}
    </div>
  )
}
