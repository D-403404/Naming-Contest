const webpack = require("webpack");

module.exports = {
  entry: "./src/client/index.tsx",
  resolve: {
    // Tell Webpack how to handle .js imports in an ESM world
    extensionAlias: {
      ".js": [".js", ".ts", ".tsx"],
    },
    // Keep standard extensions
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
    new webpack.DefinePlugin({
      "process.env": JSON.stringify({
        HOST: process.env.HOST || "localhost",
        PORT: process.env.PORT || "8080",
        MONGODB_URI: process.env.MONGODB_URI || "",
        DATABASE_NAME: process.env.DATABASE_NAME || "local",
      }),
    }),
  ],
};
