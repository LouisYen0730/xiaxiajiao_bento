
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-warm-gray text-amber-100 body-font border-t-4 border-brand-primary">
      <div className="container px-5 py-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
             <a className="flex title-font font-medium items-center justify-center md:justify-start text-white">
                <span className="text-2xl">嗄嗄叫便當店</span>
            </a>
            <p className="mt-2 text-base text-gray-400">
              © {new Date().getFullYear()} — All Rights Reserved
            </p>
          </div>
          <div>
            <p className="text-base text-gray-300">台北市內湖區星雲街17號</p>
            <p className="text-base text-gray-400">(02) 2795-5225</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;