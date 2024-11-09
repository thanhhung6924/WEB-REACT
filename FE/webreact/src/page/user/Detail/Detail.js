import { Fragment, memo, useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Detail.module.scss";
import pr1 from "../../../assets/user/images/all/1.jpg";
import pr2 from "../../../assets/user/images/all/2.jpg";
import pr3 from "../../../assets/user/images/all/3.jpg";
import pr4 from "../../../assets/user/images/all/4.jpg";
import detail1 from "../../../assets/user/images/detail/1.jpg";
import detail2 from "../../../assets/user/images/detail/2.jpg";
import detail3 from "../../../assets/user/images/detail/3.jpg";
import detail4 from "../../../assets/user/images/detail/4.jpg";

import BreadCrumb from "../theme/BreadCrumb/BreadCrumb";
import {
  AiOutlineAim,
  AiOutlineCopy,
  AiOutlineEye,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { formatter } from "../../../utils/fomatter";
import { ListProDuct } from "../../../components";
import Quantily from "../../../components/Quantity/Quantily";
const cx = classNames.bind(styles);
const imgs = [detail2, detail3, detail4];
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
];
const productInfo = [
  {
    title: "THÔNG TIN SẢN PHẨM",
    content:
      "Vỏ bóng: Da nhân tạo (Synthentic Leather) Ruột bóng: Cao su Size: 5 Khuyến nghị trưng bày hoặc chơi với cường độ nhẹ, không đủ tiêu chuẩn dành cho những trận đấu chính thức. Có kèm theo hộp và 01 (một) kim bơm bóng.",
  },
  {
    title: "QUY ĐỊNH ĐỔI SẢN PHẨM",
    content:
      "Đối với những sản phẩm giày và thời trang thuộc phiên bản giới hạn. Vì nhiều lý do chúng tôi sẽ không áp dụng chính sách đổi hàng. Vui lòng cân nhắc kỹ trước khi quyết định mua.",
  },
  {
    title: "BẢO HÀNH THẾ NÀO ?",
    content:
      "Đối với các sản phẩm thuộc nhóm phụ kiện, chính sách bảo hành không được áp dụng. Mong bạn thông cảm.",
  },
];
function Detail() {
  return (
    <Fragment>
      <BreadCrumb name="Chi tiết sản phẩm" />
      <div className="container">
        <div className={`${cx("row")} row`}>
          <div className={`${cx("wrapper__img")} col-lg-6`}>
            <img className={cx("big__img")} src={detail1} alt="" />
            <div className={cx("mini__img")}>
              {imgs.map((img, i) => (
                <img key={i} src={img} alt="" />
              ))}
            </div>
          </div>
          <div className={`${cx("wrapper__content")} col-lg-6`}>
            <h2>Retro Souvenir Ball - The Team - Brilliant White</h2>
            <div className={cx("seen")}>
              <AiOutlineEye />
              {`10 lượt xem`}
            </div>
            <h3>{formatter(600000)}</h3>
            <p>
              Lấy cảm hứng từ quả bóng đá 15 mảnh được sử dụng rộng rãi trên thế
              giới vào những năm 1950s, quả bóng Retro Souvenir Ball - The Team
              được thiết kế nhằm lưu giữ kỉ niệm về nhiều điều đầu tiên của
              thương hiệu Ananas Football. Được làm từ da nhân tạo với màu chủ
              đạo trắng và các chi tiết trang trí đỏ và đen, quả bóng không phải
              là lựa chọn đủ tiêu chuẩn cho một trận thi đấu bóng đá chính thức,
              mà chỉ thực hiện tốt nhiệm vụ lưu giữ, trưng bày. Phiên bản mở màn
              đặc biệt trong chiến dịch The Team, số lượng khá hạn chế và sẽ
              không re-stock.
            </p>

            {/* mua hàng */}
            <Quantily hashAddToCart={true} />
            <ul>
              <li>
                <b>Tình trạng:</b>
                <span>Còn hàng</span>
              </li>
              <li>
                <b>Số lượng:</b>
                <span>20</span>
              </li>
              <li>
                {" "}
                <b>Chia sẽ:</b>
                <span>
                  <AiOutlineFacebook />
                  <AiOutlineLinkedin />
                  <AiOutlineCopy />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className={cx("tab")}>
          {productInfo.map((item, index) => (
            <div key={index} className={cx("tab__item")}>
              <h4>{item.title}</h4>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
        <div className={cx("detail")}>
          <h3>Sản Phẩm Gần Đây</h3>
          <div className={cx("near")}>
            {fullproducts.map((item, index) => (
              <div className={cx("item")}>
                <ListProDuct
                  img={item.img}
                  name={item.name}
                  price={item.price}
                  desc={item.desc}
                  id={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default memo(Detail);
