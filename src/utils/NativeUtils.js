import CheckClientUtils from "./CheckClientUtils";

// Native와의 브릿지 통신을 위한 utils
const NativeUtils = {
    // 업무단에서 사용할 브릿지 통신 함수
    connectNativeBridge : async (params) => {
        return new Promise((resolve) => {
            const callbackId = NativeUtils.storeBridgeCallback(params.cmd, resolve);

            // Native 통신 로직
            if(!CheckClientUtils.isPc()) {
                NativeUtils.webToNative(callbackId, params);
            }
        })
    },
    // callback 함수를 window 객체에 저장하는 함수
    storeBridgeCallback :  (cmd ,callback) => {
        const bridgeCallbackId = NativeUtils.getBridgeCallbackId(cmd);

        if(callback) {
            window.nativeBridgeCallback[bridgeCallbackId] = callback;
        }

        return bridgeCallbackId;
    },
    // callbackId를 생성하는 함수
    getBridgeCallbackId : (cmd) => {
        if(window?.nativeBridgeCallback) {
            const lengthOfCallback = Object.keys(window.nativeBridgeCallback).length + 1;
            return cmd + lengthOfCallback;
        } else {
            return cmd + '1';
        }
    },
    // native에서 web으로의 통신을 받는 함수
    nativeToWeb : (cmd, result) => {

        let resultJson = result;

        if(typeof result !== 'object') {
            resultJson = JSON.parse(result);
        } 

        if(window.nativeBridgeCallback[cmd]) {
            window.nativeBridgeCallback[cmd](resultJson);
        }
    },
    // web에서 native로 통신을 주는 함수
    webToNative : (callbackId, params) => {

        const strMessage = JSON.stringify({
            cmd : params.cmd,
            callbackId : callbackId,
            data : params.data
        });

        if(CheckClientUtils.isAos()) {
            //AOS
            window.WebToNative[params.cmd](strMessage);
        } else {
            //IOS
            window.webkit.messageHandlers.WebToNative.postMessage(strMessage);
        }
    },
    // 브릿지 통신 초기화 함수
    initNativeBridge : () => {
        window.nativeBridgeCallback = {}
        window.nativeToWeb = NativeUtils.nativeToWeb
    }
}

export default NativeUtils;