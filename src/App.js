import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {" "}
        <Weather />
      </div>
      <footer>
        <a href="https://github.com/mariavmedeiros/weather-app-react.git">
          Open-source code
        </a>{" "}
        by Maria Medeiros
      </footer>
    </div>
  );
}
