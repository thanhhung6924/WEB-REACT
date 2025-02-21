export const ADMIN_PATH="/quan-tri"
export const ROUTERS = {
  USER: {
    PROFILE: "/",
    PRODUCT: "/product",
    PRODUCTS: "/product/chitiet/:id",
    CART:"/giohang",
    CHECKOUT:"/thanhtoan"
  },
  ADMIN:{
    LOGIN:`${ADMIN_PATH}/dang-nhap`
  }
};
