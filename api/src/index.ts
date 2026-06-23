import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.json({ 
    status: 'success', 
    message: 'Docker Remote-SSH connection is solid! Hono API is running.',
    timestamp: new Date().toISOString()
  })
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})