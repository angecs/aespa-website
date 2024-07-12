function Video({ source, title }: { source: string; title: string }) {
  return (
    <>
      <iframe
        className="rounded-lg p-4 bg-gradient-to-b from-pink-100 to-pink-200 shadow-md"
        width="420"
        height="320"
        src={source}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </>
  );
}

const MusicVideos = () => {
  return (
    <div>
      <h2
        className="text-pink-500 text-3xl text-center mt-8 sm:mt-16 lg:mt-24 sm:text-5xl xl:text-6xl dark:text-white"
        id="music-videos"
      >
        MUSIC VIDEOS
      </h2>
      <section className="mt-6 m-16 md:m-24 flex flex-wrap gap-8 justify-center 2xl:justify-between">
        <Video
          source={"https://www.youtube.com/embed/0nPniUvUBfU"}
          title={"aespa 에스파 &#39;Armageddon&#39; MV (Performance Ver.)"}
        />

        <Video
          source={"https://www.youtube.com/embed/nFYwcndNuOY"}
          title={"aespa 에스파 &#39;Armageddon&#39; MV"}
        />

        <Video
          source={"https://www.youtube.com/embed/phuiiNCxRMg"}
          title={"aespa 에스파 &#39;Supernova&#39; MV"}
        />
      </section>
    </div>
  );
};

export default MusicVideos;
