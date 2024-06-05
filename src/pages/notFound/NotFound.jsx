import { useLottie } from "lottie-react";
import notFoundAnimation from "../../assets/notFound/notFound.json";
import "./notFound.scss";

function NotFound() {
  const options = {
    animationData: notFoundAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return <div className="notFound">{View}</div>;
}

export default NotFound;
