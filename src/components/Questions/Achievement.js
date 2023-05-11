import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export const Achievement = () => {
  const history = useHistory();
  const [provider, setProvider] = useState([]);
  const [name, setName] = useState([]);
  const [link, setLink] = useState([]);

  const onQuerySubmit = (e) => {
    e.preventDefault();
    if (name.length < 4) {
      alert("Qualification name must be at least 10 letters");
    } else {
      const storedData = localStorage.getItem("Achievement")
        ? JSON.parse(localStorage.getItem("Achievement"))
        : [];
      const achievementData = {
        certName: name,
        certProvider: provider,
        certLink: link,
      };
      const allData = [achievementData, ...storedData];
      localStorage.setItem("Achievement", JSON.stringify(allData));
      history.replace("/objectives");
    }
  };

  return (
    <>
      <NavBar />
      <div class="lg:container lg:mx-80">
        <form onSubmit={onQuerySubmit}>
          <div class="grid gap-6 mb-6 md:grid-cols-1 w-80">
            Add Your Achievements
            <hr />
            <div class="mb-6">
              <label
                for="qualificationName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Qualification Name
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Qualification Name"
                name={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="mb-6">
              <label
                for="provider"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Certificate Provider
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Provider"
                name={provider}
                onChange={(e) => setProvider(e.target.value)}
              />
            </div>
            <div class="mb-6">
              <label
                for="link"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Link of Certification
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Confidential Link"
                name={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={onQuerySubmit}
            >
              Add Achievement
            </button>
          </div>
        </form>
        <Link
          to="/objectives"
          className="text-white bg-green-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Final: Career Objectives
        </Link>
      </div>
    </>
  );
};
