import kleur from 'kleur';
import path from 'path';
import {execSync} from 'child_process';

const main = async () => {
  // eslint-disable-next-line no-console
  process.stdout.write(kleur.bold('Starting build for live-code-platform-server..\t'));
  execSync('tsc', {
    stdio: 'inherit',
    cwd: path.join(__dirname, '..'),
  });
  // eslint-disable-next-line no-console
  console.log(kleur.bold(kleur.green('Done!')));
};

try {
  main();
} catch (err) {
  // eslint-disable-next-line no-console
  console.error(kleur.bgRed(kleur.bold('Build live-code-platform-server was failed!')), err);
  process.exit(1);
}
