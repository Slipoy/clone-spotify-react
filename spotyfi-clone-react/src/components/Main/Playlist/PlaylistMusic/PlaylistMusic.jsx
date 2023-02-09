import React from "react";
import Logo from "../../../Sidebar/Logo";
import PlaylistBtn from "../PlaylistBtn";





function PlaylistMusic(){
    return(
        <main className="text-white relative bg-[#121212]">
            <div className="bg-[rgb(144,168,192)] h-[340px] absolute -top-[110px] w-full">
                {/*<div className="bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,.5)] h-full w-full"></div>*/}
            </div>
            <div className="relative bg-[rgb(144,168,192)] bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,.5)] h-[270px] w-full pb-6 px-8 flex items-end">
                    <div className="text-white flex items-end">
                        <div className='max-w-[232px] h-auto shadow-3xl mr-6'>
                            <img src="https://i.scdn.co/image/ab67706f00000003ca5a7517156021292e5663a6" alt="#"/>
                        </div>
                        <div className='flex flex-col'>
                            <span className='uppercase font-bold text-xs'>плейлист</span>
                            <h2 className='text-8xl font-bold font-[90px]'>Peaceful Piano</h2>
                            <p className='font-[14px] text-[#FFFFFFB2] text-14px font-normal mt-8 mb-1'>Relax and indulge with beautiful piano pieces</p>
                            <div className='flex items-center text-sm'>
                                <div className='flex gap-1 items-center'>
                                    <img className='w-[24px] h-[24px]w-full rounded-full' src="https://i.scdn.co/image/ab67757000003b8255c25988a6ac314394d3fbf5" alt=""/>
                                    <span className='font-bold'>Spotify</span>
                                </div>
                                <div className='font-normal'>
                                    <span className='before:content-["•"] before:mx-[4px]'>6 874 437 лайков</span>
                                    <span className='before:content-["•"] before:mx-[4px]'>316 треков,<span className='text-[#FFFFFFB2]'>примерно 11ч</span></span>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>

            <div>
                <div>
                    <div>
                        <PlaylistBtn/>
                    </div>
                    <div>
                        <span></span>
                    </div>
                    <div>

                    </div>
                </div>
            </div>



            <div className='w-full  h-[100px] pb-[48px] px-[32px]'>
                <div className='w-full border-t-neutral-400 mt-10 border-t' ></div>
            </div>
        </main>

    )
}

export default PlaylistMusic;