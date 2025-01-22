import { useDispatch, useSelector } from "react-redux";
import { setUserInfo, clearUserInfo } from "../store/reducers/StoreUser";

const useAuth = () => {
  const user = useSelector((state) => state.userInfo?.id);
  const dispatch = useDispatch();

  const userInfo = () => {
    return user;
  };
  const login = (id, callback) => {
    dispatch(setUserInfo(id));
    if (callback) callback();
  };

  const logout = () => {
    dispatch(clearUserInfo());
  };
  return {
    login,
    logout,
    userInfo,
  };
};

export default useAuth;
