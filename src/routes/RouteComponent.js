import { lazy, Suspense } from "react"
import SampleError from "../pages/samples/SampleError";

function RouteComponent({url, menuId, filePath}) {

    const DynamicComponent = lazy(() => import(`../pages${filePath}`).catch(e => ({default : SampleError})));

    return (
        <>
            {
                DynamicComponent != SampleError ?
                <Suspense>
                    <DynamicComponent />
                </Suspense>
                :
                <DynamicComponent />
            }
        </>
    );

}

export default RouteComponent