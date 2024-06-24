import { create } from 'zustand'
import ollama, { ListResponse } from 'ollama'

type OllamaState = {
    ollamaStatus: boolean
    ollamaModels: string[]
    selectedModel: string
    setSelectedModel: (model: string) => void
    setOllamaStatus: (status: boolean) => void
}

let ollamaModels: ListResponse | undefined
let ollamaStatus = false

try {
    ollamaModels = await ollama.list()
    ollamaStatus = true
} catch { /**/ }

export const useOllamaStore = create<OllamaState>((set) => ({
    ollamaStatus,
    ollamaModels: ollamaModels?.models.map(it => it.name) || [],
    selectedModel: ollamaModels?.models[0].name || '',
    setSelectedModel: model => set({ selectedModel: model }),
    setOllamaStatus: (status) => set({ ollamaStatus: status }),
}))