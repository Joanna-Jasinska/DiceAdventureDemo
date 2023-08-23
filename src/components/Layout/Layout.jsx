import { Outlet, Navigate } from "react-router-dom";
import { TownNavigation } from "components/TownNavigation/TownNavigation";
import { Footer } from "components/Footer/Footer";
import { UserMenu } from "components/UserMenu/UserMenu";
import { Suspense } from "react";
import { useAuth } from "hooks";
import css from "./Layout.module.css";
import { Loader } from "components/Loader/Loader";

export const Layout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px" }}>
      {/* <AppBar /> */}
      <div className={css.backLight} />
      {isLoggedIn ? <UserMenu /> : <TownNavigation />}

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
