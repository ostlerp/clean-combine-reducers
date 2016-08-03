if (!Object.keys) Object.keys = function(o) {
  if (o !== Object(o))
    throw new TypeError('Object.keys called on a non-object');
  var k=[],p;
  for (p in o) if (Object.prototype.hasOwnProperty.call(o,p)) k.push(p);
  return k;
}

if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}


export default function(reducers){

  if (reducers === null || typeof reducers !== 'object') {
    return {};
  }

  var keys = Object.keys(reducers);

  return function(state, action){
    state = state === undefined ? null : state;
    var nextState = {};

    for(var i = 0; i < keys.length; i++){
      var key = keys[i];
      var s = state && state.hasOwnProperty(key) ? state[key] : undefined;
      var val = reducers[key](s, action);

      if(!!val || Array.isArray(val)) {
        nextState[key] = val;
      }
    }

    return nextState;
  };
}
