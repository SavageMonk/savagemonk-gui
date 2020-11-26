export default function ButtonPrimary({className, children, type}) {
    return <div className={["border-solid border-red border-2", className].join(" ")}>
        <button type={type} className="appearance-none px-6 py-2 bg-red hover:bg-white hover:text-red transform -translate-x-1 -translate-y-1 transition duration-150 ease-in-out focus:-translate-x-0 focus:-translate-y-0 active:-translate-x-0 active:-translate-y-0">
            {children}
        </button>
    </div>
}