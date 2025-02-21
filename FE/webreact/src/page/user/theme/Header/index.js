import { Fragment, memo, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { TiShoppingCart } from "react-icons/ti";

import logo2 from "../../../../assets/user/images/logo/ananas_logo.svg";
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
import {
  AiOutlineUpCircle,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineDownCircle,
} from "react-icons/ai";
import { BiUser } from "react-icons/bi";
const cx = classNames.bind(styles);
export const listMenu = [
  {
    name: "Basas",
    path: ROUTERS.USER.PRODUCT,
  },
  {
    name: "Vintas",
    path: "",
  },
  { name: "Urbas", path: "" },
  { name: "Pattas", path: "" },
  { name: "Tote Bag", path: "" },
  { name: "Socks | Vớ", path: "" },
  { name: "Shoelaces", path: "" },
  { name: "Effect Tee", path: "" },
  { name: "Souvenir Ball", path: "" },
];
const Header = () => {
  const [isShowMenu, setShow] = useState(true);
  const [menu, setMenu] = useState([
    {
      name: "Trang chủ",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Cửa Hàng",
      path: ROUTERS.USER.PROFILE,
    },
    {
      name: "Sản Phẩm",
      path: ROUTERS.USER.HOME,
      isShowSubmenu: false,
      children: [
        {
          name: "NAM",
          path: ROUTERS.USER.HOME,
        },
        {
          name: "NỮ",
          path: ROUTERS.USER.HOME,
        },
        {
          name: "SALE-OFF",
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
  const toggleMenu = () => setShow(!isShowMenu);
  return (
    <Fragment>
      <div>
        <div
          onClick={toggleMenu}
          className={`${cx("close")} ${isShowMenu ? cx("active") : ""}`}
        ></div>
        <div className={`${cx("menu__open")} ${isShowMenu ? cx("show") : ""}`}>
          <div className={cx("menu__open__logo")}>
            <img className="logo__all" src={logo2} alt="" />
          </div>
          <div className={cx("menu__open__cart")}>
            <ul>
              <li>
                <Link to={ROUTERS.USER.CART}>
                  <AiOutlineShoppingCart />
                  <span>1</span>
                </Link>
              </li>
            </ul>
            <div className={cx("menu__open__price")}>
              Giỏ hàng :<span>{formatter(1000000)}</span>
            </div>
          </div>
          <div className={cx("widget__open")}>
            <div className={cx("right__auth")}>
              <a href="https://thanhhung6924.github.io/login2/">
                <BiUser />
                {/* <span>Đăng nhập</span> */}
                <Link to={ROUTERS.ADMIN.LOGIN}>
                  <span>Đăng nhập</span>
                </Link>
              </a>
            </div>
          </div>
          <div className={cx("nav__open")}>
            <ul>
              {menu.map((item, index) => (
                <li to={item.path} key={index}>
                  <Link
                    to={item.path}
                    onClick={() => {
                      const newMenu = [...menu];
                      newMenu[index].isShowSubmenu =
                        !newMenu[index].isShowSubmenu;
                      setMenu(newMenu);
                    }}
                  >
                    {item.name}
                    {item.children &&
                      (item.isShowSubmenu ? (
                        <AiOutlineDownCircle />
                      ) : (
                        <AiOutlineUpCircle />
                      ))}
                  </Link>
                  {item.children && (
                    <ul
                      className={`${cx("ul__list")} ${
                        item.isShowSubmenu ? cx("drop") : ""
                      }`}
                    >
                      {item.children.map((item, index) => (
                        <li key={index}>
                          <Link to={item.path}> {item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className={cx("social__open")}>
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
            </ul>
          </div>
          <div className={cx("contact__open")}>
            <ul>
              <li>
                <i className={cx("fa fa-envelope")}>ananas@gmail.com</i>
              </li>
              <li>Miễn phí đơn từ {formatter(200000)}</li>
            </ul>
          </div>
        </div>
      </div>
      <header className={cx("header__top")}>
        <div className="container">
          <div className={`${cx("row")} row`}>
            <div className={`${cx("col__left")}`}>
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
                  <Link to={ROUTERS.ADMIN.LOGIN}>
                  <span>Đăng nhập</span>
                </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className={`${cx("navbar__list")} row`}>
          <div className=" col-lg-3 col-xl-3">
            <div className={cx("header__logo")}>
              <img className="logo__all" src={logo2} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-xl-6">
            <nav className={cx("header__menu")}>
              <ul>
                {menu.map((menuItem, index) => (
                  <li className={cx({ active: index === 0 })} key={index}>
                    <Link to={menuItem.path}>{menuItem.name}</Link>
                    {menuItem.children && (
                      <ul className={cx("header__menu__dropdown")}>
                        {menuItem.children.map((childItem, indexChild) => (
                          <li
                            className={cx({ activeChild: indexChild === 0 })}
                            key={`${index}-${indexChild}`}
                          >
                            <Link to={childItem.path}>{childItem.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
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
                  <Link to={ROUTERS.USER.CART}>
                    <TiShoppingCart className={cx("cart-icon")} />
                    <span className={cx("cart-count")}>5</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={cx("open")}>
              <AiOutlineMenu onClick={toggleMenu} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default memo(Header);
