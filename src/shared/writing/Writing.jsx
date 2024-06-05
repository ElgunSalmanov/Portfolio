import { useEffect, useRef } from "react";
import Typed from "typed.js";

function Writing() {
  const ref = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Elgun", "Developer", "Coder"],
      typeSpeed: 120,
      backSpeed: 80,
      backDelay: 1000,
      loop: true,
      cursorChar: "|",
    };

    const typed = new Typed(ref.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="words-name-text" ref={ref}></span>;
}

export default Writing;
