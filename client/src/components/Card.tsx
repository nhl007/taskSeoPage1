import { BsStack } from 'react-icons/bs';
import { AiOutlinePaperClip } from 'react-icons/ai';

import { FaCalendarAlt } from 'react-icons/fa';
import { PiChatsCircleBold } from 'react-icons/pi';

import { useState } from 'react';
import { AttachModal } from '.';

const Card = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  return (
    <div className=' bg-white text-slate-700 p-2 flex flex-col gap-3 rounded-[5px]'>
      {/* //? client name */}
      <div className=' flex justify-between'>
        <div className=' flex gap-1 items-center'>
          <img
            src='/image1.jpg'
            width={24}
            height={24}
            className=' w-6 h-6 rounded-full object-cover'
          />
          <p className=' text-xs font-medium'>Client Name</p>
        </div>
        <div className=' flex gap-1 items-center'>
          <img
            src='/image2.avif'
            width={24}
            height={24}
            className=' w-6 h-6 rounded-full object-cover'
          />
          <p className=' text-xs font-medium'>Sadik Istiak</p>
        </div>
      </div>
      {/* //? client name */}

      <div className=' flex justify-between items-center'>
        <span className=' flex text-xs items-center gap-1 max-w-[200px] max-h-2 whitespace-wrap'>
          <BsStack className='w-4 h-4' />
          Lorem ipsum dolor sit amet...
        </span>

        <span className=' bg-slate-100 p-1 flex gap-1 items-center font-bold text-xs'>
          <FaCalendarAlt className='w-3 h-3' />
          1/2
        </span>
      </div>

      {/* //?controls */}

      <div className=' flex justify-between items-center text-xs font-medium'>
        <img
          src='/image3.webp'
          width={24}
          height={24}
          className=' w-6 h-6 rounded-full object-cover'
        />

        <img
          src='/image4.avif'
          width={24}
          height={24}
          className=' w-6 h-6 rounded-full object-cover'
        />

        <span className='w-6 h-6 rounded-full bg-slate-100 flex  justify-center items-center'>
          12+
        </span>
        <PiChatsCircleBold className='w-4 h-4' />
        <span>15</span>
        <AiOutlinePaperClip
          className='w-4 h-4 cursor-pointer'
          onClick={() => setIsOpen(true)}
        />
        <span>{count}</span>

        <span className=' flex gap-1 items-center '>
          <FaCalendarAlt className='w-3 h-3' />
          30-12-2022
        </span>
      </div>

      {isOpen && <AttachModal setIsOpen={setIsOpen} setCount={setCount} />}
    </div>
  );
};

export default Card;
