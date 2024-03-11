module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@features': './src/features',
          '@services': './src/services',
          '@types': './src/types',
        },
      },
    ],
  ],
};
