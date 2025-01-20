import SampleLink from "../../components/com/sample/SampleLink";
import SamplePageTitle from "../../components/com/sample/SamplePageTitle";
import useCore from "../../hooks/useCore";

// 샘플 히스토리 화면
function SampleHistory() {

    const core = useCore();
    const params = core.getPageParams();

    console.log(params);
    
    return (
        <>
            <SamplePageTitle title="history sample 페이지" />
            <p>{params?.params?.data}</p>
            <SampleLink title="뒤로가기" to="/samples/SampleDialog" onClick={()=>{
                core.goBack(1, {
                    data : 'baccccck'
                })
            }} />
        </>
    );
}

export default SampleHistory;