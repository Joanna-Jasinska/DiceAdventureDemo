import css from "./PieceIcon.module.css";

const getColor = ({ required, allowed }) => {
  if (required) return css.required;
  if (allowed) return css.allowed;
  return css.neutral;
};

export const PieceIcon = ({ value, required, allowed }) => {
  return (
    <div className={`${css.dice} ${getColor({ required, allowed })}`}>
      {`${value || " "}`}
      <span className={css.icon}> </span>
    </div>
  );
};
