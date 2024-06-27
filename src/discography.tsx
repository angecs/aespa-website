import * as images from "./assets";

const Discography = () => {
  return (
    <div>
      <section
        className="sm:m-16 grid grid-cols-2 md:grid-cols-5 items-center justify-items-center gap-y-4"
        id="discography"
      >
        <h2 className="text-xl md:text-6xl col-span-2 md:col-span-5 my-2 md:my-8 dark:text-white">
          DISCOGRAPHY
        </h2>
        <div className="thumbnail-icon">
          <img
            src={images.armageddon}
            alt="armageddon"
            className="w-3/4 hover:transition hover:saturate-200 cursor-pointer"
          />
          <p className="dark:text-white">Armageddon</p>
        </div>
        <div className="thumbnail-icon">
          <img
            src={images.drama}
            alt="drama"
            className="w-3/4 hover:transition hover:saturate-200 cursor-pointer"
          />
          <p className="dark:text-white">Drama</p>
        </div>
        <div className="thumbnail-icon">
          <img
            src={images.myWorld}
            alt="my-world"
            className="w-3/4 hover:transition hover:saturate-200 cursor-pointer"
          />
          <p className="dark:text-white">My World</p>
        </div>
        <div className="thumbnail-icon">
          <img
            src={images.girls}
            alt="girls"
            className="w-3/4 hover:transition hover:saturate-200 cursor-pointer"
          />
          <p className="dark:text-white">Girls</p>
        </div>
        <div className="thumbnail-icon">
          <img
            src={images.savage}
            alt="savage"
            className="w-3/4 hover:transition hover:saturate-200 cursor-pointer"
          />
          <p className="dark:text-white">Savage</p>
        </div>
      </section>
    </div>
  );
};

export default Discography;
