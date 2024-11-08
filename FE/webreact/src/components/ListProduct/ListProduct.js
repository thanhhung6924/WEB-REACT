import classNames from "classnames/bind";
import styles from "./ListProduct.module.scss";
import { Fragment } from "react";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { formatter } from "../../utils/fomatter";
import { generatePath, Link } from "react-router-dom";
import { ROUTERS } from "../../utils/router";

const cx = classNames.bind(styles);
function ListProduct({ img, name, price, desc, id }) {
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
            <Link to={ROUTERS.USER.CART}>
              <li>
                <AiOutlineShoppingCart />
              </li>
            </Link>
          </ul>
        </div>

        <div className={cx("item-text")}>
          <h6>{desc}</h6>
          <h5>
            <Link to={generatePath(ROUTERS.USER.PRODUCTS, { id: 1 })}>
              {name}
            </Link>
          </h5>
          <h4>{formatter(price)}</h4>
        </div>
      </div>
    </Fragment>
  );
}
export default ListProduct;
