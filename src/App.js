import CharacterCard from "./components/CharacterCard/CharacterCard";
import Filter from "./components/Filter/Filter";

function App() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="https://www.google.com/">
              Rick & Morty App
            </a>
            <div className="d-lg-inline-flex" id="navbarNav">
              <ul className="navbar-nav d-flex flex-row-reverse">
                <li className="nav-item ms-2 me-2">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="https://www.google.com/"
                  >
                    Favorites
                  </a>
                </li>
                <li className="nav-item ms-2 me-2">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="https://www.google.com/"
                  >
                    Create
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Filter></Filter>
      </header>

      <section className="container">
        <h2>CardList</h2>
        <div className="align-items-center">
          <ul className="row">
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
          </ul>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <img src="#" alt="" />
            <img src="#" alt="" />
            <img src="#" alt="" />
            <img src="#" alt="" />
            <img src="#" alt="" />
          </div>
          <div className="row d-flex justify-content-center text-center">
            <p>
              Rick and Morty is created by Justin Roiland and Dan Harmon for
              Adult Swim. The data and images are used without claim of
              ownership and belong to their respective owners.
            </p>
          </div>
          <div className="row d-flex justify-content-center text-center">
            <p>
              Designed and developed by Matheus Martins, David Soto and Marc
              Giró
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
