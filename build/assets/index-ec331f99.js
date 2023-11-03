var xv = Object.defineProperty
var _v = (e, t, n) =>
  t in e
    ? xv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n)
var I = (e, t, n) => (_v(e, typeof t != "symbol" ? t + "" : t, n), n)
;(function () {
  const t = document.createElement("link").relList
  if (t && t.supports && t.supports("modulepreload")) return
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r)
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && i(s)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(r) {
    const o = {}
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    )
  }
  function i(r) {
    if (r.ep) return
    r.ep = !0
    const o = n(r)
    fetch(r.href, o)
  }
})()
function wv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e
}
var Eg = { exports: {} },
  Fa = {},
  Pg = { exports: {} },
  B = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lo = Symbol.for("react.element"),
  Sv = Symbol.for("react.portal"),
  bv = Symbol.for("react.fragment"),
  kv = Symbol.for("react.strict_mode"),
  Cv = Symbol.for("react.profiler"),
  Ev = Symbol.for("react.provider"),
  Pv = Symbol.for("react.context"),
  Mv = Symbol.for("react.forward_ref"),
  Tv = Symbol.for("react.suspense"),
  Ov = Symbol.for("react.memo"),
  Av = Symbol.for("react.lazy"),
  xd = Symbol.iterator
function Rv(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xd && e[xd]) || e["@@iterator"]),
      typeof e == "function" ? e : null)
}
var Mg = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Tg = Object.assign,
  Og = {}
function cr(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Og),
    (this.updater = n || Mg)
}
cr.prototype.isReactComponent = {}
cr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    )
  this.updater.enqueueSetState(this, e, t, "setState")
}
cr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
function Ag() {}
Ag.prototype = cr.prototype
function Uc(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Og),
    (this.updater = n || Mg)
}
var Yc = (Uc.prototype = new Ag())
Yc.constructor = Uc
Tg(Yc, cr.prototype)
Yc.isPureReactComponent = !0
var _d = Array.isArray,
  Rg = Object.prototype.hasOwnProperty,
  Kc = { current: null },
  Lg = { key: !0, ref: !0, __self: !0, __source: !0 }
function Dg(e, t, n) {
  var i,
    r = {},
    o = null,
    s = null
  if (t != null)
    for (i in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Rg.call(t, i) && !Lg.hasOwnProperty(i) && (r[i] = t[i])
  var a = arguments.length - 2
  if (a === 1) r.children = n
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2]
    r.children = l
  }
  if (e && e.defaultProps)
    for (i in ((a = e.defaultProps), a)) r[i] === void 0 && (r[i] = a[i])
  return { $$typeof: Lo, type: e, key: o, ref: s, props: r, _owner: Kc.current }
}
function Lv(e, t) {
  return {
    $$typeof: Lo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function Xc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Lo
}
function Dv(e) {
  var t = { "=": "=0", ":": "=2" }
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var wd = /\/+/g
function Il(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Dv("" + e.key)
    : t.toString(36)
}
function ks(e, t, n, i, r) {
  var o = typeof e
  ;(o === "undefined" || o === "boolean") && (e = null)
  var s = !1
  if (e === null) s = !0
  else
    switch (o) {
      case "string":
      case "number":
        s = !0
        break
      case "object":
        switch (e.$$typeof) {
          case Lo:
          case Sv:
            s = !0
        }
    }
  if (s)
    return (
      (s = e),
      (r = r(s)),
      (e = i === "" ? "." + Il(s, 0) : i),
      _d(r)
        ? ((n = ""),
          e != null && (n = e.replace(wd, "$&/") + "/"),
          ks(r, t, n, "", function (u) {
            return u
          }))
        : r != null &&
          (Xc(r) &&
            (r = Lv(
              r,
              n +
                (!r.key || (s && s.key === r.key)
                  ? ""
                  : ("" + r.key).replace(wd, "$&/") + "/") +
                e,
            )),
          t.push(r)),
      1
    )
  if (((s = 0), (i = i === "" ? "." : i + ":"), _d(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a]
      var l = i + Il(o, a)
      s += ks(o, t, n, l, r)
    }
  else if (((l = Rv(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = i + Il(o, a++)), (s += ks(o, t, n, l, r))
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    )
  return s
}
function Ho(e, t, n) {
  if (e == null) return e
  var i = [],
    r = 0
  return (
    ks(e, i, "", "", function (o) {
      return t.call(n, o, r++)
    }),
    i
  )
}
function Iv(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n))
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var Ye = { current: null },
  Cs = { transition: null },
  zv = {
    ReactCurrentDispatcher: Ye,
    ReactCurrentBatchConfig: Cs,
    ReactCurrentOwner: Kc,
  }
B.Children = {
  map: Ho,
  forEach: function (e, t, n) {
    Ho(
      e,
      function () {
        t.apply(this, arguments)
      },
      n,
    )
  },
  count: function (e) {
    var t = 0
    return (
      Ho(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      Ho(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!Xc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      )
    return e
  },
}
B.Component = cr
B.Fragment = bv
B.Profiler = Cv
B.PureComponent = Uc
B.StrictMode = kv
B.Suspense = Tv
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zv
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    )
  var i = Tg({}, e.props),
    r = e.key,
    o = e.ref,
    s = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Kc.current)),
      t.key !== void 0 && (r = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps
    for (l in t)
      Rg.call(t, l) &&
        !Lg.hasOwnProperty(l) &&
        (i[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
  }
  var l = arguments.length - 2
  if (l === 1) i.children = n
  else if (1 < l) {
    a = Array(l)
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2]
    i.children = a
  }
  return { $$typeof: Lo, type: e.type, key: r, ref: o, props: i, _owner: s }
}
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: Pv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Ev, _context: e }),
    (e.Consumer = e)
  )
}
B.createElement = Dg
B.createFactory = function (e) {
  var t = Dg.bind(null, e)
  return (t.type = e), t
}
B.createRef = function () {
  return { current: null }
}
B.forwardRef = function (e) {
  return { $$typeof: Mv, render: e }
}
B.isValidElement = Xc
B.lazy = function (e) {
  return { $$typeof: Av, _payload: { _status: -1, _result: e }, _init: Iv }
}
B.memo = function (e, t) {
  return { $$typeof: Ov, type: e, compare: t === void 0 ? null : t }
}
B.startTransition = function (e) {
  var t = Cs.transition
  Cs.transition = {}
  try {
    e()
  } finally {
    Cs.transition = t
  }
}
B.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.")
}
B.useCallback = function (e, t) {
  return Ye.current.useCallback(e, t)
}
B.useContext = function (e) {
  return Ye.current.useContext(e)
}
B.useDebugValue = function () {}
B.useDeferredValue = function (e) {
  return Ye.current.useDeferredValue(e)
}
B.useEffect = function (e, t) {
  return Ye.current.useEffect(e, t)
}
B.useId = function () {
  return Ye.current.useId()
}
B.useImperativeHandle = function (e, t, n) {
  return Ye.current.useImperativeHandle(e, t, n)
}
B.useInsertionEffect = function (e, t) {
  return Ye.current.useInsertionEffect(e, t)
}
B.useLayoutEffect = function (e, t) {
  return Ye.current.useLayoutEffect(e, t)
}
B.useMemo = function (e, t) {
  return Ye.current.useMemo(e, t)
}
B.useReducer = function (e, t, n) {
  return Ye.current.useReducer(e, t, n)
}
B.useRef = function (e) {
  return Ye.current.useRef(e)
}
B.useState = function (e) {
  return Ye.current.useState(e)
}
B.useSyncExternalStore = function (e, t, n) {
  return Ye.current.useSyncExternalStore(e, t, n)
}
B.useTransition = function () {
  return Ye.current.useTransition()
}
B.version = "18.2.0"
Pg.exports = B
var R = Pg.exports
const H = wv(R)
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nv = R,
  $v = Symbol.for("react.element"),
  Fv = Symbol.for("react.fragment"),
  jv = Object.prototype.hasOwnProperty,
  Bv = Nv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Wv = { key: !0, ref: !0, __self: !0, __source: !0 }
function Ig(e, t, n) {
  var i,
    r = {},
    o = null,
    s = null
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref)
  for (i in t) jv.call(t, i) && !Wv.hasOwnProperty(i) && (r[i] = t[i])
  if (e && e.defaultProps)
    for (i in ((t = e.defaultProps), t)) r[i] === void 0 && (r[i] = t[i])
  return { $$typeof: $v, type: e, key: o, ref: s, props: r, _owner: Bv.current }
}
Fa.Fragment = Fv
Fa.jsx = Ig
Fa.jsxs = Ig
Eg.exports = Fa
var z = Eg.exports,
  Au = {},
  zg = { exports: {} },
  ft = {},
  Ng = { exports: {} },
  $g = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(P, T) {
    var D = P.length
    P.push(T)
    e: for (; 0 < D; ) {
      var Q = (D - 1) >>> 1,
        G = P[Q]
      if (0 < r(G, T)) (P[Q] = T), (P[D] = G), (D = Q)
      else break e
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0]
  }
  function i(P) {
    if (P.length === 0) return null
    var T = P[0],
      D = P.pop()
    if (D !== T) {
      P[0] = D
      e: for (var Q = 0, G = P.length, We = G >>> 1; Q < We; ) {
        var Se = 2 * (Q + 1) - 1,
          Xe = P[Se],
          be = Se + 1,
          pt = P[be]
        if (0 > r(Xe, D))
          be < G && 0 > r(pt, Xe)
            ? ((P[Q] = pt), (P[be] = D), (Q = be))
            : ((P[Q] = Xe), (P[Se] = D), (Q = Se))
        else if (be < G && 0 > r(pt, D)) (P[Q] = pt), (P[be] = D), (Q = be)
        else break e
      }
    }
    return T
  }
  function r(P, T) {
    var D = P.sortIndex - T.sortIndex
    return D !== 0 ? D : P.id - T.id
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance
    e.unstable_now = function () {
      return o.now()
    }
  } else {
    var s = Date,
      a = s.now()
    e.unstable_now = function () {
      return s.now() - a
    }
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    h = !1,
    m = !1,
    y = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    g = typeof setImmediate < "u" ? setImmediate : null
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function v(P) {
    for (var T = n(u); T !== null; ) {
      if (T.callback === null) i(u)
      else if (T.startTime <= P) i(u), (T.sortIndex = T.expirationTime), t(l, T)
      else break
      T = n(u)
    }
  }
  function _(P) {
    if (((y = !1), v(P), !m))
      if (n(l) !== null) (m = !0), N(w)
      else {
        var T = n(u)
        T !== null && $(_, T.startTime - P)
      }
  }
  function w(P, T) {
    ;(m = !1), y && ((y = !1), p(k), (k = -1)), (h = !0)
    var D = d
    try {
      for (
        v(T), f = n(l);
        f !== null && (!(f.expirationTime > T) || (P && !A()));

      ) {
        var Q = f.callback
        if (typeof Q == "function") {
          ;(f.callback = null), (d = f.priorityLevel)
          var G = Q(f.expirationTime <= T)
          ;(T = e.unstable_now()),
            typeof G == "function" ? (f.callback = G) : f === n(l) && i(l),
            v(T)
        } else i(l)
        f = n(l)
      }
      if (f !== null) var We = !0
      else {
        var Se = n(u)
        Se !== null && $(_, Se.startTime - T), (We = !1)
      }
      return We
    } finally {
      ;(f = null), (d = D), (h = !1)
    }
  }
  var b = !1,
    S = null,
    k = -1,
    M = 5,
    E = -1
  function A() {
    return !(e.unstable_now() - E < M)
  }
  function L() {
    if (S !== null) {
      var P = e.unstable_now()
      E = P
      var T = !0
      try {
        T = S(!0, P)
      } finally {
        T ? W() : ((b = !1), (S = null))
      }
    } else b = !1
  }
  var W
  if (typeof g == "function")
    W = function () {
      g(L)
    }
  else if (typeof MessageChannel < "u") {
    var U = new MessageChannel(),
      F = U.port2
    ;(U.port1.onmessage = L),
      (W = function () {
        F.postMessage(null)
      })
  } else
    W = function () {
      x(L, 0)
    }
  function N(P) {
    ;(S = P), b || ((b = !0), W())
  }
  function $(P, T) {
    k = x(function () {
      P(e.unstable_now())
    }, T)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null
    }),
    (e.unstable_continueExecution = function () {
      m || h || ((m = !0), N(w))
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (M = 0 < P ? Math.floor(1e3 / P) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l)
    }),
    (e.unstable_next = function (P) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var T = 3
          break
        default:
          T = d
      }
      var D = d
      d = T
      try {
        return P()
      } finally {
        d = D
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, T) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          P = 3
      }
      var D = d
      d = P
      try {
        return T()
      } finally {
        d = D
      }
    }),
    (e.unstable_scheduleCallback = function (P, T, D) {
      var Q = e.unstable_now()
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? Q + D : Q))
          : (D = Q),
        P)
      ) {
        case 1:
          var G = -1
          break
        case 2:
          G = 250
          break
        case 5:
          G = 1073741823
          break
        case 4:
          G = 1e4
          break
        default:
          G = 5e3
      }
      return (
        (G = D + G),
        (P = {
          id: c++,
          callback: T,
          priorityLevel: P,
          startTime: D,
          expirationTime: G,
          sortIndex: -1,
        }),
        D > Q
          ? ((P.sortIndex = D),
            t(u, P),
            n(l) === null &&
              P === n(u) &&
              (y ? (p(k), (k = -1)) : (y = !0), $(_, D - Q)))
          : ((P.sortIndex = G), t(l, P), m || h || ((m = !0), N(w))),
        P
      )
    }),
    (e.unstable_shouldYield = A),
    (e.unstable_wrapCallback = function (P) {
      var T = d
      return function () {
        var D = d
        d = T
        try {
          return P.apply(this, arguments)
        } finally {
          d = D
        }
      }
    })
})($g)
Ng.exports = $g
var Hv = Ng.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fg = R,
  ut = Hv
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n])
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  )
}
var jg = new Set(),
  so = {}
function yi(e, t) {
  Xi(e, t), Xi(e + "Capture", t)
}
function Xi(e, t) {
  for (so[e] = t, e = 0; e < t.length; e++) jg.add(t[e])
}
var rn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ru = Object.prototype.hasOwnProperty,
  Vv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Sd = {},
  bd = {}
function Uv(e) {
  return Ru.call(bd, e)
    ? !0
    : Ru.call(Sd, e)
    ? !1
    : Vv.test(e)
    ? (bd[e] = !0)
    : ((Sd[e] = !0), !1)
}
function Yv(e, t, n, i) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0
    case "boolean":
      return i
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-")
    default:
      return !1
  }
}
function Kv(e, t, n, i) {
  if (t === null || typeof t > "u" || Yv(e, t, n, i)) return !0
  if (i) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function Ke(e, t, n, i, r, o, s) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = i),
    (this.attributeNamespace = r),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s)
}
var ze = {}
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ze[e] = new Ke(e, 0, !1, e, null, !1, !1)
  })
;[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0]
  ze[t] = new Ke(t, 1, !1, e[1], null, !1, !1)
})
;["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ze[e] = new Ke(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ze[e] = new Ke(e, 2, !1, e, null, !1, !1)
})
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ze[e] = new Ke(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ze[e] = new Ke(e, 3, !0, e, null, !1, !1)
})
;["capture", "download"].forEach(function (e) {
  ze[e] = new Ke(e, 4, !1, e, null, !1, !1)
})
;["cols", "rows", "size", "span"].forEach(function (e) {
  ze[e] = new Ke(e, 6, !1, e, null, !1, !1)
})
;["rowSpan", "start"].forEach(function (e) {
  ze[e] = new Ke(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Qc = /[\-:]([a-z])/g
function Gc(e) {
  return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Qc, Gc)
    ze[t] = new Ke(t, 1, !1, e, null, !1, !1)
  })
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Qc, Gc)
    ze[t] = new Ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
  })
;["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Qc, Gc)
  ze[t] = new Ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
})
;["tabIndex", "crossOrigin"].forEach(function (e) {
  ze[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
ze.xlinkHref = new Ke(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
)
;["src", "href", "action", "formAction"].forEach(function (e) {
  ze[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function qc(e, t, n, i) {
  var r = ze.hasOwnProperty(t) ? ze[t] : null
  ;(r !== null
    ? r.type !== 0
    : i ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Kv(t, n, r, i) && (n = null),
    i || r === null
      ? Uv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : r.mustUseProperty
      ? (e[r.propertyName] = n === null ? (r.type === 3 ? !1 : "") : n)
      : ((t = r.attributeName),
        (i = r.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((r = r.type),
            (n = r === 3 || (r === 4 && n === !0) ? "" : "" + n),
            i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))))
}
var un = Fg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Vo = Symbol.for("react.element"),
  ki = Symbol.for("react.portal"),
  Ci = Symbol.for("react.fragment"),
  Zc = Symbol.for("react.strict_mode"),
  Lu = Symbol.for("react.profiler"),
  Bg = Symbol.for("react.provider"),
  Wg = Symbol.for("react.context"),
  Jc = Symbol.for("react.forward_ref"),
  Du = Symbol.for("react.suspense"),
  Iu = Symbol.for("react.suspense_list"),
  ef = Symbol.for("react.memo"),
  pn = Symbol.for("react.lazy"),
  Hg = Symbol.for("react.offscreen"),
  kd = Symbol.iterator
function mr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (kd && e[kd]) || e["@@iterator"]),
      typeof e == "function" ? e : null)
}
var de = Object.assign,
  zl
function Ar(e) {
  if (zl === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      zl = (t && t[1]) || ""
    }
  return (
    `
` +
    zl +
    e
  )
}
var Nl = !1
function $l(e, t) {
  if (!e || Nl) return ""
  Nl = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var i = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          i = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        i = u
      }
      e()
    }
  } catch (u) {
    if (u && i && typeof u.stack == "string") {
      for (
        var r = u.stack.split(`
`),
          o = i.stack.split(`
`),
          s = r.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && r[s] !== o[a];

      )
        a--
      for (; 1 <= s && 0 <= a; s--, a--)
        if (r[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || r[s] !== o[a])) {
                var l =
                  `
` + r[s].replace(" at new ", " at ")
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                )
              }
            while (1 <= s && 0 <= a)
          break
        }
    }
  } finally {
    ;(Nl = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : "") ? Ar(e) : ""
}
function Xv(e) {
  switch (e.tag) {
    case 5:
      return Ar(e.type)
    case 16:
      return Ar("Lazy")
    case 13:
      return Ar("Suspense")
    case 19:
      return Ar("SuspenseList")
    case 0:
    case 2:
    case 15:
      return (e = $l(e.type, !1)), e
    case 11:
      return (e = $l(e.type.render, !1)), e
    case 1:
      return (e = $l(e.type, !0)), e
    default:
      return ""
  }
}
function zu(e) {
  if (e == null) return null
  if (typeof e == "function") return e.displayName || e.name || null
  if (typeof e == "string") return e
  switch (e) {
    case Ci:
      return "Fragment"
    case ki:
      return "Portal"
    case Lu:
      return "Profiler"
    case Zc:
      return "StrictMode"
    case Du:
      return "Suspense"
    case Iu:
      return "SuspenseList"
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Wg:
        return (e.displayName || "Context") + ".Consumer"
      case Bg:
        return (e._context.displayName || "Context") + ".Provider"
      case Jc:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        )
      case ef:
        return (
          (t = e.displayName || null), t !== null ? t : zu(e.type) || "Memo"
        )
      case pn:
        ;(t = e._payload), (e = e._init)
        try {
          return zu(e(t))
        } catch {}
    }
  return null
}
function Qv(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return "Cache"
    case 9:
      return (t.displayName || "Context") + ".Consumer"
    case 10:
      return (t._context.displayName || "Context") + ".Provider"
    case 18:
      return "DehydratedFragment"
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      )
    case 7:
      return "Fragment"
    case 5:
      return t
    case 4:
      return "Portal"
    case 3:
      return "Root"
    case 6:
      return "Text"
    case 16:
      return zu(t)
    case 8:
      return t === Zc ? "StrictMode" : "Mode"
    case 22:
      return "Offscreen"
    case 12:
      return "Profiler"
    case 21:
      return "Scope"
    case 13:
      return "Suspense"
    case 19:
      return "SuspenseList"
    case 25:
      return "TracingMarker"
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null
      if (typeof t == "string") return t
  }
  return null
}
function zn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e
    case "object":
      return e
    default:
      return ""
  }
}
function Vg(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  )
}
function Gv(e) {
  var t = Vg(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    i = "" + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var r = n.get,
      o = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return r.call(this)
        },
        set: function (s) {
          ;(i = "" + s), o.call(this, s)
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return i
        },
        setValue: function (s) {
          i = "" + s
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function Uo(e) {
  e._valueTracker || (e._valueTracker = Gv(e))
}
function Ug(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    i = ""
  return (
    e && (i = Vg(e) ? (e.checked ? "true" : "false") : e.value),
    (e = i),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function Ys(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function Nu(e, t) {
  var n = t.checked
  return de({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  })
}
function Cd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    i = t.checked != null ? t.checked : t.defaultChecked
  ;(n = zn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: i,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    })
}
function Yg(e, t) {
  ;(t = t.checked), t != null && qc(e, "checked", t, !1)
}
function $u(e, t) {
  Yg(e, t)
  var n = zn(t.value),
    i = t.type
  if (n != null)
    i === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n)
  else if (i === "submit" || i === "reset") {
    e.removeAttribute("value")
    return
  }
  t.hasOwnProperty("value")
    ? Fu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Fu(e, t.type, zn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function Ed(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var i = t.type
    if (
      !(
        (i !== "submit" && i !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return
    ;(t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n)
}
function Fu(e, t, n) {
  ;(t !== "number" || Ys(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Rr = Array.isArray
function $i(e, t, n, i) {
  if (((e = e.options), t)) {
    t = {}
    for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0
    for (n = 0; n < e.length; n++)
      (r = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== r && (e[n].selected = r),
        r && i && (e[n].defaultSelected = !0)
  } else {
    for (n = "" + zn(n), t = null, r = 0; r < e.length; r++) {
      if (e[r].value === n) {
        ;(e[r].selected = !0), i && (e[r].defaultSelected = !0)
        return
      }
      t !== null || e[r].disabled || (t = e[r])
    }
    t !== null && (t.selected = !0)
  }
}
function ju(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91))
  return de({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  })
}
function Pd(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92))
      if (Rr(n)) {
        if (1 < n.length) throw Error(C(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ""), (n = t)
  }
  e._wrapperState = { initialValue: zn(n) }
}
function Kg(e, t) {
  var n = zn(t.value),
    i = zn(t.defaultValue)
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    i != null && (e.defaultValue = "" + i)
}
function Md(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Xg(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg"
    case "math":
      return "http://www.w3.org/1998/Math/MathML"
    default:
      return "http://www.w3.org/1999/xhtml"
  }
}
function Bu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Xg(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e
}
var Yo,
  Qg = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, i, r) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, i, r)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t
    else {
      for (
        Yo = Yo || document.createElement("div"),
          Yo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Yo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function ao(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var Vr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  qv = ["Webkit", "ms", "Moz", "O"]
Object.keys(Vr).forEach(function (e) {
  qv.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Vr[t] = Vr[e])
  })
})
function Gg(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Vr.hasOwnProperty(e) && Vr[e])
    ? ("" + t).trim()
    : t + "px"
}
function qg(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0,
        r = Gg(n, t[n], i)
      n === "float" && (n = "cssFloat"), i ? e.setProperty(n, r) : (e[n] = r)
    }
}
var Zv = de(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
)
function Wu(e, t) {
  if (t) {
    if (Zv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60))
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61))
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62))
  }
}
function Hu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string"
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1
    default:
      return !0
  }
}
var Vu = null
function tf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var Uu = null,
  Fi = null,
  ji = null
function Td(e) {
  if ((e = zo(e))) {
    if (typeof Uu != "function") throw Error(C(280))
    var t = e.stateNode
    t && ((t = Va(t)), Uu(e.stateNode, e.type, t))
  }
}
function Zg(e) {
  Fi ? (ji ? ji.push(e) : (ji = [e])) : (Fi = e)
}
function Jg() {
  if (Fi) {
    var e = Fi,
      t = ji
    if (((ji = Fi = null), Td(e), t)) for (e = 0; e < t.length; e++) Td(t[e])
  }
}
function em(e, t) {
  return e(t)
}
function tm() {}
var Fl = !1
function nm(e, t, n) {
  if (Fl) return e(t, n)
  Fl = !0
  try {
    return em(e, t, n)
  } finally {
    ;(Fl = !1), (Fi !== null || ji !== null) && (tm(), Jg())
  }
}
function lo(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var i = Va(n)
  if (i === null) return null
  n = i[t]
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ;(i = !i.disabled) ||
        ((e = e.type),
        (i = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !i)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != "function") throw Error(C(231, t, typeof n))
  return n
}
var Yu = !1
if (rn)
  try {
    var yr = {}
    Object.defineProperty(yr, "passive", {
      get: function () {
        Yu = !0
      },
    }),
      window.addEventListener("test", yr, yr),
      window.removeEventListener("test", yr, yr)
  } catch {
    Yu = !1
  }
function Jv(e, t, n, i, r, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, u)
  } catch (c) {
    this.onError(c)
  }
}
var Ur = !1,
  Ks = null,
  Xs = !1,
  Ku = null,
  e1 = {
    onError: function (e) {
      ;(Ur = !0), (Ks = e)
    },
  }
function t1(e, t, n, i, r, o, s, a, l) {
  ;(Ur = !1), (Ks = null), Jv.apply(e1, arguments)
}
function n1(e, t, n, i, r, o, s, a, l) {
  if ((t1.apply(this, arguments), Ur)) {
    if (Ur) {
      var u = Ks
      ;(Ur = !1), (Ks = null)
    } else throw Error(C(198))
    Xs || ((Xs = !0), (Ku = u))
  }
}
function vi(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function im(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated
  }
  return null
}
function Od(e) {
  if (vi(e) !== e) throw Error(C(188))
}
function i1(e) {
  var t = e.alternate
  if (!t) {
    if (((t = vi(e)), t === null)) throw Error(C(188))
    return t !== e ? null : e
  }
  for (var n = e, i = t; ; ) {
    var r = n.return
    if (r === null) break
    var o = r.alternate
    if (o === null) {
      if (((i = r.return), i !== null)) {
        n = i
        continue
      }
      break
    }
    if (r.child === o.child) {
      for (o = r.child; o; ) {
        if (o === n) return Od(r), e
        if (o === i) return Od(r), t
        o = o.sibling
      }
      throw Error(C(188))
    }
    if (n.return !== i.return) (n = r), (i = o)
    else {
      for (var s = !1, a = r.child; a; ) {
        if (a === n) {
          ;(s = !0), (n = r), (i = o)
          break
        }
        if (a === i) {
          ;(s = !0), (i = r), (n = o)
          break
        }
        a = a.sibling
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            ;(s = !0), (n = o), (i = r)
            break
          }
          if (a === i) {
            ;(s = !0), (i = o), (n = r)
            break
          }
          a = a.sibling
        }
        if (!s) throw Error(C(189))
      }
    }
    if (n.alternate !== i) throw Error(C(190))
  }
  if (n.tag !== 3) throw Error(C(188))
  return n.stateNode.current === n ? e : t
}
function rm(e) {
  return (e = i1(e)), e !== null ? om(e) : null
}
function om(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = om(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var sm = ut.unstable_scheduleCallback,
  Ad = ut.unstable_cancelCallback,
  r1 = ut.unstable_shouldYield,
  o1 = ut.unstable_requestPaint,
  ye = ut.unstable_now,
  s1 = ut.unstable_getCurrentPriorityLevel,
  nf = ut.unstable_ImmediatePriority,
  am = ut.unstable_UserBlockingPriority,
  Qs = ut.unstable_NormalPriority,
  a1 = ut.unstable_LowPriority,
  lm = ut.unstable_IdlePriority,
  ja = null,
  Vt = null
function l1(e) {
  if (Vt && typeof Vt.onCommitFiberRoot == "function")
    try {
      Vt.onCommitFiberRoot(ja, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Rt = Math.clz32 ? Math.clz32 : f1,
  u1 = Math.log,
  c1 = Math.LN2
function f1(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((u1(e) / c1) | 0)) | 0
}
var Ko = 64,
  Xo = 4194304
function Lr(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function Gs(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var i = 0,
    r = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455
  if (s !== 0) {
    var a = s & ~r
    a !== 0 ? (i = Lr(a)) : ((o &= s), o !== 0 && (i = Lr(o)))
  } else (s = n & ~r), s !== 0 ? (i = Lr(s)) : o !== 0 && (i = Lr(o))
  if (i === 0) return 0
  if (
    t !== 0 &&
    t !== i &&
    !(t & r) &&
    ((r = i & -i), (o = t & -t), r >= o || (r === 16 && (o & 4194240) !== 0))
  )
    return t
  if ((i & 4 && (i |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= i; 0 < t; )
      (n = 31 - Rt(t)), (r = 1 << n), (i |= e[n]), (t &= ~r)
  return i
}
function d1(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function h1(e, t) {
  for (
    var n = e.suspendedLanes,
      i = e.pingedLanes,
      r = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Rt(o),
      a = 1 << s,
      l = r[s]
    l === -1
      ? (!(a & n) || a & i) && (r[s] = d1(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a)
  }
}
function Xu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function um() {
  var e = Ko
  return (Ko <<= 1), !(Ko & 4194240) && (Ko = 64), e
}
function jl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function Do(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Rt(t)),
    (e[t] = n)
}
function p1(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var i = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var r = 31 - Rt(n),
      o = 1 << r
    ;(t[r] = 0), (i[r] = -1), (e[r] = -1), (n &= ~o)
  }
}
function rf(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var i = 31 - Rt(n),
      r = 1 << i
    ;(r & t) | (e[i] & t) && (e[i] |= t), (n &= ~r)
  }
}
var Z = 0
function cm(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var fm,
  of,
  dm,
  hm,
  pm,
  Qu = !1,
  Qo = [],
  Cn = null,
  En = null,
  Pn = null,
  uo = new Map(),
  co = new Map(),
  mn = [],
  g1 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    )
function Rd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Cn = null
      break
    case "dragenter":
    case "dragleave":
      En = null
      break
    case "mouseover":
    case "mouseout":
      Pn = null
      break
    case "pointerover":
    case "pointerout":
      uo.delete(t.pointerId)
      break
    case "gotpointercapture":
    case "lostpointercapture":
      co.delete(t.pointerId)
  }
}
function vr(e, t, n, i, r, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: o,
        targetContainers: [r],
      }),
      t !== null && ((t = zo(t)), t !== null && of(t)),
      e)
    : ((e.eventSystemFlags |= i),
      (t = e.targetContainers),
      r !== null && t.indexOf(r) === -1 && t.push(r),
      e)
}
function m1(e, t, n, i, r) {
  switch (t) {
    case "focusin":
      return (Cn = vr(Cn, e, t, n, i, r)), !0
    case "dragenter":
      return (En = vr(En, e, t, n, i, r)), !0
    case "mouseover":
      return (Pn = vr(Pn, e, t, n, i, r)), !0
    case "pointerover":
      var o = r.pointerId
      return uo.set(o, vr(uo.get(o) || null, e, t, n, i, r)), !0
    case "gotpointercapture":
      return (
        (o = r.pointerId), co.set(o, vr(co.get(o) || null, e, t, n, i, r)), !0
      )
  }
  return !1
}
function gm(e) {
  var t = Jn(e.target)
  if (t !== null) {
    var n = vi(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = im(n)), t !== null)) {
          ;(e.blockedOn = t),
            pm(e.priority, function () {
              dm(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function Es(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Gu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var i = new n.constructor(n.type, n)
      ;(Vu = i), n.target.dispatchEvent(i), (Vu = null)
    } else return (t = zo(n)), t !== null && of(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function Ld(e, t, n) {
  Es(e) && n.delete(t)
}
function y1() {
  ;(Qu = !1),
    Cn !== null && Es(Cn) && (Cn = null),
    En !== null && Es(En) && (En = null),
    Pn !== null && Es(Pn) && (Pn = null),
    uo.forEach(Ld),
    co.forEach(Ld)
}
function xr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Qu ||
      ((Qu = !0), ut.unstable_scheduleCallback(ut.unstable_NormalPriority, y1)))
}
function fo(e) {
  function t(r) {
    return xr(r, e)
  }
  if (0 < Qo.length) {
    xr(Qo[0], e)
    for (var n = 1; n < Qo.length; n++) {
      var i = Qo[n]
      i.blockedOn === e && (i.blockedOn = null)
    }
  }
  for (
    Cn !== null && xr(Cn, e),
      En !== null && xr(En, e),
      Pn !== null && xr(Pn, e),
      uo.forEach(t),
      co.forEach(t),
      n = 0;
    n < mn.length;
    n++
  )
    (i = mn[n]), i.blockedOn === e && (i.blockedOn = null)
  for (; 0 < mn.length && ((n = mn[0]), n.blockedOn === null); )
    gm(n), n.blockedOn === null && mn.shift()
}
var Bi = un.ReactCurrentBatchConfig,
  qs = !0
function v1(e, t, n, i) {
  var r = Z,
    o = Bi.transition
  Bi.transition = null
  try {
    ;(Z = 1), sf(e, t, n, i)
  } finally {
    ;(Z = r), (Bi.transition = o)
  }
}
function x1(e, t, n, i) {
  var r = Z,
    o = Bi.transition
  Bi.transition = null
  try {
    ;(Z = 4), sf(e, t, n, i)
  } finally {
    ;(Z = r), (Bi.transition = o)
  }
}
function sf(e, t, n, i) {
  if (qs) {
    var r = Gu(e, t, n, i)
    if (r === null) Gl(e, t, i, Zs, n), Rd(e, i)
    else if (m1(r, e, t, n, i)) i.stopPropagation()
    else if ((Rd(e, i), t & 4 && -1 < g1.indexOf(e))) {
      for (; r !== null; ) {
        var o = zo(r)
        if (
          (o !== null && fm(o),
          (o = Gu(e, t, n, i)),
          o === null && Gl(e, t, i, Zs, n),
          o === r)
        )
          break
        r = o
      }
      r !== null && i.stopPropagation()
    } else Gl(e, t, i, null, n)
  }
}
var Zs = null
function Gu(e, t, n, i) {
  if (((Zs = null), (e = tf(i)), (e = Jn(e)), e !== null))
    if (((t = vi(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = im(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (Zs = e), null
}
function mm(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4
    case "message":
      switch (s1()) {
        case nf:
          return 1
        case am:
          return 4
        case Qs:
        case a1:
          return 16
        case lm:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var xn = null,
  af = null,
  Ps = null
function ym() {
  if (Ps) return Ps
  var e,
    t = af,
    n = t.length,
    i,
    r = "value" in xn ? xn.value : xn.textContent,
    o = r.length
  for (e = 0; e < n && t[e] === r[e]; e++);
  var s = n - e
  for (i = 1; i <= s && t[n - i] === r[o - i]; i++);
  return (Ps = r.slice(e, 1 < i ? 1 - i : void 0))
}
function Ms(e) {
  var t = e.keyCode
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function Go() {
  return !0
}
function Dd() {
  return !1
}
function dt(e) {
  function t(n, i, r, o, s) {
    ;(this._reactName = n),
      (this._targetInst = r),
      (this.type = i),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null)
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]))
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Go
        : Dd),
      (this.isPropagationStopped = Dd),
      this
    )
  }
  return (
    de(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Go))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Go))
      },
      persist: function () {},
      isPersistent: Go,
    }),
    t
  )
}
var fr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  lf = dt(fr),
  Io = de({}, fr, { view: 0, detail: 0 }),
  _1 = dt(Io),
  Bl,
  Wl,
  _r,
  Ba = de({}, Io, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: uf,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== _r &&
            (_r && e.type === "mousemove"
              ? ((Bl = e.screenX - _r.screenX), (Wl = e.screenY - _r.screenY))
              : (Wl = Bl = 0),
            (_r = e)),
          Bl)
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Wl
    },
  }),
  Id = dt(Ba),
  w1 = de({}, Ba, { dataTransfer: 0 }),
  S1 = dt(w1),
  b1 = de({}, Io, { relatedTarget: 0 }),
  Hl = dt(b1),
  k1 = de({}, fr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  C1 = dt(k1),
  E1 = de({}, fr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData
    },
  }),
  P1 = dt(E1),
  M1 = de({}, fr, { data: 0 }),
  zd = dt(M1),
  T1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  O1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  A1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" }
function R1(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = A1[e]) ? !!t[e] : !1
}
function uf() {
  return R1
}
var L1 = de({}, Io, {
    key: function (e) {
      if (e.key) {
        var t = T1[e.key] || e.key
        if (t !== "Unidentified") return t
      }
      return e.type === "keypress"
        ? ((e = Ms(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? O1[e.keyCode] || "Unidentified"
        : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: uf,
    charCode: function (e) {
      return e.type === "keypress" ? Ms(e) : 0
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ms(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0
    },
  }),
  D1 = dt(L1),
  I1 = de({}, Ba, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Nd = dt(I1),
  z1 = de({}, Io, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: uf,
  }),
  N1 = dt(z1),
  $1 = de({}, fr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  F1 = dt($1),
  j1 = de({}, Ba, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  B1 = dt(j1),
  W1 = [9, 13, 27, 32],
  cf = rn && "CompositionEvent" in window,
  Yr = null
rn && "documentMode" in document && (Yr = document.documentMode)
var H1 = rn && "TextEvent" in window && !Yr,
  vm = rn && (!cf || (Yr && 8 < Yr && 11 >= Yr)),
  $d = String.fromCharCode(32),
  Fd = !1
function xm(e, t) {
  switch (e) {
    case "keyup":
      return W1.indexOf(t.keyCode) !== -1
    case "keydown":
      return t.keyCode !== 229
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0
    default:
      return !1
  }
}
function _m(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null
}
var Ei = !1
function V1(e, t) {
  switch (e) {
    case "compositionend":
      return _m(t)
    case "keypress":
      return t.which !== 32 ? null : ((Fd = !0), $d)
    case "textInput":
      return (e = t.data), e === $d && Fd ? null : e
    default:
      return null
  }
}
function U1(e, t) {
  if (Ei)
    return e === "compositionend" || (!cf && xm(e, t))
      ? ((e = ym()), (Ps = af = xn = null), (Ei = !1), e)
      : null
  switch (e) {
    case "paste":
      return null
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case "compositionend":
      return vm && t.locale !== "ko" ? null : t.data
    default:
      return null
  }
}
var Y1 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
}
function jd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === "input" ? !!Y1[e.type] : t === "textarea"
}
function wm(e, t, n, i) {
  Zg(i),
    (t = Js(t, "onChange")),
    0 < t.length &&
      ((n = new lf("onChange", "change", null, n, i)),
      e.push({ event: n, listeners: t }))
}
var Kr = null,
  ho = null
function K1(e) {
  Rm(e, 0)
}
function Wa(e) {
  var t = Ti(e)
  if (Ug(t)) return e
}
function X1(e, t) {
  if (e === "change") return t
}
var Sm = !1
if (rn) {
  var Vl
  if (rn) {
    var Ul = "oninput" in document
    if (!Ul) {
      var Bd = document.createElement("div")
      Bd.setAttribute("oninput", "return;"),
        (Ul = typeof Bd.oninput == "function")
    }
    Vl = Ul
  } else Vl = !1
  Sm = Vl && (!document.documentMode || 9 < document.documentMode)
}
function Wd() {
  Kr && (Kr.detachEvent("onpropertychange", bm), (ho = Kr = null))
}
function bm(e) {
  if (e.propertyName === "value" && Wa(ho)) {
    var t = []
    wm(t, ho, e, tf(e)), nm(K1, t)
  }
}
function Q1(e, t, n) {
  e === "focusin"
    ? (Wd(), (Kr = t), (ho = n), Kr.attachEvent("onpropertychange", bm))
    : e === "focusout" && Wd()
}
function G1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Wa(ho)
}
function q1(e, t) {
  if (e === "click") return Wa(t)
}
function Z1(e, t) {
  if (e === "input" || e === "change") return Wa(t)
}
function J1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var It = typeof Object.is == "function" ? Object.is : J1
function po(e, t) {
  if (It(e, t)) return !0
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1
  var n = Object.keys(e),
    i = Object.keys(t)
  if (n.length !== i.length) return !1
  for (i = 0; i < n.length; i++) {
    var r = n[i]
    if (!Ru.call(t, r) || !It(e[r], t[r])) return !1
  }
  return !0
}
function Hd(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function Vd(e, t) {
  var n = Hd(e)
  e = 0
  for (var i; n; ) {
    if (n.nodeType === 3) {
      if (((i = e + n.textContent.length), e <= t && i >= t))
        return { node: n, offset: t - e }
      e = i
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = Hd(n)
  }
}
function km(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? km(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function Cm() {
  for (var e = window, t = Ys(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string"
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = Ys(e.document)
  }
  return t
}
function ff(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  )
}
function ex(e) {
  var t = Cm(),
    n = e.focusedElem,
    i = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    km(n.ownerDocument.documentElement, n)
  ) {
    if (i !== null && ff(n)) {
      if (
        ((t = i.start),
        (e = i.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection()
        var r = n.textContent.length,
          o = Math.min(i.start, r)
        ;(i = i.end === void 0 ? o : Math.min(i.end, r)),
          !e.extend && o > i && ((r = i), (i = o), (o = r)),
          (r = Vd(n, o))
        var s = Vd(n, i)
        r &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== r.node ||
            e.anchorOffset !== r.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(r.node, r.offset),
          e.removeAllRanges(),
          o > i
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var tx = rn && "documentMode" in document && 11 >= document.documentMode,
  Pi = null,
  qu = null,
  Xr = null,
  Zu = !1
function Ud(e, t, n) {
  var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  Zu ||
    Pi == null ||
    Pi !== Ys(i) ||
    ((i = Pi),
    "selectionStart" in i && ff(i)
      ? (i = { start: i.selectionStart, end: i.selectionEnd })
      : ((i = (
          (i.ownerDocument && i.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (i = {
          anchorNode: i.anchorNode,
          anchorOffset: i.anchorOffset,
          focusNode: i.focusNode,
          focusOffset: i.focusOffset,
        })),
    (Xr && po(Xr, i)) ||
      ((Xr = i),
      (i = Js(qu, "onSelect")),
      0 < i.length &&
        ((t = new lf("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: i }),
        (t.target = Pi))))
}
function qo(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  )
}
var Mi = {
    animationend: qo("Animation", "AnimationEnd"),
    animationiteration: qo("Animation", "AnimationIteration"),
    animationstart: qo("Animation", "AnimationStart"),
    transitionend: qo("Transition", "TransitionEnd"),
  },
  Yl = {},
  Em = {}
rn &&
  ((Em = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Mi.animationend.animation,
    delete Mi.animationiteration.animation,
    delete Mi.animationstart.animation),
  "TransitionEvent" in window || delete Mi.transitionend.transition)
function Ha(e) {
  if (Yl[e]) return Yl[e]
  if (!Mi[e]) return e
  var t = Mi[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in Em) return (Yl[e] = t[n])
  return e
}
var Pm = Ha("animationend"),
  Mm = Ha("animationiteration"),
  Tm = Ha("animationstart"),
  Om = Ha("transitionend"),
  Am = new Map(),
  Yd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    )
function Bn(e, t) {
  Am.set(e, t), yi(t, [e])
}
for (var Kl = 0; Kl < Yd.length; Kl++) {
  var Xl = Yd[Kl],
    nx = Xl.toLowerCase(),
    ix = Xl[0].toUpperCase() + Xl.slice(1)
  Bn(nx, "on" + ix)
}
Bn(Pm, "onAnimationEnd")
Bn(Mm, "onAnimationIteration")
Bn(Tm, "onAnimationStart")
Bn("dblclick", "onDoubleClick")
Bn("focusin", "onFocus")
Bn("focusout", "onBlur")
Bn(Om, "onTransitionEnd")
Xi("onMouseEnter", ["mouseout", "mouseover"])
Xi("onMouseLeave", ["mouseout", "mouseover"])
Xi("onPointerEnter", ["pointerout", "pointerover"])
Xi("onPointerLeave", ["pointerout", "pointerover"])
yi(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
)
yi(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
)
yi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"])
yi(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
)
yi(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
)
yi(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
)
var Dr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  rx = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr))
function Kd(e, t, n) {
  var i = e.type || "unknown-event"
  ;(e.currentTarget = n), n1(i, t, void 0, e), (e.currentTarget = null)
}
function Rm(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var i = e[n],
      r = i.event
    i = i.listeners
    e: {
      var o = void 0
      if (t)
        for (var s = i.length - 1; 0 <= s; s--) {
          var a = i[s],
            l = a.instance,
            u = a.currentTarget
          if (((a = a.listener), l !== o && r.isPropagationStopped())) break e
          Kd(r, a, u), (o = l)
        }
      else
        for (s = 0; s < i.length; s++) {
          if (
            ((a = i[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== o && r.isPropagationStopped())
          )
            break e
          Kd(r, a, u), (o = l)
        }
    }
  }
  if (Xs) throw ((e = Ku), (Xs = !1), (Ku = null), e)
}
function ie(e, t) {
  var n = t[ic]
  n === void 0 && (n = t[ic] = new Set())
  var i = e + "__bubble"
  n.has(i) || (Lm(t, e, 2, !1), n.add(i))
}
function Ql(e, t, n) {
  var i = 0
  t && (i |= 4), Lm(n, e, i, t)
}
var Zo = "_reactListening" + Math.random().toString(36).slice(2)
function go(e) {
  if (!e[Zo]) {
    ;(e[Zo] = !0),
      jg.forEach(function (n) {
        n !== "selectionchange" && (rx.has(n) || Ql(n, !1, e), Ql(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[Zo] || ((t[Zo] = !0), Ql("selectionchange", !1, t))
  }
}
function Lm(e, t, n, i) {
  switch (mm(t)) {
    case 1:
      var r = v1
      break
    case 4:
      r = x1
      break
    default:
      r = sf
  }
  ;(n = r.bind(null, t, n, e)),
    (r = void 0),
    !Yu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (r = !0),
    i
      ? r !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: r })
        : e.addEventListener(t, n, !0)
      : r !== void 0
      ? e.addEventListener(t, n, { passive: r })
      : e.addEventListener(t, n, !1)
}
function Gl(e, t, n, i, r) {
  var o = i
  if (!(t & 1) && !(t & 2) && i !== null)
    e: for (;;) {
      if (i === null) return
      var s = i.tag
      if (s === 3 || s === 4) {
        var a = i.stateNode.containerInfo
        if (a === r || (a.nodeType === 8 && a.parentNode === r)) break
        if (s === 4)
          for (s = i.return; s !== null; ) {
            var l = s.tag
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === r || (l.nodeType === 8 && l.parentNode === r))
            )
              return
            s = s.return
          }
        for (; a !== null; ) {
          if (((s = Jn(a)), s === null)) return
          if (((l = s.tag), l === 5 || l === 6)) {
            i = o = s
            continue e
          }
          a = a.parentNode
        }
      }
      i = i.return
    }
  nm(function () {
    var u = o,
      c = tf(n),
      f = []
    e: {
      var d = Am.get(e)
      if (d !== void 0) {
        var h = lf,
          m = e
        switch (e) {
          case "keypress":
            if (Ms(n) === 0) break e
          case "keydown":
          case "keyup":
            h = D1
            break
          case "focusin":
            ;(m = "focus"), (h = Hl)
            break
          case "focusout":
            ;(m = "blur"), (h = Hl)
            break
          case "beforeblur":
          case "afterblur":
            h = Hl
            break
          case "click":
            if (n.button === 2) break e
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Id
            break
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = S1
            break
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = N1
            break
          case Pm:
          case Mm:
          case Tm:
            h = C1
            break
          case Om:
            h = F1
            break
          case "scroll":
            h = _1
            break
          case "wheel":
            h = B1
            break
          case "copy":
          case "cut":
          case "paste":
            h = P1
            break
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Nd
        }
        var y = (t & 4) !== 0,
          x = !y && e === "scroll",
          p = y ? (d !== null ? d + "Capture" : null) : d
        y = []
        for (var g = u, v; g !== null; ) {
          v = g
          var _ = v.stateNode
          if (
            (v.tag === 5 &&
              _ !== null &&
              ((v = _),
              p !== null && ((_ = lo(g, p)), _ != null && y.push(mo(g, _, v)))),
            x)
          )
            break
          g = g.return
        }
        0 < y.length &&
          ((d = new h(d, m, null, n, c)), f.push({ event: d, listeners: y }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          d &&
            n !== Vu &&
            (m = n.relatedTarget || n.fromElement) &&
            (Jn(m) || m[on]))
        )
          break e
        if (
          (h || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          h
            ? ((m = n.relatedTarget || n.toElement),
              (h = u),
              (m = m ? Jn(m) : null),
              m !== null &&
                ((x = vi(m)), m !== x || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((h = null), (m = u)),
          h !== m)
        ) {
          if (
            ((y = Id),
            (_ = "onMouseLeave"),
            (p = "onMouseEnter"),
            (g = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Nd),
              (_ = "onPointerLeave"),
              (p = "onPointerEnter"),
              (g = "pointer")),
            (x = h == null ? d : Ti(h)),
            (v = m == null ? d : Ti(m)),
            (d = new y(_, g + "leave", h, n, c)),
            (d.target = x),
            (d.relatedTarget = v),
            (_ = null),
            Jn(c) === u &&
              ((y = new y(p, g + "enter", m, n, c)),
              (y.target = v),
              (y.relatedTarget = x),
              (_ = y)),
            (x = _),
            h && m)
          )
            t: {
              for (y = h, p = m, g = 0, v = y; v; v = _i(v)) g++
              for (v = 0, _ = p; _; _ = _i(_)) v++
              for (; 0 < g - v; ) (y = _i(y)), g--
              for (; 0 < v - g; ) (p = _i(p)), v--
              for (; g--; ) {
                if (y === p || (p !== null && y === p.alternate)) break t
                ;(y = _i(y)), (p = _i(p))
              }
              y = null
            }
          else y = null
          h !== null && Xd(f, d, h, y, !1),
            m !== null && x !== null && Xd(f, x, m, y, !0)
        }
      }
      e: {
        if (
          ((d = u ? Ti(u) : window),
          (h = d.nodeName && d.nodeName.toLowerCase()),
          h === "select" || (h === "input" && d.type === "file"))
        )
          var w = X1
        else if (jd(d))
          if (Sm) w = Z1
          else {
            w = G1
            var b = Q1
          }
        else
          (h = d.nodeName) &&
            h.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (w = q1)
        if (w && (w = w(e, u))) {
          wm(f, w, n, c)
          break e
        }
        b && b(e, d, u),
          e === "focusout" &&
            (b = d._wrapperState) &&
            b.controlled &&
            d.type === "number" &&
            Fu(d, "number", d.value)
      }
      switch (((b = u ? Ti(u) : window), e)) {
        case "focusin":
          ;(jd(b) || b.contentEditable === "true") &&
            ((Pi = b), (qu = u), (Xr = null))
          break
        case "focusout":
          Xr = qu = Pi = null
          break
        case "mousedown":
          Zu = !0
          break
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ;(Zu = !1), Ud(f, n, c)
          break
        case "selectionchange":
          if (tx) break
        case "keydown":
        case "keyup":
          Ud(f, n, c)
      }
      var S
      if (cf)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart"
              break e
            case "compositionend":
              k = "onCompositionEnd"
              break e
            case "compositionupdate":
              k = "onCompositionUpdate"
              break e
          }
          k = void 0
        }
      else
        Ei
          ? xm(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart")
      k &&
        (vm &&
          n.locale !== "ko" &&
          (Ei || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && Ei && (S = ym())
            : ((xn = c),
              (af = "value" in xn ? xn.value : xn.textContent),
              (Ei = !0))),
        (b = Js(u, k)),
        0 < b.length &&
          ((k = new zd(k, e, null, n, c)),
          f.push({ event: k, listeners: b }),
          S ? (k.data = S) : ((S = _m(n)), S !== null && (k.data = S)))),
        (S = H1 ? V1(e, n) : U1(e, n)) &&
          ((u = Js(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new zd("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = S)))
    }
    Rm(f, t)
  })
}
function mo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function Js(e, t) {
  for (var n = t + "Capture", i = []; e !== null; ) {
    var r = e,
      o = r.stateNode
    r.tag === 5 &&
      o !== null &&
      ((r = o),
      (o = lo(e, n)),
      o != null && i.unshift(mo(e, o, r)),
      (o = lo(e, t)),
      o != null && i.push(mo(e, o, r))),
      (e = e.return)
  }
  return i
}
function _i(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function Xd(e, t, n, i, r) {
  for (var o = t._reactName, s = []; n !== null && n !== i; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode
    if (l !== null && l === i) break
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      r
        ? ((l = lo(n, o)), l != null && s.unshift(mo(n, l, a)))
        : r || ((l = lo(n, o)), l != null && s.push(mo(n, l, a)))),
      (n = n.return)
  }
  s.length !== 0 && e.push({ event: t, listeners: s })
}
var ox = /\r\n?/g,
  sx = /\u0000|\uFFFD/g
function Qd(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      ox,
      `
`,
    )
    .replace(sx, "")
}
function Jo(e, t, n) {
  if (((t = Qd(t)), Qd(e) !== t && n)) throw Error(C(425))
}
function ea() {}
var Ju = null,
  ec = null
function tc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var nc = typeof setTimeout == "function" ? setTimeout : void 0,
  ax = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Gd = typeof Promise == "function" ? Promise : void 0,
  lx =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Gd < "u"
      ? function (e) {
          return Gd.resolve(null).then(e).catch(ux)
        }
      : nc
function ux(e) {
  setTimeout(function () {
    throw e
  })
}
function ql(e, t) {
  var n = t,
    i = 0
  do {
    var r = n.nextSibling
    if ((e.removeChild(n), r && r.nodeType === 8))
      if (((n = r.data), n === "/$")) {
        if (i === 0) {
          e.removeChild(r), fo(t)
          return
        }
        i--
      } else (n !== "$" && n !== "$?" && n !== "$!") || i++
    n = r
  } while (n)
  fo(t)
}
function Mn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break
      if (t === "/$") return null
    }
  }
  return e
}
function qd(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e
        t--
      } else n === "/$" && t++
    }
    e = e.previousSibling
  }
  return null
}
var dr = Math.random().toString(36).slice(2),
  Wt = "__reactFiber$" + dr,
  yo = "__reactProps$" + dr,
  on = "__reactContainer$" + dr,
  ic = "__reactEvents$" + dr,
  cx = "__reactListeners$" + dr,
  fx = "__reactHandles$" + dr
function Jn(e) {
  var t = e[Wt]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[on] || n[Wt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = qd(e); e !== null; ) {
          if ((n = e[Wt])) return n
          e = qd(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function zo(e) {
  return (
    (e = e[Wt] || e[on]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function Ti(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(C(33))
}
function Va(e) {
  return e[yo] || null
}
var rc = [],
  Oi = -1
function Wn(e) {
  return { current: e }
}
function oe(e) {
  0 > Oi || ((e.current = rc[Oi]), (rc[Oi] = null), Oi--)
}
function ne(e, t) {
  Oi++, (rc[Oi] = e.current), (e.current = t)
}
var Nn = {},
  Be = Wn(Nn),
  tt = Wn(!1),
  li = Nn
function Qi(e, t) {
  var n = e.type.contextTypes
  if (!n) return Nn
  var i = e.stateNode
  if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
    return i.__reactInternalMemoizedMaskedChildContext
  var r = {},
    o
  for (o in n) r[o] = t[o]
  return (
    i &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = r)),
    r
  )
}
function nt(e) {
  return (e = e.childContextTypes), e != null
}
function ta() {
  oe(tt), oe(Be)
}
function Zd(e, t, n) {
  if (Be.current !== Nn) throw Error(C(168))
  ne(Be, t), ne(tt, n)
}
function Dm(e, t, n) {
  var i = e.stateNode
  if (((t = t.childContextTypes), typeof i.getChildContext != "function"))
    return n
  i = i.getChildContext()
  for (var r in i) if (!(r in t)) throw Error(C(108, Qv(e) || "Unknown", r))
  return de({}, n, i)
}
function na(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Nn),
    (li = Be.current),
    ne(Be, e),
    ne(tt, tt.current),
    !0
  )
}
function Jd(e, t, n) {
  var i = e.stateNode
  if (!i) throw Error(C(169))
  n
    ? ((e = Dm(e, t, li)),
      (i.__reactInternalMemoizedMergedChildContext = e),
      oe(tt),
      oe(Be),
      ne(Be, e))
    : oe(tt),
    ne(tt, n)
}
var Zt = null,
  Ua = !1,
  Zl = !1
function Im(e) {
  Zt === null ? (Zt = [e]) : Zt.push(e)
}
function dx(e) {
  ;(Ua = !0), Im(e)
}
function Hn() {
  if (!Zl && Zt !== null) {
    Zl = !0
    var e = 0,
      t = Z
    try {
      var n = Zt
      for (Z = 1; e < n.length; e++) {
        var i = n[e]
        do i = i(!0)
        while (i !== null)
      }
      ;(Zt = null), (Ua = !1)
    } catch (r) {
      throw (Zt !== null && (Zt = Zt.slice(e + 1)), sm(nf, Hn), r)
    } finally {
      ;(Z = t), (Zl = !1)
    }
  }
  return null
}
var Ai = [],
  Ri = 0,
  ia = null,
  ra = 0,
  yt = [],
  vt = 0,
  ui = null,
  en = 1,
  tn = ""
function Xn(e, t) {
  ;(Ai[Ri++] = ra), (Ai[Ri++] = ia), (ia = e), (ra = t)
}
function zm(e, t, n) {
  ;(yt[vt++] = en), (yt[vt++] = tn), (yt[vt++] = ui), (ui = e)
  var i = en
  e = tn
  var r = 32 - Rt(i) - 1
  ;(i &= ~(1 << r)), (n += 1)
  var o = 32 - Rt(t) + r
  if (30 < o) {
    var s = r - (r % 5)
    ;(o = (i & ((1 << s) - 1)).toString(32)),
      (i >>= s),
      (r -= s),
      (en = (1 << (32 - Rt(t) + r)) | (n << r) | i),
      (tn = o + e)
  } else (en = (1 << o) | (n << r) | i), (tn = e)
}
function df(e) {
  e.return !== null && (Xn(e, 1), zm(e, 1, 0))
}
function hf(e) {
  for (; e === ia; )
    (ia = Ai[--Ri]), (Ai[Ri] = null), (ra = Ai[--Ri]), (Ai[Ri] = null)
  for (; e === ui; )
    (ui = yt[--vt]),
      (yt[vt] = null),
      (tn = yt[--vt]),
      (yt[vt] = null),
      (en = yt[--vt]),
      (yt[vt] = null)
}
var lt = null,
  at = null,
  le = !1,
  Ot = null
function Nm(e, t) {
  var n = xt(5, null, null, 0)
  ;(n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function eh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (lt = e), (at = Mn(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (lt = e), (at = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = ui !== null ? { id: en, overflow: tn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = xt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (lt = e),
            (at = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function oc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function sc(e) {
  if (le) {
    var t = at
    if (t) {
      var n = t
      if (!eh(e, t)) {
        if (oc(e)) throw Error(C(418))
        t = Mn(n.nextSibling)
        var i = lt
        t && eh(e, t)
          ? Nm(i, n)
          : ((e.flags = (e.flags & -4097) | 2), (le = !1), (lt = e))
      }
    } else {
      if (oc(e)) throw Error(C(418))
      ;(e.flags = (e.flags & -4097) | 2), (le = !1), (lt = e)
    }
  }
}
function th(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  lt = e
}
function es(e) {
  if (e !== lt) return !1
  if (!le) return th(e), (le = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !tc(e.type, e.memoizedProps))),
    t && (t = at))
  ) {
    if (oc(e)) throw ($m(), Error(C(418)))
    for (; t; ) Nm(e, t), (t = Mn(t.nextSibling))
  }
  if ((th(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === "/$") {
            if (t === 0) {
              at = Mn(e.nextSibling)
              break e
            }
            t--
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++
        }
        e = e.nextSibling
      }
      at = null
    }
  } else at = lt ? Mn(e.stateNode.nextSibling) : null
  return !0
}
function $m() {
  for (var e = at; e; ) e = Mn(e.nextSibling)
}
function Gi() {
  ;(at = lt = null), (le = !1)
}
function pf(e) {
  Ot === null ? (Ot = [e]) : Ot.push(e)
}
var hx = un.ReactCurrentBatchConfig
function Mt(e, t) {
  if (e && e.defaultProps) {
    ;(t = de({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
var oa = Wn(null),
  sa = null,
  Li = null,
  gf = null
function mf() {
  gf = Li = sa = null
}
function yf(e) {
  var t = oa.current
  oe(oa), (e._currentValue = t)
}
function ac(e, t, n) {
  for (; e !== null; ) {
    var i = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), i !== null && (i.childLanes |= t))
        : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function Wi(e, t) {
  ;(sa = e),
    (gf = Li = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ze = !0), (e.firstContext = null))
}
function St(e) {
  var t = e._currentValue
  if (gf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Li === null)) {
      if (sa === null) throw Error(C(308))
      ;(Li = e), (sa.dependencies = { lanes: 0, firstContext: e })
    } else Li = Li.next = e
  return t
}
var ei = null
function vf(e) {
  ei === null ? (ei = [e]) : ei.push(e)
}
function Fm(e, t, n, i) {
  var r = t.interleaved
  return (
    r === null ? ((n.next = n), vf(t)) : ((n.next = r.next), (r.next = n)),
    (t.interleaved = n),
    sn(e, i)
  )
}
function sn(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var gn = !1
function xf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function jm(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      })
}
function nn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function Tn(e, t, n) {
  var i = e.updateQueue
  if (i === null) return null
  if (((i = i.shared), V & 2)) {
    var r = i.pending
    return (
      r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (i.pending = t),
      sn(e, n)
    )
  }
  return (
    (r = i.interleaved),
    r === null ? ((t.next = t), vf(i)) : ((t.next = r.next), (r.next = t)),
    (i.interleaved = t),
    sn(e, n)
  )
}
function Ts(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var i = t.lanes
    ;(i &= e.pendingLanes), (n |= i), (t.lanes = n), rf(e, n)
  }
}
function nh(e, t) {
  var n = e.updateQueue,
    i = e.alternate
  if (i !== null && ((i = i.updateQueue), n === i)) {
    var r = null,
      o = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        }
        o === null ? (r = o = s) : (o = o.next = s), (n = n.next)
      } while (n !== null)
      o === null ? (r = o = t) : (o = o.next = t)
    } else r = o = t
    ;(n = {
      baseState: i.baseState,
      firstBaseUpdate: r,
      lastBaseUpdate: o,
      shared: i.shared,
      effects: i.effects,
    }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t)
}
function aa(e, t, n, i) {
  var r = e.updateQueue
  gn = !1
  var o = r.firstBaseUpdate,
    s = r.lastBaseUpdate,
    a = r.shared.pending
  if (a !== null) {
    r.shared.pending = null
    var l = a,
      u = l.next
    ;(l.next = null), s === null ? (o = u) : (s.next = u), (s = l)
    var c = e.alternate
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)))
  }
  if (o !== null) {
    var f = r.baseState
    ;(s = 0), (c = u = l = null), (a = o)
    do {
      var d = a.lane,
        h = a.eventTime
      if ((i & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            })
        e: {
          var m = e,
            y = a
          switch (((d = t), (h = n), y.tag)) {
            case 1:
              if (((m = y.payload), typeof m == "function")) {
                f = m.call(h, f, d)
                break e
              }
              f = m
              break e
            case 3:
              m.flags = (m.flags & -65537) | 128
            case 0:
              if (
                ((m = y.payload),
                (d = typeof m == "function" ? m.call(h, f, d) : m),
                d == null)
              )
                break e
              f = de({}, f, d)
              break e
            case 2:
              gn = !0
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = r.effects),
          d === null ? (r.effects = [a]) : d.push(a))
      } else
        (h = {
          eventTime: h,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (l = f)) : (c = c.next = h),
          (s |= d)
      if (((a = a.next), a === null)) {
        if (((a = r.shared.pending), a === null)) break
        ;(d = a),
          (a = d.next),
          (d.next = null),
          (r.lastBaseUpdate = d),
          (r.shared.pending = null)
      }
    } while (1)
    if (
      (c === null && (l = f),
      (r.baseState = l),
      (r.firstBaseUpdate = u),
      (r.lastBaseUpdate = c),
      (t = r.shared.interleaved),
      t !== null)
    ) {
      r = t
      do (s |= r.lane), (r = r.next)
      while (r !== t)
    } else o === null && (r.shared.lanes = 0)
    ;(fi |= s), (e.lanes = s), (e.memoizedState = f)
  }
}
function ih(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var i = e[t],
        r = i.callback
      if (r !== null) {
        if (((i.callback = null), (i = n), typeof r != "function"))
          throw Error(C(191, r))
        r.call(i)
      }
    }
}
var Bm = new Fg.Component().refs
function lc(e, t, n, i) {
  ;(t = e.memoizedState),
    (n = n(i, t)),
    (n = n == null ? t : de({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ya = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? vi(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var i = Ve(),
      r = An(e),
      o = nn(i, r)
    ;(o.payload = t),
      n != null && (o.callback = n),
      (t = Tn(e, o, r)),
      t !== null && (Lt(t, e, r, i), Ts(t, e, r))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var i = Ve(),
      r = An(e),
      o = nn(i, r)
    ;(o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Tn(e, o, r)),
      t !== null && (Lt(t, e, r, i), Ts(t, e, r))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = Ve(),
      i = An(e),
      r = nn(n, i)
    ;(r.tag = 2),
      t != null && (r.callback = t),
      (t = Tn(e, r, i)),
      t !== null && (Lt(t, e, i, n), Ts(t, e, i))
  },
}
function rh(e, t, n, i, r, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(i, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !po(n, i) || !po(r, o)
      : !0
  )
}
function Wm(e, t, n) {
  var i = !1,
    r = Nn,
    o = t.contextType
  return (
    typeof o == "object" && o !== null
      ? (o = St(o))
      : ((r = nt(t) ? li : Be.current),
        (i = t.contextTypes),
        (o = (i = i != null) ? Qi(e, r) : Nn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ya),
    (e.stateNode = t),
    (t._reactInternals = e),
    i &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = r),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  )
}
function oh(e, t, n, i) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, i),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, i),
    t.state !== e && Ya.enqueueReplaceState(t, t.state, null)
}
function uc(e, t, n, i) {
  var r = e.stateNode
  ;(r.props = n), (r.state = e.memoizedState), (r.refs = Bm), xf(e)
  var o = t.contextType
  typeof o == "object" && o !== null
    ? (r.context = St(o))
    : ((o = nt(t) ? li : Be.current), (r.context = Qi(e, o))),
    (r.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (lc(e, t, o, n), (r.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof r.getSnapshotBeforeUpdate == "function" ||
      (typeof r.UNSAFE_componentWillMount != "function" &&
        typeof r.componentWillMount != "function") ||
      ((t = r.state),
      typeof r.componentWillMount == "function" && r.componentWillMount(),
      typeof r.UNSAFE_componentWillMount == "function" &&
        r.UNSAFE_componentWillMount(),
      t !== r.state && Ya.enqueueReplaceState(r, r.state, null),
      aa(e, n, r, i),
      (r.state = e.memoizedState)),
    typeof r.componentDidMount == "function" && (e.flags |= 4194308)
}
function wr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309))
        var i = n.stateNode
      }
      if (!i) throw Error(C(147, e))
      var r = i,
        o = "" + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = r.refs
            a === Bm && (a = r.refs = {}), s === null ? delete a[o] : (a[o] = s)
          }),
          (t._stringRef = o),
          t)
    }
    if (typeof e != "string") throw Error(C(284))
    if (!n._owner) throw Error(C(290, e))
  }
  return e
}
function ts(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  )
}
function sh(e) {
  var t = e._init
  return t(e._payload)
}
function Hm(e) {
  function t(p, g) {
    if (e) {
      var v = p.deletions
      v === null ? ((p.deletions = [g]), (p.flags |= 16)) : v.push(g)
    }
  }
  function n(p, g) {
    if (!e) return null
    for (; g !== null; ) t(p, g), (g = g.sibling)
    return null
  }
  function i(p, g) {
    for (p = new Map(); g !== null; )
      g.key !== null ? p.set(g.key, g) : p.set(g.index, g), (g = g.sibling)
    return p
  }
  function r(p, g) {
    return (p = Rn(p, g)), (p.index = 0), (p.sibling = null), p
  }
  function o(p, g, v) {
    return (
      (p.index = v),
      e
        ? ((v = p.alternate),
          v !== null
            ? ((v = v.index), v < g ? ((p.flags |= 2), g) : v)
            : ((p.flags |= 2), g))
        : ((p.flags |= 1048576), g)
    )
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p
  }
  function a(p, g, v, _) {
    return g === null || g.tag !== 6
      ? ((g = ou(v, p.mode, _)), (g.return = p), g)
      : ((g = r(g, v)), (g.return = p), g)
  }
  function l(p, g, v, _) {
    var w = v.type
    return w === Ci
      ? c(p, g, v.props.children, _, v.key)
      : g !== null &&
        (g.elementType === w ||
          (typeof w == "object" &&
            w !== null &&
            w.$$typeof === pn &&
            sh(w) === g.type))
      ? ((_ = r(g, v.props)), (_.ref = wr(p, g, v)), (_.return = p), _)
      : ((_ = Is(v.type, v.key, v.props, null, p.mode, _)),
        (_.ref = wr(p, g, v)),
        (_.return = p),
        _)
  }
  function u(p, g, v, _) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== v.containerInfo ||
      g.stateNode.implementation !== v.implementation
      ? ((g = su(v, p.mode, _)), (g.return = p), g)
      : ((g = r(g, v.children || [])), (g.return = p), g)
  }
  function c(p, g, v, _, w) {
    return g === null || g.tag !== 7
      ? ((g = ri(v, p.mode, _, w)), (g.return = p), g)
      : ((g = r(g, v)), (g.return = p), g)
  }
  function f(p, g, v) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (g = ou("" + g, p.mode, v)), (g.return = p), g
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Vo:
          return (
            (v = Is(g.type, g.key, g.props, null, p.mode, v)),
            (v.ref = wr(p, null, g)),
            (v.return = p),
            v
          )
        case ki:
          return (g = su(g, p.mode, v)), (g.return = p), g
        case pn:
          var _ = g._init
          return f(p, _(g._payload), v)
      }
      if (Rr(g) || mr(g)) return (g = ri(g, p.mode, v, null)), (g.return = p), g
      ts(p, g)
    }
    return null
  }
  function d(p, g, v, _) {
    var w = g !== null ? g.key : null
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return w !== null ? null : a(p, g, "" + v, _)
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Vo:
          return v.key === w ? l(p, g, v, _) : null
        case ki:
          return v.key === w ? u(p, g, v, _) : null
        case pn:
          return (w = v._init), d(p, g, w(v._payload), _)
      }
      if (Rr(v) || mr(v)) return w !== null ? null : c(p, g, v, _, null)
      ts(p, v)
    }
    return null
  }
  function h(p, g, v, _, w) {
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return (p = p.get(v) || null), a(g, p, "" + _, w)
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case Vo:
          return (p = p.get(_.key === null ? v : _.key) || null), l(g, p, _, w)
        case ki:
          return (p = p.get(_.key === null ? v : _.key) || null), u(g, p, _, w)
        case pn:
          var b = _._init
          return h(p, g, v, b(_._payload), w)
      }
      if (Rr(_) || mr(_)) return (p = p.get(v) || null), c(g, p, _, w, null)
      ts(g, _)
    }
    return null
  }
  function m(p, g, v, _) {
    for (
      var w = null, b = null, S = g, k = (g = 0), M = null;
      S !== null && k < v.length;
      k++
    ) {
      S.index > k ? ((M = S), (S = null)) : (M = S.sibling)
      var E = d(p, S, v[k], _)
      if (E === null) {
        S === null && (S = M)
        break
      }
      e && S && E.alternate === null && t(p, S),
        (g = o(E, g, k)),
        b === null ? (w = E) : (b.sibling = E),
        (b = E),
        (S = M)
    }
    if (k === v.length) return n(p, S), le && Xn(p, k), w
    if (S === null) {
      for (; k < v.length; k++)
        (S = f(p, v[k], _)),
          S !== null &&
            ((g = o(S, g, k)), b === null ? (w = S) : (b.sibling = S), (b = S))
      return le && Xn(p, k), w
    }
    for (S = i(p, S); k < v.length; k++)
      (M = h(S, p, k, v[k], _)),
        M !== null &&
          (e && M.alternate !== null && S.delete(M.key === null ? k : M.key),
          (g = o(M, g, k)),
          b === null ? (w = M) : (b.sibling = M),
          (b = M))
    return (
      e &&
        S.forEach(function (A) {
          return t(p, A)
        }),
      le && Xn(p, k),
      w
    )
  }
  function y(p, g, v, _) {
    var w = mr(v)
    if (typeof w != "function") throw Error(C(150))
    if (((v = w.call(v)), v == null)) throw Error(C(151))
    for (
      var b = (w = null), S = g, k = (g = 0), M = null, E = v.next();
      S !== null && !E.done;
      k++, E = v.next()
    ) {
      S.index > k ? ((M = S), (S = null)) : (M = S.sibling)
      var A = d(p, S, E.value, _)
      if (A === null) {
        S === null && (S = M)
        break
      }
      e && S && A.alternate === null && t(p, S),
        (g = o(A, g, k)),
        b === null ? (w = A) : (b.sibling = A),
        (b = A),
        (S = M)
    }
    if (E.done) return n(p, S), le && Xn(p, k), w
    if (S === null) {
      for (; !E.done; k++, E = v.next())
        (E = f(p, E.value, _)),
          E !== null &&
            ((g = o(E, g, k)), b === null ? (w = E) : (b.sibling = E), (b = E))
      return le && Xn(p, k), w
    }
    for (S = i(p, S); !E.done; k++, E = v.next())
      (E = h(S, p, k, E.value, _)),
        E !== null &&
          (e && E.alternate !== null && S.delete(E.key === null ? k : E.key),
          (g = o(E, g, k)),
          b === null ? (w = E) : (b.sibling = E),
          (b = E))
    return (
      e &&
        S.forEach(function (L) {
          return t(p, L)
        }),
      le && Xn(p, k),
      w
    )
  }
  function x(p, g, v, _) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Ci &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Vo:
          e: {
            for (var w = v.key, b = g; b !== null; ) {
              if (b.key === w) {
                if (((w = v.type), w === Ci)) {
                  if (b.tag === 7) {
                    n(p, b.sibling),
                      (g = r(b, v.props.children)),
                      (g.return = p),
                      (p = g)
                    break e
                  }
                } else if (
                  b.elementType === w ||
                  (typeof w == "object" &&
                    w !== null &&
                    w.$$typeof === pn &&
                    sh(w) === b.type)
                ) {
                  n(p, b.sibling),
                    (g = r(b, v.props)),
                    (g.ref = wr(p, b, v)),
                    (g.return = p),
                    (p = g)
                  break e
                }
                n(p, b)
                break
              } else t(p, b)
              b = b.sibling
            }
            v.type === Ci
              ? ((g = ri(v.props.children, p.mode, _, v.key)),
                (g.return = p),
                (p = g))
              : ((_ = Is(v.type, v.key, v.props, null, p.mode, _)),
                (_.ref = wr(p, g, v)),
                (_.return = p),
                (p = _))
          }
          return s(p)
        case ki:
          e: {
            for (b = v.key; g !== null; ) {
              if (g.key === b)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === v.containerInfo &&
                  g.stateNode.implementation === v.implementation
                ) {
                  n(p, g.sibling),
                    (g = r(g, v.children || [])),
                    (g.return = p),
                    (p = g)
                  break e
                } else {
                  n(p, g)
                  break
                }
              else t(p, g)
              g = g.sibling
            }
            ;(g = su(v, p.mode, _)), (g.return = p), (p = g)
          }
          return s(p)
        case pn:
          return (b = v._init), x(p, g, b(v._payload), _)
      }
      if (Rr(v)) return m(p, g, v, _)
      if (mr(v)) return y(p, g, v, _)
      ts(p, v)
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        g !== null && g.tag === 6
          ? (n(p, g.sibling), (g = r(g, v)), (g.return = p), (p = g))
          : (n(p, g), (g = ou(v, p.mode, _)), (g.return = p), (p = g)),
        s(p))
      : n(p, g)
  }
  return x
}
var qi = Hm(!0),
  Vm = Hm(!1),
  No = {},
  Ut = Wn(No),
  vo = Wn(No),
  xo = Wn(No)
function ti(e) {
  if (e === No) throw Error(C(174))
  return e
}
function _f(e, t) {
  switch ((ne(xo, t), ne(vo, e), ne(Ut, No), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Bu(null, "")
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Bu(t, e))
  }
  oe(Ut), ne(Ut, t)
}
function Zi() {
  oe(Ut), oe(vo), oe(xo)
}
function Um(e) {
  ti(xo.current)
  var t = ti(Ut.current),
    n = Bu(t, e.type)
  t !== n && (ne(vo, e), ne(Ut, n))
}
function wf(e) {
  vo.current === e && (oe(Ut), oe(vo))
}
var ue = Wn(0)
function la(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var Jl = []
function Sf() {
  for (var e = 0; e < Jl.length; e++) Jl[e]._workInProgressVersionPrimary = null
  Jl.length = 0
}
var Os = un.ReactCurrentDispatcher,
  eu = un.ReactCurrentBatchConfig,
  ci = 0,
  fe = null,
  ke = null,
  Ee = null,
  ua = !1,
  Qr = !1,
  _o = 0,
  px = 0
function Ne() {
  throw Error(C(321))
}
function bf(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!It(e[n], t[n])) return !1
  return !0
}
function kf(e, t, n, i, r, o) {
  if (
    ((ci = o),
    (fe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Os.current = e === null || e.memoizedState === null ? vx : xx),
    (e = n(i, r)),
    Qr)
  ) {
    o = 0
    do {
      if (((Qr = !1), (_o = 0), 25 <= o)) throw Error(C(301))
      ;(o += 1),
        (Ee = ke = null),
        (t.updateQueue = null),
        (Os.current = _x),
        (e = n(i, r))
    } while (Qr)
  }
  if (
    ((Os.current = ca),
    (t = ke !== null && ke.next !== null),
    (ci = 0),
    (Ee = ke = fe = null),
    (ua = !1),
    t)
  )
    throw Error(C(300))
  return e
}
function Cf() {
  var e = _o !== 0
  return (_o = 0), e
}
function $t() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return Ee === null ? (fe.memoizedState = Ee = e) : (Ee = Ee.next = e), Ee
}
function bt() {
  if (ke === null) {
    var e = fe.alternate
    e = e !== null ? e.memoizedState : null
  } else e = ke.next
  var t = Ee === null ? fe.memoizedState : Ee.next
  if (t !== null) (Ee = t), (ke = e)
  else {
    if (e === null) throw Error(C(310))
    ;(ke = e),
      (e = {
        memoizedState: ke.memoizedState,
        baseState: ke.baseState,
        baseQueue: ke.baseQueue,
        queue: ke.queue,
        next: null,
      }),
      Ee === null ? (fe.memoizedState = Ee = e) : (Ee = Ee.next = e)
  }
  return Ee
}
function wo(e, t) {
  return typeof t == "function" ? t(e) : t
}
function tu(e) {
  var t = bt(),
    n = t.queue
  if (n === null) throw Error(C(311))
  n.lastRenderedReducer = e
  var i = ke,
    r = i.baseQueue,
    o = n.pending
  if (o !== null) {
    if (r !== null) {
      var s = r.next
      ;(r.next = o.next), (o.next = s)
    }
    ;(i.baseQueue = r = o), (n.pending = null)
  }
  if (r !== null) {
    ;(o = r.next), (i = i.baseState)
    var a = (s = null),
      l = null,
      u = o
    do {
      var c = u.lane
      if ((ci & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (i = u.hasEagerState ? u.eagerState : e(i, u.action))
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        }
        l === null ? ((a = l = f), (s = i)) : (l = l.next = f),
          (fe.lanes |= c),
          (fi |= c)
      }
      u = u.next
    } while (u !== null && u !== o)
    l === null ? (s = i) : (l.next = a),
      It(i, t.memoizedState) || (Ze = !0),
      (t.memoizedState = i),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = i)
  }
  if (((e = n.interleaved), e !== null)) {
    r = e
    do (o = r.lane), (fe.lanes |= o), (fi |= o), (r = r.next)
    while (r !== e)
  } else r === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function nu(e) {
  var t = bt(),
    n = t.queue
  if (n === null) throw Error(C(311))
  n.lastRenderedReducer = e
  var i = n.dispatch,
    r = n.pending,
    o = t.memoizedState
  if (r !== null) {
    n.pending = null
    var s = (r = r.next)
    do (o = e(o, s.action)), (s = s.next)
    while (s !== r)
    It(o, t.memoizedState) || (Ze = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o)
  }
  return [o, i]
}
function Ym() {}
function Km(e, t) {
  var n = fe,
    i = bt(),
    r = t(),
    o = !It(i.memoizedState, r)
  if (
    (o && ((i.memoizedState = r), (Ze = !0)),
    (i = i.queue),
    Ef(Gm.bind(null, n, i, e), [e]),
    i.getSnapshot !== t || o || (Ee !== null && Ee.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      So(9, Qm.bind(null, n, i, r, t), void 0, null),
      Te === null)
    )
      throw Error(C(349))
    ci & 30 || Xm(n, t, r)
  }
  return r
}
function Xm(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = fe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (fe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function Qm(e, t, n, i) {
  ;(t.value = n), (t.getSnapshot = i), qm(t) && Zm(e)
}
function Gm(e, t, n) {
  return n(function () {
    qm(t) && Zm(e)
  })
}
function qm(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !It(e, n)
  } catch {
    return !0
  }
}
function Zm(e) {
  var t = sn(e, 1)
  t !== null && Lt(t, e, 1, -1)
}
function ah(e) {
  var t = $t()
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: wo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = yx.bind(null, fe, e)),
    [t.memoizedState, e]
  )
}
function So(e, t, n, i) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: i, next: null }),
    (t = fe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (fe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((i = n.next), (n.next = e), (e.next = i), (t.lastEffect = e))),
    e
  )
}
function Jm() {
  return bt().memoizedState
}
function As(e, t, n, i) {
  var r = $t()
  ;(fe.flags |= e),
    (r.memoizedState = So(1 | t, n, void 0, i === void 0 ? null : i))
}
function Ka(e, t, n, i) {
  var r = bt()
  i = i === void 0 ? null : i
  var o = void 0
  if (ke !== null) {
    var s = ke.memoizedState
    if (((o = s.destroy), i !== null && bf(i, s.deps))) {
      r.memoizedState = So(t, n, o, i)
      return
    }
  }
  ;(fe.flags |= e), (r.memoizedState = So(1 | t, n, o, i))
}
function lh(e, t) {
  return As(8390656, 8, e, t)
}
function Ef(e, t) {
  return Ka(2048, 8, e, t)
}
function e0(e, t) {
  return Ka(4, 2, e, t)
}
function t0(e, t) {
  return Ka(4, 4, e, t)
}
function n0(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function i0(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ka(4, 4, n0.bind(null, t, e), n)
  )
}
function Pf() {}
function r0(e, t) {
  var n = bt()
  t = t === void 0 ? null : t
  var i = n.memoizedState
  return i !== null && t !== null && bf(t, i[1])
    ? i[0]
    : ((n.memoizedState = [e, t]), e)
}
function o0(e, t) {
  var n = bt()
  t = t === void 0 ? null : t
  var i = n.memoizedState
  return i !== null && t !== null && bf(t, i[1])
    ? i[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function s0(e, t, n) {
  return ci & 21
    ? (It(n, t) || ((n = um()), (fe.lanes |= n), (fi |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ze = !0)), (e.memoizedState = n))
}
function gx(e, t) {
  var n = Z
  ;(Z = n !== 0 && 4 > n ? n : 4), e(!0)
  var i = eu.transition
  eu.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(Z = n), (eu.transition = i)
  }
}
function a0() {
  return bt().memoizedState
}
function mx(e, t, n) {
  var i = An(e)
  if (
    ((n = {
      lane: i,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    l0(e))
  )
    u0(t, n)
  else if (((n = Fm(e, t, n, i)), n !== null)) {
    var r = Ve()
    Lt(n, e, i, r), c0(n, t, i)
  }
}
function yx(e, t, n) {
  var i = An(e),
    r = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (l0(e)) u0(t, r)
  else {
    var o = e.alternate
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n)
        if (((r.hasEagerState = !0), (r.eagerState = a), It(a, s))) {
          var l = t.interleaved
          l === null
            ? ((r.next = r), vf(t))
            : ((r.next = l.next), (l.next = r)),
            (t.interleaved = r)
          return
        }
      } catch {
      } finally {
      }
    ;(n = Fm(e, t, r, i)),
      n !== null && ((r = Ve()), Lt(n, e, i, r), c0(n, t, i))
  }
}
function l0(e) {
  var t = e.alternate
  return e === fe || (t !== null && t === fe)
}
function u0(e, t) {
  Qr = ua = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function c0(e, t, n) {
  if (n & 4194240) {
    var i = t.lanes
    ;(i &= e.pendingLanes), (n |= i), (t.lanes = n), rf(e, n)
  }
}
var ca = {
    readContext: St,
    useCallback: Ne,
    useContext: Ne,
    useEffect: Ne,
    useImperativeHandle: Ne,
    useInsertionEffect: Ne,
    useLayoutEffect: Ne,
    useMemo: Ne,
    useReducer: Ne,
    useRef: Ne,
    useState: Ne,
    useDebugValue: Ne,
    useDeferredValue: Ne,
    useTransition: Ne,
    useMutableSource: Ne,
    useSyncExternalStore: Ne,
    useId: Ne,
    unstable_isNewReconciler: !1,
  },
  vx = {
    readContext: St,
    useCallback: function (e, t) {
      return ($t().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: St,
    useEffect: lh,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        As(4194308, 4, n0.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return As(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return As(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = $t()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var i = $t()
      return (
        (t = n !== void 0 ? n(t) : t),
        (i.memoizedState = i.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (i.queue = e),
        (e = e.dispatch = mx.bind(null, fe, e)),
        [i.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = $t()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: ah,
    useDebugValue: Pf,
    useDeferredValue: function (e) {
      return ($t().memoizedState = e)
    },
    useTransition: function () {
      var e = ah(!1),
        t = e[0]
      return (e = gx.bind(null, e[1])), ($t().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var i = fe,
        r = $t()
      if (le) {
        if (n === void 0) throw Error(C(407))
        n = n()
      } else {
        if (((n = t()), Te === null)) throw Error(C(349))
        ci & 30 || Xm(i, t, n)
      }
      r.memoizedState = n
      var o = { value: n, getSnapshot: t }
      return (
        (r.queue = o),
        lh(Gm.bind(null, i, o, e), [e]),
        (i.flags |= 2048),
        So(9, Qm.bind(null, i, o, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = $t(),
        t = Te.identifierPrefix
      if (le) {
        var n = tn,
          i = en
        ;(n = (i & ~(1 << (32 - Rt(i) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = _o++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":")
      } else (n = px++), (t = ":" + t + "r" + n.toString(32) + ":")
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  xx = {
    readContext: St,
    useCallback: r0,
    useContext: St,
    useEffect: Ef,
    useImperativeHandle: i0,
    useInsertionEffect: e0,
    useLayoutEffect: t0,
    useMemo: o0,
    useReducer: tu,
    useRef: Jm,
    useState: function () {
      return tu(wo)
    },
    useDebugValue: Pf,
    useDeferredValue: function (e) {
      var t = bt()
      return s0(t, ke.memoizedState, e)
    },
    useTransition: function () {
      var e = tu(wo)[0],
        t = bt().memoizedState
      return [e, t]
    },
    useMutableSource: Ym,
    useSyncExternalStore: Km,
    useId: a0,
    unstable_isNewReconciler: !1,
  },
  _x = {
    readContext: St,
    useCallback: r0,
    useContext: St,
    useEffect: Ef,
    useImperativeHandle: i0,
    useInsertionEffect: e0,
    useLayoutEffect: t0,
    useMemo: o0,
    useReducer: nu,
    useRef: Jm,
    useState: function () {
      return nu(wo)
    },
    useDebugValue: Pf,
    useDeferredValue: function (e) {
      var t = bt()
      return ke === null ? (t.memoizedState = e) : s0(t, ke.memoizedState, e)
    },
    useTransition: function () {
      var e = nu(wo)[0],
        t = bt().memoizedState
      return [e, t]
    },
    useMutableSource: Ym,
    useSyncExternalStore: Km,
    useId: a0,
    unstable_isNewReconciler: !1,
  }
function Ji(e, t) {
  try {
    var n = "",
      i = t
    do (n += Xv(i)), (i = i.return)
    while (i)
    var r = n
  } catch (o) {
    r =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack
  }
  return { value: e, source: t, stack: r, digest: null }
}
function iu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function cc(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var wx = typeof WeakMap == "function" ? WeakMap : Map
function f0(e, t, n) {
  ;(n = nn(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var i = t.value
  return (
    (n.callback = function () {
      da || ((da = !0), (_c = i)), cc(e, t)
    }),
    n
  )
}
function d0(e, t, n) {
  ;(n = nn(-1, n)), (n.tag = 3)
  var i = e.type.getDerivedStateFromError
  if (typeof i == "function") {
    var r = t.value
    ;(n.payload = function () {
      return i(r)
    }),
      (n.callback = function () {
        cc(e, t)
      })
  }
  var o = e.stateNode
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        cc(e, t),
          typeof i != "function" &&
            (On === null ? (On = new Set([this])) : On.add(this))
        var s = t.stack
        this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" })
      }),
    n
  )
}
function uh(e, t, n) {
  var i = e.pingCache
  if (i === null) {
    i = e.pingCache = new wx()
    var r = new Set()
    i.set(t, r)
  } else (r = i.get(t)), r === void 0 && ((r = new Set()), i.set(t, r))
  r.has(n) || (r.add(n), (e = Ix.bind(null, e, t, n)), t.then(e, e))
}
function ch(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function fh(e, t, n, i, r) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = r), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = nn(-1, 1)), (t.tag = 2), Tn(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var Sx = un.ReactCurrentOwner,
  Ze = !1
function He(e, t, n, i) {
  t.child = e === null ? Vm(t, null, n, i) : qi(t, e.child, n, i)
}
function dh(e, t, n, i, r) {
  n = n.render
  var o = t.ref
  return (
    Wi(t, r),
    (i = kf(e, t, n, i, o, r)),
    (n = Cf()),
    e !== null && !Ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~r),
        an(e, t, r))
      : (le && n && df(t), (t.flags |= 1), He(e, t, i, r), t.child)
  )
}
function hh(e, t, n, i, r) {
  if (e === null) {
    var o = n.type
    return typeof o == "function" &&
      !If(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), h0(e, t, o, i, r))
      : ((e = Is(n.type, null, i, t, t.mode, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((o = e.child), !(e.lanes & r))) {
    var s = o.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : po), n(s, i) && e.ref === t.ref)
    )
      return an(e, t, r)
  }
  return (
    (t.flags |= 1),
    (e = Rn(o, i)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function h0(e, t, n, i, r) {
  if (e !== null) {
    var o = e.memoizedProps
    if (po(o, i) && e.ref === t.ref)
      if (((Ze = !1), (t.pendingProps = i = o), (e.lanes & r) !== 0))
        e.flags & 131072 && (Ze = !0)
      else return (t.lanes = e.lanes), an(e, t, r)
  }
  return fc(e, t, n, i, r)
}
function p0(e, t, n) {
  var i = t.pendingProps,
    r = i.children,
    o = e !== null ? e.memoizedState : null
  if (i.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ne(Ii, st),
        (st |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ne(Ii, st),
          (st |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (i = o !== null ? o.baseLanes : n),
        ne(Ii, st),
        (st |= i)
    }
  else
    o !== null ? ((i = o.baseLanes | n), (t.memoizedState = null)) : (i = n),
      ne(Ii, st),
      (st |= i)
  return He(e, t, r, n), t.child
}
function g0(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function fc(e, t, n, i, r) {
  var o = nt(n) ? li : Be.current
  return (
    (o = Qi(t, o)),
    Wi(t, r),
    (n = kf(e, t, n, i, o, r)),
    (i = Cf()),
    e !== null && !Ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~r),
        an(e, t, r))
      : (le && i && df(t), (t.flags |= 1), He(e, t, n, r), t.child)
  )
}
function ph(e, t, n, i, r) {
  if (nt(n)) {
    var o = !0
    na(t)
  } else o = !1
  if ((Wi(t, r), t.stateNode === null))
    Rs(e, t), Wm(t, n, i), uc(t, n, i, r), (i = !0)
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps
    s.props = a
    var l = s.context,
      u = n.contextType
    typeof u == "object" && u !== null
      ? (u = St(u))
      : ((u = nt(n) ? li : Be.current), (u = Qi(t, u)))
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function"
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== i || l !== u) && oh(t, s, i, u)),
      (gn = !1)
    var d = t.memoizedState
    ;(s.state = d),
      aa(t, i, s, r),
      (l = t.memoizedState),
      a !== i || d !== l || tt.current || gn
        ? (typeof c == "function" && (lc(t, n, c, i), (l = t.memoizedState)),
          (a = gn || rh(t, n, a, i, d, l, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = i),
              (t.memoizedState = l)),
          (s.props = i),
          (s.state = l),
          (s.context = u),
          (i = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (i = !1))
  } else {
    ;(s = t.stateNode),
      jm(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Mt(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = St(l))
        : ((l = nt(n) ? li : Be.current), (l = Qi(t, l)))
    var h = n.getDerivedStateFromProps
    ;(c =
      typeof h == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && oh(t, s, i, l)),
      (gn = !1),
      (d = t.memoizedState),
      (s.state = d),
      aa(t, i, s, r)
    var m = t.memoizedState
    a !== f || d !== m || tt.current || gn
      ? (typeof h == "function" && (lc(t, n, h, i), (m = t.memoizedState)),
        (u = gn || rh(t, n, u, i, d, m, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(i, m, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(i, m, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = i),
            (t.memoizedState = m)),
        (s.props = i),
        (s.state = m),
        (s.context = l),
        (i = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (i = !1))
  }
  return dc(e, t, n, i, o, r)
}
function dc(e, t, n, i, r, o) {
  g0(e, t)
  var s = (t.flags & 128) !== 0
  if (!i && !s) return r && Jd(t, n, !1), an(e, t, o)
  ;(i = t.stateNode), (Sx.current = t)
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : i.render()
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = qi(t, e.child, null, o)), (t.child = qi(t, null, a, o)))
      : He(e, t, a, o),
    (t.memoizedState = i.state),
    r && Jd(t, n, !0),
    t.child
  )
}
function m0(e) {
  var t = e.stateNode
  t.pendingContext
    ? Zd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Zd(e, t.context, !1),
    _f(e, t.containerInfo)
}
function gh(e, t, n, i, r) {
  return Gi(), pf(r), (t.flags |= 256), He(e, t, n, i), t.child
}
var hc = { dehydrated: null, treeContext: null, retryLane: 0 }
function pc(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function y0(e, t, n) {
  var i = t.pendingProps,
    r = ue.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (r & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (r |= 1),
    ne(ue, r & 1),
    e === null)
  )
    return (
      sc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = i.children),
          (e = i.fallback),
          o
            ? ((i = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(i & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = Ga(s, i, 0, null)),
              (e = ri(e, i, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = pc(n)),
              (t.memoizedState = hc),
              e)
            : Mf(t, s))
    )
  if (((r = e.memoizedState), r !== null && ((a = r.dehydrated), a !== null)))
    return bx(e, t, s, i, a, r, n)
  if (o) {
    ;(o = i.fallback), (s = t.mode), (r = e.child), (a = r.sibling)
    var l = { mode: "hidden", children: i.children }
    return (
      !(s & 1) && t.child !== r
        ? ((i = t.child),
          (i.childLanes = 0),
          (i.pendingProps = l),
          (t.deletions = null))
        : ((i = Rn(r, l)), (i.subtreeFlags = r.subtreeFlags & 14680064)),
      a !== null ? (o = Rn(a, o)) : ((o = ri(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (i.return = t),
      (i.sibling = o),
      (t.child = i),
      (i = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? pc(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = hc),
      i
    )
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (i = Rn(o, { mode: "visible", children: i.children })),
    !(t.mode & 1) && (i.lanes = n),
    (i.return = t),
    (i.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = i),
    (t.memoizedState = null),
    i
  )
}
function Mf(e, t) {
  return (
    (t = Ga({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function ns(e, t, n, i) {
  return (
    i !== null && pf(i),
    qi(t, e.child, null, n),
    (e = Mf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function bx(e, t, n, i, r, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (i = iu(Error(C(422)))), ns(e, t, s, i))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = i.fallback),
        (r = t.mode),
        (i = Ga({ mode: "visible", children: i.children }, r, 0, null)),
        (o = ri(o, r, s, null)),
        (o.flags |= 2),
        (i.return = t),
        (o.return = t),
        (i.sibling = o),
        (t.child = i),
        t.mode & 1 && qi(t, e.child, null, s),
        (t.child.memoizedState = pc(s)),
        (t.memoizedState = hc),
        o)
  if (!(t.mode & 1)) return ns(e, t, s, null)
  if (r.data === "$!") {
    if (((i = r.nextSibling && r.nextSibling.dataset), i)) var a = i.dgst
    return (i = a), (o = Error(C(419))), (i = iu(o, i, void 0)), ns(e, t, s, i)
  }
  if (((a = (s & e.childLanes) !== 0), Ze || a)) {
    if (((i = Te), i !== null)) {
      switch (s & -s) {
        case 4:
          r = 2
          break
        case 16:
          r = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          r = 32
          break
        case 536870912:
          r = 268435456
          break
        default:
          r = 0
      }
      ;(r = r & (i.suspendedLanes | s) ? 0 : r),
        r !== 0 &&
          r !== o.retryLane &&
          ((o.retryLane = r), sn(e, r), Lt(i, e, r, -1))
    }
    return Df(), (i = iu(Error(C(421)))), ns(e, t, s, i)
  }
  return r.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = zx.bind(null, e)),
      (r._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (at = Mn(r.nextSibling)),
      (lt = t),
      (le = !0),
      (Ot = null),
      e !== null &&
        ((yt[vt++] = en),
        (yt[vt++] = tn),
        (yt[vt++] = ui),
        (en = e.id),
        (tn = e.overflow),
        (ui = t)),
      (t = Mf(t, i.children)),
      (t.flags |= 4096),
      t)
}
function mh(e, t, n) {
  e.lanes |= t
  var i = e.alternate
  i !== null && (i.lanes |= t), ac(e.return, t, n)
}
function ru(e, t, n, i, r) {
  var o = e.memoizedState
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: r,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = i),
      (o.tail = n),
      (o.tailMode = r))
}
function v0(e, t, n) {
  var i = t.pendingProps,
    r = i.revealOrder,
    o = i.tail
  if ((He(e, t, i.children, n), (i = ue.current), i & 2))
    (i = (i & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && mh(e, n, t)
        else if (e.tag === 19) mh(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    i &= 1
  }
  if ((ne(ue, i), !(t.mode & 1))) t.memoizedState = null
  else
    switch (r) {
      case "forwards":
        for (n = t.child, r = null; n !== null; )
          (e = n.alternate),
            e !== null && la(e) === null && (r = n),
            (n = n.sibling)
        ;(n = r),
          n === null
            ? ((r = t.child), (t.child = null))
            : ((r = n.sibling), (n.sibling = null)),
          ru(t, !1, r, n, o)
        break
      case "backwards":
        for (n = null, r = t.child, t.child = null; r !== null; ) {
          if (((e = r.alternate), e !== null && la(e) === null)) {
            t.child = r
            break
          }
          ;(e = r.sibling), (r.sibling = n), (n = r), (r = e)
        }
        ru(t, !0, n, null, o)
        break
      case "together":
        ru(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function Rs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function an(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (fi |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(C(153))
  if (t.child !== null) {
    for (
      e = t.child, n = Rn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Rn(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function kx(e, t, n) {
  switch (t.tag) {
    case 3:
      m0(t), Gi()
      break
    case 5:
      Um(t)
      break
    case 1:
      nt(t.type) && na(t)
      break
    case 4:
      _f(t, t.stateNode.containerInfo)
      break
    case 10:
      var i = t.type._context,
        r = t.memoizedProps.value
      ne(oa, i._currentValue), (i._currentValue = r)
      break
    case 13:
      if (((i = t.memoizedState), i !== null))
        return i.dehydrated !== null
          ? (ne(ue, ue.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? y0(e, t, n)
          : (ne(ue, ue.current & 1),
            (e = an(e, t, n)),
            e !== null ? e.sibling : null)
      ne(ue, ue.current & 1)
      break
    case 19:
      if (((i = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (i) return v0(e, t, n)
        t.flags |= 128
      }
      if (
        ((r = t.memoizedState),
        r !== null &&
          ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
        ne(ue, ue.current),
        i)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), p0(e, t, n)
  }
  return an(e, t, n)
}
var x0, gc, _0, w0
x0 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
gc = function () {}
_0 = function (e, t, n, i) {
  var r = e.memoizedProps
  if (r !== i) {
    ;(e = t.stateNode), ti(Ut.current)
    var o = null
    switch (n) {
      case "input":
        ;(r = Nu(e, r)), (i = Nu(e, i)), (o = [])
        break
      case "select":
        ;(r = de({}, r, { value: void 0 })),
          (i = de({}, i, { value: void 0 })),
          (o = [])
        break
      case "textarea":
        ;(r = ju(e, r)), (i = ju(e, i)), (o = [])
        break
      default:
        typeof r.onClick != "function" &&
          typeof i.onClick == "function" &&
          (e.onclick = ea)
    }
    Wu(n, i)
    var s
    n = null
    for (u in r)
      if (!i.hasOwnProperty(u) && r.hasOwnProperty(u) && r[u] != null)
        if (u === "style") {
          var a = r[u]
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""))
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (so.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null))
    for (u in i) {
      var l = i[u]
      if (
        ((a = r != null ? r[u] : void 0),
        i.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""))
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]))
          } else n || (o || (o = []), o.push(u, n)), (n = l)
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (so.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && ie("scroll", e),
                  o || a === l || (o = []))
                : (o = o || []).push(u, l))
    }
    n && (o = o || []).push("style", n)
    var u = o
    ;(t.updateQueue = u) && (t.flags |= 4)
  }
}
w0 = function (e, t, n, i) {
  n !== i && (t.flags |= 4)
}
function Sr(e, t) {
  if (!le)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case "collapsed":
        n = e.tail
        for (var i = null; n !== null; )
          n.alternate !== null && (i = n), (n = n.sibling)
        i === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (i.sibling = null)
    }
}
function $e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    i = 0
  if (t)
    for (var r = e.child; r !== null; )
      (n |= r.lanes | r.childLanes),
        (i |= r.subtreeFlags & 14680064),
        (i |= r.flags & 14680064),
        (r.return = e),
        (r = r.sibling)
  else
    for (r = e.child; r !== null; )
      (n |= r.lanes | r.childLanes),
        (i |= r.subtreeFlags),
        (i |= r.flags),
        (r.return = e),
        (r = r.sibling)
  return (e.subtreeFlags |= i), (e.childLanes = n), t
}
function Cx(e, t, n) {
  var i = t.pendingProps
  switch ((hf(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return $e(t), null
    case 1:
      return nt(t.type) && ta(), $e(t), null
    case 3:
      return (
        (i = t.stateNode),
        Zi(),
        oe(tt),
        oe(Be),
        Sf(),
        i.pendingContext &&
          ((i.context = i.pendingContext), (i.pendingContext = null)),
        (e === null || e.child === null) &&
          (es(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ot !== null && (bc(Ot), (Ot = null)))),
        gc(e, t),
        $e(t),
        null
      )
    case 5:
      wf(t)
      var r = ti(xo.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        _0(e, t, n, i, r),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!i) {
          if (t.stateNode === null) throw Error(C(166))
          return $e(t), null
        }
        if (((e = ti(Ut.current)), es(t))) {
          ;(i = t.stateNode), (n = t.type)
          var o = t.memoizedProps
          switch (((i[Wt] = t), (i[yo] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ie("cancel", i), ie("close", i)
              break
            case "iframe":
            case "object":
            case "embed":
              ie("load", i)
              break
            case "video":
            case "audio":
              for (r = 0; r < Dr.length; r++) ie(Dr[r], i)
              break
            case "source":
              ie("error", i)
              break
            case "img":
            case "image":
            case "link":
              ie("error", i), ie("load", i)
              break
            case "details":
              ie("toggle", i)
              break
            case "input":
              Cd(i, o), ie("invalid", i)
              break
            case "select":
              ;(i._wrapperState = { wasMultiple: !!o.multiple }),
                ie("invalid", i)
              break
            case "textarea":
              Pd(i, o), ie("invalid", i)
          }
          Wu(n, o), (r = null)
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s]
              s === "children"
                ? typeof a == "string"
                  ? i.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Jo(i.textContent, a, e),
                    (r = ["children", a]))
                  : typeof a == "number" &&
                    i.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Jo(i.textContent, a, e),
                    (r = ["children", "" + a]))
                : so.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  ie("scroll", i)
            }
          switch (n) {
            case "input":
              Uo(i), Ed(i, o, !0)
              break
            case "textarea":
              Uo(i), Md(i)
              break
            case "select":
            case "option":
              break
            default:
              typeof o.onClick == "function" && (i.onclick = ea)
          }
          ;(i = r), (t.updateQueue = i), i !== null && (t.flags |= 4)
        } else {
          ;(s = r.nodeType === 9 ? r : r.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Xg(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof i.is == "string"
                ? (e = s.createElement(n, { is: i.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    i.multiple
                      ? (s.multiple = !0)
                      : i.size && (s.size = i.size)))
              : (e = s.createElementNS(e, n)),
            (e[Wt] = t),
            (e[yo] = i),
            x0(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((s = Hu(n, i)), n)) {
              case "dialog":
                ie("cancel", e), ie("close", e), (r = i)
                break
              case "iframe":
              case "object":
              case "embed":
                ie("load", e), (r = i)
                break
              case "video":
              case "audio":
                for (r = 0; r < Dr.length; r++) ie(Dr[r], e)
                r = i
                break
              case "source":
                ie("error", e), (r = i)
                break
              case "img":
              case "image":
              case "link":
                ie("error", e), ie("load", e), (r = i)
                break
              case "details":
                ie("toggle", e), (r = i)
                break
              case "input":
                Cd(e, i), (r = Nu(e, i)), ie("invalid", e)
                break
              case "option":
                r = i
                break
              case "select":
                ;(e._wrapperState = { wasMultiple: !!i.multiple }),
                  (r = de({}, i, { value: void 0 })),
                  ie("invalid", e)
                break
              case "textarea":
                Pd(e, i), (r = ju(e, i)), ie("invalid", e)
                break
              default:
                r = i
            }
            Wu(n, r), (a = r)
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o]
                o === "style"
                  ? qg(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Qg(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && ao(e, l)
                    : typeof l == "number" && ao(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (so.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && ie("scroll", e)
                      : l != null && qc(e, o, l, s))
              }
            switch (n) {
              case "input":
                Uo(e), Ed(e, i, !1)
                break
              case "textarea":
                Uo(e), Md(e)
                break
              case "option":
                i.value != null && e.setAttribute("value", "" + zn(i.value))
                break
              case "select":
                ;(e.multiple = !!i.multiple),
                  (o = i.value),
                  o != null
                    ? $i(e, !!i.multiple, o, !1)
                    : i.defaultValue != null &&
                      $i(e, !!i.multiple, i.defaultValue, !0)
                break
              default:
                typeof r.onClick == "function" && (e.onclick = ea)
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus
                break e
              case "img":
                i = !0
                break e
              default:
                i = !1
            }
          }
          i && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return $e(t), null
    case 6:
      if (e && t.stateNode != null) w0(e, t, e.memoizedProps, i)
      else {
        if (typeof i != "string" && t.stateNode === null) throw Error(C(166))
        if (((n = ti(xo.current)), ti(Ut.current), es(t))) {
          if (
            ((i = t.stateNode),
            (n = t.memoizedProps),
            (i[Wt] = t),
            (o = i.nodeValue !== n) && ((e = lt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Jo(i.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Jo(i.nodeValue, n, (e.mode & 1) !== 0)
            }
          o && (t.flags |= 4)
        } else
          (i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
            (i[Wt] = t),
            (t.stateNode = i)
      }
      return $e(t), null
    case 13:
      if (
        (oe(ue),
        (i = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (le && at !== null && t.mode & 1 && !(t.flags & 128))
          $m(), Gi(), (t.flags |= 98560), (o = !1)
        else if (((o = es(t)), i !== null && i.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(C(318))
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(C(317))
            o[Wt] = t
          } else
            Gi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          $e(t), (o = !1)
        } else Ot !== null && (bc(Ot), (Ot = null)), (o = !0)
        if (!o) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((i = i !== null),
          i !== (e !== null && e.memoizedState !== null) &&
            i &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ue.current & 1 ? Ce === 0 && (Ce = 3) : Df())),
          t.updateQueue !== null && (t.flags |= 4),
          $e(t),
          null)
    case 4:
      return (
        Zi(), gc(e, t), e === null && go(t.stateNode.containerInfo), $e(t), null
      )
    case 10:
      return yf(t.type._context), $e(t), null
    case 17:
      return nt(t.type) && ta(), $e(t), null
    case 19:
      if ((oe(ue), (o = t.memoizedState), o === null)) return $e(t), null
      if (((i = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (i) Sr(o, !1)
        else {
          if (Ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = la(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Sr(o, !1),
                    i = s.updateQueue,
                    i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    i = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = i),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling)
                return ne(ue, (ue.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          o.tail !== null &&
            ye() > er &&
            ((t.flags |= 128), (i = !0), Sr(o, !1), (t.lanes = 4194304))
        }
      else {
        if (!i)
          if (((e = la(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (i = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Sr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !le)
            )
              return $e(t), null
          } else
            2 * ye() - o.renderingStartTime > er &&
              n !== 1073741824 &&
              ((t.flags |= 128), (i = !0), Sr(o, !1), (t.lanes = 4194304))
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s))
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ye()),
          (t.sibling = null),
          (n = ue.current),
          ne(ue, i ? (n & 1) | 2 : n & 1),
          t)
        : ($e(t), null)
    case 22:
    case 23:
      return (
        Lf(),
        (i = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== i && (t.flags |= 8192),
        i && t.mode & 1
          ? st & 1073741824 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : $e(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(C(156, t.tag))
}
function Ex(e, t) {
  switch ((hf(t), t.tag)) {
    case 1:
      return (
        nt(t.type) && ta(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        Zi(),
        oe(tt),
        oe(Be),
        Sf(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return wf(t), null
    case 13:
      if (
        (oe(ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(C(340))
        Gi()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return oe(ue), null
    case 4:
      return Zi(), null
    case 10:
      return yf(t.type._context), null
    case 22:
    case 23:
      return Lf(), null
    case 24:
      return null
    default:
      return null
  }
}
var is = !1,
  je = !1,
  Px = typeof WeakSet == "function" ? WeakSet : Set,
  O = null
function Di(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null)
      } catch (i) {
        he(e, t, i)
      }
    else n.current = null
}
function mc(e, t, n) {
  try {
    n()
  } catch (i) {
    he(e, t, i)
  }
}
var yh = !1
function Mx(e, t) {
  if (((Ju = qs), (e = Cm()), ff(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var i = n.getSelection && n.getSelection()
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode
          var r = i.anchorOffset,
            o = i.focusNode
          i = i.focusOffset
          try {
            n.nodeType, o.nodeType
          } catch {
            n = null
            break e
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null
          t: for (;;) {
            for (
              var h;
              f !== n || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f !== o || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (h = f.firstChild) !== null;

            )
              (d = f), (f = h)
            for (;;) {
              if (f === e) break t
              if (
                (d === n && ++u === r && (a = s),
                d === o && ++c === i && (l = s),
                (h = f.nextSibling) !== null)
              )
                break
              ;(f = d), (d = f.parentNode)
            }
            f = h
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (ec = { focusedElem: e, selectionRange: n }, qs = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (O = e)
    else
      for (; O !== null; ) {
        t = O
        try {
          var m = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (m !== null) {
                  var y = m.memoizedProps,
                    x = m.memoizedState,
                    p = t.stateNode,
                    g = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Mt(t.type, y),
                      x,
                    )
                  p.__reactInternalSnapshotBeforeUpdate = g
                }
                break
              case 3:
                var v = t.stateNode.containerInfo
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(C(163))
            }
        } catch (_) {
          he(t, t.return, _)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (O = e)
          break
        }
        O = t.return
      }
  return (m = yh), (yh = !1), m
}
function Gr(e, t, n) {
  var i = t.updateQueue
  if (((i = i !== null ? i.lastEffect : null), i !== null)) {
    var r = (i = i.next)
    do {
      if ((r.tag & e) === e) {
        var o = r.destroy
        ;(r.destroy = void 0), o !== void 0 && mc(t, n, o)
      }
      r = r.next
    } while (r !== i)
  }
}
function Xa(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var i = n.create
        n.destroy = i()
      }
      n = n.next
    } while (n !== t)
  }
}
function yc(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == "function" ? t(e) : (t.current = e)
  }
}
function S0(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), S0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Wt], delete t[yo], delete t[ic], delete t[cx], delete t[fx])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function b0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function vh(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || b0(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function vc(e, t, n) {
  var i = e.tag
  if (i === 5 || i === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ea))
  else if (i !== 4 && ((e = e.child), e !== null))
    for (vc(e, t, n), e = e.sibling; e !== null; ) vc(e, t, n), (e = e.sibling)
}
function xc(e, t, n) {
  var i = e.tag
  if (i === 5 || i === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (i !== 4 && ((e = e.child), e !== null))
    for (xc(e, t, n), e = e.sibling; e !== null; ) xc(e, t, n), (e = e.sibling)
}
var Le = null,
  Tt = !1
function fn(e, t, n) {
  for (n = n.child; n !== null; ) k0(e, t, n), (n = n.sibling)
}
function k0(e, t, n) {
  if (Vt && typeof Vt.onCommitFiberUnmount == "function")
    try {
      Vt.onCommitFiberUnmount(ja, n)
    } catch {}
  switch (n.tag) {
    case 5:
      je || Di(n, t)
    case 6:
      var i = Le,
        r = Tt
      ;(Le = null),
        fn(e, t, n),
        (Le = i),
        (Tt = r),
        Le !== null &&
          (Tt
            ? ((e = Le),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Le.removeChild(n.stateNode))
      break
    case 18:
      Le !== null &&
        (Tt
          ? ((e = Le),
            (n = n.stateNode),
            e.nodeType === 8
              ? ql(e.parentNode, n)
              : e.nodeType === 1 && ql(e, n),
            fo(e))
          : ql(Le, n.stateNode))
      break
    case 4:
      ;(i = Le),
        (r = Tt),
        (Le = n.stateNode.containerInfo),
        (Tt = !0),
        fn(e, t, n),
        (Le = i),
        (Tt = r)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !je &&
        ((i = n.updateQueue), i !== null && ((i = i.lastEffect), i !== null))
      ) {
        r = i = i.next
        do {
          var o = r,
            s = o.destroy
          ;(o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && mc(n, t, s),
            (r = r.next)
        } while (r !== i)
      }
      fn(e, t, n)
      break
    case 1:
      if (
        !je &&
        (Di(n, t),
        (i = n.stateNode),
        typeof i.componentWillUnmount == "function")
      )
        try {
          ;(i.props = n.memoizedProps),
            (i.state = n.memoizedState),
            i.componentWillUnmount()
        } catch (a) {
          he(n, t, a)
        }
      fn(e, t, n)
      break
    case 21:
      fn(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((je = (i = je) || n.memoizedState !== null), fn(e, t, n), (je = i))
        : fn(e, t, n)
      break
    default:
      fn(e, t, n)
  }
}
function xh(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new Px()),
      t.forEach(function (i) {
        var r = Nx.bind(null, e, i)
        n.has(i) || (n.add(i), i.then(r, r))
      })
  }
}
function Et(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var i = 0; i < n.length; i++) {
      var r = n[i]
      try {
        var o = e,
          s = t,
          a = s
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ;(Le = a.stateNode), (Tt = !1)
              break e
            case 3:
              ;(Le = a.stateNode.containerInfo), (Tt = !0)
              break e
            case 4:
              ;(Le = a.stateNode.containerInfo), (Tt = !0)
              break e
          }
          a = a.return
        }
        if (Le === null) throw Error(C(160))
        k0(o, s, r), (Le = null), (Tt = !1)
        var l = r.alternate
        l !== null && (l.return = null), (r.return = null)
      } catch (u) {
        he(r, t, u)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) C0(t, e), (t = t.sibling)
}
function C0(e, t) {
  var n = e.alternate,
    i = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Et(t, e), zt(e), i & 4)) {
        try {
          Gr(3, e, e.return), Xa(3, e)
        } catch (y) {
          he(e, e.return, y)
        }
        try {
          Gr(5, e, e.return)
        } catch (y) {
          he(e, e.return, y)
        }
      }
      break
    case 1:
      Et(t, e), zt(e), i & 512 && n !== null && Di(n, n.return)
      break
    case 5:
      if (
        (Et(t, e),
        zt(e),
        i & 512 && n !== null && Di(n, n.return),
        e.flags & 32)
      ) {
        var r = e.stateNode
        try {
          ao(r, "")
        } catch (y) {
          he(e, e.return, y)
        }
      }
      if (i & 4 && ((r = e.stateNode), r != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && Yg(r, o),
              Hu(a, s)
            var u = Hu(a, o)
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                f = l[s + 1]
              c === "style"
                ? qg(r, f)
                : c === "dangerouslySetInnerHTML"
                ? Qg(r, f)
                : c === "children"
                ? ao(r, f)
                : qc(r, c, f, u)
            }
            switch (a) {
              case "input":
                $u(r, o)
                break
              case "textarea":
                Kg(r, o)
                break
              case "select":
                var d = r._wrapperState.wasMultiple
                r._wrapperState.wasMultiple = !!o.multiple
                var h = o.value
                h != null
                  ? $i(r, !!o.multiple, h, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? $i(r, !!o.multiple, o.defaultValue, !0)
                      : $i(r, !!o.multiple, o.multiple ? [] : "", !1))
            }
            r[yo] = o
          } catch (y) {
            he(e, e.return, y)
          }
      }
      break
    case 6:
      if ((Et(t, e), zt(e), i & 4)) {
        if (e.stateNode === null) throw Error(C(162))
        ;(r = e.stateNode), (o = e.memoizedProps)
        try {
          r.nodeValue = o
        } catch (y) {
          he(e, e.return, y)
        }
      }
      break
    case 3:
      if (
        (Et(t, e), zt(e), i & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          fo(t.containerInfo)
        } catch (y) {
          he(e, e.return, y)
        }
      break
    case 4:
      Et(t, e), zt(e)
      break
    case 13:
      Et(t, e),
        zt(e),
        (r = e.child),
        r.flags & 8192 &&
          ((o = r.memoizedState !== null),
          (r.stateNode.isHidden = o),
          !o ||
            (r.alternate !== null && r.alternate.memoizedState !== null) ||
            (Af = ye())),
        i & 4 && xh(e)
      break
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((je = (u = je) || c), Et(t, e), (je = u)) : Et(t, e),
        zt(e),
        i & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (O = e, c = e.child; c !== null; ) {
            for (f = O = c; O !== null; ) {
              switch (((d = O), (h = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Gr(4, d, d.return)
                  break
                case 1:
                  Di(d, d.return)
                  var m = d.stateNode
                  if (typeof m.componentWillUnmount == "function") {
                    ;(i = d), (n = d.return)
                    try {
                      ;(t = i),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount()
                    } catch (y) {
                      he(i, n, y)
                    }
                  }
                  break
                case 5:
                  Di(d, d.return)
                  break
                case 22:
                  if (d.memoizedState !== null) {
                    wh(f)
                    continue
                  }
              }
              h !== null ? ((h.return = d), (O = h)) : wh(f)
            }
            c = c.sibling
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f
              try {
                ;(r = f.stateNode),
                  u
                    ? ((o = r.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Gg("display", s)))
              } catch (y) {
                he(e, e.return, y)
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps
              } catch (y) {
                he(e, e.return, y)
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ;(f.child.return = f), (f = f.child)
            continue
          }
          if (f === e) break e
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e
            c === f && (c = null), (f = f.return)
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling)
        }
      }
      break
    case 19:
      Et(t, e), zt(e), i & 4 && xh(e)
      break
    case 21:
      break
    default:
      Et(t, e), zt(e)
  }
}
function zt(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (b0(n)) {
            var i = n
            break e
          }
          n = n.return
        }
        throw Error(C(160))
      }
      switch (i.tag) {
        case 5:
          var r = i.stateNode
          i.flags & 32 && (ao(r, ""), (i.flags &= -33))
          var o = vh(e)
          xc(e, o, r)
          break
        case 3:
        case 4:
          var s = i.stateNode.containerInfo,
            a = vh(e)
          vc(e, a, s)
          break
        default:
          throw Error(C(161))
      }
    } catch (l) {
      he(e, e.return, l)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function Tx(e, t, n) {
  ;(O = e), E0(e)
}
function E0(e, t, n) {
  for (var i = (e.mode & 1) !== 0; O !== null; ) {
    var r = O,
      o = r.child
    if (r.tag === 22 && i) {
      var s = r.memoizedState !== null || is
      if (!s) {
        var a = r.alternate,
          l = (a !== null && a.memoizedState !== null) || je
        a = is
        var u = je
        if (((is = s), (je = l) && !u))
          for (O = r; O !== null; )
            (s = O),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Sh(r)
                : l !== null
                ? ((l.return = s), (O = l))
                : Sh(r)
        for (; o !== null; ) (O = o), E0(o), (o = o.sibling)
        ;(O = r), (is = a), (je = u)
      }
      _h(e)
    } else
      r.subtreeFlags & 8772 && o !== null ? ((o.return = r), (O = o)) : _h(e)
  }
}
function _h(e) {
  for (; O !== null; ) {
    var t = O
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              je || Xa(5, t)
              break
            case 1:
              var i = t.stateNode
              if (t.flags & 4 && !je)
                if (n === null) i.componentDidMount()
                else {
                  var r =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Mt(t.type, n.memoizedProps)
                  i.componentDidUpdate(
                    r,
                    n.memoizedState,
                    i.__reactInternalSnapshotBeforeUpdate,
                  )
                }
              var o = t.updateQueue
              o !== null && ih(t, o, i)
              break
            case 3:
              var s = t.updateQueue
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                ih(t, s, n)
              }
              break
            case 5:
              var a = t.stateNode
              if (n === null && t.flags & 4) {
                n = a
                var l = t.memoizedProps
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus()
                    break
                  case "img":
                    l.src && (n.src = l.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate
                if (u !== null) {
                  var c = u.memoizedState
                  if (c !== null) {
                    var f = c.dehydrated
                    f !== null && fo(f)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(C(163))
          }
        je || (t.flags & 512 && yc(t))
      } catch (d) {
        he(t, t.return, d)
      }
    }
    if (t === e) {
      O = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (O = n)
      break
    }
    O = t.return
  }
}
function wh(e) {
  for (; O !== null; ) {
    var t = O
    if (t === e) {
      O = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (O = n)
      break
    }
    O = t.return
  }
}
function Sh(e) {
  for (; O !== null; ) {
    var t = O
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            Xa(4, t)
          } catch (l) {
            he(t, n, l)
          }
          break
        case 1:
          var i = t.stateNode
          if (typeof i.componentDidMount == "function") {
            var r = t.return
            try {
              i.componentDidMount()
            } catch (l) {
              he(t, r, l)
            }
          }
          var o = t.return
          try {
            yc(t)
          } catch (l) {
            he(t, o, l)
          }
          break
        case 5:
          var s = t.return
          try {
            yc(t)
          } catch (l) {
            he(t, s, l)
          }
      }
    } catch (l) {
      he(t, t.return, l)
    }
    if (t === e) {
      O = null
      break
    }
    var a = t.sibling
    if (a !== null) {
      ;(a.return = t.return), (O = a)
      break
    }
    O = t.return
  }
}
var Ox = Math.ceil,
  fa = un.ReactCurrentDispatcher,
  Tf = un.ReactCurrentOwner,
  wt = un.ReactCurrentBatchConfig,
  V = 0,
  Te = null,
  _e = null,
  Ie = 0,
  st = 0,
  Ii = Wn(0),
  Ce = 0,
  bo = null,
  fi = 0,
  Qa = 0,
  Of = 0,
  qr = null,
  Ge = null,
  Af = 0,
  er = 1 / 0,
  Gt = null,
  da = !1,
  _c = null,
  On = null,
  rs = !1,
  _n = null,
  ha = 0,
  Zr = 0,
  wc = null,
  Ls = -1,
  Ds = 0
function Ve() {
  return V & 6 ? ye() : Ls !== -1 ? Ls : (Ls = ye())
}
function An(e) {
  return e.mode & 1
    ? V & 2 && Ie !== 0
      ? Ie & -Ie
      : hx.transition !== null
      ? (Ds === 0 && (Ds = um()), Ds)
      : ((e = Z),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : mm(e.type))),
        e)
    : 1
}
function Lt(e, t, n, i) {
  if (50 < Zr) throw ((Zr = 0), (wc = null), Error(C(185)))
  Do(e, n, i),
    (!(V & 2) || e !== Te) &&
      (e === Te && (!(V & 2) && (Qa |= n), Ce === 4 && yn(e, Ie)),
      it(e, i),
      n === 1 && V === 0 && !(t.mode & 1) && ((er = ye() + 500), Ua && Hn()))
}
function it(e, t) {
  var n = e.callbackNode
  h1(e, t)
  var i = Gs(e, e === Te ? Ie : 0)
  if (i === 0)
    n !== null && Ad(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = i & -i), e.callbackPriority !== t)) {
    if ((n != null && Ad(n), t === 1))
      e.tag === 0 ? dx(bh.bind(null, e)) : Im(bh.bind(null, e)),
        lx(function () {
          !(V & 6) && Hn()
        }),
        (n = null)
    else {
      switch (cm(i)) {
        case 1:
          n = nf
          break
        case 4:
          n = am
          break
        case 16:
          n = Qs
          break
        case 536870912:
          n = lm
          break
        default:
          n = Qs
      }
      n = D0(n, P0.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function P0(e, t) {
  if (((Ls = -1), (Ds = 0), V & 6)) throw Error(C(327))
  var n = e.callbackNode
  if (Hi() && e.callbackNode !== n) return null
  var i = Gs(e, e === Te ? Ie : 0)
  if (i === 0) return null
  if (i & 30 || i & e.expiredLanes || t) t = pa(e, i)
  else {
    t = i
    var r = V
    V |= 2
    var o = T0()
    ;(Te !== e || Ie !== t) && ((Gt = null), (er = ye() + 500), ii(e, t))
    do
      try {
        Lx()
        break
      } catch (a) {
        M0(e, a)
      }
    while (1)
    mf(),
      (fa.current = o),
      (V = r),
      _e !== null ? (t = 0) : ((Te = null), (Ie = 0), (t = Ce))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((r = Xu(e)), r !== 0 && ((i = r), (t = Sc(e, r)))), t === 1)
    )
      throw ((n = bo), ii(e, 0), yn(e, i), it(e, ye()), n)
    if (t === 6) yn(e, i)
    else {
      if (
        ((r = e.current.alternate),
        !(i & 30) &&
          !Ax(r) &&
          ((t = pa(e, i)),
          t === 2 && ((o = Xu(e)), o !== 0 && ((i = o), (t = Sc(e, o)))),
          t === 1))
      )
        throw ((n = bo), ii(e, 0), yn(e, i), it(e, ye()), n)
      switch (((e.finishedWork = r), (e.finishedLanes = i), t)) {
        case 0:
        case 1:
          throw Error(C(345))
        case 2:
          Qn(e, Ge, Gt)
          break
        case 3:
          if (
            (yn(e, i), (i & 130023424) === i && ((t = Af + 500 - ye()), 10 < t))
          ) {
            if (Gs(e, 0) !== 0) break
            if (((r = e.suspendedLanes), (r & i) !== i)) {
              Ve(), (e.pingedLanes |= e.suspendedLanes & r)
              break
            }
            e.timeoutHandle = nc(Qn.bind(null, e, Ge, Gt), t)
            break
          }
          Qn(e, Ge, Gt)
          break
        case 4:
          if ((yn(e, i), (i & 4194240) === i)) break
          for (t = e.eventTimes, r = -1; 0 < i; ) {
            var s = 31 - Rt(i)
            ;(o = 1 << s), (s = t[s]), s > r && (r = s), (i &= ~o)
          }
          if (
            ((i = r),
            (i = ye() - i),
            (i =
              (120 > i
                ? 120
                : 480 > i
                ? 480
                : 1080 > i
                ? 1080
                : 1920 > i
                ? 1920
                : 3e3 > i
                ? 3e3
                : 4320 > i
                ? 4320
                : 1960 * Ox(i / 1960)) - i),
            10 < i)
          ) {
            e.timeoutHandle = nc(Qn.bind(null, e, Ge, Gt), i)
            break
          }
          Qn(e, Ge, Gt)
          break
        case 5:
          Qn(e, Ge, Gt)
          break
        default:
          throw Error(C(329))
      }
    }
  }
  return it(e, ye()), e.callbackNode === n ? P0.bind(null, e) : null
}
function Sc(e, t) {
  var n = qr
  return (
    e.current.memoizedState.isDehydrated && (ii(e, t).flags |= 256),
    (e = pa(e, t)),
    e !== 2 && ((t = Ge), (Ge = n), t !== null && bc(t)),
    e
  )
}
function bc(e) {
  Ge === null ? (Ge = e) : Ge.push.apply(Ge, e)
}
function Ax(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var i = 0; i < n.length; i++) {
          var r = n[i],
            o = r.getSnapshot
          r = r.value
          try {
            if (!It(o(), r)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function yn(e, t) {
  for (
    t &= ~Of,
      t &= ~Qa,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Rt(t),
      i = 1 << n
    ;(e[n] = -1), (t &= ~i)
  }
}
function bh(e) {
  if (V & 6) throw Error(C(327))
  Hi()
  var t = Gs(e, 0)
  if (!(t & 1)) return it(e, ye()), null
  var n = pa(e, t)
  if (e.tag !== 0 && n === 2) {
    var i = Xu(e)
    i !== 0 && ((t = i), (n = Sc(e, i)))
  }
  if (n === 1) throw ((n = bo), ii(e, 0), yn(e, t), it(e, ye()), n)
  if (n === 6) throw Error(C(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Qn(e, Ge, Gt),
    it(e, ye()),
    null
  )
}
function Rf(e, t) {
  var n = V
  V |= 1
  try {
    return e(t)
  } finally {
    ;(V = n), V === 0 && ((er = ye() + 500), Ua && Hn())
  }
}
function di(e) {
  _n !== null && _n.tag === 0 && !(V & 6) && Hi()
  var t = V
  V |= 1
  var n = wt.transition,
    i = Z
  try {
    if (((wt.transition = null), (Z = 1), e)) return e()
  } finally {
    ;(Z = i), (wt.transition = n), (V = t), !(V & 6) && Hn()
  }
}
function Lf() {
  ;(st = Ii.current), oe(Ii)
}
function ii(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), ax(n)), _e !== null))
    for (n = _e.return; n !== null; ) {
      var i = n
      switch ((hf(i), i.tag)) {
        case 1:
          ;(i = i.type.childContextTypes), i != null && ta()
          break
        case 3:
          Zi(), oe(tt), oe(Be), Sf()
          break
        case 5:
          wf(i)
          break
        case 4:
          Zi()
          break
        case 13:
          oe(ue)
          break
        case 19:
          oe(ue)
          break
        case 10:
          yf(i.type._context)
          break
        case 22:
        case 23:
          Lf()
      }
      n = n.return
    }
  if (
    ((Te = e),
    (_e = e = Rn(e.current, null)),
    (Ie = st = t),
    (Ce = 0),
    (bo = null),
    (Of = Qa = fi = 0),
    (Ge = qr = null),
    ei !== null)
  ) {
    for (t = 0; t < ei.length; t++)
      if (((n = ei[t]), (i = n.interleaved), i !== null)) {
        n.interleaved = null
        var r = i.next,
          o = n.pending
        if (o !== null) {
          var s = o.next
          ;(o.next = r), (i.next = s)
        }
        n.pending = i
      }
    ei = null
  }
  return e
}
function M0(e, t) {
  do {
    var n = _e
    try {
      if ((mf(), (Os.current = ca), ua)) {
        for (var i = fe.memoizedState; i !== null; ) {
          var r = i.queue
          r !== null && (r.pending = null), (i = i.next)
        }
        ua = !1
      }
      if (
        ((ci = 0),
        (Ee = ke = fe = null),
        (Qr = !1),
        (_o = 0),
        (Tf.current = null),
        n === null || n.return === null)
      ) {
        ;(Ce = 1), (bo = t), (_e = null)
        break
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t
        if (
          ((t = Ie),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            f = c.tag
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null))
          }
          var h = ch(s)
          if (h !== null) {
            ;(h.flags &= -257),
              fh(h, s, a, o, t),
              h.mode & 1 && uh(o, u, t),
              (t = h),
              (l = u)
            var m = t.updateQueue
            if (m === null) {
              var y = new Set()
              y.add(l), (t.updateQueue = y)
            } else m.add(l)
            break e
          } else {
            if (!(t & 1)) {
              uh(o, u, t), Df()
              break e
            }
            l = Error(C(426))
          }
        } else if (le && a.mode & 1) {
          var x = ch(s)
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              fh(x, s, a, o, t),
              pf(Ji(l, a))
            break e
          }
        }
        ;(o = l = Ji(l, a)),
          Ce !== 4 && (Ce = 2),
          qr === null ? (qr = [o]) : qr.push(o),
          (o = s)
        do {
          switch (o.tag) {
            case 3:
              ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
              var p = f0(o, l, t)
              nh(o, p)
              break e
            case 1:
              a = l
              var g = o.type,
                v = o.stateNode
              if (
                !(o.flags & 128) &&
                (typeof g.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (On === null || !On.has(v))))
              ) {
                ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
                var _ = d0(o, a, t)
                nh(o, _)
                break e
              }
          }
          o = o.return
        } while (o !== null)
      }
      A0(n)
    } catch (w) {
      ;(t = w), _e === n && n !== null && (_e = n = n.return)
      continue
    }
    break
  } while (1)
}
function T0() {
  var e = fa.current
  return (fa.current = ca), e === null ? ca : e
}
function Df() {
  ;(Ce === 0 || Ce === 3 || Ce === 2) && (Ce = 4),
    Te === null || (!(fi & 268435455) && !(Qa & 268435455)) || yn(Te, Ie)
}
function pa(e, t) {
  var n = V
  V |= 2
  var i = T0()
  ;(Te !== e || Ie !== t) && ((Gt = null), ii(e, t))
  do
    try {
      Rx()
      break
    } catch (r) {
      M0(e, r)
    }
  while (1)
  if ((mf(), (V = n), (fa.current = i), _e !== null)) throw Error(C(261))
  return (Te = null), (Ie = 0), Ce
}
function Rx() {
  for (; _e !== null; ) O0(_e)
}
function Lx() {
  for (; _e !== null && !r1(); ) O0(_e)
}
function O0(e) {
  var t = L0(e.alternate, e, st)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? A0(e) : (_e = t),
    (Tf.current = null)
}
function A0(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ex(n, t)), n !== null)) {
        ;(n.flags &= 32767), (_e = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(Ce = 6), (_e = null)
        return
      }
    } else if (((n = Cx(n, t, st)), n !== null)) {
      _e = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      _e = t
      return
    }
    _e = t = e
  } while (t !== null)
  Ce === 0 && (Ce = 5)
}
function Qn(e, t, n) {
  var i = Z,
    r = wt.transition
  try {
    ;(wt.transition = null), (Z = 1), Dx(e, t, n, i)
  } finally {
    ;(wt.transition = r), (Z = i)
  }
  return null
}
function Dx(e, t, n, i) {
  do Hi()
  while (_n !== null)
  if (V & 6) throw Error(C(327))
  n = e.finishedWork
  var r = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var o = n.lanes | n.childLanes
  if (
    (p1(e, o),
    e === Te && ((_e = Te = null), (Ie = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      rs ||
      ((rs = !0),
      D0(Qs, function () {
        return Hi(), null
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ;(o = wt.transition), (wt.transition = null)
    var s = Z
    Z = 1
    var a = V
    ;(V |= 4),
      (Tf.current = null),
      Mx(e, n),
      C0(n, e),
      ex(ec),
      (qs = !!Ju),
      (ec = Ju = null),
      (e.current = n),
      Tx(n),
      o1(),
      (V = a),
      (Z = s),
      (wt.transition = o)
  } else e.current = n
  if (
    (rs && ((rs = !1), (_n = e), (ha = r)),
    (o = e.pendingLanes),
    o === 0 && (On = null),
    l1(n.stateNode),
    it(e, ye()),
    t !== null)
  )
    for (i = e.onRecoverableError, n = 0; n < t.length; n++)
      (r = t[n]), i(r.value, { componentStack: r.stack, digest: r.digest })
  if (da) throw ((da = !1), (e = _c), (_c = null), e)
  return (
    ha & 1 && e.tag !== 0 && Hi(),
    (o = e.pendingLanes),
    o & 1 ? (e === wc ? Zr++ : ((Zr = 0), (wc = e))) : (Zr = 0),
    Hn(),
    null
  )
}
function Hi() {
  if (_n !== null) {
    var e = cm(ha),
      t = wt.transition,
      n = Z
    try {
      if (((wt.transition = null), (Z = 16 > e ? 16 : e), _n === null))
        var i = !1
      else {
        if (((e = _n), (_n = null), (ha = 0), V & 6)) throw Error(C(331))
        var r = V
        for (V |= 4, O = e.current; O !== null; ) {
          var o = O,
            s = o.child
          if (O.flags & 16) {
            var a = o.deletions
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l]
                for (O = u; O !== null; ) {
                  var c = O
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gr(8, c, o)
                  }
                  var f = c.child
                  if (f !== null) (f.return = c), (O = f)
                  else
                    for (; O !== null; ) {
                      c = O
                      var d = c.sibling,
                        h = c.return
                      if ((S0(c), c === u)) {
                        O = null
                        break
                      }
                      if (d !== null) {
                        ;(d.return = h), (O = d)
                        break
                      }
                      O = h
                    }
                }
              }
              var m = o.alternate
              if (m !== null) {
                var y = m.child
                if (y !== null) {
                  m.child = null
                  do {
                    var x = y.sibling
                    ;(y.sibling = null), (y = x)
                  } while (y !== null)
                }
              }
              O = o
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (O = s)
          else
            e: for (; O !== null; ) {
              if (((o = O), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Gr(9, o, o.return)
                }
              var p = o.sibling
              if (p !== null) {
                ;(p.return = o.return), (O = p)
                break e
              }
              O = o.return
            }
        }
        var g = e.current
        for (O = g; O !== null; ) {
          s = O
          var v = s.child
          if (s.subtreeFlags & 2064 && v !== null) (v.return = s), (O = v)
          else
            e: for (s = g; O !== null; ) {
              if (((a = O), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xa(9, a)
                  }
                } catch (w) {
                  he(a, a.return, w)
                }
              if (a === s) {
                O = null
                break e
              }
              var _ = a.sibling
              if (_ !== null) {
                ;(_.return = a.return), (O = _)
                break e
              }
              O = a.return
            }
        }
        if (
          ((V = r), Hn(), Vt && typeof Vt.onPostCommitFiberRoot == "function")
        )
          try {
            Vt.onPostCommitFiberRoot(ja, e)
          } catch {}
        i = !0
      }
      return i
    } finally {
      ;(Z = n), (wt.transition = t)
    }
  }
  return !1
}
function kh(e, t, n) {
  ;(t = Ji(n, t)),
    (t = f0(e, t, 1)),
    (e = Tn(e, t, 1)),
    (t = Ve()),
    e !== null && (Do(e, 1, t), it(e, t))
}
function he(e, t, n) {
  if (e.tag === 3) kh(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        kh(t, e, n)
        break
      } else if (t.tag === 1) {
        var i = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof i.componentDidCatch == "function" &&
            (On === null || !On.has(i)))
        ) {
          ;(e = Ji(n, e)),
            (e = d0(t, e, 1)),
            (t = Tn(t, e, 1)),
            (e = Ve()),
            t !== null && (Do(t, 1, e), it(t, e))
          break
        }
      }
      t = t.return
    }
}
function Ix(e, t, n) {
  var i = e.pingCache
  i !== null && i.delete(t),
    (t = Ve()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Te === e &&
      (Ie & n) === n &&
      (Ce === 4 || (Ce === 3 && (Ie & 130023424) === Ie && 500 > ye() - Af)
        ? ii(e, 0)
        : (Of |= n)),
    it(e, t)
}
function R0(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Xo), (Xo <<= 1), !(Xo & 130023424) && (Xo = 4194304))
      : (t = 1))
  var n = Ve()
  ;(e = sn(e, t)), e !== null && (Do(e, t, n), it(e, n))
}
function zx(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), R0(e, n)
}
function Nx(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var i = e.stateNode,
        r = e.memoizedState
      r !== null && (n = r.retryLane)
      break
    case 19:
      i = e.stateNode
      break
    default:
      throw Error(C(314))
  }
  i !== null && i.delete(t), R0(e, n)
}
var L0
L0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || tt.current) Ze = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ze = !1), kx(e, t, n)
      Ze = !!(e.flags & 131072)
    }
  else (Ze = !1), le && t.flags & 1048576 && zm(t, ra, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var i = t.type
      Rs(e, t), (e = t.pendingProps)
      var r = Qi(t, Be.current)
      Wi(t, n), (r = kf(null, t, i, e, r, n))
      var o = Cf()
      return (
        (t.flags |= 1),
        typeof r == "object" &&
        r !== null &&
        typeof r.render == "function" &&
        r.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            nt(i) ? ((o = !0), na(t)) : (o = !1),
            (t.memoizedState =
              r.state !== null && r.state !== void 0 ? r.state : null),
            xf(t),
            (r.updater = Ya),
            (t.stateNode = r),
            (r._reactInternals = t),
            uc(t, i, e, n),
            (t = dc(null, t, i, !0, o, n)))
          : ((t.tag = 0), le && o && df(t), He(null, t, r, n), (t = t.child)),
        t
      )
    case 16:
      i = t.elementType
      e: {
        switch (
          (Rs(e, t),
          (e = t.pendingProps),
          (r = i._init),
          (i = r(i._payload)),
          (t.type = i),
          (r = t.tag = Fx(i)),
          (e = Mt(i, e)),
          r)
        ) {
          case 0:
            t = fc(null, t, i, e, n)
            break e
          case 1:
            t = ph(null, t, i, e, n)
            break e
          case 11:
            t = dh(null, t, i, e, n)
            break e
          case 14:
            t = hh(null, t, i, Mt(i.type, e), n)
            break e
        }
        throw Error(C(306, i, ""))
      }
      return t
    case 0:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : Mt(i, r)),
        fc(e, t, i, r, n)
      )
    case 1:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : Mt(i, r)),
        ph(e, t, i, r, n)
      )
    case 3:
      e: {
        if ((m0(t), e === null)) throw Error(C(387))
        ;(i = t.pendingProps),
          (o = t.memoizedState),
          (r = o.element),
          jm(e, t),
          aa(t, i, null, n)
        var s = t.memoizedState
        if (((i = s.element), o.isDehydrated))
          if (
            ((o = {
              element: i,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            ;(r = Ji(Error(C(423)), t)), (t = gh(e, t, i, n, r))
            break e
          } else if (i !== r) {
            ;(r = Ji(Error(C(424)), t)), (t = gh(e, t, i, n, r))
            break e
          } else
            for (
              at = Mn(t.stateNode.containerInfo.firstChild),
                lt = t,
                le = !0,
                Ot = null,
                n = Vm(t, null, i, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((Gi(), i === r)) {
            t = an(e, t, n)
            break e
          }
          He(e, t, i, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        Um(t),
        e === null && sc(t),
        (i = t.type),
        (r = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = r.children),
        tc(i, r) ? (s = null) : o !== null && tc(i, o) && (t.flags |= 32),
        g0(e, t),
        He(e, t, s, n),
        t.child
      )
    case 6:
      return e === null && sc(t), null
    case 13:
      return y0(e, t, n)
    case 4:
      return (
        _f(t, t.stateNode.containerInfo),
        (i = t.pendingProps),
        e === null ? (t.child = qi(t, null, i, n)) : He(e, t, i, n),
        t.child
      )
    case 11:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : Mt(i, r)),
        dh(e, t, i, r, n)
      )
    case 7:
      return He(e, t, t.pendingProps, n), t.child
    case 8:
      return He(e, t, t.pendingProps.children, n), t.child
    case 12:
      return He(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((i = t.type._context),
          (r = t.pendingProps),
          (o = t.memoizedProps),
          (s = r.value),
          ne(oa, i._currentValue),
          (i._currentValue = s),
          o !== null)
        )
          if (It(o.value, s)) {
            if (o.children === r.children && !tt.current) {
              t = an(e, t, n)
              break e
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies
              if (a !== null) {
                s = o.child
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === i) {
                    if (o.tag === 1) {
                      ;(l = nn(-1, n & -n)), (l.tag = 2)
                      var u = o.updateQueue
                      if (u !== null) {
                        u = u.shared
                        var c = u.pending
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l)
                      }
                    }
                    ;(o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      ac(o.return, n, t),
                      (a.lanes |= n)
                    break
                  }
                  l = l.next
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(C(341))
                ;(s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  ac(s, n, t),
                  (s = o.sibling)
              } else s = o.child
              if (s !== null) s.return = o
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null
                    break
                  }
                  if (((o = s.sibling), o !== null)) {
                    ;(o.return = s.return), (s = o)
                    break
                  }
                  s = s.return
                }
              o = s
            }
        He(e, t, r.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (r = t.type),
        (i = t.pendingProps.children),
        Wi(t, n),
        (r = St(r)),
        (i = i(r)),
        (t.flags |= 1),
        He(e, t, i, n),
        t.child
      )
    case 14:
      return (
        (i = t.type),
        (r = Mt(i, t.pendingProps)),
        (r = Mt(i.type, r)),
        hh(e, t, i, r, n)
      )
    case 15:
      return h0(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : Mt(i, r)),
        Rs(e, t),
        (t.tag = 1),
        nt(i) ? ((e = !0), na(t)) : (e = !1),
        Wi(t, n),
        Wm(t, i, r),
        uc(t, i, r, n),
        dc(null, t, i, !0, e, n)
      )
    case 19:
      return v0(e, t, n)
    case 22:
      return p0(e, t, n)
  }
  throw Error(C(156, t.tag))
}
function D0(e, t) {
  return sm(e, t)
}
function $x(e, t, n, i) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = i),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function xt(e, t, n, i) {
  return new $x(e, t, n, i)
}
function If(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function Fx(e) {
  if (typeof e == "function") return If(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === Jc)) return 11
    if (e === ef) return 14
  }
  return 2
}
function Rn(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = xt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function Is(e, t, n, i, r, o) {
  var s = 2
  if (((i = e), typeof e == "function")) If(e) && (s = 1)
  else if (typeof e == "string") s = 5
  else
    e: switch (e) {
      case Ci:
        return ri(n.children, r, o, t)
      case Zc:
        ;(s = 8), (r |= 8)
        break
      case Lu:
        return (e = xt(12, n, t, r | 2)), (e.elementType = Lu), (e.lanes = o), e
      case Du:
        return (e = xt(13, n, t, r)), (e.elementType = Du), (e.lanes = o), e
      case Iu:
        return (e = xt(19, n, t, r)), (e.elementType = Iu), (e.lanes = o), e
      case Hg:
        return Ga(n, r, o, t)
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Bg:
              s = 10
              break e
            case Wg:
              s = 9
              break e
            case Jc:
              s = 11
              break e
            case ef:
              s = 14
              break e
            case pn:
              ;(s = 16), (i = null)
              break e
          }
        throw Error(C(130, e == null ? e : typeof e, ""))
    }
  return (
    (t = xt(s, n, t, r)), (t.elementType = e), (t.type = i), (t.lanes = o), t
  )
}
function ri(e, t, n, i) {
  return (e = xt(7, e, i, t)), (e.lanes = n), e
}
function Ga(e, t, n, i) {
  return (
    (e = xt(22, e, i, t)),
    (e.elementType = Hg),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function ou(e, t, n) {
  return (e = xt(6, e, null, t)), (e.lanes = n), e
}
function su(e, t, n) {
  return (
    (t = xt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function jx(e, t, n, i, r) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = jl(0)),
    (this.expirationTimes = jl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = jl(0)),
    (this.identifierPrefix = i),
    (this.onRecoverableError = r),
    (this.mutableSourceEagerHydrationData = null)
}
function zf(e, t, n, i, r, o, s, a, l) {
  return (
    (e = new jx(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = xt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    xf(o),
    e
  )
}
function Bx(e, t, n) {
  var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: ki,
    key: i == null ? null : "" + i,
    children: e,
    containerInfo: t,
    implementation: n,
  }
}
function I0(e) {
  if (!e) return Nn
  e = e._reactInternals
  e: {
    if (vi(e) !== e || e.tag !== 1) throw Error(C(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (nt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(C(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (nt(n)) return Dm(e, n, t)
  }
  return t
}
function z0(e, t, n, i, r, o, s, a, l) {
  return (
    (e = zf(n, i, !0, e, r, o, s, a, l)),
    (e.context = I0(null)),
    (n = e.current),
    (i = Ve()),
    (r = An(n)),
    (o = nn(i, r)),
    (o.callback = t ?? null),
    Tn(n, o, r),
    (e.current.lanes = r),
    Do(e, r, i),
    it(e, i),
    e
  )
}
function qa(e, t, n, i) {
  var r = t.current,
    o = Ve(),
    s = An(r)
  return (
    (n = I0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = nn(o, s)),
    (t.payload = { element: e }),
    (i = i === void 0 ? null : i),
    i !== null && (t.callback = i),
    (e = Tn(r, t, s)),
    e !== null && (Lt(e, r, s, o), Ts(e, r, s)),
    s
  )
}
function ga(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function Ch(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Nf(e, t) {
  Ch(e, t), (e = e.alternate) && Ch(e, t)
}
function Wx() {
  return null
}
var N0 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e)
      }
function $f(e) {
  this._internalRoot = e
}
Za.prototype.render = $f.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(C(409))
  qa(e, t, null, null)
}
Za.prototype.unmount = $f.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    di(function () {
      qa(null, e, null, null)
    }),
      (t[on] = null)
  }
}
function Za(e) {
  this._internalRoot = e
}
Za.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = hm()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < mn.length && t !== 0 && t < mn[n].priority; n++);
    mn.splice(n, 0, e), n === 0 && gm(e)
  }
}
function Ff(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function Ja(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  )
}
function Eh() {}
function Hx(e, t, n, i, r) {
  if (r) {
    if (typeof i == "function") {
      var o = i
      i = function () {
        var u = ga(s)
        o.call(u)
      }
    }
    var s = z0(t, i, e, 0, null, !1, !1, "", Eh)
    return (
      (e._reactRootContainer = s),
      (e[on] = s.current),
      go(e.nodeType === 8 ? e.parentNode : e),
      di(),
      s
    )
  }
  for (; (r = e.lastChild); ) e.removeChild(r)
  if (typeof i == "function") {
    var a = i
    i = function () {
      var u = ga(l)
      a.call(u)
    }
  }
  var l = zf(e, 0, !1, null, null, !1, !1, "", Eh)
  return (
    (e._reactRootContainer = l),
    (e[on] = l.current),
    go(e.nodeType === 8 ? e.parentNode : e),
    di(function () {
      qa(t, l, n, i)
    }),
    l
  )
}
function el(e, t, n, i, r) {
  var o = n._reactRootContainer
  if (o) {
    var s = o
    if (typeof r == "function") {
      var a = r
      r = function () {
        var l = ga(s)
        a.call(l)
      }
    }
    qa(t, s, e, r)
  } else s = Hx(n, t, e, r, i)
  return ga(s)
}
fm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = Lr(t.pendingLanes)
        n !== 0 &&
          (rf(t, n | 1), it(t, ye()), !(V & 6) && ((er = ye() + 500), Hn()))
      }
      break
    case 13:
      di(function () {
        var i = sn(e, 1)
        if (i !== null) {
          var r = Ve()
          Lt(i, e, 1, r)
        }
      }),
        Nf(e, 1)
  }
}
of = function (e) {
  if (e.tag === 13) {
    var t = sn(e, 134217728)
    if (t !== null) {
      var n = Ve()
      Lt(t, e, 134217728, n)
    }
    Nf(e, 134217728)
  }
}
dm = function (e) {
  if (e.tag === 13) {
    var t = An(e),
      n = sn(e, t)
    if (n !== null) {
      var i = Ve()
      Lt(n, e, t, i)
    }
    Nf(e, t)
  }
}
hm = function () {
  return Z
}
pm = function (e, t) {
  var n = Z
  try {
    return (Z = e), t()
  } finally {
    Z = n
  }
}
Uu = function (e, t, n) {
  switch (t) {
    case "input":
      if (($u(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var i = n[t]
          if (i !== e && i.form === e.form) {
            var r = Va(i)
            if (!r) throw Error(C(90))
            Ug(i), $u(i, r)
          }
        }
      }
      break
    case "textarea":
      Kg(e, n)
      break
    case "select":
      ;(t = n.value), t != null && $i(e, !!n.multiple, t, !1)
  }
}
em = Rf
tm = di
var Vx = { usingClientEntryPoint: !1, Events: [zo, Ti, Va, Zg, Jg, Rf] },
  br = {
    findFiberByHostInstance: Jn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Ux = {
    bundleType: br.bundleType,
    version: br.version,
    rendererPackageName: br.rendererPackageName,
    rendererConfig: br.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: un.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = rm(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: br.findFiberByHostInstance || Wx,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var os = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!os.isDisabled && os.supportsFiber)
    try {
      ;(ja = os.inject(Ux)), (Vt = os)
    } catch {}
}
ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vx
ft.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Ff(t)) throw Error(C(200))
  return Bx(e, t, null, n)
}
ft.createRoot = function (e, t) {
  if (!Ff(e)) throw Error(C(299))
  var n = !1,
    i = "",
    r = N0
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (r = t.onRecoverableError)),
    (t = zf(e, 1, !1, null, null, n, !1, i, r)),
    (e[on] = t.current),
    go(e.nodeType === 8 ? e.parentNode : e),
    new $f(t)
  )
}
ft.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)))
  return (e = rm(t)), (e = e === null ? null : e.stateNode), e
}
ft.flushSync = function (e) {
  return di(e)
}
ft.hydrate = function (e, t, n) {
  if (!Ja(t)) throw Error(C(200))
  return el(null, e, t, !0, n)
}
ft.hydrateRoot = function (e, t, n) {
  if (!Ff(e)) throw Error(C(405))
  var i = (n != null && n.hydratedSources) || null,
    r = !1,
    o = "",
    s = N0
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (r = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = z0(t, null, e, 1, n ?? null, r, !1, o, s)),
    (e[on] = t.current),
    go(e),
    i)
  )
    for (e = 0; e < i.length; e++)
      (n = i[e]),
        (r = n._getVersion),
        (r = r(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, r])
          : t.mutableSourceEagerHydrationData.push(n, r)
  return new Za(t)
}
ft.render = function (e, t, n) {
  if (!Ja(t)) throw Error(C(200))
  return el(null, e, t, !1, n)
}
ft.unmountComponentAtNode = function (e) {
  if (!Ja(e)) throw Error(C(40))
  return e._reactRootContainer
    ? (di(function () {
        el(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[on] = null)
        })
      }),
      !0)
    : !1
}
ft.unstable_batchedUpdates = Rf
ft.unstable_renderSubtreeIntoContainer = function (e, t, n, i) {
  if (!Ja(n)) throw Error(C(200))
  if (e == null || e._reactInternals === void 0) throw Error(C(38))
  return el(e, t, n, !1, i)
}
ft.version = "18.2.0-next-9e3b772b8-20220608"
function $0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($0)
    } catch (e) {
      console.error(e)
    }
}
$0(), (zg.exports = ft)
var F0 = zg.exports,
  Ph = F0
;(Au.createRoot = Ph.createRoot), (Au.hydrateRoot = Ph.hydrateRoot)
var j0 = { exports: {} },
  B0 = {}
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tr = R
function Yx(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Kx = typeof Object.is == "function" ? Object.is : Yx,
  Xx = tr.useState,
  Qx = tr.useEffect,
  Gx = tr.useLayoutEffect,
  qx = tr.useDebugValue
function Zx(e, t) {
  var n = t(),
    i = Xx({ inst: { value: n, getSnapshot: t } }),
    r = i[0].inst,
    o = i[1]
  return (
    Gx(
      function () {
        ;(r.value = n), (r.getSnapshot = t), au(r) && o({ inst: r })
      },
      [e, n, t],
    ),
    Qx(
      function () {
        return (
          au(r) && o({ inst: r }),
          e(function () {
            au(r) && o({ inst: r })
          })
        )
      },
      [e],
    ),
    qx(n),
    n
  )
}
function au(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !Kx(e, n)
  } catch {
    return !0
  }
}
function Jx(e, t) {
  return t()
}
var e_ =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? Jx
    : Zx
B0.useSyncExternalStore =
  tr.useSyncExternalStore !== void 0 ? tr.useSyncExternalStore : e_
j0.exports = B0
var t_ = j0.exports,
  W0 = { exports: {} },
  H0 = {}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tl = R,
  n_ = t_
function i_(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var r_ = typeof Object.is == "function" ? Object.is : i_,
  o_ = n_.useSyncExternalStore,
  s_ = tl.useRef,
  a_ = tl.useEffect,
  l_ = tl.useMemo,
  u_ = tl.useDebugValue
H0.useSyncExternalStoreWithSelector = function (e, t, n, i, r) {
  var o = s_(null)
  if (o.current === null) {
    var s = { hasValue: !1, value: null }
    o.current = s
  } else s = o.current
  o = l_(
    function () {
      function l(h) {
        if (!u) {
          if (((u = !0), (c = h), (h = i(h)), r !== void 0 && s.hasValue)) {
            var m = s.value
            if (r(m, h)) return (f = m)
          }
          return (f = h)
        }
        if (((m = f), r_(c, h))) return m
        var y = i(h)
        return r !== void 0 && r(m, y) ? m : ((c = h), (f = y))
      }
      var u = !1,
        c,
        f,
        d = n === void 0 ? null : n
      return [
        function () {
          return l(t())
        },
        d === null
          ? void 0
          : function () {
              return l(d())
            },
      ]
    },
    [t, n, i, r],
  )
  var a = o_(e, o[0], o[1])
  return (
    a_(
      function () {
        ;(s.hasValue = !0), (s.value = a)
      },
      [a],
    ),
    u_(a),
    a
  )
}
W0.exports = H0
var c_ = W0.exports
function f_(e) {
  e()
}
let V0 = f_
const d_ = (e) => (V0 = e),
  h_ = () => V0,
  Mh = Symbol.for("react-redux-context"),
  Th = typeof globalThis < "u" ? globalThis : {}
function p_() {
  var e
  if (!R.createContext) return {}
  const t = (e = Th[Mh]) != null ? e : (Th[Mh] = new Map())
  let n = t.get(R.createContext)
  return n || ((n = R.createContext(null)), t.set(R.createContext, n)), n
}
const $n = p_()
function jf(e = $n) {
  return function () {
    return R.useContext(e)
  }
}
const U0 = jf(),
  g_ = () => {
    throw new Error("uSES not initialized!")
  }
let Y0 = g_
const m_ = (e) => {
    Y0 = e
  },
  y_ = (e, t) => e === t
function v_(e = $n) {
  const t = e === $n ? U0 : jf(e)
  return function (i, r = {}) {
    const {
        equalityFn: o = y_,
        stabilityCheck: s = void 0,
        noopCheck: a = void 0,
      } = typeof r == "function" ? { equalityFn: r } : r,
      {
        store: l,
        subscription: u,
        getServerState: c,
        stabilityCheck: f,
        noopCheck: d,
      } = t()
    R.useRef(!0)
    const h = R.useCallback(
        {
          [i.name](y) {
            return i(y)
          },
        }[i.name],
        [i, f, s],
      ),
      m = Y0(u.addNestedSub, l.getState, c || l.getState, h, o)
    return R.useDebugValue(m), m
  }
}
const x_ = v_()
var K0 = { exports: {} },
  J = {}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oe = typeof Symbol == "function" && Symbol.for,
  Bf = Oe ? Symbol.for("react.element") : 60103,
  Wf = Oe ? Symbol.for("react.portal") : 60106,
  nl = Oe ? Symbol.for("react.fragment") : 60107,
  il = Oe ? Symbol.for("react.strict_mode") : 60108,
  rl = Oe ? Symbol.for("react.profiler") : 60114,
  ol = Oe ? Symbol.for("react.provider") : 60109,
  sl = Oe ? Symbol.for("react.context") : 60110,
  Hf = Oe ? Symbol.for("react.async_mode") : 60111,
  al = Oe ? Symbol.for("react.concurrent_mode") : 60111,
  ll = Oe ? Symbol.for("react.forward_ref") : 60112,
  ul = Oe ? Symbol.for("react.suspense") : 60113,
  __ = Oe ? Symbol.for("react.suspense_list") : 60120,
  cl = Oe ? Symbol.for("react.memo") : 60115,
  fl = Oe ? Symbol.for("react.lazy") : 60116,
  w_ = Oe ? Symbol.for("react.block") : 60121,
  S_ = Oe ? Symbol.for("react.fundamental") : 60117,
  b_ = Oe ? Symbol.for("react.responder") : 60118,
  k_ = Oe ? Symbol.for("react.scope") : 60119
function ht(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case Bf:
        switch (((e = e.type), e)) {
          case Hf:
          case al:
          case nl:
          case rl:
          case il:
          case ul:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case sl:
              case ll:
              case fl:
              case cl:
              case ol:
                return e
              default:
                return t
            }
        }
      case Wf:
        return t
    }
  }
}
function X0(e) {
  return ht(e) === al
}
J.AsyncMode = Hf
J.ConcurrentMode = al
J.ContextConsumer = sl
J.ContextProvider = ol
J.Element = Bf
J.ForwardRef = ll
J.Fragment = nl
J.Lazy = fl
J.Memo = cl
J.Portal = Wf
J.Profiler = rl
J.StrictMode = il
J.Suspense = ul
J.isAsyncMode = function (e) {
  return X0(e) || ht(e) === Hf
}
J.isConcurrentMode = X0
J.isContextConsumer = function (e) {
  return ht(e) === sl
}
J.isContextProvider = function (e) {
  return ht(e) === ol
}
J.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Bf
}
J.isForwardRef = function (e) {
  return ht(e) === ll
}
J.isFragment = function (e) {
  return ht(e) === nl
}
J.isLazy = function (e) {
  return ht(e) === fl
}
J.isMemo = function (e) {
  return ht(e) === cl
}
J.isPortal = function (e) {
  return ht(e) === Wf
}
J.isProfiler = function (e) {
  return ht(e) === rl
}
J.isStrictMode = function (e) {
  return ht(e) === il
}
J.isSuspense = function (e) {
  return ht(e) === ul
}
J.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === nl ||
    e === al ||
    e === rl ||
    e === il ||
    e === ul ||
    e === __ ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === fl ||
        e.$$typeof === cl ||
        e.$$typeof === ol ||
        e.$$typeof === sl ||
        e.$$typeof === ll ||
        e.$$typeof === S_ ||
        e.$$typeof === b_ ||
        e.$$typeof === k_ ||
        e.$$typeof === w_))
  )
}
J.typeOf = ht
K0.exports = J
var C_ = K0.exports,
  Q0 = C_,
  E_ = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  P_ = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  G0 = {}
G0[Q0.ForwardRef] = E_
G0[Q0.Memo] = P_
var ee = {}
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vf = Symbol.for("react.element"),
  Uf = Symbol.for("react.portal"),
  dl = Symbol.for("react.fragment"),
  hl = Symbol.for("react.strict_mode"),
  pl = Symbol.for("react.profiler"),
  gl = Symbol.for("react.provider"),
  ml = Symbol.for("react.context"),
  M_ = Symbol.for("react.server_context"),
  yl = Symbol.for("react.forward_ref"),
  vl = Symbol.for("react.suspense"),
  xl = Symbol.for("react.suspense_list"),
  _l = Symbol.for("react.memo"),
  wl = Symbol.for("react.lazy"),
  T_ = Symbol.for("react.offscreen"),
  q0
q0 = Symbol.for("react.module.reference")
function Ct(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case Vf:
        switch (((e = e.type), e)) {
          case dl:
          case pl:
          case hl:
          case vl:
          case xl:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case M_:
              case ml:
              case yl:
              case wl:
              case _l:
              case gl:
                return e
              default:
                return t
            }
        }
      case Uf:
        return t
    }
  }
}
ee.ContextConsumer = ml
ee.ContextProvider = gl
ee.Element = Vf
ee.ForwardRef = yl
ee.Fragment = dl
ee.Lazy = wl
ee.Memo = _l
ee.Portal = Uf
ee.Profiler = pl
ee.StrictMode = hl
ee.Suspense = vl
ee.SuspenseList = xl
ee.isAsyncMode = function () {
  return !1
}
ee.isConcurrentMode = function () {
  return !1
}
ee.isContextConsumer = function (e) {
  return Ct(e) === ml
}
ee.isContextProvider = function (e) {
  return Ct(e) === gl
}
ee.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Vf
}
ee.isForwardRef = function (e) {
  return Ct(e) === yl
}
ee.isFragment = function (e) {
  return Ct(e) === dl
}
ee.isLazy = function (e) {
  return Ct(e) === wl
}
ee.isMemo = function (e) {
  return Ct(e) === _l
}
ee.isPortal = function (e) {
  return Ct(e) === Uf
}
ee.isProfiler = function (e) {
  return Ct(e) === pl
}
ee.isStrictMode = function (e) {
  return Ct(e) === hl
}
ee.isSuspense = function (e) {
  return Ct(e) === vl
}
ee.isSuspenseList = function (e) {
  return Ct(e) === xl
}
ee.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === dl ||
    e === pl ||
    e === hl ||
    e === vl ||
    e === xl ||
    e === T_ ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === wl ||
        e.$$typeof === _l ||
        e.$$typeof === gl ||
        e.$$typeof === ml ||
        e.$$typeof === yl ||
        e.$$typeof === q0 ||
        e.getModuleId !== void 0))
  )
}
ee.typeOf = Ct
function O_() {
  const e = h_()
  let t = null,
    n = null
  return {
    clear() {
      ;(t = null), (n = null)
    },
    notify() {
      e(() => {
        let i = t
        for (; i; ) i.callback(), (i = i.next)
      })
    },
    get() {
      let i = [],
        r = t
      for (; r; ) i.push(r), (r = r.next)
      return i
    },
    subscribe(i) {
      let r = !0,
        o = (n = { callback: i, next: null, prev: n })
      return (
        o.prev ? (o.prev.next = o) : (t = o),
        function () {
          !r ||
            t === null ||
            ((r = !1),
            o.next ? (o.next.prev = o.prev) : (n = o.prev),
            o.prev ? (o.prev.next = o.next) : (t = o.next))
        }
      )
    },
  }
}
const Oh = { notify() {}, get: () => [] }
function A_(e, t) {
  let n,
    i = Oh,
    r = 0,
    o = !1
  function s(y) {
    c()
    const x = i.subscribe(y)
    let p = !1
    return () => {
      p || ((p = !0), x(), f())
    }
  }
  function a() {
    i.notify()
  }
  function l() {
    m.onStateChange && m.onStateChange()
  }
  function u() {
    return o
  }
  function c() {
    r++, n || ((n = t ? t.addNestedSub(l) : e.subscribe(l)), (i = O_()))
  }
  function f() {
    r--, n && r === 0 && (n(), (n = void 0), i.clear(), (i = Oh))
  }
  function d() {
    o || ((o = !0), c())
  }
  function h() {
    o && ((o = !1), f())
  }
  const m = {
    addNestedSub: s,
    notifyNestedSubs: a,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: h,
    getListeners: () => i,
  }
  return m
}
const R_ =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  L_ = R_ ? R.useLayoutEffect : R.useEffect
function D_({
  store: e,
  context: t,
  children: n,
  serverState: i,
  stabilityCheck: r = "once",
  noopCheck: o = "once",
}) {
  const s = R.useMemo(() => {
      const u = A_(e)
      return {
        store: e,
        subscription: u,
        getServerState: i ? () => i : void 0,
        stabilityCheck: r,
        noopCheck: o,
      }
    }, [e, i, r, o]),
    a = R.useMemo(() => e.getState(), [e])
  L_(() => {
    const { subscription: u } = s
    return (
      (u.onStateChange = u.notifyNestedSubs),
      u.trySubscribe(),
      a !== e.getState() && u.notifyNestedSubs(),
      () => {
        u.tryUnsubscribe(), (u.onStateChange = void 0)
      }
    )
  }, [s, a])
  const l = t || $n
  return R.createElement(l.Provider, { value: s }, n)
}
function Z0(e = $n) {
  const t = e === $n ? U0 : jf(e)
  return function () {
    const { store: i } = t()
    return i
  }
}
const I_ = Z0()
function z_(e = $n) {
  const t = e === $n ? I_ : Z0(e)
  return function () {
    return t().dispatch
  }
}
const N_ = z_()
m_(c_.useSyncExternalStoreWithSelector)
d_(F0.unstable_batchedUpdates)
function At(e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1;
    i < t;
    i++
  )
    n[i - 1] = arguments[i]
  throw Error(
    "[Immer] minified error nr: " +
      e +
      (n.length
        ? " " +
          n
            .map(function (r) {
              return "'" + r + "'"
            })
            .join(",")
        : "") +
      ". Find the full error at: https://bit.ly/3cXEKWf",
  )
}
function Fn(e) {
  return !!e && !!e[ae]
}
function ln(e) {
  var t
  return (
    !!e &&
    ((function (n) {
      if (!n || typeof n != "object") return !1
      var i = Object.getPrototypeOf(n)
      if (i === null) return !0
      var r = Object.hasOwnProperty.call(i, "constructor") && i.constructor
      return (
        r === Object ||
        (typeof r == "function" && Function.toString.call(r) === Y_)
      )
    })(e) ||
      Array.isArray(e) ||
      !!e[Nh] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[Nh]) ||
      Yf(e) ||
      Kf(e))
  )
}
function hi(e, t, n) {
  n === void 0 && (n = !1),
    hr(e) === 0
      ? (n ? Object.keys : Ui)(e).forEach(function (i) {
          ;(n && typeof i == "symbol") || t(i, e[i], e)
        })
      : e.forEach(function (i, r) {
          return t(r, i, e)
        })
}
function hr(e) {
  var t = e[ae]
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
    ? 1
    : Yf(e)
    ? 2
    : Kf(e)
    ? 3
    : 0
}
function Vi(e, t) {
  return hr(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}
function $_(e, t) {
  return hr(e) === 2 ? e.get(t) : e[t]
}
function J0(e, t, n) {
  var i = hr(e)
  i === 2 ? e.set(t, n) : i === 3 ? e.add(n) : (e[t] = n)
}
function ey(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t
}
function Yf(e) {
  return V_ && e instanceof Map
}
function Kf(e) {
  return U_ && e instanceof Set
}
function Gn(e) {
  return e.o || e.t
}
function Xf(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e)
  var t = ny(e)
  delete t[ae]
  for (var n = Ui(t), i = 0; i < n.length; i++) {
    var r = n[i],
      o = t[r]
    o.writable === !1 && ((o.writable = !0), (o.configurable = !0)),
      (o.get || o.set) &&
        (t[r] = {
          configurable: !0,
          writable: !0,
          enumerable: o.enumerable,
          value: e[r],
        })
  }
  return Object.create(Object.getPrototypeOf(e), t)
}
function Qf(e, t) {
  return (
    t === void 0 && (t = !1),
    Gf(e) ||
      Fn(e) ||
      !ln(e) ||
      (hr(e) > 1 && (e.set = e.add = e.clear = e.delete = F_),
      Object.freeze(e),
      t &&
        hi(
          e,
          function (n, i) {
            return Qf(i, !0)
          },
          !0,
        )),
    e
  )
}
function F_() {
  At(2)
}
function Gf(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e)
}
function Yt(e) {
  var t = Pc[e]
  return t || At(18, e), t
}
function j_(e, t) {
  Pc[e] || (Pc[e] = t)
}
function kc() {
  return ko
}
function lu(e, t) {
  t && (Yt("Patches"), (e.u = []), (e.s = []), (e.v = t))
}
function ma(e) {
  Cc(e), e.p.forEach(B_), (e.p = null)
}
function Cc(e) {
  e === ko && (ko = e.l)
}
function Ah(e) {
  return (ko = { p: [], l: ko, h: e, m: !0, _: 0 })
}
function B_(e) {
  var t = e[ae]
  t.i === 0 || t.i === 1 ? t.j() : (t.g = !0)
}
function uu(e, t) {
  t._ = t.p.length
  var n = t.p[0],
    i = e !== void 0 && e !== n
  return (
    t.h.O || Yt("ES5").S(t, e, i),
    i
      ? (n[ae].P && (ma(t), At(4)),
        ln(e) && ((e = ya(t, e)), t.l || va(t, e)),
        t.u && Yt("Patches").M(n[ae].t, e, t.u, t.s))
      : (e = ya(t, n, [])),
    ma(t),
    t.u && t.v(t.u, t.s),
    e !== ty ? e : void 0
  )
}
function ya(e, t, n) {
  if (Gf(t)) return t
  var i = t[ae]
  if (!i)
    return (
      hi(
        t,
        function (a, l) {
          return Rh(e, i, t, a, l, n)
        },
        !0,
      ),
      t
    )
  if (i.A !== e) return t
  if (!i.P) return va(e, i.t, !0), i.t
  if (!i.I) {
    ;(i.I = !0), i.A._--
    var r = i.i === 4 || i.i === 5 ? (i.o = Xf(i.k)) : i.o,
      o = r,
      s = !1
    i.i === 3 && ((o = new Set(r)), r.clear(), (s = !0)),
      hi(o, function (a, l) {
        return Rh(e, i, r, a, l, n, s)
      }),
      va(e, r, !1),
      n && e.u && Yt("Patches").N(i, n, e.u, e.s)
  }
  return i.o
}
function Rh(e, t, n, i, r, o, s) {
  if (Fn(r)) {
    var a = ya(e, r, o && t && t.i !== 3 && !Vi(t.R, i) ? o.concat(i) : void 0)
    if ((J0(n, i, a), !Fn(a))) return
    e.m = !1
  } else s && n.add(r)
  if (ln(r) && !Gf(r)) {
    if (!e.h.D && e._ < 1) return
    ya(e, r), (t && t.A.l) || va(e, r)
  }
}
function va(e, t, n) {
  n === void 0 && (n = !1), !e.l && e.h.D && e.m && Qf(t, n)
}
function cu(e, t) {
  var n = e[ae]
  return (n ? Gn(n) : e)[t]
}
function Lh(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var i = Object.getOwnPropertyDescriptor(n, t)
      if (i) return i
      n = Object.getPrototypeOf(n)
    }
}
function vn(e) {
  e.P || ((e.P = !0), e.l && vn(e.l))
}
function fu(e) {
  e.o || (e.o = Xf(e.t))
}
function Ec(e, t, n) {
  var i = Yf(t)
    ? Yt("MapSet").F(t, n)
    : Kf(t)
    ? Yt("MapSet").T(t, n)
    : e.O
    ? (function (r, o) {
        var s = Array.isArray(r),
          a = {
            i: s ? 1 : 0,
            A: o ? o.A : kc(),
            P: !1,
            I: !1,
            R: {},
            l: o,
            t: r,
            k: null,
            o: null,
            j: null,
            C: !1,
          },
          l = a,
          u = Co
        s && ((l = [a]), (u = Ir))
        var c = Proxy.revocable(l, u),
          f = c.revoke,
          d = c.proxy
        return (a.k = d), (a.j = f), d
      })(t, n)
    : Yt("ES5").J(t, n)
  return (n ? n.A : kc()).p.push(i), i
}
function W_(e) {
  return (
    Fn(e) || At(22, e),
    (function t(n) {
      if (!ln(n)) return n
      var i,
        r = n[ae],
        o = hr(n)
      if (r) {
        if (!r.P && (r.i < 4 || !Yt("ES5").K(r))) return r.t
        ;(r.I = !0), (i = Dh(n, o)), (r.I = !1)
      } else i = Dh(n, o)
      return (
        hi(i, function (s, a) {
          ;(r && $_(r.t, s) === a) || J0(i, s, t(a))
        }),
        o === 3 ? new Set(i) : i
      )
    })(e)
  )
}
function Dh(e, t) {
  switch (t) {
    case 2:
      return new Map(e)
    case 3:
      return Array.from(e)
  }
  return Xf(e)
}
function H_() {
  function e(o, s) {
    var a = r[o]
    return (
      a
        ? (a.enumerable = s)
        : (r[o] = a =
            {
              configurable: !0,
              enumerable: s,
              get: function () {
                var l = this[ae]
                return Co.get(l, o)
              },
              set: function (l) {
                var u = this[ae]
                Co.set(u, o, l)
              },
            }),
      a
    )
  }
  function t(o) {
    for (var s = o.length - 1; s >= 0; s--) {
      var a = o[s][ae]
      if (!a.P)
        switch (a.i) {
          case 5:
            i(a) && vn(a)
            break
          case 4:
            n(a) && vn(a)
        }
    }
  }
  function n(o) {
    for (var s = o.t, a = o.k, l = Ui(a), u = l.length - 1; u >= 0; u--) {
      var c = l[u]
      if (c !== ae) {
        var f = s[c]
        if (f === void 0 && !Vi(s, c)) return !0
        var d = a[c],
          h = d && d[ae]
        if (h ? h.t !== f : !ey(d, f)) return !0
      }
    }
    var m = !!s[ae]
    return l.length !== Ui(s).length + (m ? 0 : 1)
  }
  function i(o) {
    var s = o.k
    if (s.length !== o.t.length) return !0
    var a = Object.getOwnPropertyDescriptor(s, s.length - 1)
    if (a && !a.get) return !0
    for (var l = 0; l < s.length; l++) if (!s.hasOwnProperty(l)) return !0
    return !1
  }
  var r = {}
  j_("ES5", {
    J: function (o, s) {
      var a = Array.isArray(o),
        l = (function (c, f) {
          if (c) {
            for (var d = Array(f.length), h = 0; h < f.length; h++)
              Object.defineProperty(d, "" + h, e(h, !0))
            return d
          }
          var m = ny(f)
          delete m[ae]
          for (var y = Ui(m), x = 0; x < y.length; x++) {
            var p = y[x]
            m[p] = e(p, c || !!m[p].enumerable)
          }
          return Object.create(Object.getPrototypeOf(f), m)
        })(a, o),
        u = {
          i: a ? 5 : 4,
          A: s ? s.A : kc(),
          P: !1,
          I: !1,
          R: {},
          l: s,
          t: o,
          k: l,
          o: null,
          g: !1,
          C: !1,
        }
      return Object.defineProperty(l, ae, { value: u, writable: !0 }), l
    },
    S: function (o, s, a) {
      a
        ? Fn(s) && s[ae].A === o && t(o.p)
        : (o.u &&
            (function l(u) {
              if (u && typeof u == "object") {
                var c = u[ae]
                if (c) {
                  var f = c.t,
                    d = c.k,
                    h = c.R,
                    m = c.i
                  if (m === 4)
                    hi(d, function (v) {
                      v !== ae &&
                        (f[v] !== void 0 || Vi(f, v)
                          ? h[v] || l(d[v])
                          : ((h[v] = !0), vn(c)))
                    }),
                      hi(f, function (v) {
                        d[v] !== void 0 || Vi(d, v) || ((h[v] = !1), vn(c))
                      })
                  else if (m === 5) {
                    if ((i(c) && (vn(c), (h.length = !0)), d.length < f.length))
                      for (var y = d.length; y < f.length; y++) h[y] = !1
                    else for (var x = f.length; x < d.length; x++) h[x] = !0
                    for (
                      var p = Math.min(d.length, f.length), g = 0;
                      g < p;
                      g++
                    )
                      d.hasOwnProperty(g) || (h[g] = !0),
                        h[g] === void 0 && l(d[g])
                  }
                }
              }
            })(o.p[0]),
          t(o.p))
    },
    K: function (o) {
      return o.i === 4 ? n(o) : i(o)
    },
  })
}
var Ih,
  ko,
  qf = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
  V_ = typeof Map < "u",
  U_ = typeof Set < "u",
  zh = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u",
  ty = qf
    ? Symbol.for("immer-nothing")
    : (((Ih = {})["immer-nothing"] = !0), Ih),
  Nh = qf ? Symbol.for("immer-draftable") : "__$immer_draftable",
  ae = qf ? Symbol.for("immer-state") : "__$immer_state",
  Y_ = "" + Object.prototype.constructor,
  Ui =
    typeof Reflect < "u" && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e),
          )
        }
      : Object.getOwnPropertyNames,
  ny =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {}
      return (
        Ui(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n)
        }),
        t
      )
    },
  Pc = {},
  Co = {
    get: function (e, t) {
      if (t === ae) return e
      var n = Gn(e)
      if (!Vi(n, t))
        return (function (r, o, s) {
          var a,
            l = Lh(o, s)
          return l
            ? "value" in l
              ? l.value
              : (a = l.get) === null || a === void 0
              ? void 0
              : a.call(r.k)
            : void 0
        })(e, n, t)
      var i = n[t]
      return e.I || !ln(i)
        ? i
        : i === cu(e.t, t)
        ? (fu(e), (e.o[t] = Ec(e.A.h, i, e)))
        : i
    },
    has: function (e, t) {
      return t in Gn(e)
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(Gn(e))
    },
    set: function (e, t, n) {
      var i = Lh(Gn(e), t)
      if (i != null && i.set) return i.set.call(e.k, n), !0
      if (!e.P) {
        var r = cu(Gn(e), t),
          o = r == null ? void 0 : r[ae]
        if (o && o.t === n) return (e.o[t] = n), (e.R[t] = !1), !0
        if (ey(n, r) && (n !== void 0 || Vi(e.t, t))) return !0
        fu(e), vn(e)
      }
      return (
        (e.o[t] === n && (n !== void 0 || t in e.o)) ||
          (Number.isNaN(n) && Number.isNaN(e.o[t])) ||
          ((e.o[t] = n), (e.R[t] = !0)),
        !0
      )
    },
    deleteProperty: function (e, t) {
      return (
        cu(e.t, t) !== void 0 || t in e.t
          ? ((e.R[t] = !1), fu(e), vn(e))
          : delete e.R[t],
        e.o && delete e.o[t],
        !0
      )
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = Gn(e),
        i = Reflect.getOwnPropertyDescriptor(n, t)
      return (
        i && {
          writable: !0,
          configurable: e.i !== 1 || t !== "length",
          enumerable: i.enumerable,
          value: n[t],
        }
      )
    },
    defineProperty: function () {
      At(11)
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t)
    },
    setPrototypeOf: function () {
      At(12)
    },
  },
  Ir = {}
hi(Co, function (e, t) {
  Ir[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments)
  }
}),
  (Ir.deleteProperty = function (e, t) {
    return Ir.set.call(this, e, t, void 0)
  }),
  (Ir.set = function (e, t, n) {
    return Co.set.call(this, e[0], t, n, e[0])
  })
var K_ = (function () {
    function e(n) {
      var i = this
      ;(this.O = zh),
        (this.D = !0),
        (this.produce = function (r, o, s) {
          if (typeof r == "function" && typeof o != "function") {
            var a = o
            o = r
            var l = i
            return function (y) {
              var x = this
              y === void 0 && (y = a)
              for (
                var p = arguments.length, g = Array(p > 1 ? p - 1 : 0), v = 1;
                v < p;
                v++
              )
                g[v - 1] = arguments[v]
              return l.produce(y, function (_) {
                var w
                return (w = o).call.apply(w, [x, _].concat(g))
              })
            }
          }
          var u
          if (
            (typeof o != "function" && At(6),
            s !== void 0 && typeof s != "function" && At(7),
            ln(r))
          ) {
            var c = Ah(i),
              f = Ec(i, r, void 0),
              d = !0
            try {
              ;(u = o(f)), (d = !1)
            } finally {
              d ? ma(c) : Cc(c)
            }
            return typeof Promise < "u" && u instanceof Promise
              ? u.then(
                  function (y) {
                    return lu(c, s), uu(y, c)
                  },
                  function (y) {
                    throw (ma(c), y)
                  },
                )
              : (lu(c, s), uu(u, c))
          }
          if (!r || typeof r != "object") {
            if (
              ((u = o(r)) === void 0 && (u = r),
              u === ty && (u = void 0),
              i.D && Qf(u, !0),
              s)
            ) {
              var h = [],
                m = []
              Yt("Patches").M(r, u, h, m), s(h, m)
            }
            return u
          }
          At(21, r)
        }),
        (this.produceWithPatches = function (r, o) {
          if (typeof r == "function")
            return function (u) {
              for (
                var c = arguments.length, f = Array(c > 1 ? c - 1 : 0), d = 1;
                d < c;
                d++
              )
                f[d - 1] = arguments[d]
              return i.produceWithPatches(u, function (h) {
                return r.apply(void 0, [h].concat(f))
              })
            }
          var s,
            a,
            l = i.produce(r, o, function (u, c) {
              ;(s = u), (a = c)
            })
          return typeof Promise < "u" && l instanceof Promise
            ? l.then(function (u) {
                return [u, s, a]
              })
            : [l, s, a]
        }),
        typeof (n == null ? void 0 : n.useProxies) == "boolean" &&
          this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == "boolean" &&
          this.setAutoFreeze(n.autoFreeze)
    }
    var t = e.prototype
    return (
      (t.createDraft = function (n) {
        ln(n) || At(8), Fn(n) && (n = W_(n))
        var i = Ah(this),
          r = Ec(this, n, void 0)
        return (r[ae].C = !0), Cc(i), r
      }),
      (t.finishDraft = function (n, i) {
        var r = n && n[ae],
          o = r.A
        return lu(o, i), uu(void 0, o)
      }),
      (t.setAutoFreeze = function (n) {
        this.D = n
      }),
      (t.setUseProxies = function (n) {
        n && !zh && At(20), (this.O = n)
      }),
      (t.applyPatches = function (n, i) {
        var r
        for (r = i.length - 1; r >= 0; r--) {
          var o = i[r]
          if (o.path.length === 0 && o.op === "replace") {
            n = o.value
            break
          }
        }
        r > -1 && (i = i.slice(r + 1))
        var s = Yt("Patches").$
        return Fn(n)
          ? s(n, i)
          : this.produce(n, function (a) {
              return s(a, i)
            })
      }),
      e
    )
  })(),
  ct = new K_(),
  iy = ct.produce
ct.produceWithPatches.bind(ct)
ct.setAutoFreeze.bind(ct)
ct.setUseProxies.bind(ct)
ct.applyPatches.bind(ct)
ct.createDraft.bind(ct)
ct.finishDraft.bind(ct)
function Eo(e) {
  "@babel/helpers - typeof"
  return (
    (Eo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t
          }),
    Eo(e)
  )
}
function X_(e, t) {
  if (Eo(e) !== "object" || e === null) return e
  var n = e[Symbol.toPrimitive]
  if (n !== void 0) {
    var i = n.call(e, t || "default")
    if (Eo(i) !== "object") return i
    throw new TypeError("@@toPrimitive must return a primitive value.")
  }
  return (t === "string" ? String : Number)(e)
}
function Q_(e) {
  var t = X_(e, "string")
  return Eo(t) === "symbol" ? t : String(t)
}
function G_(e, t, n) {
  return (
    (t = Q_(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
function $h(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e)
    t &&
      (i = i.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable
      })),
      n.push.apply(n, i)
  }
  return n
}
function Fh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? $h(Object(n), !0).forEach(function (i) {
          G_(e, i, n[i])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : $h(Object(n)).forEach(function (i) {
          Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i))
        })
  }
  return e
}
function Fe(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  )
}
var jh = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable"
  })(),
  du = function () {
    return Math.random().toString(36).substring(7).split("").join(".")
  },
  xa = {
    INIT: "@@redux/INIT" + du(),
    REPLACE: "@@redux/REPLACE" + du(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + du()
    },
  }
function q_(e) {
  if (typeof e != "object" || e === null) return !1
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t)
  return Object.getPrototypeOf(e) === t
}
function ry(e, t, n) {
  var i
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Fe(0))
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(Fe(1))
    return n(ry)(e, t)
  }
  if (typeof e != "function") throw new Error(Fe(2))
  var r = e,
    o = t,
    s = [],
    a = s,
    l = !1
  function u() {
    a === s && (a = s.slice())
  }
  function c() {
    if (l) throw new Error(Fe(3))
    return o
  }
  function f(y) {
    if (typeof y != "function") throw new Error(Fe(4))
    if (l) throw new Error(Fe(5))
    var x = !0
    return (
      u(),
      a.push(y),
      function () {
        if (x) {
          if (l) throw new Error(Fe(6))
          ;(x = !1), u()
          var g = a.indexOf(y)
          a.splice(g, 1), (s = null)
        }
      }
    )
  }
  function d(y) {
    if (!q_(y)) throw new Error(Fe(7))
    if (typeof y.type > "u") throw new Error(Fe(8))
    if (l) throw new Error(Fe(9))
    try {
      ;(l = !0), (o = r(o, y))
    } finally {
      l = !1
    }
    for (var x = (s = a), p = 0; p < x.length; p++) {
      var g = x[p]
      g()
    }
    return y
  }
  function h(y) {
    if (typeof y != "function") throw new Error(Fe(10))
    ;(r = y), d({ type: xa.REPLACE })
  }
  function m() {
    var y,
      x = f
    return (
      (y = {
        subscribe: function (g) {
          if (typeof g != "object" || g === null) throw new Error(Fe(11))
          function v() {
            g.next && g.next(c())
          }
          v()
          var _ = x(v)
          return { unsubscribe: _ }
        },
      }),
      (y[jh] = function () {
        return this
      }),
      y
    )
  }
  return (
    d({ type: xa.INIT }),
    (i = { dispatch: d, subscribe: f, getState: c, replaceReducer: h }),
    (i[jh] = m),
    i
  )
}
function Z_(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      i = n(void 0, { type: xa.INIT })
    if (typeof i > "u") throw new Error(Fe(12))
    if (typeof n(void 0, { type: xa.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(Fe(13))
  })
}
function J_(e) {
  for (var t = Object.keys(e), n = {}, i = 0; i < t.length; i++) {
    var r = t[i]
    typeof e[r] == "function" && (n[r] = e[r])
  }
  var o = Object.keys(n),
    s
  try {
    Z_(n)
  } catch (a) {
    s = a
  }
  return function (l, u) {
    if ((l === void 0 && (l = {}), s)) throw s
    for (var c = !1, f = {}, d = 0; d < o.length; d++) {
      var h = o[d],
        m = n[h],
        y = l[h],
        x = m(y, u)
      if (typeof x > "u") throw (u && u.type, new Error(Fe(14)))
      ;(f[h] = x), (c = c || x !== y)
    }
    return (c = c || o.length !== Object.keys(l).length), c ? f : l
  }
}
function _a() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  return t.length === 0
    ? function (i) {
        return i
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (i, r) {
        return function () {
          return i(r.apply(void 0, arguments))
        }
      })
}
function ew() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  return function (i) {
    return function () {
      var r = i.apply(void 0, arguments),
        o = function () {
          throw new Error(Fe(15))
        },
        s = {
          getState: r.getState,
          dispatch: function () {
            return o.apply(void 0, arguments)
          },
        },
        a = t.map(function (l) {
          return l(s)
        })
      return (
        (o = _a.apply(void 0, a)(r.dispatch)),
        Fh(Fh({}, r), {}, { dispatch: o })
      )
    }
  }
}
function oy(e) {
  var t = function (i) {
    var r = i.dispatch,
      o = i.getState
    return function (s) {
      return function (a) {
        return typeof a == "function" ? a(r, o, e) : s(a)
      }
    }
  }
  return t
}
var sy = oy()
sy.withExtraArgument = oy
const Bh = sy
var ay =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (i, r) {
                i.__proto__ = r
              }) ||
            function (i, r) {
              for (var o in r)
                Object.prototype.hasOwnProperty.call(r, o) && (i[o] = r[o])
            }),
          e(t, n)
        )
      }
      return function (t, n) {
        if (typeof n != "function" && n !== null)
          throw new TypeError(
            "Class extends value " +
              String(n) +
              " is not a constructor or null",
          )
        e(t, n)
        function i() {
          this.constructor = t
        }
        t.prototype =
          n === null ? Object.create(n) : ((i.prototype = n.prototype), new i())
      }
    })(),
  tw =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (o[0] & 1) throw o[1]
            return o[1]
          },
          trys: [],
          ops: [],
        },
        i,
        r,
        o,
        s
      return (
        (s = { next: a(0), throw: a(1), return: a(2) }),
        typeof Symbol == "function" &&
          (s[Symbol.iterator] = function () {
            return this
          }),
        s
      )
      function a(u) {
        return function (c) {
          return l([u, c])
        }
      }
      function l(u) {
        if (i) throw new TypeError("Generator is already executing.")
        for (; n; )
          try {
            if (
              ((i = 1),
              r &&
                (o =
                  u[0] & 2
                    ? r.return
                    : u[0]
                    ? r.throw || ((o = r.return) && o.call(r), 0)
                    : r.next) &&
                !(o = o.call(r, u[1])).done)
            )
              return o
            switch (((r = 0), o && (u = [u[0] & 2, o.value]), u[0])) {
              case 0:
              case 1:
                o = u
                break
              case 4:
                return n.label++, { value: u[1], done: !1 }
              case 5:
                n.label++, (r = u[1]), (u = [0])
                continue
              case 7:
                ;(u = n.ops.pop()), n.trys.pop()
                continue
              default:
                if (
                  ((o = n.trys),
                  !(o = o.length > 0 && o[o.length - 1]) &&
                    (u[0] === 6 || u[0] === 2))
                ) {
                  n = 0
                  continue
                }
                if (u[0] === 3 && (!o || (u[1] > o[0] && u[1] < o[3]))) {
                  n.label = u[1]
                  break
                }
                if (u[0] === 6 && n.label < o[1]) {
                  ;(n.label = o[1]), (o = u)
                  break
                }
                if (o && n.label < o[2]) {
                  ;(n.label = o[2]), n.ops.push(u)
                  break
                }
                o[2] && n.ops.pop(), n.trys.pop()
                continue
            }
            u = t.call(e, n)
          } catch (c) {
            ;(u = [6, c]), (r = 0)
          } finally {
            i = o = 0
          }
        if (u[0] & 5) throw u[1]
        return { value: u[0] ? u[1] : void 0, done: !0 }
      }
    },
  nr =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, i = t.length, r = e.length; n < i; n++, r++) e[r] = t[n]
      return e
    },
  nw = Object.defineProperty,
  iw = Object.defineProperties,
  rw = Object.getOwnPropertyDescriptors,
  Wh = Object.getOwnPropertySymbols,
  ow = Object.prototype.hasOwnProperty,
  sw = Object.prototype.propertyIsEnumerable,
  Hh = function (e, t, n) {
    return t in e
      ? nw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n)
  },
  Ln = function (e, t) {
    for (var n in t || (t = {})) ow.call(t, n) && Hh(e, n, t[n])
    if (Wh)
      for (var i = 0, r = Wh(t); i < r.length; i++) {
        var n = r[i]
        sw.call(t, n) && Hh(e, n, t[n])
      }
    return e
  },
  hu = function (e, t) {
    return iw(e, rw(t))
  },
  aw = function (e, t, n) {
    return new Promise(function (i, r) {
      var o = function (l) {
          try {
            a(n.next(l))
          } catch (u) {
            r(u)
          }
        },
        s = function (l) {
          try {
            a(n.throw(l))
          } catch (u) {
            r(u)
          }
        },
        a = function (l) {
          return l.done ? i(l.value) : Promise.resolve(l.value).then(o, s)
        }
      a((n = n.apply(e, t)).next())
    })
  },
  lw =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? _a
              : _a.apply(null, arguments)
        }
function uw(e) {
  if (typeof e != "object" || e === null) return !1
  var t = Object.getPrototypeOf(e)
  if (t === null) return !0
  for (var n = t; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n)
  return t === n
}
function Dn(e, t) {
  function n() {
    for (var i = [], r = 0; r < arguments.length; r++) i[r] = arguments[r]
    if (t) {
      var o = t.apply(void 0, i)
      if (!o) throw new Error("prepareAction did not return an object")
      return Ln(
        Ln({ type: e, payload: o.payload }, "meta" in o && { meta: o.meta }),
        "error" in o && { error: o.error },
      )
    }
    return { type: e, payload: i[0] }
  }
  return (
    (n.toString = function () {
      return "" + e
    }),
    (n.type = e),
    (n.match = function (i) {
      return i.type === e
    }),
    n
  )
}
var cw = (function (e) {
    ay(t, e)
    function t() {
      for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i]
      var r = e.apply(this, n) || this
      return Object.setPrototypeOf(r, t.prototype), r
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i]
        return e.prototype.concat.apply(this, n)
      }),
      (t.prototype.prepend = function () {
        for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i]
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, nr([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, nr([void 0], n.concat(this))))()
      }),
      t
    )
  })(Array),
  fw = (function (e) {
    ay(t, e)
    function t() {
      for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i]
      var r = e.apply(this, n) || this
      return Object.setPrototypeOf(r, t.prototype), r
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i]
        return e.prototype.concat.apply(this, n)
      }),
      (t.prototype.prepend = function () {
        for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i]
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, nr([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, nr([void 0], n.concat(this))))()
      }),
      t
    )
  })(Array)
function Mc(e) {
  return ln(e) ? iy(e, function () {}) : e
}
function dw(e) {
  return typeof e == "boolean"
}
function hw() {
  return function (t) {
    return pw(t)
  }
}
function pw(e) {
  e === void 0 && (e = {})
  var t = e.thunk,
    n = t === void 0 ? !0 : t
  e.immutableCheck, e.serializableCheck, e.actionCreatorCheck
  var i = new cw()
  return (
    n && (dw(n) ? i.push(Bh) : i.push(Bh.withExtraArgument(n.extraArgument))), i
  )
}
var gw = !0
function mw(e) {
  var t = hw(),
    n = e || {},
    i = n.reducer,
    r = i === void 0 ? void 0 : i,
    o = n.middleware,
    s = o === void 0 ? t() : o,
    a = n.devTools,
    l = a === void 0 ? !0 : a,
    u = n.preloadedState,
    c = u === void 0 ? void 0 : u,
    f = n.enhancers,
    d = f === void 0 ? void 0 : f,
    h
  if (typeof r == "function") h = r
  else if (uw(r)) h = J_(r)
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers',
    )
  var m = s
  typeof m == "function" && (m = m(t))
  var y = ew.apply(void 0, m),
    x = _a
  l && (x = lw(Ln({ trace: !gw }, typeof l == "object" && l)))
  var p = new fw(y),
    g = p
  Array.isArray(d) ? (g = nr([y], d)) : typeof d == "function" && (g = d(p))
  var v = x.apply(void 0, g)
  return ry(h, c, v)
}
function ly(e) {
  var t = {},
    n = [],
    i,
    r = {
      addCase: function (o, s) {
        var a = typeof o == "string" ? o : o.type
        if (!a)
          throw new Error(
            "`builder.addCase` cannot be called with an empty action type",
          )
        if (a in t)
          throw new Error(
            "`builder.addCase` cannot be called with two reducers for the same action type",
          )
        return (t[a] = s), r
      },
      addMatcher: function (o, s) {
        return n.push({ matcher: o, reducer: s }), r
      },
      addDefaultCase: function (o) {
        return (i = o), r
      },
    }
  return e(r), [t, n, i]
}
function yw(e) {
  return typeof e == "function"
}
function vw(e, t, n, i) {
  n === void 0 && (n = [])
  var r = typeof t == "function" ? ly(t) : [t, n, i],
    o = r[0],
    s = r[1],
    a = r[2],
    l
  if (yw(e))
    l = function () {
      return Mc(e())
    }
  else {
    var u = Mc(e)
    l = function () {
      return u
    }
  }
  function c(f, d) {
    f === void 0 && (f = l())
    var h = nr(
      [o[d.type]],
      s
        .filter(function (m) {
          var y = m.matcher
          return y(d)
        })
        .map(function (m) {
          var y = m.reducer
          return y
        }),
    )
    return (
      h.filter(function (m) {
        return !!m
      }).length === 0 && (h = [a]),
      h.reduce(function (m, y) {
        if (y)
          if (Fn(m)) {
            var x = m,
              p = y(x, d)
            return p === void 0 ? m : p
          } else {
            if (ln(m))
              return iy(m, function (g) {
                return y(g, d)
              })
            var p = y(m, d)
            if (p === void 0) {
              if (m === null) return m
              throw Error(
                "A case reducer on a non-draftable value must not return undefined",
              )
            }
            return p
          }
        return m
      }, f)
    )
  }
  return (c.getInitialState = l), c
}
function xw(e, t) {
  return e + "/" + t
}
function _w(e) {
  var t = e.name
  if (!t) throw new Error("`name` is a required option for createSlice")
  typeof process < "u"
  var n =
      typeof e.initialState == "function" ? e.initialState : Mc(e.initialState),
    i = e.reducers || {},
    r = Object.keys(i),
    o = {},
    s = {},
    a = {}
  r.forEach(function (c) {
    var f = i[c],
      d = xw(t, c),
      h,
      m
    "reducer" in f ? ((h = f.reducer), (m = f.prepare)) : (h = f),
      (o[c] = h),
      (s[d] = h),
      (a[c] = m ? Dn(d, m) : Dn(d))
  })
  function l() {
    var c =
        typeof e.extraReducers == "function"
          ? ly(e.extraReducers)
          : [e.extraReducers],
      f = c[0],
      d = f === void 0 ? {} : f,
      h = c[1],
      m = h === void 0 ? [] : h,
      y = c[2],
      x = y === void 0 ? void 0 : y,
      p = Ln(Ln({}, d), s)
    return vw(n, function (g) {
      for (var v in p) g.addCase(v, p[v])
      for (var _ = 0, w = m; _ < w.length; _++) {
        var b = w[_]
        g.addMatcher(b.matcher, b.reducer)
      }
      x && g.addDefaultCase(x)
    })
  }
  var u
  return {
    name: t,
    reducer: function (c, f) {
      return u || (u = l()), u(c, f)
    },
    actions: a,
    caseReducers: o,
    getInitialState: function () {
      return u || (u = l()), u.getInitialState()
    },
  }
}
var ww = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  Sw = function (e) {
    e === void 0 && (e = 21)
    for (var t = "", n = e; n--; ) t += ww[(Math.random() * 64) | 0]
    return t
  },
  bw = ["name", "message", "stack", "code"],
  pu = (function () {
    function e(t, n) {
      ;(this.payload = t), (this.meta = n)
    }
    return e
  })(),
  Vh = (function () {
    function e(t, n) {
      ;(this.payload = t), (this.meta = n)
    }
    return e
  })(),
  kw = function (e) {
    if (typeof e == "object" && e !== null) {
      for (var t = {}, n = 0, i = bw; n < i.length; n++) {
        var r = i[n]
        typeof e[r] == "string" && (t[r] = e[r])
      }
      return t
    }
    return { message: String(e) }
  },
  uy = (function () {
    function e(t, n, i) {
      var r = Dn(t + "/fulfilled", function (u, c, f, d) {
          return {
            payload: u,
            meta: hu(Ln({}, d || {}), {
              arg: f,
              requestId: c,
              requestStatus: "fulfilled",
            }),
          }
        }),
        o = Dn(t + "/pending", function (u, c, f) {
          return {
            payload: void 0,
            meta: hu(Ln({}, f || {}), {
              arg: c,
              requestId: u,
              requestStatus: "pending",
            }),
          }
        }),
        s = Dn(t + "/rejected", function (u, c, f, d, h) {
          return {
            payload: d,
            error: ((i && i.serializeError) || kw)(u || "Rejected"),
            meta: hu(Ln({}, h || {}), {
              arg: f,
              requestId: c,
              rejectedWithValue: !!d,
              requestStatus: "rejected",
              aborted: (u == null ? void 0 : u.name) === "AbortError",
              condition: (u == null ? void 0 : u.name) === "ConditionError",
            }),
          }
        }),
        a =
          typeof AbortController < "u"
            ? AbortController
            : (function () {
                function u() {
                  this.signal = {
                    aborted: !1,
                    addEventListener: function () {},
                    dispatchEvent: function () {
                      return !1
                    },
                    onabort: function () {},
                    removeEventListener: function () {},
                    reason: void 0,
                    throwIfAborted: function () {},
                  }
                }
                return (u.prototype.abort = function () {}), u
              })()
      function l(u) {
        return function (c, f, d) {
          var h = i != null && i.idGenerator ? i.idGenerator(u) : Sw(),
            m = new a(),
            y
          function x(g) {
            ;(y = g), m.abort()
          }
          var p = (function () {
            return aw(this, null, function () {
              var g, v, _, w, b, S, k
              return tw(this, function (M) {
                switch (M.label) {
                  case 0:
                    return (
                      M.trys.push([0, 4, , 5]),
                      (w =
                        (g = i == null ? void 0 : i.condition) == null
                          ? void 0
                          : g.call(i, u, { getState: f, extra: d })),
                      Ew(w) ? [4, w] : [3, 2]
                    )
                  case 1:
                    ;(w = M.sent()), (M.label = 2)
                  case 2:
                    if (w === !1 || m.signal.aborted)
                      throw {
                        name: "ConditionError",
                        message:
                          "Aborted due to condition callback returning false.",
                      }
                    return (
                      (b = new Promise(function (E, A) {
                        return m.signal.addEventListener("abort", function () {
                          return A({
                            name: "AbortError",
                            message: y || "Aborted",
                          })
                        })
                      })),
                      c(
                        o(
                          h,
                          u,
                          (v = i == null ? void 0 : i.getPendingMeta) == null
                            ? void 0
                            : v.call(
                                i,
                                { requestId: h, arg: u },
                                { getState: f, extra: d },
                              ),
                        ),
                      ),
                      [
                        4,
                        Promise.race([
                          b,
                          Promise.resolve(
                            n(u, {
                              dispatch: c,
                              getState: f,
                              extra: d,
                              requestId: h,
                              signal: m.signal,
                              abort: x,
                              rejectWithValue: function (E, A) {
                                return new pu(E, A)
                              },
                              fulfillWithValue: function (E, A) {
                                return new Vh(E, A)
                              },
                            }),
                          ).then(function (E) {
                            if (E instanceof pu) throw E
                            return E instanceof Vh
                              ? r(E.payload, h, u, E.meta)
                              : r(E, h, u)
                          }),
                        ]),
                      ]
                    )
                  case 3:
                    return (_ = M.sent()), [3, 5]
                  case 4:
                    return (
                      (S = M.sent()),
                      (_ =
                        S instanceof pu
                          ? s(null, h, u, S.payload, S.meta)
                          : s(S, h, u)),
                      [3, 5]
                    )
                  case 5:
                    return (
                      (k =
                        i &&
                        !i.dispatchConditionRejection &&
                        s.match(_) &&
                        _.meta.condition),
                      k || c(_),
                      [2, _]
                    )
                }
              })
            })
          })()
          return Object.assign(p, {
            abort: x,
            requestId: h,
            arg: u,
            unwrap: function () {
              return p.then(Cw)
            },
          })
        }
      }
      return Object.assign(l, {
        pending: o,
        rejected: s,
        fulfilled: r,
        typePrefix: t,
      })
    }
    return (
      (e.withTypes = function () {
        return e
      }),
      e
    )
  })()
function Cw(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload
  if (e.error) throw e.error
  return e.payload
}
function Ew(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function"
}
var Zf = "listenerMiddleware"
Dn(Zf + "/add")
Dn(Zf + "/removeAll")
Dn(Zf + "/remove")
var Uh
typeof queueMicrotask == "function" &&
  queueMicrotask.bind(
    typeof window < "u" ? window : typeof global < "u" ? global : globalThis,
  )
H_()
let ss
const Pw = new Uint8Array(16)
function Mw() {
  if (
    !ss &&
    ((ss =
      typeof crypto < "u" &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto)),
    !ss)
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
    )
  return ss(Pw)
}
const Re = []
for (let e = 0; e < 256; ++e) Re.push((e + 256).toString(16).slice(1))
function Tw(e, t = 0) {
  return (
    Re[e[t + 0]] +
    Re[e[t + 1]] +
    Re[e[t + 2]] +
    Re[e[t + 3]] +
    "-" +
    Re[e[t + 4]] +
    Re[e[t + 5]] +
    "-" +
    Re[e[t + 6]] +
    Re[e[t + 7]] +
    "-" +
    Re[e[t + 8]] +
    Re[e[t + 9]] +
    "-" +
    Re[e[t + 10]] +
    Re[e[t + 11]] +
    Re[e[t + 12]] +
    Re[e[t + 13]] +
    Re[e[t + 14]] +
    Re[e[t + 15]]
  )
}
const Ow =
    typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  Yh = { randomUUID: Ow }
function Aw(e, t, n) {
  if (Yh.randomUUID && !t && !e) return Yh.randomUUID()
  e = e || {}
  const i = e.random || (e.rng || Mw)()
  if (((i[6] = (i[6] & 15) | 64), (i[8] = (i[8] & 63) | 128), t)) {
    n = n || 0
    for (let r = 0; r < 16; ++r) t[n + r] = i[r]
    return t
  }
  return Tw(i)
}
const cy = "https://crudcrud.com/api/ce5e8d595f7d4dabae37a0215b66a959",
  Rw = "https://api.openai.com/v1/chat/completions"
async function Kh(e, t) {
  const n = { model: t, messages: [{ role: "user", content: e.query }] },
    i = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + e.chatGptApiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(n),
    }
  return fetch(Rw, i)
}
function Lw(e) {
  const t = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e),
  }
  return fetch(`${cy}/review`, t)
}
function Dw() {
  const e = { method: "GET", headers: { "Content-Type": "application/json" } }
  return fetch(`${cy}/review`, e)
}
function fy(e) {
  var t,
    n,
    i = ""
  if (typeof e == "string" || typeof e == "number") i += e
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = fy(e[t])) && (i && (i += " "), (i += n))
    else for (t in e) e[t] && (i && (i += " "), (i += t))
  return i
}
function wn() {
  for (var e, t, n = 0, i = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = fy(e)) && (i && (i += " "), (i += t))
  return i
}
const Jr = (e) => typeof e == "number" && !isNaN(e),
  pi = (e) => typeof e == "string",
  Je = (e) => typeof e == "function",
  zs = (e) => (pi(e) || Je(e) ? e : null),
  gu = (e) => R.isValidElement(e) || pi(e) || Je(e) || Jr(e)
function Iw(e, t, n) {
  n === void 0 && (n = 300)
  const { scrollHeight: i, style: r } = e
  requestAnimationFrame(() => {
    ;(r.minHeight = "initial"),
      (r.height = i + "px"),
      (r.transition = `all ${n}ms`),
      requestAnimationFrame(() => {
        ;(r.height = "0"), (r.padding = "0"), (r.margin = "0"), setTimeout(t, n)
      })
  })
}
function Sl(e) {
  let {
    enter: t,
    exit: n,
    appendPosition: i = !1,
    collapse: r = !0,
    collapseDuration: o = 300,
  } = e
  return function (s) {
    let {
      children: a,
      position: l,
      preventExitTransition: u,
      done: c,
      nodeRef: f,
      isIn: d,
    } = s
    const h = i ? `${t}--${l}` : t,
      m = i ? `${n}--${l}` : n,
      y = R.useRef(0)
    return (
      R.useLayoutEffect(() => {
        const x = f.current,
          p = h.split(" "),
          g = (v) => {
            v.target === f.current &&
              (x.dispatchEvent(new Event("d")),
              x.removeEventListener("animationend", g),
              x.removeEventListener("animationcancel", g),
              y.current === 0 &&
                v.type !== "animationcancel" &&
                x.classList.remove(...p))
          }
        x.classList.add(...p),
          x.addEventListener("animationend", g),
          x.addEventListener("animationcancel", g)
      }, []),
      R.useEffect(() => {
        const x = f.current,
          p = () => {
            x.removeEventListener("animationend", p), r ? Iw(x, c, o) : c()
          }
        d ||
          (u
            ? p()
            : ((y.current = 1),
              (x.className += ` ${m}`),
              x.addEventListener("animationend", p)))
      }, [d]),
      H.createElement(H.Fragment, null, a)
    )
  }
}
function Xh(e, t) {
  return e != null
    ? {
        content: e.content,
        containerId: e.props.containerId,
        id: e.props.toastId,
        theme: e.props.theme,
        type: e.props.type,
        data: e.props.data || {},
        isLoading: e.props.isLoading,
        icon: e.props.icon,
        status: t,
      }
    : {}
}
const mt = {
    list: new Map(),
    emitQueue: new Map(),
    on(e, t) {
      return (
        this.list.has(e) || this.list.set(e, []), this.list.get(e).push(t), this
      )
    },
    off(e, t) {
      if (t) {
        const n = this.list.get(e).filter((i) => i !== t)
        return this.list.set(e, n), this
      }
      return this.list.delete(e), this
    },
    cancelEmit(e) {
      const t = this.emitQueue.get(e)
      return t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this
    },
    emit(e) {
      this.list.has(e) &&
        this.list.get(e).forEach((t) => {
          const n = setTimeout(() => {
            t(...[].slice.call(arguments, 1))
          }, 0)
          this.emitQueue.has(e) || this.emitQueue.set(e, []),
            this.emitQueue.get(e).push(n)
        })
    },
  },
  as = (e) => {
    let { theme: t, type: n, ...i } = e
    return H.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "100%",
      height: "100%",
      fill:
        t === "colored" ? "currentColor" : `var(--toastify-icon-color-${n})`,
      ...i,
    })
  },
  mu = {
    info: function (e) {
      return H.createElement(
        as,
        { ...e },
        H.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
        }),
      )
    },
    warning: function (e) {
      return H.createElement(
        as,
        { ...e },
        H.createElement("path", {
          d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
        }),
      )
    },
    success: function (e) {
      return H.createElement(
        as,
        { ...e },
        H.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
        }),
      )
    },
    error: function (e) {
      return H.createElement(
        as,
        { ...e },
        H.createElement("path", {
          d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
        }),
      )
    },
    spinner: function () {
      return H.createElement("div", { className: "Toastify__spinner" })
    },
  }
function zw(e) {
  const [, t] = R.useReducer((h) => h + 1, 0),
    [n, i] = R.useState([]),
    r = R.useRef(null),
    o = R.useRef(new Map()).current,
    s = (h) => n.indexOf(h) !== -1,
    a = R.useRef({
      toastKey: 1,
      displayedToast: 0,
      count: 0,
      queue: [],
      props: e,
      containerId: null,
      isToastActive: s,
      getToast: (h) => o.get(h),
    }).current
  function l(h) {
    let { containerId: m } = h
    const { limit: y } = a.props
    !y ||
      (m && a.containerId !== m) ||
      ((a.count -= a.queue.length), (a.queue = []))
  }
  function u(h) {
    i((m) => (h == null ? [] : m.filter((y) => y !== h)))
  }
  function c() {
    const { toastContent: h, toastProps: m, staleId: y } = a.queue.shift()
    d(h, m, y)
  }
  function f(h, m) {
    let { delay: y, staleId: x, ...p } = m
    if (
      !gu(h) ||
      (function (L) {
        return (
          !r.current ||
          (a.props.enableMultiContainer &&
            L.containerId !== a.props.containerId) ||
          (o.has(L.toastId) && L.updateId == null)
        )
      })(p)
    )
      return
    const { toastId: g, updateId: v, data: _ } = p,
      { props: w } = a,
      b = () => u(g),
      S = v == null
    S && a.count++
    const k = {
      ...w,
      style: w.toastStyle,
      key: a.toastKey++,
      ...Object.fromEntries(
        Object.entries(p).filter((L) => {
          let [W, U] = L
          return U != null
        }),
      ),
      toastId: g,
      updateId: v,
      data: _,
      closeToast: b,
      isIn: !1,
      className: zs(p.className || w.toastClassName),
      bodyClassName: zs(p.bodyClassName || w.bodyClassName),
      progressClassName: zs(p.progressClassName || w.progressClassName),
      autoClose:
        !p.isLoading &&
        ((M = p.autoClose),
        (E = w.autoClose),
        M === !1 || (Jr(M) && M > 0) ? M : E),
      deleteToast() {
        const L = Xh(o.get(g), "removed")
        o.delete(g), mt.emit(4, L)
        const W = a.queue.length
        if (
          ((a.count = g == null ? a.count - a.displayedToast : a.count - 1),
          a.count < 0 && (a.count = 0),
          W > 0)
        ) {
          const U = g == null ? a.props.limit : 1
          if (W === 1 || U === 1) a.displayedToast++, c()
          else {
            const F = U > W ? W : U
            a.displayedToast = F
            for (let N = 0; N < F; N++) c()
          }
        } else t()
      },
    }
    var M, E
    ;(k.iconOut = (function (L) {
      let { theme: W, type: U, isLoading: F, icon: N } = L,
        $ = null
      const P = { theme: W, type: U }
      return (
        N === !1 ||
          (Je(N)
            ? ($ = N(P))
            : R.isValidElement(N)
            ? ($ = R.cloneElement(N, P))
            : pi(N) || Jr(N)
            ? ($ = N)
            : F
            ? ($ = mu.spinner())
            : ((T) => T in mu)(U) && ($ = mu[U](P))),
        $
      )
    })(k)),
      Je(p.onOpen) && (k.onOpen = p.onOpen),
      Je(p.onClose) && (k.onClose = p.onClose),
      (k.closeButton = w.closeButton),
      p.closeButton === !1 || gu(p.closeButton)
        ? (k.closeButton = p.closeButton)
        : p.closeButton === !0 &&
          (k.closeButton = !gu(w.closeButton) || w.closeButton)
    let A = h
    R.isValidElement(h) && !pi(h.type)
      ? (A = R.cloneElement(h, { closeToast: b, toastProps: k, data: _ }))
      : Je(h) && (A = h({ closeToast: b, toastProps: k, data: _ })),
      w.limit && w.limit > 0 && a.count > w.limit && S
        ? a.queue.push({ toastContent: A, toastProps: k, staleId: x })
        : Jr(y)
        ? setTimeout(() => {
            d(A, k, x)
          }, y)
        : d(A, k, x)
  }
  function d(h, m, y) {
    const { toastId: x } = m
    y && o.delete(y)
    const p = { content: h, props: m }
    o.set(x, p),
      i((g) => [...g, x].filter((v) => v !== y)),
      mt.emit(4, Xh(p, p.props.updateId == null ? "added" : "updated"))
  }
  return (
    R.useEffect(
      () => (
        (a.containerId = e.containerId),
        mt
          .cancelEmit(3)
          .on(0, f)
          .on(1, (h) => r.current && u(h))
          .on(5, l)
          .emit(2, a),
        () => {
          o.clear(), mt.emit(3, a)
        }
      ),
      [],
    ),
    R.useEffect(() => {
      ;(a.props = e), (a.isToastActive = s), (a.displayedToast = n.length)
    }),
    {
      getToastToRender: function (h) {
        const m = new Map(),
          y = Array.from(o.values())
        return (
          e.newestOnTop && y.reverse(),
          y.forEach((x) => {
            const { position: p } = x.props
            m.has(p) || m.set(p, []), m.get(p).push(x)
          }),
          Array.from(m, (x) => h(x[0], x[1]))
        )
      },
      containerRef: r,
      isToastActive: s,
    }
  )
}
function Qh(e) {
  return e.targetTouches && e.targetTouches.length >= 1
    ? e.targetTouches[0].clientX
    : e.clientX
}
function Gh(e) {
  return e.targetTouches && e.targetTouches.length >= 1
    ? e.targetTouches[0].clientY
    : e.clientY
}
function Nw(e) {
  const [t, n] = R.useState(!1),
    [i, r] = R.useState(!1),
    o = R.useRef(null),
    s = R.useRef({
      start: 0,
      x: 0,
      y: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      boundingRect: null,
      didMove: !1,
    }).current,
    a = R.useRef(e),
    {
      autoClose: l,
      pauseOnHover: u,
      closeToast: c,
      onClick: f,
      closeOnClick: d,
    } = e
  function h(_) {
    if (e.draggable) {
      _.nativeEvent.type === "touchstart" && _.nativeEvent.preventDefault(),
        (s.didMove = !1),
        document.addEventListener("mousemove", p),
        document.addEventListener("mouseup", g),
        document.addEventListener("touchmove", p),
        document.addEventListener("touchend", g)
      const w = o.current
      ;(s.canCloseOnClick = !0),
        (s.canDrag = !0),
        (s.boundingRect = w.getBoundingClientRect()),
        (w.style.transition = ""),
        (s.x = Qh(_.nativeEvent)),
        (s.y = Gh(_.nativeEvent)),
        e.draggableDirection === "x"
          ? ((s.start = s.x),
            (s.removalDistance = w.offsetWidth * (e.draggablePercent / 100)))
          : ((s.start = s.y),
            (s.removalDistance =
              w.offsetHeight *
              (e.draggablePercent === 80
                ? 1.5 * e.draggablePercent
                : e.draggablePercent / 100)))
    }
  }
  function m(_) {
    if (s.boundingRect) {
      const { top: w, bottom: b, left: S, right: k } = s.boundingRect
      _.nativeEvent.type !== "touchend" &&
      e.pauseOnHover &&
      s.x >= S &&
      s.x <= k &&
      s.y >= w &&
      s.y <= b
        ? x()
        : y()
    }
  }
  function y() {
    n(!0)
  }
  function x() {
    n(!1)
  }
  function p(_) {
    const w = o.current
    s.canDrag &&
      w &&
      ((s.didMove = !0),
      t && x(),
      (s.x = Qh(_)),
      (s.y = Gh(_)),
      (s.delta = e.draggableDirection === "x" ? s.x - s.start : s.y - s.start),
      s.start !== s.x && (s.canCloseOnClick = !1),
      (w.style.transform = `translate${e.draggableDirection}(${s.delta}px)`),
      (w.style.opacity = "" + (1 - Math.abs(s.delta / s.removalDistance))))
  }
  function g() {
    document.removeEventListener("mousemove", p),
      document.removeEventListener("mouseup", g),
      document.removeEventListener("touchmove", p),
      document.removeEventListener("touchend", g)
    const _ = o.current
    if (s.canDrag && s.didMove && _) {
      if (((s.canDrag = !1), Math.abs(s.delta) > s.removalDistance))
        return r(!0), void e.closeToast()
      ;(_.style.transition = "transform 0.2s, opacity 0.2s"),
        (_.style.transform = `translate${e.draggableDirection}(0)`),
        (_.style.opacity = "1")
    }
  }
  R.useEffect(() => {
    a.current = e
  }),
    R.useEffect(
      () => (
        o.current && o.current.addEventListener("d", y, { once: !0 }),
        Je(e.onOpen) &&
          e.onOpen(R.isValidElement(e.children) && e.children.props),
        () => {
          const _ = a.current
          Je(_.onClose) &&
            _.onClose(R.isValidElement(_.children) && _.children.props)
        }
      ),
      [],
    ),
    R.useEffect(
      () => (
        e.pauseOnFocusLoss &&
          (document.hasFocus() || x(),
          window.addEventListener("focus", y),
          window.addEventListener("blur", x)),
        () => {
          e.pauseOnFocusLoss &&
            (window.removeEventListener("focus", y),
            window.removeEventListener("blur", x))
        }
      ),
      [e.pauseOnFocusLoss],
    )
  const v = { onMouseDown: h, onTouchStart: h, onMouseUp: m, onTouchEnd: m }
  return (
    l && u && ((v.onMouseEnter = x), (v.onMouseLeave = y)),
    d &&
      (v.onClick = (_) => {
        f && f(_), s.canCloseOnClick && c()
      }),
    {
      playToast: y,
      pauseToast: x,
      isRunning: t,
      preventExitTransition: i,
      toastRef: o,
      eventHandlers: v,
    }
  )
}
function dy(e) {
  let { closeToast: t, theme: n, ariaLabel: i = "close" } = e
  return H.createElement(
    "button",
    {
      className: `Toastify__close-button Toastify__close-button--${n}`,
      type: "button",
      onClick: (r) => {
        r.stopPropagation(), t(r)
      },
      "aria-label": i,
    },
    H.createElement(
      "svg",
      { "aria-hidden": "true", viewBox: "0 0 14 16" },
      H.createElement("path", {
        fillRule: "evenodd",
        d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
      }),
    ),
  )
}
function $w(e) {
  let {
    delay: t,
    isRunning: n,
    closeToast: i,
    type: r = "default",
    hide: o,
    className: s,
    style: a,
    controlledProgress: l,
    progress: u,
    rtl: c,
    isIn: f,
    theme: d,
  } = e
  const h = o || (l && u === 0),
    m = {
      ...a,
      animationDuration: `${t}ms`,
      animationPlayState: n ? "running" : "paused",
      opacity: h ? 0 : 1,
    }
  l && (m.transform = `scaleX(${u})`)
  const y = wn(
      "Toastify__progress-bar",
      l
        ? "Toastify__progress-bar--controlled"
        : "Toastify__progress-bar--animated",
      `Toastify__progress-bar-theme--${d}`,
      `Toastify__progress-bar--${r}`,
      { "Toastify__progress-bar--rtl": c },
    ),
    x = Je(s) ? s({ rtl: c, type: r, defaultClassName: y }) : wn(y, s)
  return H.createElement("div", {
    role: "progressbar",
    "aria-hidden": h ? "true" : "false",
    "aria-label": "notification timer",
    className: x,
    style: m,
    [l && u >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
      l && u < 1
        ? null
        : () => {
            f && i()
          },
  })
}
const Fw = (e) => {
    const {
        isRunning: t,
        preventExitTransition: n,
        toastRef: i,
        eventHandlers: r,
      } = Nw(e),
      {
        closeButton: o,
        children: s,
        autoClose: a,
        onClick: l,
        type: u,
        hideProgressBar: c,
        closeToast: f,
        transition: d,
        position: h,
        className: m,
        style: y,
        bodyClassName: x,
        bodyStyle: p,
        progressClassName: g,
        progressStyle: v,
        updateId: _,
        role: w,
        progress: b,
        rtl: S,
        toastId: k,
        deleteToast: M,
        isIn: E,
        isLoading: A,
        iconOut: L,
        closeOnClick: W,
        theme: U,
      } = e,
      F = wn(
        "Toastify__toast",
        `Toastify__toast-theme--${U}`,
        `Toastify__toast--${u}`,
        { "Toastify__toast--rtl": S },
        { "Toastify__toast--close-on-click": W },
      ),
      N = Je(m)
        ? m({ rtl: S, position: h, type: u, defaultClassName: F })
        : wn(F, m),
      $ = !!b || !a,
      P = { closeToast: f, type: u, theme: U }
    let T = null
    return (
      o === !1 ||
        (T = Je(o) ? o(P) : R.isValidElement(o) ? R.cloneElement(o, P) : dy(P)),
      H.createElement(
        d,
        { isIn: E, done: M, position: h, preventExitTransition: n, nodeRef: i },
        H.createElement(
          "div",
          { id: k, onClick: l, className: N, ...r, style: y, ref: i },
          H.createElement(
            "div",
            {
              ...(E && { role: w }),
              className: Je(x) ? x({ type: u }) : wn("Toastify__toast-body", x),
              style: p,
            },
            L != null &&
              H.createElement(
                "div",
                {
                  className: wn("Toastify__toast-icon", {
                    "Toastify--animate-icon Toastify__zoom-enter": !A,
                  }),
                },
                L,
              ),
            H.createElement("div", null, s),
          ),
          T,
          H.createElement($w, {
            ...(_ && !$ ? { key: `pb-${_}` } : {}),
            rtl: S,
            theme: U,
            delay: a,
            isRunning: t,
            isIn: E,
            closeToast: f,
            hide: c,
            type: u,
            style: v,
            className: g,
            controlledProgress: $,
            progress: b || 0,
          }),
        ),
      )
    )
  },
  bl = function (e, t) {
    return (
      t === void 0 && (t = !1),
      {
        enter: `Toastify--animate Toastify__${e}-enter`,
        exit: `Toastify--animate Toastify__${e}-exit`,
        appendPosition: t,
      }
    )
  },
  jw = Sl(bl("bounce", !0))
Sl(bl("slide", !0))
Sl(bl("zoom"))
Sl(bl("flip"))
const Tc = R.forwardRef((e, t) => {
  const { getToastToRender: n, containerRef: i, isToastActive: r } = zw(e),
    { className: o, style: s, rtl: a, containerId: l } = e
  function u(c) {
    const f = wn(
      "Toastify__toast-container",
      `Toastify__toast-container--${c}`,
      { "Toastify__toast-container--rtl": a },
    )
    return Je(o)
      ? o({ position: c, rtl: a, defaultClassName: f })
      : wn(f, zs(o))
  }
  return (
    R.useEffect(() => {
      t && (t.current = i.current)
    }, []),
    H.createElement(
      "div",
      { ref: i, className: "Toastify", id: l },
      n((c, f) => {
        const d = f.length ? { ...s } : { ...s, pointerEvents: "none" }
        return H.createElement(
          "div",
          { className: u(c), style: d, key: `container-${c}` },
          f.map((h, m) => {
            let { content: y, props: x } = h
            return H.createElement(
              Fw,
              {
                ...x,
                isIn: r(x.toastId),
                style: { ...x.style, "--nth": m + 1, "--len": f.length },
                key: `toast-${x.key}`,
              },
              y,
            )
          }),
        )
      }),
    )
  )
})
;(Tc.displayName = "ToastContainer"),
  (Tc.defaultProps = {
    position: "top-right",
    transition: jw,
    autoClose: 5e3,
    closeButton: dy,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    closeOnClick: !0,
    draggable: !0,
    draggablePercent: 80,
    draggableDirection: "x",
    role: "alert",
    theme: "light",
  })
let yu,
  qn = new Map(),
  zr = [],
  Bw = 1
function hy() {
  return "" + Bw++
}
function Ww(e) {
  return e && (pi(e.toastId) || Jr(e.toastId)) ? e.toastId : hy()
}
function eo(e, t) {
  return (
    qn.size > 0 ? mt.emit(0, e, t) : zr.push({ content: e, options: t }),
    t.toastId
  )
}
function wa(e, t) {
  return { ...t, type: (t && t.type) || e, toastId: Ww(t) }
}
function ls(e) {
  return (t, n) => eo(t, wa(e, n))
}
function se(e, t) {
  return eo(e, wa("default", t))
}
;(se.loading = (e, t) =>
  eo(
    e,
    wa("default", {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...t,
    }),
  )),
  (se.promise = function (e, t, n) {
    let i,
      { pending: r, error: o, success: s } = t
    r && (i = pi(r) ? se.loading(r, n) : se.loading(r.render, { ...n, ...r }))
    const a = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null,
      },
      l = (c, f, d) => {
        if (f == null) return void se.dismiss(i)
        const h = { type: c, ...a, ...n, data: d },
          m = pi(f) ? { render: f } : f
        return (
          i ? se.update(i, { ...h, ...m }) : se(m.render, { ...h, ...m }), d
        )
      },
      u = Je(e) ? e() : e
    return u.then((c) => l("success", s, c)).catch((c) => l("error", o, c)), u
  }),
  (se.success = ls("success")),
  (se.info = ls("info")),
  (se.error = ls("error")),
  (se.warning = ls("warning")),
  (se.warn = se.warning),
  (se.dark = (e, t) => eo(e, wa("default", { theme: "dark", ...t }))),
  (se.dismiss = (e) => {
    qn.size > 0
      ? mt.emit(1, e)
      : (zr = zr.filter((t) => e != null && t.options.toastId !== e))
  }),
  (se.clearWaitingQueue = function (e) {
    return e === void 0 && (e = {}), mt.emit(5, e)
  }),
  (se.isActive = (e) => {
    let t = !1
    return (
      qn.forEach((n) => {
        n.isToastActive && n.isToastActive(e) && (t = !0)
      }),
      t
    )
  }),
  (se.update = function (e, t) {
    t === void 0 && (t = {}),
      setTimeout(() => {
        const n = (function (i, r) {
          let { containerId: o } = r
          const s = qn.get(o || yu)
          return s && s.getToast(i)
        })(e, t)
        if (n) {
          const { props: i, content: r } = n,
            o = {
              delay: 100,
              ...i,
              ...t,
              toastId: t.toastId || e,
              updateId: hy(),
            }
          o.toastId !== e && (o.staleId = e)
          const s = o.render || r
          delete o.render, eo(s, o)
        }
      }, 0)
  }),
  (se.done = (e) => {
    se.update(e, { progress: 1 })
  }),
  (se.onChange = (e) => (
    mt.on(4, e),
    () => {
      mt.off(4, e)
    }
  )),
  (se.POSITION = {
    TOP_LEFT: "top-left",
    TOP_RIGHT: "top-right",
    TOP_CENTER: "top-center",
    BOTTOM_LEFT: "bottom-left",
    BOTTOM_RIGHT: "bottom-right",
    BOTTOM_CENTER: "bottom-center",
  }),
  (se.TYPE = {
    INFO: "info",
    SUCCESS: "success",
    WARNING: "warning",
    ERROR: "error",
    DEFAULT: "default",
  }),
  mt
    .on(2, (e) => {
      ;(yu = e.containerId || e),
        qn.set(yu, e),
        zr.forEach((t) => {
          mt.emit(0, t.content, t.options)
        }),
        (zr = [])
    })
    .on(3, (e) => {
      qn.delete(e.containerId || e), qn.size === 0 && mt.off(0).off(1).off(5)
    })
const Jf = (e) => {
  se.error(e, {
    position: "top-right",
    autoClose: 5e3,
    hideProgressBar: !1,
    closeOnClick: !0,
    pauseOnHover: !0,
    draggable: !0,
    progress: void 0,
    theme: "colored",
  })
}
function Hw(e, t) {
  return new Promise((n, i) => {
    let r = [],
      o = 0
    e.forEach(async (s, a) => {
      try {
        let l = await s
        const u = Date.now()
        let c = await l.json()
        r[a] = { elapseTimeMs: u - t, response: c }
      } catch (l) {
        console.log("error: ", l), i(l)
      }
      o++, o === e.length && n(r)
    })
  })
}
const Vw = (e) => {
    const t = []
    return (
      e.forEach((n) => {
        const i = t.findIndex((r) => r.name === n.bestModel)
        i === -1 ? t.push({ name: n.bestModel, value: 1 }) : t[i].value++
      }),
      t
    )
  },
  Uw = {
    globalStep: 0,
    userId: Aw(),
    chatGptApiKey: "",
    query: "",
    gptThreeAnswer: "",
    gptThreeAnswerTime: 0,
    gptFourAnswer: "",
    gptFourAnswerTime: 0,
    askApisStatus: "idle",
    askReviewStatus: "idle",
    bestModel: "none",
    stats: [
      { name: "gpt-3.5-turbo", value: 0 },
      { name: "gpt-4", value: 0 },
    ],
  },
  Ns = uy("counter/fetchAskIa", async (e) => {
    try {
      const t = Date.now(),
        n = [Kh(e, "gpt-3.5-turbo"), Kh(e, "gpt-4")],
        i = await Hw(n, t)
      return console.log("apisCallResults: ", i), i
    } catch {
      Jf("Error connecting with APIs")
    }
  }),
  $s = uy("counter/fetchRevew", async (e) => {
    try {
      const n = await (await Lw(e)).json()
      console.log("fetchSendReview response: ", n)
      const r = await (await Dw()).json()
      return console.log("fetchGetReviews response: ", r), r
    } catch (t) {
      console.log("error in fetchSendReview: ", t),
        Jf("Error sending your review")
    }
  }),
  py = _w({
    name: "compare",
    initialState: Uw,
    reducers: {
      setUserId: (e, t) => {
        e.userId = t.payload
      },
      setChatGptApiKey: (e, t) => {
        e.chatGptApiKey = t.payload
      },
      setQuery: (e, t) => {
        e.query = t.payload
      },
      setGptThreeAnswer: (e, t) => {
        e.gptThreeAnswer = t.payload
      },
      setGptFourAnswer: (e, t) => {
        e.gptFourAnswer = t.payload
      },
      setBestModel: (e, t) => {
        e.bestModel = t.payload
      },
    },
    extraReducers: (e) => {
      e.addCase(Ns.pending, (t) => {
        t.askApisStatus = "loading"
      })
        .addCase(Ns.fulfilled, (t, n) => {
          console.log("action.payload: ", n.payload),
            n.payload && n.payload[0].response.choices
              ? (console.log(
                  "action.payload...content: ",
                  n.payload[0].response.choices[0].message.content,
                ),
                (t.gptThreeAnswer =
                  n.payload[0].response.choices[0].message.content),
                (t.gptThreeAnswerTime = n.payload[0].elapseTimeMs),
                (t.gptFourAnswer =
                  n.payload[1].response.choices[0].message.content),
                (t.gptFourAnswerTime = n.payload[1].elapseTimeMs),
                (t.globalStep = 1))
              : Jf("Error with APIs response"),
            (t.askApisStatus = "idle")
        })
        .addCase(Ns.rejected, (t) => {
          t.askApisStatus = "failed"
        })
        .addCase($s.pending, (t) => {
          t.askReviewStatus = "loading"
        })
        .addCase($s.fulfilled, (t, n) => {
          console.log(n.payload),
            (t.stats = Vw(n.payload)),
            (t.globalStep = 2),
            (t.askReviewStatus = "idle")
        })
        .addCase($s.rejected, (t) => {
          t.askReviewStatus = "failed"
        })
    },
  }),
  {
    setUserId: lE,
    setChatGptApiKey: Yw,
    setQuery: Kw,
    setGptThreeAnswer: uE,
    setGptFourAnswer: cE,
    setBestModel: qh,
  } = py.actions,
  Xw = (e) => e.compare.userId,
  Qw = (e) => e.compare.chatGptApiKey,
  Gw = (e) => e.compare.query,
  qw = (e) => e.compare.gptThreeAnswer,
  Zw = (e) => e.compare.gptFourAnswer,
  Jw = (e) => e.compare.askApisStatus,
  eS = (e) => e.compare.bestModel,
  tS = (e) => e.compare.gptThreeAnswerTime,
  nS = (e) => e.compare.gptFourAnswerTime,
  iS = (e) => e.compare.stats,
  rS = (e) => e.compare.globalStep,
  oS = py.reducer,
  sS = mw({ reducer: { compare: oS } })
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */ function $o(e) {
  return (e + 0.5) | 0
}
const Sn = (e, t, n) => Math.max(Math.min(e, n), t)
function Nr(e) {
  return Sn($o(e * 2.55), 0, 255)
}
function In(e) {
  return Sn($o(e * 255), 0, 255)
}
function Jt(e) {
  return Sn($o(e / 2.55) / 100, 0, 1)
}
function Zh(e) {
  return Sn($o(e * 100), 0, 100)
}
const gt = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  Oc = [..."0123456789ABCDEF"],
  aS = (e) => Oc[e & 15],
  lS = (e) => Oc[(e & 240) >> 4] + Oc[e & 15],
  us = (e) => (e & 240) >> 4 === (e & 15),
  uS = (e) => us(e.r) && us(e.g) && us(e.b) && us(e.a)
function cS(e) {
  var t = e.length,
    n
  return (
    e[0] === "#" &&
      (t === 4 || t === 5
        ? (n = {
            r: 255 & (gt[e[1]] * 17),
            g: 255 & (gt[e[2]] * 17),
            b: 255 & (gt[e[3]] * 17),
            a: t === 5 ? gt[e[4]] * 17 : 255,
          })
        : (t === 7 || t === 9) &&
          (n = {
            r: (gt[e[1]] << 4) | gt[e[2]],
            g: (gt[e[3]] << 4) | gt[e[4]],
            b: (gt[e[5]] << 4) | gt[e[6]],
            a: t === 9 ? (gt[e[7]] << 4) | gt[e[8]] : 255,
          })),
    n
  )
}
const fS = (e, t) => (e < 255 ? t(e) : "")
function dS(e) {
  var t = uS(e) ? aS : lS
  return e ? "#" + t(e.r) + t(e.g) + t(e.b) + fS(e.a, t) : void 0
}
const hS =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/
function gy(e, t, n) {
  const i = t * Math.min(n, 1 - n),
    r = (o, s = (o + e / 30) % 12) =>
      n - i * Math.max(Math.min(s - 3, 9 - s, 1), -1)
  return [r(0), r(8), r(4)]
}
function pS(e, t, n) {
  const i = (r, o = (r + e / 60) % 6) =>
    n - n * t * Math.max(Math.min(o, 4 - o, 1), 0)
  return [i(5), i(3), i(1)]
}
function gS(e, t, n) {
  const i = gy(e, 1, 0.5)
  let r
  for (t + n > 1 && ((r = 1 / (t + n)), (t *= r), (n *= r)), r = 0; r < 3; r++)
    (i[r] *= 1 - t - n), (i[r] += t)
  return i
}
function mS(e, t, n, i, r) {
  return e === r
    ? (t - n) / i + (t < n ? 6 : 0)
    : t === r
    ? (n - e) / i + 2
    : (e - t) / i + 4
}
function ed(e) {
  const n = e.r / 255,
    i = e.g / 255,
    r = e.b / 255,
    o = Math.max(n, i, r),
    s = Math.min(n, i, r),
    a = (o + s) / 2
  let l, u, c
  return (
    o !== s &&
      ((c = o - s),
      (u = a > 0.5 ? c / (2 - o - s) : c / (o + s)),
      (l = mS(n, i, r, c, o)),
      (l = l * 60 + 0.5)),
    [l | 0, u || 0, a]
  )
}
function td(e, t, n, i) {
  return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, i)).map(In)
}
function nd(e, t, n) {
  return td(gy, e, t, n)
}
function yS(e, t, n) {
  return td(gS, e, t, n)
}
function vS(e, t, n) {
  return td(pS, e, t, n)
}
function my(e) {
  return ((e % 360) + 360) % 360
}
function xS(e) {
  const t = hS.exec(e)
  let n = 255,
    i
  if (!t) return
  t[5] !== i && (n = t[6] ? Nr(+t[5]) : In(+t[5]))
  const r = my(+t[2]),
    o = +t[3] / 100,
    s = +t[4] / 100
  return (
    t[1] === "hwb"
      ? (i = yS(r, o, s))
      : t[1] === "hsv"
      ? (i = vS(r, o, s))
      : (i = nd(r, o, s)),
    { r: i[0], g: i[1], b: i[2], a: n }
  )
}
function _S(e, t) {
  var n = ed(e)
  ;(n[0] = my(n[0] + t)), (n = nd(n)), (e.r = n[0]), (e.g = n[1]), (e.b = n[2])
}
function wS(e) {
  if (!e) return
  const t = ed(e),
    n = t[0],
    i = Zh(t[1]),
    r = Zh(t[2])
  return e.a < 255
    ? `hsla(${n}, ${i}%, ${r}%, ${Jt(e.a)})`
    : `hsl(${n}, ${i}%, ${r}%)`
}
const Jh = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh",
  },
  ep = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32",
  }
function SS() {
  const e = {},
    t = Object.keys(ep),
    n = Object.keys(Jh)
  let i, r, o, s, a
  for (i = 0; i < t.length; i++) {
    for (s = a = t[i], r = 0; r < n.length; r++)
      (o = n[r]), (a = a.replace(o, Jh[o]))
    ;(o = parseInt(ep[s], 16)),
      (e[a] = [(o >> 16) & 255, (o >> 8) & 255, o & 255])
  }
  return e
}
let cs
function bS(e) {
  cs || ((cs = SS()), (cs.transparent = [0, 0, 0, 0]))
  const t = cs[e.toLowerCase()]
  return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 }
}
const kS =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/
function CS(e) {
  const t = kS.exec(e)
  let n = 255,
    i,
    r,
    o
  if (t) {
    if (t[7] !== i) {
      const s = +t[7]
      n = t[8] ? Nr(s) : Sn(s * 255, 0, 255)
    }
    return (
      (i = +t[1]),
      (r = +t[3]),
      (o = +t[5]),
      (i = 255 & (t[2] ? Nr(i) : Sn(i, 0, 255))),
      (r = 255 & (t[4] ? Nr(r) : Sn(r, 0, 255))),
      (o = 255 & (t[6] ? Nr(o) : Sn(o, 0, 255))),
      { r: i, g: r, b: o, a: n }
    )
  }
}
function ES(e) {
  return (
    e &&
    (e.a < 255
      ? `rgba(${e.r}, ${e.g}, ${e.b}, ${Jt(e.a)})`
      : `rgb(${e.r}, ${e.g}, ${e.b})`)
  )
}
const vu = (e) =>
    e <= 0.0031308 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055,
  wi = (e) => (e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4))
function PS(e, t, n) {
  const i = wi(Jt(e.r)),
    r = wi(Jt(e.g)),
    o = wi(Jt(e.b))
  return {
    r: In(vu(i + n * (wi(Jt(t.r)) - i))),
    g: In(vu(r + n * (wi(Jt(t.g)) - r))),
    b: In(vu(o + n * (wi(Jt(t.b)) - o))),
    a: e.a + n * (t.a - e.a),
  }
}
function fs(e, t, n) {
  if (e) {
    let i = ed(e)
    ;(i[t] = Math.max(0, Math.min(i[t] + i[t] * n, t === 0 ? 360 : 1))),
      (i = nd(i)),
      (e.r = i[0]),
      (e.g = i[1]),
      (e.b = i[2])
  }
}
function yy(e, t) {
  return e && Object.assign(t || {}, e)
}
function tp(e) {
  var t = { r: 0, g: 0, b: 0, a: 255 }
  return (
    Array.isArray(e)
      ? e.length >= 3 &&
        ((t = { r: e[0], g: e[1], b: e[2], a: 255 }),
        e.length > 3 && (t.a = In(e[3])))
      : ((t = yy(e, { r: 0, g: 0, b: 0, a: 1 })), (t.a = In(t.a))),
    t
  )
}
function MS(e) {
  return e.charAt(0) === "r" ? CS(e) : xS(e)
}
class Po {
  constructor(t) {
    if (t instanceof Po) return t
    const n = typeof t
    let i
    n === "object"
      ? (i = tp(t))
      : n === "string" && (i = cS(t) || bS(t) || MS(t)),
      (this._rgb = i),
      (this._valid = !!i)
  }
  get valid() {
    return this._valid
  }
  get rgb() {
    var t = yy(this._rgb)
    return t && (t.a = Jt(t.a)), t
  }
  set rgb(t) {
    this._rgb = tp(t)
  }
  rgbString() {
    return this._valid ? ES(this._rgb) : void 0
  }
  hexString() {
    return this._valid ? dS(this._rgb) : void 0
  }
  hslString() {
    return this._valid ? wS(this._rgb) : void 0
  }
  mix(t, n) {
    if (t) {
      const i = this.rgb,
        r = t.rgb
      let o
      const s = n === o ? 0.5 : n,
        a = 2 * s - 1,
        l = i.a - r.a,
        u = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2
      ;(o = 1 - u),
        (i.r = 255 & (u * i.r + o * r.r + 0.5)),
        (i.g = 255 & (u * i.g + o * r.g + 0.5)),
        (i.b = 255 & (u * i.b + o * r.b + 0.5)),
        (i.a = s * i.a + (1 - s) * r.a),
        (this.rgb = i)
    }
    return this
  }
  interpolate(t, n) {
    return t && (this._rgb = PS(this._rgb, t._rgb, n)), this
  }
  clone() {
    return new Po(this.rgb)
  }
  alpha(t) {
    return (this._rgb.a = In(t)), this
  }
  clearer(t) {
    const n = this._rgb
    return (n.a *= 1 - t), this
  }
  greyscale() {
    const t = this._rgb,
      n = $o(t.r * 0.3 + t.g * 0.59 + t.b * 0.11)
    return (t.r = t.g = t.b = n), this
  }
  opaquer(t) {
    const n = this._rgb
    return (n.a *= 1 + t), this
  }
  negate() {
    const t = this._rgb
    return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this
  }
  lighten(t) {
    return fs(this._rgb, 2, t), this
  }
  darken(t) {
    return fs(this._rgb, 2, -t), this
  }
  saturate(t) {
    return fs(this._rgb, 1, t), this
  }
  desaturate(t) {
    return fs(this._rgb, 1, -t), this
  }
  rotate(t) {
    return _S(this._rgb, t), this
  }
}
/*!
 * Chart.js v4.4.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */ function Kt() {}
const TS = (() => {
  let e = 0
  return () => e++
})()
function ce(e) {
  return e === null || typeof e > "u"
}
function pe(e) {
  if (Array.isArray && Array.isArray(e)) return !0
  const t = Object.prototype.toString.call(e)
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]"
}
function Y(e) {
  return e !== null && Object.prototype.toString.call(e) === "[object Object]"
}
function Me(e) {
  return (typeof e == "number" || e instanceof Number) && isFinite(+e)
}
function ot(e, t) {
  return Me(e) ? e : t
}
function X(e, t) {
  return typeof e > "u" ? t : e
}
const OS = (e, t) =>
    typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 : +e / t,
  vy = (e, t) =>
    typeof e == "string" && e.endsWith("%") ? (parseFloat(e) / 100) * t : +e
function te(e, t, n) {
  if (e && typeof e.call == "function") return e.apply(n, t)
}
function q(e, t, n, i) {
  let r, o, s
  if (pe(e))
    if (((o = e.length), i)) for (r = o - 1; r >= 0; r--) t.call(n, e[r], r)
    else for (r = 0; r < o; r++) t.call(n, e[r], r)
  else if (Y(e))
    for (s = Object.keys(e), o = s.length, r = 0; r < o; r++)
      t.call(n, e[s[r]], s[r])
}
function Sa(e, t) {
  let n, i, r, o
  if (!e || !t || e.length !== t.length) return !1
  for (n = 0, i = e.length; n < i; ++n)
    if (
      ((r = e[n]),
      (o = t[n]),
      r.datasetIndex !== o.datasetIndex || r.index !== o.index)
    )
      return !1
  return !0
}
function ba(e) {
  if (pe(e)) return e.map(ba)
  if (Y(e)) {
    const t = Object.create(null),
      n = Object.keys(e),
      i = n.length
    let r = 0
    for (; r < i; ++r) t[n[r]] = ba(e[n[r]])
    return t
  }
  return e
}
function xy(e) {
  return ["__proto__", "prototype", "constructor"].indexOf(e) === -1
}
function AS(e, t, n, i) {
  if (!xy(e)) return
  const r = t[e],
    o = n[e]
  Y(r) && Y(o) ? Mo(r, o, i) : (t[e] = ba(o))
}
function Mo(e, t, n) {
  const i = pe(t) ? t : [t],
    r = i.length
  if (!Y(e)) return e
  n = n || {}
  const o = n.merger || AS
  let s
  for (let a = 0; a < r; ++a) {
    if (((s = i[a]), !Y(s))) continue
    const l = Object.keys(s)
    for (let u = 0, c = l.length; u < c; ++u) o(l[u], e, s, n)
  }
  return e
}
function to(e, t) {
  return Mo(e, t, { merger: RS })
}
function RS(e, t, n) {
  if (!xy(e)) return
  const i = t[e],
    r = n[e]
  Y(i) && Y(r)
    ? to(i, r)
    : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = ba(r))
}
const np = { "": (e) => e, x: (e) => e.x, y: (e) => e.y }
function LS(e) {
  const t = e.split("."),
    n = []
  let i = ""
  for (const r of t)
    (i += r),
      i.endsWith("\\") ? (i = i.slice(0, -1) + ".") : (n.push(i), (i = ""))
  return n
}
function DS(e) {
  const t = LS(e)
  return (n) => {
    for (const i of t) {
      if (i === "") break
      n = n && n[i]
    }
    return n
  }
}
function To(e, t) {
  return (np[t] || (np[t] = DS(t)))(e)
}
function id(e) {
  return e.charAt(0).toUpperCase() + e.slice(1)
}
const ka = (e) => typeof e < "u",
  jn = (e) => typeof e == "function",
  ip = (e, t) => {
    if (e.size !== t.size) return !1
    for (const n of e) if (!t.has(n)) return !1
    return !0
  }
function IS(e) {
  return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu"
}
const we = Math.PI,
  ge = 2 * we,
  Ca = Number.POSITIVE_INFINITY,
  zS = we / 180,
  ve = we / 2,
  Vn = we / 4,
  rp = (we * 2) / 3,
  bn = Math.log10,
  Ea = Math.sign
function Fs(e, t, n) {
  return Math.abs(e - t) < n
}
function op(e) {
  const t = Math.round(e)
  e = Fs(e, t, e / 1e3) ? t : e
  const n = Math.pow(10, Math.floor(bn(e))),
    i = e / n
  return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * n
}
function NS(e) {
  const t = [],
    n = Math.sqrt(e)
  let i
  for (i = 1; i < n; i++) e % i === 0 && (t.push(i), t.push(e / i))
  return n === (n | 0) && t.push(n), t.sort((r, o) => r - o).pop(), t
}
function Pa(e) {
  return !isNaN(parseFloat(e)) && isFinite(e)
}
function $S(e, t) {
  const n = Math.round(e)
  return n - t <= e && n + t >= e
}
function _y(e, t, n) {
  let i, r, o
  for (i = 0, r = e.length; i < r; i++)
    (o = e[i][n]),
      isNaN(o) || ((t.min = Math.min(t.min, o)), (t.max = Math.max(t.max, o)))
}
function Ht(e) {
  return e * (we / 180)
}
function rd(e) {
  return e * (180 / we)
}
function sp(e) {
  if (!Me(e)) return
  let t = 1,
    n = 0
  for (; Math.round(e * t) / t !== e; ) (t *= 10), n++
  return n
}
function wy(e, t) {
  const n = t.x - e.x,
    i = t.y - e.y,
    r = Math.sqrt(n * n + i * i)
  let o = Math.atan2(i, n)
  return o < -0.5 * we && (o += ge), { angle: o, distance: r }
}
function FS(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
}
function jt(e) {
  return ((e % ge) + ge) % ge
}
function Ma(e, t, n, i) {
  const r = jt(e),
    o = jt(t),
    s = jt(n),
    a = jt(o - r),
    l = jt(s - r),
    u = jt(r - o),
    c = jt(r - s)
  return r === o || r === s || (i && o === s) || (a > l && u < c)
}
function _t(e, t, n) {
  return Math.max(t, Math.min(n, e))
}
function jS(e) {
  return _t(e, -32768, 32767)
}
function $r(e, t, n, i = 1e-6) {
  return e >= Math.min(t, n) - i && e <= Math.max(t, n) + i
}
function od(e, t, n) {
  n = n || ((s) => e[s] < t)
  let i = e.length - 1,
    r = 0,
    o
  for (; i - r > 1; ) (o = (r + i) >> 1), n(o) ? (r = o) : (i = o)
  return { lo: r, hi: i }
}
const Ac = (e, t, n, i) =>
    od(
      e,
      n,
      i
        ? (r) => {
            const o = e[r][t]
            return o < n || (o === n && e[r + 1][t] === n)
          }
        : (r) => e[r][t] < n,
    ),
  BS = (e, t, n) => od(e, n, (i) => e[i][t] >= n)
function WS(e, t, n) {
  let i = 0,
    r = e.length
  for (; i < r && e[i] < t; ) i++
  for (; r > i && e[r - 1] > n; ) r--
  return i > 0 || r < e.length ? e.slice(i, r) : e
}
const Sy = ["push", "pop", "shift", "splice", "unshift"]
function HS(e, t) {
  if (e._chartjs) {
    e._chartjs.listeners.push(t)
    return
  }
  Object.defineProperty(e, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [t] },
  }),
    Sy.forEach((n) => {
      const i = "_onData" + id(n),
        r = e[n]
      Object.defineProperty(e, n, {
        configurable: !0,
        enumerable: !1,
        value(...o) {
          const s = r.apply(this, o)
          return (
            e._chartjs.listeners.forEach((a) => {
              typeof a[i] == "function" && a[i](...o)
            }),
            s
          )
        },
      })
    })
}
function ap(e, t) {
  const n = e._chartjs
  if (!n) return
  const i = n.listeners,
    r = i.indexOf(t)
  r !== -1 && i.splice(r, 1),
    !(i.length > 0) &&
      (Sy.forEach((o) => {
        delete e[o]
      }),
      delete e._chartjs)
}
function VS(e) {
  const t = new Set(e)
  return t.size === e.length ? e : Array.from(t)
}
const by = (function () {
  return typeof window > "u"
    ? function (e) {
        return e()
      }
    : window.requestAnimationFrame
})()
function ky(e, t) {
  let n = [],
    i = !1
  return function (...r) {
    ;(n = r),
      i ||
        ((i = !0),
        by.call(window, () => {
          ;(i = !1), e.apply(t, n)
        }))
  }
}
function US(e, t) {
  let n
  return function (...i) {
    return (
      t ? (clearTimeout(n), (n = setTimeout(e, t, i))) : e.apply(this, i), t
    )
  }
}
const Cy = (e) => (e === "start" ? "left" : e === "end" ? "right" : "center"),
  rt = (e, t, n) => (e === "start" ? t : e === "end" ? n : (t + n) / 2),
  YS = (e, t, n, i) =>
    e === (i ? "left" : "right") ? n : e === "center" ? (t + n) / 2 : t,
  ds = (e) => e === 0 || e === 1,
  lp = (e, t, n) =>
    -(Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * ge) / n)),
  up = (e, t, n) => Math.pow(2, -10 * e) * Math.sin(((e - t) * ge) / n) + 1,
  no = {
    linear: (e) => e,
    easeInQuad: (e) => e * e,
    easeOutQuad: (e) => -e * (e - 2),
    easeInOutQuad: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1),
    easeInCubic: (e) => e * e * e,
    easeOutCubic: (e) => (e -= 1) * e * e + 1,
    easeInOutCubic: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2),
    easeInQuart: (e) => e * e * e * e,
    easeOutQuart: (e) => -((e -= 1) * e * e * e - 1),
    easeInOutQuart: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2),
    easeInQuint: (e) => e * e * e * e * e,
    easeOutQuint: (e) => (e -= 1) * e * e * e * e + 1,
    easeInOutQuint: (e) =>
      (e /= 0.5) < 1
        ? 0.5 * e * e * e * e * e
        : 0.5 * ((e -= 2) * e * e * e * e + 2),
    easeInSine: (e) => -Math.cos(e * ve) + 1,
    easeOutSine: (e) => Math.sin(e * ve),
    easeInOutSine: (e) => -0.5 * (Math.cos(we * e) - 1),
    easeInExpo: (e) => (e === 0 ? 0 : Math.pow(2, 10 * (e - 1))),
    easeOutExpo: (e) => (e === 1 ? 1 : -Math.pow(2, -10 * e) + 1),
    easeInOutExpo: (e) =>
      ds(e)
        ? e
        : e < 0.5
        ? 0.5 * Math.pow(2, 10 * (e * 2 - 1))
        : 0.5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
    easeInCirc: (e) => (e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)),
    easeOutCirc: (e) => Math.sqrt(1 - (e -= 1) * e),
    easeInOutCirc: (e) =>
      (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
    easeInElastic: (e) => (ds(e) ? e : lp(e, 0.075, 0.3)),
    easeOutElastic: (e) => (ds(e) ? e : up(e, 0.075, 0.3)),
    easeInOutElastic(e) {
      return ds(e)
        ? e
        : e < 0.5
        ? 0.5 * lp(e * 2, 0.1125, 0.45)
        : 0.5 + 0.5 * up(e * 2 - 1, 0.1125, 0.45)
    },
    easeInBack(e) {
      return e * e * ((1.70158 + 1) * e - 1.70158)
    },
    easeOutBack(e) {
      return (e -= 1) * e * ((1.70158 + 1) * e + 1.70158) + 1
    },
    easeInOutBack(e) {
      let t = 1.70158
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    },
    easeInBounce: (e) => 1 - no.easeOutBounce(1 - e),
    easeOutBounce(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375
    },
    easeInOutBounce: (e) =>
      e < 0.5
        ? no.easeInBounce(e * 2) * 0.5
        : no.easeOutBounce(e * 2 - 1) * 0.5 + 0.5,
  }
function Ey(e) {
  if (e && typeof e == "object") {
    const t = e.toString()
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]"
  }
  return !1
}
function cp(e) {
  return Ey(e) ? e : new Po(e)
}
function xu(e) {
  return Ey(e) ? e : new Po(e).saturate(0.5).darken(0.1).hexString()
}
const KS = ["x", "y", "borderWidth", "radius", "tension"],
  XS = ["color", "borderColor", "backgroundColor"]
function QS(e) {
  e.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  }),
    e.describe("animation", {
      _fallback: !1,
      _indexable: !1,
      _scriptable: (t) =>
        t !== "onProgress" && t !== "onComplete" && t !== "fn",
    }),
    e.set("animations", {
      colors: { type: "color", properties: XS },
      numbers: { type: "number", properties: KS },
    }),
    e.describe("animations", { _fallback: "animation" }),
    e.set("transitions", {
      active: { animation: { duration: 400 } },
      resize: { animation: { duration: 0 } },
      show: {
        animations: {
          colors: { from: "transparent" },
          visible: { type: "boolean", duration: 0 },
        },
      },
      hide: {
        animations: {
          colors: { to: "transparent" },
          visible: { type: "boolean", easing: "linear", fn: (t) => t | 0 },
        },
      },
    })
}
function GS(e) {
  e.set("layout", {
    autoPadding: !0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  })
}
const fp = new Map()
function qS(e, t) {
  t = t || {}
  const n = e + JSON.stringify(t)
  let i = fp.get(n)
  return i || ((i = new Intl.NumberFormat(e, t)), fp.set(n, i)), i
}
function kl(e, t, n) {
  return qS(t, n).format(e)
}
const Py = {
  values(e) {
    return pe(e) ? e : "" + e
  },
  numeric(e, t, n) {
    if (e === 0) return "0"
    const i = this.chart.options.locale
    let r,
      o = e
    if (n.length > 1) {
      const u = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value))
      ;(u < 1e-4 || u > 1e15) && (r = "scientific"), (o = ZS(e, n))
    }
    const s = bn(Math.abs(o)),
      a = isNaN(s) ? 1 : Math.max(Math.min(-1 * Math.floor(s), 20), 0),
      l = { notation: r, minimumFractionDigits: a, maximumFractionDigits: a }
    return Object.assign(l, this.options.ticks.format), kl(e, i, l)
  },
  logarithmic(e, t, n) {
    if (e === 0) return "0"
    const i = n[t].significand || e / Math.pow(10, Math.floor(bn(e)))
    return [1, 2, 3, 5, 10, 15].includes(i) || t > 0.8 * n.length
      ? Py.numeric.call(this, e, t, n)
      : ""
  },
}
function ZS(e, t) {
  let n = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value
  return Math.abs(n) >= 1 && e !== Math.floor(e) && (n = e - Math.floor(e)), n
}
var Cl = { formatters: Py }
function JS(e) {
  e.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, n) => n.lineWidth,
      tickColor: (t, n) => n.color,
      offset: !1,
    },
    border: { display: !0, dash: [], dashOffset: 0, width: 1 },
    title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Cl.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2,
    },
  }),
    e.route("scale.ticks", "color", "", "color"),
    e.route("scale.grid", "color", "", "borderColor"),
    e.route("scale.border", "color", "", "borderColor"),
    e.route("scale.title", "color", "", "color"),
    e.describe("scale", {
      _fallback: !1,
      _scriptable: (t) =>
        !t.startsWith("before") &&
        !t.startsWith("after") &&
        t !== "callback" &&
        t !== "parser",
      _indexable: (t) =>
        t !== "borderDash" && t !== "tickBorderDash" && t !== "dash",
    }),
    e.describe("scales", { _fallback: "scale" }),
    e.describe("scale.ticks", {
      _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
      _indexable: (t) => t !== "backdropPadding",
    })
}
const gi = Object.create(null),
  Rc = Object.create(null)
function io(e, t) {
  if (!t) return e
  const n = t.split(".")
  for (let i = 0, r = n.length; i < r; ++i) {
    const o = n[i]
    e = e[o] || (e[o] = Object.create(null))
  }
  return e
}
function _u(e, t, n) {
  return typeof t == "string" ? Mo(io(e, t), n) : Mo(io(e, ""), t)
}
class eb {
  constructor(t, n) {
    ;(this.animation = void 0),
      (this.backgroundColor = "rgba(0,0,0,0.1)"),
      (this.borderColor = "rgba(0,0,0,0.1)"),
      (this.color = "#666"),
      (this.datasets = {}),
      (this.devicePixelRatio = (i) => i.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        "mousemove",
        "mouseout",
        "click",
        "touchstart",
        "touchmove",
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (i, r) => xu(r.backgroundColor)),
      (this.hoverBorderColor = (i, r) => xu(r.borderColor)),
      (this.hoverColor = (i, r) => xu(r.color)),
      (this.indexAxis = "x"),
      (this.interaction = {
        mode: "nearest",
        intersect: !0,
        includeInvisible: !1,
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(t),
      this.apply(n)
  }
  set(t, n) {
    return _u(this, t, n)
  }
  get(t) {
    return io(this, t)
  }
  describe(t, n) {
    return _u(Rc, t, n)
  }
  override(t, n) {
    return _u(gi, t, n)
  }
  route(t, n, i, r) {
    const o = io(this, t),
      s = io(this, i),
      a = "_" + n
    Object.defineProperties(o, {
      [a]: { value: o[n], writable: !0 },
      [n]: {
        enumerable: !0,
        get() {
          const l = this[a],
            u = s[r]
          return Y(l) ? Object.assign({}, u, l) : X(l, u)
        },
        set(l) {
          this[a] = l
        },
      },
    })
  }
  apply(t) {
    t.forEach((n) => n(this))
  }
}
var me = new eb(
  {
    _scriptable: (e) => !e.startsWith("on"),
    _indexable: (e) => e !== "events",
    hover: { _fallback: "interaction" },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [QS, GS, JS],
)
function tb(e) {
  return !e || ce(e.size) || ce(e.family)
    ? null
    : (e.style ? e.style + " " : "") +
        (e.weight ? e.weight + " " : "") +
        e.size +
        "px " +
        e.family
}
function Ta(e, t, n, i, r) {
  let o = t[r]
  return (
    o || ((o = t[r] = e.measureText(r).width), n.push(r)), o > i && (i = o), i
  )
}
function nb(e, t, n, i) {
  i = i || {}
  let r = (i.data = i.data || {}),
    o = (i.garbageCollect = i.garbageCollect || [])
  i.font !== t &&
    ((r = i.data = {}), (o = i.garbageCollect = []), (i.font = t)),
    e.save(),
    (e.font = t)
  let s = 0
  const a = n.length
  let l, u, c, f, d
  for (l = 0; l < a; l++)
    if (((f = n[l]), f != null && !pe(f))) s = Ta(e, r, o, s, f)
    else if (pe(f))
      for (u = 0, c = f.length; u < c; u++)
        (d = f[u]), d != null && !pe(d) && (s = Ta(e, r, o, s, d))
  e.restore()
  const h = o.length / 2
  if (h > n.length) {
    for (l = 0; l < h; l++) delete r[o[l]]
    o.splice(0, h)
  }
  return s
}
function Un(e, t, n) {
  const i = e.currentDevicePixelRatio,
    r = n !== 0 ? Math.max(n / 2, 0.5) : 0
  return Math.round((t - r) * i) / i + r
}
function dp(e, t) {
  ;(t = t || e.getContext("2d")),
    t.save(),
    t.resetTransform(),
    t.clearRect(0, 0, e.width, e.height),
    t.restore()
}
function hp(e, t, n, i) {
  My(e, t, n, i, null)
}
function My(e, t, n, i, r) {
  let o, s, a, l, u, c, f, d
  const h = t.pointStyle,
    m = t.rotation,
    y = t.radius
  let x = (m || 0) * zS
  if (
    h &&
    typeof h == "object" &&
    ((o = h.toString()),
    o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")
  ) {
    e.save(),
      e.translate(n, i),
      e.rotate(x),
      e.drawImage(h, -h.width / 2, -h.height / 2, h.width, h.height),
      e.restore()
    return
  }
  if (!(isNaN(y) || y <= 0)) {
    switch ((e.beginPath(), h)) {
      default:
        r ? e.ellipse(n, i, r / 2, y, 0, 0, ge) : e.arc(n, i, y, 0, ge),
          e.closePath()
        break
      case "triangle":
        ;(c = r ? r / 2 : y),
          e.moveTo(n + Math.sin(x) * c, i - Math.cos(x) * y),
          (x += rp),
          e.lineTo(n + Math.sin(x) * c, i - Math.cos(x) * y),
          (x += rp),
          e.lineTo(n + Math.sin(x) * c, i - Math.cos(x) * y),
          e.closePath()
        break
      case "rectRounded":
        ;(u = y * 0.516),
          (l = y - u),
          (s = Math.cos(x + Vn) * l),
          (f = Math.cos(x + Vn) * (r ? r / 2 - u : l)),
          (a = Math.sin(x + Vn) * l),
          (d = Math.sin(x + Vn) * (r ? r / 2 - u : l)),
          e.arc(n - f, i - a, u, x - we, x - ve),
          e.arc(n + d, i - s, u, x - ve, x),
          e.arc(n + f, i + a, u, x, x + ve),
          e.arc(n - d, i + s, u, x + ve, x + we),
          e.closePath()
        break
      case "rect":
        if (!m) {
          ;(l = Math.SQRT1_2 * y),
            (c = r ? r / 2 : l),
            e.rect(n - c, i - l, 2 * c, 2 * l)
          break
        }
        x += Vn
      case "rectRot":
        ;(f = Math.cos(x) * (r ? r / 2 : y)),
          (s = Math.cos(x) * y),
          (a = Math.sin(x) * y),
          (d = Math.sin(x) * (r ? r / 2 : y)),
          e.moveTo(n - f, i - a),
          e.lineTo(n + d, i - s),
          e.lineTo(n + f, i + a),
          e.lineTo(n - d, i + s),
          e.closePath()
        break
      case "crossRot":
        x += Vn
      case "cross":
        ;(f = Math.cos(x) * (r ? r / 2 : y)),
          (s = Math.cos(x) * y),
          (a = Math.sin(x) * y),
          (d = Math.sin(x) * (r ? r / 2 : y)),
          e.moveTo(n - f, i - a),
          e.lineTo(n + f, i + a),
          e.moveTo(n + d, i - s),
          e.lineTo(n - d, i + s)
        break
      case "star":
        ;(f = Math.cos(x) * (r ? r / 2 : y)),
          (s = Math.cos(x) * y),
          (a = Math.sin(x) * y),
          (d = Math.sin(x) * (r ? r / 2 : y)),
          e.moveTo(n - f, i - a),
          e.lineTo(n + f, i + a),
          e.moveTo(n + d, i - s),
          e.lineTo(n - d, i + s),
          (x += Vn),
          (f = Math.cos(x) * (r ? r / 2 : y)),
          (s = Math.cos(x) * y),
          (a = Math.sin(x) * y),
          (d = Math.sin(x) * (r ? r / 2 : y)),
          e.moveTo(n - f, i - a),
          e.lineTo(n + f, i + a),
          e.moveTo(n + d, i - s),
          e.lineTo(n - d, i + s)
        break
      case "line":
        ;(s = r ? r / 2 : Math.cos(x) * y),
          (a = Math.sin(x) * y),
          e.moveTo(n - s, i - a),
          e.lineTo(n + s, i + a)
        break
      case "dash":
        e.moveTo(n, i),
          e.lineTo(n + Math.cos(x) * (r ? r / 2 : y), i + Math.sin(x) * y)
        break
      case !1:
        e.closePath()
        break
    }
    e.fill(), t.borderWidth > 0 && e.stroke()
  }
}
function zi(e, t, n) {
  return (
    (n = n || 0.5),
    !t ||
      (e &&
        e.x > t.left - n &&
        e.x < t.right + n &&
        e.y > t.top - n &&
        e.y < t.bottom + n)
  )
}
function sd(e, t) {
  e.save(),
    e.beginPath(),
    e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
    e.clip()
}
function ad(e) {
  e.restore()
}
function ib(e, t) {
  t.translation && e.translate(t.translation[0], t.translation[1]),
    ce(t.rotation) || e.rotate(t.rotation),
    t.color && (e.fillStyle = t.color),
    t.textAlign && (e.textAlign = t.textAlign),
    t.textBaseline && (e.textBaseline = t.textBaseline)
}
function rb(e, t, n, i, r) {
  if (r.strikethrough || r.underline) {
    const o = e.measureText(i),
      s = t - o.actualBoundingBoxLeft,
      a = t + o.actualBoundingBoxRight,
      l = n - o.actualBoundingBoxAscent,
      u = n + o.actualBoundingBoxDescent,
      c = r.strikethrough ? (l + u) / 2 : u
    ;(e.strokeStyle = e.fillStyle),
      e.beginPath(),
      (e.lineWidth = r.decorationWidth || 2),
      e.moveTo(s, c),
      e.lineTo(a, c),
      e.stroke()
  }
}
function ob(e, t) {
  const n = e.fillStyle
  ;(e.fillStyle = t.color),
    e.fillRect(t.left, t.top, t.width, t.height),
    (e.fillStyle = n)
}
function ir(e, t, n, i, r, o = {}) {
  const s = pe(t) ? t : [t],
    a = o.strokeWidth > 0 && o.strokeColor !== ""
  let l, u
  for (e.save(), e.font = r.string, ib(e, o), l = 0; l < s.length; ++l)
    (u = s[l]),
      o.backdrop && ob(e, o.backdrop),
      a &&
        (o.strokeColor && (e.strokeStyle = o.strokeColor),
        ce(o.strokeWidth) || (e.lineWidth = o.strokeWidth),
        e.strokeText(u, n, i, o.maxWidth)),
      e.fillText(u, n, i, o.maxWidth),
      rb(e, n, i, u, o),
      (i += Number(r.lineHeight))
  e.restore()
}
function Oa(e, t) {
  const { x: n, y: i, w: r, h: o, radius: s } = t
  e.arc(n + s.topLeft, i + s.topLeft, s.topLeft, 1.5 * we, we, !0),
    e.lineTo(n, i + o - s.bottomLeft),
    e.arc(n + s.bottomLeft, i + o - s.bottomLeft, s.bottomLeft, we, ve, !0),
    e.lineTo(n + r - s.bottomRight, i + o),
    e.arc(
      n + r - s.bottomRight,
      i + o - s.bottomRight,
      s.bottomRight,
      ve,
      0,
      !0,
    ),
    e.lineTo(n + r, i + s.topRight),
    e.arc(n + r - s.topRight, i + s.topRight, s.topRight, 0, -ve, !0),
    e.lineTo(n + s.topLeft, i)
}
const sb = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  ab = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/
function lb(e, t) {
  const n = ("" + e).match(sb)
  if (!n || n[1] === "normal") return t * 1.2
  switch (((e = +n[2]), n[3])) {
    case "px":
      return e
    case "%":
      e /= 100
      break
  }
  return t * e
}
const ub = (e) => +e || 0
function ld(e, t) {
  const n = {},
    i = Y(t),
    r = i ? Object.keys(t) : t,
    o = Y(e) ? (i ? (s) => X(e[s], e[t[s]]) : (s) => e[s]) : () => e
  for (const s of r) n[s] = ub(o(s))
  return n
}
function cb(e) {
  return ld(e, { top: "y", right: "x", bottom: "y", left: "x" })
}
function Yi(e) {
  return ld(e, ["topLeft", "topRight", "bottomLeft", "bottomRight"])
}
function Ue(e) {
  const t = cb(e)
  return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t
}
function De(e, t) {
  ;(e = e || {}), (t = t || me.font)
  let n = X(e.size, t.size)
  typeof n == "string" && (n = parseInt(n, 10))
  let i = X(e.style, t.style)
  i &&
    !("" + i).match(ab) &&
    (console.warn('Invalid font style specified: "' + i + '"'), (i = void 0))
  const r = {
    family: X(e.family, t.family),
    lineHeight: lb(X(e.lineHeight, t.lineHeight), n),
    size: n,
    style: i,
    weight: X(e.weight, t.weight),
    string: "",
  }
  return (r.string = tb(r)), r
}
function hs(e, t, n, i) {
  let r = !0,
    o,
    s,
    a
  for (o = 0, s = e.length; o < s; ++o)
    if (
      ((a = e[o]),
      a !== void 0 &&
        (t !== void 0 && typeof a == "function" && ((a = a(t)), (r = !1)),
        n !== void 0 && pe(a) && ((a = a[n % a.length]), (r = !1)),
        a !== void 0))
    )
      return i && !r && (i.cacheable = !1), a
}
function fb(e, t, n) {
  const { min: i, max: r } = e,
    o = vy(t, (r - i) / 2),
    s = (a, l) => (n && a === 0 ? 0 : a + l)
  return { min: s(i, -Math.abs(o)), max: s(r, o) }
}
function xi(e, t) {
  return Object.assign(Object.create(e), t)
}
function ud(e, t = [""], n, i, r = () => e[0]) {
  const o = n || e
  typeof i > "u" && (i = Ry("_fallback", e))
  const s = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: e,
    _rootScopes: o,
    _fallback: i,
    _getTarget: r,
    override: (a) => ud([a, ...e], t, o, i),
  }
  return new Proxy(s, {
    deleteProperty(a, l) {
      return delete a[l], delete a._keys, delete e[0][l], !0
    },
    get(a, l) {
      return Oy(a, l, () => xb(l, t, e, a))
    },
    getOwnPropertyDescriptor(a, l) {
      return Reflect.getOwnPropertyDescriptor(a._scopes[0], l)
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e[0])
    },
    has(a, l) {
      return gp(a).includes(l)
    },
    ownKeys(a) {
      return gp(a)
    },
    set(a, l, u) {
      const c = a._storage || (a._storage = r())
      return (a[l] = c[l] = u), delete a._keys, !0
    },
  })
}
function rr(e, t, n, i) {
  const r = {
    _cacheable: !1,
    _proxy: e,
    _context: t,
    _subProxy: n,
    _stack: new Set(),
    _descriptors: Ty(e, i),
    setContext: (o) => rr(e, o, n, i),
    override: (o) => rr(e.override(o), t, n, i),
  }
  return new Proxy(r, {
    deleteProperty(o, s) {
      return delete o[s], delete e[s], !0
    },
    get(o, s, a) {
      return Oy(o, s, () => hb(o, s, a))
    },
    getOwnPropertyDescriptor(o, s) {
      return o._descriptors.allKeys
        ? Reflect.has(e, s)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(e, s)
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e)
    },
    has(o, s) {
      return Reflect.has(e, s)
    },
    ownKeys() {
      return Reflect.ownKeys(e)
    },
    set(o, s, a) {
      return (e[s] = a), delete o[s], !0
    },
  })
}
function Ty(e, t = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: n = t.scriptable,
    _indexable: i = t.indexable,
    _allKeys: r = t.allKeys,
  } = e
  return {
    allKeys: r,
    scriptable: n,
    indexable: i,
    isScriptable: jn(n) ? n : () => n,
    isIndexable: jn(i) ? i : () => i,
  }
}
const db = (e, t) => (e ? e + id(t) : t),
  cd = (e, t) =>
    Y(t) &&
    e !== "adapters" &&
    (Object.getPrototypeOf(t) === null || t.constructor === Object)
function Oy(e, t, n) {
  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
  const i = n()
  return (e[t] = i), i
}
function hb(e, t, n) {
  const { _proxy: i, _context: r, _subProxy: o, _descriptors: s } = e
  let a = i[t]
  return (
    jn(a) && s.isScriptable(t) && (a = pb(t, a, e, n)),
    pe(a) && a.length && (a = gb(t, a, e, s.isIndexable)),
    cd(t, a) && (a = rr(a, r, o && o[t], s)),
    a
  )
}
function pb(e, t, n, i) {
  const { _proxy: r, _context: o, _subProxy: s, _stack: a } = n
  if (a.has(e))
    throw new Error(
      "Recursion detected: " + Array.from(a).join("->") + "->" + e,
    )
  a.add(e)
  let l = t(o, s || i)
  return a.delete(e), cd(e, l) && (l = fd(r._scopes, r, e, l)), l
}
function gb(e, t, n, i) {
  const { _proxy: r, _context: o, _subProxy: s, _descriptors: a } = n
  if (typeof o.index < "u" && i(e)) return t[o.index % t.length]
  if (Y(t[0])) {
    const l = t,
      u = r._scopes.filter((c) => c !== l)
    t = []
    for (const c of l) {
      const f = fd(u, r, e, c)
      t.push(rr(f, o, s && s[e], a))
    }
  }
  return t
}
function Ay(e, t, n) {
  return jn(e) ? e(t, n) : e
}
const mb = (e, t) => (e === !0 ? t : typeof e == "string" ? To(t, e) : void 0)
function yb(e, t, n, i, r) {
  for (const o of t) {
    const s = mb(n, o)
    if (s) {
      e.add(s)
      const a = Ay(s._fallback, n, r)
      if (typeof a < "u" && a !== n && a !== i) return a
    } else if (s === !1 && typeof i < "u" && n !== i) return null
  }
  return !1
}
function fd(e, t, n, i) {
  const r = t._rootScopes,
    o = Ay(t._fallback, n, i),
    s = [...e, ...r],
    a = new Set()
  a.add(i)
  let l = pp(a, s, n, o || n, i)
  return l === null ||
    (typeof o < "u" && o !== n && ((l = pp(a, s, o, l, i)), l === null))
    ? !1
    : ud(Array.from(a), [""], r, o, () => vb(t, n, i))
}
function pp(e, t, n, i, r) {
  for (; n; ) n = yb(e, t, n, i, r)
  return n
}
function vb(e, t, n) {
  const i = e._getTarget()
  t in i || (i[t] = {})
  const r = i[t]
  return pe(r) && Y(n) ? n : r || {}
}
function xb(e, t, n, i) {
  let r
  for (const o of t)
    if (((r = Ry(db(o, e), n)), typeof r < "u"))
      return cd(e, r) ? fd(n, i, e, r) : r
}
function Ry(e, t) {
  for (const n of t) {
    if (!n) continue
    const i = n[e]
    if (typeof i < "u") return i
  }
}
function gp(e) {
  let t = e._keys
  return t || (t = e._keys = _b(e._scopes)), t
}
function _b(e) {
  const t = new Set()
  for (const n of e)
    for (const i of Object.keys(n).filter((r) => !r.startsWith("_"))) t.add(i)
  return Array.from(t)
}
function Ly() {
  return typeof window < "u" && typeof document < "u"
}
function dd(e) {
  let t = e.parentNode
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t
}
function Aa(e, t, n) {
  let i
  return (
    typeof e == "string"
      ? ((i = parseInt(e, 10)),
        e.indexOf("%") !== -1 && (i = (i / 100) * t.parentNode[n]))
      : (i = e),
    i
  )
}
const El = (e) => e.ownerDocument.defaultView.getComputedStyle(e, null)
function wb(e, t) {
  return El(e).getPropertyValue(t)
}
const Sb = ["top", "right", "bottom", "left"]
function oi(e, t, n) {
  const i = {}
  n = n ? "-" + n : ""
  for (let r = 0; r < 4; r++) {
    const o = Sb[r]
    i[o] = parseFloat(e[t + "-" + o + n]) || 0
  }
  return (i.width = i.left + i.right), (i.height = i.top + i.bottom), i
}
const bb = (e, t, n) => (e > 0 || t > 0) && (!n || !n.shadowRoot)
function kb(e, t) {
  const n = e.touches,
    i = n && n.length ? n[0] : e,
    { offsetX: r, offsetY: o } = i
  let s = !1,
    a,
    l
  if (bb(r, o, e.target)) (a = r), (l = o)
  else {
    const u = t.getBoundingClientRect()
    ;(a = i.clientX - u.left), (l = i.clientY - u.top), (s = !0)
  }
  return { x: a, y: l, box: s }
}
function Zn(e, t) {
  if ("native" in e) return e
  const { canvas: n, currentDevicePixelRatio: i } = t,
    r = El(n),
    o = r.boxSizing === "border-box",
    s = oi(r, "padding"),
    a = oi(r, "border", "width"),
    { x: l, y: u, box: c } = kb(e, n),
    f = s.left + (c && a.left),
    d = s.top + (c && a.top)
  let { width: h, height: m } = t
  return (
    o && ((h -= s.width + a.width), (m -= s.height + a.height)),
    {
      x: Math.round((((l - f) / h) * n.width) / i),
      y: Math.round((((u - d) / m) * n.height) / i),
    }
  )
}
function Cb(e, t, n) {
  let i, r
  if (t === void 0 || n === void 0) {
    const o = dd(e)
    if (!o) (t = e.clientWidth), (n = e.clientHeight)
    else {
      const s = o.getBoundingClientRect(),
        a = El(o),
        l = oi(a, "border", "width"),
        u = oi(a, "padding")
      ;(t = s.width - u.width - l.width),
        (n = s.height - u.height - l.height),
        (i = Aa(a.maxWidth, o, "clientWidth")),
        (r = Aa(a.maxHeight, o, "clientHeight"))
    }
  }
  return { width: t, height: n, maxWidth: i || Ca, maxHeight: r || Ca }
}
const ps = (e) => Math.round(e * 10) / 10
function Eb(e, t, n, i) {
  const r = El(e),
    o = oi(r, "margin"),
    s = Aa(r.maxWidth, e, "clientWidth") || Ca,
    a = Aa(r.maxHeight, e, "clientHeight") || Ca,
    l = Cb(e, t, n)
  let { width: u, height: c } = l
  if (r.boxSizing === "content-box") {
    const d = oi(r, "border", "width"),
      h = oi(r, "padding")
    ;(u -= h.width + d.width), (c -= h.height + d.height)
  }
  return (
    (u = Math.max(0, u - o.width)),
    (c = Math.max(0, i ? u / i : c - o.height)),
    (u = ps(Math.min(u, s, l.maxWidth))),
    (c = ps(Math.min(c, a, l.maxHeight))),
    u && !c && (c = ps(u / 2)),
    (t !== void 0 || n !== void 0) &&
      i &&
      l.height &&
      c > l.height &&
      ((c = l.height), (u = ps(Math.floor(c * i)))),
    { width: u, height: c }
  )
}
function mp(e, t, n) {
  const i = t || 1,
    r = Math.floor(e.height * i),
    o = Math.floor(e.width * i)
  ;(e.height = Math.floor(e.height)), (e.width = Math.floor(e.width))
  const s = e.canvas
  return (
    s.style &&
      (n || (!s.style.height && !s.style.width)) &&
      ((s.style.height = `${e.height}px`), (s.style.width = `${e.width}px`)),
    e.currentDevicePixelRatio !== i || s.height !== r || s.width !== o
      ? ((e.currentDevicePixelRatio = i),
        (s.height = r),
        (s.width = o),
        e.ctx.setTransform(i, 0, 0, i, 0, 0),
        !0)
      : !1
  )
}
const Pb = (function () {
  let e = !1
  try {
    const t = {
      get passive() {
        return (e = !0), !1
      },
    }
    window.addEventListener("test", null, t),
      window.removeEventListener("test", null, t)
  } catch {}
  return e
})()
function yp(e, t) {
  const n = wb(e, t),
    i = n && n.match(/^(\d+)(\.\d+)?px$/)
  return i ? +i[1] : void 0
}
const Mb = function (e, t) {
    return {
      x(n) {
        return e + e + t - n
      },
      setWidth(n) {
        t = n
      },
      textAlign(n) {
        return n === "center" ? n : n === "right" ? "left" : "right"
      },
      xPlus(n, i) {
        return n - i
      },
      leftForLtr(n, i) {
        return n - i
      },
    }
  },
  Tb = function () {
    return {
      x(e) {
        return e
      },
      setWidth(e) {},
      textAlign(e) {
        return e
      },
      xPlus(e, t) {
        return e + t
      },
      leftForLtr(e, t) {
        return e
      },
    }
  }
function Ki(e, t, n) {
  return e ? Mb(t, n) : Tb()
}
function Dy(e, t) {
  let n, i
  ;(t === "ltr" || t === "rtl") &&
    ((n = e.canvas.style),
    (i = [n.getPropertyValue("direction"), n.getPropertyPriority("direction")]),
    n.setProperty("direction", t, "important"),
    (e.prevTextDirection = i))
}
function Iy(e, t) {
  t !== void 0 &&
    (delete e.prevTextDirection,
    e.canvas.style.setProperty("direction", t[0], t[1]))
}
/*!
 * Chart.js v4.4.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */ class Ob {
  constructor() {
    ;(this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0)
  }
  _notify(t, n, i, r) {
    const o = n.listeners[r],
      s = n.duration
    o.forEach((a) =>
      a({
        chart: t,
        initial: n.initial,
        numSteps: s,
        currentStep: Math.min(i - n.start, s),
      }),
    )
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = by.call(window, () => {
        this._update(), (this._request = null), this._running && this._refresh()
      })))
  }
  _update(t = Date.now()) {
    let n = 0
    this._charts.forEach((i, r) => {
      if (!i.running || !i.items.length) return
      const o = i.items
      let s = o.length - 1,
        a = !1,
        l
      for (; s >= 0; --s)
        (l = o[s]),
          l._active
            ? (l._total > i.duration && (i.duration = l._total),
              l.tick(t),
              (a = !0))
            : ((o[s] = o[o.length - 1]), o.pop())
      a && (r.draw(), this._notify(r, i, t, "progress")),
        o.length ||
          ((i.running = !1),
          this._notify(r, i, t, "complete"),
          (i.initial = !1)),
        (n += o.length)
    }),
      (this._lastDate = t),
      n === 0 && (this._running = !1)
  }
  _getAnims(t) {
    const n = this._charts
    let i = n.get(t)
    return (
      i ||
        ((i = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        }),
        n.set(t, i)),
      i
    )
  }
  listen(t, n, i) {
    this._getAnims(t).listeners[n].push(i)
  }
  add(t, n) {
    !n || !n.length || this._getAnims(t).items.push(...n)
  }
  has(t) {
    return this._getAnims(t).items.length > 0
  }
  start(t) {
    const n = this._charts.get(t)
    n &&
      ((n.running = !0),
      (n.start = Date.now()),
      (n.duration = n.items.reduce((i, r) => Math.max(i, r._duration), 0)),
      this._refresh())
  }
  running(t) {
    if (!this._running) return !1
    const n = this._charts.get(t)
    return !(!n || !n.running || !n.items.length)
  }
  stop(t) {
    const n = this._charts.get(t)
    if (!n || !n.items.length) return
    const i = n.items
    let r = i.length - 1
    for (; r >= 0; --r) i[r].cancel()
    ;(n.items = []), this._notify(t, n, Date.now(), "complete")
  }
  remove(t) {
    return this._charts.delete(t)
  }
}
var Xt = new Ob()
const vp = "transparent",
  Ab = {
    boolean(e, t, n) {
      return n > 0.5 ? t : e
    },
    color(e, t, n) {
      const i = cp(e || vp),
        r = i.valid && cp(t || vp)
      return r && r.valid ? r.mix(i, n).hexString() : t
    },
    number(e, t, n) {
      return e + (t - e) * n
    },
  }
class Rb {
  constructor(t, n, i, r) {
    const o = n[i]
    r = hs([t.to, r, o, t.from])
    const s = hs([t.from, o, r])
    ;(this._active = !0),
      (this._fn = t.fn || Ab[t.type || typeof s]),
      (this._easing = no[t.easing] || no.linear),
      (this._start = Math.floor(Date.now() + (t.delay || 0))),
      (this._duration = this._total = Math.floor(t.duration)),
      (this._loop = !!t.loop),
      (this._target = n),
      (this._prop = i),
      (this._from = s),
      (this._to = r),
      (this._promises = void 0)
  }
  active() {
    return this._active
  }
  update(t, n, i) {
    if (this._active) {
      this._notify(!1)
      const r = this._target[this._prop],
        o = i - this._start,
        s = this._duration - o
      ;(this._start = i),
        (this._duration = Math.floor(Math.max(s, t.duration))),
        (this._total += o),
        (this._loop = !!t.loop),
        (this._to = hs([t.to, n, r, t.from])),
        (this._from = hs([t.from, r, n]))
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1))
  }
  tick(t) {
    const n = t - this._start,
      i = this._duration,
      r = this._prop,
      o = this._from,
      s = this._loop,
      a = this._to
    let l
    if (((this._active = o !== a && (s || n < i)), !this._active)) {
      ;(this._target[r] = a), this._notify(!0)
      return
    }
    if (n < 0) {
      this._target[r] = o
      return
    }
    ;(l = (n / i) % 2),
      (l = s && l > 1 ? 2 - l : l),
      (l = this._easing(Math.min(1, Math.max(0, l)))),
      (this._target[r] = this._fn(o, a, l))
  }
  wait() {
    const t = this._promises || (this._promises = [])
    return new Promise((n, i) => {
      t.push({ res: n, rej: i })
    })
  }
  _notify(t) {
    const n = t ? "res" : "rej",
      i = this._promises || []
    for (let r = 0; r < i.length; r++) i[r][n]()
  }
}
class zy {
  constructor(t, n) {
    ;(this._chart = t), (this._properties = new Map()), this.configure(n)
  }
  configure(t) {
    if (!Y(t)) return
    const n = Object.keys(me.animation),
      i = this._properties
    Object.getOwnPropertyNames(t).forEach((r) => {
      const o = t[r]
      if (!Y(o)) return
      const s = {}
      for (const a of n) s[a] = o[a]
      ;((pe(o.properties) && o.properties) || [r]).forEach((a) => {
        ;(a === r || !i.has(a)) && i.set(a, s)
      })
    })
  }
  _animateOptions(t, n) {
    const i = n.options,
      r = Db(t, i)
    if (!r) return []
    const o = this._createAnimations(r, i)
    return (
      i.$shared &&
        Lb(t.options.$animations, i).then(
          () => {
            t.options = i
          },
          () => {},
        ),
      o
    )
  }
  _createAnimations(t, n) {
    const i = this._properties,
      r = [],
      o = t.$animations || (t.$animations = {}),
      s = Object.keys(n),
      a = Date.now()
    let l
    for (l = s.length - 1; l >= 0; --l) {
      const u = s[l]
      if (u.charAt(0) === "$") continue
      if (u === "options") {
        r.push(...this._animateOptions(t, n))
        continue
      }
      const c = n[u]
      let f = o[u]
      const d = i.get(u)
      if (f)
        if (d && f.active()) {
          f.update(d, c, a)
          continue
        } else f.cancel()
      if (!d || !d.duration) {
        t[u] = c
        continue
      }
      ;(o[u] = f = new Rb(d, t, u, c)), r.push(f)
    }
    return r
  }
  update(t, n) {
    if (this._properties.size === 0) {
      Object.assign(t, n)
      return
    }
    const i = this._createAnimations(t, n)
    if (i.length) return Xt.add(this._chart, i), !0
  }
}
function Lb(e, t) {
  const n = [],
    i = Object.keys(t)
  for (let r = 0; r < i.length; r++) {
    const o = e[i[r]]
    o && o.active() && n.push(o.wait())
  }
  return Promise.all(n)
}
function Db(e, t) {
  if (!t) return
  let n = e.options
  if (!n) {
    e.options = t
    return
  }
  return (
    n.$shared &&
      (e.options = n = Object.assign({}, n, { $shared: !1, $animations: {} })),
    n
  )
}
function xp(e, t) {
  const n = (e && e.options) || {},
    i = n.reverse,
    r = n.min === void 0 ? t : 0,
    o = n.max === void 0 ? t : 0
  return { start: i ? o : r, end: i ? r : o }
}
function Ib(e, t, n) {
  if (n === !1) return !1
  const i = xp(e, n),
    r = xp(t, n)
  return { top: r.end, right: i.end, bottom: r.start, left: i.start }
}
function zb(e) {
  let t, n, i, r
  return (
    Y(e)
      ? ((t = e.top), (n = e.right), (i = e.bottom), (r = e.left))
      : (t = n = i = r = e),
    { top: t, right: n, bottom: i, left: r, disabled: e === !1 }
  )
}
function Ny(e, t) {
  const n = [],
    i = e._getSortedDatasetMetas(t)
  let r, o
  for (r = 0, o = i.length; r < o; ++r) n.push(i[r].index)
  return n
}
function _p(e, t, n, i = {}) {
  const r = e.keys,
    o = i.mode === "single"
  let s, a, l, u
  if (t !== null) {
    for (s = 0, a = r.length; s < a; ++s) {
      if (((l = +r[s]), l === n)) {
        if (i.all) continue
        break
      }
      ;(u = e.values[l]), Me(u) && (o || t === 0 || Ea(t) === Ea(u)) && (t += u)
    }
    return t
  }
}
function Nb(e) {
  const t = Object.keys(e),
    n = new Array(t.length)
  let i, r, o
  for (i = 0, r = t.length; i < r; ++i) (o = t[i]), (n[i] = { x: o, y: e[o] })
  return n
}
function wp(e, t) {
  const n = e && e.options.stacked
  return n || (n === void 0 && t.stack !== void 0)
}
function $b(e, t, n) {
  return `${e.id}.${t.id}.${n.stack || n.type}`
}
function Fb(e) {
  const { min: t, max: n, minDefined: i, maxDefined: r } = e.getUserBounds()
  return {
    min: i ? t : Number.NEGATIVE_INFINITY,
    max: r ? n : Number.POSITIVE_INFINITY,
  }
}
function jb(e, t, n) {
  const i = e[t] || (e[t] = {})
  return i[n] || (i[n] = {})
}
function Sp(e, t, n, i) {
  for (const r of t.getMatchingVisibleMetas(i).reverse()) {
    const o = e[r.index]
    if ((n && o > 0) || (!n && o < 0)) return r.index
  }
  return null
}
function bp(e, t) {
  const { chart: n, _cachedMeta: i } = e,
    r = n._stacks || (n._stacks = {}),
    { iScale: o, vScale: s, index: a } = i,
    l = o.axis,
    u = s.axis,
    c = $b(o, s, i),
    f = t.length
  let d
  for (let h = 0; h < f; ++h) {
    const m = t[h],
      { [l]: y, [u]: x } = m,
      p = m._stacks || (m._stacks = {})
    ;(d = p[u] = jb(r, c, y)),
      (d[a] = x),
      (d._top = Sp(d, s, !0, i.type)),
      (d._bottom = Sp(d, s, !1, i.type))
    const g = d._visualValues || (d._visualValues = {})
    g[a] = x
  }
}
function wu(e, t) {
  const n = e.scales
  return Object.keys(n)
    .filter((i) => n[i].axis === t)
    .shift()
}
function Bb(e, t) {
  return xi(e, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset",
  })
}
function Wb(e, t, n) {
  return xi(e, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: n,
    index: t,
    mode: "default",
    type: "data",
  })
}
function kr(e, t) {
  const n = e.controller.index,
    i = e.vScale && e.vScale.axis
  if (i) {
    t = t || e._parsed
    for (const r of t) {
      const o = r._stacks
      if (!o || o[i] === void 0 || o[i][n] === void 0) return
      delete o[i][n],
        o[i]._visualValues !== void 0 &&
          o[i]._visualValues[n] !== void 0 &&
          delete o[i]._visualValues[n]
    }
  }
}
const Su = (e) => e === "reset" || e === "none",
  kp = (e, t) => (t ? e : Object.assign({}, e)),
  Hb = (e, t, n) =>
    e && !t.hidden && t._stacked && { keys: Ny(n, !0), values: null }
class ro {
  constructor(t, n) {
    ;(this.chart = t),
      (this._ctx = t.ctx),
      (this.index = n),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize()
  }
  initialize() {
    const t = this._cachedMeta
    this.configure(),
      this.linkScales(),
      (t._stacked = wp(t.vScale, t)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled("filler") &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options",
        )
  }
  updateIndex(t) {
    this.index !== t && kr(this._cachedMeta), (this.index = t)
  }
  linkScales() {
    const t = this.chart,
      n = this._cachedMeta,
      i = this.getDataset(),
      r = (f, d, h, m) => (f === "x" ? d : f === "r" ? m : h),
      o = (n.xAxisID = X(i.xAxisID, wu(t, "x"))),
      s = (n.yAxisID = X(i.yAxisID, wu(t, "y"))),
      a = (n.rAxisID = X(i.rAxisID, wu(t, "r"))),
      l = n.indexAxis,
      u = (n.iAxisID = r(l, o, s, a)),
      c = (n.vAxisID = r(l, s, o, a))
    ;(n.xScale = this.getScaleForId(o)),
      (n.yScale = this.getScaleForId(s)),
      (n.rScale = this.getScaleForId(a)),
      (n.iScale = this.getScaleForId(u)),
      (n.vScale = this.getScaleForId(c))
  }
  getDataset() {
    return this.chart.data.datasets[this.index]
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index)
  }
  getScaleForId(t) {
    return this.chart.scales[t]
  }
  _getOtherScale(t) {
    const n = this._cachedMeta
    return t === n.iScale ? n.vScale : n.iScale
  }
  reset() {
    this._update("reset")
  }
  _destroy() {
    const t = this._cachedMeta
    this._data && ap(this._data, this), t._stacked && kr(t)
  }
  _dataCheck() {
    const t = this.getDataset(),
      n = t.data || (t.data = []),
      i = this._data
    if (Y(n)) this._data = Nb(n)
    else if (i !== n) {
      if (i) {
        ap(i, this)
        const r = this._cachedMeta
        kr(r), (r._parsed = [])
      }
      n && Object.isExtensible(n) && HS(n, this),
        (this._syncList = []),
        (this._data = n)
    }
  }
  addElements() {
    const t = this._cachedMeta
    this._dataCheck(),
      this.datasetElementType && (t.dataset = new this.datasetElementType())
  }
  buildOrUpdateElements(t) {
    const n = this._cachedMeta,
      i = this.getDataset()
    let r = !1
    this._dataCheck()
    const o = n._stacked
    ;(n._stacked = wp(n.vScale, n)),
      n.stack !== i.stack && ((r = !0), kr(n), (n.stack = i.stack)),
      this._resyncElements(t),
      (r || o !== n._stacked) && bp(this, n._parsed)
  }
  configure() {
    const t = this.chart.config,
      n = t.datasetScopeKeys(this._type),
      i = t.getOptionScopes(this.getDataset(), n, !0)
    ;(this.options = t.createResolver(i, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {})
  }
  parse(t, n) {
    const { _cachedMeta: i, _data: r } = this,
      { iScale: o, _stacked: s } = i,
      a = o.axis
    let l = t === 0 && n === r.length ? !0 : i._sorted,
      u = t > 0 && i._parsed[t - 1],
      c,
      f,
      d
    if (this._parsing === !1) (i._parsed = r), (i._sorted = !0), (d = r)
    else {
      pe(r[t])
        ? (d = this.parseArrayData(i, r, t, n))
        : Y(r[t])
        ? (d = this.parseObjectData(i, r, t, n))
        : (d = this.parsePrimitiveData(i, r, t, n))
      const h = () => f[a] === null || (u && f[a] < u[a])
      for (c = 0; c < n; ++c)
        (i._parsed[c + t] = f = d[c]), l && (h() && (l = !1), (u = f))
      i._sorted = l
    }
    s && bp(this, d)
  }
  parsePrimitiveData(t, n, i, r) {
    const { iScale: o, vScale: s } = t,
      a = o.axis,
      l = s.axis,
      u = o.getLabels(),
      c = o === s,
      f = new Array(r)
    let d, h, m
    for (d = 0, h = r; d < h; ++d)
      (m = d + i),
        (f[d] = { [a]: c || o.parse(u[m], m), [l]: s.parse(n[m], m) })
    return f
  }
  parseArrayData(t, n, i, r) {
    const { xScale: o, yScale: s } = t,
      a = new Array(r)
    let l, u, c, f
    for (l = 0, u = r; l < u; ++l)
      (c = l + i),
        (f = n[c]),
        (a[l] = { x: o.parse(f[0], c), y: s.parse(f[1], c) })
    return a
  }
  parseObjectData(t, n, i, r) {
    const { xScale: o, yScale: s } = t,
      { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing,
      u = new Array(r)
    let c, f, d, h
    for (c = 0, f = r; c < f; ++c)
      (d = c + i),
        (h = n[d]),
        (u[c] = { x: o.parse(To(h, a), d), y: s.parse(To(h, l), d) })
    return u
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t]
  }
  getDataElement(t) {
    return this._cachedMeta.data[t]
  }
  applyStack(t, n, i) {
    const r = this.chart,
      o = this._cachedMeta,
      s = n[t.axis],
      a = { keys: Ny(r, !0), values: n._stacks[t.axis]._visualValues }
    return _p(a, s, o.index, { mode: i })
  }
  updateRangeFromParsed(t, n, i, r) {
    const o = i[n.axis]
    let s = o === null ? NaN : o
    const a = r && i._stacks[n.axis]
    r && a && ((r.values = a), (s = _p(r, o, this._cachedMeta.index))),
      (t.min = Math.min(t.min, s)),
      (t.max = Math.max(t.max, s))
  }
  getMinMax(t, n) {
    const i = this._cachedMeta,
      r = i._parsed,
      o = i._sorted && t === i.iScale,
      s = r.length,
      a = this._getOtherScale(t),
      l = Hb(n, i, this.chart),
      u = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: c, max: f } = Fb(a)
    let d, h
    function m() {
      h = r[d]
      const y = h[a.axis]
      return !Me(h[t.axis]) || c > y || f < y
    }
    for (
      d = 0;
      d < s && !(!m() && (this.updateRangeFromParsed(u, t, h, l), o));
      ++d
    );
    if (o) {
      for (d = s - 1; d >= 0; --d)
        if (!m()) {
          this.updateRangeFromParsed(u, t, h, l)
          break
        }
    }
    return u
  }
  getAllParsedValues(t) {
    const n = this._cachedMeta._parsed,
      i = []
    let r, o, s
    for (r = 0, o = n.length; r < o; ++r) (s = n[r][t.axis]), Me(s) && i.push(s)
    return i
  }
  getMaxOverflow() {
    return !1
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      i = n.iScale,
      r = n.vScale,
      o = this.getParsed(t)
    return {
      label: i ? "" + i.getLabelForValue(o[i.axis]) : "",
      value: r ? "" + r.getLabelForValue(o[r.axis]) : "",
    }
  }
  _update(t) {
    const n = this._cachedMeta
    this.update(t || "default"),
      (n._clip = zb(
        X(this.options.clip, Ib(n.xScale, n.yScale, this.getMaxOverflow())),
      ))
  }
  update(t) {}
  draw() {
    const t = this._ctx,
      n = this.chart,
      i = this._cachedMeta,
      r = i.data || [],
      o = n.chartArea,
      s = [],
      a = this._drawStart || 0,
      l = this._drawCount || r.length - a,
      u = this.options.drawActiveElementsOnTop
    let c
    for (i.dataset && i.dataset.draw(t, o, a, l), c = a; c < a + l; ++c) {
      const f = r[c]
      f.hidden || (f.active && u ? s.push(f) : f.draw(t, o))
    }
    for (c = 0; c < s.length; ++c) s[c].draw(t, o)
  }
  getStyle(t, n) {
    const i = n ? "active" : "default"
    return t === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(i)
      : this.resolveDataElementOptions(t || 0, i)
  }
  getContext(t, n, i) {
    const r = this.getDataset()
    let o
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const s = this._cachedMeta.data[t]
      ;(o = s.$context || (s.$context = Wb(this.getContext(), t, s))),
        (o.parsed = this.getParsed(t)),
        (o.raw = r.data[t]),
        (o.index = o.dataIndex = t)
    } else
      (o =
        this.$context ||
        (this.$context = Bb(this.chart.getContext(), this.index))),
        (o.dataset = r),
        (o.index = o.datasetIndex = this.index)
    return (o.active = !!n), (o.mode = i), o
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t)
  }
  resolveDataElementOptions(t, n) {
    return this._resolveElementOptions(this.dataElementType.id, n, t)
  }
  _resolveElementOptions(t, n = "default", i) {
    const r = n === "active",
      o = this._cachedDataOpts,
      s = t + "-" + n,
      a = o[s],
      l = this.enableOptionSharing && ka(i)
    if (a) return kp(a, l)
    const u = this.chart.config,
      c = u.datasetElementScopeKeys(this._type, t),
      f = r ? [`${t}Hover`, "hover", t, ""] : [t, ""],
      d = u.getOptionScopes(this.getDataset(), c),
      h = Object.keys(me.elements[t]),
      m = () => this.getContext(i, r, n),
      y = u.resolveNamedOptions(d, h, m, f)
    return y.$shared && ((y.$shared = l), (o[s] = Object.freeze(kp(y, l)))), y
  }
  _resolveAnimations(t, n, i) {
    const r = this.chart,
      o = this._cachedDataOpts,
      s = `animation-${n}`,
      a = o[s]
    if (a) return a
    let l
    if (r.options.animation !== !1) {
      const c = this.chart.config,
        f = c.datasetAnimationScopeKeys(this._type, n),
        d = c.getOptionScopes(this.getDataset(), f)
      l = c.createResolver(d, this.getContext(t, i, n))
    }
    const u = new zy(r, l && l.animations)
    return l && l._cacheable && (o[s] = Object.freeze(u)), u
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
  }
  includeOptions(t, n) {
    return !n || Su(t) || this.chart._animationsDisabled
  }
  _getSharedOptions(t, n) {
    const i = this.resolveDataElementOptions(t, n),
      r = this._sharedOptions,
      o = this.getSharedOptions(i),
      s = this.includeOptions(n, o) || o !== r
    return (
      this.updateSharedOptions(o, n, i), { sharedOptions: o, includeOptions: s }
    )
  }
  updateElement(t, n, i, r) {
    Su(r) ? Object.assign(t, i) : this._resolveAnimations(n, r).update(t, i)
  }
  updateSharedOptions(t, n, i) {
    t && !Su(n) && this._resolveAnimations(void 0, n).update(t, i)
  }
  _setStyle(t, n, i, r) {
    t.active = r
    const o = this.getStyle(n, r)
    this._resolveAnimations(n, i, r).update(t, {
      options: (!r && this.getSharedOptions(o)) || o,
    })
  }
  removeHoverStyle(t, n, i) {
    this._setStyle(t, i, "active", !1)
  }
  setHoverStyle(t, n, i) {
    this._setStyle(t, i, "active", !0)
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset
    t && this._setStyle(t, void 0, "active", !1)
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset
    t && this._setStyle(t, void 0, "active", !0)
  }
  _resyncElements(t) {
    const n = this._data,
      i = this._cachedMeta.data
    for (const [a, l, u] of this._syncList) this[a](l, u)
    this._syncList = []
    const r = i.length,
      o = n.length,
      s = Math.min(o, r)
    s && this.parse(0, s),
      o > r
        ? this._insertElements(r, o - r, t)
        : o < r && this._removeElements(o, r - o)
  }
  _insertElements(t, n, i = !0) {
    const r = this._cachedMeta,
      o = r.data,
      s = t + n
    let a
    const l = (u) => {
      for (u.length += n, a = u.length - 1; a >= s; a--) u[a] = u[a - n]
    }
    for (l(o), a = t; a < s; ++a) o[a] = new this.dataElementType()
    this._parsing && l(r._parsed),
      this.parse(t, n),
      i && this.updateElements(o, t, n, "reset")
  }
  updateElements(t, n, i, r) {}
  _removeElements(t, n) {
    const i = this._cachedMeta
    if (this._parsing) {
      const r = i._parsed.splice(t, n)
      i._stacked && kr(i, r)
    }
    i.data.splice(t, n)
  }
  _sync(t) {
    if (this._parsing) this._syncList.push(t)
    else {
      const [n, i, r] = t
      this[n](i, r)
    }
    this.chart._dataChanges.push([this.index, ...t])
  }
  _onDataPush() {
    const t = arguments.length
    this._sync(["_insertElements", this.getDataset().data.length - t, t])
  }
  _onDataPop() {
    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1])
  }
  _onDataShift() {
    this._sync(["_removeElements", 0, 1])
  }
  _onDataSplice(t, n) {
    n && this._sync(["_removeElements", t, n])
    const i = arguments.length - 2
    i && this._sync(["_insertElements", t, i])
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length])
  }
}
I(ro, "defaults", {}),
  I(ro, "datasetElementType", null),
  I(ro, "dataElementType", null)
function Vb(e, t, n) {
  let i = 1,
    r = 1,
    o = 0,
    s = 0
  if (t < ge) {
    const a = e,
      l = a + t,
      u = Math.cos(a),
      c = Math.sin(a),
      f = Math.cos(l),
      d = Math.sin(l),
      h = (v, _, w) => (Ma(v, a, l, !0) ? 1 : Math.max(_, _ * n, w, w * n)),
      m = (v, _, w) => (Ma(v, a, l, !0) ? -1 : Math.min(_, _ * n, w, w * n)),
      y = h(0, u, f),
      x = h(ve, c, d),
      p = m(we, u, f),
      g = m(we + ve, c, d)
    ;(i = (y - p) / 2),
      (r = (x - g) / 2),
      (o = -(y + p) / 2),
      (s = -(x + g) / 2)
  }
  return { ratioX: i, ratioY: r, offsetX: o, offsetY: s }
}
class Fr extends ro {
  constructor(t, n) {
    super(t, n),
      (this.enableOptionSharing = !0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.offsetX = void 0),
      (this.offsetY = void 0)
  }
  linkScales() {}
  parse(t, n) {
    const i = this.getDataset().data,
      r = this._cachedMeta
    if (this._parsing === !1) r._parsed = i
    else {
      let o = (l) => +i[l]
      if (Y(i[t])) {
        const { key: l = "value" } = this._parsing
        o = (u) => +To(i[u], l)
      }
      let s, a
      for (s = t, a = t + n; s < a; ++s) r._parsed[s] = o(s)
    }
  }
  _getRotation() {
    return Ht(this.options.rotation - 90)
  }
  _getCircumference() {
    return Ht(this.options.circumference)
  }
  _getRotationExtents() {
    let t = ge,
      n = -ge
    for (let i = 0; i < this.chart.data.datasets.length; ++i)
      if (
        this.chart.isDatasetVisible(i) &&
        this.chart.getDatasetMeta(i).type === this._type
      ) {
        const r = this.chart.getDatasetMeta(i).controller,
          o = r._getRotation(),
          s = r._getCircumference()
        ;(t = Math.min(t, o)), (n = Math.max(n, o + s))
      }
    return { rotation: t, circumference: n - t }
  }
  update(t) {
    const n = this.chart,
      { chartArea: i } = n,
      r = this._cachedMeta,
      o = r.data,
      s =
        this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing,
      a = Math.max((Math.min(i.width, i.height) - s) / 2, 0),
      l = Math.min(OS(this.options.cutout, a), 1),
      u = this._getRingWeight(this.index),
      { circumference: c, rotation: f } = this._getRotationExtents(),
      { ratioX: d, ratioY: h, offsetX: m, offsetY: y } = Vb(f, c, l),
      x = (i.width - s) / d,
      p = (i.height - s) / h,
      g = Math.max(Math.min(x, p) / 2, 0),
      v = vy(this.options.radius, g),
      _ = Math.max(v * l, 0),
      w = (v - _) / this._getVisibleDatasetWeightTotal()
    ;(this.offsetX = m * v),
      (this.offsetY = y * v),
      (r.total = this.calculateTotal()),
      (this.outerRadius = v - w * this._getRingWeightOffset(this.index)),
      (this.innerRadius = Math.max(this.outerRadius - w * u, 0)),
      this.updateElements(o, 0, o.length, t)
  }
  _circumference(t, n) {
    const i = this.options,
      r = this._cachedMeta,
      o = this._getCircumference()
    return (n && i.animation.animateRotate) ||
      !this.chart.getDataVisibility(t) ||
      r._parsed[t] === null ||
      r.data[t].hidden
      ? 0
      : this.calculateCircumference((r._parsed[t] * o) / ge)
  }
  updateElements(t, n, i, r) {
    const o = r === "reset",
      s = this.chart,
      a = s.chartArea,
      u = s.options.animation,
      c = (a.left + a.right) / 2,
      f = (a.top + a.bottom) / 2,
      d = o && u.animateScale,
      h = d ? 0 : this.innerRadius,
      m = d ? 0 : this.outerRadius,
      { sharedOptions: y, includeOptions: x } = this._getSharedOptions(n, r)
    let p = this._getRotation(),
      g
    for (g = 0; g < n; ++g) p += this._circumference(g, o)
    for (g = n; g < n + i; ++g) {
      const v = this._circumference(g, o),
        _ = t[g],
        w = {
          x: c + this.offsetX,
          y: f + this.offsetY,
          startAngle: p,
          endAngle: p + v,
          circumference: v,
          outerRadius: m,
          innerRadius: h,
        }
      x &&
        (w.options =
          y || this.resolveDataElementOptions(g, _.active ? "active" : r)),
        (p += v),
        this.updateElement(_, g, w, r)
    }
  }
  calculateTotal() {
    const t = this._cachedMeta,
      n = t.data
    let i = 0,
      r
    for (r = 0; r < n.length; r++) {
      const o = t._parsed[r]
      o !== null &&
        !isNaN(o) &&
        this.chart.getDataVisibility(r) &&
        !n[r].hidden &&
        (i += Math.abs(o))
    }
    return i
  }
  calculateCircumference(t) {
    const n = this._cachedMeta.total
    return n > 0 && !isNaN(t) ? ge * (Math.abs(t) / n) : 0
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      i = this.chart,
      r = i.data.labels || [],
      o = kl(n._parsed[t], i.options.locale)
    return { label: r[t] || "", value: o }
  }
  getMaxBorderWidth(t) {
    let n = 0
    const i = this.chart
    let r, o, s, a, l
    if (!t) {
      for (r = 0, o = i.data.datasets.length; r < o; ++r)
        if (i.isDatasetVisible(r)) {
          ;(s = i.getDatasetMeta(r)), (t = s.data), (a = s.controller)
          break
        }
    }
    if (!t) return 0
    for (r = 0, o = t.length; r < o; ++r)
      (l = a.resolveDataElementOptions(r)),
        l.borderAlign !== "inner" &&
          (n = Math.max(n, l.borderWidth || 0, l.hoverBorderWidth || 0))
    return n
  }
  getMaxOffset(t) {
    let n = 0
    for (let i = 0, r = t.length; i < r; ++i) {
      const o = this.resolveDataElementOptions(i)
      n = Math.max(n, o.offset || 0, o.hoverOffset || 0)
    }
    return n
  }
  _getRingWeightOffset(t) {
    let n = 0
    for (let i = 0; i < t; ++i)
      this.chart.isDatasetVisible(i) && (n += this._getRingWeight(i))
    return n
  }
  _getRingWeight(t) {
    return Math.max(X(this.chart.data.datasets[t].weight, 1), 0)
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1
  }
}
I(Fr, "id", "doughnut"),
  I(Fr, "defaults", {
    datasetElementType: !1,
    dataElementType: "arc",
    animation: { animateRotate: !0, animateScale: !1 },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "circumference",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "startAngle",
          "x",
          "y",
          "offset",
          "borderWidth",
          "spacing",
        ],
      },
    },
    cutout: "50%",
    rotation: 0,
    circumference: 360,
    radius: "100%",
    spacing: 0,
    indexAxis: "r",
  }),
  I(Fr, "descriptors", {
    _scriptable: (t) => t !== "spacing",
    _indexable: (t) =>
      t !== "spacing" &&
      !t.startsWith("borderDash") &&
      !t.startsWith("hoverBorderDash"),
  }),
  I(Fr, "overrides", {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const n = t.data
            if (n.labels.length && n.datasets.length) {
              const {
                labels: { pointStyle: i, color: r },
              } = t.legend.options
              return n.labels.map((o, s) => {
                const l = t.getDatasetMeta(0).controller.getStyle(s)
                return {
                  text: o,
                  fillStyle: l.backgroundColor,
                  strokeStyle: l.borderColor,
                  fontColor: r,
                  lineWidth: l.borderWidth,
                  pointStyle: i,
                  hidden: !t.getDataVisibility(s),
                  index: s,
                }
              })
            }
            return []
          },
        },
        onClick(t, n, i) {
          i.chart.toggleDataVisibility(n.index), i.chart.update()
        },
      },
    },
  })
class Lc extends Fr {}
I(Lc, "id", "pie"),
  I(Lc, "defaults", {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: "100%",
  })
function Yn() {
  throw new Error(
    "This method is not implemented: Check that a complete date adapter is provided.",
  )
}
class hd {
  constructor(t) {
    I(this, "options")
    this.options = t || {}
  }
  static override(t) {
    Object.assign(hd.prototype, t)
  }
  init() {}
  formats() {
    return Yn()
  }
  parse() {
    return Yn()
  }
  format() {
    return Yn()
  }
  add() {
    return Yn()
  }
  diff() {
    return Yn()
  }
  startOf() {
    return Yn()
  }
  endOf() {
    return Yn()
  }
}
var Ub = { _date: hd }
function Yb(e, t, n, i) {
  const { controller: r, data: o, _sorted: s } = e,
    a = r._cachedMeta.iScale
  if (a && t === a.axis && t !== "r" && s && o.length) {
    const l = a._reversePixels ? BS : Ac
    if (i) {
      if (r._sharedOptions) {
        const u = o[0],
          c = typeof u.getRange == "function" && u.getRange(t)
        if (c) {
          const f = l(o, t, n - c),
            d = l(o, t, n + c)
          return { lo: f.lo, hi: d.hi }
        }
      }
    } else return l(o, t, n)
  }
  return { lo: 0, hi: o.length - 1 }
}
function Fo(e, t, n, i, r) {
  const o = e.getSortedVisibleDatasetMetas(),
    s = n[t]
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: u, data: c } = o[a],
      { lo: f, hi: d } = Yb(o[a], t, s, r)
    for (let h = f; h <= d; ++h) {
      const m = c[h]
      m.skip || i(m, u, h)
    }
  }
}
function Kb(e) {
  const t = e.indexOf("x") !== -1,
    n = e.indexOf("y") !== -1
  return function (i, r) {
    const o = t ? Math.abs(i.x - r.x) : 0,
      s = n ? Math.abs(i.y - r.y) : 0
    return Math.sqrt(Math.pow(o, 2) + Math.pow(s, 2))
  }
}
function bu(e, t, n, i, r) {
  const o = []
  return (
    (!r && !e.isPointInArea(t)) ||
      Fo(
        e,
        n,
        t,
        function (a, l, u) {
          ;(!r && !zi(a, e.chartArea, 0)) ||
            (a.inRange(t.x, t.y, i) &&
              o.push({ element: a, datasetIndex: l, index: u }))
        },
        !0,
      ),
    o
  )
}
function Xb(e, t, n, i) {
  let r = []
  function o(s, a, l) {
    const { startAngle: u, endAngle: c } = s.getProps(
        ["startAngle", "endAngle"],
        i,
      ),
      { angle: f } = wy(s, { x: t.x, y: t.y })
    Ma(f, u, c) && r.push({ element: s, datasetIndex: a, index: l })
  }
  return Fo(e, n, t, o), r
}
function Qb(e, t, n, i, r, o) {
  let s = []
  const a = Kb(n)
  let l = Number.POSITIVE_INFINITY
  function u(c, f, d) {
    const h = c.inRange(t.x, t.y, r)
    if (i && !h) return
    const m = c.getCenterPoint(r)
    if (!(!!o || e.isPointInArea(m)) && !h) return
    const x = a(t, m)
    x < l
      ? ((s = [{ element: c, datasetIndex: f, index: d }]), (l = x))
      : x === l && s.push({ element: c, datasetIndex: f, index: d })
  }
  return Fo(e, n, t, u), s
}
function ku(e, t, n, i, r, o) {
  return !o && !e.isPointInArea(t)
    ? []
    : n === "r" && !i
    ? Xb(e, t, n, r)
    : Qb(e, t, n, i, r, o)
}
function Cp(e, t, n, i, r) {
  const o = [],
    s = n === "x" ? "inXRange" : "inYRange"
  let a = !1
  return (
    Fo(e, n, t, (l, u, c) => {
      l[s](t[n], r) &&
        (o.push({ element: l, datasetIndex: u, index: c }),
        (a = a || l.inRange(t.x, t.y, r)))
    }),
    i && !a ? [] : o
  )
}
var Gb = {
  evaluateInteractionItems: Fo,
  modes: {
    index(e, t, n, i) {
      const r = Zn(t, e),
        o = n.axis || "x",
        s = n.includeInvisible || !1,
        a = n.intersect ? bu(e, r, o, i, s) : ku(e, r, o, !1, i, s),
        l = []
      return a.length
        ? (e.getSortedVisibleDatasetMetas().forEach((u) => {
            const c = a[0].index,
              f = u.data[c]
            f &&
              !f.skip &&
              l.push({ element: f, datasetIndex: u.index, index: c })
          }),
          l)
        : []
    },
    dataset(e, t, n, i) {
      const r = Zn(t, e),
        o = n.axis || "xy",
        s = n.includeInvisible || !1
      let a = n.intersect ? bu(e, r, o, i, s) : ku(e, r, o, !1, i, s)
      if (a.length > 0) {
        const l = a[0].datasetIndex,
          u = e.getDatasetMeta(l).data
        a = []
        for (let c = 0; c < u.length; ++c)
          a.push({ element: u[c], datasetIndex: l, index: c })
      }
      return a
    },
    point(e, t, n, i) {
      const r = Zn(t, e),
        o = n.axis || "xy",
        s = n.includeInvisible || !1
      return bu(e, r, o, i, s)
    },
    nearest(e, t, n, i) {
      const r = Zn(t, e),
        o = n.axis || "xy",
        s = n.includeInvisible || !1
      return ku(e, r, o, n.intersect, i, s)
    },
    x(e, t, n, i) {
      const r = Zn(t, e)
      return Cp(e, r, "x", n.intersect, i)
    },
    y(e, t, n, i) {
      const r = Zn(t, e)
      return Cp(e, r, "y", n.intersect, i)
    },
  },
}
const $y = ["left", "top", "right", "bottom"]
function Cr(e, t) {
  return e.filter((n) => n.pos === t)
}
function Ep(e, t) {
  return e.filter((n) => $y.indexOf(n.pos) === -1 && n.box.axis === t)
}
function Er(e, t) {
  return e.sort((n, i) => {
    const r = t ? i : n,
      o = t ? n : i
    return r.weight === o.weight ? r.index - o.index : r.weight - o.weight
  })
}
function qb(e) {
  const t = []
  let n, i, r, o, s, a
  for (n = 0, i = (e || []).length; n < i; ++n)
    (r = e[n]),
      ({
        position: o,
        options: { stack: s, stackWeight: a = 1 },
      } = r),
      t.push({
        index: n,
        box: r,
        pos: o,
        horizontal: r.isHorizontal(),
        weight: r.weight,
        stack: s && o + s,
        stackWeight: a,
      })
  return t
}
function Zb(e) {
  const t = {}
  for (const n of e) {
    const { stack: i, pos: r, stackWeight: o } = n
    if (!i || !$y.includes(r)) continue
    const s = t[i] || (t[i] = { count: 0, placed: 0, weight: 0, size: 0 })
    s.count++, (s.weight += o)
  }
  return t
}
function Jb(e, t) {
  const n = Zb(e),
    { vBoxMaxWidth: i, hBoxMaxHeight: r } = t
  let o, s, a
  for (o = 0, s = e.length; o < s; ++o) {
    a = e[o]
    const { fullSize: l } = a.box,
      u = n[a.stack],
      c = u && a.stackWeight / u.weight
    a.horizontal
      ? ((a.width = c ? c * i : l && t.availableWidth), (a.height = r))
      : ((a.width = i), (a.height = c ? c * r : l && t.availableHeight))
  }
  return n
}
function ek(e) {
  const t = qb(e),
    n = Er(
      t.filter((u) => u.box.fullSize),
      !0,
    ),
    i = Er(Cr(t, "left"), !0),
    r = Er(Cr(t, "right")),
    o = Er(Cr(t, "top"), !0),
    s = Er(Cr(t, "bottom")),
    a = Ep(t, "x"),
    l = Ep(t, "y")
  return {
    fullSize: n,
    leftAndTop: i.concat(o),
    rightAndBottom: r.concat(l).concat(s).concat(a),
    chartArea: Cr(t, "chartArea"),
    vertical: i.concat(r).concat(l),
    horizontal: o.concat(s).concat(a),
  }
}
function Pp(e, t, n, i) {
  return Math.max(e[n], t[n]) + Math.max(e[i], t[i])
}
function Fy(e, t) {
  ;(e.top = Math.max(e.top, t.top)),
    (e.left = Math.max(e.left, t.left)),
    (e.bottom = Math.max(e.bottom, t.bottom)),
    (e.right = Math.max(e.right, t.right))
}
function tk(e, t, n, i) {
  const { pos: r, box: o } = n,
    s = e.maxPadding
  if (!Y(r)) {
    n.size && (e[r] -= n.size)
    const f = i[n.stack] || { size: 0, count: 1 }
    ;(f.size = Math.max(f.size, n.horizontal ? o.height : o.width)),
      (n.size = f.size / f.count),
      (e[r] += n.size)
  }
  o.getPadding && Fy(s, o.getPadding())
  const a = Math.max(0, t.outerWidth - Pp(s, e, "left", "right")),
    l = Math.max(0, t.outerHeight - Pp(s, e, "top", "bottom")),
    u = a !== e.w,
    c = l !== e.h
  return (
    (e.w = a),
    (e.h = l),
    n.horizontal ? { same: u, other: c } : { same: c, other: u }
  )
}
function nk(e) {
  const t = e.maxPadding
  function n(i) {
    const r = Math.max(t[i] - e[i], 0)
    return (e[i] += r), r
  }
  ;(e.y += n("top")), (e.x += n("left")), n("right"), n("bottom")
}
function ik(e, t) {
  const n = t.maxPadding
  function i(r) {
    const o = { left: 0, top: 0, right: 0, bottom: 0 }
    return (
      r.forEach((s) => {
        o[s] = Math.max(t[s], n[s])
      }),
      o
    )
  }
  return i(e ? ["left", "right"] : ["top", "bottom"])
}
function jr(e, t, n, i) {
  const r = []
  let o, s, a, l, u, c
  for (o = 0, s = e.length, u = 0; o < s; ++o) {
    ;(a = e[o]),
      (l = a.box),
      l.update(a.width || t.w, a.height || t.h, ik(a.horizontal, t))
    const { same: f, other: d } = tk(t, n, a, i)
    ;(u |= f && r.length), (c = c || d), l.fullSize || r.push(a)
  }
  return (u && jr(r, t, n, i)) || c
}
function gs(e, t, n, i, r) {
  ;(e.top = n),
    (e.left = t),
    (e.right = t + i),
    (e.bottom = n + r),
    (e.width = i),
    (e.height = r)
}
function Mp(e, t, n, i) {
  const r = n.padding
  let { x: o, y: s } = t
  for (const a of e) {
    const l = a.box,
      u = i[a.stack] || { count: 1, placed: 0, weight: 1 },
      c = a.stackWeight / u.weight || 1
    if (a.horizontal) {
      const f = t.w * c,
        d = u.size || l.height
      ka(u.start) && (s = u.start),
        l.fullSize
          ? gs(l, r.left, s, n.outerWidth - r.right - r.left, d)
          : gs(l, t.left + u.placed, s, f, d),
        (u.start = s),
        (u.placed += f),
        (s = l.bottom)
    } else {
      const f = t.h * c,
        d = u.size || l.width
      ka(u.start) && (o = u.start),
        l.fullSize
          ? gs(l, o, r.top, d, n.outerHeight - r.bottom - r.top)
          : gs(l, o, t.top + u.placed, d, f),
        (u.start = o),
        (u.placed += f),
        (o = l.right)
    }
  }
  ;(t.x = o), (t.y = s)
}
var kn = {
  addBox(e, t) {
    e.boxes || (e.boxes = []),
      (t.fullSize = t.fullSize || !1),
      (t.position = t.position || "top"),
      (t.weight = t.weight || 0),
      (t._layers =
        t._layers ||
        function () {
          return [
            {
              z: 0,
              draw(n) {
                t.draw(n)
              },
            },
          ]
        }),
      e.boxes.push(t)
  },
  removeBox(e, t) {
    const n = e.boxes ? e.boxes.indexOf(t) : -1
    n !== -1 && e.boxes.splice(n, 1)
  },
  configure(e, t, n) {
    ;(t.fullSize = n.fullSize), (t.position = n.position), (t.weight = n.weight)
  },
  update(e, t, n, i) {
    if (!e) return
    const r = Ue(e.options.layout.padding),
      o = Math.max(t - r.width, 0),
      s = Math.max(n - r.height, 0),
      a = ek(e.boxes),
      l = a.vertical,
      u = a.horizontal
    q(e.boxes, (y) => {
      typeof y.beforeLayout == "function" && y.beforeLayout()
    })
    const c =
        l.reduce(
          (y, x) => (x.box.options && x.box.options.display === !1 ? y : y + 1),
          0,
        ) || 1,
      f = Object.freeze({
        outerWidth: t,
        outerHeight: n,
        padding: r,
        availableWidth: o,
        availableHeight: s,
        vBoxMaxWidth: o / 2 / c,
        hBoxMaxHeight: s / 2,
      }),
      d = Object.assign({}, r)
    Fy(d, Ue(i))
    const h = Object.assign(
        { maxPadding: d, w: o, h: s, x: r.left, y: r.top },
        r,
      ),
      m = Jb(l.concat(u), f)
    jr(a.fullSize, h, f, m),
      jr(l, h, f, m),
      jr(u, h, f, m) && jr(l, h, f, m),
      nk(h),
      Mp(a.leftAndTop, h, f, m),
      (h.x += h.w),
      (h.y += h.h),
      Mp(a.rightAndBottom, h, f, m),
      (e.chartArea = {
        left: h.left,
        top: h.top,
        right: h.left + h.w,
        bottom: h.top + h.h,
        height: h.h,
        width: h.w,
      }),
      q(a.chartArea, (y) => {
        const x = y.box
        Object.assign(x, e.chartArea),
          x.update(h.w, h.h, { left: 0, top: 0, right: 0, bottom: 0 })
      })
  },
}
class jy {
  acquireContext(t, n) {}
  releaseContext(t) {
    return !1
  }
  addEventListener(t, n, i) {}
  removeEventListener(t, n, i) {}
  getDevicePixelRatio() {
    return 1
  }
  getMaximumSize(t, n, i, r) {
    return (
      (n = Math.max(0, n || t.width)),
      (i = i || t.height),
      { width: n, height: Math.max(0, r ? Math.floor(n / r) : i) }
    )
  }
  isAttached(t) {
    return !0
  }
  updateConfig(t) {}
}
class rk extends jy {
  acquireContext(t) {
    return (t && t.getContext && t.getContext("2d")) || null
  }
  updateConfig(t) {
    t.options.animation = !1
  }
}
const js = "$chartjs",
  ok = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout",
  },
  Tp = (e) => e === null || e === ""
function sk(e, t) {
  const n = e.style,
    i = e.getAttribute("height"),
    r = e.getAttribute("width")
  if (
    ((e[js] = {
      initial: {
        height: i,
        width: r,
        style: { display: n.display, height: n.height, width: n.width },
      },
    }),
    (n.display = n.display || "block"),
    (n.boxSizing = n.boxSizing || "border-box"),
    Tp(r))
  ) {
    const o = yp(e, "width")
    o !== void 0 && (e.width = o)
  }
  if (Tp(i))
    if (e.style.height === "") e.height = e.width / (t || 2)
    else {
      const o = yp(e, "height")
      o !== void 0 && (e.height = o)
    }
  return e
}
const By = Pb ? { passive: !0 } : !1
function ak(e, t, n) {
  e.addEventListener(t, n, By)
}
function lk(e, t, n) {
  e.canvas.removeEventListener(t, n, By)
}
function uk(e, t) {
  const n = ok[e.type] || e.type,
    { x: i, y: r } = Zn(e, t)
  return {
    type: n,
    chart: t,
    native: e,
    x: i !== void 0 ? i : null,
    y: r !== void 0 ? r : null,
  }
}
function Ra(e, t) {
  for (const n of e) if (n === t || n.contains(t)) return !0
}
function ck(e, t, n) {
  const i = e.canvas,
    r = new MutationObserver((o) => {
      let s = !1
      for (const a of o)
        (s = s || Ra(a.addedNodes, i)), (s = s && !Ra(a.removedNodes, i))
      s && n()
    })
  return r.observe(document, { childList: !0, subtree: !0 }), r
}
function fk(e, t, n) {
  const i = e.canvas,
    r = new MutationObserver((o) => {
      let s = !1
      for (const a of o)
        (s = s || Ra(a.removedNodes, i)), (s = s && !Ra(a.addedNodes, i))
      s && n()
    })
  return r.observe(document, { childList: !0, subtree: !0 }), r
}
const Oo = new Map()
let Op = 0
function Wy() {
  const e = window.devicePixelRatio
  e !== Op &&
    ((Op = e),
    Oo.forEach((t, n) => {
      n.currentDevicePixelRatio !== e && t()
    }))
}
function dk(e, t) {
  Oo.size || window.addEventListener("resize", Wy), Oo.set(e, t)
}
function hk(e) {
  Oo.delete(e), Oo.size || window.removeEventListener("resize", Wy)
}
function pk(e, t, n) {
  const i = e.canvas,
    r = i && dd(i)
  if (!r) return
  const o = ky((a, l) => {
      const u = r.clientWidth
      n(a, l), u < r.clientWidth && n()
    }, window),
    s = new ResizeObserver((a) => {
      const l = a[0],
        u = l.contentRect.width,
        c = l.contentRect.height
      ;(u === 0 && c === 0) || o(u, c)
    })
  return s.observe(r), dk(e, o), s
}
function Cu(e, t, n) {
  n && n.disconnect(), t === "resize" && hk(e)
}
function gk(e, t, n) {
  const i = e.canvas,
    r = ky((o) => {
      e.ctx !== null && n(uk(o, e))
    }, e)
  return ak(i, t, r), r
}
class mk extends jy {
  acquireContext(t, n) {
    const i = t && t.getContext && t.getContext("2d")
    return i && i.canvas === t ? (sk(t, n), i) : null
  }
  releaseContext(t) {
    const n = t.canvas
    if (!n[js]) return !1
    const i = n[js].initial
    ;["height", "width"].forEach((o) => {
      const s = i[o]
      ce(s) ? n.removeAttribute(o) : n.setAttribute(o, s)
    })
    const r = i.style || {}
    return (
      Object.keys(r).forEach((o) => {
        n.style[o] = r[o]
      }),
      (n.width = n.width),
      delete n[js],
      !0
    )
  }
  addEventListener(t, n, i) {
    this.removeEventListener(t, n)
    const r = t.$proxies || (t.$proxies = {}),
      s = { attach: ck, detach: fk, resize: pk }[n] || gk
    r[n] = s(t, n, i)
  }
  removeEventListener(t, n) {
    const i = t.$proxies || (t.$proxies = {}),
      r = i[n]
    if (!r) return
    ;(({ attach: Cu, detach: Cu, resize: Cu })[n] || lk)(t, n, r),
      (i[n] = void 0)
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio
  }
  getMaximumSize(t, n, i, r) {
    return Eb(t, n, i, r)
  }
  isAttached(t) {
    const n = dd(t)
    return !!(n && n.isConnected)
  }
}
function yk(e) {
  return !Ly() || (typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas)
    ? rk
    : mk
}
class mi {
  constructor() {
    I(this, "x")
    I(this, "y")
    I(this, "active", !1)
    I(this, "options")
    I(this, "$animations")
  }
  tooltipPosition(t) {
    const { x: n, y: i } = this.getProps(["x", "y"], t)
    return { x: n, y: i }
  }
  hasValue() {
    return Pa(this.x) && Pa(this.y)
  }
  getProps(t, n) {
    const i = this.$animations
    if (!n || !i) return this
    const r = {}
    return (
      t.forEach((o) => {
        r[o] = i[o] && i[o].active() ? i[o]._to : this[o]
      }),
      r
    )
  }
}
I(mi, "defaults", {}), I(mi, "defaultRoutes")
function vk(e, t) {
  const n = e.options.ticks,
    i = xk(e),
    r = Math.min(n.maxTicksLimit || i, i),
    o = n.major.enabled ? wk(t) : [],
    s = o.length,
    a = o[0],
    l = o[s - 1],
    u = []
  if (s > r) return Sk(t, u, o, s / r), u
  const c = _k(o, t, r)
  if (s > 0) {
    let f, d
    const h = s > 1 ? Math.round((l - a) / (s - 1)) : null
    for (ms(t, u, c, ce(h) ? 0 : a - h, a), f = 0, d = s - 1; f < d; f++)
      ms(t, u, c, o[f], o[f + 1])
    return ms(t, u, c, l, ce(h) ? t.length : l + h), u
  }
  return ms(t, u, c), u
}
function xk(e) {
  const t = e.options.offset,
    n = e._tickSize(),
    i = e._length / n + (t ? 0 : 1),
    r = e._maxLength / n
  return Math.floor(Math.min(i, r))
}
function _k(e, t, n) {
  const i = bk(e),
    r = t.length / n
  if (!i) return Math.max(r, 1)
  const o = NS(i)
  for (let s = 0, a = o.length - 1; s < a; s++) {
    const l = o[s]
    if (l > r) return l
  }
  return Math.max(r, 1)
}
function wk(e) {
  const t = []
  let n, i
  for (n = 0, i = e.length; n < i; n++) e[n].major && t.push(n)
  return t
}
function Sk(e, t, n, i) {
  let r = 0,
    o = n[0],
    s
  for (i = Math.ceil(i), s = 0; s < e.length; s++)
    s === o && (t.push(e[s]), r++, (o = n[r * i]))
}
function ms(e, t, n, i, r) {
  const o = X(i, 0),
    s = Math.min(X(r, e.length), e.length)
  let a = 0,
    l,
    u,
    c
  for (
    n = Math.ceil(n), r && ((l = r - i), (n = l / Math.floor(l / n))), c = o;
    c < 0;

  )
    a++, (c = Math.round(o + a * n))
  for (u = Math.max(o, 0); u < s; u++)
    u === c && (t.push(e[u]), a++, (c = Math.round(o + a * n)))
}
function bk(e) {
  const t = e.length
  let n, i
  if (t < 2) return !1
  for (i = e[0], n = 1; n < t; ++n) if (e[n] - e[n - 1] !== i) return !1
  return i
}
const kk = (e) => (e === "left" ? "right" : e === "right" ? "left" : e),
  Ap = (e, t, n) => (t === "top" || t === "left" ? e[t] + n : e[t] - n),
  Rp = (e, t) => Math.min(t || e, e)
function Lp(e, t) {
  const n = [],
    i = e.length / t,
    r = e.length
  let o = 0
  for (; o < r; o += i) n.push(e[Math.floor(o)])
  return n
}
function Ck(e, t, n) {
  const i = e.ticks.length,
    r = Math.min(t, i - 1),
    o = e._startPixel,
    s = e._endPixel,
    a = 1e-6
  let l = e.getPixelForTick(r),
    u
  if (
    !(
      n &&
      (i === 1
        ? (u = Math.max(l - o, s - l))
        : t === 0
        ? (u = (e.getPixelForTick(1) - l) / 2)
        : (u = (l - e.getPixelForTick(r - 1)) / 2),
      (l += r < t ? u : -u),
      l < o - a || l > s + a)
    )
  )
    return l
}
function Ek(e, t) {
  q(e, (n) => {
    const i = n.gc,
      r = i.length / 2
    let o
    if (r > t) {
      for (o = 0; o < r; ++o) delete n.data[i[o]]
      i.splice(0, r)
    }
  })
}
function Pr(e) {
  return e.drawTicks ? e.tickLength : 0
}
function Dp(e, t) {
  if (!e.display) return 0
  const n = De(e.font, t),
    i = Ue(e.padding)
  return (pe(e.text) ? e.text.length : 1) * n.lineHeight + i.height
}
function Pk(e, t) {
  return xi(e, { scale: t, type: "scale" })
}
function Mk(e, t, n) {
  return xi(e, { tick: n, index: t, type: "tick" })
}
function Tk(e, t, n) {
  let i = Cy(e)
  return ((n && t !== "right") || (!n && t === "right")) && (i = kk(i)), i
}
function Ok(e, t, n, i) {
  const { top: r, left: o, bottom: s, right: a, chart: l } = e,
    { chartArea: u, scales: c } = l
  let f = 0,
    d,
    h,
    m
  const y = s - r,
    x = a - o
  if (e.isHorizontal()) {
    if (((h = rt(i, o, a)), Y(n))) {
      const p = Object.keys(n)[0],
        g = n[p]
      m = c[p].getPixelForValue(g) + y - t
    } else
      n === "center" ? (m = (u.bottom + u.top) / 2 + y - t) : (m = Ap(e, n, t))
    d = a - o
  } else {
    if (Y(n)) {
      const p = Object.keys(n)[0],
        g = n[p]
      h = c[p].getPixelForValue(g) - x + t
    } else
      n === "center" ? (h = (u.left + u.right) / 2 - x + t) : (h = Ap(e, n, t))
    ;(m = rt(i, s, r)), (f = n === "left" ? -ve : ve)
  }
  return { titleX: h, titleY: m, maxWidth: d, rotation: f }
}
class pr extends mi {
  constructor(t) {
    super(),
      (this.id = t.id),
      (this.type = t.type),
      (this.options = void 0),
      (this.ctx = t.ctx),
      (this.chart = t.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0)
  }
  init(t) {
    ;(this.options = t.setContext(this.getContext())),
      (this.axis = t.axis),
      (this._userMin = this.parse(t.min)),
      (this._userMax = this.parse(t.max)),
      (this._suggestedMin = this.parse(t.suggestedMin)),
      (this._suggestedMax = this.parse(t.suggestedMax))
  }
  parse(t, n) {
    return t
  }
  getUserBounds() {
    let { _userMin: t, _userMax: n, _suggestedMin: i, _suggestedMax: r } = this
    return (
      (t = ot(t, Number.POSITIVE_INFINITY)),
      (n = ot(n, Number.NEGATIVE_INFINITY)),
      (i = ot(i, Number.POSITIVE_INFINITY)),
      (r = ot(r, Number.NEGATIVE_INFINITY)),
      { min: ot(t, i), max: ot(n, r), minDefined: Me(t), maxDefined: Me(n) }
    )
  }
  getMinMax(t) {
    let { min: n, max: i, minDefined: r, maxDefined: o } = this.getUserBounds(),
      s
    if (r && o) return { min: n, max: i }
    const a = this.getMatchingVisibleMetas()
    for (let l = 0, u = a.length; l < u; ++l)
      (s = a[l].controller.getMinMax(this, t)),
        r || (n = Math.min(n, s.min)),
        o || (i = Math.max(i, s.max))
    return (
      (n = o && n > i ? i : n),
      (i = r && n > i ? n : i),
      { min: ot(n, ot(i, n)), max: ot(i, ot(n, i)) }
    )
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    }
  }
  getTicks() {
    return this.ticks
  }
  getLabels() {
    const t = this.chart.data
    return (
      this.options.labels ||
      (this.isHorizontal() ? t.xLabels : t.yLabels) ||
      t.labels ||
      []
    )
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t))
  }
  beforeLayout() {
    ;(this._cache = {}), (this._dataLimitsCached = !1)
  }
  beforeUpdate() {
    te(this.options.beforeUpdate, [this])
  }
  update(t, n, i) {
    const { beginAtZero: r, grace: o, ticks: s } = this.options,
      a = s.sampleSize
    this.beforeUpdate(),
      (this.maxWidth = t),
      (this.maxHeight = n),
      (this._margins = i =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + i.left + i.right
        : this.height + i.top + i.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = fb(this, o, r)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks()
    const l = a < this.ticks.length
    this._convertTicksToLabels(l ? Lp(this.ticks, a) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      s.display &&
        (s.autoSkip || s.source === "auto") &&
        ((this.ticks = vk(this, this.ticks)),
        (this._labelSizes = null),
        this.afterAutoSkip()),
      l && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate()
  }
  configure() {
    let t = this.options.reverse,
      n,
      i
    this.isHorizontal()
      ? ((n = this.left), (i = this.right))
      : ((n = this.top), (i = this.bottom), (t = !t)),
      (this._startPixel = n),
      (this._endPixel = i),
      (this._reversePixels = t),
      (this._length = i - n),
      (this._alignToPixels = this.options.alignToPixels)
  }
  afterUpdate() {
    te(this.options.afterUpdate, [this])
  }
  beforeSetDimensions() {
    te(this.options.beforeSetDimensions, [this])
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = 0),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = 0),
        (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0)
  }
  afterSetDimensions() {
    te(this.options.afterSetDimensions, [this])
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), te(this.options[t], [this])
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits")
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks("afterDataLimits")
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks")
  }
  buildTicks() {
    return []
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks")
  }
  beforeTickToLabelConversion() {
    te(this.options.beforeTickToLabelConversion, [this])
  }
  generateTickLabels(t) {
    const n = this.options.ticks
    let i, r, o
    for (i = 0, r = t.length; i < r; i++)
      (o = t[i]), (o.label = te(n.callback, [o.value, i, t], this))
  }
  afterTickToLabelConversion() {
    te(this.options.afterTickToLabelConversion, [this])
  }
  beforeCalculateLabelRotation() {
    te(this.options.beforeCalculateLabelRotation, [this])
  }
  calculateLabelRotation() {
    const t = this.options,
      n = t.ticks,
      i = Rp(this.ticks.length, t.ticks.maxTicksLimit),
      r = n.minRotation || 0,
      o = n.maxRotation
    let s = r,
      a,
      l,
      u
    if (
      !this._isVisible() ||
      !n.display ||
      r >= o ||
      i <= 1 ||
      !this.isHorizontal()
    ) {
      this.labelRotation = r
      return
    }
    const c = this._getLabelSizes(),
      f = c.widest.width,
      d = c.highest.height,
      h = _t(this.chart.width - f, 0, this.maxWidth)
    ;(a = t.offset ? this.maxWidth / i : h / (i - 1)),
      f + 6 > a &&
        ((a = h / (i - (t.offset ? 0.5 : 1))),
        (l =
          this.maxHeight -
          Pr(t.grid) -
          n.padding -
          Dp(t.title, this.chart.options.font)),
        (u = Math.sqrt(f * f + d * d)),
        (s = rd(
          Math.min(
            Math.asin(_t((c.highest.height + 6) / a, -1, 1)),
            Math.asin(_t(l / u, -1, 1)) - Math.asin(_t(d / u, -1, 1)),
          ),
        )),
        (s = Math.max(r, Math.min(o, s)))),
      (this.labelRotation = s)
  }
  afterCalculateLabelRotation() {
    te(this.options.afterCalculateLabelRotation, [this])
  }
  afterAutoSkip() {}
  beforeFit() {
    te(this.options.beforeFit, [this])
  }
  fit() {
    const t = { width: 0, height: 0 },
      {
        chart: n,
        options: { ticks: i, title: r, grid: o },
      } = this,
      s = this._isVisible(),
      a = this.isHorizontal()
    if (s) {
      const l = Dp(r, n.options.font)
      if (
        (a
          ? ((t.width = this.maxWidth), (t.height = Pr(o) + l))
          : ((t.height = this.maxHeight), (t.width = Pr(o) + l)),
        i.display && this.ticks.length)
      ) {
        const {
            first: u,
            last: c,
            widest: f,
            highest: d,
          } = this._getLabelSizes(),
          h = i.padding * 2,
          m = Ht(this.labelRotation),
          y = Math.cos(m),
          x = Math.sin(m)
        if (a) {
          const p = i.mirror ? 0 : x * f.width + y * d.height
          t.height = Math.min(this.maxHeight, t.height + p + h)
        } else {
          const p = i.mirror ? 0 : y * f.width + x * d.height
          t.width = Math.min(this.maxWidth, t.width + p + h)
        }
        this._calculatePadding(u, c, x, y)
      }
    }
    this._handleMargins(),
      a
        ? ((this.width = this._length =
            n.width - this._margins.left - this._margins.right),
          (this.height = t.height))
        : ((this.width = t.width),
          (this.height = this._length =
            n.height - this._margins.top - this._margins.bottom))
  }
  _calculatePadding(t, n, i, r) {
    const {
        ticks: { align: o, padding: s },
        position: a,
      } = this.options,
      l = this.labelRotation !== 0,
      u = a !== "top" && this.axis === "x"
    if (this.isHorizontal()) {
      const c = this.getPixelForTick(0) - this.left,
        f = this.right - this.getPixelForTick(this.ticks.length - 1)
      let d = 0,
        h = 0
      l
        ? u
          ? ((d = r * t.width), (h = i * n.height))
          : ((d = i * t.height), (h = r * n.width))
        : o === "start"
        ? (h = n.width)
        : o === "end"
        ? (d = t.width)
        : o !== "inner" && ((d = t.width / 2), (h = n.width / 2)),
        (this.paddingLeft = Math.max(
          ((d - c + s) * this.width) / (this.width - c),
          0,
        )),
        (this.paddingRight = Math.max(
          ((h - f + s) * this.width) / (this.width - f),
          0,
        ))
    } else {
      let c = n.height / 2,
        f = t.height / 2
      o === "start"
        ? ((c = 0), (f = t.height))
        : o === "end" && ((c = n.height), (f = 0)),
        (this.paddingTop = c + s),
        (this.paddingBottom = f + s)
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(
        this.paddingBottom,
        this._margins.bottom,
      )))
  }
  afterFit() {
    te(this.options.afterFit, [this])
  }
  isHorizontal() {
    const { axis: t, position: n } = this.options
    return n === "top" || n === "bottom" || t === "x"
  }
  isFullSize() {
    return this.options.fullSize
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t)
    let n, i
    for (n = 0, i = t.length; n < i; n++)
      ce(t[n].label) && (t.splice(n, 1), i--, n--)
    this.afterTickToLabelConversion()
  }
  _getLabelSizes() {
    let t = this._labelSizes
    if (!t) {
      const n = this.options.ticks.sampleSize
      let i = this.ticks
      n < i.length && (i = Lp(i, n)),
        (this._labelSizes = t =
          this._computeLabelSizes(
            i,
            i.length,
            this.options.ticks.maxTicksLimit,
          ))
    }
    return t
  }
  _computeLabelSizes(t, n, i) {
    const { ctx: r, _longestTextCache: o } = this,
      s = [],
      a = [],
      l = Math.floor(n / Rp(n, i))
    let u = 0,
      c = 0,
      f,
      d,
      h,
      m,
      y,
      x,
      p,
      g,
      v,
      _,
      w
    for (f = 0; f < n; f += l) {
      if (
        ((m = t[f].label),
        (y = this._resolveTickFontOptions(f)),
        (r.font = x = y.string),
        (p = o[x] = o[x] || { data: {}, gc: [] }),
        (g = y.lineHeight),
        (v = _ = 0),
        !ce(m) && !pe(m))
      )
        (v = Ta(r, p.data, p.gc, v, m)), (_ = g)
      else if (pe(m))
        for (d = 0, h = m.length; d < h; ++d)
          (w = m[d]),
            !ce(w) && !pe(w) && ((v = Ta(r, p.data, p.gc, v, w)), (_ += g))
      s.push(v), a.push(_), (u = Math.max(v, u)), (c = Math.max(_, c))
    }
    Ek(o, n)
    const b = s.indexOf(u),
      S = a.indexOf(c),
      k = (M) => ({ width: s[M] || 0, height: a[M] || 0 })
    return {
      first: k(0),
      last: k(n - 1),
      widest: k(b),
      highest: k(S),
      widths: s,
      heights: a,
    }
  }
  getLabelForValue(t) {
    return t
  }
  getPixelForValue(t, n) {
    return NaN
  }
  getValueForPixel(t) {}
  getPixelForTick(t) {
    const n = this.ticks
    return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value)
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t)
    const n = this._startPixel + t * this._length
    return jS(this._alignToPixels ? Un(this.chart, n, 0) : n)
  }
  getDecimalForPixel(t) {
    const n = (t - this._startPixel) / this._length
    return this._reversePixels ? 1 - n : n
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue())
  }
  getBaseValue() {
    const { min: t, max: n } = this
    return t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0
  }
  getContext(t) {
    const n = this.ticks || []
    if (t >= 0 && t < n.length) {
      const i = n[t]
      return i.$context || (i.$context = Mk(this.getContext(), t, i))
    }
    return this.$context || (this.$context = Pk(this.chart.getContext(), this))
  }
  _tickSize() {
    const t = this.options.ticks,
      n = Ht(this.labelRotation),
      i = Math.abs(Math.cos(n)),
      r = Math.abs(Math.sin(n)),
      o = this._getLabelSizes(),
      s = t.autoSkipPadding || 0,
      a = o ? o.widest.width + s : 0,
      l = o ? o.highest.height + s : 0
    return this.isHorizontal()
      ? l * i > a * r
        ? a / i
        : l / r
      : l * r < a * i
      ? l / i
      : a / r
  }
  _isVisible() {
    const t = this.options.display
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0
  }
  _computeGridLineItems(t) {
    const n = this.axis,
      i = this.chart,
      r = this.options,
      { grid: o, position: s, border: a } = r,
      l = o.offset,
      u = this.isHorizontal(),
      f = this.ticks.length + (l ? 1 : 0),
      d = Pr(o),
      h = [],
      m = a.setContext(this.getContext()),
      y = m.display ? m.width : 0,
      x = y / 2,
      p = function (N) {
        return Un(i, N, y)
      }
    let g, v, _, w, b, S, k, M, E, A, L, W
    if (s === "top")
      (g = p(this.bottom)),
        (S = this.bottom - d),
        (M = g - x),
        (A = p(t.top) + x),
        (W = t.bottom)
    else if (s === "bottom")
      (g = p(this.top)),
        (A = t.top),
        (W = p(t.bottom) - x),
        (S = g + x),
        (M = this.top + d)
    else if (s === "left")
      (g = p(this.right)),
        (b = this.right - d),
        (k = g - x),
        (E = p(t.left) + x),
        (L = t.right)
    else if (s === "right")
      (g = p(this.left)),
        (E = t.left),
        (L = p(t.right) - x),
        (b = g + x),
        (k = this.left + d)
    else if (n === "x") {
      if (s === "center") g = p((t.top + t.bottom) / 2 + 0.5)
      else if (Y(s)) {
        const N = Object.keys(s)[0],
          $ = s[N]
        g = p(this.chart.scales[N].getPixelForValue($))
      }
      ;(A = t.top), (W = t.bottom), (S = g + x), (M = S + d)
    } else if (n === "y") {
      if (s === "center") g = p((t.left + t.right) / 2)
      else if (Y(s)) {
        const N = Object.keys(s)[0],
          $ = s[N]
        g = p(this.chart.scales[N].getPixelForValue($))
      }
      ;(b = g - x), (k = b - d), (E = t.left), (L = t.right)
    }
    const U = X(r.ticks.maxTicksLimit, f),
      F = Math.max(1, Math.ceil(f / U))
    for (v = 0; v < f; v += F) {
      const N = this.getContext(v),
        $ = o.setContext(N),
        P = a.setContext(N),
        T = $.lineWidth,
        D = $.color,
        Q = P.dash || [],
        G = P.dashOffset,
        We = $.tickWidth,
        Se = $.tickColor,
        Xe = $.tickBorderDash || [],
        be = $.tickBorderDashOffset
      ;(_ = Ck(this, v, l)),
        _ !== void 0 &&
          ((w = Un(i, _, T)),
          u ? (b = k = E = L = w) : (S = M = A = W = w),
          h.push({
            tx1: b,
            ty1: S,
            tx2: k,
            ty2: M,
            x1: E,
            y1: A,
            x2: L,
            y2: W,
            width: T,
            color: D,
            borderDash: Q,
            borderDashOffset: G,
            tickWidth: We,
            tickColor: Se,
            tickBorderDash: Xe,
            tickBorderDashOffset: be,
          }))
    }
    return (this._ticksLength = f), (this._borderValue = g), h
  }
  _computeLabelItems(t) {
    const n = this.axis,
      i = this.options,
      { position: r, ticks: o } = i,
      s = this.isHorizontal(),
      a = this.ticks,
      { align: l, crossAlign: u, padding: c, mirror: f } = o,
      d = Pr(i.grid),
      h = d + c,
      m = f ? -c : h,
      y = -Ht(this.labelRotation),
      x = []
    let p,
      g,
      v,
      _,
      w,
      b,
      S,
      k,
      M,
      E,
      A,
      L,
      W = "middle"
    if (r === "top") (b = this.bottom - m), (S = this._getXAxisLabelAlignment())
    else if (r === "bottom")
      (b = this.top + m), (S = this._getXAxisLabelAlignment())
    else if (r === "left") {
      const F = this._getYAxisLabelAlignment(d)
      ;(S = F.textAlign), (w = F.x)
    } else if (r === "right") {
      const F = this._getYAxisLabelAlignment(d)
      ;(S = F.textAlign), (w = F.x)
    } else if (n === "x") {
      if (r === "center") b = (t.top + t.bottom) / 2 + h
      else if (Y(r)) {
        const F = Object.keys(r)[0],
          N = r[F]
        b = this.chart.scales[F].getPixelForValue(N) + h
      }
      S = this._getXAxisLabelAlignment()
    } else if (n === "y") {
      if (r === "center") w = (t.left + t.right) / 2 - h
      else if (Y(r)) {
        const F = Object.keys(r)[0],
          N = r[F]
        w = this.chart.scales[F].getPixelForValue(N)
      }
      S = this._getYAxisLabelAlignment(d).textAlign
    }
    n === "y" && (l === "start" ? (W = "top") : l === "end" && (W = "bottom"))
    const U = this._getLabelSizes()
    for (p = 0, g = a.length; p < g; ++p) {
      ;(v = a[p]), (_ = v.label)
      const F = o.setContext(this.getContext(p))
      ;(k = this.getPixelForTick(p) + o.labelOffset),
        (M = this._resolveTickFontOptions(p)),
        (E = M.lineHeight),
        (A = pe(_) ? _.length : 1)
      const N = A / 2,
        $ = F.color,
        P = F.textStrokeColor,
        T = F.textStrokeWidth
      let D = S
      s
        ? ((w = k),
          S === "inner" &&
            (p === g - 1
              ? (D = this.options.reverse ? "left" : "right")
              : p === 0
              ? (D = this.options.reverse ? "right" : "left")
              : (D = "center")),
          r === "top"
            ? u === "near" || y !== 0
              ? (L = -A * E + E / 2)
              : u === "center"
              ? (L = -U.highest.height / 2 - N * E + E)
              : (L = -U.highest.height + E / 2)
            : u === "near" || y !== 0
            ? (L = E / 2)
            : u === "center"
            ? (L = U.highest.height / 2 - N * E)
            : (L = U.highest.height - A * E),
          f && (L *= -1),
          y !== 0 && !F.showLabelBackdrop && (w += (E / 2) * Math.sin(y)))
        : ((b = k), (L = ((1 - A) * E) / 2))
      let Q
      if (F.showLabelBackdrop) {
        const G = Ue(F.backdropPadding),
          We = U.heights[p],
          Se = U.widths[p]
        let Xe = L - G.top,
          be = 0 - G.left
        switch (W) {
          case "middle":
            Xe -= We / 2
            break
          case "bottom":
            Xe -= We
            break
        }
        switch (S) {
          case "center":
            be -= Se / 2
            break
          case "right":
            be -= Se
            break
        }
        Q = {
          left: be,
          top: Xe,
          width: Se + G.width,
          height: We + G.height,
          color: F.backdropColor,
        }
      }
      x.push({
        label: _,
        font: M,
        textOffset: L,
        options: {
          rotation: y,
          color: $,
          strokeColor: P,
          strokeWidth: T,
          textAlign: D,
          textBaseline: W,
          translation: [w, b],
          backdrop: Q,
        },
      })
    }
    return x
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: n } = this.options
    if (-Ht(this.labelRotation)) return t === "top" ? "left" : "right"
    let r = "center"
    return (
      n.align === "start"
        ? (r = "left")
        : n.align === "end"
        ? (r = "right")
        : n.align === "inner" && (r = "inner"),
      r
    )
  }
  _getYAxisLabelAlignment(t) {
    const {
        position: n,
        ticks: { crossAlign: i, mirror: r, padding: o },
      } = this.options,
      s = this._getLabelSizes(),
      a = t + o,
      l = s.widest.width
    let u, c
    return (
      n === "left"
        ? r
          ? ((c = this.right + o),
            i === "near"
              ? (u = "left")
              : i === "center"
              ? ((u = "center"), (c += l / 2))
              : ((u = "right"), (c += l)))
          : ((c = this.right - a),
            i === "near"
              ? (u = "right")
              : i === "center"
              ? ((u = "center"), (c -= l / 2))
              : ((u = "left"), (c = this.left)))
        : n === "right"
        ? r
          ? ((c = this.left + o),
            i === "near"
              ? (u = "right")
              : i === "center"
              ? ((u = "center"), (c -= l / 2))
              : ((u = "left"), (c -= l)))
          : ((c = this.left + a),
            i === "near"
              ? (u = "left")
              : i === "center"
              ? ((u = "center"), (c += l / 2))
              : ((u = "right"), (c = this.right)))
        : (u = "right"),
      { textAlign: u, x: c }
    )
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return
    const t = this.chart,
      n = this.options.position
    if (n === "left" || n === "right")
      return { top: 0, left: this.left, bottom: t.height, right: this.right }
    if (n === "top" || n === "bottom")
      return { top: this.top, left: 0, bottom: this.bottom, right: t.width }
  }
  drawBackground() {
    const {
      ctx: t,
      options: { backgroundColor: n },
      left: i,
      top: r,
      width: o,
      height: s,
    } = this
    n && (t.save(), (t.fillStyle = n), t.fillRect(i, r, o, s), t.restore())
  }
  getLineWidthForValue(t) {
    const n = this.options.grid
    if (!this._isVisible() || !n.display) return 0
    const r = this.ticks.findIndex((o) => o.value === t)
    return r >= 0 ? n.setContext(this.getContext(r)).lineWidth : 0
  }
  drawGrid(t) {
    const n = this.options.grid,
      i = this.ctx,
      r =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(t))
    let o, s
    const a = (l, u, c) => {
      !c.width ||
        !c.color ||
        (i.save(),
        (i.lineWidth = c.width),
        (i.strokeStyle = c.color),
        i.setLineDash(c.borderDash || []),
        (i.lineDashOffset = c.borderDashOffset),
        i.beginPath(),
        i.moveTo(l.x, l.y),
        i.lineTo(u.x, u.y),
        i.stroke(),
        i.restore())
    }
    if (n.display)
      for (o = 0, s = r.length; o < s; ++o) {
        const l = r[o]
        n.drawOnChartArea && a({ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }, l),
          n.drawTicks &&
            a(
              { x: l.tx1, y: l.ty1 },
              { x: l.tx2, y: l.ty2 },
              {
                color: l.tickColor,
                width: l.tickWidth,
                borderDash: l.tickBorderDash,
                borderDashOffset: l.tickBorderDashOffset,
              },
            )
      }
  }
  drawBorder() {
    const {
        chart: t,
        ctx: n,
        options: { border: i, grid: r },
      } = this,
      o = i.setContext(this.getContext()),
      s = i.display ? o.width : 0
    if (!s) return
    const a = r.setContext(this.getContext(0)).lineWidth,
      l = this._borderValue
    let u, c, f, d
    this.isHorizontal()
      ? ((u = Un(t, this.left, s) - s / 2),
        (c = Un(t, this.right, a) + a / 2),
        (f = d = l))
      : ((f = Un(t, this.top, s) - s / 2),
        (d = Un(t, this.bottom, a) + a / 2),
        (u = c = l)),
      n.save(),
      (n.lineWidth = o.width),
      (n.strokeStyle = o.color),
      n.beginPath(),
      n.moveTo(u, f),
      n.lineTo(c, d),
      n.stroke(),
      n.restore()
  }
  drawLabels(t) {
    if (!this.options.ticks.display) return
    const i = this.ctx,
      r = this._computeLabelArea()
    r && sd(i, r)
    const o = this.getLabelItems(t)
    for (const s of o) {
      const a = s.options,
        l = s.font,
        u = s.label,
        c = s.textOffset
      ir(i, u, 0, c, l, a)
    }
    r && ad(i)
  }
  drawTitle() {
    const {
      ctx: t,
      options: { position: n, title: i, reverse: r },
    } = this
    if (!i.display) return
    const o = De(i.font),
      s = Ue(i.padding),
      a = i.align
    let l = o.lineHeight / 2
    n === "bottom" || n === "center" || Y(n)
      ? ((l += s.bottom),
        pe(i.text) && (l += o.lineHeight * (i.text.length - 1)))
      : (l += s.top)
    const { titleX: u, titleY: c, maxWidth: f, rotation: d } = Ok(this, l, n, a)
    ir(t, i.text, 0, 0, o, {
      color: i.color,
      maxWidth: f,
      rotation: d,
      textAlign: Tk(a, n, r),
      textBaseline: "middle",
      translation: [u, c],
    })
  }
  draw(t) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(t),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(t))
  }
  _layers() {
    const t = this.options,
      n = (t.ticks && t.ticks.z) || 0,
      i = X(t.grid && t.grid.z, -1),
      r = X(t.border && t.border.z, 0)
    return !this._isVisible() || this.draw !== pr.prototype.draw
      ? [
          {
            z: n,
            draw: (o) => {
              this.draw(o)
            },
          },
        ]
      : [
          {
            z: i,
            draw: (o) => {
              this.drawBackground(), this.drawGrid(o), this.drawTitle()
            },
          },
          {
            z: r,
            draw: () => {
              this.drawBorder()
            },
          },
          {
            z: n,
            draw: (o) => {
              this.drawLabels(o)
            },
          },
        ]
  }
  getMatchingVisibleMetas(t) {
    const n = this.chart.getSortedVisibleDatasetMetas(),
      i = this.axis + "AxisID",
      r = []
    let o, s
    for (o = 0, s = n.length; o < s; ++o) {
      const a = n[o]
      a[i] === this.id && (!t || a.type === t) && r.push(a)
    }
    return r
  }
  _resolveTickFontOptions(t) {
    const n = this.options.ticks.setContext(this.getContext(t))
    return De(n.font)
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight
    return (this.isHorizontal() ? this.width : this.height) / t
  }
}
class ys {
  constructor(t, n, i) {
    ;(this.type = t),
      (this.scope = n),
      (this.override = i),
      (this.items = Object.create(null))
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype)
  }
  register(t) {
    const n = Object.getPrototypeOf(t)
    let i
    Lk(n) && (i = this.register(n))
    const r = this.items,
      o = t.id,
      s = this.scope + "." + o
    if (!o) throw new Error("class does not have id: " + t)
    return (
      o in r ||
        ((r[o] = t),
        Ak(t, s, i),
        this.override && me.override(t.id, t.overrides)),
      s
    )
  }
  get(t) {
    return this.items[t]
  }
  unregister(t) {
    const n = this.items,
      i = t.id,
      r = this.scope
    i in n && delete n[i],
      r && i in me[r] && (delete me[r][i], this.override && delete gi[i])
  }
}
function Ak(e, t, n) {
  const i = Mo(Object.create(null), [n ? me.get(n) : {}, me.get(t), e.defaults])
  me.set(t, i),
    e.defaultRoutes && Rk(t, e.defaultRoutes),
    e.descriptors && me.describe(t, e.descriptors)
}
function Rk(e, t) {
  Object.keys(t).forEach((n) => {
    const i = n.split("."),
      r = i.pop(),
      o = [e].concat(i).join("."),
      s = t[n].split("."),
      a = s.pop(),
      l = s.join(".")
    me.route(o, r, l, a)
  })
}
function Lk(e) {
  return "id" in e && "defaults" in e
}
class Dk {
  constructor() {
    ;(this.controllers = new ys(ro, "datasets", !0)),
      (this.elements = new ys(mi, "elements")),
      (this.plugins = new ys(Object, "plugins")),
      (this.scales = new ys(pr, "scales")),
      (this._typedRegistries = [this.controllers, this.scales, this.elements])
  }
  add(...t) {
    this._each("register", t)
  }
  remove(...t) {
    this._each("unregister", t)
  }
  addControllers(...t) {
    this._each("register", t, this.controllers)
  }
  addElements(...t) {
    this._each("register", t, this.elements)
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins)
  }
  addScales(...t) {
    this._each("register", t, this.scales)
  }
  getController(t) {
    return this._get(t, this.controllers, "controller")
  }
  getElement(t) {
    return this._get(t, this.elements, "element")
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin")
  }
  getScale(t) {
    return this._get(t, this.scales, "scale")
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers)
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements)
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins)
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales)
  }
  _each(t, n, i) {
    ;[...n].forEach((r) => {
      const o = i || this._getRegistryForType(r)
      i || o.isForType(r) || (o === this.plugins && r.id)
        ? this._exec(t, o, r)
        : q(r, (s) => {
            const a = i || this._getRegistryForType(s)
            this._exec(t, a, s)
          })
    })
  }
  _exec(t, n, i) {
    const r = id(t)
    te(i["before" + r], [], i), n[t](i), te(i["after" + r], [], i)
  }
  _getRegistryForType(t) {
    for (let n = 0; n < this._typedRegistries.length; n++) {
      const i = this._typedRegistries[n]
      if (i.isForType(t)) return i
    }
    return this.plugins
  }
  _get(t, n, i) {
    const r = n.get(t)
    if (r === void 0)
      throw new Error('"' + t + '" is not a registered ' + i + ".")
    return r
  }
}
var Ft = new Dk()
class Ik {
  constructor() {
    this._init = []
  }
  notify(t, n, i, r) {
    n === "beforeInit" &&
      ((this._init = this._createDescriptors(t, !0)),
      this._notify(this._init, t, "install"))
    const o = r ? this._descriptors(t).filter(r) : this._descriptors(t),
      s = this._notify(o, t, n, i)
    return (
      n === "afterDestroy" &&
        (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")),
      s
    )
  }
  _notify(t, n, i, r) {
    r = r || {}
    for (const o of t) {
      const s = o.plugin,
        a = s[i],
        l = [n, r, o.options]
      if (te(a, l, s) === !1 && r.cancelable) return !1
    }
    return !0
  }
  invalidate() {
    ce(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0))
  }
  _descriptors(t) {
    if (this._cache) return this._cache
    const n = (this._cache = this._createDescriptors(t))
    return this._notifyStateChanges(t), n
  }
  _createDescriptors(t, n) {
    const i = t && t.config,
      r = X(i.options && i.options.plugins, {}),
      o = zk(i)
    return r === !1 && !n ? [] : $k(t, o, r, n)
  }
  _notifyStateChanges(t) {
    const n = this._oldCache || [],
      i = this._cache,
      r = (o, s) => o.filter((a) => !s.some((l) => a.plugin.id === l.plugin.id))
    this._notify(r(n, i), t, "stop"), this._notify(r(i, n), t, "start")
  }
}
function zk(e) {
  const t = {},
    n = [],
    i = Object.keys(Ft.plugins.items)
  for (let o = 0; o < i.length; o++) n.push(Ft.getPlugin(i[o]))
  const r = e.plugins || []
  for (let o = 0; o < r.length; o++) {
    const s = r[o]
    n.indexOf(s) === -1 && (n.push(s), (t[s.id] = !0))
  }
  return { plugins: n, localIds: t }
}
function Nk(e, t) {
  return !t && e === !1 ? null : e === !0 ? {} : e
}
function $k(e, { plugins: t, localIds: n }, i, r) {
  const o = [],
    s = e.getContext()
  for (const a of t) {
    const l = a.id,
      u = Nk(i[l], r)
    u !== null &&
      o.push({
        plugin: a,
        options: Fk(e.config, { plugin: a, local: n[l] }, u, s),
      })
  }
  return o
}
function Fk(e, { plugin: t, local: n }, i, r) {
  const o = e.pluginScopeKeys(t),
    s = e.getOptionScopes(i, o)
  return (
    n && t.defaults && s.push(t.defaults),
    e.createResolver(s, r, [""], { scriptable: !1, indexable: !1, allKeys: !0 })
  )
}
function Dc(e, t) {
  const n = me.datasets[e] || {}
  return (
    ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || n.indexAxis || "x"
  )
}
function jk(e, t) {
  let n = e
  return (
    e === "_index_" ? (n = t) : e === "_value_" && (n = t === "x" ? "y" : "x"),
    n
  )
}
function Bk(e, t) {
  return e === t ? "_index_" : "_value_"
}
function Ip(e) {
  if (e === "x" || e === "y" || e === "r") return e
}
function Wk(e) {
  if (e === "top" || e === "bottom") return "x"
  if (e === "left" || e === "right") return "y"
}
function Ic(e, ...t) {
  if (Ip(e)) return e
  for (const n of t) {
    const i =
      n.axis || Wk(n.position) || (e.length > 1 && Ip(e[0].toLowerCase()))
    if (i) return i
  }
  throw new Error(
    `Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`,
  )
}
function zp(e, t, n) {
  if (n[t + "AxisID"] === e) return { axis: t }
}
function Hk(e, t) {
  if (t.data && t.data.datasets) {
    const n = t.data.datasets.filter((i) => i.xAxisID === e || i.yAxisID === e)
    if (n.length) return zp(e, "x", n[0]) || zp(e, "y", n[0])
  }
  return {}
}
function Vk(e, t) {
  const n = gi[e.type] || { scales: {} },
    i = t.scales || {},
    r = Dc(e.type, t),
    o = Object.create(null)
  return (
    Object.keys(i).forEach((s) => {
      const a = i[s]
      if (!Y(a))
        return console.error(`Invalid scale configuration for scale: ${s}`)
      if (a._proxy)
        return console.warn(
          `Ignoring resolver passed as options for scale: ${s}`,
        )
      const l = Ic(s, a, Hk(s, e), me.scales[a.type]),
        u = Bk(l, r),
        c = n.scales || {}
      o[s] = to(Object.create(null), [{ axis: l }, a, c[l], c[u]])
    }),
    e.data.datasets.forEach((s) => {
      const a = s.type || e.type,
        l = s.indexAxis || Dc(a, t),
        c = (gi[a] || {}).scales || {}
      Object.keys(c).forEach((f) => {
        const d = jk(f, l),
          h = s[d + "AxisID"] || d
        ;(o[h] = o[h] || Object.create(null)),
          to(o[h], [{ axis: d }, i[h], c[f]])
      })
    }),
    Object.keys(o).forEach((s) => {
      const a = o[s]
      to(a, [me.scales[a.type], me.scale])
    }),
    o
  )
}
function Hy(e) {
  const t = e.options || (e.options = {})
  ;(t.plugins = X(t.plugins, {})), (t.scales = Vk(e, t))
}
function Vy(e) {
  return (
    (e = e || {}),
    (e.datasets = e.datasets || []),
    (e.labels = e.labels || []),
    e
  )
}
function Uk(e) {
  return (e = e || {}), (e.data = Vy(e.data)), Hy(e), e
}
const Np = new Map(),
  Uy = new Set()
function vs(e, t) {
  let n = Np.get(e)
  return n || ((n = t()), Np.set(e, n), Uy.add(n)), n
}
const Mr = (e, t, n) => {
  const i = To(t, n)
  i !== void 0 && e.add(i)
}
class Yk {
  constructor(t) {
    ;(this._config = Uk(t)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map())
  }
  get platform() {
    return this._config.platform
  }
  get type() {
    return this._config.type
  }
  set type(t) {
    this._config.type = t
  }
  get data() {
    return this._config.data
  }
  set data(t) {
    this._config.data = Vy(t)
  }
  get options() {
    return this._config.options
  }
  set options(t) {
    this._config.options = t
  }
  get plugins() {
    return this._config.plugins
  }
  update() {
    const t = this._config
    this.clearCache(), Hy(t)
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear()
  }
  datasetScopeKeys(t) {
    return vs(t, () => [[`datasets.${t}`, ""]])
  }
  datasetAnimationScopeKeys(t, n) {
    return vs(`${t}.transition.${n}`, () => [
      [`datasets.${t}.transitions.${n}`, `transitions.${n}`],
      [`datasets.${t}`, ""],
    ])
  }
  datasetElementScopeKeys(t, n) {
    return vs(`${t}-${n}`, () => [
      [`datasets.${t}.elements.${n}`, `datasets.${t}`, `elements.${n}`, ""],
    ])
  }
  pluginScopeKeys(t) {
    const n = t.id,
      i = this.type
    return vs(`${i}-plugin-${n}`, () => [
      [`plugins.${n}`, ...(t.additionalOptionScopes || [])],
    ])
  }
  _cachedScopes(t, n) {
    const i = this._scopeCache
    let r = i.get(t)
    return (!r || n) && ((r = new Map()), i.set(t, r)), r
  }
  getOptionScopes(t, n, i) {
    const { options: r, type: o } = this,
      s = this._cachedScopes(t, i),
      a = s.get(n)
    if (a) return a
    const l = new Set()
    n.forEach((c) => {
      t && (l.add(t), c.forEach((f) => Mr(l, t, f))),
        c.forEach((f) => Mr(l, r, f)),
        c.forEach((f) => Mr(l, gi[o] || {}, f)),
        c.forEach((f) => Mr(l, me, f)),
        c.forEach((f) => Mr(l, Rc, f))
    })
    const u = Array.from(l)
    return (
      u.length === 0 && u.push(Object.create(null)), Uy.has(n) && s.set(n, u), u
    )
  }
  chartOptionScopes() {
    const { options: t, type: n } = this
    return [t, gi[n] || {}, me.datasets[n] || {}, { type: n }, me, Rc]
  }
  resolveNamedOptions(t, n, i, r = [""]) {
    const o = { $shared: !0 },
      { resolver: s, subPrefixes: a } = $p(this._resolverCache, t, r)
    let l = s
    if (Xk(s, n)) {
      ;(o.$shared = !1), (i = jn(i) ? i() : i)
      const u = this.createResolver(t, i, a)
      l = rr(s, i, u)
    }
    for (const u of n) o[u] = l[u]
    return o
  }
  createResolver(t, n, i = [""], r) {
    const { resolver: o } = $p(this._resolverCache, t, i)
    return Y(n) ? rr(o, n, void 0, r) : o
  }
}
function $p(e, t, n) {
  let i = e.get(t)
  i || ((i = new Map()), e.set(t, i))
  const r = n.join()
  let o = i.get(r)
  return (
    o ||
      ((o = {
        resolver: ud(t, n),
        subPrefixes: n.filter((a) => !a.toLowerCase().includes("hover")),
      }),
      i.set(r, o)),
    o
  )
}
const Kk = (e) =>
  Y(e) && Object.getOwnPropertyNames(e).reduce((t, n) => t || jn(e[n]), !1)
function Xk(e, t) {
  const { isScriptable: n, isIndexable: i } = Ty(e)
  for (const r of t) {
    const o = n(r),
      s = i(r),
      a = (s || o) && e[r]
    if ((o && (jn(a) || Kk(a))) || (s && pe(a))) return !0
  }
  return !1
}
var Qk = "4.4.0"
const Gk = ["top", "bottom", "left", "right", "chartArea"]
function Fp(e, t) {
  return e === "top" || e === "bottom" || (Gk.indexOf(e) === -1 && t === "x")
}
function jp(e, t) {
  return function (n, i) {
    return n[e] === i[e] ? n[t] - i[t] : n[e] - i[e]
  }
}
function Bp(e) {
  const t = e.chart,
    n = t.options.animation
  t.notifyPlugins("afterRender"), te(n && n.onComplete, [e], t)
}
function qk(e) {
  const t = e.chart,
    n = t.options.animation
  te(n && n.onProgress, [e], t)
}
function Yy(e) {
  return (
    Ly() && typeof e == "string"
      ? (e = document.getElementById(e))
      : e && e.length && (e = e[0]),
    e && e.canvas && (e = e.canvas),
    e
  )
}
const Bs = {},
  Wp = (e) => {
    const t = Yy(e)
    return Object.values(Bs)
      .filter((n) => n.canvas === t)
      .pop()
  }
function Zk(e, t, n) {
  const i = Object.keys(e)
  for (const r of i) {
    const o = +r
    if (o >= t) {
      const s = e[r]
      delete e[r], (n > 0 || o > t) && (e[o + n] = s)
    }
  }
}
function Jk(e, t, n, i) {
  return !n || e.type === "mouseout" ? null : i ? t : e
}
function xs(e, t, n) {
  return e.options.clip ? e[n] : t[n]
}
function e2(e, t) {
  const { xScale: n, yScale: i } = e
  return n && i
    ? {
        left: xs(n, t, "left"),
        right: xs(n, t, "right"),
        top: xs(i, t, "top"),
        bottom: xs(i, t, "bottom"),
      }
    : t
}
var dn
let Pl =
  ((dn = class {
    static register(...t) {
      Ft.add(...t), Hp()
    }
    static unregister(...t) {
      Ft.remove(...t), Hp()
    }
    constructor(t, n) {
      const i = (this.config = new Yk(n)),
        r = Yy(t),
        o = Wp(r)
      if (o)
        throw new Error(
          "Canvas is already in use. Chart with ID '" +
            o.id +
            "' must be destroyed before the canvas with ID '" +
            o.canvas.id +
            "' can be reused.",
        )
      const s = i.createResolver(i.chartOptionScopes(), this.getContext())
      ;(this.platform = new (i.platform || yk(r))()),
        this.platform.updateConfig(i)
      const a = this.platform.acquireContext(r, s.aspectRatio),
        l = a && a.canvas,
        u = l && l.height,
        c = l && l.width
      if (
        ((this.id = TS()),
        (this.ctx = a),
        (this.canvas = l),
        (this.width = c),
        (this.height = u),
        (this._options = s),
        (this._aspectRatio = this.aspectRatio),
        (this._layers = []),
        (this._metasets = []),
        (this._stacks = void 0),
        (this.boxes = []),
        (this.currentDevicePixelRatio = void 0),
        (this.chartArea = void 0),
        (this._active = []),
        (this._lastEvent = void 0),
        (this._listeners = {}),
        (this._responsiveListeners = void 0),
        (this._sortedMetasets = []),
        (this.scales = {}),
        (this._plugins = new Ik()),
        (this.$proxies = {}),
        (this._hiddenIndices = {}),
        (this.attached = !1),
        (this._animationsDisabled = void 0),
        (this.$context = void 0),
        (this._doResize = US((f) => this.update(f), s.resizeDelay || 0)),
        (this._dataChanges = []),
        (Bs[this.id] = this),
        !a || !l)
      ) {
        console.error(
          "Failed to create chart: can't acquire context from the given item",
        )
        return
      }
      Xt.listen(this, "complete", Bp),
        Xt.listen(this, "progress", qk),
        this._initialize(),
        this.attached && this.update()
    }
    get aspectRatio() {
      const {
        options: { aspectRatio: t, maintainAspectRatio: n },
        width: i,
        height: r,
        _aspectRatio: o,
      } = this
      return ce(t) ? (n && o ? o : r ? i / r : null) : t
    }
    get data() {
      return this.config.data
    }
    set data(t) {
      this.config.data = t
    }
    get options() {
      return this._options
    }
    set options(t) {
      this.config.options = t
    }
    get registry() {
      return Ft
    }
    _initialize() {
      return (
        this.notifyPlugins("beforeInit"),
        this.options.responsive
          ? this.resize()
          : mp(this, this.options.devicePixelRatio),
        this.bindEvents(),
        this.notifyPlugins("afterInit"),
        this
      )
    }
    clear() {
      return dp(this.canvas, this.ctx), this
    }
    stop() {
      return Xt.stop(this), this
    }
    resize(t, n) {
      Xt.running(this)
        ? (this._resizeBeforeDraw = { width: t, height: n })
        : this._resize(t, n)
    }
    _resize(t, n) {
      const i = this.options,
        r = this.canvas,
        o = i.maintainAspectRatio && this.aspectRatio,
        s = this.platform.getMaximumSize(r, t, n, o),
        a = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
        l = this.width ? "resize" : "attach"
      ;(this.width = s.width),
        (this.height = s.height),
        (this._aspectRatio = this.aspectRatio),
        mp(this, a, !0) &&
          (this.notifyPlugins("resize", { size: s }),
          te(i.onResize, [this, s], this),
          this.attached && this._doResize(l) && this.render())
    }
    ensureScalesHaveIDs() {
      const n = this.options.scales || {}
      q(n, (i, r) => {
        i.id = r
      })
    }
    buildOrUpdateScales() {
      const t = this.options,
        n = t.scales,
        i = this.scales,
        r = Object.keys(i).reduce((s, a) => ((s[a] = !1), s), {})
      let o = []
      n &&
        (o = o.concat(
          Object.keys(n).map((s) => {
            const a = n[s],
              l = Ic(s, a),
              u = l === "r",
              c = l === "x"
            return {
              options: a,
              dposition: u ? "chartArea" : c ? "bottom" : "left",
              dtype: u ? "radialLinear" : c ? "category" : "linear",
            }
          }),
        )),
        q(o, (s) => {
          const a = s.options,
            l = a.id,
            u = Ic(l, a),
            c = X(a.type, s.dtype)
          ;(a.position === void 0 || Fp(a.position, u) !== Fp(s.dposition)) &&
            (a.position = s.dposition),
            (r[l] = !0)
          let f = null
          if (l in i && i[l].type === c) f = i[l]
          else {
            const d = Ft.getScale(c)
            ;(f = new d({ id: l, type: c, ctx: this.ctx, chart: this })),
              (i[f.id] = f)
          }
          f.init(a, t)
        }),
        q(r, (s, a) => {
          s || delete i[a]
        }),
        q(i, (s) => {
          kn.configure(this, s, s.options), kn.addBox(this, s)
        })
    }
    _updateMetasets() {
      const t = this._metasets,
        n = this.data.datasets.length,
        i = t.length
      if ((t.sort((r, o) => r.index - o.index), i > n)) {
        for (let r = n; r < i; ++r) this._destroyDatasetMeta(r)
        t.splice(n, i - n)
      }
      this._sortedMetasets = t.slice(0).sort(jp("order", "index"))
    }
    _removeUnreferencedMetasets() {
      const {
        _metasets: t,
        data: { datasets: n },
      } = this
      t.length > n.length && delete this._stacks,
        t.forEach((i, r) => {
          n.filter((o) => o === i._dataset).length === 0 &&
            this._destroyDatasetMeta(r)
        })
    }
    buildOrUpdateControllers() {
      const t = [],
        n = this.data.datasets
      let i, r
      for (
        this._removeUnreferencedMetasets(), i = 0, r = n.length;
        i < r;
        i++
      ) {
        const o = n[i]
        let s = this.getDatasetMeta(i)
        const a = o.type || this.config.type
        if (
          (s.type &&
            s.type !== a &&
            (this._destroyDatasetMeta(i), (s = this.getDatasetMeta(i))),
          (s.type = a),
          (s.indexAxis = o.indexAxis || Dc(a, this.options)),
          (s.order = o.order || 0),
          (s.index = i),
          (s.label = "" + o.label),
          (s.visible = this.isDatasetVisible(i)),
          s.controller)
        )
          s.controller.updateIndex(i), s.controller.linkScales()
        else {
          const l = Ft.getController(a),
            { datasetElementType: u, dataElementType: c } = me.datasets[a]
          Object.assign(l, {
            dataElementType: Ft.getElement(c),
            datasetElementType: u && Ft.getElement(u),
          }),
            (s.controller = new l(this, i)),
            t.push(s.controller)
        }
      }
      return this._updateMetasets(), t
    }
    _resetElements() {
      q(
        this.data.datasets,
        (t, n) => {
          this.getDatasetMeta(n).controller.reset()
        },
        this,
      )
    }
    reset() {
      this._resetElements(), this.notifyPlugins("reset")
    }
    update(t) {
      const n = this.config
      n.update()
      const i = (this._options = n.createResolver(
          n.chartOptionScopes(),
          this.getContext(),
        )),
        r = (this._animationsDisabled = !i.animation)
      if (
        (this._updateScales(),
        this._checkEventBindings(),
        this._updateHiddenIndices(),
        this._plugins.invalidate(),
        this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }) === !1)
      )
        return
      const o = this.buildOrUpdateControllers()
      this.notifyPlugins("beforeElementsUpdate")
      let s = 0
      for (let u = 0, c = this.data.datasets.length; u < c; u++) {
        const { controller: f } = this.getDatasetMeta(u),
          d = !r && o.indexOf(f) === -1
        f.buildOrUpdateElements(d), (s = Math.max(+f.getMaxOverflow(), s))
      }
      ;(s = this._minPadding = i.layout.autoPadding ? s : 0),
        this._updateLayout(s),
        r ||
          q(o, (u) => {
            u.reset()
          }),
        this._updateDatasets(t),
        this.notifyPlugins("afterUpdate", { mode: t }),
        this._layers.sort(jp("z", "_idx"))
      const { _active: a, _lastEvent: l } = this
      l
        ? this._eventHandler(l, !0)
        : a.length && this._updateHoverStyles(a, a, !0),
        this.render()
    }
    _updateScales() {
      q(this.scales, (t) => {
        kn.removeBox(this, t)
      }),
        this.ensureScalesHaveIDs(),
        this.buildOrUpdateScales()
    }
    _checkEventBindings() {
      const t = this.options,
        n = new Set(Object.keys(this._listeners)),
        i = new Set(t.events)
      ;(!ip(n, i) || !!this._responsiveListeners !== t.responsive) &&
        (this.unbindEvents(), this.bindEvents())
    }
    _updateHiddenIndices() {
      const { _hiddenIndices: t } = this,
        n = this._getUniformDataChanges() || []
      for (const { method: i, start: r, count: o } of n) {
        const s = i === "_removeElements" ? -o : o
        Zk(t, r, s)
      }
    }
    _getUniformDataChanges() {
      const t = this._dataChanges
      if (!t || !t.length) return
      this._dataChanges = []
      const n = this.data.datasets.length,
        i = (o) =>
          new Set(
            t
              .filter((s) => s[0] === o)
              .map((s, a) => a + "," + s.splice(1).join(",")),
          ),
        r = i(0)
      for (let o = 1; o < n; o++) if (!ip(r, i(o))) return
      return Array.from(r)
        .map((o) => o.split(","))
        .map((o) => ({ method: o[1], start: +o[2], count: +o[3] }))
    }
    _updateLayout(t) {
      if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1) return
      kn.update(this, this.width, this.height, t)
      const n = this.chartArea,
        i = n.width <= 0 || n.height <= 0
      ;(this._layers = []),
        q(
          this.boxes,
          (r) => {
            ;(i && r.position === "chartArea") ||
              (r.configure && r.configure(), this._layers.push(...r._layers()))
          },
          this,
        ),
        this._layers.forEach((r, o) => {
          r._idx = o
        }),
        this.notifyPlugins("afterLayout")
    }
    _updateDatasets(t) {
      if (
        this.notifyPlugins("beforeDatasetsUpdate", {
          mode: t,
          cancelable: !0,
        }) !== !1
      ) {
        for (let n = 0, i = this.data.datasets.length; n < i; ++n)
          this.getDatasetMeta(n).controller.configure()
        for (let n = 0, i = this.data.datasets.length; n < i; ++n)
          this._updateDataset(n, jn(t) ? t({ datasetIndex: n }) : t)
        this.notifyPlugins("afterDatasetsUpdate", { mode: t })
      }
    }
    _updateDataset(t, n) {
      const i = this.getDatasetMeta(t),
        r = { meta: i, index: t, mode: n, cancelable: !0 }
      this.notifyPlugins("beforeDatasetUpdate", r) !== !1 &&
        (i.controller._update(n),
        (r.cancelable = !1),
        this.notifyPlugins("afterDatasetUpdate", r))
    }
    render() {
      this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
        (Xt.has(this)
          ? this.attached && !Xt.running(this) && Xt.start(this)
          : (this.draw(), Bp({ chart: this })))
    }
    draw() {
      let t
      if (this._resizeBeforeDraw) {
        const { width: i, height: r } = this._resizeBeforeDraw
        this._resize(i, r), (this._resizeBeforeDraw = null)
      }
      if (
        (this.clear(),
        this.width <= 0 ||
          this.height <= 0 ||
          this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
      )
        return
      const n = this._layers
      for (t = 0; t < n.length && n[t].z <= 0; ++t) n[t].draw(this.chartArea)
      for (this._drawDatasets(); t < n.length; ++t) n[t].draw(this.chartArea)
      this.notifyPlugins("afterDraw")
    }
    _getSortedDatasetMetas(t) {
      const n = this._sortedMetasets,
        i = []
      let r, o
      for (r = 0, o = n.length; r < o; ++r) {
        const s = n[r]
        ;(!t || s.visible) && i.push(s)
      }
      return i
    }
    getSortedVisibleDatasetMetas() {
      return this._getSortedDatasetMetas(!0)
    }
    _drawDatasets() {
      if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1)
        return
      const t = this.getSortedVisibleDatasetMetas()
      for (let n = t.length - 1; n >= 0; --n) this._drawDataset(t[n])
      this.notifyPlugins("afterDatasetsDraw")
    }
    _drawDataset(t) {
      const n = this.ctx,
        i = t._clip,
        r = !i.disabled,
        o = e2(t, this.chartArea),
        s = { meta: t, index: t.index, cancelable: !0 }
      this.notifyPlugins("beforeDatasetDraw", s) !== !1 &&
        (r &&
          sd(n, {
            left: i.left === !1 ? 0 : o.left - i.left,
            right: i.right === !1 ? this.width : o.right + i.right,
            top: i.top === !1 ? 0 : o.top - i.top,
            bottom: i.bottom === !1 ? this.height : o.bottom + i.bottom,
          }),
        t.controller.draw(),
        r && ad(n),
        (s.cancelable = !1),
        this.notifyPlugins("afterDatasetDraw", s))
    }
    isPointInArea(t) {
      return zi(t, this.chartArea, this._minPadding)
    }
    getElementsAtEventForMode(t, n, i, r) {
      const o = Gb.modes[n]
      return typeof o == "function" ? o(this, t, i, r) : []
    }
    getDatasetMeta(t) {
      const n = this.data.datasets[t],
        i = this._metasets
      let r = i.filter((o) => o && o._dataset === n).pop()
      return (
        r ||
          ((r = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: (n && n.order) || 0,
            index: t,
            _dataset: n,
            _parsed: [],
            _sorted: !1,
          }),
          i.push(r)),
        r
      )
    }
    getContext() {
      return (
        this.$context ||
        (this.$context = xi(null, { chart: this, type: "chart" }))
      )
    }
    getVisibleDatasetCount() {
      return this.getSortedVisibleDatasetMetas().length
    }
    isDatasetVisible(t) {
      const n = this.data.datasets[t]
      if (!n) return !1
      const i = this.getDatasetMeta(t)
      return typeof i.hidden == "boolean" ? !i.hidden : !n.hidden
    }
    setDatasetVisibility(t, n) {
      const i = this.getDatasetMeta(t)
      i.hidden = !n
    }
    toggleDataVisibility(t) {
      this._hiddenIndices[t] = !this._hiddenIndices[t]
    }
    getDataVisibility(t) {
      return !this._hiddenIndices[t]
    }
    _updateVisibility(t, n, i) {
      const r = i ? "show" : "hide",
        o = this.getDatasetMeta(t),
        s = o.controller._resolveAnimations(void 0, r)
      ka(n)
        ? ((o.data[n].hidden = !i), this.update())
        : (this.setDatasetVisibility(t, i),
          s.update(o, { visible: i }),
          this.update((a) => (a.datasetIndex === t ? r : void 0)))
    }
    hide(t, n) {
      this._updateVisibility(t, n, !1)
    }
    show(t, n) {
      this._updateVisibility(t, n, !0)
    }
    _destroyDatasetMeta(t) {
      const n = this._metasets[t]
      n && n.controller && n.controller._destroy(), delete this._metasets[t]
    }
    _stop() {
      let t, n
      for (
        this.stop(), Xt.remove(this), t = 0, n = this.data.datasets.length;
        t < n;
        ++t
      )
        this._destroyDatasetMeta(t)
    }
    destroy() {
      this.notifyPlugins("beforeDestroy")
      const { canvas: t, ctx: n } = this
      this._stop(),
        this.config.clearCache(),
        t &&
          (this.unbindEvents(),
          dp(t, n),
          this.platform.releaseContext(n),
          (this.canvas = null),
          (this.ctx = null)),
        delete Bs[this.id],
        this.notifyPlugins("afterDestroy")
    }
    toBase64Image(...t) {
      return this.canvas.toDataURL(...t)
    }
    bindEvents() {
      this.bindUserEvents(),
        this.options.responsive
          ? this.bindResponsiveEvents()
          : (this.attached = !0)
    }
    bindUserEvents() {
      const t = this._listeners,
        n = this.platform,
        i = (o, s) => {
          n.addEventListener(this, o, s), (t[o] = s)
        },
        r = (o, s, a) => {
          ;(o.offsetX = s), (o.offsetY = a), this._eventHandler(o)
        }
      q(this.options.events, (o) => i(o, r))
    }
    bindResponsiveEvents() {
      this._responsiveListeners || (this._responsiveListeners = {})
      const t = this._responsiveListeners,
        n = this.platform,
        i = (l, u) => {
          n.addEventListener(this, l, u), (t[l] = u)
        },
        r = (l, u) => {
          t[l] && (n.removeEventListener(this, l, u), delete t[l])
        },
        o = (l, u) => {
          this.canvas && this.resize(l, u)
        }
      let s
      const a = () => {
        r("attach", a),
          (this.attached = !0),
          this.resize(),
          i("resize", o),
          i("detach", s)
      }
      ;(s = () => {
        ;(this.attached = !1),
          r("resize", o),
          this._stop(),
          this._resize(0, 0),
          i("attach", a)
      }),
        n.isAttached(this.canvas) ? a() : s()
    }
    unbindEvents() {
      q(this._listeners, (t, n) => {
        this.platform.removeEventListener(this, n, t)
      }),
        (this._listeners = {}),
        q(this._responsiveListeners, (t, n) => {
          this.platform.removeEventListener(this, n, t)
        }),
        (this._responsiveListeners = void 0)
    }
    updateHoverStyle(t, n, i) {
      const r = i ? "set" : "remove"
      let o, s, a, l
      for (
        n === "dataset" &&
          ((o = this.getDatasetMeta(t[0].datasetIndex)),
          o.controller["_" + r + "DatasetHoverStyle"]()),
          a = 0,
          l = t.length;
        a < l;
        ++a
      ) {
        s = t[a]
        const u = s && this.getDatasetMeta(s.datasetIndex).controller
        u && u[r + "HoverStyle"](s.element, s.datasetIndex, s.index)
      }
    }
    getActiveElements() {
      return this._active || []
    }
    setActiveElements(t) {
      const n = this._active || [],
        i = t.map(({ datasetIndex: o, index: s }) => {
          const a = this.getDatasetMeta(o)
          if (!a) throw new Error("No dataset found at index " + o)
          return { datasetIndex: o, element: a.data[s], index: s }
        })
      !Sa(i, n) &&
        ((this._active = i),
        (this._lastEvent = null),
        this._updateHoverStyles(i, n))
    }
    notifyPlugins(t, n, i) {
      return this._plugins.notify(this, t, n, i)
    }
    isPluginEnabled(t) {
      return this._plugins._cache.filter((n) => n.plugin.id === t).length === 1
    }
    _updateHoverStyles(t, n, i) {
      const r = this.options.hover,
        o = (l, u) =>
          l.filter(
            (c) =>
              !u.some(
                (f) => c.datasetIndex === f.datasetIndex && c.index === f.index,
              ),
          ),
        s = o(n, t),
        a = i ? t : o(t, n)
      s.length && this.updateHoverStyle(s, r.mode, !1),
        a.length && r.mode && this.updateHoverStyle(a, r.mode, !0)
    }
    _eventHandler(t, n) {
      const i = {
          event: t,
          replay: n,
          cancelable: !0,
          inChartArea: this.isPointInArea(t),
        },
        r = (s) =>
          (s.options.events || this.options.events).includes(t.native.type)
      if (this.notifyPlugins("beforeEvent", i, r) === !1) return
      const o = this._handleEvent(t, n, i.inChartArea)
      return (
        (i.cancelable = !1),
        this.notifyPlugins("afterEvent", i, r),
        (o || i.changed) && this.render(),
        this
      )
    }
    _handleEvent(t, n, i) {
      const { _active: r = [], options: o } = this,
        s = n,
        a = this._getActiveElements(t, r, i, s),
        l = IS(t),
        u = Jk(t, this._lastEvent, i, l)
      i &&
        ((this._lastEvent = null),
        te(o.onHover, [t, a, this], this),
        l && te(o.onClick, [t, a, this], this))
      const c = !Sa(a, r)
      return (
        (c || n) && ((this._active = a), this._updateHoverStyles(a, r, n)),
        (this._lastEvent = u),
        c
      )
    }
    _getActiveElements(t, n, i, r) {
      if (t.type === "mouseout") return []
      if (!i) return n
      const o = this.options.hover
      return this.getElementsAtEventForMode(t, o.mode, o, r)
    }
  }),
  I(dn, "defaults", me),
  I(dn, "instances", Bs),
  I(dn, "overrides", gi),
  I(dn, "registry", Ft),
  I(dn, "version", Qk),
  I(dn, "getChart", Wp),
  dn)
function Hp() {
  return q(Pl.instances, (e) => e._plugins.invalidate())
}
function t2(e, t, n) {
  const {
    startAngle: i,
    pixelMargin: r,
    x: o,
    y: s,
    outerRadius: a,
    innerRadius: l,
  } = t
  let u = r / a
  e.beginPath(),
    e.arc(o, s, a, i - u, n + u),
    l > r
      ? ((u = r / l), e.arc(o, s, l, n + u, i - u, !0))
      : e.arc(o, s, r, n + ve, i - ve),
    e.closePath(),
    e.clip()
}
function n2(e) {
  return ld(e, ["outerStart", "outerEnd", "innerStart", "innerEnd"])
}
function i2(e, t, n, i) {
  const r = n2(e.options.borderRadius),
    o = (n - t) / 2,
    s = Math.min(o, (i * t) / 2),
    a = (l) => {
      const u = ((n - Math.min(o, l)) * i) / 2
      return _t(l, 0, Math.min(o, u))
    }
  return {
    outerStart: a(r.outerStart),
    outerEnd: a(r.outerEnd),
    innerStart: _t(r.innerStart, 0, s),
    innerEnd: _t(r.innerEnd, 0, s),
  }
}
function Si(e, t, n, i) {
  return { x: n + e * Math.cos(t), y: i + e * Math.sin(t) }
}
function La(e, t, n, i, r, o) {
  const { x: s, y: a, startAngle: l, pixelMargin: u, innerRadius: c } = t,
    f = Math.max(t.outerRadius + i + n - u, 0),
    d = c > 0 ? c + i + n + u : 0
  let h = 0
  const m = r - l
  if (i) {
    const F = c > 0 ? c - i : 0,
      N = f > 0 ? f - i : 0,
      $ = (F + N) / 2,
      P = $ !== 0 ? (m * $) / ($ + i) : m
    h = (m - P) / 2
  }
  const y = Math.max(0.001, m * f - n / we) / f,
    x = (m - y) / 2,
    p = l + x + h,
    g = r - x - h,
    {
      outerStart: v,
      outerEnd: _,
      innerStart: w,
      innerEnd: b,
    } = i2(t, d, f, g - p),
    S = f - v,
    k = f - _,
    M = p + v / S,
    E = g - _ / k,
    A = d + w,
    L = d + b,
    W = p + w / A,
    U = g - b / L
  if ((e.beginPath(), o)) {
    const F = (M + E) / 2
    if ((e.arc(s, a, f, M, F), e.arc(s, a, f, F, E), _ > 0)) {
      const T = Si(k, E, s, a)
      e.arc(T.x, T.y, _, E, g + ve)
    }
    const N = Si(L, g, s, a)
    if ((e.lineTo(N.x, N.y), b > 0)) {
      const T = Si(L, U, s, a)
      e.arc(T.x, T.y, b, g + ve, U + Math.PI)
    }
    const $ = (g - b / d + (p + w / d)) / 2
    if (
      (e.arc(s, a, d, g - b / d, $, !0),
      e.arc(s, a, d, $, p + w / d, !0),
      w > 0)
    ) {
      const T = Si(A, W, s, a)
      e.arc(T.x, T.y, w, W + Math.PI, p - ve)
    }
    const P = Si(S, p, s, a)
    if ((e.lineTo(P.x, P.y), v > 0)) {
      const T = Si(S, M, s, a)
      e.arc(T.x, T.y, v, p - ve, M)
    }
  } else {
    e.moveTo(s, a)
    const F = Math.cos(M) * f + s,
      N = Math.sin(M) * f + a
    e.lineTo(F, N)
    const $ = Math.cos(E) * f + s,
      P = Math.sin(E) * f + a
    e.lineTo($, P)
  }
  e.closePath()
}
function r2(e, t, n, i, r) {
  const { fullCircles: o, startAngle: s, circumference: a } = t
  let l = t.endAngle
  if (o) {
    La(e, t, n, i, l, r)
    for (let u = 0; u < o; ++u) e.fill()
    isNaN(a) || (l = s + (a % ge || ge))
  }
  return La(e, t, n, i, l, r), e.fill(), l
}
function o2(e, t, n, i, r) {
  const { fullCircles: o, startAngle: s, circumference: a, options: l } = t,
    {
      borderWidth: u,
      borderJoinStyle: c,
      borderDash: f,
      borderDashOffset: d,
    } = l,
    h = l.borderAlign === "inner"
  if (!u) return
  e.setLineDash(f || []),
    (e.lineDashOffset = d),
    h
      ? ((e.lineWidth = u * 2), (e.lineJoin = c || "round"))
      : ((e.lineWidth = u), (e.lineJoin = c || "bevel"))
  let m = t.endAngle
  if (o) {
    La(e, t, n, i, m, r)
    for (let y = 0; y < o; ++y) e.stroke()
    isNaN(a) || (m = s + (a % ge || ge))
  }
  h && t2(e, t, m), o || (La(e, t, n, i, m, r), e.stroke())
}
class Br extends mi {
  constructor(n) {
    super()
    I(this, "circumference")
    I(this, "endAngle")
    I(this, "fullCircles")
    I(this, "innerRadius")
    I(this, "outerRadius")
    I(this, "pixelMargin")
    I(this, "startAngle")
    ;(this.options = void 0),
      (this.circumference = void 0),
      (this.startAngle = void 0),
      (this.endAngle = void 0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.pixelMargin = 0),
      (this.fullCircles = 0),
      n && Object.assign(this, n)
  }
  inRange(n, i, r) {
    const o = this.getProps(["x", "y"], r),
      { angle: s, distance: a } = wy(o, { x: n, y: i }),
      {
        startAngle: l,
        endAngle: u,
        innerRadius: c,
        outerRadius: f,
        circumference: d,
      } = this.getProps(
        [
          "startAngle",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "circumference",
        ],
        r,
      ),
      h = (this.options.spacing + this.options.borderWidth) / 2,
      y = X(d, u - l) >= ge || Ma(s, l, u),
      x = $r(a, c + h, f + h)
    return y && x
  }
  getCenterPoint(n) {
    const {
        x: i,
        y: r,
        startAngle: o,
        endAngle: s,
        innerRadius: a,
        outerRadius: l,
      } = this.getProps(
        ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"],
        n,
      ),
      { offset: u, spacing: c } = this.options,
      f = (o + s) / 2,
      d = (a + l + c + u) / 2
    return { x: i + Math.cos(f) * d, y: r + Math.sin(f) * d }
  }
  tooltipPosition(n) {
    return this.getCenterPoint(n)
  }
  draw(n) {
    const { options: i, circumference: r } = this,
      o = (i.offset || 0) / 4,
      s = (i.spacing || 0) / 2,
      a = i.circular
    if (
      ((this.pixelMargin = i.borderAlign === "inner" ? 0.33 : 0),
      (this.fullCircles = r > ge ? Math.floor(r / ge) : 0),
      r === 0 || this.innerRadius < 0 || this.outerRadius < 0)
    )
      return
    n.save()
    const l = (this.startAngle + this.endAngle) / 2
    n.translate(Math.cos(l) * o, Math.sin(l) * o)
    const u = 1 - Math.sin(Math.min(we, r || 0)),
      c = o * u
    ;(n.fillStyle = i.backgroundColor),
      (n.strokeStyle = i.borderColor),
      r2(n, this, c, s, a),
      o2(n, this, c, s, a),
      n.restore()
  }
}
I(Br, "id", "arc"),
  I(Br, "defaults", {
    borderAlign: "center",
    borderColor: "#fff",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: void 0,
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: void 0,
    circular: !0,
  }),
  I(Br, "defaultRoutes", { backgroundColor: "backgroundColor" }),
  I(Br, "descriptors", {
    _scriptable: !0,
    _indexable: (n) => n !== "borderDash",
  })
const Vp = (e, t) => {
    let { boxHeight: n = t, boxWidth: i = t } = e
    return (
      e.usePointStyle &&
        ((n = Math.min(n, t)), (i = e.pointStyleWidth || Math.min(i, t))),
      { boxWidth: i, boxHeight: n, itemHeight: Math.max(t, n) }
    )
  },
  s2 = (e, t) =>
    e !== null &&
    t !== null &&
    e.datasetIndex === t.datasetIndex &&
    e.index === t.index
class Up extends mi {
  constructor(t) {
    super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0)
  }
  update(t, n, i) {
    ;(this.maxWidth = t),
      (this.maxHeight = n),
      (this._margins = i),
      this.setDimensions(),
      this.buildLabels(),
      this.fit()
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = this._margins.left),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height))
  }
  buildLabels() {
    const t = this.options.labels || {}
    let n = te(t.generateLabels, [this.chart], this) || []
    t.filter && (n = n.filter((i) => t.filter(i, this.chart.data))),
      t.sort && (n = n.sort((i, r) => t.sort(i, r, this.chart.data))),
      this.options.reverse && n.reverse(),
      (this.legendItems = n)
  }
  fit() {
    const { options: t, ctx: n } = this
    if (!t.display) {
      this.width = this.height = 0
      return
    }
    const i = t.labels,
      r = De(i.font),
      o = r.size,
      s = this._computeTitleHeight(),
      { boxWidth: a, itemHeight: l } = Vp(i, o)
    let u, c
    ;(n.font = r.string),
      this.isHorizontal()
        ? ((u = this.maxWidth), (c = this._fitRows(s, o, a, l) + 10))
        : ((c = this.maxHeight), (u = this._fitCols(s, r, a, l) + 10)),
      (this.width = Math.min(u, t.maxWidth || this.maxWidth)),
      (this.height = Math.min(c, t.maxHeight || this.maxHeight))
  }
  _fitRows(t, n, i, r) {
    const {
        ctx: o,
        maxWidth: s,
        options: {
          labels: { padding: a },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      u = (this.lineWidths = [0]),
      c = r + a
    let f = t
    ;(o.textAlign = "left"), (o.textBaseline = "middle")
    let d = -1,
      h = -c
    return (
      this.legendItems.forEach((m, y) => {
        const x = i + n / 2 + o.measureText(m.text).width
        ;(y === 0 || u[u.length - 1] + x + 2 * a > s) &&
          ((f += c), (u[u.length - (y > 0 ? 0 : 1)] = 0), (h += c), d++),
          (l[y] = { left: 0, top: h, row: d, width: x, height: r }),
          (u[u.length - 1] += x + a)
      }),
      f
    )
  }
  _fitCols(t, n, i, r) {
    const {
        ctx: o,
        maxHeight: s,
        options: {
          labels: { padding: a },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      u = (this.columnSizes = []),
      c = s - t
    let f = a,
      d = 0,
      h = 0,
      m = 0,
      y = 0
    return (
      this.legendItems.forEach((x, p) => {
        const { itemWidth: g, itemHeight: v } = a2(i, n, o, x, r)
        p > 0 &&
          h + v + 2 * a > c &&
          ((f += d + a),
          u.push({ width: d, height: h }),
          (m += d + a),
          y++,
          (d = h = 0)),
          (l[p] = { left: m, top: h, col: y, width: g, height: v }),
          (d = Math.max(d, g)),
          (h += v + a)
      }),
      (f += d),
      u.push({ width: d, height: h }),
      f
    )
  }
  adjustHitBoxes() {
    if (!this.options.display) return
    const t = this._computeTitleHeight(),
      {
        legendHitBoxes: n,
        options: {
          align: i,
          labels: { padding: r },
          rtl: o,
        },
      } = this,
      s = Ki(o, this.left, this.width)
    if (this.isHorizontal()) {
      let a = 0,
        l = rt(i, this.left + r, this.right - this.lineWidths[a])
      for (const u of n)
        a !== u.row &&
          ((a = u.row),
          (l = rt(i, this.left + r, this.right - this.lineWidths[a]))),
          (u.top += this.top + t + r),
          (u.left = s.leftForLtr(s.x(l), u.width)),
          (l += u.width + r)
    } else {
      let a = 0,
        l = rt(i, this.top + t + r, this.bottom - this.columnSizes[a].height)
      for (const u of n)
        u.col !== a &&
          ((a = u.col),
          (l = rt(
            i,
            this.top + t + r,
            this.bottom - this.columnSizes[a].height,
          ))),
          (u.top = l),
          (u.left += this.left + r),
          (u.left = s.leftForLtr(s.x(u.left), u.width)),
          (l += u.height + r)
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom"
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx
      sd(t, this), this._draw(), ad(t)
    }
  }
  _draw() {
    const { options: t, columnSizes: n, lineWidths: i, ctx: r } = this,
      { align: o, labels: s } = t,
      a = me.color,
      l = Ki(t.rtl, this.left, this.width),
      u = De(s.font),
      { padding: c } = s,
      f = u.size,
      d = f / 2
    let h
    this.drawTitle(),
      (r.textAlign = l.textAlign("left")),
      (r.textBaseline = "middle"),
      (r.lineWidth = 0.5),
      (r.font = u.string)
    const { boxWidth: m, boxHeight: y, itemHeight: x } = Vp(s, f),
      p = function (b, S, k) {
        if (isNaN(m) || m <= 0 || isNaN(y) || y < 0) return
        r.save()
        const M = X(k.lineWidth, 1)
        if (
          ((r.fillStyle = X(k.fillStyle, a)),
          (r.lineCap = X(k.lineCap, "butt")),
          (r.lineDashOffset = X(k.lineDashOffset, 0)),
          (r.lineJoin = X(k.lineJoin, "miter")),
          (r.lineWidth = M),
          (r.strokeStyle = X(k.strokeStyle, a)),
          r.setLineDash(X(k.lineDash, [])),
          s.usePointStyle)
        ) {
          const E = {
              radius: (y * Math.SQRT2) / 2,
              pointStyle: k.pointStyle,
              rotation: k.rotation,
              borderWidth: M,
            },
            A = l.xPlus(b, m / 2),
            L = S + d
          My(r, E, A, L, s.pointStyleWidth && m)
        } else {
          const E = S + Math.max((f - y) / 2, 0),
            A = l.leftForLtr(b, m),
            L = Yi(k.borderRadius)
          r.beginPath(),
            Object.values(L).some((W) => W !== 0)
              ? Oa(r, { x: A, y: E, w: m, h: y, radius: L })
              : r.rect(A, E, m, y),
            r.fill(),
            M !== 0 && r.stroke()
        }
        r.restore()
      },
      g = function (b, S, k) {
        ir(r, k.text, b, S + x / 2, u, {
          strikethrough: k.hidden,
          textAlign: l.textAlign(k.textAlign),
        })
      },
      v = this.isHorizontal(),
      _ = this._computeTitleHeight()
    v
      ? (h = {
          x: rt(o, this.left + c, this.right - i[0]),
          y: this.top + c + _,
          line: 0,
        })
      : (h = {
          x: this.left + c,
          y: rt(o, this.top + _ + c, this.bottom - n[0].height),
          line: 0,
        }),
      Dy(this.ctx, t.textDirection)
    const w = x + c
    this.legendItems.forEach((b, S) => {
      ;(r.strokeStyle = b.fontColor), (r.fillStyle = b.fontColor)
      const k = r.measureText(b.text).width,
        M = l.textAlign(b.textAlign || (b.textAlign = s.textAlign)),
        E = m + d + k
      let A = h.x,
        L = h.y
      l.setWidth(this.width),
        v
          ? S > 0 &&
            A + E + c > this.right &&
            ((L = h.y += w),
            h.line++,
            (A = h.x = rt(o, this.left + c, this.right - i[h.line])))
          : S > 0 &&
            L + w > this.bottom &&
            ((A = h.x = A + n[h.line].width + c),
            h.line++,
            (L = h.y = rt(o, this.top + _ + c, this.bottom - n[h.line].height)))
      const W = l.x(A)
      if (
        (p(W, L, b),
        (A = YS(M, A + m + d, v ? A + E : this.right, t.rtl)),
        g(l.x(A), L, b),
        v)
      )
        h.x += E + c
      else if (typeof b.text != "string") {
        const U = u.lineHeight
        h.y += Ky(b, U) + c
      } else h.y += w
    }),
      Iy(this.ctx, t.textDirection)
  }
  drawTitle() {
    const t = this.options,
      n = t.title,
      i = De(n.font),
      r = Ue(n.padding)
    if (!n.display) return
    const o = Ki(t.rtl, this.left, this.width),
      s = this.ctx,
      a = n.position,
      l = i.size / 2,
      u = r.top + l
    let c,
      f = this.left,
      d = this.width
    if (this.isHorizontal())
      (d = Math.max(...this.lineWidths)),
        (c = this.top + u),
        (f = rt(t.align, f, this.right - d))
    else {
      const m = this.columnSizes.reduce((y, x) => Math.max(y, x.height), 0)
      c =
        u +
        rt(
          t.align,
          this.top,
          this.bottom - m - t.labels.padding - this._computeTitleHeight(),
        )
    }
    const h = rt(a, f, f + d)
    ;(s.textAlign = o.textAlign(Cy(a))),
      (s.textBaseline = "middle"),
      (s.strokeStyle = n.color),
      (s.fillStyle = n.color),
      (s.font = i.string),
      ir(s, n.text, h, c, i)
  }
  _computeTitleHeight() {
    const t = this.options.title,
      n = De(t.font),
      i = Ue(t.padding)
    return t.display ? n.lineHeight + i.height : 0
  }
  _getLegendItemAt(t, n) {
    let i, r, o
    if ($r(t, this.left, this.right) && $r(n, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, i = 0; i < o.length; ++i)
        if (
          ((r = o[i]),
          $r(t, r.left, r.left + r.width) && $r(n, r.top, r.top + r.height))
        )
          return this.legendItems[i]
    }
    return null
  }
  handleEvent(t) {
    const n = this.options
    if (!c2(t.type, n)) return
    const i = this._getLegendItemAt(t.x, t.y)
    if (t.type === "mousemove" || t.type === "mouseout") {
      const r = this._hoveredItem,
        o = s2(r, i)
      r && !o && te(n.onLeave, [t, r, this], this),
        (this._hoveredItem = i),
        i && !o && te(n.onHover, [t, i, this], this)
    } else i && te(n.onClick, [t, i, this], this)
  }
}
function a2(e, t, n, i, r) {
  const o = l2(i, e, t, n),
    s = u2(r, i, t.lineHeight)
  return { itemWidth: o, itemHeight: s }
}
function l2(e, t, n, i) {
  let r = e.text
  return (
    r &&
      typeof r != "string" &&
      (r = r.reduce((o, s) => (o.length > s.length ? o : s))),
    t + n.size / 2 + i.measureText(r).width
  )
}
function u2(e, t, n) {
  let i = e
  return typeof t.text != "string" && (i = Ky(t, n)), i
}
function Ky(e, t) {
  const n = e.text ? e.text.length : 0
  return t * n
}
function c2(e, t) {
  return !!(
    ((e === "mousemove" || e === "mouseout") && (t.onHover || t.onLeave)) ||
    (t.onClick && (e === "click" || e === "mouseup"))
  )
}
var f2 = {
  id: "legend",
  _element: Up,
  start(e, t, n) {
    const i = (e.legend = new Up({ ctx: e.ctx, options: n, chart: e }))
    kn.configure(e, i, n), kn.addBox(e, i)
  },
  stop(e) {
    kn.removeBox(e, e.legend), delete e.legend
  },
  beforeUpdate(e, t, n) {
    const i = e.legend
    kn.configure(e, i, n), (i.options = n)
  },
  afterUpdate(e) {
    const t = e.legend
    t.buildLabels(), t.adjustHitBoxes()
  },
  afterEvent(e, t) {
    t.replay || e.legend.handleEvent(t.event)
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(e, t, n) {
      const i = t.datasetIndex,
        r = n.chart
      r.isDatasetVisible(i)
        ? (r.hide(i), (t.hidden = !0))
        : (r.show(i), (t.hidden = !1))
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (e) => e.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(e) {
        const t = e.data.datasets,
          {
            labels: {
              usePointStyle: n,
              pointStyle: i,
              textAlign: r,
              color: o,
              useBorderRadius: s,
              borderRadius: a,
            },
          } = e.legend.options
        return e._getSortedDatasetMetas().map((l) => {
          const u = l.controller.getStyle(n ? 0 : void 0),
            c = Ue(u.borderWidth)
          return {
            text: t[l.index].label,
            fillStyle: u.backgroundColor,
            fontColor: o,
            hidden: !l.visible,
            lineCap: u.borderCapStyle,
            lineDash: u.borderDash,
            lineDashOffset: u.borderDashOffset,
            lineJoin: u.borderJoinStyle,
            lineWidth: (c.width + c.height) / 4,
            strokeStyle: u.borderColor,
            pointStyle: i || u.pointStyle,
            rotation: u.rotation,
            textAlign: r || u.textAlign,
            borderRadius: s && (a || u.borderRadius),
            datasetIndex: l.index,
          }
        }, this)
      },
    },
    title: {
      color: (e) => e.chart.options.color,
      display: !1,
      position: "center",
      text: "",
    },
  },
  descriptors: {
    _scriptable: (e) => !e.startsWith("on"),
    labels: {
      _scriptable: (e) => !["generateLabels", "filter", "sort"].includes(e),
    },
  },
}
const Wr = {
  average(e) {
    if (!e.length) return !1
    let t,
      n,
      i = 0,
      r = 0,
      o = 0
    for (t = 0, n = e.length; t < n; ++t) {
      const s = e[t].element
      if (s && s.hasValue()) {
        const a = s.tooltipPosition()
        ;(i += a.x), (r += a.y), ++o
      }
    }
    return { x: i / o, y: r / o }
  },
  nearest(e, t) {
    if (!e.length) return !1
    let n = t.x,
      i = t.y,
      r = Number.POSITIVE_INFINITY,
      o,
      s,
      a
    for (o = 0, s = e.length; o < s; ++o) {
      const l = e[o].element
      if (l && l.hasValue()) {
        const u = l.getCenterPoint(),
          c = FS(t, u)
        c < r && ((r = c), (a = l))
      }
    }
    if (a) {
      const l = a.tooltipPosition()
      ;(n = l.x), (i = l.y)
    }
    return { x: n, y: i }
  },
}
function Nt(e, t) {
  return t && (pe(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e
}
function Qt(e) {
  return (typeof e == "string" || e instanceof String) &&
    e.indexOf(`
`) > -1
    ? e.split(`
`)
    : e
}
function d2(e, t) {
  const { element: n, datasetIndex: i, index: r } = t,
    o = e.getDatasetMeta(i).controller,
    { label: s, value: a } = o.getLabelAndValue(r)
  return {
    chart: e,
    label: s,
    parsed: o.getParsed(r),
    raw: e.data.datasets[i].data[r],
    formattedValue: a,
    dataset: o.getDataset(),
    dataIndex: r,
    datasetIndex: i,
    element: n,
  }
}
function Yp(e, t) {
  const n = e.chart.ctx,
    { body: i, footer: r, title: o } = e,
    { boxWidth: s, boxHeight: a } = t,
    l = De(t.bodyFont),
    u = De(t.titleFont),
    c = De(t.footerFont),
    f = o.length,
    d = r.length,
    h = i.length,
    m = Ue(t.padding)
  let y = m.height,
    x = 0,
    p = i.reduce(
      (_, w) => _ + w.before.length + w.lines.length + w.after.length,
      0,
    )
  if (
    ((p += e.beforeBody.length + e.afterBody.length),
    f &&
      (y += f * u.lineHeight + (f - 1) * t.titleSpacing + t.titleMarginBottom),
    p)
  ) {
    const _ = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight
    y += h * _ + (p - h) * l.lineHeight + (p - 1) * t.bodySpacing
  }
  d && (y += t.footerMarginTop + d * c.lineHeight + (d - 1) * t.footerSpacing)
  let g = 0
  const v = function (_) {
    x = Math.max(x, n.measureText(_).width + g)
  }
  return (
    n.save(),
    (n.font = u.string),
    q(e.title, v),
    (n.font = l.string),
    q(e.beforeBody.concat(e.afterBody), v),
    (g = t.displayColors ? s + 2 + t.boxPadding : 0),
    q(i, (_) => {
      q(_.before, v), q(_.lines, v), q(_.after, v)
    }),
    (g = 0),
    (n.font = c.string),
    q(e.footer, v),
    n.restore(),
    (x += m.width),
    { width: x, height: y }
  )
}
function h2(e, t) {
  const { y: n, height: i } = t
  return n < i / 2 ? "top" : n > e.height - i / 2 ? "bottom" : "center"
}
function p2(e, t, n, i) {
  const { x: r, width: o } = i,
    s = n.caretSize + n.caretPadding
  if ((e === "left" && r + o + s > t.width) || (e === "right" && r - o - s < 0))
    return !0
}
function g2(e, t, n, i) {
  const { x: r, width: o } = n,
    {
      width: s,
      chartArea: { left: a, right: l },
    } = e
  let u = "center"
  return (
    i === "center"
      ? (u = r <= (a + l) / 2 ? "left" : "right")
      : r <= o / 2
      ? (u = "left")
      : r >= s - o / 2 && (u = "right"),
    p2(u, e, t, n) && (u = "center"),
    u
  )
}
function Kp(e, t, n) {
  const i = n.yAlign || t.yAlign || h2(e, n)
  return { xAlign: n.xAlign || t.xAlign || g2(e, t, n, i), yAlign: i }
}
function m2(e, t) {
  let { x: n, width: i } = e
  return t === "right" ? (n -= i) : t === "center" && (n -= i / 2), n
}
function y2(e, t, n) {
  let { y: i, height: r } = e
  return (
    t === "top" ? (i += n) : t === "bottom" ? (i -= r + n) : (i -= r / 2), i
  )
}
function Xp(e, t, n, i) {
  const { caretSize: r, caretPadding: o, cornerRadius: s } = e,
    { xAlign: a, yAlign: l } = n,
    u = r + o,
    { topLeft: c, topRight: f, bottomLeft: d, bottomRight: h } = Yi(s)
  let m = m2(t, a)
  const y = y2(t, l, u)
  return (
    l === "center"
      ? a === "left"
        ? (m += u)
        : a === "right" && (m -= u)
      : a === "left"
      ? (m -= Math.max(c, d) + r)
      : a === "right" && (m += Math.max(f, h) + r),
    { x: _t(m, 0, i.width - t.width), y: _t(y, 0, i.height - t.height) }
  )
}
function _s(e, t, n) {
  const i = Ue(n.padding)
  return t === "center"
    ? e.x + e.width / 2
    : t === "right"
    ? e.x + e.width - i.right
    : e.x + i.left
}
function Qp(e) {
  return Nt([], Qt(e))
}
function v2(e, t, n) {
  return xi(e, { tooltip: t, tooltipItems: n, type: "tooltip" })
}
function Gp(e, t) {
  const n = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks
  return n ? e.override(n) : e
}
const Xy = {
  beforeTitle: Kt,
  title(e) {
    if (e.length > 0) {
      const t = e[0],
        n = t.chart.data.labels,
        i = n ? n.length : 0
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || ""
      if (t.label) return t.label
      if (i > 0 && t.dataIndex < i) return n[t.dataIndex]
    }
    return ""
  },
  afterTitle: Kt,
  beforeBody: Kt,
  beforeLabel: Kt,
  label(e) {
    if (this && this.options && this.options.mode === "dataset")
      return e.label + ": " + e.formattedValue || e.formattedValue
    let t = e.dataset.label || ""
    t && (t += ": ")
    const n = e.formattedValue
    return ce(n) || (t += n), t
  },
  labelColor(e) {
    const n = e.chart
      .getDatasetMeta(e.datasetIndex)
      .controller.getStyle(e.dataIndex)
    return {
      borderColor: n.borderColor,
      backgroundColor: n.backgroundColor,
      borderWidth: n.borderWidth,
      borderDash: n.borderDash,
      borderDashOffset: n.borderDashOffset,
      borderRadius: 0,
    }
  },
  labelTextColor() {
    return this.options.bodyColor
  },
  labelPointStyle(e) {
    const n = e.chart
      .getDatasetMeta(e.datasetIndex)
      .controller.getStyle(e.dataIndex)
    return { pointStyle: n.pointStyle, rotation: n.rotation }
  },
  afterLabel: Kt,
  afterBody: Kt,
  beforeFooter: Kt,
  footer: Kt,
  afterFooter: Kt,
}
function Qe(e, t, n, i) {
  const r = e[t].call(n, i)
  return typeof r > "u" ? Xy[t].call(n, i) : r
}
class zc extends mi {
  constructor(t) {
    super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0)
  }
  initialize(t) {
    ;(this.options = t),
      (this._cachedAnimations = void 0),
      (this.$context = void 0)
  }
  _resolveAnimations() {
    const t = this._cachedAnimations
    if (t) return t
    const n = this.chart,
      i = this.options.setContext(this.getContext()),
      r = i.enabled && n.options.animation && i.animations,
      o = new zy(this.chart, r)
    return r._cacheable && (this._cachedAnimations = Object.freeze(o)), o
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = v2(this.chart.getContext(), this, this._tooltipItems))
    )
  }
  getTitle(t, n) {
    const { callbacks: i } = n,
      r = Qe(i, "beforeTitle", this, t),
      o = Qe(i, "title", this, t),
      s = Qe(i, "afterTitle", this, t)
    let a = []
    return (a = Nt(a, Qt(r))), (a = Nt(a, Qt(o))), (a = Nt(a, Qt(s))), a
  }
  getBeforeBody(t, n) {
    return Qp(Qe(n.callbacks, "beforeBody", this, t))
  }
  getBody(t, n) {
    const { callbacks: i } = n,
      r = []
    return (
      q(t, (o) => {
        const s = { before: [], lines: [], after: [] },
          a = Gp(i, o)
        Nt(s.before, Qt(Qe(a, "beforeLabel", this, o))),
          Nt(s.lines, Qe(a, "label", this, o)),
          Nt(s.after, Qt(Qe(a, "afterLabel", this, o))),
          r.push(s)
      }),
      r
    )
  }
  getAfterBody(t, n) {
    return Qp(Qe(n.callbacks, "afterBody", this, t))
  }
  getFooter(t, n) {
    const { callbacks: i } = n,
      r = Qe(i, "beforeFooter", this, t),
      o = Qe(i, "footer", this, t),
      s = Qe(i, "afterFooter", this, t)
    let a = []
    return (a = Nt(a, Qt(r))), (a = Nt(a, Qt(o))), (a = Nt(a, Qt(s))), a
  }
  _createItems(t) {
    const n = this._active,
      i = this.chart.data,
      r = [],
      o = [],
      s = []
    let a = [],
      l,
      u
    for (l = 0, u = n.length; l < u; ++l) a.push(d2(this.chart, n[l]))
    return (
      t.filter && (a = a.filter((c, f, d) => t.filter(c, f, d, i))),
      t.itemSort && (a = a.sort((c, f) => t.itemSort(c, f, i))),
      q(a, (c) => {
        const f = Gp(t.callbacks, c)
        r.push(Qe(f, "labelColor", this, c)),
          o.push(Qe(f, "labelPointStyle", this, c)),
          s.push(Qe(f, "labelTextColor", this, c))
      }),
      (this.labelColors = r),
      (this.labelPointStyles = o),
      (this.labelTextColors = s),
      (this.dataPoints = a),
      a
    )
  }
  update(t, n) {
    const i = this.options.setContext(this.getContext()),
      r = this._active
    let o,
      s = []
    if (!r.length) this.opacity !== 0 && (o = { opacity: 0 })
    else {
      const a = Wr[i.position].call(this, r, this._eventPosition)
      ;(s = this._createItems(i)),
        (this.title = this.getTitle(s, i)),
        (this.beforeBody = this.getBeforeBody(s, i)),
        (this.body = this.getBody(s, i)),
        (this.afterBody = this.getAfterBody(s, i)),
        (this.footer = this.getFooter(s, i))
      const l = (this._size = Yp(this, i)),
        u = Object.assign({}, a, l),
        c = Kp(this.chart, i, u),
        f = Xp(i, u, c, this.chart)
      ;(this.xAlign = c.xAlign),
        (this.yAlign = c.yAlign),
        (o = {
          opacity: 1,
          x: f.x,
          y: f.y,
          width: l.width,
          height: l.height,
          caretX: a.x,
          caretY: a.y,
        })
    }
    ;(this._tooltipItems = s),
      (this.$context = void 0),
      o && this._resolveAnimations().update(this, o),
      t &&
        i.external &&
        i.external.call(this, { chart: this.chart, tooltip: this, replay: n })
  }
  drawCaret(t, n, i, r) {
    const o = this.getCaretPosition(t, i, r)
    n.lineTo(o.x1, o.y1), n.lineTo(o.x2, o.y2), n.lineTo(o.x3, o.y3)
  }
  getCaretPosition(t, n, i) {
    const { xAlign: r, yAlign: o } = this,
      { caretSize: s, cornerRadius: a } = i,
      { topLeft: l, topRight: u, bottomLeft: c, bottomRight: f } = Yi(a),
      { x: d, y: h } = t,
      { width: m, height: y } = n
    let x, p, g, v, _, w
    return (
      o === "center"
        ? ((_ = h + y / 2),
          r === "left"
            ? ((x = d), (p = x - s), (v = _ + s), (w = _ - s))
            : ((x = d + m), (p = x + s), (v = _ - s), (w = _ + s)),
          (g = x))
        : (r === "left"
            ? (p = d + Math.max(l, c) + s)
            : r === "right"
            ? (p = d + m - Math.max(u, f) - s)
            : (p = this.caretX),
          o === "top"
            ? ((v = h), (_ = v - s), (x = p - s), (g = p + s))
            : ((v = h + y), (_ = v + s), (x = p + s), (g = p - s)),
          (w = v)),
      { x1: x, x2: p, x3: g, y1: v, y2: _, y3: w }
    )
  }
  drawTitle(t, n, i) {
    const r = this.title,
      o = r.length
    let s, a, l
    if (o) {
      const u = Ki(i.rtl, this.x, this.width)
      for (
        t.x = _s(this, i.titleAlign, i),
          n.textAlign = u.textAlign(i.titleAlign),
          n.textBaseline = "middle",
          s = De(i.titleFont),
          a = i.titleSpacing,
          n.fillStyle = i.titleColor,
          n.font = s.string,
          l = 0;
        l < o;
        ++l
      )
        n.fillText(r[l], u.x(t.x), t.y + s.lineHeight / 2),
          (t.y += s.lineHeight + a),
          l + 1 === o && (t.y += i.titleMarginBottom - a)
    }
  }
  _drawColorBox(t, n, i, r, o) {
    const s = this.labelColors[i],
      a = this.labelPointStyles[i],
      { boxHeight: l, boxWidth: u } = o,
      c = De(o.bodyFont),
      f = _s(this, "left", o),
      d = r.x(f),
      h = l < c.lineHeight ? (c.lineHeight - l) / 2 : 0,
      m = n.y + h
    if (o.usePointStyle) {
      const y = {
          radius: Math.min(u, l) / 2,
          pointStyle: a.pointStyle,
          rotation: a.rotation,
          borderWidth: 1,
        },
        x = r.leftForLtr(d, u) + u / 2,
        p = m + l / 2
      ;(t.strokeStyle = o.multiKeyBackground),
        (t.fillStyle = o.multiKeyBackground),
        hp(t, y, x, p),
        (t.strokeStyle = s.borderColor),
        (t.fillStyle = s.backgroundColor),
        hp(t, y, x, p)
    } else {
      ;(t.lineWidth = Y(s.borderWidth)
        ? Math.max(...Object.values(s.borderWidth))
        : s.borderWidth || 1),
        (t.strokeStyle = s.borderColor),
        t.setLineDash(s.borderDash || []),
        (t.lineDashOffset = s.borderDashOffset || 0)
      const y = r.leftForLtr(d, u),
        x = r.leftForLtr(r.xPlus(d, 1), u - 2),
        p = Yi(s.borderRadius)
      Object.values(p).some((g) => g !== 0)
        ? (t.beginPath(),
          (t.fillStyle = o.multiKeyBackground),
          Oa(t, { x: y, y: m, w: u, h: l, radius: p }),
          t.fill(),
          t.stroke(),
          (t.fillStyle = s.backgroundColor),
          t.beginPath(),
          Oa(t, { x, y: m + 1, w: u - 2, h: l - 2, radius: p }),
          t.fill())
        : ((t.fillStyle = o.multiKeyBackground),
          t.fillRect(y, m, u, l),
          t.strokeRect(y, m, u, l),
          (t.fillStyle = s.backgroundColor),
          t.fillRect(x, m + 1, u - 2, l - 2))
    }
    t.fillStyle = this.labelTextColors[i]
  }
  drawBody(t, n, i) {
    const { body: r } = this,
      {
        bodySpacing: o,
        bodyAlign: s,
        displayColors: a,
        boxHeight: l,
        boxWidth: u,
        boxPadding: c,
      } = i,
      f = De(i.bodyFont)
    let d = f.lineHeight,
      h = 0
    const m = Ki(i.rtl, this.x, this.width),
      y = function (k) {
        n.fillText(k, m.x(t.x + h), t.y + d / 2), (t.y += d + o)
      },
      x = m.textAlign(s)
    let p, g, v, _, w, b, S
    for (
      n.textAlign = s,
        n.textBaseline = "middle",
        n.font = f.string,
        t.x = _s(this, x, i),
        n.fillStyle = i.bodyColor,
        q(this.beforeBody, y),
        h = a && x !== "right" ? (s === "center" ? u / 2 + c : u + 2 + c) : 0,
        _ = 0,
        b = r.length;
      _ < b;
      ++_
    ) {
      for (
        p = r[_],
          g = this.labelTextColors[_],
          n.fillStyle = g,
          q(p.before, y),
          v = p.lines,
          a &&
            v.length &&
            (this._drawColorBox(n, t, _, m, i),
            (d = Math.max(f.lineHeight, l))),
          w = 0,
          S = v.length;
        w < S;
        ++w
      )
        y(v[w]), (d = f.lineHeight)
      q(p.after, y)
    }
    ;(h = 0), (d = f.lineHeight), q(this.afterBody, y), (t.y -= o)
  }
  drawFooter(t, n, i) {
    const r = this.footer,
      o = r.length
    let s, a
    if (o) {
      const l = Ki(i.rtl, this.x, this.width)
      for (
        t.x = _s(this, i.footerAlign, i),
          t.y += i.footerMarginTop,
          n.textAlign = l.textAlign(i.footerAlign),
          n.textBaseline = "middle",
          s = De(i.footerFont),
          n.fillStyle = i.footerColor,
          n.font = s.string,
          a = 0;
        a < o;
        ++a
      )
        n.fillText(r[a], l.x(t.x), t.y + s.lineHeight / 2),
          (t.y += s.lineHeight + i.footerSpacing)
    }
  }
  drawBackground(t, n, i, r) {
    const { xAlign: o, yAlign: s } = this,
      { x: a, y: l } = t,
      { width: u, height: c } = i,
      {
        topLeft: f,
        topRight: d,
        bottomLeft: h,
        bottomRight: m,
      } = Yi(r.cornerRadius)
    ;(n.fillStyle = r.backgroundColor),
      (n.strokeStyle = r.borderColor),
      (n.lineWidth = r.borderWidth),
      n.beginPath(),
      n.moveTo(a + f, l),
      s === "top" && this.drawCaret(t, n, i, r),
      n.lineTo(a + u - d, l),
      n.quadraticCurveTo(a + u, l, a + u, l + d),
      s === "center" && o === "right" && this.drawCaret(t, n, i, r),
      n.lineTo(a + u, l + c - m),
      n.quadraticCurveTo(a + u, l + c, a + u - m, l + c),
      s === "bottom" && this.drawCaret(t, n, i, r),
      n.lineTo(a + h, l + c),
      n.quadraticCurveTo(a, l + c, a, l + c - h),
      s === "center" && o === "left" && this.drawCaret(t, n, i, r),
      n.lineTo(a, l + f),
      n.quadraticCurveTo(a, l, a + f, l),
      n.closePath(),
      n.fill(),
      r.borderWidth > 0 && n.stroke()
  }
  _updateAnimationTarget(t) {
    const n = this.chart,
      i = this.$animations,
      r = i && i.x,
      o = i && i.y
    if (r || o) {
      const s = Wr[t.position].call(this, this._active, this._eventPosition)
      if (!s) return
      const a = (this._size = Yp(this, t)),
        l = Object.assign({}, s, this._size),
        u = Kp(n, t, l),
        c = Xp(t, l, u, n)
      ;(r._to !== c.x || o._to !== c.y) &&
        ((this.xAlign = u.xAlign),
        (this.yAlign = u.yAlign),
        (this.width = a.width),
        (this.height = a.height),
        (this.caretX = s.x),
        (this.caretY = s.y),
        this._resolveAnimations().update(this, c))
    }
  }
  _willRender() {
    return !!this.opacity
  }
  draw(t) {
    const n = this.options.setContext(this.getContext())
    let i = this.opacity
    if (!i) return
    this._updateAnimationTarget(n)
    const r = { width: this.width, height: this.height },
      o = { x: this.x, y: this.y }
    i = Math.abs(i) < 0.001 ? 0 : i
    const s = Ue(n.padding),
      a =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length
    n.enabled &&
      a &&
      (t.save(),
      (t.globalAlpha = i),
      this.drawBackground(o, t, r, n),
      Dy(t, n.textDirection),
      (o.y += s.top),
      this.drawTitle(o, t, n),
      this.drawBody(o, t, n),
      this.drawFooter(o, t, n),
      Iy(t, n.textDirection),
      t.restore())
  }
  getActiveElements() {
    return this._active || []
  }
  setActiveElements(t, n) {
    const i = this._active,
      r = t.map(({ datasetIndex: a, index: l }) => {
        const u = this.chart.getDatasetMeta(a)
        if (!u) throw new Error("Cannot find a dataset at index " + a)
        return { datasetIndex: a, element: u.data[l], index: l }
      }),
      o = !Sa(i, r),
      s = this._positionChanged(r, n)
    ;(o || s) &&
      ((this._active = r),
      (this._eventPosition = n),
      (this._ignoreReplayEvents = !0),
      this.update(!0))
  }
  handleEvent(t, n, i = !0) {
    if (n && this._ignoreReplayEvents) return !1
    this._ignoreReplayEvents = !1
    const r = this.options,
      o = this._active || [],
      s = this._getActiveElements(t, o, n, i),
      a = this._positionChanged(s, t),
      l = n || !Sa(s, o) || a
    return (
      l &&
        ((this._active = s),
        (r.enabled || r.external) &&
          ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, n))),
      l
    )
  }
  _getActiveElements(t, n, i, r) {
    const o = this.options
    if (t.type === "mouseout") return []
    if (!r) return n
    const s = this.chart.getElementsAtEventForMode(t, o.mode, o, i)
    return o.reverse && s.reverse(), s
  }
  _positionChanged(t, n) {
    const { caretX: i, caretY: r, options: o } = this,
      s = Wr[o.position].call(this, t, n)
    return s !== !1 && (i !== s.x || r !== s.y)
  }
}
I(zc, "positioners", Wr)
var x2 = {
  id: "tooltip",
  _element: zc,
  positioners: Wr,
  afterInit(e, t, n) {
    n && (e.tooltip = new zc({ chart: e, options: n }))
  },
  beforeUpdate(e, t, n) {
    e.tooltip && e.tooltip.initialize(n)
  },
  reset(e, t, n) {
    e.tooltip && e.tooltip.initialize(n)
  },
  afterDraw(e) {
    const t = e.tooltip
    if (t && t._willRender()) {
      const n = { tooltip: t }
      if (e.notifyPlugins("beforeTooltipDraw", { ...n, cancelable: !0 }) === !1)
        return
      t.draw(e.ctx), e.notifyPlugins("afterTooltipDraw", n)
    }
  },
  afterEvent(e, t) {
    if (e.tooltip) {
      const n = t.replay
      e.tooltip.handleEvent(t.event, n, t.inChartArea) && (t.changed = !0)
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: { weight: "bold" },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: { weight: "bold" },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (e, t) => t.bodyFont.size,
    boxWidth: (e, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: { duration: 400, easing: "easeOutQuart" },
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "width", "height", "caretX", "caretY"],
      },
      opacity: { easing: "linear", duration: 200 },
    },
    callbacks: Xy,
  },
  defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
  descriptors: {
    _scriptable: (e) => e !== "filter" && e !== "itemSort" && e !== "external",
    _indexable: !1,
    callbacks: { _scriptable: !1, _indexable: !1 },
    animation: { _fallback: !1 },
    animations: { _fallback: "animation" },
  },
  additionalOptionScopes: ["interaction"],
}
function _2(e, t) {
  const n = [],
    {
      bounds: r,
      step: o,
      min: s,
      max: a,
      precision: l,
      count: u,
      maxTicks: c,
      maxDigits: f,
      includeBounds: d,
    } = e,
    h = o || 1,
    m = c - 1,
    { min: y, max: x } = t,
    p = !ce(s),
    g = !ce(a),
    v = !ce(u),
    _ = (x - y) / (f + 1)
  let w = op((x - y) / m / h) * h,
    b,
    S,
    k,
    M
  if (w < 1e-14 && !p && !g) return [{ value: y }, { value: x }]
  ;(M = Math.ceil(x / w) - Math.floor(y / w)),
    M > m && (w = op((M * w) / m / h) * h),
    ce(l) || ((b = Math.pow(10, l)), (w = Math.ceil(w * b) / b)),
    r === "ticks"
      ? ((S = Math.floor(y / w) * w), (k = Math.ceil(x / w) * w))
      : ((S = y), (k = x)),
    p && g && o && $S((a - s) / o, w / 1e3)
      ? ((M = Math.round(Math.min((a - s) / w, c))),
        (w = (a - s) / M),
        (S = s),
        (k = a))
      : v
      ? ((S = p ? s : S), (k = g ? a : k), (M = u - 1), (w = (k - S) / M))
      : ((M = (k - S) / w),
        Fs(M, Math.round(M), w / 1e3)
          ? (M = Math.round(M))
          : (M = Math.ceil(M)))
  const E = Math.max(sp(w), sp(S))
  ;(b = Math.pow(10, ce(l) ? E : l)),
    (S = Math.round(S * b) / b),
    (k = Math.round(k * b) / b)
  let A = 0
  for (
    p &&
    (d && S !== s
      ? (n.push({ value: s }),
        S < s && A++,
        Fs(Math.round((S + A * w) * b) / b, s, qp(s, _, e)) && A++)
      : S < s && A++);
    A < M;
    ++A
  ) {
    const L = Math.round((S + A * w) * b) / b
    if (g && L > a) break
    n.push({ value: L })
  }
  return (
    g && d && k !== a
      ? n.length && Fs(n[n.length - 1].value, a, qp(a, _, e))
        ? (n[n.length - 1].value = a)
        : n.push({ value: a })
      : (!g || k === a) && n.push({ value: k }),
    n
  )
}
function qp(e, t, { horizontal: n, minRotation: i }) {
  const r = Ht(i),
    o = (n ? Math.sin(r) : Math.cos(r)) || 0.001,
    s = 0.75 * t * ("" + e).length
  return Math.min(t / o, s)
}
class Da extends pr {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0)
  }
  parse(t, n) {
    return ce(t) ||
      ((typeof t == "number" || t instanceof Number) && !isFinite(+t))
      ? null
      : +t
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options,
      { minDefined: n, maxDefined: i } = this.getUserBounds()
    let { min: r, max: o } = this
    const s = (l) => (r = n ? r : l),
      a = (l) => (o = i ? o : l)
    if (t) {
      const l = Ea(r),
        u = Ea(o)
      l < 0 && u < 0 ? a(0) : l > 0 && u > 0 && s(0)
    }
    if (r === o) {
      let l = o === 0 ? 1 : Math.abs(o * 0.05)
      a(o + l), t || s(r - l)
    }
    ;(this.min = r), (this.max = o)
  }
  getTickLimit() {
    const t = this.options.ticks
    let { maxTicksLimit: n, stepSize: i } = t,
      r
    return (
      i
        ? ((r = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1),
          r > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${r} ticks. Limiting to 1000.`,
            ),
            (r = 1e3)))
        : ((r = this.computeTickLimit()), (n = n || 11)),
      n && (r = Math.min(n, r)),
      r
    )
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY
  }
  buildTicks() {
    const t = this.options,
      n = t.ticks
    let i = this.getTickLimit()
    i = Math.max(2, i)
    const r = {
        maxTicks: i,
        bounds: t.bounds,
        min: t.min,
        max: t.max,
        precision: n.precision,
        step: n.stepSize,
        count: n.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: n.minRotation || 0,
        includeBounds: n.includeBounds !== !1,
      },
      o = this._range || this,
      s = _2(r, o)
    return (
      t.bounds === "ticks" && _y(s, this, "value"),
      t.reverse
        ? (s.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      s
    )
  }
  configure() {
    const t = this.ticks
    let n = this.min,
      i = this.max
    if ((super.configure(), this.options.offset && t.length)) {
      const r = (i - n) / Math.max(t.length - 1, 1) / 2
      ;(n -= r), (i += r)
    }
    ;(this._startValue = n), (this._endValue = i), (this._valueRange = i - n)
  }
  getLabelForValue(t) {
    return kl(t, this.chart.options.locale, this.options.ticks.format)
  }
}
class Zp extends Da {
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0)
    ;(this.min = Me(t) ? t : 0),
      (this.max = Me(n) ? n : 1),
      this.handleTickRangeOptions()
  }
  computeTickLimit() {
    const t = this.isHorizontal(),
      n = t ? this.width : this.height,
      i = Ht(this.options.ticks.minRotation),
      r = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
      o = this._resolveTickFontOptions(0)
    return Math.ceil(n / Math.min(40, o.lineHeight / r))
  }
  getPixelForValue(t) {
    return t === null
      ? NaN
      : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange
  }
}
I(Zp, "id", "linear"),
  I(Zp, "defaults", { ticks: { callback: Cl.formatters.numeric } })
const Ao = (e) => Math.floor(bn(e)),
  Kn = (e, t) => Math.pow(10, Ao(e) + t)
function Jp(e) {
  return e / Math.pow(10, Ao(e)) === 1
}
function eg(e, t, n) {
  const i = Math.pow(10, n),
    r = Math.floor(e / i)
  return Math.ceil(t / i) - r
}
function w2(e, t) {
  const n = t - e
  let i = Ao(n)
  for (; eg(e, t, i) > 10; ) i++
  for (; eg(e, t, i) < 10; ) i--
  return Math.min(i, Ao(e))
}
function S2(e, { min: t, max: n }) {
  t = ot(e.min, t)
  const i = [],
    r = Ao(t)
  let o = w2(t, n),
    s = o < 0 ? Math.pow(10, Math.abs(o)) : 1
  const a = Math.pow(10, o),
    l = r > o ? Math.pow(10, r) : 0,
    u = Math.round((t - l) * s) / s,
    c = Math.floor((t - l) / a / 10) * a * 10
  let f = Math.floor((u - c) / Math.pow(10, o)),
    d = ot(e.min, Math.round((l + c + f * Math.pow(10, o)) * s) / s)
  for (; d < n; )
    i.push({ value: d, major: Jp(d), significand: f }),
      f >= 10 ? (f = f < 15 ? 15 : 20) : f++,
      f >= 20 && (o++, (f = 2), (s = o >= 0 ? 1 : s)),
      (d = Math.round((l + c + f * Math.pow(10, o)) * s) / s)
  const h = ot(e.max, d)
  return i.push({ value: h, major: Jp(h), significand: f }), i
}
class tg extends pr {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._valueRange = 0)
  }
  parse(t, n) {
    const i = Da.prototype.parse.apply(this, [t, n])
    if (i === 0) {
      this._zero = !0
      return
    }
    return Me(i) && i > 0 ? i : null
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0)
    ;(this.min = Me(t) ? Math.max(0, t) : null),
      (this.max = Me(n) ? Math.max(0, n) : null),
      this.options.beginAtZero && (this._zero = !0),
      this._zero &&
        this.min !== this._suggestedMin &&
        !Me(this._userMin) &&
        (this.min = t === Kn(this.min, 0) ? Kn(this.min, -1) : Kn(this.min, 0)),
      this.handleTickRangeOptions()
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: n } = this.getUserBounds()
    let i = this.min,
      r = this.max
    const o = (a) => (i = t ? i : a),
      s = (a) => (r = n ? r : a)
    i === r && (i <= 0 ? (o(1), s(10)) : (o(Kn(i, -1)), s(Kn(r, 1)))),
      i <= 0 && o(Kn(r, -1)),
      r <= 0 && s(Kn(i, 1)),
      (this.min = i),
      (this.max = r)
  }
  buildTicks() {
    const t = this.options,
      n = { min: this._userMin, max: this._userMax },
      i = S2(n, this)
    return (
      t.bounds === "ticks" && _y(i, this, "value"),
      t.reverse
        ? (i.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      i
    )
  }
  getLabelForValue(t) {
    return t === void 0
      ? "0"
      : kl(t, this.chart.options.locale, this.options.ticks.format)
  }
  configure() {
    const t = this.min
    super.configure(),
      (this._startValue = bn(t)),
      (this._valueRange = bn(this.max) - bn(t))
  }
  getPixelForValue(t) {
    return (
      (t === void 0 || t === 0) && (t = this.min),
      t === null || isNaN(t)
        ? NaN
        : this.getPixelForDecimal(
            t === this.min ? 0 : (bn(t) - this._startValue) / this._valueRange,
          )
    )
  }
  getValueForPixel(t) {
    const n = this.getDecimalForPixel(t)
    return Math.pow(10, this._startValue + n * this._valueRange)
  }
}
I(tg, "id", "logarithmic"),
  I(tg, "defaults", {
    ticks: { callback: Cl.formatters.logarithmic, major: { enabled: !0 } },
  })
function Nc(e) {
  const t = e.ticks
  if (t.display && e.display) {
    const n = Ue(t.backdropPadding)
    return X(t.font && t.font.size, me.font.size) + n.height
  }
  return 0
}
function b2(e, t, n) {
  return (
    (n = pe(n) ? n : [n]), { w: nb(e, t.string, n), h: n.length * t.lineHeight }
  )
}
function ng(e, t, n, i, r) {
  return e === i || e === r
    ? { start: t - n / 2, end: t + n / 2 }
    : e < i || e > r
    ? { start: t - n, end: t }
    : { start: t, end: t + n }
}
function k2(e) {
  const t = {
      l: e.left + e._padding.left,
      r: e.right - e._padding.right,
      t: e.top + e._padding.top,
      b: e.bottom - e._padding.bottom,
    },
    n = Object.assign({}, t),
    i = [],
    r = [],
    o = e._pointLabels.length,
    s = e.options.pointLabels,
    a = s.centerPointLabels ? we / o : 0
  for (let l = 0; l < o; l++) {
    const u = s.setContext(e.getPointLabelContext(l))
    r[l] = u.padding
    const c = e.getPointPosition(l, e.drawingArea + r[l], a),
      f = De(u.font),
      d = b2(e.ctx, f, e._pointLabels[l])
    i[l] = d
    const h = jt(e.getIndexAngle(l) + a),
      m = Math.round(rd(h)),
      y = ng(m, c.x, d.w, 0, 180),
      x = ng(m, c.y, d.h, 90, 270)
    C2(n, t, h, y, x)
  }
  e.setCenterPoint(t.l - n.l, n.r - t.r, t.t - n.t, n.b - t.b),
    (e._pointLabelItems = M2(e, i, r))
}
function C2(e, t, n, i, r) {
  const o = Math.abs(Math.sin(n)),
    s = Math.abs(Math.cos(n))
  let a = 0,
    l = 0
  i.start < t.l
    ? ((a = (t.l - i.start) / o), (e.l = Math.min(e.l, t.l - a)))
    : i.end > t.r && ((a = (i.end - t.r) / o), (e.r = Math.max(e.r, t.r + a))),
    r.start < t.t
      ? ((l = (t.t - r.start) / s), (e.t = Math.min(e.t, t.t - l)))
      : r.end > t.b && ((l = (r.end - t.b) / s), (e.b = Math.max(e.b, t.b + l)))
}
function E2(e, t, n) {
  const i = e.drawingArea,
    { extra: r, additionalAngle: o, padding: s, size: a } = n,
    l = e.getPointPosition(t, i + r + s, o),
    u = Math.round(rd(jt(l.angle + ve))),
    c = A2(l.y, a.h, u),
    f = T2(u),
    d = O2(l.x, a.w, f)
  return {
    visible: !0,
    x: l.x,
    y: c,
    textAlign: f,
    left: d,
    top: c,
    right: d + a.w,
    bottom: c + a.h,
  }
}
function P2(e, t) {
  if (!t) return !0
  const { left: n, top: i, right: r, bottom: o } = e
  return !(
    zi({ x: n, y: i }, t) ||
    zi({ x: n, y: o }, t) ||
    zi({ x: r, y: i }, t) ||
    zi({ x: r, y: o }, t)
  )
}
function M2(e, t, n) {
  const i = [],
    r = e._pointLabels.length,
    o = e.options,
    { centerPointLabels: s, display: a } = o.pointLabels,
    l = { extra: Nc(o) / 2, additionalAngle: s ? we / r : 0 }
  let u
  for (let c = 0; c < r; c++) {
    ;(l.padding = n[c]), (l.size = t[c])
    const f = E2(e, c, l)
    i.push(f), a === "auto" && ((f.visible = P2(f, u)), f.visible && (u = f))
  }
  return i
}
function T2(e) {
  return e === 0 || e === 180 ? "center" : e < 180 ? "left" : "right"
}
function O2(e, t, n) {
  return n === "right" ? (e -= t) : n === "center" && (e -= t / 2), e
}
function A2(e, t, n) {
  return (
    n === 90 || n === 270 ? (e -= t / 2) : (n > 270 || n < 90) && (e -= t), e
  )
}
function R2(e, t, n) {
  const { left: i, top: r, right: o, bottom: s } = n,
    { backdropColor: a } = t
  if (!ce(a)) {
    const l = Yi(t.borderRadius),
      u = Ue(t.backdropPadding)
    e.fillStyle = a
    const c = i - u.left,
      f = r - u.top,
      d = o - i + u.width,
      h = s - r + u.height
    Object.values(l).some((m) => m !== 0)
      ? (e.beginPath(), Oa(e, { x: c, y: f, w: d, h, radius: l }), e.fill())
      : e.fillRect(c, f, d, h)
  }
}
function L2(e, t) {
  const {
    ctx: n,
    options: { pointLabels: i },
  } = e
  for (let r = t - 1; r >= 0; r--) {
    const o = e._pointLabelItems[r]
    if (!o.visible) continue
    const s = i.setContext(e.getPointLabelContext(r))
    R2(n, s, o)
    const a = De(s.font),
      { x: l, y: u, textAlign: c } = o
    ir(n, e._pointLabels[r], l, u + a.lineHeight / 2, a, {
      color: s.color,
      textAlign: c,
      textBaseline: "middle",
    })
  }
}
function Qy(e, t, n, i) {
  const { ctx: r } = e
  if (n) r.arc(e.xCenter, e.yCenter, t, 0, ge)
  else {
    let o = e.getPointPosition(0, t)
    r.moveTo(o.x, o.y)
    for (let s = 1; s < i; s++)
      (o = e.getPointPosition(s, t)), r.lineTo(o.x, o.y)
  }
}
function D2(e, t, n, i, r) {
  const o = e.ctx,
    s = t.circular,
    { color: a, lineWidth: l } = t
  ;(!s && !i) ||
    !a ||
    !l ||
    n < 0 ||
    (o.save(),
    (o.strokeStyle = a),
    (o.lineWidth = l),
    o.setLineDash(r.dash),
    (o.lineDashOffset = r.dashOffset),
    o.beginPath(),
    Qy(e, n, s, i),
    o.closePath(),
    o.stroke(),
    o.restore())
}
function I2(e, t, n) {
  return xi(e, { label: n, index: t, type: "pointLabel" })
}
class ws extends Da {
  constructor(t) {
    super(t),
      (this.xCenter = void 0),
      (this.yCenter = void 0),
      (this.drawingArea = void 0),
      (this._pointLabels = []),
      (this._pointLabelItems = [])
  }
  setDimensions() {
    const t = (this._padding = Ue(Nc(this.options) / 2)),
      n = (this.width = this.maxWidth - t.width),
      i = (this.height = this.maxHeight - t.height)
    ;(this.xCenter = Math.floor(this.left + n / 2 + t.left)),
      (this.yCenter = Math.floor(this.top + i / 2 + t.top)),
      (this.drawingArea = Math.floor(Math.min(n, i) / 2))
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!1)
    ;(this.min = Me(t) && !isNaN(t) ? t : 0),
      (this.max = Me(n) && !isNaN(n) ? n : 0),
      this.handleTickRangeOptions()
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Nc(this.options))
  }
  generateTickLabels(t) {
    Da.prototype.generateTickLabels.call(this, t),
      (this._pointLabels = this.getLabels()
        .map((n, i) => {
          const r = te(this.options.pointLabels.callback, [n, i], this)
          return r || r === 0 ? r : ""
        })
        .filter((n, i) => this.chart.getDataVisibility(i)))
  }
  fit() {
    const t = this.options
    t.display && t.pointLabels.display
      ? k2(this)
      : this.setCenterPoint(0, 0, 0, 0)
  }
  setCenterPoint(t, n, i, r) {
    ;(this.xCenter += Math.floor((t - n) / 2)),
      (this.yCenter += Math.floor((i - r) / 2)),
      (this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, n, i, r)))
  }
  getIndexAngle(t) {
    const n = ge / (this._pointLabels.length || 1),
      i = this.options.startAngle || 0
    return jt(t * n + Ht(i))
  }
  getDistanceFromCenterForValue(t) {
    if (ce(t)) return NaN
    const n = this.drawingArea / (this.max - this.min)
    return this.options.reverse ? (this.max - t) * n : (t - this.min) * n
  }
  getValueForDistanceFromCenter(t) {
    if (ce(t)) return NaN
    const n = t / (this.drawingArea / (this.max - this.min))
    return this.options.reverse ? this.max - n : this.min + n
  }
  getPointLabelContext(t) {
    const n = this._pointLabels || []
    if (t >= 0 && t < n.length) {
      const i = n[t]
      return I2(this.getContext(), t, i)
    }
  }
  getPointPosition(t, n, i = 0) {
    const r = this.getIndexAngle(t) - ve + i
    return {
      x: Math.cos(r) * n + this.xCenter,
      y: Math.sin(r) * n + this.yCenter,
      angle: r,
    }
  }
  getPointPositionForValue(t, n) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(n))
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue())
  }
  getPointLabelPosition(t) {
    const { left: n, top: i, right: r, bottom: o } = this._pointLabelItems[t]
    return { left: n, top: i, right: r, bottom: o }
  }
  drawBackground() {
    const {
      backgroundColor: t,
      grid: { circular: n },
    } = this.options
    if (t) {
      const i = this.ctx
      i.save(),
        i.beginPath(),
        Qy(
          this,
          this.getDistanceFromCenterForValue(this._endValue),
          n,
          this._pointLabels.length,
        ),
        i.closePath(),
        (i.fillStyle = t),
        i.fill(),
        i.restore()
    }
  }
  drawGrid() {
    const t = this.ctx,
      n = this.options,
      { angleLines: i, grid: r, border: o } = n,
      s = this._pointLabels.length
    let a, l, u
    if (
      (n.pointLabels.display && L2(this, s),
      r.display &&
        this.ticks.forEach((c, f) => {
          if (f !== 0) {
            l = this.getDistanceFromCenterForValue(c.value)
            const d = this.getContext(f),
              h = r.setContext(d),
              m = o.setContext(d)
            D2(this, h, l, s, m)
          }
        }),
      i.display)
    ) {
      for (t.save(), a = s - 1; a >= 0; a--) {
        const c = i.setContext(this.getPointLabelContext(a)),
          { color: f, lineWidth: d } = c
        !d ||
          !f ||
          ((t.lineWidth = d),
          (t.strokeStyle = f),
          t.setLineDash(c.borderDash),
          (t.lineDashOffset = c.borderDashOffset),
          (l = this.getDistanceFromCenterForValue(
            n.ticks.reverse ? this.min : this.max,
          )),
          (u = this.getPointPosition(a, l)),
          t.beginPath(),
          t.moveTo(this.xCenter, this.yCenter),
          t.lineTo(u.x, u.y),
          t.stroke())
      }
      t.restore()
    }
  }
  drawBorder() {}
  drawLabels() {
    const t = this.ctx,
      n = this.options,
      i = n.ticks
    if (!i.display) return
    const r = this.getIndexAngle(0)
    let o, s
    t.save(),
      t.translate(this.xCenter, this.yCenter),
      t.rotate(r),
      (t.textAlign = "center"),
      (t.textBaseline = "middle"),
      this.ticks.forEach((a, l) => {
        if (l === 0 && !n.reverse) return
        const u = i.setContext(this.getContext(l)),
          c = De(u.font)
        if (
          ((o = this.getDistanceFromCenterForValue(this.ticks[l].value)),
          u.showLabelBackdrop)
        ) {
          ;(t.font = c.string),
            (s = t.measureText(a.label).width),
            (t.fillStyle = u.backdropColor)
          const f = Ue(u.backdropPadding)
          t.fillRect(
            -s / 2 - f.left,
            -o - c.size / 2 - f.top,
            s + f.width,
            c.size + f.height,
          )
        }
        ir(t, a.label, 0, -o, c, {
          color: u.color,
          strokeColor: u.textStrokeColor,
          strokeWidth: u.textStrokeWidth,
        })
      }),
      t.restore()
  }
  drawTitle() {}
}
I(ws, "id", "radialLinear"),
  I(ws, "defaults", {
    display: !0,
    animate: !0,
    position: "chartArea",
    angleLines: {
      display: !0,
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0,
    },
    grid: { circular: !1 },
    startAngle: 0,
    ticks: { showLabelBackdrop: !0, callback: Cl.formatters.numeric },
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: !0,
      font: { size: 10 },
      callback(t) {
        return t
      },
      padding: 5,
      centerPointLabels: !1,
    },
  }),
  I(ws, "defaultRoutes", {
    "angleLines.color": "borderColor",
    "pointLabels.color": "color",
    "ticks.color": "color",
  }),
  I(ws, "descriptors", { angleLines: { _fallback: "grid" } })
const Ml = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  qe = Object.keys(Ml)
function ig(e, t) {
  return e - t
}
function rg(e, t) {
  if (ce(t)) return null
  const n = e._adapter,
    { parser: i, round: r, isoWeekday: o } = e._parseOpts
  let s = t
  return (
    typeof i == "function" && (s = i(s)),
    Me(s) || (s = typeof i == "string" ? n.parse(s, i) : n.parse(s)),
    s === null
      ? null
      : (r &&
          (s =
            r === "week" && (Pa(o) || o === !0)
              ? n.startOf(s, "isoWeek", o)
              : n.startOf(s, r)),
        +s)
  )
}
function og(e, t, n, i) {
  const r = qe.length
  for (let o = qe.indexOf(e); o < r - 1; ++o) {
    const s = Ml[qe[o]],
      a = s.steps ? s.steps : Number.MAX_SAFE_INTEGER
    if (s.common && Math.ceil((n - t) / (a * s.size)) <= i) return qe[o]
  }
  return qe[r - 1]
}
function z2(e, t, n, i, r) {
  for (let o = qe.length - 1; o >= qe.indexOf(n); o--) {
    const s = qe[o]
    if (Ml[s].common && e._adapter.diff(r, i, s) >= t - 1) return s
  }
  return qe[n ? qe.indexOf(n) : 0]
}
function N2(e) {
  for (let t = qe.indexOf(e) + 1, n = qe.length; t < n; ++t)
    if (Ml[qe[t]].common) return qe[t]
}
function sg(e, t, n) {
  if (!n) e[t] = !0
  else if (n.length) {
    const { lo: i, hi: r } = od(n, t),
      o = n[i] >= t ? n[i] : n[r]
    e[o] = !0
  }
}
function $2(e, t, n, i) {
  const r = e._adapter,
    o = +r.startOf(t[0].value, i),
    s = t[t.length - 1].value
  let a, l
  for (a = o; a <= s; a = +r.add(a, 1, i))
    (l = n[a]), l >= 0 && (t[l].major = !0)
  return t
}
function ag(e, t, n) {
  const i = [],
    r = {},
    o = t.length
  let s, a
  for (s = 0; s < o; ++s)
    (a = t[s]), (r[a] = s), i.push({ value: a, major: !1 })
  return o === 0 || !n ? i : $2(e, i, r, n)
}
class Ia extends pr {
  constructor(t) {
    super(t),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = "day"),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0)
  }
  init(t, n = {}) {
    const i = t.time || (t.time = {}),
      r = (this._adapter = new Ub._date(t.adapters.date))
    r.init(n),
      to(i.displayFormats, r.formats()),
      (this._parseOpts = {
        parser: i.parser,
        round: i.round,
        isoWeekday: i.isoWeekday,
      }),
      super.init(t),
      (this._normalized = n.normalized)
  }
  parse(t, n) {
    return t === void 0 ? null : rg(this, t)
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] })
  }
  determineDataLimits() {
    const t = this.options,
      n = this._adapter,
      i = t.time.unit || "day"
    let { min: r, max: o, minDefined: s, maxDefined: a } = this.getUserBounds()
    function l(u) {
      !s && !isNaN(u.min) && (r = Math.min(r, u.min)),
        !a && !isNaN(u.max) && (o = Math.max(o, u.max))
    }
    ;(!s || !a) &&
      (l(this._getLabelBounds()),
      (t.bounds !== "ticks" || t.ticks.source !== "labels") &&
        l(this.getMinMax(!1))),
      (r = Me(r) && !isNaN(r) ? r : +n.startOf(Date.now(), i)),
      (o = Me(o) && !isNaN(o) ? o : +n.endOf(Date.now(), i) + 1),
      (this.min = Math.min(r, o - 1)),
      (this.max = Math.max(r + 1, o))
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps()
    let n = Number.POSITIVE_INFINITY,
      i = Number.NEGATIVE_INFINITY
    return t.length && ((n = t[0]), (i = t[t.length - 1])), { min: n, max: i }
  }
  buildTicks() {
    const t = this.options,
      n = t.time,
      i = t.ticks,
      r = i.source === "labels" ? this.getLabelTimestamps() : this._generate()
    t.bounds === "ticks" &&
      r.length &&
      ((this.min = this._userMin || r[0]),
      (this.max = this._userMax || r[r.length - 1]))
    const o = this.min,
      s = this.max,
      a = WS(r, o, s)
    return (
      (this._unit =
        n.unit ||
        (i.autoSkip
          ? og(n.minUnit, this.min, this.max, this._getLabelCapacity(o))
          : z2(this, a.length, n.minUnit, this.min, this.max))),
      (this._majorUnit =
        !i.major.enabled || this._unit === "year" ? void 0 : N2(this._unit)),
      this.initOffsets(r),
      t.reverse && a.reverse(),
      ag(this, a, this._majorUnit)
    )
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map((t) => +t.value))
  }
  initOffsets(t = []) {
    let n = 0,
      i = 0,
      r,
      o
    this.options.offset &&
      t.length &&
      ((r = this.getDecimalForValue(t[0])),
      t.length === 1
        ? (n = 1 - r)
        : (n = (this.getDecimalForValue(t[1]) - r) / 2),
      (o = this.getDecimalForValue(t[t.length - 1])),
      t.length === 1
        ? (i = o)
        : (i = (o - this.getDecimalForValue(t[t.length - 2])) / 2))
    const s = t.length < 3 ? 0.5 : 0.25
    ;(n = _t(n, 0, s)),
      (i = _t(i, 0, s)),
      (this._offsets = { start: n, end: i, factor: 1 / (n + 1 + i) })
  }
  _generate() {
    const t = this._adapter,
      n = this.min,
      i = this.max,
      r = this.options,
      o = r.time,
      s = o.unit || og(o.minUnit, n, i, this._getLabelCapacity(n)),
      a = X(r.ticks.stepSize, 1),
      l = s === "week" ? o.isoWeekday : !1,
      u = Pa(l) || l === !0,
      c = {}
    let f = n,
      d,
      h
    if (
      (u && (f = +t.startOf(f, "isoWeek", l)),
      (f = +t.startOf(f, u ? "day" : s)),
      t.diff(i, n, s) > 1e5 * a)
    )
      throw new Error(
        n + " and " + i + " are too far apart with stepSize of " + a + " " + s,
      )
    const m = r.ticks.source === "data" && this.getDataTimestamps()
    for (d = f, h = 0; d < i; d = +t.add(d, a, s), h++) sg(c, d, m)
    return (
      (d === i || r.bounds === "ticks" || h === 1) && sg(c, d, m),
      Object.keys(c)
        .sort(ig)
        .map((y) => +y)
    )
  }
  getLabelForValue(t) {
    const n = this._adapter,
      i = this.options.time
    return i.tooltipFormat
      ? n.format(t, i.tooltipFormat)
      : n.format(t, i.displayFormats.datetime)
  }
  format(t, n) {
    const r = this.options.time.displayFormats,
      o = this._unit,
      s = n || r[o]
    return this._adapter.format(t, s)
  }
  _tickFormatFunction(t, n, i, r) {
    const o = this.options,
      s = o.ticks.callback
    if (s) return te(s, [t, n, i], this)
    const a = o.time.displayFormats,
      l = this._unit,
      u = this._majorUnit,
      c = l && a[l],
      f = u && a[u],
      d = i[n],
      h = u && f && d && d.major
    return this._adapter.format(t, r || (h ? f : c))
  }
  generateTickLabels(t) {
    let n, i, r
    for (n = 0, i = t.length; n < i; ++n)
      (r = t[n]), (r.label = this._tickFormatFunction(r.value, n, t))
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min)
  }
  getPixelForValue(t) {
    const n = this._offsets,
      i = this.getDecimalForValue(t)
    return this.getPixelForDecimal((n.start + i) * n.factor)
  }
  getValueForPixel(t) {
    const n = this._offsets,
      i = this.getDecimalForPixel(t) / n.factor - n.end
    return this.min + i * (this.max - this.min)
  }
  _getLabelSize(t) {
    const n = this.options.ticks,
      i = this.ctx.measureText(t).width,
      r = Ht(this.isHorizontal() ? n.maxRotation : n.minRotation),
      o = Math.cos(r),
      s = Math.sin(r),
      a = this._resolveTickFontOptions(0).size
    return { w: i * o + a * s, h: i * s + a * o }
  }
  _getLabelCapacity(t) {
    const n = this.options.time,
      i = n.displayFormats,
      r = i[n.unit] || i.millisecond,
      o = this._tickFormatFunction(t, 0, ag(this, [t], this._majorUnit), r),
      s = this._getLabelSize(o),
      a =
        Math.floor(this.isHorizontal() ? this.width / s.w : this.height / s.h) -
        1
    return a > 0 ? a : 1
  }
  getDataTimestamps() {
    let t = this._cache.data || [],
      n,
      i
    if (t.length) return t
    const r = this.getMatchingVisibleMetas()
    if (this._normalized && r.length)
      return (this._cache.data = r[0].controller.getAllParsedValues(this))
    for (n = 0, i = r.length; n < i; ++n)
      t = t.concat(r[n].controller.getAllParsedValues(this))
    return (this._cache.data = this.normalize(t))
  }
  getLabelTimestamps() {
    const t = this._cache.labels || []
    let n, i
    if (t.length) return t
    const r = this.getLabels()
    for (n = 0, i = r.length; n < i; ++n) t.push(rg(this, r[n]))
    return (this._cache.labels = this._normalized ? t : this.normalize(t))
  }
  normalize(t) {
    return VS(t.sort(ig))
  }
}
I(Ia, "id", "time"),
  I(Ia, "defaults", {
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {},
    },
    ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
  })
function Ss(e, t, n) {
  let i = 0,
    r = e.length - 1,
    o,
    s,
    a,
    l
  n
    ? (t >= e[i].pos && t <= e[r].pos && ({ lo: i, hi: r } = Ac(e, "pos", t)),
      ({ pos: o, time: a } = e[i]),
      ({ pos: s, time: l } = e[r]))
    : (t >= e[i].time &&
        t <= e[r].time &&
        ({ lo: i, hi: r } = Ac(e, "time", t)),
      ({ time: o, pos: a } = e[i]),
      ({ time: s, pos: l } = e[r]))
  const u = s - o
  return u ? a + ((l - a) * (t - o)) / u : a
}
class lg extends Ia {
  constructor(t) {
    super(t),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0)
  }
  initOffsets() {
    const t = this._getTimestampsForTable(),
      n = (this._table = this.buildLookupTable(t))
    ;(this._minPos = Ss(n, this.min)),
      (this._tableRange = Ss(n, this.max) - this._minPos),
      super.initOffsets(t)
  }
  buildLookupTable(t) {
    const { min: n, max: i } = this,
      r = [],
      o = []
    let s, a, l, u, c
    for (s = 0, a = t.length; s < a; ++s)
      (u = t[s]), u >= n && u <= i && r.push(u)
    if (r.length < 2)
      return [
        { time: n, pos: 0 },
        { time: i, pos: 1 },
      ]
    for (s = 0, a = r.length; s < a; ++s)
      (c = r[s + 1]),
        (l = r[s - 1]),
        (u = r[s]),
        Math.round((c + l) / 2) !== u && o.push({ time: u, pos: s / (a - 1) })
    return o
  }
  _generate() {
    const t = this.min,
      n = this.max
    let i = super.getDataTimestamps()
    return (
      (!i.includes(t) || !i.length) && i.splice(0, 0, t),
      (!i.includes(n) || i.length === 1) && i.push(n),
      i.sort((r, o) => r - o)
    )
  }
  _getTimestampsForTable() {
    let t = this._cache.all || []
    if (t.length) return t
    const n = this.getDataTimestamps(),
      i = this.getLabelTimestamps()
    return (
      n.length && i.length
        ? (t = this.normalize(n.concat(i)))
        : (t = n.length ? n : i),
      (t = this._cache.all = t),
      t
    )
  }
  getDecimalForValue(t) {
    return (Ss(this._table, t) - this._minPos) / this._tableRange
  }
  getValueForPixel(t) {
    const n = this._offsets,
      i = this.getDecimalForPixel(t) / n.factor - n.end
    return Ss(this._table, i * this._tableRange + this._minPos, !0)
  }
}
I(lg, "id", "timeseries"), I(lg, "defaults", Ia.defaults)
const Gy = "label"
function ug(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t)
}
function F2(e, t) {
  const n = e.options
  n && t && Object.assign(n, t)
}
function qy(e, t) {
  e.labels = t
}
function Zy(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Gy
  const i = []
  e.datasets = t.map((r) => {
    const o = e.datasets.find((s) => s[n] === r[n])
    return !o || !r.data || i.includes(o)
      ? { ...r }
      : (i.push(o), Object.assign(o, r), o)
  })
}
function j2(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Gy
  const n = { labels: [], datasets: [] }
  return qy(n, e.labels), Zy(n, e.datasets, t), n
}
function B2(e, t) {
  const {
      height: n = 150,
      width: i = 300,
      redraw: r = !1,
      datasetIdKey: o,
      type: s,
      data: a,
      options: l,
      plugins: u = [],
      fallbackContent: c,
      updateMode: f,
      ...d
    } = e,
    h = R.useRef(null),
    m = R.useRef(),
    y = () => {
      h.current &&
        ((m.current = new Pl(h.current, {
          type: s,
          data: j2(a, o),
          options: l && { ...l },
          plugins: u,
        })),
        ug(t, m.current))
    },
    x = () => {
      ug(t, null), m.current && (m.current.destroy(), (m.current = null))
    }
  return (
    R.useEffect(() => {
      !r && m.current && l && F2(m.current, l)
    }, [r, l]),
    R.useEffect(() => {
      !r && m.current && qy(m.current.config.data, a.labels)
    }, [r, a.labels]),
    R.useEffect(() => {
      !r && m.current && a.datasets && Zy(m.current.config.data, a.datasets, o)
    }, [r, a.datasets]),
    R.useEffect(() => {
      m.current && (r ? (x(), setTimeout(y)) : m.current.update(f))
    }, [r, l, a.labels, a.datasets, f]),
    R.useEffect(() => {
      m.current && (x(), setTimeout(y))
    }, [s]),
    R.useEffect(() => (y(), () => x()), []),
    H.createElement(
      "canvas",
      Object.assign({ ref: h, role: "img", height: n, width: i }, d),
      c,
    )
  )
}
const W2 = R.forwardRef(B2)
function H2(e, t) {
  return (
    Pl.register(t),
    R.forwardRef((n, i) =>
      H.createElement(W2, Object.assign({}, n, { ref: i, type: e })),
    )
  )
}
const V2 = H2("pie", Lc),
  U2 = N_,
  Pt = x_,
  Y2 = "_row_5t0zx_1",
  K2 = "_columnrow_5t0zx_16",
  X2 = "_plaintext_5t0zx_28",
  Q2 = "_minitext_5t0zx_32",
  G2 = "_value_5t0zx_38",
  q2 = "_inputbox_5t0zx_47",
  Z2 = "_textbox_5t0zx_65",
  J2 = "_button_5t0zx_78",
  eC = "_asyncButton_5t0zx_105 _button_5t0zx_78",
  tC = "_webtitle_5t0zx_129",
  Ae = {
    row: Y2,
    columnrow: K2,
    plaintext: X2,
    minitext: Q2,
    value: G2,
    inputbox: q2,
    textbox: Z2,
    button: J2,
    asyncButton: eC,
    webtitle: tC,
  }
var et = function () {
  return (
    (et =
      Object.assign ||
      function (t) {
        for (var n, i = 1, r = arguments.length; i < r; i++) {
          n = arguments[i]
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
        }
        return t
      }),
    et.apply(this, arguments)
  )
}
function za(e, t, n) {
  if (n || arguments.length === 2)
    for (var i = 0, r = t.length, o; i < r; i++)
      (o || !(i in t)) &&
        (o || (o = Array.prototype.slice.call(t, 0, i)), (o[i] = t[i]))
  return e.concat(o || Array.prototype.slice.call(t))
}
var re = "-ms-",
  oo = "-moz-",
  K = "-webkit-",
  Jy = "comm",
  Tl = "rule",
  pd = "decl",
  nC = "@import",
  ev = "@keyframes",
  iC = "@layer",
  rC = Math.abs,
  gd = String.fromCharCode,
  $c = Object.assign
function oC(e, t) {
  return Pe(e, 0) ^ 45
    ? (((((((t << 2) ^ Pe(e, 0)) << 2) ^ Pe(e, 1)) << 2) ^ Pe(e, 2)) << 2) ^
        Pe(e, 3)
    : 0
}
function tv(e) {
  return e.trim()
}
function qt(e, t) {
  return (e = t.exec(e)) ? e[0] : e
}
function j(e, t, n) {
  return e.replace(t, n)
}
function Ws(e, t) {
  return e.indexOf(t)
}
function Pe(e, t) {
  return e.charCodeAt(t) | 0
}
function or(e, t, n) {
  return e.slice(t, n)
}
function Bt(e) {
  return e.length
}
function nv(e) {
  return e.length
}
function Hr(e, t) {
  return t.push(e), e
}
function sC(e, t) {
  return e.map(t).join("")
}
function cg(e, t) {
  return e.filter(function (n) {
    return !qt(n, t)
  })
}
var Ol = 1,
  sr = 1,
  iv = 0,
  kt = 0,
  xe = 0,
  gr = ""
function Al(e, t, n, i, r, o, s, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: i,
    props: r,
    children: o,
    line: Ol,
    column: sr,
    length: s,
    return: "",
    siblings: a,
  }
}
function hn(e, t) {
  return $c(
    Al("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t,
  )
}
function bi(e) {
  for (; e.root; ) e = hn(e.root, { children: [e] })
  Hr(e, e.siblings)
}
function aC() {
  return xe
}
function lC() {
  return (
    (xe = kt > 0 ? Pe(gr, --kt) : 0), sr--, xe === 10 && ((sr = 1), Ol--), xe
  )
}
function Dt() {
  return (
    (xe = kt < iv ? Pe(gr, kt++) : 0), sr++, xe === 10 && ((sr = 1), Ol++), xe
  )
}
function si() {
  return Pe(gr, kt)
}
function Hs() {
  return kt
}
function Rl(e, t) {
  return or(gr, e, t)
}
function Fc(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4
    case 58:
      return 3
    case 34:
    case 39:
    case 40:
    case 91:
      return 2
    case 41:
    case 93:
      return 1
  }
  return 0
}
function uC(e) {
  return (Ol = sr = 1), (iv = Bt((gr = e))), (kt = 0), []
}
function cC(e) {
  return (gr = ""), e
}
function Eu(e) {
  return tv(Rl(kt - 1, jc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function fC(e) {
  for (; (xe = si()) && xe < 33; ) Dt()
  return Fc(e) > 2 || Fc(xe) > 3 ? "" : " "
}
function dC(e, t) {
  for (
    ;
    --t &&
    Dt() &&
    !(xe < 48 || xe > 102 || (xe > 57 && xe < 65) || (xe > 70 && xe < 97));

  );
  return Rl(e, Hs() + (t < 6 && si() == 32 && Dt() == 32))
}
function jc(e) {
  for (; Dt(); )
    switch (xe) {
      case e:
        return kt
      case 34:
      case 39:
        e !== 34 && e !== 39 && jc(xe)
        break
      case 40:
        e === 41 && jc(e)
        break
      case 92:
        Dt()
        break
    }
  return kt
}
function hC(e, t) {
  for (; Dt() && e + xe !== 47 + 10; )
    if (e + xe === 42 + 42 && si() === 47) break
  return "/*" + Rl(t, kt - 1) + "*" + gd(e === 47 ? e : Dt())
}
function pC(e) {
  for (; !Fc(si()); ) Dt()
  return Rl(e, kt)
}
function gC(e) {
  return cC(Vs("", null, null, null, [""], (e = uC(e)), 0, [0], e))
}
function Vs(e, t, n, i, r, o, s, a, l) {
  for (
    var u = 0,
      c = 0,
      f = s,
      d = 0,
      h = 0,
      m = 0,
      y = 1,
      x = 1,
      p = 1,
      g = 0,
      v = "",
      _ = r,
      w = o,
      b = i,
      S = v;
    x;

  )
    switch (((m = g), (g = Dt()))) {
      case 40:
        if (m != 108 && Pe(S, f - 1) == 58) {
          Ws((S += j(Eu(g), "&", "&\f")), "&\f") != -1 && (p = -1)
          break
        }
      case 34:
      case 39:
      case 91:
        S += Eu(g)
        break
      case 9:
      case 10:
      case 13:
      case 32:
        S += fC(m)
        break
      case 92:
        S += dC(Hs() - 1, 7)
        continue
      case 47:
        switch (si()) {
          case 42:
          case 47:
            Hr(mC(hC(Dt(), Hs()), t, n, l), l)
            break
          default:
            S += "/"
        }
        break
      case 123 * y:
        a[u++] = Bt(S) * p
      case 125 * y:
      case 59:
      case 0:
        switch (g) {
          case 0:
          case 125:
            x = 0
          case 59 + c:
            p == -1 && (S = j(S, /\f/g, "")),
              h > 0 &&
                Bt(S) - f &&
                Hr(
                  h > 32
                    ? dg(S + ";", i, n, f - 1, l)
                    : dg(j(S, " ", "") + ";", i, n, f - 2, l),
                  l,
                )
            break
          case 59:
            S += ";"
          default:
            if (
              (Hr(
                (b = fg(S, t, n, u, c, r, a, v, (_ = []), (w = []), f, o)),
                o,
              ),
              g === 123)
            )
              if (c === 0) Vs(S, t, b, b, _, o, f, a, w)
              else
                switch (d === 99 && Pe(S, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Vs(
                      e,
                      b,
                      b,
                      i && Hr(fg(e, b, b, 0, 0, r, a, v, r, (_ = []), f, w), w),
                      r,
                      w,
                      f,
                      a,
                      i ? _ : w,
                    )
                    break
                  default:
                    Vs(S, b, b, b, [""], w, 0, a, w)
                }
        }
        ;(u = c = h = 0), (y = p = 1), (v = S = ""), (f = s)
        break
      case 58:
        ;(f = 1 + Bt(S)), (h = m)
      default:
        if (y < 1) {
          if (g == 123) --y
          else if (g == 125 && y++ == 0 && lC() == 125) continue
        }
        switch (((S += gd(g)), g * y)) {
          case 38:
            p = c > 0 ? 1 : ((S += "\f"), -1)
            break
          case 44:
            ;(a[u++] = (Bt(S) - 1) * p), (p = 1)
            break
          case 64:
            si() === 45 && (S += Eu(Dt())),
              (d = si()),
              (c = f = Bt((v = S += pC(Hs())))),
              g++
            break
          case 45:
            m === 45 && Bt(S) == 2 && (y = 0)
        }
    }
  return o
}
function fg(e, t, n, i, r, o, s, a, l, u, c, f) {
  for (
    var d = r - 1, h = r === 0 ? o : [""], m = nv(h), y = 0, x = 0, p = 0;
    y < i;
    ++y
  )
    for (var g = 0, v = or(e, d + 1, (d = rC((x = s[y])))), _ = e; g < m; ++g)
      (_ = tv(x > 0 ? h[g] + " " + v : j(v, /&\f/g, h[g]))) && (l[p++] = _)
  return Al(e, t, n, r === 0 ? Tl : a, l, u, c, f)
}
function mC(e, t, n, i) {
  return Al(e, t, n, Jy, gd(aC()), or(e, 2, -2), 0, i)
}
function dg(e, t, n, i, r) {
  return Al(e, t, n, pd, or(e, 0, i), or(e, i + 1, -1), i, r)
}
function rv(e, t, n) {
  switch (oC(e, t)) {
    case 5103:
      return K + "print-" + e + e
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return K + e + e
    case 4789:
      return oo + e + e
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return K + e + oo + e + re + e + e
    case 5936:
      switch (Pe(e, t + 11)) {
        case 114:
          return K + e + re + j(e, /[svh]\w+-[tblr]{2}/, "tb") + e
        case 108:
          return K + e + re + j(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e
        case 45:
          return K + e + re + j(e, /[svh]\w+-[tblr]{2}/, "lr") + e
      }
    case 6828:
    case 4268:
    case 2903:
      return K + e + re + e + e
    case 6165:
      return K + e + re + "flex-" + e + e
    case 5187:
      return (
        K + e + j(e, /(\w+).+(:[^]+)/, K + "box-$1$2" + re + "flex-$1$2") + e
      )
    case 5443:
      return (
        K +
        e +
        re +
        "flex-item-" +
        j(e, /flex-|-self/g, "") +
        (qt(e, /flex-|baseline/)
          ? ""
          : re + "grid-row-" + j(e, /flex-|-self/g, "")) +
        e
      )
    case 4675:
      return (
        K +
        e +
        re +
        "flex-line-pack" +
        j(e, /align-content|flex-|-self/g, "") +
        e
      )
    case 5548:
      return K + e + re + j(e, "shrink", "negative") + e
    case 5292:
      return K + e + re + j(e, "basis", "preferred-size") + e
    case 6060:
      return (
        K +
        "box-" +
        j(e, "-grow", "") +
        K +
        e +
        re +
        j(e, "grow", "positive") +
        e
      )
    case 4554:
      return K + j(e, /([^-])(transform)/g, "$1" + K + "$2") + e
    case 6187:
      return (
        j(j(j(e, /(zoom-|grab)/, K + "$1"), /(image-set)/, K + "$1"), e, "") + e
      )
    case 5495:
    case 3959:
      return j(e, /(image-set\([^]*)/, K + "$1$`$1")
    case 4968:
      return (
        j(
          j(e, /(.+:)(flex-)?(.*)/, K + "box-pack:$3" + re + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        K +
        e +
        e
      )
    case 4200:
      if (!qt(e, /flex-|baseline/))
        return re + "grid-column-align" + or(e, t) + e
      break
    case 2592:
    case 3360:
      return re + j(e, "template-", "") + e
    case 4384:
    case 3616:
      return n &&
        n.some(function (i, r) {
          return (t = r), qt(i.props, /grid-\w+-end/)
        })
        ? ~Ws(e + (n = n[t].value), "span")
          ? e
          : re +
            j(e, "-start", "") +
            e +
            re +
            "grid-row-span:" +
            (~Ws(n, "span") ? qt(n, /\d+/) : +qt(n, /\d+/) - +qt(e, /\d+/)) +
            ";"
        : re + j(e, "-start", "") + e
    case 4896:
    case 4128:
      return n &&
        n.some(function (i) {
          return qt(i.props, /grid-\w+-start/)
        })
        ? e
        : re + j(j(e, "-end", "-span"), "span ", "") + e
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return j(e, /(.+)-inline(.+)/, K + "$1$2") + e
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Bt(e) - 1 - t > 6)
        switch (Pe(e, t + 1)) {
          case 109:
            if (Pe(e, t + 4) !== 45) break
          case 102:
            return (
              j(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  K +
                  "$2-$3$1" +
                  oo +
                  (Pe(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            )
          case 115:
            return ~Ws(e, "stretch")
              ? rv(j(e, "stretch", "fill-available"), t, n) + e
              : e
        }
      break
    case 5152:
    case 5920:
      return j(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (i, r, o, s, a, l, u) {
          return (
            re +
            r +
            ":" +
            o +
            u +
            (s ? re + r + "-span:" + (a ? l : +l - +o) + u : "") +
            e
          )
        },
      )
    case 4949:
      if (Pe(e, t + 6) === 121) return j(e, ":", ":" + K) + e
      break
    case 6444:
      switch (Pe(e, Pe(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            j(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                K +
                (Pe(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                K +
                "$2$3$1" +
                re +
                "$2box$3",
            ) + e
          )
        case 100:
          return j(e, ":", ":" + re) + e
      }
      break
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return j(e, "scroll-", "scroll-snap-") + e
  }
  return e
}
function Na(e, t) {
  for (var n = "", i = 0; i < e.length; i++) n += t(e[i], i, e, t) || ""
  return n
}
function yC(e, t, n, i) {
  switch (e.type) {
    case iC:
      if (e.children.length) break
    case nC:
    case pd:
      return (e.return = e.return || e.value)
    case Jy:
      return ""
    case ev:
      return (e.return = e.value + "{" + Na(e.children, i) + "}")
    case Tl:
      if (!Bt((e.value = e.props.join(",")))) return ""
  }
  return Bt((n = Na(e.children, i))) ? (e.return = e.value + "{" + n + "}") : ""
}
function vC(e) {
  var t = nv(e)
  return function (n, i, r, o) {
    for (var s = "", a = 0; a < t; a++) s += e[a](n, i, r, o) || ""
    return s
  }
}
function xC(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t))
  }
}
function _C(e, t, n, i) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case pd:
        e.return = rv(e.value, e.length, n)
        return
      case ev:
        return Na([hn(e, { value: j(e.value, "@", "@" + K) })], i)
      case Tl:
        if (e.length)
          return sC((n = e.props), function (r) {
            switch (qt(r, (i = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                bi(hn(e, { props: [j(r, /:(read-\w+)/, ":" + oo + "$1")] })),
                  bi(hn(e, { props: [r] })),
                  $c(e, { props: cg(n, i) })
                break
              case "::placeholder":
                bi(
                  hn(e, { props: [j(r, /:(plac\w+)/, ":" + K + "input-$1")] }),
                ),
                  bi(hn(e, { props: [j(r, /:(plac\w+)/, ":" + oo + "$1")] })),
                  bi(hn(e, { props: [j(r, /:(plac\w+)/, re + "input-$1")] })),
                  bi(hn(e, { props: [r] })),
                  $c(e, { props: cg(n, i) })
                break
            }
            return ""
          })
    }
}
var wC = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  ar =
    (typeof process < "u" &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
    "data-styled",
  md = typeof window < "u" && "HTMLElement" in window,
  SC = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      process.env !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
      {}.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      process.env !== void 0 &&
      {}.SC_DISABLE_SPEEDY !== void 0 &&
      {}.SC_DISABLE_SPEEDY !== "" &&
      {}.SC_DISABLE_SPEEDY !== "false" &&
      {}.SC_DISABLE_SPEEDY),
  Ll = Object.freeze([]),
  lr = Object.freeze({})
function bC(e, t, n) {
  return (
    n === void 0 && (n = lr), (e.theme !== n.theme && e.theme) || t || n.theme
  )
}
var ov = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  kC = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  CC = /(^-|-$)/g
function hg(e) {
  return e.replace(kC, "-").replace(CC, "")
}
var EC = /(a)(d)/gi,
  pg = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97))
  }
function Bc(e) {
  var t,
    n = ""
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = pg(t % 52) + n
  return (pg(t % 52) + n).replace(EC, "$1-$2")
}
var Pu,
  Ni = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n)
    return e
  },
  sv = function (e) {
    return Ni(5381, e)
  }
function PC(e) {
  return Bc(sv(e) >>> 0)
}
function MC(e) {
  return e.displayName || e.name || "Component"
}
function Mu(e) {
  return typeof e == "string" && !0
}
var av = typeof Symbol == "function" && Symbol.for,
  lv = av ? Symbol.for("react.memo") : 60115,
  TC = av ? Symbol.for("react.forward_ref") : 60112,
  OC = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  AC = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  uv = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  RC =
    (((Pu = {})[TC] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (Pu[lv] = uv),
    Pu)
function gg(e) {
  return ("type" in (t = e) && t.type.$$typeof) === lv
    ? uv
    : "$$typeof" in e
    ? RC[e.$$typeof]
    : OC
  var t
}
var LC = Object.defineProperty,
  DC = Object.getOwnPropertyNames,
  mg = Object.getOwnPropertySymbols,
  IC = Object.getOwnPropertyDescriptor,
  zC = Object.getPrototypeOf,
  yg = Object.prototype
function cv(e, t, n) {
  if (typeof t != "string") {
    if (yg) {
      var i = zC(t)
      i && i !== yg && cv(e, i, n)
    }
    var r = DC(t)
    mg && (r = r.concat(mg(t)))
    for (var o = gg(e), s = gg(t), a = 0; a < r.length; ++a) {
      var l = r[a]
      if (!(l in AC || (n && n[l]) || (s && l in s) || (o && l in o))) {
        var u = IC(t, l)
        try {
          LC(e, l, u)
        } catch {}
      }
    }
  }
  return e
}
function ur(e) {
  return typeof e == "function"
}
function yd(e) {
  return typeof e == "object" && "styledComponentId" in e
}
function ni(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || ""
}
function vg(e, t) {
  if (e.length === 0) return ""
  for (var n = e[0], i = 1; i < e.length; i++) n += t ? t + e[i] : e[i]
  return n
}
function Ro(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  )
}
function Wc(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !Ro(e) && !Array.isArray(e))) return t
  if (Array.isArray(t)) for (var i = 0; i < t.length; i++) e[i] = Wc(e[i], t[i])
  else if (Ro(t)) for (var i in t) e[i] = Wc(e[i], t[i])
  return e
}
function vd(e, t) {
  Object.defineProperty(e, "toString", { value: t })
}
function jo(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : ""),
  )
}
var NC = (function () {
    function e(t) {
      ;(this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t)
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, i = 0; i < t; i++) n += this.groupSizes[i]
        return n
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var i = this.groupSizes, r = i.length, o = r; t >= o; )
            if ((o <<= 1) < 0) throw jo(16, "".concat(t))
          ;(this.groupSizes = new Uint32Array(o)),
            this.groupSizes.set(i),
            (this.length = o)
          for (var s = r; s < o; s++) this.groupSizes[s] = 0
        }
        for (
          var a = this.indexOfGroup(t + 1), l = ((s = 0), n.length);
          s < l;
          s++
        )
          this.tag.insertRule(a, n[s]) && (this.groupSizes[t]++, a++)
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            i = this.indexOfGroup(t),
            r = i + n
          this.groupSizes[t] = 0
          for (var o = i; o < r; o++) this.tag.deleteRule(i)
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = ""
        if (t >= this.length || this.groupSizes[t] === 0) return n
        for (
          var i = this.groupSizes[t],
            r = this.indexOfGroup(t),
            o = r + i,
            s = r;
          s < o;
          s++
        )
          n += "".concat(this.tag.getRule(s)).concat(`/*!sc*/
`)
        return n
      }),
      e
    )
  })(),
  Us = new Map(),
  $a = new Map(),
  Tu = 1,
  bs = function (e) {
    if (Us.has(e)) return Us.get(e)
    for (; $a.has(Tu); ) Tu++
    var t = Tu++
    return Us.set(e, t), $a.set(t, e), t
  },
  $C = function (e, t) {
    Us.set(e, t), $a.set(t, e)
  },
  FC = "style["
    .concat(ar, "][")
    .concat("data-styled-version", '="')
    .concat("6.1.0", '"]'),
  jC = new RegExp(
    "^".concat(ar, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  ),
  BC = function (e, t, n) {
    for (var i, r = n.split(","), o = 0, s = r.length; o < s; o++)
      (i = r[o]) && e.registerName(t, i)
  },
  WC = function (e, t) {
    for (
      var n,
        i = ((n = t.textContent) !== null && n !== void 0 ? n : "")
          .split(`/*!sc*/
`),
        r = [],
        o = 0,
        s = i.length;
      o < s;
      o++
    ) {
      var a = i[o].trim()
      if (a) {
        var l = a.match(jC)
        if (l) {
          var u = 0 | parseInt(l[1], 10),
            c = l[2]
          u !== 0 && ($C(c, u), BC(e, c, l[3]), e.getTag().insertRules(u, r)),
            (r.length = 0)
        } else r.push(a)
      }
    }
  }
function HC() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null
}
var fv = function (e) {
    var t = document.head,
      n = e || t,
      i = document.createElement("style"),
      r = (function (a) {
        var l = Array.from(a.querySelectorAll("style[".concat(ar, "]")))
        return l[l.length - 1]
      })(n),
      o = r !== void 0 ? r.nextSibling : null
    i.setAttribute(ar, "active"), i.setAttribute("data-styled-version", "6.1.0")
    var s = HC()
    return s && i.setAttribute("nonce", s), n.insertBefore(i, o), i
  },
  VC = (function () {
    function e(t) {
      ;(this.element = fv(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet
          for (var i = document.styleSheets, r = 0, o = i.length; r < o; r++) {
            var s = i[r]
            if (s.ownerNode === n) return s
          }
          throw jo(17)
        })(this.element)),
        (this.length = 0)
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0
        } catch {
          return !1
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t]
        return n && n.cssText ? n.cssText : ""
      }),
      e
    )
  })(),
  UC = (function () {
    function e(t) {
      ;(this.element = fv(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0)
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var i = document.createTextNode(n)
          return (
            this.element.insertBefore(i, this.nodes[t] || null),
            this.length++,
            !0
          )
        }
        return !1
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : ""
      }),
      e
    )
  })(),
  YC = (function () {
    function e(t) {
      ;(this.rules = []), (this.length = 0)
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return (
          t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
        )
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : ""
      }),
      e
    )
  })(),
  xg = md,
  KC = { isServer: !md, useCSSOMInjection: !SC },
  dv = (function () {
    function e(t, n, i) {
      t === void 0 && (t = lr), n === void 0 && (n = {})
      var r = this
      ;(this.options = et(et({}, KC), t)),
        (this.gs = n),
        (this.names = new Map(i)),
        (this.server = !!t.isServer),
        !this.server &&
          md &&
          xg &&
          ((xg = !1),
          (function (o) {
            for (
              var s = document.querySelectorAll(FC), a = 0, l = s.length;
              a < l;
              a++
            ) {
              var u = s[a]
              u &&
                u.getAttribute(ar) !== "active" &&
                (WC(o, u), u.parentNode && u.parentNode.removeChild(u))
            }
          })(this)),
        vd(this, function () {
          return (function (o) {
            for (
              var s = o.getTag(),
                a = s.length,
                l = "",
                u = function (f) {
                  var d = (function (p) {
                    return $a.get(p)
                  })(f)
                  if (d === void 0) return "continue"
                  var h = o.names.get(d),
                    m = s.getGroup(f)
                  if (h === void 0 || m.length === 0) return "continue"
                  var y = ""
                      .concat(ar, ".g")
                      .concat(f, '[id="')
                      .concat(d, '"]'),
                    x = ""
                  h !== void 0 &&
                    h.forEach(function (p) {
                      p.length > 0 && (x += "".concat(p, ","))
                    }),
                    (l += "".concat(m).concat(y, '{content:"').concat(x, '"}')
                      .concat(`/*!sc*/
`))
                },
                c = 0;
              c < a;
              c++
            )
              u(c)
            return l
          })(r)
        })
    }
    return (
      (e.registerId = function (t) {
        return bs(t)
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          n === void 0 && (n = !0),
          new e(
            et(et({}, this.options), t),
            this.gs,
            (n && this.names) || void 0,
          )
        )
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1)
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var i = n.useCSSOMInjection,
                r = n.target
              return n.isServer ? new YC(r) : i ? new VC(r) : new UC(r)
            })(this.options)),
            new NC(t)))
        )
        var t
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n)
      }),
      (e.prototype.registerName = function (t, n) {
        if ((bs(t), this.names.has(t))) this.names.get(t).add(n)
        else {
          var i = new Set()
          i.add(n), this.names.set(t, i)
        }
      }),
      (e.prototype.insertRules = function (t, n, i) {
        this.registerName(t, n), this.getTag().insertRules(bs(t), i)
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear()
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(bs(t)), this.clearNames(t)
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0
      }),
      e
    )
  })(),
  XC = /&/g,
  QC = /^\s*\/\/.*$/gm
function hv(e, t) {
  return e.map(function (n) {
    return (
      n.type === "rule" &&
        ((n.value = "".concat(t, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
        (n.props = n.props.map(function (i) {
          return "".concat(t, " ").concat(i)
        }))),
      Array.isArray(n.children) &&
        n.type !== "@keyframes" &&
        (n.children = hv(n.children, t)),
      n
    )
  })
}
function GC(e) {
  var t,
    n,
    i,
    r = e === void 0 ? lr : e,
    o = r.options,
    s = o === void 0 ? lr : o,
    a = r.plugins,
    l = a === void 0 ? Ll : a,
    u = function (d, h, m) {
      return m === n ||
        (m.startsWith(n) && m.endsWith(n) && m.replaceAll(n, "").length > 0)
        ? ".".concat(t)
        : d
    },
    c = l.slice()
  c.push(function (d) {
    d.type === Tl &&
      d.value.includes("&") &&
      (d.props[0] = d.props[0].replace(XC, n).replace(i, u))
  }),
    s.prefix && c.push(_C),
    c.push(yC)
  var f = function (d, h, m, y) {
    h === void 0 && (h = ""),
      m === void 0 && (m = ""),
      y === void 0 && (y = "&"),
      (t = y),
      (n = h),
      (i = new RegExp("\\".concat(n, "\\b"), "g"))
    var x = d.replace(QC, ""),
      p = gC(m || h ? "".concat(m, " ").concat(h, " { ").concat(x, " }") : x)
    s.namespace && (p = hv(p, s.namespace))
    var g = []
    return (
      Na(
        p,
        vC(
          c.concat(
            xC(function (v) {
              return g.push(v)
            }),
          ),
        ),
      ),
      g
    )
  }
  return (
    (f.hash = l.length
      ? l
          .reduce(function (d, h) {
            return h.name || jo(15), Ni(d, h.name)
          }, 5381)
          .toString()
      : ""),
    f
  )
}
var qC = new dv(),
  Hc = GC(),
  pv = H.createContext({
    shouldForwardProp: void 0,
    styleSheet: qC,
    stylis: Hc,
  })
pv.Consumer
H.createContext(void 0)
function _g() {
  return R.useContext(pv)
}
var ZC = (function () {
    function e(t, n) {
      var i = this
      ;(this.inject = function (r, o) {
        o === void 0 && (o = Hc)
        var s = i.name + o.hash
        r.hasNameForId(i.id, s) ||
          r.insertRules(i.id, s, o(i.rules, s, "@keyframes"))
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = n),
        vd(this, function () {
          throw jo(12, String(i.name))
        })
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = Hc), this.name + t.hash
      }),
      e
    )
  })(),
  JC = function (e) {
    return e >= "A" && e <= "Z"
  }
function wg(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var i = e[n]
    if (n === 1 && i === "-" && e[0] === "-") return e
    JC(i) ? (t += "-" + i.toLowerCase()) : (t += i)
  }
  return t.startsWith("ms-") ? "-" + t : t
}
var gv = function (e) {
    return e == null || e === !1 || e === ""
  },
  mv = function (e) {
    var t,
      n,
      i = []
    for (var r in e) {
      var o = e[r]
      e.hasOwnProperty(r) &&
        !gv(o) &&
        ((Array.isArray(o) && o.isCss) || ur(o)
          ? i.push("".concat(wg(r), ":"), o, ";")
          : Ro(o)
          ? i.push.apply(i, za(za(["".concat(r, " {")], mv(o), !1), ["}"], !1))
          : i.push(
              ""
                .concat(wg(r), ": ")
                .concat(
                  ((t = r),
                  (n = o) == null || typeof n == "boolean" || n === ""
                    ? ""
                    : typeof n != "number" ||
                      n === 0 ||
                      t in wC ||
                      t.startsWith("--")
                    ? String(n).trim()
                    : "".concat(n, "px")),
                  ";",
                ),
            ))
    }
    return i
  }
function ai(e, t, n, i) {
  if (gv(e)) return []
  if (yd(e)) return [".".concat(e.styledComponentId)]
  if (ur(e)) {
    if (!ur((o = e)) || (o.prototype && o.prototype.isReactComponent) || !t)
      return [e]
    var r = e(t)
    return ai(r, t, n, i)
  }
  var o
  return e instanceof ZC
    ? n
      ? (e.inject(n, i), [e.getName(i)])
      : [e]
    : Ro(e)
    ? mv(e)
    : Array.isArray(e)
    ? Array.prototype.concat.apply(
        Ll,
        e.map(function (s) {
          return ai(s, t, n, i)
        }),
      )
    : [e.toString()]
}
function eE(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t]
    if (ur(n) && !yd(n)) return !1
  }
  return !0
}
var tE = sv("6.1.0"),
  nE = (function () {
    function e(t, n, i) {
      ;(this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (i === void 0 || i.isStatic) && eE(t)),
        (this.componentId = n),
        (this.baseHash = Ni(tE, n)),
        (this.baseStyle = i),
        dv.registerId(n)
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, i) {
        var r = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, n, i)
          : ""
        if (this.isStatic && !i.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            r = ni(r, this.staticRulesId)
          else {
            var o = vg(ai(this.rules, t, n, i)),
              s = Bc(Ni(this.baseHash, o) >>> 0)
            if (!n.hasNameForId(this.componentId, s)) {
              var a = i(o, ".".concat(s), void 0, this.componentId)
              n.insertRules(this.componentId, s, a)
            }
            ;(r = ni(r, s)), (this.staticRulesId = s)
          }
        else {
          for (
            var l = Ni(this.baseHash, i.hash), u = "", c = 0;
            c < this.rules.length;
            c++
          ) {
            var f = this.rules[c]
            if (typeof f == "string") u += f
            else if (f) {
              var d = vg(ai(f, t, n, i))
              ;(l = Ni(l, d + c)), (u += d)
            }
          }
          if (u) {
            var h = Bc(l >>> 0)
            n.hasNameForId(this.componentId, h) ||
              n.insertRules(
                this.componentId,
                h,
                i(u, ".".concat(h), void 0, this.componentId),
              ),
              (r = ni(r, h))
          }
        }
        return r
      }),
      e
    )
  })(),
  yv = H.createContext(void 0)
yv.Consumer
var Ou = {}
function iE(e, t, n) {
  var i = yd(e),
    r = e,
    o = !Mu(e),
    s = t.attrs,
    a = s === void 0 ? Ll : s,
    l = t.componentId,
    u =
      l === void 0
        ? (function (v, _) {
            var w = typeof v != "string" ? "sc" : hg(v)
            Ou[w] = (Ou[w] || 0) + 1
            var b = "".concat(w, "-").concat(PC("6.1.0" + w + Ou[w]))
            return _ ? "".concat(_, "-").concat(b) : b
          })(t.displayName, t.parentComponentId)
        : l,
    c = t.displayName
  c === void 0 &&
    (function (v) {
      return Mu(v) ? "styled.".concat(v) : "Styled(".concat(MC(v), ")")
    })(e)
  var f =
      t.displayName && t.componentId
        ? "".concat(hg(t.displayName), "-").concat(t.componentId)
        : t.componentId || u,
    d = i && r.attrs ? r.attrs.concat(a).filter(Boolean) : a,
    h = t.shouldForwardProp
  if (i && r.shouldForwardProp) {
    var m = r.shouldForwardProp
    if (t.shouldForwardProp) {
      var y = t.shouldForwardProp
      h = function (v, _) {
        return m(v, _) && y(v, _)
      }
    } else h = m
  }
  var x = new nE(n, f, i ? r.componentStyle : void 0)
  function p(v, _) {
    return (function (w, b, S) {
      var k = w.attrs,
        M = w.componentStyle,
        E = w.defaultProps,
        A = w.foldedComponentIds,
        L = w.styledComponentId,
        W = w.target,
        U = H.useContext(yv),
        F = _g(),
        N = w.shouldForwardProp || F.shouldForwardProp,
        $ = (function (We, Se, Xe) {
          for (
            var be,
              pt = et(et({}, Se), { className: void 0, theme: Xe }),
              Dl = 0;
            Dl < We.length;
            Dl += 1
          ) {
            var Wo = ur((be = We[Dl])) ? be(pt) : be
            for (var cn in Wo)
              pt[cn] =
                cn === "className"
                  ? ni(pt[cn], Wo[cn])
                  : cn === "style"
                  ? et(et({}, pt[cn]), Wo[cn])
                  : Wo[cn]
          }
          return (
            Se.className && (pt.className = ni(pt.className, Se.className)), pt
          )
        })(k, b, bC(b, U, E) || lr),
        P = $.as || W,
        T = {}
      for (var D in $)
        $[D] === void 0 ||
          D[0] === "$" ||
          D === "as" ||
          D === "theme" ||
          (D === "forwardedAs"
            ? (T.as = $.forwardedAs)
            : (N && !N(D, P)) || (T[D] = $[D]))
      var Q = (function (We, Se) {
          var Xe = _g(),
            be = We.generateAndInjectStyles(Se, Xe.styleSheet, Xe.stylis)
          return be
        })(M, $),
        G = ni(A, L)
      return (
        Q && (G += " " + Q),
        $.className && (G += " " + $.className),
        (T[Mu(P) && !ov.has(P) ? "class" : "className"] = G),
        (T.ref = S),
        R.createElement(P, T)
      )
    })(g, v, _)
  }
  var g = H.forwardRef(p)
  return (
    (g.attrs = d),
    (g.componentStyle = x),
    (g.shouldForwardProp = h),
    (g.foldedComponentIds = i
      ? ni(r.foldedComponentIds, r.styledComponentId)
      : ""),
    (g.styledComponentId = f),
    (g.target = i ? r.target : e),
    Object.defineProperty(g, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps
      },
      set: function (v) {
        this._foldedDefaultProps = i
          ? (function (_) {
              for (var w = [], b = 1; b < arguments.length; b++)
                w[b - 1] = arguments[b]
              for (var S = 0, k = w; S < k.length; S++) Wc(_, k[S], !0)
              return _
            })({}, r.defaultProps, v)
          : v
      },
    }),
    vd(g, function () {
      return ".".concat(g.styledComponentId)
    }),
    o &&
      cv(g, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    g
  )
}
function Sg(e, t) {
  for (var n = [e[0]], i = 0, r = t.length; i < r; i += 1)
    n.push(t[i], e[i + 1])
  return n
}
var bg = function (e) {
  return Object.assign(e, { isCss: !0 })
}
function rE(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
  if (ur(e) || Ro(e)) {
    var i = e
    return bg(ai(Sg(Ll, za([i], t, !0))))
  }
  var r = e
  return t.length === 0 && r.length === 1 && typeof r[0] == "string"
    ? ai(r)
    : bg(ai(Sg(r, t)))
}
function Vc(e, t, n) {
  if ((n === void 0 && (n = lr), !t)) throw jo(1, t)
  var i = function (r) {
    for (var o = [], s = 1; s < arguments.length; s++) o[s - 1] = arguments[s]
    return e(t, n, rE.apply(void 0, za([r], o, !1)))
  }
  return (
    (i.attrs = function (r) {
      return Vc(
        e,
        t,
        et(et({}, n), {
          attrs: Array.prototype.concat(n.attrs, r).filter(Boolean),
        }),
      )
    }),
    (i.withConfig = function (r) {
      return Vc(e, t, et(et({}, n), r))
    }),
    i
  )
}
var vv = function (e) {
    return Vc(iE, e)
  },
  Bo = vv
ov.forEach(function (e) {
  Bo[e] = vv(e)
})
const Tr = Bo.div`
  width: 400px;
  height: ${(e) => (e.showit ? "auto" : "0px")};
  margin: ${(e) => (e.showit ? "10px" : "0px")};
  padding: ${(e) => (e.showit ? "20px" : "0px")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.53);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);

  opacity: ${(e) => (e.showit ? "1" : "0")};
  visibility: ${(e) => (e.showit ? "visible" : "hidden")};
  transition: opacity 2s, visibility 2s;
`,
  Or = Bo.div`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
`,
  kg = Bo.div`
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
`,
  Cg = Bo.div`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`
function oE() {
  const e = U2(),
    t = Pt(Xw),
    n = Pt(Gw),
    i = Pt(Qw),
    r = Pt(qw),
    o = Pt(Zw),
    s = Pt(eS),
    a = Pt(Jw),
    l = Pt(tS),
    u = Pt(nS),
    c = Pt(iS),
    f = Pt(rS),
    d = { userId: t, bestModel: s },
    h = { chatGptApiKey: i, query: n },
    m = c.map((p) => p.value),
    x = {
      labels: c.map((p) => p.name),
      datasets: [
        {
          label: "# of Votes",
          data: m,
          backgroundColor: [
            "rgba(253, 181, 104, 0.7)",
            "rgba(54, 162, 235, 0.7)",
          ],
          borderWidth: 1,
        },
      ],
    }
  return (
    Pl.register(Br, x2, f2),
    z.jsxs(z.Fragment, {
      children: [
        z.jsxs("div", {
          className: Ae.webtitle,
          children: [
            z.jsx("h1", { children: "Compare IA" }),
            z.jsx("h2", { children: "Compare different IA engines" }),
          ],
        }),
        z.jsxs(Tr, {
          showit: !0,
          children: [
            z.jsx(Or, { children: "Introduce your ChatGpt API Key" }),
            z.jsx(kg, {
              children: z.jsx("a", {
                href: "https://www.maisieai.com/help/how-to-get-an-openai-api-key-for-chatgpt",
                children: "(i) How to get your API Key?",
              }),
            }),
            z.jsx(Cg, {
              children: z.jsx("input", {
                "data-testid": "api-key-input",
                className: Ae.inputbox,
                "aria-label": "Set ChatGPT API key",
                value: i,
                required: !0,
                onChange: (p) => e(Yw(p.target.value)),
              }),
            }),
          ],
        }),
        z.jsxs(Tr, {
          showit: !0,
          children: [
            z.jsx(Or, { children: "Make a question" }),
            z.jsx(kg, { children: "Introduce a question about anything" }),
            z.jsxs(Cg, {
              children: [
                z.jsx("div", {
                  className: Ae.row,
                  children: z.jsx("textarea", {
                    className: Ae.textbox,
                    value: n,
                    onChange: (p) => e(Kw(p.target.value)),
                  }),
                }),
                z.jsxs("div", {
                  className: Ae.row,
                  children: [
                    z.jsx("button", {
                      "data-testid": "ask-ia-button",
                      disabled: i === "",
                      className: Ae.button,
                      onClick: () => e(Ns(h)),
                      children: "Ask IAs",
                    }),
                    z.jsx("span", {
                      hidden: a === "idle",
                      children: "loading ...",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        z.jsxs(Tr, {
          showit: f > 0,
          children: [
            z.jsx(Or, { children: "Compare the results" }),
            z.jsxs("div", {
              className: Ae.columnrow,
              children: [
                z.jsxs("h3", {
                  children: [
                    "Chat GPT 3.5:",
                    z.jsx("span", {
                      className: Ae.minitext,
                      children: l ? ` (time: ${l}ms)` : "",
                    }),
                  ],
                }),
                z.jsx("span", { className: Ae.plaintext, children: r }),
              ],
            }),
            z.jsxs("div", {
              className: Ae.columnrow,
              children: [
                z.jsxs("h3", {
                  children: [
                    "Chat GPT 4:",
                    z.jsx("span", {
                      className: Ae.minitext,
                      children: u ? ` (time: ${u}ms)` : "",
                    }),
                  ],
                }),
                z.jsx("span", { className: Ae.plaintext, children: o }),
              ],
            }),
          ],
        }),
        z.jsxs(Tr, {
          showit: f > 0,
          children: [
            z.jsx(Or, { children: "Which one is better?" }),
            z.jsxs("div", {
              className: Ae.row,
              children: [
                z.jsxs("label", {
                  children: [
                    z.jsx("input", {
                      type: "radio",
                      className: Ae.radioButton,
                      value: "gpt-3.5-turbo",
                      checked: s === "gpt-3.5-turbo",
                      onChange: (p) => e(qh(p.target.value)),
                    }),
                    "gpt-3.5",
                  ],
                }),
                z.jsxs("label", {
                  children: [
                    z.jsx("input", {
                      type: "radio",
                      className: Ae.radioButton,
                      value: "gpt-4",
                      checked: s === "gpt-4",
                      onChange: (p) => e(qh(p.target.value)),
                    }),
                    "gpt-4",
                  ],
                }),
              ],
            }),
            z.jsx("div", {
              className: Ae.row,
              children: z.jsx("button", {
                disabled: s === "none",
                className: Ae.button,
                onClick: () => e($s(d)),
                children: "Send Review",
              }),
            }),
          ],
        }),
        z.jsxs(Tr, {
          showit: f > 1,
          children: [
            z.jsx(Or, { children: "Stats" }),
            "Historic of the reviews",
            z.jsx(V2, { data: x }),
          ],
        }),
      ],
    })
  )
}
function sE() {
  return z.jsxs("div", {
    className: "App",
    children: [z.jsx(oE, {}), z.jsx(Tc, {})],
  })
}
Au.createRoot(document.getElementById("root")).render(
  z.jsx(H.StrictMode, {
    children: z.jsx(D_, { store: sS, children: z.jsx(sE, {}) }),
  }),
)
//# sourceMappingURL=index-ec331f99.js.map
