import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export const Education = () => {
  const history = useHistory();
  const [education, setEduction] = useState([]);
  const [year, setYear] = useState([]);
  const [des, setDes] = useState([]);
  const storedData = localStorage.getItem("Education")
    ? JSON.parse(localStorage.getItem("Education"))
    : [];
  const onQuerySubmit = (e) => {
    e.preventDefault();

    if (education.length < 5) {
      alert("School name must contain at least 5 letter");
    } else {
      const educationData = { Name: education, YOC: year, Des: des };
      const dictEducation = [educationData, ...storedData];
      localStorage.setItem("Education", JSON.stringify(dictEducation));
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
              Education
              <hr />
              <label
                for="collegeName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                College Name
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Education"
                name={education}
                onChange={(e) => setEduction(e.target.value)}
              />
              <label
                for="yoc"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Year of Completion
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Year of Completion"
                name={year}
                onChange={(e) => setYear(e.target.value)}
              />
              <label
                for="des"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                About College and Programe
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder="Describe"
                name={des}
                onChange={(e) => setDes(e.target.value)}
              />
              <br />
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="submit"
              >
                Add Education
              </button>
            </div>
          </form>
          <Link
            to="/skills"
            className="text-white bg-green-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Next: Skills
          </Link>
        </div>
        <div className="flex-auto w-50">
          <div className="lg:float-right lg:m-20">
            <h3 className="text-2xl">Education </h3>
            {storedData.map((data) => (
              <div key={data} className="mb-4 mt-2">
                <span className="font-bold text-lg">{data.Name}</span>
                <span className="text-sm font-bold text-stone-400 mx-10">
                  <span className="mr-2">{data.YOC}</span>
                </span>
                <br />
                {data.Des}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
