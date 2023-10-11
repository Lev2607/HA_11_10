import Button from "@/components/Button"

export default function Navigation(props) {
    return (
        <div style={{
            border: props.border,
            backgroundColor: props.backgroundColor,
            padding: props.padding,
            display: props.display,
            gap: props.gap
        }}>
            <Button href="/" label="Home"/>
            <Button href="/" label="Twitter" />
            <Button href="/" label="Instagram" />
            <Button href="/contact" label="Contact" />
        </div>
    )
}