import { challenge } from "../Utils/Challenge";

export default function HackerantHome() {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className="min-h-screen p-4 bg-black">
      {/* Header */}
      <header className="py-8 text-center text-white bg-[green] rounded-md shadow-lg">
        <h1 className="text-3xl font-bold">Hackerant Challenges</h1>
        <p className="mt-2 text-lg">Your Daily Dose of Coding Puzzles</p>
      </header>

      {/* Challenges Section */}
      <main className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {challenge.map((challenge, index) => (
          <div
            key={index}
            className="p-6 text-white transition-shadow duration-300 bg-black border-[2px] border-[#63ad58]  rounded-lg shadow-md hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-white">
              {challenge.name}
            </h2>
            <p className="mt-2 text-gray-600">{challenge.description}</p>
            <a
              href={challenge.link}
              className="block mt-4 font-medium text-[green] hover:underline"
            >
              View Challenge
            </a>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="mt-10 text-center text-gray-600">
        © {year} Hackerant Challenges. Keep coding!
      </footer>
    </div>
  );
}
