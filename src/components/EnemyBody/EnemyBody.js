import { EnemyPiece } from "./EnemyPiece/EnemyPiece";
import css from "./EnemyBody.module.css";
import { Title } from "components/Phonebook/Title/Title";
import { useEnemy } from "hooks/useEnemy";

export const EnemyBody = (enemyGiven) => {
  const { body } = useEnemy();
  const bodyTemplate = [];
  const myBody = body ? body : bodyTemplate;
  return (
    <div className={css.body}>
      {myBody.map((piece, index) => (
        <EnemyPiece p={{ ...piece }} key={`piece|${index}|${piece.id}`} />
      ))}
      <EnemyPiece p={{ disabled: true }} key={`piece|xxx|ppp`} />
      <EnemyPiece p={{ fulfilled: true }} key={`piece|yyy|ddd`} />
      <EnemyPiece p={{}} key={`piece|zzz|bbb`} />
    </div>
  );
};
