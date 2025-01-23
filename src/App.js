import { useEffect, useState } from "react";
import DialogComponent from "./components/com/dialog/DialogComponent";
import RootRoute from "./routes/RootRoute";
import { useDispatch, useSelector } from "react-redux";
import LayoutPage from "./components/com/layout/LayoutPage";
import LayoutFooter from "../src/components/com/layout/LayoutFooter";
import ApiUtils from "../src/utils/ApiUtils";

function App() {
  const { historyList, nowPageParam } = useSelector(
    (state) => state.HistoryReducer
  );

  useEffect(() => {
    console.log("historyList : ", historyList, "pageParmas : ", nowPageParam);
  }, [historyList]);

  const [headerInfo, setHeaderInfo] = useState(null);

  useEffect(() => {
    async function fetchHeaderInfo() {
      const res = await ApiUtils.sendGet("/headerInfo");
      if (res) setHeaderInfo(res.headerInfo);
    }
    fetchHeaderInfo();
  }, [historyList]);
  return (
    <>
      <LayoutPage>
        <RootRoute headerInfo={headerInfo} />
      </LayoutPage>

      <DialogComponent />
      <LayoutFooter />
    </>
  );
}

export default App;
