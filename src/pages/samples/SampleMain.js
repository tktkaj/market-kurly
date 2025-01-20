import { useDispatch, useSelector } from "react-redux"
import SamplePageTitle from "../../components/com/sample/SamplePageTitle"
import { decrement, increment } from "../../store/reducers/StoreCounter";
import SampleLink from "../../components/com/sample/SampleLink";
import useCore from "../../hooks/useCore";
import getStore from "../../store/Store";

function SampleMain() {
    const { number } = useSelector(state => state.CounterReducer);
    const counter = getStore().getState();
    const dispatch = useDispatch();
    const core = useCore();

    const onIncrease = () => {
        dispatch(
            increment()
        );
    }

    const ondecrease = () => {
        dispatch(
            decrement()
        );
    }

    const onDirectIncrease = () => {
        getStore().dispatch(
            increment()
        );
    }


    return (
        <>
            <SamplePageTitle title="SampleMain" />
            <p>{number}</p>
            <p>{counter.CounterReducer.number}</p>
            <button onClick={onIncrease}>+</button>
            <button onClick={ondecrease}>-</button>
            <button onClick={onDirectIncrease}>직접 스토어 값 바꾸기</button>
            <br/>
            <SampleLink title="dialog Sample 페이지로 이동" to="samples/SampleDialog" onClick={() => {
                console.log('링크 클릭 실행됨');

                core.goPage("samples/SampleDialog");
            }}/>
            <br/><br/>
            <SampleLink title="Bridge Sample 페이지로 이동" to="samples/SampleBridge" onClick={() => {
                console.log('링크 클릭 실행됨');

                core.goPage("samples/SampleBridge");
            }}/>
            <br/><br/>
            <SampleLink title="Api Sample 페이지로 이동" to="samples/SampleApi" onClick={() => {
                console.log('링크 클릭 실행됨');

                core.goPage("samples/SampleApi");
            }}/>
            <br/><br/>
            <SampleLink title="Market Kurly 페이지로 이동" to="FG/FGMK/FGMKHM/FGMKHM001" onClick={() => {
                console.log('링크 클릭 실행됨');

                core.goPage("FG/FGMK/FGMKHM/FGMKHM001");
            }}/>
        </>
    )
}

export default SampleMain