import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container shadow-lg p-3 mb-5 bg-body rounded">
        <div className="card grey-border">
          <div className="card-body">
            <div className="card gradient-body">
              <Weather defaultCity="Geneva" />
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
