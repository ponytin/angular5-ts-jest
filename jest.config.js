module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setupJest.ts"],
  verbose: true,
  preset: "jest-preset-angular",
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/src/tsconfig.spec.json",
      babelConfig: {
        "plugins": [
          "relay"
        ],
        "presets": [
          [
            "@babel/preset-env",
            {
              "debug": false,
              "targets": {
                "esmodules": true
              },
              "modules": "false"
            }
          ]
        ]
      }
    },
    "__TRANSFORM_HTML__": true
  }
};
