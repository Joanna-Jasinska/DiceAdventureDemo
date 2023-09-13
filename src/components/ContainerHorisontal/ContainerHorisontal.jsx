import css from "./ContainerHorisontal.module.css";
export const ContainerHorisontal = (props) => {
  return <div className={`${css.container}`}>{props.children}</div>;
};
