// import SkylineHeader from "./Components/Shared/SkylineHeader/SkylineHeader";
import Header from "./Components/Shared/Header/Header";

import Routes from "./Routes/Routes.jsx";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      {/* <SkylineHeader/> */}
      <Header />
      <Router>
        <div className="App">
          <Routes />
        </div>
      </Router>
    </>
  );
}

export default App;
