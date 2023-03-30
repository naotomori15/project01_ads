import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import Button from '../components/Button';

export default function Carousel() {
  const [sliderRef, setSliderRef] = useState();

  const carouselContent = [
    {
      title: 'Konsultasi Bisnis',
      description:
        'Memberikan saran dan rekomendasi untuk meningkatkan efisiensi operasional dan keuntungan bisnis, melakukan analisis SWOT, identifikasi target pasar, dan strategi pengembangan produk.',
      isLink: false,
    },
    {
      title: 'Konsultasi Keuangan',
      description:
        'Memberikan saran untuk mengelola keuangan perusahaan secara efektif, meningkatkan margin keuntungan, mengidentifikasi sumber pendanaan yang tepat, dan mengevaluasi potensi investasi.',
      isLink: true,
    },
    {
      title: 'Konsultasi Pemasaran',
      description:
        'Memberikan rekomendasi untuk meningkatkan branding, promosi, dan kampanye pemasaran, mengevaluasi target pasar dan pesaing, serta mengembangkan strategi pemasaran yang efektif.',
      isLink: false,
    },
    {
      title: 'Konsultasi SDM',
      description:
        'Memberikan saran dalam hal manajemen karyawan, pengembangan keterampilan, dan meningkatkan kinerja tim.',
      isLink: true,
    },
    {
      title: 'Konsultasi Hukum',
      description:
        'Memberikan saran dan rekomendasi dalam hal pengaturan perjanjian dan kontrak, masalah hukum, dan kewajiban perusahaan sesuai dengan peraturan dan undang-undang yang berlaku.',
      isLink: false,
    },
  ];
  const responsiveSetting = {
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider
        ref={setSliderRef}
        slidesToShow={3}
        slidesToScroll={3}
        arrows={false}
        infinite={false}
        speed={500}
        {...responsiveSetting}>
        {carouselContent.map((card, index) => (
          <div
            key={index}
            className='bg-light shadow-lg px-8 py-5 md:px-14 md:py-10 h-[300px] md:h-[350px]'>
            <div>
              <h2 className='text-dark text-3xl font-semibold my-4'>
                {card.title}
              </h2>
              <p className='text-dark font-light text-base'>
                {card.description}
              </p>
              <div className='my-4'>
                <Button
                  href={card.isLink ? 'https://facebook.com' : null}
                  type='link'
                  isExternal
                  target='_blank'
                  className={`${
                    card.isLink
                      ? 'text-primary hover:text-blue-500 cursor-pointer'
                      : 'text-dark'
                  }`}>
                  Experience Team
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className='controls'>
        <button onClick={sliderRef?.slickPrev}>
          <FiArrowLeft className='text-4xl text-pastel hover:text-dark transition-all' />
        </button>
        <button onClick={sliderRef?.slickNext}>
          <FiArrowRight className='text-4xl text-pastel hover:text-dark transition-all' />
        </button>
      </div>
    </div>
  );
}
