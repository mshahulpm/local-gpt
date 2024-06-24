import { createRootRoute } from '@tanstack/react-router'
import LayoutPage from '../layout'

export const Route = createRootRoute({
    component: () => (
        <LayoutPage>

        </LayoutPage>
    ),
})