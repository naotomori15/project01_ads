import React from 'react';

export default function Testimonial() {
  const arrTesti = [
    {
      imageURL: 'rounded-people-2.png',
      name: 'Andry Ford',
      job: 'CEO WhatEver',
      description:
        "Every single person comes away and says - wow that's a reallyslick experience, that was so easy to use. I feel so much less stressed as I now know we’re doing everything by the book.",
    },
    {
      imageURL: 'rounded-people-1.png',
      name: 'Andry Ford',
      job: 'CEO WhatEver',
      description:
        'I feel so much less stressed ❤️ as I now know we’re doing everything by the book.',
    },
  ];
  return (
    <section className='w-full overflow-hidden'>
      <div className='flex justify-between'>
        <img
          src={`${process.env.PUBLIC_URL}/images/design/left.svg`}
          alt='Left'
          className='w-[60px] md:w-full'
        />
        <div className='container mx-auto'>
          <div className='px-2 md:px-52 flex flex-col'>
            {arrTesti.map((item, index) => (
              <div key={index}>
                <p className='text-dark text-2xl'>"{item.description}"</p>
                <div className='flex items-center gap-y-1 gap-x-4'>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/design/${item.imageURL}`}
                    width={60}
                    height={60}
                    className='my-5 md:my-10'
                    alt={item.name}
                  />
                  <div>
                    <h6 className='text-xl text-dark'>{item.name}</h6>
                    <p className='text-sm font-light'>{item.job}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/images/design/right.svg`}
          alt='Right'
          className='w-[60px] md:w-auto'
        />
      </div>
    </section>
  );
}
