import { useEffect, useState } from 'react'
import Input from '../Components/Input'
import { useDispatch } from 'react-redux';
import {setInitialUrl} from '../state/UrlSlice/UrlSlice';

const ControlSection = () => {


    const [urlState, setUrlState] = useState<string>();
    const [isUrl, setIsUrl] = useState<boolean>()

    const dispatch = useDispatch();

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUrlState(e.target.value)
    }

    const verifyUrl = (url:string) =>{
        try {   
            new URL(url);
            setIsUrl(true)
            
        } catch (error) {
            setIsUrl(false)
        }
    }

    const handleUrlState = () =>{
        urlState ? dispatch(setInitialUrl(urlState)) : null
    }

    useEffect(()=>{

        urlState? verifyUrl(urlState) : null;
        isUrl? handleUrlState(): null;

    },[urlState])

  return (
    <div>

        <p className='mb-2 text-xl'>Submit URL</p>
        <p className='mb-3  text-blue-600'>For Best Results Copy and Paste the URL Into The Field Below.</p>

        <Input 
              inputType={'text'}
              inputId={'url_main'}
              inputName={'urlInput'}
              inputOnchange={handleChange}
              inputPlaceholder={undefined} rangeMin={undefined} rangeMax={undefined} rangeValue={undefined}        />
        <p className='break-words mt-2 opacity-30'>Your QR code will open this URL: {urlState}</p>

        { isUrl ? <p className='mt-2 text-green-600 '>Valid Url</p> : <p className='mt-2 text-red-600 '>Please Enter a Valid Url</p>}

    </div>
  )
}

export default ControlSection