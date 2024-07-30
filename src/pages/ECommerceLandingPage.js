import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import ProductContainer from "../components/ProductContainer";
import ProductsSecond from "../components/ProductsSecond";
import AppDownload from "../components/AppDownload";
import "./ECommerceLandingPage.css";

const ECommerceLandingPage = () => {
  return (
    <div className="e-commerce-landing-page">
      <FrameComponent1 />
      <section className="main-content">
        <div className="welcome-message">
          <h1 className="welcome-to-ginger1">Welcome to Ginger!</h1>
          <h1 className="enjoy-a-seamless-container">
            <p className="enjoy-a-seamless">{`Enjoy a seamless shopping experience with our top-rated products, `}</p>
            <p className="enjoy-a-seamless">{`secure payment options, and fast delivery. Shop now and save! `}</p>
          </h1>
        </div>
      </section>
      <FrameComponent frame1686552025="/frame-1686552025@2x.png" />
      <section className="e-commerce-landing-page-inner">
        <img className="rectangle-icon" alt="" src="/rectangle-393901@2x.png" />
      </section>
      <section className="products">
        <div className="product-scroll">
          <ProductContainer />
          <ProductsSecond />
        </div>
      </section>
      <AppDownload />
      <div className="footer">
        <div className="footer-content">
          <div className="footer-heading1">
            <h1 className="heading1">Contact us</h1>
          </div>
          <img
            className="footer-content-child"
            alt=""
            src="/group-1686551901-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ECommerceLandingPage;
