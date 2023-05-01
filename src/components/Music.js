import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/20/solid';
import { useAppcontext } from '~context/AppContext';

const Music = () => {
  const { playing, togglePlay } = useAppcontext();

  return (
    <div className="sticky bottom-[100px] right-0 z-40 p-4 float-right">
      <button
        className="rounded-full h-8 w-8 bg-orange-50 flex items-center justify-center"
        onClick={togglePlay}
      >
        {!playing ? (
          <SpeakerXMarkIcon className="h-4 w-4 text-yellow-700" />
        ) : (
          <SpeakerWaveIcon className="h-4 w-4 text-yellow-700" />
        )}
      </button>
    </div>
  );
};

export default Music;
