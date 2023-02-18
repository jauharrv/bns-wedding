/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/future/image';
import React from 'react';
import Carousel from './Carousel';
import Shape1 from './Shape1';
import Text from './Text';

const Card = ({ description, title, year, image }) => {
  return (
    <div className="bg-purple-50 rounded-md shadow-md overflow-hidden p-2 min-h-[335px]">
      <div className="flex items-center justify-center space-x-2 py-2">
        <Text>{title}</Text>
        <span>|</span>
        <span className="text-sm font-medium">{year}</span>
      </div>
      <Image src={image} className="object-cover aspect-[16/10]" width={640} height={480} />
      {/* <Image src={image} className="object-cover aspect-video" width={640} height={480} /> */}

      <div className="mt-4">
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
};

const story = [
  {
    title: 'Kenalan',
    year: '2014',
    description:
      'Sebelumnya kami satu sekolah di SMP 26. Namun memulai masa pendekatan pada tahun 2014 saat SMA dan kami pernah dalam satu organisasi yang sama',
    image: '/images/story1.jpg',
  },
  {
    title: 'Relationship',
    year: 'Juli 2017',
    description:
      'Berpisah dua tahun, kami komitmen dan menjalin hubungan di tahun 2017. Lika liku berproses dilalui bersama hingga LDR selama kurang lebih 4 tahun',
    image: '/images/story2.jpg',
  },
  {
    title: 'Purpose',
    year: '19 Desember 2022',
    description:
      'Kami menggelar lamaran resmi mengungkapkan niat baik yang disaksikan oleh dua kerabat besar dan kerabat dekat. Dan memutuskan menggelar acara pernikahan tanggal 05 februari 2023',
    image: '/images/story3.jpg',
  },
];

const Section6 = () => {
  return (
    <section className="bg-[#cdb4db] px-6 mt-8 py-8 text-purple-900 relative overflow-hidden z-20">
      <div className="text-center" data-aos="fade-down">
        <Text className="text-2xl ">Our Story</Text>
      </div>
      <div className="text-center mt-8 relative z-10 -mx-6" data-aos="fade-up">
        <Carousel>
          {story.map((s, i) => (
            <div key={String(i)} className={'pl-4 py-1 ' + (i === story.length - 1 ? 'pr-4' : '')}>
              <Card {...s} />
            </div>
          ))}
        </Carousel>
      </div>

      <Shape1
        className="absolute top-[1px] right-[-105px] rotate-45 z-[0]"
        height="300"
        fill="#e8dbf1"
      />
      <Shape1 className="absolute bottom-[-112px] left-[-89px] z-[0]" height="300" fill="#e8dbf1" />
    </section>
  );
};

export default Section6;
