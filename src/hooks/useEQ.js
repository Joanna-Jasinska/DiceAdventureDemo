import { useSelector } from "react-redux";
import { selectError, selectLoading, selectEq } from "redux/eq/selectors";

export const useEQ = () => {
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const eq = useSelector(selectEq);

  return {
    error,
    loading,
    eq,
  };
};
