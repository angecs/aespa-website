import { albums } from "../data/spotify-albums";
import { useState } from "react";

function Album({ link, title }: { link: string; title: string }) {
  return (
    <>
      <iframe
        className="rounded-s-md"
        src={link}
        title={title}
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </>
  );
}

const Discography = () => {
  const [index, setIndex] = useState(0);
  let hasPrev = index > 0;
  let hasNext = index < albums.length - 1;

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

  let album = albums[index];
  return (
    <div>
      <h2
        className="text-pink-500 text-3xl text-center mt-8 sm:mt-16 lg:mt-24 sm:text-5xl xl:text-6xl 4 md:my-8 dark:text-white"
        id="discography"
      >
        DISCOGRAPHY
      </h2>
      <section className="mt-3 m-16 md:m-24" id="discography">
        <Album title={album.name} link={album.link} />
        <div className="flex my-4 justify-center">
          <button
            onClick={onPrevSlide}
            disabled={!hasPrev}
            className="p-2 mx-2 rounded-md bg-pink-200 text-pink-500 disabled:bg-pink-200 disabled:text-pink-100"
          >
            Previous
          </button>
          <button
            onClick={onNextSlide}
            disabled={!hasNext}
            className="p-2 mx-2 rounded-md bg-pink-200 text-pink-500 disabled:bg-pink-200 disabled:text-pink-100"
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default Discography;
