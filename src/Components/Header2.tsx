
type Props = {
    h2Class:string | undefined,
    text:string,
    innerIcon:any | undefined
}

const Header2 = (props: Props) => {
  return (
    <h2 className={props.h2Class} >{props.innerIcon}{props.text}</h2>
  )
}

export default Header2