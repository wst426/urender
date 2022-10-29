import { defineConfig } from "rollup";
import typescript from '@rollup/plugin-typescript';
import terser from "@rollup/plugin-terser";

export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/urender.js',
      format: 'iife',
      sourcemap: true
    },
    {
      file: 'dist/urender.min.js',
      format: 'iife',
      plugins: [terser()]
    }
  ],
  plugins: [typescript()]
})
