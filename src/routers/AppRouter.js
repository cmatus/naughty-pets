import { HashRouter as Router } from "react-router-dom";
import Nav from "../components/app/Nav";
import Content from "../components/app/Content";

import "../styles/app.scss";

const PortfolioRouter = () => {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Content />
      </Router>
    </div>
  );
};

export default PortfolioRouter;
