
export default function Explain({ children, word }) {
    return (
        <li className="vs__text  mb-3"><span className="font-daysOne">{word}</span>{children}</li>
    );
}