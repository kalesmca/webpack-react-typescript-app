# webpack-react-typescript-app

npm init -y  	=> for initialize package.json with default values
npm init react react-dom  => for react application
npm i -D typescript @types/react @types/react-dom
create tsconfig.json file and configure
=========================================================================================================================================	
	{
  "compilerOptions": {
    "target": "ES5" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */,
    "module": "ESNext" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */,
    "moduleResolution": "node" /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */ /* Type declaration files to be included in compilation. */,
    "lib": [
      "DOM",
      "ESNext"
    ] /* Specify library files to be included in the compilation. */,
    "jsx": "react-jsx" /* Specify JSX code generation: 'preserve', 'react-native', 'react' or 'react-jsx'. */,
    "noEmit": true /* Do not emit outputs. */,
    "isolatedModules": true /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */,
    "esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */,
    "strict": true /* Enable all strict type-checking options. */,
    "skipLibCheck": true /* Skip type checking of declaration files. */,
    "forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */,
    "resolveJsonModule": true
    // "allowJs": true /* Allow javascript files to be compiled. Useful when migrating JS to TS */,
    // "checkJs": true /* Report errors in .js files. Works in tandem with allowJs. */,
  },
  "include": ["src/**/*"]
}

=================================================================================================================================================

	=> create index.html file and needed
	=>Babel
			npm i -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-loader
			.babelrc file configure
===========================================================================================================================================
{
  "presets": [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ],
    "@babel/preset-typescript"
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "regenerator": true
      }
    ]
  ]
}

==============================================================================================================================================

Webpack configuration:
----------------------
	=> npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin
	
========================================================================================================
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [css-loader, syle-loader],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  mode:"development",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ]
}
===================================================================================================================

Styles loader:
----------------
npm i -D css-loader style-loader

image declaration err fix:
	=> need to adde declarations.d.ts file
	=================================================
			declare module '*.png'
			declare module '*.svg' {
			  const content: string
			  export default content
			}
	===================================================
	
Environment setups:
--------------------
	=> npm i -D webpack-merge
		 => we need to split the folder(webpack.common.js, webpack.dev.js, webpack.prod.js, webpack.config.js)
	
	
