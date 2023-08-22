import { Loader } from "components/Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { useEffect } from "react";
// import { selectError } from "redux/auth/selectors";
import { Title } from "components/Phonebook/Title/Title";
import { resetEquipment, setItems } from "redux/eq/operations";
import { Navigate } from "react-router-dom";
import { selectLoading } from "redux/eq/selectors";
export const ResetPage = () => {
  // const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  let redirect = true;

  // dispatch(resetEquipment());

  useEffect(() => {
    console.log("Reseting game.");
    dispatch(resetEquipment());
    // dispatch(setItems([]));
  }, [dispatch]);

  // const func = () => {
  //   console.log("Reseting game.");
  //   dispatch(resetEquipment());
  //   redirect = true;
  // };

  // useEffect(() => {
  //   console.log("Setting timer");
  //   let timer = setInterval(func, 2000);
  //   return clearInterval(timer);
  // }, [dispatch, redirect, func]);

  // const func = useRef(() => {
  //   console.log("Reseting game.");
  //   dispatch(resetEquipment());
  //   redirect = true;
  // });

  // useEffect(() => {
  //   console.log("Setting timer");
  //   let timer = setInterval(func.current, 4000);
  //   return () => clearInterval(timer);
  // }, [dispatch]);

  // useEffect(() => {
  //   if (redirect.current) {
  //     // Perform redirect logic here
  //   }
  // }, [redirect]);

  // dispatch(resetEquipment());
  // dispatch(resetEquipment());
  // dispatch(resetEquipment());
  // dispatch(resetEquipment());
  // dispatch(resetEquipment());
  // dispatch(resetEquipment());

  return (
    <main
      style={{ width: "100%", boxSizing: "border-box", padding: "0.4em 0px" }}
    >
      {/* {error ? <span className={css.error}>{error}</span> : ""} */}

      {!loading ? <Navigate to="/eq" /> : <Loader txt={"Reseting data."} />}
      <Title title="Resetting game." />
    </main>
  );
};

export default ResetPage;
