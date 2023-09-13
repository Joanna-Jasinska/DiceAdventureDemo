import { EnemyPiece } from "./EnemyPiece/EnemyPiece";
import css from "./EnemyBody.module.css";
import { useEnemy } from "hooks/useEnemy";

export const EnemyBody = () => {
  const { body } = useEnemy();
  const bodyTemplate = [];
  const myBody = body ? body : bodyTemplate;
  return (
    <div className={css.body}>
      {myBody.map((piece, index) => (
        <EnemyPiece p={{ ...piece }} key={`piece|${index}|${piece.id}`} />
      ))}
    </div>
  );
};
