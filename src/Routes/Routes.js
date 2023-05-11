import { Route } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import { Summary } from "../components/Questions/Summary";
import { Names } from "../components/Questions/Names";
import { Education } from "../components/Questions/Education";
import { Skills } from "../components/Questions/Skills";
import { Experience } from "../components/Questions/Experience";
import { Achievement } from "../components/Questions/Achievement";
import { Objectives } from "../components/Questions/Objectives";
import FinalResume from "../components/FinalResume/FinalResume";
const Routes = () => {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/setName" component={Names} />
      <Route exact path="/summary" component={Summary} />
      <Route exact path="/education" component={Education} />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/experience" component={Experience} />
      <Route exact path="/achievement" component={Achievement} />
      <Route exact path="/objectives" component={Objectives} />
      <Route exact path="/resume" component={FinalResume} />
    </>
  );
};
export default Routes;
