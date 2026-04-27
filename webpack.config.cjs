const webpack = require("webpack");

module.exports = {
  entry: "./src/client/index.tsx",
  resolve: {
    // 1. Tell Webpack how to handle .js imports in an ESM world
    extensionAlias: {
      ".js": [".js", ".ts", ".tsx"],
    },
    // 2. Keep your standard extensions
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          // Add this to ensure ts-loader handles the resolution correctly
          options: {
            allowTsInNodeModules: true,
          },
        },
      },
      {
        test: /\.css$/, // Removed the '?' as it's usually just .css
        use: ["style-loader", "css-loader"], // Added style-loader to inject CSS
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      HOST: 'localhost',
      PORT: '3000'
    })
  ]
};
