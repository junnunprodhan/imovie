import React from 'react';
import { AiFillHome ,AiFillSafetyCertificate,AiFillCompass,AiFillSketchCircle,AiFillBell,AiFillCheckSquare ,AiFillCreditCard,AiFillDownSquare,AiFillLayout,AiFillMediumSquare,AiFillRedditSquare,AiFillSetting,AiOutlineLogout } from "react-icons/ai";
const Sidebar = () => {
  return (
    <div className="bg-light p-3 px-5 mx-5">
        <h2 className='mb-5 text-3xl font-bold'>iMovie</h2>
      <h5 className=' font-bold'>MENU</h5>
      <ul className="list-unstyled mt-2">
        <li className='flex items-center mt-2 text-red-600'>
        <AiFillHome className="text-red-600 text-2xl mr-1"/> Home</li>
        <li className='flex items-center mt-2'>
        <AiFillSafetyCertificate className="mr-1 text-2xl"/> Community</li>
        <li className='flex items-center mt-2'>
        <AiFillCompass className="text-2xl mr-1"/> Discover</li>
        <li className='flex items-center mt-2'>
        <AiFillSketchCircle  className="text-2xl mr-1"/> Awards</li>
        <li className='flex items-center mt-2'>
        <AiFillBell className="text-2xl mr-1"/> Notifications</li>
      </ul>
      <h5 className='mt-5 font-bold'>LIBRARY</h5>
      <ul className="list-unstyled mt-2">
        <li className='flex items-center mt-2'>
        <AiFillCheckSquare className=" text-2xl mr-1"/> Recent</li>
        <li className='flex items-center mt-2'>
        <AiFillCreditCard className="mr-1 text-2xl"/> Top Rated</li>
        <li className='flex items-center mt-2'>
        <AiFillDownSquare className="text-2xl mr-1"/> Downloaded</li>
      </ul>
      <h5 className='mt-5 font-bold'>CATEGORIES</h5>
      <ul className="list-unstyled mt-2">
        <li className='flex items-center mt-2'>
        <AiFillLayout className=" text-2xl mr-1"/> Tv-Shows</li>
        <li className='flex items-center mt-2'>
        <AiFillMediumSquare  className="mr-1 text-2xl"/> Movie</li>
        <li className='flex items-center mt-2'>
        <AiFillRedditSquare className="text-2xl mr-1"/> Anime</li>
      </ul>
      <h5 className='mt-5 font-bold'>GENERAL</h5>
      <ul className="list-unstyled mt-2">
        <li className='flex items-center mt-2'>
        <AiFillSetting className=" text-2xl mr-1"/> Sittings</li>
        <li className='flex items-center mt-2'>
        <AiOutlineLogout className="mr-1 text-2xl"/> Log Out</li>
      </ul>
    </div>
  );
};

export default Sidebar;
