module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    '/node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|react-native-reanimated)',
    '/node_modules/react-native-reanimated/plugin/',
  ],
  setupFilesAfterEnv: ['./jest-setup.ts'],
};
