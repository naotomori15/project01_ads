import React from 'react';
import Button from '../components/Button';

export default function Footer() {
  const date = new Date();
  return (
    <footer className='w-full overflow-hidden bg-dark px-6 md:px-32 py-12'>
      <div className='container w-full mx-auto'>
        <div className='grid grid-cols-12 justify-center gap-y-6 md:gap-y-0 gap-x-4'>
          <div className='col-start-1 col-end-12 md:col-start-1 :col-end-7'>
            <img
              src={`${process.env.PUBLIC_URL}/images/design/logo-dark.svg`}
              className='mr-3 sm:h-9'
              width={80}
              height={80}
              alt='Space Logo'
            />
            <p className='font-light text-pastel my-4'>
              The best design for your web studio website. Vitae nulla nunc
              euismod vel pretium tellus accumsan semper. Vitae nulla nunc
              euismod vel pretium tellus accumsan semper.
            </p>
          </div>
          <div className='col-start-1 col-end-12 md:col-start-7 md:col-end-9'>
            <h5 className='text-pastel font-normal'>Pages</h5>
            <ul className='my-4 text-white '>
              <li>
                <Button
                  type='link'
                  className=' hover:text-primary hover:underline transition-all'>
                  Templates
                </Button>
              </li>
              <li>
                <Button
                  type='link'
                  className=' hover:text-primary hover:underline transition-all'>
                  Prices
                </Button>
              </li>
              <li>
                <Button
                  type='link'
                  className=' hover:text-primary hover:underline transition-all'>
                  Help
                </Button>
              </li>
              <li>
                <Button
                  type='link'
                  className=' hover:text-primary hover:underline transition-all'>
                  Contact
                </Button>
              </li>
            </ul>
          </div>
          <div className='col-start-1 col-end-12 md:col-start-9 md:col-end-11'>
            <h5 className='text-pastel font-normal'>Demos</h5>
            <ul className='my-4 text-white '>
              <li>
                <Button
                  type='link'
                  className=' hover:text-primary hover:underline transition-all'>
                  Dark Theme
                </Button>
              </li>
              <li>
                <Button
                  type='link'
                  className=' hover:text-primary hover:underline transition-all'>
                  Light Theme
                </Button>
              </li>
              <li>
                <Button
                  type='link'
                  className=' hover:text-primary hover:underline transition-all'>
                  Classic Themes
                </Button>
              </li>
            </ul>
          </div>
          <div className='col-start-1 col-end-12 md:col-start-11 md:col-end-12'>
            <h5 className='text-pastel font-normal'>Resource</h5>
            <ul className='my-4 text-white '>
              <li>
                <Button
                  type='link'
                  className=' hover:text-primary hover:underline transition-all'>
                  Documentations
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className='grid grid-cols-2 justify-between pt-12'>
          <p className='text-pastel font-light'>
            © {date.getFullYear()} All Rights Reserved.
          </p>
          <p className='text-white font-normal text-end'>Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
