const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
  // Definição do modo: desenvolvimento ou produção
  const isDevelopment = argv.mode === 'development';

  return {
    mode: 'development',
    entry: './src/js/index.js', // Ponto de entrada
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isDevelopment ? 'bundle.js' : 'bundle.[contenthash].js', // Hash no nome do arquivo em produção
      clean: true, // Limpa a pasta dist antes de gerar novos arquivos
    },
    resolve: {
      alias: {
        jquery: "jquery/src/jquery", // Alias para o jQuery
      },
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          use: ['html-loader'],
        },
        // Babel Loader para transpilar o código JS
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        // SASS Loader para compilar arquivos SCSS ou SASS
        {
          test: /\.(scss|sass)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader, // Extrai o CSS para arquivos separados
            },
            'css-loader', // Processa o CSS
            'sass-loader', // Compila o SASS para CSS
          ],
        },
        // CSS Loader para arquivos CSS
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader, // Extrai o CSS
            },
            'css-loader', // Processa o CSS
          ],
        },
        // Image Loader para otimizar as imagens
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
          type: 'asset/resource', // Usando asset/resource para imagens
          generator: {
            filename: 'images/[hash][ext][query]', // Usando hash para evitar cache
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(), // Limpa a pasta dist antes de gerar novos arquivos
      new MiniCssExtractPlugin({
        filename: isDevelopment ? 'style.css' : 'style.[contenthash].css', // Nome do arquivo CSS
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html', // Template HTML
        inject: true, // Injeta os arquivos JS e CSS gerados no HTML
        hash: true, // Adiciona um hash para evitar cache
      }),
      new webpack.ProvidePlugin({
        $: 'jquery', // Disponibiliza o jQuery globalmente
        jQuery: 'jquery',
      }),
    ],
    optimization: {
      minimize: !isDevelopment, // Minimaiza em produção
      minimizer: [
        new TerserPlugin(), // Minimiza o JavaScript
        new CssMinimizerPlugin(), // Minimiza o CSS
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.imageminGenerate,
            options: {
              plugins: [
                ['imagemin-mozjpeg', { quality: 75 }], // Compressão de JPEG
                ['imagemin-pngquant', { quality: [0.7, 0.9] }], // Compressão de PNG
              ],
            },
          }
        })
      ],
    },
    performance: {
      hints: isDevelopment ? false : 'warning', // Desativa avisos de performance no modo dev
      maxEntrypointSize: 512000, // Limite do tamanho do ponto de entrada
      maxAssetSize: 512000, // Limite do tamanho dos arquivos
    },
    devtool: isDevelopment ? 'inline-source-map' : false, // Mapa de fonte para desenvolvimento
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'), // Diretório para servir os arquivos estáticos
      },
      port: 3000, // Porta do servidor
      open: true, // Abre o navegador automaticamente
      hot: true, // Habilita hot module replacement
      historyApiFallback: true, // Suporte para SPA (Single Page Application)
    },
  };
};
