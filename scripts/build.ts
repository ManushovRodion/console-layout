import { resolve } from 'path';
import { removeSync } from 'fs-extra';

import { defineConfig, Plugin, rollup, RollupOptions } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import dts from 'rollup-plugin-dts';

import { dependencies, name } from './../package.json';

type Type = 'cjs' | 'es' | 'umd' | 'type';

function createOutputOption(
  type: Type,
  dirPackage: string,
  namePackage: string,
  plugins: Plugin[] = []
) {
  let input = `${dirPackage}/src/main.ts`;
  let output = {};

  if (type === 'type') {
    input = `${dirPackage}/dist/type/main.d.ts`;
    output = {
      file: `${dirPackage}/dist/${namePackage}.d.ts`,
    };
  } else {
    output = {
      format: type,
      name: namePackage,
      file: `${dirPackage}/dist/${namePackage}.${type}.js`,
    };
  }

  return defineConfig({
    input,
    output,
    external: [...Object.keys(dependencies || {})],
    plugins,
  });
}

async function build(options: RollupOptions) {
  let bundle;

  try {
    bundle = await rollup(options);
  } catch (error: any) {
    console.log('==============================================');
    console.error(error);
    process.exit(1);
  }

  if (bundle) {
    await bundle.write(options);
    await bundle.close();
  }

  return true;
}

async function main(namePackage: string) {
  const dirPackage = `${resolve(__dirname)}/..`;

  removeSync(`${dirPackage}/dist`);

  const mapConfigs: { type: Type; plugins: Plugin[] }[] = [
    {
      type: 'cjs',
      plugins: [
        typescript({ tsconfig: `${dirPackage}/tsconfig.json` }),
        terser({ compress: true }),
      ],
    },
    {
      type: 'es',
      plugins: [typescript(), terser({ compress: true })],
    },
    {
      type: 'umd',
      plugins: [nodeResolve(), typescript(), terser({ compress: true })],
    },
  ];

  const outputOptionsList = mapConfigs.map((map) =>
    createOutputOption(map.type, dirPackage, namePackage, map.plugins)
  );

  const outputOptionTypes = createOutputOption(
    'type',
    dirPackage,
    namePackage,
    [dts()]
  );

  await Promise.allSettled(outputOptionsList.map((options) => build(options)));
  await build(outputOptionTypes);

  removeSync(`${dirPackage}/dist/type`);

  console.log('==============================================');
  console.log(`\x1b[32mSuccess!\x1b\x1b[0m`);
  process.exit(0);
}

export default main(name);
