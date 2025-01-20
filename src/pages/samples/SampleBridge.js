import SampleLink from "../../components/com/sample/SampleLink";
import SamplePageTitle from "../../components/com/sample/SamplePageTitle";
import useCore from "../../hooks/useCore";
import LayerUtils from "../../utils/LayerUtils";
import NativeUtils from "../../utils/NativeUtils";

// 샘플 브릿지 화면
function SampleBridge() {

    const core = useCore();

    const onMakeBridge = async () => {
        const res = await NativeUtils.connectNativeBridge({
            cmd : 'test'
        })

        console.log(res);
        
        LayerUtils.showAlert('hihihiihihihihi');
    }

    return (
        <>
            <SamplePageTitle title="Native Bridge sample 페이지" />
            <button onClick={onMakeBridge}>Bridge 생성1</button>
            <button onClick={onMakeBridge}>Bridge 생성2</button>
            <br/>
            <SampleLink title="뒤로가기" to="/samples/SampleMain" onClick={()=>{
                core.goBack()
            }} />
        </>
    );
}

export default SampleBridge;