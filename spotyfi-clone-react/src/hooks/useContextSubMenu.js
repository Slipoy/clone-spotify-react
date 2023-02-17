import {useRef, useState} from "react";
import {useEffect} from "react";


function useContextSubMenu(onClose, ref){

    const [isSubMenu, setIsSubMenu]= useState(false)
    const [menuPositionXclass, setMenuPositionXClass] = useState('left-full');
    // const [menuPositionYclass, setMenuPositionYClass] = useState('top-0');

    let closeMenuTimer = null;



    const getMenuPositionXclasses = ()=>{
        if (ref){
            const menuItem = ref.current;
            const menuWidth = menuItem.offsetWidth;
            const windowWidth = window.innerWidth;
            const menuItemAndCoordinate = menuItem.getBoundingClientRect().right;
            const shouldMoveLeft = menuWidth > windowWidth - menuItemAndCoordinate;
            return shouldMoveLeft ? 'right-full' : 'left-full'
        }

    };
    // const getMenuPositionYclasses = ()=>{
    //     const menuItem = menuItemRef.current;
    //     const menuHeight = menuItem.offsetHeight;
    //     const windowHeight = window.innerHeight;
    //     const menuItemAndCoordinate = menuItem.getBoundingClientRect().right;
    //     const shouldMoveLeft = menuHeight > windowHeight - menuItemAndCoordinate;
    //     return shouldMoveLeft ? 'right-full' : 'left-full'
    // }

    const openSubMenu = ()=>{
        if (closeMenuTimer){
            stopCloseSubMenuTimer()
            return
        }
        setIsSubMenu(true)
        setMenuPositionXClass(getMenuPositionXclasses())
        // setMenuPositionXClass(getMenuPositionYclasses())

    }
    const closeSubMenu = ()=>{
        setIsSubMenu(false)
    }
    const startCloseSubMenuTimer = ()=>{
        closeMenuTimer = setTimeout(closeSubMenu, 100)
    }
    const stopCloseSubMenuTimer = ()=>{
        clearTimeout(closeMenuTimer)
    }



    return{
        openSubMenu,
        startCloseSubMenuTimer,
        isSubMenu,
        menuPositionXclass
    }
}

export default useContextSubMenu;