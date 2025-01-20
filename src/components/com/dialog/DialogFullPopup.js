import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeLayerList } from "../../../store/reducers/StoreLayer";
import A11yUtils from "../../../utils/A11yUtils";

const modalOverlay = {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    zIndex: "1000",
}

const modalContent = {
    background: "white",
    width: "100%",
    height: "100%", /* 화면의 높이의 절반까지만 늘어나도록 설정 */
    overflowY: "auto",/* 내용이 넘칠 경우 스크롤 허용 */
    padding: "20px",
    boxSizing: "border-box",
}

function DialogFullPopup({ layerIndex, callbackFunc, children }) {

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

    // aria-hidden을 위한 focusable element 조작
    useEffect(() => {

        if(dialogRef.current) {
            
            if(layerIndex === lastIndex) {
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
        <div ref={dialogRef} style={modalOverlay} aria-hidden={layerIndex === lastIndex ? 'false' : 'true'}>
            <div style={modalContent}>
                {React.Children.map(children, child => {
                    return React.cloneElement(child, {dialogClose})
                })}
                <br/><br/><hr/><br/>
                <button onClick={() => dialogClose(null)} >닫기</button>
            </div>
        </div>
    );
}

export default DialogFullPopup; 