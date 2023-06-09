import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "../NavBar/NavBar";

export const Experience = () => {
  const history = useHistory();
  const [name, setName] = useState([]);
  const [position, setPosition] = useState([]);
  const [startDate, setStartDate] = useState([]);
  const [endDate, setEndDate] = useState(["present"]);
  const [des, setDes] = useState([]);

  const storedData = localStorage.getItem("Company")
    ? JSON.parse(localStorage.getItem("Company"))
    : [];

  const onQuerySubmit = (e) => {
    e.preventDefault();
    if (name.length < 3 || position.length < 3) {
      alert("Company name must contain at least 3 letter");
    } else {
      const companyDetails = {
        name: name,
        startDate: startDate,
        endDate: endDate,
        Position: position,
        Description: des,
      };

      const currData = [companyDetails, ...storedData];
      localStorage.setItem("Company", JSON.stringify(currData));

      history.replace("/experience");
    }
  };

  return (
    <>
      <NavBar />
      <div class="lg:container">
        <div
          className="
            absolute
            top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
          drop-shadow-xl rounded-xl p-10
          mt-10"
        >
          <br />
          <form onSubmit={onQuerySubmit}>
            <div class="grid gap-6 mb-6 md:grid-cols-1 w-80">
              Company details
              <hr />
              <div class="mb-3">
                <label
                  for="companyName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label
                  for="yoj"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Joining Date
                </label>
                <input
                  type="text"
                  placeholder="Year of joining"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label
                  for="endDate"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Ending Date
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Year of Ended"
                  name={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label
                  for="position"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Position
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Position"
                  name={position}
                  onChange={(e) => setPosition(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label
                  for="des"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  About
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Describe"
                  name={des}
                  onChange={(e) => setDes(e.target.value)}
                />
              </div>
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="submit"
              >
                Add Experience
              </button>
            </div>
          </form>
          <Link
            to="/achievement"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Next: Achievement
          </Link>
        </div>
        <div className="flex-auto w-50">
          <div className="lg:float-left lg:ml-40 lg:mt-20">
            <h3 className="text-2xl">Experience </h3>
            {storedData.map((data) => (
              <div key={data} className="mb-4 mt-2">
                <span className="font-bold text-lg">{data.name}</span>
                <span className="text-sm font-bold text-stone-400 mx-10">
                  <span className="mr-2">{data.startDate} </span> -
                  <span className="ml-2">{data.endDate} </span>
                </span>
                <br />
                {data.Position}
                <br />
                {data.Description}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
