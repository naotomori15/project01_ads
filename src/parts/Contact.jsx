import React from 'react';
import Button from '../components/Button';

export default function Contact() {
  return (
    <section className='w-full overflow-hidden px-4 py-16 md:px-32 md:pt-16 md:pb-32'>
      <div className='w-full relative container mx-auto bg-gradient-to-t from-[#fff] to-[#FFF4D4] px-6 py-8 rounded-md md:px-32 md:py-16'>
        <div className='w-full flex flex-wrap md:flex-nowrap justify-between'>
          <div className='relative z-10'>
            <h1 className='text-dark text-2xl md:text-3xl my-4 font-normal'>
              All-in-one platform for business
            </h1>
            <p className='text-dark font-light'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{' '}
              Provident dolorem culpa sunt atque illo itaque.
            </p>
          </div>
          <div>
            <Button
              isPrimary
              className='button z-10 relative mt-6 mb-4'
              isRounded>
              Get In Touch
            </Button>
            <img
              src={`${process.env.PUBLIC_URL}/images/design/white_shape.svg`}
              className='absolute top-0 bottom-0 right-0 z-0'
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  );
}
