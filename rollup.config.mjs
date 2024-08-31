import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';

/** @type {import('rollup').RollupOptions} */
const serverConfig = {
    input: 'main.tsx',
    output: {
        file: 'build/main.mjs',
        format: 'esm',
        sourcemap: true
    },
    external: [],
    plugins: [typescript({
        outputToFilesystem: true
    }),
        commonjs(),
        json(),
        nodeResolve({
            preferBuiltins: true
        })]
}

/** @type {import('rollup').RollupOptions} */
const clientConfig = {
    input: 'src/index.tsx',
    output: {
        file: 'build/index.mjs',
        format: 'esm',
        sourcemap: true
    },
    external: [],
    plugins: [typescript({
        outputToFilesystem: true
    }),
        replace({
            preventAssignment: true,
            'process.env.NODE_ENV': JSON.stringify('production'),
            __buildDate__: () => JSON.stringify(new Date()),
            __buildVersion: 15
        }),
        commonjs(),
        json(),
        nodeResolve({
            preferBuiltins: true
        })]
}

export default [serverConfig, clientConfig]
