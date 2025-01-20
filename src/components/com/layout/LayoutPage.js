import { useEffect, useRef } from "react";
import A11yUtils from "../../../utils/A11yUtils";
import { useDispatch, useSelector } from "react-redux";
import SampleLoading from "../sample/SampleLoading";

function LayoutPage({children}) {

    const pageRef = useRef();
    const { layerList } = useSelector(state => state.LayerReducer);
    const { loading } = useSelector(state => state.CoreReducer);
    const dispatch = useDispatch();

    

    useEffect(() => {

        if(pageRef.current) {
            
            if(layerList.length > 0) {
                A11yUtils.hideFocusableElement(pageRef.current);
            } else {
                A11yUtils.showFocusableElement(pageRef.current);
            }
        }
    },[layerList])


    return (
        <>
            <div ref={pageRef} id="PageRootContainer" role="main" aria-hidden={layerList.length === 0 ? 'false' : 'true'}>
                {children}
            </div>

            {loading > 0 && <SampleLoading />}
        </>
    );
}

export default LayoutPage;