import { useLottie } from "lottie-react";
import loadingAnimation from "../../assets/loader/react.json";
import "./loading.scss";

function Loading() {
  const options = {
    animationData: loadingAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return <div className="loader">{View}</div>;
}

export default Loading;
