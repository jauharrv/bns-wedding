import { useState, useEffect } from 'react';

const useInterval = (expired) => {
  const [timeInterval, setTimeInterval] = useState({
    dd: '00',
    hh: '00',
    mm: '00',
    ss: '00',
    isTimeOut: false,
  });

  const t = expired.split(/[- :]/);

  useEffect(() => {
    const pad = (num) => {
      return num > 9 ? String(num) : `0${num}`;
    };

    const makeInterval = setInterval(() => {
      let now = new Date().getTime();

      let currentExpired = new Date(t[0], t[1] - 1, t[2], t[3], t[4], t[5]).getTime();
      let diff = currentExpired - now;
      let days = Math.floor(diff / (1000 * 60 * 60 * 24));
      let hours = Math.floor(diff / (1000 * 60 * 60));
      let mins = Math.floor(diff / (1000 * 60));
      let secs = Math.floor(diff / 1000);
      let dd = days;
      let hh = hours - days * 24;
      let mm = mins - hours * 60;
      let ss = secs - mins * 60;

      if (diff < 0) {
        clearInterval(makeInterval);
        setTimeInterval({
          dd: '00',
          hh: '00',
          mm: '00',
          ss: '00',
          isTimeOut: true,
        });
      } else {
        setTimeInterval({
          dd: pad(dd),
          hh: pad(hh),
          mm: pad(mm),
          ss: pad(ss),
          isTimeOut: false,
        });
      }
    }, 1000);

    return () => clearInterval(makeInterval);
  }, [expired, t]);

  return timeInterval;
};

export default useInterval;
