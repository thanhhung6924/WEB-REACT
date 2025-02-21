import { Fragment, memo } from "react";
import classNames from "classnames/bind";
import styles from "./login.module.scss";
const cx = classNames.bind(styles);
const Login = () => {
  return (
    <Fragment>
      <div className={cx("container")}>
        <h2>TRUY CẬP HỆ THỐNG QUẢN TRỊ</h2>
        <form action="">
          <input type="text " placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </Fragment>
  );
};
export default memo(Login);
