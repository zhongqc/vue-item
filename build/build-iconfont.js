const fs = require('fs')
const path = require('path')
const SVGIcons2SVGFontStream = require('svgicons2svgfont')
const svg2ttf = require('svg2ttf')
const fontName = require('../package.json').name

const svgIconsPath = path.resolve(__dirname, '../src/theme/icons')
const svgFontOutPath = path.join(__dirname, '../src/theme/icon.svg')
const iconCssOutPath = path.join(__dirname, '../src/theme/icon.scss')

const fontStream = new SVGIcons2SVGFontStream({
  fontName
})

let fontCss = []

fontStream.pipe(fs.createWriteStream(svgFontOutPath))
  .on('finish', function () {
    console.log('Font successfully created!')
    generateIconCssFile()
  })
  .on('error', function (err) {
    console.log('error: ', err)
  });

(function writeIcons2Font () {
  let iconList = fs.readdirSync(svgIconsPath)
  let whiteList = /(.DS_Store)$/
  iconList = iconList.filter(file => !whiteList.test(file))
  for (let i = 0; i < iconList.length; i++) {
    let icon = iconList[i]
    let iconName = icon.substr(0, icon.length - 4)
    let iconPath = path.join(svgIconsPath, icon)
    const glyph = fs.createReadStream(iconPath)
    glyph.metadata = {
      unicode: [String.fromCharCode(57344 + i)], // E000-F8FF => 57344-63743
      name: iconName
    }
    fontCss.push(`.${iconName}::before {
  content: "\\${(57344 + i).toString(16)}";
}`)
    fontStream.write(glyph)
  }
  fontStream.end()
})()

function getTTFBuffer () {
  var ttf = svg2ttf(fs.readFileSync(svgFontOutPath, 'utf8'), {})
  return Buffer.from(ttf.buffer)
}

function generateIconCssFile () {
  let iconCss = `@font-face {
  font-family: "${fontName}";
  src: url(data:application/x-font-ttf;base64,${getTTFBuffer().toString('base64')}) format('truetype');
}

.item-icon {
  font-family:"${fontName}" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

${fontCss.join('\n\n')}
`
  fs.writeFileSync(iconCssOutPath, iconCss)
}
