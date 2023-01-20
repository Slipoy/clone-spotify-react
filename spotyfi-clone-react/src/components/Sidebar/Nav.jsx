import React from "react";
import {HomeIcon, MagnifyingGlassIcon, BuildingLibraryIcon, PlusCircleIcon, HeartIcon} from '@heroicons/react/24/outline';
import NavItem from "./NavItem";


const Nav = ({showPopover})=>{

    const activeNavItemsClass = 'flex items-center text-white bg-[#282828] mx-2 px-4 py-2 rounded';
    const navItemClass = 'flex items-center hover:text-white  mx-2 px-4 py-2 rounded duration-300';
    const dataItems = [
        {
            label: "Home",
            class: activeNavItemsClass,
            icon: <HomeIcon className='w-6 h-6'/>,
            action: ()=>{
                showPopover('Create a playlist',
                    'Log in to create and share playlist')
            }
        },
        {
            label: 'Search',
            class: navItemClass,
            icon: <MagnifyingGlassIcon className='w-6 h-6'/>
        },
        {
            label: "Your Library",
            class: `${navItemClass} mb-6` ,
            icon:  <BuildingLibraryIcon className='w-6 h-6'/>,
            action: ()=>{
                showPopover('Enjoy Your Library',
                    'Log in to see saved songs, podcast, article, and playlist in Your Library ')
            }
        },
        {
            label: "Create Playlist",
            class: navItemClass,
            icon: <PlusCircleIcon className='2-6 h-6' />,
            action: ()=>{
                showPopover('Create a playlist',
                    'Log in to create and share playlist')
            }
        },
        {
            label: "Liked Songs",
            class: navItemClass,
            icon: <HeartIcon className='w-6 h-6'/>,
            action: ()=>{
                showPopover('Enjoy you liked Songs',
                    'Log in to see all the you liked in one easy playlist')
            }
        },
    ]
    return(
        <nav>
            {
                dataItems.map(item =>
                    <NavItem key={item.label} item={item}/>
                )
            }


        </nav>
    )
}
export default Nav