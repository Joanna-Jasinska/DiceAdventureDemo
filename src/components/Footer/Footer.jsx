import { HeaderNavBtn } from "components/HeaderNavBtn/HeaderNavBtn";
import css from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={`footer ${css.footer}`}>
      <span>Website & game designed by Joanna Jasińska.</span>
      <div
        style={{
          transform: "scale(0.4) translateX(-7rem) translateY(0.6rem)",
        }}
      >
        <HeaderNavBtn
          to="/"
          display="🏃 Homepage"
          // completed={true}
          // disabled={true}
          // warning={true}
          // recommended={true}
        />
      </div>
    </footer>
  );
};
