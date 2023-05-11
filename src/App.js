import { BrowserRouter, Switch } from "react-router-dom";
import Routes from "./Routes/Routes";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Routes />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
