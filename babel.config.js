module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // Required for expo-router
      "expo-router/babel",
      // Optional for react-native-paper (only imports required modules)
      "react-native-paper/babel",
    ],
  };
};
