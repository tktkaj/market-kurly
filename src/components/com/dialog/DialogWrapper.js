import { useEffect, useRef } from "react";

const DialogOverlayStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '1040',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

function DialogWrapper({children}) {

    let lastFocusElement = null
    const wrapperRef = useRef();

    useEffect(()=>{
        lastFocusElement = document.activeElement;
        console.log(wrapperRef.current.children[0]);
        wrapperRef.current.children[0].focus();
        

        return () => {
            if(lastFocusElement) {
                lastFocusElement.focus();
            }
        }
    },[])

    return (
        <div ref={wrapperRef} className="dialog-wrapper" style={DialogOverlayStyle}>
            {children}
        </div>
    );
}

export default DialogWrapper;