const color = require('../lib/util/color');
const msgPath = process.env.HUSKY_GIT_PARAMS
const msg = require('fs').readFileSync(msgPath, 'utf-8').trim()

const commitRE = /^(v\d+\.\d+\.\d+(-(alpha|beta|rc.\d+))?$)|((revert: )?(feat|fix|docs|style|refactor|perf|test|workflow|ci|chore|types|build)(\(.+\))?: .{1,50})/

if (!commitRE.test(msg)) {
  console.log()
  console.error(
    `  ${color(' ERROR ').bgRed} ${color(`invalid commit message format.`).red}\n\n` +
    color(`  Proper commit message format is required for automated changelog generation. Examples:\n\n`).red +
    `    ${color(`feat(compiler): add 'comments' option`).green}\n` +
    `    ${color(`fix(v-model): handle events on blur (close #28)`).green}\n\n` +
    color(`  See .github/COMMIT_CONVENTION.md for more details.\n`).red +
    color(`  You can also use ${color(`npm run commit`).cyan} to interactively generate a commit message.\n`).red
  )
  process.exit(1)
}
