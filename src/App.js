import "./App.css";
import Search from "./Search";
import Overview from "./Overview";
import Temperature from "./Temperature";
import Conditions from "./Conditions";

function App() {
  return (
    <div className="App">
      <div className="container shadow-lg p-3 mb-5 bg-body rounded">
        <div className="card grey-border">
          <div className="card-body">
            <div className="card gradient-body">
              <Search />
              <Overview city="Cincinnati" value="Wednesday 11:11" />
              <div className="row">
                <Temperature value={76.6} />
                <Conditions value="broken clouds" />
              </div>
            </div>
          </div>
        </div>
        <p className="coded-by">
          This is a work in progress,{" "}
          <a
            href="https://github.com/emslime/react_weather"
            className="git-link"
            target="_blank"
            rel="noreferrer"
          >
            open-source code here
          </a>{" "}
          🤍 Em
        </p>
      </div>
    </div>
  );
}

export default App;
