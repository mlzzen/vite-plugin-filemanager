import type { Plugin, ResolvedConfig } from 'vite'
import fs from 'fs';
import archiver from 'archiver';

interface UserOptions {
    format: 'zip' | 'tar',
    source?: string,
    destination?: string
}

function VitePluginFileManager(userOptions: UserOptions = {
    format: 'zip',
}): Plugin {
    const { source, destination } = userOptions;
    const output = fs.createWriteStream(destination || './dist.zip');
    const archive = archiver('zip', {
        zlib: { level: 9 }
    })
    return {
        name: 'vite-plugin-file-manager',
        apply: 'build'
    }
}
