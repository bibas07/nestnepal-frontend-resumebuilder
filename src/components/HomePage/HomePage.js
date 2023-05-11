import { Link } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "../NavBar/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div class="lg:container lg:mx-80">
        <h1 className="text-4xl font-bold underline">
          Welcome to ResumeBuilder!
        </h1>
        <h5 className="text-5xl">Build your resume in a steps.</h5> <br />
        <Link
          to="/setName"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Start Now
        </Link>
      </div>
    </>
  );
};
export default HomePage;
