import { useSelector } from "react-redux";
import {
  selectError,
  selectLoading,
  selectEnemy,
  selectEnemyName,
  selectEnemyId,
  selectEnemyLife,
  selectEnemyMaxLife,
  selectEnemyIsBoss,
  selectEnemyGold,
  selectEnemyPortrait,
  selectEnemyStatus,
  selectEnemyBody,
} from "redux/enemy/selectors";

export const useEnemy = () => {
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const enemy = useSelector(selectEnemy);

  const name = useSelector(selectEnemyName);
  const id = useSelector(selectEnemyId);
  const enemyLife = useSelector(selectEnemyLife);
  const enemyMaxLife = useSelector(selectEnemyMaxLife);
  const isBoss = useSelector(selectEnemyIsBoss);
  const gold = useSelector(selectEnemyGold);
  const portrait = useSelector(selectEnemyPortrait);
  const status = useSelector(selectEnemyStatus);
  const body = useSelector(selectEnemyBody);

  return {
    error,
    loading,
    enemy,
    name,
    id,
    enemyLife,
    enemyMaxLife,
    isBoss,
    gold,
    portrait,
    status,
    body,
  };
};
