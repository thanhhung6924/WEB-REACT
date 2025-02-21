import Cart from "./components/Cart/Cart";
import Action from "./page/user/Action/Action";
import Checkout from "./page/user/Checkout/Checkout";
import Detail from "./page/user/Detail/Detail";
import Login from"./page/admin/login/login"
import ProfilePage from "./page/user/profilePage";
import MasterLayout from "./page/user/theme/MasterLayout";
import { ADMIN_PATH, ROUTERS } from "./utils/router";
import { Routes, Route, useLocation } from "react-router-dom";
import MasterAdLayout from "./page/admin/theme/masterAdLayout/masterAdLayout";

const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.PRODUCTS,
      component: <Detail />,
    },
    {
      path: ROUTERS.USER.PROFILE,
      component: <ProfilePage />,
    },
    {
      path: ROUTERS.USER.CART,
      component: <Cart />,
    },
    {
      path: ROUTERS.USER.PRODUCT,
      component: <Action />,
    },
    ,
    {
      path: ROUTERS.USER.CHECKOUT,
      component: <Checkout />,
    },
  ];
  return (
    <MasterLayout>
      <Routes>
        {userRouters.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};
const renderAdminRouter = () => {
  const adminRouters = [
    {
      path: ROUTERS.ADMIN.LOGIN,
      component: <Login />,
    }
  ];
  return (
    <MasterAdLayout>
      <Routes>
        {adminRouters.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Routes>
    </MasterAdLayout>
  );
};


function RouterCustom() {
 const location=useLocation();
 const isAdminRouter =location.pathname.startsWith(ADMIN_PATH)
 return isAdminRouter?renderAdminRouter():renderUserRouter();
}
export default RouterCustom;
