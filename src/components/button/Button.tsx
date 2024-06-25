import { useState } from "react"

type Props={
  children:React.ReactNode;
  className:string;
  onClick ?: (event: React.MouseEvent<HTMLButtonElement>) => boolean;

}

const Button = ({children,className,onClick}:Props) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <button className={className} onClick={onClick} onMouseEnter={()=>setIsHovered(true)}>{children}</button>
  )
}

export default Button