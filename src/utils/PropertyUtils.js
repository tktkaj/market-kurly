import { setProperty } from "../store/reducers/StoreCore";
import getStore from "../store/Store";

// 프로젝트 전반적인 속성 값을 관리하는 utils
const PropertyUtils = {
    // 속성값을 가져오는 함수
    getProps : (key) => {
        return getStore().getState().CoreReducer.property[key];
    },
    // 속성값을 세팅하는 함수
    setProps : (property) => {
        getStore().dispatch(
            setProperty(
                {
                    ...getStore().getState().CoreReducer.property,
                    property
                }
            )
        )
    }
}

export default PropertyUtils;