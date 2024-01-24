import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full">
      <div className="w-fit mx-auto lg:px-24 md:py-20 md:px-44 px-4 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div className>
                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                  Looks like you&apos;ve found the doorway to the great nothing
                </h1>
                <p className="my-2 text-gray-800">
                  Sorry about that! Please visit our hompage to get where you
                  need to go.
                </p>
                <Link to="/">
                  <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50">
                    Take me there!
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
            </div>
          </div>
        </div>
        <div>
          <img className="w-[50rem]" src="/error404.svg" />
        </div>
      </div>
    </div>
  );
};

export default Error;
