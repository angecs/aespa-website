const MusicVideos = () => {
  return (
    <div>
      {" "}
      <section
        className="sm:m-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-y-4"
        id="music-videos"
      >
        <h2 className="text-xl sm:text-4xl md:text-5xl xl:text-6xl col-span-1 sm:col-span-2 lg:col-span-3 my-4 md:my-8 dark:text-white">
          MUSIC VIDEOS
        </h2>

        <iframe
          width="320"
          height="240"
          src="https://www.youtube.com/embed/0nPniUvUBfU"
          title="aespa 에스파 &#39;Armageddon&#39; MV (Performance Ver.)"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <iframe
          width="320"
          height="240"
          src="https://www.youtube.com/embed/nFYwcndNuOY"
          title="aespa 에스파 &#39;Armageddon&#39; MV"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <iframe
          width="320"
          height="240"
          src="https://www.youtube.com/embed/phuiiNCxRMg"
          title="aespa 에스파 &#39;Supernova&#39; MV"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
};

export default MusicVideos;
