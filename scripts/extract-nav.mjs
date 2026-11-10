import fs from 'node:fs'
const html = fs.readFileSync('site/index.html', 'utf8')
const i = html.indexOf('x-data="mainNav"')
console.log('idx', i)
fs.writeFileSync('site/nav-snippet.html', html.slice(i, i + 12000))
console.log('wrote site/nav-snippet.html')
