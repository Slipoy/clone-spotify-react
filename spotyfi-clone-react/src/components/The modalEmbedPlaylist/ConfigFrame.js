import React, {useState} from "react";
import {QuestionMarkCircleIcon} from "@heroicons/react/24/solid";


function ConfigFrame({changeSize, sizeFrame}){
    const [isSupportItem, setSupportItem] = useState(false);

    return(
        <div className='w-[600px] mx-auto flex justify-between'>
            <div className='flex items-center gap-3'>
                <label>Цвет:</label>
                <span className='rounded-full w-[24px] h-[24px] border inline-block bg-[#b3b3b3]'></span>
                <span className='rounded-full w-[24px] h-[24px] border inline-block'></span>
            </div>
            <form onChange={changeSize} className='text-[#b3b3b3] flex gap-2'>
                <label>Размер:</label>
                <select name='height' className='h-8 w-full text-[14px] font-normal leading-5 py-0 pr-8 pl-[12px] bg-[#333] rounded-sm border-neutral-500' id="">
                    <option value='352'>Нормально (352px)</option>
                    <option value='152'>Компактный (152px)</option>
                </select>
                <span>&#215;</span>
                <div className='relative w-full max-w-[140px]'>
                    <input name='width' value={sizeFrame.width} type="text" placeholder='100%'
                           className='h-8 w-full  text-[14px] font-normal leading-5 py-0 pr-8 pl-[12px] bg-[#333] rounded-sm border-neutral-500'/>
                    <div onMouseEnter={()=>setSupportItem(true)} onMouseLeave={()=>setSupportItem(false)} className='group'>
                        <QuestionMarkCircleIcon className='fill-neutral-600 bg-neutral-400 rounded-full w-4 h-4 absolute right-2 top-2'/>
                        {
                            isSupportItem && <div className='absolute top-6 right-2 w-[240px] bg-[#282828] text-[12px] overflow-hidden p-3 rounded-xl'>
                                Если установить масштаб 100%, ширина проигрывателя будет автоматически подстраиваться под экраны телефона и компьютера.
                            </div>
                        }
                    </div>

                </div>

            </form>
        </div>
    )
}
export default ConfigFrame;
