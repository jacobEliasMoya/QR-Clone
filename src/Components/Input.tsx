type Props = {
    inputType:string,
    inputId:string,
    inputName:string,
    inputOnchange: any | undefined,
    inputPlaceholder: string | undefined
}

const Input = (props: Props) => {
  return (
    <input className="p-2 px-4 rounded" onChange={props.inputOnchange} type={props.inputType} id={props.inputId} name={props.inputName} placeholder={props.inputPlaceholder}/>
  )
}

export default Input