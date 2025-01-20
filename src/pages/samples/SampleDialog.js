import { data } from "react-router-dom";
import SampleDialogContent from "../../components/com/sample/SampleDialog";
import SamplePageTitle from "../../components/com/sample/SamplePageTitle";
import LayerUtils from "../../utils/LayerUtils";
import SampleLink from "../../components/com/sample/SampleLink";
import useCore from "../../hooks/useCore";

function SampleDialog() {

    const core = useCore();
    
    const onOpenAlert = async () => {
        const res = await LayerUtils.showAlert("alert 창 입니다.");

        console.log('alert callback 실행', res);
    }

    const onOpenConfirm = async () => {
        const res = await LayerUtils.showConfirm("confirm 창 입니다.", {
            cancelBtnText : '메롱',
            okBtnText : '안녕'
        })

        console.log('confirm callback 실행', res);
    }

    const onOpenFullPopup = async () => {
        const res = await LayerUtils.showDialog({
            ContentsComponent : SampleDialogContent,
            dialogType : 'full',
            data : {
                userId : '23232'
            }
        })

        console.log('fullPopup callback 실행', res);
    }

    const onOpenCenterPopup = async () => {
        const res = await LayerUtils.showDialog({
            dialogType : 'center',
            data : {
                center : 'hihi'
            },
            ContentsComponent : SampleDialogContent
        })

        console.log('centerPopup callback 실행', res);
    }

    const onOpenBottomPopup = async () => {
        const res = await LayerUtils.showDialog({
            ContentsComponent : SampleDialogContent,
            dialogType : 'bottom',
            data : {
                params : 'botttom'
            }
        })

        console.log('bottomPopup callback 실행', res);
    }

    return (
        <>
            <SamplePageTitle title="SampleDialog" />
            <button onClick={onOpenAlert}>alert 열기</button>
            <button onClick={onOpenConfirm}>confirm 열기</button>
            <button onClick={onOpenFullPopup}>full popup 열기</button>
            <button onClick={onOpenCenterPopup}>center popup 열기</button>
            <button onClick={onOpenBottomPopup}>bottom 열기</button>
            <br/>
            <SampleLink to="/samples/SampleHistory" title="History 샘플 페이지로 이동" onClick={()=>{
                core.goPage('/samples/SampleHistory', {
                    data : 'history'
                })
            }} />
            <br/>
            <SampleLink to={'/'} title="뒤로가기" onClick={()=>{
                core.goBack(1, {
                    data : 'home'
                })
            }} />
        </>
    );
}

export default SampleDialog;