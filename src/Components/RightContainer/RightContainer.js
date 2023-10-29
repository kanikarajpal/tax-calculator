import "./RightContainerStyle.css";
import { ReactComponent as Frame } from "../../assets/Frame.svg";
import { BsArrowRight } from "react-icons/bs";
const RightContainer = () => {
  return (
    <div className="rightContainer">
      <div className="rightUpperDiv">
        <div className="rightDivHeading">Get Started with KoinX for FREE</div>
        <div className="rightDivText">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </div>
      </div>
      <Frame />
      <button className="btn">
        Get Started for FREE
        <span className="iconDiv">
          <BsArrowRight
            style={{
              fontWeight: "bold",
            }}
          />
        </span>
      </button>
    </div>
  );
};

export default RightContainer;
