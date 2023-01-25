import BaseModal from "./BaseModal";
import React from "react";


function TheModalRecommendation({onClose: handleClose}){

return(
    <BaseModal classes={'bg-[#333] h-80 w-[480px]'} onClose={handleClose}>
        <h1 className='text-3xl pt-8 pb-3 px-8 font-bold leading-relaxed border-b border-neutral-600'>About recommanedations</h1>
        <div className='py-6 px-8 overflow-y-auto'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cum doloremque exercitationem ipsam, labore nam nisi sed. Blanditiis dicta, error fuga inventore nam voluptatibus. Accusamus assumenda dolores facere maiores rem.lorem
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi assumenda debitis ea, harum id inventore ipsa neque quibusdam quo repellat tempore ullam unde velit vero. In quasi recusandae suscipit!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, at doloremque doloribus explicabo laborum nam possimus praesentium quo, reprehenderit saepe sapiente tempora? Quas, repellat repudiandae. Adipisci eos numquam repellat voluptatem.
        </div>
    </BaseModal>
)
}


export default TheModalRecommendation