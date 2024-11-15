type Props = {
    buttonText:string,
    buttonClick: any | unknown,
    additionalClasses: string|undefined,
    buttonIcon:any | undefined,
    isDownload: boolean,
    buttonLink:string | undefined
}

const RegButton = (props: Props) => {
      return (
            <a onClick={props.buttonClick} href={props.buttonLink   } download={props.isDownload} className={`block p-4 bg-slate-900 hover:bg-slate-800 text-white rounded mt-3 cursor-pointer ${props.additionalClasses}`}>{props.buttonIcon} {props.buttonText}</a>
        )
}

export default RegButton