function TicketSelling({
  city,
  number,
  date,
}: {
  city: string;
  number: number;
  date: string;
}) {
  let label = "";
  let styles = "";
  if (number > 0) {
    label = "Buy Tickets Now";
    styles = "p-2 mt-4 font-bold shadow-md  rounded-lg bg-pink-400";
  } else {
    label = "Sold Out";
    styles =
      "p-2 font-bold drop-shadow-md bg-red-500 text-white mt-4 rounded-md disabled";
  }

  return (
    <div className="p-4 rounded-lg shadow-md  bg-gradient-to-b from-pink-100 to-pink-200">
      <h3 className="font-bold text-2xl">
        2024 aespa LIVE TOUR - SYNK: Parallel Line: {city}
      </h3>
      <p className="my-1">Date: {date}</p>
      <p className="my-1">Tickets Left: {number}</p>
      <button className={styles} disabled={number <= 0}>
        {label}
      </button>
    </div>
  );
}

const Concerts = () => {
  return (
    <>
      <h2 className="text-pink-500 text-3xl text-center mt-8 sm:mt-16 lg:mt-24 sm:text-5xl xl:text-6xl 4 md:my-8 dark:text-white">
        CONCERTS
      </h2>
      <div className="grid grid-cols-1 mt-3 m-16 md:m-24 md:grid-cols-3 justify-center gap-8 mx-16">
        <TicketSelling city={"Korea"} number={0} date={"June 29, 2024"} />
        <TicketSelling city={"Bangkok"} number={150} date={"July 3, 2024"} />
        <TicketSelling city={"Tokyo"} number={5} date={"July 5, 2024"} />
      </div>
    </>
  );
};

export default Concerts;
