import { readFileSync } from 'fs';
import { builtinModules } from 'module';
import typescript from '@rollup/plugin-typescript';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'))

export default {
  input: 'src/index.ts',
  external: Object.keys(pkg.dependencies || {})
    .concat(Object.keys(pkg.peerDependencies || {}))
    .concat(builtinModules),
  output: [
    {
      format: 'cjs',
      file: pkg.main,
      // exports: 'named',
      // footer: 'module.exports = Object.assign(exports.default, exports);',
      sourcemap: true
    },
    {
      format: 'es',
      file: pkg.module,
      // plugins: [emitModulePackageFile()],
      sourcemap: true
    }
  ],
  plugins: [typescript()]
}