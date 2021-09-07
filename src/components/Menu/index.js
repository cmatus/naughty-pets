import MenuItem from "./item";

import "./styles.scss";
import category from "../../data/category";

const Menu = () => {
  return (
    <div className="menu">
      <MenuItem index="0" text={"Home"} />
      {category.map((item) => (
        <MenuItem index={item.id} text={item.name} />
      ))}
    </div>
  );
};

export default Menu;
