

type Props = {
    buttonText:string,
    buttonClick: any,
    additionalClasses: string|undefined,
    buttonIcon:any | undefined
}

const RegButton = (props: Props) => {
      return (
            <button onClick={props.buttonClick} className={`block p-4 bg-slate-900 hover:bg-slate-8000 text-white rounded mt-3 ${props.additionalClasses}`}>{props.buttonIcon} {props.buttonText}</button>
        )
}

export default RegButton