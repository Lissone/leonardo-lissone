import lissoneNextConfig from '@lissone/eslint-config/next'

export default [
  {
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'coverage/**',
    ],
  },
  ...lissoneNextConfig,
  {
    settings: {
      // import reference bug with react-scroll => without "main" property on package.json
      'import/resolver': {
        alias: {
          map: [
            ['react-scroll', './node_modules/react-scroll'],
          ],
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
      },
    },
  },
]
