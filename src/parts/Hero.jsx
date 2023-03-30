import React from 'react';
import Button from '../components/Button';
import useAnalyticsEventTracker from '../components/Analytics/useAnalyticTracker';

export default function Hero() {
  const gaEventTracker = useAnalyticsEventTracker('Get in touch');
  return (
    <section className='w-full overflow-hidden'>
      <div className='w-full mx-auto px-6 pt-8 pb-24 md:px-0 md:pl-32 md:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center'>
          <div className='w-full h-full container flex flex-col justify-around'>
            <div>
              <div className='my-4'>
                <h1 className='text-xl text-pastel uppercase my-4'>
                  Design Inspiration
                </h1>
                <h2 className='font-bold text-4xl md:text-5xl capitalize text-dark'>
                  Consult Your <br />
                  Bussiness With Us.
                </h2>
              </div>
              <Button
                type='link'
                href='#'
                onClick={() => gaEventTracker('contact')}
                className='button items-center justify-center mt-12 w-40'
                isPrimary
                isFlex
                isRounded>
                Get In Touch
              </Button>
            </div>
            <div>
              <h5 className='font-normal text-base md:text-2xl'>
                I feel so much less stressed ❤️ <br /> as I now know by the
                book.”
              </h5>
              <div className='flex items-center justify-start my-4'>
                <img
                  src={`${process.env.PUBLIC_URL}/images/design/rounded-people-1.png`}
                  alt='Catherine'
                  className='w-[60px] h-[60px]'
                />
                <div className='ml-3'>
                  <p className='font-semibold text-base'>Catherine Ford</p>
                  <p className='text-[12px] font-light'>CEO</p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-full hidden md:block'>
            <img
              src={`${process.env.PUBLIC_URL}/images/design/bg.png`}
              alt='Background'
              className='object-cover object-center'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
