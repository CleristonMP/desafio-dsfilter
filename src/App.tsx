import FilterCard from "./components/FilterCard";
import Header from "./components/Header";
import Listing from "./components/Listing";

function App() {
  return (
    <>
      <Header />
      <main>
        <FilterCard />
        <Listing />
      </main>
    </>
  );
}

export default App;
