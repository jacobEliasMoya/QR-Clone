import Header2 from './Header2'
import { FaArtstation, FaDownload, FaThumbsUp } from 'react-icons/fa6'

const KeyItems = () => {
  return (
    <div className='shadow-xl w-10/12 md:w-2/3 p-8 rounded-lg flex-wrap bg-zinc-100 -my-16 flex items-center justify-center mx-auto relative z-10'   >
        <Header2 h2Class={'text-slate-800 flex items-center gap-4 text-center flex-col w-full md:w-4/12'} text={'Simple to Customize'} innerIcon={<FaThumbsUp/>}/>
        <Header2 h2Class={'text-slate-800 flex items-center gap-4 text-center flex-col w-full md:w-4/12 my-8 md:my-0'} text={'Add Personal Logos'} innerIcon={<FaArtstation/>}/>
        <Header2 h2Class={'text-slate-800 flex items-center gap-4 text-center flex-col w-full md:w-4/12'} text={'High Quality Donwloads'} innerIcon={<FaDownload/>}/>
    </div>
  )
}

export default KeyItems