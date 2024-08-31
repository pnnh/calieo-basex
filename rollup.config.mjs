import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
// import {createFilter} from '@rollup/pluginutils'
//
// function assign(target, source) {
//     Object.keys(source).forEach((key) => {
//         target[key] = source[key]
//     })
//     return target
// }

// const DEFAULT_HEADER = '// This file is generated automatically by rollup-plugin-add-import'

const importPlugin = () => {
    // opts = assign({}, opts || {})
    // if (!opts.include) {
    //     throw Error('include option should be specified')
    // }
    // let filter = createFilter(opts.include, opts.exclude)
    // let header = opts.header !== undefined ? opts.header : DEFAULT_HEADER

    return {
        name: 'add-import',

        transform(code) {
            const testRegex = /customElements\.define(.*)/g
            // if (code.indexOf('customElements.define') > 0) {
            //     let a = 1;
            // }
            if (testRegex.test(code)) {
                code = code.replace(testRegex, '//customElements.define($1)')

            }
            // if (!filter(id)) return
            return {
                code: code,
                map: {mappings: ''}
            }
        }
    }
}

/** @type {import('rollup').RollupOptions} */
const mainConfig = {
    input: 'main.tsx',
    output: {
        file: 'build/main.mjs',
        format: 'esm',
        sourcemap: true
    },
    external: [],
    plugins: [

        importPlugin(),
        typescript({
            outputToFilesystem: true
        }),
        commonjs(),
        json(),
        nodeResolve({
            preferBuiltins: true
        })]
}

/** @type {import('rollup').RollupOptions} */
const serverConfig = {
    input: 'src/server.tsx',
    output: {
        file: 'build/server.mjs',
        format: 'esm',
        sourcemap: true
    },
    external: [],
    plugins: [
        importPlugin(),
        typescript({
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

export default [mainConfig, serverConfig, clientConfig]
