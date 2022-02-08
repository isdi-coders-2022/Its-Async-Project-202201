const Footer = () => {
  return (
    <>
      <footer className="bg-warning">
        <div className="container">
          <div className="row d-flex justify-content-center text-center mb-3">
            <img
              className="col-2"
              src="images/jerry.png"
              alt="Jerry logo from Rick and Morty"
            />
            <img
              className="col-2"
              src="images/rick.png"
              alt="Rick logo from Rick and Morty"
            />
            <img
              className="col-2"
              src="images/morty.png"
              alt="Morty logo from Rick and Morty"
            />
            <img
              className="col-2"
              src="images/summer.png"
              alt="Summer logo from Rick and Morty"
            />
            <img
              className="col-2"
              src="images/beth.png"
              alt="Beth logo from Rick and Morty"
            />
          </div>
          <div className="row d-flex justify-content-center text-center mb-3">
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
};

export default Footer;
