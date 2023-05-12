import { useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export const Objectives = () => {
  const history = useHistory();
  const [objectives, setObjectives] = useState([]);
  const onQuerySubmit = (e) => {
    e.preventDefault();
    if (objectives.length < 10) {
      alert("Career objectives mush be at least 10 letters");
    } else {
      localStorage.setItem("Objectives", JSON.stringify(objectives));
      history.replace("/resume");
    }
  };

  return (
    <>
      <NavBar />
      <div class="lg:container">
        <div
          className="
            fixed 
            top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
          drop-shadow-xl rounded-xl p-10"
        >
          <form onSubmit={onQuerySubmit}>
            <div class="grid gap-6 mb-6 md:grid-cols-1 w-80">
              Career Objectives
              <input
                type="text"
                placeholder="Career Objectives"
                name={objectives}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setObjectives(e.target.value)}
              />
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={onQuerySubmit}
              >
                Show Result
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
