import { useEffect } from "react";
import DialogComponent from "./components/com/dialog/DialogComponent";
import RootRoute from "./routes/RootRoute";
import { useDispatch, useSelector } from "react-redux";
import LayoutPage from "./components/com/layout/LayoutPage";
import LayoutFooter from "../src/components/com/layout/LayoutFooter";
import Header from "../src/components/com/layout/header/Header";
import LayoutStickyHeader from "../src/components/com/layout/LayoutStickyHeader"
function App() {
  const { historyList, nowPageParam } = useSelector(
    (state) => state.HistoryReducer
  );

  useEffect(() => {
    console.log("historyList : ", historyList, "pageParmas : ", nowPageParam);
  }, [historyList]);

  return (
    <>
      <LayoutPage>
        <LayoutStickyHeader/>
        <Header />
        <RootRoute />
      </LayoutPage>

      <DialogComponent />
      <LayoutFooter />
    </>
  );
}

export default App;
