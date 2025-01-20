import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ReduxProvider from './store/ReduxProvider';
import getStore from './store/Store';
import { setProperty } from './store/reducers/StoreCore';
import CheckClientUtils from './utils/CheckClientUtils';
import localProperty from './config/localProperty';
import nodeProperty from './config/nodeProperty';
import springProperty from './config/springProperty';
import defualtProperty from './config/defualtProperty';
import NativeUtils from './utils/NativeUtils';

const nowOS = CheckClientUtils.checkOS()
    let property;
    let apiProperty;
    let initData;

    console.log('process.env?.ServerEnv', process.env?.REACT_APP_ServerEnv);
    

    if(process.env?.REACT_APP_ServerEnv === 'local') {
        property = localProperty;
    }

    if(process.env?.REACT_APP_ApiDomain === 'node') {
        apiProperty = nodeProperty;
    } else {
        apiProperty = springProperty;
    }

    initData = {
        property : {
            ...defualtProperty,
            ...property,
            ...apiProperty,
            nowOS : nowOS
        }
    }

    console.log('initData : ', initData);
    
    getStore().dispatch(
        setProperty(initData.property)
    );

    // Native 통신 초기화
    NativeUtils.initNativeBridge();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ReduxProvider>
        <App />
    </ReduxProvider>
);
