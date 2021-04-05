import "./styles.css";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App container-fluid">
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
