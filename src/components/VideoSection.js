/* eslint-disable jsx-a11y/alt-text */
import { PlayIcon } from '@heroicons/react/24/solid';
import Image from 'next/future/image';
import React, { useState } from 'react';
import Carousel from './Carousel';
import Modal from './Modal';
import Shape1 from './Shape1';

const Card = ({ image, videoId }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-purple-50 rounded-md shadow-md overflow-hidden p-2">
        <div className="relative rounded-md bg-black" onClick={() => setOpen(true)}>
          <Image
            src={image}
            className="object-contain aspect-video rounded-md opacity-60"
            width={640}
            height={480}
          />

          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="p-4 bg-white/30 rounded-full">
              <PlayIcon className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={async () => {
          setOpen(false);
        }}
      >
        <div className="flex items-center justify-center h-full w-full">
          <iframe
            id={videoId}
            type="text/html"
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&start=1&fs=1`}
            frameBorder="0"
          ></iframe>
        </div>
      </Modal>
    </>
  );
};

const story = [
  {
    image: '/images/yt1.jpeg',
    // id: 'M3rxbqq_4QY',
    id: 'SJjC4ZKovvc',
  },
  {
    image: '/images/yt2.jpg',
    // id: 'r-guMmS4iDU',
    id: 'u2-S8g3C-94',
  },
];

const VideoSection = () => {
  return (
    <section className="bg-[#cdb4db] px-6 py-8 text-purple-900 relative overflow-hidden z-20">
      <div className="text-center relative z-10 -mx-6" data-aos="fade-up">
        <Carousel slidesToShow={1.1} slidesToScroll={1}>
          {story.map((s, i) => (
            <div key={String(i)} className={'pl-4 py-1 '}>
              <Card {...s} videoId={s.id} />
            </div>
          ))}
        </Carousel>
      </div>

      <Shape1
        className="absolute top-[1px] right-[-105px] rotate-45 z-[0]"
        height="300"
        fill="#e8dbf1"
      />
      <Shape1 className="absolute bottom-[-70px] left-[-89px] z-[0]" height="300" fill="#e8dbf1" />
    </section>
  );
};

export default VideoSection;
