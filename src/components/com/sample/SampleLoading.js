const SampleLoadingStyle = {
    position : "absolute",
    top : '0',
    left : '0',
    width : '100vw',
    height : '100vh',
    backgroundColor : 'rgba(0,0,0,0.5)',
    zIndex : '99999999'
};

// 샘플 로딩 컴포넌트
function SampleLoading() {
    return (
        <div style={SampleLoadingStyle}>
            ...로딩입니다.
        </div>
    );
}

export default SampleLoading;