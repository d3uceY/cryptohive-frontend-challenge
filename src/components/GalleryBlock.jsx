import React from 'react';
import play2 from '../assets/play2.svg';


// GalleryBlock component displays an image with overlay information
// Props:
// - data: Object containing:
//   - img: Image source URL
//   - amount: Number to display in top right corner
//   - plays: Number of plays to display at bottom
export default function GalleryBlock(props) {
  const { img, amount, plays } = props.data;
  return (
    <div className=' rounded-lg relative overflow-hidden'>
      {/* Main image */}
      <img src={img} alt="gallery" className='block w-full h-full object-cover' />
      
      <div className='absolute bottom-0 left-0 w-full h-full p-2'>
        {/* Amount indicator in top right */}
        <div className="amount rounded-full w-6 h-6 flex items-center justify-center bg-blackfaded absolute right-2">
          <div className='text-white font-medium text-[12px]'>
            {amount}
          </div>
        </div>

        {/* Play count indicator at bottom */}
        <div className="plays absolute bottom-2 left-0 right-0 mx-auto w-fit flex items-center gap-1 text-grey font-bold bg-white px-2 rounded-2xl">
          <img className='h-[10px]' src={play2} alt="play" />
          <p className='play-count text-[11px]'>{plays}</p>
        </div>
      </div>
    </div>
  )
}
