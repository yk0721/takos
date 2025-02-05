const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = (m.f ||
    (m.f = [
      "assets/chunks/VPLocalSearchBox.d3cqmPs-.js",
      "assets/chunks/framework.Caa1YTU6.js",
    ])),
) => i.map((i) => d[i]);
import {
  $ as Ye,
  _ as $,
  A as he,
  a as O,
  a0 as Qe,
  a1 as Ze,
  a2 as xe,
  a3 as et,
  B as ze,
  b as k,
  C as qe,
  c,
  D as W,
  d as _,
  E,
  e as h,
  F as M,
  f as je,
  G as Pe,
  g as pe,
  H as x,
  h as y,
  I as m,
  i as Ue,
  J as F,
  j as v,
  K as Ve,
  k as r,
  L as ee,
  l as H,
  M as q,
  m as K,
  N as te,
  n as N,
  O as Ke,
  o as a,
  P as Le,
  p as C,
  Q as le,
  q as ie,
  R as Re,
  r as l,
  S as Se,
  s as w,
  T as ve,
  t as I,
  U as oe,
  u as Ge,
  V as We,
  v as G,
  W as Je,
  w as d,
  X as Xe,
  x as Z,
  Y as Te,
  y as R,
  Z as Ie,
  z as fe,
} from "./framework.Caa1YTU6.js";
const tt = _({
    __name: "VPBadge",
    props: { text: {}, type: { default: "tip" } },
    setup(o) {
      return (
        e,
        t,
      ) => (a(),
        c("span", { class: N(["VPBadge", e.type]) }, [
          l(e.$slots, "default", {}, () => [O(I(e.text), 1)]),
        ], 2));
    },
  }),
  ot = { key: 0, class: "VPBackdrop" },
  nt = _({
    __name: "VPBackdrop",
    props: { show: { type: Boolean } },
    setup(o) {
      return (
        e,
        t,
      ) => (a(),
        k(ve, { name: "fade" }, {
          default: d(() => [e.show ? (a(), c("div", ot)) : h("", !0)]),
          _: 1,
        }));
    },
  }),
  st = $(nt, [["__scopeId", "data-v-54a304ca"]]),
  P = Ge;
function at(o, e) {
  let t, s = !1;
  return () => {
    t && clearTimeout(t),
      s ? t = setTimeout(o, e) : (o(), (s = !0) && setTimeout(() => s = !1, e));
  };
}
function ce(o) {
  return /^\//.test(o) ? o : `/${o}`;
}
function _e(o) {
  const { pathname: e, search: t, hash: s, protocol: n } = new URL(
    o,
    "http://a.com",
  );
  if (Ue(o) || o.startsWith("#") || !n.startsWith("http") || !je(e)) return o;
  const { site: i } = P(),
    u = e.endsWith("/") || e.endsWith(".html") ? o : o.replace(
      /(?:(^\.+)\/)?.*$/,
      `$1${e.replace(/(\.md)?$/, i.value.cleanUrls ? "" : ".html")}${t}${s}`,
    );
  return pe(u);
}
function X({ correspondingLink: o = !1 } = {}) {
  const { site: e, localeIndex: t, page: s, theme: n, hash: i } = P(),
    u = y(() => {
      var p, g;
      return {
        label: (p = e.value.locales[t.value]) == null ? void 0 : p.label,
        link: ((g = e.value.locales[t.value]) == null ? void 0 : g.link) ||
          (t.value === "root" ? "/" : `/${t.value}/`),
      };
    });
  return {
    localeLinks: y(() =>
      Object.entries(e.value.locales).flatMap(([p, g]) =>
        u.value.label === g.label ? [] : {
          text: g.label,
          link: rt(
            g.link || (p === "root" ? "/" : `/${p}/`),
            n.value.i18nRouting !== !1 && o,
            s.value.relativePath.slice(u.value.link.length - 1),
            !e.value.cleanUrls,
          ) + i.value,
        }
      )
    ),
    currentLang: u,
  };
}
function rt(o, e, t, s) {
  return e
    ? o.replace(/\/$/, "") +
      ce(t.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, s ? ".html" : ""))
    : o;
}
const it = (o) => (C("data-v-6ff51ddd"), o = o(), H(), o),
  lt = { class: "NotFound" },
  ct = { class: "code" },
  ut = { class: "title" },
  dt = it(() => v("div", { class: "divider" }, null, -1)),
  vt = { class: "quote" },
  pt = { class: "action" },
  ft = ["href", "aria-label"],
  ht = _({
    __name: "NotFound",
    setup(o) {
      const { theme: e } = P(), { currentLang: t } = X();
      return (s, n) => {
        var i, u, f, p, g;
        return a(),
          c("div", lt, [
            v(
              "p",
              ct,
              I(((i = r(e).notFound) == null ? void 0 : i.code) ?? "404"),
              1,
            ),
            v(
              "h1",
              ut,
              I(
                ((u = r(e).notFound) == null ? void 0 : u.title) ??
                  "PAGE NOT FOUND",
              ),
              1,
            ),
            dt,
            v(
              "blockquote",
              vt,
              I(
                ((f = r(e).notFound) == null ? void 0 : f.quote) ??
                  "But if you don't change your direction, and if you keep looking, you may end up where you are heading.",
              ),
              1,
            ),
            v("div", pt, [
              v(
                "a",
                {
                  class: "link",
                  href: r(pe)(r(t).link),
                  "aria-label":
                    ((p = r(e).notFound) == null ? void 0 : p.linkLabel) ??
                      "go to home",
                },
                I(
                  ((g = r(e).notFound) == null ? void 0 : g.linkText) ??
                    "Take me home",
                ),
                9,
                ft,
              ),
            ]),
          ]);
      };
    },
  }),
  _t = $(ht, [["__scopeId", "data-v-6ff51ddd"]]);
function we(o, e) {
  if (Array.isArray(o)) return Y(o);
  if (o == null) return [];
  e = ce(e);
  const t = Object.keys(o).sort((n, i) =>
      i.split("/").length - n.split("/").length
    ).find((n) => e.startsWith(ce(n))),
    s = t ? o[t] : [];
  return Array.isArray(s) ? Y(s) : Y(s.items, s.base);
}
function mt(o) {
  const e = [];
  let t = 0;
  for (const s in o) {
    const n = o[s];
    if (n.items) {
      t = e.push(n);
      continue;
    }
    e[t] || e.push({ items: [] }), e[t].items.push(n);
  }
  return e;
}
function kt(o) {
  const e = [];
  function t(s) {
    for (const n of s) {
      n.text && n.link &&
      e.push({ text: n.text, link: n.link, docFooterText: n.docFooterText }),
        n.items && t(n.items);
    }
  }
  return t(o), e;
}
function ue(o, e) {
  return Array.isArray(e)
    ? e.some((t) => ue(o, t))
    : K(o, e.link)
    ? !0
    : e.items
    ? ue(o, e.items)
    : !1;
}
function Y(o, e) {
  return [...o].map((t) => {
    const s = { ...t }, n = s.base || e;
    return n && s.link && (s.link = n + s.link),
      s.items && (s.items = Y(s.items, n)),
      s;
  });
}
function U() {
  const { frontmatter: o, page: e, theme: t } = P(),
    s = ie("(min-width: 960px)"),
    n = w(!1),
    i = y(() => {
      const B = t.value.sidebar, S = e.value.relativePath;
      return B ? we(B, S) : [];
    }),
    u = w(i.value);
  G(i, (B, S) => {
    JSON.stringify(B) !== JSON.stringify(S) && (u.value = i.value);
  });
  const f = y(() =>
      o.value.sidebar !== !1 && u.value.length > 0 && o.value.layout !== "home"
    ),
    p = y(() =>
      g
        ? o.value.aside == null
          ? t.value.aside === "left"
          : o.value.aside === "left"
        : !1
    ),
    g = y(() =>
      o.value.layout === "home"
        ? !1
        : o.value.aside != null
        ? !!o.value.aside
        : t.value.aside !== !1
    ),
    L = y(() => f.value && s.value),
    b = y(() => f.value ? mt(u.value) : []);
  function V() {
    n.value = !0;
  }
  function T() {
    n.value = !1;
  }
  function A() {
    n.value ? T() : V();
  }
  return {
    isOpen: n,
    sidebar: u,
    sidebarGroups: b,
    hasSidebar: f,
    hasAside: g,
    leftAside: p,
    isSidebarEnabled: L,
    open: V,
    close: T,
    toggle: A,
  };
}
function bt(o, e) {
  let t;
  Z(() => {
    t = o.value ? document.activeElement : void 0;
  }),
    R(() => {
      window.addEventListener("keyup", s);
    }),
    fe(() => {
      window.removeEventListener("keyup", s);
    });
  function s(n) {
    n.key === "Escape" && o.value && (e(), t == null || t.focus());
  }
}
function $t(o) {
  const { page: e, hash: t } = P(),
    s = w(!1),
    n = y(() => o.value.collapsed != null),
    i = y(() => !!o.value.link),
    u = w(!1),
    f = () => {
      u.value = K(e.value.relativePath, o.value.link);
    };
  G([e, o, t], f), R(f);
  const p = y(() =>
      u.value
        ? !0
        : o.value.items
        ? ue(e.value.relativePath, o.value.items)
        : !1
    ),
    g = y(() => !!(o.value.items && o.value.items.length));
  Z(() => {
    s.value = !!(n.value && o.value.collapsed);
  }),
    he(() => {
      (u.value || p.value) && (s.value = !1);
    });
  function L() {
    n.value && (s.value = !s.value);
  }
  return {
    collapsed: s,
    collapsible: n,
    isLink: i,
    isActiveLink: u,
    hasActiveLink: p,
    hasChildren: g,
    toggle: L,
  };
}
function gt() {
  const { hasSidebar: o } = U(),
    e = ie("(min-width: 960px)"),
    t = ie("(min-width: 1280px)");
  return {
    isAsideEnabled: y(() =>
      !t.value && !e.value ? !1 : o.value ? t.value : e.value
    ),
  };
}
const de = [];
function Ne(o) {
  return typeof o.outline == "object" && !Array.isArray(o.outline) &&
      o.outline.label || o.outlineTitle || "On this page";
}
function me(o) {
  const e = [...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")]
    .filter((t) => t.id && t.hasChildNodes()).map((t) => {
      const s = Number(t.tagName[1]);
      return { element: t, title: yt(t), link: "#" + t.id, level: s };
    });
  return Pt(e, o);
}
function yt(o) {
  let e = "";
  for (const t of o.childNodes) {
    if (t.nodeType === 1) {
      if (
        t.classList.contains("VPBadge") ||
        t.classList.contains("header-anchor") ||
        t.classList.contains("ignore-header")
      ) continue;
      e += t.textContent;
    } else t.nodeType === 3 && (e += t.textContent);
  }
  return e.trim();
}
function Pt(o, e) {
  if (e === !1) return [];
  const t = (typeof e == "object" && !Array.isArray(e) ? e.level : e) || 2,
    [s, n] = typeof t == "number" ? [t, t] : t === "deep" ? [2, 6] : t;
  o = o.filter((u) => u.level >= s && u.level <= n), de.length = 0;
  for (const { element: u, link: f } of o) de.push({ element: u, link: f });
  const i = [];
  e: for (let u = 0; u < o.length; u++) {
    const f = o[u];
    if (u === 0) i.push(f);
    else {
      for (let p = u - 1; p >= 0; p--) {
        const g = o[p];
        if (g.level < f.level) {
          (g.children || (g.children = [])).push(f);
          continue e;
        }
      }
      i.push(f);
    }
  }
  return i;
}
function Vt(o, e) {
  const { isAsideEnabled: t } = gt(), s = at(i, 100);
  let n = null;
  R(() => {
    requestAnimationFrame(i), window.addEventListener("scroll", s);
  }),
    ze(() => {
      u(location.hash);
    }),
    fe(() => {
      window.removeEventListener("scroll", s);
    });
  function i() {
    if (!t.value) return;
    const f = window.scrollY,
      p = window.innerHeight,
      g = document.body.offsetHeight,
      L = Math.abs(f + p - g) < 1,
      b = de.map(({ element: T, link: A }) => ({ link: A, top: Lt(T) })).filter(
        ({ top: T }) => !Number.isNaN(T),
      ).sort((T, A) => T.top - A.top);
    if (!b.length) {
      u(null);
      return;
    }
    if (f < 1) {
      u(null);
      return;
    }
    if (L) {
      u(b[b.length - 1].link);
      return;
    }
    let V = null;
    for (const { link: T, top: A } of b) {
      if (A > f + qe() + 4) break;
      V = T;
    }
    u(V);
  }
  function u(f) {
    n && n.classList.remove("active"),
      f == null
        ? n = null
        : n = o.value.querySelector(`a[href="${decodeURIComponent(f)}"]`);
    const p = n;
    p
      ? (p.classList.add("active"),
        e.value.style.top = p.offsetTop + 39 + "px",
        e.value.style.opacity = "1")
      : (e.value.style.top = "33px", e.value.style.opacity = "0");
  }
}
function Lt(o) {
  let e = 0;
  for (; o !== document.body;) {
    if (o === null) return NaN;
    e += o.offsetTop, o = o.offsetParent;
  }
  return e;
}
const St = ["href", "title"],
  Tt = _({
    __name: "VPDocOutlineItem",
    props: { headers: {}, root: { type: Boolean } },
    setup(o) {
      function e({ target: t }) {
        const s = t.href.split("#")[1],
          n = document.getElementById(decodeURIComponent(s));
        n == null || n.focus({ preventScroll: !0 });
      }
      return (t, s) => {
        const n = W("VPDocOutlineItem", !0);
        return a(),
          c("ul", {
            class: N(["VPDocOutlineItem", t.root ? "root" : "nested"]),
          }, [
            (a(!0),
              c(
                M,
                null,
                E(
                  t.headers,
                  (
                    { children: i, link: u, title: f },
                  ) => (a(),
                    c("li", null, [
                      v(
                        "a",
                        {
                          class: "outline-link",
                          href: u,
                          onClick: e,
                          title: f,
                        },
                        I(f),
                        9,
                        St,
                      ),
                      i != null && i.length
                        ? (a(),
                          k(n, { key: 0, headers: i }, null, 8, ["headers"]))
                        : h("", !0),
                    ])),
                ),
                256,
              )),
          ], 2);
      };
    },
  }),
  Me = $(Tt, [["__scopeId", "data-v-53c99d69"]]),
  It = { class: "content" },
  wt = {
    "aria-level": "2",
    class: "outline-title",
    id: "doc-outline-aria-label",
    role: "heading",
  },
  Nt = _({
    __name: "VPDocAsideOutline",
    setup(o) {
      const { frontmatter: e, theme: t } = P(), s = Pe([]);
      x(() => {
        s.value = me(e.value.outline ?? t.value.outline);
      });
      const n = w(), i = w();
      return Vt(n, i), (u, f) => (a(),
        c("nav", {
          "aria-labelledby": "doc-outline-aria-label",
          class: N(["VPDocAsideOutline", {
            "has-outline": s.value.length > 0,
          }]),
          ref_key: "container",
          ref: n,
        }, [
          v("div", It, [
            v(
              "div",
              { class: "outline-marker", ref_key: "marker", ref: i },
              null,
              512,
            ),
            v("div", wt, I(r(Ne)(r(t))), 1),
            m(Me, { headers: s.value, root: !0 }, null, 8, ["headers"]),
          ]),
        ], 2));
    },
  }),
  Mt = $(Nt, [["__scopeId", "data-v-f610f197"]]),
  At = { class: "VPDocAsideCarbonAds" },
  Bt = _({
    __name: "VPDocAsideCarbonAds",
    props: { carbonAds: {} },
    setup(o) {
      const e = () => null;
      return (
        t,
        s,
      ) => (a(),
        c("div", At, [
          m(r(e), { "carbon-ads": t.carbonAds }, null, 8, ["carbon-ads"]),
        ]));
    },
  }),
  Ct = (o) => (C("data-v-cb998dce"), o = o(), H(), o),
  Ht = { class: "VPDocAside" },
  Et = Ct(() => v("div", { class: "spacer" }, null, -1)),
  Ft = _({
    __name: "VPDocAside",
    setup(o) {
      const { theme: e } = P();
      return (t, s) => (a(),
        c("div", Ht, [
          l(t.$slots, "aside-top", {}, void 0, !0),
          l(t.$slots, "aside-outline-before", {}, void 0, !0),
          m(Mt),
          l(t.$slots, "aside-outline-after", {}, void 0, !0),
          Et,
          l(t.$slots, "aside-ads-before", {}, void 0, !0),
          r(e).carbonAds
            ? (a(),
              k(Bt, { key: 0, "carbon-ads": r(e).carbonAds }, null, 8, [
                "carbon-ads",
              ]))
            : h("", !0),
          l(t.$slots, "aside-ads-after", {}, void 0, !0),
          l(t.$slots, "aside-bottom", {}, void 0, !0),
        ]));
    },
  }),
  Dt = $(Ft, [["__scopeId", "data-v-cb998dce"]]);
function Ot() {
  const { theme: o, page: e } = P();
  return y(() => {
    const { text: t = "Edit this page", pattern: s = "" } = o.value.editLink ||
      {};
    let n;
    return typeof s == "function"
      ? n = s(e.value)
      : n = s.replace(/:path/g, e.value.filePath),
      { url: n, text: t };
  });
}
function Gt() {
  const { page: o, theme: e, frontmatter: t } = P();
  return y(() => {
    var g, L, b, V, T, A, B, S;
    const s = we(e.value.sidebar, o.value.relativePath),
      n = kt(s),
      i = Ut(n, (j) => j.link.replace(/[?#].*$/, "")),
      u = i.findIndex((j) => K(o.value.relativePath, j.link)),
      f = ((g = e.value.docFooter) == null ? void 0 : g.prev) === !1 &&
          !t.value.prev || t.value.prev === !1,
      p = ((L = e.value.docFooter) == null ? void 0 : L.next) === !1 &&
          !t.value.next || t.value.next === !1;
    return {
      prev: f ? void 0 : {
        text: (typeof t.value.prev == "string"
          ? t.value.prev
          : typeof t.value.prev == "object"
          ? t.value.prev.text
          : void 0) ??
          ((b = i[u - 1]) == null ? void 0 : b.docFooterText) ??
          ((V = i[u - 1]) == null ? void 0 : V.text),
        link: (typeof t.value.prev == "object" ? t.value.prev.link : void 0) ??
          ((T = i[u - 1]) == null ? void 0 : T.link),
      },
      next: p ? void 0 : {
        text: (typeof t.value.next == "string"
          ? t.value.next
          : typeof t.value.next == "object"
          ? t.value.next.text
          : void 0) ??
          ((A = i[u + 1]) == null ? void 0 : A.docFooterText) ??
          ((B = i[u + 1]) == null ? void 0 : B.text),
        link: (typeof t.value.next == "object" ? t.value.next.link : void 0) ??
          ((S = i[u + 1]) == null ? void 0 : S.link),
      },
    };
  });
}
function Ut(o, e) {
  const t = new Set();
  return o.filter((s) => {
    const n = e(s);
    return t.has(n) ? !1 : t.add(n);
  });
}
const D = _({
    __name: "VPLink",
    props: {
      tag: {},
      href: {},
      noIcon: { type: Boolean },
      target: {},
      rel: {},
    },
    setup(o) {
      const e = o,
        t = y(() => e.tag ?? (e.href ? "a" : "span")),
        s = y(() => e.href && Ve.test(e.href) || e.target === "_blank");
      return (n, i) => (a(),
        k(
          F(t.value),
          {
            class: N(["VPLink", {
              link: n.href,
              "vp-external-link-icon": s.value,
              "no-icon": n.noIcon,
            }]),
            href: n.href ? r(_e)(n.href) : void 0,
            target: n.target ?? (s.value ? "_blank" : void 0),
            rel: n.rel ?? (s.value ? "noreferrer" : void 0),
          },
          { default: d(() => [l(n.$slots, "default")]), _: 3 },
          8,
          ["class", "href", "target", "rel"],
        ));
    },
  }),
  jt = { class: "VPLastUpdated" },
  zt = ["datetime"],
  qt = _({
    __name: "VPDocFooterLastUpdated",
    setup(o) {
      const { theme: e, page: t, lang: s } = P(),
        n = y(() => new Date(t.value.lastUpdated)),
        i = y(() => n.value.toISOString()),
        u = w("");
      return R(() => {
        Z(() => {
          var f, p, g;
          u.value = new Intl.DateTimeFormat(
            (p = (f = e.value.lastUpdated) == null
                  ? void 0
                  : f.formatOptions) != null && p.forceLocale
              ? s.value
              : void 0,
            ((g = e.value.lastUpdated) == null ? void 0 : g.formatOptions) ??
              { dateStyle: "short", timeStyle: "short" },
          ).format(n.value);
        });
      }),
        (f, p) => {
          var g;
          return a(),
            c("p", jt, [
              O(
                I(
                  ((g = r(e).lastUpdated) == null ? void 0 : g.text) ||
                    r(e).lastUpdatedText || "Last updated",
                ) + ": ",
                1,
              ),
              v("time", { datetime: i.value }, I(u.value), 9, zt),
            ]);
        };
    },
  }),
  Kt = $(qt, [["__scopeId", "data-v-1bb0c8a8"]]),
  Ae = (o) => (C("data-v-1bcd8184"), o = o(), H(), o),
  Rt = { key: 0, class: "VPDocFooter" },
  Wt = { key: 0, class: "edit-info" },
  Jt = { key: 0, class: "edit-link" },
  Xt = Ae(() =>
    v("span", { class: "vpi-square-pen edit-link-icon" }, null, -1)
  ),
  Yt = { key: 1, class: "last-updated" },
  Qt = {
    key: 1,
    class: "prev-next",
    "aria-labelledby": "doc-footer-aria-label",
  },
  Zt = Ae(() =>
    v(
      "span",
      { class: "visually-hidden", id: "doc-footer-aria-label" },
      "Pager",
      -1,
    )
  ),
  xt = { class: "pager" },
  eo = ["innerHTML"],
  to = ["innerHTML"],
  oo = { class: "pager" },
  no = ["innerHTML"],
  so = ["innerHTML"],
  ao = _({
    __name: "VPDocFooter",
    setup(o) {
      const { theme: e, page: t, frontmatter: s } = P(),
        n = Ot(),
        i = Gt(),
        u = y(() => e.value.editLink && s.value.editLink !== !1),
        f = y(() => t.value.lastUpdated),
        p = y(() => u.value || f.value || i.value.prev || i.value.next);
      return (g, L) => {
        var b, V, T, A;
        return p.value
          ? (a(),
            c("footer", Rt, [
              l(g.$slots, "doc-footer-before", {}, void 0, !0),
              u.value || f.value
                ? (a(),
                  c("div", Wt, [
                    u.value
                      ? (a(),
                        c("div", Jt, [
                          m(
                            D,
                            {
                              class: "edit-link-button",
                              href: r(n).url,
                              "no-icon": !0,
                            },
                            {
                              default: d(() => [Xt, O(" " + I(r(n).text), 1)]),
                              _: 1,
                            },
                            8,
                            ["href"],
                          ),
                        ]))
                      : h("", !0),
                    f.value ? (a(), c("div", Yt, [m(Kt)])) : h("", !0),
                  ]))
                : h("", !0),
              (b = r(i).prev) != null && b.link ||
                (V = r(i).next) != null && V.link
                ? (a(),
                  c("nav", Qt, [
                    Zt,
                    v("div", xt, [
                      (T = r(i).prev) != null && T.link
                        ? (a(),
                          k(
                            D,
                            {
                              key: 0,
                              class: "pager-link prev",
                              href: r(i).prev.link,
                            },
                            {
                              default: d(() => {
                                var B;
                                return [
                                  v(
                                    "span",
                                    {
                                      class: "desc",
                                      innerHTML: ((B = r(e).docFooter) == null
                                        ? void 0
                                        : B.prev) || "Previous page",
                                    },
                                    null,
                                    8,
                                    eo,
                                  ),
                                  v(
                                    "span",
                                    {
                                      class: "title",
                                      innerHTML: r(i).prev.text,
                                    },
                                    null,
                                    8,
                                    to,
                                  ),
                                ];
                              }),
                              _: 1,
                            },
                            8,
                            ["href"],
                          ))
                        : h("", !0),
                    ]),
                    v("div", oo, [
                      (A = r(i).next) != null && A.link
                        ? (a(),
                          k(
                            D,
                            {
                              key: 0,
                              class: "pager-link next",
                              href: r(i).next.link,
                            },
                            {
                              default: d(() => {
                                var B;
                                return [
                                  v(
                                    "span",
                                    {
                                      class: "desc",
                                      innerHTML: ((B = r(e).docFooter) == null
                                        ? void 0
                                        : B.next) || "Next page",
                                    },
                                    null,
                                    8,
                                    no,
                                  ),
                                  v(
                                    "span",
                                    {
                                      class: "title",
                                      innerHTML: r(i).next.text,
                                    },
                                    null,
                                    8,
                                    so,
                                  ),
                                ];
                              }),
                              _: 1,
                            },
                            8,
                            ["href"],
                          ))
                        : h("", !0),
                    ]),
                  ]))
                : h("", !0),
            ]))
          : h("", !0);
      };
    },
  }),
  ro = $(ao, [["__scopeId", "data-v-1bcd8184"]]),
  io = (o) => (C("data-v-e6f2a212"), o = o(), H(), o),
  lo = { class: "container" },
  co = io(() => v("div", { class: "aside-curtain" }, null, -1)),
  uo = { class: "aside-container" },
  vo = { class: "aside-content" },
  po = { class: "content" },
  fo = { class: "content-container" },
  ho = { class: "main" },
  _o = _({
    __name: "VPDoc",
    setup(o) {
      const { theme: e } = P(),
        t = ee(),
        { hasSidebar: s, hasAside: n, leftAside: i } = U(),
        u = y(() => t.path.replace(/[./]+/g, "_").replace(/_html$/, ""));
      return (f, p) => {
        const g = W("Content");
        return a(),
          c("div", {
            class: N(["VPDoc", { "has-sidebar": r(s), "has-aside": r(n) }]),
          }, [
            l(f.$slots, "doc-top", {}, void 0, !0),
            v("div", lo, [
              r(n)
                ? (a(),
                  c("div", {
                    key: 0,
                    class: N(["aside", { "left-aside": r(i) }]),
                  }, [
                    co,
                    v("div", uo, [v("div", vo, [m(Dt, null, {
                      "aside-top": d(
                        () => [l(f.$slots, "aside-top", {}, void 0, !0)],
                      ),
                      "aside-bottom": d(
                        () => [l(f.$slots, "aside-bottom", {}, void 0, !0)],
                      ),
                      "aside-outline-before": d(
                        () => [
                          l(f.$slots, "aside-outline-before", {}, void 0, !0),
                        ],
                      ),
                      "aside-outline-after": d(
                        () => [
                          l(f.$slots, "aside-outline-after", {}, void 0, !0),
                        ],
                      ),
                      "aside-ads-before": d(
                        () => [l(f.$slots, "aside-ads-before", {}, void 0, !0)],
                      ),
                      "aside-ads-after": d(
                        () => [l(f.$slots, "aside-ads-after", {}, void 0, !0)],
                      ),
                      _: 3,
                    })])]),
                  ], 2))
                : h("", !0),
              v("div", po, [
                v("div", fo, [
                  l(f.$slots, "doc-before", {}, void 0, !0),
                  v("main", ho, [
                    m(
                      g,
                      {
                        class: N(["vp-doc", [
                          u.value,
                          r(e).externalLinkIcon && "external-link-icon-enabled",
                        ]]),
                      },
                      null,
                      8,
                      ["class"],
                    ),
                  ]),
                  m(ro, null, {
                    "doc-footer-before": d(
                      () => [l(f.$slots, "doc-footer-before", {}, void 0, !0)],
                    ),
                    _: 3,
                  }),
                  l(f.$slots, "doc-after", {}, void 0, !0),
                ]),
              ]),
            ]),
            l(f.$slots, "doc-bottom", {}, void 0, !0),
          ], 2);
      };
    },
  }),
  mo = $(_o, [["__scopeId", "data-v-e6f2a212"]]),
  ko = _({
    __name: "VPButton",
    props: {
      tag: {},
      size: { default: "medium" },
      theme: { default: "brand" },
      text: {},
      href: {},
      target: {},
      rel: {},
    },
    setup(o) {
      const e = o,
        t = y(() => e.href && Ve.test(e.href)),
        s = y(() => e.tag || e.href ? "a" : "button");
      return (n, i) => (a(),
        k(
          F(s.value),
          {
            class: N(["VPButton", [n.size, n.theme]]),
            href: n.href ? r(_e)(n.href) : void 0,
            target: e.target ?? (t.value ? "_blank" : void 0),
            rel: e.rel ?? (t.value ? "noreferrer" : void 0),
          },
          { default: d(() => [O(I(n.text), 1)]), _: 1 },
          8,
          ["class", "href", "target", "rel"],
        ));
    },
  }),
  bo = $(ko, [["__scopeId", "data-v-c9cf0e3c"]]),
  $o = ["src", "alt"],
  go = _({
    inheritAttrs: !1,
    __name: "VPImage",
    props: { image: {}, alt: {} },
    setup(o) {
      return (e, t) => {
        const s = W("VPImage", !0);
        return e.image
          ? (a(),
            c(M, { key: 0 }, [
              typeof e.image == "string" || "src" in e.image
                ? (a(),
                  c(
                    "img",
                    q(
                      { key: 0, class: "VPImage" },
                      typeof e.image == "string"
                        ? e.$attrs
                        : { ...e.image, ...e.$attrs },
                      {
                        src: r(pe)(
                          typeof e.image == "string" ? e.image : e.image.src,
                        ),
                        alt: e.alt ??
                          (typeof e.image == "string" ? "" : e.image.alt || ""),
                      },
                    ),
                    null,
                    16,
                    $o,
                  ))
                : (a(),
                  c(M, { key: 1 }, [
                    m(
                      s,
                      q({
                        class: "dark",
                        image: e.image.dark,
                        alt: e.image.alt,
                      }, e.$attrs),
                      null,
                      16,
                      ["image", "alt"],
                    ),
                    m(
                      s,
                      q({
                        class: "light",
                        image: e.image.light,
                        alt: e.image.alt,
                      }, e.$attrs),
                      null,
                      16,
                      ["image", "alt"],
                    ),
                  ], 64)),
            ], 64))
          : h("", !0);
      };
    },
  }),
  Q = $(go, [["__scopeId", "data-v-ab19afbb"]]),
  yo = (o) => (C("data-v-b10c5094"), o = o(), H(), o),
  Po = { class: "container" },
  Vo = { class: "main" },
  Lo = { key: 0, class: "name" },
  So = ["innerHTML"],
  To = ["innerHTML"],
  Io = ["innerHTML"],
  wo = { key: 0, class: "actions" },
  No = { key: 0, class: "image" },
  Mo = { class: "image-container" },
  Ao = yo(() => v("div", { class: "image-bg" }, null, -1)),
  Bo = _({
    __name: "VPHero",
    props: { name: {}, text: {}, tagline: {}, image: {}, actions: {} },
    setup(o) {
      const e = te("hero-image-slot-exists");
      return (
        t,
        s,
      ) => (a(),
        c("div", { class: N(["VPHero", { "has-image": t.image || r(e) }]) }, [
          v("div", Po, [
            v("div", Vo, [
              l(t.$slots, "home-hero-info-before", {}, void 0, !0),
              l(t.$slots, "home-hero-info", {}, () => [
                t.name
                  ? (a(),
                    c("h1", Lo, [
                      v(
                        "span",
                        { innerHTML: t.name, class: "clip" },
                        null,
                        8,
                        So,
                      ),
                    ]))
                  : h("", !0),
                t.text
                  ? (a(),
                    c(
                      "p",
                      { key: 1, innerHTML: t.text, class: "text" },
                      null,
                      8,
                      To,
                    ))
                  : h("", !0),
                t.tagline
                  ? (a(),
                    c(
                      "p",
                      { key: 2, innerHTML: t.tagline, class: "tagline" },
                      null,
                      8,
                      Io,
                    ))
                  : h("", !0),
              ], !0),
              l(t.$slots, "home-hero-info-after", {}, void 0, !0),
              t.actions
                ? (a(),
                  c("div", wo, [
                    (a(!0),
                      c(
                        M,
                        null,
                        E(
                          t.actions,
                          (
                            n,
                          ) => (a(),
                            c("div", { key: n.link, class: "action" }, [
                              m(
                                bo,
                                {
                                  tag: "a",
                                  size: "medium",
                                  theme: n.theme,
                                  text: n.text,
                                  href: n.link,
                                  target: n.target,
                                  rel: n.rel,
                                },
                                null,
                                8,
                                ["theme", "text", "href", "target", "rel"],
                              ),
                            ])),
                        ),
                        128,
                      )),
                  ]))
                : h("", !0),
              l(t.$slots, "home-hero-actions-after", {}, void 0, !0),
            ]),
            t.image || r(e)
              ? (a(),
                c("div", No, [
                  v("div", Mo, [
                    Ao,
                    l(t.$slots, "home-hero-image", {}, () => [
                      t.image
                        ? (a(),
                          k(
                            Q,
                            { key: 0, class: "image-src", image: t.image },
                            null,
                            8,
                            ["image"],
                          ))
                        : h("", !0),
                    ], !0),
                  ]),
                ]))
              : h("", !0),
          ]),
        ], 2));
    },
  }),
  Co = $(Bo, [["__scopeId", "data-v-b10c5094"]]),
  Ho = _({
    __name: "VPHomeHero",
    setup(o) {
      const { frontmatter: e } = P();
      return (t, s) =>
        r(e).hero
          ? (a(),
            k(
              Co,
              {
                key: 0,
                class: "VPHomeHero",
                name: r(e).hero.name,
                text: r(e).hero.text,
                tagline: r(e).hero.tagline,
                image: r(e).hero.image,
                actions: r(e).hero.actions,
              },
              {
                "home-hero-info-before": d(
                  () => [l(t.$slots, "home-hero-info-before")],
                ),
                "home-hero-info": d(() => [l(t.$slots, "home-hero-info")]),
                "home-hero-info-after": d(
                  () => [l(t.$slots, "home-hero-info-after")],
                ),
                "home-hero-actions-after": d(
                  () => [l(t.$slots, "home-hero-actions-after")],
                ),
                "home-hero-image": d(() => [l(t.$slots, "home-hero-image")]),
                _: 3,
              },
              8,
              ["name", "text", "tagline", "image", "actions"],
            ))
          : h("", !0);
    },
  }),
  Eo = (o) => (C("data-v-bd37d1a2"), o = o(), H(), o),
  Fo = { class: "box" },
  Do = { key: 0, class: "icon" },
  Oo = ["innerHTML"],
  Go = ["innerHTML"],
  Uo = ["innerHTML"],
  jo = { key: 4, class: "link-text" },
  zo = { class: "link-text-value" },
  qo = Eo(() =>
    v("span", { class: "vpi-arrow-right link-text-icon" }, null, -1)
  ),
  Ko = _({
    __name: "VPFeature",
    props: {
      icon: {},
      title: {},
      details: {},
      link: {},
      linkText: {},
      rel: {},
      target: {},
    },
    setup(o) {
      return (e, t) => (a(),
        k(
          D,
          {
            class: "VPFeature",
            href: e.link,
            rel: e.rel,
            target: e.target,
            "no-icon": !0,
            tag: e.link ? "a" : "div",
          },
          {
            default: d(
              () => [v("article", Fo, [
                typeof e.icon == "object" && e.icon.wrap
                  ? (a(),
                    c("div", Do, [
                      m(
                        Q,
                        {
                          image: e.icon,
                          alt: e.icon.alt,
                          height: e.icon.height || 48,
                          width: e.icon.width || 48,
                        },
                        null,
                        8,
                        ["image", "alt", "height", "width"],
                      ),
                    ]))
                  : typeof e.icon == "object"
                  ? (a(),
                    k(
                      Q,
                      {
                        key: 1,
                        image: e.icon,
                        alt: e.icon.alt,
                        height: e.icon.height || 48,
                        width: e.icon.width || 48,
                      },
                      null,
                      8,
                      ["image", "alt", "height", "width"],
                    ))
                  : e.icon
                  ? (a(),
                    c(
                      "div",
                      { key: 2, class: "icon", innerHTML: e.icon },
                      null,
                      8,
                      Oo,
                    ))
                  : h("", !0),
                v("h2", { class: "title", innerHTML: e.title }, null, 8, Go),
                e.details
                  ? (a(),
                    c(
                      "p",
                      { key: 3, class: "details", innerHTML: e.details },
                      null,
                      8,
                      Uo,
                    ))
                  : h("", !0),
                e.linkText
                  ? (a(),
                    c("div", jo, [v("p", zo, [O(I(e.linkText) + " ", 1), qo])]))
                  : h("", !0),
              ])],
            ),
            _: 1,
          },
          8,
          ["href", "rel", "target", "tag"],
        ));
    },
  }),
  Ro = $(Ko, [["__scopeId", "data-v-bd37d1a2"]]),
  Wo = { key: 0, class: "VPFeatures" },
  Jo = { class: "container" },
  Xo = { class: "items" },
  Yo = _({
    __name: "VPFeatures",
    props: { features: {} },
    setup(o) {
      const e = o,
        t = y(() => {
          const s = e.features.length;
          if (s) {
            if (s === 2) return "grid-2";
            if (s === 3) return "grid-3";
            if (s % 3 === 0) return "grid-6";
            if (s > 3) return "grid-4";
          } else return;
        });
      return (s, n) =>
        s.features
          ? (a(),
            c("div", Wo, [v("div", Jo, [v("div", Xo, [
              (a(!0),
                c(
                  M,
                  null,
                  E(
                    s.features,
                    (
                      i,
                    ) => (a(),
                      c(
                        "div",
                        { key: i.title, class: N(["item", [t.value]]) },
                        [
                          m(
                            Ro,
                            {
                              icon: i.icon,
                              title: i.title,
                              details: i.details,
                              link: i.link,
                              "link-text": i.linkText,
                              rel: i.rel,
                              target: i.target,
                            },
                            null,
                            8,
                            [
                              "icon",
                              "title",
                              "details",
                              "link",
                              "link-text",
                              "rel",
                              "target",
                            ],
                          ),
                        ],
                        2,
                      )),
                  ),
                  128,
                )),
            ])])]))
          : h("", !0);
    },
  }),
  Qo = $(Yo, [["__scopeId", "data-v-b1eea84a"]]),
  Zo = _({
    __name: "VPHomeFeatures",
    setup(o) {
      const { frontmatter: e } = P();
      return (t, s) =>
        r(e).features
          ? (a(),
            k(
              Qo,
              { key: 0, class: "VPHomeFeatures", features: r(e).features },
              null,
              8,
              ["features"],
            ))
          : h("", !0);
    },
  }),
  xo = _({
    __name: "VPHomeContent",
    setup(o) {
      const { width: e } = Ke({ initialWidth: 0, includeScrollbar: !1 });
      return (
        t,
        s,
      ) => (a(),
        c(
          "div",
          {
            class: "vp-doc container",
            style: Le(
              r(e) ? { "--vp-offset": `calc(50% - ${r(e) / 2}px)` } : {},
            ),
          },
          [l(t.$slots, "default", {}, void 0, !0)],
          4,
        ));
    },
  }),
  en = $(xo, [["__scopeId", "data-v-c141a4bd"]]),
  tn = { class: "VPHome" },
  on = _({
    __name: "VPHome",
    setup(o) {
      const { frontmatter: e } = P();
      return (t, s) => {
        const n = W("Content");
        return a(),
          c("div", tn, [
            l(t.$slots, "home-hero-before", {}, void 0, !0),
            m(Ho, null, {
              "home-hero-info-before": d(
                () => [l(t.$slots, "home-hero-info-before", {}, void 0, !0)],
              ),
              "home-hero-info": d(
                () => [l(t.$slots, "home-hero-info", {}, void 0, !0)],
              ),
              "home-hero-info-after": d(
                () => [l(t.$slots, "home-hero-info-after", {}, void 0, !0)],
              ),
              "home-hero-actions-after": d(
                () => [l(t.$slots, "home-hero-actions-after", {}, void 0, !0)],
              ),
              "home-hero-image": d(
                () => [l(t.$slots, "home-hero-image", {}, void 0, !0)],
              ),
              _: 3,
            }),
            l(t.$slots, "home-hero-after", {}, void 0, !0),
            l(t.$slots, "home-features-before", {}, void 0, !0),
            m(Zo),
            l(t.$slots, "home-features-after", {}, void 0, !0),
            r(e).markdownStyles !== !1
              ? (a(), k(en, { key: 0 }, { default: d(() => [m(n)]), _: 1 }))
              : (a(), k(n, { key: 1 })),
          ]);
      };
    },
  }),
  nn = $(on, [["__scopeId", "data-v-07b1ad08"]]),
  sn = {},
  an = { class: "VPPage" };
function rn(o, e) {
  const t = W("Content");
  return a(),
    c("div", an, [l(o.$slots, "page-top"), m(t), l(o.$slots, "page-bottom")]);
}
const ln = $(sn, [["render", rn]]),
  cn = _({
    __name: "VPContent",
    setup(o) {
      const { page: e, frontmatter: t } = P(), { hasSidebar: s } = U();
      return (n, i) => (a(),
        c("div", {
          class: N(["VPContent", {
            "has-sidebar": r(s),
            "is-home": r(t).layout === "home",
          }]),
          id: "VPContent",
        }, [
          r(e).isNotFound
            ? l(n.$slots, "not-found", { key: 0 }, () => [m(_t)], !0)
            : r(t).layout === "page"
            ? (a(),
              k(ln, { key: 1 }, {
                "page-top": d(() => [l(n.$slots, "page-top", {}, void 0, !0)]),
                "page-bottom": d(
                  () => [l(n.$slots, "page-bottom", {}, void 0, !0)],
                ),
                _: 3,
              }))
            : r(t).layout === "home"
            ? (a(),
              k(nn, { key: 2 }, {
                "home-hero-before": d(
                  () => [l(n.$slots, "home-hero-before", {}, void 0, !0)],
                ),
                "home-hero-info-before": d(
                  () => [l(n.$slots, "home-hero-info-before", {}, void 0, !0)],
                ),
                "home-hero-info": d(
                  () => [l(n.$slots, "home-hero-info", {}, void 0, !0)],
                ),
                "home-hero-info-after": d(
                  () => [l(n.$slots, "home-hero-info-after", {}, void 0, !0)],
                ),
                "home-hero-actions-after": d(
                  () => [
                    l(n.$slots, "home-hero-actions-after", {}, void 0, !0),
                  ],
                ),
                "home-hero-image": d(
                  () => [l(n.$slots, "home-hero-image", {}, void 0, !0)],
                ),
                "home-hero-after": d(
                  () => [l(n.$slots, "home-hero-after", {}, void 0, !0)],
                ),
                "home-features-before": d(
                  () => [l(n.$slots, "home-features-before", {}, void 0, !0)],
                ),
                "home-features-after": d(
                  () => [l(n.$slots, "home-features-after", {}, void 0, !0)],
                ),
                _: 3,
              }))
            : r(t).layout && r(t).layout !== "doc"
            ? (a(), k(F(r(t).layout), { key: 3 }))
            : (a(),
              k(mo, { key: 4 }, {
                "doc-top": d(() => [l(n.$slots, "doc-top", {}, void 0, !0)]),
                "doc-bottom": d(
                  () => [l(n.$slots, "doc-bottom", {}, void 0, !0)],
                ),
                "doc-footer-before": d(
                  () => [l(n.$slots, "doc-footer-before", {}, void 0, !0)],
                ),
                "doc-before": d(
                  () => [l(n.$slots, "doc-before", {}, void 0, !0)],
                ),
                "doc-after": d(
                  () => [l(n.$slots, "doc-after", {}, void 0, !0)],
                ),
                "aside-top": d(
                  () => [l(n.$slots, "aside-top", {}, void 0, !0)],
                ),
                "aside-outline-before": d(
                  () => [l(n.$slots, "aside-outline-before", {}, void 0, !0)],
                ),
                "aside-outline-after": d(
                  () => [l(n.$slots, "aside-outline-after", {}, void 0, !0)],
                ),
                "aside-ads-before": d(
                  () => [l(n.$slots, "aside-ads-before", {}, void 0, !0)],
                ),
                "aside-ads-after": d(
                  () => [l(n.$slots, "aside-ads-after", {}, void 0, !0)],
                ),
                "aside-bottom": d(
                  () => [l(n.$slots, "aside-bottom", {}, void 0, !0)],
                ),
                _: 3,
              })),
        ], 2));
    },
  }),
  un = $(cn, [["__scopeId", "data-v-9a6c75ad"]]),
  dn = { class: "container" },
  vn = ["innerHTML"],
  pn = ["innerHTML"],
  fn = _({
    __name: "VPFooter",
    setup(o) {
      const { theme: e, frontmatter: t } = P(), { hasSidebar: s } = U();
      return (n, i) =>
        r(e).footer && r(t).footer !== !1
          ? (a(),
            c("footer", {
              key: 0,
              class: N(["VPFooter", { "has-sidebar": r(s) }]),
            }, [v("div", dn, [
              r(e).footer.message
                ? (a(),
                  c(
                    "p",
                    {
                      key: 0,
                      class: "message",
                      innerHTML: r(e).footer.message,
                    },
                    null,
                    8,
                    vn,
                  ))
                : h("", !0),
              r(e).footer.copyright
                ? (a(),
                  c(
                    "p",
                    {
                      key: 1,
                      class: "copyright",
                      innerHTML: r(e).footer.copyright,
                    },
                    null,
                    8,
                    pn,
                  ))
                : h("", !0),
            ])], 2))
          : h("", !0);
    },
  }),
  hn = $(fn, [["__scopeId", "data-v-566314d4"]]);
function _n() {
  const { theme: o, frontmatter: e } = P(),
    t = Pe([]),
    s = y(() => t.value.length > 0);
  return x(() => {
    t.value = me(e.value.outline ?? o.value.outline);
  }),
    { headers: t, hasLocalNav: s };
}
const mn = (o) => (C("data-v-883964e0"), o = o(), H(), o),
  kn = { class: "menu-text" },
  bn = mn(() => v("span", { class: "vpi-chevron-right icon" }, null, -1)),
  $n = { class: "header" },
  gn = { class: "outline" },
  yn = _({
    __name: "VPLocalNavOutlineDropdown",
    props: { headers: {}, navHeight: {} },
    setup(o) {
      const e = o, { theme: t } = P(), s = w(!1), n = w(0), i = w(), u = w();
      function f(b) {
        var V;
        (V = i.value) != null && V.contains(b.target) || (s.value = !1);
      }
      G(s, (b) => {
        if (b) {
          document.addEventListener("click", f);
          return;
        }
        document.removeEventListener("click", f);
      }),
        le("Escape", () => {
          s.value = !1;
        }),
        x(() => {
          s.value = !1;
        });
      function p() {
        s.value = !s.value,
          n.value = window.innerHeight +
            Math.min(window.scrollY - e.navHeight, 0);
      }
      function g(b) {
        b.target.classList.contains("outline-link") &&
          (u.value && (u.value.style.transition = "none"),
            Re(() => {
              s.value = !1;
            }));
      }
      function L() {
        s.value = !1, window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
      return (b, V) => (a(),
        c("div", {
          class: "VPLocalNavOutlineDropdown",
          style: Le({ "--vp-vh": n.value + "px" }),
          ref_key: "main",
          ref: i,
        }, [
          b.headers.length > 0
            ? (a(),
              c("button", { key: 0, onClick: p, class: N({ open: s.value }) }, [
                v("span", kn, I(r(Ne)(r(t))), 1),
                bn,
              ], 2))
            : (a(),
              c(
                "button",
                { key: 1, onClick: L },
                I(r(t).returnToTopLabel || "Return to top"),
                1,
              )),
          m(ve, { name: "flyout" }, {
            default: d(() => [
              s.value
                ? (a(),
                  c("div", {
                    key: 0,
                    ref_key: "items",
                    ref: u,
                    class: "items",
                    onClick: g,
                  }, [
                    v("div", $n, [
                      v(
                        "a",
                        { class: "top-link", href: "#", onClick: L },
                        I(r(t).returnToTopLabel || "Return to top"),
                        1,
                      ),
                    ]),
                    v("div", gn, [
                      m(Me, { headers: b.headers }, null, 8, ["headers"]),
                    ]),
                  ], 512))
                : h("", !0),
            ]),
            _: 1,
          }),
        ], 4));
    },
  }),
  Pn = $(yn, [["__scopeId", "data-v-883964e0"]]),
  Vn = (o) => (C("data-v-2488c25a"), o = o(), H(), o),
  Ln = { class: "container" },
  Sn = ["aria-expanded"],
  Tn = Vn(() => v("span", { class: "vpi-align-left menu-icon" }, null, -1)),
  In = { class: "menu-text" },
  wn = _({
    __name: "VPLocalNav",
    props: { open: { type: Boolean } },
    emits: ["open-menu"],
    setup(o) {
      const { theme: e, frontmatter: t } = P(),
        { hasSidebar: s } = U(),
        { headers: n } = _n(),
        { y: i } = Se(),
        u = w(0);
      R(() => {
        u.value = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--vp-nav-height",
          ),
        );
      }),
        x(() => {
          n.value = me(t.value.outline ?? e.value.outline);
        });
      const f = y(() => n.value.length === 0),
        p = y(() => f.value && !s.value),
        g = y(() => ({
          VPLocalNav: !0,
          "has-sidebar": s.value,
          empty: f.value,
          fixed: p.value,
        }));
      return (L, b) =>
        r(t).layout !== "home" && (!p.value || r(i) >= u.value)
          ? (a(),
            c("div", { key: 0, class: N(g.value) }, [v("div", Ln, [
              r(s)
                ? (a(),
                  c(
                    "button",
                    {
                      key: 0,
                      class: "menu",
                      "aria-expanded": L.open,
                      "aria-controls": "VPSidebarNav",
                      onClick: b[0] || (b[0] = (V) => L.$emit("open-menu")),
                    },
                    [Tn, v("span", In, I(r(e).sidebarMenuLabel || "Menu"), 1)],
                    8,
                    Sn,
                  ))
                : h("", !0),
              m(Pn, { headers: r(n), navHeight: u.value }, null, 8, [
                "headers",
                "navHeight",
              ]),
            ])], 2))
          : h("", !0);
    },
  }),
  Nn = $(wn, [["__scopeId", "data-v-2488c25a"]]);
function Mn() {
  const o = w(!1);
  function e() {
    o.value = !0, window.addEventListener("resize", n);
  }
  function t() {
    o.value = !1, window.removeEventListener("resize", n);
  }
  function s() {
    o.value ? t() : e();
  }
  function n() {
    window.outerWidth >= 768 && t();
  }
  const i = ee();
  return G(() => i.path, t),
    { isScreenOpen: o, openScreen: e, closeScreen: t, toggleScreen: s };
}
const An = {},
  Bn = { class: "VPSwitch", type: "button", role: "switch" },
  Cn = { class: "check" },
  Hn = { key: 0, class: "icon" };
function En(o, e) {
  return a(),
    c("button", Bn, [
      v("span", Cn, [
        o.$slots.default
          ? (a(), c("span", Hn, [l(o.$slots, "default", {}, void 0, !0)]))
          : h("", !0),
      ]),
    ]);
}
const Fn = $(An, [["render", En], ["__scopeId", "data-v-b4ccac88"]]),
  Be = (o) => (C("data-v-be9742d9"), o = o(), H(), o),
  Dn = Be(() => v("span", { class: "vpi-sun sun" }, null, -1)),
  On = Be(() => v("span", { class: "vpi-moon moon" }, null, -1)),
  Gn = _({
    __name: "VPSwitchAppearance",
    setup(o) {
      const { isDark: e, theme: t } = P(),
        s = te("toggle-appearance", () => {
          e.value = !e.value;
        }),
        n = w("");
      return he(() => {
        n.value = e.value
          ? t.value.lightModeSwitchTitle || "Switch to light theme"
          : t.value.darkModeSwitchTitle || "Switch to dark theme";
      }),
        (
          i,
          u,
        ) => (a(),
          k(
            Fn,
            {
              title: n.value,
              class: "VPSwitchAppearance",
              "aria-checked": r(e),
              onClick: r(s),
            },
            { default: d(() => [Dn, On]), _: 1 },
            8,
            ["title", "aria-checked", "onClick"],
          ));
    },
  }),
  ke = $(Gn, [["__scopeId", "data-v-be9742d9"]]),
  Un = { key: 0, class: "VPNavBarAppearance" },
  jn = _({
    __name: "VPNavBarAppearance",
    setup(o) {
      const { site: e } = P();
      return (t, s) =>
        r(e).appearance && r(e).appearance !== "force-dark" &&
          r(e).appearance !== "force-auto"
          ? (a(), c("div", Un, [m(ke)]))
          : h("", !0);
    },
  }),
  zn = $(jn, [["__scopeId", "data-v-3f90c1a5"]]),
  be = w();
let Ce = !1, re = 0;
function qn(o) {
  const e = w(!1);
  if (oe) {
    !Ce && Kn(), re++;
    const t = G(be, (s) => {
      var n, i, u;
      s === o.el.value || (n = o.el.value) != null && n.contains(s)
        ? (e.value = !0, (i = o.onFocus) == null || i.call(o))
        : (e.value = !1, (u = o.onBlur) == null || u.call(o));
    });
    fe(() => {
      t(), re--, re || Rn();
    });
  }
  return We(e);
}
function Kn() {
  document.addEventListener("focusin", He),
    Ce = !0,
    be.value = document.activeElement;
}
function Rn() {
  document.removeEventListener("focusin", He);
}
function He() {
  be.value = document.activeElement;
}
const Wn = { class: "VPMenuLink" },
  Jn = _({
    __name: "VPMenuLink",
    props: { item: {} },
    setup(o) {
      const { page: e } = P();
      return (t, s) => (a(),
        c("div", Wn, [
          m(
            D,
            {
              class: N({
                active: r(K)(
                  r(e).relativePath,
                  t.item.activeMatch || t.item.link,
                  !!t.item.activeMatch,
                ),
              }),
              href: t.item.link,
              target: t.item.target,
              rel: t.item.rel,
            },
            { default: d(() => [O(I(t.item.text), 1)]), _: 1 },
            8,
            ["class", "href", "target", "rel"],
          ),
        ]));
    },
  }),
  ne = $(Jn, [["__scopeId", "data-v-f51f088d"]]),
  Xn = { class: "VPMenuGroup" },
  Yn = { key: 0, class: "title" },
  Qn = _({
    __name: "VPMenuGroup",
    props: { text: {}, items: {} },
    setup(o) {
      return (e, t) => (a(),
        c("div", Xn, [
          e.text ? (a(), c("p", Yn, I(e.text), 1)) : h("", !0),
          (a(!0),
            c(
              M,
              null,
              E(e.items, (s) => (a(),
                c(M, null, [
                  "link" in s
                    ? (a(), k(ne, { key: 0, item: s }, null, 8, ["item"]))
                    : h("", !0),
                ], 64))),
              256,
            )),
        ]));
    },
  }),
  Zn = $(Qn, [["__scopeId", "data-v-a6b0397c"]]),
  xn = { class: "VPMenu" },
  es = { key: 0, class: "items" },
  ts = _({
    __name: "VPMenu",
    props: { items: {} },
    setup(o) {
      return (e, t) => (a(),
        c("div", xn, [
          e.items
            ? (a(),
              c("div", es, [
                (a(!0),
                  c(
                    M,
                    null,
                    E(e.items, (s) => (a(),
                      c(M, { key: JSON.stringify(s) }, [
                        "link" in s
                          ? (a(), k(ne, { key: 0, item: s }, null, 8, ["item"]))
                          : "component" in s
                          ? (a(),
                            k(
                              F(s.component),
                              q({ key: 1, ref_for: !0 }, s.props),
                              null,
                              16,
                            ))
                          : (a(),
                            k(
                              Zn,
                              { key: 2, text: s.text, items: s.items },
                              null,
                              8,
                              ["text", "items"],
                            )),
                      ], 64))),
                    128,
                  )),
              ]))
            : h("", !0),
          l(e.$slots, "default", {}, void 0, !0),
        ]));
    },
  }),
  os = $(ts, [["__scopeId", "data-v-20ed86d6"]]),
  ns = (o) => (C("data-v-af5898d3"), o = o(), H(), o),
  ss = ["aria-expanded", "aria-label"],
  as = { key: 0, class: "text" },
  rs = ["innerHTML"],
  is = ns(() => v("span", { class: "vpi-chevron-down text-icon" }, null, -1)),
  ls = { key: 1, class: "vpi-more-horizontal icon" },
  cs = { class: "menu" },
  us = _({
    __name: "VPFlyout",
    props: { icon: {}, button: {}, label: {}, items: {} },
    setup(o) {
      const e = w(!1), t = w();
      qn({ el: t, onBlur: s });
      function s() {
        e.value = !1;
      }
      return (n, i) => (a(),
        c("div", {
          class: "VPFlyout",
          ref_key: "el",
          ref: t,
          onMouseenter: i[1] || (i[1] = (u) => e.value = !0),
          onMouseleave: i[2] || (i[2] = (u) => e.value = !1),
        }, [
          v(
            "button",
            {
              type: "button",
              class: "button",
              "aria-haspopup": "true",
              "aria-expanded": e.value,
              "aria-label": n.label,
              onClick: i[0] || (i[0] = (u) => e.value = !e.value),
            },
            [
              n.button || n.icon
                ? (a(),
                  c("span", as, [
                    n.icon
                      ? (a(),
                        c(
                          "span",
                          { key: 0, class: N([n.icon, "option-icon"]) },
                          null,
                          2,
                        ))
                      : h("", !0),
                    n.button
                      ? (a(),
                        c("span", { key: 1, innerHTML: n.button }, null, 8, rs))
                      : h("", !0),
                    is,
                  ]))
                : (a(), c("span", ls)),
            ],
            8,
            ss,
          ),
          v("div", cs, [
            m(
              os,
              { items: n.items },
              {
                default: d(() => [l(n.$slots, "default", {}, void 0, !0)]),
                _: 3,
              },
              8,
              ["items"],
            ),
          ]),
        ], 544));
    },
  }),
  $e = $(us, [["__scopeId", "data-v-af5898d3"]]),
  ds = ["href", "aria-label", "innerHTML"],
  vs = _({
    __name: "VPSocialLink",
    props: { icon: {}, link: {}, ariaLabel: {} },
    setup(o) {
      const e = o,
        t = y(() =>
          typeof e.icon == "object"
            ? e.icon.svg
            : `<span class="vpi-social-${e.icon}" />`
        );
      return (s, n) => (a(),
        c(
          "a",
          {
            class: "VPSocialLink no-icon",
            href: s.link,
            "aria-label": s.ariaLabel ??
              (typeof s.icon == "string" ? s.icon : ""),
            target: "_blank",
            rel: "noopener",
            innerHTML: t.value,
          },
          null,
          8,
          ds,
        ));
    },
  }),
  ps = $(vs, [["__scopeId", "data-v-358b6670"]]),
  fs = { class: "VPSocialLinks" },
  hs = _({
    __name: "VPSocialLinks",
    props: { links: {} },
    setup(o) {
      return (e, t) => (a(),
        c("div", fs, [
          (a(!0),
            c(
              M,
              null,
              E(
                e.links,
                (
                  { link: s, icon: n, ariaLabel: i },
                ) => (a(),
                  k(ps, { key: s, icon: n, link: s, ariaLabel: i }, null, 8, [
                    "icon",
                    "link",
                    "ariaLabel",
                  ])),
              ),
              128,
            )),
        ]));
    },
  }),
  ge = $(hs, [["__scopeId", "data-v-e71e869c"]]),
  _s = { key: 0, class: "group translations" },
  ms = { class: "trans-title" },
  ks = { key: 1, class: "group" },
  bs = { class: "item appearance" },
  $s = { class: "label" },
  gs = { class: "appearance-action" },
  ys = { key: 2, class: "group" },
  Ps = { class: "item social-links" },
  Vs = _({
    __name: "VPNavBarExtra",
    setup(o) {
      const { site: e, theme: t } = P(),
        { localeLinks: s, currentLang: n } = X({ correspondingLink: !0 }),
        i = y(() =>
          s.value.length && n.value.label || e.value.appearance ||
          t.value.socialLinks
        );
      return (u, f) =>
        i.value
          ? (a(),
            k(
              $e,
              { key: 0, class: "VPNavBarExtra", label: "extra navigation" },
              {
                default: d(() => [
                  r(s).length && r(n).label
                    ? (a(),
                      c("div", _s, [
                        v("p", ms, I(r(n).label), 1),
                        (a(!0),
                          c(
                            M,
                            null,
                            E(
                              r(s),
                              (
                                p,
                              ) => (a(),
                                k(ne, { key: p.link, item: p }, null, 8, [
                                  "item",
                                ])),
                            ),
                            128,
                          )),
                      ]))
                    : h("", !0),
                  r(e).appearance && r(e).appearance !== "force-dark" &&
                    r(e).appearance !== "force-auto"
                    ? (a(),
                      c("div", ks, [
                        v("div", bs, [
                          v(
                            "p",
                            $s,
                            I(r(t).darkModeSwitchLabel || "Appearance"),
                            1,
                          ),
                          v("div", gs, [m(ke)]),
                        ]),
                      ]))
                    : h("", !0),
                  r(t).socialLinks
                    ? (a(),
                      c("div", ys, [
                        v("div", Ps, [
                          m(
                            ge,
                            {
                              class: "social-links-list",
                              links: r(t).socialLinks,
                            },
                            null,
                            8,
                            ["links"],
                          ),
                        ]),
                      ]))
                    : h("", !0),
                ]),
                _: 1,
              },
            ))
          : h("", !0);
    },
  }),
  Ls = $(Vs, [["__scopeId", "data-v-f953d92f"]]),
  Ss = (o) => (C("data-v-6bee1efd"), o = o(), H(), o),
  Ts = ["aria-expanded"],
  Is = Ss(() =>
    v("span", { class: "container" }, [
      v("span", { class: "top" }),
      v("span", { class: "middle" }),
      v("span", { class: "bottom" }),
    ], -1)
  ),
  ws = [Is],
  Ns = _({
    __name: "VPNavBarHamburger",
    props: { active: { type: Boolean } },
    emits: ["click"],
    setup(o) {
      return (e, t) => (a(),
        c(
          "button",
          {
            type: "button",
            class: N(["VPNavBarHamburger", { active: e.active }]),
            "aria-label": "mobile navigation",
            "aria-expanded": e.active,
            "aria-controls": "VPNavScreen",
            onClick: t[0] || (t[0] = (s) => e.$emit("click")),
          },
          ws,
          10,
          Ts,
        ));
    },
  }),
  Ms = $(Ns, [["__scopeId", "data-v-6bee1efd"]]),
  As = ["innerHTML"],
  Bs = _({
    __name: "VPNavBarMenuLink",
    props: { item: {} },
    setup(o) {
      const { page: e } = P();
      return (t, s) => (a(),
        k(
          D,
          {
            class: N({
              VPNavBarMenuLink: !0,
              active: r(K)(
                r(e).relativePath,
                t.item.activeMatch || t.item.link,
                !!t.item.activeMatch,
              ),
            }),
            href: t.item.link,
            noIcon: t.item.noIcon,
            target: t.item.target,
            rel: t.item.rel,
            tabindex: "0",
          },
          {
            default: d(
              () => [v("span", { innerHTML: t.item.text }, null, 8, As)],
            ),
            _: 1,
          },
          8,
          ["class", "href", "noIcon", "target", "rel"],
        ));
    },
  }),
  Cs = $(Bs, [["__scopeId", "data-v-08fbf4b6"]]),
  Hs = _({
    __name: "VPNavBarMenuGroup",
    props: { item: {} },
    setup(o) {
      const e = o,
        { page: t } = P(),
        s = (i) =>
          "component" in i
            ? !1
            : "link" in i
            ? K(t.value.relativePath, i.link, !!e.item.activeMatch)
            : i.items.some(s),
        n = y(() => s(e.item));
      return (i, u) => (a(),
        k(
          $e,
          {
            class: N({
              VPNavBarMenuGroup: !0,
              active: r(K)(
                r(t).relativePath,
                i.item.activeMatch,
                !!i.item.activeMatch,
              ) || n.value,
            }),
            button: i.item.text,
            items: i.item.items,
          },
          null,
          8,
          ["class", "button", "items"],
        ));
    },
  }),
  Es = (o) => (C("data-v-afb2845e"), o = o(), H(), o),
  Fs = {
    key: 0,
    "aria-labelledby": "main-nav-aria-label",
    class: "VPNavBarMenu",
  },
  Ds = Es(() =>
    v(
      "span",
      { id: "main-nav-aria-label", class: "visually-hidden" },
      " Main Navigation ",
      -1,
    )
  ),
  Os = _({
    __name: "VPNavBarMenu",
    setup(o) {
      const { theme: e } = P();
      return (t, s) =>
        r(e).nav
          ? (a(),
            c("nav", Fs, [
              Ds,
              (a(!0),
                c(
                  M,
                  null,
                  E(r(e).nav, (n) => (a(),
                    c(M, { key: JSON.stringify(n) }, [
                      "link" in n
                        ? (a(), k(Cs, { key: 0, item: n }, null, 8, ["item"]))
                        : "component" in n
                        ? (a(),
                          k(
                            F(n.component),
                            q({ key: 1, ref_for: !0 }, n.props),
                            null,
                            16,
                          ))
                        : (a(), k(Hs, { key: 2, item: n }, null, 8, ["item"])),
                    ], 64))),
                  128,
                )),
            ]))
          : h("", !0);
    },
  }),
  Gs = $(Os, [["__scopeId", "data-v-afb2845e"]]);
function Us(o) {
  const { localeIndex: e, theme: t } = P();
  function s(n) {
    var A, B, S;
    const i = n.split("."),
      u = (A = t.value.search) == null ? void 0 : A.options,
      f = u && typeof u == "object",
      p = f &&
          ((S = (B = u.locales) == null ? void 0 : B[e.value]) == null
            ? void 0
            : S.translations) || null,
      g = f && u.translations || null;
    let L = p, b = g, V = o;
    const T = i.pop();
    for (const j of i) {
      let z = null;
      const J = V == null ? void 0 : V[j];
      J && (z = V = J);
      const se = b == null ? void 0 : b[j];
      se && (z = b = se);
      const ae = L == null ? void 0 : L[j];
      ae && (z = L = ae), J || (V = z), se || (b = z), ae || (L = z);
    }
    return (L == null ? void 0 : L[T]) ?? (b == null ? void 0 : b[T]) ??
      (V == null ? void 0 : V[T]) ?? "";
  }
  return s;
}
const js = ["aria-label"],
  zs = { class: "DocSearch-Button-Container" },
  qs = v("span", { class: "vp-icon DocSearch-Search-Icon" }, null, -1),
  Ks = { class: "DocSearch-Button-Placeholder" },
  Rs = v("span", { class: "DocSearch-Button-Keys" }, [
    v("kbd", { class: "DocSearch-Button-Key" }),
    v("kbd", { class: "DocSearch-Button-Key" }, "K"),
  ], -1),
  ye = _({
    __name: "VPNavBarSearchButton",
    setup(o) {
      const t = Us({
        button: { buttonText: "Search", buttonAriaLabel: "Search" },
      });
      return (s, n) => (a(),
        c(
          "button",
          {
            type: "button",
            class: "DocSearch DocSearch-Button",
            "aria-label": r(t)("button.buttonAriaLabel"),
          },
          [
            v("span", zs, [qs, v("span", Ks, I(r(t)("button.buttonText")), 1)]),
            Rs,
          ],
          8,
          js,
        ));
    },
  }),
  Ws = { class: "VPNavBarSearch" },
  Js = { id: "local-search" },
  Xs = { key: 1, id: "docsearch" },
  Ys = _({
    __name: "VPNavBarSearch",
    setup(o) {
      const e = Je(() =>
          Xe(
            () => import("./VPLocalSearchBox.d3cqmPs-.js"),
            __vite__mapDeps([0, 1]),
          )
        ),
        t = () => null,
        { theme: s } = P(),
        n = w(!1),
        i = w(!1);
      R(() => {});
      function u() {
        n.value || (n.value = !0, setTimeout(f, 16));
      }
      function f() {
        const b = new Event("keydown");
        b.key = "k",
          b.metaKey = !0,
          window.dispatchEvent(b),
          setTimeout(() => {
            document.querySelector(".DocSearch-Modal") || f();
          }, 16);
      }
      function p(b) {
        const V = b.target, T = V.tagName;
        return V.isContentEditable || T === "INPUT" || T === "SELECT" ||
          T === "TEXTAREA";
      }
      const g = w(!1);
      le("k", (b) => {
        (b.ctrlKey || b.metaKey) && (b.preventDefault(), g.value = !0);
      }),
        le("/", (b) => {
          p(b) || (b.preventDefault(), g.value = !0);
        });
      const L = "local";
      return (b, V) => {
        var T;
        return a(),
          c("div", Ws, [
            r(L) === "local"
              ? (a(),
                c(M, { key: 0 }, [
                  g.value
                    ? (a(),
                      k(r(e), {
                        key: 0,
                        onClose: V[0] || (V[0] = (A) => g.value = !1),
                      }))
                    : h("", !0),
                  v("div", Js, [
                    m(ye, { onClick: V[1] || (V[1] = (A) => g.value = !0) }),
                  ]),
                ], 64))
              : r(L) === "algolia"
              ? (a(),
                c(M, { key: 1 }, [
                  n.value
                    ? (a(),
                      k(
                        r(t),
                        {
                          key: 0,
                          algolia:
                            ((T = r(s).search) == null ? void 0 : T.options) ??
                              r(s).algolia,
                          onVnodeBeforeMount: V[2] ||
                            (V[2] = (A) => i.value = !0),
                        },
                        null,
                        8,
                        ["algolia"],
                      ))
                    : h("", !0),
                  i.value
                    ? h("", !0)
                    : (a(), c("div", Xs, [m(ye, { onClick: u })])),
                ], 64))
              : h("", !0),
          ]);
      };
    },
  }),
  Qs = _({
    __name: "VPNavBarSocialLinks",
    setup(o) {
      const { theme: e } = P();
      return (t, s) =>
        r(e).socialLinks
          ? (a(),
            k(
              ge,
              { key: 0, class: "VPNavBarSocialLinks", links: r(e).socialLinks },
              null,
              8,
              ["links"],
            ))
          : h("", !0);
    },
  }),
  Zs = $(Qs, [["__scopeId", "data-v-ef6192dc"]]),
  xs = ["href", "rel", "target"],
  ea = { key: 1 },
  ta = { key: 2 },
  oa = _({
    __name: "VPNavBarTitle",
    setup(o) {
      const { site: e, theme: t } = P(),
        { hasSidebar: s } = U(),
        { currentLang: n } = X(),
        i = y(() => {
          var p;
          return typeof t.value.logoLink == "string"
            ? t.value.logoLink
            : (p = t.value.logoLink) == null
            ? void 0
            : p.link;
        }),
        u = y(() => {
          var p;
          return typeof t.value.logoLink == "string" ||
              (p = t.value.logoLink) == null
            ? void 0
            : p.rel;
        }),
        f = y(() => {
          var p;
          return typeof t.value.logoLink == "string" ||
              (p = t.value.logoLink) == null
            ? void 0
            : p.target;
        });
      return (
        p,
        g,
      ) => (a(),
        c("div", { class: N(["VPNavBarTitle", { "has-sidebar": r(s) }]) }, [
          v(
            "a",
            {
              class: "title",
              href: i.value ?? r(_e)(r(n).link),
              rel: u.value,
              target: f.value,
            },
            [
              l(p.$slots, "nav-bar-title-before", {}, void 0, !0),
              r(t).logo
                ? (a(),
                  k(Q, { key: 0, class: "logo", image: r(t).logo }, null, 8, [
                    "image",
                  ]))
                : h("", !0),
              r(t).siteTitle
                ? (a(), c("span", ea, I(r(t).siteTitle), 1))
                : r(t).siteTitle === void 0
                ? (a(), c("span", ta, I(r(e).title), 1))
                : h("", !0),
              l(p.$slots, "nav-bar-title-after", {}, void 0, !0),
            ],
            8,
            xs,
          ),
        ], 2));
    },
  }),
  na = $(oa, [["__scopeId", "data-v-0ad69264"]]),
  sa = { class: "items" },
  aa = { class: "title" },
  ra = _({
    __name: "VPNavBarTranslations",
    setup(o) {
      const { theme: e } = P(),
        { localeLinks: t, currentLang: s } = X({ correspondingLink: !0 });
      return (n, i) =>
        r(t).length && r(s).label
          ? (a(),
            k(
              $e,
              {
                key: 0,
                class: "VPNavBarTranslations",
                icon: "vpi-languages",
                label: r(e).langMenuLabel || "Change language",
              },
              {
                default: d(
                  () => [
                    v("div", sa, [
                      v("p", aa, I(r(s).label), 1),
                      (a(!0),
                        c(
                          M,
                          null,
                          E(
                            r(t),
                            (
                              u,
                            ) => (a(),
                              k(ne, { key: u.link, item: u }, null, 8, [
                                "item",
                              ])),
                          ),
                          128,
                        )),
                    ]),
                  ],
                ),
                _: 1,
              },
              8,
              ["label"],
            ))
          : h("", !0);
    },
  }),
  ia = $(ra, [["__scopeId", "data-v-acee064b"]]),
  la = (o) => (C("data-v-9fd4d1dd"), o = o(), H(), o),
  ca = { class: "wrapper" },
  ua = { class: "container" },
  da = { class: "title" },
  va = { class: "content" },
  pa = { class: "content-body" },
  fa = la(() =>
    v("div", { class: "divider" }, [v("div", { class: "divider-line" })], -1)
  ),
  ha = _({
    __name: "VPNavBar",
    props: { isScreenOpen: { type: Boolean } },
    emits: ["toggle-screen"],
    setup(o) {
      const e = o,
        { y: t } = Se(),
        { hasSidebar: s } = U(),
        { frontmatter: n } = P(),
        i = w({});
      return he(() => {
        i.value = {
          "has-sidebar": s.value,
          home: n.value.layout === "home",
          top: t.value === 0,
          "screen-open": e.isScreenOpen,
        };
      }),
        (u, f) => (a(),
          c("div", { class: N(["VPNavBar", i.value]) }, [
            v("div", ca, [v("div", ua, [
              v("div", da, [m(na, null, {
                "nav-bar-title-before": d(
                  () => [l(u.$slots, "nav-bar-title-before", {}, void 0, !0)],
                ),
                "nav-bar-title-after": d(
                  () => [l(u.$slots, "nav-bar-title-after", {}, void 0, !0)],
                ),
                _: 3,
              })]),
              v("div", va, [
                v("div", pa, [
                  l(u.$slots, "nav-bar-content-before", {}, void 0, !0),
                  m(Ys, { class: "search" }),
                  m(Gs, { class: "menu" }),
                  m(ia, { class: "translations" }),
                  m(zn, { class: "appearance" }),
                  m(Zs, { class: "social-links" }),
                  m(Ls, { class: "extra" }),
                  l(u.$slots, "nav-bar-content-after", {}, void 0, !0),
                  m(
                    Ms,
                    {
                      class: "hamburger",
                      active: u.isScreenOpen,
                      onClick: f[0] || (f[0] = (p) => u.$emit("toggle-screen")),
                    },
                    null,
                    8,
                    ["active"],
                  ),
                ]),
              ]),
            ])]),
            fa,
          ], 2));
    },
  }),
  _a = $(ha, [["__scopeId", "data-v-9fd4d1dd"]]),
  ma = { key: 0, class: "VPNavScreenAppearance" },
  ka = { class: "text" },
  ba = _({
    __name: "VPNavScreenAppearance",
    setup(o) {
      const { site: e, theme: t } = P();
      return (s, n) =>
        r(e).appearance && r(e).appearance !== "force-dark" &&
          r(e).appearance !== "force-auto"
          ? (a(),
            c("div", ma, [
              v("p", ka, I(r(t).darkModeSwitchLabel || "Appearance"), 1),
              m(ke),
            ]))
          : h("", !0);
    },
  }),
  $a = $(ba, [["__scopeId", "data-v-a3e2920d"]]),
  ga = _({
    __name: "VPNavScreenMenuLink",
    props: { item: {} },
    setup(o) {
      const e = te("close-screen");
      return (t, s) => (a(),
        k(
          D,
          {
            class: "VPNavScreenMenuLink",
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            onClick: r(e),
            innerHTML: t.item.text,
          },
          null,
          8,
          ["href", "target", "rel", "onClick", "innerHTML"],
        ));
    },
  }),
  ya = $(ga, [["__scopeId", "data-v-1a934d60"]]),
  Pa = _({
    __name: "VPNavScreenMenuGroupLink",
    props: { item: {} },
    setup(o) {
      const e = te("close-screen");
      return (t, s) => (a(),
        k(
          D,
          {
            class: "VPNavScreenMenuGroupLink",
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            onClick: r(e),
          },
          { default: d(() => [O(I(t.item.text), 1)]), _: 1 },
          8,
          ["href", "target", "rel", "onClick"],
        ));
    },
  }),
  Ee = $(Pa, [["__scopeId", "data-v-aea78dd1"]]),
  Va = { class: "VPNavScreenMenuGroupSection" },
  La = { key: 0, class: "title" },
  Sa = _({
    __name: "VPNavScreenMenuGroupSection",
    props: { text: {}, items: {} },
    setup(o) {
      return (
        e,
        t,
      ) => (a(),
        c("div", Va, [
          e.text ? (a(), c("p", La, I(e.text), 1)) : h("", !0),
          (a(!0),
            c(
              M,
              null,
              E(
                e.items,
                (
                  s,
                ) => (a(), k(Ee, { key: s.text, item: s }, null, 8, ["item"])),
              ),
              128,
            )),
        ]));
    },
  }),
  Ta = $(Sa, [["__scopeId", "data-v-f60dbfa7"]]),
  Ia = (o) => (C("data-v-d99bfeec"), o = o(), H(), o),
  wa = ["aria-controls", "aria-expanded"],
  Na = ["innerHTML"],
  Ma = Ia(() => v("span", { class: "vpi-plus button-icon" }, null, -1)),
  Aa = ["id"],
  Ba = { key: 0, class: "item" },
  Ca = { key: 1, class: "item" },
  Ha = { key: 2, class: "group" },
  Ea = _({
    __name: "VPNavScreenMenuGroup",
    props: { text: {}, items: {} },
    setup(o) {
      const e = o,
        t = w(!1),
        s = y(() => `NavScreenGroup-${e.text.replace(" ", "-").toLowerCase()}`);
      function n() {
        t.value = !t.value;
      }
      return (
        i,
        u,
      ) => (a(),
        c("div", { class: N(["VPNavScreenMenuGroup", { open: t.value }]) }, [
          v(
            "button",
            {
              class: "button",
              "aria-controls": s.value,
              "aria-expanded": t.value,
              onClick: n,
            },
            [
              v(
                "span",
                { class: "button-text", innerHTML: i.text },
                null,
                8,
                Na,
              ),
              Ma,
            ],
            8,
            wa,
          ),
          v(
            "div",
            { id: s.value, class: "items" },
            [
              (a(!0),
                c(
                  M,
                  null,
                  E(i.items, (f) => (a(),
                    c(M, { key: JSON.stringify(f) }, [
                      "link" in f
                        ? (a(),
                          c("div", Ba, [m(Ee, { item: f }, null, 8, ["item"])]))
                        : "component" in f
                        ? (a(),
                          c("div", Ca, [
                            (a(),
                              k(
                                F(f.component),
                                q({ ref_for: !0 }, f.props, {
                                  "screen-menu": "",
                                }),
                                null,
                                16,
                              )),
                          ]))
                        : (a(),
                          c("div", Ha, [
                            m(Ta, { text: f.text, items: f.items }, null, 8, [
                              "text",
                              "items",
                            ]),
                          ])),
                    ], 64))),
                  128,
                )),
            ],
            8,
            Aa,
          ),
        ], 2));
    },
  }),
  Fa = $(Ea, [["__scopeId", "data-v-d99bfeec"]]),
  Da = { key: 0, class: "VPNavScreenMenu" },
  Oa = _({
    __name: "VPNavScreenMenu",
    setup(o) {
      const { theme: e } = P();
      return (t, s) =>
        r(e).nav
          ? (a(),
            c("nav", Da, [
              (a(!0),
                c(
                  M,
                  null,
                  E(r(e).nav, (n) => (a(),
                    c(M, { key: JSON.stringify(n) }, [
                      "link" in n
                        ? (a(), k(ya, { key: 0, item: n }, null, 8, ["item"]))
                        : "component" in n
                        ? (a(),
                          k(
                            F(n.component),
                            q({ key: 1, ref_for: !0 }, n.props, {
                              "screen-menu": "",
                            }),
                            null,
                            16,
                          ))
                        : (a(),
                          k(
                            Fa,
                            { key: 2, text: n.text || "", items: n.items },
                            null,
                            8,
                            ["text", "items"],
                          )),
                    ], 64))),
                  128,
                )),
            ]))
          : h("", !0);
    },
  }),
  Ga = _({
    __name: "VPNavScreenSocialLinks",
    setup(o) {
      const { theme: e } = P();
      return (t, s) =>
        r(e).socialLinks
          ? (a(),
            k(
              ge,
              {
                key: 0,
                class: "VPNavScreenSocialLinks",
                links: r(e).socialLinks,
              },
              null,
              8,
              ["links"],
            ))
          : h("", !0);
    },
  }),
  Fe = (o) => (C("data-v-516e4bc3"), o = o(), H(), o),
  Ua = Fe(() => v("span", { class: "vpi-languages icon lang" }, null, -1)),
  ja = Fe(() =>
    v("span", { class: "vpi-chevron-down icon chevron" }, null, -1)
  ),
  za = { class: "list" },
  qa = _({
    __name: "VPNavScreenTranslations",
    setup(o) {
      const { localeLinks: e, currentLang: t } = X({ correspondingLink: !0 }),
        s = w(!1);
      function n() {
        s.value = !s.value;
      }
      return (i, u) =>
        r(e).length && r(t).label
          ? (a(),
            c("div", {
              key: 0,
              class: N(["VPNavScreenTranslations", { open: s.value }]),
            }, [
              v("button", { class: "title", onClick: n }, [
                Ua,
                O(" " + I(r(t).label) + " ", 1),
                ja,
              ]),
              v("ul", za, [
                (a(!0),
                  c(
                    M,
                    null,
                    E(
                      r(e),
                      (f) => (a(),
                        c("li", { key: f.link, class: "item" }, [
                          m(
                            D,
                            { class: "link", href: f.link },
                            { default: d(() => [O(I(f.text), 1)]), _: 2 },
                            1032,
                            ["href"],
                          ),
                        ])),
                    ),
                    128,
                  )),
              ]),
            ], 2))
          : h("", !0);
    },
  }),
  Ka = $(qa, [["__scopeId", "data-v-516e4bc3"]]),
  Ra = { class: "container" },
  Wa = _({
    __name: "VPNavScreen",
    props: { open: { type: Boolean } },
    setup(o) {
      const e = w(null), t = Te(oe ? document.body : null);
      return (s, n) => (a(),
        k(ve, {
          name: "fade",
          onEnter: n[0] || (n[0] = (i) => t.value = !0),
          onAfterLeave: n[1] || (n[1] = (i) => t.value = !1),
        }, {
          default: d(() => [
            s.open
              ? (a(),
                c("div", {
                  key: 0,
                  class: "VPNavScreen",
                  ref_key: "screen",
                  ref: e,
                  id: "VPNavScreen",
                }, [
                  v("div", Ra, [
                    l(s.$slots, "nav-screen-content-before", {}, void 0, !0),
                    m(Oa, { class: "menu" }),
                    m(Ka, { class: "translations" }),
                    m($a, { class: "appearance" }),
                    m(Ga, { class: "social-links" }),
                    l(s.$slots, "nav-screen-content-after", {}, void 0, !0),
                  ]),
                ], 512))
              : h("", !0),
          ]),
          _: 3,
        }));
    },
  }),
  Ja = $(Wa, [["__scopeId", "data-v-2dd6d0c7"]]),
  Xa = { key: 0, class: "VPNav" },
  Ya = _({
    __name: "VPNav",
    setup(o) {
      const { isScreenOpen: e, closeScreen: t, toggleScreen: s } = Mn(),
        { frontmatter: n } = P(),
        i = y(() => n.value.navbar !== !1);
      return Ie("close-screen", t),
        Z(() => {
          oe && document.documentElement.classList.toggle("hide-nav", !i.value);
        }),
        (u, f) =>
          i.value
            ? (a(),
              c("header", Xa, [
                m(
                  _a,
                  { "is-screen-open": r(e), onToggleScreen: r(s) },
                  {
                    "nav-bar-title-before": d(
                      () => [
                        l(u.$slots, "nav-bar-title-before", {}, void 0, !0),
                      ],
                    ),
                    "nav-bar-title-after": d(
                      () => [
                        l(u.$slots, "nav-bar-title-after", {}, void 0, !0),
                      ],
                    ),
                    "nav-bar-content-before": d(
                      () => [
                        l(u.$slots, "nav-bar-content-before", {}, void 0, !0),
                      ],
                    ),
                    "nav-bar-content-after": d(
                      () => [
                        l(u.$slots, "nav-bar-content-after", {}, void 0, !0),
                      ],
                    ),
                    _: 3,
                  },
                  8,
                  ["is-screen-open", "onToggleScreen"],
                ),
                m(
                  Ja,
                  { open: r(e) },
                  {
                    "nav-screen-content-before": d(
                      () => [
                        l(
                          u.$slots,
                          "nav-screen-content-before",
                          {},
                          void 0,
                          !0,
                        ),
                      ],
                    ),
                    "nav-screen-content-after": d(
                      () => [
                        l(u.$slots, "nav-screen-content-after", {}, void 0, !0),
                      ],
                    ),
                    _: 3,
                  },
                  8,
                  ["open"],
                ),
              ]))
            : h("", !0);
    },
  }),
  Qa = $(Ya, [["__scopeId", "data-v-7ad780c2"]]),
  De = (o) => (C("data-v-edd2eed8"), o = o(), H(), o),
  Za = ["role", "tabindex"],
  xa = De(() => v("div", { class: "indicator" }, null, -1)),
  er = De(() => v("span", { class: "vpi-chevron-right caret-icon" }, null, -1)),
  tr = [er],
  or = { key: 1, class: "items" },
  nr = _({
    __name: "VPSidebarItem",
    props: { item: {}, depth: {} },
    setup(o) {
      const e = o,
        {
          collapsed: t,
          collapsible: s,
          isLink: n,
          isActiveLink: i,
          hasActiveLink: u,
          hasChildren: f,
          toggle: p,
        } = $t(y(() => e.item)),
        g = y(() => f.value ? "section" : "div"),
        L = y(() => n.value ? "a" : "div"),
        b = y(() =>
          f.value ? e.depth + 2 === 7 ? "p" : `h${e.depth + 2}` : "p"
        ),
        V = y(() => n.value ? void 0 : "button"),
        T = y(
          () => [
            [`level-${e.depth}`],
            { collapsible: s.value },
            { collapsed: t.value },
            { "is-link": n.value },
            { "is-active": i.value },
            { "has-active": u.value },
          ],
        );
      function A(S) {
        "key" in S && S.key !== "Enter" || !e.item.link && p();
      }
      function B() {
        e.item.link && p();
      }
      return (S, j) => {
        const z = W("VPSidebarItem", !0);
        return a(),
          k(
            F(g.value),
            { class: N(["VPSidebarItem", T.value]) },
            {
              default: d(() => [
                S.item.text
                  ? (a(),
                    c(
                      "div",
                      q(
                        { key: 0, class: "item", role: V.value },
                        Qe(S.item.items ? { click: A, keydown: A } : {}, !0),
                        { tabindex: S.item.items && 0 },
                      ),
                      [
                        xa,
                        S.item.link
                          ? (a(),
                            k(
                              D,
                              {
                                key: 0,
                                tag: L.value,
                                class: "link",
                                href: S.item.link,
                                rel: S.item.rel,
                                target: S.item.target,
                              },
                              {
                                default: d(
                                  () => [
                                    (a(),
                                      k(
                                        F(b.value),
                                        {
                                          class: "text",
                                          innerHTML: S.item.text,
                                        },
                                        null,
                                        8,
                                        ["innerHTML"],
                                      )),
                                  ],
                                ),
                                _: 1,
                              },
                              8,
                              ["tag", "href", "rel", "target"],
                            ))
                          : (a(),
                            k(
                              F(b.value),
                              { key: 1, class: "text", innerHTML: S.item.text },
                              null,
                              8,
                              ["innerHTML"],
                            )),
                        S.item.collapsed != null && S.item.items &&
                          S.item.items.length
                          ? (a(),
                            c(
                              "div",
                              {
                                key: 2,
                                class: "caret",
                                role: "button",
                                "aria-label": "toggle section",
                                onClick: B,
                                onKeydown: Ye(B, ["enter"]),
                                tabindex: "0",
                              },
                              tr,
                              32,
                            ))
                          : h("", !0),
                      ],
                      16,
                      Za,
                    ))
                  : h("", !0),
                S.item.items && S.item.items.length
                  ? (a(),
                    c("div", or, [
                      S.depth < 5
                        ? (a(!0),
                          c(
                            M,
                            { key: 0 },
                            E(
                              S.item.items,
                              (J) => (a(),
                                k(
                                  z,
                                  { key: J.text, item: J, depth: S.depth + 1 },
                                  null,
                                  8,
                                  ["item", "depth"],
                                )),
                            ),
                            128,
                          ))
                        : h("", !0),
                    ]))
                  : h("", !0),
              ]),
              _: 1,
            },
            8,
            ["class"],
          );
      };
    },
  }),
  sr = $(nr, [["__scopeId", "data-v-edd2eed8"]]),
  ar = _({
    __name: "VPSidebarGroup",
    props: { items: {} },
    setup(o) {
      const e = w(!0);
      let t = null;
      return R(() => {
        t = setTimeout(() => {
          t = null, e.value = !1;
        }, 300);
      }),
        Ze(() => {
          t != null && (clearTimeout(t), t = null);
        }),
        (
          s,
          n,
        ) => (a(!0),
          c(
            M,
            null,
            E(
              s.items,
              (i) => (a(),
                c(
                  "div",
                  {
                    key: i.text,
                    class: N(["group", { "no-transition": e.value }]),
                  },
                  [m(sr, { item: i, depth: 0 }, null, 8, ["item"])],
                  2,
                )),
            ),
            128,
          ));
    },
  }),
  rr = $(ar, [["__scopeId", "data-v-51288d80"]]),
  Oe = (o) => (C("data-v-42c4c606"), o = o(), H(), o),
  ir = Oe(() => v("div", { class: "curtain" }, null, -1)),
  lr = {
    class: "nav",
    id: "VPSidebarNav",
    "aria-labelledby": "sidebar-aria-label",
    tabindex: "-1",
  },
  cr = Oe(() =>
    v(
      "span",
      { class: "visually-hidden", id: "sidebar-aria-label" },
      " Sidebar Navigation ",
      -1,
    )
  ),
  ur = _({
    __name: "VPSidebar",
    props: { open: { type: Boolean } },
    setup(o) {
      const { sidebarGroups: e, hasSidebar: t } = U(),
        s = o,
        n = w(null),
        i = Te(oe ? document.body : null);
      G([s, n], () => {
        var f;
        s.open
          ? (i.value = !0, (f = n.value) == null || f.focus())
          : i.value = !1;
      }, { immediate: !0, flush: "post" });
      const u = w(0);
      return G(e, () => {
        u.value += 1;
      }, { deep: !0 }),
        (f, p) =>
          r(t)
            ? (a(),
              c("aside", {
                key: 0,
                class: N(["VPSidebar", { open: f.open }]),
                ref_key: "navEl",
                ref: n,
                onClick: p[0] || (p[0] = xe(() => {}, ["stop"])),
              }, [
                ir,
                v("nav", lr, [
                  cr,
                  l(f.$slots, "sidebar-nav-before", {}, void 0, !0),
                  (a(),
                    k(rr, { items: r(e), key: u.value }, null, 8, ["items"])),
                  l(f.$slots, "sidebar-nav-after", {}, void 0, !0),
                ]),
              ], 2))
            : h("", !0);
    },
  }),
  dr = $(ur, [["__scopeId", "data-v-42c4c606"]]),
  vr = _({
    __name: "VPSkipLink",
    setup(o) {
      const e = ee(), t = w();
      G(() => e.path, () => t.value.focus());
      function s({ target: n }) {
        const i = document.getElementById(decodeURIComponent(n.hash).slice(1));
        if (i) {
          const u = () => {
            i.removeAttribute("tabindex"), i.removeEventListener("blur", u);
          };
          i.setAttribute("tabindex", "-1"),
            i.addEventListener("blur", u),
            i.focus(),
            window.scrollTo(0, 0);
        }
      }
      return (n, i) => (a(),
        c(M, null, [
          v(
            "span",
            { ref_key: "backToTop", ref: t, tabindex: "-1" },
            null,
            512,
          ),
          v("a", {
            href: "#VPContent",
            class: "VPSkipLink visually-hidden",
            onClick: s,
          }, " Skip to content "),
        ], 64));
    },
  }),
  pr = $(vr, [["__scopeId", "data-v-c8291ffa"]]),
  fr = _({
    __name: "Layout",
    setup(o) {
      const { isOpen: e, open: t, close: s } = U(), n = ee();
      G(() => n.path, s), bt(e, s);
      const { frontmatter: i } = P(),
        u = et(),
        f = y(() => !!u["home-hero-image"]);
      return Ie("hero-image-slot-exists", f), (p, g) => {
        const L = W("Content");
        return r(i).layout !== !1
          ? (a(),
            c("div", { key: 0, class: N(["Layout", r(i).pageClass]) }, [
              l(p.$slots, "layout-top", {}, void 0, !0),
              m(pr),
              m(
                st,
                { class: "backdrop", show: r(e), onClick: r(s) },
                null,
                8,
                ["show", "onClick"],
              ),
              m(Qa, null, {
                "nav-bar-title-before": d(
                  () => [l(p.$slots, "nav-bar-title-before", {}, void 0, !0)],
                ),
                "nav-bar-title-after": d(
                  () => [l(p.$slots, "nav-bar-title-after", {}, void 0, !0)],
                ),
                "nav-bar-content-before": d(
                  () => [
                    l(p.$slots, "nav-bar-content-before", {}, void 0, !0),
                  ],
                ),
                "nav-bar-content-after": d(
                  () => [l(p.$slots, "nav-bar-content-after", {}, void 0, !0)],
                ),
                "nav-screen-content-before": d(
                  () => [
                    l(p.$slots, "nav-screen-content-before", {}, void 0, !0),
                  ],
                ),
                "nav-screen-content-after": d(
                  () => [
                    l(p.$slots, "nav-screen-content-after", {}, void 0, !0),
                  ],
                ),
                _: 3,
              }),
              m(Nn, { open: r(e), onOpenMenu: r(t) }, null, 8, [
                "open",
                "onOpenMenu",
              ]),
              m(
                dr,
                { open: r(e) },
                {
                  "sidebar-nav-before": d(
                    () => [l(p.$slots, "sidebar-nav-before", {}, void 0, !0)],
                  ),
                  "sidebar-nav-after": d(
                    () => [l(p.$slots, "sidebar-nav-after", {}, void 0, !0)],
                  ),
                  _: 3,
                },
                8,
                ["open"],
              ),
              m(un, null, {
                "page-top": d(
                  () => [l(p.$slots, "page-top", {}, void 0, !0)],
                ),
                "page-bottom": d(
                  () => [l(p.$slots, "page-bottom", {}, void 0, !0)],
                ),
                "not-found": d(
                  () => [l(p.$slots, "not-found", {}, void 0, !0)],
                ),
                "home-hero-before": d(
                  () => [l(p.$slots, "home-hero-before", {}, void 0, !0)],
                ),
                "home-hero-info-before": d(
                  () => [l(p.$slots, "home-hero-info-before", {}, void 0, !0)],
                ),
                "home-hero-info": d(
                  () => [l(p.$slots, "home-hero-info", {}, void 0, !0)],
                ),
                "home-hero-info-after": d(
                  () => [l(p.$slots, "home-hero-info-after", {}, void 0, !0)],
                ),
                "home-hero-actions-after": d(
                  () => [
                    l(p.$slots, "home-hero-actions-after", {}, void 0, !0),
                  ],
                ),
                "home-hero-image": d(
                  () => [l(p.$slots, "home-hero-image", {}, void 0, !0)],
                ),
                "home-hero-after": d(
                  () => [l(p.$slots, "home-hero-after", {}, void 0, !0)],
                ),
                "home-features-before": d(
                  () => [l(p.$slots, "home-features-before", {}, void 0, !0)],
                ),
                "home-features-after": d(
                  () => [l(p.$slots, "home-features-after", {}, void 0, !0)],
                ),
                "doc-footer-before": d(
                  () => [l(p.$slots, "doc-footer-before", {}, void 0, !0)],
                ),
                "doc-before": d(
                  () => [l(p.$slots, "doc-before", {}, void 0, !0)],
                ),
                "doc-after": d(
                  () => [l(p.$slots, "doc-after", {}, void 0, !0)],
                ),
                "doc-top": d(() => [l(p.$slots, "doc-top", {}, void 0, !0)]),
                "doc-bottom": d(
                  () => [l(p.$slots, "doc-bottom", {}, void 0, !0)],
                ),
                "aside-top": d(
                  () => [l(p.$slots, "aside-top", {}, void 0, !0)],
                ),
                "aside-bottom": d(
                  () => [l(p.$slots, "aside-bottom", {}, void 0, !0)],
                ),
                "aside-outline-before": d(
                  () => [l(p.$slots, "aside-outline-before", {}, void 0, !0)],
                ),
                "aside-outline-after": d(
                  () => [l(p.$slots, "aside-outline-after", {}, void 0, !0)],
                ),
                "aside-ads-before": d(
                  () => [l(p.$slots, "aside-ads-before", {}, void 0, !0)],
                ),
                "aside-ads-after": d(
                  () => [l(p.$slots, "aside-ads-after", {}, void 0, !0)],
                ),
                _: 3,
              }),
              m(hn),
              l(p.$slots, "layout-bottom", {}, void 0, !0),
            ], 2))
          : (a(), k(L, { key: 1 }));
      };
    },
  }),
  hr = $(fr, [["__scopeId", "data-v-d8b57b2d"]]),
  _r = {
    Layout: hr,
    enhanceApp: ({ app: o }) => {
      o.component("Badge", tt);
    },
  },
  kr = { ..._r };
export { kr as R, P as u, Us as c };
