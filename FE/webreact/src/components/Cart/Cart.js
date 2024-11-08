import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import { Fragment } from "react";
import {
  AiOutlineClose,
  AiOutlineEye,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { formatter } from "../../utils/fomatter";
import { generatePath, Link } from "react-router-dom";
import { ROUTERS } from "../../utils/router";
import BreadCrumb from "../../page/user/theme/BreadCrumb/BreadCrumb";
import img from "../../assets/user/images/all/10.jpg";
import Quantily from "../Quantity/Quantily";
const cx = classNames.bind(styles);
function Cart() {
  return (
    <Fragment>
      <BreadCrumb name="Giỏ hàng" />
      <div className="container">
        <div className={cx("table__cart")}>
          <table>
            <thead>
              <tr>
                <th>Tên</th>
                <th>Giá</th>
                <th>Số Lượng</th>
                <th>Thành Tiền</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={img} alt="" />
                  <h4>Tên sản phẩm </h4>
                </td>
                <td>{formatter(200000)}</td>
                <td className={cx()}>
                  <div className={cx("center")}>
                    <Quantily hashAddToCart={false} />
                  </div>
                </td>
                <td>{formatter(200000)}</td>
                <td className={cx("close")}>
                  <AiOutlineClose />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row">
          <div className=" col-lg-4 col-md-12 ">
            <div className={cx("discount")}>
              <h3>Mã giảm giá</h3>
              <form action="">
                <input type="text" />
                <button>Áp dụng</button>
              </form>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className={cx("total")}>
              <h3>Tổng giá</h3>
              <p>Tổng giá: {formatter(400000)}</p>
              <Link>
                <button className={cx("btn")}>Tiến hành đặt hàng</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Cart;
