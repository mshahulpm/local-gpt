import ollama from 'ollama'
import AskBox from "./ask-box";
import { useOllamaStore } from '../../store/ollama-store';
import { useState } from 'react';
import ChatResponse from './chat-response';



export default function ChatWindow() {

    const { selectedModel } = useOllamaStore()
    const [chatResp, setResp] = useState('')

    async function chatWithOllama(prompt: string) {

        const response = await ollama.chat({
            model: selectedModel,
            messages: [{
                role: 'user',
                content: prompt
            }],
            stream: true,
        })

        for await (const part of response) {
            setResp(prev => prev + part.message.content)
        }

    }

    return (
        <>
            <ChatResponse response={chatResp} />
            <AskBox submitPrompt={chatWithOllama} />
        </>
    )
}