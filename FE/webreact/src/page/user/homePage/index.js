import { Fragment, memo, useState,useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./homePage.module.scss";
import { IoMenu } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { AiOutlinePhone } from "react-icons/ai";
import { ROUTERS } from "../../../../src/utils/router";
const cx = classNames.bind(styles);
const HomePage = () => {
  const location=useLocation()
  const [isShowMenu, setMenu] = useState(false);

  const [isHome, setHome] = useState(location.pathname.length<=1);
  const [isShowC, setC] = useState(isHome);
  useEffect(() =>{
    const isHome=location.pathname.length<=1
    setHome(isHome)
    setC(isHome)
  },[location.pathname.length])
  const listMenu = [
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
  return (
    <>
      <div className="container">
        <div className={`${cx("row")} row`}>
          <div className={` col-mx-12  col-lg-3 col-xl-3`}>
            <h3
              onClick={() => {
                setMenu(!isShowMenu);
              }}
              className={cx("list__item")}
            >
              {" "}
              <IoMenu /> Danh sách sản phẩm
            </h3>
            {isShowMenu && (
              <div className={cx("hero__left")}>
                <ul>
                  {listMenu.map((item, index) => (
                    <li key={index}>
                      <Link to={item.path}>{item.name}</Link>
                    </li>
                  ))}
                  {/* <li>
                    <Link>Basas</Link>
                  </li>
                  <li>
                    <Link>Vintas</Link>
                  </li>
                  <li>
                    <Link>Nước trái cây</Link>
                  </li>
                  <li>
                    <Link>Trái cây</Link>
                  </li>
                  <li>
                    <Link>Hải sản</Link>
                  </li> */}
                </ul>
              </div>
            )}
          </div>
          <div className={` ${cx("hero__right")} col-mx-12 col-lg-9 col-xl-9`}>
            <div className={cx("search")}>
              <form action="">
                <input type="text" placeholder="Tìm kiếm sản phẩm" />
                <button type="submit">Tìm kiếm</button>
              </form>

              <div className={cx("contact")}>
                <div className={cx("phone")}>
                  <AiOutlinePhone />
                </div>
                <div className={cx("text")}>
                  <p>0865.745.541</p>
                  <span>Hỗ trợ 24/7</span>
                </div>
              </div>
            </div>
           {isHome&&( <div className={cx("hero__item")}>
              <div className={cx("hero__content")}>
                <span>ANANAS-PASTAS</span>
                <h2>
                  Đậm chất riêng<br />
                 cùng ANANAS
                </h2>
                <p>Miễn phí giao hàng tận nơi</p>
                <Link>Mua ngay</Link>
              </div>
            </div>)}
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(HomePage);
