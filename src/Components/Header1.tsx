
type Props = {
    h1Class:string | undefined,
    text:string,
}

const Header1 = (props: Props) => {
  return (
    <h1 className={props.h1Class}>{props.text}</h1>
  )
}

export default Header1