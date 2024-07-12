import { aes } from "../data/ae-members";

const Avatars = () => {
  return (
    <div>
      <h2 className="text-pink-500 text-center text-xl sm:text-4xl md:text-5xl xl:text-6xl col-span-1 sm:col-span-4 md:my-8 dark:text-white">
        Avatars
      </h2>
      <section className="grid grid-cols-1 mt-3 m-16 md:m-24 gap-8 sm:grid-cols-4 sm:m-16 items-center justify-center justify-items-center ">
        {aes.map((member) => (
          <div key={member.id} className="thumbnail-icon">
            <img
              src={member.image}
              alt={member.name}
              className="w-full rounded-lg hover:transition hover:saturate-200 cursor-pointer"
            />
            <ul className="mt-3 max-w-fit">
              <li className="font-bold">{member.name}</li>
              <li>Ability: {member.power}</li>
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Avatars;
