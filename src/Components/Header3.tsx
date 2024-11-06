
type Props = {
    h3Class:string | undefined,
    text:string,
    innerIcon:any | undefined
}

const Header3 = (props: Props) => {
  return (
    <h3 className={props.h3Class} >{props.innerIcon}{props.text}</h3>
  )
}

export default Header3