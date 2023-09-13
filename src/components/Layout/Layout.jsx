import { Outlet, useLocation } from "react-router-dom";
import { TownNavigation } from "components/TownNavigation/TownNavigation";
import { Footer } from "components/Footer/Footer";
import { Suspense } from "react";
import { useCombat, useDungeon } from "hooks";
import css from "./Layout.module.css";
import { Loader } from "components/Loader/Loader";
import { CombatNavigation } from "components/CombatNavigation/CombatNavigation";
import { DungeonNavigation } from "components/DungeonNavigation/DungeonNavigation";
import { Background } from "components/Background/Background";

export const Layout = () => {
  // const { inCombat } = false;
  // const { inDungeon } = false;
  const { inCombat } = useCombat();
  const { inDungeon } = useDungeon();
  const location = useLocation();

  // console.log(`location [${location.pathname}]`);

  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px" }}>
      <div className={css.backLight} />
      <Background />
      {location.pathname === "/reset" ? (
        ""
      ) : inCombat ? (
        <CombatNavigation />
      ) : inDungeon ? (
        <DungeonNavigation />
      ) : (
        <TownNavigation />
      )}

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
