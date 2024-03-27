import Link from "next/link";

const Home = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-teal-500 to-zinc-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Manage Tasks Effectively.
            <span className="sm:block"> Stay Organized. </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Simplify your workflow, assign tasks, and track progress
            effortlessly.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="/dashboard"
            >
              Get Started
            </Link>

            <a
              className="block w-full rounded border border-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-teal-600 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
