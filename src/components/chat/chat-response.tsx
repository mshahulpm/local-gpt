import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
type IChatResponseProps = {
    response: string
}

export default function ChatResponse({ response }: IChatResponseProps) {

    return (
        <div style={{
            height: '50vh',
            overflowY: 'scroll',
            padding: '20px',
            marginBottom: 20
        }}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                    // @ts-ignore
                    code({ inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');

                        return !inline && match ? (
                            <SyntaxHighlighter
                                // @ts-ignore
                                style={dracula} PreTag="div" language={match[1]} {...props}>
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    },
                }}
            >
                {response}
            </ReactMarkdown>
        </div>
    )
}