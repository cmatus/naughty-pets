import { Route, Switch } from "react-router-dom";
import Home from "../../Home";

import "./styles.scss";

const Content = () => {
  return (
    <div className="content">
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
};

export default Content;
