import Companies from "./_components/Companies";
import Home from "./_components/Home";

const companies = [
  { image: "/img/Companies/melonn.svg", name: "Melonn" },
  { image: "/img/Companies/woombat.svg", name: "Woombat" },
  { image: "/img/Companies/bitnovo.svg", name: "Bitnovo" },
  { image: "/img/Companies/mayasoft.png", name: "Mayasoft" },
  { image: "/img/Companies/conexalab.webp", name: "ConexaLab" },
  { image: "/img/Companies/binary.png", name: "Binary Groups" },
  // { image: "/img/Companies/ipred.png", name: "IPRED" },
];

function App() {
  return (
    <>
      <Home companies={companies} />
    </>
  );
}

export default App;
