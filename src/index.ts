import type { PluginOption } from 'vite'
import fs from 'fs';
import archiver from 'archiver';

interface UserOptions {
    source?: string,
    destination?: string
}

export function filemanager(userOptions: UserOptions = {
    source: './dist',
    destination: './dist.zip',
}): PluginOption {
    const { source, destination } = userOptions;

    return {
        name: 'vite-plugin-file-manager',
        apply: 'build',
        configResolved() {
        },
        closeBundle() {
            console.log('destination', destination);
            const output = fs.createWriteStream(destination as string)
            console.log('__dirname', __dirname);
            
            const archive = archiver('zip')
            output.on('close', function () {
                console.log('archiver done')
            })

            archive.on('error', function (err) {
                throw err
            })

            archive.pipe(output)
            console.log('source', source);


            archive.glob('**/*', {
                cwd: source,
            })
            archive.finalize()
        }
    }
}
