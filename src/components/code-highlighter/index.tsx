import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

type ICodeHighlighterProps = {
    value: string,
    language: string
}

export default function CodeHighlighter({ value, language }: ICodeHighlighterProps) {

    return (
        <SyntaxHighlighter language={language} >
            {value}
        </SyntaxHighlighter>
    )
}