import { useDispatch, useSelector } from "react-redux";
import { setUserInfo, clearUserInfo } from "../store/reducers/StoreUser";

const useAuth = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userInfo?.id);
  const login = (id, callback) => {
    console.log("useAuth에서" + id);
    dispatch(setUserInfo(id));
    if (callback) callback();
  };

  const logout = () => {
    dispatch(clearUserInfo());
  };
  return {
    login,
    logout,
  };
};

export default useAuth;
