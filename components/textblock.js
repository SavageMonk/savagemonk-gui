export default function TextBlock({ children }) {
    return <div className="mx-4 transform translate-x-3 translate-y-3 border border-red border-dashed mt-24">
        <div className="transform -translate-x-3 -translate-y-3 border-2 border-red border-solid p-6">
            {children}
        </div>
    </div>
}