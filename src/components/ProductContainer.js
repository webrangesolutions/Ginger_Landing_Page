import GroupComponent from "./GroupComponent";
import ProductsFirst from "./ProductsFirst";
import PropTypes from "prop-types";
import "./ProductContainer.css";

const ProductContainer = ({ className = "" }) => {
  return (
    <div className={`product-container ${className}`}>
      <GroupComponent
        image17="/image-17@2x.png"
        mensCompressionTrousers="Mens Compression Trousers"
        group1686551895="/group-1686551895.svg"
        line1="/line-1.svg"
        placeholderOne="21.00$"
      />
      <div className="products-first1">
        <div className="image-18-wrapper">
          <img
            className="image-18-icon"
            loading="lazy"
            alt=""
            src="/image-18@2x.png"
          />
        </div>
        <div className="frame-parent17">
          <div className="mens-compression-shorts-parent">
            <div className="mens-compression-shorts">
              Mens Compression Shorts
            </div>
            <img className="frame-child14" />
          </div>
          <div className="vector-container">
            <img className="frame-child15" alt="" src="/line-1.svg" />
          </div>
          <div className="frame-wrapper10">
            <div className="group">
              <div className="div5">20.00$</div>
              <div className="shop-now2">Shop Now</div>
            </div>
          </div>
        </div>
      </div>
      <ProductsFirst
        image20="/image-20@2x.png"
        mensCamoCargoSportsPants="Mens Camo Cargo Sports Pants"
        line7="/line-1.svg"
        prop="23.00$"
      />
    </div>
  );
};

ProductContainer.propTypes = {
  className: PropTypes.string,
};

export default ProductContainer;
