import { Fragment, memo } from "react";
import Login from "../../login/login.js"
import Footer from "../../common/Footer/Footer.js";
import { ROUTERS } from "../../../../utils/router.js";
import { useLocation } from "react-router-dom";
// import HomePage from "../../homePage";
const MasterAdLayout = ({ children, ...props }) => {
     const location=useLocation();
     const isLoginPage =location.pathname.startsWith(ROUTERS.ADMIN.LOGIN)
  return (
    <Fragment {...props}>
     
      {/* <HomePage/> */}
      {children} {/* Your children components go here */}
     {
        !isLoginPage && <Footer />
     }
    </Fragment>
  );
};
export default memo(MasterAdLayout);
