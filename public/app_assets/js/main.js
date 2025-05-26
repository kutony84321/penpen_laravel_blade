var Sm = e => {
  throw TypeError(e)
};
var Yu = (e, t, n) => t.has(e) || Sm("Cannot " + n);
var M = (e, t, n) => (Yu(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
  ke = (e, t, n) => t.has(e) ? Sm("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
  he = (e, t, n, r) => (Yu(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
  wt = (e, t, n) => (Yu(e, t, "access private method"), n);
var nl = (e, t, n, r) => ({
  set _(s) {
    he(e, t, s, n)
  },
  get _() {
    return M(e, t, r)
  }
});

function tC(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const s in r)
        if (s !== "default" && !(s in e)) {
          const o = Object.getOwnPropertyDescriptor(r, s);
          o && Object.defineProperty(e, s, o.get ? o : {
            enumerable: !0,
            get: () => r[s]
          })
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
    value: "Module"
  }))
}(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver(s => {
    for (const o of s)
      if (o.type === "childList")
        for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function n(s) {
    const o = {};
    return s.integrity && (o.integrity = s.integrity), s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? o.credentials = "include" : s.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
  }

  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = n(s);
    fetch(s.href, o)
  }
})();

function oy(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var iy = {
    exports: {}
  },
  Gc = {},
  ay = {
    exports: {}
  },
  ye = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var za = Symbol.for("react.element"),
  nC = Symbol.for("react.portal"),
  rC = Symbol.for("react.fragment"),
  sC = Symbol.for("react.strict_mode"),
  oC = Symbol.for("react.profiler"),
  iC = Symbol.for("react.provider"),
  aC = Symbol.for("react.context"),
  lC = Symbol.for("react.forward_ref"),
  cC = Symbol.for("react.suspense"),
  uC = Symbol.for("react.memo"),
  dC = Symbol.for("react.lazy"),
  Em = Symbol.iterator;

function fC(e) {
  return e === null || typeof e != "object" ? null : (e = Em && e[Em] || e["@@iterator"], typeof e == "function" ? e : null)
}
var ly = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  cy = Object.assign,
  uy = {};

function di(e, t, n) {
  this.props = e, this.context = t, this.refs = uy, this.updater = n || ly
}
di.prototype.isReactComponent = {};
di.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState")
};
di.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function dy() {}
dy.prototype = di.prototype;

function gp(e, t, n) {
  this.props = e, this.context = t, this.refs = uy, this.updater = n || ly
}
var yp = gp.prototype = new dy;
yp.constructor = gp;
cy(yp, di.prototype);
yp.isPureReactComponent = !0;
var Cm = Array.isArray,
  fy = Object.prototype.hasOwnProperty,
  xp = {
    current: null
  },
  py = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };

function hy(e, t, n) {
  var r, s = {},
    o = null,
    i = null;
  if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) fy.call(t, r) && !py.hasOwnProperty(r) && (s[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) s.children = n;
  else if (1 < a) {
    for (var c = Array(a), u = 0; u < a; u++) c[u] = arguments[u + 2];
    s.children = c
  }
  if (e && e.defaultProps)
    for (r in a = e.defaultProps, a) s[r] === void 0 && (s[r] = a[r]);
  return {
    $$typeof: za,
    type: e,
    key: o,
    ref: i,
    props: s,
    _owner: xp.current
  }
}

function pC(e, t) {
  return {
    $$typeof: za,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  }
}

function wp(e) {
  return typeof e == "object" && e !== null && e.$$typeof === za
}

function hC(e) {
  var t = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + e.replace(/[=:]/g, function (n) {
    return t[n]
  })
}
var Nm = /\/+/g;

function Qu(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? hC("" + e.key) : t.toString(36)
}

function Ll(e, t, n, r, s) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (o) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case za:
        case nC:
          i = !0
      }
  }
  if (i) return i = e, s = s(i), e = r === "" ? "." + Qu(i, 0) : r, Cm(s) ? (n = "", e != null && (n = e.replace(Nm, "$&/") + "/"), Ll(s, t, n, "", function (u) {
    return u
  })) : s != null && (wp(s) && (s = pC(s, n + (!s.key || i && i.key === s.key ? "" : ("" + s.key).replace(Nm, "$&/") + "/") + e)), t.push(s)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Cm(e))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var c = r + Qu(o, a);
      i += Ll(o, t, n, c, s)
    } else if (c = fC(e), typeof c == "function")
      for (e = c.call(e), a = 0; !(o = e.next()).done;) o = o.value, c = r + Qu(o, a++), i += Ll(o, t, n, c, s);
    else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i
}

function rl(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return Ll(e, r, "", "", function (o) {
    return t.call(n, o, s++)
  }), r
}

function mC(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function (n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
    }, function (n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
    }), e._status === -1 && (e._status = 0, e._result = t)
  }
  if (e._status === 1) return e._result.default;
  throw e._result
}
var It = {
    current: null
  },
  Fl = {
    transition: null
  },
  vC = {
    ReactCurrentDispatcher: It,
    ReactCurrentBatchConfig: Fl,
    ReactCurrentOwner: xp
  };

function my() {
  throw Error("act(...) is not supported in production builds of React.")
}
ye.Children = {
  map: rl,
  forEach: function (e, t, n) {
    rl(e, function () {
      t.apply(this, arguments)
    }, n)
  },
  count: function (e) {
    var t = 0;
    return rl(e, function () {
      t++
    }), t
  },
  toArray: function (e) {
    return rl(e, function (t) {
      return t
    }) || []
  },
  only: function (e) {
    if (!wp(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e
  }
};
ye.Component = di;
ye.Fragment = rC;
ye.Profiler = oC;
ye.PureComponent = gp;
ye.StrictMode = sC;
ye.Suspense = cC;
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vC;
ye.act = my;
ye.cloneElement = function (e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = cy({}, e.props),
    s = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = xp.current), t.key !== void 0 && (s = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (c in t) fy.call(t, c) && !py.hasOwnProperty(c) && (r[c] = t[c] === void 0 && a !== void 0 ? a[c] : t[c])
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    a = Array(c);
    for (var u = 0; u < c; u++) a[u] = arguments[u + 2];
    r.children = a
  }
  return {
    $$typeof: za,
    type: e.type,
    key: s,
    ref: o,
    props: r,
    _owner: i
  }
};
ye.createContext = function (e) {
  return e = {
    $$typeof: aC,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null
  }, e.Provider = {
    $$typeof: iC,
    _context: e
  }, e.Consumer = e
};
ye.createElement = hy;
ye.createFactory = function (e) {
  var t = hy.bind(null, e);
  return t.type = e, t
};
ye.createRef = function () {
  return {
    current: null
  }
};
ye.forwardRef = function (e) {
  return {
    $$typeof: lC,
    render: e
  }
};
ye.isValidElement = wp;
ye.lazy = function (e) {
  return {
    $$typeof: dC,
    _payload: {
      _status: -1,
      _result: e
    },
    _init: mC
  }
};
ye.memo = function (e, t) {
  return {
    $$typeof: uC,
    type: e,
    compare: t === void 0 ? null : t
  }
};
ye.startTransition = function (e) {
  var t = Fl.transition;
  Fl.transition = {};
  try {
    e()
  } finally {
    Fl.transition = t
  }
};
ye.unstable_act = my;
ye.useCallback = function (e, t) {
  return It.current.useCallback(e, t)
};
ye.useContext = function (e) {
  return It.current.useContext(e)
};
ye.useDebugValue = function () {};
ye.useDeferredValue = function (e) {
  return It.current.useDeferredValue(e)
};
ye.useEffect = function (e, t) {
  return It.current.useEffect(e, t)
};
ye.useId = function () {
  return It.current.useId()
};
ye.useImperativeHandle = function (e, t, n) {
  return It.current.useImperativeHandle(e, t, n)
};
ye.useInsertionEffect = function (e, t) {
  return It.current.useInsertionEffect(e, t)
};
ye.useLayoutEffect = function (e, t) {
  return It.current.useLayoutEffect(e, t)
};
ye.useMemo = function (e, t) {
  return It.current.useMemo(e, t)
};
ye.useReducer = function (e, t, n) {
  return It.current.useReducer(e, t, n)
};
ye.useRef = function (e) {
  return It.current.useRef(e)
};
ye.useState = function (e) {
  return It.current.useState(e)
};
ye.useSyncExternalStore = function (e, t, n) {
  return It.current.useSyncExternalStore(e, t, n)
};
ye.useTransition = function () {
  return It.current.useTransition()
};
ye.version = "18.3.1";
ay.exports = ye;
var d = ay.exports;
const L = oy(d),
  vy = tC({
    __proto__: null,
    default: L
  }, [d]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gC = d,
  yC = Symbol.for("react.element"),
  xC = Symbol.for("react.fragment"),
  wC = Object.prototype.hasOwnProperty,
  bC = gC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  SC = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };

function gy(e, t, n) {
  var r, s = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) wC.call(t, r) && !SC.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: yC,
    type: e,
    key: o,
    ref: i,
    props: s,
    _owner: bC.current
  }
}
Gc.Fragment = xC;
Gc.jsx = gy;
Gc.jsxs = gy;
iy.exports = Gc;
var l = iy.exports,
  yy = {
    exports: {}
  },
  tn = {},
  xy = {
    exports: {}
  },
  wy = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (e) {
  function t(k, F) {
    var K = k.length;
    k.push(F);
    e: for (; 0 < K;) {
      var Z = K - 1 >>> 1,
        re = k[Z];
      if (0 < s(re, F)) k[Z] = F, k[K] = re, K = Z;
      else break e
    }
  }

  function n(k) {
    return k.length === 0 ? null : k[0]
  }

  function r(k) {
    if (k.length === 0) return null;
    var F = k[0],
      K = k.pop();
    if (K !== F) {
      k[0] = K;
      e: for (var Z = 0, re = k.length, de = re >>> 1; Z < de;) {
        var Ee = 2 * (Z + 1) - 1,
          nt = k[Ee],
          ge = Ee + 1,
          ie = k[ge];
        if (0 > s(nt, K)) ge < re && 0 > s(ie, nt) ? (k[Z] = ie, k[ge] = K, Z = ge) : (k[Z] = nt, k[Ee] = K, Z = Ee);
        else if (ge < re && 0 > s(ie, K)) k[Z] = ie, k[ge] = K, Z = ge;
        else break e
      }
    }
    return F
  }

  function s(k, F) {
    var K = k.sortIndex - F.sortIndex;
    return K !== 0 ? K : k.id - F.id
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now()
    }
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a
    }
  }
  var c = [],
    u = [],
    f = 1,
    p = null,
    h = 3,
    w = !1,
    x = !1,
    m = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

  function y(k) {
    for (var F = n(u); F !== null;) {
      if (F.callback === null) r(u);
      else if (F.startTime <= k) r(u), F.sortIndex = F.expirationTime, t(c, F);
      else break;
      F = n(u)
    }
  }

  function S(k) {
    if (m = !1, y(k), !x)
      if (n(c) !== null) x = !0, W(E);
      else {
        var F = n(u);
        F !== null && te(S, F.startTime - k)
      }
  }

  function E(k, F) {
    x = !1, m && (m = !1, g(j), j = -1), w = !0;
    var K = h;
    try {
      for (y(F), p = n(c); p !== null && (!(p.expirationTime > F) || k && !z());) {
        var Z = p.callback;
        if (typeof Z == "function") {
          p.callback = null, h = p.priorityLevel;
          var re = Z(p.expirationTime <= F);
          F = e.unstable_now(), typeof re == "function" ? p.callback = re : p === n(c) && r(c), y(F)
        } else r(c);
        p = n(c)
      }
      if (p !== null) var de = !0;
      else {
        var Ee = n(u);
        Ee !== null && te(S, Ee.startTime - F), de = !1
      }
      return de
    } finally {
      p = null, h = K, w = !1
    }
  }
  var _ = !1,
    C = null,
    j = -1,
    P = 5,
    O = -1;

  function z() {
    return !(e.unstable_now() - O < P)
  }

  function R() {
    if (C !== null) {
      var k = e.unstable_now();
      O = k;
      var F = !0;
      try {
        F = C(!0, k)
      } finally {
        F ? D() : (_ = !1, C = null)
      }
    } else _ = !1
  }
  var D;
  if (typeof v == "function") D = function () {
    v(R)
  };
  else if (typeof MessageChannel < "u") {
    var I = new MessageChannel,
      G = I.port2;
    I.port1.onmessage = R, D = function () {
      G.postMessage(null)
    }
  } else D = function () {
    b(R, 0)
  };

  function W(k) {
    C = k, _ || (_ = !0, D())
  }

  function te(k, F) {
    j = b(function () {
      k(e.unstable_now())
    }, F)
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (k) {
    k.callback = null
  }, e.unstable_continueExecution = function () {
    x || w || (x = !0, W(E))
  }, e.unstable_forceFrameRate = function (k) {
    0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < k ? Math.floor(1e3 / k) : 5
  }, e.unstable_getCurrentPriorityLevel = function () {
    return h
  }, e.unstable_getFirstCallbackNode = function () {
    return n(c)
  }, e.unstable_next = function (k) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var F = 3;
        break;
      default:
        F = h
    }
    var K = h;
    h = F;
    try {
      return k()
    } finally {
      h = K
    }
  }, e.unstable_pauseExecution = function () {}, e.unstable_requestPaint = function () {}, e.unstable_runWithPriority = function (k, F) {
    switch (k) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        k = 3
    }
    var K = h;
    h = k;
    try {
      return F()
    } finally {
      h = K
    }
  }, e.unstable_scheduleCallback = function (k, F, K) {
    var Z = e.unstable_now();
    switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? Z + K : Z) : K = Z, k) {
      case 1:
        var re = -1;
        break;
      case 2:
        re = 250;
        break;
      case 5:
        re = 1073741823;
        break;
      case 4:
        re = 1e4;
        break;
      default:
        re = 5e3
    }
    return re = K + re, k = {
      id: f++,
      callback: F,
      priorityLevel: k,
      startTime: K,
      expirationTime: re,
      sortIndex: -1
    }, K > Z ? (k.sortIndex = K, t(u, k), n(c) === null && k === n(u) && (m ? (g(j), j = -1) : m = !0, te(S, K - Z))) : (k.sortIndex = re, t(c, k), x || w || (x = !0, W(E))), k
  }, e.unstable_shouldYield = z, e.unstable_wrapCallback = function (k) {
    var F = h;
    return function () {
      var K = h;
      h = F;
      try {
        return k.apply(this, arguments)
      } finally {
        h = K
      }
    }
  }
})(wy);
xy.exports = wy;
var EC = xy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var CC = d,
  en = EC;

function $(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var by = new Set,
  qi = {};

function Ks(e, t) {
  Qo(e, t), Qo(e + "Capture", t)
}

function Qo(e, t) {
  for (qi[e] = t, e = 0; e < t.length; e++) by.add(t[e])
}
var pr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  Zd = Object.prototype.hasOwnProperty,
  NC = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  _m = {},
  jm = {};

function _C(e) {
  return Zd.call(jm, e) ? !0 : Zd.call(_m, e) ? !1 : NC.test(e) ? jm[e] = !0 : (_m[e] = !0, !1)
}

function jC(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1
  }
}

function kC(e, t, n, r) {
  if (t === null || typeof t > "u" || jC(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t
  }
  return !1
}

function Mt(e, t, n, r, s, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i
}
var yt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
  yt[e] = new Mt(e, 0, !1, e, null, !1, !1)
});
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"]
].forEach(function (e) {
  var t = e[0];
  yt[t] = new Mt(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  yt[e] = new Mt(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  yt[e] = new Mt(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
  yt[e] = new Mt(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  yt[e] = new Mt(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
  yt[e] = new Mt(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
  yt[e] = new Mt(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
  yt[e] = new Mt(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var bp = /[\-:]([a-z])/g;

function Sp(e) {
  return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
  var t = e.replace(bp, Sp);
  yt[t] = new Mt(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(bp, Sp);
  yt[t] = new Mt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(bp, Sp);
  yt[t] = new Mt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  yt[e] = new Mt(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
yt.xlinkHref = new Mt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  yt[e] = new Mt(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Ep(e, t, n, r) {
  var s = yt.hasOwnProperty(t) ? yt[t] : null;
  (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (kC(t, n, s, r) && (n = null), r || s === null ? _C(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, r = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Sr = CC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  sl = Symbol.for("react.element"),
  po = Symbol.for("react.portal"),
  ho = Symbol.for("react.fragment"),
  Cp = Symbol.for("react.strict_mode"),
  Gd = Symbol.for("react.profiler"),
  Sy = Symbol.for("react.provider"),
  Ey = Symbol.for("react.context"),
  Np = Symbol.for("react.forward_ref"),
  Kd = Symbol.for("react.suspense"),
  Yd = Symbol.for("react.suspense_list"),
  _p = Symbol.for("react.memo"),
  Dr = Symbol.for("react.lazy"),
  Cy = Symbol.for("react.offscreen"),
  km = Symbol.iterator;

function Si(e) {
  return e === null || typeof e != "object" ? null : (e = km && e[km] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Ue = Object.assign,
  Xu;

function Oi(e) {
  if (Xu === void 0) try {
    throw Error()
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Xu = t && t[1] || ""
  }
  return `
` + Xu + e
}
var qu = !1;

function Ju(e, t) {
  if (!e || qu) return "";
  qu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function () {
          throw Error()
        }, Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error()
          }
        }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var r = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          r = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        r = u
      }
      e()
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var s = u.stack.split(`
`), o = r.stack.split(`
`), i = s.length - 1, a = o.length - 1; 1 <= i && 0 <= a && s[i] !== o[a];) a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (s[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if (i--, a--, 0 > a || s[i] !== o[a]) {
                var c = `
` + s[i].replace(" at new ", " at ");
                return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c
              } while (1 <= i && 0 <= a);
          break
        }
    }
  } finally {
    qu = !1, Error.prepareStackTrace = n
  }
  return (e = e ? e.displayName || e.name : "") ? Oi(e) : ""
}

function TC(e) {
  switch (e.tag) {
    case 5:
      return Oi(e.type);
    case 16:
      return Oi("Lazy");
    case 13:
      return Oi("Suspense");
    case 19:
      return Oi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ju(e.type, !1), e;
    case 11:
      return e = Ju(e.type.render, !1), e;
    case 1:
      return e = Ju(e.type, !0), e;
    default:
      return ""
  }
}

function Qd(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ho:
      return "Fragment";
    case po:
      return "Portal";
    case Gd:
      return "Profiler";
    case Cp:
      return "StrictMode";
    case Kd:
      return "Suspense";
    case Yd:
      return "SuspenseList"
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Ey:
      return (e.displayName || "Context") + ".Consumer";
    case Sy:
      return (e._context.displayName || "Context") + ".Provider";
    case Np:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case _p:
      return t = e.displayName || null, t !== null ? t : Qd(e.type) || "Memo";
    case Dr:
      t = e._payload, e = e._init;
      try {
        return Qd(e(t))
      } catch {}
  }
  return null
}

function PC(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qd(t);
    case 8:
      return t === Cp ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t
  }
  return null
}

function os(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return ""
  }
}

function Ny(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function RC(e) {
  var t = Ny(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var s = n.get,
      o = n.set;
    return Object.defineProperty(e, t, {
      configurable: !0,
      get: function () {
        return s.call(this)
      },
      set: function (i) {
        r = "" + i, o.call(this, i)
      }
    }), Object.defineProperty(e, t, {
      enumerable: n.enumerable
    }), {
      getValue: function () {
        return r
      },
      setValue: function (i) {
        r = "" + i
      },
      stopTracking: function () {
        e._valueTracker = null, delete e[t]
      }
    }
  }
}

function ol(e) {
  e._valueTracker || (e._valueTracker = RC(e))
}

function _y(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return e && (r = Ny(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Jl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}

function Xd(e, t) {
  var n = t.checked;
  return Ue({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ? ? e._wrapperState.initialChecked
  })
}

function Tm(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  n = os(t.value != null ? t.value : n), e._wrapperState = {
    initialChecked: r,
    initialValue: n,
    controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
  }
}

function jy(e, t) {
  t = t.checked, t != null && Ep(e, "checked", t, !1)
}

function qd(e, t) {
  jy(e, t);
  var n = os(t.value),
    r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return
  }
  t.hasOwnProperty("value") ? Jd(e, t.type, n) : t.hasOwnProperty("defaultValue") && Jd(e, t.type, os(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Pm(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Jd(e, t, n) {
  (t !== "number" || Jl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Di = Array.isArray;

function ko(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++) s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && r && (e[n].defaultSelected = !0)
  } else {
    for (n = "" + os(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        e[s].selected = !0, r && (e[s].defaultSelected = !0);
        return
      }
      t !== null || e[s].disabled || (t = e[s])
    }
    t !== null && (t.selected = !0)
  }
}

function ef(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error($(91));
  return Ue({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue
  })
}

function Rm(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error($(92));
      if (Di(n)) {
        if (1 < n.length) throw Error($(93));
        n = n[0]
      }
      t = n
    }
    t == null && (t = ""), n = t
  }
  e._wrapperState = {
    initialValue: os(n)
  }
}

function ky(e, t) {
  var n = os(t.value),
    r = os(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Am(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Ty(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml"
  }
}

function tf(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Ty(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var il, Py = function (e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, s) {
    MSApp.execUnsafeLocalFunction(function () {
      return e(t, n, r, s)
    })
  } : e
}(function (e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (il = il || document.createElement("div"), il.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = il.firstChild; e.firstChild;) e.removeChild(e.firstChild);
    for (; t.firstChild;) e.appendChild(t.firstChild)
  }
});

function Ji(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return
    }
  }
  e.textContent = t
}
var Vi = {
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
    strokeWidth: !0
  },
  AC = ["Webkit", "ms", "Moz", "O"];
Object.keys(Vi).forEach(function (e) {
  AC.forEach(function (t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Vi[t] = Vi[e]
  })
});

function Ry(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Vi.hasOwnProperty(e) && Vi[e] ? ("" + t).trim() : t + "px"
}

function Ay(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = Ry(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : e[n] = s
    }
}
var OC = Ue({
  menuitem: !0
}, {
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
  wbr: !0
});

function nf(e, t) {
  if (t) {
    if (OC[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error($(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error($(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error($(61))
    }
    if (t.style != null && typeof t.style != "object") throw Error($(62))
  }
}

function rf(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0
  }
}
var sf = null;

function jp(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var of = null, To = null, Po = null;

function Om(e) {
  if (e = Wa(e)) {
    if (typeof of != "function") throw Error($(280));
    var t = e.stateNode;
    t && (t = qc(t), of (e.stateNode, e.type, t))
  }
}

function Oy(e) {
  To ? Po ? Po.push(e) : Po = [e] : To = e
}

function Dy() {
  if (To) {
    var e = To,
      t = Po;
    if (Po = To = null, Om(e), t)
      for (e = 0; e < t.length; e++) Om(t[e])
  }
}

function Iy(e, t) {
  return e(t)
}

function My() {}
var ed = !1;

function Ly(e, t, n) {
  if (ed) return e(t, n);
  ed = !0;
  try {
    return Iy(e, t, n)
  } finally {
    ed = !1, (To !== null || Po !== null) && (My(), Dy())
  }
}

function ea(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = qc(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error($(231, t, typeof n));
  return n
}
var af = !1;
if (pr) try {
  var Ei = {};
  Object.defineProperty(Ei, "passive", {
    get: function () {
      af = !0
    }
  }), window.addEventListener("test", Ei, Ei), window.removeEventListener("test", Ei, Ei)
} catch {
  af = !1
}

function DC(e, t, n, r, s, o, i, a, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u)
  } catch (f) {
    this.onError(f)
  }
}
var zi = !1,
  ec = null,
  tc = !1,
  lf = null,
  IC = {
    onError: function (e) {
      zi = !0, ec = e
    }
  };

function MC(e, t, n, r, s, o, i, a, c) {
  zi = !1, ec = null, DC.apply(IC, arguments)
}

function LC(e, t, n, r, s, o, i, a, c) {
  if (MC.apply(this, arguments), zi) {
    if (zi) {
      var u = ec;
      zi = !1, ec = null
    } else throw Error($(198));
    tc || (tc = !0, lf = u)
  }
}

function Ys(e) {
  var t = e,
    n = e;
  if (e.alternate)
    for (; t.return;) t = t.return;
  else {
    e = t;
    do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
  }
  return t.tag === 3 ? n : null
}

function Fy(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
  }
  return null
}

function Dm(e) {
  if (Ys(e) !== e) throw Error($(188))
}

function FC(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Ys(e), t === null) throw Error($(188));
    return t !== e ? null : e
  }
  for (var n = e, r = t;;) {
    var s = n.return;
    if (s === null) break;
    var o = s.alternate;
    if (o === null) {
      if (r = s.return, r !== null) {
        n = r;
        continue
      }
      break
    }
    if (s.child === o.child) {
      for (o = s.child; o;) {
        if (o === n) return Dm(s), e;
        if (o === r) return Dm(s), t;
        o = o.sibling
      }
      throw Error($(188))
    }
    if (n.return !== r.return) n = s, r = o;
    else {
      for (var i = !1, a = s.child; a;) {
        if (a === n) {
          i = !0, n = s, r = o;
          break
        }
        if (a === r) {
          i = !0, r = s, n = o;
          break
        }
        a = a.sibling
      }
      if (!i) {
        for (a = o.child; a;) {
          if (a === n) {
            i = !0, n = o, r = s;
            break
          }
          if (a === r) {
            i = !0, r = o, n = s;
            break
          }
          a = a.sibling
        }
        if (!i) throw Error($(189))
      }
    }
    if (n.alternate !== r) throw Error($(190))
  }
  if (n.tag !== 3) throw Error($(188));
  return n.stateNode.current === n ? e : t
}

function $y(e) {
  return e = FC(e), e !== null ? Vy(e) : null
}

function Vy(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null;) {
    var t = Vy(e);
    if (t !== null) return t;
    e = e.sibling
  }
  return null
}
var zy = en.unstable_scheduleCallback,
  Im = en.unstable_cancelCallback,
  $C = en.unstable_shouldYield,
  VC = en.unstable_requestPaint,
  Xe = en.unstable_now,
  zC = en.unstable_getCurrentPriorityLevel,
  kp = en.unstable_ImmediatePriority,
  By = en.unstable_UserBlockingPriority,
  nc = en.unstable_NormalPriority,
  BC = en.unstable_LowPriority,
  Uy = en.unstable_IdlePriority,
  Kc = null,
  Kn = null;

function UC(e) {
  if (Kn && typeof Kn.onCommitFiberRoot == "function") try {
    Kn.onCommitFiberRoot(Kc, e, void 0, (e.current.flags & 128) === 128)
  } catch {}
}
var Cn = Math.clz32 ? Math.clz32 : ZC,
  WC = Math.log,
  HC = Math.LN2;

function ZC(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (WC(e) / HC | 0) | 0
}
var al = 64,
  ll = 4194304;

function Ii(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e
  }
}

function rc(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~s;
    a !== 0 ? r = Ii(a) : (o &= i, o !== 0 && (r = Ii(o)))
  } else i = n & ~s, i !== 0 ? r = Ii(i) : o !== 0 && (r = Ii(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & s) && (s = r & -r, o = t & -t, s >= o || s === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Cn(t), s = 1 << n, r |= e[n], t &= ~s;
  return r
}

function GC(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1
  }
}

function KC(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
    var i = 31 - Cn(o),
      a = 1 << i,
      c = s[i];
    c === -1 ? (!(a & n) || a & r) && (s[i] = GC(a, t)) : c <= t && (e.expiredLanes |= a), o &= ~a
  }
}

function cf(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Wy() {
  var e = al;
  return al <<= 1, !(al & 4194240) && (al = 64), e
}

function td(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t
}

function Ba(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Cn(t), e[t] = n
}

function YC(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n;) {
    var s = 31 - Cn(n),
      o = 1 << s;
    t[s] = 0, r[s] = -1, e[s] = -1, n &= ~o
  }
}

function Tp(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n;) {
    var r = 31 - Cn(n),
      s = 1 << r;
    s & t | e[r] & t && (e[r] |= t), n &= ~s
  }
}
var Pe = 0;

function Hy(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Zy, Pp, Gy, Ky, Yy, uf = !1,
  cl = [],
  Qr = null,
  Xr = null,
  qr = null,
  ta = new Map,
  na = new Map,
  Lr = [],
  QC = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Mm(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Qr = null;
      break;
    case "dragenter":
    case "dragleave":
      Xr = null;
      break;
    case "mouseover":
    case "mouseout":
      qr = null;
      break;
    case "pointerover":
    case "pointerout":
      ta.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      na.delete(t.pointerId)
  }
}

function Ci(e, t, n, r, s, o) {
  return e === null || e.nativeEvent !== o ? (e = {
    blockedOn: t,
    domEventName: n,
    eventSystemFlags: r,
    nativeEvent: o,
    targetContainers: [s]
  }, t !== null && (t = Wa(t), t !== null && Pp(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e)
}

function XC(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return Qr = Ci(Qr, e, t, n, r, s), !0;
    case "dragenter":
      return Xr = Ci(Xr, e, t, n, r, s), !0;
    case "mouseover":
      return qr = Ci(qr, e, t, n, r, s), !0;
    case "pointerover":
      var o = s.pointerId;
      return ta.set(o, Ci(ta.get(o) || null, e, t, n, r, s)), !0;
    case "gotpointercapture":
      return o = s.pointerId, na.set(o, Ci(na.get(o) || null, e, t, n, r, s)), !0
  }
  return !1
}

function Qy(e) {
  var t = _s(e.target);
  if (t !== null) {
    var n = Ys(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Fy(n), t !== null) {
          e.blockedOn = t, Yy(e.priority, function () {
            Gy(n)
          });
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return
      }
    }
  }
  e.blockedOn = null
}

function $l(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length;) {
    var n = df(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      sf = r, n.target.dispatchEvent(r), sf = null
    } else return t = Wa(n), t !== null && Pp(t), e.blockedOn = n, !1;
    t.shift()
  }
  return !0
}

function Lm(e, t, n) {
  $l(e) && n.delete(t)
}

function qC() {
  uf = !1, Qr !== null && $l(Qr) && (Qr = null), Xr !== null && $l(Xr) && (Xr = null), qr !== null && $l(qr) && (qr = null), ta.forEach(Lm), na.forEach(Lm)
}

function Ni(e, t) {
  e.blockedOn === t && (e.blockedOn = null, uf || (uf = !0, en.unstable_scheduleCallback(en.unstable_NormalPriority, qC)))
}

function ra(e) {
  function t(s) {
    return Ni(s, e)
  }
  if (0 < cl.length) {
    Ni(cl[0], e);
    for (var n = 1; n < cl.length; n++) {
      var r = cl[n];
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (Qr !== null && Ni(Qr, e), Xr !== null && Ni(Xr, e), qr !== null && Ni(qr, e), ta.forEach(t), na.forEach(t), n = 0; n < Lr.length; n++) r = Lr[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Lr.length && (n = Lr[0], n.blockedOn === null);) Qy(n), n.blockedOn === null && Lr.shift()
}
var Ro = Sr.ReactCurrentBatchConfig,
  sc = !0;

function JC(e, t, n, r) {
  var s = Pe,
    o = Ro.transition;
  Ro.transition = null;
  try {
    Pe = 1, Rp(e, t, n, r)
  } finally {
    Pe = s, Ro.transition = o
  }
}

function eN(e, t, n, r) {
  var s = Pe,
    o = Ro.transition;
  Ro.transition = null;
  try {
    Pe = 4, Rp(e, t, n, r)
  } finally {
    Pe = s, Ro.transition = o
  }
}

function Rp(e, t, n, r) {
  if (sc) {
    var s = df(e, t, n, r);
    if (s === null) dd(e, t, r, oc, n), Mm(e, r);
    else if (XC(s, e, t, n, r)) r.stopPropagation();
    else if (Mm(e, r), t & 4 && -1 < QC.indexOf(e)) {
      for (; s !== null;) {
        var o = Wa(s);
        if (o !== null && Zy(o), o = df(e, t, n, r), o === null && dd(e, t, r, oc, n), o === s) break;
        s = o
      }
      s !== null && r.stopPropagation()
    } else dd(e, t, r, null, n)
  }
}
var oc = null;

function df(e, t, n, r) {
  if (oc = null, e = jp(r), e = _s(e), e !== null)
    if (t = Ys(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
    if (e = Fy(t), e !== null) return e;
    e = null
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null
  } else t !== e && (e = null);
  return oc = e, null
}

function Xy(e) {
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
      return 1;
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
      return 4;
    case "message":
      switch (zC()) {
        case kp:
          return 1;
        case By:
          return 4;
        case nc:
        case BC:
          return 16;
        case Uy:
          return 536870912;
        default:
          return 16
      }
      default:
        return 16
  }
}
var Gr = null,
  Ap = null,
  Vl = null;

function qy() {
  if (Vl) return Vl;
  var e, t = Ap,
    n = t.length,
    r, s = "value" in Gr ? Gr.value : Gr.textContent,
    o = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === s[o - r]; r++);
  return Vl = s.slice(e, 1 < r ? 1 - r : void 0)
}

function zl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function ul() {
  return !0
}

function Fm() {
  return !1
}

function nn(e) {
  function t(n, r, s, o, i) {
    this._reactName = n, this._targetInst = s, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ul : Fm, this.isPropagationStopped = Fm, this
  }
  return Ue(t.prototype, {
    preventDefault: function () {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ul)
    },
    stopPropagation: function () {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ul)
    },
    persist: function () {},
    isPersistent: ul
  }), t
}
var fi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  Op = nn(fi),
  Ua = Ue({}, fi, {
    view: 0,
    detail: 0
  }),
  tN = nn(Ua),
  nd, rd, _i, Yc = Ue({}, Ua, {
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
    getModifierState: Dp,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function (e) {
      return "movementX" in e ? e.movementX : (e !== _i && (_i && e.type === "mousemove" ? (nd = e.screenX - _i.screenX, rd = e.screenY - _i.screenY) : rd = nd = 0, _i = e), nd)
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : rd
    }
  }),
  $m = nn(Yc),
  nN = Ue({}, Yc, {
    dataTransfer: 0
  }),
  rN = nn(nN),
  sN = Ue({}, Ua, {
    relatedTarget: 0
  }),
  sd = nn(sN),
  oN = Ue({}, fi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  iN = nn(oN),
  aN = Ue({}, fi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData
    }
  }),
  lN = nn(aN),
  cN = Ue({}, fi, {
    data: 0
  }),
  Vm = nn(cN),
  uN = {
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
    MozPrintableKey: "Unidentified"
  },
  dN = {
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
    224: "Meta"
  },
  fN = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };

function pN(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = fN[e]) ? !!t[e] : !1
}

function Dp() {
  return pN
}
var hN = Ue({}, Ua, {
    key: function (e) {
      if (e.key) {
        var t = uN[e.key] || e.key;
        if (t !== "Unidentified") return t
      }
      return e.type === "keypress" ? (e = zl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? dN[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Dp,
    charCode: function (e) {
      return e.type === "keypress" ? zl(e) : 0
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === "keypress" ? zl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
  }),
  mN = nn(hN),
  vN = Ue({}, Yc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  zm = nn(vN),
  gN = Ue({}, Ua, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Dp
  }),
  yN = nn(gN),
  xN = Ue({}, fi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  wN = nn(xN),
  bN = Ue({}, Yc, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  SN = nn(bN),
  EN = [9, 13, 27, 32],
  Ip = pr && "CompositionEvent" in window,
  Bi = null;
pr && "documentMode" in document && (Bi = document.documentMode);
var CN = pr && "TextEvent" in window && !Bi,
  Jy = pr && (!Ip || Bi && 8 < Bi && 11 >= Bi),
  Bm = " ",
  Um = !1;

function ex(e, t) {
  switch (e) {
    case "keyup":
      return EN.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1
  }
}

function tx(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var mo = !1;

function NN(e, t) {
  switch (e) {
    case "compositionend":
      return tx(t);
    case "keypress":
      return t.which !== 32 ? null : (Um = !0, Bm);
    case "textInput":
      return e = t.data, e === Bm && Um ? null : e;
    default:
      return null
  }
}

function _N(e, t) {
  if (mo) return e === "compositionend" || !Ip && ex(e, t) ? (e = qy(), Vl = Ap = Gr = null, mo = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which)
      }
      return null;
    case "compositionend":
      return Jy && t.locale !== "ko" ? null : t.data;
    default:
      return null
  }
}
var jN = {
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
  week: !0
};

function Wm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!jN[e.type] : t === "textarea"
}

function nx(e, t, n, r) {
  Oy(r), t = ic(t, "onChange"), 0 < t.length && (n = new Op("onChange", "change", null, n, r), e.push({
    event: n,
    listeners: t
  }))
}
var Ui = null,
  sa = null;

function kN(e) {
  px(e, 0)
}

function Qc(e) {
  var t = yo(e);
  if (_y(t)) return e
}

function TN(e, t) {
  if (e === "change") return t
}
var rx = !1;
if (pr) {
  var od;
  if (pr) {
    var id = "oninput" in document;
    if (!id) {
      var Hm = document.createElement("div");
      Hm.setAttribute("oninput", "return;"), id = typeof Hm.oninput == "function"
    }
    od = id
  } else od = !1;
  rx = od && (!document.documentMode || 9 < document.documentMode)
}

function Zm() {
  Ui && (Ui.detachEvent("onpropertychange", sx), sa = Ui = null)
}

function sx(e) {
  if (e.propertyName === "value" && Qc(sa)) {
    var t = [];
    nx(t, sa, e, jp(e)), Ly(kN, t)
  }
}

function PN(e, t, n) {
  e === "focusin" ? (Zm(), Ui = t, sa = n, Ui.attachEvent("onpropertychange", sx)) : e === "focusout" && Zm()
}

function RN(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Qc(sa)
}

function AN(e, t) {
  if (e === "click") return Qc(t)
}

function ON(e, t) {
  if (e === "input" || e === "change") return Qc(t)
}

function DN(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var kn = typeof Object.is == "function" ? Object.is : DN;

function oa(e, t) {
  if (kn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!Zd.call(t, s) || !kn(e[s], t[s])) return !1
  }
  return !0
}

function Gm(e) {
  for (; e && e.firstChild;) e = e.firstChild;
  return e
}

function Km(e, t) {
  var n = Gm(e);
  e = 0;
  for (var r; n;) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return {
        node: n,
        offset: t - e
      };
      e = r
    }
    e: {
      for (; n;) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = Gm(n)
  }
}

function ox(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ox(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function ix() {
  for (var e = window, t = Jl(); t instanceof e.HTMLIFrameElement;) {
    try {
      var n = typeof t.contentWindow.location.href == "string"
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow;
    else break;
    t = Jl(e.document)
  }
  return t
}

function Mp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function IN(e) {
  var t = ix(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && ox(n.ownerDocument.documentElement, n)) {
    if (r !== null && Mp(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var s = n.textContent.length,
          o = Math.min(r.start, s);
        r = r.end === void 0 ? o : Math.min(r.end, s), !e.extend && o > r && (s = r, r = o, o = s), s = Km(n, o);
        var i = Km(n, r);
        s && i && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(s.node, s.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
      element: e,
      left: e.scrollLeft,
      top: e.scrollTop
    });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
  }
}
var MN = pr && "documentMode" in document && 11 >= document.documentMode,
  vo = null,
  ff = null,
  Wi = null,
  pf = !1;

function Ym(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  pf || vo == null || vo !== Jl(r) || (r = vo, "selectionStart" in r && Mp(r) ? r = {
    start: r.selectionStart,
    end: r.selectionEnd
  } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
    anchorNode: r.anchorNode,
    anchorOffset: r.anchorOffset,
    focusNode: r.focusNode,
    focusOffset: r.focusOffset
  }), Wi && oa(Wi, r) || (Wi = r, r = ic(ff, "onSelect"), 0 < r.length && (t = new Op("onSelect", "select", null, t, n), e.push({
    event: t,
    listeners: r
  }), t.target = vo)))
}

function dl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var go = {
    animationend: dl("Animation", "AnimationEnd"),
    animationiteration: dl("Animation", "AnimationIteration"),
    animationstart: dl("Animation", "AnimationStart"),
    transitionend: dl("Transition", "TransitionEnd")
  },
  ad = {},
  ax = {};
pr && (ax = document.createElement("div").style, "AnimationEvent" in window || (delete go.animationend.animation, delete go.animationiteration.animation, delete go.animationstart.animation), "TransitionEvent" in window || delete go.transitionend.transition);

function Xc(e) {
  if (ad[e]) return ad[e];
  if (!go[e]) return e;
  var t = go[e],
    n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in ax) return ad[e] = t[n];
  return e
}
var lx = Xc("animationend"),
  cx = Xc("animationiteration"),
  ux = Xc("animationstart"),
  dx = Xc("transitionend"),
  fx = new Map,
  Qm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function vs(e, t) {
  fx.set(e, t), Ks(t, [e])
}
for (var ld = 0; ld < Qm.length; ld++) {
  var cd = Qm[ld],
    LN = cd.toLowerCase(),
    FN = cd[0].toUpperCase() + cd.slice(1);
  vs(LN, "on" + FN)
}
vs(lx, "onAnimationEnd");
vs(cx, "onAnimationIteration");
vs(ux, "onAnimationStart");
vs("dblclick", "onDoubleClick");
vs("focusin", "onFocus");
vs("focusout", "onBlur");
vs(dx, "onTransitionEnd");
Qo("onMouseEnter", ["mouseout", "mouseover"]);
Qo("onMouseLeave", ["mouseout", "mouseover"]);
Qo("onPointerEnter", ["pointerout", "pointerover"]);
Qo("onPointerLeave", ["pointerout", "pointerover"]);
Ks("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ks("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ks("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ks("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ks("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ks("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Mi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
  $N = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mi));

function Xm(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, LC(r, t, void 0, e), e.currentTarget = null
}

function px(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            c = a.instance,
            u = a.currentTarget;
          if (a = a.listener, c !== o && s.isPropagationStopped()) break e;
          Xm(s, a, u), o = c
        } else
          for (i = 0; i < r.length; i++) {
            if (a = r[i], c = a.instance, u = a.currentTarget, a = a.listener, c !== o && s.isPropagationStopped()) break e;
            Xm(s, a, u), o = c
          }
    }
  }
  if (tc) throw e = lf, tc = !1, lf = null, e
}

function Le(e, t) {
  var n = t[yf];
  n === void 0 && (n = t[yf] = new Set);
  var r = e + "__bubble";
  n.has(r) || (hx(t, e, 2, !1), n.add(r))
}

function ud(e, t, n) {
  var r = 0;
  t && (r |= 4), hx(n, e, r, t)
}
var fl = "_reactListening" + Math.random().toString(36).slice(2);

function ia(e) {
  if (!e[fl]) {
    e[fl] = !0, by.forEach(function (n) {
      n !== "selectionchange" && ($N.has(n) || ud(n, !1, e), ud(n, !0, e))
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[fl] || (t[fl] = !0, ud("selectionchange", !1, t))
  }
}

function hx(e, t, n, r) {
  switch (Xy(t)) {
    case 1:
      var s = JC;
      break;
    case 4:
      s = eN;
      break;
    default:
      s = Rp
  }
  n = s.bind(null, t, n, e), s = void 0, !af || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), r ? s !== void 0 ? e.addEventListener(t, n, {
    capture: !0,
    passive: s
  }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, {
    passive: s
  }) : e.addEventListener(t, n, !1)
}

function dd(e, t, n, r, s) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var a = r.stateNode.containerInfo;
      if (a === s || a.nodeType === 8 && a.parentNode === s) break;
      if (i === 4)
        for (i = r.return; i !== null;) {
          var c = i.tag;
          if ((c === 3 || c === 4) && (c = i.stateNode.containerInfo, c === s || c.nodeType === 8 && c.parentNode === s)) return;
          i = i.return
        }
      for (; a !== null;) {
        if (i = _s(a), i === null) return;
        if (c = i.tag, c === 5 || c === 6) {
          r = o = i;
          continue e
        }
        a = a.parentNode
      }
    }
    r = r.return
  }
  Ly(function () {
    var u = o,
      f = jp(n),
      p = [];
    e: {
      var h = fx.get(e);
      if (h !== void 0) {
        var w = Op,
          x = e;
        switch (e) {
          case "keypress":
            if (zl(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = mN;
            break;
          case "focusin":
            x = "focus", w = sd;
            break;
          case "focusout":
            x = "blur", w = sd;
            break;
          case "beforeblur":
          case "afterblur":
            w = sd;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = $m;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = rN;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = yN;
            break;
          case lx:
          case cx:
          case ux:
            w = iN;
            break;
          case dx:
            w = wN;
            break;
          case "scroll":
            w = tN;
            break;
          case "wheel":
            w = SN;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = lN;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = zm
        }
        var m = (t & 4) !== 0,
          b = !m && e === "scroll",
          g = m ? h !== null ? h + "Capture" : null : h;
        m = [];
        for (var v = u, y; v !== null;) {
          y = v;
          var S = y.stateNode;
          if (y.tag === 5 && S !== null && (y = S, g !== null && (S = ea(v, g), S != null && m.push(aa(v, S, y)))), b) break;
          v = v.return
        }
        0 < m.length && (h = new w(h, x, null, n, f), p.push({
          event: h,
          listeners: m
        }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", h && n !== sf && (x = n.relatedTarget || n.fromElement) && (_s(x) || x[hr])) break e;
        if ((w || h) && (h = f.window === f ? f : (h = f.ownerDocument) ? h.defaultView || h.parentWindow : window, w ? (x = n.relatedTarget || n.toElement, w = u, x = x ? _s(x) : null, x !== null && (b = Ys(x), x !== b || x.tag !== 5 && x.tag !== 6) && (x = null)) : (w = null, x = u), w !== x)) {
          if (m = $m, S = "onMouseLeave", g = "onMouseEnter", v = "mouse", (e === "pointerout" || e === "pointerover") && (m = zm, S = "onPointerLeave", g = "onPointerEnter", v = "pointer"), b = w == null ? h : yo(w), y = x == null ? h : yo(x), h = new m(S, v + "leave", w, n, f), h.target = b, h.relatedTarget = y, S = null, _s(f) === u && (m = new m(g, v + "enter", x, n, f), m.target = y, m.relatedTarget = b, S = m), b = S, w && x) t: {
            for (m = w, g = x, v = 0, y = m; y; y = to(y)) v++;
            for (y = 0, S = g; S; S = to(S)) y++;
            for (; 0 < v - y;) m = to(m),
            v--;
            for (; 0 < y - v;) g = to(g),
            y--;
            for (; v--;) {
              if (m === g || g !== null && m === g.alternate) break t;
              m = to(m), g = to(g)
            }
            m = null
          }
          else m = null;
          w !== null && qm(p, h, w, m, !1), x !== null && b !== null && qm(p, b, x, m, !0)
        }
      }
      e: {
        if (h = u ? yo(u) : window, w = h.nodeName && h.nodeName.toLowerCase(), w === "select" || w === "input" && h.type === "file") var E = TN;
        else if (Wm(h))
          if (rx) E = ON;
          else {
            E = RN;
            var _ = PN
          }
        else(w = h.nodeName) && w.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (E = AN);
        if (E && (E = E(e, u))) {
          nx(p, E, n, f);
          break e
        }
        _ && _(e, h, u),
        e === "focusout" && (_ = h._wrapperState) && _.controlled && h.type === "number" && Jd(h, "number", h.value)
      }
      switch (_ = u ? yo(u) : window, e) {
        case "focusin":
          (Wm(_) || _.contentEditable === "true") && (vo = _, ff = u, Wi = null);
          break;
        case "focusout":
          Wi = ff = vo = null;
          break;
        case "mousedown":
          pf = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          pf = !1, Ym(p, n, f);
          break;
        case "selectionchange":
          if (MN) break;
        case "keydown":
        case "keyup":
          Ym(p, n, f)
      }
      var C;
      if (Ip) e: {
        switch (e) {
          case "compositionstart":
            var j = "onCompositionStart";
            break e;
          case "compositionend":
            j = "onCompositionEnd";
            break e;
          case "compositionupdate":
            j = "onCompositionUpdate";
            break e
        }
        j = void 0
      }
      else mo ? ex(e, n) && (j = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");j && (Jy && n.locale !== "ko" && (mo || j !== "onCompositionStart" ? j === "onCompositionEnd" && mo && (C = qy()) : (Gr = f, Ap = "value" in Gr ? Gr.value : Gr.textContent, mo = !0)), _ = ic(u, j), 0 < _.length && (j = new Vm(j, e, null, n, f), p.push({
        event: j,
        listeners: _
      }), C ? j.data = C : (C = tx(n), C !== null && (j.data = C)))),
      (C = CN ? NN(e, n) : _N(e, n)) && (u = ic(u, "onBeforeInput"), 0 < u.length && (f = new Vm("onBeforeInput", "beforeinput", null, n, f), p.push({
        event: f,
        listeners: u
      }), f.data = C))
    }
    px(p, t)
  })
}

function aa(e, t, n) {
  return {
    instance: e,
    listener: t,
    currentTarget: n
  }
}

function ic(e, t) {
  for (var n = t + "Capture", r = []; e !== null;) {
    var s = e,
      o = s.stateNode;
    s.tag === 5 && o !== null && (s = o, o = ea(e, n), o != null && r.unshift(aa(e, o, s)), o = ea(e, t), o != null && r.push(aa(e, o, s))), e = e.return
  }
  return r
}

function to(e) {
  if (e === null) return null;
  do e = e.return; while (e && e.tag !== 5);
  return e || null
}

function qm(e, t, n, r, s) {
  for (var o = t._reactName, i = []; n !== null && n !== r;) {
    var a = n,
      c = a.alternate,
      u = a.stateNode;
    if (c !== null && c === r) break;
    a.tag === 5 && u !== null && (a = u, s ? (c = ea(n, o), c != null && i.unshift(aa(n, c, a))) : s || (c = ea(n, o), c != null && i.push(aa(n, c, a)))), n = n.return
  }
  i.length !== 0 && e.push({
    event: t,
    listeners: i
  })
}
var VN = /\r\n?/g,
  zN = /\u0000|\uFFFD/g;

function Jm(e) {
  return (typeof e == "string" ? e : "" + e).replace(VN, `
`).replace(zN, "")
}

function pl(e, t, n) {
  if (t = Jm(t), Jm(e) !== t && n) throw Error($(425))
}

function ac() {}
var hf = null,
  mf = null;

function vf(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var gf = typeof setTimeout == "function" ? setTimeout : void 0,
  BN = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ev = typeof Promise == "function" ? Promise : void 0,
  UN = typeof queueMicrotask == "function" ? queueMicrotask : typeof ev < "u" ? function (e) {
    return ev.resolve(null).then(e).catch(WN)
  } : gf;

function WN(e) {
  setTimeout(function () {
    throw e
  })
}

function fd(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if (e.removeChild(n), s && s.nodeType === 8)
      if (n = s.data, n === "/$") {
        if (r === 0) {
          e.removeChild(s), ra(t);
          return
        }
        r--
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = s
  } while (n);
  ra(t)
}

function Jr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null
    }
  }
  return e
}

function tv(e) {
  e = e.previousSibling;
  for (var t = 0; e;) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--
      } else n === "/$" && t++
    }
    e = e.previousSibling
  }
  return null
}
var pi = Math.random().toString(36).slice(2),
  Zn = "__reactFiber$" + pi,
  la = "__reactProps$" + pi,
  hr = "__reactContainer$" + pi,
  yf = "__reactEvents$" + pi,
  HN = "__reactListeners$" + pi,
  ZN = "__reactHandles$" + pi;

function _s(e) {
  var t = e[Zn];
  if (t) return t;
  for (var n = e.parentNode; n;) {
    if (t = n[hr] || n[Zn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = tv(e); e !== null;) {
          if (n = e[Zn]) return n;
          e = tv(e)
        }
      return t
    }
    e = n, n = e.parentNode
  }
  return null
}

function Wa(e) {
  return e = e[Zn] || e[hr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function yo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error($(33))
}

function qc(e) {
  return e[la] || null
}
var xf = [],
  xo = -1;

function gs(e) {
  return {
    current: e
  }
}

function Fe(e) {
  0 > xo || (e.current = xf[xo], xf[xo] = null, xo--)
}

function Ae(e, t) {
  xo++, xf[xo] = e.current, e.current = t
}
var is = {},
  _t = gs(is),
  zt = gs(!1),
  Ls = is;

function Xo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return is;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    o;
  for (o in n) s[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s
}

function Bt(e) {
  return e = e.childContextTypes, e != null
}

function lc() {
  Fe(zt), Fe(_t)
}

function nv(e, t, n) {
  if (_t.current !== is) throw Error($(168));
  Ae(_t, t), Ae(zt, n)
}

function mx(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var s in r)
    if (!(s in t)) throw Error($(108, PC(e) || "Unknown", s));
  return Ue({}, n, r)
}

function cc(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || is, Ls = _t.current, Ae(_t, e), Ae(zt, zt.current), !0
}

function rv(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error($(169));
  n ? (e = mx(e, t, Ls), r.__reactInternalMemoizedMergedChildContext = e, Fe(zt), Fe(_t), Ae(_t, e)) : Fe(zt), Ae(zt, n)
}
var lr = null,
  Jc = !1,
  pd = !1;

function vx(e) {
  lr === null ? lr = [e] : lr.push(e)
}

function GN(e) {
  Jc = !0, vx(e)
}

function ys() {
  if (!pd && lr !== null) {
    pd = !0;
    var e = 0,
      t = Pe;
    try {
      var n = lr;
      for (Pe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0); while (r !== null)
      }
      lr = null, Jc = !1
    } catch (s) {
      throw lr !== null && (lr = lr.slice(e + 1)), zy(kp, ys), s
    } finally {
      Pe = t, pd = !1
    }
  }
  return null
}
var wo = [],
  bo = 0,
  uc = null,
  dc = 0,
  on = [],
  an = 0,
  Fs = null,
  cr = 1,
  ur = "";

function Cs(e, t) {
  wo[bo++] = dc, wo[bo++] = uc, uc = e, dc = t
}

function gx(e, t, n) {
  on[an++] = cr, on[an++] = ur, on[an++] = Fs, Fs = e;
  var r = cr;
  e = ur;
  var s = 32 - Cn(r) - 1;
  r &= ~(1 << s), n += 1;
  var o = 32 - Cn(t) + s;
  if (30 < o) {
    var i = s - s % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, s -= i, cr = 1 << 32 - Cn(t) + s | n << s | r, ur = o + e
  } else cr = 1 << o | n << s | r, ur = e
}

function Lp(e) {
  e.return !== null && (Cs(e, 1), gx(e, 1, 0))
}

function Fp(e) {
  for (; e === uc;) uc = wo[--bo], wo[bo] = null, dc = wo[--bo], wo[bo] = null;
  for (; e === Fs;) Fs = on[--an], on[an] = null, ur = on[--an], on[an] = null, cr = on[--an], on[an] = null
}
var Xt = null,
  Qt = null,
  $e = !1,
  bn = null;

function yx(e, t) {
  var n = un(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function sv(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Xt = e, Qt = Jr(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Xt = e, Qt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Fs !== null ? {
        id: cr,
        overflow: ur
      } : null, e.memoizedState = {
        dehydrated: t,
        treeContext: n,
        retryLane: 1073741824
      }, n = un(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Xt = e, Qt = null, !0) : !1;
    default:
      return !1
  }
}

function wf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function bf(e) {
  if ($e) {
    var t = Qt;
    if (t) {
      var n = t;
      if (!sv(e, t)) {
        if (wf(e)) throw Error($(418));
        t = Jr(n.nextSibling);
        var r = Xt;
        t && sv(e, t) ? yx(r, n) : (e.flags = e.flags & -4097 | 2, $e = !1, Xt = e)
      }
    } else {
      if (wf(e)) throw Error($(418));
      e.flags = e.flags & -4097 | 2, $e = !1, Xt = e
    }
  }
}

function ov(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
  Xt = e
}

function hl(e) {
  if (e !== Xt) return !1;
  if (!$e) return ov(e), $e = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !vf(e.type, e.memoizedProps)), t && (t = Qt)) {
    if (wf(e)) throw xx(), Error($(418));
    for (; t;) yx(e, t), t = Jr(t.nextSibling)
  }
  if (ov(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error($(317));
    e: {
      for (e = e.nextSibling, t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Qt = Jr(e.nextSibling);
              break e
            }
            t--
          } else n !== "$" && n !== "$!" && n !== "$?" || t++
        }
        e = e.nextSibling
      }
      Qt = null
    }
  } else Qt = Xt ? Jr(e.stateNode.nextSibling) : null;
  return !0
}

function xx() {
  for (var e = Qt; e;) e = Jr(e.nextSibling)
}

function qo() {
  Qt = Xt = null, $e = !1
}

function $p(e) {
  bn === null ? bn = [e] : bn.push(e)
}
var KN = Sr.ReactCurrentBatchConfig;

function ji(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error($(309));
        var r = n.stateNode
      }
      if (!r) throw Error($(147, e));
      var s = r,
        o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function (i) {
        var a = s.refs;
        i === null ? delete a[o] : a[o] = i
      }, t._stringRef = o, t)
    }
    if (typeof e != "string") throw Error($(284));
    if (!n._owner) throw Error($(290, e))
  }
  return e
}

function ml(e, t) {
  throw e = Object.prototype.toString.call(t), Error($(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function iv(e) {
  var t = e._init;
  return t(e._payload)
}

function wx(e) {
  function t(g, v) {
    if (e) {
      var y = g.deletions;
      y === null ? (g.deletions = [v], g.flags |= 16) : y.push(v)
    }
  }

  function n(g, v) {
    if (!e) return null;
    for (; v !== null;) t(g, v), v = v.sibling;
    return null
  }

  function r(g, v) {
    for (g = new Map; v !== null;) v.key !== null ? g.set(v.key, v) : g.set(v.index, v), v = v.sibling;
    return g
  }

  function s(g, v) {
    return g = rs(g, v), g.index = 0, g.sibling = null, g
  }

  function o(g, v, y) {
    return g.index = y, e ? (y = g.alternate, y !== null ? (y = y.index, y < v ? (g.flags |= 2, v) : y) : (g.flags |= 2, v)) : (g.flags |= 1048576, v)
  }

  function i(g) {
    return e && g.alternate === null && (g.flags |= 2), g
  }

  function a(g, v, y, S) {
    return v === null || v.tag !== 6 ? (v = wd(y, g.mode, S), v.return = g, v) : (v = s(v, y), v.return = g, v)
  }

  function c(g, v, y, S) {
    var E = y.type;
    return E === ho ? f(g, v, y.props.children, S, y.key) : v !== null && (v.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Dr && iv(E) === v.type) ? (S = s(v, y.props), S.ref = ji(g, v, y), S.return = g, S) : (S = Kl(y.type, y.key, y.props, null, g.mode, S), S.ref = ji(g, v, y), S.return = g, S)
  }

  function u(g, v, y, S) {
    return v === null || v.tag !== 4 || v.stateNode.containerInfo !== y.containerInfo || v.stateNode.implementation !== y.implementation ? (v = bd(y, g.mode, S), v.return = g, v) : (v = s(v, y.children || []), v.return = g, v)
  }

  function f(g, v, y, S, E) {
    return v === null || v.tag !== 7 ? (v = Ds(y, g.mode, S, E), v.return = g, v) : (v = s(v, y), v.return = g, v)
  }

  function p(g, v, y) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return v = wd("" + v, g.mode, y), v.return = g, v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case sl:
          return y = Kl(v.type, v.key, v.props, null, g.mode, y), y.ref = ji(g, null, v), y.return = g, y;
        case po:
          return v = bd(v, g.mode, y), v.return = g, v;
        case Dr:
          var S = v._init;
          return p(g, S(v._payload), y)
      }
      if (Di(v) || Si(v)) return v = Ds(v, g.mode, y, null), v.return = g, v;
      ml(g, v)
    }
    return null
  }

  function h(g, v, y, S) {
    var E = v !== null ? v.key : null;
    if (typeof y == "string" && y !== "" || typeof y == "number") return E !== null ? null : a(g, v, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case sl:
          return y.key === E ? c(g, v, y, S) : null;
        case po:
          return y.key === E ? u(g, v, y, S) : null;
        case Dr:
          return E = y._init, h(g, v, E(y._payload), S)
      }
      if (Di(y) || Si(y)) return E !== null ? null : f(g, v, y, S, null);
      ml(g, y)
    }
    return null
  }

  function w(g, v, y, S, E) {
    if (typeof S == "string" && S !== "" || typeof S == "number") return g = g.get(y) || null, a(v, g, "" + S, E);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case sl:
          return g = g.get(S.key === null ? y : S.key) || null, c(v, g, S, E);
        case po:
          return g = g.get(S.key === null ? y : S.key) || null, u(v, g, S, E);
        case Dr:
          var _ = S._init;
          return w(g, v, y, _(S._payload), E)
      }
      if (Di(S) || Si(S)) return g = g.get(y) || null, f(v, g, S, E, null);
      ml(v, S)
    }
    return null
  }

  function x(g, v, y, S) {
    for (var E = null, _ = null, C = v, j = v = 0, P = null; C !== null && j < y.length; j++) {
      C.index > j ? (P = C, C = null) : P = C.sibling;
      var O = h(g, C, y[j], S);
      if (O === null) {
        C === null && (C = P);
        break
      }
      e && C && O.alternate === null && t(g, C), v = o(O, v, j), _ === null ? E = O : _.sibling = O, _ = O, C = P
    }
    if (j === y.length) return n(g, C), $e && Cs(g, j), E;
    if (C === null) {
      for (; j < y.length; j++) C = p(g, y[j], S), C !== null && (v = o(C, v, j), _ === null ? E = C : _.sibling = C, _ = C);
      return $e && Cs(g, j), E
    }
    for (C = r(g, C); j < y.length; j++) P = w(C, g, j, y[j], S), P !== null && (e && P.alternate !== null && C.delete(P.key === null ? j : P.key), v = o(P, v, j), _ === null ? E = P : _.sibling = P, _ = P);
    return e && C.forEach(function (z) {
      return t(g, z)
    }), $e && Cs(g, j), E
  }

  function m(g, v, y, S) {
    var E = Si(y);
    if (typeof E != "function") throw Error($(150));
    if (y = E.call(y), y == null) throw Error($(151));
    for (var _ = E = null, C = v, j = v = 0, P = null, O = y.next(); C !== null && !O.done; j++, O = y.next()) {
      C.index > j ? (P = C, C = null) : P = C.sibling;
      var z = h(g, C, O.value, S);
      if (z === null) {
        C === null && (C = P);
        break
      }
      e && C && z.alternate === null && t(g, C), v = o(z, v, j), _ === null ? E = z : _.sibling = z, _ = z, C = P
    }
    if (O.done) return n(g, C), $e && Cs(g, j), E;
    if (C === null) {
      for (; !O.done; j++, O = y.next()) O = p(g, O.value, S), O !== null && (v = o(O, v, j), _ === null ? E = O : _.sibling = O, _ = O);
      return $e && Cs(g, j), E
    }
    for (C = r(g, C); !O.done; j++, O = y.next()) O = w(C, g, j, O.value, S), O !== null && (e && O.alternate !== null && C.delete(O.key === null ? j : O.key), v = o(O, v, j), _ === null ? E = O : _.sibling = O, _ = O);
    return e && C.forEach(function (R) {
      return t(g, R)
    }), $e && Cs(g, j), E
  }

  function b(g, v, y, S) {
    if (typeof y == "object" && y !== null && y.type === ho && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case sl:
          e: {
            for (var E = y.key, _ = v; _ !== null;) {
              if (_.key === E) {
                if (E = y.type, E === ho) {
                  if (_.tag === 7) {
                    n(g, _.sibling), v = s(_, y.props.children), v.return = g, g = v;
                    break e
                  }
                } else if (_.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Dr && iv(E) === _.type) {
                  n(g, _.sibling), v = s(_, y.props), v.ref = ji(g, _, y), v.return = g, g = v;
                  break e
                }
                n(g, _);
                break
              } else t(g, _);
              _ = _.sibling
            }
            y.type === ho ? (v = Ds(y.props.children, g.mode, S, y.key), v.return = g, g = v) : (S = Kl(y.type, y.key, y.props, null, g.mode, S), S.ref = ji(g, v, y), S.return = g, g = S)
          }
          return i(g);
        case po:
          e: {
            for (_ = y.key; v !== null;) {
              if (v.key === _)
                if (v.tag === 4 && v.stateNode.containerInfo === y.containerInfo && v.stateNode.implementation === y.implementation) {
                  n(g, v.sibling), v = s(v, y.children || []), v.return = g, g = v;
                  break e
                } else {
                  n(g, v);
                  break
                }
              else t(g, v);
              v = v.sibling
            }
            v = bd(y, g.mode, S),
            v.return = g,
            g = v
          }
          return i(g);
        case Dr:
          return _ = y._init, b(g, v, _(y._payload), S)
      }
      if (Di(y)) return x(g, v, y, S);
      if (Si(y)) return m(g, v, y, S);
      ml(g, y)
    }
    return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, v !== null && v.tag === 6 ? (n(g, v.sibling), v = s(v, y), v.return = g, g = v) : (n(g, v), v = wd(y, g.mode, S), v.return = g, g = v), i(g)) : n(g, v)
  }
  return b
}
var Jo = wx(!0),
  bx = wx(!1),
  fc = gs(null),
  pc = null,
  So = null,
  Vp = null;

function zp() {
  Vp = So = pc = null
}

function Bp(e) {
  var t = fc.current;
  Fe(fc), e._currentValue = t
}

function Sf(e, t, n) {
  for (; e !== null;) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return
  }
}

function Ao(e, t) {
  pc = e, Vp = So = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Vt = !0), e.firstContext = null)
}

function fn(e) {
  var t = e._currentValue;
  if (Vp !== e)
    if (e = {
        context: e,
        memoizedValue: t,
        next: null
      }, So === null) {
      if (pc === null) throw Error($(308));
      So = e, pc.dependencies = {
        lanes: 0,
        firstContext: e
      }
    } else So = So.next = e;
  return t
}
var js = null;

function Up(e) {
  js === null ? js = [e] : js.push(e)
}

function Sx(e, t, n, r) {
  var s = t.interleaved;
  return s === null ? (n.next = n, Up(t)) : (n.next = s.next, s.next = n), t.interleaved = n, mr(e, r)
}

function mr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null
}
var Ir = !1;

function Wp(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      interleaved: null,
      lanes: 0
    },
    effects: null
  }
}

function Ex(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
    baseState: e.baseState,
    firstBaseUpdate: e.firstBaseUpdate,
    lastBaseUpdate: e.lastBaseUpdate,
    shared: e.shared,
    effects: e.effects
  })
}

function fr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  }
}

function es(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, _e & 2) {
    var s = r.pending;
    return s === null ? t.next = t : (t.next = s.next, s.next = t), r.pending = t, mr(e, n)
  }
  return s = r.interleaved, s === null ? (t.next = t, Up(r)) : (t.next = s.next, s.next = t), r.interleaved = t, mr(e, n)
}

function Bl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Tp(e, n)
  }
}

function av(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var s = null,
      o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null
        };
        o === null ? s = o = i : o = o.next = i, n = n.next
      } while (n !== null);
      o === null ? s = o = t : o = o.next = t
    } else s = o = t;
    n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects
    }, e.updateQueue = n;
    return
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function hc(e, t, n, r) {
  var s = e.updateQueue;
  Ir = !1;
  var o = s.firstBaseUpdate,
    i = s.lastBaseUpdate,
    a = s.shared.pending;
  if (a !== null) {
    s.shared.pending = null;
    var c = a,
      u = c.next;
    c.next = null, i === null ? o = u : i.next = u, i = c;
    var f = e.alternate;
    f !== null && (f = f.updateQueue, a = f.lastBaseUpdate, a !== i && (a === null ? f.firstBaseUpdate = u : a.next = u, f.lastBaseUpdate = c))
  }
  if (o !== null) {
    var p = s.baseState;
    i = 0, f = u = c = null, a = o;
    do {
      var h = a.lane,
        w = a.eventTime;
      if ((r & h) === h) {
        f !== null && (f = f.next = {
          eventTime: w,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var x = e,
            m = a;
          switch (h = t, w = n, m.tag) {
            case 1:
              if (x = m.payload, typeof x == "function") {
                p = x.call(w, p, h);
                break e
              }
              p = x;
              break e;
            case 3:
              x.flags = x.flags & -65537 | 128;
            case 0:
              if (x = m.payload, h = typeof x == "function" ? x.call(w, p, h) : x, h == null) break e;
              p = Ue({}, p, h);
              break e;
            case 2:
              Ir = !0
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, h = s.effects, h === null ? s.effects = [a] : h.push(a))
      } else w = {
        eventTime: w,
        lane: h,
        tag: a.tag,
        payload: a.payload,
        callback: a.callback,
        next: null
      }, f === null ? (u = f = w, c = p) : f = f.next = w, i |= h;
      if (a = a.next, a === null) {
        if (a = s.shared.pending, a === null) break;
        h = a, a = h.next, h.next = null, s.lastBaseUpdate = h, s.shared.pending = null
      }
    } while (!0);
    if (f === null && (c = p), s.baseState = c, s.firstBaseUpdate = u, s.lastBaseUpdate = f, t = s.shared.interleaved, t !== null) {
      s = t;
      do i |= s.lane, s = s.next; while (s !== t)
    } else o === null && (s.shared.lanes = 0);
    Vs |= i, e.lanes = i, e.memoizedState = p
  }
}

function lv(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (r.callback = null, r = n, typeof s != "function") throw Error($(191, s));
        s.call(r)
      }
    }
}
var Ha = {},
  Yn = gs(Ha),
  ca = gs(Ha),
  ua = gs(Ha);

function ks(e) {
  if (e === Ha) throw Error($(174));
  return e
}

function Hp(e, t) {
  switch (Ae(ua, t), Ae(ca, e), Ae(Yn, Ha), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : tf(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = tf(t, e)
  }
  Fe(Yn), Ae(Yn, t)
}

function ei() {
  Fe(Yn), Fe(ca), Fe(ua)
}

function Cx(e) {
  ks(ua.current);
  var t = ks(Yn.current),
    n = tf(t, e.type);
  t !== n && (Ae(ca, e), Ae(Yn, n))
}

function Zp(e) {
  ca.current === e && (Fe(Yn), Fe(ca))
}
var ze = gs(0);

function mc(e) {
  for (var t = e; t !== null;) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue
    }
    if (t === e) break;
    for (; t.sibling === null;) {
      if (t.return === null || t.return === e) return null;
      t = t.return
    }
    t.sibling.return = t.return, t = t.sibling
  }
  return null
}
var hd = [];

function Gp() {
  for (var e = 0; e < hd.length; e++) hd[e]._workInProgressVersionPrimary = null;
  hd.length = 0
}
var Ul = Sr.ReactCurrentDispatcher,
  md = Sr.ReactCurrentBatchConfig,
  $s = 0,
  Be = null,
  ct = null,
  ft = null,
  vc = !1,
  Hi = !1,
  da = 0,
  YN = 0;

function bt() {
  throw Error($(321))
}

function Kp(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!kn(e[n], t[n])) return !1;
  return !0
}

function Yp(e, t, n, r, s, o) {
  if ($s = o, Be = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ul.current = e === null || e.memoizedState === null ? JN : e_, e = n(r, s), Hi) {
    o = 0;
    do {
      if (Hi = !1, da = 0, 25 <= o) throw Error($(301));
      o += 1, ft = ct = null, t.updateQueue = null, Ul.current = t_, e = n(r, s)
    } while (Hi)
  }
  if (Ul.current = gc, t = ct !== null && ct.next !== null, $s = 0, ft = ct = Be = null, vc = !1, t) throw Error($(300));
  return e
}

function Qp() {
  var e = da !== 0;
  return da = 0, e
}

function $n() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  return ft === null ? Be.memoizedState = ft = e : ft = ft.next = e, ft
}

function pn() {
  if (ct === null) {
    var e = Be.alternate;
    e = e !== null ? e.memoizedState : null
  } else e = ct.next;
  var t = ft === null ? Be.memoizedState : ft.next;
  if (t !== null) ft = t, ct = e;
  else {
    if (e === null) throw Error($(310));
    ct = e, e = {
      memoizedState: ct.memoizedState,
      baseState: ct.baseState,
      baseQueue: ct.baseQueue,
      queue: ct.queue,
      next: null
    }, ft === null ? Be.memoizedState = ft = e : ft = ft.next = e
  }
  return ft
}

function fa(e, t) {
  return typeof t == "function" ? t(e) : t
}

function vd(e) {
  var t = pn(),
    n = t.queue;
  if (n === null) throw Error($(311));
  n.lastRenderedReducer = e;
  var r = ct,
    s = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (s !== null) {
      var i = s.next;
      s.next = o.next, o.next = i
    }
    r.baseQueue = s = o, n.pending = null
  }
  if (s !== null) {
    o = s.next, r = r.baseState;
    var a = i = null,
      c = null,
      u = o;
    do {
      var f = u.lane;
      if (($s & f) === f) c !== null && (c = c.next = {
        lane: 0,
        action: u.action,
        hasEagerState: u.hasEagerState,
        eagerState: u.eagerState,
        next: null
      }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var p = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        c === null ? (a = c = p, i = r) : c = c.next = p, Be.lanes |= f, Vs |= f
      }
      u = u.next
    } while (u !== null && u !== o);
    c === null ? i = r : c.next = a, kn(r, t.memoizedState) || (Vt = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = c, n.lastRenderedState = r
  }
  if (e = n.interleaved, e !== null) {
    s = e;
    do o = s.lane, Be.lanes |= o, Vs |= o, s = s.next; while (s !== e)
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch]
}

function gd(e) {
  var t = pn(),
    n = t.queue;
  if (n === null) throw Error($(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    o = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var i = s = s.next;
    do o = e(o, i.action), i = i.next; while (i !== s);
    kn(o, t.memoizedState) || (Vt = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
  }
  return [o, r]
}

function Nx() {}

function _x(e, t) {
  var n = Be,
    r = pn(),
    s = t(),
    o = !kn(r.memoizedState, s);
  if (o && (r.memoizedState = s, Vt = !0), r = r.queue, Xp(Tx.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ft !== null && ft.memoizedState.tag & 1) {
    if (n.flags |= 2048, pa(9, kx.bind(null, n, r, s, t), void 0, null), pt === null) throw Error($(349));
    $s & 30 || jx(n, t, s)
  }
  return s
}

function jx(e, t, n) {
  e.flags |= 16384, e = {
    getSnapshot: t,
    value: n
  }, t = Be.updateQueue, t === null ? (t = {
    lastEffect: null,
    stores: null
  }, Be.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function kx(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Px(t) && Rx(e)
}

function Tx(e, t, n) {
  return n(function () {
    Px(t) && Rx(e)
  })
}

function Px(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !kn(e, n)
  } catch {
    return !0
  }
}

function Rx(e) {
  var t = mr(e, 1);
  t !== null && Nn(t, e, 1, -1)
}

function cv(e) {
  var t = $n();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
    pending: null,
    interleaved: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: fa,
    lastRenderedState: e
  }, t.queue = e, e = e.dispatch = qN.bind(null, Be, e), [t.memoizedState, e]
}

function pa(e, t, n, r) {
  return e = {
    tag: e,
    create: t,
    destroy: n,
    deps: r,
    next: null
  }, t = Be.updateQueue, t === null ? (t = {
    lastEffect: null,
    stores: null
  }, Be.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Ax() {
  return pn().memoizedState
}

function Wl(e, t, n, r) {
  var s = $n();
  Be.flags |= e, s.memoizedState = pa(1 | t, n, void 0, r === void 0 ? null : r)
}

function eu(e, t, n, r) {
  var s = pn();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ct !== null) {
    var i = ct.memoizedState;
    if (o = i.destroy, r !== null && Kp(r, i.deps)) {
      s.memoizedState = pa(t, n, o, r);
      return
    }
  }
  Be.flags |= e, s.memoizedState = pa(1 | t, n, o, r)
}

function uv(e, t) {
  return Wl(8390656, 8, e, t)
}

function Xp(e, t) {
  return eu(2048, 8, e, t)
}

function Ox(e, t) {
  return eu(4, 2, e, t)
}

function Dx(e, t) {
  return eu(4, 4, e, t)
}

function Ix(e, t) {
  if (typeof t == "function") return e = e(), t(e),
    function () {
      t(null)
    };
  if (t != null) return e = e(), t.current = e,
    function () {
      t.current = null
    }
}

function Mx(e, t, n) {
  return n = n != null ? n.concat([e]) : null, eu(4, 4, Ix.bind(null, t, e), n)
}

function qp() {}

function Lx(e, t) {
  var n = pn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Kp(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Fx(e, t) {
  var n = pn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Kp(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function $x(e, t, n) {
  return $s & 21 ? (kn(n, t) || (n = Wy(), Be.lanes |= n, Vs |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Vt = !0), e.memoizedState = n)
}

function QN(e, t) {
  var n = Pe;
  Pe = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = md.transition;
  md.transition = {};
  try {
    e(!1), t()
  } finally {
    Pe = n, md.transition = r
  }
}

function Vx() {
  return pn().memoizedState
}

function XN(e, t, n) {
  var r = ns(e);
  if (n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, zx(e)) Bx(t, n);
  else if (n = Sx(e, t, n, r), n !== null) {
    var s = Ot();
    Nn(n, e, r, s), Ux(n, t, r)
  }
}

function qN(e, t, n) {
  var r = ns(e),
    s = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
  if (zx(e)) Bx(t, s);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var i = t.lastRenderedState,
        a = o(i, n);
      if (s.hasEagerState = !0, s.eagerState = a, kn(a, i)) {
        var c = t.interleaved;
        c === null ? (s.next = s, Up(t)) : (s.next = c.next, c.next = s), t.interleaved = s;
        return
      }
    } catch {} finally {}
    n = Sx(e, t, s, r), n !== null && (s = Ot(), Nn(n, e, r, s), Ux(n, t, r))
  }
}

function zx(e) {
  var t = e.alternate;
  return e === Be || t !== null && t === Be
}

function Bx(e, t) {
  Hi = vc = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Ux(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Tp(e, n)
  }
}
var gc = {
    readContext: fn,
    useCallback: bt,
    useContext: bt,
    useEffect: bt,
    useImperativeHandle: bt,
    useInsertionEffect: bt,
    useLayoutEffect: bt,
    useMemo: bt,
    useReducer: bt,
    useRef: bt,
    useState: bt,
    useDebugValue: bt,
    useDeferredValue: bt,
    useTransition: bt,
    useMutableSource: bt,
    useSyncExternalStore: bt,
    useId: bt,
    unstable_isNewReconciler: !1
  },
  JN = {
    readContext: fn,
    useCallback: function (e, t) {
      return $n().memoizedState = [e, t === void 0 ? null : t], e
    },
    useContext: fn,
    useEffect: uv,
    useImperativeHandle: function (e, t, n) {
      return n = n != null ? n.concat([e]) : null, Wl(4194308, 4, Ix.bind(null, t, e), n)
    },
    useLayoutEffect: function (e, t) {
      return Wl(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return Wl(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = $n();
      return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
    },
    useReducer: function (e, t, n) {
      var r = $n();
      return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: t
      }, r.queue = e, e = e.dispatch = XN.bind(null, Be, e), [r.memoizedState, e]
    },
    useRef: function (e) {
      var t = $n();
      return e = {
        current: e
      }, t.memoizedState = e
    },
    useState: cv,
    useDebugValue: qp,
    useDeferredValue: function (e) {
      return $n().memoizedState = e
    },
    useTransition: function () {
      var e = cv(!1),
        t = e[0];
      return e = QN.bind(null, e[1]), $n().memoizedState = e, [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Be,
        s = $n();
      if ($e) {
        if (n === void 0) throw Error($(407));
        n = n()
      } else {
        if (n = t(), pt === null) throw Error($(349));
        $s & 30 || jx(r, t, n)
      }
      s.memoizedState = n;
      var o = {
        value: n,
        getSnapshot: t
      };
      return s.queue = o, uv(Tx.bind(null, r, o, e), [e]), r.flags |= 2048, pa(9, kx.bind(null, r, o, n, t), void 0, null), n
    },
    useId: function () {
      var e = $n(),
        t = pt.identifierPrefix;
      if ($e) {
        var n = ur,
          r = cr;
        n = (r & ~(1 << 32 - Cn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = da++, 0 < n && (t += "H" + n.toString(32)), t += ":"
      } else n = YN++, t = ":" + t + "r" + n.toString(32) + ":";
      return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
  },
  e_ = {
    readContext: fn,
    useCallback: Lx,
    useContext: fn,
    useEffect: Xp,
    useImperativeHandle: Mx,
    useInsertionEffect: Ox,
    useLayoutEffect: Dx,
    useMemo: Fx,
    useReducer: vd,
    useRef: Ax,
    useState: function () {
      return vd(fa)
    },
    useDebugValue: qp,
    useDeferredValue: function (e) {
      var t = pn();
      return $x(t, ct.memoizedState, e)
    },
    useTransition: function () {
      var e = vd(fa)[0],
        t = pn().memoizedState;
      return [e, t]
    },
    useMutableSource: Nx,
    useSyncExternalStore: _x,
    useId: Vx,
    unstable_isNewReconciler: !1
  },
  t_ = {
    readContext: fn,
    useCallback: Lx,
    useContext: fn,
    useEffect: Xp,
    useImperativeHandle: Mx,
    useInsertionEffect: Ox,
    useLayoutEffect: Dx,
    useMemo: Fx,
    useReducer: gd,
    useRef: Ax,
    useState: function () {
      return gd(fa)
    },
    useDebugValue: qp,
    useDeferredValue: function (e) {
      var t = pn();
      return ct === null ? t.memoizedState = e : $x(t, ct.memoizedState, e)
    },
    useTransition: function () {
      var e = gd(fa)[0],
        t = pn().memoizedState;
      return [e, t]
    },
    useMutableSource: Nx,
    useSyncExternalStore: _x,
    useId: Vx,
    unstable_isNewReconciler: !1
  };

function vn(e, t) {
  if (e && e.defaultProps) {
    t = Ue({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t
  }
  return t
}

function Ef(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Ue({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var tu = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ys(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ot(),
      s = ns(e),
      o = fr(r, s);
    o.payload = t, n != null && (o.callback = n), t = es(e, o, s), t !== null && (Nn(t, e, s, r), Bl(t, e, s))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ot(),
      s = ns(e),
      o = fr(r, s);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = es(e, o, s), t !== null && (Nn(t, e, s, r), Bl(t, e, s))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ot(),
      r = ns(e),
      s = fr(n, r);
    s.tag = 2, t != null && (s.callback = t), t = es(e, s, r), t !== null && (Nn(t, e, r, n), Bl(t, e, r))
  }
};

function dv(e, t, n, r, s, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !oa(n, r) || !oa(s, o) : !0
}

function Wx(e, t, n) {
  var r = !1,
    s = is,
    o = t.contextType;
  return typeof o == "object" && o !== null ? o = fn(o) : (s = Bt(t) ? Ls : _t.current, r = t.contextTypes, o = (r = r != null) ? Xo(e, s) : is), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = tu, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function fv(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && tu.enqueueReplaceState(t, t.state, null)
}

function Cf(e, t, n, r) {
  var s = e.stateNode;
  s.props = n, s.state = e.memoizedState, s.refs = {}, Wp(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? s.context = fn(o) : (o = Bt(t) ? Ls : _t.current, s.context = Xo(e, o)), s.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Ef(e, t, o, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && tu.enqueueReplaceState(s, s.state, null), hc(e, n, s, r), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308)
}

function ti(e, t) {
  try {
    var n = "",
      r = t;
    do n += TC(r), r = r.return; while (r);
    var s = n
  } catch (o) {
    s = `
Error generating stack: ` + o.message + `
` + o.stack
  }
  return {
    value: e,
    source: t,
    stack: s,
    digest: null
  }
}

function yd(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n ? ? null,
    digest: t ? ? null
  }
}

function Nf(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var n_ = typeof WeakMap == "function" ? WeakMap : Map;

function Hx(e, t, n) {
  n = fr(-1, n), n.tag = 3, n.payload = {
    element: null
  };
  var r = t.value;
  return n.callback = function () {
    xc || (xc = !0, If = r), Nf(e, t)
  }, n
}

function Zx(e, t, n) {
  n = fr(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    n.payload = function () {
      return r(s)
    }, n.callback = function () {
      Nf(e, t)
    }
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function () {
    Nf(e, t), typeof r != "function" && (ts === null ? ts = new Set([this]) : ts.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, {
      componentStack: i !== null ? i : ""
    })
  }), n
}

function pv(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new n_;
    var s = new Set;
    r.set(t, s)
  } else s = r.get(t), s === void 0 && (s = new Set, r.set(t, s));
  s.has(n) || (s.add(n), e = v_.bind(null, e, t, n), t.then(e, e))
}

function hv(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return
  } while (e !== null);
  return null
}

function mv(e, t, n, r, s) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = s, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = fr(-1, 1), t.tag = 2, es(n, t, 1))), n.lanes |= 1), e)
}
var r_ = Sr.ReactCurrentOwner,
  Vt = !1;

function Tt(e, t, n, r) {
  t.child = e === null ? bx(t, null, n, r) : Jo(t, e.child, n, r)
}

function vv(e, t, n, r, s) {
  n = n.render;
  var o = t.ref;
  return Ao(t, s), r = Yp(e, t, n, r, o, s), n = Qp(), e !== null && !Vt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, vr(e, t, s)) : ($e && n && Lp(t), t.flags |= 1, Tt(e, t, r, s), t.child)
}

function gv(e, t, n, r, s) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !ih(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Gx(e, t, o, r, s)) : (e = Kl(n.type, null, r, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e)
  }
  if (o = e.child, !(e.lanes & s)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : oa, n(i, r) && e.ref === t.ref) return vr(e, t, s)
  }
  return t.flags |= 1, e = rs(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function Gx(e, t, n, r, s) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (oa(o, r) && e.ref === t.ref)
      if (Vt = !1, t.pendingProps = r = o, (e.lanes & s) !== 0) e.flags & 131072 && (Vt = !0);
      else return t.lanes = e.lanes, vr(e, t, s)
  }
  return _f(e, t, n, r, s)
}

function Kx(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1)) t.memoizedState = {
      baseLanes: 0,
      cachePool: null,
      transitions: null
    }, Ae(Co, Kt), Kt |= n;
    else {
      if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
        baseLanes: e,
        cachePool: null,
        transitions: null
      }, t.updateQueue = null, Ae(Co, Kt), Kt |= e, null;
      t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, r = o !== null ? o.baseLanes : n, Ae(Co, Kt), Kt |= r
    }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Ae(Co, Kt), Kt |= r;
  return Tt(e, t, s, n), t.child
}

function Yx(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function _f(e, t, n, r, s) {
  var o = Bt(n) ? Ls : _t.current;
  return o = Xo(t, o), Ao(t, s), n = Yp(e, t, n, r, o, s), r = Qp(), e !== null && !Vt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, vr(e, t, s)) : ($e && r && Lp(t), t.flags |= 1, Tt(e, t, n, s), t.child)
}

function yv(e, t, n, r, s) {
  if (Bt(n)) {
    var o = !0;
    cc(t)
  } else o = !1;
  if (Ao(t, s), t.stateNode === null) Hl(e, t), Wx(t, n, r), Cf(t, n, r, s), r = !0;
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var c = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null ? u = fn(u) : (u = Bt(n) ? Ls : _t.current, u = Xo(t, u));
    var f = n.getDerivedStateFromProps,
      p = typeof f == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    p || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || c !== u) && fv(t, i, r, u), Ir = !1;
    var h = t.memoizedState;
    i.state = h, hc(t, r, i, s), c = t.memoizedState, a !== r || h !== c || zt.current || Ir ? (typeof f == "function" && (Ef(t, n, f, r), c = t.memoizedState), (a = Ir || dv(t, n, a, r, h, c, u)) ? (p || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), i.props = r, i.state = c, i.context = u, r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
  } else {
    i = t.stateNode, Ex(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : vn(t.type, a), i.props = u, p = t.pendingProps, h = i.context, c = n.contextType, typeof c == "object" && c !== null ? c = fn(c) : (c = Bt(n) ? Ls : _t.current, c = Xo(t, c));
    var w = n.getDerivedStateFromProps;
    (f = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== p || h !== c) && fv(t, i, r, c), Ir = !1, h = t.memoizedState, i.state = h, hc(t, r, i, s);
    var x = t.memoizedState;
    a !== p || h !== x || zt.current || Ir ? (typeof w == "function" && (Ef(t, n, w, r), x = t.memoizedState), (u = Ir || dv(t, n, u, r, h, x, c) || !1) ? (f || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, x, c), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, x, c)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), i.props = r, i.state = x, i.context = c, r = u) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1)
  }
  return jf(e, t, n, r, o, s)
}

function jf(e, t, n, r, s, o) {
  Yx(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return s && rv(t, n, !1), vr(e, t, o);
  r = t.stateNode, r_.current = t;
  var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Jo(t, e.child, null, o), t.child = Jo(t, null, a, o)) : Tt(e, t, a, o), t.memoizedState = r.state, s && rv(t, n, !0), t.child
}

function Qx(e) {
  var t = e.stateNode;
  t.pendingContext ? nv(e, t.pendingContext, t.pendingContext !== t.context) : t.context && nv(e, t.context, !1), Hp(e, t.containerInfo)
}

function xv(e, t, n, r, s) {
  return qo(), $p(s), t.flags |= 256, Tt(e, t, n, r), t.child
}
var kf = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0
};

function Tf(e) {
  return {
    baseLanes: e,
    cachePool: null,
    transitions: null
  }
}

function Xx(e, t, n) {
  var r = t.pendingProps,
    s = ze.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), Ae(ze, s & 1), e === null) return bf(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = {
    mode: "hidden",
    children: i
  }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = su(i, r, 0, null), e = Ds(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Tf(n), t.memoizedState = kf, e) : Jp(t, i));
  if (s = e.memoizedState, s !== null && (a = s.dehydrated, a !== null)) return s_(e, t, i, r, a, s, n);
  if (o) {
    o = r.fallback, i = t.mode, s = e.child, a = s.sibling;
    var c = {
      mode: "hidden",
      children: r.children
    };
    return !(i & 1) && t.child !== s ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = rs(s, c), r.subtreeFlags = s.subtreeFlags & 14680064), a !== null ? o = rs(a, o) : (o = Ds(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Tf(n) : {
      baseLanes: i.baseLanes | n,
      cachePool: null,
      transitions: i.transitions
    }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = kf, r
  }
  return o = e.child, e = o.sibling, r = rs(o, {
    mode: "visible",
    children: r.children
  }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Jp(e, t) {
  return t = su({
    mode: "visible",
    children: t
  }, e.mode, 0, null), t.return = e, e.child = t
}

function vl(e, t, n, r) {
  return r !== null && $p(r), Jo(t, e.child, null, n), e = Jp(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function s_(e, t, n, r, s, o, i) {
  if (n) return t.flags & 256 ? (t.flags &= -257, r = yd(Error($(422))), vl(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, s = t.mode, r = su({
    mode: "visible",
    children: r.children
  }, s, 0, null), o = Ds(o, s, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Jo(t, e.child, null, i), t.child.memoizedState = Tf(i), t.memoizedState = kf, o);
  if (!(t.mode & 1)) return vl(e, t, i, null);
  if (s.data === "$!") {
    if (r = s.nextSibling && s.nextSibling.dataset, r) var a = r.dgst;
    return r = a, o = Error($(419)), r = yd(o, r, void 0), vl(e, t, i, r)
  }
  if (a = (i & e.childLanes) !== 0, Vt || a) {
    if (r = pt, r !== null) {
      switch (i & -i) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
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
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0
      }
      s = s & (r.suspendedLanes | i) ? 0 : s, s !== 0 && s !== o.retryLane && (o.retryLane = s, mr(e, s), Nn(r, e, s, -1))
    }
    return oh(), r = yd(Error($(421))), vl(e, t, i, r)
  }
  return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = g_.bind(null, e), s._reactRetry = t, null) : (e = o.treeContext, Qt = Jr(s.nextSibling), Xt = t, $e = !0, bn = null, e !== null && (on[an++] = cr, on[an++] = ur, on[an++] = Fs, cr = e.id, ur = e.overflow, Fs = t), t = Jp(t, r.children), t.flags |= 4096, t)
}

function wv(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Sf(e.return, t, n)
}

function xd(e, t, n, r, s) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = {
    isBackwards: t,
    rendering: null,
    renderingStartTime: 0,
    last: r,
    tail: n,
    tailMode: s
  } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = s)
}

function qx(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    o = r.tail;
  if (Tt(e, t, r.children, n), r = ze.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
      if (e.tag === 13) e.memoizedState !== null && wv(e, n, t);
      else if (e.tag === 19) wv(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue
      }
      if (e === t) break e;
      for (; e.sibling === null;) {
        if (e.return === null || e.return === t) break e;
        e = e.return
      }
      e.sibling.return = e.return, e = e.sibling
    }
    r &= 1
  }
  if (Ae(ze, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (s) {
    case "forwards":
      for (n = t.child, s = null; n !== null;) e = n.alternate, e !== null && mc(e) === null && (s = n), n = n.sibling;
      n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), xd(t, !1, s, n, o);
      break;
    case "backwards":
      for (n = null, s = t.child, t.child = null; s !== null;) {
        if (e = s.alternate, e !== null && mc(e) === null) {
          t.child = s;
          break
        }
        e = s.sibling, s.sibling = n, n = s, s = e
      }
      xd(t, !0, n, null, o);
      break;
    case "together":
      xd(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null
  }
  return t.child
}

function Hl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function vr(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Vs |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error($(153));
  if (t.child !== null) {
    for (e = t.child, n = rs(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = rs(e, e.pendingProps), n.return = t;
    n.sibling = null
  }
  return t.child
}

function o_(e, t, n) {
  switch (t.tag) {
    case 3:
      Qx(t), qo();
      break;
    case 5:
      Cx(t);
      break;
    case 1:
      Bt(t.type) && cc(t);
      break;
    case 4:
      Hp(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      Ae(fc, r._currentValue), r._currentValue = s;
      break;
    case 13:
      if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (Ae(ze, ze.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Xx(e, t, n) : (Ae(ze, ze.current & 1), e = vr(e, t, n), e !== null ? e.sibling : null);
      Ae(ze, ze.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return qx(e, t, n);
        t.flags |= 128
      }
      if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Ae(ze, ze.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Kx(e, t, n)
  }
  return vr(e, t, n)
}
var Jx, Pf, e0, t0;
Jx = function (e, t) {
  for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue
    }
    if (n === t) break;
    for (; n.sibling === null;) {
      if (n.return === null || n.return === t) return;
      n = n.return
    }
    n.sibling.return = n.return, n = n.sibling
  }
};
Pf = function () {};
e0 = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    e = t.stateNode, ks(Yn.current);
    var o = null;
    switch (n) {
      case "input":
        s = Xd(e, s), r = Xd(e, r), o = [];
        break;
      case "select":
        s = Ue({}, s, {
          value: void 0
        }), r = Ue({}, r, {
          value: void 0
        }), o = [];
        break;
      case "textarea":
        s = ef(e, s), r = ef(e, r), o = [];
        break;
      default:
        typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ac)
    }
    nf(n, r);
    var i;
    n = null;
    for (u in s)
      if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
        if (u === "style") {
          var a = s[u];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
        } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (qi.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
    for (u in r) {
      var c = r[u];
      if (a = s != null ? s[u] : void 0, r.hasOwnProperty(u) && c !== a && (c != null || a != null))
        if (u === "style")
          if (a) {
            for (i in a) !a.hasOwnProperty(i) || c && c.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
            for (i in c) c.hasOwnProperty(i) && a[i] !== c[i] && (n || (n = {}), n[i] = c[i])
          } else n || (o || (o = []), o.push(u, n)), n = c;
      else u === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, a = a ? a.__html : void 0, c != null && a !== c && (o = o || []).push(u, c)) : u === "children" ? typeof c != "string" && typeof c != "number" || (o = o || []).push(u, "" + c) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (qi.hasOwnProperty(u) ? (c != null && u === "onScroll" && Le("scroll", e), o || a === c || (o = [])) : (o = o || []).push(u, c))
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4)
  }
};
t0 = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
};

function ki(e, t) {
  if (!$e) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
  }
}

function St(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var s = e.child; s !== null;) n |= s.lanes | s.childLanes, r |= s.subtreeFlags & 14680064, r |= s.flags & 14680064, s.return = e, s = s.sibling;
  else
    for (s = e.child; s !== null;) n |= s.lanes | s.childLanes, r |= s.subtreeFlags, r |= s.flags, s.return = e, s = s.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t
}

function i_(e, t, n) {
  var r = t.pendingProps;
  switch (Fp(t), t.tag) {
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
      return St(t), null;
    case 1:
      return Bt(t.type) && lc(), St(t), null;
    case 3:
      return r = t.stateNode, ei(), Fe(zt), Fe(_t), Gp(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (hl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, bn !== null && (Ff(bn), bn = null))), Pf(e, t), St(t), null;
    case 5:
      Zp(t);
      var s = ks(ua.current);
      if (n = t.type, e !== null && t.stateNode != null) e0(e, t, n, r, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error($(166));
          return St(t), null
        }
        if (e = ks(Yn.current), hl(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Zn] = t, r[la] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Le("cancel", r), Le("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Le("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < Mi.length; s++) Le(Mi[s], r);
              break;
            case "source":
              Le("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Le("error", r), Le("load", r);
              break;
            case "details":
              Le("toggle", r);
              break;
            case "input":
              Tm(r, o), Le("invalid", r);
              break;
            case "select":
              r._wrapperState = {
                wasMultiple: !!o.multiple
              }, Le("invalid", r);
              break;
            case "textarea":
              Rm(r, o), Le("invalid", r)
          }
          nf(n, o), s = null;
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && pl(r.textContent, a, e), s = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && pl(r.textContent, a, e), s = ["children", "" + a]) : qi.hasOwnProperty(i) && a != null && i === "onScroll" && Le("scroll", r)
            } switch (n) {
            case "input":
              ol(r), Pm(r, o, !0);
              break;
            case "textarea":
              ol(r), Am(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = ac)
          }
          r = s, t.updateQueue = r, r !== null && (t.flags |= 4)
        } else {
          i = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ty(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
            is: r.is
          }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Zn] = t, e[la] = r, Jx(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = rf(n, r), n) {
              case "dialog":
                Le("cancel", e), Le("close", e), s = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Le("load", e), s = r;
                break;
              case "video":
              case "audio":
                for (s = 0; s < Mi.length; s++) Le(Mi[s], e);
                s = r;
                break;
              case "source":
                Le("error", e), s = r;
                break;
              case "img":
              case "image":
              case "link":
                Le("error", e), Le("load", e), s = r;
                break;
              case "details":
                Le("toggle", e), s = r;
                break;
              case "input":
                Tm(e, r), s = Xd(e, r), Le("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                e._wrapperState = {
                  wasMultiple: !!r.multiple
                }, s = Ue({}, r, {
                  value: void 0
                }), Le("invalid", e);
                break;
              case "textarea":
                Rm(e, r), s = ef(e, r), Le("invalid", e);
                break;
              default:
                s = r
            }
            nf(n, s),
            a = s;
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var c = a[o];
                o === "style" ? Ay(e, c) : o === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && Py(e, c)) : o === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Ji(e, c) : typeof c == "number" && Ji(e, "" + c) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (qi.hasOwnProperty(o) ? c != null && o === "onScroll" && Le("scroll", e) : c != null && Ep(e, o, c, i))
              } switch (n) {
              case "input":
                ol(e), Pm(e, r, !1);
                break;
              case "textarea":
                ol(e), Am(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + os(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? ko(e, !!r.multiple, o, !1) : r.defaultValue != null && ko(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = ac)
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
      }
      return St(t), null;
    case 6:
      if (e && t.stateNode != null) t0(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error($(166));
        if (n = ks(ua.current), ks(Yn.current), hl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Zn] = t, (o = r.nodeValue !== n) && (e = Xt, e !== null)) switch (e.tag) {
            case 3:
              pl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && pl(r.nodeValue, n, (e.mode & 1) !== 0)
          }
          o && (t.flags |= 4)
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Zn] = t, t.stateNode = r
      }
      return St(t), null;
    case 13:
      if (Fe(ze), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if ($e && Qt !== null && t.mode & 1 && !(t.flags & 128)) xx(), qo(), t.flags |= 98560, o = !1;
        else if (o = hl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error($(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error($(317));
            o[Zn] = t
          } else qo(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          St(t), o = !1
        } else bn !== null && (Ff(bn), bn = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ze.current & 1 ? ut === 0 && (ut = 3) : oh())), t.updateQueue !== null && (t.flags |= 4), St(t), null);
    case 4:
      return ei(), Pf(e, t), e === null && ia(t.stateNode.containerInfo), St(t), null;
    case 10:
      return Bp(t.type._context), St(t), null;
    case 17:
      return Bt(t.type) && lc(), St(t), null;
    case 19:
      if (Fe(ze), o = t.memoizedState, o === null) return St(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
        if (r) ki(o, !1);
        else {
          if (ut !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null;) {
              if (i = mc(e), i !== null) {
                for (t.flags |= 128, ki(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : {
                  lanes: e.lanes,
                  firstContext: e.firstContext
                }), n = n.sibling;
                return Ae(ze, ze.current & 1 | 2), t.child
              }
              e = e.sibling
            }
          o.tail !== null && Xe() > ni && (t.flags |= 128, r = !0, ki(o, !1), t.lanes = 4194304)
        }
      else {
        if (!r)
          if (e = mc(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ki(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !$e) return St(t), null
          } else 2 * Xe() - o.renderingStartTime > ni && n !== 1073741824 && (t.flags |= 128, r = !0, ki(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i)
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Xe(), t.sibling = null, n = ze.current, Ae(ze, r ? n & 1 | 2 : n & 1), t) : (St(t), null);
    case 22:
    case 23:
      return sh(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Kt & 1073741824 && (St(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : St(t), null;
    case 24:
      return null;
    case 25:
      return null
  }
  throw Error($(156, t.tag))
}

function a_(e, t) {
  switch (Fp(t), t.tag) {
    case 1:
      return Bt(t.type) && lc(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return ei(), Fe(zt), Fe(_t), Gp(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Zp(t), null;
    case 13:
      if (Fe(ze), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error($(340));
        qo()
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Fe(ze), null;
    case 4:
      return ei(), null;
    case 10:
      return Bp(t.type._context), null;
    case 22:
    case 23:
      return sh(), null;
    case 24:
      return null;
    default:
      return null
  }
}
var gl = !1,
  Ct = !1,
  l_ = typeof WeakSet == "function" ? WeakSet : Set,
  J = null;

function Eo(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function") try {
      n(null)
    } catch (r) {
      Ge(e, t, r)
    } else n.current = null
}

function Rf(e, t, n) {
  try {
    n()
  } catch (r) {
    Ge(e, t, r)
  }
}
var bv = !1;

function c_(e, t) {
  if (hf = sc, e = ix(), Mp(e)) {
    if ("selectionStart" in e) var n = {
      start: e.selectionStart,
      end: e.selectionEnd
    };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var s = r.anchorOffset,
          o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType
        } catch {
          n = null;
          break e
        }
        var i = 0,
          a = -1,
          c = -1,
          u = 0,
          f = 0,
          p = e,
          h = null;
        t: for (;;) {
          for (var w; p !== n || s !== 0 && p.nodeType !== 3 || (a = i + s), p !== o || r !== 0 && p.nodeType !== 3 || (c = i + r), p.nodeType === 3 && (i += p.nodeValue.length), (w = p.firstChild) !== null;) h = p, p = w;
          for (;;) {
            if (p === e) break t;
            if (h === n && ++u === s && (a = i), h === o && ++f === r && (c = i), (w = p.nextSibling) !== null) break;
            p = h, h = p.parentNode
          }
          p = w
        }
        n = a === -1 || c === -1 ? null : {
          start: a,
          end: c
        }
      } else n = null
    }
    n = n || {
      start: 0,
      end: 0
    }
  } else n = null;
  for (mf = {
      focusedElem: e,
      selectionRange: n
    }, sc = !1, J = t; J !== null;)
    if (t = J, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, J = e;
    else
      for (; J !== null;) {
        t = J;
        try {
          var x = t.alternate;
          if (t.flags & 1024) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (x !== null) {
                var m = x.memoizedProps,
                  b = x.memoizedState,
                  g = t.stateNode,
                  v = g.getSnapshotBeforeUpdate(t.elementType === t.type ? m : vn(t.type, m), b);
                g.__reactInternalSnapshotBeforeUpdate = v
              }
              break;
            case 3:
              var y = t.stateNode.containerInfo;
              y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
              break;
            case 5:
            case 6:
            case 4:
            case 17:
              break;
            default:
              throw Error($(163))
          }
        } catch (S) {
          Ge(t, t.return, S)
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, J = e;
          break
        }
        J = t.return
      }
  return x = bv, bv = !1, x
}

function Zi(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var s = r = r.next;
    do {
      if ((s.tag & e) === e) {
        var o = s.destroy;
        s.destroy = void 0, o !== void 0 && Rf(t, n, o)
      }
      s = s.next
    } while (s !== r)
  }
}

function nu(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}

function Af(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n
    }
    typeof t == "function" ? t(e) : t.current = e
  }
}

function n0(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, n0(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Zn], delete t[la], delete t[yf], delete t[HN], delete t[ZN])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function r0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Sv(e) {
  e: for (;;) {
    for (; e.sibling === null;) {
      if (e.return === null || r0(e.return)) return null;
      e = e.return
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}

function Of(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ac));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Of(e, t, n), e = e.sibling; e !== null;) Of(e, t, n), e = e.sibling
}

function Df(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Df(e, t, n), e = e.sibling; e !== null;) Df(e, t, n), e = e.sibling
}
var mt = null,
  xn = !1;

function Tr(e, t, n) {
  for (n = n.child; n !== null;) s0(e, t, n), n = n.sibling
}

function s0(e, t, n) {
  if (Kn && typeof Kn.onCommitFiberUnmount == "function") try {
    Kn.onCommitFiberUnmount(Kc, n)
  } catch {}
  switch (n.tag) {
    case 5:
      Ct || Eo(n, t);
    case 6:
      var r = mt,
        s = xn;
      mt = null, Tr(e, t, n), mt = r, xn = s, mt !== null && (xn ? (e = mt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : mt.removeChild(n.stateNode));
      break;
    case 18:
      mt !== null && (xn ? (e = mt, n = n.stateNode, e.nodeType === 8 ? fd(e.parentNode, n) : e.nodeType === 1 && fd(e, n), ra(e)) : fd(mt, n.stateNode));
      break;
    case 4:
      r = mt, s = xn, mt = n.stateNode.containerInfo, xn = !0, Tr(e, t, n), mt = r, xn = s;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ct && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        s = r = r.next;
        do {
          var o = s,
            i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Rf(n, t, i), s = s.next
        } while (s !== r)
      }
      Tr(e, t, n);
      break;
    case 1:
      if (!Ct && (Eo(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
      } catch (a) {
        Ge(n, t, a)
      }
      Tr(e, t, n);
      break;
    case 21:
      Tr(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ct = (r = Ct) || n.memoizedState !== null, Tr(e, t, n), Ct = r) : Tr(e, t, n);
      break;
    default:
      Tr(e, t, n)
  }
}

function Ev(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new l_), t.forEach(function (r) {
      var s = y_.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(s, s))
    })
  }
}

function mn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var o = e,
          i = t,
          a = i;
        e: for (; a !== null;) {
          switch (a.tag) {
            case 5:
              mt = a.stateNode, xn = !1;
              break e;
            case 3:
              mt = a.stateNode.containerInfo, xn = !0;
              break e;
            case 4:
              mt = a.stateNode.containerInfo, xn = !0;
              break e
          }
          a = a.return
        }
        if (mt === null) throw Error($(160));
        s0(o, i, s), mt = null, xn = !1;
        var c = s.alternate;
        c !== null && (c.return = null), s.return = null
      } catch (u) {
        Ge(s, t, u)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;) o0(t, e), t = t.sibling
}

function o0(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (mn(t, e), Fn(e), r & 4) {
        try {
          Zi(3, e, e.return), nu(3, e)
        } catch (m) {
          Ge(e, e.return, m)
        }
        try {
          Zi(5, e, e.return)
        } catch (m) {
          Ge(e, e.return, m)
        }
      }
      break;
    case 1:
      mn(t, e), Fn(e), r & 512 && n !== null && Eo(n, n.return);
      break;
    case 5:
      if (mn(t, e), Fn(e), r & 512 && n !== null && Eo(n, n.return), e.flags & 32) {
        var s = e.stateNode;
        try {
          Ji(s, "")
        } catch (m) {
          Ge(e, e.return, m)
        }
      }
      if (r & 4 && (s = e.stateNode, s != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          a === "input" && o.type === "radio" && o.name != null && jy(s, o), rf(a, i);
          var u = rf(a, o);
          for (i = 0; i < c.length; i += 2) {
            var f = c[i],
              p = c[i + 1];
            f === "style" ? Ay(s, p) : f === "dangerouslySetInnerHTML" ? Py(s, p) : f === "children" ? Ji(s, p) : Ep(s, f, p, u)
          }
          switch (a) {
            case "input":
              qd(s, o);
              break;
            case "textarea":
              ky(s, o);
              break;
            case "select":
              var h = s._wrapperState.wasMultiple;
              s._wrapperState.wasMultiple = !!o.multiple;
              var w = o.value;
              w != null ? ko(s, !!o.multiple, w, !1) : h !== !!o.multiple && (o.defaultValue != null ? ko(s, !!o.multiple, o.defaultValue, !0) : ko(s, !!o.multiple, o.multiple ? [] : "", !1))
          }
          s[la] = o
        } catch (m) {
          Ge(e, e.return, m)
        }
      }
      break;
    case 6:
      if (mn(t, e), Fn(e), r & 4) {
        if (e.stateNode === null) throw Error($(162));
        s = e.stateNode, o = e.memoizedProps;
        try {
          s.nodeValue = o
        } catch (m) {
          Ge(e, e.return, m)
        }
      }
      break;
    case 3:
      if (mn(t, e), Fn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        ra(t.containerInfo)
      } catch (m) {
        Ge(e, e.return, m)
      }
      break;
    case 4:
      mn(t, e), Fn(e);
      break;
    case 13:
      mn(t, e), Fn(e), s = e.child, s.flags & 8192 && (o = s.memoizedState !== null, s.stateNode.isHidden = o, !o || s.alternate !== null && s.alternate.memoizedState !== null || (nh = Xe())), r & 4 && Ev(e);
      break;
    case 22:
      if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ct = (u = Ct) || f, mn(t, e), Ct = u) : mn(t, e), Fn(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !f && e.mode & 1)
          for (J = e, f = e.child; f !== null;) {
            for (p = J = f; J !== null;) {
              switch (h = J, w = h.child, h.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Zi(4, h, h.return);
                  break;
                case 1:
                  Eo(h, h.return);
                  var x = h.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    r = h, n = h.return;
                    try {
                      t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount()
                    } catch (m) {
                      Ge(r, n, m)
                    }
                  }
                  break;
                case 5:
                  Eo(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Nv(p);
                    continue
                  }
              }
              w !== null ? (w.return = h, J = w) : Nv(p)
            }
            f = f.sibling
          }
        e: for (f = null, p = e;;) {
          if (p.tag === 5) {
            if (f === null) {
              f = p;
              try {
                s = p.stateNode, u ? (o = s.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = p.stateNode, c = p.memoizedProps.style, i = c != null && c.hasOwnProperty("display") ? c.display : null, a.style.display = Ry("display", i))
              } catch (m) {
                Ge(e, e.return, m)
              }
            }
          } else if (p.tag === 6) {
            if (f === null) try {
              p.stateNode.nodeValue = u ? "" : p.memoizedProps
            } catch (m) {
              Ge(e, e.return, m)
            }
          } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
            p.child.return = p, p = p.child;
            continue
          }
          if (p === e) break e;
          for (; p.sibling === null;) {
            if (p.return === null || p.return === e) break e;
            f === p && (f = null), p = p.return
          }
          f === p && (f = null), p.sibling.return = p.return, p = p.sibling
        }
      }
      break;
    case 19:
      mn(t, e), Fn(e), r & 4 && Ev(e);
      break;
    case 21:
      break;
    default:
      mn(t, e), Fn(e)
  }
}

function Fn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null;) {
          if (r0(n)) {
            var r = n;
            break e
          }
          n = n.return
        }
        throw Error($(160))
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (Ji(s, ""), r.flags &= -33);
          var o = Sv(e);
          Df(e, o, s);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = Sv(e);
          Of(e, a, i);
          break;
        default:
          throw Error($(161))
      }
    }
    catch (c) {
      Ge(e, e.return, c)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}

function u_(e, t, n) {
  J = e, i0(e)
}

function i0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; J !== null;) {
    var s = J,
      o = s.child;
    if (s.tag === 22 && r) {
      var i = s.memoizedState !== null || gl;
      if (!i) {
        var a = s.alternate,
          c = a !== null && a.memoizedState !== null || Ct;
        a = gl;
        var u = Ct;
        if (gl = i, (Ct = c) && !u)
          for (J = s; J !== null;) i = J, c = i.child, i.tag === 22 && i.memoizedState !== null ? _v(s) : c !== null ? (c.return = i, J = c) : _v(s);
        for (; o !== null;) J = o, i0(o), o = o.sibling;
        J = s, gl = a, Ct = u
      }
      Cv(e)
    } else s.subtreeFlags & 8772 && o !== null ? (o.return = s, J = o) : Cv(e)
  }
}

function Cv(e) {
  for (; J !== null;) {
    var t = J;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ct || nu(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ct)
              if (n === null) r.componentDidMount();
              else {
                var s = t.elementType === t.type ? n.memoizedProps : vn(t.type, n.memoizedProps);
                r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
              } var o = t.updateQueue;
            o !== null && lv(t, o, r);
            break;
          case 3:
            var i = t.updateQueue;
            if (i !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode
              }
              lv(t, i, n)
            }
            break;
          case 5:
            var a = t.stateNode;
            if (n === null && t.flags & 4) {
              n = a;
              var c = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  c.autoFocus && n.focus();
                  break;
                case "img":
                  c.src && (n.src = c.src)
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var f = u.memoizedState;
                if (f !== null) {
                  var p = f.dehydrated;
                  p !== null && ra(p)
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error($(163))
        }
        Ct || t.flags & 512 && Af(t)
      } catch (h) {
        Ge(t, t.return, h)
      }
    }
    if (t === e) {
      J = null;
      break
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, J = n;
      break
    }
    J = t.return
  }
}

function Nv(e) {
  for (; J !== null;) {
    var t = J;
    if (t === e) {
      J = null;
      break
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, J = n;
      break
    }
    J = t.return
  }
}

function _v(e) {
  for (; J !== null;) {
    var t = J;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            nu(4, t)
          } catch (c) {
            Ge(t, n, c)
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount()
            } catch (c) {
              Ge(t, s, c)
            }
          }
          var o = t.return;
          try {
            Af(t)
          } catch (c) {
            Ge(t, o, c)
          }
          break;
        case 5:
          var i = t.return;
          try {
            Af(t)
          } catch (c) {
            Ge(t, i, c)
          }
      }
    } catch (c) {
      Ge(t, t.return, c)
    }
    if (t === e) {
      J = null;
      break
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, J = a;
      break
    }
    J = t.return
  }
}
var d_ = Math.ceil,
  yc = Sr.ReactCurrentDispatcher,
  eh = Sr.ReactCurrentOwner,
  dn = Sr.ReactCurrentBatchConfig,
  _e = 0,
  pt = null,
  st = null,
  gt = 0,
  Kt = 0,
  Co = gs(0),
  ut = 0,
  ha = null,
  Vs = 0,
  ru = 0,
  th = 0,
  Gi = null,
  $t = null,
  nh = 0,
  ni = 1 / 0,
  ir = null,
  xc = !1,
  If = null,
  ts = null,
  yl = !1,
  Kr = null,
  wc = 0,
  Ki = 0,
  Mf = null,
  Zl = -1,
  Gl = 0;

function Ot() {
  return _e & 6 ? Xe() : Zl !== -1 ? Zl : Zl = Xe()
}

function ns(e) {
  return e.mode & 1 ? _e & 2 && gt !== 0 ? gt & -gt : KN.transition !== null ? (Gl === 0 && (Gl = Wy()), Gl) : (e = Pe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Xy(e.type)), e) : 1
}

function Nn(e, t, n, r) {
  if (50 < Ki) throw Ki = 0, Mf = null, Error($(185));
  Ba(e, n, r), (!(_e & 2) || e !== pt) && (e === pt && (!(_e & 2) && (ru |= n), ut === 4 && Fr(e, gt)), Ut(e, r), n === 1 && _e === 0 && !(t.mode & 1) && (ni = Xe() + 500, Jc && ys()))
}

function Ut(e, t) {
  var n = e.callbackNode;
  KC(e, t);
  var r = rc(e, e === pt ? gt : 0);
  if (r === 0) n !== null && Im(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Im(n), t === 1) e.tag === 0 ? GN(jv.bind(null, e)) : vx(jv.bind(null, e)), UN(function () {
      !(_e & 6) && ys()
    }), n = null;
    else {
      switch (Hy(r)) {
        case 1:
          n = kp;
          break;
        case 4:
          n = By;
          break;
        case 16:
          n = nc;
          break;
        case 536870912:
          n = Uy;
          break;
        default:
          n = nc
      }
      n = h0(n, a0.bind(null, e))
    }
    e.callbackPriority = t, e.callbackNode = n
  }
}

function a0(e, t) {
  if (Zl = -1, Gl = 0, _e & 6) throw Error($(327));
  var n = e.callbackNode;
  if (Oo() && e.callbackNode !== n) return null;
  var r = rc(e, e === pt ? gt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = bc(e, r);
  else {
    t = r;
    var s = _e;
    _e |= 2;
    var o = c0();
    (pt !== e || gt !== t) && (ir = null, ni = Xe() + 500, Os(e, t));
    do try {
      h_();
      break
    } catch (a) {
      l0(e, a)
    }
    while (!0);
    zp(), yc.current = o, _e = s, st !== null ? t = 0 : (pt = null, gt = 0, t = ut)
  }
  if (t !== 0) {
    if (t === 2 && (s = cf(e), s !== 0 && (r = s, t = Lf(e, s))), t === 1) throw n = ha, Os(e, 0), Fr(e, r), Ut(e, Xe()), n;
    if (t === 6) Fr(e, r);
    else {
      if (s = e.current.alternate, !(r & 30) && !f_(s) && (t = bc(e, r), t === 2 && (o = cf(e), o !== 0 && (r = o, t = Lf(e, o))), t === 1)) throw n = ha, Os(e, 0), Fr(e, r), Ut(e, Xe()), n;
      switch (e.finishedWork = s, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error($(345));
        case 2:
          Ns(e, $t, ir);
          break;
        case 3:
          if (Fr(e, r), (r & 130023424) === r && (t = nh + 500 - Xe(), 10 < t)) {
            if (rc(e, 0) !== 0) break;
            if (s = e.suspendedLanes, (s & r) !== r) {
              Ot(), e.pingedLanes |= e.suspendedLanes & s;
              break
            }
            e.timeoutHandle = gf(Ns.bind(null, e, $t, ir), t);
            break
          }
          Ns(e, $t, ir);
          break;
        case 4:
          if (Fr(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, s = -1; 0 < r;) {
            var i = 31 - Cn(r);
            o = 1 << i, i = t[i], i > s && (s = i), r &= ~o
          }
          if (r = s, r = Xe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * d_(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = gf(Ns.bind(null, e, $t, ir), r);
            break
          }
          Ns(e, $t, ir);
          break;
        case 5:
          Ns(e, $t, ir);
          break;
        default:
          throw Error($(329))
      }
    }
  }
  return Ut(e, Xe()), e.callbackNode === n ? a0.bind(null, e) : null
}

function Lf(e, t) {
  var n = Gi;
  return e.current.memoizedState.isDehydrated && (Os(e, t).flags |= 256), e = bc(e, t), e !== 2 && (t = $t, $t = n, t !== null && Ff(t)), e
}

function Ff(e) {
  $t === null ? $t = e : $t.push.apply($t, e)
}

function f_(e) {
  for (var t = e;;) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            o = s.getSnapshot;
          s = s.value;
          try {
            if (!kn(o(), s)) return !1
          } catch {
            return !1
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return !0;
        t = t.return
      }
      t.sibling.return = t.return, t = t.sibling
    }
  }
  return !0
}

function Fr(e, t) {
  for (t &= ~th, t &= ~ru, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
    var n = 31 - Cn(t),
      r = 1 << n;
    e[n] = -1, t &= ~r
  }
}

function jv(e) {
  if (_e & 6) throw Error($(327));
  Oo();
  var t = rc(e, 0);
  if (!(t & 1)) return Ut(e, Xe()), null;
  var n = bc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = cf(e);
    r !== 0 && (t = r, n = Lf(e, r))
  }
  if (n === 1) throw n = ha, Os(e, 0), Fr(e, t), Ut(e, Xe()), n;
  if (n === 6) throw Error($(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ns(e, $t, ir), Ut(e, Xe()), null
}

function rh(e, t) {
  var n = _e;
  _e |= 1;
  try {
    return e(t)
  } finally {
    _e = n, _e === 0 && (ni = Xe() + 500, Jc && ys())
  }
}

function zs(e) {
  Kr !== null && Kr.tag === 0 && !(_e & 6) && Oo();
  var t = _e;
  _e |= 1;
  var n = dn.transition,
    r = Pe;
  try {
    if (dn.transition = null, Pe = 1, e) return e()
  } finally {
    Pe = r, dn.transition = n, _e = t, !(_e & 6) && ys()
  }
}

function sh() {
  Kt = Co.current, Fe(Co)
}

function Os(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, BN(n)), st !== null)
    for (n = st.return; n !== null;) {
      var r = n;
      switch (Fp(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && lc();
          break;
        case 3:
          ei(), Fe(zt), Fe(_t), Gp();
          break;
        case 5:
          Zp(r);
          break;
        case 4:
          ei();
          break;
        case 13:
          Fe(ze);
          break;
        case 19:
          Fe(ze);
          break;
        case 10:
          Bp(r.type._context);
          break;
        case 22:
        case 23:
          sh()
      }
      n = n.return
    }
  if (pt = e, st = e = rs(e.current, null), gt = Kt = t, ut = 0, ha = null, th = ru = Vs = 0, $t = Gi = null, js !== null) {
    for (t = 0; t < js.length; t++)
      if (n = js[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var s = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          o.next = s, r.next = i
        }
        n.pending = r
      } js = null
  }
  return e
}

function l0(e, t) {
  do {
    var n = st;
    try {
      if (zp(), Ul.current = gc, vc) {
        for (var r = Be.memoizedState; r !== null;) {
          var s = r.queue;
          s !== null && (s.pending = null), r = r.next
        }
        vc = !1
      }
      if ($s = 0, ft = ct = Be = null, Hi = !1, da = 0, eh.current = null, n === null || n.return === null) {
        ut = 1, ha = t, st = null;
        break
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          c = t;
        if (t = gt, a.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var u = c,
            f = a,
            p = f.tag;
          if (!(f.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var h = f.alternate;
            h ? (f.updateQueue = h.updateQueue, f.memoizedState = h.memoizedState, f.lanes = h.lanes) : (f.updateQueue = null, f.memoizedState = null)
          }
          var w = hv(i);
          if (w !== null) {
            w.flags &= -257, mv(w, i, a, o, t), w.mode & 1 && pv(o, u, t), t = w, c = u;
            var x = t.updateQueue;
            if (x === null) {
              var m = new Set;
              m.add(c), t.updateQueue = m
            } else x.add(c);
            break e
          } else {
            if (!(t & 1)) {
              pv(o, u, t), oh();
              break e
            }
            c = Error($(426))
          }
        } else if ($e && a.mode & 1) {
          var b = hv(i);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256), mv(b, i, a, o, t), $p(ti(c, a));
            break e
          }
        }
        o = c = ti(c, a),
        ut !== 4 && (ut = 2),
        Gi === null ? Gi = [o] : Gi.push(o),
        o = i;do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var g = Hx(o, c, t);
              av(o, g);
              break e;
            case 1:
              a = c;
              var v = o.type,
                y = o.stateNode;
              if (!(o.flags & 128) && (typeof v.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (ts === null || !ts.has(y)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var S = Zx(o, a, t);
                av(o, S);
                break e
              }
          }
          o = o.return
        } while (o !== null)
      }
      d0(n)
    } catch (E) {
      t = E, st === n && n !== null && (st = n = n.return);
      continue
    }
    break
  } while (!0)
}

function c0() {
  var e = yc.current;
  return yc.current = gc, e === null ? gc : e
}

function oh() {
  (ut === 0 || ut === 3 || ut === 2) && (ut = 4), pt === null || !(Vs & 268435455) && !(ru & 268435455) || Fr(pt, gt)
}

function bc(e, t) {
  var n = _e;
  _e |= 2;
  var r = c0();
  (pt !== e || gt !== t) && (ir = null, Os(e, t));
  do try {
    p_();
    break
  } catch (s) {
    l0(e, s)
  }
  while (!0);
  if (zp(), _e = n, yc.current = r, st !== null) throw Error($(261));
  return pt = null, gt = 0, ut
}

function p_() {
  for (; st !== null;) u0(st)
}

function h_() {
  for (; st !== null && !$C();) u0(st)
}

function u0(e) {
  var t = p0(e.alternate, e, Kt);
  e.memoizedProps = e.pendingProps, t === null ? d0(e) : st = t, eh.current = null
}

function d0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = a_(n, t), n !== null) {
        n.flags &= 32767, st = n;
        return
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ut = 6, st = null;
        return
      }
    } else if (n = i_(n, t, Kt), n !== null) {
      st = n;
      return
    }
    if (t = t.sibling, t !== null) {
      st = t;
      return
    }
    st = t = e
  } while (t !== null);
  ut === 0 && (ut = 5)
}

function Ns(e, t, n) {
  var r = Pe,
    s = dn.transition;
  try {
    dn.transition = null, Pe = 1, m_(e, t, n, r)
  } finally {
    dn.transition = s, Pe = r
  }
  return null
}

function m_(e, t, n, r) {
  do Oo(); while (Kr !== null);
  if (_e & 6) throw Error($(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error($(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (YC(e, o), e === pt && (st = pt = null, gt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || yl || (yl = !0, h0(nc, function () {
      return Oo(), null
    })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = dn.transition, dn.transition = null;
    var i = Pe;
    Pe = 1;
    var a = _e;
    _e |= 4, eh.current = null, c_(e, n), o0(n, e), IN(mf), sc = !!hf, mf = hf = null, e.current = n, u_(n), VC(), _e = a, Pe = i, dn.transition = o
  } else e.current = n;
  if (yl && (yl = !1, Kr = e, wc = s), o = e.pendingLanes, o === 0 && (ts = null), UC(n.stateNode), Ut(e, Xe()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++) s = t[n], r(s.value, {
      componentStack: s.stack,
      digest: s.digest
    });
  if (xc) throw xc = !1, e = If, If = null, e;
  return wc & 1 && e.tag !== 0 && Oo(), o = e.pendingLanes, o & 1 ? e === Mf ? Ki++ : (Ki = 0, Mf = e) : Ki = 0, ys(), null
}

function Oo() {
  if (Kr !== null) {
    var e = Hy(wc),
      t = dn.transition,
      n = Pe;
    try {
      if (dn.transition = null, Pe = 16 > e ? 16 : e, Kr === null) var r = !1;
      else {
        if (e = Kr, Kr = null, wc = 0, _e & 6) throw Error($(331));
        var s = _e;
        for (_e |= 4, J = e.current; J !== null;) {
          var o = J,
            i = o.child;
          if (J.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var c = 0; c < a.length; c++) {
                var u = a[c];
                for (J = u; J !== null;) {
                  var f = J;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Zi(8, f, o)
                  }
                  var p = f.child;
                  if (p !== null) p.return = f, J = p;
                  else
                    for (; J !== null;) {
                      f = J;
                      var h = f.sibling,
                        w = f.return;
                      if (n0(f), f === u) {
                        J = null;
                        break
                      }
                      if (h !== null) {
                        h.return = w, J = h;
                        break
                      }
                      J = w
                    }
                }
              }
              var x = o.alternate;
              if (x !== null) {
                var m = x.child;
                if (m !== null) {
                  x.child = null;
                  do {
                    var b = m.sibling;
                    m.sibling = null, m = b
                  } while (m !== null)
                }
              }
              J = o
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, J = i;
          else e: for (; J !== null;) {
            if (o = J, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Zi(9, o, o.return)
            }
            var g = o.sibling;
            if (g !== null) {
              g.return = o.return, J = g;
              break e
            }
            J = o.return
          }
        }
        var v = e.current;
        for (J = v; J !== null;) {
          i = J;
          var y = i.child;
          if (i.subtreeFlags & 2064 && y !== null) y.return = i, J = y;
          else e: for (i = v; J !== null;) {
            if (a = J, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  nu(9, a)
              }
            } catch (E) {
              Ge(a, a.return, E)
            }
            if (a === i) {
              J = null;
              break e
            }
            var S = a.sibling;
            if (S !== null) {
              S.return = a.return, J = S;
              break e
            }
            J = a.return
          }
        }
        if (_e = s, ys(), Kn && typeof Kn.onPostCommitFiberRoot == "function") try {
          Kn.onPostCommitFiberRoot(Kc, e)
        } catch {}
        r = !0
      }
      return r
    } finally {
      Pe = n, dn.transition = t
    }
  }
  return !1
}

function kv(e, t, n) {
  t = ti(n, t), t = Hx(e, t, 1), e = es(e, t, 1), t = Ot(), e !== null && (Ba(e, 1, t), Ut(e, t))
}

function Ge(e, t, n) {
  if (e.tag === 3) kv(e, e, n);
  else
    for (; t !== null;) {
      if (t.tag === 3) {
        kv(t, e, n);
        break
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ts === null || !ts.has(r))) {
          e = ti(n, e), e = Zx(t, e, 1), t = es(t, e, 1), e = Ot(), t !== null && (Ba(t, 1, e), Ut(t, e));
          break
        }
      }
      t = t.return
    }
}

function v_(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ot(), e.pingedLanes |= e.suspendedLanes & n, pt === e && (gt & n) === n && (ut === 4 || ut === 3 && (gt & 130023424) === gt && 500 > Xe() - nh ? Os(e, 0) : th |= n), Ut(e, t)
}

function f0(e, t) {
  t === 0 && (e.mode & 1 ? (t = ll, ll <<= 1, !(ll & 130023424) && (ll = 4194304)) : t = 1);
  var n = Ot();
  e = mr(e, t), e !== null && (Ba(e, t, n), Ut(e, n))
}

function g_(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), f0(e, n)
}

function y_(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error($(314))
  }
  r !== null && r.delete(t), f0(e, n)
}
var p0;
p0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || zt.current) Vt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return Vt = !1, o_(e, t, n);
      Vt = !!(e.flags & 131072)
    }
  else Vt = !1, $e && t.flags & 1048576 && gx(t, dc, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Hl(e, t), e = t.pendingProps;
      var s = Xo(t, _t.current);
      Ao(t, n), s = Yp(null, t, r, e, s, n);
      var o = Qp();
      return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Bt(r) ? (o = !0, cc(t)) : o = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, Wp(t), s.updater = tu, t.stateNode = s, s._reactInternals = t, Cf(t, r, e, n), t = jf(null, t, r, !0, o, n)) : (t.tag = 0, $e && o && Lp(t), Tt(null, t, s, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Hl(e, t), e = t.pendingProps, s = r._init, r = s(r._payload), t.type = r, s = t.tag = w_(r), e = vn(r, e), s) {
          case 0:
            t = _f(null, t, r, e, n);
            break e;
          case 1:
            t = yv(null, t, r, e, n);
            break e;
          case 11:
            t = vv(null, t, r, e, n);
            break e;
          case 14:
            t = gv(null, t, r, vn(r.type, e), n);
            break e
        }
        throw Error($(306, r, ""))
      }
      return t;
    case 0:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : vn(r, s), _f(e, t, r, s, n);
    case 1:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : vn(r, s), yv(e, t, r, s, n);
    case 3:
      e: {
        if (Qx(t), e === null) throw Error($(387));r = t.pendingProps,
        o = t.memoizedState,
        s = o.element,
        Ex(e, t),
        hc(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated)
          if (o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions
            }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            s = ti(Error($(423)), t), t = xv(e, t, r, n, s);
            break e
          } else if (r !== s) {
          s = ti(Error($(424)), t), t = xv(e, t, r, n, s);
          break e
        } else
          for (Qt = Jr(t.stateNode.containerInfo.firstChild), Xt = t, $e = !0, bn = null, n = bx(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (qo(), r === s) {
            t = vr(e, t, n);
            break e
          }
          Tt(e, t, r, n)
        }
        t = t.child
      }
      return t;
    case 5:
      return Cx(t), e === null && bf(t), r = t.type, s = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = s.children, vf(r, s) ? i = null : o !== null && vf(r, o) && (t.flags |= 32), Yx(e, t), Tt(e, t, i, n), t.child;
    case 6:
      return e === null && bf(t), null;
    case 13:
      return Xx(e, t, n);
    case 4:
      return Hp(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Jo(t, null, r, n) : Tt(e, t, r, n), t.child;
    case 11:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : vn(r, s), vv(e, t, r, s, n);
    case 7:
      return Tt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Tt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Tt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, s = t.pendingProps, o = t.memoizedProps, i = s.value, Ae(fc, r._currentValue), r._currentValue = i, o !== null)
          if (kn(o.value, i)) {
            if (o.children === s.children && !zt.current) {
              t = vr(e, t, n);
              break e
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null;) {
              var a = o.dependencies;
              if (a !== null) {
                i = o.child;
                for (var c = a.firstContext; c !== null;) {
                  if (c.context === r) {
                    if (o.tag === 1) {
                      c = fr(-1, n & -n), c.tag = 2;
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null ? c.next = c : (c.next = f.next, f.next = c), u.pending = c
                      }
                    }
                    o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), Sf(o.return, n, t), a.lanes |= n;
                    break
                  }
                  c = c.next
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (i = o.return, i === null) throw Error($(341));
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Sf(i, n, t), i = o.sibling
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null;) {
                  if (i === t) {
                    i = null;
                    break
                  }
                  if (o = i.sibling, o !== null) {
                    o.return = i.return, i = o;
                    break
                  }
                  i = i.return
                }
              o = i
            }
        Tt(e, t, s.children, n),
        t = t.child
      }
      return t;
    case 9:
      return s = t.type, r = t.pendingProps.children, Ao(t, n), s = fn(s), r = r(s), t.flags |= 1, Tt(e, t, r, n), t.child;
    case 14:
      return r = t.type, s = vn(r, t.pendingProps), s = vn(r.type, s), gv(e, t, r, s, n);
    case 15:
      return Gx(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : vn(r, s), Hl(e, t), t.tag = 1, Bt(r) ? (e = !0, cc(t)) : e = !1, Ao(t, n), Wx(t, r, s), Cf(t, r, s, n), jf(null, t, r, !0, e, n);
    case 19:
      return qx(e, t, n);
    case 22:
      return Kx(e, t, n)
  }
  throw Error($(156, t.tag))
};

function h0(e, t) {
  return zy(e, t)
}

function x_(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function un(e, t, n, r) {
  return new x_(e, t, n, r)
}

function ih(e) {
  return e = e.prototype, !(!e || !e.isReactComponent)
}

function w_(e) {
  if (typeof e == "function") return ih(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Np) return 11;
    if (e === _p) return 14
  }
  return 2
}

function rs(e, t) {
  var n = e.alternate;
  return n === null ? (n = un(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
    lanes: t.lanes,
    firstContext: t.firstContext
  }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Kl(e, t, n, r, s, o) {
  var i = 2;
  if (r = e, typeof e == "function") ih(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case ho:
      return Ds(n.children, s, o, t);
    case Cp:
      i = 8, s |= 8;
      break;
    case Gd:
      return e = un(12, n, t, s | 2), e.elementType = Gd, e.lanes = o, e;
    case Kd:
      return e = un(13, n, t, s), e.elementType = Kd, e.lanes = o, e;
    case Yd:
      return e = un(19, n, t, s), e.elementType = Yd, e.lanes = o, e;
    case Cy:
      return su(n, s, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Sy:
          i = 10;
          break e;
        case Ey:
          i = 9;
          break e;
        case Np:
          i = 11;
          break e;
        case _p:
          i = 14;
          break e;
        case Dr:
          i = 16, r = null;
          break e
      }
      throw Error($(130, e == null ? e : typeof e, ""))
  }
  return t = un(i, n, t, s), t.elementType = e, t.type = r, t.lanes = o, t
}

function Ds(e, t, n, r) {
  return e = un(7, e, r, t), e.lanes = n, e
}

function su(e, t, n, r) {
  return e = un(22, e, r, t), e.elementType = Cy, e.lanes = n, e.stateNode = {
    isHidden: !1
  }, e
}

function wd(e, t, n) {
  return e = un(6, e, null, t), e.lanes = n, e
}

function bd(e, t, n) {
  return t = un(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
    containerInfo: e.containerInfo,
    pendingChildren: null,
    implementation: e.implementation
  }, t
}

function b_(e, t, n, r, s) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = td(0), this.expirationTimes = td(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = td(0), this.identifierPrefix = r, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null
}

function ah(e, t, n, r, s, o, i, a, c) {
  return e = new b_(e, t, n, a, c), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = un(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
    element: r,
    isDehydrated: n,
    cache: null,
    transitions: null,
    pendingSuspenseBoundaries: null
  }, Wp(o), e
}

function S_(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: po,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n
  }
}

function m0(e) {
  if (!e) return is;
  e = e._reactInternals;
  e: {
    if (Ys(e) !== e || e.tag !== 1) throw Error($(170));
    var t = e;do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Bt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e
          }
      }
      t = t.return
    } while (t !== null);
    throw Error($(171))
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Bt(n)) return mx(e, n, t)
  }
  return t
}

function v0(e, t, n, r, s, o, i, a, c) {
  return e = ah(n, r, !0, e, s, o, i, a, c), e.context = m0(null), n = e.current, r = Ot(), s = ns(n), o = fr(r, s), o.callback = t ? ? null, es(n, o, s), e.current.lanes = s, Ba(e, s, r), Ut(e, r), e
}

function ou(e, t, n, r) {
  var s = t.current,
    o = Ot(),
    i = ns(s);
  return n = m0(n), t.context === null ? t.context = n : t.pendingContext = n, t = fr(o, i), t.payload = {
    element: e
  }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = es(s, t, i), e !== null && (Nn(e, s, i, o), Bl(e, s, i)), i
}

function Sc(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode
  }
}

function Tv(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t
  }
}

function lh(e, t) {
  Tv(e, t), (e = e.alternate) && Tv(e, t)
}

function E_() {
  return null
}
var g0 = typeof reportError == "function" ? reportError : function (e) {
  console.error(e)
};

function ch(e) {
  this._internalRoot = e
}
iu.prototype.render = ch.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error($(409));
  ou(e, t, null, null)
};
iu.prototype.unmount = ch.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    zs(function () {
      ou(null, e, null, null)
    }), t[hr] = null
  }
};

function iu(e) {
  this._internalRoot = e
}
iu.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ky();
    e = {
      blockedOn: null,
      target: e,
      priority: t
    };
    for (var n = 0; n < Lr.length && t !== 0 && t < Lr[n].priority; n++);
    Lr.splice(n, 0, e), n === 0 && Qy(e)
  }
};

function uh(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function au(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Pv() {}

function C_(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = Sc(i);
        o.call(u)
      }
    }
    var i = v0(t, r, e, 0, null, !1, !1, "", Pv);
    return e._reactRootContainer = i, e[hr] = i.current, ia(e.nodeType === 8 ? e.parentNode : e), zs(), i
  }
  for (; s = e.lastChild;) e.removeChild(s);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Sc(c);
      a.call(u)
    }
  }
  var c = ah(e, 0, !1, null, null, !1, !1, "", Pv);
  return e._reactRootContainer = c, e[hr] = c.current, ia(e.nodeType === 8 ? e.parentNode : e), zs(function () {
    ou(t, c, n, r)
  }), c
}

function lu(e, t, n, r, s) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof s == "function") {
      var a = s;
      s = function () {
        var c = Sc(i);
        a.call(c)
      }
    }
    ou(t, i, e, s)
  } else i = C_(n, t, e, s, r);
  return Sc(i)
}
Zy = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ii(t.pendingLanes);
        n !== 0 && (Tp(t, n | 1), Ut(t, Xe()), !(_e & 6) && (ni = Xe() + 500, ys()))
      }
      break;
    case 13:
      zs(function () {
        var r = mr(e, 1);
        if (r !== null) {
          var s = Ot();
          Nn(r, e, 1, s)
        }
      }), lh(e, 1)
  }
};
Pp = function (e) {
  if (e.tag === 13) {
    var t = mr(e, 134217728);
    if (t !== null) {
      var n = Ot();
      Nn(t, e, 134217728, n)
    }
    lh(e, 134217728)
  }
};
Gy = function (e) {
  if (e.tag === 13) {
    var t = ns(e),
      n = mr(e, t);
    if (n !== null) {
      var r = Ot();
      Nn(n, e, t, r)
    }
    lh(e, t)
  }
};
Ky = function () {
  return Pe
};
Yy = function (e, t) {
  var n = Pe;
  try {
    return Pe = e, t()
  } finally {
    Pe = n
  }
}; of = function (e, t, n) {
  switch (t) {
    case "input":
      if (qd(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode;) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = qc(r);
            if (!s) throw Error($(90));
            _y(r), qd(r, s)
          }
        }
      }
      break;
    case "textarea":
      ky(e, n);
      break;
    case "select":
      t = n.value, t != null && ko(e, !!n.multiple, t, !1)
  }
};
Iy = rh;
My = zs;
var N_ = {
    usingClientEntryPoint: !1,
    Events: [Wa, yo, qc, Oy, Dy, rh]
  },
  Ti = {
    findFiberByHostInstance: _s,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
  },
  __ = {
    bundleType: Ti.bundleType,
    version: Ti.version,
    rendererPackageName: Ti.rendererPackageName,
    rendererConfig: Ti.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Sr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return e = $y(e), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Ti.findFiberByHostInstance || E_,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var xl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!xl.isDisabled && xl.supportsFiber) try {
    Kc = xl.inject(__), Kn = xl
  } catch {}
}
tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N_;
tn.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!uh(t)) throw Error($(200));
  return S_(e, t, null, n)
};
tn.createRoot = function (e, t) {
  if (!uh(e)) throw Error($(299));
  var n = !1,
    r = "",
    s = g0;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = ah(e, 1, !1, null, null, n, !1, r, s), e[hr] = t.current, ia(e.nodeType === 8 ? e.parentNode : e), new ch(t)
};
tn.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == "function" ? Error($(188)) : (e = Object.keys(e).join(","), Error($(268, e)));
  return e = $y(t), e = e === null ? null : e.stateNode, e
};
tn.flushSync = function (e) {
  return zs(e)
};
tn.hydrate = function (e, t, n) {
  if (!au(t)) throw Error($(200));
  return lu(null, e, t, !0, n)
};
tn.hydrateRoot = function (e, t, n) {
  if (!uh(e)) throw Error($(405));
  var r = n != null && n.hydratedSources || null,
    s = !1,
    o = "",
    i = g0;
  if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = v0(t, null, e, 1, n ? ? null, s, !1, o, i), e[hr] = t.current, ia(e), r)
    for (e = 0; e < r.length; e++) n = r[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(n, s);
  return new iu(t)
};
tn.render = function (e, t, n) {
  if (!au(t)) throw Error($(200));
  return lu(null, e, t, !1, n)
};
tn.unmountComponentAtNode = function (e) {
  if (!au(e)) throw Error($(40));
  return e._reactRootContainer ? (zs(function () {
    lu(null, null, e, !1, function () {
      e._reactRootContainer = null, e[hr] = null
    })
  }), !0) : !1
};
tn.unstable_batchedUpdates = rh;
tn.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!au(n)) throw Error($(200));
  if (e == null || e._reactInternals === void 0) throw Error($(38));
  return lu(e, t, n, !1, r)
};
tn.version = "18.3.1-next-f1338f8080-20240426";

function y0() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y0)
  } catch (e) {
    console.error(e)
  }
}
y0(), yy.exports = tn;
var xs = yy.exports;
const Za = oy(xs);
var x0, Rv = xs;
x0 = Rv.createRoot, Rv.hydrateRoot;
const j_ = 1,
  k_ = 1e6;
let Sd = 0;

function T_() {
  return Sd = (Sd + 1) % Number.MAX_SAFE_INTEGER, Sd.toString()
}
const Ed = new Map,
  Av = e => {
    if (Ed.has(e)) return;
    const t = setTimeout(() => {
      Ed.delete(e), Yi({
        type: "REMOVE_TOAST",
        toastId: e
      })
    }, k_);
    Ed.set(e, t)
  },
  P_ = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return {
          ...e, toasts: [t.toast, ...e.toasts].slice(0, j_)
        };
      case "UPDATE_TOAST":
        return {
          ...e, toasts: e.toasts.map(n => n.id === t.toast.id ? {
            ...n,
            ...t.toast
          } : n)
        };
      case "DISMISS_TOAST": {
        const {
          toastId: n
        } = t;
        return n ? Av(n) : e.toasts.forEach(r => {
          Av(r.id)
        }), {
          ...e,
          toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
            ...r,
            open: !1
          } : r)
        }
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
          ...e,
          toasts: []
        } : {
          ...e,
          toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
  },
  Yl = [];
let Ql = {
  toasts: []
};

function Yi(e) {
  Ql = P_(Ql, e), Yl.forEach(t => {
    t(Ql)
  })
}

function je({
  ...e
}) {
  const t = T_(),
    n = s => Yi({
      type: "UPDATE_TOAST",
      toast: {
        ...s,
        id: t
      }
    }),
    r = () => Yi({
      type: "DISMISS_TOAST",
      toastId: t
    });
  return Yi({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: s => {
        s || r()
      }
    }
  }), {
    id: t,
    dismiss: r,
    update: n
  }
}

function Qs() {
  const [e, t] = d.useState(Ql);
  return d.useEffect(() => (Yl.push(t), () => {
    const n = Yl.indexOf(t);
    n > -1 && Yl.splice(n, 1)
  }), [e]), {
    ...e,
    toast: je,
    dismiss: n => Yi({
      type: "DISMISS_TOAST",
      toastId: n
    })
  }
}

function q(e, t, {
  checkForDefaultPrevented: n = !0
} = {}) {
  return function (s) {
    if (e == null || e(s), n === !1 || !s.defaultPrevented) return t == null ? void 0 : t(s)
  }
}

function R_(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t)
}

function w0(...e) {
  return t => e.forEach(n => R_(n, t))
}

function ue(...e) {
  return d.useCallback(w0(...e), e)
}

function A_(e, t) {
  const n = d.createContext(t);

  function r(o) {
    const {
      children: i,
      ...a
    } = o, c = d.useMemo(() => a, Object.values(a));
    return l.jsx(n.Provider, {
      value: c,
      children: i
    })
  }

  function s(o) {
    const i = d.useContext(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${o}\` must be used within \`${e}\``)
  }
  return r.displayName = e + "Provider", [r, s]
}

function An(e, t = []) {
  let n = [];

  function r(o, i) {
    const a = d.createContext(i),
      c = n.length;
    n = [...n, i];

    function u(p) {
      const {
        scope: h,
        children: w,
        ...x
      } = p, m = (h == null ? void 0 : h[e][c]) || a, b = d.useMemo(() => x, Object.values(x));
      return l.jsx(m.Provider, {
        value: b,
        children: w
      })
    }

    function f(p, h) {
      const w = (h == null ? void 0 : h[e][c]) || a,
        x = d.useContext(w);
      if (x) return x;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${o}\``)
    }
    return u.displayName = o + "Provider", [u, f]
  }
  const s = () => {
    const o = n.map(i => d.createContext(i));
    return function (a) {
      const c = (a == null ? void 0 : a[e]) || o;
      return d.useMemo(() => ({
        [`__scope${e}`]: {
          ...a,
          [e]: c
        }
      }), [a, c])
    }
  };
  return s.scopeName = e, [r, O_(s, ...t)]
}

function O_(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map(s => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function (o) {
      const i = r.reduce((a, {
        useScope: c,
        scopeName: u
      }) => {
        const p = c(o)[`__scope${u}`];
        return {
          ...a,
          ...p
        }
      }, {});
      return d.useMemo(() => ({
        [`__scope${t.scopeName}`]: i
      }), [i])
    }
  };
  return n.scopeName = t.scopeName, n
}
var gr = d.forwardRef((e, t) => {
  const {
    children: n,
    ...r
  } = e, s = d.Children.toArray(n), o = s.find(D_);
  if (o) {
    const i = o.props.children,
      a = s.map(c => c === o ? d.Children.count(i) > 1 ? d.Children.only(null) : d.isValidElement(i) ? i.props.children : null : c);
    return l.jsx($f, {
      ...r,
      ref: t,
      children: d.isValidElement(i) ? d.cloneElement(i, void 0, a) : null
    })
  }
  return l.jsx($f, {
    ...r,
    ref: t,
    children: n
  })
});
gr.displayName = "Slot";
var $f = d.forwardRef((e, t) => {
  const {
    children: n,
    ...r
  } = e;
  if (d.isValidElement(n)) {
    const s = M_(n);
    return d.cloneElement(n, {
      ...I_(r, n.props),
      ref: t ? w0(t, s) : s
    })
  }
  return d.Children.count(n) > 1 ? d.Children.only(null) : null
});
$f.displayName = "SlotClone";
var dh = ({
  children: e
}) => l.jsx(l.Fragment, {
  children: e
});

function D_(e) {
  return d.isValidElement(e) && e.type === dh
}

function I_(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const s = e[r],
      o = t[r];
    /^on[A-Z]/.test(r) ? s && o ? n[r] = (...a) => {
      o(...a), s(...a)
    } : s && (n[r] = s) : r === "style" ? n[r] = {
      ...s,
      ...o
    } : r === "className" && (n[r] = [s, o].filter(Boolean).join(" "))
  }
  return {
    ...e,
    ...n
  }
}

function M_(e) {
  var r, s;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function fh(e) {
  const t = e + "CollectionProvider",
    [n, r] = An(t),
    [s, o] = n(t, {
      collectionRef: {
        current: null
      },
      itemMap: new Map
    }),
    i = w => {
      const {
        scope: x,
        children: m
      } = w, b = L.useRef(null), g = L.useRef(new Map).current;
      return l.jsx(s, {
        scope: x,
        itemMap: g,
        collectionRef: b,
        children: m
      })
    };
  i.displayName = t;
  const a = e + "CollectionSlot",
    c = L.forwardRef((w, x) => {
      const {
        scope: m,
        children: b
      } = w, g = o(a, m), v = ue(x, g.collectionRef);
      return l.jsx(gr, {
        ref: v,
        children: b
      })
    });
  c.displayName = a;
  const u = e + "CollectionItemSlot",
    f = "data-radix-collection-item",
    p = L.forwardRef((w, x) => {
      const {
        scope: m,
        children: b,
        ...g
      } = w, v = L.useRef(null), y = ue(x, v), S = o(u, m);
      return L.useEffect(() => (S.itemMap.set(v, {
        ref: v,
        ...g
      }), () => void S.itemMap.delete(v))), l.jsx(gr, {
        [f]: "",
        ref: y,
        children: b
      })
    });
  p.displayName = u;

  function h(w) {
    const x = o(e + "CollectionConsumer", w);
    return L.useCallback(() => {
      const b = x.collectionRef.current;
      if (!b) return [];
      const g = Array.from(b.querySelectorAll(`[${f}]`));
      return Array.from(x.itemMap.values()).sort((S, E) => g.indexOf(S.ref.current) - g.indexOf(E.ref.current))
    }, [x.collectionRef, x.itemMap])
  }
  return [{
    Provider: i,
    Slot: c,
    ItemSlot: p
  }, h, r]
}
var L_ = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
  ne = L_.reduce((e, t) => {
    const n = d.forwardRef((r, s) => {
      const {
        asChild: o,
        ...i
      } = r, a = o ? gr : t;
      return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), l.jsx(a, {
        ...i,
        ref: s
      })
    });
    return n.displayName = `Primitive.${t}`, {
      ...e,
      [t]: n
    }
  }, {});

function Ga(e, t) {
  e && xs.flushSync(() => e.dispatchEvent(t))
}

function it(e) {
  const t = d.useRef(e);
  return d.useEffect(() => {
    t.current = e
  }), d.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n)
  }, [])
}

function cu(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = it(e);
  d.useEffect(() => {
    const r = s => {
      s.key === "Escape" && n(s)
    };
    return t.addEventListener("keydown", r, {
      capture: !0
    }), () => t.removeEventListener("keydown", r, {
      capture: !0
    })
  }, [n, t])
}
var F_ = "DismissableLayer",
  Vf = "dismissableLayer.update",
  $_ = "dismissableLayer.pointerDownOutside",
  V_ = "dismissableLayer.focusOutside",
  Ov, b0 = d.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
  }),
  S0 = d.forwardRef((e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: s,
      onFocusOutside: o,
      onInteractOutside: i,
      onDismiss: a,
      ...c
    } = e, u = d.useContext(b0), [f, p] = d.useState(null), h = (f == null ? void 0 : f.ownerDocument) ? ? (globalThis == null ? void 0 : globalThis.document), [, w] = d.useState({}), x = ue(t, C => p(C)), m = Array.from(u.layers), [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), g = m.indexOf(b), v = f ? m.indexOf(f) : -1, y = u.layersWithOutsidePointerEventsDisabled.size > 0, S = v >= g, E = B_(C => {
      const j = C.target,
        P = [...u.branches].some(O => O.contains(j));
      !S || P || (s == null || s(C), i == null || i(C), C.defaultPrevented || a == null || a())
    }, h), _ = U_(C => {
      const j = C.target;
      [...u.branches].some(O => O.contains(j)) || (o == null || o(C), i == null || i(C), C.defaultPrevented || a == null || a())
    }, h);
    return cu(C => {
      v === u.layers.size - 1 && (r == null || r(C), !C.defaultPrevented && a && (C.preventDefault(), a()))
    }, h), d.useEffect(() => {
      if (f) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Ov = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), Dv(), () => {
        n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Ov)
      }
    }, [f, h, n, u]), d.useEffect(() => () => {
      f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), Dv())
    }, [f, u]), d.useEffect(() => {
      const C = () => w({});
      return document.addEventListener(Vf, C), () => document.removeEventListener(Vf, C)
    }, []), l.jsx(ne.div, {
      ...c,
      ref: x,
      style: {
        pointerEvents: y ? S ? "auto" : "none" : void 0,
        ...e.style
      },
      onFocusCapture: q(e.onFocusCapture, _.onFocusCapture),
      onBlurCapture: q(e.onBlurCapture, _.onBlurCapture),
      onPointerDownCapture: q(e.onPointerDownCapture, E.onPointerDownCapture)
    })
  });
S0.displayName = F_;
var z_ = "DismissableLayerBranch",
  E0 = d.forwardRef((e, t) => {
    const n = d.useContext(b0),
      r = d.useRef(null),
      s = ue(t, r);
    return d.useEffect(() => {
      const o = r.current;
      if (o) return n.branches.add(o), () => {
        n.branches.delete(o)
      }
    }, [n.branches]), l.jsx(ne.div, {
      ...e,
      ref: s
    })
  });
E0.displayName = z_;

function B_(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = it(e),
    r = d.useRef(!1),
    s = d.useRef(() => {});
  return d.useEffect(() => {
    const o = a => {
        if (a.target && !r.current) {
          let c = function () {
            C0($_, n, u, {
              discrete: !0
            })
          };
          const u = {
            originalEvent: a
          };
          a.pointerType === "touch" ? (t.removeEventListener("click", s.current), s.current = c, t.addEventListener("click", s.current, {
            once: !0
          })) : c()
        } else t.removeEventListener("click", s.current);
        r.current = !1
      },
      i = window.setTimeout(() => {
        t.addEventListener("pointerdown", o)
      }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", o), t.removeEventListener("click", s.current)
    }
  }, [t, n]), {
    onPointerDownCapture: () => r.current = !0
  }
}

function U_(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = it(e),
    r = d.useRef(!1);
  return d.useEffect(() => {
    const s = o => {
      o.target && !r.current && C0(V_, n, {
        originalEvent: o
      }, {
        discrete: !1
      })
    };
    return t.addEventListener("focusin", s), () => t.removeEventListener("focusin", s)
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  }
}

function Dv() {
  const e = new CustomEvent(Vf);
  document.dispatchEvent(e)
}

function C0(e, t, n, {
  discrete: r
}) {
  const s = n.originalEvent.target,
    o = new CustomEvent(e, {
      bubbles: !1,
      cancelable: !0,
      detail: n
    });
  t && s.addEventListener(e, t, {
    once: !0
  }), r ? Ga(s, o) : s.dispatchEvent(o)
}
var W_ = S0,
  H_ = E0,
  We = globalThis != null && globalThis.document ? d.useLayoutEffect : () => {},
  Z_ = "Portal",
  N0 = d.forwardRef((e, t) => {
    var a;
    const {
      container: n,
      ...r
    } = e, [s, o] = d.useState(!1);
    We(() => o(!0), []);
    const i = n || s && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
    return i ? Za.createPortal(l.jsx(ne.div, {
      ...r,
      ref: t
    }), i) : null
  });
N0.displayName = Z_;

function G_(e, t) {
  return d.useReducer((n, r) => t[n][r] ? ? n, e)
}
var ws = e => {
  const {
    present: t,
    children: n
  } = e, r = K_(t), s = typeof n == "function" ? n({
    present: r.isPresent
  }) : d.Children.only(n), o = ue(r.ref, Y_(s));
  return typeof n == "function" || r.isPresent ? d.cloneElement(s, {
    ref: o
  }) : null
};
ws.displayName = "Presence";

function K_(e) {
  const [t, n] = d.useState(), r = d.useRef({}), s = d.useRef(e), o = d.useRef("none"), i = e ? "mounted" : "unmounted", [a, c] = G_(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return d.useEffect(() => {
    const u = wl(r.current);
    o.current = a === "mounted" ? u : "none"
  }, [a]), We(() => {
    const u = r.current,
      f = s.current;
    if (f !== e) {
      const h = o.current,
        w = wl(u);
      e ? c("MOUNT") : w === "none" || (u == null ? void 0 : u.display) === "none" ? c("UNMOUNT") : c(f && h !== w ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e
    }
  }, [e, c]), We(() => {
    if (t) {
      const u = p => {
          const w = wl(r.current).includes(p.animationName);
          p.target === t && w && xs.flushSync(() => c("ANIMATION_END"))
        },
        f = p => {
          p.target === t && (o.current = wl(r.current))
        };
      return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u)
      }
    } else c("ANIMATION_END")
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: d.useCallback(u => {
      u && (r.current = getComputedStyle(u)), n(u)
    }, [])
  }
}

function wl(e) {
  return (e == null ? void 0 : e.animationName) || "none"
}

function Y_(e) {
  var r, s;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function yr({
  prop: e,
  defaultProp: t,
  onChange: n = () => {}
}) {
  const [r, s] = Q_({
    defaultProp: t,
    onChange: n
  }), o = e !== void 0, i = o ? e : r, a = it(n), c = d.useCallback(u => {
    if (o) {
      const p = typeof u == "function" ? u(e) : u;
      p !== e && a(p)
    } else s(u)
  }, [o, e, s, a]);
  return [i, c]
}

function Q_({
  defaultProp: e,
  onChange: t
}) {
  const n = d.useState(e),
    [r] = n,
    s = d.useRef(r),
    o = it(t);
  return d.useEffect(() => {
    s.current !== r && (o(r), s.current = r)
  }, [r, s, o]), n
}
var X_ = "VisuallyHidden",
  Ka = d.forwardRef((e, t) => l.jsx(ne.span, {
    ...e,
    ref: t,
    style: {
      position: "absolute",
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      wordWrap: "normal",
      ...e.style
    }
  }));
Ka.displayName = X_;
var q_ = Ka,
  ph = "ToastProvider",
  [hh, J_, ej] = fh("Toast"),
  [_0, vM] = An("Toast", [ej]),
  [tj, uu] = _0(ph),
  j0 = e => {
    const {
      __scopeToast: t,
      label: n = "Notification",
      duration: r = 5e3,
      swipeDirection: s = "right",
      swipeThreshold: o = 50,
      children: i
    } = e, [a, c] = d.useState(null), [u, f] = d.useState(0), p = d.useRef(!1), h = d.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${ph}\`. Expected non-empty \`string\`.`), l.jsx(hh.Provider, {
      scope: t,
      children: l.jsx(tj, {
        scope: t,
        label: n,
        duration: r,
        swipeDirection: s,
        swipeThreshold: o,
        toastCount: u,
        viewport: a,
        onViewportChange: c,
        onToastAdd: d.useCallback(() => f(w => w + 1), []),
        onToastRemove: d.useCallback(() => f(w => w - 1), []),
        isFocusedToastEscapeKeyDownRef: p,
        isClosePausedRef: h,
        children: i
      })
    })
  };
j0.displayName = ph;
var k0 = "ToastViewport",
  nj = ["F8"],
  zf = "toast.viewportPause",
  Bf = "toast.viewportResume",
  T0 = d.forwardRef((e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = nj,
      label: s = "Notifications ({hotkey})",
      ...o
    } = e, i = uu(k0, n), a = J_(n), c = d.useRef(null), u = d.useRef(null), f = d.useRef(null), p = d.useRef(null), h = ue(t, p, i.onViewportChange), w = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), x = i.toastCount > 0;
    d.useEffect(() => {
      const b = g => {
        var y;
        r.every(S => g[S] || g.code === S) && ((y = p.current) == null || y.focus())
      };
      return document.addEventListener("keydown", b), () => document.removeEventListener("keydown", b)
    }, [r]), d.useEffect(() => {
      const b = c.current,
        g = p.current;
      if (x && b && g) {
        const v = () => {
            if (!i.isClosePausedRef.current) {
              const _ = new CustomEvent(zf);
              g.dispatchEvent(_), i.isClosePausedRef.current = !0
            }
          },
          y = () => {
            if (i.isClosePausedRef.current) {
              const _ = new CustomEvent(Bf);
              g.dispatchEvent(_), i.isClosePausedRef.current = !1
            }
          },
          S = _ => {
            !b.contains(_.relatedTarget) && y()
          },
          E = () => {
            b.contains(document.activeElement) || y()
          };
        return b.addEventListener("focusin", v), b.addEventListener("focusout", S), b.addEventListener("pointermove", v), b.addEventListener("pointerleave", E), window.addEventListener("blur", v), window.addEventListener("focus", y), () => {
          b.removeEventListener("focusin", v), b.removeEventListener("focusout", S), b.removeEventListener("pointermove", v), b.removeEventListener("pointerleave", E), window.removeEventListener("blur", v), window.removeEventListener("focus", y)
        }
      }
    }, [x, i.isClosePausedRef]);
    const m = d.useCallback(({
      tabbingDirection: b
    }) => {
      const v = a().map(y => {
        const S = y.ref.current,
          E = [S, ...mj(S)];
        return b === "forwards" ? E : E.reverse()
      });
      return (b === "forwards" ? v.reverse() : v).flat()
    }, [a]);
    return d.useEffect(() => {
      const b = p.current;
      if (b) {
        const g = v => {
          var E, _, C;
          const y = v.altKey || v.ctrlKey || v.metaKey;
          if (v.key === "Tab" && !y) {
            const j = document.activeElement,
              P = v.shiftKey;
            if (v.target === b && P) {
              (E = u.current) == null || E.focus();
              return
            }
            const R = m({
                tabbingDirection: P ? "backwards" : "forwards"
              }),
              D = R.findIndex(I => I === j);
            Cd(R.slice(D + 1)) ? v.preventDefault() : P ? (_ = u.current) == null || _.focus() : (C = f.current) == null || C.focus()
          }
        };
        return b.addEventListener("keydown", g), () => b.removeEventListener("keydown", g)
      }
    }, [a, m]), l.jsxs(H_, {
      ref: c,
      role: "region",
      "aria-label": s.replace("{hotkey}", w),
      tabIndex: -1,
      style: {
        pointerEvents: x ? void 0 : "none"
      },
      children: [x && l.jsx(Uf, {
        ref: u,
        onFocusFromOutsideViewport: () => {
          const b = m({
            tabbingDirection: "forwards"
          });
          Cd(b)
        }
      }), l.jsx(hh.Slot, {
        scope: n,
        children: l.jsx(ne.ol, {
          tabIndex: -1,
          ...o,
          ref: h
        })
      }), x && l.jsx(Uf, {
        ref: f,
        onFocusFromOutsideViewport: () => {
          const b = m({
            tabbingDirection: "backwards"
          });
          Cd(b)
        }
      })]
    })
  });
T0.displayName = k0;
var P0 = "ToastFocusProxy",
  Uf = d.forwardRef((e, t) => {
    const {
      __scopeToast: n,
      onFocusFromOutsideViewport: r,
      ...s
    } = e, o = uu(P0, n);
    return l.jsx(Ka, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...s,
      ref: t,
      style: {
        position: "fixed"
      },
      onFocus: i => {
        var u;
        const a = i.relatedTarget;
        !((u = o.viewport) != null && u.contains(a)) && r()
      }
    })
  });
Uf.displayName = P0;
var du = "Toast",
  rj = "toast.swipeStart",
  sj = "toast.swipeMove",
  oj = "toast.swipeCancel",
  ij = "toast.swipeEnd",
  R0 = d.forwardRef((e, t) => {
    const {
      forceMount: n,
      open: r,
      defaultOpen: s,
      onOpenChange: o,
      ...i
    } = e, [a = !0, c] = yr({
      prop: r,
      defaultProp: s,
      onChange: o
    });
    return l.jsx(ws, {
      present: n || a,
      children: l.jsx(cj, {
        open: a,
        ...i,
        ref: t,
        onClose: () => c(!1),
        onPause: it(e.onPause),
        onResume: it(e.onResume),
        onSwipeStart: q(e.onSwipeStart, u => {
          u.currentTarget.setAttribute("data-swipe", "start")
        }),
        onSwipeMove: q(e.onSwipeMove, u => {
          const {
            x: f,
            y: p
          } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"), u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${f}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${p}px`)
        }),
        onSwipeCancel: q(e.onSwipeCancel, u => {
          u.currentTarget.setAttribute("data-swipe", "cancel"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
        }),
        onSwipeEnd: q(e.onSwipeEnd, u => {
          const {
            x: f,
            y: p
          } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${f}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${p}px`), c(!1)
        })
      })
    })
  });
R0.displayName = du;
var [aj, lj] = _0(du, {
  onClose() {}
}), cj = d.forwardRef((e, t) => {
  const {
    __scopeToast: n,
    type: r = "foreground",
    duration: s,
    open: o,
    onClose: i,
    onEscapeKeyDown: a,
    onPause: c,
    onResume: u,
    onSwipeStart: f,
    onSwipeMove: p,
    onSwipeCancel: h,
    onSwipeEnd: w,
    ...x
  } = e, m = uu(du, n), [b, g] = d.useState(null), v = ue(t, I => g(I)), y = d.useRef(null), S = d.useRef(null), E = s || m.duration, _ = d.useRef(0), C = d.useRef(E), j = d.useRef(0), {
    onToastAdd: P,
    onToastRemove: O
  } = m, z = it(() => {
    var G;
    (b == null ? void 0 : b.contains(document.activeElement)) && ((G = m.viewport) == null || G.focus()), i()
  }), R = d.useCallback(I => {
    !I || I === 1 / 0 || (window.clearTimeout(j.current), _.current = new Date().getTime(), j.current = window.setTimeout(z, I))
  }, [z]);
  d.useEffect(() => {
    const I = m.viewport;
    if (I) {
      const G = () => {
          R(C.current), u == null || u()
        },
        W = () => {
          const te = new Date().getTime() - _.current;
          C.current = C.current - te, window.clearTimeout(j.current), c == null || c()
        };
      return I.addEventListener(zf, W), I.addEventListener(Bf, G), () => {
        I.removeEventListener(zf, W), I.removeEventListener(Bf, G)
      }
    }
  }, [m.viewport, E, c, u, R]), d.useEffect(() => {
    o && !m.isClosePausedRef.current && R(E)
  }, [o, E, m.isClosePausedRef, R]), d.useEffect(() => (P(), () => O()), [P, O]);
  const D = d.useMemo(() => b ? F0(b) : null, [b]);
  return m.viewport ? l.jsxs(l.Fragment, {
    children: [D && l.jsx(uj, {
      __scopeToast: n,
      role: "status",
      "aria-live": r === "foreground" ? "assertive" : "polite",
      "aria-atomic": !0,
      children: D
    }), l.jsx(aj, {
      scope: n,
      onClose: z,
      children: xs.createPortal(l.jsx(hh.ItemSlot, {
        scope: n,
        children: l.jsx(W_, {
          asChild: !0,
          onEscapeKeyDown: q(a, () => {
            m.isFocusedToastEscapeKeyDownRef.current || z(), m.isFocusedToastEscapeKeyDownRef.current = !1
          }),
          children: l.jsx(ne.li, {
            role: "status",
            "aria-live": "off",
            "aria-atomic": !0,
            tabIndex: 0,
            "data-state": o ? "open" : "closed",
            "data-swipe-direction": m.swipeDirection,
            ...x,
            ref: v,
            style: {
              userSelect: "none",
              touchAction: "none",
              ...e.style
            },
            onKeyDown: q(e.onKeyDown, I => {
              I.key === "Escape" && (a == null || a(I.nativeEvent), I.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, z()))
            }),
            onPointerDown: q(e.onPointerDown, I => {
              I.button === 0 && (y.current = {
                x: I.clientX,
                y: I.clientY
              })
            }),
            onPointerMove: q(e.onPointerMove, I => {
              if (!y.current) return;
              const G = I.clientX - y.current.x,
                W = I.clientY - y.current.y,
                te = !!S.current,
                k = ["left", "right"].includes(m.swipeDirection),
                F = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max,
                K = k ? F(0, G) : 0,
                Z = k ? 0 : F(0, W),
                re = I.pointerType === "touch" ? 10 : 2,
                de = {
                  x: K,
                  y: Z
                },
                Ee = {
                  originalEvent: I,
                  delta: de
                };
              te ? (S.current = de, bl(sj, p, Ee, {
                discrete: !1
              })) : Iv(de, m.swipeDirection, re) ? (S.current = de, bl(rj, f, Ee, {
                discrete: !1
              }), I.target.setPointerCapture(I.pointerId)) : (Math.abs(G) > re || Math.abs(W) > re) && (y.current = null)
            }),
            onPointerUp: q(e.onPointerUp, I => {
              const G = S.current,
                W = I.target;
              if (W.hasPointerCapture(I.pointerId) && W.releasePointerCapture(I.pointerId), S.current = null, y.current = null, G) {
                const te = I.currentTarget,
                  k = {
                    originalEvent: I,
                    delta: G
                  };
                Iv(G, m.swipeDirection, m.swipeThreshold) ? bl(ij, w, k, {
                  discrete: !0
                }) : bl(oj, h, k, {
                  discrete: !0
                }), te.addEventListener("click", F => F.preventDefault(), {
                  once: !0
                })
              }
            })
          })
        })
      }), m.viewport)
    })]
  }) : null
}), uj = e => {
  const {
    __scopeToast: t,
    children: n,
    ...r
  } = e, s = uu(du, t), [o, i] = d.useState(!1), [a, c] = d.useState(!1);
  return pj(() => i(!0)), d.useEffect(() => {
    const u = window.setTimeout(() => c(!0), 1e3);
    return () => window.clearTimeout(u)
  }, []), a ? null : l.jsx(N0, {
    asChild: !0,
    children: l.jsx(Ka, {
      ...r,
      children: o && l.jsxs(l.Fragment, {
        children: [s.label, " ", n]
      })
    })
  })
}, dj = "ToastTitle", A0 = d.forwardRef((e, t) => {
  const {
    __scopeToast: n,
    ...r
  } = e;
  return l.jsx(ne.div, {
    ...r,
    ref: t
  })
});
A0.displayName = dj;
var fj = "ToastDescription",
  O0 = d.forwardRef((e, t) => {
    const {
      __scopeToast: n,
      ...r
    } = e;
    return l.jsx(ne.div, {
      ...r,
      ref: t
    })
  });
O0.displayName = fj;
var D0 = "ToastAction",
  I0 = d.forwardRef((e, t) => {
    const {
      altText: n,
      ...r
    } = e;
    return n.trim() ? l.jsx(L0, {
      altText: n,
      asChild: !0,
      children: l.jsx(mh, {
        ...r,
        ref: t
      })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${D0}\`. Expected non-empty \`string\`.`), null)
  });
I0.displayName = D0;
var M0 = "ToastClose",
  mh = d.forwardRef((e, t) => {
    const {
      __scopeToast: n,
      ...r
    } = e, s = lj(M0, n);
    return l.jsx(L0, {
      asChild: !0,
      children: l.jsx(ne.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: q(e.onClick, s.onClose)
      })
    })
  });
mh.displayName = M0;
var L0 = d.forwardRef((e, t) => {
  const {
    __scopeToast: n,
    altText: r,
    ...s
  } = e;
  return l.jsx(ne.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...s,
    ref: t
  })
});

function F0(e) {
  const t = [];
  return Array.from(e.childNodes).forEach(r => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), hj(r)) {
      const s = r.ariaHidden || r.hidden || r.style.display === "none",
        o = r.dataset.radixToastAnnounceExclude === "";
      if (!s)
        if (o) {
          const i = r.dataset.radixToastAnnounceAlt;
          i && t.push(i)
        } else t.push(...F0(r))
    }
  }), t
}

function bl(e, t, n, {
  discrete: r
}) {
  const s = n.originalEvent.currentTarget,
    o = new CustomEvent(e, {
      bubbles: !0,
      cancelable: !0,
      detail: n
    });
  t && s.addEventListener(e, t, {
    once: !0
  }), r ? Ga(s, o) : s.dispatchEvent(o)
}
var Iv = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    s = Math.abs(e.y),
    o = r > s;
  return t === "left" || t === "right" ? o && r > n : !o && s > n
};

function pj(e = () => {}) {
  const t = it(e);
  We(() => {
    let n = 0,
      r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r)
    }
  }, [t])
}

function hj(e) {
  return e.nodeType === e.ELEMENT_NODE
}

function mj(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: r => {
        const s = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || s ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
      }
    });
  for (; n.nextNode();) t.push(n.currentNode);
  return t
}

function Cd(e) {
  const t = document.activeElement;
  return e.some(n => n === t ? !0 : (n.focus(), document.activeElement !== t))
}
var vj = j0,
  $0 = T0,
  V0 = R0,
  z0 = A0,
  B0 = O0,
  U0 = I0,
  W0 = mh;

function H0(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++) e[t] && (n = H0(e[t])) && (r && (r += " "), r += n)
    } else
      for (n in e) e[n] && (r && (r += " "), r += n);
  return r
}

function Z0() {
  for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++)(e = arguments[n]) && (t = H0(e)) && (r && (r += " "), r += t);
  return r
}
const Mv = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e,
  Lv = Z0,
  fu = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null) return Lv(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {
      variants: s,
      defaultVariants: o
    } = t, i = Object.keys(s).map(u => {
      const f = n == null ? void 0 : n[u],
        p = o == null ? void 0 : o[u];
      if (f === null) return null;
      const h = Mv(f) || Mv(p);
      return s[u][h]
    }), a = n && Object.entries(n).reduce((u, f) => {
      let [p, h] = f;
      return h === void 0 || (u[p] = h), u
    }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, f) => {
      let {
        class: p,
        className: h,
        ...w
      } = f;
      return Object.entries(w).every(x => {
        let [m, b] = x;
        return Array.isArray(b) ? b.includes({
          ...o,
          ...a
        } [m]) : {
          ...o,
          ...a
        } [m] === b
      }) ? [...u, p, h] : u
    }, []);
    return Lv(e, i, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gj = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  G0 = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var yj = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xj = d.forwardRef(({
  color: e = "currentColor",
  size: t = 24,
  strokeWidth: n = 2,
  absoluteStrokeWidth: r,
  className: s = "",
  children: o,
  iconNode: i,
  ...a
}, c) => d.createElement("svg", {
  ref: c,
  ...yj,
  width: t,
  height: t,
  stroke: e,
  strokeWidth: r ? Number(n) * 24 / Number(t) : n,
  className: G0("lucide", s),
  ...a
}, [...i.map(([u, f]) => d.createElement(u, f)), ...Array.isArray(o) ? o : [o]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pu = (e, t) => {
  const n = d.forwardRef(({
    className: r,
    ...s
  }, o) => d.createElement(xj, {
    ref: o,
    iconNode: t,
    className: G0(`lucide-${gj(e)}`, r),
    ...s
  }));
  return n.displayName = `${e}`, n
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K0 = pu("Check", [
  ["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y0 = pu("ChevronDown", [
  ["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wj = pu("ChevronUp", [
  ["path", {
    d: "m18 15-6-6-6 6",
    key: "153udz"
  }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vh = pu("X", [
    ["path", {
      d: "M18 6 6 18",
      key: "1bl5f8"
    }],
    ["path", {
      d: "m6 6 12 12",
      key: "d8bk6v"
    }]
  ]),
  gh = "-",
  bj = e => {
    const t = Ej(e),
      {
        conflictingClassGroups: n,
        conflictingClassGroupModifiers: r
      } = e;
    return {
      getClassGroupId: i => {
        const a = i.split(gh);
        return a[0] === "" && a.length !== 1 && a.shift(), Q0(a, t) || Sj(i)
      },
      getConflictingClassGroupIds: (i, a) => {
        const c = n[i] || [];
        return a && r[i] ? [...c, ...r[i]] : c
      }
    }
  },
  Q0 = (e, t) => {
    var i;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      s = r ? Q0(e.slice(1), r) : void 0;
    if (s) return s;
    if (t.validators.length === 0) return;
    const o = e.join(gh);
    return (i = t.validators.find(({
      validator: a
    }) => a(o))) == null ? void 0 : i.classGroupId
  },
  Fv = /^\[(.+)\]$/,
  Sj = e => {
    if (Fv.test(e)) {
      const t = Fv.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n
    }
  },
  Ej = e => {
    const {
      theme: t,
      prefix: n
    } = e, r = {
      nextPart: new Map,
      validators: []
    };
    return Nj(Object.entries(e.classGroups), n).forEach(([o, i]) => {
      Wf(i, r, o, t)
    }), r
  },
  Wf = (e, t, n, r) => {
    e.forEach(s => {
      if (typeof s == "string") {
        const o = s === "" ? t : $v(t, s);
        o.classGroupId = n;
        return
      }
      if (typeof s == "function") {
        if (Cj(s)) {
          Wf(s(r), t, n, r);
          return
        }
        t.validators.push({
          validator: s,
          classGroupId: n
        });
        return
      }
      Object.entries(s).forEach(([o, i]) => {
        Wf(i, $v(t, o), n, r)
      })
    })
  },
  $v = (e, t) => {
    let n = e;
    return t.split(gh).forEach(r => {
      n.nextPart.has(r) || n.nextPart.set(r, {
        nextPart: new Map,
        validators: []
      }), n = n.nextPart.get(r)
    }), n
  },
  Cj = e => e.isThemeGetter,
  Nj = (e, t) => t ? e.map(([n, r]) => {
    const s = r.map(o => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([i, a]) => [t + i, a])) : o);
    return [n, s]
  }) : e,
  _j = e => {
    if (e < 1) return {
      get: () => {},
      set: () => {}
    };
    let t = 0,
      n = new Map,
      r = new Map;
    const s = (o, i) => {
      n.set(o, i), t++, t > e && (t = 0, r = n, n = new Map)
    };
    return {
      get(o) {
        let i = n.get(o);
        if (i !== void 0) return i;
        if ((i = r.get(o)) !== void 0) return s(o, i), i
      },
      set(o, i) {
        n.has(o) ? n.set(o, i) : s(o, i)
      }
    }
  },
  X0 = "!",
  jj = e => {
    const {
      separator: t,
      experimentalParseClassName: n
    } = e, r = t.length === 1, s = t[0], o = t.length, i = a => {
      const c = [];
      let u = 0,
        f = 0,
        p;
      for (let b = 0; b < a.length; b++) {
        let g = a[b];
        if (u === 0) {
          if (g === s && (r || a.slice(b, b + o) === t)) {
            c.push(a.slice(f, b)), f = b + o;
            continue
          }
          if (g === "/") {
            p = b;
            continue
          }
        }
        g === "[" ? u++ : g === "]" && u--
      }
      const h = c.length === 0 ? a : a.substring(f),
        w = h.startsWith(X0),
        x = w ? h.substring(1) : h,
        m = p && p > f ? p - f : void 0;
      return {
        modifiers: c,
        hasImportantModifier: w,
        baseClassName: x,
        maybePostfixModifierPosition: m
      }
    };
    return n ? a => n({
      className: a,
      parseClassName: i
    }) : i
  },
  kj = e => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
      r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r)
    }), t.push(...n.sort()), t
  },
  Tj = e => ({
    cache: _j(e.cacheSize),
    parseClassName: jj(e),
    ...bj(e)
  }),
  Pj = /\s+/,
  Rj = (e, t) => {
    const {
      parseClassName: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: s
    } = t, o = [], i = e.trim().split(Pj);
    let a = "";
    for (let c = i.length - 1; c >= 0; c -= 1) {
      const u = i[c],
        {
          modifiers: f,
          hasImportantModifier: p,
          baseClassName: h,
          maybePostfixModifierPosition: w
        } = n(u);
      let x = !!w,
        m = r(x ? h.substring(0, w) : h);
      if (!m) {
        if (!x) {
          a = u + (a.length > 0 ? " " + a : a);
          continue
        }
        if (m = r(h), !m) {
          a = u + (a.length > 0 ? " " + a : a);
          continue
        }
        x = !1
      }
      const b = kj(f).join(":"),
        g = p ? b + X0 : b,
        v = g + m;
      if (o.includes(v)) continue;
      o.push(v);
      const y = s(m, x);
      for (let S = 0; S < y.length; ++S) {
        const E = y[S];
        o.push(g + E)
      }
      a = u + (a.length > 0 ? " " + a : a)
    }
    return a
  };

function Aj() {
  let e = 0,
    t, n, r = "";
  for (; e < arguments.length;)(t = arguments[e++]) && (n = q0(t)) && (r && (r += " "), r += n);
  return r
}
const q0 = e => {
  if (typeof e == "string") return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++) e[r] && (t = q0(e[r])) && (n && (n += " "), n += t);
  return n
};

function Oj(e, ...t) {
  let n, r, s, o = i;

  function i(c) {
    const u = t.reduce((f, p) => p(f), e());
    return n = Tj(u), r = n.cache.get, s = n.cache.set, o = a, a(c)
  }

  function a(c) {
    const u = r(c);
    if (u) return u;
    const f = Rj(c, n);
    return s(c, f), f
  }
  return function () {
    return o(Aj.apply(null, arguments))
  }
}
const Me = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0, t
  },
  J0 = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Dj = /^\d+\/\d+$/,
  Ij = new Set(["px", "full", "screen"]),
  Mj = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Lj = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Fj = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  $j = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Vj = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  nr = e => Do(e) || Ij.has(e) || Dj.test(e),
  Pr = e => hi(e, "length", Kj),
  Do = e => !!e && !Number.isNaN(Number(e)),
  Nd = e => hi(e, "number", Do),
  Pi = e => !!e && Number.isInteger(Number(e)),
  zj = e => e.endsWith("%") && Do(e.slice(0, -1)),
  pe = e => J0.test(e),
  Rr = e => Mj.test(e),
  Bj = new Set(["length", "size", "percentage"]),
  Uj = e => hi(e, Bj, ew),
  Wj = e => hi(e, "position", ew),
  Hj = new Set(["image", "url"]),
  Zj = e => hi(e, Hj, Qj),
  Gj = e => hi(e, "", Yj),
  Ri = () => !0,
  hi = (e, t, n) => {
    const r = J0.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
  },
  Kj = e => Lj.test(e) && !Fj.test(e),
  ew = () => !1,
  Yj = e => $j.test(e),
  Qj = e => Vj.test(e),
  Xj = () => {
    const e = Me("colors"),
      t = Me("spacing"),
      n = Me("blur"),
      r = Me("brightness"),
      s = Me("borderColor"),
      o = Me("borderRadius"),
      i = Me("borderSpacing"),
      a = Me("borderWidth"),
      c = Me("contrast"),
      u = Me("grayscale"),
      f = Me("hueRotate"),
      p = Me("invert"),
      h = Me("gap"),
      w = Me("gradientColorStops"),
      x = Me("gradientColorStopPositions"),
      m = Me("inset"),
      b = Me("margin"),
      g = Me("opacity"),
      v = Me("padding"),
      y = Me("saturate"),
      S = Me("scale"),
      E = Me("sepia"),
      _ = Me("skew"),
      C = Me("space"),
      j = Me("translate"),
      P = () => ["auto", "contain", "none"],
      O = () => ["auto", "hidden", "clip", "visible", "scroll"],
      z = () => ["auto", pe, t],
      R = () => [pe, t],
      D = () => ["", nr, Pr],
      I = () => ["auto", Do, pe],
      G = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
      W = () => ["solid", "dashed", "dotted", "double", "none"],
      te = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
      k = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
      F = () => ["", "0", pe],
      K = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
      Z = () => [Do, pe];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Ri],
        spacing: [nr, Pr],
        blur: ["none", "", Rr, pe],
        brightness: Z(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Rr, pe],
        borderSpacing: R(),
        borderWidth: D(),
        contrast: Z(),
        grayscale: F(),
        hueRotate: Z(),
        invert: F(),
        gap: R(),
        gradientColorStops: [e],
        gradientColorStopPositions: [zj, Pr],
        inset: z(),
        margin: z(),
        opacity: Z(),
        padding: R(),
        saturate: Z(),
        scale: Z(),
        sepia: F(),
        skew: Z(),
        space: R(),
        translate: R()
      },
      classGroups: {
        aspect: [{
          aspect: ["auto", "square", "video", pe]
        }],
        container: ["container"],
        columns: [{
          columns: [Rr]
        }],
        "break-after": [{
          "break-after": K()
        }],
        "break-before": [{
          "break-before": K()
        }],
        "break-inside": [{
          "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
        }],
        "box-decoration": [{
          "box-decoration": ["slice", "clone"]
        }],
        box: [{
          box: ["border", "content"]
        }],
        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
        float: [{
          float: ["right", "left", "none", "start", "end"]
        }],
        clear: [{
          clear: ["left", "right", "both", "none", "start", "end"]
        }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [{
          object: ["contain", "cover", "fill", "none", "scale-down"]
        }],
        "object-position": [{
          object: [...G(), pe]
        }],
        overflow: [{
          overflow: O()
        }],
        "overflow-x": [{
          "overflow-x": O()
        }],
        "overflow-y": [{
          "overflow-y": O()
        }],
        overscroll: [{
          overscroll: P()
        }],
        "overscroll-x": [{
          "overscroll-x": P()
        }],
        "overscroll-y": [{
          "overscroll-y": P()
        }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{
          inset: [m]
        }],
        "inset-x": [{
          "inset-x": [m]
        }],
        "inset-y": [{
          "inset-y": [m]
        }],
        start: [{
          start: [m]
        }],
        end: [{
          end: [m]
        }],
        top: [{
          top: [m]
        }],
        right: [{
          right: [m]
        }],
        bottom: [{
          bottom: [m]
        }],
        left: [{
          left: [m]
        }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{
          z: ["auto", Pi, pe]
        }],
        basis: [{
          basis: z()
        }],
        "flex-direction": [{
          flex: ["row", "row-reverse", "col", "col-reverse"]
        }],
        "flex-wrap": [{
          flex: ["wrap", "wrap-reverse", "nowrap"]
        }],
        flex: [{
          flex: ["1", "auto", "initial", "none", pe]
        }],
        grow: [{
          grow: F()
        }],
        shrink: [{
          shrink: F()
        }],
        order: [{
          order: ["first", "last", "none", Pi, pe]
        }],
        "grid-cols": [{
          "grid-cols": [Ri]
        }],
        "col-start-end": [{
          col: ["auto", {
            span: ["full", Pi, pe]
          }, pe]
        }],
        "col-start": [{
          "col-start": I()
        }],
        "col-end": [{
          "col-end": I()
        }],
        "grid-rows": [{
          "grid-rows": [Ri]
        }],
        "row-start-end": [{
          row: ["auto", {
            span: [Pi, pe]
          }, pe]
        }],
        "row-start": [{
          "row-start": I()
        }],
        "row-end": [{
          "row-end": I()
        }],
        "grid-flow": [{
          "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
        }],
        "auto-cols": [{
          "auto-cols": ["auto", "min", "max", "fr", pe]
        }],
        "auto-rows": [{
          "auto-rows": ["auto", "min", "max", "fr", pe]
        }],
        gap: [{
          gap: [h]
        }],
        "gap-x": [{
          "gap-x": [h]
        }],
        "gap-y": [{
          "gap-y": [h]
        }],
        "justify-content": [{
          justify: ["normal", ...k()]
        }],
        "justify-items": [{
          "justify-items": ["start", "end", "center", "stretch"]
        }],
        "justify-self": [{
          "justify-self": ["auto", "start", "end", "center", "stretch"]
        }],
        "align-content": [{
          content: ["normal", ...k(), "baseline"]
        }],
        "align-items": [{
          items: ["start", "end", "center", "baseline", "stretch"]
        }],
        "align-self": [{
          self: ["auto", "start", "end", "center", "stretch", "baseline"]
        }],
        "place-content": [{
          "place-content": [...k(), "baseline"]
        }],
        "place-items": [{
          "place-items": ["start", "end", "center", "baseline", "stretch"]
        }],
        "place-self": [{
          "place-self": ["auto", "start", "end", "center", "stretch"]
        }],
        p: [{
          p: [v]
        }],
        px: [{
          px: [v]
        }],
        py: [{
          py: [v]
        }],
        ps: [{
          ps: [v]
        }],
        pe: [{
          pe: [v]
        }],
        pt: [{
          pt: [v]
        }],
        pr: [{
          pr: [v]
        }],
        pb: [{
          pb: [v]
        }],
        pl: [{
          pl: [v]
        }],
        m: [{
          m: [b]
        }],
        mx: [{
          mx: [b]
        }],
        my: [{
          my: [b]
        }],
        ms: [{
          ms: [b]
        }],
        me: [{
          me: [b]
        }],
        mt: [{
          mt: [b]
        }],
        mr: [{
          mr: [b]
        }],
        mb: [{
          mb: [b]
        }],
        ml: [{
          ml: [b]
        }],
        "space-x": [{
          "space-x": [C]
        }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{
          "space-y": [C]
        }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{
          w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", pe, t]
        }],
        "min-w": [{
          "min-w": [pe, t, "min", "max", "fit"]
        }],
        "max-w": [{
          "max-w": [pe, t, "none", "full", "min", "max", "fit", "prose", {
            screen: [Rr]
          }, Rr]
        }],
        h: [{
          h: [pe, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
        }],
        "min-h": [{
          "min-h": [pe, t, "min", "max", "fit", "svh", "lvh", "dvh"]
        }],
        "max-h": [{
          "max-h": [pe, t, "min", "max", "fit", "svh", "lvh", "dvh"]
        }],
        size: [{
          size: [pe, t, "auto", "min", "max", "fit"]
        }],
        "font-size": [{
          text: ["base", Rr, Pr]
        }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{
          font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Nd]
        }],
        "font-family": [{
          font: [Ri]
        }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
        tracking: [{
          tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", pe]
        }],
        "line-clamp": [{
          "line-clamp": ["none", Do, Nd]
        }],
        leading: [{
          leading: ["none", "tight", "snug", "normal", "relaxed", "loose", nr, pe]
        }],
        "list-image": [{
          "list-image": ["none", pe]
        }],
        "list-style-type": [{
          list: ["none", "disc", "decimal", pe]
        }],
        "list-style-position": [{
          list: ["inside", "outside"]
        }],
        "placeholder-color": [{
          placeholder: [e]
        }],
        "placeholder-opacity": [{
          "placeholder-opacity": [g]
        }],
        "text-alignment": [{
          text: ["left", "center", "right", "justify", "start", "end"]
        }],
        "text-color": [{
          text: [e]
        }],
        "text-opacity": [{
          "text-opacity": [g]
        }],
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        "text-decoration-style": [{
          decoration: [...W(), "wavy"]
        }],
        "text-decoration-thickness": [{
          decoration: ["auto", "from-font", nr, Pr]
        }],
        "underline-offset": [{
          "underline-offset": ["auto", nr, pe]
        }],
        "text-decoration-color": [{
          decoration: [e]
        }],
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{
          text: ["wrap", "nowrap", "balance", "pretty"]
        }],
        indent: [{
          indent: R()
        }],
        "vertical-align": [{
          align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", pe]
        }],
        whitespace: [{
          whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
        }],
        break: [{
          break: ["normal", "words", "all", "keep"]
        }],
        hyphens: [{
          hyphens: ["none", "manual", "auto"]
        }],
        content: [{
          content: ["none", pe]
        }],
        "bg-attachment": [{
          bg: ["fixed", "local", "scroll"]
        }],
        "bg-clip": [{
          "bg-clip": ["border", "padding", "content", "text"]
        }],
        "bg-opacity": [{
          "bg-opacity": [g]
        }],
        "bg-origin": [{
          "bg-origin": ["border", "padding", "content"]
        }],
        "bg-position": [{
          bg: [...G(), Wj]
        }],
        "bg-repeat": [{
          bg: ["no-repeat", {
            repeat: ["", "x", "y", "round", "space"]
          }]
        }],
        "bg-size": [{
          bg: ["auto", "cover", "contain", Uj]
        }],
        "bg-image": [{
          bg: ["none", {
            "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Zj]
        }],
        "bg-color": [{
          bg: [e]
        }],
        "gradient-from-pos": [{
          from: [x]
        }],
        "gradient-via-pos": [{
          via: [x]
        }],
        "gradient-to-pos": [{
          to: [x]
        }],
        "gradient-from": [{
          from: [w]
        }],
        "gradient-via": [{
          via: [w]
        }],
        "gradient-to": [{
          to: [w]
        }],
        rounded: [{
          rounded: [o]
        }],
        "rounded-s": [{
          "rounded-s": [o]
        }],
        "rounded-e": [{
          "rounded-e": [o]
        }],
        "rounded-t": [{
          "rounded-t": [o]
        }],
        "rounded-r": [{
          "rounded-r": [o]
        }],
        "rounded-b": [{
          "rounded-b": [o]
        }],
        "rounded-l": [{
          "rounded-l": [o]
        }],
        "rounded-ss": [{
          "rounded-ss": [o]
        }],
        "rounded-se": [{
          "rounded-se": [o]
        }],
        "rounded-ee": [{
          "rounded-ee": [o]
        }],
        "rounded-es": [{
          "rounded-es": [o]
        }],
        "rounded-tl": [{
          "rounded-tl": [o]
        }],
        "rounded-tr": [{
          "rounded-tr": [o]
        }],
        "rounded-br": [{
          "rounded-br": [o]
        }],
        "rounded-bl": [{
          "rounded-bl": [o]
        }],
        "border-w": [{
          border: [a]
        }],
        "border-w-x": [{
          "border-x": [a]
        }],
        "border-w-y": [{
          "border-y": [a]
        }],
        "border-w-s": [{
          "border-s": [a]
        }],
        "border-w-e": [{
          "border-e": [a]
        }],
        "border-w-t": [{
          "border-t": [a]
        }],
        "border-w-r": [{
          "border-r": [a]
        }],
        "border-w-b": [{
          "border-b": [a]
        }],
        "border-w-l": [{
          "border-l": [a]
        }],
        "border-opacity": [{
          "border-opacity": [g]
        }],
        "border-style": [{
          border: [...W(), "hidden"]
        }],
        "divide-x": [{
          "divide-x": [a]
        }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{
          "divide-y": [a]
        }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{
          "divide-opacity": [g]
        }],
        "divide-style": [{
          divide: W()
        }],
        "border-color": [{
          border: [s]
        }],
        "border-color-x": [{
          "border-x": [s]
        }],
        "border-color-y": [{
          "border-y": [s]
        }],
        "border-color-t": [{
          "border-t": [s]
        }],
        "border-color-r": [{
          "border-r": [s]
        }],
        "border-color-b": [{
          "border-b": [s]
        }],
        "border-color-l": [{
          "border-l": [s]
        }],
        "divide-color": [{
          divide: [s]
        }],
        "outline-style": [{
          outline: ["", ...W()]
        }],
        "outline-offset": [{
          "outline-offset": [nr, pe]
        }],
        "outline-w": [{
          outline: [nr, Pr]
        }],
        "outline-color": [{
          outline: [e]
        }],
        "ring-w": [{
          ring: D()
        }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{
          ring: [e]
        }],
        "ring-opacity": [{
          "ring-opacity": [g]
        }],
        "ring-offset-w": [{
          "ring-offset": [nr, Pr]
        }],
        "ring-offset-color": [{
          "ring-offset": [e]
        }],
        shadow: [{
          shadow: ["", "inner", "none", Rr, Gj]
        }],
        "shadow-color": [{
          shadow: [Ri]
        }],
        opacity: [{
          opacity: [g]
        }],
        "mix-blend": [{
          "mix-blend": [...te(), "plus-lighter", "plus-darker"]
        }],
        "bg-blend": [{
          "bg-blend": te()
        }],
        filter: [{
          filter: ["", "none"]
        }],
        blur: [{
          blur: [n]
        }],
        brightness: [{
          brightness: [r]
        }],
        contrast: [{
          contrast: [c]
        }],
        "drop-shadow": [{
          "drop-shadow": ["", "none", Rr, pe]
        }],
        grayscale: [{
          grayscale: [u]
        }],
        "hue-rotate": [{
          "hue-rotate": [f]
        }],
        invert: [{
          invert: [p]
        }],
        saturate: [{
          saturate: [y]
        }],
        sepia: [{
          sepia: [E]
        }],
        "backdrop-filter": [{
          "backdrop-filter": ["", "none"]
        }],
        "backdrop-blur": [{
          "backdrop-blur": [n]
        }],
        "backdrop-brightness": [{
          "backdrop-brightness": [r]
        }],
        "backdrop-contrast": [{
          "backdrop-contrast": [c]
        }],
        "backdrop-grayscale": [{
          "backdrop-grayscale": [u]
        }],
        "backdrop-hue-rotate": [{
          "backdrop-hue-rotate": [f]
        }],
        "backdrop-invert": [{
          "backdrop-invert": [p]
        }],
        "backdrop-opacity": [{
          "backdrop-opacity": [g]
        }],
        "backdrop-saturate": [{
          "backdrop-saturate": [y]
        }],
        "backdrop-sepia": [{
          "backdrop-sepia": [E]
        }],
        "border-collapse": [{
          border: ["collapse", "separate"]
        }],
        "border-spacing": [{
          "border-spacing": [i]
        }],
        "border-spacing-x": [{
          "border-spacing-x": [i]
        }],
        "border-spacing-y": [{
          "border-spacing-y": [i]
        }],
        "table-layout": [{
          table: ["auto", "fixed"]
        }],
        caption: [{
          caption: ["top", "bottom"]
        }],
        transition: [{
          transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", pe]
        }],
        duration: [{
          duration: Z()
        }],
        ease: [{
          ease: ["linear", "in", "out", "in-out", pe]
        }],
        delay: [{
          delay: Z()
        }],
        animate: [{
          animate: ["none", "spin", "ping", "pulse", "bounce", pe]
        }],
        transform: [{
          transform: ["", "gpu", "none"]
        }],
        scale: [{
          scale: [S]
        }],
        "scale-x": [{
          "scale-x": [S]
        }],
        "scale-y": [{
          "scale-y": [S]
        }],
        rotate: [{
          rotate: [Pi, pe]
        }],
        "translate-x": [{
          "translate-x": [j]
        }],
        "translate-y": [{
          "translate-y": [j]
        }],
        "skew-x": [{
          "skew-x": [_]
        }],
        "skew-y": [{
          "skew-y": [_]
        }],
        "transform-origin": [{
          origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", pe]
        }],
        accent: [{
          accent: ["auto", e]
        }],
        appearance: [{
          appearance: ["none", "auto"]
        }],
        cursor: [{
          cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", pe]
        }],
        "caret-color": [{
          caret: [e]
        }],
        "pointer-events": [{
          "pointer-events": ["none", "auto"]
        }],
        resize: [{
          resize: ["none", "y", "x", ""]
        }],
        "scroll-behavior": [{
          scroll: ["auto", "smooth"]
        }],
        "scroll-m": [{
          "scroll-m": R()
        }],
        "scroll-mx": [{
          "scroll-mx": R()
        }],
        "scroll-my": [{
          "scroll-my": R()
        }],
        "scroll-ms": [{
          "scroll-ms": R()
        }],
        "scroll-me": [{
          "scroll-me": R()
        }],
        "scroll-mt": [{
          "scroll-mt": R()
        }],
        "scroll-mr": [{
          "scroll-mr": R()
        }],
        "scroll-mb": [{
          "scroll-mb": R()
        }],
        "scroll-ml": [{
          "scroll-ml": R()
        }],
        "scroll-p": [{
          "scroll-p": R()
        }],
        "scroll-px": [{
          "scroll-px": R()
        }],
        "scroll-py": [{
          "scroll-py": R()
        }],
        "scroll-ps": [{
          "scroll-ps": R()
        }],
        "scroll-pe": [{
          "scroll-pe": R()
        }],
        "scroll-pt": [{
          "scroll-pt": R()
        }],
        "scroll-pr": [{
          "scroll-pr": R()
        }],
        "scroll-pb": [{
          "scroll-pb": R()
        }],
        "scroll-pl": [{
          "scroll-pl": R()
        }],
        "snap-align": [{
          snap: ["start", "end", "center", "align-none"]
        }],
        "snap-stop": [{
          snap: ["normal", "always"]
        }],
        "snap-type": [{
          snap: ["none", "x", "y", "both"]
        }],
        "snap-strictness": [{
          snap: ["mandatory", "proximity"]
        }],
        touch: [{
          touch: ["auto", "none", "manipulation"]
        }],
        "touch-x": [{
          "touch-pan": ["x", "left", "right"]
        }],
        "touch-y": [{
          "touch-pan": ["y", "up", "down"]
        }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{
          select: ["none", "text", "all", "auto"]
        }],
        "will-change": [{
          "will-change": ["auto", "scroll", "contents", "transform", pe]
        }],
        fill: [{
          fill: [e, "none"]
        }],
        "stroke-w": [{
          stroke: [nr, Pr, Nd]
        }],
        stroke: [{
          stroke: [e, "none"]
        }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{
          "forced-color-adjust": ["auto", "none"]
        }]
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"]
      },
      conflictingClassGroupModifiers: {
        "font-size": ["leading"]
      }
    }
  },
  qj = Oj(Xj);

function ee(...e) {
  return qj(Z0(e))
}
const Jj = vj,
  tw = d.forwardRef(({
    className: e,
    ...t
  }, n) => l.jsx($0, {
    ref: n,
    className: ee("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
  }));
tw.displayName = $0.displayName;
const ek = fu("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }),
  nw = d.forwardRef(({
    className: e,
    variant: t,
    ...n
  }, r) => l.jsx(V0, {
    ref: r,
    className: ee(ek({
      variant: t
    }), e),
    ...n
  }));
nw.displayName = V0.displayName;
const tk = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx(U0, {
  ref: n,
  className: ee("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
  ...t
}));
tk.displayName = U0.displayName;
const rw = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx(W0, {
  ref: n,
  className: ee("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
  "toast-close": "",
  ...t,
  children: l.jsx(vh, {
    className: "h-4 w-4"
  })
}));
rw.displayName = W0.displayName;
const sw = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx(z0, {
  ref: n,
  className: ee("text-sm font-semibold", e),
  ...t
}));
sw.displayName = z0.displayName;
const ow = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx(B0, {
  ref: n,
  className: ee("text-sm opacity-90", e),
  ...t
}));
ow.displayName = B0.displayName;

function nk() {
  const {
    toasts: e
  } = Qs();
  return l.jsxs(Jj, {
    children: [e.map(function ({
      id: t,
      title: n,
      description: r,
      action: s,
      ...o
    }) {
      return l.jsxs(nw, {
        ...o,
        children: [l.jsxs("div", {
          className: "grid gap-1",
          children: [n && l.jsx(sw, {
            children: n
          }), r && l.jsx(ow, {
            children: r
          })]
        }), s, l.jsx(rw, {})]
      }, t)
    }), l.jsx(tw, {})]
  })
}
var Vv = ["light", "dark"],
  rk = "(prefers-color-scheme: dark)",
  sk = d.createContext(void 0),
  ok = {
    setTheme: e => {},
    themes: []
  },
  ik = () => {
    var e;
    return (e = d.useContext(sk)) != null ? e : ok
  };
d.memo(({
  forcedTheme: e,
  storageKey: t,
  attribute: n,
  enableSystem: r,
  enableColorScheme: s,
  defaultTheme: o,
  value: i,
  attrs: a,
  nonce: c
}) => {
  let u = o === "system",
    f = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map(x=>`'${x}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`,
    p = s ? Vv.includes(o) && o ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "",
    h = (x, m = !1, b = !0) => {
      let g = i ? i[x] : x,
        v = m ? x + "|| ''" : `'${g}'`,
        y = "";
      return s && b && !m && Vv.includes(x) && (y += `d.style.colorScheme = '${x}';`), n === "class" ? m || g ? y += `c.add(${v})` : y += "null" : g && (y += `d[s](n,${v})`), y
    },
    w = e ? `!function(){${f}${h(e)}}()` : r ? `!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${rk}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${i?`var x=${JSON.stringify(i)};`:""}${h(i?"x[e]":"e",!0)}}${u?"":"else{"+h(o,!1,!1)+"}"}${p}}catch(e){}}()` : `!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${i?`var x=${JSON.stringify(i)};`:""}${h(i?"x[e]":"e",!0)}}else{${h(o,!1,!1)};}${p}}catch(t){}}();`;
  return d.createElement("script", {
    nonce: c,
    dangerouslySetInnerHTML: {
      __html: w
    }
  })
});
var ak = e => {
    switch (e) {
      case "success":
        return uk;
      case "info":
        return fk;
      case "warning":
        return dk;
      case "error":
        return pk;
      default:
        return null
    }
  },
  lk = Array(12).fill(0),
  ck = ({
    visible: e
  }) => L.createElement("div", {
    className: "sonner-loading-wrapper",
    "data-visible": e
  }, L.createElement("div", {
    className: "sonner-spinner"
  }, lk.map((t, n) => L.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${n}`
  })))),
  uk = L.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, L.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
  })),
  dk = L.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, L.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
  })),
  fk = L.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, L.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
  })),
  pk = L.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, L.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  })),
  hk = () => {
    let [e, t] = L.useState(document.hidden);
    return L.useEffect(() => {
      let n = () => {
        t(document.hidden)
      };
      return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n)
    }, []), e
  },
  Hf = 1,
  mk = class {
    constructor() {
      this.subscribe = e => (this.subscribers.push(e), () => {
        let t = this.subscribers.indexOf(e);
        this.subscribers.splice(t, 1)
      }), this.publish = e => {
        this.subscribers.forEach(t => t(e))
      }, this.addToast = e => {
        this.publish(e), this.toasts = [...this.toasts, e]
      }, this.create = e => {
        var t;
        let {
          message: n,
          ...r
        } = e, s = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Hf++, o = this.toasts.find(a => a.id === s), i = e.dismissible === void 0 ? !0 : e.dismissible;
        return o ? this.toasts = this.toasts.map(a => a.id === s ? (this.publish({
          ...a,
          ...e,
          id: s,
          title: n
        }), {
          ...a,
          ...e,
          id: s,
          dismissible: i,
          title: n
        }) : a) : this.addToast({
          title: n,
          ...r,
          dismissible: i,
          id: s
        }), s
      }, this.dismiss = e => (e || this.toasts.forEach(t => {
        this.subscribers.forEach(n => n({
          id: t.id,
          dismiss: !0
        }))
      }), this.subscribers.forEach(t => t({
        id: e,
        dismiss: !0
      })), e), this.message = (e, t) => this.create({
        ...t,
        message: e
      }), this.error = (e, t) => this.create({
        ...t,
        message: e,
        type: "error"
      }), this.success = (e, t) => this.create({
        ...t,
        type: "success",
        message: e
      }), this.info = (e, t) => this.create({
        ...t,
        type: "info",
        message: e
      }), this.warning = (e, t) => this.create({
        ...t,
        type: "warning",
        message: e
      }), this.loading = (e, t) => this.create({
        ...t,
        type: "loading",
        message: e
      }), this.promise = (e, t) => {
        if (!t) return;
        let n;
        t.loading !== void 0 && (n = this.create({
          ...t,
          promise: e,
          type: "loading",
          message: t.loading,
          description: typeof t.description != "function" ? t.description : void 0
        }));
        let r = e instanceof Promise ? e : e(),
          s = n !== void 0;
        return r.then(async o => {
          if (gk(o) && !o.ok) {
            s = !1;
            let i = typeof t.error == "function" ? await t.error(`HTTP error! status: ${o.status}`) : t.error,
              a = typeof t.description == "function" ? await t.description(`HTTP error! status: ${o.status}`) : t.description;
            this.create({
              id: n,
              type: "error",
              message: i,
              description: a
            })
          } else if (t.success !== void 0) {
            s = !1;
            let i = typeof t.success == "function" ? await t.success(o) : t.success,
              a = typeof t.description == "function" ? await t.description(o) : t.description;
            this.create({
              id: n,
              type: "success",
              message: i,
              description: a
            })
          }
        }).catch(async o => {
          if (t.error !== void 0) {
            s = !1;
            let i = typeof t.error == "function" ? await t.error(o) : t.error,
              a = typeof t.description == "function" ? await t.description(o) : t.description;
            this.create({
              id: n,
              type: "error",
              message: i,
              description: a
            })
          }
        }).finally(() => {
          var o;
          s && (this.dismiss(n), n = void 0), (o = t.finally) == null || o.call(t)
        }), n
      }, this.custom = (e, t) => {
        let n = (t == null ? void 0 : t.id) || Hf++;
        return this.create({
          jsx: e(n),
          id: n,
          ...t
        }), n
      }, this.subscribers = [], this.toasts = []
    }
  },
  Gt = new mk,
  vk = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Hf++;
    return Gt.addToast({
      title: e,
      ...t,
      id: n
    }), n
  },
  gk = e => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number",
  yk = vk,
  xk = () => Gt.toasts;
Object.assign(yk, {
  success: Gt.success,
  info: Gt.info,
  warning: Gt.warning,
  error: Gt.error,
  custom: Gt.custom,
  message: Gt.message,
  promise: Gt.promise,
  dismiss: Gt.dismiss,
  loading: Gt.loading
}, {
  getHistory: xk
});

function wk(e, {
  insertAt: t
} = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
wk(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);

function Sl(e) {
  return e.label !== void 0
}
var bk = 3,
  Sk = "32px",
  Ek = 4e3,
  Ck = 356,
  Nk = 14,
  _k = 20,
  jk = 200;

function kk(...e) {
  return e.filter(Boolean).join(" ")
}
var Tk = e => {
  var t, n, r, s, o, i, a, c, u, f;
  let {
    invert: p,
    toast: h,
    unstyled: w,
    interacting: x,
    setHeights: m,
    visibleToasts: b,
    heights: g,
    index: v,
    toasts: y,
    expanded: S,
    removeToast: E,
    defaultRichColors: _,
    closeButton: C,
    style: j,
    cancelButtonStyle: P,
    actionButtonStyle: O,
    className: z = "",
    descriptionClassName: R = "",
    duration: D,
    position: I,
    gap: G,
    loadingIcon: W,
    expandByDefault: te,
    classNames: k,
    icons: F,
    closeButtonAriaLabel: K = "Close toast",
    pauseWhenPageIsHidden: Z,
    cn: re
  } = e, [de, Ee] = L.useState(!1), [nt, ge] = L.useState(!1), [ie, xe] = L.useState(!1), [Oe, we] = L.useState(!1), [Ce, be] = L.useState(0), [dt, xt] = L.useState(0), tr = L.useRef(null), Wt = L.useRef(null), _r = v === 0, N = v + 1 <= b, T = h.type, A = h.dismissible !== !1, Y = h.className || "", H = h.descriptionClassName || "", B = L.useMemo(() => g.findIndex(fe => fe.toastId === h.id) || 0, [g, h.id]), se = L.useMemo(() => {
    var fe;
    return (fe = h.closeButton) != null ? fe : C
  }, [h.closeButton, C]), Ne = L.useMemo(() => h.duration || D || Ek, [h.duration, D]), He = L.useRef(0), De = L.useRef(0), In = L.useRef(0), jr = L.useRef(null), [Js, wi] = I.split("-"), el = L.useMemo(() => g.reduce((fe, Ie, Re) => Re >= B ? fe : fe + Ie.height, 0), [g, B]), bi = hk(), Ku = h.invert || p, eo = T === "loading";
  De.current = L.useMemo(() => B * G + el, [B, el]), L.useEffect(() => {
    Ee(!0)
  }, []), L.useLayoutEffect(() => {
    if (!de) return;
    let fe = Wt.current,
      Ie = fe.style.height;
    fe.style.height = "auto";
    let Re = fe.getBoundingClientRect().height;
    fe.style.height = Ie, xt(Re), m(Mn => Mn.find(Ln => Ln.toastId === h.id) ? Mn.map(Ln => Ln.toastId === h.id ? {
      ...Ln,
      height: Re
    } : Ln) : [{
      toastId: h.id,
      height: Re,
      position: h.position
    }, ...Mn])
  }, [de, h.title, h.description, m, h.id]);
  let kr = L.useCallback(() => {
    ge(!0), be(De.current), m(fe => fe.filter(Ie => Ie.toastId !== h.id)), setTimeout(() => {
      E(h)
    }, jk)
  }, [h, E, m, De]);
  L.useEffect(() => {
    if (h.promise && T === "loading" || h.duration === 1 / 0 || h.type === "loading") return;
    let fe, Ie = Ne;
    return S || x || Z && bi ? (() => {
      if (In.current < He.current) {
        let Re = new Date().getTime() - He.current;
        Ie = Ie - Re
      }
      In.current = new Date().getTime()
    })() : Ie !== 1 / 0 && (He.current = new Date().getTime(), fe = setTimeout(() => {
      var Re;
      (Re = h.onAutoClose) == null || Re.call(h, h), kr()
    }, Ie)), () => clearTimeout(fe)
  }, [S, x, te, h, Ne, kr, h.promise, T, Z, bi]), L.useEffect(() => {
    let fe = Wt.current;
    if (fe) {
      let Ie = fe.getBoundingClientRect().height;
      return xt(Ie), m(Re => [{
        toastId: h.id,
        height: Ie,
        position: h.position
      }, ...Re]), () => m(Re => Re.filter(Mn => Mn.toastId !== h.id))
    }
  }, [m, h.id]), L.useEffect(() => {
    h.delete && kr()
  }, [kr, h.delete]);

  function JE() {
    return F != null && F.loading ? L.createElement("div", {
      className: "sonner-loader",
      "data-visible": T === "loading"
    }, F.loading) : W ? L.createElement("div", {
      className: "sonner-loader",
      "data-visible": T === "loading"
    }, W) : L.createElement(ck, {
      visible: T === "loading"
    })
  }
  return L.createElement("li", {
    "aria-live": h.important ? "assertive" : "polite",
    "aria-atomic": "true",
    role: "status",
    tabIndex: 0,
    ref: Wt,
    className: re(z, Y, k == null ? void 0 : k.toast, (t = h == null ? void 0 : h.classNames) == null ? void 0 : t.toast, k == null ? void 0 : k.default, k == null ? void 0 : k[T], (n = h == null ? void 0 : h.classNames) == null ? void 0 : n[T]),
    "data-sonner-toast": "",
    "data-rich-colors": (r = h.richColors) != null ? r : _,
    "data-styled": !(h.jsx || h.unstyled || w),
    "data-mounted": de,
    "data-promise": !!h.promise,
    "data-removed": nt,
    "data-visible": N,
    "data-y-position": Js,
    "data-x-position": wi,
    "data-index": v,
    "data-front": _r,
    "data-swiping": ie,
    "data-dismissible": A,
    "data-type": T,
    "data-invert": Ku,
    "data-swipe-out": Oe,
    "data-expanded": !!(S || te && de),
    style: {
      "--index": v,
      "--toasts-before": v,
      "--z-index": y.length - v,
      "--offset": `${nt?Ce:De.current}px`,
      "--initial-height": te ? "auto" : `${dt}px`,
      ...j,
      ...h.style
    },
    onPointerDown: fe => {
      eo || !A || (tr.current = new Date, be(De.current), fe.target.setPointerCapture(fe.pointerId), fe.target.tagName !== "BUTTON" && (xe(!0), jr.current = {
        x: fe.clientX,
        y: fe.clientY
      }))
    },
    onPointerUp: () => {
      var fe, Ie, Re, Mn;
      if (Oe || !A) return;
      jr.current = null;
      let Ln = Number(((fe = Wt.current) == null ? void 0 : fe.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0),
        tl = new Date().getTime() - ((Ie = tr.current) == null ? void 0 : Ie.getTime()),
        eC = Math.abs(Ln) / tl;
      if (Math.abs(Ln) >= _k || eC > .11) {
        be(De.current), (Re = h.onDismiss) == null || Re.call(h, h), kr(), we(!0);
        return
      }(Mn = Wt.current) == null || Mn.style.setProperty("--swipe-amount", "0px"), xe(!1)
    },
    onPointerMove: fe => {
      var Ie;
      if (!jr.current || !A) return;
      let Re = fe.clientY - jr.current.y,
        Mn = fe.clientX - jr.current.x,
        Ln = (Js === "top" ? Math.min : Math.max)(0, Re),
        tl = fe.pointerType === "touch" ? 10 : 2;
      Math.abs(Ln) > tl ? (Ie = Wt.current) == null || Ie.style.setProperty("--swipe-amount", `${Re}px`) : Math.abs(Mn) > tl && (jr.current = null)
    }
  }, se && !h.jsx ? L.createElement("button", {
    "aria-label": K,
    "data-disabled": eo,
    "data-close-button": !0,
    onClick: eo || !A ? () => {} : () => {
      var fe;
      kr(), (fe = h.onDismiss) == null || fe.call(h, h)
    },
    className: re(k == null ? void 0 : k.closeButton, (s = h == null ? void 0 : h.classNames) == null ? void 0 : s.closeButton)
  }, L.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, L.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), L.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))) : null, h.jsx || L.isValidElement(h.title) ? h.jsx || h.title : L.createElement(L.Fragment, null, T || h.icon || h.promise ? L.createElement("div", {
    "data-icon": "",
    className: re(k == null ? void 0 : k.icon, (o = h == null ? void 0 : h.classNames) == null ? void 0 : o.icon)
  }, h.promise || h.type === "loading" && !h.icon ? h.icon || JE() : null, h.type !== "loading" ? h.icon || (F == null ? void 0 : F[T]) || ak(T) : null) : null, L.createElement("div", {
    "data-content": "",
    className: re(k == null ? void 0 : k.content, (i = h == null ? void 0 : h.classNames) == null ? void 0 : i.content)
  }, L.createElement("div", {
    "data-title": "",
    className: re(k == null ? void 0 : k.title, (a = h == null ? void 0 : h.classNames) == null ? void 0 : a.title)
  }, h.title), h.description ? L.createElement("div", {
    "data-description": "",
    className: re(R, H, k == null ? void 0 : k.description, (c = h == null ? void 0 : h.classNames) == null ? void 0 : c.description)
  }, h.description) : null), L.isValidElement(h.cancel) ? h.cancel : h.cancel && Sl(h.cancel) ? L.createElement("button", {
    "data-button": !0,
    "data-cancel": !0,
    style: h.cancelButtonStyle || P,
    onClick: fe => {
      var Ie, Re;
      Sl(h.cancel) && A && ((Re = (Ie = h.cancel).onClick) == null || Re.call(Ie, fe), kr())
    },
    className: re(k == null ? void 0 : k.cancelButton, (u = h == null ? void 0 : h.classNames) == null ? void 0 : u.cancelButton)
  }, h.cancel.label) : null, L.isValidElement(h.action) ? h.action : h.action && Sl(h.action) ? L.createElement("button", {
    "data-button": !0,
    "data-action": !0,
    style: h.actionButtonStyle || O,
    onClick: fe => {
      var Ie, Re;
      Sl(h.action) && (fe.defaultPrevented || ((Re = (Ie = h.action).onClick) == null || Re.call(Ie, fe), kr()))
    },
    className: re(k == null ? void 0 : k.actionButton, (f = h == null ? void 0 : h.classNames) == null ? void 0 : f.actionButton)
  }, h.action.label) : null))
};

function zv() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
var Pk = e => {
  let {
    invert: t,
    position: n = "bottom-right",
    hotkey: r = ["altKey", "KeyT"],
    expand: s,
    closeButton: o,
    className: i,
    offset: a,
    theme: c = "light",
    richColors: u,
    duration: f,
    style: p,
    visibleToasts: h = bk,
    toastOptions: w,
    dir: x = zv(),
    gap: m = Nk,
    loadingIcon: b,
    icons: g,
    containerAriaLabel: v = "Notifications",
    pauseWhenPageIsHidden: y,
    cn: S = kk
  } = e, [E, _] = L.useState([]), C = L.useMemo(() => Array.from(new Set([n].concat(E.filter(Z => Z.position).map(Z => Z.position)))), [E, n]), [j, P] = L.useState([]), [O, z] = L.useState(!1), [R, D] = L.useState(!1), [I, G] = L.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), W = L.useRef(null), te = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), k = L.useRef(null), F = L.useRef(!1), K = L.useCallback(Z => {
    var re;
    (re = E.find(de => de.id === Z.id)) != null && re.delete || Gt.dismiss(Z.id), _(de => de.filter(({
      id: Ee
    }) => Ee !== Z.id))
  }, [E]);
  return L.useEffect(() => Gt.subscribe(Z => {
    if (Z.dismiss) {
      _(re => re.map(de => de.id === Z.id ? {
        ...de,
        delete: !0
      } : de));
      return
    }
    setTimeout(() => {
      Za.flushSync(() => {
        _(re => {
          let de = re.findIndex(Ee => Ee.id === Z.id);
          return de !== -1 ? [...re.slice(0, de), {
            ...re[de],
            ...Z
          }, ...re.slice(de + 1)] : [Z, ...re]
        })
      })
    })
  }), []), L.useEffect(() => {
    if (c !== "system") {
      G(c);
      return
    }
    c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? G("dark") : G("light")), typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({
      matches: Z
    }) => {
      G(Z ? "dark" : "light")
    })
  }, [c]), L.useEffect(() => {
    E.length <= 1 && z(!1)
  }, [E]), L.useEffect(() => {
    let Z = re => {
      var de, Ee;
      r.every(nt => re[nt] || re.code === nt) && (z(!0), (de = W.current) == null || de.focus()), re.code === "Escape" && (document.activeElement === W.current || (Ee = W.current) != null && Ee.contains(document.activeElement)) && z(!1)
    };
    return document.addEventListener("keydown", Z), () => document.removeEventListener("keydown", Z)
  }, [r]), L.useEffect(() => {
    if (W.current) return () => {
      k.current && (k.current.focus({
        preventScroll: !0
      }), k.current = null, F.current = !1)
    }
  }, [W.current]), E.length ? L.createElement("section", {
    "aria-label": `${v} ${te}`,
    tabIndex: -1
  }, C.map((Z, re) => {
    var de;
    let [Ee, nt] = Z.split("-");
    return L.createElement("ol", {
      key: Z,
      dir: x === "auto" ? zv() : x,
      tabIndex: -1,
      ref: W,
      className: i,
      "data-sonner-toaster": !0,
      "data-theme": I,
      "data-y-position": Ee,
      "data-x-position": nt,
      style: {
        "--front-toast-height": `${((de=j[0])==null?void 0:de.height)||0}px`,
        "--offset": typeof a == "number" ? `${a}px` : a || Sk,
        "--width": `${Ck}px`,
        "--gap": `${m}px`,
        ...p
      },
      onBlur: ge => {
        F.current && !ge.currentTarget.contains(ge.relatedTarget) && (F.current = !1, k.current && (k.current.focus({
          preventScroll: !0
        }), k.current = null))
      },
      onFocus: ge => {
        ge.target instanceof HTMLElement && ge.target.dataset.dismissible === "false" || F.current || (F.current = !0, k.current = ge.relatedTarget)
      },
      onMouseEnter: () => z(!0),
      onMouseMove: () => z(!0),
      onMouseLeave: () => {
        R || z(!1)
      },
      onPointerDown: ge => {
        ge.target instanceof HTMLElement && ge.target.dataset.dismissible === "false" || D(!0)
      },
      onPointerUp: () => D(!1)
    }, E.filter(ge => !ge.position && re === 0 || ge.position === Z).map((ge, ie) => {
      var xe, Oe;
      return L.createElement(Tk, {
        key: ge.id,
        icons: g,
        index: ie,
        toast: ge,
        defaultRichColors: u,
        duration: (xe = w == null ? void 0 : w.duration) != null ? xe : f,
        className: w == null ? void 0 : w.className,
        descriptionClassName: w == null ? void 0 : w.descriptionClassName,
        invert: t,
        visibleToasts: h,
        closeButton: (Oe = w == null ? void 0 : w.closeButton) != null ? Oe : o,
        interacting: R,
        position: Z,
        style: w == null ? void 0 : w.style,
        unstyled: w == null ? void 0 : w.unstyled,
        classNames: w == null ? void 0 : w.classNames,
        cancelButtonStyle: w == null ? void 0 : w.cancelButtonStyle,
        actionButtonStyle: w == null ? void 0 : w.actionButtonStyle,
        removeToast: K,
        toasts: E.filter(we => we.position == ge.position),
        heights: j.filter(we => we.position == ge.position),
        setHeights: P,
        expandByDefault: s,
        gap: m,
        loadingIcon: b,
        expanded: O,
        pauseWhenPageIsHidden: y,
        cn: S
      })
    }))
  })) : null
};
const Rk = ({
  ...e
}) => {
  const {
    theme: t = "system"
  } = ik();
  return l.jsx(Pk, {
    theme: t,
    className: "toaster group",
    toastOptions: {
      classNames: {
        toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-muted-foreground",
        actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
      }
    },
    ...e
  })
};

function Ak(e, t = []) {
  let n = [];

  function r(o, i) {
    const a = d.createContext(i),
      c = n.length;
    n = [...n, i];
    const u = p => {
      var g;
      const {
        scope: h,
        children: w,
        ...x
      } = p, m = ((g = h == null ? void 0 : h[e]) == null ? void 0 : g[c]) || a, b = d.useMemo(() => x, Object.values(x));
      return l.jsx(m.Provider, {
        value: b,
        children: w
      })
    };
    u.displayName = o + "Provider";

    function f(p, h) {
      var m;
      const w = ((m = h == null ? void 0 : h[e]) == null ? void 0 : m[c]) || a,
        x = d.useContext(w);
      if (x) return x;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${o}\``)
    }
    return [u, f]
  }
  const s = () => {
    const o = n.map(i => d.createContext(i));
    return function (a) {
      const c = (a == null ? void 0 : a[e]) || o;
      return d.useMemo(() => ({
        [`__scope${e}`]: {
          ...a,
          [e]: c
        }
      }), [a, c])
    }
  };
  return s.scopeName = e, [r, Ok(s, ...t)]
}

function Ok(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map(s => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function (o) {
      const i = r.reduce((a, {
        useScope: c,
        scopeName: u
      }) => {
        const p = c(o)[`__scope${u}`];
        return {
          ...a,
          ...p
        }
      }, {});
      return d.useMemo(() => ({
        [`__scope${t.scopeName}`]: i
      }), [i])
    }
  };
  return n.scopeName = t.scopeName, n
}
var Dk = "DismissableLayer",
  Zf = "dismissableLayer.update",
  Ik = "dismissableLayer.pointerDownOutside",
  Mk = "dismissableLayer.focusOutside",
  Bv, iw = d.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
  }),
  yh = d.forwardRef((e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: s,
      onFocusOutside: o,
      onInteractOutside: i,
      onDismiss: a,
      ...c
    } = e, u = d.useContext(iw), [f, p] = d.useState(null), h = (f == null ? void 0 : f.ownerDocument) ? ? (globalThis == null ? void 0 : globalThis.document), [, w] = d.useState({}), x = ue(t, C => p(C)), m = Array.from(u.layers), [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), g = m.indexOf(b), v = f ? m.indexOf(f) : -1, y = u.layersWithOutsidePointerEventsDisabled.size > 0, S = v >= g, E = $k(C => {
      const j = C.target,
        P = [...u.branches].some(O => O.contains(j));
      !S || P || (s == null || s(C), i == null || i(C), C.defaultPrevented || a == null || a())
    }, h), _ = Vk(C => {
      const j = C.target;
      [...u.branches].some(O => O.contains(j)) || (o == null || o(C), i == null || i(C), C.defaultPrevented || a == null || a())
    }, h);
    return cu(C => {
      v === u.layers.size - 1 && (r == null || r(C), !C.defaultPrevented && a && (C.preventDefault(), a()))
    }, h), d.useEffect(() => {
      if (f) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Bv = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), Uv(), () => {
        n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Bv)
      }
    }, [f, h, n, u]), d.useEffect(() => () => {
      f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), Uv())
    }, [f, u]), d.useEffect(() => {
      const C = () => w({});
      return document.addEventListener(Zf, C), () => document.removeEventListener(Zf, C)
    }, []), l.jsx(ne.div, {
      ...c,
      ref: x,
      style: {
        pointerEvents: y ? S ? "auto" : "none" : void 0,
        ...e.style
      },
      onFocusCapture: q(e.onFocusCapture, _.onFocusCapture),
      onBlurCapture: q(e.onBlurCapture, _.onBlurCapture),
      onPointerDownCapture: q(e.onPointerDownCapture, E.onPointerDownCapture)
    })
  });
yh.displayName = Dk;
var Lk = "DismissableLayerBranch",
  Fk = d.forwardRef((e, t) => {
    const n = d.useContext(iw),
      r = d.useRef(null),
      s = ue(t, r);
    return d.useEffect(() => {
      const o = r.current;
      if (o) return n.branches.add(o), () => {
        n.branches.delete(o)
      }
    }, [n.branches]), l.jsx(ne.div, {
      ...e,
      ref: s
    })
  });
Fk.displayName = Lk;

function $k(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = it(e),
    r = d.useRef(!1),
    s = d.useRef(() => {});
  return d.useEffect(() => {
    const o = a => {
        if (a.target && !r.current) {
          let c = function () {
            aw(Ik, n, u, {
              discrete: !0
            })
          };
          const u = {
            originalEvent: a
          };
          a.pointerType === "touch" ? (t.removeEventListener("click", s.current), s.current = c, t.addEventListener("click", s.current, {
            once: !0
          })) : c()
        } else t.removeEventListener("click", s.current);
        r.current = !1
      },
      i = window.setTimeout(() => {
        t.addEventListener("pointerdown", o)
      }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", o), t.removeEventListener("click", s.current)
    }
  }, [t, n]), {
    onPointerDownCapture: () => r.current = !0
  }
}

function Vk(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = it(e),
    r = d.useRef(!1);
  return d.useEffect(() => {
    const s = o => {
      o.target && !r.current && aw(Mk, n, {
        originalEvent: o
      }, {
        discrete: !1
      })
    };
    return t.addEventListener("focusin", s), () => t.removeEventListener("focusin", s)
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  }
}

function Uv() {
  const e = new CustomEvent(Zf);
  document.dispatchEvent(e)
}

function aw(e, t, n, {
  discrete: r
}) {
  const s = n.originalEvent.target,
    o = new CustomEvent(e, {
      bubbles: !1,
      cancelable: !0,
      detail: n
    });
  t && s.addEventListener(e, t, {
    once: !0
  }), r ? Ga(s, o) : s.dispatchEvent(o)
}
var zk = vy.useId || (() => {}),
  Bk = 0;

function _n(e) {
  const [t, n] = d.useState(zk());
  return We(() => {
    e || n(r => r ? ? String(Bk++))
  }, [e]), e || (t ? `radix-${t}` : "")
}
const Uk = ["top", "right", "bottom", "left"],
  as = Math.min,
  Yt = Math.max,
  Ec = Math.round,
  El = Math.floor,
  ls = e => ({
    x: e,
    y: e
  }),
  Wk = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  },
  Hk = {
    start: "end",
    end: "start"
  };

function Gf(e, t, n) {
  return Yt(e, as(t, n))
}

function xr(e, t) {
  return typeof e == "function" ? e(t) : e
}

function wr(e) {
  return e.split("-")[0]
}

function mi(e) {
  return e.split("-")[1]
}

function xh(e) {
  return e === "x" ? "y" : "x"
}

function wh(e) {
  return e === "y" ? "height" : "width"
}

function cs(e) {
  return ["top", "bottom"].includes(wr(e)) ? "y" : "x"
}

function bh(e) {
  return xh(cs(e))
}

function Zk(e, t, n) {
  n === void 0 && (n = !1);
  const r = mi(e),
    s = bh(e),
    o = wh(s);
  let i = s === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (i = Cc(i)), [i, Cc(i)]
}

function Gk(e) {
  const t = Cc(e);
  return [Kf(e), t, Kf(t)]
}

function Kf(e) {
  return e.replace(/start|end/g, t => Hk[t])
}

function Kk(e, t, n) {
  const r = ["left", "right"],
    s = ["right", "left"],
    o = ["top", "bottom"],
    i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? s : r : t ? r : s;
    case "left":
    case "right":
      return t ? o : i;
    default:
      return []
  }
}

function Yk(e, t, n, r) {
  const s = mi(e);
  let o = Kk(wr(e), n === "start", r);
  return s && (o = o.map(i => i + "-" + s), t && (o = o.concat(o.map(Kf)))), o
}

function Cc(e) {
  return e.replace(/left|right|bottom|top/g, t => Wk[t])
}

function Qk(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  }
}

function lw(e) {
  return typeof e != "number" ? Qk(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  }
}

function Nc(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: s
  } = e;
  return {
    width: r,
    height: s,
    top: n,
    left: t,
    right: t + r,
    bottom: n + s,
    x: t,
    y: n
  }
}

function Wv(e, t, n) {
  let {
    reference: r,
    floating: s
  } = e;
  const o = cs(t),
    i = bh(t),
    a = wh(i),
    c = wr(t),
    u = o === "y",
    f = r.x + r.width / 2 - s.width / 2,
    p = r.y + r.height / 2 - s.height / 2,
    h = r[a] / 2 - s[a] / 2;
  let w;
  switch (c) {
    case "top":
      w = {
        x: f,
        y: r.y - s.height
      };
      break;
    case "bottom":
      w = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      w = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      w = {
        x: r.x - s.width,
        y: p
      };
      break;
    default:
      w = {
        x: r.x,
        y: r.y
      }
  }
  switch (mi(t)) {
    case "start":
      w[i] -= h * (n && u ? -1 : 1);
      break;
    case "end":
      w[i] += h * (n && u ? -1 : 1);
      break
  }
  return w
}
const Xk = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: s = "absolute",
    middleware: o = [],
    platform: i
  } = n, a = o.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
      reference: e,
      floating: t,
      strategy: s
    }),
    {
      x: f,
      y: p
    } = Wv(u, r, c),
    h = r,
    w = {},
    x = 0;
  for (let m = 0; m < a.length; m++) {
    const {
      name: b,
      fn: g
    } = a[m], {
      x: v,
      y,
      data: S,
      reset: E
    } = await g({
      x: f,
      y: p,
      initialPlacement: r,
      placement: h,
      strategy: s,
      middlewareData: w,
      rects: u,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = v ? ? f, p = y ? ? p, w = {
      ...w,
      [b]: {
        ...w[b],
        ...S
      }
    }, E && x <= 50 && (x++, typeof E == "object" && (E.placement && (h = E.placement), E.rects && (u = E.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: s
    }) : E.rects), {
      x: f,
      y: p
    } = Wv(u, h, c)), m = -1)
  }
  return {
    x: f,
    y: p,
    placement: h,
    strategy: s,
    middlewareData: w
  }
};
async function ma(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: s,
    platform: o,
    rects: i,
    elements: a,
    strategy: c
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: p = "floating",
    altBoundary: h = !1,
    padding: w = 0
  } = xr(t, e), x = lw(w), b = a[h ? p === "floating" ? "reference" : "floating" : p], g = Nc(await o.getClippingRect({
    element: (n = await (o.isElement == null ? void 0 : o.isElement(b))) == null || n ? b : b.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: f,
    strategy: c
  })), v = p === "floating" ? {
    x: r,
    y: s,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, y = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), S = await (o.isElement == null ? void 0 : o.isElement(y)) ? await (o.getScale == null ? void 0 : o.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = Nc(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: v,
    offsetParent: y,
    strategy: c
  }) : v);
  return {
    top: (g.top - E.top + x.top) / S.y,
    bottom: (E.bottom - g.bottom + x.bottom) / S.y,
    left: (g.left - E.left + x.left) / S.x,
    right: (E.right - g.right + x.right) / S.x
  }
}
const qk = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: s,
        rects: o,
        platform: i,
        elements: a,
        middlewareData: c
      } = t, {
        element: u,
        padding: f = 0
      } = xr(e, t) || {};
      if (u == null) return {};
      const p = lw(f),
        h = {
          x: n,
          y: r
        },
        w = bh(s),
        x = wh(w),
        m = await i.getDimensions(u),
        b = w === "y",
        g = b ? "top" : "left",
        v = b ? "bottom" : "right",
        y = b ? "clientHeight" : "clientWidth",
        S = o.reference[x] + o.reference[w] - h[w] - o.floating[x],
        E = h[w] - o.reference[w],
        _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
      let C = _ ? _[y] : 0;
      (!C || !await (i.isElement == null ? void 0 : i.isElement(_))) && (C = a.floating[y] || o.floating[x]);
      const j = S / 2 - E / 2,
        P = C / 2 - m[x] / 2 - 1,
        O = as(p[g], P),
        z = as(p[v], P),
        R = O,
        D = C - m[x] - z,
        I = C / 2 - m[x] / 2 + j,
        G = Gf(R, I, D),
        W = !c.arrow && mi(s) != null && I !== G && o.reference[x] / 2 - (I < R ? O : z) - m[x] / 2 < 0,
        te = W ? I < R ? I - R : I - D : 0;
      return {
        [w]: h[w] + te,
        data: {
          [w]: G,
          centerOffset: I - G - te,
          ...W && {
            alignmentOffset: te
          }
        },
        reset: W
      }
    }
  }),
  Jk = function (e) {
    return e === void 0 && (e = {}), {
      name: "flip",
      options: e,
      async fn(t) {
        var n, r;
        const {
          placement: s,
          middlewareData: o,
          rects: i,
          initialPlacement: a,
          platform: c,
          elements: u
        } = t, {
          mainAxis: f = !0,
          crossAxis: p = !0,
          fallbackPlacements: h,
          fallbackStrategy: w = "bestFit",
          fallbackAxisSideDirection: x = "none",
          flipAlignment: m = !0,
          ...b
        } = xr(e, t);
        if ((n = o.arrow) != null && n.alignmentOffset) return {};
        const g = wr(s),
          v = cs(a),
          y = wr(a) === a,
          S = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)),
          E = h || (y || !m ? [Cc(a)] : Gk(a)),
          _ = x !== "none";
        !h && _ && E.push(...Yk(a, m, x, S));
        const C = [a, ...E],
          j = await ma(t, b),
          P = [];
        let O = ((r = o.flip) == null ? void 0 : r.overflows) || [];
        if (f && P.push(j[g]), p) {
          const I = Zk(s, i, S);
          P.push(j[I[0]], j[I[1]])
        }
        if (O = [...O, {
            placement: s,
            overflows: P
          }], !P.every(I => I <= 0)) {
          var z, R;
          const I = (((z = o.flip) == null ? void 0 : z.index) || 0) + 1,
            G = C[I];
          if (G) return {
            data: {
              index: I,
              overflows: O
            },
            reset: {
              placement: G
            }
          };
          let W = (R = O.filter(te => te.overflows[0] <= 0).sort((te, k) => te.overflows[1] - k.overflows[1])[0]) == null ? void 0 : R.placement;
          if (!W) switch (w) {
            case "bestFit": {
              var D;
              const te = (D = O.filter(k => {
                if (_) {
                  const F = cs(k.placement);
                  return F === v || F === "y"
                }
                return !0
              }).map(k => [k.placement, k.overflows.filter(F => F > 0).reduce((F, K) => F + K, 0)]).sort((k, F) => k[1] - F[1])[0]) == null ? void 0 : D[0];
              te && (W = te);
              break
            }
            case "initialPlacement":
              W = a;
              break
          }
          if (s !== W) return {
            reset: {
              placement: W
            }
          }
        }
        return {}
      }
    }
  };

function Hv(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  }
}

function Zv(e) {
  return Uk.some(t => e[t] >= 0)
}
const eT = function (e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...s
      } = xr(e, t);
      switch (r) {
        case "referenceHidden": {
          const o = await ma(t, {
              ...s,
              elementContext: "reference"
            }),
            i = Hv(o, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Zv(i)
            }
          }
        }
        case "escaped": {
          const o = await ma(t, {
              ...s,
              altBoundary: !0
            }),
            i = Hv(o, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Zv(i)
            }
          }
        }
        default:
          return {}
      }
    }
  }
};
async function tT(e, t) {
  const {
    placement: n,
    platform: r,
    elements: s
  } = e, o = await (r.isRTL == null ? void 0 : r.isRTL(s.floating)), i = wr(n), a = mi(n), c = cs(n) === "y", u = ["left", "top"].includes(i) ? -1 : 1, f = o && c ? -1 : 1, p = xr(t, e);
  let {
    mainAxis: h,
    crossAxis: w,
    alignmentAxis: x
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return a && typeof x == "number" && (w = a === "end" ? x * -1 : x), c ? {
    x: w * f,
    y: h * u
  } : {
    x: h * u,
    y: w * f
  }
}
const nT = function (e) {
    return e === void 0 && (e = 0), {
      name: "offset",
      options: e,
      async fn(t) {
        var n, r;
        const {
          x: s,
          y: o,
          placement: i,
          middlewareData: a
        } = t, c = await tT(t, e);
        return i === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
          x: s + c.x,
          y: o + c.y,
          data: {
            ...c,
            placement: i
          }
        }
      }
    }
  },
  rT = function (e) {
    return e === void 0 && (e = {}), {
      name: "shift",
      options: e,
      async fn(t) {
        const {
          x: n,
          y: r,
          placement: s
        } = t, {
          mainAxis: o = !0,
          crossAxis: i = !1,
          limiter: a = {
            fn: b => {
              let {
                x: g,
                y: v
              } = b;
              return {
                x: g,
                y: v
              }
            }
          },
          ...c
        } = xr(e, t), u = {
          x: n,
          y: r
        }, f = await ma(t, c), p = cs(wr(s)), h = xh(p);
        let w = u[h],
          x = u[p];
        if (o) {
          const b = h === "y" ? "top" : "left",
            g = h === "y" ? "bottom" : "right",
            v = w + f[b],
            y = w - f[g];
          w = Gf(v, w, y)
        }
        if (i) {
          const b = p === "y" ? "top" : "left",
            g = p === "y" ? "bottom" : "right",
            v = x + f[b],
            y = x - f[g];
          x = Gf(v, x, y)
        }
        const m = a.fn({
          ...t,
          [h]: w,
          [p]: x
        });
        return {
          ...m,
          data: {
            x: m.x - n,
            y: m.y - r,
            enabled: {
              [h]: o,
              [p]: i
            }
          }
        }
      }
    }
  },
  sT = function (e) {
    return e === void 0 && (e = {}), {
      options: e,
      fn(t) {
        const {
          x: n,
          y: r,
          placement: s,
          rects: o,
          middlewareData: i
        } = t, {
          offset: a = 0,
          mainAxis: c = !0,
          crossAxis: u = !0
        } = xr(e, t), f = {
          x: n,
          y: r
        }, p = cs(s), h = xh(p);
        let w = f[h],
          x = f[p];
        const m = xr(a, t),
          b = typeof m == "number" ? {
            mainAxis: m,
            crossAxis: 0
          } : {
            mainAxis: 0,
            crossAxis: 0,
            ...m
          };
        if (c) {
          const y = h === "y" ? "height" : "width",
            S = o.reference[h] - o.floating[y] + b.mainAxis,
            E = o.reference[h] + o.reference[y] - b.mainAxis;
          w < S ? w = S : w > E && (w = E)
        }
        if (u) {
          var g, v;
          const y = h === "y" ? "width" : "height",
            S = ["top", "left"].includes(wr(s)),
            E = o.reference[p] - o.floating[y] + (S && ((g = i.offset) == null ? void 0 : g[p]) || 0) + (S ? 0 : b.crossAxis),
            _ = o.reference[p] + o.reference[y] + (S ? 0 : ((v = i.offset) == null ? void 0 : v[p]) || 0) - (S ? b.crossAxis : 0);
          x < E ? x = E : x > _ && (x = _)
        }
        return {
          [h]: w,
          [p]: x
        }
      }
    }
  },
  oT = function (e) {
    return e === void 0 && (e = {}), {
      name: "size",
      options: e,
      async fn(t) {
        var n, r;
        const {
          placement: s,
          rects: o,
          platform: i,
          elements: a
        } = t, {
          apply: c = () => {},
          ...u
        } = xr(e, t), f = await ma(t, u), p = wr(s), h = mi(s), w = cs(s) === "y", {
          width: x,
          height: m
        } = o.floating;
        let b, g;
        p === "top" || p === "bottom" ? (b = p, g = h === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (g = p, b = h === "end" ? "top" : "bottom");
        const v = m - f.top - f.bottom,
          y = x - f.left - f.right,
          S = as(m - f[b], v),
          E = as(x - f[g], y),
          _ = !t.middlewareData.shift;
        let C = S,
          j = E;
        if ((n = t.middlewareData.shift) != null && n.enabled.x && (j = y), (r = t.middlewareData.shift) != null && r.enabled.y && (C = v), _ && !h) {
          const O = Yt(f.left, 0),
            z = Yt(f.right, 0),
            R = Yt(f.top, 0),
            D = Yt(f.bottom, 0);
          w ? j = x - 2 * (O !== 0 || z !== 0 ? O + z : Yt(f.left, f.right)) : C = m - 2 * (R !== 0 || D !== 0 ? R + D : Yt(f.top, f.bottom))
        }
        await c({
          ...t,
          availableWidth: j,
          availableHeight: C
        });
        const P = await i.getDimensions(a.floating);
        return x !== P.width || m !== P.height ? {
          reset: {
            rects: !0
          }
        } : {}
      }
    }
  };

function hu() {
  return typeof window < "u"
}

function vi(e) {
  return cw(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function qt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function er(e) {
  var t;
  return (t = (cw(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}

function cw(e) {
  return hu() ? e instanceof Node || e instanceof qt(e).Node : !1
}

function Tn(e) {
  return hu() ? e instanceof Element || e instanceof qt(e).Element : !1
}

function Xn(e) {
  return hu() ? e instanceof HTMLElement || e instanceof qt(e).HTMLElement : !1
}

function Gv(e) {
  return !hu() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof qt(e).ShadowRoot
}

function Ya(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: s
  } = Pn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(s)
}

function iT(e) {
  return ["table", "td", "th"].includes(vi(e))
}

function mu(e) {
  return [":popover-open", ":modal"].some(t => {
    try {
      return e.matches(t)
    } catch {
      return !1
    }
  })
}

function Sh(e) {
  const t = Eh(),
    n = Tn(e) ? Pn(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}

function aT(e) {
  let t = us(e);
  for (; Xn(t) && !ri(t);) {
    if (Sh(t)) return t;
    if (mu(t)) return null;
    t = us(t)
  }
  return null
}

function Eh() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}

function ri(e) {
  return ["html", "body", "#document"].includes(vi(e))
}

function Pn(e) {
  return qt(e).getComputedStyle(e)
}

function vu(e) {
  return Tn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  }
}

function us(e) {
  if (vi(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || Gv(e) && e.host || er(e);
  return Gv(t) ? t.host : t
}

function uw(e) {
  const t = us(e);
  return ri(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Xn(t) && Ya(t) ? t : uw(t)
}

function va(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const s = uw(e),
    o = s === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = qt(s);
  if (o) {
    const a = Yf(i);
    return t.concat(i, i.visualViewport || [], Ya(s) ? s : [], a && n ? va(a) : [])
  }
  return t.concat(s, va(s, [], n))
}

function Yf(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}

function dw(e) {
  const t = Pn(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const s = Xn(e),
    o = s ? e.offsetWidth : n,
    i = s ? e.offsetHeight : r,
    a = Ec(n) !== o || Ec(r) !== i;
  return a && (n = o, r = i), {
    width: n,
    height: r,
    $: a
  }
}

function Ch(e) {
  return Tn(e) ? e : e.contextElement
}

function Io(e) {
  const t = Ch(e);
  if (!Xn(t)) return ls(1);
  const n = t.getBoundingClientRect(),
    {
      width: r,
      height: s,
      $: o
    } = dw(t);
  let i = (o ? Ec(n.width) : n.width) / r,
    a = (o ? Ec(n.height) : n.height) / s;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  }
}
const lT = ls(0);

function fw(e) {
  const t = qt(e);
  return !Eh() || !t.visualViewport ? lT : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  }
}

function cT(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== qt(e) ? !1 : t
}

function Bs(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(),
    o = Ch(e);
  let i = ls(1);
  t && (r ? Tn(r) && (i = Io(r)) : i = Io(e));
  const a = cT(o, n, r) ? fw(o) : ls(0);
  let c = (s.left + a.x) / i.x,
    u = (s.top + a.y) / i.y,
    f = s.width / i.x,
    p = s.height / i.y;
  if (o) {
    const h = qt(o),
      w = r && Tn(r) ? qt(r) : r;
    let x = h,
      m = Yf(x);
    for (; m && r && w !== x;) {
      const b = Io(m),
        g = m.getBoundingClientRect(),
        v = Pn(m),
        y = g.left + (m.clientLeft + parseFloat(v.paddingLeft)) * b.x,
        S = g.top + (m.clientTop + parseFloat(v.paddingTop)) * b.y;
      c *= b.x, u *= b.y, f *= b.x, p *= b.y, c += y, u += S, x = qt(m), m = Yf(x)
    }
  }
  return Nc({
    width: f,
    height: p,
    x: c,
    y: u
  })
}

function uT(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: s
  } = e;
  const o = s === "fixed",
    i = er(r),
    a = t ? mu(t.floating) : !1;
  if (r === i || a && o) return n;
  let c = {
      scrollLeft: 0,
      scrollTop: 0
    },
    u = ls(1);
  const f = ls(0),
    p = Xn(r);
  if ((p || !p && !o) && ((vi(r) !== "body" || Ya(i)) && (c = vu(r)), Xn(r))) {
    const h = Bs(r);
    u = Io(r), f.x = h.x + r.clientLeft, f.y = h.y + r.clientTop
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - c.scrollLeft * u.x + f.x,
    y: n.y * u.y - c.scrollTop * u.y + f.y
  }
}

function dT(e) {
  return Array.from(e.getClientRects())
}

function Qf(e, t) {
  const n = vu(e).scrollLeft;
  return t ? t.left + n : Bs(er(e)).left + n
}

function fT(e) {
  const t = er(e),
    n = vu(e),
    r = e.ownerDocument.body,
    s = Yt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    o = Yt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Qf(e);
  const a = -n.scrollTop;
  return Pn(r).direction === "rtl" && (i += Yt(t.clientWidth, r.clientWidth) - s), {
    width: s,
    height: o,
    x: i,
    y: a
  }
}

function pT(e, t) {
  const n = qt(e),
    r = er(e),
    s = n.visualViewport;
  let o = r.clientWidth,
    i = r.clientHeight,
    a = 0,
    c = 0;
  if (s) {
    o = s.width, i = s.height;
    const u = Eh();
    (!u || u && t === "fixed") && (a = s.offsetLeft, c = s.offsetTop)
  }
  return {
    width: o,
    height: i,
    x: a,
    y: c
  }
}

function hT(e, t) {
  const n = Bs(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    s = n.left + e.clientLeft,
    o = Xn(e) ? Io(e) : ls(1),
    i = e.clientWidth * o.x,
    a = e.clientHeight * o.y,
    c = s * o.x,
    u = r * o.y;
  return {
    width: i,
    height: a,
    x: c,
    y: u
  }
}

function Kv(e, t, n) {
  let r;
  if (t === "viewport") r = pT(e, n);
  else if (t === "document") r = fT(er(e));
  else if (Tn(t)) r = hT(t, n);
  else {
    const s = fw(e);
    r = {
      ...t,
      x: t.x - s.x,
      y: t.y - s.y
    }
  }
  return Nc(r)
}

function pw(e, t) {
  const n = us(e);
  return n === t || !Tn(n) || ri(n) ? !1 : Pn(n).position === "fixed" || pw(n, t)
}

function mT(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = va(e, [], !1).filter(a => Tn(a) && vi(a) !== "body"),
    s = null;
  const o = Pn(e).position === "fixed";
  let i = o ? us(e) : e;
  for (; Tn(i) && !ri(i);) {
    const a = Pn(i),
      c = Sh(i);
    !c && a.position === "fixed" && (s = null), (o ? !c && !s : !c && a.position === "static" && !!s && ["absolute", "fixed"].includes(s.position) || Ya(i) && !c && pw(e, i)) ? r = r.filter(f => f !== i) : s = a, i = us(i)
  }
  return t.set(e, r), r
}

function vT(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: s
  } = e;
  const i = [...n === "clippingAncestors" ? mu(t) ? [] : mT(t, this._c) : [].concat(n), r],
    a = i[0],
    c = i.reduce((u, f) => {
      const p = Kv(t, f, s);
      return u.top = Yt(p.top, u.top), u.right = as(p.right, u.right), u.bottom = as(p.bottom, u.bottom), u.left = Yt(p.left, u.left), u
    }, Kv(t, a, s));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  }
}

function gT(e) {
  const {
    width: t,
    height: n
  } = dw(e);
  return {
    width: t,
    height: n
  }
}

function yT(e, t, n) {
  const r = Xn(t),
    s = er(t),
    o = n === "fixed",
    i = Bs(e, !0, o, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = ls(0);
  if (r || !r && !o)
    if ((vi(t) !== "body" || Ya(s)) && (a = vu(t)), r) {
      const w = Bs(t, !0, o, t);
      c.x = w.x + t.clientLeft, c.y = w.y + t.clientTop
    } else s && (c.x = Qf(s));
  let u = 0,
    f = 0;
  if (s && !r && !o) {
    const w = s.getBoundingClientRect();
    f = w.top + a.scrollTop, u = w.left + a.scrollLeft - Qf(s, w)
  }
  const p = i.left + a.scrollLeft - c.x - u,
    h = i.top + a.scrollTop - c.y - f;
  return {
    x: p,
    y: h,
    width: i.width,
    height: i.height
  }
}

function _d(e) {
  return Pn(e).position === "static"
}

function Yv(e, t) {
  if (!Xn(e) || Pn(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return er(e) === n && (n = n.ownerDocument.body), n
}

function hw(e, t) {
  const n = qt(e);
  if (mu(e)) return n;
  if (!Xn(e)) {
    let s = us(e);
    for (; s && !ri(s);) {
      if (Tn(s) && !_d(s)) return s;
      s = us(s)
    }
    return n
  }
  let r = Yv(e, t);
  for (; r && iT(r) && _d(r);) r = Yv(r, t);
  return r && ri(r) && _d(r) && !Sh(r) ? n : r || aT(e) || n
}
const xT = async function (e) {
  const t = this.getOffsetParent || hw,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: yT(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  }
};

function wT(e) {
  return Pn(e).direction === "rtl"
}
const bT = {
  convertOffsetParentRelativeRectToViewportRelativeRect: uT,
  getDocumentElement: er,
  getClippingRect: vT,
  getOffsetParent: hw,
  getElementRects: xT,
  getClientRects: dT,
  getDimensions: gT,
  getScale: Io,
  isElement: Tn,
  isRTL: wT
};

function ST(e, t) {
  let n = null,
    r;
  const s = er(e);

  function o() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null
  }

  function i(a, c) {
    a === void 0 && (a = !1), c === void 0 && (c = 1), o();
    const {
      left: u,
      top: f,
      width: p,
      height: h
    } = e.getBoundingClientRect();
    if (a || t(), !p || !h) return;
    const w = El(f),
      x = El(s.clientWidth - (u + p)),
      m = El(s.clientHeight - (f + h)),
      b = El(u),
      v = {
        rootMargin: -w + "px " + -x + "px " + -m + "px " + -b + "px",
        threshold: Yt(0, as(1, c)) || 1
      };
    let y = !0;

    function S(E) {
      const _ = E[0].intersectionRatio;
      if (_ !== c) {
        if (!y) return i();
        _ ? i(!1, _) : r = setTimeout(() => {
          i(!1, 1e-7)
        }, 1e3)
      }
      y = !1
    }
    try {
      n = new IntersectionObserver(S, {
        ...v,
        root: s.ownerDocument
      })
    } catch {
      n = new IntersectionObserver(S, v)
    }
    n.observe(e)
  }
  return i(!0), o
}

function ET(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: o = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, u = Ch(e), f = s || o ? [...u ? va(u) : [], ...va(t)] : [];
  f.forEach(g => {
    s && g.addEventListener("scroll", n, {
      passive: !0
    }), o && g.addEventListener("resize", n)
  });
  const p = u && a ? ST(u, n) : null;
  let h = -1,
    w = null;
  i && (w = new ResizeObserver(g => {
    let [v] = g;
    v && v.target === u && w && (w.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var y;
      (y = w) == null || y.observe(t)
    })), n()
  }), u && !c && w.observe(u), w.observe(t));
  let x, m = c ? Bs(e) : null;
  c && b();

  function b() {
    const g = Bs(e);
    m && (g.x !== m.x || g.y !== m.y || g.width !== m.width || g.height !== m.height) && n(), m = g, x = requestAnimationFrame(b)
  }
  return n(), () => {
    var g;
    f.forEach(v => {
      s && v.removeEventListener("scroll", n), o && v.removeEventListener("resize", n)
    }), p == null || p(), (g = w) == null || g.disconnect(), w = null, c && cancelAnimationFrame(x)
  }
}
const CT = nT,
  NT = rT,
  _T = Jk,
  jT = oT,
  kT = eT,
  Qv = qk,
  TT = sT,
  PT = (e, t, n) => {
    const r = new Map,
      s = {
        platform: bT,
        ...n
      },
      o = {
        ...s.platform,
        _c: r
      };
    return Xk(e, t, {
      ...s,
      platform: o
    })
  };
var Xl = typeof document < "u" ? d.useLayoutEffect : d.useEffect;

function _c(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, s;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0;)
        if (!_c(e[r], t[r])) return !1;
      return !0
    }
    if (s = Object.keys(e), n = s.length, n !== Object.keys(t).length) return !1;
    for (r = n; r-- !== 0;)
      if (!{}.hasOwnProperty.call(t, s[r])) return !1;
    for (r = n; r-- !== 0;) {
      const o = s[r];
      if (!(o === "_owner" && e.$$typeof) && !_c(e[o], t[o])) return !1
    }
    return !0
  }
  return e !== e && t !== t
}

function mw(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function Xv(e, t) {
  const n = mw(e);
  return Math.round(t * n) / n
}

function jd(e) {
  const t = d.useRef(e);
  return Xl(() => {
    t.current = e
  }), t
}

function RT(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: s,
    elements: {
      reference: o,
      floating: i
    } = {},
    transform: a = !0,
    whileElementsMounted: c,
    open: u
  } = e, [f, p] = d.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, w] = d.useState(r);
  _c(h, r) || w(r);
  const [x, m] = d.useState(null), [b, g] = d.useState(null), v = d.useCallback(k => {
    k !== _.current && (_.current = k, m(k))
  }, []), y = d.useCallback(k => {
    k !== C.current && (C.current = k, g(k))
  }, []), S = o || x, E = i || b, _ = d.useRef(null), C = d.useRef(null), j = d.useRef(f), P = c != null, O = jd(c), z = jd(s), R = jd(u), D = d.useCallback(() => {
    if (!_.current || !C.current) return;
    const k = {
      placement: t,
      strategy: n,
      middleware: h
    };
    z.current && (k.platform = z.current), PT(_.current, C.current, k).then(F => {
      const K = {
        ...F,
        isPositioned: R.current !== !1
      };
      I.current && !_c(j.current, K) && (j.current = K, xs.flushSync(() => {
        p(K)
      }))
    })
  }, [h, t, n, z, R]);
  Xl(() => {
    u === !1 && j.current.isPositioned && (j.current.isPositioned = !1, p(k => ({
      ...k,
      isPositioned: !1
    })))
  }, [u]);
  const I = d.useRef(!1);
  Xl(() => (I.current = !0, () => {
    I.current = !1
  }), []), Xl(() => {
    if (S && (_.current = S), E && (C.current = E), S && E) {
      if (O.current) return O.current(S, E, D);
      D()
    }
  }, [S, E, D, O, P]);
  const G = d.useMemo(() => ({
      reference: _,
      floating: C,
      setReference: v,
      setFloating: y
    }), [v, y]),
    W = d.useMemo(() => ({
      reference: S,
      floating: E
    }), [S, E]),
    te = d.useMemo(() => {
      const k = {
        position: n,
        left: 0,
        top: 0
      };
      if (!W.floating) return k;
      const F = Xv(W.floating, f.x),
        K = Xv(W.floating, f.y);
      return a ? {
        ...k,
        transform: "translate(" + F + "px, " + K + "px)",
        ...mw(W.floating) >= 1.5 && {
          willChange: "transform"
        }
      } : {
        position: n,
        left: F,
        top: K
      }
    }, [n, a, W.floating, f.x, f.y]);
  return d.useMemo(() => ({
    ...f,
    update: D,
    refs: G,
    elements: W,
    floatingStyles: te
  }), [f, D, G, W, te])
}
const AT = e => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current")
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const {
          element: r,
          padding: s
        } = typeof e == "function" ? e(n) : e;
        return r && t(r) ? r.current != null ? Qv({
          element: r.current,
          padding: s
        }).fn(n) : {} : r ? Qv({
          element: r,
          padding: s
        }).fn(n) : {}
      }
    }
  },
  OT = (e, t) => ({
    ...CT(e),
    options: [e, t]
  }),
  DT = (e, t) => ({
    ...NT(e),
    options: [e, t]
  }),
  IT = (e, t) => ({
    ...TT(e),
    options: [e, t]
  }),
  MT = (e, t) => ({
    ..._T(e),
    options: [e, t]
  }),
  LT = (e, t) => ({
    ...jT(e),
    options: [e, t]
  }),
  FT = (e, t) => ({
    ...kT(e),
    options: [e, t]
  }),
  $T = (e, t) => ({
    ...AT(e),
    options: [e, t]
  });
var VT = "Arrow",
  vw = d.forwardRef((e, t) => {
    const {
      children: n,
      width: r = 10,
      height: s = 5,
      ...o
    } = e;
    return l.jsx(ne.svg, {
      ...o,
      ref: t,
      width: r,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : l.jsx("polygon", {
        points: "0,0 30,0 15,10"
      })
    })
  });
vw.displayName = VT;
var zT = vw;

function Nh(e) {
  const [t, n] = d.useState(void 0);
  return We(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const r = new ResizeObserver(s => {
        if (!Array.isArray(s) || !s.length) return;
        const o = s[0];
        let i, a;
        if ("borderBoxSize" in o) {
          const c = o.borderBoxSize,
            u = Array.isArray(c) ? c[0] : c;
          i = u.inlineSize, a = u.blockSize
        } else i = e.offsetWidth, a = e.offsetHeight;
        n({
          width: i,
          height: a
        })
      });
      return r.observe(e, {
        box: "border-box"
      }), () => r.unobserve(e)
    } else n(void 0)
  }, [e]), t
}
var _h = "Popper",
  [gw, gu] = An(_h),
  [BT, yw] = gw(_h),
  xw = e => {
    const {
      __scopePopper: t,
      children: n
    } = e, [r, s] = d.useState(null);
    return l.jsx(BT, {
      scope: t,
      anchor: r,
      onAnchorChange: s,
      children: n
    })
  };
xw.displayName = _h;
var ww = "PopperAnchor",
  bw = d.forwardRef((e, t) => {
    const {
      __scopePopper: n,
      virtualRef: r,
      ...s
    } = e, o = yw(ww, n), i = d.useRef(null), a = ue(t, i);
    return d.useEffect(() => {
      o.onAnchorChange((r == null ? void 0 : r.current) || i.current)
    }), r ? null : l.jsx(ne.div, {
      ...s,
      ref: a
    })
  });
bw.displayName = ww;
var jh = "PopperContent",
  [UT, WT] = gw(jh),
  Sw = d.forwardRef((e, t) => {
    var ie, xe, Oe, we, Ce, be;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: s = 0,
      align: o = "center",
      alignOffset: i = 0,
      arrowPadding: a = 0,
      avoidCollisions: c = !0,
      collisionBoundary: u = [],
      collisionPadding: f = 0,
      sticky: p = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: w = "optimized",
      onPlaced: x,
      ...m
    } = e, b = yw(jh, n), [g, v] = d.useState(null), y = ue(t, dt => v(dt)), [S, E] = d.useState(null), _ = Nh(S), C = (_ == null ? void 0 : _.width) ? ? 0, j = (_ == null ? void 0 : _.height) ? ? 0, P = r + (o !== "center" ? "-" + o : ""), O = typeof f == "number" ? f : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...f
    }, z = Array.isArray(u) ? u : [u], R = z.length > 0, D = {
      padding: O,
      boundary: z.filter(ZT),
      altBoundary: R
    }, {
      refs: I,
      floatingStyles: G,
      placement: W,
      isPositioned: te,
      middlewareData: k
    } = RT({
      strategy: "fixed",
      placement: P,
      whileElementsMounted: (...dt) => ET(...dt, {
        animationFrame: w === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [OT({
        mainAxis: s + j,
        alignmentAxis: i
      }), c && DT({
        mainAxis: !0,
        crossAxis: !1,
        limiter: p === "partial" ? IT() : void 0,
        ...D
      }), c && MT({
        ...D
      }), LT({
        ...D,
        apply: ({
          elements: dt,
          rects: xt,
          availableWidth: tr,
          availableHeight: Wt
        }) => {
          const {
            width: _r,
            height: N
          } = xt.reference, T = dt.floating.style;
          T.setProperty("--radix-popper-available-width", `${tr}px`), T.setProperty("--radix-popper-available-height", `${Wt}px`), T.setProperty("--radix-popper-anchor-width", `${_r}px`), T.setProperty("--radix-popper-anchor-height", `${N}px`)
        }
      }), S && $T({
        element: S,
        padding: a
      }), GT({
        arrowWidth: C,
        arrowHeight: j
      }), h && FT({
        strategy: "referenceHidden",
        ...D
      })]
    }), [F, K] = Nw(W), Z = it(x);
    We(() => {
      te && (Z == null || Z())
    }, [te, Z]);
    const re = (ie = k.arrow) == null ? void 0 : ie.x,
      de = (xe = k.arrow) == null ? void 0 : xe.y,
      Ee = ((Oe = k.arrow) == null ? void 0 : Oe.centerOffset) !== 0,
      [nt, ge] = d.useState();
    return We(() => {
      g && ge(window.getComputedStyle(g).zIndex)
    }, [g]), l.jsx("div", {
      ref: I.setFloating,
      "data-radix-popper-content-wrapper": "",
      style: {
        ...G,
        transform: te ? G.transform : "translate(0, -200%)",
        minWidth: "max-content",
        zIndex: nt,
        "--radix-popper-transform-origin": [(we = k.transformOrigin) == null ? void 0 : we.x, (Ce = k.transformOrigin) == null ? void 0 : Ce.y].join(" "),
        ...((be = k.hide) == null ? void 0 : be.referenceHidden) && {
          visibility: "hidden",
          pointerEvents: "none"
        }
      },
      dir: e.dir,
      children: l.jsx(UT, {
        scope: n,
        placedSide: F,
        onArrowChange: E,
        arrowX: re,
        arrowY: de,
        shouldHideArrow: Ee,
        children: l.jsx(ne.div, {
          "data-side": F,
          "data-align": K,
          ...m,
          ref: y,
          style: {
            ...m.style,
            animation: te ? void 0 : "none"
          }
        })
      })
    })
  });
Sw.displayName = jh;
var Ew = "PopperArrow",
  HT = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  },
  Cw = d.forwardRef(function (t, n) {
    const {
      __scopePopper: r,
      ...s
    } = t, o = WT(Ew, r), i = HT[o.placedSide];
    return l.jsx("span", {
      ref: o.onArrowChange,
      style: {
        position: "absolute",
        left: o.arrowX,
        top: o.arrowY,
        [i]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0"
        } [o.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)"
        } [o.placedSide],
        visibility: o.shouldHideArrow ? "hidden" : void 0
      },
      children: l.jsx(zT, {
        ...s,
        ref: n,
        style: {
          ...s.style,
          display: "block"
        }
      })
    })
  });
Cw.displayName = Ew;

function ZT(e) {
  return e !== null
}
var GT = e => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, g, v;
    const {
      placement: n,
      rects: r,
      middlewareData: s
    } = t, i = ((b = s.arrow) == null ? void 0 : b.centerOffset) !== 0, a = i ? 0 : e.arrowWidth, c = i ? 0 : e.arrowHeight, [u, f] = Nw(n), p = {
      start: "0%",
      center: "50%",
      end: "100%"
    } [f], h = (((g = s.arrow) == null ? void 0 : g.x) ? ? 0) + a / 2, w = (((v = s.arrow) == null ? void 0 : v.y) ? ? 0) + c / 2;
    let x = "",
      m = "";
    return u === "bottom" ? (x = i ? p : `${h}px`, m = `${-c}px`) : u === "top" ? (x = i ? p : `${h}px`, m = `${r.floating.height+c}px`) : u === "right" ? (x = `${-c}px`, m = i ? p : `${w}px`) : u === "left" && (x = `${r.floating.width+c}px`, m = i ? p : `${w}px`), {
      data: {
        x,
        y: m
      }
    }
  }
});

function Nw(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n]
}
var KT = xw,
  _w = bw,
  jw = Sw,
  kw = Cw,
  YT = "Portal",
  Tw = d.forwardRef((e, t) => {
    var a;
    const {
      container: n,
      ...r
    } = e, [s, o] = d.useState(!1);
    We(() => o(!0), []);
    const i = n || s && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
    return i ? Za.createPortal(l.jsx(ne.div, {
      ...r,
      ref: t
    }), i) : null
  });
Tw.displayName = YT;

function QT(e, t) {
  return d.useReducer((n, r) => t[n][r] ? ? n, e)
}
var Pw = e => {
  const {
    present: t,
    children: n
  } = e, r = XT(t), s = typeof n == "function" ? n({
    present: r.isPresent
  }) : d.Children.only(n), o = ue(r.ref, qT(s));
  return typeof n == "function" || r.isPresent ? d.cloneElement(s, {
    ref: o
  }) : null
};
Pw.displayName = "Presence";

function XT(e) {
  const [t, n] = d.useState(), r = d.useRef({}), s = d.useRef(e), o = d.useRef("none"), i = e ? "mounted" : "unmounted", [a, c] = QT(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return d.useEffect(() => {
    const u = Cl(r.current);
    o.current = a === "mounted" ? u : "none"
  }, [a]), We(() => {
    const u = r.current,
      f = s.current;
    if (f !== e) {
      const h = o.current,
        w = Cl(u);
      e ? c("MOUNT") : w === "none" || (u == null ? void 0 : u.display) === "none" ? c("UNMOUNT") : c(f && h !== w ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e
    }
  }, [e, c]), We(() => {
    if (t) {
      let u;
      const f = t.ownerDocument.defaultView ? ? window,
        p = w => {
          const m = Cl(r.current).includes(w.animationName);
          if (w.target === t && m && (c("ANIMATION_END"), !s.current)) {
            const b = t.style.animationFillMode;
            t.style.animationFillMode = "forwards", u = f.setTimeout(() => {
              t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b)
            })
          }
        },
        h = w => {
          w.target === t && (o.current = Cl(r.current))
        };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        f.clearTimeout(u), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p)
      }
    } else c("ANIMATION_END")
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: d.useCallback(u => {
      u && (r.current = getComputedStyle(u)), n(u)
    }, [])
  }
}

function Cl(e) {
  return (e == null ? void 0 : e.animationName) || "none"
}

function qT(e) {
  var r, s;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var [yu, gM] = Ak("Tooltip", [gu]), kh = gu(), Rw = "TooltipProvider", JT = 700, qv = "tooltip.open", [eP, Aw] = yu(Rw), Ow = e => {
  const {
    __scopeTooltip: t,
    delayDuration: n = JT,
    skipDelayDuration: r = 300,
    disableHoverableContent: s = !1,
    children: o
  } = e, [i, a] = d.useState(!0), c = d.useRef(!1), u = d.useRef(0);
  return d.useEffect(() => {
    const f = u.current;
    return () => window.clearTimeout(f)
  }, []), l.jsx(eP, {
    scope: t,
    isOpenDelayed: i,
    delayDuration: n,
    onOpen: d.useCallback(() => {
      window.clearTimeout(u.current), a(!1)
    }, []),
    onClose: d.useCallback(() => {
      window.clearTimeout(u.current), u.current = window.setTimeout(() => a(!0), r)
    }, [r]),
    isPointerInTransitRef: c,
    onPointerInTransitChange: d.useCallback(f => {
      c.current = f
    }, []),
    disableHoverableContent: s,
    children: o
  })
};
Ow.displayName = Rw;
var Dw = "Tooltip",
  [yM, xu] = yu(Dw),
  Xf = "TooltipTrigger",
  tP = d.forwardRef((e, t) => {
    const {
      __scopeTooltip: n,
      ...r
    } = e, s = xu(Xf, n), o = Aw(Xf, n), i = kh(n), a = d.useRef(null), c = ue(t, a, s.onTriggerChange), u = d.useRef(!1), f = d.useRef(!1), p = d.useCallback(() => u.current = !1, []);
    return d.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), l.jsx(_w, {
      asChild: !0,
      ...i,
      children: l.jsx(ne.button, {
        "aria-describedby": s.open ? s.contentId : void 0,
        "data-state": s.stateAttribute,
        ...r,
        ref: c,
        onPointerMove: q(e.onPointerMove, h => {
          h.pointerType !== "touch" && !f.current && !o.isPointerInTransitRef.current && (s.onTriggerEnter(), f.current = !0)
        }),
        onPointerLeave: q(e.onPointerLeave, () => {
          s.onTriggerLeave(), f.current = !1
        }),
        onPointerDown: q(e.onPointerDown, () => {
          u.current = !0, document.addEventListener("pointerup", p, {
            once: !0
          })
        }),
        onFocus: q(e.onFocus, () => {
          u.current || s.onOpen()
        }),
        onBlur: q(e.onBlur, s.onClose),
        onClick: q(e.onClick, s.onClose)
      })
    })
  });
tP.displayName = Xf;
var nP = "TooltipPortal",
  [xM, rP] = yu(nP, {
    forceMount: void 0
  }),
  si = "TooltipContent",
  Iw = d.forwardRef((e, t) => {
    const n = rP(si, e.__scopeTooltip),
      {
        forceMount: r = n.forceMount,
        side: s = "top",
        ...o
      } = e,
      i = xu(si, e.__scopeTooltip);
    return l.jsx(Pw, {
      present: r || i.open,
      children: i.disableHoverableContent ? l.jsx(Mw, {
        side: s,
        ...o,
        ref: t
      }) : l.jsx(sP, {
        side: s,
        ...o,
        ref: t
      })
    })
  }),
  sP = d.forwardRef((e, t) => {
    const n = xu(si, e.__scopeTooltip),
      r = Aw(si, e.__scopeTooltip),
      s = d.useRef(null),
      o = ue(t, s),
      [i, a] = d.useState(null),
      {
        trigger: c,
        onClose: u
      } = n,
      f = s.current,
      {
        onPointerInTransitChange: p
      } = r,
      h = d.useCallback(() => {
        a(null), p(!1)
      }, [p]),
      w = d.useCallback((x, m) => {
        const b = x.currentTarget,
          g = {
            x: x.clientX,
            y: x.clientY
          },
          v = lP(g, b.getBoundingClientRect()),
          y = cP(g, v),
          S = uP(m.getBoundingClientRect()),
          E = fP([...y, ...S]);
        a(E), p(!0)
      }, [p]);
    return d.useEffect(() => () => h(), [h]), d.useEffect(() => {
      if (c && f) {
        const x = b => w(b, f),
          m = b => w(b, c);
        return c.addEventListener("pointerleave", x), f.addEventListener("pointerleave", m), () => {
          c.removeEventListener("pointerleave", x), f.removeEventListener("pointerleave", m)
        }
      }
    }, [c, f, w, h]), d.useEffect(() => {
      if (i) {
        const x = m => {
          const b = m.target,
            g = {
              x: m.clientX,
              y: m.clientY
            },
            v = (c == null ? void 0 : c.contains(b)) || (f == null ? void 0 : f.contains(b)),
            y = !dP(g, i);
          v ? h() : y && (h(), u())
        };
        return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x)
      }
    }, [c, f, i, u, h]), l.jsx(Mw, {
      ...e,
      ref: o
    })
  }),
  [oP, iP] = yu(Dw, {
    isInside: !1
  }),
  Mw = d.forwardRef((e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": s,
      onEscapeKeyDown: o,
      onPointerDownOutside: i,
      ...a
    } = e, c = xu(si, n), u = kh(n), {
      onClose: f
    } = c;
    return d.useEffect(() => (document.addEventListener(qv, f), () => document.removeEventListener(qv, f)), [f]), d.useEffect(() => {
      if (c.trigger) {
        const p = h => {
          const w = h.target;
          w != null && w.contains(c.trigger) && f()
        };
        return window.addEventListener("scroll", p, {
          capture: !0
        }), () => window.removeEventListener("scroll", p, {
          capture: !0
        })
      }
    }, [c.trigger, f]), l.jsx(yh, {
      asChild: !0,
      disableOutsidePointerEvents: !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: i,
      onFocusOutside: p => p.preventDefault(),
      onDismiss: f,
      children: l.jsxs(jw, {
        "data-state": c.stateAttribute,
        ...u,
        ...a,
        ref: t,
        style: {
          ...a.style,
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        },
        children: [l.jsx(dh, {
          children: r
        }), l.jsx(oP, {
          scope: n,
          isInside: !0,
          children: l.jsx(q_, {
            id: c.contentId,
            role: "tooltip",
            children: s || r
          })
        })]
      })
    })
  });
Iw.displayName = si;
var Lw = "TooltipArrow",
  aP = d.forwardRef((e, t) => {
    const {
      __scopeTooltip: n,
      ...r
    } = e, s = kh(n);
    return iP(Lw, n).isInside ? null : l.jsx(kw, {
      ...s,
      ...r,
      ref: t
    })
  });
aP.displayName = Lw;

function lP(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    s = Math.abs(t.right - e.x),
    o = Math.abs(t.left - e.x);
  switch (Math.min(n, r, s, o)) {
    case o:
      return "left";
    case s:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable")
  }
}

function cP(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({
        x: e.x - n,
        y: e.y + n
      }, {
        x: e.x + n,
        y: e.y + n
      });
      break;
    case "bottom":
      r.push({
        x: e.x - n,
        y: e.y - n
      }, {
        x: e.x + n,
        y: e.y - n
      });
      break;
    case "left":
      r.push({
        x: e.x + n,
        y: e.y - n
      }, {
        x: e.x + n,
        y: e.y + n
      });
      break;
    case "right":
      r.push({
        x: e.x - n,
        y: e.y - n
      }, {
        x: e.x - n,
        y: e.y + n
      });
      break
  }
  return r
}

function uP(e) {
  const {
    top: t,
    right: n,
    bottom: r,
    left: s
  } = e;
  return [{
    x: s,
    y: t
  }, {
    x: n,
    y: t
  }, {
    x: n,
    y: r
  }, {
    x: s,
    y: r
  }]
}

function dP(e, t) {
  const {
    x: n,
    y: r
  } = e;
  let s = !1;
  for (let o = 0, i = t.length - 1; o < t.length; i = o++) {
    const a = t[o].x,
      c = t[o].y,
      u = t[i].x,
      f = t[i].y;
    c > r != f > r && n < (u - a) * (r - c) / (f - c) + a && (s = !s)
  }
  return s
}

function fP(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), pP(t)
}

function pP(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    for (; t.length >= 2;) {
      const o = t[t.length - 1],
        i = t[t.length - 2];
      if ((o.x - i.x) * (s.y - i.y) >= (o.y - i.y) * (s.x - i.x)) t.pop();
      else break
    }
    t.push(s)
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const s = e[r];
    for (; n.length >= 2;) {
      const o = n[n.length - 1],
        i = n[n.length - 2];
      if ((o.x - i.x) * (s.y - i.y) >= (o.y - i.y) * (s.x - i.x)) n.pop();
      else break
    }
    n.push(s)
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var hP = Ow,
  Fw = Iw;
const mP = hP,
  vP = d.forwardRef(({
    className: e,
    sideOffset: t = 4,
    ...n
  }, r) => l.jsx(Fw, {
    ref: r,
    sideOffset: t,
    className: ee("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
  }));
vP.displayName = Fw.displayName;
var wu = class {
    constructor() {
      this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
      return this.listeners.add(e), this.onSubscribe(), () => {
        this.listeners.delete(e), this.onUnsubscribe()
      }
    }
    hasListeners() {
      return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  bu = typeof window > "u" || "Deno" in globalThis;

function gn() {}

function gP(e, t) {
  return typeof e == "function" ? e(t) : e
}

function yP(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0
}

function xP(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0)
}

function Jv(e, t) {
  return typeof e == "function" ? e(t) : e
}

function wP(e, t) {
  return typeof e == "function" ? e(t) : e
}

function eg(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: s,
    predicate: o,
    queryKey: i,
    stale: a
  } = e;
  if (i) {
    if (r) {
      if (t.queryHash !== Th(i, t.options)) return !1
    } else if (!ya(t.queryKey, i)) return !1
  }
  if (n !== "all") {
    const c = t.isActive();
    if (n === "active" && !c || n === "inactive" && c) return !1
  }
  return !(typeof a == "boolean" && t.isStale() !== a || s && s !== t.state.fetchStatus || o && !o(t))
}

function tg(e, t) {
  const {
    exact: n,
    status: r,
    predicate: s,
    mutationKey: o
  } = e;
  if (o) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (ga(t.options.mutationKey) !== ga(o)) return !1
    } else if (!ya(t.options.mutationKey, o)) return !1
  }
  return !(r && t.state.status !== r || s && !s(t))
}

function Th(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || ga)(e)
}

function ga(e) {
  return JSON.stringify(e, (t, n) => qf(n) ? Object.keys(n).sort().reduce((r, s) => (r[s] = n[s], r), {}) : n)
}

function ya(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n => !ya(e[n], t[n])) : !1
}

function $w(e, t) {
  if (e === t) return e;
  const n = ng(e) && ng(t);
  if (n || qf(e) && qf(t)) {
    const r = n ? e : Object.keys(e),
      s = r.length,
      o = n ? t : Object.keys(t),
      i = o.length,
      a = n ? [] : {};
    let c = 0;
    for (let u = 0; u < i; u++) {
      const f = n ? u : o[u];
      (!n && r.includes(f) || n) && e[f] === void 0 && t[f] === void 0 ? (a[f] = void 0, c++) : (a[f] = $w(e[f], t[f]), a[f] === e[f] && e[f] !== void 0 && c++)
    }
    return s === i && c === s ? e : a
  }
  return t
}

function ng(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length
}

function qf(e) {
  if (!rg(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(!rg(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}

function rg(e) {
  return Object.prototype.toString.call(e) === "[object Object]"
}

function bP(e) {
  return new Promise(t => {
    setTimeout(t, e)
  })
}

function SP(e, t, n) {
  return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? $w(e, t) : t
}

function EP(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r
}

function CP(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r
}
var Vw = Symbol();

function zw(e, t) {
  return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Vw ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Ts, Br, zo, Xg, NP = (Xg = class extends wu {
    constructor() {
      super();
      ke(this, Ts);
      ke(this, Br);
      ke(this, zo);
      he(this, zo, t => {
        if (!bu && window.addEventListener) {
          const n = () => t();
          return window.addEventListener("visibilitychange", n, !1), () => {
            window.removeEventListener("visibilitychange", n)
          }
        }
      })
    }
    onSubscribe() {
      M(this, Br) || this.setEventListener(M(this, zo))
    }
    onUnsubscribe() {
      var t;
      this.hasListeners() || ((t = M(this, Br)) == null || t.call(this), he(this, Br, void 0))
    }
    setEventListener(t) {
      var n;
      he(this, zo, t), (n = M(this, Br)) == null || n.call(this), he(this, Br, t(r => {
        typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
      }))
    }
    setFocused(t) {
      M(this, Ts) !== t && (he(this, Ts, t), this.onFocus())
    }
    onFocus() {
      const t = this.isFocused();
      this.listeners.forEach(n => {
        n(t)
      })
    }
    isFocused() {
      var t;
      return typeof M(this, Ts) == "boolean" ? M(this, Ts) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
  }, Ts = new WeakMap, Br = new WeakMap, zo = new WeakMap, Xg),
  Bw = new NP,
  Bo, Ur, Uo, qg, _P = (qg = class extends wu {
    constructor() {
      super();
      ke(this, Bo, !0);
      ke(this, Ur);
      ke(this, Uo);
      he(this, Uo, t => {
        if (!bu && window.addEventListener) {
          const n = () => t(!0),
            r = () => t(!1);
          return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), () => {
            window.removeEventListener("online", n), window.removeEventListener("offline", r)
          }
        }
      })
    }
    onSubscribe() {
      M(this, Ur) || this.setEventListener(M(this, Uo))
    }
    onUnsubscribe() {
      var t;
      this.hasListeners() || ((t = M(this, Ur)) == null || t.call(this), he(this, Ur, void 0))
    }
    setEventListener(t) {
      var n;
      he(this, Uo, t), (n = M(this, Ur)) == null || n.call(this), he(this, Ur, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
      M(this, Bo) !== t && (he(this, Bo, t), this.listeners.forEach(r => {
        r(t)
      }))
    }
    isOnline() {
      return M(this, Bo)
    }
  }, Bo = new WeakMap, Ur = new WeakMap, Uo = new WeakMap, qg),
  jc = new _P;

function jP(e) {
  return Math.min(1e3 * 2 ** e, 3e4)
}

function Uw(e) {
  return (e ? ? "online") === "online" ? jc.isOnline() : !0
}
var Ww = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent
  }
};

function kd(e) {
  return e instanceof Ww
}

function Hw(e) {
  let t = !1,
    n = 0,
    r = !1,
    s, o, i;
  const a = new Promise((g, v) => {
      o = g, i = v
    }),
    c = g => {
      var v;
      r || (x(new Ww(g)), (v = e.abort) == null || v.call(e))
    },
    u = () => {
      t = !0
    },
    f = () => {
      t = !1
    },
    p = () => Bw.isFocused() && (e.networkMode === "always" || jc.isOnline()) && e.canRun(),
    h = () => Uw(e.networkMode) && e.canRun(),
    w = g => {
      var v;
      r || (r = !0, (v = e.onSuccess) == null || v.call(e, g), s == null || s(), o(g))
    },
    x = g => {
      var v;
      r || (r = !0, (v = e.onError) == null || v.call(e, g), s == null || s(), i(g))
    },
    m = () => new Promise(g => {
      var v;
      s = y => {
        (r || p()) && g(y)
      }, (v = e.onPause) == null || v.call(e)
    }).then(() => {
      var g;
      s = void 0, r || (g = e.onContinue) == null || g.call(e)
    }),
    b = () => {
      if (r) return;
      let g;
      const v = n === 0 ? e.initialPromise : void 0;
      try {
        g = v ? ? e.fn()
      } catch (y) {
        g = Promise.reject(y)
      }
      Promise.resolve(g).then(w).catch(y => {
        var j;
        if (r) return;
        const S = e.retry ? ? (bu ? 0 : 3),
          E = e.retryDelay ? ? jP,
          _ = typeof E == "function" ? E(n, y) : E,
          C = S === !0 || typeof S == "number" && n < S || typeof S == "function" && S(n, y);
        if (t || !C) {
          x(y);
          return
        }
        n++, (j = e.onFail) == null || j.call(e, n, y), bP(_).then(() => p() ? void 0 : m()).then(() => {
          t ? x(y) : b()
        })
      })
    };
  return {
    promise: a,
    cancel: c,
    continue: () => (s == null || s(), a),
    cancelRetry: u,
    continueRetry: f,
    canStart: h,
    start: () => (h() ? b() : m().then(b), a)
  }
}

function kP() {
  let e = [],
    t = 0,
    n = a => {
      a()
    },
    r = a => {
      a()
    },
    s = a => setTimeout(a, 0);
  const o = a => {
      t ? e.push(a) : s(() => {
        n(a)
      })
    },
    i = () => {
      const a = e;
      e = [], a.length && s(() => {
        r(() => {
          a.forEach(c => {
            n(c)
          })
        })
      })
    };
  return {
    batch: a => {
      let c;
      t++;
      try {
        c = a()
      } finally {
        t--, t || i()
      }
      return c
    },
    batchCalls: a => (...c) => {
      o(() => {
        a(...c)
      })
    },
    schedule: o,
    setNotifyFunction: a => {
      n = a
    },
    setBatchNotifyFunction: a => {
      r = a
    },
    setScheduler: a => {
      s = a
    }
  }
}
var At = kP(),
  Ps, Jg, Zw = (Jg = class {
    constructor() {
      ke(this, Ps)
    }
    destroy() {
      this.clearGcTimeout()
    }
    scheduleGc() {
      this.clearGcTimeout(), yP(this.gcTime) && he(this, Ps, setTimeout(() => {
        this.optionalRemove()
      }, this.gcTime))
    }
    updateGcTime(e) {
      this.gcTime = Math.max(this.gcTime || 0, e ? ? (bu ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
      M(this, Ps) && (clearTimeout(M(this, Ps)), he(this, Ps, void 0))
    }
  }, Ps = new WeakMap, Jg),
  Wo, Ho, rn, Et, $a, Rs, yn, sr, ey, TP = (ey = class extends Zw {
    constructor(t) {
      super();
      ke(this, yn);
      ke(this, Wo);
      ke(this, Ho);
      ke(this, rn);
      ke(this, Et);
      ke(this, $a);
      ke(this, Rs);
      he(this, Rs, !1), he(this, $a, t.defaultOptions), this.setOptions(t.options), this.observers = [], he(this, rn, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, he(this, Wo, RP(this.options)), this.state = t.state ? ? M(this, Wo), this.scheduleGc()
    }
    get meta() {
      return this.options.meta
    }
    get promise() {
      var t;
      return (t = M(this, Et)) == null ? void 0 : t.promise
    }
    setOptions(t) {
      this.options = {
        ...M(this, $a),
        ...t
      }, this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
      !this.observers.length && this.state.fetchStatus === "idle" && M(this, rn).remove(this)
    }
    setData(t, n) {
      const r = SP(this.state.data, t, this.options);
      return wt(this, yn, sr).call(this, {
        data: r,
        type: "success",
        dataUpdatedAt: n == null ? void 0 : n.updatedAt,
        manual: n == null ? void 0 : n.manual
      }), r
    }
    setState(t, n) {
      wt(this, yn, sr).call(this, {
        type: "setState",
        state: t,
        setStateOptions: n
      })
    }
    cancel(t) {
      var r, s;
      const n = (r = M(this, Et)) == null ? void 0 : r.promise;
      return (s = M(this, Et)) == null || s.cancel(t), n ? n.then(gn).catch(gn) : Promise.resolve()
    }
    destroy() {
      super.destroy(), this.cancel({
        silent: !0
      })
    }
    reset() {
      this.destroy(), this.setState(M(this, Wo))
    }
    isActive() {
      return this.observers.some(t => wP(t.options.enabled, this) !== !1)
    }
    isDisabled() {
      return this.getObserversCount() > 0 && !this.isActive()
    }
    isStale() {
      return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0
    }
    isStaleByTime(t = 0) {
      return this.state.isInvalidated || this.state.data === void 0 || !xP(this.state.dataUpdatedAt, t)
    }
    onFocus() {
      var n;
      const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
      t == null || t.refetch({
        cancelRefetch: !1
      }), (n = M(this, Et)) == null || n.continue()
    }
    onOnline() {
      var n;
      const t = this.observers.find(r => r.shouldFetchOnReconnect());
      t == null || t.refetch({
        cancelRefetch: !1
      }), (n = M(this, Et)) == null || n.continue()
    }
    addObserver(t) {
      this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), M(this, rn).notify({
        type: "observerAdded",
        query: this,
        observer: t
      }))
    }
    removeObserver(t) {
      this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t), this.observers.length || (M(this, Et) && (M(this, Rs) ? M(this, Et).cancel({
        revert: !0
      }) : M(this, Et).cancelRetry()), this.scheduleGc()), M(this, rn).notify({
        type: "observerRemoved",
        query: this,
        observer: t
      }))
    }
    getObserversCount() {
      return this.observers.length
    }
    invalidate() {
      this.state.isInvalidated || wt(this, yn, sr).call(this, {
        type: "invalidate"
      })
    }
    fetch(t, n) {
      var c, u, f;
      if (this.state.fetchStatus !== "idle") {
        if (this.state.data !== void 0 && (n != null && n.cancelRefetch)) this.cancel({
          silent: !0
        });
        else if (M(this, Et)) return M(this, Et).continueRetry(), M(this, Et).promise
      }
      if (t && this.setOptions(t), !this.options.queryFn) {
        const p = this.observers.find(h => h.options.queryFn);
        p && this.setOptions(p.options)
      }
      const r = new AbortController,
        s = p => {
          Object.defineProperty(p, "signal", {
            enumerable: !0,
            get: () => (he(this, Rs, !0), r.signal)
          })
        },
        o = () => {
          const p = zw(this.options, n),
            h = {
              queryKey: this.queryKey,
              meta: this.meta
            };
          return s(h), he(this, Rs, !1), this.options.persister ? this.options.persister(p, h, this) : p(h)
        },
        i = {
          fetchOptions: n,
          options: this.options,
          queryKey: this.queryKey,
          state: this.state,
          fetchFn: o
        };
      s(i), (c = this.options.behavior) == null || c.onFetch(i, this), he(this, Ho, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((u = i.fetchOptions) == null ? void 0 : u.meta)) && wt(this, yn, sr).call(this, {
        type: "fetch",
        meta: (f = i.fetchOptions) == null ? void 0 : f.meta
      });
      const a = p => {
        var h, w, x, m;
        kd(p) && p.silent || wt(this, yn, sr).call(this, {
          type: "error",
          error: p
        }), kd(p) || ((w = (h = M(this, rn).config).onError) == null || w.call(h, p, this), (m = (x = M(this, rn).config).onSettled) == null || m.call(x, this.state.data, p, this)), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
      };
      return he(this, Et, Hw({
        initialPromise: n == null ? void 0 : n.initialPromise,
        fn: i.fetchFn,
        abort: r.abort.bind(r),
        onSuccess: p => {
          var h, w, x, m;
          if (p === void 0) {
            a(new Error(`${this.queryHash} data is undefined`));
            return
          }
          try {
            this.setData(p)
          } catch (b) {
            a(b);
            return
          }(w = (h = M(this, rn).config).onSuccess) == null || w.call(h, p, this), (m = (x = M(this, rn).config).onSettled) == null || m.call(x, p, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
        },
        onError: a,
        onFail: (p, h) => {
          wt(this, yn, sr).call(this, {
            type: "failed",
            failureCount: p,
            error: h
          })
        },
        onPause: () => {
          wt(this, yn, sr).call(this, {
            type: "pause"
          })
        },
        onContinue: () => {
          wt(this, yn, sr).call(this, {
            type: "continue"
          })
        },
        retry: i.options.retry,
        retryDelay: i.options.retryDelay,
        networkMode: i.options.networkMode,
        canRun: () => !0
      })), M(this, Et).start()
    }
  }, Wo = new WeakMap, Ho = new WeakMap, rn = new WeakMap, Et = new WeakMap, $a = new WeakMap, Rs = new WeakMap, yn = new WeakSet, sr = function (t) {
    const n = r => {
      switch (t.type) {
        case "failed":
          return {
            ...r, fetchFailureCount: t.failureCount, fetchFailureReason: t.error
          };
        case "pause":
          return {
            ...r, fetchStatus: "paused"
          };
        case "continue":
          return {
            ...r, fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...r, ...PP(r.data, this.options), fetchMeta: t.meta ? ? null
          };
        case "success":
          return {
            ...r, data: t.data, dataUpdateCount: r.dataUpdateCount + 1, dataUpdatedAt: t.dataUpdatedAt ? ? Date.now(), error : null, isInvalidated : !1, status: "success", ...!t.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            }
          };
        case "error":
          const s = t.error;
          return kd(s) && s.revert && M(this, Ho) ? {
            ...M(this, Ho),
            fetchStatus: "idle"
          } : {
            ...r,
            error: s,
            errorUpdateCount: r.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: r.fetchFailureCount + 1,
            fetchFailureReason: s,
            fetchStatus: "idle",
            status: "error"
          };
        case "invalidate":
          return {
            ...r, isInvalidated: !0
          };
        case "setState":
          return {
            ...r, ...t.state
          }
      }
    };
    this.state = n(this.state), At.batch(() => {
      this.observers.forEach(r => {
        r.onQueryUpdate()
      }), M(this, rn).notify({
        query: this,
        type: "updated",
        action: t
      })
    })
  }, ey);

function PP(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Uw(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  }
}

function RP(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ? ? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle"
  }
}
var zn, ty, AP = (ty = class extends wu {
    constructor(t = {}) {
      super();
      ke(this, zn);
      this.config = t, he(this, zn, new Map)
    }
    build(t, n, r) {
      const s = n.queryKey,
        o = n.queryHash ? ? Th(s, n);
      let i = this.get(o);
      return i || (i = new TP({
        cache: this,
        queryKey: s,
        queryHash: o,
        options: t.defaultQueryOptions(n),
        state: r,
        defaultOptions: t.getQueryDefaults(s)
      }), this.add(i)), i
    }
    add(t) {
      M(this, zn).has(t.queryHash) || (M(this, zn).set(t.queryHash, t), this.notify({
        type: "added",
        query: t
      }))
    }
    remove(t) {
      const n = M(this, zn).get(t.queryHash);
      n && (t.destroy(), n === t && M(this, zn).delete(t.queryHash), this.notify({
        type: "removed",
        query: t
      }))
    }
    clear() {
      At.batch(() => {
        this.getAll().forEach(t => {
          this.remove(t)
        })
      })
    }
    get(t) {
      return M(this, zn).get(t)
    }
    getAll() {
      return [...M(this, zn).values()]
    }
    find(t) {
      const n = {
        exact: !0,
        ...t
      };
      return this.getAll().find(r => eg(n, r))
    }
    findAll(t = {}) {
      const n = this.getAll();
      return Object.keys(t).length > 0 ? n.filter(r => eg(t, r)) : n
    }
    notify(t) {
      At.batch(() => {
        this.listeners.forEach(n => {
          n(t)
        })
      })
    }
    onFocus() {
      At.batch(() => {
        this.getAll().forEach(t => {
          t.onFocus()
        })
      })
    }
    onOnline() {
      At.batch(() => {
        this.getAll().forEach(t => {
          t.onOnline()
        })
      })
    }
  }, zn = new WeakMap, ty),
  Bn, kt, As, Un, Ar, ny, OP = (ny = class extends Zw {
    constructor(t) {
      super();
      ke(this, Un);
      ke(this, Bn);
      ke(this, kt);
      ke(this, As);
      this.mutationId = t.mutationId, he(this, kt, t.mutationCache), he(this, Bn, []), this.state = t.state || DP(), this.setOptions(t.options), this.scheduleGc()
    }
    setOptions(t) {
      this.options = t, this.updateGcTime(this.options.gcTime)
    }
    get meta() {
      return this.options.meta
    }
    addObserver(t) {
      M(this, Bn).includes(t) || (M(this, Bn).push(t), this.clearGcTimeout(), M(this, kt).notify({
        type: "observerAdded",
        mutation: this,
        observer: t
      }))
    }
    removeObserver(t) {
      he(this, Bn, M(this, Bn).filter(n => n !== t)), this.scheduleGc(), M(this, kt).notify({
        type: "observerRemoved",
        mutation: this,
        observer: t
      })
    }
    optionalRemove() {
      M(this, Bn).length || (this.state.status === "pending" ? this.scheduleGc() : M(this, kt).remove(this))
    }
    continue () {
      var t;
      return ((t = M(this, As)) == null ? void 0 : t.continue()) ? ? this.execute(this.state.variables)
    }
    async execute(t) {
      var s, o, i, a, c, u, f, p, h, w, x, m, b, g, v, y, S, E, _, C;
      he(this, As, Hw({
        fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
        onFail: (j, P) => {
          wt(this, Un, Ar).call(this, {
            type: "failed",
            failureCount: j,
            error: P
          })
        },
        onPause: () => {
          wt(this, Un, Ar).call(this, {
            type: "pause"
          })
        },
        onContinue: () => {
          wt(this, Un, Ar).call(this, {
            type: "continue"
          })
        },
        retry: this.options.retry ? ? 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode,
        canRun: () => M(this, kt).canRun(this)
      }));
      const n = this.state.status === "pending",
        r = !M(this, As).canStart();
      try {
        if (!n) {
          wt(this, Un, Ar).call(this, {
            type: "pending",
            variables: t,
            isPaused: r
          }), await ((o = (s = M(this, kt).config).onMutate) == null ? void 0 : o.call(s, t, this));
          const P = await ((a = (i = this.options).onMutate) == null ? void 0 : a.call(i, t));
          P !== this.state.context && wt(this, Un, Ar).call(this, {
            type: "pending",
            context: P,
            variables: t,
            isPaused: r
          })
        }
        const j = await M(this, As).start();
        return await ((u = (c = M(this, kt).config).onSuccess) == null ? void 0 : u.call(c, j, t, this.state.context, this)), await ((p = (f = this.options).onSuccess) == null ? void 0 : p.call(f, j, t, this.state.context)), await ((w = (h = M(this, kt).config).onSettled) == null ? void 0 : w.call(h, j, null, this.state.variables, this.state.context, this)), await ((m = (x = this.options).onSettled) == null ? void 0 : m.call(x, j, null, t, this.state.context)), wt(this, Un, Ar).call(this, {
          type: "success",
          data: j
        }), j
      } catch (j) {
        try {
          throw await ((g = (b = M(this, kt).config).onError) == null ? void 0 : g.call(b, j, t, this.state.context, this)), await ((y = (v = this.options).onError) == null ? void 0 : y.call(v, j, t, this.state.context)), await ((E = (S = M(this, kt).config).onSettled) == null ? void 0 : E.call(S, void 0, j, this.state.variables, this.state.context, this)), await ((C = (_ = this.options).onSettled) == null ? void 0 : C.call(_, void 0, j, t, this.state.context)), j
        } finally {
          wt(this, Un, Ar).call(this, {
            type: "error",
            error: j
          })
        }
      } finally {
        M(this, kt).runNext(this)
      }
    }
  }, Bn = new WeakMap, kt = new WeakMap, As = new WeakMap, Un = new WeakSet, Ar = function (t) {
    const n = r => {
      switch (t.type) {
        case "failed":
          return {
            ...r, failureCount: t.failureCount, failureReason: t.error
          };
        case "pause":
          return {
            ...r, isPaused: !0
          };
        case "continue":
          return {
            ...r, isPaused: !1
          };
        case "pending":
          return {
            ...r, context: t.context, data: void 0, failureCount: 0, failureReason: null, error: null, isPaused: t.isPaused, status: "pending", variables: t.variables, submittedAt: Date.now()
          };
        case "success":
          return {
            ...r, data: t.data, failureCount: 0, failureReason: null, error: null, status: "success", isPaused: !1
          };
        case "error":
          return {
            ...r, data: void 0, error: t.error, failureCount: r.failureCount + 1, failureReason: t.error, isPaused: !1, status: "error"
          }
      }
    };
    this.state = n(this.state), At.batch(() => {
      M(this, Bn).forEach(r => {
        r.onMutationUpdate(t)
      }), M(this, kt).notify({
        mutation: this,
        type: "updated",
        action: t
      })
    })
  }, ny);

function DP() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  }
}
var Zt, Va, ry, IP = (ry = class extends wu {
  constructor(t = {}) {
    super();
    ke(this, Zt);
    ke(this, Va);
    this.config = t, he(this, Zt, new Map), he(this, Va, Date.now())
  }
  build(t, n, r) {
    const s = new OP({
      mutationCache: this,
      mutationId: ++nl(this, Va)._,
      options: t.defaultMutationOptions(n),
      state: r
    });
    return this.add(s), s
  }
  add(t) {
    const n = Nl(t),
      r = M(this, Zt).get(n) ? ? [];
    r.push(t), M(this, Zt).set(n, r), this.notify({
      type: "added",
      mutation: t
    })
  }
  remove(t) {
    var r;
    const n = Nl(t);
    if (M(this, Zt).has(n)) {
      const s = (r = M(this, Zt).get(n)) == null ? void 0 : r.filter(o => o !== t);
      s && (s.length === 0 ? M(this, Zt).delete(n) : M(this, Zt).set(n, s))
    }
    this.notify({
      type: "removed",
      mutation: t
    })
  }
  canRun(t) {
    var r;
    const n = (r = M(this, Zt).get(Nl(t))) == null ? void 0 : r.find(s => s.state.status === "pending");
    return !n || n === t
  }
  runNext(t) {
    var r;
    const n = (r = M(this, Zt).get(Nl(t))) == null ? void 0 : r.find(s => s !== t && s.state.isPaused);
    return (n == null ? void 0 : n.continue()) ? ? Promise.resolve()
  }
  clear() {
    At.batch(() => {
      this.getAll().forEach(t => {
        this.remove(t)
      })
    })
  }
  getAll() {
    return [...M(this, Zt).values()].flat()
  }
  find(t) {
    const n = {
      exact: !0,
      ...t
    };
    return this.getAll().find(r => tg(n, r))
  }
  findAll(t = {}) {
    return this.getAll().filter(n => tg(t, n))
  }
  notify(t) {
    At.batch(() => {
      this.listeners.forEach(n => {
        n(t)
      })
    })
  }
  resumePausedMutations() {
    const t = this.getAll().filter(n => n.state.isPaused);
    return At.batch(() => Promise.all(t.map(n => n.continue().catch(gn))))
  }
}, Zt = new WeakMap, Va = new WeakMap, ry);

function Nl(e) {
  var t;
  return ((t = e.options.scope) == null ? void 0 : t.id) ? ? String(e.mutationId)
}

function sg(e) {
  return {
    onFetch: (t, n) => {
      var f, p, h, w, x;
      const r = t.options,
        s = (h = (p = (f = t.fetchOptions) == null ? void 0 : f.meta) == null ? void 0 : p.fetchMore) == null ? void 0 : h.direction,
        o = ((w = t.state.data) == null ? void 0 : w.pages) || [],
        i = ((x = t.state.data) == null ? void 0 : x.pageParams) || [];
      let a = {
          pages: [],
          pageParams: []
        },
        c = 0;
      const u = async () => {
        let m = !1;
        const b = y => {
            Object.defineProperty(y, "signal", {
              enumerable: !0,
              get: () => (t.signal.aborted ? m = !0 : t.signal.addEventListener("abort", () => {
                m = !0
              }), t.signal)
            })
          },
          g = zw(t.options, t.fetchOptions),
          v = async (y, S, E) => {
            if (m) return Promise.reject();
            if (S == null && y.pages.length) return Promise.resolve(y);
            const _ = {
              queryKey: t.queryKey,
              pageParam: S,
              direction: E ? "backward" : "forward",
              meta: t.options.meta
            };
            b(_);
            const C = await g(_),
              {
                maxPages: j
              } = t.options,
              P = E ? CP : EP;
            return {
              pages: P(y.pages, C, j),
              pageParams: P(y.pageParams, S, j)
            }
          };
        if (s && o.length) {
          const y = s === "backward",
            S = y ? MP : og,
            E = {
              pages: o,
              pageParams: i
            },
            _ = S(r, E);
          a = await v(E, _, y)
        } else {
          const y = e ? ? o.length;
          do {
            const S = c === 0 ? i[0] ? ? r.initialPageParam : og(r, a);
            if (c > 0 && S == null) break;
            a = await v(a, S), c++
          } while (c < y)
        }
        return a
      };
      t.options.persister ? t.fetchFn = () => {
        var m, b;
        return (b = (m = t.options).persister) == null ? void 0 : b.call(m, u, {
          queryKey: t.queryKey,
          meta: t.options.meta,
          signal: t.signal
        }, n)
      } : t.fetchFn = u
    }
  }
}

function og(e, {
  pages: t,
  pageParams: n
}) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}

function MP(e, {
  pages: t,
  pageParams: n
}) {
  var r;
  return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var Ze, Wr, Hr, Zo, Go, Zr, Ko, Yo, sy, LP = (sy = class {
    constructor(e = {}) {
      ke(this, Ze);
      ke(this, Wr);
      ke(this, Hr);
      ke(this, Zo);
      ke(this, Go);
      ke(this, Zr);
      ke(this, Ko);
      ke(this, Yo);
      he(this, Ze, e.queryCache || new AP), he(this, Wr, e.mutationCache || new IP), he(this, Hr, e.defaultOptions || {}), he(this, Zo, new Map), he(this, Go, new Map), he(this, Zr, 0)
    }
    mount() {
      nl(this, Zr)._++, M(this, Zr) === 1 && (he(this, Ko, Bw.subscribe(async e => {
        e && (await this.resumePausedMutations(), M(this, Ze).onFocus())
      })), he(this, Yo, jc.subscribe(async e => {
        e && (await this.resumePausedMutations(), M(this, Ze).onOnline())
      })))
    }
    unmount() {
      var e, t;
      nl(this, Zr)._--, M(this, Zr) === 0 && ((e = M(this, Ko)) == null || e.call(this), he(this, Ko, void 0), (t = M(this, Yo)) == null || t.call(this), he(this, Yo, void 0))
    }
    isFetching(e) {
      return M(this, Ze).findAll({
        ...e,
        fetchStatus: "fetching"
      }).length
    }
    isMutating(e) {
      return M(this, Wr).findAll({
        ...e,
        status: "pending"
      }).length
    }
    getQueryData(e) {
      var n;
      const t = this.defaultQueryOptions({
        queryKey: e
      });
      return (n = M(this, Ze).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
      const t = this.getQueryData(e.queryKey);
      if (t === void 0) return this.fetchQuery(e); {
        const n = this.defaultQueryOptions(e),
          r = M(this, Ze).build(this, n);
        return e.revalidateIfStale && r.isStaleByTime(Jv(n.staleTime, r)) && this.prefetchQuery(n), Promise.resolve(t)
      }
    }
    getQueriesData(e) {
      return M(this, Ze).findAll(e).map(({
        queryKey: t,
        state: n
      }) => {
        const r = n.data;
        return [t, r]
      })
    }
    setQueryData(e, t, n) {
      const r = this.defaultQueryOptions({
          queryKey: e
        }),
        s = M(this, Ze).get(r.queryHash),
        o = s == null ? void 0 : s.state.data,
        i = gP(t, o);
      if (i !== void 0) return M(this, Ze).build(this, r).setData(i, {
        ...n,
        manual: !0
      })
    }
    setQueriesData(e, t, n) {
      return At.batch(() => M(this, Ze).findAll(e).map(({
        queryKey: r
      }) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
      var n;
      const t = this.defaultQueryOptions({
        queryKey: e
      });
      return (n = M(this, Ze).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
      const t = M(this, Ze);
      At.batch(() => {
        t.findAll(e).forEach(n => {
          t.remove(n)
        })
      })
    }
    resetQueries(e, t) {
      const n = M(this, Ze),
        r = {
          type: "active",
          ...e
        };
      return At.batch(() => (n.findAll(e).forEach(s => {
        s.reset()
      }), this.refetchQueries(r, t)))
    }
    cancelQueries(e = {}, t = {}) {
      const n = {
          revert: !0,
          ...t
        },
        r = At.batch(() => M(this, Ze).findAll(e).map(s => s.cancel(n)));
      return Promise.all(r).then(gn).catch(gn)
    }
    invalidateQueries(e = {}, t = {}) {
      return At.batch(() => {
        if (M(this, Ze).findAll(e).forEach(r => {
            r.invalidate()
          }), e.refetchType === "none") return Promise.resolve();
        const n = {
          ...e,
          type: e.refetchType ? ? e.type ? ? "active"
        };
        return this.refetchQueries(n, t)
      })
    }
    refetchQueries(e = {}, t) {
      const n = {
          ...t,
          cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ? ? !0
        },
        r = At.batch(() => M(this, Ze).findAll(e).filter(s => !s.isDisabled()).map(s => {
          let o = s.fetch(void 0, n);
          return n.throwOnError || (o = o.catch(gn)), s.state.fetchStatus === "paused" ? Promise.resolve() : o
        }));
      return Promise.all(r).then(gn)
    }
    fetchQuery(e) {
      const t = this.defaultQueryOptions(e);
      t.retry === void 0 && (t.retry = !1);
      const n = M(this, Ze).build(this, t);
      return n.isStaleByTime(Jv(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then(gn).catch(gn)
    }
    fetchInfiniteQuery(e) {
      return e.behavior = sg(e.pages), this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(gn).catch(gn)
    }
    ensureInfiniteQueryData(e) {
      return e.behavior = sg(e.pages), this.ensureQueryData(e)
    }
    resumePausedMutations() {
      return jc.isOnline() ? M(this, Wr).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
      return M(this, Ze)
    }
    getMutationCache() {
      return M(this, Wr)
    }
    getDefaultOptions() {
      return M(this, Hr)
    }
    setDefaultOptions(e) {
      he(this, Hr, e)
    }
    setQueryDefaults(e, t) {
      M(this, Zo).set(ga(e), {
        queryKey: e,
        defaultOptions: t
      })
    }
    getQueryDefaults(e) {
      const t = [...M(this, Zo).values()];
      let n = {};
      return t.forEach(r => {
        ya(e, r.queryKey) && (n = {
          ...n,
          ...r.defaultOptions
        })
      }), n
    }
    setMutationDefaults(e, t) {
      M(this, Go).set(ga(e), {
        mutationKey: e,
        defaultOptions: t
      })
    }
    getMutationDefaults(e) {
      const t = [...M(this, Go).values()];
      let n = {};
      return t.forEach(r => {
        ya(e, r.mutationKey) && (n = {
          ...n,
          ...r.defaultOptions
        })
      }), n
    }
    defaultQueryOptions(e) {
      if (e._defaulted) return e;
      const t = {
        ...M(this, Hr).queries,
        ...this.getQueryDefaults(e.queryKey),
        ...e,
        _defaulted: !0
      };
      return t.queryHash || (t.queryHash = Th(t.queryKey, t)), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.enabled !== !0 && t.queryFn === Vw && (t.enabled = !1), t
    }
    defaultMutationOptions(e) {
      return e != null && e._defaulted ? e : {
        ...M(this, Hr).mutations,
        ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
        ...e,
        _defaulted: !0
      }
    }
    clear() {
      M(this, Ze).clear(), M(this, Wr).clear()
    }
  }, Ze = new WeakMap, Wr = new WeakMap, Hr = new WeakMap, Zo = new WeakMap, Go = new WeakMap, Zr = new WeakMap, Ko = new WeakMap, Yo = new WeakMap, sy),
  FP = d.createContext(void 0),
  $P = ({
    client: e,
    children: t
  }) => (d.useEffect(() => (e.mount(), () => {
    e.unmount()
  }), [e]), l.jsx(FP.Provider, {
    value: e,
    children: t
  }));
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function xa() {
  return xa = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }, xa.apply(this, arguments)
}
var Yr;
(function (e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(Yr || (Yr = {}));
const ig = "popstate";

function VP(e) {
  e === void 0 && (e = {});

  function t(r, s) {
    let {
      pathname: o,
      search: i,
      hash: a
    } = r.location;
    return Jf("", {
      pathname: o,
      search: i,
      hash: a
    }, s.state && s.state.usr || null, s.state && s.state.key || "default")
  }

  function n(r, s) {
    return typeof s == "string" ? s : kc(s)
  }
  return BP(t, n, null, e)
}

function ot(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function Gw(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t)
    } catch {}
  }
}

function zP() {
  return Math.random().toString(36).substr(2, 8)
}

function ag(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  }
}

function Jf(e, t, n, r) {
  return n === void 0 && (n = null), xa({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? gi(t) : t, {
    state: n,
    key: t && t.key || r || zP()
  })
}

function kc(e) {
  let {
    pathname: t = "/",
    search: n = "",
    hash: r = ""
  } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function gi(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
  }
  return t
}

function BP(e, t, n, r) {
  r === void 0 && (r = {});
  let {
    window: s = document.defaultView,
    v5Compat: o = !1
  } = r, i = s.history, a = Yr.Pop, c = null, u = f();
  u == null && (u = 0, i.replaceState(xa({}, i.state, {
    idx: u
  }), ""));

  function f() {
    return (i.state || {
      idx: null
    }).idx
  }

  function p() {
    a = Yr.Pop;
    let b = f(),
      g = b == null ? null : b - u;
    u = b, c && c({
      action: a,
      location: m.location,
      delta: g
    })
  }

  function h(b, g) {
    a = Yr.Push;
    let v = Jf(m.location, b, g);
    u = f() + 1;
    let y = ag(v, u),
      S = m.createHref(v);
    try {
      i.pushState(y, "", S)
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      s.location.assign(S)
    }
    o && c && c({
      action: a,
      location: m.location,
      delta: 1
    })
  }

  function w(b, g) {
    a = Yr.Replace;
    let v = Jf(m.location, b, g);
    u = f();
    let y = ag(v, u),
      S = m.createHref(v);
    i.replaceState(y, "", S), o && c && c({
      action: a,
      location: m.location,
      delta: 0
    })
  }

  function x(b) {
    let g = s.location.origin !== "null" ? s.location.origin : s.location.href,
      v = typeof b == "string" ? b : kc(b);
    return v = v.replace(/ $/, "%20"), ot(g, "No window.location.(origin|href) available to create URL for href: " + v), new URL(v, g)
  }
  let m = {
    get action() {
      return a
    },
    get location() {
      return e(s, i)
    },
    listen(b) {
      if (c) throw new Error("A history only accepts one active listener");
      return s.addEventListener(ig, p), c = b, () => {
        s.removeEventListener(ig, p), c = null
      }
    },
    createHref(b) {
      return t(s, b)
    },
    createURL: x,
    encodeLocation(b) {
      let g = x(b);
      return {
        pathname: g.pathname,
        search: g.search,
        hash: g.hash
      }
    },
    push: h,
    replace: w,
    go(b) {
      return i.go(b)
    }
  };
  return m
}
var lg;
(function (e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(lg || (lg = {}));

function UP(e, t, n) {
  return n === void 0 && (n = "/"), WP(e, t, n, !1)
}

function WP(e, t, n, r) {
  let s = typeof t == "string" ? gi(t) : t,
    o = Ph(s.pathname || "/", n);
  if (o == null) return null;
  let i = Kw(e);
  HP(i);
  let a = null;
  for (let c = 0; a == null && c < i.length; ++c) {
    let u = nR(o);
    a = eR(i[c], u, r)
  }
  return a
}

function Kw(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let s = (o, i, a) => {
    let c = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o
    };
    c.relativePath.startsWith("/") && (ot(c.relativePath.startsWith(r), 'Absolute route path "' + c.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), c.relativePath = c.relativePath.slice(r.length));
    let u = ss([r, c.relativePath]),
      f = n.concat(c);
    o.children && o.children.length > 0 && (ot(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), Kw(o.children, t, f, u)), !(o.path == null && !o.index) && t.push({
      path: u,
      score: qP(u, o.index),
      routesMeta: f
    })
  };
  return e.forEach((o, i) => {
    var a;
    if (o.path === "" || !((a = o.path) != null && a.includes("?"))) s(o, i);
    else
      for (let c of Yw(o.path)) s(o, i, c)
  }), t
}

function Yw(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t, s = n.endsWith("?"), o = n.replace(/\?$/, "");
  if (r.length === 0) return s ? [o, ""] : [o];
  let i = Yw(r.join("/")),
    a = [];
  return a.push(...i.map(c => c === "" ? o : [o, c].join("/"))), s && a.push(...i), a.map(c => e.startsWith("/") && c === "" ? "/" : c)
}

function HP(e) {
  e.sort((t, n) => t.score !== n.score ? n.score - t.score : JP(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const ZP = /^:[\w-]+$/,
  GP = 3,
  KP = 2,
  YP = 1,
  QP = 10,
  XP = -2,
  cg = e => e === "*";

function qP(e, t) {
  let n = e.split("/"),
    r = n.length;
  return n.some(cg) && (r += XP), t && (r += KP), n.filter(s => !cg(s)).reduce((s, o) => s + (ZP.test(o) ? GP : o === "" ? YP : QP), r)
}

function JP(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, s) => r === t[s]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function eR(e, t, n) {
  let {
    routesMeta: r
  } = e, s = {}, o = "/", i = [];
  for (let a = 0; a < r.length; ++a) {
    let c = r[a],
      u = a === r.length - 1,
      f = o === "/" ? t : t.slice(o.length) || "/",
      p = ug({
        path: c.relativePath,
        caseSensitive: c.caseSensitive,
        end: u
      }, f),
      h = c.route;
    if (!p && u && n && !r[r.length - 1].route.index && (p = ug({
        path: c.relativePath,
        caseSensitive: c.caseSensitive,
        end: !1
      }, f)), !p) return null;
    Object.assign(s, p.params), i.push({
      params: s,
      pathname: ss([o, p.pathname]),
      pathnameBase: iR(ss([o, p.pathnameBase])),
      route: h
    }), p.pathnameBase !== "/" && (o = ss([o, p.pathnameBase]))
  }
  return i
}

function ug(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [n, r] = tR(e.path, e.caseSensitive, e.end), s = t.match(n);
  if (!s) return null;
  let o = s[0],
    i = o.replace(/(.)\/+$/, "$1"),
    a = s.slice(1);
  return {
    params: r.reduce((u, f, p) => {
      let {
        paramName: h,
        isOptional: w
      } = f;
      if (h === "*") {
        let m = a[p] || "";
        i = o.slice(0, o.length - m.length).replace(/(.)\/+$/, "$1")
      }
      const x = a[p];
      return w && !x ? u[h] = void 0 : u[h] = (x || "").replace(/%2F/g, "/"), u
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e
  }
}

function tR(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !0), Gw(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let r = [],
    s = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, a, c) => (r.push({
      paramName: a,
      isOptional: c != null
    }), c ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (r.push({
    paramName: "*"
  }), s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? s += "\\/*$" : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"), [new RegExp(s, t ? void 0 : "i"), r]
}

function nR(e) {
  try {
    return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
  } catch (t) {
    return Gw(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
  }
}

function Ph(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/"
}

function rR(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: s = ""
  } = typeof e == "string" ? gi(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : sR(n, t) : t,
    search: aR(r),
    hash: lR(s)
  }
}

function sR(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach(s => {
    s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s)
  }), n.length > 1 ? n.join("/") : "/"
}

function Td(e, t, n, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function oR(e) {
  return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function Qw(e, t) {
  let n = oR(e);
  return t ? n.map((r, s) => s === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}

function Xw(e, t, n, r) {
  r === void 0 && (r = !1);
  let s;
  typeof e == "string" ? s = gi(e) : (s = xa({}, e), ot(!s.pathname || !s.pathname.includes("?"), Td("?", "pathname", "search", s)), ot(!s.pathname || !s.pathname.includes("#"), Td("#", "pathname", "hash", s)), ot(!s.search || !s.search.includes("#"), Td("#", "search", "hash", s)));
  let o = e === "" || s.pathname === "",
    i = o ? "/" : s.pathname,
    a;
  if (i == null) a = n;
  else {
    let p = t.length - 1;
    if (!r && i.startsWith("..")) {
      let h = i.split("/");
      for (; h[0] === "..";) h.shift(), p -= 1;
      s.pathname = h.join("/")
    }
    a = p >= 0 ? t[p] : "/"
  }
  let c = rR(s, a),
    u = i && i !== "/" && i.endsWith("/"),
    f = (o || i === ".") && n.endsWith("/");
  return !c.pathname.endsWith("/") && (u || f) && (c.pathname += "/"), c
}
const ss = e => e.join("/").replace(/\/\/+/g, "/"),
  iR = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  aR = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
  lR = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

function cR(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const qw = ["post", "put", "patch", "delete"];
new Set(qw);
const uR = ["get", ...qw];
new Set(uR);
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function wa() {
  return wa = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }, wa.apply(this, arguments)
}
const Rh = d.createContext(null),
  dR = d.createContext(null),
  Xs = d.createContext(null),
  Su = d.createContext(null),
  bs = d.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
  }),
  Jw = d.createContext(null);

function fR(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t;
  Qa() || ot(!1);
  let {
    basename: r,
    navigator: s
  } = d.useContext(Xs), {
    hash: o,
    pathname: i,
    search: a
  } = n1(e, {
    relative: n
  }), c = i;
  return r !== "/" && (c = i === "/" ? r : ss([r, i])), s.createHref({
    pathname: c,
    search: a,
    hash: o
  })
}

function Qa() {
  return d.useContext(Su) != null
}

function yi() {
  return Qa() || ot(!1), d.useContext(Su).location
}

function e1(e) {
  d.useContext(Xs).static || d.useLayoutEffect(e)
}

function hn() {
  let {
    isDataRoute: e
  } = d.useContext(bs);
  return e ? NR() : pR()
}

function pR() {
  Qa() || ot(!1);
  let e = d.useContext(Rh),
    {
      basename: t,
      future: n,
      navigator: r
    } = d.useContext(Xs),
    {
      matches: s
    } = d.useContext(bs),
    {
      pathname: o
    } = yi(),
    i = JSON.stringify(Qw(s, n.v7_relativeSplatPath)),
    a = d.useRef(!1);
  return e1(() => {
    a.current = !0
  }), d.useCallback(function (u, f) {
    if (f === void 0 && (f = {}), !a.current) return;
    if (typeof u == "number") {
      r.go(u);
      return
    }
    let p = Xw(u, JSON.parse(i), o, f.relative === "path");
    e == null && t !== "/" && (p.pathname = p.pathname === "/" ? t : ss([t, p.pathname])), (f.replace ? r.replace : r.push)(p, f.state, f)
  }, [t, r, i, o, e])
}

function t1() {
  let {
    matches: e
  } = d.useContext(bs), t = e[e.length - 1];
  return t ? t.params : {}
}

function n1(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    future: r
  } = d.useContext(Xs), {
    matches: s
  } = d.useContext(bs), {
    pathname: o
  } = yi(), i = JSON.stringify(Qw(s, r.v7_relativeSplatPath));
  return d.useMemo(() => Xw(e, JSON.parse(i), o, n === "path"), [e, i, o, n])
}

function hR(e, t) {
  return mR(e, t)
}

function mR(e, t, n, r) {
  Qa() || ot(!1);
  let {
    navigator: s
  } = d.useContext(Xs), {
    matches: o
  } = d.useContext(bs), i = o[o.length - 1], a = i ? i.params : {};
  i && i.pathname;
  let c = i ? i.pathnameBase : "/";
  i && i.route;
  let u = yi(),
    f;
  if (t) {
    var p;
    let b = typeof t == "string" ? gi(t) : t;
    c === "/" || (p = b.pathname) != null && p.startsWith(c) || ot(!1), f = b
  } else f = u;
  let h = f.pathname || "/",
    w = h;
  if (c !== "/") {
    let b = c.replace(/^\//, "").split("/");
    w = "/" + h.replace(/^\//, "").split("/").slice(b.length).join("/")
  }
  let x = UP(e, {
      pathname: w
    }),
    m = wR(x && x.map(b => Object.assign({}, b, {
      params: Object.assign({}, a, b.params),
      pathname: ss([c, s.encodeLocation ? s.encodeLocation(b.pathname).pathname : b.pathname]),
      pathnameBase: b.pathnameBase === "/" ? c : ss([c, s.encodeLocation ? s.encodeLocation(b.pathnameBase).pathname : b.pathnameBase])
    })), o, n, r);
  return t && m ? d.createElement(Su.Provider, {
    value: {
      location: wa({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, f),
      navigationType: Yr.Pop
    }
  }, m) : m
}

function vR() {
  let e = CR(),
    t = cR(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    s = {
      padding: "0.5rem",
      backgroundColor: "rgba(200,200,200, 0.5)"
    };
  return d.createElement(d.Fragment, null, d.createElement("h2", null, "Unexpected Application Error!"), d.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), n ? d.createElement("pre", {
    style: s
  }, n) : null, null)
}
const gR = d.createElement(vR, null);
class yR extends d.Component {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      revalidation: t.revalidation,
      error: t.error
    }
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    }
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
      error: t.error,
      location: t.location,
      revalidation: t.revalidation
    } : {
      error: t.error !== void 0 ? t.error : n.error,
      location: n.location,
      revalidation: t.revalidation || n.revalidation
    }
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n)
  }
  render() {
    return this.state.error !== void 0 ? d.createElement(bs.Provider, {
      value: this.props.routeContext
    }, d.createElement(Jw.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children
  }
}

function xR(e) {
  let {
    routeContext: t,
    match: n,
    children: r
  } = e, s = d.useContext(Rh);
  return s && s.static && s.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = n.route.id), d.createElement(bs.Provider, {
    value: t
  }, r)
}

function wR(e, t, n, r) {
  var s;
  if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
    var o;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if ((o = r) != null && o.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
    else return null
  }
  let i = e,
    a = (s = n) == null ? void 0 : s.errors;
  if (a != null) {
    let f = i.findIndex(p => p.route.id && (a == null ? void 0 : a[p.route.id]) !== void 0);
    f >= 0 || ot(!1), i = i.slice(0, Math.min(i.length, f + 1))
  }
  let c = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < i.length; f++) {
      let p = i[f];
      if ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (u = f), p.route.id) {
        let {
          loaderData: h,
          errors: w
        } = n, x = p.route.loader && h[p.route.id] === void 0 && (!w || w[p.route.id] === void 0);
        if (p.route.lazy || x) {
          c = !0, u >= 0 ? i = i.slice(0, u + 1) : i = [i[0]];
          break
        }
      }
    }
  return i.reduceRight((f, p, h) => {
    let w, x = !1,
      m = null,
      b = null;
    n && (w = a && p.route.id ? a[p.route.id] : void 0, m = p.route.errorElement || gR, c && (u < 0 && h === 0 ? (x = !0, b = null) : u === h && (x = !0, b = p.route.hydrateFallbackElement || null)));
    let g = t.concat(i.slice(0, h + 1)),
      v = () => {
        let y;
        return w ? y = m : x ? y = b : p.route.Component ? y = d.createElement(p.route.Component, null) : p.route.element ? y = p.route.element : y = f, d.createElement(xR, {
          match: p,
          routeContext: {
            outlet: f,
            matches: g,
            isDataRoute: n != null
          },
          children: y
        })
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || h === 0) ? d.createElement(yR, {
      location: n.location,
      revalidation: n.revalidation,
      component: m,
      error: w,
      children: v(),
      routeContext: {
        outlet: null,
        matches: g,
        isDataRoute: !0
      }
    }) : v()
  }, null)
}
var r1 = function (e) {
    return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
  }(r1 || {}),
  Tc = function (e) {
    return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
  }(Tc || {});

function bR(e) {
  let t = d.useContext(Rh);
  return t || ot(!1), t
}

function SR(e) {
  let t = d.useContext(dR);
  return t || ot(!1), t
}

function ER(e) {
  let t = d.useContext(bs);
  return t || ot(!1), t
}

function s1(e) {
  let t = ER(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ot(!1), n.route.id
}

function CR() {
  var e;
  let t = d.useContext(Jw),
    n = SR(Tc.UseRouteError),
    r = s1(Tc.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}

function NR() {
  let {
    router: e
  } = bR(r1.UseNavigateStable), t = s1(Tc.UseNavigateStable), n = d.useRef(!1);
  return e1(() => {
    n.current = !0
  }), d.useCallback(function (s, o) {
    o === void 0 && (o = {}), n.current && (typeof s == "number" ? e.navigate(s) : e.navigate(s, wa({
      fromRouteId: t
    }, o)))
  }, [e, t])
}

function Ht(e) {
  ot(!1)
}

function _R(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: s = Yr.Pop,
    navigator: o,
    static: i = !1,
    future: a
  } = e;
  Qa() && ot(!1);
  let c = t.replace(/^\/*/, "/"),
    u = d.useMemo(() => ({
      basename: c,
      navigator: o,
      static: i,
      future: wa({
        v7_relativeSplatPath: !1
      }, a)
    }), [c, a, o, i]);
  typeof r == "string" && (r = gi(r));
  let {
    pathname: f = "/",
    search: p = "",
    hash: h = "",
    state: w = null,
    key: x = "default"
  } = r, m = d.useMemo(() => {
    let b = Ph(f, c);
    return b == null ? null : {
      location: {
        pathname: b,
        search: p,
        hash: h,
        state: w,
        key: x
      },
      navigationType: s
    }
  }, [c, f, p, h, w, x, s]);
  return m == null ? null : d.createElement(Xs.Provider, {
    value: u
  }, d.createElement(Su.Provider, {
    children: n,
    value: m
  }))
}

function jR(e) {
  let {
    children: t,
    location: n
  } = e;
  return hR(ep(t), n)
}
new Promise(() => {});

function ep(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return d.Children.forEach(e, (r, s) => {
    if (!d.isValidElement(r)) return;
    let o = [...t, s];
    if (r.type === d.Fragment) {
      n.push.apply(n, ep(r.props.children, o));
      return
    }
    r.type !== Ht && ot(!1), !r.props.index || !r.props.children || ot(!1);
    let i = {
      id: r.props.id || o.join("-"),
      caseSensitive: r.props.caseSensitive,
      element: r.props.element,
      Component: r.props.Component,
      index: r.props.index,
      path: r.props.path,
      loader: r.props.loader,
      action: r.props.action,
      errorElement: r.props.errorElement,
      ErrorBoundary: r.props.ErrorBoundary,
      hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
      shouldRevalidate: r.props.shouldRevalidate,
      handle: r.props.handle,
      lazy: r.props.lazy
    };
    r.props.children && (i.children = ep(r.props.children, o)), n.push(i)
  }), n
}
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function tp() {
  return tp = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }, tp.apply(this, arguments)
}

function kR(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    s, o;
  for (o = 0; o < r.length; o++) s = r[o], !(t.indexOf(s) >= 0) && (n[s] = e[s]);
  return n
}

function TR(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}

function PR(e, t) {
  return e.button === 0 && (!t || t === "_self") && !TR(e)
}
const RR = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
  AR = "6";
try {
  window.__reactRouterVersion = AR
} catch {}
const OR = "startTransition",
  dg = vy[OR];

function DR(e) {
  let {
    basename: t,
    children: n,
    future: r,
    window: s
  } = e, o = d.useRef();
  o.current == null && (o.current = VP({
    window: s,
    v5Compat: !0
  }));
  let i = o.current,
    [a, c] = d.useState({
      action: i.action,
      location: i.location
    }),
    {
      v7_startTransition: u
    } = r || {},
    f = d.useCallback(p => {
      u && dg ? dg(() => c(p)) : c(p)
    }, [c, u]);
  return d.useLayoutEffect(() => i.listen(f), [i, f]), d.createElement(_R, {
    basename: t,
    children: n,
    location: a.location,
    navigationType: a.action,
    navigator: i,
    future: r
  })
}
const IR = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
  MR = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Rt = d.forwardRef(function (t, n) {
    let {
      onClick: r,
      relative: s,
      reloadDocument: o,
      replace: i,
      state: a,
      target: c,
      to: u,
      preventScrollReset: f,
      unstable_viewTransition: p
    } = t, h = kR(t, RR), {
      basename: w
    } = d.useContext(Xs), x, m = !1;
    if (typeof u == "string" && MR.test(u) && (x = u, IR)) try {
      let y = new URL(window.location.href),
        S = u.startsWith("//") ? new URL(y.protocol + u) : new URL(u),
        E = Ph(S.pathname, w);
      S.origin === y.origin && E != null ? u = E + S.search + S.hash : m = !0
    } catch {}
    let b = fR(u, {
        relative: s
      }),
      g = LR(u, {
        replace: i,
        state: a,
        target: c,
        preventScrollReset: f,
        relative: s,
        unstable_viewTransition: p
      });

    function v(y) {
      r && r(y), y.defaultPrevented || g(y)
    }
    return d.createElement("a", tp({}, h, {
      href: x || b,
      onClick: m || o ? r : v,
      ref: n,
      target: c
    }))
  });
var fg;
(function (e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(fg || (fg = {}));
var pg;
(function (e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(pg || (pg = {}));

function LR(e, t) {
  let {
    target: n,
    replace: r,
    state: s,
    preventScrollReset: o,
    relative: i,
    unstable_viewTransition: a
  } = t === void 0 ? {} : t, c = hn(), u = yi(), f = n1(e, {
    relative: i
  });
  return d.useCallback(p => {
    if (PR(p, n)) {
      p.preventDefault();
      let h = r !== void 0 ? r : kc(u) === kc(f);
      c(e, {
        replace: h,
        state: s,
        preventScrollReset: o,
        relative: i,
        unstable_viewTransition: a
      })
    }
  }, [u, c, f, r, s, n, e, o, i, a])
}
const Ah = fu("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }),
  me = d.forwardRef(({
    className: e,
    variant: t,
    size: n,
    asChild: r = !1,
    ...s
  }, o) => {
    const i = r ? gr : "button";
    return l.jsx(i, {
      className: ee(Ah({
        variant: t,
        size: n,
        className: e
      })),
      ref: o,
      ...s
    })
  });
me.displayName = "Button";
const Er = () => {
    const [e, t] = d.useState(null), n = hn();
    return d.useEffect(() => {
      const r = localStorage.getItem("user");
      if (r) try {
        const s = JSON.parse(r);
        t(s)
      } catch {
        console.error("Failed to parse user data")
      }
    }, []), l.jsx("header", {
      className: "py-4 px-6 bg-white shadow-sm sticky top-0 z-50",
      children: l.jsxs("div", {
        className: "container mx-auto flex items-center justify-between",
        children: [l.jsxs(Rt, {
          to: "/",
          className: "flex items-center space-x-2",
          children: [l.jsx("div", {
            className: "w-10 h-10 rounded-full bg-penpen-primary text-white flex items-center justify-center font-display font-bold text-xl",
            children: "P"
          }), l.jsx("span", {
            className: "text-xl font-display font-semibold text-penpen-primary",
            children: "PenPen"
          })]
        }), l.jsxs("nav", {
          className: "hidden md:flex items-center space-x-6",
          children: [l.jsx(Rt, {
            to: "/",
            className: "text-gray-700 hover:text-penpen-primary transition-colors font-medium",
            children: "首頁"
          }), l.jsx(Rt, {
            to: "/learning-sheets",
            className: "text-gray-700 hover:text-penpen-primary transition-colors font-medium",
            children: "學單列表"
          }), e ? l.jsx(Rt, {
            to: "/dashboard",
            className: "text-penpen-primary hover:text-penpen-dark transition-colors font-medium",
            children: "會員中心"
          }) : l.jsx(Rt, {
            to: "/auth",
            className: "text-penpen-primary hover:text-penpen-dark transition-colors font-medium",
            children: "成為教育者"
          })]
        }), l.jsxs("div", {
          className: "flex items-center space-x-4",
          children: [e ? l.jsx(me, {
            variant: "outline",
            className: "hidden md:block",
            onClick: () => n("/dashboard"),
            children: e.name || "會員中心"
          }) : l.jsx(me, {
            variant: "outline",
            className: "hidden md:block",
            onClick: () => n("/auth"),
            children: "登入"
          }), l.jsx("button", {
            className: "md:hidden text-gray-700",
            children: l.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              className: "w-6 h-6",
              children: l.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              })
            })
          })]
        })]
      })
    })
  },
  Cr = () => l.jsx("footer", {
    className: "bg-gray-100 py-12",
    children: l.jsxs("div", {
      className: "container mx-auto",
      children: [l.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-8",
        children: [l.jsxs("div", {
          children: [l.jsxs(Rt, {
            to: "/",
            className: "flex items-center space-x-2 mb-4",
            children: [l.jsx("div", {
              className: "w-8 h-8 rounded-full bg-penpen-primary text-white flex items-center justify-center font-display font-bold text-lg",
              children: "P"
            }), l.jsx("span", {
              className: "text-lg font-display font-semibold text-penpen-primary",
              children: "PenPen"
            })]
          }), l.jsx("p", {
            className: "text-gray-600 text-sm",
            children: "透過視覺學習設計、實作與回饋並重的教育平台。結合結構力、美學力、實作力的學習設計原則。"
          })]
        }), l.jsxs("div", {
          children: [l.jsx("h3", {
            className: "font-medium text-lg mb-4",
            children: "連結"
          }), l.jsxs("ul", {
            className: "space-y-2",
            children: [l.jsx("li", {
              children: l.jsx(Rt, {
                to: "/",
                className: "text-gray-600 hover:text-penpen-primary transition-colors",
                children: "首頁"
              })
            }), l.jsx("li", {
              children: l.jsx(Rt, {
                to: "/learning-sheets",
                className: "text-gray-600 hover:text-penpen-primary transition-colors",
                children: "學單列表"
              })
            }), l.jsx("li", {
              children: l.jsx("a", {
                href: "/auth",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-gray-600 hover:text-penpen-primary transition-colors",
                children: "成為教育者"
              })
            })]
          })]
        }), l.jsxs("div", {
          children: [l.jsx("h3", {
            className: "font-medium text-lg mb-4",
            children: "服務"
          }), l.jsxs("ul", {
            className: "space-y-2",
            children: [l.jsx("li", {
              children: l.jsx(Rt, {
                to: "/faq",
                className: "text-gray-600 hover:text-penpen-primary transition-colors",
                children: "常見問題"
              })
            }), l.jsx("li", {
              children: l.jsx(Rt, {
                to: "/terms",
                className: "text-gray-600 hover:text-penpen-primary transition-colors",
                children: "使用條款"
              })
            }), l.jsx("li", {
              children: l.jsx(Rt, {
                to: "/privacy",
                className: "text-gray-600 hover:text-penpen-primary transition-colors",
                children: "隱私政策"
              })
            }), l.jsx("li", {
              children: l.jsx(Rt, {
                to: "/contact",
                className: "text-gray-600 hover:text-penpen-primary transition-colors",
                children: "聯絡我們"
              })
            })]
          })]
        })]
      }), l.jsx("div", {
        className: "border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600",
        children: l.jsxs("p", {
          children: ["© ", new Date().getFullYear(), " PenPen. All rights reserved."]
        })
      })]
    })
  }),
  FR = () => l.jsx("section", {
    className: "bg-gradient-to-br from-penpen-light to-white py-16 md:py-24",
    children: l.jsx("div", {
      className: "container mx-auto",
      children: l.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
        children: [l.jsxs("div", {
          className: "order-2 md:order-1",
          children: [l.jsxs("h1", {
            className: "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900",
            children: [l.jsx("span", {
              className: "text-penpen-primary",
              children: "學習"
            }), "更靈活，", l.jsx("br", {}), "教育更有", l.jsx("span", {
              className: "text-penpen-accent",
              children: "創意"
            })]
          }), l.jsx("p", {
            className: "text-lg text-gray-700 mb-8",
            children: "PenPen 提供多元化的自學資源與教學工具，讓每位學習者都能依照自己的步調享受學習過程。無論您是學生、老師或社會人士，都能在此找到適合的學習方式。"
          }), l.jsxs("div", {
            className: "flex flex-wrap gap-4",
            children: [l.jsx(me, {
              asChild: !0,
              className: "bg-penpen-primary hover:bg-penpen-dark text-lg px-6 py-2 h-auto",
              children: l.jsx(Rt, {
                to: "/learning-sheets",
                children: "探索學單"
              })
            }), l.jsx(me, {
              asChild: !0,
              variant: "outline",
              className: "border-penpen-primary text-penpen-primary hover:bg-penpen-light text-lg px-6 py-2 h-auto",
              children: l.jsx("a", {
                href: "/auth",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "成為教育者"
              })
            })]
          })]
        }), l.jsx("div", {
          className: "order-1 md:order-2 flex justify-center",
          children: l.jsxs("div", {
            className: "relative w-full max-w-md",
            children: [l.jsx("div", {
              className: "absolute inset-0 bg-penpen-primary/20 rounded-lg transform rotate-3"
            }), l.jsxs("div", {
              className: "relative bg-white p-6 rounded-lg shadow-xl",
              children: [l.jsx("div", {
                className: "aspect-w-16 aspect-h-9 bg-penpen-light rounded-lg mb-4 flex items-center justify-center",
                children: l.jsx("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: 1,
                  stroke: "currentColor",
                  className: "w-16 h-16 text-penpen-primary/50",
                  children: l.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m-3-14.25v14.25"
                  })
                })
              }), l.jsx("h3", {
                className: "font-medium text-lg mb-2",
                children: "數學應用練習"
              }), l.jsx("p", {
                className: "text-gray-600 text-sm mb-3",
                children: "適合對象：國小"
              }), l.jsxs("div", {
                className: "flex justify-between items-center text-sm text-gray-500",
                children: [l.jsx("span", {
                  children: "建議時間：30分鐘"
                }), l.jsx("span", {
                  children: "王老師製作"
                })]
              })]
            })]
          })
        })]
      })
    })
  }),
  $R = [{
    title: "結構力",
    icon: l.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: "w-10 h-10",
      children: l.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
      })
    }),
    description: "清晰明確的學習流程和組織，幫助學習者建立穩固的知識架構。我們的每一份學習單都經過精心設計，確保引導學習者循序漸進地理解概念。"
  }, {
    title: "美學力",
    icon: l.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: "w-10 h-10",
      children: l.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
      })
    }),
    description: "精心設計的視覺元素和直觀操作界面，讓學習不再單調乏味。我們注重視覺引導和簡潔設計，使學習體驗更加愉悅且高效。"
  }, {
    title: "實作力",
    icon: l.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: "w-10 h-10",
      children: l.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
      })
    }),
    description: "強調實際應用和即時反饋，讓學習成效顯著提升。每份學習單完成後即時獲得答案和解析，幫助學習者鞏固知識並糾正錯誤觀念。"
  }],
  VR = () => l.jsx("section", {
    className: "py-16 bg-white",
    children: l.jsxs("div", {
      className: "container mx-auto",
      children: [l.jsxs("div", {
        className: "text-center mb-12",
        children: [l.jsx("h2", {
          className: "text-3xl md:text-4xl font-bold mb-4",
          children: "教育理念"
        }), l.jsx("p", {
          className: "text-gray-600 max-w-2xl mx-auto",
          children: "PenPen 基於現代教育學理論，結合實踐經驗，打造出具備三大核心價值的學習設計系統。"
        })]
      }), l.jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-8",
        children: $R.map((e, t) => l.jsxs("div", {
          className: "bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow",
          children: [l.jsx("div", {
            className: "mb-4 text-penpen-primary",
            children: e.icon
          }), l.jsx("h3", {
            className: "text-xl font-semibold mb-3",
            children: e.title
          }), l.jsx("p", {
            className: "text-gray-600",
            children: e.description
          })]
        }, t))
      })]
    })
  }),
  Oh = ({
    id: e,
    title: t,
    author: n,
    createdAt: r,
    duration: s,
    target: o,
    imageUrl: i,
    onOpenDetail: a
  }) => l.jsxs("div", {
    className: "card cursor-pointer transform transition-all hover:scale-105",
    onClick: () => a(e),
    children: [l.jsx("div", {
      className: "aspect-w-16 aspect-h-9 bg-penpen-light relative overflow-hidden",
      children: i ? l.jsx("img", {
        src: i,
        alt: t,
        className: "object-cover w-full h-full"
      }) : l.jsx("div", {
        className: "w-full h-full flex items-center justify-center",
        children: l.jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: 1,
          stroke: "currentColor",
          className: "w-12 h-12 text-penpen-primary/40",
          children: l.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m-3-14.25v14.25"
          })
        })
      })
    }), l.jsxs("div", {
      className: "p-4",
      children: [l.jsx("h3", {
        className: "font-medium text-lg mb-1 line-clamp-1",
        children: t
      }), l.jsxs("p", {
        className: "text-gray-600 text-sm mb-3",
        children: ["適合對象：", o]
      }), l.jsxs("div", {
        className: "flex justify-between items-center text-xs text-gray-500",
        children: [l.jsxs("span", {
          children: ["建議時間：", s, "分鐘"]
        }), l.jsx("span", {
          children: n
        })]
      })]
    })]
  });

function zR(e, t) {
  const n = d.createContext(t),
    r = o => {
      const {
        children: i,
        ...a
      } = o, c = d.useMemo(() => a, Object.values(a));
      return l.jsx(n.Provider, {
        value: c,
        children: i
      })
    };
  r.displayName = e + "Provider";

  function s(o) {
    const i = d.useContext(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${o}\` must be used within \`${e}\``)
  }
  return [r, s]
}

function BR(e, t = []) {
  let n = [];

  function r(o, i) {
    const a = d.createContext(i),
      c = n.length;
    n = [...n, i];
    const u = p => {
      var g;
      const {
        scope: h,
        children: w,
        ...x
      } = p, m = ((g = h == null ? void 0 : h[e]) == null ? void 0 : g[c]) || a, b = d.useMemo(() => x, Object.values(x));
      return l.jsx(m.Provider, {
        value: b,
        children: w
      })
    };
    u.displayName = o + "Provider";

    function f(p, h) {
      var m;
      const w = ((m = h == null ? void 0 : h[e]) == null ? void 0 : m[c]) || a,
        x = d.useContext(w);
      if (x) return x;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${o}\``)
    }
    return [u, f]
  }
  const s = () => {
    const o = n.map(i => d.createContext(i));
    return function (a) {
      const c = (a == null ? void 0 : a[e]) || o;
      return d.useMemo(() => ({
        [`__scope${e}`]: {
          ...a,
          [e]: c
        }
      }), [a, c])
    }
  };
  return s.scopeName = e, [r, UR(s, ...t)]
}

function UR(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map(s => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function (o) {
      const i = r.reduce((a, {
        useScope: c,
        scopeName: u
      }) => {
        const p = c(o)[`__scope${u}`];
        return {
          ...a,
          ...p
        }
      }, {});
      return d.useMemo(() => ({
        [`__scope${t.scopeName}`]: i
      }), [i])
    }
  };
  return n.scopeName = t.scopeName, n
}
var Pd = "focusScope.autoFocusOnMount",
  Rd = "focusScope.autoFocusOnUnmount",
  hg = {
    bubbles: !1,
    cancelable: !0
  },
  WR = "FocusScope",
  Eu = d.forwardRef((e, t) => {
    const {
      loop: n = !1,
      trapped: r = !1,
      onMountAutoFocus: s,
      onUnmountAutoFocus: o,
      ...i
    } = e, [a, c] = d.useState(null), u = it(s), f = it(o), p = d.useRef(null), h = ue(t, m => c(m)), w = d.useRef({
      paused: !1,
      pause() {
        this.paused = !0
      },
      resume() {
        this.paused = !1
      }
    }).current;
    d.useEffect(() => {
      if (r) {
        let m = function (y) {
            if (w.paused || !a) return;
            const S = y.target;
            a.contains(S) ? p.current = S : Or(p.current, {
              select: !0
            })
          },
          b = function (y) {
            if (w.paused || !a) return;
            const S = y.relatedTarget;
            S !== null && (a.contains(S) || Or(p.current, {
              select: !0
            }))
          },
          g = function (y) {
            if (document.activeElement === document.body)
              for (const E of y) E.removedNodes.length > 0 && Or(a)
          };
        document.addEventListener("focusin", m), document.addEventListener("focusout", b);
        const v = new MutationObserver(g);
        return a && v.observe(a, {
          childList: !0,
          subtree: !0
        }), () => {
          document.removeEventListener("focusin", m), document.removeEventListener("focusout", b), v.disconnect()
        }
      }
    }, [r, a, w.paused]), d.useEffect(() => {
      if (a) {
        vg.add(w);
        const m = document.activeElement;
        if (!a.contains(m)) {
          const g = new CustomEvent(Pd, hg);
          a.addEventListener(Pd, u), a.dispatchEvent(g), g.defaultPrevented || (HR(QR(o1(a)), {
            select: !0
          }), document.activeElement === m && Or(a))
        }
        return () => {
          a.removeEventListener(Pd, u), setTimeout(() => {
            const g = new CustomEvent(Rd, hg);
            a.addEventListener(Rd, f), a.dispatchEvent(g), g.defaultPrevented || Or(m ? ? document.body, {
              select: !0
            }), a.removeEventListener(Rd, f), vg.remove(w)
          }, 0)
        }
      }
    }, [a, u, f, w]);
    const x = d.useCallback(m => {
      if (!n && !r || w.paused) return;
      const b = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey,
        g = document.activeElement;
      if (b && g) {
        const v = m.currentTarget,
          [y, S] = ZR(v);
        y && S ? !m.shiftKey && g === S ? (m.preventDefault(), n && Or(y, {
          select: !0
        })) : m.shiftKey && g === y && (m.preventDefault(), n && Or(S, {
          select: !0
        })) : g === v && m.preventDefault()
      }
    }, [n, r, w.paused]);
    return l.jsx(ne.div, {
      tabIndex: -1,
      ...i,
      ref: h,
      onKeyDown: x
    })
  });
Eu.displayName = WR;

function HR(e, {
  select: t = !1
} = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Or(r, {
        select: t
      }), document.activeElement !== n) return
}

function ZR(e) {
  const t = o1(e),
    n = mg(t, e),
    r = mg(t.reverse(), e);
  return [n, r]
}

function o1(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: r => {
        const s = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || s ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
      }
    });
  for (; n.nextNode();) t.push(n.currentNode);
  return t
}

function mg(e, t) {
  for (const n of e)
    if (!GR(n, {
        upTo: t
      })) return n
}

function GR(e, {
  upTo: t
}) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e;) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement
  }
  return !1
}

function KR(e) {
  return e instanceof HTMLInputElement && "select" in e
}

function Or(e, {
  select: t = !1
} = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && KR(e) && t && e.select()
  }
}
var vg = YR();

function YR() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = gg(e, t), e.unshift(t)
    },
    remove(t) {
      var n;
      e = gg(e, t), (n = e[0]) == null || n.resume()
    }
  }
}

function gg(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n
}

function QR(e) {
  return e.filter(t => t.tagName !== "A")
}

function XR(e, t) {
  return d.useReducer((n, r) => t[n][r] ? ? n, e)
}
var Cu = e => {
  const {
    present: t,
    children: n
  } = e, r = qR(t), s = typeof n == "function" ? n({
    present: r.isPresent
  }) : d.Children.only(n), o = ue(r.ref, JR(s));
  return typeof n == "function" || r.isPresent ? d.cloneElement(s, {
    ref: o
  }) : null
};
Cu.displayName = "Presence";

function qR(e) {
  const [t, n] = d.useState(), r = d.useRef({}), s = d.useRef(e), o = d.useRef("none"), i = e ? "mounted" : "unmounted", [a, c] = XR(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return d.useEffect(() => {
    const u = _l(r.current);
    o.current = a === "mounted" ? u : "none"
  }, [a]), We(() => {
    const u = r.current,
      f = s.current;
    if (f !== e) {
      const h = o.current,
        w = _l(u);
      e ? c("MOUNT") : w === "none" || (u == null ? void 0 : u.display) === "none" ? c("UNMOUNT") : c(f && h !== w ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e
    }
  }, [e, c]), We(() => {
    if (t) {
      let u;
      const f = t.ownerDocument.defaultView ? ? window,
        p = w => {
          const m = _l(r.current).includes(w.animationName);
          if (w.target === t && m && (c("ANIMATION_END"), !s.current)) {
            const b = t.style.animationFillMode;
            t.style.animationFillMode = "forwards", u = f.setTimeout(() => {
              t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b)
            })
          }
        },
        h = w => {
          w.target === t && (o.current = _l(r.current))
        };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        f.clearTimeout(u), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p)
      }
    } else c("ANIMATION_END")
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: d.useCallback(u => {
      u && (r.current = getComputedStyle(u)), n(u)
    }, [])
  }
}

function _l(e) {
  return (e == null ? void 0 : e.animationName) || "none"
}

function JR(e) {
  var r, s;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var Ad = 0;

function e2() {
  d.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ? ? yg()), document.body.insertAdjacentElement("beforeend", e[1] ? ? yg()), Ad++, () => {
      Ad === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()), Ad--
    }
  }, [])
}

function yg() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
}
var Qe = function () {
  return Qe = Object.assign || function (t) {
    for (var n, r = 1, s = arguments.length; r < s; r++) {
      n = arguments[r];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
    }
    return t
  }, Qe.apply(this, arguments)
};

function Nu(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]]);
  return n
}

function Dh(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, s = t.length, o; r < s; r++)(o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t))
}
var Mo = "right-scroll-bar-position",
  Lo = "width-before-scroll-bar",
  t2 = "with-scroll-bars-hidden",
  n2 = "--removed-body-scroll-bar-size";

function Od(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e
}

function r2(e, t) {
  var n = d.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value
        },
        set current(r) {
          var s = n.value;
          s !== r && (n.value = r, n.callback(r, s))
        }
      }
    }
  })[0];
  return n.callback = t, n.facade
}
var s2 = typeof window < "u" ? d.useLayoutEffect : d.useEffect,
  xg = new WeakMap;

function Ih(e, t) {
  var n = r2(null, function (r) {
    return e.forEach(function (s) {
      return Od(s, r)
    })
  });
  return s2(function () {
    var r = xg.get(n);
    if (r) {
      var s = new Set(r),
        o = new Set(e),
        i = n.current;
      s.forEach(function (a) {
        o.has(a) || Od(a, null)
      }), o.forEach(function (a) {
        s.has(a) || Od(a, i)
      })
    }
    xg.set(n, e)
  }, [e]), n
}

function o2(e) {
  return e
}

function i2(e, t) {
  t === void 0 && (t = o2);
  var n = [],
    r = !1,
    s = {
      read: function () {
        if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
        return n.length ? n[n.length - 1] : e
      },
      useMedium: function (o) {
        var i = t(o, r);
        return n.push(i),
          function () {
            n = n.filter(function (a) {
              return a !== i
            })
          }
      },
      assignSyncMedium: function (o) {
        for (r = !0; n.length;) {
          var i = n;
          n = [], i.forEach(o)
        }
        n = {
          push: function (a) {
            return o(a)
          },
          filter: function () {
            return n
          }
        }
      },
      assignMedium: function (o) {
        r = !0;
        var i = [];
        if (n.length) {
          var a = n;
          n = [], a.forEach(o), i = n
        }
        var c = function () {
            var f = i;
            i = [], f.forEach(o)
          },
          u = function () {
            return Promise.resolve().then(c)
          };
        u(), n = {
          push: function (f) {
            i.push(f), u()
          },
          filter: function (f) {
            return i = i.filter(f), n
          }
        }
      }
    };
  return s
}

function Mh(e) {
  e === void 0 && (e = {});
  var t = i2(null);
  return t.options = Qe({
    async: !0,
    ssr: !1
  }, e), t
}
var i1 = function (e) {
  var t = e.sideCar,
    n = Nu(e, ["sideCar"]);
  if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return d.createElement(r, Qe({}, n))
};
i1.isSideCarExport = !0;

function Lh(e, t) {
  return e.useMedium(t), i1
}
var a1 = Mh(),
  Dd = function () {},
  _u = d.forwardRef(function (e, t) {
    var n = d.useRef(null),
      r = d.useState({
        onScrollCapture: Dd,
        onWheelCapture: Dd,
        onTouchMoveCapture: Dd
      }),
      s = r[0],
      o = r[1],
      i = e.forwardProps,
      a = e.children,
      c = e.className,
      u = e.removeScrollBar,
      f = e.enabled,
      p = e.shards,
      h = e.sideCar,
      w = e.noIsolation,
      x = e.inert,
      m = e.allowPinchZoom,
      b = e.as,
      g = b === void 0 ? "div" : b,
      v = e.gapMode,
      y = Nu(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
      S = h,
      E = Ih([n, t]),
      _ = Qe(Qe({}, y), s);
    return d.createElement(d.Fragment, null, f && d.createElement(S, {
      sideCar: a1,
      removeScrollBar: u,
      shards: p,
      noIsolation: w,
      inert: x,
      setCallbacks: o,
      allowPinchZoom: !!m,
      lockRef: n,
      gapMode: v
    }), i ? d.cloneElement(d.Children.only(a), Qe(Qe({}, _), {
      ref: E
    })) : d.createElement(g, Qe({}, _, {
      className: c,
      ref: E
    }), a))
  });
_u.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
_u.classNames = {
  fullWidth: Lo,
  zeroRight: Mo
};
var a2 = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__
};

function l2() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = a2();
  return t && e.setAttribute("nonce", t), e
}

function c2(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}

function u2(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e)
}
var d2 = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = l2()) && (c2(t, n), u2(t)), e++
      },
      remove: function () {
        e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
      }
    }
  },
  f2 = function () {
    var e = d2();
    return function (t, n) {
      d.useEffect(function () {
        return e.add(t),
          function () {
            e.remove()
          }
      }, [t && n])
    }
  },
  ju = function () {
    var e = f2(),
      t = function (n) {
        var r = n.styles,
          s = n.dynamic;
        return e(r, s), null
      };
    return t
  },
  p2 = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
  },
  Id = function (e) {
    return parseInt(e || "", 10) || 0
  },
  h2 = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      s = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Id(n), Id(r), Id(s)]
  },
  m2 = function (e) {
    if (e === void 0 && (e = "margin"), typeof window > "u") return p2;
    var t = h2(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0])
    }
  },
  v2 = ju(),
  Fo = "data-scroll-locked",
  g2 = function (e, t, n, r) {
    var s = e.left,
      o = e.top,
      i = e.right,
      a = e.gap;
    return n === void 0 && (n = "margin"), `
  .`.concat(t2, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Fo, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(o, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Mo, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Lo, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Mo, " .").concat(Mo, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Lo, " .").concat(Lo, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Fo, `] {
    `).concat(n2, ": ").concat(a, `px;
  }
`)
  },
  wg = function () {
    var e = parseInt(document.body.getAttribute(Fo) || "0", 10);
    return isFinite(e) ? e : 0
  },
  y2 = function () {
    d.useEffect(function () {
      return document.body.setAttribute(Fo, (wg() + 1).toString()),
        function () {
          var e = wg() - 1;
          e <= 0 ? document.body.removeAttribute(Fo) : document.body.setAttribute(Fo, e.toString())
        }
    }, [])
  },
  Fh = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      s = r === void 0 ? "margin" : r;
    y2();
    var o = d.useMemo(function () {
      return m2(s)
    }, [s]);
    return d.createElement(v2, {
      styles: g2(o, !t, s, n ? "" : "!important")
    })
  },
  np = !1;
if (typeof window < "u") try {
  var jl = Object.defineProperty({}, "passive", {
    get: function () {
      return np = !0, !0
    }
  });
  window.addEventListener("test", jl, jl), window.removeEventListener("test", jl, jl)
} catch {
  np = !1
}
var no = np ? {
    passive: !1
  } : !1,
  x2 = function (e) {
    return e.tagName === "TEXTAREA"
  },
  l1 = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !x2(e) && n[t] === "visible")
  },
  w2 = function (e) {
    return l1(e, "overflowY")
  },
  b2 = function (e) {
    return l1(e, "overflowX")
  },
  bg = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var s = c1(e, r);
      if (s) {
        var o = u1(e, r),
          i = o[1],
          a = o[2];
        if (i > a) return !0
      }
      r = r.parentNode
    } while (r && r !== n.body);
    return !1
  },
  S2 = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r]
  },
  E2 = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r]
  },
  c1 = function (e, t) {
    return e === "v" ? w2(t) : b2(t)
  },
  u1 = function (e, t) {
    return e === "v" ? S2(t) : E2(t)
  },
  C2 = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1
  },
  N2 = function (e, t, n, r, s) {
    var o = C2(e, window.getComputedStyle(t).direction),
      i = o * r,
      a = n.target,
      c = t.contains(a),
      u = !1,
      f = i > 0,
      p = 0,
      h = 0;
    do {
      var w = u1(e, a),
        x = w[0],
        m = w[1],
        b = w[2],
        g = m - b - o * x;
      (x || g) && c1(e, a) && (p += g, h += x), a instanceof ShadowRoot ? a = a.host : a = a.parentNode
    } while (!c && a !== document.body || c && (t.contains(a) || t === a));
    return (f && (Math.abs(p) < 1 || !s) || !f && (Math.abs(h) < 1 || !s)) && (u = !0), u
  },
  kl = function (e) {
    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
  },
  Sg = function (e) {
    return [e.deltaX, e.deltaY]
  },
  Eg = function (e) {
    return e && "current" in e ? e.current : e
  },
  _2 = function (e, t) {
    return e[0] === t[0] && e[1] === t[1]
  },
  j2 = function (e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
  },
  k2 = 0,
  ro = [];

function T2(e) {
  var t = d.useRef([]),
    n = d.useRef([0, 0]),
    r = d.useRef(),
    s = d.useState(k2++)[0],
    o = d.useState(ju)[0],
    i = d.useRef(e);
  d.useEffect(function () {
    i.current = e
  }, [e]), d.useEffect(function () {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var m = Dh([e.lockRef.current], (e.shards || []).map(Eg), !0).filter(Boolean);
      return m.forEach(function (b) {
          return b.classList.add("allow-interactivity-".concat(s))
        }),
        function () {
          document.body.classList.remove("block-interactivity-".concat(s)), m.forEach(function (b) {
            return b.classList.remove("allow-interactivity-".concat(s))
          })
        }
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = d.useCallback(function (m, b) {
      if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey) return !i.current.allowPinchZoom;
      var g = kl(m),
        v = n.current,
        y = "deltaX" in m ? m.deltaX : v[0] - g[0],
        S = "deltaY" in m ? m.deltaY : v[1] - g[1],
        E, _ = m.target,
        C = Math.abs(y) > Math.abs(S) ? "h" : "v";
      if ("touches" in m && C === "h" && _.type === "range") return !1;
      var j = bg(C, _);
      if (!j) return !0;
      if (j ? E = C : (E = C === "v" ? "h" : "v", j = bg(C, _)), !j) return !1;
      if (!r.current && "changedTouches" in m && (y || S) && (r.current = E), !E) return !0;
      var P = r.current || E;
      return N2(P, b, m, P === "h" ? y : S, !0)
    }, []),
    c = d.useCallback(function (m) {
      var b = m;
      if (!(!ro.length || ro[ro.length - 1] !== o)) {
        var g = "deltaY" in b ? Sg(b) : kl(b),
          v = t.current.filter(function (E) {
            return E.name === b.type && (E.target === b.target || b.target === E.shadowParent) && _2(E.delta, g)
          })[0];
        if (v && v.should) {
          b.cancelable && b.preventDefault();
          return
        }
        if (!v) {
          var y = (i.current.shards || []).map(Eg).filter(Boolean).filter(function (E) {
              return E.contains(b.target)
            }),
            S = y.length > 0 ? a(b, y[0]) : !i.current.noIsolation;
          S && b.cancelable && b.preventDefault()
        }
      }
    }, []),
    u = d.useCallback(function (m, b, g, v) {
      var y = {
        name: m,
        delta: b,
        target: g,
        should: v,
        shadowParent: P2(g)
      };
      t.current.push(y), setTimeout(function () {
        t.current = t.current.filter(function (S) {
          return S !== y
        })
      }, 1)
    }, []),
    f = d.useCallback(function (m) {
      n.current = kl(m), r.current = void 0
    }, []),
    p = d.useCallback(function (m) {
      u(m.type, Sg(m), m.target, a(m, e.lockRef.current))
    }, []),
    h = d.useCallback(function (m) {
      u(m.type, kl(m), m.target, a(m, e.lockRef.current))
    }, []);
  d.useEffect(function () {
    return ro.push(o), e.setCallbacks({
        onScrollCapture: p,
        onWheelCapture: p,
        onTouchMoveCapture: h
      }), document.addEventListener("wheel", c, no), document.addEventListener("touchmove", c, no), document.addEventListener("touchstart", f, no),
      function () {
        ro = ro.filter(function (m) {
          return m !== o
        }), document.removeEventListener("wheel", c, no), document.removeEventListener("touchmove", c, no), document.removeEventListener("touchstart", f, no)
      }
  }, []);
  var w = e.removeScrollBar,
    x = e.inert;
  return d.createElement(d.Fragment, null, x ? d.createElement(o, {
    styles: j2(s)
  }) : null, w ? d.createElement(Fh, {
    gapMode: e.gapMode
  }) : null)
}

function P2(e) {
  for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t
}
const R2 = Lh(a1, T2);
var d1 = d.forwardRef(function (e, t) {
  return d.createElement(_u, Qe({}, e, {
    ref: t,
    sideCar: R2
  }))
});
d1.classNames = _u.classNames;
var A2 = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body
  },
  so = new WeakMap,
  Tl = new WeakMap,
  Pl = {},
  Md = 0,
  f1 = function (e) {
    return e && (e.host || f1(e.parentNode))
  },
  O2 = function (e, t) {
    return t.map(function (n) {
      if (e.contains(n)) return n;
      var r = f1(n);
      return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null)
    }).filter(function (n) {
      return !!n
    })
  },
  D2 = function (e, t, n, r) {
    var s = O2(t, Array.isArray(e) ? e : [e]);
    Pl[n] || (Pl[n] = new WeakMap);
    var o = Pl[n],
      i = [],
      a = new Set,
      c = new Set(s),
      u = function (p) {
        !p || a.has(p) || (a.add(p), u(p.parentNode))
      };
    s.forEach(u);
    var f = function (p) {
      !p || c.has(p) || Array.prototype.forEach.call(p.children, function (h) {
        if (a.has(h)) f(h);
        else try {
          var w = h.getAttribute(r),
            x = w !== null && w !== "false",
            m = (so.get(h) || 0) + 1,
            b = (o.get(h) || 0) + 1;
          so.set(h, m), o.set(h, b), i.push(h), m === 1 && x && Tl.set(h, !0), b === 1 && h.setAttribute(n, "true"), x || h.setAttribute(r, "true")
        } catch (g) {
          console.error("aria-hidden: cannot operate on ", h, g)
        }
      })
    };
    return f(t), a.clear(), Md++,
      function () {
        i.forEach(function (p) {
          var h = so.get(p) - 1,
            w = o.get(p) - 1;
          so.set(p, h), o.set(p, w), h || (Tl.has(p) || p.removeAttribute(r), Tl.delete(p)), w || p.removeAttribute(n)
        }), Md--, Md || (so = new WeakMap, so = new WeakMap, Tl = new WeakMap, Pl = {})
      }
  },
  $h = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      s = A2(e);
    return s ? (r.push.apply(r, Array.from(s.querySelectorAll("[aria-live]"))), D2(r, s, n, "aria-hidden")) : function () {
      return null
    }
  },
  Vh = "Dialog",
  [p1, wM] = BR(Vh),
  [I2, On] = p1(Vh),
  h1 = e => {
    const {
      __scopeDialog: t,
      children: n,
      open: r,
      defaultOpen: s,
      onOpenChange: o,
      modal: i = !0
    } = e, a = d.useRef(null), c = d.useRef(null), [u = !1, f] = yr({
      prop: r,
      defaultProp: s,
      onChange: o
    });
    return l.jsx(I2, {
      scope: t,
      triggerRef: a,
      contentRef: c,
      contentId: _n(),
      titleId: _n(),
      descriptionId: _n(),
      open: u,
      onOpenChange: f,
      onOpenToggle: d.useCallback(() => f(p => !p), [f]),
      modal: i,
      children: n
    })
  };
h1.displayName = Vh;
var m1 = "DialogTrigger",
  M2 = d.forwardRef((e, t) => {
    const {
      __scopeDialog: n,
      ...r
    } = e, s = On(m1, n), o = ue(t, s.triggerRef);
    return l.jsx(ne.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": s.open,
      "aria-controls": s.contentId,
      "data-state": Uh(s.open),
      ...r,
      ref: o,
      onClick: q(e.onClick, s.onOpenToggle)
    })
  });
M2.displayName = m1;
var zh = "DialogPortal",
  [L2, v1] = p1(zh, {
    forceMount: void 0
  }),
  g1 = e => {
    const {
      __scopeDialog: t,
      forceMount: n,
      children: r,
      container: s
    } = e, o = On(zh, t);
    return l.jsx(L2, {
      scope: t,
      forceMount: n,
      children: d.Children.map(r, i => l.jsx(Cu, {
        present: n || o.open,
        children: l.jsx(Tw, {
          asChild: !0,
          container: s,
          children: i
        })
      }))
    })
  };
g1.displayName = zh;
var Pc = "DialogOverlay",
  y1 = d.forwardRef((e, t) => {
    const n = v1(Pc, e.__scopeDialog),
      {
        forceMount: r = n.forceMount,
        ...s
      } = e,
      o = On(Pc, e.__scopeDialog);
    return o.modal ? l.jsx(Cu, {
      present: r || o.open,
      children: l.jsx(F2, {
        ...s,
        ref: t
      })
    }) : null
  });
y1.displayName = Pc;
var F2 = d.forwardRef((e, t) => {
    const {
      __scopeDialog: n,
      ...r
    } = e, s = On(Pc, n);
    return l.jsx(d1, {
      as: gr,
      allowPinchZoom: !0,
      shards: [s.contentRef],
      children: l.jsx(ne.div, {
        "data-state": Uh(s.open),
        ...r,
        ref: t,
        style: {
          pointerEvents: "auto",
          ...r.style
        }
      })
    })
  }),
  Us = "DialogContent",
  x1 = d.forwardRef((e, t) => {
    const n = v1(Us, e.__scopeDialog),
      {
        forceMount: r = n.forceMount,
        ...s
      } = e,
      o = On(Us, e.__scopeDialog);
    return l.jsx(Cu, {
      present: r || o.open,
      children: o.modal ? l.jsx($2, {
        ...s,
        ref: t
      }) : l.jsx(V2, {
        ...s,
        ref: t
      })
    })
  });
x1.displayName = Us;
var $2 = d.forwardRef((e, t) => {
    const n = On(Us, e.__scopeDialog),
      r = d.useRef(null),
      s = ue(t, n.contentRef, r);
    return d.useEffect(() => {
      const o = r.current;
      if (o) return $h(o)
    }, []), l.jsx(w1, {
      ...e,
      ref: s,
      trapFocus: n.open,
      disableOutsidePointerEvents: !0,
      onCloseAutoFocus: q(e.onCloseAutoFocus, o => {
        var i;
        o.preventDefault(), (i = n.triggerRef.current) == null || i.focus()
      }),
      onPointerDownOutside: q(e.onPointerDownOutside, o => {
        const i = o.detail.originalEvent,
          a = i.button === 0 && i.ctrlKey === !0;
        (i.button === 2 || a) && o.preventDefault()
      }),
      onFocusOutside: q(e.onFocusOutside, o => o.preventDefault())
    })
  }),
  V2 = d.forwardRef((e, t) => {
    const n = On(Us, e.__scopeDialog),
      r = d.useRef(!1),
      s = d.useRef(!1);
    return l.jsx(w1, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: o => {
        var i, a;
        (i = e.onCloseAutoFocus) == null || i.call(e, o), o.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(), o.preventDefault()), r.current = !1, s.current = !1
      },
      onInteractOutside: o => {
        var c, u;
        (c = e.onInteractOutside) == null || c.call(e, o), o.defaultPrevented || (r.current = !0, o.detail.originalEvent.type === "pointerdown" && (s.current = !0));
        const i = o.target;
        ((u = n.triggerRef.current) == null ? void 0 : u.contains(i)) && o.preventDefault(), o.detail.originalEvent.type === "focusin" && s.current && o.preventDefault()
      }
    })
  }),
  w1 = d.forwardRef((e, t) => {
    const {
      __scopeDialog: n,
      trapFocus: r,
      onOpenAutoFocus: s,
      onCloseAutoFocus: o,
      ...i
    } = e, a = On(Us, n), c = d.useRef(null), u = ue(t, c);
    return e2(), l.jsxs(l.Fragment, {
      children: [l.jsx(Eu, {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: s,
        onUnmountAutoFocus: o,
        children: l.jsx(yh, {
          role: "dialog",
          id: a.contentId,
          "aria-describedby": a.descriptionId,
          "aria-labelledby": a.titleId,
          "data-state": Uh(a.open),
          ...i,
          ref: u,
          onDismiss: () => a.onOpenChange(!1)
        })
      }), l.jsxs(l.Fragment, {
        children: [l.jsx(z2, {
          titleId: a.titleId
        }), l.jsx(U2, {
          contentRef: c,
          descriptionId: a.descriptionId
        })]
      })]
    })
  }),
  Bh = "DialogTitle",
  b1 = d.forwardRef((e, t) => {
    const {
      __scopeDialog: n,
      ...r
    } = e, s = On(Bh, n);
    return l.jsx(ne.h2, {
      id: s.titleId,
      ...r,
      ref: t
    })
  });
b1.displayName = Bh;
var S1 = "DialogDescription",
  E1 = d.forwardRef((e, t) => {
    const {
      __scopeDialog: n,
      ...r
    } = e, s = On(S1, n);
    return l.jsx(ne.p, {
      id: s.descriptionId,
      ...r,
      ref: t
    })
  });
E1.displayName = S1;
var C1 = "DialogClose",
  N1 = d.forwardRef((e, t) => {
    const {
      __scopeDialog: n,
      ...r
    } = e, s = On(C1, n);
    return l.jsx(ne.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: q(e.onClick, () => s.onOpenChange(!1))
    })
  });
N1.displayName = C1;

function Uh(e) {
  return e ? "open" : "closed"
}
var _1 = "DialogTitleWarning",
  [bM, j1] = zR(_1, {
    contentName: Us,
    titleName: Bh,
    docsSlug: "dialog"
  }),
  z2 = ({
    titleId: e
  }) => {
    const t = j1(_1),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return d.useEffect(() => {
      e && (document.getElementById(e) || console.error(n))
    }, [n, e]), null
  },
  B2 = "DialogDescriptionWarning",
  U2 = ({
    contentRef: e,
    descriptionId: t
  }) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${j1(B2).contentName}}.`;
    return d.useEffect(() => {
      var o;
      const s = (o = e.current) == null ? void 0 : o.getAttribute("aria-describedby");
      t && s && (document.getElementById(t) || console.warn(r))
    }, [r, e, t]), null
  },
  k1 = h1,
  T1 = g1,
  ku = y1,
  Tu = x1,
  Pu = b1,
  Ru = E1,
  P1 = N1;
const R1 = k1,
  W2 = T1,
  A1 = d.forwardRef(({
    className: e,
    ...t
  }, n) => l.jsx(ku, {
    ref: n,
    className: ee("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
    ...t
  }));
A1.displayName = ku.displayName;
const Wh = d.forwardRef(({
  className: e,
  children: t,
  ...n
}, r) => l.jsxs(W2, {
  children: [l.jsx(A1, {}), l.jsxs(Tu, {
    ref: r,
    className: ee("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", e),
    ...n,
    children: [t, l.jsxs(P1, {
      className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
      children: [l.jsx(vh, {
        className: "h-4 w-4"
      }), l.jsx("span", {
        className: "sr-only",
        children: "Close"
      })]
    })]
  })]
}));
Wh.displayName = Tu.displayName;
const Hh = ({
  className: e,
  ...t
}) => l.jsx("div", {
  className: ee("flex flex-col space-y-1.5 text-center sm:text-left", e),
  ...t
});
Hh.displayName = "DialogHeader";
const Zh = ({
  className: e,
  ...t
}) => l.jsx("div", {
  className: ee("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
  ...t
});
Zh.displayName = "DialogFooter";
const Gh = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx(Pu, {
  ref: n,
  className: ee("text-lg font-semibold leading-none tracking-tight", e),
  ...t
}));
Gh.displayName = Pu.displayName;
const Kh = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx(Ru, {
  ref: n,
  className: ee("text-sm text-muted-foreground", e),
  ...t
}));
Kh.displayName = Ru.displayName;
const H2 = e => {
    const t = Au();
    t.push(e), localStorage.setItem("learning_sheets", JSON.stringify(t))
  },
  Au = () => {
    const e = localStorage.getItem("learning_sheets");
    return e ? JSON.parse(e) : []
  },
  Yh = e => Au().find(n => n.id === e),
  O1 = e => {
    const t = localStorage.getItem(`favorites_${e}`);
    return t ? JSON.parse(t) : []
  },
  D1 = (e, t) => {
    const n = O1(e);
    n.includes(t) || (n.push(t), localStorage.setItem(`favorites_${e}`, JSON.stringify(n)))
  },
  I1 = e => {
    const t = O1(e);
    return Au().filter(r => t.includes(r.id))
  },
  Z2 = e => {
    const t = Qh();
    t.push(e), localStorage.setItem("exams", JSON.stringify(t))
  },
  Qh = () => {
    const e = localStorage.getItem("exams");
    return e ? JSON.parse(e) : []
  },
  M1 = e => Qh().find(n => n.id === e),
  G2 = e => Qh().filter(n => n.creatorEmail === e),
  K2 = e => {
    const t = L1();
    t.push(e), localStorage.setItem("exam_responses", JSON.stringify(t))
  },
  L1 = () => {
    const e = localStorage.getItem("exam_responses");
    return e ? JSON.parse(e) : []
  },
  F1 = e => L1().filter(n => n.examId === e),
  qs = () => {
    const e = localStorage.getItem("user");
    return e ? JSON.parse(e) : null
  },
  Xh = ({
    isOpen: e,
    onClose: t,
    sheet: n,
    onTest: r,
    onAddToList: s,
    onDownload: o
  }) => {
    const a = !!qs();
    return n ? l.jsx(R1, {
      open: e,
      onOpenChange: t,
      children: l.jsxs(Wh, {
        className: "sm:max-w-[600px] max-h-[90vh] overflow-y-auto",
        children: [l.jsxs(Hh, {
          children: [l.jsx(Gh, {
            className: "text-xl",
            children: n.title
          }), l.jsxs(Kh, {
            className: "flex justify-between text-sm pt-2",
            children: [l.jsxs("span", {
              children: ["作者：", n.author]
            }), l.jsxs("span", {
              children: ["建立時間：", n.createdAt]
            })]
          })]
        }), l.jsxs("div", {
          className: "py-4",
          children: [l.jsx("div", {
            className: "aspect-w-16 aspect-h-9 bg-penpen-light rounded-md mb-4 overflow-hidden",
            children: n.imageUrl ? l.jsx("img", {
              src: n.imageUrl,
              alt: n.title,
              className: "object-cover w-full h-full"
            }) : l.jsx("div", {
              className: "w-full h-full flex items-center justify-center",
              children: l.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1,
                stroke: "currentColor",
                className: "w-16 h-16 text-penpen-primary/40",
                children: l.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m-3-14.25v14.25"
                })
              })
            })
          }), l.jsxs("div", {
            className: "space-y-4",
            children: [l.jsxs("div", {
              className: "flex space-x-4",
              children: [l.jsxs("div", {
                className: "bg-penpen-light px-3 py-2 rounded text-sm",
                children: [l.jsx("span", {
                  className: "font-medium block",
                  children: "建議測試時間"
                }), l.jsxs("span", {
                  children: [n.duration, " 分鐘"]
                })]
              }), l.jsxs("div", {
                className: "bg-penpen-light px-3 py-2 rounded text-sm",
                children: [l.jsx("span", {
                  className: "font-medium block",
                  children: "適合對象"
                }), l.jsx("span", {
                  children: n.target
                })]
              })]
            }), l.jsxs("div", {
              children: [l.jsx("h4", {
                className: "font-medium mb-2",
                children: "學習單介紹"
              }), l.jsx("p", {
                className: "text-gray-700",
                children: "這份學習單旨在幫助學生理解並應用相關概念。透過一系列精心設計的問題，學生能夠鞏固所學知識，培養批判性思維能力。適合課堂練習或課後複習使用。"
              })]
            })]
          })]
        }), l.jsxs(Zh, {
          className: "flex flex-col sm:flex-row gap-2 sm:justify-between",
          children: [l.jsx(me, {
            variant: "outline",
            onClick: () => r(n.id),
            className: "w-full sm:w-auto",
            children: "試測"
          }), l.jsx(me, {
            onClick: () => s(n.id),
            className: "w-full sm:w-auto",
            disabled: !a,
            children: a ? "加入使用者清單" : "需要登入"
          }), l.jsx(me, {
            variant: "secondary",
            onClick: () => o(n.id),
            className: "w-full sm:w-auto",
            children: "下載學單"
          })]
        })]
      })
    }) : null
  },
  Cg = [{
    id: "1",
    title: "數學應用題練習",
    author: "王小明老師",
    createdAt: "2024-05-01",
    duration: 30,
    target: "國小",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80",
    onOpenDetail: () => {}
  }, {
    id: "2",
    title: "英語單字記憶挑戰",
    author: "張美玲老師",
    createdAt: "2024-05-03",
    duration: 20,
    target: "國中",
    imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80",
    onOpenDetail: () => {}
  }, {
    id: "3",
    title: "自然科學實驗觀察",
    author: "李大方老師",
    createdAt: "2024-05-05",
    duration: 45,
    target: "高中",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80",
    onOpenDetail: () => {}
  }, {
    id: "4",
    title: "社會議題探討",
    author: "陳思思老師",
    createdAt: "2024-05-07",
    duration: 40,
    target: "高中",
    onOpenDetail: () => {}
  }, {
    id: "5",
    title: "藝術創作引導",
    author: "林藝術家",
    createdAt: "2024-05-08",
    duration: 60,
    target: "成人",
    imageUrl: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80",
    onOpenDetail: () => {}
  }],
  Y2 = () => {
    const [e, t] = d.useState(null), [n, r] = d.useState(!1), {
      toast: s
    } = Qs(), o = f => {
      const p = Cg.find(h => h.id === f);
      p && (t(p), r(!0))
    }, i = () => {
      r(!1), t(null)
    }, a = f => {
      s({
        title: "試測功能",
        description: "此功能將在未來版本推出"
      })
    }, c = f => {
      s({
        title: "需要登入",
        description: "請先登入以使用此功能"
      })
    }, u = f => {
      s({
        title: "下載開始",
        description: "學單下載中..."
      })
    };
    return l.jsxs("div", {
      className: "min-h-screen flex flex-col",
      children: [l.jsx(Er, {}), l.jsxs("main", {
        className: "flex-grow",
        children: [l.jsx(FR, {}), l.jsx(VR, {}), l.jsx("section", {
          className: "py-16 bg-gray-50",
          children: l.jsxs("div", {
            className: "container mx-auto",
            children: [l.jsxs("div", {
              className: "flex justify-between items-center mb-8",
              children: [l.jsx("h2", {
                className: "text-2xl md:text-3xl font-bold",
                children: "最新學習單"
              }), l.jsx(me, {
                asChild: !0,
                variant: "outline",
                children: l.jsx(Rt, {
                  to: "/learning-sheets",
                  children: "查看全部"
                })
              })]
            }), l.jsx("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6",
              children: Cg.map(f => l.jsx(Oh, {
                ...f,
                onOpenDetail: o
              }, f.id))
            })]
          })
        }), l.jsx(Xh, {
          isOpen: n,
          onClose: i,
          sheet: e,
          onTest: a,
          onAddToList: c,
          onDownload: u
        })]
      }), l.jsx(Cr, {})]
    })
  },
  Q2 = () => {
    const [e, t] = d.useState([]), [n, r] = d.useState(null), [s, o] = d.useState(!1), {
      toast: i
    } = Qs(), a = hn(), c = qs();
    d.useEffect(() => {
      u()
    }, []);
    const u = () => {
        const g = Au().filter(v => v.isEnabled).map(v => ({
          id: v.id,
          title: v.title,
          author: v.author,
          createdAt: new Date(v.createdAt).toLocaleDateString(),
          duration: v.duration,
          target: v.target[0],
          imageUrl: v.imageUrl,
          onOpenDetail: f
        }));
        t(g)
      },
      f = m => {
        const b = e.find(g => g.id === m);
        b && (r(b), o(!0))
      },
      p = () => {
        o(!1), r(null)
      },
      h = m => {
        if (!c) {
          i({
            title: "需要登入",
            description: "請先登入以使用此功能"
          });
          return
        }
        a(`/create-exam?sheetId=${m}&mode=test`)
      },
      w = m => {
        if (!c) {
          i({
            title: "需要登入",
            description: "請先登入以使用此功能"
          });
          return
        }
        try {
          D1(c.email, m), i({
            title: "成功",
            description: "已加入您的最愛清單"
          })
        } catch {
          i({
            title: "錯誤",
            description: "加入最愛時發生問題",
            variant: "destructive"
          })
        }
      },
      x = m => {
        i({
          title: "下載開始",
          description: "學單下載中..."
        })
      };
    return l.jsxs("div", {
      className: "min-h-screen flex flex-col",
      children: [l.jsx(Er, {}), l.jsxs("main", {
        className: "flex-grow",
        children: [l.jsx("section", {
          className: "bg-penpen-light py-12",
          children: l.jsxs("div", {
            className: "container mx-auto",
            children: [l.jsx("h1", {
              className: "text-3xl md:text-4xl font-bold mb-4 text-center",
              children: "學單列表"
            }), l.jsx("p", {
              className: "text-gray-600 text-center max-w-2xl mx-auto mb-8",
              children: "探索各種領域的學習單，適合不同年齡層和學習需求。點擊卡片查看詳情。"
            })]
          })
        }), l.jsx("section", {
          className: "py-12",
          children: l.jsx("div", {
            className: "container mx-auto",
            children: e.length === 0 ? l.jsx("div", {
              className: "text-center py-16",
              children: l.jsx("p", {
                className: "text-gray-500 text-xl",
                children: "目前還沒有可用的學習單"
              })
            }) : l.jsx("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
              children: e.map(m => l.jsx(Oh, {
                ...m,
                onOpenDetail: f
              }, m.id))
            })
          })
        }), l.jsx(Xh, {
          isOpen: s,
          onClose: p,
          sheet: n,
          onTest: h,
          onAddToList: w,
          onDownload: x
        })]
      }), l.jsx(Cr, {})]
    })
  },
  X2 = () => {
    const e = yi();
    return d.useEffect(() => {
      console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }, [e.pathname]), l.jsx("div", {
      className: "min-h-screen flex items-center justify-center bg-gray-100",
      children: l.jsxs("div", {
        className: "text-center",
        children: [l.jsx("h1", {
          className: "text-4xl font-bold mb-4",
          children: "404"
        }), l.jsx("p", {
          className: "text-xl text-gray-600 mb-4",
          children: "Oops! Page not found"
        }), l.jsx("a", {
          href: "/",
          className: "text-blue-500 hover:text-blue-700 underline",
          children: "Return to Home"
        })]
      })
    })
  },
  rt = d.forwardRef(({
    className: e,
    type: t,
    ...n
  }, r) => l.jsx("input", {
    type: t,
    className: ee("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
    ref: r,
    ...n
  }));
rt.displayName = "Input";
var q2 = d.createContext(void 0);

function Ou(e) {
  const t = d.useContext(q2);
  return e || t || "ltr"
}
var Ld = "rovingFocusGroup.onEntryFocus",
  J2 = {
    bubbles: !1,
    cancelable: !0
  },
  Du = "RovingFocusGroup",
  [rp, $1, eA] = fh(Du),
  [tA, Iu] = An(Du, [eA]),
  [nA, rA] = tA(Du),
  V1 = d.forwardRef((e, t) => l.jsx(rp.Provider, {
    scope: e.__scopeRovingFocusGroup,
    children: l.jsx(rp.Slot, {
      scope: e.__scopeRovingFocusGroup,
      children: l.jsx(sA, {
        ...e,
        ref: t
      })
    })
  }));
V1.displayName = Du;
var sA = d.forwardRef((e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      orientation: r,
      loop: s = !1,
      dir: o,
      currentTabStopId: i,
      defaultCurrentTabStopId: a,
      onCurrentTabStopIdChange: c,
      onEntryFocus: u,
      preventScrollOnEntryFocus: f = !1,
      ...p
    } = e, h = d.useRef(null), w = ue(t, h), x = Ou(o), [m = null, b] = yr({
      prop: i,
      defaultProp: a,
      onChange: c
    }), [g, v] = d.useState(!1), y = it(u), S = $1(n), E = d.useRef(!1), [_, C] = d.useState(0);
    return d.useEffect(() => {
      const j = h.current;
      if (j) return j.addEventListener(Ld, y), () => j.removeEventListener(Ld, y)
    }, [y]), l.jsx(nA, {
      scope: n,
      orientation: r,
      dir: x,
      loop: s,
      currentTabStopId: m,
      onItemFocus: d.useCallback(j => b(j), [b]),
      onItemShiftTab: d.useCallback(() => v(!0), []),
      onFocusableItemAdd: d.useCallback(() => C(j => j + 1), []),
      onFocusableItemRemove: d.useCallback(() => C(j => j - 1), []),
      children: l.jsx(ne.div, {
        tabIndex: g || _ === 0 ? -1 : 0,
        "data-orientation": r,
        ...p,
        ref: w,
        style: {
          outline: "none",
          ...e.style
        },
        onMouseDown: q(e.onMouseDown, () => {
          E.current = !0
        }),
        onFocus: q(e.onFocus, j => {
          const P = !E.current;
          if (j.target === j.currentTarget && P && !g) {
            const O = new CustomEvent(Ld, J2);
            if (j.currentTarget.dispatchEvent(O), !O.defaultPrevented) {
              const z = S().filter(W => W.focusable),
                R = z.find(W => W.active),
                D = z.find(W => W.id === m),
                G = [R, D, ...z].filter(Boolean).map(W => W.ref.current);
              U1(G, f)
            }
          }
          E.current = !1
        }),
        onBlur: q(e.onBlur, () => v(!1))
      })
    })
  }),
  z1 = "RovingFocusGroupItem",
  B1 = d.forwardRef((e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: s = !1,
      tabStopId: o,
      ...i
    } = e, a = _n(), c = o || a, u = rA(z1, n), f = u.currentTabStopId === c, p = $1(n), {
      onFocusableItemAdd: h,
      onFocusableItemRemove: w
    } = u;
    return d.useEffect(() => {
      if (r) return h(), () => w()
    }, [r, h, w]), l.jsx(rp.ItemSlot, {
      scope: n,
      id: c,
      focusable: r,
      active: s,
      children: l.jsx(ne.span, {
        tabIndex: f ? 0 : -1,
        "data-orientation": u.orientation,
        ...i,
        ref: t,
        onMouseDown: q(e.onMouseDown, x => {
          r ? u.onItemFocus(c) : x.preventDefault()
        }),
        onFocus: q(e.onFocus, () => u.onItemFocus(c)),
        onKeyDown: q(e.onKeyDown, x => {
          if (x.key === "Tab" && x.shiftKey) {
            u.onItemShiftTab();
            return
          }
          if (x.target !== x.currentTarget) return;
          const m = aA(x, u.orientation, u.dir);
          if (m !== void 0) {
            if (x.metaKey || x.ctrlKey || x.altKey || x.shiftKey) return;
            x.preventDefault();
            let g = p().filter(v => v.focusable).map(v => v.ref.current);
            if (m === "last") g.reverse();
            else if (m === "prev" || m === "next") {
              m === "prev" && g.reverse();
              const v = g.indexOf(x.currentTarget);
              g = u.loop ? lA(g, v + 1) : g.slice(v + 1)
            }
            setTimeout(() => U1(g))
          }
        })
      })
    })
  });
B1.displayName = z1;
var oA = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};

function iA(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e
}

function aA(e, t, n) {
  const r = iA(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return oA[r]
}

function U1(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({
        preventScroll: t
      }), document.activeElement !== n)) return
}

function lA(e, t) {
  return e.map((n, r) => e[(t + r) % e.length])
}
var W1 = V1,
  H1 = B1,
  qh = "Tabs",
  [cA, SM] = An(qh, [Iu]),
  Z1 = Iu(),
  [uA, Jh] = cA(qh),
  G1 = d.forwardRef((e, t) => {
    const {
      __scopeTabs: n,
      value: r,
      onValueChange: s,
      defaultValue: o,
      orientation: i = "horizontal",
      dir: a,
      activationMode: c = "automatic",
      ...u
    } = e, f = Ou(a), [p, h] = yr({
      prop: r,
      onChange: s,
      defaultProp: o
    });
    return l.jsx(uA, {
      scope: n,
      baseId: _n(),
      value: p,
      onValueChange: h,
      orientation: i,
      dir: f,
      activationMode: c,
      children: l.jsx(ne.div, {
        dir: f,
        "data-orientation": i,
        ...u,
        ref: t
      })
    })
  });
G1.displayName = qh;
var K1 = "TabsList",
  Y1 = d.forwardRef((e, t) => {
    const {
      __scopeTabs: n,
      loop: r = !0,
      ...s
    } = e, o = Jh(K1, n), i = Z1(n);
    return l.jsx(W1, {
      asChild: !0,
      ...i,
      orientation: o.orientation,
      dir: o.dir,
      loop: r,
      children: l.jsx(ne.div, {
        role: "tablist",
        "aria-orientation": o.orientation,
        ...s,
        ref: t
      })
    })
  });
Y1.displayName = K1;
var Q1 = "TabsTrigger",
  X1 = d.forwardRef((e, t) => {
    const {
      __scopeTabs: n,
      value: r,
      disabled: s = !1,
      ...o
    } = e, i = Jh(Q1, n), a = Z1(n), c = eb(i.baseId, r), u = tb(i.baseId, r), f = r === i.value;
    return l.jsx(H1, {
      asChild: !0,
      ...a,
      focusable: !s,
      active: f,
      children: l.jsx(ne.button, {
        type: "button",
        role: "tab",
        "aria-selected": f,
        "aria-controls": u,
        "data-state": f ? "active" : "inactive",
        "data-disabled": s ? "" : void 0,
        disabled: s,
        id: c,
        ...o,
        ref: t,
        onMouseDown: q(e.onMouseDown, p => {
          !s && p.button === 0 && p.ctrlKey === !1 ? i.onValueChange(r) : p.preventDefault()
        }),
        onKeyDown: q(e.onKeyDown, p => {
          [" ", "Enter"].includes(p.key) && i.onValueChange(r)
        }),
        onFocus: q(e.onFocus, () => {
          const p = i.activationMode !== "manual";
          !f && !s && p && i.onValueChange(r)
        })
      })
    })
  });
X1.displayName = Q1;
var q1 = "TabsContent",
  J1 = d.forwardRef((e, t) => {
    const {
      __scopeTabs: n,
      value: r,
      forceMount: s,
      children: o,
      ...i
    } = e, a = Jh(q1, n), c = eb(a.baseId, r), u = tb(a.baseId, r), f = r === a.value, p = d.useRef(f);
    return d.useEffect(() => {
      const h = requestAnimationFrame(() => p.current = !1);
      return () => cancelAnimationFrame(h)
    }, []), l.jsx(ws, {
      present: s || f,
      children: ({
        present: h
      }) => l.jsx(ne.div, {
        "data-state": f ? "active" : "inactive",
        "data-orientation": a.orientation,
        role: "tabpanel",
        "aria-labelledby": c,
        hidden: !h,
        id: u,
        tabIndex: 0,
        ...i,
        ref: t,
        style: {
          ...e.style,
          animationDuration: p.current ? "0s" : void 0
        },
        children: h && o
      })
    })
  });
J1.displayName = q1;

function eb(e, t) {
  return `${e}-trigger-${t}`
}

function tb(e, t) {
  return `${e}-content-${t}`
}
var dA = G1,
  nb = Y1,
  rb = X1,
  sb = J1;
const ob = dA,
  em = d.forwardRef(({
    className: e,
    ...t
  }, n) => l.jsx(nb, {
    ref: n,
    className: ee("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", e),
    ...t
  }));
em.displayName = nb.displayName;
const ba = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx(rb, {
  ref: n,
  className: ee("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", e),
  ...t
}));
ba.displayName = rb.displayName;
const Sa = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx(sb, {
  ref: n,
  className: ee("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", e),
  ...t
}));
Sa.displayName = sb.displayName;
var Se;
(function (e) {
  e.assertEqual = s => s;

  function t(s) {}
  e.assertIs = t;

  function n(s) {
    throw new Error
  }
  e.assertNever = n, e.arrayToEnum = s => {
    const o = {};
    for (const i of s) o[i] = i;
    return o
  }, e.getValidEnumValues = s => {
    const o = e.objectKeys(s).filter(a => typeof s[s[a]] != "number"),
      i = {};
    for (const a of o) i[a] = s[a];
    return e.objectValues(i)
  }, e.objectValues = s => e.objectKeys(s).map(function (o) {
    return s[o]
  }), e.objectKeys = typeof Object.keys == "function" ? s => Object.keys(s) : s => {
    const o = [];
    for (const i in s) Object.prototype.hasOwnProperty.call(s, i) && o.push(i);
    return o
  }, e.find = (s, o) => {
    for (const i of s)
      if (o(i)) return i
  }, e.isInteger = typeof Number.isInteger == "function" ? s => Number.isInteger(s) : s => typeof s == "number" && isFinite(s) && Math.floor(s) === s;

  function r(s, o = " | ") {
    return s.map(i => typeof i == "string" ? `'${i}'` : i).join(o)
  }
  e.joinValues = r, e.jsonStringifyReplacer = (s, o) => typeof o == "bigint" ? o.toString() : o
})(Se || (Se = {}));
var sp;
(function (e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
  })
})(sp || (sp = {}));
const X = Se.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
  $r = e => {
    switch (typeof e) {
      case "undefined":
        return X.undefined;
      case "string":
        return X.string;
      case "number":
        return isNaN(e) ? X.nan : X.number;
      case "boolean":
        return X.boolean;
      case "function":
        return X.function;
      case "bigint":
        return X.bigint;
      case "symbol":
        return X.symbol;
      case "object":
        return Array.isArray(e) ? X.array : e === null ? X.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? X.promise : typeof Map < "u" && e instanceof Map ? X.map : typeof Set < "u" && e instanceof Set ? X.set : typeof Date < "u" && e instanceof Date ? X.date : X.object;
      default:
        return X.unknown
    }
  },
  V = Se.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]),
  fA = e => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class Jt extends Error {
  constructor(t) {
    super(), this.issues = [], this.addIssue = r => {
      this.issues = [...this.issues, r]
    }, this.addIssues = (r = []) => {
      this.issues = [...this.issues, ...r]
    };
    const n = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n, this.name = "ZodError", this.issues = t
  }
  get errors() {
    return this.issues
  }
  format(t) {
    const n = t || function (o) {
        return o.message
      },
      r = {
        _errors: []
      },
      s = o => {
        for (const i of o.issues)
          if (i.code === "invalid_union") i.unionErrors.map(s);
          else if (i.code === "invalid_return_type") s(i.returnTypeError);
        else if (i.code === "invalid_arguments") s(i.argumentsError);
        else if (i.path.length === 0) r._errors.push(n(i));
        else {
          let a = r,
            c = 0;
          for (; c < i.path.length;) {
            const u = i.path[c];
            c === i.path.length - 1 ? (a[u] = a[u] || {
              _errors: []
            }, a[u]._errors.push(n(i))) : a[u] = a[u] || {
              _errors: []
            }, a = a[u], c++
          }
        }
      };
    return s(this), r
  }
  static assert(t) {
    if (!(t instanceof Jt)) throw new Error(`Not a ZodError: ${t}`)
  }
  toString() {
    return this.message
  }
  get message() {
    return JSON.stringify(this.issues, Se.jsonStringifyReplacer, 2)
  }
  get isEmpty() {
    return this.issues.length === 0
  }
  flatten(t = n => n.message) {
    const n = {},
      r = [];
    for (const s of this.issues) s.path.length > 0 ? (n[s.path[0]] = n[s.path[0]] || [], n[s.path[0]].push(t(s))) : r.push(t(s));
    return {
      formErrors: r,
      fieldErrors: n
    }
  }
  get formErrors() {
    return this.flatten()
  }
}
Jt.create = e => new Jt(e);
const oi = (e, t) => {
  let n;
  switch (e.code) {
    case V.invalid_type:
      e.received === X.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case V.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected,Se.jsonStringifyReplacer)}`;
      break;
    case V.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${Se.joinValues(e.keys,", ")}`;
      break;
    case V.invalid_union:
      n = "Invalid input";
      break;
    case V.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${Se.joinValues(e.options)}`;
      break;
    case V.invalid_enum_value:
      n = `Invalid enum value. Expected ${Se.joinValues(e.options)}, received '${e.received}'`;
      break;
    case V.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case V.invalid_return_type:
      n = "Invalid function return type";
      break;
    case V.invalid_date:
      n = "Invalid date";
      break;
    case V.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : Se.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case V.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case V.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case V.custom:
      n = "Invalid input";
      break;
    case V.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case V.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case V.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, Se.assertNever(e)
  }
  return {
    message: n
  }
};
let ib = oi;

function pA(e) {
  ib = e
}

function Rc() {
  return ib
}
const Ac = e => {
    const {
      data: t,
      path: n,
      errorMaps: r,
      issueData: s
    } = e, o = [...n, ...s.path || []], i = {
      ...s,
      path: o
    };
    if (s.message !== void 0) return {
      ...s,
      path: o,
      message: s.message
    };
    let a = "";
    const c = r.filter(u => !!u).slice().reverse();
    for (const u of c) a = u(i, {
      data: t,
      defaultError: a
    }).message;
    return {
      ...s,
      path: o,
      message: a
    }
  },
  hA = [];

function Q(e, t) {
  const n = Rc(),
    r = Ac({
      issueData: t,
      data: e.data,
      path: e.path,
      errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, n, n === oi ? void 0 : oi].filter(s => !!s)
    });
  e.common.issues.push(r)
}
class jt {
  constructor() {
    this.value = "valid"
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty")
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted")
  }
  static mergeArray(t, n) {
    const r = [];
    for (const s of n) {
      if (s.status === "aborted") return le;
      s.status === "dirty" && t.dirty(), r.push(s.value)
    }
    return {
      status: t.value,
      value: r
    }
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const s of n) {
      const o = await s.key,
        i = await s.value;
      r.push({
        key: o,
        value: i
      })
    }
    return jt.mergeObjectSync(t, r)
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const s of n) {
      const {
        key: o,
        value: i
      } = s;
      if (o.status === "aborted" || i.status === "aborted") return le;
      o.status === "dirty" && t.dirty(), i.status === "dirty" && t.dirty(), o.value !== "__proto__" && (typeof i.value < "u" || s.alwaysSet) && (r[o.value] = i.value)
    }
    return {
      status: t.value,
      value: r
    }
  }
}
const le = Object.freeze({
    status: "aborted"
  }),
  No = e => ({
    status: "dirty",
    value: e
  }),
  Dt = e => ({
    status: "valid",
    value: e
  }),
  op = e => e.status === "aborted",
  ip = e => e.status === "dirty",
  Ea = e => e.status === "valid",
  Ca = e => typeof Promise < "u" && e instanceof Promise;

function Oc(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t.get(e)
}

function ab(e, t, n, r, s) {
  if (typeof t == "function" ? e !== t || !s : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n
}
var oe;
(function (e) {
  e.errToObj = t => typeof t == "string" ? {
    message: t
  } : t || {}, e.toString = t => typeof t == "string" ? t : t == null ? void 0 : t.message
})(oe || (oe = {}));
var Li, Fi;
class qn {
  constructor(t, n, r, s) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = s
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
  }
}
const Ng = (e, t) => {
  if (Ea(t)) return {
    success: !0,
    data: t.value
  };
  if (!e.common.issues.length) throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const n = new Jt(e.common.issues);
      return this._error = n, this._error
    }
  }
};

function ce(e) {
  if (!e) return {};
  const {
    errorMap: t,
    invalid_type_error: n,
    required_error: r,
    description: s
  } = e;
  if (t && (n || r)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? {
    errorMap: t,
    description: s
  } : {
    errorMap: (i, a) => {
      var c, u;
      const {
        message: f
      } = e;
      return i.code === "invalid_enum_value" ? {
        message: f ? ? a.defaultError
      } : typeof a.data > "u" ? {
        message: (c = f ? ? r) !== null && c !== void 0 ? c : a.defaultError
      } : i.code !== "invalid_type" ? {
        message: a.defaultError
      } : {
        message: (u = f ? ? n) !== null && u !== void 0 ? u : a.defaultError
      }
    },
    description: s
  }
}
class ve {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
  }
  get description() {
    return this._def.description
  }
  _getType(t) {
    return $r(t.data)
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: $r(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    }
  }
  _processInputParams(t) {
    return {
      status: new jt,
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: $r(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    }
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Ca(n)) throw new Error("Synchronous parse encountered promise.");
    return n
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n)
  }
  parse(t, n) {
    const r = this.safeParse(t, n);
    if (r.success) return r.data;
    throw r.error
  }
  safeParse(t, n) {
    var r;
    const s = {
        common: {
          issues: [],
          async: (r = n == null ? void 0 : n.async) !== null && r !== void 0 ? r : !1,
          contextualErrorMap: n == null ? void 0 : n.errorMap
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: $r(t)
      },
      o = this._parseSync({
        data: t,
        path: s.path,
        parent: s
      });
    return Ng(s, o)
  }
  async parseAsync(t, n) {
    const r = await this.safeParseAsync(t, n);
    if (r.success) return r.data;
    throw r.error
  }
  async safeParseAsync(t, n) {
    const r = {
        common: {
          issues: [],
          contextualErrorMap: n == null ? void 0 : n.errorMap,
          async: !0
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: $r(t)
      },
      s = this._parse({
        data: t,
        path: r.path,
        parent: r
      }),
      o = await (Ca(s) ? s : Promise.resolve(s));
    return Ng(r, o)
  }
  refine(t, n) {
    const r = s => typeof n == "string" || typeof n > "u" ? {
      message: n
    } : typeof n == "function" ? n(s) : n;
    return this._refinement((s, o) => {
      const i = t(s),
        a = () => o.addIssue({
          code: V.custom,
          ...r(s)
        });
      return typeof Promise < "u" && i instanceof Promise ? i.then(c => c ? !0 : (a(), !1)) : i ? !0 : (a(), !1)
    })
  }
  refinement(t, n) {
    return this._refinement((r, s) => t(r) ? !0 : (s.addIssue(typeof n == "function" ? n(r, s) : n), !1))
  }
  _refinement(t) {
    return new Rn({
      schema: this,
      typeName: ae.ZodEffects,
      effect: {
        type: "refinement",
        refinement: t
      }
    })
  }
  superRefine(t) {
    return this._refinement(t)
  }
  optional() {
    return Qn.create(this, this._def)
  }
  nullable() {
    return hs.create(this, this._def)
  }
  nullish() {
    return this.nullable().optional()
  }
  array() {
    return jn.create(this, this._def)
  }
  promise() {
    return ai.create(this, this._def)
  }
  or(t) {
    return ka.create([this, t], this._def)
  }
  and(t) {
    return Ta.create(this, t, this._def)
  }
  transform(t) {
    return new Rn({
      ...ce(this._def),
      schema: this,
      typeName: ae.ZodEffects,
      effect: {
        type: "transform",
        transform: t
      }
    })
  }
  default (t) {
    const n = typeof t == "function" ? t : () => t;
    return new Da({
      ...ce(this._def),
      innerType: this,
      defaultValue: n,
      typeName: ae.ZodDefault
    })
  }
  brand() {
    return new tm({
      typeName: ae.ZodBranded,
      type: this,
      ...ce(this._def)
    })
  } catch (t) {
    const n = typeof t == "function" ? t : () => t;
    return new Ia({
      ...ce(this._def),
      innerType: this,
      catchValue: n,
      typeName: ae.ZodCatch
    })
  }
  describe(t) {
    const n = this.constructor;
    return new n({
      ...this._def,
      description: t
    })
  }
  pipe(t) {
    return Xa.create(this, t)
  }
  readonly() {
    return Ma.create(this)
  }
  isOptional() {
    return this.safeParse(void 0).success
  }
  isNullable() {
    return this.safeParse(null).success
  }
}
const mA = /^c[^\s-]{8,}$/i,
  vA = /^[0-9a-z]+$/,
  gA = /^[0-9A-HJKMNP-TV-Z]{26}$/,
  yA = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  xA = /^[a-z0-9_-]{21}$/i,
  wA = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  bA = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  SA = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Fd;
const EA = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  CA = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  NA = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  lb = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  _A = new RegExp(`^${lb}$`);

function cb(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`), t
}

function jA(e) {
  return new RegExp(`^${cb(e)}$`)
}

function ub(e) {
  let t = `${lb}T${cb(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`)
}

function kA(e, t) {
  return !!((t === "v4" || !t) && EA.test(e) || (t === "v6" || !t) && CA.test(e))
}
class En extends ve {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== X.string) {
      const o = this._getOrReturnCtx(t);
      return Q(o, {
        code: V.invalid_type,
        expected: X.string,
        received: o.parsedType
      }), le
    }
    const r = new jt;
    let s;
    for (const o of this._def.checks)
      if (o.kind === "min") t.data.length < o.value && (s = this._getOrReturnCtx(t, s), Q(s, {
        code: V.too_small,
        minimum: o.value,
        type: "string",
        inclusive: !0,
        exact: !1,
        message: o.message
      }), r.dirty());
      else if (o.kind === "max") t.data.length > o.value && (s = this._getOrReturnCtx(t, s), Q(s, {
      code: V.too_big,
      maximum: o.value,
      type: "string",
      inclusive: !0,
      exact: !1,
      message: o.message
    }), r.dirty());
    else if (o.kind === "length") {
      const i = t.data.length > o.value,
        a = t.data.length < o.value;
      (i || a) && (s = this._getOrReturnCtx(t, s), i ? Q(s, {
        code: V.too_big,
        maximum: o.value,
        type: "string",
        inclusive: !0,
        exact: !0,
        message: o.message
      }) : a && Q(s, {
        code: V.too_small,
        minimum: o.value,
        type: "string",
        inclusive: !0,
        exact: !0,
        message: o.message
      }), r.dirty())
    } else if (o.kind === "email") bA.test(t.data) || (s = this._getOrReturnCtx(t, s), Q(s, {
      validation: "email",
      code: V.invalid_string,
      message: o.message
    }), r.dirty());
    else if (o.kind === "emoji") Fd || (Fd = new RegExp(SA, "u")), Fd.test(t.data) || (s = this._getOrReturnCtx(t, s), Q(s, {
      validation: "emoji",
      code: V.invalid_string,
      message: o.message
    }), r.dirty());
    else if (o.kind === "uuid") yA.test(t.data) || (s = this._getOrReturnCtx(t, s), Q(s, {
      validation: "uuid",
      code: V.invalid_string,
      message: o.message
    }), r.dirty());
    else if (o.kind === "nanoid") xA.test(t.data) || (s = this._getOrReturnCtx(t, s), Q(s, {
      validation: "nanoid",
      code: V.invalid_string,
      message: o.message
    }), r.dirty());
    else if (o.kind === "cuid") mA.test(t.data) || (s = this._getOrReturnCtx(t, s), Q(s, {
      validation: "cuid",
      code: V.invalid_string,
      message: o.message
    }), r.dirty());
    else if (o.kind === "cuid2") vA.test(t.data) || (s = this._getOrReturnCtx(t, s), Q(s, {
      validation: "cuid2",
      code: V.invalid_string,
      message: o.message
    }), r.dirty());
    else if (o.kind === "ulid") gA.test(t.data) || (s = this._getOrReturnCtx(t, s), Q(s, {
      validation: "ulid",
      code: V.invalid_string,
      message: o.message
    }), r.dirty());
    else if (o.kind === "url") try {
      new URL(t.data)
    } catch {
      s = this._getOrReturnCtx(t, s), Q(s, {
        validation: "url",
        code: V.invalid_string,
        message: o.message
      }), r.dirty()
    } else o.kind === "regex" ? (o.regex.lastIndex = 0, o.regex.test(t.data) || (s = this._getOrReturnCtx(t, s), Q(s, {
      validation: "regex",
      code: V.invalid_string,
      message: o.message
    }), r.dirty())) : o.kind === "trim" ? t.data = t.data.trim() : o.kind === "includes" ? t.data.includes(o.value, o.position) || (s = this._getOrReturnCtx(t, s), Q(s, {
      code: V.invalid_string,
      validation: {
        includes: o.value,
        position: o.position
      },
      message: o.message
    }), r.dirty()) : o.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : o.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : o.kind === "startsWith" ? t.data.startsWith(o.value) || (s = this._getOrReturnCtx(t, s), Q(s, {
      code: V.invalid_string,
      validation: {
        startsWith: o.value
      },
      message: o.message
    }), r.dirty()) : o.kind === "endsWith" ? t.data.endsWith(o.value) || (s = this._getOrReturnCtx(t, s), Q(s, {
      code: V.invalid_string,
      validation: {
        endsWith: o.value
      },
      message: o.message
    }), r.dirty()) : o.kind === "datetime" ? ub(o).test(t.data) || (s = this._getOrReturnCtx(t, s), Q(s, {
      code: V.invalid_string,
      validation: "datetime",
      message: o.message
    }), r.dirty()) : o.kind === "date" ? _A.test(t.data) || (s = this._getOrReturnCtx(t, s), Q(s, {
      code: V.invalid_string,
      validation: "date",
      message: o.message
    }), r.dirty()) : o.kind === "time" ? jA(o).test(t.data) || (s = this._getOrReturnCtx(t, s), Q(s, {
      code: V.invalid_string,
      validation: "time",
      message: o.message
    }), r.dirty()) : o.kind === "duration" ? wA.test(t.data) || (s = this._getOrReturnCtx(t, s), Q(s, {
      validation: "duration",
      code: V.invalid_string,
      message: o.message
    }), r.dirty()) : o.kind === "ip" ? kA(t.data, o.version) || (s = this._getOrReturnCtx(t, s), Q(s, {
      validation: "ip",
      code: V.invalid_string,
      message: o.message
    }), r.dirty()) : o.kind === "base64" ? NA.test(t.data) || (s = this._getOrReturnCtx(t, s), Q(s, {
      validation: "base64",
      code: V.invalid_string,
      message: o.message
    }), r.dirty()) : Se.assertNever(o);
    return {
      status: r.value,
      value: t.data
    }
  }
  _regex(t, n, r) {
    return this.refinement(s => t.test(s), {
      validation: n,
      code: V.invalid_string,
      ...oe.errToObj(r)
    })
  }
  _addCheck(t) {
    return new En({
      ...this._def,
      checks: [...this._def.checks, t]
    })
  }
  email(t) {
    return this._addCheck({
      kind: "email",
      ...oe.errToObj(t)
    })
  }
  url(t) {
    return this._addCheck({
      kind: "url",
      ...oe.errToObj(t)
    })
  }
  emoji(t) {
    return this._addCheck({
      kind: "emoji",
      ...oe.errToObj(t)
    })
  }
  uuid(t) {
    return this._addCheck({
      kind: "uuid",
      ...oe.errToObj(t)
    })
  }
  nanoid(t) {
    return this._addCheck({
      kind: "nanoid",
      ...oe.errToObj(t)
    })
  }
  cuid(t) {
    return this._addCheck({
      kind: "cuid",
      ...oe.errToObj(t)
    })
  }
  cuid2(t) {
    return this._addCheck({
      kind: "cuid2",
      ...oe.errToObj(t)
    })
  }
  ulid(t) {
    return this._addCheck({
      kind: "ulid",
      ...oe.errToObj(t)
    })
  }
  base64(t) {
    return this._addCheck({
      kind: "base64",
      ...oe.errToObj(t)
    })
  }
  ip(t) {
    return this._addCheck({
      kind: "ip",
      ...oe.errToObj(t)
    })
  }
  datetime(t) {
    var n, r;
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      offset: (n = t == null ? void 0 : t.offset) !== null && n !== void 0 ? n : !1,
      local: (r = t == null ? void 0 : t.local) !== null && r !== void 0 ? r : !1,
      ...oe.errToObj(t == null ? void 0 : t.message)
    })
  }
  date(t) {
    return this._addCheck({
      kind: "date",
      message: t
    })
  }
  time(t) {
    return typeof t == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: t
    }) : this._addCheck({
      kind: "time",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      ...oe.errToObj(t == null ? void 0 : t.message)
    })
  }
  duration(t) {
    return this._addCheck({
      kind: "duration",
      ...oe.errToObj(t)
    })
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...oe.errToObj(n)
    })
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...oe.errToObj(n == null ? void 0 : n.message)
    })
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...oe.errToObj(n)
    })
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...oe.errToObj(n)
    })
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...oe.errToObj(n)
    })
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...oe.errToObj(n)
    })
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...oe.errToObj(n)
    })
  }
  nonempty(t) {
    return this.min(1, oe.errToObj(t))
  }
  trim() {
    return new En({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "trim"
      }]
    })
  }
  toLowerCase() {
    return new En({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "toLowerCase"
      }]
    })
  }
  toUpperCase() {
    return new En({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "toUpperCase"
      }]
    })
  }
  get isDatetime() {
    return !!this._def.checks.find(t => t.kind === "datetime")
  }
  get isDate() {
    return !!this._def.checks.find(t => t.kind === "date")
  }
  get isTime() {
    return !!this._def.checks.find(t => t.kind === "time")
  }
  get isDuration() {
    return !!this._def.checks.find(t => t.kind === "duration")
  }
  get isEmail() {
    return !!this._def.checks.find(t => t.kind === "email")
  }
  get isURL() {
    return !!this._def.checks.find(t => t.kind === "url")
  }
  get isEmoji() {
    return !!this._def.checks.find(t => t.kind === "emoji")
  }
  get isUUID() {
    return !!this._def.checks.find(t => t.kind === "uuid")
  }
  get isNANOID() {
    return !!this._def.checks.find(t => t.kind === "nanoid")
  }
  get isCUID() {
    return !!this._def.checks.find(t => t.kind === "cuid")
  }
  get isCUID2() {
    return !!this._def.checks.find(t => t.kind === "cuid2")
  }
  get isULID() {
    return !!this._def.checks.find(t => t.kind === "ulid")
  }
  get isIP() {
    return !!this._def.checks.find(t => t.kind === "ip")
  }
  get isBase64() {
    return !!this._def.checks.find(t => t.kind === "base64")
  }
  get minLength() {
    let t = null;
    for (const n of this._def.checks) n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t
  }
  get maxLength() {
    let t = null;
    for (const n of this._def.checks) n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t
  }
}
En.create = e => {
  var t;
  return new En({
    checks: [],
    typeName: ae.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...ce(e)
  })
};

function TA(e, t) {
  const n = (e.toString().split(".")[1] || "").length,
    r = (t.toString().split(".")[1] || "").length,
    s = n > r ? n : r,
    o = parseInt(e.toFixed(s).replace(".", "")),
    i = parseInt(t.toFixed(s).replace(".", ""));
  return o % i / Math.pow(10, s)
}
class ds extends ve {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== X.number) {
      const o = this._getOrReturnCtx(t);
      return Q(o, {
        code: V.invalid_type,
        expected: X.number,
        received: o.parsedType
      }), le
    }
    let r;
    const s = new jt;
    for (const o of this._def.checks) o.kind === "int" ? Se.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), Q(r, {
      code: V.invalid_type,
      expected: "integer",
      received: "float",
      message: o.message
    }), s.dirty()) : o.kind === "min" ? (o.inclusive ? t.data < o.value : t.data <= o.value) && (r = this._getOrReturnCtx(t, r), Q(r, {
      code: V.too_small,
      minimum: o.value,
      type: "number",
      inclusive: o.inclusive,
      exact: !1,
      message: o.message
    }), s.dirty()) : o.kind === "max" ? (o.inclusive ? t.data > o.value : t.data >= o.value) && (r = this._getOrReturnCtx(t, r), Q(r, {
      code: V.too_big,
      maximum: o.value,
      type: "number",
      inclusive: o.inclusive,
      exact: !1,
      message: o.message
    }), s.dirty()) : o.kind === "multipleOf" ? TA(t.data, o.value) !== 0 && (r = this._getOrReturnCtx(t, r), Q(r, {
      code: V.not_multiple_of,
      multipleOf: o.value,
      message: o.message
    }), s.dirty()) : o.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), Q(r, {
      code: V.not_finite,
      message: o.message
    }), s.dirty()) : Se.assertNever(o);
    return {
      status: s.value,
      value: t.data
    }
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, oe.toString(n))
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, oe.toString(n))
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, oe.toString(n))
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, oe.toString(n))
  }
  setLimit(t, n, r, s) {
    return new ds({
      ...this._def,
      checks: [...this._def.checks, {
        kind: t,
        value: n,
        inclusive: r,
        message: oe.toString(s)
      }]
    })
  }
  _addCheck(t) {
    return new ds({
      ...this._def,
      checks: [...this._def.checks, t]
    })
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: oe.toString(t)
    })
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: oe.toString(t)
    })
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: oe.toString(t)
    })
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: oe.toString(t)
    })
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: oe.toString(t)
    })
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: oe.toString(n)
    })
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: oe.toString(t)
    })
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: oe.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: oe.toString(t)
    })
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks) n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks) n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t
  }
  get isInt() {
    return !!this._def.checks.find(t => t.kind === "int" || t.kind === "multipleOf" && Se.isInteger(t.value))
  }
  get isFinite() {
    let t = null,
      n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf") return !0;
      r.kind === "min" ? (n === null || r.value > n) && (n = r.value) : r.kind === "max" && (t === null || r.value < t) && (t = r.value)
    }
    return Number.isFinite(n) && Number.isFinite(t)
  }
}
ds.create = e => new ds({
  checks: [],
  typeName: ae.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...ce(e)
});
class fs extends ve {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== X.bigint) {
      const o = this._getOrReturnCtx(t);
      return Q(o, {
        code: V.invalid_type,
        expected: X.bigint,
        received: o.parsedType
      }), le
    }
    let r;
    const s = new jt;
    for (const o of this._def.checks) o.kind === "min" ? (o.inclusive ? t.data < o.value : t.data <= o.value) && (r = this._getOrReturnCtx(t, r), Q(r, {
      code: V.too_small,
      type: "bigint",
      minimum: o.value,
      inclusive: o.inclusive,
      message: o.message
    }), s.dirty()) : o.kind === "max" ? (o.inclusive ? t.data > o.value : t.data >= o.value) && (r = this._getOrReturnCtx(t, r), Q(r, {
      code: V.too_big,
      type: "bigint",
      maximum: o.value,
      inclusive: o.inclusive,
      message: o.message
    }), s.dirty()) : o.kind === "multipleOf" ? t.data % o.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), Q(r, {
      code: V.not_multiple_of,
      multipleOf: o.value,
      message: o.message
    }), s.dirty()) : Se.assertNever(o);
    return {
      status: s.value,
      value: t.data
    }
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, oe.toString(n))
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, oe.toString(n))
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, oe.toString(n))
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, oe.toString(n))
  }
  setLimit(t, n, r, s) {
    return new fs({
      ...this._def,
      checks: [...this._def.checks, {
        kind: t,
        value: n,
        inclusive: r,
        message: oe.toString(s)
      }]
    })
  }
  _addCheck(t) {
    return new fs({
      ...this._def,
      checks: [...this._def.checks, t]
    })
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: oe.toString(t)
    })
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: oe.toString(t)
    })
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: oe.toString(t)
    })
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: oe.toString(t)
    })
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: oe.toString(n)
    })
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks) n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks) n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t
  }
}
fs.create = e => {
  var t;
  return new fs({
    checks: [],
    typeName: ae.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...ce(e)
  })
};
class Na extends ve {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== X.boolean) {
      const r = this._getOrReturnCtx(t);
      return Q(r, {
        code: V.invalid_type,
        expected: X.boolean,
        received: r.parsedType
      }), le
    }
    return Dt(t.data)
  }
}
Na.create = e => new Na({
  typeName: ae.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...ce(e)
});
class Ws extends ve {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== X.date) {
      const o = this._getOrReturnCtx(t);
      return Q(o, {
        code: V.invalid_type,
        expected: X.date,
        received: o.parsedType
      }), le
    }
    if (isNaN(t.data.getTime())) {
      const o = this._getOrReturnCtx(t);
      return Q(o, {
        code: V.invalid_date
      }), le
    }
    const r = new jt;
    let s;
    for (const o of this._def.checks) o.kind === "min" ? t.data.getTime() < o.value && (s = this._getOrReturnCtx(t, s), Q(s, {
      code: V.too_small,
      message: o.message,
      inclusive: !0,
      exact: !1,
      minimum: o.value,
      type: "date"
    }), r.dirty()) : o.kind === "max" ? t.data.getTime() > o.value && (s = this._getOrReturnCtx(t, s), Q(s, {
      code: V.too_big,
      message: o.message,
      inclusive: !0,
      exact: !1,
      maximum: o.value,
      type: "date"
    }), r.dirty()) : Se.assertNever(o);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    }
  }
  _addCheck(t) {
    return new Ws({
      ...this._def,
      checks: [...this._def.checks, t]
    })
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: oe.toString(n)
    })
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: oe.toString(n)
    })
  }
  get minDate() {
    let t = null;
    for (const n of this._def.checks) n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null
  }
  get maxDate() {
    let t = null;
    for (const n of this._def.checks) n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t != null ? new Date(t) : null
  }
}
Ws.create = e => new Ws({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: ae.ZodDate,
  ...ce(e)
});
class Dc extends ve {
  _parse(t) {
    if (this._getType(t) !== X.symbol) {
      const r = this._getOrReturnCtx(t);
      return Q(r, {
        code: V.invalid_type,
        expected: X.symbol,
        received: r.parsedType
      }), le
    }
    return Dt(t.data)
  }
}
Dc.create = e => new Dc({
  typeName: ae.ZodSymbol,
  ...ce(e)
});
class _a extends ve {
  _parse(t) {
    if (this._getType(t) !== X.undefined) {
      const r = this._getOrReturnCtx(t);
      return Q(r, {
        code: V.invalid_type,
        expected: X.undefined,
        received: r.parsedType
      }), le
    }
    return Dt(t.data)
  }
}
_a.create = e => new _a({
  typeName: ae.ZodUndefined,
  ...ce(e)
});
class ja extends ve {
  _parse(t) {
    if (this._getType(t) !== X.null) {
      const r = this._getOrReturnCtx(t);
      return Q(r, {
        code: V.invalid_type,
        expected: X.null,
        received: r.parsedType
      }), le
    }
    return Dt(t.data)
  }
}
ja.create = e => new ja({
  typeName: ae.ZodNull,
  ...ce(e)
});
class ii extends ve {
  constructor() {
    super(...arguments), this._any = !0
  }
  _parse(t) {
    return Dt(t.data)
  }
}
ii.create = e => new ii({
  typeName: ae.ZodAny,
  ...ce(e)
});
class Is extends ve {
  constructor() {
    super(...arguments), this._unknown = !0
  }
  _parse(t) {
    return Dt(t.data)
  }
}
Is.create = e => new Is({
  typeName: ae.ZodUnknown,
  ...ce(e)
});
class br extends ve {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return Q(n, {
      code: V.invalid_type,
      expected: X.never,
      received: n.parsedType
    }), le
  }
}
br.create = e => new br({
  typeName: ae.ZodNever,
  ...ce(e)
});
class Ic extends ve {
  _parse(t) {
    if (this._getType(t) !== X.undefined) {
      const r = this._getOrReturnCtx(t);
      return Q(r, {
        code: V.invalid_type,
        expected: X.void,
        received: r.parsedType
      }), le
    }
    return Dt(t.data)
  }
}
Ic.create = e => new Ic({
  typeName: ae.ZodVoid,
  ...ce(e)
});
class jn extends ve {
  _parse(t) {
    const {
      ctx: n,
      status: r
    } = this._processInputParams(t), s = this._def;
    if (n.parsedType !== X.array) return Q(n, {
      code: V.invalid_type,
      expected: X.array,
      received: n.parsedType
    }), le;
    if (s.exactLength !== null) {
      const i = n.data.length > s.exactLength.value,
        a = n.data.length < s.exactLength.value;
      (i || a) && (Q(n, {
        code: i ? V.too_big : V.too_small,
        minimum: a ? s.exactLength.value : void 0,
        maximum: i ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), r.dirty())
    }
    if (s.minLength !== null && n.data.length < s.minLength.value && (Q(n, {
        code: V.too_small,
        minimum: s.minLength.value,
        type: "array",
        inclusive: !0,
        exact: !1,
        message: s.minLength.message
      }), r.dirty()), s.maxLength !== null && n.data.length > s.maxLength.value && (Q(n, {
        code: V.too_big,
        maximum: s.maxLength.value,
        type: "array",
        inclusive: !0,
        exact: !1,
        message: s.maxLength.message
      }), r.dirty()), n.common.async) return Promise.all([...n.data].map((i, a) => s.type._parseAsync(new qn(n, i, n.path, a)))).then(i => jt.mergeArray(r, i));
    const o = [...n.data].map((i, a) => s.type._parseSync(new qn(n, i, n.path, a)));
    return jt.mergeArray(r, o)
  }
  get element() {
    return this._def.type
  }
  min(t, n) {
    return new jn({
      ...this._def,
      minLength: {
        value: t,
        message: oe.toString(n)
      }
    })
  }
  max(t, n) {
    return new jn({
      ...this._def,
      maxLength: {
        value: t,
        message: oe.toString(n)
      }
    })
  }
  length(t, n) {
    return new jn({
      ...this._def,
      exactLength: {
        value: t,
        message: oe.toString(n)
      }
    })
  }
  nonempty(t) {
    return this.min(1, t)
  }
}
jn.create = (e, t) => new jn({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: ae.ZodArray,
  ...ce(t)
});

function uo(e) {
  if (e instanceof Ve) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = Qn.create(uo(r))
    }
    return new Ve({
      ...e._def,
      shape: () => t
    })
  } else return e instanceof jn ? new jn({
    ...e._def,
    type: uo(e.element)
  }) : e instanceof Qn ? Qn.create(uo(e.unwrap())) : e instanceof hs ? hs.create(uo(e.unwrap())) : e instanceof Jn ? Jn.create(e.items.map(t => uo(t))) : e
}
class Ve extends ve {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const t = this._def.shape(),
      n = Se.objectKeys(t);
    return this._cached = {
      shape: t,
      keys: n
    }
  }
  _parse(t) {
    if (this._getType(t) !== X.object) {
      const u = this._getOrReturnCtx(t);
      return Q(u, {
        code: V.invalid_type,
        expected: X.object,
        received: u.parsedType
      }), le
    }
    const {
      status: r,
      ctx: s
    } = this._processInputParams(t), {
      shape: o,
      keys: i
    } = this._getCached(), a = [];
    if (!(this._def.catchall instanceof br && this._def.unknownKeys === "strip"))
      for (const u in s.data) i.includes(u) || a.push(u);
    const c = [];
    for (const u of i) {
      const f = o[u],
        p = s.data[u];
      c.push({
        key: {
          status: "valid",
          value: u
        },
        value: f._parse(new qn(s, p, s.path, u)),
        alwaysSet: u in s.data
      })
    }
    if (this._def.catchall instanceof br) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const f of a) c.push({
          key: {
            status: "valid",
            value: f
          },
          value: {
            status: "valid",
            value: s.data[f]
          }
        });
      else if (u === "strict") a.length > 0 && (Q(s, {
        code: V.unrecognized_keys,
        keys: a
      }), r.dirty());
      else if (u !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.")
    } else {
      const u = this._def.catchall;
      for (const f of a) {
        const p = s.data[f];
        c.push({
          key: {
            status: "valid",
            value: f
          },
          value: u._parse(new qn(s, p, s.path, f)),
          alwaysSet: f in s.data
        })
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const u = [];
      for (const f of c) {
        const p = await f.key,
          h = await f.value;
        u.push({
          key: p,
          value: h,
          alwaysSet: f.alwaysSet
        })
      }
      return u
    }).then(u => jt.mergeObjectSync(r, u)) : jt.mergeObjectSync(r, c)
  }
  get shape() {
    return this._def.shape()
  }
  strict(t) {
    return oe.errToObj, new Ve({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, r) => {
          var s, o, i, a;
          const c = (i = (o = (s = this._def).errorMap) === null || o === void 0 ? void 0 : o.call(s, n, r).message) !== null && i !== void 0 ? i : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (a = oe.errToObj(t).message) !== null && a !== void 0 ? a : c
          } : {
            message: c
          }
        }
      } : {}
    })
  }
  strip() {
    return new Ve({
      ...this._def,
      unknownKeys: "strip"
    })
  }
  passthrough() {
    return new Ve({
      ...this._def,
      unknownKeys: "passthrough"
    })
  }
  extend(t) {
    return new Ve({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...t
      })
    })
  }
  merge(t) {
    return new Ve({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: ae.ZodObject
    })
  }
  setKey(t, n) {
    return this.augment({
      [t]: n
    })
  }
  catchall(t) {
    return new Ve({
      ...this._def,
      catchall: t
    })
  }
  pick(t) {
    const n = {};
    return Se.objectKeys(t).forEach(r => {
      t[r] && this.shape[r] && (n[r] = this.shape[r])
    }), new Ve({
      ...this._def,
      shape: () => n
    })
  }
  omit(t) {
    const n = {};
    return Se.objectKeys(this.shape).forEach(r => {
      t[r] || (n[r] = this.shape[r])
    }), new Ve({
      ...this._def,
      shape: () => n
    })
  }
  deepPartial() {
    return uo(this)
  }
  partial(t) {
    const n = {};
    return Se.objectKeys(this.shape).forEach(r => {
      const s = this.shape[r];
      t && !t[r] ? n[r] = s : n[r] = s.optional()
    }), new Ve({
      ...this._def,
      shape: () => n
    })
  }
  required(t) {
    const n = {};
    return Se.objectKeys(this.shape).forEach(r => {
      if (t && !t[r]) n[r] = this.shape[r];
      else {
        let o = this.shape[r];
        for (; o instanceof Qn;) o = o._def.innerType;
        n[r] = o
      }
    }), new Ve({
      ...this._def,
      shape: () => n
    })
  }
  keyof() {
    return db(Se.objectKeys(this.shape))
  }
}
Ve.create = (e, t) => new Ve({
  shape: () => e,
  unknownKeys: "strip",
  catchall: br.create(),
  typeName: ae.ZodObject,
  ...ce(t)
});
Ve.strictCreate = (e, t) => new Ve({
  shape: () => e,
  unknownKeys: "strict",
  catchall: br.create(),
  typeName: ae.ZodObject,
  ...ce(t)
});
Ve.lazycreate = (e, t) => new Ve({
  shape: e,
  unknownKeys: "strip",
  catchall: br.create(),
  typeName: ae.ZodObject,
  ...ce(t)
});
class ka extends ve {
  _parse(t) {
    const {
      ctx: n
    } = this._processInputParams(t), r = this._def.options;

    function s(o) {
      for (const a of o)
        if (a.result.status === "valid") return a.result;
      for (const a of o)
        if (a.result.status === "dirty") return n.common.issues.push(...a.ctx.common.issues), a.result;
      const i = o.map(a => new Jt(a.ctx.common.issues));
      return Q(n, {
        code: V.invalid_union,
        unionErrors: i
      }), le
    }
    if (n.common.async) return Promise.all(r.map(async o => {
      const i = {
        ...n,
        common: {
          ...n.common,
          issues: []
        },
        parent: null
      };
      return {
        result: await o._parseAsync({
          data: n.data,
          path: n.path,
          parent: i
        }),
        ctx: i
      }
    })).then(s); {
      let o;
      const i = [];
      for (const c of r) {
        const u = {
            ...n,
            common: {
              ...n.common,
              issues: []
            },
            parent: null
          },
          f = c._parseSync({
            data: n.data,
            path: n.path,
            parent: u
          });
        if (f.status === "valid") return f;
        f.status === "dirty" && !o && (o = {
          result: f,
          ctx: u
        }), u.common.issues.length && i.push(u.common.issues)
      }
      if (o) return n.common.issues.push(...o.ctx.common.issues), o.result;
      const a = i.map(c => new Jt(c));
      return Q(n, {
        code: V.invalid_union,
        unionErrors: a
      }), le
    }
  }
  get options() {
    return this._def.options
  }
}
ka.create = (e, t) => new ka({
  options: e,
  typeName: ae.ZodUnion,
  ...ce(t)
});
const or = e => e instanceof Ra ? or(e.schema) : e instanceof Rn ? or(e.innerType()) : e instanceof Aa ? [e.value] : e instanceof ps ? e.options : e instanceof Oa ? Se.objectValues(e.enum) : e instanceof Da ? or(e._def.innerType) : e instanceof _a ? [void 0] : e instanceof ja ? [null] : e instanceof Qn ? [void 0, ...or(e.unwrap())] : e instanceof hs ? [null, ...or(e.unwrap())] : e instanceof tm || e instanceof Ma ? or(e.unwrap()) : e instanceof Ia ? or(e._def.innerType) : [];
class Mu extends ve {
  _parse(t) {
    const {
      ctx: n
    } = this._processInputParams(t);
    if (n.parsedType !== X.object) return Q(n, {
      code: V.invalid_type,
      expected: X.object,
      received: n.parsedType
    }), le;
    const r = this.discriminator,
      s = n.data[r],
      o = this.optionsMap.get(s);
    return o ? n.common.async ? o._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : o._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (Q(n, {
      code: V.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), le)
  }
  get discriminator() {
    return this._def.discriminator
  }
  get options() {
    return this._def.options
  }
  get optionsMap() {
    return this._def.optionsMap
  }
  static create(t, n, r) {
    const s = new Map;
    for (const o of n) {
      const i = or(o.shape[t]);
      if (!i.length) throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const a of i) {
        if (s.has(a)) throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(a)}`);
        s.set(a, o)
      }
    }
    return new Mu({
      typeName: ae.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: s,
      ...ce(r)
    })
  }
}

function ap(e, t) {
  const n = $r(e),
    r = $r(t);
  if (e === t) return {
    valid: !0,
    data: e
  };
  if (n === X.object && r === X.object) {
    const s = Se.objectKeys(t),
      o = Se.objectKeys(e).filter(a => s.indexOf(a) !== -1),
      i = {
        ...e,
        ...t
      };
    for (const a of o) {
      const c = ap(e[a], t[a]);
      if (!c.valid) return {
        valid: !1
      };
      i[a] = c.data
    }
    return {
      valid: !0,
      data: i
    }
  } else if (n === X.array && r === X.array) {
    if (e.length !== t.length) return {
      valid: !1
    };
    const s = [];
    for (let o = 0; o < e.length; o++) {
      const i = e[o],
        a = t[o],
        c = ap(i, a);
      if (!c.valid) return {
        valid: !1
      };
      s.push(c.data)
    }
    return {
      valid: !0,
      data: s
    }
  } else return n === X.date && r === X.date && +e == +t ? {
    valid: !0,
    data: e
  } : {
    valid: !1
  }
}
class Ta extends ve {
  _parse(t) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(t), s = (o, i) => {
      if (op(o) || op(i)) return le;
      const a = ap(o.value, i.value);
      return a.valid ? ((ip(o) || ip(i)) && n.dirty(), {
        status: n.value,
        value: a.data
      }) : (Q(r, {
        code: V.invalid_intersection_types
      }), le)
    };
    return r.common.async ? Promise.all([this._def.left._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }), this._def.right._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    })]).then(([o, i]) => s(o, i)) : s(this._def.left._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }), this._def.right._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }))
  }
}
Ta.create = (e, t, n) => new Ta({
  left: e,
  right: t,
  typeName: ae.ZodIntersection,
  ...ce(n)
});
class Jn extends ve {
  _parse(t) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(t);
    if (r.parsedType !== X.array) return Q(r, {
      code: V.invalid_type,
      expected: X.array,
      received: r.parsedType
    }), le;
    if (r.data.length < this._def.items.length) return Q(r, {
      code: V.too_small,
      minimum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), le;
    !this._def.rest && r.data.length > this._def.items.length && (Q(r, {
      code: V.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const o = [...r.data].map((i, a) => {
      const c = this._def.items[a] || this._def.rest;
      return c ? c._parse(new qn(r, i, r.path, a)) : null
    }).filter(i => !!i);
    return r.common.async ? Promise.all(o).then(i => jt.mergeArray(n, i)) : jt.mergeArray(n, o)
  }
  get items() {
    return this._def.items
  }
  rest(t) {
    return new Jn({
      ...this._def,
      rest: t
    })
  }
}
Jn.create = (e, t) => {
  if (!Array.isArray(e)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Jn({
    items: e,
    typeName: ae.ZodTuple,
    rest: null,
    ...ce(t)
  })
};
class Pa extends ve {
  get keySchema() {
    return this._def.keyType
  }
  get valueSchema() {
    return this._def.valueType
  }
  _parse(t) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(t);
    if (r.parsedType !== X.object) return Q(r, {
      code: V.invalid_type,
      expected: X.object,
      received: r.parsedType
    }), le;
    const s = [],
      o = this._def.keyType,
      i = this._def.valueType;
    for (const a in r.data) s.push({
      key: o._parse(new qn(r, a, r.path, a)),
      value: i._parse(new qn(r, r.data[a], r.path, a)),
      alwaysSet: a in r.data
    });
    return r.common.async ? jt.mergeObjectAsync(n, s) : jt.mergeObjectSync(n, s)
  }
  get element() {
    return this._def.valueType
  }
  static create(t, n, r) {
    return n instanceof ve ? new Pa({
      keyType: t,
      valueType: n,
      typeName: ae.ZodRecord,
      ...ce(r)
    }) : new Pa({
      keyType: En.create(),
      valueType: t,
      typeName: ae.ZodRecord,
      ...ce(n)
    })
  }
}
class Mc extends ve {
  get keySchema() {
    return this._def.keyType
  }
  get valueSchema() {
    return this._def.valueType
  }
  _parse(t) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(t);
    if (r.parsedType !== X.map) return Q(r, {
      code: V.invalid_type,
      expected: X.map,
      received: r.parsedType
    }), le;
    const s = this._def.keyType,
      o = this._def.valueType,
      i = [...r.data.entries()].map(([a, c], u) => ({
        key: s._parse(new qn(r, a, r.path, [u, "key"])),
        value: o._parse(new qn(r, c, r.path, [u, "value"]))
      }));
    if (r.common.async) {
      const a = new Map;
      return Promise.resolve().then(async () => {
        for (const c of i) {
          const u = await c.key,
            f = await c.value;
          if (u.status === "aborted" || f.status === "aborted") return le;
          (u.status === "dirty" || f.status === "dirty") && n.dirty(), a.set(u.value, f.value)
        }
        return {
          status: n.value,
          value: a
        }
      })
    } else {
      const a = new Map;
      for (const c of i) {
        const u = c.key,
          f = c.value;
        if (u.status === "aborted" || f.status === "aborted") return le;
        (u.status === "dirty" || f.status === "dirty") && n.dirty(), a.set(u.value, f.value)
      }
      return {
        status: n.value,
        value: a
      }
    }
  }
}
Mc.create = (e, t, n) => new Mc({
  valueType: t,
  keyType: e,
  typeName: ae.ZodMap,
  ...ce(n)
});
class Hs extends ve {
  _parse(t) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(t);
    if (r.parsedType !== X.set) return Q(r, {
      code: V.invalid_type,
      expected: X.set,
      received: r.parsedType
    }), le;
    const s = this._def;
    s.minSize !== null && r.data.size < s.minSize.value && (Q(r, {
      code: V.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), n.dirty()), s.maxSize !== null && r.data.size > s.maxSize.value && (Q(r, {
      code: V.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), n.dirty());
    const o = this._def.valueType;

    function i(c) {
      const u = new Set;
      for (const f of c) {
        if (f.status === "aborted") return le;
        f.status === "dirty" && n.dirty(), u.add(f.value)
      }
      return {
        status: n.value,
        value: u
      }
    }
    const a = [...r.data.values()].map((c, u) => o._parse(new qn(r, c, r.path, u)));
    return r.common.async ? Promise.all(a).then(c => i(c)) : i(a)
  }
  min(t, n) {
    return new Hs({
      ...this._def,
      minSize: {
        value: t,
        message: oe.toString(n)
      }
    })
  }
  max(t, n) {
    return new Hs({
      ...this._def,
      maxSize: {
        value: t,
        message: oe.toString(n)
      }
    })
  }
  size(t, n) {
    return this.min(t, n).max(t, n)
  }
  nonempty(t) {
    return this.min(1, t)
  }
}
Hs.create = (e, t) => new Hs({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: ae.ZodSet,
  ...ce(t)
});
class $o extends ve {
  constructor() {
    super(...arguments), this.validate = this.implement
  }
  _parse(t) {
    const {
      ctx: n
    } = this._processInputParams(t);
    if (n.parsedType !== X.function) return Q(n, {
      code: V.invalid_type,
      expected: X.function,
      received: n.parsedType
    }), le;

    function r(a, c) {
      return Ac({
        data: a,
        path: n.path,
        errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, Rc(), oi].filter(u => !!u),
        issueData: {
          code: V.invalid_arguments,
          argumentsError: c
        }
      })
    }

    function s(a, c) {
      return Ac({
        data: a,
        path: n.path,
        errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, Rc(), oi].filter(u => !!u),
        issueData: {
          code: V.invalid_return_type,
          returnTypeError: c
        }
      })
    }
    const o = {
        errorMap: n.common.contextualErrorMap
      },
      i = n.data;
    if (this._def.returns instanceof ai) {
      const a = this;
      return Dt(async function (...c) {
        const u = new Jt([]),
          f = await a._def.args.parseAsync(c, o).catch(w => {
            throw u.addIssue(r(c, w)), u
          }),
          p = await Reflect.apply(i, this, f);
        return await a._def.returns._def.type.parseAsync(p, o).catch(w => {
          throw u.addIssue(s(p, w)), u
        })
      })
    } else {
      const a = this;
      return Dt(function (...c) {
        const u = a._def.args.safeParse(c, o);
        if (!u.success) throw new Jt([r(c, u.error)]);
        const f = Reflect.apply(i, this, u.data),
          p = a._def.returns.safeParse(f, o);
        if (!p.success) throw new Jt([s(f, p.error)]);
        return p.data
      })
    }
  }
  parameters() {
    return this._def.args
  }
  returnType() {
    return this._def.returns
  }
  args(...t) {
    return new $o({
      ...this._def,
      args: Jn.create(t).rest(Is.create())
    })
  }
  returns(t) {
    return new $o({
      ...this._def,
      returns: t
    })
  }
  implement(t) {
    return this.parse(t)
  }
  strictImplement(t) {
    return this.parse(t)
  }
  static create(t, n, r) {
    return new $o({
      args: t || Jn.create([]).rest(Is.create()),
      returns: n || Is.create(),
      typeName: ae.ZodFunction,
      ...ce(r)
    })
  }
}
class Ra extends ve {
  get schema() {
    return this._def.getter()
  }
  _parse(t) {
    const {
      ctx: n
    } = this._processInputParams(t);
    return this._def.getter()._parse({
      data: n.data,
      path: n.path,
      parent: n
    })
  }
}
Ra.create = (e, t) => new Ra({
  getter: e,
  typeName: ae.ZodLazy,
  ...ce(t)
});
class Aa extends ve {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return Q(n, {
        received: n.data,
        code: V.invalid_literal,
        expected: this._def.value
      }), le
    }
    return {
      status: "valid",
      value: t.data
    }
  }
  get value() {
    return this._def.value
  }
}
Aa.create = (e, t) => new Aa({
  value: e,
  typeName: ae.ZodLiteral,
  ...ce(t)
});

function db(e, t) {
  return new ps({
    values: e,
    typeName: ae.ZodEnum,
    ...ce(t)
  })
}
class ps extends ve {
  constructor() {
    super(...arguments), Li.set(this, void 0)
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t),
        r = this._def.values;
      return Q(n, {
        expected: Se.joinValues(r),
        received: n.parsedType,
        code: V.invalid_type
      }), le
    }
    if (Oc(this, Li) || ab(this, Li, new Set(this._def.values)), !Oc(this, Li).has(t.data)) {
      const n = this._getOrReturnCtx(t),
        r = this._def.values;
      return Q(n, {
        received: n.data,
        code: V.invalid_enum_value,
        options: r
      }), le
    }
    return Dt(t.data)
  }
  get options() {
    return this._def.values
  }
  get enum() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t
  }
  get Values() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t
  }
  get Enum() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t
  }
  extract(t, n = this._def) {
    return ps.create(t, {
      ...this._def,
      ...n
    })
  }
  exclude(t, n = this._def) {
    return ps.create(this.options.filter(r => !t.includes(r)), {
      ...this._def,
      ...n
    })
  }
}
Li = new WeakMap;
ps.create = db;
class Oa extends ve {
  constructor() {
    super(...arguments), Fi.set(this, void 0)
  }
  _parse(t) {
    const n = Se.getValidEnumValues(this._def.values),
      r = this._getOrReturnCtx(t);
    if (r.parsedType !== X.string && r.parsedType !== X.number) {
      const s = Se.objectValues(n);
      return Q(r, {
        expected: Se.joinValues(s),
        received: r.parsedType,
        code: V.invalid_type
      }), le
    }
    if (Oc(this, Fi) || ab(this, Fi, new Set(Se.getValidEnumValues(this._def.values))), !Oc(this, Fi).has(t.data)) {
      const s = Se.objectValues(n);
      return Q(r, {
        received: r.data,
        code: V.invalid_enum_value,
        options: s
      }), le
    }
    return Dt(t.data)
  }
  get enum() {
    return this._def.values
  }
}
Fi = new WeakMap;
Oa.create = (e, t) => new Oa({
  values: e,
  typeName: ae.ZodNativeEnum,
  ...ce(t)
});
class ai extends ve {
  unwrap() {
    return this._def.type
  }
  _parse(t) {
    const {
      ctx: n
    } = this._processInputParams(t);
    if (n.parsedType !== X.promise && n.common.async === !1) return Q(n, {
      code: V.invalid_type,
      expected: X.promise,
      received: n.parsedType
    }), le;
    const r = n.parsedType === X.promise ? n.data : Promise.resolve(n.data);
    return Dt(r.then(s => this._def.type.parseAsync(s, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })))
  }
}
ai.create = (e, t) => new ai({
  type: e,
  typeName: ae.ZodPromise,
  ...ce(t)
});
class Rn extends ve {
  innerType() {
    return this._def.schema
  }
  sourceType() {
    return this._def.schema._def.typeName === ae.ZodEffects ? this._def.schema.sourceType() : this._def.schema
  }
  _parse(t) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(t), s = this._def.effect || null, o = {
      addIssue: i => {
        Q(r, i), i.fatal ? n.abort() : n.dirty()
      },
      get path() {
        return r.path
      }
    };
    if (o.addIssue = o.addIssue.bind(o), s.type === "preprocess") {
      const i = s.transform(r.data, o);
      if (r.common.async) return Promise.resolve(i).then(async a => {
        if (n.value === "aborted") return le;
        const c = await this._def.schema._parseAsync({
          data: a,
          path: r.path,
          parent: r
        });
        return c.status === "aborted" ? le : c.status === "dirty" || n.value === "dirty" ? No(c.value) : c
      }); {
        if (n.value === "aborted") return le;
        const a = this._def.schema._parseSync({
          data: i,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? le : a.status === "dirty" || n.value === "dirty" ? No(a.value) : a
      }
    }
    if (s.type === "refinement") {
      const i = a => {
        const c = s.refinement(a, o);
        if (r.common.async) return Promise.resolve(c);
        if (c instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return a
      };
      if (r.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? le : (a.status === "dirty" && n.dirty(), i(a.value), {
          status: n.value,
          value: a.value
        })
      } else return this._def.schema._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }).then(a => a.status === "aborted" ? le : (a.status === "dirty" && n.dirty(), i(a.value).then(() => ({
        status: n.value,
        value: a.value
      }))))
    }
    if (s.type === "transform")
      if (r.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!Ea(i)) return i;
        const a = s.transform(i.value, o);
        if (a instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return {
          status: n.value,
          value: a
        }
      } else return this._def.schema._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }).then(i => Ea(i) ? Promise.resolve(s.transform(i.value, o)).then(a => ({
        status: n.value,
        value: a
      })) : i);
    Se.assertNever(s)
  }
}
Rn.create = (e, t, n) => new Rn({
  schema: e,
  typeName: ae.ZodEffects,
  effect: t,
  ...ce(n)
});
Rn.createWithPreprocess = (e, t, n) => new Rn({
  schema: t,
  effect: {
    type: "preprocess",
    transform: e
  },
  typeName: ae.ZodEffects,
  ...ce(n)
});
class Qn extends ve {
  _parse(t) {
    return this._getType(t) === X.undefined ? Dt(void 0) : this._def.innerType._parse(t)
  }
  unwrap() {
    return this._def.innerType
  }
}
Qn.create = (e, t) => new Qn({
  innerType: e,
  typeName: ae.ZodOptional,
  ...ce(t)
});
class hs extends ve {
  _parse(t) {
    return this._getType(t) === X.null ? Dt(null) : this._def.innerType._parse(t)
  }
  unwrap() {
    return this._def.innerType
  }
}
hs.create = (e, t) => new hs({
  innerType: e,
  typeName: ae.ZodNullable,
  ...ce(t)
});
class Da extends ve {
  _parse(t) {
    const {
      ctx: n
    } = this._processInputParams(t);
    let r = n.data;
    return n.parsedType === X.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    })
  }
  removeDefault() {
    return this._def.innerType
  }
}
Da.create = (e, t) => new Da({
  innerType: e,
  typeName: ae.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...ce(t)
});
class Ia extends ve {
  _parse(t) {
    const {
      ctx: n
    } = this._processInputParams(t), r = {
      ...n,
      common: {
        ...n.common,
        issues: []
      }
    }, s = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    return Ca(s) ? s.then(o => ({
      status: "valid",
      value: o.status === "valid" ? o.value : this._def.catchValue({
        get error() {
          return new Jt(r.common.issues)
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Jt(r.common.issues)
        },
        input: r.data
      })
    }
  }
  removeCatch() {
    return this._def.innerType
  }
}
Ia.create = (e, t) => new Ia({
  innerType: e,
  typeName: ae.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...ce(t)
});
class Lc extends ve {
  _parse(t) {
    if (this._getType(t) !== X.nan) {
      const r = this._getOrReturnCtx(t);
      return Q(r, {
        code: V.invalid_type,
        expected: X.nan,
        received: r.parsedType
      }), le
    }
    return {
      status: "valid",
      value: t.data
    }
  }
}
Lc.create = e => new Lc({
  typeName: ae.ZodNaN,
  ...ce(e)
});
const PA = Symbol("zod_brand");
class tm extends ve {
  _parse(t) {
    const {
      ctx: n
    } = this._processInputParams(t), r = n.data;
    return this._def.type._parse({
      data: r,
      path: n.path,
      parent: n
    })
  }
  unwrap() {
    return this._def.type
  }
}
class Xa extends ve {
  _parse(t) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(t);
    if (r.common.async) return (async () => {
      const o = await this._def.in._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return o.status === "aborted" ? le : o.status === "dirty" ? (n.dirty(), No(o.value)) : this._def.out._parseAsync({
        data: o.value,
        path: r.path,
        parent: r
      })
    })(); {
      const s = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return s.status === "aborted" ? le : s.status === "dirty" ? (n.dirty(), {
        status: "dirty",
        value: s.value
      }) : this._def.out._parseSync({
        data: s.value,
        path: r.path,
        parent: r
      })
    }
  }
  static create(t, n) {
    return new Xa({
      in: t,
      out: n,
      typeName: ae.ZodPipeline
    })
  }
}
class Ma extends ve {
  _parse(t) {
    const n = this._def.innerType._parse(t),
      r = s => (Ea(s) && (s.value = Object.freeze(s.value)), s);
    return Ca(n) ? n.then(s => r(s)) : r(n)
  }
  unwrap() {
    return this._def.innerType
  }
}
Ma.create = (e, t) => new Ma({
  innerType: e,
  typeName: ae.ZodReadonly,
  ...ce(t)
});

function fb(e, t = {}, n) {
  return e ? ii.create().superRefine((r, s) => {
    var o, i;
    if (!e(r)) {
      const a = typeof t == "function" ? t(r) : typeof t == "string" ? {
          message: t
        } : t,
        c = (i = (o = a.fatal) !== null && o !== void 0 ? o : n) !== null && i !== void 0 ? i : !0,
        u = typeof a == "string" ? {
          message: a
        } : a;
      s.addIssue({
        code: "custom",
        ...u,
        fatal: c
      })
    }
  }) : ii.create()
}
const RA = {
  object: Ve.lazycreate
};
var ae;
(function (e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly"
})(ae || (ae = {}));
const AA = (e, t = {
    message: `Input not instance of ${e.name}`
  }) => fb(n => n instanceof e, t),
  ms = En.create,
  pb = ds.create,
  OA = Lc.create,
  DA = fs.create,
  Lu = Na.create,
  IA = Ws.create,
  MA = Dc.create,
  LA = _a.create,
  FA = ja.create,
  $A = ii.create,
  VA = Is.create,
  zA = br.create,
  BA = Ic.create,
  hb = jn.create,
  Fu = Ve.create,
  UA = Ve.strictCreate,
  WA = ka.create,
  HA = Mu.create,
  ZA = Ta.create,
  GA = Jn.create,
  mb = Pa.create,
  KA = Mc.create,
  YA = Hs.create,
  QA = $o.create,
  XA = Ra.create,
  qA = Aa.create,
  vb = ps.create,
  JA = Oa.create,
  eO = ai.create,
  _g = Rn.create,
  tO = Qn.create,
  nO = hs.create,
  rO = Rn.createWithPreprocess,
  sO = Xa.create,
  oO = () => ms().optional(),
  iO = () => pb().optional(),
  aO = () => Lu().optional(),
  nm = {
    string: e => En.create({
      ...e,
      coerce: !0
    }),
    number: e => ds.create({
      ...e,
      coerce: !0
    }),
    boolean: e => Na.create({
      ...e,
      coerce: !0
    }),
    bigint: e => fs.create({
      ...e,
      coerce: !0
    }),
    date: e => Ws.create({
      ...e,
      coerce: !0
    })
  },
  lO = le;
var Vr = Object.freeze({
    __proto__: null,
    defaultErrorMap: oi,
    setErrorMap: pA,
    getErrorMap: Rc,
    makeIssue: Ac,
    EMPTY_PATH: hA,
    addIssueToContext: Q,
    ParseStatus: jt,
    INVALID: le,
    DIRTY: No,
    OK: Dt,
    isAborted: op,
    isDirty: ip,
    isValid: Ea,
    isAsync: Ca,
    get util() {
      return Se
    },
    get objectUtil() {
      return sp
    },
    ZodParsedType: X,
    getParsedType: $r,
    ZodType: ve,
    datetimeRegex: ub,
    ZodString: En,
    ZodNumber: ds,
    ZodBigInt: fs,
    ZodBoolean: Na,
    ZodDate: Ws,
    ZodSymbol: Dc,
    ZodUndefined: _a,
    ZodNull: ja,
    ZodAny: ii,
    ZodUnknown: Is,
    ZodNever: br,
    ZodVoid: Ic,
    ZodArray: jn,
    ZodObject: Ve,
    ZodUnion: ka,
    ZodDiscriminatedUnion: Mu,
    ZodIntersection: Ta,
    ZodTuple: Jn,
    ZodRecord: Pa,
    ZodMap: Mc,
    ZodSet: Hs,
    ZodFunction: $o,
    ZodLazy: Ra,
    ZodLiteral: Aa,
    ZodEnum: ps,
    ZodNativeEnum: Oa,
    ZodPromise: ai,
    ZodEffects: Rn,
    ZodTransformer: Rn,
    ZodOptional: Qn,
    ZodNullable: hs,
    ZodDefault: Da,
    ZodCatch: Ia,
    ZodNaN: Lc,
    BRAND: PA,
    ZodBranded: tm,
    ZodPipeline: Xa,
    ZodReadonly: Ma,
    custom: fb,
    Schema: ve,
    ZodSchema: ve,
    late: RA,
    get ZodFirstPartyTypeKind() {
      return ae
    },
    coerce: nm,
    any: $A,
    array: hb,
    bigint: DA,
    boolean: Lu,
    date: IA,
    discriminatedUnion: HA,
    effect: _g,
    enum: vb,
    function: QA,
    instanceof: AA,
    intersection: ZA,
    lazy: XA,
    literal: qA,
    map: KA,
    nan: OA,
    nativeEnum: JA,
    never: zA,
    null: FA,
    nullable: nO,
    number: pb,
    object: Fu,
    oboolean: aO,
    onumber: iO,
    optional: tO,
    ostring: oO,
    pipeline: sO,
    preprocess: rO,
    promise: eO,
    record: mb,
    set: YA,
    strictObject: UA,
    string: ms,
    symbol: MA,
    transformer: _g,
    tuple: GA,
    undefined: LA,
    union: WA,
    unknown: VA,
    void: BA,
    NEVER: lO,
    ZodIssueCode: V,
    quotelessJson: fA,
    ZodError: Jt
  }),
  qa = e => e.type === "checkbox",
  _o = e => e instanceof Date,
  Pt = e => e == null;
const gb = e => typeof e == "object";
var at = e => !Pt(e) && !Array.isArray(e) && gb(e) && !_o(e),
  yb = e => at(e) && e.target ? qa(e.target) ? e.target.checked : e.target.value : e,
  cO = e => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  xb = (e, t) => e.has(cO(t)),
  uO = e => {
    const t = e.constructor && e.constructor.prototype;
    return at(t) && t.hasOwnProperty("isPrototypeOf")
  },
  rm = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";

function Lt(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (!(rm && (e instanceof Blob || e instanceof FileList)) && (n || at(e)))
    if (t = n ? [] : {}, !n && !uO(e)) t = e;
    else
      for (const r in e) e.hasOwnProperty(r) && (t[r] = Lt(e[r]));
  else return e;
  return t
}
var $u = e => Array.isArray(e) ? e.filter(Boolean) : [],
  Ke = e => e === void 0,
  U = (e, t, n) => {
    if (!t || !at(e)) return n;
    const r = $u(t.split(/[,[\].]+?/)).reduce((s, o) => Pt(s) ? s : s[o], e);
    return Ke(r) || r === e ? Ke(e[t]) ? n : e[t] : r
  },
  sn = e => typeof e == "boolean",
  sm = e => /^\w*$/.test(e),
  wb = e => $u(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
  Te = (e, t, n) => {
    let r = -1;
    const s = sm(t) ? [t] : wb(t),
      o = s.length,
      i = o - 1;
    for (; ++r < o;) {
      const a = s[r];
      let c = n;
      if (r !== i) {
        const u = e[a];
        c = at(u) || Array.isArray(u) ? u : isNaN(+s[r + 1]) ? {} : []
      }
      if (a === "__proto__") return;
      e[a] = c, e = e[a]
    }
    return e
  };
const Fc = {
    BLUR: "blur",
    FOCUS_OUT: "focusout",
    CHANGE: "change"
  },
  Sn = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all"
  },
  rr = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate"
  },
  bb = L.createContext(null),
  Vu = () => L.useContext(bb),
  dO = e => {
    const {
      children: t,
      ...n
    } = e;
    return L.createElement(bb.Provider, {
      value: n
    }, t)
  };
var Sb = (e, t, n, r = !0) => {
    const s = {
      defaultValues: t._defaultValues
    };
    for (const o in e) Object.defineProperty(s, o, {
      get: () => {
        const i = o;
        return t._proxyFormState[i] !== Sn.all && (t._proxyFormState[i] = !r || Sn.all), n && (n[i] = !0), e[i]
      }
    });
    return s
  },
  Ft = e => at(e) && !Object.keys(e).length,
  Eb = (e, t, n, r) => {
    n(e);
    const {
      name: s,
      ...o
    } = e;
    return Ft(o) || Object.keys(o).length >= Object.keys(t).length || Object.keys(o).find(i => t[i] === (!r || Sn.all))
  },
  Qi = e => Array.isArray(e) ? e : [e],
  Cb = (e, t, n) => !e || !t || e === t || Qi(e).some(r => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));

function om(e) {
  const t = L.useRef(e);
  t.current = e, L.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe()
    }
  }, [e.disabled])
}

function fO(e) {
  const t = Vu(),
    {
      control: n = t.control,
      disabled: r,
      name: s,
      exact: o
    } = e || {},
    [i, a] = L.useState(n._formState),
    c = L.useRef(!0),
    u = L.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1
    }),
    f = L.useRef(s);
  return f.current = s, om({
    disabled: r,
    next: p => c.current && Cb(f.current, p.name, o) && Eb(p, u.current, n._updateFormState) && a({
      ...n._formState,
      ...p
    }),
    subject: n._subjects.state
  }), L.useEffect(() => (c.current = !0, u.current.isValid && n._updateValid(!0), () => {
    c.current = !1
  }), [n]), Sb(i, n, u.current, !1)
}
var Gn = e => typeof e == "string",
  Nb = (e, t, n, r, s) => Gn(e) ? (r && t.watch.add(e), U(n, e, s)) : Array.isArray(e) ? e.map(o => (r && t.watch.add(o), U(n, o))) : (r && (t.watchAll = !0), n);

function pO(e) {
  const t = Vu(),
    {
      control: n = t.control,
      name: r,
      defaultValue: s,
      disabled: o,
      exact: i
    } = e || {},
    a = L.useRef(r);
  a.current = r, om({
    disabled: o,
    subject: n._subjects.values,
    next: f => {
      Cb(a.current, f.name, i) && u(Lt(Nb(a.current, n._names, f.values || n._formValues, !1, s)))
    }
  });
  const [c, u] = L.useState(n._getWatch(r, s));
  return L.useEffect(() => n._removeUnmounted()), c
}

function hO(e) {
  const t = Vu(),
    {
      name: n,
      disabled: r,
      control: s = t.control,
      shouldUnregister: o
    } = e,
    i = xb(s._names.array, n),
    a = pO({
      control: s,
      name: n,
      defaultValue: U(s._formValues, n, U(s._defaultValues, n, e.defaultValue)),
      exact: !0
    }),
    c = fO({
      control: s,
      name: n,
      exact: !0
    }),
    u = L.useRef(s.register(n, {
      ...e.rules,
      value: a,
      ...sn(e.disabled) ? {
        disabled: e.disabled
      } : {}
    }));
  return L.useEffect(() => {
    const f = s._options.shouldUnregister || o,
      p = (h, w) => {
        const x = U(s._fields, h);
        x && x._f && (x._f.mount = w)
      };
    if (p(n, !0), f) {
      const h = Lt(U(s._options.defaultValues, n));
      Te(s._defaultValues, n, h), Ke(U(s._formValues, n)) && Te(s._formValues, n, h)
    }
    return () => {
      (i ? f && !s._state.action : f) ? s.unregister(n): p(n, !1)
    }
  }, [n, s, i, o]), L.useEffect(() => {
    U(s._fields, n) && s._updateDisabledField({
      disabled: r,
      fields: s._fields,
      name: n,
      value: U(s._fields, n)._f.value
    })
  }, [r, n, s]), {
    field: {
      name: n,
      value: a,
      ...sn(r) || c.disabled ? {
        disabled: c.disabled || r
      } : {},
      onChange: L.useCallback(f => u.current.onChange({
        target: {
          value: yb(f),
          name: n
        },
        type: Fc.CHANGE
      }), [n]),
      onBlur: L.useCallback(() => u.current.onBlur({
        target: {
          value: U(s._formValues, n),
          name: n
        },
        type: Fc.BLUR
      }), [n, s]),
      ref: L.useCallback(f => {
        const p = U(s._fields, n);
        p && f && (p._f.ref = {
          focus: () => f.focus(),
          select: () => f.select(),
          setCustomValidity: h => f.setCustomValidity(h),
          reportValidity: () => f.reportValidity()
        })
      }, [s._fields, n])
    },
    formState: c,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!U(c.errors, n)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!U(c.dirtyFields, n)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!U(c.touchedFields, n)
      },
      isValidating: {
        enumerable: !0,
        get: () => !!U(c.validatingFields, n)
      },
      error: {
        enumerable: !0,
        get: () => U(c.errors, n)
      }
    })
  }
}
const mO = e => e.render(hO(e));
var _b = (e, t, n, r, s) => t ? {
    ...n[e],
    types: {
      ...n[e] && n[e].types ? n[e].types : {},
      [r]: s || !0
    }
  } : {},
  jg = e => ({
    isOnSubmit: !e || e === Sn.onSubmit,
    isOnBlur: e === Sn.onBlur,
    isOnChange: e === Sn.onChange,
    isOnAll: e === Sn.all,
    isOnTouch: e === Sn.onTouched
  }),
  kg = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some(r => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const Xi = (e, t, n, r) => {
  for (const s of n || Object.keys(e)) {
    const o = U(e, s);
    if (o) {
      const {
        _f: i,
        ...a
      } = o;
      if (i) {
        if (i.refs && i.refs[0] && t(i.refs[0], s) && !r) return !0;
        if (i.ref && t(i.ref, i.name) && !r) return !0;
        if (Xi(a, t)) break
      } else if (at(a) && Xi(a, t)) break
    }
  }
};
var vO = (e, t, n) => {
    const r = Qi(U(e, n));
    return Te(r, "root", t[n]), Te(e, n, r), e
  },
  im = e => e.type === "file",
  dr = e => typeof e == "function",
  $c = e => {
    if (!rm) return !1;
    const t = e ? e.ownerDocument : 0;
    return e instanceof(t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
  },
  ql = e => Gn(e),
  am = e => e.type === "radio",
  Vc = e => e instanceof RegExp;
const Tg = {
    value: !1,
    isValid: !1
  },
  Pg = {
    value: !0,
    isValid: !0
  };
var jb = e => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter(n => n && n.checked && !n.disabled).map(n => n.value);
      return {
        value: t,
        isValid: !!t.length
      }
    }
    return e[0].checked && !e[0].disabled ? e[0].attributes && !Ke(e[0].attributes.value) ? Ke(e[0].value) || e[0].value === "" ? Pg : {
      value: e[0].value,
      isValid: !0
    } : Pg : Tg
  }
  return Tg
};
const Rg = {
  isValid: !1,
  value: null
};
var kb = e => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, Rg) : Rg;

function Ag(e, t, n = "validate") {
  if (ql(e) || Array.isArray(e) && e.every(ql) || sn(e) && !e) return {
    type: n,
    message: ql(e) ? e : "",
    ref: t
  }
}
var oo = e => at(e) && !Vc(e) ? e : {
    value: e,
    message: ""
  },
  Og = async (e, t, n, r, s) => {
    const {
      ref: o,
      refs: i,
      required: a,
      maxLength: c,
      minLength: u,
      min: f,
      max: p,
      pattern: h,
      validate: w,
      name: x,
      valueAsNumber: m,
      mount: b,
      disabled: g
    } = e._f, v = U(t, x);
    if (!b || g) return {};
    const y = i ? i[0] : o,
      S = R => {
        r && y.reportValidity && (y.setCustomValidity(sn(R) ? "" : R || ""), y.reportValidity())
      },
      E = {},
      _ = am(o),
      C = qa(o),
      j = _ || C,
      P = (m || im(o)) && Ke(o.value) && Ke(v) || $c(o) && o.value === "" || v === "" || Array.isArray(v) && !v.length,
      O = _b.bind(null, x, n, E),
      z = (R, D, I, G = rr.maxLength, W = rr.minLength) => {
        const te = R ? D : I;
        E[x] = {
          type: R ? G : W,
          message: te,
          ref: o,
          ...O(R ? G : W, te)
        }
      };
    if (s ? !Array.isArray(v) || !v.length : a && (!j && (P || Pt(v)) || sn(v) && !v || C && !jb(i).isValid || _ && !kb(i).isValid)) {
      const {
        value: R,
        message: D
      } = ql(a) ? {
        value: !!a,
        message: a
      } : oo(a);
      if (R && (E[x] = {
          type: rr.required,
          message: D,
          ref: y,
          ...O(rr.required, D)
        }, !n)) return S(D), E
    }
    if (!P && (!Pt(f) || !Pt(p))) {
      let R, D;
      const I = oo(p),
        G = oo(f);
      if (!Pt(v) && !isNaN(v)) {
        const W = o.valueAsNumber || v && +v;
        Pt(I.value) || (R = W > I.value), Pt(G.value) || (D = W < G.value)
      } else {
        const W = o.valueAsDate || new Date(v),
          te = K => new Date(new Date().toDateString() + " " + K),
          k = o.type == "time",
          F = o.type == "week";
        Gn(I.value) && v && (R = k ? te(v) > te(I.value) : F ? v > I.value : W > new Date(I.value)), Gn(G.value) && v && (D = k ? te(v) < te(G.value) : F ? v < G.value : W < new Date(G.value))
      }
      if ((R || D) && (z(!!R, I.message, G.message, rr.max, rr.min), !n)) return S(E[x].message), E
    }
    if ((c || u) && !P && (Gn(v) || s && Array.isArray(v))) {
      const R = oo(c),
        D = oo(u),
        I = !Pt(R.value) && v.length > +R.value,
        G = !Pt(D.value) && v.length < +D.value;
      if ((I || G) && (z(I, R.message, D.message), !n)) return S(E[x].message), E
    }
    if (h && !P && Gn(v)) {
      const {
        value: R,
        message: D
      } = oo(h);
      if (Vc(R) && !v.match(R) && (E[x] = {
          type: rr.pattern,
          message: D,
          ref: o,
          ...O(rr.pattern, D)
        }, !n)) return S(D), E
    }
    if (w) {
      if (dr(w)) {
        const R = await w(v, t),
          D = Ag(R, y);
        if (D && (E[x] = {
            ...D,
            ...O(rr.validate, D.message)
          }, !n)) return S(D.message), E
      } else if (at(w)) {
        let R = {};
        for (const D in w) {
          if (!Ft(R) && !n) break;
          const I = Ag(await w[D](v, t), y, D);
          I && (R = {
            ...I,
            ...O(D, I.message)
          }, S(I.message), n && (E[x] = R))
        }
        if (!Ft(R) && (E[x] = {
            ref: y,
            ...R
          }, !n)) return E
      }
    }
    return S(!0), E
  };

function gO(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n;) e = Ke(e) ? r++ : e[t[r++]];
  return e
}

function yO(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !Ke(e[t])) return !1;
  return !0
}

function lt(e, t) {
  const n = Array.isArray(t) ? t : sm(t) ? [t] : wb(t),
    r = n.length === 1 ? e : gO(e, n),
    s = n.length - 1,
    o = n[s];
  return r && delete r[o], s !== 0 && (at(r) && Ft(r) || Array.isArray(r) && yO(r)) && lt(e, n.slice(0, -1)), e
}
var $d = () => {
    let e = [];
    return {
      get observers() {
        return e
      },
      next: s => {
        for (const o of e) o.next && o.next(s)
      },
      subscribe: s => (e.push(s), {
        unsubscribe: () => {
          e = e.filter(o => o !== s)
        }
      }),
      unsubscribe: () => {
        e = []
      }
    }
  },
  zc = e => Pt(e) || !gb(e);

function zr(e, t) {
  if (zc(e) || zc(t)) return e === t;
  if (_o(e) && _o(t)) return e.getTime() === t.getTime();
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const s of n) {
    const o = e[s];
    if (!r.includes(s)) return !1;
    if (s !== "ref") {
      const i = t[s];
      if (_o(o) && _o(i) || at(o) && at(i) || Array.isArray(o) && Array.isArray(i) ? !zr(o, i) : o !== i) return !1
    }
  }
  return !0
}
var Tb = e => e.type === "select-multiple",
  xO = e => am(e) || qa(e),
  Vd = e => $c(e) && e.isConnected,
  Pb = e => {
    for (const t in e)
      if (dr(e[t])) return !0;
    return !1
  };

function Bc(e, t = {}) {
  const n = Array.isArray(e);
  if (at(e) || n)
    for (const r in e) Array.isArray(e[r]) || at(e[r]) && !Pb(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, Bc(e[r], t[r])) : Pt(e[r]) || (t[r] = !0);
  return t
}

function Rb(e, t, n) {
  const r = Array.isArray(e);
  if (at(e) || r)
    for (const s in e) Array.isArray(e[s]) || at(e[s]) && !Pb(e[s]) ? Ke(t) || zc(n[s]) ? n[s] = Array.isArray(e[s]) ? Bc(e[s], []) : {
      ...Bc(e[s])
    } : Rb(e[s], Pt(t) ? {} : t[s], n[s]) : n[s] = !zr(e[s], t[s]);
  return n
}
var Rl = (e, t) => Rb(e, t, Bc(t)),
  Ab = (e, {
    valueAsNumber: t,
    valueAsDate: n,
    setValueAs: r
  }) => Ke(e) ? e : t ? e === "" ? NaN : e && +e : n && Gn(e) ? new Date(e) : r ? r(e) : e;

function zd(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every(n => n.disabled) : t.disabled)) return im(t) ? t.files : am(t) ? kb(e.refs).value : Tb(t) ? [...t.selectedOptions].map(({
    value: n
  }) => n) : qa(t) ? jb(e.refs).value : Ab(Ke(t.value) ? e.ref.value : t.value, e)
}
var wO = (e, t, n, r) => {
    const s = {};
    for (const o of e) {
      const i = U(t, o);
      i && Te(s, o, i._f)
    }
    return {
      criteriaMode: n,
      names: [...e],
      fields: s,
      shouldUseNativeValidation: r
    }
  },
  Ai = e => Ke(e) ? e : Vc(e) ? e.source : at(e) ? Vc(e.value) ? e.value.source : e.value : e;
const Dg = "AsyncFunction";
var bO = e => (!e || !e.validate) && !!(dr(e.validate) && e.validate.constructor.name === Dg || at(e.validate) && Object.values(e.validate).find(t => t.constructor.name === Dg)),
  SO = e => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);

function Ig(e, t, n) {
  const r = U(e, n);
  if (r || sm(n)) return {
    error: r,
    name: n
  };
  const s = n.split(".");
  for (; s.length;) {
    const o = s.join("."),
      i = U(t, o),
      a = U(e, o);
    if (i && !Array.isArray(i) && n !== o) return {
      name: n
    };
    if (a && a.type) return {
      name: o,
      error: a
    };
    s.pop()
  }
  return {
    name: n
  }
}
var EO = (e, t, n, r, s) => s.isOnAll ? !1 : !n && s.isOnTouch ? !(t || e) : (n ? r.isOnBlur : s.isOnBlur) ? !e : (n ? r.isOnChange : s.isOnChange) ? e : !0,
  CO = (e, t) => !$u(U(e, t)).length && lt(e, t);
const NO = {
  mode: Sn.onSubmit,
  reValidateMode: Sn.onChange,
  shouldFocusError: !0
};

function _O(e = {}) {
  let t = {
      ...NO,
      ...e
    },
    n = {
      submitCount: 0,
      isDirty: !1,
      isLoading: dr(t.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: t.errors || {},
      disabled: t.disabled || !1
    },
    r = {},
    s = at(t.defaultValues) || at(t.values) ? Lt(t.defaultValues || t.values) || {} : {},
    o = t.shouldUnregister ? {} : Lt(s),
    i = {
      action: !1,
      mount: !1,
      watch: !1
    },
    a = {
      mount: new Set,
      unMount: new Set,
      array: new Set,
      watch: new Set
    },
    c, u = 0;
  const f = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1
    },
    p = {
      values: $d(),
      array: $d(),
      state: $d()
    },
    h = jg(t.mode),
    w = jg(t.reValidateMode),
    x = t.criteriaMode === Sn.all,
    m = N => T => {
      clearTimeout(u), u = setTimeout(N, T)
    },
    b = async N => {
      if (f.isValid || N) {
        const T = t.resolver ? Ft((await j()).errors) : await O(r, !0);
        T !== n.isValid && p.state.next({
          isValid: T
        })
      }
    }, g = (N, T) => {
      (f.isValidating || f.validatingFields) && ((N || Array.from(a.mount)).forEach(A => {
        A && (T ? Te(n.validatingFields, A, T) : lt(n.validatingFields, A))
      }), p.state.next({
        validatingFields: n.validatingFields,
        isValidating: !Ft(n.validatingFields)
      }))
    }, v = (N, T = [], A, Y, H = !0, B = !0) => {
      if (Y && A) {
        if (i.action = !0, B && Array.isArray(U(r, N))) {
          const se = A(U(r, N), Y.argA, Y.argB);
          H && Te(r, N, se)
        }
        if (B && Array.isArray(U(n.errors, N))) {
          const se = A(U(n.errors, N), Y.argA, Y.argB);
          H && Te(n.errors, N, se), CO(n.errors, N)
        }
        if (f.touchedFields && B && Array.isArray(U(n.touchedFields, N))) {
          const se = A(U(n.touchedFields, N), Y.argA, Y.argB);
          H && Te(n.touchedFields, N, se)
        }
        f.dirtyFields && (n.dirtyFields = Rl(s, o)), p.state.next({
          name: N,
          isDirty: R(N, T),
          dirtyFields: n.dirtyFields,
          errors: n.errors,
          isValid: n.isValid
        })
      } else Te(o, N, T)
    }, y = (N, T) => {
      Te(n.errors, N, T), p.state.next({
        errors: n.errors
      })
    }, S = N => {
      n.errors = N, p.state.next({
        errors: n.errors,
        isValid: !1
      })
    }, E = (N, T, A, Y) => {
      const H = U(r, N);
      if (H) {
        const B = U(o, N, Ke(A) ? U(s, N) : A);
        Ke(B) || Y && Y.defaultChecked || T ? Te(o, N, T ? B : zd(H._f)) : G(N, B), i.mount && b()
      }
    }, _ = (N, T, A, Y, H) => {
      let B = !1,
        se = !1;
      const Ne = {
          name: N
        },
        He = !!(U(r, N) && U(r, N)._f && U(r, N)._f.disabled);
      if (!A || Y) {
        f.isDirty && (se = n.isDirty, n.isDirty = Ne.isDirty = R(), B = se !== Ne.isDirty);
        const De = He || zr(U(s, N), T);
        se = !!(!He && U(n.dirtyFields, N)), De || He ? lt(n.dirtyFields, N) : Te(n.dirtyFields, N, !0), Ne.dirtyFields = n.dirtyFields, B = B || f.dirtyFields && se !== !De
      }
      if (A) {
        const De = U(n.touchedFields, N);
        De || (Te(n.touchedFields, N, A), Ne.touchedFields = n.touchedFields, B = B || f.touchedFields && De !== A)
      }
      return B && H && p.state.next(Ne), B ? Ne : {}
    }, C = (N, T, A, Y) => {
      const H = U(n.errors, N),
        B = f.isValid && sn(T) && n.isValid !== T;
      if (e.delayError && A ? (c = m(() => y(N, A)), c(e.delayError)) : (clearTimeout(u), c = null, A ? Te(n.errors, N, A) : lt(n.errors, N)), (A ? !zr(H, A) : H) || !Ft(Y) || B) {
        const se = {
          ...Y,
          ...B && sn(T) ? {
            isValid: T
          } : {},
          errors: n.errors,
          name: N
        };
        n = {
          ...n,
          ...se
        }, p.state.next(se)
      }
    }, j = async N => {
      g(N, !0);
      const T = await t.resolver(o, t.context, wO(N || a.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
      return g(N), T
    }, P = async N => {
      const {
        errors: T
      } = await j(N);
      if (N)
        for (const A of N) {
          const Y = U(T, A);
          Y ? Te(n.errors, A, Y) : lt(n.errors, A)
        } else n.errors = T;
      return T
    }, O = async (N, T, A = {
      valid: !0
    }) => {
      for (const Y in N) {
        const H = N[Y];
        if (H) {
          const {
            _f: B,
            ...se
          } = H;
          if (B) {
            const Ne = a.array.has(B.name),
              He = H._f && bO(H._f);
            He && f.validatingFields && g([Y], !0);
            const De = await Og(H, o, x, t.shouldUseNativeValidation && !T, Ne);
            if (He && f.validatingFields && g([Y]), De[B.name] && (A.valid = !1, T)) break;
            !T && (U(De, B.name) ? Ne ? vO(n.errors, De, B.name) : Te(n.errors, B.name, De[B.name]) : lt(n.errors, B.name))
          }!Ft(se) && await O(se, T, A)
        }
      }
      return A.valid
    }, z = () => {
      for (const N of a.unMount) {
        const T = U(r, N);
        T && (T._f.refs ? T._f.refs.every(A => !Vd(A)) : !Vd(T._f.ref)) && ge(N)
      }
      a.unMount = new Set
    }, R = (N, T) => (N && T && Te(o, N, T), !zr(Z(), s)), D = (N, T, A) => Nb(N, a, {
      ...i.mount ? o : Ke(T) ? s : Gn(N) ? {
        [N]: T
      } : T
    }, A, T), I = N => $u(U(i.mount ? o : s, N, e.shouldUnregister ? U(s, N, []) : [])), G = (N, T, A = {}) => {
      const Y = U(r, N);
      let H = T;
      if (Y) {
        const B = Y._f;
        B && (!B.disabled && Te(o, N, Ab(T, B)), H = $c(B.ref) && Pt(T) ? "" : T, Tb(B.ref) ? [...B.ref.options].forEach(se => se.selected = H.includes(se.value)) : B.refs ? qa(B.ref) ? B.refs.length > 1 ? B.refs.forEach(se => (!se.defaultChecked || !se.disabled) && (se.checked = Array.isArray(H) ? !!H.find(Ne => Ne === se.value) : H === se.value)) : B.refs[0] && (B.refs[0].checked = !!H) : B.refs.forEach(se => se.checked = se.value === H) : im(B.ref) ? B.ref.value = "" : (B.ref.value = H, B.ref.type || p.values.next({
          name: N,
          values: {
            ...o
          }
        })))
      }(A.shouldDirty || A.shouldTouch) && _(N, H, A.shouldTouch, A.shouldDirty, !0), A.shouldValidate && K(N)
    }, W = (N, T, A) => {
      for (const Y in T) {
        const H = T[Y],
          B = `${N}.${Y}`,
          se = U(r, B);
        (a.array.has(N) || !zc(H) || se && !se._f) && !_o(H) ? W(B, H, A) : G(B, H, A)
      }
    }, te = (N, T, A = {}) => {
      const Y = U(r, N),
        H = a.array.has(N),
        B = Lt(T);
      Te(o, N, B), H ? (p.array.next({
        name: N,
        values: {
          ...o
        }
      }), (f.isDirty || f.dirtyFields) && A.shouldDirty && p.state.next({
        name: N,
        dirtyFields: Rl(s, o),
        isDirty: R(N, B)
      })) : Y && !Y._f && !Pt(B) ? W(N, B, A) : G(N, B, A), kg(N, a) && p.state.next({
        ...n
      }), p.values.next({
        name: i.mount ? N : void 0,
        values: {
          ...o
        }
      })
    }, k = async N => {
      i.mount = !0;
      const T = N.target;
      let A = T.name,
        Y = !0;
      const H = U(r, A),
        B = () => T.type ? zd(H._f) : yb(N),
        se = Ne => {
          Y = Number.isNaN(Ne) || zr(Ne, U(o, A, Ne))
        };
      if (H) {
        let Ne, He;
        const De = B(),
          In = N.type === Fc.BLUR || N.type === Fc.FOCUS_OUT,
          jr = !SO(H._f) && !t.resolver && !U(n.errors, A) && !H._f.deps || EO(In, U(n.touchedFields, A), n.isSubmitted, w, h),
          Js = kg(A, a, In);
        Te(o, A, De), In ? (H._f.onBlur && H._f.onBlur(N), c && c(0)) : H._f.onChange && H._f.onChange(N);
        const wi = _(A, De, In, !1),
          el = !Ft(wi) || Js;
        if (!In && p.values.next({
            name: A,
            type: N.type,
            values: {
              ...o
            }
          }), jr) return f.isValid && (e.mode === "onBlur" ? In && b() : b()), el && p.state.next({
          name: A,
          ...Js ? {} : wi
        });
        if (!In && Js && p.state.next({
            ...n
          }), t.resolver) {
          const {
            errors: bi
          } = await j([A]);
          if (se(De), Y) {
            const Ku = Ig(n.errors, r, A),
              eo = Ig(bi, r, Ku.name || A);
            Ne = eo.error, A = eo.name, He = Ft(bi)
          }
        } else g([A], !0), Ne = (await Og(H, o, x, t.shouldUseNativeValidation))[A], g([A]), se(De), Y && (Ne ? He = !1 : f.isValid && (He = await O(r, !0)));
        Y && (H._f.deps && K(H._f.deps), C(A, He, Ne, wi))
      }
    }, F = (N, T) => {
      if (U(n.errors, T) && N.focus) return N.focus(), 1
    }, K = async (N, T = {}) => {
      let A, Y;
      const H = Qi(N);
      if (t.resolver) {
        const B = await P(Ke(N) ? N : H);
        A = Ft(B), Y = N ? !H.some(se => U(B, se)) : A
      } else N ? (Y = (await Promise.all(H.map(async B => {
        const se = U(r, B);
        return await O(se && se._f ? {
          [B]: se
        } : se)
      }))).every(Boolean), !(!Y && !n.isValid) && b()) : Y = A = await O(r);
      return p.state.next({
        ...!Gn(N) || f.isValid && A !== n.isValid ? {} : {
          name: N
        },
        ...t.resolver || !N ? {
          isValid: A
        } : {},
        errors: n.errors
      }), T.shouldFocus && !Y && Xi(r, F, N ? H : a.mount), Y
    }, Z = N => {
      const T = {
        ...i.mount ? o : s
      };
      return Ke(N) ? T : Gn(N) ? U(T, N) : N.map(A => U(T, A))
    }, re = (N, T) => ({
      invalid: !!U((T || n).errors, N),
      isDirty: !!U((T || n).dirtyFields, N),
      error: U((T || n).errors, N),
      isValidating: !!U(n.validatingFields, N),
      isTouched: !!U((T || n).touchedFields, N)
    }), de = N => {
      N && Qi(N).forEach(T => lt(n.errors, T)), p.state.next({
        errors: N ? n.errors : {}
      })
    }, Ee = (N, T, A) => {
      const Y = (U(r, N, {
          _f: {}
        })._f || {}).ref,
        H = U(n.errors, N) || {},
        {
          ref: B,
          message: se,
          type: Ne,
          ...He
        } = H;
      Te(n.errors, N, {
        ...He,
        ...T,
        ref: Y
      }), p.state.next({
        name: N,
        errors: n.errors,
        isValid: !1
      }), A && A.shouldFocus && Y && Y.focus && Y.focus()
    }, nt = (N, T) => dr(N) ? p.values.subscribe({
      next: A => N(D(void 0, T), A)
    }) : D(N, T, !0), ge = (N, T = {}) => {
      for (const A of N ? Qi(N) : a.mount) a.mount.delete(A), a.array.delete(A), T.keepValue || (lt(r, A), lt(o, A)), !T.keepError && lt(n.errors, A), !T.keepDirty && lt(n.dirtyFields, A), !T.keepTouched && lt(n.touchedFields, A), !T.keepIsValidating && lt(n.validatingFields, A), !t.shouldUnregister && !T.keepDefaultValue && lt(s, A);
      p.values.next({
        values: {
          ...o
        }
      }), p.state.next({
        ...n,
        ...T.keepDirty ? {
          isDirty: R()
        } : {}
      }), !T.keepIsValid && b()
    }, ie = ({
      disabled: N,
      name: T,
      field: A,
      fields: Y,
      value: H
    }) => {
      if (sn(N) && i.mount || N) {
        const B = N ? void 0 : Ke(H) ? zd(A ? A._f : U(Y, T)._f) : H;
        Te(o, T, B), _(T, B, !1, !1, !0)
      }
    }, xe = (N, T = {}) => {
      let A = U(r, N);
      const Y = sn(T.disabled) || sn(e.disabled);
      return Te(r, N, {
        ...A || {},
        _f: {
          ...A && A._f ? A._f : {
            ref: {
              name: N
            }
          },
          name: N,
          mount: !0,
          ...T
        }
      }), a.mount.add(N), A ? ie({
        field: A,
        disabled: sn(T.disabled) ? T.disabled : e.disabled,
        name: N,
        value: T.value
      }) : E(N, !0, T.value), {
        ...Y ? {
          disabled: T.disabled || e.disabled
        } : {},
        ...t.progressive ? {
          required: !!T.required,
          min: Ai(T.min),
          max: Ai(T.max),
          minLength: Ai(T.minLength),
          maxLength: Ai(T.maxLength),
          pattern: Ai(T.pattern)
        } : {},
        name: N,
        onChange: k,
        onBlur: k,
        ref: H => {
          if (H) {
            xe(N, T), A = U(r, N);
            const B = Ke(H.value) && H.querySelectorAll && H.querySelectorAll("input,select,textarea")[0] || H,
              se = xO(B),
              Ne = A._f.refs || [];
            if (se ? Ne.find(He => He === B) : B === A._f.ref) return;
            Te(r, N, {
              _f: {
                ...A._f,
                ...se ? {
                  refs: [...Ne.filter(Vd), B, ...Array.isArray(U(s, N)) ? [{}] : []],
                  ref: {
                    type: B.type,
                    name: N
                  }
                } : {
                  ref: B
                }
              }
            }), E(N, !1, void 0, B)
          } else A = U(r, N, {}), A._f && (A._f.mount = !1), (t.shouldUnregister || T.shouldUnregister) && !(xb(a.array, N) && i.action) && a.unMount.add(N)
        }
      }
    }, Oe = () => t.shouldFocusError && Xi(r, F, a.mount), we = N => {
      sn(N) && (p.state.next({
        disabled: N
      }), Xi(r, (T, A) => {
        const Y = U(r, A);
        Y && (T.disabled = Y._f.disabled || N, Array.isArray(Y._f.refs) && Y._f.refs.forEach(H => {
          H.disabled = Y._f.disabled || N
        }))
      }, 0, !1))
    }, Ce = (N, T) => async A => {
      let Y;
      A && (A.preventDefault && A.preventDefault(), A.persist && A.persist());
      let H = Lt(o);
      if (p.state.next({
          isSubmitting: !0
        }), t.resolver) {
        const {
          errors: B,
          values: se
        } = await j();
        n.errors = B, H = se
      } else await O(r);
      if (lt(n.errors, "root"), Ft(n.errors)) {
        p.state.next({
          errors: {}
        });
        try {
          await N(H, A)
        } catch (B) {
          Y = B
        }
      } else T && await T({
        ...n.errors
      }, A), Oe(), setTimeout(Oe);
      if (p.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Ft(n.errors) && !Y,
          submitCount: n.submitCount + 1,
          errors: n.errors
        }), Y) throw Y
    }, be = (N, T = {}) => {
      U(r, N) && (Ke(T.defaultValue) ? te(N, Lt(U(s, N))) : (te(N, T.defaultValue), Te(s, N, Lt(T.defaultValue))), T.keepTouched || lt(n.touchedFields, N), T.keepDirty || (lt(n.dirtyFields, N), n.isDirty = T.defaultValue ? R(N, Lt(U(s, N))) : R()), T.keepError || (lt(n.errors, N), f.isValid && b()), p.state.next({
        ...n
      }))
    }, dt = (N, T = {}) => {
      const A = N ? Lt(N) : s,
        Y = Lt(A),
        H = Ft(N),
        B = H ? s : Y;
      if (T.keepDefaultValues || (s = A), !T.keepValues) {
        if (T.keepDirtyValues)
          for (const se of a.mount) U(n.dirtyFields, se) ? Te(B, se, U(o, se)) : te(se, U(B, se));
        else {
          if (rm && Ke(N))
            for (const se of a.mount) {
              const Ne = U(r, se);
              if (Ne && Ne._f) {
                const He = Array.isArray(Ne._f.refs) ? Ne._f.refs[0] : Ne._f.ref;
                if ($c(He)) {
                  const De = He.closest("form");
                  if (De) {
                    De.reset();
                    break
                  }
                }
              }
            }
          r = {}
        }
        o = e.shouldUnregister ? T.keepDefaultValues ? Lt(s) : {} : Lt(B), p.array.next({
          values: {
            ...B
          }
        }), p.values.next({
          values: {
            ...B
          }
        })
      }
      a = {
        mount: T.keepDirtyValues ? a.mount : new Set,
        unMount: new Set,
        array: new Set,
        watch: new Set,
        watchAll: !1,
        focus: ""
      }, i.mount = !f.isValid || !!T.keepIsValid || !!T.keepDirtyValues, i.watch = !!e.shouldUnregister, p.state.next({
        submitCount: T.keepSubmitCount ? n.submitCount : 0,
        isDirty: H ? !1 : T.keepDirty ? n.isDirty : !!(T.keepDefaultValues && !zr(N, s)),
        isSubmitted: T.keepIsSubmitted ? n.isSubmitted : !1,
        dirtyFields: H ? {} : T.keepDirtyValues ? T.keepDefaultValues && o ? Rl(s, o) : n.dirtyFields : T.keepDefaultValues && N ? Rl(s, N) : T.keepDirty ? n.dirtyFields : {},
        touchedFields: T.keepTouched ? n.touchedFields : {},
        errors: T.keepErrors ? n.errors : {},
        isSubmitSuccessful: T.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
        isSubmitting: !1
      })
    }, xt = (N, T) => dt(dr(N) ? N(o) : N, T);
  return {
    control: {
      register: xe,
      unregister: ge,
      getFieldState: re,
      handleSubmit: Ce,
      setError: Ee,
      _executeSchema: j,
      _getWatch: D,
      _getDirty: R,
      _updateValid: b,
      _removeUnmounted: z,
      _updateFieldArray: v,
      _updateDisabledField: ie,
      _getFieldArray: I,
      _reset: dt,
      _resetDefaultValues: () => dr(t.defaultValues) && t.defaultValues().then(N => {
        xt(N, t.resetOptions), p.state.next({
          isLoading: !1
        })
      }),
      _updateFormState: N => {
        n = {
          ...n,
          ...N
        }
      },
      _disableForm: we,
      _subjects: p,
      _proxyFormState: f,
      _setErrors: S,
      get _fields() {
        return r
      },
      get _formValues() {
        return o
      },
      get _state() {
        return i
      },
      set _state(N) {
        i = N
      },
      get _defaultValues() {
        return s
      },
      get _names() {
        return a
      },
      set _names(N) {
        a = N
      },
      get _formState() {
        return n
      },
      set _formState(N) {
        n = N
      },
      get _options() {
        return t
      },
      set _options(N) {
        t = {
          ...t,
          ...N
        }
      }
    },
    trigger: K,
    register: xe,
    handleSubmit: Ce,
    watch: nt,
    setValue: te,
    getValues: Z,
    reset: xt,
    resetField: be,
    clearErrors: de,
    unregister: ge,
    setError: Ee,
    setFocus: (N, T = {}) => {
      const A = U(r, N),
        Y = A && A._f;
      if (Y) {
        const H = Y.refs ? Y.refs[0] : Y.ref;
        H.focus && (H.focus(), T.shouldSelect && H.select())
      }
    },
    getFieldState: re
  }
}

function li(e = {}) {
  const t = L.useRef(),
    n = L.useRef(),
    [r, s] = L.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: dr(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: dr(e.defaultValues) ? void 0 : e.defaultValues
    });
  t.current || (t.current = {
    ..._O(e),
    formState: r
  });
  const o = t.current.control;
  return o._options = e, om({
    subject: o._subjects.state,
    next: i => {
      Eb(i, o._proxyFormState, o._updateFormState, !0) && s({
        ...o._formState
      })
    }
  }), L.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]), L.useEffect(() => {
    if (o._proxyFormState.isDirty) {
      const i = o._getDirty();
      i !== r.isDirty && o._subjects.state.next({
        isDirty: i
      })
    }
  }, [o, r.isDirty]), L.useEffect(() => {
    e.values && !zr(e.values, n.current) ? (o._reset(e.values, o._options.resetOptions), n.current = e.values, s(i => ({
      ...i
    }))) : o._resetDefaultValues()
  }, [e.values, o]), L.useEffect(() => {
    e.errors && o._setErrors(e.errors)
  }, [e.errors, o]), L.useEffect(() => {
    o._state.mount || (o._updateValid(), o._state.mount = !0), o._state.watch && (o._state.watch = !1, o._subjects.state.next({
      ...o._formState
    })), o._removeUnmounted()
  }), L.useEffect(() => {
    e.shouldUnregister && o._subjects.values.next({
      values: o._getWatch()
    })
  }, [e.shouldUnregister, o]), t.current.formState = Sb(r, o), t.current
}
const Mg = (e, t, n) => {
    if (e && "reportValidity" in e) {
      const r = U(n, t);
      e.setCustomValidity(r && r.message || ""), e.reportValidity()
    }
  },
  Ob = (e, t) => {
    for (const n in t.fields) {
      const r = t.fields[n];
      r && r.ref && "reportValidity" in r.ref ? Mg(r.ref, n, e) : r.refs && r.refs.forEach(s => Mg(s, n, e))
    }
  },
  jO = (e, t) => {
    t.shouldUseNativeValidation && Ob(e, t);
    const n = {};
    for (const r in e) {
      const s = U(t.fields, r),
        o = Object.assign(e[r] || {}, {
          ref: s && s.ref
        });
      if (kO(t.names || Object.keys(e), r)) {
        const i = Object.assign({}, U(n, r));
        Te(i, "root", o), Te(n, r, i)
      } else Te(n, r, o)
    }
    return n
  },
  kO = (e, t) => e.some(n => n.startsWith(t + "."));
var TO = function (e, t) {
    for (var n = {}; e.length;) {
      var r = e[0],
        s = r.code,
        o = r.message,
        i = r.path.join(".");
      if (!n[i])
        if ("unionErrors" in r) {
          var a = r.unionErrors[0].errors[0];
          n[i] = {
            message: a.message,
            type: a.code
          }
        } else n[i] = {
          message: o,
          type: s
        };
      if ("unionErrors" in r && r.unionErrors.forEach(function (f) {
          return f.errors.forEach(function (p) {
            return e.push(p)
          })
        }), t) {
        var c = n[i].types,
          u = c && c[r.code];
        n[i] = _b(i, t, n, s, u ? [].concat(u, r.message) : r.message)
      }
      e.shift()
    }
    return n
  },
  La = function (e, t, n) {
    return n === void 0 && (n = {}),
      function (r, s, o) {
        try {
          return Promise.resolve(function (i, a) {
            try {
              var c = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function (u) {
                return o.shouldUseNativeValidation && Ob({}, o), {
                  errors: {},
                  values: n.raw ? r : u
                }
              })
            } catch (u) {
              return a(u)
            }
            return c && c.then ? c.then(void 0, a) : c
          }(0, function (i) {
            if (function (a) {
                return Array.isArray(a == null ? void 0 : a.errors)
              }(i)) return {
              values: {},
              errors: jO(TO(i.errors, !o.shouldUseNativeValidation && o.criteriaMode === "all"), o)
            };
            throw i
          }))
        } catch (i) {
          return Promise.reject(i)
        }
      }
  },
  PO = "Label",
  Db = d.forwardRef((e, t) => l.jsx(ne.label, {
    ...e,
    ref: t,
    onMouseDown: n => {
      var s;
      n.target.closest("button, input, select, textarea") || ((s = e.onMouseDown) == null || s.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault())
    }
  }));
Db.displayName = PO;
var Ib = Db;
const RO = fu("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),
  wn = d.forwardRef(({
    className: e,
    ...t
  }, n) => l.jsx(Ib, {
    ref: n,
    className: ee(RO(), e),
    ...t
  }));
wn.displayName = Ib.displayName;
const ci = dO,
  Mb = d.createContext({}),
  qe = ({
    ...e
  }) => l.jsx(Mb.Provider, {
    value: {
      name: e.name
    },
    children: l.jsx(mO, {
      ...e
    })
  }),
  zu = () => {
    const e = d.useContext(Mb),
      t = d.useContext(Lb),
      {
        getFieldState: n,
        formState: r
      } = Vu(),
      s = n(e.name, r);
    if (!e) throw new Error("useFormField should be used within <FormField>");
    const {
      id: o
    } = t;
    return {
      id: o,
      name: e.name,
      formItemId: `${o}-form-item`,
      formDescriptionId: `${o}-form-item-description`,
      formMessageId: `${o}-form-item-message`,
      ...s
    }
  },
  Lb = d.createContext({}),
  Ye = d.forwardRef(({
    className: e,
    ...t
  }, n) => {
    const r = d.useId();
    return l.jsx(Lb.Provider, {
      value: {
        id: r
      },
      children: l.jsx("div", {
        ref: n,
        className: ee("space-y-2", e),
        ...t
      })
    })
  });
Ye.displayName = "FormItem";
const Je = d.forwardRef(({
  className: e,
  ...t
}, n) => {
  const {
    error: r,
    formItemId: s
  } = zu();
  return l.jsx(wn, {
    ref: n,
    className: ee(r && "text-destructive", e),
    htmlFor: s,
    ...t
  })
});
Je.displayName = "FormLabel";
const et = d.forwardRef(({
  ...e
}, t) => {
  const {
    error: n,
    formItemId: r,
    formDescriptionId: s,
    formMessageId: o
  } = zu();
  return l.jsx(gr, {
    ref: t,
    id: r,
    "aria-describedby": n ? `${s} ${o}` : `${s}`,
    "aria-invalid": !!n,
    ...e
  })
});
et.displayName = "FormControl";
const AO = d.forwardRef(({
  className: e,
  ...t
}, n) => {
  const {
    formDescriptionId: r
  } = zu();
  return l.jsx("p", {
    ref: n,
    id: r,
    className: ee("text-sm text-muted-foreground", e),
    ...t
  })
});
AO.displayName = "FormDescription";
const tt = d.forwardRef(({
  className: e,
  children: t,
  ...n
}, r) => {
  const {
    error: s,
    formMessageId: o
  } = zu(), i = s ? String(s == null ? void 0 : s.message) : t;
  return i ? l.jsx("p", {
    ref: r,
    id: o,
    className: ee("text-sm font-medium text-destructive", e),
    ...n,
    children: i
  }) : null
});
tt.displayName = "FormMessage";
const OO = Vr.object({
    email: Vr.string().email({
      message: "請輸入有效的信箱地址"
    }),
    password: Vr.string().min(6, {
      message: "密碼至少需要6個字元"
    })
  }),
  DO = Vr.object({
    name: Vr.string().min(2, {
      message: "名稱至少需要2個字元"
    }),
    email: Vr.string().email({
      message: "請輸入有效的信箱地址"
    }),
    password: Vr.string().min(6, {
      message: "密碼至少需要6個字元"
    }),
    confirmPassword: Vr.string().min(6, {
      message: "密碼至少需要6個字元"
    })
  }).refine(e => e.password === e.confirmPassword, {
    message: "密碼不一致",
    path: ["confirmPassword"]
  }),
  IO = () => {
    const {
      toast: e
    } = Qs(), t = hn(), [n, r] = d.useState(!1), s = li({
      resolver: La(OO),
      defaultValues: {
        email: "",
        password: ""
      }
    }), o = li({
      resolver: La(DO),
      defaultValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      }
    }), i = async c => {
      r(!0);
      try {
        console.log("Login with:", c), setTimeout(() => {
          localStorage.setItem("user", JSON.stringify({
            email: c.email,
            name: c.email.split("@")[0]
          })), e({
            title: "登入成功",
            description: "歡迎回來！"
          }), t("/dashboard")
        }, 1e3)
      } catch {
        e({
          title: "登入失敗",
          description: "信箱或密碼錯誤",
          variant: "destructive"
        })
      } finally {
        r(!1)
      }
    }, a = async c => {
      r(!0);
      try {
        console.log("Register with:", c), setTimeout(() => {
          var u;
          e({
            title: "註冊成功",
            description: "請登入您的帳號"
          }), o.reset(), (u = document.getElementById("login-tab")) == null || u.click()
        }, 1e3)
      } catch {
        e({
          title: "註冊失敗",
          description: "此信箱可能已被使用",
          variant: "destructive"
        })
      } finally {
        r(!1)
      }
    };
    return l.jsx("div", {
      className: "min-h-screen bg-gray-50 flex flex-col",
      children: l.jsxs("div", {
        className: "container max-w-md mx-auto px-4 py-12 flex-grow flex flex-col justify-center",
        children: [l.jsxs("div", {
          className: "text-center mb-8",
          children: [l.jsxs(Rt, {
            to: "/",
            className: "inline-flex items-center space-x-2",
            children: [l.jsx("div", {
              className: "w-12 h-12 rounded-full bg-penpen-primary text-white flex items-center justify-center font-display font-bold text-xl",
              children: "P"
            }), l.jsx("span", {
              className: "text-2xl font-display font-semibold text-penpen-primary",
              children: "PenPen"
            })]
          }), l.jsx("h1", {
            className: "text-2xl font-bold mt-4",
            children: "成為教育者"
          }), l.jsx("p", {
            className: "text-gray-500 mt-2",
            children: "登入或註冊以啟用更多功能"
          })]
        }), l.jsx("div", {
          className: "bg-white p-8 rounded-lg shadow-sm",
          children: l.jsxs(ob, {
            defaultValue: "login",
            className: "w-full",
            children: [l.jsxs(em, {
              className: "grid w-full grid-cols-2 mb-6",
              children: [l.jsx(ba, {
                value: "login",
                id: "login-tab",
                children: "登入"
              }), l.jsx(ba, {
                value: "register",
                children: "註冊"
              })]
            }), l.jsx(Sa, {
              value: "login",
              children: l.jsx(ci, {
                ...s,
                children: l.jsxs("form", {
                  onSubmit: s.handleSubmit(i),
                  className: "space-y-4",
                  children: [l.jsx(qe, {
                    control: s.control,
                    name: "email",
                    render: ({
                      field: c
                    }) => l.jsxs(Ye, {
                      children: [l.jsx(Je, {
                        children: "電子信箱"
                      }), l.jsx(et, {
                        children: l.jsx(rt, {
                          placeholder: "your.email@example.com",
                          ...c
                        })
                      }), l.jsx(tt, {})]
                    })
                  }), l.jsx(qe, {
                    control: s.control,
                    name: "password",
                    render: ({
                      field: c
                    }) => l.jsxs(Ye, {
                      children: [l.jsx(Je, {
                        children: "密碼"
                      }), l.jsx(et, {
                        children: l.jsx(rt, {
                          type: "password",
                          placeholder: "••••••••",
                          ...c
                        })
                      }), l.jsx(tt, {})]
                    })
                  }), l.jsx(me, {
                    type: "submit",
                    className: "w-full",
                    disabled: n,
                    children: n ? "登入中..." : "登入"
                  })]
                })
              })
            }), l.jsx(Sa, {
              value: "register",
              children: l.jsx(ci, {
                ...o,
                children: l.jsxs("form", {
                  onSubmit: o.handleSubmit(a),
                  className: "space-y-4",
                  children: [l.jsx(qe, {
                    control: o.control,
                    name: "name",
                    render: ({
                      field: c
                    }) => l.jsxs(Ye, {
                      children: [l.jsx(Je, {
                        children: "名稱"
                      }), l.jsx(et, {
                        children: l.jsx(rt, {
                          placeholder: "您的名稱",
                          ...c
                        })
                      }), l.jsx(tt, {})]
                    })
                  }), l.jsx(qe, {
                    control: o.control,
                    name: "email",
                    render: ({
                      field: c
                    }) => l.jsxs(Ye, {
                      children: [l.jsx(Je, {
                        children: "電子信箱"
                      }), l.jsx(et, {
                        children: l.jsx(rt, {
                          placeholder: "your.email@example.com",
                          ...c
                        })
                      }), l.jsx(tt, {})]
                    })
                  }), l.jsx(qe, {
                    control: o.control,
                    name: "password",
                    render: ({
                      field: c
                    }) => l.jsxs(Ye, {
                      children: [l.jsx(Je, {
                        children: "密碼"
                      }), l.jsx(et, {
                        children: l.jsx(rt, {
                          type: "password",
                          placeholder: "••••••••",
                          ...c
                        })
                      }), l.jsx(tt, {})]
                    })
                  }), l.jsx(qe, {
                    control: o.control,
                    name: "confirmPassword",
                    render: ({
                      field: c
                    }) => l.jsxs(Ye, {
                      children: [l.jsx(Je, {
                        children: "確認密碼"
                      }), l.jsx(et, {
                        children: l.jsx(rt, {
                          type: "password",
                          placeholder: "••••••••",
                          ...c
                        })
                      }), l.jsx(tt, {})]
                    })
                  }), l.jsx(me, {
                    type: "submit",
                    className: "w-full",
                    disabled: n,
                    children: n ? "註冊中..." : "註冊"
                  })]
                })
              })
            })]
          })
        })]
      })
    })
  },
  vt = d.forwardRef(({
    className: e,
    ...t
  }, n) => l.jsx("div", {
    ref: n,
    className: ee("rounded-lg border bg-card text-card-foreground shadow-sm", e),
    ...t
  }));
vt.displayName = "Card";
const ln = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx("div", {
  ref: n,
  className: ee("flex flex-col space-y-1.5 p-6", e),
  ...t
}));
ln.displayName = "CardHeader";
const cn = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx("h3", {
  ref: n,
  className: ee("text-2xl font-semibold leading-none tracking-tight", e),
  ...t
}));
cn.displayName = "CardTitle";
const fo = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx("p", {
  ref: n,
  className: ee("text-sm text-muted-foreground", e),
  ...t
}));
fo.displayName = "CardDescription";
const Nt = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx("div", {
  ref: n,
  className: ee("p-6 pt-0", e),
  ...t
}));
Nt.displayName = "CardContent";
const Mr = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx("div", {
  ref: n,
  className: ee("flex items-center p-6 pt-0", e),
  ...t
}));
Mr.displayName = "CardFooter";
const MO = () => {
    const [e, t] = d.useState(null), n = hn(), {
      toast: r
    } = Qs();
    d.useEffect(() => {
      const o = localStorage.getItem("user");
      if (!o) {
        n("/auth");
        return
      }
      try {
        const i = JSON.parse(o);
        t(i)
      } catch (i) {
        console.error("Failed to parse user data", i), localStorage.removeItem("user"), n("/auth")
      }
    }, [n]);
    const s = () => {
      localStorage.removeItem("user"), r({
        title: "登出成功",
        description: "您已成功登出系統"
      }), n("/")
    };
    return e ? l.jsxs("div", {
      className: "min-h-screen flex flex-col",
      children: [l.jsx(Er, {}), l.jsx("main", {
        className: "flex-grow container mx-auto px-4 py-8",
        children: l.jsxs("div", {
          className: "flex flex-col md:flex-row gap-8",
          children: [l.jsx("div", {
            className: "w-full md:w-1/4",
            children: l.jsxs(vt, {
              children: [l.jsx(ln, {
                children: l.jsx(cn, {
                  children: "會員資料"
                })
              }), l.jsxs(Nt, {
                className: "flex flex-col items-center",
                children: [l.jsx("div", {
                  className: "w-24 h-24 bg-penpen-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mb-4",
                  children: e.name ? e.name.charAt(0).toUpperCase() : "U"
                }), l.jsx("h3", {
                  className: "text-xl font-medium",
                  children: e.name
                }), l.jsx("p", {
                  className: "text-gray-500",
                  children: e.email
                })]
              }), l.jsx(Mr, {
                children: l.jsx(me, {
                  variant: "outline",
                  className: "w-full",
                  onClick: s,
                  children: "登出"
                })
              })]
            })
          }), l.jsxs("div", {
            className: "w-full md:w-3/4",
            children: [l.jsx("h2", {
              className: "text-2xl font-bold mb-6",
              children: "功能選單"
            }), l.jsxs("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
              children: [l.jsxs(vt, {
                className: "hover:shadow-md transition-shadow",
                children: [l.jsxs(ln, {
                  children: [l.jsx(cn, {
                    children: "建立學習單"
                  }), l.jsx(fo, {
                    children: "建立新的學習單項目"
                  })]
                }), l.jsx(Nt, {
                  children: l.jsx("p", {
                    className: "text-gray-500",
                    children: "創建含有不同題型的學習單，支援圖片題目與答案。"
                  })
                }), l.jsx(Mr, {
                  children: l.jsx(me, {
                    className: "w-full",
                    onClick: () => n("/create-sheet"),
                    children: "建立學習單"
                  })
                })]
              }), l.jsxs(vt, {
                className: "hover:shadow-md transition-shadow",
                children: [l.jsxs(ln, {
                  children: [l.jsx(cn, {
                    children: "建立測驗"
                  }), l.jsx(fo, {
                    children: "從現有學習單建立測驗"
                  })]
                }), l.jsx(Nt, {
                  children: l.jsx("p", {
                    className: "text-gray-500",
                    children: "設定測驗時間、標題與說明，並生成專屬測驗連結。"
                  })
                }), l.jsx(Mr, {
                  children: l.jsx(me, {
                    className: "w-full",
                    onClick: () => n("/create-exam"),
                    children: "建立測驗"
                  })
                })]
              }), l.jsxs(vt, {
                className: "hover:shadow-md transition-shadow",
                children: [l.jsxs(ln, {
                  children: [l.jsx(cn, {
                    children: "我的最愛"
                  }), l.jsx(fo, {
                    children: "已收藏的學習單"
                  })]
                }), l.jsx(Nt, {
                  children: l.jsx("p", {
                    className: "text-gray-500",
                    children: "查看您已收藏的所有學習單項目。"
                  })
                }), l.jsx(Mr, {
                  children: l.jsx(me, {
                    className: "w-full",
                    onClick: () => n("/favorites"),
                    children: "查看最愛"
                  })
                })]
              }), l.jsxs(vt, {
                className: "hover:shadow-md transition-shadow",
                children: [l.jsxs(ln, {
                  children: [l.jsx(cn, {
                    children: "測驗紀錄"
                  }), l.jsx(fo, {
                    children: "歷史測驗與其結果"
                  })]
                }), l.jsx(Nt, {
                  children: l.jsx("p", {
                    className: "text-gray-500",
                    children: "查看所有測驗的詳細結果與統計資料。"
                  })
                }), l.jsx(Mr, {
                  children: l.jsx(me, {
                    className: "w-full",
                    onClick: () => n("/exam-records"),
                    children: "檢視紀錄"
                  })
                })]
              }), l.jsxs(vt, {
                className: "hover:shadow-md transition-shadow",
                children: [l.jsxs(ln, {
                  children: [l.jsx(cn, {
                    children: "修改個人資料"
                  }), l.jsx(fo, {
                    children: "更新您的會員資訊"
                  })]
                }), l.jsx(Nt, {
                  children: l.jsx("p", {
                    className: "text-gray-500",
                    children: "修改您的顯示名稱與個人設定。"
                  })
                }), l.jsx(Mr, {
                  children: l.jsx(me, {
                    className: "w-full",
                    onClick: () => n("/edit-profile"),
                    children: "修改資料"
                  })
                })]
              })]
            })]
          })]
        })
      }), l.jsx(Cr, {})]
    }) : l.jsx("div", {
      className: "min-h-screen flex items-center justify-center",
      children: "載入中..."
    })
  },
  LO = () => {
    const [e, t] = d.useState(null), [n, r] = d.useState(""), [s, o] = d.useState(!1), i = hn(), {
      toast: a
    } = Qs();
    d.useEffect(() => {
      const u = localStorage.getItem("user");
      if (!u) {
        i("/auth");
        return
      }
      try {
        const f = JSON.parse(u);
        t(f), r(f.name || "")
      } catch (f) {
        console.error("Failed to parse user data", f), localStorage.removeItem("user"), i("/auth")
      }
    }, [i]);
    const c = u => {
      u.preventDefault(), o(!0), setTimeout(() => {
        if (e) {
          const f = {
            ...e,
            name: n
          };
          localStorage.setItem("user", JSON.stringify(f)), a({
            title: "資料更新成功",
            description: "您的個人資料已更新"
          }), i("/dashboard")
        }
        o(!1)
      }, 1e3)
    };
    return e ? l.jsxs("div", {
      className: "min-h-screen flex flex-col",
      children: [l.jsx(Er, {}), l.jsx("main", {
        className: "flex-grow container mx-auto px-4 py-8",
        children: l.jsxs("div", {
          className: "max-w-md mx-auto",
          children: [l.jsx("h1", {
            className: "text-2xl font-bold mb-6",
            children: "修改個人資料"
          }), l.jsxs(vt, {
            children: [l.jsx(ln, {
              children: l.jsx(cn, {
                children: "個人資料設定"
              })
            }), l.jsxs("form", {
              onSubmit: c,
              children: [l.jsxs(Nt, {
                className: "space-y-4",
                children: [l.jsxs("div", {
                  className: "space-y-2",
                  children: [l.jsx(wn, {
                    htmlFor: "name",
                    children: "顯示名稱"
                  }), l.jsx(rt, {
                    id: "name",
                    value: n,
                    onChange: u => r(u.target.value),
                    placeholder: "您的名稱",
                    required: !0
                  })]
                }), l.jsxs("div", {
                  className: "space-y-2",
                  children: [l.jsx(wn, {
                    htmlFor: "email",
                    children: "電子信箱"
                  }), l.jsx(rt, {
                    id: "email",
                    value: e.email,
                    disabled: !0,
                    className: "bg-gray-50"
                  }), l.jsx("p", {
                    className: "text-sm text-gray-500",
                    children: "信箱無法變更"
                  })]
                })]
              }), l.jsxs(Mr, {
                className: "flex justify-between",
                children: [l.jsx(me, {
                  type: "button",
                  variant: "outline",
                  onClick: () => i("/dashboard"),
                  disabled: s,
                  children: "取消"
                }), l.jsx(me, {
                  type: "submit",
                  disabled: s,
                  children: s ? "儲存中..." : "儲存變更"
                })]
              })]
            })]
          })]
        })
      }), l.jsx(Cr, {})]
    }) : l.jsx("div", {
      className: "min-h-screen flex items-center justify-center",
      children: "載入中..."
    })
  };
let Al;
const FO = new Uint8Array(16);

function $O() {
  if (!Al && (Al = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Al)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Al(FO)
}
const ht = [];
for (let e = 0; e < 256; ++e) ht.push((e + 256).toString(16).slice(1));

function VO(e, t = 0) {
  return ht[e[t + 0]] + ht[e[t + 1]] + ht[e[t + 2]] + ht[e[t + 3]] + "-" + ht[e[t + 4]] + ht[e[t + 5]] + "-" + ht[e[t + 6]] + ht[e[t + 7]] + "-" + ht[e[t + 8]] + ht[e[t + 9]] + "-" + ht[e[t + 10]] + ht[e[t + 11]] + ht[e[t + 12]] + ht[e[t + 13]] + ht[e[t + 14]] + ht[e[t + 15]]
}
const zO = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  Lg = {
    randomUUID: zO
  };

function Vn(e, t, n) {
  if (Lg.randomUUID && !t && !e) return Lg.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || $O)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, VO(r)
}

function lm(e) {
  const t = d.useRef({
    value: e,
    previous: e
  });
  return d.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
}
var cm = "Checkbox",
  [BO, EM] = An(cm),
  [UO, WO] = BO(cm),
  Fb = d.forwardRef((e, t) => {
    const {
      __scopeCheckbox: n,
      name: r,
      checked: s,
      defaultChecked: o,
      required: i,
      disabled: a,
      value: c = "on",
      onCheckedChange: u,
      ...f
    } = e, [p, h] = d.useState(null), w = ue(t, y => h(y)), x = d.useRef(!1), m = p ? !!p.closest("form") : !0, [b = !1, g] = yr({
      prop: s,
      defaultProp: o,
      onChange: u
    }), v = d.useRef(b);
    return d.useEffect(() => {
      const y = p == null ? void 0 : p.form;
      if (y) {
        const S = () => g(v.current);
        return y.addEventListener("reset", S), () => y.removeEventListener("reset", S)
      }
    }, [p, g]), l.jsxs(UO, {
      scope: n,
      state: b,
      disabled: a,
      children: [l.jsx(ne.button, {
        type: "button",
        role: "checkbox",
        "aria-checked": Ms(b) ? "mixed" : b,
        "aria-required": i,
        "data-state": zb(b),
        "data-disabled": a ? "" : void 0,
        disabled: a,
        value: c,
        ...f,
        ref: w,
        onKeyDown: q(e.onKeyDown, y => {
          y.key === "Enter" && y.preventDefault()
        }),
        onClick: q(e.onClick, y => {
          g(S => Ms(S) ? !0 : !S), m && (x.current = y.isPropagationStopped(), x.current || y.stopPropagation())
        })
      }), m && l.jsx(HO, {
        control: p,
        bubbles: !x.current,
        name: r,
        value: c,
        checked: b,
        required: i,
        disabled: a,
        style: {
          transform: "translateX(-100%)"
        }
      })]
    })
  });
Fb.displayName = cm;
var $b = "CheckboxIndicator",
  Vb = d.forwardRef((e, t) => {
    const {
      __scopeCheckbox: n,
      forceMount: r,
      ...s
    } = e, o = WO($b, n);
    return l.jsx(ws, {
      present: r || Ms(o.state) || o.state === !0,
      children: l.jsx(ne.span, {
        "data-state": zb(o.state),
        "data-disabled": o.disabled ? "" : void 0,
        ...s,
        ref: t,
        style: {
          pointerEvents: "none",
          ...e.style
        }
      })
    })
  });
Vb.displayName = $b;
var HO = e => {
  const {
    control: t,
    checked: n,
    bubbles: r = !0,
    ...s
  } = e, o = d.useRef(null), i = lm(n), a = Nh(t);
  return d.useEffect(() => {
    const c = o.current,
      u = window.HTMLInputElement.prototype,
      p = Object.getOwnPropertyDescriptor(u, "checked").set;
    if (i !== n && p) {
      const h = new Event("click", {
        bubbles: r
      });
      c.indeterminate = Ms(n), p.call(c, Ms(n) ? !1 : n), c.dispatchEvent(h)
    }
  }, [i, n, r]), l.jsx("input", {
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: Ms(n) ? !1 : n,
    ...s,
    tabIndex: -1,
    ref: o,
    style: {
      ...e.style,
      ...a,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  })
};

function Ms(e) {
  return e === "indeterminate"
}

function zb(e) {
  return Ms(e) ? "indeterminate" : e ? "checked" : "unchecked"
}
var Bb = Fb,
  ZO = Vb;
const ui = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx(Bb, {
  ref: n,
  className: ee("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", e),
  ...t,
  children: l.jsx(ZO, {
    className: ee("flex items-center justify-center text-current"),
    children: l.jsx(K0, {
      className: "h-4 w-4"
    })
  })
}));
ui.displayName = Bb.displayName;
const GO = k1,
  KO = T1,
  Ub = d.forwardRef(({
    className: e,
    ...t
  }, n) => l.jsx(ku, {
    className: ee("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
    ...t,
    ref: n
  }));
Ub.displayName = ku.displayName;
const YO = fu("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }),
  Wb = d.forwardRef(({
    side: e = "right",
    className: t,
    children: n,
    ...r
  }, s) => l.jsxs(KO, {
    children: [l.jsx(Ub, {}), l.jsxs(Tu, {
      ref: s,
      className: ee(YO({
        side: e
      }), t),
      ...r,
      children: [n, l.jsxs(P1, {
        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
        children: [l.jsx(vh, {
          className: "h-4 w-4"
        }), l.jsx("span", {
          className: "sr-only",
          children: "Close"
        })]
      })]
    })]
  }));
Wb.displayName = Tu.displayName;
const Hb = ({
  className: e,
  ...t
}) => l.jsx("div", {
  className: ee("flex flex-col space-y-2 text-center sm:text-left", e),
  ...t
});
Hb.displayName = "SheetHeader";
const Zb = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx(Pu, {
  ref: n,
  className: ee("text-lg font-semibold text-foreground", e),
  ...t
}));
Zb.displayName = Pu.displayName;
const QO = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx(Ru, {
  ref: n,
  className: ee("text-sm text-muted-foreground", e),
  ...t
}));
QO.displayName = Ru.displayName;
const Bu = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx("textarea", {
  className: ee("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", e),
  ref: n,
  ...t
}));
Bu.displayName = "Textarea";

function Fg(e, [t, n]) {
  return Math.min(n, Math.max(t, e))
}
var XO = "DismissableLayer",
  lp = "dismissableLayer.update",
  qO = "dismissableLayer.pointerDownOutside",
  JO = "dismissableLayer.focusOutside",
  $g, Gb = d.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
  }),
  Kb = d.forwardRef((e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: s,
      onFocusOutside: o,
      onInteractOutside: i,
      onDismiss: a,
      ...c
    } = e, u = d.useContext(Gb), [f, p] = d.useState(null), h = (f == null ? void 0 : f.ownerDocument) ? ? (globalThis == null ? void 0 : globalThis.document), [, w] = d.useState({}), x = ue(t, C => p(C)), m = Array.from(u.layers), [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), g = m.indexOf(b), v = f ? m.indexOf(f) : -1, y = u.layersWithOutsidePointerEventsDisabled.size > 0, S = v >= g, E = nD(C => {
      const j = C.target,
        P = [...u.branches].some(O => O.contains(j));
      !S || P || (s == null || s(C), i == null || i(C), C.defaultPrevented || a == null || a())
    }, h), _ = rD(C => {
      const j = C.target;
      [...u.branches].some(O => O.contains(j)) || (o == null || o(C), i == null || i(C), C.defaultPrevented || a == null || a())
    }, h);
    return cu(C => {
      v === u.layers.size - 1 && (r == null || r(C), !C.defaultPrevented && a && (C.preventDefault(), a()))
    }, h), d.useEffect(() => {
      if (f) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && ($g = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), Vg(), () => {
        n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = $g)
      }
    }, [f, h, n, u]), d.useEffect(() => () => {
      f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), Vg())
    }, [f, u]), d.useEffect(() => {
      const C = () => w({});
      return document.addEventListener(lp, C), () => document.removeEventListener(lp, C)
    }, []), l.jsx(ne.div, {
      ...c,
      ref: x,
      style: {
        pointerEvents: y ? S ? "auto" : "none" : void 0,
        ...e.style
      },
      onFocusCapture: q(e.onFocusCapture, _.onFocusCapture),
      onBlurCapture: q(e.onBlurCapture, _.onBlurCapture),
      onPointerDownCapture: q(e.onPointerDownCapture, E.onPointerDownCapture)
    })
  });
Kb.displayName = XO;
var eD = "DismissableLayerBranch",
  tD = d.forwardRef((e, t) => {
    const n = d.useContext(Gb),
      r = d.useRef(null),
      s = ue(t, r);
    return d.useEffect(() => {
      const o = r.current;
      if (o) return n.branches.add(o), () => {
        n.branches.delete(o)
      }
    }, [n.branches]), l.jsx(ne.div, {
      ...e,
      ref: s
    })
  });
tD.displayName = eD;

function nD(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = it(e),
    r = d.useRef(!1),
    s = d.useRef(() => {});
  return d.useEffect(() => {
    const o = a => {
        if (a.target && !r.current) {
          let c = function () {
            Yb(qO, n, u, {
              discrete: !0
            })
          };
          const u = {
            originalEvent: a
          };
          a.pointerType === "touch" ? (t.removeEventListener("click", s.current), s.current = c, t.addEventListener("click", s.current, {
            once: !0
          })) : c()
        } else t.removeEventListener("click", s.current);
        r.current = !1
      },
      i = window.setTimeout(() => {
        t.addEventListener("pointerdown", o)
      }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", o), t.removeEventListener("click", s.current)
    }
  }, [t, n]), {
    onPointerDownCapture: () => r.current = !0
  }
}

function rD(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = it(e),
    r = d.useRef(!1);
  return d.useEffect(() => {
    const s = o => {
      o.target && !r.current && Yb(JO, n, {
        originalEvent: o
      }, {
        discrete: !1
      })
    };
    return t.addEventListener("focusin", s), () => t.removeEventListener("focusin", s)
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  }
}

function Vg() {
  const e = new CustomEvent(lp);
  document.dispatchEvent(e)
}

function Yb(e, t, n, {
  discrete: r
}) {
  const s = n.originalEvent.target,
    o = new CustomEvent(e, {
      bubbles: !1,
      cancelable: !0,
      detail: n
    });
  t && s.addEventListener(e, t, {
    once: !0
  }), r ? Ga(s, o) : s.dispatchEvent(o)
}
var Bd = 0;

function sD() {
  d.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ? ? zg()), document.body.insertAdjacentElement("beforeend", e[1] ? ? zg()), Bd++, () => {
      Bd === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()), Bd--
    }
  }, [])
}

function zg() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
}
var oD = "Portal",
  Qb = d.forwardRef((e, t) => {
    var a;
    const {
      container: n,
      ...r
    } = e, [s, o] = d.useState(!1);
    We(() => o(!0), []);
    const i = n || s && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
    return i ? Za.createPortal(l.jsx(ne.div, {
      ...r,
      ref: t
    }), i) : null
  });
Qb.displayName = oD;
var Xb = Mh(),
  Ud = function () {},
  Uu = d.forwardRef(function (e, t) {
    var n = d.useRef(null),
      r = d.useState({
        onScrollCapture: Ud,
        onWheelCapture: Ud,
        onTouchMoveCapture: Ud
      }),
      s = r[0],
      o = r[1],
      i = e.forwardProps,
      a = e.children,
      c = e.className,
      u = e.removeScrollBar,
      f = e.enabled,
      p = e.shards,
      h = e.sideCar,
      w = e.noIsolation,
      x = e.inert,
      m = e.allowPinchZoom,
      b = e.as,
      g = b === void 0 ? "div" : b,
      v = e.gapMode,
      y = Nu(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
      S = h,
      E = Ih([n, t]),
      _ = Qe(Qe({}, y), s);
    return d.createElement(d.Fragment, null, f && d.createElement(S, {
      sideCar: Xb,
      removeScrollBar: u,
      shards: p,
      noIsolation: w,
      inert: x,
      setCallbacks: o,
      allowPinchZoom: !!m,
      lockRef: n,
      gapMode: v
    }), i ? d.cloneElement(d.Children.only(a), Qe(Qe({}, _), {
      ref: E
    })) : d.createElement(g, Qe({}, _, {
      className: c,
      ref: E
    }), a))
  });
Uu.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Uu.classNames = {
  fullWidth: Lo,
  zeroRight: Mo
};
var cp = !1;
if (typeof window < "u") try {
  var Ol = Object.defineProperty({}, "passive", {
    get: function () {
      return cp = !0, !0
    }
  });
  window.addEventListener("test", Ol, Ol), window.removeEventListener("test", Ol, Ol)
} catch {
  cp = !1
}
var io = cp ? {
    passive: !1
  } : !1,
  iD = function (e) {
    return e.tagName === "TEXTAREA"
  },
  qb = function (e, t) {
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !iD(e) && n[t] === "visible")
  },
  aD = function (e) {
    return qb(e, "overflowY")
  },
  lD = function (e) {
    return qb(e, "overflowX")
  },
  Bg = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var s = Jb(e, r);
      if (s) {
        var o = eS(e, r),
          i = o[1],
          a = o[2];
        if (i > a) return !0
      }
      r = r.parentNode
    } while (r && r !== n.body);
    return !1
  },
  cD = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r]
  },
  uD = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r]
  },
  Jb = function (e, t) {
    return e === "v" ? aD(t) : lD(t)
  },
  eS = function (e, t) {
    return e === "v" ? cD(t) : uD(t)
  },
  dD = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1
  },
  fD = function (e, t, n, r, s) {
    var o = dD(e, window.getComputedStyle(t).direction),
      i = o * r,
      a = n.target,
      c = t.contains(a),
      u = !1,
      f = i > 0,
      p = 0,
      h = 0;
    do {
      var w = eS(e, a),
        x = w[0],
        m = w[1],
        b = w[2],
        g = m - b - o * x;
      (x || g) && Jb(e, a) && (p += g, h += x), a instanceof ShadowRoot ? a = a.host : a = a.parentNode
    } while (!c && a !== document.body || c && (t.contains(a) || t === a));
    return (f && (Math.abs(p) < 1 || !s) || !f && (Math.abs(h) < 1 || !s)) && (u = !0), u
  },
  Dl = function (e) {
    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
  },
  Ug = function (e) {
    return [e.deltaX, e.deltaY]
  },
  Wg = function (e) {
    return e && "current" in e ? e.current : e
  },
  pD = function (e, t) {
    return e[0] === t[0] && e[1] === t[1]
  },
  hD = function (e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
  },
  mD = 0,
  ao = [];

function vD(e) {
  var t = d.useRef([]),
    n = d.useRef([0, 0]),
    r = d.useRef(),
    s = d.useState(mD++)[0],
    o = d.useState(ju)[0],
    i = d.useRef(e);
  d.useEffect(function () {
    i.current = e
  }, [e]), d.useEffect(function () {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var m = Dh([e.lockRef.current], (e.shards || []).map(Wg), !0).filter(Boolean);
      return m.forEach(function (b) {
          return b.classList.add("allow-interactivity-".concat(s))
        }),
        function () {
          document.body.classList.remove("block-interactivity-".concat(s)), m.forEach(function (b) {
            return b.classList.remove("allow-interactivity-".concat(s))
          })
        }
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = d.useCallback(function (m, b) {
      if ("touches" in m && m.touches.length === 2) return !i.current.allowPinchZoom;
      var g = Dl(m),
        v = n.current,
        y = "deltaX" in m ? m.deltaX : v[0] - g[0],
        S = "deltaY" in m ? m.deltaY : v[1] - g[1],
        E, _ = m.target,
        C = Math.abs(y) > Math.abs(S) ? "h" : "v";
      if ("touches" in m && C === "h" && _.type === "range") return !1;
      var j = Bg(C, _);
      if (!j) return !0;
      if (j ? E = C : (E = C === "v" ? "h" : "v", j = Bg(C, _)), !j) return !1;
      if (!r.current && "changedTouches" in m && (y || S) && (r.current = E), !E) return !0;
      var P = r.current || E;
      return fD(P, b, m, P === "h" ? y : S, !0)
    }, []),
    c = d.useCallback(function (m) {
      var b = m;
      if (!(!ao.length || ao[ao.length - 1] !== o)) {
        var g = "deltaY" in b ? Ug(b) : Dl(b),
          v = t.current.filter(function (E) {
            return E.name === b.type && (E.target === b.target || b.target === E.shadowParent) && pD(E.delta, g)
          })[0];
        if (v && v.should) {
          b.cancelable && b.preventDefault();
          return
        }
        if (!v) {
          var y = (i.current.shards || []).map(Wg).filter(Boolean).filter(function (E) {
              return E.contains(b.target)
            }),
            S = y.length > 0 ? a(b, y[0]) : !i.current.noIsolation;
          S && b.cancelable && b.preventDefault()
        }
      }
    }, []),
    u = d.useCallback(function (m, b, g, v) {
      var y = {
        name: m,
        delta: b,
        target: g,
        should: v,
        shadowParent: gD(g)
      };
      t.current.push(y), setTimeout(function () {
        t.current = t.current.filter(function (S) {
          return S !== y
        })
      }, 1)
    }, []),
    f = d.useCallback(function (m) {
      n.current = Dl(m), r.current = void 0
    }, []),
    p = d.useCallback(function (m) {
      u(m.type, Ug(m), m.target, a(m, e.lockRef.current))
    }, []),
    h = d.useCallback(function (m) {
      u(m.type, Dl(m), m.target, a(m, e.lockRef.current))
    }, []);
  d.useEffect(function () {
    return ao.push(o), e.setCallbacks({
        onScrollCapture: p,
        onWheelCapture: p,
        onTouchMoveCapture: h
      }), document.addEventListener("wheel", c, io), document.addEventListener("touchmove", c, io), document.addEventListener("touchstart", f, io),
      function () {
        ao = ao.filter(function (m) {
          return m !== o
        }), document.removeEventListener("wheel", c, io), document.removeEventListener("touchmove", c, io), document.removeEventListener("touchstart", f, io)
      }
  }, []);
  var w = e.removeScrollBar,
    x = e.inert;
  return d.createElement(d.Fragment, null, x ? d.createElement(o, {
    styles: hD(s)
  }) : null, w ? d.createElement(Fh, {
    gapMode: e.gapMode
  }) : null)
}

function gD(e) {
  for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t
}
const yD = Lh(Xb, vD);
var tS = d.forwardRef(function (e, t) {
  return d.createElement(Uu, Qe({}, e, {
    ref: t,
    sideCar: yD
  }))
});
tS.classNames = Uu.classNames;
var xD = [" ", "Enter", "ArrowUp", "ArrowDown"],
  wD = [" ", "Enter"],
  Ja = "Select",
  [Wu, Hu, bD] = fh(Ja),
  [xi, CM] = An(Ja, [bD, gu]),
  Zu = gu(),
  [SD, Ss] = xi(Ja),
  [ED, CD] = xi(Ja),
  nS = e => {
    const {
      __scopeSelect: t,
      children: n,
      open: r,
      defaultOpen: s,
      onOpenChange: o,
      value: i,
      defaultValue: a,
      onValueChange: c,
      dir: u,
      name: f,
      autoComplete: p,
      disabled: h,
      required: w
    } = e, x = Zu(t), [m, b] = d.useState(null), [g, v] = d.useState(null), [y, S] = d.useState(!1), E = Ou(u), [_ = !1, C] = yr({
      prop: r,
      defaultProp: s,
      onChange: o
    }), [j, P] = yr({
      prop: i,
      defaultProp: a,
      onChange: c
    }), O = d.useRef(null), z = m ? !!m.closest("form") : !0, [R, D] = d.useState(new Set), I = Array.from(R).map(G => G.props.value).join(";");
    return l.jsx(KT, {
      ...x,
      children: l.jsxs(SD, {
        required: w,
        scope: t,
        trigger: m,
        onTriggerChange: b,
        valueNode: g,
        onValueNodeChange: v,
        valueNodeHasChildren: y,
        onValueNodeHasChildrenChange: S,
        contentId: _n(),
        value: j,
        onValueChange: P,
        open: _,
        onOpenChange: C,
        dir: E,
        triggerPointerDownPosRef: O,
        disabled: h,
        children: [l.jsx(Wu.Provider, {
          scope: t,
          children: l.jsx(ED, {
            scope: e.__scopeSelect,
            onNativeOptionAdd: d.useCallback(G => {
              D(W => new Set(W).add(G))
            }, []),
            onNativeOptionRemove: d.useCallback(G => {
              D(W => {
                const te = new Set(W);
                return te.delete(G), te
              })
            }, []),
            children: n
          })
        }), z ? l.jsxs(jS, {
          "aria-hidden": !0,
          required: w,
          tabIndex: -1,
          name: f,
          autoComplete: p,
          value: j,
          onChange: G => P(G.target.value),
          disabled: h,
          children: [j === void 0 ? l.jsx("option", {
            value: ""
          }) : null, Array.from(R)]
        }, I) : null]
      })
    })
  };
nS.displayName = Ja;
var rS = "SelectTrigger",
  sS = d.forwardRef((e, t) => {
    const {
      __scopeSelect: n,
      disabled: r = !1,
      ...s
    } = e, o = Zu(n), i = Ss(rS, n), a = i.disabled || r, c = ue(t, i.onTriggerChange), u = Hu(n), [f, p, h] = kS(x => {
      const m = u().filter(v => !v.disabled),
        b = m.find(v => v.value === i.value),
        g = TS(m, x, b);
      g !== void 0 && i.onValueChange(g.value)
    }), w = () => {
      a || (i.onOpenChange(!0), h())
    };
    return l.jsx(_w, {
      asChild: !0,
      ...o,
      children: l.jsx(ne.button, {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: a,
        "data-disabled": a ? "" : void 0,
        "data-placeholder": _S(i.value) ? "" : void 0,
        ...s,
        ref: c,
        onClick: q(s.onClick, x => {
          x.currentTarget.focus()
        }),
        onPointerDown: q(s.onPointerDown, x => {
          const m = x.target;
          m.hasPointerCapture(x.pointerId) && m.releasePointerCapture(x.pointerId), x.button === 0 && x.ctrlKey === !1 && (w(), i.triggerPointerDownPosRef.current = {
            x: Math.round(x.pageX),
            y: Math.round(x.pageY)
          }, x.preventDefault())
        }),
        onKeyDown: q(s.onKeyDown, x => {
          const m = f.current !== "";
          !(x.ctrlKey || x.altKey || x.metaKey) && x.key.length === 1 && p(x.key), !(m && x.key === " ") && xD.includes(x.key) && (w(), x.preventDefault())
        })
      })
    })
  });
sS.displayName = rS;
var oS = "SelectValue",
  iS = d.forwardRef((e, t) => {
    const {
      __scopeSelect: n,
      className: r,
      style: s,
      children: o,
      placeholder: i = "",
      ...a
    } = e, c = Ss(oS, n), {
      onValueNodeHasChildrenChange: u
    } = c, f = o !== void 0, p = ue(t, c.onValueNodeChange);
    return We(() => {
      u(f)
    }, [u, f]), l.jsx(ne.span, {
      ...a,
      ref: p,
      style: {
        pointerEvents: "none"
      },
      children: _S(c.value) ? l.jsx(l.Fragment, {
        children: i
      }) : o
    })
  });
iS.displayName = oS;
var ND = "SelectIcon",
  aS = d.forwardRef((e, t) => {
    const {
      __scopeSelect: n,
      children: r,
      ...s
    } = e;
    return l.jsx(ne.span, {
      "aria-hidden": !0,
      ...s,
      ref: t,
      children: r || "▼"
    })
  });
aS.displayName = ND;
var _D = "SelectPortal",
  lS = e => l.jsx(Qb, {
    asChild: !0,
    ...e
  });
lS.displayName = _D;
var Zs = "SelectContent",
  cS = d.forwardRef((e, t) => {
    const n = Ss(Zs, e.__scopeSelect),
      [r, s] = d.useState();
    if (We(() => {
        s(new DocumentFragment)
      }, []), !n.open) {
      const o = r;
      return o ? xs.createPortal(l.jsx(uS, {
        scope: e.__scopeSelect,
        children: l.jsx(Wu.Slot, {
          scope: e.__scopeSelect,
          children: l.jsx("div", {
            children: e.children
          })
        })
      }), o) : null
    }
    return l.jsx(dS, {
      ...e,
      ref: t
    })
  });
cS.displayName = Zs;
var ar = 10,
  [uS, Es] = xi(Zs),
  jD = "SelectContentImpl",
  dS = d.forwardRef((e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: s,
      onEscapeKeyDown: o,
      onPointerDownOutside: i,
      side: a,
      sideOffset: c,
      align: u,
      alignOffset: f,
      arrowPadding: p,
      collisionBoundary: h,
      collisionPadding: w,
      sticky: x,
      hideWhenDetached: m,
      avoidCollisions: b,
      ...g
    } = e, v = Ss(Zs, n), [y, S] = d.useState(null), [E, _] = d.useState(null), C = ue(t, ie => S(ie)), [j, P] = d.useState(null), [O, z] = d.useState(null), R = Hu(n), [D, I] = d.useState(!1), G = d.useRef(!1);
    d.useEffect(() => {
      if (y) return $h(y)
    }, [y]), sD();
    const W = d.useCallback(ie => {
        const [xe, ...Oe] = R().map(be => be.ref.current), [we] = Oe.slice(-1), Ce = document.activeElement;
        for (const be of ie)
          if (be === Ce || (be == null || be.scrollIntoView({
              block: "nearest"
            }), be === xe && E && (E.scrollTop = 0), be === we && E && (E.scrollTop = E.scrollHeight), be == null || be.focus(), document.activeElement !== Ce)) return
      }, [R, E]),
      te = d.useCallback(() => W([j, y]), [W, j, y]);
    d.useEffect(() => {
      D && te()
    }, [D, te]);
    const {
      onOpenChange: k,
      triggerPointerDownPosRef: F
    } = v;
    d.useEffect(() => {
      if (y) {
        let ie = {
          x: 0,
          y: 0
        };
        const xe = we => {
            var Ce, be;
            ie = {
              x: Math.abs(Math.round(we.pageX) - (((Ce = F.current) == null ? void 0 : Ce.x) ? ? 0)),
              y: Math.abs(Math.round(we.pageY) - (((be = F.current) == null ? void 0 : be.y) ? ? 0))
            }
          },
          Oe = we => {
            ie.x <= 10 && ie.y <= 10 ? we.preventDefault() : y.contains(we.target) || k(!1), document.removeEventListener("pointermove", xe), F.current = null
          };
        return F.current !== null && (document.addEventListener("pointermove", xe), document.addEventListener("pointerup", Oe, {
          capture: !0,
          once: !0
        })), () => {
          document.removeEventListener("pointermove", xe), document.removeEventListener("pointerup", Oe, {
            capture: !0
          })
        }
      }
    }, [y, k, F]), d.useEffect(() => {
      const ie = () => k(!1);
      return window.addEventListener("blur", ie), window.addEventListener("resize", ie), () => {
        window.removeEventListener("blur", ie), window.removeEventListener("resize", ie)
      }
    }, [k]);
    const [K, Z] = kS(ie => {
      const xe = R().filter(Ce => !Ce.disabled),
        Oe = xe.find(Ce => Ce.ref.current === document.activeElement),
        we = TS(xe, ie, Oe);
      we && setTimeout(() => we.ref.current.focus())
    }), re = d.useCallback((ie, xe, Oe) => {
      const we = !G.current && !Oe;
      (v.value !== void 0 && v.value === xe || we) && (P(ie), we && (G.current = !0))
    }, [v.value]), de = d.useCallback(() => y == null ? void 0 : y.focus(), [y]), Ee = d.useCallback((ie, xe, Oe) => {
      const we = !G.current && !Oe;
      (v.value !== void 0 && v.value === xe || we) && z(ie)
    }, [v.value]), nt = r === "popper" ? up : fS, ge = nt === up ? {
      side: a,
      sideOffset: c,
      align: u,
      alignOffset: f,
      arrowPadding: p,
      collisionBoundary: h,
      collisionPadding: w,
      sticky: x,
      hideWhenDetached: m,
      avoidCollisions: b
    } : {};
    return l.jsx(uS, {
      scope: n,
      content: y,
      viewport: E,
      onViewportChange: _,
      itemRefCallback: re,
      selectedItem: j,
      onItemLeave: de,
      itemTextRefCallback: Ee,
      focusSelectedItem: te,
      selectedItemText: O,
      position: r,
      isPositioned: D,
      searchRef: K,
      children: l.jsx(tS, {
        as: gr,
        allowPinchZoom: !0,
        children: l.jsx(Eu, {
          asChild: !0,
          trapped: v.open,
          onMountAutoFocus: ie => {
            ie.preventDefault()
          },
          onUnmountAutoFocus: q(s, ie => {
            var xe;
            (xe = v.trigger) == null || xe.focus({
              preventScroll: !0
            }), ie.preventDefault()
          }),
          children: l.jsx(Kb, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: o,
            onPointerDownOutside: i,
            onFocusOutside: ie => ie.preventDefault(),
            onDismiss: () => v.onOpenChange(!1),
            children: l.jsx(nt, {
              role: "listbox",
              id: v.contentId,
              "data-state": v.open ? "open" : "closed",
              dir: v.dir,
              onContextMenu: ie => ie.preventDefault(),
              ...g,
              ...ge,
              onPlaced: () => I(!0),
              ref: C,
              style: {
                display: "flex",
                flexDirection: "column",
                outline: "none",
                ...g.style
              },
              onKeyDown: q(g.onKeyDown, ie => {
                const xe = ie.ctrlKey || ie.altKey || ie.metaKey;
                if (ie.key === "Tab" && ie.preventDefault(), !xe && ie.key.length === 1 && Z(ie.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(ie.key)) {
                  let we = R().filter(Ce => !Ce.disabled).map(Ce => Ce.ref.current);
                  if (["ArrowUp", "End"].includes(ie.key) && (we = we.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(ie.key)) {
                    const Ce = ie.target,
                      be = we.indexOf(Ce);
                    we = we.slice(be + 1)
                  }
                  setTimeout(() => W(we)), ie.preventDefault()
                }
              })
            })
          })
        })
      })
    })
  });
dS.displayName = jD;
var kD = "SelectItemAlignedPosition",
  fS = d.forwardRef((e, t) => {
    const {
      __scopeSelect: n,
      onPlaced: r,
      ...s
    } = e, o = Ss(Zs, n), i = Es(Zs, n), [a, c] = d.useState(null), [u, f] = d.useState(null), p = ue(t, C => f(C)), h = Hu(n), w = d.useRef(!1), x = d.useRef(!0), {
      viewport: m,
      selectedItem: b,
      selectedItemText: g,
      focusSelectedItem: v
    } = i, y = d.useCallback(() => {
      if (o.trigger && o.valueNode && a && u && m && b && g) {
        const C = o.trigger.getBoundingClientRect(),
          j = u.getBoundingClientRect(),
          P = o.valueNode.getBoundingClientRect(),
          O = g.getBoundingClientRect();
        if (o.dir !== "rtl") {
          const Ce = O.left - j.left,
            be = P.left - Ce,
            dt = C.left - be,
            xt = C.width + dt,
            tr = Math.max(xt, j.width),
            Wt = window.innerWidth - ar,
            _r = Fg(be, [ar, Wt - tr]);
          a.style.minWidth = xt + "px", a.style.left = _r + "px"
        } else {
          const Ce = j.right - O.right,
            be = window.innerWidth - P.right - Ce,
            dt = window.innerWidth - C.right - be,
            xt = C.width + dt,
            tr = Math.max(xt, j.width),
            Wt = window.innerWidth - ar,
            _r = Fg(be, [ar, Wt - tr]);
          a.style.minWidth = xt + "px", a.style.right = _r + "px"
        }
        const z = h(),
          R = window.innerHeight - ar * 2,
          D = m.scrollHeight,
          I = window.getComputedStyle(u),
          G = parseInt(I.borderTopWidth, 10),
          W = parseInt(I.paddingTop, 10),
          te = parseInt(I.borderBottomWidth, 10),
          k = parseInt(I.paddingBottom, 10),
          F = G + W + D + k + te,
          K = Math.min(b.offsetHeight * 5, F),
          Z = window.getComputedStyle(m),
          re = parseInt(Z.paddingTop, 10),
          de = parseInt(Z.paddingBottom, 10),
          Ee = C.top + C.height / 2 - ar,
          nt = R - Ee,
          ge = b.offsetHeight / 2,
          ie = b.offsetTop + ge,
          xe = G + W + ie,
          Oe = F - xe;
        if (xe <= Ee) {
          const Ce = b === z[z.length - 1].ref.current;
          a.style.bottom = "0px";
          const be = u.clientHeight - m.offsetTop - m.offsetHeight,
            dt = Math.max(nt, ge + (Ce ? de : 0) + be + te),
            xt = xe + dt;
          a.style.height = xt + "px"
        } else {
          const Ce = b === z[0].ref.current;
          a.style.top = "0px";
          const dt = Math.max(Ee, G + m.offsetTop + (Ce ? re : 0) + ge) + Oe;
          a.style.height = dt + "px", m.scrollTop = xe - Ee + m.offsetTop
        }
        a.style.margin = `${ar}px 0`, a.style.minHeight = K + "px", a.style.maxHeight = R + "px", r == null || r(), requestAnimationFrame(() => w.current = !0)
      }
    }, [h, o.trigger, o.valueNode, a, u, m, b, g, o.dir, r]);
    We(() => y(), [y]);
    const [S, E] = d.useState();
    We(() => {
      u && E(window.getComputedStyle(u).zIndex)
    }, [u]);
    const _ = d.useCallback(C => {
      C && x.current === !0 && (y(), v == null || v(), x.current = !1)
    }, [y, v]);
    return l.jsx(PD, {
      scope: n,
      contentWrapper: a,
      shouldExpandOnScrollRef: w,
      onScrollButtonChange: _,
      children: l.jsx("div", {
        ref: c,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: S
        },
        children: l.jsx(ne.div, {
          ...s,
          ref: p,
          style: {
            boxSizing: "border-box",
            maxHeight: "100%",
            ...s.style
          }
        })
      })
    })
  });
fS.displayName = kD;
var TD = "SelectPopperPosition",
  up = d.forwardRef((e, t) => {
    const {
      __scopeSelect: n,
      align: r = "start",
      collisionPadding: s = ar,
      ...o
    } = e, i = Zu(n);
    return l.jsx(jw, {
      ...i,
      ...o,
      ref: t,
      align: r,
      collisionPadding: s,
      style: {
        boxSizing: "border-box",
        ...o.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    })
  });
up.displayName = TD;
var [PD, um] = xi(Zs, {}), dp = "SelectViewport", pS = d.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    nonce: r,
    ...s
  } = e, o = Es(dp, n), i = um(dp, n), a = ue(t, o.onViewportChange), c = d.useRef(0);
  return l.jsxs(l.Fragment, {
    children: [l.jsx("style", {
      dangerouslySetInnerHTML: {
        __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
      },
      nonce: r
    }), l.jsx(Wu.Slot, {
      scope: n,
      children: l.jsx(ne.div, {
        "data-radix-select-viewport": "",
        role: "presentation",
        ...s,
        ref: a,
        style: {
          position: "relative",
          flex: 1,
          overflow: "auto",
          ...s.style
        },
        onScroll: q(s.onScroll, u => {
          const f = u.currentTarget,
            {
              contentWrapper: p,
              shouldExpandOnScrollRef: h
            } = i;
          if (h != null && h.current && p) {
            const w = Math.abs(c.current - f.scrollTop);
            if (w > 0) {
              const x = window.innerHeight - ar * 2,
                m = parseFloat(p.style.minHeight),
                b = parseFloat(p.style.height),
                g = Math.max(m, b);
              if (g < x) {
                const v = g + w,
                  y = Math.min(x, v),
                  S = v - y;
                p.style.height = y + "px", p.style.bottom === "0px" && (f.scrollTop = S > 0 ? S : 0, p.style.justifyContent = "flex-end")
              }
            }
          }
          c.current = f.scrollTop
        })
      })
    })]
  })
});
pS.displayName = dp;
var hS = "SelectGroup",
  [RD, AD] = xi(hS),
  OD = d.forwardRef((e, t) => {
    const {
      __scopeSelect: n,
      ...r
    } = e, s = _n();
    return l.jsx(RD, {
      scope: n,
      id: s,
      children: l.jsx(ne.div, {
        role: "group",
        "aria-labelledby": s,
        ...r,
        ref: t
      })
    })
  });
OD.displayName = hS;
var mS = "SelectLabel",
  vS = d.forwardRef((e, t) => {
    const {
      __scopeSelect: n,
      ...r
    } = e, s = AD(mS, n);
    return l.jsx(ne.div, {
      id: s.id,
      ...r,
      ref: t
    })
  });
vS.displayName = mS;
var Uc = "SelectItem",
  [DD, gS] = xi(Uc),
  yS = d.forwardRef((e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: s = !1,
      textValue: o,
      ...i
    } = e, a = Ss(Uc, n), c = Es(Uc, n), u = a.value === r, [f, p] = d.useState(o ? ? ""), [h, w] = d.useState(!1), x = ue(t, g => {
      var v;
      return (v = c.itemRefCallback) == null ? void 0 : v.call(c, g, r, s)
    }), m = _n(), b = () => {
      s || (a.onValueChange(r), a.onOpenChange(!1))
    };
    if (r === "") throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
    return l.jsx(DD, {
      scope: n,
      value: r,
      disabled: s,
      textId: m,
      isSelected: u,
      onItemTextChange: d.useCallback(g => {
        p(v => v || ((g == null ? void 0 : g.textContent) ? ? "").trim())
      }, []),
      children: l.jsx(Wu.ItemSlot, {
        scope: n,
        value: r,
        disabled: s,
        textValue: f,
        children: l.jsx(ne.div, {
          role: "option",
          "aria-labelledby": m,
          "data-highlighted": h ? "" : void 0,
          "aria-selected": u && h,
          "data-state": u ? "checked" : "unchecked",
          "aria-disabled": s || void 0,
          "data-disabled": s ? "" : void 0,
          tabIndex: s ? void 0 : -1,
          ...i,
          ref: x,
          onFocus: q(i.onFocus, () => w(!0)),
          onBlur: q(i.onBlur, () => w(!1)),
          onPointerUp: q(i.onPointerUp, b),
          onPointerMove: q(i.onPointerMove, g => {
            var v;
            s ? (v = c.onItemLeave) == null || v.call(c) : g.currentTarget.focus({
              preventScroll: !0
            })
          }),
          onPointerLeave: q(i.onPointerLeave, g => {
            var v;
            g.currentTarget === document.activeElement && ((v = c.onItemLeave) == null || v.call(c))
          }),
          onKeyDown: q(i.onKeyDown, g => {
            var y;
            ((y = c.searchRef) == null ? void 0 : y.current) !== "" && g.key === " " || (wD.includes(g.key) && b(), g.key === " " && g.preventDefault())
          })
        })
      })
    })
  });
yS.displayName = Uc;
var $i = "SelectItemText",
  xS = d.forwardRef((e, t) => {
    const {
      __scopeSelect: n,
      className: r,
      style: s,
      ...o
    } = e, i = Ss($i, n), a = Es($i, n), c = gS($i, n), u = CD($i, n), [f, p] = d.useState(null), h = ue(t, g => p(g), c.onItemTextChange, g => {
      var v;
      return (v = a.itemTextRefCallback) == null ? void 0 : v.call(a, g, c.value, c.disabled)
    }), w = f == null ? void 0 : f.textContent, x = d.useMemo(() => l.jsx("option", {
      value: c.value,
      disabled: c.disabled,
      children: w
    }, c.value), [c.disabled, c.value, w]), {
      onNativeOptionAdd: m,
      onNativeOptionRemove: b
    } = u;
    return We(() => (m(x), () => b(x)), [m, b, x]), l.jsxs(l.Fragment, {
      children: [l.jsx(ne.span, {
        id: c.textId,
        ...o,
        ref: h
      }), c.isSelected && i.valueNode && !i.valueNodeHasChildren ? xs.createPortal(o.children, i.valueNode) : null]
    })
  });
xS.displayName = $i;
var wS = "SelectItemIndicator",
  bS = d.forwardRef((e, t) => {
    const {
      __scopeSelect: n,
      ...r
    } = e;
    return gS(wS, n).isSelected ? l.jsx(ne.span, {
      "aria-hidden": !0,
      ...r,
      ref: t
    }) : null
  });
bS.displayName = wS;
var fp = "SelectScrollUpButton",
  SS = d.forwardRef((e, t) => {
    const n = Es(fp, e.__scopeSelect),
      r = um(fp, e.__scopeSelect),
      [s, o] = d.useState(!1),
      i = ue(t, r.onScrollButtonChange);
    return We(() => {
      if (n.viewport && n.isPositioned) {
        let a = function () {
          const u = c.scrollTop > 0;
          o(u)
        };
        const c = n.viewport;
        return a(), c.addEventListener("scroll", a), () => c.removeEventListener("scroll", a)
      }
    }, [n.viewport, n.isPositioned]), s ? l.jsx(CS, {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const {
          viewport: a,
          selectedItem: c
        } = n;
        a && c && (a.scrollTop = a.scrollTop - c.offsetHeight)
      }
    }) : null
  });
SS.displayName = fp;
var pp = "SelectScrollDownButton",
  ES = d.forwardRef((e, t) => {
    const n = Es(pp, e.__scopeSelect),
      r = um(pp, e.__scopeSelect),
      [s, o] = d.useState(!1),
      i = ue(t, r.onScrollButtonChange);
    return We(() => {
      if (n.viewport && n.isPositioned) {
        let a = function () {
          const u = c.scrollHeight - c.clientHeight,
            f = Math.ceil(c.scrollTop) < u;
          o(f)
        };
        const c = n.viewport;
        return a(), c.addEventListener("scroll", a), () => c.removeEventListener("scroll", a)
      }
    }, [n.viewport, n.isPositioned]), s ? l.jsx(CS, {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const {
          viewport: a,
          selectedItem: c
        } = n;
        a && c && (a.scrollTop = a.scrollTop + c.offsetHeight)
      }
    }) : null
  });
ES.displayName = pp;
var CS = d.forwardRef((e, t) => {
    const {
      __scopeSelect: n,
      onAutoScroll: r,
      ...s
    } = e, o = Es("SelectScrollButton", n), i = d.useRef(null), a = Hu(n), c = d.useCallback(() => {
      i.current !== null && (window.clearInterval(i.current), i.current = null)
    }, []);
    return d.useEffect(() => () => c(), [c]), We(() => {
      var f;
      const u = a().find(p => p.ref.current === document.activeElement);
      (f = u == null ? void 0 : u.ref.current) == null || f.scrollIntoView({
        block: "nearest"
      })
    }, [a]), l.jsx(ne.div, {
      "aria-hidden": !0,
      ...s,
      ref: t,
      style: {
        flexShrink: 0,
        ...s.style
      },
      onPointerDown: q(s.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(r, 50))
      }),
      onPointerMove: q(s.onPointerMove, () => {
        var u;
        (u = o.onItemLeave) == null || u.call(o), i.current === null && (i.current = window.setInterval(r, 50))
      }),
      onPointerLeave: q(s.onPointerLeave, () => {
        c()
      })
    })
  }),
  ID = "SelectSeparator",
  NS = d.forwardRef((e, t) => {
    const {
      __scopeSelect: n,
      ...r
    } = e;
    return l.jsx(ne.div, {
      "aria-hidden": !0,
      ...r,
      ref: t
    })
  });
NS.displayName = ID;
var hp = "SelectArrow",
  MD = d.forwardRef((e, t) => {
    const {
      __scopeSelect: n,
      ...r
    } = e, s = Zu(n), o = Ss(hp, n), i = Es(hp, n);
    return o.open && i.position === "popper" ? l.jsx(kw, {
      ...s,
      ...r,
      ref: t
    }) : null
  });
MD.displayName = hp;

function _S(e) {
  return e === "" || e === void 0
}
var jS = d.forwardRef((e, t) => {
  const {
    value: n,
    ...r
  } = e, s = d.useRef(null), o = ue(t, s), i = lm(n);
  return d.useEffect(() => {
    const a = s.current,
      c = window.HTMLSelectElement.prototype,
      f = Object.getOwnPropertyDescriptor(c, "value").set;
    if (i !== n && f) {
      const p = new Event("change", {
        bubbles: !0
      });
      f.call(a, n), a.dispatchEvent(p)
    }
  }, [i, n]), l.jsx(Ka, {
    asChild: !0,
    children: l.jsx("select", {
      ...r,
      ref: o,
      defaultValue: n
    })
  })
});
jS.displayName = "BubbleSelect";

function kS(e) {
  const t = it(e),
    n = d.useRef(""),
    r = d.useRef(0),
    s = d.useCallback(i => {
      const a = n.current + i;
      t(a),
        function c(u) {
          n.current = u, window.clearTimeout(r.current), u !== "" && (r.current = window.setTimeout(() => c(""), 1e3))
        }(a)
    }, [t]),
    o = d.useCallback(() => {
      n.current = "", window.clearTimeout(r.current)
    }, []);
  return d.useEffect(() => () => window.clearTimeout(r.current), []), [n, s, o]
}

function TS(e, t, n) {
  const s = t.length > 1 && Array.from(t).every(u => u === t[0]) ? t[0] : t,
    o = n ? e.indexOf(n) : -1;
  let i = LD(e, Math.max(o, 0));
  s.length === 1 && (i = i.filter(u => u !== n));
  const c = i.find(u => u.textValue.toLowerCase().startsWith(s.toLowerCase()));
  return c !== n ? c : void 0
}

function LD(e, t) {
  return e.map((n, r) => e[(t + r) % e.length])
}
var FD = nS,
  PS = sS,
  $D = iS,
  VD = aS,
  zD = lS,
  RS = cS,
  BD = pS,
  AS = vS,
  OS = yS,
  UD = xS,
  WD = bS,
  DS = SS,
  IS = ES,
  MS = NS;
const LS = FD,
  FS = $D,
  dm = d.forwardRef(({
    className: e,
    children: t,
    ...n
  }, r) => l.jsxs(PS, {
    ref: r,
    className: ee("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", e),
    ...n,
    children: [t, l.jsx(VD, {
      asChild: !0,
      children: l.jsx(Y0, {
        className: "h-4 w-4 opacity-50"
      })
    })]
  }));
dm.displayName = PS.displayName;
const $S = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx(DS, {
  ref: n,
  className: ee("flex cursor-default items-center justify-center py-1", e),
  ...t,
  children: l.jsx(wj, {
    className: "h-4 w-4"
  })
}));
$S.displayName = DS.displayName;
const VS = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx(IS, {
  ref: n,
  className: ee("flex cursor-default items-center justify-center py-1", e),
  ...t,
  children: l.jsx(Y0, {
    className: "h-4 w-4"
  })
}));
VS.displayName = IS.displayName;
const fm = d.forwardRef(({
  className: e,
  children: t,
  position: n = "popper",
  ...r
}, s) => l.jsx(zD, {
  children: l.jsxs(RS, {
    ref: s,
    className: ee("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
    position: n,
    ...r,
    children: [l.jsx($S, {}), l.jsx(BD, {
      className: ee("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
      children: t
    }), l.jsx(VS, {})]
  })
}));
fm.displayName = RS.displayName;
const HD = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx(AS, {
  ref: n,
  className: ee("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
  ...t
}));
HD.displayName = AS.displayName;
const jo = d.forwardRef(({
  className: e,
  children: t,
  ...n
}, r) => l.jsxs(OS, {
  ref: r,
  className: ee("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
  ...n,
  children: [l.jsx("span", {
    className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
    children: l.jsx(WD, {
      children: l.jsx(K0, {
        className: "h-4 w-4"
      })
    })
  }), l.jsx(UD, {
    children: t
  })]
}));
jo.displayName = OS.displayName;
const ZD = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx(MS, {
  ref: n,
  className: ee("-mx-1 my-1 h-px bg-muted", e),
  ...t
}));
ZD.displayName = MS.displayName;
var pm = "Radio",
  [GD, zS] = An(pm),
  [KD, YD] = GD(pm),
  BS = d.forwardRef((e, t) => {
    const {
      __scopeRadio: n,
      name: r,
      checked: s = !1,
      required: o,
      disabled: i,
      value: a = "on",
      onCheck: c,
      ...u
    } = e, [f, p] = d.useState(null), h = ue(t, m => p(m)), w = d.useRef(!1), x = f ? !!f.closest("form") : !0;
    return l.jsxs(KD, {
      scope: n,
      checked: s,
      disabled: i,
      children: [l.jsx(ne.button, {
        type: "button",
        role: "radio",
        "aria-checked": s,
        "data-state": HS(s),
        "data-disabled": i ? "" : void 0,
        disabled: i,
        value: a,
        ...u,
        ref: h,
        onClick: q(e.onClick, m => {
          s || c == null || c(), x && (w.current = m.isPropagationStopped(), w.current || m.stopPropagation())
        })
      }), x && l.jsx(QD, {
        control: f,
        bubbles: !w.current,
        name: r,
        value: a,
        checked: s,
        required: o,
        disabled: i,
        style: {
          transform: "translateX(-100%)"
        }
      })]
    })
  });
BS.displayName = pm;
var US = "RadioIndicator",
  WS = d.forwardRef((e, t) => {
    const {
      __scopeRadio: n,
      forceMount: r,
      ...s
    } = e, o = YD(US, n);
    return l.jsx(ws, {
      present: r || o.checked,
      children: l.jsx(ne.span, {
        "data-state": HS(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...s,
        ref: t
      })
    })
  });
WS.displayName = US;
var QD = e => {
  const {
    control: t,
    checked: n,
    bubbles: r = !0,
    ...s
  } = e, o = d.useRef(null), i = lm(n), a = Nh(t);
  return d.useEffect(() => {
    const c = o.current,
      u = window.HTMLInputElement.prototype,
      p = Object.getOwnPropertyDescriptor(u, "checked").set;
    if (i !== n && p) {
      const h = new Event("click", {
        bubbles: r
      });
      p.call(c, n), c.dispatchEvent(h)
    }
  }, [i, n, r]), l.jsx("input", {
    type: "radio",
    "aria-hidden": !0,
    defaultChecked: n,
    ...s,
    tabIndex: -1,
    ref: o,
    style: {
      ...e.style,
      ...a,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  })
};

function HS(e) {
  return e ? "checked" : "unchecked"
}
var XD = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
  hm = "RadioGroup",
  [qD, NM] = An(hm, [Iu, zS]),
  ZS = Iu(),
  GS = zS(),
  [JD, eI] = qD(hm),
  KS = d.forwardRef((e, t) => {
    const {
      __scopeRadioGroup: n,
      name: r,
      defaultValue: s,
      value: o,
      required: i = !1,
      disabled: a = !1,
      orientation: c,
      dir: u,
      loop: f = !0,
      onValueChange: p,
      ...h
    } = e, w = ZS(n), x = Ou(u), [m, b] = yr({
      prop: o,
      defaultProp: s,
      onChange: p
    });
    return l.jsx(JD, {
      scope: n,
      name: r,
      required: i,
      disabled: a,
      value: m,
      onValueChange: b,
      children: l.jsx(W1, {
        asChild: !0,
        ...w,
        orientation: c,
        dir: x,
        loop: f,
        children: l.jsx(ne.div, {
          role: "radiogroup",
          "aria-required": i,
          "aria-orientation": c,
          "data-disabled": a ? "" : void 0,
          dir: x,
          ...h,
          ref: t
        })
      })
    })
  });
KS.displayName = hm;
var YS = "RadioGroupItem",
  QS = d.forwardRef((e, t) => {
    const {
      __scopeRadioGroup: n,
      disabled: r,
      ...s
    } = e, o = eI(YS, n), i = o.disabled || r, a = ZS(n), c = GS(n), u = d.useRef(null), f = ue(t, u), p = o.value === s.value, h = d.useRef(!1);
    return d.useEffect(() => {
      const w = m => {
          XD.includes(m.key) && (h.current = !0)
        },
        x = () => h.current = !1;
      return document.addEventListener("keydown", w), document.addEventListener("keyup", x), () => {
        document.removeEventListener("keydown", w), document.removeEventListener("keyup", x)
      }
    }, []), l.jsx(H1, {
      asChild: !0,
      ...a,
      focusable: !i,
      active: p,
      children: l.jsx(BS, {
        disabled: i,
        required: o.required,
        checked: p,
        ...c,
        ...s,
        name: o.name,
        ref: f,
        onCheck: () => o.onValueChange(s.value),
        onKeyDown: q(w => {
          w.key === "Enter" && w.preventDefault()
        }),
        onFocus: q(s.onFocus, () => {
          var w;
          h.current && ((w = u.current) == null || w.click())
        })
      })
    })
  });
QS.displayName = YS;
var tI = "RadioGroupIndicator",
  XS = d.forwardRef((e, t) => {
    const {
      __scopeRadioGroup: n,
      ...r
    } = e, s = GS(n);
    return l.jsx(WS, {
      ...s,
      ...r,
      ref: t
    })
  });
XS.displayName = tI;
var qS = KS,
  JS = QS,
  nI = XS;
const Wc = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx(qS, {
  className: ee("grid gap-2", e),
  ...t,
  ref: n
}));
Wc.displayName = qS.displayName;
const Hc = d.forwardRef(({
  className: e,
  children: t,
  ...n
}, r) => l.jsx(JS, {
  ref: r,
  className: ee("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", e),
  ...n,
  children: l.jsx(nI, {
    className: "flex items-center justify-center",
    children: l.jsx("div", {
      className: "h-2 w-2 rounded-full bg-primary"
    })
  })
}));
Hc.displayName = JS.displayName;
const rI = Fu({
    title: ms().min(2, {
      message: "題目標題至少需要2個字符"
    }),
    type: vb(["single", "multiple", "truefalse", "openended"]),
    optionCount: nm.number().min(2, {
      message: "至少需要2個選項"
    }).optional(),
    optionsAreImages: Lu().default(!1),
    explanation: ms().optional()
  }),
  sI = ({
    isOpen: e,
    onClose: t,
    onSave: n,
    initialQuestion: r
  }) => {
    const [s, o] = d.useState([]), [i, a] = d.useState([]), [c, u] = d.useState(!1), f = li({
      resolver: La(rI),
      defaultValues: {
        title: "",
        type: "single",
        optionCount: 2,
        optionsAreImages: !1,
        explanation: ""
      }
    });
    d.useEffect(() => {
      r ? (f.reset({
        title: r.title,
        type: r.type,
        optionCount: r.type === "openended" ? void 0 : r.options.length,
        optionsAreImages: r.options.length > 0 ? r.options[0].isImage : !1,
        explanation: r.explanation
      }), o(r.options), a(r.correctAnswers), r.type !== "openended" && u(!0)) : (f.reset({
        title: "",
        type: "single",
        optionCount: 2,
        optionsAreImages: !1,
        explanation: ""
      }), o([]), a([]), u(!1))
    }, [r, e, f]);
    const p = f.watch("type"),
      h = f.watch("optionCount"),
      w = f.watch("optionsAreImages");
    d.useEffect(() => {
      if (p === "truefalse") {
        f.setValue("optionCount", 2);
        const y = [{
          id: Vn(),
          text: "是",
          isImage: !1
        }, {
          id: Vn(),
          text: "否",
          isImage: !1
        }];
        o(y)
      } else if (p === "openended") o([]);
      else if (c) {
        const y = h || 2;
        if (y !== s.length) {
          const S = Array(y).fill(0).map((E, _) => _ < s.length ? s[_] : {
            id: Vn(),
            text: `選項 ${_+1}`,
            isImage: w
          });
          o(S), a([])
        }
      }
    }, [p, h, w, c, s.length, f]);
    const x = y => {
        if (y.type === "openended") {
          u(!0);
          return
        }
        if (y.type === "truefalse") {
          f.setValue("optionCount", 2);
          const _ = [{
            id: Vn(),
            text: "是",
            isImage: !1
          }, {
            id: Vn(),
            text: "否",
            isImage: !1
          }];
          o(_), u(!0);
          return
        }
        const S = y.optionCount || 2,
          E = Array(S).fill(0).map((_, C) => ({
            id: Vn(),
            text: `選項 ${C+1}`,
            isImage: y.optionsAreImages
          }));
        o(E), u(!0)
      },
      m = (y, S) => {
        o(s.map(E => E.id === y ? {
          ...E,
          text: S
        } : E))
      },
      b = y => {
        p === "single" ? a([y]) : i.includes(y) ? a(i.filter(S => S !== y)) : a([...i, y])
      },
      g = () => {
        const S = {
          id: (r == null ? void 0 : r.id) || Vn(),
          title: f.getValues("title"),
          type: f.getValues("type"),
          options: p === "openended" ? [] : s,
          correctAnswers: p === "openended" ? [] : i,
          explanation: f.getValues("explanation") || ""
        };
        n(S), v()
      },
      v = () => {
        f.reset({
          title: "",
          type: "single",
          optionCount: 2,
          optionsAreImages: !1,
          explanation: ""
        }), o([]), a([]), u(!1), t()
      };
    return l.jsx(GO, {
      open: e,
      onOpenChange: t,
      children: l.jsxs(Wb, {
        className: "sm:max-w-[500px] overflow-y-auto",
        children: [l.jsx(Hb, {
          children: l.jsx(Zb, {
            children: r ? "編輯題目" : "新增題目"
          })
        }), l.jsx(ci, {
          ...f,
          children: l.jsx("form", {
            className: "space-y-6 py-6",
            children: c ? l.jsxs(l.Fragment, {
              children: [l.jsxs("div", {
                className: "font-medium mb-4",
                children: [l.jsxs("div", {
                  children: ["題目: ", f.getValues("title")]
                }), l.jsxs("div", {
                  className: "text-sm text-gray-500 mt-1",
                  children: ["題型: ", p === "single" ? "單選題" : p === "multiple" ? "多選題" : p === "truefalse" ? "是非題" : "問答題"]
                })]
              }), p === "openended" ? l.jsx("div", {
                className: "bg-gray-50 p-4 rounded-md",
                children: l.jsx("p", {
                  className: "text-sm text-gray-500",
                  children: "問答題無需設定選項，受試者可以自由填寫答案。"
                })
              }) : l.jsxs("div", {
                className: "space-y-4",
                children: [l.jsx("div", {
                  className: "font-medium",
                  children: "選項設定"
                }), s.map((y, S) => l.jsxs("div", {
                  className: "flex items-start space-x-3",
                  children: [p === "single" ? l.jsx(Wc, {
                    value: i[0],
                    onValueChange: E => a([E]),
                    className: "mt-1",
                    children: l.jsx(Hc, {
                      value: y.id
                    })
                  }) : l.jsx(ui, {
                    checked: i.includes(y.id),
                    onCheckedChange: () => b(y.id),
                    className: "mt-1"
                  }), l.jsxs("div", {
                    className: "flex-1",
                    children: [l.jsx(rt, {
                      value: y.text,
                      onChange: E => m(y.id, E.target.value),
                      placeholder: `選項 ${S+1}`
                    }), y.isImage && l.jsx("div", {
                      className: "mt-2 text-xs text-gray-500",
                      children: "此處應有圖片上傳功能（模擬）"
                    })]
                  })]
                }, y.id)), l.jsx("p", {
                  className: "text-sm text-gray-500 mt-2",
                  children: p === "single" ? "請選擇正確答案（單選）" : "請選擇正確答案（可複選）"
                })]
              }), l.jsx(qe, {
                control: f.control,
                name: "explanation",
                render: ({
                  field: y
                }) => l.jsxs(Ye, {
                  children: [l.jsx(Je, {
                    children: "解析說明"
                  }), l.jsx(et, {
                    children: l.jsx(Bu, {
                      placeholder: "請輸入此題的解析說明，幫助學生理解答案",
                      className: "min-h-[100px]",
                      ...y
                    })
                  }), l.jsx(tt, {})]
                })
              }), l.jsxs("div", {
                className: "flex justify-between pt-4",
                children: [l.jsx(me, {
                  type: "button",
                  variant: "outline",
                  onClick: () => p !== "openended" && p !== "truefalse" ? u(!1) : v(),
                  children: p !== "openended" && p !== "truefalse" ? "返回" : "取消"
                }), l.jsxs("div", {
                  className: "space-x-2",
                  children: [p !== "openended" && i.length === 0 && l.jsx("p", {
                    className: "text-red-500 text-sm",
                    children: "請選擇至少一個正確答案"
                  }), l.jsx(me, {
                    type: "button",
                    onClick: g,
                    disabled: p !== "openended" && i.length === 0,
                    children: "儲存題目"
                  })]
                })]
              })]
            }) : l.jsxs(l.Fragment, {
              children: [l.jsx(qe, {
                control: f.control,
                name: "title",
                render: ({
                  field: y
                }) => l.jsxs(Ye, {
                  children: [l.jsx(Je, {
                    children: "題目標題"
                  }), l.jsx(et, {
                    children: l.jsx(rt, {
                      placeholder: "請輸入題目標題",
                      ...y
                    })
                  }), l.jsx(tt, {})]
                })
              }), l.jsx(qe, {
                control: f.control,
                name: "type",
                render: ({
                  field: y
                }) => l.jsxs(Ye, {
                  children: [l.jsx(Je, {
                    children: "題目類型"
                  }), l.jsxs(LS, {
                    onValueChange: y.onChange,
                    defaultValue: y.value,
                    children: [l.jsx(et, {
                      children: l.jsx(dm, {
                        children: l.jsx(FS, {
                          placeholder: "選擇題型"
                        })
                      })
                    }), l.jsxs(fm, {
                      children: [l.jsx(jo, {
                        value: "single",
                        children: "單一選擇題"
                      }), l.jsx(jo, {
                        value: "multiple",
                        children: "多選選擇題"
                      }), l.jsx(jo, {
                        value: "truefalse",
                        children: "是非題"
                      }), l.jsx(jo, {
                        value: "openended",
                        children: "問答題"
                      })]
                    })]
                  }), l.jsx(tt, {})]
                })
              }), p !== "openended" && p !== "truefalse" && l.jsxs(l.Fragment, {
                children: [l.jsx(qe, {
                  control: f.control,
                  name: "optionCount",
                  render: ({
                    field: y
                  }) => l.jsxs(Ye, {
                    children: [l.jsx(Je, {
                      children: "選項數量"
                    }), l.jsx(et, {
                      children: l.jsx(rt, {
                        type: "number",
                        min: "2",
                        max: "10",
                        ...y
                      })
                    }), l.jsx(tt, {})]
                  })
                }), l.jsx(qe, {
                  control: f.control,
                  name: "optionsAreImages",
                  render: ({
                    field: y
                  }) => l.jsxs(Ye, {
                    className: "flex flex-row items-center space-x-3 space-y-0",
                    children: [l.jsx(et, {
                      children: l.jsx(ui, {
                        checked: y.value,
                        onCheckedChange: y.onChange
                      })
                    }), l.jsx(Je, {
                      className: "font-normal cursor-pointer",
                      children: "選項為圖片"
                    }), l.jsx(tt, {})]
                  })
                })]
              }), l.jsxs("div", {
                className: "flex justify-between pt-4",
                children: [l.jsx(me, {
                  type: "button",
                  variant: "outline",
                  onClick: v,
                  children: "取消"
                }), l.jsx(me, {
                  type: "button",
                  onClick: f.handleSubmit(x),
                  children: "下一步"
                })]
              })]
            })
          })
        })]
      })
    })
  },
  oI = Fu({
    title: ms().min(2, {
      message: "標題至少需要2個字符"
    }),
    duration: nm.number().min(1, {
      message: "測試時間至少為1分鐘"
    }),
    target: ms().array().min(1, {
      message: "至少選擇一個適合對象"
    }),
    isEnabled: Lu().default(!1)
  }),
  iI = [{
    label: "幼兒",
    value: "幼兒"
  }, {
    label: "國小",
    value: "國小"
  }, {
    label: "國中",
    value: "國中"
  }, {
    label: "高中",
    value: "高中"
  }, {
    label: "成人",
    value: "成人"
  }, {
    label: "高齡者",
    value: "高齡者"
  }, {
    label: "特殊生",
    value: "特殊生"
  }],
  aI = () => {
    const [e, t] = d.useState([]), [n, r] = d.useState(!1), [s, o] = d.useState(null), i = hn(), a = qs();
    d.useEffect(() => {
      a || (je({
        title: "請先登入",
        description: "您需要登入後才能建立學習單",
        variant: "destructive"
      }), i("/auth"))
    }, [a, i]);
    const c = li({
        resolver: La(oI),
        defaultValues: {
          title: "",
          duration: 15,
          target: [],
          isEnabled: !1
        }
      }),
      u = () => {
        o(null), r(!0)
      },
      f = x => {
        o(x), r(!0)
      },
      p = x => {
        t(e.filter(m => m.id !== x)), je({
          title: "題目已刪除",
          description: "題目已成功從學習單中移除"
        })
      },
      h = x => {
        s ? (t(e.map(m => m.id === x.id ? x : m)), je({
          title: "題目已更新",
          description: "題目資訊已成功更新"
        })) : (t([...e, x]), je({
          title: "題目已新增",
          description: "題目已成功新增至學習單"
        })), r(!1)
      },
      w = x => {
        if (e.length === 0) {
          je({
            title: "無法建立學習單",
            description: "請至少添加一個題目",
            variant: "destructive"
          });
          return
        }
        try {
          const m = {
            id: Vn(),
            title: x.title,
            author: (a == null ? void 0 : a.name) || "未知作者",
            authorEmail: (a == null ? void 0 : a.email) || "",
            createdAt: new Date().toISOString(),
            duration: x.duration,
            target: x.target,
            questions: e,
            isEnabled: x.isEnabled
          };
          H2(m), je({
            title: "學習單已建立",
            description: "您的學習單已成功儲存"
          }), i("/dashboard")
        } catch (m) {
          console.error("Error saving learning sheet:", m), je({
            title: "建立失敗",
            description: "儲存學習單時發生錯誤",
            variant: "destructive"
          })
        }
      };
    return a ? l.jsxs("div", {
      className: "min-h-screen flex flex-col",
      children: [l.jsx(Er, {}), l.jsxs("main", {
        className: "flex-grow container mx-auto px-4 py-8",
        children: [l.jsxs("div", {
          className: "mb-8",
          children: [l.jsx("h1", {
            className: "text-3xl font-bold mb-4",
            children: "建立學習單"
          }), l.jsx("p", {
            className: "text-gray-600",
            children: "填寫以下表單建立新的學習單，添加題目並設定正確答案。"
          })]
        }), l.jsx(ci, {
          ...c,
          children: l.jsxs("form", {
            onSubmit: c.handleSubmit(w),
            children: [l.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-8",
              children: [l.jsxs(vt, {
                children: [l.jsx(ln, {
                  children: l.jsx(cn, {
                    children: "基本資訊"
                  })
                }), l.jsxs(Nt, {
                  className: "space-y-6",
                  children: [l.jsx(qe, {
                    control: c.control,
                    name: "title",
                    render: ({
                      field: x
                    }) => l.jsxs(Ye, {
                      children: [l.jsx(Je, {
                        children: "學習單標題"
                      }), l.jsx(et, {
                        children: l.jsx(rt, {
                          placeholder: "請輸入學習單標題",
                          ...x
                        })
                      }), l.jsx(tt, {})]
                    })
                  }), l.jsx(qe, {
                    control: c.control,
                    name: "duration",
                    render: ({
                      field: x
                    }) => l.jsxs(Ye, {
                      children: [l.jsx(Je, {
                        children: "建議測試時間（分鐘）"
                      }), l.jsx(et, {
                        children: l.jsx(rt, {
                          type: "number",
                          min: "1",
                          ...x
                        })
                      }), l.jsx(tt, {})]
                    })
                  }), l.jsx(qe, {
                    control: c.control,
                    name: "target",
                    render: () => l.jsxs(Ye, {
                      children: [l.jsx("div", {
                        className: "mb-4",
                        children: l.jsx(Je, {
                          children: "適合對象（可複選）"
                        })
                      }), l.jsx("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: iI.map(x => l.jsx(qe, {
                          control: c.control,
                          name: "target",
                          render: ({
                            field: m
                          }) => {
                            var b;
                            return l.jsxs(Ye, {
                              className: "flex items-center space-x-3 space-y-0",
                              children: [l.jsx(et, {
                                children: l.jsx(ui, {
                                  checked: (b = m.value) == null ? void 0 : b.includes(x.value),
                                  onCheckedChange: g => {
                                    var v;
                                    return g ? m.onChange([...m.value, x.value]) : m.onChange((v = m.value) == null ? void 0 : v.filter(y => y !== x.value))
                                  }
                                })
                              }), l.jsx(Je, {
                                className: "font-normal cursor-pointer",
                                children: x.label
                              })]
                            }, x.value)
                          }
                        }, x.value))
                      }), l.jsx(tt, {})]
                    })
                  }), l.jsx(qe, {
                    control: c.control,
                    name: "isEnabled",
                    render: ({
                      field: x
                    }) => l.jsxs(Ye, {
                      className: "flex flex-row items-center space-x-3 space-y-0 mt-4",
                      children: [l.jsx(et, {
                        children: l.jsx(ui, {
                          checked: x.value,
                          onCheckedChange: x.onChange
                        })
                      }), l.jsx(Je, {
                        className: "font-normal cursor-pointer",
                        children: "是否啟用此學習單（公開顯示）"
                      }), l.jsx(tt, {})]
                    })
                  })]
                })]
              }), l.jsxs(vt, {
                children: [l.jsx(ln, {
                  children: l.jsx(cn, {
                    children: "題目管理"
                  })
                }), l.jsx(Nt, {
                  children: e.length === 0 ? l.jsxs("div", {
                    className: "text-center py-8 border-2 border-dashed rounded-lg",
                    children: [l.jsx("p", {
                      className: "text-gray-500 mb-4",
                      children: "尚未添加任何題目"
                    }), l.jsxs(me, {
                      onClick: u,
                      children: [l.jsx("span", {
                        className: "mr-2",
                        children: "+"
                      }), "新增題目"]
                    })]
                  }) : l.jsxs("div", {
                    className: "space-y-4",
                    children: [e.map((x, m) => l.jsxs("div", {
                      className: "p-4 border rounded-lg hover:bg-gray-50",
                      children: [l.jsxs("div", {
                        className: "flex justify-between items-start mb-2",
                        children: [l.jsxs("span", {
                          className: "font-medium",
                          children: ["題目 ", m + 1, ": ", x.title]
                        }), l.jsxs("div", {
                          className: "flex space-x-2",
                          children: [l.jsx(me, {
                            variant: "outline",
                            size: "sm",
                            onClick: () => f(x),
                            children: "編輯"
                          }), l.jsx(me, {
                            variant: "outline",
                            size: "sm",
                            onClick: () => p(x.id),
                            children: "刪除"
                          })]
                        })]
                      }), l.jsxs("p", {
                        className: "text-sm text-gray-500",
                        children: ["題型: ", x.type === "single" ? "單選題" : x.type === "multiple" ? "多選題" : x.type === "truefalse" ? "是非題" : "問答題"]
                      }), l.jsxs("p", {
                        className: "text-sm text-gray-500",
                        children: ["選項數: ", x.options.length]
                      })]
                    }, x.id)), l.jsxs(me, {
                      onClick: u,
                      className: "w-full",
                      children: [l.jsx("span", {
                        className: "mr-2",
                        children: "+"
                      }), "新增題目"]
                    })]
                  })
                })]
              })]
            }), l.jsxs("div", {
              className: "mt-8 flex justify-end",
              children: [l.jsx(me, {
                type: "button",
                variant: "outline",
                className: "mr-4",
                onClick: () => i("/dashboard"),
                children: "取消"
              }), l.jsx(me, {
                type: "submit",
                children: "儲存學習單"
              })]
            })]
          })
        })]
      }), l.jsx(sI, {
        isOpen: n,
        onClose: () => r(!1),
        onSave: h,
        initialQuestion: s
      }), l.jsx(Cr, {})]
    }) : l.jsx("div", {
      className: "min-h-screen flex items-center justify-center",
      children: "重新導向登入頁面..."
    })
  },
  lI = () => {
    const [e, t] = d.useState([]), [n, r] = d.useState(null), [s, o] = d.useState(!1), i = hn(), a = qs();
    d.useEffect(() => {
      if (!a) {
        je({
          title: "請先登入",
          description: "您需要登入後才能查看收藏的學習單",
          variant: "destructive"
        }), i("/auth");
        return
      }
      c()
    }, [i, a]);
    const c = () => {
        if (a) try {
          const m = I1(a.email).map(b => ({
            id: b.id,
            title: b.title,
            author: b.author,
            createdAt: new Date(b.createdAt).toLocaleDateString("zh-TW"),
            duration: b.duration,
            target: Array.isArray(b.target) ? b.target.join(", ") : b.target,
            imageUrl: b.imageUrl,
            onOpenDetail: g => u(g)
          }));
          t(m)
        } catch (x) {
          console.error("Error loading favorites:", x), je({
            title: "加載失敗",
            description: "無法獲取收藏的學習單",
            variant: "destructive"
          })
        }
      },
      u = x => {
        const m = e.find(b => b.id === x);
        m && (r(m), o(!0))
      },
      f = () => {
        o(!1), r(null)
      },
      p = x => {
        if (!a) {
          je({
            title: "請先登入",
            description: "您需要登入後才能收藏學習單",
            variant: "destructive"
          });
          return
        }
        try {
          D1(a.email, x), je({
            title: "已加入收藏",
            description: "學習單已成功加入您的收藏"
          })
        } catch (m) {
          console.error("Error adding to favorites:", m), je({
            title: "收藏失敗",
            description: "無法將學習單加入收藏",
            variant: "destructive"
          })
        }
      },
      h = x => {
        je({
          title: "開始試測",
          description: "正在準備學習單試測..."
        })
      },
      w = x => {
        je({
          title: "開始下載",
          description: "學習單下載中..."
        })
      };
    return a ? l.jsxs("div", {
      className: "min-h-screen flex flex-col",
      children: [l.jsx(Er, {}), l.jsxs("main", {
        className: "flex-grow container mx-auto px-4 py-8",
        children: [l.jsxs("div", {
          className: "mb-8",
          children: [l.jsx("h1", {
            className: "text-3xl font-bold mb-4",
            children: "我的最愛"
          }), l.jsx("p", {
            className: "text-gray-600",
            children: "您收藏的所有學習單都在這裡"
          })]
        }), e.length > 0 ? l.jsx("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
          children: e.map(x => l.jsx(Oh, {
            ...x
          }, x.id))
        }) : l.jsx(vt, {
          children: l.jsxs(Nt, {
            className: "flex flex-col items-center justify-center py-16",
            children: [l.jsx("p", {
              className: "text-gray-500 mb-4",
              children: "您還沒有收藏任何學習單"
            }), l.jsx("button", {
              className: "text-blue-500 hover:text-blue-700",
              onClick: () => i("/learning-sheets"),
              children: "瀏覽學習單列表"
            })]
          })
        }), n && l.jsx(Xh, {
          isOpen: s,
          onClose: f,
          sheet: n,
          onTest: h,
          onAddToList: p,
          onDownload: w
        })]
      }), l.jsx(Cr, {})]
    }) : l.jsx("div", {
      className: "min-h-screen flex items-center justify-center",
      children: "重新導向登入頁面..."
    })
  },
  cI = () => {
    const e = yi(),
      t = new URLSearchParams(e.search),
      n = t.get("sheetId"),
      r = t.get("mode") === "test",
      s = hn(),
      {
        toast: o
      } = Qs(),
      i = qs(),
      [a, c] = d.useState(!0),
      [u, f] = d.useState(""),
      [p, h] = d.useState(""),
      [w, x] = d.useState(""),
      [m, b] = d.useState(""),
      [g, v] = d.useState(""),
      [y, S] = d.useState(""),
      [E, _] = d.useState(n || ""),
      [C, j] = d.useState([]),
      [P, O] = d.useState("");
    d.useEffect(() => {
      if (!i) {
        o({
          title: "請先登入",
          description: "您需要登入後才能建立測驗",
          variant: "destructive"
        }), s("/auth");
        return
      }
      const k = I1(i.email);
      if (j(k.map(F => ({
          id: F.id,
          title: F.title
        }))), r && n) {
        const F = Yh(n);
        if (F) {
          f(`${F.title} (試測)`), h("這是一次試測，用來檢視學習單的效果");
          const K = new Date,
            Z = new Date(K.getTime() + 24 * 60 * 60 * 1e3);
          x(z(K)), b(R(K)), v(z(Z)), S(R(Z))
        }
      }
    }, [i, s, n, r]);
    const z = k => k.toISOString().split("T")[0],
      R = k => k.toTimeString().slice(0, 5),
      D = () => {
        if (I()) try {
          const k = new Date(`${w}T${m}`),
            F = new Date(`${g}T${y}`),
            K = {
              id: Vn(),
              title: u,
              description: p,
              startTime: k.toISOString(),
              endTime: F.toISOString(),
              sheetId: E,
              creatorEmail: (i == null ? void 0 : i.email) || "",
              createdAt: new Date().toISOString()
            };
          Z2(K);
          const Z = `${window.location.origin}/exam/${K.id}`;
          if (O(Z), o({
              title: "測驗已建立",
              description: "您可以複製連結並分享給參與者"
            }), r) {
            s(`/exam/${K.id}?test=true`);
            return
          }
        } catch {
          o({
            title: "建立測驗失敗",
            description: "請檢查您的輸入並重試",
            variant: "destructive"
          })
        }
      },
      I = () => {
        if (!u || !p || !w || !m || !g || !y || !E) return o({
          title: "表單不完整",
          description: "請填寫所有必填欄位",
          variant: "destructive"
        }), !1;
        const k = new Date(`${w}T${m}`);
        return new Date(`${g}T${y}`) <= k ? (o({
          title: "時間設定錯誤",
          description: "結束時間必須晚於開始時間",
          variant: "destructive"
        }), !1) : !0
      },
      G = () => {
        s(P ? "/exam-records" : "/dashboard")
      },
      W = () => {
        navigator.clipboard.writeText(P), o({
          title: "連結已複製",
          description: "測驗連結已複製到剪貼簿"
        })
      },
      te = () => {
        window.open(P, "_blank")
      };
    return l.jsxs("div", {
      className: "min-h-screen flex flex-col",
      children: [l.jsx(Er, {}), l.jsxs("main", {
        className: "flex-grow container mx-auto px-4 py-8",
        children: [l.jsx("h1", {
          className: "text-3xl font-bold mb-6",
          children: "建立新測驗"
        }), l.jsx(R1, {
          open: a,
          onOpenChange: c,
          children: l.jsxs(Wh, {
            className: "sm:max-w-[500px]",
            children: [l.jsxs(Hh, {
              children: [l.jsx(Gh, {
                children: P ? "測驗已建立" : "建立新測驗"
              }), l.jsx(Kh, {
                children: P ? "複製並分享以下連結給參與者" : "填寫以下資訊來建立新的測驗"
              })]
            }), P ? l.jsx(vt, {
              className: "mt-4",
              children: l.jsxs(Nt, {
                className: "pt-4",
                children: [l.jsxs("div", {
                  className: "flex items-center justify-between mb-4",
                  children: [l.jsx("p", {
                    className: "text-sm truncate pr-2",
                    children: P
                  }), l.jsx(me, {
                    size: "sm",
                    variant: "outline",
                    onClick: W,
                    children: "複製"
                  })]
                }), l.jsx(me, {
                  className: "w-full",
                  onClick: te,
                  children: "前往測驗"
                })]
              })
            }) : l.jsxs("div", {
              className: "grid gap-4 py-4",
              children: [l.jsxs("div", {
                className: "grid grid-cols-4 items-center gap-4",
                children: [l.jsx(wn, {
                  htmlFor: "title",
                  className: "text-right",
                  children: "測驗標題"
                }), l.jsx(rt, {
                  id: "title",
                  value: u,
                  onChange: k => f(k.target.value),
                  className: "col-span-3"
                })]
              }), l.jsxs("div", {
                className: "grid grid-cols-4 items-center gap-4",
                children: [l.jsx(wn, {
                  htmlFor: "description",
                  className: "text-right",
                  children: "測驗說明"
                }), l.jsx(Bu, {
                  id: "description",
                  value: p,
                  onChange: k => h(k.target.value),
                  className: "col-span-3",
                  rows: 3
                })]
              }), l.jsxs("div", {
                className: "grid grid-cols-4 items-center gap-4",
                children: [l.jsx(wn, {
                  htmlFor: "startDate",
                  className: "text-right",
                  children: "開始日期"
                }), l.jsx(rt, {
                  id: "startDate",
                  type: "date",
                  value: w,
                  onChange: k => x(k.target.value),
                  className: "col-span-3"
                })]
              }), l.jsxs("div", {
                className: "grid grid-cols-4 items-center gap-4",
                children: [l.jsx(wn, {
                  htmlFor: "startTime",
                  className: "text-right",
                  children: "開始時間"
                }), l.jsx(rt, {
                  id: "startTime",
                  type: "time",
                  value: m,
                  onChange: k => b(k.target.value),
                  className: "col-span-3"
                })]
              }), l.jsxs("div", {
                className: "grid grid-cols-4 items-center gap-4",
                children: [l.jsx(wn, {
                  htmlFor: "endDate",
                  className: "text-right",
                  children: "結束日期"
                }), l.jsx(rt, {
                  id: "endDate",
                  type: "date",
                  value: g,
                  onChange: k => v(k.target.value),
                  className: "col-span-3"
                })]
              }), l.jsxs("div", {
                className: "grid grid-cols-4 items-center gap-4",
                children: [l.jsx(wn, {
                  htmlFor: "endTime",
                  className: "text-right",
                  children: "結束時間"
                }), l.jsx(rt, {
                  id: "endTime",
                  type: "time",
                  value: y,
                  onChange: k => S(k.target.value),
                  className: "col-span-3"
                })]
              }), l.jsxs("div", {
                className: "grid grid-cols-4 items-center gap-4",
                children: [l.jsx(wn, {
                  htmlFor: "sheetId",
                  className: "text-right",
                  children: "選擇學習單"
                }), l.jsxs(LS, {
                  value: E,
                  onValueChange: _,
                  disabled: r && n !== null,
                  children: [l.jsx(dm, {
                    className: "col-span-3",
                    children: l.jsx(FS, {
                      placeholder: "選擇學習單"
                    })
                  }), l.jsx(fm, {
                    children: C.map(k => l.jsx(jo, {
                      value: k.id,
                      children: k.title
                    }, k.id))
                  })]
                })]
              })]
            }), l.jsxs(Zh, {
              children: [l.jsx(me, {
                variant: "outline",
                onClick: G,
                children: P ? "返回測驗列表" : "取消"
              }), !P && l.jsx(me, {
                onClick: D,
                children: "建立測驗"
              })]
            })]
          })
        })]
      }), l.jsx(Cr, {})]
    })
  };
var uI = "DismissableLayer",
  mp = "dismissableLayer.update",
  dI = "dismissableLayer.pointerDownOutside",
  fI = "dismissableLayer.focusOutside",
  Hg, eE = d.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
  }),
  tE = d.forwardRef((e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: s,
      onFocusOutside: o,
      onInteractOutside: i,
      onDismiss: a,
      ...c
    } = e, u = d.useContext(eE), [f, p] = d.useState(null), h = (f == null ? void 0 : f.ownerDocument) ? ? (globalThis == null ? void 0 : globalThis.document), [, w] = d.useState({}), x = ue(t, C => p(C)), m = Array.from(u.layers), [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), g = m.indexOf(b), v = f ? m.indexOf(f) : -1, y = u.layersWithOutsidePointerEventsDisabled.size > 0, S = v >= g, E = mI(C => {
      const j = C.target,
        P = [...u.branches].some(O => O.contains(j));
      !S || P || (s == null || s(C), i == null || i(C), C.defaultPrevented || a == null || a())
    }, h), _ = vI(C => {
      const j = C.target;
      [...u.branches].some(O => O.contains(j)) || (o == null || o(C), i == null || i(C), C.defaultPrevented || a == null || a())
    }, h);
    return cu(C => {
      v === u.layers.size - 1 && (r == null || r(C), !C.defaultPrevented && a && (C.preventDefault(), a()))
    }, h), d.useEffect(() => {
      if (f) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Hg = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), Zg(), () => {
        n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Hg)
      }
    }, [f, h, n, u]), d.useEffect(() => () => {
      f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), Zg())
    }, [f, u]), d.useEffect(() => {
      const C = () => w({});
      return document.addEventListener(mp, C), () => document.removeEventListener(mp, C)
    }, []), l.jsx(ne.div, {
      ...c,
      ref: x,
      style: {
        pointerEvents: y ? S ? "auto" : "none" : void 0,
        ...e.style
      },
      onFocusCapture: q(e.onFocusCapture, _.onFocusCapture),
      onBlurCapture: q(e.onBlurCapture, _.onBlurCapture),
      onPointerDownCapture: q(e.onPointerDownCapture, E.onPointerDownCapture)
    })
  });
tE.displayName = uI;
var pI = "DismissableLayerBranch",
  hI = d.forwardRef((e, t) => {
    const n = d.useContext(eE),
      r = d.useRef(null),
      s = ue(t, r);
    return d.useEffect(() => {
      const o = r.current;
      if (o) return n.branches.add(o), () => {
        n.branches.delete(o)
      }
    }, [n.branches]), l.jsx(ne.div, {
      ...e,
      ref: s
    })
  });
hI.displayName = pI;

function mI(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = it(e),
    r = d.useRef(!1),
    s = d.useRef(() => {});
  return d.useEffect(() => {
    const o = a => {
        if (a.target && !r.current) {
          let c = function () {
            nE(dI, n, u, {
              discrete: !0
            })
          };
          const u = {
            originalEvent: a
          };
          a.pointerType === "touch" ? (t.removeEventListener("click", s.current), s.current = c, t.addEventListener("click", s.current, {
            once: !0
          })) : c()
        } else t.removeEventListener("click", s.current);
        r.current = !1
      },
      i = window.setTimeout(() => {
        t.addEventListener("pointerdown", o)
      }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", o), t.removeEventListener("click", s.current)
    }
  }, [t, n]), {
    onPointerDownCapture: () => r.current = !0
  }
}

function vI(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = it(e),
    r = d.useRef(!1);
  return d.useEffect(() => {
    const s = o => {
      o.target && !r.current && nE(fI, n, {
        originalEvent: o
      }, {
        discrete: !1
      })
    };
    return t.addEventListener("focusin", s), () => t.removeEventListener("focusin", s)
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  }
}

function Zg() {
  const e = new CustomEvent(mp);
  document.dispatchEvent(e)
}

function nE(e, t, n, {
  discrete: r
}) {
  const s = n.originalEvent.target,
    o = new CustomEvent(e, {
      bubbles: !1,
      cancelable: !0,
      detail: n
    });
  t && s.addEventListener(e, t, {
    once: !0
  }), r ? Ga(s, o) : s.dispatchEvent(o)
}
var gI = "Portal",
  rE = d.forwardRef((e, t) => {
    var a;
    const {
      container: n,
      ...r
    } = e, [s, o] = d.useState(!1);
    We(() => o(!0), []);
    const i = n || s && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
    return i ? Za.createPortal(l.jsx(ne.div, {
      ...r,
      ref: t
    }), i) : null
  });
rE.displayName = gI;
var Wd = 0;

function yI() {
  d.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ? ? Gg()), document.body.insertAdjacentElement("beforeend", e[1] ? ? Gg()), Wd++, () => {
      Wd === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()), Wd--
    }
  }, [])
}

function Gg() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
}
var sE = Mh(),
  Hd = function () {},
  Gu = d.forwardRef(function (e, t) {
    var n = d.useRef(null),
      r = d.useState({
        onScrollCapture: Hd,
        onWheelCapture: Hd,
        onTouchMoveCapture: Hd
      }),
      s = r[0],
      o = r[1],
      i = e.forwardProps,
      a = e.children,
      c = e.className,
      u = e.removeScrollBar,
      f = e.enabled,
      p = e.shards,
      h = e.sideCar,
      w = e.noIsolation,
      x = e.inert,
      m = e.allowPinchZoom,
      b = e.as,
      g = b === void 0 ? "div" : b,
      v = e.gapMode,
      y = Nu(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
      S = h,
      E = Ih([n, t]),
      _ = Qe(Qe({}, y), s);
    return d.createElement(d.Fragment, null, f && d.createElement(S, {
      sideCar: sE,
      removeScrollBar: u,
      shards: p,
      noIsolation: w,
      inert: x,
      setCallbacks: o,
      allowPinchZoom: !!m,
      lockRef: n,
      gapMode: v
    }), i ? d.cloneElement(d.Children.only(a), Qe(Qe({}, _), {
      ref: E
    })) : d.createElement(g, Qe({}, _, {
      className: c,
      ref: E
    }), a))
  });
Gu.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Gu.classNames = {
  fullWidth: Lo,
  zeroRight: Mo
};
var vp = !1;
if (typeof window < "u") try {
  var Il = Object.defineProperty({}, "passive", {
    get: function () {
      return vp = !0, !0
    }
  });
  window.addEventListener("test", Il, Il), window.removeEventListener("test", Il, Il)
} catch {
  vp = !1
}
var lo = vp ? {
    passive: !1
  } : !1,
  xI = function (e) {
    return e.tagName === "TEXTAREA"
  },
  oE = function (e, t) {
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !xI(e) && n[t] === "visible")
  },
  wI = function (e) {
    return oE(e, "overflowY")
  },
  bI = function (e) {
    return oE(e, "overflowX")
  },
  Kg = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var s = iE(e, r);
      if (s) {
        var o = aE(e, r),
          i = o[1],
          a = o[2];
        if (i > a) return !0
      }
      r = r.parentNode
    } while (r && r !== n.body);
    return !1
  },
  SI = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r]
  },
  EI = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r]
  },
  iE = function (e, t) {
    return e === "v" ? wI(t) : bI(t)
  },
  aE = function (e, t) {
    return e === "v" ? SI(t) : EI(t)
  },
  CI = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1
  },
  NI = function (e, t, n, r, s) {
    var o = CI(e, window.getComputedStyle(t).direction),
      i = o * r,
      a = n.target,
      c = t.contains(a),
      u = !1,
      f = i > 0,
      p = 0,
      h = 0;
    do {
      var w = aE(e, a),
        x = w[0],
        m = w[1],
        b = w[2],
        g = m - b - o * x;
      (x || g) && iE(e, a) && (p += g, h += x), a instanceof ShadowRoot ? a = a.host : a = a.parentNode
    } while (!c && a !== document.body || c && (t.contains(a) || t === a));
    return (f && (Math.abs(p) < 1 || !s) || !f && (Math.abs(h) < 1 || !s)) && (u = !0), u
  },
  Ml = function (e) {
    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
  },
  Yg = function (e) {
    return [e.deltaX, e.deltaY]
  },
  Qg = function (e) {
    return e && "current" in e ? e.current : e
  },
  _I = function (e, t) {
    return e[0] === t[0] && e[1] === t[1]
  },
  jI = function (e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
  },
  kI = 0,
  co = [];

function TI(e) {
  var t = d.useRef([]),
    n = d.useRef([0, 0]),
    r = d.useRef(),
    s = d.useState(kI++)[0],
    o = d.useState(ju)[0],
    i = d.useRef(e);
  d.useEffect(function () {
    i.current = e
  }, [e]), d.useEffect(function () {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var m = Dh([e.lockRef.current], (e.shards || []).map(Qg), !0).filter(Boolean);
      return m.forEach(function (b) {
          return b.classList.add("allow-interactivity-".concat(s))
        }),
        function () {
          document.body.classList.remove("block-interactivity-".concat(s)), m.forEach(function (b) {
            return b.classList.remove("allow-interactivity-".concat(s))
          })
        }
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = d.useCallback(function (m, b) {
      if ("touches" in m && m.touches.length === 2) return !i.current.allowPinchZoom;
      var g = Ml(m),
        v = n.current,
        y = "deltaX" in m ? m.deltaX : v[0] - g[0],
        S = "deltaY" in m ? m.deltaY : v[1] - g[1],
        E, _ = m.target,
        C = Math.abs(y) > Math.abs(S) ? "h" : "v";
      if ("touches" in m && C === "h" && _.type === "range") return !1;
      var j = Kg(C, _);
      if (!j) return !0;
      if (j ? E = C : (E = C === "v" ? "h" : "v", j = Kg(C, _)), !j) return !1;
      if (!r.current && "changedTouches" in m && (y || S) && (r.current = E), !E) return !0;
      var P = r.current || E;
      return NI(P, b, m, P === "h" ? y : S, !0)
    }, []),
    c = d.useCallback(function (m) {
      var b = m;
      if (!(!co.length || co[co.length - 1] !== o)) {
        var g = "deltaY" in b ? Yg(b) : Ml(b),
          v = t.current.filter(function (E) {
            return E.name === b.type && (E.target === b.target || b.target === E.shadowParent) && _I(E.delta, g)
          })[0];
        if (v && v.should) {
          b.cancelable && b.preventDefault();
          return
        }
        if (!v) {
          var y = (i.current.shards || []).map(Qg).filter(Boolean).filter(function (E) {
              return E.contains(b.target)
            }),
            S = y.length > 0 ? a(b, y[0]) : !i.current.noIsolation;
          S && b.cancelable && b.preventDefault()
        }
      }
    }, []),
    u = d.useCallback(function (m, b, g, v) {
      var y = {
        name: m,
        delta: b,
        target: g,
        should: v,
        shadowParent: PI(g)
      };
      t.current.push(y), setTimeout(function () {
        t.current = t.current.filter(function (S) {
          return S !== y
        })
      }, 1)
    }, []),
    f = d.useCallback(function (m) {
      n.current = Ml(m), r.current = void 0
    }, []),
    p = d.useCallback(function (m) {
      u(m.type, Yg(m), m.target, a(m, e.lockRef.current))
    }, []),
    h = d.useCallback(function (m) {
      u(m.type, Ml(m), m.target, a(m, e.lockRef.current))
    }, []);
  d.useEffect(function () {
    return co.push(o), e.setCallbacks({
        onScrollCapture: p,
        onWheelCapture: p,
        onTouchMoveCapture: h
      }), document.addEventListener("wheel", c, lo), document.addEventListener("touchmove", c, lo), document.addEventListener("touchstart", f, lo),
      function () {
        co = co.filter(function (m) {
          return m !== o
        }), document.removeEventListener("wheel", c, lo), document.removeEventListener("touchmove", c, lo), document.removeEventListener("touchstart", f, lo)
      }
  }, []);
  var w = e.removeScrollBar,
    x = e.inert;
  return d.createElement(d.Fragment, null, x ? d.createElement(o, {
    styles: jI(s)
  }) : null, w ? d.createElement(Fh, {
    gapMode: e.gapMode
  }) : null)
}

function PI(e) {
  for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t
}
const RI = Lh(sE, TI);
var lE = d.forwardRef(function (e, t) {
  return d.createElement(Gu, Qe({}, e, {
    ref: t,
    sideCar: RI
  }))
});
lE.classNames = Gu.classNames;
var mm = "Dialog",
  [cE, uE] = An(mm),
  [AI, Dn] = cE(mm),
  dE = e => {
    const {
      __scopeDialog: t,
      children: n,
      open: r,
      defaultOpen: s,
      onOpenChange: o,
      modal: i = !0
    } = e, a = d.useRef(null), c = d.useRef(null), [u = !1, f] = yr({
      prop: r,
      defaultProp: s,
      onChange: o
    });
    return l.jsx(AI, {
      scope: t,
      triggerRef: a,
      contentRef: c,
      contentId: _n(),
      titleId: _n(),
      descriptionId: _n(),
      open: u,
      onOpenChange: f,
      onOpenToggle: d.useCallback(() => f(p => !p), [f]),
      modal: i,
      children: n
    })
  };
dE.displayName = mm;
var fE = "DialogTrigger",
  pE = d.forwardRef((e, t) => {
    const {
      __scopeDialog: n,
      ...r
    } = e, s = Dn(fE, n), o = ue(t, s.triggerRef);
    return l.jsx(ne.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": s.open,
      "aria-controls": s.contentId,
      "data-state": ym(s.open),
      ...r,
      ref: o,
      onClick: q(e.onClick, s.onOpenToggle)
    })
  });
pE.displayName = fE;
var vm = "DialogPortal",
  [OI, hE] = cE(vm, {
    forceMount: void 0
  }),
  mE = e => {
    const {
      __scopeDialog: t,
      forceMount: n,
      children: r,
      container: s
    } = e, o = Dn(vm, t);
    return l.jsx(OI, {
      scope: t,
      forceMount: n,
      children: d.Children.map(r, i => l.jsx(ws, {
        present: n || o.open,
        children: l.jsx(rE, {
          asChild: !0,
          container: s,
          children: i
        })
      }))
    })
  };
mE.displayName = vm;
var Zc = "DialogOverlay",
  vE = d.forwardRef((e, t) => {
    const n = hE(Zc, e.__scopeDialog),
      {
        forceMount: r = n.forceMount,
        ...s
      } = e,
      o = Dn(Zc, e.__scopeDialog);
    return o.modal ? l.jsx(ws, {
      present: r || o.open,
      children: l.jsx(DI, {
        ...s,
        ref: t
      })
    }) : null
  });
vE.displayName = Zc;
var DI = d.forwardRef((e, t) => {
    const {
      __scopeDialog: n,
      ...r
    } = e, s = Dn(Zc, n);
    return l.jsx(lE, {
      as: gr,
      allowPinchZoom: !0,
      shards: [s.contentRef],
      children: l.jsx(ne.div, {
        "data-state": ym(s.open),
        ...r,
        ref: t,
        style: {
          pointerEvents: "auto",
          ...r.style
        }
      })
    })
  }),
  Gs = "DialogContent",
  gE = d.forwardRef((e, t) => {
    const n = hE(Gs, e.__scopeDialog),
      {
        forceMount: r = n.forceMount,
        ...s
      } = e,
      o = Dn(Gs, e.__scopeDialog);
    return l.jsx(ws, {
      present: r || o.open,
      children: o.modal ? l.jsx(II, {
        ...s,
        ref: t
      }) : l.jsx(MI, {
        ...s,
        ref: t
      })
    })
  });
gE.displayName = Gs;
var II = d.forwardRef((e, t) => {
    const n = Dn(Gs, e.__scopeDialog),
      r = d.useRef(null),
      s = ue(t, n.contentRef, r);
    return d.useEffect(() => {
      const o = r.current;
      if (o) return $h(o)
    }, []), l.jsx(yE, {
      ...e,
      ref: s,
      trapFocus: n.open,
      disableOutsidePointerEvents: !0,
      onCloseAutoFocus: q(e.onCloseAutoFocus, o => {
        var i;
        o.preventDefault(), (i = n.triggerRef.current) == null || i.focus()
      }),
      onPointerDownOutside: q(e.onPointerDownOutside, o => {
        const i = o.detail.originalEvent,
          a = i.button === 0 && i.ctrlKey === !0;
        (i.button === 2 || a) && o.preventDefault()
      }),
      onFocusOutside: q(e.onFocusOutside, o => o.preventDefault())
    })
  }),
  MI = d.forwardRef((e, t) => {
    const n = Dn(Gs, e.__scopeDialog),
      r = d.useRef(!1),
      s = d.useRef(!1);
    return l.jsx(yE, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: o => {
        var i, a;
        (i = e.onCloseAutoFocus) == null || i.call(e, o), o.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(), o.preventDefault()), r.current = !1, s.current = !1
      },
      onInteractOutside: o => {
        var c, u;
        (c = e.onInteractOutside) == null || c.call(e, o), o.defaultPrevented || (r.current = !0, o.detail.originalEvent.type === "pointerdown" && (s.current = !0));
        const i = o.target;
        ((u = n.triggerRef.current) == null ? void 0 : u.contains(i)) && o.preventDefault(), o.detail.originalEvent.type === "focusin" && s.current && o.preventDefault()
      }
    })
  }),
  yE = d.forwardRef((e, t) => {
    const {
      __scopeDialog: n,
      trapFocus: r,
      onOpenAutoFocus: s,
      onCloseAutoFocus: o,
      ...i
    } = e, a = Dn(Gs, n), c = d.useRef(null), u = ue(t, c);
    return yI(), l.jsxs(l.Fragment, {
      children: [l.jsx(Eu, {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: s,
        onUnmountAutoFocus: o,
        children: l.jsx(tE, {
          role: "dialog",
          id: a.contentId,
          "aria-describedby": a.descriptionId,
          "aria-labelledby": a.titleId,
          "data-state": ym(a.open),
          ...i,
          ref: u,
          onDismiss: () => a.onOpenChange(!1)
        })
      }), l.jsxs(l.Fragment, {
        children: [l.jsx(FI, {
          titleId: a.titleId
        }), l.jsx(VI, {
          contentRef: c,
          descriptionId: a.descriptionId
        })]
      })]
    })
  }),
  gm = "DialogTitle",
  xE = d.forwardRef((e, t) => {
    const {
      __scopeDialog: n,
      ...r
    } = e, s = Dn(gm, n);
    return l.jsx(ne.h2, {
      id: s.titleId,
      ...r,
      ref: t
    })
  });
xE.displayName = gm;
var wE = "DialogDescription",
  bE = d.forwardRef((e, t) => {
    const {
      __scopeDialog: n,
      ...r
    } = e, s = Dn(wE, n);
    return l.jsx(ne.p, {
      id: s.descriptionId,
      ...r,
      ref: t
    })
  });
bE.displayName = wE;
var SE = "DialogClose",
  EE = d.forwardRef((e, t) => {
    const {
      __scopeDialog: n,
      ...r
    } = e, s = Dn(SE, n);
    return l.jsx(ne.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: q(e.onClick, () => s.onOpenChange(!1))
    })
  });
EE.displayName = SE;

function ym(e) {
  return e ? "open" : "closed"
}
var CE = "DialogTitleWarning",
  [LI, NE] = A_(CE, {
    contentName: Gs,
    titleName: gm,
    docsSlug: "dialog"
  }),
  FI = ({
    titleId: e
  }) => {
    const t = NE(CE),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return d.useEffect(() => {
      e && (document.getElementById(e) || console.error(n))
    }, [n, e]), null
  },
  $I = "DialogDescriptionWarning",
  VI = ({
    contentRef: e,
    descriptionId: t
  }) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${NE($I).contentName}}.`;
    return d.useEffect(() => {
      var o;
      const s = (o = e.current) == null ? void 0 : o.getAttribute("aria-describedby");
      t && s && (document.getElementById(t) || console.warn(r))
    }, [r, e, t]), null
  },
  zI = dE,
  BI = pE,
  UI = mE,
  WI = vE,
  HI = gE,
  ZI = xE,
  GI = bE,
  _E = EE,
  jE = "AlertDialog",
  [KI, _M] = An(jE, [uE]),
  Nr = uE(),
  kE = e => {
    const {
      __scopeAlertDialog: t,
      ...n
    } = e, r = Nr(t);
    return l.jsx(zI, {
      ...r,
      ...n,
      modal: !0
    })
  };
kE.displayName = jE;
var YI = "AlertDialogTrigger",
  QI = d.forwardRef((e, t) => {
    const {
      __scopeAlertDialog: n,
      ...r
    } = e, s = Nr(n);
    return l.jsx(BI, {
      ...s,
      ...r,
      ref: t
    })
  });
QI.displayName = YI;
var XI = "AlertDialogPortal",
  TE = e => {
    const {
      __scopeAlertDialog: t,
      ...n
    } = e, r = Nr(t);
    return l.jsx(UI, {
      ...r,
      ...n
    })
  };
TE.displayName = XI;
var qI = "AlertDialogOverlay",
  PE = d.forwardRef((e, t) => {
    const {
      __scopeAlertDialog: n,
      ...r
    } = e, s = Nr(n);
    return l.jsx(WI, {
      ...s,
      ...r,
      ref: t
    })
  });
PE.displayName = qI;
var Vo = "AlertDialogContent",
  [JI, eM] = KI(Vo),
  RE = d.forwardRef((e, t) => {
    const {
      __scopeAlertDialog: n,
      children: r,
      ...s
    } = e, o = Nr(n), i = d.useRef(null), a = ue(t, i), c = d.useRef(null);
    return l.jsx(LI, {
      contentName: Vo,
      titleName: AE,
      docsSlug: "alert-dialog",
      children: l.jsx(JI, {
        scope: n,
        cancelRef: c,
        children: l.jsxs(HI, {
          role: "alertdialog",
          ...o,
          ...s,
          ref: a,
          onOpenAutoFocus: q(s.onOpenAutoFocus, u => {
            var f;
            u.preventDefault(), (f = c.current) == null || f.focus({
              preventScroll: !0
            })
          }),
          onPointerDownOutside: u => u.preventDefault(),
          onInteractOutside: u => u.preventDefault(),
          children: [l.jsx(dh, {
            children: r
          }), l.jsx(nM, {
            contentRef: i
          })]
        })
      })
    })
  });
RE.displayName = Vo;
var AE = "AlertDialogTitle",
  OE = d.forwardRef((e, t) => {
    const {
      __scopeAlertDialog: n,
      ...r
    } = e, s = Nr(n);
    return l.jsx(ZI, {
      ...s,
      ...r,
      ref: t
    })
  });
OE.displayName = AE;
var DE = "AlertDialogDescription",
  IE = d.forwardRef((e, t) => {
    const {
      __scopeAlertDialog: n,
      ...r
    } = e, s = Nr(n);
    return l.jsx(GI, {
      ...s,
      ...r,
      ref: t
    })
  });
IE.displayName = DE;
var tM = "AlertDialogAction",
  ME = d.forwardRef((e, t) => {
    const {
      __scopeAlertDialog: n,
      ...r
    } = e, s = Nr(n);
    return l.jsx(_E, {
      ...s,
      ...r,
      ref: t
    })
  });
ME.displayName = tM;
var LE = "AlertDialogCancel",
  FE = d.forwardRef((e, t) => {
    const {
      __scopeAlertDialog: n,
      ...r
    } = e, {
      cancelRef: s
    } = eM(LE, n), o = Nr(n), i = ue(t, s);
    return l.jsx(_E, {
      ...o,
      ...r,
      ref: i
    })
  });
FE.displayName = LE;
var nM = ({
    contentRef: e
  }) => {
    const t = `\`${Vo}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Vo}\` by passing a \`${DE}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Vo}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
    return d.useEffect(() => {
      var r;
      document.getElementById((r = e.current) == null ? void 0 : r.getAttribute("aria-describedby")) || console.warn(t)
    }, [t, e]), null
  },
  rM = kE,
  sM = TE,
  $E = PE,
  VE = RE,
  zE = ME,
  BE = FE,
  UE = OE,
  WE = IE;
const oM = rM,
  iM = sM,
  HE = d.forwardRef(({
    className: e,
    ...t
  }, n) => l.jsx($E, {
    className: ee("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
    ...t,
    ref: n
  }));
HE.displayName = $E.displayName;
const ZE = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsxs(iM, {
  children: [l.jsx(HE, {}), l.jsx(VE, {
    ref: n,
    className: ee("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", e),
    ...t
  })]
}));
ZE.displayName = VE.displayName;
const GE = ({
  className: e,
  ...t
}) => l.jsx("div", {
  className: ee("flex flex-col space-y-2 text-center sm:text-left", e),
  ...t
});
GE.displayName = "AlertDialogHeader";
const KE = ({
  className: e,
  ...t
}) => l.jsx("div", {
  className: ee("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
  ...t
});
KE.displayName = "AlertDialogFooter";
const YE = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx(UE, {
  ref: n,
  className: ee("text-lg font-semibold", e),
  ...t
}));
YE.displayName = UE.displayName;
const QE = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx(WE, {
  ref: n,
  className: ee("text-sm text-muted-foreground", e),
  ...t
}));
QE.displayName = WE.displayName;
const XE = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx(zE, {
  ref: n,
  className: ee(Ah(), e),
  ...t
}));
XE.displayName = zE.displayName;
const qE = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx(BE, {
  ref: n,
  className: ee(Ah({
    variant: "outline"
  }), "mt-2 sm:mt-0", e),
  ...t
}));
qE.displayName = BE.displayName;
const aM = Fu({
  participantName: ms().min(1, {
    message: "請輸入您的名稱"
  })
});
mb(hb(ms()));
const lM = () => {
    const {
      examId: e
    } = t1(), t = hn(), [n, r] = d.useState(null), [s, o] = d.useState(null), [i, a] = d.useState(!0), [c, u] = d.useState(!1), [f, p] = d.useState(""), [h, w] = d.useState(null), [x, m] = d.useState(null), [b, g] = d.useState(!1), [v, y] = d.useState(!1), S = li({
      resolver: La(aM),
      defaultValues: {
        participantName: ""
      }
    }), E = li({
      defaultValues: {}
    });
    d.useEffect(() => {
      (async () => {
        if (!e) {
          je({
            title: "測驗不存在",
            description: "找不到指定的測驗",
            variant: "destructive"
          }), t("/");
          return
        }
        try {
          const O = M1(e);
          if (!O) {
            je({
              title: "測驗不存在",
              description: "找不到指定的測驗",
              variant: "destructive"
            }), t("/");
            return
          }
          r(O);
          const z = new Date,
            R = new Date(O.endTime),
            D = new Date(O.startTime);
          if (z > R) {
            y(!0), je({
              title: "測驗已結束",
              description: "此測驗已超過結束時間",
              variant: "destructive"
            }), setTimeout(() => t("/"), 3e3);
            return
          }
          if (z < D) {
            je({
              title: "測驗尚未開始",
              description: "此測驗尚未到開始時間",
              variant: "destructive"
            }), setTimeout(() => t("/"), 3e3);
            return
          }
          const I = Yh(O.sheetId);
          if (!I) {
            je({
              title: "學習單不存在",
              description: "找不到測驗關聯的學習單",
              variant: "destructive"
            }), t("/");
            return
          }
          o(I), a(!1)
        } catch (O) {
          console.error("Error fetching exam data:", O), je({
            title: "讀取錯誤",
            description: "無法讀取測驗數據",
            variant: "destructive"
          }), t("/")
        }
      })()
    }, [e, t]), d.useEffect(() => {
      if (!n || v) return;
      const P = new Date(n.endTime).getTime(),
        O = setInterval(() => {
          const z = new Date().getTime(),
            R = P - z;
          if (R <= 0) {
            clearInterval(O), y(!0), je({
              title: "測驗已結束",
              description: "測驗時間已到，即將返回首頁",
              variant: "destructive"
            }), setTimeout(() => {
              t("/")
            }, 3e3);
            return
          }
          m(Math.floor(R / 1e3))
        }, 1e3);
      return () => clearInterval(O)
    }, [n, t, v]);
    const _ = P => {
        p(P.participantName), u(!0), w(new Date)
      },
      C = () => {
        if (!n || !s || !h || !f) return;
        const P = E.getValues(),
          O = new Date,
          z = Math.floor((O.getTime() - h.getTime()) / 1e3);
        try {
          const R = Object.keys(P).map(I => ({
              questionId: I,
              answer: P[I] || []
            })),
            D = {
              id: Vn(),
              examId: n.id,
              participant: f,
              startTime: h.toISOString(),
              endTime: O.toISOString(),
              duration: z,
              answers: R
            };
          K2(D), je({
            title: "測驗已提交",
            description: "您的測驗已成功提交"
          }), setTimeout(() => {
            t("/")
          }, 2e3)
        } catch (R) {
          console.error("Error submitting exam:", R), je({
            title: "提交失敗",
            description: "無法提交測驗結果",
            variant: "destructive"
          })
        }
      },
      j = P => {
        if (!P) return "00:00:00";
        const O = Math.floor(P / 3600),
          z = Math.floor(P % 3600 / 60),
          R = P % 60;
        return [O, z, R].map(D => D.toString().padStart(2, "0")).join(":")
      };
    return i ? l.jsx("div", {
      className: "min-h-screen flex items-center justify-center",
      children: l.jsx("p", {
        className: "text-xl",
        children: "載入測驗中..."
      })
    }) : v ? l.jsxs("div", {
      className: "min-h-screen flex flex-col items-center justify-center",
      children: [l.jsx("h1", {
        className: "text-2xl font-bold mb-4",
        children: "測驗已結束"
      }), l.jsx("p", {
        className: "mb-6",
        children: "此測驗已超過結束時間或尚未開始"
      }), l.jsx(me, {
        onClick: () => t("/"),
        children: "返回首頁"
      })]
    }) : c ? l.jsxs("div", {
      className: "min-h-screen bg-gray-50 pb-8",
      children: [l.jsx("div", {
        className: "sticky top-0 bg-white shadow-md z-10",
        children: l.jsx("div", {
          className: "container mx-auto py-4 px-4 sm:px-6 lg:px-8",
          children: l.jsxs("div", {
            className: "flex flex-col sm:flex-row justify-between items-center",
            children: [l.jsxs("div", {
              children: [l.jsx("h1", {
                className: "text-xl font-bold",
                children: n == null ? void 0 : n.title
              }), l.jsxs("p", {
                className: "text-sm text-gray-500",
                children: ["應試者: ", f]
              })]
            }), l.jsxs("div", {
              className: "flex items-center mt-4 sm:mt-0",
              children: [l.jsxs("div", {
                className: "text-right mr-4",
                children: [l.jsx("p", {
                  className: "text-sm text-gray-500",
                  children: "剩餘時間"
                }), l.jsx("p", {
                  className: "font-mono text-lg",
                  children: j(x || 0)
                })]
              }), l.jsx(me, {
                onClick: () => g(!0),
                children: "提交測驗"
              })]
            })]
          })
        })
      }), l.jsxs("div", {
        className: "container mx-auto px-4 sm:px-6 lg:px-8 py-8",
        children: [(n == null ? void 0 : n.description) && l.jsxs("div", {
          className: "bg-white rounded-lg shadow-sm p-6 mb-6",
          children: [l.jsx("h2", {
            className: "font-medium mb-2",
            children: "測驗說明"
          }), l.jsx("p", {
            className: "text-gray-600",
            children: n.description
          })]
        }), l.jsx(ci, {
          ...E,
          children: l.jsxs("form", {
            className: "space-y-8",
            children: [s == null ? void 0 : s.questions.map((P, O) => l.jsxs("div", {
              className: "bg-white rounded-lg shadow-sm p-6",
              children: [l.jsxs("h3", {
                className: "font-medium text-lg mb-4",
                children: [O + 1, ". ", P.title]
              }), P.type === "single" && l.jsx(qe, {
                control: E.control,
                name: `${P.id}`,
                render: ({
                  field: z
                }) => {
                  var R;
                  return l.jsxs(Ye, {
                    children: [l.jsx(et, {
                      children: l.jsx(Wc, {
                        onValueChange: D => z.onChange([D]),
                        defaultValue: (R = z.value) == null ? void 0 : R[0],
                        className: "space-y-3",
                        children: P.options.map(D => l.jsxs("div", {
                          className: "flex items-center space-x-2",
                          children: [l.jsx(Hc, {
                            value: D.id,
                            id: D.id
                          }), l.jsx(Je, {
                            htmlFor: D.id,
                            className: "cursor-pointer",
                            children: D.isImage ? l.jsx("div", {
                              className: "h-24 w-32 bg-gray-200 rounded flex items-center justify-center",
                              children: D.imageUrl ? l.jsx("img", {
                                src: D.imageUrl,
                                alt: D.text,
                                className: "max-h-full max-w-full object-contain"
                              }) : l.jsx("span", {
                                className: "text-sm text-gray-500",
                                children: "圖片選項"
                              })
                            }) : D.text
                          })]
                        }, D.id))
                      })
                    }), l.jsx(tt, {})]
                  })
                }
              }), P.type === "multiple" && l.jsx(qe, {
                control: E.control,
                name: `${P.id}`,
                render: ({
                  field: z
                }) => l.jsxs(Ye, {
                  children: [l.jsx("div", {
                    className: "space-y-3",
                    children: P.options.map(R => l.jsxs("div", {
                      className: "flex items-center space-x-2",
                      children: [l.jsx(et, {
                        children: l.jsx(ui, {
                          checked: (z.value || []).includes(R.id),
                          onCheckedChange: D => {
                            const I = z.value || [];
                            D ? z.onChange([...I, R.id]) : z.onChange(I.filter(G => G !== R.id))
                          }
                        })
                      }), l.jsx(Je, {
                        className: "cursor-pointer",
                        children: R.isImage ? l.jsx("div", {
                          className: "h-24 w-32 bg-gray-200 rounded flex items-center justify-center",
                          children: R.imageUrl ? l.jsx("img", {
                            src: R.imageUrl,
                            alt: R.text,
                            className: "max-h-full max-w-full object-contain"
                          }) : l.jsx("span", {
                            className: "text-sm text-gray-500",
                            children: "圖片選項"
                          })
                        }) : R.text
                      })]
                    }, R.id))
                  }), l.jsx(tt, {})]
                })
              }), P.type === "truefalse" && l.jsx(qe, {
                control: E.control,
                name: `${P.id}`,
                render: ({
                  field: z
                }) => {
                  var R;
                  return l.jsxs(Ye, {
                    children: [l.jsx(et, {
                      children: l.jsx(Wc, {
                        onValueChange: D => z.onChange([D]),
                        defaultValue: (R = z.value) == null ? void 0 : R[0],
                        className: "space-y-3",
                        children: P.options.map(D => l.jsxs("div", {
                          className: "flex items-center space-x-2",
                          children: [l.jsx(Hc, {
                            value: D.id,
                            id: D.id
                          }), l.jsx(Je, {
                            htmlFor: D.id,
                            className: "cursor-pointer",
                            children: D.text
                          })]
                        }, D.id))
                      })
                    }), l.jsx(tt, {})]
                  })
                }
              }), P.type === "openended" && l.jsx(qe, {
                control: E.control,
                name: `${P.id}`,
                render: ({
                  field: z
                }) => {
                  var R;
                  return l.jsxs(Ye, {
                    children: [l.jsx(et, {
                      children: l.jsx(Bu, {
                        placeholder: "請輸入您的回答",
                        className: "min-h-[100px]",
                        onChange: D => z.onChange([D.target.value]),
                        value: ((R = z.value) == null ? void 0 : R[0]) || ""
                      })
                    }), l.jsx(tt, {})]
                  })
                }
              })]
            }, P.id)), l.jsx("div", {
              className: "flex justify-end",
              children: l.jsx(me, {
                type: "button",
                onClick: () => g(!0),
                children: "提交測驗"
              })
            })]
          })
        })]
      }), l.jsx(oM, {
        open: b,
        onOpenChange: g,
        children: l.jsxs(ZE, {
          children: [l.jsxs(GE, {
            children: [l.jsx(YE, {
              children: "確認提交測驗？"
            }), l.jsx(QE, {
              children: "提交後將無法再修改您的答案。"
            })]
          }), l.jsxs(KE, {
            children: [l.jsx(qE, {
              children: "取消"
            }), l.jsx(XE, {
              onClick: C,
              children: "提交"
            })]
          })]
        })
      })]
    }) : l.jsx("div", {
      className: "min-h-screen flex items-center justify-center bg-gray-50",
      children: l.jsxs("div", {
        className: "max-w-md w-full p-8 bg-white rounded-lg shadow-md",
        children: [l.jsx("h1", {
          className: "text-2xl font-bold mb-6 text-center",
          children: n == null ? void 0 : n.title
        }), (n == null ? void 0 : n.description) && l.jsx("p", {
          className: "mb-6 text-gray-600 text-center",
          children: n.description
        }), l.jsx(ci, {
          ...S,
          children: l.jsxs("form", {
            onSubmit: S.handleSubmit(_),
            className: "space-y-6",
            children: [l.jsx(qe, {
              control: S.control,
              name: "participantName",
              render: ({
                field: P
              }) => l.jsxs(Ye, {
                children: [l.jsx(Je, {
                  children: "請輸入您的名稱/代號"
                }), l.jsx(et, {
                  children: l.jsx(rt, {
                    placeholder: "請輸入您的名稱",
                    ...P
                  })
                }), l.jsx(tt, {})]
              })
            }), l.jsx(me, {
              type: "submit",
              className: "w-full",
              children: "開始測驗"
            })]
          })
        })]
      })
    })
  },
  xm = d.forwardRef(({
    className: e,
    ...t
  }, n) => l.jsx("div", {
    className: "relative w-full overflow-auto",
    children: l.jsx("table", {
      ref: n,
      className: ee("w-full caption-bottom text-sm", e),
      ...t
    })
  }));
xm.displayName = "Table";
const wm = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx("thead", {
  ref: n,
  className: ee("[&_tr]:border-b", e),
  ...t
}));
wm.displayName = "TableHeader";
const bm = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx("tbody", {
  ref: n,
  className: ee("[&_tr:last-child]:border-0", e),
  ...t
}));
bm.displayName = "TableBody";
const cM = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx("tfoot", {
  ref: n,
  className: ee("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", e),
  ...t
}));
cM.displayName = "TableFooter";
const Fa = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx("tr", {
  ref: n,
  className: ee("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", e),
  ...t
}));
Fa.displayName = "TableRow";
const Wn = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx("th", {
  ref: n,
  className: ee("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", e),
  ...t
}));
Wn.displayName = "TableHead";
const Hn = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx("td", {
  ref: n,
  className: ee("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
  ...t
}));
Hn.displayName = "TableCell";
const uM = d.forwardRef(({
  className: e,
  ...t
}, n) => l.jsx("caption", {
  ref: n,
  className: ee("mt-4 text-sm text-muted-foreground", e),
  ...t
}));
uM.displayName = "TableCaption";
const dM = () => {
    const [e, t] = d.useState([]), n = hn(), r = qs();
    d.useEffect(() => {
      if (!r) {
        je({
          title: "請先登入",
          description: "您需要登入後才能查看測驗紀錄",
          variant: "destructive"
        }), n("/auth");
        return
      }
      s()
    }, [n, r]);
    const s = () => {
        if (r) try {
          const i = G2(r.email),
            a = new Date,
            c = i.map(u => {
              const f = F1(u.id),
                p = new Date(u.startTime),
                h = new Date(u.endTime),
                w = a >= p && a <= h;
              return {
                ...u,
                responsesCount: f.length,
                isActive: w
              }
            });
          c.sort((u, f) => new Date(f.createdAt).getTime() - new Date(u.createdAt).getTime()), t(c)
        } catch (i) {
          console.error("Error loading exams:", i), je({
            title: "加載失敗",
            description: "無法獲取測驗記錄",
            variant: "destructive"
          })
        }
      },
      o = i => {
        n(`/exam-record/${i}`)
      };
    return r ? l.jsxs("div", {
      className: "min-h-screen flex flex-col",
      children: [l.jsx(Er, {}), l.jsxs("main", {
        className: "flex-grow container mx-auto px-4 py-8",
        children: [l.jsxs("div", {
          className: "mb-8",
          children: [l.jsx("h1", {
            className: "text-3xl font-bold mb-4",
            children: "測驗紀錄"
          }), l.jsx("p", {
            className: "text-gray-600",
            children: "查看所有您建立的測驗及其結果"
          })]
        }), e.length > 0 ? l.jsx(vt, {
          children: l.jsxs(xm, {
            children: [l.jsx(wm, {
              children: l.jsxs(Fa, {
                children: [l.jsx(Wn, {
                  children: "測驗標題"
                }), l.jsx(Wn, {
                  children: "建立時間"
                }), l.jsx(Wn, {
                  children: "有效期間"
                }), l.jsx(Wn, {
                  children: "狀態"
                }), l.jsx(Wn, {
                  children: "受試人數"
                }), l.jsx(Wn, {
                  className: "text-right",
                  children: "操作"
                })]
              })
            }), l.jsx(bm, {
              children: e.map(i => {
                const a = new Date(i.startTime).toLocaleDateString("zh-TW"),
                  c = new Date(i.endTime).toLocaleDateString("zh-TW"),
                  u = new Date(i.createdAt).toLocaleDateString("zh-TW");
                return l.jsxs(Fa, {
                  children: [l.jsx(Hn, {
                    className: "font-medium",
                    children: i.title
                  }), l.jsx(Hn, {
                    children: u
                  }), l.jsxs(Hn, {
                    children: [a, " - ", c]
                  }), l.jsx(Hn, {
                    children: l.jsx("span", {
                      className: `px-2 py-1 rounded-full text-xs ${i.isActive?"bg-green-100 text-green-800":"bg-gray-100 text-gray-800"}`,
                      children: i.isActive ? "進行中" : "已結束"
                    })
                  }), l.jsx(Hn, {
                    children: i.responsesCount
                  }), l.jsx(Hn, {
                    className: "text-right",
                    children: l.jsx(me, {
                      variant: "outline",
                      size: "sm",
                      onClick: () => o(i.id),
                      children: "查看詳情"
                    })
                  })]
                }, i.id)
              })
            })]
          })
        }) : l.jsxs(vt, {
          className: "p-8 text-center",
          children: [l.jsx("p", {
            className: "text-gray-500 mb-4",
            children: "您尚未建立任何測驗"
          }), l.jsx(me, {
            onClick: () => n("/create-exam"),
            children: "建立測驗"
          })]
        })]
      }), l.jsx(Cr, {})]
    }) : l.jsx("div", {
      className: "min-h-screen flex items-center justify-center",
      children: "重新導向登入頁面..."
    })
  },
  fM = () => {
    const {
      recordId: e
    } = t1(), t = hn(), [n, r] = d.useState(null), [s, o] = d.useState(null), [i, a] = d.useState([]), [c, u] = d.useState(null), [f, p] = d.useState(!0), h = qs();
    d.useEffect(() => {
      if (!h) {
        je({
          title: "請先登入",
          description: "您需要登入後才能查看測驗記錄",
          variant: "destructive"
        }), t("/auth");
        return
      }
      if (!e) {
        je({
          title: "記錄不存在",
          description: "找不到指定的測驗記錄",
          variant: "destructive"
        }), t("/exam-records");
        return
      }
      w()
    }, [e, t, h]);
    const w = async () => {
      if (!(!e || !h)) try {
        const S = M1(e);
        if (!S) {
          je({
            title: "測驗不存在",
            description: "找不到指定的測驗",
            variant: "destructive"
          }), t("/exam-records");
          return
        }
        if (S.creatorEmail !== h.email) {
          je({
            title: "無權限",
            description: "您沒有權限查看此測驗記錄",
            variant: "destructive"
          }), t("/exam-records");
          return
        }
        r(S);
        const E = Yh(S.sheetId);
        if (!E) {
          je({
            title: "學習單不存在",
            description: "找不到測驗關聯的學習單",
            variant: "destructive"
          }), t("/exam-records");
          return
        }
        o(E);
        const C = F1(e).map(j => ({
          ...j,
          formattedDuration: x(j.duration)
        }));
        a(C), C.length > 0 && u(C[0].id), p(!1)
      } catch (S) {
        console.error("Error loading exam details:", S), je({
          title: "讀取錯誤",
          description: "無法讀取測驗記錄數據",
          variant: "destructive"
        }), t("/exam-records")
      }
    }, x = S => {
      const E = Math.floor(S / 60),
        _ = S % 60;
      return `${E}分${_}秒`
    }, m = () => c ? i.find(S => S.id === c) : null, b = S => s == null ? void 0 : s.questions.find(E => E.id === S), g = (S, E) => {
      const _ = b(S);
      if (!_) return "";
      const C = _.options.find(j => j.id === E);
      return C ? C.text : ""
    }, v = (S, E) => {
      const _ = b(S);
      if (!_) return !1;
      if (_.type === "openended") return !0;
      if (_.type === "single" || _.type === "truefalse") return _.correctAnswers[0] === E[0];
      if (_.type === "multiple") {
        const C = new Set(_.correctAnswers),
          j = new Set(E);
        for (const P of E)
          if (!C.has(P)) return !1;
        for (const P of _.correctAnswers)
          if (!j.has(P)) return !1;
        return !0
      }
      return !1
    };
    if (f) return l.jsx("div", {
      className: "min-h-screen flex items-center justify-center",
      children: l.jsx("p", {
        className: "text-xl",
        children: "載入測驗記錄中..."
      })
    });
    const y = m();
    return l.jsxs("div", {
      className: "min-h-screen flex flex-col",
      children: [l.jsx(Er, {}), l.jsxs("main", {
        className: "flex-grow container mx-auto px-4 py-8",
        children: [l.jsxs("div", {
          className: "mb-6 flex justify-between items-center",
          children: [l.jsxs("div", {
            children: [l.jsx("h1", {
              className: "text-3xl font-bold",
              children: n == null ? void 0 : n.title
            }), l.jsxs("p", {
              className: "text-gray-600 mt-1",
              children: ["測驗期間: ", new Date((n == null ? void 0 : n.startTime) || "").toLocaleDateString("zh-TW"), " -", new Date((n == null ? void 0 : n.endTime) || "").toLocaleDateString("zh-TW")]
            })]
          }), l.jsx(me, {
            variant: "outline",
            onClick: () => t("/exam-records"),
            children: "返回列表"
          })]
        }), l.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-8",
          children: [l.jsxs(vt, {
            className: "md:col-span-1",
            children: [l.jsx(ln, {
              children: l.jsxs(cn, {
                children: ["受試者列表 (", i.length, ")"]
              })
            }), l.jsx(Nt, {
              children: i.length > 0 ? l.jsx("div", {
                className: "space-y-2",
                children: i.map(S => l.jsxs("div", {
                  className: `p-3 rounded-md cursor-pointer transition-colors ${c===S.id?"bg-blue-50 border border-blue-200":"hover:bg-gray-50 border border-gray-100"}`,
                  onClick: () => u(S.id),
                  children: [l.jsx("div", {
                    className: "font-medium",
                    children: S.participant
                  }), l.jsxs("div", {
                    className: "text-sm text-gray-500 mt-1",
                    children: ["完成時間: ", new Date(S.endTime).toLocaleString("zh-TW")]
                  }), l.jsxs("div", {
                    className: "text-sm text-gray-500",
                    children: ["花費時間: ", S.formattedDuration]
                  })]
                }, S.id))
              }) : l.jsx("p", {
                className: "text-gray-500 text-center py-4",
                children: "尚無受試記錄"
              })
            })]
          }), l.jsx(vt, {
            className: "md:col-span-2",
            children: y ? l.jsxs(l.Fragment, {
              children: [l.jsx(ln, {
                children: l.jsxs(cn, {
                  children: ["受試詳細資料 - ", y.participant]
                })
              }), l.jsx(Nt, {
                children: l.jsxs("div", {
                  className: "space-y-6",
                  children: [l.jsxs("div", {
                    className: "grid grid-cols-2 gap-4 text-sm",
                    children: [l.jsxs("div", {
                      children: [l.jsx("span", {
                        className: "font-medium",
                        children: "受試者: "
                      }), y.participant]
                    }), l.jsxs("div", {
                      children: [l.jsx("span", {
                        className: "font-medium",
                        children: "花費時間: "
                      }), y.formattedDuration]
                    }), l.jsxs("div", {
                      children: [l.jsx("span", {
                        className: "font-medium",
                        children: "開始時間: "
                      }), new Date(y.startTime).toLocaleString("zh-TW")]
                    }), l.jsxs("div", {
                      children: [l.jsx("span", {
                        className: "font-medium",
                        children: "完成時間: "
                      }), new Date(y.endTime).toLocaleString("zh-TW")]
                    })]
                  }), l.jsxs(ob, {
                    defaultValue: "answers",
                    children: [l.jsxs(em, {
                      children: [l.jsx(ba, {
                        value: "answers",
                        children: "答題詳情"
                      }), l.jsx(ba, {
                        value: "summary",
                        children: "統計摘要"
                      })]
                    }), l.jsx(Sa, {
                      value: "answers",
                      className: "pt-4",
                      children: l.jsx("div", {
                        className: "space-y-6",
                        children: s == null ? void 0 : s.questions.map((S, E) => {
                          const _ = y.answers.find(j => j.questionId === S.id),
                            C = _ ? v(S.id, _.answer) : !1;
                          return l.jsxs("div", {
                            className: "p-4 border rounded-md",
                            children: [l.jsxs("div", {
                              className: "flex justify-between items-start mb-2",
                              children: [l.jsxs("h3", {
                                className: "font-medium",
                                children: [E + 1, ". ", S.title]
                              }), S.type !== "openended" && l.jsx("span", {
                                className: `px-2 py-1 rounded text-xs ${C?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,
                                children: C ? "正確" : "錯誤"
                              })]
                            }), l.jsxs("div", {
                              className: "mt-2",
                              children: [l.jsx("p", {
                                className: "text-sm text-gray-600 mb-1",
                                children: "答案:"
                              }), S.type === "openended" ? l.jsx("div", {
                                className: "p-3 bg-gray-50 rounded",
                                children: (_ == null ? void 0 : _.answer[0]) || "未作答"
                              }) : l.jsxs("div", {
                                className: "space-y-1",
                                children: [_ == null ? void 0 : _.answer.map(j => l.jsx("div", {
                                  className: `p-2 rounded ${S.correctAnswers.includes(j)?"bg-green-50 border-l-4 border-green-500":"bg-red-50 border-l-4 border-red-500"}`,
                                  children: g(S.id, j)
                                }, j)), (!_ || _.answer.length === 0) && l.jsx("div", {
                                  className: "p-2 bg-gray-50 rounded",
                                  children: "未作答"
                                })]
                              })]
                            }), S.explanation && l.jsxs("div", {
                              className: "mt-4",
                              children: [l.jsx("p", {
                                className: "text-sm text-gray-600 mb-1",
                                children: "參考答案與解析:"
                              }), l.jsxs("div", {
                                className: "p-3 bg-blue-50 rounded",
                                children: [l.jsxs("div", {
                                  className: "mb-2",
                                  children: [l.jsx("span", {
                                    className: "font-medium",
                                    children: "正確答案: "
                                  }), S.type === "openended" ? "問答題無標準答案" : S.correctAnswers.map(j => g(S.id, j)).join(", ")]
                                }), S.explanation]
                              })]
                            })]
                          }, S.id)
                        })
                      })
                    }), l.jsx(Sa, {
                      value: "summary",
                      className: "pt-4",
                      children: l.jsx(vt, {
                        children: l.jsx(Nt, {
                          className: "pt-6",
                          children: l.jsxs(xm, {
                            children: [l.jsx(wm, {
                              children: l.jsxs(Fa, {
                                children: [l.jsx(Wn, {
                                  children: "題號"
                                }), l.jsx(Wn, {
                                  children: "題型"
                                }), l.jsx(Wn, {
                                  children: "結果"
                                })]
                              })
                            }), l.jsx(bm, {
                              children: s == null ? void 0 : s.questions.map((S, E) => {
                                const _ = y.answers.find(P => P.questionId === S.id),
                                  C = _ ? v(S.id, _.answer) : !1,
                                  j = S.type === "single" ? "單選題" : S.type === "multiple" ? "多選題" : S.type === "truefalse" ? "是非題" : "問答題";
                                return l.jsxs(Fa, {
                                  children: [l.jsx(Hn, {
                                    children: E + 1
                                  }), l.jsx(Hn, {
                                    children: j
                                  }), l.jsx(Hn, {
                                    children: S.type === "openended" ? l.jsx("span", {
                                      className: "text-blue-600",
                                      children: "已完成"
                                    }) : l.jsx("span", {
                                      className: C ? "text-green-600" : "text-red-600",
                                      children: C ? "正確" : "錯誤"
                                    })
                                  })]
                                }, S.id)
                              })
                            })]
                          })
                        })
                      })
                    })]
                  })]
                })
              })]
            }) : l.jsx(Nt, {
              className: "flex flex-col items-center justify-center py-16",
              children: i.length > 0 ? l.jsx("p", {
                className: "text-gray-500",
                children: "請從左側選擇一個受試者"
              }) : l.jsx("p", {
                className: "text-gray-500",
                children: "此測驗尚無受試記錄"
              })
            })
          })]
        })]
      }), l.jsx(Cr, {})]
    })
  },
  pM = new LP,
  hM = () => l.jsx($P, {
    client: pM,
    children: l.jsxs(mP, {
      children: [l.jsx(nk, {}), l.jsx(Rk, {}), l.jsx(DR, {
        children: l.jsxs(jR, {
          children: [l.jsx(Ht, {
            path: "/",
            element: l.jsx(Y2, {})
          }), l.jsx(Ht, {
            path: "/learning-sheets",
            element: l.jsx(Q2, {})
          }), l.jsx(Ht, {
            path: "/auth",
            element: l.jsx(IO, {})
          }), l.jsx(Ht, {
            path: "/dashboard",
            element: l.jsx(MO, {})
          }), l.jsx(Ht, {
            path: "/edit-profile",
            element: l.jsx(LO, {})
          }), l.jsx(Ht, {
            path: "/create-sheet",
            element: l.jsx(aI, {})
          }), l.jsx(Ht, {
            path: "/favorites",
            element: l.jsx(lI, {})
          }), l.jsx(Ht, {
            path: "/create-exam",
            element: l.jsx(cI, {})
          }), l.jsx(Ht, {
            path: "/exam/:examId",
            element: l.jsx(lM, {})
          }), l.jsx(Ht, {
            path: "/exam-records",
            element: l.jsx(dM, {})
          }), l.jsx(Ht, {
            path: "/exam-record/:recordId",
            element: l.jsx(fM, {})
          }), l.jsx(Ht, {
            path: "*",
            element: l.jsx(X2, {})
          })]
        })
      })]
    })
  });
x0(document.getElementById("root")).render(l.jsx(hM, {}));