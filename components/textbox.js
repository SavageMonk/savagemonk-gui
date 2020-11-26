export default function TextBox({className, placeholder, value, onChange}) {
    return <input value={value} onChange={e=>onChange(e.target.value)} className={["pl-3 appearance-none transition-colors duration-150 ease-in-out border-red bg-black-light border-solid border-2 focus:border-white",className].join(" ") } type="text" placeholder={placeholder} />
}