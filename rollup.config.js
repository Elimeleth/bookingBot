import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
export default {
    input: ['src/app.ts'],
    output: [
        {
            dir: 'dist',
            entryFileNames: '[name].cjs',
            format: 'cjs',
            exports: 'named',
        },
    ],
    plugins: [
        commonjs(),
        typescript(),
    ],
}
