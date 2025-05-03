export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-case': [2, 'always', 'sentence-case'],
    'header-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'sentence-case'],
    'scope-case': [2, 'always', 'kebab-case'],
    'subject-case': [2, 'always', ['sentence-case']],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'Feature',
        'Fix',
        'Hotfix',
        'Refactor',
        'Docs',
        'Test',
        'Chore'
      ],
    ],
  },
}
