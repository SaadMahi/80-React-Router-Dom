/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();

  return (
    <div className="container mx-auto max-w-[500px] lg:max-w-[850px]">
      {/* Main Flex Container */}
      <div className="flex flex-col items-center jusify-center p-6">
        {/* Main Content Container */}
        <div className="content w-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-10  ">
            {/* Logo */}
            <div>
              <h1 className="text-3xl text-dark font-bold">Github</h1>
              <span className="font-semibold">
                fetched user data using react router 🛜
              </span>
            </div>
          </div>
          {/* Search Input */}
          {/*    <div
            id="search-container"
            className="relative flex items-center mb-10 "
          >
            <i className="fa-solid fa-magnifying-glass text-2xl absolute top-4 left-4 text-primaryBlue" />
            <input
              type="text"
              id="search"
              placeholder="Search Github username..."
              className="w-full shadow-xl py-5 pl-14 rounded-xl bg-pink-600 dark:bg-darkBlue text-md font-light dark:text-white placeholder:text-steelBlue dark:placeholder:text-white focus:outline-none"
            />
            <small
              id="error"
              className="absolute text-[#f74646] top-6 right-32 font-bold hidden"
            >
              No Results
            </small>
            <a
              href="#"
              id="search-btn"
              className="absolute top-3 right-4 bg-primaryBlue py-2 px-5 rounded-xl text-white m-0"
            >
              Search
            </a>
          </div> */}
          {/* Main Content SM-MD Screens*/}
          <div
            id="user-profile"
            className=" shadow-2xl w-full rounded-xl p-6 lg:hidden"
          >
            {/* User */}
            <div className="flex items-center mb-5">
              {/* Image */}
              <img
                src={data.avatar_url}
                alt="User Profile Image"
                className="rounded-full h-[100px] w-[100px]"
              />
              {/* User Info */}
              <div className="flex flex-col items-start justify-start ml-5">
                <h2 className="text-black">{data.name}</h2>
                <p className="text-primaryBlue">{data.login}</p>
                <p className="text-gray-600">Joined 25 Jan 2011</p>
              </div>
            </div>
            {/* User Bio */}
            <p
              id="user-bio"
              className="text-gray-600 font-sans leading-7 text-lg mb-5"
            >
              {data.bio}
            </p>
            {/* User Stats */}
            <div className="bg-gray-300 flex items-center justify-center rounded-xl py-5 mb-5 space-x-8">
              <div className="flex flex-col items-center justify-center space-y-3">
                <p className="text-gray-600">Repos</p>
                <p className="text-black">{data.public_repos}</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3">
                <p className="text-gray-600">Followers</p>
                <p className="text-black">{data.followers}</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3">
                <p className="text-gray-600">Following</p>
                <p className="text-black">{data.following}</p>
              </div>
            </div>
            {/* User Details SM Screens*/}
            <div className="flex flex-col space-y-3 md:hidden">
              <div className="flex items-center justify-start space-x-7">
                <i className="fa-solid fa-location-dot text-steelBlue dark:text-lightColor text-lg" />
                <p className="text-gray-600 text-md">{data.location}</p>
              </div>
              <div className="flex items-center justify-start space-x-5">
                <i className="fa-solid fa-link text-steelBlue dark:text-lightColor text-lg" />
                <p className="text-gray-600 text-md">{data.html_url}</p>
              </div>
              <div className="flex items-center justify-start space-x-7">
                <i className="fa-brands fa-twitter text-ironBlue text-lg" />
                <p className="text-gray-600 text-md">saadmahi.dev@gmail.com</p>
              </div>
              <div className="flex items-center justify-start space-x-7">
                <i className="fa-solid fa-building text-steelBlue dark:text-lightColor text-lg" />
                <p className="text-ironBlue dark:text-white text-md">
                  @{data.login}
                </p>
              </div>
            </div>
            {/* User Details MD Screens*/}
            <div className="hidden md:flex justify-between space-x-5">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-start space-x-3">
                  <i className="fa-solid fa-location-dot text-steelBlue dark:text-lightColor text-lg" />
                  <p className="text-gray-600 text-md">{data.location}</p>
                </div>
                <div className="flex items-center justify-start space-x-3">
                  <i className="fa-brands fa-twitter text-ironBlue text-lg" />
                  <p className="text-gray-600 text-md">
                    saadmahi.dev@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex items-center justify-start space-x-3">
                  <i className="fa-solid fa-link text-steelBlue dark:text-lightColor text-lg" />
                  <p className="text-gray-600 text-md">{data.html_url}</p>
                </div>
                <div className="flex items-center justify-start space-x-5">
                  <i className="fa-solid fa-building text-steelBlue dark:text-lightColor text-lg" />
                  <p className="text-gray-600 text-md">@{data.login}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Main Content LG Screens*/}
          <div
            id="user-profile-larger"
            className="shadow-2xl dark:bg-darkBlue w-full rounded-xl p-6 hidden lg:flex"
          >
            {/* Image */}
            <div className="basis-1/3 flex justify-center">
              <img
                src={data.avatar_url}
                alt="User Profile Image"
                className="rounded-full h-[150px] w-[150px]"
              />
            </div>
            {/* Everything Else */}
            <div className="basis-2/3">
              {/* User */}
              <div className="mb-5">
                {/* User Info */}
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <h2 className="text-black text-2xl">{data.name}</h2>
                    <p className="text-gray-600">Joined 25 Jan 2011</p>
                  </div>
                  <div className>
                    <p className="text-primaryBlue">{data.login}</p>
                  </div>
                </div>
              </div>
              {/* User Bio */}
              <p
                id="user-bio"
                className="text-gray-600 font-sans leading-7 text-lg mb-5"
              >
                {data.bio}
              </p>
              {/* User Stats */}
              <div className="bg-gray-100 flex items-center justify-center rounded-xl py-5 mb-5 space-x-8">
                <div className="flex flex-col items-center justify-center space-y-3">
                  <p className="text-gray-600">Repos</p>
                  <p className="text-black">{data.public_repos}</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-3">
                  <p className="text-gray-600">Followers</p>
                  <p className="text-black">{data.followers}</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-3">
                  <p className="text-gray-600">Following</p>
                  <p className="text-black">{data.following}</p>
                </div>
              </div>
              {/* User Details SM Screens*/}
              <div className="flex flex-col space-y-3 md:hidden">
                <div className="flex items-center justify-start space-x-7">
                  <i className="fa-solid fa-location-dot text-steelBlue dark:text-lightColor text-lg" />
                  <p className="text-gray-600 text-md">{data.location}</p>
                </div>
                <div className="flex items-center justify-start space-x-5">
                  <i className="fa-solid fa-link text-steelBlue dark:text-lightColor text-lg" />
                  <p className="text-gray-600 text-md">{data.html_url}</p>
                </div>
                <div className="flex items-center justify-start space-x-7">
                  <i className="fa-brands fa-twitter text-ironBlue text-lg" />
                  <p className="text-gray-600 text-md">
                    saadmahi.dev@gmail.com
                  </p>
                </div>
                <div className="flex items-center justify-start space-x-7">
                  <i className="fa-solid fa-building text-steelBlue dark:text-lightColor text-lg" />
                  <p className="text-ironBlue dark:text-white text-md">
                    @{data.login}
                  </p>
                </div>
              </div>
              {/* User Details MD Screens*/}
              <div className="hidden md:flex justify-between space-x-5">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-start space-x-3">
                    <i className="fa-solid fa-location-dot text-steelBlue dark:text-lightColor text-lg" />
                    <p className="text-gray-600 text-md">{data.location}</p>
                  </div>
                  <div className="flex items-center justify-start space-x-3">
                    <i className="fa-brands fa-twitter text-ironBlue text-lg" />
                    <p className="text-gray-600 text-md">
                      saadmahi.dev@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex items-center justify-start space-x-3">
                    <i className="fa-solid fa-link text-steelBlue dark:text-lightColor text-lg" />
                    <p className="text-gray-600 text-md max-w-lg">
                      {data.html_url}
                    </p>
                  </div>
                  <div className="flex items-center justify-start space-x-5">
                    <i className="fa-solid fa-building text-steelBlue dark:text-lightColor text-lg" />
                    <p className="text-gray-600 text-md">@{data.login}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const gitHubInfoLoader = async () => {
  const res = await fetch(`https://api.github.com/users/SaadMahi`);
  const data = await res.json();
  return data;
};

export default Github;
