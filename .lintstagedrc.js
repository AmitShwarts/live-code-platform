module.exports = {
  'yarn.lock': () => ['yarn dedupe --check'],
  '*.{js,ts,tsx}': ['eslint --fix --max-warnings 0', 'git add'],
  'package.json': ['yarn syncpack'],
};
