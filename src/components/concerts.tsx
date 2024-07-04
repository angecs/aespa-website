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
    styles =
      "p-2 mt-4 font-bold shadow-md border border-slate-300 rounded-lg bg-blue-400";
  } else {
    label = "Sold Out";
    styles =
      "p-2 font-bold drop-shadow-md bg-red-500 text-white mt-4 rounded-md disabled";
  }

  return (
    <div className="p-4 rounded-lg shadow-md border border-slate-300 mx-4 ">
      <h3 className="font-bold text-2xl">
        2024 aespa LIVE TOUR - SYNK: Parallel Line: {city}
      </h3>
      <p className="my-1">Date: {date}</p>
      <p className="my-1">Tickets Left: {number}</p>
      <button className={styles}>{label}</button>
    </div>
  );
}

const Concerts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-y-8 mx-16">
      <h2 className="text-xl md:text-6xl col-span-1 md:col-span-3 mt-2 md:my-8 dark:text-white text-center">
        CONCERTS
      </h2>

      <TicketSelling city={"Korea"} number={0} date={"June 29, 2024"} />
      <TicketSelling city={"Bangkok"} number={150} date={"July 3, 2024"} />
      <TicketSelling city={"Tokyo"} number={5} date={"July 5, 2024"} />
    </div>
  );
};

export default Concerts;
