module.exports = {
  root: true,
  extends: '@react-native',

  overrides: [
    {
      files: ['__tests__/**/*'],
      env: {
        jest: true,
      },
    },
  ],
};
