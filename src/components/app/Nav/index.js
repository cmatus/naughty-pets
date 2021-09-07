import Menu from "../../Menu";
import Logo from "../../Logo";
import Cart from "../../Cart";

import "./styles.scss";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-left">
        <Menu />
      </div>
      <div className="nav-right">
        <Logo />
        <Cart />
      </div>
    </div>
  );
};

export default Nav;
