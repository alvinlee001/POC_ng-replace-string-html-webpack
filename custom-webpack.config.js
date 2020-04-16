const webpack = require("webpack");
const ReplaceInFileWebpackPlugin = require("replace-in-file-webpack-plugin");
const StringReplacePlugin = require("string-replace-webpack-plugin");
const AngularCompilerPlugin = require('@ngtools/webpack');

module.exports = (config) => {
  config.module.rules.unshift(
      // configure replacements for file patterns
      {
        test: /\.html$/,
        use: [
          {
            loader: "raw-loader"
          },
          {
            loader: "string-replace-loader",
            options: {
              search: '<t>(.+?)<\/t>',
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
    )
  const index = config.plugins.findIndex(p => p instanceof AngularCompilerPlugin.AngularCompilerPlugin);
  const oldOptions = config.plugins[index]._options;
  oldOptions.directTemplateLoading = false;
  config.plugins.splice(index);
  config.plugins.push(new AngularCompilerPlugin.AngularCompilerPlugin(oldOptions));
  config.plugins.push(
    new webpack.DefinePlugin({
      STABLE_FEATURE: JSON.stringify(true),
      EXPERIMENTAL_FEATURE: JSON.stringify(false)
    }),
  )
  return config;

};
