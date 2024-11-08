import { Fragment, memo } from "react";
import classNames from "classnames/bind";
import styles from "./Action.module.scss";
import { Link } from "react-router-dom";
import { ROUTERS } from "../../../utils/router";
import BreadCrumb from "../theme/BreadCrumb/BreadCrumb";
import { ListProDuct } from "../../../components";
import pr1 from "../../../assets/user/images/all/1.jpg";
import pr2 from "../../../assets/user/images/all/2.jpg";
import pr3 from "../../../assets/user/images/all/3.jpg";
import pr4 from "../../../assets/user/images/all/4.jpg";
import pr5 from "../../../assets/user/images/all/5.jpg";
import pr6 from "../../../assets/user/images/all/6.jpg";
import pr7 from "../../../assets/user/images/all/7.jpg";
import pr8 from "../../../assets/user/images/all/8.jpg";
import pr9 from "../../../assets/user/images/all/9.jpeg";
import pr10 from "../../../assets/user/images/all/10.jpg";
import pr11 from "../../../assets/user/images/all/11.jpg";
import pr12 from "../../../assets/user/images/all/12.jpg";
const cx = classNames.bind(styles);
const fullproducts = [
  {
    img: pr1,
    name: "Retro Souvenir Ball - The Team",
    price: 550000,
    desc: "New Arrival",
  },
  {
    img: pr2,
    name: "Basas Day Slide - Slip On",
    price: 550000,
    desc: "New Arrival",
  },
  {
    img: pr3,
    name: "Basic Tee - Branding Label",
    price: 450000,
    desc: "New Arrival",
  },
  {
    img: pr4,
    name: "Basic Tee - Ananas Oval Symbol",
    price: 290000,
    desc: "New Arrival",
  },
  {
    img: pr5,
    name: "Urbas Love+ 24",
    price: 650000,
    desc: "New Arrival",
  },
  {
    img: pr6,
    name: "Pigment Tee - Nice Nature Club",
    price: 720000,
    desc: "New Arrival",
  },
  {
    img: pr7,
    name: "Track 6 Sneakers - Olive Green",
    price: 880000,
    desc: "New Arrival",
  },
  {
    img: pr8,
    name: "Canvas Tote Bag - Iconic Logo",
    price: 300000,
    desc: "New Arrival",
  },
  {
    img: pr9,
    name: "Baseball Cap - Ananas Style",
    price: 250000,
    desc: "New Arrival",
  },

  {
    img: pr10,
    name: "Vintage Jacket - Olive Green",
    price: 1200000,
    desc: "New Arrival",
  },
  {
    img: pr11,
    name: "Classic Denim Jacket",
    price: 950000,
    desc: "New Arrival",
  },
  {
    img: pr12,
    name: "Slim Fit Jeans - Dark Wash",
    price: 650000,
    desc: "New Arrival",
  },
  {
    img: pr1,
    name: "Crewneck Sweatshirt",
    price: 500000,
    desc: "New Arrival",
  },
  { img: pr2, name: "Fleece Hoodie", price: 750000, desc: "New Arrival" },
  {
    img: pr3,
    name: "Leather Wallet - Slim",
    price: 300000,
    desc: "New Arrival",
  },
  {
    img: pr4,
    name: "Beanie - Navy Blue",
    price: 150000,
    desc: "New Arrival",
  },
  {
    img: pr5,
    name: "High-Top Sneakers - Urban Style",
    price: 850000,
    desc: "New Arrival",
  },

  {
    img: pr6,
    name: "Crop Top - Ananas Logo",
    price: 320000,
    desc: "New Arrival",
  },
  {
    img: pr7,
    name: "Oversized Hoodie - Pink",
    price: 680000,
    desc: "New Arrival",
  },
  {
    img: pr8,
    name: "Ankle Jeans - Light Wash",
    price: 550000,
    desc: "New Arrival",
  },
];

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
function Action(props) {
  const sorts = [
    "Thấp đến cao",
    "Cao đến thấp",
    "Sản phẩm mới nhất",
    "Sản phẩm đã đánh giá cao nhất",
    "Giá cao nhất",
    "Giá thấp nhất",
  ];
  return (
    <Fragment>
      <BreadCrumb name="Danh sách sản phẩm" />
      <div className="container">
        <div className={`${cx("row__wrapper")} row`}>
          <div className="col-bread-3">
            <div className={cx("sidebar")}>
              <div className={cx("sidebar__item")}>
                <h2>Tìm kiếm</h2>
                <input type="text" />
              </div>
              <div className={cx("sidebar__item")}>
                <h2>Mức giá</h2>
                <div className={cx("price")}>
                  <div className={cx("price__start")}>
                    <p>Từ:</p>
                    <input type="number" min={0} />
                  </div>
                  <div className={cx("price__end")}>
                    <p>Đến:</p>
                    <input type="number" max={10000} />
                  </div>
                </div>
              </div>
              <div className={cx("sidebar__item")}>
                <h2>Sắp xếp</h2>
                {sorts.map((sort, index) => (
                  <div
                    key={index}
                    className={`${cx("sort")} ${
                      index === 0 ? cx("active") : ""
                    }`}
                  >
                    {sort}
                  </div>
                ))}
              </div>
              <div className={cx("sidebar__item")}>
                <h2>Thể loại khác</h2>
                <ul className={cx("list--item")}>
                  {listMenu.map((item, index) => (
                    <li key={index}>
                      <Link to={item.path}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-bread-9">
            <div className={`${cx("row")} row`}>
              {fullproducts.map((item, index) => (
                <div className={cx("")}>
                  <ListProDuct
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    desc={item.desc}
                    id={item.id}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Action;
