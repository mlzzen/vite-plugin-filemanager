# vite-plugin-filemanager

```ts
import { defineConfig } from 'vite'
import { filemanager } from 'vite-plugin-filemanager'

export default defineConfig({
    plugins: [
        filemanager({
            source: './dist/',
            destination: './dist.zip',
        }),
    ],
})
```
