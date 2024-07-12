import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Video({
  source,
  title,
  animation,
}: {
  source: string;
  title: string;
  animation: string;
}) {
  return (
    <>
      <iframe
        data-aos={animation}
        className="rounded-lg p-4 bg-gradient-to-b from-pink-100 to-pink-200 shadow-md"
        width="320"
        height="240"
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
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="md:mb-48">
      <h2
        className="text-pink-500 text-3xl text-center mt-8 sm:mt-16 lg:mt-24 sm:text-5xl xl:text-6xl 4 md:my-8 dark:text-white"
        id="music-videos"
      >
        MUSIC VIDEOS
      </h2>
      <section className="mt-3 m-16 md:mt-3 md:mx-48 flex flex-wrap gap-8 justify-center 2xl:justify-between">
        <Video
          animation={"fade-up"}
          source={"https://www.youtube.com/embed/0nPniUvUBfU"}
          title={"aespa 에스파 &#39;Armageddon&#39; MV (Performance Ver.)"}
        />

        <Video
          animation={"fade-down"}
          source={"https://www.youtube.com/embed/nFYwcndNuOY"}
          title={"aespa 에스파 &#39;Armageddon&#39; MV"}
        />

        <Video
          animation={"fade-up"}
          source={"https://www.youtube.com/embed/phuiiNCxRMg"}
          title={"aespa 에스파 &#39;Supernova&#39; MV"}
        />
      </section>
    </div>
  );
};

export default MusicVideos;
