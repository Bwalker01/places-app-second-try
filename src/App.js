import "./App.css";
import Posts from "./components/posts/Posts";

function App() {
  const { version } = window["appConfig"]?.version || "Demo";
  return (
    <div className="container">
      <h1>Places App</h1>

      <Posts />

      <footer>Version: {version}</footer>
    </div>
  );
}

export default App;
