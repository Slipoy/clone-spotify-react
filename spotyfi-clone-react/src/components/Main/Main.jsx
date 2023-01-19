import React from "react";
import Playlist from "./Playlist/Playlist";




const Main = ({toggleScrolling, showToast})=>{
    const playList= [
        {
            classes: '',
            title:"Lkailust TItle 1",
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam dicta explicabo necessitatibus recusandae. Aspernatur ' +
                'delectus dignissimos ipsa ipsam minima obcaecati officia provident, quaerat, quidem ratione repellatsequi soluta voluptas?',
            coverUrl:'https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster/'
        },
        {
            classes: 'hidden sm:block',
            title:"Lkailust TItle 2",
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam dicta explicabo necessitatibus recusandae. Aspernatur ' +
                'delectus dignissimos ipsa ipsam minima obcaecati officia provident, quaerat, quidem ratione repellatsequi soluta voluptas?',
            coverUrl:'https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster/'
        },
        {
            classes: 'hidden lg:block',
            title:"Lkailust TItle 3",
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam dicta explicabo necessitatibus recusandae. Aspernatur ' +
                'delectus dignissimos ipsa ipsam minima obcaecati officia provident, quaerat, quidem ratione repellatsequi soluta voluptas?',
            coverUrl:'https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster/'
        },
        {
            classes: 'hidden xl:block',
            title:"Lkailust TItle 4",
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam dicta explicabo necessitatibus recusandae. Aspernatur ' +
                'delectus dignissimos ipsa ipsam minima obcaecati officia provident, quaerat, quidem ratione repellatsequi soluta voluptas?',
            coverUrl:'https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster/'
        },
        {
            classes: 'hidden 2xl:block',
            title:"Lkailust TItle 5",
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam dicta explicabo necessitatibus recusandae. Aspernatur ' +
                'delectus dignissimos ipsa ipsam minima obcaecati officia provident, quaerat, quidem ratione repellatsequi soluta voluptas?',
            coverUrl:'https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster/'
        },
        {
            classes: 'hidden 3xl:block',
            title:"Lkailust TItle 6",
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam dicta explicabo necessitatibus recusandae. Aspernatur ' +
                'delectus dignissimos ipsa ipsam minima obcaecati officia provident, quaerat, quidem ratione repellatsequi soluta voluptas?',
            coverUrl:'https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster/'
        },
        {
            classes: 'hidden 4xl:block',
            title:"Lkailust TItle 7",
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam dicta explicabo necessitatibus recusandae. Aspernatur ' +
                'delectus dignissimos ipsa ipsam minima obcaecati officia provident, quaerat, quidem ratione repellatsequi soluta voluptas?',
            coverUrl:'https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster/'
        },
        {
            classes: 'hidden 5xl:block',
            title:"Lkailust TItle 8",
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam dicta explicabo necessitatibus recusandae. Aspernatur ' +
                'delectus dignissimos ipsa ipsam minima obcaecati officia provident, quaerat, quidem ratione repellatsequi soluta voluptas?',
            coverUrl:'https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster/'
        },
        {
            classes: 'hidden 6xl:block',
            title:"Lkailust TItle 9",
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam dicta explicabo necessitatibus recusandae. Aspernatur ' +
                'delectus dignissimos ipsa ipsam minima obcaecati officia provident, quaerat, quidem ratione repellatsequi soluta voluptas?',
            coverUrl:'https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster/'
        },

    ]

    return(
        <main className="text-white relative ">
            <div className="h-[275px] bg-gradient-to-b from-[#1f1f1f] to-[#121212] absolute w-full"></div>
            <div className="relative pt-[24px] pb-[48px] px-[32px] space-y-9">
                <div>
                    <div className="flex justify-between items-end mb-[8px]">
                        <div>
                            <h2 className="font-semibold hover:underline capitalize text-2xl">
                                <a href="spotyfi-clone-react/src/components/Main/Main#">HElo world
                                </a>
                            </h2>
                        </div>

                        <a href="spotyfi-clone-react/src/components/Main/Main#"
                           className="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6"> cklik</a>
                    </div>
                    <div className="grid grid-cols-main gap-5">
                        {
                            playList.map(item => <Playlist showToast={showToast} toggleScrolling={toggleScrolling} key={item.title} {...item} classes={item.classes}/>)
                        }
                        {/*<Playlist {...playList} classes="relative p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group"/>*/}

                    </div>
                </div>
            </div>
            <div className="relative pt-[24px] pb-[48px] px-[32px] space-y-9">
                <div>
                    <div className="flex justify-between items-end mb-[8px]">
                        <div>
                            <h2 className="font-semibold hover:underline capitalize text-2xl">
                                <a href="spotyfi-clone-react/src/components/Main/Main#">HElo world
                                </a>
                            </h2>
                        </div>

                        <a href="spotyfi-clone-react/src/components/Main/Main#"
                           className="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6"> cklik</a>
                    </div>
                    <div className="grid grid-cols-main gap-5">
                        <a href="spotyfi-clone-react/src/components/Main/Main#" className="relative p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster/" alt="photo"
                                     className="rounded shadow-lg"/>
                                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200
 translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                                    </svg>

                                </button>
                            </div>
                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Lkailust TItle</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. A aliquam dicta explicabo necessitatibus recusandae. Aspernatur delectus
                                dignissimos ipsa ipsam minima obcaecati officia provident, quaerat, quidem ratione repellat,
                                sequi soluta voluptas?
                            </p>
                            <ul className="absolute top-9 left-9 bg-[#282828] text-[#aeaeae] text-sm p-1 rounded
                            shadow-xl cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] z-10 hidden group-hover:block">
                                <li>
                                    <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                                        Add to Your Library
                                    </button>
                                </li>
                                <li className="relative">
                                    <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default
                                     flex justify-between items-center">
                                        Share
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                             stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                                        </svg>
                                    </button>
                                    <ul className="absolute top-0 left-full bg-[#282828] text-[#aeaeae] text-sm p-1 rounded
                            shadow-xl cursor-default ">
                                        <li>
                                            <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                                                Copy link to playlist
                                            </button>
                                        </li>
                                        <li>
                                            <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                                                Embed playlist
                                            </button>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                                        About recommendations
                                    </button>
                                </li>
                                <li>
                                    <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                                        Open in Desktop app
                                    </button>
                                </li>
                            </ul>
                        </a>
                        <a href="spotyfi-clone-react/src/components/Main/Main#" className="p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group ">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster/" alt=""
                                     className="rounded shadow-lg"/>
                                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200
 translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                                    </svg>

                                </button>
                            </div>
                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Lkailust TItle</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. A aliquam dicta explicabo necessitatibus recusandae. Aspernatur delectus
                                dignissimos ipsa ipsam minima obcaecati officia provident, quaerat, quidem ratione repellat,
                                sequi soluta voluptas?</p>
                        </a>
                        <a href="spotyfi-clone-react/src/components/Main/Main#" className="p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group  ">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster/" alt=""
                                     className="rounded shadow-lg"/>
                                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200
 translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                                    </svg>

                                </button>
                            </div>
                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Lkailust TItle</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. A aliquam dicta explicabo necessitatibus recusandae. Aspernatur delectus
                                dignissimos ipsa ipsam minima obcaecati officia provident, quaerat, quidem ratione repellat,
                                sequi soluta voluptas?</p>
                        </a>
                        <a href="spotyfi-clone-react/src/components/Main/Main#" className="p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group ">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster/" alt=""
                                     className="rounded shadow-lg"/>
                                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200
 translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                                    </svg>

                                </button>
                            </div>
                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Lkailust TItle</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. A aliquam dicta explicabo necessitatibus recusandae. Aspernatur delectus
                                dignissimos ipsa ipsam minima obcaecati officia provident, quaerat, quidem ratione repellat,
                                sequi soluta voluptas?</p>
                        </a>
                        <a href="spotyfi-clone-react/src/components/Main/Main#" className="p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group ">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster/" alt=""
                                     className="rounded shadow-lg"/>
                                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200
 translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                                    </svg>

                                </button>
                            </div>
                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Lkailust TItle</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. A aliquam dicta explicabo necessitatibus recusandae. Aspernatur delectus
                                dignissimos ipsa ipsam minima obcaecati officia provident, quaerat, quidem ratione repellat,
                                sequi soluta voluptas?</p>
                        </a>
                        <a href="spotyfi-clone-react/src/components/Main/Main#" className="p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster/" alt=""
                                     className="rounded shadow-lg"/>
                                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200
 translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                                    </svg>

                                </button>
                            </div>
                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Lkailust TItle</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. A aliquam dicta explicabo necessitatibus recusandae. Aspernatur delectus
                                dignissimos ipsa ipsam minima obcaecati officia provident, quaerat, quidem ratione repellat,
                                sequi soluta voluptas?</p>
                        </a>
                        <a href="spotyfi-clone-react/src/components/Main/Main#" className="p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster/" alt=""
                                     className="rounded shadow-lg"/>
                                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200
 translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                                    </svg>

                                </button>
                            </div>
                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Lkailust TItle</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. A aliquam dicta explicabo necessitatibus recusandae. Aspernatur delectus
                                dignissimos ipsa ipsam minima obcaecati officia provident, quaerat, quidem ratione repellat,
                                sequi soluta voluptas?</p>
                        </a>
                        <a href="spotyfi-clone-react/src/components/Main/Main#" className="p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster/" alt=""
                                     className="rounded shadow-lg"/>
                                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200
 translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                                    </svg>

                                </button>
                            </div>
                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Lkailust TItle</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. A aliquam dicta explicabo necessitatibus recusandae. Aspernatur delectus
                                dignissimos ipsa ipsam minima obcaecati officia provident, quaerat, quidem ratione repellat,
                                sequi soluta voluptas?</p>
                        </a>
                        <a href="spotyfi-clone-react/src/components/Main/Main#" className="p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster/" alt=""
                                     className="rounded shadow-lg"/>
                                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200
 translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                                    </svg>

                                </button>
                            </div>
                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Lkailust TItle</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. A aliquam dicta explicabo necessitatibus recusandae. Aspernatur delectus
                                dignissimos ipsa ipsam minima obcaecati officia provident, quaerat, quidem ratione repellat,
                                sequi soluta voluptas?</p>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Main