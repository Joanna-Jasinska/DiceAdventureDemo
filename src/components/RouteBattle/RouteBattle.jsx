import { Navigate } from "react-router-dom";
import { useDungeon } from "hooks";

export const RouteBattle = ({ component: Component, redirectTo = "/" }) => {
  const { inDungeon } = useDungeon();
  // const shouldRedirect = !isLoggedIn && !isRefreshing;
  const shouldRedirect = !inDungeon;
  // return Component;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
