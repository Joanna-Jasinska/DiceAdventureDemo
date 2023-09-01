// import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectError } from "redux/auth/selectors";
// import { HeaderNavBtn } from "components/HeaderNavBtn/HeaderNavBtn";
// import { ItemList } from "components/ItemList/ItemList";
import { Title } from "components/Phonebook/Title/Title";
import css from "./../components/Phonebook/Phonebook.module.css";
import { useCombat } from "hooks";
import { EnemyBody } from "components/EnemyBody/EnemyBody";
import { SkillList } from "components/SkillList/SkillList";
// import { EnemyPortrait } from "components/EnemyPortrait/EnemyPortrait";
import { Background } from "components/Background/Background";
import { RolledDiceBag } from "components/RolledDiceBag/RolledDiceBag";

export const CombatPage = () => {
  //   const dispatch = useDispatch();
  const { inCombat } = useCombat();
  const error = useSelector(selectError);

  return (
    <main
      style={{ width: "100%", boxSizing: "border-box", padding: "0.4em 0px" }}
    >
      {error ? <span className={css.error}>{error}</span> : ""}
      {
        !inCombat ? (
          <Navigate to="/Dungeon" />
        ) : (
          <>
            <Background />
            <Title title={"Combat"} />
            {/* <EnemyPortrait /> */}

            <EnemyBody />
            <RolledDiceBag />
            <SkillList />
          </>
        ) // end of combat page
      }
    </main>
  );
};

export default CombatPage;
