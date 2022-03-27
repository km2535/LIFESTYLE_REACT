import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { RiKakaoTalkFill } from "react-icons/ri";
import "../_style/footer.css";
const Sns = ({ isPlay }) => {
  return (
    <div className={isPlay ? "sns play" : "sns"}>
      <span>
        <FaFacebookF />
      </span>
      <span>
        <BsInstagram />
      </span>
      <span>
        <RiKakaoTalkFill />
      </span>
    </div>
  );
};

export default Sns;
