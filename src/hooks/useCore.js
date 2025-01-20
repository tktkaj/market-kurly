import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addHistoryList, clearHistoryList, removeHistoryList, removeLastHistoryList, setNowPageParams } from "../store/reducers/StoreHistory";

// core 로직을 위한 hook(페이지 이동, 히스토리 관리, pageParams 등...)
function useCore() {
    const navigate = useNavigate();
    const { historyList, nowPageParams } = useSelector((state) => state.HistoryReducer);
    const dispatch = useDispatch()

    const goPage = (url, params, options) => {
        dispatch(
            addHistoryList({
                url : window.location.pathname,
                params : nowPageParams || {},
                preParams : {}
            })
        );
        console.log('params : ', params);
        
        dispatch(
            setNowPageParams({
                params : params || {},
                preParams : {}
            })
        )

        navigate(url);
    }

    const goBack = (num, preParams) => {

        let lastUrl = "/";

        if(historyList.length === 0) {
            navigate('/');
            return;
        }

        if(num) {
            if(historyList.length - num > 0) {
                dispatch(
                    removeHistoryList(num)
                )

                if(historyList[historyList.length - num].url) {
                    lastUrl = historyList[historyList.length - num].url;
                    dispatch(
                        setNowPageParams({
                            params : historyList[historyList.length - num].params || {},
                            preParams
                        })
                    )
                }
            } else {
                dispatch(
                    clearHistoryList()
                )

                dispatch(
                    setNowPageParams({
                        params : {},
                        preParams
                    })
                )
            }
        } else {
            if(historyList.length - 1 >= 0) {
                dispatch(
                    removeLastHistoryList()
                )
                if(historyList[historyList.length - 1].url) {
                    lastUrl = historyList[historyList.length - 1].url;
                    dispatch(
                        setNowPageParams({
                            params : historyList[historyList.length - 1].params || {},
                            preParams
                        })
                    )
                }
            } else {
                
                dispatch(
                    clearHistoryList()
                )

                dispatch(
                    setNowPageParams({
                        params : {},
                        preParams
                    })
                )
            }
        }

        navigate(lastUrl);

    }

    // pageParams 가져오기 함수
    const getPageParams = () => {
        return nowPageParams
    }

    return {
        goPage,
        goBack,
        getPageParams
    }
}

export default useCore;