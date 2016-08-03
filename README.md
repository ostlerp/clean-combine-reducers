Clean Combine Reducers
=========================

The goal of this function is to combine reducers in a way that doesn't pollute the store with null objects. The usage is identical to using the combineReducers in the [Redux](https://github.com/reactjs/redux) library.


## Installation


```
npm install --save clean-combine-reducers
```

## How Does It Work?

Simply combine reducers the same way you would normally!

```js
import CombineReducers from 'clean-combine-reducers'

const todoApp = CombineReducers({
  visibilityFilter,
  todos
})

export default todoApp
```

## License

MIT
