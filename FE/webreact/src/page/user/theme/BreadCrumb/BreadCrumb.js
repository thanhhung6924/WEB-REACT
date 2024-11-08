import { Fragment, memo } from "react";
import classNames from "classnames/bind";
import styles from "./BreadCrumb.module.scss";
import { Link } from "react-router-dom";
import { ROUTERS } from "../../../../utils/router";
const cx = classNames.bind(styles);
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
function BreadCrumb(props) {
  
  console.log(props.name)
  return (
    <Fragment>
      <div className={cx("bread")}>
        <div className={cx("text")}>
          <h1>ANANAS </h1>
          <div className={cx("option")}>
            <ul>
              <li className={cx("")}>
                <Link to>Trang chủ</Link>
              </li>
              <li className={cx("link")}>{props.name}</li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default BreadCrumb;
