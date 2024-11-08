import Action from "./page/user/Action/Action";
import HomePage from "./page/user/homePage";
import ProfilePage from "./page/user/profilePage";
import MasterLayout from "./page/user/theme/MasterLayout";
import { ROUTERS } from "./utils/router";
import { Routes, Route } from "react-router-dom";

const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.PROFILE,
      component: < ProfilePage />,
    },

    {
      path: ROUTERS.USER.PRODUCT,
      component: <Action />,
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

function RouterCustom() {
  return renderUserRouter();
}
export default RouterCustom;
