import "./App.css"
import NavbarLight from "./Components/Navbar/NavbarLight";
import NavbarDark from "./Components/Navbar/NavbarDark";
import Buttons from "./Components/Buttons/Buttons";
import Cards from "./Components/Cards/Cards";
import Accordion from "./Components/Accordion/Accordion";
function App() {
  return (
    <div>
      <NavbarLight />
      <NavbarDark />
      <Buttons />
      <Cards />
      {/* <Accordion /> */}
    </div>
  );
}

export default App;
