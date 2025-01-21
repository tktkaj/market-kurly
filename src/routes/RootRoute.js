import { BrowserRouter, Route, Routes } from "react-router-dom";
import SampleMain from "../pages/samples/SampleMain";
import SampleDialog from "../pages/samples/SampleDialog";
import SampleHistory from "../pages/samples/SampleHistory";
import SampleBridge from "../pages/samples/SampleBridge";
import menuDataJson from "../assets/sample/SampleUrlMapping.json";
import RouteComponent from "./RouteComponent";
import SampleError from "../pages/samples/SampleError";
import Header from "../components/com/layout/header/Header";
import LayoutStickyHeader from "../components/com/layout/LayoutStickyHeader";
function RootRoute() {
  return (
    <BrowserRouter>
      <Header />
      <LayoutStickyHeader />
      <Routes>
        {menuDataJson["container"]?.urlList?.map((item, index) => (
          <Route
            path={item.url}
            key={item.menuId + index}
            element={
              <RouteComponent
                url={item.url}
                menuId={item.menuId}
                filePath={item.filePath}
              />
            }
          />
        ))}
        <Route path="*" element={<SampleError />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootRoute;
