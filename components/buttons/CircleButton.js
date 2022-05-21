import Image from "next/image"

export default function CircleButton(props) {
  let styles = 'relative flex w-14 h-14 items-center justify-center rounded-full bg-[#404040] color-blanco1 cursor-pointer transition duration-300 hover:bg-gradient-to-br from-violeta via-violeta to-rojo'
  if(props.backgroundColor){
    styles += ` ${props.backgroundColor}`
  }
  if (props.color) {
    styles += ` ${props.color}`
  }
  if (props.shadow) {
    styles += ' drop-shadow-md'
  }
  if (props.mr) {
    styles += ' mr-4'
  }
  if (props.ml) {
    styles += ' ml-4'
  }
  return (
    <button className={styles}>
      {props.text && props.text}
      {props.icon && 
        <p className={`font-icons i-${props.icon} text-xl`} />
      }
      {props.image &&
        <Image className="object-cover rounded-full" src={props.image} alt={props.altImage} layout="fill" priority />
      }
    </button>
  )
}