type Props = {
    inputType:string,
    inputId:string,
    inputName:string,
    inputOnchange: any | undefined,
    inputPlaceholder: string | undefined
}

const Input = (props: Props) => {
  return (
    <input className="p-4 rounded tracking-wide w-full border-2 border-opacity-15 border-gray-600" onChange={props.inputOnchange} type={props.inputType} id={props.inputId} name={props.inputName} placeholder={props.inputPlaceholder}/>
  )
}

export default Input