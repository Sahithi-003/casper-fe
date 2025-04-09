const path = require('path');

module.exports = async ({ config }) => {
  // fonts
  config.module.rules.push({
    test: /\.(woff|woff2|eot|ttf|otf|svg|png)$/,
    use: [
      {
        loader: 'file-loader',
        query: {
          name: '[name].[ext]',
        },
      },
    ],
    include: path.resolve(__dirname, 'public'),
  });

  return config;
};
