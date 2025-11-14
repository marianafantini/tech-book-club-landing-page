export default function Home() {
  return (
    <div className="">
      <div className="min-h-screen min-w-screen flex pt-8">
        <div className="w-1/2 flex flex-col gap-8 p-8">
          <h1 className="font-martian-mono text-6xl font-bold">
            Join the ultimate tech book club
          </h1>
          <span className="font-inter">
            Turn your reading time into learning time with fellow tech enthusiasts. Get curated recommendations, join vibrant discussions, and level up your skills one chapter at a time.
          </span>
          <button className="uppercase border-black p-4 font-martian-mono" href="/">
            REVIEW MEMBERSHIP OPTIONS
          </button>
        </div>
        <div className="w-1/2">
          <img src={"Hero Image.png"}/>
        </div>
      </div>

      <div className="min-h-screen min-w-screen flex justify-center content-center">
        <div className="w-1/2">
          <img src={"Image 1.png"}/>
        </div>
        <div className="w-1/2 flex flex-col justify-center gap-8 p-8">
          <h1 className="font-martian-mono text-6xl font-bold">
            Read together, grow together
          </h1>
          <ul className="font-inter">
            <li>Monthly curated tech reads selected by industry experts</li>
            <li>Virtual and in-person meetups for deep-dive discussions</li>
            <li>Early access to new tech book releases</li>
            <li>Author Q&A sessions with tech thought leaders</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
