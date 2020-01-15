## storage-browser-client

use `sessionStorage` or `localStorage`
simplified api, no longer need to use `JSON.parse` `JSON.stringify`

## install

```shell

npm install storage-browser-client --save

```

## api

- set(key)
- get(key, value)
- remove(key)
- clearAll()


## example

```javascript

// import pkg
// const Storage = require('storage-browser-client')
import Storage from 'storage-browser-client'

// sessionStorage default
const sStorage = new Storage(/* 'sessionStorage' */)

// localStorage
const lStorage = new Storage('localStorage')

sStorage.set('key1', { hello: 'world' })

sStorage.set('key2', { hello: 'world2' })

sStorage.get('key1') // { hello: 'world' }

sStorage.remove('key1')

sStorage.clearAll()


// example use in Vue project
Vue.use({
  install: Vue => {
    Vue.prototype.$storage = new Storage('localStorage');
  }
})

// components
this.$storage.set('key', { hello: 'world' })
this.$storage.get('key')


```
