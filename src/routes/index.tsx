import { createFileRoute } from '@tanstack/react-router'
import ChatWindow from '../components/chat'

export const Route = createFileRoute('/')({
  component: () => {

    return (
      <ChatWindow />
    )
  }
})