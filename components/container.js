export default function Container({children, className}) {
    return <div className={["container px-2 md:px-4 mx-auto",className].join(" ")}>{children}</div>
}