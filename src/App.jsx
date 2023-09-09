import "./App.css";
import MovieCards from "./components/MovieCards";
import Header from "./components/Header";
import Categories from "./components/Categories";

function App() {
  return(
    <div className="site-wrapper">
      <Header />
      <Categories />
      <MovieCards />
    </div>
  );
}

export default App;