import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import alias from '@rollup/plugin-alias';
import path from "node:path";

/** @type {import('rollup').RollupOptions} */
const mainConfig = {
    input: 'main.ts',
    output: {
        file: 'build/main.mjs',
        format: 'esm',
        sourcemap: true
    },
    external: [],
    plugins: [
        typescript({
            outputToFilesystem: true
        }),
        alias({
            entries: [
                {find: '@', replacement: path.join(process.cwd(), 'src')},
            ]
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

/** @type {import('rollup').RollupOptions} */
const clientConfig = {
    input: 'src/index.ts',
    output: {
        file: 'build/index.mjs',
        format: 'esm',
        sourcemap: true
    },
    external: [],
    plugins: [typescript({
        outputToFilesystem: true
    }),
        alias({
            entries: [
                {find: '@', replacement: path.join(process.cwd(), 'src')},
            ]
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

export default [mainConfig, clientConfig]
