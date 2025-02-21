import { memo } from "react";
import {
  FaMailchimp,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaGoogle,
} from "react-icons/fa";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import logo1 from"../../../../assets/user/images/logo/DiscoverYOU.svg" 
const cx = classNames.bind(styles);
const Footer = () => {
  return (
    <footer className={cx("footer")}>
      <div className="container">
      <div className={`${cx("row__footer")} row`}>
          <div className="col-lg-3 col-xl-3 col-md-6 col-sm-12">
            <div className={cx("footer__about")}>
              <img className="logo__all" src={logo1} alt="" />
              <ul>
                <li>Địa chỉ :84/90 Tân Sơn Nhì</li>
                <li>Email : 123@gmail.com</li>
                {/* <li>Hotline : 0987654321</li>
                <li>Giờ mở cửa : 8:00 - 22:00</li> */}
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
            <div className={cx("footer__widget")}>
              <h6>Cửa hàng</h6>
              <ul>
                <li>
                  <Link>Liên hệ</Link>
                </li>
                <li>
                  <Link>Thông tin về chúng tôi</Link>
                </li>
                <li>
                  <Link>Thông tin tài khoảng</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link>Sản phẩm kính doanh</Link>
                </li>
                <li>
                  <Link>Giở hàng</Link>
                </li>
                <li>
                  <Link>Liên hệ</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-xl-3 col-md-12 col-sm-12">
            <div className={cx("footer__widget")}>
              <h6>Khuyến mãi và ưu đãi</h6>
              <p>Đăng ký nhận thông tin</p>
              <form action="">
                <div>
                  <input type="text" name="email" placeholder="Email của bạn" />
                  <button type="submit">Đăng ký</button>
                </div>
                <div className={cx("footer__widget__social")}>
                  <Link href="#">
                    <FaFacebookF />
                  </Link>
                  <Link href="#">
                    <FaInstagram />
                  </Link>
                  <Link href="#">
                    <FaTiktok />
                  </Link>
                  <Link href="#">
                    <FaGoogle />
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default memo(Footer);
