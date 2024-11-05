import { Fragment, memo } from "react";
import Header from "../Header";
import Footer from "../Footer/Footer";
const MasterLayout = ({ children, ...props }) => {
  return (
    <Fragment {...props}>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};
export default memo(MasterLayout);
