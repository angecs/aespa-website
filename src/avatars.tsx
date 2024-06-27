import * as images from "./assets";

const Avatars = () => {
  return (
    <div>
      <section className="grid grid-cols-2 sm:grid-cols-4 sm:m-16 items-center justify-center justify-items-center gap-x-8">
        <h2
          className="text-xl sm:text-4xl md:text-5xl xl:text-6xl col-span-2 sm:col-span-4 my-4 md:my-8 dark:text-white"
          id="avatars"
        >
          AVATARS
        </h2>
        <div className="thumbnail-icon">
          <img
            src={images.aeKarina}
            alt="ae-karina"
            className="w-3/4 hover:transition hover:saturate-200 cursor-pointer"
          />
          <p className="dark:text-white">ae-Karina</p>
        </div>
        <div className="thumbnail-icon">
          <img
            src={images.aeGiselle}
            alt="ae-giselle"
            className="w-3/4 hover:transition hover:saturate-200 cursor-pointer"
          />
          <p className="dark:text-white">ae-Giselle</p>
        </div>
        <div className="thumbnail-icon">
          <img
            src={images.aeWinter}
            alt="ae-winter"
            className="w-3/4 hover:transition hover:saturate-200 cursor-pointer"
          />
          <p className="dark:text-white">ae-Winter</p>
        </div>
        <div className="thumbnail-icon">
          <img
            src={images.aeNingning}
            alt="ae-ningning"
            className="w-3/4 hover:transition hover:saturate-200 cursor-pointer"
          />
          <p className="dark:text-white">ae-Ningning</p>
        </div>
      </section>
    </div>
  );
};

export default Avatars;
