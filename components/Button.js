export default function Button({ children, variant, className }) {
    const addClassName = className ? `${className}` : "";

    const addVariant = {
        stroke: 'border border-gray-100 hover:bg-gray-100 hover:text-gray-900',
        fill: 'bg-blue-700 text-white hover:bg-blue-500'
    }

    const pickedVariant = addVariant[variant];

    return (
        <button type="submit" className={`w-32 h-11 inline-block text-base transition ease-in rounded ${pickedVariant} ${addClassName}`}>{children}</button>
    );
}