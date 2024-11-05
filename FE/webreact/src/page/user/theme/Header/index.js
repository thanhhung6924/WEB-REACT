import { Fragment, memo } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
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
const cx = classNames.bind(styles);
const Header = () => {
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
        <div className="row">
          <div className=" col-lg-3 col-xl-3">LOGO</div>
          <div className="col-lg-6 col-xl-6">LOGO</div>
          <div className="col-lg-3 col-xl-3">LOGO</div>
        </div>
      </div>
    </Fragment>
  );
};
export default memo(Header);
