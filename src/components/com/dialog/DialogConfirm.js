import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import A11yUtils from "../../../utils/A11yUtils";
import { removeLayerList } from "../../../store/reducers/StoreLayer";

const modalWrapperStyle = {
    zIndex: '1050',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const ConfirmStyle = {
    width: '500px',
    background: 'white',
    padding: '20px',
    zIndex: '100',
    borderRadius: '8px'
}

function DialogConfirm({layerIndex, callbackFunc, message, options}) {

    const { layerList } = useSelector(state => state.LayerReducer);
    const dispatch = useDispatch();
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

    // aria-hidden을 위한 focusable element 조작
    useEffect(() => {

        if(dialogRef.current) {
            
            if(layerIndex === lastIndex) {
                A11yUtils.showFocusableElement(dialogRef.current);
            } else {
                A11yUtils.hideFocusableElement(dialogRef.current);
            }
        }
    },[layerList]);

    useEffect(()=>{
        return () => {
            if(isNotClosed) {
                callbackFunc && callbackFunc();
            }
        }
    },[])

    return (
        <div ref={dialogRef} style={modalWrapperStyle} aria-hidden={layerIndex === lastIndex ? 'false' : 'true'}>
            <div style={ConfirmStyle}>
            <p>{message}</p>
                <div>
                    <button onClick={() => dialogClose(false)}>{(options && options?.cancelBtnText) || "취소"}</button> &nbsp;&nbsp; 
                    <button onClick={() => dialogClose(true)}>{(options && options?.okBtnText) || "확인"}</button>
                </div>
            </div>
        </div>
    );
}

export default DialogConfirm;