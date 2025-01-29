module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@src": "./src",
        }
      }
    ],
    "@babel/plugin-transform-export-namespace-from",
    'react-native-reanimated/plugin',
  ]
};
