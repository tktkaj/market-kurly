import DialogAlert from "../components/com/dialog/DialogAlert";
import DialogBottomPopup from "../components/com/dialog/DialogBottomPopup";
import DialogCenterPopup from "../components/com/dialog/DialogCenterPopup";
import DialogConfirm from "../components/com/dialog/DialogConfirm";
import DialogFullPopup from "../components/com/dialog/DialogFullPopup";
import { addLayerList } from "../store/reducers/StoreLayer";
import getStore from "../store/Store";

// 레이어를 띄우기 위한 utils
const LayerUtils = {

    // 얼럿창 띄우기
    showAlert : (message) => {
        return new Promise((resolve) => {
            const callbackFunc = (result) => {
                resolve(result);
            }

            getStore().dispatch(
                addLayerList({
                    layerComponent : DialogAlert,
                    callbackFunc : callbackFunc,
                    layerProps : {
                        message
                    }
                })
            )
        })
    },
    // 컴펌창 띄우기
    showConfirm: (message, options) => {
        return new Promise((resolve)=> {
            const callbackFunc = (result) => {
                resolve(result)
            }

            getStore().dispatch(
                addLayerList({
                    layerComponent : DialogConfirm,
                    callbackFunc : callbackFunc,
                    layerProps : {
                        message,
                        options
                    }
                })
            )
        })
    },
    // 풀 팝업 띄우기
    showFullPopup : (ContentsComponent, data) => {
        return new Promise((resolve) => {

            const callbackFunc = (result) => {
                resolve(result)
            }

            const PopupComponent = (layerProps) => {
                return (
                    <DialogFullPopup {...layerProps}>
                        <ContentsComponent {...layerProps}/>
                    </DialogFullPopup>
                );
            }

            getStore().dispatch(
                addLayerList({
                    layerComponent : PopupComponent,
                    callbackFunc : callbackFunc,
                    layerProps : {
                        data
                    }
                })
            )
        })
    },
    // 센터 팝업 띄우기
    showCenterPopup : (ContentsComponent, data) => {
        return new Promise((resolve) => {

            const callbackFunc = (result) => {
                resolve(result)
            }

            const PopupComponent = (layerProps) => {
                return (
                    <DialogCenterPopup {...layerProps}>
                        <ContentsComponent {...layerProps}/>
                    </DialogCenterPopup>
                );
            }

            getStore().dispatch(
                addLayerList({
                    layerComponent : PopupComponent,
                    callbackFunc : callbackFunc,
                    layerProps : {
                        data
                    }
                })
            )
        })
    },
    // 바텀 팝업 띄우기
    showBottomPopup: (ContentsComponent, data) => {
        return new Promise((resolve) => {

            const callbackFunc = (result) => {
                resolve(result)
            }

            const PopupComponent = (layerProps) => {
                return (
                    <DialogBottomPopup {...layerProps}>
                        <ContentsComponent {...layerProps}/>
                    </DialogBottomPopup>
                );
            }

            getStore().dispatch(
                addLayerList({
                    layerComponent : PopupComponent,
                    callbackFunc : callbackFunc,
                    layerProps : {
                        data
                    }
                })
            )
        })
    },
    // 다이얼로그 띄우기(풀, 바텀, 센터
    showDialog: (data) => {
        const dialogFunc = data?.dialogType === "full" ? LayerUtils.showFullPopup : data?.dialogType === 'center' ? LayerUtils.showCenterPopup : LayerUtils.showBottomPopup
        
        return dialogFunc(data?.ContentsComponent, data?.data, data?.closeBtnYn);
    }
}

export default LayerUtils;