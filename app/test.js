const fowardSlashRegex = /\//gm
const fowardSlashReplace = `\\/`
const slotRegex = /:(?:\w+)/gm
const slots = []
let m


while ((m = slotRegex.exec(path)) !== null) {
    if (m.index === slotRegex.lastIndex)
      slotRegex.lastIndex++;
    m.forEach( (match) => slots.push(match.split(':')[1]) )
}

slots.forEach( slot => path = path.replace(`:${slot}`, '(\\w+)') )

path = path.replace(fowardSlashRegex, fowardSlashReplace);

console.log('path',path)
console.log('arr',slots)


