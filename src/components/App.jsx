import { useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Layout } from "./Layout/Layout";
import { Loader } from "./Loader/Loader";
import { RouteBattle } from "./RouteBattle/RouteBattle";
import { RouteTown } from "./RouteTown/RouteTown";
import { setError } from "redux/auth/slice";
import { useAuth } from "hooks";
import { refreshUser } from "redux/auth/operations";

const TownPage = lazy(() => import("../pages/TownPage"));
const EQPage = lazy(() => import("../pages/EQPage"));
const CombatPage = lazy(() => import("../pages/CombatPage"));
const QuickBattlePage = lazy(() => import("../pages/QuickBattlePage"));
const ResetPage = lazy(() => import("../pages/ResetPage"));
const DungeonPage = lazy(() => import("../pages/DungeonPage"));
const ByePage = lazy(() => import("../pages/ByePage"));
// const LogoutPage = lazy(() => import("../pages/LogoutPage"));
// const PhonebookPage = lazy(() => import("../pages/PhonebookPage"));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const { error } = useAuth();

  useEffect(() => {
    document.title = "DiceAdventure Demo";
  }, []);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(setError(null));
      }, 2000);
    }
  }, [error, dispatch]);

  return isRefreshing ? (
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
            path="/dungeon"
            element={
              <RouteBattle
                redirectTo="/quickBattle"
                component={<DungeonPage />}
              />
            }
          />
          <Route
            path="/combat"
            element={
              <RouteBattle
                redirectTo="/quickBattle"
                component={<CombatPage />}
              />
            }
          />
          <Route
            path="/return"
            element={
              <RouteBattle
                redirectTo="/quickBattle"
                component={<CombatPage />}
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
