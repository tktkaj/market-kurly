
// 접근성을 위한 utils
const A11yUtils = {
    // 포커스가 갈수 있는 요소를 가리는 함수
    hideFocusableElement  : (parent) => {
        
        if(!parent || !parent.childNodes) return;
        
        for(const childNode of parent.childNodes) {
            const childElement = childNode;
            if(childElement.tabIndex >= 0) {
                childElement.setAttribute('tabIndex', '-1');
            }
            A11yUtils.hideFocusableElement(childElement)
        }
    },
    // 포커스가 갈수 있는 요소를 다시 보여주는 함수
    showFocusableElement : (parent) => {

        if(!parent || !parent.childNodes) return;
        
        for(const childNode of parent.childNodes) {
            const childElement = childNode;
            if(childElement.tabIndex === -1) {
                childElement.removeAttribute('tabIndex');
            }
            A11yUtils.showFocusableElement(childElement)
        }
    }
}

export default A11yUtils;