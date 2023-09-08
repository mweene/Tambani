import "./App.css";
import MovieCards from "./components/MovieCards";
import Header from "./components/Header";

function App() {
  return(
    <div className="site-wrapper">
      <Header />
      <MovieCards />
    </div>
  );
}

export default App;