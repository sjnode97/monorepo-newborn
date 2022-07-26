// vite.config.ts
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  // ...
  resolve: {
    alias: {
      src: "@", // 默认已配置
      assets: "@/assets",
      common: "@/common",
      components: "@/components",
      api: "@/api",
      views: "@/views",
      plugins: "@/plugins",
      utils: "@/utils",
    },
  },
  server: {
    port: 9091,
    host: "192.168.31.57",
    proxy: {//跨域
      // 如果是 /api 打头，则访问地址如下
      '/api': {
        ws: true,
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      },
    },
  },
  plugins: [
    // ...
    vue(),
      // 按需引入vite
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
