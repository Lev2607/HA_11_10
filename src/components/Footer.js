export default function Footer(props) {
    return (
        <footer style={{
            border: props.border,
            color: props.color,
            backgroundColor: props.bgColor
        }}>Copyright | Impressum</footer>
    )
}