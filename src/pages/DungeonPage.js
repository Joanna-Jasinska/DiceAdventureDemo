import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectError } from "redux/auth/selectors";
import { HeaderNavBtn } from "components/HeaderNavBtn/HeaderNavBtn";
import { startRandomDungeon, packEquipment } from "redux/dungeon/operations";
// import { Item } from "components/Item/Item";
import { ItemList } from "components/ItemList/ItemList";
import { Title } from "components/Phonebook/Title/Title";
import { useDungeon } from "hooks";
import css from "./../components/Phonebook/Phonebook.module.css";

export const DungeonPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const { name, eventName, inDungeon } = useDungeon();

  return (
    <main
      style={{ width: "100%", boxSizing: "border-box", padding: "0.4em 0px" }}
    >
      {error ? <span className={css.error}>{error}</span> : ""}

      <Title
        title={`${name} ${eventName}${
          inDungeon ? " entered." : " illegal breach. Go back!"
        }`}
      />
      <span>
        Life {"12"}/{"30"}
      </span>
      <span>Gold earned {"120"}</span>
      <HeaderNavBtn to="/town" display="🏃 Leave dung. 💩" onClick={() => {}} />
      <HeaderNavBtn to="/combat" display="🚪" onClick={() => {}} />
      <HeaderNavBtn to="/combat" display="🚪" onClick={() => {}} />
      <HeaderNavBtn to="/combat" display="🚪" onClick={() => {}} />
    </main>
  );
};

export default DungeonPage;
