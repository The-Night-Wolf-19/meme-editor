import backGround from "./asset/bg.png";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <img src={backGround} className="App-logo" alt="" />
      <LandingPage />
    </div>
  );
}

export default App;
