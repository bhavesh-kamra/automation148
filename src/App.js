import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import MyNav from "./components/MyNav";

import MyHeader from "./components/MyHeader";
import PreAutomation from "./components/PreAutomation";
import PostAuto from "./components/PostAuto";
import Increasing from "./components/Increasing";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <MyNav />
      <MyHeader />
      <PreAutomation />
      <PostAuto />
      <Increasing />
      <MyFooter />
    </>
  );
}

export default App;
