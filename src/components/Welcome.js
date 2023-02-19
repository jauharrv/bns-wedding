/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Carousel from './Carousel';
import Image from 'next/future/image';
import Text from './Text';
import { EnvelopeOpenIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import { useAppcontext } from '~context/AppContext';

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 999,
};

const images = [
  {
    url: '/images/cover/cover1.jpg',
  },
  {
    url: '/images/cover/cover2.jpg',
  },
  {
    url: '/images/cover/cover3.jpg',
  },
];

export default function Welcome({}) {
  const [isBrowser, setIsBrowser] = useState(false);
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const { togglePlay } = useAppcontext();
  const nama = router?.query?.nama?.split('-').join(' ');

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    if (isBrowser && open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [open, isBrowser]);

  const overlay = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  if (isBrowser) {
    return ReactDom.createPortal(
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              variants={overlay}
              animate="visible"
              initial="hidden"
              style={OVERLAY_STYLES}
              className="flex flex-col items-center justify-center overflow-y-auto overflow-hidden"
              //   onClick={onClick}
            >
              <motion.div
                className="w-screen h-screen overflow-y-scroll  bg-white"
                initial={{
                  scale: 0.95,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 0.2,
                  },
                }}
                exit={{
                  scale: 0.95,
                  opacity: 0,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="sticky z-40 inset-0 bg-p overflow-hidden h-screen">
                  <div className="relative h-screen w-screen overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-50 overflow-hidden">
                      <div className="text-center text-white flex flex-col h-full justify-between py-32 overflow-hidden">
                        <div>
                          <h1
                            className="font-bold text-4xl text-white"
                            style={{
                              fontFamily: 'Hendycroft Signature',
                            }}
                          >
                            Balqis {'&'} Singgih
                          </h1>

                          <p className="text-sm my-4"> 9 Juli 2023</p>
                        </div>

                        <div>
                          <span className="text-sm">Kepada:</span>{' '}
                          <Text className="text-2xl px-6">
                            {/* {router?.query?.nama || 'Tamu Undangan'} */}
                            {nama || 'Tamu Undangan'}
                          </Text>
                        </div>

                        <div className="mx-auto">
                          <button
                            onClick={() => {
                              setOpen(false);
                              togglePlay();
                            }}
                            className="rounded-full px-4 py-2 text-sm border-2 border-white flex items-center space-x-3"
                          >
                            <span>Open Invitation</span>
                            <EnvelopeOpenIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="w-scree h-screen mx-auto text-center">
                      <Carousel slidesToScroll={1} slidesToShow={1} autoplay infinite={true}>
                        {images.map((s, i) => (
                          <div
                            key={String(i)}
                            className="flex items-center h-screen overflow-hidden max-w-screen-md mx-auto"
                          >
                            <Image
                              onClick={() => setIndex2(i)}
                              src={s.url}
                              className="object-cover h-full aspect-[9/16]"
                              height={1920}
                              width={1080}
                            />
                          </div>
                        ))}
                      </Carousel>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>,

      document.getElementById('modal-portal'),
    );
  }

  return null;
}
