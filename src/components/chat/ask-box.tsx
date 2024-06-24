import { Input } from "antd";
import { useState } from "react";

type IAskBoxProps = {
    submitPrompt: (p: string) => void
}

export default function AskBox({ submitPrompt }: IAskBoxProps) {

    const [prompt, setPrompt] = useState('')

    return (
        <Input.TextArea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter' && prompt) {
                    submitPrompt(prompt)
                    setPrompt('')
                }
            }}
            rows={3} placeholder="Ask your question?" />
    )
}