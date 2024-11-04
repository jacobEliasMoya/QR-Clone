import { useState } from 'react'
import Input from '../Components/Input'
import RegButton from '../Components/RegButton';



const ControlSection = () => {

    const [urlState, setUrlState] = useState<string>();
    const [isUrl, setIsUrl] = useState<boolean>()

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUrlState(e.target.value)
    }

    const verifyUrl = (url:string) =>{
        try {
            new URL(url);
            setIsUrl(true)
            alert('yes')

        } catch (error) {
            alert('Please enter a valid URL \nEX: http://website.com or https://website.com')
        }
    }

  return (
    <div>

        <p className='mb-2'>Submit URL</p>
        <p className='mb-3 text-sm text-blue-600'>For Best Results Copy and Paste the URL Into The Field Below.</p>

        <Input 
            inputType={'text'} 
            inputId={'url_main'} 
            inputName={'urlInput'}
            inputOnchange={handleChange} 
            inputPlaceholder={undefined} 
        />

        <p className='mt-2 text-sm text-red-600 '>{ isUrl ? '' : 'Please Enter a Valid Url'}</p>

        <RegButton
            buttonClick={()=>urlState? verifyUrl(urlState):null}
            buttonText='Generate QR'
        />

        <p className='break-words mt-2 opacity-30'>{urlState}</p>

    </div>
  )
}

export default ControlSection