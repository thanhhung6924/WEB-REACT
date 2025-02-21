import { Fragment, memo } from "react";
import classNames from "classnames/bind";
import styles from "./Checkout.module.scss";
import { Link } from "react-router-dom";
import { ROUTERS } from "../../../utils/router";
import BreadCrumb from "../theme/BreadCrumb/BreadCrumb";
import { ListProDuct } from "../../../components";
import { formatter } from "../../../utils/fomatter";

const cx = classNames.bind(styles);
const products=[
  {
    name:"Sản phẩm 1",
    gia:1000
  },
  {
    name:"Sản phẩm 2",
    gia:3000
  },
  {
    name:"Sản phẩm 3",
    gia:1000
  },
  {
    name:"Sản phẩm 4",
    gia:5000
  },

]
function Checkout(props) {
  return (
    <Fragment>
      <BreadCrumb link={ROUTERS.USER.PROFILE} name="Check out" />
      <div className="container">
        <div className={`${cx("row")} row`}>
          <div className="col-lg-6 col-md-12">
            <div className={cx("checkout__input")}>
              <h2>Thông tin đặt hàng</h2>
              <label htmlFor="">
                Họ và tên: <span className={cx("required")}>*</span>
              </label>
              <input type="text" placeholder="Nhập họ và tên" />
              <label htmlFor="">
                Địa chỉ: <span className={cx("required")}>*</span>
              </label>
              <input type="text" placeholder="Nhập địa chỉ" />
              <div className={cx("checkout__group")}>
                <div>
                  <label htmlFor="">
                    Số điện thoại: <span className={cx("required")}>*</span>
                  </label>
                  <br />
                  <input type="text" placeholder="Nhập số điện thoại" />
                </div>
                <div>
                  <label htmlFor="">
                    Email: <span className={cx("required")}>*</span>
                  </label>
                  <input type="text" placeholder="Nhập email" />
                </div>
              </div>
              <label htmlFor="">Ghi chú:</label>
              <input type="text" placeholder="Nhập ghi chú" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className={cx("checkout__order")}>
              <h2>Đơn hàng</h2>
              <ul>
                {products.map((product,index)=>(
                  <li key={index}>
                    <span>{product.name}</span>
                    <b>{formatter(product.gia)}</b>
                  </li>
                ))}
                {/* <li>
                  <span>Sản phẩm</span>
                  <b>{formatter(100000)}</b>
                </li> */}
                <li className={cx("code")}>
              
                  <h4>Mã giảm giá</h4>
                  <b>VDTH221A010758</b>
                </li>
           
                <li className={cx("total")}>
                  <h3>Tổng đơn</h3>
                  <b>{formatter(200000)}</b>
                </li>
              </ul>
              <button>Đặt hàng</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Checkout;
