export default function Locations() {
  const cities = [
    "Boston, MA",
    "New York City, NY",
    "Atlanta, GA",
    "Basking Ridge, NJ",
    "Austin, TX",
    "San Francisco, CA",
    "Burlington, VT",
    "Oshkosh, WI",
  ];

  return (
    <div className="relative px-6 py-24 text-center neuebit bg-darker retro">
      <p className="text-3xl uppercase">
        {/* TODO: Replace `Example City` with your city */}
        Can't make it to Ottawa?
      </p>
      <p className="text-xl">
        There are 100+ other Counterspell locations worldwide!
      </p>
      <div className="flex justify-center pt-24">
        <div className="grid items-center justify-center w-full max-w-5xl grid-cols-1 gap-8 text-2xl lg:grid-cols-2">
          {cities.map((city, i) => (
            <p className="lg:odd:text-left lg:even:text-right" key={i}>
              {city}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
