# logging-system

## index.js
```javascript
import { startLogging } from './logger.js'

startLogging()
```
## any-other-file.js
```javascript
import { error, log } from './logger.js'

log('something happened')
// You can use it like console.log:
log('something', 'happened') // similar to log('something happened')
```
