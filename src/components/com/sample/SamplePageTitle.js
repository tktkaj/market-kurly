const pageTitleStyle = {
    fontSize : "2rem",
    fontWeight : 'bold',
    margin : '1rem'
}

function SamplePageTitle({title}) {
    return (
        <p style={pageTitleStyle}>{title}</p>
    );
}

export default SamplePageTitle