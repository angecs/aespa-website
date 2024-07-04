import * as images from "../assets";

const Email = () => {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 m-24 bg-slate-700 p-4 rounded-lg overflow-hidden dark:bg-slate-100">
        <div className="dark:bg-slate-900 bg-slate-500 p-8">
          <h3 className="text-3xl md:text-5xl font-bold py-2 text-white dark:text-slate-100">
            Subscribe to our newsletter
          </h3>
          <p className="py-2 text-white dark:text-slate-100">
            Never miss out on the latest updates on aespa!
          </p>
          <input
            className="peer invalid:outline-red-600 w-3/4 lg:w-1/2 my-4 p-2 rounded-md placeholder:text-slate-60"
            type="email"
            name=""
            id=""
            placeholder="&#9993; Enter your email"
          />
          <br />
          <p className="peer-invalid:visible peer-valid:hidden text-red-600">
            Please enter a valid email
          </p>
          <button className="p-2 bg-slate-700 rounded-md text-white hover:bg-slate-900 dark:bg-slate-100 dark:text-slate-600 dark:hover:bg-slate-400 dark:hover:text-slate-50">
            Subscribe
          </button>
        </div>
        <img
          src={images.newsletter}
          alt="aespa-newletters"
          className="w-full h-full object-cover"
        />
      </section>
    </div>
  );
};

export default Email;
