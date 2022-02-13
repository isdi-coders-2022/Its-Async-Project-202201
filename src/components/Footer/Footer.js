import StyledFooter from "../../styles/Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <div className="image-container d-flex justify-content-center text-center mt-3 mb-2">
          <img
            className="col-2"
            src="https://itsasync.netlify.app/images/jerry.png"
            alt="Jerry logo from Rick and Morty"
          />
          <img
            className="col-2"
            src="https://itsasync.netlify.app/images/rick.png"
            alt="Rick logo from Rick and Morty"
          />
          <img
            className="col-2"
            src="https://itsasync.netlify.app/images/morty.png"
            alt="Morty logo from Rick and Morty"
          />
          <img
            className="col-2"
            src="https://itsasync.netlify.app/images/summer.png"
            alt="Summer logo from Rick and Morty"
          />
          <img
            className="col-2"
            src="https://itsasync.netlify.app/images/beth.png"
            alt="Beth logo from Rick and Morty"
          />
        </div>
        <div className="footer-text-holder d-flex justify-content-center text-center">
          <p>
            Rick and Morty is created by Justin Roiland and Dan Harmon for Adult
            Swim. The data and images are used without claim of ownership and
            belong to their respective owners.
          </p>
        </div>
        <div className="footer-text-holder-2 d-flex justify-content-center text-center">
          <p>
            Designed and developed by Matheus Martins, David Soto and Marc Giró
          </p>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
