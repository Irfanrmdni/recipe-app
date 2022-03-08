export default function Container({ children, className }) {
    const addClassName = className ? `${className}` : "";

    return (
        <div className={`bg-gray-900 text-zinc-100 px-20 ${addClassName}`}>
            <div className="container mx-auto">
                {children}
            </div>
        </div>
    );
}