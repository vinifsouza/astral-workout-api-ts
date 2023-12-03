import { pathsToModuleNameMapper, JestConfigWithTsJest  } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.ts'],
  coveragePathIgnorePatterns: ['node_modules', 'tests/helpers', 'src/index'],
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'html-spa'],
  testMatch: ['**/tests/**/*.spec.ts'],
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  moduleDirectories: ["node_modules", "<rootDir>"],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>" }),
  transform: {
    '^.+\\.ts$': ['ts-jest', {
        tsconfig: {
          importHelpers: true,
        },
      },
    ],
  },
};

export default jestConfig;
