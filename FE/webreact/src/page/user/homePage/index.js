import { memo } from "react";
import classNames from "classnames/bind";
import styles from "./style.scss"
const cx = classNames.bind(styles);
const HomePage = () => {
  return (
    <h1 className="ok">HomePage</h1>
  );
};
export default memo(HomePage);
