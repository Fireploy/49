import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   base: `${env.VITE_BASE_PATH}`,
    plugins: [react()],
    server: {
      port: parseInt(env.VITE_PORT),
      host: true,
      cors: true,
      allowedHosts: ['proyectos.fireploy.online'],
      historyApiFallback: true
    },
    preview: {
      port: parseInt(env.VITE_PORT),
      host: true,  
      cors: true,
      allowedHosts: ['proyectos.fireploy.online'],
       historyApiFallback: true
    },
})
