/**
 * @vue/shared v3.4.34
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 */ /*! #__NO_SIDE_EFFECTS__ */ function wr(e, t) {
  const n = new Set(e.split(","));
  return (r) => n.has(r);
}
const ne = {},
  yt = [],
  Te = () => {},
  Pi = () => !1,
  Kt = (e) =>
    e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Er = (e) => e.startsWith("onUpdate:"),
  fe = Object.assign,
  Cr = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Ni = Object.prototype.hasOwnProperty,
  z = (e, t) => Ni.call(e, t),
  B = Array.isArray,
  _t = (e) => xn(e) === "[object Map]",
  zs = (e) => xn(e) === "[object Set]",
  K = (e) => typeof e == "function",
  ie = (e) => typeof e == "string",
  Qe = (e) => typeof e == "symbol",
  Z = (e) => e !== null && typeof e == "object",
  Js = (e) => (Z(e) || K(e)) && K(e.then) && K(e.catch),
  Qs = Object.prototype.toString,
  xn = (e) => Qs.call(e),
  Fi = (e) => xn(e).slice(8, -1),
  Zs = (e) => xn(e) === "[object Object]",
  Sr = (e) =>
    ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  bt = wr(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  Tn = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  $i = /-(\w)/g,
  Oe = Tn((e) => e.replace($i, (t, n) => n ? n.toUpperCase() : "")),
  Hi = /\B([A-Z])/g,
  Ze = Tn((e) => e.replace(Hi, "-$1").toLowerCase()),
  An = Tn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  fn = Tn((e) => e ? `on${An(e)}` : ""),
  ze = (e, t) => !Object.is(e, t),
  dn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  eo = (e, t, n, r = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: r,
      value: n,
    });
  },
  cr = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  ji = (e) => {
    const t = ie(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let Jr;
const to = () =>
  Jr ||
  (Jr = typeof globalThis < "u"
    ? globalThis
    : typeof self < "u"
    ? self
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : {});
function xr(e) {
  if (B(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = ie(r) ? Bi(r) : xr(r);
      if (s) { for (const o in s) t[o] = s[o]; }
    }
    return t;
  } else if (ie(e) || Z(e)) return e;
}
const Vi = /;(?![^(]*\))/g, Di = /:([^]+)/, Ui = /\/\*[^]*?\*\//g;
function Bi(e) {
  const t = {};
  return e.replace(Ui, "").split(Vi).forEach((n) => {
    if (n) {
      const r = n.split(Di);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }),
    t;
}
function Tr(e) {
  let t = "";
  if (ie(e)) t = e;
  else if (B(e)) {
    for (let n = 0; n < e.length; n++) {
      const r = Tr(e[n]);
      r && (t += r + " ");
    }
  } else if (Z(e)) { for (const n in e) e[n] && (t += n + " "); }
  return t.trim();
}
const ki =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Ki = wr(ki);
function no(e) {
  return !!e || e === "";
}
const ro = (e) => !!(e && e.__v_isRef === !0),
  Wi = (e) =>
    ie(e)
      ? e
      : e == null
      ? ""
      : B(e) || Z(e) && (e.toString === Qs || !K(e.toString))
      ? ro(e) ? Wi(e.value) : JSON.stringify(e, so, 2)
      : String(e),
  so = (e, t) =>
    ro(t) ? so(e, t.value) : _t(t)
      ? {
        [`Map(${t.size})`]: [...t.entries()].reduce(
          (n, [r, s], o) => (n[kn(r, o) + " =>"] = s, n),
          {},
        ),
      }
      : zs(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => kn(n)) }
      : Qe(t)
      ? kn(t)
      : Z(t) && !B(t) && !Zs(t)
      ? String(t)
      : t,
  kn = (e, t = "") => {
    var n;
    return Qe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  }; /**
 * @vue/reactivity v3.4.34
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 */

let we;
class qi {
  constructor(t = !1) {
    this.detached = t,
      this._active = !0,
      this.effects = [],
      this.cleanups = [],
      this.parent = we,
      !t && we && (this.index = (we.scopes || (we.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = we;
      try {
        return we = this, t();
      } finally {
        we = n;
      }
    }
  }
  on() {
    we = this;
  }
  off() {
    we = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.scopes) {
        for (n = 0, r = this.scopes.length; n < r; n++) {
          this.scopes[n].stop(!0);
        }
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this &&
          (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Gi(e, t = we) {
  t && t.active && t.effects.push(e);
}
function oo() {
  return we;
}
function Xi(e) {
  we && we.cleanups.push(e);
}
let ct;
class Ar {
  constructor(t, n, r, s) {
    this.fn = t,
      this.trigger = n,
      this.scheduler = r,
      this.active = !0,
      this.deps = [],
      this._dirtyLevel = 4,
      this._trackId = 0,
      this._runnings = 0,
      this._shouldSchedule = !1,
      this._depsLength = 0,
      Gi(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, et();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Yi(n.computed), this._dirtyLevel >= 4)) break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), tt();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active) return this.fn();
    let t = Xe, n = ct;
    try {
      return Xe = !0, ct = this, this._runnings++, Qr(this), this.fn();
    } finally {
      Zr(this), this._runnings--, ct = n, Xe = t;
    }
  }
  stop() {
    this.active &&
      (Qr(this), Zr(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Yi(e) {
  return e.value;
}
function Qr(e) {
  e._trackId++, e._depsLength = 0;
}
function Zr(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) io(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function io(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n &&
    (e.delete(t), e.size === 0 && e.cleanup());
}
let Xe = !0, ar = 0;
const lo = [];
function et() {
  lo.push(Xe), Xe = !1;
}
function tt() {
  const e = lo.pop();
  Xe = e === void 0 ? !0 : e;
}
function Rr() {
  ar++;
}
function Or() {
  for (ar--; !ar && ur.length;) ur.shift()();
}
function co(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== t ? (r && io(r, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const ur = [];
function ao(e, t, n) {
  Rr();
  for (const r of e.keys()) {
    let s;
    r._dirtyLevel < t && (s ?? (s = e.get(r) === r._trackId)) &&
    (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0),
      r._dirtyLevel = t),
      r._shouldSchedule && (s ?? (s = e.get(r) === r._trackId)) &&
      (r.trigger(),
        (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 &&
        (r._shouldSchedule = !1, r.scheduler && ur.push(r.scheduler)));
  }
  Or();
}
const uo = (e, t) => {
    const n = new Map();
    return n.cleanup = e, n.computed = t, n;
  },
  yn = new WeakMap(),
  at = Symbol(""),
  fr = Symbol("");
function be(e, t, n) {
  if (Xe && ct) {
    let r = yn.get(e);
    r || yn.set(e, r = new Map());
    let s = r.get(n);
    s || r.set(n, s = uo(() => r.delete(n))), co(ct, s);
  }
}
function Ve(e, t, n, r, s, o) {
  const i = yn.get(e);
  if (!i) return;
  let l = [];
  if (t === "clear") l = [...i.values()];
  else if (n === "length" && B(e)) {
    const c = Number(r);
    i.forEach((u, f) => {
      (f === "length" || !Qe(f) && f >= c) && l.push(u);
    });
  } else {switch (n !== void 0 && l.push(i.get(n)), t) {
      case "add":
        B(e)
          ? Sr(n) && l.push(i.get("length"))
          : (l.push(i.get(at)), _t(e) && l.push(i.get(fr)));
        break;
      case "delete":
        B(e) || (l.push(i.get(at)), _t(e) && l.push(i.get(fr)));
        break;
      case "set":
        _t(e) && l.push(i.get(at));
        break;
    }}
  Rr();
  for (const c of l) c && ao(c, 4);
  Or();
}
function zi(e, t) {
  const n = yn.get(e);
  return n && n.get(t);
}
const Ji = wr("__proto__,__v_isRef,__isVue"),
  fo = new Set(
    Object.getOwnPropertyNames(Symbol).filter((e) =>
      e !== "arguments" && e !== "caller"
    ).map((e) => Symbol[e]).filter(Qe),
  ),
  es = Qi();
function Qi() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function (...n) {
      const r = J(this);
      for (let o = 0, i = this.length; o < i; o++) be(r, "get", o + "");
      const s = r[t](...n);
      return s === -1 || s === !1 ? r[t](...n.map(J)) : s;
    };
  }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        et(), Rr();
        const r = J(this)[t].apply(this, n);
        return Or(), tt(), r;
      };
    }),
    e;
}
function Zi(e) {
  Qe(e) || (e = String(e));
  const t = J(this);
  return be(t, "has", e), t.hasOwnProperty(e);
}
class ho {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    const s = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive") return !s;
    if (n === "__v_isReadonly") return s;
    if (n === "__v_isShallow") return o;
    if (n === "__v_raw") {
      return r === (s ? o ? dl : yo : o ? mo : go).get(t) ||
          Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0;
    }
    const i = B(t);
    if (!s) {
      if (i && z(es, n)) return Reflect.get(es, n, r);
      if (n === "hasOwnProperty") return Zi;
    }
    const l = Reflect.get(t, n, r);
    return (Qe(n) ? fo.has(n) : Ji(n)) || (s || be(t, "get", n), o)
      ? l
      : de(l)
      ? i && Sr(n) ? l : l.value
      : Z(l)
      ? s ? Ln(l) : On(l)
      : l;
  }
}
class po extends ho {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._isShallow) {
      const c = dt(o);
      if (!St(r) && !dt(r) && (o = J(o), r = J(r)), !B(t) && de(o) && !de(r)) {
        return c ? !1 : (o.value = r, !0);
      }
    }
    const i = B(t) && Sr(n) ? Number(n) < t.length : z(t, n),
      l = Reflect.set(t, n, r, s);
    return t === J(s) &&
      (i ? ze(r, o) && Ve(t, "set", n, r) : Ve(t, "add", n, r)),
      l;
  }
  deleteProperty(t, n) {
    const r = z(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && Ve(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Qe(n) || !fo.has(n)) && be(t, "has", n), r;
  }
  ownKeys(t) {
    return be(t, "iterate", B(t) ? "length" : at), Reflect.ownKeys(t);
  }
}
class el extends ho {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const tl = new po(), nl = new el(), rl = new po(!0);
const Lr = (e) => e, Rn = (e) => Reflect.getPrototypeOf(e);
function Jt(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const s = J(e), o = J(t);
  n || (ze(t, o) && be(s, "get", t), be(s, "get", o));
  const { has: i } = Rn(s), l = r ? Lr : n ? Pr : jt;
  if (i.call(s, t)) return l(e.get(t));
  if (i.call(s, o)) return l(e.get(o));
  e !== s && e.get(t);
}
function Qt(e, t = !1) {
  const n = this.__v_raw, r = J(n), s = J(e);
  return t || (ze(e, s) && be(r, "has", e), be(r, "has", s)),
    e === s ? n.has(e) : n.has(e) || n.has(s);
}
function Zt(e, t = !1) {
  return e = e.__v_raw,
    !t && be(J(e), "iterate", at),
    Reflect.get(e, "size", e);
}
function ts(e, t = !1) {
  !t && !St(e) && !dt(e) && (e = J(e));
  const n = J(this);
  return Rn(n).has.call(n, e) || (n.add(e), Ve(n, "add", e, e)), this;
}
function ns(e, t, n = !1) {
  !n && !St(t) && !dt(t) && (t = J(t));
  const r = J(this), { has: s, get: o } = Rn(r);
  let i = s.call(r, e);
  i || (e = J(e), i = s.call(r, e));
  const l = o.call(r, e);
  return r.set(e, t),
    i ? ze(t, l) && Ve(r, "set", e, t) : Ve(r, "add", e, t),
    this;
}
function rs(e) {
  const t = J(this), { has: n, get: r } = Rn(t);
  let s = n.call(t, e);
  s || (e = J(e), s = n.call(t, e)), r && r.call(t, e);
  const o = t.delete(e);
  return s && Ve(t, "delete", e, void 0), o;
}
function ss() {
  const e = J(this), t = e.size !== 0, n = e.clear();
  return t && Ve(e, "clear", void 0, void 0), n;
}
function en(e, t) {
  return function (r, s) {
    const o = this, i = o.__v_raw, l = J(i), c = t ? Lr : e ? Pr : jt;
    return !e && be(l, "iterate", at),
      i.forEach((u, f) => r.call(s, c(u), c(f), o));
  };
}
function tn(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      o = J(s),
      i = _t(o),
      l = e === "entries" || e === Symbol.iterator && i,
      c = e === "keys" && i,
      u = s[e](...r),
      f = n ? Lr : t ? Pr : jt;
    return !t && be(o, "iterate", c ? fr : at), {
      next() {
        const { value: h, done: m } = u.next();
        return m
          ? { value: h, done: m }
          : { value: l ? [f(h[0]), f(h[1])] : f(h), done: m };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  };
}
function Ue(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function sl() {
  const e = {
      get(o) {
        return Jt(this, o);
      },
      get size() {
        return Zt(this);
      },
      has: Qt,
      add: ts,
      set: ns,
      delete: rs,
      clear: ss,
      forEach: en(!1, !1),
    },
    t = {
      get(o) {
        return Jt(this, o, !1, !0);
      },
      get size() {
        return Zt(this);
      },
      has: Qt,
      add(o) {
        return ts.call(this, o, !0);
      },
      set(o, i) {
        return ns.call(this, o, i, !0);
      },
      delete: rs,
      clear: ss,
      forEach: en(!1, !0),
    },
    n = {
      get(o) {
        return Jt(this, o, !0);
      },
      get size() {
        return Zt(this, !0);
      },
      has(o) {
        return Qt.call(this, o, !0);
      },
      add: Ue("add"),
      set: Ue("set"),
      delete: Ue("delete"),
      clear: Ue("clear"),
      forEach: en(!0, !1),
    },
    r = {
      get(o) {
        return Jt(this, o, !0, !0);
      },
      get size() {
        return Zt(this, !0);
      },
      has(o) {
        return Qt.call(this, o, !0);
      },
      add: Ue("add"),
      set: Ue("set"),
      delete: Ue("delete"),
      clear: Ue("clear"),
      forEach: en(!0, !0),
    };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = tn(o, !1, !1),
      n[o] = tn(o, !0, !1),
      t[o] = tn(o, !1, !0),
      r[o] = tn(o, !0, !0);
  }),
    [e, n, t, r];
}
const [ol, il, ll, cl] = sl();
function Mr(e, t) {
  const n = t ? e ? cl : ll : e ? il : ol;
  return (r, s, o) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
      ? e
      : s === "__v_raw"
      ? r
      : Reflect.get(z(n, s) && s in r ? n : r, s, o);
}
const al = { get: Mr(!1, !1) },
  ul = { get: Mr(!1, !0) },
  fl = { get: Mr(!0, !1) };
const go = new WeakMap(),
  mo = new WeakMap(),
  yo = new WeakMap(),
  dl = new WeakMap();
function hl(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function pl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : hl(Fi(e));
}
function On(e) {
  return dt(e) ? e : Ir(e, !1, tl, al, go);
}
function gl(e) {
  return Ir(e, !1, rl, ul, mo);
}
function Ln(e) {
  return Ir(e, !0, nl, fl, yo);
}
function Ir(e, t, n, r, s) {
  if (!Z(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const o = s.get(e);
  if (o) return o;
  const i = pl(e);
  if (i === 0) return e;
  const l = new Proxy(e, i === 2 ? r : n);
  return s.set(e, l), l;
}
function vt(e) {
  return dt(e) ? vt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function dt(e) {
  return !!(e && e.__v_isReadonly);
}
function St(e) {
  return !!(e && e.__v_isShallow);
}
function _o(e) {
  return e ? !!e.__v_raw : !1;
}
function J(e) {
  const t = e && e.__v_raw;
  return t ? J(t) : e;
}
function hn(e) {
  return Object.isExtensible(e) && eo(e, "__v_skip", !0), e;
}
const jt = (e) => Z(e) ? On(e) : e, Pr = (e) => Z(e) ? Ln(e) : e;
class bo {
  constructor(t, n, r, s) {
    this.getter = t,
      this._setter = n,
      this.dep = void 0,
      this.__v_isRef = !0,
      this.__v_isReadonly = !1,
      this.effect = new Ar(
        () => t(this._value),
        () => Mt(this, this.effect._dirtyLevel === 2 ? 2 : 3),
      ),
      this.effect.computed = this,
      this.effect.active = this._cacheable = !s,
      this.__v_isReadonly = r;
  }
  get value() {
    const t = J(this);
    return (!t._cacheable || t.effect.dirty) &&
      ze(t._value, t._value = t.effect.run()) && Mt(t, 4),
      Nr(t),
      t.effect._dirtyLevel >= 2 && Mt(t, 2),
      t._value;
  }
  set value(t) {
    this._setter(t);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
}
function ml(e, t, n = !1) {
  let r, s;
  const o = K(e);
  return o ? (r = e, s = Te) : (r = e.get, s = e.set), new bo(r, s, o || !s, n);
}
function Nr(e) {
  var t;
  Xe && ct &&
    (e = J(e),
      co(
        ct,
        (t = e.dep) != null
          ? t
          : e.dep = uo(() => e.dep = void 0, e instanceof bo ? e : void 0),
      ));
}
function Mt(e, t = 4, n, r) {
  e = J(e);
  const s = e.dep;
  s && ao(s, t);
}
function de(e) {
  return !!(e && e.__v_isRef === !0);
}
function oe(e) {
  return vo(e, !1);
}
function Fr(e) {
  return vo(e, !0);
}
function vo(e, t) {
  return de(e) ? e : new yl(e, t);
}
class yl {
  constructor(t, n) {
    this.__v_isShallow = n,
      this.dep = void 0,
      this.__v_isRef = !0,
      this._rawValue = n ? t : J(t),
      this._value = n ? t : jt(t);
  }
  get value() {
    return Nr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || St(t) || dt(t);
    t = n ? t : J(t),
      ze(t, this._rawValue) &&
      (this._rawValue,
        this._rawValue = t,
        this._value = n ? t : jt(t),
        Mt(this, 4));
  }
}
function wo(e) {
  return de(e) ? e.value : e;
}
const _l = {
  get: (e, t, n) => wo(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return de(s) && !de(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  },
};
function Eo(e) {
  return vt(e) ? e : new Proxy(e, _l);
}
class bl {
  constructor(t) {
    this.dep = void 0, this.__v_isRef = !0;
    const { get: n, set: r } = t(() => Nr(this), () => Mt(this));
    this._get = n, this._set = r;
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function vl(e) {
  return new bl(e);
}
class wl {
  constructor(t, n, r) {
    this._object = t,
      this._key = n,
      this._defaultValue = r,
      this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return zi(J(this._object), this._key);
  }
}
class El {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function Cl(e, t, n) {
  return de(e)
    ? e
    : K(e)
    ? new El(e)
    : Z(e) && arguments.length > 1
    ? Sl(e, t, n)
    : oe(e);
}
function Sl(e, t, n) {
  const r = e[t];
  return de(r) ? r : new wl(e, t, n);
} /**
 * @vue/runtime-core v3.4.34
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 */

function Ye(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Wt(s, t, n);
  }
}
function Ae(e, t, n, r) {
  if (K(e)) {
    const s = Ye(e, t, n, r);
    return s && Js(s) && s.catch((o) => {
      Wt(o, t, n);
    }),
      s;
  }
  if (B(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++) s.push(Ae(e[o], t, n, r));
    return s;
  }
}
function Wt(e, t, n, r = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, l = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o;) {
      const u = o.ec;
      if (u) {
        for (let f = 0; f < u.length; f++) if (u[f](e, i, l) === !1) return;
      }
      o = o.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      et(), Ye(c, null, 10, [e, i, l]), tt();
      return;
    }
  }
  xl(e, n, s, r);
}
function xl(e, t, n, r = !0) {
  console.error(e);
}
let Vt = !1, dr = !1;
const pe = [];
let Ne = 0;
const wt = [];
let Ke = null, it = 0;
const Co = Promise.resolve();
let $r = null;
function Mn(e) {
  const t = $r || Co;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Tl(e) {
  let t = Ne + 1, n = pe.length;
  for (; t < n;) {
    const r = t + n >>> 1, s = pe[r], o = Dt(s);
    o < e || o === e && s.pre ? t = r + 1 : n = r;
  }
  return t;
}
function In(e) {
  (!pe.length || !pe.includes(e, Vt && e.allowRecurse ? Ne + 1 : Ne)) &&
    (e.id == null ? pe.push(e) : pe.splice(Tl(e.id), 0, e), So());
}
function So() {
  !Vt && !dr && (dr = !0, $r = Co.then(xo));
}
function Al(e) {
  const t = pe.indexOf(e);
  t > Ne && pe.splice(t, 1);
}
function Rl(e) {
  B(e)
    ? wt.push(...e)
    : (!Ke || !Ke.includes(e, e.allowRecurse ? it + 1 : it)) && wt.push(e),
    So();
}
function os(e, t, n = Vt ? Ne + 1 : 0) {
  for (; n < pe.length; n++) {
    const r = pe[n];
    if (r && r.pre) {
      if (e && r.id !== e.uid) continue;
      pe.splice(n, 1), n--, r();
    }
  }
}
function _n(e) {
  if (wt.length) {
    const t = [...new Set(wt)].sort((n, r) => Dt(n) - Dt(r));
    if (wt.length = 0, Ke) {
      Ke.push(...t);
      return;
    }
    for (Ke = t, it = 0; it < Ke.length; it++) {
      const n = Ke[it];
      n.active !== !1 && n();
    }
    Ke = null, it = 0;
  }
}
const Dt = (e) => e.id == null ? 1 / 0 : e.id,
  Ol = (e, t) => {
    const n = Dt(e) - Dt(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function xo(e) {
  dr = !1, Vt = !0, pe.sort(Ol);
  try {
    for (Ne = 0; Ne < pe.length; Ne++) {
      const t = pe[Ne];
      t && t.active !== !1 && Ye(t, t.i, t.i ? 15 : 14);
    }
  } finally {
    Ne = 0,
      pe.length = 0,
      _n(),
      Vt = !1,
      $r = null,
      (pe.length || wt.length) && xo();
  }
}
let ue = null, Pn = null;
function bn(e) {
  const t = ue;
  return ue = e, Pn = e && e.type.__scopeId || null, t;
}
function cu(e) {
  Pn = e;
}
function au() {
  Pn = null;
}
function Ll(e, t = ue, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && ws(-1);
    const o = bn(t);
    let i;
    try {
      i = e(...s);
    } finally {
      bn(o), r._d && ws(1);
    }
    return i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function uu(e, t) {
  if (ue === null) return e;
  const n = Vn(ue), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [o, i, l, c = ne] = t[s];
    o &&
      (K(o) && (o = { mounted: o, updated: o }),
        o.deep && Ge(i),
        r.push({
          dir: o,
          instance: n,
          value: i,
          oldValue: void 0,
          arg: l,
          modifiers: c,
        }));
  }
  return e;
}
function Pe(e, t, n, r) {
  const s = e.dirs, o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    o && (l.oldValue = o[i].value);
    let c = l.dir[r];
    c && (et(), Ae(c, n, 8, [e.el, l, e, t]), tt());
  }
}
const We = Symbol("_leaveCb"), nn = Symbol("_enterCb");
function Ml() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return Tt(() => {
    e.isMounted = !0;
  }),
    Mo(() => {
      e.isUnmounting = !0;
    }),
    e;
}
const Ce = [Function, Array],
  To = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Ce,
    onEnter: Ce,
    onAfterEnter: Ce,
    onEnterCancelled: Ce,
    onBeforeLeave: Ce,
    onLeave: Ce,
    onAfterLeave: Ce,
    onLeaveCancelled: Ce,
    onBeforeAppear: Ce,
    onAppear: Ce,
    onAfterAppear: Ce,
    onAppearCancelled: Ce,
  },
  Ao = (e) => {
    const t = e.subTree;
    return t.component ? Ao(t.component) : t;
  },
  Il = {
    name: "BaseTransition",
    props: To,
    setup(e, { slots: t }) {
      const n = jn(), r = Ml();
      return () => {
        const s = t.default && Oo(t.default(), !0);
        if (!s || !s.length) return;
        let o = s[0];
        if (s.length > 1) {
          for (const m of s) {
            if (m.type !== me) {
              o = m;
              break;
            }
          }
        }
        const i = J(e), { mode: l } = i;
        if (r.isLeaving) return Kn(o);
        const c = is(o);
        if (!c) return Kn(o);
        let u = hr(c, i, r, n, (m) => u = m);
        vn(c, u);
        const f = n.subTree, h = f && is(f);
        if (h && h.type !== me && !lt(c, h) && Ao(n).type !== me) {
          const m = hr(h, i, r, n);
          if (vn(h, m), l === "out-in" && c.type !== me) {
            return r.isLeaving = !0,
              m.afterLeave = () => {
                r.isLeaving = !1,
                  n.update.active !== !1 && (n.effect.dirty = !0, n.update());
              },
              Kn(o);
          }
          l === "in-out" && c.type !== me && (m.delayLeave = (v, S, O) => {
            const k = Ro(r, h);
            k[String(h.key)] = h,
              v[We] = () => {
                S(), v[We] = void 0, delete u.delayedLeave;
              },
              u.delayedLeave = O;
          });
        }
        return o;
      };
    },
  },
  Pl = Il;
function Ro(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = Object.create(null), n.set(t.type, r)), r;
}
function hr(e, t, n, r, s) {
  const {
      appear: o,
      mode: i,
      persisted: l = !1,
      onBeforeEnter: c,
      onEnter: u,
      onAfterEnter: f,
      onEnterCancelled: h,
      onBeforeLeave: m,
      onLeave: v,
      onAfterLeave: S,
      onLeaveCancelled: O,
      onBeforeAppear: k,
      onAppear: W,
      onAfterAppear: D,
      onAppearCancelled: p,
    } = t,
    y = String(e.key),
    I = Ro(n, e),
    T = (M, _) => {
      M && Ae(M, r, 9, _);
    },
    F = (M, _) => {
      const N = _[1];
      T(M, _),
        B(M) ? M.every((x) => x.length <= 1) && N() : M.length <= 1 && N();
    },
    $ = {
      mode: i,
      persisted: l,
      beforeEnter(M) {
        let _ = c;
        if (!n.isMounted) {
          if (o) _ = k || c;
          else return;
        }
        M[We] && M[We](!0);
        const N = I[y];
        N && lt(e, N) && N.el[We] && N.el[We](), T(_, [M]);
      },
      enter(M) {
        let _ = u, N = f, x = h;
        if (!n.isMounted) {
          if (o) _ = W || u, N = D || f, x = p || h;
          else return;
        }
        let G = !1;
        const ee = M[nn] = (re) => {
          G ||
            (G = !0,
              re ? T(x, [M]) : T(N, [M]),
              $.delayedLeave && $.delayedLeave(),
              M[nn] = void 0);
        };
        _ ? F(_, [M, ee]) : ee();
      },
      leave(M, _) {
        const N = String(e.key);
        if (M[nn] && M[nn](!0), n.isUnmounting) return _();
        T(m, [M]);
        let x = !1;
        const G = M[We] = (ee) => {
          x ||
            (x = !0,
              _(),
              ee ? T(O, [M]) : T(S, [M]),
              M[We] = void 0,
              I[N] === e && delete I[N]);
        };
        I[N] = e, v ? F(v, [M, G]) : G();
      },
      clone(M) {
        const _ = hr(M, t, n, r, s);
        return s && s(_), _;
      },
    };
  return $;
}
function Kn(e) {
  if (qt(e)) return e = Je(e), e.children = null, e;
}
function is(e) {
  if (!qt(e)) return e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && K(n.default)) return n.default();
  }
}
function vn(e, t) {
  e.shapeFlag & 6 && e.component
    ? vn(e.component.subTree, t)
    : e.shapeFlag & 128
    ? (e.ssContent.transition = t.clone(e.ssContent),
      e.ssFallback.transition = t.clone(e.ssFallback))
    : e.transition = t;
}
function Oo(e, t = !1, n) {
  let r = [], s = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === _e
      ? (i.patchFlag & 128 && s++, r = r.concat(Oo(i.children, t, l)))
      : (t || i.type !== me) && r.push(l != null ? Je(i, { key: l }) : i);
  }
  if (s > 1) { for (let o = 0; o < r.length; o++) r[o].patchFlag = -2; }
  return r;
} /*! #__NO_SIDE_EFFECTS__ */
function Hr(e, t) {
  return K(e) ? fe({ name: e.name }, t, { setup: e }) : e;
}
const Et = (e) => !!e.type.__asyncLoader; /*! #__NO_SIDE_EFFECTS__ */
function fu(e) {
  K(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: r,
    delay: s = 200,
    timeout: o,
    suspensible: i = !0,
    onError: l,
  } = e;
  let c = null, u, f = 0;
  const h = () => (f++, c = null, m()),
    m = () => {
      let v;
      return c || (v = c = t().catch((S) => {
        if (S = S instanceof Error ? S : new Error(String(S)), l) {
          return new Promise((O, k) => {
            l(S, () => O(h()), () => k(S), f + 1);
          });
        }
        throw S;
      }).then((S) =>
        v !== c && c
          ? c
          : (S && (S.__esModule || S[Symbol.toStringTag] === "Module") &&
            (S = S.default),
            u = S,
            S)
      ));
    };
  return Hr({
    name: "AsyncComponentWrapper",
    __asyncLoader: m,
    get __asyncResolved() {
      return u;
    },
    setup() {
      const v = ae;
      if (u) return () => Wn(u, v);
      const S = (D) => {
        c = null, Wt(D, v, 13, !r);
      };
      if (i && v.suspense || Xt) {
        return m().then((D) => () => Wn(D, v)).catch((
          D,
        ) => (S(D), () => r ? le(r, { error: D }) : null));
      }
      const O = oe(!1), k = oe(), W = oe(!!s);
      return s && setTimeout(() => {
        W.value = !1;
      }, s),
        o != null && setTimeout(() => {
          if (!O.value && !k.value) {
            const D = new Error(`Async component timed out after ${o}ms.`);
            S(D), k.value = D;
          }
        }, o),
        m().then(() => {
          O.value = !0,
            v.parent && qt(v.parent.vnode) &&
            (v.parent.effect.dirty = !0, In(v.parent.update));
        }).catch((D) => {
          S(D), k.value = D;
        }),
        () => {
          if (O.value && u) return Wn(u, v);
          if (k.value && r) return le(r, { error: k.value });
          if (n && !W.value) return le(n);
        };
    },
  });
}
function Wn(e, t) {
  const { ref: n, props: r, children: s, ce: o } = t.vnode, i = le(e, r, s);
  return i.ref = n, i.ce = o, delete t.vnode.ce, i;
}
const qt = (e) => e.type.__isKeepAlive;
function Nl(e, t) {
  Lo(e, "a", t);
}
function Fl(e, t) {
  Lo(e, "da", t);
}
function Lo(e, t, n = ae) {
  const r = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s;) {
      if (s.isDeactivated) return;
      s = s.parent;
    }
    return e();
  });
  if (Nn(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent;) qt(s.parent.vnode) && $l(r, t, n, s), s = s.parent;
  }
}
function $l(e, t, n, r) {
  const s = Nn(t, e, r, !0);
  Fn(() => {
    Cr(r[t], s);
  }, n);
}
function Nn(e, t, n = ae, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      o = t.__weh || (t.__weh = (...i) => {
        et();
        const l = Gt(n), c = Ae(t, n, e, i);
        return l(), tt(), c;
      });
    return r ? s.unshift(o) : s.push(o), o;
  }
}
const De = (e) => (t, n = ae) => {
    (!Xt || e === "sp") && Nn(e, (...r) => t(...r), n);
  },
  Hl = De("bm"),
  Tt = De("m"),
  jl = De("bu"),
  Vl = De("u"),
  Mo = De("bum"),
  Fn = De("um"),
  Dl = De("sp"),
  Ul = De("rtg"),
  Bl = De("rtc");
function kl(e, t = ae) {
  Nn("ec", e, t);
}
const Io = "components";
function du(e, t) {
  return No(Io, e, !0, t) || e;
}
const Po = Symbol.for("v-ndc");
function hu(e) {
  return ie(e) ? No(Io, e, !1) || e : e || Po;
}
function No(e, t, n = !0, r = !1) {
  const s = ue || ae;
  if (s) {
    const o = s.type;
    {
      const l = Fc(o, !1);
      if (l && (l === t || l === Oe(t) || l === An(Oe(t)))) return o;
    }
    const i = ls(s[e] || o[e], t) || ls(s.appContext[e], t);
    return !i && r ? o : i;
  }
}
function ls(e, t) {
  return e && (e[t] || e[Oe(t)] || e[An(Oe(t))]);
}
function pu(e, t, n, r) {
  let s;
  const o = n;
  if (B(e) || ie(e)) {
    s = new Array(e.length);
    for (let i = 0, l = e.length; i < l; i++) s[i] = t(e[i], i, void 0, o);
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let i = 0; i < e; i++) s[i] = t(i + 1, i, void 0, o);
  } else if (Z(e)) {
    if (e[Symbol.iterator]) {
      s = Array.from(e, (i, l) => t(i, l, void 0, o));
    } else {
      const i = Object.keys(e);
      s = new Array(i.length);
      for (let l = 0, c = i.length; l < c; l++) {
        const u = i[l];
        s[l] = t(e[u], u, l, o);
      }
    }
  } else s = [];
  return s;
}
function gu(e, t, n = {}, r, s) {
  if (ue.isCE || ue.parent && Et(ue.parent) && ue.parent.isCE) {
    return t !== "default" && (n.name = t), le("slot", n, r && r());
  }
  let o = e[t];
  o && o._c && (o._d = !1), ti();
  const i = o && Fo(o(n)),
    l = ri(
      _e,
      { key: (n.key || i && i.key || `_${t}`) + (!i && r ? "_fb" : "") },
      i || (r ? r() : []),
      i && e._ === 1 ? 64 : -2,
    );
  return !s && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]),
    o && o._c && (o._d = !0),
    l;
}
function Fo(e) {
  return e.some((t) =>
      Cn(t) ? !(t.type === me || t.type === _e && !Fo(t.children)) : !0
    )
    ? e
    : null;
}
function mu(e, t) {
  const n = {};
  for (const r in e) n[/[A-Z]/.test(r) ? `on:${r}` : fn(r)] = e[r];
  return n;
}
const pr = (e) => e ? li(e) ? Vn(e) : pr(e.parent) : null,
  It = fe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => pr(e.parent),
    $root: (e) => pr(e.root),
    $emit: (e) => e.emit,
    $options: (e) => jr(e),
    $forceUpdate: (e) =>
      e.f || (e.f = () => {
        e.effect.dirty = !0, In(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = Mn.bind(e.proxy)),
    $watch: (e) => yc.bind(e),
  }),
  qn = (e, t) => e !== ne && !e.__isScriptSetup && z(e, t),
  Kl = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: o,
        accessCache: i,
        type: l,
        appContext: c,
      } = e;
      let u;
      if (t[0] !== "$") {
        const v = i[t];
        if (v !== void 0) {
          switch (v) {
            case 1:
              return r[t];
            case 2:
              return s[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        } else {
          if (qn(r, t)) return i[t] = 1, r[t];
          if (s !== ne && z(s, t)) return i[t] = 2, s[t];
          if ((u = e.propsOptions[0]) && z(u, t)) return i[t] = 3, o[t];
          if (n !== ne && z(n, t)) return i[t] = 4, n[t];
          gr && (i[t] = 0);
        }
      }
      const f = It[t];
      let h, m;
      if (f) return t === "$attrs" && be(e.attrs, "get", ""), f(e);
      if ((h = l.__cssModules) && (h = h[t])) return h;
      if (n !== ne && z(n, t)) return i[t] = 4, n[t];
      if (m = c.config.globalProperties, z(m, t)) return m[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: o } = e;
      return qn(s, t)
        ? (s[t] = n, !0)
        : r !== ne && z(r, t)
        ? (r[t] = n, !0)
        : z(e.props, t) || t[0] === "$" && t.slice(1) in e
        ? !1
        : (o[t] = n, !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: s,
          propsOptions: o,
        },
      },
      i,
    ) {
      let l;
      return !!n[i] || e !== ne && z(e, i) || qn(t, i) ||
        (l = o[0]) && z(l, i) || z(r, i) || z(It, i) ||
        z(s.config.globalProperties, i);
    },
    defineProperty(e, t, n) {
      return n.get != null
        ? e._.accessCache[t] = 0
        : z(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n);
    },
  };
function yu() {
  return Wl().slots;
}
function Wl() {
  const e = jn();
  return e.setupContext || (e.setupContext = ai(e));
}
function cs(e) {
  return B(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
let gr = !0;
function ql(e) {
  const t = jr(e), n = e.proxy, r = e.ctx;
  gr = !1, t.beforeCreate && as(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: o,
    methods: i,
    watch: l,
    provide: c,
    inject: u,
    created: f,
    beforeMount: h,
    mounted: m,
    beforeUpdate: v,
    updated: S,
    activated: O,
    deactivated: k,
    beforeDestroy: W,
    beforeUnmount: D,
    destroyed: p,
    unmounted: y,
    render: I,
    renderTracked: T,
    renderTriggered: F,
    errorCaptured: $,
    serverPrefetch: M,
    expose: _,
    inheritAttrs: N,
    components: x,
    directives: G,
    filters: ee,
  } = t;
  if (u && Gl(u, r, null), i) {
    for (const Y in i) {
      const j = i[Y];
      K(j) && (r[Y] = j.bind(n));
    }
  }
  if (s) {
    const Y = s.call(n, n);
    Z(Y) && (e.data = On(Y));
  }
  if (gr = !0, o) {
    for (const Y in o) {
      const j = o[Y],
        He = K(j) ? j.bind(n, n) : K(j.get) ? j.get.bind(n, n) : Te,
        Yt = !K(j) && K(j.set) ? j.set.bind(n) : Te,
        nt = se({ get: He, set: Yt });
      Object.defineProperty(r, Y, {
        enumerable: !0,
        configurable: !0,
        get: () => nt.value,
        set: (Me) => nt.value = Me,
      });
    }
  }
  if (l) { for (const Y in l) $o(l[Y], r, n, Y); }
  if (c) {
    const Y = K(c) ? c.call(n) : c;
    Reflect.ownKeys(Y).forEach((j) => {
      Zl(j, Y[j]);
    });
  }
  f && as(f, e, "c");
  function U(Y, j) {
    B(j) ? j.forEach((He) => Y(He.bind(n))) : j && Y(j.bind(n));
  }
  if (
    U(Hl, h),
      U(Tt, m),
      U(jl, v),
      U(Vl, S),
      U(Nl, O),
      U(Fl, k),
      U(kl, $),
      U(Bl, T),
      U(Ul, F),
      U(Mo, D),
      U(Fn, y),
      U(Dl, M),
      B(_)
  ) {
    if (_.length) {
      const Y = e.exposed || (e.exposed = {});
      _.forEach((j) => {
        Object.defineProperty(Y, j, {
          get: () => n[j],
          set: (He) => n[j] = He,
        });
      });
    } else e.exposed || (e.exposed = {});
  }
  I && e.render === Te && (e.render = I),
    N != null && (e.inheritAttrs = N),
    x && (e.components = x),
    G && (e.directives = G);
}
function Gl(e, t, n = Te) {
  B(e) && (e = mr(e));
  for (const r in e) {
    const s = e[r];
    let o;
    Z(s)
      ? "default" in s
        ? o = Ct(s.from || r, s.default, !0)
        : o = Ct(s.from || r)
      : o = Ct(s),
      de(o)
        ? Object.defineProperty(t, r, {
          enumerable: !0,
          configurable: !0,
          get: () => o.value,
          set: (i) => o.value = i,
        })
        : t[r] = o;
  }
}
function as(e, t, n) {
  Ae(B(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function $o(e, t, n, r) {
  const s = r.includes(".") ? Qo(n, r) : () => n[r];
  if (ie(e)) {
    const o = t[e];
    K(o) && Fe(s, o);
  } else if (K(e)) Fe(s, e.bind(n));
  else if (Z(e)) {
    if (B(e)) e.forEach((o) => $o(o, t, n, r));
    else {
      const o = K(e.handler) ? e.handler.bind(n) : t[e.handler];
      K(o) && Fe(s, o, e);
    }
  }
}
function jr(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    { mixins: s, optionsCache: o, config: { optionMergeStrategies: i } } =
      e.appContext,
    l = o.get(t);
  let c;
  return l
    ? c = l
    : !s.length && !n && !r
    ? c = t
    : (c = {}, s.length && s.forEach((u) => wn(c, u, i, !0)), wn(c, t, i)),
    Z(t) && o.set(t, c),
    c;
}
function wn(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && wn(e, o, n, !0), s && s.forEach((i) => wn(e, i, n, !0));
  for (const i in t) {
    if (!(r && i === "expose")) {
      const l = Xl[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  }
  return e;
}
const Xl = {
  data: us,
  props: fs,
  emits: fs,
  methods: Lt,
  computed: Lt,
  beforeCreate: ge,
  created: ge,
  beforeMount: ge,
  mounted: ge,
  beforeUpdate: ge,
  updated: ge,
  beforeDestroy: ge,
  beforeUnmount: ge,
  destroyed: ge,
  unmounted: ge,
  activated: ge,
  deactivated: ge,
  errorCaptured: ge,
  serverPrefetch: ge,
  components: Lt,
  directives: Lt,
  watch: zl,
  provide: us,
  inject: Yl,
};
function us(e, t) {
  return t
    ? e
      ? function () {
        return fe(K(e) ? e.call(this, this) : e, K(t) ? t.call(this, this) : t);
      }
      : t
    : e;
}
function Yl(e, t) {
  return Lt(mr(e), mr(t));
}
function mr(e) {
  if (B(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ge(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Lt(e, t) {
  return e ? fe(Object.create(null), e, t) : t;
}
function fs(e, t) {
  return e
    ? B(e) && B(t)
      ? [...new Set([...e, ...t])]
      : fe(Object.create(null), cs(e), cs(t ?? {}))
    : t;
}
function zl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = fe(Object.create(null), e);
  for (const r in t) n[r] = ge(e[r], t[r]);
  return n;
}
function Ho() {
  return {
    app: null,
    config: {
      isNativeTag: Pi,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Jl = 0;
function Ql(e, t) {
  return function (r, s = null) {
    K(r) || (r = fe({}, r)), s != null && !Z(s) && (s = null);
    const o = Ho(), i = new WeakSet();
    let l = !1;
    const c = o.app = {
      _uid: Jl++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: Hc,
      get config() {
        return o.config;
      },
      set config(u) {},
      use(u, ...f) {
        return i.has(u) ||
          (u && K(u.install)
            ? (i.add(u), u.install(c, ...f))
            : K(u) && (i.add(u), u(c, ...f))),
          c;
      },
      mixin(u) {
        return o.mixins.includes(u) || o.mixins.push(u), c;
      },
      component(u, f) {
        return f ? (o.components[u] = f, c) : o.components[u];
      },
      directive(u, f) {
        return f ? (o.directives[u] = f, c) : o.directives[u];
      },
      mount(u, f, h) {
        if (!l) {
          const m = le(r, s);
          return m.appContext = o,
            h === !0 ? h = "svg" : h === !1 && (h = void 0),
            f && t ? t(m, u) : e(m, u, h),
            l = !0,
            c._container = u,
            u.__vue_app__ = c,
            Vn(m.component);
        }
      },
      unmount() {
        l && (e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, f) {
        return o.provides[u] = f, c;
      },
      runWithContext(u) {
        const f = Pt;
        Pt = c;
        try {
          return u();
        } finally {
          Pt = f;
        }
      },
    };
    return c;
  };
}
let Pt = null;
function Zl(e, t) {
  if (ae) {
    let n = ae.provides;
    const r = ae.parent && ae.parent.provides;
    r === n && (n = ae.provides = Object.create(r)), n[e] = t;
  }
}
function Ct(e, t, n = !1) {
  const r = ae || ue;
  if (r || Pt) {
    const s = r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : Pt._context.provides;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && K(t) ? t.call(r && r.proxy) : t;
  }
}
const jo = {},
  Vo = () => Object.create(jo),
  Do = (e) => Object.getPrototypeOf(e) === jo;
function ec(e, t, n, r = !1) {
  const s = {}, o = Vo();
  e.propsDefaults = Object.create(null), Uo(e, t, s, o);
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
  n ? e.props = r ? s : gl(s) : e.type.props ? e.props = s : e.props = o,
    e.attrs = o;
}
function tc(e, t, n, r) {
  const { props: s, attrs: o, vnode: { patchFlag: i } } = e,
    l = J(s),
    [c] = e.propsOptions;
  let u = !1;
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const f = e.vnode.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        let m = f[h];
        if (Hn(e.emitsOptions, m)) continue;
        const v = t[m];
        if (c) {
          if (z(o, m)) v !== o[m] && (o[m] = v, u = !0);
          else {
            const S = Oe(m);
            s[S] = yr(c, l, S, v, e, !1);
          }
        } else v !== o[m] && (o[m] = v, u = !0);
      }
    }
  } else {
    Uo(e, t, s, o) && (u = !0);
    let f;
    for (const h in l) {
      (!t || !z(t, h) && ((f = Ze(h)) === h || !z(t, f))) &&
        (c
          ? n && (n[h] !== void 0 || n[f] !== void 0) &&
            (s[h] = yr(c, l, h, void 0, e, !0))
          : delete s[h]);
    }
    if (o !== l) {
      for (const h in o) (!t || !z(t, h)) && (delete o[h], u = !0);
    }
  }
  u && Ve(e.attrs, "set", "");
}
function Uo(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = !1, l;
  if (t) {
    for (let c in t) {
      if (bt(c)) continue;
      const u = t[c];
      let f;
      s && z(s, f = Oe(c))
        ? !o || !o.includes(f) ? n[f] = u : (l || (l = {}))[f] = u
        : Hn(e.emitsOptions, c) ||
          (!(c in r) || u !== r[c]) && (r[c] = u, i = !0);
    }
  }
  if (o) {
    const c = J(n), u = l || ne;
    for (let f = 0; f < o.length; f++) {
      const h = o[f];
      n[h] = yr(s, c, h, u[h], e, !z(u, h));
    }
  }
  return i;
}
function yr(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const l = z(i, "default");
    if (l && r === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && K(c)) {
        const { propsDefaults: u } = s;
        if (n in u) r = u[n];
        else {
          const f = Gt(s);
          r = u[n] = c.call(null, t), f();
        }
      } else r = c;
    }
    i[0] && (o && !l ? r = !1 : i[1] && (r === "" || r === Ze(n)) && (r = !0));
  }
  return r;
}
const nc = new WeakMap();
function Bo(e, t, n = !1) {
  const r = n ? nc : t.propsCache, s = r.get(e);
  if (s) return s;
  const o = e.props, i = {}, l = [];
  let c = !1;
  if (!K(e)) {
    const f = (h) => {
      c = !0;
      const [m, v] = Bo(h, t, !0);
      fe(i, m), v && l.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f);
  }
  if (!o && !c) return Z(e) && r.set(e, yt), yt;
  if (B(o)) {
    for (let f = 0; f < o.length; f++) {
      const h = Oe(o[f]);
      ds(h) && (i[h] = ne);
    }
  } else if (o) {
    for (const f in o) {
      const h = Oe(f);
      if (ds(h)) {
        const m = o[f], v = i[h] = B(m) || K(m) ? { type: m } : fe({}, m);
        if (v) {
          const S = gs(Boolean, v.type), O = gs(String, v.type);
          v[0] = S > -1,
            v[1] = O < 0 || S < O,
            (S > -1 || z(v, "default")) && l.push(h);
        }
      }
    }
  }
  const u = [i, l];
  return Z(e) && r.set(e, u), u;
}
function ds(e) {
  return e[0] !== "$" && !bt(e);
}
function hs(e) {
  return e === null
    ? "null"
    : typeof e == "function"
    ? e.name || ""
    : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function ps(e, t) {
  return hs(e) === hs(t);
}
function gs(e, t) {
  return B(t) ? t.findIndex((n) => ps(n, e)) : K(t) && ps(t, e) ? 0 : -1;
}
const ko = (e) => e[0] === "_" || e === "$stable",
  Vr = (e) => B(e) ? e.map(xe) : [xe(e)],
  rc = (e, t, n) => {
    if (t._n) return t;
    const r = Ll((...s) => Vr(t(...s)), n);
    return r._c = !1, r;
  },
  Ko = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (ko(s)) continue;
      const o = e[s];
      if (K(o)) t[s] = rc(s, o, r);
      else if (o != null) {
        const i = Vr(o);
        t[s] = () => i;
      }
    }
  },
  Wo = (e, t) => {
    const n = Vr(t);
    e.slots.default = () => n;
  },
  qo = (e, t, n) => {
    for (const r in t) (n || r !== "_") && (e[r] = t[r]);
  },
  sc = (e, t, n) => {
    const r = e.slots = Vo();
    if (e.vnode.shapeFlag & 32) {
      const s = t._;
      s ? (qo(r, t, n), n && eo(r, "_", s, !0)) : Ko(t, r);
    } else t && Wo(e, t);
  },
  oc = (e, t, n) => {
    const { vnode: r, slots: s } = e;
    let o = !0, i = ne;
    if (r.shapeFlag & 32) {
      const l = t._;
      l ? n && l === 1 ? o = !1 : qo(s, t, n) : (o = !t.$stable, Ko(t, s)),
        i = t;
    } else t && (Wo(e, t), i = { default: 1 });
    if (o) { for (const l in s) !ko(l) && i[l] == null && delete s[l]; }
  };
function En(e, t, n, r, s = !1) {
  if (B(e)) {
    e.forEach((m, v) => En(m, t && (B(t) ? t[v] : t), n, r, s));
    return;
  }
  if (Et(r) && !s) return;
  const o = r.shapeFlag & 4 ? Vn(r.component) : r.el,
    i = s ? null : o,
    { i: l, r: c } = e,
    u = t && t.r,
    f = l.refs === ne ? l.refs = {} : l.refs,
    h = l.setupState;
  if (
    u != null && u !== c &&
    (ie(u)
      ? (f[u] = null, z(h, u) && (h[u] = null))
      : de(u) && (u.value = null)), K(c)
  ) Ye(c, l, 12, [i, f]);
  else {
    const m = ie(c), v = de(c);
    if (m || v) {
      const S = () => {
        if (e.f) {
          const O = m ? z(h, c) ? h[c] : f[c] : c.value;
          s
            ? B(O) && Cr(O, o)
            : B(O)
            ? O.includes(o) || O.push(o)
            : m
            ? (f[c] = [o], z(h, c) && (h[c] = f[c]))
            : (c.value = [o], e.k && (f[e.k] = c.value));
        } else {m
            ? (f[c] = i, z(h, c) && (h[c] = i))
            : v && (c.value = i, e.k && (f[e.k] = i));}
      };
      i ? (S.id = -1, ye(S, n)) : S();
    }
  }
}
const Go = Symbol("_vte"),
  ic = (e) => e.__isTeleport,
  Nt = (e) => e && (e.disabled || e.disabled === ""),
  ms = (e) => typeof SVGElement < "u" && e instanceof SVGElement,
  ys = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement,
  _r = (e, t) => {
    const n = e && e.to;
    return ie(n) ? t ? t(n) : null : n;
  },
  lc = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, r, s, o, i, l, c, u) {
      const {
          mc: f,
          pc: h,
          pbc: m,
          o: { insert: v, querySelector: S, createText: O, createComment: k },
        } = u,
        W = Nt(t.props);
      let { shapeFlag: D, children: p, dynamicChildren: y } = t;
      if (e == null) {
        const I = t.el = O(""),
          T = t.anchor = O(""),
          F = t.target = _r(t.props, S),
          $ = t.targetStart = O(""),
          M = t.targetAnchor = O("");
        v(I, n, r),
          v(T, n, r),
          $[Go] = M,
          F && (v($, F),
            v(M, F),
            i === "svg" || ms(F)
              ? i = "svg"
              : (i === "mathml" || ys(F)) && (i = "mathml"));
        const _ = (N, x) => {
          D & 16 && f(p, N, x, s, o, i, l, c);
        };
        W ? _(n, T) : F && _(F, M);
      } else {
        t.el = e.el, t.targetStart = e.targetStart;
        const I = t.anchor = e.anchor,
          T = t.target = e.target,
          F = t.targetAnchor = e.targetAnchor,
          $ = Nt(e.props),
          M = $ ? n : T,
          _ = $ ? I : F;
        if (
          i === "svg" || ms(T)
            ? i = "svg"
            : (i === "mathml" || ys(T)) && (i = "mathml"),
            y
              ? (m(e.dynamicChildren, y, M, s, o, i, l), Dr(e, t, !0))
              : c || h(e, t, M, _, s, o, i, l, !1),
            W
        ) {
          $
            ? t.props && e.props && t.props.to !== e.props.to &&
              (t.props.to = e.props.to)
            : rn(t, n, I, u, 1);
        } else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const N = t.target = _r(t.props, S);
          N && rn(t, N, null, u, 0);
        } else $ && rn(t, T, F, u, 1);
      }
      Xo(t);
    },
    remove(e, t, n, { um: r, o: { remove: s } }, o) {
      const {
        shapeFlag: i,
        children: l,
        anchor: c,
        targetStart: u,
        targetAnchor: f,
        target: h,
        props: m,
      } = e;
      if (h && (s(u), s(f)), o && s(c), i & 16) {
        const v = o || !Nt(m);
        for (let S = 0; S < l.length; S++) {
          const O = l[S];
          r(O, t, n, v, !!O.dynamicChildren);
        }
      }
    },
    move: rn,
    hydrate: cc,
  };
function rn(e, t, n, { o: { insert: r }, m: s }, o = 2) {
  o === 0 && r(e.targetAnchor, t, n);
  const { el: i, anchor: l, shapeFlag: c, children: u, props: f } = e,
    h = o === 2;
  if (h && r(i, t, n), (!h || Nt(f)) && c & 16) {
    for (let m = 0; m < u.length; m++) {
      s(u[m], t, n, 2);
    }
  }
  h && r(l, t, n);
}
function cc(
  e,
  t,
  n,
  r,
  s,
  o,
  { o: { nextSibling: i, parentNode: l, querySelector: c } },
  u,
) {
  const f = t.target = _r(t.props, c);
  if (f) {
    const h = f._lpa || f.firstChild;
    if (t.shapeFlag & 16) {
      if (Nt(t.props)) {
        t.anchor = u(i(e), t, l(e), n, r, s, o), t.targetAnchor = h;
      } else {
        t.anchor = i(e);
        let m = h;
        for (; m;) {
          if (m = i(m), m && m.nodeType === 8 && m.data === "teleport anchor") {
            t.targetAnchor = m, f._lpa = t.targetAnchor && i(t.targetAnchor);
            break;
          }
        }
        u(h, t, f, n, r, s, o);
      }
    }
    Xo(t);
  }
  return t.anchor && i(t.anchor);
}
const _u = lc;
function Xo(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n && n !== e.targetAnchor;) {
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid),
        n = n.nextSibling;
    }
    t.ut();
  }
}
let _s = !1;
const gt = () => {
    _s ||
      (console.error("Hydration completed but contains mismatches."), _s = !0);
  },
  ac = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject",
  uc = (e) => e.namespaceURI.includes("MathML"),
  sn = (e) => {
    if (ac(e)) return "svg";
    if (uc(e)) return "mathml";
  },
  on = (e) => e.nodeType === 8;
function fc(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: r,
        createText: s,
        nextSibling: o,
        parentNode: i,
        remove: l,
        insert: c,
        createComment: u,
      },
    } = e,
    f = (p, y) => {
      if (!y.hasChildNodes()) {
        n(null, p, y), _n(), y._vnode = p;
        return;
      }
      h(y.firstChild, p, null, null, null), _n(), y._vnode = p;
    },
    h = (p, y, I, T, F, $ = !1) => {
      $ = $ || !!y.dynamicChildren;
      const M = on(p) && p.data === "[",
        _ = () => O(p, y, I, T, F, M),
        { type: N, ref: x, shapeFlag: G, patchFlag: ee } = y;
      let re = p.nodeType;
      y.el = p, ee === -2 && ($ = !1, y.dynamicChildren = null);
      let U = null;
      switch (N) {
        case ut:
          re !== 3
            ? y.children === "" ? (c(y.el = s(""), i(p), p), U = p) : U = _()
            : (p.data !== y.children && (gt(), p.data = y.children), U = o(p));
          break;
        case me:
          D(p)
            ? (U = o(p), W(y.el = p.content.firstChild, p, I))
            : re !== 8 || M
            ? U = _()
            : U = o(p);
          break;
        case Ft:
          if (M && (p = o(p), re = p.nodeType), re === 1 || re === 3) {
            U = p;
            const Y = !y.children.length;
            for (let j = 0; j < y.staticCount; j++) {
              Y && (y.children += U.nodeType === 1 ? U.outerHTML : U.data),
                j === y.staticCount - 1 && (y.anchor = U),
                U = o(U);
            }
            return M ? o(U) : U;
          } else _();
          break;
        case _e:
          M ? U = S(p, y, I, T, F, $) : U = _();
          break;
        default:
          if (G & 1) {
            (re !== 1 || y.type.toLowerCase() !== p.tagName.toLowerCase()) &&
              !D(p)
              ? U = _()
              : U = m(p, y, I, T, F, $);
          } else if (G & 6) {
            y.slotScopeIds = F;
            const Y = i(p);
            if (
              M
                ? U = k(p)
                : on(p) && p.data === "teleport start"
                ? U = k(p, p.data, "teleport end")
                : U = o(p),
                t(y, Y, null, I, T, sn(Y), $),
                Et(y)
            ) {
              let j;
              M
                ? (j = le(_e), j.anchor = U ? U.previousSibling : Y.lastChild)
                : j = p.nodeType === 3 ? ii("") : le("div"),
                j.el = p,
                y.component.subTree = j;
            }
          } else {G & 64
              ? re !== 8 ? U = _() : U = y.type.hydrate(p, y, I, T, F, $, e, v)
              : G & 128 &&
                (U = y.type.hydrate(p, y, I, T, sn(i(p)), F, $, e, h));}
      }
      return x != null && En(x, null, T, y), U;
    },
    m = (p, y, I, T, F, $) => {
      $ = $ || !!y.dynamicChildren;
      const {
          type: M,
          props: _,
          patchFlag: N,
          shapeFlag: x,
          dirs: G,
          transition: ee,
        } = y,
        re = M === "input" || M === "option";
      if (re || N !== -1) {
        G && Pe(y, null, I, "created");
        let U = !1;
        if (D(p)) {
          U = zo(T, ee) && I && I.vnode.props && I.vnode.props.appear;
          const j = p.content.firstChild;
          U && ee.beforeEnter(j), W(j, p, I), y.el = p = j;
        }
        if (x & 16 && !(_ && (_.innerHTML || _.textContent))) {
          let j = v(p.firstChild, y, p, I, T, F, $);
          for (; j;) {
            gt();
            const He = j;
            j = j.nextSibling, l(He);
          }
        } else {x & 8 && p.textContent !== y.children &&
            (gt(), p.textContent = y.children);}
        if (_) {
          if (re || !$ || N & 48) {
            for (const j in _) {
              (re && (j.endsWith("value") || j === "indeterminate") ||
                Kt(j) && !bt(j) || j[0] === ".") &&
                r(p, j, null, _[j], void 0, I);
            }
          } else if (_.onClick) r(p, "onClick", null, _.onClick, void 0, I);
          else if (N & 4 && vt(_.style)) {
            for (const j in _.style) _.style[j];
          }
        }
        let Y;
        (Y = _ && _.onVnodeBeforeMount) && Se(Y, I, y),
          G && Pe(y, null, I, "beforeMount"),
          ((Y = _ && _.onVnodeMounted) || G || U) && ei(() => {
            Y && Se(Y, I, y), U && ee.enter(p), G && Pe(y, null, I, "mounted");
          }, T);
      }
      return p.nextSibling;
    },
    v = (p, y, I, T, F, $, M) => {
      M = M || !!y.dynamicChildren;
      const _ = y.children, N = _.length;
      for (let x = 0; x < N; x++) {
        const G = M ? _[x] : _[x] = xe(_[x]), ee = G.type === ut;
        if (p) {
          if (ee && !M) {
            let re = _[x + 1];
            re && (re = xe(re)).type === ut &&
              (c(s(p.data.slice(G.children.length)), I, o(p)),
                p.data = G.children);
          }
          p = h(p, G, T, F, $, M);
        } else {ee && !G.children
            ? c(G.el = s(""), I)
            : (gt(), n(null, G, I, null, T, F, sn(I), $));}
      }
      return p;
    },
    S = (p, y, I, T, F, $) => {
      const { slotScopeIds: M } = y;
      M && (F = F ? F.concat(M) : M);
      const _ = i(p), N = v(o(p), y, _, I, T, F, $);
      return N && on(N) && N.data === "]"
        ? o(y.anchor = N)
        : (gt(), c(y.anchor = u("]"), _, N), N);
    },
    O = (p, y, I, T, F, $) => {
      if (gt(), y.el = null, $) {
        const N = k(p);
        for (;;) {
          const x = o(p);
          if (x && x !== N) l(x);
          else break;
        }
      }
      const M = o(p), _ = i(p);
      return l(p), n(null, y, _, M, I, T, sn(_), F), M;
    },
    k = (p, y = "[", I = "]") => {
      let T = 0;
      for (; p;) {
        if (p = o(p), p && on(p) && (p.data === y && T++, p.data === I)) {
          if (T === 0) return o(p);
          T--;
        }
      }
      return p;
    },
    W = (p, y, I) => {
      const T = y.parentNode;
      T && T.replaceChild(p, y);
      let F = I;
      for (; F;) {
        F.vnode.el === y && (F.vnode.el = F.subTree.el = p), F = F.parent;
      }
    },
    D = (p) => p.nodeType === 1 && p.tagName.toLowerCase() === "template";
  return [f, h];
}
const ye = ei;
function dc(e) {
  return Yo(e);
}
function hc(e) {
  return Yo(e, fc);
}
function Yo(e, t) {
  const n = to();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: s,
      patchProp: o,
      createElement: i,
      createText: l,
      createComment: c,
      setText: u,
      setElementText: f,
      parentNode: h,
      nextSibling: m,
      setScopeId: v = Te,
      insertStaticContent: S,
    } = e,
    O = (
      a,
      d,
      g,
      E = null,
      b = null,
      C = null,
      L = void 0,
      A = null,
      R = !!d.dynamicChildren,
    ) => {
      if (a === d) return;
      a && !lt(a, d) && (E = zt(a), Me(a, b, C, !0), a = null),
        d.patchFlag === -2 && (R = !1, d.dynamicChildren = null);
      const { type: w, ref: P, shapeFlag: V } = d;
      switch (w) {
        case ut:
          k(a, d, g, E);
          break;
        case me:
          W(a, d, g, E);
          break;
        case Ft:
          a == null && D(d, g, E, L);
          break;
        case _e:
          x(a, d, g, E, b, C, L, A, R);
          break;
        default:
          V & 1
            ? I(a, d, g, E, b, C, L, A, R)
            : V & 6
            ? G(a, d, g, E, b, C, L, A, R)
            : (V & 64 || V & 128) && w.process(a, d, g, E, b, C, L, A, R, ht);
      }
      P != null && b && En(P, a && a.ref, C, d || a, !d);
    },
    k = (a, d, g, E) => {
      if (a == null) r(d.el = l(d.children), g, E);
      else {
        const b = d.el = a.el;
        d.children !== a.children && u(b, d.children);
      }
    },
    W = (a, d, g, E) => {
      a == null ? r(d.el = c(d.children || ""), g, E) : d.el = a.el;
    },
    D = (a, d, g, E) => {
      [a.el, a.anchor] = S(a.children, d, g, E, a.el, a.anchor);
    },
    p = ({ el: a, anchor: d }, g, E) => {
      let b;
      for (; a && a !== d;) b = m(a), r(a, g, E), a = b;
      r(d, g, E);
    },
    y = ({ el: a, anchor: d }) => {
      let g;
      for (; a && a !== d;) g = m(a), s(a), a = g;
      s(d);
    },
    I = (a, d, g, E, b, C, L, A, R) => {
      d.type === "svg" ? L = "svg" : d.type === "math" && (L = "mathml"),
        a == null ? T(d, g, E, b, C, L, A, R) : M(a, d, b, C, L, A, R);
    },
    T = (a, d, g, E, b, C, L, A) => {
      let R, w;
      const { props: P, shapeFlag: V, transition: H, dirs: q } = a;
      if (
        R = a.el = i(a.type, C, P && P.is, P),
          V & 8
            ? f(R, a.children)
            : V & 16 && $(a.children, R, null, E, b, Gn(a, C), L, A),
          q && Pe(a, null, E, "created"),
          F(R, a, a.scopeId, L, E),
          P
      ) {
        for (const te in P) {
          te !== "value" && !bt(te) && o(R, te, null, P[te], C, E);
        }
        "value" in P && o(R, "value", null, P.value, C),
          (w = P.onVnodeBeforeMount) && Se(w, E, a);
      }
      q && Pe(a, null, E, "beforeMount");
      const X = zo(b, H);
      X && H.beforeEnter(R),
        r(R, d, g),
        ((w = P && P.onVnodeMounted) || X || q) && ye(() => {
          w && Se(w, E, a), X && H.enter(R), q && Pe(a, null, E, "mounted");
        }, b);
    },
    F = (a, d, g, E, b) => {
      if (g && v(a, g), E) { for (let C = 0; C < E.length; C++) v(a, E[C]); }
      if (b) {
        let C = b.subTree;
        if (d === C) {
          const L = b.vnode;
          F(a, L, L.scopeId, L.slotScopeIds, b.parent);
        }
      }
    },
    $ = (a, d, g, E, b, C, L, A, R = 0) => {
      for (let w = R; w < a.length; w++) {
        const P = a[w] = A ? qe(a[w]) : xe(a[w]);
        O(null, P, d, g, E, b, C, L, A);
      }
    },
    M = (a, d, g, E, b, C, L) => {
      const A = d.el = a.el;
      let { patchFlag: R, dynamicChildren: w, dirs: P } = d;
      R |= a.patchFlag & 16;
      const V = a.props || ne, H = d.props || ne;
      let q;
      if (
        g && rt(g, !1),
          (q = H.onVnodeBeforeUpdate) && Se(q, g, d, a),
          P && Pe(d, a, g, "beforeUpdate"),
          g && rt(g, !0),
          (V.innerHTML && H.innerHTML == null ||
            V.textContent && H.textContent == null) && f(A, ""),
          w
            ? _(a.dynamicChildren, w, A, g, E, Gn(d, b), C)
            : L || j(a, d, A, null, g, E, Gn(d, b), C, !1),
          R > 0
      ) {
        if (R & 16) N(A, V, H, g, b);
        else if (
          R & 2 && V.class !== H.class && o(A, "class", null, H.class, b),
            R & 4 && o(A, "style", V.style, H.style, b),
            R & 8
        ) {
          const X = d.dynamicProps;
          for (let te = 0; te < X.length; te++) {
            const Q = X[te], ce = V[Q], Re = H[Q];
            (Re !== ce || Q === "value") && o(A, Q, ce, Re, b, g);
          }
        }
        R & 1 && a.children !== d.children && f(A, d.children);
      } else !L && w == null && N(A, V, H, g, b);
      ((q = H.onVnodeUpdated) || P) && ye(() => {
        q && Se(q, g, d, a), P && Pe(d, a, g, "updated");
      }, E);
    },
    _ = (a, d, g, E, b, C, L) => {
      for (let A = 0; A < d.length; A++) {
        const R = a[A],
          w = d[A],
          P = R.el && (R.type === _e || !lt(R, w) || R.shapeFlag & 70)
            ? h(R.el)
            : g;
        O(R, w, P, null, E, b, C, L, !0);
      }
    },
    N = (a, d, g, E, b) => {
      if (d !== g) {
        if (d !== ne) {
          for (const C in d) !bt(C) && !(C in g) && o(a, C, d[C], null, b, E);
        }
        for (const C in g) {
          if (bt(C)) continue;
          const L = g[C], A = d[C];
          L !== A && C !== "value" && o(a, C, A, L, b, E);
        }
        "value" in g && o(a, "value", d.value, g.value, b);
      }
    },
    x = (a, d, g, E, b, C, L, A, R) => {
      const w = d.el = a ? a.el : l(""), P = d.anchor = a ? a.anchor : l("");
      let { patchFlag: V, dynamicChildren: H, slotScopeIds: q } = d;
      q && (A = A ? A.concat(q) : q),
        a == null
          ? (r(w, g, E), r(P, g, E), $(d.children || [], g, P, b, C, L, A, R))
          : V > 0 && V & 64 && H && a.dynamicChildren
          ? (_(a.dynamicChildren, H, g, b, C, L, A),
            (d.key != null || b && d === b.subTree) && Dr(a, d, !0))
          : j(a, d, g, P, b, C, L, A, R);
    },
    G = (a, d, g, E, b, C, L, A, R) => {
      d.slotScopeIds = A,
        a == null
          ? d.shapeFlag & 512
            ? b.ctx.activate(d, g, E, L, R)
            : ee(d, g, E, b, C, L, R)
          : re(a, d, R);
    },
    ee = (a, d, g, E, b, C, L) => {
      const A = a.component = Mc(a, E, b);
      if (qt(a) && (A.ctx.renderer = ht), Ic(A, !1, L), A.asyncDep) {
        if (b && b.registerDep(A, U, L), !a.el) {
          const R = A.subTree = le(me);
          W(null, R, d, g);
        }
      } else U(A, a, d, g, b, C, L);
    },
    re = (a, d, g) => {
      const E = d.component = a.component;
      if (Ec(a, d, g)) {
        if (E.asyncDep && !E.asyncResolved) {
          Y(E, d, g);
          return;
        } else E.next = d, Al(E.update), E.effect.dirty = !0, E.update();
      } else d.el = a.el, E.vnode = d;
    },
    U = (a, d, g, E, b, C, L) => {
      const A = () => {
          if (a.isMounted) {
            let { next: P, bu: V, u: H, parent: q, vnode: X } = a;
            {
              const pt = Jo(a);
              if (pt) {
                P && (P.el = X.el, Y(a, P, L)),
                  pt.asyncDep.then(() => {
                    a.isUnmounted || A();
                  });
                return;
              }
            }
            let te = P, Q;
            rt(a, !1),
              P ? (P.el = X.el, Y(a, P, L)) : P = X,
              V && dn(V),
              (Q = P.props && P.props.onVnodeBeforeUpdate) && Se(Q, q, P, X),
              rt(a, !0);
            const ce = Xn(a), Re = a.subTree;
            a.subTree = ce,
              O(Re, ce, h(Re.el), zt(Re), a, b, C),
              P.el = ce.el,
              te === null && Cc(a, ce.el),
              H && ye(H, b),
              (Q = P.props && P.props.onVnodeUpdated) &&
              ye(() => Se(Q, q, P, X), b);
          } else {
            let P;
            const { el: V, props: H } = d,
              { bm: q, m: X, parent: te } = a,
              Q = Et(d);
            if (
              rt(a, !1),
                q && dn(q),
                !Q && (P = H && H.onVnodeBeforeMount) && Se(P, te, d),
                rt(a, !0),
                V && Bn
            ) {
              const ce = () => {
                a.subTree = Xn(a), Bn(V, a.subTree, a, b, null);
              };
              Q
                ? d.type.__asyncLoader().then(() => !a.isUnmounted && ce())
                : ce();
            } else {
              const ce = a.subTree = Xn(a);
              O(null, ce, g, E, a, b, C), d.el = ce.el;
            }
            if (X && ye(X, b), !Q && (P = H && H.onVnodeMounted)) {
              const ce = d;
              ye(() => Se(P, te, ce), b);
            }
            (d.shapeFlag & 256 ||
              te && Et(te.vnode) && te.vnode.shapeFlag & 256) &&
            a.a && ye(a.a, b),
              a.isMounted = !0,
              d = g = E = null;
          }
        },
        R = a.effect = new Ar(A, Te, () => In(w), a.scope),
        w = a.update = () => {
          R.dirty && R.run();
        };
      w.i = a, w.id = a.uid, rt(a, !0), w();
    },
    Y = (a, d, g) => {
      d.component = a;
      const E = a.vnode.props;
      a.vnode = d,
        a.next = null,
        tc(a, d.props, E, g),
        oc(a, d.children, g),
        et(),
        os(a),
        tt();
    },
    j = (a, d, g, E, b, C, L, A, R = !1) => {
      const w = a && a.children,
        P = a ? a.shapeFlag : 0,
        V = d.children,
        { patchFlag: H, shapeFlag: q } = d;
      if (H > 0) {
        if (H & 128) {
          Yt(w, V, g, E, b, C, L, A, R);
          return;
        } else if (H & 256) {
          He(w, V, g, E, b, C, L, A, R);
          return;
        }
      }
      q & 8
        ? (P & 16 && At(w, b, C), V !== w && f(g, V))
        : P & 16
        ? q & 16 ? Yt(w, V, g, E, b, C, L, A, R) : At(w, b, C, !0)
        : (P & 8 && f(g, ""), q & 16 && $(V, g, E, b, C, L, A, R));
    },
    He = (a, d, g, E, b, C, L, A, R) => {
      a = a || yt, d = d || yt;
      const w = a.length, P = d.length, V = Math.min(w, P);
      let H;
      for (H = 0; H < V; H++) {
        const q = d[H] = R ? qe(d[H]) : xe(d[H]);
        O(a[H], q, g, null, b, C, L, A, R);
      }
      w > P ? At(a, b, C, !0, !1, V) : $(d, g, E, b, C, L, A, R, V);
    },
    Yt = (a, d, g, E, b, C, L, A, R) => {
      let w = 0;
      const P = d.length;
      let V = a.length - 1, H = P - 1;
      for (; w <= V && w <= H;) {
        const q = a[w], X = d[w] = R ? qe(d[w]) : xe(d[w]);
        if (lt(q, X)) O(q, X, g, null, b, C, L, A, R);
        else break;
        w++;
      }
      for (; w <= V && w <= H;) {
        const q = a[V], X = d[H] = R ? qe(d[H]) : xe(d[H]);
        if (lt(q, X)) O(q, X, g, null, b, C, L, A, R);
        else break;
        V--, H--;
      }
      if (w > V) {
        if (w <= H) {
          const q = H + 1, X = q < P ? d[q].el : E;
          for (
            ;
            w <= H;
          ) {
            O(null, d[w] = R ? qe(d[w]) : xe(d[w]), g, X, b, C, L, A, R), w++;
          }
        }
      } else if (w > H) { for (; w <= V;) Me(a[w], b, C, !0), w++; }
      else {
        const q = w, X = w, te = new Map();
        for (w = X; w <= H; w++) {
          const ve = d[w] = R ? qe(d[w]) : xe(d[w]);
          ve.key != null && te.set(ve.key, w);
        }
        let Q, ce = 0;
        const Re = H - X + 1;
        let pt = !1, Xr = 0;
        const Rt = new Array(Re);
        for (w = 0; w < Re; w++) Rt[w] = 0;
        for (w = q; w <= V; w++) {
          const ve = a[w];
          if (ce >= Re) {
            Me(ve, b, C, !0);
            continue;
          }
          let Ie;
          if (ve.key != null) Ie = te.get(ve.key);
          else {for (Q = X; Q <= H; Q++) {
              if (Rt[Q - X] === 0 && lt(ve, d[Q])) {
                Ie = Q;
                break;
              }
            }}
          Ie === void 0
            ? Me(ve, b, C, !0)
            : (Rt[Ie - X] = w + 1,
              Ie >= Xr ? Xr = Ie : pt = !0,
              O(ve, d[Ie], g, null, b, C, L, A, R),
              ce++);
        }
        const Yr = pt ? pc(Rt) : yt;
        for (Q = Yr.length - 1, w = Re - 1; w >= 0; w--) {
          const ve = X + w, Ie = d[ve], zr = ve + 1 < P ? d[ve + 1].el : E;
          Rt[w] === 0
            ? O(null, Ie, g, zr, b, C, L, A, R)
            : pt && (Q < 0 || w !== Yr[Q] ? nt(Ie, g, zr, 2) : Q--);
        }
      }
    },
    nt = (a, d, g, E, b = null) => {
      const { el: C, type: L, transition: A, children: R, shapeFlag: w } = a;
      if (w & 6) {
        nt(a.component.subTree, d, g, E);
        return;
      }
      if (w & 128) {
        a.suspense.move(d, g, E);
        return;
      }
      if (w & 64) {
        L.move(a, d, g, ht);
        return;
      }
      if (L === _e) {
        r(C, d, g);
        for (let V = 0; V < R.length; V++) nt(R[V], d, g, E);
        r(a.anchor, d, g);
        return;
      }
      if (L === Ft) {
        p(a, d, g);
        return;
      }
      if (E !== 2 && w & 1 && A) {
        if (E === 0) {
          A.beforeEnter(C), r(C, d, g), ye(() => A.enter(C), b);
        } else {
          const { leave: V, delayLeave: H, afterLeave: q } = A,
            X = () => r(C, d, g),
            te = () => {
              V(C, () => {
                X(), q && q();
              });
            };
          H ? H(C, X, te) : te();
        }
      } else r(C, d, g);
    },
    Me = (a, d, g, E = !1, b = !1) => {
      const {
        type: C,
        props: L,
        ref: A,
        children: R,
        dynamicChildren: w,
        shapeFlag: P,
        patchFlag: V,
        dirs: H,
        cacheIndex: q,
      } = a;
      if (
        V === -2 && (b = !1),
          A != null && En(A, null, g, a, !0),
          q != null && (d.renderCache[q] = void 0),
          P & 256
      ) {
        d.ctx.deactivate(a);
        return;
      }
      const X = P & 1 && H, te = !Et(a);
      let Q;
      if (te && (Q = L && L.onVnodeBeforeUnmount) && Se(Q, d, a), P & 6) {
        Ii(a.component, g, E);
      } else {
        if (P & 128) {
          a.suspense.unmount(g, E);
          return;
        }
        X && Pe(a, null, d, "beforeUnmount"),
          P & 64
            ? a.type.remove(a, d, g, ht, E)
            : w && !w.hasOnce && (C !== _e || V > 0 && V & 64)
            ? At(w, d, g, !1, !0)
            : (C === _e && V & 384 || !b && P & 16) && At(R, d, g),
          E && qr(a);
      }
      (te && (Q = L && L.onVnodeUnmounted) || X) && ye(() => {
        Q && Se(Q, d, a), X && Pe(a, null, d, "unmounted");
      }, g);
    },
    qr = (a) => {
      const { type: d, el: g, anchor: E, transition: b } = a;
      if (d === _e) {
        Mi(g, E);
        return;
      }
      if (d === Ft) {
        y(a);
        return;
      }
      const C = () => {
        s(g), b && !b.persisted && b.afterLeave && b.afterLeave();
      };
      if (a.shapeFlag & 1 && b && !b.persisted) {
        const { leave: L, delayLeave: A } = b, R = () => L(g, C);
        A ? A(a.el, C, R) : R();
      } else C();
    },
    Mi = (a, d) => {
      let g;
      for (; a !== d;) g = m(a), s(a), a = g;
      s(d);
    },
    Ii = (a, d, g) => {
      const { bum: E, scope: b, update: C, subTree: L, um: A, m: R, a: w } = a;
      bs(R),
        bs(w),
        E && dn(E),
        b.stop(),
        C && (C.active = !1, Me(L, a, d, g)),
        A && ye(A, d),
        ye(() => {
          a.isUnmounted = !0;
        }, d),
        d && d.pendingBranch && !d.isUnmounted && a.asyncDep &&
        !a.asyncResolved && a.suspenseId === d.pendingId &&
        (d.deps--, d.deps === 0 && d.resolve());
    },
    At = (a, d, g, E = !1, b = !1, C = 0) => {
      for (let L = C; L < a.length; L++) Me(a[L], d, g, E, b);
    },
    zt = (a) => {
      if (a.shapeFlag & 6) return zt(a.component.subTree);
      if (a.shapeFlag & 128) return a.suspense.next();
      const d = m(a.anchor || a.el), g = d && d[Go];
      return g ? m(g) : d;
    };
  let Dn = !1;
  const Gr = (a, d, g) => {
      a == null
        ? d._vnode && Me(d._vnode, null, null, !0)
        : O(d._vnode || null, a, d, null, null, null, g),
        Dn || (Dn = !0, os(), _n(), Dn = !1),
        d._vnode = a;
    },
    ht = {
      p: O,
      um: Me,
      m: nt,
      r: qr,
      mt: ee,
      mc: $,
      pc: j,
      pbc: _,
      n: zt,
      o: e,
    };
  let Un, Bn;
  return t && ([Un, Bn] = t(ht)),
    { render: Gr, hydrate: Un, createApp: Ql(Gr, Un) };
}
function Gn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" ||
      n === "mathml" && e === "annotation-xml" && t && t.encoding &&
        t.encoding.includes("html")
    ? void 0
    : n;
}
function rt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function zo(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Dr(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (B(r) && B(s)) {
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let l = s[o];
      l.shapeFlag & 1 && !l.dynamicChildren &&
      ((l.patchFlag <= 0 || l.patchFlag === 32) &&
        (l = s[o] = qe(s[o]), l.el = i.el),
        !n && l.patchFlag !== -2 && Dr(i, l)), l.type === ut && (l.el = i.el);
    }
  }
}
function pc(e) {
  const t = e.slice(), n = [0];
  let r, s, o, i, l;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const u = e[r];
    if (u !== 0) {
      if (s = n[n.length - 1], e[s] < u) {
        t[r] = s, n.push(r);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i;) {
        l = o + i >> 1, e[n[l]] < u ? o = l + 1 : i = l;
      }
      u < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0;) n[o] = i, i = t[i];
  return n;
}
function Jo(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Jo(t);
}
function bs(e) {
  if (e) { for (let t = 0; t < e.length; t++) e[t].active = !1; }
}
const gc = Symbol.for("v-scx"), mc = () => Ct(gc);
function Ur(e, t) {
  return $n(e, null, t);
}
function bu(e, t) {
  return $n(e, null, { flush: "post" });
}
const ln = {};
function Fe(e, t, n) {
  return $n(e, t, n);
}
function $n(
  e,
  t,
  { immediate: n, deep: r, flush: s, once: o, onTrack: i, onTrigger: l } = ne,
) {
  if (t && o) {
    const T = t;
    t = (...F) => {
      T(...F), I();
    };
  }
  const c = ae, u = (T) => r === !0 ? T : Ge(T, r === !1 ? 1 : void 0);
  let f, h = !1, m = !1;
  if (
    de(e)
      ? (f = () => e.value, h = St(e))
      : vt(e)
      ? (f = () => u(e), h = !0)
      : B(e)
      ? (m = !0,
        h = e.some((T) => vt(T) || St(T)),
        f = () =>
          e.map((T) => {
            if (de(T)) return T.value;
            if (vt(T)) return u(T);
            if (K(T)) return Ye(T, c, 2);
          }))
      : K(e)
      ? t ? f = () => Ye(e, c, 2) : f = () => (v && v(), Ae(e, c, 3, [S]))
      : f = Te, t && r
  ) {
    const T = f;
    f = () => Ge(T());
  }
  let v,
    S = (T) => {
      v = p.onStop = () => {
        Ye(T, c, 4), v = p.onStop = void 0;
      };
    },
    O;
  if (Xt) {
    if (
      S = Te,
        t ? n && Ae(t, c, 3, [f(), m ? [] : void 0, S]) : f(),
        s === "sync"
    ) {
      const T = mc();
      O = T.__watcherHandles || (T.__watcherHandles = []);
    } else return Te;
  }
  let k = m ? new Array(e.length).fill(ln) : ln;
  const W = () => {
    if (!(!p.active || !p.dirty)) {
      if (t) {
        const T = p.run();
        (r || h || (m ? T.some((F, $) => ze(F, k[$])) : ze(T, k))) &&
          (v && v(),
            Ae(t, c, 3, [T, k === ln ? void 0 : m && k[0] === ln ? [] : k, S]),
            k = T);
      } else p.run();
    }
  };
  W.allowRecurse = !!t;
  let D;
  s === "sync"
    ? D = W
    : s === "post"
    ? D = () => ye(W, c && c.suspense)
    : (W.pre = !0, c && (W.id = c.uid), D = () => In(W));
  const p = new Ar(f, Te, D),
    y = oo(),
    I = () => {
      p.stop(), y && Cr(y.effects, p);
    };
  return t
    ? n ? W() : k = p.run()
    : s === "post"
    ? ye(p.run.bind(p), c && c.suspense)
    : p.run(),
    O && O.push(I),
    I;
}
function yc(e, t, n) {
  const r = this.proxy,
    s = ie(e) ? e.includes(".") ? Qo(r, e) : () => r[e] : e.bind(r, r);
  let o;
  K(t) ? o = t : (o = t.handler, n = t);
  const i = Gt(this), l = $n(s, o.bind(r), n);
  return i(), l;
}
function Qo(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
function Ge(e, t = 1 / 0, n) {
  if (t <= 0 || !Z(e) || e.__v_skip || (n = n || new Set(), n.has(e))) return e;
  if (n.add(e), t--, de(e)) Ge(e.value, t, n);
  else if (B(e)) { for (let r = 0; r < e.length; r++) Ge(e[r], t, n); }
  else if (zs(e) || _t(e)) {
    e.forEach((r) => {
      Ge(r, t, n);
    });
  } else if (Zs(e)) {
    for (const r in e) Ge(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e)) {
      Object.prototype.propertyIsEnumerable.call(e, r) && Ge(e[r], t, n);
    }
  }
  return e;
}
const _c = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${Oe(t)}Modifiers`] || e[`${Ze(t)}Modifiers`];
function bc(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || ne;
  let s = n;
  const o = t.startsWith("update:"), i = o && _c(r, t.slice(7));
  i &&
    (i.trim && (s = n.map((f) => ie(f) ? f.trim() : f)),
      i.number && (s = n.map(cr)));
  let l, c = r[l = fn(t)] || r[l = fn(Oe(t))];
  !c && o && (c = r[l = fn(Ze(t))]), c && Ae(c, e, 6, s);
  const u = r[l + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    e.emitted[l] = !0, Ae(u, e, 6, s);
  }
}
function Zo(e, t, n = !1) {
  const r = t.emitsCache, s = r.get(e);
  if (s !== void 0) return s;
  const o = e.emits;
  let i = {}, l = !1;
  if (!K(e)) {
    const c = (u) => {
      const f = Zo(u, t, !0);
      f && (l = !0, fe(i, f));
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  return !o && !l
    ? (Z(e) && r.set(e, null), null)
    : (B(o) ? o.forEach((c) => i[c] = null) : fe(i, o), Z(e) && r.set(e, i), i);
}
function Hn(e, t) {
  return !e || !Kt(t)
    ? !1
    : (t = t.slice(2).replace(/Once$/, ""),
      z(e, t[0].toLowerCase() + t.slice(1)) || z(e, Ze(t)) || z(e, t));
}
function Xn(e) {
  const {
      type: t,
      vnode: n,
      proxy: r,
      withProxy: s,
      propsOptions: [o],
      slots: i,
      attrs: l,
      emit: c,
      render: u,
      renderCache: f,
      props: h,
      data: m,
      setupState: v,
      ctx: S,
      inheritAttrs: O,
    } = e,
    k = bn(e);
  let W, D;
  try {
    if (n.shapeFlag & 4) {
      const y = s || r, I = y;
      W = xe(u.call(I, y, f, h, v, m, S)), D = l;
    } else {
      const y = t;
      W = xe(y.length > 1 ? y(h, { attrs: l, slots: i, emit: c }) : y(h, null)),
        D = t.props ? l : vc(l);
    }
  } catch (y) {
    $t.length = 0, Wt(y, e, 1), W = le(me);
  }
  let p = W;
  if (D && O !== !1) {
    const y = Object.keys(D), { shapeFlag: I } = p;
    y.length && I & 7 &&
      (o && y.some(Er) && (D = wc(D, o)), p = Je(p, D, !1, !0));
  }
  return n.dirs &&
    (p = Je(p, null, !1, !0), p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs),
    n.transition && (p.transition = n.transition),
    W = p,
    bn(k),
    W;
}
const vc = (e) => {
    let t;
    for (const n in e) {
      (n === "class" || n === "style" || Kt(n)) && ((t || (t = {}))[n] = e[n]);
    }
    return t;
  },
  wc = (e, t) => {
    const n = {};
    for (const r in e) (!Er(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function Ec(e, t, n) {
  const { props: r, children: s, component: o } = e,
    { props: i, children: l, patchFlag: c } = t,
    u = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return r ? vs(r, i, u) : !!i;
    if (c & 8) {
      const f = t.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        const m = f[h];
        if (i[m] !== r[m] && !Hn(u, m)) return !0;
      }
    }
  } else {return (s || l) && (!l || !l.$stable)
      ? !0
      : r === i
      ? !1
      : r
      ? i ? vs(r, i, u) : !0
      : !!i;}
  return !1;
}
function vs(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (t[o] !== e[o] && !Hn(n, o)) return !0;
  }
  return !1;
}
function Cc({ vnode: e, parent: t }, n) {
  for (; t;) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e) {
      (e = t.vnode).el = n, t = t.parent;
    } else break;
  }
}
const Sc = (e) => e.__isSuspense;
function ei(e, t) {
  t && t.pendingBranch
    ? B(e) ? t.effects.push(...e) : t.effects.push(e)
    : Rl(e);
}
const _e = Symbol.for("v-fgt"),
  ut = Symbol.for("v-txt"),
  me = Symbol.for("v-cmt"),
  Ft = Symbol.for("v-stc"),
  $t = [];
let Ee = null;
function ti(e = !1) {
  $t.push(Ee = e ? null : []);
}
function xc() {
  $t.pop(), Ee = $t[$t.length - 1] || null;
}
let Ut = 1;
function ws(e) {
  Ut += e, e < 0 && Ee && (Ee.hasOnce = !0);
}
function ni(e) {
  return e.dynamicChildren = Ut > 0 ? Ee || yt : null,
    xc(),
    Ut > 0 && Ee && Ee.push(e),
    e;
}
function vu(e, t, n, r, s, o) {
  return ni(oi(e, t, n, r, s, o, !0));
}
function ri(e, t, n, r, s) {
  return ni(le(e, t, n, r, s, !0));
}
function Cn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function lt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const si = ({ key: e }) => e ?? null,
  pn = (
    { ref: e, ref_key: t, ref_for: n },
  ) => (typeof e == "number" && (e = "" + e),
    e != null
      ? ie(e) || de(e) || K(e) ? { i: ue, r: e, k: t, f: !!n } : e
      : null);
function oi(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  o = e === _e ? 0 : 1,
  i = !1,
  l = !1,
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && si(t),
    ref: t && pn(t),
    scopeId: Pn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: ue,
  };
  return l
    ? (Br(c, n), o & 128 && e.normalize(c))
    : n && (c.shapeFlag |= ie(n) ? 8 : 16),
    Ut > 0 && !i && Ee && (c.patchFlag > 0 || o & 6) && c.patchFlag !== 32 &&
    Ee.push(c),
    c;
}
const le = Tc;
function Tc(e, t = null, n = null, r = 0, s = null, o = !1) {
  if ((!e || e === Po) && (e = me), Cn(e)) {
    const l = Je(e, t, !0);
    return n && Br(l, n),
      Ut > 0 && !o && Ee &&
      (l.shapeFlag & 6 ? Ee[Ee.indexOf(e)] = l : Ee.push(l)),
      l.patchFlag = -2,
      l;
  }
  if ($c(e) && (e = e.__vccOpts), t) {
    t = Ac(t);
    let { class: l, style: c } = t;
    l && !ie(l) && (t.class = Tr(l)),
      Z(c) && (_o(c) && !B(c) && (c = fe({}, c)), t.style = xr(c));
  }
  const i = ie(e) ? 1 : Sc(e) ? 128 : ic(e) ? 64 : Z(e) ? 4 : K(e) ? 2 : 0;
  return oi(e, t, n, r, s, i, o, !0);
}
function Ac(e) {
  return e ? _o(e) || Do(e) ? fe({}, e) : e : null;
}
function Je(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: l, transition: c } = e,
    u = t ? Rc(s || {}, t) : s,
    f = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: u,
      key: u && si(u),
      ref: t && t.ref
        ? n && o ? B(o) ? o.concat(pn(t)) : [o, pn(t)] : pn(t)
        : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== _e ? i === -1 ? 16 : i | 16 : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Je(e.ssContent),
      ssFallback: e.ssFallback && Je(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return c && r && vn(f, c.clone(f)), f;
}
function ii(e = " ", t = 0) {
  return le(ut, null, e, t);
}
function wu(e, t) {
  const n = le(Ft, null, e);
  return n.staticCount = t, n;
}
function Eu(e = "", t = !1) {
  return t ? (ti(), ri(me, null, e)) : le(me, null, e);
}
function xe(e) {
  return e == null || typeof e == "boolean"
    ? le(me)
    : B(e)
    ? le(_e, null, e.slice())
    : typeof e == "object"
    ? qe(e)
    : le(ut, null, String(e));
}
function qe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Je(e);
}
function Br(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (B(t)) n = 16;
  else if (typeof t == "object") {
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Br(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Do(t) ? t._ctx = ue : s === 3 && ue &&
        (ue.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  } else {K(t)
      ? (t = { default: t, _ctx: ue }, n = 32)
      : (t = String(t), r & 64 ? (n = 16, t = [ii(t)]) : n = 8);}
  e.children = t, e.shapeFlag |= n;
}
function Rc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r) {
      if (s === "class") {
        t.class !== r.class && (t.class = Tr([t.class, r.class]));
      } else if (s === "style") t.style = xr([t.style, r.style]);
      else if (Kt(s)) {
        const o = t[s], i = r[s];
        i && o !== i && !(B(o) && o.includes(i)) &&
          (t[s] = o ? [].concat(o, i) : i);
      } else s !== "" && (t[s] = r[s]);
    }
  }
  return t;
}
function Se(e, t, n, r = null) {
  Ae(e, t, 7, [n, r]);
}
const Oc = Ho();
let Lc = 0;
function Mc(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || Oc,
    o = {
      uid: Lc++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new qi(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Bo(r, s),
      emitsOptions: Zo(r, s),
      emit: null,
      emitted: null,
      propsDefaults: ne,
      inheritAttrs: r.inheritAttrs,
      ctx: ne,
      data: ne,
      props: ne,
      attrs: ne,
      slots: ne,
      refs: ne,
      setupState: ne,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return o.ctx = { _: o },
    o.root = t ? t.root : o,
    o.emit = bc.bind(null, o),
    e.ce && e.ce(o),
    o;
}
let ae = null;
const jn = () => ae || ue;
let Sn, br;
{
  const e = to(),
    t = (n, r) => {
      let s;
      return (s = e[n]) || (s = e[n] = []), s.push(r), (o) => {
        s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
      };
    };
  Sn = t("__VUE_INSTANCE_SETTERS__", (n) => ae = n),
    br = t("__VUE_SSR_SETTERS__", (n) => Xt = n);
}
const Gt = (e) => {
    const t = ae;
    return Sn(e), e.scope.on(), () => {
      e.scope.off(), Sn(t);
    };
  },
  Es = () => {
    ae && ae.scope.off(), Sn(null);
  };
function li(e) {
  return e.vnode.shapeFlag & 4;
}
let Xt = !1;
function Ic(e, t = !1, n = !1) {
  t && br(t);
  const { props: r, children: s } = e.vnode, o = li(e);
  ec(e, r, o, t), sc(e, s, n);
  const i = o ? Pc(e, t) : void 0;
  return t && br(!1), i;
}
function Pc(e, t) {
  const n = e.type;
  e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, Kl);
  const { setup: r } = n;
  if (r) {
    const s = e.setupContext = r.length > 1 ? ai(e) : null, o = Gt(e);
    et();
    const i = Ye(r, e, 0, [e.props, s]);
    if (tt(), o(), Js(i)) {
      if (i.then(Es, Es), t) {
        return i.then((l) => {
          Cs(e, l, t);
        }).catch((l) => {
          Wt(l, e, 0);
        });
      }
      e.asyncDep = i;
    } else Cs(e, i, t);
  } else ci(e, t);
}
function Cs(e, t, n) {
  K(t)
    ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t
    : Z(t) && (e.setupState = Eo(t)), ci(e, n);
}
let Ss;
function ci(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && Ss && !r.render) {
      const s = r.template || jr(e).template;
      if (s) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
          { delimiters: l, compilerOptions: c } = r,
          u = fe(fe({ isCustomElement: o, delimiters: l }, i), c);
        r.render = Ss(s, u);
      }
    }
    e.render = r.render || Te;
  }
  {
    const s = Gt(e);
    et();
    try {
      ql(e);
    } finally {
      tt(), s();
    }
  }
}
const Nc = {
  get(e, t) {
    return be(e, "get", ""), e[t];
  },
};
function ai(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Nc),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Vn(e) {
  return e.exposed
    ? e.exposeProxy ||
      (e.exposeProxy = new Proxy(Eo(hn(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in It) return It[n](e);
        },
        has(t, n) {
          return n in t || n in It;
        },
      }))
    : e.proxy;
}
function Fc(e, t = !0) {
  return K(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function $c(e) {
  return K(e) && "__vccOpts" in e;
}
const se = (e, t) => ml(e, t, Xt);
function vr(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? Z(t) && !B(t) ? Cn(t) ? le(e, null, [t]) : le(e, t) : le(e, null, t)
    : (r > 3
      ? n = Array.prototype.slice.call(arguments, 2)
      : r === 3 && Cn(n) && (n = [n]),
      le(e, t, n));
}
const Hc = "3.4.34"; /**
 * @vue/runtime-dom v3.4.34
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 */

const jc = "http://www.w3.org/2000/svg",
  Vc = "http://www.w3.org/1998/Math/MathML",
  je = typeof document < "u" ? document : null,
  xs = je && je.createElement("template"),
  Dc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const s = t === "svg"
        ? je.createElementNS(jc, e)
        : t === "mathml"
        ? je.createElementNS(Vc, e)
        : n
        ? je.createElement(e, { is: n })
        : je.createElement(e);
      return e === "select" && r && r.multiple != null &&
        s.setAttribute("multiple", r.multiple),
        s;
    },
    createText: (e) => je.createTextNode(e),
    createComment: (e) => je.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => je.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, s, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (s && (s === o || s.nextSibling)) {
        for (
          ;
          t.insertBefore(s.cloneNode(!0), n),
            !(s === o || !(s = s.nextSibling));
        );
      } else {
        xs.innerHTML = r === "svg"
          ? `<svg>${e}</svg>`
          : r === "mathml"
          ? `<math>${e}</math>`
          : e;
        const l = xs.content;
        if (r === "svg" || r === "mathml") {
          const c = l.firstChild;
          for (; c.firstChild;) l.appendChild(c.firstChild);
          l.removeChild(c);
        }
        t.insertBefore(l, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  Be = "transition",
  Ot = "animation",
  Bt = Symbol("_vtc"),
  ui = (e, { slots: t }) => vr(Pl, Uc(e), t);
ui.displayName = "Transition";
const fi = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
ui.props = fe({}, To, fi);
const st = (e, t = []) => {
    B(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Ts = (e) => e ? B(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Uc(e) {
  const t = {};
  for (const x in e) x in fi || (t[x] = e[x]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: r,
      duration: s,
      enterFromClass: o = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: c = o,
      appearActiveClass: u = i,
      appearToClass: f = l,
      leaveFromClass: h = `${n}-leave-from`,
      leaveActiveClass: m = `${n}-leave-active`,
      leaveToClass: v = `${n}-leave-to`,
    } = e,
    S = Bc(s),
    O = S && S[0],
    k = S && S[1],
    {
      onBeforeEnter: W,
      onEnter: D,
      onEnterCancelled: p,
      onLeave: y,
      onLeaveCancelled: I,
      onBeforeAppear: T = W,
      onAppear: F = D,
      onAppearCancelled: $ = p,
    } = t,
    M = (x, G, ee) => {
      ot(x, G ? f : l), ot(x, G ? u : i), ee && ee();
    },
    _ = (x, G) => {
      x._isLeaving = !1, ot(x, h), ot(x, v), ot(x, m), G && G();
    },
    N = (x) => (G, ee) => {
      const re = x ? F : D, U = () => M(G, x, ee);
      st(re, [G, U]),
        As(() => {
          ot(G, x ? c : o), ke(G, x ? f : l), Ts(re) || Rs(G, r, O, U);
        });
    };
  return fe(t, {
    onBeforeEnter(x) {
      st(W, [x]), ke(x, o), ke(x, i);
    },
    onBeforeAppear(x) {
      st(T, [x]), ke(x, c), ke(x, u);
    },
    onEnter: N(!1),
    onAppear: N(!0),
    onLeave(x, G) {
      x._isLeaving = !0;
      const ee = () => _(x, G);
      ke(x, h),
        ke(x, m),
        Wc(),
        As(() => {
          x._isLeaving && (ot(x, h), ke(x, v), Ts(y) || Rs(x, r, k, ee));
        }),
        st(y, [x, ee]);
    },
    onEnterCancelled(x) {
      M(x, !1), st(p, [x]);
    },
    onAppearCancelled(x) {
      M(x, !0), st($, [x]);
    },
    onLeaveCancelled(x) {
      _(x), st(I, [x]);
    },
  });
}
function Bc(e) {
  if (e == null) return null;
  if (Z(e)) return [Yn(e.enter), Yn(e.leave)];
  {
    const t = Yn(e);
    return [t, t];
  }
}
function Yn(e) {
  return ji(e);
}
function ke(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[Bt] || (e[Bt] = new Set())).add(t);
}
function ot(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[Bt];
  n && (n.delete(t), n.size || (e[Bt] = void 0));
}
function As(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let kc = 0;
function Rs(e, t, n, r) {
  const s = e._endId = ++kc,
    o = () => {
      s === e._endId && r();
    };
  if (n) return setTimeout(o, n);
  const { type: i, timeout: l, propCount: c } = Kc(e, t);
  if (!i) return r();
  const u = i + "end";
  let f = 0;
  const h = () => {
      e.removeEventListener(u, m), o();
    },
    m = (v) => {
      v.target === e && ++f >= c && h();
    };
  setTimeout(() => {
    f < c && h();
  }, l + 1), e.addEventListener(u, m);
}
function Kc(e, t) {
  const n = window.getComputedStyle(e),
    r = (S) => (n[S] || "").split(", "),
    s = r(`${Be}Delay`),
    o = r(`${Be}Duration`),
    i = Os(s, o),
    l = r(`${Ot}Delay`),
    c = r(`${Ot}Duration`),
    u = Os(l, c);
  let f = null, h = 0, m = 0;
  t === Be
    ? i > 0 && (f = Be, h = i, m = o.length)
    : t === Ot
    ? u > 0 && (f = Ot, h = u, m = c.length)
    : (h = Math.max(i, u),
      f = h > 0 ? i > u ? Be : Ot : null,
      m = f ? f === Be ? o.length : c.length : 0);
  const v = f === Be &&
    /\b(transform|all)(,|$)/.test(r(`${Be}Property`).toString());
  return { type: f, timeout: h, propCount: m, hasTransform: v };
}
function Os(e, t) {
  for (; e.length < t.length;) e = e.concat(e);
  return Math.max(...t.map((n, r) => Ls(n) + Ls(e[r])));
}
function Ls(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Wc() {
  return document.body.offsetHeight;
}
function qc(e, t, n) {
  const r = e[Bt];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : e.className = t;
}
const Ms = Symbol("_vod"),
  Gc = Symbol("_vsh"),
  Xc = Symbol(""),
  Yc = /(^|;)\s*display\s*:/;
function zc(e, t, n) {
  const r = e.style, s = ie(n);
  let o = !1;
  if (n && !s) {
    if (t) {
      if (ie(t)) {
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && gn(r, l, "");
        }
      } else for (const i in t) n[i] == null && gn(r, i, "");
    }
    for (const i in n) i === "display" && (o = !0), gn(r, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = r[Xc];
      i && (n += ";" + i), r.cssText = n, o = Yc.test(n);
    }
  } else t && e.removeAttribute("style");
  Ms in e && (e[Ms] = o ? r.display : "", e[Gc] && (r.display = "none"));
}
const Is = /\s*!important$/;
function gn(e, t, n) {
  if (B(n)) n.forEach((r) => gn(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const r = Jc(e, t);
    Is.test(n)
      ? e.setProperty(Ze(r), n.replace(Is, ""), "important")
      : e[r] = n;
  }
}
const Ps = ["Webkit", "Moz", "ms"], zn = {};
function Jc(e, t) {
  const n = zn[t];
  if (n) return n;
  let r = Oe(t);
  if (r !== "filter" && r in e) return zn[t] = r;
  r = An(r);
  for (let s = 0; s < Ps.length; s++) {
    const o = Ps[s] + r;
    if (o in e) return zn[t] = o;
  }
  return t;
}
const Ns = "http://www.w3.org/1999/xlink";
function Fs(e, t, n, r, s, o = Ki(t)) {
  r && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(Ns, t.slice(6, t.length))
      : e.setAttributeNS(Ns, t, n)
    : n == null || o && !no(n)
    ? e.removeAttribute(t)
    : e.setAttribute(t, o ? "" : Qe(n) ? String(n) : n);
}
function Qc(e, t, n, r) {
  if (t === "innerHTML" || t === "textContent") {
    if (n == null) return;
    e[t] = n;
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && !s.includes("-")) {
    const i = s === "OPTION" ? e.getAttribute("value") || "" : e.value,
      l = n == null ? "" : String(n);
    (i !== l || !("_value" in e)) && (e.value = l),
      n == null && e.removeAttribute(t),
      e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const i = typeof e[t];
    i === "boolean"
      ? n = no(n)
      : n == null && i === "string"
      ? (n = "", o = !0)
      : i === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {}
  o && e.removeAttribute(t);
}
function mt(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Zc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const $s = Symbol("_vei");
function ea(e, t, n, r, s = null) {
  const o = e[$s] || (e[$s] = {}), i = o[t];
  if (r && i) i.value = r;
  else {
    const [l, c] = ta(t);
    if (r) {
      const u = o[t] = sa(r, s);
      mt(e, l, u, c);
    } else i && (Zc(e, l, i, c), o[t] = void 0);
  }
}
const Hs = /(?:Once|Passive|Capture)$/;
function ta(e) {
  let t;
  if (Hs.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Hs);) {
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
    }
  }
  return [e[2] === ":" ? e.slice(3) : Ze(e.slice(2)), t];
}
let Jn = 0;
const na = Promise.resolve(),
  ra = () => Jn || (na.then(() => Jn = 0), Jn = Date.now());
function sa(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    Ae(oa(r, n.value), t, 5, [r]);
  };
  return n.value = e, n.attached = ra(), n;
}
function oa(e, t) {
  if (B(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    },
      t.map((r) => (s) => !s._stopped && r && r(s));
  } else return t;
}
const js = (e) =>
    e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
  ia = (e, t, n, r, s, o) => {
    const i = s === "svg";
    t === "class"
      ? qc(e, r, i)
      : t === "style"
      ? zc(e, n, r)
      : Kt(t)
      ? Er(t) || ea(e, t, n, r, o)
      : (t[0] === "."
          ? (t = t.slice(1), !0)
          : t[0] === "^"
          ? (t = t.slice(1), !1)
          : la(e, t, r, i))
      ? (Qc(e, t, r),
        !e.tagName.includes("-") &&
        (t === "value" || t === "checked" || t === "selected") &&
        Fs(e, t, r, i, o, t !== "value"))
      : (t === "true-value"
        ? e._trueValue = r
        : t === "false-value" && (e._falseValue = r),
        Fs(e, t, r, i));
  };
function la(e, t, n, r) {
  if (r) {
    return !!(t === "innerHTML" || t === "textContent" ||
      t in e && js(t) && K(n));
  }
  if (
    t === "spellcheck" || t === "draggable" || t === "translate" ||
    t === "form" || t === "list" && e.tagName === "INPUT" ||
    t === "type" && e.tagName === "TEXTAREA"
  ) return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE") {
      return !1;
    }
  }
  return js(t) && ie(n) ? !1 : t in e;
}
const Vs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return B(t) ? (n) => dn(t, n) : t;
};
function ca(e) {
  e.target.composing = !0;
}
function Ds(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Qn = Symbol("_assign"),
  Cu = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
      e[Qn] = Vs(s);
      const o = r || s.props && s.props.type === "number";
      mt(e, t ? "change" : "input", (i) => {
        if (i.target.composing) return;
        let l = e.value;
        n && (l = l.trim()), o && (l = cr(l)), e[Qn](l);
      }),
        n && mt(e, "change", () => {
          e.value = e.value.trim();
        }),
        t ||
        (mt(e, "compositionstart", ca),
          mt(e, "compositionend", Ds),
          mt(e, "change", Ds));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(
      e,
      { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: o } },
      i,
    ) {
      if (e[Qn] = Vs(i), e.composing) return;
      const l = (o || e.type === "number") && !/^0\d/.test(e.value)
          ? cr(e.value)
          : e.value,
        c = t ?? "";
      l !== c &&
        (document.activeElement === e && e.type !== "range" &&
            (r && t === n || s && e.value.trim() === c) || (e.value = c));
    },
  },
  aa = ["ctrl", "shift", "alt", "meta"],
  ua = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => aa.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Su = (e, t) => {
    const n = e._withMods || (e._withMods = {}), r = t.join(".");
    return n[r] || (n[r] = (s, ...o) => {
      for (let i = 0; i < t.length; i++) {
        const l = ua[t[i]];
        if (l && l(s, t)) return;
      }
      return e(s, ...o);
    });
  },
  fa = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  xu = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
    return n[r] || (n[r] = (s) => {
      if (!("key" in s)) return;
      const o = Ze(s.key);
      if (t.some((i) => i === o || fa[i] === o)) return e(s);
    });
  },
  di = fe({ patchProp: ia }, Dc);
let Ht, Us = !1;
function da() {
  return Ht || (Ht = dc(di));
}
function ha() {
  return Ht = Us ? Ht : hc(di), Us = !0, Ht;
}
const Tu = (...e) => {
    const t = da().createApp(...e), { mount: n } = t;
    return t.mount = (r) => {
      const s = pi(r);
      if (!s) return;
      const o = t._component;
      !K(o) && !o.render && !o.template && (o.template = s.innerHTML),
        s.innerHTML = "";
      const i = n(s, !1, hi(s));
      return s instanceof Element &&
        (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
        i;
    },
      t;
  },
  Au = (...e) => {
    const t = ha().createApp(...e), { mount: n } = t;
    return t.mount = (r) => {
      const s = pi(r);
      if (s) return n(s, !0, hi(s));
    },
      t;
  };
function hi(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) {
    return "mathml";
  }
}
function pi(e) {
  return ie(e) ? document.querySelector(e) : e;
}
const Ru = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, s] of t) n[r] = s;
    return n;
  },
  pa = "modulepreload",
  ga = function (e) {
    return "/" + e;
  },
  Bs = {},
  Ou = function (t, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const o = document.querySelector("meta[property=csp-nonce]"),
        i = (o == null ? void 0 : o.nonce) ||
          (o == null ? void 0 : o.getAttribute("nonce"));
      s = Promise.all(n.map((l) => {
        if (l = ga(l), l in Bs) return;
        Bs[l] = !0;
        const c = l.endsWith(".css"), u = c ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${l}"]${u}`)) return;
        const f = document.createElement("link");
        if (
          f.rel = c ? "stylesheet" : pa,
            c || (f.as = "script", f.crossOrigin = ""),
            f.href = l,
            i && f.setAttribute("nonce", i),
            document.head.appendChild(f),
            c
        ) {
          return new Promise((h, m) => {
            f.addEventListener("load", h),
              f.addEventListener(
                "error",
                () => m(new Error(`Unable to preload CSS for ${l}`)),
              );
          });
        }
      }));
    }
    return s.then(() => t()).catch((o) => {
      const i = new Event("vite:preloadError", { cancelable: !0 });
      if (i.payload = o, window.dispatchEvent(i), !i.defaultPrevented) throw o;
    });
  },
  ma = window.__VP_SITE_DATA__;
function kr(e) {
  return oo() ? (Xi(e), !0) : !1;
}
function $e(e) {
  return typeof e == "function" ? e() : wo(e);
}
const gi = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ya = Object.prototype.toString,
  _a = (e) => ya.call(e) === "[object Object]",
  kt = () => {},
  ks = ba();
function ba() {
  var e, t;
  return gi &&
    ((e = window == null ? void 0 : window.navigator) == null
      ? void 0
      : e.userAgent) &&
    (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) ||
      ((t = window == null ? void 0 : window.navigator) == null
              ? void 0
              : t.maxTouchPoints) > 2 &&
        /iPad|Macintosh/.test(
          window == null ? void 0 : window.navigator.userAgent,
        ));
}
function va(e, t) {
  function n(...r) {
    return new Promise((s, o) => {
      Promise.resolve(
        e(() => t.apply(this, r), { fn: t, thisArg: this, args: r }),
      ).then(s).catch(o);
    });
  }
  return n;
}
const mi = (e) => e();
function wa(e, t = {}) {
  let n, r, s = kt;
  const o = (l) => {
    clearTimeout(l), s(), s = kt;
  };
  return (l) => {
    const c = $e(e), u = $e(t.maxWait);
    return n && o(n),
      c <= 0 || u !== void 0 && u <= 0
        ? (r && (o(r), r = null), Promise.resolve(l()))
        : new Promise((f, h) => {
          s = t.rejectOnCancel ? h : f,
            u && !r && (r = setTimeout(() => {
              n && o(n), r = null, f(l());
            }, u)),
            n = setTimeout(() => {
              r && o(r), r = null, f(l());
            }, c);
        });
  };
}
function Ea(e = mi) {
  const t = oe(!0);
  function n() {
    t.value = !1;
  }
  function r() {
    t.value = !0;
  }
  const s = (...o) => {
    t.value && e(...o);
  };
  return { isActive: Ln(t), pause: n, resume: r, eventFilter: s };
}
function Ca(e) {
  return jn();
}
function yi(...e) {
  if (e.length !== 1) return Cl(...e);
  const t = e[0];
  return typeof t == "function" ? Ln(vl(() => ({ get: t, set: kt }))) : oe(t);
}
function _i(e, t, n = {}) {
  const { eventFilter: r = mi, ...s } = n;
  return Fe(e, va(r, t), s);
}
function Sa(e, t, n = {}) {
  const { eventFilter: r, ...s } = n,
    { eventFilter: o, pause: i, resume: l, isActive: c } = Ea(r);
  return {
    stop: _i(e, t, { ...s, eventFilter: o }),
    pause: i,
    resume: l,
    isActive: c,
  };
}
function Kr(e, t = !0, n) {
  Ca() ? Tt(e, n) : t ? e() : Mn(e);
}
function Lu(e, t, n = {}) {
  const { debounce: r = 0, maxWait: s = void 0, ...o } = n;
  return _i(e, t, { ...o, eventFilter: wa(r, { maxWait: s }) });
}
function Mu(e, t, n) {
  let r;
  de(n) ? r = { evaluating: n } : r = {};
  const {
      lazy: s = !1,
      evaluating: o = void 0,
      shallow: i = !0,
      onError: l = kt,
    } = r,
    c = oe(!s),
    u = i ? Fr(t) : oe(t);
  let f = 0;
  return Ur(async (h) => {
    if (!c.value) return;
    f++;
    const m = f;
    let v = !1;
    o && Promise.resolve().then(() => {
      o.value = !0;
    });
    try {
      const S = await e((O) => {
        h(() => {
          o && (o.value = !1), v || O();
        });
      });
      m === f && (u.value = S);
    } catch (S) {
      l(S);
    } finally {
      o && m === f && (o.value = !1), v = !0;
    }
  }),
    s ? se(() => (c.value = !0, u.value)) : u;
}
function bi(e) {
  var t;
  const n = $e(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Le = gi ? window : void 0;
function xt(...e) {
  let t, n, r, s;
  if (
    typeof e[0] == "string" || Array.isArray(e[0])
      ? ([n, r, s] = e, t = Le)
      : [t, n, r, s] = e, !t
  ) return kt;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const o = [],
    i = () => {
      o.forEach((f) => f()), o.length = 0;
    },
    l = (
      f,
      h,
      m,
      v,
    ) => (f.addEventListener(h, m, v), () => f.removeEventListener(h, m, v)),
    c = Fe(() => [bi(t), $e(s)], ([f, h]) => {
      if (i(), !f) return;
      const m = _a(h) ? { ...h } : h;
      o.push(...n.flatMap((v) => r.map((S) => l(f, v, S, m))));
    }, { immediate: !0, flush: "post" }),
    u = () => {
      c(), i();
    };
  return kr(u), u;
}
function xa(e) {
  return typeof e == "function"
    ? e
    : typeof e == "string"
    ? (t) => t.key === e
    : Array.isArray(e)
    ? (t) => e.includes(t.key)
    : () => !0;
}
function Iu(...e) {
  let t, n, r = {};
  e.length === 3
    ? (t = e[0], n = e[1], r = e[2])
    : e.length === 2
    ? typeof e[1] == "object"
      ? (t = !0, n = e[0], r = e[1])
      : (t = e[0], n = e[1])
    : (t = !0, n = e[0]);
  const {
      target: s = Le,
      eventName: o = "keydown",
      passive: i = !1,
      dedupe: l = !1,
    } = r,
    c = xa(t);
  return xt(s, o, (f) => {
    f.repeat && $e(l) || c(f) && n(f);
  }, i);
}
function Ta() {
  const e = oe(!1), t = jn();
  return t && Tt(() => {
    e.value = !0;
  }, t),
    e;
}
function Aa(e) {
  const t = Ta();
  return se(() => (t.value, !!e()));
}
function vi(e, t = {}) {
  const { window: n = Le } = t,
    r = Aa(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let s;
  const o = oe(!1),
    i = (u) => {
      o.value = u.matches;
    },
    l = () => {
      s &&
        ("removeEventListener" in s
          ? s.removeEventListener("change", i)
          : s.removeListener(i));
    },
    c = Ur(() => {
      r.value &&
        (l(),
          s = n.matchMedia($e(e)),
          "addEventListener" in s
            ? s.addEventListener("change", i)
            : s.addListener(i),
          o.value = s.matches);
    });
  return kr(() => {
    c(), l(), s = void 0;
  }),
    o;
}
const cn = typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {},
  an = "__vueuse_ssr_handlers__",
  Ra = Oa();
function Oa() {
  return an in cn || (cn[an] = cn[an] || {}), cn[an];
}
function wi(e, t) {
  return Ra[e] || t;
}
function La(e) {
  return e == null
    ? "any"
    : e instanceof Set
    ? "set"
    : e instanceof Map
    ? "map"
    : e instanceof Date
    ? "date"
    : typeof e == "boolean"
    ? "boolean"
    : typeof e == "string"
    ? "string"
    : typeof e == "object"
    ? "object"
    : Number.isNaN(e)
    ? "any"
    : "number";
}
const Ma = {
    boolean: { read: (e) => e === "true", write: (e) => String(e) },
    object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) },
    number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) },
    any: { read: (e) => e, write: (e) => String(e) },
    string: { read: (e) => e, write: (e) => String(e) },
    map: {
      read: (e) => new Map(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e.entries())),
    },
    set: {
      read: (e) => new Set(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e)),
    },
    date: { read: (e) => new Date(e), write: (e) => e.toISOString() },
  },
  Ks = "vueuse-storage";
function Wr(e, t, n, r = {}) {
  var s;
  const {
      flush: o = "pre",
      deep: i = !0,
      listenToStorageChanges: l = !0,
      writeDefaults: c = !0,
      mergeDefaults: u = !1,
      shallow: f,
      window: h = Le,
      eventFilter: m,
      onError: v = (_) => {
        console.error(_);
      },
      initOnMounted: S,
    } = r,
    O = (f ? Fr : oe)(typeof t == "function" ? t() : t);
  if (!n) {
    try {
      n = wi("getDefaultStorage", () => {
        var _;
        return (_ = Le) == null ? void 0 : _.localStorage;
      })();
    } catch (_) {
      v(_);
    }
  }
  if (!n) return O;
  const k = $e(t),
    W = La(k),
    D = (s = r.serializer) != null ? s : Ma[W],
    { pause: p, resume: y } = Sa(O, () => T(O.value), {
      flush: o,
      deep: i,
      eventFilter: m,
    });
  h && l && Kr(() => {
    xt(h, "storage", $), xt(h, Ks, M), S && $();
  }), S || $();
  function I(_, N) {
    h &&
      h.dispatchEvent(
        new CustomEvent(Ks, {
          detail: { key: e, oldValue: _, newValue: N, storageArea: n },
        }),
      );
  }
  function T(_) {
    try {
      const N = n.getItem(e);
      if (_ == null) I(N, null), n.removeItem(e);
      else {
        const x = D.write(_);
        N !== x && (n.setItem(e, x), I(N, x));
      }
    } catch (N) {
      v(N);
    }
  }
  function F(_) {
    const N = _ ? _.newValue : n.getItem(e);
    if (N == null) return c && k != null && n.setItem(e, D.write(k)), k;
    if (!_ && u) {
      const x = D.read(N);
      return typeof u == "function"
        ? u(x, k)
        : W === "object" && !Array.isArray(x)
        ? { ...k, ...x }
        : x;
    } else return typeof N != "string" ? N : D.read(N);
  }
  function $(_) {
    if (!(_ && _.storageArea !== n)) {
      if (_ && _.key == null) {
        O.value = k;
        return;
      }
      if (!(_ && _.key !== e)) {
        p();
        try {
          (_ == null ? void 0 : _.newValue) !== D.write(O.value) &&
            (O.value = F(_));
        } catch (N) {
          v(N);
        } finally {
          _ ? Mn(y) : y();
        }
      }
    }
  }
  function M(_) {
    $(_.detail);
  }
  return O;
}
function Ei(e) {
  return vi("(prefers-color-scheme: dark)", e);
}
function Ia(e = {}) {
  const {
      selector: t = "html",
      attribute: n = "class",
      initialValue: r = "auto",
      window: s = Le,
      storage: o,
      storageKey: i = "vueuse-color-scheme",
      listenToStorageChanges: l = !0,
      storageRef: c,
      emitAuto: u,
      disableTransition: f = !0,
    } = e,
    h = { auto: "", light: "light", dark: "dark", ...e.modes || {} },
    m = Ei({ window: s }),
    v = se(() => m.value ? "dark" : "light"),
    S = c ||
      (i == null
        ? yi(r)
        : Wr(i, r, o, { window: s, listenToStorageChanges: l })),
    O = se(() => S.value === "auto" ? v.value : S.value),
    k = wi("updateHTMLAttrs", (y, I, T) => {
      const F = typeof y == "string"
        ? s == null ? void 0 : s.document.querySelector(y)
        : bi(y);
      if (!F) return;
      let $;
      if (
        f && ($ = s.document.createElement("style"),
          $.appendChild(
            document.createTextNode(
              "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}",
            ),
          ),
          s.document.head.appendChild($)), I === "class"
      ) {
        const M = T.split(/\s/g);
        Object.values(h).flatMap((_) => (_ || "").split(/\s/g)).filter(Boolean)
          .forEach((_) => {
            M.includes(_) ? F.classList.add(_) : F.classList.remove(_);
          });
      } else F.setAttribute(I, T);
      f && (s.getComputedStyle($).opacity, document.head.removeChild($));
    });
  function W(y) {
    var I;
    k(t, n, (I = h[y]) != null ? I : y);
  }
  function D(y) {
    e.onChanged ? e.onChanged(y, W) : W(y);
  }
  Fe(O, D, { flush: "post", immediate: !0 }), Kr(() => D(O.value));
  const p = se({
    get() {
      return u ? S.value : O.value;
    },
    set(y) {
      S.value = y;
    },
  });
  try {
    return Object.assign(p, { store: S, system: v, state: O });
  } catch {
    return p;
  }
}
function Pa(e = {}) {
  const { valueDark: t = "dark", valueLight: n = "", window: r = Le } = e,
    s = Ia({
      ...e,
      onChanged: (l, c) => {
        var u;
        e.onChanged
          ? (u = e.onChanged) == null || u.call(e, l === "dark", c, l)
          : c(l);
      },
      modes: { dark: t, light: n },
    }),
    o = se(() =>
      s.system ? s.system.value : Ei({ window: r }).value ? "dark" : "light"
    );
  return se({
    get() {
      return s.value === "dark";
    },
    set(l) {
      const c = l ? "dark" : "light";
      o.value === c ? s.value = "auto" : s.value = c;
    },
  });
}
function Zn(e) {
  return typeof Window < "u" && e instanceof Window
    ? e.document.documentElement
    : typeof Document < "u" && e instanceof Document
    ? e.documentElement
    : e;
}
function Pu(e, t, n = {}) {
  const { window: r = Le } = n;
  return Wr(e, t, r == null ? void 0 : r.localStorage, n);
}
function Ci(e) {
  const t = window.getComputedStyle(e);
  if (
    t.overflowX === "scroll" || t.overflowY === "scroll" ||
    t.overflowX === "auto" && e.clientWidth < e.scrollWidth ||
    t.overflowY === "auto" && e.clientHeight < e.scrollHeight
  ) return !0;
  {
    const n = e.parentNode;
    return !n || n.tagName === "BODY" ? !1 : Ci(n);
  }
}
function Na(e) {
  const t = e || window.event, n = t.target;
  return Ci(n)
    ? !1
    : t.touches.length > 1
    ? !0
    : (t.preventDefault && t.preventDefault(), !1);
}
const er = new WeakMap();
function Nu(e, t = !1) {
  const n = oe(t);
  let r = null, s = "";
  Fe(yi(e), (l) => {
    const c = Zn($e(l));
    if (c) {
      const u = c;
      if (
        er.get(u) || er.set(u, u.style.overflow),
          u.style.overflow !== "hidden" && (s = u.style.overflow),
          u.style.overflow === "hidden"
      ) return n.value = !0;
      if (n.value) return u.style.overflow = "hidden";
    }
  }, { immediate: !0 });
  const o = () => {
      const l = Zn($e(e));
      !l || n.value || (ks && (r = xt(l, "touchmove", (c) => {
        Na(c);
      }, { passive: !1 })),
        l.style.overflow = "hidden",
        n.value = !0);
    },
    i = () => {
      const l = Zn($e(e));
      !l || !n.value ||
        (ks && (r == null || r()),
          l.style.overflow = s,
          er.delete(l),
          n.value = !1);
    };
  return kr(i),
    se({
      get() {
        return n.value;
      },
      set(l) {
        l ? o() : i();
      },
    });
}
function Fu(e, t, n = {}) {
  const { window: r = Le } = n;
  return Wr(e, t, r == null ? void 0 : r.sessionStorage, n);
}
function $u(e = {}) {
  const { window: t = Le, behavior: n = "auto" } = e;
  if (!t) return { x: oe(0), y: oe(0) };
  const r = oe(t.scrollX),
    s = oe(t.scrollY),
    o = se({
      get() {
        return r.value;
      },
      set(l) {
        scrollTo({ left: l, behavior: n });
      },
    }),
    i = se({
      get() {
        return s.value;
      },
      set(l) {
        scrollTo({ top: l, behavior: n });
      },
    });
  return xt(t, "scroll", () => {
    r.value = t.scrollX, s.value = t.scrollY;
  }, { capture: !1, passive: !0 }),
    { x: o, y: i };
}
function Hu(e = {}) {
  const {
      window: t = Le,
      initialWidth: n = Number.POSITIVE_INFINITY,
      initialHeight: r = Number.POSITIVE_INFINITY,
      listenOrientation: s = !0,
      includeScrollbar: o = !0,
    } = e,
    i = oe(n),
    l = oe(r),
    c = () => {
      t &&
        (o
          ? (i.value = t.innerWidth, l.value = t.innerHeight)
          : (i.value = t.document.documentElement.clientWidth,
            l.value = t.document.documentElement.clientHeight));
    };
  if (c(), Kr(c), xt("resize", c, { passive: !0 }), s) {
    const u = vi("(orientation: portrait)");
    Fe(u, () => c());
  }
  return { width: i, height: l };
}
var tr = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 },
  nr = {};
const Si = /^(?:[a-z]+:|\/\/)/i,
  Fa = "vitepress-theme-appearance",
  $a = /#.*$/,
  Ha = /[?#].*$/,
  ja = /(?:(^|\/)index)?\.(?:md|html)$/,
  he = typeof document < "u",
  xi = {
    relativePath: "404.md",
    filePath: "",
    title: "404",
    description: "Not Found",
    headers: [],
    frontmatter: { sidebar: !1, layout: "page" },
    lastUpdated: 0,
    isNotFound: !0,
  };
function Va(e, t, n = !1) {
  if (t === void 0) return !1;
  if (e = Ws(`/${e}`), n) return new RegExp(t).test(e);
  if (Ws(t) !== e) return !1;
  const r = t.match($a);
  return r ? (he ? location.hash : "") === r[0] : !0;
}
function Ws(e) {
  return decodeURI(e).replace(Ha, "").replace(ja, "$1");
}
function Da(e) {
  return Si.test(e);
}
function Ua(e, t) {
  return Object.keys((e == null ? void 0 : e.locales) || {}).find((n) =>
    n !== "root" && !Da(n) && Va(t, `/${n}/`, !0)
  ) || "root";
}
function Ba(e, t) {
  var r, s, o, i, l, c, u;
  const n = Ua(e, t);
  return Object.assign({}, e, {
    localeIndex: n,
    lang: ((r = e.locales[n]) == null ? void 0 : r.lang) ?? e.lang,
    dir: ((s = e.locales[n]) == null ? void 0 : s.dir) ?? e.dir,
    title: ((o = e.locales[n]) == null ? void 0 : o.title) ?? e.title,
    titleTemplate: ((i = e.locales[n]) == null ? void 0 : i.titleTemplate) ??
      e.titleTemplate,
    description: ((l = e.locales[n]) == null ? void 0 : l.description) ??
      e.description,
    head: Ai(e.head, ((c = e.locales[n]) == null ? void 0 : c.head) ?? []),
    themeConfig: {
      ...e.themeConfig,
      ...(u = e.locales[n]) == null ? void 0 : u.themeConfig,
    },
  });
}
function Ti(e, t) {
  const n = t.title || e.title, r = t.titleTemplate ?? e.titleTemplate;
  if (typeof r == "string" && r.includes(":title")) {
    return r.replace(/:title/g, n);
  }
  const s = ka(e.title, r);
  return n === s.slice(3) ? n : `${n}${s}`;
}
function ka(e, t) {
  return t === !1
    ? ""
    : t === !0 || t === void 0
    ? ` | ${e}`
    : e === t
    ? ""
    : ` | ${t}`;
}
function Ka(e, t) {
  const [n, r] = t;
  if (n !== "meta") return !1;
  const s = Object.entries(r)[0];
  return s == null ? !1 : e.some(([o, i]) => o === n && i[s[0]] === s[1]);
}
function Ai(e, t) {
  return [...e.filter((n) => !Ka(t, n)), ...t];
}
const Wa = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g, qa = /^[a-z]:/i;
function qs(e) {
  const t = qa.exec(e), n = t ? t[0] : "";
  return n +
    e.slice(n.length).replace(Wa, "_").replace(/(^|\/)_+(?=[^/]*$)/, "$1");
}
const rr = new Set();
function Ga(e) {
  if (rr.size === 0) {
    const n = typeof process == "object" &&
        (nr == null ? void 0 : nr.VITE_EXTRA_EXTENSIONS) ||
      (tr == null ? void 0 : tr.VITE_EXTRA_EXTENSIONS) || "";
    ("3g2,3gp,aac,ai,apng,au,avif,bin,bmp,cer,class,conf,crl,css,csv,dll,doc,eps,epub,exe,gif,gz,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,m4a,man,mid,midi,mjs,mov,mp2,mp3,mp4,mpe,mpeg,mpg,mpp,oga,ogg,ogv,ogx,opus,otf,p10,p7c,p7m,p7s,pdf,png,ps,qt,roff,rtf,rtx,ser,svg,t,tif,tiff,tr,ts,tsv,ttf,txt,vtt,wav,weba,webm,webp,woff,woff2,xhtml,xml,yaml,yml,zip" +
      (n && typeof n == "string" ? "," + n : "")).split(",").forEach((r) =>
        rr.add(r)
      );
  }
  const t = e.split(".").pop();
  return t == null || !rr.has(t.toLowerCase());
}
function ju(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
const Xa = Symbol(), ft = Fr(ma);
function Vu(e) {
  const t = se(() => Ba(ft.value, e.data.relativePath)),
    n = t.value.appearance,
    r = n === "force-dark" ? oe(!0) : n
      ? Pa({
        storageKey: Fa,
        initialValue: () => n === "dark" ? "dark" : "auto",
        ...typeof n == "object" ? n : {},
      })
      : oe(!1),
    s = oe(he ? location.hash : "");
  return he && window.addEventListener("hashchange", () => {
    s.value = location.hash;
  }),
    Fe(() => e.data, () => {
      s.value = he ? location.hash : "";
    }),
    {
      site: t,
      theme: se(() => t.value.themeConfig),
      page: se(() => e.data),
      frontmatter: se(() => e.data.frontmatter),
      params: se(() => e.data.params),
      lang: se(() => t.value.lang),
      dir: se(() => e.data.frontmatter.dir || t.value.dir),
      localeIndex: se(() => t.value.localeIndex || "root"),
      title: se(() => Ti(t.value, e.data)),
      description: se(() => e.data.description || t.value.description),
      isDark: r,
      hash: se(() => s.value),
    };
}
function Ya() {
  const e = Ct(Xa);
  if (!e) throw new Error("vitepress data not properly injected in app");
  return e;
}
function za(e, t) {
  return `${e}${t}`.replace(/\/+/g, "/");
}
function Gs(e) {
  return Si.test(e) || !e.startsWith("/") ? e : za(ft.value.base, e);
}
function Ja(e) {
  let t = e.replace(/\.html$/, "");
  if (t = decodeURIComponent(t), t = t.replace(/\/$/, "/index"), he) {
    const n = "/";
    t = qs(t.slice(n.length).replace(/\//g, "_") || "index") + ".md";
    let r = __VP_HASH_MAP__[t.toLowerCase()];
    if (
      r ||
      (t = t.endsWith("_index.md")
        ? t.slice(0, -9) + ".md"
        : t.slice(0, -3) + "_index.md",
        r = __VP_HASH_MAP__[t.toLowerCase()]), !r
    ) return null;
    t = `${n}assets/${t}.${r}.js`;
  } else t = `./${qs(t.slice(1).replace(/\//g, "_"))}.md.js`;
  return t;
}
let mn = [];
function Du(e) {
  mn.push(e),
    Fn(() => {
      mn = mn.filter((t) => t !== e);
    });
}
function Qa() {
  let e = ft.value.scrollOffset, t = 0, n = 24;
  if (
    typeof e == "object" && "padding" in e && (n = e.padding, e = e.selector),
      typeof e == "number"
  ) t = e;
  else if (typeof e == "string") t = Xs(e, n);
  else if (Array.isArray(e)) {
    for (const r of e) {
      const s = Xs(r, n);
      if (s) {
        t = s;
        break;
      }
    }
  }
  return t;
}
function Xs(e, t) {
  const n = document.querySelector(e);
  if (!n) return 0;
  const r = n.getBoundingClientRect().bottom;
  return r < 0 ? 0 : r + t;
}
const Za = Symbol(),
  Ri = "http://a.com",
  eu = () => ({ path: "/", component: null, data: xi });
function Uu(e, t) {
  const n = On(eu()), r = { route: n, go: s };
  async function s(l = he ? location.href : "/") {
    var c, u;
    l = sr(l),
      await ((c = r.onBeforeRouteChange) == null ? void 0 : c.call(r, l)) !==
        !1 &&
      (he && l !== sr(location.href) &&
        (history.replaceState({ scrollPosition: window.scrollY }, ""),
          history.pushState({}, "", l)),
        await i(l),
        await ((u = r.onAfterRouteChanged) == null ? void 0 : u.call(r, l)));
  }
  let o = null;
  async function i(l, c = 0, u = !1) {
    var m;
    if (
      await ((m = r.onBeforePageLoad) == null ? void 0 : m.call(r, l)) === !1
    ) return;
    const f = new URL(l, Ri), h = o = f.pathname;
    try {
      let v = await e(h);
      if (!v) throw new Error(`Page not found: ${h}`);
      if (o === h) {
        o = null;
        const { default: S, __pageData: O } = v;
        if (!S) throw new Error(`Invalid route component: ${S}`);
        n.path = he ? h : Gs(h),
          n.component = hn(S),
          n.data = hn(O),
          he && Mn(() => {
            let k = ft.value.base +
              O.relativePath.replace(/(?:(^|\/)index)?\.md$/, "$1");
            if (
              !ft.value.cleanUrls && !k.endsWith("/") && (k += ".html"),
                k !== f.pathname &&
                (f.pathname = k,
                  l = k + f.search + f.hash,
                  history.replaceState({}, "", l)),
                f.hash && !c
            ) {
              let W = null;
              try {
                W = document.getElementById(
                  decodeURIComponent(f.hash).slice(1),
                );
              } catch (D) {
                console.warn(D);
              }
              if (W) {
                Ys(W, f.hash);
                return;
              }
            }
            window.scrollTo(0, c);
          });
      }
    } catch (v) {
      if (
        !/fetch|Page not found/.test(v.message) &&
        !/^\/404(\.html|\/)?$/.test(l) && console.error(v), !u
      ) {
        try {
          const S = await fetch(ft.value.base + "hashmap.json");
          window.__VP_HASH_MAP__ = await S.json(), await i(l, c, !0);
          return;
        } catch {}
      }
      if (o === h) {
        o = null, n.path = he ? h : Gs(h), n.component = t ? hn(t) : null;
        const S = he
          ? h.replace(/(^|\/)$/, "$1index").replace(/(\.html)?$/, ".md")
            .replace(/^\//, "")
          : "404.md";
        n.data = { ...xi, relativePath: S };
      }
    }
  }
  return he &&
    (history.state === null && history.replaceState({}, ""),
      window.addEventListener("click", (l) => {
        if (
          l.defaultPrevented || !(l.target instanceof Element) ||
          l.target.closest("button") || l.button !== 0 || l.ctrlKey ||
          l.shiftKey || l.altKey || l.metaKey
        ) return;
        const c = l.target.closest("a");
        if (
          !c || c.closest(".vp-raw") || c.hasAttribute("download") ||
          c.hasAttribute("target")
        ) return;
        const u = c.getAttribute("href") ??
          (c instanceof SVGAElement ? c.getAttribute("xlink:href") : null);
        if (u == null) return;
        const { href: f, origin: h, pathname: m, hash: v, search: S } = new URL(
            u,
            c.baseURI,
          ),
          O = new URL(location.href);
        h === O.origin && Ga(m) &&
          (l.preventDefault(),
            m === O.pathname && S === O.search
              ? (v !== O.hash &&
                (history.pushState({}, "", f),
                  window.dispatchEvent(
                    new HashChangeEvent("hashchange", {
                      oldURL: O.href,
                      newURL: f,
                    }),
                  )),
                v
                  ? Ys(c, v, c.classList.contains("header-anchor"))
                  : window.scrollTo(0, 0))
              : s(f));
      }, { capture: !0 }),
      window.addEventListener("popstate", async (l) => {
        var c;
        l.state !== null &&
          (await i(sr(location.href), l.state && l.state.scrollPosition || 0),
            (c = r.onAfterRouteChanged) == null || c.call(r, location.href));
      }),
      window.addEventListener("hashchange", (l) => {
        l.preventDefault();
      })),
    r;
}
function tu() {
  const e = Ct(Za);
  if (!e) throw new Error("useRouter() is called without provider.");
  return e;
}
function Oi() {
  return tu().route;
}
function Ys(e, t, n = !1) {
  let r = null;
  try {
    r = e.classList.contains("header-anchor")
      ? e
      : document.getElementById(decodeURIComponent(t).slice(1));
  } catch (s) {
    console.warn(s);
  }
  if (r) {
    let s = function () {
      !n || Math.abs(i - window.scrollY) > window.innerHeight
        ? window.scrollTo(0, i)
        : window.scrollTo({ left: 0, top: i, behavior: "smooth" });
    };
    const o = parseInt(window.getComputedStyle(r).paddingTop, 10),
      i = window.scrollY + r.getBoundingClientRect().top - Qa() + o;
    requestAnimationFrame(s);
  }
}
function sr(e) {
  const t = new URL(e, Ri);
  return t.pathname = t.pathname.replace(/(^|\/)index(\.html)?$/, "$1"),
    ft.value.cleanUrls
      ? t.pathname = t.pathname.replace(/\.html$/, "")
      : !t.pathname.endsWith("/") && !t.pathname.endsWith(".html") &&
        (t.pathname += ".html"),
    t.pathname + t.search + t.hash;
}
const or = () => mn.forEach((e) => e()),
  Bu = Hr({
    name: "VitePressContent",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e) {
      const t = Oi(), { site: n } = Ya();
      return () =>
        vr(e.as, n.value.contentProps ?? { style: { position: "relative" } }, [
          t.component
            ? vr(t.component, {
              onVnodeMounted: or,
              onVnodeUpdated: or,
              onVnodeUnmounted: or,
            })
            : "404 Page Not Found",
        ]);
    },
  }),
  ku = Hr({
    setup(e, { slots: t }) {
      const n = oe(!1);
      return Tt(() => {
        n.value = !0;
      }),
        () => n.value && t.default ? t.default() : null;
    },
  });
function Ku() {
  he && window.addEventListener("click", (e) => {
    var n;
    const t = e.target;
    if (t.matches(".vp-code-group input")) {
      const r = (n = t.parentElement) == null ? void 0 : n.parentElement;
      if (!r) return;
      const s = Array.from(r.querySelectorAll("input")).indexOf(t);
      if (s < 0) return;
      const o = r.querySelector(".blocks");
      if (!o) return;
      const i = Array.from(o.children).find((u) =>
        u.classList.contains("active")
      );
      if (!i) return;
      const l = o.children[s];
      if (!l || i === l) return;
      i.classList.remove("active"), l.classList.add("active");
      const c = r == null ? void 0 : r.querySelector(`label[for="${t.id}"]`);
      c == null || c.scrollIntoView({ block: "nearest" });
    }
  });
}
function Wu() {
  if (he) {
    const e = new WeakMap();
    window.addEventListener("click", (t) => {
      var r;
      const n = t.target;
      if (n.matches('div[class*="language-"] > button.copy')) {
        const s = n.parentElement,
          o = (r = n.nextElementSibling) == null
            ? void 0
            : r.nextElementSibling;
        if (!s || !o) return;
        const i = /language-(shellscript|shell|bash|sh|zsh)/.test(s.className),
          l = [".vp-copy-ignore", ".diff.remove"],
          c = o.cloneNode(!0);
        c.querySelectorAll(l.join(",")).forEach((f) => f.remove());
        let u = c.textContent || "";
        i && (u = u.replace(/^ *(\$|>) /gm, "").trim()),
          nu(u).then(() => {
            n.classList.add("copied"), clearTimeout(e.get(n));
            const f = setTimeout(() => {
              n.classList.remove("copied"), n.blur(), e.delete(n);
            }, 2e3);
            e.set(n, f);
          });
      }
    });
  }
}
async function nu(e) {
  try {
    return navigator.clipboard.writeText(e);
  } catch {
    const t = document.createElement("textarea"), n = document.activeElement;
    t.value = e,
      t.setAttribute("readonly", ""),
      t.style.contain = "strict",
      t.style.position = "absolute",
      t.style.left = "-9999px",
      t.style.fontSize = "12pt";
    const r = document.getSelection(),
      s = r ? r.rangeCount > 0 && r.getRangeAt(0) : null;
    document.body.appendChild(t),
      t.select(),
      t.selectionStart = 0,
      t.selectionEnd = e.length,
      document.execCommand("copy"),
      document.body.removeChild(t),
      s && (r.removeAllRanges(), r.addRange(s)),
      n && n.focus();
  }
}
function qu(e, t) {
  let n = !0, r = [];
  const s = (o) => {
    if (n) {
      n = !1,
        o.forEach((l) => {
          const c = ir(l);
          for (const u of document.head.children) {
            if (u.isEqualNode(c)) {
              r.push(u);
              return;
            }
          }
        });
      return;
    }
    const i = o.map(ir);
    r.forEach((l, c) => {
      const u = i.findIndex((f) =>
        f == null ? void 0 : f.isEqualNode(l ?? null)
      );
      u !== -1 ? delete i[u] : (l == null || l.remove(), delete r[c]);
    }),
      i.forEach((l) => l && document.head.appendChild(l)),
      r = [...r, ...i].filter(Boolean);
  };
  Ur(() => {
    const o = e.data,
      i = t.value,
      l = o && o.description,
      c = o && o.frontmatter.head || [],
      u = Ti(i, o);
    u !== document.title && (document.title = u);
    const f = l || i.description;
    let h = document.querySelector("meta[name=description]");
    h
      ? h.getAttribute("content") !== f && h.setAttribute("content", f)
      : ir(["meta", { name: "description", content: f }]), s(Ai(i.head, su(c)));
  });
}
function ir([e, t, n]) {
  const r = document.createElement(e);
  for (const s in t) r.setAttribute(s, t[s]);
  return n && (r.innerHTML = n),
    e === "script" && !t.async && (r.async = !1),
    r;
}
function ru(e) {
  return e[0] === "meta" && e[1] && e[1].name === "description";
}
function su(e) {
  return e.filter((t) => !ru(t));
}
const lr = new Set(),
  Li = () => document.createElement("link"),
  ou = (e) => {
    const t = Li();
    t.rel = "prefetch", t.href = e, document.head.appendChild(t);
  },
  iu = (e) => {
    const t = new XMLHttpRequest();
    t.open("GET", e, t.withCredentials = !0), t.send();
  };
let un;
const lu = he && (un = Li()) && un.relList && un.relList.supports &&
    un.relList.supports("prefetch")
  ? ou
  : iu;
function Gu() {
  if (!he || !window.IntersectionObserver) return;
  let e;
  if (
    (e = navigator.connection) && (e.saveData || /2g/.test(e.effectiveType))
  ) return;
  const t = window.requestIdleCallback || setTimeout;
  let n = null;
  const r = () => {
    n && n.disconnect(),
      n = new IntersectionObserver((o) => {
        o.forEach((i) => {
          if (i.isIntersecting) {
            const l = i.target;
            n.unobserve(l);
            const { pathname: c } = l;
            if (!lr.has(c)) {
              lr.add(c);
              const u = Ja(c);
              u && lu(u);
            }
          }
        });
      }),
      t(() => {
        document.querySelectorAll("#app a").forEach((o) => {
          const { hostname: i, pathname: l } = new URL(
              o.href instanceof SVGAnimatedString ? o.href.animVal : o.href,
              o.baseURI,
            ),
            c = l.match(/\.\w+$/);
          c && c[0] !== ".html" ||
            o.target !== "_blank" && i === location.hostname &&
              (l !== location.pathname ? n.observe(o) : lr.add(l));
        });
      });
  };
  Tt(r);
  const s = Oi();
  Fe(() => s.path, r),
    Fn(() => {
      n && n.disconnect();
    });
}
export {
  $u as S,
  _e as F,
  _u as au,
  Au as ac,
  au as l,
  bi as aj,
  Bu as a9,
  bu as A,
  Ct as N,
  Cu as as,
  cu as p,
  Da as i,
  de as at,
  Du as H,
  du as D,
  Eu as e,
  Fe as v,
  Fn as z,
  Fr as G,
  ft as ab,
  Fu as am,
  fu as W,
  Ga as f,
  Gs as g,
  Gu as af,
  gu as r,
  he as U,
  hn as av,
  Hr as d,
  Hu as O,
  hu as J,
  ii as a,
  Iu as Q,
  Ja as ae,
  ju as ax,
  kr as ak,
  Ku as ah,
  ku as aa,
  le as I,
  Ll as w,
  Ln as V,
  Lu as ao,
  Mn as R,
  Mo as a1,
  Mu as al,
  mu as a0,
  Nu as Y,
  oe as s,
  Oi as L,
  oi as j,
  Ou as X,
  Pu as an,
  pu as E,
  Qa as C,
  qu as a5,
  Rc as M,
  ri as b,
  Ru as _,
  se as h,
  Si as K,
  Su as a2,
  ti as o,
  Tr as n,
  Tt as y,
  Tu as aw,
  tu as ap,
  ui as T,
  Ur as x,
  Uu as ad,
  uu as ar,
  Va as m,
  vi as q,
  Vl as B,
  vr as ai,
  Vu as a7,
  vu as c,
  Wi as t,
  wo as k,
  Wu as ag,
  wu as a4,
  Xa as a8,
  xr as P,
  xt as aq,
  xu as $,
  Ya as u,
  yu as a3,
  Za as a6,
  Zl as Z,
};
