import "./App.css";
import Navbar from "./components/navbar";
import MainContent from "./components/hero";
import Card from "./components/card";
import Data from "./data";
import data from "./data";
// import Katie from "./components/Images/katie-zaferes.png";

const AirbnbData = [
  data.map((person) => {
    return <Card key={person.id} person={person} />;
  }),
];

function App() {
  return (
    <div>
      <Navbar />
      <MainContent />
      <section className="cards-list">{AirbnbData}</section>
    </div>
  );
}

export default App;
