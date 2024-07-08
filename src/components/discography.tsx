import { discography } from "../data/discography";
import { useState } from "react";

const Discography = () => {
  const [index, setIndex] = useState(0);
  let hasPrev = index > 0;
  let hasNext = index < discography.length - 1;

  function onPrevSlide() {
    if (hasPrev) {
      setIndex(index - 1);
    }
  }

  function onNextSlide() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }

  let album = discography[index];
  return (
    <div>
      <section className="m-24" id="discography">
        <h2 className="text-xl md:text-6xl col-span-2 md:col-span-5 my-2 md:my-8 dark:text-white text-center">
          Discography
        </h2>
        <div className="flex justify-center">
          <img
            src={album.thumbnail}
            alt={album.name}
            className="w-1/4 hover:transition hover:saturate-200 cursor-pointer p-4 bg-purple-300"
          />
          <ol className="bg-purple-400 p-4">
            <li className="font-bold my-2 text-2xl">{album.name}</li>
            <li>{album.order}</li>
            <li className="mb-2">Date Released: {album["date-released"]}</li>
            <li className="font-bold">TrackList</li>
            {album.tracklist.map((track, index) => (
              <li key={crypto.randomUUID()}>
                {index + 1}. {track}
              </li>
            ))}
          </ol>
        </div>
        <div className="flex my-4 justify-center">
          <button
            onClick={onPrevSlide}
            disabled={!hasPrev}
            className="p-2 mx-2 rounded-md bg-slate-300"
          >
            Previous
          </button>
          <button
            onClick={onNextSlide}
            disabled={!hasNext}
            className="p-2 mx-2 rounded-md bg-slate-300"
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default Discography;
