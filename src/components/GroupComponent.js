import { useMemo } from "react";
import PropTypes from "prop-types";
import "./GroupComponent.css";

const GroupComponent = ({
  className = "",
  propBackgroundColor,
  image17,
  mensCompressionTrousers,
  group1686551895,
  line1,
  placeholderOne,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className={`product-images-one-parent ${className}`}
      style={groupDivStyle}
    >
      <div className="product-images-one">
        <img className="image-17-icon" loading="lazy" alt="" src={image17} />
      </div>
      <div className="product-details-one">
        <div className="details-one">
          <div className="mens-compression-trousers">
            {mensCompressionTrousers}
          </div>
          <div className="buttons-one-container">
            <img
              className="buttons-one-container-child"
              loading="lazy"
              alt=""
              src={group1686551895}
            />
          </div>
        </div>
        <div className="product-details-one-inner">
          <img className="line-icon" loading="lazy" alt="" src={line1} />
        </div>
        <div className="shop-buttons-one">
          <div className="shop-one">
            <div className="placeholder-one">{placeholderOne}</div>
            <div className="shop-now">Shop Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  image17: PropTypes.string,
  mensCompressionTrousers: PropTypes.string,
  group1686551895: PropTypes.string,
  line1: PropTypes.string,
  placeholderOne: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
};

export default GroupComponent;
