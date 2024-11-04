

type Props = {
    buttonText:string,
    buttonClick: any
}

const RegButton = (props: Props) => {
      return (
            <button onClick={props.buttonClick} className="block p-4 bg-slate-900 hover:bg-slate-8000 text-white rounded mt-3">{props.buttonText}</button>
        )
}

export default RegButton