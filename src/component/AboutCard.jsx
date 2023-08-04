import React from 'react';
import userPic8 from "../assets/image/naija8.jpg";


const AboutCard = ({ data }) => {

    const { name, post, image } = data;

    return (

        <div className='group h-72 w-72 [perspective:1000px] cursor-pointer'>
            <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>


                <div className='absolute inset-0'>
                    <img className='h-full w-full rounded-xl object-cover shadow-xl shadow-black/40' src={image}></img>
                </div>
                <div className='absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                    <div className='flex min-h-full flex-col items-center justify-center'>
                        <h1 className='text-3xl font-bold'>{name}</h1>
                        <p className='text-lg'> {post}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCard