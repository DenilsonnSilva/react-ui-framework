import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PageNavbar from "./components/PageNavbar";
import Grid from "./components/Grid";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <header>
        <PageNavbar />
      </header>
      <main>
        <Grid />
      </main>
      <footer class="py-5 my-5 bg-dark">
        <Container className="px-4">
          <p class="m-0 text-center text-white">Copyright &copy; Your Website 2022</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
