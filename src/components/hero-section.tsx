import * as images from "../assets";

const Hero = () => {
  return (
    <div>
      <main className="relative">
        <img
          src={images.aespabanner}
          alt="aespa-hero"
          className="relative w-full"
        />

        <div className="absolute top-1/2 right-1/2 transform translate-x-1/2">
          <h1 className="text-xl sm:text-3xl lg:text-6xl text-white">
            Hot Mess Out Now!
          </h1>
          <div className="flex gap-2 lg:gap-8 justify-center items-center my-2 lg:my-4">
            <a
              href="https://music.apple.com/ng/album/hot-mess-single/1754125916"
              className=""
            >
              <svg
                className="h-3 w-3 sm:h-6 sm:w-6 lg:h-12 lg:w-12 fill-white stroke-1 hover:scale-105 hover:transition"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M17.508 24H6.938a17.08 17.08 0 0 1-1.645-.06 6.858 6.858 0 0 1-1.336-.237c-1.582-.475-2.729-1.47-3.41-2.956-.377-.823-.475-1.701-.521-2.452l-.025-.401L0 6.143c0-.024.006-.081.01-.105.012-.404.046-.803.1-1.186.061-.413.159-.952.384-1.476.588-1.384 1.605-2.371 3.021-2.932C4.267.147 5.044.067 5.772.026l.431-.025L17.759 0c.02 0 .102.008.122.01a10.74 10.74 0 0 1 1.585.154c.733.132 1.4.391 1.983.77 1.202.789 1.976 1.871 2.302 3.218.161.659.241 1.367.244 2.161a.493.493 0 0 1 .003.055L24 17.287c.001.56-.014 1.297-.138 2.038-.095.561-.219 1.001-.391 1.389a5.35 5.35 0 0 1-1.984 2.332c-.691.455-1.479.735-2.411.855-.526.065-1.053.099-1.568.099zM1.457 20.331c.563 1.23 1.476 2.021 2.789 2.415.394.119.817.169 1.141.199.536.051 1.081.055 1.551.055h10.57c.473 0 .958-.031 1.442-.092.776-.1 1.427-.328 1.988-.698a4.376 4.376 0 0 0 1.62-1.901c.137-.309.238-.675.318-1.15.112-.667.125-1.35.125-1.871l-.004-10.866a.489.489 0 0 1-.003-.054c0-.736-.071-1.384-.216-1.98-.268-1.108-.882-1.964-1.877-2.617a4.296 4.296 0 0 0-1.613-.623 9.436 9.436 0 0 0-1.424-.136c-.016 0-.089-.008-.104-.01L6.236 1l-.405.024c-.646.037-1.328.105-1.948.35-1.175.466-1.982 1.25-2.47 2.396-.179.418-.261.875-.313 1.226-.051.355-.08.713-.09 1.073-.001.02-.008.096-.011.115l.026 12.046c.042.696.124 1.429.432 2.101z"></path>
                <path d="M5.963 20.676a2.35 2.35 0 0 1-2.336-1.96c-.193-1.12.39-2.173 1.452-2.622h.001c.393-.165.792-.254 1.2-.339l.767-.155c.404-.081.837-.168.995-.201.157-.034.198-.083.205-.248v-.128l.002-8.883c0-.171.019-.335.056-.488.11-.448.432-.762.908-.883.199-.052.404-.092.608-.133l.19-.038c.351-.072.644-.144.935-.214a23.14 23.14 0 0 1 1.016-.231l4.281-.863c.263-.052.493-.095.721-.114.567-.046 1.034.345 1.092.932.01.084.015.178.015.272.002 1.83.002 3.663 0 5.493v5.955c0 .555-.097 1.021-.295 1.426-.348.708-.919 1.18-1.7 1.401a5.163 5.163 0 0 1-1.185.192 2.357 2.357 0 0 1-2.457-1.946c-.19-1.036.349-2.089 1.31-2.561.386-.191.791-.291 1.135-.364l.734-.154a83.3 83.3 0 0 0 1.316-.28c.114-.026.12-.061.131-.12l.011-.098V7.988c-.174.031-.487.091-1.046.204-.847.167-1.606.32-2.365.473l-4.411.93.016 7.949c0 .565-.081 1.018-.255 1.424-.332.765-.922 1.274-1.753 1.516a4.97 4.97 0 0 1-1.198.192h-.096zm-.496-3.66c-.77.325-.941 1.027-.855 1.529.121.691.701 1.136 1.409 1.13.316-.011.637-.062.957-.154.538-.156.902-.467 1.112-.951.118-.275.173-.602.173-1.028v-1.168l-.011.002c-.16.034-.599.122-1.008.204l-.76.153c-.373.078-.706.152-1.017.283zm11.604-2.483c-.272.061-.798.17-1.254.266l-.729.153c-.286.061-.615.141-.903.283a1.39 1.39 0 0 0-.768 1.484c.125.687.722 1.155 1.428 1.127.327-.014.648-.066.957-.155.504-.143.855-.43 1.076-.879.131-.268.193-.582.193-.986v-1.293zm-.143-10.329c-.158 0-.308.03-.457.059l-4.311.87c-.369.074-.672.148-.978.222-.303.074-.607.148-.972.223l-.197.039c-.185.037-.37.073-.552.12-.157.04-.173.105-.185.153-.018.074-.028.16-.028.25v2.445l4.207-.901c.766-.155 1.527-.308 2.288-.458.789-.159 1.15-.226 1.329-.253l-.001-2.595c0-.057-.003-.113-.009-.167a1.543 1.543 0 0 0-.134-.007z"></path>
              </svg>
            </a>

            <a href="https://www.youtube.com/watch?v=2iK3ccCsI6s">
              <svg
                className="h-3 w-3 sm:h-6 sm:w-6 lg:h-12 lg:w-12 fill-white hover:scale-105 hover:transition"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 50 50"
              >
                <path d="M 24.402344 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.402344 16.898438 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.902344 40.5 17.898438 41 24.5 41 C 31.101563 41 37.097656 40.5 40.597656 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.097656 35.5 C 45.5 33 46 29.402344 46.097656 24.902344 C 46.097656 20.402344 45.597656 16.800781 45.097656 14.300781 C 44.699219 12.101563 42.800781 10.5 40.597656 10 C 37.097656 9.5 31 9 24.402344 9 Z M 24.402344 11 C 31.601563 11 37.398438 11.597656 40.199219 12.097656 C 41.699219 12.5 42.898438 13.5 43.097656 14.800781 C 43.699219 18 44.097656 21.402344 44.097656 24.902344 C 44 29.199219 43.5 32.699219 43.097656 35.199219 C 42.800781 37.097656 40.800781 37.699219 40.199219 37.902344 C 36.597656 38.601563 30.597656 39.097656 24.597656 39.097656 C 18.597656 39.097656 12.5 38.699219 9 37.902344 C 7.5 37.5 6.300781 36.5 6.101563 35.199219 C 5.300781 32.398438 5 28.699219 5 25 C 5 20.398438 5.402344 17 5.800781 14.902344 C 6.101563 13 8.199219 12.398438 8.699219 12.199219 C 12 11.5 18.101563 11 24.402344 11 Z M 19 17 L 19 33 L 33 25 Z M 21 20.402344 L 29 25 L 21 29.597656 Z"></path>
              </svg>
            </a>

            <a href="https://open.spotify.com/album/2PvpuCui1GVO8DkFcCHzYU">
              <svg
                className="h-3 w-3 sm:h-6 sm:w-6 lg:h-12 lg:w-12 fill-white hover:scale-105 hover:transition"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 50 50"
              >
                <path d="M 25 1.9902344 C 12.266865 1.9902344 1.9902344 12.266865 1.9902344 25 C 1.9902344 37.733135 12.266865 48.009766 25 48.009766 C 37.733135 48.009766 48.009766 37.733135 48.009766 25 C 48.009766 12.266865 37.733135 1.9902344 25 1.9902344 z M 25 4.0097656 C 36.650865 4.0097656 45.990234 13.349135 45.990234 25 C 45.990234 36.650865 36.650865 45.990234 25 45.990234 C 13.349135 45.990234 4.0097656 36.650865 4.0097656 25 C 4.0097656 13.349135 13.349135 4.0097656 25 4.0097656 z M 21.933594 14 C 16.000841 14 11.536373 15.027452 11.318359 15.078125 L 11.316406 15.078125 L 11.316406 15.080078 C 9.7155259 15.453865 8.7059511 17.079339 9.078125 18.679688 C 9.450288 20.281477 11.075526 21.288538 12.675781 20.921875 L 12.683594 20.921875 L 12.689453 20.919922 C 12.575843 20.947632 12.739283 20.908042 12.859375 20.882812 C 12.979472 20.857582 13.156783 20.822622 13.386719 20.779297 C 13.846591 20.692637 14.514202 20.576349 15.345703 20.460938 C 17.008724 20.230114 19.325722 20 21.933594 20 L 21.996094 20 C 26.308988 20.0059 32.506391 20.667785 37.480469 23.587891 L 37.482422 23.587891 L 37.482422 23.589844 C 37.954848 23.865283 38.481566 24 38.998047 24 C 40.027098 24 41.03278 23.462606 41.587891 22.517578 C 42.4204 21.099781 41.937951 19.245598 40.519531 18.412109 C 34.27637 14.746763 27.008921 14.007143 22.003906 14 L 21.933594 14 z M 21.933594 16 L 22.003906 16 C 26.808831 16.007 33.751684 16.758455 39.505859 20.136719 C 39.99344 20.42323 40.148772 21.019657 39.863281 21.505859 C 39.672394 21.830832 39.340995 22 38.998047 22 C 38.827923 22 38.658397 21.95814 38.494141 21.863281 L 38.490234 21.861328 C 33.0131 18.647428 26.504103 18.006131 21.998047 18 L 21.933594 18 C 19.208465 18 16.806263 18.239792 15.072266 18.480469 C 14.205267 18.600807 13.504003 18.72047 13.015625 18.8125 C 12.771436 18.85852 12.58045 18.8978 12.447266 18.925781 C 12.322091 18.952081 12.331069 18.948276 12.230469 18.972656 C 11.674724 19.099993 11.153228 18.776774 11.025391 18.226562 C 10.897698 17.677484 11.221452 17.156242 11.769531 17.027344 C 11.921515 16.992022 16.232346 16 21.933594 16 z M 21.992188 22.001953 C 19.485831 22.022933 17.321981 22.257131 15.742188 22.498047 C 14.162394 22.738963 13.265055 22.956785 12.976562 23.039062 C 11.545298 23.4449 10.697078 24.961798 11.103516 26.394531 C 11.511255 27.828702 13.027844 28.672719 14.458984 28.265625 L 14.464844 28.263672 L 14.46875 28.263672 C 14.49469 28.257572 14.53521 28.248108 14.587891 28.236328 C 14.69326 28.212768 14.848723 28.180835 15.048828 28.140625 C 15.449038 28.060205 16.026057 27.951569 16.740234 27.84375 C 18.168588 27.628113 20.142467 27.410079 22.322266 27.390625 C 26.185509 27.356565 30.567753 27.924285 34.84375 30.587891 C 35.289626 30.867749 35.792755 31.001953 36.28125 31.001953 C 37.187002 31.001953 38.077741 30.54265 38.589844 29.722656 C 39.378024 28.458742 38.985326 26.765566 37.720703 25.978516 C 32.336064 22.623808 26.560664 21.964096 21.992188 22.001953 z M 22.009766 24 C 26.371289 23.96386 31.724703 24.598489 36.664062 27.675781 C 37.00944 27.890731 37.108398 28.317977 36.892578 28.664062 C 36.752681 28.88807 36.521498 29.001953 36.28125 29.001953 C 36.149745 29.001953 36.024374 28.968673 35.90625 28.894531 L 35.904297 28.892578 C 31.213033 25.969431 26.380741 25.35469 22.304688 25.390625 C 20.002485 25.411175 17.940802 25.640824 16.441406 25.867188 C 15.691708 25.980369 15.083306 26.093481 14.654297 26.179688 C 14.439792 26.222787 14.270205 26.258358 14.150391 26.285156 C 14.090481 26.298556 14.043261 26.309979 14.007812 26.318359 C 13.972362 26.326759 14.028242 26.308563 13.902344 26.345703 L 13.912109 26.341797 C 13.529249 26.450703 13.137605 26.235485 13.027344 25.847656 C 12.915932 25.454918 13.129707 25.073722 13.521484 24.962891 L 13.523438 24.962891 C 13.511947 24.966191 14.540762 24.703693 16.042969 24.474609 C 17.545141 24.245573 19.619122 24.020016 22.009766 24 z M 22.5 29.001953 C 18.141114 29.002953 14.914292 30.062424 14.708984 30.130859 C 13.409991 30.563124 12.696085 31.994504 13.128906 33.292969 C 13.561895 34.591934 14.993351 35.312698 16.294922 34.871094 L 16.279297 34.876953 C 16.379482 34.844753 16.438799 34.823793 16.742188 34.742188 C 17.045575 34.660578 17.491802 34.551256 18.048828 34.441406 C 19.16288 34.221707 20.724875 34.002431 22.5 34.001953 C 26.836932 34.000989 29.799021 35.039503 32.113281 36.582031 L 32.113281 36.580078 C 32.537053 36.863144 33.023236 37.001953 33.498047 37.001953 C 34.304696 37.001953 35.102812 36.603444 35.580078 35.886719 C 36.338631 34.748062 36.024808 33.181703 34.886719 32.421875 C 31.24152 29.992096 27.140106 28.999891 22.5 29.001953 z M 22.5 31.001953 C 26.859894 31.000053 30.494548 31.897723 33.777344 34.085938 C 34.015629 34.246398 34.075032 34.5406 33.916016 34.779297 C 33.815282 34.930571 33.661397 35.001953 33.498047 35.001953 C 33.400857 35.001953 33.310884 34.976899 33.222656 34.917969 L 33.222656 34.916016 C 30.588916 33.160587 27.163068 32.000917 22.5 32.001953 C 20.561125 32.002475 18.875557 32.239215 17.662109 32.478516 C 17.055386 32.598166 16.565205 32.718405 16.222656 32.810547 C 15.880107 32.902687 15.581784 33.000359 15.667969 32.972656 L 15.660156 32.974609 L 15.652344 32.976562 C 15.385915 33.066963 15.116402 32.933192 15.025391 32.660156 C 14.934381 32.387121 15.069741 32.117683 15.341797 32.027344 C 15.400487 32.007784 18.468886 31.002914 22.5 31.001953 z"></path>
              </svg>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
