type Props = {
  inputType:string,
  inputId:string,
  inputName:string,
  inputOnchange: any | undefined,
  inputOnPaste: any | undefined,
  inputPlaceholder: string | undefined
  rangeMin: number | undefined,
  rangeMax: number | undefined,
  rangeValue: number | undefined
  
}

const Input = (props: Props) => {
  return (
    <input className="p-4 rounded tracking-wide w-full border-2 border-opacity-15 border-gray-600"  value={props.rangeValue} min={props.rangeMin} max={props.rangeMax} onChange={props.inputOnchange} onPaste={props.inputOnPaste} type={props.inputType} id={props.inputId} name={props.inputName} placeholder={props.inputPlaceholder}/>
  )
}

export default Input