import { createWriteStream, WriteStream } from 'fs'

const getTime = () => {
  const date = new Date()
  const dmy = date.toLocaleDateString()
  const hms = date.toLocaleTimeString()

  return dmy + ' ' + hms
}

let stream = null

export const startLogging = () => {
  const validTime = getTime()
    .replaceAll('.', '-')
    .replaceAll(':', '-')
    .replace(' ', '_')
    
  const logName = `./${validTime} log.txt`
  
  stream = createWriteStream(logName)

  stream.on('open', () => console.log('Logging started'))
  stream.on('error', (e) => console.log('Logging error:', e.message))
}

export const log = (...info) => {
  if (stream)
    stream.write(`LOG  ${getTime()}  ${info.join(' ')}\n`)
}

export const error = (...info) => {
  if (stream)
    stream.write(`ERROR  ${getTime()}  ${info.join(' ')}\n`)
}
