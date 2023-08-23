import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectError } from "redux/auth/selectors";
import { HeaderNavBtn } from "components/HeaderNavBtn/HeaderNavBtn";
import { startRandomDungeon, packEquipment } from "redux/dungeon/operations";
import { ItemList } from "components/ItemList/ItemList";
import { Title } from "components/Phonebook/Title/Title";
import css from "./../components/Phonebook/Phonebook.module.css";
import { useCombat } from "hooks";

export const CombatPage = () => {
  //   const dispatch = useDispatch();
  const { inCombat } = useCombat();
  const error = useSelector(selectError);

  return (
    <main
      style={{ width: "100%", boxSizing: "border-box", padding: "0.4em 0px" }}
    >
      {error ? <span className={css.error}>{error}</span> : ""}

      <Title title={"Combat"} />
      {inCombat ? "In combat." : <Navigate to="/Dungeon" />}
      {/* <span>
        Life {"12"}/{"30"}
      </span>
      <span>Gold earned {"120"}</span>
      <HeaderNavBtn to="/town" display="Leave dungen" onClick={() => {}} />
      <HeaderNavBtn to="/combat" display="🚪" onClick={() => {}} />
      <HeaderNavBtn to="/combat" display="🚪" onClick={() => {}} />
      <HeaderNavBtn to="/combat" display="🚪" onClick={() => {}} /> */}
    </main>
  );
};

export default CombatPage;
