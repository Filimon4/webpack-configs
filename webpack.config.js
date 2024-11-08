import path from 'path';
import webpack from 'webpack';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = (env)  => {
  return {
    mode: env.mode,
    entry: {
      'index': path.resolve(__dirname, 'src/index'),
      'index2': path.resolve(__dirname, 'src2/index')
    },
    output: {
      filename: '[name]-[hash].js',
      path: path.resolve(__dirname, 'bundle'),
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            transpileOnly: true,
            happyPackMode: true
          },
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
  }
};

export default config