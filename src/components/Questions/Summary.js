import { useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export const Summary = () => {
  const history = useHistory();
  const [bio, setBio] = useState([]);
  const onQuerySubmit = (e) => {
    e.preventDefault();
    if (bio.length < 10) {
      alert("Bio mush be at least 10 letters");
    } else {
      //   const storedData = localStorage.getItem("Bio")
      //     ? JSON.parse(localStorage.getItem("Bio"))
      //     : [];
      //   const allData = [...storedData, bio];
      localStorage.setItem("Bio", JSON.stringify(bio));
      history.replace("/education");
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
              <label
                for="Bio"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Summary
              </label>
              <input
                type="text"
                placeholder="Summary"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name={bio}
                onChange={(e) => setBio(e.target.value)}
              />
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={onQuerySubmit}
              >
                Next: Education
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
