import { Navbar } from 'flowbite-react';
import React from 'react';
import Button from '../components/Button';

export default function Header() {
  return (
    <header className='bg-gradient-to-t from-[#fff] to-[#FFF4D4]'>
      <div className='container mx-auto'>
        <Navbar
          fluid={true}
          rounded={true}>
          <Navbar.Brand to='/navbars'>
            <img
              src={`${process.env.PUBLIC_URL}/images/design/logo.svg`}
              className='mr-3 sm:h-9'
              width={80}
              height={80}
              alt='Space Logo'
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='nav-ul'>
            <Navbar.Link
              className='text-primary'
              href='/navbars'>
              Home
            </Navbar.Link>

            <Button
              isFlex
              isTransparent
              className='px-2 py-1'>
              Get In Touch
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
}
