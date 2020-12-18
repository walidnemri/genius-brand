import Timer from "./Timer";
import "./styles.css";

const BlackSphere = ({ showImage, showImg1 }) => {
  return (
    <div className="blacksphere_ball">
      <Timer showImage={showImage} showImg1={showImg1} />
    </div>
  );
};

export default BlackSphere;
