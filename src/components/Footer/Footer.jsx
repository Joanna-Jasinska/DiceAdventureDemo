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
        <a
          className={css.link}
          href="https://github.com/Joanna-Jasinska/DiceAdventureDemo"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub - Dice Adventure Demo"
          accesskey="g"
        >
          Github
        </a>
      </div>
    </footer>
  );
};
