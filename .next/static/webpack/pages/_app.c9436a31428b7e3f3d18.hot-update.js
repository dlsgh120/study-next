webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _applyDecoratedDescriptor; });
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }

  return desc;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _initializerDefineProperty; });
function _initializerDefineProperty(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

/***/ }),

/***/ "./node_modules/mobx/dist/mobx.esm.js":
/*!********************************************!*\
  !*** ./node_modules/mobx/dist/mobx.esm.js ***!
  \********************************************/
/*! exports provided: $mobx, FlowCancellationError, ObservableMap, ObservableSet, Reaction, _allowStateChanges, _allowStateChangesInsideComputed, _allowStateReadsEnd, _allowStateReadsStart, _autoAction, _endAction, _getAdministration, _getGlobalState, _interceptReads, _isComputingDerivation, _resetGlobalState, _startAction, action, autorun, comparer, computed, configure, createAtom, entries, extendObservable, flow, flowResult, get, getAtom, getDebugName, getDependencyTree, getObserverTree, has, intercept, isAction, isBoxedObservable, isComputed, isComputedProp, isFlowCancellationError, isObservable, isObservableArray, isObservableMap, isObservableObject, isObservableProp, isObservableSet, keys, makeAutoObservable, makeObservable, observable, observe, onBecomeObserved, onBecomeUnobserved, onReactionError, reaction, remove, runInAction, set, spy, toJS, trace, transaction, untracked, values, when */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$mobx", function() { return $mobx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowCancellationError", function() { return FlowCancellationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableMap", function() { return ObservableMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableSet", function() { return ObservableSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reaction", function() { return Reaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateChanges", function() { return allowStateChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateChangesInsideComputed", function() { return runInAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateReadsEnd", function() { return allowStateReadsEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateReadsStart", function() { return allowStateReadsStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_autoAction", function() { return autoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_endAction", function() { return _endAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getAdministration", function() { return getAdministration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getGlobalState", function() { return getGlobalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_interceptReads", function() { return interceptReads; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isComputingDerivation", function() { return isComputingDerivation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_resetGlobalState", function() { return resetGlobalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_startAction", function() { return _startAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action", function() { return action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autorun", function() { return autorun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comparer", function() { return comparer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return computed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAtom", function() { return createAtom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entries", function() { return entries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendObservable", function() { return extendObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flow", function() { return flow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flowResult", function() { return flowResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAtom", function() { return getAtom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDebugName", function() { return getDebugName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDependencyTree", function() { return getDependencyTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObserverTree", function() { return getObserverTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intercept", function() { return intercept; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAction", function() { return isAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoxedObservable", function() { return isObservableValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComputed", function() { return isComputed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComputedProp", function() { return isComputedProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFlowCancellationError", function() { return isFlowCancellationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return isObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableArray", function() { return isObservableArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableMap", function() { return isObservableMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableObject", function() { return isObservableObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableProp", function() { return isObservableProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableSet", function() { return isObservableSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeAutoObservable", function() { return makeAutoObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeObservable", function() { return makeObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBecomeObserved", function() { return onBecomeObserved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBecomeUnobserved", function() { return onBecomeUnobserved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onReactionError", function() { return onReactionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reaction", function() { return reaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runInAction", function() { return runInAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spy", function() { return spy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJS", function() { return toJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trace", function() { return trace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transaction", function() { return transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untracked", function() { return untracked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "when", function() { return when; });
var niceErrors = {
  0: "Invalid value for configuration 'enforceActions', expected 'never', 'always' or 'observed'",
  1: function _(prop) {
    return "Cannot decorate undefined property: '" + prop.toString() + "'";
  },
  2: function _(prop) {
    return "invalid decorator for '" + prop.toString() + "'";
  },
  3: function _(prop) {
    return "Cannot decorate '" + prop.toString() + "': action can only be used on properties with a function value.";
  },
  4: function _(prop) {
    return "Cannot decorate '" + prop.toString() + "': computed can only be used on getter properties.";
  },
  5: "'keys()' can only be used on observable objects, arrays, sets and maps",
  6: "'values()' can only be used on observable objects, arrays, sets and maps",
  7: "'entries()' can only be used on observable objects, arrays and maps",
  8: "'set()' can only be used on observable objects, arrays and maps",
  9: "'remove()' can only be used on observable objects, arrays and maps",
  10: "'has()' can only be used on observable objects, arrays and maps",
  11: "'get()' can only be used on observable objects, arrays and maps",
  12: "Invalid annotation",
  13: "Dynamic observable objects cannot be frozen",
  14: "Intercept handlers should return nothing or a change object",
  15: "Observable arrays cannot be frozen",
  16: "Modification exception: the internal structure of an observable array was changed.",
  17: function _(index, length) {
    return "[mobx.array] Index out of bounds, " + index + " is larger than " + length;
  },
  18: "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js",
  19: function _(other) {
    return "Cannot initialize from classes that inherit from Map: " + other.constructor.name;
  },
  20: function _(other) {
    return "Cannot initialize map from " + other;
  },
  21: function _(dataStructure) {
    return "Cannot convert to map from '" + dataStructure + "'";
  },
  22: "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js",
  23: "It is not possible to get index atoms from arrays",
  24: function _(thing) {
    return "Cannot obtain administration from " + thing;
  },
  25: function _(property, name) {
    return "the entry '" + property + "' does not exist in the observable map '" + name + "'";
  },
  26: "please specify a property",
  27: function _(property, name) {
    return "no observable property '" + property.toString() + "' found on the observable object '" + name + "'";
  },
  28: function _(thing) {
    return "Cannot obtain atom from " + thing;
  },
  29: "Expecting some object",
  30: "invalid action stack. did you forget to finish an action?",
  31: "missing option for computed: get",
  32: function _(name, derivation) {
    return "Cycle detected in computation " + name + ": " + derivation;
  },
  33: function _(name) {
    return "The setter of computed value '" + name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?";
  },
  34: function _(name) {
    return "[ComputedValue '" + name + "'] It is not possible to assign a new value to a computed value.";
  },
  35: "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`",
  36: "isolateGlobalState should be called before MobX is running any reactions",
  37: function _(method) {
    return "[mobx] `observableArray." + method + "()` mutates the array in-place, which is not allowed inside a derivation. Use `array.slice()." + method + "()` instead";
  }
};
var errors =  true ? niceErrors : undefined;
function die(error) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (true) {
    var e = typeof error === "string" ? error : errors[error];
    if (typeof e === "function") e = e.apply(null, args);
    throw new Error("[MobX] " + e);
  }

  throw new Error(typeof error === "number" ? "[MobX] minified error nr: " + error + (args.length ? " " + args.join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/mobx6/src/errors.ts" : "[MobX] " + error);
}

var mockGlobal = {};
function getGlobal() {
  if (typeof window !== "undefined") {
    return window;
  }

  if (typeof global !== "undefined") {
    return global;
  }

  if (typeof self !== "undefined") {
    return self;
  }

  return mockGlobal;
}

var assign = Object.assign;
var getDescriptor = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var objectPrototype = Object.prototype;
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
var hasProxy = typeof Proxy !== "undefined";
var plainObjectString = /*#__PURE__*/Object.toString();
function assertProxies() {
  if (!hasProxy) {
    die( true ? "`Proxy` objects are not available in the current environment. Please configure MobX to enable a fallback implementation.`" : undefined);
  }
}
function warnAboutProxyRequirement(msg) {
  if ( true && globalState.verifyProxies) {
    die("MobX is currently configured to be able to run in ES5 mode, but in ES5 MobX won't be able to " + msg);
  }
}
function getNextId() {
  return ++globalState.mobxGuid;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */

function once(func) {
  var invoked = false;
  return function () {
    if (invoked) return;
    invoked = true;
    return func.apply(this, arguments);
  };
}
var noop = function noop() {};
function isFunction(fn) {
  return typeof fn === "function";
}
function isStringish(value) {
  var t = typeof value;

  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return true;
  }

  return false;
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
function isPlainObject(value) {
  var _proto$constructor;

  if (!isObject(value)) return false;
  var proto = Object.getPrototypeOf(value);
  if (proto == null) return true;
  return ((_proto$constructor = proto.constructor) == null ? void 0 : _proto$constructor.toString()) === plainObjectString;
} // https://stackoverflow.com/a/37865170

function isGenerator(obj) {
  var constructor = obj == null ? void 0 : obj.constructor;
  if (!constructor) return false;
  if ("GeneratorFunction" === constructor.name || "GeneratorFunction" === constructor.displayName) return true;
  return false;
}
function addHiddenProp(object, propName, value) {
  defineProperty(object, propName, {
    enumerable: false,
    writable: true,
    configurable: true,
    value: value
  });
}
function addHiddenFinalProp(object, propName, value) {
  defineProperty(object, propName, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: value
  });
}
function assertPropertyConfigurable(object, prop) {
  if (true) {
    var descriptor = getDescriptor(object, prop);
    if ((descriptor == null ? void 0 : descriptor.configurable) === false || (descriptor == null ? void 0 : descriptor.writable) === false) die("Cannot make property '" + stringifyKey(prop) + "' observable, it is not configurable and writable in the target object");
  }
}
function createInstanceofPredicate(name, theClass) {
  var propName = "isMobX" + name;
  theClass.prototype[propName] = true;
  return function (x) {
    return isObject(x) && x[propName] === true;
  };
}
function isES6Map(thing) {
  return thing instanceof Map;
}
function isES6Set(thing) {
  return thing instanceof Set;
}
var hasGetOwnPropertySymbols = typeof Object.getOwnPropertySymbols !== "undefined";
/**
 * Returns the following: own keys, prototype keys & own symbol keys, if they are enumerable.
 */

function getPlainObjectKeys(object) {
  var keys = Object.keys(object); // Not supported in IE, so there are not going to be symbol props anyway...

  if (!hasGetOwnPropertySymbols) return keys;
  var symbols = Object.getOwnPropertySymbols(object);
  if (!symbols.length) return keys;
  return [].concat(keys, symbols.filter(function (s) {
    return objectPrototype.propertyIsEnumerable.call(object, s);
  }));
} // From Immer utils
// Returns all own keys, including non-enumerable and symbolic

var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : hasGetOwnPropertySymbols ? function (obj) {
  return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
} :
/* istanbul ignore next */
Object.getOwnPropertyNames;
function stringifyKey(key) {
  if (typeof key === "string") return key;
  if (typeof key === "symbol") return key.toString();
  return new String(key).toString();
}
function toPrimitive(value) {
  return value === null ? null : typeof value === "object" ? "" + value : value;
}
function hasProp(target, prop) {
  return objectPrototype.hasOwnProperty.call(target, prop);
} // From Immer utils

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(target) {
  // Polyfill needed for Hermes and IE, see https://github.com/facebook/hermes/issues/274
  var res = {}; // Note: without polyfill for ownKeys, symbols won't be picked up

  ownKeys(target).forEach(function (key) {
    res[key] = getDescriptor(target, key);
  });
  return res;
};

var mobxDecoratorsSymbol = /*#__PURE__*/Symbol("mobx-decorators");
var mobxAppliedDecoratorsSymbol = /*#__PURE__*/Symbol("mobx-applied-decorators");
function createDecorator(type) {
  return assign(function (target, property) {
    if (property === undefined) {
      // @decorator(arg) member
      createDecoratorAndAnnotation(type, target);
    } else {
      // @decorator member
      storeDecorator(target, property, type);
    }
  }, {
    annotationType_: type
  });
}
function createDecoratorAndAnnotation(type, arg_) {
  return assign(function (target, property) {
    storeDecorator(target, property, type, arg_);
  }, {
    annotationType_: type,
    arg_: arg_
  });
}
function storeDecorator(target, property, type, arg_) {
  var desc = getDescriptor(target, mobxDecoratorsSymbol);
  var map;

  if (desc) {
    map = desc.value;
  } else {
    map = {};
    addHiddenProp(target, mobxDecoratorsSymbol, map);
  }

  map[property] = {
    annotationType_: type,
    arg_: arg_
  };
}
function applyDecorators(target) {
  if (target[mobxAppliedDecoratorsSymbol]) return true;
  var current = target; // optimization: this could be cached per prototype!
  // (then we can remove the weird short circuiting as well..)

  var annotations = [];

  while (current && current !== objectPrototype) {
    var desc = getDescriptor(current, mobxDecoratorsSymbol);

    if (desc) {
      if (!annotations.length) {
        for (var key in desc.value) {
          // second conditions is to recognize actions
          if (!hasProp(target, key) && !hasProp(current, key)) {
            // not all fields are defined yet, so we are in the makeObservable call of some super class,
            // short circuit, here, we will do this again in a later makeObservable call
            return true;
          }
        }
      }

      annotations.unshift(desc.value);
    }

    current = Object.getPrototypeOf(current);
  }

  annotations.forEach(function (a) {
    makeObservable(target, a);
  });
  addHiddenProp(target, mobxAppliedDecoratorsSymbol, true);
  return annotations.length > 0;
}

var $mobx = /*#__PURE__*/Symbol("mobx administration");
var Atom = /*#__PURE__*/function () {
  // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed

  /**
   * Create a new atom. For debugging purposes it is recommended to give it a name.
   * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
   */
  function Atom(name_) {
    if (name_ === void 0) {
      name_ = "Atom@" + getNextId();
    }

    this.name_ = void 0;
    this.isPendingUnobservation_ = false;
    this.isBeingObserved_ = false;
    this.observers_ = new Set();
    this.diffValue_ = 0;
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = IDerivationState_.NOT_TRACKING_;
    this.onBOL = void 0;
    this.onBUOL = void 0;
    this.name_ = name_;
  } // onBecomeObservedListeners


  var _proto = Atom.prototype;

  _proto.onBO = function onBO() {
    if (this.onBOL) {
      this.onBOL.forEach(function (listener) {
        return listener();
      });
    }
  };

  _proto.onBUO = function onBUO() {
    if (this.onBUOL) {
      this.onBUOL.forEach(function (listener) {
        return listener();
      });
    }
  }
  /**
   * Invoke this method to notify mobx that your atom has been used somehow.
   * Returns true if there is currently a reactive context.
   */
  ;

  _proto.reportObserved = function reportObserved$1() {
    return reportObserved(this);
  }
  /**
   * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
   */
  ;

  _proto.reportChanged = function reportChanged() {
    startBatch();
    propagateChanged(this);
    endBatch();
  };

  _proto.toString = function toString() {
    return this.name_;
  };

  return Atom;
}();
var isAtom = /*#__PURE__*/createInstanceofPredicate("Atom", Atom);
function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
  if (onBecomeObservedHandler === void 0) {
    onBecomeObservedHandler = noop;
  }

  if (onBecomeUnobservedHandler === void 0) {
    onBecomeUnobservedHandler = noop;
  }

  var atom = new Atom(name); // default `noop` listener will not initialize the hook Set

  if (onBecomeObservedHandler !== noop) {
    onBecomeObserved(atom, onBecomeObservedHandler);
  }

  if (onBecomeUnobservedHandler !== noop) {
    onBecomeUnobserved(atom, onBecomeUnobservedHandler);
  }

  return atom;
}

function identityComparer(a, b) {
  return a === b;
}

function structuralComparer(a, b) {
  return deepEqual(a, b);
}

function shallowComparer(a, b) {
  return deepEqual(a, b, 1);
}

function defaultComparer(a, b) {
  return Object.is(a, b);
}

var comparer = {
  identity: identityComparer,
  structural: structuralComparer,
  "default": defaultComparer,
  shallow: shallowComparer
};

function deepEnhancer(v, _, name) {
  // it is an observable already, done
  if (isObservable(v)) return v; // something that can be converted and mutated?

  if (Array.isArray(v)) return observable.array(v, {
    name: name
  });
  if (isPlainObject(v)) return observable.object(v, undefined, {
    name: name
  });
  if (isES6Map(v)) return observable.map(v, {
    name: name
  });
  if (isES6Set(v)) return observable.set(v, {
    name: name
  });
  return v;
}
function shallowEnhancer(v, _, name) {
  if (v === undefined || v === null) return v;
  if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v)) return v;
  if (Array.isArray(v)) return observable.array(v, {
    name: name,
    deep: false
  });
  if (isPlainObject(v)) return observable.object(v, undefined, {
    name: name,
    deep: false
  });
  if (isES6Map(v)) return observable.map(v, {
    name: name,
    deep: false
  });
  if (isES6Set(v)) return observable.set(v, {
    name: name,
    deep: false
  });
  if (true) die("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function referenceEnhancer(newValue) {
  // never turn into an observable
  return newValue;
}
function refStructEnhancer(v, oldValue) {
  if ( true && isObservable(v)) die("observable.struct should not be used with observable values");
  if (deepEqual(v, oldValue)) return oldValue;
  return v;
}

var _annotationToEnhancer;
var OBSERVABLE = "observable";
var OBSERVABLE_REF = "observable.ref";
var OBSERVABLE_SHALLOW = "observable.shallow";
var OBSERVABLE_STRUCT = "observable.struct"; // Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases

var defaultCreateObservableOptions = {
  deep: true,
  name: undefined,
  defaultDecorator: undefined,
  proxy: true
};
Object.freeze(defaultCreateObservableOptions);
function asCreateObservableOptions(thing) {
  return thing || defaultCreateObservableOptions;
}
function getEnhancerFromOption(options) {
  return options.deep === true ? deepEnhancer : options.deep === false ? referenceEnhancer : getEnhancerFromAnnotation(options.defaultDecorator);
}
var annotationToEnhancer = (_annotationToEnhancer = {}, _annotationToEnhancer[OBSERVABLE] = deepEnhancer, _annotationToEnhancer[OBSERVABLE_REF] = referenceEnhancer, _annotationToEnhancer[OBSERVABLE_SHALLOW] = shallowEnhancer, _annotationToEnhancer[OBSERVABLE_STRUCT] = refStructEnhancer, _annotationToEnhancer);
function getEnhancerFromAnnotation(annotation) {
  var _annotationToEnhancer2;

  return !annotation ? deepEnhancer : (_annotationToEnhancer2 = annotationToEnhancer[annotation.annotationType_]) != null ? _annotationToEnhancer2 : die(12);
}
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */

function createObservable(v, arg2, arg3) {
  // @observable someProp;
  if (isStringish(arg2)) {
    storeDecorator(v, arg2, OBSERVABLE);
    return;
  } // it is an observable already, done


  if (isObservable(v)) return v; // something that can be converted and mutated?

  var res = isPlainObject(v) ? observable.object(v, arg2, arg3) : Array.isArray(v) ? observable.array(v, arg2) : isES6Map(v) ? observable.map(v, arg2) : isES6Set(v) ? observable.set(v, arg2) : v; // this value could be converted to a new observable data structure, return it

  if (res !== v) return res;
  return observable.box(v);
}

createObservable.annotationType_ = OBSERVABLE;
var observableFactories = {
  box: function box(value, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableValue(value, getEnhancerFromOption(o), o.name, true, o.equals);
  },
  array: function array(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return (globalState.useProxies === false || o.proxy === false ? createLegacyArray : createObservableArray)(initialValues, getEnhancerFromOption(o), o.name);
  },
  map: function map(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableMap(initialValues, getEnhancerFromOption(o), o.name);
  },
  set: function set(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableSet(initialValues, getEnhancerFromOption(o), o.name);
  },
  object: function object(props, decorators, options) {
    var o = asCreateObservableOptions(options);
    var base = {};
    asObservableObject(base, options == null ? void 0 : options.name, getEnhancerFromOption(o));
    return extendObservable(globalState.useProxies === false || o.proxy === false ? base : createDynamicObservableObject(base), props, decorators, options);
  },
  ref: /*#__PURE__*/createDecorator(OBSERVABLE_REF),
  shallow: /*#__PURE__*/createDecorator(OBSERVABLE_SHALLOW),
  deep: /*#__PURE__*/createDecorator(OBSERVABLE),
  struct: /*#__PURE__*/createDecorator(OBSERVABLE_STRUCT)
}; // eslint-disable-next-line

var observable = /*#__PURE__*/assign(createObservable, observableFactories);

var COMPUTED = "computed";
var COMPUTED_STRUCT = "computed.struct";
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */

var computed = function computed(arg1, arg2, arg3) {
  if (isStringish(arg2)) {
    // @computed
    return storeDecorator(arg1, arg2, COMPUTED);
  }

  if (isPlainObject(arg1)) {
    // @computed({ options })
    return createDecoratorAndAnnotation(COMPUTED, arg1);
  } // computed(expr, options?)


  if (true) {
    if (!isFunction(arg1)) die("First argument to `computed` should be an expression.");
    if (isFunction(arg2)) die("A setter as second argument is no longer supported, use `{set: fn }` option instead");
  }

  var opts = isPlainObject(arg2) ? arg2 : {};
  opts.get = arg1;
  opts.name = opts.name || arg1.name || "";
  /* for generated name */

  return new ComputedValue(opts);
};
computed.annotationType_ = COMPUTED;
computed.struct = /*#__PURE__*/assign(function (target, property) {
  storeDecorator(target, property, COMPUTED_STRUCT);
}, {
  annotationType_: COMPUTED_STRUCT
});

var _getDescriptor$config, _getDescriptor;
// mobx versions

var currentActionId = 0;
var nextActionId = 1;
var isFunctionNameConfigurable = (_getDescriptor$config = (_getDescriptor = /*#__PURE__*/getDescriptor(function () {}, "name")) == null ? void 0 : _getDescriptor.configurable) != null ? _getDescriptor$config : false; // we can safely recycle this object

var tmpNameDescriptor = {
  value: "action",
  configurable: true,
  writable: false,
  enumerable: false
};
function createAction(actionName, fn, autoAction, ref) {
  if (autoAction === void 0) {
    autoAction = false;
  }

  if (true) {
    if (!isFunction(fn)) die("`action` can only be invoked on functions");
    if (typeof actionName !== "string" || !actionName) die("actions should have valid names, got: '" + actionName + "'");
  }

  function res() {
    return executeAction(actionName, autoAction, fn, ref || this, arguments);
  }

  res.isMobxAction = true;

  if (isFunctionNameConfigurable) {
    tmpNameDescriptor.value = actionName;
    Object.defineProperty(res, "name", tmpNameDescriptor);
  }

  return res;
}
function executeAction(actionName, canRunAsDerivation, fn, scope, args) {
  var runInfo = _startAction(actionName, canRunAsDerivation, scope, args);

  try {
    return fn.apply(scope, args);
  } catch (err) {
    runInfo.error_ = err;
    throw err;
  } finally {
    _endAction(runInfo);
  }
}
function _startAction(actionName, canRunAsDerivation, // true for autoAction
scope, args) {
  var notifySpy_ =  true && isSpyEnabled() && !!actionName;
  var startTime_ = 0;

  if ( true && notifySpy_) {
    startTime_ = Date.now();
    var flattenedArgs = args ? Array.from(args) : EMPTY_ARRAY;
    spyReportStart({
      type: ACTION,
      name: actionName,
      object: scope,
      arguments: flattenedArgs
    });
  }

  var prevDerivation_ = globalState.trackingDerivation;
  var runAsAction = !canRunAsDerivation || !prevDerivation_;
  startBatch();
  var prevAllowStateChanges_ = globalState.allowStateChanges; // by default preserve previous allow

  if (runAsAction) {
    untrackedStart();
    prevAllowStateChanges_ = allowStateChangesStart(true);
  }

  var prevAllowStateReads_ = allowStateReadsStart(true);
  var runInfo = {
    runAsAction_: runAsAction,
    prevDerivation_: prevDerivation_,
    prevAllowStateChanges_: prevAllowStateChanges_,
    prevAllowStateReads_: prevAllowStateReads_,
    notifySpy_: notifySpy_,
    startTime_: startTime_,
    actionId_: nextActionId++,
    parentActionId_: currentActionId
  };
  currentActionId = runInfo.actionId_;
  return runInfo;
}
function _endAction(runInfo) {
  if (currentActionId !== runInfo.actionId_) {
    die(30);
  }

  currentActionId = runInfo.parentActionId_;

  if (runInfo.error_ !== undefined) {
    globalState.suppressReactionErrors = true;
  }

  allowStateChangesEnd(runInfo.prevAllowStateChanges_);
  allowStateReadsEnd(runInfo.prevAllowStateReads_);
  endBatch();
  if (runInfo.runAsAction_) untrackedEnd(runInfo.prevDerivation_);

  if ( true && runInfo.notifySpy_) {
    spyReportEnd({
      time: Date.now() - runInfo.startTime_
    });
  }

  globalState.suppressReactionErrors = false;
}
function allowStateChanges(allowStateChanges, func) {
  var prev = allowStateChangesStart(allowStateChanges);

  try {
    return func();
  } finally {
    allowStateChangesEnd(prev);
  }
}
function allowStateChangesStart(allowStateChanges) {
  var prev = globalState.allowStateChanges;
  globalState.allowStateChanges = allowStateChanges;
  return prev;
}
function allowStateChangesEnd(prev) {
  globalState.allowStateChanges = prev;
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

var _Symbol$toPrimitive;
var CREATE = "create";
_Symbol$toPrimitive = Symbol.toPrimitive;
var ObservableValue = /*#__PURE__*/function (_Atom) {
  _inheritsLoose(ObservableValue, _Atom);

  function ObservableValue(value, enhancer, name_, notifySpy, equals) {
    var _this;

    if (name_ === void 0) {
      name_ = "ObservableValue@" + getNextId();
    }

    if (notifySpy === void 0) {
      notifySpy = true;
    }

    if (equals === void 0) {
      equals = comparer["default"];
    }

    _this = _Atom.call(this, name_) || this;
    _this.enhancer = void 0;
    _this.name_ = void 0;
    _this.equals = void 0;
    _this.hasUnreportedChange_ = false;
    _this.interceptors_ = void 0;
    _this.changeListeners_ = void 0;
    _this.value_ = void 0;
    _this.dehancer = void 0;
    _this.enhancer = enhancer;
    _this.name_ = name_;
    _this.equals = equals;
    _this.value_ = enhancer(value, undefined, name_);

    if ( true && notifySpy && isSpyEnabled()) {
      // only notify spy if this is a stand-alone observable
      spyReport({
        type: CREATE,
        object: _assertThisInitialized(_this),
        observableKind: "value",
        debugObjectName: _this.name_,
        newValue: "" + _this.value_
      });
    }

    return _this;
  }

  var _proto = ObservableValue.prototype;

  _proto.dehanceValue = function dehanceValue(value) {
    if (this.dehancer !== undefined) return this.dehancer(value);
    return value;
  };

  _proto.set = function set(newValue) {
    var oldValue = this.value_;
    newValue = this.prepareNewValue_(newValue);

    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();

      if ( true && notifySpy) {
        spyReportStart({
          type: UPDATE,
          object: this,
          observableKind: "value",
          debugObjectName: this.name_,
          newValue: newValue,
          oldValue: oldValue
        });
      }

      this.setNewValue_(newValue);
      if ( true && notifySpy) spyReportEnd();
    }
  };

  _proto.prepareNewValue_ = function prepareNewValue_(newValue) {
    checkIfStateModificationsAreAllowed(this);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this,
        type: UPDATE,
        newValue: newValue
      });
      if (!change) return globalState.UNCHANGED;
      newValue = change.newValue;
    } // apply modifier


    newValue = this.enhancer(newValue, this.value_, this.name_);
    return this.equals(this.value_, newValue) ? globalState.UNCHANGED : newValue;
  };

  _proto.setNewValue_ = function setNewValue_(newValue) {
    var oldValue = this.value_;
    this.value_ = newValue;
    this.reportChanged();

    if (hasListeners(this)) {
      notifyListeners(this, {
        type: UPDATE,
        object: this,
        newValue: newValue,
        oldValue: oldValue
      });
    }
  };

  _proto.get = function get() {
    this.reportObserved();
    return this.dehanceValue(this.value_);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately) listener({
      observableKind: "value",
      debugObjectName: this.name_,
      object: this,
      type: UPDATE,
      newValue: this.value_,
      oldValue: undefined
    });
    return registerListener(this, listener);
  };

  _proto.raw = function raw() {
    // used by MST ot get undehanced value
    return this.value_;
  };

  _proto.toJSON = function toJSON() {
    return this.get();
  };

  _proto.toString = function toString() {
    return this.name_ + "[" + this.value_ + "]";
  };

  _proto.valueOf = function valueOf() {
    return toPrimitive(this.get());
  };

  _proto[_Symbol$toPrimitive] = function () {
    return this.valueOf();
  };

  return ObservableValue;
}(Atom);
var isObservableValue = /*#__PURE__*/createInstanceofPredicate("ObservableValue", ObservableValue);

var _Symbol$toPrimitive$1;
/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */

_Symbol$toPrimitive$1 = Symbol.toPrimitive;
var ComputedValue = /*#__PURE__*/function () {
  // nodes we are looking at. Our value depends on these nodes
  // during tracking it's an array with new observed observers
  // to check for cycles
  // N.B: unminified as it is used by MST

  /**
   * Create a new computed value based on a function expression.
   *
   * The `name` property is for debug purposes only.
   *
   * The `equals` property specifies the comparer function to use to determine if a newly produced
   * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
   * compares based on identity comparison (===), and `structuralComparer` deeply compares the structure.
   * Structural comparison can be convenient if you always produce a new aggregated object and
   * don't want to notify observers if it is structurally the same.
   * This is useful for working with vectors, mouse coordinates etc.
   */
  function ComputedValue(options) {
    this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
    this.observing_ = [];
    this.newObserving_ = null;
    this.isBeingObserved_ = false;
    this.isPendingUnobservation_ = false;
    this.observers_ = new Set();
    this.diffValue_ = 0;
    this.runId_ = 0;
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    this.unboundDepsCount_ = 0;
    this.mapid_ = "#" + getNextId();
    this.value_ = new CaughtException(null);
    this.name_ = void 0;
    this.triggeredBy_ = void 0;
    this.isComputing_ = false;
    this.isRunningSetter_ = false;
    this.derivation = void 0;
    this.setter_ = void 0;
    this.isTracing_ = TraceMode.NONE;
    this.scope_ = void 0;
    this.equals_ = void 0;
    this.requiresReaction_ = void 0;
    this.keepAlive_ = void 0;
    this.onBOL = void 0;
    this.onBUOL = void 0;
    if (!options.get) die(31);
    this.derivation = options.get;
    this.name_ = options.name || "ComputedValue@" + getNextId();
    if (options.set) this.setter_ = createAction(this.name_ + "-setter", options.set);
    this.equals_ = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer["default"]);
    this.scope_ = options.context;
    this.requiresReaction_ = !!options.requiresReaction;
    this.keepAlive_ = !!options.keepAlive;
  }

  var _proto = ComputedValue.prototype;

  _proto.onBecomeStale_ = function onBecomeStale_() {
    propagateMaybeChanged(this);
  };

  _proto.onBO = function onBO() {
    if (this.onBOL) {
      this.onBOL.forEach(function (listener) {
        return listener();
      });
    }
  };

  _proto.onBUO = function onBUO() {
    if (this.onBUOL) {
      this.onBUOL.forEach(function (listener) {
        return listener();
      });
    }
  }
  /**
   * Returns the current value of this computed value.
   * Will evaluate its computation first if needed.
   */
  ;

  _proto.get = function get() {
    if (this.isComputing_) die(32, this.name_, this.derivation);

    if (globalState.inBatch === 0 && // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_) {
      if (shouldCompute(this)) {
        this.warnAboutUntrackedRead_();
        startBatch(); // See perf test 'computed memoization'

        this.value_ = this.computeValue_(false);
        endBatch();
      }
    } else {
      reportObserved(this);

      if (shouldCompute(this)) {
        var prevTrackingContext = globalState.trackingContext;
        if (this.keepAlive_ && !prevTrackingContext) globalState.trackingContext = this;
        if (this.trackAndCompute()) propagateChangeConfirmed(this);
        globalState.trackingContext = prevTrackingContext;
      }
    }

    var result = this.value_;
    if (isCaughtException(result)) throw result.cause;
    return result;
  };

  _proto.set = function set(value) {
    if (this.setter_) {
      if (this.isRunningSetter_) die(33, this.name_);
      this.isRunningSetter_ = true;

      try {
        this.setter_.call(this.scope_, value);
      } finally {
        this.isRunningSetter_ = false;
      }
    } else die(34, this.name_);
  };

  _proto.trackAndCompute = function trackAndCompute() {
    // N.B: unminified as it is used by MST
    var oldValue = this.value_;
    var wasSuspended =
    /* see #1208 */
    this.dependenciesState_ === IDerivationState_.NOT_TRACKING_;
    var newValue = this.computeValue_(true);

    if ( true && isSpyEnabled()) {
      spyReport({
        observableKind: "computed",
        debugObjectName: this.name_,
        object: this.scope_,
        type: "update",
        oldValue: this.value_,
        newValue: newValue
      });
    }

    var changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals_(oldValue, newValue);

    if (changed) {
      this.value_ = newValue;
    }

    return changed;
  };

  _proto.computeValue_ = function computeValue_(track) {
    this.isComputing_ = true; // don't allow state changes during computation

    var prev = allowStateChangesStart(false);
    var res;

    if (track) {
      res = trackDerivedFunction(this, this.derivation, this.scope_);
    } else {
      if (globalState.disableErrorBoundaries === true) {
        res = this.derivation.call(this.scope_);
      } else {
        try {
          res = this.derivation.call(this.scope_);
        } catch (e) {
          res = new CaughtException(e);
        }
      }
    }

    allowStateChangesEnd(prev);
    this.isComputing_ = false;
    return res;
  };

  _proto.suspend_ = function suspend_() {
    if (!this.keepAlive_) {
      clearObserving(this);
      this.value_ = undefined; // don't hold on to computed value!
    }
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    var _this = this;

    var firstTime = true;
    var prevValue = undefined;
    return autorun(function () {
      // TODO: why is this in a different place than the spyReport() function? in all other observables it's called in the same place
      var newValue = _this.get();

      if (!firstTime || fireImmediately) {
        var prevU = untrackedStart();
        listener({
          observableKind: "computed",
          debugObjectName: _this.name_,
          type: UPDATE,
          object: _this,
          newValue: newValue,
          oldValue: prevValue
        });
        untrackedEnd(prevU);
      }

      firstTime = false;
      prevValue = newValue;
    });
  };

  _proto.warnAboutUntrackedRead_ = function warnAboutUntrackedRead_() {
    if (false) {}

    if (this.requiresReaction_ === true) {
      die("[mobx] Computed value " + this.name_ + " is read outside a reactive context");
    }

    if (this.isTracing_ !== TraceMode.NONE) {
      console.log("[mobx.trace] '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute");
    }

    if (globalState.computedRequiresReaction) {
      console.warn("[mobx] Computed value " + this.name_ + " is being read outside a reactive context. Doing a full recompute");
    }
  };

  _proto.toString = function toString() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  };

  _proto.valueOf = function valueOf() {
    return toPrimitive(this.get());
  };

  _proto[_Symbol$toPrimitive$1] = function () {
    return this.valueOf();
  };

  return ComputedValue;
}();
var isComputedValue = /*#__PURE__*/createInstanceofPredicate("ComputedValue", ComputedValue);

var IDerivationState_;

(function (IDerivationState_) {
  // before being run or (outside batch and not being observed)
  // at this point derivation is not holding any data about dependency tree
  IDerivationState_[IDerivationState_["NOT_TRACKING_"] = -1] = "NOT_TRACKING_"; // no shallow dependency changed since last computation
  // won't recalculate derivation
  // this is what makes mobx fast

  IDerivationState_[IDerivationState_["UP_TO_DATE_"] = 0] = "UP_TO_DATE_"; // some deep dependency changed, but don't know if shallow dependency changed
  // will require to check first if UP_TO_DATE or POSSIBLY_STALE
  // currently only ComputedValue will propagate POSSIBLY_STALE
  //
  // having this state is second big optimization:
  // don't have to recompute on every dependency change, but only when it's needed

  IDerivationState_[IDerivationState_["POSSIBLY_STALE_"] = 1] = "POSSIBLY_STALE_"; // A shallow dependency has changed since last computation and the derivation
  // will need to recompute when it's needed next.

  IDerivationState_[IDerivationState_["STALE_"] = 2] = "STALE_";
})(IDerivationState_ || (IDerivationState_ = {}));

var TraceMode;

(function (TraceMode) {
  TraceMode[TraceMode["NONE"] = 0] = "NONE";
  TraceMode[TraceMode["LOG"] = 1] = "LOG";
  TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));

var CaughtException = function CaughtException(cause) {
  this.cause = void 0;
  this.cause = cause; // Empty
};
function isCaughtException(e) {
  return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */

function shouldCompute(derivation) {
  switch (derivation.dependenciesState_) {
    case IDerivationState_.UP_TO_DATE_:
      return false;

    case IDerivationState_.NOT_TRACKING_:
    case IDerivationState_.STALE_:
      return true;

    case IDerivationState_.POSSIBLY_STALE_:
      {
        // state propagation can occur outside of action/reactive context #2195
        var prevAllowStateReads = allowStateReadsStart(true);
        var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.

        var obs = derivation.observing_,
            l = obs.length;

        for (var i = 0; i < l; i++) {
          var obj = obs[i];

          if (isComputedValue(obj)) {
            if (globalState.disableErrorBoundaries) {
              obj.get();
            } else {
              try {
                obj.get();
              } catch (e) {
                // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                untrackedEnd(prevUntracked);
                allowStateReadsEnd(prevAllowStateReads);
                return true;
              }
            } // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
            // and `derivation` is an observer of `obj`
            // invariantShouldCompute(derivation)


            if (derivation.dependenciesState_ === IDerivationState_.STALE_) {
              untrackedEnd(prevUntracked);
              allowStateReadsEnd(prevAllowStateReads);
              return true;
            }
          }
        }

        changeDependenciesStateTo0(derivation);
        untrackedEnd(prevUntracked);
        allowStateReadsEnd(prevAllowStateReads);
        return false;
      }
  }
}
function isComputingDerivation() {
  return globalState.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed(atom) {
  if (false) {}

  var hasObservers = atom.observers_.size > 0; // Should not be possible to change observed state outside strict mode, except during initialization, see #563

  if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "always")) console.warn("[MobX] " + (globalState.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + atom.name_);
}
function checkIfStateReadsAreAllowed(observable) {
  if ( true && !globalState.allowStateReads && globalState.observableRequiresReaction) {
    console.warn("[mobx] Observable " + observable.name_ + " being read outside a reactive context");
  }
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */

function trackDerivedFunction(derivation, f, context) {
  var prevAllowStateReads = allowStateReadsStart(true); // pre allocate array allocation + room for variation in deps
  // array will be trimmed by bindDependencies

  changeDependenciesStateTo0(derivation);
  derivation.newObserving_ = new Array(derivation.observing_.length + 100);
  derivation.unboundDepsCount_ = 0;
  derivation.runId_ = ++globalState.runId;
  var prevTracking = globalState.trackingDerivation;
  globalState.trackingDerivation = derivation;
  globalState.inBatch++;
  var result;

  if (globalState.disableErrorBoundaries === true) {
    result = f.call(context);
  } else {
    try {
      result = f.call(context);
    } catch (e) {
      result = new CaughtException(e);
    }
  }

  globalState.inBatch--;
  globalState.trackingDerivation = prevTracking;
  bindDependencies(derivation);
  warnAboutDerivationWithoutDependencies(derivation);
  allowStateReadsEnd(prevAllowStateReads);
  return result;
}

function warnAboutDerivationWithoutDependencies(derivation) {
  if (false) {}
  if (derivation.observing_.length !== 0) return;

  if (globalState.reactionRequiresObservable || derivation.requiresObservable_) {
    console.warn("[mobx] Derivation " + derivation.name_ + " is created/updated without reading any observable value");
  }
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */


function bindDependencies(derivation) {
  // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
  var prevObserving = derivation.observing_;
  var observing = derivation.observing_ = derivation.newObserving_;
  var lowestNewObservingDerivationState = IDerivationState_.UP_TO_DATE_; // Go through all new observables and check diffValue: (this list can contain duplicates):
  //   0: first occurrence, change to 1 and keep it
  //   1: extra occurrence, drop it

  var i0 = 0,
      l = derivation.unboundDepsCount_;

  for (var i = 0; i < l; i++) {
    var dep = observing[i];

    if (dep.diffValue_ === 0) {
      dep.diffValue_ = 1;
      if (i0 !== i) observing[i0] = dep;
      i0++;
    } // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
    // not hitting the condition


    if (dep.dependenciesState_ > lowestNewObservingDerivationState) {
      lowestNewObservingDerivationState = dep.dependenciesState_;
    }
  }

  observing.length = i0;
  derivation.newObserving_ = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
  // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
  //   0: it's not in new observables, unobserve it
  //   1: it keeps being observed, don't want to notify it. change to 0

  l = prevObserving.length;

  while (l--) {
    var _dep = prevObserving[l];

    if (_dep.diffValue_ === 0) {
      removeObserver(_dep, derivation);
    }

    _dep.diffValue_ = 0;
  } // Go through all new observables and check diffValue: (now it should be unique)
  //   0: it was set to 0 in last loop. don't need to do anything.
  //   1: it wasn't observed, let's observe it. set back to 0


  while (i0--) {
    var _dep2 = observing[i0];

    if (_dep2.diffValue_ === 1) {
      _dep2.diffValue_ = 0;
      addObserver(_dep2, derivation);
    }
  } // Some new observed derivations may become stale during this derivation computation
  // so they have had no chance to propagate staleness (#916)


  if (lowestNewObservingDerivationState !== IDerivationState_.UP_TO_DATE_) {
    derivation.dependenciesState_ = lowestNewObservingDerivationState;
    derivation.onBecomeStale_();
  }
}

function clearObserving(derivation) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
  var obs = derivation.observing_;
  derivation.observing_ = [];
  var i = obs.length;

  while (i--) {
    removeObserver(obs[i], derivation);
  }

  derivation.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
}
function untracked(action) {
  var prev = untrackedStart();

  try {
    return action();
  } finally {
    untrackedEnd(prev);
  }
}
function untrackedStart() {
  var prev = globalState.trackingDerivation;
  globalState.trackingDerivation = null;
  return prev;
}
function untrackedEnd(prev) {
  globalState.trackingDerivation = prev;
}
function allowStateReadsStart(allowStateReads) {
  var prev = globalState.allowStateReads;
  globalState.allowStateReads = allowStateReads;
  return prev;
}
function allowStateReadsEnd(prev) {
  globalState.allowStateReads = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */

function changeDependenciesStateTo0(derivation) {
  if (derivation.dependenciesState_ === IDerivationState_.UP_TO_DATE_) return;
  derivation.dependenciesState_ = IDerivationState_.UP_TO_DATE_;
  var obs = derivation.observing_;
  var i = obs.length;

  while (i--) {
    obs[i].lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
  }
}

/**
 * These values will persist if global state is reset
 */

var persistentKeys = ["mobxGuid", "spyListeners", "enforceActions", "computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "allowStateReads", "disableErrorBoundaries", "runId", "UNCHANGED", "useProxies"];
var MobXGlobals = function MobXGlobals() {
  this.version = 6;
  this.UNCHANGED = {};
  this.trackingDerivation = null;
  this.trackingContext = null;
  this.runId = 0;
  this.mobxGuid = 0;
  this.inBatch = 0;
  this.pendingUnobservations = [];
  this.pendingReactions = [];
  this.isRunningReactions = false;
  this.allowStateChanges = false;
  this.allowStateReads = true;
  this.enforceActions = true;
  this.spyListeners = [];
  this.globalReactionErrorHandlers = [];
  this.computedRequiresReaction = false;
  this.reactionRequiresObservable = false;
  this.observableRequiresReaction = false;
  this.disableErrorBoundaries = false;
  this.suppressReactionErrors = false;
  this.useProxies = true;
  this.verifyProxies = false;
};
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState = /*#__PURE__*/function () {
  var global = /*#__PURE__*/getGlobal();
  if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals) canMergeGlobalState = false;
  if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version) canMergeGlobalState = false;

  if (!canMergeGlobalState) {
    setTimeout(function () {
      if (!isolateCalled) {
        die(35);
      }
    }, 1);
    return new MobXGlobals();
  } else if (global.__mobxGlobals) {
    global.__mobxInstanceCount += 1;
    if (!global.__mobxGlobals.UNCHANGED) global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible

    return global.__mobxGlobals;
  } else {
    global.__mobxInstanceCount = 1;
    return global.__mobxGlobals = /*#__PURE__*/new MobXGlobals();
  }
}();
function isolateGlobalState() {
  if (globalState.pendingReactions.length || globalState.inBatch || globalState.isRunningReactions) die(36);
  isolateCalled = true;

  if (canMergeGlobalState) {
    var global = getGlobal();
    if (--global.__mobxInstanceCount === 0) global.__mobxGlobals = undefined;
    globalState = new MobXGlobals();
  }
}
function getGlobalState() {
  return globalState;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */

function resetGlobalState() {
  var defaultGlobals = new MobXGlobals();

  for (var key in defaultGlobals) {
    if (persistentKeys.indexOf(key) === -1) globalState[key] = defaultGlobals[key];
  }

  globalState.allowStateChanges = !globalState.enforceActions;
}

function hasObservers(observable) {
  return observable.observers_ && observable.observers_.size > 0;
}
function getObservers(observable) {
  return observable.observers_;
} // function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }

function addObserver(observable, node) {
  // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
  // invariantObservers(observable);
  observable.observers_.add(node);
  if (observable.lowestObserverState_ > node.dependenciesState_) observable.lowestObserverState_ = node.dependenciesState_; // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver(observable, node) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
  // invariantObservers(observable);
  observable.observers_["delete"](node);

  if (observable.observers_.size === 0) {
    // deleting last observer
    queueForUnobservation(observable);
  } // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");

}
function queueForUnobservation(observable) {
  if (observable.isPendingUnobservation_ === false) {
    // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
    observable.isPendingUnobservation_ = true;
    globalState.pendingUnobservations.push(observable);
  }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */

function startBatch() {
  globalState.inBatch++;
}
function endBatch() {
  if (--globalState.inBatch === 0) {
    runReactions(); // the batch is actually about to finish, all unobserving should happen here.

    var list = globalState.pendingUnobservations;

    for (var i = 0; i < list.length; i++) {
      var observable = list[i];
      observable.isPendingUnobservation_ = false;

      if (observable.observers_.size === 0) {
        if (observable.isBeingObserved_) {
          // if this observable had reactive observers, trigger the hooks
          observable.isBeingObserved_ = false;
          observable.onBUO();
        }

        if (observable instanceof ComputedValue) {
          // computed values are automatically teared down when the last observer leaves
          // this process happens recursively, this computed might be the last observabe of another, etc..
          observable.suspend_();
        }
      }
    }

    globalState.pendingUnobservations = [];
  }
}
function reportObserved(observable) {
  checkIfStateReadsAreAllowed(observable);
  var derivation = globalState.trackingDerivation;

  if (derivation !== null) {
    /**
     * Simple optimization, give each derivation run an unique id (runId)
     * Check if last time this observable was accessed the same runId is used
     * if this is the case, the relation is already known
     */
    if (derivation.runId_ !== observable.lastAccessedBy_) {
      observable.lastAccessedBy_ = derivation.runId_; // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...

      derivation.newObserving_[derivation.unboundDepsCount_++] = observable;

      if (!observable.isBeingObserved_ && globalState.trackingContext) {
        observable.isBeingObserved_ = true;
        observable.onBO();
      }
    }

    return true;
  } else if (observable.observers_.size === 0 && globalState.inBatch > 0) {
    queueForUnobservation(observable);
  }

  return false;
} // function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }

/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes

function propagateChanged(observable) {
  // invariantLOS(observable, "changed start");
  if (observable.lowestObserverState_ === IDerivationState_.STALE_) return;
  observable.lowestObserverState_ = IDerivationState_.STALE_; // Ideally we use for..of here, but the downcompiled version is really slow...

  observable.observers_.forEach(function (d) {
    if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      if ( true && d.isTracing_ !== TraceMode.NONE) {
        logTraceInfo(d, observable);
      }

      d.onBecomeStale_();
    }

    d.dependenciesState_ = IDerivationState_.STALE_;
  }); // invariantLOS(observable, "changed end");
} // Called by ComputedValue when it recalculate and its value changed

function propagateChangeConfirmed(observable) {
  // invariantLOS(observable, "confirmed start");
  if (observable.lowestObserverState_ === IDerivationState_.STALE_) return;
  observable.lowestObserverState_ = IDerivationState_.STALE_;
  observable.observers_.forEach(function (d) {
    if (d.dependenciesState_ === IDerivationState_.POSSIBLY_STALE_) d.dependenciesState_ = IDerivationState_.STALE_;else if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_ // this happens during computing of `d`, just keep lowestObserverState up to date.
    ) observable.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
  }); // invariantLOS(observable, "confirmed end");
} // Used by computed when its dependency changed, but we don't wan't to immediately recompute.

function propagateMaybeChanged(observable) {
  // invariantLOS(observable, "maybe start");
  if (observable.lowestObserverState_ !== IDerivationState_.UP_TO_DATE_) return;
  observable.lowestObserverState_ = IDerivationState_.POSSIBLY_STALE_;
  observable.observers_.forEach(function (d) {
    if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      d.dependenciesState_ = IDerivationState_.POSSIBLY_STALE_;

      if ( true && d.isTracing_ !== TraceMode.NONE) {
        logTraceInfo(d, observable);
      }

      d.onBecomeStale_();
    }
  }); // invariantLOS(observable, "maybe end");
}

function logTraceInfo(derivation, observable) {
  console.log("[mobx.trace] '" + derivation.name_ + "' is invalidated due to a change in: '" + observable.name_ + "'");

  if (derivation.isTracing_ === TraceMode.BREAK) {
    var lines = [];
    printDepTree(getDependencyTree(derivation), lines, 1); // prettier-ignore

    new Function("debugger;\n/*\nTracing '" + derivation.name_ + "'\n\nYou are entering this break point because derivation '" + derivation.name_ + "' is being traced and '" + observable.name_ + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
  }
}

function printDepTree(tree, lines, depth) {
  if (lines.length >= 1000) {
    lines.push("(and many more)");
    return;
  }

  lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)

  if (tree.dependencies) tree.dependencies.forEach(function (child) {
    return printDepTree(child, lines, depth + 1);
  });
}

var Reaction = /*#__PURE__*/function () {
  // nodes we are looking at. Our value depends on these nodes
  function Reaction(name_, onInvalidate_, errorHandler_, requiresObservable_) {
    if (name_ === void 0) {
      name_ = "Reaction@" + getNextId();
    }

    if (requiresObservable_ === void 0) {
      requiresObservable_ = false;
    }

    this.name_ = void 0;
    this.onInvalidate_ = void 0;
    this.errorHandler_ = void 0;
    this.requiresObservable_ = void 0;
    this.observing_ = [];
    this.newObserving_ = [];
    this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
    this.diffValue_ = 0;
    this.runId_ = 0;
    this.unboundDepsCount_ = 0;
    this.mapid_ = "#" + getNextId();
    this.isDisposed_ = false;
    this.isScheduled_ = false;
    this.isTrackPending_ = false;
    this.isRunning_ = false;
    this.isTracing_ = TraceMode.NONE;
    this.name_ = name_;
    this.onInvalidate_ = onInvalidate_;
    this.errorHandler_ = errorHandler_;
    this.requiresObservable_ = requiresObservable_;
  }

  var _proto = Reaction.prototype;

  _proto.onBecomeStale_ = function onBecomeStale_() {
    this.schedule_();
  };

  _proto.schedule_ = function schedule_() {
    if (!this.isScheduled_) {
      this.isScheduled_ = true;
      globalState.pendingReactions.push(this);
      runReactions();
    }
  };

  _proto.isScheduled = function isScheduled() {
    return this.isScheduled_;
  }
  /**
   * internal, use schedule() if you intend to kick off a reaction
   */
  ;

  _proto.runReaction_ = function runReaction_() {
    if (!this.isDisposed_) {
      startBatch();
      this.isScheduled_ = false;

      if (shouldCompute(this)) {
        this.isTrackPending_ = true;

        try {
          this.onInvalidate_();

          if ( true && this.isTrackPending_ && isSpyEnabled()) {
            // onInvalidate didn't trigger track right away..
            spyReport({
              name: this.name_,
              type: "scheduled-reaction"
            });
          }
        } catch (e) {
          this.reportExceptionInDerivation_(e);
        }
      }

      endBatch();
    }
  };

  _proto.track = function track(fn) {
    if (this.isDisposed_) {
      return; // console.warn("Reaction already disposed") // Note: Not a warning / error in mobx 4 either
    }

    startBatch();
    var notify = isSpyEnabled();
    var startTime;

    if ( true && notify) {
      startTime = Date.now();
      spyReportStart({
        name: this.name_,
        type: "reaction"
      });
    }

    this.isRunning_ = true;
    var prevReaction = globalState.trackingContext; // reactions could create reactions...

    globalState.trackingContext = this;
    var result = trackDerivedFunction(this, fn, undefined);
    globalState.trackingContext = prevReaction;
    this.isRunning_ = false;
    this.isTrackPending_ = false;

    if (this.isDisposed_) {
      // disposed during last run. Clean up everything that was bound after the dispose call.
      clearObserving(this);
    }

    if (isCaughtException(result)) this.reportExceptionInDerivation_(result.cause);

    if ( true && notify) {
      spyReportEnd({
        time: Date.now() - startTime
      });
    }

    endBatch();
  };

  _proto.reportExceptionInDerivation_ = function reportExceptionInDerivation_(error) {
    var _this = this;

    if (this.errorHandler_) {
      this.errorHandler_(error, this);
      return;
    }

    if (globalState.disableErrorBoundaries) throw error;
    var message =  true ? "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'" : undefined;

    if (!globalState.suppressReactionErrors) {
      console.error(message, error);
      /** If debugging brought you here, please, read the above message :-). Tnx! */
    } else if (true) console.warn("[mobx] (error in reaction '" + this.name_ + "' suppressed, fix error of causing action below)"); // prettier-ignore


    if ( true && isSpyEnabled()) {
      spyReport({
        type: "error",
        name: this.name_,
        message: message,
        error: "" + error
      });
    }

    globalState.globalReactionErrorHandlers.forEach(function (f) {
      return f(error, _this);
    });
  };

  _proto.dispose = function dispose() {
    if (!this.isDisposed_) {
      this.isDisposed_ = true;

      if (!this.isRunning_) {
        // if disposed while running, clean up later. Maybe not optimal, but rare case
        startBatch();
        clearObserving(this);
        endBatch();
      }
    }
  };

  _proto.getDisposer_ = function getDisposer_() {
    var r = this.dispose.bind(this);
    r[$mobx] = this;
    return r;
  };

  _proto.toString = function toString() {
    return "Reaction[" + this.name_ + "]";
  };

  _proto.trace = function trace$1(enterBreakPoint) {
    if (enterBreakPoint === void 0) {
      enterBreakPoint = false;
    }

    trace(this, enterBreakPoint);
  };

  return Reaction;
}();
function onReactionError(handler) {
  globalState.globalReactionErrorHandlers.push(handler);
  return function () {
    var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
    if (idx >= 0) globalState.globalReactionErrorHandlers.splice(idx, 1);
  };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */

var MAX_REACTION_ITERATIONS = 100;

var reactionScheduler = function reactionScheduler(f) {
  return f();
};

function runReactions() {
  // Trampolining, if runReactions are already running, new reactions will be picked up
  if (globalState.inBatch > 0 || globalState.isRunningReactions) return;
  reactionScheduler(runReactionsHelper);
}

function runReactionsHelper() {
  globalState.isRunningReactions = true;
  var allReactions = globalState.pendingReactions;
  var iterations = 0; // While running reactions, new reactions might be triggered.
  // Hence we work with two variables and check whether
  // we converge to no remaining reactions after a while.

  while (allReactions.length > 0) {
    if (++iterations === MAX_REACTION_ITERATIONS) {
      console.error( true ? "Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." + (" Probably there is a cycle in the reactive function: " + allReactions[0]) : undefined);
      allReactions.splice(0); // clear reactions
    }

    var remainingReactions = allReactions.splice(0);

    for (var i = 0, l = remainingReactions.length; i < l; i++) {
      remainingReactions[i].runReaction_();
    }
  }

  globalState.isRunningReactions = false;
}

var isReaction = /*#__PURE__*/createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
  var baseScheduler = reactionScheduler;

  reactionScheduler = function reactionScheduler(f) {
    return fn(function () {
      return baseScheduler(f);
    });
  };
}

function isSpyEnabled() {
  return  true && !!globalState.spyListeners.length;
}
function spyReport(event) {
  if (false) {} // dead code elimination can do the rest

  if (!globalState.spyListeners.length) return;
  var listeners = globalState.spyListeners;

  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](event);
  }
}
function spyReportStart(event) {
  if (false) {}

  var change = _extends({}, event, {
    spyReportStart: true
  });

  spyReport(change);
}
var END_EVENT = {
  type: "report-end",
  spyReportEnd: true
};
function spyReportEnd(change) {
  if (false) {}
  if (change) spyReport(_extends({}, change, {
    type: "report-end",
    spyReportEnd: true
  }));else spyReport(END_EVENT);
}
function spy(listener) {
  if (false) {} else {
    globalState.spyListeners.push(listener);
    return once(function () {
      globalState.spyListeners = globalState.spyListeners.filter(function (l) {
        return l !== listener;
      });
    });
  }
}

var ACTION = "action";
var ACTION_BOUND = "action.bound";
var AUTOACTION = "autoAction";
var AUTOACTION_BOUND = "autoAction.bound";
var ACTION_UNNAMED = "<unnamed action>";

function createActionFactory(autoAction, annotation) {
  var res = function action(arg1, arg2) {
    // action(fn() {})
    if (isFunction(arg1)) return createAction(arg1.name || ACTION_UNNAMED, arg1, autoAction); // action("name", fn() {})

    if (isFunction(arg2)) return createAction(arg1, arg2, autoAction); // @action

    if (isStringish(arg2)) {
      return storeDecorator(arg1, arg2, annotation);
    } // Annation: action("name") & @action("name")


    if (isStringish(arg1)) {
      return createDecoratorAndAnnotation(annotation, arg1);
    }

    if (true) die("Invalid arguments for `action`");
  };

  res.annotationType_ = annotation;
  return res;
}

var action = /*#__PURE__*/createActionFactory(false, ACTION);
var autoAction = /*#__PURE__*/createActionFactory(true, AUTOACTION);
action.bound = /*#__PURE__*/createDecorator(ACTION_BOUND);
autoAction.bound = /*#__PURE__*/createDecorator(AUTOACTION_BOUND);
function runInAction(fn) {
  return executeAction(fn.name || ACTION_UNNAMED, false, fn, this, undefined);
}
function isAction(thing) {
  return isFunction(thing) && thing.isMobxAction === true;
}

/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */

function autorun(view, opts) {
  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }

  if (true) {
    if (!isFunction(view)) die("Autorun expects a function as first argument");
    if (isAction(view)) die("Autorun does not accept actions since actions are untrackable");
  }

  var name = opts && opts.name || view.name || "Autorun@" + getNextId();
  var runSync = !opts.scheduler && !opts.delay;
  var reaction;

  if (runSync) {
    // normal autorun
    reaction = new Reaction(name, function () {
      this.track(reactionRunner);
    }, opts.onError, opts.requiresObservable);
  } else {
    var scheduler = createSchedulerFromOptions(opts); // debounced autorun

    var isScheduled = false;
    reaction = new Reaction(name, function () {
      if (!isScheduled) {
        isScheduled = true;
        scheduler(function () {
          isScheduled = false;
          if (!reaction.isDisposed_) reaction.track(reactionRunner);
        });
      }
    }, opts.onError, opts.requiresObservable);
  }

  function reactionRunner() {
    view(reaction);
  }

  reaction.schedule_();
  return reaction.getDisposer_();
}

var run = function run(f) {
  return f();
};

function createSchedulerFromOptions(opts) {
  return opts.scheduler ? opts.scheduler : opts.delay ? function (f) {
    return setTimeout(f, opts.delay);
  } : run;
}

function reaction(expression, effect, opts) {
  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }

  if (true) {
    if (!isFunction(expression) || !isFunction(effect)) die("First and second argument to reaction should be functions");
    if (!isPlainObject(opts)) die("Third argument of reactions should be an object");
  }

  var name = opts.name || "Reaction@" + getNextId();
  var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
  var runSync = !opts.scheduler && !opts.delay;
  var scheduler = createSchedulerFromOptions(opts);
  var firstTime = true;
  var isScheduled = false;
  var value;
  var oldValue = undefined; // only an issue with fireImmediately

  var equals = opts.compareStructural ? comparer.structural : opts.equals || comparer["default"];
  var r = new Reaction(name, function () {
    if (firstTime || runSync) {
      reactionRunner();
    } else if (!isScheduled) {
      isScheduled = true;
      scheduler(reactionRunner);
    }
  }, opts.onError, opts.requiresObservable);

  function reactionRunner() {
    isScheduled = false;
    if (r.isDisposed_) return;
    var changed = false;
    r.track(function () {
      var nextValue = allowStateChanges(false, function () {
        return expression(r);
      });
      changed = firstTime || !equals(value, nextValue);
      oldValue = value;
      value = nextValue;
    });
    if (firstTime && opts.fireImmediately) effectAction(value, oldValue, r);else if (!firstTime && changed) effectAction(value, oldValue, r);
    firstTime = false;
  }

  r.schedule_();
  return r.getDisposer_();
}

function wrapErrorHandler(errorHandler, baseFn) {
  return function () {
    try {
      return baseFn.apply(this, arguments);
    } catch (e) {
      errorHandler.call(this, e);
    }
  };
}

var ON_BECOME_OBSERVED = "onBO";
var ON_BECOME_UNOBSERVED = "onBUO";
function onBecomeObserved(thing, arg2, arg3) {
  return interceptHook(ON_BECOME_OBSERVED, thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
  return interceptHook(ON_BECOME_UNOBSERVED, thing, arg2, arg3);
}

function interceptHook(hook, thing, arg2, arg3) {
  var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
  var cb = isFunction(arg3) ? arg3 : arg2;
  var listenersKey = hook + "L";

  if (atom[listenersKey]) {
    atom[listenersKey].add(cb);
  } else {
    atom[listenersKey] = new Set([cb]);
  }

  return function () {
    var hookListeners = atom[listenersKey];

    if (hookListeners) {
      hookListeners["delete"](cb);

      if (hookListeners.size === 0) {
        delete atom[listenersKey];
      }
    }
  };
}

var NEVER = "never";
var ALWAYS = "always";
var OBSERVED = "observed"; // const IF_AVAILABLE = "ifavailable"

function configure(options) {
  if (options.isolateGlobalState === true) {
    isolateGlobalState();
  }

  var useProxies = options.useProxies,
      enforceActions = options.enforceActions;

  if (useProxies !== undefined) {
    globalState.useProxies = useProxies === ALWAYS ? true : useProxies === NEVER ? false : typeof Proxy !== "undefined";
  }

  if (useProxies === "ifavailable") globalState.verifyProxies = true;

  if (enforceActions !== undefined) {
    var ea = enforceActions === ALWAYS ? ALWAYS : enforceActions === OBSERVED;
    globalState.enforceActions = ea;
    globalState.allowStateChanges = ea === true || ea === ALWAYS ? false : true;
  }
  ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries"].forEach(function (key) {
    if (key in options) globalState[key] = !!options[key];
  });
  globalState.allowStateReads = !globalState.observableRequiresReaction;

  if ( true && globalState.disableErrorBoundaries === true) {
    console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.");
  }

  if (options.reactionScheduler) {
    setReactionScheduler(options.reactionScheduler);
  }
}

function extendObservable(target, properties, annotations, options) {
  if (true) {
    if (arguments.length > 4) die("'extendObservable' expected 2-4 arguments");
    if (typeof target !== "object") die("'extendObservable' expects an object as first argument");
    if (isObservableMap(target)) die("'extendObservable' should not be used on maps, use map.merge instead");
    if (!isPlainObject(properties)) die("'extendObservabe' only accepts plain objects as second argument");
    if (isObservable(properties) || isObservable(annotations)) die("Extending an object with another observable (object) is not supported");
  }

  var o = asCreateObservableOptions(options);
  var adm = asObservableObject(target, o.name, getEnhancerFromOption(o));
  startBatch();

  try {
    var descs = getOwnPropertyDescriptors(properties);
    getPlainObjectKeys(descs).forEach(function (key) {
      makeProperty(adm, target, key, descs[key], !annotations ? true : key in annotations ? annotations[key] : true, true, !!(options == null ? void 0 : options.autoBind));
    });
  } finally {
    endBatch();
  }

  return target;
}

function getDependencyTree(thing, property) {
  return nodeToDependencyTree(getAtom(thing, property));
}

function nodeToDependencyTree(node) {
  var result = {
    name: node.name_
  };
  if (node.observing_ && node.observing_.length > 0) result.dependencies = unique(node.observing_).map(nodeToDependencyTree);
  return result;
}

function getObserverTree(thing, property) {
  return nodeToObserverTree(getAtom(thing, property));
}

function nodeToObserverTree(node) {
  var result = {
    name: node.name_
  };
  if (hasObservers(node)) result.observers = Array.from(getObservers(node)).map(nodeToObserverTree);
  return result;
}

function unique(list) {
  return Array.from(new Set(list));
}

var FLOW = "flow";
var generatorId = 0;
function FlowCancellationError() {
  this.message = "FLOW_CANCELLED";
}
FlowCancellationError.prototype = /*#__PURE__*/Object.create(Error.prototype);
function isFlowCancellationError(error) {
  return error instanceof FlowCancellationError;
}
var flow = /*#__PURE__*/Object.assign(function flow(arg1, arg2) {
  // @flow
  if (isStringish(arg2)) {
    return storeDecorator(arg1, arg2, "flow");
  } // flow(fn)


  if ( true && arguments.length !== 1) die("Flow expects 1 argument and cannot be used as decorator");
  var generator = arg1;
  var name = generator.name || "<unnamed flow>"; // Implementation based on https://github.com/tj/co/blob/master/index.js

  var res = function res() {
    var ctx = this;
    var args = arguments;
    var runId = ++generatorId;
    var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
    var rejector;
    var pendingPromise = undefined;
    var promise = new Promise(function (resolve, reject) {
      var stepId = 0;
      rejector = reject;

      function onFulfilled(res) {
        pendingPromise = undefined;
        var ret;

        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
        } catch (e) {
          return reject(e);
        }

        next(ret);
      }

      function onRejected(err) {
        pendingPromise = undefined;
        var ret;

        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen["throw"]).call(gen, err);
        } catch (e) {
          return reject(e);
        }

        next(ret);
      }

      function next(ret) {
        if (isFunction(ret == null ? void 0 : ret.then)) {
          // an async iterator
          ret.then(next, reject);
          return;
        }

        if (ret.done) return resolve(ret.value);
        pendingPromise = Promise.resolve(ret.value);
        return pendingPromise.then(onFulfilled, onRejected);
      }

      onFulfilled(undefined); // kick off the process
    });
    promise.cancel = action(name + " - runid: " + runId + " - cancel", function () {
      try {
        if (pendingPromise) cancelPromise(pendingPromise); // Finally block can return (or yield) stuff..

        var _res = gen["return"](undefined); // eat anything that promise would do, it's cancelled!


        var yieldedPromise = Promise.resolve(_res.value);
        yieldedPromise.then(noop, noop);
        cancelPromise(yieldedPromise); // maybe it can be cancelled :)
        // reject our original promise

        rejector(new FlowCancellationError());
      } catch (e) {
        rejector(e); // there could be a throwing finally block
      }
    });
    return promise;
  };

  res.isMobXFlow = true;
  return res;
}, {
  annotationType_: "flow"
});

function cancelPromise(promise) {
  if (isFunction(promise.cancel)) promise.cancel();
}

function flowResult(result) {
  return result; // just tricking TypeScript :)
}
function isFlow(fn) {
  return (fn == null ? void 0 : fn.isMobXFlow) === true;
}

function interceptReads(thing, propOrHandler, handler) {
  var target;

  if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
    target = getAdministration(thing);
  } else if (isObservableObject(thing)) {
    if ( true && !isStringish(propOrHandler)) return die("InterceptReads can only be used with a specific property, not with an object in general");
    target = getAdministration(thing, propOrHandler);
  } else if (true) {
    return die("Expected observable map, object or array as first array");
  }

  if ( true && target.dehancer !== undefined) return die("An intercept reader was already established");
  target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
  return function () {
    target.dehancer = undefined;
  };
}

function intercept(thing, propOrHandler, handler) {
  if (isFunction(handler)) return interceptProperty(thing, propOrHandler, handler);else return interceptInterceptable(thing, propOrHandler);
}

function interceptInterceptable(thing, handler) {
  return getAdministration(thing).intercept_(handler);
}

function interceptProperty(thing, property, handler) {
  return getAdministration(thing, property).intercept_(handler);
}

function _isComputed(value, property) {
  if (property !== undefined) {
    if (isObservableObject(value) === false) return false;
    if (!value[$mobx].values_.has(property)) return false;
    var atom = getAtom(value, property);
    return isComputedValue(atom);
  }

  return isComputedValue(value);
}
function isComputed(value) {
  if ( true && arguments.length > 1) return die("isComputed expects only 1 argument. Use isComputedProp to inspect the observability of a property");
  return _isComputed(value);
}
function isComputedProp(value, propName) {
  if ( true && !isStringish(propName)) return die("isComputed expected a property name as second argument");
  return _isComputed(value, propName);
}

function _isObservable(value, property) {
  if (!value) return false;

  if (property !== undefined) {
    if ( true && (isObservableMap(value) || isObservableArray(value))) return die("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");

    if (isObservableObject(value)) {
      return value[$mobx].values_.has(property);
    }

    return false;
  } // For first check, see #701


  return isObservableObject(value) || !!value[$mobx] || isAtom(value) || isReaction(value) || isComputedValue(value);
}

function isObservable(value) {
  if ( true && arguments.length !== 1) die("isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
  return _isObservable(value);
}
function isObservableProp(value, propName) {
  if ( true && !isStringish(propName)) return die("expected a property name as second argument");
  return _isObservable(value, propName);
}

function keys(obj) {
  if (isObservableObject(obj)) {
    return obj[$mobx].getKeys_();
  }

  if (isObservableMap(obj) || isObservableSet(obj)) {
    return Array.from(obj.keys());
  }

  if (isObservableArray(obj)) {
    return obj.map(function (_, index) {
      return index;
    });
  }

  die(5);
}
function values(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map(function (key) {
      return obj[key];
    });
  }

  if (isObservableMap(obj)) {
    return keys(obj).map(function (key) {
      return obj.get(key);
    });
  }

  if (isObservableSet(obj)) {
    return Array.from(obj.values());
  }

  if (isObservableArray(obj)) {
    return obj.slice();
  }

  die(6);
}
function entries(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map(function (key) {
      return [key, obj[key]];
    });
  }

  if (isObservableMap(obj)) {
    return keys(obj).map(function (key) {
      return [key, obj.get(key)];
    });
  }

  if (isObservableSet(obj)) {
    return Array.from(obj.entries());
  }

  if (isObservableArray(obj)) {
    return obj.map(function (key, index) {
      return [index, key];
    });
  }

  die(7);
}
function set(obj, key, value) {
  if (arguments.length === 2 && !isObservableSet(obj)) {
    startBatch();
    var _values = key;

    try {
      for (var _key in _values) {
        set(obj, _key, _values[_key]);
      }
    } finally {
      endBatch();
    }

    return;
  }

  if (isObservableObject(obj)) {
    var adm = obj[$mobx];
    var existingObservable = adm.values_.get(key);

    if (existingObservable) {
      adm.write_(key, value);
    } else {
      adm.addObservableProp_(key, value, adm.defaultEnhancer_);
    }
  } else if (isObservableMap(obj)) {
    obj.set(key, value);
  } else if (isObservableSet(obj)) {
    obj.add(key);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") key = parseInt(key, 10);
    if (key < 0) die("Invalid index: '" + key + "'");
    startBatch();
    if (key >= obj.length) obj.length = key + 1;
    obj[key] = value;
    endBatch();
  } else die(8);
}
function remove(obj, key) {
  if (isObservableObject(obj)) {
    obj[$mobx].remove_(key);
  } else if (isObservableMap(obj)) {
    obj["delete"](key);
  } else if (isObservableSet(obj)) {
    obj["delete"](key);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") key = parseInt(key, 10);
    obj.splice(key, 1);
  } else {
    die(9);
  }
}
function has(obj, key) {
  if (isObservableObject(obj)) {
    // return keys(obj).indexOf(key) >= 0
    return getAdministration(obj).has_(key);
  } else if (isObservableMap(obj)) {
    return obj.has(key);
  } else if (isObservableSet(obj)) {
    return obj.has(key);
  } else if (isObservableArray(obj)) {
    return key >= 0 && key < obj.length;
  }

  die(10);
}
function get(obj, key) {
  if (!has(obj, key)) return undefined;

  if (isObservableObject(obj)) {
    return obj[key];
  } else if (isObservableMap(obj)) {
    return obj.get(key);
  } else if (isObservableArray(obj)) {
    return obj[key];
  }

  die(11);
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
  if (isFunction(cbOrFire)) return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);else return observeObservable(thing, propOrCb, cbOrFire);
}

function observeObservable(thing, listener, fireImmediately) {
  return getAdministration(thing).observe_(listener, fireImmediately);
}

function observeObservableProperty(thing, property, listener, fireImmediately) {
  return getAdministration(thing, property).observe_(listener, fireImmediately);
}

function cache(map, key, value) {
  map.set(key, value);
  return value;
}

function toJSHelper(source, __alreadySeen) {
  if (source == null || typeof source !== "object" || source instanceof Date || !isObservable(source)) return source;
  if (isObservableValue(source)) return toJSHelper(source.get(), __alreadySeen);

  if (__alreadySeen.has(source)) {
    return __alreadySeen.get(source);
  }

  if (isObservableArray(source)) {
    var res = cache(__alreadySeen, source, new Array(source.length));
    source.forEach(function (value, idx) {
      res[idx] = toJSHelper(value, __alreadySeen);
    });
    return res;
  }

  if (isObservableSet(source)) {
    var _res = cache(__alreadySeen, source, new Set());

    source.forEach(function (value) {
      _res.add(toJSHelper(value, __alreadySeen));
    });
    return _res;
  }

  if (isObservableMap(source)) {
    var _res2 = cache(__alreadySeen, source, new Map());

    source.forEach(function (value, key) {
      _res2.set(key, toJSHelper(value, __alreadySeen));
    });
    return _res2;
  } else {
    // must be observable object
    keys(source); // make sure keys are observed

    var _res3 = cache(__alreadySeen, source, {});

    getPlainObjectKeys(source).forEach(function (key) {
      _res3[key] = toJSHelper(source[key], __alreadySeen);
    });
    return _res3;
  }
}
/**
 * Basically, a deep clone, so that no reactive property will exist anymore.
 */


function toJS(source, options) {
  if ( true && options) die("toJS no longer supports options");
  return toJSHelper(source, new Map());
}

function trace() {
  if (false) {}
  var enterBreakPoint = false;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (typeof args[args.length - 1] === "boolean") enterBreakPoint = args.pop();
  var derivation = getAtomFromArgs(args);

  if (!derivation) {
    return die("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
  }

  if (derivation.isTracing_ === TraceMode.NONE) {
    console.log("[mobx.trace] '" + derivation.name_ + "' tracing enabled");
  }

  derivation.isTracing_ = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}

function getAtomFromArgs(args) {
  switch (args.length) {
    case 0:
      return globalState.trackingDerivation;

    case 1:
      return getAtom(args[0]);

    case 2:
      return getAtom(args[0], args[1]);
  }
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */

function transaction(action, thisArg) {
  if (thisArg === void 0) {
    thisArg = undefined;
  }

  startBatch();

  try {
    return action.apply(thisArg);
  } finally {
    endBatch();
  }
}

function when(predicate, arg1, arg2) {
  if (arguments.length === 1 || arg1 && typeof arg1 === "object") return whenPromise(predicate, arg1);
  return _when(predicate, arg1, arg2 || {});
}

function _when(predicate, effect, opts) {
  var timeoutHandle;

  if (typeof opts.timeout === "number") {
    timeoutHandle = setTimeout(function () {
      if (!disposer[$mobx].isDisposed_) {
        disposer();
        var error = new Error("WHEN_TIMEOUT");
        if (opts.onError) opts.onError(error);else throw error;
      }
    }, opts.timeout);
  }

  opts.name = opts.name || "When@" + getNextId();
  var effectAction = createAction(opts.name + "-effect", effect); // eslint-disable-next-line

  var disposer = autorun(function (r) {
    // predicate should not change state
    var cond = allowStateChanges(false, predicate);

    if (cond) {
      r.dispose();
      if (timeoutHandle) clearTimeout(timeoutHandle);
      effectAction();
    }
  }, opts);
  return disposer;
}

function whenPromise(predicate, opts) {
  if ( true && opts && opts.onError) return die("the options 'onError' and 'promise' cannot be combined");
  var cancel;
  var res = new Promise(function (resolve, reject) {
    var disposer = _when(predicate, resolve, _extends({}, opts, {
      onError: reject
    }));

    cancel = function cancel() {
      disposer();
      reject("WHEN_CANCELLED");
    };
  });
  res.cancel = cancel;
  return res;
}

function getAdm(target) {
  return target[$mobx];
} // Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
// and skip either the internal values map, or the base object with its property descriptors!


var objectProxyTraps = {
  has: function has(target, name) {
    if (name === $mobx || name === "constructor") return true;
    if ( true && globalState.trackingDerivation) warnAboutProxyRequirement("detect new properties using the 'in' operator. Use 'has' from 'mobx' instead.");
    var adm = getAdm(target); // MWE: should `in` operator be reactive? If not, below code path will be faster / more memory efficient
    // check performance stats!
    // if (adm.values.get(name as string)) return true

    if (isStringish(name)) return adm.has_(name);
    return name in target;
  },
  get: function get(target, name) {
    if (name === $mobx || name === "constructor") return target[name];
    var adm = getAdm(target);
    var observable = adm.values_.get(name);

    if (observable instanceof Atom) {
      var result = observable.get();

      if (result === undefined) {
        // This fixes #1796, because deleting a prop that has an
        // undefined value won't retrigger a observer (no visible effect),
        // the autorun wouldn't subscribe to future key changes (see also next comment)
        adm.has_(name);
      }

      return result;
    } // make sure we start listening to future keys
    // note that we only do this here for optimization


    if (isStringish(name)) adm.has_(name);
    return target[name];
  },
  set: function set$1(target, name, value) {
    if (!isStringish(name)) return false;

    if ( true && !getAdm(target).values_.has(name)) {
      warnAboutProxyRequirement("add a new observable property through direct assignment. Use 'set' from 'mobx' instead.");
    }

    set(target, name, value);

    return true;
  },
  deleteProperty: function deleteProperty(target, name) {
    if (true) warnAboutProxyRequirement("delete properties from an observable object. Use 'remove' from 'mobx' instead.");
    if (!isStringish(name)) return false;
    var adm = getAdm(target);
    adm.remove_(name);
    return true;
  },
  ownKeys: function ownKeys(target) {
    if ( true && globalState.trackingDerivation) warnAboutProxyRequirement("iterate keys to detect added / removed properties. Use `keys` from 'mobx' instead.");
    var adm = getAdm(target);
    adm.keysAtom_.reportObserved();
    return Reflect.ownKeys(target);
  },
  preventExtensions: function preventExtensions(target) {
    die(13);
  }
};
function createDynamicObservableObject(base) {
  assertProxies();
  var proxy = new Proxy(base, objectProxyTraps);
  base[$mobx].proxy_ = proxy;
  return proxy;
}

function hasInterceptors(interceptable) {
  return interceptable.interceptors_ !== undefined && interceptable.interceptors_.length > 0;
}
function registerInterceptor(interceptable, handler) {
  var interceptors = interceptable.interceptors_ || (interceptable.interceptors_ = []);
  interceptors.push(handler);
  return once(function () {
    var idx = interceptors.indexOf(handler);
    if (idx !== -1) interceptors.splice(idx, 1);
  });
}
function interceptChange(interceptable, change) {
  var prevU = untrackedStart();

  try {
    // Interceptor can modify the array, copy it to avoid concurrent modification, see #1950
    var interceptors = [].concat(interceptable.interceptors_ || []);

    for (var i = 0, l = interceptors.length; i < l; i++) {
      change = interceptors[i](change);
      if (change && !change.type) die(14);
      if (!change) break;
    }

    return change;
  } finally {
    untrackedEnd(prevU);
  }
}

function hasListeners(listenable) {
  return listenable.changeListeners_ !== undefined && listenable.changeListeners_.length > 0;
}
function registerListener(listenable, handler) {
  var listeners = listenable.changeListeners_ || (listenable.changeListeners_ = []);
  listeners.push(handler);
  return once(function () {
    var idx = listeners.indexOf(handler);
    if (idx !== -1) listeners.splice(idx, 1);
  });
}
function notifyListeners(listenable, change) {
  var prevU = untrackedStart();
  var listeners = listenable.changeListeners_;
  if (!listeners) return;
  listeners = listeners.slice();

  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](change);
  }

  untrackedEnd(prevU);
}

var CACHED_ANNOTATIONS = /*#__PURE__*/Symbol("mobx-cached-annotations");

function makeAction(target, key, name, fn, asAutoAction) {
  addHiddenProp(target, key, asAutoAction ? autoAction(name || key, fn) : action(name || key, fn));
}

function getInferredAnnotation(desc, defaultAnnotation, autoBind) {
  if (desc.get) return computed;
  if (desc.set) return false; // ignore pure setters
  // if already wrapped in action, don't do that another time, but assume it is already set up properly

  if (isFunction(desc.value)) return isGenerator(desc.value) ? flow : isAction(desc.value) ? false : autoBind ? autoAction.bound : autoAction; // if (!desc.configurable || !desc.writable) return false

  return defaultAnnotation != null ? defaultAnnotation : observable.deep;
}

function getDescriptorInChain(target, prop) {
  var current = target;

  while (current && current !== objectPrototype) {
    // Optimization: cache meta data, especially for members from prototypes?
    var desc = getDescriptor(current, prop);

    if (desc) {
      return [desc, current];
    }

    current = Object.getPrototypeOf(current);
  }

  die(1, prop);
}

function makeProperty(adm, owner, key, descriptor, annotation, forceCopy, // extend observable will copy even unannotated properties
autoBind) {
  var _annotation$annotatio;

  var target = adm.target_;
  var defaultAnnotation = observable; // ideally grap this from adm's defaultEnahncer instead!

  var originAnnotation = annotation;

  if (annotation === true) {
    annotation = getInferredAnnotation(descriptor, defaultAnnotation, autoBind);
  }

  if (annotation === false) {
    if (forceCopy) {
      defineProperty(target, key, descriptor);
    }

    return;
  }

  if (!annotation || annotation === true || !annotation.annotationType_) {
    return die(2, key);
  }

  var type = annotation.annotationType_;

  switch (type) {
    case AUTOACTION:
    case ACTION:
      {
        var fn = descriptor.value;
        if (!isFunction(fn)) die(3, key);

        if (owner !== target && !forceCopy) {
          if (!isAction(owner[key])) makeAction(owner, key, annotation.arg_, fn, type === AUTOACTION);
        } else {
          makeAction(target, key, annotation.arg_, fn, type === AUTOACTION);
        }

        break;
      }

    case AUTOACTION_BOUND:
    case ACTION_BOUND:
      {
        var _fn = descriptor.value;
        if (!isFunction(_fn)) die(3, key);
        makeAction(target, key, annotation.arg_, _fn.bind(adm.proxy_ || target), type === AUTOACTION_BOUND);
        break;
      }

    case FLOW:
      {
        if (owner !== target && !forceCopy) {
          if (!isFlow(owner[key])) addHiddenProp(owner, key, flow(descriptor.value));
        } else {
          addHiddenProp(target, key, flow(descriptor.value));
        }

        break;
      }

    case COMPUTED:
    case COMPUTED_STRUCT:
      {
        if (!descriptor.get) die(4, key);
        adm.addComputedProp_(target, key, _extends({
          get: descriptor.get,
          set: descriptor.set,
          compareStructural: annotation.annotationType_ === COMPUTED_STRUCT
        }, annotation.arg_));
        break;
      }

    case OBSERVABLE:
    case OBSERVABLE_REF:
    case OBSERVABLE_SHALLOW:
    case OBSERVABLE_STRUCT:
      {
        if ( true && isObservableProp(target, key)) die("Cannot decorate '" + key.toString() + "': the property is already decorated as observable.");
        if ( true && !("value" in descriptor)) die("Cannot decorate '" + key.toString() + "': observable cannot be used on setter / getter properties."); // if the originAnnotation was true, preferred the adm's default enhancer over the inferred one

        var enhancer = originAnnotation === true ? adm.defaultEnhancer_ : getEnhancerFromAnnotation(annotation);
        adm.addObservableProp_(key, descriptor.value, enhancer);
        break;
      }

    default:
      if (true) die("invalid decorator '" + ((_annotation$annotatio = annotation.annotationType_) != null ? _annotation$annotatio : annotation) + "' for '" + key.toString() + "'");
  }
}
function makeObservable(target, annotations, options) {
  var autoBind = !!(options == null ? void 0 : options.autoBind);
  var adm = asObservableObject(target, options == null ? void 0 : options.name, getEnhancerFromAnnotation(options == null ? void 0 : options.defaultDecorator));
  startBatch();

  try {
    if (!annotations) {
      var didDecorate = applyDecorators(target);
      if ( true && !didDecorate) die("No annotations were passed to makeObservable, but no decorator members have been found either");
      return target;
    }

    var make = function make(key) {
      var annotation = annotations[key];

      var _getDescriptorInChain = getDescriptorInChain(target, key),
          desc = _getDescriptorInChain[0],
          owner = _getDescriptorInChain[1];

      makeProperty(adm, owner, key, desc, annotation, false, autoBind);
    };

    ownKeys(annotations).forEach(make);
  } finally {
    endBatch();
  }

  return target;
}
function makeAutoObservable(target, overrides, options) {
  var proto = Object.getPrototypeOf(target);
  var isPlain = proto == null || proto === objectPrototype;

  if (true) {
    if (!isPlain && !isPlainObject(proto)) die("'makeAutoObservable' can only be used for classes that don't have a superclass");
    if (isObservableObject(target)) die("makeAutoObservable can only be used on objects not already made observable");
  }

  var annotations;

  if (!isPlain && hasProp(proto, CACHED_ANNOTATIONS)) {
    // shortcut, reuse inferred annotations for this type from the previous time
    annotations = proto[CACHED_ANNOTATIONS];
  } else {
    annotations = _extends({}, overrides);
    extractAnnotationsFromObject(target, annotations, options);

    if (!isPlain) {
      extractAnnotationsFromProto(proto, annotations, options);
      addHiddenProp(proto, CACHED_ANNOTATIONS, annotations);
    }
  }

  makeObservable(target, annotations, options);
  return target;
}

function extractAnnotationsFromObject(target, collector, options) {
  var _options$defaultDecor;

  var autoBind = !!(options == null ? void 0 : options.autoBind);
  var defaultAnnotation = (options == null ? void 0 : options.deep) === undefined ? (_options$defaultDecor = options == null ? void 0 : options.defaultDecorator) != null ? _options$defaultDecor : observable.deep : (options == null ? void 0 : options.deep) ? observable.deep : observable.ref;
  Object.entries(getOwnPropertyDescriptors(target)).forEach(function (_ref) {
    var key = _ref[0],
        descriptor = _ref[1];
    if (key in collector || key === "constructor") return;
    collector[key] = getInferredAnnotation(descriptor, defaultAnnotation, autoBind);
  });
}

function extractAnnotationsFromProto(proto, collector, options) {
  Object.entries(getOwnPropertyDescriptors(proto)).forEach(function (_ref2) {
    var key = _ref2[0],
        prop = _ref2[1];
    if (key in collector || key === "constructor") return;

    if (prop.get) {
      collector[key] = computed;
    } else if (isFunction(prop.value)) {
      collector[key] = isGenerator(prop.value) ? flow : (options == null ? void 0 : options.autoBind) ? autoAction.bound : autoAction;
    }
  });
}

var SPLICE = "splice";
var UPDATE = "update";
var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859

var arrayTraps = {
  get: function get(target, name) {
    var adm = target[$mobx];
    if (name === $mobx) return adm;
    if (name === "length") return adm.getArrayLength_();

    if (typeof name === "string" && !isNaN(name)) {
      return adm.get_(parseInt(name));
    }

    if (hasProp(arrayExtensions, name)) {
      return arrayExtensions[name];
    }

    return target[name];
  },
  set: function set(target, name, value) {
    var adm = target[$mobx];

    if (name === "length") {
      adm.setArrayLength_(value);
    }

    if (typeof name === "symbol" || isNaN(name)) {
      target[name] = value;
    } else {
      // numeric string
      adm.set_(parseInt(name), value);
    }

    return true;
  },
  preventExtensions: function preventExtensions() {
    die(15);
  }
};
var ObservableArrayAdministration = /*#__PURE__*/function () {
  // this is the prop that gets proxied, so can't replace it!
  function ObservableArrayAdministration(name, enhancer, owned_, legacyMode_) {
    this.owned_ = void 0;
    this.legacyMode_ = void 0;
    this.atom_ = void 0;
    this.values_ = [];
    this.interceptors_ = void 0;
    this.changeListeners_ = void 0;
    this.enhancer_ = void 0;
    this.dehancer = void 0;
    this.proxy_ = void 0;
    this.lastKnownLength_ = 0;
    this.owned_ = owned_;
    this.legacyMode_ = legacyMode_;
    this.atom_ = new Atom(name || "ObservableArray@" + getNextId());

    this.enhancer_ = function (newV, oldV) {
      return enhancer(newV, oldV, name + "[..]");
    };
  }

  var _proto = ObservableArrayAdministration.prototype;

  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== undefined) return this.dehancer(value);
    return value;
  };

  _proto.dehanceValues_ = function dehanceValues_(values) {
    if (this.dehancer !== undefined && values.length > 0) return values.map(this.dehancer);
    return values;
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately === void 0) {
      fireImmediately = false;
    }

    if (fireImmediately) {
      listener({
        observableKind: "array",
        object: this.proxy_,
        debugObjectName: this.atom_.name_,
        type: "splice",
        index: 0,
        added: this.values_.slice(),
        addedCount: this.values_.length,
        removed: [],
        removedCount: 0
      });
    }

    return registerListener(this, listener);
  };

  _proto.getArrayLength_ = function getArrayLength_() {
    this.atom_.reportObserved();
    return this.values_.length;
  };

  _proto.setArrayLength_ = function setArrayLength_(newLength) {
    if (typeof newLength !== "number" || newLength < 0) die("Out of range: " + newLength);
    var currentLength = this.values_.length;
    if (newLength === currentLength) return;else if (newLength > currentLength) {
      var newItems = new Array(newLength - currentLength);

      for (var i = 0; i < newLength - currentLength; i++) {
        newItems[i] = undefined;
      } // No Array.fill everywhere...


      this.spliceWithArray_(currentLength, 0, newItems);
    } else this.spliceWithArray_(newLength, currentLength - newLength);
  };

  _proto.updateArrayLength_ = function updateArrayLength_(oldLength, delta) {
    if (oldLength !== this.lastKnownLength_) die(16);
    this.lastKnownLength_ += delta;
    if (this.legacyMode_ && delta > 0) reserveArrayBuffer(oldLength + delta + 1);
  };

  _proto.spliceWithArray_ = function spliceWithArray_(index, deleteCount, newItems) {
    var _this = this;

    checkIfStateModificationsAreAllowed(this.atom_);
    var length = this.values_.length;
    if (index === undefined) index = 0;else if (index > length) index = length;else if (index < 0) index = Math.max(0, length + index);
    if (arguments.length === 1) deleteCount = length - index;else if (deleteCount === undefined || deleteCount === null) deleteCount = 0;else deleteCount = Math.max(0, Math.min(deleteCount, length - index));
    if (newItems === undefined) newItems = EMPTY_ARRAY;

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy_,
        type: SPLICE,
        index: index,
        removedCount: deleteCount,
        added: newItems
      });
      if (!change) return EMPTY_ARRAY;
      deleteCount = change.removedCount;
      newItems = change.added;
    }

    newItems = newItems.length === 0 ? newItems : newItems.map(function (v) {
      return _this.enhancer_(v, undefined);
    });

    if (this.legacyMode_ || "development" !== "production") {
      var lengthDelta = newItems.length - deleteCount;
      this.updateArrayLength_(length, lengthDelta); // checks if internal array wasn't modified
    }

    var res = this.spliceItemsIntoValues_(index, deleteCount, newItems);
    if (deleteCount !== 0 || newItems.length !== 0) this.notifyArraySplice_(index, newItems, res);
    return this.dehanceValues_(res);
  };

  _proto.spliceItemsIntoValues_ = function spliceItemsIntoValues_(index, deleteCount, newItems) {
    if (newItems.length < MAX_SPLICE_SIZE) {
      var _this$values_;

      return (_this$values_ = this.values_).splice.apply(_this$values_, [index, deleteCount].concat(newItems));
    } else {
      var res = this.values_.slice(index, index + deleteCount);
      var oldItems = this.values_.slice(index + deleteCount);
      this.values_.length = index + newItems.length - deleteCount;

      for (var i = 0; i < newItems.length; i++) {
        this.values_[index + i] = newItems[i];
      }

      for (var _i = 0; _i < oldItems.length; _i++) {
        this.values_[index + newItems.length + _i] = oldItems[_i];
      }

      return res;
    }
  };

  _proto.notifyArrayChildUpdate_ = function notifyArrayChildUpdate_(index, newValue, oldValue) {
    var notifySpy = !this.owned_ && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      type: UPDATE,
      debugObjectName: this.atom_.name_,
      index: index,
      newValue: newValue,
      oldValue: oldValue
    } : null; // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
    // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled

    if ( true && notifySpy) spyReportStart(change);
    this.atom_.reportChanged();
    if (notify) notifyListeners(this, change);
    if ( true && notifySpy) spyReportEnd();
  };

  _proto.notifyArraySplice_ = function notifyArraySplice_(index, added, removed) {
    var notifySpy = !this.owned_ && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: SPLICE,
      index: index,
      removed: removed,
      added: added,
      removedCount: removed.length,
      addedCount: added.length
    } : null;
    if ( true && notifySpy) spyReportStart(change);
    this.atom_.reportChanged(); // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe

    if (notify) notifyListeners(this, change);
    if ( true && notifySpy) spyReportEnd();
  };

  _proto.get_ = function get_(index) {
    if (index < this.values_.length) {
      this.atom_.reportObserved();
      return this.dehanceValue_(this.values_[index]);
    }

    console.warn( true ? "[mobx] Out of bounds read: " + index : undefined);
  };

  _proto.set_ = function set_(index, newValue) {
    var values = this.values_;

    if (index < values.length) {
      // update at index in range
      checkIfStateModificationsAreAllowed(this.atom_);
      var oldValue = values[index];

      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: UPDATE,
          object: this.proxy_,
          index: index,
          newValue: newValue
        });
        if (!change) return;
        newValue = change.newValue;
      }

      newValue = this.enhancer_(newValue, oldValue);
      var changed = newValue !== oldValue;

      if (changed) {
        values[index] = newValue;
        this.notifyArrayChildUpdate_(index, newValue, oldValue);
      }
    } else if (index === values.length) {
      // add a new item
      this.spliceWithArray_(index, 0, [newValue]);
    } else {
      // out of bounds
      die(17, index, values.length);
    }
  };

  return ObservableArrayAdministration;
}();
function createObservableArray(initialValues, enhancer, name, owned) {
  if (name === void 0) {
    name = "ObservableArray@" + getNextId();
  }

  if (owned === void 0) {
    owned = false;
  }

  assertProxies();
  var adm = new ObservableArrayAdministration(name, enhancer, owned, false);
  addHiddenFinalProp(adm.values_, $mobx, adm);
  var proxy = new Proxy(adm.values_, arrayTraps);
  adm.proxy_ = proxy;

  if (initialValues && initialValues.length) {
    var prev = allowStateChangesStart(true);
    adm.spliceWithArray_(0, 0, initialValues);
    allowStateChangesEnd(prev);
  }

  return proxy;
} // eslint-disable-next-line

var arrayExtensions = {
  clear: function clear() {
    return this.splice(0);
  },
  replace: function replace(newItems) {
    var adm = this[$mobx];
    return adm.spliceWithArray_(0, adm.values_.length, newItems);
  },
  // Used by JSON.stringify
  toJSON: function toJSON() {
    return this.slice();
  },

  /*
   * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
   * since these functions alter the inner structure of the array, the have side effects.
   * Because the have side effects, they should not be used in computed function,
   * and for that reason the do not call dependencyState.notifyObserved
   */
  splice: function splice(index, deleteCount) {
    for (var _len = arguments.length, newItems = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      newItems[_key - 2] = arguments[_key];
    }

    var adm = this[$mobx];

    switch (arguments.length) {
      case 0:
        return [];

      case 1:
        return adm.spliceWithArray_(index);

      case 2:
        return adm.spliceWithArray_(index, deleteCount);
    }

    return adm.spliceWithArray_(index, deleteCount, newItems);
  },
  spliceWithArray: function spliceWithArray(index, deleteCount, newItems) {
    return this[$mobx].spliceWithArray_(index, deleteCount, newItems);
  },
  push: function push() {
    var adm = this[$mobx];

    for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      items[_key2] = arguments[_key2];
    }

    adm.spliceWithArray_(adm.values_.length, 0, items);
    return adm.values_.length;
  },
  pop: function pop() {
    return this.splice(Math.max(this[$mobx].values_.length - 1, 0), 1)[0];
  },
  shift: function shift() {
    return this.splice(0, 1)[0];
  },
  unshift: function unshift() {
    var adm = this[$mobx];

    for (var _len3 = arguments.length, items = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      items[_key3] = arguments[_key3];
    }

    adm.spliceWithArray_(0, 0, items);
    return adm.values_.length;
  },
  reverse: function reverse() {
    // reverse by default mutates in place before returning the result
    // which makes it both a 'derivation' and a 'mutation'.
    if (globalState.trackingDerivation) {
      die(37, "reverse");
    }

    this.replace(this.slice().reverse());
    return this;
  },
  sort: function sort() {
    // sort by default mutates in place before returning the result
    // which goes against all good practices. Let's not change the array in place!
    if (globalState.trackingDerivation) {
      die(37, "sort");
    }

    var copy = this.slice();
    copy.sort.apply(copy, arguments);
    this.replace(copy);
    return this;
  },
  remove: function remove(value) {
    var adm = this[$mobx];
    var idx = adm.dehanceValues_(adm.values_).indexOf(value);

    if (idx > -1) {
      this.splice(idx, 1);
      return true;
    }

    return false;
  }
};
/**
 * Wrap function from prototype
 * Without this, everything works as well, but this works
 * faster as everything works on unproxied values
 */

addArrayExtension("concat", simpleFunc);
addArrayExtension("flat", simpleFunc);
addArrayExtension("includes", simpleFunc);
addArrayExtension("indexOf", simpleFunc);
addArrayExtension("join", simpleFunc);
addArrayExtension("lastIndexOf", simpleFunc);
addArrayExtension("slice", simpleFunc);
addArrayExtension("toString", simpleFunc);
addArrayExtension("toLocaleString", simpleFunc); // map

addArrayExtension("every", mapLikeFunc);
addArrayExtension("filter", mapLikeFunc);
addArrayExtension("find", mapLikeFunc);
addArrayExtension("findIndex", mapLikeFunc);
addArrayExtension("flatMap", mapLikeFunc);
addArrayExtension("forEach", mapLikeFunc);
addArrayExtension("map", mapLikeFunc);
addArrayExtension("some", mapLikeFunc); // reduce

addArrayExtension("reduce", reduceLikeFunc);
addArrayExtension("reduceRight", reduceLikeFunc);

function addArrayExtension(funcName, funcFactory) {
  if (typeof Array.prototype[funcName] === "function") {
    arrayExtensions[funcName] = funcFactory(funcName);
  }
} // Report and delegate to dehanced array


function simpleFunc(funcName) {
  return function () {
    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
} // Make sure callbacks recieve correct array arg #2326


function mapLikeFunc(funcName) {
  return function (callback, thisArg) {
    var _this2 = this;

    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName](function (element, index) {
      return callback.call(thisArg, element, index, _this2);
    });
  };
} // Make sure callbacks recieve correct array arg #2326


function reduceLikeFunc(funcName) {
  return function () {
    var _this3 = this;

    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_); // #2432 - reduce behavior depends on arguments.length

    var callback = arguments[0];

    arguments[0] = function (accumulator, currentValue, index) {
      return callback(accumulator, currentValue, index, _this3);
    };

    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
}

var isObservableArrayAdministration = /*#__PURE__*/createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
  return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
}

var _Symbol$iterator, _Symbol$toStringTag;
var ObservableMapMarker = {};
var ADD = "add";
var DELETE = "delete"; // just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
// But: https://github.com/mobxjs/mobx/issues/1556

_Symbol$iterator = Symbol.iterator;
_Symbol$toStringTag = Symbol.toStringTag;
var ObservableMap = /*#__PURE__*/function () {
  // hasMap, not hashMap >-).
  function ObservableMap(initialData, enhancer_, name_) {
    if (enhancer_ === void 0) {
      enhancer_ = deepEnhancer;
    }

    if (name_ === void 0) {
      name_ = "ObservableMap@" + getNextId();
    }

    this.enhancer_ = void 0;
    this.name_ = void 0;
    this[$mobx] = ObservableMapMarker;
    this.data_ = void 0;
    this.hasMap_ = void 0;
    this.keysAtom_ = void 0;
    this.interceptors_ = void 0;
    this.changeListeners_ = void 0;
    this.dehancer = void 0;
    this.enhancer_ = enhancer_;
    this.name_ = name_;

    if (!isFunction(Map)) {
      die(18);
    }

    this.keysAtom_ = createAtom(this.name_ + ".keys()");
    this.data_ = new Map();
    this.hasMap_ = new Map();
    this.merge(initialData);
  }

  var _proto = ObservableMap.prototype;

  _proto.has_ = function has_(key) {
    return this.data_.has(key);
  };

  _proto.has = function has(key) {
    var _this = this;

    if (!globalState.trackingDerivation) return this.has_(key);
    var entry = this.hasMap_.get(key);

    if (!entry) {
      var newEntry = entry = new ObservableValue(this.has_(key), referenceEnhancer, this.name_ + "." + stringifyKey(key) + "?", false);
      this.hasMap_.set(key, newEntry);
      onBecomeUnobserved(newEntry, function () {
        return _this.hasMap_["delete"](key);
      });
    }

    return entry.get();
  };

  _proto.set = function set(key, value) {
    var hasKey = this.has_(key);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: hasKey ? UPDATE : ADD,
        object: this,
        newValue: value,
        name: key
      });
      if (!change) return this;
      value = change.newValue;
    }

    if (hasKey) {
      this.updateValue_(key, value);
    } else {
      this.addValue_(key, value);
    }

    return this;
  };

  _proto["delete"] = function _delete(key) {
    var _this2 = this;

    checkIfStateModificationsAreAllowed(this.keysAtom_);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: DELETE,
        object: this,
        name: key
      });
      if (!change) return false;
    }

    if (this.has_(key)) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);

      var _change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: DELETE,
        object: this,
        oldValue: this.data_.get(key).value_,
        name: key
      } : null;

      if ( true && notifySpy) spyReportStart(_change);
      transaction(function () {
        _this2.keysAtom_.reportChanged();

        _this2.updateHasMapEntry_(key, false);

        var observable = _this2.data_.get(key);

        observable.setNewValue_(undefined);

        _this2.data_["delete"](key);
      });
      if (notify) notifyListeners(this, _change);
      if ( true && notifySpy) spyReportEnd();
      return true;
    }

    return false;
  };

  _proto.updateHasMapEntry_ = function updateHasMapEntry_(key, value) {
    var entry = this.hasMap_.get(key);

    if (entry) {
      entry.setNewValue_(value);
    }
  };

  _proto.updateValue_ = function updateValue_(key, newValue) {
    var observable = this.data_.get(key);
    newValue = observable.prepareNewValue_(newValue);

    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: UPDATE,
        object: this,
        oldValue: observable.value_,
        name: key,
        newValue: newValue
      } : null;
      if ( true && notifySpy) spyReportStart(change);
      observable.setNewValue_(newValue);
      if (notify) notifyListeners(this, change);
      if ( true && notifySpy) spyReportEnd();
    }
  };

  _proto.addValue_ = function addValue_(key, newValue) {
    var _this3 = this;

    checkIfStateModificationsAreAllowed(this.keysAtom_);
    transaction(function () {
      var observable = new ObservableValue(newValue, _this3.enhancer_, _this3.name_ + "." + stringifyKey(key), false);

      _this3.data_.set(key, observable);

      newValue = observable.value_; // value might have been changed

      _this3.updateHasMapEntry_(key, true);

      _this3.keysAtom_.reportChanged();
    });
    var notifySpy = isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: ADD,
      object: this,
      name: key,
      newValue: newValue
    } : null;
    if ( true && notifySpy) spyReportStart(change);
    if (notify) notifyListeners(this, change);
    if ( true && notifySpy) spyReportEnd();
  };

  _proto.get = function get(key) {
    if (this.has(key)) return this.dehanceValue_(this.data_.get(key).get());
    return this.dehanceValue_(undefined);
  };

  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }

    return value;
  };

  _proto.keys = function keys() {
    this.keysAtom_.reportObserved();
    return this.data_.keys();
  };

  _proto.values = function values() {
    var self = this;
    var keys = this.keys();
    return makeIterable({
      next: function next() {
        var _keys$next = keys.next(),
            done = _keys$next.done,
            value = _keys$next.value;

        return {
          done: done,
          value: done ? undefined : self.get(value)
        };
      }
    });
  };

  _proto.entries = function entries() {
    var self = this;
    var keys = this.keys();
    return makeIterable({
      next: function next() {
        var _keys$next2 = keys.next(),
            done = _keys$next2.done,
            value = _keys$next2.value;

        return {
          done: done,
          value: done ? undefined : [value, self.get(value)]
        };
      }
    });
  };

  _proto[_Symbol$iterator] = function () {
    return this.entries();
  };

  _proto.forEach = function forEach(callback, thisArg) {
    for (var _iterator = _createForOfIteratorHelperLoose(this), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
          key = _step$value[0],
          value = _step$value[1];
      callback.call(thisArg, value, key, this);
    }
  }
  /** Merge another object into this object, returns this. */
  ;

  _proto.merge = function merge(other) {
    var _this4 = this;

    if (isObservableMap(other)) {
      other = new Map(other);
    }

    transaction(function () {
      if (isPlainObject(other)) getPlainObjectKeys(other).forEach(function (key) {
        return _this4.set(key, other[key]);
      });else if (Array.isArray(other)) other.forEach(function (_ref) {
        var key = _ref[0],
            value = _ref[1];
        return _this4.set(key, value);
      });else if (isES6Map(other)) {
        if (other.constructor !== Map) die(19, other);
        other.forEach(function (value, key) {
          return _this4.set(key, value);
        });
      } else if (other !== null && other !== undefined) die(20, other);
    });
    return this;
  };

  _proto.clear = function clear() {
    var _this5 = this;

    transaction(function () {
      untracked(function () {
        for (var _iterator2 = _createForOfIteratorHelperLoose(_this5.keys()), _step2; !(_step2 = _iterator2()).done;) {
          var key = _step2.value;

          _this5["delete"](key);
        }
      });
    });
  };

  _proto.replace = function replace(values) {
    var _this6 = this;

    // Implementation requirements:
    // - respect ordering of replacement map
    // - allow interceptors to run and potentially prevent individual operations
    // - don't recreate observables that already exist in original map (so we don't destroy existing subscriptions)
    // - don't _keysAtom.reportChanged if the keys of resulting map are indentical (order matters!)
    // - note that result map may differ from replacement map due to the interceptors
    transaction(function () {
      // Convert to map so we can do quick key lookups
      var replacementMap = convertToMap(values);
      var orderedData = new Map(); // Used for optimization

      var keysReportChangedCalled = false; // Delete keys that don't exist in replacement map
      // if the key deletion is prevented by interceptor
      // add entry at the beginning of the result map

      for (var _iterator3 = _createForOfIteratorHelperLoose(_this6.data_.keys()), _step3; !(_step3 = _iterator3()).done;) {
        var key = _step3.value;

        // Concurrently iterating/deleting keys
        // iterator should handle this correctly
        if (!replacementMap.has(key)) {
          var deleted = _this6["delete"](key); // Was the key removed?


          if (deleted) {
            // _keysAtom.reportChanged() was already called
            keysReportChangedCalled = true;
          } else {
            // Delete prevented by interceptor
            var value = _this6.data_.get(key);

            orderedData.set(key, value);
          }
        }
      } // Merge entries


      for (var _iterator4 = _createForOfIteratorHelperLoose(replacementMap.entries()), _step4; !(_step4 = _iterator4()).done;) {
        var _step4$value = _step4.value,
            _key = _step4$value[0],
            _value = _step4$value[1];

        // We will want to know whether a new key is added
        var keyExisted = _this6.data_.has(_key); // Add or update value


        _this6.set(_key, _value); // The addition could have been prevent by interceptor


        if (_this6.data_.has(_key)) {
          // The update could have been prevented by interceptor
          // and also we want to preserve existing values
          // so use value from _data map (instead of replacement map)
          var _value2 = _this6.data_.get(_key);

          orderedData.set(_key, _value2); // Was a new key added?

          if (!keyExisted) {
            // _keysAtom.reportChanged() was already called
            keysReportChangedCalled = true;
          }
        }
      } // Check for possible key order change


      if (!keysReportChangedCalled) {
        if (_this6.data_.size !== orderedData.size) {
          // If size differs, keys are definitely modified
          _this6.keysAtom_.reportChanged();
        } else {
          var iter1 = _this6.data_.keys();

          var iter2 = orderedData.keys();
          var next1 = iter1.next();
          var next2 = iter2.next();

          while (!next1.done) {
            if (next1.value !== next2.value) {
              _this6.keysAtom_.reportChanged();

              break;
            }

            next1 = iter1.next();
            next2 = iter2.next();
          }
        }
      } // Use correctly ordered map


      _this6.data_ = orderedData;
    });
    return this;
  };

  _proto.toString = function toString() {
    return "[object ObservableMap]";
  };

  _proto.toJSON = function toJSON() {
    return Array.from(this);
  };

  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */
  _proto.observe_ = function observe_(listener, fireImmediately) {
    if ( true && fireImmediately === true) die("`observe` doesn't support fireImmediately=true in combination with maps.");
    return registerListener(this, listener);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _createClass(ObservableMap, [{
    key: "size",
    get: function get() {
      this.keysAtom_.reportObserved();
      return this.data_.size;
    }
  }, {
    key: _Symbol$toStringTag,
    get: function get() {
      return "Map";
    }
  }]);

  return ObservableMap;
}(); // eslint-disable-next-line

var isObservableMap = /*#__PURE__*/createInstanceofPredicate("ObservableMap", ObservableMap);

function convertToMap(dataStructure) {
  if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
    return dataStructure;
  } else if (Array.isArray(dataStructure)) {
    return new Map(dataStructure);
  } else if (isPlainObject(dataStructure)) {
    var map = new Map();

    for (var key in dataStructure) {
      map.set(key, dataStructure[key]);
    }

    return map;
  } else {
    return die(21, dataStructure);
  }
}

var _Symbol$iterator$1, _Symbol$toStringTag$1;
var ObservableSetMarker = {};
_Symbol$iterator$1 = Symbol.iterator;
_Symbol$toStringTag$1 = Symbol.toStringTag;
var ObservableSet = /*#__PURE__*/function () {
  function ObservableSet(initialData, enhancer, name_) {
    if (enhancer === void 0) {
      enhancer = deepEnhancer;
    }

    if (name_ === void 0) {
      name_ = "ObservableSet@" + getNextId();
    }

    this.name_ = void 0;
    this[$mobx] = ObservableSetMarker;
    this.data_ = new Set();
    this.atom_ = void 0;
    this.changeListeners_ = void 0;
    this.interceptors_ = void 0;
    this.dehancer = void 0;
    this.enhancer_ = void 0;
    this.name_ = name_;

    if (!isFunction(Set)) {
      die(22);
    }

    this.atom_ = createAtom(this.name_);

    this.enhancer_ = function (newV, oldV) {
      return enhancer(newV, oldV, name_);
    };

    if (initialData) {
      this.replace(initialData);
    }
  }

  var _proto = ObservableSet.prototype;

  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }

    return value;
  };

  _proto.clear = function clear() {
    var _this = this;

    transaction(function () {
      untracked(function () {
        for (var _iterator = _createForOfIteratorHelperLoose(_this.data_.values()), _step; !(_step = _iterator()).done;) {
          var value = _step.value;

          _this["delete"](value);
        }
      });
    });
  };

  _proto.forEach = function forEach(callbackFn, thisArg) {
    for (var _iterator2 = _createForOfIteratorHelperLoose(this), _step2; !(_step2 = _iterator2()).done;) {
      var value = _step2.value;
      callbackFn.call(thisArg, value, value, this);
    }
  };

  _proto.add = function add(value) {
    var _this2 = this;

    checkIfStateModificationsAreAllowed(this.atom_);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: ADD,
        object: this,
        newValue: value
      });
      if (!change) return this; // ideally, value = change.value would be done here, so that values can be
      // changed by interceptor. Same applies for other Set and Map api's.
    }

    if (!this.has(value)) {
      transaction(function () {
        _this2.data_.add(_this2.enhancer_(value, undefined));

        _this2.atom_.reportChanged();
      });
      var notifySpy =  true && isSpyEnabled();
      var notify = hasListeners(this);

      var _change = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: ADD,
        object: this,
        newValue: value
      } : null;

      if (notifySpy && "development" !== "production") spyReportStart(_change);
      if (notify) notifyListeners(this, _change);
      if (notifySpy && "development" !== "production") spyReportEnd();
    }

    return this;
  };

  _proto["delete"] = function _delete(value) {
    var _this3 = this;

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: DELETE,
        object: this,
        oldValue: value
      });
      if (!change) return false;
    }

    if (this.has(value)) {
      var notifySpy =  true && isSpyEnabled();
      var notify = hasListeners(this);

      var _change2 = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: DELETE,
        object: this,
        oldValue: value
      } : null;

      if (notifySpy && "development" !== "production") spyReportStart(_change2);
      transaction(function () {
        _this3.atom_.reportChanged();

        _this3.data_["delete"](value);
      });
      if (notify) notifyListeners(this, _change2);
      if (notifySpy && "development" !== "production") spyReportEnd();
      return true;
    }

    return false;
  };

  _proto.has = function has(value) {
    this.atom_.reportObserved();
    return this.data_.has(this.dehanceValue_(value));
  };

  _proto.entries = function entries() {
    var nextIndex = 0;
    var keys = Array.from(this.keys());
    var values = Array.from(this.values());
    return makeIterable({
      next: function next() {
        var index = nextIndex;
        nextIndex += 1;
        return index < values.length ? {
          value: [keys[index], values[index]],
          done: false
        } : {
          done: true
        };
      }
    });
  };

  _proto.keys = function keys() {
    return this.values();
  };

  _proto.values = function values() {
    this.atom_.reportObserved();
    var self = this;
    var nextIndex = 0;
    var observableValues = Array.from(this.data_.values());
    return makeIterable({
      next: function next() {
        return nextIndex < observableValues.length ? {
          value: self.dehanceValue_(observableValues[nextIndex++]),
          done: false
        } : {
          done: true
        };
      }
    });
  };

  _proto.replace = function replace(other) {
    var _this4 = this;

    if (isObservableSet(other)) {
      other = new Set(other);
    }

    transaction(function () {
      if (Array.isArray(other)) {
        _this4.clear();

        other.forEach(function (value) {
          return _this4.add(value);
        });
      } else if (isES6Set(other)) {
        _this4.clear();

        other.forEach(function (value) {
          return _this4.add(value);
        });
      } else if (other !== null && other !== undefined) {
        die("Cannot initialize set from " + other);
      }
    });
    return this;
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    // ... 'fireImmediately' could also be true?
    if ( true && fireImmediately === true) die("`observe` doesn't support fireImmediately=true in combination with sets.");
    return registerListener(this, listener);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.toJSON = function toJSON() {
    return Array.from(this);
  };

  _proto.toString = function toString() {
    return "[object ObservableSet]";
  };

  _proto[_Symbol$iterator$1] = function () {
    return this.values();
  };

  _createClass(ObservableSet, [{
    key: "size",
    get: function get() {
      this.atom_.reportObserved();
      return this.data_.size;
    }
  }, {
    key: _Symbol$toStringTag$1,
    get: function get() {
      return "Set";
    }
  }]);

  return ObservableSet;
}(); // eslint-disable-next-line

var isObservableSet = /*#__PURE__*/createInstanceofPredicate("ObservableSet", ObservableSet);

var REMOVE = "remove";
var ObservableObjectAdministration = /*#__PURE__*/function () {
  function ObservableObjectAdministration(target_, values_, name_, defaultEnhancer_) {
    if (values_ === void 0) {
      values_ = new Map();
    }

    this.target_ = void 0;
    this.values_ = void 0;
    this.name_ = void 0;
    this.defaultEnhancer_ = void 0;
    this.keysAtom_ = void 0;
    this.changeListeners_ = void 0;
    this.interceptors_ = void 0;
    this.proxy_ = void 0;
    this.pendingKeys_ = void 0;
    this.keysValue_ = [];
    this.isStaledKeysValue_ = true;
    this.target_ = target_;
    this.values_ = values_;
    this.name_ = name_;
    this.defaultEnhancer_ = defaultEnhancer_;
    this.keysAtom_ = new Atom(name_ + ".keys");
  }

  var _proto = ObservableObjectAdministration.prototype;

  _proto.read_ = function read_(key) {
    return this.values_.get(key).get();
  };

  _proto.write_ = function write_(key, newValue) {
    var instance = this.target_;
    var observable = this.values_.get(key);

    if (observable instanceof ComputedValue) {
      observable.set(newValue);
      return;
    } // intercept


    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: UPDATE,
        object: this.proxy_ || instance,
        name: key,
        newValue: newValue
      });
      if (!change) return;
      newValue = change.newValue;
    }

    newValue = observable.prepareNewValue_(newValue); // notify spy & observers

    if (newValue !== globalState.UNCHANGED) {
      var notify = hasListeners(this);
      var notifySpy =  true && isSpyEnabled();

      var _change = notify || notifySpy ? {
        type: UPDATE,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || instance,
        oldValue: observable.value_,
        name: key,
        newValue: newValue
      } : null;

      if ( true && notifySpy) spyReportStart(_change);
      observable.setNewValue_(newValue);
      if (notify) notifyListeners(this, _change);
      if ( true && notifySpy) spyReportEnd();
    }
  };

  _proto.has_ = function has_(key) {
    var map = this.pendingKeys_ || (this.pendingKeys_ = new Map());
    var entry = map.get(key);
    if (entry) return entry.get();else {
      var exists = !!this.values_.get(key); // Possible optimization: Don't have a separate map for non existing keys,
      // but store them in the values map instead, using a special symbol to denote "not existing"

      entry = new ObservableValue(exists, referenceEnhancer, this.name_ + "." + stringifyKey(key) + "?", false);
      map.set(key, entry);
      return entry.get(); // read to subscribe
    }
  };

  _proto.addObservableProp_ = function addObservableProp_(propName, newValue, enhancer) {
    if (enhancer === void 0) {
      enhancer = this.defaultEnhancer_;
    }

    var target = this.target_;
    if (true) assertPropertyConfigurable(target, propName);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy_ || target,
        name: propName,
        type: ADD,
        newValue: newValue
      });
      if (!change) return;
      newValue = change.newValue;
    }

    var observable = new ObservableValue(newValue, enhancer, this.name_ + "." + stringifyKey(propName), false);
    this.values_.set(propName, observable);
    newValue = observable.value_; // observableValue might have changed it

    defineProperty(target, propName, generateObservablePropConfig(propName));
    this.notifyPropertyAddition_(propName, newValue);
  };

  _proto.addComputedProp_ = function addComputedProp_(propertyOwner, // where is the property declared?
  propName, options) {
    var target = this.target_;
    options.name = options.name || this.name_ + "." + stringifyKey(propName);
    options.context = this.proxy_ || target;
    this.values_.set(propName, new ComputedValue(options)); // Doesn't seem we need this condition:
    // if (propertyOwner === target || isPropertyConfigurable(propertyOwner, propName))

    defineProperty(propertyOwner, propName, generateComputedPropConfig(propName));
  };

  _proto.remove_ = function remove_(key) {
    if (!this.values_.has(key)) return;
    var target = this.target_;

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy_ || target,
        name: key,
        type: REMOVE
      });
      if (!change) return;
    }

    try {
      startBatch();
      var notify = hasListeners(this);
      var notifySpy =  true && isSpyEnabled();
      var oldObservable = this.values_.get(key);
      var oldValue = oldObservable && oldObservable.get();
      oldObservable && oldObservable.set(undefined); // notify key and keyset listeners

      this.reportKeysChanged();
      this.values_["delete"](key);

      if (this.pendingKeys_) {
        var entry = this.pendingKeys_.get(key);
        if (entry) entry.set(false);
      } // delete the prop


      delete this.target_[key];

      var _change2 = notify || notifySpy ? {
        type: REMOVE,
        observableKind: "object",
        object: this.proxy_ || target,
        debugObjectName: this.name_,
        oldValue: oldValue,
        name: key
      } : null;

      if ( true && notifySpy) spyReportStart(_change2);
      if (notify) notifyListeners(this, _change2);
      if ( true && notifySpy) spyReportEnd();
    } finally {
      endBatch();
    }
  }
  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */
  ;

  _proto.observe_ = function observe_(callback, fireImmediately) {
    if ( true && fireImmediately === true) die("`observe` doesn't support the fire immediately property for observable objects.");
    return registerListener(this, callback);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.notifyPropertyAddition_ = function notifyPropertyAddition_(key, newValue) {
    var notify = hasListeners(this);
    var notifySpy =  true && isSpyEnabled();
    var change = notify || notifySpy ? {
      type: ADD,
      observableKind: "object",
      debugObjectName: this.name_,
      object: this.proxy_ || this.target_,
      name: key,
      newValue: newValue
    } : null;
    if ( true && notifySpy) spyReportStart(change);
    if (notify) notifyListeners(this, change);
    if ( true && notifySpy) spyReportEnd();

    if (this.pendingKeys_) {
      var entry = this.pendingKeys_.get(key);
      if (entry) entry.set(true);
    }

    this.reportKeysChanged();
  };

  _proto.getKeys_ = function getKeys_() {
    this.keysAtom_.reportObserved();

    if (!this.isStaledKeysValue_) {
      return this.keysValue_;
    } // return Reflect.ownKeys(this.values) as any


    this.keysValue_ = [];

    for (var _iterator = _createForOfIteratorHelperLoose(this.values_), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
          key = _step$value[0],
          value = _step$value[1];
      if (value instanceof ObservableValue) this.keysValue_.push(key);
    }

    if (true) Object.freeze(this.keysValue_);
    this.isStaledKeysValue_ = false;
    return this.keysValue_;
  };

  _proto.reportKeysChanged = function reportKeysChanged() {
    this.isStaledKeysValue_ = true;
    this.keysAtom_.reportChanged();
  };

  return ObservableObjectAdministration;
}();
function asObservableObject(target, name, defaultEnhancer) {
  if (name === void 0) {
    name = "";
  }

  if (defaultEnhancer === void 0) {
    defaultEnhancer = deepEnhancer;
  }

  if (hasProp(target, $mobx)) return target[$mobx];
  if ( true && !Object.isExtensible(target)) die("Cannot make the designated object observable; it is not extensible");

  if (!name) {
    if (isPlainObject(target)) {
      name = "ObservableObject@" + getNextId();
    } else {
      name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
    }
  }

  var adm = new ObservableObjectAdministration(target, new Map(), stringifyKey(name), defaultEnhancer);
  addHiddenProp(target, $mobx, adm);
  return adm;
}
var observablePropertyConfigs = /*#__PURE__*/Object.create(null);
var computedPropertyConfigs = /*#__PURE__*/Object.create(null);
function generateObservablePropConfig(propName) {
  return observablePropertyConfigs[propName] || (observablePropertyConfigs[propName] = {
    configurable: true,
    enumerable: true,
    get: function get() {
      return this[$mobx].read_(propName);
    },
    set: function set(v) {
      this[$mobx].write_(propName, v);
    }
  });
}
function generateComputedPropConfig(propName) {
  return computedPropertyConfigs[propName] || (computedPropertyConfigs[propName] = {
    configurable: true,
    enumerable: false,
    get: function get() {
      return this[$mobx].read_(propName);
    },
    set: function set(v) {
      this[$mobx].write_(propName, v);
    }
  });
}
var isObservableObjectAdministration = /*#__PURE__*/createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function isObservableObject(thing) {
  if (isObject(thing)) {
    return isObservableObjectAdministration(thing[$mobx]);
  }

  return false;
}

/**
 * This array buffer contains two lists of properties, so that all arrays
 * can recycle their property definitions, which significantly improves performance of creating
 * properties on the fly.
 */

var OBSERVABLE_ARRAY_BUFFER_SIZE = 0; // Typescript workaround to make sure ObservableArray extends Array

var StubArray = function StubArray() {};

function inherit(ctor, proto) {
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ctor.prototype, proto);
  } else if (ctor.prototype.__proto__ !== undefined) {
    ctor.prototype.__proto__ = proto;
  } else {
    ctor.prototype = proto;
  }
}

inherit(StubArray, Array.prototype); // Weex proto freeze protection was here,
// but it is unclear why the hack is need as MobX never changed the prototype
// anyway, so removed it in V6

var LegacyObservableArray = /*#__PURE__*/function (_StubArray) {
  _inheritsLoose(LegacyObservableArray, _StubArray);

  function LegacyObservableArray(initialValues, enhancer, name, owned) {
    var _this;

    if (name === void 0) {
      name = "ObservableArray@" + getNextId();
    }

    if (owned === void 0) {
      owned = false;
    }

    _this = _StubArray.call(this) || this;
    var adm = new ObservableArrayAdministration(name, enhancer, owned, true);
    adm.proxy_ = _assertThisInitialized(_this);
    addHiddenFinalProp(_assertThisInitialized(_this), $mobx, adm);

    if (initialValues && initialValues.length) {
      var prev = allowStateChangesStart(true); // @ts-ignore

      _this.spliceWithArray(0, 0, initialValues);

      allowStateChangesEnd(prev);
    }

    return _this;
  }

  var _proto = LegacyObservableArray.prototype;

  _proto.concat = function concat() {
    this[$mobx].atom_.reportObserved();

    for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
      arrays[_key] = arguments[_key];
    }

    return Array.prototype.concat.apply(this.slice(), //@ts-ignore
    arrays.map(function (a) {
      return isObservableArray(a) ? a.slice() : a;
    }));
  };

  _proto[Symbol.iterator] = function () {
    var self = this;
    var nextIndex = 0;
    return makeIterable({
      next: function next() {
        // @ts-ignore
        return nextIndex < self.length ? {
          value: self[nextIndex++],
          done: false
        } : {
          done: true,
          value: undefined
        };
      }
    });
  };

  _createClass(LegacyObservableArray, [{
    key: "length",
    get: function get() {
      return this[$mobx].getArrayLength_();
    },
    set: function set(newLength) {
      this[$mobx].setArrayLength_(newLength);
    }
  }, {
    key: Symbol.toStringTag,
    get: function get() {
      return "Array";
    }
  }]);

  return LegacyObservableArray;
}(StubArray);

Object.entries(arrayExtensions).forEach(function (_ref) {
  var prop = _ref[0],
      fn = _ref[1];
  if (prop !== "concat") addHiddenProp(LegacyObservableArray.prototype, prop, fn);
});

function createArrayEntryDescriptor(index) {
  return {
    enumerable: false,
    configurable: true,
    get: function get() {
      return this[$mobx].get_(index);
    },
    set: function set(value) {
      this[$mobx].set_(index, value);
    }
  };
}

function createArrayBufferItem(index) {
  defineProperty(LegacyObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}

function reserveArrayBuffer(max) {
  if (max > OBSERVABLE_ARRAY_BUFFER_SIZE) {
    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max + 100; index++) {
      createArrayBufferItem(index);
    }

    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
  }
}
reserveArrayBuffer(1000);
function createLegacyArray(initialValues, enhancer, name) {
  return new LegacyObservableArray(initialValues, enhancer, name);
}

function getAtom(thing, property) {
  if (typeof thing === "object" && thing !== null) {
    if (isObservableArray(thing)) {
      if (property !== undefined) die(23);
      return thing[$mobx].atom_;
    }

    if (isObservableSet(thing)) {
      return thing[$mobx];
    }

    if (isObservableMap(thing)) {
      if (property === undefined) return thing.keysAtom_;
      var observable = thing.data_.get(property) || thing.hasMap_.get(property);
      if (!observable) die(25, property, getDebugName(thing));
      return observable;
    }

    if (isObservableObject(thing)) {
      if (!property) return die(26);

      var _observable = thing[$mobx].values_.get(property);

      if (!_observable) die(27, property, getDebugName(thing));
      return _observable;
    }

    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
      return thing;
    }
  } else if (isFunction(thing)) {
    if (isReaction(thing[$mobx])) {
      // disposer function
      return thing[$mobx];
    }
  }

  die(28);
}
function getAdministration(thing, property) {
  if (!thing) die(29);
  if (property !== undefined) return getAdministration(getAtom(thing, property));
  if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) return thing;
  if (isObservableMap(thing) || isObservableSet(thing)) return thing;
  if (thing[$mobx]) return thing[$mobx];
  die(24, thing);
}
function getDebugName(thing, property) {
  var named;
  if (property !== undefined) named = getAtom(thing, property);else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing)) named = getAdministration(thing);else named = getAtom(thing); // valid for arrays as well

  return named.name_;
}

var toString = objectPrototype.toString;
function deepEqual(a, b, depth) {
  if (depth === void 0) {
    depth = -1;
  }

  return eq(a, b, depth);
} // Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.

function eq(a, b, depth, aStack, bStack) {
  // Identical objects are equal. `0 === -0`, but they aren't identical.
  // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
  if (a === b) return a !== 0 || 1 / a === 1 / b; // `null` or `undefined` only equal to itself (strict comparison).

  if (a == null || b == null) return false; // `NaN`s are equivalent, but non-reflexive.

  if (a !== a) return b !== b; // Exhaust primitive checks

  var type = typeof a;
  if (!isFunction(type) && type !== "object" && typeof b != "object") return false; // Compare `[[Class]]` names.

  var className = toString.call(a);
  if (className !== toString.call(b)) return false;

  switch (className) {
    // Strings, numbers, regular expressions, dates, and booleans are compared by value.
    case "[object RegExp]": // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')

    case "[object String]":
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return "" + a === "" + b;

    case "[object Number]":
      // `NaN`s are equivalent, but non-reflexive.
      // Object(NaN) is equivalent to NaN.
      if (+a !== +a) return +b !== +b; // An `egal` comparison is performed for other numeric values.

      return +a === 0 ? 1 / +a === 1 / b : +a === +b;

    case "[object Date]":
    case "[object Boolean]":
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a === +b;

    case "[object Symbol]":
      return typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b);

    case "[object Map]":
    case "[object Set]":
      // Maps and Sets are unwrapped to arrays of entry-pairs, adding an incidental level.
      // Hide this extra level by increasing the depth.
      if (depth >= 0) {
        depth++;
      }

      break;
  } // Unwrap any wrapped objects.


  a = unwrap(a);
  b = unwrap(b);
  var areArrays = className === "[object Array]";

  if (!areArrays) {
    if (typeof a != "object" || typeof b != "object") return false; // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.

    var aCtor = a.constructor,
        bCtor = b.constructor;

    if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) {
      return false;
    }
  }

  if (depth === 0) {
    return false;
  } else if (depth < 0) {
    depth = -1;
  } // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
  // Initializing stack of traversed objects.
  // It's done here since we only need them for objects and arrays comparison.


  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;

  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) return bStack[length] === b;
  } // Add the first object to the stack of traversed objects.


  aStack.push(a);
  bStack.push(b); // Recursively compare objects and arrays.

  if (areArrays) {
    // Compare array lengths to determine if a deep comparison is necessary.
    length = a.length;
    if (length !== b.length) return false; // Deep compare the contents, ignoring non-numeric properties.

    while (length--) {
      if (!eq(a[length], b[length], depth - 1, aStack, bStack)) return false;
    }
  } else {
    // Deep compare objects.
    var keys = Object.keys(a);
    var key;
    length = keys.length; // Ensure that both objects contain the same number of properties before comparing deep equality.

    if (Object.keys(b).length !== length) return false;

    while (length--) {
      // Deep compare each member
      key = keys[length];
      if (!(hasProp(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack))) return false;
    }
  } // Remove the first object from the stack of traversed objects.


  aStack.pop();
  bStack.pop();
  return true;
}

function unwrap(a) {
  if (isObservableArray(a)) return a.slice();
  if (isES6Map(a) || isObservableMap(a)) return Array.from(a.entries());
  if (isES6Set(a) || isObservableSet(a)) return Array.from(a.entries());
  return a;
}

function makeIterable(iterator) {
  iterator[Symbol.iterator] = getSelf;
  return iterator;
}

function getSelf() {
  return this;
}

/**
 * (c) Michel Weststrate 2015 - 2020
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
["Symbol", "Map", "Set", "Symbol"].forEach(function (m) {
  var g = getGlobal();

  if (typeof g[m] === "undefined") {
    die("MobX requires global '" + m + "' to be available or polyfilled");
  }
});

if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
  // See: https://github.com/andykog/mobx-devtools/
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: spy,
    extras: {
      getDebugName: getDebugName
    },
    $mobx: $mobx
  });
}


//# sourceMappingURL=mobx.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var D_workspace_next_study_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_workspace_next_study_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _store_TestStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/TestStore */ "./store/TestStore.ts");




var _jsxFileName = "D:\\workspace\\next-study\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(D_workspace_next_study_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _templateObject() {
  var data = Object(D_workspace_next_study_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  body {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject());
_c = GlobalStyle;
var theme = {
  colors: {
    primary: "#0070f3"
  }
};
var store = new _store_TestStore__WEBPACK_IMPORTED_MODULE_4__["default"]();
function App(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(GlobalStyle, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
      theme: theme,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}
_c3 = App;
_c2 = App;

var _c, _c2;

$RefreshReg$(_c, "GlobalStyle");
$RefreshReg$(_c2, "App");
;

var _a, _b; // Legacy CSS implementations will `eval` browser code in a Node.js context
// to extract CSS. For backwards compatibility, we need to check we're in a
// browser context before continuing.


if (typeof self !== 'undefined' && // AMP / No-JS mode does not inject these helpers:
'$RefreshHelpers$' in self) {
  var currentExports = module.__proto__.exports;
  var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null; // This cannot happen in MainTemplate because the exports mismatch between
  // templating and execution.

  self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i); // A module can be accepted automatically based on its exports, e.g. when
  // it is a Refresh Boundary.

  if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
    // Save the previous exports on update so we can compare the boundary
    // signatures.
    module.hot.dispose(function (data) {
      data.prevExports = currentExports;
    }); // Unconditionally accept an update to this module, we'll check if it's
    // still a Refresh Boundary later.

    module.hot.accept(); // This field is set when the previous version of this module was a
    // Refresh Boundary, letting us know we need to check for invalidation or
    // enqueue an update.

    if (prevExports !== null) {
      // A boundary can become ineligible if its exports are incompatible
      // with the previous exports.
      //
      // For example, if you add/remove/change exports, we'll want to
      // re-execute the importing modules, and force those components to
      // re-render. Similarly, if you convert a class component to a
      // function, we want to invalidate the boundary.
      if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
        module.hot.invalidate();
      } else {
        self.$RefreshHelpers$.scheduleUpdate();
      }
    }
  } else {
    // Since we just executed the code for the module, it's possible that the
    // new exports made it ineligible for being a boundary.
    // We only care about the case when we were _previously_ a boundary,
    // because we already accepted this update (accidental side effect).
    var isNoLongerABoundary = prevExports !== null;

    if (isNoLongerABoundary) {
      module.hot.invalidate();
    }
  }
}

var _c3;

$RefreshReg$(_c3, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./store/TestStore.ts":
/*!****************************!*\
  !*** ./store/TestStore.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_workspace_next_study_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty */ "./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var D_workspace_next_study_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_workspace_next_study_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");




var _class, _descriptor, _temp;


var TestStore = (_class = (_temp = function TestStore() {
  Object(D_workspace_next_study_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TestStore);

  Object(D_workspace_next_study_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "test", _descriptor, this);
}, _temp), _descriptor = Object(D_workspace_next_study_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__["default"])(_class.prototype, "test", [mobx__WEBPACK_IMPORTED_MODULE_3__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 'test';
  }
}), _class);
/* harmony default export */ __webpack_exports__["default"] = (TestStore);
;

var _a, _b; // Legacy CSS implementations will `eval` browser code in a Node.js context
// to extract CSS. For backwards compatibility, we need to check we're in a
// browser context before continuing.


if (typeof self !== 'undefined' && // AMP / No-JS mode does not inject these helpers:
'$RefreshHelpers$' in self) {
  var currentExports = module.__proto__.exports;
  var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null; // This cannot happen in MainTemplate because the exports mismatch between
  // templating and execution.

  self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i); // A module can be accepted automatically based on its exports, e.g. when
  // it is a Refresh Boundary.

  if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
    // Save the previous exports on update so we can compare the boundary
    // signatures.
    module.hot.dispose(function (data) {
      data.prevExports = currentExports;
    }); // Unconditionally accept an update to this module, we'll check if it's
    // still a Refresh Boundary later.

    module.hot.accept(); // This field is set when the previous version of this module was a
    // Refresh Boundary, letting us know we need to check for invalidation or
    // enqueue an update.

    if (prevExports !== null) {
      // A boundary can become ineligible if its exports are incompatible
      // with the previous exports.
      //
      // For example, if you add/remove/change exports, we'll want to
      // re-execute the importing modules, and force those components to
      // re-render. Similarly, if you convert a class component to a
      // function, we want to invalidate the boundary.
      if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
        module.hot.invalidate();
      } else {
        self.$RefreshHelpers$.scheduleUpdate();
      }
    }
  } else {
    // Since we just executed the code for the module, it's possible that the
    // new exports made it ineligible for being a boundary.
    // We only care about the case when we were _previously_ a boundary,
    // because we already accepted this update (accidental side effect).
    var isNoLongerABoundary = prevExports !== null;

    if (isNoLongerABoundary) {
      module.hot.invalidate();
    }
  }
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5pdGlhbGl6ZXJEZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngvZGlzdC9tb2J4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL1Rlc3RTdG9yZS50cyJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwidGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5Iiwic3RvcmUiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJBcHAiLCJUZXN0U3RvcmUiLCJvYnNlcnZhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsb0hBQW9ILDJCQUEyQjtBQUMvSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFxQyxnQkFBZ0IsU0FBRTtBQUNwRTtBQUNBLHdGQUF3RixhQUFhO0FBQ3JHO0FBQ0E7O0FBRUEsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsS0FBcUMsaUlBQWlJLFNBQXFCO0FBQ25NO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLGVBQWU7O0FBRWY7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FB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QUFDQTs7QUFFQSx3Q0FBd0MsU0FBUzs7QUFFakQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxVQUFVLEtBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsVUFBVSxLQUFxQztBQUMvQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxLQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZCQUE2Qjs7QUFFN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEOztBQUVyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEOztBQUU3RDtBQUNBO0FBQ0EsVUFBVSxLQUFxQztBQUMvQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHLEVBQUU7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvSEFBb0g7QUFDcEg7QUFDQSxHQUFHLEVBQUU7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVUsS0FBcUM7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRyxFQUFFO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMERBQTBEOztBQUUxRCwyQkFBMkI7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJEQUEyRDs7QUFFM0Q7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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QSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCw0RUFBNEU7QUFDNUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdILE1BQU0sS0FBcUM7QUFDM0M7QUFDQSxnREFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QjtBQUM3QixLQUFLO0FBQ0w7QUFDQTtBQUNBLDBEQUEwRDs7QUFFMUQsNENBQTRDOzs7QUFHNUM7QUFDQTtBQUNBLHNDQUFzQztBQUN0Qzs7QUFFQTtBQUNBLE9BQU87QUFDUCxvQkFBb0I7QUFDcEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNILFFBQVEsS0FBcUM7QUFDN0M7QUFDQSxHQUFHLFVBQVUsSUFBcUM7QUFDbEQ7QUFDQTs7QUFFQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtRkFBbUY7QUFDbkY7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxLQUFxQzs7QUFFN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlHQUF5RztBQUN6Rzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxpQkFBaUI7O0FBRWpCLCtDQUErQzs7QUFFL0M7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBOztBQUVBO0FBQ0EsTUFBTSxLQUF3QyxFQUFFLEVBQXFEO0FBQ3JHOztBQUVBLHFFQUFxRSxhQUFhO0FBQ2xGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLGlFQUFpRTs7QUFFakU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0MsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxRQUFRLEtBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEMsT0FBTztBQUNuRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsT0FBTztBQUM5QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7O0FBRUEsOElBQThJOztBQUU5STtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7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ZUFBZTtBQUMxRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsMkVBQTJFLGVBQWU7QUFDMUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qzs7QUFFdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUF5RDs7QUFFekQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUCxVQUFVLEtBQXFDO0FBQy9DO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQSxVQUFVLEtBQXFDO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLFVBQVUsS0FBcUM7QUFDL0M7QUFDQTtBQUNBLFVBQVUsS0FBcUM7QUFDL0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQ0FBbUM7O0FBRW5DOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxRQUFRLEtBQXFDO0FBQzdDO0FBQ0EsUUFBUSxLQUFxQztBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFD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O0FBQ1A7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixLQUFxQztBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQLHVCQUF1QixhQUFvQjtBQUMzQztBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsdUJBQXVCLGFBQW9CO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUMsR0FBRzs7QUFFSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FB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QWQ7QUFDZSxtQkFBd0M7QUFBQSxNQUExQkMsU0FBMEIsUUFBMUJBLFNBQTBCO0FBQUEsTUFBZkMsU0FBZSxRQUFmQSxTQUFlO0FBQ25ELHNCQUNJO0FBQUEsNEJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURBLElBQ0EsQ0FEQSxlQUVBO0FBQWUsV0FBSyxFQUFwQjtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRkEsSUFFQSxDQUZBO0FBQUEsYUFESixJQUNJLENBREo7QUFRSDtNQVRjLEc7TUFBU0MsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQnhCO0lBRU1DLFM7Ozs7MkxBQ0RDLCtDOzs7OztXQUF5QixNOzs7QUFHOUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jOTQzNmEzMTQyOGI3ZTNmM2QxOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5LCBkZWNvcmF0b3JzLCBkZXNjcmlwdG9yLCBjb250ZXh0KSB7XG4gIHZhciBkZXNjID0ge307XG4gIE9iamVjdC5rZXlzKGRlc2NyaXB0b3IpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGRlc2Nba2V5XSA9IGRlc2NyaXB0b3Jba2V5XTtcbiAgfSk7XG4gIGRlc2MuZW51bWVyYWJsZSA9ICEhZGVzYy5lbnVtZXJhYmxlO1xuICBkZXNjLmNvbmZpZ3VyYWJsZSA9ICEhZGVzYy5jb25maWd1cmFibGU7XG5cbiAgaWYgKCd2YWx1ZScgaW4gZGVzYyB8fCBkZXNjLmluaXRpYWxpemVyKSB7XG4gICAgZGVzYy53cml0YWJsZSA9IHRydWU7XG4gIH1cblxuICBkZXNjID0gZGVjb3JhdG9ycy5zbGljZSgpLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGRlc2MsIGRlY29yYXRvcikge1xuICAgIHJldHVybiBkZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzYykgfHwgZGVzYztcbiAgfSwgZGVzYyk7XG5cbiAgaWYgKGNvbnRleHQgJiYgZGVzYy5pbml0aWFsaXplciAhPT0gdm9pZCAwKSB7XG4gICAgZGVzYy52YWx1ZSA9IGRlc2MuaW5pdGlhbGl6ZXIgPyBkZXNjLmluaXRpYWxpemVyLmNhbGwoY29udGV4dCkgOiB2b2lkIDA7XG4gICAgZGVzYy5pbml0aWFsaXplciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChkZXNjLmluaXRpYWxpemVyID09PSB2b2lkIDApIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzYyk7XG4gICAgZGVzYyA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gZGVzYztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbml0aWFsaXplckRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIGRlc2NyaXB0b3IsIGNvbnRleHQpIHtcbiAgaWYgKCFkZXNjcmlwdG9yKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCB7XG4gICAgZW51bWVyYWJsZTogZGVzY3JpcHRvci5lbnVtZXJhYmxlLFxuICAgIGNvbmZpZ3VyYWJsZTogZGVzY3JpcHRvci5jb25maWd1cmFibGUsXG4gICAgd3JpdGFibGU6IGRlc2NyaXB0b3Iud3JpdGFibGUsXG4gICAgdmFsdWU6IGRlc2NyaXB0b3IuaW5pdGlhbGl6ZXIgPyBkZXNjcmlwdG9yLmluaXRpYWxpemVyLmNhbGwoY29udGV4dCkgOiB2b2lkIDBcbiAgfSk7XG59IiwidmFyIG5pY2VFcnJvcnMgPSB7XG4gIDA6IFwiSW52YWxpZCB2YWx1ZSBmb3IgY29uZmlndXJhdGlvbiAnZW5mb3JjZUFjdGlvbnMnLCBleHBlY3RlZCAnbmV2ZXInLCAnYWx3YXlzJyBvciAnb2JzZXJ2ZWQnXCIsXG4gIDE6IGZ1bmN0aW9uIF8ocHJvcCkge1xuICAgIHJldHVybiBcIkNhbm5vdCBkZWNvcmF0ZSB1bmRlZmluZWQgcHJvcGVydHk6ICdcIiArIHByb3AudG9TdHJpbmcoKSArIFwiJ1wiO1xuICB9LFxuICAyOiBmdW5jdGlvbiBfKHByb3ApIHtcbiAgICByZXR1cm4gXCJpbnZhbGlkIGRlY29yYXRvciBmb3IgJ1wiICsgcHJvcC50b1N0cmluZygpICsgXCInXCI7XG4gIH0sXG4gIDM6IGZ1bmN0aW9uIF8ocHJvcCkge1xuICAgIHJldHVybiBcIkNhbm5vdCBkZWNvcmF0ZSAnXCIgKyBwcm9wLnRvU3RyaW5nKCkgKyBcIic6IGFjdGlvbiBjYW4gb25seSBiZSB1c2VkIG9uIHByb3BlcnRpZXMgd2l0aCBhIGZ1bmN0aW9uIHZhbHVlLlwiO1xuICB9LFxuICA0OiBmdW5jdGlvbiBfKHByb3ApIHtcbiAgICByZXR1cm4gXCJDYW5ub3QgZGVjb3JhdGUgJ1wiICsgcHJvcC50b1N0cmluZygpICsgXCInOiBjb21wdXRlZCBjYW4gb25seSBiZSB1c2VkIG9uIGdldHRlciBwcm9wZXJ0aWVzLlwiO1xuICB9LFxuICA1OiBcIidrZXlzKCknIGNhbiBvbmx5IGJlIHVzZWQgb24gb2JzZXJ2YWJsZSBvYmplY3RzLCBhcnJheXMsIHNldHMgYW5kIG1hcHNcIixcbiAgNjogXCIndmFsdWVzKCknIGNhbiBvbmx5IGJlIHVzZWQgb24gb2JzZXJ2YWJsZSBvYmplY3RzLCBhcnJheXMsIHNldHMgYW5kIG1hcHNcIixcbiAgNzogXCInZW50cmllcygpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzIGFuZCBtYXBzXCIsXG4gIDg6IFwiJ3NldCgpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzIGFuZCBtYXBzXCIsXG4gIDk6IFwiJ3JlbW92ZSgpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzIGFuZCBtYXBzXCIsXG4gIDEwOiBcIidoYXMoKScgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cyBhbmQgbWFwc1wiLFxuICAxMTogXCInZ2V0KCknIGNhbiBvbmx5IGJlIHVzZWQgb24gb2JzZXJ2YWJsZSBvYmplY3RzLCBhcnJheXMgYW5kIG1hcHNcIixcbiAgMTI6IFwiSW52YWxpZCBhbm5vdGF0aW9uXCIsXG4gIDEzOiBcIkR5bmFtaWMgb2JzZXJ2YWJsZSBvYmplY3RzIGNhbm5vdCBiZSBmcm96ZW5cIixcbiAgMTQ6IFwiSW50ZXJjZXB0IGhhbmRsZXJzIHNob3VsZCByZXR1cm4gbm90aGluZyBvciBhIGNoYW5nZSBvYmplY3RcIixcbiAgMTU6IFwiT2JzZXJ2YWJsZSBhcnJheXMgY2Fubm90IGJlIGZyb3plblwiLFxuICAxNjogXCJNb2RpZmljYXRpb24gZXhjZXB0aW9uOiB0aGUgaW50ZXJuYWwgc3RydWN0dXJlIG9mIGFuIG9ic2VydmFibGUgYXJyYXkgd2FzIGNoYW5nZWQuXCIsXG4gIDE3OiBmdW5jdGlvbiBfKGluZGV4LCBsZW5ndGgpIHtcbiAgICByZXR1cm4gXCJbbW9ieC5hcnJheV0gSW5kZXggb3V0IG9mIGJvdW5kcywgXCIgKyBpbmRleCArIFwiIGlzIGxhcmdlciB0aGFuIFwiICsgbGVuZ3RoO1xuICB9LFxuICAxODogXCJtb2J4Lm1hcCByZXF1aXJlcyBNYXAgcG9seWZpbGwgZm9yIHRoZSBjdXJyZW50IGJyb3dzZXIuIENoZWNrIGJhYmVsLXBvbHlmaWxsIG9yIGNvcmUtanMvZXM2L21hcC5qc1wiLFxuICAxOTogZnVuY3Rpb24gXyhvdGhlcikge1xuICAgIHJldHVybiBcIkNhbm5vdCBpbml0aWFsaXplIGZyb20gY2xhc3NlcyB0aGF0IGluaGVyaXQgZnJvbSBNYXA6IFwiICsgb3RoZXIuY29uc3RydWN0b3IubmFtZTtcbiAgfSxcbiAgMjA6IGZ1bmN0aW9uIF8ob3RoZXIpIHtcbiAgICByZXR1cm4gXCJDYW5ub3QgaW5pdGlhbGl6ZSBtYXAgZnJvbSBcIiArIG90aGVyO1xuICB9LFxuICAyMTogZnVuY3Rpb24gXyhkYXRhU3RydWN0dXJlKSB7XG4gICAgcmV0dXJuIFwiQ2Fubm90IGNvbnZlcnQgdG8gbWFwIGZyb20gJ1wiICsgZGF0YVN0cnVjdHVyZSArIFwiJ1wiO1xuICB9LFxuICAyMjogXCJtb2J4LnNldCByZXF1aXJlcyBTZXQgcG9seWZpbGwgZm9yIHRoZSBjdXJyZW50IGJyb3dzZXIuIENoZWNrIGJhYmVsLXBvbHlmaWxsIG9yIGNvcmUtanMvZXM2L3NldC5qc1wiLFxuICAyMzogXCJJdCBpcyBub3QgcG9zc2libGUgdG8gZ2V0IGluZGV4IGF0b21zIGZyb20gYXJyYXlzXCIsXG4gIDI0OiBmdW5jdGlvbiBfKHRoaW5nKSB7XG4gICAgcmV0dXJuIFwiQ2Fubm90IG9idGFpbiBhZG1pbmlzdHJhdGlvbiBmcm9tIFwiICsgdGhpbmc7XG4gIH0sXG4gIDI1OiBmdW5jdGlvbiBfKHByb3BlcnR5LCBuYW1lKSB7XG4gICAgcmV0dXJuIFwidGhlIGVudHJ5ICdcIiArIHByb3BlcnR5ICsgXCInIGRvZXMgbm90IGV4aXN0IGluIHRoZSBvYnNlcnZhYmxlIG1hcCAnXCIgKyBuYW1lICsgXCInXCI7XG4gIH0sXG4gIDI2OiBcInBsZWFzZSBzcGVjaWZ5IGEgcHJvcGVydHlcIixcbiAgMjc6IGZ1bmN0aW9uIF8ocHJvcGVydHksIG5hbWUpIHtcbiAgICByZXR1cm4gXCJubyBvYnNlcnZhYmxlIHByb3BlcnR5ICdcIiArIHByb3BlcnR5LnRvU3RyaW5nKCkgKyBcIicgZm91bmQgb24gdGhlIG9ic2VydmFibGUgb2JqZWN0ICdcIiArIG5hbWUgKyBcIidcIjtcbiAgfSxcbiAgMjg6IGZ1bmN0aW9uIF8odGhpbmcpIHtcbiAgICByZXR1cm4gXCJDYW5ub3Qgb2J0YWluIGF0b20gZnJvbSBcIiArIHRoaW5nO1xuICB9LFxuICAyOTogXCJFeHBlY3Rpbmcgc29tZSBvYmplY3RcIixcbiAgMzA6IFwiaW52YWxpZCBhY3Rpb24gc3RhY2suIGRpZCB5b3UgZm9yZ2V0IHRvIGZpbmlzaCBhbiBhY3Rpb24/XCIsXG4gIDMxOiBcIm1pc3Npbmcgb3B0aW9uIGZvciBjb21wdXRlZDogZ2V0XCIsXG4gIDMyOiBmdW5jdGlvbiBfKG5hbWUsIGRlcml2YXRpb24pIHtcbiAgICByZXR1cm4gXCJDeWNsZSBkZXRlY3RlZCBpbiBjb21wdXRhdGlvbiBcIiArIG5hbWUgKyBcIjogXCIgKyBkZXJpdmF0aW9uO1xuICB9LFxuICAzMzogZnVuY3Rpb24gXyhuYW1lKSB7XG4gICAgcmV0dXJuIFwiVGhlIHNldHRlciBvZiBjb21wdXRlZCB2YWx1ZSAnXCIgKyBuYW1lICsgXCInIGlzIHRyeWluZyB0byB1cGRhdGUgaXRzZWxmLiBEaWQgeW91IGludGVuZCB0byB1cGRhdGUgYW4gX29ic2VydmFibGVfIHZhbHVlLCBpbnN0ZWFkIG9mIHRoZSBjb21wdXRlZCBwcm9wZXJ0eT9cIjtcbiAgfSxcbiAgMzQ6IGZ1bmN0aW9uIF8obmFtZSkge1xuICAgIHJldHVybiBcIltDb21wdXRlZFZhbHVlICdcIiArIG5hbWUgKyBcIiddIEl0IGlzIG5vdCBwb3NzaWJsZSB0byBhc3NpZ24gYSBuZXcgdmFsdWUgdG8gYSBjb21wdXRlZCB2YWx1ZS5cIjtcbiAgfSxcbiAgMzU6IFwiVGhlcmUgYXJlIG11bHRpcGxlLCBkaWZmZXJlbnQgdmVyc2lvbnMgb2YgTW9iWCBhY3RpdmUuIE1ha2Ugc3VyZSBNb2JYIGlzIGxvYWRlZCBvbmx5IG9uY2Ugb3IgdXNlIGBjb25maWd1cmUoeyBpc29sYXRlR2xvYmFsU3RhdGU6IHRydWUgfSlgXCIsXG4gIDM2OiBcImlzb2xhdGVHbG9iYWxTdGF0ZSBzaG91bGQgYmUgY2FsbGVkIGJlZm9yZSBNb2JYIGlzIHJ1bm5pbmcgYW55IHJlYWN0aW9uc1wiLFxuICAzNzogZnVuY3Rpb24gXyhtZXRob2QpIHtcbiAgICByZXR1cm4gXCJbbW9ieF0gYG9ic2VydmFibGVBcnJheS5cIiArIG1ldGhvZCArIFwiKClgIG11dGF0ZXMgdGhlIGFycmF5IGluLXBsYWNlLCB3aGljaCBpcyBub3QgYWxsb3dlZCBpbnNpZGUgYSBkZXJpdmF0aW9uLiBVc2UgYGFycmF5LnNsaWNlKCkuXCIgKyBtZXRob2QgKyBcIigpYCBpbnN0ZWFkXCI7XG4gIH1cbn07XG52YXIgZXJyb3JzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gbmljZUVycm9ycyA6IHt9O1xuZnVuY3Rpb24gZGllKGVycm9yKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB2YXIgZSA9IHR5cGVvZiBlcnJvciA9PT0gXCJzdHJpbmdcIiA/IGVycm9yIDogZXJyb3JzW2Vycm9yXTtcbiAgICBpZiAodHlwZW9mIGUgPT09IFwiZnVuY3Rpb25cIikgZSA9IGUuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiW01vYlhdIFwiICsgZSk7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IodHlwZW9mIGVycm9yID09PSBcIm51bWJlclwiID8gXCJbTW9iWF0gbWluaWZpZWQgZXJyb3IgbnI6IFwiICsgZXJyb3IgKyAoYXJncy5sZW5ndGggPyBcIiBcIiArIGFyZ3Muam9pbihcIixcIikgOiBcIlwiKSArIFwiLiBGaW5kIHRoZSBmdWxsIGVycm9yIGF0OiBodHRwczovL2dpdGh1Yi5jb20vbW9ieGpzL21vYngvYmxvYi9tb2J4Ni9zcmMvZXJyb3JzLnRzXCIgOiBcIltNb2JYXSBcIiArIGVycm9yKTtcbn1cblxudmFyIG1vY2tHbG9iYWwgPSB7fTtcbmZ1bmN0aW9uIGdldEdsb2JhbCgpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gZ2xvYmFsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxuICByZXR1cm4gbW9ja0dsb2JhbDtcbn1cblxudmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG52YXIgZ2V0RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbnZhciBFTVBUWV9BUlJBWSA9IFtdO1xuT2JqZWN0LmZyZWV6ZShFTVBUWV9BUlJBWSk7XG52YXIgRU1QVFlfT0JKRUNUID0ge307XG5PYmplY3QuZnJlZXplKEVNUFRZX09CSkVDVCk7XG52YXIgaGFzUHJveHkgPSB0eXBlb2YgUHJveHkgIT09IFwidW5kZWZpbmVkXCI7XG52YXIgcGxhaW5PYmplY3RTdHJpbmcgPSAvKiNfX1BVUkVfXyovT2JqZWN0LnRvU3RyaW5nKCk7XG5mdW5jdGlvbiBhc3NlcnRQcm94aWVzKCkge1xuICBpZiAoIWhhc1Byb3h5KSB7XG4gICAgZGllKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiYFByb3h5YCBvYmplY3RzIGFyZSBub3QgYXZhaWxhYmxlIGluIHRoZSBjdXJyZW50IGVudmlyb25tZW50LiBQbGVhc2UgY29uZmlndXJlIE1vYlggdG8gZW5hYmxlIGEgZmFsbGJhY2sgaW1wbGVtZW50YXRpb24uYFwiIDogXCJQcm94eSBub3QgYXZhaWxhYmxlXCIpO1xuICB9XG59XG5mdW5jdGlvbiB3YXJuQWJvdXRQcm94eVJlcXVpcmVtZW50KG1zZykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGdsb2JhbFN0YXRlLnZlcmlmeVByb3hpZXMpIHtcbiAgICBkaWUoXCJNb2JYIGlzIGN1cnJlbnRseSBjb25maWd1cmVkIHRvIGJlIGFibGUgdG8gcnVuIGluIEVTNSBtb2RlLCBidXQgaW4gRVM1IE1vYlggd29uJ3QgYmUgYWJsZSB0byBcIiArIG1zZyk7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldE5leHRJZCgpIHtcbiAgcmV0dXJuICsrZ2xvYmFsU3RhdGUubW9ieEd1aWQ7XG59XG4vKipcclxuICogTWFrZXMgc3VyZSB0aGF0IHRoZSBwcm92aWRlZCBmdW5jdGlvbiBpcyBpbnZva2VkIGF0IG1vc3Qgb25jZS5cclxuICovXG5cbmZ1bmN0aW9uIG9uY2UoZnVuYykge1xuICB2YXIgaW52b2tlZCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChpbnZva2VkKSByZXR1cm47XG4gICAgaW52b2tlZCA9IHRydWU7XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn1cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuZnVuY3Rpb24gaXNGdW5jdGlvbihmbikge1xuICByZXR1cm4gdHlwZW9mIGZuID09PSBcImZ1bmN0aW9uXCI7XG59XG5mdW5jdGlvbiBpc1N0cmluZ2lzaCh2YWx1ZSkge1xuICB2YXIgdCA9IHR5cGVvZiB2YWx1ZTtcblxuICBzd2l0Y2ggKHQpIHtcbiAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgY2FzZSBcInN5bWJvbFwiOlxuICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIjtcbn1cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgdmFyIF9wcm90byRjb25zdHJ1Y3RvcjtcblxuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xuICBpZiAocHJvdG8gPT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gIHJldHVybiAoKF9wcm90byRjb25zdHJ1Y3RvciA9IHByb3RvLmNvbnN0cnVjdG9yKSA9PSBudWxsID8gdm9pZCAwIDogX3Byb3RvJGNvbnN0cnVjdG9yLnRvU3RyaW5nKCkpID09PSBwbGFpbk9iamVjdFN0cmluZztcbn0gLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM3ODY1MTcwXG5cbmZ1bmN0aW9uIGlzR2VuZXJhdG9yKG9iaikge1xuICB2YXIgY29uc3RydWN0b3IgPSBvYmogPT0gbnVsbCA/IHZvaWQgMCA6IG9iai5jb25zdHJ1Y3RvcjtcbiAgaWYgKCFjb25zdHJ1Y3RvcikgcmV0dXJuIGZhbHNlO1xuICBpZiAoXCJHZW5lcmF0b3JGdW5jdGlvblwiID09PSBjb25zdHJ1Y3Rvci5uYW1lIHx8IFwiR2VuZXJhdG9yRnVuY3Rpb25cIiA9PT0gY29uc3RydWN0b3IuZGlzcGxheU5hbWUpIHJldHVybiB0cnVlO1xuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBhZGRIaWRkZW5Qcm9wKG9iamVjdCwgcHJvcE5hbWUsIHZhbHVlKSB7XG4gIGRlZmluZVByb3BlcnR5KG9iamVjdCwgcHJvcE5hbWUsIHtcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgdmFsdWU6IHZhbHVlXG4gIH0pO1xufVxuZnVuY3Rpb24gYWRkSGlkZGVuRmluYWxQcm9wKG9iamVjdCwgcHJvcE5hbWUsIHZhbHVlKSB7XG4gIGRlZmluZVByb3BlcnR5KG9iamVjdCwgcHJvcE5hbWUsIHtcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9KTtcbn1cbmZ1bmN0aW9uIGFzc2VydFByb3BlcnR5Q29uZmlndXJhYmxlKG9iamVjdCwgcHJvcCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBnZXREZXNjcmlwdG9yKG9iamVjdCwgcHJvcCk7XG4gICAgaWYgKChkZXNjcmlwdG9yID09IG51bGwgPyB2b2lkIDAgOiBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSkgPT09IGZhbHNlIHx8IChkZXNjcmlwdG9yID09IG51bGwgPyB2b2lkIDAgOiBkZXNjcmlwdG9yLndyaXRhYmxlKSA9PT0gZmFsc2UpIGRpZShcIkNhbm5vdCBtYWtlIHByb3BlcnR5ICdcIiArIHN0cmluZ2lmeUtleShwcm9wKSArIFwiJyBvYnNlcnZhYmxlLCBpdCBpcyBub3QgY29uZmlndXJhYmxlIGFuZCB3cml0YWJsZSBpbiB0aGUgdGFyZ2V0IG9iamVjdFwiKTtcbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShuYW1lLCB0aGVDbGFzcykge1xuICB2YXIgcHJvcE5hbWUgPSBcImlzTW9iWFwiICsgbmFtZTtcbiAgdGhlQ2xhc3MucHJvdG90eXBlW3Byb3BOYW1lXSA9IHRydWU7XG4gIHJldHVybiBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBpc09iamVjdCh4KSAmJiB4W3Byb3BOYW1lXSA9PT0gdHJ1ZTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGlzRVM2TWFwKHRoaW5nKSB7XG4gIHJldHVybiB0aGluZyBpbnN0YW5jZW9mIE1hcDtcbn1cbmZ1bmN0aW9uIGlzRVM2U2V0KHRoaW5nKSB7XG4gIHJldHVybiB0aGluZyBpbnN0YW5jZW9mIFNldDtcbn1cbnZhciBoYXNHZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAhPT0gXCJ1bmRlZmluZWRcIjtcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBmb2xsb3dpbmc6IG93biBrZXlzLCBwcm90b3R5cGUga2V5cyAmIG93biBzeW1ib2wga2V5cywgaWYgdGhleSBhcmUgZW51bWVyYWJsZS5cclxuICovXG5cbmZ1bmN0aW9uIGdldFBsYWluT2JqZWN0S2V5cyhvYmplY3QpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyAvLyBOb3Qgc3VwcG9ydGVkIGluIElFLCBzbyB0aGVyZSBhcmUgbm90IGdvaW5nIHRvIGJlIHN5bWJvbCBwcm9wcyBhbnl3YXkuLi5cblxuICBpZiAoIWhhc0dldE93blByb3BlcnR5U3ltYm9scykgcmV0dXJuIGtleXM7XG4gIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICBpZiAoIXN5bWJvbHMubGVuZ3RoKSByZXR1cm4ga2V5cztcbiAgcmV0dXJuIFtdLmNvbmNhdChrZXlzLCBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAocykge1xuICAgIHJldHVybiBvYmplY3RQcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHMpO1xuICB9KSk7XG59IC8vIEZyb20gSW1tZXIgdXRpbHNcbi8vIFJldHVybnMgYWxsIG93biBrZXlzLCBpbmNsdWRpbmcgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbGljXG5cbnZhciBvd25LZXlzID0gdHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5vd25LZXlzID8gUmVmbGVjdC5vd25LZXlzIDogaGFzR2V0T3duUHJvcGVydHlTeW1ib2xzID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmopKTtcbn0gOlxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xuZnVuY3Rpb24gc3RyaW5naWZ5S2V5KGtleSkge1xuICBpZiAodHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGtleTtcbiAgaWYgKHR5cGVvZiBrZXkgPT09IFwic3ltYm9sXCIpIHJldHVybiBrZXkudG9TdHJpbmcoKTtcbiAgcmV0dXJuIG5ldyBTdHJpbmcoa2V5KS50b1N0cmluZygpO1xufVxuZnVuY3Rpb24gdG9QcmltaXRpdmUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsID8gbnVsbCA6IHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiA/IFwiXCIgKyB2YWx1ZSA6IHZhbHVlO1xufVxuZnVuY3Rpb24gaGFzUHJvcCh0YXJnZXQsIHByb3ApIHtcbiAgcmV0dXJuIG9iamVjdFByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgcHJvcCk7XG59IC8vIEZyb20gSW1tZXIgdXRpbHNcblxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHRhcmdldCkge1xuICAvLyBQb2x5ZmlsbCBuZWVkZWQgZm9yIEhlcm1lcyBhbmQgSUUsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svaGVybWVzL2lzc3Vlcy8yNzRcbiAgdmFyIHJlcyA9IHt9OyAvLyBOb3RlOiB3aXRob3V0IHBvbHlmaWxsIGZvciBvd25LZXlzLCBzeW1ib2xzIHdvbid0IGJlIHBpY2tlZCB1cFxuXG4gIG93bktleXModGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXNba2V5XSA9IGdldERlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICB9KTtcbiAgcmV0dXJuIHJlcztcbn07XG5cbnZhciBtb2J4RGVjb3JhdG9yc1N5bWJvbCA9IC8qI19fUFVSRV9fKi9TeW1ib2woXCJtb2J4LWRlY29yYXRvcnNcIik7XG52YXIgbW9ieEFwcGxpZWREZWNvcmF0b3JzU3ltYm9sID0gLyojX19QVVJFX18qL1N5bWJvbChcIm1vYngtYXBwbGllZC1kZWNvcmF0b3JzXCIpO1xuZnVuY3Rpb24gY3JlYXRlRGVjb3JhdG9yKHR5cGUpIHtcbiAgcmV0dXJuIGFzc2lnbihmdW5jdGlvbiAodGFyZ2V0LCBwcm9wZXJ0eSkge1xuICAgIGlmIChwcm9wZXJ0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBAZGVjb3JhdG9yKGFyZykgbWVtYmVyXG4gICAgICBjcmVhdGVEZWNvcmF0b3JBbmRBbm5vdGF0aW9uKHR5cGUsIHRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEBkZWNvcmF0b3IgbWVtYmVyXG4gICAgICBzdG9yZURlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5LCB0eXBlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBhbm5vdGF0aW9uVHlwZV86IHR5cGVcbiAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVEZWNvcmF0b3JBbmRBbm5vdGF0aW9uKHR5cGUsIGFyZ18pIHtcbiAgcmV0dXJuIGFzc2lnbihmdW5jdGlvbiAodGFyZ2V0LCBwcm9wZXJ0eSkge1xuICAgIHN0b3JlRGVjb3JhdG9yKHRhcmdldCwgcHJvcGVydHksIHR5cGUsIGFyZ18pO1xuICB9LCB7XG4gICAgYW5ub3RhdGlvblR5cGVfOiB0eXBlLFxuICAgIGFyZ186IGFyZ19cbiAgfSk7XG59XG5mdW5jdGlvbiBzdG9yZURlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5LCB0eXBlLCBhcmdfKSB7XG4gIHZhciBkZXNjID0gZ2V0RGVzY3JpcHRvcih0YXJnZXQsIG1vYnhEZWNvcmF0b3JzU3ltYm9sKTtcbiAgdmFyIG1hcDtcblxuICBpZiAoZGVzYykge1xuICAgIG1hcCA9IGRlc2MudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgbWFwID0ge307XG4gICAgYWRkSGlkZGVuUHJvcCh0YXJnZXQsIG1vYnhEZWNvcmF0b3JzU3ltYm9sLCBtYXApO1xuICB9XG5cbiAgbWFwW3Byb3BlcnR5XSA9IHtcbiAgICBhbm5vdGF0aW9uVHlwZV86IHR5cGUsXG4gICAgYXJnXzogYXJnX1xuICB9O1xufVxuZnVuY3Rpb24gYXBwbHlEZWNvcmF0b3JzKHRhcmdldCkge1xuICBpZiAodGFyZ2V0W21vYnhBcHBsaWVkRGVjb3JhdG9yc1N5bWJvbF0pIHJldHVybiB0cnVlO1xuICB2YXIgY3VycmVudCA9IHRhcmdldDsgLy8gb3B0aW1pemF0aW9uOiB0aGlzIGNvdWxkIGJlIGNhY2hlZCBwZXIgcHJvdG90eXBlIVxuICAvLyAodGhlbiB3ZSBjYW4gcmVtb3ZlIHRoZSB3ZWlyZCBzaG9ydCBjaXJjdWl0aW5nIGFzIHdlbGwuLilcblxuICB2YXIgYW5ub3RhdGlvbnMgPSBbXTtcblxuICB3aGlsZSAoY3VycmVudCAmJiBjdXJyZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICB2YXIgZGVzYyA9IGdldERlc2NyaXB0b3IoY3VycmVudCwgbW9ieERlY29yYXRvcnNTeW1ib2wpO1xuXG4gICAgaWYgKGRlc2MpIHtcbiAgICAgIGlmICghYW5ub3RhdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBkZXNjLnZhbHVlKSB7XG4gICAgICAgICAgLy8gc2Vjb25kIGNvbmRpdGlvbnMgaXMgdG8gcmVjb2duaXplIGFjdGlvbnNcbiAgICAgICAgICBpZiAoIWhhc1Byb3AodGFyZ2V0LCBrZXkpICYmICFoYXNQcm9wKGN1cnJlbnQsIGtleSkpIHtcbiAgICAgICAgICAgIC8vIG5vdCBhbGwgZmllbGRzIGFyZSBkZWZpbmVkIHlldCwgc28gd2UgYXJlIGluIHRoZSBtYWtlT2JzZXJ2YWJsZSBjYWxsIG9mIHNvbWUgc3VwZXIgY2xhc3MsXG4gICAgICAgICAgICAvLyBzaG9ydCBjaXJjdWl0LCBoZXJlLCB3ZSB3aWxsIGRvIHRoaXMgYWdhaW4gaW4gYSBsYXRlciBtYWtlT2JzZXJ2YWJsZSBjYWxsXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYW5ub3RhdGlvbnMudW5zaGlmdChkZXNjLnZhbHVlKTtcbiAgICB9XG5cbiAgICBjdXJyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGN1cnJlbnQpO1xuICB9XG5cbiAgYW5ub3RhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYSkge1xuICAgIG1ha2VPYnNlcnZhYmxlKHRhcmdldCwgYSk7XG4gIH0pO1xuICBhZGRIaWRkZW5Qcm9wKHRhcmdldCwgbW9ieEFwcGxpZWREZWNvcmF0b3JzU3ltYm9sLCB0cnVlKTtcbiAgcmV0dXJuIGFubm90YXRpb25zLmxlbmd0aCA+IDA7XG59XG5cbnZhciAkbW9ieCA9IC8qI19fUFVSRV9fKi9TeW1ib2woXCJtb2J4IGFkbWluaXN0cmF0aW9uXCIpO1xudmFyIEF0b20gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvLyBmb3IgZWZmZWN0aXZlIHVub2JzZXJ2aW5nLiBCYXNlQXRvbSBoYXMgdHJ1ZSwgZm9yIGV4dHJhIG9wdGltaXphdGlvbiwgc28gaXRzIG9uQmVjb21lVW5vYnNlcnZlZCBuZXZlciBnZXRzIGNhbGxlZCwgYmVjYXVzZSBpdCdzIG5vdCBuZWVkZWRcblxuICAvKipcclxuICAgKiBDcmVhdGUgYSBuZXcgYXRvbS4gRm9yIGRlYnVnZ2luZyBwdXJwb3NlcyBpdCBpcyByZWNvbW1lbmRlZCB0byBnaXZlIGl0IGEgbmFtZS5cclxuICAgKiBUaGUgb25CZWNvbWVPYnNlcnZlZCBhbmQgb25CZWNvbWVVbm9ic2VydmVkIGNhbGxiYWNrcyBjYW4gYmUgdXNlZCBmb3IgcmVzb3VyY2UgbWFuYWdlbWVudC5cclxuICAgKi9cbiAgZnVuY3Rpb24gQXRvbShuYW1lXykge1xuICAgIGlmIChuYW1lXyA9PT0gdm9pZCAwKSB7XG4gICAgICBuYW1lXyA9IFwiQXRvbUBcIiArIGdldE5leHRJZCgpO1xuICAgIH1cblxuICAgIHRoaXMubmFtZV8gPSB2b2lkIDA7XG4gICAgdGhpcy5pc1BlbmRpbmdVbm9ic2VydmF0aW9uXyA9IGZhbHNlO1xuICAgIHRoaXMuaXNCZWluZ09ic2VydmVkXyA9IGZhbHNlO1xuICAgIHRoaXMub2JzZXJ2ZXJzXyA9IG5ldyBTZXQoKTtcbiAgICB0aGlzLmRpZmZWYWx1ZV8gPSAwO1xuICAgIHRoaXMubGFzdEFjY2Vzc2VkQnlfID0gMDtcbiAgICB0aGlzLmxvd2VzdE9ic2VydmVyU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uTk9UX1RSQUNLSU5HXztcbiAgICB0aGlzLm9uQk9MID0gdm9pZCAwO1xuICAgIHRoaXMub25CVU9MID0gdm9pZCAwO1xuICAgIHRoaXMubmFtZV8gPSBuYW1lXztcbiAgfSAvLyBvbkJlY29tZU9ic2VydmVkTGlzdGVuZXJzXG5cblxuICB2YXIgX3Byb3RvID0gQXRvbS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLm9uQk8gPSBmdW5jdGlvbiBvbkJPKCkge1xuICAgIGlmICh0aGlzLm9uQk9MKSB7XG4gICAgICB0aGlzLm9uQk9MLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5vbkJVTyA9IGZ1bmN0aW9uIG9uQlVPKCkge1xuICAgIGlmICh0aGlzLm9uQlVPTCkge1xuICAgICAgdGhpcy5vbkJVT0wuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICogSW52b2tlIHRoaXMgbWV0aG9kIHRvIG5vdGlmeSBtb2J4IHRoYXQgeW91ciBhdG9tIGhhcyBiZWVuIHVzZWQgc29tZWhvdy5cclxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlcmUgaXMgY3VycmVudGx5IGEgcmVhY3RpdmUgY29udGV4dC5cclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5yZXBvcnRPYnNlcnZlZCA9IGZ1bmN0aW9uIHJlcG9ydE9ic2VydmVkJDEoKSB7XG4gICAgcmV0dXJuIHJlcG9ydE9ic2VydmVkKHRoaXMpO1xuICB9XG4gIC8qKlxyXG4gICAqIEludm9rZSB0aGlzIG1ldGhvZCBfYWZ0ZXJfIHRoaXMgbWV0aG9kIGhhcyBjaGFuZ2VkIHRvIHNpZ25hbCBtb2J4IHRoYXQgYWxsIGl0cyBvYnNlcnZlcnMgc2hvdWxkIGludmFsaWRhdGUuXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucmVwb3J0Q2hhbmdlZCA9IGZ1bmN0aW9uIHJlcG9ydENoYW5nZWQoKSB7XG4gICAgc3RhcnRCYXRjaCgpO1xuICAgIHByb3BhZ2F0ZUNoYW5nZWQodGhpcyk7XG4gICAgZW5kQmF0Y2goKTtcbiAgfTtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lXztcbiAgfTtcblxuICByZXR1cm4gQXRvbTtcbn0oKTtcbnZhciBpc0F0b20gPSAvKiNfX1BVUkVfXyovY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShcIkF0b21cIiwgQXRvbSk7XG5mdW5jdGlvbiBjcmVhdGVBdG9tKG5hbWUsIG9uQmVjb21lT2JzZXJ2ZWRIYW5kbGVyLCBvbkJlY29tZVVub2JzZXJ2ZWRIYW5kbGVyKSB7XG4gIGlmIChvbkJlY29tZU9ic2VydmVkSGFuZGxlciA9PT0gdm9pZCAwKSB7XG4gICAgb25CZWNvbWVPYnNlcnZlZEhhbmRsZXIgPSBub29wO1xuICB9XG5cbiAgaWYgKG9uQmVjb21lVW5vYnNlcnZlZEhhbmRsZXIgPT09IHZvaWQgMCkge1xuICAgIG9uQmVjb21lVW5vYnNlcnZlZEhhbmRsZXIgPSBub29wO1xuICB9XG5cbiAgdmFyIGF0b20gPSBuZXcgQXRvbShuYW1lKTsgLy8gZGVmYXVsdCBgbm9vcGAgbGlzdGVuZXIgd2lsbCBub3QgaW5pdGlhbGl6ZSB0aGUgaG9vayBTZXRcblxuICBpZiAob25CZWNvbWVPYnNlcnZlZEhhbmRsZXIgIT09IG5vb3ApIHtcbiAgICBvbkJlY29tZU9ic2VydmVkKGF0b20sIG9uQmVjb21lT2JzZXJ2ZWRIYW5kbGVyKTtcbiAgfVxuXG4gIGlmIChvbkJlY29tZVVub2JzZXJ2ZWRIYW5kbGVyICE9PSBub29wKSB7XG4gICAgb25CZWNvbWVVbm9ic2VydmVkKGF0b20sIG9uQmVjb21lVW5vYnNlcnZlZEhhbmRsZXIpO1xuICB9XG5cbiAgcmV0dXJuIGF0b207XG59XG5cbmZ1bmN0aW9uIGlkZW50aXR5Q29tcGFyZXIoYSwgYikge1xuICByZXR1cm4gYSA9PT0gYjtcbn1cblxuZnVuY3Rpb24gc3RydWN0dXJhbENvbXBhcmVyKGEsIGIpIHtcbiAgcmV0dXJuIGRlZXBFcXVhbChhLCBiKTtcbn1cblxuZnVuY3Rpb24gc2hhbGxvd0NvbXBhcmVyKGEsIGIpIHtcbiAgcmV0dXJuIGRlZXBFcXVhbChhLCBiLCAxKTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdENvbXBhcmVyKGEsIGIpIHtcbiAgcmV0dXJuIE9iamVjdC5pcyhhLCBiKTtcbn1cblxudmFyIGNvbXBhcmVyID0ge1xuICBpZGVudGl0eTogaWRlbnRpdHlDb21wYXJlcixcbiAgc3RydWN0dXJhbDogc3RydWN0dXJhbENvbXBhcmVyLFxuICBcImRlZmF1bHRcIjogZGVmYXVsdENvbXBhcmVyLFxuICBzaGFsbG93OiBzaGFsbG93Q29tcGFyZXJcbn07XG5cbmZ1bmN0aW9uIGRlZXBFbmhhbmNlcih2LCBfLCBuYW1lKSB7XG4gIC8vIGl0IGlzIGFuIG9ic2VydmFibGUgYWxyZWFkeSwgZG9uZVxuICBpZiAoaXNPYnNlcnZhYmxlKHYpKSByZXR1cm4gdjsgLy8gc29tZXRoaW5nIHRoYXQgY2FuIGJlIGNvbnZlcnRlZCBhbmQgbXV0YXRlZD9cblxuICBpZiAoQXJyYXkuaXNBcnJheSh2KSkgcmV0dXJuIG9ic2VydmFibGUuYXJyYXkodiwge1xuICAgIG5hbWU6IG5hbWVcbiAgfSk7XG4gIGlmIChpc1BsYWluT2JqZWN0KHYpKSByZXR1cm4gb2JzZXJ2YWJsZS5vYmplY3QodiwgdW5kZWZpbmVkLCB7XG4gICAgbmFtZTogbmFtZVxuICB9KTtcbiAgaWYgKGlzRVM2TWFwKHYpKSByZXR1cm4gb2JzZXJ2YWJsZS5tYXAodiwge1xuICAgIG5hbWU6IG5hbWVcbiAgfSk7XG4gIGlmIChpc0VTNlNldCh2KSkgcmV0dXJuIG9ic2VydmFibGUuc2V0KHYsIHtcbiAgICBuYW1lOiBuYW1lXG4gIH0pO1xuICByZXR1cm4gdjtcbn1cbmZ1bmN0aW9uIHNoYWxsb3dFbmhhbmNlcih2LCBfLCBuYW1lKSB7XG4gIGlmICh2ID09PSB1bmRlZmluZWQgfHwgdiA9PT0gbnVsbCkgcmV0dXJuIHY7XG4gIGlmIChpc09ic2VydmFibGVPYmplY3QodikgfHwgaXNPYnNlcnZhYmxlQXJyYXkodikgfHwgaXNPYnNlcnZhYmxlTWFwKHYpIHx8IGlzT2JzZXJ2YWJsZVNldCh2KSkgcmV0dXJuIHY7XG4gIGlmIChBcnJheS5pc0FycmF5KHYpKSByZXR1cm4gb2JzZXJ2YWJsZS5hcnJheSh2LCB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBkZWVwOiBmYWxzZVxuICB9KTtcbiAgaWYgKGlzUGxhaW5PYmplY3QodikpIHJldHVybiBvYnNlcnZhYmxlLm9iamVjdCh2LCB1bmRlZmluZWQsIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIGRlZXA6IGZhbHNlXG4gIH0pO1xuICBpZiAoaXNFUzZNYXAodikpIHJldHVybiBvYnNlcnZhYmxlLm1hcCh2LCB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBkZWVwOiBmYWxzZVxuICB9KTtcbiAgaWYgKGlzRVM2U2V0KHYpKSByZXR1cm4gb2JzZXJ2YWJsZS5zZXQodiwge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgZGVlcDogZmFsc2VcbiAgfSk7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGRpZShcIlRoZSBzaGFsbG93IG1vZGlmaWVyIC8gZGVjb3JhdG9yIGNhbiBvbmx5IHVzZWQgaW4gY29tYmluYXRpb24gd2l0aCBhcnJheXMsIG9iamVjdHMsIG1hcHMgYW5kIHNldHNcIik7XG59XG5mdW5jdGlvbiByZWZlcmVuY2VFbmhhbmNlcihuZXdWYWx1ZSkge1xuICAvLyBuZXZlciB0dXJuIGludG8gYW4gb2JzZXJ2YWJsZVxuICByZXR1cm4gbmV3VmFsdWU7XG59XG5mdW5jdGlvbiByZWZTdHJ1Y3RFbmhhbmNlcih2LCBvbGRWYWx1ZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGlzT2JzZXJ2YWJsZSh2KSkgZGllKFwib2JzZXJ2YWJsZS5zdHJ1Y3Qgc2hvdWxkIG5vdCBiZSB1c2VkIHdpdGggb2JzZXJ2YWJsZSB2YWx1ZXNcIik7XG4gIGlmIChkZWVwRXF1YWwodiwgb2xkVmFsdWUpKSByZXR1cm4gb2xkVmFsdWU7XG4gIHJldHVybiB2O1xufVxuXG52YXIgX2Fubm90YXRpb25Ub0VuaGFuY2VyO1xudmFyIE9CU0VSVkFCTEUgPSBcIm9ic2VydmFibGVcIjtcbnZhciBPQlNFUlZBQkxFX1JFRiA9IFwib2JzZXJ2YWJsZS5yZWZcIjtcbnZhciBPQlNFUlZBQkxFX1NIQUxMT1cgPSBcIm9ic2VydmFibGUuc2hhbGxvd1wiO1xudmFyIE9CU0VSVkFCTEVfU1RSVUNUID0gXCJvYnNlcnZhYmxlLnN0cnVjdFwiOyAvLyBQcmVkZWZpbmVkIGJhZ3Mgb2YgY3JlYXRlIG9ic2VydmFibGUgb3B0aW9ucywgdG8gYXZvaWQgYWxsb2NhdGluZyB0ZW1wb3JhcmlseSBvcHRpb24gb2JqZWN0c1xuLy8gaW4gdGhlIG1ham9yaXR5IG9mIGNhc2VzXG5cbnZhciBkZWZhdWx0Q3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMgPSB7XG4gIGRlZXA6IHRydWUsXG4gIG5hbWU6IHVuZGVmaW5lZCxcbiAgZGVmYXVsdERlY29yYXRvcjogdW5kZWZpbmVkLFxuICBwcm94eTogdHJ1ZVxufTtcbk9iamVjdC5mcmVlemUoZGVmYXVsdENyZWF0ZU9ic2VydmFibGVPcHRpb25zKTtcbmZ1bmN0aW9uIGFzQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnModGhpbmcpIHtcbiAgcmV0dXJuIHRoaW5nIHx8IGRlZmF1bHRDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucztcbn1cbmZ1bmN0aW9uIGdldEVuaGFuY2VyRnJvbU9wdGlvbihvcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zLmRlZXAgPT09IHRydWUgPyBkZWVwRW5oYW5jZXIgOiBvcHRpb25zLmRlZXAgPT09IGZhbHNlID8gcmVmZXJlbmNlRW5oYW5jZXIgOiBnZXRFbmhhbmNlckZyb21Bbm5vdGF0aW9uKG9wdGlvbnMuZGVmYXVsdERlY29yYXRvcik7XG59XG52YXIgYW5ub3RhdGlvblRvRW5oYW5jZXIgPSAoX2Fubm90YXRpb25Ub0VuaGFuY2VyID0ge30sIF9hbm5vdGF0aW9uVG9FbmhhbmNlcltPQlNFUlZBQkxFXSA9IGRlZXBFbmhhbmNlciwgX2Fubm90YXRpb25Ub0VuaGFuY2VyW09CU0VSVkFCTEVfUkVGXSA9IHJlZmVyZW5jZUVuaGFuY2VyLCBfYW5ub3RhdGlvblRvRW5oYW5jZXJbT0JTRVJWQUJMRV9TSEFMTE9XXSA9IHNoYWxsb3dFbmhhbmNlciwgX2Fubm90YXRpb25Ub0VuaGFuY2VyW09CU0VSVkFCTEVfU1RSVUNUXSA9IHJlZlN0cnVjdEVuaGFuY2VyLCBfYW5ub3RhdGlvblRvRW5oYW5jZXIpO1xuZnVuY3Rpb24gZ2V0RW5oYW5jZXJGcm9tQW5ub3RhdGlvbihhbm5vdGF0aW9uKSB7XG4gIHZhciBfYW5ub3RhdGlvblRvRW5oYW5jZXIyO1xuXG4gIHJldHVybiAhYW5ub3RhdGlvbiA/IGRlZXBFbmhhbmNlciA6IChfYW5ub3RhdGlvblRvRW5oYW5jZXIyID0gYW5ub3RhdGlvblRvRW5oYW5jZXJbYW5ub3RhdGlvbi5hbm5vdGF0aW9uVHlwZV9dKSAhPSBudWxsID8gX2Fubm90YXRpb25Ub0VuaGFuY2VyMiA6IGRpZSgxMik7XG59XG4vKipcclxuICogVHVybnMgYW4gb2JqZWN0LCBhcnJheSBvciBmdW5jdGlvbiBpbnRvIGEgcmVhY3RpdmUgc3RydWN0dXJlLlxyXG4gKiBAcGFyYW0gdiB0aGUgdmFsdWUgd2hpY2ggc2hvdWxkIGJlY29tZSBvYnNlcnZhYmxlLlxyXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2YWJsZSh2LCBhcmcyLCBhcmczKSB7XG4gIC8vIEBvYnNlcnZhYmxlIHNvbWVQcm9wO1xuICBpZiAoaXNTdHJpbmdpc2goYXJnMikpIHtcbiAgICBzdG9yZURlY29yYXRvcih2LCBhcmcyLCBPQlNFUlZBQkxFKTtcbiAgICByZXR1cm47XG4gIH0gLy8gaXQgaXMgYW4gb2JzZXJ2YWJsZSBhbHJlYWR5LCBkb25lXG5cblxuICBpZiAoaXNPYnNlcnZhYmxlKHYpKSByZXR1cm4gdjsgLy8gc29tZXRoaW5nIHRoYXQgY2FuIGJlIGNvbnZlcnRlZCBhbmQgbXV0YXRlZD9cblxuICB2YXIgcmVzID0gaXNQbGFpbk9iamVjdCh2KSA/IG9ic2VydmFibGUub2JqZWN0KHYsIGFyZzIsIGFyZzMpIDogQXJyYXkuaXNBcnJheSh2KSA/IG9ic2VydmFibGUuYXJyYXkodiwgYXJnMikgOiBpc0VTNk1hcCh2KSA/IG9ic2VydmFibGUubWFwKHYsIGFyZzIpIDogaXNFUzZTZXQodikgPyBvYnNlcnZhYmxlLnNldCh2LCBhcmcyKSA6IHY7IC8vIHRoaXMgdmFsdWUgY291bGQgYmUgY29udmVydGVkIHRvIGEgbmV3IG9ic2VydmFibGUgZGF0YSBzdHJ1Y3R1cmUsIHJldHVybiBpdFxuXG4gIGlmIChyZXMgIT09IHYpIHJldHVybiByZXM7XG4gIHJldHVybiBvYnNlcnZhYmxlLmJveCh2KTtcbn1cblxuY3JlYXRlT2JzZXJ2YWJsZS5hbm5vdGF0aW9uVHlwZV8gPSBPQlNFUlZBQkxFO1xudmFyIG9ic2VydmFibGVGYWN0b3JpZXMgPSB7XG4gIGJveDogZnVuY3Rpb24gYm94KHZhbHVlLCBvcHRpb25zKSB7XG4gICAgdmFyIG8gPSBhc0NyZWF0ZU9ic2VydmFibGVPcHRpb25zKG9wdGlvbnMpO1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZVZhbHVlKHZhbHVlLCBnZXRFbmhhbmNlckZyb21PcHRpb24obyksIG8ubmFtZSwgdHJ1ZSwgby5lcXVhbHMpO1xuICB9LFxuICBhcnJheTogZnVuY3Rpb24gYXJyYXkoaW5pdGlhbFZhbHVlcywgb3B0aW9ucykge1xuICAgIHZhciBvID0gYXNDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyhvcHRpb25zKTtcbiAgICByZXR1cm4gKGdsb2JhbFN0YXRlLnVzZVByb3hpZXMgPT09IGZhbHNlIHx8IG8ucHJveHkgPT09IGZhbHNlID8gY3JlYXRlTGVnYWN5QXJyYXkgOiBjcmVhdGVPYnNlcnZhYmxlQXJyYXkpKGluaXRpYWxWYWx1ZXMsIGdldEVuaGFuY2VyRnJvbU9wdGlvbihvKSwgby5uYW1lKTtcbiAgfSxcbiAgbWFwOiBmdW5jdGlvbiBtYXAoaW5pdGlhbFZhbHVlcywgb3B0aW9ucykge1xuICAgIHZhciBvID0gYXNDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyhvcHRpb25zKTtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGVNYXAoaW5pdGlhbFZhbHVlcywgZ2V0RW5oYW5jZXJGcm9tT3B0aW9uKG8pLCBvLm5hbWUpO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uIHNldChpbml0aWFsVmFsdWVzLCBvcHRpb25zKSB7XG4gICAgdmFyIG8gPSBhc0NyZWF0ZU9ic2VydmFibGVPcHRpb25zKG9wdGlvbnMpO1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZVNldChpbml0aWFsVmFsdWVzLCBnZXRFbmhhbmNlckZyb21PcHRpb24obyksIG8ubmFtZSk7XG4gIH0sXG4gIG9iamVjdDogZnVuY3Rpb24gb2JqZWN0KHByb3BzLCBkZWNvcmF0b3JzLCBvcHRpb25zKSB7XG4gICAgdmFyIG8gPSBhc0NyZWF0ZU9ic2VydmFibGVPcHRpb25zKG9wdGlvbnMpO1xuICAgIHZhciBiYXNlID0ge307XG4gICAgYXNPYnNlcnZhYmxlT2JqZWN0KGJhc2UsIG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMubmFtZSwgZ2V0RW5oYW5jZXJGcm9tT3B0aW9uKG8pKTtcbiAgICByZXR1cm4gZXh0ZW5kT2JzZXJ2YWJsZShnbG9iYWxTdGF0ZS51c2VQcm94aWVzID09PSBmYWxzZSB8fCBvLnByb3h5ID09PSBmYWxzZSA/IGJhc2UgOiBjcmVhdGVEeW5hbWljT2JzZXJ2YWJsZU9iamVjdChiYXNlKSwgcHJvcHMsIGRlY29yYXRvcnMsIG9wdGlvbnMpO1xuICB9LFxuICByZWY6IC8qI19fUFVSRV9fKi9jcmVhdGVEZWNvcmF0b3IoT0JTRVJWQUJMRV9SRUYpLFxuICBzaGFsbG93OiAvKiNfX1BVUkVfXyovY3JlYXRlRGVjb3JhdG9yKE9CU0VSVkFCTEVfU0hBTExPVyksXG4gIGRlZXA6IC8qI19fUFVSRV9fKi9jcmVhdGVEZWNvcmF0b3IoT0JTRVJWQUJMRSksXG4gIHN0cnVjdDogLyojX19QVVJFX18qL2NyZWF0ZURlY29yYXRvcihPQlNFUlZBQkxFX1NUUlVDVClcbn07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG52YXIgb2JzZXJ2YWJsZSA9IC8qI19fUFVSRV9fKi9hc3NpZ24oY3JlYXRlT2JzZXJ2YWJsZSwgb2JzZXJ2YWJsZUZhY3Rvcmllcyk7XG5cbnZhciBDT01QVVRFRCA9IFwiY29tcHV0ZWRcIjtcbnZhciBDT01QVVRFRF9TVFJVQ1QgPSBcImNvbXB1dGVkLnN0cnVjdFwiO1xuLyoqXHJcbiAqIERlY29yYXRvciBmb3IgY2xhc3MgcHJvcGVydGllczogQGNvbXB1dGVkIGdldCB2YWx1ZSgpIHsgcmV0dXJuIGV4cHI7IH0uXHJcbiAqIEZvciBsZWdhY3kgcHVycG9zZXMgYWxzbyBpbnZva2FibGUgYXMgRVM1IG9ic2VydmFibGUgY3JlYXRlZDogYGNvbXB1dGVkKCgpID0+IGV4cHIpYDtcclxuICovXG5cbnZhciBjb21wdXRlZCA9IGZ1bmN0aW9uIGNvbXB1dGVkKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgaWYgKGlzU3RyaW5naXNoKGFyZzIpKSB7XG4gICAgLy8gQGNvbXB1dGVkXG4gICAgcmV0dXJuIHN0b3JlRGVjb3JhdG9yKGFyZzEsIGFyZzIsIENPTVBVVEVEKTtcbiAgfVxuXG4gIGlmIChpc1BsYWluT2JqZWN0KGFyZzEpKSB7XG4gICAgLy8gQGNvbXB1dGVkKHsgb3B0aW9ucyB9KVxuICAgIHJldHVybiBjcmVhdGVEZWNvcmF0b3JBbmRBbm5vdGF0aW9uKENPTVBVVEVELCBhcmcxKTtcbiAgfSAvLyBjb21wdXRlZChleHByLCBvcHRpb25zPylcblxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAoIWlzRnVuY3Rpb24oYXJnMSkpIGRpZShcIkZpcnN0IGFyZ3VtZW50IHRvIGBjb21wdXRlZGAgc2hvdWxkIGJlIGFuIGV4cHJlc3Npb24uXCIpO1xuICAgIGlmIChpc0Z1bmN0aW9uKGFyZzIpKSBkaWUoXCJBIHNldHRlciBhcyBzZWNvbmQgYXJndW1lbnQgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCwgdXNlIGB7c2V0OiBmbiB9YCBvcHRpb24gaW5zdGVhZFwiKTtcbiAgfVxuXG4gIHZhciBvcHRzID0gaXNQbGFpbk9iamVjdChhcmcyKSA/IGFyZzIgOiB7fTtcbiAgb3B0cy5nZXQgPSBhcmcxO1xuICBvcHRzLm5hbWUgPSBvcHRzLm5hbWUgfHwgYXJnMS5uYW1lIHx8IFwiXCI7XG4gIC8qIGZvciBnZW5lcmF0ZWQgbmFtZSAqL1xuXG4gIHJldHVybiBuZXcgQ29tcHV0ZWRWYWx1ZShvcHRzKTtcbn07XG5jb21wdXRlZC5hbm5vdGF0aW9uVHlwZV8gPSBDT01QVVRFRDtcbmNvbXB1dGVkLnN0cnVjdCA9IC8qI19fUFVSRV9fKi9hc3NpZ24oZnVuY3Rpb24gKHRhcmdldCwgcHJvcGVydHkpIHtcbiAgc3RvcmVEZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgQ09NUFVURURfU1RSVUNUKTtcbn0sIHtcbiAgYW5ub3RhdGlvblR5cGVfOiBDT01QVVRFRF9TVFJVQ1Rcbn0pO1xuXG52YXIgX2dldERlc2NyaXB0b3IkY29uZmlnLCBfZ2V0RGVzY3JpcHRvcjtcbi8vIG1vYnggdmVyc2lvbnNcblxudmFyIGN1cnJlbnRBY3Rpb25JZCA9IDA7XG52YXIgbmV4dEFjdGlvbklkID0gMTtcbnZhciBpc0Z1bmN0aW9uTmFtZUNvbmZpZ3VyYWJsZSA9IChfZ2V0RGVzY3JpcHRvciRjb25maWcgPSAoX2dldERlc2NyaXB0b3IgPSAvKiNfX1BVUkVfXyovZ2V0RGVzY3JpcHRvcihmdW5jdGlvbiAoKSB7fSwgXCJuYW1lXCIpKSA9PSBudWxsID8gdm9pZCAwIDogX2dldERlc2NyaXB0b3IuY29uZmlndXJhYmxlKSAhPSBudWxsID8gX2dldERlc2NyaXB0b3IkY29uZmlnIDogZmFsc2U7IC8vIHdlIGNhbiBzYWZlbHkgcmVjeWNsZSB0aGlzIG9iamVjdFxuXG52YXIgdG1wTmFtZURlc2NyaXB0b3IgPSB7XG4gIHZhbHVlOiBcImFjdGlvblwiLFxuICBjb25maWd1cmFibGU6IHRydWUsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgZW51bWVyYWJsZTogZmFsc2Vcbn07XG5mdW5jdGlvbiBjcmVhdGVBY3Rpb24oYWN0aW9uTmFtZSwgZm4sIGF1dG9BY3Rpb24sIHJlZikge1xuICBpZiAoYXV0b0FjdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgYXV0b0FjdGlvbiA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmICghaXNGdW5jdGlvbihmbikpIGRpZShcImBhY3Rpb25gIGNhbiBvbmx5IGJlIGludm9rZWQgb24gZnVuY3Rpb25zXCIpO1xuICAgIGlmICh0eXBlb2YgYWN0aW9uTmFtZSAhPT0gXCJzdHJpbmdcIiB8fCAhYWN0aW9uTmFtZSkgZGllKFwiYWN0aW9ucyBzaG91bGQgaGF2ZSB2YWxpZCBuYW1lcywgZ290OiAnXCIgKyBhY3Rpb25OYW1lICsgXCInXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzKCkge1xuICAgIHJldHVybiBleGVjdXRlQWN0aW9uKGFjdGlvbk5hbWUsIGF1dG9BY3Rpb24sIGZuLCByZWYgfHwgdGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJlcy5pc01vYnhBY3Rpb24gPSB0cnVlO1xuXG4gIGlmIChpc0Z1bmN0aW9uTmFtZUNvbmZpZ3VyYWJsZSkge1xuICAgIHRtcE5hbWVEZXNjcmlwdG9yLnZhbHVlID0gYWN0aW9uTmFtZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzLCBcIm5hbWVcIiwgdG1wTmFtZURlc2NyaXB0b3IpO1xuICB9XG5cbiAgcmV0dXJuIHJlcztcbn1cbmZ1bmN0aW9uIGV4ZWN1dGVBY3Rpb24oYWN0aW9uTmFtZSwgY2FuUnVuQXNEZXJpdmF0aW9uLCBmbiwgc2NvcGUsIGFyZ3MpIHtcbiAgdmFyIHJ1bkluZm8gPSBfc3RhcnRBY3Rpb24oYWN0aW9uTmFtZSwgY2FuUnVuQXNEZXJpdmF0aW9uLCBzY29wZSwgYXJncyk7XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gZm4uYXBwbHkoc2NvcGUsIGFyZ3MpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBydW5JbmZvLmVycm9yXyA9IGVycjtcbiAgICB0aHJvdyBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgX2VuZEFjdGlvbihydW5JbmZvKTtcbiAgfVxufVxuZnVuY3Rpb24gX3N0YXJ0QWN0aW9uKGFjdGlvbk5hbWUsIGNhblJ1bkFzRGVyaXZhdGlvbiwgLy8gdHJ1ZSBmb3IgYXV0b0FjdGlvblxuc2NvcGUsIGFyZ3MpIHtcbiAgdmFyIG5vdGlmeVNweV8gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgaXNTcHlFbmFibGVkKCkgJiYgISFhY3Rpb25OYW1lO1xuICB2YXIgc3RhcnRUaW1lXyA9IDA7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBub3RpZnlTcHlfKSB7XG4gICAgc3RhcnRUaW1lXyA9IERhdGUubm93KCk7XG4gICAgdmFyIGZsYXR0ZW5lZEFyZ3MgPSBhcmdzID8gQXJyYXkuZnJvbShhcmdzKSA6IEVNUFRZX0FSUkFZO1xuICAgIHNweVJlcG9ydFN0YXJ0KHtcbiAgICAgIHR5cGU6IEFDVElPTixcbiAgICAgIG5hbWU6IGFjdGlvbk5hbWUsXG4gICAgICBvYmplY3Q6IHNjb3BlLFxuICAgICAgYXJndW1lbnRzOiBmbGF0dGVuZWRBcmdzXG4gICAgfSk7XG4gIH1cblxuICB2YXIgcHJldkRlcml2YXRpb25fID0gZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uO1xuICB2YXIgcnVuQXNBY3Rpb24gPSAhY2FuUnVuQXNEZXJpdmF0aW9uIHx8ICFwcmV2RGVyaXZhdGlvbl87XG4gIHN0YXJ0QmF0Y2goKTtcbiAgdmFyIHByZXZBbGxvd1N0YXRlQ2hhbmdlc18gPSBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlczsgLy8gYnkgZGVmYXVsdCBwcmVzZXJ2ZSBwcmV2aW91cyBhbGxvd1xuXG4gIGlmIChydW5Bc0FjdGlvbikge1xuICAgIHVudHJhY2tlZFN0YXJ0KCk7XG4gICAgcHJldkFsbG93U3RhdGVDaGFuZ2VzXyA9IGFsbG93U3RhdGVDaGFuZ2VzU3RhcnQodHJ1ZSk7XG4gIH1cblxuICB2YXIgcHJldkFsbG93U3RhdGVSZWFkc18gPSBhbGxvd1N0YXRlUmVhZHNTdGFydCh0cnVlKTtcbiAgdmFyIHJ1bkluZm8gPSB7XG4gICAgcnVuQXNBY3Rpb25fOiBydW5Bc0FjdGlvbixcbiAgICBwcmV2RGVyaXZhdGlvbl86IHByZXZEZXJpdmF0aW9uXyxcbiAgICBwcmV2QWxsb3dTdGF0ZUNoYW5nZXNfOiBwcmV2QWxsb3dTdGF0ZUNoYW5nZXNfLFxuICAgIHByZXZBbGxvd1N0YXRlUmVhZHNfOiBwcmV2QWxsb3dTdGF0ZVJlYWRzXyxcbiAgICBub3RpZnlTcHlfOiBub3RpZnlTcHlfLFxuICAgIHN0YXJ0VGltZV86IHN0YXJ0VGltZV8sXG4gICAgYWN0aW9uSWRfOiBuZXh0QWN0aW9uSWQrKyxcbiAgICBwYXJlbnRBY3Rpb25JZF86IGN1cnJlbnRBY3Rpb25JZFxuICB9O1xuICBjdXJyZW50QWN0aW9uSWQgPSBydW5JbmZvLmFjdGlvbklkXztcbiAgcmV0dXJuIHJ1bkluZm87XG59XG5mdW5jdGlvbiBfZW5kQWN0aW9uKHJ1bkluZm8pIHtcbiAgaWYgKGN1cnJlbnRBY3Rpb25JZCAhPT0gcnVuSW5mby5hY3Rpb25JZF8pIHtcbiAgICBkaWUoMzApO1xuICB9XG5cbiAgY3VycmVudEFjdGlvbklkID0gcnVuSW5mby5wYXJlbnRBY3Rpb25JZF87XG5cbiAgaWYgKHJ1bkluZm8uZXJyb3JfICE9PSB1bmRlZmluZWQpIHtcbiAgICBnbG9iYWxTdGF0ZS5zdXBwcmVzc1JlYWN0aW9uRXJyb3JzID0gdHJ1ZTtcbiAgfVxuXG4gIGFsbG93U3RhdGVDaGFuZ2VzRW5kKHJ1bkluZm8ucHJldkFsbG93U3RhdGVDaGFuZ2VzXyk7XG4gIGFsbG93U3RhdGVSZWFkc0VuZChydW5JbmZvLnByZXZBbGxvd1N0YXRlUmVhZHNfKTtcbiAgZW5kQmF0Y2goKTtcbiAgaWYgKHJ1bkluZm8ucnVuQXNBY3Rpb25fKSB1bnRyYWNrZWRFbmQocnVuSW5mby5wcmV2RGVyaXZhdGlvbl8pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgcnVuSW5mby5ub3RpZnlTcHlfKSB7XG4gICAgc3B5UmVwb3J0RW5kKHtcbiAgICAgIHRpbWU6IERhdGUubm93KCkgLSBydW5JbmZvLnN0YXJ0VGltZV9cbiAgICB9KTtcbiAgfVxuXG4gIGdsb2JhbFN0YXRlLnN1cHByZXNzUmVhY3Rpb25FcnJvcnMgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIGFsbG93U3RhdGVDaGFuZ2VzKGFsbG93U3RhdGVDaGFuZ2VzLCBmdW5jKSB7XG4gIHZhciBwcmV2ID0gYWxsb3dTdGF0ZUNoYW5nZXNTdGFydChhbGxvd1N0YXRlQ2hhbmdlcyk7XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gZnVuYygpO1xuICB9IGZpbmFsbHkge1xuICAgIGFsbG93U3RhdGVDaGFuZ2VzRW5kKHByZXYpO1xuICB9XG59XG5mdW5jdGlvbiBhbGxvd1N0YXRlQ2hhbmdlc1N0YXJ0KGFsbG93U3RhdGVDaGFuZ2VzKSB7XG4gIHZhciBwcmV2ID0gZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZUNoYW5nZXM7XG4gIGdsb2JhbFN0YXRlLmFsbG93U3RhdGVDaGFuZ2VzID0gYWxsb3dTdGF0ZUNoYW5nZXM7XG4gIHJldHVybiBwcmV2O1xufVxuZnVuY3Rpb24gYWxsb3dTdGF0ZUNoYW5nZXNFbmQocHJldikge1xuICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcyA9IHByZXY7XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICByZXR1cm4gYXJyMjtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShvLCBhbGxvd0FycmF5TGlrZSkge1xuICB2YXIgaXQ7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7XG4gICAgICBpZiAoaXQpIG8gPSBpdDtcbiAgICAgIHZhciBpID0gMDtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4ge1xuICAgICAgICAgIGRvbmU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgICB2YWx1ZTogb1tpKytdXG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH1cblxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgfVxuXG4gIGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7XG4gIHJldHVybiBpdC5uZXh0LmJpbmQoaXQpO1xufVxuXG52YXIgX1N5bWJvbCR0b1ByaW1pdGl2ZTtcbnZhciBDUkVBVEUgPSBcImNyZWF0ZVwiO1xuX1N5bWJvbCR0b1ByaW1pdGl2ZSA9IFN5bWJvbC50b1ByaW1pdGl2ZTtcbnZhciBPYnNlcnZhYmxlVmFsdWUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9BdG9tKSB7XG4gIF9pbmhlcml0c0xvb3NlKE9ic2VydmFibGVWYWx1ZSwgX0F0b20pO1xuXG4gIGZ1bmN0aW9uIE9ic2VydmFibGVWYWx1ZSh2YWx1ZSwgZW5oYW5jZXIsIG5hbWVfLCBub3RpZnlTcHksIGVxdWFscykge1xuICAgIHZhciBfdGhpcztcblxuICAgIGlmIChuYW1lXyA9PT0gdm9pZCAwKSB7XG4gICAgICBuYW1lXyA9IFwiT2JzZXJ2YWJsZVZhbHVlQFwiICsgZ2V0TmV4dElkKCk7XG4gICAgfVxuXG4gICAgaWYgKG5vdGlmeVNweSA9PT0gdm9pZCAwKSB7XG4gICAgICBub3RpZnlTcHkgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChlcXVhbHMgPT09IHZvaWQgMCkge1xuICAgICAgZXF1YWxzID0gY29tcGFyZXJbXCJkZWZhdWx0XCJdO1xuICAgIH1cblxuICAgIF90aGlzID0gX0F0b20uY2FsbCh0aGlzLCBuYW1lXykgfHwgdGhpcztcbiAgICBfdGhpcy5lbmhhbmNlciA9IHZvaWQgMDtcbiAgICBfdGhpcy5uYW1lXyA9IHZvaWQgMDtcbiAgICBfdGhpcy5lcXVhbHMgPSB2b2lkIDA7XG4gICAgX3RoaXMuaGFzVW5yZXBvcnRlZENoYW5nZV8gPSBmYWxzZTtcbiAgICBfdGhpcy5pbnRlcmNlcHRvcnNfID0gdm9pZCAwO1xuICAgIF90aGlzLmNoYW5nZUxpc3RlbmVyc18gPSB2b2lkIDA7XG4gICAgX3RoaXMudmFsdWVfID0gdm9pZCAwO1xuICAgIF90aGlzLmRlaGFuY2VyID0gdm9pZCAwO1xuICAgIF90aGlzLmVuaGFuY2VyID0gZW5oYW5jZXI7XG4gICAgX3RoaXMubmFtZV8gPSBuYW1lXztcbiAgICBfdGhpcy5lcXVhbHMgPSBlcXVhbHM7XG4gICAgX3RoaXMudmFsdWVfID0gZW5oYW5jZXIodmFsdWUsIHVuZGVmaW5lZCwgbmFtZV8pO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBub3RpZnlTcHkgJiYgaXNTcHlFbmFibGVkKCkpIHtcbiAgICAgIC8vIG9ubHkgbm90aWZ5IHNweSBpZiB0aGlzIGlzIGEgc3RhbmQtYWxvbmUgb2JzZXJ2YWJsZVxuICAgICAgc3B5UmVwb3J0KHtcbiAgICAgICAgdHlwZTogQ1JFQVRFLFxuICAgICAgICBvYmplY3Q6IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLFxuICAgICAgICBvYnNlcnZhYmxlS2luZDogXCJ2YWx1ZVwiLFxuICAgICAgICBkZWJ1Z09iamVjdE5hbWU6IF90aGlzLm5hbWVfLFxuICAgICAgICBuZXdWYWx1ZTogXCJcIiArIF90aGlzLnZhbHVlX1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmRlaGFuY2VWYWx1ZSA9IGZ1bmN0aW9uIGRlaGFuY2VWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmRlaGFuY2VyICE9PSB1bmRlZmluZWQpIHJldHVybiB0aGlzLmRlaGFuY2VyKHZhbHVlKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgX3Byb3RvLnNldCA9IGZ1bmN0aW9uIHNldChuZXdWYWx1ZSkge1xuICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWVfO1xuICAgIG5ld1ZhbHVlID0gdGhpcy5wcmVwYXJlTmV3VmFsdWVfKG5ld1ZhbHVlKTtcblxuICAgIGlmIChuZXdWYWx1ZSAhPT0gZ2xvYmFsU3RhdGUuVU5DSEFOR0VEKSB7XG4gICAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkKCk7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgbm90aWZ5U3B5KSB7XG4gICAgICAgIHNweVJlcG9ydFN0YXJ0KHtcbiAgICAgICAgICB0eXBlOiBVUERBVEUsXG4gICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgIG9ic2VydmFibGVLaW5kOiBcInZhbHVlXCIsXG4gICAgICAgICAgZGVidWdPYmplY3ROYW1lOiB0aGlzLm5hbWVfLFxuICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZSxcbiAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0TmV3VmFsdWVfKG5ld1ZhbHVlKTtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgbm90aWZ5U3B5KSBzcHlSZXBvcnRFbmQoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnByZXBhcmVOZXdWYWx1ZV8gPSBmdW5jdGlvbiBwcmVwYXJlTmV3VmFsdWVfKG5ld1ZhbHVlKSB7XG4gICAgY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQodGhpcyk7XG5cbiAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XG4gICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcbiAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICB0eXBlOiBVUERBVEUsXG4gICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgfSk7XG4gICAgICBpZiAoIWNoYW5nZSkgcmV0dXJuIGdsb2JhbFN0YXRlLlVOQ0hBTkdFRDtcbiAgICAgIG5ld1ZhbHVlID0gY2hhbmdlLm5ld1ZhbHVlO1xuICAgIH0gLy8gYXBwbHkgbW9kaWZpZXJcblxuXG4gICAgbmV3VmFsdWUgPSB0aGlzLmVuaGFuY2VyKG5ld1ZhbHVlLCB0aGlzLnZhbHVlXywgdGhpcy5uYW1lXyk7XG4gICAgcmV0dXJuIHRoaXMuZXF1YWxzKHRoaXMudmFsdWVfLCBuZXdWYWx1ZSkgPyBnbG9iYWxTdGF0ZS5VTkNIQU5HRUQgOiBuZXdWYWx1ZTtcbiAgfTtcblxuICBfcHJvdG8uc2V0TmV3VmFsdWVfID0gZnVuY3Rpb24gc2V0TmV3VmFsdWVfKG5ld1ZhbHVlKSB7XG4gICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZV87XG4gICAgdGhpcy52YWx1ZV8gPSBuZXdWYWx1ZTtcbiAgICB0aGlzLnJlcG9ydENoYW5nZWQoKTtcblxuICAgIGlmIChoYXNMaXN0ZW5lcnModGhpcykpIHtcbiAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCB7XG4gICAgICAgIHR5cGU6IFVQREFURSxcbiAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWUsXG4gICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5nZXQgPSBmdW5jdGlvbiBnZXQoKSB7XG4gICAgdGhpcy5yZXBvcnRPYnNlcnZlZCgpO1xuICAgIHJldHVybiB0aGlzLmRlaGFuY2VWYWx1ZSh0aGlzLnZhbHVlXyk7XG4gIH07XG5cbiAgX3Byb3RvLmludGVyY2VwdF8gPSBmdW5jdGlvbiBpbnRlcmNlcHRfKGhhbmRsZXIpIHtcbiAgICByZXR1cm4gcmVnaXN0ZXJJbnRlcmNlcHRvcih0aGlzLCBoYW5kbGVyKTtcbiAgfTtcblxuICBfcHJvdG8ub2JzZXJ2ZV8gPSBmdW5jdGlvbiBvYnNlcnZlXyhsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgaWYgKGZpcmVJbW1lZGlhdGVseSkgbGlzdGVuZXIoe1xuICAgICAgb2JzZXJ2YWJsZUtpbmQ6IFwidmFsdWVcIixcbiAgICAgIGRlYnVnT2JqZWN0TmFtZTogdGhpcy5uYW1lXyxcbiAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgIHR5cGU6IFVQREFURSxcbiAgICAgIG5ld1ZhbHVlOiB0aGlzLnZhbHVlXyxcbiAgICAgIG9sZFZhbHVlOiB1bmRlZmluZWRcbiAgICB9KTtcbiAgICByZXR1cm4gcmVnaXN0ZXJMaXN0ZW5lcih0aGlzLCBsaXN0ZW5lcik7XG4gIH07XG5cbiAgX3Byb3RvLnJhdyA9IGZ1bmN0aW9uIHJhdygpIHtcbiAgICAvLyB1c2VkIGJ5IE1TVCBvdCBnZXQgdW5kZWhhbmNlZCB2YWx1ZVxuICAgIHJldHVybiB0aGlzLnZhbHVlXztcbiAgfTtcblxuICBfcHJvdG8udG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLmdldCgpO1xuICB9O1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWVfICsgXCJbXCIgKyB0aGlzLnZhbHVlXyArIFwiXVwiO1xuICB9O1xuXG4gIF9wcm90by52YWx1ZU9mID0gZnVuY3Rpb24gdmFsdWVPZigpIHtcbiAgICByZXR1cm4gdG9QcmltaXRpdmUodGhpcy5nZXQoKSk7XG4gIH07XG5cbiAgX3Byb3RvW19TeW1ib2wkdG9QcmltaXRpdmVdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgfTtcblxuICByZXR1cm4gT2JzZXJ2YWJsZVZhbHVlO1xufShBdG9tKTtcbnZhciBpc09ic2VydmFibGVWYWx1ZSA9IC8qI19fUFVSRV9fKi9jcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlKFwiT2JzZXJ2YWJsZVZhbHVlXCIsIE9ic2VydmFibGVWYWx1ZSk7XG5cbnZhciBfU3ltYm9sJHRvUHJpbWl0aXZlJDE7XG4vKipcclxuICogQSBub2RlIGluIHRoZSBzdGF0ZSBkZXBlbmRlbmN5IHJvb3QgdGhhdCBvYnNlcnZlcyBvdGhlciBub2RlcywgYW5kIGNhbiBiZSBvYnNlcnZlZCBpdHNlbGYuXHJcbiAqXHJcbiAqIENvbXB1dGVkVmFsdWUgd2lsbCByZW1lbWJlciB0aGUgcmVzdWx0IG9mIHRoZSBjb21wdXRhdGlvbiBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSBiYXRjaCwgb3JcclxuICogd2hpbGUgYmVpbmcgb2JzZXJ2ZWQuXHJcbiAqXHJcbiAqIER1cmluZyB0aGlzIHRpbWUgaXQgd2lsbCByZWNvbXB1dGUgb25seSB3aGVuIG9uZSBvZiBpdHMgZGlyZWN0IGRlcGVuZGVuY2llcyBjaGFuZ2VkLFxyXG4gKiBidXQgb25seSB3aGVuIGl0IGlzIGJlaW5nIGFjY2Vzc2VkIHdpdGggYENvbXB1dGVkVmFsdWUuZ2V0KClgLlxyXG4gKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiBkZXNjcmlwdGlvbjpcclxuICogMS4gRmlyc3QgdGltZSBpdCdzIGJlaW5nIGFjY2Vzc2VkIGl0IHdpbGwgY29tcHV0ZSBhbmQgcmVtZW1iZXIgcmVzdWx0XHJcbiAqICAgIGdpdmUgYmFjayByZW1lbWJlcmVkIHJlc3VsdCB1bnRpbCAyLiBoYXBwZW5zXHJcbiAqIDIuIEZpcnN0IHRpbWUgYW55IGRlZXAgZGVwZW5kZW5jeSBjaGFuZ2UsIHByb3BhZ2F0ZSBQT1NTSUJMWV9TVEFMRSB0byBhbGwgb2JzZXJ2ZXJzLCB3YWl0IGZvciAzLlxyXG4gKiAzLiBXaGVuIGl0J3MgYmVpbmcgYWNjZXNzZWQsIHJlY29tcHV0ZSBpZiBhbnkgc2hhbGxvdyBkZXBlbmRlbmN5IGNoYW5nZWQuXHJcbiAqICAgIGlmIHJlc3VsdCBjaGFuZ2VkOiBwcm9wYWdhdGUgU1RBTEUgdG8gYWxsIG9ic2VydmVycywgdGhhdCB3ZXJlIFBPU1NJQkxZX1NUQUxFIGZyb20gdGhlIGxhc3Qgc3RlcC5cclxuICogICAgZ28gdG8gc3RlcCAyLiBlaXRoZXIgd2F5XHJcbiAqXHJcbiAqIElmIGF0IGFueSBwb2ludCBpdCdzIG91dHNpZGUgYmF0Y2ggYW5kIGl0IGlzbid0IG9ic2VydmVkOiByZXNldCBldmVyeXRoaW5nIGFuZCBnbyB0byAxLlxyXG4gKi9cblxuX1N5bWJvbCR0b1ByaW1pdGl2ZSQxID0gU3ltYm9sLnRvUHJpbWl0aXZlO1xudmFyIENvbXB1dGVkVmFsdWUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvLyBub2RlcyB3ZSBhcmUgbG9va2luZyBhdC4gT3VyIHZhbHVlIGRlcGVuZHMgb24gdGhlc2Ugbm9kZXNcbiAgLy8gZHVyaW5nIHRyYWNraW5nIGl0J3MgYW4gYXJyYXkgd2l0aCBuZXcgb2JzZXJ2ZWQgb2JzZXJ2ZXJzXG4gIC8vIHRvIGNoZWNrIGZvciBjeWNsZXNcbiAgLy8gTi5COiB1bm1pbmlmaWVkIGFzIGl0IGlzIHVzZWQgYnkgTVNUXG5cbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgbmV3IGNvbXB1dGVkIHZhbHVlIGJhc2VkIG9uIGEgZnVuY3Rpb24gZXhwcmVzc2lvbi5cclxuICAgKlxyXG4gICAqIFRoZSBgbmFtZWAgcHJvcGVydHkgaXMgZm9yIGRlYnVnIHB1cnBvc2VzIG9ubHkuXHJcbiAgICpcclxuICAgKiBUaGUgYGVxdWFsc2AgcHJvcGVydHkgc3BlY2lmaWVzIHRoZSBjb21wYXJlciBmdW5jdGlvbiB0byB1c2UgdG8gZGV0ZXJtaW5lIGlmIGEgbmV3bHkgcHJvZHVjZWRcclxuICAgKiB2YWx1ZSBkaWZmZXJzIGZyb20gdGhlIHByZXZpb3VzIHZhbHVlLiBUd28gY29tcGFyZXJzIGFyZSBwcm92aWRlZCBpbiB0aGUgbGlicmFyeTsgYGRlZmF1bHRDb21wYXJlcmBcclxuICAgKiBjb21wYXJlcyBiYXNlZCBvbiBpZGVudGl0eSBjb21wYXJpc29uICg9PT0pLCBhbmQgYHN0cnVjdHVyYWxDb21wYXJlcmAgZGVlcGx5IGNvbXBhcmVzIHRoZSBzdHJ1Y3R1cmUuXHJcbiAgICogU3RydWN0dXJhbCBjb21wYXJpc29uIGNhbiBiZSBjb252ZW5pZW50IGlmIHlvdSBhbHdheXMgcHJvZHVjZSBhIG5ldyBhZ2dyZWdhdGVkIG9iamVjdCBhbmRcclxuICAgKiBkb24ndCB3YW50IHRvIG5vdGlmeSBvYnNlcnZlcnMgaWYgaXQgaXMgc3RydWN0dXJhbGx5IHRoZSBzYW1lLlxyXG4gICAqIFRoaXMgaXMgdXNlZnVsIGZvciB3b3JraW5nIHdpdGggdmVjdG9ycywgbW91c2UgY29vcmRpbmF0ZXMgZXRjLlxyXG4gICAqL1xuICBmdW5jdGlvbiBDb21wdXRlZFZhbHVlKG9wdGlvbnMpIHtcbiAgICB0aGlzLmRlcGVuZGVuY2llc1N0YXRlXyA9IElEZXJpdmF0aW9uU3RhdGVfLk5PVF9UUkFDS0lOR187XG4gICAgdGhpcy5vYnNlcnZpbmdfID0gW107XG4gICAgdGhpcy5uZXdPYnNlcnZpbmdfID0gbnVsbDtcbiAgICB0aGlzLmlzQmVpbmdPYnNlcnZlZF8gPSBmYWxzZTtcbiAgICB0aGlzLmlzUGVuZGluZ1Vub2JzZXJ2YXRpb25fID0gZmFsc2U7XG4gICAgdGhpcy5vYnNlcnZlcnNfID0gbmV3IFNldCgpO1xuICAgIHRoaXMuZGlmZlZhbHVlXyA9IDA7XG4gICAgdGhpcy5ydW5JZF8gPSAwO1xuICAgIHRoaXMubGFzdEFjY2Vzc2VkQnlfID0gMDtcbiAgICB0aGlzLmxvd2VzdE9ic2VydmVyU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uVVBfVE9fREFURV87XG4gICAgdGhpcy51bmJvdW5kRGVwc0NvdW50XyA9IDA7XG4gICAgdGhpcy5tYXBpZF8gPSBcIiNcIiArIGdldE5leHRJZCgpO1xuICAgIHRoaXMudmFsdWVfID0gbmV3IENhdWdodEV4Y2VwdGlvbihudWxsKTtcbiAgICB0aGlzLm5hbWVfID0gdm9pZCAwO1xuICAgIHRoaXMudHJpZ2dlcmVkQnlfID0gdm9pZCAwO1xuICAgIHRoaXMuaXNDb21wdXRpbmdfID0gZmFsc2U7XG4gICAgdGhpcy5pc1J1bm5pbmdTZXR0ZXJfID0gZmFsc2U7XG4gICAgdGhpcy5kZXJpdmF0aW9uID0gdm9pZCAwO1xuICAgIHRoaXMuc2V0dGVyXyA9IHZvaWQgMDtcbiAgICB0aGlzLmlzVHJhY2luZ18gPSBUcmFjZU1vZGUuTk9ORTtcbiAgICB0aGlzLnNjb3BlXyA9IHZvaWQgMDtcbiAgICB0aGlzLmVxdWFsc18gPSB2b2lkIDA7XG4gICAgdGhpcy5yZXF1aXJlc1JlYWN0aW9uXyA9IHZvaWQgMDtcbiAgICB0aGlzLmtlZXBBbGl2ZV8gPSB2b2lkIDA7XG4gICAgdGhpcy5vbkJPTCA9IHZvaWQgMDtcbiAgICB0aGlzLm9uQlVPTCA9IHZvaWQgMDtcbiAgICBpZiAoIW9wdGlvbnMuZ2V0KSBkaWUoMzEpO1xuICAgIHRoaXMuZGVyaXZhdGlvbiA9IG9wdGlvbnMuZ2V0O1xuICAgIHRoaXMubmFtZV8gPSBvcHRpb25zLm5hbWUgfHwgXCJDb21wdXRlZFZhbHVlQFwiICsgZ2V0TmV4dElkKCk7XG4gICAgaWYgKG9wdGlvbnMuc2V0KSB0aGlzLnNldHRlcl8gPSBjcmVhdGVBY3Rpb24odGhpcy5uYW1lXyArIFwiLXNldHRlclwiLCBvcHRpb25zLnNldCk7XG4gICAgdGhpcy5lcXVhbHNfID0gb3B0aW9ucy5lcXVhbHMgfHwgKG9wdGlvbnMuY29tcGFyZVN0cnVjdHVyYWwgfHwgb3B0aW9ucy5zdHJ1Y3QgPyBjb21wYXJlci5zdHJ1Y3R1cmFsIDogY29tcGFyZXJbXCJkZWZhdWx0XCJdKTtcbiAgICB0aGlzLnNjb3BlXyA9IG9wdGlvbnMuY29udGV4dDtcbiAgICB0aGlzLnJlcXVpcmVzUmVhY3Rpb25fID0gISFvcHRpb25zLnJlcXVpcmVzUmVhY3Rpb247XG4gICAgdGhpcy5rZWVwQWxpdmVfID0gISFvcHRpb25zLmtlZXBBbGl2ZTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBDb21wdXRlZFZhbHVlLnByb3RvdHlwZTtcblxuICBfcHJvdG8ub25CZWNvbWVTdGFsZV8gPSBmdW5jdGlvbiBvbkJlY29tZVN0YWxlXygpIHtcbiAgICBwcm9wYWdhdGVNYXliZUNoYW5nZWQodGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvLm9uQk8gPSBmdW5jdGlvbiBvbkJPKCkge1xuICAgIGlmICh0aGlzLm9uQk9MKSB7XG4gICAgICB0aGlzLm9uQk9MLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5vbkJVTyA9IGZ1bmN0aW9uIG9uQlVPKCkge1xuICAgIGlmICh0aGlzLm9uQlVPTCkge1xuICAgICAgdGhpcy5vbkJVT0wuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGlzIGNvbXB1dGVkIHZhbHVlLlxyXG4gICAqIFdpbGwgZXZhbHVhdGUgaXRzIGNvbXB1dGF0aW9uIGZpcnN0IGlmIG5lZWRlZC5cclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5nZXQgPSBmdW5jdGlvbiBnZXQoKSB7XG4gICAgaWYgKHRoaXMuaXNDb21wdXRpbmdfKSBkaWUoMzIsIHRoaXMubmFtZV8sIHRoaXMuZGVyaXZhdGlvbik7XG5cbiAgICBpZiAoZ2xvYmFsU3RhdGUuaW5CYXRjaCA9PT0gMCAmJiAvLyAhZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0cGlvbiAmJlxuICAgIHRoaXMub2JzZXJ2ZXJzXy5zaXplID09PSAwICYmICF0aGlzLmtlZXBBbGl2ZV8pIHtcbiAgICAgIGlmIChzaG91bGRDb21wdXRlKHRoaXMpKSB7XG4gICAgICAgIHRoaXMud2FybkFib3V0VW50cmFja2VkUmVhZF8oKTtcbiAgICAgICAgc3RhcnRCYXRjaCgpOyAvLyBTZWUgcGVyZiB0ZXN0ICdjb21wdXRlZCBtZW1vaXphdGlvbidcblxuICAgICAgICB0aGlzLnZhbHVlXyA9IHRoaXMuY29tcHV0ZVZhbHVlXyhmYWxzZSk7XG4gICAgICAgIGVuZEJhdGNoKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcG9ydE9ic2VydmVkKHRoaXMpO1xuXG4gICAgICBpZiAoc2hvdWxkQ29tcHV0ZSh0aGlzKSkge1xuICAgICAgICB2YXIgcHJldlRyYWNraW5nQ29udGV4dCA9IGdsb2JhbFN0YXRlLnRyYWNraW5nQ29udGV4dDtcbiAgICAgICAgaWYgKHRoaXMua2VlcEFsaXZlXyAmJiAhcHJldlRyYWNraW5nQ29udGV4dCkgZ2xvYmFsU3RhdGUudHJhY2tpbmdDb250ZXh0ID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMudHJhY2tBbmRDb21wdXRlKCkpIHByb3BhZ2F0ZUNoYW5nZUNvbmZpcm1lZCh0aGlzKTtcbiAgICAgICAgZ2xvYmFsU3RhdGUudHJhY2tpbmdDb250ZXh0ID0gcHJldlRyYWNraW5nQ29udGV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gdGhpcy52YWx1ZV87XG4gICAgaWYgKGlzQ2F1Z2h0RXhjZXB0aW9uKHJlc3VsdCkpIHRocm93IHJlc3VsdC5jYXVzZTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIF9wcm90by5zZXQgPSBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICBpZiAodGhpcy5zZXR0ZXJfKSB7XG4gICAgICBpZiAodGhpcy5pc1J1bm5pbmdTZXR0ZXJfKSBkaWUoMzMsIHRoaXMubmFtZV8pO1xuICAgICAgdGhpcy5pc1J1bm5pbmdTZXR0ZXJfID0gdHJ1ZTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5zZXR0ZXJfLmNhbGwodGhpcy5zY29wZV8sIHZhbHVlKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRoaXMuaXNSdW5uaW5nU2V0dGVyXyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBkaWUoMzQsIHRoaXMubmFtZV8pO1xuICB9O1xuXG4gIF9wcm90by50cmFja0FuZENvbXB1dGUgPSBmdW5jdGlvbiB0cmFja0FuZENvbXB1dGUoKSB7XG4gICAgLy8gTi5COiB1bm1pbmlmaWVkIGFzIGl0IGlzIHVzZWQgYnkgTVNUXG4gICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZV87XG4gICAgdmFyIHdhc1N1c3BlbmRlZCA9XG4gICAgLyogc2VlICMxMjA4ICovXG4gICAgdGhpcy5kZXBlbmRlbmNpZXNTdGF0ZV8gPT09IElEZXJpdmF0aW9uU3RhdGVfLk5PVF9UUkFDS0lOR187XG4gICAgdmFyIG5ld1ZhbHVlID0gdGhpcy5jb21wdXRlVmFsdWVfKHRydWUpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBpc1NweUVuYWJsZWQoKSkge1xuICAgICAgc3B5UmVwb3J0KHtcbiAgICAgICAgb2JzZXJ2YWJsZUtpbmQ6IFwiY29tcHV0ZWRcIixcbiAgICAgICAgZGVidWdPYmplY3ROYW1lOiB0aGlzLm5hbWVfLFxuICAgICAgICBvYmplY3Q6IHRoaXMuc2NvcGVfLFxuICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICBvbGRWYWx1ZTogdGhpcy52YWx1ZV8sXG4gICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGNoYW5nZWQgPSB3YXNTdXNwZW5kZWQgfHwgaXNDYXVnaHRFeGNlcHRpb24ob2xkVmFsdWUpIHx8IGlzQ2F1Z2h0RXhjZXB0aW9uKG5ld1ZhbHVlKSB8fCAhdGhpcy5lcXVhbHNfKG9sZFZhbHVlLCBuZXdWYWx1ZSk7XG5cbiAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgdGhpcy52YWx1ZV8gPSBuZXdWYWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hhbmdlZDtcbiAgfTtcblxuICBfcHJvdG8uY29tcHV0ZVZhbHVlXyA9IGZ1bmN0aW9uIGNvbXB1dGVWYWx1ZV8odHJhY2spIHtcbiAgICB0aGlzLmlzQ29tcHV0aW5nXyA9IHRydWU7IC8vIGRvbid0IGFsbG93IHN0YXRlIGNoYW5nZXMgZHVyaW5nIGNvbXB1dGF0aW9uXG5cbiAgICB2YXIgcHJldiA9IGFsbG93U3RhdGVDaGFuZ2VzU3RhcnQoZmFsc2UpO1xuICAgIHZhciByZXM7XG5cbiAgICBpZiAodHJhY2spIHtcbiAgICAgIHJlcyA9IHRyYWNrRGVyaXZlZEZ1bmN0aW9uKHRoaXMsIHRoaXMuZGVyaXZhdGlvbiwgdGhpcy5zY29wZV8pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZ2xvYmFsU3RhdGUuZGlzYWJsZUVycm9yQm91bmRhcmllcyA9PT0gdHJ1ZSkge1xuICAgICAgICByZXMgPSB0aGlzLmRlcml2YXRpb24uY2FsbCh0aGlzLnNjb3BlXyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlcyA9IHRoaXMuZGVyaXZhdGlvbi5jYWxsKHRoaXMuc2NvcGVfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJlcyA9IG5ldyBDYXVnaHRFeGNlcHRpb24oZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBhbGxvd1N0YXRlQ2hhbmdlc0VuZChwcmV2KTtcbiAgICB0aGlzLmlzQ29tcHV0aW5nXyA9IGZhbHNlO1xuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgX3Byb3RvLnN1c3BlbmRfID0gZnVuY3Rpb24gc3VzcGVuZF8oKSB7XG4gICAgaWYgKCF0aGlzLmtlZXBBbGl2ZV8pIHtcbiAgICAgIGNsZWFyT2JzZXJ2aW5nKHRoaXMpO1xuICAgICAgdGhpcy52YWx1ZV8gPSB1bmRlZmluZWQ7IC8vIGRvbid0IGhvbGQgb24gdG8gY29tcHV0ZWQgdmFsdWUhXG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5vYnNlcnZlXyA9IGZ1bmN0aW9uIG9ic2VydmVfKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIGZpcnN0VGltZSA9IHRydWU7XG4gICAgdmFyIHByZXZWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gYXV0b3J1bihmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBUT0RPOiB3aHkgaXMgdGhpcyBpbiBhIGRpZmZlcmVudCBwbGFjZSB0aGFuIHRoZSBzcHlSZXBvcnQoKSBmdW5jdGlvbj8gaW4gYWxsIG90aGVyIG9ic2VydmFibGVzIGl0J3MgY2FsbGVkIGluIHRoZSBzYW1lIHBsYWNlXG4gICAgICB2YXIgbmV3VmFsdWUgPSBfdGhpcy5nZXQoKTtcblxuICAgICAgaWYgKCFmaXJzdFRpbWUgfHwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgIHZhciBwcmV2VSA9IHVudHJhY2tlZFN0YXJ0KCk7XG4gICAgICAgIGxpc3RlbmVyKHtcbiAgICAgICAgICBvYnNlcnZhYmxlS2luZDogXCJjb21wdXRlZFwiLFxuICAgICAgICAgIGRlYnVnT2JqZWN0TmFtZTogX3RoaXMubmFtZV8sXG4gICAgICAgICAgdHlwZTogVVBEQVRFLFxuICAgICAgICAgIG9iamVjdDogX3RoaXMsXG4gICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgICAgIG9sZFZhbHVlOiBwcmV2VmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIHVudHJhY2tlZEVuZChwcmV2VSk7XG4gICAgICB9XG5cbiAgICAgIGZpcnN0VGltZSA9IGZhbHNlO1xuICAgICAgcHJldlZhbHVlID0gbmV3VmFsdWU7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLndhcm5BYm91dFVudHJhY2tlZFJlYWRfID0gZnVuY3Rpb24gd2FybkFib3V0VW50cmFja2VkUmVhZF8oKSB7XG4gICAgaWYgKCEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMucmVxdWlyZXNSZWFjdGlvbl8gPT09IHRydWUpIHtcbiAgICAgIGRpZShcIlttb2J4XSBDb21wdXRlZCB2YWx1ZSBcIiArIHRoaXMubmFtZV8gKyBcIiBpcyByZWFkIG91dHNpZGUgYSByZWFjdGl2ZSBjb250ZXh0XCIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzVHJhY2luZ18gIT09IFRyYWNlTW9kZS5OT05FKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlttb2J4LnRyYWNlXSAnXCIgKyB0aGlzLm5hbWVfICsgXCInIGlzIGJlaW5nIHJlYWQgb3V0c2lkZSBhIHJlYWN0aXZlIGNvbnRleHQuIERvaW5nIGEgZnVsbCByZWNvbXB1dGVcIik7XG4gICAgfVxuXG4gICAgaWYgKGdsb2JhbFN0YXRlLmNvbXB1dGVkUmVxdWlyZXNSZWFjdGlvbikge1xuICAgICAgY29uc29sZS53YXJuKFwiW21vYnhdIENvbXB1dGVkIHZhbHVlIFwiICsgdGhpcy5uYW1lXyArIFwiIGlzIGJlaW5nIHJlYWQgb3V0c2lkZSBhIHJlYWN0aXZlIGNvbnRleHQuIERvaW5nIGEgZnVsbCByZWNvbXB1dGVcIik7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWVfICsgXCJbXCIgKyB0aGlzLmRlcml2YXRpb24udG9TdHJpbmcoKSArIFwiXVwiO1xuICB9O1xuXG4gIF9wcm90by52YWx1ZU9mID0gZnVuY3Rpb24gdmFsdWVPZigpIHtcbiAgICByZXR1cm4gdG9QcmltaXRpdmUodGhpcy5nZXQoKSk7XG4gIH07XG5cbiAgX3Byb3RvW19TeW1ib2wkdG9QcmltaXRpdmUkMV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICB9O1xuXG4gIHJldHVybiBDb21wdXRlZFZhbHVlO1xufSgpO1xudmFyIGlzQ29tcHV0ZWRWYWx1ZSA9IC8qI19fUFVSRV9fKi9jcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlKFwiQ29tcHV0ZWRWYWx1ZVwiLCBDb21wdXRlZFZhbHVlKTtcblxudmFyIElEZXJpdmF0aW9uU3RhdGVfO1xuXG4oZnVuY3Rpb24gKElEZXJpdmF0aW9uU3RhdGVfKSB7XG4gIC8vIGJlZm9yZSBiZWluZyBydW4gb3IgKG91dHNpZGUgYmF0Y2ggYW5kIG5vdCBiZWluZyBvYnNlcnZlZClcbiAgLy8gYXQgdGhpcyBwb2ludCBkZXJpdmF0aW9uIGlzIG5vdCBob2xkaW5nIGFueSBkYXRhIGFib3V0IGRlcGVuZGVuY3kgdHJlZVxuICBJRGVyaXZhdGlvblN0YXRlX1tJRGVyaXZhdGlvblN0YXRlX1tcIk5PVF9UUkFDS0lOR19cIl0gPSAtMV0gPSBcIk5PVF9UUkFDS0lOR19cIjsgLy8gbm8gc2hhbGxvdyBkZXBlbmRlbmN5IGNoYW5nZWQgc2luY2UgbGFzdCBjb21wdXRhdGlvblxuICAvLyB3b24ndCByZWNhbGN1bGF0ZSBkZXJpdmF0aW9uXG4gIC8vIHRoaXMgaXMgd2hhdCBtYWtlcyBtb2J4IGZhc3RcblxuICBJRGVyaXZhdGlvblN0YXRlX1tJRGVyaXZhdGlvblN0YXRlX1tcIlVQX1RPX0RBVEVfXCJdID0gMF0gPSBcIlVQX1RPX0RBVEVfXCI7IC8vIHNvbWUgZGVlcCBkZXBlbmRlbmN5IGNoYW5nZWQsIGJ1dCBkb24ndCBrbm93IGlmIHNoYWxsb3cgZGVwZW5kZW5jeSBjaGFuZ2VkXG4gIC8vIHdpbGwgcmVxdWlyZSB0byBjaGVjayBmaXJzdCBpZiBVUF9UT19EQVRFIG9yIFBPU1NJQkxZX1NUQUxFXG4gIC8vIGN1cnJlbnRseSBvbmx5IENvbXB1dGVkVmFsdWUgd2lsbCBwcm9wYWdhdGUgUE9TU0lCTFlfU1RBTEVcbiAgLy9cbiAgLy8gaGF2aW5nIHRoaXMgc3RhdGUgaXMgc2Vjb25kIGJpZyBvcHRpbWl6YXRpb246XG4gIC8vIGRvbid0IGhhdmUgdG8gcmVjb21wdXRlIG9uIGV2ZXJ5IGRlcGVuZGVuY3kgY2hhbmdlLCBidXQgb25seSB3aGVuIGl0J3MgbmVlZGVkXG5cbiAgSURlcml2YXRpb25TdGF0ZV9bSURlcml2YXRpb25TdGF0ZV9bXCJQT1NTSUJMWV9TVEFMRV9cIl0gPSAxXSA9IFwiUE9TU0lCTFlfU1RBTEVfXCI7IC8vIEEgc2hhbGxvdyBkZXBlbmRlbmN5IGhhcyBjaGFuZ2VkIHNpbmNlIGxhc3QgY29tcHV0YXRpb24gYW5kIHRoZSBkZXJpdmF0aW9uXG4gIC8vIHdpbGwgbmVlZCB0byByZWNvbXB1dGUgd2hlbiBpdCdzIG5lZWRlZCBuZXh0LlxuXG4gIElEZXJpdmF0aW9uU3RhdGVfW0lEZXJpdmF0aW9uU3RhdGVfW1wiU1RBTEVfXCJdID0gMl0gPSBcIlNUQUxFX1wiO1xufSkoSURlcml2YXRpb25TdGF0ZV8gfHwgKElEZXJpdmF0aW9uU3RhdGVfID0ge30pKTtcblxudmFyIFRyYWNlTW9kZTtcblxuKGZ1bmN0aW9uIChUcmFjZU1vZGUpIHtcbiAgVHJhY2VNb2RlW1RyYWNlTW9kZVtcIk5PTkVcIl0gPSAwXSA9IFwiTk9ORVwiO1xuICBUcmFjZU1vZGVbVHJhY2VNb2RlW1wiTE9HXCJdID0gMV0gPSBcIkxPR1wiO1xuICBUcmFjZU1vZGVbVHJhY2VNb2RlW1wiQlJFQUtcIl0gPSAyXSA9IFwiQlJFQUtcIjtcbn0pKFRyYWNlTW9kZSB8fCAoVHJhY2VNb2RlID0ge30pKTtcblxudmFyIENhdWdodEV4Y2VwdGlvbiA9IGZ1bmN0aW9uIENhdWdodEV4Y2VwdGlvbihjYXVzZSkge1xuICB0aGlzLmNhdXNlID0gdm9pZCAwO1xuICB0aGlzLmNhdXNlID0gY2F1c2U7IC8vIEVtcHR5XG59O1xuZnVuY3Rpb24gaXNDYXVnaHRFeGNlcHRpb24oZSkge1xuICByZXR1cm4gZSBpbnN0YW5jZW9mIENhdWdodEV4Y2VwdGlvbjtcbn1cbi8qKlxyXG4gKiBGaW5kcyBvdXQgd2hldGhlciBhbnkgZGVwZW5kZW5jeSBvZiB0aGUgZGVyaXZhdGlvbiBoYXMgYWN0dWFsbHkgY2hhbmdlZC5cclxuICogSWYgZGVwZW5kZW5jaWVzU3RhdGUgaXMgMSB0aGVuIGl0IHdpbGwgcmVjYWxjdWxhdGUgZGVwZW5kZW5jaWVzLFxyXG4gKiBpZiBhbnkgZGVwZW5kZW5jeSBjaGFuZ2VkIGl0IHdpbGwgcHJvcGFnYXRlIGl0IGJ5IGNoYW5naW5nIGRlcGVuZGVuY2llc1N0YXRlIHRvIDIuXHJcbiAqXHJcbiAqIEJ5IGl0ZXJhdGluZyBvdmVyIHRoZSBkZXBlbmRlbmNpZXMgaW4gdGhlIHNhbWUgb3JkZXIgdGhhdCB0aGV5IHdlcmUgcmVwb3J0ZWQgYW5kXHJcbiAqIHN0b3BwaW5nIG9uIHRoZSBmaXJzdCBjaGFuZ2UsIGFsbCB0aGUgcmVjYWxjdWxhdGlvbnMgYXJlIG9ubHkgY2FsbGVkIGZvciBDb21wdXRlZFZhbHVlc1xyXG4gKiB0aGF0IHdpbGwgYmUgdHJhY2tlZCBieSBkZXJpdmF0aW9uLiBUaGF0IGlzIGJlY2F1c2Ugd2UgYXNzdW1lIHRoYXQgaWYgdGhlIGZpcnN0IHhcclxuICogZGVwZW5kZW5jaWVzIG9mIHRoZSBkZXJpdmF0aW9uIGRvZXNuJ3QgY2hhbmdlIHRoZW4gdGhlIGRlcml2YXRpb24gc2hvdWxkIHJ1biB0aGUgc2FtZSB3YXlcclxuICogdXAgdW50aWwgYWNjZXNzaW5nIHgtdGggZGVwZW5kZW5jeS5cclxuICovXG5cbmZ1bmN0aW9uIHNob3VsZENvbXB1dGUoZGVyaXZhdGlvbikge1xuICBzd2l0Y2ggKGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGVfKSB7XG4gICAgY2FzZSBJRGVyaXZhdGlvblN0YXRlXy5VUF9UT19EQVRFXzpcbiAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIGNhc2UgSURlcml2YXRpb25TdGF0ZV8uTk9UX1RSQUNLSU5HXzpcbiAgICBjYXNlIElEZXJpdmF0aW9uU3RhdGVfLlNUQUxFXzpcbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgY2FzZSBJRGVyaXZhdGlvblN0YXRlXy5QT1NTSUJMWV9TVEFMRV86XG4gICAgICB7XG4gICAgICAgIC8vIHN0YXRlIHByb3BhZ2F0aW9uIGNhbiBvY2N1ciBvdXRzaWRlIG9mIGFjdGlvbi9yZWFjdGl2ZSBjb250ZXh0ICMyMTk1XG4gICAgICAgIHZhciBwcmV2QWxsb3dTdGF0ZVJlYWRzID0gYWxsb3dTdGF0ZVJlYWRzU3RhcnQodHJ1ZSk7XG4gICAgICAgIHZhciBwcmV2VW50cmFja2VkID0gdW50cmFja2VkU3RhcnQoKTsgLy8gbm8gbmVlZCBmb3IgdGhvc2UgY29tcHV0ZWRzIHRvIGJlIHJlcG9ydGVkLCB0aGV5IHdpbGwgYmUgcGlja2VkIHVwIGluIHRyYWNrRGVyaXZlZEZ1bmN0aW9uLlxuXG4gICAgICAgIHZhciBvYnMgPSBkZXJpdmF0aW9uLm9ic2VydmluZ18sXG4gICAgICAgICAgICBsID0gb2JzLmxlbmd0aDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIHZhciBvYmogPSBvYnNbaV07XG5cbiAgICAgICAgICBpZiAoaXNDb21wdXRlZFZhbHVlKG9iaikpIHtcbiAgICAgICAgICAgIGlmIChnbG9iYWxTdGF0ZS5kaXNhYmxlRXJyb3JCb3VuZGFyaWVzKSB7XG4gICAgICAgICAgICAgIG9iai5nZXQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgb2JqLmdldCgpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gd2UgYXJlIG5vdCBpbnRlcmVzdGVkIGluIHRoZSB2YWx1ZSAqb3IqIGV4Y2VwdGlvbiBhdCB0aGlzIG1vbWVudCwgYnV0IGlmIHRoZXJlIGlzIG9uZSwgbm90aWZ5IGFsbFxuICAgICAgICAgICAgICAgIHVudHJhY2tlZEVuZChwcmV2VW50cmFja2VkKTtcbiAgICAgICAgICAgICAgICBhbGxvd1N0YXRlUmVhZHNFbmQocHJldkFsbG93U3RhdGVSZWFkcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gLy8gaWYgQ29tcHV0ZWRWYWx1ZSBgb2JqYCBhY3R1YWxseSBjaGFuZ2VkIGl0IHdpbGwgYmUgY29tcHV0ZWQgYW5kIHByb3BhZ2F0ZWQgdG8gaXRzIG9ic2VydmVycy5cbiAgICAgICAgICAgIC8vIGFuZCBgZGVyaXZhdGlvbmAgaXMgYW4gb2JzZXJ2ZXIgb2YgYG9iamBcbiAgICAgICAgICAgIC8vIGludmFyaWFudFNob3VsZENvbXB1dGUoZGVyaXZhdGlvbilcblxuXG4gICAgICAgICAgICBpZiAoZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZV8gPT09IElEZXJpdmF0aW9uU3RhdGVfLlNUQUxFXykge1xuICAgICAgICAgICAgICB1bnRyYWNrZWRFbmQocHJldlVudHJhY2tlZCk7XG4gICAgICAgICAgICAgIGFsbG93U3RhdGVSZWFkc0VuZChwcmV2QWxsb3dTdGF0ZVJlYWRzKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2hhbmdlRGVwZW5kZW5jaWVzU3RhdGVUbzAoZGVyaXZhdGlvbik7XG4gICAgICAgIHVudHJhY2tlZEVuZChwcmV2VW50cmFja2VkKTtcbiAgICAgICAgYWxsb3dTdGF0ZVJlYWRzRW5kKHByZXZBbGxvd1N0YXRlUmVhZHMpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGlzQ29tcHV0aW5nRGVyaXZhdGlvbigpIHtcbiAgcmV0dXJuIGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbiAhPT0gbnVsbDsgLy8gZmlsdGVyIG91dCBhY3Rpb25zIGluc2lkZSBjb21wdXRhdGlvbnNcbn1cbmZ1bmN0aW9uIGNoZWNrSWZTdGF0ZU1vZGlmaWNhdGlvbnNBcmVBbGxvd2VkKGF0b20pIHtcbiAgaWYgKCEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBoYXNPYnNlcnZlcnMgPSBhdG9tLm9ic2VydmVyc18uc2l6ZSA+IDA7IC8vIFNob3VsZCBub3QgYmUgcG9zc2libGUgdG8gY2hhbmdlIG9ic2VydmVkIHN0YXRlIG91dHNpZGUgc3RyaWN0IG1vZGUsIGV4Y2VwdCBkdXJpbmcgaW5pdGlhbGl6YXRpb24sIHNlZSAjNTYzXG5cbiAgaWYgKCFnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcyAmJiAoaGFzT2JzZXJ2ZXJzIHx8IGdsb2JhbFN0YXRlLmVuZm9yY2VBY3Rpb25zID09PSBcImFsd2F5c1wiKSkgY29uc29sZS53YXJuKFwiW01vYlhdIFwiICsgKGdsb2JhbFN0YXRlLmVuZm9yY2VBY3Rpb25zID8gXCJTaW5jZSBzdHJpY3QtbW9kZSBpcyBlbmFibGVkLCBjaGFuZ2luZyAob2JzZXJ2ZWQpIG9ic2VydmFibGUgdmFsdWVzIHdpdGhvdXQgdXNpbmcgYW4gYWN0aW9uIGlzIG5vdCBhbGxvd2VkLiBUcmllZCB0byBtb2RpZnk6IFwiIDogXCJTaWRlIGVmZmVjdHMgbGlrZSBjaGFuZ2luZyBzdGF0ZSBhcmUgbm90IGFsbG93ZWQgYXQgdGhpcyBwb2ludC4gQXJlIHlvdSB0cnlpbmcgdG8gbW9kaWZ5IHN0YXRlIGZyb20sIGZvciBleGFtcGxlLCBhIGNvbXB1dGVkIHZhbHVlIG9yIHRoZSByZW5kZXIgZnVuY3Rpb24gb2YgYSBSZWFjdCBjb21wb25lbnQ/IFlvdSBjYW4gd3JhcCBzaWRlIGVmZmVjdHMgaW4gJ3J1bkluQWN0aW9uJyAob3IgZGVjb3JhdGUgZnVuY3Rpb25zIHdpdGggJ2FjdGlvbicpIGlmIG5lZWRlZC4gVHJpZWQgdG8gbW9kaWZ5OiBcIikgKyBhdG9tLm5hbWVfKTtcbn1cbmZ1bmN0aW9uIGNoZWNrSWZTdGF0ZVJlYWRzQXJlQWxsb3dlZChvYnNlcnZhYmxlKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIWdsb2JhbFN0YXRlLmFsbG93U3RhdGVSZWFkcyAmJiBnbG9iYWxTdGF0ZS5vYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvbikge1xuICAgIGNvbnNvbGUud2FybihcIlttb2J4XSBPYnNlcnZhYmxlIFwiICsgb2JzZXJ2YWJsZS5uYW1lXyArIFwiIGJlaW5nIHJlYWQgb3V0c2lkZSBhIHJlYWN0aXZlIGNvbnRleHRcIik7XG4gIH1cbn1cbi8qKlxyXG4gKiBFeGVjdXRlcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gYGZgIGFuZCB0cmFja3Mgd2hpY2ggb2JzZXJ2YWJsZXMgYXJlIGJlaW5nIGFjY2Vzc2VkLlxyXG4gKiBUaGUgdHJhY2tpbmcgaW5mb3JtYXRpb24gaXMgc3RvcmVkIG9uIHRoZSBgZGVyaXZhdGlvbmAgb2JqZWN0IGFuZCB0aGUgZGVyaXZhdGlvbiBpcyByZWdpc3RlcmVkXHJcbiAqIGFzIG9ic2VydmVyIG9mIGFueSBvZiB0aGUgYWNjZXNzZWQgb2JzZXJ2YWJsZXMuXHJcbiAqL1xuXG5mdW5jdGlvbiB0cmFja0Rlcml2ZWRGdW5jdGlvbihkZXJpdmF0aW9uLCBmLCBjb250ZXh0KSB7XG4gIHZhciBwcmV2QWxsb3dTdGF0ZVJlYWRzID0gYWxsb3dTdGF0ZVJlYWRzU3RhcnQodHJ1ZSk7IC8vIHByZSBhbGxvY2F0ZSBhcnJheSBhbGxvY2F0aW9uICsgcm9vbSBmb3IgdmFyaWF0aW9uIGluIGRlcHNcbiAgLy8gYXJyYXkgd2lsbCBiZSB0cmltbWVkIGJ5IGJpbmREZXBlbmRlbmNpZXNcblxuICBjaGFuZ2VEZXBlbmRlbmNpZXNTdGF0ZVRvMChkZXJpdmF0aW9uKTtcbiAgZGVyaXZhdGlvbi5uZXdPYnNlcnZpbmdfID0gbmV3IEFycmF5KGRlcml2YXRpb24ub2JzZXJ2aW5nXy5sZW5ndGggKyAxMDApO1xuICBkZXJpdmF0aW9uLnVuYm91bmREZXBzQ291bnRfID0gMDtcbiAgZGVyaXZhdGlvbi5ydW5JZF8gPSArK2dsb2JhbFN0YXRlLnJ1bklkO1xuICB2YXIgcHJldlRyYWNraW5nID0gZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uO1xuICBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24gPSBkZXJpdmF0aW9uO1xuICBnbG9iYWxTdGF0ZS5pbkJhdGNoKys7XG4gIHZhciByZXN1bHQ7XG5cbiAgaWYgKGdsb2JhbFN0YXRlLmRpc2FibGVFcnJvckJvdW5kYXJpZXMgPT09IHRydWUpIHtcbiAgICByZXN1bHQgPSBmLmNhbGwoY29udGV4dCk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IGYuY2FsbChjb250ZXh0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXN1bHQgPSBuZXcgQ2F1Z2h0RXhjZXB0aW9uKGUpO1xuICAgIH1cbiAgfVxuXG4gIGdsb2JhbFN0YXRlLmluQmF0Y2gtLTtcbiAgZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uID0gcHJldlRyYWNraW5nO1xuICBiaW5kRGVwZW5kZW5jaWVzKGRlcml2YXRpb24pO1xuICB3YXJuQWJvdXREZXJpdmF0aW9uV2l0aG91dERlcGVuZGVuY2llcyhkZXJpdmF0aW9uKTtcbiAgYWxsb3dTdGF0ZVJlYWRzRW5kKHByZXZBbGxvd1N0YXRlUmVhZHMpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiB3YXJuQWJvdXREZXJpdmF0aW9uV2l0aG91dERlcGVuZGVuY2llcyhkZXJpdmF0aW9uKSB7XG4gIGlmICghKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHJldHVybjtcbiAgaWYgKGRlcml2YXRpb24ub2JzZXJ2aW5nXy5sZW5ndGggIT09IDApIHJldHVybjtcblxuICBpZiAoZ2xvYmFsU3RhdGUucmVhY3Rpb25SZXF1aXJlc09ic2VydmFibGUgfHwgZGVyaXZhdGlvbi5yZXF1aXJlc09ic2VydmFibGVfKSB7XG4gICAgY29uc29sZS53YXJuKFwiW21vYnhdIERlcml2YXRpb24gXCIgKyBkZXJpdmF0aW9uLm5hbWVfICsgXCIgaXMgY3JlYXRlZC91cGRhdGVkIHdpdGhvdXQgcmVhZGluZyBhbnkgb2JzZXJ2YWJsZSB2YWx1ZVwiKTtcbiAgfVxufVxuLyoqXHJcbiAqIGRpZmZzIG5ld09ic2VydmluZyB3aXRoIG9ic2VydmluZy5cclxuICogdXBkYXRlIG9ic2VydmluZyB0byBiZSBuZXdPYnNlcnZpbmcgd2l0aCB1bmlxdWUgb2JzZXJ2YWJsZXNcclxuICogbm90aWZ5IG9ic2VydmVycyB0aGF0IGJlY29tZSBvYnNlcnZlZC91bm9ic2VydmVkXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGJpbmREZXBlbmRlbmNpZXMoZGVyaXZhdGlvbikge1xuICAvLyBpbnZhcmlhbnQoZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSAhPT0gSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkcsIFwiSU5URVJOQUwgRVJST1IgYmluZERlcGVuZGVuY2llcyBleHBlY3RzIGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGUgIT09IC0xXCIpO1xuICB2YXIgcHJldk9ic2VydmluZyA9IGRlcml2YXRpb24ub2JzZXJ2aW5nXztcbiAgdmFyIG9ic2VydmluZyA9IGRlcml2YXRpb24ub2JzZXJ2aW5nXyA9IGRlcml2YXRpb24ubmV3T2JzZXJ2aW5nXztcbiAgdmFyIGxvd2VzdE5ld09ic2VydmluZ0Rlcml2YXRpb25TdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGVfLlVQX1RPX0RBVEVfOyAvLyBHbyB0aHJvdWdoIGFsbCBuZXcgb2JzZXJ2YWJsZXMgYW5kIGNoZWNrIGRpZmZWYWx1ZTogKHRoaXMgbGlzdCBjYW4gY29udGFpbiBkdXBsaWNhdGVzKTpcbiAgLy8gICAwOiBmaXJzdCBvY2N1cnJlbmNlLCBjaGFuZ2UgdG8gMSBhbmQga2VlcCBpdFxuICAvLyAgIDE6IGV4dHJhIG9jY3VycmVuY2UsIGRyb3AgaXRcblxuICB2YXIgaTAgPSAwLFxuICAgICAgbCA9IGRlcml2YXRpb24udW5ib3VuZERlcHNDb3VudF87XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICB2YXIgZGVwID0gb2JzZXJ2aW5nW2ldO1xuXG4gICAgaWYgKGRlcC5kaWZmVmFsdWVfID09PSAwKSB7XG4gICAgICBkZXAuZGlmZlZhbHVlXyA9IDE7XG4gICAgICBpZiAoaTAgIT09IGkpIG9ic2VydmluZ1tpMF0gPSBkZXA7XG4gICAgICBpMCsrO1xuICAgIH0gLy8gVXBjYXN0IGlzICdzYWZlJyBoZXJlLCBiZWNhdXNlIGlmIGRlcCBpcyBJT2JzZXJ2YWJsZSwgYGRlcGVuZGVuY2llc1N0YXRlYCB3aWxsIGJlIHVuZGVmaW5lZCxcbiAgICAvLyBub3QgaGl0dGluZyB0aGUgY29uZGl0aW9uXG5cblxuICAgIGlmIChkZXAuZGVwZW5kZW5jaWVzU3RhdGVfID4gbG93ZXN0TmV3T2JzZXJ2aW5nRGVyaXZhdGlvblN0YXRlKSB7XG4gICAgICBsb3dlc3ROZXdPYnNlcnZpbmdEZXJpdmF0aW9uU3RhdGUgPSBkZXAuZGVwZW5kZW5jaWVzU3RhdGVfO1xuICAgIH1cbiAgfVxuXG4gIG9ic2VydmluZy5sZW5ndGggPSBpMDtcbiAgZGVyaXZhdGlvbi5uZXdPYnNlcnZpbmdfID0gbnVsbDsgLy8gbmV3T2JzZXJ2aW5nIHNob3VsZG4ndCBiZSBuZWVkZWQgb3V0c2lkZSB0cmFja2luZyAoc3RhdGVtZW50IG1vdmVkIGRvd24gdG8gd29yayBhcm91bmQgRkYgYnVnLCBzZWUgIzYxNClcbiAgLy8gR28gdGhyb3VnaCBhbGwgb2xkIG9ic2VydmFibGVzIGFuZCBjaGVjayBkaWZmVmFsdWU6IChpdCBpcyB1bmlxdWUgYWZ0ZXIgbGFzdCBiaW5kRGVwZW5kZW5jaWVzKVxuICAvLyAgIDA6IGl0J3Mgbm90IGluIG5ldyBvYnNlcnZhYmxlcywgdW5vYnNlcnZlIGl0XG4gIC8vICAgMTogaXQga2VlcHMgYmVpbmcgb2JzZXJ2ZWQsIGRvbid0IHdhbnQgdG8gbm90aWZ5IGl0LiBjaGFuZ2UgdG8gMFxuXG4gIGwgPSBwcmV2T2JzZXJ2aW5nLmxlbmd0aDtcblxuICB3aGlsZSAobC0tKSB7XG4gICAgdmFyIF9kZXAgPSBwcmV2T2JzZXJ2aW5nW2xdO1xuXG4gICAgaWYgKF9kZXAuZGlmZlZhbHVlXyA9PT0gMCkge1xuICAgICAgcmVtb3ZlT2JzZXJ2ZXIoX2RlcCwgZGVyaXZhdGlvbik7XG4gICAgfVxuXG4gICAgX2RlcC5kaWZmVmFsdWVfID0gMDtcbiAgfSAvLyBHbyB0aHJvdWdoIGFsbCBuZXcgb2JzZXJ2YWJsZXMgYW5kIGNoZWNrIGRpZmZWYWx1ZTogKG5vdyBpdCBzaG91bGQgYmUgdW5pcXVlKVxuICAvLyAgIDA6IGl0IHdhcyBzZXQgdG8gMCBpbiBsYXN0IGxvb3AuIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmcuXG4gIC8vICAgMTogaXQgd2Fzbid0IG9ic2VydmVkLCBsZXQncyBvYnNlcnZlIGl0LiBzZXQgYmFjayB0byAwXG5cblxuICB3aGlsZSAoaTAtLSkge1xuICAgIHZhciBfZGVwMiA9IG9ic2VydmluZ1tpMF07XG5cbiAgICBpZiAoX2RlcDIuZGlmZlZhbHVlXyA9PT0gMSkge1xuICAgICAgX2RlcDIuZGlmZlZhbHVlXyA9IDA7XG4gICAgICBhZGRPYnNlcnZlcihfZGVwMiwgZGVyaXZhdGlvbik7XG4gICAgfVxuICB9IC8vIFNvbWUgbmV3IG9ic2VydmVkIGRlcml2YXRpb25zIG1heSBiZWNvbWUgc3RhbGUgZHVyaW5nIHRoaXMgZGVyaXZhdGlvbiBjb21wdXRhdGlvblxuICAvLyBzbyB0aGV5IGhhdmUgaGFkIG5vIGNoYW5jZSB0byBwcm9wYWdhdGUgc3RhbGVuZXNzICgjOTE2KVxuXG5cbiAgaWYgKGxvd2VzdE5ld09ic2VydmluZ0Rlcml2YXRpb25TdGF0ZSAhPT0gSURlcml2YXRpb25TdGF0ZV8uVVBfVE9fREFURV8pIHtcbiAgICBkZXJpdmF0aW9uLmRlcGVuZGVuY2llc1N0YXRlXyA9IGxvd2VzdE5ld09ic2VydmluZ0Rlcml2YXRpb25TdGF0ZTtcbiAgICBkZXJpdmF0aW9uLm9uQmVjb21lU3RhbGVfKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJPYnNlcnZpbmcoZGVyaXZhdGlvbikge1xuICAvLyBpbnZhcmlhbnQoZ2xvYmFsU3RhdGUuaW5CYXRjaCA+IDAsIFwiSU5URVJOQUwgRVJST1IgY2xlYXJPYnNlcnZpbmcgc2hvdWxkIGJlIGNhbGxlZCBvbmx5IGluc2lkZSBiYXRjaFwiKTtcbiAgdmFyIG9icyA9IGRlcml2YXRpb24ub2JzZXJ2aW5nXztcbiAgZGVyaXZhdGlvbi5vYnNlcnZpbmdfID0gW107XG4gIHZhciBpID0gb2JzLmxlbmd0aDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgcmVtb3ZlT2JzZXJ2ZXIob2JzW2ldLCBkZXJpdmF0aW9uKTtcbiAgfVxuXG4gIGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uTk9UX1RSQUNLSU5HXztcbn1cbmZ1bmN0aW9uIHVudHJhY2tlZChhY3Rpb24pIHtcbiAgdmFyIHByZXYgPSB1bnRyYWNrZWRTdGFydCgpO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIGFjdGlvbigpO1xuICB9IGZpbmFsbHkge1xuICAgIHVudHJhY2tlZEVuZChwcmV2KTtcbiAgfVxufVxuZnVuY3Rpb24gdW50cmFja2VkU3RhcnQoKSB7XG4gIHZhciBwcmV2ID0gZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uO1xuICBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24gPSBudWxsO1xuICByZXR1cm4gcHJldjtcbn1cbmZ1bmN0aW9uIHVudHJhY2tlZEVuZChwcmV2KSB7XG4gIGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbiA9IHByZXY7XG59XG5mdW5jdGlvbiBhbGxvd1N0YXRlUmVhZHNTdGFydChhbGxvd1N0YXRlUmVhZHMpIHtcbiAgdmFyIHByZXYgPSBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlUmVhZHM7XG4gIGdsb2JhbFN0YXRlLmFsbG93U3RhdGVSZWFkcyA9IGFsbG93U3RhdGVSZWFkcztcbiAgcmV0dXJuIHByZXY7XG59XG5mdW5jdGlvbiBhbGxvd1N0YXRlUmVhZHNFbmQocHJldikge1xuICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlUmVhZHMgPSBwcmV2O1xufVxuLyoqXHJcbiAqIG5lZWRlZCB0byBrZWVwIGBsb3dlc3RPYnNlcnZlclN0YXRlYCBjb3JyZWN0LiB3aGVuIGNoYW5naW5nIGZyb20gKDIgb3IgMSkgdG8gMFxyXG4gKlxyXG4gKi9cblxuZnVuY3Rpb24gY2hhbmdlRGVwZW5kZW5jaWVzU3RhdGVUbzAoZGVyaXZhdGlvbikge1xuICBpZiAoZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZV8gPT09IElEZXJpdmF0aW9uU3RhdGVfLlVQX1RPX0RBVEVfKSByZXR1cm47XG4gIGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uVVBfVE9fREFURV87XG4gIHZhciBvYnMgPSBkZXJpdmF0aW9uLm9ic2VydmluZ187XG4gIHZhciBpID0gb2JzLmxlbmd0aDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgb2JzW2ldLmxvd2VzdE9ic2VydmVyU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uVVBfVE9fREFURV87XG4gIH1cbn1cblxuLyoqXHJcbiAqIFRoZXNlIHZhbHVlcyB3aWxsIHBlcnNpc3QgaWYgZ2xvYmFsIHN0YXRlIGlzIHJlc2V0XHJcbiAqL1xuXG52YXIgcGVyc2lzdGVudEtleXMgPSBbXCJtb2J4R3VpZFwiLCBcInNweUxpc3RlbmVyc1wiLCBcImVuZm9yY2VBY3Rpb25zXCIsIFwiY29tcHV0ZWRSZXF1aXJlc1JlYWN0aW9uXCIsIFwicmVhY3Rpb25SZXF1aXJlc09ic2VydmFibGVcIiwgXCJvYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvblwiLCBcImFsbG93U3RhdGVSZWFkc1wiLCBcImRpc2FibGVFcnJvckJvdW5kYXJpZXNcIiwgXCJydW5JZFwiLCBcIlVOQ0hBTkdFRFwiLCBcInVzZVByb3hpZXNcIl07XG52YXIgTW9iWEdsb2JhbHMgPSBmdW5jdGlvbiBNb2JYR2xvYmFscygpIHtcbiAgdGhpcy52ZXJzaW9uID0gNjtcbiAgdGhpcy5VTkNIQU5HRUQgPSB7fTtcbiAgdGhpcy50cmFja2luZ0Rlcml2YXRpb24gPSBudWxsO1xuICB0aGlzLnRyYWNraW5nQ29udGV4dCA9IG51bGw7XG4gIHRoaXMucnVuSWQgPSAwO1xuICB0aGlzLm1vYnhHdWlkID0gMDtcbiAgdGhpcy5pbkJhdGNoID0gMDtcbiAgdGhpcy5wZW5kaW5nVW5vYnNlcnZhdGlvbnMgPSBbXTtcbiAgdGhpcy5wZW5kaW5nUmVhY3Rpb25zID0gW107XG4gIHRoaXMuaXNSdW5uaW5nUmVhY3Rpb25zID0gZmFsc2U7XG4gIHRoaXMuYWxsb3dTdGF0ZUNoYW5nZXMgPSBmYWxzZTtcbiAgdGhpcy5hbGxvd1N0YXRlUmVhZHMgPSB0cnVlO1xuICB0aGlzLmVuZm9yY2VBY3Rpb25zID0gdHJ1ZTtcbiAgdGhpcy5zcHlMaXN0ZW5lcnMgPSBbXTtcbiAgdGhpcy5nbG9iYWxSZWFjdGlvbkVycm9ySGFuZGxlcnMgPSBbXTtcbiAgdGhpcy5jb21wdXRlZFJlcXVpcmVzUmVhY3Rpb24gPSBmYWxzZTtcbiAgdGhpcy5yZWFjdGlvblJlcXVpcmVzT2JzZXJ2YWJsZSA9IGZhbHNlO1xuICB0aGlzLm9ic2VydmFibGVSZXF1aXJlc1JlYWN0aW9uID0gZmFsc2U7XG4gIHRoaXMuZGlzYWJsZUVycm9yQm91bmRhcmllcyA9IGZhbHNlO1xuICB0aGlzLnN1cHByZXNzUmVhY3Rpb25FcnJvcnMgPSBmYWxzZTtcbiAgdGhpcy51c2VQcm94aWVzID0gdHJ1ZTtcbiAgdGhpcy52ZXJpZnlQcm94aWVzID0gZmFsc2U7XG59O1xudmFyIGNhbk1lcmdlR2xvYmFsU3RhdGUgPSB0cnVlO1xudmFyIGlzb2xhdGVDYWxsZWQgPSBmYWxzZTtcbnZhciBnbG9iYWxTdGF0ZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIHZhciBnbG9iYWwgPSAvKiNfX1BVUkVfXyovZ2V0R2xvYmFsKCk7XG4gIGlmIChnbG9iYWwuX19tb2J4SW5zdGFuY2VDb3VudCA+IDAgJiYgIWdsb2JhbC5fX21vYnhHbG9iYWxzKSBjYW5NZXJnZUdsb2JhbFN0YXRlID0gZmFsc2U7XG4gIGlmIChnbG9iYWwuX19tb2J4R2xvYmFscyAmJiBnbG9iYWwuX19tb2J4R2xvYmFscy52ZXJzaW9uICE9PSBuZXcgTW9iWEdsb2JhbHMoKS52ZXJzaW9uKSBjYW5NZXJnZUdsb2JhbFN0YXRlID0gZmFsc2U7XG5cbiAgaWYgKCFjYW5NZXJnZUdsb2JhbFN0YXRlKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWlzb2xhdGVDYWxsZWQpIHtcbiAgICAgICAgZGllKDM1KTtcbiAgICAgIH1cbiAgICB9LCAxKTtcbiAgICByZXR1cm4gbmV3IE1vYlhHbG9iYWxzKCk7XG4gIH0gZWxzZSBpZiAoZ2xvYmFsLl9fbW9ieEdsb2JhbHMpIHtcbiAgICBnbG9iYWwuX19tb2J4SW5zdGFuY2VDb3VudCArPSAxO1xuICAgIGlmICghZ2xvYmFsLl9fbW9ieEdsb2JhbHMuVU5DSEFOR0VEKSBnbG9iYWwuX19tb2J4R2xvYmFscy5VTkNIQU5HRUQgPSB7fTsgLy8gbWFrZSBtZXJnZSBiYWNrd2FyZCBjb21wYXRpYmxlXG5cbiAgICByZXR1cm4gZ2xvYmFsLl9fbW9ieEdsb2JhbHM7XG4gIH0gZWxzZSB7XG4gICAgZ2xvYmFsLl9fbW9ieEluc3RhbmNlQ291bnQgPSAxO1xuICAgIHJldHVybiBnbG9iYWwuX19tb2J4R2xvYmFscyA9IC8qI19fUFVSRV9fKi9uZXcgTW9iWEdsb2JhbHMoKTtcbiAgfVxufSgpO1xuZnVuY3Rpb24gaXNvbGF0ZUdsb2JhbFN0YXRlKCkge1xuICBpZiAoZ2xvYmFsU3RhdGUucGVuZGluZ1JlYWN0aW9ucy5sZW5ndGggfHwgZ2xvYmFsU3RhdGUuaW5CYXRjaCB8fCBnbG9iYWxTdGF0ZS5pc1J1bm5pbmdSZWFjdGlvbnMpIGRpZSgzNik7XG4gIGlzb2xhdGVDYWxsZWQgPSB0cnVlO1xuXG4gIGlmIChjYW5NZXJnZUdsb2JhbFN0YXRlKSB7XG4gICAgdmFyIGdsb2JhbCA9IGdldEdsb2JhbCgpO1xuICAgIGlmICgtLWdsb2JhbC5fX21vYnhJbnN0YW5jZUNvdW50ID09PSAwKSBnbG9iYWwuX19tb2J4R2xvYmFscyA9IHVuZGVmaW5lZDtcbiAgICBnbG9iYWxTdGF0ZSA9IG5ldyBNb2JYR2xvYmFscygpO1xuICB9XG59XG5mdW5jdGlvbiBnZXRHbG9iYWxTdGF0ZSgpIHtcbiAgcmV0dXJuIGdsb2JhbFN0YXRlO1xufVxuLyoqXHJcbiAqIEZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHk7IHRoaXMgd2lsbCBicmVhayB0aGUgaW50ZXJuYWwgc3RhdGUgb2YgZXhpc3Rpbmcgb2JzZXJ2YWJsZXMsXHJcbiAqIGJ1dCBjYW4gYmUgdXNlZCB0byBnZXQgYmFjayBhdCBhIHN0YWJsZSBzdGF0ZSBhZnRlciB0aHJvd2luZyBlcnJvcnNcclxuICovXG5cbmZ1bmN0aW9uIHJlc2V0R2xvYmFsU3RhdGUoKSB7XG4gIHZhciBkZWZhdWx0R2xvYmFscyA9IG5ldyBNb2JYR2xvYmFscygpO1xuXG4gIGZvciAodmFyIGtleSBpbiBkZWZhdWx0R2xvYmFscykge1xuICAgIGlmIChwZXJzaXN0ZW50S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSBnbG9iYWxTdGF0ZVtrZXldID0gZGVmYXVsdEdsb2JhbHNba2V5XTtcbiAgfVxuXG4gIGdsb2JhbFN0YXRlLmFsbG93U3RhdGVDaGFuZ2VzID0gIWdsb2JhbFN0YXRlLmVuZm9yY2VBY3Rpb25zO1xufVxuXG5mdW5jdGlvbiBoYXNPYnNlcnZlcnMob2JzZXJ2YWJsZSkge1xuICByZXR1cm4gb2JzZXJ2YWJsZS5vYnNlcnZlcnNfICYmIG9ic2VydmFibGUub2JzZXJ2ZXJzXy5zaXplID4gMDtcbn1cbmZ1bmN0aW9uIGdldE9ic2VydmVycyhvYnNlcnZhYmxlKSB7XG4gIHJldHVybiBvYnNlcnZhYmxlLm9ic2VydmVyc187XG59IC8vIGZ1bmN0aW9uIGludmFyaWFudE9ic2VydmVycyhvYnNlcnZhYmxlOiBJT2JzZXJ2YWJsZSkge1xuLy8gICAgIGNvbnN0IGxpc3QgPSBvYnNlcnZhYmxlLm9ic2VydmVyc1xuLy8gICAgIGNvbnN0IG1hcCA9IG9ic2VydmFibGUub2JzZXJ2ZXJzSW5kZXhlc1xuLy8gICAgIGNvbnN0IGwgPSBsaXN0Lmxlbmd0aFxuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4vLyAgICAgICAgIGNvbnN0IGlkID0gbGlzdFtpXS5fX21hcGlkXG4vLyAgICAgICAgIGlmIChpKSB7XG4vLyAgICAgICAgICAgICBpbnZhcmlhbnQobWFwW2lkXSA9PT0gaSwgXCJJTlRFUk5BTCBFUlJPUiBtYXBzIGRlcml2YXRpb24uX19tYXBpZCB0byBpbmRleCBpbiBsaXN0XCIpIC8vIGZvciBwZXJmb3JtYW5jZVxuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgaW52YXJpYW50KCEoaWQgaW4gbWFwKSwgXCJJTlRFUk5BTCBFUlJPUiBvYnNlcnZlciBvbiBpbmRleCAwIHNob3VsZG4ndCBiZSBoZWxkIGluIG1hcC5cIikgLy8gZm9yIHBlcmZvcm1hbmNlXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgaW52YXJpYW50KFxuLy8gICAgICAgICBsaXN0Lmxlbmd0aCA9PT0gMCB8fCBPYmplY3Qua2V5cyhtYXApLmxlbmd0aCA9PT0gbGlzdC5sZW5ndGggLSAxLFxuLy8gICAgICAgICBcIklOVEVSTkFMIEVSUk9SIHRoZXJlIGlzIG5vIGp1bmsgaW4gbWFwXCJcbi8vICAgICApXG4vLyB9XG5cbmZ1bmN0aW9uIGFkZE9ic2VydmVyKG9ic2VydmFibGUsIG5vZGUpIHtcbiAgLy8gaW52YXJpYW50KG5vZGUuZGVwZW5kZW5jaWVzU3RhdGUgIT09IC0xLCBcIklOVEVSTkFMIEVSUk9SLCBjYW4gYWRkIG9ubHkgZGVwZW5kZW5jaWVzU3RhdGUgIT09IC0xXCIpO1xuICAvLyBpbnZhcmlhbnQob2JzZXJ2YWJsZS5fb2JzZXJ2ZXJzLmluZGV4T2Yobm9kZSkgPT09IC0xLCBcIklOVEVSTkFMIEVSUk9SIGFkZCBhbHJlYWR5IGFkZGVkIG5vZGVcIik7XG4gIC8vIGludmFyaWFudE9ic2VydmVycyhvYnNlcnZhYmxlKTtcbiAgb2JzZXJ2YWJsZS5vYnNlcnZlcnNfLmFkZChub2RlKTtcbiAgaWYgKG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZV8gPiBub2RlLmRlcGVuZGVuY2llc1N0YXRlXykgb2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlXyA9IG5vZGUuZGVwZW5kZW5jaWVzU3RhdGVfOyAvLyBpbnZhcmlhbnRPYnNlcnZlcnMob2JzZXJ2YWJsZSk7XG4gIC8vIGludmFyaWFudChvYnNlcnZhYmxlLl9vYnNlcnZlcnMuaW5kZXhPZihub2RlKSAhPT0gLTEsIFwiSU5URVJOQUwgRVJST1IgZGlkbid0IGFkZCBub2RlXCIpO1xufVxuZnVuY3Rpb24gcmVtb3ZlT2JzZXJ2ZXIob2JzZXJ2YWJsZSwgbm9kZSkge1xuICAvLyBpbnZhcmlhbnQoZ2xvYmFsU3RhdGUuaW5CYXRjaCA+IDAsIFwiSU5URVJOQUwgRVJST1IsIHJlbW92ZSBzaG91bGQgYmUgY2FsbGVkIG9ubHkgaW5zaWRlIGJhdGNoXCIpO1xuICAvLyBpbnZhcmlhbnQob2JzZXJ2YWJsZS5fb2JzZXJ2ZXJzLmluZGV4T2Yobm9kZSkgIT09IC0xLCBcIklOVEVSTkFMIEVSUk9SIHJlbW92ZSBhbHJlYWR5IHJlbW92ZWQgbm9kZVwiKTtcbiAgLy8gaW52YXJpYW50T2JzZXJ2ZXJzKG9ic2VydmFibGUpO1xuICBvYnNlcnZhYmxlLm9ic2VydmVyc19bXCJkZWxldGVcIl0obm9kZSk7XG5cbiAgaWYgKG9ic2VydmFibGUub2JzZXJ2ZXJzXy5zaXplID09PSAwKSB7XG4gICAgLy8gZGVsZXRpbmcgbGFzdCBvYnNlcnZlclxuICAgIHF1ZXVlRm9yVW5vYnNlcnZhdGlvbihvYnNlcnZhYmxlKTtcbiAgfSAvLyBpbnZhcmlhbnRPYnNlcnZlcnMob2JzZXJ2YWJsZSk7XG4gIC8vIGludmFyaWFudChvYnNlcnZhYmxlLl9vYnNlcnZlcnMuaW5kZXhPZihub2RlKSA9PT0gLTEsIFwiSU5URVJOQUwgRVJST1IgcmVtb3ZlIGFscmVhZHkgcmVtb3ZlZCBub2RlMlwiKTtcblxufVxuZnVuY3Rpb24gcXVldWVGb3JVbm9ic2VydmF0aW9uKG9ic2VydmFibGUpIHtcbiAgaWYgKG9ic2VydmFibGUuaXNQZW5kaW5nVW5vYnNlcnZhdGlvbl8gPT09IGZhbHNlKSB7XG4gICAgLy8gaW52YXJpYW50KG9ic2VydmFibGUuX29ic2VydmVycy5sZW5ndGggPT09IDAsIFwiSU5URVJOQUwgRVJST1IsIHNob3VsZCBvbmx5IHF1ZXVlIGZvciB1bm9ic2VydmF0aW9uIHVub2JzZXJ2ZWQgb2JzZXJ2YWJsZXNcIik7XG4gICAgb2JzZXJ2YWJsZS5pc1BlbmRpbmdVbm9ic2VydmF0aW9uXyA9IHRydWU7XG4gICAgZ2xvYmFsU3RhdGUucGVuZGluZ1Vub2JzZXJ2YXRpb25zLnB1c2gob2JzZXJ2YWJsZSk7XG4gIH1cbn1cbi8qKlxyXG4gKiBCYXRjaCBzdGFydHMgYSB0cmFuc2FjdGlvbiwgYXQgbGVhc3QgZm9yIHB1cnBvc2VzIG9mIG1lbW9pemluZyBDb21wdXRlZFZhbHVlcyB3aGVuIG5vdGhpbmcgZWxzZSBkb2VzLlxyXG4gKiBEdXJpbmcgYSBiYXRjaCBgb25CZWNvbWVVbm9ic2VydmVkYCB3aWxsIGJlIGNhbGxlZCBhdCBtb3N0IG9uY2UgcGVyIG9ic2VydmFibGUuXHJcbiAqIEF2b2lkcyB1bm5lY2Vzc2FyeSByZWNhbGN1bGF0aW9ucy5cclxuICovXG5cbmZ1bmN0aW9uIHN0YXJ0QmF0Y2goKSB7XG4gIGdsb2JhbFN0YXRlLmluQmF0Y2grKztcbn1cbmZ1bmN0aW9uIGVuZEJhdGNoKCkge1xuICBpZiAoLS1nbG9iYWxTdGF0ZS5pbkJhdGNoID09PSAwKSB7XG4gICAgcnVuUmVhY3Rpb25zKCk7IC8vIHRoZSBiYXRjaCBpcyBhY3R1YWxseSBhYm91dCB0byBmaW5pc2gsIGFsbCB1bm9ic2VydmluZyBzaG91bGQgaGFwcGVuIGhlcmUuXG5cbiAgICB2YXIgbGlzdCA9IGdsb2JhbFN0YXRlLnBlbmRpbmdVbm9ic2VydmF0aW9ucztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIG9ic2VydmFibGUgPSBsaXN0W2ldO1xuICAgICAgb2JzZXJ2YWJsZS5pc1BlbmRpbmdVbm9ic2VydmF0aW9uXyA9IGZhbHNlO1xuXG4gICAgICBpZiAob2JzZXJ2YWJsZS5vYnNlcnZlcnNfLnNpemUgPT09IDApIHtcbiAgICAgICAgaWYgKG9ic2VydmFibGUuaXNCZWluZ09ic2VydmVkXykge1xuICAgICAgICAgIC8vIGlmIHRoaXMgb2JzZXJ2YWJsZSBoYWQgcmVhY3RpdmUgb2JzZXJ2ZXJzLCB0cmlnZ2VyIHRoZSBob29rc1xuICAgICAgICAgIG9ic2VydmFibGUuaXNCZWluZ09ic2VydmVkXyA9IGZhbHNlO1xuICAgICAgICAgIG9ic2VydmFibGUub25CVU8oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvYnNlcnZhYmxlIGluc3RhbmNlb2YgQ29tcHV0ZWRWYWx1ZSkge1xuICAgICAgICAgIC8vIGNvbXB1dGVkIHZhbHVlcyBhcmUgYXV0b21hdGljYWxseSB0ZWFyZWQgZG93biB3aGVuIHRoZSBsYXN0IG9ic2VydmVyIGxlYXZlc1xuICAgICAgICAgIC8vIHRoaXMgcHJvY2VzcyBoYXBwZW5zIHJlY3Vyc2l2ZWx5LCB0aGlzIGNvbXB1dGVkIG1pZ2h0IGJlIHRoZSBsYXN0IG9ic2VydmFiZSBvZiBhbm90aGVyLCBldGMuLlxuICAgICAgICAgIG9ic2VydmFibGUuc3VzcGVuZF8oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGdsb2JhbFN0YXRlLnBlbmRpbmdVbm9ic2VydmF0aW9ucyA9IFtdO1xuICB9XG59XG5mdW5jdGlvbiByZXBvcnRPYnNlcnZlZChvYnNlcnZhYmxlKSB7XG4gIGNoZWNrSWZTdGF0ZVJlYWRzQXJlQWxsb3dlZChvYnNlcnZhYmxlKTtcbiAgdmFyIGRlcml2YXRpb24gPSBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb247XG5cbiAgaWYgKGRlcml2YXRpb24gIT09IG51bGwpIHtcbiAgICAvKipcclxuICAgICAqIFNpbXBsZSBvcHRpbWl6YXRpb24sIGdpdmUgZWFjaCBkZXJpdmF0aW9uIHJ1biBhbiB1bmlxdWUgaWQgKHJ1bklkKVxyXG4gICAgICogQ2hlY2sgaWYgbGFzdCB0aW1lIHRoaXMgb2JzZXJ2YWJsZSB3YXMgYWNjZXNzZWQgdGhlIHNhbWUgcnVuSWQgaXMgdXNlZFxyXG4gICAgICogaWYgdGhpcyBpcyB0aGUgY2FzZSwgdGhlIHJlbGF0aW9uIGlzIGFscmVhZHkga25vd25cclxuICAgICAqL1xuICAgIGlmIChkZXJpdmF0aW9uLnJ1bklkXyAhPT0gb2JzZXJ2YWJsZS5sYXN0QWNjZXNzZWRCeV8pIHtcbiAgICAgIG9ic2VydmFibGUubGFzdEFjY2Vzc2VkQnlfID0gZGVyaXZhdGlvbi5ydW5JZF87IC8vIFRyaWVkIHN0b3JpbmcgbmV3T2JzZXJ2aW5nLCBvciBvYnNlcnZpbmcsIG9yIGJvdGggYXMgU2V0LCBidXQgcGVyZm9ybWFuY2UgZGlkbid0IGNvbWUgY2xvc2UuLi5cblxuICAgICAgZGVyaXZhdGlvbi5uZXdPYnNlcnZpbmdfW2Rlcml2YXRpb24udW5ib3VuZERlcHNDb3VudF8rK10gPSBvYnNlcnZhYmxlO1xuXG4gICAgICBpZiAoIW9ic2VydmFibGUuaXNCZWluZ09ic2VydmVkXyAmJiBnbG9iYWxTdGF0ZS50cmFja2luZ0NvbnRleHQpIHtcbiAgICAgICAgb2JzZXJ2YWJsZS5pc0JlaW5nT2JzZXJ2ZWRfID0gdHJ1ZTtcbiAgICAgICAgb2JzZXJ2YWJsZS5vbkJPKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAob2JzZXJ2YWJsZS5vYnNlcnZlcnNfLnNpemUgPT09IDAgJiYgZ2xvYmFsU3RhdGUuaW5CYXRjaCA+IDApIHtcbiAgICBxdWV1ZUZvclVub2JzZXJ2YXRpb24ob2JzZXJ2YWJsZSk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59IC8vIGZ1bmN0aW9uIGludmFyaWFudExPUyhvYnNlcnZhYmxlOiBJT2JzZXJ2YWJsZSwgbXNnOiBzdHJpbmcpIHtcbi8vICAgICAvLyBpdCdzIGV4cGVuc2l2ZSBzbyBiZXR0ZXIgbm90IHJ1biBpdCBpbiBwcm9kdWNpdG9uLiBidXQgdGVtcG9yYXJpbHkgaGVscGZ1bCBmb3IgdGVzdGluZ1xuLy8gICAgIGNvbnN0IG1pbiA9IGdldE9ic2VydmVycyhvYnNlcnZhYmxlKS5yZWR1Y2UoKGEsIGIpID0+IE1hdGgubWluKGEsIGIuZGVwZW5kZW5jaWVzU3RhdGUpLCAyKVxuLy8gICAgIGlmIChtaW4gPj0gb2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlKSByZXR1cm4gLy8gPC0gdGhlIG9ubHkgYXNzdW1wdGlvbiBhYm91dCBgbG93ZXN0T2JzZXJ2ZXJTdGF0ZWBcbi8vICAgICB0aHJvdyBuZXcgRXJyb3IoXG4vLyAgICAgICAgIFwibG93ZXN0T2JzZXJ2ZXJTdGF0ZSBpcyB3cm9uZyBmb3IgXCIgK1xuLy8gICAgICAgICAgICAgbXNnICtcbi8vICAgICAgICAgICAgIFwiIGJlY2F1c2UgXCIgK1xuLy8gICAgICAgICAgICAgbWluICtcbi8vICAgICAgICAgICAgIFwiIDwgXCIgK1xuLy8gICAgICAgICAgICAgb2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlXG4vLyAgICAgKVxuLy8gfVxuXG4vKipcclxuICogTk9URTogY3VycmVudCBwcm9wYWdhdGlvbiBtZWNoYW5pc20gd2lsbCBpbiBjYXNlIG9mIHNlbGYgcmVydW5pbmcgYXV0b3J1bnMgYmVoYXZlIHVuZXhwZWN0ZWRseVxyXG4gKiBJdCB3aWxsIHByb3BhZ2F0ZSBjaGFuZ2VzIHRvIG9ic2VydmVycyBmcm9tIHByZXZpb3VzIHJ1blxyXG4gKiBJdCdzIGhhcmQgb3IgbWF5YmUgaW1wb3NzaWJsZSAod2l0aCByZWFzb25hYmxlIHBlcmYpIHRvIGdldCBpdCByaWdodCB3aXRoIGN1cnJlbnQgYXBwcm9hY2hcclxuICogSG9wZWZ1bGx5IHNlbGYgcmVydW5pbmcgYXV0b3J1bnMgYXJlbid0IGEgZmVhdHVyZSBwZW9wbGUgc2hvdWxkIGRlcGVuZCBvblxyXG4gKiBBbHNvIG1vc3QgYmFzaWMgdXNlIGNhc2VzIHNob3VsZCBiZSBva1xyXG4gKi9cbi8vIENhbGxlZCBieSBBdG9tIHdoZW4gaXRzIHZhbHVlIGNoYW5nZXNcblxuZnVuY3Rpb24gcHJvcGFnYXRlQ2hhbmdlZChvYnNlcnZhYmxlKSB7XG4gIC8vIGludmFyaWFudExPUyhvYnNlcnZhYmxlLCBcImNoYW5nZWQgc3RhcnRcIik7XG4gIGlmIChvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGVfID09PSBJRGVyaXZhdGlvblN0YXRlXy5TVEFMRV8pIHJldHVybjtcbiAgb2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlXyA9IElEZXJpdmF0aW9uU3RhdGVfLlNUQUxFXzsgLy8gSWRlYWxseSB3ZSB1c2UgZm9yLi5vZiBoZXJlLCBidXQgdGhlIGRvd25jb21waWxlZCB2ZXJzaW9uIGlzIHJlYWxseSBzbG93Li4uXG5cbiAgb2JzZXJ2YWJsZS5vYnNlcnZlcnNfLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICBpZiAoZC5kZXBlbmRlbmNpZXNTdGF0ZV8gPT09IElEZXJpdmF0aW9uU3RhdGVfLlVQX1RPX0RBVEVfKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGQuaXNUcmFjaW5nXyAhPT0gVHJhY2VNb2RlLk5PTkUpIHtcbiAgICAgICAgbG9nVHJhY2VJbmZvKGQsIG9ic2VydmFibGUpO1xuICAgICAgfVxuXG4gICAgICBkLm9uQmVjb21lU3RhbGVfKCk7XG4gICAgfVxuXG4gICAgZC5kZXBlbmRlbmNpZXNTdGF0ZV8gPSBJRGVyaXZhdGlvblN0YXRlXy5TVEFMRV87XG4gIH0pOyAvLyBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZSwgXCJjaGFuZ2VkIGVuZFwiKTtcbn0gLy8gQ2FsbGVkIGJ5IENvbXB1dGVkVmFsdWUgd2hlbiBpdCByZWNhbGN1bGF0ZSBhbmQgaXRzIHZhbHVlIGNoYW5nZWRcblxuZnVuY3Rpb24gcHJvcGFnYXRlQ2hhbmdlQ29uZmlybWVkKG9ic2VydmFibGUpIHtcbiAgLy8gaW52YXJpYW50TE9TKG9ic2VydmFibGUsIFwiY29uZmlybWVkIHN0YXJ0XCIpO1xuICBpZiAob2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlXyA9PT0gSURlcml2YXRpb25TdGF0ZV8uU1RBTEVfKSByZXR1cm47XG4gIG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZV8gPSBJRGVyaXZhdGlvblN0YXRlXy5TVEFMRV87XG4gIG9ic2VydmFibGUub2JzZXJ2ZXJzXy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgaWYgKGQuZGVwZW5kZW5jaWVzU3RhdGVfID09PSBJRGVyaXZhdGlvblN0YXRlXy5QT1NTSUJMWV9TVEFMRV8pIGQuZGVwZW5kZW5jaWVzU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uU1RBTEVfO2Vsc2UgaWYgKGQuZGVwZW5kZW5jaWVzU3RhdGVfID09PSBJRGVyaXZhdGlvblN0YXRlXy5VUF9UT19EQVRFXyAvLyB0aGlzIGhhcHBlbnMgZHVyaW5nIGNvbXB1dGluZyBvZiBgZGAsIGp1c3Qga2VlcCBsb3dlc3RPYnNlcnZlclN0YXRlIHVwIHRvIGRhdGUuXG4gICAgKSBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uVVBfVE9fREFURV87XG4gIH0pOyAvLyBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZSwgXCJjb25maXJtZWQgZW5kXCIpO1xufSAvLyBVc2VkIGJ5IGNvbXB1dGVkIHdoZW4gaXRzIGRlcGVuZGVuY3kgY2hhbmdlZCwgYnV0IHdlIGRvbid0IHdhbid0IHRvIGltbWVkaWF0ZWx5IHJlY29tcHV0ZS5cblxuZnVuY3Rpb24gcHJvcGFnYXRlTWF5YmVDaGFuZ2VkKG9ic2VydmFibGUpIHtcbiAgLy8gaW52YXJpYW50TE9TKG9ic2VydmFibGUsIFwibWF5YmUgc3RhcnRcIik7XG4gIGlmIChvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGVfICE9PSBJRGVyaXZhdGlvblN0YXRlXy5VUF9UT19EQVRFXykgcmV0dXJuO1xuICBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uUE9TU0lCTFlfU1RBTEVfO1xuICBvYnNlcnZhYmxlLm9ic2VydmVyc18uZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgIGlmIChkLmRlcGVuZGVuY2llc1N0YXRlXyA9PT0gSURlcml2YXRpb25TdGF0ZV8uVVBfVE9fREFURV8pIHtcbiAgICAgIGQuZGVwZW5kZW5jaWVzU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uUE9TU0lCTFlfU1RBTEVfO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGQuaXNUcmFjaW5nXyAhPT0gVHJhY2VNb2RlLk5PTkUpIHtcbiAgICAgICAgbG9nVHJhY2VJbmZvKGQsIG9ic2VydmFibGUpO1xuICAgICAgfVxuXG4gICAgICBkLm9uQmVjb21lU3RhbGVfKCk7XG4gICAgfVxuICB9KTsgLy8gaW52YXJpYW50TE9TKG9ic2VydmFibGUsIFwibWF5YmUgZW5kXCIpO1xufVxuXG5mdW5jdGlvbiBsb2dUcmFjZUluZm8oZGVyaXZhdGlvbiwgb2JzZXJ2YWJsZSkge1xuICBjb25zb2xlLmxvZyhcIlttb2J4LnRyYWNlXSAnXCIgKyBkZXJpdmF0aW9uLm5hbWVfICsgXCInIGlzIGludmFsaWRhdGVkIGR1ZSB0byBhIGNoYW5nZSBpbjogJ1wiICsgb2JzZXJ2YWJsZS5uYW1lXyArIFwiJ1wiKTtcblxuICBpZiAoZGVyaXZhdGlvbi5pc1RyYWNpbmdfID09PSBUcmFjZU1vZGUuQlJFQUspIHtcbiAgICB2YXIgbGluZXMgPSBbXTtcbiAgICBwcmludERlcFRyZWUoZ2V0RGVwZW5kZW5jeVRyZWUoZGVyaXZhdGlvbiksIGxpbmVzLCAxKTsgLy8gcHJldHRpZXItaWdub3JlXG5cbiAgICBuZXcgRnVuY3Rpb24oXCJkZWJ1Z2dlcjtcXG4vKlxcblRyYWNpbmcgJ1wiICsgZGVyaXZhdGlvbi5uYW1lXyArIFwiJ1xcblxcbllvdSBhcmUgZW50ZXJpbmcgdGhpcyBicmVhayBwb2ludCBiZWNhdXNlIGRlcml2YXRpb24gJ1wiICsgZGVyaXZhdGlvbi5uYW1lXyArIFwiJyBpcyBiZWluZyB0cmFjZWQgYW5kICdcIiArIG9ic2VydmFibGUubmFtZV8gKyBcIicgaXMgbm93IGZvcmNpbmcgaXQgdG8gdXBkYXRlLlxcbkp1c3QgZm9sbG93IHRoZSBzdGFja3RyYWNlIHlvdSBzaG91bGQgbm93IHNlZSBpbiB0aGUgZGV2dG9vbHMgdG8gc2VlIHByZWNpc2VseSB3aGF0IHBpZWNlIG9mIHlvdXIgY29kZSBpcyBjYXVzaW5nIHRoaXMgdXBkYXRlXFxuVGhlIHN0YWNrZnJhbWUgeW91IGFyZSBsb29raW5nIGZvciBpcyBhdCBsZWFzdCB+Ni04IHN0YWNrLWZyYW1lcyB1cC5cXG5cXG5cIiArIChkZXJpdmF0aW9uIGluc3RhbmNlb2YgQ29tcHV0ZWRWYWx1ZSA/IGRlcml2YXRpb24uZGVyaXZhdGlvbi50b1N0cmluZygpLnJlcGxhY2UoL1sqXVxcLy9nLCBcIi9cIikgOiBcIlwiKSArIFwiXFxuXFxuVGhlIGRlcGVuZGVuY2llcyBmb3IgdGhpcyBkZXJpdmF0aW9uIGFyZTpcXG5cXG5cIiArIGxpbmVzLmpvaW4oXCJcXG5cIikgKyBcIlxcbiovXFxuICAgIFwiKSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50RGVwVHJlZSh0cmVlLCBsaW5lcywgZGVwdGgpIHtcbiAgaWYgKGxpbmVzLmxlbmd0aCA+PSAxMDAwKSB7XG4gICAgbGluZXMucHVzaChcIihhbmQgbWFueSBtb3JlKVwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBsaW5lcy5wdXNoKFwiXCIgKyBuZXcgQXJyYXkoZGVwdGgpLmpvaW4oXCJcXHRcIikgKyB0cmVlLm5hbWUpOyAvLyBNV0U6IG5vdCB0aGUgZmFzdGVzdCwgYnV0IHRoZSBlYXNpZXN0IHdheSA6KVxuXG4gIGlmICh0cmVlLmRlcGVuZGVuY2llcykgdHJlZS5kZXBlbmRlbmNpZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gcHJpbnREZXBUcmVlKGNoaWxkLCBsaW5lcywgZGVwdGggKyAxKTtcbiAgfSk7XG59XG5cbnZhciBSZWFjdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8vIG5vZGVzIHdlIGFyZSBsb29raW5nIGF0LiBPdXIgdmFsdWUgZGVwZW5kcyBvbiB0aGVzZSBub2Rlc1xuICBmdW5jdGlvbiBSZWFjdGlvbihuYW1lXywgb25JbnZhbGlkYXRlXywgZXJyb3JIYW5kbGVyXywgcmVxdWlyZXNPYnNlcnZhYmxlXykge1xuICAgIGlmIChuYW1lXyA9PT0gdm9pZCAwKSB7XG4gICAgICBuYW1lXyA9IFwiUmVhY3Rpb25AXCIgKyBnZXROZXh0SWQoKTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWlyZXNPYnNlcnZhYmxlXyA9PT0gdm9pZCAwKSB7XG4gICAgICByZXF1aXJlc09ic2VydmFibGVfID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5uYW1lXyA9IHZvaWQgMDtcbiAgICB0aGlzLm9uSW52YWxpZGF0ZV8gPSB2b2lkIDA7XG4gICAgdGhpcy5lcnJvckhhbmRsZXJfID0gdm9pZCAwO1xuICAgIHRoaXMucmVxdWlyZXNPYnNlcnZhYmxlXyA9IHZvaWQgMDtcbiAgICB0aGlzLm9ic2VydmluZ18gPSBbXTtcbiAgICB0aGlzLm5ld09ic2VydmluZ18gPSBbXTtcbiAgICB0aGlzLmRlcGVuZGVuY2llc1N0YXRlXyA9IElEZXJpdmF0aW9uU3RhdGVfLk5PVF9UUkFDS0lOR187XG4gICAgdGhpcy5kaWZmVmFsdWVfID0gMDtcbiAgICB0aGlzLnJ1bklkXyA9IDA7XG4gICAgdGhpcy51bmJvdW5kRGVwc0NvdW50XyA9IDA7XG4gICAgdGhpcy5tYXBpZF8gPSBcIiNcIiArIGdldE5leHRJZCgpO1xuICAgIHRoaXMuaXNEaXNwb3NlZF8gPSBmYWxzZTtcbiAgICB0aGlzLmlzU2NoZWR1bGVkXyA9IGZhbHNlO1xuICAgIHRoaXMuaXNUcmFja1BlbmRpbmdfID0gZmFsc2U7XG4gICAgdGhpcy5pc1J1bm5pbmdfID0gZmFsc2U7XG4gICAgdGhpcy5pc1RyYWNpbmdfID0gVHJhY2VNb2RlLk5PTkU7XG4gICAgdGhpcy5uYW1lXyA9IG5hbWVfO1xuICAgIHRoaXMub25JbnZhbGlkYXRlXyA9IG9uSW52YWxpZGF0ZV87XG4gICAgdGhpcy5lcnJvckhhbmRsZXJfID0gZXJyb3JIYW5kbGVyXztcbiAgICB0aGlzLnJlcXVpcmVzT2JzZXJ2YWJsZV8gPSByZXF1aXJlc09ic2VydmFibGVfO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFJlYWN0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8ub25CZWNvbWVTdGFsZV8gPSBmdW5jdGlvbiBvbkJlY29tZVN0YWxlXygpIHtcbiAgICB0aGlzLnNjaGVkdWxlXygpO1xuICB9O1xuXG4gIF9wcm90by5zY2hlZHVsZV8gPSBmdW5jdGlvbiBzY2hlZHVsZV8oKSB7XG4gICAgaWYgKCF0aGlzLmlzU2NoZWR1bGVkXykge1xuICAgICAgdGhpcy5pc1NjaGVkdWxlZF8gPSB0cnVlO1xuICAgICAgZ2xvYmFsU3RhdGUucGVuZGluZ1JlYWN0aW9ucy5wdXNoKHRoaXMpO1xuICAgICAgcnVuUmVhY3Rpb25zKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5pc1NjaGVkdWxlZCA9IGZ1bmN0aW9uIGlzU2NoZWR1bGVkKCkge1xuICAgIHJldHVybiB0aGlzLmlzU2NoZWR1bGVkXztcbiAgfVxuICAvKipcclxuICAgKiBpbnRlcm5hbCwgdXNlIHNjaGVkdWxlKCkgaWYgeW91IGludGVuZCB0byBraWNrIG9mZiBhIHJlYWN0aW9uXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucnVuUmVhY3Rpb25fID0gZnVuY3Rpb24gcnVuUmVhY3Rpb25fKCkge1xuICAgIGlmICghdGhpcy5pc0Rpc3Bvc2VkXykge1xuICAgICAgc3RhcnRCYXRjaCgpO1xuICAgICAgdGhpcy5pc1NjaGVkdWxlZF8gPSBmYWxzZTtcblxuICAgICAgaWYgKHNob3VsZENvbXB1dGUodGhpcykpIHtcbiAgICAgICAgdGhpcy5pc1RyYWNrUGVuZGluZ18gPSB0cnVlO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5vbkludmFsaWRhdGVfKCk7XG5cbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIHRoaXMuaXNUcmFja1BlbmRpbmdfICYmIGlzU3B5RW5hYmxlZCgpKSB7XG4gICAgICAgICAgICAvLyBvbkludmFsaWRhdGUgZGlkbid0IHRyaWdnZXIgdHJhY2sgcmlnaHQgYXdheS4uXG4gICAgICAgICAgICBzcHlSZXBvcnQoe1xuICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWVfLFxuICAgICAgICAgICAgICB0eXBlOiBcInNjaGVkdWxlZC1yZWFjdGlvblwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB0aGlzLnJlcG9ydEV4Y2VwdGlvbkluRGVyaXZhdGlvbl8oZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZW5kQmF0Y2goKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnRyYWNrID0gZnVuY3Rpb24gdHJhY2soZm4pIHtcbiAgICBpZiAodGhpcy5pc0Rpc3Bvc2VkXykge1xuICAgICAgcmV0dXJuOyAvLyBjb25zb2xlLndhcm4oXCJSZWFjdGlvbiBhbHJlYWR5IGRpc3Bvc2VkXCIpIC8vIE5vdGU6IE5vdCBhIHdhcm5pbmcgLyBlcnJvciBpbiBtb2J4IDQgZWl0aGVyXG4gICAgfVxuXG4gICAgc3RhcnRCYXRjaCgpO1xuICAgIHZhciBub3RpZnkgPSBpc1NweUVuYWJsZWQoKTtcbiAgICB2YXIgc3RhcnRUaW1lO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBub3RpZnkpIHtcbiAgICAgIHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICBzcHlSZXBvcnRTdGFydCh7XG4gICAgICAgIG5hbWU6IHRoaXMubmFtZV8sXG4gICAgICAgIHR5cGU6IFwicmVhY3Rpb25cIlxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5pc1J1bm5pbmdfID0gdHJ1ZTtcbiAgICB2YXIgcHJldlJlYWN0aW9uID0gZ2xvYmFsU3RhdGUudHJhY2tpbmdDb250ZXh0OyAvLyByZWFjdGlvbnMgY291bGQgY3JlYXRlIHJlYWN0aW9ucy4uLlxuXG4gICAgZ2xvYmFsU3RhdGUudHJhY2tpbmdDb250ZXh0ID0gdGhpcztcbiAgICB2YXIgcmVzdWx0ID0gdHJhY2tEZXJpdmVkRnVuY3Rpb24odGhpcywgZm4sIHVuZGVmaW5lZCk7XG4gICAgZ2xvYmFsU3RhdGUudHJhY2tpbmdDb250ZXh0ID0gcHJldlJlYWN0aW9uO1xuICAgIHRoaXMuaXNSdW5uaW5nXyA9IGZhbHNlO1xuICAgIHRoaXMuaXNUcmFja1BlbmRpbmdfID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5pc0Rpc3Bvc2VkXykge1xuICAgICAgLy8gZGlzcG9zZWQgZHVyaW5nIGxhc3QgcnVuLiBDbGVhbiB1cCBldmVyeXRoaW5nIHRoYXQgd2FzIGJvdW5kIGFmdGVyIHRoZSBkaXNwb3NlIGNhbGwuXG4gICAgICBjbGVhck9ic2VydmluZyh0aGlzKTtcbiAgICB9XG5cbiAgICBpZiAoaXNDYXVnaHRFeGNlcHRpb24ocmVzdWx0KSkgdGhpcy5yZXBvcnRFeGNlcHRpb25JbkRlcml2YXRpb25fKHJlc3VsdC5jYXVzZSk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG5vdGlmeSkge1xuICAgICAgc3B5UmVwb3J0RW5kKHtcbiAgICAgICAgdGltZTogRGF0ZS5ub3coKSAtIHN0YXJ0VGltZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZW5kQmF0Y2goKTtcbiAgfTtcblxuICBfcHJvdG8ucmVwb3J0RXhjZXB0aW9uSW5EZXJpdmF0aW9uXyA9IGZ1bmN0aW9uIHJlcG9ydEV4Y2VwdGlvbkluRGVyaXZhdGlvbl8oZXJyb3IpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuZXJyb3JIYW5kbGVyXykge1xuICAgICAgdGhpcy5lcnJvckhhbmRsZXJfKGVycm9yLCB0aGlzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZ2xvYmFsU3RhdGUuZGlzYWJsZUVycm9yQm91bmRhcmllcykgdGhyb3cgZXJyb3I7XG4gICAgdmFyIG1lc3NhZ2UgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIlttb2J4XSBFbmNvdW50ZXJlZCBhbiB1bmNhdWdodCBleGNlcHRpb24gdGhhdCB3YXMgdGhyb3duIGJ5IGEgcmVhY3Rpb24gb3Igb2JzZXJ2ZXIgY29tcG9uZW50LCBpbjogJ1wiICsgdGhpcyArIFwiJ1wiIDogXCJbbW9ieF0gdW5jYXVnaHQgZXJyb3IgaW4gJ1wiICsgdGhpcyArIFwiJ1wiO1xuXG4gICAgaWYgKCFnbG9iYWxTdGF0ZS5zdXBwcmVzc1JlYWN0aW9uRXJyb3JzKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UsIGVycm9yKTtcbiAgICAgIC8qKiBJZiBkZWJ1Z2dpbmcgYnJvdWdodCB5b3UgaGVyZSwgcGxlYXNlLCByZWFkIHRoZSBhYm92ZSBtZXNzYWdlIDotKS4gVG54ISAqL1xuICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSBjb25zb2xlLndhcm4oXCJbbW9ieF0gKGVycm9yIGluIHJlYWN0aW9uICdcIiArIHRoaXMubmFtZV8gKyBcIicgc3VwcHJlc3NlZCwgZml4IGVycm9yIG9mIGNhdXNpbmcgYWN0aW9uIGJlbG93KVwiKTsgLy8gcHJldHRpZXItaWdub3JlXG5cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgaXNTcHlFbmFibGVkKCkpIHtcbiAgICAgIHNweVJlcG9ydCh7XG4gICAgICAgIHR5cGU6IFwiZXJyb3JcIixcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lXyxcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgZXJyb3I6IFwiXCIgKyBlcnJvclxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2xvYmFsU3RhdGUuZ2xvYmFsUmVhY3Rpb25FcnJvckhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcbiAgICAgIHJldHVybiBmKGVycm9yLCBfdGhpcyk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgIGlmICghdGhpcy5pc0Rpc3Bvc2VkXykge1xuICAgICAgdGhpcy5pc0Rpc3Bvc2VkXyA9IHRydWU7XG5cbiAgICAgIGlmICghdGhpcy5pc1J1bm5pbmdfKSB7XG4gICAgICAgIC8vIGlmIGRpc3Bvc2VkIHdoaWxlIHJ1bm5pbmcsIGNsZWFuIHVwIGxhdGVyLiBNYXliZSBub3Qgb3B0aW1hbCwgYnV0IHJhcmUgY2FzZVxuICAgICAgICBzdGFydEJhdGNoKCk7XG4gICAgICAgIGNsZWFyT2JzZXJ2aW5nKHRoaXMpO1xuICAgICAgICBlbmRCYXRjaCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0RGlzcG9zZXJfID0gZnVuY3Rpb24gZ2V0RGlzcG9zZXJfKCkge1xuICAgIHZhciByID0gdGhpcy5kaXNwb3NlLmJpbmQodGhpcyk7XG4gICAgclskbW9ieF0gPSB0aGlzO1xuICAgIHJldHVybiByO1xuICB9O1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBcIlJlYWN0aW9uW1wiICsgdGhpcy5uYW1lXyArIFwiXVwiO1xuICB9O1xuXG4gIF9wcm90by50cmFjZSA9IGZ1bmN0aW9uIHRyYWNlJDEoZW50ZXJCcmVha1BvaW50KSB7XG4gICAgaWYgKGVudGVyQnJlYWtQb2ludCA9PT0gdm9pZCAwKSB7XG4gICAgICBlbnRlckJyZWFrUG9pbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0cmFjZSh0aGlzLCBlbnRlckJyZWFrUG9pbnQpO1xuICB9O1xuXG4gIHJldHVybiBSZWFjdGlvbjtcbn0oKTtcbmZ1bmN0aW9uIG9uUmVhY3Rpb25FcnJvcihoYW5kbGVyKSB7XG4gIGdsb2JhbFN0YXRlLmdsb2JhbFJlYWN0aW9uRXJyb3JIYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpZHggPSBnbG9iYWxTdGF0ZS5nbG9iYWxSZWFjdGlvbkVycm9ySGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKTtcbiAgICBpZiAoaWR4ID49IDApIGdsb2JhbFN0YXRlLmdsb2JhbFJlYWN0aW9uRXJyb3JIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiAgfTtcbn1cbi8qKlxyXG4gKiBNYWdpYyBudW1iZXIgYWxlcnQhXHJcbiAqIERlZmluZXMgd2l0aGluIGhvdyBtYW55IHRpbWVzIGEgcmVhY3Rpb24gaXMgYWxsb3dlZCB0byByZS10cmlnZ2VyIGl0c2VsZlxyXG4gKiB1bnRpbCBpdCBpcyBhc3N1bWVkIHRoYXQgdGhpcyBpcyBnb25uYSBiZSBhIG5ldmVyIGVuZGluZyBsb29wLi4uXHJcbiAqL1xuXG52YXIgTUFYX1JFQUNUSU9OX0lURVJBVElPTlMgPSAxMDA7XG5cbnZhciByZWFjdGlvblNjaGVkdWxlciA9IGZ1bmN0aW9uIHJlYWN0aW9uU2NoZWR1bGVyKGYpIHtcbiAgcmV0dXJuIGYoKTtcbn07XG5cbmZ1bmN0aW9uIHJ1blJlYWN0aW9ucygpIHtcbiAgLy8gVHJhbXBvbGluaW5nLCBpZiBydW5SZWFjdGlvbnMgYXJlIGFscmVhZHkgcnVubmluZywgbmV3IHJlYWN0aW9ucyB3aWxsIGJlIHBpY2tlZCB1cFxuICBpZiAoZ2xvYmFsU3RhdGUuaW5CYXRjaCA+IDAgfHwgZ2xvYmFsU3RhdGUuaXNSdW5uaW5nUmVhY3Rpb25zKSByZXR1cm47XG4gIHJlYWN0aW9uU2NoZWR1bGVyKHJ1blJlYWN0aW9uc0hlbHBlcik7XG59XG5cbmZ1bmN0aW9uIHJ1blJlYWN0aW9uc0hlbHBlcigpIHtcbiAgZ2xvYmFsU3RhdGUuaXNSdW5uaW5nUmVhY3Rpb25zID0gdHJ1ZTtcbiAgdmFyIGFsbFJlYWN0aW9ucyA9IGdsb2JhbFN0YXRlLnBlbmRpbmdSZWFjdGlvbnM7XG4gIHZhciBpdGVyYXRpb25zID0gMDsgLy8gV2hpbGUgcnVubmluZyByZWFjdGlvbnMsIG5ldyByZWFjdGlvbnMgbWlnaHQgYmUgdHJpZ2dlcmVkLlxuICAvLyBIZW5jZSB3ZSB3b3JrIHdpdGggdHdvIHZhcmlhYmxlcyBhbmQgY2hlY2sgd2hldGhlclxuICAvLyB3ZSBjb252ZXJnZSB0byBubyByZW1haW5pbmcgcmVhY3Rpb25zIGFmdGVyIGEgd2hpbGUuXG5cbiAgd2hpbGUgKGFsbFJlYWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKCsraXRlcmF0aW9ucyA9PT0gTUFYX1JFQUNUSU9OX0lURVJBVElPTlMpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJSZWFjdGlvbiBkb2Vzbid0IGNvbnZlcmdlIHRvIGEgc3RhYmxlIHN0YXRlIGFmdGVyIFwiICsgTUFYX1JFQUNUSU9OX0lURVJBVElPTlMgKyBcIiBpdGVyYXRpb25zLlwiICsgKFwiIFByb2JhYmx5IHRoZXJlIGlzIGEgY3ljbGUgaW4gdGhlIHJlYWN0aXZlIGZ1bmN0aW9uOiBcIiArIGFsbFJlYWN0aW9uc1swXSkgOiBcIlttb2J4XSBjeWNsZSBpbiByZWFjdGlvbjogXCIgKyBhbGxSZWFjdGlvbnNbMF0pO1xuICAgICAgYWxsUmVhY3Rpb25zLnNwbGljZSgwKTsgLy8gY2xlYXIgcmVhY3Rpb25zXG4gICAgfVxuXG4gICAgdmFyIHJlbWFpbmluZ1JlYWN0aW9ucyA9IGFsbFJlYWN0aW9ucy5zcGxpY2UoMCk7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHJlbWFpbmluZ1JlYWN0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHJlbWFpbmluZ1JlYWN0aW9uc1tpXS5ydW5SZWFjdGlvbl8oKTtcbiAgICB9XG4gIH1cblxuICBnbG9iYWxTdGF0ZS5pc1J1bm5pbmdSZWFjdGlvbnMgPSBmYWxzZTtcbn1cblxudmFyIGlzUmVhY3Rpb24gPSAvKiNfX1BVUkVfXyovY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShcIlJlYWN0aW9uXCIsIFJlYWN0aW9uKTtcbmZ1bmN0aW9uIHNldFJlYWN0aW9uU2NoZWR1bGVyKGZuKSB7XG4gIHZhciBiYXNlU2NoZWR1bGVyID0gcmVhY3Rpb25TY2hlZHVsZXI7XG5cbiAgcmVhY3Rpb25TY2hlZHVsZXIgPSBmdW5jdGlvbiByZWFjdGlvblNjaGVkdWxlcihmKSB7XG4gICAgcmV0dXJuIGZuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBiYXNlU2NoZWR1bGVyKGYpO1xuICAgIH0pO1xuICB9O1xufVxuXG5mdW5jdGlvbiBpc1NweUVuYWJsZWQoKSB7XG4gIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgISFnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnMubGVuZ3RoO1xufVxuZnVuY3Rpb24gc3B5UmVwb3J0KGV2ZW50KSB7XG4gIGlmICghKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHJldHVybjsgLy8gZGVhZCBjb2RlIGVsaW1pbmF0aW9uIGNhbiBkbyB0aGUgcmVzdFxuXG4gIGlmICghZ2xvYmFsU3RhdGUuc3B5TGlzdGVuZXJzLmxlbmd0aCkgcmV0dXJuO1xuICB2YXIgbGlzdGVuZXJzID0gZ2xvYmFsU3RhdGUuc3B5TGlzdGVuZXJzO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxpc3RlbmVyc1tpXShldmVudCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHNweVJlcG9ydFN0YXJ0KGV2ZW50KSB7XG4gIGlmICghKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHJldHVybjtcblxuICB2YXIgY2hhbmdlID0gX2V4dGVuZHMoe30sIGV2ZW50LCB7XG4gICAgc3B5UmVwb3J0U3RhcnQ6IHRydWVcbiAgfSk7XG5cbiAgc3B5UmVwb3J0KGNoYW5nZSk7XG59XG52YXIgRU5EX0VWRU5UID0ge1xuICB0eXBlOiBcInJlcG9ydC1lbmRcIixcbiAgc3B5UmVwb3J0RW5kOiB0cnVlXG59O1xuZnVuY3Rpb24gc3B5UmVwb3J0RW5kKGNoYW5nZSkge1xuICBpZiAoIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSByZXR1cm47XG4gIGlmIChjaGFuZ2UpIHNweVJlcG9ydChfZXh0ZW5kcyh7fSwgY2hhbmdlLCB7XG4gICAgdHlwZTogXCJyZXBvcnQtZW5kXCIsXG4gICAgc3B5UmVwb3J0RW5kOiB0cnVlXG4gIH0pKTtlbHNlIHNweVJlcG9ydChFTkRfRVZFTlQpO1xufVxuZnVuY3Rpb24gc3B5KGxpc3RlbmVyKSB7XG4gIGlmICghKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICBjb25zb2xlLndhcm4oXCJbbW9ieC5zcHldIElzIGEgbm8tb3AgaW4gcHJvZHVjdGlvbiBidWlsZHNcIik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHt9O1xuICB9IGVsc2Uge1xuICAgIGdsb2JhbFN0YXRlLnNweUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICByZXR1cm4gb25jZShmdW5jdGlvbiAoKSB7XG4gICAgICBnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnMgPSBnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChsKSB7XG4gICAgICAgIHJldHVybiBsICE9PSBsaXN0ZW5lcjtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbnZhciBBQ1RJT04gPSBcImFjdGlvblwiO1xudmFyIEFDVElPTl9CT1VORCA9IFwiYWN0aW9uLmJvdW5kXCI7XG52YXIgQVVUT0FDVElPTiA9IFwiYXV0b0FjdGlvblwiO1xudmFyIEFVVE9BQ1RJT05fQk9VTkQgPSBcImF1dG9BY3Rpb24uYm91bmRcIjtcbnZhciBBQ1RJT05fVU5OQU1FRCA9IFwiPHVubmFtZWQgYWN0aW9uPlwiO1xuXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb25GYWN0b3J5KGF1dG9BY3Rpb24sIGFubm90YXRpb24pIHtcbiAgdmFyIHJlcyA9IGZ1bmN0aW9uIGFjdGlvbihhcmcxLCBhcmcyKSB7XG4gICAgLy8gYWN0aW9uKGZuKCkge30pXG4gICAgaWYgKGlzRnVuY3Rpb24oYXJnMSkpIHJldHVybiBjcmVhdGVBY3Rpb24oYXJnMS5uYW1lIHx8IEFDVElPTl9VTk5BTUVELCBhcmcxLCBhdXRvQWN0aW9uKTsgLy8gYWN0aW9uKFwibmFtZVwiLCBmbigpIHt9KVxuXG4gICAgaWYgKGlzRnVuY3Rpb24oYXJnMikpIHJldHVybiBjcmVhdGVBY3Rpb24oYXJnMSwgYXJnMiwgYXV0b0FjdGlvbik7IC8vIEBhY3Rpb25cblxuICAgIGlmIChpc1N0cmluZ2lzaChhcmcyKSkge1xuICAgICAgcmV0dXJuIHN0b3JlRGVjb3JhdG9yKGFyZzEsIGFyZzIsIGFubm90YXRpb24pO1xuICAgIH0gLy8gQW5uYXRpb246IGFjdGlvbihcIm5hbWVcIikgJiBAYWN0aW9uKFwibmFtZVwiKVxuXG5cbiAgICBpZiAoaXNTdHJpbmdpc2goYXJnMSkpIHtcbiAgICAgIHJldHVybiBjcmVhdGVEZWNvcmF0b3JBbmRBbm5vdGF0aW9uKGFubm90YXRpb24sIGFyZzEpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGRpZShcIkludmFsaWQgYXJndW1lbnRzIGZvciBgYWN0aW9uYFwiKTtcbiAgfTtcblxuICByZXMuYW5ub3RhdGlvblR5cGVfID0gYW5ub3RhdGlvbjtcbiAgcmV0dXJuIHJlcztcbn1cblxudmFyIGFjdGlvbiA9IC8qI19fUFVSRV9fKi9jcmVhdGVBY3Rpb25GYWN0b3J5KGZhbHNlLCBBQ1RJT04pO1xudmFyIGF1dG9BY3Rpb24gPSAvKiNfX1BVUkVfXyovY3JlYXRlQWN0aW9uRmFjdG9yeSh0cnVlLCBBVVRPQUNUSU9OKTtcbmFjdGlvbi5ib3VuZCA9IC8qI19fUFVSRV9fKi9jcmVhdGVEZWNvcmF0b3IoQUNUSU9OX0JPVU5EKTtcbmF1dG9BY3Rpb24uYm91bmQgPSAvKiNfX1BVUkVfXyovY3JlYXRlRGVjb3JhdG9yKEFVVE9BQ1RJT05fQk9VTkQpO1xuZnVuY3Rpb24gcnVuSW5BY3Rpb24oZm4pIHtcbiAgcmV0dXJuIGV4ZWN1dGVBY3Rpb24oZm4ubmFtZSB8fCBBQ1RJT05fVU5OQU1FRCwgZmFsc2UsIGZuLCB0aGlzLCB1bmRlZmluZWQpO1xufVxuZnVuY3Rpb24gaXNBY3Rpb24odGhpbmcpIHtcbiAgcmV0dXJuIGlzRnVuY3Rpb24odGhpbmcpICYmIHRoaW5nLmlzTW9ieEFjdGlvbiA9PT0gdHJ1ZTtcbn1cblxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuYW1lZCByZWFjdGl2ZSB2aWV3IGFuZCBrZWVwcyBpdCBhbGl2ZSwgc28gdGhhdCB0aGUgdmlldyBpcyBhbHdheXNcclxuICogdXBkYXRlZCBpZiBvbmUgb2YgdGhlIGRlcGVuZGVuY2llcyBjaGFuZ2VzLCBldmVuIHdoZW4gdGhlIHZpZXcgaXMgbm90IGZ1cnRoZXIgdXNlZCBieSBzb21ldGhpbmcgZWxzZS5cclxuICogQHBhcmFtIHZpZXcgVGhlIHJlYWN0aXZlIHZpZXdcclxuICogQHJldHVybnMgZGlzcG9zZXIgZnVuY3Rpb24sIHdoaWNoIGNhbiBiZSB1c2VkIHRvIHN0b3AgdGhlIHZpZXcgZnJvbSBiZWluZyB1cGRhdGVkIGluIHRoZSBmdXR1cmUuXHJcbiAqL1xuXG5mdW5jdGlvbiBhdXRvcnVuKHZpZXcsIG9wdHMpIHtcbiAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgIG9wdHMgPSBFTVBUWV9PQkpFQ1Q7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKCFpc0Z1bmN0aW9uKHZpZXcpKSBkaWUoXCJBdXRvcnVuIGV4cGVjdHMgYSBmdW5jdGlvbiBhcyBmaXJzdCBhcmd1bWVudFwiKTtcbiAgICBpZiAoaXNBY3Rpb24odmlldykpIGRpZShcIkF1dG9ydW4gZG9lcyBub3QgYWNjZXB0IGFjdGlvbnMgc2luY2UgYWN0aW9ucyBhcmUgdW50cmFja2FibGVcIik7XG4gIH1cblxuICB2YXIgbmFtZSA9IG9wdHMgJiYgb3B0cy5uYW1lIHx8IHZpZXcubmFtZSB8fCBcIkF1dG9ydW5AXCIgKyBnZXROZXh0SWQoKTtcbiAgdmFyIHJ1blN5bmMgPSAhb3B0cy5zY2hlZHVsZXIgJiYgIW9wdHMuZGVsYXk7XG4gIHZhciByZWFjdGlvbjtcblxuICBpZiAocnVuU3luYykge1xuICAgIC8vIG5vcm1hbCBhdXRvcnVuXG4gICAgcmVhY3Rpb24gPSBuZXcgUmVhY3Rpb24obmFtZSwgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy50cmFjayhyZWFjdGlvblJ1bm5lcik7XG4gICAgfSwgb3B0cy5vbkVycm9yLCBvcHRzLnJlcXVpcmVzT2JzZXJ2YWJsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHNjaGVkdWxlciA9IGNyZWF0ZVNjaGVkdWxlckZyb21PcHRpb25zKG9wdHMpOyAvLyBkZWJvdW5jZWQgYXV0b3J1blxuXG4gICAgdmFyIGlzU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgcmVhY3Rpb24gPSBuZXcgUmVhY3Rpb24obmFtZSwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFpc1NjaGVkdWxlZCkge1xuICAgICAgICBpc1NjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgIHNjaGVkdWxlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaXNTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoIXJlYWN0aW9uLmlzRGlzcG9zZWRfKSByZWFjdGlvbi50cmFjayhyZWFjdGlvblJ1bm5lcik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIG9wdHMub25FcnJvciwgb3B0cy5yZXF1aXJlc09ic2VydmFibGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVhY3Rpb25SdW5uZXIoKSB7XG4gICAgdmlldyhyZWFjdGlvbik7XG4gIH1cblxuICByZWFjdGlvbi5zY2hlZHVsZV8oKTtcbiAgcmV0dXJuIHJlYWN0aW9uLmdldERpc3Bvc2VyXygpO1xufVxuXG52YXIgcnVuID0gZnVuY3Rpb24gcnVuKGYpIHtcbiAgcmV0dXJuIGYoKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVNjaGVkdWxlckZyb21PcHRpb25zKG9wdHMpIHtcbiAgcmV0dXJuIG9wdHMuc2NoZWR1bGVyID8gb3B0cy5zY2hlZHVsZXIgOiBvcHRzLmRlbGF5ID8gZnVuY3Rpb24gKGYpIHtcbiAgICByZXR1cm4gc2V0VGltZW91dChmLCBvcHRzLmRlbGF5KTtcbiAgfSA6IHJ1bjtcbn1cblxuZnVuY3Rpb24gcmVhY3Rpb24oZXhwcmVzc2lvbiwgZWZmZWN0LCBvcHRzKSB7XG4gIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICBvcHRzID0gRU1QVFlfT0JKRUNUO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmICghaXNGdW5jdGlvbihleHByZXNzaW9uKSB8fCAhaXNGdW5jdGlvbihlZmZlY3QpKSBkaWUoXCJGaXJzdCBhbmQgc2Vjb25kIGFyZ3VtZW50IHRvIHJlYWN0aW9uIHNob3VsZCBiZSBmdW5jdGlvbnNcIik7XG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KG9wdHMpKSBkaWUoXCJUaGlyZCBhcmd1bWVudCBvZiByZWFjdGlvbnMgc2hvdWxkIGJlIGFuIG9iamVjdFwiKTtcbiAgfVxuXG4gIHZhciBuYW1lID0gb3B0cy5uYW1lIHx8IFwiUmVhY3Rpb25AXCIgKyBnZXROZXh0SWQoKTtcbiAgdmFyIGVmZmVjdEFjdGlvbiA9IGFjdGlvbihuYW1lLCBvcHRzLm9uRXJyb3IgPyB3cmFwRXJyb3JIYW5kbGVyKG9wdHMub25FcnJvciwgZWZmZWN0KSA6IGVmZmVjdCk7XG4gIHZhciBydW5TeW5jID0gIW9wdHMuc2NoZWR1bGVyICYmICFvcHRzLmRlbGF5O1xuICB2YXIgc2NoZWR1bGVyID0gY3JlYXRlU2NoZWR1bGVyRnJvbU9wdGlvbnMob3B0cyk7XG4gIHZhciBmaXJzdFRpbWUgPSB0cnVlO1xuICB2YXIgaXNTY2hlZHVsZWQgPSBmYWxzZTtcbiAgdmFyIHZhbHVlO1xuICB2YXIgb2xkVmFsdWUgPSB1bmRlZmluZWQ7IC8vIG9ubHkgYW4gaXNzdWUgd2l0aCBmaXJlSW1tZWRpYXRlbHlcblxuICB2YXIgZXF1YWxzID0gb3B0cy5jb21wYXJlU3RydWN0dXJhbCA/IGNvbXBhcmVyLnN0cnVjdHVyYWwgOiBvcHRzLmVxdWFscyB8fCBjb21wYXJlcltcImRlZmF1bHRcIl07XG4gIHZhciByID0gbmV3IFJlYWN0aW9uKG5hbWUsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZmlyc3RUaW1lIHx8IHJ1blN5bmMpIHtcbiAgICAgIHJlYWN0aW9uUnVubmVyKCk7XG4gICAgfSBlbHNlIGlmICghaXNTY2hlZHVsZWQpIHtcbiAgICAgIGlzU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgIHNjaGVkdWxlcihyZWFjdGlvblJ1bm5lcik7XG4gICAgfVxuICB9LCBvcHRzLm9uRXJyb3IsIG9wdHMucmVxdWlyZXNPYnNlcnZhYmxlKTtcblxuICBmdW5jdGlvbiByZWFjdGlvblJ1bm5lcigpIHtcbiAgICBpc1NjaGVkdWxlZCA9IGZhbHNlO1xuICAgIGlmIChyLmlzRGlzcG9zZWRfKSByZXR1cm47XG4gICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcbiAgICByLnRyYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBuZXh0VmFsdWUgPSBhbGxvd1N0YXRlQ2hhbmdlcyhmYWxzZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZXhwcmVzc2lvbihyKTtcbiAgICAgIH0pO1xuICAgICAgY2hhbmdlZCA9IGZpcnN0VGltZSB8fCAhZXF1YWxzKHZhbHVlLCBuZXh0VmFsdWUpO1xuICAgICAgb2xkVmFsdWUgPSB2YWx1ZTtcbiAgICAgIHZhbHVlID0gbmV4dFZhbHVlO1xuICAgIH0pO1xuICAgIGlmIChmaXJzdFRpbWUgJiYgb3B0cy5maXJlSW1tZWRpYXRlbHkpIGVmZmVjdEFjdGlvbih2YWx1ZSwgb2xkVmFsdWUsIHIpO2Vsc2UgaWYgKCFmaXJzdFRpbWUgJiYgY2hhbmdlZCkgZWZmZWN0QWN0aW9uKHZhbHVlLCBvbGRWYWx1ZSwgcik7XG4gICAgZmlyc3RUaW1lID0gZmFsc2U7XG4gIH1cblxuICByLnNjaGVkdWxlXygpO1xuICByZXR1cm4gci5nZXREaXNwb3Nlcl8oKTtcbn1cblxuZnVuY3Rpb24gd3JhcEVycm9ySGFuZGxlcihlcnJvckhhbmRsZXIsIGJhc2VGbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYmFzZUZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZXJyb3JIYW5kbGVyLmNhbGwodGhpcywgZSk7XG4gICAgfVxuICB9O1xufVxuXG52YXIgT05fQkVDT01FX09CU0VSVkVEID0gXCJvbkJPXCI7XG52YXIgT05fQkVDT01FX1VOT0JTRVJWRUQgPSBcIm9uQlVPXCI7XG5mdW5jdGlvbiBvbkJlY29tZU9ic2VydmVkKHRoaW5nLCBhcmcyLCBhcmczKSB7XG4gIHJldHVybiBpbnRlcmNlcHRIb29rKE9OX0JFQ09NRV9PQlNFUlZFRCwgdGhpbmcsIGFyZzIsIGFyZzMpO1xufVxuZnVuY3Rpb24gb25CZWNvbWVVbm9ic2VydmVkKHRoaW5nLCBhcmcyLCBhcmczKSB7XG4gIHJldHVybiBpbnRlcmNlcHRIb29rKE9OX0JFQ09NRV9VTk9CU0VSVkVELCB0aGluZywgYXJnMiwgYXJnMyk7XG59XG5cbmZ1bmN0aW9uIGludGVyY2VwdEhvb2soaG9vaywgdGhpbmcsIGFyZzIsIGFyZzMpIHtcbiAgdmFyIGF0b20gPSB0eXBlb2YgYXJnMyA9PT0gXCJmdW5jdGlvblwiID8gZ2V0QXRvbSh0aGluZywgYXJnMikgOiBnZXRBdG9tKHRoaW5nKTtcbiAgdmFyIGNiID0gaXNGdW5jdGlvbihhcmczKSA/IGFyZzMgOiBhcmcyO1xuICB2YXIgbGlzdGVuZXJzS2V5ID0gaG9vayArIFwiTFwiO1xuXG4gIGlmIChhdG9tW2xpc3RlbmVyc0tleV0pIHtcbiAgICBhdG9tW2xpc3RlbmVyc0tleV0uYWRkKGNiKTtcbiAgfSBlbHNlIHtcbiAgICBhdG9tW2xpc3RlbmVyc0tleV0gPSBuZXcgU2V0KFtjYl0pO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaG9va0xpc3RlbmVycyA9IGF0b21bbGlzdGVuZXJzS2V5XTtcblxuICAgIGlmIChob29rTGlzdGVuZXJzKSB7XG4gICAgICBob29rTGlzdGVuZXJzW1wiZGVsZXRlXCJdKGNiKTtcblxuICAgICAgaWYgKGhvb2tMaXN0ZW5lcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICBkZWxldGUgYXRvbVtsaXN0ZW5lcnNLZXldO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxudmFyIE5FVkVSID0gXCJuZXZlclwiO1xudmFyIEFMV0FZUyA9IFwiYWx3YXlzXCI7XG52YXIgT0JTRVJWRUQgPSBcIm9ic2VydmVkXCI7IC8vIGNvbnN0IElGX0FWQUlMQUJMRSA9IFwiaWZhdmFpbGFibGVcIlxuXG5mdW5jdGlvbiBjb25maWd1cmUob3B0aW9ucykge1xuICBpZiAob3B0aW9ucy5pc29sYXRlR2xvYmFsU3RhdGUgPT09IHRydWUpIHtcbiAgICBpc29sYXRlR2xvYmFsU3RhdGUoKTtcbiAgfVxuXG4gIHZhciB1c2VQcm94aWVzID0gb3B0aW9ucy51c2VQcm94aWVzLFxuICAgICAgZW5mb3JjZUFjdGlvbnMgPSBvcHRpb25zLmVuZm9yY2VBY3Rpb25zO1xuXG4gIGlmICh1c2VQcm94aWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICBnbG9iYWxTdGF0ZS51c2VQcm94aWVzID0gdXNlUHJveGllcyA9PT0gQUxXQVlTID8gdHJ1ZSA6IHVzZVByb3hpZXMgPT09IE5FVkVSID8gZmFsc2UgOiB0eXBlb2YgUHJveHkgIT09IFwidW5kZWZpbmVkXCI7XG4gIH1cblxuICBpZiAodXNlUHJveGllcyA9PT0gXCJpZmF2YWlsYWJsZVwiKSBnbG9iYWxTdGF0ZS52ZXJpZnlQcm94aWVzID0gdHJ1ZTtcblxuICBpZiAoZW5mb3JjZUFjdGlvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBlYSA9IGVuZm9yY2VBY3Rpb25zID09PSBBTFdBWVMgPyBBTFdBWVMgOiBlbmZvcmNlQWN0aW9ucyA9PT0gT0JTRVJWRUQ7XG4gICAgZ2xvYmFsU3RhdGUuZW5mb3JjZUFjdGlvbnMgPSBlYTtcbiAgICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcyA9IGVhID09PSB0cnVlIHx8IGVhID09PSBBTFdBWVMgPyBmYWxzZSA6IHRydWU7XG4gIH1cbiAgW1wiY29tcHV0ZWRSZXF1aXJlc1JlYWN0aW9uXCIsIFwicmVhY3Rpb25SZXF1aXJlc09ic2VydmFibGVcIiwgXCJvYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvblwiLCBcImRpc2FibGVFcnJvckJvdW5kYXJpZXNcIl0uZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSBpbiBvcHRpb25zKSBnbG9iYWxTdGF0ZVtrZXldID0gISFvcHRpb25zW2tleV07XG4gIH0pO1xuICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlUmVhZHMgPSAhZ2xvYmFsU3RhdGUub2JzZXJ2YWJsZVJlcXVpcmVzUmVhY3Rpb247XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBnbG9iYWxTdGF0ZS5kaXNhYmxlRXJyb3JCb3VuZGFyaWVzID09PSB0cnVlKSB7XG4gICAgY29uc29sZS53YXJuKFwiV0FSTklORzogRGVidWcgZmVhdHVyZSBvbmx5LiBNb2JYIHdpbGwgTk9UIHJlY292ZXIgZnJvbSBlcnJvcnMgd2hlbiBgZGlzYWJsZUVycm9yQm91bmRhcmllc2AgaXMgZW5hYmxlZC5cIik7XG4gIH1cblxuICBpZiAob3B0aW9ucy5yZWFjdGlvblNjaGVkdWxlcikge1xuICAgIHNldFJlYWN0aW9uU2NoZWR1bGVyKG9wdGlvbnMucmVhY3Rpb25TY2hlZHVsZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGV4dGVuZE9ic2VydmFibGUodGFyZ2V0LCBwcm9wZXJ0aWVzLCBhbm5vdGF0aW9ucywgb3B0aW9ucykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiA0KSBkaWUoXCInZXh0ZW5kT2JzZXJ2YWJsZScgZXhwZWN0ZWQgMi00IGFyZ3VtZW50c1wiKTtcbiAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gXCJvYmplY3RcIikgZGllKFwiJ2V4dGVuZE9ic2VydmFibGUnIGV4cGVjdHMgYW4gb2JqZWN0IGFzIGZpcnN0IGFyZ3VtZW50XCIpO1xuICAgIGlmIChpc09ic2VydmFibGVNYXAodGFyZ2V0KSkgZGllKFwiJ2V4dGVuZE9ic2VydmFibGUnIHNob3VsZCBub3QgYmUgdXNlZCBvbiBtYXBzLCB1c2UgbWFwLm1lcmdlIGluc3RlYWRcIik7XG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KHByb3BlcnRpZXMpKSBkaWUoXCInZXh0ZW5kT2JzZXJ2YWJlJyBvbmx5IGFjY2VwdHMgcGxhaW4gb2JqZWN0cyBhcyBzZWNvbmQgYXJndW1lbnRcIik7XG4gICAgaWYgKGlzT2JzZXJ2YWJsZShwcm9wZXJ0aWVzKSB8fCBpc09ic2VydmFibGUoYW5ub3RhdGlvbnMpKSBkaWUoXCJFeHRlbmRpbmcgYW4gb2JqZWN0IHdpdGggYW5vdGhlciBvYnNlcnZhYmxlIChvYmplY3QpIGlzIG5vdCBzdXBwb3J0ZWRcIik7XG4gIH1cblxuICB2YXIgbyA9IGFzQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMob3B0aW9ucyk7XG4gIHZhciBhZG0gPSBhc09ic2VydmFibGVPYmplY3QodGFyZ2V0LCBvLm5hbWUsIGdldEVuaGFuY2VyRnJvbU9wdGlvbihvKSk7XG4gIHN0YXJ0QmF0Y2goKTtcblxuICB0cnkge1xuICAgIHZhciBkZXNjcyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMocHJvcGVydGllcyk7XG4gICAgZ2V0UGxhaW5PYmplY3RLZXlzKGRlc2NzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIG1ha2VQcm9wZXJ0eShhZG0sIHRhcmdldCwga2V5LCBkZXNjc1trZXldLCAhYW5ub3RhdGlvbnMgPyB0cnVlIDoga2V5IGluIGFubm90YXRpb25zID8gYW5ub3RhdGlvbnNba2V5XSA6IHRydWUsIHRydWUsICEhKG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuYXV0b0JpbmQpKTtcbiAgICB9KTtcbiAgfSBmaW5hbGx5IHtcbiAgICBlbmRCYXRjaCgpO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gZ2V0RGVwZW5kZW5jeVRyZWUodGhpbmcsIHByb3BlcnR5KSB7XG4gIHJldHVybiBub2RlVG9EZXBlbmRlbmN5VHJlZShnZXRBdG9tKHRoaW5nLCBwcm9wZXJ0eSkpO1xufVxuXG5mdW5jdGlvbiBub2RlVG9EZXBlbmRlbmN5VHJlZShub2RlKSB7XG4gIHZhciByZXN1bHQgPSB7XG4gICAgbmFtZTogbm9kZS5uYW1lX1xuICB9O1xuICBpZiAobm9kZS5vYnNlcnZpbmdfICYmIG5vZGUub2JzZXJ2aW5nXy5sZW5ndGggPiAwKSByZXN1bHQuZGVwZW5kZW5jaWVzID0gdW5pcXVlKG5vZGUub2JzZXJ2aW5nXykubWFwKG5vZGVUb0RlcGVuZGVuY3lUcmVlKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXJUcmVlKHRoaW5nLCBwcm9wZXJ0eSkge1xuICByZXR1cm4gbm9kZVRvT2JzZXJ2ZXJUcmVlKGdldEF0b20odGhpbmcsIHByb3BlcnR5KSk7XG59XG5cbmZ1bmN0aW9uIG5vZGVUb09ic2VydmVyVHJlZShub2RlKSB7XG4gIHZhciByZXN1bHQgPSB7XG4gICAgbmFtZTogbm9kZS5uYW1lX1xuICB9O1xuICBpZiAoaGFzT2JzZXJ2ZXJzKG5vZGUpKSByZXN1bHQub2JzZXJ2ZXJzID0gQXJyYXkuZnJvbShnZXRPYnNlcnZlcnMobm9kZSkpLm1hcChub2RlVG9PYnNlcnZlclRyZWUpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiB1bmlxdWUobGlzdCkge1xuICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGxpc3QpKTtcbn1cblxudmFyIEZMT1cgPSBcImZsb3dcIjtcbnZhciBnZW5lcmF0b3JJZCA9IDA7XG5mdW5jdGlvbiBGbG93Q2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHRoaXMubWVzc2FnZSA9IFwiRkxPV19DQU5DRUxMRURcIjtcbn1cbkZsb3dDYW5jZWxsYXRpb25FcnJvci5wcm90b3R5cGUgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuZnVuY3Rpb24gaXNGbG93Q2FuY2VsbGF0aW9uRXJyb3IoZXJyb3IpIHtcbiAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgRmxvd0NhbmNlbGxhdGlvbkVycm9yO1xufVxudmFyIGZsb3cgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmFzc2lnbihmdW5jdGlvbiBmbG93KGFyZzEsIGFyZzIpIHtcbiAgLy8gQGZsb3dcbiAgaWYgKGlzU3RyaW5naXNoKGFyZzIpKSB7XG4gICAgcmV0dXJuIHN0b3JlRGVjb3JhdG9yKGFyZzEsIGFyZzIsIFwiZmxvd1wiKTtcbiAgfSAvLyBmbG93KGZuKVxuXG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBhcmd1bWVudHMubGVuZ3RoICE9PSAxKSBkaWUoXCJGbG93IGV4cGVjdHMgMSBhcmd1bWVudCBhbmQgY2Fubm90IGJlIHVzZWQgYXMgZGVjb3JhdG9yXCIpO1xuICB2YXIgZ2VuZXJhdG9yID0gYXJnMTtcbiAgdmFyIG5hbWUgPSBnZW5lcmF0b3IubmFtZSB8fCBcIjx1bm5hbWVkIGZsb3c+XCI7IC8vIEltcGxlbWVudGF0aW9uIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS90ai9jby9ibG9iL21hc3Rlci9pbmRleC5qc1xuXG4gIHZhciByZXMgPSBmdW5jdGlvbiByZXMoKSB7XG4gICAgdmFyIGN0eCA9IHRoaXM7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdmFyIHJ1bklkID0gKytnZW5lcmF0b3JJZDtcbiAgICB2YXIgZ2VuID0gYWN0aW9uKG5hbWUgKyBcIiAtIHJ1bmlkOiBcIiArIHJ1bklkICsgXCIgLSBpbml0XCIsIGdlbmVyYXRvcikuYXBwbHkoY3R4LCBhcmdzKTtcbiAgICB2YXIgcmVqZWN0b3I7XG4gICAgdmFyIHBlbmRpbmdQcm9taXNlID0gdW5kZWZpbmVkO1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHN0ZXBJZCA9IDA7XG4gICAgICByZWplY3RvciA9IHJlamVjdDtcblxuICAgICAgZnVuY3Rpb24gb25GdWxmaWxsZWQocmVzKSB7XG4gICAgICAgIHBlbmRpbmdQcm9taXNlID0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgcmV0O1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0ID0gYWN0aW9uKG5hbWUgKyBcIiAtIHJ1bmlkOiBcIiArIHJ1bklkICsgXCIgLSB5aWVsZCBcIiArIHN0ZXBJZCsrLCBnZW4ubmV4dCkuY2FsbChnZW4sIHJlcyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV4dChyZXQpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBvblJlamVjdGVkKGVycikge1xuICAgICAgICBwZW5kaW5nUHJvbWlzZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIHJldDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldCA9IGFjdGlvbihuYW1lICsgXCIgLSBydW5pZDogXCIgKyBydW5JZCArIFwiIC0geWllbGQgXCIgKyBzdGVwSWQrKywgZ2VuW1widGhyb3dcIl0pLmNhbGwoZ2VuLCBlcnIpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5leHQocmV0KTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gbmV4dChyZXQpIHtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24ocmV0ID09IG51bGwgPyB2b2lkIDAgOiByZXQudGhlbikpIHtcbiAgICAgICAgICAvLyBhbiBhc3luYyBpdGVyYXRvclxuICAgICAgICAgIHJldC50aGVuKG5leHQsIHJlamVjdCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJldC5kb25lKSByZXR1cm4gcmVzb2x2ZShyZXQudmFsdWUpO1xuICAgICAgICBwZW5kaW5nUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShyZXQudmFsdWUpO1xuICAgICAgICByZXR1cm4gcGVuZGluZ1Byb21pc2UudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XG4gICAgICB9XG5cbiAgICAgIG9uRnVsZmlsbGVkKHVuZGVmaW5lZCk7IC8vIGtpY2sgb2ZmIHRoZSBwcm9jZXNzXG4gICAgfSk7XG4gICAgcHJvbWlzZS5jYW5jZWwgPSBhY3Rpb24obmFtZSArIFwiIC0gcnVuaWQ6IFwiICsgcnVuSWQgKyBcIiAtIGNhbmNlbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAocGVuZGluZ1Byb21pc2UpIGNhbmNlbFByb21pc2UocGVuZGluZ1Byb21pc2UpOyAvLyBGaW5hbGx5IGJsb2NrIGNhbiByZXR1cm4gKG9yIHlpZWxkKSBzdHVmZi4uXG5cbiAgICAgICAgdmFyIF9yZXMgPSBnZW5bXCJyZXR1cm5cIl0odW5kZWZpbmVkKTsgLy8gZWF0IGFueXRoaW5nIHRoYXQgcHJvbWlzZSB3b3VsZCBkbywgaXQncyBjYW5jZWxsZWQhXG5cblxuICAgICAgICB2YXIgeWllbGRlZFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoX3Jlcy52YWx1ZSk7XG4gICAgICAgIHlpZWxkZWRQcm9taXNlLnRoZW4obm9vcCwgbm9vcCk7XG4gICAgICAgIGNhbmNlbFByb21pc2UoeWllbGRlZFByb21pc2UpOyAvLyBtYXliZSBpdCBjYW4gYmUgY2FuY2VsbGVkIDopXG4gICAgICAgIC8vIHJlamVjdCBvdXIgb3JpZ2luYWwgcHJvbWlzZVxuXG4gICAgICAgIHJlamVjdG9yKG5ldyBGbG93Q2FuY2VsbGF0aW9uRXJyb3IoKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdG9yKGUpOyAvLyB0aGVyZSBjb3VsZCBiZSBhIHRocm93aW5nIGZpbmFsbHkgYmxvY2tcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcblxuICByZXMuaXNNb2JYRmxvdyA9IHRydWU7XG4gIHJldHVybiByZXM7XG59LCB7XG4gIGFubm90YXRpb25UeXBlXzogXCJmbG93XCJcbn0pO1xuXG5mdW5jdGlvbiBjYW5jZWxQcm9taXNlKHByb21pc2UpIHtcbiAgaWYgKGlzRnVuY3Rpb24ocHJvbWlzZS5jYW5jZWwpKSBwcm9taXNlLmNhbmNlbCgpO1xufVxuXG5mdW5jdGlvbiBmbG93UmVzdWx0KHJlc3VsdCkge1xuICByZXR1cm4gcmVzdWx0OyAvLyBqdXN0IHRyaWNraW5nIFR5cGVTY3JpcHQgOilcbn1cbmZ1bmN0aW9uIGlzRmxvdyhmbikge1xuICByZXR1cm4gKGZuID09IG51bGwgPyB2b2lkIDAgOiBmbi5pc01vYlhGbG93KSA9PT0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaW50ZXJjZXB0UmVhZHModGhpbmcsIHByb3BPckhhbmRsZXIsIGhhbmRsZXIpIHtcbiAgdmFyIHRhcmdldDtcblxuICBpZiAoaXNPYnNlcnZhYmxlTWFwKHRoaW5nKSB8fCBpc09ic2VydmFibGVBcnJheSh0aGluZykgfHwgaXNPYnNlcnZhYmxlVmFsdWUodGhpbmcpKSB7XG4gICAgdGFyZ2V0ID0gZ2V0QWRtaW5pc3RyYXRpb24odGhpbmcpO1xuICB9IGVsc2UgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCh0aGluZykpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFpc1N0cmluZ2lzaChwcm9wT3JIYW5kbGVyKSkgcmV0dXJuIGRpZShcIkludGVyY2VwdFJlYWRzIGNhbiBvbmx5IGJlIHVzZWQgd2l0aCBhIHNwZWNpZmljIHByb3BlcnR5LCBub3Qgd2l0aCBhbiBvYmplY3QgaW4gZ2VuZXJhbFwiKTtcbiAgICB0YXJnZXQgPSBnZXRBZG1pbmlzdHJhdGlvbih0aGluZywgcHJvcE9ySGFuZGxlcik7XG4gIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgcmV0dXJuIGRpZShcIkV4cGVjdGVkIG9ic2VydmFibGUgbWFwLCBvYmplY3Qgb3IgYXJyYXkgYXMgZmlyc3QgYXJyYXlcIik7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIHRhcmdldC5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZGllKFwiQW4gaW50ZXJjZXB0IHJlYWRlciB3YXMgYWxyZWFkeSBlc3RhYmxpc2hlZFwiKTtcbiAgdGFyZ2V0LmRlaGFuY2VyID0gdHlwZW9mIHByb3BPckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIiA/IHByb3BPckhhbmRsZXIgOiBoYW5kbGVyO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHRhcmdldC5kZWhhbmNlciA9IHVuZGVmaW5lZDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW50ZXJjZXB0KHRoaW5nLCBwcm9wT3JIYW5kbGVyLCBoYW5kbGVyKSB7XG4gIGlmIChpc0Z1bmN0aW9uKGhhbmRsZXIpKSByZXR1cm4gaW50ZXJjZXB0UHJvcGVydHkodGhpbmcsIHByb3BPckhhbmRsZXIsIGhhbmRsZXIpO2Vsc2UgcmV0dXJuIGludGVyY2VwdEludGVyY2VwdGFibGUodGhpbmcsIHByb3BPckhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBpbnRlcmNlcHRJbnRlcmNlcHRhYmxlKHRoaW5nLCBoYW5kbGVyKSB7XG4gIHJldHVybiBnZXRBZG1pbmlzdHJhdGlvbih0aGluZykuaW50ZXJjZXB0XyhoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gaW50ZXJjZXB0UHJvcGVydHkodGhpbmcsIHByb3BlcnR5LCBoYW5kbGVyKSB7XG4gIHJldHVybiBnZXRBZG1pbmlzdHJhdGlvbih0aGluZywgcHJvcGVydHkpLmludGVyY2VwdF8oaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIF9pc0NvbXB1dGVkKHZhbHVlLCBwcm9wZXJ0eSkge1xuICBpZiAocHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChpc09ic2VydmFibGVPYmplY3QodmFsdWUpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICghdmFsdWVbJG1vYnhdLnZhbHVlc18uaGFzKHByb3BlcnR5KSkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBhdG9tID0gZ2V0QXRvbSh2YWx1ZSwgcHJvcGVydHkpO1xuICAgIHJldHVybiBpc0NvbXB1dGVkVmFsdWUoYXRvbSk7XG4gIH1cblxuICByZXR1cm4gaXNDb21wdXRlZFZhbHVlKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGlzQ29tcHV0ZWQodmFsdWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBhcmd1bWVudHMubGVuZ3RoID4gMSkgcmV0dXJuIGRpZShcImlzQ29tcHV0ZWQgZXhwZWN0cyBvbmx5IDEgYXJndW1lbnQuIFVzZSBpc0NvbXB1dGVkUHJvcCB0byBpbnNwZWN0IHRoZSBvYnNlcnZhYmlsaXR5IG9mIGEgcHJvcGVydHlcIik7XG4gIHJldHVybiBfaXNDb21wdXRlZCh2YWx1ZSk7XG59XG5mdW5jdGlvbiBpc0NvbXB1dGVkUHJvcCh2YWx1ZSwgcHJvcE5hbWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhaXNTdHJpbmdpc2gocHJvcE5hbWUpKSByZXR1cm4gZGllKFwiaXNDb21wdXRlZCBleHBlY3RlZCBhIHByb3BlcnR5IG5hbWUgYXMgc2Vjb25kIGFyZ3VtZW50XCIpO1xuICByZXR1cm4gX2lzQ29tcHV0ZWQodmFsdWUsIHByb3BOYW1lKTtcbn1cblxuZnVuY3Rpb24gX2lzT2JzZXJ2YWJsZSh2YWx1ZSwgcHJvcGVydHkpIHtcbiAgaWYgKCF2YWx1ZSkgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChwcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAoaXNPYnNlcnZhYmxlTWFwKHZhbHVlKSB8fCBpc09ic2VydmFibGVBcnJheSh2YWx1ZSkpKSByZXR1cm4gZGllKFwiaXNPYnNlcnZhYmxlKG9iamVjdCwgcHJvcGVydHlOYW1lKSBpcyBub3Qgc3VwcG9ydGVkIGZvciBhcnJheXMgYW5kIG1hcHMuIFVzZSBtYXAuaGFzIG9yIGFycmF5Lmxlbmd0aCBpbnN0ZWFkLlwiKTtcblxuICAgIGlmIChpc09ic2VydmFibGVPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVbJG1vYnhdLnZhbHVlc18uaGFzKHByb3BlcnR5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gLy8gRm9yIGZpcnN0IGNoZWNrLCBzZWUgIzcwMVxuXG5cbiAgcmV0dXJuIGlzT2JzZXJ2YWJsZU9iamVjdCh2YWx1ZSkgfHwgISF2YWx1ZVskbW9ieF0gfHwgaXNBdG9tKHZhbHVlKSB8fCBpc1JlYWN0aW9uKHZhbHVlKSB8fCBpc0NvbXB1dGVkVmFsdWUodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBpc09ic2VydmFibGUodmFsdWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBhcmd1bWVudHMubGVuZ3RoICE9PSAxKSBkaWUoXCJpc09ic2VydmFibGUgZXhwZWN0cyBvbmx5IDEgYXJndW1lbnQuIFVzZSBpc09ic2VydmFibGVQcm9wIHRvIGluc3BlY3QgdGhlIG9ic2VydmFiaWxpdHkgb2YgYSBwcm9wZXJ0eVwiKTtcbiAgcmV0dXJuIF9pc09ic2VydmFibGUodmFsdWUpO1xufVxuZnVuY3Rpb24gaXNPYnNlcnZhYmxlUHJvcCh2YWx1ZSwgcHJvcE5hbWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhaXNTdHJpbmdpc2gocHJvcE5hbWUpKSByZXR1cm4gZGllKFwiZXhwZWN0ZWQgYSBwcm9wZXJ0eSBuYW1lIGFzIHNlY29uZCBhcmd1bWVudFwiKTtcbiAgcmV0dXJuIF9pc09ic2VydmFibGUodmFsdWUsIHByb3BOYW1lKTtcbn1cblxuZnVuY3Rpb24ga2V5cyhvYmopIHtcbiAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdChvYmopKSB7XG4gICAgcmV0dXJuIG9ialskbW9ieF0uZ2V0S2V5c18oKTtcbiAgfVxuXG4gIGlmIChpc09ic2VydmFibGVNYXAob2JqKSB8fCBpc09ic2VydmFibGVTZXQob2JqKSkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKG9iai5rZXlzKCkpO1xuICB9XG5cbiAgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KG9iaikpIHtcbiAgICByZXR1cm4gb2JqLm1hcChmdW5jdGlvbiAoXywgaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9KTtcbiAgfVxuXG4gIGRpZSg1KTtcbn1cbmZ1bmN0aW9uIHZhbHVlcyhvYmopIHtcbiAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdChvYmopKSB7XG4gICAgcmV0dXJuIGtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGlzT2JzZXJ2YWJsZU1hcChvYmopKSB7XG4gICAgcmV0dXJuIGtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIG9iai5nZXQoa2V5KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChpc09ic2VydmFibGVTZXQob2JqKSkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKG9iai52YWx1ZXMoKSk7XG4gIH1cblxuICBpZiAoaXNPYnNlcnZhYmxlQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBvYmouc2xpY2UoKTtcbiAgfVxuXG4gIGRpZSg2KTtcbn1cbmZ1bmN0aW9uIGVudHJpZXMob2JqKSB7XG4gIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xuICAgIHJldHVybiBrZXlzKG9iaikubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBba2V5LCBvYmpba2V5XV07XG4gICAgfSk7XG4gIH1cblxuICBpZiAoaXNPYnNlcnZhYmxlTWFwKG9iaikpIHtcbiAgICByZXR1cm4ga2V5cyhvYmopLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gW2tleSwgb2JqLmdldChrZXkpXTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChpc09ic2VydmFibGVTZXQob2JqKSkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKG9iai5lbnRyaWVzKCkpO1xuICB9XG5cbiAgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KG9iaikpIHtcbiAgICByZXR1cm4gb2JqLm1hcChmdW5jdGlvbiAoa2V5LCBpbmRleCkge1xuICAgICAgcmV0dXJuIFtpbmRleCwga2V5XTtcbiAgICB9KTtcbiAgfVxuXG4gIGRpZSg3KTtcbn1cbmZ1bmN0aW9uIHNldChvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgIWlzT2JzZXJ2YWJsZVNldChvYmopKSB7XG4gICAgc3RhcnRCYXRjaCgpO1xuICAgIHZhciBfdmFsdWVzID0ga2V5O1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9rZXkgaW4gX3ZhbHVlcykge1xuICAgICAgICBzZXQob2JqLCBfa2V5LCBfdmFsdWVzW19rZXldKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgZW5kQmF0Y2goKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KG9iaikpIHtcbiAgICB2YXIgYWRtID0gb2JqWyRtb2J4XTtcbiAgICB2YXIgZXhpc3RpbmdPYnNlcnZhYmxlID0gYWRtLnZhbHVlc18uZ2V0KGtleSk7XG5cbiAgICBpZiAoZXhpc3RpbmdPYnNlcnZhYmxlKSB7XG4gICAgICBhZG0ud3JpdGVfKGtleSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZG0uYWRkT2JzZXJ2YWJsZVByb3BfKGtleSwgdmFsdWUsIGFkbS5kZWZhdWx0RW5oYW5jZXJfKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlTWFwKG9iaikpIHtcbiAgICBvYmouc2V0KGtleSwgdmFsdWUpO1xuICB9IGVsc2UgaWYgKGlzT2JzZXJ2YWJsZVNldChvYmopKSB7XG4gICAgb2JqLmFkZChrZXkpO1xuICB9IGVsc2UgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KG9iaikpIHtcbiAgICBpZiAodHlwZW9mIGtleSAhPT0gXCJudW1iZXJcIikga2V5ID0gcGFyc2VJbnQoa2V5LCAxMCk7XG4gICAgaWYgKGtleSA8IDApIGRpZShcIkludmFsaWQgaW5kZXg6ICdcIiArIGtleSArIFwiJ1wiKTtcbiAgICBzdGFydEJhdGNoKCk7XG4gICAgaWYgKGtleSA+PSBvYmoubGVuZ3RoKSBvYmoubGVuZ3RoID0ga2V5ICsgMTtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIGVuZEJhdGNoKCk7XG4gIH0gZWxzZSBkaWUoOCk7XG59XG5mdW5jdGlvbiByZW1vdmUob2JqLCBrZXkpIHtcbiAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdChvYmopKSB7XG4gICAgb2JqWyRtb2J4XS5yZW1vdmVfKGtleSk7XG4gIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlTWFwKG9iaikpIHtcbiAgICBvYmpbXCJkZWxldGVcIl0oa2V5KTtcbiAgfSBlbHNlIGlmIChpc09ic2VydmFibGVTZXQob2JqKSkge1xuICAgIG9ialtcImRlbGV0ZVwiXShrZXkpO1xuICB9IGVsc2UgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KG9iaikpIHtcbiAgICBpZiAodHlwZW9mIGtleSAhPT0gXCJudW1iZXJcIikga2V5ID0gcGFyc2VJbnQoa2V5LCAxMCk7XG4gICAgb2JqLnNwbGljZShrZXksIDEpO1xuICB9IGVsc2Uge1xuICAgIGRpZSg5KTtcbiAgfVxufVxuZnVuY3Rpb24gaGFzKG9iaiwga2V5KSB7XG4gIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xuICAgIC8vIHJldHVybiBrZXlzKG9iaikuaW5kZXhPZihrZXkpID49IDBcbiAgICByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb24ob2JqKS5oYXNfKGtleSk7XG4gIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlTWFwKG9iaikpIHtcbiAgICByZXR1cm4gb2JqLmhhcyhrZXkpO1xuICB9IGVsc2UgaWYgKGlzT2JzZXJ2YWJsZVNldChvYmopKSB7XG4gICAgcmV0dXJuIG9iai5oYXMoa2V5KTtcbiAgfSBlbHNlIGlmIChpc09ic2VydmFibGVBcnJheShvYmopKSB7XG4gICAgcmV0dXJuIGtleSA+PSAwICYmIGtleSA8IG9iai5sZW5ndGg7XG4gIH1cblxuICBkaWUoMTApO1xufVxuZnVuY3Rpb24gZ2V0KG9iaiwga2V5KSB7XG4gIGlmICghaGFzKG9iaiwga2V5KSkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KG9iaikpIHtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlTWFwKG9iaikpIHtcbiAgICByZXR1cm4gb2JqLmdldChrZXkpO1xuICB9IGVsc2UgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KG9iaikpIHtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cblxuICBkaWUoMTEpO1xufVxuXG5mdW5jdGlvbiBvYnNlcnZlKHRoaW5nLCBwcm9wT3JDYiwgY2JPckZpcmUsIGZpcmVJbW1lZGlhdGVseSkge1xuICBpZiAoaXNGdW5jdGlvbihjYk9yRmlyZSkpIHJldHVybiBvYnNlcnZlT2JzZXJ2YWJsZVByb3BlcnR5KHRoaW5nLCBwcm9wT3JDYiwgY2JPckZpcmUsIGZpcmVJbW1lZGlhdGVseSk7ZWxzZSByZXR1cm4gb2JzZXJ2ZU9ic2VydmFibGUodGhpbmcsIHByb3BPckNiLCBjYk9yRmlyZSk7XG59XG5cbmZ1bmN0aW9uIG9ic2VydmVPYnNlcnZhYmxlKHRoaW5nLCBsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gIHJldHVybiBnZXRBZG1pbmlzdHJhdGlvbih0aGluZykub2JzZXJ2ZV8obGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSk7XG59XG5cbmZ1bmN0aW9uIG9ic2VydmVPYnNlcnZhYmxlUHJvcGVydHkodGhpbmcsIHByb3BlcnR5LCBsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gIHJldHVybiBnZXRBZG1pbmlzdHJhdGlvbih0aGluZywgcHJvcGVydHkpLm9ic2VydmVfKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpO1xufVxuXG5mdW5jdGlvbiBjYWNoZShtYXAsIGtleSwgdmFsdWUpIHtcbiAgbWFwLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiB0b0pTSGVscGVyKHNvdXJjZSwgX19hbHJlYWR5U2Vlbikge1xuICBpZiAoc291cmNlID09IG51bGwgfHwgdHlwZW9mIHNvdXJjZSAhPT0gXCJvYmplY3RcIiB8fCBzb3VyY2UgaW5zdGFuY2VvZiBEYXRlIHx8ICFpc09ic2VydmFibGUoc291cmNlKSkgcmV0dXJuIHNvdXJjZTtcbiAgaWYgKGlzT2JzZXJ2YWJsZVZhbHVlKHNvdXJjZSkpIHJldHVybiB0b0pTSGVscGVyKHNvdXJjZS5nZXQoKSwgX19hbHJlYWR5U2Vlbik7XG5cbiAgaWYgKF9fYWxyZWFkeVNlZW4uaGFzKHNvdXJjZSkpIHtcbiAgICByZXR1cm4gX19hbHJlYWR5U2Vlbi5nZXQoc291cmNlKTtcbiAgfVxuXG4gIGlmIChpc09ic2VydmFibGVBcnJheShzb3VyY2UpKSB7XG4gICAgdmFyIHJlcyA9IGNhY2hlKF9fYWxyZWFkeVNlZW4sIHNvdXJjZSwgbmV3IEFycmF5KHNvdXJjZS5sZW5ndGgpKTtcbiAgICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGlkeCkge1xuICAgICAgcmVzW2lkeF0gPSB0b0pTSGVscGVyKHZhbHVlLCBfX2FscmVhZHlTZWVuKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgaWYgKGlzT2JzZXJ2YWJsZVNldChzb3VyY2UpKSB7XG4gICAgdmFyIF9yZXMgPSBjYWNoZShfX2FscmVhZHlTZWVuLCBzb3VyY2UsIG5ldyBTZXQoKSk7XG5cbiAgICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIF9yZXMuYWRkKHRvSlNIZWxwZXIodmFsdWUsIF9fYWxyZWFkeVNlZW4pKTtcbiAgICB9KTtcbiAgICByZXR1cm4gX3JlcztcbiAgfVxuXG4gIGlmIChpc09ic2VydmFibGVNYXAoc291cmNlKSkge1xuICAgIHZhciBfcmVzMiA9IGNhY2hlKF9fYWxyZWFkeVNlZW4sIHNvdXJjZSwgbmV3IE1hcCgpKTtcblxuICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICBfcmVzMi5zZXQoa2V5LCB0b0pTSGVscGVyKHZhbHVlLCBfX2FscmVhZHlTZWVuKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIF9yZXMyO1xuICB9IGVsc2Uge1xuICAgIC8vIG11c3QgYmUgb2JzZXJ2YWJsZSBvYmplY3RcbiAgICBrZXlzKHNvdXJjZSk7IC8vIG1ha2Ugc3VyZSBrZXlzIGFyZSBvYnNlcnZlZFxuXG4gICAgdmFyIF9yZXMzID0gY2FjaGUoX19hbHJlYWR5U2Vlbiwgc291cmNlLCB7fSk7XG5cbiAgICBnZXRQbGFpbk9iamVjdEtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIF9yZXMzW2tleV0gPSB0b0pTSGVscGVyKHNvdXJjZVtrZXldLCBfX2FscmVhZHlTZWVuKTtcbiAgICB9KTtcbiAgICByZXR1cm4gX3JlczM7XG4gIH1cbn1cbi8qKlxyXG4gKiBCYXNpY2FsbHksIGEgZGVlcCBjbG9uZSwgc28gdGhhdCBubyByZWFjdGl2ZSBwcm9wZXJ0eSB3aWxsIGV4aXN0IGFueW1vcmUuXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIHRvSlMoc291cmNlLCBvcHRpb25zKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgb3B0aW9ucykgZGllKFwidG9KUyBubyBsb25nZXIgc3VwcG9ydHMgb3B0aW9uc1wiKTtcbiAgcmV0dXJuIHRvSlNIZWxwZXIoc291cmNlLCBuZXcgTWFwKCkpO1xufVxuXG5mdW5jdGlvbiB0cmFjZSgpIHtcbiAgaWYgKCEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkgZGllKFwidHJhY2UoKSBpcyBub3QgYXZhaWxhYmxlIGluIHByb2R1Y3Rpb24gYnVpbGRzXCIpO1xuICB2YXIgZW50ZXJCcmVha1BvaW50ID0gZmFsc2U7XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYXJnc1thcmdzLmxlbmd0aCAtIDFdID09PSBcImJvb2xlYW5cIikgZW50ZXJCcmVha1BvaW50ID0gYXJncy5wb3AoKTtcbiAgdmFyIGRlcml2YXRpb24gPSBnZXRBdG9tRnJvbUFyZ3MoYXJncyk7XG5cbiAgaWYgKCFkZXJpdmF0aW9uKSB7XG4gICAgcmV0dXJuIGRpZShcIid0cmFjZShicmVhaz8pJyBjYW4gb25seSBiZSB1c2VkIGluc2lkZSBhIHRyYWNrZWQgY29tcHV0ZWQgdmFsdWUgb3IgYSBSZWFjdGlvbi4gQ29uc2lkZXIgcGFzc2luZyBpbiB0aGUgY29tcHV0ZWQgdmFsdWUgb3IgcmVhY3Rpb24gZXhwbGljaXRseVwiKTtcbiAgfVxuXG4gIGlmIChkZXJpdmF0aW9uLmlzVHJhY2luZ18gPT09IFRyYWNlTW9kZS5OT05FKSB7XG4gICAgY29uc29sZS5sb2coXCJbbW9ieC50cmFjZV0gJ1wiICsgZGVyaXZhdGlvbi5uYW1lXyArIFwiJyB0cmFjaW5nIGVuYWJsZWRcIik7XG4gIH1cblxuICBkZXJpdmF0aW9uLmlzVHJhY2luZ18gPSBlbnRlckJyZWFrUG9pbnQgPyBUcmFjZU1vZGUuQlJFQUsgOiBUcmFjZU1vZGUuTE9HO1xufVxuXG5mdW5jdGlvbiBnZXRBdG9tRnJvbUFyZ3MoYXJncykge1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbjtcblxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBnZXRBdG9tKGFyZ3NbMF0pO1xuXG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIGdldEF0b20oYXJnc1swXSwgYXJnc1sxXSk7XG4gIH1cbn1cblxuLyoqXHJcbiAqIER1cmluZyBhIHRyYW5zYWN0aW9uIG5vIHZpZXdzIGFyZSB1cGRhdGVkIHVudGlsIHRoZSBlbmQgb2YgdGhlIHRyYW5zYWN0aW9uLlxyXG4gKiBUaGUgdHJhbnNhY3Rpb24gd2lsbCBiZSBydW4gc3luY2hyb25vdXNseSBub25ldGhlbGVzcy5cclxuICpcclxuICogQHBhcmFtIGFjdGlvbiBhIGZ1bmN0aW9uIHRoYXQgdXBkYXRlcyBzb21lIHJlYWN0aXZlIHN0YXRlXHJcbiAqIEByZXR1cm5zIGFueSB2YWx1ZSB0aGF0IHdhcyByZXR1cm5lZCBieSB0aGUgJ2FjdGlvbicgcGFyYW1ldGVyLlxyXG4gKi9cblxuZnVuY3Rpb24gdHJhbnNhY3Rpb24oYWN0aW9uLCB0aGlzQXJnKSB7XG4gIGlmICh0aGlzQXJnID09PSB2b2lkIDApIHtcbiAgICB0aGlzQXJnID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgc3RhcnRCYXRjaCgpO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIGFjdGlvbi5hcHBseSh0aGlzQXJnKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBlbmRCYXRjaCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHdoZW4ocHJlZGljYXRlLCBhcmcxLCBhcmcyKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxIHx8IGFyZzEgJiYgdHlwZW9mIGFyZzEgPT09IFwib2JqZWN0XCIpIHJldHVybiB3aGVuUHJvbWlzZShwcmVkaWNhdGUsIGFyZzEpO1xuICByZXR1cm4gX3doZW4ocHJlZGljYXRlLCBhcmcxLCBhcmcyIHx8IHt9KTtcbn1cblxuZnVuY3Rpb24gX3doZW4ocHJlZGljYXRlLCBlZmZlY3QsIG9wdHMpIHtcbiAgdmFyIHRpbWVvdXRIYW5kbGU7XG5cbiAgaWYgKHR5cGVvZiBvcHRzLnRpbWVvdXQgPT09IFwibnVtYmVyXCIpIHtcbiAgICB0aW1lb3V0SGFuZGxlID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWRpc3Bvc2VyWyRtb2J4XS5pc0Rpc3Bvc2VkXykge1xuICAgICAgICBkaXNwb3NlcigpO1xuICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoXCJXSEVOX1RJTUVPVVRcIik7XG4gICAgICAgIGlmIChvcHRzLm9uRXJyb3IpIG9wdHMub25FcnJvcihlcnJvcik7ZWxzZSB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9LCBvcHRzLnRpbWVvdXQpO1xuICB9XG5cbiAgb3B0cy5uYW1lID0gb3B0cy5uYW1lIHx8IFwiV2hlbkBcIiArIGdldE5leHRJZCgpO1xuICB2YXIgZWZmZWN0QWN0aW9uID0gY3JlYXRlQWN0aW9uKG9wdHMubmFtZSArIFwiLWVmZmVjdFwiLCBlZmZlY3QpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuICB2YXIgZGlzcG9zZXIgPSBhdXRvcnVuKGZ1bmN0aW9uIChyKSB7XG4gICAgLy8gcHJlZGljYXRlIHNob3VsZCBub3QgY2hhbmdlIHN0YXRlXG4gICAgdmFyIGNvbmQgPSBhbGxvd1N0YXRlQ2hhbmdlcyhmYWxzZSwgcHJlZGljYXRlKTtcblxuICAgIGlmIChjb25kKSB7XG4gICAgICByLmRpc3Bvc2UoKTtcbiAgICAgIGlmICh0aW1lb3V0SGFuZGxlKSBjbGVhclRpbWVvdXQodGltZW91dEhhbmRsZSk7XG4gICAgICBlZmZlY3RBY3Rpb24oKTtcbiAgICB9XG4gIH0sIG9wdHMpO1xuICByZXR1cm4gZGlzcG9zZXI7XG59XG5cbmZ1bmN0aW9uIHdoZW5Qcm9taXNlKHByZWRpY2F0ZSwgb3B0cykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG9wdHMgJiYgb3B0cy5vbkVycm9yKSByZXR1cm4gZGllKFwidGhlIG9wdGlvbnMgJ29uRXJyb3InIGFuZCAncHJvbWlzZScgY2Fubm90IGJlIGNvbWJpbmVkXCIpO1xuICB2YXIgY2FuY2VsO1xuICB2YXIgcmVzID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBkaXNwb3NlciA9IF93aGVuKHByZWRpY2F0ZSwgcmVzb2x2ZSwgX2V4dGVuZHMoe30sIG9wdHMsIHtcbiAgICAgIG9uRXJyb3I6IHJlamVjdFxuICAgIH0pKTtcblxuICAgIGNhbmNlbCA9IGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICAgIGRpc3Bvc2VyKCk7XG4gICAgICByZWplY3QoXCJXSEVOX0NBTkNFTExFRFwiKTtcbiAgICB9O1xuICB9KTtcbiAgcmVzLmNhbmNlbCA9IGNhbmNlbDtcbiAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gZ2V0QWRtKHRhcmdldCkge1xuICByZXR1cm4gdGFyZ2V0WyRtb2J4XTtcbn0gLy8gT3B0aW1pemF0aW9uOiB3ZSBkb24ndCBuZWVkIHRoZSBpbnRlcm1lZGlhdGUgb2JqZWN0cyBhbmQgY291bGQgaGF2ZSBhIGNvbXBsZXRlbHkgY3VzdG9tIGFkbWluaXN0cmF0aW9uIGZvciBEeW5hbWljT2JqZWN0cyxcbi8vIGFuZCBza2lwIGVpdGhlciB0aGUgaW50ZXJuYWwgdmFsdWVzIG1hcCwgb3IgdGhlIGJhc2Ugb2JqZWN0IHdpdGggaXRzIHByb3BlcnR5IGRlc2NyaXB0b3JzIVxuXG5cbnZhciBvYmplY3RQcm94eVRyYXBzID0ge1xuICBoYXM6IGZ1bmN0aW9uIGhhcyh0YXJnZXQsIG5hbWUpIHtcbiAgICBpZiAobmFtZSA9PT0gJG1vYnggfHwgbmFtZSA9PT0gXCJjb25zdHJ1Y3RvclwiKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbikgd2FybkFib3V0UHJveHlSZXF1aXJlbWVudChcImRldGVjdCBuZXcgcHJvcGVydGllcyB1c2luZyB0aGUgJ2luJyBvcGVyYXRvci4gVXNlICdoYXMnIGZyb20gJ21vYngnIGluc3RlYWQuXCIpO1xuICAgIHZhciBhZG0gPSBnZXRBZG0odGFyZ2V0KTsgLy8gTVdFOiBzaG91bGQgYGluYCBvcGVyYXRvciBiZSByZWFjdGl2ZT8gSWYgbm90LCBiZWxvdyBjb2RlIHBhdGggd2lsbCBiZSBmYXN0ZXIgLyBtb3JlIG1lbW9yeSBlZmZpY2llbnRcbiAgICAvLyBjaGVjayBwZXJmb3JtYW5jZSBzdGF0cyFcbiAgICAvLyBpZiAoYWRtLnZhbHVlcy5nZXQobmFtZSBhcyBzdHJpbmcpKSByZXR1cm4gdHJ1ZVxuXG4gICAgaWYgKGlzU3RyaW5naXNoKG5hbWUpKSByZXR1cm4gYWRtLmhhc18obmFtZSk7XG4gICAgcmV0dXJuIG5hbWUgaW4gdGFyZ2V0O1xuICB9LFxuICBnZXQ6IGZ1bmN0aW9uIGdldCh0YXJnZXQsIG5hbWUpIHtcbiAgICBpZiAobmFtZSA9PT0gJG1vYnggfHwgbmFtZSA9PT0gXCJjb25zdHJ1Y3RvclwiKSByZXR1cm4gdGFyZ2V0W25hbWVdO1xuICAgIHZhciBhZG0gPSBnZXRBZG0odGFyZ2V0KTtcbiAgICB2YXIgb2JzZXJ2YWJsZSA9IGFkbS52YWx1ZXNfLmdldChuYW1lKTtcblxuICAgIGlmIChvYnNlcnZhYmxlIGluc3RhbmNlb2YgQXRvbSkge1xuICAgICAgdmFyIHJlc3VsdCA9IG9ic2VydmFibGUuZ2V0KCk7XG5cbiAgICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBUaGlzIGZpeGVzICMxNzk2LCBiZWNhdXNlIGRlbGV0aW5nIGEgcHJvcCB0aGF0IGhhcyBhblxuICAgICAgICAvLyB1bmRlZmluZWQgdmFsdWUgd29uJ3QgcmV0cmlnZ2VyIGEgb2JzZXJ2ZXIgKG5vIHZpc2libGUgZWZmZWN0KSxcbiAgICAgICAgLy8gdGhlIGF1dG9ydW4gd291bGRuJ3Qgc3Vic2NyaWJlIHRvIGZ1dHVyZSBrZXkgY2hhbmdlcyAoc2VlIGFsc28gbmV4dCBjb21tZW50KVxuICAgICAgICBhZG0uaGFzXyhuYW1lKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IC8vIG1ha2Ugc3VyZSB3ZSBzdGFydCBsaXN0ZW5pbmcgdG8gZnV0dXJlIGtleXNcbiAgICAvLyBub3RlIHRoYXQgd2Ugb25seSBkbyB0aGlzIGhlcmUgZm9yIG9wdGltaXphdGlvblxuXG5cbiAgICBpZiAoaXNTdHJpbmdpc2gobmFtZSkpIGFkbS5oYXNfKG5hbWUpO1xuICAgIHJldHVybiB0YXJnZXRbbmFtZV07XG4gIH0sXG4gIHNldDogZnVuY3Rpb24gc2V0JDEodGFyZ2V0LCBuYW1lLCB2YWx1ZSkge1xuICAgIGlmICghaXNTdHJpbmdpc2gobmFtZSkpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIWdldEFkbSh0YXJnZXQpLnZhbHVlc18uaGFzKG5hbWUpKSB7XG4gICAgICB3YXJuQWJvdXRQcm94eVJlcXVpcmVtZW50KFwiYWRkIGEgbmV3IG9ic2VydmFibGUgcHJvcGVydHkgdGhyb3VnaCBkaXJlY3QgYXNzaWdubWVudC4gVXNlICdzZXQnIGZyb20gJ21vYngnIGluc3RlYWQuXCIpO1xuICAgIH1cblxuICAgIHNldCh0YXJnZXQsIG5hbWUsIHZhbHVlKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBkZWxldGVQcm9wZXJ0eTogZnVuY3Rpb24gZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBuYW1lKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgd2FybkFib3V0UHJveHlSZXF1aXJlbWVudChcImRlbGV0ZSBwcm9wZXJ0aWVzIGZyb20gYW4gb2JzZXJ2YWJsZSBvYmplY3QuIFVzZSAncmVtb3ZlJyBmcm9tICdtb2J4JyBpbnN0ZWFkLlwiKTtcbiAgICBpZiAoIWlzU3RyaW5naXNoKG5hbWUpKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIGFkbSA9IGdldEFkbSh0YXJnZXQpO1xuICAgIGFkbS5yZW1vdmVfKG5hbWUpO1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBvd25LZXlzOiBmdW5jdGlvbiBvd25LZXlzKHRhcmdldCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uKSB3YXJuQWJvdXRQcm94eVJlcXVpcmVtZW50KFwiaXRlcmF0ZSBrZXlzIHRvIGRldGVjdCBhZGRlZCAvIHJlbW92ZWQgcHJvcGVydGllcy4gVXNlIGBrZXlzYCBmcm9tICdtb2J4JyBpbnN0ZWFkLlwiKTtcbiAgICB2YXIgYWRtID0gZ2V0QWRtKHRhcmdldCk7XG4gICAgYWRtLmtleXNBdG9tXy5yZXBvcnRPYnNlcnZlZCgpO1xuICAgIHJldHVybiBSZWZsZWN0Lm93bktleXModGFyZ2V0KTtcbiAgfSxcbiAgcHJldmVudEV4dGVuc2lvbnM6IGZ1bmN0aW9uIHByZXZlbnRFeHRlbnNpb25zKHRhcmdldCkge1xuICAgIGRpZSgxMyk7XG4gIH1cbn07XG5mdW5jdGlvbiBjcmVhdGVEeW5hbWljT2JzZXJ2YWJsZU9iamVjdChiYXNlKSB7XG4gIGFzc2VydFByb3hpZXMoKTtcbiAgdmFyIHByb3h5ID0gbmV3IFByb3h5KGJhc2UsIG9iamVjdFByb3h5VHJhcHMpO1xuICBiYXNlWyRtb2J4XS5wcm94eV8gPSBwcm94eTtcbiAgcmV0dXJuIHByb3h5O1xufVxuXG5mdW5jdGlvbiBoYXNJbnRlcmNlcHRvcnMoaW50ZXJjZXB0YWJsZSkge1xuICByZXR1cm4gaW50ZXJjZXB0YWJsZS5pbnRlcmNlcHRvcnNfICE9PSB1bmRlZmluZWQgJiYgaW50ZXJjZXB0YWJsZS5pbnRlcmNlcHRvcnNfLmxlbmd0aCA+IDA7XG59XG5mdW5jdGlvbiByZWdpc3RlckludGVyY2VwdG9yKGludGVyY2VwdGFibGUsIGhhbmRsZXIpIHtcbiAgdmFyIGludGVyY2VwdG9ycyA9IGludGVyY2VwdGFibGUuaW50ZXJjZXB0b3JzXyB8fCAoaW50ZXJjZXB0YWJsZS5pbnRlcmNlcHRvcnNfID0gW10pO1xuICBpbnRlcmNlcHRvcnMucHVzaChoYW5kbGVyKTtcbiAgcmV0dXJuIG9uY2UoZnVuY3Rpb24gKCkge1xuICAgIHZhciBpZHggPSBpbnRlcmNlcHRvcnMuaW5kZXhPZihoYW5kbGVyKTtcbiAgICBpZiAoaWR4ICE9PSAtMSkgaW50ZXJjZXB0b3JzLnNwbGljZShpZHgsIDEpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGludGVyY2VwdENoYW5nZShpbnRlcmNlcHRhYmxlLCBjaGFuZ2UpIHtcbiAgdmFyIHByZXZVID0gdW50cmFja2VkU3RhcnQoKTtcblxuICB0cnkge1xuICAgIC8vIEludGVyY2VwdG9yIGNhbiBtb2RpZnkgdGhlIGFycmF5LCBjb3B5IGl0IHRvIGF2b2lkIGNvbmN1cnJlbnQgbW9kaWZpY2F0aW9uLCBzZWUgIzE5NTBcbiAgICB2YXIgaW50ZXJjZXB0b3JzID0gW10uY29uY2F0KGludGVyY2VwdGFibGUuaW50ZXJjZXB0b3JzXyB8fCBbXSk7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGludGVyY2VwdG9ycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNoYW5nZSA9IGludGVyY2VwdG9yc1tpXShjaGFuZ2UpO1xuICAgICAgaWYgKGNoYW5nZSAmJiAhY2hhbmdlLnR5cGUpIGRpZSgxNCk7XG4gICAgICBpZiAoIWNoYW5nZSkgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoYW5nZTtcbiAgfSBmaW5hbGx5IHtcbiAgICB1bnRyYWNrZWRFbmQocHJldlUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhc0xpc3RlbmVycyhsaXN0ZW5hYmxlKSB7XG4gIHJldHVybiBsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVyc18gIT09IHVuZGVmaW5lZCAmJiBsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVyc18ubGVuZ3RoID4gMDtcbn1cbmZ1bmN0aW9uIHJlZ2lzdGVyTGlzdGVuZXIobGlzdGVuYWJsZSwgaGFuZGxlcikge1xuICB2YXIgbGlzdGVuZXJzID0gbGlzdGVuYWJsZS5jaGFuZ2VMaXN0ZW5lcnNfIHx8IChsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVyc18gPSBbXSk7XG4gIGxpc3RlbmVycy5wdXNoKGhhbmRsZXIpO1xuICByZXR1cm4gb25jZShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlkeCA9IGxpc3RlbmVycy5pbmRleE9mKGhhbmRsZXIpO1xuICAgIGlmIChpZHggIT09IC0xKSBsaXN0ZW5lcnMuc3BsaWNlKGlkeCwgMSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gbm90aWZ5TGlzdGVuZXJzKGxpc3RlbmFibGUsIGNoYW5nZSkge1xuICB2YXIgcHJldlUgPSB1bnRyYWNrZWRTdGFydCgpO1xuICB2YXIgbGlzdGVuZXJzID0gbGlzdGVuYWJsZS5jaGFuZ2VMaXN0ZW5lcnNfO1xuICBpZiAoIWxpc3RlbmVycykgcmV0dXJuO1xuICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuc2xpY2UoKTtcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsaXN0ZW5lcnNbaV0oY2hhbmdlKTtcbiAgfVxuXG4gIHVudHJhY2tlZEVuZChwcmV2VSk7XG59XG5cbnZhciBDQUNIRURfQU5OT1RBVElPTlMgPSAvKiNfX1BVUkVfXyovU3ltYm9sKFwibW9ieC1jYWNoZWQtYW5ub3RhdGlvbnNcIik7XG5cbmZ1bmN0aW9uIG1ha2VBY3Rpb24odGFyZ2V0LCBrZXksIG5hbWUsIGZuLCBhc0F1dG9BY3Rpb24pIHtcbiAgYWRkSGlkZGVuUHJvcCh0YXJnZXQsIGtleSwgYXNBdXRvQWN0aW9uID8gYXV0b0FjdGlvbihuYW1lIHx8IGtleSwgZm4pIDogYWN0aW9uKG5hbWUgfHwga2V5LCBmbikpO1xufVxuXG5mdW5jdGlvbiBnZXRJbmZlcnJlZEFubm90YXRpb24oZGVzYywgZGVmYXVsdEFubm90YXRpb24sIGF1dG9CaW5kKSB7XG4gIGlmIChkZXNjLmdldCkgcmV0dXJuIGNvbXB1dGVkO1xuICBpZiAoZGVzYy5zZXQpIHJldHVybiBmYWxzZTsgLy8gaWdub3JlIHB1cmUgc2V0dGVyc1xuICAvLyBpZiBhbHJlYWR5IHdyYXBwZWQgaW4gYWN0aW9uLCBkb24ndCBkbyB0aGF0IGFub3RoZXIgdGltZSwgYnV0IGFzc3VtZSBpdCBpcyBhbHJlYWR5IHNldCB1cCBwcm9wZXJseVxuXG4gIGlmIChpc0Z1bmN0aW9uKGRlc2MudmFsdWUpKSByZXR1cm4gaXNHZW5lcmF0b3IoZGVzYy52YWx1ZSkgPyBmbG93IDogaXNBY3Rpb24oZGVzYy52YWx1ZSkgPyBmYWxzZSA6IGF1dG9CaW5kID8gYXV0b0FjdGlvbi5ib3VuZCA6IGF1dG9BY3Rpb247IC8vIGlmICghZGVzYy5jb25maWd1cmFibGUgfHwgIWRlc2Mud3JpdGFibGUpIHJldHVybiBmYWxzZVxuXG4gIHJldHVybiBkZWZhdWx0QW5ub3RhdGlvbiAhPSBudWxsID8gZGVmYXVsdEFubm90YXRpb24gOiBvYnNlcnZhYmxlLmRlZXA7XG59XG5cbmZ1bmN0aW9uIGdldERlc2NyaXB0b3JJbkNoYWluKHRhcmdldCwgcHJvcCkge1xuICB2YXIgY3VycmVudCA9IHRhcmdldDtcblxuICB3aGlsZSAoY3VycmVudCAmJiBjdXJyZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAvLyBPcHRpbWl6YXRpb246IGNhY2hlIG1ldGEgZGF0YSwgZXNwZWNpYWxseSBmb3IgbWVtYmVycyBmcm9tIHByb3RvdHlwZXM/XG4gICAgdmFyIGRlc2MgPSBnZXREZXNjcmlwdG9yKGN1cnJlbnQsIHByb3ApO1xuXG4gICAgaWYgKGRlc2MpIHtcbiAgICAgIHJldHVybiBbZGVzYywgY3VycmVudF07XG4gICAgfVxuXG4gICAgY3VycmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihjdXJyZW50KTtcbiAgfVxuXG4gIGRpZSgxLCBwcm9wKTtcbn1cblxuZnVuY3Rpb24gbWFrZVByb3BlcnR5KGFkbSwgb3duZXIsIGtleSwgZGVzY3JpcHRvciwgYW5ub3RhdGlvbiwgZm9yY2VDb3B5LCAvLyBleHRlbmQgb2JzZXJ2YWJsZSB3aWxsIGNvcHkgZXZlbiB1bmFubm90YXRlZCBwcm9wZXJ0aWVzXG5hdXRvQmluZCkge1xuICB2YXIgX2Fubm90YXRpb24kYW5ub3RhdGlvO1xuXG4gIHZhciB0YXJnZXQgPSBhZG0udGFyZ2V0XztcbiAgdmFyIGRlZmF1bHRBbm5vdGF0aW9uID0gb2JzZXJ2YWJsZTsgLy8gaWRlYWxseSBncmFwIHRoaXMgZnJvbSBhZG0ncyBkZWZhdWx0RW5haG5jZXIgaW5zdGVhZCFcblxuICB2YXIgb3JpZ2luQW5ub3RhdGlvbiA9IGFubm90YXRpb247XG5cbiAgaWYgKGFubm90YXRpb24gPT09IHRydWUpIHtcbiAgICBhbm5vdGF0aW9uID0gZ2V0SW5mZXJyZWRBbm5vdGF0aW9uKGRlc2NyaXB0b3IsIGRlZmF1bHRBbm5vdGF0aW9uLCBhdXRvQmluZCk7XG4gIH1cblxuICBpZiAoYW5ub3RhdGlvbiA9PT0gZmFsc2UpIHtcbiAgICBpZiAoZm9yY2VDb3B5KSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFhbm5vdGF0aW9uIHx8IGFubm90YXRpb24gPT09IHRydWUgfHwgIWFubm90YXRpb24uYW5ub3RhdGlvblR5cGVfKSB7XG4gICAgcmV0dXJuIGRpZSgyLCBrZXkpO1xuICB9XG5cbiAgdmFyIHR5cGUgPSBhbm5vdGF0aW9uLmFubm90YXRpb25UeXBlXztcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEFVVE9BQ1RJT046XG4gICAgY2FzZSBBQ1RJT046XG4gICAgICB7XG4gICAgICAgIHZhciBmbiA9IGRlc2NyaXB0b3IudmFsdWU7XG4gICAgICAgIGlmICghaXNGdW5jdGlvbihmbikpIGRpZSgzLCBrZXkpO1xuXG4gICAgICAgIGlmIChvd25lciAhPT0gdGFyZ2V0ICYmICFmb3JjZUNvcHkpIHtcbiAgICAgICAgICBpZiAoIWlzQWN0aW9uKG93bmVyW2tleV0pKSBtYWtlQWN0aW9uKG93bmVyLCBrZXksIGFubm90YXRpb24uYXJnXywgZm4sIHR5cGUgPT09IEFVVE9BQ1RJT04pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1ha2VBY3Rpb24odGFyZ2V0LCBrZXksIGFubm90YXRpb24uYXJnXywgZm4sIHR5cGUgPT09IEFVVE9BQ1RJT04pO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICBjYXNlIEFVVE9BQ1RJT05fQk9VTkQ6XG4gICAgY2FzZSBBQ1RJT05fQk9VTkQ6XG4gICAgICB7XG4gICAgICAgIHZhciBfZm4gPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgICAgICBpZiAoIWlzRnVuY3Rpb24oX2ZuKSkgZGllKDMsIGtleSk7XG4gICAgICAgIG1ha2VBY3Rpb24odGFyZ2V0LCBrZXksIGFubm90YXRpb24uYXJnXywgX2ZuLmJpbmQoYWRtLnByb3h5XyB8fCB0YXJnZXQpLCB0eXBlID09PSBBVVRPQUNUSU9OX0JPVU5EKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICBjYXNlIEZMT1c6XG4gICAgICB7XG4gICAgICAgIGlmIChvd25lciAhPT0gdGFyZ2V0ICYmICFmb3JjZUNvcHkpIHtcbiAgICAgICAgICBpZiAoIWlzRmxvdyhvd25lcltrZXldKSkgYWRkSGlkZGVuUHJvcChvd25lciwga2V5LCBmbG93KGRlc2NyaXB0b3IudmFsdWUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGRIaWRkZW5Qcm9wKHRhcmdldCwga2V5LCBmbG93KGRlc2NyaXB0b3IudmFsdWUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgY2FzZSBDT01QVVRFRDpcbiAgICBjYXNlIENPTVBVVEVEX1NUUlVDVDpcbiAgICAgIHtcbiAgICAgICAgaWYgKCFkZXNjcmlwdG9yLmdldCkgZGllKDQsIGtleSk7XG4gICAgICAgIGFkbS5hZGRDb21wdXRlZFByb3BfKHRhcmdldCwga2V5LCBfZXh0ZW5kcyh7XG4gICAgICAgICAgZ2V0OiBkZXNjcmlwdG9yLmdldCxcbiAgICAgICAgICBzZXQ6IGRlc2NyaXB0b3Iuc2V0LFxuICAgICAgICAgIGNvbXBhcmVTdHJ1Y3R1cmFsOiBhbm5vdGF0aW9uLmFubm90YXRpb25UeXBlXyA9PT0gQ09NUFVURURfU1RSVUNUXG4gICAgICAgIH0sIGFubm90YXRpb24uYXJnXykpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIGNhc2UgT0JTRVJWQUJMRTpcbiAgICBjYXNlIE9CU0VSVkFCTEVfUkVGOlxuICAgIGNhc2UgT0JTRVJWQUJMRV9TSEFMTE9XOlxuICAgIGNhc2UgT0JTRVJWQUJMRV9TVFJVQ1Q6XG4gICAgICB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgaXNPYnNlcnZhYmxlUHJvcCh0YXJnZXQsIGtleSkpIGRpZShcIkNhbm5vdCBkZWNvcmF0ZSAnXCIgKyBrZXkudG9TdHJpbmcoKSArIFwiJzogdGhlIHByb3BlcnR5IGlzIGFscmVhZHkgZGVjb3JhdGVkIGFzIG9ic2VydmFibGUuXCIpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICEoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpKSBkaWUoXCJDYW5ub3QgZGVjb3JhdGUgJ1wiICsga2V5LnRvU3RyaW5nKCkgKyBcIic6IG9ic2VydmFibGUgY2Fubm90IGJlIHVzZWQgb24gc2V0dGVyIC8gZ2V0dGVyIHByb3BlcnRpZXMuXCIpOyAvLyBpZiB0aGUgb3JpZ2luQW5ub3RhdGlvbiB3YXMgdHJ1ZSwgcHJlZmVycmVkIHRoZSBhZG0ncyBkZWZhdWx0IGVuaGFuY2VyIG92ZXIgdGhlIGluZmVycmVkIG9uZVxuXG4gICAgICAgIHZhciBlbmhhbmNlciA9IG9yaWdpbkFubm90YXRpb24gPT09IHRydWUgPyBhZG0uZGVmYXVsdEVuaGFuY2VyXyA6IGdldEVuaGFuY2VyRnJvbUFubm90YXRpb24oYW5ub3RhdGlvbik7XG4gICAgICAgIGFkbS5hZGRPYnNlcnZhYmxlUHJvcF8oa2V5LCBkZXNjcmlwdG9yLnZhbHVlLCBlbmhhbmNlcik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGRpZShcImludmFsaWQgZGVjb3JhdG9yICdcIiArICgoX2Fubm90YXRpb24kYW5ub3RhdGlvID0gYW5ub3RhdGlvbi5hbm5vdGF0aW9uVHlwZV8pICE9IG51bGwgPyBfYW5ub3RhdGlvbiRhbm5vdGF0aW8gOiBhbm5vdGF0aW9uKSArIFwiJyBmb3IgJ1wiICsga2V5LnRvU3RyaW5nKCkgKyBcIidcIik7XG4gIH1cbn1cbmZ1bmN0aW9uIG1ha2VPYnNlcnZhYmxlKHRhcmdldCwgYW5ub3RhdGlvbnMsIG9wdGlvbnMpIHtcbiAgdmFyIGF1dG9CaW5kID0gISEob3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5hdXRvQmluZCk7XG4gIHZhciBhZG0gPSBhc09ic2VydmFibGVPYmplY3QodGFyZ2V0LCBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLm5hbWUsIGdldEVuaGFuY2VyRnJvbUFubm90YXRpb24ob3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5kZWZhdWx0RGVjb3JhdG9yKSk7XG4gIHN0YXJ0QmF0Y2goKTtcblxuICB0cnkge1xuICAgIGlmICghYW5ub3RhdGlvbnMpIHtcbiAgICAgIHZhciBkaWREZWNvcmF0ZSA9IGFwcGx5RGVjb3JhdG9ycyh0YXJnZXQpO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhZGlkRGVjb3JhdGUpIGRpZShcIk5vIGFubm90YXRpb25zIHdlcmUgcGFzc2VkIHRvIG1ha2VPYnNlcnZhYmxlLCBidXQgbm8gZGVjb3JhdG9yIG1lbWJlcnMgaGF2ZSBiZWVuIGZvdW5kIGVpdGhlclwiKTtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgdmFyIG1ha2UgPSBmdW5jdGlvbiBtYWtlKGtleSkge1xuICAgICAgdmFyIGFubm90YXRpb24gPSBhbm5vdGF0aW9uc1trZXldO1xuXG4gICAgICB2YXIgX2dldERlc2NyaXB0b3JJbkNoYWluID0gZ2V0RGVzY3JpcHRvckluQ2hhaW4odGFyZ2V0LCBrZXkpLFxuICAgICAgICAgIGRlc2MgPSBfZ2V0RGVzY3JpcHRvckluQ2hhaW5bMF0sXG4gICAgICAgICAgb3duZXIgPSBfZ2V0RGVzY3JpcHRvckluQ2hhaW5bMV07XG5cbiAgICAgIG1ha2VQcm9wZXJ0eShhZG0sIG93bmVyLCBrZXksIGRlc2MsIGFubm90YXRpb24sIGZhbHNlLCBhdXRvQmluZCk7XG4gICAgfTtcblxuICAgIG93bktleXMoYW5ub3RhdGlvbnMpLmZvckVhY2gobWFrZSk7XG4gIH0gZmluYWxseSB7XG4gICAgZW5kQmF0Y2goKTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBtYWtlQXV0b09ic2VydmFibGUodGFyZ2V0LCBvdmVycmlkZXMsIG9wdGlvbnMpIHtcbiAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldCk7XG4gIHZhciBpc1BsYWluID0gcHJvdG8gPT0gbnVsbCB8fCBwcm90byA9PT0gb2JqZWN0UHJvdG90eXBlO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAoIWlzUGxhaW4gJiYgIWlzUGxhaW5PYmplY3QocHJvdG8pKSBkaWUoXCInbWFrZUF1dG9PYnNlcnZhYmxlJyBjYW4gb25seSBiZSB1c2VkIGZvciBjbGFzc2VzIHRoYXQgZG9uJ3QgaGF2ZSBhIHN1cGVyY2xhc3NcIik7XG4gICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCh0YXJnZXQpKSBkaWUoXCJtYWtlQXV0b09ic2VydmFibGUgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYmplY3RzIG5vdCBhbHJlYWR5IG1hZGUgb2JzZXJ2YWJsZVwiKTtcbiAgfVxuXG4gIHZhciBhbm5vdGF0aW9ucztcblxuICBpZiAoIWlzUGxhaW4gJiYgaGFzUHJvcChwcm90bywgQ0FDSEVEX0FOTk9UQVRJT05TKSkge1xuICAgIC8vIHNob3J0Y3V0LCByZXVzZSBpbmZlcnJlZCBhbm5vdGF0aW9ucyBmb3IgdGhpcyB0eXBlIGZyb20gdGhlIHByZXZpb3VzIHRpbWVcbiAgICBhbm5vdGF0aW9ucyA9IHByb3RvW0NBQ0hFRF9BTk5PVEFUSU9OU107XG4gIH0gZWxzZSB7XG4gICAgYW5ub3RhdGlvbnMgPSBfZXh0ZW5kcyh7fSwgb3ZlcnJpZGVzKTtcbiAgICBleHRyYWN0QW5ub3RhdGlvbnNGcm9tT2JqZWN0KHRhcmdldCwgYW5ub3RhdGlvbnMsIG9wdGlvbnMpO1xuXG4gICAgaWYgKCFpc1BsYWluKSB7XG4gICAgICBleHRyYWN0QW5ub3RhdGlvbnNGcm9tUHJvdG8ocHJvdG8sIGFubm90YXRpb25zLCBvcHRpb25zKTtcbiAgICAgIGFkZEhpZGRlblByb3AocHJvdG8sIENBQ0hFRF9BTk5PVEFUSU9OUywgYW5ub3RhdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIG1ha2VPYnNlcnZhYmxlKHRhcmdldCwgYW5ub3RhdGlvbnMsIG9wdGlvbnMpO1xuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBleHRyYWN0QW5ub3RhdGlvbnNGcm9tT2JqZWN0KHRhcmdldCwgY29sbGVjdG9yLCBvcHRpb25zKSB7XG4gIHZhciBfb3B0aW9ucyRkZWZhdWx0RGVjb3I7XG5cbiAgdmFyIGF1dG9CaW5kID0gISEob3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5hdXRvQmluZCk7XG4gIHZhciBkZWZhdWx0QW5ub3RhdGlvbiA9IChvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLmRlZXApID09PSB1bmRlZmluZWQgPyAoX29wdGlvbnMkZGVmYXVsdERlY29yID0gb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5kZWZhdWx0RGVjb3JhdG9yKSAhPSBudWxsID8gX29wdGlvbnMkZGVmYXVsdERlY29yIDogb2JzZXJ2YWJsZS5kZWVwIDogKG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuZGVlcCkgPyBvYnNlcnZhYmxlLmRlZXAgOiBvYnNlcnZhYmxlLnJlZjtcbiAgT2JqZWN0LmVudHJpZXMoZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh0YXJnZXQpKS5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGtleSA9IF9yZWZbMF0sXG4gICAgICAgIGRlc2NyaXB0b3IgPSBfcmVmWzFdO1xuICAgIGlmIChrZXkgaW4gY29sbGVjdG9yIHx8IGtleSA9PT0gXCJjb25zdHJ1Y3RvclwiKSByZXR1cm47XG4gICAgY29sbGVjdG9yW2tleV0gPSBnZXRJbmZlcnJlZEFubm90YXRpb24oZGVzY3JpcHRvciwgZGVmYXVsdEFubm90YXRpb24sIGF1dG9CaW5kKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RBbm5vdGF0aW9uc0Zyb21Qcm90byhwcm90bywgY29sbGVjdG9yLCBvcHRpb25zKSB7XG4gIE9iamVjdC5lbnRyaWVzKGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMocHJvdG8pKS5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmMikge1xuICAgIHZhciBrZXkgPSBfcmVmMlswXSxcbiAgICAgICAgcHJvcCA9IF9yZWYyWzFdO1xuICAgIGlmIChrZXkgaW4gY29sbGVjdG9yIHx8IGtleSA9PT0gXCJjb25zdHJ1Y3RvclwiKSByZXR1cm47XG5cbiAgICBpZiAocHJvcC5nZXQpIHtcbiAgICAgIGNvbGxlY3RvcltrZXldID0gY29tcHV0ZWQ7XG4gICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHByb3AudmFsdWUpKSB7XG4gICAgICBjb2xsZWN0b3Jba2V5XSA9IGlzR2VuZXJhdG9yKHByb3AudmFsdWUpID8gZmxvdyA6IChvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLmF1dG9CaW5kKSA/IGF1dG9BY3Rpb24uYm91bmQgOiBhdXRvQWN0aW9uO1xuICAgIH1cbiAgfSk7XG59XG5cbnZhciBTUExJQ0UgPSBcInNwbGljZVwiO1xudmFyIFVQREFURSA9IFwidXBkYXRlXCI7XG52YXIgTUFYX1NQTElDRV9TSVpFID0gMTAwMDA7IC8vIFNlZSBlLmcuIGh0dHBzOi8vZ2l0aHViLmNvbS9tb2J4anMvbW9ieC9pc3N1ZXMvODU5XG5cbnZhciBhcnJheVRyYXBzID0ge1xuICBnZXQ6IGZ1bmN0aW9uIGdldCh0YXJnZXQsIG5hbWUpIHtcbiAgICB2YXIgYWRtID0gdGFyZ2V0WyRtb2J4XTtcbiAgICBpZiAobmFtZSA9PT0gJG1vYngpIHJldHVybiBhZG07XG4gICAgaWYgKG5hbWUgPT09IFwibGVuZ3RoXCIpIHJldHVybiBhZG0uZ2V0QXJyYXlMZW5ndGhfKCk7XG5cbiAgICBpZiAodHlwZW9mIG5hbWUgPT09IFwic3RyaW5nXCIgJiYgIWlzTmFOKG5hbWUpKSB7XG4gICAgICByZXR1cm4gYWRtLmdldF8ocGFyc2VJbnQobmFtZSkpO1xuICAgIH1cblxuICAgIGlmIChoYXNQcm9wKGFycmF5RXh0ZW5zaW9ucywgbmFtZSkpIHtcbiAgICAgIHJldHVybiBhcnJheUV4dGVuc2lvbnNbbmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFtuYW1lXTtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiBzZXQodGFyZ2V0LCBuYW1lLCB2YWx1ZSkge1xuICAgIHZhciBhZG0gPSB0YXJnZXRbJG1vYnhdO1xuXG4gICAgaWYgKG5hbWUgPT09IFwibGVuZ3RoXCIpIHtcbiAgICAgIGFkbS5zZXRBcnJheUxlbmd0aF8odmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzeW1ib2xcIiB8fCBpc05hTihuYW1lKSkge1xuICAgICAgdGFyZ2V0W25hbWVdID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG51bWVyaWMgc3RyaW5nXG4gICAgICBhZG0uc2V0XyhwYXJzZUludChuYW1lKSwgdmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBwcmV2ZW50RXh0ZW5zaW9uczogZnVuY3Rpb24gcHJldmVudEV4dGVuc2lvbnMoKSB7XG4gICAgZGllKDE1KTtcbiAgfVxufTtcbnZhciBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8vIHRoaXMgaXMgdGhlIHByb3AgdGhhdCBnZXRzIHByb3hpZWQsIHNvIGNhbid0IHJlcGxhY2UgaXQhXG4gIGZ1bmN0aW9uIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uKG5hbWUsIGVuaGFuY2VyLCBvd25lZF8sIGxlZ2FjeU1vZGVfKSB7XG4gICAgdGhpcy5vd25lZF8gPSB2b2lkIDA7XG4gICAgdGhpcy5sZWdhY3lNb2RlXyA9IHZvaWQgMDtcbiAgICB0aGlzLmF0b21fID0gdm9pZCAwO1xuICAgIHRoaXMudmFsdWVzXyA9IFtdO1xuICAgIHRoaXMuaW50ZXJjZXB0b3JzXyA9IHZvaWQgMDtcbiAgICB0aGlzLmNoYW5nZUxpc3RlbmVyc18gPSB2b2lkIDA7XG4gICAgdGhpcy5lbmhhbmNlcl8gPSB2b2lkIDA7XG4gICAgdGhpcy5kZWhhbmNlciA9IHZvaWQgMDtcbiAgICB0aGlzLnByb3h5XyA9IHZvaWQgMDtcbiAgICB0aGlzLmxhc3RLbm93bkxlbmd0aF8gPSAwO1xuICAgIHRoaXMub3duZWRfID0gb3duZWRfO1xuICAgIHRoaXMubGVnYWN5TW9kZV8gPSBsZWdhY3lNb2RlXztcbiAgICB0aGlzLmF0b21fID0gbmV3IEF0b20obmFtZSB8fCBcIk9ic2VydmFibGVBcnJheUBcIiArIGdldE5leHRJZCgpKTtcblxuICAgIHRoaXMuZW5oYW5jZXJfID0gZnVuY3Rpb24gKG5ld1YsIG9sZFYpIHtcbiAgICAgIHJldHVybiBlbmhhbmNlcihuZXdWLCBvbGRWLCBuYW1lICsgXCJbLi5dXCIpO1xuICAgIH07XG4gIH1cblxuICB2YXIgX3Byb3RvID0gT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5kZWhhbmNlVmFsdWVfID0gZnVuY3Rpb24gZGVoYW5jZVZhbHVlXyh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmRlaGFuY2VyICE9PSB1bmRlZmluZWQpIHJldHVybiB0aGlzLmRlaGFuY2VyKHZhbHVlKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgX3Byb3RvLmRlaGFuY2VWYWx1ZXNfID0gZnVuY3Rpb24gZGVoYW5jZVZhbHVlc18odmFsdWVzKSB7XG4gICAgaWYgKHRoaXMuZGVoYW5jZXIgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZXMubGVuZ3RoID4gMCkgcmV0dXJuIHZhbHVlcy5tYXAodGhpcy5kZWhhbmNlcik7XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfTtcblxuICBfcHJvdG8uaW50ZXJjZXB0XyA9IGZ1bmN0aW9uIGludGVyY2VwdF8oaGFuZGxlcikge1xuICAgIHJldHVybiByZWdpc3RlckludGVyY2VwdG9yKHRoaXMsIGhhbmRsZXIpO1xuICB9O1xuXG4gIF9wcm90by5vYnNlcnZlXyA9IGZ1bmN0aW9uIG9ic2VydmVfKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICBpZiAoZmlyZUltbWVkaWF0ZWx5ID09PSB2b2lkIDApIHtcbiAgICAgIGZpcmVJbW1lZGlhdGVseSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICAgIGxpc3RlbmVyKHtcbiAgICAgICAgb2JzZXJ2YWJsZUtpbmQ6IFwiYXJyYXlcIixcbiAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5XyxcbiAgICAgICAgZGVidWdPYmplY3ROYW1lOiB0aGlzLmF0b21fLm5hbWVfLFxuICAgICAgICB0eXBlOiBcInNwbGljZVwiLFxuICAgICAgICBpbmRleDogMCxcbiAgICAgICAgYWRkZWQ6IHRoaXMudmFsdWVzXy5zbGljZSgpLFxuICAgICAgICBhZGRlZENvdW50OiB0aGlzLnZhbHVlc18ubGVuZ3RoLFxuICAgICAgICByZW1vdmVkOiBbXSxcbiAgICAgICAgcmVtb3ZlZENvdW50OiAwXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVnaXN0ZXJMaXN0ZW5lcih0aGlzLCBsaXN0ZW5lcik7XG4gIH07XG5cbiAgX3Byb3RvLmdldEFycmF5TGVuZ3RoXyA9IGZ1bmN0aW9uIGdldEFycmF5TGVuZ3RoXygpIHtcbiAgICB0aGlzLmF0b21fLnJlcG9ydE9ic2VydmVkKCk7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVzXy5sZW5ndGg7XG4gIH07XG5cbiAgX3Byb3RvLnNldEFycmF5TGVuZ3RoXyA9IGZ1bmN0aW9uIHNldEFycmF5TGVuZ3RoXyhuZXdMZW5ndGgpIHtcbiAgICBpZiAodHlwZW9mIG5ld0xlbmd0aCAhPT0gXCJudW1iZXJcIiB8fCBuZXdMZW5ndGggPCAwKSBkaWUoXCJPdXQgb2YgcmFuZ2U6IFwiICsgbmV3TGVuZ3RoKTtcbiAgICB2YXIgY3VycmVudExlbmd0aCA9IHRoaXMudmFsdWVzXy5sZW5ndGg7XG4gICAgaWYgKG5ld0xlbmd0aCA9PT0gY3VycmVudExlbmd0aCkgcmV0dXJuO2Vsc2UgaWYgKG5ld0xlbmd0aCA+IGN1cnJlbnRMZW5ndGgpIHtcbiAgICAgIHZhciBuZXdJdGVtcyA9IG5ldyBBcnJheShuZXdMZW5ndGggLSBjdXJyZW50TGVuZ3RoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdMZW5ndGggLSBjdXJyZW50TGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbmV3SXRlbXNbaV0gPSB1bmRlZmluZWQ7XG4gICAgICB9IC8vIE5vIEFycmF5LmZpbGwgZXZlcnl3aGVyZS4uLlxuXG5cbiAgICAgIHRoaXMuc3BsaWNlV2l0aEFycmF5XyhjdXJyZW50TGVuZ3RoLCAwLCBuZXdJdGVtcyk7XG4gICAgfSBlbHNlIHRoaXMuc3BsaWNlV2l0aEFycmF5XyhuZXdMZW5ndGgsIGN1cnJlbnRMZW5ndGggLSBuZXdMZW5ndGgpO1xuICB9O1xuXG4gIF9wcm90by51cGRhdGVBcnJheUxlbmd0aF8gPSBmdW5jdGlvbiB1cGRhdGVBcnJheUxlbmd0aF8ob2xkTGVuZ3RoLCBkZWx0YSkge1xuICAgIGlmIChvbGRMZW5ndGggIT09IHRoaXMubGFzdEtub3duTGVuZ3RoXykgZGllKDE2KTtcbiAgICB0aGlzLmxhc3RLbm93bkxlbmd0aF8gKz0gZGVsdGE7XG4gICAgaWYgKHRoaXMubGVnYWN5TW9kZV8gJiYgZGVsdGEgPiAwKSByZXNlcnZlQXJyYXlCdWZmZXIob2xkTGVuZ3RoICsgZGVsdGEgKyAxKTtcbiAgfTtcblxuICBfcHJvdG8uc3BsaWNlV2l0aEFycmF5XyA9IGZ1bmN0aW9uIHNwbGljZVdpdGhBcnJheV8oaW5kZXgsIGRlbGV0ZUNvdW50LCBuZXdJdGVtcykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZCh0aGlzLmF0b21fKTtcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy52YWx1ZXNfLmxlbmd0aDtcbiAgICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkgaW5kZXggPSAwO2Vsc2UgaWYgKGluZGV4ID4gbGVuZ3RoKSBpbmRleCA9IGxlbmd0aDtlbHNlIGlmIChpbmRleCA8IDApIGluZGV4ID0gTWF0aC5tYXgoMCwgbGVuZ3RoICsgaW5kZXgpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSBkZWxldGVDb3VudCA9IGxlbmd0aCAtIGluZGV4O2Vsc2UgaWYgKGRlbGV0ZUNvdW50ID09PSB1bmRlZmluZWQgfHwgZGVsZXRlQ291bnQgPT09IG51bGwpIGRlbGV0ZUNvdW50ID0gMDtlbHNlIGRlbGV0ZUNvdW50ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oZGVsZXRlQ291bnQsIGxlbmd0aCAtIGluZGV4KSk7XG4gICAgaWYgKG5ld0l0ZW1zID09PSB1bmRlZmluZWQpIG5ld0l0ZW1zID0gRU1QVFlfQVJSQVk7XG5cbiAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XG4gICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcbiAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5XyxcbiAgICAgICAgdHlwZTogU1BMSUNFLFxuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIHJlbW92ZWRDb3VudDogZGVsZXRlQ291bnQsXG4gICAgICAgIGFkZGVkOiBuZXdJdGVtc1xuICAgICAgfSk7XG4gICAgICBpZiAoIWNoYW5nZSkgcmV0dXJuIEVNUFRZX0FSUkFZO1xuICAgICAgZGVsZXRlQ291bnQgPSBjaGFuZ2UucmVtb3ZlZENvdW50O1xuICAgICAgbmV3SXRlbXMgPSBjaGFuZ2UuYWRkZWQ7XG4gICAgfVxuXG4gICAgbmV3SXRlbXMgPSBuZXdJdGVtcy5sZW5ndGggPT09IDAgPyBuZXdJdGVtcyA6IG5ld0l0ZW1zLm1hcChmdW5jdGlvbiAodikge1xuICAgICAgcmV0dXJuIF90aGlzLmVuaGFuY2VyXyh2LCB1bmRlZmluZWQpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMubGVnYWN5TW9kZV8gfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICB2YXIgbGVuZ3RoRGVsdGEgPSBuZXdJdGVtcy5sZW5ndGggLSBkZWxldGVDb3VudDtcbiAgICAgIHRoaXMudXBkYXRlQXJyYXlMZW5ndGhfKGxlbmd0aCwgbGVuZ3RoRGVsdGEpOyAvLyBjaGVja3MgaWYgaW50ZXJuYWwgYXJyYXkgd2Fzbid0IG1vZGlmaWVkXG4gICAgfVxuXG4gICAgdmFyIHJlcyA9IHRoaXMuc3BsaWNlSXRlbXNJbnRvVmFsdWVzXyhpbmRleCwgZGVsZXRlQ291bnQsIG5ld0l0ZW1zKTtcbiAgICBpZiAoZGVsZXRlQ291bnQgIT09IDAgfHwgbmV3SXRlbXMubGVuZ3RoICE9PSAwKSB0aGlzLm5vdGlmeUFycmF5U3BsaWNlXyhpbmRleCwgbmV3SXRlbXMsIHJlcyk7XG4gICAgcmV0dXJuIHRoaXMuZGVoYW5jZVZhbHVlc18ocmVzKTtcbiAgfTtcblxuICBfcHJvdG8uc3BsaWNlSXRlbXNJbnRvVmFsdWVzXyA9IGZ1bmN0aW9uIHNwbGljZUl0ZW1zSW50b1ZhbHVlc18oaW5kZXgsIGRlbGV0ZUNvdW50LCBuZXdJdGVtcykge1xuICAgIGlmIChuZXdJdGVtcy5sZW5ndGggPCBNQVhfU1BMSUNFX1NJWkUpIHtcbiAgICAgIHZhciBfdGhpcyR2YWx1ZXNfO1xuXG4gICAgICByZXR1cm4gKF90aGlzJHZhbHVlc18gPSB0aGlzLnZhbHVlc18pLnNwbGljZS5hcHBseShfdGhpcyR2YWx1ZXNfLCBbaW5kZXgsIGRlbGV0ZUNvdW50XS5jb25jYXQobmV3SXRlbXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJlcyA9IHRoaXMudmFsdWVzXy5zbGljZShpbmRleCwgaW5kZXggKyBkZWxldGVDb3VudCk7XG4gICAgICB2YXIgb2xkSXRlbXMgPSB0aGlzLnZhbHVlc18uc2xpY2UoaW5kZXggKyBkZWxldGVDb3VudCk7XG4gICAgICB0aGlzLnZhbHVlc18ubGVuZ3RoID0gaW5kZXggKyBuZXdJdGVtcy5sZW5ndGggLSBkZWxldGVDb3VudDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnZhbHVlc19baW5kZXggKyBpXSA9IG5ld0l0ZW1zW2ldO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgb2xkSXRlbXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHRoaXMudmFsdWVzX1tpbmRleCArIG5ld0l0ZW1zLmxlbmd0aCArIF9pXSA9IG9sZEl0ZW1zW19pXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm5vdGlmeUFycmF5Q2hpbGRVcGRhdGVfID0gZnVuY3Rpb24gbm90aWZ5QXJyYXlDaGlsZFVwZGF0ZV8oaW5kZXgsIG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIHZhciBub3RpZnlTcHkgPSAhdGhpcy5vd25lZF8gJiYgaXNTcHlFbmFibGVkKCk7XG4gICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKTtcbiAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweSA/IHtcbiAgICAgIG9ic2VydmFibGVLaW5kOiBcImFycmF5XCIsXG4gICAgICBvYmplY3Q6IHRoaXMucHJveHlfLFxuICAgICAgdHlwZTogVVBEQVRFLFxuICAgICAgZGVidWdPYmplY3ROYW1lOiB0aGlzLmF0b21fLm5hbWVfLFxuICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlXG4gICAgfSA6IG51bGw7IC8vIFRoZSByZWFzb24gd2h5IHRoaXMgaXMgb24gcmlnaHQgaGFuZCBzaWRlIGhlcmUgKGFuZCBub3QgYWJvdmUpLCBpcyB0aGlzIHdheSB0aGUgdWdsaWZpZXIgd2lsbCBkcm9wIGl0LCBidXQgaXQgd29uJ3RcbiAgICAvLyBjYXVzZSBhbnkgcnVudGltZSBvdmVyaGVhZCBpbiBkZXZlbG9wbWVudCBtb2RlIHdpdGhvdXQgTk9ERV9FTlYgc2V0LCB1bmxlc3Mgc3B5aW5nIGlzIGVuYWJsZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgbm90aWZ5U3B5KSBzcHlSZXBvcnRTdGFydChjaGFuZ2UpO1xuICAgIHRoaXMuYXRvbV8ucmVwb3J0Q2hhbmdlZCgpO1xuICAgIGlmIChub3RpZnkpIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgbm90aWZ5U3B5KSBzcHlSZXBvcnRFbmQoKTtcbiAgfTtcblxuICBfcHJvdG8ubm90aWZ5QXJyYXlTcGxpY2VfID0gZnVuY3Rpb24gbm90aWZ5QXJyYXlTcGxpY2VfKGluZGV4LCBhZGRlZCwgcmVtb3ZlZCkge1xuICAgIHZhciBub3RpZnlTcHkgPSAhdGhpcy5vd25lZF8gJiYgaXNTcHlFbmFibGVkKCk7XG4gICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKTtcbiAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweSA/IHtcbiAgICAgIG9ic2VydmFibGVLaW5kOiBcImFycmF5XCIsXG4gICAgICBvYmplY3Q6IHRoaXMucHJveHlfLFxuICAgICAgZGVidWdPYmplY3ROYW1lOiB0aGlzLmF0b21fLm5hbWVfLFxuICAgICAgdHlwZTogU1BMSUNFLFxuICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgcmVtb3ZlZDogcmVtb3ZlZCxcbiAgICAgIGFkZGVkOiBhZGRlZCxcbiAgICAgIHJlbW92ZWRDb3VudDogcmVtb3ZlZC5sZW5ndGgsXG4gICAgICBhZGRlZENvdW50OiBhZGRlZC5sZW5ndGhcbiAgICB9IDogbnVsbDtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG5vdGlmeVNweSkgc3B5UmVwb3J0U3RhcnQoY2hhbmdlKTtcbiAgICB0aGlzLmF0b21fLnJlcG9ydENoYW5nZWQoKTsgLy8gY29uZm9ybTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvb2JzZXJ2ZVxuXG4gICAgaWYgKG5vdGlmeSkgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIGNoYW5nZSk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBub3RpZnlTcHkpIHNweVJlcG9ydEVuZCgpO1xuICB9O1xuXG4gIF9wcm90by5nZXRfID0gZnVuY3Rpb24gZ2V0XyhpbmRleCkge1xuICAgIGlmIChpbmRleCA8IHRoaXMudmFsdWVzXy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuYXRvbV8ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgIHJldHVybiB0aGlzLmRlaGFuY2VWYWx1ZV8odGhpcy52YWx1ZXNfW2luZGV4XSk7XG4gICAgfVxuXG4gICAgY29uc29sZS53YXJuKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiW21vYnhdIE91dCBvZiBib3VuZHMgcmVhZDogXCIgKyBpbmRleCA6IFwiW21vYnguYXJyYXldIEF0dGVtcHQgdG8gcmVhZCBhbiBhcnJheSBpbmRleCAoXCIgKyBpbmRleCArIFwiKSB0aGF0IGlzIG91dCBvZiBib3VuZHMgKFwiICsgdGhpcy52YWx1ZXNfLmxlbmd0aCArIFwiKS4gUGxlYXNlIGNoZWNrIGxlbmd0aCBmaXJzdC4gT3V0IG9mIGJvdW5kIGluZGljZXMgd2lsbCBub3QgYmUgdHJhY2tlZCBieSBNb2JYXCIpO1xuICB9O1xuXG4gIF9wcm90by5zZXRfID0gZnVuY3Rpb24gc2V0XyhpbmRleCwgbmV3VmFsdWUpIHtcbiAgICB2YXIgdmFsdWVzID0gdGhpcy52YWx1ZXNfO1xuXG4gICAgaWYgKGluZGV4IDwgdmFsdWVzLmxlbmd0aCkge1xuICAgICAgLy8gdXBkYXRlIGF0IGluZGV4IGluIHJhbmdlXG4gICAgICBjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZCh0aGlzLmF0b21fKTtcbiAgICAgIHZhciBvbGRWYWx1ZSA9IHZhbHVlc1tpbmRleF07XG5cbiAgICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XG4gICAgICAgICAgdHlwZTogVVBEQVRFLFxuICAgICAgICAgIG9iamVjdDogdGhpcy5wcm94eV8sXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFjaGFuZ2UpIHJldHVybjtcbiAgICAgICAgbmV3VmFsdWUgPSBjaGFuZ2UubmV3VmFsdWU7XG4gICAgICB9XG5cbiAgICAgIG5ld1ZhbHVlID0gdGhpcy5lbmhhbmNlcl8obmV3VmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgIHZhciBjaGFuZ2VkID0gbmV3VmFsdWUgIT09IG9sZFZhbHVlO1xuXG4gICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICB2YWx1ZXNbaW5kZXhdID0gbmV3VmFsdWU7XG4gICAgICAgIHRoaXMubm90aWZ5QXJyYXlDaGlsZFVwZGF0ZV8oaW5kZXgsIG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpbmRleCA9PT0gdmFsdWVzLmxlbmd0aCkge1xuICAgICAgLy8gYWRkIGEgbmV3IGl0ZW1cbiAgICAgIHRoaXMuc3BsaWNlV2l0aEFycmF5XyhpbmRleCwgMCwgW25ld1ZhbHVlXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG91dCBvZiBib3VuZHNcbiAgICAgIGRpZSgxNywgaW5kZXgsIHZhbHVlcy5sZW5ndGgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb247XG59KCk7XG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZhYmxlQXJyYXkoaW5pdGlhbFZhbHVlcywgZW5oYW5jZXIsIG5hbWUsIG93bmVkKSB7XG4gIGlmIChuYW1lID09PSB2b2lkIDApIHtcbiAgICBuYW1lID0gXCJPYnNlcnZhYmxlQXJyYXlAXCIgKyBnZXROZXh0SWQoKTtcbiAgfVxuXG4gIGlmIChvd25lZCA9PT0gdm9pZCAwKSB7XG4gICAgb3duZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGFzc2VydFByb3hpZXMoKTtcbiAgdmFyIGFkbSA9IG5ldyBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbihuYW1lLCBlbmhhbmNlciwgb3duZWQsIGZhbHNlKTtcbiAgYWRkSGlkZGVuRmluYWxQcm9wKGFkbS52YWx1ZXNfLCAkbW9ieCwgYWRtKTtcbiAgdmFyIHByb3h5ID0gbmV3IFByb3h5KGFkbS52YWx1ZXNfLCBhcnJheVRyYXBzKTtcbiAgYWRtLnByb3h5XyA9IHByb3h5O1xuXG4gIGlmIChpbml0aWFsVmFsdWVzICYmIGluaXRpYWxWYWx1ZXMubGVuZ3RoKSB7XG4gICAgdmFyIHByZXYgPSBhbGxvd1N0YXRlQ2hhbmdlc1N0YXJ0KHRydWUpO1xuICAgIGFkbS5zcGxpY2VXaXRoQXJyYXlfKDAsIDAsIGluaXRpYWxWYWx1ZXMpO1xuICAgIGFsbG93U3RhdGVDaGFuZ2VzRW5kKHByZXYpO1xuICB9XG5cbiAgcmV0dXJuIHByb3h5O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxudmFyIGFycmF5RXh0ZW5zaW9ucyA9IHtcbiAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHJldHVybiB0aGlzLnNwbGljZSgwKTtcbiAgfSxcbiAgcmVwbGFjZTogZnVuY3Rpb24gcmVwbGFjZShuZXdJdGVtcykge1xuICAgIHZhciBhZG0gPSB0aGlzWyRtb2J4XTtcbiAgICByZXR1cm4gYWRtLnNwbGljZVdpdGhBcnJheV8oMCwgYWRtLnZhbHVlc18ubGVuZ3RoLCBuZXdJdGVtcyk7XG4gIH0sXG4gIC8vIFVzZWQgYnkgSlNPTi5zdHJpbmdpZnlcbiAgdG9KU09OOiBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2xpY2UoKTtcbiAgfSxcblxuICAvKlxyXG4gICAqIGZ1bmN0aW9ucyB0aGF0IGRvIGFsdGVyIHRoZSBpbnRlcm5hbCBzdHJ1Y3R1cmUgb2YgdGhlIGFycmF5LCAoYmFzZWQgb24gbGliLmVzNi5kLnRzKVxyXG4gICAqIHNpbmNlIHRoZXNlIGZ1bmN0aW9ucyBhbHRlciB0aGUgaW5uZXIgc3RydWN0dXJlIG9mIHRoZSBhcnJheSwgdGhlIGhhdmUgc2lkZSBlZmZlY3RzLlxyXG4gICAqIEJlY2F1c2UgdGhlIGhhdmUgc2lkZSBlZmZlY3RzLCB0aGV5IHNob3VsZCBub3QgYmUgdXNlZCBpbiBjb21wdXRlZCBmdW5jdGlvbixcclxuICAgKiBhbmQgZm9yIHRoYXQgcmVhc29uIHRoZSBkbyBub3QgY2FsbCBkZXBlbmRlbmN5U3RhdGUubm90aWZ5T2JzZXJ2ZWRcclxuICAgKi9cbiAgc3BsaWNlOiBmdW5jdGlvbiBzcGxpY2UoaW5kZXgsIGRlbGV0ZUNvdW50KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG5ld0l0ZW1zID0gbmV3IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIG5ld0l0ZW1zW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYWRtID0gdGhpc1skbW9ieF07XG5cbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuIFtdO1xuXG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBhZG0uc3BsaWNlV2l0aEFycmF5XyhpbmRleCk7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIGFkbS5zcGxpY2VXaXRoQXJyYXlfKGluZGV4LCBkZWxldGVDb3VudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkbS5zcGxpY2VXaXRoQXJyYXlfKGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpO1xuICB9LFxuICBzcGxpY2VXaXRoQXJyYXk6IGZ1bmN0aW9uIHNwbGljZVdpdGhBcnJheShpbmRleCwgZGVsZXRlQ291bnQsIG5ld0l0ZW1zKSB7XG4gICAgcmV0dXJuIHRoaXNbJG1vYnhdLnNwbGljZVdpdGhBcnJheV8oaW5kZXgsIGRlbGV0ZUNvdW50LCBuZXdJdGVtcyk7XG4gIH0sXG4gIHB1c2g6IGZ1bmN0aW9uIHB1c2goKSB7XG4gICAgdmFyIGFkbSA9IHRoaXNbJG1vYnhdO1xuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBpdGVtcyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgaXRlbXNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBhZG0uc3BsaWNlV2l0aEFycmF5XyhhZG0udmFsdWVzXy5sZW5ndGgsIDAsIGl0ZW1zKTtcbiAgICByZXR1cm4gYWRtLnZhbHVlc18ubGVuZ3RoO1xuICB9LFxuICBwb3A6IGZ1bmN0aW9uIHBvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5zcGxpY2UoTWF0aC5tYXgodGhpc1skbW9ieF0udmFsdWVzXy5sZW5ndGggLSAxLCAwKSwgMSlbMF07XG4gIH0sXG4gIHNoaWZ0OiBmdW5jdGlvbiBzaGlmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5zcGxpY2UoMCwgMSlbMF07XG4gIH0sXG4gIHVuc2hpZnQ6IGZ1bmN0aW9uIHVuc2hpZnQoKSB7XG4gICAgdmFyIGFkbSA9IHRoaXNbJG1vYnhdO1xuXG4gICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBpdGVtcyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgaXRlbXNbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICBhZG0uc3BsaWNlV2l0aEFycmF5XygwLCAwLCBpdGVtcyk7XG4gICAgcmV0dXJuIGFkbS52YWx1ZXNfLmxlbmd0aDtcbiAgfSxcbiAgcmV2ZXJzZTogZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgICAvLyByZXZlcnNlIGJ5IGRlZmF1bHQgbXV0YXRlcyBpbiBwbGFjZSBiZWZvcmUgcmV0dXJuaW5nIHRoZSByZXN1bHRcbiAgICAvLyB3aGljaCBtYWtlcyBpdCBib3RoIGEgJ2Rlcml2YXRpb24nIGFuZCBhICdtdXRhdGlvbicuXG4gICAgaWYgKGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbikge1xuICAgICAgZGllKDM3LCBcInJldmVyc2VcIik7XG4gICAgfVxuXG4gICAgdGhpcy5yZXBsYWNlKHRoaXMuc2xpY2UoKS5yZXZlcnNlKCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBzb3J0OiBmdW5jdGlvbiBzb3J0KCkge1xuICAgIC8vIHNvcnQgYnkgZGVmYXVsdCBtdXRhdGVzIGluIHBsYWNlIGJlZm9yZSByZXR1cm5pbmcgdGhlIHJlc3VsdFxuICAgIC8vIHdoaWNoIGdvZXMgYWdhaW5zdCBhbGwgZ29vZCBwcmFjdGljZXMuIExldCdzIG5vdCBjaGFuZ2UgdGhlIGFycmF5IGluIHBsYWNlIVxuICAgIGlmIChnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24pIHtcbiAgICAgIGRpZSgzNywgXCJzb3J0XCIpO1xuICAgIH1cblxuICAgIHZhciBjb3B5ID0gdGhpcy5zbGljZSgpO1xuICAgIGNvcHkuc29ydC5hcHBseShjb3B5LCBhcmd1bWVudHMpO1xuICAgIHRoaXMucmVwbGFjZShjb3B5KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUodmFsdWUpIHtcbiAgICB2YXIgYWRtID0gdGhpc1skbW9ieF07XG4gICAgdmFyIGlkeCA9IGFkbS5kZWhhbmNlVmFsdWVzXyhhZG0udmFsdWVzXykuaW5kZXhPZih2YWx1ZSk7XG5cbiAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgIHRoaXMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG4vKipcclxuICogV3JhcCBmdW5jdGlvbiBmcm9tIHByb3RvdHlwZVxyXG4gKiBXaXRob3V0IHRoaXMsIGV2ZXJ5dGhpbmcgd29ya3MgYXMgd2VsbCwgYnV0IHRoaXMgd29ya3NcclxuICogZmFzdGVyIGFzIGV2ZXJ5dGhpbmcgd29ya3Mgb24gdW5wcm94aWVkIHZhbHVlc1xyXG4gKi9cblxuYWRkQXJyYXlFeHRlbnNpb24oXCJjb25jYXRcIiwgc2ltcGxlRnVuYyk7XG5hZGRBcnJheUV4dGVuc2lvbihcImZsYXRcIiwgc2ltcGxlRnVuYyk7XG5hZGRBcnJheUV4dGVuc2lvbihcImluY2x1ZGVzXCIsIHNpbXBsZUZ1bmMpO1xuYWRkQXJyYXlFeHRlbnNpb24oXCJpbmRleE9mXCIsIHNpbXBsZUZ1bmMpO1xuYWRkQXJyYXlFeHRlbnNpb24oXCJqb2luXCIsIHNpbXBsZUZ1bmMpO1xuYWRkQXJyYXlFeHRlbnNpb24oXCJsYXN0SW5kZXhPZlwiLCBzaW1wbGVGdW5jKTtcbmFkZEFycmF5RXh0ZW5zaW9uKFwic2xpY2VcIiwgc2ltcGxlRnVuYyk7XG5hZGRBcnJheUV4dGVuc2lvbihcInRvU3RyaW5nXCIsIHNpbXBsZUZ1bmMpO1xuYWRkQXJyYXlFeHRlbnNpb24oXCJ0b0xvY2FsZVN0cmluZ1wiLCBzaW1wbGVGdW5jKTsgLy8gbWFwXG5cbmFkZEFycmF5RXh0ZW5zaW9uKFwiZXZlcnlcIiwgbWFwTGlrZUZ1bmMpO1xuYWRkQXJyYXlFeHRlbnNpb24oXCJmaWx0ZXJcIiwgbWFwTGlrZUZ1bmMpO1xuYWRkQXJyYXlFeHRlbnNpb24oXCJmaW5kXCIsIG1hcExpa2VGdW5jKTtcbmFkZEFycmF5RXh0ZW5zaW9uKFwiZmluZEluZGV4XCIsIG1hcExpa2VGdW5jKTtcbmFkZEFycmF5RXh0ZW5zaW9uKFwiZmxhdE1hcFwiLCBtYXBMaWtlRnVuYyk7XG5hZGRBcnJheUV4dGVuc2lvbihcImZvckVhY2hcIiwgbWFwTGlrZUZ1bmMpO1xuYWRkQXJyYXlFeHRlbnNpb24oXCJtYXBcIiwgbWFwTGlrZUZ1bmMpO1xuYWRkQXJyYXlFeHRlbnNpb24oXCJzb21lXCIsIG1hcExpa2VGdW5jKTsgLy8gcmVkdWNlXG5cbmFkZEFycmF5RXh0ZW5zaW9uKFwicmVkdWNlXCIsIHJlZHVjZUxpa2VGdW5jKTtcbmFkZEFycmF5RXh0ZW5zaW9uKFwicmVkdWNlUmlnaHRcIiwgcmVkdWNlTGlrZUZ1bmMpO1xuXG5mdW5jdGlvbiBhZGRBcnJheUV4dGVuc2lvbihmdW5jTmFtZSwgZnVuY0ZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBBcnJheS5wcm90b3R5cGVbZnVuY05hbWVdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBhcnJheUV4dGVuc2lvbnNbZnVuY05hbWVdID0gZnVuY0ZhY3RvcnkoZnVuY05hbWUpO1xuICB9XG59IC8vIFJlcG9ydCBhbmQgZGVsZWdhdGUgdG8gZGVoYW5jZWQgYXJyYXlcblxuXG5mdW5jdGlvbiBzaW1wbGVGdW5jKGZ1bmNOYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFkbSA9IHRoaXNbJG1vYnhdO1xuICAgIGFkbS5hdG9tXy5yZXBvcnRPYnNlcnZlZCgpO1xuICAgIHZhciBkZWhhbmNlZFZhbHVlcyA9IGFkbS5kZWhhbmNlVmFsdWVzXyhhZG0udmFsdWVzXyk7XG4gICAgcmV0dXJuIGRlaGFuY2VkVmFsdWVzW2Z1bmNOYW1lXS5hcHBseShkZWhhbmNlZFZhbHVlcywgYXJndW1lbnRzKTtcbiAgfTtcbn0gLy8gTWFrZSBzdXJlIGNhbGxiYWNrcyByZWNpZXZlIGNvcnJlY3QgYXJyYXkgYXJnICMyMzI2XG5cblxuZnVuY3Rpb24gbWFwTGlrZUZ1bmMoZnVuY05hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGFkbSA9IHRoaXNbJG1vYnhdO1xuICAgIGFkbS5hdG9tXy5yZXBvcnRPYnNlcnZlZCgpO1xuICAgIHZhciBkZWhhbmNlZFZhbHVlcyA9IGFkbS5kZWhhbmNlVmFsdWVzXyhhZG0udmFsdWVzXyk7XG4gICAgcmV0dXJuIGRlaGFuY2VkVmFsdWVzW2Z1bmNOYW1lXShmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIGVsZW1lbnQsIGluZGV4LCBfdGhpczIpO1xuICAgIH0pO1xuICB9O1xufSAvLyBNYWtlIHN1cmUgY2FsbGJhY2tzIHJlY2lldmUgY29ycmVjdCBhcnJheSBhcmcgIzIzMjZcblxuXG5mdW5jdGlvbiByZWR1Y2VMaWtlRnVuYyhmdW5jTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIGFkbSA9IHRoaXNbJG1vYnhdO1xuICAgIGFkbS5hdG9tXy5yZXBvcnRPYnNlcnZlZCgpO1xuICAgIHZhciBkZWhhbmNlZFZhbHVlcyA9IGFkbS5kZWhhbmNlVmFsdWVzXyhhZG0udmFsdWVzXyk7IC8vICMyNDMyIC0gcmVkdWNlIGJlaGF2aW9yIGRlcGVuZHMgb24gYXJndW1lbnRzLmxlbmd0aFxuXG4gICAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzWzBdO1xuXG4gICAgYXJndW1lbnRzWzBdID0gZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBjdXJyZW50VmFsdWUsIGluZGV4KSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soYWNjdW11bGF0b3IsIGN1cnJlbnRWYWx1ZSwgaW5kZXgsIF90aGlzMyk7XG4gICAgfTtcblxuICAgIHJldHVybiBkZWhhbmNlZFZhbHVlc1tmdW5jTmFtZV0uYXBwbHkoZGVoYW5jZWRWYWx1ZXMsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbnZhciBpc09ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uID0gLyojX19QVVJFX18qL2NyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvblwiLCBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbik7XG5mdW5jdGlvbiBpc09ic2VydmFibGVBcnJheSh0aGluZykge1xuICByZXR1cm4gaXNPYmplY3QodGhpbmcpICYmIGlzT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24odGhpbmdbJG1vYnhdKTtcbn1cblxudmFyIF9TeW1ib2wkaXRlcmF0b3IsIF9TeW1ib2wkdG9TdHJpbmdUYWc7XG52YXIgT2JzZXJ2YWJsZU1hcE1hcmtlciA9IHt9O1xudmFyIEFERCA9IFwiYWRkXCI7XG52YXIgREVMRVRFID0gXCJkZWxldGVcIjsgLy8ganVzdCBleHRlbmQgTWFwPyBTZWUgYWxzbyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9uZXN0aGFydXMvMTNiNGQ3NGYyZWY0YTJmNDM1N2RiZDNmYzIzYzFlNTRcbi8vIEJ1dDogaHR0cHM6Ly9naXRodWIuY29tL21vYnhqcy9tb2J4L2lzc3Vlcy8xNTU2XG5cbl9TeW1ib2wkaXRlcmF0b3IgPSBTeW1ib2wuaXRlcmF0b3I7XG5fU3ltYm9sJHRvU3RyaW5nVGFnID0gU3ltYm9sLnRvU3RyaW5nVGFnO1xudmFyIE9ic2VydmFibGVNYXAgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvLyBoYXNNYXAsIG5vdCBoYXNoTWFwID4tKS5cbiAgZnVuY3Rpb24gT2JzZXJ2YWJsZU1hcChpbml0aWFsRGF0YSwgZW5oYW5jZXJfLCBuYW1lXykge1xuICAgIGlmIChlbmhhbmNlcl8gPT09IHZvaWQgMCkge1xuICAgICAgZW5oYW5jZXJfID0gZGVlcEVuaGFuY2VyO1xuICAgIH1cblxuICAgIGlmIChuYW1lXyA9PT0gdm9pZCAwKSB7XG4gICAgICBuYW1lXyA9IFwiT2JzZXJ2YWJsZU1hcEBcIiArIGdldE5leHRJZCgpO1xuICAgIH1cblxuICAgIHRoaXMuZW5oYW5jZXJfID0gdm9pZCAwO1xuICAgIHRoaXMubmFtZV8gPSB2b2lkIDA7XG4gICAgdGhpc1skbW9ieF0gPSBPYnNlcnZhYmxlTWFwTWFya2VyO1xuICAgIHRoaXMuZGF0YV8gPSB2b2lkIDA7XG4gICAgdGhpcy5oYXNNYXBfID0gdm9pZCAwO1xuICAgIHRoaXMua2V5c0F0b21fID0gdm9pZCAwO1xuICAgIHRoaXMuaW50ZXJjZXB0b3JzXyA9IHZvaWQgMDtcbiAgICB0aGlzLmNoYW5nZUxpc3RlbmVyc18gPSB2b2lkIDA7XG4gICAgdGhpcy5kZWhhbmNlciA9IHZvaWQgMDtcbiAgICB0aGlzLmVuaGFuY2VyXyA9IGVuaGFuY2VyXztcbiAgICB0aGlzLm5hbWVfID0gbmFtZV87XG5cbiAgICBpZiAoIWlzRnVuY3Rpb24oTWFwKSkge1xuICAgICAgZGllKDE4KTtcbiAgICB9XG5cbiAgICB0aGlzLmtleXNBdG9tXyA9IGNyZWF0ZUF0b20odGhpcy5uYW1lXyArIFwiLmtleXMoKVwiKTtcbiAgICB0aGlzLmRhdGFfID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuaGFzTWFwXyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLm1lcmdlKGluaXRpYWxEYXRhKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZTtcblxuICBfcHJvdG8uaGFzXyA9IGZ1bmN0aW9uIGhhc18oa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YV8uaGFzKGtleSk7XG4gIH07XG5cbiAgX3Byb3RvLmhhcyA9IGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKCFnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24pIHJldHVybiB0aGlzLmhhc18oa2V5KTtcbiAgICB2YXIgZW50cnkgPSB0aGlzLmhhc01hcF8uZ2V0KGtleSk7XG5cbiAgICBpZiAoIWVudHJ5KSB7XG4gICAgICB2YXIgbmV3RW50cnkgPSBlbnRyeSA9IG5ldyBPYnNlcnZhYmxlVmFsdWUodGhpcy5oYXNfKGtleSksIHJlZmVyZW5jZUVuaGFuY2VyLCB0aGlzLm5hbWVfICsgXCIuXCIgKyBzdHJpbmdpZnlLZXkoa2V5KSArIFwiP1wiLCBmYWxzZSk7XG4gICAgICB0aGlzLmhhc01hcF8uc2V0KGtleSwgbmV3RW50cnkpO1xuICAgICAgb25CZWNvbWVVbm9ic2VydmVkKG5ld0VudHJ5LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5oYXNNYXBfW1wiZGVsZXRlXCJdKGtleSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW50cnkuZ2V0KCk7XG4gIH07XG5cbiAgX3Byb3RvLnNldCA9IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgdmFyIGhhc0tleSA9IHRoaXMuaGFzXyhrZXkpO1xuXG4gICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xuICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XG4gICAgICAgIHR5cGU6IGhhc0tleSA/IFVQREFURSA6IEFERCxcbiAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICBuZXdWYWx1ZTogdmFsdWUsXG4gICAgICAgIG5hbWU6IGtleVxuICAgICAgfSk7XG4gICAgICBpZiAoIWNoYW5nZSkgcmV0dXJuIHRoaXM7XG4gICAgICB2YWx1ZSA9IGNoYW5nZS5uZXdWYWx1ZTtcbiAgICB9XG5cbiAgICBpZiAoaGFzS2V5KSB7XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlXyhrZXksIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRWYWx1ZV8oa2V5LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvW1wiZGVsZXRlXCJdID0gZnVuY3Rpb24gX2RlbGV0ZShrZXkpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGNoZWNrSWZTdGF0ZU1vZGlmaWNhdGlvbnNBcmVBbGxvd2VkKHRoaXMua2V5c0F0b21fKTtcblxuICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xuICAgICAgICB0eXBlOiBERUxFVEUsXG4gICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgbmFtZToga2V5XG4gICAgICB9KTtcbiAgICAgIGlmICghY2hhbmdlKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzXyhrZXkpKSB7XG4gICAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkKCk7XG4gICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpO1xuXG4gICAgICB2YXIgX2NoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHkgPyB7XG4gICAgICAgIG9ic2VydmFibGVLaW5kOiBcIm1hcFwiLFxuICAgICAgICBkZWJ1Z09iamVjdE5hbWU6IHRoaXMubmFtZV8sXG4gICAgICAgIHR5cGU6IERFTEVURSxcbiAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICBvbGRWYWx1ZTogdGhpcy5kYXRhXy5nZXQoa2V5KS52YWx1ZV8sXG4gICAgICAgIG5hbWU6IGtleVxuICAgICAgfSA6IG51bGw7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgbm90aWZ5U3B5KSBzcHlSZXBvcnRTdGFydChfY2hhbmdlKTtcbiAgICAgIHRyYW5zYWN0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLmtleXNBdG9tXy5yZXBvcnRDaGFuZ2VkKCk7XG5cbiAgICAgICAgX3RoaXMyLnVwZGF0ZUhhc01hcEVudHJ5XyhrZXksIGZhbHNlKTtcblxuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IF90aGlzMi5kYXRhXy5nZXQoa2V5KTtcblxuICAgICAgICBvYnNlcnZhYmxlLnNldE5ld1ZhbHVlXyh1bmRlZmluZWQpO1xuXG4gICAgICAgIF90aGlzMi5kYXRhX1tcImRlbGV0ZVwiXShrZXkpO1xuICAgICAgfSk7XG4gICAgICBpZiAobm90aWZ5KSBub3RpZnlMaXN0ZW5lcnModGhpcywgX2NoYW5nZSk7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG5vdGlmeVNweSkgc3B5UmVwb3J0RW5kKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZUhhc01hcEVudHJ5XyA9IGZ1bmN0aW9uIHVwZGF0ZUhhc01hcEVudHJ5XyhrZXksIHZhbHVlKSB7XG4gICAgdmFyIGVudHJ5ID0gdGhpcy5oYXNNYXBfLmdldChrZXkpO1xuXG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICBlbnRyeS5zZXROZXdWYWx1ZV8odmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8udXBkYXRlVmFsdWVfID0gZnVuY3Rpb24gdXBkYXRlVmFsdWVfKGtleSwgbmV3VmFsdWUpIHtcbiAgICB2YXIgb2JzZXJ2YWJsZSA9IHRoaXMuZGF0YV8uZ2V0KGtleSk7XG4gICAgbmV3VmFsdWUgPSBvYnNlcnZhYmxlLnByZXBhcmVOZXdWYWx1ZV8obmV3VmFsdWUpO1xuXG4gICAgaWYgKG5ld1ZhbHVlICE9PSBnbG9iYWxTdGF0ZS5VTkNIQU5HRUQpIHtcbiAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQoKTtcbiAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG4gICAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweSA/IHtcbiAgICAgICAgb2JzZXJ2YWJsZUtpbmQ6IFwibWFwXCIsXG4gICAgICAgIGRlYnVnT2JqZWN0TmFtZTogdGhpcy5uYW1lXyxcbiAgICAgICAgdHlwZTogVVBEQVRFLFxuICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgIG9sZFZhbHVlOiBvYnNlcnZhYmxlLnZhbHVlXyxcbiAgICAgICAgbmFtZToga2V5LFxuICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgIH0gOiBudWxsO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBub3RpZnlTcHkpIHNweVJlcG9ydFN0YXJ0KGNoYW5nZSk7XG4gICAgICBvYnNlcnZhYmxlLnNldE5ld1ZhbHVlXyhuZXdWYWx1ZSk7XG4gICAgICBpZiAobm90aWZ5KSBub3RpZnlMaXN0ZW5lcnModGhpcywgY2hhbmdlKTtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgbm90aWZ5U3B5KSBzcHlSZXBvcnRFbmQoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmFkZFZhbHVlXyA9IGZ1bmN0aW9uIGFkZFZhbHVlXyhrZXksIG5ld1ZhbHVlKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICBjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZCh0aGlzLmtleXNBdG9tXyk7XG4gICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZVZhbHVlKG5ld1ZhbHVlLCBfdGhpczMuZW5oYW5jZXJfLCBfdGhpczMubmFtZV8gKyBcIi5cIiArIHN0cmluZ2lmeUtleShrZXkpLCBmYWxzZSk7XG5cbiAgICAgIF90aGlzMy5kYXRhXy5zZXQoa2V5LCBvYnNlcnZhYmxlKTtcblxuICAgICAgbmV3VmFsdWUgPSBvYnNlcnZhYmxlLnZhbHVlXzsgLy8gdmFsdWUgbWlnaHQgaGF2ZSBiZWVuIGNoYW5nZWRcblxuICAgICAgX3RoaXMzLnVwZGF0ZUhhc01hcEVudHJ5XyhrZXksIHRydWUpO1xuXG4gICAgICBfdGhpczMua2V5c0F0b21fLnJlcG9ydENoYW5nZWQoKTtcbiAgICB9KTtcbiAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkKCk7XG4gICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKTtcbiAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweSA/IHtcbiAgICAgIG9ic2VydmFibGVLaW5kOiBcIm1hcFwiLFxuICAgICAgZGVidWdPYmplY3ROYW1lOiB0aGlzLm5hbWVfLFxuICAgICAgdHlwZTogQURELFxuICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgbmFtZToga2V5LFxuICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgfSA6IG51bGw7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBub3RpZnlTcHkpIHNweVJlcG9ydFN0YXJ0KGNoYW5nZSk7XG4gICAgaWYgKG5vdGlmeSkgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIGNoYW5nZSk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBub3RpZnlTcHkpIHNweVJlcG9ydEVuZCgpO1xuICB9O1xuXG4gIF9wcm90by5nZXQgPSBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgaWYgKHRoaXMuaGFzKGtleSkpIHJldHVybiB0aGlzLmRlaGFuY2VWYWx1ZV8odGhpcy5kYXRhXy5nZXQoa2V5KS5nZXQoKSk7XG4gICAgcmV0dXJuIHRoaXMuZGVoYW5jZVZhbHVlXyh1bmRlZmluZWQpO1xuICB9O1xuXG4gIF9wcm90by5kZWhhbmNlVmFsdWVfID0gZnVuY3Rpb24gZGVoYW5jZVZhbHVlXyh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmRlaGFuY2VyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlaGFuY2VyKHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgX3Byb3RvLmtleXMgPSBmdW5jdGlvbiBrZXlzKCkge1xuICAgIHRoaXMua2V5c0F0b21fLnJlcG9ydE9ic2VydmVkKCk7XG4gICAgcmV0dXJuIHRoaXMuZGF0YV8ua2V5cygpO1xuICB9O1xuXG4gIF9wcm90by52YWx1ZXMgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBrZXlzID0gdGhpcy5rZXlzKCk7XG4gICAgcmV0dXJuIG1ha2VJdGVyYWJsZSh7XG4gICAgICBuZXh0OiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICB2YXIgX2tleXMkbmV4dCA9IGtleXMubmV4dCgpLFxuICAgICAgICAgICAgZG9uZSA9IF9rZXlzJG5leHQuZG9uZSxcbiAgICAgICAgICAgIHZhbHVlID0gX2tleXMkbmV4dC52YWx1ZTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRvbmU6IGRvbmUsXG4gICAgICAgICAgdmFsdWU6IGRvbmUgPyB1bmRlZmluZWQgOiBzZWxmLmdldCh2YWx1ZSlcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZW50cmllcyA9IGZ1bmN0aW9uIGVudHJpZXMoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBrZXlzID0gdGhpcy5rZXlzKCk7XG4gICAgcmV0dXJuIG1ha2VJdGVyYWJsZSh7XG4gICAgICBuZXh0OiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICB2YXIgX2tleXMkbmV4dDIgPSBrZXlzLm5leHQoKSxcbiAgICAgICAgICAgIGRvbmUgPSBfa2V5cyRuZXh0Mi5kb25lLFxuICAgICAgICAgICAgdmFsdWUgPSBfa2V5cyRuZXh0Mi52YWx1ZTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRvbmU6IGRvbmUsXG4gICAgICAgICAgdmFsdWU6IGRvbmUgPyB1bmRlZmluZWQgOiBbdmFsdWUsIHNlbGYuZ2V0KHZhbHVlKV1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG9bX1N5bWJvbCRpdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcygpO1xuICB9O1xuXG4gIF9wcm90by5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UodGhpcyksIF9zdGVwOyAhKF9zdGVwID0gX2l0ZXJhdG9yKCkpLmRvbmU7KSB7XG4gICAgICB2YXIgX3N0ZXAkdmFsdWUgPSBfc3RlcC52YWx1ZSxcbiAgICAgICAgICBrZXkgPSBfc3RlcCR2YWx1ZVswXSxcbiAgICAgICAgICB2YWx1ZSA9IF9zdGVwJHZhbHVlWzFdO1xuICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB2YWx1ZSwga2V5LCB0aGlzKTtcbiAgICB9XG4gIH1cbiAgLyoqIE1lcmdlIGFub3RoZXIgb2JqZWN0IGludG8gdGhpcyBvYmplY3QsIHJldHVybnMgdGhpcy4gKi9cbiAgO1xuXG4gIF9wcm90by5tZXJnZSA9IGZ1bmN0aW9uIG1lcmdlKG90aGVyKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICBpZiAoaXNPYnNlcnZhYmxlTWFwKG90aGVyKSkge1xuICAgICAgb3RoZXIgPSBuZXcgTWFwKG90aGVyKTtcbiAgICB9XG5cbiAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoaXNQbGFpbk9iamVjdChvdGhlcikpIGdldFBsYWluT2JqZWN0S2V5cyhvdGhlcikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiBfdGhpczQuc2V0KGtleSwgb3RoZXJba2V5XSk7XG4gICAgICB9KTtlbHNlIGlmIChBcnJheS5pc0FycmF5KG90aGVyKSkgb3RoZXIuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICB2YXIga2V5ID0gX3JlZlswXSxcbiAgICAgICAgICAgIHZhbHVlID0gX3JlZlsxXTtcbiAgICAgICAgcmV0dXJuIF90aGlzNC5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICB9KTtlbHNlIGlmIChpc0VTNk1hcChvdGhlcikpIHtcbiAgICAgICAgaWYgKG90aGVyLmNvbnN0cnVjdG9yICE9PSBNYXApIGRpZSgxOSwgb3RoZXIpO1xuICAgICAgICBvdGhlci5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNC5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChvdGhlciAhPT0gbnVsbCAmJiBvdGhlciAhPT0gdW5kZWZpbmVkKSBkaWUoMjAsIG90aGVyKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uY2xlYXIgPSBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIHRyYW5zYWN0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAgIHVudHJhY2tlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKF90aGlzNS5rZXlzKCkpLCBfc3RlcDI7ICEoX3N0ZXAyID0gX2l0ZXJhdG9yMigpKS5kb25lOykge1xuICAgICAgICAgIHZhciBrZXkgPSBfc3RlcDIudmFsdWU7XG5cbiAgICAgICAgICBfdGhpczVbXCJkZWxldGVcIl0oa2V5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlKHZhbHVlcykge1xuICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgLy8gSW1wbGVtZW50YXRpb24gcmVxdWlyZW1lbnRzOlxuICAgIC8vIC0gcmVzcGVjdCBvcmRlcmluZyBvZiByZXBsYWNlbWVudCBtYXBcbiAgICAvLyAtIGFsbG93IGludGVyY2VwdG9ycyB0byBydW4gYW5kIHBvdGVudGlhbGx5IHByZXZlbnQgaW5kaXZpZHVhbCBvcGVyYXRpb25zXG4gICAgLy8gLSBkb24ndCByZWNyZWF0ZSBvYnNlcnZhYmxlcyB0aGF0IGFscmVhZHkgZXhpc3QgaW4gb3JpZ2luYWwgbWFwIChzbyB3ZSBkb24ndCBkZXN0cm95IGV4aXN0aW5nIHN1YnNjcmlwdGlvbnMpXG4gICAgLy8gLSBkb24ndCBfa2V5c0F0b20ucmVwb3J0Q2hhbmdlZCBpZiB0aGUga2V5cyBvZiByZXN1bHRpbmcgbWFwIGFyZSBpbmRlbnRpY2FsIChvcmRlciBtYXR0ZXJzISlcbiAgICAvLyAtIG5vdGUgdGhhdCByZXN1bHQgbWFwIG1heSBkaWZmZXIgZnJvbSByZXBsYWNlbWVudCBtYXAgZHVlIHRvIHRoZSBpbnRlcmNlcHRvcnNcbiAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDb252ZXJ0IHRvIG1hcCBzbyB3ZSBjYW4gZG8gcXVpY2sga2V5IGxvb2t1cHNcbiAgICAgIHZhciByZXBsYWNlbWVudE1hcCA9IGNvbnZlcnRUb01hcCh2YWx1ZXMpO1xuICAgICAgdmFyIG9yZGVyZWREYXRhID0gbmV3IE1hcCgpOyAvLyBVc2VkIGZvciBvcHRpbWl6YXRpb25cblxuICAgICAgdmFyIGtleXNSZXBvcnRDaGFuZ2VkQ2FsbGVkID0gZmFsc2U7IC8vIERlbGV0ZSBrZXlzIHRoYXQgZG9uJ3QgZXhpc3QgaW4gcmVwbGFjZW1lbnQgbWFwXG4gICAgICAvLyBpZiB0aGUga2V5IGRlbGV0aW9uIGlzIHByZXZlbnRlZCBieSBpbnRlcmNlcHRvclxuICAgICAgLy8gYWRkIGVudHJ5IGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIHJlc3VsdCBtYXBcblxuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMyA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UoX3RoaXM2LmRhdGFfLmtleXMoKSksIF9zdGVwMzsgIShfc3RlcDMgPSBfaXRlcmF0b3IzKCkpLmRvbmU7KSB7XG4gICAgICAgIHZhciBrZXkgPSBfc3RlcDMudmFsdWU7XG5cbiAgICAgICAgLy8gQ29uY3VycmVudGx5IGl0ZXJhdGluZy9kZWxldGluZyBrZXlzXG4gICAgICAgIC8vIGl0ZXJhdG9yIHNob3VsZCBoYW5kbGUgdGhpcyBjb3JyZWN0bHlcbiAgICAgICAgaWYgKCFyZXBsYWNlbWVudE1hcC5oYXMoa2V5KSkge1xuICAgICAgICAgIHZhciBkZWxldGVkID0gX3RoaXM2W1wiZGVsZXRlXCJdKGtleSk7IC8vIFdhcyB0aGUga2V5IHJlbW92ZWQ/XG5cblxuICAgICAgICAgIGlmIChkZWxldGVkKSB7XG4gICAgICAgICAgICAvLyBfa2V5c0F0b20ucmVwb3J0Q2hhbmdlZCgpIHdhcyBhbHJlYWR5IGNhbGxlZFxuICAgICAgICAgICAga2V5c1JlcG9ydENoYW5nZWRDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBEZWxldGUgcHJldmVudGVkIGJ5IGludGVyY2VwdG9yXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBfdGhpczYuZGF0YV8uZ2V0KGtleSk7XG5cbiAgICAgICAgICAgIG9yZGVyZWREYXRhLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gLy8gTWVyZ2UgZW50cmllc1xuXG5cbiAgICAgIGZvciAodmFyIF9pdGVyYXRvcjQgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKHJlcGxhY2VtZW50TWFwLmVudHJpZXMoKSksIF9zdGVwNDsgIShfc3RlcDQgPSBfaXRlcmF0b3I0KCkpLmRvbmU7KSB7XG4gICAgICAgIHZhciBfc3RlcDQkdmFsdWUgPSBfc3RlcDQudmFsdWUsXG4gICAgICAgICAgICBfa2V5ID0gX3N0ZXA0JHZhbHVlWzBdLFxuICAgICAgICAgICAgX3ZhbHVlID0gX3N0ZXA0JHZhbHVlWzFdO1xuXG4gICAgICAgIC8vIFdlIHdpbGwgd2FudCB0byBrbm93IHdoZXRoZXIgYSBuZXcga2V5IGlzIGFkZGVkXG4gICAgICAgIHZhciBrZXlFeGlzdGVkID0gX3RoaXM2LmRhdGFfLmhhcyhfa2V5KTsgLy8gQWRkIG9yIHVwZGF0ZSB2YWx1ZVxuXG5cbiAgICAgICAgX3RoaXM2LnNldChfa2V5LCBfdmFsdWUpOyAvLyBUaGUgYWRkaXRpb24gY291bGQgaGF2ZSBiZWVuIHByZXZlbnQgYnkgaW50ZXJjZXB0b3JcblxuXG4gICAgICAgIGlmIChfdGhpczYuZGF0YV8uaGFzKF9rZXkpKSB7XG4gICAgICAgICAgLy8gVGhlIHVwZGF0ZSBjb3VsZCBoYXZlIGJlZW4gcHJldmVudGVkIGJ5IGludGVyY2VwdG9yXG4gICAgICAgICAgLy8gYW5kIGFsc28gd2Ugd2FudCB0byBwcmVzZXJ2ZSBleGlzdGluZyB2YWx1ZXNcbiAgICAgICAgICAvLyBzbyB1c2UgdmFsdWUgZnJvbSBfZGF0YSBtYXAgKGluc3RlYWQgb2YgcmVwbGFjZW1lbnQgbWFwKVxuICAgICAgICAgIHZhciBfdmFsdWUyID0gX3RoaXM2LmRhdGFfLmdldChfa2V5KTtcblxuICAgICAgICAgIG9yZGVyZWREYXRhLnNldChfa2V5LCBfdmFsdWUyKTsgLy8gV2FzIGEgbmV3IGtleSBhZGRlZD9cblxuICAgICAgICAgIGlmICgha2V5RXhpc3RlZCkge1xuICAgICAgICAgICAgLy8gX2tleXNBdG9tLnJlcG9ydENoYW5nZWQoKSB3YXMgYWxyZWFkeSBjYWxsZWRcbiAgICAgICAgICAgIGtleXNSZXBvcnRDaGFuZ2VkQ2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gLy8gQ2hlY2sgZm9yIHBvc3NpYmxlIGtleSBvcmRlciBjaGFuZ2VcblxuXG4gICAgICBpZiAoIWtleXNSZXBvcnRDaGFuZ2VkQ2FsbGVkKSB7XG4gICAgICAgIGlmIChfdGhpczYuZGF0YV8uc2l6ZSAhPT0gb3JkZXJlZERhdGEuc2l6ZSkge1xuICAgICAgICAgIC8vIElmIHNpemUgZGlmZmVycywga2V5cyBhcmUgZGVmaW5pdGVseSBtb2RpZmllZFxuICAgICAgICAgIF90aGlzNi5rZXlzQXRvbV8ucmVwb3J0Q2hhbmdlZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBpdGVyMSA9IF90aGlzNi5kYXRhXy5rZXlzKCk7XG5cbiAgICAgICAgICB2YXIgaXRlcjIgPSBvcmRlcmVkRGF0YS5rZXlzKCk7XG4gICAgICAgICAgdmFyIG5leHQxID0gaXRlcjEubmV4dCgpO1xuICAgICAgICAgIHZhciBuZXh0MiA9IGl0ZXIyLm5leHQoKTtcblxuICAgICAgICAgIHdoaWxlICghbmV4dDEuZG9uZSkge1xuICAgICAgICAgICAgaWYgKG5leHQxLnZhbHVlICE9PSBuZXh0Mi52YWx1ZSkge1xuICAgICAgICAgICAgICBfdGhpczYua2V5c0F0b21fLnJlcG9ydENoYW5nZWQoKTtcblxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV4dDEgPSBpdGVyMS5uZXh0KCk7XG4gICAgICAgICAgICBuZXh0MiA9IGl0ZXIyLm5leHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gLy8gVXNlIGNvcnJlY3RseSBvcmRlcmVkIG1hcFxuXG5cbiAgICAgIF90aGlzNi5kYXRhXyA9IG9yZGVyZWREYXRhO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgT2JzZXJ2YWJsZU1hcF1cIjtcbiAgfTtcblxuICBfcHJvdG8udG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMpO1xuICB9O1xuXG4gIC8qKlxyXG4gICAqIE9ic2VydmVzIHRoaXMgb2JqZWN0LiBUcmlnZ2VycyBmb3IgdGhlIGV2ZW50cyAnYWRkJywgJ3VwZGF0ZScgYW5kICdkZWxldGUnLlxyXG4gICAqIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L29ic2VydmVcclxuICAgKiBmb3IgY2FsbGJhY2sgZGV0YWlsc1xyXG4gICAqL1xuICBfcHJvdG8ub2JzZXJ2ZV8gPSBmdW5jdGlvbiBvYnNlcnZlXyhsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBmaXJlSW1tZWRpYXRlbHkgPT09IHRydWUpIGRpZShcImBvYnNlcnZlYCBkb2Vzbid0IHN1cHBvcnQgZmlyZUltbWVkaWF0ZWx5PXRydWUgaW4gY29tYmluYXRpb24gd2l0aCBtYXBzLlwiKTtcbiAgICByZXR1cm4gcmVnaXN0ZXJMaXN0ZW5lcih0aGlzLCBsaXN0ZW5lcik7XG4gIH07XG5cbiAgX3Byb3RvLmludGVyY2VwdF8gPSBmdW5jdGlvbiBpbnRlcmNlcHRfKGhhbmRsZXIpIHtcbiAgICByZXR1cm4gcmVnaXN0ZXJJbnRlcmNlcHRvcih0aGlzLCBoYW5kbGVyKTtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoT2JzZXJ2YWJsZU1hcCwgW3tcbiAgICBrZXk6IFwic2l6ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdGhpcy5rZXlzQXRvbV8ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgIHJldHVybiB0aGlzLmRhdGFfLnNpemU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBfU3ltYm9sJHRvU3RyaW5nVGFnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFwiTWFwXCI7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE9ic2VydmFibGVNYXA7XG59KCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG52YXIgaXNPYnNlcnZhYmxlTWFwID0gLyojX19QVVJFX18qL2NyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJPYnNlcnZhYmxlTWFwXCIsIE9ic2VydmFibGVNYXApO1xuXG5mdW5jdGlvbiBjb252ZXJ0VG9NYXAoZGF0YVN0cnVjdHVyZSkge1xuICBpZiAoaXNFUzZNYXAoZGF0YVN0cnVjdHVyZSkgfHwgaXNPYnNlcnZhYmxlTWFwKGRhdGFTdHJ1Y3R1cmUpKSB7XG4gICAgcmV0dXJuIGRhdGFTdHJ1Y3R1cmU7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhU3RydWN0dXJlKSkge1xuICAgIHJldHVybiBuZXcgTWFwKGRhdGFTdHJ1Y3R1cmUpO1xuICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QoZGF0YVN0cnVjdHVyZSkpIHtcbiAgICB2YXIgbWFwID0gbmV3IE1hcCgpO1xuXG4gICAgZm9yICh2YXIga2V5IGluIGRhdGFTdHJ1Y3R1cmUpIHtcbiAgICAgIG1hcC5zZXQoa2V5LCBkYXRhU3RydWN0dXJlW2tleV0pO1xuICAgIH1cblxuICAgIHJldHVybiBtYXA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZSgyMSwgZGF0YVN0cnVjdHVyZSk7XG4gIH1cbn1cblxudmFyIF9TeW1ib2wkaXRlcmF0b3IkMSwgX1N5bWJvbCR0b1N0cmluZ1RhZyQxO1xudmFyIE9ic2VydmFibGVTZXRNYXJrZXIgPSB7fTtcbl9TeW1ib2wkaXRlcmF0b3IkMSA9IFN5bWJvbC5pdGVyYXRvcjtcbl9TeW1ib2wkdG9TdHJpbmdUYWckMSA9IFN5bWJvbC50b1N0cmluZ1RhZztcbnZhciBPYnNlcnZhYmxlU2V0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gT2JzZXJ2YWJsZVNldChpbml0aWFsRGF0YSwgZW5oYW5jZXIsIG5hbWVfKSB7XG4gICAgaWYgKGVuaGFuY2VyID09PSB2b2lkIDApIHtcbiAgICAgIGVuaGFuY2VyID0gZGVlcEVuaGFuY2VyO1xuICAgIH1cblxuICAgIGlmIChuYW1lXyA9PT0gdm9pZCAwKSB7XG4gICAgICBuYW1lXyA9IFwiT2JzZXJ2YWJsZVNldEBcIiArIGdldE5leHRJZCgpO1xuICAgIH1cblxuICAgIHRoaXMubmFtZV8gPSB2b2lkIDA7XG4gICAgdGhpc1skbW9ieF0gPSBPYnNlcnZhYmxlU2V0TWFya2VyO1xuICAgIHRoaXMuZGF0YV8gPSBuZXcgU2V0KCk7XG4gICAgdGhpcy5hdG9tXyA9IHZvaWQgMDtcbiAgICB0aGlzLmNoYW5nZUxpc3RlbmVyc18gPSB2b2lkIDA7XG4gICAgdGhpcy5pbnRlcmNlcHRvcnNfID0gdm9pZCAwO1xuICAgIHRoaXMuZGVoYW5jZXIgPSB2b2lkIDA7XG4gICAgdGhpcy5lbmhhbmNlcl8gPSB2b2lkIDA7XG4gICAgdGhpcy5uYW1lXyA9IG5hbWVfO1xuXG4gICAgaWYgKCFpc0Z1bmN0aW9uKFNldCkpIHtcbiAgICAgIGRpZSgyMik7XG4gICAgfVxuXG4gICAgdGhpcy5hdG9tXyA9IGNyZWF0ZUF0b20odGhpcy5uYW1lXyk7XG5cbiAgICB0aGlzLmVuaGFuY2VyXyA9IGZ1bmN0aW9uIChuZXdWLCBvbGRWKSB7XG4gICAgICByZXR1cm4gZW5oYW5jZXIobmV3Viwgb2xkViwgbmFtZV8pO1xuICAgIH07XG5cbiAgICBpZiAoaW5pdGlhbERhdGEpIHtcbiAgICAgIHRoaXMucmVwbGFjZShpbml0aWFsRGF0YSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIF9wcm90byA9IE9ic2VydmFibGVTZXQucHJvdG90eXBlO1xuXG4gIF9wcm90by5kZWhhbmNlVmFsdWVfID0gZnVuY3Rpb24gZGVoYW5jZVZhbHVlXyh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmRlaGFuY2VyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlaGFuY2VyKHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRyYW5zYWN0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAgIHVudHJhY2tlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UoX3RoaXMuZGF0YV8udmFsdWVzKCkpLCBfc3RlcDsgIShfc3RlcCA9IF9pdGVyYXRvcigpKS5kb25lOykge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgICAgX3RoaXNbXCJkZWxldGVcIl0odmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tGbiwgdGhpc0FyZykge1xuICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKHRoaXMpLCBfc3RlcDI7ICEoX3N0ZXAyID0gX2l0ZXJhdG9yMigpKS5kb25lOykge1xuICAgICAgdmFyIHZhbHVlID0gX3N0ZXAyLnZhbHVlO1xuICAgICAgY2FsbGJhY2tGbi5jYWxsKHRoaXNBcmcsIHZhbHVlLCB2YWx1ZSwgdGhpcyk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5hZGQgPSBmdW5jdGlvbiBhZGQodmFsdWUpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGNoZWNrSWZTdGF0ZU1vZGlmaWNhdGlvbnNBcmVBbGxvd2VkKHRoaXMuYXRvbV8pO1xuXG4gICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xuICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XG4gICAgICAgIHR5cGU6IEFERCxcbiAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICBuZXdWYWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgICAgaWYgKCFjaGFuZ2UpIHJldHVybiB0aGlzOyAvLyBpZGVhbGx5LCB2YWx1ZSA9IGNoYW5nZS52YWx1ZSB3b3VsZCBiZSBkb25lIGhlcmUsIHNvIHRoYXQgdmFsdWVzIGNhbiBiZVxuICAgICAgLy8gY2hhbmdlZCBieSBpbnRlcmNlcHRvci4gU2FtZSBhcHBsaWVzIGZvciBvdGhlciBTZXQgYW5kIE1hcCBhcGkncy5cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaGFzKHZhbHVlKSkge1xuICAgICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIuZGF0YV8uYWRkKF90aGlzMi5lbmhhbmNlcl8odmFsdWUsIHVuZGVmaW5lZCkpO1xuXG4gICAgICAgIF90aGlzMi5hdG9tXy5yZXBvcnRDaGFuZ2VkKCk7XG4gICAgICB9KTtcbiAgICAgIHZhciBub3RpZnlTcHkgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgaXNTcHlFbmFibGVkKCk7XG4gICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpO1xuXG4gICAgICB2YXIgX2NoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHkgPyB7XG4gICAgICAgIG9ic2VydmFibGVLaW5kOiBcInNldFwiLFxuICAgICAgICBkZWJ1Z09iamVjdE5hbWU6IHRoaXMubmFtZV8sXG4gICAgICAgIHR5cGU6IEFERCxcbiAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICBuZXdWYWx1ZTogdmFsdWVcbiAgICAgIH0gOiBudWxsO1xuXG4gICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgc3B5UmVwb3J0U3RhcnQoX2NoYW5nZSk7XG4gICAgICBpZiAobm90aWZ5KSBub3RpZnlMaXN0ZW5lcnModGhpcywgX2NoYW5nZSk7XG4gICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgc3B5UmVwb3J0RW5kKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvW1wiZGVsZXRlXCJdID0gZnVuY3Rpb24gX2RlbGV0ZSh2YWx1ZSkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xuICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XG4gICAgICAgIHR5cGU6IERFTEVURSxcbiAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICBvbGRWYWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgICAgaWYgKCFjaGFuZ2UpIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXModmFsdWUpKSB7XG4gICAgICB2YXIgbm90aWZ5U3B5ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGlzU3B5RW5hYmxlZCgpO1xuICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKTtcblxuICAgICAgdmFyIF9jaGFuZ2UyID0gbm90aWZ5IHx8IG5vdGlmeVNweSA/IHtcbiAgICAgICAgb2JzZXJ2YWJsZUtpbmQ6IFwic2V0XCIsXG4gICAgICAgIGRlYnVnT2JqZWN0TmFtZTogdGhpcy5uYW1lXyxcbiAgICAgICAgdHlwZTogREVMRVRFLFxuICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgIG9sZFZhbHVlOiB2YWx1ZVxuICAgICAgfSA6IG51bGw7XG5cbiAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSBzcHlSZXBvcnRTdGFydChfY2hhbmdlMik7XG4gICAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMy5hdG9tXy5yZXBvcnRDaGFuZ2VkKCk7XG5cbiAgICAgICAgX3RoaXMzLmRhdGFfW1wiZGVsZXRlXCJdKHZhbHVlKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKG5vdGlmeSkgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIF9jaGFuZ2UyKTtcbiAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSBzcHlSZXBvcnRFbmQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBfcHJvdG8uaGFzID0gZnVuY3Rpb24gaGFzKHZhbHVlKSB7XG4gICAgdGhpcy5hdG9tXy5yZXBvcnRPYnNlcnZlZCgpO1xuICAgIHJldHVybiB0aGlzLmRhdGFfLmhhcyh0aGlzLmRlaGFuY2VWYWx1ZV8odmFsdWUpKTtcbiAgfTtcblxuICBfcHJvdG8uZW50cmllcyA9IGZ1bmN0aW9uIGVudHJpZXMoKSB7XG4gICAgdmFyIG5leHRJbmRleCA9IDA7XG4gICAgdmFyIGtleXMgPSBBcnJheS5mcm9tKHRoaXMua2V5cygpKTtcbiAgICB2YXIgdmFsdWVzID0gQXJyYXkuZnJvbSh0aGlzLnZhbHVlcygpKTtcbiAgICByZXR1cm4gbWFrZUl0ZXJhYmxlKHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgIHZhciBpbmRleCA9IG5leHRJbmRleDtcbiAgICAgICAgbmV4dEluZGV4ICs9IDE7XG4gICAgICAgIHJldHVybiBpbmRleCA8IHZhbHVlcy5sZW5ndGggPyB7XG4gICAgICAgICAgdmFsdWU6IFtrZXlzW2luZGV4XSwgdmFsdWVzW2luZGV4XV0sXG4gICAgICAgICAgZG9uZTogZmFsc2VcbiAgICAgICAgfSA6IHtcbiAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmtleXMgPSBmdW5jdGlvbiBrZXlzKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlcygpO1xuICB9O1xuXG4gIF9wcm90by52YWx1ZXMgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7XG4gICAgdGhpcy5hdG9tXy5yZXBvcnRPYnNlcnZlZCgpO1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgbmV4dEluZGV4ID0gMDtcbiAgICB2YXIgb2JzZXJ2YWJsZVZhbHVlcyA9IEFycmF5LmZyb20odGhpcy5kYXRhXy52YWx1ZXMoKSk7XG4gICAgcmV0dXJuIG1ha2VJdGVyYWJsZSh7XG4gICAgICBuZXh0OiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICByZXR1cm4gbmV4dEluZGV4IDwgb2JzZXJ2YWJsZVZhbHVlcy5sZW5ndGggPyB7XG4gICAgICAgICAgdmFsdWU6IHNlbGYuZGVoYW5jZVZhbHVlXyhvYnNlcnZhYmxlVmFsdWVzW25leHRJbmRleCsrXSksXG4gICAgICAgICAgZG9uZTogZmFsc2VcbiAgICAgICAgfSA6IHtcbiAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlKG90aGVyKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICBpZiAoaXNPYnNlcnZhYmxlU2V0KG90aGVyKSkge1xuICAgICAgb3RoZXIgPSBuZXcgU2V0KG90aGVyKTtcbiAgICB9XG5cbiAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvdGhlcikpIHtcbiAgICAgICAgX3RoaXM0LmNsZWFyKCk7XG5cbiAgICAgICAgb3RoZXIuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM0LmFkZCh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChpc0VTNlNldChvdGhlcikpIHtcbiAgICAgICAgX3RoaXM0LmNsZWFyKCk7XG5cbiAgICAgICAgb3RoZXIuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM0LmFkZCh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChvdGhlciAhPT0gbnVsbCAmJiBvdGhlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRpZShcIkNhbm5vdCBpbml0aWFsaXplIHNldCBmcm9tIFwiICsgb3RoZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5vYnNlcnZlXyA9IGZ1bmN0aW9uIG9ic2VydmVfKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICAvLyAuLi4gJ2ZpcmVJbW1lZGlhdGVseScgY291bGQgYWxzbyBiZSB0cnVlP1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgZmlyZUltbWVkaWF0ZWx5ID09PSB0cnVlKSBkaWUoXCJgb2JzZXJ2ZWAgZG9lc24ndCBzdXBwb3J0IGZpcmVJbW1lZGlhdGVseT10cnVlIGluIGNvbWJpbmF0aW9uIHdpdGggc2V0cy5cIik7XG4gICAgcmV0dXJuIHJlZ2lzdGVyTGlzdGVuZXIodGhpcywgbGlzdGVuZXIpO1xuICB9O1xuXG4gIF9wcm90by5pbnRlcmNlcHRfID0gZnVuY3Rpb24gaW50ZXJjZXB0XyhoYW5kbGVyKSB7XG4gICAgcmV0dXJuIHJlZ2lzdGVySW50ZXJjZXB0b3IodGhpcywgaGFuZGxlcik7XG4gIH07XG5cbiAgX3Byb3RvLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IE9ic2VydmFibGVTZXRdXCI7XG4gIH07XG5cbiAgX3Byb3RvW19TeW1ib2wkaXRlcmF0b3IkMV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVzKCk7XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKE9ic2VydmFibGVTZXQsIFt7XG4gICAga2V5OiBcInNpemVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHRoaXMuYXRvbV8ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgIHJldHVybiB0aGlzLmRhdGFfLnNpemU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBfU3ltYm9sJHRvU3RyaW5nVGFnJDEsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gXCJTZXRcIjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gT2JzZXJ2YWJsZVNldDtcbn0oKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbnZhciBpc09ic2VydmFibGVTZXQgPSAvKiNfX1BVUkVfXyovY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShcIk9ic2VydmFibGVTZXRcIiwgT2JzZXJ2YWJsZVNldCk7XG5cbnZhciBSRU1PVkUgPSBcInJlbW92ZVwiO1xudmFyIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbih0YXJnZXRfLCB2YWx1ZXNfLCBuYW1lXywgZGVmYXVsdEVuaGFuY2VyXykge1xuICAgIGlmICh2YWx1ZXNfID09PSB2b2lkIDApIHtcbiAgICAgIHZhbHVlc18gPSBuZXcgTWFwKCk7XG4gICAgfVxuXG4gICAgdGhpcy50YXJnZXRfID0gdm9pZCAwO1xuICAgIHRoaXMudmFsdWVzXyA9IHZvaWQgMDtcbiAgICB0aGlzLm5hbWVfID0gdm9pZCAwO1xuICAgIHRoaXMuZGVmYXVsdEVuaGFuY2VyXyA9IHZvaWQgMDtcbiAgICB0aGlzLmtleXNBdG9tXyA9IHZvaWQgMDtcbiAgICB0aGlzLmNoYW5nZUxpc3RlbmVyc18gPSB2b2lkIDA7XG4gICAgdGhpcy5pbnRlcmNlcHRvcnNfID0gdm9pZCAwO1xuICAgIHRoaXMucHJveHlfID0gdm9pZCAwO1xuICAgIHRoaXMucGVuZGluZ0tleXNfID0gdm9pZCAwO1xuICAgIHRoaXMua2V5c1ZhbHVlXyA9IFtdO1xuICAgIHRoaXMuaXNTdGFsZWRLZXlzVmFsdWVfID0gdHJ1ZTtcbiAgICB0aGlzLnRhcmdldF8gPSB0YXJnZXRfO1xuICAgIHRoaXMudmFsdWVzXyA9IHZhbHVlc187XG4gICAgdGhpcy5uYW1lXyA9IG5hbWVfO1xuICAgIHRoaXMuZGVmYXVsdEVuaGFuY2VyXyA9IGRlZmF1bHRFbmhhbmNlcl87XG4gICAgdGhpcy5rZXlzQXRvbV8gPSBuZXcgQXRvbShuYW1lXyArIFwiLmtleXNcIik7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVhZF8gPSBmdW5jdGlvbiByZWFkXyhrZXkpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZXNfLmdldChrZXkpLmdldCgpO1xuICB9O1xuXG4gIF9wcm90by53cml0ZV8gPSBmdW5jdGlvbiB3cml0ZV8oa2V5LCBuZXdWYWx1ZSkge1xuICAgIHZhciBpbnN0YW5jZSA9IHRoaXMudGFyZ2V0XztcbiAgICB2YXIgb2JzZXJ2YWJsZSA9IHRoaXMudmFsdWVzXy5nZXQoa2V5KTtcblxuICAgIGlmIChvYnNlcnZhYmxlIGluc3RhbmNlb2YgQ29tcHV0ZWRWYWx1ZSkge1xuICAgICAgb2JzZXJ2YWJsZS5zZXQobmV3VmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gaW50ZXJjZXB0XG5cblxuICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xuICAgICAgICB0eXBlOiBVUERBVEUsXG4gICAgICAgIG9iamVjdDogdGhpcy5wcm94eV8gfHwgaW5zdGFuY2UsXG4gICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICB9KTtcbiAgICAgIGlmICghY2hhbmdlKSByZXR1cm47XG4gICAgICBuZXdWYWx1ZSA9IGNoYW5nZS5uZXdWYWx1ZTtcbiAgICB9XG5cbiAgICBuZXdWYWx1ZSA9IG9ic2VydmFibGUucHJlcGFyZU5ld1ZhbHVlXyhuZXdWYWx1ZSk7IC8vIG5vdGlmeSBzcHkgJiBvYnNlcnZlcnNcblxuICAgIGlmIChuZXdWYWx1ZSAhPT0gZ2xvYmFsU3RhdGUuVU5DSEFOR0VEKSB7XG4gICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpO1xuICAgICAgdmFyIG5vdGlmeVNweSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBpc1NweUVuYWJsZWQoKTtcblxuICAgICAgdmFyIF9jaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5ID8ge1xuICAgICAgICB0eXBlOiBVUERBVEUsXG4gICAgICAgIG9ic2VydmFibGVLaW5kOiBcIm9iamVjdFwiLFxuICAgICAgICBkZWJ1Z09iamVjdE5hbWU6IHRoaXMubmFtZV8sXG4gICAgICAgIG9iamVjdDogdGhpcy5wcm94eV8gfHwgaW5zdGFuY2UsXG4gICAgICAgIG9sZFZhbHVlOiBvYnNlcnZhYmxlLnZhbHVlXyxcbiAgICAgICAgbmFtZToga2V5LFxuICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgIH0gOiBudWxsO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG5vdGlmeVNweSkgc3B5UmVwb3J0U3RhcnQoX2NoYW5nZSk7XG4gICAgICBvYnNlcnZhYmxlLnNldE5ld1ZhbHVlXyhuZXdWYWx1ZSk7XG4gICAgICBpZiAobm90aWZ5KSBub3RpZnlMaXN0ZW5lcnModGhpcywgX2NoYW5nZSk7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG5vdGlmeVNweSkgc3B5UmVwb3J0RW5kKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5oYXNfID0gZnVuY3Rpb24gaGFzXyhrZXkpIHtcbiAgICB2YXIgbWFwID0gdGhpcy5wZW5kaW5nS2V5c18gfHwgKHRoaXMucGVuZGluZ0tleXNfID0gbmV3IE1hcCgpKTtcbiAgICB2YXIgZW50cnkgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKGVudHJ5KSByZXR1cm4gZW50cnkuZ2V0KCk7ZWxzZSB7XG4gICAgICB2YXIgZXhpc3RzID0gISF0aGlzLnZhbHVlc18uZ2V0KGtleSk7IC8vIFBvc3NpYmxlIG9wdGltaXphdGlvbjogRG9uJ3QgaGF2ZSBhIHNlcGFyYXRlIG1hcCBmb3Igbm9uIGV4aXN0aW5nIGtleXMsXG4gICAgICAvLyBidXQgc3RvcmUgdGhlbSBpbiB0aGUgdmFsdWVzIG1hcCBpbnN0ZWFkLCB1c2luZyBhIHNwZWNpYWwgc3ltYm9sIHRvIGRlbm90ZSBcIm5vdCBleGlzdGluZ1wiXG5cbiAgICAgIGVudHJ5ID0gbmV3IE9ic2VydmFibGVWYWx1ZShleGlzdHMsIHJlZmVyZW5jZUVuaGFuY2VyLCB0aGlzLm5hbWVfICsgXCIuXCIgKyBzdHJpbmdpZnlLZXkoa2V5KSArIFwiP1wiLCBmYWxzZSk7XG4gICAgICBtYXAuc2V0KGtleSwgZW50cnkpO1xuICAgICAgcmV0dXJuIGVudHJ5LmdldCgpOyAvLyByZWFkIHRvIHN1YnNjcmliZVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uYWRkT2JzZXJ2YWJsZVByb3BfID0gZnVuY3Rpb24gYWRkT2JzZXJ2YWJsZVByb3BfKHByb3BOYW1lLCBuZXdWYWx1ZSwgZW5oYW5jZXIpIHtcbiAgICBpZiAoZW5oYW5jZXIgPT09IHZvaWQgMCkge1xuICAgICAgZW5oYW5jZXIgPSB0aGlzLmRlZmF1bHRFbmhhbmNlcl87XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldCA9IHRoaXMudGFyZ2V0XztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSBhc3NlcnRQcm9wZXJ0eUNvbmZpZ3VyYWJsZSh0YXJnZXQsIHByb3BOYW1lKTtcblxuICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xuICAgICAgICBvYmplY3Q6IHRoaXMucHJveHlfIHx8IHRhcmdldCxcbiAgICAgICAgbmFtZTogcHJvcE5hbWUsXG4gICAgICAgIHR5cGU6IEFERCxcbiAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICB9KTtcbiAgICAgIGlmICghY2hhbmdlKSByZXR1cm47XG4gICAgICBuZXdWYWx1ZSA9IGNoYW5nZS5uZXdWYWx1ZTtcbiAgICB9XG5cbiAgICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlVmFsdWUobmV3VmFsdWUsIGVuaGFuY2VyLCB0aGlzLm5hbWVfICsgXCIuXCIgKyBzdHJpbmdpZnlLZXkocHJvcE5hbWUpLCBmYWxzZSk7XG4gICAgdGhpcy52YWx1ZXNfLnNldChwcm9wTmFtZSwgb2JzZXJ2YWJsZSk7XG4gICAgbmV3VmFsdWUgPSBvYnNlcnZhYmxlLnZhbHVlXzsgLy8gb2JzZXJ2YWJsZVZhbHVlIG1pZ2h0IGhhdmUgY2hhbmdlZCBpdFxuXG4gICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wTmFtZSwgZ2VuZXJhdGVPYnNlcnZhYmxlUHJvcENvbmZpZyhwcm9wTmFtZSkpO1xuICAgIHRoaXMubm90aWZ5UHJvcGVydHlBZGRpdGlvbl8ocHJvcE5hbWUsIG5ld1ZhbHVlKTtcbiAgfTtcblxuICBfcHJvdG8uYWRkQ29tcHV0ZWRQcm9wXyA9IGZ1bmN0aW9uIGFkZENvbXB1dGVkUHJvcF8ocHJvcGVydHlPd25lciwgLy8gd2hlcmUgaXMgdGhlIHByb3BlcnR5IGRlY2xhcmVkP1xuICBwcm9wTmFtZSwgb3B0aW9ucykge1xuICAgIHZhciB0YXJnZXQgPSB0aGlzLnRhcmdldF87XG4gICAgb3B0aW9ucy5uYW1lID0gb3B0aW9ucy5uYW1lIHx8IHRoaXMubmFtZV8gKyBcIi5cIiArIHN0cmluZ2lmeUtleShwcm9wTmFtZSk7XG4gICAgb3B0aW9ucy5jb250ZXh0ID0gdGhpcy5wcm94eV8gfHwgdGFyZ2V0O1xuICAgIHRoaXMudmFsdWVzXy5zZXQocHJvcE5hbWUsIG5ldyBDb21wdXRlZFZhbHVlKG9wdGlvbnMpKTsgLy8gRG9lc24ndCBzZWVtIHdlIG5lZWQgdGhpcyBjb25kaXRpb246XG4gICAgLy8gaWYgKHByb3BlcnR5T3duZXIgPT09IHRhcmdldCB8fCBpc1Byb3BlcnR5Q29uZmlndXJhYmxlKHByb3BlcnR5T3duZXIsIHByb3BOYW1lKSlcblxuICAgIGRlZmluZVByb3BlcnR5KHByb3BlcnR5T3duZXIsIHByb3BOYW1lLCBnZW5lcmF0ZUNvbXB1dGVkUHJvcENvbmZpZyhwcm9wTmFtZSkpO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmVfID0gZnVuY3Rpb24gcmVtb3ZlXyhrZXkpIHtcbiAgICBpZiAoIXRoaXMudmFsdWVzXy5oYXMoa2V5KSkgcmV0dXJuO1xuICAgIHZhciB0YXJnZXQgPSB0aGlzLnRhcmdldF87XG5cbiAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XG4gICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcbiAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5XyB8fCB0YXJnZXQsXG4gICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgdHlwZTogUkVNT1ZFXG4gICAgICB9KTtcbiAgICAgIGlmICghY2hhbmdlKSByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHN0YXJ0QmF0Y2goKTtcbiAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG4gICAgICB2YXIgbm90aWZ5U3B5ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGlzU3B5RW5hYmxlZCgpO1xuICAgICAgdmFyIG9sZE9ic2VydmFibGUgPSB0aGlzLnZhbHVlc18uZ2V0KGtleSk7XG4gICAgICB2YXIgb2xkVmFsdWUgPSBvbGRPYnNlcnZhYmxlICYmIG9sZE9ic2VydmFibGUuZ2V0KCk7XG4gICAgICBvbGRPYnNlcnZhYmxlICYmIG9sZE9ic2VydmFibGUuc2V0KHVuZGVmaW5lZCk7IC8vIG5vdGlmeSBrZXkgYW5kIGtleXNldCBsaXN0ZW5lcnNcblxuICAgICAgdGhpcy5yZXBvcnRLZXlzQ2hhbmdlZCgpO1xuICAgICAgdGhpcy52YWx1ZXNfW1wiZGVsZXRlXCJdKGtleSk7XG5cbiAgICAgIGlmICh0aGlzLnBlbmRpbmdLZXlzXykge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnBlbmRpbmdLZXlzXy5nZXQoa2V5KTtcbiAgICAgICAgaWYgKGVudHJ5KSBlbnRyeS5zZXQoZmFsc2UpO1xuICAgICAgfSAvLyBkZWxldGUgdGhlIHByb3BcblxuXG4gICAgICBkZWxldGUgdGhpcy50YXJnZXRfW2tleV07XG5cbiAgICAgIHZhciBfY2hhbmdlMiA9IG5vdGlmeSB8fCBub3RpZnlTcHkgPyB7XG4gICAgICAgIHR5cGU6IFJFTU9WRSxcbiAgICAgICAgb2JzZXJ2YWJsZUtpbmQ6IFwib2JqZWN0XCIsXG4gICAgICAgIG9iamVjdDogdGhpcy5wcm94eV8gfHwgdGFyZ2V0LFxuICAgICAgICBkZWJ1Z09iamVjdE5hbWU6IHRoaXMubmFtZV8sXG4gICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgbmFtZToga2V5XG4gICAgICB9IDogbnVsbDtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBub3RpZnlTcHkpIHNweVJlcG9ydFN0YXJ0KF9jaGFuZ2UyKTtcbiAgICAgIGlmIChub3RpZnkpIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBfY2hhbmdlMik7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG5vdGlmeVNweSkgc3B5UmVwb3J0RW5kKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGVuZEJhdGNoKCk7XG4gICAgfVxuICB9XG4gIC8qKlxyXG4gICAqIE9ic2VydmVzIHRoaXMgb2JqZWN0LiBUcmlnZ2VycyBmb3IgdGhlIGV2ZW50cyAnYWRkJywgJ3VwZGF0ZScgYW5kICdkZWxldGUnLlxyXG4gICAqIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L29ic2VydmVcclxuICAgKiBmb3IgY2FsbGJhY2sgZGV0YWlsc1xyXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm9ic2VydmVfID0gZnVuY3Rpb24gb2JzZXJ2ZV8oY2FsbGJhY2ssIGZpcmVJbW1lZGlhdGVseSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgZmlyZUltbWVkaWF0ZWx5ID09PSB0cnVlKSBkaWUoXCJgb2JzZXJ2ZWAgZG9lc24ndCBzdXBwb3J0IHRoZSBmaXJlIGltbWVkaWF0ZWx5IHByb3BlcnR5IGZvciBvYnNlcnZhYmxlIG9iamVjdHMuXCIpO1xuICAgIHJldHVybiByZWdpc3Rlckxpc3RlbmVyKHRoaXMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICBfcHJvdG8uaW50ZXJjZXB0XyA9IGZ1bmN0aW9uIGludGVyY2VwdF8oaGFuZGxlcikge1xuICAgIHJldHVybiByZWdpc3RlckludGVyY2VwdG9yKHRoaXMsIGhhbmRsZXIpO1xuICB9O1xuXG4gIF9wcm90by5ub3RpZnlQcm9wZXJ0eUFkZGl0aW9uXyA9IGZ1bmN0aW9uIG5vdGlmeVByb3BlcnR5QWRkaXRpb25fKGtleSwgbmV3VmFsdWUpIHtcbiAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpO1xuICAgIHZhciBub3RpZnlTcHkgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgaXNTcHlFbmFibGVkKCk7XG4gICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHkgPyB7XG4gICAgICB0eXBlOiBBREQsXG4gICAgICBvYnNlcnZhYmxlS2luZDogXCJvYmplY3RcIixcbiAgICAgIGRlYnVnT2JqZWN0TmFtZTogdGhpcy5uYW1lXyxcbiAgICAgIG9iamVjdDogdGhpcy5wcm94eV8gfHwgdGhpcy50YXJnZXRfLFxuICAgICAgbmFtZToga2V5LFxuICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgfSA6IG51bGw7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBub3RpZnlTcHkpIHNweVJlcG9ydFN0YXJ0KGNoYW5nZSk7XG4gICAgaWYgKG5vdGlmeSkgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIGNoYW5nZSk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBub3RpZnlTcHkpIHNweVJlcG9ydEVuZCgpO1xuXG4gICAgaWYgKHRoaXMucGVuZGluZ0tleXNfKSB7XG4gICAgICB2YXIgZW50cnkgPSB0aGlzLnBlbmRpbmdLZXlzXy5nZXQoa2V5KTtcbiAgICAgIGlmIChlbnRyeSkgZW50cnkuc2V0KHRydWUpO1xuICAgIH1cblxuICAgIHRoaXMucmVwb3J0S2V5c0NoYW5nZWQoKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0S2V5c18gPSBmdW5jdGlvbiBnZXRLZXlzXygpIHtcbiAgICB0aGlzLmtleXNBdG9tXy5yZXBvcnRPYnNlcnZlZCgpO1xuXG4gICAgaWYgKCF0aGlzLmlzU3RhbGVkS2V5c1ZhbHVlXykge1xuICAgICAgcmV0dXJuIHRoaXMua2V5c1ZhbHVlXztcbiAgICB9IC8vIHJldHVybiBSZWZsZWN0Lm93bktleXModGhpcy52YWx1ZXMpIGFzIGFueVxuXG5cbiAgICB0aGlzLmtleXNWYWx1ZV8gPSBbXTtcblxuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UodGhpcy52YWx1ZXNfKSwgX3N0ZXA7ICEoX3N0ZXAgPSBfaXRlcmF0b3IoKSkuZG9uZTspIHtcbiAgICAgIHZhciBfc3RlcCR2YWx1ZSA9IF9zdGVwLnZhbHVlLFxuICAgICAgICAgIGtleSA9IF9zdGVwJHZhbHVlWzBdLFxuICAgICAgICAgIHZhbHVlID0gX3N0ZXAkdmFsdWVbMV07XG4gICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYnNlcnZhYmxlVmFsdWUpIHRoaXMua2V5c1ZhbHVlXy5wdXNoKGtleSk7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgT2JqZWN0LmZyZWV6ZSh0aGlzLmtleXNWYWx1ZV8pO1xuICAgIHRoaXMuaXNTdGFsZWRLZXlzVmFsdWVfID0gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXMua2V5c1ZhbHVlXztcbiAgfTtcblxuICBfcHJvdG8ucmVwb3J0S2V5c0NoYW5nZWQgPSBmdW5jdGlvbiByZXBvcnRLZXlzQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmlzU3RhbGVkS2V5c1ZhbHVlXyA9IHRydWU7XG4gICAgdGhpcy5rZXlzQXRvbV8ucmVwb3J0Q2hhbmdlZCgpO1xuICB9O1xuXG4gIHJldHVybiBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb247XG59KCk7XG5mdW5jdGlvbiBhc09ic2VydmFibGVPYmplY3QodGFyZ2V0LCBuYW1lLCBkZWZhdWx0RW5oYW5jZXIpIHtcbiAgaWYgKG5hbWUgPT09IHZvaWQgMCkge1xuICAgIG5hbWUgPSBcIlwiO1xuICB9XG5cbiAgaWYgKGRlZmF1bHRFbmhhbmNlciA9PT0gdm9pZCAwKSB7XG4gICAgZGVmYXVsdEVuaGFuY2VyID0gZGVlcEVuaGFuY2VyO1xuICB9XG5cbiAgaWYgKGhhc1Byb3AodGFyZ2V0LCAkbW9ieCkpIHJldHVybiB0YXJnZXRbJG1vYnhdO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFPYmplY3QuaXNFeHRlbnNpYmxlKHRhcmdldCkpIGRpZShcIkNhbm5vdCBtYWtlIHRoZSBkZXNpZ25hdGVkIG9iamVjdCBvYnNlcnZhYmxlOyBpdCBpcyBub3QgZXh0ZW5zaWJsZVwiKTtcblxuICBpZiAoIW5hbWUpIHtcbiAgICBpZiAoaXNQbGFpbk9iamVjdCh0YXJnZXQpKSB7XG4gICAgICBuYW1lID0gXCJPYnNlcnZhYmxlT2JqZWN0QFwiICsgZ2V0TmV4dElkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hbWUgPSAodGFyZ2V0LmNvbnN0cnVjdG9yLm5hbWUgfHwgXCJPYnNlcnZhYmxlT2JqZWN0XCIpICsgXCJAXCIgKyBnZXROZXh0SWQoKTtcbiAgICB9XG4gIH1cblxuICB2YXIgYWRtID0gbmV3IE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbih0YXJnZXQsIG5ldyBNYXAoKSwgc3RyaW5naWZ5S2V5KG5hbWUpLCBkZWZhdWx0RW5oYW5jZXIpO1xuICBhZGRIaWRkZW5Qcm9wKHRhcmdldCwgJG1vYngsIGFkbSk7XG4gIHJldHVybiBhZG07XG59XG52YXIgb2JzZXJ2YWJsZVByb3BlcnR5Q29uZmlncyA9IC8qI19fUFVSRV9fKi9PYmplY3QuY3JlYXRlKG51bGwpO1xudmFyIGNvbXB1dGVkUHJvcGVydHlDb25maWdzID0gLyojX19QVVJFX18qL09iamVjdC5jcmVhdGUobnVsbCk7XG5mdW5jdGlvbiBnZW5lcmF0ZU9ic2VydmFibGVQcm9wQ29uZmlnKHByb3BOYW1lKSB7XG4gIHJldHVybiBvYnNlcnZhYmxlUHJvcGVydHlDb25maWdzW3Byb3BOYW1lXSB8fCAob2JzZXJ2YWJsZVByb3BlcnR5Q29uZmlnc1twcm9wTmFtZV0gPSB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpc1skbW9ieF0ucmVhZF8ocHJvcE5hbWUpO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodikge1xuICAgICAgdGhpc1skbW9ieF0ud3JpdGVfKHByb3BOYW1lLCB2KTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVDb21wdXRlZFByb3BDb25maWcocHJvcE5hbWUpIHtcbiAgcmV0dXJuIGNvbXB1dGVkUHJvcGVydHlDb25maWdzW3Byb3BOYW1lXSB8fCAoY29tcHV0ZWRQcm9wZXJ0eUNvbmZpZ3NbcHJvcE5hbWVdID0ge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzWyRtb2J4XS5yZWFkXyhwcm9wTmFtZSk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgICB0aGlzWyRtb2J4XS53cml0ZV8ocHJvcE5hbWUsIHYpO1xuICAgIH1cbiAgfSk7XG59XG52YXIgaXNPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24gPSAvKiNfX1BVUkVfXyovY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShcIk9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvblwiLCBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24pO1xuZnVuY3Rpb24gaXNPYnNlcnZhYmxlT2JqZWN0KHRoaW5nKSB7XG4gIGlmIChpc09iamVjdCh0aGluZykpIHtcbiAgICByZXR1cm4gaXNPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24odGhpbmdbJG1vYnhdKTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXHJcbiAqIFRoaXMgYXJyYXkgYnVmZmVyIGNvbnRhaW5zIHR3byBsaXN0cyBvZiBwcm9wZXJ0aWVzLCBzbyB0aGF0IGFsbCBhcnJheXNcclxuICogY2FuIHJlY3ljbGUgdGhlaXIgcHJvcGVydHkgZGVmaW5pdGlvbnMsIHdoaWNoIHNpZ25pZmljYW50bHkgaW1wcm92ZXMgcGVyZm9ybWFuY2Ugb2YgY3JlYXRpbmdcclxuICogcHJvcGVydGllcyBvbiB0aGUgZmx5LlxyXG4gKi9cblxudmFyIE9CU0VSVkFCTEVfQVJSQVlfQlVGRkVSX1NJWkUgPSAwOyAvLyBUeXBlc2NyaXB0IHdvcmthcm91bmQgdG8gbWFrZSBzdXJlIE9ic2VydmFibGVBcnJheSBleHRlbmRzIEFycmF5XG5cbnZhciBTdHViQXJyYXkgPSBmdW5jdGlvbiBTdHViQXJyYXkoKSB7fTtcblxuZnVuY3Rpb24gaW5oZXJpdChjdG9yLCBwcm90bykge1xuICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGN0b3IucHJvdG90eXBlLCBwcm90byk7XG4gIH0gZWxzZSBpZiAoY3Rvci5wcm90b3R5cGUuX19wcm90b19fICE9PSB1bmRlZmluZWQpIHtcbiAgICBjdG9yLnByb3RvdHlwZS5fX3Byb3RvX18gPSBwcm90bztcbiAgfSBlbHNlIHtcbiAgICBjdG9yLnByb3RvdHlwZSA9IHByb3RvO1xuICB9XG59XG5cbmluaGVyaXQoU3R1YkFycmF5LCBBcnJheS5wcm90b3R5cGUpOyAvLyBXZWV4IHByb3RvIGZyZWV6ZSBwcm90ZWN0aW9uIHdhcyBoZXJlLFxuLy8gYnV0IGl0IGlzIHVuY2xlYXIgd2h5IHRoZSBoYWNrIGlzIG5lZWQgYXMgTW9iWCBuZXZlciBjaGFuZ2VkIHRoZSBwcm90b3R5cGVcbi8vIGFueXdheSwgc28gcmVtb3ZlZCBpdCBpbiBWNlxuXG52YXIgTGVnYWN5T2JzZXJ2YWJsZUFycmF5ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfU3R1YkFycmF5KSB7XG4gIF9pbmhlcml0c0xvb3NlKExlZ2FjeU9ic2VydmFibGVBcnJheSwgX1N0dWJBcnJheSk7XG5cbiAgZnVuY3Rpb24gTGVnYWN5T2JzZXJ2YWJsZUFycmF5KGluaXRpYWxWYWx1ZXMsIGVuaGFuY2VyLCBuYW1lLCBvd25lZCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGlmIChuYW1lID09PSB2b2lkIDApIHtcbiAgICAgIG5hbWUgPSBcIk9ic2VydmFibGVBcnJheUBcIiArIGdldE5leHRJZCgpO1xuICAgIH1cblxuICAgIGlmIChvd25lZCA9PT0gdm9pZCAwKSB7XG4gICAgICBvd25lZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIF90aGlzID0gX1N0dWJBcnJheS5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgdmFyIGFkbSA9IG5ldyBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbihuYW1lLCBlbmhhbmNlciwgb3duZWQsIHRydWUpO1xuICAgIGFkbS5wcm94eV8gPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKTtcbiAgICBhZGRIaWRkZW5GaW5hbFByb3AoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksICRtb2J4LCBhZG0pO1xuXG4gICAgaWYgKGluaXRpYWxWYWx1ZXMgJiYgaW5pdGlhbFZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIHZhciBwcmV2ID0gYWxsb3dTdGF0ZUNoYW5nZXNTdGFydCh0cnVlKTsgLy8gQHRzLWlnbm9yZVxuXG4gICAgICBfdGhpcy5zcGxpY2VXaXRoQXJyYXkoMCwgMCwgaW5pdGlhbFZhbHVlcyk7XG5cbiAgICAgIGFsbG93U3RhdGVDaGFuZ2VzRW5kKHByZXYpO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBMZWdhY3lPYnNlcnZhYmxlQXJyYXkucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQoKSB7XG4gICAgdGhpc1skbW9ieF0uYXRvbV8ucmVwb3J0T2JzZXJ2ZWQoKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcnJheXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcnJheXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkodGhpcy5zbGljZSgpLCAvL0B0cy1pZ25vcmVcbiAgICBhcnJheXMubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gaXNPYnNlcnZhYmxlQXJyYXkoYSkgPyBhLnNsaWNlKCkgOiBhO1xuICAgIH0pKTtcbiAgfTtcblxuICBfcHJvdG9bU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIG5leHRJbmRleCA9IDA7XG4gICAgcmV0dXJuIG1ha2VJdGVyYWJsZSh7XG4gICAgICBuZXh0OiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBuZXh0SW5kZXggPCBzZWxmLmxlbmd0aCA/IHtcbiAgICAgICAgICB2YWx1ZTogc2VsZltuZXh0SW5kZXgrK10sXG4gICAgICAgICAgZG9uZTogZmFsc2VcbiAgICAgICAgfSA6IHtcbiAgICAgICAgICBkb25lOiB0cnVlLFxuICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoTGVnYWN5T2JzZXJ2YWJsZUFycmF5LCBbe1xuICAgIGtleTogXCJsZW5ndGhcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzWyRtb2J4XS5nZXRBcnJheUxlbmd0aF8oKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KG5ld0xlbmd0aCkge1xuICAgICAgdGhpc1skbW9ieF0uc2V0QXJyYXlMZW5ndGhfKG5ld0xlbmd0aCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBTeW1ib2wudG9TdHJpbmdUYWcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gXCJBcnJheVwiO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMZWdhY3lPYnNlcnZhYmxlQXJyYXk7XG59KFN0dWJBcnJheSk7XG5cbk9iamVjdC5lbnRyaWVzKGFycmF5RXh0ZW5zaW9ucykuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgcHJvcCA9IF9yZWZbMF0sXG4gICAgICBmbiA9IF9yZWZbMV07XG4gIGlmIChwcm9wICE9PSBcImNvbmNhdFwiKSBhZGRIaWRkZW5Qcm9wKExlZ2FjeU9ic2VydmFibGVBcnJheS5wcm90b3R5cGUsIHByb3AsIGZuKTtcbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVBcnJheUVudHJ5RGVzY3JpcHRvcihpbmRleCkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzWyRtb2J4XS5nZXRfKGluZGV4KTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzWyRtb2J4XS5zZXRfKGluZGV4LCB2YWx1ZSk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBcnJheUJ1ZmZlckl0ZW0oaW5kZXgpIHtcbiAgZGVmaW5lUHJvcGVydHkoTGVnYWN5T2JzZXJ2YWJsZUFycmF5LnByb3RvdHlwZSwgXCJcIiArIGluZGV4LCBjcmVhdGVBcnJheUVudHJ5RGVzY3JpcHRvcihpbmRleCkpO1xufVxuXG5mdW5jdGlvbiByZXNlcnZlQXJyYXlCdWZmZXIobWF4KSB7XG4gIGlmIChtYXggPiBPQlNFUlZBQkxFX0FSUkFZX0JVRkZFUl9TSVpFKSB7XG4gICAgZm9yICh2YXIgaW5kZXggPSBPQlNFUlZBQkxFX0FSUkFZX0JVRkZFUl9TSVpFOyBpbmRleCA8IG1heCArIDEwMDsgaW5kZXgrKykge1xuICAgICAgY3JlYXRlQXJyYXlCdWZmZXJJdGVtKGluZGV4KTtcbiAgICB9XG5cbiAgICBPQlNFUlZBQkxFX0FSUkFZX0JVRkZFUl9TSVpFID0gbWF4O1xuICB9XG59XG5yZXNlcnZlQXJyYXlCdWZmZXIoMTAwMCk7XG5mdW5jdGlvbiBjcmVhdGVMZWdhY3lBcnJheShpbml0aWFsVmFsdWVzLCBlbmhhbmNlciwgbmFtZSkge1xuICByZXR1cm4gbmV3IExlZ2FjeU9ic2VydmFibGVBcnJheShpbml0aWFsVmFsdWVzLCBlbmhhbmNlciwgbmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldEF0b20odGhpbmcsIHByb3BlcnR5KSB7XG4gIGlmICh0eXBlb2YgdGhpbmcgPT09IFwib2JqZWN0XCIgJiYgdGhpbmcgIT09IG51bGwpIHtcbiAgICBpZiAoaXNPYnNlcnZhYmxlQXJyYXkodGhpbmcpKSB7XG4gICAgICBpZiAocHJvcGVydHkgIT09IHVuZGVmaW5lZCkgZGllKDIzKTtcbiAgICAgIHJldHVybiB0aGluZ1skbW9ieF0uYXRvbV87XG4gICAgfVxuXG4gICAgaWYgKGlzT2JzZXJ2YWJsZVNldCh0aGluZykpIHtcbiAgICAgIHJldHVybiB0aGluZ1skbW9ieF07XG4gICAgfVxuXG4gICAgaWYgKGlzT2JzZXJ2YWJsZU1hcCh0aGluZykpIHtcbiAgICAgIGlmIChwcm9wZXJ0eSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpbmcua2V5c0F0b21fO1xuICAgICAgdmFyIG9ic2VydmFibGUgPSB0aGluZy5kYXRhXy5nZXQocHJvcGVydHkpIHx8IHRoaW5nLmhhc01hcF8uZ2V0KHByb3BlcnR5KTtcbiAgICAgIGlmICghb2JzZXJ2YWJsZSkgZGllKDI1LCBwcm9wZXJ0eSwgZ2V0RGVidWdOYW1lKHRoaW5nKSk7XG4gICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgICB9XG5cbiAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KHRoaW5nKSkge1xuICAgICAgaWYgKCFwcm9wZXJ0eSkgcmV0dXJuIGRpZSgyNik7XG5cbiAgICAgIHZhciBfb2JzZXJ2YWJsZSA9IHRoaW5nWyRtb2J4XS52YWx1ZXNfLmdldChwcm9wZXJ0eSk7XG5cbiAgICAgIGlmICghX29ic2VydmFibGUpIGRpZSgyNywgcHJvcGVydHksIGdldERlYnVnTmFtZSh0aGluZykpO1xuICAgICAgcmV0dXJuIF9vYnNlcnZhYmxlO1xuICAgIH1cblxuICAgIGlmIChpc0F0b20odGhpbmcpIHx8IGlzQ29tcHV0ZWRWYWx1ZSh0aGluZykgfHwgaXNSZWFjdGlvbih0aGluZykpIHtcbiAgICAgIHJldHVybiB0aGluZztcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih0aGluZykpIHtcbiAgICBpZiAoaXNSZWFjdGlvbih0aGluZ1skbW9ieF0pKSB7XG4gICAgICAvLyBkaXNwb3NlciBmdW5jdGlvblxuICAgICAgcmV0dXJuIHRoaW5nWyRtb2J4XTtcbiAgICB9XG4gIH1cblxuICBkaWUoMjgpO1xufVxuZnVuY3Rpb24gZ2V0QWRtaW5pc3RyYXRpb24odGhpbmcsIHByb3BlcnR5KSB7XG4gIGlmICghdGhpbmcpIGRpZSgyOSk7XG4gIGlmIChwcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb24oZ2V0QXRvbSh0aGluZywgcHJvcGVydHkpKTtcbiAgaWYgKGlzQXRvbSh0aGluZykgfHwgaXNDb21wdXRlZFZhbHVlKHRoaW5nKSB8fCBpc1JlYWN0aW9uKHRoaW5nKSkgcmV0dXJuIHRoaW5nO1xuICBpZiAoaXNPYnNlcnZhYmxlTWFwKHRoaW5nKSB8fCBpc09ic2VydmFibGVTZXQodGhpbmcpKSByZXR1cm4gdGhpbmc7XG4gIGlmICh0aGluZ1skbW9ieF0pIHJldHVybiB0aGluZ1skbW9ieF07XG4gIGRpZSgyNCwgdGhpbmcpO1xufVxuZnVuY3Rpb24gZ2V0RGVidWdOYW1lKHRoaW5nLCBwcm9wZXJ0eSkge1xuICB2YXIgbmFtZWQ7XG4gIGlmIChwcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSBuYW1lZCA9IGdldEF0b20odGhpbmcsIHByb3BlcnR5KTtlbHNlIGlmIChpc09ic2VydmFibGVPYmplY3QodGhpbmcpIHx8IGlzT2JzZXJ2YWJsZU1hcCh0aGluZykgfHwgaXNPYnNlcnZhYmxlU2V0KHRoaW5nKSkgbmFtZWQgPSBnZXRBZG1pbmlzdHJhdGlvbih0aGluZyk7ZWxzZSBuYW1lZCA9IGdldEF0b20odGhpbmcpOyAvLyB2YWxpZCBmb3IgYXJyYXlzIGFzIHdlbGxcblxuICByZXR1cm4gbmFtZWQubmFtZV87XG59XG5cbnZhciB0b1N0cmluZyA9IG9iamVjdFByb3RvdHlwZS50b1N0cmluZztcbmZ1bmN0aW9uIGRlZXBFcXVhbChhLCBiLCBkZXB0aCkge1xuICBpZiAoZGVwdGggPT09IHZvaWQgMCkge1xuICAgIGRlcHRoID0gLTE7XG4gIH1cblxuICByZXR1cm4gZXEoYSwgYiwgZGVwdGgpO1xufSAvLyBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vamFzaGtlbmFzL3VuZGVyc2NvcmUvYmxvYi81YzIzN2E3YzY4MmZiNjhmZDUzNzgyMDNmMGJmMjJkY2UxNjI0ODU0L3VuZGVyc2NvcmUuanMjTDExODYtTDEyODlcbi8vIEludGVybmFsIHJlY3Vyc2l2ZSBjb21wYXJpc29uIGZ1bmN0aW9uIGZvciBgaXNFcXVhbGAuXG5cbmZ1bmN0aW9uIGVxKGEsIGIsIGRlcHRoLCBhU3RhY2ssIGJTdGFjaykge1xuICAvLyBJZGVudGljYWwgb2JqZWN0cyBhcmUgZXF1YWwuIGAwID09PSAtMGAsIGJ1dCB0aGV5IGFyZW4ndCBpZGVudGljYWwuXG4gIC8vIFNlZSB0aGUgW0hhcm1vbnkgYGVnYWxgIHByb3Bvc2FsXShodHRwOi8vd2lraS5lY21hc2NyaXB0Lm9yZy9kb2t1LnBocD9pZD1oYXJtb255OmVnYWwpLlxuICBpZiAoYSA9PT0gYikgcmV0dXJuIGEgIT09IDAgfHwgMSAvIGEgPT09IDEgLyBiOyAvLyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgb25seSBlcXVhbCB0byBpdHNlbGYgKHN0cmljdCBjb21wYXJpc29uKS5cblxuICBpZiAoYSA9PSBudWxsIHx8IGIgPT0gbnVsbCkgcmV0dXJuIGZhbHNlOyAvLyBgTmFOYHMgYXJlIGVxdWl2YWxlbnQsIGJ1dCBub24tcmVmbGV4aXZlLlxuXG4gIGlmIChhICE9PSBhKSByZXR1cm4gYiAhPT0gYjsgLy8gRXhoYXVzdCBwcmltaXRpdmUgY2hlY2tzXG5cbiAgdmFyIHR5cGUgPSB0eXBlb2YgYTtcbiAgaWYgKCFpc0Z1bmN0aW9uKHR5cGUpICYmIHR5cGUgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGIgIT0gXCJvYmplY3RcIikgcmV0dXJuIGZhbHNlOyAvLyBDb21wYXJlIGBbW0NsYXNzXV1gIG5hbWVzLlxuXG4gIHZhciBjbGFzc05hbWUgPSB0b1N0cmluZy5jYWxsKGEpO1xuICBpZiAoY2xhc3NOYW1lICE9PSB0b1N0cmluZy5jYWxsKGIpKSByZXR1cm4gZmFsc2U7XG5cbiAgc3dpdGNoIChjbGFzc05hbWUpIHtcbiAgICAvLyBTdHJpbmdzLCBudW1iZXJzLCByZWd1bGFyIGV4cHJlc3Npb25zLCBkYXRlcywgYW5kIGJvb2xlYW5zIGFyZSBjb21wYXJlZCBieSB2YWx1ZS5cbiAgICBjYXNlIFwiW29iamVjdCBSZWdFeHBdXCI6IC8vIFJlZ0V4cHMgYXJlIGNvZXJjZWQgdG8gc3RyaW5ncyBmb3IgY29tcGFyaXNvbiAoTm90ZTogJycgKyAvYS9pID09PSAnL2EvaScpXG5cbiAgICBjYXNlIFwiW29iamVjdCBTdHJpbmddXCI6XG4gICAgICAvLyBQcmltaXRpdmVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIG9iamVjdCB3cmFwcGVycyBhcmUgZXF1aXZhbGVudDsgdGh1cywgYFwiNVwiYCBpc1xuICAgICAgLy8gZXF1aXZhbGVudCB0byBgbmV3IFN0cmluZyhcIjVcIilgLlxuICAgICAgcmV0dXJuIFwiXCIgKyBhID09PSBcIlwiICsgYjtcblxuICAgIGNhc2UgXCJbb2JqZWN0IE51bWJlcl1cIjpcbiAgICAgIC8vIGBOYU5gcyBhcmUgZXF1aXZhbGVudCwgYnV0IG5vbi1yZWZsZXhpdmUuXG4gICAgICAvLyBPYmplY3QoTmFOKSBpcyBlcXVpdmFsZW50IHRvIE5hTi5cbiAgICAgIGlmICgrYSAhPT0gK2EpIHJldHVybiArYiAhPT0gK2I7IC8vIEFuIGBlZ2FsYCBjb21wYXJpc29uIGlzIHBlcmZvcm1lZCBmb3Igb3RoZXIgbnVtZXJpYyB2YWx1ZXMuXG5cbiAgICAgIHJldHVybiArYSA9PT0gMCA/IDEgLyArYSA9PT0gMSAvIGIgOiArYSA9PT0gK2I7XG5cbiAgICBjYXNlIFwiW29iamVjdCBEYXRlXVwiOlxuICAgIGNhc2UgXCJbb2JqZWN0IEJvb2xlYW5dXCI6XG4gICAgICAvLyBDb2VyY2UgZGF0ZXMgYW5kIGJvb2xlYW5zIHRvIG51bWVyaWMgcHJpbWl0aXZlIHZhbHVlcy4gRGF0ZXMgYXJlIGNvbXBhcmVkIGJ5IHRoZWlyXG4gICAgICAvLyBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnMuIE5vdGUgdGhhdCBpbnZhbGlkIGRhdGVzIHdpdGggbWlsbGlzZWNvbmQgcmVwcmVzZW50YXRpb25zXG4gICAgICAvLyBvZiBgTmFOYCBhcmUgbm90IGVxdWl2YWxlbnQuXG4gICAgICByZXR1cm4gK2EgPT09ICtiO1xuXG4gICAgY2FzZSBcIltvYmplY3QgU3ltYm9sXVwiOlxuICAgICAgcmV0dXJuIHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLnZhbHVlT2YuY2FsbChhKSA9PT0gU3ltYm9sLnZhbHVlT2YuY2FsbChiKTtcblxuICAgIGNhc2UgXCJbb2JqZWN0IE1hcF1cIjpcbiAgICBjYXNlIFwiW29iamVjdCBTZXRdXCI6XG4gICAgICAvLyBNYXBzIGFuZCBTZXRzIGFyZSB1bndyYXBwZWQgdG8gYXJyYXlzIG9mIGVudHJ5LXBhaXJzLCBhZGRpbmcgYW4gaW5jaWRlbnRhbCBsZXZlbC5cbiAgICAgIC8vIEhpZGUgdGhpcyBleHRyYSBsZXZlbCBieSBpbmNyZWFzaW5nIHRoZSBkZXB0aC5cbiAgICAgIGlmIChkZXB0aCA+PSAwKSB7XG4gICAgICAgIGRlcHRoKys7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICB9IC8vIFVud3JhcCBhbnkgd3JhcHBlZCBvYmplY3RzLlxuXG5cbiAgYSA9IHVud3JhcChhKTtcbiAgYiA9IHVud3JhcChiKTtcbiAgdmFyIGFyZUFycmF5cyA9IGNsYXNzTmFtZSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xuXG4gIGlmICghYXJlQXJyYXlzKSB7XG4gICAgaWYgKHR5cGVvZiBhICE9IFwib2JqZWN0XCIgfHwgdHlwZW9mIGIgIT0gXCJvYmplY3RcIikgcmV0dXJuIGZhbHNlOyAvLyBPYmplY3RzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWl2YWxlbnQsIGJ1dCBgT2JqZWN0YHMgb3IgYEFycmF5YHNcbiAgICAvLyBmcm9tIGRpZmZlcmVudCBmcmFtZXMgYXJlLlxuXG4gICAgdmFyIGFDdG9yID0gYS5jb25zdHJ1Y3RvcixcbiAgICAgICAgYkN0b3IgPSBiLmNvbnN0cnVjdG9yO1xuXG4gICAgaWYgKGFDdG9yICE9PSBiQ3RvciAmJiAhKGlzRnVuY3Rpb24oYUN0b3IpICYmIGFDdG9yIGluc3RhbmNlb2YgYUN0b3IgJiYgaXNGdW5jdGlvbihiQ3RvcikgJiYgYkN0b3IgaW5zdGFuY2VvZiBiQ3RvcikgJiYgXCJjb25zdHJ1Y3RvclwiIGluIGEgJiYgXCJjb25zdHJ1Y3RvclwiIGluIGIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGVwdGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSBpZiAoZGVwdGggPCAwKSB7XG4gICAgZGVwdGggPSAtMTtcbiAgfSAvLyBBc3N1bWUgZXF1YWxpdHkgZm9yIGN5Y2xpYyBzdHJ1Y3R1cmVzLiBUaGUgYWxnb3JpdGhtIGZvciBkZXRlY3RpbmcgY3ljbGljXG4gIC8vIHN0cnVjdHVyZXMgaXMgYWRhcHRlZCBmcm9tIEVTIDUuMSBzZWN0aW9uIDE1LjEyLjMsIGFic3RyYWN0IG9wZXJhdGlvbiBgSk9gLlxuICAvLyBJbml0aWFsaXppbmcgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gIC8vIEl0J3MgZG9uZSBoZXJlIHNpbmNlIHdlIG9ubHkgbmVlZCB0aGVtIGZvciBvYmplY3RzIGFuZCBhcnJheXMgY29tcGFyaXNvbi5cblxuXG4gIGFTdGFjayA9IGFTdGFjayB8fCBbXTtcbiAgYlN0YWNrID0gYlN0YWNrIHx8IFtdO1xuICB2YXIgbGVuZ3RoID0gYVN0YWNrLmxlbmd0aDtcblxuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAvLyBMaW5lYXIgc2VhcmNoLiBQZXJmb3JtYW5jZSBpcyBpbnZlcnNlbHkgcHJvcG9ydGlvbmFsIHRvIHRoZSBudW1iZXIgb2ZcbiAgICAvLyB1bmlxdWUgbmVzdGVkIHN0cnVjdHVyZXMuXG4gICAgaWYgKGFTdGFja1tsZW5ndGhdID09PSBhKSByZXR1cm4gYlN0YWNrW2xlbmd0aF0gPT09IGI7XG4gIH0gLy8gQWRkIHRoZSBmaXJzdCBvYmplY3QgdG8gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuXG5cbiAgYVN0YWNrLnB1c2goYSk7XG4gIGJTdGFjay5wdXNoKGIpOyAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgYW5kIGFycmF5cy5cblxuICBpZiAoYXJlQXJyYXlzKSB7XG4gICAgLy8gQ29tcGFyZSBhcnJheSBsZW5ndGhzIHRvIGRldGVybWluZSBpZiBhIGRlZXAgY29tcGFyaXNvbiBpcyBuZWNlc3NhcnkuXG4gICAgbGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCAhPT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTsgLy8gRGVlcCBjb21wYXJlIHRoZSBjb250ZW50cywgaWdub3Jpbmcgbm9uLW51bWVyaWMgcHJvcGVydGllcy5cblxuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgaWYgKCFlcShhW2xlbmd0aF0sIGJbbGVuZ3RoXSwgZGVwdGggLSAxLCBhU3RhY2ssIGJTdGFjaykpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gRGVlcCBjb21wYXJlIG9iamVjdHMuXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICB2YXIga2V5O1xuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoOyAvLyBFbnN1cmUgdGhhdCBib3RoIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBudW1iZXIgb2YgcHJvcGVydGllcyBiZWZvcmUgY29tcGFyaW5nIGRlZXAgZXF1YWxpdHkuXG5cbiAgICBpZiAoT2JqZWN0LmtleXMoYikubGVuZ3RoICE9PSBsZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgLy8gRGVlcCBjb21wYXJlIGVhY2ggbWVtYmVyXG4gICAgICBrZXkgPSBrZXlzW2xlbmd0aF07XG4gICAgICBpZiAoIShoYXNQcm9wKGIsIGtleSkgJiYgZXEoYVtrZXldLCBiW2tleV0sIGRlcHRoIC0gMSwgYVN0YWNrLCBiU3RhY2spKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSAvLyBSZW1vdmUgdGhlIGZpcnN0IG9iamVjdCBmcm9tIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cblxuXG4gIGFTdGFjay5wb3AoKTtcbiAgYlN0YWNrLnBvcCgpO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gdW53cmFwKGEpIHtcbiAgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KGEpKSByZXR1cm4gYS5zbGljZSgpO1xuICBpZiAoaXNFUzZNYXAoYSkgfHwgaXNPYnNlcnZhYmxlTWFwKGEpKSByZXR1cm4gQXJyYXkuZnJvbShhLmVudHJpZXMoKSk7XG4gIGlmIChpc0VTNlNldChhKSB8fCBpc09ic2VydmFibGVTZXQoYSkpIHJldHVybiBBcnJheS5mcm9tKGEuZW50cmllcygpKTtcbiAgcmV0dXJuIGE7XG59XG5cbmZ1bmN0aW9uIG1ha2VJdGVyYWJsZShpdGVyYXRvcikge1xuICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZ2V0U2VsZjtcbiAgcmV0dXJuIGl0ZXJhdG9yO1xufVxuXG5mdW5jdGlvbiBnZXRTZWxmKCkge1xuICByZXR1cm4gdGhpcztcbn1cblxuLyoqXHJcbiAqIChjKSBNaWNoZWwgV2VzdHN0cmF0ZSAyMDE1IC0gMjAyMFxyXG4gKiBNSVQgTGljZW5zZWRcclxuICpcclxuICogV2VsY29tZSB0byB0aGUgbW9ieCBzb3VyY2VzISBUbyBnZXQgYW4gZ2xvYmFsIG92ZXJ2aWV3IG9mIGhvdyBNb2JYIGludGVybmFsbHkgd29ya3MsXHJcbiAqIHRoaXMgaXMgYSBnb29kIHBsYWNlIHRvIHN0YXJ0OlxyXG4gKiBodHRwczovL21lZGl1bS5jb20vQG13ZXN0c3RyYXRlL2JlY29taW5nLWZ1bGx5LXJlYWN0aXZlLWFuLWluLWRlcHRoLWV4cGxhbmF0aW9uLW9mLW1vYnNlcnZhYmxlLTU1OTk1MjYyYTI1NCMueHZiaDZxZDc0XHJcbiAqXHJcbiAqIFNvdXJjZSBmb2xkZXJzOlxyXG4gKiA9PT09PT09PT09PT09PT1cclxuICpcclxuICogLSBhcGkvICAgICBNb3N0IG9mIHRoZSBwdWJsaWMgc3RhdGljIG1ldGhvZHMgZXhwb3NlZCBieSB0aGUgbW9kdWxlIGNhbiBiZSBmb3VuZCBoZXJlLlxyXG4gKiAtIGNvcmUvICAgIEltcGxlbWVudGF0aW9uIG9mIHRoZSBNb2JYIGFsZ29yaXRobTsgYXRvbXMsIGRlcml2YXRpb25zLCByZWFjdGlvbnMsIGRlcGVuZGVuY3kgdHJlZXMsIG9wdGltaXphdGlvbnMuIENvb2wgc3R1ZmYgY2FuIGJlIGZvdW5kIGhlcmUuXHJcbiAqIC0gdHlwZXMvICAgQWxsIHRoZSBtYWdpYyB0aGF0IGlzIG5lZWQgdG8gaGF2ZSBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cyBhbmQgdmFsdWVzIGlzIGluIHRoaXMgZm9sZGVyLiBJbmNsdWRpbmcgdGhlIG1vZGlmaWVycyBsaWtlIGBhc0ZsYXRgLlxyXG4gKiAtIHV0aWxzLyAgIFV0aWxpdHkgc3R1ZmYuXHJcbiAqXHJcbiAqL1xuW1wiU3ltYm9sXCIsIFwiTWFwXCIsIFwiU2V0XCIsIFwiU3ltYm9sXCJdLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcbiAgdmFyIGcgPSBnZXRHbG9iYWwoKTtcblxuICBpZiAodHlwZW9mIGdbbV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBkaWUoXCJNb2JYIHJlcXVpcmVzIGdsb2JhbCAnXCIgKyBtICsgXCInIHRvIGJlIGF2YWlsYWJsZSBvciBwb2x5ZmlsbGVkXCIpO1xuICB9XG59KTtcblxuaWYgKHR5cGVvZiBfX01PQlhfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyA9PT0gXCJvYmplY3RcIikge1xuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmR5a29nL21vYngtZGV2dG9vbHMvXG4gIF9fTU9CWF9ERVZUT09MU19HTE9CQUxfSE9PS19fLmluamVjdE1vYngoe1xuICAgIHNweTogc3B5LFxuICAgIGV4dHJhczoge1xuICAgICAgZ2V0RGVidWdOYW1lOiBnZXREZWJ1Z05hbWVcbiAgICB9LFxuICAgICRtb2J4OiAkbW9ieFxuICB9KTtcbn1cblxuZXhwb3J0IHsgJG1vYngsIEZsb3dDYW5jZWxsYXRpb25FcnJvciwgT2JzZXJ2YWJsZU1hcCwgT2JzZXJ2YWJsZVNldCwgUmVhY3Rpb24sIGFsbG93U3RhdGVDaGFuZ2VzIGFzIF9hbGxvd1N0YXRlQ2hhbmdlcywgcnVuSW5BY3Rpb24gYXMgX2FsbG93U3RhdGVDaGFuZ2VzSW5zaWRlQ29tcHV0ZWQsIGFsbG93U3RhdGVSZWFkc0VuZCBhcyBfYWxsb3dTdGF0ZVJlYWRzRW5kLCBhbGxvd1N0YXRlUmVhZHNTdGFydCBhcyBfYWxsb3dTdGF0ZVJlYWRzU3RhcnQsIGF1dG9BY3Rpb24gYXMgX2F1dG9BY3Rpb24sIF9lbmRBY3Rpb24sIGdldEFkbWluaXN0cmF0aW9uIGFzIF9nZXRBZG1pbmlzdHJhdGlvbiwgZ2V0R2xvYmFsU3RhdGUgYXMgX2dldEdsb2JhbFN0YXRlLCBpbnRlcmNlcHRSZWFkcyBhcyBfaW50ZXJjZXB0UmVhZHMsIGlzQ29tcHV0aW5nRGVyaXZhdGlvbiBhcyBfaXNDb21wdXRpbmdEZXJpdmF0aW9uLCByZXNldEdsb2JhbFN0YXRlIGFzIF9yZXNldEdsb2JhbFN0YXRlLCBfc3RhcnRBY3Rpb24sIGFjdGlvbiwgYXV0b3J1biwgY29tcGFyZXIsIGNvbXB1dGVkLCBjb25maWd1cmUsIGNyZWF0ZUF0b20sIGVudHJpZXMsIGV4dGVuZE9ic2VydmFibGUsIGZsb3csIGZsb3dSZXN1bHQsIGdldCwgZ2V0QXRvbSwgZ2V0RGVidWdOYW1lLCBnZXREZXBlbmRlbmN5VHJlZSwgZ2V0T2JzZXJ2ZXJUcmVlLCBoYXMsIGludGVyY2VwdCwgaXNBY3Rpb24sIGlzT2JzZXJ2YWJsZVZhbHVlIGFzIGlzQm94ZWRPYnNlcnZhYmxlLCBpc0NvbXB1dGVkLCBpc0NvbXB1dGVkUHJvcCwgaXNGbG93Q2FuY2VsbGF0aW9uRXJyb3IsIGlzT2JzZXJ2YWJsZSwgaXNPYnNlcnZhYmxlQXJyYXksIGlzT2JzZXJ2YWJsZU1hcCwgaXNPYnNlcnZhYmxlT2JqZWN0LCBpc09ic2VydmFibGVQcm9wLCBpc09ic2VydmFibGVTZXQsIGtleXMsIG1ha2VBdXRvT2JzZXJ2YWJsZSwgbWFrZU9ic2VydmFibGUsIG9ic2VydmFibGUsIG9ic2VydmUsIG9uQmVjb21lT2JzZXJ2ZWQsIG9uQmVjb21lVW5vYnNlcnZlZCwgb25SZWFjdGlvbkVycm9yLCByZWFjdGlvbiwgcmVtb3ZlLCBydW5JbkFjdGlvbiwgc2V0LCBzcHksIHRvSlMsIHRyYWNlLCB0cmFuc2FjdGlvbiwgdW50cmFja2VkLCB2YWx1ZXMsIHdoZW4gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vYnguZXNtLmpzLm1hcFxuIiwiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUsIFRoZW1lUHJvdmlkZXJ9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAnbW9ieC1yZWFjdCc7XHJcbmltcG9ydCBUZXN0U3RvcmUgZnJvbSAnLi4vc3RvcmUvVGVzdFN0b3JlJztcclxuXHJcbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbmBcclxuY29uc3QgdGhlbWUgPSB7XHJcbiAgICBjb2xvcnM6IHtcclxuICAgICAgICBwcmltYXJ5OiBcIiMwMDcwZjNcIlxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdG9yZSA9IG5ldyBUZXN0U3RvcmUoKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHtDb21wb25lbnQsIHBhZ2VQcm9wc306YW55KXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQge29ic2VydmFibGV9IGZyb20gJ21vYngnO1xyXG5cclxuY2xhc3MgVGVzdFN0b3Jle1xyXG4gICAgQG9ic2VydmFibGUgdGVzdDpzdHJpbmcgPSAndGVzdCc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlc3RTdG9yZTsiXSwic291cmNlUm9vdCI6IiJ9