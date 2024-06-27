import * as images from "./assets";

const Navbar = () => {
  return (
    <div>
      <header className="absolute z-10 w-full">
        <div className="flex justify-between items-center py-4 px-8">
          <a href="#home">
            <img
              src={images.aespalogo}
              alt="aespa-logo"
              className="w-16 p-2 bg-black rounded-full hover:shadow-md hover:shadow-white"
            />
          </a>

          <svg
            className="sm:hidden h-6 w-6 fill-white stroke-2 stroke-white cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
          >
            <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
          </svg>
          <nav className="hidden sm:flex gap-8">
            <a
              href="#home"
              id="home"
              className="text-white font-bold hover:underline hover:underline-offset-1 active:transition active:scale-110"
            >
              Home
            </a>
            <a
              href="#avatars"
              className="text-white font-bold hover:underline active:transition active:scale-110"
            >
              Avatars
            </a>
            <a
              href="#discography"
              className="text-white font-bold hover:underline active:transition active:scale-110"
            >
              Discography
            </a>
            <a
              href="#music-videos"
              className="text-white font-bold hover:underline active:transition active:scale-110"
            >
              Music Videos
            </a>
            <a
              href="#merch"
              className="text-white font-bold hover:underline active:transition active:scale-110"
            >
              Merch
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
