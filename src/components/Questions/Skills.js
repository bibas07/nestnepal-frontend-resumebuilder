import { useState } from "react";
import { useHistory, Link } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "../NavBar/NavBar";

export const Skills = () => {
  const history = useHistory();
  const [techSkill, setTechSkill] = useState([]);

  const onQuerySubmit = (e) => {
    e.preventDefault();
    if (techSkill.length < 3) {
      alert("Must be at least 3 letters");
    } else {
      const storedData = localStorage.getItem("Skills")
        ? JSON.parse(localStorage.getItem("Skills"))
        : [];
      const saveData = [techSkill, ...storedData];
      localStorage.setItem("Skills", JSON.stringify(saveData));

      history.replace("/skills");
    }
  };

  return (
    <>
      <div class="lg:container lg:mx-80">
        <NavBar />
        <form onSubmit={onQuerySubmit}>
          <div class="grid gap-6 mb-6 md:grid-cols-1 w-80">
            <label
              for="Skills"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Skills
            </label>
            <input
              type="text"
              placeholder="Academic Skills"
              name={techSkill}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setTechSkill(e.target.value)}
            />
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add Skill
            </button>
          </div>
        </form>
        <Link
          to="/experience"
          className="text-white bg-green-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Next: Experience
        </Link>
      </div>
    </>
  );
};
