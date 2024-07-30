import GroupComponent from "./GroupComponent";
import ProductsFirst from "./ProductsFirst";
import ProductsLast from "./ProductsLast";
import PropTypes from "prop-types";
import "./ProductsSecond.css";

const ProductsSecond = ({ className = "" }) => {
  return (
    <div className={`products-second ${className}`}>
      <div className="product-container-two">
        <GroupComponent
          propBackgroundColor="rgba(246, 246, 246, 0.45)"
          image17="/image-23@2x.png"
          mensCompressionTrousers="Sleeves Fell Off Tank Top"
          group1686551895="/group-1686551895-1.svg"
          line1="pending_1056:1783"
          placeholderOne="9.00$"
        />
        <GroupComponent
          propBackgroundColor="rgba(246, 246, 246, 0.45)"
          image17="/image-24@2x.png"
          mensCompressionTrousers="Sports Shirt Short Sleeve Bat Athletic"
          group1686551895="/group-1686551897.svg"
          line1="pending_1056:1763"
          placeholderOne="21.00$"
        />
        <ProductsFirst
          image20="/image-25@2x.png"
          mensCamoCargoSportsPants="Milin Naco Sleeveless Compression Shirts for Men"
          line7="pending_1056:1773"
          prop="27.00$"
        />
      </div>
      <div className="products-three">
        <ProductsLast
          image28="/image-28@2x.png"
          sportsShirtShortSleeveBat="Sports Shirt Short Sleeve Bat Athletic"
          group1686551899="/group-1686551899.svg"
          line4="pending_1056:1792"
          placeholderThree="21.00$"
        />
        <ProductsLast
          propPadding="148px 15px 19px 14px"
          image28="/image-29@2x.png"
          sportsShirtShortSleeveBat="Skechers Men's Energy Afterburn"
          group1686551899="/group-1686551900.svg"
          line4="pending_1056:1801"
          placeholderThree="31.00$"
        />
      </div>
    </div>
  );
};

ProductsSecond.propTypes = {
  className: PropTypes.string,
};

export default ProductsSecond;
