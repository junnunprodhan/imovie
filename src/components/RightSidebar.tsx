import React from 'react';
import Search from './Search';
import Image from 'next/image';
import { AiFillStar } from "react-icons/ai";
import Button from './Button';
const RightSidebar = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  return (
    <div className="w-1/5 p-6 m-5">
      <Search />
      <h5 className="text-lg my-2 font-bold">Popular Movies</h5>
      <div className='flex gap-4'>
        <div>
          <Image
            width={50} 
            height={80}
            src='https://i.ibb.co/18SY9sm/natural.jpg'
            alt='Popular Movie'
            className="img-fluid rounded-md"
          />
        </div>
        <div>
          <h3 className='font-bold'>Natural</h3>
          <p className='text-sm'>Action movie</p>
          <div className='flex gap-1'><AiFillStar className='text-yellow-400' /><AiFillStar className='text-yellow-400' />
          <AiFillStar className='text-yellow-400' /><AiFillStar className='text-gray-200' /><AiFillStar className='text-gray-200' /></div>
        </div>
        <h4>116:40</h4>
      </div>
      <div className='flex gap-4 my-5'>
        <div>
          <Image
            width={50} 
            height={80}
            src='https://i.ibb.co/J25t2Cw/freedoom.jpg'
            alt='Popular Movie'
            className="img-fluid rounded-md"
          />
        </div>
        <div>
          <h3 className='font-bold'>Freedom</h3>
          <p className='text-sm'>Action movie</p>
          <div className='flex gap-1'><AiFillStar className='text-yellow-400' /><AiFillStar className='text-yellow-400' />
          <AiFillStar className='text-yellow-400' /><AiFillStar className='text-yellow-400' /><AiFillStar className='text-gray-200' /></div>
        </div>
        <h4>116:40</h4>
      </div>
      <Button text="See More" onClick={handleClick} />
      <h5 className="text-lg my-2 font-bold">Watchlist</h5>
      <div className='flex gap-4'>
        <div>
          <Image
            width={50} 
            height={80}
            src='https://i.ibb.co/18SY9sm/natural.jpg'
            alt='Popular Movie'
            className="img-fluid rounded-md"
          />
        </div>
        <div>
          <h3 className='font-bold'>Natural</h3>
          <p className='text-sm'>Action movie</p>
          <div className='flex gap-1'><AiFillStar className='text-yellow-400' /><AiFillStar className='text-yellow-400' />
          <AiFillStar className='text-yellow-400' /><AiFillStar className='text-gray-200' /><AiFillStar className='text-gray-200' /></div>
        </div>
        <h4>116:40</h4>
      </div>
      <div className='flex gap-4 my-5'>
        <div>
          <Image
            width={50} 
            height={80}
            src='https://i.ibb.co/J25t2Cw/freedoom.jpg'
            alt='Popular Movie'
            className="img-fluid rounded-md"
          />
        </div>
        <div>
          <h3 className='font-bold'>Freedom</h3>
          <p className='text-sm'>Action movie</p>
          <div className='flex gap-1'><AiFillStar className='text-yellow-400' /><AiFillStar className='text-yellow-400' />
          <AiFillStar className='text-yellow-400' /><AiFillStar className='text-yellow-400' /><AiFillStar className='text-gray-200' /></div>
        </div>
        <h4>116:40</h4>
      </div>
      <div className='flex gap-4 my-5'>
        <div>
          <Image
            width={50} 
            height={80}
            src='https://i.ibb.co/J25t2Cw/freedoom.jpg'
            alt='Popular Movie'
            className="img-fluid rounded-md"
          />
        </div>
        <div>
          <h3 className='font-bold'>Freedom</h3>
          <p className='text-sm'>Action movie</p>
          <div className='flex gap-1'><AiFillStar className='text-yellow-400' /><AiFillStar className='text-yellow-400' />
          <AiFillStar className='text-yellow-400' /><AiFillStar className='text-yellow-400' /><AiFillStar className='text-gray-200' /></div>
        </div>
        <h4>116:40</h4>
      </div>
      <div className='flex gap-4 my-5'>
        <div>
          <Image
            width={50} 
            height={80}
            src='https://i.ibb.co/J25t2Cw/freedoom.jpg'
            alt='Popular Movie'
            className="img-fluid rounded-md"
          />
        </div>
        <div>
          <h3 className='font-bold'>Freedom</h3>
          <p className='text-sm'>Action movie</p>
          <div className='flex gap-1'><AiFillStar className='text-yellow-400' /><AiFillStar className='text-yellow-400' />
          <AiFillStar className='text-yellow-400' /><AiFillStar className='text-yellow-400' /><AiFillStar className='text-gray-200' /></div>
        </div>
        <h4>116:40</h4>
      </div>
      <Button text="See More" onClick={handleClick} />
    </div>
  );
};

export default RightSidebar;


