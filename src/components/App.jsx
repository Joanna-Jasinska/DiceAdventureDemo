import { useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Layout } from "./Layout/Layout";
import { Loader } from "./Loader/Loader";
import { RouteBattle } from "./RouteBattle/RouteBattle";
import { RouteTown } from "./RouteTown/RouteTown";
import { useGame } from "hooks/useGame";
import { setGameError } from "redux/game/operations";
// import { setError } from "redux/auth/slice";
// import { useAuth } from "hooks";
// import { refreshUser } from "redux/auth/operations";

const TownPage = lazy(() => import("../pages/TownPage"));
const EQPage = lazy(() => import("../pages/EQPage"));
const CombatPage = lazy(() => import("../pages/CombatPage"));
const QuickBattlePage = lazy(() => import("../pages/QuickBattlePage"));
const ResetPage = lazy(() => import("../pages/ResetPage"));
const DungeonPage = lazy(() => import("../pages/DungeonPage"));
const ByePage = lazy(() => import("../pages/ByePage"));
const SummaryPage = lazy(() => import("../pages/SummaryPage"));
const ReturnFromCombatPage = lazy(() =>
  import("../pages/ReturnFromCombatPage")
);
const WorkshopPage = lazy(() => import("../pages/WorkshopPage"));

export const App = () => {
  const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();
  const { error, loading } = useGame();

  useEffect(() => {
    document.title = "DiceAdventure Demo";
  }, []);

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(setGameError(null));
      }, 2000);
    }
  }, [error, dispatch]);

  return loading ? (
    <b>
      <Loader txt="refreshingUser" />
    </b>
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ResetPage />} />
          <Route path="/reset" element={<ResetPage />} />
          <Route path="/bye" element={<ByePage />} />
          <Route
            path="/town"
            element={
              <RouteTown redirectTo="/combat" component={<TownPage />} />
            }
          />
          <Route
            path="/eq"
            element={<RouteTown redirectTo="/combat" component={<EQPage />} />}
          />
          <Route
            path="/workshop"
            element={
              <RouteTown redirectTo="/combat" component={<WorkshopPage />} />
            }
          />
          <Route
            path="/dungeon"
            element={
              <RouteBattle
                // redirectTo="/quickBattle"
                redirectTo="/workshop"
                component={<DungeonPage />}
              />
            }
          />
          <Route
            path="/combat"
            element={
              <RouteBattle
                redirectTo="/quickBattle"
                // redirectTo="/workshop"
                component={<CombatPage />}
              />
            }
          />
          <Route
            path="/return"
            element={
              <RouteBattle
                redirectTo="/quickBattle"
                // redirectTo="/workshop"
                component={<ReturnFromCombatPage />}
              />
            }
          />
          <Route
            path="/summary"
            element={
              <RouteBattle
                // redirectTo="/quickBattle"
                redirectTo="/workshop"
                component={<SummaryPage />}
              />
            }
          />
          <Route
            path="/quickBattle"
            element={
              <RouteTown redirectTo="/combat" component={<QuickBattlePage />} />
            }
          />
          {/* <Route
            path="/login"
            element={
              <RouteTown redirectTo="/contacts" component={<LoginPage />} />
            }
          />
          <Route
            path="/logout"
            element={<RouteBattle redirectTo="/" component={<LogoutPage />} />}
          />
          <Route
            path="/contacts"
            element={
              <RouteBattle redirectTo="/login" component={<PhonebookPage />} />
            }
          /> */}
        </Route>
      </Routes>
    </Suspense>
  );
};
