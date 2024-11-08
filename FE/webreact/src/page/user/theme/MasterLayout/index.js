import { Fragment, memo } from "react";
import Header from "../Header";
import Footer from "../Footer/Footer";
import HomePage from "../../homePage";
const MasterLayout = ({ children, ...props }) => {
  return (
    <Fragment {...props}>
      <Header />
      <HomePage/>
      {children} {/* Your children components go here */}
      <Footer />
    </Fragment>
  );
};
export default memo(MasterLayout);
