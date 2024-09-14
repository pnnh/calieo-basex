import {fileURLToPath, URL} from "url";
import {defineConfig} from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    resolve: {
        alias: [
            {
                find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url))
            }
        ]
    },
    build: {
        sourcemap: true,
    },
    plugins: [tsconfigPaths(),],
})
