import classNames from "classnames/bind";
import styles from "./ListProduct.module.scss";
import { Fragment } from "react";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { formatter } from "../../utils/fomatter";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function ListProduct({ img, name, price, desc,id }) {
  return (
    <Fragment>
      <div className={cx("list__item")}>
        <div
          style={{ backgroundImage: `url("${img}")` }}
          className={cx("pic")}
          key={id}
        >
          <ul className={cx("hover")}>
            <li>
              <AiOutlineEye />
            </li>
            <li>
              <AiOutlineShoppingCart />
            </li>
          </ul>
        </div>

        <div className={cx("item-text")}>
          <h6>{desc}</h6>
          <h5>
            <Link to="">{name}</Link>
          </h5>
          <h4>{formatter(price)}</h4>
        </div>
      </div>
    </Fragment>
  );
}
export default ListProduct;
