import "./App.css";
import MovieCards from "./components/MovieCards";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Services from "./components/Services";

function App() {
  return(
    <div className="site-wrapper">
      <Header />
      <Categories />
      <MovieCards />
      <Services />
    </div>
  );
}

export default App;