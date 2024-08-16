import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h2 className="text-2xl font-bold">IMovieApp</h2>
            <p className="text-gray-400 mt-2">Your one-stop destination for movies and TV shows.</p>
          </div>
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-500 transition duration-300">Home</a></li>
              <li><a href="#" className="hover:text-pink-500 transition duration-300">Movies</a></li>
              <li><a href="#" className="hover:text-pink-500 transition duration-300">TV Shows</a></li>
              <li><a href="#" className="hover:text-pink-500 transition duration-300">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-pink-500 transition duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-pink-500 transition duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-pink-500 transition duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-pink-500 transition duration-300">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h3>
            <form>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 rounded-l-md text-gray-800 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-pink-500 hover:bg-pink-600 transition duration-300 text-white p-2 rounded-r-md"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-400">© 2024 IMovieApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
