import BaseModal from "../BaseModal/BaseModal";
import React, {useEffect, useRef, useState} from "react";
import BaseButton from "../BaseButton/BaseButton";
import BaseCheckBox from "../BaseCheckBox";
import MusicFrame from "./MusicFrame";
import ConfigFrame from "./ConfigFrame";





function ThemodalEmbedPlaylist({onClose:handleClose,spotifyUrl, music}){
    const [textFrame,setTextFrame]=useState(null)
    const [agreement, setAgreement] = useState(false)
    const [classes, setClasses] = useState('')
    const [sizeFrame, setSizeFrame] = useState({
        height: '352',
        width: "100%"
    });
    const [isCopy, setIsCopy] = useState(false)
    const handlerChange = (e) => {
        const {value, name} = e.target;
        setSizeFrame({
            ...sizeFrame,
            [name]: value
        })
    }
    function openFrameLink(){
        if (!agreement){
            setAgreement(true)
            setClasses('translate-y-[100px] transition-transform duration-500');
        }else{
            setAgreement(false);
            setClasses('translate-y-[2px] transition-transform duration-500');
        }

    }

    function getTextFrame(ref) {
        let text = ref.current.innerHTML
        setTextFrame(text)
    }
    function copyFrameCode (){
        navigator.clipboard.writeText(textFrame);
        setIsCopy(true);
    }
return(
    <BaseModal classes='w-[660px] bg-neutral-900 gap-3 bottom-20' onClose={handleClose}>
        <h1 className='text-3xl pt-8 pb-3 px-8 font-bold leading-relaxed '>Embed playlist</h1>
        <ConfigFrame sizeFrame={sizeFrame} changeSize={handlerChange}/>
        <MusicFrame spotifyUrl={spotifyUrl} size={sizeFrame} getTextFrame={getTextFrame}/>
        <div className='py-6 px-8 text-neutral-500 text-[13px]'>
            Lorem ipsum dolor sit amet,<a href="/" className='text-white font-bold hover:underline'>consectetur
            adipisicing elit.</a> Accusantium at aut nihil quod tempora velit?
        </div>
        <div>
            <div className='flex justify-end items-center gap-4 pb-6 px-8'>
                <BaseCheckBox onClick={openFrameLink} id='checkbox'>Show code</BaseCheckBox>
                <BaseButton onClick={copyFrameCode} accent>{isCopy ? 'скопированно!': 'скопировать'}</BaseButton>
            </div>
        </div>
        <div className={`-z-10 absolute  -bottom-4 left-0 rounded-xl px-2 py-2 bg-[#121212] leading-5 tracking-wider ${classes}`}>
            <div className='text-[#fff] text-[13px] text-left bg-[#ffffff1a] py-2 px-4'>
                {textFrame}
            </div>
        </div>



    </BaseModal>
)
}

export default ThemodalEmbedPlaylist;
{/*<div className='relative flex items-end py-6 px-4 '>*/}
{/*    <div className='w-[152px] h-[152px] rounded-xl overflow-hidden mr-4'><img src={coverUrl} alt=""/></div>*/}
{/*    <div className='text-left flex-1 flex flex-col text-start items-baseline'>*/}
{/*        <h2 className='text-white font-bold text-2xl hover:underline cursor-pointer'>{title}</h2>*/}
{/*        <span className='text-[#b3b3b3] text-[14px] hover:underline cursor-pointer mt-2'>Spotify</span>*/}
{/*        <span className='text-[9px] text-black font-semibold leading-[10px] uppercase*/}
{/*         rounded-[2px] bg-neutral-400 px-[5px] py-[3px] cursor-pointer mt-8'>просмотр</span>*/}
{/*    </div>*/}
{/*    <div className='flex justify-between items-end h-full'>*/}
{/*        <BackwardIcon className='w-8 h-8 mr-4 fill-neutral-900 cursor-not-allowed'/>*/}
{/*        <ForwardIcon className=' w-8 h-8 mr-4 fill-neutral-900 cursor-not-allowed'/>*/}
{/*        <EllipsisHorizontalIcon className='w-8 h-8 mr-1'/>*/}
{/*        <PlayCircleIcon className='w-[52px] h-[52px]' />*/}
{/*    </div>*/}
{/*    <a href="/" className='absolute top-0 right-0 py-6 px-4'>*/}
{/*        <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="fill-white">*/}
{/*            <path*/}
{/*                d="M12 1a11 11 0 100 22 11 11 0 000-22zm5.045 15.866a.686.686 0 01-.943.228c-2.583-1.579-5.834-1.935-9.663-1.06a.686.686 0 01-.306-1.337c4.19-.958 7.785-.546 10.684 1.226a.686.686 0 01.228.943zm1.346-2.995a.858.858 0 01-1.18.282c-2.956-1.817-7.464-2.344-10.961-1.282a.856.856 0 01-1.11-.904.858.858 0 01.611-.737c3.996-1.212 8.962-.625 12.357 1.462a.857.857 0 01.283 1.179zm.116-3.119c-3.546-2.106-9.395-2.3-12.78-1.272a1.029 1.029 0 01-.597-1.969c3.886-1.18 10.345-.952 14.427 1.471a1.029 1.029 0 01-1.05 1.77z"></path>*/}
{/*        </svg>*/}
{/*    </a>*/}
{/*</div>*/}
{/*<div className='h-[152px] py-1 px-3 bg-neutral-500 text-[#b3b3b3] text-sm overflow-scroll'>*/}
{/*    {*/}
{/*        music?.map((item, index)=>*/}
{/*            <div className='flex items-center py-[8px] rounded-lg hover:bg-neutral-600 py-1 pr-2 group'>*/}
{/*                <div className='w-10 flex justify-center'>*/}
{/*                    <span className="cursor-pointer group-hover:hidden">{index}</span>*/}
{/*                    <span className='hidden group-hover:inline-block cursor-pointer'>*/}
{/*                    <PlayIcon className='w-5 h-5'/>*/}
{/*                </span>*/}
{/*                </div>*/}
{/*                <div className='leading-none'>*/}
{/*                    <h2 className='text-white cursor-default'>{item.name}</h2>*/}
{/*                    <span className='text-[11px] cursor-default'>{item.author}</span>*/}
{/*                </div>*/}
{/*                <span className=' flex-1 text-right'>{item.duration}</span>*/}
{/*            </div>*/}
{/*        )*/}
{/*    }*/}

{/*</div>*/}