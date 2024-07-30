import PropTypes from "prop-types";
import "./ProductsFirst.css";

const ProductsFirst = ({
  className = "",
  image20,
  mensCamoCargoSportsPants,
  line7,
  prop,
}) => {
  return (
    <div className={`products-first ${className}`}>
      <div className="image-20-wrapper">
        <img className="image-20-icon" loading="lazy" alt="" src={image20} />
      </div>
      <div className="frame-parent16">
        <div className="mens-camo-cargo-sports-pants-parent">
          <div className="mens-camo-cargo">{mensCamoCargoSportsPants}</div>
          <img className="frame-child12" />
        </div>
        <div className="vector-wrapper">
          <img className="frame-child13" alt="" src={line7} />
        </div>
        <div className="frame-wrapper9">
          <div className="parent">
            <div className="div4">{prop}</div>
            <div className="shop-now1">Shop Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductsFirst.propTypes = {
  className: PropTypes.string,
  image20: PropTypes.string,
  mensCamoCargoSportsPants: PropTypes.string,
  line7: PropTypes.string,
  prop: PropTypes.string,
};

export default ProductsFirst;
