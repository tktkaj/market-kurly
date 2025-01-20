import { Provider } from "react-redux";
import getStore from "./Store";


function ReduxProvider({children}) {
    return (
        <Provider store={getStore()} >{children}</Provider>
    );
}

export default ReduxProvider;