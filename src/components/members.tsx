import { members } from "../data/members";

const Members = () => {
  return (
    <div>
      <section className="grid grid-cols-2 sm:grid-cols-4 sm:m-16 items-center justify-center justify-items-center gap-x-8">
        <h2 className="text-xl sm:text-4xl md:text-5xl xl:text-6xl col-span-2 sm:col-span-4 my-4 md:my-8 dark:text-white">
          Members
        </h2>
        {members.map((member) => (
          <div key={member.id} className="thumbnail-icon">
            <img
              src={member.image}
              alt={member.name}
              className="w-3/4 hover:transition hover:saturate-200 cursor-pointer p-4"
            />
            <p className="font-bold">{member.name}</p>
            <p>{member.position}</p>
            <p>{member.birthday}</p>
            <p>{member["Representative Symbol"]}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Members;
