import { Fragment, memo } from "react";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import img from "../../../assets/user/images/hero/IMG transition 2.jpeg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { formatter } from "../../../utils/fomatter";
import banner1 from "../../../assets/user/images/banner/banner1.jpg";
import banner2 from "../../../assets/user/images/banner/banner2.jpg";
import main from "../../../assets/user/images/mainimg/main.jpg";
import slide1 from "../../../assets/user/images/slide/1.jpg";
import slide2 from "../../../assets/user/images/slide/2.jpg";
import slide3 from "../../../assets/user/images/slide/3.jpg";
import slide4 from "../../../assets/user/images/slide/4.jpg";
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
import { ListProDuct } from "../../../components";

const cx = classNames.bind(styles);
const ProfilePage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const slideItem = [
    {
      imgItem: slide1,
      name: "ITEM 1",
    },
    {
      imgItem: slide2,
      name: "ITEM 2",
    },
    {
      imgItem: slide3,
      name: "ITEM 3",
    },
    {
      imgItem: slide4,
      name: "ITEM 4",
    },
  ];
  const fullproducts = {
    all: {
      title: "TOÀN BỘ",
      products: [
        
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
      ],
    },
    fresh: {
      title: "NAM",
      products: [
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
      ],
    },
    female: {
      title: "NỮ",
      products: [
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
        {
          img: pr9,
          name: "Ananas Tote Bag - Floral Print",
          price: 280000,
          desc: "New Arrival",
        },
        {
          img: pr10,
          name: "Canvas Sneakers - Classic White",
          price: 680000,
          desc: "New Arrival",
        },
        {
          img: pr11,
          name: "Bucket Hat - Khaki",
          price: 220000,
          desc: "New Arrival",
        },
        {
          img: pr12,
          name: "Mini Dress - Summer Edition",
          price: 750000,
          desc: "New Arrival",
        },
        {
          img: pr1,
          name: "Sandals - Comfort Fit",
          price: 400000,
          desc: "New Arrival",
        },
      ],
    },
    accessories: {
      title: "PHỤ KIỆN",
      products: [
        {
          img: pr2,
          name: "Socks - Ananas Stripes",
          price: 100000,
          desc: "New Arrival",
        },
        {
          img: pr2,
          name: "Socks - Ananas Stripes",
          price: 100000,
          desc: "New Arrival",
        },
        {
          img: pr3,
          name: "Keychain - Mini Sneaker",
          price: 80000,
          desc: "New Arrival",
        },
        {
          img: pr4,
          name: "Water Bottle - Eco-Friendly",
          price: 200000,
          desc: "New Arrival",
        },
        {
          img: pr5,
          name: "Sunglasses - Retro Style",
          price: 450000,
          desc: "New Arrival",
        },
        {
          img: pr6,
          name: "Scarf - Cozy Knit",
          price: 300000,
          desc: "New Arrival",
        },
        {
          img: pr7,
          name: "Phone Case - Ananas Logo",
          price: 150000,
          desc: "New Arrival",
        },
        {
          img: pr8,
          name: "Wristband - Fabric",
          price: 50000,
          desc: "New Arrival",
        },
      ],
    },
    footwear: {
      title: "GIÀY DÉP",
      products: [
        {
          img: pr9,
          name: "High-Top Sneakers - Retro Black",
          price: 890000,
          desc: "New Arrival",
        },
        {
          img: pr10,
          name: "Slip-On Loafers - Urban Gray",
          price: 600000,
          desc: "New Arrival",
        },
        {
          img: pr9,
          name: "High-Top Sneakers - Retro Black",
          price: 890000,
          desc: "New Arrival",
        },
        {
          img: pr10,
          name: "Slip-On Loafers - Urban Gray",
          price: 600000,
          desc: "New Arrival",
        },
        {
          img: pr11,
          name: "Running Shoes - Performance Blue",
          price: 950000,
          desc: "New Arrival",
        },
        {
          img: pr12,
          name: "Sandals - Beach Edition",
          price: 350000,
          desc: "New Arrival",
        },
        {
          img: pr1,
          name: "Leather Boots - Classic Brown",
          price: 1200000,
          desc: "New Arrival",
        },
        {
          img: pr2,
          name: "Casual Slippers - Home Comfort",
          price: 200000,
          desc: "New Arrival",
        },
      ],
    },
  };

  const renderProducts = (data) => {
    const tabsList = [];
    const tabPanels = [];

    Object.keys(data).forEach((key, index) => {
      // console.log(key, index);
      tabsList.push(<Tab key={index}>{data[key].title}</Tab>);
      const tabPanel = [];
      data[key].products.forEach((item, id) => {
        tabPanel.push(
          <div className={`${cx("wrapper")} col-lg-3`} key={id}>
            {/* <div className={cx("list__item")}>
              <div
                style={{ backgroundImage: `url("${item.img}")` }}
                className={cx("pic")}
                key={id}
              >
                <ul className={cx("hover")}>
                  <li>
                    <AiOutlineEye />
                  </li>
                  <li>
                    <AiOutlineShoppingCart />
                  </li>
                </ul>
              </div>

              <div className={cx("item-text")}>
                <h6>{item.desc}</h6>
                <h5>
                  <Link to="">{item.name}</Link>
                </h5>
                <h4>{formatter(item.price)}</h4>
              </div>
            // </div> */}
            {/* img, name, price, desc */}
            <ListProDuct img={item.img} name={item.name} price={item.price} desc={item.desc} id={item.id} />
          </div>
        );
      });
      tabPanels.push(tabPanel);
    });

    return (
      <Tabs className={cx("tabs")}>
        <TabList className={cx("tablist")}>{tabsList}</TabList>
        {tabPanels.map((item, index) => (
          <TabPanel key={index} className={cx("tabpanel")}>
            <div className={cx("customRow")}>{item}</div>
          </TabPanel>
        ))}
      </Tabs>
    );
  };
  return (
    <Fragment>
      <div className="container">
        <Carousel className={cx("wrapper")} responsive={responsive}>
          {slideItem.map((item, index) => (
            <div
              style={{ backgroundImage: `url("${item.imgItem}")` }}
              className={cx("item")}
              key={index}
            ></div>
          ))}
        </Carousel>
      </div>
      <div className="container">
        <div className={cx("featured")}>
          <div className={cx("content")}>
            {" "}
            <h2>Sản phẩm nổi bậc</h2>
          </div>
          {renderProducts(fullproducts)}
        </div>
      </div>
      <div className="container">
        <div className={cx("banner")}>
          <div className={cx("banner__pic")}>
            <img src={banner1} alt="" />
          </div>
          <div className={cx("banner__pic")}>
            <img src={banner2} alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default memo(ProfilePage);
