import { Fragment, memo, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { TiShoppingCart } from "react-icons/ti";

import {
  FaMailchimp,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaGoogle,
} from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { formatter } from "../../../../utils/fomatter";
import { ROUTERS } from "../../../../utils/router";
const cx = classNames.bind(styles);
const Header = () => {
  const [menu, setMenu] = useState([
    {
      name: "Trang chủ",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Cửa Hàng",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Sản Phẩm",
      path: ROUTERS.USER.HOME,
      isShowSubmenu: false,
      children: [
        {
          name: "Thịt",
          path: ROUTERS.USER.HOME,
        },
        {
          name: "Rau củ",
          path: ROUTERS.USER.HOME,
        },
        {
          name: "Thức an nhanh",
          path: ROUTERS.USER.HOME,
        },
      ],
    },
    {
      name: "Bài Viết",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Liên Hệ",
      path: ROUTERS.USER.HOME,
    },
  ]);
  return (
    <Fragment>
      <header className={cx("header__top")}>
        <div className="container">
          <div className={cx("row")}>
            <div className={cx("col__left")}>
              <ul>
                <li>
                  <FaMailchimp />
                  thanhhung@gmail.com
                </li>
                <li>miễn phí ship đơn từ {formatter(1000000)}</li>
              </ul>
            </div>
            <div className={cx("col__right")}>
              <ul>
                <li>
                  <Link to="/ok">
                    {" "}
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaTiktok />
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaGoogle />
                  </Link>
                </li>
                <li>
                  <Link>
                    <IoPersonOutline />
                  </Link>
                  <p>Đăng nhập</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row navbar__list">
          <div className=" col-lg-3 col-xl-3">
            <div className={cx("header__logo")}>
              <h1>FOODSHOP</h1>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6">
            <nav className={cx("header__menu")}>
              <ul>
                {menu.map((menuItem, index) => (
                  <li className={cx({ active: index === 0 })} key={index}>
                    <Link to={menuItem.path}>{menuItem.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-lg-3 col-xl-3">
            <div className={cx("header__cart")}>
              <div className={cx("header__cart__price")}>
                <span>{formatter(1023000)}</span>
              </div>
              <ul>
                <li>
                  <Link>
                    <TiShoppingCart className={cx("cart-icon")} />
                    <span className={cx("cart-count")}>5</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default memo(Header);
