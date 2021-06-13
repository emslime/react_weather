import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container shadow-lg p-3 mb-5 bg-body rounded">
        <div className="card grey-border">
          <div className="card-body">
            <div className="card gradient-body">
              <Weather defaultCity="Cincinnati" />
            </div>
          </div>
        </div>
        <p className="coded-by">
          <a
            href="https://github.com/emslime/react_weather"
            className="git-link"
            target="_blank"
            rel="noreferrer"
          >
            open-source code here
          </a>{" "}
          <a
            href="https://www.instagram.com/emslime/"
            className="slime-link"
            target="_blank"
            rel="noreferrer"
          >
            🤍 Em
          </a>
        </p>
      </div>
    </div>
  );
}
