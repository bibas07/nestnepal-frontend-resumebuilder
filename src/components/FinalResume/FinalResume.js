import NavBar from "../NavBar/NavBar";

const FinalResume = () => {
  const fullname = localStorage.getItem("Fullname")
    ? JSON.parse(localStorage.getItem("Fullname"))
    : [];
  const bio = localStorage.getItem("Bio")
    ? JSON.parse(localStorage.getItem("Bio"))
    : [];
  const skills = localStorage.getItem("Skills")
    ? JSON.parse(localStorage.getItem("Skills"))
    : [];
  const education = localStorage.getItem("Education")
    ? JSON.parse(localStorage.getItem("Education"))
    : [];

  const experience = localStorage.getItem("Company")
    ? JSON.parse(localStorage.getItem("Company"))
    : [];

  const objectives = localStorage.getItem("Objectives")
    ? JSON.parse(localStorage.getItem("Objectives"))
    : [];
  const achievement = localStorage.getItem("Achievement")
    ? JSON.parse(localStorage.getItem("Achievement"))
    : [];
  return (
    <>
      <NavBar />
      <div className="m-8 p-8 border-solid border-2 border-indigo-600 rounded-lg">
        <div className="bg-auto bg-current mb-5 rounded-lg">
          <h2 className="text-slate-200 text-2xl text-center h-12 p-1">
            Your Resume
          </h2>
        </div>
        <div class="lg:container lg:mx-auto">
          <div class="flex">
            <div class="flex-auto w-100">
              <div className="float-left">
                <p class="text-3xl font-bold">{fullname}</p>
              </div>
            </div>
          </div>
          <div class="flex">
            <div className="flex-auto w-100">
              <p class="text-1xl">{bio}</p>

              <h3 className="text-2xl mt-5 font-bold text-slate-700 leading-snug">
                Skills
              </h3>
              {skills.map((data) => (
                <>
                  <span className="text-lg">{data}</span>
                  <br />
                </>
              ))}

              <h3 className="text-2xl mt-5 font-bold text-slate-700 leading-snug">
                Achievements
              </h3>

              {achievement.map((data) => (
                <div key={data} className="mb-4 mt-2">
                  <span className="font-bold text-lg">{data.certName}</span>{" "}
                  <br />
                  {data.certProvider}
                  {data.certLink}
                </div>
              ))}
            </div>
            <div className="flex-auto w-100">
              <h3 className="text-2xl font-bold text-slate-700 leading-snug">
                Education
              </h3>
              {education.map((data) => (
                <div key={data} className="mb-4 mt-2">
                  <span className="font-bold text-lg">{data.Name}</span>
                  <span className="text-sm font-bold text-stone-400 mx-10">
                    <span className="mr-2">{data.YOC}</span>
                  </span>
                  <br />
                  {data.Des}
                </div>
              ))}
              <h3 className="text-2xl mt-5 font-bold text-slate-700 leading-snug">
                Experience
              </h3>
              {experience.map((data) => (
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
          <div className="flex mt-8">
            <div className="flex-auto w-100 text-center text-lg">
              "<span className="font-bold text-lbase">{objectives}</span>"
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FinalResume;
