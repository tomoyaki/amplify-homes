import "./App.css";
import { NewHomes, NavBar, MarketingFooter } from "./ui-components";

function App() {
  return (
    <div className="App">
      <NavBar width={"auto"} />
      <NewHomes width={"auto"} />
      <MarketingFooter />
    </div>
  );
}

export default App;
