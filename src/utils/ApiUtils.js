import axios from "axios";
import { hideLoading, showLoading } from "../store/reducers/StoreCore";
import getStore from "../store/Store";
import LayerUtils from "./LayerUtils";
import PropertyUtils from "./PropertyUtils";

// 서버 통신을 위한 utils
const ApiUtils = {
    // get 방식 통신을 위한 함수
    sendGet : (url, params, options) => {
        return new Promise((resolve, reject) => {
            getStore().dispatch(showLoading());
            // url = PropertyUtils.getProps('apiDomain') + url;

            const config = {
                ...ApiUtils.createRequestConfig(),
                withCredentials: true,
                headers: {
                    ...ApiUtils.createRequestConfig().headers,
                    'X-Requested-With': 'XMLHttpRequest',
                },
                params: params
            };

            // 공개 엔드포인트가 아닌 경우에만 Authorization 헤더 추가
            if (!url.endsWith('/api/public-key') && !url.endsWith('/api/login')) {
                const token = localStorage.getItem('authToken');
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
            }

            console.log('Request URL:', url);
            console.log('Request config:', config);

            axios.get(url, config)
                .then((response) => {
                    console.log('Response status:', response.status);
                    console.log('Response headers:', response.headers);
                    ApiUtils.afterProcess(url, resolve, reject, response, options);
                })
                .catch((error) => {
                    console.error('Request error:', error);
                    if (error.response) {
                        console.error('Error response data:', error.response.data);
                        console.error('Error response status:', error.response.status);
                        console.error('Error response headers:', error.response.headers);
                    } else if (error.request) {
                        console.error('No response received:', error.request);
                    } else {
                        console.error('Error setting up request:', error.message);
                    }
                    ApiUtils.afterError(url, error, reject, options);
                })
                .finally(() => {
                    getStore().dispatch(hideLoading());
                });
        })
    },
    // post 방식 통신을 위한 함수
    sendPost : (url, params, options) => {
        return new Promise((resolve, reject) => {
            getStore().dispatch(showLoading());
            // url = PropertyUtils.getProps('apiDomain') + url;

            const config = {
                ...ApiUtils.createRequestConfig(),
                withCredentials: true,
                headers: {
                    ...ApiUtils.createRequestConfig().headers,
                    'X-Requested-With': 'XMLHttpRequest',
                },
                params: params
            };

            // 공개 엔드포인트가 아닌 경우에만 Authorization 헤더 추가
            if (!url.endsWith('/api/public-key') && !url.endsWith('/api/login')) {
                const token = localStorage.getItem('authToken');
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
            }

            console.log('Request URL:', url);
            console.log('Request config:', config);

            axios.post(url, params, config)
                .then((response) => {
                    console.log('Response status:', response.status);
                    console.log('Response headers:', response.headers);
                    ApiUtils.afterProcess(url, resolve, reject, response, options);
                })
                .catch((error) => {
                    console.error('Request error:', error);
                    if (error.response) {
                        console.error('Error response data:', error.response.data);
                        console.error('Error response status:', error.response.status);
                        console.error('Error response headers:', error.response.headers);
                    } else if (error.request) {
                        console.error('No response received:', error.request);
                    } else {
                        console.error('Error setting up request:', error.message);
                    }
                    ApiUtils.afterError(url, error, reject, options);
                })
                .finally(() => {
                    getStore().dispatch(hideLoading());
                });
        })
    },
    // 서버 통신 후처리 로직(성공)
    afterProcess : async (url, resolve, reject, response,) => {
        getStore().dispatch(
            hideLoading()
        )

        const data = response.data;

        if(response.status !== 200 && response.status !== 204) {
            await LayerUtils.showAlert('일시적인 서비스 오류입니다.');
            reject(data);
        } else {
            resolve(data);
        }
    },
    // 서버 통신 후처리 로직(실패)
    afterError : async (url, error, reject, options) => {
        getStore().dispatch(
            hideLoading()
        )

        console.log('error', error);
        
        if ((error.response && (error.response.status === 403 || error.response.status === 401))) {
            await LayerUtils.showAlert('잘못된 접근입니다. 다시 로그인해주세요.');
            // 403 Forbidden 오류 시 로그인 페이지로 리다이렉트
            window.location.href = '/Login';
        } else {
            await LayerUtils.showAlert('일시적인 통신 지연이 발생하였습니다. 잠시 후 다시 이용해 주세요.');
        }

        reject(error);
    },
    // header 세팅 함수
    createRequestConfig : (headers) => {
        return {
            headers : {
                ...headers
            }
        }
    }
}

export default ApiUtils;