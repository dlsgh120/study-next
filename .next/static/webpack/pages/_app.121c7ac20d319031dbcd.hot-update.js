webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/mobx-react-lite/es/ObserverComponent.js":
/*!**************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/ObserverComponent.js ***!
  \**************************************************************/
/*! exports provided: Observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return ObserverComponent; });
/* harmony import */ var _useObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useObserver */ "./node_modules/mobx-react-lite/es/useObserver.js");

function ObserverComponent(_a) {
    var children = _a.children, render = _a.render;
    var component = children || render;
    if (typeof component !== "function") {
        return null;
    }
    return Object(_useObserver__WEBPACK_IMPORTED_MODULE_0__["useObserver"])(component);
}
if (true) {
    ObserverComponent.propTypes = {
        children: ObserverPropsCheck,
        render: ObserverPropsCheck
    };
}
ObserverComponent.displayName = "Observer";

function ObserverPropsCheck(props, key, componentName, location, propFullName) {
    var extraKey = key === "children" ? "render" : "children";
    var hasProp = typeof props[key] === "function";
    var hasExtraProp = typeof props[extraKey] === "function";
    if (hasProp && hasExtraProp) {
        return new Error("MobX Observer: Do not use children and render in the same time in`" + componentName);
    }
    if (hasProp || hasExtraProp) {
        return null;
    }
    return new Error("Invalid prop `" +
        propFullName +
        "` of type `" +
        typeof props[key] +
        "` supplied to" +
        " `" +
        componentName +
        "`, expected `function`.");
}
//# sourceMappingURL=ObserverComponent.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/index.js":
/*!**************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/index.js ***!
  \**************************************************/
/*! exports provided: isUsingStaticRendering, enableStaticRendering, observer, Observer, useLocalObservable, useLocalStore, useAsObservableSource, clearTimers, useObserver, isObserverBatched, observerBatching, useStaticRendering */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useObserver", function() { return useObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticRendering", function() { return useStaticRendering; });
/* harmony import */ var _utils_assertEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/assertEnvironment */ "./node_modules/mobx-react-lite/es/utils/assertEnvironment.js");
/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/reactBatchedUpdates */ "./node_modules/mobx-react-lite/es/utils/reactBatchedUpdates.js");
/* harmony import */ var _utils_observerBatching__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/observerBatching */ "./node_modules/mobx-react-lite/es/utils/observerBatching.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/utils */ "./node_modules/mobx-react-lite/es/utils/utils.js");
/* harmony import */ var _useObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useObserver */ "./node_modules/mobx-react-lite/es/useObserver.js");
/* harmony import */ var _staticRendering__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./staticRendering */ "./node_modules/mobx-react-lite/es/staticRendering.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUsingStaticRendering", function() { return _staticRendering__WEBPACK_IMPORTED_MODULE_5__["isUsingStaticRendering"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableStaticRendering", function() { return _staticRendering__WEBPACK_IMPORTED_MODULE_5__["enableStaticRendering"]; });

/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./observer */ "./node_modules/mobx-react-lite/es/observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return _observer__WEBPACK_IMPORTED_MODULE_6__["observer"]; });

/* harmony import */ var _ObserverComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ObserverComponent */ "./node_modules/mobx-react-lite/es/ObserverComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return _ObserverComponent__WEBPACK_IMPORTED_MODULE_7__["Observer"]; });

/* harmony import */ var _useLocalObservable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useLocalObservable */ "./node_modules/mobx-react-lite/es/useLocalObservable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocalObservable", function() { return _useLocalObservable__WEBPACK_IMPORTED_MODULE_8__["useLocalObservable"]; });

/* harmony import */ var _useLocalStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useLocalStore */ "./node_modules/mobx-react-lite/es/useLocalStore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocalStore", function() { return _useLocalStore__WEBPACK_IMPORTED_MODULE_9__["useLocalStore"]; });

/* harmony import */ var _useAsObservableSource__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useAsObservableSource */ "./node_modules/mobx-react-lite/es/useAsObservableSource.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAsObservableSource", function() { return _useAsObservableSource__WEBPACK_IMPORTED_MODULE_10__["useAsObservableSource"]; });

/* harmony import */ var _utils_reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/reactionCleanupTracking */ "./node_modules/mobx-react-lite/es/utils/reactionCleanupTracking.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearTimers", function() { return _utils_reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_11__["resetCleanupScheduleForTests"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObserverBatched", function() { return _utils_observerBatching__WEBPACK_IMPORTED_MODULE_2__["isObserverBatched"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observerBatching", function() { return _utils_observerBatching__WEBPACK_IMPORTED_MODULE_2__["observerBatching"]; });







Object(_utils_observerBatching__WEBPACK_IMPORTED_MODULE_2__["observerBatching"])(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__["unstable_batchedUpdates"]);







function useObserver(fn, baseComponentName) {
    if (baseComponentName === void 0) { baseComponentName = "observed"; }
    if (true) {
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["useDeprecated"])("[mobx-react-lite] 'useObserver(fn)' is deprecated. Use `<Observer>{fn}</Observer>` instead, or wrap the entire component in `observer`.");
    }
    return Object(_useObserver__WEBPACK_IMPORTED_MODULE_4__["useObserver"])(fn, baseComponentName);
}

function useStaticRendering(enable) {
    if (true) {
        console.warn("[mobx-react-lite] 'useStaticRendering' is deprecated, use 'enableStaticRendering' instead");
    }
    Object(_staticRendering__WEBPACK_IMPORTED_MODULE_5__["enableStaticRendering"])(enable);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/observer.js":
/*!*****************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/observer.js ***!
  \*****************************************************/
/*! exports provided: observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return observer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _staticRendering__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staticRendering */ "./node_modules/mobx-react-lite/es/staticRendering.js");
/* harmony import */ var _useObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useObserver */ "./node_modules/mobx-react-lite/es/useObserver.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



// n.b. base case is not used for actual typings or exported in the typing files
function observer(baseComponent, options) {
    // The working of observer is explained step by step in this talk: https://www.youtube.com/watch?v=cPF4iBedoF0&feature=youtu.be&t=1307
    if (Object(_staticRendering__WEBPACK_IMPORTED_MODULE_1__["isUsingStaticRendering"])()) {
        return baseComponent;
    }
    var realOptions = __assign({ forwardRef: false }, options);
    var baseComponentName = baseComponent.displayName || baseComponent.name;
    var wrappedComponent = function (props, ref) {
        return Object(_useObserver__WEBPACK_IMPORTED_MODULE_2__["useObserver"])(function () { return baseComponent(props, ref); }, baseComponentName);
    };
    wrappedComponent.displayName = baseComponentName;
    // memo; we are not interested in deep updates
    // in props; we assume that if deep objects are changed,
    // this is in observables, which would have been tracked anyway
    var memoComponent;
    if (realOptions.forwardRef) {
        // we have to use forwardRef here because:
        // 1. it cannot go before memo, only after it
        // 2. forwardRef converts the function into an actual component, so we can't let the baseComponent do it
        //    since it wouldn't be a callable function anymore
        memoComponent = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(wrappedComponent));
    }
    else {
        memoComponent = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(wrappedComponent);
    }
    copyStaticProperties(baseComponent, memoComponent);
    memoComponent.displayName = baseComponentName;
    return memoComponent;
}
// based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js
var hoistBlackList = {
    $$typeof: true,
    render: true,
    compare: true,
    type: true
};
function copyStaticProperties(base, target) {
    Object.keys(base).forEach(function (key) {
        if (!hoistBlackList[key]) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
        }
    });
}
//# sourceMappingURL=observer.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/staticRendering.js":
/*!************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/staticRendering.js ***!
  \************************************************************/
/*! exports provided: enableStaticRendering, isUsingStaticRendering */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableStaticRendering", function() { return enableStaticRendering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUsingStaticRendering", function() { return isUsingStaticRendering; });
var globalIsUsingStaticRendering = false;
function enableStaticRendering(enable) {
    globalIsUsingStaticRendering = enable;
}
function isUsingStaticRendering() {
    return globalIsUsingStaticRendering;
}
//# sourceMappingURL=staticRendering.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/useAsObservableSource.js":
/*!******************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/useAsObservableSource.js ***!
  \******************************************************************/
/*! exports provided: useAsObservableSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAsObservableSource", function() { return useAsObservableSource; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ "./node_modules/mobx-react-lite/es/utils/utils.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};



function useAsObservableSource(current) {
    if (true)
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["useDeprecated"])("[mobx-react-lite] 'useAsObservableSource' is deprecated, please store the values directly in an observable, for example by using 'useLocalObservable', and sync future updates using 'useEffect' when needed. See the README for examples.");
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(function () { return Object(mobx__WEBPACK_IMPORTED_MODULE_1__["observable"])(current, {}, { deep: false }); }), 1), res = _a[0];
    Object(mobx__WEBPACK_IMPORTED_MODULE_1__["runInAction"])(function () {
        Object.assign(res, current);
    });
    return res;
}
//# sourceMappingURL=useAsObservableSource.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/useLocalObservable.js":
/*!***************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/useLocalObservable.js ***!
  \***************************************************************/
/*! exports provided: useLocalObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLocalObservable", function() { return useLocalObservable; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useLocalObservable(initializer, annotations) {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(function () { return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["observable"])(initializer(), annotations, { autoBind: true }); })[0];
}
//# sourceMappingURL=useLocalObservable.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/useLocalStore.js":
/*!**********************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/useLocalStore.js ***!
  \**********************************************************/
/*! exports provided: useLocalStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLocalStore", function() { return useLocalStore; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/utils */ "./node_modules/mobx-react-lite/es/utils/utils.js");
/* harmony import */ var _useAsObservableSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useAsObservableSource */ "./node_modules/mobx-react-lite/es/useAsObservableSource.js");




function useLocalStore(initializer, current) {
    if (true)
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["useDeprecated"])("[mobx-react-lite] 'useLocalStore' is deprecated, use 'useLocalObservable' instead.");
    var source = current && Object(_useAsObservableSource__WEBPACK_IMPORTED_MODULE_3__["useAsObservableSource"])(current);
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(function () { return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["observable"])(initializer(source), undefined, { autoBind: true }); })[0];
}
//# sourceMappingURL=useLocalStore.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/useObserver.js":
/*!********************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/useObserver.js ***!
  \********************************************************/
/*! exports provided: useObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useObserver", function() { return useObserver; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_printDebugValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/printDebugValue */ "./node_modules/mobx-react-lite/es/utils/printDebugValue.js");
/* harmony import */ var _utils_reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/reactionCleanupTracking */ "./node_modules/mobx-react-lite/es/utils/reactionCleanupTracking.js");
/* harmony import */ var _staticRendering__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staticRendering */ "./node_modules/mobx-react-lite/es/staticRendering.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/utils */ "./node_modules/mobx-react-lite/es/utils/utils.js");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};






function observerComponentNameFor(baseComponentName) {
    return "observer" + baseComponentName;
}
/**
 * We use class to make it easier to detect in heap snapshots by name
 */
var ObjectToBeRetainedByReact = /** @class */ (function () {
    function ObjectToBeRetainedByReact() {
    }
    return ObjectToBeRetainedByReact;
}());
function useObserver(fn, baseComponentName) {
    if (baseComponentName === void 0) { baseComponentName = "observed"; }
    if (Object(_staticRendering__WEBPACK_IMPORTED_MODULE_4__["isUsingStaticRendering"])()) {
        return fn();
    }
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(new ObjectToBeRetainedByReact()), 1), objectRetainedByReact = _a[0];
    var forceUpdate = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["useForceUpdate"])();
    // StrictMode/ConcurrentMode/Suspense may mean that our component is
    // rendered and abandoned multiple times, so we need to track leaked
    // Reactions.
    var reactionTrackingRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);
    if (!reactionTrackingRef.current) {
        // First render for this component (or first time since a previous
        // reaction from an abandoned render was disposed).
        var newReaction = new mobx__WEBPACK_IMPORTED_MODULE_0__["Reaction"](observerComponentNameFor(baseComponentName), function () {
            // Observable has changed, meaning we want to re-render
            // BUT if we're a component that hasn't yet got to the useEffect()
            // stage, we might be a component that _started_ to render, but
            // got dropped, and we don't want to make state changes then.
            // (It triggers warnings in StrictMode, for a start.)
            if (trackingData_1.mounted) {
                // We have reached useEffect(), so we're mounted, and can trigger an update
                forceUpdate();
            }
            else {
                // We haven't yet reached useEffect(), so we'll need to trigger a re-render
                // when (and if) useEffect() arrives.
                trackingData_1.changedBeforeMount = true;
            }
        });
        var trackingData_1 = Object(_utils_reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_3__["addReactionToTrack"])(reactionTrackingRef, newReaction, objectRetainedByReact);
    }
    var reaction = reactionTrackingRef.current.reaction;
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useDebugValue(reaction, _utils_printDebugValue__WEBPACK_IMPORTED_MODULE_2__["printDebugValue"]);
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
        // Called on first mount only
        Object(_utils_reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_3__["recordReactionAsCommitted"])(reactionTrackingRef);
        if (reactionTrackingRef.current) {
            // Great. We've already got our reaction from our render;
            // all we need to do is to record that it's now mounted,
            // to allow future observable changes to trigger re-renders
            reactionTrackingRef.current.mounted = true;
            // Got a change before first mount, force an update
            if (reactionTrackingRef.current.changedBeforeMount) {
                reactionTrackingRef.current.changedBeforeMount = false;
                forceUpdate();
            }
        }
        else {
            // The reaction we set up in our render has been disposed.
            // This can be due to bad timings of renderings, e.g. our
            // component was paused for a _very_ long time, and our
            // reaction got cleaned up
            // Re-create the reaction
            reactionTrackingRef.current = {
                reaction: new mobx__WEBPACK_IMPORTED_MODULE_0__["Reaction"](observerComponentNameFor(baseComponentName), function () {
                    // We've definitely already been mounted at this point
                    forceUpdate();
                }),
                mounted: true,
                changedBeforeMount: false,
                cleanAt: Infinity
            };
            forceUpdate();
        }
        return function () {
            reactionTrackingRef.current.reaction.dispose();
            reactionTrackingRef.current = null;
        };
    }, []);
    // render the original component, but have the
    // reaction track the observables, so that rendering
    // can be invalidated (see above) once a dependency changes
    var rendering;
    var exception;
    reaction.track(function () {
        try {
            rendering = fn();
        }
        catch (e) {
            exception = e;
        }
    });
    if (exception) {
        throw exception; // re-throw any exceptions caught during rendering
    }
    return rendering;
}
//# sourceMappingURL=useObserver.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/utils/FinalizationRegistryWrapper.js":
/*!******************************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/utils/FinalizationRegistryWrapper.js ***!
  \******************************************************************************/
/*! exports provided: FinalizationRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalizationRegistry", function() { return FinalizationRegistryLocal; });
var FinalizationRegistryLocal = typeof FinalizationRegistry === "undefined" ? undefined : FinalizationRegistry;

//# sourceMappingURL=FinalizationRegistryWrapper.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/utils/assertEnvironment.js":
/*!********************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/utils/assertEnvironment.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


if (!react__WEBPACK_IMPORTED_MODULE_1__["useState"]) {
    throw new Error("mobx-react-lite requires React with Hooks support");
}
if (!mobx__WEBPACK_IMPORTED_MODULE_0__["makeObservable"]) {
    throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
}
//# sourceMappingURL=assertEnvironment.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/utils/createReactionCleanupTrackingUsingFinalizationRegister.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/utils/createReactionCleanupTrackingUsingFinalizationRegister.js ***!
  \*********************************************************************************************************/
/*! exports provided: createReactionCleanupTrackingUsingFinalizationRegister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReactionCleanupTrackingUsingFinalizationRegister", function() { return createReactionCleanupTrackingUsingFinalizationRegister; });
/* harmony import */ var _reactionCleanupTrackingCommon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reactionCleanupTrackingCommon */ "./node_modules/mobx-react-lite/es/utils/reactionCleanupTrackingCommon.js");

/**
 * FinalizationRegistry-based uncommitted reaction cleanup
 */
function createReactionCleanupTrackingUsingFinalizationRegister(FinalizationRegistry) {
    var cleanupTokenToReactionTrackingMap = new Map();
    var globalCleanupTokensCounter = 1;
    var registry = new FinalizationRegistry(function cleanupFunction(token) {
        var trackedReaction = cleanupTokenToReactionTrackingMap.get(token);
        if (trackedReaction) {
            trackedReaction.reaction.dispose();
            cleanupTokenToReactionTrackingMap.delete(token);
        }
    });
    return {
        addReactionToTrack: function (reactionTrackingRef, reaction, objectRetainedByReact) {
            var token = globalCleanupTokensCounter++;
            registry.register(objectRetainedByReact, token, reactionTrackingRef);
            reactionTrackingRef.current = Object(_reactionCleanupTrackingCommon__WEBPACK_IMPORTED_MODULE_0__["createTrackingData"])(reaction);
            reactionTrackingRef.current.finalizationRegistryCleanupToken = token;
            cleanupTokenToReactionTrackingMap.set(token, reactionTrackingRef.current);
            return reactionTrackingRef.current;
        },
        recordReactionAsCommitted: function (reactionRef) {
            registry.unregister(reactionRef);
            if (reactionRef.current && reactionRef.current.finalizationRegistryCleanupToken) {
                cleanupTokenToReactionTrackingMap.delete(reactionRef.current.finalizationRegistryCleanupToken);
            }
        },
        forceCleanupTimerToRunNowForTests: function () {
            // When FinalizationRegistry in use, this this is no-op
        },
        resetCleanupScheduleForTests: function () {
            // When FinalizationRegistry in use, this this is no-op
        }
    };
}
//# sourceMappingURL=createReactionCleanupTrackingUsingFinalizationRegister.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/utils/createTimerBasedReactionCleanupTracking.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/utils/createTimerBasedReactionCleanupTracking.js ***!
  \******************************************************************************************/
/*! exports provided: createTimerBasedReactionCleanupTracking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTimerBasedReactionCleanupTracking", function() { return createTimerBasedReactionCleanupTracking; });
/* harmony import */ var _reactionCleanupTrackingCommon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reactionCleanupTrackingCommon */ "./node_modules/mobx-react-lite/es/utils/reactionCleanupTrackingCommon.js");
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

/**
 * timers, gc-style, uncommitted reaction cleanup
 */
function createTimerBasedReactionCleanupTracking() {
    /**
     * Reactions created by components that have yet to be fully mounted.
     */
    var uncommittedReactionRefs = new Set();
    /**
     * Latest 'uncommitted reactions' cleanup timer handle.
     */
    var reactionCleanupHandle;
    /* istanbul ignore next */
    /**
     * Only to be used by test functions; do not export outside of mobx-react-lite
     */
    function forceCleanupTimerToRunNowForTests() {
        // This allows us to control the execution of the cleanup timer
        // to force it to run at awkward times in unit tests.
        if (reactionCleanupHandle) {
            clearTimeout(reactionCleanupHandle);
            cleanUncommittedReactions();
        }
    }
    /* istanbul ignore next */
    function resetCleanupScheduleForTests() {
        var e_1, _a;
        if (uncommittedReactionRefs.size > 0) {
            try {
                for (var uncommittedReactionRefs_1 = __values(uncommittedReactionRefs), uncommittedReactionRefs_1_1 = uncommittedReactionRefs_1.next(); !uncommittedReactionRefs_1_1.done; uncommittedReactionRefs_1_1 = uncommittedReactionRefs_1.next()) {
                    var ref = uncommittedReactionRefs_1_1.value;
                    var tracking = ref.current;
                    if (tracking) {
                        tracking.reaction.dispose();
                        ref.current = null;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (uncommittedReactionRefs_1_1 && !uncommittedReactionRefs_1_1.done && (_a = uncommittedReactionRefs_1.return)) _a.call(uncommittedReactionRefs_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            uncommittedReactionRefs.clear();
        }
        if (reactionCleanupHandle) {
            clearTimeout(reactionCleanupHandle);
            reactionCleanupHandle = undefined;
        }
    }
    function ensureCleanupTimerRunning() {
        if (reactionCleanupHandle === undefined) {
            reactionCleanupHandle = setTimeout(cleanUncommittedReactions, _reactionCleanupTrackingCommon__WEBPACK_IMPORTED_MODULE_0__["CLEANUP_TIMER_LOOP_MILLIS"]);
        }
    }
    function scheduleCleanupOfReactionIfLeaked(ref) {
        uncommittedReactionRefs.add(ref);
        ensureCleanupTimerRunning();
    }
    function recordReactionAsCommitted(reactionRef) {
        uncommittedReactionRefs.delete(reactionRef);
    }
    /**
     * Run by the cleanup timer to dispose any outstanding reactions
     */
    function cleanUncommittedReactions() {
        reactionCleanupHandle = undefined;
        // Loop through all the candidate leaked reactions; those older
        // than CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS get tidied.
        var now = Date.now();
        uncommittedReactionRefs.forEach(function (ref) {
            var tracking = ref.current;
            if (tracking) {
                if (now >= tracking.cleanAt) {
                    // It's time to tidy up this leaked reaction.
                    tracking.reaction.dispose();
                    ref.current = null;
                    uncommittedReactionRefs.delete(ref);
                }
            }
        });
        if (uncommittedReactionRefs.size > 0) {
            // We've just finished a round of cleanups but there are still
            // some leak candidates outstanding.
            ensureCleanupTimerRunning();
        }
    }
    return {
        addReactionToTrack: function (reactionTrackingRef, reaction, 
        /**
         * On timer based implementation we don't really need this object,
         * but we keep the same api
         */
        objectRetainedByReact) {
            reactionTrackingRef.current = Object(_reactionCleanupTrackingCommon__WEBPACK_IMPORTED_MODULE_0__["createTrackingData"])(reaction);
            scheduleCleanupOfReactionIfLeaked(reactionTrackingRef);
            return reactionTrackingRef.current;
        },
        recordReactionAsCommitted: recordReactionAsCommitted,
        forceCleanupTimerToRunNowForTests: forceCleanupTimerToRunNowForTests,
        resetCleanupScheduleForTests: resetCleanupScheduleForTests
    };
}
//# sourceMappingURL=createTimerBasedReactionCleanupTracking.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/utils/observerBatching.js":
/*!*******************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/utils/observerBatching.js ***!
  \*******************************************************************/
/*! exports provided: defaultNoopBatch, observerBatching, isObserverBatched */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultNoopBatch", function() { return defaultNoopBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observerBatching", function() { return observerBatching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObserverBatched", function() { return isObserverBatched; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");

function defaultNoopBatch(callback) {
    callback();
}
function observerBatching(reactionScheduler) {
    if (!reactionScheduler) {
        reactionScheduler = defaultNoopBatch;
        if (true) {
            console.warn("[MobX] Failed to get unstable_batched updates from react-dom / react-native");
        }
    }
    Object(mobx__WEBPACK_IMPORTED_MODULE_0__["configure"])({ reactionScheduler: reactionScheduler });
}
var isObserverBatched = function () {
    if (true) {
        console.warn("[MobX] Deprecated");
    }
    return true;
};
//# sourceMappingURL=observerBatching.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/utils/printDebugValue.js":
/*!******************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/utils/printDebugValue.js ***!
  \******************************************************************/
/*! exports provided: printDebugValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printDebugValue", function() { return printDebugValue; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");

function printDebugValue(v) {
    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["getDependencyTree"])(v);
}
//# sourceMappingURL=printDebugValue.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/utils/reactBatchedUpdates.js":
/*!**********************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/utils/reactBatchedUpdates.js ***!
  \**********************************************************************/
/*! exports provided: unstable_batchedUpdates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return react_dom__WEBPACK_IMPORTED_MODULE_0__["unstable_batchedUpdates"]; });


//# sourceMappingURL=reactBatchedUpdates.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/utils/reactionCleanupTracking.js":
/*!**************************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/utils/reactionCleanupTracking.js ***!
  \**************************************************************************/
/*! exports provided: addReactionToTrack, recordReactionAsCommitted, resetCleanupScheduleForTests, forceCleanupTimerToRunNowForTests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addReactionToTrack", function() { return addReactionToTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recordReactionAsCommitted", function() { return recordReactionAsCommitted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCleanupScheduleForTests", function() { return resetCleanupScheduleForTests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceCleanupTimerToRunNowForTests", function() { return forceCleanupTimerToRunNowForTests; });
/* harmony import */ var _FinalizationRegistryWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FinalizationRegistryWrapper */ "./node_modules/mobx-react-lite/es/utils/FinalizationRegistryWrapper.js");
/* harmony import */ var _createReactionCleanupTrackingUsingFinalizationRegister__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createReactionCleanupTrackingUsingFinalizationRegister */ "./node_modules/mobx-react-lite/es/utils/createReactionCleanupTrackingUsingFinalizationRegister.js");
/* harmony import */ var _createTimerBasedReactionCleanupTracking__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTimerBasedReactionCleanupTracking */ "./node_modules/mobx-react-lite/es/utils/createTimerBasedReactionCleanupTracking.js");



var _a = _FinalizationRegistryWrapper__WEBPACK_IMPORTED_MODULE_0__["FinalizationRegistry"]
    ? Object(_createReactionCleanupTrackingUsingFinalizationRegister__WEBPACK_IMPORTED_MODULE_1__["createReactionCleanupTrackingUsingFinalizationRegister"])(_FinalizationRegistryWrapper__WEBPACK_IMPORTED_MODULE_0__["FinalizationRegistry"])
    : Object(_createTimerBasedReactionCleanupTracking__WEBPACK_IMPORTED_MODULE_2__["createTimerBasedReactionCleanupTracking"])(), addReactionToTrack = _a.addReactionToTrack, recordReactionAsCommitted = _a.recordReactionAsCommitted, resetCleanupScheduleForTests = _a.resetCleanupScheduleForTests, forceCleanupTimerToRunNowForTests = _a.forceCleanupTimerToRunNowForTests;

//# sourceMappingURL=reactionCleanupTracking.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/utils/reactionCleanupTrackingCommon.js":
/*!********************************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/utils/reactionCleanupTrackingCommon.js ***!
  \********************************************************************************/
/*! exports provided: createTrackingData, CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS, CLEANUP_TIMER_LOOP_MILLIS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTrackingData", function() { return createTrackingData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS", function() { return CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEANUP_TIMER_LOOP_MILLIS", function() { return CLEANUP_TIMER_LOOP_MILLIS; });
function createTrackingData(reaction) {
    var trackingData = {
        reaction: reaction,
        mounted: false,
        changedBeforeMount: false,
        cleanAt: Date.now() + CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS
    };
    return trackingData;
}
/**
 * The minimum time before we'll clean up a Reaction created in a render
 * for a component that hasn't managed to run its effects. This needs to
 * be big enough to ensure that a component won't turn up and have its
 * effects run without being re-rendered.
 */
var CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS = 10000;
/**
 * The frequency with which we'll check for leaked reactions.
 */
var CLEANUP_TIMER_LOOP_MILLIS = 10000;
//# sourceMappingURL=reactionCleanupTrackingCommon.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/utils/utils.js":
/*!********************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/utils/utils.js ***!
  \********************************************************/
/*! exports provided: useForceUpdate, useDeprecated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForceUpdate", function() { return useForceUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeprecated", function() { return useDeprecated; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

var EMPTY_ARRAY = [];
function useForceUpdate() {
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), 2), setTick = _a[1];
    var update = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        setTick(function (tick) { return tick + 1; });
    }, EMPTY_ARRAY);
    return update;
}
var deprecatedMessages = [];
function useDeprecated(msg) {
    if (!deprecatedMessages.includes(msg)) {
        deprecatedMessages.push(msg);
        console.warn(msg);
    }
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/mobx-react/dist/mobxreact.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/mobx-react/dist/mobxreact.esm.js ***!
  \*******************************************************/
/*! exports provided: Observer, enableStaticRendering, isUsingStaticRendering, observerBatching, useAsObservableSource, useLocalObservable, useLocalStore, useObserver, useStaticRendering, MobXProviderContext, PropTypes, Provider, disposeOnUnmount, inject, observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobXProviderContext", function() { return MobXProviderContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropTypes", function() { return PropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disposeOnUnmount", function() { return disposeOnUnmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return inject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return observer; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/es/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["Observer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableStaticRendering", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["enableStaticRendering"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUsingStaticRendering", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["isUsingStaticRendering"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observerBatching", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["observerBatching"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAsObservableSource", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["useAsObservableSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocalObservable", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["useLocalObservable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocalStore", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["useLocalStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useObserver", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["useObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStaticRendering", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["useStaticRendering"]; });






var symbolId = 0;

function createSymbol(name) {
  if (typeof Symbol === "function") {
    return Symbol(name);
  }

  var symbol = "__$mobx-react " + name + " (" + symbolId + ")";
  symbolId++;
  return symbol;
}

var createdSymbols = {};
function newSymbol(name) {
  if (!createdSymbols[name]) {
    createdSymbols[name] = createSymbol(name);
  }

  return createdSymbols[name];
}
function shallowEqual(objA, objB) {
  //From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (is(objA, objB)) return true;

  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

function is(x, y) {
  // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
} // based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js


var hoistBlackList = {
  $$typeof: 1,
  render: 1,
  compare: 1,
  type: 1,
  childContextTypes: 1,
  contextType: 1,
  contextTypes: 1,
  defaultProps: 1,
  getDefaultProps: 1,
  getDerivedStateFromError: 1,
  getDerivedStateFromProps: 1,
  mixins: 1,
  propTypes: 1
};
function copyStaticProperties(base, target) {
  var protoProps = Object.getOwnPropertyNames(Object.getPrototypeOf(base));
  Object.getOwnPropertyNames(base).forEach(function (key) {
    if (!hoistBlackList[key] && protoProps.indexOf(key) === -1) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
    }
  });
}
/**
 * Helper to set `prop` to `this` as non-enumerable (hidden prop)
 * @param target
 * @param prop
 * @param value
 */

function setHiddenProp(target, prop, value) {
  if (!Object.hasOwnProperty.call(target, prop)) {
    Object.defineProperty(target, prop, {
      enumerable: false,
      configurable: true,
      writable: true,
      value: value
    });
  } else {
    target[prop] = value;
  }
}
/**
 * Utilities for patching componentWillUnmount, to make sure @disposeOnUnmount works correctly icm with user defined hooks
 * and the handler provided by mobx-react
 */

var mobxMixins = /*#__PURE__*/newSymbol("patchMixins");
var mobxPatchedDefinition = /*#__PURE__*/newSymbol("patchedDefinition");

function getMixins(target, methodName) {
  var mixins = target[mobxMixins] = target[mobxMixins] || {};
  var methodMixins = mixins[methodName] = mixins[methodName] || {};
  methodMixins.locks = methodMixins.locks || 0;
  methodMixins.methods = methodMixins.methods || [];
  return methodMixins;
}

function wrapper(realMethod, mixins) {
  var _this = this;

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  // locks are used to ensure that mixins are invoked only once per invocation, even on recursive calls
  mixins.locks++;

  try {
    var retVal;

    if (realMethod !== undefined && realMethod !== null) {
      retVal = realMethod.apply(this, args);
    }

    return retVal;
  } finally {
    mixins.locks--;

    if (mixins.locks === 0) {
      mixins.methods.forEach(function (mx) {
        mx.apply(_this, args);
      });
    }
  }
}

function wrapFunction(realMethod, mixins) {
  var fn = function fn() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    wrapper.call.apply(wrapper, [this, realMethod, mixins].concat(args));
  };

  return fn;
}

function patch(target, methodName, mixinMethod) {
  var mixins = getMixins(target, methodName);

  if (mixins.methods.indexOf(mixinMethod) < 0) {
    mixins.methods.push(mixinMethod);
  }

  var oldDefinition = Object.getOwnPropertyDescriptor(target, methodName);

  if (oldDefinition && oldDefinition[mobxPatchedDefinition]) {
    // already patched definition, do not repatch
    return;
  }

  var originalMethod = target[methodName];
  var newDefinition = createDefinition(target, methodName, oldDefinition ? oldDefinition.enumerable : undefined, mixins, originalMethod);
  Object.defineProperty(target, methodName, newDefinition);
}

function createDefinition(target, methodName, enumerable, mixins, originalMethod) {
  var _ref;

  var wrappedFunc = wrapFunction(originalMethod, mixins);
  return _ref = {}, _ref[mobxPatchedDefinition] = true, _ref.get = function get() {
    return wrappedFunc;
  }, _ref.set = function set(value) {
    if (this === target) {
      wrappedFunc = wrapFunction(value, mixins);
    } else {
      // when it is an instance of the prototype/a child prototype patch that particular case again separately
      // since we need to store separate values depending on wether it is the actual instance, the prototype, etc
      // e.g. the method for super might not be the same as the method for the prototype which might be not the same
      // as the method for the instance
      var newDefinition = createDefinition(this, methodName, enumerable, mixins, value);
      Object.defineProperty(this, methodName, newDefinition);
    }
  }, _ref.configurable = true, _ref.enumerable = enumerable, _ref;
}

var mobxAdminProperty = mobx__WEBPACK_IMPORTED_MODULE_0__["$mobx"] || "$mobx";
var mobxObserverProperty = /*#__PURE__*/newSymbol("isMobXReactObserver");
var mobxIsUnmounted = /*#__PURE__*/newSymbol("isUnmounted");
var skipRenderKey = /*#__PURE__*/newSymbol("skipRender");
var isForcingUpdateKey = /*#__PURE__*/newSymbol("isForcingUpdate");
function makeClassComponentObserver(componentClass) {
  var target = componentClass.prototype;

  if (componentClass[mobxObserverProperty]) {
    var displayName = getDisplayName(target);
    console.warn("The provided component class (" + displayName + ") \n                has already been declared as an observer component.");
  } else {
    componentClass[mobxObserverProperty] = true;
  }

  if (target.componentWillReact) throw new Error("The componentWillReact life-cycle event is no longer supported");

  if (componentClass["__proto__"] !== react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
    if (!target.shouldComponentUpdate) target.shouldComponentUpdate = observerSCU;else if (target.shouldComponentUpdate !== observerSCU) // n.b. unequal check, instead of existence check, as @observer might be on superclass as well
      throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.");
  } // this.props and this.state are made observable, just to make sure @computed fields that
  // are defined inside the component, and which rely on state or props, re-compute if state or props change
  // (otherwise the computed wouldn't update and become stale on props change, since props are not observable)
  // However, this solution is not without it's own problems: https://github.com/mobxjs/mobx-react/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3Aobservable-props-or-not+


  makeObservableProp(target, "props");
  makeObservableProp(target, "state");
  var baseRender = target.render;

  target.render = function () {
    return makeComponentReactive.call(this, baseRender);
  };

  patch(target, "componentWillUnmount", function () {
    var _this$render$mobxAdmi;

    if (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["isUsingStaticRendering"])() === true) return;
    (_this$render$mobxAdmi = this.render[mobxAdminProperty]) == null ? void 0 : _this$render$mobxAdmi.dispose();
    this[mobxIsUnmounted] = true;

    if (!this.render[mobxAdminProperty]) {
      // Render may have been hot-swapped and/or overriden by a subclass.
      var _displayName = getDisplayName(this);

      console.warn("The reactive render of an observer class component (" + _displayName + ") \n                was overriden after MobX attached. This may result in a memory leak if the \n                overriden reactive render was not properly disposed.");
    }
  });
  return componentClass;
} // Generates a friendly name for debugging

function getDisplayName(comp) {
  return comp.displayName || comp.name || comp.constructor && (comp.constructor.displayName || comp.constructor.name) || "<component>";
}

function makeComponentReactive(render) {
  var _this = this;

  if (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["isUsingStaticRendering"])() === true) return render.call(this);
  /**
   * If props are shallowly modified, react will render anyway,
   * so atom.reportChanged() should not result in yet another re-render
   */

  setHiddenProp(this, skipRenderKey, false);
  /**
   * forceUpdate will re-assign this.props. We don't want that to cause a loop,
   * so detect these changes
   */

  setHiddenProp(this, isForcingUpdateKey, false);
  var initialName = getDisplayName(this);
  var baseRender = render.bind(this);
  var isRenderingPending = false;
  var reaction = new mobx__WEBPACK_IMPORTED_MODULE_0__["Reaction"](initialName + ".render()", function () {
    if (!isRenderingPending) {
      // N.B. Getting here *before mounting* means that a component constructor has side effects (see the relevant test in misc.js)
      // This unidiomatic React usage but React will correctly warn about this so we continue as usual
      // See #85 / Pull #44
      isRenderingPending = true;

      if (_this[mobxIsUnmounted] !== true) {
        var hasError = true;

        try {
          setHiddenProp(_this, isForcingUpdateKey, true);
          if (!_this[skipRenderKey]) react__WEBPACK_IMPORTED_MODULE_1__["Component"].prototype.forceUpdate.call(_this);
          hasError = false;
        } finally {
          setHiddenProp(_this, isForcingUpdateKey, false);
          if (hasError) reaction.dispose();
        }
      }
    }
  });
  reaction["reactComponent"] = this;
  reactiveRender[mobxAdminProperty] = reaction;
  this.render = reactiveRender;

  function reactiveRender() {
    isRenderingPending = false;
    var exception = undefined;
    var rendering = undefined;
    reaction.track(function () {
      try {
        rendering = Object(mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateChanges"])(false, baseRender);
      } catch (e) {
        exception = e;
      }
    });

    if (exception) {
      throw exception;
    }

    return rendering;
  }

  return reactiveRender.call(this);
}

function observerSCU(nextProps, nextState) {
  if (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["isUsingStaticRendering"])()) {
    console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.");
  } // update on any state changes (as is the default)


  if (this.state !== nextState) {
    return true;
  } // update if props are shallowly not equal, inspired by PureRenderMixin
  // we could return just 'false' here, and avoid the `skipRender` checks etc
  // however, it is nicer if lifecycle events are triggered like usually,
  // so we return true here if props are shallowly modified.


  return !shallowEqual(this.props, nextProps);
}

function makeObservableProp(target, propName) {
  var valueHolderKey = newSymbol("reactProp_" + propName + "_valueHolder");
  var atomHolderKey = newSymbol("reactProp_" + propName + "_atomHolder");

  function getAtom() {
    if (!this[atomHolderKey]) {
      setHiddenProp(this, atomHolderKey, Object(mobx__WEBPACK_IMPORTED_MODULE_0__["createAtom"])("reactive " + propName));
    }

    return this[atomHolderKey];
  }

  Object.defineProperty(target, propName, {
    configurable: true,
    enumerable: true,
    get: function get() {
      var prevReadState = false;

      if (mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateReadsStart"] && mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateReadsEnd"]) {
        prevReadState = Object(mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateReadsStart"])(true);
      }

      getAtom.call(this).reportObserved();

      if (mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateReadsStart"] && mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateReadsEnd"]) {
        Object(mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateReadsEnd"])(prevReadState);
      }

      return this[valueHolderKey];
    },
    set: function set(v) {
      if (!this[isForcingUpdateKey] && !shallowEqual(this[valueHolderKey], v)) {
        setHiddenProp(this, valueHolderKey, v);
        setHiddenProp(this, skipRenderKey, true);
        getAtom.call(this).reportChanged();
        setHiddenProp(this, skipRenderKey, false);
      } else {
        setHiddenProp(this, valueHolderKey, v);
      }
    }
  });
}

var hasSymbol = typeof Symbol === "function" && Symbol["for"]; // Using react-is had some issues (and operates on elements, not on types), see #608 / #609

var ReactForwardRefSymbol = hasSymbol ? /*#__PURE__*/Symbol["for"]("react.forward_ref") : typeof react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"] === "function" && /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function (props) {
  return null;
})["$$typeof"];
var ReactMemoSymbol = hasSymbol ? /*#__PURE__*/Symbol["for"]("react.memo") : typeof react__WEBPACK_IMPORTED_MODULE_1__["memo"] === "function" && /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(function (props) {
  return null;
})["$$typeof"];
/**
 * Observer function / decorator
 */

function observer(component) {
  if (component["isMobxInjector"] === true) {
    console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'");
  }

  if (ReactMemoSymbol && component["$$typeof"] === ReactMemoSymbol) {
    throw new Error("Mobx observer: You are trying to use 'observer' on a function component wrapped in either another observer or 'React.memo'. The observer already applies 'React.memo' for you.");
  } // Unwrap forward refs into `<Observer>` component
  // we need to unwrap the render, because it is the inner render that needs to be tracked,
  // not the ForwardRef HoC


  if (ReactForwardRefSymbol && component["$$typeof"] === ReactForwardRefSymbol) {
    var baseRender = component["render"];
    if (typeof baseRender !== "function") throw new Error("render property of ForwardRef was not a function");
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function ObserverForwardRef() {
      var args = arguments;
      return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["Observer"], null, function () {
        return baseRender.apply(undefined, args);
      });
    });
  } // Function component


  if (typeof component === "function" && (!component.prototype || !component.prototype.render) && !component["isReactClass"] && !Object.prototype.isPrototypeOf.call(react__WEBPACK_IMPORTED_MODULE_1__["Component"], component)) {
    return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["observer"])(component);
  }

  return makeClassComponentObserver(component);
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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var MobXProviderContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({});
function Provider(props) {
  var children = props.children,
      stores = _objectWithoutPropertiesLoose(props, ["children"]);

  var parentValue = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(MobXProviderContext);
  var mutableProviderRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(_extends({}, parentValue, stores));
  var value = mutableProviderRef.current;

  if (true) {
    var newValue = _extends({}, value, stores); // spread in previous state for the context based stores


    if (!shallowEqual(value, newValue)) {
      throw new Error("MobX Provider: The set of provided stores has changed. See: https://github.com/mobxjs/mobx-react#the-set-of-provided-stores-has-changed-error.");
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MobXProviderContext.Provider, {
    value: value
  }, children);
}
Provider.displayName = "MobXProvider";

/**
 * Store Injection
 */

function createStoreInjector(grabStoresFn, component, injectNames, makeReactive) {
  // Support forward refs
  var Injector = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (props, ref) {
    var newProps = _extends({}, props);

    var context = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(MobXProviderContext);
    Object.assign(newProps, grabStoresFn(context || {}, newProps) || {});

    if (ref) {
      newProps.ref = ref;
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(component, newProps);
  });
  if (makeReactive) Injector = observer(Injector);
  Injector["isMobxInjector"] = true; // assigned late to suppress observer warning
  // Static fields from component should be visible on the generated Injector

  copyStaticProperties(component, Injector);
  Injector["wrappedComponent"] = component;
  Injector.displayName = getInjectName(component, injectNames);
  return Injector;
}

function getInjectName(component, injectNames) {
  var displayName;
  var componentName = component.displayName || component.name || component.constructor && component.constructor.name || "Component";
  if (injectNames) displayName = "inject-with-" + injectNames + "(" + componentName + ")";else displayName = "inject(" + componentName + ")";
  return displayName;
}

function grabStoresByName(storeNames) {
  return function (baseStores, nextProps) {
    storeNames.forEach(function (storeName) {
      if (storeName in nextProps // prefer props over stores
      ) return;
      if (!(storeName in baseStores)) throw new Error("MobX injector: Store '" + storeName + "' is not available! Make sure it is provided by some Provider");
      nextProps[storeName] = baseStores[storeName];
    });
    return nextProps;
  };
}
/**
 * higher order component that injects stores to a child.
 * takes either a varargs list of strings, which are stores read from the context,
 * or a function that manually maps the available stores from the context to props:
 * storesToProps(mobxStores, props, context) => newProps
 */


function inject() {
  for (var _len = arguments.length, storeNames = new Array(_len), _key = 0; _key < _len; _key++) {
    storeNames[_key] = arguments[_key];
  }

  if (typeof arguments[0] === "function") {
    var grabStoresFn = arguments[0];
    return function (componentClass) {
      return createStoreInjector(grabStoresFn, componentClass, grabStoresFn.name, true);
    };
  } else {
    return function (componentClass) {
      return createStoreInjector(grabStoresByName(storeNames), componentClass, storeNames.join("-"), false);
    };
  }
}

var protoStoreKey = /*#__PURE__*/newSymbol("disposeOnUnmountProto");
var instStoreKey = /*#__PURE__*/newSymbol("disposeOnUnmountInst");

function runDisposersOnWillUnmount() {
  var _this = this;
  [].concat(this[protoStoreKey] || [], this[instStoreKey] || []).forEach(function (propKeyOrFunction) {
    var prop = typeof propKeyOrFunction === "string" ? _this[propKeyOrFunction] : propKeyOrFunction;

    if (prop !== undefined && prop !== null) {
      if (Array.isArray(prop)) prop.map(function (f) {
        return f();
      });else prop();
    }
  });
}

function disposeOnUnmount(target, propertyKeyOrFunction) {
  if (Array.isArray(propertyKeyOrFunction)) {
    return propertyKeyOrFunction.map(function (fn) {
      return disposeOnUnmount(target, fn);
    });
  }

  var c = Object.getPrototypeOf(target).constructor;
  var c2 = Object.getPrototypeOf(target.constructor); // Special case for react-hot-loader

  var c3 = Object.getPrototypeOf(Object.getPrototypeOf(target));

  if (!(c === react__WEBPACK_IMPORTED_MODULE_1___default.a.Component || c === react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent || c2 === react__WEBPACK_IMPORTED_MODULE_1___default.a.Component || c2 === react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent || c3 === react__WEBPACK_IMPORTED_MODULE_1___default.a.Component || c3 === react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent)) {
    throw new Error("[mobx-react] disposeOnUnmount only supports direct subclasses of React.Component or React.PureComponent.");
  }

  if (typeof propertyKeyOrFunction !== "string" && typeof propertyKeyOrFunction !== "function" && !Array.isArray(propertyKeyOrFunction)) {
    throw new Error("[mobx-react] disposeOnUnmount only works if the parameter is either a property key or a function.");
  } // decorator's target is the prototype, so it doesn't have any instance properties like props


  var isDecorator = typeof propertyKeyOrFunction === "string"; // add property key / function we want run (disposed) to the store

  var componentWasAlreadyModified = !!target[protoStoreKey] || !!target[instStoreKey];
  var store = isDecorator ? // decorators are added to the prototype store
  target[protoStoreKey] || (target[protoStoreKey] = []) : // functions are added to the instance store
  target[instStoreKey] || (target[instStoreKey] = []);
  store.push(propertyKeyOrFunction); // tweak the component class componentWillUnmount if not done already

  if (!componentWasAlreadyModified) {
    patch(target, "componentWillUnmount", runDisposersOnWillUnmount);
  } // return the disposer as is if invoked as a non decorator


  if (typeof propertyKeyOrFunction !== "string") {
    return propertyKeyOrFunction;
  }
}

function createChainableTypeChecker(validator) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      rest[_key - 6] = arguments[_key];
    }

    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["untracked"])(function () {
      componentName = componentName || "<<anonymous>>";
      propFullName = propFullName || propName;

      if (props[propName] == null) {
        if (isRequired) {
          var actual = props[propName] === null ? "null" : "undefined";
          return new Error("The " + location + " `" + propFullName + "` is marked as required " + "in `" + componentName + "`, but its value is `" + actual + "`.");
        }

        return null;
      } else {
        // @ts-ignore rest arg is necessary for some React internals - fails tests otherwise
        return validator.apply(void 0, [props, propName, componentName, location, propFullName].concat(rest));
      }
    });
  }

  var chainedCheckType = checkType.bind(null, false); // Add isRequired to satisfy Requirable

  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
} // Copied from React.PropTypes


function isSymbol(propType, propValue) {
  // Native Symbol.
  if (propType === "symbol") {
    return true;
  } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


  if (propValue["@@toStringTag"] === "Symbol") {
    return true;
  } // Fallback for non-spec compliant Symbols which are polyfilled.


  if (typeof Symbol === "function" && propValue instanceof Symbol) {
    return true;
  }

  return false;
} // Copied from React.PropTypes


function getPropType(propValue) {
  var propType = typeof propValue;

  if (Array.isArray(propValue)) {
    return "array";
  }

  if (propValue instanceof RegExp) {
    // Old webkits (at least until Android 4.0) return 'function' rather than
    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
    // passes PropTypes.object.
    return "object";
  }

  if (isSymbol(propType, propValue)) {
    return "symbol";
  }

  return propType;
} // This handles more types than `getPropType`. Only used for error messages.
// Copied from React.PropTypes


function getPreciseType(propValue) {
  var propType = getPropType(propValue);

  if (propType === "object") {
    if (propValue instanceof Date) {
      return "date";
    } else if (propValue instanceof RegExp) {
      return "regexp";
    }
  }

  return propType;
}

function createObservableTypeCheckerCreator(allowNativeType, mobxType) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["untracked"])(function () {
      if (allowNativeType) {
        if (getPropType(props[propName]) === mobxType.toLowerCase()) return null;
      }

      var mobxChecker;

      switch (mobxType) {
        case "Array":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_0__["isObservableArray"];
          break;

        case "Object":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_0__["isObservableObject"];
          break;

        case "Map":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_0__["isObservableMap"];
          break;

        default:
          throw new Error("Unexpected mobxType: " + mobxType);
      }

      var propValue = props[propName];

      if (!mobxChecker(propValue)) {
        var preciseType = getPreciseType(propValue);
        var nativeTypeExpectationMessage = allowNativeType ? " or javascript `" + mobxType.toLowerCase() + "`" : "";
        return new Error("Invalid prop `" + propFullName + "` of type `" + preciseType + "` supplied to" + " `" + componentName + "`, expected `mobx.Observable" + mobxType + "`" + nativeTypeExpectationMessage + ".");
      }

      return null;
    });
  });
}

function createObservableArrayOfTypeChecker(allowNativeType, typeChecker) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
      rest[_key2 - 5] = arguments[_key2];
    }

    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["untracked"])(function () {
      if (typeof typeChecker !== "function") {
        return new Error("Property `" + propFullName + "` of component `" + componentName + "` has " + "invalid PropType notation.");
      } else {
        var error = createObservableTypeCheckerCreator(allowNativeType, "Array")(props, propName, componentName, location, propFullName);
        if (error instanceof Error) return error;
        var propValue = props[propName];

        for (var i = 0; i < propValue.length; i++) {
          error = typeChecker.apply(void 0, [propValue, i, componentName, location, propFullName + "[" + i + "]"].concat(rest));
          if (error instanceof Error) return error;
        }

        return null;
      }
    });
  });
}

var observableArray = /*#__PURE__*/createObservableTypeCheckerCreator(false, "Array");
var observableArrayOf = /*#__PURE__*/createObservableArrayOfTypeChecker.bind(null, false);
var observableMap = /*#__PURE__*/createObservableTypeCheckerCreator(false, "Map");
var observableObject = /*#__PURE__*/createObservableTypeCheckerCreator(false, "Object");
var arrayOrObservableArray = /*#__PURE__*/createObservableTypeCheckerCreator(true, "Array");
var arrayOrObservableArrayOf = /*#__PURE__*/createObservableArrayOfTypeChecker.bind(null, true);
var objectOrObservableObject = /*#__PURE__*/createObservableTypeCheckerCreator(true, "Object");
var PropTypes = {
  observableArray: observableArray,
  observableArrayOf: observableArrayOf,
  observableMap: observableMap,
  observableObject: observableObject,
  arrayOrObservableArray: arrayOrObservableArray,
  arrayOrObservableArrayOf: arrayOrObservableArrayOf,
  objectOrObservableObject: objectOrObservableObject
};

if (!react__WEBPACK_IMPORTED_MODULE_1__["Component"]) throw new Error("mobx-react requires React to be available");
if (!mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]) throw new Error("mobx-react requires mobx to be available");


//# sourceMappingURL=mobxreact.esm.js.map


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
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _store_TestStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/TestStore */ "./store/TestStore.ts");




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
var store = new _store_TestStore__WEBPACK_IMPORTED_MODULE_5__["default"]();
function App(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(mobx_react__WEBPACK_IMPORTED_MODULE_4__["Provider"], _objectSpread(_objectSpread({}, store), {}, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(GlobalStyle, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
        theme: theme,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, this)
  }, void 0, false);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QtbGl0ZS9lcy9PYnNlcnZlckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QtbGl0ZS9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QtbGl0ZS9lcy9vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QtbGl0ZS9lcy9zdGF0aWNSZW5kZXJpbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tb2J4LXJlYWN0LWxpdGUvZXMvdXNlQXNPYnNlcnZhYmxlU291cmNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbW9ieC1yZWFjdC1saXRlL2VzL3VzZUxvY2FsT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QtbGl0ZS9lcy91c2VMb2NhbFN0b3JlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbW9ieC1yZWFjdC1saXRlL2VzL3VzZU9ic2VydmVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbW9ieC1yZWFjdC1saXRlL2VzL3V0aWxzL0ZpbmFsaXphdGlvblJlZ2lzdHJ5V3JhcHBlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QtbGl0ZS9lcy91dGlscy9hc3NlcnRFbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QtbGl0ZS9lcy91dGlscy9jcmVhdGVSZWFjdGlvbkNsZWFudXBUcmFja2luZ1VzaW5nRmluYWxpemF0aW9uUmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tb2J4LXJlYWN0LWxpdGUvZXMvdXRpbHMvY3JlYXRlVGltZXJCYXNlZFJlYWN0aW9uQ2xlYW51cFRyYWNraW5nLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbW9ieC1yZWFjdC1saXRlL2VzL3V0aWxzL29ic2VydmVyQmF0Y2hpbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tb2J4LXJlYWN0LWxpdGUvZXMvdXRpbHMvcHJpbnREZWJ1Z1ZhbHVlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbW9ieC1yZWFjdC1saXRlL2VzL3V0aWxzL3JlYWN0QmF0Y2hlZFVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tb2J4LXJlYWN0LWxpdGUvZXMvdXRpbHMvcmVhY3Rpb25DbGVhbnVwVHJhY2tpbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tb2J4LXJlYWN0LWxpdGUvZXMvdXRpbHMvcmVhY3Rpb25DbGVhbnVwVHJhY2tpbmdDb21tb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tb2J4LXJlYWN0LWxpdGUvZXMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tb2J4LXJlYWN0L2Rpc3QvbW9ieHJlYWN0LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsInN0b3JlIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiQXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0VBQVc7QUFDdEI7QUFDQSxJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN5QztBQUN6QztBQUNBO0FBQ0E7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OTAzMWRiY2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU9ic2VydmVyIH0gZnJvbSBcIi4vdXNlT2JzZXJ2ZXJcIjtcbmZ1bmN0aW9uIE9ic2VydmVyQ29tcG9uZW50KF9hKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sIHJlbmRlciA9IF9hLnJlbmRlcjtcbiAgICB2YXIgY29tcG9uZW50ID0gY2hpbGRyZW4gfHwgcmVuZGVyO1xuICAgIGlmICh0eXBlb2YgY29tcG9uZW50ICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB1c2VPYnNlcnZlcihjb21wb25lbnQpO1xufVxuaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICAgIE9ic2VydmVyQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgICAgICAgY2hpbGRyZW46IE9ic2VydmVyUHJvcHNDaGVjayxcbiAgICAgICAgcmVuZGVyOiBPYnNlcnZlclByb3BzQ2hlY2tcbiAgICB9O1xufVxuT2JzZXJ2ZXJDb21wb25lbnQuZGlzcGxheU5hbWUgPSBcIk9ic2VydmVyXCI7XG5leHBvcnQgeyBPYnNlcnZlckNvbXBvbmVudCBhcyBPYnNlcnZlciB9O1xuZnVuY3Rpb24gT2JzZXJ2ZXJQcm9wc0NoZWNrKHByb3BzLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICB2YXIgZXh0cmFLZXkgPSBrZXkgPT09IFwiY2hpbGRyZW5cIiA/IFwicmVuZGVyXCIgOiBcImNoaWxkcmVuXCI7XG4gICAgdmFyIGhhc1Byb3AgPSB0eXBlb2YgcHJvcHNba2V5XSA9PT0gXCJmdW5jdGlvblwiO1xuICAgIHZhciBoYXNFeHRyYVByb3AgPSB0eXBlb2YgcHJvcHNbZXh0cmFLZXldID09PSBcImZ1bmN0aW9uXCI7XG4gICAgaWYgKGhhc1Byb3AgJiYgaGFzRXh0cmFQcm9wKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJNb2JYIE9ic2VydmVyOiBEbyBub3QgdXNlIGNoaWxkcmVuIGFuZCByZW5kZXIgaW4gdGhlIHNhbWUgdGltZSBpbmBcIiArIGNvbXBvbmVudE5hbWUpO1xuICAgIH1cbiAgICBpZiAoaGFzUHJvcCB8fCBoYXNFeHRyYVByb3ApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRXJyb3IoXCJJbnZhbGlkIHByb3AgYFwiICtcbiAgICAgICAgcHJvcEZ1bGxOYW1lICtcbiAgICAgICAgXCJgIG9mIHR5cGUgYFwiICtcbiAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gK1xuICAgICAgICBcImAgc3VwcGxpZWQgdG9cIiArXG4gICAgICAgIFwiIGBcIiArXG4gICAgICAgIGNvbXBvbmVudE5hbWUgK1xuICAgICAgICBcImAsIGV4cGVjdGVkIGBmdW5jdGlvbmAuXCIpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T2JzZXJ2ZXJDb21wb25lbnQuanMubWFwIiwiaW1wb3J0IFwiLi91dGlscy9hc3NlcnRFbnZpcm9ubWVudFwiO1xuaW1wb3J0IHsgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMgYXMgYmF0Y2ggfSBmcm9tIFwiLi91dGlscy9yZWFjdEJhdGNoZWRVcGRhdGVzXCI7XG5pbXBvcnQgeyBvYnNlcnZlckJhdGNoaW5nIH0gZnJvbSBcIi4vdXRpbHMvb2JzZXJ2ZXJCYXRjaGluZ1wiO1xuaW1wb3J0IHsgdXNlRGVwcmVjYXRlZCB9IGZyb20gXCIuL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQgeyB1c2VPYnNlcnZlciBhcyB1c2VPYnNlcnZlck9yaWdpbmFsIH0gZnJvbSBcIi4vdXNlT2JzZXJ2ZXJcIjtcbmltcG9ydCB7IGVuYWJsZVN0YXRpY1JlbmRlcmluZyB9IGZyb20gXCIuL3N0YXRpY1JlbmRlcmluZ1wiO1xub2JzZXJ2ZXJCYXRjaGluZyhiYXRjaCk7XG5leHBvcnQgeyBpc1VzaW5nU3RhdGljUmVuZGVyaW5nLCBlbmFibGVTdGF0aWNSZW5kZXJpbmcgfSBmcm9tIFwiLi9zdGF0aWNSZW5kZXJpbmdcIjtcbmV4cG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIi4vb2JzZXJ2ZXJcIjtcbmV4cG9ydCB7IE9ic2VydmVyIH0gZnJvbSBcIi4vT2JzZXJ2ZXJDb21wb25lbnRcIjtcbmV4cG9ydCB7IHVzZUxvY2FsT2JzZXJ2YWJsZSB9IGZyb20gXCIuL3VzZUxvY2FsT2JzZXJ2YWJsZVwiO1xuZXhwb3J0IHsgdXNlTG9jYWxTdG9yZSB9IGZyb20gXCIuL3VzZUxvY2FsU3RvcmVcIjtcbmV4cG9ydCB7IHVzZUFzT2JzZXJ2YWJsZVNvdXJjZSB9IGZyb20gXCIuL3VzZUFzT2JzZXJ2YWJsZVNvdXJjZVwiO1xuZXhwb3J0IHsgcmVzZXRDbGVhbnVwU2NoZWR1bGVGb3JUZXN0cyBhcyBjbGVhclRpbWVycyB9IGZyb20gXCIuL3V0aWxzL3JlYWN0aW9uQ2xlYW51cFRyYWNraW5nXCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlT2JzZXJ2ZXIoZm4sIGJhc2VDb21wb25lbnROYW1lKSB7XG4gICAgaWYgKGJhc2VDb21wb25lbnROYW1lID09PSB2b2lkIDApIHsgYmFzZUNvbXBvbmVudE5hbWUgPSBcIm9ic2VydmVkXCI7IH1cbiAgICBpZiAoXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WKSB7XG4gICAgICAgIHVzZURlcHJlY2F0ZWQoXCJbbW9ieC1yZWFjdC1saXRlXSAndXNlT2JzZXJ2ZXIoZm4pJyBpcyBkZXByZWNhdGVkLiBVc2UgYDxPYnNlcnZlcj57Zm59PC9PYnNlcnZlcj5gIGluc3RlYWQsIG9yIHdyYXAgdGhlIGVudGlyZSBjb21wb25lbnQgaW4gYG9ic2VydmVyYC5cIik7XG4gICAgfVxuICAgIHJldHVybiB1c2VPYnNlcnZlck9yaWdpbmFsKGZuLCBiYXNlQ29tcG9uZW50TmFtZSk7XG59XG5leHBvcnQgeyBpc09ic2VydmVyQmF0Y2hlZCwgb2JzZXJ2ZXJCYXRjaGluZyB9IGZyb20gXCIuL3V0aWxzL29ic2VydmVyQmF0Y2hpbmdcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGF0aWNSZW5kZXJpbmcoZW5hYmxlKSB7XG4gICAgaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJbbW9ieC1yZWFjdC1saXRlXSAndXNlU3RhdGljUmVuZGVyaW5nJyBpcyBkZXByZWNhdGVkLCB1c2UgJ2VuYWJsZVN0YXRpY1JlbmRlcmluZycgaW5zdGVhZFwiKTtcbiAgICB9XG4gICAgZW5hYmxlU3RhdGljUmVuZGVyaW5nKGVuYWJsZSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsgZm9yd2FyZFJlZiwgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaXNVc2luZ1N0YXRpY1JlbmRlcmluZyB9IGZyb20gXCIuL3N0YXRpY1JlbmRlcmluZ1wiO1xuaW1wb3J0IHsgdXNlT2JzZXJ2ZXIgfSBmcm9tIFwiLi91c2VPYnNlcnZlclwiO1xuLy8gbi5iLiBiYXNlIGNhc2UgaXMgbm90IHVzZWQgZm9yIGFjdHVhbCB0eXBpbmdzIG9yIGV4cG9ydGVkIGluIHRoZSB0eXBpbmcgZmlsZXNcbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlcihiYXNlQ29tcG9uZW50LCBvcHRpb25zKSB7XG4gICAgLy8gVGhlIHdvcmtpbmcgb2Ygb2JzZXJ2ZXIgaXMgZXhwbGFpbmVkIHN0ZXAgYnkgc3RlcCBpbiB0aGlzIHRhbGs6IGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9Y1BGNGlCZWRvRjAmZmVhdHVyZT15b3V0dS5iZSZ0PTEzMDdcbiAgICBpZiAoaXNVc2luZ1N0YXRpY1JlbmRlcmluZygpKSB7XG4gICAgICAgIHJldHVybiBiYXNlQ29tcG9uZW50O1xuICAgIH1cbiAgICB2YXIgcmVhbE9wdGlvbnMgPSBfX2Fzc2lnbih7IGZvcndhcmRSZWY6IGZhbHNlIH0sIG9wdGlvbnMpO1xuICAgIHZhciBiYXNlQ29tcG9uZW50TmFtZSA9IGJhc2VDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgYmFzZUNvbXBvbmVudC5uYW1lO1xuICAgIHZhciB3cmFwcGVkQ29tcG9uZW50ID0gZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgICAgICAgcmV0dXJuIHVzZU9ic2VydmVyKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGJhc2VDb21wb25lbnQocHJvcHMsIHJlZik7IH0sIGJhc2VDb21wb25lbnROYW1lKTtcbiAgICB9O1xuICAgIHdyYXBwZWRDb21wb25lbnQuZGlzcGxheU5hbWUgPSBiYXNlQ29tcG9uZW50TmFtZTtcbiAgICAvLyBtZW1vOyB3ZSBhcmUgbm90IGludGVyZXN0ZWQgaW4gZGVlcCB1cGRhdGVzXG4gICAgLy8gaW4gcHJvcHM7IHdlIGFzc3VtZSB0aGF0IGlmIGRlZXAgb2JqZWN0cyBhcmUgY2hhbmdlZCxcbiAgICAvLyB0aGlzIGlzIGluIG9ic2VydmFibGVzLCB3aGljaCB3b3VsZCBoYXZlIGJlZW4gdHJhY2tlZCBhbnl3YXlcbiAgICB2YXIgbWVtb0NvbXBvbmVudDtcbiAgICBpZiAocmVhbE9wdGlvbnMuZm9yd2FyZFJlZikge1xuICAgICAgICAvLyB3ZSBoYXZlIHRvIHVzZSBmb3J3YXJkUmVmIGhlcmUgYmVjYXVzZTpcbiAgICAgICAgLy8gMS4gaXQgY2Fubm90IGdvIGJlZm9yZSBtZW1vLCBvbmx5IGFmdGVyIGl0XG4gICAgICAgIC8vIDIuIGZvcndhcmRSZWYgY29udmVydHMgdGhlIGZ1bmN0aW9uIGludG8gYW4gYWN0dWFsIGNvbXBvbmVudCwgc28gd2UgY2FuJ3QgbGV0IHRoZSBiYXNlQ29tcG9uZW50IGRvIGl0XG4gICAgICAgIC8vICAgIHNpbmNlIGl0IHdvdWxkbid0IGJlIGEgY2FsbGFibGUgZnVuY3Rpb24gYW55bW9yZVxuICAgICAgICBtZW1vQ29tcG9uZW50ID0gbWVtbyhmb3J3YXJkUmVmKHdyYXBwZWRDb21wb25lbnQpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG1lbW9Db21wb25lbnQgPSBtZW1vKHdyYXBwZWRDb21wb25lbnQpO1xuICAgIH1cbiAgICBjb3B5U3RhdGljUHJvcGVydGllcyhiYXNlQ29tcG9uZW50LCBtZW1vQ29tcG9uZW50KTtcbiAgICBtZW1vQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gYmFzZUNvbXBvbmVudE5hbWU7XG4gICAgcmV0dXJuIG1lbW9Db21wb25lbnQ7XG59XG4vLyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vbXJpZGd3YXkvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvYmxvYi9tYXN0ZXIvc3JjL2luZGV4LmpzXG52YXIgaG9pc3RCbGFja0xpc3QgPSB7XG4gICAgJCR0eXBlb2Y6IHRydWUsXG4gICAgcmVuZGVyOiB0cnVlLFxuICAgIGNvbXBhcmU6IHRydWUsXG4gICAgdHlwZTogdHJ1ZVxufTtcbmZ1bmN0aW9uIGNvcHlTdGF0aWNQcm9wZXJ0aWVzKGJhc2UsIHRhcmdldCkge1xuICAgIE9iamVjdC5rZXlzKGJhc2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoIWhvaXN0QmxhY2tMaXN0W2tleV0pIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBrZXkpKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2JzZXJ2ZXIuanMubWFwIiwidmFyIGdsb2JhbElzVXNpbmdTdGF0aWNSZW5kZXJpbmcgPSBmYWxzZTtcbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVTdGF0aWNSZW5kZXJpbmcoZW5hYmxlKSB7XG4gICAgZ2xvYmFsSXNVc2luZ1N0YXRpY1JlbmRlcmluZyA9IGVuYWJsZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1VzaW5nU3RhdGljUmVuZGVyaW5nKCkge1xuICAgIHJldHVybiBnbG9iYWxJc1VzaW5nU3RhdGljUmVuZGVyaW5nO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RhdGljUmVuZGVyaW5nLmpzLm1hcCIsInZhciBfX3JlYWQgPSAodGhpcyAmJiB0aGlzLl9fcmVhZCkgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gICAgaWYgKCFtKSByZXR1cm4gbztcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgICB0cnkge1xuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgICB9XG4gICAgcmV0dXJuIGFyO1xufTtcbmltcG9ydCB7IHVzZURlcHJlY2F0ZWQgfSBmcm9tIFwiLi91dGlscy91dGlsc1wiO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSwgcnVuSW5BY3Rpb24gfSBmcm9tIFwibW9ieFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VBc09ic2VydmFibGVTb3VyY2UoY3VycmVudCkge1xuICAgIGlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYpXG4gICAgICAgIHVzZURlcHJlY2F0ZWQoXCJbbW9ieC1yZWFjdC1saXRlXSAndXNlQXNPYnNlcnZhYmxlU291cmNlJyBpcyBkZXByZWNhdGVkLCBwbGVhc2Ugc3RvcmUgdGhlIHZhbHVlcyBkaXJlY3RseSBpbiBhbiBvYnNlcnZhYmxlLCBmb3IgZXhhbXBsZSBieSB1c2luZyAndXNlTG9jYWxPYnNlcnZhYmxlJywgYW5kIHN5bmMgZnV0dXJlIHVwZGF0ZXMgdXNpbmcgJ3VzZUVmZmVjdCcgd2hlbiBuZWVkZWQuIFNlZSB0aGUgUkVBRE1FIGZvciBleGFtcGxlcy5cIik7XG4gICAgdmFyIF9hID0gX19yZWFkKHVzZVN0YXRlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9ic2VydmFibGUoY3VycmVudCwge30sIHsgZGVlcDogZmFsc2UgfSk7IH0pLCAxKSwgcmVzID0gX2FbMF07XG4gICAgcnVuSW5BY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHJlcywgY3VycmVudCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZUFzT2JzZXJ2YWJsZVNvdXJjZS5qcy5tYXAiLCJpbXBvcnQgeyBvYnNlcnZhYmxlIH0gZnJvbSBcIm1vYnhcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlTG9jYWxPYnNlcnZhYmxlKGluaXRpYWxpemVyLCBhbm5vdGF0aW9ucykge1xuICAgIHJldHVybiB1c2VTdGF0ZShmdW5jdGlvbiAoKSB7IHJldHVybiBvYnNlcnZhYmxlKGluaXRpYWxpemVyKCksIGFubm90YXRpb25zLCB7IGF1dG9CaW5kOiB0cnVlIH0pOyB9KVswXTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZUxvY2FsT2JzZXJ2YWJsZS5qcy5tYXAiLCJpbXBvcnQgeyBvYnNlcnZhYmxlIH0gZnJvbSBcIm1vYnhcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEZXByZWNhdGVkIH0gZnJvbSBcIi4vdXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IHVzZUFzT2JzZXJ2YWJsZVNvdXJjZSB9IGZyb20gXCIuL3VzZUFzT2JzZXJ2YWJsZVNvdXJjZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvY2FsU3RvcmUoaW5pdGlhbGl6ZXIsIGN1cnJlbnQpIHtcbiAgICBpZiAoXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WKVxuICAgICAgICB1c2VEZXByZWNhdGVkKFwiW21vYngtcmVhY3QtbGl0ZV0gJ3VzZUxvY2FsU3RvcmUnIGlzIGRlcHJlY2F0ZWQsIHVzZSAndXNlTG9jYWxPYnNlcnZhYmxlJyBpbnN0ZWFkLlwiKTtcbiAgICB2YXIgc291cmNlID0gY3VycmVudCAmJiB1c2VBc09ic2VydmFibGVTb3VyY2UoY3VycmVudCk7XG4gICAgcmV0dXJuIHVzZVN0YXRlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9ic2VydmFibGUoaW5pdGlhbGl6ZXIoc291cmNlKSwgdW5kZWZpbmVkLCB7IGF1dG9CaW5kOiB0cnVlIH0pOyB9KVswXTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZUxvY2FsU3RvcmUuanMubWFwIiwidmFyIF9fcmVhZCA9ICh0aGlzICYmIHRoaXMuX19yZWFkKSB8fCBmdW5jdGlvbiAobywgbikge1xuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgICBpZiAoIW0pIHJldHVybiBvO1xuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xuICAgIHRyeSB7XG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxuICAgIH1cbiAgICByZXR1cm4gYXI7XG59O1xuaW1wb3J0IHsgUmVhY3Rpb24gfSBmcm9tIFwibW9ieFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcHJpbnREZWJ1Z1ZhbHVlIH0gZnJvbSBcIi4vdXRpbHMvcHJpbnREZWJ1Z1ZhbHVlXCI7XG5pbXBvcnQgeyBhZGRSZWFjdGlvblRvVHJhY2ssIHJlY29yZFJlYWN0aW9uQXNDb21taXR0ZWQgfSBmcm9tIFwiLi91dGlscy9yZWFjdGlvbkNsZWFudXBUcmFja2luZ1wiO1xuaW1wb3J0IHsgaXNVc2luZ1N0YXRpY1JlbmRlcmluZyB9IGZyb20gXCIuL3N0YXRpY1JlbmRlcmluZ1wiO1xuaW1wb3J0IHsgdXNlRm9yY2VVcGRhdGUgfSBmcm9tIFwiLi91dGlscy91dGlsc1wiO1xuZnVuY3Rpb24gb2JzZXJ2ZXJDb21wb25lbnROYW1lRm9yKGJhc2VDb21wb25lbnROYW1lKSB7XG4gICAgcmV0dXJuIFwib2JzZXJ2ZXJcIiArIGJhc2VDb21wb25lbnROYW1lO1xufVxuLyoqXG4gKiBXZSB1c2UgY2xhc3MgdG8gbWFrZSBpdCBlYXNpZXIgdG8gZGV0ZWN0IGluIGhlYXAgc25hcHNob3RzIGJ5IG5hbWVcbiAqL1xudmFyIE9iamVjdFRvQmVSZXRhaW5lZEJ5UmVhY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gT2JqZWN0VG9CZVJldGFpbmVkQnlSZWFjdCgpIHtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdFRvQmVSZXRhaW5lZEJ5UmVhY3Q7XG59KCkpO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU9ic2VydmVyKGZuLCBiYXNlQ29tcG9uZW50TmFtZSkge1xuICAgIGlmIChiYXNlQ29tcG9uZW50TmFtZSA9PT0gdm9pZCAwKSB7IGJhc2VDb21wb25lbnROYW1lID0gXCJvYnNlcnZlZFwiOyB9XG4gICAgaWYgKGlzVXNpbmdTdGF0aWNSZW5kZXJpbmcoKSkge1xuICAgICAgICByZXR1cm4gZm4oKTtcbiAgICB9XG4gICAgdmFyIF9hID0gX19yZWFkKFJlYWN0LnVzZVN0YXRlKG5ldyBPYmplY3RUb0JlUmV0YWluZWRCeVJlYWN0KCkpLCAxKSwgb2JqZWN0UmV0YWluZWRCeVJlYWN0ID0gX2FbMF07XG4gICAgdmFyIGZvcmNlVXBkYXRlID0gdXNlRm9yY2VVcGRhdGUoKTtcbiAgICAvLyBTdHJpY3RNb2RlL0NvbmN1cnJlbnRNb2RlL1N1c3BlbnNlIG1heSBtZWFuIHRoYXQgb3VyIGNvbXBvbmVudCBpc1xuICAgIC8vIHJlbmRlcmVkIGFuZCBhYmFuZG9uZWQgbXVsdGlwbGUgdGltZXMsIHNvIHdlIG5lZWQgdG8gdHJhY2sgbGVha2VkXG4gICAgLy8gUmVhY3Rpb25zLlxuICAgIHZhciByZWFjdGlvblRyYWNraW5nUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAgIGlmICghcmVhY3Rpb25UcmFja2luZ1JlZi5jdXJyZW50KSB7XG4gICAgICAgIC8vIEZpcnN0IHJlbmRlciBmb3IgdGhpcyBjb21wb25lbnQgKG9yIGZpcnN0IHRpbWUgc2luY2UgYSBwcmV2aW91c1xuICAgICAgICAvLyByZWFjdGlvbiBmcm9tIGFuIGFiYW5kb25lZCByZW5kZXIgd2FzIGRpc3Bvc2VkKS5cbiAgICAgICAgdmFyIG5ld1JlYWN0aW9uID0gbmV3IFJlYWN0aW9uKG9ic2VydmVyQ29tcG9uZW50TmFtZUZvcihiYXNlQ29tcG9uZW50TmFtZSksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIE9ic2VydmFibGUgaGFzIGNoYW5nZWQsIG1lYW5pbmcgd2Ugd2FudCB0byByZS1yZW5kZXJcbiAgICAgICAgICAgIC8vIEJVVCBpZiB3ZSdyZSBhIGNvbXBvbmVudCB0aGF0IGhhc24ndCB5ZXQgZ290IHRvIHRoZSB1c2VFZmZlY3QoKVxuICAgICAgICAgICAgLy8gc3RhZ2UsIHdlIG1pZ2h0IGJlIGEgY29tcG9uZW50IHRoYXQgX3N0YXJ0ZWRfIHRvIHJlbmRlciwgYnV0XG4gICAgICAgICAgICAvLyBnb3QgZHJvcHBlZCwgYW5kIHdlIGRvbid0IHdhbnQgdG8gbWFrZSBzdGF0ZSBjaGFuZ2VzIHRoZW4uXG4gICAgICAgICAgICAvLyAoSXQgdHJpZ2dlcnMgd2FybmluZ3MgaW4gU3RyaWN0TW9kZSwgZm9yIGEgc3RhcnQuKVxuICAgICAgICAgICAgaWYgKHRyYWNraW5nRGF0YV8xLm1vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIHJlYWNoZWQgdXNlRWZmZWN0KCksIHNvIHdlJ3JlIG1vdW50ZWQsIGFuZCBjYW4gdHJpZ2dlciBhbiB1cGRhdGVcbiAgICAgICAgICAgICAgICBmb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZW4ndCB5ZXQgcmVhY2hlZCB1c2VFZmZlY3QoKSwgc28gd2UnbGwgbmVlZCB0byB0cmlnZ2VyIGEgcmUtcmVuZGVyXG4gICAgICAgICAgICAgICAgLy8gd2hlbiAoYW5kIGlmKSB1c2VFZmZlY3QoKSBhcnJpdmVzLlxuICAgICAgICAgICAgICAgIHRyYWNraW5nRGF0YV8xLmNoYW5nZWRCZWZvcmVNb3VudCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgdHJhY2tpbmdEYXRhXzEgPSBhZGRSZWFjdGlvblRvVHJhY2socmVhY3Rpb25UcmFja2luZ1JlZiwgbmV3UmVhY3Rpb24sIG9iamVjdFJldGFpbmVkQnlSZWFjdCk7XG4gICAgfVxuICAgIHZhciByZWFjdGlvbiA9IHJlYWN0aW9uVHJhY2tpbmdSZWYuY3VycmVudC5yZWFjdGlvbjtcbiAgICBSZWFjdC51c2VEZWJ1Z1ZhbHVlKHJlYWN0aW9uLCBwcmludERlYnVnVmFsdWUpO1xuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIENhbGxlZCBvbiBmaXJzdCBtb3VudCBvbmx5XG4gICAgICAgIHJlY29yZFJlYWN0aW9uQXNDb21taXR0ZWQocmVhY3Rpb25UcmFja2luZ1JlZik7XG4gICAgICAgIGlmIChyZWFjdGlvblRyYWNraW5nUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIC8vIEdyZWF0LiBXZSd2ZSBhbHJlYWR5IGdvdCBvdXIgcmVhY3Rpb24gZnJvbSBvdXIgcmVuZGVyO1xuICAgICAgICAgICAgLy8gYWxsIHdlIG5lZWQgdG8gZG8gaXMgdG8gcmVjb3JkIHRoYXQgaXQncyBub3cgbW91bnRlZCxcbiAgICAgICAgICAgIC8vIHRvIGFsbG93IGZ1dHVyZSBvYnNlcnZhYmxlIGNoYW5nZXMgdG8gdHJpZ2dlciByZS1yZW5kZXJzXG4gICAgICAgICAgICByZWFjdGlvblRyYWNraW5nUmVmLmN1cnJlbnQubW91bnRlZCA9IHRydWU7XG4gICAgICAgICAgICAvLyBHb3QgYSBjaGFuZ2UgYmVmb3JlIGZpcnN0IG1vdW50LCBmb3JjZSBhbiB1cGRhdGVcbiAgICAgICAgICAgIGlmIChyZWFjdGlvblRyYWNraW5nUmVmLmN1cnJlbnQuY2hhbmdlZEJlZm9yZU1vdW50KSB7XG4gICAgICAgICAgICAgICAgcmVhY3Rpb25UcmFja2luZ1JlZi5jdXJyZW50LmNoYW5nZWRCZWZvcmVNb3VudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBUaGUgcmVhY3Rpb24gd2Ugc2V0IHVwIGluIG91ciByZW5kZXIgaGFzIGJlZW4gZGlzcG9zZWQuXG4gICAgICAgICAgICAvLyBUaGlzIGNhbiBiZSBkdWUgdG8gYmFkIHRpbWluZ3Mgb2YgcmVuZGVyaW5ncywgZS5nLiBvdXJcbiAgICAgICAgICAgIC8vIGNvbXBvbmVudCB3YXMgcGF1c2VkIGZvciBhIF92ZXJ5XyBsb25nIHRpbWUsIGFuZCBvdXJcbiAgICAgICAgICAgIC8vIHJlYWN0aW9uIGdvdCBjbGVhbmVkIHVwXG4gICAgICAgICAgICAvLyBSZS1jcmVhdGUgdGhlIHJlYWN0aW9uXG4gICAgICAgICAgICByZWFjdGlvblRyYWNraW5nUmVmLmN1cnJlbnQgPSB7XG4gICAgICAgICAgICAgICAgcmVhY3Rpb246IG5ldyBSZWFjdGlvbihvYnNlcnZlckNvbXBvbmVudE5hbWVGb3IoYmFzZUNvbXBvbmVudE5hbWUpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlJ3ZlIGRlZmluaXRlbHkgYWxyZWFkeSBiZWVuIG1vdW50ZWQgYXQgdGhpcyBwb2ludFxuICAgICAgICAgICAgICAgICAgICBmb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIG1vdW50ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2hhbmdlZEJlZm9yZU1vdW50OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjbGVhbkF0OiBJbmZpbml0eVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlYWN0aW9uVHJhY2tpbmdSZWYuY3VycmVudC5yZWFjdGlvbi5kaXNwb3NlKCk7XG4gICAgICAgICAgICByZWFjdGlvblRyYWNraW5nUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcbiAgICAvLyByZW5kZXIgdGhlIG9yaWdpbmFsIGNvbXBvbmVudCwgYnV0IGhhdmUgdGhlXG4gICAgLy8gcmVhY3Rpb24gdHJhY2sgdGhlIG9ic2VydmFibGVzLCBzbyB0aGF0IHJlbmRlcmluZ1xuICAgIC8vIGNhbiBiZSBpbnZhbGlkYXRlZCAoc2VlIGFib3ZlKSBvbmNlIGEgZGVwZW5kZW5jeSBjaGFuZ2VzXG4gICAgdmFyIHJlbmRlcmluZztcbiAgICB2YXIgZXhjZXB0aW9uO1xuICAgIHJlYWN0aW9uLnRyYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlbmRlcmluZyA9IGZuKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IGU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoZXhjZXB0aW9uKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjsgLy8gcmUtdGhyb3cgYW55IGV4Y2VwdGlvbnMgY2F1Z2h0IGR1cmluZyByZW5kZXJpbmdcbiAgICB9XG4gICAgcmV0dXJuIHJlbmRlcmluZztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZU9ic2VydmVyLmpzLm1hcCIsInZhciBGaW5hbGl6YXRpb25SZWdpc3RyeUxvY2FsID0gdHlwZW9mIEZpbmFsaXphdGlvblJlZ2lzdHJ5ID09PSBcInVuZGVmaW5lZFwiID8gdW5kZWZpbmVkIDogRmluYWxpemF0aW9uUmVnaXN0cnk7XG5leHBvcnQgeyBGaW5hbGl6YXRpb25SZWdpc3RyeUxvY2FsIGFzIEZpbmFsaXphdGlvblJlZ2lzdHJ5IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1GaW5hbGl6YXRpb25SZWdpc3RyeVdyYXBwZXIuanMubWFwIiwiaW1wb3J0IHsgbWFrZU9ic2VydmFibGUgfSBmcm9tIFwibW9ieFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmlmICghdXNlU3RhdGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJtb2J4LXJlYWN0LWxpdGUgcmVxdWlyZXMgUmVhY3Qgd2l0aCBIb29rcyBzdXBwb3J0XCIpO1xufVxuaWYgKCFtYWtlT2JzZXJ2YWJsZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIm1vYngtcmVhY3QtbGl0ZUAzIHJlcXVpcmVzIG1vYnggYXQgbGVhc3QgdmVyc2lvbiA2IHRvIGJlIGF2YWlsYWJsZVwiKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFzc2VydEVudmlyb25tZW50LmpzLm1hcCIsImltcG9ydCB7IGNyZWF0ZVRyYWNraW5nRGF0YSB9IGZyb20gXCIuL3JlYWN0aW9uQ2xlYW51cFRyYWNraW5nQ29tbW9uXCI7XG4vKipcbiAqIEZpbmFsaXphdGlvblJlZ2lzdHJ5LWJhc2VkIHVuY29tbWl0dGVkIHJlYWN0aW9uIGNsZWFudXBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlYWN0aW9uQ2xlYW51cFRyYWNraW5nVXNpbmdGaW5hbGl6YXRpb25SZWdpc3RlcihGaW5hbGl6YXRpb25SZWdpc3RyeSkge1xuICAgIHZhciBjbGVhbnVwVG9rZW5Ub1JlYWN0aW9uVHJhY2tpbmdNYXAgPSBuZXcgTWFwKCk7XG4gICAgdmFyIGdsb2JhbENsZWFudXBUb2tlbnNDb3VudGVyID0gMTtcbiAgICB2YXIgcmVnaXN0cnkgPSBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoZnVuY3Rpb24gY2xlYW51cEZ1bmN0aW9uKHRva2VuKSB7XG4gICAgICAgIHZhciB0cmFja2VkUmVhY3Rpb24gPSBjbGVhbnVwVG9rZW5Ub1JlYWN0aW9uVHJhY2tpbmdNYXAuZ2V0KHRva2VuKTtcbiAgICAgICAgaWYgKHRyYWNrZWRSZWFjdGlvbikge1xuICAgICAgICAgICAgdHJhY2tlZFJlYWN0aW9uLnJlYWN0aW9uLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIGNsZWFudXBUb2tlblRvUmVhY3Rpb25UcmFja2luZ01hcC5kZWxldGUodG9rZW4pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkUmVhY3Rpb25Ub1RyYWNrOiBmdW5jdGlvbiAocmVhY3Rpb25UcmFja2luZ1JlZiwgcmVhY3Rpb24sIG9iamVjdFJldGFpbmVkQnlSZWFjdCkge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gZ2xvYmFsQ2xlYW51cFRva2Vuc0NvdW50ZXIrKztcbiAgICAgICAgICAgIHJlZ2lzdHJ5LnJlZ2lzdGVyKG9iamVjdFJldGFpbmVkQnlSZWFjdCwgdG9rZW4sIHJlYWN0aW9uVHJhY2tpbmdSZWYpO1xuICAgICAgICAgICAgcmVhY3Rpb25UcmFja2luZ1JlZi5jdXJyZW50ID0gY3JlYXRlVHJhY2tpbmdEYXRhKHJlYWN0aW9uKTtcbiAgICAgICAgICAgIHJlYWN0aW9uVHJhY2tpbmdSZWYuY3VycmVudC5maW5hbGl6YXRpb25SZWdpc3RyeUNsZWFudXBUb2tlbiA9IHRva2VuO1xuICAgICAgICAgICAgY2xlYW51cFRva2VuVG9SZWFjdGlvblRyYWNraW5nTWFwLnNldCh0b2tlbiwgcmVhY3Rpb25UcmFja2luZ1JlZi5jdXJyZW50KTtcbiAgICAgICAgICAgIHJldHVybiByZWFjdGlvblRyYWNraW5nUmVmLmN1cnJlbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHJlY29yZFJlYWN0aW9uQXNDb21taXR0ZWQ6IGZ1bmN0aW9uIChyZWFjdGlvblJlZikge1xuICAgICAgICAgICAgcmVnaXN0cnkudW5yZWdpc3RlcihyZWFjdGlvblJlZik7XG4gICAgICAgICAgICBpZiAocmVhY3Rpb25SZWYuY3VycmVudCAmJiByZWFjdGlvblJlZi5jdXJyZW50LmZpbmFsaXphdGlvblJlZ2lzdHJ5Q2xlYW51cFRva2VuKSB7XG4gICAgICAgICAgICAgICAgY2xlYW51cFRva2VuVG9SZWFjdGlvblRyYWNraW5nTWFwLmRlbGV0ZShyZWFjdGlvblJlZi5jdXJyZW50LmZpbmFsaXphdGlvblJlZ2lzdHJ5Q2xlYW51cFRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZm9yY2VDbGVhbnVwVGltZXJUb1J1bk5vd0ZvclRlc3RzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBXaGVuIEZpbmFsaXphdGlvblJlZ2lzdHJ5IGluIHVzZSwgdGhpcyB0aGlzIGlzIG5vLW9wXG4gICAgICAgIH0sXG4gICAgICAgIHJlc2V0Q2xlYW51cFNjaGVkdWxlRm9yVGVzdHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFdoZW4gRmluYWxpemF0aW9uUmVnaXN0cnkgaW4gdXNlLCB0aGlzIHRoaXMgaXMgbm8tb3BcbiAgICAgICAgfVxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcmVhdGVSZWFjdGlvbkNsZWFudXBUcmFja2luZ1VzaW5nRmluYWxpemF0aW9uUmVnaXN0ZXIuanMubWFwIiwidmFyIF9fdmFsdWVzID0gKHRoaXMgJiYgdGhpcy5fX3ZhbHVlcykgfHwgZnVuY3Rpb24obykge1xuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG59O1xuaW1wb3J0IHsgQ0xFQU5VUF9USU1FUl9MT09QX01JTExJUywgY3JlYXRlVHJhY2tpbmdEYXRhIH0gZnJvbSBcIi4vcmVhY3Rpb25DbGVhbnVwVHJhY2tpbmdDb21tb25cIjtcbi8qKlxuICogdGltZXJzLCBnYy1zdHlsZSwgdW5jb21taXR0ZWQgcmVhY3Rpb24gY2xlYW51cFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGltZXJCYXNlZFJlYWN0aW9uQ2xlYW51cFRyYWNraW5nKCkge1xuICAgIC8qKlxuICAgICAqIFJlYWN0aW9ucyBjcmVhdGVkIGJ5IGNvbXBvbmVudHMgdGhhdCBoYXZlIHlldCB0byBiZSBmdWxseSBtb3VudGVkLlxuICAgICAqL1xuICAgIHZhciB1bmNvbW1pdHRlZFJlYWN0aW9uUmVmcyA9IG5ldyBTZXQoKTtcbiAgICAvKipcbiAgICAgKiBMYXRlc3QgJ3VuY29tbWl0dGVkIHJlYWN0aW9ucycgY2xlYW51cCB0aW1lciBoYW5kbGUuXG4gICAgICovXG4gICAgdmFyIHJlYWN0aW9uQ2xlYW51cEhhbmRsZTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIC8qKlxuICAgICAqIE9ubHkgdG8gYmUgdXNlZCBieSB0ZXN0IGZ1bmN0aW9uczsgZG8gbm90IGV4cG9ydCBvdXRzaWRlIG9mIG1vYngtcmVhY3QtbGl0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGZvcmNlQ2xlYW51cFRpbWVyVG9SdW5Ob3dGb3JUZXN0cygpIHtcbiAgICAgICAgLy8gVGhpcyBhbGxvd3MgdXMgdG8gY29udHJvbCB0aGUgZXhlY3V0aW9uIG9mIHRoZSBjbGVhbnVwIHRpbWVyXG4gICAgICAgIC8vIHRvIGZvcmNlIGl0IHRvIHJ1biBhdCBhd2t3YXJkIHRpbWVzIGluIHVuaXQgdGVzdHMuXG4gICAgICAgIGlmIChyZWFjdGlvbkNsZWFudXBIYW5kbGUpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChyZWFjdGlvbkNsZWFudXBIYW5kbGUpO1xuICAgICAgICAgICAgY2xlYW5VbmNvbW1pdHRlZFJlYWN0aW9ucygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgZnVuY3Rpb24gcmVzZXRDbGVhbnVwU2NoZWR1bGVGb3JUZXN0cygpIHtcbiAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgIGlmICh1bmNvbW1pdHRlZFJlYWN0aW9uUmVmcy5zaXplID4gMCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB1bmNvbW1pdHRlZFJlYWN0aW9uUmVmc18xID0gX192YWx1ZXModW5jb21taXR0ZWRSZWFjdGlvblJlZnMpLCB1bmNvbW1pdHRlZFJlYWN0aW9uUmVmc18xXzEgPSB1bmNvbW1pdHRlZFJlYWN0aW9uUmVmc18xLm5leHQoKTsgIXVuY29tbWl0dGVkUmVhY3Rpb25SZWZzXzFfMS5kb25lOyB1bmNvbW1pdHRlZFJlYWN0aW9uUmVmc18xXzEgPSB1bmNvbW1pdHRlZFJlYWN0aW9uUmVmc18xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVmID0gdW5jb21taXR0ZWRSZWFjdGlvblJlZnNfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHJhY2tpbmcgPSByZWYuY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyYWNraW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFja2luZy5yZWFjdGlvbi5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVuY29tbWl0dGVkUmVhY3Rpb25SZWZzXzFfMSAmJiAhdW5jb21taXR0ZWRSZWFjdGlvblJlZnNfMV8xLmRvbmUgJiYgKF9hID0gdW5jb21taXR0ZWRSZWFjdGlvblJlZnNfMS5yZXR1cm4pKSBfYS5jYWxsKHVuY29tbWl0dGVkUmVhY3Rpb25SZWZzXzEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1bmNvbW1pdHRlZFJlYWN0aW9uUmVmcy5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdGlvbkNsZWFudXBIYW5kbGUpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChyZWFjdGlvbkNsZWFudXBIYW5kbGUpO1xuICAgICAgICAgICAgcmVhY3Rpb25DbGVhbnVwSGFuZGxlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVuc3VyZUNsZWFudXBUaW1lclJ1bm5pbmcoKSB7XG4gICAgICAgIGlmIChyZWFjdGlvbkNsZWFudXBIYW5kbGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVhY3Rpb25DbGVhbnVwSGFuZGxlID0gc2V0VGltZW91dChjbGVhblVuY29tbWl0dGVkUmVhY3Rpb25zLCBDTEVBTlVQX1RJTUVSX0xPT1BfTUlMTElTKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzY2hlZHVsZUNsZWFudXBPZlJlYWN0aW9uSWZMZWFrZWQocmVmKSB7XG4gICAgICAgIHVuY29tbWl0dGVkUmVhY3Rpb25SZWZzLmFkZChyZWYpO1xuICAgICAgICBlbnN1cmVDbGVhbnVwVGltZXJSdW5uaW5nKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlY29yZFJlYWN0aW9uQXNDb21taXR0ZWQocmVhY3Rpb25SZWYpIHtcbiAgICAgICAgdW5jb21taXR0ZWRSZWFjdGlvblJlZnMuZGVsZXRlKHJlYWN0aW9uUmVmKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUnVuIGJ5IHRoZSBjbGVhbnVwIHRpbWVyIHRvIGRpc3Bvc2UgYW55IG91dHN0YW5kaW5nIHJlYWN0aW9uc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNsZWFuVW5jb21taXR0ZWRSZWFjdGlvbnMoKSB7XG4gICAgICAgIHJlYWN0aW9uQ2xlYW51cEhhbmRsZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCB0aGUgY2FuZGlkYXRlIGxlYWtlZCByZWFjdGlvbnM7IHRob3NlIG9sZGVyXG4gICAgICAgIC8vIHRoYW4gQ0xFQU5VUF9MRUFLRURfUkVBQ1RJT05TX0FGVEVSX01JTExJUyBnZXQgdGlkaWVkLlxuICAgICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdW5jb21taXR0ZWRSZWFjdGlvblJlZnMuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7XG4gICAgICAgICAgICB2YXIgdHJhY2tpbmcgPSByZWYuY3VycmVudDtcbiAgICAgICAgICAgIGlmICh0cmFja2luZykge1xuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gdHJhY2tpbmcuY2xlYW5BdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJdCdzIHRpbWUgdG8gdGlkeSB1cCB0aGlzIGxlYWtlZCByZWFjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgdHJhY2tpbmcucmVhY3Rpb24uZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICByZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHVuY29tbWl0dGVkUmVhY3Rpb25SZWZzLmRlbGV0ZShyZWYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh1bmNvbW1pdHRlZFJlYWN0aW9uUmVmcy5zaXplID4gMCkge1xuICAgICAgICAgICAgLy8gV2UndmUganVzdCBmaW5pc2hlZCBhIHJvdW5kIG9mIGNsZWFudXBzIGJ1dCB0aGVyZSBhcmUgc3RpbGxcbiAgICAgICAgICAgIC8vIHNvbWUgbGVhayBjYW5kaWRhdGVzIG91dHN0YW5kaW5nLlxuICAgICAgICAgICAgZW5zdXJlQ2xlYW51cFRpbWVyUnVubmluZygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFJlYWN0aW9uVG9UcmFjazogZnVuY3Rpb24gKHJlYWN0aW9uVHJhY2tpbmdSZWYsIHJlYWN0aW9uLCBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9uIHRpbWVyIGJhc2VkIGltcGxlbWVudGF0aW9uIHdlIGRvbid0IHJlYWxseSBuZWVkIHRoaXMgb2JqZWN0LFxuICAgICAgICAgKiBidXQgd2Uga2VlcCB0aGUgc2FtZSBhcGlcbiAgICAgICAgICovXG4gICAgICAgIG9iamVjdFJldGFpbmVkQnlSZWFjdCkge1xuICAgICAgICAgICAgcmVhY3Rpb25UcmFja2luZ1JlZi5jdXJyZW50ID0gY3JlYXRlVHJhY2tpbmdEYXRhKHJlYWN0aW9uKTtcbiAgICAgICAgICAgIHNjaGVkdWxlQ2xlYW51cE9mUmVhY3Rpb25JZkxlYWtlZChyZWFjdGlvblRyYWNraW5nUmVmKTtcbiAgICAgICAgICAgIHJldHVybiByZWFjdGlvblRyYWNraW5nUmVmLmN1cnJlbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHJlY29yZFJlYWN0aW9uQXNDb21taXR0ZWQ6IHJlY29yZFJlYWN0aW9uQXNDb21taXR0ZWQsXG4gICAgICAgIGZvcmNlQ2xlYW51cFRpbWVyVG9SdW5Ob3dGb3JUZXN0czogZm9yY2VDbGVhbnVwVGltZXJUb1J1bk5vd0ZvclRlc3RzLFxuICAgICAgICByZXNldENsZWFudXBTY2hlZHVsZUZvclRlc3RzOiByZXNldENsZWFudXBTY2hlZHVsZUZvclRlc3RzXG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZVRpbWVyQmFzZWRSZWFjdGlvbkNsZWFudXBUcmFja2luZy5qcy5tYXAiLCJpbXBvcnQgeyBjb25maWd1cmUgfSBmcm9tIFwibW9ieFwiO1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHROb29wQmF0Y2goY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjaygpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmVyQmF0Y2hpbmcocmVhY3Rpb25TY2hlZHVsZXIpIHtcbiAgICBpZiAoIXJlYWN0aW9uU2NoZWR1bGVyKSB7XG4gICAgICAgIHJlYWN0aW9uU2NoZWR1bGVyID0gZGVmYXVsdE5vb3BCYXRjaDtcbiAgICAgICAgaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW01vYlhdIEZhaWxlZCB0byBnZXQgdW5zdGFibGVfYmF0Y2hlZCB1cGRhdGVzIGZyb20gcmVhY3QtZG9tIC8gcmVhY3QtbmF0aXZlXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbmZpZ3VyZSh7IHJlYWN0aW9uU2NoZWR1bGVyOiByZWFjdGlvblNjaGVkdWxlciB9KTtcbn1cbmV4cG9ydCB2YXIgaXNPYnNlcnZlckJhdGNoZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJbTW9iWF0gRGVwcmVjYXRlZFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2JzZXJ2ZXJCYXRjaGluZy5qcy5tYXAiLCJpbXBvcnQgeyBnZXREZXBlbmRlbmN5VHJlZSB9IGZyb20gXCJtb2J4XCI7XG5leHBvcnQgZnVuY3Rpb24gcHJpbnREZWJ1Z1ZhbHVlKHYpIHtcbiAgICByZXR1cm4gZ2V0RGVwZW5kZW5jeVRyZWUodik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmludERlYnVnVmFsdWUuanMubWFwIiwiZXhwb3J0IHsgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdEJhdGNoZWRVcGRhdGVzLmpzLm1hcCIsImltcG9ydCB7IEZpbmFsaXphdGlvblJlZ2lzdHJ5IGFzIEZpbmFsaXphdGlvblJlZ2lzdHJ5TWF5YmVVbmRlZmluZWQgfSBmcm9tIFwiLi9GaW5hbGl6YXRpb25SZWdpc3RyeVdyYXBwZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVJlYWN0aW9uQ2xlYW51cFRyYWNraW5nVXNpbmdGaW5hbGl6YXRpb25SZWdpc3RlciB9IGZyb20gXCIuL2NyZWF0ZVJlYWN0aW9uQ2xlYW51cFRyYWNraW5nVXNpbmdGaW5hbGl6YXRpb25SZWdpc3RlclwiO1xuaW1wb3J0IHsgY3JlYXRlVGltZXJCYXNlZFJlYWN0aW9uQ2xlYW51cFRyYWNraW5nIH0gZnJvbSBcIi4vY3JlYXRlVGltZXJCYXNlZFJlYWN0aW9uQ2xlYW51cFRyYWNraW5nXCI7XG52YXIgX2EgPSBGaW5hbGl6YXRpb25SZWdpc3RyeU1heWJlVW5kZWZpbmVkXG4gICAgPyBjcmVhdGVSZWFjdGlvbkNsZWFudXBUcmFja2luZ1VzaW5nRmluYWxpemF0aW9uUmVnaXN0ZXIoRmluYWxpemF0aW9uUmVnaXN0cnlNYXliZVVuZGVmaW5lZClcbiAgICA6IGNyZWF0ZVRpbWVyQmFzZWRSZWFjdGlvbkNsZWFudXBUcmFja2luZygpLCBhZGRSZWFjdGlvblRvVHJhY2sgPSBfYS5hZGRSZWFjdGlvblRvVHJhY2ssIHJlY29yZFJlYWN0aW9uQXNDb21taXR0ZWQgPSBfYS5yZWNvcmRSZWFjdGlvbkFzQ29tbWl0dGVkLCByZXNldENsZWFudXBTY2hlZHVsZUZvclRlc3RzID0gX2EucmVzZXRDbGVhbnVwU2NoZWR1bGVGb3JUZXN0cywgZm9yY2VDbGVhbnVwVGltZXJUb1J1bk5vd0ZvclRlc3RzID0gX2EuZm9yY2VDbGVhbnVwVGltZXJUb1J1bk5vd0ZvclRlc3RzO1xuZXhwb3J0IHsgYWRkUmVhY3Rpb25Ub1RyYWNrLCByZWNvcmRSZWFjdGlvbkFzQ29tbWl0dGVkLCByZXNldENsZWFudXBTY2hlZHVsZUZvclRlc3RzLCBmb3JjZUNsZWFudXBUaW1lclRvUnVuTm93Rm9yVGVzdHMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0aW9uQ2xlYW51cFRyYWNraW5nLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUcmFja2luZ0RhdGEocmVhY3Rpb24pIHtcbiAgICB2YXIgdHJhY2tpbmdEYXRhID0ge1xuICAgICAgICByZWFjdGlvbjogcmVhY3Rpb24sXG4gICAgICAgIG1vdW50ZWQ6IGZhbHNlLFxuICAgICAgICBjaGFuZ2VkQmVmb3JlTW91bnQ6IGZhbHNlLFxuICAgICAgICBjbGVhbkF0OiBEYXRlLm5vdygpICsgQ0xFQU5VUF9MRUFLRURfUkVBQ1RJT05TX0FGVEVSX01JTExJU1xuICAgIH07XG4gICAgcmV0dXJuIHRyYWNraW5nRGF0YTtcbn1cbi8qKlxuICogVGhlIG1pbmltdW0gdGltZSBiZWZvcmUgd2UnbGwgY2xlYW4gdXAgYSBSZWFjdGlvbiBjcmVhdGVkIGluIGEgcmVuZGVyXG4gKiBmb3IgYSBjb21wb25lbnQgdGhhdCBoYXNuJ3QgbWFuYWdlZCB0byBydW4gaXRzIGVmZmVjdHMuIFRoaXMgbmVlZHMgdG9cbiAqIGJlIGJpZyBlbm91Z2ggdG8gZW5zdXJlIHRoYXQgYSBjb21wb25lbnQgd29uJ3QgdHVybiB1cCBhbmQgaGF2ZSBpdHNcbiAqIGVmZmVjdHMgcnVuIHdpdGhvdXQgYmVpbmcgcmUtcmVuZGVyZWQuXG4gKi9cbmV4cG9ydCB2YXIgQ0xFQU5VUF9MRUFLRURfUkVBQ1RJT05TX0FGVEVSX01JTExJUyA9IDEwMDAwO1xuLyoqXG4gKiBUaGUgZnJlcXVlbmN5IHdpdGggd2hpY2ggd2UnbGwgY2hlY2sgZm9yIGxlYWtlZCByZWFjdGlvbnMuXG4gKi9cbmV4cG9ydCB2YXIgQ0xFQU5VUF9USU1FUl9MT09QX01JTExJUyA9IDEwMDAwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3Rpb25DbGVhbnVwVHJhY2tpbmdDb21tb24uanMubWFwIiwidmFyIF9fcmVhZCA9ICh0aGlzICYmIHRoaXMuX19yZWFkKSB8fCBmdW5jdGlvbiAobywgbikge1xuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgICBpZiAoIW0pIHJldHVybiBvO1xuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xuICAgIHRyeSB7XG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxuICAgIH1cbiAgICByZXR1cm4gYXI7XG59O1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG52YXIgRU1QVFlfQVJSQVkgPSBbXTtcbmV4cG9ydCBmdW5jdGlvbiB1c2VGb3JjZVVwZGF0ZSgpIHtcbiAgICB2YXIgX2EgPSBfX3JlYWQodXNlU3RhdGUoMCksIDIpLCBzZXRUaWNrID0gX2FbMV07XG4gICAgdmFyIHVwZGF0ZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0VGljayhmdW5jdGlvbiAodGljaykgeyByZXR1cm4gdGljayArIDE7IH0pO1xuICAgIH0sIEVNUFRZX0FSUkFZKTtcbiAgICByZXR1cm4gdXBkYXRlO1xufVxudmFyIGRlcHJlY2F0ZWRNZXNzYWdlcyA9IFtdO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZURlcHJlY2F0ZWQobXNnKSB7XG4gICAgaWYgKCFkZXByZWNhdGVkTWVzc2FnZXMuaW5jbHVkZXMobXNnKSkge1xuICAgICAgICBkZXByZWNhdGVkTWVzc2FnZXMucHVzaChtc2cpO1xuICAgICAgICBjb25zb2xlLndhcm4obXNnKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCJpbXBvcnQgeyBSZWFjdGlvbiwgX2FsbG93U3RhdGVDaGFuZ2VzLCBfYWxsb3dTdGF0ZVJlYWRzU3RhcnQsIF9hbGxvd1N0YXRlUmVhZHNFbmQsICRtb2J4LCBjcmVhdGVBdG9tLCB1bnRyYWNrZWQsIGlzT2JzZXJ2YWJsZU1hcCwgaXNPYnNlcnZhYmxlT2JqZWN0LCBpc09ic2VydmFibGVBcnJheSwgb2JzZXJ2YWJsZSB9IGZyb20gJ21vYngnO1xuaW1wb3J0IFJlYWN0X19kZWZhdWx0LCB7IFB1cmVDb21wb25lbnQsIENvbXBvbmVudCwgZm9yd2FyZFJlZiwgbWVtbywgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzVXNpbmdTdGF0aWNSZW5kZXJpbmcsIE9ic2VydmVyLCBvYnNlcnZlciBhcyBvYnNlcnZlciQxIH0gZnJvbSAnbW9ieC1yZWFjdC1saXRlJztcbmV4cG9ydCB7IE9ic2VydmVyLCBlbmFibGVTdGF0aWNSZW5kZXJpbmcsIGlzVXNpbmdTdGF0aWNSZW5kZXJpbmcsIG9ic2VydmVyQmF0Y2hpbmcsIHVzZUFzT2JzZXJ2YWJsZVNvdXJjZSwgdXNlTG9jYWxPYnNlcnZhYmxlLCB1c2VMb2NhbFN0b3JlLCB1c2VPYnNlcnZlciwgdXNlU3RhdGljUmVuZGVyaW5nIH0gZnJvbSAnbW9ieC1yZWFjdC1saXRlJztcblxudmFyIHN5bWJvbElkID0gMDtcblxuZnVuY3Rpb24gY3JlYXRlU3ltYm9sKG5hbWUpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiBTeW1ib2wobmFtZSk7XG4gIH1cblxuICB2YXIgc3ltYm9sID0gXCJfXyRtb2J4LXJlYWN0IFwiICsgbmFtZSArIFwiIChcIiArIHN5bWJvbElkICsgXCIpXCI7XG4gIHN5bWJvbElkKys7XG4gIHJldHVybiBzeW1ib2w7XG59XG5cbnZhciBjcmVhdGVkU3ltYm9scyA9IHt9O1xuZnVuY3Rpb24gbmV3U3ltYm9sKG5hbWUpIHtcbiAgaWYgKCFjcmVhdGVkU3ltYm9sc1tuYW1lXSkge1xuICAgIGNyZWF0ZWRTeW1ib2xzW25hbWVdID0gY3JlYXRlU3ltYm9sKG5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZWRTeW1ib2xzW25hbWVdO1xufVxuZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcbiAgLy9Gcm9tOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmJqcy9ibG9iL2M2OTkwNGE1MTFiOTAwMjY2OTM1MTY4MjIzMDYzZGQ4NzcyZGZjNDAvcGFja2FnZXMvZmJqcy9zcmMvY29yZS9zaGFsbG93RXF1YWwuanNcbiAgaWYgKGlzKG9iakEsIG9iakIpKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAodHlwZW9mIG9iakEgIT09IFwib2JqZWN0XCIgfHwgb2JqQSA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqQiAhPT0gXCJvYmplY3RcIiB8fCBvYmpCID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXNBLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChvYmpCLCBrZXlzQVtpXSkgfHwgIWlzKG9iakFba2V5c0FbaV1dLCBvYmpCW2tleXNBW2ldXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaXMoeCwgeSkge1xuICAvLyBGcm9tOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmJqcy9ibG9iL2M2OTkwNGE1MTFiOTAwMjY2OTM1MTY4MjIzMDYzZGQ4NzcyZGZjNDAvcGFja2FnZXMvZmJqcy9zcmMvY29yZS9zaGFsbG93RXF1YWwuanNcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgfVxufSAvLyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vbXJpZGd3YXkvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvYmxvYi9tYXN0ZXIvc3JjL2luZGV4LmpzXG5cblxudmFyIGhvaXN0QmxhY2tMaXN0ID0ge1xuICAkJHR5cGVvZjogMSxcbiAgcmVuZGVyOiAxLFxuICBjb21wYXJlOiAxLFxuICB0eXBlOiAxLFxuICBjaGlsZENvbnRleHRUeXBlczogMSxcbiAgY29udGV4dFR5cGU6IDEsXG4gIGNvbnRleHRUeXBlczogMSxcbiAgZGVmYXVsdFByb3BzOiAxLFxuICBnZXREZWZhdWx0UHJvcHM6IDEsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjogMSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiAxLFxuICBtaXhpbnM6IDEsXG4gIHByb3BUeXBlczogMVxufTtcbmZ1bmN0aW9uIGNvcHlTdGF0aWNQcm9wZXJ0aWVzKGJhc2UsIHRhcmdldCkge1xuICB2YXIgcHJvdG9Qcm9wcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE9iamVjdC5nZXRQcm90b3R5cGVPZihiYXNlKSk7XG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGJhc2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICghaG9pc3RCbGFja0xpc3Rba2V5XSAmJiBwcm90b1Byb3BzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBrZXkpKTtcbiAgICB9XG4gIH0pO1xufVxuLyoqXHJcbiAqIEhlbHBlciB0byBzZXQgYHByb3BgIHRvIGB0aGlzYCBhcyBub24tZW51bWVyYWJsZSAoaGlkZGVuIHByb3ApXHJcbiAqIEBwYXJhbSB0YXJnZXRcclxuICogQHBhcmFtIHByb3BcclxuICogQHBhcmFtIHZhbHVlXHJcbiAqL1xuXG5mdW5jdGlvbiBzZXRIaWRkZW5Qcm9wKHRhcmdldCwgcHJvcCwgdmFsdWUpIHtcbiAgaWYgKCFPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIHByb3ApKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcCwge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICB9XG59XG4vKipcclxuICogVXRpbGl0aWVzIGZvciBwYXRjaGluZyBjb21wb25lbnRXaWxsVW5tb3VudCwgdG8gbWFrZSBzdXJlIEBkaXNwb3NlT25Vbm1vdW50IHdvcmtzIGNvcnJlY3RseSBpY20gd2l0aCB1c2VyIGRlZmluZWQgaG9va3NcclxuICogYW5kIHRoZSBoYW5kbGVyIHByb3ZpZGVkIGJ5IG1vYngtcmVhY3RcclxuICovXG5cbnZhciBtb2J4TWl4aW5zID0gLyojX19QVVJFX18qL25ld1N5bWJvbChcInBhdGNoTWl4aW5zXCIpO1xudmFyIG1vYnhQYXRjaGVkRGVmaW5pdGlvbiA9IC8qI19fUFVSRV9fKi9uZXdTeW1ib2woXCJwYXRjaGVkRGVmaW5pdGlvblwiKTtcblxuZnVuY3Rpb24gZ2V0TWl4aW5zKHRhcmdldCwgbWV0aG9kTmFtZSkge1xuICB2YXIgbWl4aW5zID0gdGFyZ2V0W21vYnhNaXhpbnNdID0gdGFyZ2V0W21vYnhNaXhpbnNdIHx8IHt9O1xuICB2YXIgbWV0aG9kTWl4aW5zID0gbWl4aW5zW21ldGhvZE5hbWVdID0gbWl4aW5zW21ldGhvZE5hbWVdIHx8IHt9O1xuICBtZXRob2RNaXhpbnMubG9ja3MgPSBtZXRob2RNaXhpbnMubG9ja3MgfHwgMDtcbiAgbWV0aG9kTWl4aW5zLm1ldGhvZHMgPSBtZXRob2RNaXhpbnMubWV0aG9kcyB8fCBbXTtcbiAgcmV0dXJuIG1ldGhvZE1peGlucztcbn1cblxuZnVuY3Rpb24gd3JhcHBlcihyZWFsTWV0aG9kLCBtaXhpbnMpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICAvLyBsb2NrcyBhcmUgdXNlZCB0byBlbnN1cmUgdGhhdCBtaXhpbnMgYXJlIGludm9rZWQgb25seSBvbmNlIHBlciBpbnZvY2F0aW9uLCBldmVuIG9uIHJlY3Vyc2l2ZSBjYWxsc1xuICBtaXhpbnMubG9ja3MrKztcblxuICB0cnkge1xuICAgIHZhciByZXRWYWw7XG5cbiAgICBpZiAocmVhbE1ldGhvZCAhPT0gdW5kZWZpbmVkICYmIHJlYWxNZXRob2QgIT09IG51bGwpIHtcbiAgICAgIHJldFZhbCA9IHJlYWxNZXRob2QuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldFZhbDtcbiAgfSBmaW5hbGx5IHtcbiAgICBtaXhpbnMubG9ja3MtLTtcblxuICAgIGlmIChtaXhpbnMubG9ja3MgPT09IDApIHtcbiAgICAgIG1peGlucy5tZXRob2RzLmZvckVhY2goZnVuY3Rpb24gKG14KSB7XG4gICAgICAgIG14LmFwcGx5KF90aGlzLCBhcmdzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB3cmFwRnVuY3Rpb24ocmVhbE1ldGhvZCwgbWl4aW5zKSB7XG4gIHZhciBmbiA9IGZ1bmN0aW9uIGZuKCkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHdyYXBwZXIuY2FsbC5hcHBseSh3cmFwcGVyLCBbdGhpcywgcmVhbE1ldGhvZCwgbWl4aW5zXS5jb25jYXQoYXJncykpO1xuICB9O1xuXG4gIHJldHVybiBmbjtcbn1cblxuZnVuY3Rpb24gcGF0Y2godGFyZ2V0LCBtZXRob2ROYW1lLCBtaXhpbk1ldGhvZCkge1xuICB2YXIgbWl4aW5zID0gZ2V0TWl4aW5zKHRhcmdldCwgbWV0aG9kTmFtZSk7XG5cbiAgaWYgKG1peGlucy5tZXRob2RzLmluZGV4T2YobWl4aW5NZXRob2QpIDwgMCkge1xuICAgIG1peGlucy5tZXRob2RzLnB1c2gobWl4aW5NZXRob2QpO1xuICB9XG5cbiAgdmFyIG9sZERlZmluaXRpb24gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgbWV0aG9kTmFtZSk7XG5cbiAgaWYgKG9sZERlZmluaXRpb24gJiYgb2xkRGVmaW5pdGlvblttb2J4UGF0Y2hlZERlZmluaXRpb25dKSB7XG4gICAgLy8gYWxyZWFkeSBwYXRjaGVkIGRlZmluaXRpb24sIGRvIG5vdCByZXBhdGNoXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsTWV0aG9kID0gdGFyZ2V0W21ldGhvZE5hbWVdO1xuICB2YXIgbmV3RGVmaW5pdGlvbiA9IGNyZWF0ZURlZmluaXRpb24odGFyZ2V0LCBtZXRob2ROYW1lLCBvbGREZWZpbml0aW9uID8gb2xkRGVmaW5pdGlvbi5lbnVtZXJhYmxlIDogdW5kZWZpbmVkLCBtaXhpbnMsIG9yaWdpbmFsTWV0aG9kKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbWV0aG9kTmFtZSwgbmV3RGVmaW5pdGlvbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlZmluaXRpb24odGFyZ2V0LCBtZXRob2ROYW1lLCBlbnVtZXJhYmxlLCBtaXhpbnMsIG9yaWdpbmFsTWV0aG9kKSB7XG4gIHZhciBfcmVmO1xuXG4gIHZhciB3cmFwcGVkRnVuYyA9IHdyYXBGdW5jdGlvbihvcmlnaW5hbE1ldGhvZCwgbWl4aW5zKTtcbiAgcmV0dXJuIF9yZWYgPSB7fSwgX3JlZlttb2J4UGF0Y2hlZERlZmluaXRpb25dID0gdHJ1ZSwgX3JlZi5nZXQgPSBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIHdyYXBwZWRGdW5jO1xuICB9LCBfcmVmLnNldCA9IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgIGlmICh0aGlzID09PSB0YXJnZXQpIHtcbiAgICAgIHdyYXBwZWRGdW5jID0gd3JhcEZ1bmN0aW9uKHZhbHVlLCBtaXhpbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB3aGVuIGl0IGlzIGFuIGluc3RhbmNlIG9mIHRoZSBwcm90b3R5cGUvYSBjaGlsZCBwcm90b3R5cGUgcGF0Y2ggdGhhdCBwYXJ0aWN1bGFyIGNhc2UgYWdhaW4gc2VwYXJhdGVseVxuICAgICAgLy8gc2luY2Ugd2UgbmVlZCB0byBzdG9yZSBzZXBhcmF0ZSB2YWx1ZXMgZGVwZW5kaW5nIG9uIHdldGhlciBpdCBpcyB0aGUgYWN0dWFsIGluc3RhbmNlLCB0aGUgcHJvdG90eXBlLCBldGNcbiAgICAgIC8vIGUuZy4gdGhlIG1ldGhvZCBmb3Igc3VwZXIgbWlnaHQgbm90IGJlIHRoZSBzYW1lIGFzIHRoZSBtZXRob2QgZm9yIHRoZSBwcm90b3R5cGUgd2hpY2ggbWlnaHQgYmUgbm90IHRoZSBzYW1lXG4gICAgICAvLyBhcyB0aGUgbWV0aG9kIGZvciB0aGUgaW5zdGFuY2VcbiAgICAgIHZhciBuZXdEZWZpbml0aW9uID0gY3JlYXRlRGVmaW5pdGlvbih0aGlzLCBtZXRob2ROYW1lLCBlbnVtZXJhYmxlLCBtaXhpbnMsIHZhbHVlKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBtZXRob2ROYW1lLCBuZXdEZWZpbml0aW9uKTtcbiAgICB9XG4gIH0sIF9yZWYuY29uZmlndXJhYmxlID0gdHJ1ZSwgX3JlZi5lbnVtZXJhYmxlID0gZW51bWVyYWJsZSwgX3JlZjtcbn1cblxudmFyIG1vYnhBZG1pblByb3BlcnR5ID0gJG1vYnggfHwgXCIkbW9ieFwiO1xudmFyIG1vYnhPYnNlcnZlclByb3BlcnR5ID0gLyojX19QVVJFX18qL25ld1N5bWJvbChcImlzTW9iWFJlYWN0T2JzZXJ2ZXJcIik7XG52YXIgbW9ieElzVW5tb3VudGVkID0gLyojX19QVVJFX18qL25ld1N5bWJvbChcImlzVW5tb3VudGVkXCIpO1xudmFyIHNraXBSZW5kZXJLZXkgPSAvKiNfX1BVUkVfXyovbmV3U3ltYm9sKFwic2tpcFJlbmRlclwiKTtcbnZhciBpc0ZvcmNpbmdVcGRhdGVLZXkgPSAvKiNfX1BVUkVfXyovbmV3U3ltYm9sKFwiaXNGb3JjaW5nVXBkYXRlXCIpO1xuZnVuY3Rpb24gbWFrZUNsYXNzQ29tcG9uZW50T2JzZXJ2ZXIoY29tcG9uZW50Q2xhc3MpIHtcbiAgdmFyIHRhcmdldCA9IGNvbXBvbmVudENsYXNzLnByb3RvdHlwZTtcblxuICBpZiAoY29tcG9uZW50Q2xhc3NbbW9ieE9ic2VydmVyUHJvcGVydHldKSB7XG4gICAgdmFyIGRpc3BsYXlOYW1lID0gZ2V0RGlzcGxheU5hbWUodGFyZ2V0KTtcbiAgICBjb25zb2xlLndhcm4oXCJUaGUgcHJvdmlkZWQgY29tcG9uZW50IGNsYXNzIChcIiArIGRpc3BsYXlOYW1lICsgXCIpIFxcbiAgICAgICAgICAgICAgICBoYXMgYWxyZWFkeSBiZWVuIGRlY2xhcmVkIGFzIGFuIG9ic2VydmVyIGNvbXBvbmVudC5cIik7XG4gIH0gZWxzZSB7XG4gICAgY29tcG9uZW50Q2xhc3NbbW9ieE9ic2VydmVyUHJvcGVydHldID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0YXJnZXQuY29tcG9uZW50V2lsbFJlYWN0KSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgY29tcG9uZW50V2lsbFJlYWN0IGxpZmUtY3ljbGUgZXZlbnQgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZFwiKTtcblxuICBpZiAoY29tcG9uZW50Q2xhc3NbXCJfX3Byb3RvX19cIl0gIT09IFB1cmVDb21wb25lbnQpIHtcbiAgICBpZiAoIXRhcmdldC5zaG91bGRDb21wb25lbnRVcGRhdGUpIHRhcmdldC5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBvYnNlcnZlclNDVTtlbHNlIGlmICh0YXJnZXQuc2hvdWxkQ29tcG9uZW50VXBkYXRlICE9PSBvYnNlcnZlclNDVSkgLy8gbi5iLiB1bmVxdWFsIGNoZWNrLCBpbnN0ZWFkIG9mIGV4aXN0ZW5jZSBjaGVjaywgYXMgQG9ic2VydmVyIG1pZ2h0IGJlIG9uIHN1cGVyY2xhc3MgYXMgd2VsbFxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSXQgaXMgbm90IGFsbG93ZWQgdG8gdXNlIHNob3VsZENvbXBvbmVudFVwZGF0ZSBpbiBvYnNlcnZlciBiYXNlZCBjb21wb25lbnRzLlwiKTtcbiAgfSAvLyB0aGlzLnByb3BzIGFuZCB0aGlzLnN0YXRlIGFyZSBtYWRlIG9ic2VydmFibGUsIGp1c3QgdG8gbWFrZSBzdXJlIEBjb21wdXRlZCBmaWVsZHMgdGhhdFxuICAvLyBhcmUgZGVmaW5lZCBpbnNpZGUgdGhlIGNvbXBvbmVudCwgYW5kIHdoaWNoIHJlbHkgb24gc3RhdGUgb3IgcHJvcHMsIHJlLWNvbXB1dGUgaWYgc3RhdGUgb3IgcHJvcHMgY2hhbmdlXG4gIC8vIChvdGhlcndpc2UgdGhlIGNvbXB1dGVkIHdvdWxkbid0IHVwZGF0ZSBhbmQgYmVjb21lIHN0YWxlIG9uIHByb3BzIGNoYW5nZSwgc2luY2UgcHJvcHMgYXJlIG5vdCBvYnNlcnZhYmxlKVxuICAvLyBIb3dldmVyLCB0aGlzIHNvbHV0aW9uIGlzIG5vdCB3aXRob3V0IGl0J3Mgb3duIHByb2JsZW1zOiBodHRwczovL2dpdGh1Yi5jb20vbW9ieGpzL21vYngtcmVhY3QvaXNzdWVzP3V0Zjg9JUUyJTlDJTkzJnE9aXMlM0Fpc3N1ZStsYWJlbCUzQW9ic2VydmFibGUtcHJvcHMtb3Itbm90K1xuXG5cbiAgbWFrZU9ic2VydmFibGVQcm9wKHRhcmdldCwgXCJwcm9wc1wiKTtcbiAgbWFrZU9ic2VydmFibGVQcm9wKHRhcmdldCwgXCJzdGF0ZVwiKTtcbiAgdmFyIGJhc2VSZW5kZXIgPSB0YXJnZXQucmVuZGVyO1xuXG4gIHRhcmdldC5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG1ha2VDb21wb25lbnRSZWFjdGl2ZS5jYWxsKHRoaXMsIGJhc2VSZW5kZXIpO1xuICB9O1xuXG4gIHBhdGNoKHRhcmdldCwgXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzJHJlbmRlciRtb2J4QWRtaTtcblxuICAgIGlmIChpc1VzaW5nU3RhdGljUmVuZGVyaW5nKCkgPT09IHRydWUpIHJldHVybjtcbiAgICAoX3RoaXMkcmVuZGVyJG1vYnhBZG1pID0gdGhpcy5yZW5kZXJbbW9ieEFkbWluUHJvcGVydHldKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkcmVuZGVyJG1vYnhBZG1pLmRpc3Bvc2UoKTtcbiAgICB0aGlzW21vYnhJc1VubW91bnRlZF0gPSB0cnVlO1xuXG4gICAgaWYgKCF0aGlzLnJlbmRlclttb2J4QWRtaW5Qcm9wZXJ0eV0pIHtcbiAgICAgIC8vIFJlbmRlciBtYXkgaGF2ZSBiZWVuIGhvdC1zd2FwcGVkIGFuZC9vciBvdmVycmlkZW4gYnkgYSBzdWJjbGFzcy5cbiAgICAgIHZhciBfZGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZSh0aGlzKTtcblxuICAgICAgY29uc29sZS53YXJuKFwiVGhlIHJlYWN0aXZlIHJlbmRlciBvZiBhbiBvYnNlcnZlciBjbGFzcyBjb21wb25lbnQgKFwiICsgX2Rpc3BsYXlOYW1lICsgXCIpIFxcbiAgICAgICAgICAgICAgICB3YXMgb3ZlcnJpZGVuIGFmdGVyIE1vYlggYXR0YWNoZWQuIFRoaXMgbWF5IHJlc3VsdCBpbiBhIG1lbW9yeSBsZWFrIGlmIHRoZSBcXG4gICAgICAgICAgICAgICAgb3ZlcnJpZGVuIHJlYWN0aXZlIHJlbmRlciB3YXMgbm90IHByb3Blcmx5IGRpc3Bvc2VkLlwiKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gY29tcG9uZW50Q2xhc3M7XG59IC8vIEdlbmVyYXRlcyBhIGZyaWVuZGx5IG5hbWUgZm9yIGRlYnVnZ2luZ1xuXG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShjb21wKSB7XG4gIHJldHVybiBjb21wLmRpc3BsYXlOYW1lIHx8IGNvbXAubmFtZSB8fCBjb21wLmNvbnN0cnVjdG9yICYmIChjb21wLmNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IGNvbXAuY29uc3RydWN0b3IubmFtZSkgfHwgXCI8Y29tcG9uZW50PlwiO1xufVxuXG5mdW5jdGlvbiBtYWtlQ29tcG9uZW50UmVhY3RpdmUocmVuZGVyKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgaWYgKGlzVXNpbmdTdGF0aWNSZW5kZXJpbmcoKSA9PT0gdHJ1ZSkgcmV0dXJuIHJlbmRlci5jYWxsKHRoaXMpO1xuICAvKipcclxuICAgKiBJZiBwcm9wcyBhcmUgc2hhbGxvd2x5IG1vZGlmaWVkLCByZWFjdCB3aWxsIHJlbmRlciBhbnl3YXksXHJcbiAgICogc28gYXRvbS5yZXBvcnRDaGFuZ2VkKCkgc2hvdWxkIG5vdCByZXN1bHQgaW4geWV0IGFub3RoZXIgcmUtcmVuZGVyXHJcbiAgICovXG5cbiAgc2V0SGlkZGVuUHJvcCh0aGlzLCBza2lwUmVuZGVyS2V5LCBmYWxzZSk7XG4gIC8qKlxyXG4gICAqIGZvcmNlVXBkYXRlIHdpbGwgcmUtYXNzaWduIHRoaXMucHJvcHMuIFdlIGRvbid0IHdhbnQgdGhhdCB0byBjYXVzZSBhIGxvb3AsXHJcbiAgICogc28gZGV0ZWN0IHRoZXNlIGNoYW5nZXNcclxuICAgKi9cblxuICBzZXRIaWRkZW5Qcm9wKHRoaXMsIGlzRm9yY2luZ1VwZGF0ZUtleSwgZmFsc2UpO1xuICB2YXIgaW5pdGlhbE5hbWUgPSBnZXREaXNwbGF5TmFtZSh0aGlzKTtcbiAgdmFyIGJhc2VSZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgdmFyIGlzUmVuZGVyaW5nUGVuZGluZyA9IGZhbHNlO1xuICB2YXIgcmVhY3Rpb24gPSBuZXcgUmVhY3Rpb24oaW5pdGlhbE5hbWUgKyBcIi5yZW5kZXIoKVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFpc1JlbmRlcmluZ1BlbmRpbmcpIHtcbiAgICAgIC8vIE4uQi4gR2V0dGluZyBoZXJlICpiZWZvcmUgbW91bnRpbmcqIG1lYW5zIHRoYXQgYSBjb21wb25lbnQgY29uc3RydWN0b3IgaGFzIHNpZGUgZWZmZWN0cyAoc2VlIHRoZSByZWxldmFudCB0ZXN0IGluIG1pc2MuanMpXG4gICAgICAvLyBUaGlzIHVuaWRpb21hdGljIFJlYWN0IHVzYWdlIGJ1dCBSZWFjdCB3aWxsIGNvcnJlY3RseSB3YXJuIGFib3V0IHRoaXMgc28gd2UgY29udGludWUgYXMgdXN1YWxcbiAgICAgIC8vIFNlZSAjODUgLyBQdWxsICM0NFxuICAgICAgaXNSZW5kZXJpbmdQZW5kaW5nID0gdHJ1ZTtcblxuICAgICAgaWYgKF90aGlzW21vYnhJc1VubW91bnRlZF0gIT09IHRydWUpIHtcbiAgICAgICAgdmFyIGhhc0Vycm9yID0gdHJ1ZTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHNldEhpZGRlblByb3AoX3RoaXMsIGlzRm9yY2luZ1VwZGF0ZUtleSwgdHJ1ZSk7XG4gICAgICAgICAgaWYgKCFfdGhpc1tza2lwUmVuZGVyS2V5XSkgQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZS5jYWxsKF90aGlzKTtcbiAgICAgICAgICBoYXNFcnJvciA9IGZhbHNlO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHNldEhpZGRlblByb3AoX3RoaXMsIGlzRm9yY2luZ1VwZGF0ZUtleSwgZmFsc2UpO1xuICAgICAgICAgIGlmIChoYXNFcnJvcikgcmVhY3Rpb24uZGlzcG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmVhY3Rpb25bXCJyZWFjdENvbXBvbmVudFwiXSA9IHRoaXM7XG4gIHJlYWN0aXZlUmVuZGVyW21vYnhBZG1pblByb3BlcnR5XSA9IHJlYWN0aW9uO1xuICB0aGlzLnJlbmRlciA9IHJlYWN0aXZlUmVuZGVyO1xuXG4gIGZ1bmN0aW9uIHJlYWN0aXZlUmVuZGVyKCkge1xuICAgIGlzUmVuZGVyaW5nUGVuZGluZyA9IGZhbHNlO1xuICAgIHZhciBleGNlcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHJlbmRlcmluZyA9IHVuZGVmaW5lZDtcbiAgICByZWFjdGlvbi50cmFjayhmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZW5kZXJpbmcgPSBfYWxsb3dTdGF0ZUNoYW5nZXMoZmFsc2UsIGJhc2VSZW5kZXIpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBleGNlcHRpb24gPSBlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGV4Y2VwdGlvbikge1xuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiByZW5kZXJpbmc7XG4gIH1cblxuICByZXR1cm4gcmVhY3RpdmVSZW5kZXIuY2FsbCh0aGlzKTtcbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZXJTQ1UobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgaWYgKGlzVXNpbmdTdGF0aWNSZW5kZXJpbmcoKSkge1xuICAgIGNvbnNvbGUud2FybihcIlttb2J4LXJlYWN0XSBJdCBzZWVtcyB0aGF0IGEgcmUtcmVuZGVyaW5nIG9mIGEgUmVhY3QgY29tcG9uZW50IGlzIHRyaWdnZXJlZCB3aGlsZSBpbiBzdGF0aWMgKHNlcnZlci1zaWRlKSBtb2RlLiBQbGVhc2UgbWFrZSBzdXJlIGNvbXBvbmVudHMgYXJlIHJlbmRlcmVkIG9ubHkgb25jZSBzZXJ2ZXItc2lkZS5cIik7XG4gIH0gLy8gdXBkYXRlIG9uIGFueSBzdGF0ZSBjaGFuZ2VzIChhcyBpcyB0aGUgZGVmYXVsdClcblxuXG4gIGlmICh0aGlzLnN0YXRlICE9PSBuZXh0U3RhdGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyB1cGRhdGUgaWYgcHJvcHMgYXJlIHNoYWxsb3dseSBub3QgZXF1YWwsIGluc3BpcmVkIGJ5IFB1cmVSZW5kZXJNaXhpblxuICAvLyB3ZSBjb3VsZCByZXR1cm4ganVzdCAnZmFsc2UnIGhlcmUsIGFuZCBhdm9pZCB0aGUgYHNraXBSZW5kZXJgIGNoZWNrcyBldGNcbiAgLy8gaG93ZXZlciwgaXQgaXMgbmljZXIgaWYgbGlmZWN5Y2xlIGV2ZW50cyBhcmUgdHJpZ2dlcmVkIGxpa2UgdXN1YWxseSxcbiAgLy8gc28gd2UgcmV0dXJuIHRydWUgaGVyZSBpZiBwcm9wcyBhcmUgc2hhbGxvd2x5IG1vZGlmaWVkLlxuXG5cbiAgcmV0dXJuICFzaGFsbG93RXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzKTtcbn1cblxuZnVuY3Rpb24gbWFrZU9ic2VydmFibGVQcm9wKHRhcmdldCwgcHJvcE5hbWUpIHtcbiAgdmFyIHZhbHVlSG9sZGVyS2V5ID0gbmV3U3ltYm9sKFwicmVhY3RQcm9wX1wiICsgcHJvcE5hbWUgKyBcIl92YWx1ZUhvbGRlclwiKTtcbiAgdmFyIGF0b21Ib2xkZXJLZXkgPSBuZXdTeW1ib2woXCJyZWFjdFByb3BfXCIgKyBwcm9wTmFtZSArIFwiX2F0b21Ib2xkZXJcIik7XG5cbiAgZnVuY3Rpb24gZ2V0QXRvbSgpIHtcbiAgICBpZiAoIXRoaXNbYXRvbUhvbGRlcktleV0pIHtcbiAgICAgIHNldEhpZGRlblByb3AodGhpcywgYXRvbUhvbGRlcktleSwgY3JlYXRlQXRvbShcInJlYWN0aXZlIFwiICsgcHJvcE5hbWUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1thdG9tSG9sZGVyS2V5XTtcbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BOYW1lLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgcHJldlJlYWRTdGF0ZSA9IGZhbHNlO1xuXG4gICAgICBpZiAoX2FsbG93U3RhdGVSZWFkc1N0YXJ0ICYmIF9hbGxvd1N0YXRlUmVhZHNFbmQpIHtcbiAgICAgICAgcHJldlJlYWRTdGF0ZSA9IF9hbGxvd1N0YXRlUmVhZHNTdGFydCh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgZ2V0QXRvbS5jYWxsKHRoaXMpLnJlcG9ydE9ic2VydmVkKCk7XG5cbiAgICAgIGlmIChfYWxsb3dTdGF0ZVJlYWRzU3RhcnQgJiYgX2FsbG93U3RhdGVSZWFkc0VuZCkge1xuICAgICAgICBfYWxsb3dTdGF0ZVJlYWRzRW5kKHByZXZSZWFkU3RhdGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpc1t2YWx1ZUhvbGRlcktleV07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgICBpZiAoIXRoaXNbaXNGb3JjaW5nVXBkYXRlS2V5XSAmJiAhc2hhbGxvd0VxdWFsKHRoaXNbdmFsdWVIb2xkZXJLZXldLCB2KSkge1xuICAgICAgICBzZXRIaWRkZW5Qcm9wKHRoaXMsIHZhbHVlSG9sZGVyS2V5LCB2KTtcbiAgICAgICAgc2V0SGlkZGVuUHJvcCh0aGlzLCBza2lwUmVuZGVyS2V5LCB0cnVlKTtcbiAgICAgICAgZ2V0QXRvbS5jYWxsKHRoaXMpLnJlcG9ydENoYW5nZWQoKTtcbiAgICAgICAgc2V0SGlkZGVuUHJvcCh0aGlzLCBza2lwUmVuZGVyS2V5LCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRIaWRkZW5Qcm9wKHRoaXMsIHZhbHVlSG9sZGVyS2V5LCB2KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbFtcImZvclwiXTsgLy8gVXNpbmcgcmVhY3QtaXMgaGFkIHNvbWUgaXNzdWVzIChhbmQgb3BlcmF0ZXMgb24gZWxlbWVudHMsIG5vdCBvbiB0eXBlcyksIHNlZSAjNjA4IC8gIzYwOVxuXG52YXIgUmVhY3RGb3J3YXJkUmVmU3ltYm9sID0gaGFzU3ltYm9sID8gLyojX19QVVJFX18qL1N5bWJvbFtcImZvclwiXShcInJlYWN0LmZvcndhcmRfcmVmXCIpIDogdHlwZW9mIGZvcndhcmRSZWYgPT09IFwiZnVuY3Rpb25cIiAmJiAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG51bGw7XG59KVtcIiQkdHlwZW9mXCJdO1xudmFyIFJlYWN0TWVtb1N5bWJvbCA9IGhhc1N5bWJvbCA/IC8qI19fUFVSRV9fKi9TeW1ib2xbXCJmb3JcIl0oXCJyZWFjdC5tZW1vXCIpIDogdHlwZW9mIG1lbW8gPT09IFwiZnVuY3Rpb25cIiAmJiAvKiNfX1BVUkVfXyovbWVtbyhmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG51bGw7XG59KVtcIiQkdHlwZW9mXCJdO1xuLyoqXHJcbiAqIE9ic2VydmVyIGZ1bmN0aW9uIC8gZGVjb3JhdG9yXHJcbiAqL1xuXG5mdW5jdGlvbiBvYnNlcnZlcihjb21wb25lbnQpIHtcbiAgaWYgKGNvbXBvbmVudFtcImlzTW9ieEluamVjdG9yXCJdID09PSB0cnVlKSB7XG4gICAgY29uc29sZS53YXJuKFwiTW9ieCBvYnNlcnZlcjogWW91IGFyZSB0cnlpbmcgdG8gdXNlICdvYnNlcnZlcicgb24gYSBjb21wb25lbnQgdGhhdCBhbHJlYWR5IGhhcyAnaW5qZWN0Jy4gUGxlYXNlIGFwcGx5ICdvYnNlcnZlcicgYmVmb3JlIGFwcGx5aW5nICdpbmplY3QnXCIpO1xuICB9XG5cbiAgaWYgKFJlYWN0TWVtb1N5bWJvbCAmJiBjb21wb25lbnRbXCIkJHR5cGVvZlwiXSA9PT0gUmVhY3RNZW1vU3ltYm9sKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTW9ieCBvYnNlcnZlcjogWW91IGFyZSB0cnlpbmcgdG8gdXNlICdvYnNlcnZlcicgb24gYSBmdW5jdGlvbiBjb21wb25lbnQgd3JhcHBlZCBpbiBlaXRoZXIgYW5vdGhlciBvYnNlcnZlciBvciAnUmVhY3QubWVtbycuIFRoZSBvYnNlcnZlciBhbHJlYWR5IGFwcGxpZXMgJ1JlYWN0Lm1lbW8nIGZvciB5b3UuXCIpO1xuICB9IC8vIFVud3JhcCBmb3J3YXJkIHJlZnMgaW50byBgPE9ic2VydmVyPmAgY29tcG9uZW50XG4gIC8vIHdlIG5lZWQgdG8gdW53cmFwIHRoZSByZW5kZXIsIGJlY2F1c2UgaXQgaXMgdGhlIGlubmVyIHJlbmRlciB0aGF0IG5lZWRzIHRvIGJlIHRyYWNrZWQsXG4gIC8vIG5vdCB0aGUgRm9yd2FyZFJlZiBIb0NcblxuXG4gIGlmIChSZWFjdEZvcndhcmRSZWZTeW1ib2wgJiYgY29tcG9uZW50W1wiJCR0eXBlb2ZcIl0gPT09IFJlYWN0Rm9yd2FyZFJlZlN5bWJvbCkge1xuICAgIHZhciBiYXNlUmVuZGVyID0gY29tcG9uZW50W1wicmVuZGVyXCJdO1xuICAgIGlmICh0eXBlb2YgYmFzZVJlbmRlciAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3IoXCJyZW5kZXIgcHJvcGVydHkgb2YgRm9yd2FyZFJlZiB3YXMgbm90IGEgZnVuY3Rpb25cIik7XG4gICAgcmV0dXJuIGZvcndhcmRSZWYoZnVuY3Rpb24gT2JzZXJ2ZXJGb3J3YXJkUmVmKCkge1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChPYnNlcnZlciwgbnVsbCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYmFzZVJlbmRlci5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0gLy8gRnVuY3Rpb24gY29tcG9uZW50XG5cblxuICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gXCJmdW5jdGlvblwiICYmICghY29tcG9uZW50LnByb3RvdHlwZSB8fCAhY29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIpICYmICFjb21wb25lbnRbXCJpc1JlYWN0Q2xhc3NcIl0gJiYgIU9iamVjdC5wcm90b3R5cGUuaXNQcm90b3R5cGVPZi5jYWxsKENvbXBvbmVudCwgY29tcG9uZW50KSkge1xuICAgIHJldHVybiBvYnNlcnZlciQxKGNvbXBvbmVudCk7XG4gIH1cblxuICByZXR1cm4gbWFrZUNsYXNzQ29tcG9uZW50T2JzZXJ2ZXIoY29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbnZhciBNb2JYUHJvdmlkZXJDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0LmNyZWF0ZUNvbnRleHQoe30pO1xuZnVuY3Rpb24gUHJvdmlkZXIocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBzdG9yZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wiY2hpbGRyZW5cIl0pO1xuXG4gIHZhciBwYXJlbnRWYWx1ZSA9IFJlYWN0X19kZWZhdWx0LnVzZUNvbnRleHQoTW9iWFByb3ZpZGVyQ29udGV4dCk7XG4gIHZhciBtdXRhYmxlUHJvdmlkZXJSZWYgPSBSZWFjdF9fZGVmYXVsdC51c2VSZWYoX2V4dGVuZHMoe30sIHBhcmVudFZhbHVlLCBzdG9yZXMpKTtcbiAgdmFyIHZhbHVlID0gbXV0YWJsZVByb3ZpZGVyUmVmLmN1cnJlbnQ7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHZhciBuZXdWYWx1ZSA9IF9leHRlbmRzKHt9LCB2YWx1ZSwgc3RvcmVzKTsgLy8gc3ByZWFkIGluIHByZXZpb3VzIHN0YXRlIGZvciB0aGUgY29udGV4dCBiYXNlZCBzdG9yZXNcblxuXG4gICAgaWYgKCFzaGFsbG93RXF1YWwodmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTW9iWCBQcm92aWRlcjogVGhlIHNldCBvZiBwcm92aWRlZCBzdG9yZXMgaGFzIGNoYW5nZWQuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vYnhqcy9tb2J4LXJlYWN0I3RoZS1zZXQtb2YtcHJvdmlkZWQtc3RvcmVzLWhhcy1jaGFuZ2VkLWVycm9yLlwiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChNb2JYUHJvdmlkZXJDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHZhbHVlXG4gIH0sIGNoaWxkcmVuKTtcbn1cblByb3ZpZGVyLmRpc3BsYXlOYW1lID0gXCJNb2JYUHJvdmlkZXJcIjtcblxuLyoqXHJcbiAqIFN0b3JlIEluamVjdGlvblxyXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlU3RvcmVJbmplY3RvcihncmFiU3RvcmVzRm4sIGNvbXBvbmVudCwgaW5qZWN0TmFtZXMsIG1ha2VSZWFjdGl2ZSkge1xuICAvLyBTdXBwb3J0IGZvcndhcmQgcmVmc1xuICB2YXIgSW5qZWN0b3IgPSBSZWFjdF9fZGVmYXVsdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gICAgdmFyIG5ld1Byb3BzID0gX2V4dGVuZHMoe30sIHByb3BzKTtcblxuICAgIHZhciBjb250ZXh0ID0gUmVhY3RfX2RlZmF1bHQudXNlQ29udGV4dChNb2JYUHJvdmlkZXJDb250ZXh0KTtcbiAgICBPYmplY3QuYXNzaWduKG5ld1Byb3BzLCBncmFiU3RvcmVzRm4oY29udGV4dCB8fCB7fSwgbmV3UHJvcHMpIHx8IHt9KTtcblxuICAgIGlmIChyZWYpIHtcbiAgICAgIG5ld1Byb3BzLnJlZiA9IHJlZjtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIG5ld1Byb3BzKTtcbiAgfSk7XG4gIGlmIChtYWtlUmVhY3RpdmUpIEluamVjdG9yID0gb2JzZXJ2ZXIoSW5qZWN0b3IpO1xuICBJbmplY3RvcltcImlzTW9ieEluamVjdG9yXCJdID0gdHJ1ZTsgLy8gYXNzaWduZWQgbGF0ZSB0byBzdXBwcmVzcyBvYnNlcnZlciB3YXJuaW5nXG4gIC8vIFN0YXRpYyBmaWVsZHMgZnJvbSBjb21wb25lbnQgc2hvdWxkIGJlIHZpc2libGUgb24gdGhlIGdlbmVyYXRlZCBJbmplY3RvclxuXG4gIGNvcHlTdGF0aWNQcm9wZXJ0aWVzKGNvbXBvbmVudCwgSW5qZWN0b3IpO1xuICBJbmplY3RvcltcIndyYXBwZWRDb21wb25lbnRcIl0gPSBjb21wb25lbnQ7XG4gIEluamVjdG9yLmRpc3BsYXlOYW1lID0gZ2V0SW5qZWN0TmFtZShjb21wb25lbnQsIGluamVjdE5hbWVzKTtcbiAgcmV0dXJuIEluamVjdG9yO1xufVxuXG5mdW5jdGlvbiBnZXRJbmplY3ROYW1lKGNvbXBvbmVudCwgaW5qZWN0TmFtZXMpIHtcbiAgdmFyIGRpc3BsYXlOYW1lO1xuICB2YXIgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBjb21wb25lbnQubmFtZSB8fCBjb21wb25lbnQuY29uc3RydWN0b3IgJiYgY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUgfHwgXCJDb21wb25lbnRcIjtcbiAgaWYgKGluamVjdE5hbWVzKSBkaXNwbGF5TmFtZSA9IFwiaW5qZWN0LXdpdGgtXCIgKyBpbmplY3ROYW1lcyArIFwiKFwiICsgY29tcG9uZW50TmFtZSArIFwiKVwiO2Vsc2UgZGlzcGxheU5hbWUgPSBcImluamVjdChcIiArIGNvbXBvbmVudE5hbWUgKyBcIilcIjtcbiAgcmV0dXJuIGRpc3BsYXlOYW1lO1xufVxuXG5mdW5jdGlvbiBncmFiU3RvcmVzQnlOYW1lKHN0b3JlTmFtZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiYXNlU3RvcmVzLCBuZXh0UHJvcHMpIHtcbiAgICBzdG9yZU5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHN0b3JlTmFtZSkge1xuICAgICAgaWYgKHN0b3JlTmFtZSBpbiBuZXh0UHJvcHMgLy8gcHJlZmVyIHByb3BzIG92ZXIgc3RvcmVzXG4gICAgICApIHJldHVybjtcbiAgICAgIGlmICghKHN0b3JlTmFtZSBpbiBiYXNlU3RvcmVzKSkgdGhyb3cgbmV3IEVycm9yKFwiTW9iWCBpbmplY3RvcjogU3RvcmUgJ1wiICsgc3RvcmVOYW1lICsgXCInIGlzIG5vdCBhdmFpbGFibGUhIE1ha2Ugc3VyZSBpdCBpcyBwcm92aWRlZCBieSBzb21lIFByb3ZpZGVyXCIpO1xuICAgICAgbmV4dFByb3BzW3N0b3JlTmFtZV0gPSBiYXNlU3RvcmVzW3N0b3JlTmFtZV07XG4gICAgfSk7XG4gICAgcmV0dXJuIG5leHRQcm9wcztcbiAgfTtcbn1cbi8qKlxyXG4gKiBoaWdoZXIgb3JkZXIgY29tcG9uZW50IHRoYXQgaW5qZWN0cyBzdG9yZXMgdG8gYSBjaGlsZC5cclxuICogdGFrZXMgZWl0aGVyIGEgdmFyYXJncyBsaXN0IG9mIHN0cmluZ3MsIHdoaWNoIGFyZSBzdG9yZXMgcmVhZCBmcm9tIHRoZSBjb250ZXh0LFxyXG4gKiBvciBhIGZ1bmN0aW9uIHRoYXQgbWFudWFsbHkgbWFwcyB0aGUgYXZhaWxhYmxlIHN0b3JlcyBmcm9tIHRoZSBjb250ZXh0IHRvIHByb3BzOlxyXG4gKiBzdG9yZXNUb1Byb3BzKG1vYnhTdG9yZXMsIHByb3BzLCBjb250ZXh0KSA9PiBuZXdQcm9wc1xyXG4gKi9cblxuXG5mdW5jdGlvbiBpbmplY3QoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBzdG9yZU5hbWVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHN0b3JlTmFtZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGdyYWJTdG9yZXNGbiA9IGFyZ3VtZW50c1swXTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGNvbXBvbmVudENsYXNzKSB7XG4gICAgICByZXR1cm4gY3JlYXRlU3RvcmVJbmplY3RvcihncmFiU3RvcmVzRm4sIGNvbXBvbmVudENsYXNzLCBncmFiU3RvcmVzRm4ubmFtZSwgdHJ1ZSk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGNvbXBvbmVudENsYXNzKSB7XG4gICAgICByZXR1cm4gY3JlYXRlU3RvcmVJbmplY3RvcihncmFiU3RvcmVzQnlOYW1lKHN0b3JlTmFtZXMpLCBjb21wb25lbnRDbGFzcywgc3RvcmVOYW1lcy5qb2luKFwiLVwiKSwgZmFsc2UpO1xuICAgIH07XG4gIH1cbn1cblxudmFyIHByb3RvU3RvcmVLZXkgPSAvKiNfX1BVUkVfXyovbmV3U3ltYm9sKFwiZGlzcG9zZU9uVW5tb3VudFByb3RvXCIpO1xudmFyIGluc3RTdG9yZUtleSA9IC8qI19fUFVSRV9fKi9uZXdTeW1ib2woXCJkaXNwb3NlT25Vbm1vdW50SW5zdFwiKTtcblxuZnVuY3Rpb24gcnVuRGlzcG9zZXJzT25XaWxsVW5tb3VudCgpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcbiAgW10uY29uY2F0KHRoaXNbcHJvdG9TdG9yZUtleV0gfHwgW10sIHRoaXNbaW5zdFN0b3JlS2V5XSB8fCBbXSkuZm9yRWFjaChmdW5jdGlvbiAocHJvcEtleU9yRnVuY3Rpb24pIHtcbiAgICB2YXIgcHJvcCA9IHR5cGVvZiBwcm9wS2V5T3JGdW5jdGlvbiA9PT0gXCJzdHJpbmdcIiA/IF90aGlzW3Byb3BLZXlPckZ1bmN0aW9uXSA6IHByb3BLZXlPckZ1bmN0aW9uO1xuXG4gICAgaWYgKHByb3AgIT09IHVuZGVmaW5lZCAmJiBwcm9wICE9PSBudWxsKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wKSkgcHJvcC5tYXAoZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgcmV0dXJuIGYoKTtcbiAgICAgIH0pO2Vsc2UgcHJvcCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc3Bvc2VPblVubW91bnQodGFyZ2V0LCBwcm9wZXJ0eUtleU9yRnVuY3Rpb24pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocHJvcGVydHlLZXlPckZ1bmN0aW9uKSkge1xuICAgIHJldHVybiBwcm9wZXJ0eUtleU9yRnVuY3Rpb24ubWFwKGZ1bmN0aW9uIChmbikge1xuICAgICAgcmV0dXJuIGRpc3Bvc2VPblVubW91bnQodGFyZ2V0LCBmbik7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgYyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpLmNvbnN0cnVjdG9yO1xuICB2YXIgYzIgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0LmNvbnN0cnVjdG9yKTsgLy8gU3BlY2lhbCBjYXNlIGZvciByZWFjdC1ob3QtbG9hZGVyXG5cbiAgdmFyIGMzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKE9iamVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpKTtcblxuICBpZiAoIShjID09PSBSZWFjdF9fZGVmYXVsdC5Db21wb25lbnQgfHwgYyA9PT0gUmVhY3RfX2RlZmF1bHQuUHVyZUNvbXBvbmVudCB8fCBjMiA9PT0gUmVhY3RfX2RlZmF1bHQuQ29tcG9uZW50IHx8IGMyID09PSBSZWFjdF9fZGVmYXVsdC5QdXJlQ29tcG9uZW50IHx8IGMzID09PSBSZWFjdF9fZGVmYXVsdC5Db21wb25lbnQgfHwgYzMgPT09IFJlYWN0X19kZWZhdWx0LlB1cmVDb21wb25lbnQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiW21vYngtcmVhY3RdIGRpc3Bvc2VPblVubW91bnQgb25seSBzdXBwb3J0cyBkaXJlY3Qgc3ViY2xhc3NlcyBvZiBSZWFjdC5Db21wb25lbnQgb3IgUmVhY3QuUHVyZUNvbXBvbmVudC5cIik7XG4gIH1cblxuICBpZiAodHlwZW9mIHByb3BlcnR5S2V5T3JGdW5jdGlvbiAhPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgcHJvcGVydHlLZXlPckZ1bmN0aW9uICE9PSBcImZ1bmN0aW9uXCIgJiYgIUFycmF5LmlzQXJyYXkocHJvcGVydHlLZXlPckZ1bmN0aW9uKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlttb2J4LXJlYWN0XSBkaXNwb3NlT25Vbm1vdW50IG9ubHkgd29ya3MgaWYgdGhlIHBhcmFtZXRlciBpcyBlaXRoZXIgYSBwcm9wZXJ0eSBrZXkgb3IgYSBmdW5jdGlvbi5cIik7XG4gIH0gLy8gZGVjb3JhdG9yJ3MgdGFyZ2V0IGlzIHRoZSBwcm90b3R5cGUsIHNvIGl0IGRvZXNuJ3QgaGF2ZSBhbnkgaW5zdGFuY2UgcHJvcGVydGllcyBsaWtlIHByb3BzXG5cblxuICB2YXIgaXNEZWNvcmF0b3IgPSB0eXBlb2YgcHJvcGVydHlLZXlPckZ1bmN0aW9uID09PSBcInN0cmluZ1wiOyAvLyBhZGQgcHJvcGVydHkga2V5IC8gZnVuY3Rpb24gd2Ugd2FudCBydW4gKGRpc3Bvc2VkKSB0byB0aGUgc3RvcmVcblxuICB2YXIgY29tcG9uZW50V2FzQWxyZWFkeU1vZGlmaWVkID0gISF0YXJnZXRbcHJvdG9TdG9yZUtleV0gfHwgISF0YXJnZXRbaW5zdFN0b3JlS2V5XTtcbiAgdmFyIHN0b3JlID0gaXNEZWNvcmF0b3IgPyAvLyBkZWNvcmF0b3JzIGFyZSBhZGRlZCB0byB0aGUgcHJvdG90eXBlIHN0b3JlXG4gIHRhcmdldFtwcm90b1N0b3JlS2V5XSB8fCAodGFyZ2V0W3Byb3RvU3RvcmVLZXldID0gW10pIDogLy8gZnVuY3Rpb25zIGFyZSBhZGRlZCB0byB0aGUgaW5zdGFuY2Ugc3RvcmVcbiAgdGFyZ2V0W2luc3RTdG9yZUtleV0gfHwgKHRhcmdldFtpbnN0U3RvcmVLZXldID0gW10pO1xuICBzdG9yZS5wdXNoKHByb3BlcnR5S2V5T3JGdW5jdGlvbik7IC8vIHR3ZWFrIHRoZSBjb21wb25lbnQgY2xhc3MgY29tcG9uZW50V2lsbFVubW91bnQgaWYgbm90IGRvbmUgYWxyZWFkeVxuXG4gIGlmICghY29tcG9uZW50V2FzQWxyZWFkeU1vZGlmaWVkKSB7XG4gICAgcGF0Y2godGFyZ2V0LCBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsIHJ1bkRpc3Bvc2Vyc09uV2lsbFVubW91bnQpO1xuICB9IC8vIHJldHVybiB0aGUgZGlzcG9zZXIgYXMgaXMgaWYgaW52b2tlZCBhcyBhIG5vbiBkZWNvcmF0b3JcblxuXG4gIGlmICh0eXBlb2YgcHJvcGVydHlLZXlPckZ1bmN0aW9uICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5S2V5T3JGdW5jdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0b3IpIHtcbiAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gbmV3IEFycmF5KF9sZW4gPiA2ID8gX2xlbiAtIDYgOiAwKSwgX2tleSA9IDY7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIHJlc3RbX2tleSAtIDZdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiB1bnRyYWNrZWQoZnVuY3Rpb24gKCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgXCI8PGFub255bW91cz4+XCI7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIHZhciBhY3R1YWwgPSBwcm9wc1twcm9wTmFtZV0gPT09IG51bGwgPyBcIm51bGxcIiA6IFwidW5kZWZpbmVkXCI7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIlRoZSBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBcIiArIFwiaW4gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCwgYnV0IGl0cyB2YWx1ZSBpcyBgXCIgKyBhY3R1YWwgKyBcImAuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBAdHMtaWdub3JlIHJlc3QgYXJnIGlzIG5lY2Vzc2FyeSBmb3Igc29tZSBSZWFjdCBpbnRlcm5hbHMgLSBmYWlscyB0ZXN0cyBvdGhlcndpc2VcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRvci5hcHBseSh2b2lkIDAsIFtwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWVdLmNvbmNhdChyZXN0KSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTsgLy8gQWRkIGlzUmVxdWlyZWQgdG8gc2F0aXNmeSBSZXF1aXJhYmxlXG5cbiAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG4gIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xufSAvLyBDb3BpZWQgZnJvbSBSZWFjdC5Qcm9wVHlwZXNcblxuXG5mdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gIC8vIE5hdGl2ZSBTeW1ib2wuXG4gIGlmIChwcm9wVHlwZSA9PT0gXCJzeW1ib2xcIikge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG5cblxuICBpZiAocHJvcFZhbHVlW1wiQEB0b1N0cmluZ1RhZ1wiXSA9PT0gXCJTeW1ib2xcIikge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cblxuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59IC8vIENvcGllZCBmcm9tIFJlYWN0LlByb3BUeXBlc1xuXG5cbmZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICByZXR1cm4gXCJhcnJheVwiO1xuICB9XG5cbiAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICByZXR1cm4gXCJvYmplY3RcIjtcbiAgfVxuXG4gIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgIHJldHVybiBcInN5bWJvbFwiO1xuICB9XG5cbiAgcmV0dXJuIHByb3BUeXBlO1xufSAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4vLyBDb3BpZWQgZnJvbSBSZWFjdC5Qcm9wVHlwZXNcblxuXG5mdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcblxuICBpZiAocHJvcFR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgcmV0dXJuIFwiZGF0ZVwiO1xuICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICByZXR1cm4gXCJyZWdleHBcIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcFR5cGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmFibGVUeXBlQ2hlY2tlckNyZWF0b3IoYWxsb3dOYXRpdmVUeXBlLCBtb2J4VHlwZSkge1xuICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZnVuY3Rpb24gKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgIHJldHVybiB1bnRyYWNrZWQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGFsbG93TmF0aXZlVHlwZSkge1xuICAgICAgICBpZiAoZ2V0UHJvcFR5cGUocHJvcHNbcHJvcE5hbWVdKSA9PT0gbW9ieFR5cGUudG9Mb3dlckNhc2UoKSkgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBtb2J4Q2hlY2tlcjtcblxuICAgICAgc3dpdGNoIChtb2J4VHlwZSkge1xuICAgICAgICBjYXNlIFwiQXJyYXlcIjpcbiAgICAgICAgICBtb2J4Q2hlY2tlciA9IGlzT2JzZXJ2YWJsZUFycmF5O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJPYmplY3RcIjpcbiAgICAgICAgICBtb2J4Q2hlY2tlciA9IGlzT2JzZXJ2YWJsZU9iamVjdDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiTWFwXCI6XG4gICAgICAgICAgbW9ieENoZWNrZXIgPSBpc09ic2VydmFibGVNYXA7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIG1vYnhUeXBlOiBcIiArIG1vYnhUeXBlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblxuICAgICAgaWYgKCFtb2J4Q2hlY2tlcihwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHZhciBuYXRpdmVUeXBlRXhwZWN0YXRpb25NZXNzYWdlID0gYWxsb3dOYXRpdmVUeXBlID8gXCIgb3IgamF2YXNjcmlwdCBgXCIgKyBtb2J4VHlwZS50b0xvd2VyQ2FzZSgpICsgXCJgXCIgOiBcIlwiO1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKFwiSW52YWxpZCBwcm9wIGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBvZiB0eXBlIGBcIiArIHByZWNpc2VUeXBlICsgXCJgIHN1cHBsaWVkIHRvXCIgKyBcIiBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLCBleHBlY3RlZCBgbW9ieC5PYnNlcnZhYmxlXCIgKyBtb2J4VHlwZSArIFwiYFwiICsgbmF0aXZlVHlwZUV4cGVjdGF0aW9uTWVzc2FnZSArIFwiLlwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZhYmxlQXJyYXlPZlR5cGVDaGVja2VyKGFsbG93TmF0aXZlVHlwZSwgdHlwZUNoZWNrZXIpIHtcbiAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBuZXcgQXJyYXkoX2xlbjIgPiA1ID8gX2xlbjIgLSA1IDogMCksIF9rZXkyID0gNTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgcmVzdFtfa2V5MiAtIDVdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW50cmFja2VkKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKFwiUHJvcGVydHkgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIG9mIGNvbXBvbmVudCBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgIGhhcyBcIiArIFwiaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbi5cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZXJyb3IgPSBjcmVhdGVPYnNlcnZhYmxlVHlwZUNoZWNrZXJDcmVhdG9yKGFsbG93TmF0aXZlVHlwZSwgXCJBcnJheVwiKShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIGVycm9yO1xuICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZXJyb3IgPSB0eXBlQ2hlY2tlci5hcHBseSh2b2lkIDAsIFtwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyBcIltcIiArIGkgKyBcIl1cIl0uY29uY2F0KHJlc3QpKTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG52YXIgb2JzZXJ2YWJsZUFycmF5ID0gLyojX19QVVJFX18qL2NyZWF0ZU9ic2VydmFibGVUeXBlQ2hlY2tlckNyZWF0b3IoZmFsc2UsIFwiQXJyYXlcIik7XG52YXIgb2JzZXJ2YWJsZUFycmF5T2YgPSAvKiNfX1BVUkVfXyovY3JlYXRlT2JzZXJ2YWJsZUFycmF5T2ZUeXBlQ2hlY2tlci5iaW5kKG51bGwsIGZhbHNlKTtcbnZhciBvYnNlcnZhYmxlTWFwID0gLyojX19QVVJFX18qL2NyZWF0ZU9ic2VydmFibGVUeXBlQ2hlY2tlckNyZWF0b3IoZmFsc2UsIFwiTWFwXCIpO1xudmFyIG9ic2VydmFibGVPYmplY3QgPSAvKiNfX1BVUkVfXyovY3JlYXRlT2JzZXJ2YWJsZVR5cGVDaGVja2VyQ3JlYXRvcihmYWxzZSwgXCJPYmplY3RcIik7XG52YXIgYXJyYXlPck9ic2VydmFibGVBcnJheSA9IC8qI19fUFVSRV9fKi9jcmVhdGVPYnNlcnZhYmxlVHlwZUNoZWNrZXJDcmVhdG9yKHRydWUsIFwiQXJyYXlcIik7XG52YXIgYXJyYXlPck9ic2VydmFibGVBcnJheU9mID0gLyojX19QVVJFX18qL2NyZWF0ZU9ic2VydmFibGVBcnJheU9mVHlwZUNoZWNrZXIuYmluZChudWxsLCB0cnVlKTtcbnZhciBvYmplY3RPck9ic2VydmFibGVPYmplY3QgPSAvKiNfX1BVUkVfXyovY3JlYXRlT2JzZXJ2YWJsZVR5cGVDaGVja2VyQ3JlYXRvcih0cnVlLCBcIk9iamVjdFwiKTtcbnZhciBQcm9wVHlwZXMgPSB7XG4gIG9ic2VydmFibGVBcnJheTogb2JzZXJ2YWJsZUFycmF5LFxuICBvYnNlcnZhYmxlQXJyYXlPZjogb2JzZXJ2YWJsZUFycmF5T2YsXG4gIG9ic2VydmFibGVNYXA6IG9ic2VydmFibGVNYXAsXG4gIG9ic2VydmFibGVPYmplY3Q6IG9ic2VydmFibGVPYmplY3QsXG4gIGFycmF5T3JPYnNlcnZhYmxlQXJyYXk6IGFycmF5T3JPYnNlcnZhYmxlQXJyYXksXG4gIGFycmF5T3JPYnNlcnZhYmxlQXJyYXlPZjogYXJyYXlPck9ic2VydmFibGVBcnJheU9mLFxuICBvYmplY3RPck9ic2VydmFibGVPYmplY3Q6IG9iamVjdE9yT2JzZXJ2YWJsZU9iamVjdFxufTtcblxuaWYgKCFDb21wb25lbnQpIHRocm93IG5ldyBFcnJvcihcIm1vYngtcmVhY3QgcmVxdWlyZXMgUmVhY3QgdG8gYmUgYXZhaWxhYmxlXCIpO1xuaWYgKCFvYnNlcnZhYmxlKSB0aHJvdyBuZXcgRXJyb3IoXCJtb2J4LXJlYWN0IHJlcXVpcmVzIG1vYnggdG8gYmUgYXZhaWxhYmxlXCIpO1xuXG5leHBvcnQgeyBNb2JYUHJvdmlkZXJDb250ZXh0LCBQcm9wVHlwZXMsIFByb3ZpZGVyLCBkaXNwb3NlT25Vbm1vdW50LCBpbmplY3QsIG9ic2VydmVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb2J4cmVhY3QuZXNtLmpzLm1hcFxuIiwiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUsIFRoZW1lUHJvdmlkZXJ9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAnbW9ieC1yZWFjdCc7XHJcbmltcG9ydCBUZXN0U3RvcmUgZnJvbSAnLi4vc3RvcmUvVGVzdFN0b3JlJztcclxuXHJcbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbmBcclxuY29uc3QgdGhlbWUgPSB7XHJcbiAgICBjb2xvcnM6IHtcclxuICAgICAgICBwcmltYXJ5OiBcIiMwMDcwZjNcIlxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdG9yZSA9IG5ldyBUZXN0U3RvcmUoKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHtDb21wb25lbnQsIHBhZ2VQcm9wc306YW55KXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxQcm92aWRlciB7Li4uc3RvcmV9PlxyXG4gICAgICAgICAgICA8R2xvYmFsU3R5bGUgLz5cclxuICAgICAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9