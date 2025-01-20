import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeLayerList } from "../../../store/reducers/StoreLayer";
import A11yUtils from "../../../utils/A11yUtils";

const modalWrapperStyle = {
    zIndex: '1050',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const alertStyle = {
    width: '80vw',
    background: 'white',
    padding: '20px',
    zIndex: '100',
    borderRadius: '8px',
    boxSizing: 'border-box'
}

function DialogAlert({layerIndex, callbackFunc, message}) {

    const dispatch = useDispatch();
    const { layerList } = useSelector(state => state.LayerReducer);
    const lastIndex = layerList.length - 1;
    // 팝업 닫힘 여부 플래그
    let isNotClosed = true;
    const dialogRef = useRef();

    const dialogClose = (result) => {
        isNotClosed = false;

        dispatch(
            removeLayerList(layerIndex)
        );

        callbackFunc && callbackFunc(result);

    };

    useEffect(()=>{
        if(dialogRef.current) {
            if(lastIndex === lastIndex) {
                A11yUtils.showFocusableElement(dialogRef.current);
            } else {
                A11yUtils.hideFocusableElement(dialogRef.current);
            }
        }
    },[layerList])

    useEffect(()=>{
        return () => {
            if(isNotClosed) {
                callbackFunc && callbackFunc();
            }
        }
    },[])

    return (
        <div ref={dialogRef} style={modalWrapperStyle} aria-hidden={layerIndex === lastIndex ? 'false' : 'true'} role="dialog">
            <div style={alertStyle}>
                <p>{message}</p>
                <div>
                    <button onClick={() => dialogClose(true)}>확인</button>
                </div>
            </div>
        </div>
    );
}

export default DialogAlert;