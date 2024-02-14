module.exports = {
  verbose: true,
  preset: "react-native",
  setupFilesAfterEnv: ["./jest.setup.js"],
  testMatch: ["<rootDir>/tests/**/*.ts?(x)"],
  transformIgnorePatterns: [
    "node_modules/(?!((.pnpm/)?((jest-)?react-native|@react-native(-community)?))|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
  ],
};
