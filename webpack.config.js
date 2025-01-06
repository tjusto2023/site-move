const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true,
  },
  module: {
    rules: [
      // Babel Loader
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
      // SASS Loader
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, // Extrai o CSS para um arquivo separado
            options: {
              publicPath: '', // Caminho público para as referências CSS
            },
          },
          'css-loader', // Processa o CSS
          'sass-loader', // Compila o SASS para CSS
        ],
      },
      // Image Loader
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource', // Usando o novo tipo de asset para carregar imagens
        generator: {
          filename: 'images/[hash][ext][query]', // Usando um nome único com hash para evitar cache
        },
      }      
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(), // Minimiza o CSS
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: [
              ['imagemin-mozjpeg', { quality: 75 }],
              ['imagemin-pngquant', { quality: [0.7, 0.9] }],
            ],
          },
        },
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Limpa a pasta 'dist' antes de gerar os novos arquivos
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css', // Nome do arquivo CSS com hash
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html', // Arquivo de template HTML
      inject: true, // Injeta os arquivos JS e CSS no HTML gerado
    }),
    // new ImageMinimizerPlugin({
    //   minimizerOptions: {
    //     plugins: [
    //       ['imagemin-mozjpeg', { quality: 75 }],
    //       ['imagemin-pngquant', { quality: [0.7, 0.9] }],
    //     ],
    //   },
    // }),
  ],
  devServer: {
    static: './dist', // Diretório onde os arquivos gerados ficam
    port: 3000, // Porta do servidor de desenvolvimento
    open: true, // Abre o navegador automaticamente
  },
};
