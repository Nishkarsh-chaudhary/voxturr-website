module.exports = {
  // ... other webpack configuration option
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    // ... other plugins
    new BundleAnalyzerPlugin(),
  ],
};
