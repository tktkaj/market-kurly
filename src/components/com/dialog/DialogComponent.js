import { useSelector } from "react-redux";
import DialogWrapper from "./DialogWrapper";

function DialogComponent() {

    const { layerList } = useSelector(state => state.LayerReducer);

    return (
        <>
            {
                layerList?.map((item, index) => (
                    item &&
                    <DialogWrapper key={'dialog-'+index}>
                        <item.layerComponent layerIndex={index} callbackFunc={item.callbackFunc} {...item.layerProps} />
                    </DialogWrapper>
                ))
            }
        </>
    )
}

export default DialogComponent;