import React from 'react';

export default function OurTeam() {
  const peopleCard = [
    {
      imageURL: 'man-1.png',
      name: 'Bapak Asep',
      job: 'CTO Space',
    },
    {
      imageURL: 'women-1.png',
      name: 'Ibu Sarminah',
      job: 'Profesional Consultant',
    },
    {
      imageURL: 'man-2.png',
      name: 'Bapak Martin',
      job: 'Bisnis Marketing',
    },
    {
      imageURL: 'women-2.png',
      name: 'Mbak Ani',
      job: 'Profesional Consultant',
    },
  ];
  return (
    <section className='w-full overflow-hidden px-6 py-12 md:px-32 md:py-32'>
      <h1 className='text-center text-dark font-semibold my-2 md:my-5 text-3xl md:text-5xl'>
        Our Leadership
      </h1>
      <p className='text-dark font-light text-center'>
        Tim kami terdiri orang-orang terbaik dari yang terbaik.
      </p>
      <div className='w-full container mx-auto pt-20 pb-12'>
        <div className='w-full grid grid-cols-1 gap-y-10 md:grid-cols-4 items-center justify-center md:gap-x-4'>
          {peopleCard.map((item, index) => (
            <div
              key={index}
              className='rounded-md'>
              <img
                src={`${process.env.PUBLIC_URL}/images/design/${item.imageURL}`}
                className='w-full h-full'
                alt={item.name}
              />
              <div className='text-center'>
                <h6 className='text-dark font-semibold text-2xl mt-4 mb-1'>
                  {item.name}
                </h6>
                <p className='text-dark font-light'>{item.job}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
