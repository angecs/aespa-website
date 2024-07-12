import { members } from "../data/members";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Members = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <h2
        className="text-pink-500 text-3xl text-center mt-8 sm:mt-16 lg:mt-24 sm:text-5xl xl:text-6xl 4 md:my-8 dark:text-white"
        id="members"
      >
        MEMBERS
      </h2>
      <section className="grid grid-cols-1 mt-3 m-16 items-center justify-center gap-8 sm:m-24 sm:grid-cols-2 lg:grid-cols-4 sm:mt-6 md:mx-48 md:mb-48 sm:gap-16 xl:gap-20 ">
        {members.map((member, index) => (
          <div
            key={member.id}
            className="thumbnail-icon"
            data-aos={index % 2 === 0 ? "fade-down" : "fade-up"}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full rounded-lg hover:transition hover:saturate-200 cursor-pointer"
            />
            <ul className="mt-3 max-w-fit">
              <li className="font-bold">{member.name}</li>
              <li>Position: {member.position}</li>
              <li>Birthday: {member.birthday}</li>
              <li>Representative Symbol: {member["Representative Symbol"]}</li>
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Members;
