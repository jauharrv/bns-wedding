import React, { useMemo, useState } from 'react';
import { Howl } from 'howler';

const AppContext = React.createContext();

const src = '/song.mp3';

const AppContextProvider = ({ children }) => {
  const [playing, setPlaying] = useState(false);

  const sound = useMemo(() => {
    return new Howl({
      src: [src],
      autoplay: false,
      onplay() {
        setPlaying(true);
      },
      onpause() {
        setPlaying(false);
      },
    });
  }, []);

  const togglePlay = () => {
    if (playing) {
      sound.pause();
    } else {
      sound.play();
    }
  };

  return (
    <AppContext.Provider value={{ sound, playing, togglePlay }}>{children}</AppContext.Provider>
  );
};

export const useAppcontext = () => React.useContext(AppContext);

export default AppContextProvider;
