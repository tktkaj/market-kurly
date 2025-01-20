import { useDispatch, useSelector } from "react-redux";
import { setUserInfo, clearUserInfo } from "../store/reducers/StoreUser";

const useAuth = () => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.userInfo?.id);
  const login = (id) => {
    dispatch(setUserInfo(id));
  };

  const logout = () => {
    dispatch(clearUserInfo());
  };

  return {
    userId,
    login,
    logout,
  };
};

export default useAuth;
