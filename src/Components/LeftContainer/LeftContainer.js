import "./LeftContainerStyle.css";
import { Form, FAQ } from "../index";

const LeftContainer = () => {
  return (
    <div className="leftParentContainer">
      <div className="leftContainer">
        <div className="leftDivHeading">
          Free Crypto Tax Calculator Australia
        </div>
        <Form />
      </div>
      <FAQ />
    </div>
  );
};

export default LeftContainer;
