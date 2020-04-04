const webpack = require("webpack");
const ReplaceInFileWebpackPlugin = require("replace-in-file-webpack-plugin");
const StringReplacePlugin = require("string-replace-webpack-plugin");

module.exports = {
  module: {
    rules: [
      // configure replacements for file patterns
      {
        test: /main.*\.js$/,
        use: [
          {
            loader: "string-replace-loader",
            options: {
              search: "<t>(.+?)<\/t>",
              replace: function(match, $1, index, input) {
                var original_value = $1;
                converted_key = original_value
                  .toString()
                  .toLowerCase()
                  .replace(/[^-a-zA-Z0-9 ]*/gi, "")
                  .replace(/[ ]/gi, ".");
                return `<t>${converted_key}</t>`;
              },
              flags: "g"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      STABLE_FEATURE: JSON.stringify(true),
      EXPERIMENTAL_FEATURE: JSON.stringify(false)
    })
    // new ReplaceInFileWebpackPlugin([
    //   {
    //     test: /main.*\.js$/,
    //     rules: [
    //       {
    //         search: /<t>(.+?)<\/t>/g,
    //         replace: function(match, $1, index, input) {
    //           var original_value = $1;
    //           converted_key = original_value
    //             .toString()
    //             .toLowerCase()
    //             .replace(/[^-a-zA-Z0-9 ]*/gi, "")
    //             .replace(/[ ]/gi, ".");
    //           return `<t>${converted_key}</t>`;
    //         }
    //       }
    //     ]
    //   }
    // ])
    // new StringReplacePlugin()
  ]
};
