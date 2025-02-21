import classNames from "classnames/bind";
import styles from "./Quantily.module.scss";
import { Fragment } from "react";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { formatter } from "../../utils/fomatter";
import { generatePath, Link } from "react-router-dom";
import { ROUTERS } from "../../utils/router";

const cx = classNames.bind(styles);
function Quantily({ hashAddToCart = true }) {
  return (
    <Fragment>
      <div className={cx("wrapper")}>
        <div className={cx("quantily")}>
          <span  className={cx("btn")}>-</span>
          <input className={cx("in")} type="number" defaultValue={0} />
          <span className={cx("btn")}>+</span>
        </div>
        {hashAddToCart && (
          <button className={cx("submit")} type="submit">
            Thêm vào giảo hàng
          </button>
        )}
      </div>
    </Fragment>
  );
}
export default Quantily;
