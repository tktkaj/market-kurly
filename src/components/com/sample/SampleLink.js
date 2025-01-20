import useCore from "../../../hooks/useCore";

const linkStyle = {
    fontSize : "1.3rem",
}

function SampleLink({to, title, onClick}) {
    const core = useCore();

    const onLinkClick = (event) => {
        event.preventDefault();

        if(onClick) {
            onClick()
        } else if(to) {
            core.goPage(to);
        }
    }

    return(
        <a style={linkStyle} href={to || '#'} onClick={onLinkClick}>{title}</a>
    );
}

export default SampleLink;