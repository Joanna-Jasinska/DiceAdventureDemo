import { Navigate } from "react-router-dom";
import { useDungeon } from "hooks";

export const RouteTown = ({ component: Component, redirectTo = "/" }) => {
  const { inDungeon } = useDungeon();
  // const shouldRedirect = !inDungeon;

  return inDungeon ? <Navigate to={redirectTo} /> : Component;
};
