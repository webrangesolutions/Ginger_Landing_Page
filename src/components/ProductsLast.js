import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ProductsLast.css";

const ProductsLast = ({
  className = "",
  propPadding,
  image28,
  sportsShirtShortSleeveBat,
  group1686551899,
  line4,
  placeholderThree,
}) => {
  const productsLastStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={`products-last ${className}`} style={productsLastStyle}>
      <div className="product-images-three">
        <img className="image-28-icon" loading="lazy" alt="" src={image28} />
      </div>
      <div className="product-details-three">
        <div className="details-last">
          <div className="sports-shirt-short">{sportsShirtShortSleeveBat}</div>
          <div className="buttons-three">
            <img
              className="buttons-three-child"
              loading="lazy"
              alt=""
              src={group1686551899}
            />
          </div>
        </div>
        <div className="product-details-three-inner">
          <img className="frame-child16" alt="" src={line4} />
        </div>
        <div className="shop-buttons-three">
          <div className="shop-three">
            <div className="placeholder-three">{placeholderThree}</div>
            <div className="shop-now3">Shop Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductsLast.propTypes = {
  className: PropTypes.string,
  image28: PropTypes.string,
  sportsShirtShortSleeveBat: PropTypes.string,
  group1686551899: PropTypes.string,
  line4: PropTypes.string,
  placeholderThree: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default ProductsLast;
