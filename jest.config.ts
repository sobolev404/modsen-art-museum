import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@UI/(.*)$": "<rootDir>/src/components/UI/$1",
    "^@assets/(.*)$": "<rootDir>/src/assets/$1",
    "^@pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@api/(.*)$": "<rootDir>/src/API/$1",
    "^@hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@context/(.*)$": "<rootDir>/src/context/$1",
    "^@styles/(.*)$": "<rootDir>/src/styles/$1",
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.tsx"],
  
};

export default config;
