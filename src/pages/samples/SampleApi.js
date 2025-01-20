import SampleLink from "../../components/com/sample/SampleLink";
import SamplePageTitle from "../../components/com/sample/SamplePageTitle";
import useCore from "../../hooks/useCore";
import ApiUtils from "../../utils/ApiUtils";
import LayerUtils from "../../utils/LayerUtils";

function SampleApi() {

    const core = useCore();

    const fetchPublicKey = async () => {
        try {
          const res = await ApiUtils.sendGet("/api/public-key");
          if (res.publicKey) {
            console.log('Public key fetched successfully');
            console.log(res.publicKey);
            return res.publicKey;
          } else {
            console.error('Failed to fetch public key');
            throw new Error('Failed to fetch public key');
          }
        } catch (error) {
          console.error('Error fetching public key:', error);
          LayerUtils.showAlert('공개키를 가져오는 중 오류가 발생했습니다.');
          throw error;
        }
      };

    return (
        <>
            <SamplePageTitle title={"Sample Api 페이지 입니다."} />
            <br/>
            <p>반드시 Nodejs 및 Spring 서버가 동작 중이여야 합니다.</p>
            <br/><br/>
            <button onClick={fetchPublicKey} >Api 실행</button>
            <br/><br/>
            <SampleLink title="뒤로가기" to="/samples/SampleMain" onClick={()=>{
                core.goBack()
            }} />
        </>
    )
}

export default SampleApi;