import React from 'react';
import Button from '../components/Button';

export default function Content() {
  return (
    <section className='w-full overflow-hidden px-6 py-4 md:px-32 md:py-32 bg-[#D8F6FF]'>
      <div className='container mx-auto md:h-[750px]'>
        <div className='grid grid-cols-12 h-full items-center justify-center gap-4 '>
          <div className='col-start-1 col-end-12 md:col-start-1 md:col-end-5'>
            <img
              src={`${process.env.PUBLIC_URL}/images/design/peter-1.png`}
              alt='Peter-1'
              className='w-[300px] h-[350px] md:w-[380px] md:h-[450px]'
            />
          </div>
          <div className='flex flex-col col-start-1 col-end-12 justify-around h-full md:col-start-5 md:col-end-13'>
            <div className='md:pl-20'>
              <h2 className='font-semibold text-4xl md:text-5xl text-dark md:py-12'>
                Requirements gathering and analysis for references.
              </h2>
              <p className='text-dark font-light py-5 '>
                Convallis turpis erat tempus, viverra aliquet. Nullam viverra
                nam auctor sit ipsum malesuada a, duis volutpat. Convallis
                turpis erat tempus, viverra aliquet. Nullam viverra nam auctor
                sit ipsum malesuada a, duis volutpat.
              </p>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/design/peter-2.png`}
              alt='Peter-2'
            />
          </div>
        </div>
      </div>
      <div className='container mx-auto py-16 md:py-24'>
        <div className='grid grid-cols-12 items-center justify-center gap-4 md:gap-8'>
          <div className='col-start-1 col-end-12 md:col-start-1 md:col-end-7'>
            <img
              src={`${process.env.PUBLIC_URL}/images/design/peter-3.png`}
              alt='Peter-3'
              className='w-[385px] h-[355px] md:w-[575px] md:h-[575px]'
            />
          </div>
          <div className='col-start-1 col-end-12 md:col-start-7 md:col-end-13 flex flex-col justify-center'>
            <h3 className='text-3xl md:text-4xl font-semibold'>
              The best design for your studio website
            </h3>
            <p className='text-base font-light my-3 md:my-6'>
              Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam
              auctor sit ipsum malesuada duis volutpat.
            </p>
            <Button
              type='link'
              isExternal
              target='_blank'
              href='https://www.facebook.com/'
              className='text-primary underline hover:text-blue-500'>
              Experience Team
            </Button>
          </div>
          <br />
          <br />
          <div className='col-start-1 col-end-12 md:col-start-1 md:col-end-7 flex flex-col justify-center'>
            <h3 className='text-3xl md:text-4xl font-semibold'>
              The best design for your studio website
            </h3>
            <p className='text-base font-light my-3 md:my-6'>
              Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam
              auctor sit ipsum malesuada duis volutpat.
            </p>
            <Button
              type='link'
              isExternal
              target='_blank'
              href='https://www.facebook.com/'
              className='text-primary underline hover:text-blue-500'>
              Experience Team
            </Button>
          </div>
          <div className='col-start-1 col-end-12 md:col-start-7 md:col-end-133'>
            <img
              src={`${process.env.PUBLIC_URL}/images/design/peter-4.png`}
              alt='Peter-4'
              className='w-[385px] h-[355px] md:w-[575px] md:h-[575px]'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
