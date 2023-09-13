import { AllySquare } from "components/AllySquare/AllySquare";
import { ALLIES } from "data/allies";
import { getAlly } from "data/allies";
import css from "./AllyList.module.css";

export const AllyList = ({ id, list = ALLIES }) => {
  const displayed = id ? [getAlly(id)] : [...list];

  return (
    <div className={css.list}>
      {displayed.length < 1
        ? ""
        : displayed.map((el, index) => {
            return (
              <AllySquare
                {...{
                  ...el,
                  bgTxtFront: el.icon,
                  bgTxtBack: el.eventIcon,
                  key: `ally|${index}|${el.id}`,
                }}
              />
            );
          })}
    </div>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   deleteContactHandle: PropTypes.func.isRequired,
// };
