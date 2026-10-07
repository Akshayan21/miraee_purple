import { ViteReactSSG } from 'vite-react-ssg'

import './index.css'
import { routes } from '@/routes'

// Pre-rendered to static HTML at build time (`npm run build`), hydrated on the client.
export const createRoot = ViteReactSSG({ routes })
