import { useEffect } from "react";
import DialogComponent from "./components/com/dialog/DialogComponent";
import RootRoute from "./routes/RootRoute";
import { useDispatch, useSelector } from "react-redux";
import LayoutPage from "./components/com/layout/LayoutPage";

function App() {

  const { historyList, nowPageParam } = useSelector((state) => state.HistoryReducer);

  useEffect(()=>{
    console.log('historyList : ', historyList, 'pageParmas : ', nowPageParam);
    
  },[historyList])

  return (
    <>
      <LayoutPage>
        <RootRoute />
      </LayoutPage>
        
      <DialogComponent />
    </>
  );
}

export default App;
