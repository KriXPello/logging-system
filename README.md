# logging-system

## index.js
```javascript
import { startLogging } from './logger.js'

startLogging()
```
## Info
Есть две функции: **log** и **error**

Разница лишь в том, что они записывают в файл лога (см. ниже)

## log
```javascript
import { log } from './logger.js'

log('something happened')
```
В лог добавляется следующая запись:
```
LOG  30.01.2021 18:57:13  something happened
```

## error
```javascript
import { error } from './logger.js'

error('Error! We are all gonna die')
```
В лог добавляется следующая запись:
```
ERROR  30.01.2021 18:57:13  Error! We are all gonna die
```

## Важно!
#### **Можно передавать параметры как в console.log**, то есть:

```javascript
  log('something', 'happened') 
  // То же самое, что и:
  log('something' + ' ' + 'happened')

  // Можно передавать сколько угодно параметров:
  log('its', 'a', 'log')
  // то же самое, что и:
  log('its' + ' ' + 'a' + ' ' + 'log')

  // Так же работает и для error
```
