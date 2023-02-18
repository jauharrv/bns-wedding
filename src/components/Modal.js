import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

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
    url: '/images/cover/3.jpg',
  },

  {
    url: '/images/cover/2.jpg',
  },

  {
    url: '/images/cover/1.jpg',
  },
];

export default function Modal({ open, children, onClose }) {
  const [isBrowser, setIsBrowser] = useState(false);

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
              className="flex flex-col items-center justify-center overflow-y-auto overflow-hidden bg-black/50 backdrop-filter backdrop-blur-sm"
              onClick={onClose}
            >
              <motion.div
                className="w-screen h-screen overflow-hidden"
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
                {children}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>,

      document.getElementById('modal-portal-1'),
    );
  }

  return null;
}
