var kt = Object.defineProperty;
var Ft = (a, e, t) =>
  e in a
    ? kt(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : a[e] = t;
var Ce = (a, e, t) => Ft(a, typeof e != "symbol" ? e + "" : e, t);
import {
  _ as ts,
  a as he,
  a1 as Bt,
  a2 as Kt,
  a8 as Zt,
  ae as Xt,
  aj as Rt,
  ak as Ct,
  al as et,
  am as At,
  an as Lt,
  ao as zt,
  ap as Pt,
  aq as jt,
  ar as Jt,
  as as Ut,
  at as qt,
  au as Gt,
  av as it,
  aw as Yt,
  ax as es,
  b as Wt,
  c as Z,
  d as Mt,
  E as st,
  e as _e,
  F as nt,
  G as be,
  h as ye,
  j as x,
  k as D,
  l as Ht,
  n as tt,
  o as Q,
  p as Qt,
  Q as we,
  R as de,
  s as ne,
  t as fe,
  U as $t,
  v as Ve,
  X as Ot,
  x as Dt,
  Y as Vt,
  y as Me,
} from "./framework.Caa1YTU6.js";
import { c as ns, u as ss } from "./theme.x9Q95YlZ.js";
const is = {
  root: () => Ot(() => import("./@localSearchIndexroot.DUvUKs94.js"), []),
}; /*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/

var vt = [
    "input:not([inert])",
    "select:not([inert])",
    "textarea:not([inert])",
    "a[href]:not([inert])",
    "button:not([inert])",
    "[tabindex]:not(slot):not([inert])",
    "audio[controls]:not([inert])",
    "video[controls]:not([inert])",
    '[contenteditable]:not([contenteditable="false"]):not([inert])',
    "details>summary:first-of-type:not([inert])",
    "details:not([inert])",
  ],
  Ie = vt.join(","),
  mt = typeof Element > "u",
  re = mt
    ? function () {}
    : Element.prototype.matches || Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector,
  Ne = !mt && Element.prototype.getRootNode
    ? function (a) {
      var e;
      return a == null || (e = a.getRootNode) === null || e === void 0
        ? void 0
        : e.call(a);
    }
    : function (a) {
      return a == null ? void 0 : a.ownerDocument;
    },
  ke = function a(e, t) {
    var s;
    t === void 0 && (t = !0);
    var n = e == null || (s = e.getAttribute) === null || s === void 0
        ? void 0
        : s.call(e, "inert"),
      r = n === "" || n === "true",
      i = r || t && e && a(e.parentNode);
    return i;
  },
  rs = function (e) {
    var t,
      s = e == null || (t = e.getAttribute) === null || t === void 0
        ? void 0
        : t.call(e, "contenteditable");
    return s === "" || s === "true";
  },
  gt = function (e, t, s) {
    if (ke(e)) return [];
    var n = Array.prototype.slice.apply(e.querySelectorAll(Ie));
    return t && re.call(e, Ie) && n.unshift(e), n = n.filter(s), n;
  },
  bt = function a(e, t, s) {
    for (var n = [], r = Array.from(e); r.length;) {
      var i = r.shift();
      if (!ke(i, !1)) {
        if (i.tagName === "SLOT") {
          var o = i.assignedElements(),
            c = o.length ? o : i.children,
            l = a(c, !0, s);
          s.flatten
            ? n.push.apply(n, l)
            : n.push({ scopeParent: i, candidates: l });
        } else {
          var h = re.call(i, Ie);
          h && s.filter(i) && (t || !e.includes(i)) && n.push(i);
          var f = i.shadowRoot ||
              typeof s.getShadowRoot == "function" && s.getShadowRoot(i),
            v = !ke(f, !1) && (!s.shadowRootFilter || s.shadowRootFilter(i));
          if (f && v) {
            var b = a(f === !0 ? i.children : f.children, !0, s);
            s.flatten
              ? n.push.apply(n, b)
              : n.push({ scopeParent: i, candidates: b });
          } else r.unshift.apply(r, i.children);
        }
      }
    }
    return n;
  },
  yt = function (e) {
    return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
  },
  ie = function (e) {
    if (!e) throw new Error("No node provided");
    return e.tabIndex < 0 &&
        (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || rs(e)) && !yt(e)
      ? 0
      : e.tabIndex;
  },
  as = function (e, t) {
    var s = ie(e);
    return s < 0 && t && !yt(e) ? 0 : s;
  },
  os = function (e, t) {
    return e.tabIndex === t.tabIndex
      ? e.documentOrder - t.documentOrder
      : e.tabIndex - t.tabIndex;
  },
  wt = function (e) {
    return e.tagName === "INPUT";
  },
  cs = function (e) {
    return wt(e) && e.type === "hidden";
  },
  ls = function (e) {
    var t = e.tagName === "DETAILS" &&
      Array.prototype.slice.apply(e.children).some(function (s) {
        return s.tagName === "SUMMARY";
      });
    return t;
  },
  us = function (e, t) {
    for (var s = 0; s < e.length; s++) {
      if (e[s].checked && e[s].form === t) return e[s];
    }
  },
  ds = function (e) {
    if (!e.name) return !0;
    var t = e.form || Ne(e),
      s = function (o) {
        return t.querySelectorAll('input[type="radio"][name="' + o + '"]');
      },
      n;
    if (
      typeof window < "u" && typeof window.CSS < "u" &&
      typeof window.CSS.escape == "function"
    ) n = s(window.CSS.escape(e.name));
    else {try {
        n = s(e.name);
      } catch (i) {
        return console.error(
          "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
          i.message,
        ),
          !1;
      }}
    var r = us(n, e.form);
    return !r || r === e;
  },
  hs = function (e) {
    return wt(e) && e.type === "radio";
  },
  fs = function (e) {
    return hs(e) && !ds(e);
  },
  ps = function (e) {
    var t,
      s = e && Ne(e),
      n = (t = s) === null || t === void 0 ? void 0 : t.host,
      r = !1;
    if (s && s !== e) {
      var i, o, c;
      for (
        r = !!((i = n) !== null && i !== void 0 &&
            (o = i.ownerDocument) !== null && o !== void 0 && o.contains(n) ||
          e != null && (c = e.ownerDocument) !== null && c !== void 0 &&
            c.contains(e));
        !r && n;
      ) {
        var l, h, f;
        s = Ne(n),
          n = (l = s) === null || l === void 0 ? void 0 : l.host,
          r = !!((h = n) !== null && h !== void 0 &&
            (f = h.ownerDocument) !== null && f !== void 0 && f.contains(n));
      }
    }
    return r;
  },
  rt = function (e) {
    var t = e.getBoundingClientRect(), s = t.width, n = t.height;
    return s === 0 && n === 0;
  },
  vs = function (e, t) {
    var s = t.displayCheck, n = t.getShadowRoot;
    if (getComputedStyle(e).visibility === "hidden") return !0;
    var r = re.call(e, "details>summary:first-of-type"),
      i = r ? e.parentElement : e;
    if (re.call(i, "details:not([open]) *")) return !0;
    if (!s || s === "full" || s === "legacy-full") {
      if (typeof n == "function") {
        for (var o = e; e;) {
          var c = e.parentElement, l = Ne(e);
          if (c && !c.shadowRoot && n(c) === !0) return rt(e);
          e.assignedSlot
            ? e = e.assignedSlot
            : !c && l !== e.ownerDocument
            ? e = l.host
            : e = c;
        }
        e = o;
      }
      if (ps(e)) return !e.getClientRects().length;
      if (s !== "legacy-full") return !0;
    } else if (s === "non-zero-area") return rt(e);
    return !1;
  },
  ms = function (e) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName)) {
      for (var t = e.parentElement; t;) {
        if (t.tagName === "FIELDSET" && t.disabled) {
          for (var s = 0; s < t.children.length; s++) {
            var n = t.children.item(s);
            if (n.tagName === "LEGEND") {
              return re.call(t, "fieldset[disabled] *") ? !0 : !n.contains(e);
            }
          }
          return !0;
        }
        t = t.parentElement;
      }
    }
    return !1;
  },
  Fe = function (e, t) {
    return !(t.disabled || ke(t) || cs(t) || vs(t, e) || ls(t) || ms(t));
  },
  $e = function (e, t) {
    return !(fs(t) || ie(t) < 0 || !Fe(e, t));
  },
  gs = function (e) {
    var t = parseInt(e.getAttribute("tabindex"), 10);
    return !!(isNaN(t) || t >= 0);
  },
  bs = function a(e) {
    var t = [], s = [];
    return e.forEach(function (n, r) {
      var i = !!n.scopeParent,
        o = i ? n.scopeParent : n,
        c = as(o, i),
        l = i ? a(n.candidates) : o;
      c === 0 ? i ? t.push.apply(t, l) : t.push(o) : s.push({
        documentOrder: r,
        tabIndex: c,
        item: n,
        isScope: i,
        content: l,
      });
    }),
      s.sort(os).reduce(function (n, r) {
        return r.isScope ? n.push.apply(n, r.content) : n.push(r.content), n;
      }, []).concat(t);
  },
  ys = function (e, t) {
    t = t || {};
    var s;
    return t.getShadowRoot
      ? s = bt([e], t.includeContainer, {
        filter: $e.bind(null, t),
        flatten: !1,
        getShadowRoot: t.getShadowRoot,
        shadowRootFilter: gs,
      })
      : s = gt(e, t.includeContainer, $e.bind(null, t)),
      bs(s);
  },
  ws = function (e, t) {
    t = t || {};
    var s;
    return t.getShadowRoot
      ? s = bt([e], t.includeContainer, {
        filter: Fe.bind(null, t),
        flatten: !0,
        getShadowRoot: t.getShadowRoot,
      })
      : s = gt(e, t.includeContainer, Fe.bind(null, t)),
      s;
  },
  ae = function (e, t) {
    if (t = t || {}, !e) throw new Error("No node provided");
    return re.call(e, Ie) === !1 ? !1 : $e(t, e);
  },
  _s = vt.concat("iframe").join(","),
  Ae = function (e, t) {
    if (t = t || {}, !e) throw new Error("No node provided");
    return re.call(e, _s) === !1 ? !1 : Fe(t, e);
  }; /*!
* focus-trap 7.5.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/

function at(a, e) {
  var t = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(a);
    e && (s = s.filter(function (n) {
      return Object.getOwnPropertyDescriptor(a, n).enumerable;
    })), t.push.apply(t, s);
  }
  return t;
}
function ot(a) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? at(Object(t), !0).forEach(function (s) {
        xs(a, s, t[s]);
      })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t))
      : at(Object(t)).forEach(function (s) {
        Object.defineProperty(a, s, Object.getOwnPropertyDescriptor(t, s));
      });
  }
  return a;
}
function xs(a, e, t) {
  return e = Es(e),
    e in a
      ? Object.defineProperty(a, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      })
      : a[e] = t,
    a;
}
function Ss(a, e) {
  if (typeof a != "object" || a === null) return a;
  var t = a[Symbol.toPrimitive];
  if (t !== void 0) {
    var s = t.call(a, e || "default");
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(a);
}
function Es(a) {
  var e = Ss(a, "string");
  return typeof e == "symbol" ? e : String(e);
}
var ct = {
    activateTrap: function (e, t) {
      if (e.length > 0) {
        var s = e[e.length - 1];
        s !== t && s.pause();
      }
      var n = e.indexOf(t);
      n === -1 || e.splice(n, 1), e.push(t);
    },
    deactivateTrap: function (e, t) {
      var s = e.indexOf(t);
      s !== -1 && e.splice(s, 1), e.length > 0 && e[e.length - 1].unpause();
    },
  },
  Ts = function (e) {
    return e.tagName && e.tagName.toLowerCase() === "input" &&
      typeof e.select == "function";
  },
  Is = function (e) {
    return (e == null ? void 0 : e.key) === "Escape" ||
      (e == null ? void 0 : e.key) === "Esc" ||
      (e == null ? void 0 : e.keyCode) === 27;
  },
  ve = function (e) {
    return (e == null ? void 0 : e.key) === "Tab" ||
      (e == null ? void 0 : e.keyCode) === 9;
  },
  Ns = function (e) {
    return ve(e) && !e.shiftKey;
  },
  ks = function (e) {
    return ve(e) && e.shiftKey;
  },
  lt = function (e) {
    return setTimeout(e, 0);
  },
  ut = function (e, t) {
    var s = -1;
    return e.every(function (n, r) {
      return t(n) ? (s = r, !1) : !0;
    }),
      s;
  },
  pe = function (e) {
    for (
      var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), n = 1;
      n < t;
      n++
    ) s[n - 1] = arguments[n];
    return typeof e == "function" ? e.apply(void 0, s) : e;
  },
  xe = function (e) {
    return e.target.shadowRoot && typeof e.composedPath == "function"
      ? e.composedPath()[0]
      : e.target;
  },
  Fs = [],
  Os = function (e, t) {
    var s = (t == null ? void 0 : t.document) || document,
      n = (t == null ? void 0 : t.trapStack) || Fs,
      r = ot({
        returnFocusOnDeactivate: !0,
        escapeDeactivates: !0,
        delayInitialFocus: !0,
        isKeyForward: Ns,
        isKeyBackward: ks,
      }, t),
      i = {
        containers: [],
        containerGroups: [],
        tabbableGroups: [],
        nodeFocusedBeforeActivation: null,
        mostRecentlyFocusedNode: null,
        active: !1,
        paused: !1,
        delayInitialFocusTimer: void 0,
        recentNavEvent: void 0,
      },
      o,
      c = function (u, d, m) {
        return u && u[d] !== void 0 ? u[d] : r[m || d];
      },
      l = function (u, d) {
        var m = typeof (d == null ? void 0 : d.composedPath) == "function"
          ? d.composedPath()
          : void 0;
        return i.containerGroups.findIndex(function (S) {
          var E = S.container, k = S.tabbableNodes;
          return E.contains(u) || (m == null ? void 0 : m.includes(E)) ||
            k.find(function (F) {
              return F === u;
            });
        });
      },
      h = function (u) {
        var d = r[u];
        if (typeof d == "function") {
          for (
            var m = arguments.length, S = new Array(m > 1 ? m - 1 : 0), E = 1;
            E < m;
            E++
          ) S[E - 1] = arguments[E];
          d = d.apply(void 0, S);
        }
        if (d === !0 && (d = void 0), !d) {
          if (d === void 0 || d === !1) return d;
          throw new Error(
            "`".concat(
              u,
              "` was specified but was not a node, or did not return a node",
            ),
          );
        }
        var k = d;
        if (typeof d == "string" && (k = s.querySelector(d), !k)) {
          throw new Error(
            "`".concat(u, "` as selector refers to no known node"),
          );
        }
        return k;
      },
      f = function () {
        var u = h("initialFocus");
        if (u === !1) return !1;
        if (u === void 0 || !Ae(u, r.tabbableOptions)) {
          if (l(s.activeElement) >= 0) {
            u = s.activeElement;
          } else {
            var d = i.tabbableGroups[0], m = d && d.firstTabbableNode;
            u = m || h("fallbackFocus");
          }
        }
        if (!u) {
          throw new Error(
            "Your focus-trap needs to have at least one focusable element",
          );
        }
        return u;
      },
      v = function () {
        if (
          i.containerGroups = i.containers.map(function (u) {
            var d = ys(u, r.tabbableOptions),
              m = ws(u, r.tabbableOptions),
              S = d.length > 0 ? d[0] : void 0,
              E = d.length > 0 ? d[d.length - 1] : void 0,
              k = m.find(function (p) {
                return ae(p);
              }),
              F = m.slice().reverse().find(function (p) {
                return ae(p);
              }),
              M = !!d.find(function (p) {
                return ie(p) > 0;
              });
            return {
              container: u,
              tabbableNodes: d,
              focusableNodes: m,
              posTabIndexesFound: M,
              firstTabbableNode: S,
              lastTabbableNode: E,
              firstDomTabbableNode: k,
              lastDomTabbableNode: F,
              nextTabbableNode: function (g) {
                var N = arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : !0,
                  O = d.indexOf(g);
                return O < 0
                  ? N
                    ? m.slice(m.indexOf(g) + 1).find(function (P) {
                      return ae(P);
                    })
                    : m.slice(0, m.indexOf(g)).reverse().find(function (P) {
                      return ae(P);
                    })
                  : d[O + (N ? 1 : -1)];
              },
            };
          }),
            i.tabbableGroups = i.containerGroups.filter(function (u) {
              return u.tabbableNodes.length > 0;
            }),
            i.tabbableGroups.length <= 0 && !h("fallbackFocus")
        ) {
          throw new Error(
            "Your focus-trap must have at least one container with at least one tabbable node in it at all times",
          );
        }
        if (
          i.containerGroups.find(function (u) {
            return u.posTabIndexesFound;
          }) && i.containerGroups.length > 1
        ) {
          throw new Error(
            "At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.",
          );
        }
      },
      b = function T(u) {
        var d = u.activeElement;
        if (d) {
          return d.shadowRoot && d.shadowRoot.activeElement !== null
            ? T(d.shadowRoot)
            : d;
        }
      },
      w = function T(u) {
        if (u !== !1 && u !== b(document)) {
          if (!u || !u.focus) {
            T(f());
            return;
          }
          u.focus({ preventScroll: !!r.preventScroll }),
            i.mostRecentlyFocusedNode = u,
            Ts(u) && u.select();
        }
      },
      _ = function (u) {
        var d = h("setReturnFocus", u);
        return d || (d === !1 ? !1 : u);
      },
      y = function (u) {
        var d = u.target,
          m = u.event,
          S = u.isBackward,
          E = S === void 0 ? !1 : S;
        d = d || xe(m), v();
        var k = null;
        if (i.tabbableGroups.length > 0) {
          var F = l(d, m), M = F >= 0 ? i.containerGroups[F] : void 0;
          if (F < 0) {
            E
              ? k =
                i.tabbableGroups[i.tabbableGroups.length - 1].lastTabbableNode
              : k = i.tabbableGroups[0].firstTabbableNode;
          } else if (E) {
            var p = ut(i.tabbableGroups, function (I) {
              var L = I.firstTabbableNode;
              return d === L;
            });
            if (
              p < 0 &&
              (M.container === d ||
                Ae(d, r.tabbableOptions) && !ae(d, r.tabbableOptions) &&
                  !M.nextTabbableNode(d, !1)) &&
              (p = F), p >= 0
            ) {
              var g = p === 0 ? i.tabbableGroups.length - 1 : p - 1,
                N = i.tabbableGroups[g];
              k = ie(d) >= 0 ? N.lastTabbableNode : N.lastDomTabbableNode;
            } else ve(m) || (k = M.nextTabbableNode(d, !1));
          } else {
            var O = ut(i.tabbableGroups, function (I) {
              var L = I.lastTabbableNode;
              return d === L;
            });
            if (
              O < 0 &&
              (M.container === d ||
                Ae(d, r.tabbableOptions) && !ae(d, r.tabbableOptions) &&
                  !M.nextTabbableNode(d)) &&
              (O = F), O >= 0
            ) {
              var P = O === i.tabbableGroups.length - 1 ? 0 : O + 1,
                j = i.tabbableGroups[P];
              k = ie(d) >= 0 ? j.firstTabbableNode : j.firstDomTabbableNode;
            } else ve(m) || (k = M.nextTabbableNode(d));
          }
        } else k = h("fallbackFocus");
        return k;
      },
      R = function (u) {
        var d = xe(u);
        if (!(l(d, u) >= 0)) {
          if (pe(r.clickOutsideDeactivates, u)) {
            o.deactivate({ returnFocus: r.returnFocusOnDeactivate });
            return;
          }
          pe(r.allowOutsideClick, u) || u.preventDefault();
        }
      },
      C = function (u) {
        var d = xe(u), m = l(d, u) >= 0;
        if (m || d instanceof Document) m && (i.mostRecentlyFocusedNode = d);
        else {
          u.stopImmediatePropagation();
          var S, E = !0;
          if (i.mostRecentlyFocusedNode) {
            if (ie(i.mostRecentlyFocusedNode) > 0) {
              var k = l(i.mostRecentlyFocusedNode),
                F = i.containerGroups[k].tabbableNodes;
              if (F.length > 0) {
                var M = F.findIndex(function (p) {
                  return p === i.mostRecentlyFocusedNode;
                });
                M >= 0 &&
                  (r.isKeyForward(i.recentNavEvent)
                    ? M + 1 < F.length && (S = F[M + 1], E = !1)
                    : M - 1 >= 0 && (S = F[M - 1], E = !1));
              }
            } else {i.containerGroups.some(function (p) {
                return p.tabbableNodes.some(function (g) {
                  return ie(g) > 0;
                });
              }) || (E = !1);}
          } else E = !1;
          E &&
          (S = y({
            target: i.mostRecentlyFocusedNode,
            isBackward: r.isKeyBackward(i.recentNavEvent),
          })), w(S || i.mostRecentlyFocusedNode || f());
        }
        i.recentNavEvent = void 0;
      },
      J = function (u) {
        var d = arguments.length > 1 && arguments[1] !== void 0
          ? arguments[1]
          : !1;
        i.recentNavEvent = u;
        var m = y({ event: u, isBackward: d });
        m && (ve(u) && u.preventDefault(), w(m));
      },
      H = function (u) {
        if (Is(u) && pe(r.escapeDeactivates, u) !== !1) {
          u.preventDefault(), o.deactivate();
          return;
        }
        (r.isKeyForward(u) || r.isKeyBackward(u)) && J(u, r.isKeyBackward(u));
      },
      W = function (u) {
        var d = xe(u);
        l(d, u) >= 0 || pe(r.clickOutsideDeactivates, u) ||
          pe(r.allowOutsideClick, u) ||
          (u.preventDefault(), u.stopImmediatePropagation());
      },
      V = function () {
        if (i.active) {
          return ct.activateTrap(n, o),
            i.delayInitialFocusTimer = r.delayInitialFocus
              ? lt(function () {
                w(f());
              })
              : w(f()),
            s.addEventListener("focusin", C, !0),
            s.addEventListener("mousedown", R, { capture: !0, passive: !1 }),
            s.addEventListener("touchstart", R, { capture: !0, passive: !1 }),
            s.addEventListener("click", W, { capture: !0, passive: !1 }),
            s.addEventListener("keydown", H, { capture: !0, passive: !1 }),
            o;
        }
      },
      $ = function () {
        if (i.active) {
          return s.removeEventListener("focusin", C, !0),
            s.removeEventListener("mousedown", R, !0),
            s.removeEventListener("touchstart", R, !0),
            s.removeEventListener("click", W, !0),
            s.removeEventListener("keydown", H, !0),
            o;
        }
      },
      Re = function (u) {
        var d = u.some(function (m) {
          var S = Array.from(m.removedNodes);
          return S.some(function (E) {
            return E === i.mostRecentlyFocusedNode;
          });
        });
        d && w(f());
      },
      A = typeof window < "u" && "MutationObserver" in window
        ? new MutationObserver(Re)
        : void 0,
      U = function () {
        A &&
          (A.disconnect(),
            i.active && !i.paused && i.containers.map(function (u) {
              A.observe(u, { subtree: !0, childList: !0 });
            }));
      };
    return o = {
      get active() {
        return i.active;
      },
      get paused() {
        return i.paused;
      },
      activate: function (u) {
        if (i.active) return this;
        var d = c(u, "onActivate"),
          m = c(u, "onPostActivate"),
          S = c(u, "checkCanFocusTrap");
        S || v(),
          i.active = !0,
          i.paused = !1,
          i.nodeFocusedBeforeActivation = s.activeElement,
          d == null || d();
        var E = function () {
          S && v(), V(), U(), m == null || m();
        };
        return S ? (S(i.containers.concat()).then(E, E), this) : (E(), this);
      },
      deactivate: function (u) {
        if (!i.active) return this;
        var d = ot({
          onDeactivate: r.onDeactivate,
          onPostDeactivate: r.onPostDeactivate,
          checkCanReturnFocus: r.checkCanReturnFocus,
        }, u);
        clearTimeout(i.delayInitialFocusTimer),
          i.delayInitialFocusTimer = void 0,
          $(),
          i.active = !1,
          i.paused = !1,
          U(),
          ct.deactivateTrap(n, o);
        var m = c(d, "onDeactivate"),
          S = c(d, "onPostDeactivate"),
          E = c(d, "checkCanReturnFocus"),
          k = c(d, "returnFocus", "returnFocusOnDeactivate");
        m == null || m();
        var F = function () {
          lt(function () {
            k && w(_(i.nodeFocusedBeforeActivation)), S == null || S();
          });
        };
        return k && E
          ? (E(_(i.nodeFocusedBeforeActivation)).then(F, F), this)
          : (F(), this);
      },
      pause: function (u) {
        if (i.paused || !i.active) return this;
        var d = c(u, "onPause"), m = c(u, "onPostPause");
        return i.paused = !0,
          d == null || d(),
          $(),
          U(),
          m == null || m(),
          this;
      },
      unpause: function (u) {
        if (!i.paused || !i.active) return this;
        var d = c(u, "onUnpause"), m = c(u, "onPostUnpause");
        return i.paused = !1,
          d == null || d(),
          v(),
          V(),
          U(),
          m == null || m(),
          this;
      },
      updateContainerElements: function (u) {
        var d = [].concat(u).filter(Boolean);
        return i.containers = d.map(function (m) {
          return typeof m == "string" ? s.querySelector(m) : m;
        }),
          i.active && v(),
          U(),
          this;
      },
    },
      o.updateContainerElements(e),
      o;
  };
function Rs(a, e = {}) {
  let t;
  const { immediate: s, ...n } = e,
    r = ne(!1),
    i = ne(!1),
    o = (f) => t && t.activate(f),
    c = (f) => t && t.deactivate(f),
    l = () => {
      t && (t.pause(), i.value = !0);
    },
    h = () => {
      t && (t.unpause(), i.value = !1);
    };
  return Ve(() => Rt(a), (f) => {
    f && (t = Os(f, {
      ...n,
      onActivate() {
        r.value = !0, e.onActivate && e.onActivate();
      },
      onDeactivate() {
        r.value = !1, e.onDeactivate && e.onDeactivate();
      },
    }),
      s && o());
  }, { flush: "post" }),
    Ct(() => c()),
    {
      hasFocus: r,
      isPaused: i,
      activate: o,
      deactivate: c,
      pause: l,
      unpause: h,
    };
}
class ce {
  constructor(e, t = !0, s = [], n = 5e3) {
    this.ctx = e, this.iframes = t, this.exclude = s, this.iframesTimeout = n;
  }
  static matches(e, t) {
    const s = typeof t == "string" ? [t] : t,
      n = e.matches || e.matchesSelector || e.msMatchesSelector ||
        e.mozMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector;
    if (n) {
      let r = !1;
      return s.every((i) => n.call(e, i) ? (r = !0, !1) : !0), r;
    } else return !1;
  }
  getContexts() {
    let e, t = [];
    return typeof this.ctx > "u" || !this.ctx
      ? e = []
      : NodeList.prototype.isPrototypeOf(this.ctx)
      ? e = Array.prototype.slice.call(this.ctx)
      : Array.isArray(this.ctx)
      ? e = this.ctx
      : typeof this.ctx == "string"
      ? e = Array.prototype.slice.call(document.querySelectorAll(this.ctx))
      : e = [this.ctx],
      e.forEach((s) => {
        const n = t.filter((r) => r.contains(s)).length > 0;
        t.indexOf(s) === -1 && !n && t.push(s);
      }),
      t;
  }
  getIframeContents(e, t, s = () => {}) {
    let n;
    try {
      const r = e.contentWindow;
      if (n = r.document, !r || !n) throw new Error("iframe inaccessible");
    } catch {
      s();
    }
    n && t(n);
  }
  isIframeBlank(e) {
    const t = "about:blank", s = e.getAttribute("src").trim();
    return e.contentWindow.location.href === t && s !== t && s;
  }
  observeIframeLoad(e, t, s) {
    let n = !1, r = null;
    const i = () => {
      if (!n) {
        n = !0, clearTimeout(r);
        try {
          this.isIframeBlank(e) ||
            (e.removeEventListener("load", i), this.getIframeContents(e, t, s));
        } catch {
          s();
        }
      }
    };
    e.addEventListener("load", i), r = setTimeout(i, this.iframesTimeout);
  }
  onIframeReady(e, t, s) {
    try {
      e.contentWindow.document.readyState === "complete"
        ? this.isIframeBlank(e)
          ? this.observeIframeLoad(e, t, s)
          : this.getIframeContents(e, t, s)
        : this.observeIframeLoad(e, t, s);
    } catch {
      s();
    }
  }
  waitForIframes(e, t) {
    let s = 0;
    this.forEachIframe(e, () => !0, (n) => {
      s++,
        this.waitForIframes(n.querySelector("html"), () => {
          --s || t();
        });
    }, (n) => {
      n || t();
    });
  }
  forEachIframe(e, t, s, n = () => {}) {
    let r = e.querySelectorAll("iframe"), i = r.length, o = 0;
    r = Array.prototype.slice.call(r);
    const c = () => {
      --i <= 0 && n(o);
    };
    i || c(),
      r.forEach((l) => {
        ce.matches(l, this.exclude) ? c() : this.onIframeReady(l, (h) => {
          t(l) && (o++, s(h)), c();
        }, c);
      });
  }
  createIterator(e, t, s) {
    return document.createNodeIterator(e, t, s, !1);
  }
  createInstanceOnIframe(e) {
    return new ce(e.querySelector("html"), this.iframes);
  }
  compareNodeIframe(e, t, s) {
    const n = e.compareDocumentPosition(s),
      r = Node.DOCUMENT_POSITION_PRECEDING;
    if (n & r) {
      if (t !== null) {
        const i = t.compareDocumentPosition(s),
          o = Node.DOCUMENT_POSITION_FOLLOWING;
        if (i & o) return !0;
      } else return !0;
    }
    return !1;
  }
  getIteratorNode(e) {
    const t = e.previousNode();
    let s;
    return t === null ? s = e.nextNode() : s = e.nextNode() && e.nextNode(),
      { prevNode: t, node: s };
  }
  checkIframeFilter(e, t, s, n) {
    let r = !1, i = !1;
    return n.forEach((o, c) => {
      o.val === s && (r = c, i = o.handled);
    }),
      this.compareNodeIframe(e, t, s)
        ? (r === !1 && !i
          ? n.push({ val: s, handled: !0 })
          : r !== !1 && !i && (n[r].handled = !0),
          !0)
        : (r === !1 && n.push({ val: s, handled: !1 }), !1);
  }
  handleOpenIframes(e, t, s, n) {
    e.forEach((r) => {
      r.handled || this.getIframeContents(r.val, (i) => {
        this.createInstanceOnIframe(i).forEachNode(t, s, n);
      });
    });
  }
  iterateThroughNodes(e, t, s, n, r) {
    const i = this.createIterator(t, e, n);
    let o = [],
      c = [],
      l,
      h,
      f = () => ({ prevNode: h, node: l } = this.getIteratorNode(i), l);
    for (; f();) {
      this.iframes &&
      this.forEachIframe(t, (v) => this.checkIframeFilter(l, h, v, o), (v) => {
        this.createInstanceOnIframe(v).forEachNode(e, (b) => c.push(b), n);
      }), c.push(l);
    }
    c.forEach((v) => {
      s(v);
    }),
      this.iframes && this.handleOpenIframes(o, e, s, n),
      r();
  }
  forEachNode(e, t, s, n = () => {}) {
    const r = this.getContexts();
    let i = r.length;
    i || n(),
      r.forEach((o) => {
        const c = () => {
          this.iterateThroughNodes(e, o, t, s, () => {
            --i <= 0 && n();
          });
        };
        this.iframes ? this.waitForIframes(o, c) : c();
      });
  }
}
let Cs = class {
  constructor(e) {
    this.ctx = e, this.ie = !1;
    const t = window.navigator.userAgent;
    (t.indexOf("MSIE") > -1 || t.indexOf("Trident") > -1) && (this.ie = !0);
  }
  set opt(e) {
    this._opt = Object.assign({}, {
      element: "",
      className: "",
      exclude: [],
      iframes: !1,
      iframesTimeout: 5e3,
      separateWordSearch: !0,
      diacritics: !0,
      synonyms: {},
      accuracy: "partially",
      acrossElements: !1,
      caseSensitive: !1,
      ignoreJoiners: !1,
      ignoreGroups: 0,
      ignorePunctuation: [],
      wildcards: "disabled",
      each: () => {},
      noMatch: () => {},
      filter: () => !0,
      done: () => {},
      debug: !1,
      log: window.console,
    }, e);
  }
  get opt() {
    return this._opt;
  }
  get iterator() {
    return new ce(
      this.ctx,
      this.opt.iframes,
      this.opt.exclude,
      this.opt.iframesTimeout,
    );
  }
  log(e, t = "debug") {
    const s = this.opt.log;
    this.opt.debug && typeof s == "object" && typeof s[t] == "function" &&
      s[t](`mark.js: ${e}`);
  }
  escapeStr(e) {
    return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }
  createRegExp(e) {
    return this.opt.wildcards !== "disabled" &&
      (e = this.setupWildcardsRegExp(e)),
      e = this.escapeStr(e),
      Object.keys(this.opt.synonyms).length &&
      (e = this.createSynonymsRegExp(e)),
      (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) &&
      (e = this.setupIgnoreJoinersRegExp(e)),
      this.opt.diacritics && (e = this.createDiacriticsRegExp(e)),
      e = this.createMergedBlanksRegExp(e),
      (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) &&
      (e = this.createJoinersRegExp(e)),
      this.opt.wildcards !== "disabled" && (e = this.createWildcardsRegExp(e)),
      e = this.createAccuracyRegExp(e),
      e;
  }
  createSynonymsRegExp(e) {
    const t = this.opt.synonyms,
      s = this.opt.caseSensitive ? "" : "i",
      n = this.opt.ignoreJoiners || this.opt.ignorePunctuation.length
        ? "\0"
        : "";
    for (let r in t) {
      if (t.hasOwnProperty(r)) {
        const i = t[r],
          o = this.opt.wildcards !== "disabled"
            ? this.setupWildcardsRegExp(r)
            : this.escapeStr(r),
          c = this.opt.wildcards !== "disabled"
            ? this.setupWildcardsRegExp(i)
            : this.escapeStr(i);
        o !== "" && c !== "" &&
          (e = e.replace(
            new RegExp(`(${this.escapeStr(o)}|${this.escapeStr(c)})`, `gm${s}`),
            n + `(${this.processSynomyms(o)}|${this.processSynomyms(c)})` + n,
          ));
      }
    }
    return e;
  }
  processSynomyms(e) {
    return (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) &&
      (e = this.setupIgnoreJoinersRegExp(e)),
      e;
  }
  setupWildcardsRegExp(e) {
    return e = e.replace(/(?:\\)*\?/g, (t) => t.charAt(0) === "\\" ? "?" : ""),
      e.replace(/(?:\\)*\*/g, (t) => t.charAt(0) === "\\" ? "*" : "");
  }
  createWildcardsRegExp(e) {
    let t = this.opt.wildcards === "withSpaces";
    return e.replace(/\u0001/g, t ? "[\\S\\s]?" : "\\S?").replace(
      /\u0002/g,
      t ? "[\\S\\s]*?" : "\\S*",
    );
  }
  setupIgnoreJoinersRegExp(e) {
    return e.replace(/[^(|)\\]/g, (t, s, n) => {
      let r = n.charAt(s + 1);
      return /[(|)\\]/.test(r) || r === "" ? t : t + "\0";
    });
  }
  createJoinersRegExp(e) {
    let t = [];
    const s = this.opt.ignorePunctuation;
    return Array.isArray(s) && s.length && t.push(this.escapeStr(s.join(""))),
      this.opt.ignoreJoiners && t.push("\\u00ad\\u200b\\u200c\\u200d"),
      t.length ? e.split(/\u0000+/).join(`[${t.join("")}]*`) : e;
  }
  createDiacriticsRegExp(e) {
    const t = this.opt.caseSensitive ? "" : "i",
      s = this.opt.caseSensitive
        ? [
          "aàáảãạăằắẳẵặâầấẩẫậäåāą",
          "AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ",
          "cçćč",
          "CÇĆČ",
          "dđď",
          "DĐĎ",
          "eèéẻẽẹêềếểễệëěēę",
          "EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ",
          "iìíỉĩịîïī",
          "IÌÍỈĨỊÎÏĪ",
          "lł",
          "LŁ",
          "nñňń",
          "NÑŇŃ",
          "oòóỏõọôồốổỗộơởỡớờợöøō",
          "OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ",
          "rř",
          "RŘ",
          "sšśșş",
          "SŠŚȘŞ",
          "tťțţ",
          "TŤȚŢ",
          "uùúủũụưừứửữựûüůū",
          "UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ",
          "yýỳỷỹỵÿ",
          "YÝỲỶỸỴŸ",
          "zžżź",
          "ZŽŻŹ",
        ]
        : [
          "aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ",
          "cçćčCÇĆČ",
          "dđďDĐĎ",
          "eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ",
          "iìíỉĩịîïīIÌÍỈĨỊÎÏĪ",
          "lłLŁ",
          "nñňńNÑŇŃ",
          "oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ",
          "rřRŘ",
          "sšśșşSŠŚȘŞ",
          "tťțţTŤȚŢ",
          "uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ",
          "yýỳỷỹỵÿYÝỲỶỸỴŸ",
          "zžżźZŽŻŹ",
        ];
    let n = [];
    return e.split("").forEach((r) => {
      s.every((i) => {
        if (i.indexOf(r) !== -1) {
          if (n.indexOf(i) > -1) return !1;
          e = e.replace(new RegExp(`[${i}]`, `gm${t}`), `[${i}]`), n.push(i);
        }
        return !0;
      });
    }),
      e;
  }
  createMergedBlanksRegExp(e) {
    return e.replace(/[\s]+/gmi, "[\\s]+");
  }
  createAccuracyRegExp(e) {
    const t = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿";
    let s = this.opt.accuracy,
      n = typeof s == "string" ? s : s.value,
      r = typeof s == "string" ? [] : s.limiters,
      i = "";
    switch (
      r.forEach((o) => {
        i += `|${this.escapeStr(o)}`;
      }), n
    ) {
      case "partially":
      default:
        return `()(${e})`;
      case "complementary":
        return i = "\\s" + (i || this.escapeStr(t)), `()([^${i}]*${e}[^${i}]*)`;
      case "exactly":
        return `(^|\\s${i})(${e})(?=$|\\s${i})`;
    }
  }
  getSeparatedKeywords(e) {
    let t = [];
    return e.forEach((s) => {
      this.opt.separateWordSearch
        ? s.split(" ").forEach((n) => {
          n.trim() && t.indexOf(n) === -1 && t.push(n);
        })
        : s.trim() && t.indexOf(s) === -1 && t.push(s);
    }),
      { keywords: t.sort((s, n) => n.length - s.length), length: t.length };
  }
  isNumeric(e) {
    return Number(parseFloat(e)) == e;
  }
  checkRanges(e) {
    if (
      !Array.isArray(e) ||
      Object.prototype.toString.call(e[0]) !== "[object Object]"
    ) {
      return this.log("markRanges() will only accept an array of objects"),
        this.opt.noMatch(e),
        [];
    }
    const t = [];
    let s = 0;
    return e.sort((n, r) => n.start - r.start).forEach((n) => {
      let { start: r, end: i, valid: o } = this.callNoMatchOnInvalidRanges(
        n,
        s,
      );
      o && (n.start = r, n.length = i - r, t.push(n), s = i);
    }),
      t;
  }
  callNoMatchOnInvalidRanges(e, t) {
    let s, n, r = !1;
    return e && typeof e.start < "u"
      ? (s = parseInt(e.start, 10),
        n = s + parseInt(e.length, 10),
        this.isNumeric(e.start) && this.isNumeric(e.length) && n - t > 0 &&
          n - s > 0
          ? r = !0
          : (this.log(
            `Ignoring invalid or overlapping range: ${JSON.stringify(e)}`,
          ),
            this.opt.noMatch(e)))
      : (this.log(`Ignoring invalid range: ${JSON.stringify(e)}`),
        this.opt.noMatch(e)),
      { start: s, end: n, valid: r };
  }
  checkWhitespaceRanges(e, t, s) {
    let n, r = !0, i = s.length, o = t - i, c = parseInt(e.start, 10) - o;
    return c = c > i ? i : c,
      n = c + parseInt(e.length, 10),
      n > i &&
      (n = i, this.log(`End range automatically set to the max value of ${i}`)),
      c < 0 || n - c < 0 || c > i || n > i
        ? (r = !1,
          this.log(`Invalid range: ${JSON.stringify(e)}`),
          this.opt.noMatch(e))
        : s.substring(c, n).replace(/\s+/g, "") === "" &&
          (r = !1,
            this.log("Skipping whitespace only range: " + JSON.stringify(e)),
            this.opt.noMatch(e)),
      { start: c, end: n, valid: r };
  }
  getTextNodes(e) {
    let t = "", s = [];
    this.iterator.forEachNode(
      NodeFilter.SHOW_TEXT,
      (n) => {
        s.push({ start: t.length, end: (t += n.textContent).length, node: n });
      },
      (n) =>
        this.matchesExclude(n.parentNode)
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT,
      () => {
        e({ value: t, nodes: s });
      },
    );
  }
  matchesExclude(e) {
    return ce.matches(
      e,
      this.opt.exclude.concat(["script", "style", "title", "head", "html"]),
    );
  }
  wrapRangeInTextNode(e, t, s) {
    const n = this.opt.element ? this.opt.element : "mark",
      r = e.splitText(t),
      i = r.splitText(s - t);
    let o = document.createElement(n);
    return o.setAttribute("data-markjs", "true"),
      this.opt.className && o.setAttribute("class", this.opt.className),
      o.textContent = r.textContent,
      r.parentNode.replaceChild(o, r),
      i;
  }
  wrapRangeInMappedTextNode(e, t, s, n, r) {
    e.nodes.every((i, o) => {
      const c = e.nodes[o + 1];
      if (typeof c > "u" || c.start > t) {
        if (!n(i.node)) return !1;
        const l = t - i.start,
          h = (s > i.end ? i.end : s) - i.start,
          f = e.value.substr(0, i.start),
          v = e.value.substr(h + i.start);
        if (
          i.node = this.wrapRangeInTextNode(i.node, l, h),
            e.value = f + v,
            e.nodes.forEach((b, w) => {
              w >= o &&
                (e.nodes[w].start > 0 && w !== o && (e.nodes[w].start -= h),
                  e.nodes[w].end -= h);
            }),
            s -= h,
            r(i.node.previousSibling, i.start),
            s > i.end
        ) t = i.end;
        else return !1;
      }
      return !0;
    });
  }
  wrapMatches(e, t, s, n, r) {
    const i = t === 0 ? 0 : t + 1;
    this.getTextNodes((o) => {
      o.nodes.forEach((c) => {
        c = c.node;
        let l;
        for (; (l = e.exec(c.textContent)) !== null && l[i] !== "";) {
          if (!s(l[i], c)) continue;
          let h = l.index;
          if (i !== 0) { for (let f = 1; f < i; f++) h += l[f].length; }
          c = this.wrapRangeInTextNode(c, h, h + l[i].length),
            n(c.previousSibling),
            e.lastIndex = 0;
        }
      }), r();
    });
  }
  wrapMatchesAcrossElements(e, t, s, n, r) {
    const i = t === 0 ? 0 : t + 1;
    this.getTextNodes((o) => {
      let c;
      for (; (c = e.exec(o.value)) !== null && c[i] !== "";) {
        let l = c.index;
        if (i !== 0) { for (let f = 1; f < i; f++) l += c[f].length; }
        const h = l + c[i].length;
        this.wrapRangeInMappedTextNode(o, l, h, (f) => s(c[i], f), (f, v) => {
          e.lastIndex = v, n(f);
        });
      }
      r();
    });
  }
  wrapRangeFromIndex(e, t, s, n) {
    this.getTextNodes((r) => {
      const i = r.value.length;
      e.forEach((o, c) => {
        let { start: l, end: h, valid: f } = this.checkWhitespaceRanges(
          o,
          i,
          r.value,
        );
        f &&
          this.wrapRangeInMappedTextNode(
            r,
            l,
            h,
            (v) => t(v, o, r.value.substring(l, h), c),
            (v) => {
              s(v, o);
            },
          );
      }), n();
    });
  }
  unwrapMatches(e) {
    const t = e.parentNode;
    let s = document.createDocumentFragment();
    for (; e.firstChild;) s.appendChild(e.removeChild(e.firstChild));
    t.replaceChild(s, e), this.ie ? this.normalizeTextNode(t) : t.normalize();
  }
  normalizeTextNode(e) {
    if (e) {
      if (e.nodeType === 3) {
        for (; e.nextSibling && e.nextSibling.nodeType === 3;) {
          e.nodeValue += e.nextSibling.nodeValue,
            e.parentNode.removeChild(e.nextSibling);
        }
      } else this.normalizeTextNode(e.firstChild);
      this.normalizeTextNode(e.nextSibling);
    }
  }
  markRegExp(e, t) {
    this.opt = t, this.log(`Searching with expression "${e}"`);
    let s = 0, n = "wrapMatches";
    const r = (i) => {
      s++, this.opt.each(i);
    };
    this.opt.acrossElements && (n = "wrapMatchesAcrossElements"),
      this[n](
        e,
        this.opt.ignoreGroups,
        (i, o) => this.opt.filter(o, i, s),
        r,
        () => {
          s === 0 && this.opt.noMatch(e), this.opt.done(s);
        },
      );
  }
  mark(e, t) {
    this.opt = t;
    let s = 0, n = "wrapMatches";
    const { keywords: r, length: i } = this.getSeparatedKeywords(
        typeof e == "string" ? [e] : e,
      ),
      o = this.opt.caseSensitive ? "" : "i",
      c = (l) => {
        let h = new RegExp(this.createRegExp(l), `gm${o}`), f = 0;
        this.log(`Searching with expression "${h}"`),
          this[n](h, 1, (v, b) => this.opt.filter(b, l, s, f), (v) => {
            f++, s++, this.opt.each(v);
          }, () => {
            f === 0 && this.opt.noMatch(l),
              r[i - 1] === l ? this.opt.done(s) : c(r[r.indexOf(l) + 1]);
          });
      };
    this.opt.acrossElements && (n = "wrapMatchesAcrossElements"),
      i === 0 ? this.opt.done(s) : c(r[0]);
  }
  markRanges(e, t) {
    this.opt = t;
    let s = 0, n = this.checkRanges(e);
    n && n.length
      ? (this.log(
        "Starting to mark with the following ranges: " + JSON.stringify(n),
      ),
        this.wrapRangeFromIndex(
          n,
          (r, i, o, c) => this.opt.filter(r, i, o, c),
          (r, i) => {
            s++, this.opt.each(r, i);
          },
          () => {
            this.opt.done(s);
          },
        ))
      : this.opt.done(s);
  }
  unmark(e) {
    this.opt = e;
    let t = this.opt.element ? this.opt.element : "*";
    t += "[data-markjs]",
      this.opt.className && (t += `.${this.opt.className}`),
      this.log(`Removal selector "${t}"`),
      this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT, (s) => {
        this.unwrapMatches(s);
      }, (s) => {
        const n = ce.matches(s, t), r = this.matchesExclude(s);
        return !n || r ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }, this.opt.done);
  }
};
function Ms(a) {
  const e = new Cs(a);
  return this.mark = (t, s) => (e.mark(t, s), this),
    this.markRegExp = (t, s) => (e.markRegExp(t, s), this),
    this.markRanges = (t, s) => (e.markRanges(t, s), this),
    this.unmark = (t) => (e.unmark(t), this),
    this;
}
function Te(a, e, t, s) {
  function n(r) {
    return r instanceof t ? r : new t(function (i) {
      i(r);
    });
  }
  return new (t || (t = Promise))(function (r, i) {
    function o(h) {
      try {
        l(s.next(h));
      } catch (f) {
        i(f);
      }
    }
    function c(h) {
      try {
        l(s.throw(h));
      } catch (f) {
        i(f);
      }
    }
    function l(h) {
      h.done ? r(h.value) : n(h.value).then(o, c);
    }
    l((s = s.apply(a, [])).next());
  });
}
const As = "ENTRIES", _t = "KEYS", xt = "VALUES", z = "";
class Le {
  constructor(e, t) {
    const s = e._tree, n = Array.from(s.keys());
    this.set = e,
      this._type = t,
      this._path = n.length > 0 ? [{ node: s, keys: n }] : [];
  }
  next() {
    const e = this.dive();
    return this.backtrack(), e;
  }
  dive() {
    if (this._path.length === 0) return { done: !0, value: void 0 };
    const { node: e, keys: t } = oe(this._path);
    if (oe(t) === z) return { done: !1, value: this.result() };
    const s = e.get(oe(t));
    return this._path.push({ node: s, keys: Array.from(s.keys()) }),
      this.dive();
  }
  backtrack() {
    if (this._path.length === 0) return;
    const e = oe(this._path).keys;
    e.pop(), !(e.length > 0) && (this._path.pop(), this.backtrack());
  }
  key() {
    return this.set._prefix +
      this._path.map(({ keys: e }) => oe(e)).filter((e) => e !== z).join("");
  }
  value() {
    return oe(this._path).node.get(z);
  }
  result() {
    switch (this._type) {
      case xt:
        return this.value();
      case _t:
        return this.key();
      default:
        return [this.key(), this.value()];
    }
  }
  [Symbol.iterator]() {
    return this;
  }
}
const oe = (a) => a[a.length - 1],
  Ls = (a, e, t) => {
    const s = new Map();
    if (e === void 0) return s;
    const n = e.length + 1, r = n + t, i = new Uint8Array(r * n).fill(t + 1);
    for (let o = 0; o < n; ++o) i[o] = o;
    for (let o = 1; o < r; ++o) i[o * n] = o;
    return St(a, e, t, s, i, 1, n, ""), s;
  },
  St = (a, e, t, s, n, r, i, o) => {
    const c = r * i;
    e: for (const l of a.keys()) {
      if (l === z) {
        const h = n[c - 1];
        h <= t && s.set(o, [a.get(l), h]);
      } else {
        let h = r;
        for (let f = 0; f < l.length; ++f, ++h) {
          const v = l[f], b = i * h, w = b - i;
          let _ = n[b];
          const y = Math.max(0, h - t - 1), R = Math.min(i - 1, h + t);
          for (let C = y; C < R; ++C) {
            const J = v !== e[C],
              H = n[w + C] + +J,
              W = n[w + C + 1] + 1,
              V = n[b + C] + 1,
              $ = n[b + C + 1] = Math.min(H, W, V);
            $ < _ && (_ = $);
          }
          if (_ > t) continue e;
        }
        St(a.get(l), e, t, s, n, h, i, o + l);
      }
    }
  };
class X {
  constructor(e = new Map(), t = "") {
    this._size = void 0, this._tree = e, this._prefix = t;
  }
  atPrefix(e) {
    if (!e.startsWith(this._prefix)) throw new Error("Mismatched prefix");
    const [t, s] = Oe(this._tree, e.slice(this._prefix.length));
    if (t === void 0) {
      const [n, r] = Je(s);
      for (const i of n.keys()) {
        if (i !== z && i.startsWith(r)) {
          const o = new Map();
          return o.set(i.slice(r.length), n.get(i)), new X(o, e);
        }
      }
    }
    return new X(t, e);
  }
  clear() {
    this._size = void 0, this._tree.clear();
  }
  delete(e) {
    return this._size = void 0, Ds(this._tree, e);
  }
  entries() {
    return new Le(this, As);
  }
  forEach(e) {
    for (const [t, s] of this) e(t, s, this);
  }
  fuzzyGet(e, t) {
    return Ls(this._tree, e, t);
  }
  get(e) {
    const t = Be(this._tree, e);
    return t !== void 0 ? t.get(z) : void 0;
  }
  has(e) {
    const t = Be(this._tree, e);
    return t !== void 0 && t.has(z);
  }
  keys() {
    return new Le(this, _t);
  }
  set(e, t) {
    if (typeof e != "string") throw new Error("key must be a string");
    return this._size = void 0, De(this._tree, e).set(z, t), this;
  }
  get size() {
    if (this._size) return this._size;
    this._size = 0;
    const e = this.entries();
    for (; !e.next().done;) this._size += 1;
    return this._size;
  }
  update(e, t) {
    if (typeof e != "string") throw new Error("key must be a string");
    this._size = void 0;
    const s = De(this._tree, e);
    return s.set(z, t(s.get(z))), this;
  }
  fetch(e, t) {
    if (typeof e != "string") throw new Error("key must be a string");
    this._size = void 0;
    const s = De(this._tree, e);
    let n = s.get(z);
    return n === void 0 && s.set(z, n = t()), n;
  }
  values() {
    return new Le(this, xt);
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  static from(e) {
    const t = new X();
    for (const [s, n] of e) t.set(s, n);
    return t;
  }
  static fromObject(e) {
    return X.from(Object.entries(e));
  }
}
const Oe = (a, e, t = []) => {
    if (e.length === 0 || a == null) return [a, t];
    for (const s of a.keys()) {
      if (s !== z && e.startsWith(s)) {
        return t.push([a, s]), Oe(a.get(s), e.slice(s.length), t);
      }
    }
    return t.push([a, e]), Oe(void 0, "", t);
  },
  Be = (a, e) => {
    if (e.length === 0 || a == null) return a;
    for (const t of a.keys()) {
      if (t !== z && e.startsWith(t)) return Be(a.get(t), e.slice(t.length));
    }
  },
  De = (a, e) => {
    const t = e.length;
    e: for (let s = 0; a && s < t;) {
      for (const r of a.keys()) {
        if (r !== z && e[s] === r[0]) {
          const i = Math.min(t - s, r.length);
          let o = 1;
          for (; o < i && e[s + o] === r[o];) ++o;
          const c = a.get(r);
          if (o === r.length) a = c;
          else {
            const l = new Map();
            l.set(r.slice(o), c),
              a.set(e.slice(s, s + o), l),
              a.delete(r),
              a = l;
          }
          s += o;
          continue e;
        }
      }
      const n = new Map();
      return a.set(e.slice(s), n), n;
    }
    return a;
  },
  Ds = (a, e) => {
    const [t, s] = Oe(a, e);
    if (t !== void 0) {
      if (t.delete(z), t.size === 0) Et(s);
      else if (t.size === 1) {
        const [n, r] = t.entries().next().value;
        Tt(s, n, r);
      }
    }
  },
  Et = (a) => {
    if (a.length === 0) return;
    const [e, t] = Je(a);
    if (e.delete(t), e.size === 0) Et(a.slice(0, -1));
    else if (e.size === 1) {
      const [s, n] = e.entries().next().value;
      s !== z && Tt(a.slice(0, -1), s, n);
    }
  },
  Tt = (a, e, t) => {
    if (a.length === 0) return;
    const [s, n] = Je(a);
    s.set(n + e, t), s.delete(n);
  },
  Je = (a) => a[a.length - 1],
  Ue = "or",
  It = "and",
  zs = "and_not";
class le {
  constructor(e) {
    if ((e == null ? void 0 : e.fields) == null) {
      throw new Error('MiniSearch: option "fields" must be provided');
    }
    const t = e.autoVacuum == null || e.autoVacuum === !0 ? je : e.autoVacuum;
    this._options = Object.assign(Object.assign(Object.assign({}, Pe), e), {
      autoVacuum: t,
      searchOptions: Object.assign(
        Object.assign({}, dt),
        e.searchOptions || {},
      ),
      autoSuggestOptions: Object.assign(
        Object.assign({}, Bs),
        e.autoSuggestOptions || {},
      ),
    }),
      this._index = new X(),
      this._documentCount = 0,
      this._documentIds = new Map(),
      this._idToShortId = new Map(),
      this._fieldIds = {},
      this._fieldLength = new Map(),
      this._avgFieldLength = [],
      this._nextId = 0,
      this._storedFields = new Map(),
      this._dirtCount = 0,
      this._currentVacuum = null,
      this._enqueuedVacuum = null,
      this._enqueuedVacuumConditions = Ke,
      this.addFields(this._options.fields);
  }
  add(e) {
    const {
        extractField: t,
        tokenize: s,
        processTerm: n,
        fields: r,
        idField: i,
      } = this._options,
      o = t(e, i);
    if (o == null) {
      throw new Error(`MiniSearch: document does not have ID field "${i}"`);
    }
    if (this._idToShortId.has(o)) {
      throw new Error(`MiniSearch: duplicate ID ${o}`);
    }
    const c = this.addDocumentId(o);
    this.saveStoredFields(c, e);
    for (const l of r) {
      const h = t(e, l);
      if (h == null) continue;
      const f = s(h.toString(), l), v = this._fieldIds[l], b = new Set(f).size;
      this.addFieldLength(c, v, this._documentCount - 1, b);
      for (const w of f) {
        const _ = n(w, l);
        if (Array.isArray(_)) { for (const y of _) this.addTerm(v, c, y); }
        else _ && this.addTerm(v, c, _);
      }
    }
  }
  addAll(e) {
    for (const t of e) this.add(t);
  }
  addAllAsync(e, t = {}) {
    const { chunkSize: s = 10 } = t,
      n = { chunk: [], promise: Promise.resolve() },
      { chunk: r, promise: i } = e.reduce(
        ({ chunk: o, promise: c }, l, h) => (o.push(l),
          (h + 1) % s === 0
            ? {
              chunk: [],
              promise: c.then(() => new Promise((f) => setTimeout(f, 0))).then(
                () => this.addAll(o),
              ),
            }
            : { chunk: o, promise: c }),
        n,
      );
    return i.then(() => this.addAll(r));
  }
  remove(e) {
    const {
        tokenize: t,
        processTerm: s,
        extractField: n,
        fields: r,
        idField: i,
      } = this._options,
      o = n(e, i);
    if (o == null) {
      throw new Error(`MiniSearch: document does not have ID field "${i}"`);
    }
    const c = this._idToShortId.get(o);
    if (c == null) {
      throw new Error(
        `MiniSearch: cannot remove document with ID ${o}: it is not in the index`,
      );
    }
    for (const l of r) {
      const h = n(e, l);
      if (h == null) continue;
      const f = t(h.toString(), l), v = this._fieldIds[l], b = new Set(f).size;
      this.removeFieldLength(c, v, this._documentCount, b);
      for (const w of f) {
        const _ = s(w, l);
        if (Array.isArray(_)) { for (const y of _) this.removeTerm(v, c, y); }
        else _ && this.removeTerm(v, c, _);
      }
    }
    this._storedFields.delete(c),
      this._documentIds.delete(c),
      this._idToShortId.delete(o),
      this._fieldLength.delete(c),
      this._documentCount -= 1;
  }
  removeAll(e) {
    if (e) { for (const t of e) this.remove(t); }
    else {
      if (arguments.length > 0) {
        throw new Error(
          "Expected documents to be present. Omit the argument to remove all documents.",
        );
      }
      this._index = new X(),
        this._documentCount = 0,
        this._documentIds = new Map(),
        this._idToShortId = new Map(),
        this._fieldLength = new Map(),
        this._avgFieldLength = [],
        this._storedFields = new Map(),
        this._nextId = 0;
    }
  }
  discard(e) {
    const t = this._idToShortId.get(e);
    if (t == null) {
      throw new Error(
        `MiniSearch: cannot discard document with ID ${e}: it is not in the index`,
      );
    }
    this._idToShortId.delete(e),
      this._documentIds.delete(t),
      this._storedFields.delete(t),
      (this._fieldLength.get(t) || []).forEach((s, n) => {
        this.removeFieldLength(t, n, this._documentCount, s);
      }),
      this._fieldLength.delete(t),
      this._documentCount -= 1,
      this._dirtCount += 1,
      this.maybeAutoVacuum();
  }
  maybeAutoVacuum() {
    if (this._options.autoVacuum === !1) return;
    const { minDirtFactor: e, minDirtCount: t, batchSize: s, batchWait: n } =
      this._options.autoVacuum;
    this.conditionalVacuum({ batchSize: s, batchWait: n }, {
      minDirtCount: t,
      minDirtFactor: e,
    });
  }
  discardAll(e) {
    const t = this._options.autoVacuum;
    try {
      this._options.autoVacuum = !1;
      for (const s of e) this.discard(s);
    } finally {
      this._options.autoVacuum = t;
    }
    this.maybeAutoVacuum();
  }
  replace(e) {
    const { idField: t, extractField: s } = this._options, n = s(e, t);
    this.discard(n), this.add(e);
  }
  vacuum(e = {}) {
    return this.conditionalVacuum(e);
  }
  conditionalVacuum(e, t) {
    return this._currentVacuum
      ? (this._enqueuedVacuumConditions = this._enqueuedVacuumConditions && t,
        this._enqueuedVacuum != null
          ? this._enqueuedVacuum
          : (this._enqueuedVacuum = this._currentVacuum.then(() => {
            const s = this._enqueuedVacuumConditions;
            return this._enqueuedVacuumConditions = Ke,
              this.performVacuuming(e, s);
          }),
            this._enqueuedVacuum))
      : this.vacuumConditionsMet(t) === !1
      ? Promise.resolve()
      : (this._currentVacuum = this.performVacuuming(e), this._currentVacuum);
  }
  performVacuuming(e, t) {
    return Te(this, void 0, void 0, function* () {
      const s = this._dirtCount;
      if (this.vacuumConditionsMet(t)) {
        const n = e.batchSize || We.batchSize, r = e.batchWait || We.batchWait;
        let i = 1;
        for (const [o, c] of this._index) {
          for (const [l, h] of c) {
            for (const [f] of h) {
              this._documentIds.has(f) ||
                (h.size <= 1 ? c.delete(l) : h.delete(f));
            }
          }
          this._index.get(o).size === 0 && this._index.delete(o),
            i % n === 0 && (yield new Promise((l) => setTimeout(l, r))),
            i += 1;
        }
        this._dirtCount -= s;
      }
      yield null,
        this._currentVacuum = this._enqueuedVacuum,
        this._enqueuedVacuum = null;
    });
  }
  vacuumConditionsMet(e) {
    if (e == null) return !0;
    let { minDirtCount: t, minDirtFactor: s } = e;
    return t = t || je.minDirtCount,
      s = s || je.minDirtFactor,
      this.dirtCount >= t && this.dirtFactor >= s;
  }
  get isVacuuming() {
    return this._currentVacuum != null;
  }
  get dirtCount() {
    return this._dirtCount;
  }
  get dirtFactor() {
    return this._dirtCount / (1 + this._documentCount + this._dirtCount);
  }
  has(e) {
    return this._idToShortId.has(e);
  }
  getStoredFields(e) {
    const t = this._idToShortId.get(e);
    if (t != null) return this._storedFields.get(t);
  }
  search(e, t = {}) {
    const s = this.executeQuery(e, t), n = [];
    for (const [r, { score: i, terms: o, match: c }] of s) {
      const l = o.length || 1,
        h = {
          id: this._documentIds.get(r),
          score: i * l,
          terms: Object.keys(c),
          queryTerms: o,
          match: c,
        };
      Object.assign(h, this._storedFields.get(r)),
        (t.filter == null || t.filter(h)) && n.push(h);
    }
    return e === le.wildcard && t.boostDocument == null &&
        this._options.searchOptions.boostDocument == null || n.sort(ft),
      n;
  }
  autoSuggest(e, t = {}) {
    t = Object.assign(Object.assign({}, this._options.autoSuggestOptions), t);
    const s = new Map();
    for (const { score: r, terms: i } of this.search(e, t)) {
      const o = i.join(" "), c = s.get(o);
      c != null
        ? (c.score += r, c.count += 1)
        : s.set(o, { score: r, terms: i, count: 1 });
    }
    const n = [];
    for (const [r, { score: i, terms: o, count: c }] of s) {
      n.push({ suggestion: r, terms: o, score: i / c });
    }
    return n.sort(ft), n;
  }
  get documentCount() {
    return this._documentCount;
  }
  get termCount() {
    return this._index.size;
  }
  static loadJSON(e, t) {
    if (t == null) {
      throw new Error(
        "MiniSearch: loadJSON should be given the same options used when serializing the index",
      );
    }
    return this.loadJS(JSON.parse(e), t);
  }
  static loadJSONAsync(e, t) {
    return Te(this, void 0, void 0, function* () {
      if (t == null) {
        throw new Error(
          "MiniSearch: loadJSON should be given the same options used when serializing the index",
        );
      }
      return this.loadJSAsync(JSON.parse(e), t);
    });
  }
  static getDefault(e) {
    if (Pe.hasOwnProperty(e)) return ze(Pe, e);
    throw new Error(`MiniSearch: unknown option "${e}"`);
  }
  static loadJS(e, t) {
    const {
        index: s,
        documentIds: n,
        fieldLength: r,
        storedFields: i,
        serializationVersion: o,
      } = e,
      c = this.instantiateMiniSearch(e, t);
    c._documentIds = Se(n), c._fieldLength = Se(r), c._storedFields = Se(i);
    for (const [l, h] of c._documentIds) c._idToShortId.set(h, l);
    for (const [l, h] of s) {
      const f = new Map();
      for (const v of Object.keys(h)) {
        let b = h[v];
        o === 1 && (b = b.ds), f.set(parseInt(v, 10), Se(b));
      }
      c._index.set(l, f);
    }
    return c;
  }
  static loadJSAsync(e, t) {
    return Te(this, void 0, void 0, function* () {
      const {
          index: s,
          documentIds: n,
          fieldLength: r,
          storedFields: i,
          serializationVersion: o,
        } = e,
        c = this.instantiateMiniSearch(e, t);
      c._documentIds = yield Ee(n),
        c._fieldLength = yield Ee(r),
        c._storedFields = yield Ee(i);
      for (const [h, f] of c._documentIds) c._idToShortId.set(f, h);
      let l = 0;
      for (const [h, f] of s) {
        const v = new Map();
        for (const b of Object.keys(f)) {
          let w = f[b];
          o === 1 && (w = w.ds), v.set(parseInt(b, 10), yield Ee(w));
        }
        ++l % 1e3 === 0 && (yield Nt(0)), c._index.set(h, v);
      }
      return c;
    });
  }
  static instantiateMiniSearch(e, t) {
    const {
      documentCount: s,
      nextId: n,
      fieldIds: r,
      averageFieldLength: i,
      dirtCount: o,
      serializationVersion: c,
    } = e;
    if (c !== 1 && c !== 2) {
      throw new Error(
        "MiniSearch: cannot deserialize an index created with an incompatible version",
      );
    }
    const l = new le(t);
    return l._documentCount = s,
      l._nextId = n,
      l._idToShortId = new Map(),
      l._fieldIds = r,
      l._avgFieldLength = i,
      l._dirtCount = o || 0,
      l._index = new X(),
      l;
  }
  executeQuery(e, t = {}) {
    if (e === le.wildcard) return this.executeWildcardQuery(t);
    if (typeof e != "string") {
      const v = Object.assign(Object.assign(Object.assign({}, t), e), {
          queries: void 0,
        }),
        b = e.queries.map((w) => this.executeQuery(w, v));
      return this.combineResults(b, v.combineWith);
    }
    const { tokenize: s, processTerm: n, searchOptions: r } = this._options,
      i = Object.assign(Object.assign({ tokenize: s, processTerm: n }, r), t),
      { tokenize: o, processTerm: c } = i,
      f = o(e).flatMap((v) => c(v)).filter((v) => !!v).map($s(i)).map((v) =>
        this.executeQuerySpec(v, i)
      );
    return this.combineResults(f, i.combineWith);
  }
  executeQuerySpec(e, t) {
    const s = Object.assign(Object.assign({}, this._options.searchOptions), t),
      n = (s.fields || this._options.fields).reduce(
        (_, y) =>
          Object.assign(Object.assign({}, _), { [y]: ze(s.boost, y) || 1 }),
        {},
      ),
      { boostDocument: r, weights: i, maxFuzzy: o, bm25: c } = s,
      { fuzzy: l, prefix: h } = Object.assign(Object.assign({}, dt.weights), i),
      f = this._index.get(e.term),
      v = this.termResults(e.term, e.term, 1, e.termBoost, f, n, r, c);
    let b, w;
    if (e.prefix && (b = this._index.atPrefix(e.term)), e.fuzzy) {
      const _ = e.fuzzy === !0 ? .2 : e.fuzzy,
        y = _ < 1 ? Math.min(o, Math.round(e.term.length * _)) : _;
      y && (w = this._index.fuzzyGet(e.term, y));
    }
    if (b) {
      for (const [_, y] of b) {
        const R = _.length - e.term.length;
        if (!R) continue;
        w == null || w.delete(_);
        const C = h * _.length / (_.length + .3 * R);
        this.termResults(e.term, _, C, e.termBoost, y, n, r, c, v);
      }
    }
    if (w) {
      for (const _ of w.keys()) {
        const [y, R] = w.get(_);
        if (!R) continue;
        const C = l * _.length / (_.length + R);
        this.termResults(e.term, _, C, e.termBoost, y, n, r, c, v);
      }
    }
    return v;
  }
  executeWildcardQuery(e) {
    const t = new Map(),
      s = Object.assign(Object.assign({}, this._options.searchOptions), e);
    for (const [n, r] of this._documentIds) {
      const i = s.boostDocument
        ? s.boostDocument(r, "", this._storedFields.get(n))
        : 1;
      t.set(n, { score: i, terms: [], match: {} });
    }
    return t;
  }
  combineResults(e, t = Ue) {
    if (e.length === 0) return new Map();
    const s = t.toLowerCase(), n = Ps[s];
    if (!n) throw new Error(`Invalid combination operator: ${t}`);
    return e.reduce(n) || new Map();
  }
  toJSON() {
    const e = [];
    for (const [t, s] of this._index) {
      const n = {};
      for (const [r, i] of s) n[r] = Object.fromEntries(i);
      e.push([t, n]);
    }
    return {
      documentCount: this._documentCount,
      nextId: this._nextId,
      documentIds: Object.fromEntries(this._documentIds),
      fieldIds: this._fieldIds,
      fieldLength: Object.fromEntries(this._fieldLength),
      averageFieldLength: this._avgFieldLength,
      storedFields: Object.fromEntries(this._storedFields),
      dirtCount: this._dirtCount,
      index: e,
      serializationVersion: 2,
    };
  }
  termResults(e, t, s, n, r, i, o, c, l = new Map()) {
    if (r == null) return l;
    for (const h of Object.keys(i)) {
      const f = i[h], v = this._fieldIds[h], b = r.get(v);
      if (b == null) continue;
      let w = b.size;
      const _ = this._avgFieldLength[v];
      for (const y of b.keys()) {
        if (!this._documentIds.has(y)) {
          this.removeTerm(v, y, t), w -= 1;
          continue;
        }
        const R = o
          ? o(this._documentIds.get(y), t, this._storedFields.get(y))
          : 1;
        if (!R) continue;
        const C = b.get(y),
          J = this._fieldLength.get(y)[v],
          H = Vs(C, w, this._documentCount, J, _, c),
          W = s * n * f * R * H,
          V = l.get(y);
        if (V) {
          V.score += W, Ws(V.terms, e);
          const $ = ze(V.match, t);
          $ ? $.push(h) : V.match[t] = [h];
        } else l.set(y, { score: W, terms: [e], match: { [t]: [h] } });
      }
    }
    return l;
  }
  addTerm(e, t, s) {
    const n = this._index.fetch(s, pt);
    let r = n.get(e);
    if (r == null) r = new Map(), r.set(t, 1), n.set(e, r);
    else {
      const i = r.get(t);
      r.set(t, (i || 0) + 1);
    }
  }
  removeTerm(e, t, s) {
    if (!this._index.has(s)) {
      this.warnDocumentChanged(t, e, s);
      return;
    }
    const n = this._index.fetch(s, pt), r = n.get(e);
    r == null || r.get(t) == null
      ? this.warnDocumentChanged(t, e, s)
      : r.get(t) <= 1
      ? r.size <= 1 ? n.delete(e) : r.delete(t)
      : r.set(t, r.get(t) - 1),
      this._index.get(s).size === 0 && this._index.delete(s);
  }
  warnDocumentChanged(e, t, s) {
    for (const n of Object.keys(this._fieldIds)) {
      if (this._fieldIds[n] === t) {
        this._options.logger(
          "warn",
          `MiniSearch: document with ID ${
            this._documentIds.get(e)
          } has changed before removal: term "${s}" was not present in field "${n}". Removing a document after it has changed can corrupt the index!`,
          "version_conflict",
        );
        return;
      }
    }
  }
  addDocumentId(e) {
    const t = this._nextId;
    return this._idToShortId.set(e, t),
      this._documentIds.set(t, e),
      this._documentCount += 1,
      this._nextId += 1,
      t;
  }
  addFields(e) {
    for (let t = 0; t < e.length; t++) this._fieldIds[e[t]] = t;
  }
  addFieldLength(e, t, s, n) {
    let r = this._fieldLength.get(e);
    r == null && this._fieldLength.set(e, r = []), r[t] = n;
    const o = (this._avgFieldLength[t] || 0) * s + n;
    this._avgFieldLength[t] = o / (s + 1);
  }
  removeFieldLength(e, t, s, n) {
    if (s === 1) {
      this._avgFieldLength[t] = 0;
      return;
    }
    const r = this._avgFieldLength[t] * s - n;
    this._avgFieldLength[t] = r / (s - 1);
  }
  saveStoredFields(e, t) {
    const { storeFields: s, extractField: n } = this._options;
    if (s == null || s.length === 0) return;
    let r = this._storedFields.get(e);
    r == null && this._storedFields.set(e, r = {});
    for (const i of s) {
      const o = n(t, i);
      o !== void 0 && (r[i] = o);
    }
  }
}
le.wildcard = Symbol("*");
const ze = (a, e) => Object.prototype.hasOwnProperty.call(a, e) ? a[e] : void 0,
  Ps = {
    [Ue]: (a, e) => {
      for (const t of e.keys()) {
        const s = a.get(t);
        if (s == null) a.set(t, e.get(t));
        else {
          const { score: n, terms: r, match: i } = e.get(t);
          s.score = s.score + n,
            s.match = Object.assign(s.match, i),
            ht(s.terms, r);
        }
      }
      return a;
    },
    [It]: (a, e) => {
      const t = new Map();
      for (const s of e.keys()) {
        const n = a.get(s);
        if (n == null) continue;
        const { score: r, terms: i, match: o } = e.get(s);
        ht(n.terms, i),
          t.set(s, {
            score: n.score + r,
            terms: n.terms,
            match: Object.assign(n.match, o),
          });
      }
      return t;
    },
    [zs]: (a, e) => {
      for (const t of e.keys()) a.delete(t);
      return a;
    },
  },
  js = { k: 1.2, b: .7, d: .5 },
  Vs = (a, e, t, s, n, r) => {
    const { k: i, b: o, d: c } = r;
    return Math.log(1 + (t - e + .5) / (e + .5)) *
      (c + a * (i + 1) / (a + i * (1 - o + o * s / n)));
  },
  $s = (a) => (e, t, s) => {
    const n = typeof a.fuzzy == "function" ? a.fuzzy(e, t, s) : a.fuzzy || !1,
      r = typeof a.prefix == "function" ? a.prefix(e, t, s) : a.prefix === !0,
      i = typeof a.boostTerm == "function" ? a.boostTerm(e, t, s) : 1;
    return { term: e, fuzzy: n, prefix: r, termBoost: i };
  },
  Pe = {
    idField: "id",
    extractField: (a, e) => a[e],
    tokenize: (a) => a.split(Ks),
    processTerm: (a) => a.toLowerCase(),
    fields: void 0,
    searchOptions: void 0,
    storeFields: [],
    logger: (a, e) => {
      typeof (console == null ? void 0 : console[a]) == "function" &&
        console[a](e);
    },
    autoVacuum: !0,
  },
  dt = {
    combineWith: Ue,
    prefix: !1,
    fuzzy: !1,
    maxFuzzy: 6,
    boost: {},
    weights: { fuzzy: .45, prefix: .375 },
    bm25: js,
  },
  Bs = { combineWith: It, prefix: (a, e, t) => e === t.length - 1 },
  We = { batchSize: 1e3, batchWait: 10 },
  Ke = { minDirtFactor: .1, minDirtCount: 20 },
  je = Object.assign(Object.assign({}, We), Ke),
  Ws = (a, e) => {
    a.includes(e) || a.push(e);
  },
  ht = (a, e) => {
    for (const t of e) a.includes(t) || a.push(t);
  },
  ft = ({ score: a }, { score: e }) => e - a,
  pt = () => new Map(),
  Se = (a) => {
    const e = new Map();
    for (const t of Object.keys(a)) e.set(parseInt(t, 10), a[t]);
    return e;
  },
  Ee = (a) =>
    Te(void 0, void 0, void 0, function* () {
      const e = new Map();
      let t = 0;
      for (const s of Object.keys(a)) {
        e.set(parseInt(s, 10), a[s]), ++t % 1e3 === 0 && (yield Nt(0));
      }
      return e;
    }),
  Nt = (a) => new Promise((e) => setTimeout(e, a)),
  Ks = /[\n\r\p{Z}\p{P}]+/u;
class Js {
  constructor(e = 10) {
    Ce(this, "max");
    Ce(this, "cache");
    this.max = e, this.cache = new Map();
  }
  get(e) {
    let t = this.cache.get(e);
    return t !== void 0 && (this.cache.delete(e), this.cache.set(e, t)), t;
  }
  set(e, t) {
    this.cache.has(e)
      ? this.cache.delete(e)
      : this.cache.size === this.max && this.cache.delete(this.first()),
      this.cache.set(e, t);
  }
  first() {
    return this.cache.keys().next().value;
  }
  clear() {
    this.cache.clear();
  }
}
const K = (a) => (Qt("data-v-cb4e1afe"), a = a(), Ht(), a),
  Us = ["aria-owns"],
  qs = { class: "shell" },
  Gs = ["title"],
  Qs = K(() =>
    x(
      "span",
      {
        "aria-hidden": "true",
        class: "vpi-search search-icon local-search-icon",
      },
      null,
      -1,
    )
  ),
  Hs = [Qs],
  Ys = { class: "search-actions before" },
  Zs = ["title"],
  Xs = K(() =>
    x("span", { class: "vpi-arrow-left local-search-icon" }, null, -1)
  ),
  en = [Xs],
  tn = ["placeholder"],
  sn = { class: "search-actions" },
  nn = ["title"],
  rn = K(() =>
    x("span", { class: "vpi-layout-list local-search-icon" }, null, -1)
  ),
  an = [rn],
  on = ["disabled", "title"],
  cn = K(() => x("span", { class: "vpi-delete local-search-icon" }, null, -1)),
  ln = [cn],
  un = ["id", "role", "aria-labelledby"],
  dn = ["aria-selected"],
  hn = ["href", "aria-label", "onMouseenter", "onFocusin"],
  fn = { class: "titles" },
  pn = K(() => x("span", { class: "title-icon" }, "#", -1)),
  vn = ["innerHTML"],
  mn = K(() =>
    x("span", { class: "vpi-chevron-right local-search-icon" }, null, -1)
  ),
  gn = { class: "title main" },
  bn = ["innerHTML"],
  yn = { key: 0, class: "excerpt-wrapper" },
  wn = { key: 0, class: "excerpt", inert: "" },
  _n = ["innerHTML"],
  xn = K(() => x("div", { class: "excerpt-gradient-bottom" }, null, -1)),
  Sn = K(() => x("div", { class: "excerpt-gradient-top" }, null, -1)),
  En = { key: 0, class: "no-results" },
  Tn = { class: "search-keyboard-shortcuts" },
  In = ["aria-label"],
  Nn = K(() => x("span", { class: "vpi-arrow-up navigate-icon" }, null, -1)),
  kn = [Nn],
  Fn = ["aria-label"],
  On = K(() => x("span", { class: "vpi-arrow-down navigate-icon" }, null, -1)),
  Rn = [On],
  Cn = ["aria-label"],
  Mn = K(() =>
    x("span", { class: "vpi-corner-down-left navigate-icon" }, null, -1)
  ),
  An = [Mn],
  Ln = ["aria-label"],
  Dn = Mt({
    __name: "VPLocalSearchBox",
    emits: ["close"],
    setup(a, { emit: e }) {
      var F, M;
      const t = e,
        s = be(),
        n = be(),
        r = be(is),
        i = ss(),
        { activate: o } = Rs(s, {
          immediate: !0,
          allowOutsideClick: !0,
          clickOutsideDeactivates: !0,
          escapeDeactivates: !0,
        }),
        { localeIndex: c, theme: l } = i,
        h = et(async () => {
          var p, g, N, O, P, j, I, L, q;
          return it(
            le.loadJSON(
              (N = await ((g = (p = r.value)[c.value]) == null
                  ? void 0
                  : g.call(p))) == null
                ? void 0
                : N.default,
              {
                fields: ["title", "titles", "text"],
                storeFields: ["title", "titles"],
                searchOptions: {
                  fuzzy: .2,
                  prefix: !0,
                  boost: { title: 4, text: 2, titles: 1 },
                  ...((O = l.value.search) == null ? void 0 : O.provider) ===
                      "local" &&
                    ((j = (P = l.value.search.options) == null
                        ? void 0
                        : P.miniSearch) == null
                      ? void 0
                      : j.searchOptions),
                },
                ...((I = l.value.search) == null ? void 0 : I.provider) ===
                    "local" &&
                  ((q = (L = l.value.search.options) == null
                      ? void 0
                      : L.miniSearch) == null
                    ? void 0
                    : q.options),
              },
            ),
          );
        }),
        v = ye(() => {
            var p, g;
            return ((p = l.value.search) == null ? void 0 : p.provider) ===
                "local" &&
              ((g = l.value.search.options) == null
                  ? void 0
                  : g.disableQueryPersistence) === !0;
          }).value
          ? ne("")
          : At("vitepress:local-search-filter", ""),
        b = Lt(
          "vitepress:local-search-detailed-list",
          ((F = l.value.search) == null ? void 0 : F.provider) === "local" &&
            ((M = l.value.search.options) == null ? void 0 : M.detailedView) ===
              !0,
        ),
        w = ye(() => {
          var p, g, N;
          return ((p = l.value.search) == null ? void 0 : p.provider) ===
              "local" &&
            (((g = l.value.search.options) == null
                  ? void 0
                  : g.disableDetailedView) === !0 ||
              ((N = l.value.search.options) == null
                  ? void 0
                  : N.detailedView) === !1);
        }),
        _ = ye(() => {
          var g, N, O, P, j, I, L;
          const p = ((g = l.value.search) == null ? void 0 : g.options) ??
            l.value.algolia;
          return ((j = (P = (O = (N = p == null ? void 0 : p.locales) == null
                  ? void 0
                  : N[c.value]) == null
                ? void 0
                : O.translations) == null
              ? void 0
              : P.button) == null
            ? void 0
            : j.buttonText) ||
            ((L = (I = p == null ? void 0 : p.translations) == null
                ? void 0
                : I.button) == null
              ? void 0
              : L.buttonText) ||
            "Search";
        });
      Dt(() => {
        w.value && (b.value = !1);
      });
      const y = be([]), R = ne(!1);
      Ve(v, () => {
        R.value = !1;
      });
      const C = et(async () => {
          if (n.value) return it(new Ms(n.value));
        }, null),
        J = new Js(16);
      zt(() => [h.value, v.value, b.value], async ([p, g, N], O, P) => {
        var me, qe, Ge, Qe;
        (O == null ? void 0 : O[0]) !== p && J.clear();
        let j = !1;
        if (
          P(() => {
            j = !0;
          }), !p
        ) return;
        y.value = p.search(g).slice(0, 16), R.value = !0;
        const I = N ? await Promise.all(y.value.map((B) => H(B.id))) : [];
        if (j) return;
        for (const { id: B, mod: ee } of I) {
          const te = B.slice(0, B.indexOf("#"));
          let Y = J.get(te);
          if (Y) continue;
          Y = new Map(), J.set(te, Y);
          const G = ee.default ?? ee;
          if (G != null && G.render || G != null && G.setup) {
            const se = Yt(G);
            se.config.warnHandler = () => {},
              se.provide(Zt, i),
              Object.defineProperties(se.config.globalProperties, {
                $frontmatter: {
                  get() {
                    return i.frontmatter.value;
                  },
                },
                $params: {
                  get() {
                    return i.page.value.params;
                  },
                },
              });
            const He = document.createElement("div");
            se.mount(He),
              He.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((ue) => {
                var Xe;
                const ge = (Xe = ue.querySelector("a")) == null
                    ? void 0
                    : Xe.getAttribute("href"),
                  Ye = (ge == null ? void 0 : ge.startsWith("#")) &&
                    ge.slice(1);
                if (!Ye) return;
                let Ze = "";
                for (
                  ;
                  (ue = ue.nextElementSibling) && !/^h[1-6]$/i.test(ue.tagName);
                ) Ze += ue.outerHTML;
                Y.set(Ye, Ze);
              }),
              se.unmount();
          }
          if (j) return;
        }
        const L = new Set();
        if (
          y.value = y.value.map((B) => {
            const [ee, te] = B.id.split("#"),
              Y = J.get(ee),
              G = (Y == null ? void 0 : Y.get(te)) ?? "";
            for (const se in B.match) L.add(se);
            return { ...B, text: G };
          }),
            await de(),
            j
        ) return;
        await new Promise((B) => {
          var ee;
          (ee = C.value) == null || ee.unmark({
            done: () => {
              var te;
              (te = C.value) == null || te.markRegExp(k(L), { done: B });
            },
          });
        });
        const q = ((me = s.value) == null
          ? void 0
          : me.querySelectorAll(".result .excerpt")) ?? [];
        for (const B of q) {
          (qe = B.querySelector('mark[data-markjs="true"]')) == null ||
            qe.scrollIntoView({ block: "center" });
        }
        (Qe = (Ge = n.value) == null ? void 0 : Ge.firstElementChild) == null ||
          Qe.scrollIntoView({ block: "start" });
      }, { debounce: 200, immediate: !0 });
      async function H(p) {
        const g = Xt(p.slice(0, p.indexOf("#")));
        try {
          if (!g) throw new Error(`Cannot find file for id: ${p}`);
          return { id: p, mod: await import(g) };
        } catch (N) {
          return console.error(N), { id: p, mod: {} };
        }
      }
      const W = ne(),
        V = ye(() => {
          var p;
          return ((p = v.value) == null ? void 0 : p.length) <= 0;
        });
      function $(p = !0) {
        var g, N;
        (g = W.value) == null || g.focus(),
          p && ((N = W.value) == null || N.select());
      }
      Me(() => {
        $();
      });
      function Re(p) {
        p.pointerType === "mouse" && $();
      }
      const A = ne(-1), U = ne(!1);
      Ve(y, (p) => {
        A.value = p.length ? 0 : -1, T();
      });
      function T() {
        de(() => {
          const p = document.querySelector(".result.selected");
          p == null || p.scrollIntoView({ block: "nearest" });
        });
      }
      we("ArrowUp", (p) => {
        p.preventDefault(),
          A.value--,
          A.value < 0 && (A.value = y.value.length - 1),
          U.value = !0,
          T();
      }),
        we("ArrowDown", (p) => {
          p.preventDefault(),
            A.value++,
            A.value >= y.value.length && (A.value = 0),
            U.value = !0,
            T();
        });
      const u = Pt();
      we("Enter", (p) => {
        if (
          p.isComposing ||
          p.target instanceof HTMLButtonElement && p.target.type !== "submit"
        ) return;
        const g = y.value[A.value];
        if (p.target instanceof HTMLInputElement && !g) {
          p.preventDefault();
          return;
        }
        g && (u.go(g.id), t("close"));
      }),
        we("Escape", () => {
          t("close");
        });
      const m = ns({
        modal: {
          displayDetails: "Display detailed list",
          resetButtonTitle: "Reset search",
          backButtonTitle: "Close search",
          noResultsText: "No results for",
          footer: {
            selectText: "to select",
            selectKeyAriaLabel: "enter",
            navigateText: "to navigate",
            navigateUpKeyAriaLabel: "up arrow",
            navigateDownKeyAriaLabel: "down arrow",
            closeText: "to close",
            closeKeyAriaLabel: "escape",
          },
        },
      });
      Me(() => {
        window.history.pushState(null, "", null);
      }),
        jt("popstate", (p) => {
          p.preventDefault(), t("close");
        });
      const S = Vt($t ? document.body : null);
      Me(() => {
        de(() => {
          S.value = !0, de().then(() => o());
        });
      }),
        Bt(() => {
          S.value = !1;
        });
      function E() {
        v.value = "", de().then(() => $(!1));
      }
      function k(p) {
        return new RegExp(
          [...p].sort((g, N) => N.length - g.length).map((g) => `(${es(g)})`)
            .join("|"),
          "gi",
        );
      }
      return (p, g) => {
        var N, O, P, j;
        return Q(),
          Wt(Gt, { to: "body" }, [x(
            "div",
            {
              ref_key: "el",
              ref: s,
              role: "button",
              "aria-owns": (N = y.value) != null && N.length
                ? "localsearch-list"
                : void 0,
              "aria-expanded": "true",
              "aria-haspopup": "listbox",
              "aria-labelledby": "localsearch-label",
              class: "VPLocalSearchBox",
            },
            [
              x("div", {
                class: "backdrop",
                onClick: g[0] || (g[0] = (I) => p.$emit("close")),
              }),
              x("div", qs, [
                x("form", {
                  class: "search-bar",
                  onPointerup: g[4] || (g[4] = (I) => Re(I)),
                  onSubmit: g[5] || (g[5] = Kt(() => {}, ["prevent"])),
                }, [
                  x(
                    "label",
                    {
                      title: _.value,
                      id: "localsearch-label",
                      for: "localsearch-input",
                    },
                    Hs,
                    8,
                    Gs,
                  ),
                  x("div", Ys, [
                    x(
                      "button",
                      {
                        class: "back-button",
                        title: D(m)("modal.backButtonTitle"),
                        onClick: g[1] || (g[1] = (I) => p.$emit("close")),
                      },
                      en,
                      8,
                      Zs,
                    ),
                  ]),
                  Jt(
                    x(
                      "input",
                      {
                        ref_key: "searchInput",
                        ref: W,
                        "onUpdate:modelValue": g[2] ||
                          (g[2] = (I) => qt(v) ? v.value = I : null),
                        placeholder: _.value,
                        id: "localsearch-input",
                        "aria-labelledby": "localsearch-label",
                        class: "search-input",
                      },
                      null,
                      8,
                      tn,
                    ),
                    [[Ut, D(v)]],
                  ),
                  x("div", sn, [
                    w.value ? _e("", !0) : (Q(),
                      Z(
                        "button",
                        {
                          key: 0,
                          class: tt(["toggle-layout-button", {
                            "detailed-list": D(b),
                          }]),
                          type: "button",
                          title: D(m)("modal.displayDetails"),
                          onClick: g[3] ||
                            (g[3] = (I) => A.value > -1 && (b.value = !D(b))),
                        },
                        an,
                        10,
                        nn,
                      )),
                    x(
                      "button",
                      {
                        class: "clear-button",
                        type: "reset",
                        disabled: V.value,
                        title: D(m)("modal.resetButtonTitle"),
                        onClick: E,
                      },
                      ln,
                      8,
                      on,
                    ),
                  ]),
                ], 32),
                x(
                  "ul",
                  {
                    ref_key: "resultsEl",
                    ref: n,
                    id: (O = y.value) != null && O.length
                      ? "localsearch-list"
                      : void 0,
                    role: (P = y.value) != null && P.length
                      ? "listbox"
                      : void 0,
                    "aria-labelledby": (j = y.value) != null && j.length
                      ? "localsearch-label"
                      : void 0,
                    class: "results",
                    onMousemove: g[7] || (g[7] = (I) => U.value = !1),
                  },
                  [
                    (Q(!0),
                      Z(
                        nt,
                        null,
                        st(y.value, (I, L) => (Q(),
                          Z(
                            "li",
                            {
                              key: I.id,
                              role: "option",
                              "aria-selected": A.value === L ? "true" : "false",
                            },
                            [x(
                              "a",
                              {
                                href: I.id,
                                class: tt(["result", {
                                  selected: A.value === L,
                                }]),
                                "aria-label": [...I.titles, I.title].join(
                                  " > ",
                                ),
                                onMouseenter: (q) => !U.value && (A.value = L),
                                onFocusin: (q) => A.value = L,
                                onClick: g[6] ||
                                  (g[6] = (q) => p.$emit("close")),
                              },
                              [x("div", null, [
                                x("div", fn, [
                                  pn,
                                  (Q(!0),
                                    Z(
                                      nt,
                                      null,
                                      st(
                                        I.titles,
                                        (
                                          q,
                                          me,
                                        ) => (Q(),
                                          Z(
                                            "span",
                                            { key: me, class: "title" },
                                            [
                                              x(
                                                "span",
                                                { class: "text", innerHTML: q },
                                                null,
                                                8,
                                                vn,
                                              ),
                                              mn,
                                            ],
                                          )),
                                      ),
                                      128,
                                    )),
                                  x("span", gn, [
                                    x(
                                      "span",
                                      { class: "text", innerHTML: I.title },
                                      null,
                                      8,
                                      bn,
                                    ),
                                  ]),
                                ]),
                                D(b)
                                  ? (Q(),
                                    Z("div", yn, [
                                      I.text
                                        ? (Q(),
                                          Z("div", wn, [
                                            x(
                                              "div",
                                              {
                                                class: "vp-doc",
                                                innerHTML: I.text,
                                              },
                                              null,
                                              8,
                                              _n,
                                            ),
                                          ]))
                                        : _e("", !0),
                                      xn,
                                      Sn,
                                    ]))
                                  : _e("", !0),
                              ])],
                              42,
                              hn,
                            )],
                            8,
                            dn,
                          ))),
                        128,
                      )),
                    D(v) && !y.value.length && R.value
                      ? (Q(),
                        Z("li", En, [
                          he(fe(D(m)("modal.noResultsText")) + ' "', 1),
                          x("strong", null, fe(D(v)), 1),
                          he('" '),
                        ]))
                      : _e("", !0),
                  ],
                  40,
                  un,
                ),
                x("div", Tn, [
                  x("span", null, [
                    x(
                      "kbd",
                      {
                        "aria-label": D(m)(
                          "modal.footer.navigateUpKeyAriaLabel",
                        ),
                      },
                      kn,
                      8,
                      In,
                    ),
                    x(
                      "kbd",
                      {
                        "aria-label": D(m)(
                          "modal.footer.navigateDownKeyAriaLabel",
                        ),
                      },
                      Rn,
                      8,
                      Fn,
                    ),
                    he(" " + fe(D(m)("modal.footer.navigateText")), 1),
                  ]),
                  x("span", null, [
                    x(
                      "kbd",
                      { "aria-label": D(m)("modal.footer.selectKeyAriaLabel") },
                      An,
                      8,
                      Cn,
                    ),
                    he(" " + fe(D(m)("modal.footer.selectText")), 1),
                  ]),
                  x("span", null, [
                    x(
                      "kbd",
                      { "aria-label": D(m)("modal.footer.closeKeyAriaLabel") },
                      "esc",
                      8,
                      Ln,
                    ),
                    he(" " + fe(D(m)("modal.footer.closeText")), 1),
                  ]),
                ]),
              ]),
            ],
            8,
            Us,
          )]);
      };
    },
  }),
  Bn = ts(Dn, [["__scopeId", "data-v-cb4e1afe"]]);
export { Bn as default };
