const fs = require('fs')
const flatted = require('flatted')
const { finished } = require('stream')

const save = (filename, objects) => {
  fs.writeFileSync(`./${filename}.json`, flatted.stringify(objects, null, 2))
}

const load = (filename) => {
  const file = fs.readFileSync(`./${filename}.json`, 'utf-8')
  return flatted.parse(file)
}

const insert = (filename, object) => {
  const objects = load(filename)
  save(filename, objects.concat(object)) // = add object to the end of the object, return new array and save it
}

const remove = (filename, index) => {
  const objects = load(filename)

  objects.splice(index, 1)
  save(filename, objects)
}

module.exports = { save, load, insert, remove }