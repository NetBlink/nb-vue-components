import * as Zs from "vue";
import { computed as W, withDirectives as nt, createElementBlock as N, openBlock as A, normalizeClass as J, vModelCheckbox as Fc, defineComponent as te, watch as pe, h as Me, mergeModels as el, ref as q, useModel as th, onMounted as Re, createBlock as G, createCommentVNode as Y, createElementVNode as j, unref as C, renderSlot as V, toDisplayString as Q, createVNode as Z, Transition as sn, withCtx as K, vModelSelect as nh, Fragment as ie, vModelText as Rc, createTextVNode as me, vShow as kn, resolveDirective as rh, normalizeProps as xe, guardReactiveProps as De, renderList as Qe, resolveDynamicComponent as zo, mergeProps as Se, toHandlers as oh, withModifiers as Tt, withKeys as nn, normalizeStyle as Vt, shallowRef as io, markRaw as si, onUnmounted as Qt, reactive as fr, toRefs as pn, getCurrentScope as Ic, onScopeDispose as Lc, shallowReadonly as Sn, Comment as ah, cloneVNode as ih, effectScope as Nc, onBeforeUnmount as sh, customRef as lh, toValue as Ht, watchEffect as St, readonly as uh, getCurrentInstance as hn, nextTick as ze, inject as ns, provide as rs, toHandlerKey as ch, camelize as _c, Teleport as Mc, toRef as fh, watchPostEffect as Bc, mergeDefaults as jc, isRef as dh } from "vue";
const ph = ["value"], OE = {
  __name: "Checkbox",
  props: {
    checked: {
      type: [Array, Boolean],
      default: !1
    },
    value: {
      default: null
    },
    customClass: {
      type: String,
      default: ""
    }
  },
  emits: ["update:checked"],
  setup(e, { emit: t }) {
    const n = t, r = e, o = W({
      get() {
        return r.checked;
      },
      set(a) {
        n("update:checked", a);
      }
    });
    return (a, i) => nt((A(), N("input", {
      type: "checkbox",
      value: e.value,
      "onUpdate:modelValue": i[0] || (i[0] = (s) => o.value = s),
      class: J(["rounded border-gray-300 text-accent-600 shadow focus:ring-accent-500", { [e.customClass]: e.customClass }])
    }, null, 10, ph)), [
      [Fc, o.value]
    ]);
  }
};
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function hh(e, t, n) {
  return (t = yh(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function tl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tl(Object(n), !0).forEach(function(r) {
      hh(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tl(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function mh(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function yh(e) {
  var t = mh(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const nl = () => {
};
let os = {}, qc = {}, Uc = null, zc = {
  mark: nl,
  measure: nl
};
try {
  typeof window < "u" && (os = window), typeof document < "u" && (qc = document), typeof MutationObserver < "u" && (Uc = MutationObserver), typeof performance < "u" && (zc = performance);
} catch {
}
const {
  userAgent: rl = ""
} = os.navigator || {}, Wt = os, de = qc, ol = Uc, Ar = zc;
Wt.document;
const Lt = !!de.documentElement && !!de.head && typeof de.addEventListener == "function" && typeof de.createElement == "function", Vc = ~rl.indexOf("MSIE") || ~rl.indexOf("Trident/");
var gh = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, vh = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Hc = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fab: "brands",
    "fa-brands": "brands"
  },
  duotone: {
    fa: "solid",
    fad: "solid",
    "fa-solid": "solid",
    "fa-duotone": "solid",
    fadr: "regular",
    "fa-regular": "regular",
    fadl: "light",
    "fa-light": "light",
    fadt: "thin",
    "fa-thin": "thin"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid",
    fasdr: "regular",
    "fa-regular": "regular",
    fasdl: "light",
    "fa-light": "light",
    fasdt: "thin",
    "fa-thin": "thin"
  }
}, bh = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Wc = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Fe = "classic", so = "duotone", wh = "sharp", xh = "sharp-duotone", Kc = [Fe, so, wh, xh], Sh = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, Oh = {
  "Font Awesome 6 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 6 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 6 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 6 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, Eh = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp-duotone", {
  defaultShortPrefixId: "fasds",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}]]), Ah = {
  classic: {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    brands: "fab"
  },
  duotone: {
    solid: "fad",
    regular: "fadr",
    light: "fadl",
    thin: "fadt"
  },
  sharp: {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
  },
  "sharp-duotone": {
    solid: "fasds",
    regular: "fasdr",
    light: "fasdl",
    thin: "fasdt"
  }
}, Ch = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], al = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Ph = ["kit"], kh = {
  kit: {
    "fa-kit": "fak"
  }
}, Th = ["fak", "fakd"], Dh = {
  kit: {
    fak: "fa-kit"
  }
}, il = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, Cr = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, $h = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Fh = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Rh = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Ih = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  duotone: {
    "fa-regular": "fadr",
    "fa-light": "fadl",
    "fa-thin": "fadt"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds",
    "fa-regular": "fasdr",
    "fa-light": "fasdl",
    "fa-thin": "fasdt"
  }
}, Lh = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, li = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  duotone: {
    fadr: "fa-regular",
    fadl: "fa-light",
    fadt: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid",
    fasdr: "fa-regular",
    fasdl: "fa-light",
    fasdt: "fa-thin"
  }
}, Nh = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], ui = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...$h, ...Nh], _h = ["solid", "regular", "light", "thin", "duotone", "brands"], Gc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Mh = Gc.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Bh = [...Object.keys(Lh), ..._h, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Cr.GROUP, Cr.SWAP_OPACITY, Cr.PRIMARY, Cr.SECONDARY].concat(Gc.map((e) => "".concat(e, "x"))).concat(Mh.map((e) => "w-".concat(e))), jh = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
};
const $t = "___FONT_AWESOME___", ci = 16, Yc = "fa", Xc = "svg-inline--fa", un = "data-fa-i2svg", fi = "data-fa-pseudo-element", qh = "data-fa-pseudo-element-pending", as = "data-prefix", is = "data-icon", sl = "fontawesome-i2svg", Uh = "async", zh = ["HTML", "HEAD", "STYLE", "SCRIPT"], Jc = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function dr(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[Fe];
    }
  });
}
const Qc = U({}, Hc);
Qc[Fe] = U(U(U(U({}, {
  "fa-duotone": "duotone"
}), Hc[Fe]), al.kit), al["kit-duotone"]);
const Vh = dr(Qc), di = U({}, Ah);
di[Fe] = U(U(U(U({}, {
  duotone: "fad"
}), di[Fe]), il.kit), il["kit-duotone"]);
const ll = dr(di), pi = U({}, li);
pi[Fe] = U(U({}, pi[Fe]), Dh.kit);
const ss = dr(pi), hi = U({}, Ih);
hi[Fe] = U(U({}, hi[Fe]), kh.kit);
dr(hi);
const Hh = gh, Zc = "fa-layers-text", Wh = vh, Kh = U({}, Sh);
dr(Kh);
const Gh = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Vo = bh, Yh = [...Ph, ...Bh], er = Wt.FontAwesomeConfig || {};
function Xh(e) {
  var t = de.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function Jh(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
de && typeof de.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const o = Jh(Xh(n));
  o != null && (er[r] = o);
});
const ef = {
  styleDefault: "solid",
  familyDefault: Fe,
  cssPrefix: Yc,
  replacementClass: Xc,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
er.familyPrefix && (er.cssPrefix = er.familyPrefix);
const Fn = U(U({}, ef), er);
Fn.autoReplaceSvg || (Fn.observeMutations = !1);
const X = {};
Object.keys(ef).forEach((e) => {
  Object.defineProperty(X, e, {
    enumerable: !0,
    set: function(t) {
      Fn[e] = t, tr.forEach((n) => n(X));
    },
    get: function() {
      return Fn[e];
    }
  });
});
Object.defineProperty(X, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Fn.cssPrefix = e, tr.forEach((t) => t(X));
  },
  get: function() {
    return Fn.cssPrefix;
  }
});
Wt.FontAwesomeConfig = X;
const tr = [];
function Qh(e) {
  return tr.push(e), () => {
    tr.splice(tr.indexOf(e), 1);
  };
}
const jt = ci, vt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Zh(e) {
  if (!e || !Lt)
    return;
  const t = de.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = de.head.childNodes;
  let r = null;
  for (let o = n.length - 1; o > -1; o--) {
    const a = n[o], i = (a.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(i) > -1 && (r = a);
  }
  return de.head.insertBefore(t, r), e;
}
const em = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ar() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += em[Math.random() * 62 | 0];
  return t;
}
function Ln(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function ls(e) {
  return e.classList ? Ln(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function tf(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function tm(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(tf(e[n]), '" '), "").trim();
}
function lo(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function us(e) {
  return e.size !== vt.size || e.x !== vt.x || e.y !== vt.y || e.rotate !== vt.rotate || e.flipX || e.flipY;
}
function nm(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const o = {
    transform: "translate(".concat(n / 2, " 256)")
  }, a = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), i = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), c = {
    transform: "".concat(a, " ").concat(i, " ").concat(s)
  }, l = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: o,
    inner: c,
    path: l
  };
}
function rm(e) {
  let {
    transform: t,
    width: n = ci,
    height: r = ci,
    startCentered: o = !1
  } = e, a = "";
  return o && Vc ? a += "translate(".concat(t.x / jt - n / 2, "em, ").concat(t.y / jt - r / 2, "em) ") : o ? a += "translate(calc(-50% + ".concat(t.x / jt, "em), calc(-50% + ").concat(t.y / jt, "em)) ") : a += "translate(".concat(t.x / jt, "em, ").concat(t.y / jt, "em) "), a += "scale(".concat(t.size / jt * (t.flipX ? -1 : 1), ", ").concat(t.size / jt * (t.flipY ? -1 : 1), ") "), a += "rotate(".concat(t.rotate, "deg) "), a;
}
var om = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;
function nf() {
  const e = Yc, t = Xc, n = X.cssPrefix, r = X.replacementClass;
  let o = om;
  if (n !== e || r !== t) {
    const a = new RegExp("\\.".concat(e, "\\-"), "g"), i = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    o = o.replace(a, ".".concat(n, "-")).replace(i, "--".concat(n, "-")).replace(s, ".".concat(r));
  }
  return o;
}
let ul = !1;
function Ho() {
  X.autoAddCss && !ul && (Zh(nf()), ul = !0);
}
var am = {
  mixout() {
    return {
      dom: {
        css: nf,
        insertCss: Ho
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Ho();
      },
      beforeI2svg() {
        Ho();
      }
    };
  }
};
const Ft = Wt || {};
Ft[$t] || (Ft[$t] = {});
Ft[$t].styles || (Ft[$t].styles = {});
Ft[$t].hooks || (Ft[$t].hooks = {});
Ft[$t].shims || (Ft[$t].shims = []);
var bt = Ft[$t];
const rf = [], of = function() {
  de.removeEventListener("DOMContentLoaded", of), Hr = 1, rf.map((e) => e());
};
let Hr = !1;
Lt && (Hr = (de.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(de.readyState), Hr || de.addEventListener("DOMContentLoaded", of));
function im(e) {
  Lt && (Hr ? setTimeout(e, 0) : rf.push(e));
}
function pr(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? tf(e) : "<".concat(t, " ").concat(tm(n), ">").concat(r.map(pr).join(""), "</").concat(t, ">");
}
function cl(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var Wo = function(t, n, r, o) {
  var a = Object.keys(t), i = a.length, s = n, c, l, u;
  for (r === void 0 ? (c = 1, u = t[a[0]]) : (c = 0, u = r); c < i; c++)
    l = a[c], u = s(u, t[l], l, t);
  return u;
};
function sm(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r; ) {
    const o = e.charCodeAt(n++);
    if (o >= 55296 && o <= 56319 && n < r) {
      const a = e.charCodeAt(n++);
      (a & 64512) == 56320 ? t.push(((o & 1023) << 10) + (a & 1023) + 65536) : (t.push(o), n--);
    } else
      t.push(o);
  }
  return t;
}
function mi(e) {
  const t = sm(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function lm(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), o;
  return r >= 55296 && r <= 56319 && n > t + 1 && (o = e.charCodeAt(t + 1), o >= 56320 && o <= 57343) ? (r - 55296) * 1024 + o - 56320 + 65536 : r;
}
function fl(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function yi(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, o = fl(t);
  typeof bt.hooks.addPack == "function" && !r ? bt.hooks.addPack(e, fl(t)) : bt.styles[e] = U(U({}, bt.styles[e] || {}), o), e === "fas" && yi("fa", t);
}
const {
  styles: ir,
  shims: um
} = bt, af = Object.keys(ss), cm = af.reduce((e, t) => (e[t] = Object.keys(ss[t]), e), {});
let cs = null, sf = {}, lf = {}, uf = {}, cf = {}, ff = {};
function fm(e) {
  return ~Yh.indexOf(e);
}
function dm(e, t) {
  const n = t.split("-"), r = n[0], o = n.slice(1).join("-");
  return r === e && o !== "" && !fm(o) ? o : null;
}
const df = () => {
  const e = (r) => Wo(ir, (o, a, i) => (o[i] = Wo(a, r, {}), o), {});
  sf = e((r, o, a) => (o[3] && (r[o[3]] = a), o[2] && o[2].filter((s) => typeof s == "number").forEach((s) => {
    r[s.toString(16)] = a;
  }), r)), lf = e((r, o, a) => (r[a] = a, o[2] && o[2].filter((s) => typeof s == "string").forEach((s) => {
    r[s] = a;
  }), r)), ff = e((r, o, a) => {
    const i = o[2];
    return r[a] = a, i.forEach((s) => {
      r[s] = a;
    }), r;
  });
  const t = "far" in ir || X.autoFetchSvg, n = Wo(um, (r, o) => {
    const a = o[0];
    let i = o[1];
    const s = o[2];
    return i === "far" && !t && (i = "fas"), typeof a == "string" && (r.names[a] = {
      prefix: i,
      iconName: s
    }), typeof a == "number" && (r.unicodes[a.toString(16)] = {
      prefix: i,
      iconName: s
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  uf = n.names, cf = n.unicodes, cs = uo(X.styleDefault, {
    family: X.familyDefault
  });
};
Qh((e) => {
  cs = uo(e.styleDefault, {
    family: X.familyDefault
  });
});
df();
function fs(e, t) {
  return (sf[e] || {})[t];
}
function pm(e, t) {
  return (lf[e] || {})[t];
}
function rn(e, t) {
  return (ff[e] || {})[t];
}
function pf(e) {
  return uf[e] || {
    prefix: null,
    iconName: null
  };
}
function hm(e) {
  const t = cf[e], n = fs("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Kt() {
  return cs;
}
const hf = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function mm(e) {
  let t = Fe;
  const n = af.reduce((r, o) => (r[o] = "".concat(X.cssPrefix, "-").concat(o), r), {});
  return Kc.forEach((r) => {
    (e.includes(n[r]) || e.some((o) => cm[r].includes(o))) && (t = r);
  }), t;
}
function uo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = Fe
  } = t, r = Vh[n][e];
  if (n === so && !e)
    return "fad";
  const o = ll[n][e] || ll[n][r], a = e in bt.styles ? e : null;
  return o || a || null;
}
function ym(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const o = dm(X.cssPrefix, r);
    o ? n = o : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function dl(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function co(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const o = ui.concat(Fh), a = dl(e.filter((f) => o.includes(f))), i = dl(e.filter((f) => !ui.includes(f))), s = a.filter((f) => (r = f, !Wc.includes(f))), [c = null] = s, l = mm(a), u = U(U({}, ym(i)), {}, {
    prefix: uo(c, {
      family: l
    })
  });
  return U(U(U({}, u), wm({
    values: e,
    family: l,
    styles: ir,
    config: X,
    canonical: u,
    givenPrefix: r
  })), gm(n, r, u));
}
function gm(e, t, n) {
  let {
    prefix: r,
    iconName: o
  } = n;
  if (e || !r || !o)
    return {
      prefix: r,
      iconName: o
    };
  const a = t === "fa" ? pf(o) : {}, i = rn(r, o);
  return o = a.iconName || i || o, r = a.prefix || r, r === "far" && !ir.far && ir.fas && !X.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: o
  };
}
const vm = Kc.filter((e) => e !== Fe || e !== so), bm = Object.keys(li).filter((e) => e !== Fe).map((e) => Object.keys(li[e])).flat();
function wm(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: o = "",
    styles: a = {},
    config: i = {}
  } = e, s = n === so, c = t.includes("fa-duotone") || t.includes("fad"), l = i.familyDefault === "duotone", u = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!s && (c || l || u) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && vm.includes(n) && (Object.keys(a).find((p) => bm.includes(p)) || i.autoFetchSvg)) {
    const p = Eh.get(n).defaultShortPrefixId;
    r.prefix = p, r.iconName = rn(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || o === "fa") && (r.prefix = Kt() || "fas"), r;
}
class xm {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const o = n.reduce(this._pullDefinitions, {});
    Object.keys(o).forEach((a) => {
      this.definitions[a] = U(U({}, this.definitions[a] || {}), o[a]), yi(a, o[a]);
      const i = ss[Fe][a];
      i && yi(i, o[a]), df();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, n) {
    const r = n.prefix && n.iconName && n.icon ? {
      0: n
    } : n;
    return Object.keys(r).map((o) => {
      const {
        prefix: a,
        iconName: i,
        icon: s
      } = r[o], c = s[2];
      t[a] || (t[a] = {}), c.length > 0 && c.forEach((l) => {
        typeof l == "string" && (t[a][l] = s);
      }), t[a][i] = s;
    }), t;
  }
}
let pl = [], Cn = {};
const Tn = {}, Sm = Object.keys(Tn);
function Om(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return pl = e, Cn = {}, Object.keys(Tn).forEach((r) => {
    Sm.indexOf(r) === -1 && delete Tn[r];
  }), pl.forEach((r) => {
    const o = r.mixout ? r.mixout() : {};
    if (Object.keys(o).forEach((a) => {
      typeof o[a] == "function" && (n[a] = o[a]), typeof o[a] == "object" && Object.keys(o[a]).forEach((i) => {
        n[a] || (n[a] = {}), n[a][i] = o[a][i];
      });
    }), r.hooks) {
      const a = r.hooks();
      Object.keys(a).forEach((i) => {
        Cn[i] || (Cn[i] = []), Cn[i].push(a[i]);
      });
    }
    r.provides && r.provides(Tn);
  }), n;
}
function gi(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    r[o - 2] = arguments[o];
  return (Cn[e] || []).forEach((i) => {
    t = i.apply(null, [t, ...r]);
  }), t;
}
function cn(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (Cn[e] || []).forEach((a) => {
    a.apply(null, n);
  });
}
function Gt() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Tn[e] ? Tn[e].apply(null, t) : void 0;
}
function vi(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || Kt();
  if (t)
    return t = rn(n, t) || t, cl(mf.definitions, n, t) || cl(bt.styles, n, t);
}
const mf = new xm(), Em = () => {
  X.autoReplaceSvg = !1, X.observeMutations = !1, cn("noAuto");
}, Am = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Lt ? (cn("beforeI2svg", e), Gt("pseudoElements2svg", e), Gt("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    X.autoReplaceSvg === !1 && (X.autoReplaceSvg = !0), X.observeMutations = !0, im(() => {
      Pm({
        autoReplaceSvgRoot: t
      }), cn("watch", e);
    });
  }
}, Cm = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: rn(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = uo(e[0]);
      return {
        prefix: n,
        iconName: rn(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(X.cssPrefix, "-")) > -1 || e.match(Hh))) {
      const t = co(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || Kt(),
        iconName: rn(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = Kt();
      return {
        prefix: t,
        iconName: rn(t, e) || e
      };
    }
  }
}, Ze = {
  noAuto: Em,
  config: X,
  dom: Am,
  parse: Cm,
  library: mf,
  findIconDefinition: vi,
  toHtml: pr
}, Pm = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = de
  } = e;
  (Object.keys(bt.styles).length > 0 || X.autoFetchSvg) && Lt && X.autoReplaceSvg && Ze.dom.i2svg({
    node: t
  });
};
function fo(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => pr(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!Lt) return;
      const n = de.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function km(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: o,
    styles: a,
    transform: i
  } = e;
  if (us(i) && n.found && !r.found) {
    const {
      width: s,
      height: c
    } = n, l = {
      x: s / c / 2,
      y: 0.5
    };
    o.style = lo(U(U({}, a), {}, {
      "transform-origin": "".concat(l.x + i.x / 16, "em ").concat(l.y + i.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: o,
    children: t
  }];
}
function Tm(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: o,
    symbol: a
  } = e;
  const i = a === !0 ? "".concat(t, "-").concat(X.cssPrefix, "-").concat(n) : a;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: U(U({}, o), {}, {
        id: i
      }),
      children: r
    }]
  }];
}
function ds(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: r,
    iconName: o,
    transform: a,
    symbol: i,
    title: s,
    maskId: c,
    titleId: l,
    extra: u,
    watchable: f = !1
  } = e, {
    width: p,
    height: h
  } = n.found ? n : t, d = Th.includes(r), w = [X.replacementClass, o ? "".concat(X.cssPrefix, "-").concat(o) : ""].filter((P) => u.classes.indexOf(P) === -1).filter((P) => P !== "" || !!P).concat(u.classes).join(" ");
  let g = {
    children: [],
    attributes: U(U({}, u.attributes), {}, {
      "data-prefix": r,
      "data-icon": o,
      class: w,
      role: u.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(p, " ").concat(h)
    })
  };
  const y = d && !~u.classes.indexOf("fa-fw") ? {
    width: "".concat(p / h * 16 * 0.0625, "em")
  } : {};
  f && (g.attributes[un] = ""), s && (g.children.push({
    tag: "title",
    attributes: {
      id: g.attributes["aria-labelledby"] || "title-".concat(l || ar())
    },
    children: [s]
  }), delete g.attributes.title);
  const v = U(U({}, g), {}, {
    prefix: r,
    iconName: o,
    main: t,
    mask: n,
    maskId: c,
    transform: a,
    symbol: i,
    styles: U(U({}, y), u.styles)
  }), {
    children: b,
    attributes: E
  } = n.found && t.found ? Gt("generateAbstractMask", v) || {
    children: [],
    attributes: {}
  } : Gt("generateAbstractIcon", v) || {
    children: [],
    attributes: {}
  };
  return v.children = b, v.attributes = E, i ? Tm(v) : km(v);
}
function hl(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: o,
    title: a,
    extra: i,
    watchable: s = !1
  } = e, c = U(U(U({}, i.attributes), a ? {
    title: a
  } : {}), {}, {
    class: i.classes.join(" ")
  });
  s && (c[un] = "");
  const l = U({}, i.styles);
  us(o) && (l.transform = rm({
    transform: o,
    startCentered: !0,
    width: n,
    height: r
  }), l["-webkit-transform"] = l.transform);
  const u = lo(l);
  u.length > 0 && (c.style = u);
  const f = [];
  return f.push({
    tag: "span",
    attributes: c,
    children: [t]
  }), a && f.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [a]
  }), f;
}
function Dm(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, o = U(U(U({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), a = lo(r.styles);
  a.length > 0 && (o.style = a);
  const i = [];
  return i.push({
    tag: "span",
    attributes: o,
    children: [t]
  }), n && i.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), i;
}
const {
  styles: Ko
} = bt;
function bi(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let o = null;
  return Array.isArray(r) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(X.cssPrefix, "-").concat(Vo.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(X.cssPrefix, "-").concat(Vo.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(X.cssPrefix, "-").concat(Vo.PRIMARY),
        fill: "currentColor",
        d: r[1]
      }
    }]
  } : o = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: r
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: o
  };
}
const $m = {
  found: !1,
  width: 512,
  height: 512
};
function Fm(e, t) {
  !Jc && !X.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function wi(e, t) {
  let n = t;
  return t === "fa" && X.styleDefault !== null && (t = Kt()), new Promise((r, o) => {
    if (n === "fa") {
      const a = pf(e) || {};
      e = a.iconName || e, t = a.prefix || t;
    }
    if (e && t && Ko[t] && Ko[t][e]) {
      const a = Ko[t][e];
      return r(bi(a));
    }
    Fm(e, t), r(U(U({}, $m), {}, {
      icon: X.showMissingIcons && e ? Gt("missingIconAbstract") || {} : {}
    }));
  });
}
const ml = () => {
}, xi = X.measurePerformance && Ar && Ar.mark && Ar.measure ? Ar : {
  mark: ml,
  measure: ml
}, Yn = 'FA "6.7.2"', Rm = (e) => (xi.mark("".concat(Yn, " ").concat(e, " begins")), () => yf(e)), yf = (e) => {
  xi.mark("".concat(Yn, " ").concat(e, " ends")), xi.measure("".concat(Yn, " ").concat(e), "".concat(Yn, " ").concat(e, " begins"), "".concat(Yn, " ").concat(e, " ends"));
};
var ps = {
  begin: Rm,
  end: yf
};
const Lr = () => {
};
function yl(e) {
  return typeof (e.getAttribute ? e.getAttribute(un) : null) == "string";
}
function Im(e) {
  const t = e.getAttribute ? e.getAttribute(as) : null, n = e.getAttribute ? e.getAttribute(is) : null;
  return t && n;
}
function Lm(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(X.replacementClass);
}
function Nm() {
  return X.autoReplaceSvg === !0 ? Nr.replace : Nr[X.autoReplaceSvg] || Nr.replace;
}
function _m(e) {
  return de.createElementNS("http://www.w3.org/2000/svg", e);
}
function Mm(e) {
  return de.createElement(e);
}
function gf(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? _m : Mm
  } = t;
  if (typeof e == "string")
    return de.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(a) {
    r.setAttribute(a, e.attributes[a]);
  }), (e.children || []).forEach(function(a) {
    r.appendChild(gf(a, {
      ceFn: n
    }));
  }), r;
}
function Bm(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Nr = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(gf(n), t);
      }), t.getAttribute(un) === null && X.keepOriginalSource) {
        let n = de.createComment(Bm(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~ls(t).indexOf(X.replacementClass))
      return Nr.replace(e);
    const r = new RegExp("".concat(X.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const a = n[0].attributes.class.split(" ").reduce((i, s) => (s === X.replacementClass || s.match(r) ? i.toSvg.push(s) : i.toNode.push(s), i), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", a.toNode.join(" "));
    }
    const o = n.map((a) => pr(a)).join(`
`);
    t.setAttribute(un, ""), t.innerHTML = o;
  }
};
function gl(e) {
  e();
}
function vf(e, t) {
  const n = typeof t == "function" ? t : Lr;
  if (e.length === 0)
    n();
  else {
    let r = gl;
    X.mutateApproach === Uh && (r = Wt.requestAnimationFrame || gl), r(() => {
      const o = Nm(), a = ps.begin("mutate");
      e.map(o), a(), n();
    });
  }
}
let hs = !1;
function bf() {
  hs = !0;
}
function Si() {
  hs = !1;
}
let Wr = null;
function vl(e) {
  if (!ol || !X.observeMutations)
    return;
  const {
    treeCallback: t = Lr,
    nodeCallback: n = Lr,
    pseudoElementsCallback: r = Lr,
    observeMutationsRoot: o = de
  } = e;
  Wr = new ol((a) => {
    if (hs) return;
    const i = Kt();
    Ln(a).forEach((s) => {
      if (s.type === "childList" && s.addedNodes.length > 0 && !yl(s.addedNodes[0]) && (X.searchPseudoElements && r(s.target), t(s.target)), s.type === "attributes" && s.target.parentNode && X.searchPseudoElements && r(s.target.parentNode), s.type === "attributes" && yl(s.target) && ~Gh.indexOf(s.attributeName))
        if (s.attributeName === "class" && Im(s.target)) {
          const {
            prefix: c,
            iconName: l
          } = co(ls(s.target));
          s.target.setAttribute(as, c || i), l && s.target.setAttribute(is, l);
        } else Lm(s.target) && n(s.target);
    });
  }), Lt && Wr.observe(o, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function jm() {
  Wr && Wr.disconnect();
}
function qm(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, o) => {
    const a = o.split(":"), i = a[0], s = a.slice(1);
    return i && s.length > 0 && (r[i] = s.join(":").trim()), r;
  }, {})), n;
}
function Um(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let o = co(ls(e));
  return o.prefix || (o.prefix = Kt()), t && n && (o.prefix = t, o.iconName = n), o.iconName && o.prefix || (o.prefix && r.length > 0 && (o.iconName = pm(o.prefix, e.innerText) || fs(o.prefix, mi(e.innerText))), !o.iconName && X.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (o.iconName = e.firstChild.data)), o;
}
function zm(e) {
  const t = Ln(e.attributes).reduce((o, a) => (o.name !== "class" && o.name !== "style" && (o[a.name] = a.value), o), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return X.autoA11y && (n ? t["aria-labelledby"] = "".concat(X.replacementClass, "-title-").concat(r || ar()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function Vm() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: vt,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function bl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: o
  } = Um(e), a = zm(e), i = gi("parseNodeAttributes", {}, e);
  let s = t.styleParser ? qm(e) : [];
  return U({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: vt,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: o,
      styles: s,
      attributes: a
    }
  }, i);
}
const {
  styles: Hm
} = bt;
function wf(e) {
  const t = X.autoReplaceSvg === "nest" ? bl(e, {
    styleParser: !1
  }) : bl(e);
  return ~t.extra.classes.indexOf(Zc) ? Gt("generateLayersText", e, t) : Gt("generateSvgReplacementMutation", e, t);
}
function Wm() {
  return [...Ch, ...ui];
}
function wl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Lt) return Promise.resolve();
  const n = de.documentElement.classList, r = (u) => n.add("".concat(sl, "-").concat(u)), o = (u) => n.remove("".concat(sl, "-").concat(u)), a = X.autoFetchSvg ? Wm() : Wc.concat(Object.keys(Hm));
  a.includes("fa") || a.push("fa");
  const i = [".".concat(Zc, ":not([").concat(un, "])")].concat(a.map((u) => ".".concat(u, ":not([").concat(un, "])"))).join(", ");
  if (i.length === 0)
    return Promise.resolve();
  let s = [];
  try {
    s = Ln(e.querySelectorAll(i));
  } catch {
  }
  if (s.length > 0)
    r("pending"), o("complete");
  else
    return Promise.resolve();
  const c = ps.begin("onTree"), l = s.reduce((u, f) => {
    try {
      const p = wf(f);
      p && u.push(p);
    } catch (p) {
      Jc || p.name === "MissingIcon" && console.error(p);
    }
    return u;
  }, []);
  return new Promise((u, f) => {
    Promise.all(l).then((p) => {
      vf(p, () => {
        r("active"), r("complete"), o("pending"), typeof t == "function" && t(), c(), u();
      });
    }).catch((p) => {
      c(), f(p);
    });
  });
}
function Km(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  wf(e).then((n) => {
    n && vf([n], t);
  });
}
function Gm(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : vi(t || {});
    let {
      mask: o
    } = n;
    return o && (o = (o || {}).icon ? o : vi(o || {})), e(r, U(U({}, n), {}, {
      mask: o
    }));
  };
}
const Ym = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = vt,
    symbol: r = !1,
    mask: o = null,
    maskId: a = null,
    title: i = null,
    titleId: s = null,
    classes: c = [],
    attributes: l = {},
    styles: u = {}
  } = t;
  if (!e) return;
  const {
    prefix: f,
    iconName: p,
    icon: h
  } = e;
  return fo(U({
    type: "icon"
  }, e), () => (cn("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), X.autoA11y && (i ? l["aria-labelledby"] = "".concat(X.replacementClass, "-title-").concat(s || ar()) : (l["aria-hidden"] = "true", l.focusable = "false")), ds({
    icons: {
      main: bi(h),
      mask: o ? bi(o.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: f,
    iconName: p,
    transform: U(U({}, vt), n),
    symbol: r,
    title: i,
    maskId: a,
    titleId: s,
    extra: {
      attributes: l,
      styles: u,
      classes: c
    }
  })));
};
var Xm = {
  mixout() {
    return {
      icon: Gm(Ym)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = wl, e.nodeCallback = Km, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = de,
        callback: r = () => {
        }
      } = t;
      return wl(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: o,
        titleId: a,
        prefix: i,
        transform: s,
        symbol: c,
        mask: l,
        maskId: u,
        extra: f
      } = n;
      return new Promise((p, h) => {
        Promise.all([wi(r, i), l.iconName ? wi(l.iconName, l.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((d) => {
          let [w, g] = d;
          p([t, ds({
            icons: {
              main: w,
              mask: g
            },
            prefix: i,
            iconName: r,
            transform: s,
            symbol: c,
            maskId: u,
            title: o,
            titleId: a,
            extra: f,
            watchable: !0
          })]);
        }).catch(h);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: o,
        transform: a,
        styles: i
      } = t;
      const s = lo(i);
      s.length > 0 && (r.style = s);
      let c;
      return us(a) && (c = Gt("generateAbstractTransformGrouping", {
        main: o,
        transform: a,
        containerWidth: o.width,
        iconWidth: o.width
      })), n.push(c || o.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, Jm = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return fo({
          type: "layer"
        }, () => {
          cn("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let r = [];
          return e((o) => {
            Array.isArray(o) ? o.map((a) => {
              r = r.concat(a.abstract);
            }) : r = r.concat(o.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(X.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, Qm = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: r = [],
          attributes: o = {},
          styles: a = {}
        } = t;
        return fo({
          type: "counter",
          content: e
        }, () => (cn("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Dm({
          content: e.toString(),
          title: n,
          extra: {
            attributes: o,
            styles: a,
            classes: ["".concat(X.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, Zm = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = vt,
          title: r = null,
          classes: o = [],
          attributes: a = {},
          styles: i = {}
        } = t;
        return fo({
          type: "text",
          content: e
        }, () => (cn("beforeDOMElementCreation", {
          content: e,
          params: t
        }), hl({
          content: e,
          transform: U(U({}, vt), n),
          title: r,
          extra: {
            attributes: a,
            styles: i,
            classes: ["".concat(X.cssPrefix, "-layers-text"), ...o]
          }
        })));
      }
    };
  },
  provides(e) {
    e.generateLayersText = function(t, n) {
      const {
        title: r,
        transform: o,
        extra: a
      } = n;
      let i = null, s = null;
      if (Vc) {
        const c = parseInt(getComputedStyle(t).fontSize, 10), l = t.getBoundingClientRect();
        i = l.width / c, s = l.height / c;
      }
      return X.autoA11y && !r && (a.attributes["aria-hidden"] = "true"), Promise.resolve([t, hl({
        content: t.innerHTML,
        width: i,
        height: s,
        transform: o,
        title: r,
        extra: a,
        watchable: !0
      })]);
    };
  }
};
const ey = new RegExp('"', "ug"), xl = [1105920, 1112319], Sl = U(U(U(U({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Oh), jh), Rh), Oi = Object.keys(Sl).reduce((e, t) => (e[t.toLowerCase()] = Sl[t], e), {}), ty = Object.keys(Oi).reduce((e, t) => {
  const n = Oi[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function ny(e) {
  const t = e.replace(ey, ""), n = lm(t, 0), r = n >= xl[0] && n <= xl[1], o = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: mi(o ? t[0] : t),
    isSecondary: r || o
  };
}
function ry(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), o = isNaN(r) ? "normal" : r;
  return (Oi[n] || {})[o] || ty[n];
}
function Ol(e, t) {
  const n = "".concat(qh).concat(t.replace(":", "-"));
  return new Promise((r, o) => {
    if (e.getAttribute(n) !== null)
      return r();
    const i = Ln(e.children).filter((p) => p.getAttribute(fi) === t)[0], s = Wt.getComputedStyle(e, t), c = s.getPropertyValue("font-family"), l = c.match(Wh), u = s.getPropertyValue("font-weight"), f = s.getPropertyValue("content");
    if (i && !l)
      return e.removeChild(i), r();
    if (l && f !== "none" && f !== "") {
      const p = s.getPropertyValue("content");
      let h = ry(c, u);
      const {
        value: d,
        isSecondary: w
      } = ny(p), g = l[0].startsWith("FontAwesome");
      let y = fs(h, d), v = y;
      if (g) {
        const b = hm(d);
        b.iconName && b.prefix && (y = b.iconName, h = b.prefix);
      }
      if (y && !w && (!i || i.getAttribute(as) !== h || i.getAttribute(is) !== v)) {
        e.setAttribute(n, v), i && e.removeChild(i);
        const b = Vm(), {
          extra: E
        } = b;
        E.attributes[fi] = t, wi(y, h).then((P) => {
          const $ = ds(U(U({}, b), {}, {
            icons: {
              main: P,
              mask: hf()
            },
            prefix: h,
            iconName: v,
            extra: E,
            watchable: !0
          })), F = de.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(F, e.firstChild) : e.appendChild(F), F.outerHTML = $.map((B) => pr(B)).join(`
`), e.removeAttribute(n), r();
        }).catch(o);
      } else
        r();
    } else
      r();
  });
}
function oy(e) {
  return Promise.all([Ol(e, "::before"), Ol(e, "::after")]);
}
function ay(e) {
  return e.parentNode !== document.head && !~zh.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(fi) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function El(e) {
  if (Lt)
    return new Promise((t, n) => {
      const r = Ln(e.querySelectorAll("*")).filter(ay).map(oy), o = ps.begin("searchPseudoElements");
      bf(), Promise.all(r).then(() => {
        o(), Si(), t();
      }).catch(() => {
        o(), Si(), n();
      });
    });
}
var iy = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = El, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = de
      } = t;
      X.searchPseudoElements && El(n);
    };
  }
};
let Al = !1;
var sy = {
  mixout() {
    return {
      dom: {
        unwatch() {
          bf(), Al = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        vl(gi("mutationObserverCallbacks", {}));
      },
      noAuto() {
        jm();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        Al ? Si() : vl(gi("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const Cl = (e) => {
  let t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((n, r) => {
    const o = r.toLowerCase().split("-"), a = o[0];
    let i = o.slice(1).join("-");
    if (a && i === "h")
      return n.flipX = !0, n;
    if (a && i === "v")
      return n.flipY = !0, n;
    if (i = parseFloat(i), isNaN(i))
      return n;
    switch (a) {
      case "grow":
        n.size = n.size + i;
        break;
      case "shrink":
        n.size = n.size - i;
        break;
      case "left":
        n.x = n.x - i;
        break;
      case "right":
        n.x = n.x + i;
        break;
      case "up":
        n.y = n.y - i;
        break;
      case "down":
        n.y = n.y + i;
        break;
      case "rotate":
        n.rotate = n.rotate + i;
        break;
    }
    return n;
  }, t);
};
var ly = {
  mixout() {
    return {
      parse: {
        transform: (e) => Cl(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = Cl(n)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: n,
        transform: r,
        containerWidth: o,
        iconWidth: a
      } = t;
      const i = {
        transform: "translate(".concat(o / 2, " 256)")
      }, s = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), c = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), l = "rotate(".concat(r.rotate, " 0 0)"), u = {
        transform: "".concat(s, " ").concat(c, " ").concat(l)
      }, f = {
        transform: "translate(".concat(a / 2 * -1, " -256)")
      }, p = {
        outer: i,
        inner: u,
        path: f
      };
      return {
        tag: "g",
        attributes: U({}, p.outer),
        children: [{
          tag: "g",
          attributes: U({}, p.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: U(U({}, n.icon.attributes), p.path)
          }]
        }]
      };
    };
  }
};
const Go = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Pl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function uy(e) {
  return e.tag === "g" ? e.children : [e];
}
var cy = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? co(n.split(" ").map((o) => o.trim())) : hf();
        return r.prefix || (r.prefix = Kt()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: n,
        attributes: r,
        main: o,
        mask: a,
        maskId: i,
        transform: s
      } = t;
      const {
        width: c,
        icon: l
      } = o, {
        width: u,
        icon: f
      } = a, p = nm({
        transform: s,
        containerWidth: u,
        iconWidth: c
      }), h = {
        tag: "rect",
        attributes: U(U({}, Go), {}, {
          fill: "white"
        })
      }, d = l.children ? {
        children: l.children.map(Pl)
      } : {}, w = {
        tag: "g",
        attributes: U({}, p.inner),
        children: [Pl(U({
          tag: l.tag,
          attributes: U(U({}, l.attributes), p.path)
        }, d))]
      }, g = {
        tag: "g",
        attributes: U({}, p.outer),
        children: [w]
      }, y = "mask-".concat(i || ar()), v = "clip-".concat(i || ar()), b = {
        tag: "mask",
        attributes: U(U({}, Go), {}, {
          id: y,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [h, g]
      }, E = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: v
          },
          children: uy(f)
        }, b]
      };
      return n.push(E, {
        tag: "rect",
        attributes: U({
          fill: "currentColor",
          "clip-path": "url(#".concat(v, ")"),
          mask: "url(#".concat(y, ")")
        }, Go)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, fy = {
  provides(e) {
    let t = !1;
    Wt.matchMedia && (t = Wt.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, o = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: U(U({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const a = U(U({}, o), {}, {
        attributeName: "opacity"
      }), i = {
        tag: "circle",
        attributes: U(U({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || i.children.push({
        tag: "animate",
        attributes: U(U({}, o), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: U(U({}, a), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(i), n.push({
        tag: "path",
        attributes: U(U({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: U(U({}, a), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: U(U({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: U(U({}, a), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: n
      };
    };
  }
}, dy = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, py = [am, Xm, Jm, Qm, Zm, iy, sy, ly, cy, fy, dy];
Om(py, {
  mixoutsTo: Ze
});
Ze.noAuto;
const xf = Ze.config, hr = Ze.library;
Ze.dom;
const Kr = Ze.parse;
Ze.findIconDefinition;
Ze.toHtml;
const hy = Ze.icon;
Ze.layer;
const my = Ze.text;
Ze.counter;
function kl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function lt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kl(Object(n), !0).forEach(function(r) {
      je(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : kl(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function yy(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function gy(e) {
  var t = yy(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Gr(e) {
  "@babel/helpers - typeof";
  return Gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gr(e);
}
function je(e, t, n) {
  return t = gy(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function vy(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function by(e, t) {
  if (e == null) return {};
  var n = vy(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Ei(e) {
  return wy(e) || xy(e) || Sy(e) || Oy();
}
function wy(e) {
  if (Array.isArray(e)) return Ai(e);
}
function xy(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Sy(e, t) {
  if (e) {
    if (typeof e == "string") return Ai(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ai(e, t);
  }
}
function Ai(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Oy() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ey = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Sf = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(y, v, b) {
      if (!l(v) || f(v) || p(v) || h(v) || c(v))
        return v;
      var E, P = 0, $ = 0;
      if (u(v))
        for (E = [], $ = v.length; P < $; P++)
          E.push(n(y, v[P], b));
      else {
        E = {};
        for (var F in v)
          Object.prototype.hasOwnProperty.call(v, F) && (E[y(F, b)] = n(y, v[F], b));
      }
      return E;
    }, r = function(y, v) {
      v = v || {};
      var b = v.separator || "_", E = v.split || /(?=[A-Z])/;
      return y.split(E).join(b);
    }, o = function(y) {
      return d(y) ? y : (y = y.replace(/[\-_\s]+(.)?/g, function(v, b) {
        return b ? b.toUpperCase() : "";
      }), y.substr(0, 1).toLowerCase() + y.substr(1));
    }, a = function(y) {
      var v = o(y);
      return v.substr(0, 1).toUpperCase() + v.substr(1);
    }, i = function(y, v) {
      return r(y, v).toLowerCase();
    }, s = Object.prototype.toString, c = function(y) {
      return typeof y == "function";
    }, l = function(y) {
      return y === Object(y);
    }, u = function(y) {
      return s.call(y) == "[object Array]";
    }, f = function(y) {
      return s.call(y) == "[object Date]";
    }, p = function(y) {
      return s.call(y) == "[object RegExp]";
    }, h = function(y) {
      return s.call(y) == "[object Boolean]";
    }, d = function(y) {
      return y = y - 0, y === y;
    }, w = function(y, v) {
      var b = v && "process" in v ? v.process : v;
      return typeof b != "function" ? y : function(E, P) {
        return b(E, y, P);
      };
    }, g = {
      camelize: o,
      decamelize: i,
      pascalize: a,
      depascalize: i,
      camelizeKeys: function(y, v) {
        return n(w(o, v), y);
      },
      decamelizeKeys: function(y, v) {
        return n(w(i, v), y, v);
      },
      pascalizeKeys: function(y, v) {
        return n(w(a, v), y);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = g : t.humps = g;
  })(Ey);
})(Sf);
var Ay = Sf.exports, Cy = ["class", "style"];
function Py(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), o = Ay.camelize(n.slice(0, r)), a = n.slice(r + 1).trim();
    return t[o] = a, t;
  }, {});
}
function ky(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function ms(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var r = (e.children || []).map(function(c) {
    return ms(c);
  }), o = Object.keys(e.attributes || {}).reduce(function(c, l) {
    var u = e.attributes[l];
    switch (l) {
      case "class":
        c.class = ky(u);
        break;
      case "style":
        c.style = Py(u);
        break;
      default:
        c.attrs[l] = u;
    }
    return c;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var a = n.style, i = a === void 0 ? {} : a, s = by(n, Cy);
  return Me(e.tag, lt(lt(lt({}, t), {}, {
    class: o.class,
    style: lt(lt({}, o.style), i)
  }, o.attrs), s), r);
}
var Of = !1;
try {
  Of = process.env.NODE_ENV === "production";
} catch {
}
function Ty() {
  if (!Of && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function nr(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? je({}, e, t) : {};
}
function Dy(e) {
  var t, n = (t = {
    "fa-spin": e.spin,
    "fa-pulse": e.pulse,
    "fa-fw": e.fixedWidth,
    "fa-border": e.border,
    "fa-li": e.listItem,
    "fa-inverse": e.inverse,
    "fa-flip": e.flip === !0,
    "fa-flip-horizontal": e.flip === "horizontal" || e.flip === "both",
    "fa-flip-vertical": e.flip === "vertical" || e.flip === "both"
  }, je(je(je(je(je(je(je(je(je(je(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), "fa-flash", e.flash), je(je(t, "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse));
  return Object.keys(n).map(function(r) {
    return n[r] ? r : null;
  }).filter(function(r) {
    return r;
  });
}
function Tl(e) {
  if (e && Gr(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Kr.icon)
    return Kr.icon(e);
  if (e === null)
    return null;
  if (Gr(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
var Ue = te({
  name: "FontAwesomeIcon",
  props: {
    border: {
      type: Boolean,
      default: !1
    },
    fixedWidth: {
      type: Boolean,
      default: !1
    },
    flip: {
      type: [Boolean, String],
      default: !1,
      validator: function(t) {
        return [!0, !1, "horizontal", "vertical", "both"].indexOf(t) > -1;
      }
    },
    icon: {
      type: [Object, Array, String],
      required: !0
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    maskId: {
      type: String,
      default: null
    },
    listItem: {
      type: Boolean,
      default: !1
    },
    pull: {
      type: String,
      default: null,
      validator: function(t) {
        return ["right", "left"].indexOf(t) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: !1
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function(t) {
        return [90, 180, 270].indexOf(Number.parseInt(t, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null,
      validator: function(t) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(t) > -1;
      }
    },
    spin: {
      type: Boolean,
      default: !1
    },
    transform: {
      type: [String, Object],
      default: null
    },
    symbol: {
      type: [Boolean, String],
      default: !1
    },
    title: {
      type: String,
      default: null
    },
    titleId: {
      type: String,
      default: null
    },
    inverse: {
      type: Boolean,
      default: !1
    },
    bounce: {
      type: Boolean,
      default: !1
    },
    shake: {
      type: Boolean,
      default: !1
    },
    beat: {
      type: Boolean,
      default: !1
    },
    fade: {
      type: Boolean,
      default: !1
    },
    beatFade: {
      type: Boolean,
      default: !1
    },
    flash: {
      type: Boolean,
      default: !1
    },
    spinPulse: {
      type: Boolean,
      default: !1
    },
    spinReverse: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var r = n.attrs, o = W(function() {
      return Tl(t.icon);
    }), a = W(function() {
      return nr("classes", Dy(t));
    }), i = W(function() {
      return nr("transform", typeof t.transform == "string" ? Kr.transform(t.transform) : t.transform);
    }), s = W(function() {
      return nr("mask", Tl(t.mask));
    }), c = W(function() {
      return hy(o.value, lt(lt(lt(lt({}, a.value), i.value), s.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    pe(c, function(u) {
      if (!u)
        return Ty("Could not find one or more icon(s)", o.value, s.value);
    }, {
      immediate: !0
    });
    var l = W(function() {
      return c.value ? ms(c.value.abstract[0], {}, r) : null;
    });
    return function() {
      return l.value;
    };
  }
});
te({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var r = n.slots, o = xf.familyPrefix, a = W(function() {
      return ["".concat(o, "-layers")].concat(Ei(t.fixedWidth ? ["".concat(o, "-fw")] : []));
    });
    return function() {
      return Me("div", {
        class: a.value
      }, r.default ? r.default() : []);
    };
  }
});
te({
  name: "FontAwesomeLayersText",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    transform: {
      type: [String, Object],
      default: null
    },
    counter: {
      type: Boolean,
      default: !1
    },
    position: {
      type: String,
      default: null,
      validator: function(t) {
        return ["bottom-left", "bottom-right", "top-left", "top-right"].indexOf(t) > -1;
      }
    }
  },
  setup: function(t, n) {
    var r = n.attrs, o = xf.familyPrefix, a = W(function() {
      return nr("classes", [].concat(Ei(t.counter ? ["".concat(o, "-layers-counter")] : []), Ei(t.position ? ["".concat(o, "-layers-").concat(t.position)] : [])));
    }), i = W(function() {
      return nr("transform", typeof t.transform == "string" ? Kr.transform(t.transform) : t.transform);
    }), s = W(function() {
      var l = my(t.value.toString(), lt(lt({}, i.value), a.value)), u = l.abstract;
      return t.counter && (u[0].attributes.class = u[0].attributes.class.replace("fa-layers-text", "")), u[0];
    }), c = W(function() {
      return ms(s.value, {}, r);
    });
    return function() {
      return c.value;
    };
  }
});
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const $y = {
  prefix: "fas",
  iconName: "sort-down",
  icon: [320, 512, ["sort-desc"], "f0dd", "M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"]
}, Ci = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, Fy = {
  prefix: "fas",
  iconName: "box-archive",
  icon: [512, 512, ["archive"], "f187", "M32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64C0 46.3 14.3 32 32 32zm0 128l448 0 0 256c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-256zm128 80c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16z"]
}, Dl = {
  prefix: "fas",
  iconName: "pen-ruler",
  icon: [512, 512, ["pencil-ruler"], "f5ae", "M469.3 19.3l23.4 23.4c25 25 25 65.5 0 90.5l-56.4 56.4L322.3 75.7l56.4-56.4c25-25 65.5-25 90.5 0zM44.9 353.2L299.7 98.3 413.7 212.3 158.8 467.1c-6.7 6.7-15.1 11.6-24.2 14.2l-104 29.7c-8.4 2.4-17.4 .1-23.6-6.1s-8.5-15.2-6.1-23.6l29.7-104c2.6-9.2 7.5-17.5 14.2-24.2zM249.4 103.4L103.4 249.4 16 161.9c-18.7-18.7-18.7-49.1 0-67.9L94.1 16c18.7-18.7 49.1-18.7 67.9 0l19.8 19.8c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1l45.1 45.1zM408.6 262.6l45.1 45.1c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1L496 350.1c18.7 18.7 18.7 49.1 0 67.9L417.9 496c-18.7 18.7-49.1 18.7-67.9 0l-87.4-87.4L408.6 262.6z"]
}, Ry = {
  prefix: "fas",
  iconName: "circle-chevron-down",
  icon: [512, 512, ["chevron-circle-down"], "f13a", "M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"]
}, Ef = Ry, Iy = {
  prefix: "fas",
  iconName: "square-check",
  icon: [448, 512, [9745, 9989, 61510, "check-square"], "f14a", "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, $l = {
  prefix: "fas",
  iconName: "eye-slash",
  icon: [640, 512, [], "f070", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]
}, Fl = {
  prefix: "fas",
  iconName: "eye",
  icon: [576, 512, [128065], "f06e", "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]
}, Ly = {
  prefix: "fas",
  iconName: "sort-up",
  icon: [320, 512, ["sort-asc"], "f0de", "M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]
}, Ny = {
  prefix: "fas",
  iconName: "minus",
  icon: [448, 512, [8211, 8722, 10134, "subtract"], "f068", "M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]
}, Af = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]
}, _y = {
  prefix: "fas",
  iconName: "spinner",
  icon: [512, 512, [], "f110", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]
}, My = {
  prefix: "fas",
  iconName: "calendar",
  icon: [448, 512, [128197, 128198], "f133", "M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"]
};
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const By = {
  prefix: "far",
  iconName: "square",
  icon: [448, 512, [9632, 9723, 9724, 61590], "f0c8", "M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]
};
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Cf = {
  prefix: "fab",
  iconName: "whatsapp",
  icon: [448, 512, [], "f232", "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]
}, po = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, jy = { class: "relative flex w-full max-w-full items-stretch" }, qy = {
  key: 0,
  class: "flex items-center"
}, Uy = {
  key: 1,
  class: "mr-1"
}, zy = ["id", "disabled", "required", "name"], Vy = { key: 5 }, Hy = ["id", "required", "disabled", "name"], Wy = {
  key: 0,
  class: "border-gray flex items-center whitespace-nowrap rounded rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center text-gray-500"
}, Ky = ["id", "rows", "required", "disabled", "autocomplete", "placeholder", "autofocus", "name"], Gy = {
  key: 2,
  class: "relative flex w-full"
}, Yy = ["href"], Xy = {
  __name: "Input",
  props: /* @__PURE__ */ el({
    type: String,
    field: String,
    label: String,
    name: String,
    required: Boolean,
    disabled: Boolean,
    min: { type: [Number, String] },
    max: { type: [Number, String] },
    step: { type: [Number, String] },
    rows: { type: Number, default: 3 },
    form: Object,
    addon: String,
    placeholder: String,
    noLabel: Boolean,
    submitBtn: String,
    autofocus: Boolean,
    pattern: String,
    whatsApp: String,
    leftDescription: { type: [String, Boolean], default: !1 },
    rightDescription: { type: [String, Boolean], default: "Enable" },
    switchDescription: String,
    sublabel: String,
    hidePasswordToggler: {
      type: Boolean,
      default: !1
    },
    autocomplete: {
      type: String,
      default: null
    },
    inputCustomClass: {
      type: String,
      default: ""
    },
    checkboxCustomClass: {
      type: String,
      default: ""
    },
    buttonCustomClass: {
      type: String,
      default: ""
    },
    labelCustomClass: {
      type: String,
      default: ""
    },
    error: String
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ el(["changed", "update:modelValue"], ["update:modelValue"]),
  setup(e, { expose: t, emit: n }) {
    hr.add(Cf, Iy, By, Fl, $l);
    const r = e;
    function o(w) {
      let g = [];
      return w.split("_").join(" ").split(" ").map(function(y) {
        g.push(y[0].toUpperCase() + y.slice(1));
      }), g.join(" ");
    }
    const a = n, i = q(!1), s = th(e, "modelValue"), c = q(), l = q(), u = q(r.type);
    Re(() => {
      i.value = !r.form, c.value = i.value ? s.value : r.form[r.field];
    }), pe(
      () => c.value,
      (w, g) => {
        if (w !== g) {
          if (i.value ? s.value = w : r.form[r.field] = w, l.value = g, a("update:modelValue", w), f.value) {
            f.value = !1;
            return;
          }
          a("changed", { value: w, old_value: g });
        }
      }
    );
    const f = q(!1), p = (w) => {
      c.value = w, f.value = !0;
    }, h = () => l.value;
    pe(
      () => r.field ? r.form[r.field] : null,
      (w) => {
        c.value = i.value ? s.value : w;
      },
      {
        deep: !0
      }
    ), pe(
      () => s.value,
      (w) => {
        c.value = w;
      }
    );
    const d = () => {
      u.value = u.value === "password" ? "text" : "password";
    };
    return t({
      togglePassword: d,
      setValueSilently: p,
      getPreviousValue: h
    }), (w, g) => {
      var y, v, b, E, P, $, F, B, T;
      return A(), N("div", {
        class: J(e.noLabel ? "mb-2" : "mb-4")
      }, [
        e.noLabel ? Y("", !0) : (A(), G(C(ys), {
          key: 0,
          customClass: e.labelCustomClass,
          for: e.field,
          value: e.label ? e.label : e.field ? o(e.field) : "",
          sublabel: e.sublabel,
          required: e.required
        }, null, 8, ["customClass", "for", "value", "sublabel", "required"])),
        j("div", jy, [
          e.type === "switch" || e.type === "checkbox" ? (A(), N("label", qy, [
            (y = w.$slots) != null && y.leftDescription ? V(w.$slots, "leftDescription", { key: 0 }, void 0, !0) : e.leftDescription ? (A(), N("span", Uy, Q(e.leftDescription ? e.leftDescription : "Disable"), 1)) : Y("", !0),
            nt(j("input", {
              id: e.field,
              type: "checkbox",
              class: "hidden",
              "onUpdate:modelValue": g[0] || (g[0] = (k) => c.value = k),
              disabled: r.disabled,
              required: r.required,
              name: e.name ?? e.field
            }, null, 8, zy), [
              [Fc, c.value]
            ]),
            e.type === "switch" ? (A(), N("div", {
              key: 2,
              tabindex: "0",
              class: J(["toggle-switch focusable ml-0!", {
                checked: c.value,
                disabled: r.disabled
              }])
            }, null, 2)) : (A(), N("div", {
              key: 3,
              tabindex: "0",
              class: J(["focusable mr-1 p-1 text-primary", {
                "text-gray-500!": r.disabled,
                [e.checkboxCustomClass]: e.checkboxCustomClass
              }])
            }, [
              Z(sn, {
                name: "popup",
                mode: "out-in"
              }, {
                default: K(() => [
                  r.form[e.field] ? (A(), G(C(Ue), {
                    key: "checked",
                    icon: "fas fa-square-check"
                  })) : (A(), G(C(Ue), {
                    key: "unchecked",
                    icon: "far fa-square"
                  }))
                ]),
                _: 1
              })
            ], 2)),
            (v = w.$slots) != null && v.rightDescription ? V(w.$slots, "rightDescription", { key: 4 }, void 0, !0) : e.rightDescription ? (A(), N("span", Vy, Q(e.rightDescription), 1)) : Y("", !0)
          ])) : e.type === "select" ? nt((A(), N("select", {
            key: 1,
            "onUpdate:modelValue": g[1] || (g[1] = (k) => c.value = k),
            id: e.field,
            required: r.required,
            disabled: r.disabled,
            name: e.name ?? e.field,
            class: J(["focusable shadow-xs block w-full rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", { [e.inputCustomClass]: !!e.inputCustomClass }])
          }, [
            V(w.$slots, "default", {}, void 0, !0)
          ], 10, Hy)), [
            [nh, c.value]
          ]) : (A(), N(ie, { key: 2 }, [
            e.addon ? (A(), N("span", Wy, Q(e.addon), 1)) : Y("", !0),
            e.type === "textarea" ? nt((A(), N("textarea", {
              key: 1,
              id: e.field,
              class: J(["focusable relative m-0 block w-full flex-auto disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", {
                "rounded-l-none!": e.addon,
                "rounded-r-none!": !!e.submitBtn || e.whatsApp || ((b = w.$slots) == null ? void 0 : b.submit),
                [e.inputCustomClass]: !!e.inputCustomClass
              }]),
              rows: r.rows,
              "onUpdate:modelValue": g[2] || (g[2] = (k) => c.value = k),
              required: r.required,
              disabled: r.disabled,
              autocomplete: e.autocomplete ?? e.field,
              placeholder: r.placeholder,
              autofocus: r.autofocus,
              name: e.name ?? e.field
            }, null, 10, Ky)), [
              [Rc, c.value]
            ]) : (A(), N("div", Gy, [
              Z(C(og), {
                id: e.field,
                type: u.value,
                class: J(["focusable relative m-0 block w-full flex-auto disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", {
                  "rounded-l-none!": e.addon,
                  "rounded-r-none!": !!e.submitBtn || e.whatsApp || ((E = w.$slots) == null ? void 0 : E.submit),
                  [e.inputCustomClass]: !!e.inputCustomClass
                }]),
                modelValue: c.value,
                "onUpdate:modelValue": g[3] || (g[3] = (k) => c.value = k),
                required: r.required,
                disabled: r.disabled,
                autocomplete: e.autocomplete ?? e.field,
                min: r.min,
                max: r.max,
                step: r.step,
                placeholder: r.placeholder,
                autofocus: r.autofocus,
                pattern: r.pattern,
                name: e.name ?? e.field
              }, null, 8, ["id", "type", "class", "modelValue", "required", "disabled", "autocomplete", "min", "max", "step", "placeholder", "autofocus", "pattern", "name"]),
              e.type == "password" && !e.hidePasswordToggler ? (A(), N("div", {
                key: 0,
                onClick: d,
                class: "z-2 absolute right-0 top-0 flex h-full w-11 cursor-pointer items-center justify-center text-lg leading-normal text-black"
              }, [
                u.value === "password" ? (A(), G(C(Ue), {
                  key: 0,
                  icon: C(Fl)
                }, null, 8, ["icon"])) : (A(), G(C(Ue), {
                  key: 1,
                  icon: C($l)
                }, null, 8, ["icon"]))
              ])) : Y("", !0)
            ])),
            e.form ? (A(), N(ie, { key: 3 }, [
              e.submitBtn ? (A(), G(C(lc), {
                key: 0,
                form: e.form,
                class: J(["z-2 inline-block rounded-l-none", e.buttonCustomClass]),
                id: `submit-button-${e.field}`
              }, {
                default: K(() => [
                  me(Q(e.submitBtn), 1)
                ]),
                _: 1
              }, 8, ["form", "class", "id"])) : Y("", !0),
              (P = w.$slots) != null && P.submit ? (A(), G(C(lc), {
                key: 1,
                form: e.form,
                class: J(["z-2 inline-block rounded-l-none", e.buttonCustomClass]),
                id: "button-input"
              }, {
                default: K(() => [
                  V(w.$slots, "submit", {}, void 0, !0)
                ]),
                _: 3
              }, 8, ["form", "class"])) : Y("", !0)
            ], 64)) : Y("", !0),
            e.whatsApp ? (A(), N("a", {
              key: 4,
              class: J(["z-2 focus:z-3 focus:outline-hidden inline-block rounded-r bg-primary px-2 py-2 text-xs font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-600 focus:shadow-lg focus:ring-0 active:bg-primary-700 active:shadow-lg", e.buttonCustomClass]),
              href: e.whatsApp,
              target: "_blank"
            }, [
              Z(C(Ue), {
                icon: "fab fa-whatsapp",
                size: "2xl"
              })
            ], 10, Yy)) : Y("", !0)
          ], 64))
        ]),
        e.error || (F = ($ = e.form) == null ? void 0 : $.errors) != null && F[e.field] ? (A(), G(C(mr), {
          key: 1,
          message: e.error ? e.error : (T = (B = e.form) == null ? void 0 : B.errors) == null ? void 0 : T[e.field],
          class: "mt-2"
        }, null, 8, ["message"])) : Y("", !0)
      ], 2);
    };
  }
}, Jy = /* @__PURE__ */ po(Xy, [["__scopeId", "data-v-8dce32f1"]]), Qy = { class: "text-sm text-red-600" }, mr = {
  __name: "InputError",
  props: ["message"],
  setup(e) {
    return (t, n) => nt((A(), N("div", null, [
      j("p", Qy, Q(e.message), 1)
    ], 512)), [
      [kn, e.message]
    ]);
  }
}, Zy = { key: 0 }, eg = { key: 1 }, tg = {
  key: 2,
  class: "ml-2 text-xs text-gray-500"
}, ng = {
  key: 3,
  class: "ml-1 text-red-500"
}, ys = {
  __name: "InputLabel",
  props: ["value", "sublabel", "required", "customClass"],
  setup(e) {
    return (t, n) => (A(), N("label", {
      class: J(["mb-1 block text-sm font-medium text-gray-700", e.customClass])
    }, [
      e.value ? (A(), N("span", Zy, Q(e.value), 1)) : (A(), N("span", eg, [
        V(t.$slots, "default")
      ])),
      e.sublabel ? (A(), N("span", tg, Q(e.sublabel), 1)) : Y("", !0),
      e.required ? (A(), N("span", ng, "*")) : Y("", !0)
    ], 2));
  }
}, rg = ["value"], og = {
  __name: "TextInput",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(e, { expose: t }) {
    const n = q(null);
    return Re(() => {
      n.value.hasAttribute("autofocus") && n.value.focus();
    }), t({ focus: () => n.value.focus() }), (r, o) => (A(), N("input", {
      class: "max-w-full rounded border-gray-300 shadow focus:border-accent-500 focus:ring-accent-500",
      value: e.modelValue,
      onInput: o[0] || (o[0] = (a) => r.$emit("update:modelValue", a.target.value)),
      ref_key: "input",
      ref: n
    }, null, 40, rg));
  }
}, ag = { class: "relative mb-4 flex w-full flex-wrap items-stretch" }, ig = ["id", "required", "disabled", "autocomplete", "placeholder", "autofocus", "rows"], EE = {
  __name: "Textarea",
  props: {
    field: String,
    label: String,
    required: Boolean,
    disabled: Boolean,
    form: Object,
    addon: String,
    placeholder: String,
    noLabel: Boolean,
    autofocus: Boolean,
    modelValue: String,
    rows: Number
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = e;
    function n(r) {
      let o = [];
      return r.split("_").join(" ").split(" ").map(function(a) {
        o.push(a[0].toUpperCase() + a.slice(1));
      }), o.join(" ");
    }
    return (r, o) => (A(), N("div", null, [
      e.noLabel ? Y("", !0) : (A(), G(C(ys), {
        key: 0,
        for: e.field,
        value: e.label ? e.label : n(e.field),
        required: e.required
      }, null, 8, ["for", "value", "required"])),
      j("div", ag, [
        nt(j("textarea", {
          id: e.field,
          class: "relative m-0 block flex-auto rounded border-gray-300 shadow focus:border-accent-500 focus:ring-accent-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none",
          "onUpdate:modelValue": o[0] || (o[0] = (a) => t.form[e.field] = a),
          required: t.required,
          disabled: t.disabled,
          autocomplete: e.field,
          placeholder: t.placeholder,
          autofocus: t.autofocus,
          rows: t.rows,
          onInput: o[1] || (o[1] = (a) => r.$emit("update:modelValue", a.target.value))
        }, null, 40, ig), [
          [Rc, t.form[e.field]]
        ])
      ]),
      Z(C(mr), {
        class: "mt-2",
        message: t.form.errors[e.field]
      }, null, 8, ["message"])
    ]));
  }
};
var sg = Object.defineProperty, lg = Object.defineProperties, ug = Object.getOwnPropertyDescriptors, Rl = Object.getOwnPropertySymbols, cg = Object.prototype.hasOwnProperty, fg = Object.prototype.propertyIsEnumerable, Il = (e, t, n) => t in e ? sg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, On = (e, t) => {
  for (var n in t || (t = {}))
    cg.call(t, n) && Il(e, n, t[n]);
  if (Rl)
    for (var n of Rl(t))
      fg.call(t, n) && Il(e, n, t[n]);
  return e;
}, Ll = (e, t) => lg(e, ug(t));
const dg = {
  props: {
    autoscroll: {
      type: Boolean,
      default: !0
    }
  },
  watch: {
    typeAheadPointer() {
      this.autoscroll && this.maybeAdjustScroll();
    },
    open(e) {
      this.autoscroll && e && this.$nextTick(() => this.maybeAdjustScroll());
    }
  },
  methods: {
    maybeAdjustScroll() {
      var e;
      const t = ((e = this.$refs.dropdownMenu) == null ? void 0 : e.children[this.typeAheadPointer]) || !1;
      if (t) {
        const n = this.getDropdownViewport(), { top: r, bottom: o, height: a } = t.getBoundingClientRect();
        if (r < n.top)
          return this.$refs.dropdownMenu.scrollTop = t.offsetTop;
        if (o > n.bottom)
          return this.$refs.dropdownMenu.scrollTop = t.offsetTop - (n.height - a);
      }
    },
    getDropdownViewport() {
      return this.$refs.dropdownMenu ? this.$refs.dropdownMenu.getBoundingClientRect() : {
        height: 0,
        top: 0,
        bottom: 0
      };
    }
  }
}, pg = {
  data() {
    return {
      typeAheadPointer: -1
    };
  },
  watch: {
    filteredOptions() {
      for (let e = 0; e < this.filteredOptions.length; e++)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    open(e) {
      e && this.typeAheadToLastSelected();
    },
    selectedValue() {
      this.open && this.typeAheadToLastSelected();
    }
  },
  methods: {
    typeAheadUp() {
      for (let e = this.typeAheadPointer - 1; e >= 0; e--)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    typeAheadDown() {
      for (let e = this.typeAheadPointer + 1; e < this.filteredOptions.length; e++)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    typeAheadSelect() {
      const e = this.filteredOptions[this.typeAheadPointer];
      e && this.selectable(e) && this.select(e);
    },
    typeAheadToLastSelected() {
      this.typeAheadPointer = this.selectedValue.length !== 0 ? this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length - 1]) : -1;
    }
  }
}, hg = {
  props: {
    loading: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      mutableLoading: !1
    };
  },
  watch: {
    search() {
      this.$emit("search", this.search, this.toggleLoading);
    },
    loading(e) {
      this.mutableLoading = e;
    }
  },
  methods: {
    toggleLoading(e = null) {
      return e == null ? this.mutableLoading = !this.mutableLoading : this.mutableLoading = e;
    }
  }
}, gs = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, mg = {}, yg = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, gg = /* @__PURE__ */ j("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), vg = [
  gg
];
function bg(e, t) {
  return A(), N("svg", yg, vg);
}
const wg = /* @__PURE__ */ gs(mg, [["render", bg]]), xg = {}, Sg = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, Og = /* @__PURE__ */ j("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), Eg = [
  Og
];
function Ag(e, t) {
  return A(), N("svg", Sg, Eg);
}
const Cg = /* @__PURE__ */ gs(xg, [["render", Ag]]), Nl = {
  Deselect: wg,
  OpenIndicator: Cg
}, Pg = {
  mounted(e, { instance: t }) {
    if (t.appendToBody) {
      const {
        height: n,
        top: r,
        left: o,
        width: a
      } = t.$refs.toggle.getBoundingClientRect();
      let i = window.scrollX || window.pageXOffset, s = window.scrollY || window.pageYOffset;
      e.unbindPosition = t.calculatePosition(e, t, {
        width: a + "px",
        left: i + o + "px",
        top: s + r + n + "px"
      }), document.body.appendChild(e);
    }
  },
  unmounted(e, { instance: t }) {
    t.appendToBody && (e.unbindPosition && typeof e.unbindPosition == "function" && e.unbindPosition(), e.parentNode && e.parentNode.removeChild(e));
  }
};
function kg(e) {
  const t = {};
  return Object.keys(e).sort().forEach((n) => {
    t[n] = e[n];
  }), JSON.stringify(t);
}
let Tg = 0;
function Dg() {
  return ++Tg;
}
const $g = {
  components: On({}, Nl),
  directives: { appendToBody: Pg },
  mixins: [dg, pg, hg],
  compatConfig: {
    MODE: 3
  },
  emits: [
    "open",
    "close",
    "update:modelValue",
    "search",
    "search:compositionstart",
    "search:compositionend",
    "search:keydown",
    "search:blur",
    "search:focus",
    "search:input",
    "option:created",
    "option:selecting",
    "option:selected",
    "option:deselecting",
    "option:deselected"
  ],
  props: {
    modelValue: {},
    components: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    clearable: {
      type: Boolean,
      default: !0
    },
    deselectFromDropdown: {
      type: Boolean,
      default: !1
    },
    searchable: {
      type: Boolean,
      default: !0
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: ""
    },
    transition: {
      type: String,
      default: "vs__fade"
    },
    clearSearchOnSelect: {
      type: Boolean,
      default: !0
    },
    closeOnSelect: {
      type: Boolean,
      default: !0
    },
    label: {
      type: String,
      default: "label"
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    reduce: {
      type: Function,
      default: (e) => e
    },
    selectable: {
      type: Function,
      default: (e) => !0
    },
    getOptionLabel: {
      type: Function,
      default(e) {
        return typeof e == "object" ? e.hasOwnProperty(this.label) ? e[this.label] : console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(e)}.
https://vue-select.org/api/props.html#getoptionlabel`) : e;
      }
    },
    getOptionKey: {
      type: Function,
      default(e) {
        if (typeof e != "object")
          return e;
        try {
          return e.hasOwnProperty("id") ? e.id : kg(e);
        } catch (t) {
          return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`, e, t);
        }
      }
    },
    onTab: {
      type: Function,
      default: function() {
        this.selectOnTab && !this.isComposing && this.typeAheadSelect();
      }
    },
    taggable: {
      type: Boolean,
      default: !1
    },
    tabindex: {
      type: Number,
      default: null
    },
    pushTags: {
      type: Boolean,
      default: !1
    },
    filterable: {
      type: Boolean,
      default: !0
    },
    filterBy: {
      type: Function,
      default(e, t, n) {
        return (t || "").toLocaleLowerCase().indexOf(n.toLocaleLowerCase()) > -1;
      }
    },
    filter: {
      type: Function,
      default(e, t) {
        return e.filter((n) => {
          let r = this.getOptionLabel(n);
          return typeof r == "number" && (r = r.toString()), this.filterBy(n, r, t);
        });
      }
    },
    createOption: {
      type: Function,
      default(e) {
        return typeof this.optionList[0] == "object" ? { [this.label]: e } : e;
      }
    },
    resetOnOptionsChange: {
      default: !1,
      validator: (e) => ["function", "boolean"].includes(typeof e)
    },
    clearSearchOnBlur: {
      type: Function,
      default: function({ clearSearchOnSelect: e, multiple: t }) {
        return e && !t;
      }
    },
    noDrop: {
      type: Boolean,
      default: !1
    },
    inputId: {
      type: String
    },
    dir: {
      type: String,
      default: "auto"
    },
    selectOnTab: {
      type: Boolean,
      default: !1
    },
    selectOnKeyCodes: {
      type: Array,
      default: () => [13]
    },
    searchInputQuerySelector: {
      type: String,
      default: "[type=search]"
    },
    mapKeydown: {
      type: Function,
      default: (e, t) => e
    },
    appendToBody: {
      type: Boolean,
      default: !1
    },
    calculatePosition: {
      type: Function,
      default(e, t, { width: n, top: r, left: o }) {
        e.style.top = r, e.style.left = o, e.style.width = n;
      }
    },
    dropdownShouldOpen: {
      type: Function,
      default({ noDrop: e, open: t, mutableLoading: n }) {
        return e ? !1 : t && !n;
      }
    },
    uid: {
      type: [String, Number],
      default: () => Dg()
    }
  },
  data() {
    return {
      search: "",
      open: !1,
      isComposing: !1,
      pushedTags: [],
      _value: [],
      deselectButtons: []
    };
  },
  computed: {
    isReducingValues() {
      return this.$props.reduce !== this.$options.props.reduce.default;
    },
    isTrackingValues() {
      return typeof this.modelValue > "u" || this.isReducingValues;
    },
    selectedValue() {
      let e = this.modelValue;
      return this.isTrackingValues && (e = this.$data._value), e != null && e !== "" ? [].concat(e) : [];
    },
    optionList() {
      return this.options.concat(this.pushTags ? this.pushedTags : []);
    },
    searchEl() {
      return this.$slots.search ? this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector) : this.$refs.search;
    },
    scope() {
      const e = {
        search: this.search,
        loading: this.loading,
        searching: this.searching,
        filteredOptions: this.filteredOptions
      };
      return {
        search: {
          attributes: On({
            disabled: this.disabled,
            placeholder: this.searchPlaceholder,
            tabindex: this.tabindex,
            readonly: !this.searchable,
            id: this.inputId,
            "aria-autocomplete": "list",
            "aria-labelledby": `vs${this.uid}__combobox`,
            "aria-controls": `vs${this.uid}__listbox`,
            ref: "search",
            type: "search",
            autocomplete: this.autocomplete,
            value: this.search
          }, this.dropdownOpen && this.filteredOptions[this.typeAheadPointer] ? {
            "aria-activedescendant": `vs${this.uid}__option-${this.typeAheadPointer}`
          } : {}),
          events: {
            compositionstart: () => this.isComposing = !0,
            compositionend: () => this.isComposing = !1,
            keydown: this.onSearchKeyDown,
            blur: this.onSearchBlur,
            focus: this.onSearchFocus,
            input: (t) => this.search = t.target.value
          }
        },
        spinner: {
          loading: this.mutableLoading
        },
        noOptions: {
          search: this.search,
          loading: this.mutableLoading,
          searching: this.searching
        },
        openIndicator: {
          attributes: {
            ref: "openIndicator",
            role: "presentation",
            class: "vs__open-indicator"
          }
        },
        listHeader: e,
        listFooter: e,
        header: Ll(On({}, e), { deselect: this.deselect }),
        footer: Ll(On({}, e), { deselect: this.deselect })
      };
    },
    childComponents() {
      return On(On({}, Nl), this.components);
    },
    stateClasses() {
      return {
        "vs--open": this.dropdownOpen,
        "vs--single": !this.multiple,
        "vs--multiple": this.multiple,
        "vs--searching": this.searching && !this.noDrop,
        "vs--searchable": this.searchable && !this.noDrop,
        "vs--unsearchable": !this.searchable,
        "vs--loading": this.mutableLoading,
        "vs--disabled": this.disabled
      };
    },
    searching() {
      return !!this.search;
    },
    dropdownOpen() {
      return this.dropdownShouldOpen(this);
    },
    searchPlaceholder() {
      return this.isValueEmpty && this.placeholder ? this.placeholder : void 0;
    },
    filteredOptions() {
      const e = [].concat(this.optionList);
      if (!this.filterable && !this.taggable)
        return e;
      const t = this.search.length ? this.filter(e, this.search, this) : e;
      if (this.taggable && this.search.length) {
        const n = this.createOption(this.search);
        this.optionExists(n) || t.unshift(n);
      }
      return t;
    },
    isValueEmpty() {
      return this.selectedValue.length === 0;
    },
    showClearButton() {
      return !this.multiple && this.clearable && !this.open && !this.isValueEmpty;
    }
  },
  watch: {
    options(e, t) {
      const n = () => typeof this.resetOnOptionsChange == "function" ? this.resetOnOptionsChange(e, t, this.selectedValue) : this.resetOnOptionsChange;
      !this.taggable && n() && this.clearSelection(), this.modelValue && this.isTrackingValues && this.setInternalValueFromOptions(this.modelValue);
    },
    modelValue: {
      immediate: !0,
      handler(e) {
        this.isTrackingValues && this.setInternalValueFromOptions(e);
      }
    },
    multiple() {
      this.clearSelection();
    },
    open(e) {
      this.$emit(e ? "open" : "close");
    }
  },
  created() {
    this.mutableLoading = this.loading;
  },
  methods: {
    setInternalValueFromOptions(e) {
      Array.isArray(e) ? this.$data._value = e.map((t) => this.findOptionFromReducedValue(t)) : this.$data._value = this.findOptionFromReducedValue(e);
    },
    select(e) {
      this.$emit("option:selecting", e), this.isOptionSelected(e) ? this.deselectFromDropdown && (this.clearable || this.multiple && this.selectedValue.length > 1) && this.deselect(e) : (this.taggable && !this.optionExists(e) && (this.$emit("option:created", e), this.pushTag(e)), this.multiple && (e = this.selectedValue.concat(e)), this.updateValue(e), this.$emit("option:selected", e)), this.onAfterSelect(e);
    },
    deselect(e) {
      this.$emit("option:deselecting", e), this.updateValue(this.selectedValue.filter((t) => !this.optionComparator(t, e))), this.$emit("option:deselected", e);
    },
    clearSelection() {
      this.updateValue(this.multiple ? [] : null);
    },
    onAfterSelect(e) {
      this.closeOnSelect && (this.open = !this.open, this.searchEl.blur()), this.clearSearchOnSelect && (this.search = "");
    },
    updateValue(e) {
      typeof this.modelValue > "u" && (this.$data._value = e), e !== null && (Array.isArray(e) ? e = e.map((t) => this.reduce(t)) : e = this.reduce(e)), this.$emit("update:modelValue", e);
    },
    toggleDropdown(e) {
      const t = e.target !== this.searchEl;
      t && e.preventDefault();
      const n = [
        ...this.deselectButtons || [],
        this.$refs.clearButton
      ];
      if (this.searchEl === void 0 || n.filter(Boolean).some((r) => r.contains(e.target) || r === e.target)) {
        e.preventDefault();
        return;
      }
      this.open && t ? this.searchEl.blur() : this.disabled || (this.open = !0, this.searchEl.focus());
    },
    isOptionSelected(e) {
      return this.selectedValue.some((t) => this.optionComparator(t, e));
    },
    isOptionDeselectable(e) {
      return this.isOptionSelected(e) && this.deselectFromDropdown;
    },
    optionComparator(e, t) {
      return this.getOptionKey(e) === this.getOptionKey(t);
    },
    findOptionFromReducedValue(e) {
      const t = (r) => JSON.stringify(this.reduce(r)) === JSON.stringify(e), n = [...this.options, ...this.pushedTags].filter(t);
      return n.length === 1 ? n[0] : n.find((r) => this.optionComparator(r, this.$data._value)) || e;
    },
    closeSearchOptions() {
      this.open = !1, this.$emit("search:blur");
    },
    maybeDeleteValue() {
      if (!this.searchEl.value.length && this.selectedValue && this.selectedValue.length && this.clearable) {
        let e = null;
        this.multiple && (e = [
          ...this.selectedValue.slice(0, this.selectedValue.length - 1)
        ]), this.updateValue(e);
      }
    },
    optionExists(e) {
      return this.optionList.some((t) => this.optionComparator(t, e));
    },
    normalizeOptionForSlot(e) {
      return typeof e == "object" ? e : { [this.label]: e };
    },
    pushTag(e) {
      this.pushedTags.push(e);
    },
    onEscape() {
      this.search.length ? this.search = "" : this.searchEl.blur();
    },
    onSearchBlur() {
      if (this.mousedown && !this.searching)
        this.mousedown = !1;
      else {
        const { clearSearchOnSelect: e, multiple: t } = this;
        this.clearSearchOnBlur({ clearSearchOnSelect: e, multiple: t }) && (this.search = ""), this.closeSearchOptions();
        return;
      }
      if (this.search.length === 0 && this.options.length === 0) {
        this.closeSearchOptions();
        return;
      }
    },
    onSearchFocus() {
      this.open = !0, this.$emit("search:focus");
    },
    onMousedown() {
      this.mousedown = !0;
    },
    onMouseUp() {
      this.mousedown = !1;
    },
    onSearchKeyDown(e) {
      const t = (o) => (o.preventDefault(), !this.isComposing && this.typeAheadSelect()), n = {
        8: (o) => this.maybeDeleteValue(),
        9: (o) => this.onTab(),
        27: (o) => this.onEscape(),
        38: (o) => (o.preventDefault(), this.typeAheadUp()),
        40: (o) => (o.preventDefault(), this.typeAheadDown())
      };
      this.selectOnKeyCodes.forEach((o) => n[o] = t);
      const r = this.mapKeydown(n, this);
      if (typeof r[e.keyCode] == "function")
        return r[e.keyCode](e);
    }
  }
}, Fg = ["dir"], Rg = ["id", "aria-expanded", "aria-owns"], Ig = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, Lg = ["disabled", "title", "aria-label", "onClick"], Ng = {
  ref: "actions",
  class: "vs__actions"
}, _g = ["disabled"], Mg = { class: "vs__spinner" }, Bg = ["id"], jg = ["id", "aria-selected", "onMouseover", "onClick"], qg = {
  key: 0,
  class: "vs__no-options"
}, Ug = /* @__PURE__ */ me(" Sorry, no matching options. "), zg = ["id"];
function Vg(e, t, n, r, o, a) {
  const i = rh("append-to-body");
  return A(), N("div", {
    dir: n.dir,
    class: J(["v-select", a.stateClasses])
  }, [
    V(e.$slots, "header", xe(De(a.scope.header))),
    j("div", {
      id: `vs${n.uid}__combobox`,
      ref: "toggle",
      class: "vs__dropdown-toggle",
      role: "combobox",
      "aria-expanded": a.dropdownOpen.toString(),
      "aria-owns": `vs${n.uid}__listbox`,
      "aria-label": "Search for option",
      onMousedown: t[1] || (t[1] = (s) => a.toggleDropdown(s))
    }, [
      j("div", Ig, [
        (A(!0), N(ie, null, Qe(a.selectedValue, (s, c) => V(e.$slots, "selected-option-container", {
          option: a.normalizeOptionForSlot(s),
          deselect: a.deselect,
          multiple: n.multiple,
          disabled: n.disabled
        }, () => [
          (A(), N("span", {
            key: n.getOptionKey(s),
            class: "vs__selected"
          }, [
            V(e.$slots, "selected-option", xe(De(a.normalizeOptionForSlot(s))), () => [
              me(Q(n.getOptionLabel(s)), 1)
            ]),
            n.multiple ? (A(), N("button", {
              key: 0,
              ref_for: !0,
              ref: (l) => o.deselectButtons[c] = l,
              disabled: n.disabled,
              type: "button",
              class: "vs__deselect",
              title: `Deselect ${n.getOptionLabel(s)}`,
              "aria-label": `Deselect ${n.getOptionLabel(s)}`,
              onClick: (l) => a.deselect(s)
            }, [
              (A(), G(zo(a.childComponents.Deselect)))
            ], 8, Lg)) : Y("", !0)
          ]))
        ])), 256)),
        V(e.$slots, "search", xe(De(a.scope.search)), () => [
          j("input", Se({ class: "vs__search" }, a.scope.search.attributes, oh(a.scope.search.events)), null, 16)
        ])
      ], 512),
      j("div", Ng, [
        nt(j("button", {
          ref: "clearButton",
          disabled: n.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: t[0] || (t[0] = (...s) => a.clearSelection && a.clearSelection(...s))
        }, [
          (A(), G(zo(a.childComponents.Deselect)))
        ], 8, _g), [
          [kn, a.showClearButton]
        ]),
        V(e.$slots, "open-indicator", xe(De(a.scope.openIndicator)), () => [
          n.noDrop ? Y("", !0) : (A(), G(zo(a.childComponents.OpenIndicator), xe(Se({ key: 0 }, a.scope.openIndicator.attributes)), null, 16))
        ]),
        V(e.$slots, "spinner", xe(De(a.scope.spinner)), () => [
          nt(j("div", Mg, "Loading...", 512), [
            [kn, e.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, Rg),
    Z(sn, { name: n.transition }, {
      default: K(() => [
        a.dropdownOpen ? nt((A(), N("ul", {
          id: `vs${n.uid}__listbox`,
          ref: "dropdownMenu",
          key: `vs${n.uid}__listbox`,
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1",
          onMousedown: t[2] || (t[2] = Tt((...s) => a.onMousedown && a.onMousedown(...s), ["prevent"])),
          onMouseup: t[3] || (t[3] = (...s) => a.onMouseUp && a.onMouseUp(...s))
        }, [
          V(e.$slots, "list-header", xe(De(a.scope.listHeader))),
          (A(!0), N(ie, null, Qe(a.filteredOptions, (s, c) => (A(), N("li", {
            id: `vs${n.uid}__option-${c}`,
            key: n.getOptionKey(s),
            role: "option",
            class: J(["vs__dropdown-option", {
              "vs__dropdown-option--deselect": a.isOptionDeselectable(s) && c === e.typeAheadPointer,
              "vs__dropdown-option--selected": a.isOptionSelected(s),
              "vs__dropdown-option--highlight": c === e.typeAheadPointer,
              "vs__dropdown-option--disabled": !n.selectable(s)
            }]),
            "aria-selected": c === e.typeAheadPointer ? !0 : null,
            onMouseover: (l) => n.selectable(s) ? e.typeAheadPointer = c : null,
            onClick: Tt((l) => n.selectable(s) ? a.select(s) : null, ["prevent", "stop"])
          }, [
            V(e.$slots, "option", xe(De(a.normalizeOptionForSlot(s))), () => [
              me(Q(n.getOptionLabel(s)), 1)
            ])
          ], 42, jg))), 128)),
          a.filteredOptions.length === 0 ? (A(), N("li", qg, [
            V(e.$slots, "no-options", xe(De(a.scope.noOptions)), () => [
              Ug
            ])
          ])) : Y("", !0),
          V(e.$slots, "list-footer", xe(De(a.scope.listFooter)))
        ], 40, Bg)), [
          [i]
        ]) : (A(), N("ul", {
          key: 1,
          id: `vs${n.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, zg))
      ]),
      _: 3
    }, 8, ["name"]),
    V(e.$slots, "footer", xe(De(a.scope.footer)))
  ], 10, Fg);
}
const Hg = /* @__PURE__ */ gs($g, [["render", Vg]]), AE = {
  __name: "DropdownSearchbar",
  props: {
    options: Array,
    label: String,
    placeholder: String
  },
  setup(e) {
    return hr.add(Cf), (t, n) => (A(), G(C(Hg), {
      options: e.options,
      label: e.label,
      placeholder: e.placeholder,
      class: "min-w-44"
    }, null, 8, ["options", "label", "placeholder"]));
  }
}, Ct = {
  // cursor on input
  openOptions(e) {
    e.$refs.input.focus(), e.showMenu = !0, e.mousedownState = !1;
  },
  blurInput(e) {
    e.mousedownState || (e.searchText = "", e.closeOptions()), e.$emit("blur");
  },
  closeOptions(e) {
    e.$refs.input.blur(), e.showMenu = !1;
  },
  /**
   * up arrow key
   * 上の移動するときには新しいscroll位置を毎回セットする
   * Always scroll move, when "up arrow key" entered
   */
  prevItem(e) {
    const t = e.pointer - 1, n = e.$el.offsetHeight * t;
    t >= 0 && (e.pointer = t), e.$refs.menu.scrollTop = n;
  },
  /**
   *
   * down arrow key
   * ページsizeを計算してずれたらmove
   * calculate page size. If different between itemPage and currentPage move scroll
   */
  nextItem(e) {
    const t = e.pointer + 1, n = e.$el.offsetHeight * t;
    t <= e.filteredOptions.length - 1 && (e.pointer = t);
    const r = e.$refs.menu.offsetHeight, o = Math.ceil((e.$refs.menu.scrollTop + e.$el.offsetHeight) / r), a = Math.ceil(n / r);
    o !== a && (e.$refs.menu.scrollTop = (a - 1) * e.$refs.menu.offsetHeight);
  },
  // down enter key
  enterItem(e) {
    const t = e.filteredOptions[e.pointer], n = t.disabled;
    t && !n && e.selectItem(t);
  },
  // mouse enter event on item
  pointerSet(e, t) {
    e.pointer = t;
  },
  pointerAdjust(e) {
    e.pointer >= e.filteredOptions.length - 1 && (e.pointer = e.filteredOptions.length ? e.filteredOptions.length - 1 : 0);
  },
  mousedownItem(e) {
    e.mousedownState = !0;
  }
};
function Wg(e) {
  return new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
}
const Pf = {
  props: {
    id: {
      default: null
    },
    name: {
      type: String,
      default: ""
    },
    isError: {
      type: Boolean,
      default: !1
    },
    customAttr: {
      type: Function,
      default: () => ""
    },
    isDisabled: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: ""
    },
    filterPredicate: {
      type: Function,
      default: (e, t) => e.match(Wg(t))
    }
  }
}, Kg = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Gg = {
  name: "ModelSelect",
  mixins: [Pf],
  emits: ["blur", "searchchange", "update:modelValue"],
  props: {
    modelValue: {
      type: [String, Number, Object, Boolean]
    },
    customAttr: {
      type: Function,
      default: () => ""
    },
    options: {
      type: Array
    }
  },
  data() {
    return {
      showMenu: !1,
      searchText: "",
      mousedownState: !1,
      // mousedown on option menu
      pointer: -1
    };
  },
  watch: {
    value(e) {
      this.pointer = this.filteredOptions.findIndex((t) => t.value === this.optionValue(e));
    },
    filteredOptions() {
      this.pointerAdjust();
    },
    searchText() {
      this.$emit("searchchange", this.searchText);
    }
  },
  computed: {
    searchTextCustomAttr() {
      return this.selectedOption && this.selectedOption.value ? this.customAttr(this.selectedOption) : "";
    },
    inputText() {
      if (this.searchText)
        return "";
      {
        let e = this.placeholder;
        return this.selectedOption && (e = this.selectedOption.text), e;
      }
    },
    customAttrs() {
      try {
        if (Array.isArray(this.options))
          return this.options.map((e) => this.customAttr(e));
      } catch {
      }
      return [];
    },
    textClass() {
      return !this.selectedOption && this.placeholder ? "default" : "";
    },
    menuClass() {
      return {
        visible: this.showMenu,
        hidden: !this.showMenu
      };
    },
    menuStyle() {
      return {
        display: this.showMenu ? "block" : "none"
      };
    },
    filteredOptions() {
      return this.searchText ? this.options.filter((e) => {
        try {
          return this.filterPredicate(e.text, this.searchText);
        } catch {
          return !0;
        }
      }) : this.options;
    },
    selectedOption() {
      return this.options.find((e) => e.value === this.optionValue(this.modelValue));
    }
  },
  methods: {
    deleteTextOrItem() {
      !this.searchText && this.modelValue && (this.selectItem({}), this.openOptions());
    },
    openOptions() {
      Ct.openOptions(this);
    },
    blurInput() {
      Ct.blurInput(this);
    },
    closeOptions() {
      Ct.closeOptions(this);
    },
    prevItem() {
      Ct.prevItem(this);
    },
    nextItem() {
      Ct.nextItem(this);
    },
    enterItem() {
      Ct.enterItem(this);
    },
    pointerSet(e) {
      Ct.pointerSet(this, e);
    },
    pointerAdjust() {
      Ct.pointerAdjust(this);
    },
    mousedownItem() {
      Ct.mousedownItem(this);
    },
    selectItem(e) {
      this.searchText = "", this.closeOptions(), typeof this.modelValue == "object" && this.modelValue ? this.$emit("update:modelValue", e) : (this.$emit("update:modelValue", e.value), e.value !== void 0 && e.value === e.text && (this.searchText = e.value));
    },
    optionValue(e) {
      return typeof e == "object" && e !== null ? e.value : e;
    }
  }
}, Yg = /* @__PURE__ */ j("i", { class: "dropdown icon" }, null, -1), Xg = ["disabled", "tabindex", "id", "name", "value"], Jg = ["data-vss-custom-attr"], Qg = ["data-vss-custom-attr", "onClick", "onMouseenter"];
function Zg(e, t, n, r, o, a) {
  return A(), N("div", {
    class: J(["ui fluid search selection dropdown", { "active visible": o.showMenu, error: e.isError, disabled: e.isDisabled }]),
    onClick: t[11] || (t[11] = (...i) => a.openOptions && a.openOptions(...i)),
    onFocus: t[12] || (t[12] = (...i) => a.openOptions && a.openOptions(...i))
  }, [
    Yg,
    j("input", {
      class: "search",
      autocomplete: "off",
      disabled: e.isDisabled,
      tabindex: e.isDisabled ? -1 : 0,
      id: e.id,
      name: e.name,
      value: o.searchText,
      onInput: t[0] || (t[0] = (i) => o.searchText = i.target.value),
      ref: "input",
      onFocus: t[1] || (t[1] = Tt((...i) => a.openOptions && a.openOptions(...i), ["prevent"])),
      onKeyup: [
        t[2] || (t[2] = nn((...i) => a.closeOptions && a.closeOptions(...i), ["esc"])),
        t[7] || (t[7] = nn(Tt((...i) => a.enterItem && a.enterItem(...i), ["prevent"]), ["enter"]))
      ],
      onBlur: t[3] || (t[3] = (...i) => a.blurInput && a.blurInput(...i)),
      onKeydown: [
        t[4] || (t[4] = nn((...i) => a.prevItem && a.prevItem(...i), ["up"])),
        t[5] || (t[5] = nn((...i) => a.nextItem && a.nextItem(...i), ["down"])),
        t[6] || (t[6] = nn(Tt(() => {
        }, ["prevent"]), ["enter"])),
        t[8] || (t[8] = nn((...i) => a.deleteTextOrItem && a.deleteTextOrItem(...i), ["delete"]))
      ]
    }, null, 40, Xg),
    j("div", {
      class: J(["text", a.textClass]),
      "data-vss-custom-attr": a.searchTextCustomAttr
    }, Q(a.inputText), 11, Jg),
    j("div", {
      class: J(["menu", a.menuClass]),
      ref: "menu",
      onMousedown: t[10] || (t[10] = Tt(() => {
      }, ["prevent"])),
      style: Vt(a.menuStyle),
      tabindex: "-1"
    }, [
      (A(!0), N(ie, null, Qe(a.filteredOptions, (i, s) => (A(), N("div", {
        key: s,
        class: J(["item", { selected: i.selected || o.pointer === s, disabled: i.disabled }]),
        "data-vss-custom-attr": a.customAttrs[s] ? a.customAttrs[s] : "",
        onClick: Tt((c) => a.selectItem(i), ["stop"]),
        onMousedown: t[9] || (t[9] = (...c) => a.mousedownItem && a.mousedownItem(...c)),
        onMouseenter: (c) => a.pointerSet(s)
      }, [
        V(e.$slots, "default", {
          option: i,
          idx: s
        }, () => [
          me(Q(i.text), 1)
        ])
      ], 42, Qg))), 128))
    ], 38)
  ], 34);
}
const _l = /* @__PURE__ */ Kg(Gg, [["render", Zg]]), Ml = {
  name: "ModelListSelect",
  mixins: [Pf],
  emits: ["blur", "searchchange", "update:modelValue"],
  render: function() {
    return Me(_l, {
      id: this.id,
      name: this.name,
      options: this.options,
      modelValue: this.innerValue,
      isError: this.isError,
      isDisabled: this.isDisabled,
      placeholder: this.placeholder,
      filterPredicate: this.filterPredicate,
      onBlur: () => this.$emit("blur"),
      "onUpdate:modelValue": this.onInput,
      onSearchchange: (e) => this.$emit("searchchange", e)
    });
  },
  props: {
    modelValue: {
      type: [String, Number, Object, Boolean]
    },
    list: {
      type: Array
    },
    optionValue: {
      type: String
    },
    optionText: {
      type: String
    },
    customText: {
      type: Function
    },
    optionDisabled: {
      type: String
    }
  },
  computed: {
    options() {
      return this.list.map((e) => ({ value: e[this.optionValue], text: this.buildText(e), disabled: !!e[this.optionDisabled] }));
    },
    innerValue() {
      return this.modelValue ? typeof this.modelValue == "object" ? this.modelValue ? {
        value: this.modelValue[this.optionValue],
        text: this.buildText(this.modelValue),
        disabled: !!this.modelValue[this.optionDisabled]
      } : { value: "", text: "", disabled: !1 } : this.modelValue : this.modelValue;
    }
  },
  methods: {
    buildText(e) {
      return e[this.optionValue] !== void 0 ? this.customText ? this.customText(e) : e[this.optionText] : "";
    },
    onInput(e) {
      if (e === void 0)
        return this.$emit("update:modelValue", "");
      if (Object.keys(e).length === 0 && e.constructor === Object)
        this.$emit("update:modelValue", e);
      else if (typeof e == "object") {
        const t = this.list.find((n) => n[this.optionValue] === e.value);
        this.$emit("update:modelValue", t);
      } else
        this.$emit("update:modelValue", e);
    }
  },
  components: {
    ModelSelect: _l
  }
}, ev = {
  __name: "SearchSelect",
  props: {
    id: {
      type: String,
      required: !0
    },
    label: {
      type: String
    },
    list: {
      type: Array,
      required: !0
    },
    optionValue: {
      type: String,
      required: !0
    },
    optionText: {
      type: String,
      required: !0
    },
    optionDisabled: {
      type: String
    },
    placeholder: {
      type: String
    },
    field: String,
    form: Object,
    modelValue: {},
    noLabel: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    noForm: {
      type: Boolean,
      default: !1
    },
    filterPredicate: {
      type: Function,
      default: (e, t) => e.toLowerCase().includes(t.toLowerCase())
    },
    required: Boolean
  },
  emits: ["update:modelValue", "searchchange"],
  setup(e, { emit: t }) {
    const n = t, r = (o) => {
      let a = [];
      return o.split("_").join(" ").split(" ").map(function(i) {
        a.push(i[0].toUpperCase() + i.slice(1));
      }), a.join(" ");
    };
    return (o, a) => (A(), N("div", null, [
      !e.noLabel && (e.label || e.field) ? (A(), G(C(ys), {
        key: 0,
        for: e.id ?? e.field,
        value: r(e.label ?? e.field),
        required: e.required
      }, null, 8, ["for", "value", "required"])) : Y("", !0),
      e.noForm ? (A(), G(C(Ml), {
        key: 1,
        id: e.id ?? e.field,
        list: e.list,
        modelValue: e.modelValue,
        "option-value": e.optionValue,
        "option-text": e.optionText,
        "option-disabled": e.optionDisabled,
        placeholder: e.placeholder,
        class: "model-list relative! mt-0! max-w-full! rounded! border-gray-300! shadow! h-[42px]",
        "onUpdate:modelValue": a[0] || (a[0] = (i) => n("update:modelValue", i)),
        onSearchchange: a[1] || (a[1] = (i) => n("searchchange", i)),
        "is-disabled": e.disabled,
        filterPredicate: e.filterPredicate
      }, null, 8, ["id", "list", "modelValue", "option-value", "option-text", "option-disabled", "placeholder", "is-disabled", "filterPredicate"])) : (A(), N(ie, { key: 2 }, [
        Z(C(Ml), {
          id: e.id ?? e.field,
          list: e.list,
          modelValue: e.form[e.field],
          "onUpdate:modelValue": [
            a[2] || (a[2] = (i) => e.form[e.field] = i),
            a[3] || (a[3] = (i) => n("update:modelValue", i))
          ],
          "option-value": e.optionValue,
          "option-text": e.optionText,
          "option-disabled": e.optionDisabled,
          placeholder: e.placeholder,
          class: "model-list relative! mt-0! max-w-full! rounded! border-gray-300! px-3! shadow! h-[42px]",
          onSearchchange: a[4] || (a[4] = (i) => n("searchchange", i)),
          "is-disabled": e.disabled,
          filterPredicate: e.filterPredicate
        }, null, 8, ["id", "list", "modelValue", "option-value", "option-text", "option-disabled", "placeholder", "is-disabled", "filterPredicate"]),
        Z(C(mr), {
          message: e.form.errors[e.field]
        }, null, 8, ["message"])
      ], 64))
    ]));
  }
}, tv = /* @__PURE__ */ po(ev, [["__scopeId", "data-v-c8f3c7c8"]]);
function nv(e) {
  return typeof e == "symbol" || e instanceof Symbol;
}
function rv() {
}
function ov(e) {
  return e == null || typeof e != "object" && typeof e != "function";
}
function av(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Pi(e) {
  return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
function Yr(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
const kf = "[object RegExp]", Tf = "[object String]", Df = "[object Number]", $f = "[object Boolean]", ki = "[object Arguments]", Ff = "[object Symbol]", Rf = "[object Date]", If = "[object Map]", Lf = "[object Set]", Nf = "[object Array]", iv = "[object Function]", _f = "[object ArrayBuffer]", _r = "[object Object]", sv = "[object Error]", Mf = "[object DataView]", Bf = "[object Uint8Array]", jf = "[object Uint8ClampedArray]", qf = "[object Uint16Array]", Uf = "[object Uint32Array]", lv = "[object BigUint64Array]", zf = "[object Int8Array]", Vf = "[object Int16Array]", Hf = "[object Int32Array]", uv = "[object BigInt64Array]", Wf = "[object Float32Array]", Kf = "[object Float64Array]";
function Pn(e, t, n, r = /* @__PURE__ */ new Map(), o = void 0) {
  const a = o == null ? void 0 : o(e, t, n, r);
  if (a != null)
    return a;
  if (ov(e))
    return e;
  if (r.has(e))
    return r.get(e);
  if (Array.isArray(e)) {
    const i = new Array(e.length);
    r.set(e, i);
    for (let s = 0; s < e.length; s++)
      i[s] = Pn(e[s], s, n, r, o);
    return Object.hasOwn(e, "index") && (i.index = e.index), Object.hasOwn(e, "input") && (i.input = e.input), i;
  }
  if (e instanceof Date)
    return new Date(e.getTime());
  if (e instanceof RegExp) {
    const i = new RegExp(e.source, e.flags);
    return i.lastIndex = e.lastIndex, i;
  }
  if (e instanceof Map) {
    const i = /* @__PURE__ */ new Map();
    r.set(e, i);
    for (const [s, c] of e)
      i.set(s, Pn(c, s, n, r, o));
    return i;
  }
  if (e instanceof Set) {
    const i = /* @__PURE__ */ new Set();
    r.set(e, i);
    for (const s of e)
      i.add(Pn(s, void 0, n, r, o));
    return i;
  }
  if (typeof Buffer < "u" && Buffer.isBuffer(e))
    return e.subarray();
  if (av(e)) {
    const i = new (Object.getPrototypeOf(e)).constructor(e.length);
    r.set(e, i);
    for (let s = 0; s < e.length; s++)
      i[s] = Pn(e[s], s, n, r, o);
    return i;
  }
  if (e instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer)
    return e.slice(0);
  if (e instanceof DataView) {
    const i = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
    return r.set(e, i), Vn(i, e, n, r, o), i;
  }
  if (typeof File < "u" && e instanceof File) {
    const i = new File([e], e.name, {
      type: e.type
    });
    return r.set(e, i), Vn(i, e, n, r, o), i;
  }
  if (e instanceof Blob) {
    const i = new Blob([e], { type: e.type });
    return r.set(e, i), Vn(i, e, n, r, o), i;
  }
  if (e instanceof Error) {
    const i = new e.constructor();
    return r.set(e, i), i.message = e.message, i.name = e.name, i.stack = e.stack, i.cause = e.cause, Vn(i, e, n, r, o), i;
  }
  if (typeof e == "object" && cv(e)) {
    const i = Object.create(Object.getPrototypeOf(e));
    return r.set(e, i), Vn(i, e, n, r, o), i;
  }
  return e;
}
function Vn(e, t, n = e, r, o) {
  const a = [...Object.keys(t), ...Pi(t)];
  for (let i = 0; i < a.length; i++) {
    const s = a[i], c = Object.getOwnPropertyDescriptor(e, s);
    (c == null || c.writable) && (e[s] = Pn(t[s], s, n, r, o));
  }
}
function cv(e) {
  switch (Yr(e)) {
    case ki:
    case Nf:
    case _f:
    case Mf:
    case $f:
    case Rf:
    case Wf:
    case Kf:
    case zf:
    case Vf:
    case Hf:
    case If:
    case Df:
    case _r:
    case kf:
    case Lf:
    case Tf:
    case Ff:
    case Bf:
    case jf:
    case qf:
    case Uf:
      return !0;
    default:
      return !1;
  }
}
function it(e) {
  return Pn(e, void 0, e, /* @__PURE__ */ new Map(), void 0);
}
function Xr(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype || Object.getPrototypeOf(t) === null ? Object.prototype.toString.call(e) === "[object Object]" : !1;
}
function Xn(e, t) {
  const n = Object.keys(t);
  for (let r = 0; r < n.length; r++) {
    const o = n[r], a = t[o], i = e[o];
    Array.isArray(a) ? Array.isArray(i) ? e[o] = Xn(i, a) : e[o] = Xn([], a) : Xr(a) ? Xr(i) ? e[o] = Xn(i, a) : e[o] = Xn({}, a) : (i === void 0 || a !== void 0) && (e[o] = a);
  }
  return e;
}
function Gf(e, t) {
  return e === t || Number.isNaN(e) && Number.isNaN(t);
}
function fv(e, t, n) {
  return Jn(e, t, void 0, void 0, void 0, void 0, n);
}
function Jn(e, t, n, r, o, a, i) {
  const s = i(e, t, n, r, o, a);
  if (s !== void 0)
    return s;
  if (typeof e == typeof t)
    switch (typeof e) {
      case "bigint":
      case "string":
      case "boolean":
      case "symbol":
      case "undefined":
        return e === t;
      case "number":
        return e === t || Object.is(e, t);
      case "function":
        return e === t;
      case "object":
        return rr(e, t, a, i);
    }
  return rr(e, t, a, i);
}
function rr(e, t, n, r) {
  if (Object.is(e, t))
    return !0;
  let o = Yr(e), a = Yr(t);
  if (o === ki && (o = _r), a === ki && (a = _r), o !== a)
    return !1;
  switch (o) {
    case Tf:
      return e.toString() === t.toString();
    case Df: {
      const c = e.valueOf(), l = t.valueOf();
      return Gf(c, l);
    }
    case $f:
    case Rf:
    case Ff:
      return Object.is(e.valueOf(), t.valueOf());
    case kf:
      return e.source === t.source && e.flags === t.flags;
    case iv:
      return e === t;
  }
  n = n ?? /* @__PURE__ */ new Map();
  const i = n.get(e), s = n.get(t);
  if (i != null && s != null)
    return i === t;
  n.set(e, t), n.set(t, e);
  try {
    switch (o) {
      case If: {
        if (e.size !== t.size)
          return !1;
        for (const [c, l] of e.entries())
          if (!t.has(c) || !Jn(l, t.get(c), c, e, t, n, r))
            return !1;
        return !0;
      }
      case Lf: {
        if (e.size !== t.size)
          return !1;
        const c = Array.from(e.values()), l = Array.from(t.values());
        for (let u = 0; u < c.length; u++) {
          const f = c[u], p = l.findIndex((h) => Jn(f, h, void 0, e, t, n, r));
          if (p === -1)
            return !1;
          l.splice(p, 1);
        }
        return !0;
      }
      case Nf:
      case Bf:
      case jf:
      case qf:
      case Uf:
      case lv:
      case zf:
      case Vf:
      case Hf:
      case uv:
      case Wf:
      case Kf: {
        if (typeof Buffer < "u" && Buffer.isBuffer(e) !== Buffer.isBuffer(t) || e.length !== t.length)
          return !1;
        for (let c = 0; c < e.length; c++)
          if (!Jn(e[c], t[c], c, e, t, n, r))
            return !1;
        return !0;
      }
      case _f:
        return e.byteLength !== t.byteLength ? !1 : rr(new Uint8Array(e), new Uint8Array(t), n, r);
      case Mf:
        return e.byteLength !== t.byteLength || e.byteOffset !== t.byteOffset ? !1 : rr(new Uint8Array(e), new Uint8Array(t), n, r);
      case sv:
        return e.name === t.name && e.message === t.message;
      case _r: {
        if (!(rr(e.constructor, t.constructor, n, r) || Xr(e) && Xr(t)))
          return !1;
        const l = [...Object.keys(e), ...Pi(e)], u = [...Object.keys(t), ...Pi(t)];
        if (l.length !== u.length)
          return !1;
        for (let f = 0; f < l.length; f++) {
          const p = l[f], h = e[p];
          if (!Object.hasOwn(t, p))
            return !1;
          const d = t[p];
          if (!Jn(h, d, p, e, t, n, r))
            return !1;
        }
        return !0;
      }
      default:
        return !1;
    }
  } finally {
    n.delete(e), n.delete(t);
  }
}
function dv(e, t) {
  return fv(e, t, rv);
}
var Ti = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function hv(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var Yo, Bl;
function Nn() {
  return Bl || (Bl = 1, Yo = TypeError), Yo;
}
const mv = {}, yv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mv
}, Symbol.toStringTag, { value: "Module" })), Di = /* @__PURE__ */ hv(yv);
var Xo, jl;
function ho() {
  if (jl) return Xo;
  jl = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, n = e && t && typeof t.get == "function" ? t.get : null, r = e && Map.prototype.forEach, o = typeof Set == "function" && Set.prototype, a = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, i = o && a && typeof a.get == "function" ? a.get : null, s = o && Set.prototype.forEach, c = typeof WeakMap == "function" && WeakMap.prototype, l = c ? WeakMap.prototype.has : null, u = typeof WeakSet == "function" && WeakSet.prototype, f = u ? WeakSet.prototype.has : null, p = typeof WeakRef == "function" && WeakRef.prototype, h = p ? WeakRef.prototype.deref : null, d = Boolean.prototype.valueOf, w = Object.prototype.toString, g = Function.prototype.toString, y = String.prototype.match, v = String.prototype.slice, b = String.prototype.replace, E = String.prototype.toUpperCase, P = String.prototype.toLowerCase, $ = RegExp.prototype.test, F = Array.prototype.concat, B = Array.prototype.join, T = Array.prototype.slice, k = Math.floor, _ = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, m = Object.getOwnPropertySymbols, S = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, O = typeof Symbol == "function" && typeof Symbol.iterator == "object", x = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === O || !0) ? Symbol.toStringTag : null, z = Object.prototype.propertyIsEnumerable, M = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(D) {
    return D.__proto__;
  } : null);
  function I(D, R) {
    if (D === 1 / 0 || D === -1 / 0 || D !== D || D && D > -1e3 && D < 1e3 || $.call(/e/, R))
      return R;
    var se = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof D == "number") {
      var ce = D < 0 ? -k(-D) : k(D);
      if (ce !== D) {
        var fe = String(ce), re = v.call(R, fe.length + 1);
        return b.call(fe, se, "$&_") + "." + b.call(b.call(re, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return b.call(R, se, "$&_");
  }
  var H = Di, oe = H.custom, Ae = Pe(oe) ? oe : null, We = {
    __proto__: null,
    double: '"',
    single: "'"
  }, Oe = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  Xo = function D(R, se, ce, fe) {
    var re = se || {};
    if (Be(re, "quoteStyle") && !Be(We, re.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (Be(re, "maxStringLength") && (typeof re.maxStringLength == "number" ? re.maxStringLength < 0 && re.maxStringLength !== 1 / 0 : re.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var Mt = Be(re, "customInspect") ? re.customInspect : !0;
    if (typeof Mt != "boolean" && Mt !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (Be(re, "indent") && re.indent !== null && re.indent !== "	" && !(parseInt(re.indent, 10) === re.indent && re.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (Be(re, "numericSeparator") && typeof re.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var en = re.numericSeparator;
    if (typeof R > "u")
      return "undefined";
    if (R === null)
      return "null";
    if (typeof R == "boolean")
      return R ? "true" : "false";
    if (typeof R == "string")
      return zs(R, re);
    if (typeof R == "number") {
      if (R === 0)
        return 1 / 0 / R > 0 ? "0" : "-0";
      var Ke = String(R);
      return en ? I(R, Ke) : Ke;
    }
    if (typeof R == "bigint") {
      var Bt = String(R) + "n";
      return en ? I(R, Bt) : Bt;
    }
    var No = typeof re.depth > "u" ? 5 : re.depth;
    if (typeof ce > "u" && (ce = 0), ce >= No && No > 0 && typeof R == "object")
      return mt(R) ? "[Array]" : "[Object]";
    var wn = Qp(re, ce);
    if (typeof fe > "u")
      fe = [];
    else if (_t(fe, R) >= 0)
      return "[Circular]";
    function at(xn, Er, eh) {
      if (Er && (fe = T.call(fe), fe.push(Er)), eh) {
        var Qs = {
          depth: re.depth
        };
        return Be(re, "quoteStyle") && (Qs.quoteStyle = re.quoteStyle), D(xn, Qs, ce + 1, fe);
      }
      return D(xn, re, ce + 1, fe);
    }
    if (typeof R == "function" && !we(R)) {
      var Hs = yn(R), Ws = Sr(R, at);
      return "[Function" + (Hs ? ": " + Hs : " (anonymous)") + "]" + (Ws.length > 0 ? " { " + B.call(Ws, ", ") + " }" : "");
    }
    if (Pe(R)) {
      var Ks = O ? b.call(String(R), /^(Symbol\(.*\))_[^)]*$/, "$1") : S.call(R);
      return typeof R == "object" && !O ? Un(Ks) : Ks;
    }
    if (Yp(R)) {
      for (var zn = "<" + P.call(String(R.nodeName)), _o = R.attributes || [], Or = 0; Or < _o.length; Or++)
        zn += " " + _o[Or].name + "=" + Le(Ce(_o[Or].value), "double", re);
      return zn += ">", R.childNodes && R.childNodes.length && (zn += "..."), zn += "</" + P.call(String(R.nodeName)) + ">", zn;
    }
    if (mt(R)) {
      if (R.length === 0)
        return "[]";
      var Mo = Sr(R, at);
      return wn && !Jp(Mo) ? "[" + Lo(Mo, wn) + "]" : "[ " + B.call(Mo, ", ") + " ]";
    }
    if (ae(R)) {
      var Bo = Sr(R, at);
      return !("cause" in Error.prototype) && "cause" in R && !z.call(R, "cause") ? "{ [" + String(R) + "] " + B.call(F.call("[cause]: " + at(R.cause), Bo), ", ") + " }" : Bo.length === 0 ? "[" + String(R) + "]" : "{ [" + String(R) + "] " + B.call(Bo, ", ") + " }";
    }
    if (typeof R == "object" && Mt) {
      if (Ae && typeof R[Ae] == "function" && H)
        return H(R, { depth: No - ce });
      if (Mt !== "symbol" && typeof R.inspect == "function")
        return R.inspect();
    }
    if (ot(R)) {
      var Gs = [];
      return r && r.call(R, function(xn, Er) {
        Gs.push(at(Er, R, !0) + " => " + at(xn, R));
      }), Vs("Map", n.call(R), Gs, wn);
    }
    if (bn(R)) {
      var Ys = [];
      return s && s.call(R, function(xn) {
        Ys.push(at(xn, R));
      }), Vs("Set", i.call(R), Ys, wn);
    }
    if (gn(R))
      return Io("WeakMap");
    if (Gp(R))
      return Io("WeakSet");
    if (vn(R))
      return Io("WeakRef");
    if (ue(R))
      return Un(at(Number(R)));
    if (et(R))
      return Un(at(_.call(R)));
    if (ge(R))
      return Un(d.call(R));
    if (he(R))
      return Un(at(String(R)));
    if (typeof window < "u" && R === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && R === globalThis || typeof Ti < "u" && R === Ti)
      return "{ [object globalThis] }";
    if (!yt(R) && !we(R)) {
      var jo = Sr(R, at), Xs = M ? M(R) === Object.prototype : R instanceof Object || R.constructor === Object, qo = R instanceof Object ? "" : "null prototype", Js = !Xs && x && Object(R) === R && x in R ? v.call(tt(R), 8, -1) : qo ? "Object" : "", Zp = Xs || typeof R.constructor != "function" ? "" : R.constructor.name ? R.constructor.name + " " : "", Uo = Zp + (Js || qo ? "[" + B.call(F.call([], Js || [], qo || []), ": ") + "] " : "");
      return jo.length === 0 ? Uo + "{}" : wn ? Uo + "{" + Lo(jo, wn) + "}" : Uo + "{ " + B.call(jo, ", ") + " }";
    }
    return String(R);
  };
  function Le(D, R, se) {
    var ce = se.quoteStyle || R, fe = We[ce];
    return fe + D + fe;
  }
  function Ce(D) {
    return b.call(String(D), /"/g, "&quot;");
  }
  function Ne(D) {
    return !x || !(typeof D == "object" && (x in D || typeof D[x] < "u"));
  }
  function mt(D) {
    return tt(D) === "[object Array]" && Ne(D);
  }
  function yt(D) {
    return tt(D) === "[object Date]" && Ne(D);
  }
  function we(D) {
    return tt(D) === "[object RegExp]" && Ne(D);
  }
  function ae(D) {
    return tt(D) === "[object Error]" && Ne(D);
  }
  function he(D) {
    return tt(D) === "[object String]" && Ne(D);
  }
  function ue(D) {
    return tt(D) === "[object Number]" && Ne(D);
  }
  function ge(D) {
    return tt(D) === "[object Boolean]" && Ne(D);
  }
  function Pe(D) {
    if (O)
      return D && typeof D == "object" && D instanceof Symbol;
    if (typeof D == "symbol")
      return !0;
    if (!D || typeof D != "object" || !S)
      return !1;
    try {
      return S.call(D), !0;
    } catch {
    }
    return !1;
  }
  function et(D) {
    if (!D || typeof D != "object" || !_)
      return !1;
    try {
      return _.call(D), !0;
    } catch {
    }
    return !1;
  }
  var ke = Object.prototype.hasOwnProperty || function(D) {
    return D in this;
  };
  function Be(D, R) {
    return ke.call(D, R);
  }
  function tt(D) {
    return w.call(D);
  }
  function yn(D) {
    if (D.name)
      return D.name;
    var R = y.call(g.call(D), /^function\s*([\w$]+)/);
    return R ? R[1] : null;
  }
  function _t(D, R) {
    if (D.indexOf)
      return D.indexOf(R);
    for (var se = 0, ce = D.length; se < ce; se++)
      if (D[se] === R)
        return se;
    return -1;
  }
  function ot(D) {
    if (!n || !D || typeof D != "object")
      return !1;
    try {
      n.call(D);
      try {
        i.call(D);
      } catch {
        return !0;
      }
      return D instanceof Map;
    } catch {
    }
    return !1;
  }
  function gn(D) {
    if (!l || !D || typeof D != "object")
      return !1;
    try {
      l.call(D, l);
      try {
        f.call(D, f);
      } catch {
        return !0;
      }
      return D instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function vn(D) {
    if (!h || !D || typeof D != "object")
      return !1;
    try {
      return h.call(D), !0;
    } catch {
    }
    return !1;
  }
  function bn(D) {
    if (!i || !D || typeof D != "object")
      return !1;
    try {
      i.call(D);
      try {
        n.call(D);
      } catch {
        return !0;
      }
      return D instanceof Set;
    } catch {
    }
    return !1;
  }
  function Gp(D) {
    if (!f || !D || typeof D != "object")
      return !1;
    try {
      f.call(D, f);
      try {
        l.call(D, l);
      } catch {
        return !0;
      }
      return D instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function Yp(D) {
    return !D || typeof D != "object" ? !1 : typeof HTMLElement < "u" && D instanceof HTMLElement ? !0 : typeof D.nodeName == "string" && typeof D.getAttribute == "function";
  }
  function zs(D, R) {
    if (D.length > R.maxStringLength) {
      var se = D.length - R.maxStringLength, ce = "... " + se + " more character" + (se > 1 ? "s" : "");
      return zs(v.call(D, 0, R.maxStringLength), R) + ce;
    }
    var fe = Oe[R.quoteStyle || "single"];
    fe.lastIndex = 0;
    var re = b.call(b.call(D, fe, "\\$1"), /[\x00-\x1f]/g, Xp);
    return Le(re, "single", R);
  }
  function Xp(D) {
    var R = D.charCodeAt(0), se = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[R];
    return se ? "\\" + se : "\\x" + (R < 16 ? "0" : "") + E.call(R.toString(16));
  }
  function Un(D) {
    return "Object(" + D + ")";
  }
  function Io(D) {
    return D + " { ? }";
  }
  function Vs(D, R, se, ce) {
    var fe = ce ? Lo(se, ce) : B.call(se, ", ");
    return D + " (" + R + ") {" + fe + "}";
  }
  function Jp(D) {
    for (var R = 0; R < D.length; R++)
      if (_t(D[R], `
`) >= 0)
        return !1;
    return !0;
  }
  function Qp(D, R) {
    var se;
    if (D.indent === "	")
      se = "	";
    else if (typeof D.indent == "number" && D.indent > 0)
      se = B.call(Array(D.indent + 1), " ");
    else
      return null;
    return {
      base: se,
      prev: B.call(Array(R + 1), se)
    };
  }
  function Lo(D, R) {
    if (D.length === 0)
      return "";
    var se = `
` + R.prev + R.base;
    return se + B.call(D, "," + se) + `
` + R.prev;
  }
  function Sr(D, R) {
    var se = mt(D), ce = [];
    if (se) {
      ce.length = D.length;
      for (var fe = 0; fe < D.length; fe++)
        ce[fe] = Be(D, fe) ? R(D[fe], D) : "";
    }
    var re = typeof m == "function" ? m(D) : [], Mt;
    if (O) {
      Mt = {};
      for (var en = 0; en < re.length; en++)
        Mt["$" + re[en]] = re[en];
    }
    for (var Ke in D)
      Be(D, Ke) && (se && String(Number(Ke)) === Ke && Ke < D.length || O && Mt["$" + Ke] instanceof Symbol || ($.call(/[^\w$]/, Ke) ? ce.push(R(Ke, D) + ": " + R(D[Ke], D)) : ce.push(Ke + ": " + R(D[Ke], D))));
    if (typeof m == "function")
      for (var Bt = 0; Bt < re.length; Bt++)
        z.call(D, re[Bt]) && ce.push("[" + R(re[Bt]) + "]: " + R(D[re[Bt]], D));
    return ce;
  }
  return Xo;
}
var Jo, ql;
function gv() {
  if (ql) return Jo;
  ql = 1;
  var e = /* @__PURE__ */ ho(), t = /* @__PURE__ */ Nn(), n = function(s, c, l) {
    for (var u = s, f; (f = u.next) != null; u = f)
      if (f.key === c)
        return u.next = f.next, l || (f.next = /** @type {NonNullable<typeof list.next>} */
        s.next, s.next = f), f;
  }, r = function(s, c) {
    if (s) {
      var l = n(s, c);
      return l && l.value;
    }
  }, o = function(s, c, l) {
    var u = n(s, c);
    u ? u.value = l : s.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: c,
      next: s.next,
      value: l
    };
  }, a = function(s, c) {
    return s ? !!n(s, c) : !1;
  }, i = function(s, c) {
    if (s)
      return n(s, c, !0);
  };
  return Jo = function() {
    var c, l = {
      assert: function(u) {
        if (!l.has(u))
          throw new t("Side channel does not contain " + e(u));
      },
      delete: function(u) {
        var f = c && c.next, p = i(c, u);
        return p && f && f === p && (c = void 0), !!p;
      },
      get: function(u) {
        return r(c, u);
      },
      has: function(u) {
        return a(c, u);
      },
      set: function(u, f) {
        c || (c = {
          next: void 0
        }), o(
          /** @type {NonNullable<typeof $o>} */
          c,
          u,
          f
        );
      }
    };
    return l;
  }, Jo;
}
var Qo, Ul;
function Yf() {
  return Ul || (Ul = 1, Qo = Object), Qo;
}
var Zo, zl;
function vv() {
  return zl || (zl = 1, Zo = Error), Zo;
}
var ea, Vl;
function bv() {
  return Vl || (Vl = 1, ea = EvalError), ea;
}
var ta, Hl;
function wv() {
  return Hl || (Hl = 1, ta = RangeError), ta;
}
var na, Wl;
function xv() {
  return Wl || (Wl = 1, na = ReferenceError), na;
}
var ra, Kl;
function Sv() {
  return Kl || (Kl = 1, ra = SyntaxError), ra;
}
var oa, Gl;
function Ov() {
  return Gl || (Gl = 1, oa = URIError), oa;
}
var aa, Yl;
function Ev() {
  return Yl || (Yl = 1, aa = Math.abs), aa;
}
var ia, Xl;
function Av() {
  return Xl || (Xl = 1, ia = Math.floor), ia;
}
var sa, Jl;
function Cv() {
  return Jl || (Jl = 1, sa = Math.max), sa;
}
var la, Ql;
function Pv() {
  return Ql || (Ql = 1, la = Math.min), la;
}
var ua, Zl;
function kv() {
  return Zl || (Zl = 1, ua = Math.pow), ua;
}
var ca, eu;
function Tv() {
  return eu || (eu = 1, ca = Math.round), ca;
}
var fa, tu;
function Dv() {
  return tu || (tu = 1, fa = Number.isNaN || function(t) {
    return t !== t;
  }), fa;
}
var da, nu;
function $v() {
  if (nu) return da;
  nu = 1;
  var e = /* @__PURE__ */ Dv();
  return da = function(n) {
    return e(n) || n === 0 ? n : n < 0 ? -1 : 1;
  }, da;
}
var pa, ru;
function Fv() {
  return ru || (ru = 1, pa = Object.getOwnPropertyDescriptor), pa;
}
var ha, ou;
function Xf() {
  if (ou) return ha;
  ou = 1;
  var e = /* @__PURE__ */ Fv();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return ha = e, ha;
}
var ma, au;
function Rv() {
  if (au) return ma;
  au = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return ma = e, ma;
}
var ya, iu;
function Iv() {
  return iu || (iu = 1, ya = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, n = Symbol("test"), r = Object(n);
    if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
      return !1;
    var o = 42;
    t[n] = o;
    for (var a in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var i = Object.getOwnPropertySymbols(t);
    if (i.length !== 1 || i[0] !== n || !Object.prototype.propertyIsEnumerable.call(t, n))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var s = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, n)
      );
      if (s.value !== o || s.enumerable !== !0)
        return !1;
    }
    return !0;
  }), ya;
}
var ga, su;
function Lv() {
  if (su) return ga;
  su = 1;
  var e = typeof Symbol < "u" && Symbol, t = Iv();
  return ga = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, ga;
}
var va, lu;
function Jf() {
  return lu || (lu = 1, va = typeof Reflect < "u" && Reflect.getPrototypeOf || null), va;
}
var ba, uu;
function Qf() {
  if (uu) return ba;
  uu = 1;
  var e = /* @__PURE__ */ Yf();
  return ba = e.getPrototypeOf || null, ba;
}
var wa, cu;
function Nv() {
  if (cu) return wa;
  cu = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, n = Math.max, r = "[object Function]", o = function(c, l) {
    for (var u = [], f = 0; f < c.length; f += 1)
      u[f] = c[f];
    for (var p = 0; p < l.length; p += 1)
      u[p + c.length] = l[p];
    return u;
  }, a = function(c, l) {
    for (var u = [], f = l, p = 0; f < c.length; f += 1, p += 1)
      u[p] = c[f];
    return u;
  }, i = function(s, c) {
    for (var l = "", u = 0; u < s.length; u += 1)
      l += s[u], u + 1 < s.length && (l += c);
    return l;
  };
  return wa = function(c) {
    var l = this;
    if (typeof l != "function" || t.apply(l) !== r)
      throw new TypeError(e + l);
    for (var u = a(arguments, 1), f, p = function() {
      if (this instanceof f) {
        var y = l.apply(
          this,
          o(u, arguments)
        );
        return Object(y) === y ? y : this;
      }
      return l.apply(
        c,
        o(u, arguments)
      );
    }, h = n(0, l.length - u.length), d = [], w = 0; w < h; w++)
      d[w] = "$" + w;
    if (f = Function("binder", "return function (" + i(d, ",") + "){ return binder.apply(this,arguments); }")(p), l.prototype) {
      var g = function() {
      };
      g.prototype = l.prototype, f.prototype = new g(), g.prototype = null;
    }
    return f;
  }, wa;
}
var xa, fu;
function mo() {
  if (fu) return xa;
  fu = 1;
  var e = Nv();
  return xa = Function.prototype.bind || e, xa;
}
var Sa, du;
function vs() {
  return du || (du = 1, Sa = Function.prototype.call), Sa;
}
var Oa, pu;
function Zf() {
  return pu || (pu = 1, Oa = Function.prototype.apply), Oa;
}
var Ea, hu;
function _v() {
  return hu || (hu = 1, Ea = typeof Reflect < "u" && Reflect && Reflect.apply), Ea;
}
var Aa, mu;
function Mv() {
  if (mu) return Aa;
  mu = 1;
  var e = mo(), t = Zf(), n = vs(), r = _v();
  return Aa = r || e.call(n, t), Aa;
}
var Ca, yu;
function ed() {
  if (yu) return Ca;
  yu = 1;
  var e = mo(), t = /* @__PURE__ */ Nn(), n = vs(), r = Mv();
  return Ca = function(a) {
    if (a.length < 1 || typeof a[0] != "function")
      throw new t("a function is required");
    return r(e, n, a);
  }, Ca;
}
var Pa, gu;
function Bv() {
  if (gu) return Pa;
  gu = 1;
  var e = ed(), t = /* @__PURE__ */ Xf(), n;
  try {
    n = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (i) {
    if (!i || typeof i != "object" || !("code" in i) || i.code !== "ERR_PROTO_ACCESS")
      throw i;
  }
  var r = !!n && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), o = Object, a = o.getPrototypeOf;
  return Pa = r && typeof r.get == "function" ? e([r.get]) : typeof a == "function" ? (
    /** @type {import('./get')} */
    function(s) {
      return a(s == null ? s : o(s));
    }
  ) : !1, Pa;
}
var ka, vu;
function jv() {
  if (vu) return ka;
  vu = 1;
  var e = Jf(), t = Qf(), n = /* @__PURE__ */ Bv();
  return ka = e ? function(o) {
    return e(o);
  } : t ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return t(o);
  } : n ? function(o) {
    return n(o);
  } : null, ka;
}
var Ta, bu;
function qv() {
  if (bu) return Ta;
  bu = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, n = mo();
  return Ta = n.call(e, t), Ta;
}
var Da, wu;
function bs() {
  if (wu) return Da;
  wu = 1;
  var e, t = /* @__PURE__ */ Yf(), n = /* @__PURE__ */ vv(), r = /* @__PURE__ */ bv(), o = /* @__PURE__ */ wv(), a = /* @__PURE__ */ xv(), i = /* @__PURE__ */ Sv(), s = /* @__PURE__ */ Nn(), c = /* @__PURE__ */ Ov(), l = /* @__PURE__ */ Ev(), u = /* @__PURE__ */ Av(), f = /* @__PURE__ */ Cv(), p = /* @__PURE__ */ Pv(), h = /* @__PURE__ */ kv(), d = /* @__PURE__ */ Tv(), w = /* @__PURE__ */ $v(), g = Function, y = function(we) {
    try {
      return g('"use strict"; return (' + we + ").constructor;")();
    } catch {
    }
  }, v = /* @__PURE__ */ Xf(), b = /* @__PURE__ */ Rv(), E = function() {
    throw new s();
  }, P = v ? function() {
    try {
      return arguments.callee, E;
    } catch {
      try {
        return v(arguments, "callee").get;
      } catch {
        return E;
      }
    }
  }() : E, $ = Lv()(), F = jv(), B = Qf(), T = Jf(), k = Zf(), _ = vs(), m = {}, S = typeof Uint8Array > "u" || !F ? e : F(Uint8Array), O = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": $ && F ? F([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": m,
    "%AsyncGenerator%": m,
    "%AsyncGeneratorFunction%": m,
    "%AsyncIteratorPrototype%": m,
    "%Atomics%": typeof Atomics > "u" ? e : Atomics,
    "%BigInt%": typeof BigInt > "u" ? e : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? e : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? e : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? e : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": n,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": r,
    "%Float16Array%": typeof Float16Array > "u" ? e : Float16Array,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": g,
    "%GeneratorFunction%": m,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": $ && F ? F(F([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !$ || !F ? e : F((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": v,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": o,
    "%ReferenceError%": a,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !$ || !F ? e : F((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": $ && F ? F(""[Symbol.iterator]()) : e,
    "%Symbol%": $ ? Symbol : e,
    "%SyntaxError%": i,
    "%ThrowTypeError%": P,
    "%TypedArray%": S,
    "%TypeError%": s,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": c,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": _,
    "%Function.prototype.apply%": k,
    "%Object.defineProperty%": b,
    "%Object.getPrototypeOf%": B,
    "%Math.abs%": l,
    "%Math.floor%": u,
    "%Math.max%": f,
    "%Math.min%": p,
    "%Math.pow%": h,
    "%Math.round%": d,
    "%Math.sign%": w,
    "%Reflect.getPrototypeOf%": T
  };
  if (F)
    try {
      null.error;
    } catch (we) {
      var x = F(F(we));
      O["%Error.prototype%"] = x;
    }
  var z = function we(ae) {
    var he;
    if (ae === "%AsyncFunction%")
      he = y("async function () {}");
    else if (ae === "%GeneratorFunction%")
      he = y("function* () {}");
    else if (ae === "%AsyncGeneratorFunction%")
      he = y("async function* () {}");
    else if (ae === "%AsyncGenerator%") {
      var ue = we("%AsyncGeneratorFunction%");
      ue && (he = ue.prototype);
    } else if (ae === "%AsyncIteratorPrototype%") {
      var ge = we("%AsyncGenerator%");
      ge && F && (he = F(ge.prototype));
    }
    return O[ae] = he, he;
  }, M = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  }, I = mo(), H = /* @__PURE__ */ qv(), oe = I.call(_, Array.prototype.concat), Ae = I.call(k, Array.prototype.splice), We = I.call(_, String.prototype.replace), Oe = I.call(_, String.prototype.slice), Le = I.call(_, RegExp.prototype.exec), Ce = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Ne = /\\(\\)?/g, mt = function(ae) {
    var he = Oe(ae, 0, 1), ue = Oe(ae, -1);
    if (he === "%" && ue !== "%")
      throw new i("invalid intrinsic syntax, expected closing `%`");
    if (ue === "%" && he !== "%")
      throw new i("invalid intrinsic syntax, expected opening `%`");
    var ge = [];
    return We(ae, Ce, function(Pe, et, ke, Be) {
      ge[ge.length] = ke ? We(Be, Ne, "$1") : et || Pe;
    }), ge;
  }, yt = function(ae, he) {
    var ue = ae, ge;
    if (H(M, ue) && (ge = M[ue], ue = "%" + ge[0] + "%"), H(O, ue)) {
      var Pe = O[ue];
      if (Pe === m && (Pe = z(ue)), typeof Pe > "u" && !he)
        throw new s("intrinsic " + ae + " exists, but is not available. Please file an issue!");
      return {
        alias: ge,
        name: ue,
        value: Pe
      };
    }
    throw new i("intrinsic " + ae + " does not exist!");
  };
  return Da = function(ae, he) {
    if (typeof ae != "string" || ae.length === 0)
      throw new s("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof he != "boolean")
      throw new s('"allowMissing" argument must be a boolean');
    if (Le(/^%?[^%]*%?$/, ae) === null)
      throw new i("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var ue = mt(ae), ge = ue.length > 0 ? ue[0] : "", Pe = yt("%" + ge + "%", he), et = Pe.name, ke = Pe.value, Be = !1, tt = Pe.alias;
    tt && (ge = tt[0], Ae(ue, oe([0, 1], tt)));
    for (var yn = 1, _t = !0; yn < ue.length; yn += 1) {
      var ot = ue[yn], gn = Oe(ot, 0, 1), vn = Oe(ot, -1);
      if ((gn === '"' || gn === "'" || gn === "`" || vn === '"' || vn === "'" || vn === "`") && gn !== vn)
        throw new i("property names with quotes must have matching quotes");
      if ((ot === "constructor" || !_t) && (Be = !0), ge += "." + ot, et = "%" + ge + "%", H(O, et))
        ke = O[et];
      else if (ke != null) {
        if (!(ot in ke)) {
          if (!he)
            throw new s("base intrinsic for " + ae + " exists, but the property is not available.");
          return;
        }
        if (v && yn + 1 >= ue.length) {
          var bn = v(ke, ot);
          _t = !!bn, _t && "get" in bn && !("originalValue" in bn.get) ? ke = bn.get : ke = ke[ot];
        } else
          _t = H(ke, ot), ke = ke[ot];
        _t && !Be && (O[et] = ke);
      }
    }
    return ke;
  }, Da;
}
var $a, xu;
function td() {
  if (xu) return $a;
  xu = 1;
  var e = /* @__PURE__ */ bs(), t = ed(), n = t([e("%String.prototype.indexOf%")]);
  return $a = function(o, a) {
    var i = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(o, !!a)
    );
    return typeof i == "function" && n(o, ".prototype.") > -1 ? t(
      /** @type {const} */
      [i]
    ) : i;
  }, $a;
}
var Fa, Su;
function nd() {
  if (Su) return Fa;
  Su = 1;
  var e = /* @__PURE__ */ bs(), t = /* @__PURE__ */ td(), n = /* @__PURE__ */ ho(), r = /* @__PURE__ */ Nn(), o = e("%Map%", !0), a = t("Map.prototype.get", !0), i = t("Map.prototype.set", !0), s = t("Map.prototype.has", !0), c = t("Map.prototype.delete", !0), l = t("Map.prototype.size", !0);
  return Fa = !!o && /** @type {Exclude<import('.'), false>} */
  function() {
    var f, p = {
      assert: function(h) {
        if (!p.has(h))
          throw new r("Side channel does not contain " + n(h));
      },
      delete: function(h) {
        if (f) {
          var d = c(f, h);
          return l(f) === 0 && (f = void 0), d;
        }
        return !1;
      },
      get: function(h) {
        if (f)
          return a(f, h);
      },
      has: function(h) {
        return f ? s(f, h) : !1;
      },
      set: function(h, d) {
        f || (f = new o()), i(f, h, d);
      }
    };
    return p;
  }, Fa;
}
var Ra, Ou;
function Uv() {
  if (Ou) return Ra;
  Ou = 1;
  var e = /* @__PURE__ */ bs(), t = /* @__PURE__ */ td(), n = /* @__PURE__ */ ho(), r = nd(), o = /* @__PURE__ */ Nn(), a = e("%WeakMap%", !0), i = t("WeakMap.prototype.get", !0), s = t("WeakMap.prototype.set", !0), c = t("WeakMap.prototype.has", !0), l = t("WeakMap.prototype.delete", !0);
  return Ra = a ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var f, p, h = {
        assert: function(d) {
          if (!h.has(d))
            throw new o("Side channel does not contain " + n(d));
        },
        delete: function(d) {
          if (a && d && (typeof d == "object" || typeof d == "function")) {
            if (f)
              return l(f, d);
          } else if (r && p)
            return p.delete(d);
          return !1;
        },
        get: function(d) {
          return a && d && (typeof d == "object" || typeof d == "function") && f ? i(f, d) : p && p.get(d);
        },
        has: function(d) {
          return a && d && (typeof d == "object" || typeof d == "function") && f ? c(f, d) : !!p && p.has(d);
        },
        set: function(d, w) {
          a && d && (typeof d == "object" || typeof d == "function") ? (f || (f = new a()), s(f, d, w)) : r && (p || (p = r()), p.set(d, w));
        }
      };
      return h;
    }
  ) : r, Ra;
}
var Ia, Eu;
function zv() {
  if (Eu) return Ia;
  Eu = 1;
  var e = /* @__PURE__ */ Nn(), t = /* @__PURE__ */ ho(), n = gv(), r = nd(), o = Uv(), a = o || r || n;
  return Ia = function() {
    var s, c = {
      assert: function(l) {
        if (!c.has(l))
          throw new e("Side channel does not contain " + t(l));
      },
      delete: function(l) {
        return !!s && s.delete(l);
      },
      get: function(l) {
        return s && s.get(l);
      },
      has: function(l) {
        return !!s && s.has(l);
      },
      set: function(l, u) {
        s || (s = a()), s.set(l, u);
      }
    };
    return c;
  }, Ia;
}
var La, Au;
function ws() {
  if (Au) return La;
  Au = 1;
  var e = String.prototype.replace, t = /%20/g, n = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return La = {
    default: n.RFC3986,
    formatters: {
      RFC1738: function(r) {
        return e.call(r, t, "+");
      },
      RFC3986: function(r) {
        return String(r);
      }
    },
    RFC1738: n.RFC1738,
    RFC3986: n.RFC3986
  }, La;
}
var Na, Cu;
function rd() {
  if (Cu) return Na;
  Cu = 1;
  var e = /* @__PURE__ */ ws(), t = Object.prototype.hasOwnProperty, n = Array.isArray, r = function() {
    for (var g = [], y = 0; y < 256; ++y)
      g.push("%" + ((y < 16 ? "0" : "") + y.toString(16)).toUpperCase());
    return g;
  }(), o = function(y) {
    for (; y.length > 1; ) {
      var v = y.pop(), b = v.obj[v.prop];
      if (n(b)) {
        for (var E = [], P = 0; P < b.length; ++P)
          typeof b[P] < "u" && E.push(b[P]);
        v.obj[v.prop] = E;
      }
    }
  }, a = function(y, v) {
    for (var b = v && v.plainObjects ? { __proto__: null } : {}, E = 0; E < y.length; ++E)
      typeof y[E] < "u" && (b[E] = y[E]);
    return b;
  }, i = function g(y, v, b) {
    if (!v)
      return y;
    if (typeof v != "object" && typeof v != "function") {
      if (n(y))
        y.push(v);
      else if (y && typeof y == "object")
        (b && (b.plainObjects || b.allowPrototypes) || !t.call(Object.prototype, v)) && (y[v] = !0);
      else
        return [y, v];
      return y;
    }
    if (!y || typeof y != "object")
      return [y].concat(v);
    var E = y;
    return n(y) && !n(v) && (E = a(y, b)), n(y) && n(v) ? (v.forEach(function(P, $) {
      if (t.call(y, $)) {
        var F = y[$];
        F && typeof F == "object" && P && typeof P == "object" ? y[$] = g(F, P, b) : y.push(P);
      } else
        y[$] = P;
    }), y) : Object.keys(v).reduce(function(P, $) {
      var F = v[$];
      return t.call(P, $) ? P[$] = g(P[$], F, b) : P[$] = F, P;
    }, E);
  }, s = function(y, v) {
    return Object.keys(v).reduce(function(b, E) {
      return b[E] = v[E], b;
    }, y);
  }, c = function(g, y, v) {
    var b = g.replace(/\+/g, " ");
    if (v === "iso-8859-1")
      return b.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(b);
    } catch {
      return b;
    }
  }, l = 1024, u = function(y, v, b, E, P) {
    if (y.length === 0)
      return y;
    var $ = y;
    if (typeof y == "symbol" ? $ = Symbol.prototype.toString.call(y) : typeof y != "string" && ($ = String(y)), b === "iso-8859-1")
      return escape($).replace(/%u[0-9a-f]{4}/gi, function(S) {
        return "%26%23" + parseInt(S.slice(2), 16) + "%3B";
      });
    for (var F = "", B = 0; B < $.length; B += l) {
      for (var T = $.length >= l ? $.slice(B, B + l) : $, k = [], _ = 0; _ < T.length; ++_) {
        var m = T.charCodeAt(_);
        if (m === 45 || m === 46 || m === 95 || m === 126 || m >= 48 && m <= 57 || m >= 65 && m <= 90 || m >= 97 && m <= 122 || P === e.RFC1738 && (m === 40 || m === 41)) {
          k[k.length] = T.charAt(_);
          continue;
        }
        if (m < 128) {
          k[k.length] = r[m];
          continue;
        }
        if (m < 2048) {
          k[k.length] = r[192 | m >> 6] + r[128 | m & 63];
          continue;
        }
        if (m < 55296 || m >= 57344) {
          k[k.length] = r[224 | m >> 12] + r[128 | m >> 6 & 63] + r[128 | m & 63];
          continue;
        }
        _ += 1, m = 65536 + ((m & 1023) << 10 | T.charCodeAt(_) & 1023), k[k.length] = r[240 | m >> 18] + r[128 | m >> 12 & 63] + r[128 | m >> 6 & 63] + r[128 | m & 63];
      }
      F += k.join("");
    }
    return F;
  }, f = function(y) {
    for (var v = [{ obj: { o: y }, prop: "o" }], b = [], E = 0; E < v.length; ++E)
      for (var P = v[E], $ = P.obj[P.prop], F = Object.keys($), B = 0; B < F.length; ++B) {
        var T = F[B], k = $[T];
        typeof k == "object" && k !== null && b.indexOf(k) === -1 && (v.push({ obj: $, prop: T }), b.push(k));
      }
    return o(v), y;
  }, p = function(y) {
    return Object.prototype.toString.call(y) === "[object RegExp]";
  }, h = function(y) {
    return !y || typeof y != "object" ? !1 : !!(y.constructor && y.constructor.isBuffer && y.constructor.isBuffer(y));
  }, d = function(y, v) {
    return [].concat(y, v);
  }, w = function(y, v) {
    if (n(y)) {
      for (var b = [], E = 0; E < y.length; E += 1)
        b.push(v(y[E]));
      return b;
    }
    return v(y);
  };
  return Na = {
    arrayToObject: a,
    assign: s,
    combine: d,
    compact: f,
    decode: c,
    encode: u,
    isBuffer: h,
    isRegExp: p,
    maybeMap: w,
    merge: i
  }, Na;
}
var _a, Pu;
function Vv() {
  if (Pu) return _a;
  Pu = 1;
  var e = zv(), t = /* @__PURE__ */ rd(), n = /* @__PURE__ */ ws(), r = Object.prototype.hasOwnProperty, o = {
    brackets: function(g) {
      return g + "[]";
    },
    comma: "comma",
    indices: function(g, y) {
      return g + "[" + y + "]";
    },
    repeat: function(g) {
      return g;
    }
  }, a = Array.isArray, i = Array.prototype.push, s = function(w, g) {
    i.apply(w, a(g) ? g : [g]);
  }, c = Date.prototype.toISOString, l = n.default, u = {
    addQueryPrefix: !1,
    allowDots: !1,
    allowEmptyArrays: !1,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: !1,
    commaRoundTrip: !1,
    delimiter: "&",
    encode: !0,
    encodeDotInKeys: !1,
    encoder: t.encode,
    encodeValuesOnly: !1,
    filter: void 0,
    format: l,
    formatter: n.formatters[l],
    // deprecated
    indices: !1,
    serializeDate: function(g) {
      return c.call(g);
    },
    skipNulls: !1,
    strictNullHandling: !1
  }, f = function(g) {
    return typeof g == "string" || typeof g == "number" || typeof g == "boolean" || typeof g == "symbol" || typeof g == "bigint";
  }, p = {}, h = function w(g, y, v, b, E, P, $, F, B, T, k, _, m, S, O, x, z, M) {
    for (var I = g, H = M, oe = 0, Ae = !1; (H = H.get(p)) !== void 0 && !Ae; ) {
      var We = H.get(g);
      if (oe += 1, typeof We < "u") {
        if (We === oe)
          throw new RangeError("Cyclic object value");
        Ae = !0;
      }
      typeof H.get(p) > "u" && (oe = 0);
    }
    if (typeof T == "function" ? I = T(y, I) : I instanceof Date ? I = m(I) : v === "comma" && a(I) && (I = t.maybeMap(I, function(et) {
      return et instanceof Date ? m(et) : et;
    })), I === null) {
      if (P)
        return B && !x ? B(y, u.encoder, z, "key", S) : y;
      I = "";
    }
    if (f(I) || t.isBuffer(I)) {
      if (B) {
        var Oe = x ? y : B(y, u.encoder, z, "key", S);
        return [O(Oe) + "=" + O(B(I, u.encoder, z, "value", S))];
      }
      return [O(y) + "=" + O(String(I))];
    }
    var Le = [];
    if (typeof I > "u")
      return Le;
    var Ce;
    if (v === "comma" && a(I))
      x && B && (I = t.maybeMap(I, B)), Ce = [{ value: I.length > 0 ? I.join(",") || null : void 0 }];
    else if (a(T))
      Ce = T;
    else {
      var Ne = Object.keys(I);
      Ce = k ? Ne.sort(k) : Ne;
    }
    var mt = F ? String(y).replace(/\./g, "%2E") : String(y), yt = b && a(I) && I.length === 1 ? mt + "[]" : mt;
    if (E && a(I) && I.length === 0)
      return yt + "[]";
    for (var we = 0; we < Ce.length; ++we) {
      var ae = Ce[we], he = typeof ae == "object" && ae && typeof ae.value < "u" ? ae.value : I[ae];
      if (!($ && he === null)) {
        var ue = _ && F ? String(ae).replace(/\./g, "%2E") : String(ae), ge = a(I) ? typeof v == "function" ? v(yt, ue) : yt : yt + (_ ? "." + ue : "[" + ue + "]");
        M.set(g, oe);
        var Pe = e();
        Pe.set(p, M), s(Le, w(
          he,
          ge,
          v,
          b,
          E,
          P,
          $,
          F,
          v === "comma" && x && a(I) ? null : B,
          T,
          k,
          _,
          m,
          S,
          O,
          x,
          z,
          Pe
        ));
      }
    }
    return Le;
  }, d = function(g) {
    if (!g)
      return u;
    if (typeof g.allowEmptyArrays < "u" && typeof g.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof g.encodeDotInKeys < "u" && typeof g.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (g.encoder !== null && typeof g.encoder < "u" && typeof g.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var y = g.charset || u.charset;
    if (typeof g.charset < "u" && g.charset !== "utf-8" && g.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var v = n.default;
    if (typeof g.format < "u") {
      if (!r.call(n.formatters, g.format))
        throw new TypeError("Unknown format option provided.");
      v = g.format;
    }
    var b = n.formatters[v], E = u.filter;
    (typeof g.filter == "function" || a(g.filter)) && (E = g.filter);
    var P;
    if (g.arrayFormat in o ? P = g.arrayFormat : "indices" in g ? P = g.indices ? "indices" : "repeat" : P = u.arrayFormat, "commaRoundTrip" in g && typeof g.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var $ = typeof g.allowDots > "u" ? g.encodeDotInKeys === !0 ? !0 : u.allowDots : !!g.allowDots;
    return {
      addQueryPrefix: typeof g.addQueryPrefix == "boolean" ? g.addQueryPrefix : u.addQueryPrefix,
      allowDots: $,
      allowEmptyArrays: typeof g.allowEmptyArrays == "boolean" ? !!g.allowEmptyArrays : u.allowEmptyArrays,
      arrayFormat: P,
      charset: y,
      charsetSentinel: typeof g.charsetSentinel == "boolean" ? g.charsetSentinel : u.charsetSentinel,
      commaRoundTrip: !!g.commaRoundTrip,
      delimiter: typeof g.delimiter > "u" ? u.delimiter : g.delimiter,
      encode: typeof g.encode == "boolean" ? g.encode : u.encode,
      encodeDotInKeys: typeof g.encodeDotInKeys == "boolean" ? g.encodeDotInKeys : u.encodeDotInKeys,
      encoder: typeof g.encoder == "function" ? g.encoder : u.encoder,
      encodeValuesOnly: typeof g.encodeValuesOnly == "boolean" ? g.encodeValuesOnly : u.encodeValuesOnly,
      filter: E,
      format: v,
      formatter: b,
      serializeDate: typeof g.serializeDate == "function" ? g.serializeDate : u.serializeDate,
      skipNulls: typeof g.skipNulls == "boolean" ? g.skipNulls : u.skipNulls,
      sort: typeof g.sort == "function" ? g.sort : null,
      strictNullHandling: typeof g.strictNullHandling == "boolean" ? g.strictNullHandling : u.strictNullHandling
    };
  };
  return _a = function(w, g) {
    var y = w, v = d(g), b, E;
    typeof v.filter == "function" ? (E = v.filter, y = E("", y)) : a(v.filter) && (E = v.filter, b = E);
    var P = [];
    if (typeof y != "object" || y === null)
      return "";
    var $ = o[v.arrayFormat], F = $ === "comma" && v.commaRoundTrip;
    b || (b = Object.keys(y)), v.sort && b.sort(v.sort);
    for (var B = e(), T = 0; T < b.length; ++T) {
      var k = b[T], _ = y[k];
      v.skipNulls && _ === null || s(P, h(
        _,
        k,
        $,
        F,
        v.allowEmptyArrays,
        v.strictNullHandling,
        v.skipNulls,
        v.encodeDotInKeys,
        v.encode ? v.encoder : null,
        v.filter,
        v.sort,
        v.allowDots,
        v.serializeDate,
        v.format,
        v.formatter,
        v.encodeValuesOnly,
        v.charset,
        B
      ));
    }
    var m = P.join(v.delimiter), S = v.addQueryPrefix === !0 ? "?" : "";
    return v.charsetSentinel && (v.charset === "iso-8859-1" ? S += "utf8=%26%2310003%3B&" : S += "utf8=%E2%9C%93&"), m.length > 0 ? S + m : "";
  }, _a;
}
var Ma, ku;
function Hv() {
  if (ku) return Ma;
  ku = 1;
  var e = /* @__PURE__ */ rd(), t = Object.prototype.hasOwnProperty, n = Array.isArray, r = {
    allowDots: !1,
    allowEmptyArrays: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decodeDotInKeys: !1,
    decoder: e.decode,
    delimiter: "&",
    depth: 5,
    duplicates: "combine",
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictDepth: !1,
    strictNullHandling: !1,
    throwOnLimitExceeded: !1
  }, o = function(p) {
    return p.replace(/&#(\d+);/g, function(h, d) {
      return String.fromCharCode(parseInt(d, 10));
    });
  }, a = function(p, h, d) {
    if (p && typeof p == "string" && h.comma && p.indexOf(",") > -1)
      return p.split(",");
    if (h.throwOnLimitExceeded && d >= h.arrayLimit)
      throw new RangeError("Array limit exceeded. Only " + h.arrayLimit + " element" + (h.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    return p;
  }, i = "utf8=%26%2310003%3B", s = "utf8=%E2%9C%93", c = function(h, d) {
    var w = { __proto__: null }, g = d.ignoreQueryPrefix ? h.replace(/^\?/, "") : h;
    g = g.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var y = d.parameterLimit === 1 / 0 ? void 0 : d.parameterLimit, v = g.split(
      d.delimiter,
      d.throwOnLimitExceeded ? y + 1 : y
    );
    if (d.throwOnLimitExceeded && v.length > y)
      throw new RangeError("Parameter limit exceeded. Only " + y + " parameter" + (y === 1 ? "" : "s") + " allowed.");
    var b = -1, E, P = d.charset;
    if (d.charsetSentinel)
      for (E = 0; E < v.length; ++E)
        v[E].indexOf("utf8=") === 0 && (v[E] === s ? P = "utf-8" : v[E] === i && (P = "iso-8859-1"), b = E, E = v.length);
    for (E = 0; E < v.length; ++E)
      if (E !== b) {
        var $ = v[E], F = $.indexOf("]="), B = F === -1 ? $.indexOf("=") : F + 1, T, k;
        B === -1 ? (T = d.decoder($, r.decoder, P, "key"), k = d.strictNullHandling ? null : "") : (T = d.decoder($.slice(0, B), r.decoder, P, "key"), k = e.maybeMap(
          a(
            $.slice(B + 1),
            d,
            n(w[T]) ? w[T].length : 0
          ),
          function(m) {
            return d.decoder(m, r.decoder, P, "value");
          }
        )), k && d.interpretNumericEntities && P === "iso-8859-1" && (k = o(String(k))), $.indexOf("[]=") > -1 && (k = n(k) ? [k] : k);
        var _ = t.call(w, T);
        _ && d.duplicates === "combine" ? w[T] = e.combine(w[T], k) : (!_ || d.duplicates === "last") && (w[T] = k);
      }
    return w;
  }, l = function(p, h, d, w) {
    var g = 0;
    if (p.length > 0 && p[p.length - 1] === "[]") {
      var y = p.slice(0, -1).join("");
      g = Array.isArray(h) && h[y] ? h[y].length : 0;
    }
    for (var v = w ? h : a(h, d, g), b = p.length - 1; b >= 0; --b) {
      var E, P = p[b];
      if (P === "[]" && d.parseArrays)
        E = d.allowEmptyArrays && (v === "" || d.strictNullHandling && v === null) ? [] : e.combine([], v);
      else {
        E = d.plainObjects ? { __proto__: null } : {};
        var $ = P.charAt(0) === "[" && P.charAt(P.length - 1) === "]" ? P.slice(1, -1) : P, F = d.decodeDotInKeys ? $.replace(/%2E/g, ".") : $, B = parseInt(F, 10);
        !d.parseArrays && F === "" ? E = { 0: v } : !isNaN(B) && P !== F && String(B) === F && B >= 0 && d.parseArrays && B <= d.arrayLimit ? (E = [], E[B] = v) : F !== "__proto__" && (E[F] = v);
      }
      v = E;
    }
    return v;
  }, u = function(h, d, w, g) {
    if (h) {
      var y = w.allowDots ? h.replace(/\.([^.[]+)/g, "[$1]") : h, v = /(\[[^[\]]*])/, b = /(\[[^[\]]*])/g, E = w.depth > 0 && v.exec(y), P = E ? y.slice(0, E.index) : y, $ = [];
      if (P) {
        if (!w.plainObjects && t.call(Object.prototype, P) && !w.allowPrototypes)
          return;
        $.push(P);
      }
      for (var F = 0; w.depth > 0 && (E = b.exec(y)) !== null && F < w.depth; ) {
        if (F += 1, !w.plainObjects && t.call(Object.prototype, E[1].slice(1, -1)) && !w.allowPrototypes)
          return;
        $.push(E[1]);
      }
      if (E) {
        if (w.strictDepth === !0)
          throw new RangeError("Input depth exceeded depth option of " + w.depth + " and strictDepth is true");
        $.push("[" + y.slice(E.index) + "]");
      }
      return l($, d, w, g);
    }
  }, f = function(h) {
    if (!h)
      return r;
    if (typeof h.allowEmptyArrays < "u" && typeof h.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof h.decodeDotInKeys < "u" && typeof h.decodeDotInKeys != "boolean")
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (h.decoder !== null && typeof h.decoder < "u" && typeof h.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof h.charset < "u" && h.charset !== "utf-8" && h.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    if (typeof h.throwOnLimitExceeded < "u" && typeof h.throwOnLimitExceeded != "boolean")
      throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
    var d = typeof h.charset > "u" ? r.charset : h.charset, w = typeof h.duplicates > "u" ? r.duplicates : h.duplicates;
    if (w !== "combine" && w !== "first" && w !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var g = typeof h.allowDots > "u" ? h.decodeDotInKeys === !0 ? !0 : r.allowDots : !!h.allowDots;
    return {
      allowDots: g,
      allowEmptyArrays: typeof h.allowEmptyArrays == "boolean" ? !!h.allowEmptyArrays : r.allowEmptyArrays,
      allowPrototypes: typeof h.allowPrototypes == "boolean" ? h.allowPrototypes : r.allowPrototypes,
      allowSparse: typeof h.allowSparse == "boolean" ? h.allowSparse : r.allowSparse,
      arrayLimit: typeof h.arrayLimit == "number" ? h.arrayLimit : r.arrayLimit,
      charset: d,
      charsetSentinel: typeof h.charsetSentinel == "boolean" ? h.charsetSentinel : r.charsetSentinel,
      comma: typeof h.comma == "boolean" ? h.comma : r.comma,
      decodeDotInKeys: typeof h.decodeDotInKeys == "boolean" ? h.decodeDotInKeys : r.decodeDotInKeys,
      decoder: typeof h.decoder == "function" ? h.decoder : r.decoder,
      delimiter: typeof h.delimiter == "string" || e.isRegExp(h.delimiter) ? h.delimiter : r.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof h.depth == "number" || h.depth === !1 ? +h.depth : r.depth,
      duplicates: w,
      ignoreQueryPrefix: h.ignoreQueryPrefix === !0,
      interpretNumericEntities: typeof h.interpretNumericEntities == "boolean" ? h.interpretNumericEntities : r.interpretNumericEntities,
      parameterLimit: typeof h.parameterLimit == "number" ? h.parameterLimit : r.parameterLimit,
      parseArrays: h.parseArrays !== !1,
      plainObjects: typeof h.plainObjects == "boolean" ? h.plainObjects : r.plainObjects,
      strictDepth: typeof h.strictDepth == "boolean" ? !!h.strictDepth : r.strictDepth,
      strictNullHandling: typeof h.strictNullHandling == "boolean" ? h.strictNullHandling : r.strictNullHandling,
      throwOnLimitExceeded: typeof h.throwOnLimitExceeded == "boolean" ? h.throwOnLimitExceeded : !1
    };
  };
  return Ma = function(p, h) {
    var d = f(h);
    if (p === "" || p === null || typeof p > "u")
      return d.plainObjects ? { __proto__: null } : {};
    for (var w = typeof p == "string" ? c(p, d) : p, g = d.plainObjects ? { __proto__: null } : {}, y = Object.keys(w), v = 0; v < y.length; ++v) {
      var b = y[v], E = u(b, w[b], d, typeof p == "string");
      g = e.merge(g, E, d);
    }
    return d.allowSparse === !0 ? g : e.compact(g);
  }, Ma;
}
var Ba, Tu;
function Wv() {
  if (Tu) return Ba;
  Tu = 1;
  var e = /* @__PURE__ */ Vv(), t = /* @__PURE__ */ Hv(), n = /* @__PURE__ */ ws();
  return Ba = {
    formats: n,
    parse: t,
    stringify: e
  }, Ba;
}
var Du = /* @__PURE__ */ Wv();
function od(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Kv } = Object.prototype, { getPrototypeOf: xs } = Object, { iterator: yo, toStringTag: ad } = Symbol, go = /* @__PURE__ */ ((e) => (t) => {
  const n = Kv.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), dt = (e) => (e = e.toLowerCase(), (t) => go(t) === e), vo = (e) => (t) => typeof t === e, { isArray: _n } = Array, sr = vo("undefined");
function Gv(e) {
  return e !== null && !sr(e) && e.constructor !== null && !sr(e.constructor) && Ve(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const id = dt("ArrayBuffer");
function Yv(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && id(e.buffer), t;
}
const Xv = vo("string"), Ve = vo("function"), sd = vo("number"), bo = (e) => e !== null && typeof e == "object", Jv = (e) => e === !0 || e === !1, Mr = (e) => {
  if (go(e) !== "object")
    return !1;
  const t = xs(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(ad in e) && !(yo in e);
}, Qv = dt("Date"), Zv = dt("File"), e0 = dt("Blob"), t0 = dt("FileList"), n0 = (e) => bo(e) && Ve(e.pipe), r0 = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ve(e.append) && ((t = go(e)) === "formdata" || // detect form-data instance
  t === "object" && Ve(e.toString) && e.toString() === "[object FormData]"));
}, o0 = dt("URLSearchParams"), [a0, i0, s0, l0] = ["ReadableStream", "Request", "Response", "Headers"].map(dt), u0 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function yr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), _n(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = a.length;
    let s;
    for (r = 0; r < i; r++)
      s = a[r], t.call(null, e[s], s, e);
  }
}
function ld(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const on = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ud = (e) => !sr(e) && e !== on;
function $i() {
  const { caseless: e } = ud(this) && this || {}, t = {}, n = (r, o) => {
    const a = e && ld(t, o) || o;
    Mr(t[a]) && Mr(r) ? t[a] = $i(t[a], r) : Mr(r) ? t[a] = $i({}, r) : _n(r) ? t[a] = r.slice() : t[a] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && yr(arguments[r], n);
  return t;
}
const c0 = (e, t, n, { allOwnKeys: r } = {}) => (yr(t, (o, a) => {
  n && Ve(o) ? e[a] = od(o, n) : e[a] = o;
}, { allOwnKeys: r }), e), f0 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), d0 = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, p0 = (e, t, n, r) => {
  let o, a, i;
  const s = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      i = o[a], (!r || r(i, e, t)) && !s[i] && (t[i] = e[i], s[i] = !0);
    e = n !== !1 && xs(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, h0 = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, m0 = (e) => {
  if (!e) return null;
  if (_n(e)) return e;
  let t = e.length;
  if (!sd(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, y0 = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && xs(Uint8Array)), g0 = (e, t) => {
  const r = (e && e[yo]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, v0 = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, b0 = dt("HTMLFormElement"), w0 = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), $u = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), x0 = dt("RegExp"), cd = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  yr(n, (o, a) => {
    let i;
    (i = t(o, a, e)) !== !1 && (r[a] = i || o);
  }), Object.defineProperties(e, r);
}, S0 = (e) => {
  cd(e, (t, n) => {
    if (Ve(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (Ve(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, O0 = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((a) => {
      n[a] = !0;
    });
  };
  return _n(e) ? r(e) : r(String(e).split(t)), n;
}, E0 = () => {
}, A0 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function C0(e) {
  return !!(e && Ve(e.append) && e[ad] === "FormData" && e[yo]);
}
const P0 = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (bo(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const a = _n(r) ? [] : {};
        return yr(r, (i, s) => {
          const c = n(i, o + 1);
          !sr(c) && (a[s] = c);
        }), t[o] = void 0, a;
      }
    }
    return r;
  };
  return n(e, 0);
}, k0 = dt("AsyncFunction"), T0 = (e) => e && (bo(e) || Ve(e)) && Ve(e.then) && Ve(e.catch), fd = ((e, t) => e ? setImmediate : t ? ((n, r) => (on.addEventListener("message", ({ source: o, data: a }) => {
  o === on && a === n && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), on.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  Ve(on.postMessage)
), D0 = typeof queueMicrotask < "u" ? queueMicrotask.bind(on) : typeof process < "u" && process.nextTick || fd, $0 = (e) => e != null && Ve(e[yo]), L = {
  isArray: _n,
  isArrayBuffer: id,
  isBuffer: Gv,
  isFormData: r0,
  isArrayBufferView: Yv,
  isString: Xv,
  isNumber: sd,
  isBoolean: Jv,
  isObject: bo,
  isPlainObject: Mr,
  isReadableStream: a0,
  isRequest: i0,
  isResponse: s0,
  isHeaders: l0,
  isUndefined: sr,
  isDate: Qv,
  isFile: Zv,
  isBlob: e0,
  isRegExp: x0,
  isFunction: Ve,
  isStream: n0,
  isURLSearchParams: o0,
  isTypedArray: y0,
  isFileList: t0,
  forEach: yr,
  merge: $i,
  extend: c0,
  trim: u0,
  stripBOM: f0,
  inherits: d0,
  toFlatObject: p0,
  kindOf: go,
  kindOfTest: dt,
  endsWith: h0,
  toArray: m0,
  forEachEntry: g0,
  matchAll: v0,
  isHTMLForm: b0,
  hasOwnProperty: $u,
  hasOwnProp: $u,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: cd,
  freezeMethods: S0,
  toObjectSet: O0,
  toCamelCase: w0,
  noop: E0,
  toFiniteNumber: A0,
  findKey: ld,
  global: on,
  isContextDefined: ud,
  isSpecCompliantForm: C0,
  toJSONObject: P0,
  isAsyncFn: k0,
  isThenable: T0,
  setImmediate: fd,
  asap: D0,
  isIterable: $0
};
function ne(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
L.inherits(ne, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: L.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const dd = ne.prototype, pd = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  pd[e] = { value: e };
});
Object.defineProperties(ne, pd);
Object.defineProperty(dd, "isAxiosError", { value: !0 });
ne.from = (e, t, n, r, o, a) => {
  const i = Object.create(dd);
  return L.toFlatObject(e, i, function(c) {
    return c !== Error.prototype;
  }, (s) => s !== "isAxiosError"), ne.call(i, e.message, t, n, r, o), i.cause = e, i.name = e.name, a && Object.assign(i, a), i;
};
const F0 = null;
function Fi(e) {
  return L.isPlainObject(e) || L.isArray(e);
}
function hd(e) {
  return L.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Fu(e, t, n) {
  return e ? e.concat(t).map(function(o, a) {
    return o = hd(o), !n && a ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function R0(e) {
  return L.isArray(e) && !e.some(Fi);
}
const I0 = L.toFlatObject(L, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function wo(e, t, n) {
  if (!L.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = L.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(w, g) {
    return !L.isUndefined(g[w]);
  });
  const r = n.metaTokens, o = n.visitor || u, a = n.dots, i = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && L.isSpecCompliantForm(t);
  if (!L.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(d) {
    if (d === null) return "";
    if (L.isDate(d))
      return d.toISOString();
    if (!c && L.isBlob(d))
      throw new ne("Blob is not supported. Use a Buffer instead.");
    return L.isArrayBuffer(d) || L.isTypedArray(d) ? c && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function u(d, w, g) {
    let y = d;
    if (d && !g && typeof d == "object") {
      if (L.endsWith(w, "{}"))
        w = r ? w : w.slice(0, -2), d = JSON.stringify(d);
      else if (L.isArray(d) && R0(d) || (L.isFileList(d) || L.endsWith(w, "[]")) && (y = L.toArray(d)))
        return w = hd(w), y.forEach(function(b, E) {
          !(L.isUndefined(b) || b === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Fu([w], E, a) : i === null ? w : w + "[]",
            l(b)
          );
        }), !1;
    }
    return Fi(d) ? !0 : (t.append(Fu(g, w, a), l(d)), !1);
  }
  const f = [], p = Object.assign(I0, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: Fi
  });
  function h(d, w) {
    if (!L.isUndefined(d)) {
      if (f.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      f.push(d), L.forEach(d, function(y, v) {
        (!(L.isUndefined(y) || y === null) && o.call(
          t,
          y,
          L.isString(v) ? v.trim() : v,
          w,
          p
        )) === !0 && h(y, w ? w.concat(v) : [v]);
      }), f.pop();
    }
  }
  if (!L.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function Ru(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Ss(e, t) {
  this._pairs = [], e && wo(e, this, t);
}
const md = Ss.prototype;
md.append = function(t, n) {
  this._pairs.push([t, n]);
};
md.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Ru);
  } : Ru;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function L0(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function yd(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || L0;
  L.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let a;
  if (o ? a = o(t, n) : a = L.isURLSearchParams(t) ? t.toString() : new Ss(t, n).toString(r), a) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class Iu {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    L.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const gd = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, N0 = typeof URLSearchParams < "u" ? URLSearchParams : Ss, _0 = typeof FormData < "u" ? FormData : null, M0 = typeof Blob < "u" ? Blob : null, B0 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: N0,
    FormData: _0,
    Blob: M0
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Os = typeof window < "u" && typeof document < "u", Ri = typeof navigator == "object" && navigator || void 0, j0 = Os && (!Ri || ["ReactNative", "NativeScript", "NS"].indexOf(Ri.product) < 0), q0 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", U0 = Os && window.location.href || "http://localhost", z0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Os,
  hasStandardBrowserEnv: j0,
  hasStandardBrowserWebWorkerEnv: q0,
  navigator: Ri,
  origin: U0
}, Symbol.toStringTag, { value: "Module" })), $e = {
  ...z0,
  ...B0
};
function V0(e, t) {
  return wo(e, new $e.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, a) {
      return $e.isNode && L.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function H0(e) {
  return L.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function W0(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let a;
  for (r = 0; r < o; r++)
    a = n[r], t[a] = e[a];
  return t;
}
function vd(e) {
  function t(n, r, o, a) {
    let i = n[a++];
    if (i === "__proto__") return !0;
    const s = Number.isFinite(+i), c = a >= n.length;
    return i = !i && L.isArray(o) ? o.length : i, c ? (L.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r, !s) : ((!o[i] || !L.isObject(o[i])) && (o[i] = []), t(n, r, o[i], a) && L.isArray(o[i]) && (o[i] = W0(o[i])), !s);
  }
  if (L.isFormData(e) && L.isFunction(e.entries)) {
    const n = {};
    return L.forEachEntry(e, (r, o) => {
      t(H0(r), o, n, 0);
    }), n;
  }
  return null;
}
function K0(e, t, n) {
  if (L.isString(e))
    try {
      return (t || JSON.parse)(e), L.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const gr = {
  transitional: gd,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, a = L.isObject(t);
    if (a && L.isHTMLForm(t) && (t = new FormData(t)), L.isFormData(t))
      return o ? JSON.stringify(vd(t)) : t;
    if (L.isArrayBuffer(t) || L.isBuffer(t) || L.isStream(t) || L.isFile(t) || L.isBlob(t) || L.isReadableStream(t))
      return t;
    if (L.isArrayBufferView(t))
      return t.buffer;
    if (L.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (a) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return V0(t, this.formSerializer).toString();
      if ((s = L.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return wo(
          s ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return a || o ? (n.setContentType("application/json", !1), K0(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || gr.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (L.isResponse(t) || L.isReadableStream(t))
      return t;
    if (t && L.isString(t) && (r && !this.responseType || o)) {
      const i = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (s) {
        if (i)
          throw s.name === "SyntaxError" ? ne.from(s, ne.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: $e.classes.FormData,
    Blob: $e.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
L.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  gr.headers[e] = {};
});
const G0 = L.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Y0 = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || t[n] && G0[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Lu = Symbol("internals");
function Hn(e) {
  return e && String(e).trim().toLowerCase();
}
function Br(e) {
  return e === !1 || e == null ? e : L.isArray(e) ? e.map(Br) : String(e);
}
function X0(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const J0 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ja(e, t, n, r, o) {
  if (L.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!L.isString(t)) {
    if (L.isString(r))
      return t.indexOf(r) !== -1;
    if (L.isRegExp(r))
      return r.test(t);
  }
}
function Q0(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Z0(e, t) {
  const n = L.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, a, i) {
        return this[r].call(this, t, o, a, i);
      },
      configurable: !0
    });
  });
}
let He = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function a(s, c, l) {
      const u = Hn(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = L.findKey(o, u);
      (!f || o[f] === void 0 || l === !0 || l === void 0 && o[f] !== !1) && (o[f || c] = Br(s));
    }
    const i = (s, c) => L.forEach(s, (l, u) => a(l, u, c));
    if (L.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (L.isString(t) && (t = t.trim()) && !J0(t))
      i(Y0(t), n);
    else if (L.isObject(t) && L.isIterable(t)) {
      let s = {}, c, l;
      for (const u of t) {
        if (!L.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        s[l = u[0]] = (c = s[l]) ? L.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1];
      }
      i(s, n);
    } else
      t != null && a(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Hn(t), t) {
      const r = L.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return X0(o);
        if (L.isFunction(n))
          return n.call(this, o, r);
        if (L.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Hn(t), t) {
      const r = L.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ja(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function a(i) {
      if (i = Hn(i), i) {
        const s = L.findKey(r, i);
        s && (!n || ja(r, r[s], s, n)) && (delete r[s], o = !0);
      }
    }
    return L.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || ja(this, this[a], a, t, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return L.forEach(this, (o, a) => {
      const i = L.findKey(r, a);
      if (i) {
        n[i] = Br(o), delete n[a];
        return;
      }
      const s = t ? Q0(a) : String(a).trim();
      s !== a && delete n[a], n[s] = Br(o), r[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return L.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && L.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[Lu] = this[Lu] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(i) {
      const s = Hn(i);
      r[s] || (Z0(o, i), r[s] = !0);
    }
    return L.isArray(t) ? t.forEach(a) : a(t), this;
  }
};
He.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
L.reduceDescriptors(He.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
L.freezeMethods(He);
function qa(e, t) {
  const n = this || gr, r = t || n, o = He.from(r.headers);
  let a = r.data;
  return L.forEach(e, function(s) {
    a = s.call(n, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function bd(e) {
  return !!(e && e.__CANCEL__);
}
function Mn(e, t, n) {
  ne.call(this, e ?? "canceled", ne.ERR_CANCELED, t, n), this.name = "CanceledError";
}
L.inherits(Mn, ne, {
  __CANCEL__: !0
});
function wd(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new ne(
    "Request failed with status code " + n.status,
    [ne.ERR_BAD_REQUEST, ne.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function eb(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function tb(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, a = 0, i;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const l = Date.now(), u = r[a];
    i || (i = l), n[o] = c, r[o] = l;
    let f = a, p = 0;
    for (; f !== o; )
      p += n[f++], f = f % e;
    if (o = (o + 1) % e, o === a && (a = (a + 1) % e), l - i < t)
      return;
    const h = u && l - u;
    return h ? Math.round(p * 1e3 / h) : void 0;
  };
}
function nb(e, t) {
  let n = 0, r = 1e3 / t, o, a;
  const i = (l, u = Date.now()) => {
    n = u, o = null, a && (clearTimeout(a), a = null), e.apply(null, l);
  };
  return [(...l) => {
    const u = Date.now(), f = u - n;
    f >= r ? i(l, u) : (o = l, a || (a = setTimeout(() => {
      a = null, i(o);
    }, r - f)));
  }, () => o && i(o)];
}
const Jr = (e, t, n = 3) => {
  let r = 0;
  const o = tb(50, 250);
  return nb((a) => {
    const i = a.loaded, s = a.lengthComputable ? a.total : void 0, c = i - r, l = o(c), u = i <= s;
    r = i;
    const f = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: c,
      rate: l || void 0,
      estimated: l && s && u ? (s - i) / l : void 0,
      event: a,
      lengthComputable: s != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, n);
}, Nu = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, _u = (e) => (...t) => L.asap(() => e(...t)), rb = $e.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, $e.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL($e.origin),
  $e.navigator && /(msie|trident)/i.test($e.navigator.userAgent)
) : () => !0, ob = $e.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, a) {
      const i = [e + "=" + encodeURIComponent(t)];
      L.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), L.isString(r) && i.push("path=" + r), L.isString(o) && i.push("domain=" + o), a === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function ab(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ib(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function xd(e, t, n) {
  let r = !ab(t);
  return e && (r || n == !1) ? ib(e, t) : t;
}
const Mu = (e) => e instanceof He ? { ...e } : e;
function fn(e, t) {
  t = t || {};
  const n = {};
  function r(l, u, f, p) {
    return L.isPlainObject(l) && L.isPlainObject(u) ? L.merge.call({ caseless: p }, l, u) : L.isPlainObject(u) ? L.merge({}, u) : L.isArray(u) ? u.slice() : u;
  }
  function o(l, u, f, p) {
    if (L.isUndefined(u)) {
      if (!L.isUndefined(l))
        return r(void 0, l, f, p);
    } else return r(l, u, f, p);
  }
  function a(l, u) {
    if (!L.isUndefined(u))
      return r(void 0, u);
  }
  function i(l, u) {
    if (L.isUndefined(u)) {
      if (!L.isUndefined(l))
        return r(void 0, l);
    } else return r(void 0, u);
  }
  function s(l, u, f) {
    if (f in t)
      return r(l, u);
    if (f in e)
      return r(void 0, l);
  }
  const c = {
    url: a,
    method: a,
    data: a,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: s,
    headers: (l, u, f) => o(Mu(l), Mu(u), f, !0)
  };
  return L.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const f = c[u] || o, p = f(e[u], t[u], u);
    L.isUndefined(p) && f !== s || (n[u] = p);
  }), n;
}
const Sd = (e) => {
  const t = fn({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: a, headers: i, auth: s } = t;
  t.headers = i = He.from(i), t.url = yd(xd(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), s && i.set(
    "Authorization",
    "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))
  );
  let c;
  if (L.isFormData(n)) {
    if ($e.hasStandardBrowserEnv || $e.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((c = i.getContentType()) !== !1) {
      const [l, ...u] = c ? c.split(";").map((f) => f.trim()).filter(Boolean) : [];
      i.setContentType([l || "multipart/form-data", ...u].join("; "));
    }
  }
  if ($e.hasStandardBrowserEnv && (r && L.isFunction(r) && (r = r(t)), r || r !== !1 && rb(t.url))) {
    const l = o && a && ob.read(a);
    l && i.set(o, l);
  }
  return t;
}, sb = typeof XMLHttpRequest < "u", lb = sb && function(e) {
  return new Promise(function(n, r) {
    const o = Sd(e);
    let a = o.data;
    const i = He.from(o.headers).normalize();
    let { responseType: s, onUploadProgress: c, onDownloadProgress: l } = o, u, f, p, h, d;
    function w() {
      h && h(), d && d(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let g = new XMLHttpRequest();
    g.open(o.method.toUpperCase(), o.url, !0), g.timeout = o.timeout;
    function y() {
      if (!g)
        return;
      const b = He.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), P = {
        data: !s || s === "text" || s === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: b,
        config: e,
        request: g
      };
      wd(function(F) {
        n(F), w();
      }, function(F) {
        r(F), w();
      }, P), g = null;
    }
    "onloadend" in g ? g.onloadend = y : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, g.onabort = function() {
      g && (r(new ne("Request aborted", ne.ECONNABORTED, e, g)), g = null);
    }, g.onerror = function() {
      r(new ne("Network Error", ne.ERR_NETWORK, e, g)), g = null;
    }, g.ontimeout = function() {
      let E = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const P = o.transitional || gd;
      o.timeoutErrorMessage && (E = o.timeoutErrorMessage), r(new ne(
        E,
        P.clarifyTimeoutError ? ne.ETIMEDOUT : ne.ECONNABORTED,
        e,
        g
      )), g = null;
    }, a === void 0 && i.setContentType(null), "setRequestHeader" in g && L.forEach(i.toJSON(), function(E, P) {
      g.setRequestHeader(P, E);
    }), L.isUndefined(o.withCredentials) || (g.withCredentials = !!o.withCredentials), s && s !== "json" && (g.responseType = o.responseType), l && ([p, d] = Jr(l, !0), g.addEventListener("progress", p)), c && g.upload && ([f, h] = Jr(c), g.upload.addEventListener("progress", f), g.upload.addEventListener("loadend", h)), (o.cancelToken || o.signal) && (u = (b) => {
      g && (r(!b || b.type ? new Mn(null, e, g) : b), g.abort(), g = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const v = eb(o.url);
    if (v && $e.protocols.indexOf(v) === -1) {
      r(new ne("Unsupported protocol " + v + ":", ne.ERR_BAD_REQUEST, e));
      return;
    }
    g.send(a || null);
  });
}, ub = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const a = function(l) {
      if (!o) {
        o = !0, s();
        const u = l instanceof Error ? l : this.reason;
        r.abort(u instanceof ne ? u : new Mn(u instanceof Error ? u.message : u));
      }
    };
    let i = t && setTimeout(() => {
      i = null, a(new ne(`timeout ${t} of ms exceeded`, ne.ETIMEDOUT));
    }, t);
    const s = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(a) : l.removeEventListener("abort", a);
      }), e = null);
    };
    e.forEach((l) => l.addEventListener("abort", a));
    const { signal: c } = r;
    return c.unsubscribe = () => L.asap(s), c;
  }
}, cb = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, fb = async function* (e, t) {
  for await (const n of db(e))
    yield* cb(n, t);
}, db = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, Bu = (e, t, n, r) => {
  const o = fb(e, t);
  let a = 0, i, s = (c) => {
    i || (i = !0, r && r(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: l, value: u } = await o.next();
        if (l) {
          s(), c.close();
          return;
        }
        let f = u.byteLength;
        if (n) {
          let p = a += f;
          n(p);
        }
        c.enqueue(new Uint8Array(u));
      } catch (l) {
        throw s(l), l;
      }
    },
    cancel(c) {
      return s(c), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, xo = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Od = xo && typeof ReadableStream == "function", pb = xo && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Ed = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, hb = Od && Ed(() => {
  let e = !1;
  const t = new Request($e.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), ju = 64 * 1024, Ii = Od && Ed(() => L.isReadableStream(new Response("").body)), Qr = {
  stream: Ii && ((e) => e.body)
};
xo && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Qr[t] && (Qr[t] = L.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new ne(`Response type '${t}' is not supported`, ne.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const mb = async (e) => {
  if (e == null)
    return 0;
  if (L.isBlob(e))
    return e.size;
  if (L.isSpecCompliantForm(e))
    return (await new Request($e.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (L.isArrayBufferView(e) || L.isArrayBuffer(e))
    return e.byteLength;
  if (L.isURLSearchParams(e) && (e = e + ""), L.isString(e))
    return (await pb(e)).byteLength;
}, yb = async (e, t) => {
  const n = L.toFiniteNumber(e.getContentLength());
  return n ?? mb(t);
}, gb = xo && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: o,
    cancelToken: a,
    timeout: i,
    onDownloadProgress: s,
    onUploadProgress: c,
    responseType: l,
    headers: u,
    withCredentials: f = "same-origin",
    fetchOptions: p
  } = Sd(e);
  l = l ? (l + "").toLowerCase() : "text";
  let h = ub([o, a && a.toAbortSignal()], i), d;
  const w = h && h.unsubscribe && (() => {
    h.unsubscribe();
  });
  let g;
  try {
    if (c && hb && n !== "get" && n !== "head" && (g = await yb(u, r)) !== 0) {
      let P = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), $;
      if (L.isFormData(r) && ($ = P.headers.get("content-type")) && u.setContentType($), P.body) {
        const [F, B] = Nu(
          g,
          Jr(_u(c))
        );
        r = Bu(P.body, ju, F, B);
      }
    }
    L.isString(f) || (f = f ? "include" : "omit");
    const y = "credentials" in Request.prototype;
    d = new Request(t, {
      ...p,
      signal: h,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: y ? f : void 0
    });
    let v = await fetch(d);
    const b = Ii && (l === "stream" || l === "response");
    if (Ii && (s || b && w)) {
      const P = {};
      ["status", "statusText", "headers"].forEach((T) => {
        P[T] = v[T];
      });
      const $ = L.toFiniteNumber(v.headers.get("content-length")), [F, B] = s && Nu(
        $,
        Jr(_u(s), !0)
      ) || [];
      v = new Response(
        Bu(v.body, ju, F, () => {
          B && B(), w && w();
        }),
        P
      );
    }
    l = l || "text";
    let E = await Qr[L.findKey(Qr, l) || "text"](v, e);
    return !b && w && w(), await new Promise((P, $) => {
      wd(P, $, {
        data: E,
        headers: He.from(v.headers),
        status: v.status,
        statusText: v.statusText,
        config: e,
        request: d
      });
    });
  } catch (y) {
    throw w && w(), y && y.name === "TypeError" && /Load failed|fetch/i.test(y.message) ? Object.assign(
      new ne("Network Error", ne.ERR_NETWORK, e, d),
      {
        cause: y.cause || y
      }
    ) : ne.from(y, y && y.code, e, d);
  }
}), Li = {
  http: F0,
  xhr: lb,
  fetch: gb
};
L.forEach(Li, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const qu = (e) => `- ${e}`, vb = (e) => L.isFunction(e) || e === null || e === !1, Ad = {
  getAdapter: (e) => {
    e = L.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let a = 0; a < t; a++) {
      n = e[a];
      let i;
      if (r = n, !vb(n) && (r = Li[(i = String(n)).toLowerCase()], r === void 0))
        throw new ne(`Unknown adapter '${i}'`);
      if (r)
        break;
      o[i || "#" + a] = r;
    }
    if (!r) {
      const a = Object.entries(o).map(
        ([s, c]) => `adapter ${s} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? a.length > 1 ? `since :
` + a.map(qu).join(`
`) : " " + qu(a[0]) : "as no adapter specified";
      throw new ne(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Li
};
function Ua(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Mn(null, e);
}
function Uu(e) {
  return Ua(e), e.headers = He.from(e.headers), e.data = qa.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ad.getAdapter(e.adapter || gr.adapter)(e).then(function(r) {
    return Ua(e), r.data = qa.call(
      e,
      e.transformResponse,
      r
    ), r.headers = He.from(r.headers), r;
  }, function(r) {
    return bd(r) || (Ua(e), r && r.response && (r.response.data = qa.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = He.from(r.response.headers))), Promise.reject(r);
  });
}
const Cd = "1.9.0", So = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  So[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const zu = {};
So.transitional = function(t, n, r) {
  function o(a, i) {
    return "[Axios v" + Cd + "] Transitional option '" + a + "'" + i + (r ? ". " + r : "");
  }
  return (a, i, s) => {
    if (t === !1)
      throw new ne(
        o(i, " has been removed" + (n ? " in " + n : "")),
        ne.ERR_DEPRECATED
      );
    return n && !zu[i] && (zu[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(a, i, s) : !0;
  };
};
So.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function bb(e, t, n) {
  if (typeof e != "object")
    throw new ne("options must be an object", ne.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const a = r[o], i = t[a];
    if (i) {
      const s = e[a], c = s === void 0 || i(s, a, e);
      if (c !== !0)
        throw new ne("option " + a + " must be " + c, ne.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new ne("Unknown option " + a, ne.ERR_BAD_OPTION);
  }
}
const jr = {
  assertOptions: bb,
  validators: So
}, gt = jr.validators;
let ln = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Iu(),
      response: new Iu()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const a = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? a && !String(r.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + a) : r.stack = a;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = fn(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: a } = n;
    r !== void 0 && jr.assertOptions(r, {
      silentJSONParsing: gt.transitional(gt.boolean),
      forcedJSONParsing: gt.transitional(gt.boolean),
      clarifyTimeoutError: gt.transitional(gt.boolean)
    }, !1), o != null && (L.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : jr.assertOptions(o, {
      encode: gt.function,
      serialize: gt.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), jr.assertOptions(n, {
      baseUrl: gt.spelling("baseURL"),
      withXsrfToken: gt.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = a && L.merge(
      a.common,
      a[n.method]
    );
    a && L.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete a[d];
      }
    ), n.headers = He.concat(i, a);
    const s = [];
    let c = !0;
    this.interceptors.request.forEach(function(w) {
      typeof w.runWhen == "function" && w.runWhen(n) === !1 || (c = c && w.synchronous, s.unshift(w.fulfilled, w.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(w) {
      l.push(w.fulfilled, w.rejected);
    });
    let u, f = 0, p;
    if (!c) {
      const d = [Uu.bind(this), void 0];
      for (d.unshift.apply(d, s), d.push.apply(d, l), p = d.length, u = Promise.resolve(n); f < p; )
        u = u.then(d[f++], d[f++]);
      return u;
    }
    p = s.length;
    let h = n;
    for (f = 0; f < p; ) {
      const d = s[f++], w = s[f++];
      try {
        h = d(h);
      } catch (g) {
        w.call(this, g);
        break;
      }
    }
    try {
      u = Uu.call(this, h);
    } catch (d) {
      return Promise.reject(d);
    }
    for (f = 0, p = l.length; f < p; )
      u = u.then(l[f++], l[f++]);
    return u;
  }
  getUri(t) {
    t = fn(this.defaults, t);
    const n = xd(t.baseURL, t.url, t.allowAbsoluteUrls);
    return yd(n, t.params, t.paramsSerializer);
  }
};
L.forEach(["delete", "get", "head", "options"], function(t) {
  ln.prototype[t] = function(n, r) {
    return this.request(fn(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
L.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(a, i, s) {
      return this.request(fn(s || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: i
      }));
    };
  }
  ln.prototype[t] = n(), ln.prototype[t + "Form"] = n(!0);
});
let wb = class Pd {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(a) {
      n = a;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let a = r._listeners.length;
      for (; a-- > 0; )
        r._listeners[a](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let a;
      const i = new Promise((s) => {
        r.subscribe(s), a = s;
      }).then(o);
      return i.cancel = function() {
        r.unsubscribe(a);
      }, i;
    }, t(function(a, i, s) {
      r.reason || (r.reason = new Mn(a, i, s), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Pd(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function xb(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Sb(e) {
  return L.isObject(e) && e.isAxiosError === !0;
}
const Ni = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Ni).forEach(([e, t]) => {
  Ni[t] = e;
});
function kd(e) {
  const t = new ln(e), n = od(ln.prototype.request, t);
  return L.extend(n, ln.prototype, t, { allOwnKeys: !0 }), L.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return kd(fn(e, o));
  }, n;
}
const ye = kd(gr);
ye.Axios = ln;
ye.CanceledError = Mn;
ye.CancelToken = wb;
ye.isCancel = bd;
ye.VERSION = Cd;
ye.toFormData = wo;
ye.AxiosError = ne;
ye.Cancel = ye.CanceledError;
ye.all = function(t) {
  return Promise.all(t);
};
ye.spread = xb;
ye.isAxiosError = Sb;
ye.mergeConfig = fn;
ye.AxiosHeaders = He;
ye.formToJSON = (e) => vd(L.isHTMLForm(e) ? new FormData(e) : e);
ye.getAdapter = Ad.getAdapter;
ye.HttpStatusCode = Ni;
ye.default = ye;
const {
  Axios: kE,
  AxiosError: TE,
  CanceledError: DE,
  isCancel: $E,
  CancelToken: FE,
  VERSION: RE,
  all: IE,
  Cancel: LE,
  isAxiosError: NE,
  spread: _E,
  toFormData: ME,
  AxiosHeaders: BE,
  HttpStatusCode: jE,
  formToJSON: qE,
  getAdapter: UE,
  mergeConfig: zE
} = ye;
function _i(e, t) {
  let n;
  return function(...r) {
    clearTimeout(n), n = setTimeout(() => e.apply(this, r), t);
  };
}
function pt(e, t) {
  return document.dispatchEvent(new CustomEvent(`inertia:${e}`, t));
}
var Vu = (e) => pt("before", { cancelable: !0, detail: { visit: e } }), Ob = (e) => pt("error", { detail: { errors: e } }), Eb = (e) => pt("exception", { cancelable: !0, detail: { exception: e } }), Ab = (e) => pt("finish", { detail: { visit: e } }), Cb = (e) => pt("invalid", { cancelable: !0, detail: { response: e } }), or = (e) => pt("navigate", { detail: { page: e } }), Pb = (e) => pt("progress", { detail: { progress: e } }), kb = (e) => pt("start", { detail: { visit: e } }), Tb = (e) => pt("success", { detail: { page: e } }), Db = (e, t) => pt("prefetched", { detail: { fetchedAt: Date.now(), response: e.data, visit: t } }), $b = (e) => pt("prefetching", { detail: { visit: e } }), _e = class {
  static set(t, n) {
    typeof window < "u" && window.sessionStorage.setItem(t, JSON.stringify(n));
  }
  static get(t) {
    if (typeof window < "u") return JSON.parse(window.sessionStorage.getItem(t) || "null");
  }
  static merge(t, n) {
    let r = this.get(t);
    r === null ? this.set(t, n) : this.set(t, { ...r, ...n });
  }
  static remove(t) {
    typeof window < "u" && window.sessionStorage.removeItem(t);
  }
  static removeNested(t, n) {
    let r = this.get(t);
    r !== null && (delete r[n], this.set(t, r));
  }
  static exists(t) {
    try {
      return this.get(t) !== null;
    } catch {
      return !1;
    }
  }
  static clear() {
    typeof window < "u" && window.sessionStorage.clear();
  }
};
_e.locationVisitKey = "inertiaLocationVisit";
var Fb = async (e) => {
  if (typeof window > "u") throw new Error("Unable to encrypt history");
  let t = Td(), n = await Dd(), r = await Mb(n);
  if (!r) throw new Error("Unable to encrypt history");
  return await Ib(t, r, e);
}, Rn = { key: "historyKey", iv: "historyIv" }, Rb = async (e) => {
  let t = Td(), n = await Dd();
  if (!n) throw new Error("Unable to decrypt history");
  return await Lb(t, n, e);
}, Ib = async (e, t, n) => {
  if (typeof window > "u") throw new Error("Unable to encrypt history");
  if (typeof window.crypto.subtle > "u") return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(n);
  let r = new TextEncoder(), o = JSON.stringify(n), a = new Uint8Array(o.length * 3), i = r.encodeInto(o, a);
  return window.crypto.subtle.encrypt({ name: "AES-GCM", iv: e }, t, a.subarray(0, i.written));
}, Lb = async (e, t, n) => {
  if (typeof window.crypto.subtle > "u") return console.warn("Decryption is not supported in this environment. SSL is required."), Promise.resolve(n);
  let r = await window.crypto.subtle.decrypt({ name: "AES-GCM", iv: e }, t, n);
  return JSON.parse(new TextDecoder().decode(r));
}, Td = () => {
  let e = _e.get(Rn.iv);
  if (e) return new Uint8Array(e);
  let t = window.crypto.getRandomValues(new Uint8Array(12));
  return _e.set(Rn.iv, Array.from(t)), t;
}, Nb = async () => typeof window.crypto.subtle > "u" ? (console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(null)) : window.crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, !0, ["encrypt", "decrypt"]), _b = async (e) => {
  if (typeof window.crypto.subtle > "u") return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve();
  let t = await window.crypto.subtle.exportKey("raw", e);
  _e.set(Rn.key, Array.from(new Uint8Array(t)));
}, Mb = async (e) => {
  if (e) return e;
  let t = await Nb();
  return t ? (await _b(t), t) : null;
}, Dd = async () => {
  let e = _e.get(Rn.key);
  return e ? await window.crypto.subtle.importKey("raw", new Uint8Array(e), { name: "AES-GCM", length: 256 }, !0, ["encrypt", "decrypt"]) : null;
}, st = class {
  static save() {
    le.saveScrollPositions(Array.from(this.regions()).map((e) => ({ top: e.scrollTop, left: e.scrollLeft })));
  }
  static regions() {
    return document.querySelectorAll("[scroll-region]");
  }
  static reset() {
    typeof window < "u" && window.scrollTo(0, 0), this.regions().forEach((e) => {
      typeof e.scrollTo == "function" ? e.scrollTo(0, 0) : (e.scrollTop = 0, e.scrollLeft = 0);
    }), this.save(), window.location.hash && setTimeout(() => {
      var e;
      return (e = document.getElementById(window.location.hash.slice(1))) == null ? void 0 : e.scrollIntoView();
    });
  }
  static restore(e) {
    this.restoreDocument(), this.regions().forEach((t, n) => {
      let r = e[n];
      r && (typeof t.scrollTo == "function" ? t.scrollTo(r.left, r.top) : (t.scrollTop = r.top, t.scrollLeft = r.left));
    });
  }
  static restoreDocument() {
    let e = le.getDocumentScrollPosition();
    typeof window < "u" && window.scrollTo(e.left, e.top);
  }
  static onScroll(e) {
    let t = e.target;
    typeof t.hasAttribute == "function" && t.hasAttribute("scroll-region") && this.save();
  }
  static onWindowScroll() {
    le.saveDocumentScrollPosition({ top: window.scrollY, left: window.scrollX });
  }
};
function Mi(e) {
  return e instanceof File || e instanceof Blob || e instanceof FileList && e.length > 0 || e instanceof FormData && Array.from(e.values()).some((t) => Mi(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => Mi(t));
}
var Hu = (e) => e instanceof FormData;
function $d(e, t = new FormData(), n = null) {
  e = e || {};
  for (let r in e) Object.prototype.hasOwnProperty.call(e, r) && Rd(t, Fd(n, r), e[r]);
  return t;
}
function Fd(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Rd(e, t, n) {
  if (Array.isArray(n)) return Array.from(n.keys()).forEach((r) => Rd(e, Fd(t, r.toString()), n[r]));
  if (n instanceof Date) return e.append(t, n.toISOString());
  if (n instanceof File) return e.append(t, n, n.name);
  if (n instanceof Blob) return e.append(t, n);
  if (typeof n == "boolean") return e.append(t, n ? "1" : "0");
  if (typeof n == "string") return e.append(t, n);
  if (typeof n == "number") return e.append(t, `${n}`);
  if (n == null) return e.append(t, "");
  $d(n, e, t);
}
function zt(e) {
  return new URL(e.toString(), typeof window > "u" ? void 0 : window.location.toString());
}
var Bb = (e, t, n, r, o) => {
  let a = typeof e == "string" ? zt(e) : e;
  if ((Mi(t) || r) && !Hu(t) && (t = $d(t)), Hu(t)) return [a, t];
  let [i, s] = Es(n, a, t, o);
  return [zt(i), s];
};
function Es(e, t, n, r = "brackets") {
  let o = /^https?:\/\//.test(t.toString()), a = o || t.toString().startsWith("/"), i = !a && !t.toString().startsWith("#") && !t.toString().startsWith("?"), s = t.toString().includes("?") || e === "get" && Object.keys(n).length, c = t.toString().includes("#"), l = new URL(t.toString(), "http://localhost");
  return e === "get" && Object.keys(n).length && (l.search = Du.stringify(Xn(Du.parse(l.search, { ignoreQueryPrefix: !0 }), n), { encodeValuesOnly: !0, arrayFormat: r }), n = {}), [[o ? `${l.protocol}//${l.host}` : "", a ? l.pathname : "", i ? l.pathname.substring(1) : "", s ? l.search : "", c ? l.hash : ""].join(""), n];
}
function Zr(e) {
  return e = new URL(e.href), e.hash = "", e;
}
var Wu = (e, t) => {
  e.hash && !t.hash && Zr(e).href === t.href && (t.hash = e.hash);
}, Bi = (e, t) => Zr(e).href === Zr(t).href, jb = class {
  constructor() {
    this.componentId = {}, this.listeners = [], this.isFirstPageLoad = !0, this.cleared = !1;
  }
  init({ initialPage: e, swapComponent: t, resolveComponent: n }) {
    return this.page = e, this.swapComponent = t, this.resolveComponent = n, this;
  }
  set(e, { replace: t = !1, preserveScroll: n = !1, preserveState: r = !1 } = {}) {
    this.componentId = {};
    let o = this.componentId;
    return e.clearHistory && le.clear(), this.resolve(e.component).then((a) => {
      if (o !== this.componentId) return;
      e.rememberedState ?? (e.rememberedState = {});
      let i = typeof window < "u" ? window.location : new URL(e.url);
      return t = t || Bi(zt(e.url), i), new Promise((s) => {
        t ? le.replaceState(e, () => s(null)) : le.pushState(e, () => s(null));
      }).then(() => {
        let s = !this.isTheSame(e);
        return this.page = e, this.cleared = !1, s && this.fireEventsFor("newComponent"), this.isFirstPageLoad && this.fireEventsFor("firstLoad"), this.isFirstPageLoad = !1, this.swap({ component: a, page: e, preserveState: r }).then(() => {
          n || st.reset(), an.fireInternalEvent("loadDeferredProps"), t || or(e);
        });
      });
    });
  }
  setQuietly(e, { preserveState: t = !1 } = {}) {
    return this.resolve(e.component).then((n) => (this.page = e, this.cleared = !1, le.setCurrent(e), this.swap({ component: n, page: e, preserveState: t })));
  }
  clear() {
    this.cleared = !0;
  }
  isCleared() {
    return this.cleared;
  }
  get() {
    return this.page;
  }
  merge(e) {
    this.page = { ...this.page, ...e };
  }
  setUrlHash(e) {
    this.page.url.includes(e) || (this.page.url += e);
  }
  remember(e) {
    this.page.rememberedState = e;
  }
  swap({ component: e, page: t, preserveState: n }) {
    return this.swapComponent({ component: e, page: t, preserveState: n });
  }
  resolve(e) {
    return Promise.resolve(this.resolveComponent(e));
  }
  isTheSame(e) {
    return this.page.component === e.component;
  }
  on(e, t) {
    return this.listeners.push({ event: e, callback: t }), () => {
      this.listeners = this.listeners.filter((n) => n.event !== e && n.callback !== t);
    };
  }
  fireEventsFor(e) {
    this.listeners.filter((t) => t.event === e).forEach((t) => t.callback());
  }
}, ee = new jb(), Id = class {
  constructor() {
    this.items = [], this.processingPromise = null;
  }
  add(e) {
    return this.items.push(e), this.process();
  }
  process() {
    return this.processingPromise ?? (this.processingPromise = this.processNext().then(() => {
      this.processingPromise = null;
    })), this.processingPromise;
  }
  processNext() {
    let e = this.items.shift();
    return e ? Promise.resolve(e()).then(() => this.processNext()) : Promise.resolve();
  }
}, Qn = typeof window > "u", Wn = new Id(), Ku = !Qn && /CriOS/.test(window.navigator.userAgent), qb = class {
  constructor() {
    this.rememberedState = "rememberedState", this.scrollRegions = "scrollRegions", this.preserveUrl = !1, this.current = {}, this.initialState = null;
  }
  remember(e, t) {
    var n;
    this.replaceState({ ...ee.get(), rememberedState: { ...((n = ee.get()) == null ? void 0 : n.rememberedState) ?? {}, [t]: e } });
  }
  restore(e) {
    var t, n;
    if (!Qn) return (n = (t = this.initialState) == null ? void 0 : t[this.rememberedState]) == null ? void 0 : n[e];
  }
  pushState(e, t = null) {
    if (!Qn) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, Wn.add(() => this.getPageData(e).then((n) => {
        let r = () => {
          this.doPushState({ page: n }, e.url), t && t();
        };
        Ku ? setTimeout(r) : r();
      }));
    }
  }
  getPageData(e) {
    return new Promise((t) => e.encryptHistory ? Fb(e).then(t) : t(e));
  }
  processQueue() {
    return Wn.process();
  }
  decrypt(e = null) {
    var n;
    if (Qn) return Promise.resolve(e ?? ee.get());
    let t = e ?? ((n = window.history.state) == null ? void 0 : n.page);
    return this.decryptPageData(t).then((r) => {
      if (!r) throw new Error("Unable to decrypt history");
      return this.initialState === null ? this.initialState = r ?? void 0 : this.current = r ?? {}, r;
    });
  }
  decryptPageData(e) {
    return e instanceof ArrayBuffer ? Rb(e) : Promise.resolve(e);
  }
  saveScrollPositions(e) {
    Wn.add(() => Promise.resolve().then(() => {
      var t;
      (t = window.history.state) != null && t.page && this.doReplaceState({ page: window.history.state.page, scrollRegions: e });
    }));
  }
  saveDocumentScrollPosition(e) {
    Wn.add(() => Promise.resolve().then(() => {
      var t;
      (t = window.history.state) != null && t.page && this.doReplaceState({ page: window.history.state.page, documentScrollPosition: e });
    }));
  }
  getScrollRegions() {
    var e;
    return ((e = window.history.state) == null ? void 0 : e.scrollRegions) || [];
  }
  getDocumentScrollPosition() {
    var e;
    return ((e = window.history.state) == null ? void 0 : e.documentScrollPosition) || { top: 0, left: 0 };
  }
  replaceState(e, t = null) {
    if (ee.merge(e), !Qn) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, Wn.add(() => this.getPageData(e).then((n) => {
        let r = () => {
          this.doReplaceState({ page: n }, e.url), t && t();
        };
        Ku ? setTimeout(r) : r();
      }));
    }
  }
  doReplaceState(e, t) {
    var n, r;
    window.history.replaceState({ ...e, scrollRegions: e.scrollRegions ?? ((n = window.history.state) == null ? void 0 : n.scrollRegions), documentScrollPosition: e.documentScrollPosition ?? ((r = window.history.state) == null ? void 0 : r.documentScrollPosition) }, "", t);
  }
  doPushState(e, t) {
    window.history.pushState(e, "", t);
  }
  getState(e, t) {
    var n;
    return ((n = this.current) == null ? void 0 : n[e]) ?? t;
  }
  deleteState(e) {
    this.current[e] !== void 0 && (delete this.current[e], this.replaceState(this.current));
  }
  hasAnyState() {
    return !!this.getAllState();
  }
  clear() {
    _e.remove(Rn.key), _e.remove(Rn.iv);
  }
  setCurrent(e) {
    this.current = e;
  }
  isValidState(e) {
    return !!e.page;
  }
  getAllState() {
    return this.current;
  }
};
typeof window < "u" && window.history.scrollRestoration && (window.history.scrollRestoration = "manual");
var le = new qb(), Ub = class {
  constructor() {
    this.internalListeners = [];
  }
  init() {
    typeof window < "u" && (window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), window.addEventListener("scroll", _i(st.onWindowScroll.bind(st), 100), !0)), typeof document < "u" && document.addEventListener("scroll", _i(st.onScroll.bind(st), 100), !0);
  }
  onGlobalEvent(e, t) {
    let n = (r) => {
      let o = t(r);
      r.cancelable && !r.defaultPrevented && o === !1 && r.preventDefault();
    };
    return this.registerListener(`inertia:${e}`, n);
  }
  on(e, t) {
    return this.internalListeners.push({ event: e, listener: t }), () => {
      this.internalListeners = this.internalListeners.filter((n) => n.listener !== t);
    };
  }
  onMissingHistoryItem() {
    ee.clear(), this.fireInternalEvent("missingHistoryItem");
  }
  fireInternalEvent(e) {
    this.internalListeners.filter((t) => t.event === e).forEach((t) => t.listener());
  }
  registerListener(e, t) {
    return document.addEventListener(e, t), () => document.removeEventListener(e, t);
  }
  handlePopstateEvent(e) {
    let t = e.state || null;
    if (t === null) {
      let n = zt(ee.get().url);
      n.hash = window.location.hash, le.replaceState({ ...ee.get(), url: n.href }), st.reset();
      return;
    }
    if (!le.isValidState(t)) return this.onMissingHistoryItem();
    le.decrypt(t.page).then((n) => {
      ee.setQuietly(n, { preserveState: !1 }).then(() => {
        st.restore(le.getScrollRegions()), or(ee.get());
      });
    }).catch(() => {
      this.onMissingHistoryItem();
    });
  }
}, an = new Ub(), zb = class {
  constructor() {
    this.type = this.resolveType();
  }
  resolveType() {
    return typeof window > "u" ? "navigate" : window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType("navigation").length > 0 ? window.performance.getEntriesByType("navigation")[0].type : "navigate";
  }
  get() {
    return this.type;
  }
  isBackForward() {
    return this.type === "back_forward";
  }
  isReload() {
    return this.type === "reload";
  }
}, za = new zb(), Vb = class {
  static handle() {
    this.clearRememberedStateOnReload(), [this.handleBackForward, this.handleLocation, this.handleDefault].find((e) => e.bind(this)());
  }
  static clearRememberedStateOnReload() {
    za.isReload() && le.deleteState(le.rememberedState);
  }
  static handleBackForward() {
    if (!za.isBackForward() || !le.hasAnyState()) return !1;
    let e = le.getScrollRegions();
    return le.decrypt().then((t) => {
      ee.set(t, { preserveScroll: !0, preserveState: !0 }).then(() => {
        st.restore(e), or(ee.get());
      });
    }).catch(() => {
      an.onMissingHistoryItem();
    }), !0;
  }
  static handleLocation() {
    if (!_e.exists(_e.locationVisitKey)) return !1;
    let e = _e.get(_e.locationVisitKey) || {};
    return _e.remove(_e.locationVisitKey), typeof window < "u" && ee.setUrlHash(window.location.hash), le.decrypt(ee.get()).then(() => {
      let t = le.getState(le.rememberedState, {}), n = le.getScrollRegions();
      ee.remember(t), ee.set(ee.get(), { preserveScroll: e.preserveScroll, preserveState: !0 }).then(() => {
        e.preserveScroll && st.restore(n), or(ee.get());
      });
    }).catch(() => {
      an.onMissingHistoryItem();
    }), !0;
  }
  static handleDefault() {
    typeof window < "u" && ee.setUrlHash(window.location.hash), ee.set(ee.get(), { preserveScroll: !0, preserveState: !0 }).then(() => {
      za.isReload() && st.restore(le.getScrollRegions()), or(ee.get());
    });
  }
}, Hb = class {
  constructor(e, t, n) {
    this.id = null, this.throttle = !1, this.keepAlive = !1, this.cbCount = 0, this.keepAlive = n.keepAlive ?? !1, this.cb = t, this.interval = e, (n.autoStart ?? !0) && this.start();
  }
  stop() {
    this.id && clearInterval(this.id);
  }
  start() {
    typeof window > "u" || (this.stop(), this.id = window.setInterval(() => {
      (!this.throttle || this.cbCount % 10 === 0) && this.cb(), this.throttle && this.cbCount++;
    }, this.interval));
  }
  isInBackground(e) {
    this.throttle = this.keepAlive ? !1 : e, this.throttle && (this.cbCount = 0);
  }
}, Wb = class {
  constructor() {
    this.polls = [], this.setupVisibilityListener();
  }
  add(e, t, n) {
    let r = new Hb(e, t, n);
    return this.polls.push(r), { stop: () => r.stop(), start: () => r.start() };
  }
  clear() {
    this.polls.forEach((e) => e.stop()), this.polls = [];
  }
  setupVisibilityListener() {
    typeof document > "u" || document.addEventListener("visibilitychange", () => {
      this.polls.forEach((e) => e.isInBackground(document.hidden));
    }, !1);
  }
}, Kb = new Wb(), Ld = (e, t, n) => {
  if (e === t) return !0;
  for (let r in e) if (!n.includes(r) && e[r] !== t[r] && !Gb(e[r], t[r])) return !1;
  return !0;
}, Gb = (e, t) => {
  switch (typeof e) {
    case "object":
      return Ld(e, t, []);
    case "function":
      return e.toString() === t.toString();
    default:
      return e === t;
  }
}, Yb = { ms: 1, s: 1e3, m: 6e4, h: 36e5, d: 864e5 }, Gu = (e) => {
  if (typeof e == "number") return e;
  for (let [t, n] of Object.entries(Yb)) if (e.endsWith(t)) return parseFloat(e) * n;
  return parseInt(e);
}, Xb = class {
  constructor() {
    this.cached = [], this.inFlightRequests = [], this.removalTimers = [], this.currentUseId = null;
  }
  add(e, t, { cacheFor: n }) {
    if (this.findInFlight(e)) return Promise.resolve();
    let r = this.findCached(e);
    if (!e.fresh && r && r.staleTimestamp > Date.now()) return Promise.resolve();
    let [o, a] = this.extractStaleValues(n), i = new Promise((s, c) => {
      t({ ...e, onCancel: () => {
        this.remove(e), e.onCancel(), c();
      }, onError: (l) => {
        this.remove(e), e.onError(l), c();
      }, onPrefetching(l) {
        e.onPrefetching(l);
      }, onPrefetched(l, u) {
        e.onPrefetched(l, u);
      }, onPrefetchResponse(l) {
        s(l);
      } });
    }).then((s) => (this.remove(e), this.cached.push({ params: { ...e }, staleTimestamp: Date.now() + o, response: i, singleUse: n === 0, timestamp: Date.now(), inFlight: !1 }), this.scheduleForRemoval(e, a), this.inFlightRequests = this.inFlightRequests.filter((c) => !this.paramsAreEqual(c.params, e)), s.handlePrefetch(), s));
    return this.inFlightRequests.push({ params: { ...e }, response: i, staleTimestamp: null, inFlight: !0 }), i;
  }
  removeAll() {
    this.cached = [], this.removalTimers.forEach((e) => {
      clearTimeout(e.timer);
    }), this.removalTimers = [];
  }
  remove(e) {
    this.cached = this.cached.filter((t) => !this.paramsAreEqual(t.params, e)), this.clearTimer(e);
  }
  extractStaleValues(e) {
    let [t, n] = this.cacheForToStaleAndExpires(e);
    return [Gu(t), Gu(n)];
  }
  cacheForToStaleAndExpires(e) {
    if (!Array.isArray(e)) return [e, e];
    switch (e.length) {
      case 0:
        return [0, 0];
      case 1:
        return [e[0], e[0]];
      default:
        return [e[0], e[1]];
    }
  }
  clearTimer(e) {
    let t = this.removalTimers.find((n) => this.paramsAreEqual(n.params, e));
    t && (clearTimeout(t.timer), this.removalTimers = this.removalTimers.filter((n) => n !== t));
  }
  scheduleForRemoval(e, t) {
    if (!(typeof window > "u") && (this.clearTimer(e), t > 0)) {
      let n = window.setTimeout(() => this.remove(e), t);
      this.removalTimers.push({ params: e, timer: n });
    }
  }
  get(e) {
    return this.findCached(e) || this.findInFlight(e);
  }
  use(e, t) {
    let n = `${t.url.pathname}-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    return this.currentUseId = n, e.response.then((r) => {
      if (this.currentUseId === n) return r.mergeParams({ ...t, onPrefetched: () => {
      } }), this.removeSingleUseItems(t), r.handle();
    });
  }
  removeSingleUseItems(e) {
    this.cached = this.cached.filter((t) => this.paramsAreEqual(t.params, e) ? !t.singleUse : !0);
  }
  findCached(e) {
    return this.cached.find((t) => this.paramsAreEqual(t.params, e)) || null;
  }
  findInFlight(e) {
    return this.inFlightRequests.find((t) => this.paramsAreEqual(t.params, e)) || null;
  }
  paramsAreEqual(e, t) {
    return Ld(e, t, ["showProgress", "replace", "prefetch", "onBefore", "onStart", "onProgress", "onFinish", "onCancel", "onSuccess", "onError", "onPrefetched", "onCancelToken", "onPrefetching", "async"]);
  }
}, tn = new Xb(), Jb = class Nd {
  constructor(t) {
    if (this.callbacks = [], !t.prefetch) this.params = t;
    else {
      let n = { onBefore: this.wrapCallback(t, "onBefore"), onStart: this.wrapCallback(t, "onStart"), onProgress: this.wrapCallback(t, "onProgress"), onFinish: this.wrapCallback(t, "onFinish"), onCancel: this.wrapCallback(t, "onCancel"), onSuccess: this.wrapCallback(t, "onSuccess"), onError: this.wrapCallback(t, "onError"), onCancelToken: this.wrapCallback(t, "onCancelToken"), onPrefetched: this.wrapCallback(t, "onPrefetched"), onPrefetching: this.wrapCallback(t, "onPrefetching") };
      this.params = { ...t, ...n, onPrefetchResponse: t.onPrefetchResponse || (() => {
      }) };
    }
  }
  static create(t) {
    return new Nd(t);
  }
  data() {
    return this.params.method === "get" ? null : this.params.data;
  }
  queryParams() {
    return this.params.method === "get" ? this.params.data : {};
  }
  isPartial() {
    return this.params.only.length > 0 || this.params.except.length > 0 || this.params.reset.length > 0;
  }
  onCancelToken(t) {
    this.params.onCancelToken({ cancel: t });
  }
  markAsFinished() {
    this.params.completed = !0, this.params.cancelled = !1, this.params.interrupted = !1;
  }
  markAsCancelled({ cancelled: t = !0, interrupted: n = !1 }) {
    this.params.onCancel(), this.params.completed = !1, this.params.cancelled = t, this.params.interrupted = n;
  }
  wasCancelledAtAll() {
    return this.params.cancelled || this.params.interrupted;
  }
  onFinish() {
    this.params.onFinish(this.params);
  }
  onStart() {
    this.params.onStart(this.params);
  }
  onPrefetching() {
    this.params.onPrefetching(this.params);
  }
  onPrefetchResponse(t) {
    this.params.onPrefetchResponse && this.params.onPrefetchResponse(t);
  }
  all() {
    return this.params;
  }
  headers() {
    let t = { ...this.params.headers };
    this.isPartial() && (t["X-Inertia-Partial-Component"] = ee.get().component);
    let n = this.params.only.concat(this.params.reset);
    return n.length > 0 && (t["X-Inertia-Partial-Data"] = n.join(",")), this.params.except.length > 0 && (t["X-Inertia-Partial-Except"] = this.params.except.join(",")), this.params.reset.length > 0 && (t["X-Inertia-Reset"] = this.params.reset.join(",")), this.params.errorBag && this.params.errorBag.length > 0 && (t["X-Inertia-Error-Bag"] = this.params.errorBag), t;
  }
  setPreserveOptions(t) {
    this.params.preserveScroll = this.resolvePreserveOption(this.params.preserveScroll, t), this.params.preserveState = this.resolvePreserveOption(this.params.preserveState, t);
  }
  runCallbacks() {
    this.callbacks.forEach(({ name: t, args: n }) => {
      this.params[t](...n);
    });
  }
  merge(t) {
    this.params = { ...this.params, ...t };
  }
  wrapCallback(t, n) {
    return (...r) => {
      this.recordCallback(n, r), t[n](...r);
    };
  }
  recordCallback(t, n) {
    this.callbacks.push({ name: t, args: n });
  }
  resolvePreserveOption(t, n) {
    return typeof t == "function" ? t(n) : t === "errors" ? Object.keys(n.props.errors || {}).length > 0 : t;
  }
}, Qb = { modal: null, listener: null, show(e) {
  typeof e == "object" && (e = `All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(e)}`);
  let t = document.createElement("html");
  t.innerHTML = e, t.querySelectorAll("a").forEach((r) => r.setAttribute("target", "_top")), this.modal = document.createElement("div"), this.modal.style.position = "fixed", this.modal.style.width = "100vw", this.modal.style.height = "100vh", this.modal.style.padding = "50px", this.modal.style.boxSizing = "border-box", this.modal.style.backgroundColor = "rgba(0, 0, 0, .6)", this.modal.style.zIndex = 2e5, this.modal.addEventListener("click", () => this.hide());
  let n = document.createElement("iframe");
  if (n.style.backgroundColor = "white", n.style.borderRadius = "5px", n.style.width = "100%", n.style.height = "100%", this.modal.appendChild(n), document.body.prepend(this.modal), document.body.style.overflow = "hidden", !n.contentWindow) throw new Error("iframe not yet ready.");
  n.contentWindow.document.open(), n.contentWindow.document.write(t.outerHTML), n.contentWindow.document.close(), this.listener = this.hideOnEscape.bind(this), document.addEventListener("keydown", this.listener);
}, hide() {
  this.modal.outerHTML = "", this.modal = null, document.body.style.overflow = "visible", document.removeEventListener("keydown", this.listener);
}, hideOnEscape(e) {
  e.keyCode === 27 && this.hide();
} }, Zb = new Id(), Yu = class _d {
  constructor(t, n, r) {
    this.requestParams = t, this.response = n, this.originatingPage = r;
  }
  static create(t, n, r) {
    return new _d(t, n, r);
  }
  async handlePrefetch() {
    Bi(this.requestParams.all().url, window.location) && this.handle();
  }
  async handle() {
    return Zb.add(() => this.process());
  }
  async process() {
    if (this.requestParams.all().prefetch) return this.requestParams.all().prefetch = !1, this.requestParams.all().onPrefetched(this.response, this.requestParams.all()), Db(this.response, this.requestParams.all()), Promise.resolve();
    if (this.requestParams.runCallbacks(), !this.isInertiaResponse()) return this.handleNonInertiaResponse();
    await le.processQueue(), le.preserveUrl = this.requestParams.all().preserveUrl, await this.setPage();
    let t = ee.get().props.errors || {};
    if (Object.keys(t).length > 0) {
      let n = this.getScopedErrors(t);
      return Ob(n), this.requestParams.all().onError(n);
    }
    Tb(ee.get()), await this.requestParams.all().onSuccess(ee.get()), le.preserveUrl = !1;
  }
  mergeParams(t) {
    this.requestParams.merge(t);
  }
  async handleNonInertiaResponse() {
    if (this.isLocationVisit()) {
      let n = zt(this.getHeader("x-inertia-location"));
      return Wu(this.requestParams.all().url, n), this.locationVisit(n);
    }
    let t = { ...this.response, data: this.getDataFromResponse(this.response.data) };
    if (Cb(t)) return Qb.show(t.data);
  }
  isInertiaResponse() {
    return this.hasHeader("x-inertia");
  }
  hasStatus(t) {
    return this.response.status === t;
  }
  getHeader(t) {
    return this.response.headers[t];
  }
  hasHeader(t) {
    return this.getHeader(t) !== void 0;
  }
  isLocationVisit() {
    return this.hasStatus(409) && this.hasHeader("x-inertia-location");
  }
  locationVisit(t) {
    try {
      if (_e.set(_e.locationVisitKey, { preserveScroll: this.requestParams.all().preserveScroll === !0 }), typeof window > "u") return;
      Bi(window.location, t) ? window.location.reload() : window.location.href = t.href;
    } catch {
      return !1;
    }
  }
  async setPage() {
    let t = this.getDataFromResponse(this.response.data);
    return this.shouldSetPage(t) ? (this.mergeProps(t), await this.setRememberedState(t), this.requestParams.setPreserveOptions(t), t.url = le.preserveUrl ? ee.get().url : this.pageUrl(t), ee.set(t, { replace: this.requestParams.all().replace, preserveScroll: this.requestParams.all().preserveScroll, preserveState: this.requestParams.all().preserveState })) : Promise.resolve();
  }
  getDataFromResponse(t) {
    if (typeof t != "string") return t;
    try {
      return JSON.parse(t);
    } catch {
      return t;
    }
  }
  shouldSetPage(t) {
    if (!this.requestParams.all().async || this.originatingPage.component !== t.component) return !0;
    if (this.originatingPage.component !== ee.get().component) return !1;
    let n = zt(this.originatingPage.url), r = zt(ee.get().url);
    return n.origin === r.origin && n.pathname === r.pathname;
  }
  pageUrl(t) {
    let n = zt(t.url);
    return Wu(this.requestParams.all().url, n), n.pathname + n.search + n.hash;
  }
  mergeProps(t) {
    if (!this.requestParams.isPartial() || t.component !== ee.get().component) return;
    let n = t.mergeProps || [], r = t.deepMergeProps || [];
    n.forEach((o) => {
      let a = t.props[o];
      Array.isArray(a) ? t.props[o] = [...ee.get().props[o] || [], ...a] : typeof a == "object" && a !== null && (t.props[o] = { ...ee.get().props[o] || [], ...a });
    }), r.forEach((o) => {
      let a = t.props[o], i = ee.get().props[o], s = (c, l) => Array.isArray(l) ? [...Array.isArray(c) ? c : [], ...l] : typeof l == "object" && l !== null ? Object.keys(l).reduce((u, f) => (u[f] = s(c ? c[f] : void 0, l[f]), u), { ...c }) : l;
      t.props[o] = s(i, a);
    }), t.props = { ...ee.get().props, ...t.props };
  }
  async setRememberedState(t) {
    let n = await le.getState(le.rememberedState, {});
    this.requestParams.all().preserveState && n && t.component === ee.get().component && (t.rememberedState = n);
  }
  getScopedErrors(t) {
    return this.requestParams.all().errorBag ? t[this.requestParams.all().errorBag || ""] || {} : t;
  }
}, Xu = class Md {
  constructor(t, n) {
    this.page = n, this.requestHasFinished = !1, this.requestParams = Jb.create(t), this.cancelToken = new AbortController();
  }
  static create(t, n) {
    return new Md(t, n);
  }
  async send() {
    this.requestParams.onCancelToken(() => this.cancel({ cancelled: !0 })), kb(this.requestParams.all()), this.requestParams.onStart(), this.requestParams.all().prefetch && (this.requestParams.onPrefetching(), $b(this.requestParams.all()));
    let t = this.requestParams.all().prefetch;
    return ye({ method: this.requestParams.all().method, url: Zr(this.requestParams.all().url).href, data: this.requestParams.data(), params: this.requestParams.queryParams(), signal: this.cancelToken.signal, headers: this.getHeaders(), onUploadProgress: this.onProgress.bind(this), responseType: "text" }).then((n) => (this.response = Yu.create(this.requestParams, n, this.page), this.response.handle())).catch((n) => n != null && n.response ? (this.response = Yu.create(this.requestParams, n.response, this.page), this.response.handle()) : Promise.reject(n)).catch((n) => {
      if (!ye.isCancel(n) && Eb(n)) return Promise.reject(n);
    }).finally(() => {
      this.finish(), t && this.response && this.requestParams.onPrefetchResponse(this.response);
    });
  }
  finish() {
    this.requestParams.wasCancelledAtAll() || (this.requestParams.markAsFinished(), this.fireFinishEvents());
  }
  fireFinishEvents() {
    this.requestHasFinished || (this.requestHasFinished = !0, Ab(this.requestParams.all()), this.requestParams.onFinish());
  }
  cancel({ cancelled: t = !1, interrupted: n = !1 }) {
    this.requestHasFinished || (this.cancelToken.abort(), this.requestParams.markAsCancelled({ cancelled: t, interrupted: n }), this.fireFinishEvents());
  }
  onProgress(t) {
    this.requestParams.data() instanceof FormData && (t.percentage = t.progress ? Math.round(t.progress * 100) : 0, Pb(t), this.requestParams.all().onProgress(t));
  }
  getHeaders() {
    let t = { ...this.requestParams.headers(), Accept: "text/html, application/xhtml+xml", "X-Requested-With": "XMLHttpRequest", "X-Inertia": !0 };
    return ee.get().version && (t["X-Inertia-Version"] = ee.get().version), t;
  }
}, Ju = class {
  constructor({ maxConcurrent: t, interruptible: n }) {
    this.requests = [], this.maxConcurrent = t, this.interruptible = n;
  }
  send(t) {
    this.requests.push(t), t.send().then(() => {
      this.requests = this.requests.filter((n) => n !== t);
    });
  }
  interruptInFlight() {
    this.cancel({ interrupted: !0 }, !1);
  }
  cancelInFlight() {
    this.cancel({ cancelled: !0 }, !0);
  }
  cancel({ cancelled: t = !1, interrupted: n = !1 } = {}, r) {
    var o;
    this.shouldCancel(r) && ((o = this.requests.shift()) == null || o.cancel({ interrupted: n, cancelled: t }));
  }
  shouldCancel(t) {
    return t ? !0 : this.interruptible && this.requests.length >= this.maxConcurrent;
  }
}, e1 = class {
  constructor() {
    this.syncRequestStream = new Ju({ maxConcurrent: 1, interruptible: !0 }), this.asyncRequestStream = new Ju({ maxConcurrent: 1 / 0, interruptible: !1 });
  }
  init({ initialPage: e, resolveComponent: t, swapComponent: n }) {
    ee.init({ initialPage: e, resolveComponent: t, swapComponent: n }), Vb.handle(), an.init(), an.on("missingHistoryItem", () => {
      typeof window < "u" && this.visit(window.location.href, { preserveState: !0, preserveScroll: !0, replace: !0 });
    }), an.on("loadDeferredProps", () => {
      this.loadDeferredProps();
    });
  }
  get(e, t = {}, n = {}) {
    return this.visit(e, { ...n, method: "get", data: t });
  }
  post(e, t = {}, n = {}) {
    return this.visit(e, { preserveState: !0, ...n, method: "post", data: t });
  }
  put(e, t = {}, n = {}) {
    return this.visit(e, { preserveState: !0, ...n, method: "put", data: t });
  }
  patch(e, t = {}, n = {}) {
    return this.visit(e, { preserveState: !0, ...n, method: "patch", data: t });
  }
  delete(e, t = {}) {
    return this.visit(e, { preserveState: !0, ...t, method: "delete" });
  }
  reload(e = {}) {
    if (!(typeof window > "u")) return this.visit(window.location.href, { ...e, preserveScroll: !0, preserveState: !0, async: !0, headers: { ...e.headers || {}, "Cache-Control": "no-cache" } });
  }
  remember(e, t = "default") {
    le.remember(e, t);
  }
  restore(e = "default") {
    return le.restore(e);
  }
  on(e, t) {
    return typeof window > "u" ? () => {
    } : an.onGlobalEvent(e, t);
  }
  cancel() {
    this.syncRequestStream.cancelInFlight();
  }
  cancelAll() {
    this.asyncRequestStream.cancelInFlight(), this.syncRequestStream.cancelInFlight();
  }
  poll(e, t = {}, n = {}) {
    return Kb.add(e, () => this.reload(t), { autoStart: n.autoStart ?? !0, keepAlive: n.keepAlive ?? !1 });
  }
  visit(e, t = {}) {
    let n = this.getPendingVisit(e, { ...t, showProgress: t.showProgress ?? !t.async }), r = this.getVisitEvents(t);
    if (r.onBefore(n) === !1 || !Vu(n)) return;
    let o = n.async ? this.asyncRequestStream : this.syncRequestStream;
    o.interruptInFlight(), !ee.isCleared() && !n.preserveUrl && st.save();
    let a = { ...n, ...r }, i = tn.get(a);
    i ? (Qu(i.inFlight), tn.use(i, a)) : (Qu(!0), o.send(Xu.create(a, ee.get())));
  }
  getCached(e, t = {}) {
    return tn.findCached(this.getPrefetchParams(e, t));
  }
  flush(e, t = {}) {
    tn.remove(this.getPrefetchParams(e, t));
  }
  flushAll() {
    tn.removeAll();
  }
  getPrefetching(e, t = {}) {
    return tn.findInFlight(this.getPrefetchParams(e, t));
  }
  prefetch(e, t = {}, { cacheFor: n = 3e4 }) {
    if (t.method !== "get") throw new Error("Prefetch requests must use the GET method");
    let r = this.getPendingVisit(e, { ...t, async: !0, showProgress: !1, prefetch: !0 }), o = r.url.origin + r.url.pathname + r.url.search, a = window.location.origin + window.location.pathname + window.location.search;
    if (o === a) return;
    let i = this.getVisitEvents(t);
    if (i.onBefore(r) === !1 || !Vu(r)) return;
    d1(), this.asyncRequestStream.interruptInFlight();
    let s = { ...r, ...i };
    new Promise((c) => {
      let l = () => {
        ee.get() ? c() : setTimeout(l, 50);
      };
      l();
    }).then(() => {
      tn.add(s, (c) => {
        this.asyncRequestStream.send(Xu.create(c, ee.get()));
      }, { cacheFor: n });
    });
  }
  clearHistory() {
    le.clear();
  }
  decryptHistory() {
    return le.decrypt();
  }
  replace(e) {
    this.clientVisit(e, { replace: !0 });
  }
  push(e) {
    this.clientVisit(e);
  }
  clientVisit(e, { replace: t = !1 } = {}) {
    let n = ee.get(), r = typeof e.props == "function" ? e.props(n.props) : e.props ?? n.props;
    ee.set({ ...n, ...e, props: r }, { replace: t, preserveScroll: e.preserveScroll, preserveState: e.preserveState });
  }
  getPrefetchParams(e, t) {
    return { ...this.getPendingVisit(e, { ...t, async: !0, showProgress: !1, prefetch: !0 }), ...this.getVisitEvents(t) };
  }
  getPendingVisit(e, t, n = {}) {
    let r = { method: "get", data: {}, replace: !1, preserveScroll: !1, preserveState: !1, only: [], except: [], headers: {}, errorBag: "", forceFormData: !1, queryStringArrayFormat: "brackets", async: !1, showProgress: !0, fresh: !1, reset: [], preserveUrl: !1, prefetch: !1, ...t }, [o, a] = Bb(e, r.data, r.method, r.forceFormData, r.queryStringArrayFormat);
    return { cancelled: !1, completed: !1, interrupted: !1, ...r, ...n, url: o, data: a };
  }
  getVisitEvents(e) {
    return { onCancelToken: e.onCancelToken || (() => {
    }), onBefore: e.onBefore || (() => {
    }), onStart: e.onStart || (() => {
    }), onProgress: e.onProgress || (() => {
    }), onFinish: e.onFinish || (() => {
    }), onCancel: e.onCancel || (() => {
    }), onSuccess: e.onSuccess || (() => {
    }), onError: e.onError || (() => {
    }), onPrefetched: e.onPrefetched || (() => {
    }), onPrefetching: e.onPrefetching || (() => {
    }) };
  }
  loadDeferredProps() {
    var t;
    let e = (t = ee.get()) == null ? void 0 : t.deferredProps;
    e && Object.entries(e).forEach(([n, r]) => {
      this.reload({ only: r });
    });
  }
}, t1 = { buildDOMElement(e) {
  let t = document.createElement("template");
  t.innerHTML = e;
  let n = t.content.firstChild;
  if (!e.startsWith("<script ")) return n;
  let r = document.createElement("script");
  return r.innerHTML = n.innerHTML, n.getAttributeNames().forEach((o) => {
    r.setAttribute(o, n.getAttribute(o) || "");
  }), r;
}, isInertiaManagedElement(e) {
  return e.nodeType === Node.ELEMENT_NODE && e.getAttribute("inertia") !== null;
}, findMatchingElementIndex(e, t) {
  let n = e.getAttribute("inertia");
  return n !== null ? t.findIndex((r) => r.getAttribute("inertia") === n) : -1;
}, update: _i(function(e) {
  let t = e.map((n) => this.buildDOMElement(n));
  Array.from(document.head.childNodes).filter((n) => this.isInertiaManagedElement(n)).forEach((n) => {
    var a, i;
    let r = this.findMatchingElementIndex(n, t);
    if (r === -1) {
      (a = n == null ? void 0 : n.parentNode) == null || a.removeChild(n);
      return;
    }
    let o = t.splice(r, 1)[0];
    o && !n.isEqualNode(o) && ((i = n == null ? void 0 : n.parentNode) == null || i.replaceChild(o, n));
  }), t.forEach((n) => document.head.appendChild(n));
}, 1) };
function n1(e, t, n) {
  let r = {}, o = 0;
  function a() {
    let u = o += 1;
    return r[u] = [], u.toString();
  }
  function i(u) {
    u === null || Object.keys(r).indexOf(u) === -1 || (delete r[u], l());
  }
  function s(u, f = []) {
    u !== null && Object.keys(r).indexOf(u) > -1 && (r[u] = f), l();
  }
  function c() {
    let u = t(""), f = { ...u ? { title: `<title inertia="">${u}</title>` } : {} }, p = Object.values(r).reduce((h, d) => h.concat(d), []).reduce((h, d) => {
      if (d.indexOf("<") === -1) return h;
      if (d.indexOf("<title ") === 0) {
        let g = d.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return h.title = g ? `${g[1]}${t(g[2])}${g[3]}` : d, h;
      }
      let w = d.match(/ inertia="[^"]+"/);
      return w ? h[w[0]] = d : h[Object.keys(h).length] = d, h;
    }, f);
    return Object.values(p);
  }
  function l() {
    e ? n(c()) : t1.update(c());
  }
  return l(), { forceUpdate: l, createProvider: function() {
    let u = a();
    return { update: (f) => s(u, f), disconnect: () => i(u) };
  } };
}
var ve = "nprogress", Ee = { minimum: 0.08, easing: "linear", positionUsing: "translate3d", speed: 200, trickle: !0, trickleSpeed: 200, showSpinner: !0, barSelector: '[role="bar"]', spinnerSelector: '[role="spinner"]', parent: "body", color: "#29d", includeCSS: !0, template: ['<div class="bar" role="bar">', '<div class="peg"></div>', "</div>", '<div class="spinner" role="spinner">', '<div class="spinner-icon"></div>', "</div>"].join("") }, Yt = null, r1 = (e) => {
  Object.assign(Ee, e), Ee.includeCSS && u1(Ee.color);
}, Oo = (e) => {
  let t = Bd();
  e = Vd(e, Ee.minimum, 1), Yt = e === 1 ? null : e;
  let n = a1(!t), r = n.querySelector(Ee.barSelector), o = Ee.speed, a = Ee.easing;
  n.offsetWidth, l1((i) => {
    let s = Ee.positionUsing === "translate3d" ? { transition: `all ${o}ms ${a}`, transform: `translate3d(${qr(e)}%,0,0)` } : Ee.positionUsing === "translate" ? { transition: `all ${o}ms ${a}`, transform: `translate(${qr(e)}%,0)` } : { marginLeft: `${qr(e)}%` };
    for (let c in s) r.style[c] = s[c];
    if (e !== 1) return setTimeout(i, o);
    n.style.transition = "none", n.style.opacity = "1", n.offsetWidth, setTimeout(() => {
      n.style.transition = `all ${o}ms linear`, n.style.opacity = "0", setTimeout(() => {
        zd(), i();
      }, o);
    }, o);
  });
}, Bd = () => typeof Yt == "number", jd = () => {
  Yt || Oo(0);
  let e = function() {
    setTimeout(function() {
      Yt && (qd(), e());
    }, Ee.trickleSpeed);
  };
  Ee.trickle && e();
}, o1 = (e) => {
  !e && !Yt || (qd(0.3 + 0.5 * Math.random()), Oo(1));
}, qd = (e) => {
  let t = Yt;
  if (t === null) return jd();
  if (!(t > 1)) return e = typeof e == "number" ? e : (() => {
    let n = { 0.1: [0, 0.2], 0.04: [0.2, 0.5], 0.02: [0.5, 0.8], 5e-3: [0.8, 0.99] };
    for (let r in n) if (t >= n[r][0] && t < n[r][1]) return parseFloat(r);
    return 0;
  })(), Oo(Vd(t + e, 0, 0.994));
}, a1 = (e) => {
  var a;
  if (i1()) return document.getElementById(ve);
  document.documentElement.classList.add(`${ve}-busy`);
  let t = document.createElement("div");
  t.id = ve, t.innerHTML = Ee.template;
  let n = t.querySelector(Ee.barSelector), r = e ? "-100" : qr(Yt || 0), o = Ud();
  return n.style.transition = "all 0 linear", n.style.transform = `translate3d(${r}%,0,0)`, Ee.showSpinner || ((a = t.querySelector(Ee.spinnerSelector)) == null || a.remove()), o !== document.body && o.classList.add(`${ve}-custom-parent`), o.appendChild(t), t;
}, Ud = () => s1(Ee.parent) ? Ee.parent : document.querySelector(Ee.parent), zd = () => {
  var e;
  document.documentElement.classList.remove(`${ve}-busy`), Ud().classList.remove(`${ve}-custom-parent`), (e = document.getElementById(ve)) == null || e.remove();
}, i1 = () => document.getElementById(ve) !== null, s1 = (e) => typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
function Vd(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
var qr = (e) => (-1 + e) * 100, l1 = /* @__PURE__ */ (() => {
  let e = [], t = () => {
    let n = e.shift();
    n && n(t);
  };
  return (n) => {
    e.push(n), e.length === 1 && t();
  };
})(), u1 = (e) => {
  let t = document.createElement("style");
  t.textContent = `
    #${ve} {
      pointer-events: none;
    }

    #${ve} .bar {
      background: ${e};

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #${ve} .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
      opacity: 1.0;

      transform: rotate(3deg) translate(0px, -4px);
    }

    #${ve} .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #${ve} .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${e};
      border-left-color: ${e};
      border-radius: 50%;

      animation: ${ve}-spinner 400ms linear infinite;
    }

    .${ve}-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .${ve}-custom-parent #${ve} .spinner,
    .${ve}-custom-parent #${ve} .bar {
      position: absolute;
    }

    @keyframes ${ve}-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `, document.head.appendChild(t);
}, Dn = (() => {
  if (typeof document > "u") return null;
  let e = document.createElement("style");
  return e.innerHTML = `#${ve} { display: none; }`, e;
})(), c1 = () => {
  if (Dn && document.head.contains(Dn)) return document.head.removeChild(Dn);
}, f1 = () => {
  Dn && !document.head.contains(Dn) && document.head.appendChild(Dn);
}, Hd = { configure: r1, isStarted: Bd, done: o1, set: Oo, remove: zd, start: jd, status: Yt, show: c1, hide: f1 }, Ur = 0, Qu = (e = !1) => {
  Ur = Math.max(0, Ur - 1), (e || Ur === 0) && Hd.show();
}, d1 = () => {
  Ur++, Hd.hide();
};
function zr(e) {
  let t = e.currentTarget.tagName.toLowerCase() === "a";
  return !(e.target && (e == null ? void 0 : e.target).isContentEditable || e.defaultPrevented || t && e.altKey || t && e.ctrlKey || t && e.metaKey || t && e.shiftKey || t && "button" in e && e.button !== 0);
}
var wt = new e1();
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
* @license MIT */
function Wd(e) {
  switch (typeof e) {
    case "number":
    case "symbol":
      return !1;
    case "string":
      return e.includes(".") || e.includes("[") || e.includes("]");
  }
}
function Kd(e) {
  var t;
  return typeof e == "string" || typeof e == "symbol" ? e : Object.is((t = e == null ? void 0 : e.valueOf) == null ? void 0 : t.call(e), -0) ? "-0" : String(e);
}
function As(e) {
  const t = [], n = e.length;
  if (n === 0)
    return t;
  let r = 0, o = "", a = "", i = !1;
  for (e.charCodeAt(0) === 46 && (t.push(""), r++); r < n; ) {
    const s = e[r];
    a ? s === "\\" && r + 1 < n ? (r++, o += e[r]) : s === a ? a = "" : o += s : i ? s === '"' || s === "'" ? a = s : s === "]" ? (i = !1, t.push(o), o = "") : o += s : s === "[" ? (i = !0, o && (t.push(o), o = "")) : s === "." ? o && (t.push(o), o = "") : o += s, r++;
  }
  return o && t.push(o), t;
}
function Vr(e, t, n) {
  if (e == null)
    return n;
  switch (typeof t) {
    case "string": {
      const r = e[t];
      return r === void 0 ? Wd(t) ? Vr(e, As(t), n) : n : r;
    }
    case "number":
    case "symbol": {
      typeof t == "number" && (t = Kd(t));
      const r = e[t];
      return r === void 0 ? n : r;
    }
    default: {
      if (Array.isArray(t))
        return p1(e, t, n);
      Object.is(t == null ? void 0 : t.valueOf(), -0) ? t = "-0" : t = String(t);
      const r = e[t];
      return r === void 0 ? n : r;
    }
  }
}
function p1(e, t, n) {
  if (t.length === 0)
    return n;
  let r = e;
  for (let o = 0; o < t.length; o++) {
    if (r == null)
      return n;
    r = r[t[o]];
  }
  return r === void 0 ? n : r;
}
function Zu(e) {
  return e !== null && (typeof e == "object" || typeof e == "function");
}
const h1 = /^(?:0|[1-9]\d*)$/;
function Gd(e, t = Number.MAX_SAFE_INTEGER) {
  switch (typeof e) {
    case "number":
      return Number.isInteger(e) && e >= 0 && e < t;
    case "symbol":
      return !1;
    case "string":
      return h1.test(e);
  }
}
function m1(e) {
  return e !== null && typeof e == "object" && Yr(e) === "[object Arguments]";
}
function y1(e, t) {
  let n;
  if (Array.isArray(t) ? n = t : typeof t == "string" && Wd(t) && (e == null ? void 0 : e[t]) == null ? n = As(t) : n = [t], n.length === 0)
    return !1;
  let r = e;
  for (let o = 0; o < n.length; o++) {
    const a = n[o];
    if ((r == null || !Object.hasOwn(r, a)) && !((Array.isArray(r) || m1(r)) && Gd(a) && a < r.length))
      return !1;
    r = r[a];
  }
  return !0;
}
const g1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, v1 = /^\w*$/;
function b1(e, t) {
  return Array.isArray(e) ? !1 : typeof e == "number" || typeof e == "boolean" || e == null || nv(e) ? !0 : typeof e == "string" && (v1.test(e) || !g1.test(e)) || t != null && Object.hasOwn(t, e);
}
const w1 = (e, t, n) => {
  const r = e[t];
  (!(Object.hasOwn(e, t) && Gf(r, n)) || n === void 0 && !(t in e)) && (e[t] = n);
};
function x1(e, t, n, r) {
  if (e == null && !Zu(e))
    return e;
  const o = b1(t, e) ? [t] : Array.isArray(t) ? t : typeof t == "string" ? As(t) : [t];
  let a = e;
  for (let i = 0; i < o.length && a != null; i++) {
    const s = Kd(o[i]);
    let c;
    if (i === o.length - 1)
      c = n(a[s]);
    else {
      const l = a[s], u = r(l);
      c = u !== void 0 ? u : Zu(l) ? l : Gd(o[i + 1]) ? [] : {};
    }
    w1(a, s, c), a = a[s];
  }
  return e;
}
function Pr(e, t, n) {
  return x1(e, t, () => n, () => {
  });
}
function S1(e, t) {
  let n = typeof e == "string" ? e : null, r = (typeof e == "string" ? t : e) ?? {}, o = n ? wt.restore(n) : null, a = it(typeof r == "function" ? r() : r), i = null, s = null, c = (u) => u, l = fr({ ...o ? o.data : it(a), isDirty: !1, errors: o ? o.errors : {}, hasErrors: !1, processing: !1, progress: null, wasSuccessful: !1, recentlySuccessful: !1, data() {
    return Object.keys(a).reduce((u, f) => Pr(u, f, Vr(this, f)), {});
  }, transform(u) {
    return c = u, this;
  }, defaults(u, f) {
    if (typeof r == "function") throw new Error("You cannot call `defaults()` when using a function to define your form data.");
    return typeof u > "u" ? (a = it(this.data()), this.isDirty = !1) : a = typeof u == "string" ? Pr(it(a), u, f) : Object.assign({}, it(a), u), this;
  }, reset(...u) {
    let f = it(typeof r == "function" ? r() : a), p = it(f);
    return u.length === 0 ? (a = p, Object.assign(this, f)) : u.filter((h) => y1(p, h)).forEach((h) => {
      Pr(a, h, Vr(p, h)), Pr(this, h, Vr(f, h));
    }), this;
  }, setError(u, f) {
    return Object.assign(this.errors, typeof u == "string" ? { [u]: f } : u), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, clearErrors(...u) {
    return this.errors = Object.keys(this.errors).reduce((f, p) => ({ ...f, ...u.length > 0 && !u.includes(p) ? { [p]: this.errors[p] } : {} }), {}), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, submit(...u) {
    let f = typeof u[0] == "object", p = f ? u[0].method : u[0], h = f ? u[0].url : u[1], d = (f ? u[1] : u[2]) ?? {}, w = c(this.data()), g = { ...d, onCancelToken: (y) => {
      if (i = y, d.onCancelToken) return d.onCancelToken(y);
    }, onBefore: (y) => {
      if (this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(s), d.onBefore) return d.onBefore(y);
    }, onStart: (y) => {
      if (this.processing = !0, d.onStart) return d.onStart(y);
    }, onProgress: (y) => {
      if (this.progress = y, d.onProgress) return d.onProgress(y);
    }, onSuccess: async (y) => {
      this.processing = !1, this.progress = null, this.clearErrors(), this.wasSuccessful = !0, this.recentlySuccessful = !0, s = setTimeout(() => this.recentlySuccessful = !1, 2e3);
      let v = d.onSuccess ? await d.onSuccess(y) : null;
      return a = it(this.data()), this.isDirty = !1, v;
    }, onError: (y) => {
      if (this.processing = !1, this.progress = null, this.clearErrors().setError(y), d.onError) return d.onError(y);
    }, onCancel: () => {
      if (this.processing = !1, this.progress = null, d.onCancel) return d.onCancel();
    }, onFinish: (y) => {
      if (this.processing = !1, this.progress = null, i = null, d.onFinish) return d.onFinish(y);
    } };
    p === "delete" ? wt.delete(h, { ...g, data: w }) : wt[p](h, w, g);
  }, get(u, f) {
    this.submit("get", u, f);
  }, post(u, f) {
    this.submit("post", u, f);
  }, put(u, f) {
    this.submit("put", u, f);
  }, patch(u, f) {
    this.submit("patch", u, f);
  }, delete(u, f) {
    this.submit("delete", u, f);
  }, cancel() {
    i && i.cancel();
  }, __rememberable: n === null, __remember() {
    return { data: this.data(), errors: this.errors };
  }, __restore(u) {
    Object.assign(this, u.data), this.setError(u.errors);
  } });
  return pe(l, (u) => {
    l.isDirty = !dv(l.data(), a), n && wt.remember(it(u.__remember()), n);
  }, { immediate: !0, deep: !0 }), l;
}
var Ge = q(null), qe = q(null), Va = io(null), kr = q(null), ec = null;
te({ name: "Inertia", props: { initialPage: { type: Object, required: !0 }, initialComponent: { type: Object, required: !1 }, resolveComponent: { type: Function, required: !1 }, titleCallback: { type: Function, required: !1, default: (e) => e }, onHeadUpdate: { type: Function, required: !1, default: () => () => {
} } }, setup({ initialPage: e, initialComponent: t, resolveComponent: n, titleCallback: r, onHeadUpdate: o }) {
  Ge.value = t ? si(t) : null, qe.value = e, kr.value = null;
  let a = typeof window > "u";
  return ec = n1(a, r, o), a || (wt.init({ initialPage: e, resolveComponent: n, swapComponent: async (i) => {
    Ge.value = si(i.component), qe.value = i.page, kr.value = i.preserveState ? kr.value : Date.now();
  } }), wt.on("navigate", () => ec.forceUpdate())), () => {
    if (Ge.value) {
      Ge.value.inheritAttrs = !!Ge.value.inheritAttrs;
      let i = Me(Ge.value, { ...qe.value.props, key: kr.value });
      return Va.value && (Ge.value.layout = Va.value, Va.value = null), Ge.value.layout ? typeof Ge.value.layout == "function" ? Ge.value.layout(Me, i) : (Array.isArray(Ge.value.layout) ? Ge.value.layout : [Ge.value.layout]).concat(i).reverse().reduce((s, c) => (c.inheritAttrs = !!c.inheritAttrs, Me(c, { ...qe.value.props }, () => s))) : i;
    }
  };
} });
function O1() {
  return fr({ props: W(() => {
    var e;
    return (e = qe.value) == null ? void 0 : e.props;
  }), url: W(() => {
    var e;
    return (e = qe.value) == null ? void 0 : e.url;
  }), component: W(() => {
    var e;
    return (e = qe.value) == null ? void 0 : e.component;
  }), version: W(() => {
    var e;
    return (e = qe.value) == null ? void 0 : e.version;
  }), clearHistory: W(() => {
    var e;
    return (e = qe.value) == null ? void 0 : e.clearHistory;
  }), deferredProps: W(() => {
    var e;
    return (e = qe.value) == null ? void 0 : e.deferredProps;
  }), mergeProps: W(() => {
    var e;
    return (e = qe.value) == null ? void 0 : e.mergeProps;
  }), deepMergeProps: W(() => {
    var e;
    return (e = qe.value) == null ? void 0 : e.deepMergeProps;
  }), rememberedState: W(() => {
    var e;
    return (e = qe.value) == null ? void 0 : e.rememberedState;
  }), encryptHistory: W(() => {
    var e;
    return (e = qe.value) == null ? void 0 : e.encryptHistory;
  }) });
}
var E1 = te({ name: "Deferred", props: { data: { type: [String, Array], required: !0 } }, render() {
  let e = Array.isArray(this.$props.data) ? this.$props.data : [this.$props.data];
  if (!this.$slots.fallback) throw new Error("`<Deferred>` requires a `<template #fallback>` slot");
  return e.every((t) => this.$page.props[t] !== void 0) ? this.$slots.default() : this.$slots.fallback();
} });
te({ props: { title: { type: String, required: !1 } }, data() {
  return { provider: this.$headManager.createProvider() };
}, beforeUnmount() {
  this.provider.disconnect();
}, methods: { isUnaryTag(e) {
  return ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"].indexOf(e.type) > -1;
}, renderTagStart(e) {
  e.props = e.props || {}, e.props.inertia = e.props["head-key"] !== void 0 ? e.props["head-key"] : "";
  let t = Object.keys(e.props).reduce((n, r) => {
    let o = e.props[r];
    return ["key", "head-key"].includes(r) ? n : o === "" ? n + ` ${r}` : n + ` ${r}="${o}"`;
  }, "");
  return `<${e.type}${t}>`;
}, renderTagChildren(e) {
  return typeof e.children == "string" ? e.children : e.children.reduce((t, n) => t + this.renderTag(n), "");
}, isFunctionNode(e) {
  return typeof e.type == "function";
}, isComponentNode(e) {
  return typeof e.type == "object";
}, isCommentNode(e) {
  return /(comment|cmt)/i.test(e.type.toString());
}, isFragmentNode(e) {
  return /(fragment|fgt|symbol\(\))/i.test(e.type.toString());
}, isTextNode(e) {
  return /(text|txt)/i.test(e.type.toString());
}, renderTag(e) {
  if (this.isTextNode(e)) return e.children;
  if (this.isFragmentNode(e) || this.isCommentNode(e)) return "";
  let t = this.renderTagStart(e);
  return e.children && (t += this.renderTagChildren(e)), this.isUnaryTag(e) || (t += `</${e.type}>`), t;
}, addTitleElement(e) {
  return this.title && !e.find((t) => t.startsWith("<title")) && e.push(`<title inertia>${this.title}</title>`), e;
}, renderNodes(e) {
  return this.addTitleElement(e.flatMap((t) => this.resolveNode(t)).map((t) => this.renderTag(t)).filter((t) => t));
}, resolveNode(e) {
  return this.isFunctionNode(e) ? this.resolveNode(e.type()) : this.isComponentNode(e) ? (console.warn("Using components in the <Head> component is not supported."), []) : this.isTextNode(e) && e.children ? e : this.isFragmentNode(e) && e.children ? e.children.flatMap((t) => this.resolveNode(t)) : this.isCommentNode(e) ? [] : e;
} }, render() {
  this.provider.update(this.renderNodes(this.$slots.default ? this.$slots.default() : []));
} });
te({ name: "Link", props: { as: { type: String, default: "a" }, data: { type: Object, default: () => ({}) }, href: { type: [String, Object], required: !0 }, method: { type: String, default: "get" }, replace: { type: Boolean, default: !1 }, preserveScroll: { type: Boolean, default: !1 }, preserveState: { type: Boolean, default: null }, only: { type: Array, default: () => [] }, except: { type: Array, default: () => [] }, headers: { type: Object, default: () => ({}) }, queryStringArrayFormat: { type: String, default: "brackets" }, async: { type: Boolean, default: !1 }, prefetch: { type: [Boolean, String, Array], default: !1 }, cacheFor: { type: [Number, String, Array], default: 0 }, onStart: { type: Function, default: (e) => {
} }, onProgress: { type: Function, default: () => {
} }, onFinish: { type: Function, default: () => {
} }, onBefore: { type: Function, default: () => {
} }, onCancel: { type: Function, default: () => {
} }, onSuccess: { type: Function, default: () => {
} }, onError: { type: Function, default: () => {
} }, onCancelToken: { type: Function, default: () => {
} } }, setup(e, { slots: t, attrs: n }) {
  let r = q(0), o = q(null), a = e.prefetch === !0 ? ["hover"] : e.prefetch === !1 ? [] : Array.isArray(e.prefetch) ? e.prefetch : [e.prefetch], i = e.cacheFor !== 0 ? e.cacheFor : a.length === 1 && a[0] === "click" ? 0 : 3e4;
  Re(() => {
    a.includes("mount") && w();
  }), Qt(() => {
    clearTimeout(o.value);
  });
  let s = typeof e.href == "object" ? e.href.method : e.method.toLowerCase(), c = s !== "get" ? "button" : e.as.toLowerCase(), l = W(() => Es(s, typeof e.href == "object" ? e.href.url : e.href || "", e.data, e.queryStringArrayFormat)), u = W(() => l.value[0]), f = W(() => l.value[1]), p = W(() => ({ a: { href: u.value }, button: { type: "button" } })), h = { data: f.value, method: s, replace: e.replace, preserveScroll: e.preserveScroll, preserveState: e.preserveState ?? s !== "get", only: e.only, except: e.except, headers: e.headers, async: e.async }, d = { ...h, onCancelToken: e.onCancelToken, onBefore: e.onBefore, onStart: (b) => {
    r.value++, e.onStart(b);
  }, onProgress: e.onProgress, onFinish: (b) => {
    r.value--, e.onFinish(b);
  }, onCancel: e.onCancel, onSuccess: e.onSuccess, onError: e.onError }, w = () => {
    wt.prefetch(u.value, h, { cacheFor: i });
  }, g = { onClick: (b) => {
    zr(b) && (b.preventDefault(), wt.visit(u.value, d));
  } }, y = { onMouseenter: () => {
    o.value = setTimeout(() => {
      w();
    }, 75);
  }, onMouseleave: () => {
    clearTimeout(o.value);
  }, onClick: g.onClick }, v = { onMousedown: (b) => {
    zr(b) && (b.preventDefault(), w());
  }, onMouseup: (b) => {
    b.preventDefault(), wt.visit(u.value, d);
  }, onClick: (b) => {
    zr(b) && b.preventDefault();
  } };
  return () => Me(c, { ...n, ...p.value[c] || {}, "data-loading": r.value > 0 ? "" : void 0, ...a.includes("hover") ? y : a.includes("click") ? v : g }, t);
} });
te({ name: "WhenVisible", props: { data: { type: [String, Array] }, params: { type: Object }, buffer: { type: Number, default: 0 }, as: { type: String, default: "div" }, always: { type: Boolean, default: !1 } }, data() {
  return { loaded: !1, fetching: !1, observer: null };
}, unmounted() {
  var e;
  (e = this.observer) == null || e.disconnect();
}, mounted() {
  this.observer = new IntersectionObserver((e) => {
    if (!e[0].isIntersecting || (this.$props.always || this.observer.disconnect(), this.fetching)) return;
    this.fetching = !0;
    let t = this.getReloadParams();
    wt.reload({ ...t, onStart: (n) => {
      var r;
      this.fetching = !0, (r = t.onStart) == null || r.call(t, n);
    }, onFinish: (n) => {
      var r;
      this.loaded = !0, this.fetching = !1, (r = t.onFinish) == null || r.call(t, n);
    } });
  }, { rootMargin: `${this.$props.buffer}px` }), this.observer.observe(this.$el.nextSibling);
}, methods: { getReloadParams() {
  if (this.$props.data) return { only: Array.isArray(this.$props.data) ? this.$props.data : [this.$props.data] };
  if (!this.$props.params) throw new Error("You must provide either a `data` or `params` prop.");
  return this.$props.params;
} }, render() {
  let e = [];
  return (this.$props.always || !this.loaded) && e.push(Me(this.$props.as)), this.loaded ? this.$slots.default && e.push(this.$slots.default()) : e.push(this.$slots.fallback ? this.$slots.fallback() : null), e;
} });
function WE(e) {
  return e.toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
function A1(e) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP"
  }).format(e);
}
function KE(e) {
  return O1().props.auth.permissions.includes(e);
}
let ji = null;
function GE(e) {
  ji = e;
}
function vr() {
  return ji === null && console.error(
    `Inertia router is not set. Please set it first:

// app.js
import { setInertiaRouter } from '@nb/vue-components';
import { router } from '@inertiajs/vue3';
// createInertiaApp(...);
setInertiaRouter(router);

`
  ), ji;
}
let qi = null;
function YE(e) {
  qi = e;
}
function C1() {
  return qi === null && console.error(
    `Inertia page is not set. Please set it first:

// app.js
import { setInertiaPage } from '@nb/vue-components';
// createInertiaApp(...);
setInertiaPage(page);

`
  ), qi;
}
const ut = te({
  name: "Link",
  props: {
    as: {
      type: String,
      default: "a"
    },
    data: {
      type: Object,
      default: () => ({})
    },
    href: {
      type: String,
      required: !0
    },
    method: {
      type: String,
      default: "get"
    },
    replace: {
      type: Boolean,
      default: !1
    },
    preserveScroll: {
      type: Boolean,
      default: !1
    },
    preserveState: {
      type: Boolean,
      default: null
    },
    only: {
      type: Array,
      default: () => []
    },
    headers: {
      type: Object,
      default: () => ({})
    },
    queryStringArrayFormat: {
      type: String,
      default: "brackets"
    }
  },
  setup(e, { slots: t, attrs: n }) {
    return () => {
      const r = vr(), o = e.as.toLowerCase(), a = e.method.toLowerCase(), [i, s] = Es(
        a,
        e.href || "",
        e.data,
        e.queryStringArrayFormat
      );
      return o === "a" && a !== "get" && console.warn(
        `Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${i}" method="${a}" as="button">...</Link>`
      ), Me(
        e.as,
        {
          ...n,
          ...o === "a" ? { href: i } : {},
          onClick: (c) => {
            zr(c) && (c.preventDefault(), r.visit(i, {
              data: s,
              method: a,
              replace: e.replace,
              preserveScroll: e.preserveScroll,
              preserveState: e.preserveState ?? a !== "get",
              only: e.only,
              headers: e.headers,
              onCancelToken: n.onCancelToken || (() => ({})),
              onBefore: n.onBefore || (() => ({})),
              onStart: n.onStart || (() => ({})),
              onProgress: n.onProgress || (() => ({})),
              onFinish: n.onFinish || (() => ({})),
              onCancel: n.onCancel || (() => ({})),
              onSuccess: n.onSuccess || (() => ({})),
              onError: n.onError || (() => ({}))
            }));
          }
        },
        t
      );
    };
  }
});
function br(e, t, n, r) {
  function o(a) {
    return a instanceof n ? a : new n(function(i) {
      i(a);
    });
  }
  return new (n || (n = Promise))(function(a, i) {
    function s(u) {
      try {
        l(r.next(u));
      } catch (f) {
        i(f);
      }
    }
    function c(u) {
      try {
        l(r.throw(u));
      } catch (f) {
        i(f);
      }
    }
    function l(u) {
      u.done ? a(u.value) : o(u.value).then(s, c);
    }
    l((r = r.apply(e, t || [])).next());
  });
}
function wr(e, t) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, o, a, i = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return i.next = s(0), i.throw = s(1), i.return = s(2), typeof Symbol == "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function s(l) {
    return function(u) {
      return c([l, u]);
    };
  }
  function c(l) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; i && (i = 0, l[0] && (n = 0)), n; ) try {
      if (r = 1, o && (a = l[0] & 2 ? o.return : l[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, l[1])).done) return a;
      switch (o = 0, a && (l = [l[0] & 2, a.value]), l[0]) {
        case 0:
        case 1:
          a = l;
          break;
        case 4:
          return n.label++, { value: l[1], done: !1 };
        case 5:
          n.label++, o = l[1], l = [0];
          continue;
        case 7:
          l = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (l[0] === 6 || l[0] === 2)) {
            n = 0;
            continue;
          }
          if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) {
            n.label = l[1];
            break;
          }
          if (l[0] === 6 && n.label < a[1]) {
            n.label = a[1], a = l;
            break;
          }
          if (a && n.label < a[2]) {
            n.label = a[2], n.ops.push(l);
            break;
          }
          a[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      l = t.call(e, n);
    } catch (u) {
      l = [6, u], o = 0;
    } finally {
      r = a = 0;
    }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function P1(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), o, a = [], i;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; ) a.push(o.value);
  } catch (s) {
    i = { error: s };
  } finally {
    try {
      o && !o.done && (n = r.return) && n.call(r);
    } finally {
      if (i) throw i.error;
    }
  }
  return a;
}
function k1() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(P1(arguments[t]));
  return e;
}
var T1 = /* @__PURE__ */ new Map([
  ["avi", "video/avi"],
  ["gif", "image/gif"],
  ["ico", "image/x-icon"],
  ["jpeg", "image/jpeg"],
  ["jpg", "image/jpeg"],
  ["mkv", "video/x-matroska"],
  ["mov", "video/quicktime"],
  ["mp4", "video/mp4"],
  ["pdf", "application/pdf"],
  ["png", "image/png"],
  ["zip", "application/zip"],
  ["doc", "application/msword"],
  ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
]);
function Eo(e, t) {
  var n = D1(e);
  if (typeof n.path != "string") {
    var r = e.webkitRelativePath;
    Object.defineProperty(n, "path", {
      value: typeof t == "string" ? t : typeof r == "string" && r.length > 0 ? r : e.name,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return n;
}
function D1(e) {
  var t = e.name, n = t && t.lastIndexOf(".") !== -1;
  if (n && !e.type) {
    var r = t.split(".").pop().toLowerCase(), o = T1.get(r);
    o && Object.defineProperty(e, "type", {
      value: o,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
var $1 = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function F1(e) {
  return br(this, void 0, void 0, function() {
    return wr(this, function(t) {
      return [2, R1(e) && e.dataTransfer ? N1(e.dataTransfer, e.type) : I1(e)];
    });
  });
}
function R1(e) {
  return !!e.dataTransfer;
}
function I1(e) {
  var t = L1(e.target) ? e.target.files ? Ui(e.target.files) : [] : [];
  return t.map(function(n) {
    return Eo(n);
  });
}
function L1(e) {
  return e !== null;
}
function N1(e, t) {
  return br(this, void 0, void 0, function() {
    var n, r;
    return wr(this, function(o) {
      switch (o.label) {
        case 0:
          return e.items ? (n = Ui(e.items).filter(function(a) {
            return a.kind === "file";
          }), t !== "drop" ? [2, n] : [4, Promise.all(n.map(_1))]) : [3, 2];
        case 1:
          return r = o.sent(), [2, tc(Yd(r))];
        case 2:
          return [2, tc(Ui(e.files).map(function(a) {
            return Eo(a);
          }))];
      }
    });
  });
}
function tc(e) {
  return e.filter(function(t) {
    return $1.indexOf(t.name) === -1;
  });
}
function Ui(e) {
  for (var t = [], n = 0; n < e.length; n++) {
    var r = e[n];
    t.push(r);
  }
  return t;
}
function _1(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return nc(e);
  var t = e.webkitGetAsEntry();
  return t && t.isDirectory ? Xd(t) : nc(e);
}
function Yd(e) {
  return e.reduce(function(t, n) {
    return k1(t, Array.isArray(n) ? Yd(n) : [n]);
  }, []);
}
function nc(e) {
  var t = e.getAsFile();
  if (!t)
    return Promise.reject(e + " is not a File");
  var n = Eo(t);
  return Promise.resolve(n);
}
function M1(e) {
  return br(this, void 0, void 0, function() {
    return wr(this, function(t) {
      return [2, e.isDirectory ? Xd(e) : B1(e)];
    });
  });
}
function Xd(e) {
  var t = e.createReader();
  return new Promise(function(n, r) {
    var o = [];
    function a() {
      var i = this;
      t.readEntries(function(s) {
        return br(i, void 0, void 0, function() {
          var c, l, u;
          return wr(this, function(f) {
            switch (f.label) {
              case 0:
                if (s.length) return [3, 5];
                f.label = 1;
              case 1:
                return f.trys.push([1, 3, , 4]), [4, Promise.all(o)];
              case 2:
                return c = f.sent(), n(c), [3, 4];
              case 3:
                return l = f.sent(), r(l), [3, 4];
              case 4:
                return [3, 6];
              case 5:
                u = Promise.all(s.map(M1)), o.push(u), a(), f.label = 6;
              case 6:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, function(s) {
        r(s);
      });
    }
    a();
  });
}
function B1(e) {
  return br(this, void 0, void 0, function() {
    return wr(this, function(t) {
      return [2, new Promise(function(n, r) {
        e.file(function(o) {
          var a = Eo(o, e.fullPath);
          n(a);
        }, function(o) {
          r(o);
        });
      })];
    });
  });
}
var Tr = {}, rc;
function j1() {
  return rc || (rc = 1, Tr.__esModule = !0, Tr.default = function(e, t) {
    if (e && t) {
      var n = Array.isArray(t) ? t : t.split(",");
      if (n.length === 0)
        return !0;
      var r = e.name || "", o = (e.type || "").toLowerCase(), a = o.replace(/\/.*$/, "");
      return n.some(function(i) {
        var s = i.trim().toLowerCase();
        return s.charAt(0) === "." ? r.toLowerCase().endsWith(s) : s.endsWith("/*") ? a === s.replace(/\/.*$/, "") : o === s;
      });
    }
    return !0;
  }), Tr;
}
var q1 = j1();
const Jd = /* @__PURE__ */ pv(q1);
var Ye = function() {
  return Ye = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Ye.apply(this, arguments);
};
function oc(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function U1(e, t, n, r) {
  function o(a) {
    return a instanceof n ? a : new n(function(i) {
      i(a);
    });
  }
  return new (n || (n = Promise))(function(a, i) {
    function s(u) {
      try {
        l(r.next(u));
      } catch (f) {
        i(f);
      }
    }
    function c(u) {
      try {
        l(r.throw(u));
      } catch (f) {
        i(f);
      }
    }
    function l(u) {
      u.done ? a(u.value) : o(u.value).then(s, c);
    }
    l((r = r.apply(e, [])).next());
  });
}
function z1(e, t) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, o, a, i;
  return i = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function s(l) {
    return function(u) {
      return c([l, u]);
    };
  }
  function c(l) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; i && (i = 0, l[0] && (n = 0)), n; ) try {
      if (r = 1, o && (a = l[0] & 2 ? o.return : l[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, l[1])).done) return a;
      switch (o = 0, a && (l = [l[0] & 2, a.value]), l[0]) {
        case 0:
        case 1:
          a = l;
          break;
        case 4:
          return n.label++, { value: l[1], done: !1 };
        case 5:
          n.label++, o = l[1], l = [0];
          continue;
        case 7:
          l = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (l[0] === 6 || l[0] === 2)) {
            n = 0;
            continue;
          }
          if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) {
            n.label = l[1];
            break;
          }
          if (l[0] === 6 && n.label < a[1]) {
            n.label = a[1], a = l;
            break;
          }
          if (a && n.label < a[2]) {
            n.label = a[2], n.ops.push(l);
            break;
          }
          a[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      l = t.call(e, n);
    } catch (u) {
      l = [6, u], o = 0;
    } finally {
      r = a = 0;
    }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function zi(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function V1(e) {
  return e.includes("MSIE") || e.includes("Trident/");
}
function H1(e) {
  return e.includes("Edge/");
}
function W1(e) {
  return e === void 0 && (e = window.navigator.userAgent), V1(e) || H1(e);
}
function ac(e) {
  e.preventDefault();
}
function Dr(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
    return t === "Files" || t === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function eo(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
var K1 = "file-invalid-type", G1 = "file-too-large", Y1 = "file-too-small", X1 = "too-many-files", J1 = {
  code: X1,
  message: "Too many files"
}, Q1 = function(e) {
  e = Array.isArray(e) && e.length === 1 ? e[0] : e;
  var t = Array.isArray(e) ? "one of ".concat(e.join(", ")) : e;
  return {
    code: K1,
    message: "File type must be ".concat(t)
  };
};
function Kn(e) {
  return e != null;
}
var Z1 = Jd.default, ew = Z1 || Jd;
function Qd(e, t) {
  var n = e.type === "application/x-moz-file" || ew(e, t);
  return [n, n ? null : Q1(t)];
}
var ic = function(e) {
  return {
    code: G1,
    message: "File is larger than ".concat(e, " bytes")
  };
}, sc = function(e) {
  return {
    code: Y1,
    message: "File is smaller than ".concat(e, " bytes")
  };
};
function Zd(e, t, n) {
  if (Kn(e.size) && e.size)
    if (Kn(t) && Kn(n)) {
      if (e.size > n)
        return [!1, ic(n)];
      if (e.size < t)
        return [!1, sc(t)];
    } else {
      if (Kn(t) && e.size < t)
        return [!1, sc(t)];
      if (Kn(n) && e.size > n)
        return [!1, ic(n)];
    }
  return [!0, null];
}
function Pt() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return function(n) {
    for (var r = [], o = 1; o < arguments.length; o++)
      r[o - 1] = arguments[o];
    return e.some(function(a) {
      return !eo(n) && a && a.apply(void 0, zi([n], r, !1)), eo(n);
    });
  };
}
function tw(e) {
  var t = e.files, n = e.accept, r = e.minSize, o = e.maxSize, a = e.multiple, i = e.maxFiles;
  return !a && t.length > 1 || a && i >= 1 && t.length > i ? !1 : t.every(function(s) {
    var c = Qd(s, n)[0], l = Zd(s, r, o)[0];
    return c && l;
  });
}
var nw = {
  disabled: !1,
  getFilesFromEvent: F1,
  maxSize: 1 / 0,
  minSize: 0,
  multiple: !0,
  maxFiles: 0,
  preventDropOnDocument: !0,
  noClick: !1,
  noKeyboard: !1,
  noDrag: !1,
  noDragEventsBubbling: !1
};
function ep(e) {
  e === void 0 && (e = {});
  var t = q(Ye(Ye({}, nw), e));
  pe(function() {
    return Ye({}, e);
  }, function(k) {
    t.value = Ye(Ye({}, t.value), k);
  });
  var n = q(), r = q(), o = fr({
    isFocused: !1,
    isFileDialogActive: !1,
    isDragActive: !1,
    isDragAccept: !1,
    isDragReject: !1,
    draggedFiles: [],
    acceptedFiles: [],
    fileRejections: []
  }), a = function() {
    r.value && (o.isFileDialogActive = !0, r.value.value = "", r.value.click());
  }, i = function() {
    var k = t.value.onFileDialogCancel;
    o.isFileDialogActive && setTimeout(function() {
      if (r.value) {
        var _ = r.value.files;
        _ && !_.length && (o.isFileDialogActive = !1, typeof k == "function" && k());
      }
    }, 300);
  };
  function s() {
    o.isFocused = !0;
  }
  function c() {
    o.isFocused = !1;
  }
  function l() {
    var k = t.value.noClick;
    k || (W1() ? setTimeout(a, 0) : a());
  }
  var u = q([]), f = function(k) {
    if (n.value) {
      var _ = n.value.$el || n.value;
      _.contains(k.target) || (k.preventDefault(), u.value = []);
    }
  };
  Re(function() {
    window.addEventListener("focus", i, !1);
    var k = t.value.preventDropOnDocument;
    k && (document.addEventListener("dragover", ac, !1), document.addEventListener("drop", f, !1));
  }), Qt(function() {
    window.removeEventListener("focus", i, !1);
    var k = t.value.preventDropOnDocument;
    k && (document.removeEventListener("dragover", ac), document.removeEventListener("drop", f));
  });
  function p(k) {
    var _ = t.value.noDragEventsBubbling;
    _ && k.stopPropagation();
  }
  function h(k) {
    return U1(this, void 0, void 0, function() {
      var _, m, S, O, x;
      return z1(this, function(z) {
        switch (z.label) {
          case 0:
            return _ = t.value, m = _.getFilesFromEvent, S = _.noDragEventsBubbling, O = _.onDragEnter, k.preventDefault(), p(k), u.value = zi(zi([], u.value, !0), [k.target], !1), Dr(k) ? m ? [4, m(k)] : [2] : [3, 2];
          case 1:
            if (x = z.sent(), x || (x = []), eo(k) && !S)
              return [2];
            o.draggedFiles = x, o.isDragActive = !0, O && O(k), z.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }
  function d(k) {
    var _ = t.value.onDragOver;
    if (k.preventDefault(), p(k), k.dataTransfer)
      try {
        k.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return Dr(k) && _ && _(k), !1;
  }
  function w(k) {
    k.preventDefault(), p(k);
    var _ = u.value.filter(function(O) {
      if (!n.value)
        return !1;
      var x = n.value.$el || n.value;
      return x.contains(O);
    }), m = _.indexOf(k.target);
    if (m !== -1 && _.splice(m, 1), u.value = _, !(_.length > 0)) {
      o.draggedFiles = [], o.isDragActive = !1;
      var S = t.value.onDragLeave;
      Dr(k) && S && S(k);
    }
  }
  function g(k) {
    k.preventDefault(), p(k), u.value = [];
    var _ = t.value, m = _.getFilesFromEvent, S = _.noDragEventsBubbling, O = _.accept, x = _.minSize, z = _.maxSize, M = _.multiple, I = _.maxFiles, H = _.onDrop, oe = _.onDropRejected, Ae = _.onDropAccepted;
    if (Dr(k)) {
      if (!m)
        return;
      Promise.resolve(m(k)).then(function(We) {
        if (!(eo(k) && !S)) {
          var Oe = [], Le = [];
          We.forEach(function(Ce) {
            var Ne = Qd(Ce, O), mt = Ne[0], yt = Ne[1], we = Zd(Ce, x, z), ae = we[0], he = we[1];
            if (mt && ae)
              Oe.push(Ce);
            else {
              var ue = [yt, he].filter(function(ge) {
                return ge;
              });
              Le.push({ file: Ce, errors: ue });
            }
          }), (!M && Oe.length > 1 || M && I >= 1 && Oe.length > I) && (Oe.forEach(function(Ce) {
            Le.push({ file: Ce, errors: [J1] });
          }), Oe.splice(0)), o.acceptedFiles = Oe, o.fileRejections = Le, H && H(Oe, Le, k), Le.length > 0 && oe && oe(Le, k), Oe.length > 0 && Ae && Ae(Oe, k);
        }
      });
    }
    o.isFileDialogActive = !1, o.isDragActive = !1, o.draggedFiles = [], o.acceptedFiles = [], o.fileRejections = [];
  }
  var y = function(k) {
    return t.value.disabled ? void 0 : k;
  }, v = function(k) {
    return t.value.noKeyboard ? void 0 : y(k);
  }, b = function(k) {
    return t.value.noDrag ? void 0 : y(k);
  }, E = function(k) {
    k === void 0 && (k = {});
    var _ = k.onFocus, m = k.onBlur, S = k.onClick, O = k.onDragEnter, x = k.onDragenter, z = k.onDragOver, M = k.onDragover, I = k.onDragLeave, H = k.onDragleave, oe = k.onDrop, Ae = oc(k, ["onFocus", "onBlur", "onClick", "onDragEnter", "onDragenter", "onDragOver", "onDragover", "onDragLeave", "onDragleave", "onDrop"]);
    return Ye(Ye({ onFocus: v(Pt(_, s)), onBlur: v(Pt(m, c)), onClick: y(Pt(S, l)), onDragenter: b(Pt(O, x, h)), onDragover: b(Pt(z, M, d)), onDragleave: b(Pt(I, H, w)), onDrop: b(Pt(oe, g)), ref: n }, !t.value.disabled && !t.value.noKeyboard ? { tabIndex: 0 } : {}), Ae);
  }, P = function(k) {
    k.stopPropagation();
  };
  function $(k) {
    k === void 0 && (k = {});
    var _ = k.onChange, m = k.onClick, S = oc(k, ["onChange", "onClick"]), O = {
      accept: t.value.accept,
      multiple: t.value.multiple,
      style: "display: none",
      type: "file",
      onChange: y(Pt(_, g)),
      onClick: y(Pt(m, P)),
      autoComplete: "off",
      tabIndex: -1,
      ref: r
    };
    return Ye(Ye({}, O), S);
  }
  var F = W(function() {
    return o.draggedFiles ? o.draggedFiles.length : 0;
  }), B = W(function() {
    return F.value > 0 && tw({
      files: o.draggedFiles,
      accept: t.value.accept,
      minSize: t.value.minSize,
      maxSize: t.value.maxSize,
      multiple: t.value.multiple,
      maxFiles: t.value.maxFiles
    });
  }), T = W(function() {
    return F.value > 0 && !B.value;
  });
  return Ye(Ye({}, pn(o)), { isDragAccept: B, isDragReject: T, isFocused: W(function() {
    return o.isFocused && !t.value.disabled;
  }), getRootProps: E, getInputProps: $, rootRef: n, inputRef: r, open: y(a) });
}
const rw = { class: "flex w-full flex-col" }, ow = {
  key: 0,
  class: "select-none text-black"
}, aw = ["name"], iw = {
  key: 1,
  class: "select-none"
}, sw = { key: 2 }, lw = {
  key: 3,
  class: "select-none"
}, XE = {
  __name: "FileDropZoneInput",
  props: {
    accept: { String, default: "image/*" },
    multiple: { Boolean, default: !1 },
    label: String,
    form: Object,
    field: String,
    required: Boolean,
    disabled: Boolean,
    FileDropCustomClass: String
  },
  setup(e) {
    vr();
    const t = e, n = q(null), r = (l) => {
      let u = [];
      return l.split("_").join(" ").split(" ").map(function(f) {
        u.push(f[0].toUpperCase() + f.slice(1));
      }), u.join(" ");
    }, o = (l, u) => {
      var f;
      if (n.value = null, u && u.length > 0) {
        u[0].errors && (n.value = (f = u[0]) == null ? void 0 : f.errors.map((p) => p.message).join(", ")), console.error(u);
        return;
      }
      if (!l || l.length === 0) {
        n.value = `${t.field} is required`;
        return;
      }
      t.multiple ? t.form[t.field] = l : t.form[t.field] = l[0];
    }, { getRootProps: a, getInputProps: i, isDragActive: s, ...c } = ep({
      onDrop: o,
      multiple: t.multiple,
      accept: t.accept
    });
    return (l, u) => {
      var f;
      return A(), N("div", rw, [
        j("div", {
          class: J(["w-full rounded-lg border-2 border-dashed border-primary-200 bg-primary-50 text-primary-200 transition duration-100 ease-in-out hover:border-primary-600 hover:text-primary", {
            "border-primary-400 bg-primary-100": C(s),
            "border-red-600 bg-primary-100": t.form.errors[e.field] ?? n.value,
            [e.FileDropCustomClass]: !!e.FileDropCustomClass
          }])
        }, [
          j("div", Se({ class: "p-4' flex h-20 w-full cursor-copy flex-col items-center justify-center font-medium" }, C(a)()), [
            e.label ? (A(), N("p", ow, Q(e.label), 1)) : Y("", !0),
            j("input", Se(C(i)(), { name: e.field }), null, 16, aw),
            C(s) ? (A(), N("span", iw, "Drop the " + Q(r(e.field)) + " here ...", 1)) : e.form[e.field] ? (A(), N("span", sw, Q(((f = e.form[e.field]) == null ? void 0 : f.path) ?? "File prepared"), 1)) : (A(), N("span", lw, "Drag 'n' drop " + Q(r(e.field)) + " here", 1))
          ], 16)
        ], 2),
        Z(C(mr), {
          class: "mt-2",
          message: t.form.errors[e.field] ?? n.value
        }, null, 8, ["message"])
      ]);
    };
  }
}, uw = { class: "flex w-full" }, cw = { key: 0 }, fw = { key: 1 }, dw = {
  key: 0,
  class: "flex flex-wrap gap-2 p-4"
}, pw = ["onClick"], hw = ["src"], mw = ["value"], yw = { class: "flex items-center gap-4" }, gw = {
  key: 0,
  class: "text-sm text-gray-600"
}, vw = {
  key: 1,
  class: "mt-2"
}, bw = { class: "container mx-auto px-5 py-2 lg:px-8 lg:pt-8" }, ww = { class: "-m-1 flex flex-wrap md:-m-2" }, xw = { class: "flex w-1/3 flex-wrap" }, Sw = { class: "h-full w-full p-1 shadow md:p-2" }, Ow = ["src"], JE = {
  __name: "Images",
  props: {
    images: Object,
    itemType: String,
    itemId: Number,
    canUpload: {
      type: Boolean,
      default: !0
    },
    endPoint: { type: String, default: "images.store" }
  },
  setup(e) {
    const t = vr(), n = e, r = S1({
      image: []
    });
    function o() {
      let f = new FormData();
      r.image.forEach((p, h) => {
        f.append(`image[${h}]`, p.file);
      }), f.append("item_type", n.itemType), f.append("item_id", n.itemId), t.post(route(n.endPoint), f, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        _method: "post",
        forceFormData: !0,
        onFinish: () => {
          r.recentlySuccessful = !0, r.image = [];
        }
      });
    }
    function a(f) {
      f.forEach((p) => {
        let h = new FileReader();
        h.onload = (d) => {
          r.image.push({ file: p, dataUrl: d.target.result });
        }, h.readAsDataURL(p);
      });
    }
    const i = (f, p) => {
      if (p && p.length > 0) {
        console.error(p);
        return;
      }
      a(f);
    };
    function s(f) {
      r.image.splice(f, 1);
    }
    const { getRootProps: c, getInputProps: l, ...u } = ep({
      onDrop: i,
      multiple: !0,
      accept: "image/*"
    });
    return (f, p) => (A(), N(ie, null, [
      e.canUpload ? (A(), N("form", {
        key: 0,
        onSubmit: Tt(o, ["prevent"]),
        class: "w-full"
      }, [
        j("div", uw, [
          j("div", {
            class: J(["w-full rounded-l-lg border-2 border-r-0 border-dashed border-primary-200 bg-primary-50 transition duration-100 ease-in-out hover:border-primary-600 hover:text-primary", { "border-primary-400 bg-primary-100": f.dragEneted }])
          }, [
            j("div", Se({ class: "p-4' flex h-20 w-full cursor-copy items-center justify-center font-medium" }, C(c)()), [
              j("input", xe(De(C(l)())), null, 16),
              f.isDragActive ? (A(), N("span", cw, "Drop the files here ...")) : (A(), N("span", fw, "Drag 'n' drop images here"))
            ], 16),
            C(r).image.length > 0 ? (A(), N("div", dw, [
              (A(!0), N(ie, null, Qe(C(r).image, (h, d) => (A(), N("div", {
                class: "relative cursor-pointer select-none",
                onClick: (w) => s(d),
                key: d
              }, [
                p[0] || (p[0] = j("div", { class: "absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 font-bold text-white" }, " - ", -1)),
                j("img", {
                  src: h.dataUrl,
                  class: "h-auto max-w-[150px]"
                }, null, 8, hw)
              ], 8, pw))), 128))
            ])) : Y("", !0)
          ], 2),
          Z(C(Wp), {
            class: J(["inline rounded-l-none", { "cursor-not-allowed": C(r).image.length == 0 }]),
            disabled: C(r).image.length == 0
          }, {
            default: K(() => p[1] || (p[1] = [
              me(" Upload ")
            ])),
            _: 1
          }, 8, ["class", "disabled"]),
          C(r).progress ? (A(), N("progress", {
            key: 0,
            value: C(r).progress.percentage,
            max: "100"
          }, Q(C(r).progress.percentage) + "%", 9, mw)) : Y("", !0)
        ]),
        f.$page.props.errors.image ? (A(), G(C(mr), {
          key: 0,
          class: "mt-2",
          message: f.$page.props.errors.image
        }, null, 8, ["message"])) : Y("", !0),
        j("div", yw, [
          Z(sn, {
            "enter-from-class": "opacity-0",
            "leave-to-class": "opacity-0",
            class: "transition ease-in-out"
          }, {
            default: K(() => [
              C(r).recentlySuccessful ? (A(), N("p", gw, "Images uploaded.")) : Y("", !0)
            ]),
            _: 1
          })
        ])
      ], 32)) : Y("", !0),
      e.images.length ? (A(), N("div", vw, [
        p[3] || (p[3] = j("hr", null, null, -1)),
        j("div", bw, [
          j("div", ww, [
            (A(!0), N(ie, null, Qe(e.images, (h) => (A(), N("div", xw, [
              j("div", Sw, [
                j("img", {
                  alt: "gallery",
                  class: "block h-auto w-auto rounded-lg object-cover object-center",
                  src: h.url
                }, null, 8, Ow),
                e.canUpload ? (A(), G(C(ut), {
                  key: 0,
                  href: f.route("images.delete", h.id),
                  method: "delete",
                  class: "mt-1 w-full items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-center text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-hidden focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700",
                  as: "button"
                }, {
                  default: K(() => p[2] || (p[2] = [
                    me(" Delete Image ")
                  ])),
                  _: 2
                }, 1032, ["href"])) : Y("", !0)
              ])
            ]))), 256))
          ])
        ])
      ])) : Y("", !0)
    ], 64));
  }
}, Ew = { class: "mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]" }, Aw = ["name", "value", "id", "checked"], Cw = ["for"], QE = {
  __name: "RadioButton",
  props: {
    id: String,
    name: String,
    value: String,
    isChecked: {
      type: Boolean,
      default: !1
    },
    modelValue: String,
    // This is used with v-model on the parent component
    label: String
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, r = (o) => {
      n("update:modelValue", o.target.value);
    };
    return (o, a) => (A(), N("div", Ew, [
      j("input", {
        class: "relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 ring-accent before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-1 after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-accent checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-accent checked:after:bg-accent checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-hidden focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-accent checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px] checked:focus:before:shadow-primary checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]",
        type: "radio",
        name: e.name,
        value: e.value,
        id: e.id,
        checked: e.modelValue === e.value,
        onChange: r
      }, null, 40, Aw),
      j("label", {
        class: "mt-px inline-block pl-[0.15rem] hover:cursor-pointer",
        for: e.id
      }, Q(e.label), 9, Cw)
    ]));
  }
}, Pw = {
  key: 0,
  class: "absolute inset-2 flex items-center justify-center"
}, lc = {
  __name: "SubmitButton",
  props: {
    type: {
      type: String,
      default: "submit"
    },
    disabled: Boolean,
    form: Object,
    loading: { type: Boolean, default: !1 },
    customButtonClass: {
      type: String
    }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return A(), G(C(Wp), {
        disabled: e.loading || ((r = e.form) == null ? void 0 : r.processing) || e.disabled,
        type: e.type,
        class: "focusable",
        customButtonClass: e.customButtonClass
      }, {
        default: K(() => {
          var o, a;
          return [
            j("div", {
              class: J({ "opacity-25": ((o = e.form) == null ? void 0 : o.processing) || e.loading })
            }, [
              V(t.$slots, "default")
            ], 2),
            (a = e.form) != null && a.processing || e.loading ? (A(), N("div", Pw, [
              Z(C(Kp), { class: "aspect-square h-full! w-auto! text-white" })
            ])) : Y("", !0)
          ];
        }),
        _: 3
      }, 8, ["disabled", "type", "customButtonClass"]);
    };
  }
}, kw = ["id"], Tw = {
  key: 0,
  class: "text-sm text-gray-600"
}, Dw = { class: "flex flex-col" }, ZE = {
  __name: "Table",
  props: {
    total: Number,
    links: Array,
    collapsable: {
      type: Boolean,
      default: !1
    },
    collapse_id: {
      type: String,
      default: "collapse"
    },
    sticky: {
      type: Boolean,
      default: !0
    },
    overflow: {
      type: Boolean,
      default: !0
    },
    seperate: {
      type: Boolean,
      default: !1
    },
    showPerPage: {
      type: Boolean,
      default: !1
    },
    defaultPerPage: {
      type: Number,
      default: 100
    },
    responsive: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    vr();
    const t = e, n = q(null), r = q(null), o = q(null), a = q(null), i = () => {
      const l = n.value, u = l.getBoundingClientRect().top, f = document.querySelector("nav").offsetHeight, p = u - f, h = o.value, d = l.getBoundingClientRect().height + u - f * 2;
      if (p <= 0 && d > 0) {
        if (h.dataset.sticky === "true") return;
        c(), h.style.display = "block", h.dataset.sticky = "true", h.style.top = `${f}px`, h.style.width = r.value.offsetWidth + "px";
        return;
      }
      h.dataset.sticky = "", h.style.display = "";
    }, s = () => {
      a.value.style.marginLeft = -r.value.scrollLeft + "px";
    }, c = () => {
      if (!n.value) return;
      const l = n.value.querySelector("thead tr");
      let u = a.value;
      u.innerHTML = "";
      let f = l == null ? void 0 : l.querySelectorAll("th");
      f == null || f.forEach((h) => {
        const d = h.cloneNode(!0);
        d.style.width = h.offsetWidth + "px", u.appendChild(d), d.addEventListener("click", () => {
          h.click();
        });
      });
      const p = o.value;
      p.style.width = r.value.offsetWidth + "px";
    };
    return t.sticky && (Re(() => {
      c(), window.addEventListener("scroll", i, { passive: !0 }), window.addEventListener("resize", c, { passive: !0 }), r.value.addEventListener("scroll", s, { passive: !0 });
    }), Qt(() => {
      var l;
      window.removeEventListener("scroll", i), window.removeEventListener("resize", c), (l = r.value) == null || l.removeEventListener("scroll", s);
    })), (l, u) => (A(), N("div", {
      class: J({
        "visible! hidden": e.collapsable,
        "overflow-hidden": e.overflow
      }),
      id: e.collapse_id,
      "data-te-collapse-item": ""
    }, [
      e.total != null ? (A(), N("p", Tw, "Found: " + Q(e.total), 1)) : Y("", !0),
      j("div", Dw, [
        j("div", {
          class: J({ "overflow-x-auto": e.overflow }),
          ref_key: "table_container",
          ref: r
        }, [
          j("table", {
            class: J(["min-w-full text-left text-sm font-light", {
              "mb-14 [&>*>tr]:border-l-4 [&>*>tr]:border-l-primary-500": e.collapsable,
              " border-separate border-spacing-y-5 px-2": e.seperate,
              // reponsive classes
              // thead & tbody
              " max-sm:[&_thead]:hidden": e.responsive,
              // td&th
              " max-sm:[&_.td-label]:block! max-sm:[&_td:last-child]:border-b-0! max-sm:[&_td]:flex max-sm:[&_td]:justify-between max-sm:[&_td]:border-b max-sm:[&_td]:px-2!": e.responsive,
              // tr
              " max-sm:[&_tr]:mb-2 max-sm:[&_tr]:flex max-sm:[&_tr]:flex-col max-sm:[&_tr]:rounded-md max-sm:[&_tr]:border max-sm:[&_tr]:border-gray-200 max-sm:[&_tr]:shadow-md": e.responsive
            }]),
            ref_key: "table",
            ref: n
          }, [
            e.sticky ? (A(), N("div", {
              key: 0,
              ref_key: "sticky_wrapper",
              ref: o,
              class: "fixed isolate z-40 hidden w-full overflow-hidden bg-neutral-100"
            }, [
              j("div", {
                ref_key: "sticky_header",
                ref: a,
                class: J(["w-max [&>th]:align-middle", {
                  "max-sm:hidden": e.responsive
                }])
              }, null, 2)
            ], 512)) : Y("", !0),
            V(l.$slots, "default")
          ], 2)
        ], 2)
      ]),
      l.$slots.pagination ? V(l.$slots, "pagination", { key: 1 }) : e.links ? (A(), G(C(Hp), {
        key: 2,
        class: "mt-6",
        links: e.links,
        showPerPage: e.showPerPage,
        defaultPerPage: e.defaultPerPage
      }, null, 8, ["links", "showPerPage", "defaultPerPage"])) : Y("", !0)
    ], 10, kw));
  }
}, $w = {}, Fw = { class: "border-b bg-neutral-100 font-medium dark:border-neutral-500" };
function Rw(e, t) {
  return A(), N("thead", Fw, [
    V(e.$slots, "default")
  ]);
}
const eA = /* @__PURE__ */ po($w, [["render", Rw]]), Iw = { key: 0 }, tA = {
  __name: "Tbody",
  props: {
    data: {
      type: String,
      required: !1,
      default: ""
    },
    hidePlaceholder: {
      type: Boolean,
      default: !1
    },
    hideNoRecordsMessage: {
      type: Boolean,
      default: !1
    },
    recordsFromPagination: {
      type: Boolean,
      default: !0
    },
    noRecordsMessage: {
      type: String,
      default: "No records found"
    }
  },
  setup(e) {
    const t = e, n = W(() => {
      let o = C1().props[t.data] ?? null;
      return t.recordsFromPagination ? o.data ?? null : o;
    });
    return (r, o) => (A(), N("tbody", null, [
      Z(C(E1), {
        data: t.data
      }, {
        fallback: K(() => [
          e.hidePlaceholder ? Y("", !0) : (A(), G(C(xE), { key: 0 }))
        ]),
        default: K(() => [
          !e.hideNoRecordsMessage && n.value ? (A(), N(ie, { key: 0 }, [
            n.value.length ? Y("", !0) : (A(), N("tr", Iw, [
              Z(C(Cs), {
                colspan: "999",
                class: "no-records-message text-center! text-gray-500"
              }, {
                default: K(() => [
                  me(Q(e.noRecordsMessage), 1)
                ]),
                _: 1
              })
            ]))
          ], 64)) : Y("", !0),
          V(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["data"])
    ]));
  }
}, Lw = { class: "flex items-center justify-between" }, Nw = {
  key: 0,
  class: "order-arrows flex h-full w-4 items-center md:right-4"
}, nA = {
  __name: "Th",
  props: {
    orderBy: String
  },
  setup(e) {
    hr.add(Ly, $y);
    const t = e, n = q("asc"), r = q(!1);
    let o = null;
    const a = vr();
    Re(() => {
      t.orderBy && (o = a.on("navigate", i));
    }), Qt(() => {
      o == null || o();
    });
    const i = () => {
      const l = route().params;
      if (l.order_by === t.orderBy) {
        n.value = l.order_dir, r.value = !0;
        return;
      }
      r.value = !1;
    }, s = () => {
      if (!t.orderBy) return;
      const l = n.value === "asc" ? "desc" : "asc", u = route().params;
      u.order_by = t.orderBy, u.order_dir = l, a.get(route(route().current()), u, {
        preserveState: !0
      }), n.value = l, r.value = !0;
    }, c = (l) => n.value === l && r.value ? "active text-primary" : "text-gray-400";
    return (l, u) => (A(), N("th", {
      scope: "col",
      class: J(["relative py-4 text-center md:px-6 md:text-left", e.orderBy ? "cursor-pointer" : ""]),
      onClick: s
    }, [
      j("div", Lw, [
        V(l.$slots, "default"),
        e.orderBy ? (A(), N("span", Nw, [
          Z(C(Ue), {
            icon: "fa-sort-up",
            class: J(["absolute", c("desc")])
          }, null, 8, ["class"]),
          Z(C(Ue), {
            icon: "fa-sort-down",
            class: J(["absolute", c("asc")])
          }, null, 8, ["class"])
        ])) : Y("", !0)
      ])
    ], 2));
  }
}, _w = { class: "whitespace-nowrap py-2 text-center md:px-6 md:py-4 md:text-left" }, Mw = { class: "td-label hidden font-bold" }, Cs = {
  __name: "Td",
  props: {
    label: {
      type: String,
      required: !1,
      default: ""
    }
  },
  setup(e) {
    const t = e;
    return (n, r) => (A(), N("td", _w, [
      j("span", Mw, Q(t.label), 1),
      V(n.$slots, "default")
    ]));
  }
}, Bw = ["data-te-target", "aria-controls"], rA = {
  __name: "TrCollapseHandler",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(e) {
    return (t, n) => (A(), N("tr", {
      "data-te-collapse-init": "",
      "data-te-target": "#" + e.collapse_id,
      "aria-expanded": "false",
      "aria-controls": e.collapse_id
    }, [
      V(t.$slots, "default")
    ], 8, Bw));
  }
}, jw = { colspan: "999" }, qw = ["id"], oA = {
  __name: "TrCollapse",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(e) {
    return (t, n) => (A(), N("tr", null, [
      j("td", jw, [
        j("div", {
          id: e.collapse_id,
          class: "visible! hidden",
          "data-te-collapse-item": ""
        }, [
          V(t.$slots, "default")
        ], 8, qw)
      ])
    ]));
  }
}, aA = {
  __name: "TrPlaceholder",
  props: {
    placeholders: {
      type: Number,
      required: !1,
      default: 5
    }
  },
  setup(e) {
    return (t, n) => (A(!0), N(ie, null, Qe(e.placeholders, (r) => (A(), N("tr", null, [
      Z(C(Cs), { colspan: "999" }, {
        default: K(() => n[0] || (n[0] = [
          j("div", { class: "tr-placeholder h-8 w-full animate-pulse rounded-md bg-gray-500 bg-opacity-75" }, null, -1)
        ])),
        _: 1
      })
    ]))), 256));
  }
}, Uw = { class: "mb-2 flex w-full flex-wrap justify-between text-sm text-gray-600 max-xxs:text-xxs" }, zw = {
  key: 0,
  class: "mb-2 h-fit w-full xs:w-fit"
}, Vw = { key: 0 }, Hw = {
  key: 1,
  class: "ml-1"
}, Ww = { class: "flex w-fit flex-wrap" }, Kw = {
  key: 0,
  class: "font-semibold"
}, Gw = { class: "mb-1" }, Yw = {
  key: 0,
  class: "w-full whitespace-normal font-semibold text-primary"
}, Xw = { class: "w-full break-words" }, Jw = { class: "mb-1 flex flex-col" }, Qw = { key: 1 }, iA = {
  __name: "TableItemCard",
  props: {
    key: Number,
    item: Object,
    itemId: {
      type: Object,
      id: {
        type: String,
        required: !0
      },
      routeName: {
        type: String,
        default: null,
        required: !1
      },
      routeData: {
        type: String,
        required: !1
      },
      prefix: {
        type: Boolean,
        required: !1,
        default: !0
      }
    },
    extraText: String,
    title: {
      type: Object,
      text: {
        type: String,
        required: !0
      },
      href: {
        type: String,
        default: null,
        required: !1
      },
      routeName: {
        type: String,
        default: null,
        required: !1
      },
      routeData: {
        type: String,
        default: null,
        required: !1
      }
    },
    pills: {
      type: Array,
      text: {
        type: String,
        required: !0
      },
      color: {
        type: String,
        required: !1
      }
    },
    options: {
      type: Object,
      text: {
        type: String,
        required: !0
      },
      color: {
        type: String,
        required: !1
      },
      routeName: {
        type: String,
        default: null,
        required: !1
      },
      href: {
        type: String,
        default: null,
        required: !1
      },
      routeData: {
        type: String,
        default: null,
        required: !1
      }
    },
    timeStamp: String,
    amount: {
      text: {
        type: String,
        required: !1,
        default: "Amount: "
      },
      amount: {
        type: String,
        required: !0,
        default: "0.00"
      }
    }
  },
  setup(e) {
    const t = e;
    return (n, r) => {
      var o;
      return A(), N("div", {
        key: t.key,
        class: "mt-3 rounded-md border border-gray-300 bg-white px-4 py-3 lg:border lg:border-gray-300"
      }, [
        j("div", Uw, [
          t.itemId || t.timeStamp ? (A(), N("div", zw, [
            t.itemId ? (A(), N(ie, { key: 0 }, [
              t.itemId.routeName ? (A(), G(C(ut), {
                key: 1,
                href: n.route(t.itemId.routeName, t.itemId.routeData ? t.itemId.routeData : t.itemId.id)
              }, {
                default: K(() => [
                  t.itemId.prefix || t.itemId.prefix == null ? (A(), N(ie, { key: 0 }, [
                    me("#")
                  ], 64)) : Y("", !0),
                  me(" " + Q(t.itemId.id), 1)
                ]),
                _: 1
              }, 8, ["href"])) : (A(), N("span", Vw, [
                t.itemId.prefix || t.itemId.prefix == null ? (A(), N(ie, { key: 0 }, [
                  me("#")
                ], 64)) : Y("", !0),
                me(" " + Q(t.itemId.id), 1)
              ]))
            ], 64)) : Y("", !0),
            t.timeStamp ? (A(), N("span", Hw, [
              t.itemId ? (A(), N(ie, { key: 0 }, [
                me("-")
              ], 64)) : Y("", !0),
              me(" " + Q(t.timeStamp), 1)
            ])) : Y("", !0)
          ])) : Y("", !0),
          j("div", Ww, [
            (A(!0), N(ie, null, Qe(e.pills, (a, i) => (A(), N(ie, { key: i }, [
              a.text ? (A(), N("span", {
                key: 0,
                class: "whitespace-nowrap rounded-md border bg-primary p-1 px-2 text-white",
                style: Vt({
                  backgroundColor: a.color ? a.color : null
                })
              }, Q(a.text), 5)) : Y("", !0)
            ], 64))), 128))
          ])
        ]),
        t.title ? (A(), N(ie, { key: 0 }, [
          !t.title.routeName && !t.title.href ? (A(), N("p", Kw, Q(t.title.text), 1)) : (A(), G(C(ut), {
            key: 1,
            href: t.title.href ? t.title.href : n.route(t.title.routeName, t.title.routeData),
            class: "font-semibold"
          }, {
            default: K(() => [
              me(Q(t.title.text), 1)
            ]),
            _: 1
          }, 8, ["href"]))
        ], 64)) : Y("", !0),
        j("div", Gw, [
          t.extraText ? (A(), N("p", Yw, [
            r[0] || (r[0] = me(" Engineer Note: ")),
            j("span", Xw, Q(t.extraText), 1)
          ])) : Y("", !0)
        ]),
        j("div", Jw, [
          (A(!0), N(ie, null, Qe(e.options, (a, i) => (A(), N(ie, null, [
            !a.routeName && !a.href ? (A(), N("span", {
              key: 0,
              style: Vt({ color: a.color ? a.color : "#000" })
            }, Q(a.text), 5)) : (A(), G(C(ut), {
              key: 1,
              href: a.href ? a.href : n.route(a.routeName, a.routeData),
              style: Vt({ color: a.color ? a.color : "#000" })
            }, {
              default: K(() => [
                me(Q(a.text), 1)
              ]),
              _: 2
            }, 1032, ["href", "style"]))
          ], 64))), 256))
        ]),
        (o = t.amount) != null && o.amount ? (A(), N("div", Qw, [
          j("span", null, Q(t.amount.text + C(A1)(t.amount.amount)), 1)
        ])) : Y("", !0),
        j("div", null, [
          V(n.$slots, "default")
        ])
      ]);
    };
  }
};
/*!
* Tailwind Elements 1.0.0
* 
* Tailwind Elements is an open-source UI kit of advanced components for TailwindCSS.
* Copyright © 2023 MDBootstrap.com
* 
* Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
* In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
* This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
* 
*/
const Ha = /* @__PURE__ */ (() => {
  const e = {};
  let t = 1;
  return {
    set(n, r, o) {
      typeof n[r] > "u" && (n[r] = {
        key: r,
        id: t
      }, t++), e[n[r].id] = o;
    },
    get(n, r) {
      if (!n || typeof n[r] > "u")
        return null;
      const o = n[r];
      return o.key === r ? e[o.id] : null;
    },
    delete(n, r) {
      if (typeof n[r] > "u")
        return;
      const o = n[r];
      o.key === r && (delete e[o.id], delete n[r]);
    }
  };
})(), Wa = {
  setData(e, t, n) {
    Ha.set(e, t, n);
  },
  getData(e, t) {
    return Ha.get(e, t);
  },
  removeData(e, t) {
    Ha.delete(e, t);
  }
}, Zw = 1e6, ex = 1e3, Vi = "transitionend", tx = (e) => e == null ? `${e}` : {}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(), nx = (e) => {
  do
    e += Math.floor(Math.random() * Zw);
  while (document.getElementById(e));
  return e;
}, tp = (e) => {
  let t = e.getAttribute("data-te-target");
  if (!t || t === "#") {
    let n = e.getAttribute("href");
    if (!n || !n.includes("#") && !n.startsWith("."))
      return null;
    n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), t = n && n !== "#" ? n.trim() : null;
  }
  return t;
}, rx = (e) => {
  const t = tp(e);
  return t && document.querySelector(t) ? t : null;
}, Ps = (e) => {
  const t = tp(e);
  return t ? document.querySelector(t) : null;
}, ox = (e) => {
  if (!e)
    return 0;
  let { transitionDuration: t, transitionDelay: n } = window.getComputedStyle(e);
  const r = Number.parseFloat(t), o = Number.parseFloat(n);
  return !r && !o ? 0 : (t = t.split(",")[0], n = n.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(n)) * ex);
}, ax = (e) => {
  e.dispatchEvent(new Event(Vi));
}, np = (e) => !e || typeof e != "object" ? !1 : (typeof e.jquery < "u" && (e = e[0]), typeof e.nodeType < "u"), uc = (e) => np(e) ? e.jquery ? e[0] : e : typeof e == "string" && e.length > 0 ? document.querySelector(e) : null, cc = (e, t, n) => {
  Object.keys(n).forEach((r) => {
    const o = n[r], a = t[r], i = a && np(a) ? "element" : tx(a);
    if (!new RegExp(o).test(i))
      throw new Error(
        `${e.toUpperCase()}: Option "${r}" provided type "${i}" but expected type "${o}".`
      );
  });
}, Ao = (e) => {
  if (!e || e.getClientRects().length === 0)
    return !1;
  if (e.style && e.parentNode && e.parentNode.style) {
    const t = getComputedStyle(e), n = getComputedStyle(e.parentNode);
    return getComputedStyle(e).getPropertyValue("visibility") === "visible" || t.display !== "none" && n.display !== "none" && t.visibility !== "hidden";
  }
  return !1;
}, Co = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled") ? !0 : typeof e.disabled < "u" ? e.disabled : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false", rp = () => {
  const { jQuery: e } = window;
  return e && !document.body.hasAttribute("data-te-no-jquery") ? e : null;
}, Ka = [], ix = (e) => {
  document.readyState === "loading" ? (Ka.length || document.addEventListener("DOMContentLoaded", () => {
    Ka.forEach((t) => t());
  }), Ka.push(e)) : e();
}, Ot = () => document.documentElement.dir === "rtl", sx = (e) => document.createElement(e), fc = (e) => {
  typeof e == "function" && e();
}, lx = (e, t, n = !0) => {
  if (!n) {
    fc(e);
    return;
  }
  const r = 5, o = ox(t) + r;
  let a = !1;
  const i = ({ target: s }) => {
    s === t && (a = !0, t.removeEventListener(Vi, i), fc(e));
  };
  t.addEventListener(Vi, i), setTimeout(() => {
    a || ax(t);
  }, o);
}, ux = /[^.]*(?=\..*)\.|.*/, cx = /\..*/, fx = /::\d+$/, Ga = {};
let dc = 1;
const dx = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, px = /^(mouseenter|mouseleave)/i, op = /* @__PURE__ */ new Set([
  "click",
  "dblclick",
  "mouseup",
  "mousedown",
  "contextmenu",
  "mousewheel",
  "DOMMouseScroll",
  "mouseover",
  "mouseout",
  "mousemove",
  "selectstart",
  "selectend",
  "keydown",
  "keypress",
  "keyup",
  "orientationchange",
  "touchstart",
  "touchmove",
  "touchend",
  "touchcancel",
  "pointerdown",
  "pointermove",
  "pointerup",
  "pointerleave",
  "pointercancel",
  "gesturestart",
  "gesturechange",
  "gestureend",
  "focus",
  "blur",
  "change",
  "reset",
  "select",
  "submit",
  "focusin",
  "focusout",
  "load",
  "unload",
  "beforeunload",
  "resize",
  "move",
  "DOMContentLoaded",
  "readystatechange",
  "error",
  "abort",
  "scroll"
]);
function ap(e, t) {
  return t && `${t}::${dc++}` || e.uidEvent || dc++;
}
function ip(e) {
  const t = ap(e);
  return e.uidEvent = t, Ga[t] = Ga[t] || {}, Ga[t];
}
function hx(e, t) {
  return function n(r) {
    return r.delegateTarget = e, n.oneOff && be.off(e, r.type, t), t.apply(e, [r]);
  };
}
function mx(e, t, n) {
  return function r(o) {
    const a = e.querySelectorAll(t);
    for (let { target: i } = o; i && i !== this; i = i.parentNode)
      for (let s = a.length; s--; "")
        if (a[s] === i)
          return o.delegateTarget = i, r.oneOff && be.off(e, o.type, n), n.apply(i, [o]);
    return null;
  };
}
function sp(e, t, n = null) {
  const r = Object.keys(e);
  for (let o = 0, a = r.length; o < a; o++) {
    const i = e[r[o]];
    if (i.originalHandler === t && i.delegationSelector === n)
      return i;
  }
  return null;
}
function lp(e, t, n) {
  const r = typeof t == "string", o = r ? n : t;
  let a = up(e);
  return op.has(a) || (a = e), [r, o, a];
}
function pc(e, t, n, r, o) {
  if (typeof t != "string" || !e)
    return;
  if (n || (n = r, r = null), px.test(t)) {
    const h = (d) => function(w) {
      if (!w.relatedTarget || w.relatedTarget !== w.delegateTarget && !w.delegateTarget.contains(w.relatedTarget))
        return d.call(this, w);
    };
    r ? r = h(r) : n = h(n);
  }
  const [a, i, s] = lp(
    t,
    n,
    r
  ), c = ip(e), l = c[s] || (c[s] = {}), u = sp(
    l,
    i,
    a ? n : null
  );
  if (u) {
    u.oneOff = u.oneOff && o;
    return;
  }
  const f = ap(
    i,
    t.replace(ux, "")
  ), p = a ? mx(e, n, r) : hx(e, n);
  p.delegationSelector = a ? n : null, p.originalHandler = i, p.oneOff = o, p.uidEvent = f, l[f] = p, e.addEventListener(s, p, a);
}
function Hi(e, t, n, r, o) {
  const a = sp(t[n], r, o);
  a && (e.removeEventListener(n, a, !!o), delete t[n][a.uidEvent]);
}
function yx(e, t, n, r) {
  const o = t[n] || {};
  Object.keys(o).forEach((a) => {
    if (a.includes(r)) {
      const i = o[a];
      Hi(
        e,
        t,
        n,
        i.originalHandler,
        i.delegationSelector
      );
    }
  });
}
function up(e) {
  return e = e.replace(cx, ""), dx[e] || e;
}
const be = {
  on(e, t, n, r) {
    pc(e, t, n, r, !1);
  },
  one(e, t, n, r) {
    pc(e, t, n, r, !0);
  },
  off(e, t, n, r) {
    if (typeof t != "string" || !e)
      return;
    const [o, a, i] = lp(
      t,
      n,
      r
    ), s = i !== t, c = ip(e), l = t.startsWith(".");
    if (typeof a < "u") {
      if (!c || !c[i])
        return;
      Hi(
        e,
        c,
        i,
        a,
        o ? n : null
      );
      return;
    }
    l && Object.keys(c).forEach((f) => {
      yx(
        e,
        c,
        f,
        t.slice(1)
      );
    });
    const u = c[i] || {};
    Object.keys(u).forEach((f) => {
      const p = f.replace(fx, "");
      if (!s || t.includes(p)) {
        const h = u[f];
        Hi(
          e,
          c,
          i,
          h.originalHandler,
          h.delegationSelector
        );
      }
    });
  },
  trigger(e, t, n) {
    if (typeof t != "string" || !e)
      return null;
    const r = rp(), o = up(t), a = t !== o, i = op.has(o);
    let s, c = !0, l = !0, u = !1, f = null;
    return a && r && (s = r.Event(t, n), r(e).trigger(s), c = !s.isPropagationStopped(), l = !s.isImmediatePropagationStopped(), u = s.isDefaultPrevented()), i ? (f = document.createEvent("HTMLEvents"), f.initEvent(o, c, !0)) : f = new CustomEvent(t, {
      bubbles: c,
      cancelable: !0
    }), typeof n < "u" && Object.keys(n).forEach((p) => {
      Object.defineProperty(f, p, {
        get() {
          return n[p];
        }
      });
    }), u && f.preventDefault(), l && e.dispatchEvent(f), f.defaultPrevented && typeof s < "u" && s.preventDefault(), f;
  }
}, gx = "5.1.3";
class vx {
  constructor(t) {
    t = uc(t), t && (this._element = t, Wa.setData(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    Wa.removeData(this._element, this.constructor.DATA_KEY), be.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t) => {
      this[t] = null;
    });
  }
  _queueCallback(t, n, r = !0) {
    lx(t, n, r);
  }
  /** Static */
  static getInstance(t) {
    return Wa.getData(uc(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, n = {}) {
    return this.getInstance(t) || new this(t, typeof n == "object" ? n : null);
  }
  static get VERSION() {
    return gx;
  }
  static get NAME() {
    throw new Error(
      'You have to implement the static method "NAME", for each component!'
    );
  }
  static get DATA_KEY() {
    return `te.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
}
function Ya(e) {
  return e === "true" ? !0 : e === "false" ? !1 : e === Number(e).toString() ? Number(e) : e === "" || e === "null" ? null : e;
}
function Xa(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const Te = {
  setDataAttribute(e, t, n) {
    e.setAttribute(`data-te-${Xa(t)}`, n);
  },
  removeDataAttribute(e, t) {
    e.removeAttribute(`data-te-${Xa(t)}`);
  },
  getDataAttributes(e) {
    if (!e)
      return {};
    const t = {};
    return Object.keys(e.dataset).filter((n) => n.startsWith("te")).forEach((n) => {
      if (n.startsWith("teClass"))
        return;
      let r = n.replace(/^te/, "");
      r = r.charAt(0).toLowerCase() + r.slice(1, r.length), t[r] = Ya(e.dataset[n]);
    }), t;
  },
  getDataClassAttributes(e) {
    if (!e)
      return {};
    const t = {
      ...e.dataset
    };
    return Object.keys(t).filter((n) => n.startsWith("teClass")).forEach((n) => {
      let r = n.replace(/^teClass/, "");
      r = r.charAt(0).toLowerCase() + r.slice(1, r.length), t[r] = Ya(t[n]);
    }), t;
  },
  getDataAttribute(e, t) {
    return Ya(
      e.getAttribute(`data-te-${Xa(t)}`)
    );
  },
  offset(e) {
    const t = e.getBoundingClientRect();
    return {
      top: t.top + document.body.scrollTop,
      left: t.left + document.body.scrollLeft
    };
  },
  position(e) {
    return {
      top: e.offsetTop,
      left: e.offsetLeft
    };
  },
  style(e, t) {
    Object.assign(e.style, t);
  },
  toggleClass(e, t) {
    e && Ja(t).forEach((n) => {
      e.classList.contains(n) ? e.classList.remove(n) : e.classList.add(n);
    });
  },
  addClass(e, t) {
    Ja(t).forEach(
      (n) => !e.classList.contains(n) && e.classList.add(n)
    );
  },
  addStyle(e, t) {
    Object.keys(t).forEach((n) => {
      e.style[n] = t[n];
    });
  },
  removeClass(e, t) {
    Ja(t).forEach(
      (n) => e.classList.contains(n) && e.classList.remove(n)
    );
  },
  hasClass(e, t) {
    return e.classList.contains(t);
  },
  maxOffset(e) {
    const t = e.getBoundingClientRect();
    return {
      top: t.top + Math.max(
        document.body.scrollTop,
        document.documentElement.scrollTop,
        window.scrollY
      ),
      left: t.left + Math.max(
        document.body.scrollLeft,
        document.documentElement.scrollLeft,
        window.scrollX
      )
    };
  }
};
function Ja(e) {
  return typeof e == "string" ? e.split(" ") : Array.isArray(e) ? e : !1;
}
const bx = 3, Bn = {
  closest(e, t) {
    return e.closest(t);
  },
  matches(e, t) {
    return e.matches(t);
  },
  find(e, t = document.documentElement) {
    return [].concat(
      ...Element.prototype.querySelectorAll.call(t, e)
    );
  },
  findOne(e, t = document.documentElement) {
    return Element.prototype.querySelector.call(t, e);
  },
  children(e, t) {
    return [].concat(...e.children).filter((n) => n.matches(t));
  },
  parents(e, t) {
    const n = [];
    let r = e.parentNode;
    for (; r && r.nodeType === Node.ELEMENT_NODE && r.nodeType !== bx; )
      this.matches(r, t) && n.push(r), r = r.parentNode;
    return n;
  },
  prev(e, t) {
    let n = e.previousElementSibling;
    for (; n; ) {
      if (n.matches(t))
        return [n];
      n = n.previousElementSibling;
    }
    return [];
  },
  next(e, t) {
    let n = e.nextElementSibling;
    for (; n; ) {
      if (this.matches(n, t))
        return [n];
      n = n.nextElementSibling;
    }
    return [];
  },
  focusableChildren(e) {
    const t = [
      "a",
      "button",
      "input",
      "textarea",
      "select",
      "details",
      "[tabindex]",
      '[contenteditable="true"]'
    ].map((n) => `${n}:not([tabindex^="-"])`).join(", ");
    return this.find(t, e).filter(
      (n) => !Co(n) && Ao(n)
    );
  }
};
Ot();
Ot();
Ot();
Ot();
Ot();
Ot();
let hc = [];
const wx = (e, t = "hide") => {
  const n = `click.dismiss${e.EVENT_KEY}`, r = e.NAME;
  hc.includes(r) || (hc.push(r), be.on(
    document,
    n,
    `[data-te-${r}-dismiss]`,
    function(o) {
      if (["A", "AREA"].includes(this.tagName) && o.preventDefault(), Co(this))
        return;
      const a = Ps(this) || this.closest(`.${r}`) || this.closest(`[data-te-${r}-init]`);
      a && e.getOrCreateInstance(a)[t]();
    }
  ));
}, Qa = "alert", xx = "te.alert", cp = `.${xx}`, Sx = `close${cp}`, Ox = `closed${cp}`, Gn = "data-te-alert-show", Ex = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, mc = {
  animation: !0,
  autohide: !0,
  delay: 1e3
}, Ax = {
  fadeIn: "animate-[fade-in_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none",
  fadeOut: "animate-[fade-out_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none"
}, Cx = {
  fadeIn: "string",
  fadeOut: "string"
};
class to extends vx {
  constructor(t, n, r) {
    super(t), this._element = t, this._config = this._getConfig(n), this._classes = this._getClasses(r), this._didInit = !1, this._init();
  }
  // Getters
  static get DefaultType() {
    return Ex;
  }
  static get Default() {
    return mc;
  }
  static get NAME() {
    return Qa;
  }
  // Public
  close() {
    if (be.trigger(this._element, Sx).defaultPrevented)
      return;
    let t = 0;
    this._config.animation && (t = 300, Te.addClass(this._element, this._classes.fadeOut)), this._element.removeAttribute(Gn), setTimeout(() => {
      this._queueCallback(
        () => this._destroyElement(),
        this._element,
        this._config.animation
      );
    }, t);
  }
  show() {
    if (this._element) {
      if (this._config.autohide && this._setupAutohide(), !this._element.hasAttribute(Gn) && (Te.removeClass(this._element, "hidden"), Te.addClass(this._element, "block"), Ao(this._element))) {
        const t = (n) => {
          Te.removeClass(this._element, "hidden"), Te.addClass(this._element, "block"), be.off(n.target, "animationend", t);
        };
        this._element.setAttribute(Gn, ""), be.on(this._element, "animationend", t);
      }
      this._config.animation && (Te.removeClass(this._element, this._classes.fadeOut), Te.addClass(this._element, this._classes.fadeIn));
    }
  }
  hide() {
    if (this._element && this._element.hasAttribute(Gn)) {
      this._element.removeAttribute(Gn);
      const t = (n) => {
        Te.addClass(this._element, "hidden"), Te.removeClass(this._element, "block"), this._timeout !== null && (clearTimeout(this._timeout), this._timeout = null), be.off(n.target, "animationend", t);
      };
      be.on(this._element, "animationend", t), Te.removeClass(this._element, this._classes.fadeIn), Te.addClass(this._element, this._classes.fadeOut);
    }
  }
  // Private
  _init() {
    this._didInit || (wx(to, "close"), this._didInit = !0);
  }
  _getConfig(t) {
    return t = {
      ...mc,
      ...Te.getDataAttributes(this._element),
      ...typeof t == "object" && t ? t : {}
    }, cc(Qa, t, this.constructor.DefaultType), t;
  }
  _getClasses(t) {
    const n = Te.getDataClassAttributes(this._element);
    return t = {
      ...Ax,
      ...n,
      ...t
    }, cc(Qa, t, Cx), t;
  }
  _setupAutohide() {
    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }
  _destroyElement() {
    this._element.remove(), be.trigger(this._element, Ox), this.dispose();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = to.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
Ot(), Ot();
(() => {
  var e = { 454: (r, o, a) => {
    a.d(o, { Z: () => c });
    var i = a(645), s = a.n(i)()(function(l) {
      return l[1];
    });
    s.push([r.id, "INPUT:-webkit-autofill,SELECT:-webkit-autofill,TEXTAREA:-webkit-autofill{animation-name:onautofillstart}INPUT:not(:-webkit-autofill),SELECT:not(:-webkit-autofill),TEXTAREA:not(:-webkit-autofill){animation-name:onautofillcancel}@keyframes onautofillstart{}@keyframes onautofillcancel{}", ""]);
    const c = s;
  }, 645: (r) => {
    r.exports = function(o) {
      var a = [];
      return a.toString = function() {
        return this.map(function(i) {
          var s = o(i);
          return i[2] ? "@media ".concat(i[2], " {").concat(s, "}") : s;
        }).join("");
      }, a.i = function(i, s, c) {
        typeof i == "string" && (i = [[null, i, ""]]);
        var l = {};
        if (c)
          for (var u = 0; u < this.length; u++) {
            var f = this[u][0];
            f != null && (l[f] = !0);
          }
        for (var p = 0; p < i.length; p++) {
          var h = [].concat(i[p]);
          c && l[h[0]] || (s && (h[2] ? h[2] = "".concat(s, " and ").concat(h[2]) : h[2] = s), a.push(h));
        }
      }, a;
    };
  }, 810: () => {
    (function() {
      if (typeof window < "u")
        try {
          var r = new window.CustomEvent("test", { cancelable: !0 });
          if (r.preventDefault(), r.defaultPrevented !== !0)
            throw new Error("Could not prevent default");
        } catch {
          var o = function(a, i) {
            var s, c;
            return (i = i || {}).bubbles = !!i.bubbles, i.cancelable = !!i.cancelable, (s = document.createEvent("CustomEvent")).initCustomEvent(a, i.bubbles, i.cancelable, i.detail), c = s.preventDefault, s.preventDefault = function() {
              c.call(this);
              try {
                Object.defineProperty(this, "defaultPrevented", { get: function() {
                  return !0;
                } });
              } catch {
                this.defaultPrevented = !0;
              }
            }, s;
          };
          o.prototype = window.Event.prototype, window.CustomEvent = o;
        }
    })();
  }, 379: (r, o, a) => {
    var i, s = /* @__PURE__ */ function() {
      var b = {};
      return function(E) {
        if (b[E] === void 0) {
          var P = document.querySelector(E);
          if (window.HTMLIFrameElement && P instanceof window.HTMLIFrameElement)
            try {
              P = P.contentDocument.head;
            } catch {
              P = null;
            }
          b[E] = P;
        }
        return b[E];
      };
    }(), c = [];
    function l(b) {
      for (var E = -1, P = 0; P < c.length; P++)
        if (c[P].identifier === b) {
          E = P;
          break;
        }
      return E;
    }
    function u(b, E) {
      for (var P = {}, $ = [], F = 0; F < b.length; F++) {
        var B = b[F], T = E.base ? B[0] + E.base : B[0], k = P[T] || 0, _ = "".concat(T, " ").concat(k);
        P[T] = k + 1;
        var m = l(_), S = { css: B[1], media: B[2], sourceMap: B[3] };
        m !== -1 ? (c[m].references++, c[m].updater(S)) : c.push({ identifier: _, updater: v(S, E), references: 1 }), $.push(_);
      }
      return $;
    }
    function f(b) {
      var E = document.createElement("style"), P = b.attributes || {};
      if (P.nonce === void 0) {
        var $ = a.nc;
        $ && (P.nonce = $);
      }
      if (Object.keys(P).forEach(function(B) {
        E.setAttribute(B, P[B]);
      }), typeof b.insert == "function")
        b.insert(E);
      else {
        var F = s(b.insert || "head");
        if (!F)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        F.appendChild(E);
      }
      return E;
    }
    var p, h = (p = [], function(b, E) {
      return p[b] = E, p.filter(Boolean).join(`
`);
    });
    function d(b, E, P, $) {
      var F = P ? "" : $.media ? "@media ".concat($.media, " {").concat($.css, "}") : $.css;
      if (b.styleSheet)
        b.styleSheet.cssText = h(E, F);
      else {
        var B = document.createTextNode(F), T = b.childNodes;
        T[E] && b.removeChild(T[E]), T.length ? b.insertBefore(B, T[E]) : b.appendChild(B);
      }
    }
    function w(b, E, P) {
      var $ = P.css, F = P.media, B = P.sourceMap;
      if (F ? b.setAttribute("media", F) : b.removeAttribute("media"), B && typeof btoa < "u" && ($ += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(B)))), " */")), b.styleSheet)
        b.styleSheet.cssText = $;
      else {
        for (; b.firstChild; )
          b.removeChild(b.firstChild);
        b.appendChild(document.createTextNode($));
      }
    }
    var g = null, y = 0;
    function v(b, E) {
      var P, $, F;
      if (E.singleton) {
        var B = y++;
        P = g || (g = f(E)), $ = d.bind(null, P, B, !1), F = d.bind(null, P, B, !0);
      } else
        P = f(E), $ = w.bind(null, P, E), F = function() {
          (function(T) {
            if (T.parentNode === null)
              return !1;
            T.parentNode.removeChild(T);
          })(P);
        };
      return $(b), function(T) {
        if (T) {
          if (T.css === b.css && T.media === b.media && T.sourceMap === b.sourceMap)
            return;
          $(b = T);
        } else
          F();
      };
    }
    r.exports = function(b, E) {
      (E = E || {}).singleton || typeof E.singleton == "boolean" || (E.singleton = (i === void 0 && (i = !!(window && document && document.all && !window.atob)), i));
      var P = u(b = b || [], E);
      return function($) {
        if ($ = $ || [], Object.prototype.toString.call($) === "[object Array]") {
          for (var F = 0; F < P.length; F++) {
            var B = l(P[F]);
            c[B].references--;
          }
          for (var T = u($, E), k = 0; k < P.length; k++) {
            var _ = l(P[k]);
            c[_].references === 0 && (c[_].updater(), c.splice(_, 1));
          }
          P = T;
        }
      };
    };
  } }, t = {};
  function n(r) {
    var o = t[r];
    if (o !== void 0)
      return o.exports;
    var a = t[r] = { id: r, exports: {} };
    return e[r](a, a.exports, n), a.exports;
  }
  n.n = (r) => {
    var o = r && r.__esModule ? () => r.default : () => r;
    return n.d(o, { a: o }), o;
  }, n.d = (r, o) => {
    for (var a in o)
      n.o(o, a) && !n.o(r, a) && Object.defineProperty(r, a, { enumerable: !0, get: o[a] });
  }, n.o = (r, o) => Object.prototype.hasOwnProperty.call(r, o), (() => {
    var r = n(379), o = n.n(r), a = n(454);
    function i(c) {
      if (!c.hasAttribute("autocompleted")) {
        c.setAttribute("autocompleted", "");
        var l = new window.CustomEvent("onautocomplete", { bubbles: !0, cancelable: !0, detail: null });
        c.dispatchEvent(l) || (c.value = "");
      }
    }
    function s(c) {
      c.hasAttribute("autocompleted") && (c.removeAttribute("autocompleted"), c.dispatchEvent(new window.CustomEvent("onautocomplete", { bubbles: !0, cancelable: !1, detail: null })));
    }
    o()(a.Z, { insert: "head", singleton: !1 }), a.Z.locals, n(810), document.addEventListener("animationstart", function(c) {
      c.animationName === "onautofillstart" ? i(c.target) : s(c.target);
    }, !0), document.addEventListener("input", function(c) {
      c.inputType !== "insertReplacementText" && "data" in c ? s(c.target) : i(c.target);
    }, !0);
  })();
})();
Ot();
Ot();
nx("chips-input-");
const qt = {
  plugins: {
    legend: {
      labels: {
        color: "rgb(102,102,102)"
      }
    }
  }
}, Px = {
  line: {
    options: {
      ...qt,
      elements: {
        line: {
          backgroundColor: "rgba(59, 112, 202, 0.0)",
          borderColor: "rgb(59, 112, 202)",
          borderWidth: 2,
          tension: 0
        },
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgb(59, 112, 202)"
        }
      },
      responsive: !0,
      legend: {
        display: !0
      },
      tooltips: {
        intersect: !1,
        mode: "index"
      },
      datasets: {
        borderColor: "red"
      },
      scales: {
        x: {
          stacked: !0,
          grid: {
            display: !1
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          stacked: !1,
          grid: {
            borderDash: [2],
            drawBorder: !1,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    }
  },
  bar: {
    options: {
      ...qt,
      backgroundColor: "rgb(59, 112, 202)",
      borderWidth: 0,
      responsive: !0,
      legend: {
        display: !0
      },
      tooltips: {
        intersect: !1,
        mode: "index"
      },
      scales: {
        x: {
          stacked: !0,
          grid: {
            display: !1
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          stacked: !0,
          grid: {
            borderDash: [2],
            drawBorder: !1,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    }
  },
  pie: {
    options: {
      ...qt,
      elements: {
        arc: { backgroundColor: "rgb(59, 112, 202)" }
      },
      responsive: !0,
      legend: {
        display: !0
      }
    }
  },
  doughnut: {
    options: {
      ...qt,
      elements: {
        arc: { backgroundColor: "rgb(59, 112, 202)" }
      },
      responsive: !0,
      legend: {
        display: !0
      }
    }
  },
  polarArea: {
    options: {
      ...qt,
      elements: {
        arc: { backgroundColor: "rgba(59, 112, 202, 0.5)" }
      },
      responsive: !0,
      legend: {
        display: !0
      }
    }
  },
  radar: {
    options: {
      ...qt,
      elements: {
        line: {
          backgroundColor: "rgba(59, 112, 202, 0.5)",
          borderColor: "rgb(59, 112, 202)",
          borderWidth: 2
        },
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgb(59, 112, 202)"
        }
      },
      responsive: !0,
      legend: {
        display: !0
      }
    }
  },
  scatter: {
    options: {
      ...qt,
      elements: {
        line: {
          backgroundColor: "rgba(59, 112, 202, 0.5)",
          borderColor: "rgb(59, 112, 202)",
          borderWidth: 2,
          tension: 0
        },
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgba(59, 112, 202, 0.5)"
        }
      },
      responsive: !0,
      legend: {
        display: !0
      },
      tooltips: {
        intersect: !1,
        mode: "index"
      },
      datasets: {
        borderColor: "red"
      },
      scales: {
        x: {
          stacked: !0,
          grid: {
            display: !1
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          stacked: !1,
          grid: {
            borderDash: [2],
            drawBorder: !1,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    }
  },
  bubble: {
    options: {
      ...qt,
      elements: {
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgba(59, 112, 202, 0.5)"
        }
      },
      responsive: !0,
      legend: {
        display: !0
      },
      scales: {
        x: {
          grid: {
            display: !1
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          grid: {
            borderDash: [2],
            drawBorder: !1,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    }
  }
};
var Po = function(e) {
  this.element = e, this.handlers = {};
}, fp = { isEmpty: { configurable: !0 } };
Po.prototype.bind = function(e, t) {
  typeof this.handlers[e] > "u" && (this.handlers[e] = []), this.handlers[e].push(t), this.element.addEventListener(e, t, !1);
};
Po.prototype.unbind = function(e, t) {
  var n = this;
  this.handlers[e] = this.handlers[e].filter(function(r) {
    return t && r !== t ? !0 : (n.element.removeEventListener(e, r, !1), !1);
  });
};
Po.prototype.unbindAll = function() {
  for (var e in this.handlers)
    this.unbind(e);
};
fp.isEmpty.get = function() {
  var e = this;
  return Object.keys(this.handlers).every(
    function(t) {
      return e.handlers[t].length === 0;
    }
  );
};
Object.defineProperties(Po.prototype, fp);
typeof document < "u" && "WebkitAppearance" in document.documentElement.style;
sx("div");
const kx = (e) => {
  ix(() => {
    const t = rp();
    if (t) {
      const n = e.NAME, r = t.fn[n];
      t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = () => (t.fn[n] = r, e.jQueryInterface);
    }
  });
}, Tx = (e, t) => {
  be.on(
    document,
    `click.te.${e.NAME}`,
    t,
    function(n) {
      n.preventDefault(), e.getOrCreateInstance(this).toggle();
    }
  );
}, Dx = (e, t) => {
  be.on(
    document,
    `click.te.${e.NAME}.data-api`,
    t,
    function(n) {
      ["A", "AREA"].includes(this.tagName) && n.preventDefault(), !Co(this) && e.getOrCreateInstance(this).show();
    }
  );
}, $x = (e, t) => {
  be.on(
    document,
    `click.te.${e.NAME}.data-api`,
    t,
    function(n) {
      const r = Ps(this);
      if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), Co(this))
        return;
      be.one(r, e.EVENT_HIDDEN, () => {
        Ao(this) && this.focus();
      });
      const o = Bn.findOne(e.OPEN_SELECTOR);
      o && o !== r && e.getInstance(o).hide(), e.getOrCreateInstance(r).toggle(this);
    }
  );
}, Fx = (e, t) => {
  be.on(
    document,
    `click.te.${e.NAME}`,
    t,
    (n) => {
      n.preventDefault();
      const r = n.target.closest(t);
      e.getOrCreateInstance(r).toggle();
    }
  );
}, Rx = (e, t) => {
  be.on(
    document,
    `click.te.${e.NAME}`,
    t,
    function(n) {
      const r = Ps(this);
      ["A", "AREA"].includes(this.tagName) && n.preventDefault(), be.one(r, e.EVENT_SHOW, (a) => {
        a.defaultPrevented || be.one(r, e.EVENT_HIDDEN, () => {
          Ao(this) && this.focus();
        });
      });
      const o = Bn.findOne(
        `[${e.OPEN_SELECTOR}="true"]`
      );
      o && e.getInstance(o).hide(), e.getOrCreateInstance(r).toggle(this);
    }
  );
}, Ix = (e, t) => {
  be.one(
    document,
    "mousedown",
    t,
    e.autoInitial(new e())
  );
}, Lx = (e, t) => {
  be.on(
    document,
    `click.te.${e.NAME}.data-api`,
    t,
    function(n) {
      (n.target.tagName === "A" || n.delegateTarget && n.delegateTarget.tagName === "A") && n.preventDefault();
      const r = rx(this);
      Bn.find(r).forEach((o) => {
        e.getOrCreateInstance(o, { toggle: !1 }).toggle();
      });
    }
  );
}, Nx = (e, t) => {
  [].slice.call(
    document.querySelectorAll(t)
  ).map(function(n) {
    return new e(n);
  });
}, _x = (e, t) => {
  [].slice.call(
    document.querySelectorAll(t)
  ).map(function(n) {
    return new e(n);
  });
}, Mx = (e, t) => {
  Bn.find(t).forEach((n) => {
    new e(n);
  }), be.on(
    document,
    `click.te.${e.NAME}.data-api`,
    `${t} img:not([data-te-lightbox-disabled])`,
    e.toggle()
  );
}, Bx = (e, t) => {
  const n = (a) => a[0] === "{" && a[a.length - 1] === "}" || a[0] === "[" && a[a.length - 1] === "]", r = (a) => typeof a != "string" ? a : n(a) ? JSON.parse(a.replace(/'/g, '"')) : a, o = (a) => {
    const i = {};
    return Object.keys(a).forEach((s) => {
      if (s.match(/dataset.*/)) {
        const c = s.slice(7, 8).toLowerCase().concat(s.slice(8));
        i[c] = r(a[s]);
      }
    }), i;
  };
  Bn.find(t).forEach((a) => {
    if (Te.getDataAttribute(a, "chart") !== "bubble" && Te.getDataAttribute(a, "chart") !== "scatter") {
      const i = Te.getDataAttributes(a), s = {
        data: {
          datasets: [o(i)]
        }
      };
      return i.chart && (s.type = i.chart), i.labels && (s.data.labels = JSON.parse(i.labels.replace(/'/g, '"'))), new e(a, {
        ...s,
        ...Px[s.type]
      });
    }
    return null;
  });
};
class jx {
  constructor() {
    this.inits = [];
  }
  get initialized() {
    return this.inits;
  }
  isInited(t) {
    return this.inits.includes(t);
  }
  add(t) {
    this.isInited(t) || this.inits.push(t);
  }
}
const Wi = new jx(), Zn = {
  alert: {
    name: "Alert",
    selector: "[data-te-alert-init]",
    isToggler: !1
  },
  animation: {
    name: "Animate",
    selector: "[data-te-animation-init]",
    isToggler: !1
  },
  carousel: {
    name: "Carousel",
    selector: "[data-te-carousel-init]",
    isToggler: !1
  },
  chips: {
    name: "ChipsInput",
    selector: "[data-te-chips-input-init]",
    isToggler: !1
  },
  chip: {
    name: "Chip",
    selector: "[data-te-chip-init]",
    isToggler: !1,
    onInit: "init"
  },
  datepicker: {
    name: "Datepicker",
    selector: "[data-te-datepicker-init]",
    isToggler: !1
  },
  datetimepicker: {
    name: "Datetimepicker",
    selector: "[data-te-date-timepicker-init]",
    isToggler: !1
  },
  input: {
    name: "Input",
    selector: "[data-te-input-wrapper-init]",
    isToggler: !1
  },
  perfectScrollbar: {
    name: "PerfectScrollbar",
    selector: "[data-te-perfect-scrollbar-init]",
    isToggler: !1
  },
  rating: {
    name: "Rating",
    selector: "[data-te-rating-init]",
    isToggler: !1
  },
  scrollspy: {
    name: "ScrollSpy",
    selector: "[data-te-spy='scroll']",
    isToggler: !1
  },
  select: {
    name: "Select",
    selector: "[data-te-select-init]",
    isToggler: !1
  },
  sidenav: {
    name: "Sidenav",
    selector: "[data-te-sidenav-init]",
    isToggler: !1
  },
  stepper: {
    name: "Stepper",
    selector: "[data-te-stepper-init]",
    isToggler: !1
  },
  timepicker: {
    name: "Timepicker",
    selector: "[data-te-timepicker-init]",
    isToggler: !1
  },
  toast: {
    name: "Toast",
    selector: "[data-te-toast-init]",
    isToggler: !1
  },
  datatable: {
    name: "Datatable",
    selector: "[data-te-datatable-init]"
  },
  popconfirm: {
    name: "Popconfirm",
    selector: "[data-te-toggle='popconfirm']"
  },
  validation: {
    name: "Validation",
    selector: "[data-te-validation-init]"
  },
  smoothScroll: {
    name: "SmoothScroll",
    selector: "a[data-te-smooth-scroll-init]"
  },
  lazyLoad: {
    name: "LazyLoad",
    selector: "[data-te-lazy-load-init]"
  },
  clipboard: {
    name: "Clipboard",
    selector: "[data-te-clipboard-init]"
  },
  infiniteScroll: {
    name: "InfiniteScroll",
    selector: "[data-te-infinite-scroll-init]"
  },
  loadingManagement: {
    name: "LoadingManagement",
    selector: "[data-te-loading-management-init]"
  },
  sticky: {
    name: "Sticky",
    selector: "[data-te-sticky-init]"
  },
  // advancedInits
  chart: {
    name: "Chart",
    selector: "[data-te-chart]",
    isToggler: !1,
    advanced: Bx
  },
  // togglers
  button: {
    name: "Button",
    selector: "[data-te-toggle='button']",
    isToggler: !0,
    callback: Fx
  },
  collapse: {
    name: "Collapse",
    selector: "[data-te-collapse-init]",
    isToggler: !0,
    callback: Lx
  },
  dropdown: {
    name: "Dropdown",
    selector: "[data-te-dropdown-toggle-ref]",
    isToggler: !0,
    callback: Tx
  },
  modal: {
    name: "Modal",
    selector: "[data-te-toggle='modal']",
    isToggler: !0,
    callback: Rx
  },
  ripple: {
    name: "Ripple",
    selector: "[data-te-ripple-init]",
    isToggler: !0,
    callback: Ix
  },
  offcanvas: {
    name: "Offcanvas",
    selector: "[data-te-offcanvas-toggle]",
    isToggler: !0,
    callback: $x
  },
  tab: {
    name: "Tab",
    selector: "[data-te-toggle='tab'], [data-te-toggle='pill'], [data-te-toggle='list']",
    isToggler: !0,
    callback: Dx
  },
  tooltip: {
    name: "Tooltip",
    selector: "[data-te-toggle='tooltip']",
    isToggler: !1,
    callback: Nx
  },
  popover: {
    name: "Popover",
    selector: "[data-te-toggle='popover']",
    isToggler: !0,
    callback: _x
  },
  lightbox: {
    name: "Lightbox",
    selector: "[data-te-lightbox-init]",
    isToggler: !0,
    callback: Mx
  },
  touch: {
    name: "Touch",
    selector: "[data-te-touch-init]"
  }
}, qx = (e) => Zn[e.NAME] || null, Ux = (e, t) => {
  if (!e || !t.allowReinits && Wi.isInited(e.NAME))
    return;
  Wi.add(e.NAME);
  const n = qx(e), r = (n == null ? void 0 : n.isToggler) || !1;
  if (kx(e), n != null && n.advanced) {
    n == null || n.advanced(e, n == null ? void 0 : n.selector);
    return;
  }
  if (r) {
    n == null || n.callback(e, n == null ? void 0 : n.selector);
    return;
  }
  Bn.find(n == null ? void 0 : n.selector).forEach((o) => {
    let a = e.getInstance(o);
    a || (a = new e(o), n != null && n.onInit && a[n.onInit]());
  });
}, zx = (e, t) => {
  e.forEach((n) => Ux(n, t));
}, Vx = {
  allowReinits: !1,
  checkOtherImports: !1
}, Hx = (e, t = {}) => {
  t = { ...Vx, ...t };
  const n = Object.keys(Zn).map((r) => {
    if (document.querySelector(Zn[r].selector)) {
      const o = e[Zn[r].name];
      return !o && !Wi.isInited(r) && t.checkOtherImports && console.warn(
        `Please import ${Zn[r].name} from "tw-elements" package and add it to a object parameter inside "initTE" function`
      ), o;
    }
  });
  zx(n, t);
}, Wx = { role: "alert" }, Kx = {
  class: "mt-2 hidden w-full items-center rounded bg-primary-100 px-6 py-1 text-base text-neutral-800 shadow-xs data-te-alert-show:inline-flex sm:rounded-lg",
  role: "alert",
  "data-te-alert-init": "",
  "data-te-alert-show": ""
}, sA = {
  __name: "Alert",
  props: {
    message: String
  },
  setup(e) {
    return Re(() => {
      Hx({ Alert: to });
    }), (t, n) => (A(), N("div", Wx, [
      j("div", null, [
        j("div", Kx, [
          V(t.$slots, "default"),
          n[0] || (n[0] = j("button", {
            type: "button",
            class: "ml-auto box-content rounded-none border-none p-1 text-neutral-900 opacity-50 hover:text-neutral-900 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-hidden",
            "data-te-alert-dismiss": "",
            "aria-label": "Close"
          }, [
            j("span", { class: "w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25" }, [
              j("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                class: "h-6 w-6"
              }, [
                j("path", {
                  "fill-rule": "evenodd",
                  d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
                  "clip-rule": "evenodd"
                })
              ])
            ])
          ], -1))
        ])
      ])
    ]));
  }
}, Gx = ["top", "right", "bottom", "left"], Xt = Math.min, Xe = Math.max, no = Math.round, $r = Math.floor, xt = (e) => ({
  x: e,
  y: e
}), Yx = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Xx = {
  start: "end",
  end: "start"
};
function Ki(e, t, n) {
  return Xe(e, Xt(t, n));
}
function Rt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function It(e) {
  return e.split("-")[0];
}
function jn(e) {
  return e.split("-")[1];
}
function ks(e) {
  return e === "x" ? "y" : "x";
}
function Ts(e) {
  return e === "y" ? "height" : "width";
}
function Dt(e) {
  return ["top", "bottom"].includes(It(e)) ? "y" : "x";
}
function Ds(e) {
  return ks(Dt(e));
}
function Jx(e, t, n) {
  n === void 0 && (n = !1);
  const r = jn(e), o = Ds(e), a = Ts(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = ro(i)), [i, ro(i)];
}
function Qx(e) {
  const t = ro(e);
  return [Gi(e), t, Gi(t)];
}
function Gi(e) {
  return e.replace(/start|end/g, (t) => Xx[t]);
}
function Zx(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], a = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? a : i;
    default:
      return [];
  }
}
function e2(e, t, n, r) {
  const o = jn(e);
  let a = Zx(It(e), n === "start", r);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(Gi)))), a;
}
function ro(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Yx[t]);
}
function t2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function dp(e) {
  return typeof e != "number" ? t2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function oo(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function yc(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = Dt(t), i = Ds(t), s = Ts(i), c = It(t), l = a === "y", u = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, p = r[s] / 2 - o[s] / 2;
  let h;
  switch (c) {
    case "top":
      h = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (jn(t)) {
    case "start":
      h[i] -= p * (n && l ? -1 : 1);
      break;
    case "end":
      h[i] += p * (n && l ? -1 : 1);
      break;
  }
  return h;
}
const n2 = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: i
  } = n, s = a.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let l = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: f
  } = yc(l, r, c), p = r, h = {}, d = 0;
  for (let w = 0; w < s.length; w++) {
    const {
      name: g,
      fn: y
    } = s[w], {
      x: v,
      y: b,
      data: E,
      reset: P
    } = await y({
      x: u,
      y: f,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: h,
      rects: l,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = v ?? u, f = b ?? f, h = {
      ...h,
      [g]: {
        ...h[g],
        ...E
      }
    }, P && d <= 50 && (d++, typeof P == "object" && (P.placement && (p = P.placement), P.rects && (l = P.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : P.rects), {
      x: u,
      y: f
    } = yc(l, p, c)), w = -1);
  }
  return {
    x: u,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: h
  };
};
async function lr(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: i,
    elements: s,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: f = "floating",
    altBoundary: p = !1,
    padding: h = 0
  } = Rt(t, e), d = dp(h), g = s[p ? f === "floating" ? "reference" : "floating" : f], y = oo(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), v = f === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, b = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), E = await (a.isElement == null ? void 0 : a.isElement(b)) ? await (a.getScale == null ? void 0 : a.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, P = oo(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: v,
    offsetParent: b,
    strategy: c
  }) : v);
  return {
    top: (y.top - P.top + d.top) / E.y,
    bottom: (P.bottom - y.bottom + d.bottom) / E.y,
    left: (y.left - P.left + d.left) / E.x,
    right: (P.right - y.right + d.right) / E.x
  };
}
const r2 = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: i,
      elements: s,
      middlewareData: c
    } = t, {
      element: l,
      padding: u = 0
    } = Rt(e, t) || {};
    if (l == null)
      return {};
    const f = dp(u), p = {
      x: n,
      y: r
    }, h = Ds(o), d = Ts(h), w = await i.getDimensions(l), g = h === "y", y = g ? "top" : "left", v = g ? "bottom" : "right", b = g ? "clientHeight" : "clientWidth", E = a.reference[d] + a.reference[h] - p[h] - a.floating[d], P = p[h] - a.reference[h], $ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
    let F = $ ? $[b] : 0;
    (!F || !await (i.isElement == null ? void 0 : i.isElement($))) && (F = s.floating[b] || a.floating[d]);
    const B = E / 2 - P / 2, T = F / 2 - w[d] / 2 - 1, k = Xt(f[y], T), _ = Xt(f[v], T), m = k, S = F - w[d] - _, O = F / 2 - w[d] / 2 + B, x = Ki(m, O, S), z = !c.arrow && jn(o) != null && O !== x && a.reference[d] / 2 - (O < m ? k : _) - w[d] / 2 < 0, M = z ? O < m ? O - m : O - S : 0;
    return {
      [h]: p[h] + M,
      data: {
        [h]: x,
        centerOffset: O - x - M,
        ...z && {
          alignmentOffset: M
        }
      },
      reset: z
    };
  }
}), o2 = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: i,
        initialPlacement: s,
        platform: c,
        elements: l
      } = t, {
        mainAxis: u = !0,
        crossAxis: f = !0,
        fallbackPlacements: p,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: d = "none",
        flipAlignment: w = !0,
        ...g
      } = Rt(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const y = It(o), v = Dt(s), b = It(s) === s, E = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), P = p || (b || !w ? [ro(s)] : Qx(s)), $ = d !== "none";
      !p && $ && P.push(...e2(s, w, d, E));
      const F = [s, ...P], B = await lr(t, g), T = [];
      let k = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (u && T.push(B[y]), f) {
        const x = Jx(o, i, E);
        T.push(B[x[0]], B[x[1]]);
      }
      if (k = [...k, {
        placement: o,
        overflows: T
      }], !T.every((x) => x <= 0)) {
        var _, m;
        const x = (((_ = a.flip) == null ? void 0 : _.index) || 0) + 1, z = F[x];
        if (z) {
          var S;
          const I = f === "alignment" ? v !== Dt(z) : !1, H = ((S = k[0]) == null ? void 0 : S.overflows[0]) > 0;
          if (!I || H)
            return {
              data: {
                index: x,
                overflows: k
              },
              reset: {
                placement: z
              }
            };
        }
        let M = (m = k.filter((I) => I.overflows[0] <= 0).sort((I, H) => I.overflows[1] - H.overflows[1])[0]) == null ? void 0 : m.placement;
        if (!M)
          switch (h) {
            case "bestFit": {
              var O;
              const I = (O = k.filter((H) => {
                if ($) {
                  const oe = Dt(H.placement);
                  return oe === v || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  oe === "y";
                }
                return !0;
              }).map((H) => [H.placement, H.overflows.filter((oe) => oe > 0).reduce((oe, Ae) => oe + Ae, 0)]).sort((H, oe) => H[1] - oe[1])[0]) == null ? void 0 : O[0];
              I && (M = I);
              break;
            }
            case "initialPlacement":
              M = s;
              break;
          }
        if (o !== M)
          return {
            reset: {
              placement: M
            }
          };
      }
      return {};
    }
  };
};
function gc(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function vc(e) {
  return Gx.some((t) => e[t] >= 0);
}
const a2 = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Rt(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await lr(t, {
            ...o,
            elementContext: "reference"
          }), i = gc(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: vc(i)
            }
          };
        }
        case "escaped": {
          const a = await lr(t, {
            ...o,
            altBoundary: !0
          }), i = gc(a, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: vc(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function i2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = It(n), s = jn(n), c = Dt(n) === "y", l = ["left", "top"].includes(i) ? -1 : 1, u = a && c ? -1 : 1, f = Rt(t, e);
  let {
    mainAxis: p,
    crossAxis: h,
    alignmentAxis: d
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return s && typeof d == "number" && (h = s === "end" ? d * -1 : d), c ? {
    x: h * u,
    y: p * l
  } : {
    x: p * l,
    y: h * u
  };
}
const s2 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: a,
        placement: i,
        middlewareData: s
      } = t, c = await i2(t, e);
      return i === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: a + c.y,
        data: {
          ...c,
          placement: i
        }
      };
    }
  };
}, l2 = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: a = !0,
        crossAxis: i = !1,
        limiter: s = {
          fn: (g) => {
            let {
              x: y,
              y: v
            } = g;
            return {
              x: y,
              y: v
            };
          }
        },
        ...c
      } = Rt(e, t), l = {
        x: n,
        y: r
      }, u = await lr(t, c), f = Dt(It(o)), p = ks(f);
      let h = l[p], d = l[f];
      if (a) {
        const g = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", v = h + u[g], b = h - u[y];
        h = Ki(v, h, b);
      }
      if (i) {
        const g = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", v = d + u[g], b = d - u[y];
        d = Ki(v, d, b);
      }
      const w = s.fn({
        ...t,
        [p]: h,
        [f]: d
      });
      return {
        ...w,
        data: {
          x: w.x - n,
          y: w.y - r,
          enabled: {
            [p]: a,
            [f]: i
          }
        }
      };
    }
  };
}, u2 = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: a,
        middlewareData: i
      } = t, {
        offset: s = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = Rt(e, t), u = {
        x: n,
        y: r
      }, f = Dt(o), p = ks(f);
      let h = u[p], d = u[f];
      const w = Rt(s, t), g = typeof w == "number" ? {
        mainAxis: w,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...w
      };
      if (c) {
        const b = p === "y" ? "height" : "width", E = a.reference[p] - a.floating[b] + g.mainAxis, P = a.reference[p] + a.reference[b] - g.mainAxis;
        h < E ? h = E : h > P && (h = P);
      }
      if (l) {
        var y, v;
        const b = p === "y" ? "width" : "height", E = ["top", "left"].includes(It(o)), P = a.reference[f] - a.floating[b] + (E && ((y = i.offset) == null ? void 0 : y[f]) || 0) + (E ? 0 : g.crossAxis), $ = a.reference[f] + a.reference[b] + (E ? 0 : ((v = i.offset) == null ? void 0 : v[f]) || 0) - (E ? g.crossAxis : 0);
        d < P ? d = P : d > $ && (d = $);
      }
      return {
        [p]: h,
        [f]: d
      };
    }
  };
}, c2 = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: a,
        platform: i,
        elements: s
      } = t, {
        apply: c = () => {
        },
        ...l
      } = Rt(e, t), u = await lr(t, l), f = It(o), p = jn(o), h = Dt(o) === "y", {
        width: d,
        height: w
      } = a.floating;
      let g, y;
      f === "top" || f === "bottom" ? (g = f, y = p === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (y = f, g = p === "end" ? "top" : "bottom");
      const v = w - u.top - u.bottom, b = d - u.left - u.right, E = Xt(w - u[g], v), P = Xt(d - u[y], b), $ = !t.middlewareData.shift;
      let F = E, B = P;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (B = b), (r = t.middlewareData.shift) != null && r.enabled.y && (F = v), $ && !p) {
        const k = Xe(u.left, 0), _ = Xe(u.right, 0), m = Xe(u.top, 0), S = Xe(u.bottom, 0);
        h ? B = d - 2 * (k !== 0 || _ !== 0 ? k + _ : Xe(u.left, u.right)) : F = w - 2 * (m !== 0 || S !== 0 ? m + S : Xe(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: B,
        availableHeight: F
      });
      const T = await i.getDimensions(s.floating);
      return d !== T.width || w !== T.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ko() {
  return typeof window < "u";
}
function mn(e) {
  return $s(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Je(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function At(e) {
  var t;
  return (t = ($s(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function $s(e) {
  return ko() ? e instanceof Node || e instanceof Je(e).Node : !1;
}
function ct(e) {
  return ko() ? e instanceof Element || e instanceof Je(e).Element : !1;
}
function Et(e) {
  return ko() ? e instanceof HTMLElement || e instanceof Je(e).HTMLElement : !1;
}
function bc(e) {
  return !ko() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Je(e).ShadowRoot;
}
function xr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ft(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function f2(e) {
  return ["table", "td", "th"].includes(mn(e));
}
function To(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Fs(e) {
  const t = Rs(), n = ct(e) ? ft(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function d2(e) {
  let t = Jt(e);
  for (; Et(t) && !In(t); ) {
    if (Fs(t))
      return t;
    if (To(t))
      return null;
    t = Jt(t);
  }
  return null;
}
function Rs() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function In(e) {
  return ["html", "body", "#document"].includes(mn(e));
}
function ft(e) {
  return Je(e).getComputedStyle(e);
}
function Do(e) {
  return ct(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Jt(e) {
  if (mn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    bc(e) && e.host || // Fallback.
    At(e)
  );
  return bc(t) ? t.host : t;
}
function pp(e) {
  const t = Jt(e);
  return In(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Et(t) && xr(t) ? t : pp(t);
}
function ur(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = pp(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = Je(o);
  if (a) {
    const s = Yi(i);
    return t.concat(i, i.visualViewport || [], xr(o) ? o : [], s && n ? ur(s) : []);
  }
  return t.concat(o, ur(o, [], n));
}
function Yi(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function hp(e) {
  const t = ft(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Et(e), a = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, s = no(n) !== a || no(r) !== i;
  return s && (n = a, r = i), {
    width: n,
    height: r,
    $: s
  };
}
function Is(e) {
  return ct(e) ? e : e.contextElement;
}
function $n(e) {
  const t = Is(e);
  if (!Et(t))
    return xt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = hp(t);
  let i = (a ? no(n.width) : n.width) / r, s = (a ? no(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const p2 = /* @__PURE__ */ xt(0);
function mp(e) {
  const t = Je(e);
  return !Rs() || !t.visualViewport ? p2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function h2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Je(e) ? !1 : t;
}
function dn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Is(e);
  let i = xt(1);
  t && (r ? ct(r) && (i = $n(r)) : i = $n(e));
  const s = h2(a, n, r) ? mp(a) : xt(0);
  let c = (o.left + s.x) / i.x, l = (o.top + s.y) / i.y, u = o.width / i.x, f = o.height / i.y;
  if (a) {
    const p = Je(a), h = r && ct(r) ? Je(r) : r;
    let d = p, w = Yi(d);
    for (; w && r && h !== d; ) {
      const g = $n(w), y = w.getBoundingClientRect(), v = ft(w), b = y.left + (w.clientLeft + parseFloat(v.paddingLeft)) * g.x, E = y.top + (w.clientTop + parseFloat(v.paddingTop)) * g.y;
      c *= g.x, l *= g.y, u *= g.x, f *= g.y, c += b, l += E, d = Je(w), w = Yi(d);
    }
  }
  return oo({
    width: u,
    height: f,
    x: c,
    y: l
  });
}
function Ls(e, t) {
  const n = Do(e).scrollLeft;
  return t ? t.left + n : dn(At(e)).left + n;
}
function yp(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Ls(e, r)
  )), a = r.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function m2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", i = At(r), s = t ? To(t.floating) : !1;
  if (r === i || s && a)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = xt(1);
  const u = xt(0), f = Et(r);
  if ((f || !f && !a) && ((mn(r) !== "body" || xr(i)) && (c = Do(r)), Et(r))) {
    const h = dn(r);
    l = $n(r), u.x = h.x + r.clientLeft, u.y = h.y + r.clientTop;
  }
  const p = i && !f && !a ? yp(i, c, !0) : xt(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + p.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + p.y
  };
}
function y2(e) {
  return Array.from(e.getClientRects());
}
function g2(e) {
  const t = At(e), n = Do(e), r = e.ownerDocument.body, o = Xe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Xe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Ls(e);
  const s = -n.scrollTop;
  return ft(r).direction === "rtl" && (i += Xe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
function v2(e, t) {
  const n = Je(e), r = At(e), o = n.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, s = 0, c = 0;
  if (o) {
    a = o.width, i = o.height;
    const l = Rs();
    (!l || l && t === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: c
  };
}
function b2(e, t) {
  const n = dn(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = Et(e) ? $n(e) : xt(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: i,
    height: s,
    x: c,
    y: l
  };
}
function wc(e, t, n) {
  let r;
  if (t === "viewport")
    r = v2(e, n);
  else if (t === "document")
    r = g2(At(e));
  else if (ct(t))
    r = b2(t, n);
  else {
    const o = mp(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return oo(r);
}
function gp(e, t) {
  const n = Jt(e);
  return n === t || !ct(n) || In(n) ? !1 : ft(n).position === "fixed" || gp(n, t);
}
function w2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ur(e, [], !1).filter((s) => ct(s) && mn(s) !== "body"), o = null;
  const a = ft(e).position === "fixed";
  let i = a ? Jt(e) : e;
  for (; ct(i) && !In(i); ) {
    const s = ft(i), c = Fs(i);
    !c && s.position === "fixed" && (o = null), (a ? !c && !o : !c && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || xr(i) && !c && gp(e, i)) ? r = r.filter((u) => u !== i) : o = s, i = Jt(i);
  }
  return t.set(e, r), r;
}
function x2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? To(t) ? [] : w2(t, this._c) : [].concat(n), r], s = i[0], c = i.reduce((l, u) => {
    const f = wc(t, u, o);
    return l.top = Xe(f.top, l.top), l.right = Xt(f.right, l.right), l.bottom = Xt(f.bottom, l.bottom), l.left = Xe(f.left, l.left), l;
  }, wc(t, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function S2(e) {
  const {
    width: t,
    height: n
  } = hp(e);
  return {
    width: t,
    height: n
  };
}
function O2(e, t, n) {
  const r = Et(t), o = At(t), a = n === "fixed", i = dn(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = xt(0);
  function l() {
    c.x = Ls(o);
  }
  if (r || !r && !a)
    if ((mn(t) !== "body" || xr(o)) && (s = Do(t)), r) {
      const h = dn(t, !0, a, t);
      c.x = h.x + t.clientLeft, c.y = h.y + t.clientTop;
    } else o && l();
  a && !r && o && l();
  const u = o && !r && !a ? yp(o, s) : xt(0), f = i.left + s.scrollLeft - c.x - u.x, p = i.top + s.scrollTop - c.y - u.y;
  return {
    x: f,
    y: p,
    width: i.width,
    height: i.height
  };
}
function Za(e) {
  return ft(e).position === "static";
}
function xc(e, t) {
  if (!Et(e) || ft(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return At(e) === n && (n = n.ownerDocument.body), n;
}
function vp(e, t) {
  const n = Je(e);
  if (To(e))
    return n;
  if (!Et(e)) {
    let o = Jt(e);
    for (; o && !In(o); ) {
      if (ct(o) && !Za(o))
        return o;
      o = Jt(o);
    }
    return n;
  }
  let r = xc(e, t);
  for (; r && f2(r) && Za(r); )
    r = xc(r, t);
  return r && In(r) && Za(r) && !Fs(r) ? n : r || d2(e) || n;
}
const E2 = async function(e) {
  const t = this.getOffsetParent || vp, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: O2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function A2(e) {
  return ft(e).direction === "rtl";
}
const C2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: m2,
  getDocumentElement: At,
  getClippingRect: x2,
  getOffsetParent: vp,
  getElementRects: E2,
  getClientRects: y2,
  getDimensions: S2,
  getScale: $n,
  isElement: ct,
  isRTL: A2
};
function bp(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function P2(e, t) {
  let n = null, r;
  const o = At(e);
  function a() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function i(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), a();
    const l = e.getBoundingClientRect(), {
      left: u,
      top: f,
      width: p,
      height: h
    } = l;
    if (s || t(), !p || !h)
      return;
    const d = $r(f), w = $r(o.clientWidth - (u + p)), g = $r(o.clientHeight - (f + h)), y = $r(u), b = {
      rootMargin: -d + "px " + -w + "px " + -g + "px " + -y + "px",
      threshold: Xe(0, Xt(1, c)) || 1
    };
    let E = !0;
    function P($) {
      const F = $[0].intersectionRatio;
      if (F !== c) {
        if (!E)
          return i();
        F ? i(!1, F) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      F === 1 && !bp(l, e.getBoundingClientRect()) && i(), E = !1;
    }
    try {
      n = new IntersectionObserver(P, {
        ...b,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(P, b);
    }
    n.observe(e);
  }
  return i(!0), a;
}
function k2(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = Is(e), u = o || a ? [...l ? ur(l) : [], ...ur(t)] : [];
  u.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), a && y.addEventListener("resize", n);
  });
  const f = l && s ? P2(l, n) : null;
  let p = -1, h = null;
  i && (h = new ResizeObserver((y) => {
    let [v] = y;
    v && v.target === l && h && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var b;
      (b = h) == null || b.observe(t);
    })), n();
  }), l && !c && h.observe(l), h.observe(t));
  let d, w = c ? dn(e) : null;
  c && g();
  function g() {
    const y = dn(e);
    w && !bp(w, y) && n(), w = y, d = requestAnimationFrame(g);
  }
  return n(), () => {
    var y;
    u.forEach((v) => {
      o && v.removeEventListener("scroll", n), a && v.removeEventListener("resize", n);
    }), f == null || f(), (y = h) == null || y.disconnect(), h = null, c && cancelAnimationFrame(d);
  };
}
const T2 = s2, D2 = l2, Sc = o2, $2 = c2, F2 = a2, R2 = r2, I2 = u2, L2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: C2,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return n2(e, t, {
    ...o,
    platform: a
  });
};
function N2(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Xi(e) {
  if (N2(e)) {
    const t = e.$el;
    return $s(t) && mn(t) === "#comment" ? null : t;
  }
  return e;
}
function An(e) {
  return typeof e == "function" ? e() : C(e);
}
function _2(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = Xi(An(e.element));
      return n == null ? {} : R2({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function wp(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Oc(e, t) {
  const n = wp(e);
  return Math.round(t * n) / n;
}
function M2(e, t, n) {
  n === void 0 && (n = {});
  const r = n.whileElementsMounted, o = W(() => {
    var F;
    return (F = An(n.open)) != null ? F : !0;
  }), a = W(() => An(n.middleware)), i = W(() => {
    var F;
    return (F = An(n.placement)) != null ? F : "bottom";
  }), s = W(() => {
    var F;
    return (F = An(n.strategy)) != null ? F : "absolute";
  }), c = W(() => {
    var F;
    return (F = An(n.transform)) != null ? F : !0;
  }), l = W(() => Xi(e.value)), u = W(() => Xi(t.value)), f = q(0), p = q(0), h = q(s.value), d = q(i.value), w = io({}), g = q(!1), y = W(() => {
    const F = {
      position: h.value,
      left: "0",
      top: "0"
    };
    if (!u.value)
      return F;
    const B = Oc(u.value, f.value), T = Oc(u.value, p.value);
    return c.value ? {
      ...F,
      transform: "translate(" + B + "px, " + T + "px)",
      ...wp(u.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: h.value,
      left: B + "px",
      top: T + "px"
    };
  });
  let v;
  function b() {
    if (l.value == null || u.value == null)
      return;
    const F = o.value;
    L2(l.value, u.value, {
      middleware: a.value,
      placement: i.value,
      strategy: s.value
    }).then((B) => {
      f.value = B.x, p.value = B.y, h.value = B.strategy, d.value = B.placement, w.value = B.middlewareData, g.value = F !== !1;
    });
  }
  function E() {
    typeof v == "function" && (v(), v = void 0);
  }
  function P() {
    if (E(), r === void 0) {
      b();
      return;
    }
    if (l.value != null && u.value != null) {
      v = r(l.value, u.value, b);
      return;
    }
  }
  function $() {
    o.value || (g.value = !1);
  }
  return pe([a, i, s, o], b, {
    flush: "sync"
  }), pe([l, u], P, {
    flush: "sync"
  }), pe(o, $, {
    flush: "sync"
  }), Ic() && Lc(E), {
    x: Sn(f),
    y: Sn(p),
    strategy: Sn(h),
    placement: Sn(d),
    middlewareData: Sn(w),
    isPositioned: Sn(g),
    floatingStyles: y,
    update: b
  };
}
function Ns(e) {
  return e ? e.flatMap((t) => t.type === ie ? Ns(t.children) : [t]) : [];
}
const Ji = te({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var c, l;
      if (!n.default)
        return null;
      const r = Ns(n.default()), o = r.findIndex((u) => u.type !== ah);
      if (o === -1)
        return r;
      const a = r[o];
      (c = a.props) == null || delete c.ref;
      const i = a.props ? Se(t, a.props) : t;
      t.class && ((l = a.props) != null && l.class) && delete a.props.class;
      const s = ih(a, i);
      for (const u in i)
        u.startsWith("on") && (s.props || (s.props = {}), s.props[u] = i[u]);
      return r.length === 1 ? s : (r[o] = s, r);
    };
  }
}), B2 = ["area", "img", "input"], ht = te({
  name: "Primitive",
  inheritAttrs: !1,
  props: {
    asChild: {
      type: Boolean,
      default: !1
    },
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(e, { attrs: t, slots: n }) {
    const r = e.asChild ? "template" : e.as;
    return typeof r == "string" && B2.includes(r) ? () => Me(r, t) : r !== "template" ? () => Me(e.as, t, { default: n.default }) : () => Me(Ji, t, { default: n.default });
  }
});
function j2(e, t) {
  var n;
  const r = io();
  return St(() => {
    r.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), uh(r);
}
function _s(e) {
  return Ic() ? (Lc(e), !0) : !1;
}
function q2(e) {
  let t = !1, n;
  const r = Nc(!0);
  return (...o) => (t || (n = r.run(() => e(...o)), t = !0), n);
}
function xp(e) {
  let t = 0, n, r;
  const o = () => {
    t -= 1, r && t <= 0 && (r.stop(), n = void 0, r = void 0);
  };
  return (...a) => (t += 1, r || (r = Nc(!0), n = r.run(() => e(...a))), _s(o), n);
}
const Zt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const U2 = (e) => typeof e < "u", z2 = Object.prototype.toString, V2 = (e) => z2.call(e) === "[object Object]", Ec = /* @__PURE__ */ H2();
function H2() {
  var e, t;
  return Zt && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function W2(e) {
  return hn();
}
function ei(e) {
  return Array.isArray(e) ? e : [e];
}
function K2(e, t = 1e4) {
  return lh((n, r) => {
    let o = Ht(e), a;
    const i = () => setTimeout(() => {
      o = Ht(e), r();
    }, Ht(t));
    return _s(() => {
      clearTimeout(a);
    }), {
      get() {
        return n(), o;
      },
      set(s) {
        o = s, r(), clearTimeout(a), a = i();
      }
    };
  });
}
function G2(e, t) {
  W2() && sh(e, t);
}
function Y2(e, t, n) {
  return pe(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const Ms = Zt ? window : void 0;
function qn(e) {
  var t;
  const n = Ht(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function cr(...e) {
  const t = [], n = () => {
    t.forEach((s) => s()), t.length = 0;
  }, r = (s, c, l, u) => (s.addEventListener(c, l, u), () => s.removeEventListener(c, l, u)), o = W(() => {
    const s = ei(Ht(e[0])).filter((c) => c != null);
    return s.every((c) => typeof c != "string") ? s : void 0;
  }), a = Y2(
    () => {
      var s, c;
      return [
        (c = (s = o.value) == null ? void 0 : s.map((l) => qn(l))) != null ? c : [Ms].filter((l) => l != null),
        ei(Ht(o.value ? e[1] : e[0])),
        ei(C(o.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Ht(o.value ? e[3] : e[2])
      ];
    },
    ([s, c, l, u]) => {
      if (n(), !(s != null && s.length) || !(c != null && c.length) || !(l != null && l.length))
        return;
      const f = V2(u) ? { ...u } : u;
      t.push(
        ...s.flatMap(
          (p) => c.flatMap(
            (h) => l.map((d) => r(p, h, d, f))
          )
        )
      );
    },
    { flush: "post" }
  ), i = () => {
    a(), n();
  };
  return _s(n), i;
}
function X2() {
  const e = io(!1), t = hn();
  return t && Re(() => {
    e.value = !0;
  }, t), e;
}
function J2(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Q2(...e) {
  let t, n, r = {};
  e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = Ms,
    eventName: a = "keydown",
    passive: i = !1,
    dedupe: s = !1
  } = r, c = J2(t);
  return cr(o, a, (u) => {
    u.repeat && Ht(s) || c(u) && n(u);
  }, i);
}
function Z2(e) {
  return JSON.parse(JSON.stringify(e));
}
function $o(e, t, n, r = {}) {
  var o, a, i;
  const {
    clone: s = !1,
    passive: c = !1,
    eventName: l,
    deep: u = !1,
    defaultValue: f,
    shouldEmit: p
  } = r, h = hn(), d = n || (h == null ? void 0 : h.emit) || ((o = h == null ? void 0 : h.$emit) == null ? void 0 : o.bind(h)) || ((i = (a = h == null ? void 0 : h.proxy) == null ? void 0 : a.$emit) == null ? void 0 : i.bind(h == null ? void 0 : h.proxy));
  let w = l;
  t || (t = "modelValue"), w = w || `update:${t.toString()}`;
  const g = (b) => s ? typeof s == "function" ? s(b) : Z2(b) : b, y = () => U2(e[t]) ? g(e[t]) : f, v = (b) => {
    p ? p(b) && d(w, b) : d(w, b);
  };
  if (c) {
    const b = y(), E = q(b);
    let P = !1;
    return pe(
      () => e[t],
      ($) => {
        P || (P = !0, E.value = g($), ze(() => P = !1));
      }
    ), pe(
      E,
      ($) => {
        !P && ($ !== e[t] || u) && v($);
      },
      { deep: u }
    ), E;
  } else
    return W({
      get() {
        return y();
      },
      set(b) {
        v(b);
      }
    });
}
function Nt(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, r = Symbol(n);
  return [(i) => {
    const s = ns(r, i);
    if (s || s === null)
      return s;
    throw new Error(
      `Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (i) => (rs(r, i), i)];
}
const [Bs, lA] = Nt("ConfigProvider");
function js(e) {
  const t = Bs({
    dir: q("ltr")
  });
  return W(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function Ie() {
  const e = hn(), t = q(), n = W(() => {
    var i, s;
    return ["#text", "#comment"].includes((i = t.value) == null ? void 0 : i.$el.nodeName) ? (s = t.value) == null ? void 0 : s.$el.nextElementSibling : qn(t);
  }), r = Object.assign({}, e.exposed), o = {};
  for (const i in e.props)
    Object.defineProperty(o, i, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[i]
    });
  if (Object.keys(r).length > 0)
    for (const i in r)
      Object.defineProperty(o, i, {
        enumerable: !0,
        configurable: !0,
        get: () => r[i]
      });
  Object.defineProperty(o, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = o;
  function a(i) {
    t.value = i, i && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => i instanceof Element ? i : i.$el
    }), e.exposed = o);
  }
  return { forwardRef: a, currentRef: t, currentElement: n };
}
const [Sp, eS] = Nt("CollapsibleRoot"), Op = /* @__PURE__ */ te({
  __name: "CollapsibleRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    disabled: { type: Boolean },
    unmountOnHide: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:open"],
  setup(e, { expose: t, emit: n }) {
    const r = e, a = $o(r, "open", n, {
      defaultValue: r.defaultOpen,
      passive: r.open === void 0
    }), { disabled: i, unmountOnHide: s } = pn(r);
    return eS({
      contentId: "",
      disabled: i,
      open: a,
      unmountOnHide: s,
      onOpenToggle: () => {
        a.value = !a.value;
      }
    }), t({ open: a }), Ie(), (c, l) => (A(), G(C(ht), {
      as: c.as,
      "as-child": r.asChild,
      "data-state": C(a) ? "open" : "closed",
      "data-disabled": C(i) ? "" : void 0
    }, {
      default: K(() => [
        V(c.$slots, "default", { open: C(a) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), tS = ["INPUT", "TEXTAREA"];
function nS(e, t, n, r = {}) {
  if (!t || r.enableIgnoredElement && tS.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: a = "[data-reka-collection-item]",
    itemsArray: i = [],
    loop: s = !0,
    dir: c = "ltr",
    preventScroll: l = !0,
    focus: u = !1
  } = r, [f, p, h, d, w, g] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], y = h || d, v = f || p;
  if (!w && !g && (!y && !v || o === "vertical" && v || o === "horizontal" && y))
    return null;
  const b = n ? Array.from(n.querySelectorAll(a)) : i;
  if (!b.length)
    return null;
  l && e.preventDefault();
  let E = null;
  return v || y ? E = Ep(b, t, {
    goForward: y ? d : c === "ltr" ? f : p,
    loop: s
  }) : w ? E = b.at(0) || null : g && (E = b.at(-1) || null), u && (E == null || E.focus()), E;
}
function Ep(e, t, n, r = e.length) {
  if (--r === 0)
    return null;
  const o = e.indexOf(t), a = n.goForward ? o + 1 : o - 1;
  if (!n.loop && (a < 0 || a >= e.length))
    return null;
  const i = (a + e.length) % e.length, s = e[i];
  return s ? s.hasAttribute("disabled") && s.getAttribute("disabled") !== "false" ? Ep(
    e,
    s,
    n,
    r
  ) : s : null;
}
let rS = 0;
function qs(e, t = "reka") {
  const n = Bs({ useId: void 0 });
  return Zs.useId ? `${t}-${Zs.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++rS}`;
}
function oS(e, t) {
  const n = q(e);
  function r(a) {
    return t[n.value][a] ?? n.value;
  }
  return {
    state: n,
    dispatch: (a) => {
      n.value = r(a);
    }
  };
}
function aS(e, t) {
  var g;
  const n = q({}), r = q("none"), o = q(e), a = e.value ? "mounted" : "unmounted";
  let i;
  const s = ((g = t.value) == null ? void 0 : g.ownerDocument.defaultView) ?? Ms, { state: c, dispatch: l } = oS(a, {
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
  }), u = (y) => {
    var v;
    if (Zt) {
      const b = new CustomEvent(y, { bubbles: !1, cancelable: !1 });
      (v = t.value) == null || v.dispatchEvent(b);
    }
  };
  pe(
    e,
    async (y, v) => {
      var E;
      const b = v !== y;
      if (await ze(), b) {
        const P = r.value, $ = Fr(t.value);
        y ? (l("MOUNT"), u("enter"), $ === "none" && u("after-enter")) : $ === "none" || $ === "undefined" || ((E = n.value) == null ? void 0 : E.display) === "none" ? (l("UNMOUNT"), u("leave"), u("after-leave")) : v && P !== $ ? (l("ANIMATION_OUT"), u("leave")) : (l("UNMOUNT"), u("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const f = (y) => {
    const v = Fr(t.value), b = v.includes(
      y.animationName
    ), E = c.value === "mounted" ? "enter" : "leave";
    if (y.target === t.value && b && (u(`after-${E}`), l("ANIMATION_END"), !o.value)) {
      const P = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", i = s == null ? void 0 : s.setTimeout(() => {
        var $;
        (($ = t.value) == null ? void 0 : $.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = P);
      });
    }
    y.target === t.value && v === "none" && l("ANIMATION_END");
  }, p = (y) => {
    y.target === t.value && (r.value = Fr(t.value));
  }, h = pe(
    t,
    (y, v) => {
      y ? (n.value = getComputedStyle(y), y.addEventListener("animationstart", p), y.addEventListener("animationcancel", f), y.addEventListener("animationend", f)) : (l("ANIMATION_END"), i !== void 0 && (s == null || s.clearTimeout(i)), v == null || v.removeEventListener("animationstart", p), v == null || v.removeEventListener("animationcancel", f), v == null || v.removeEventListener("animationend", f));
    },
    { immediate: !0 }
  ), d = pe(c, () => {
    const y = Fr(t.value);
    r.value = c.value === "mounted" ? y : "none";
  });
  return Qt(() => {
    h(), d();
  }), {
    isPresent: W(
      () => ["mounted", "unmountSuspended"].includes(c.value)
    )
  };
}
function Fr(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Ap = te({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: !0
    },
    forceMount: {
      type: Boolean
    }
  },
  slots: {},
  setup(e, { slots: t, expose: n }) {
    var l;
    const { present: r, forceMount: o } = pn(e), a = q(), { isPresent: i } = aS(r, a);
    n({ present: i });
    let s = t.default({ present: i.value });
    s = Ns(s || []);
    const c = hn();
    if (s && (s == null ? void 0 : s.length) > 1) {
      const u = (l = c == null ? void 0 : c.parent) != null && l.type.name ? `<${c.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${u}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((f) => `  - ${f}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => o.value || r.value || i.value ? Me(t.default({ present: i.value })[0], {
      ref: (u) => {
        const f = qn(u);
        return typeof (f == null ? void 0 : f.hasAttribute) > "u" || (f != null && f.hasAttribute("data-reka-popper-content-wrapper") ? a.value = f.firstElementChild : a.value = f), f;
      }
    }) : null;
  }
}), Cp = /* @__PURE__ */ te({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["contentFound"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Sp();
    o.contentId || (o.contentId = qs(void 0, "reka-collapsible-content"));
    const a = q(), { forwardRef: i, currentElement: s } = Ie(), c = q(0), l = q(0), u = W(() => o.open.value), f = q(u.value), p = q();
    pe(
      () => {
        var d;
        return [u.value, (d = a.value) == null ? void 0 : d.present];
      },
      async () => {
        await ze();
        const d = s.value;
        if (!d)
          return;
        p.value = p.value || {
          transitionDuration: d.style.transitionDuration,
          animationName: d.style.animationName
        }, d.style.transitionDuration = "0s", d.style.animationName = "none";
        const w = d.getBoundingClientRect();
        l.value = w.height, c.value = w.width, f.value || (d.style.transitionDuration = p.value.transitionDuration, d.style.animationName = p.value.animationName);
      },
      {
        immediate: !0
      }
    );
    const h = W(() => f.value && o.open.value);
    return Re(() => {
      requestAnimationFrame(() => {
        f.value = !1;
      });
    }), cr(s, "beforematch", (d) => {
      requestAnimationFrame(() => {
        o.onOpenToggle(), r("contentFound");
      });
    }), (d, w) => (A(), G(C(Ap), {
      ref_key: "presentRef",
      ref: a,
      present: d.forceMount || C(o).open.value,
      "force-mount": !0
    }, {
      default: K(({ present: g }) => {
        var y;
        return [
          Z(C(ht), Se(d.$attrs, {
            id: C(o).contentId,
            ref: C(i),
            "as-child": n.asChild,
            as: d.as,
            hidden: g ? void 0 : C(o).unmountOnHide.value ? "" : "until-found",
            "data-state": h.value ? void 0 : C(o).open.value ? "open" : "closed",
            "data-disabled": (y = C(o).disabled) != null && y.value ? "" : void 0,
            style: {
              "--reka-collapsible-content-height": `${l.value}px`,
              "--reka-collapsible-content-width": `${c.value}px`
            }
          }), {
            default: K(() => [
              !C(o).unmountOnHide.value || g ? V(d.$slots, "default", { key: 0 }) : Y("", !0)
            ]),
            _: 2
          }, 1040, ["id", "as-child", "as", "hidden", "data-state", "data-disabled", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
}), Pp = /* @__PURE__ */ te({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    Ie();
    const n = Sp();
    return (r, o) => {
      var a, i;
      return A(), G(C(ht), {
        type: r.as === "button" ? "button" : void 0,
        as: r.as,
        "as-child": t.asChild,
        "aria-controls": C(n).contentId,
        "aria-expanded": C(n).open.value,
        "data-state": C(n).open.value ? "open" : "closed",
        "data-disabled": (a = C(n).disabled) != null && a.value ? "" : void 0,
        disabled: (i = C(n).disabled) == null ? void 0 : i.value,
        onClick: C(n).onOpenToggle
      }, {
        default: K(() => [
          V(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function kp(e) {
  const t = hn(), n = t == null ? void 0 : t.type.emits, r = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((o) => {
    r[ch(_c(o))] = (...a) => e(o, ...a);
  }), r;
}
function Tp(e, t, n) {
  const r = n.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && r.addEventListener(e, t, { once: !0 }), r.dispatchEvent(o);
}
const iS = "dismissableLayer.pointerDownOutside", sS = "dismissableLayer.focusOutside";
function Dp(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), r = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && (r === n || o.indexOf(r) < o.indexOf(n)));
}
function lS(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = q(!1), o = q(() => {
  });
  return St((i) => {
    if (!Zt)
      return;
    const s = async (l) => {
      const u = l.target;
      if (!(!(t != null && t.value) || !u)) {
        if (Dp(t.value, u)) {
          r.value = !1;
          return;
        }
        if (l.target && !r.value) {
          let f = function() {
            Tp(
              iS,
              e,
              p
            );
          };
          const p = { originalEvent: l };
          l.pointerType === "touch" ? (n.removeEventListener("click", o.value), o.value = f, n.addEventListener("click", o.value, {
            once: !0
          })) : f();
        } else
          n.removeEventListener("click", o.value);
        r.value = !1;
      }
    }, c = window.setTimeout(() => {
      n.addEventListener("pointerdown", s);
    }, 0);
    i(() => {
      window.clearTimeout(c), n.removeEventListener("pointerdown", s), n.removeEventListener("click", o.value);
    });
  }), {
    onPointerDownCapture: () => r.value = !0
  };
}
function uS(e, t) {
  var o;
  const n = ((o = t == null ? void 0 : t.value) == null ? void 0 : o.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = q(!1);
  return St((a) => {
    if (!Zt)
      return;
    const i = async (s) => {
      if (!(t != null && t.value))
        return;
      await ze(), await ze();
      const c = s.target;
      !t.value || !c || Dp(t.value, c) || s.target && !r.value && Tp(
        sS,
        e,
        { originalEvent: s }
      );
    };
    n.addEventListener("focusin", i), a(() => n.removeEventListener("focusin", i));
  }), {
    onFocusCapture: () => r.value = !0,
    onBlurCapture: () => r.value = !1
  };
}
const kt = fr({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), cS = /* @__PURE__ */ te({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, r = t, { forwardRef: o, currentElement: a } = Ie(), i = W(
      () => {
        var d;
        return ((d = a.value) == null ? void 0 : d.ownerDocument) ?? globalThis.document;
      }
    ), s = W(() => kt.layersRoot), c = W(() => a.value ? Array.from(s.value).indexOf(a.value) : -1), l = W(() => kt.layersWithOutsidePointerEventsDisabled.size > 0), u = W(() => {
      const d = Array.from(s.value), [w] = [...kt.layersWithOutsidePointerEventsDisabled].slice(-1), g = d.indexOf(w);
      return c.value >= g;
    }), f = lS(async (d) => {
      const w = [...kt.branches].some(
        (g) => g == null ? void 0 : g.contains(d.target)
      );
      !u.value || w || (r("pointerDownOutside", d), r("interactOutside", d), await ze(), d.defaultPrevented || r("dismiss"));
    }, a), p = uS((d) => {
      [...kt.branches].some(
        (g) => g == null ? void 0 : g.contains(d.target)
      ) || (r("focusOutside", d), r("interactOutside", d), d.defaultPrevented || r("dismiss"));
    }, a);
    Q2("Escape", (d) => {
      c.value === s.value.size - 1 && (r("escapeKeyDown", d), d.defaultPrevented || r("dismiss"));
    });
    let h;
    return St((d) => {
      a.value && (n.disableOutsidePointerEvents && (kt.layersWithOutsidePointerEventsDisabled.size === 0 && (h = i.value.body.style.pointerEvents, i.value.body.style.pointerEvents = "none"), kt.layersWithOutsidePointerEventsDisabled.add(a.value)), s.value.add(a.value), d(() => {
        n.disableOutsidePointerEvents && kt.layersWithOutsidePointerEventsDisabled.size === 1 && (i.value.body.style.pointerEvents = h);
      }));
    }), St((d) => {
      d(() => {
        a.value && (s.value.delete(a.value), kt.layersWithOutsidePointerEventsDisabled.delete(a.value));
      });
    }), (d, w) => (A(), G(C(ht), {
      ref: C(o),
      "as-child": d.asChild,
      as: d.as,
      "data-dismissable-layer": "",
      style: Vt({
        pointerEvents: l.value ? u.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: C(p).onFocusCapture,
      onBlurCapture: C(p).onBlurCapture,
      onPointerdownCapture: C(f).onPointerDownCapture
    }, {
      default: K(() => [
        V(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
});
function rt() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
const fS = "menu.itemSelect", Qi = ["Enter", " "], dS = ["ArrowDown", "PageUp", "Home"], $p = ["ArrowUp", "PageDown", "End"], pS = [...dS, ...$p];
[...Qi], [...Qi];
function hS(e) {
  return e ? "open" : "closed";
}
function mS(e) {
  const t = rt();
  for (const n of e)
    if (n === t || (n.focus(), rt() !== t))
      return;
}
function yS(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a].x, c = t[a].y, l = t[i].x, u = t[i].y;
    c > r != u > r && n < (l - s) * (r - c) / (u - c) + s && (o = !o);
  }
  return o;
}
function gS(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return yS(n, t);
}
function Zi(e) {
  return e.pointerType === "mouse";
}
const vS = q2(() => q([]));
function bS() {
  const e = vS();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = Ac(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = Ac(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function Ac(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function wS(e) {
  return e.filter((t) => t.tagName !== "A");
}
const ti = "focusScope.autoFocusOnMount", ni = "focusScope.autoFocusOnUnmount", Cc = { bubbles: !1, cancelable: !0 };
function xS(e, { select: t = !1 } = {}) {
  const n = rt();
  for (const r of e)
    if (Ut(r, { select: t }), rt() !== n)
      return !0;
}
function SS(e) {
  const t = Fp(e), n = Pc(t, e), r = Pc(t.reverse(), e);
  return [n, r];
}
function Fp(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Pc(e, t) {
  for (const n of e)
    if (!OS(n, { upTo: t }))
      return n;
}
function OS(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function ES(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ut(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = rt();
    e.focus({ preventScroll: !0 }), e !== n && ES(e) && t && e.select();
  }
}
const AS = /* @__PURE__ */ te({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = t, { currentRef: o, currentElement: a } = Ie(), i = q(null), s = bS(), c = fr({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    St((u) => {
      if (!Zt)
        return;
      const f = a.value;
      if (!n.trapped)
        return;
      function p(g) {
        if (c.paused || !f)
          return;
        const y = g.target;
        f.contains(y) ? i.value = y : Ut(i.value, { select: !0 });
      }
      function h(g) {
        if (c.paused || !f)
          return;
        const y = g.relatedTarget;
        y !== null && (f.contains(y) || Ut(i.value, { select: !0 }));
      }
      function d(g) {
        f.contains(i.value) || Ut(f);
      }
      document.addEventListener("focusin", p), document.addEventListener("focusout", h);
      const w = new MutationObserver(d);
      f && w.observe(f, { childList: !0, subtree: !0 }), u(() => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", h), w.disconnect();
      });
    }), St(async (u) => {
      const f = a.value;
      if (await ze(), !f)
        return;
      s.add(c);
      const p = rt();
      if (!f.contains(p)) {
        const d = new CustomEvent(ti, Cc);
        f.addEventListener(ti, (w) => r("mountAutoFocus", w)), f.dispatchEvent(d), d.defaultPrevented || (xS(wS(Fp(f)), {
          select: !0
        }), rt() === p && Ut(f));
      }
      u(() => {
        f.removeEventListener(ti, (g) => r("mountAutoFocus", g));
        const d = new CustomEvent(ni, Cc), w = (g) => {
          r("unmountAutoFocus", g);
        };
        f.addEventListener(ni, w), f.dispatchEvent(d), setTimeout(() => {
          d.defaultPrevented || Ut(p ?? document.body, { select: !0 }), f.removeEventListener(ni, w), s.remove(c);
        }, 0);
      });
    });
    function l(u) {
      if (!n.loop && !n.trapped || c.paused)
        return;
      const f = u.key === "Tab" && !u.altKey && !u.ctrlKey && !u.metaKey, p = rt();
      if (f && p) {
        const h = u.currentTarget, [d, w] = SS(h);
        d && w ? !u.shiftKey && p === w ? (u.preventDefault(), n.loop && Ut(d, { select: !0 })) : u.shiftKey && p === d && (u.preventDefault(), n.loop && Ut(w, { select: !0 })) : p === h && u.preventDefault();
      }
    }
    return (u, f) => (A(), G(C(ht), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": u.asChild,
      as: u.as,
      onKeydown: l
    }, {
      default: K(() => [
        V(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
var CS = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, En = /* @__PURE__ */ new WeakMap(), Rr = /* @__PURE__ */ new WeakMap(), Ir = {}, ri = 0, Rp = function(e) {
  return e && (e.host || Rp(e.parentNode));
}, PS = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Rp(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, kS = function(e, t, n, r) {
  var o = PS(t, Array.isArray(e) ? e : [e]);
  Ir[n] || (Ir[n] = /* @__PURE__ */ new WeakMap());
  var a = Ir[n], i = [], s = /* @__PURE__ */ new Set(), c = new Set(o), l = function(f) {
    !f || s.has(f) || (s.add(f), l(f.parentNode));
  };
  o.forEach(l);
  var u = function(f) {
    !f || c.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (s.has(p))
        u(p);
      else
        try {
          var h = p.getAttribute(r), d = h !== null && h !== "false", w = (En.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
          En.set(p, w), a.set(p, g), i.push(p), w === 1 && d && Rr.set(p, !0), g === 1 && p.setAttribute(n, "true"), d || p.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", p, y);
        }
    });
  };
  return u(t), s.clear(), ri++, function() {
    i.forEach(function(f) {
      var p = En.get(f) - 1, h = a.get(f) - 1;
      En.set(f, p), a.set(f, h), p || (Rr.has(f) || f.removeAttribute(r), Rr.delete(f)), h || f.removeAttribute(n);
    }), ri--, ri || (En = /* @__PURE__ */ new WeakMap(), En = /* @__PURE__ */ new WeakMap(), Rr = /* @__PURE__ */ new WeakMap(), Ir = {});
  };
}, TS = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = CS(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), kS(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function DS(e) {
  let t;
  pe(() => qn(e), (n) => {
    n ? t = TS(n) : t && t();
  }), Qt(() => {
    t && t();
  });
}
function oi(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function es(e, t, n = ".", r) {
  if (!oi(t))
    return es(e, {}, n, r);
  const o = Object.assign({}, t);
  for (const a in e) {
    if (a === "__proto__" || a === "constructor")
      continue;
    const i = e[a];
    i != null && (r && r(o, a, i, n) || (Array.isArray(i) && Array.isArray(o[a]) ? o[a] = [...i, ...o[a]] : oi(i) && oi(o[a]) ? o[a] = es(
      i,
      o[a],
      (n ? `${n}.` : "") + a.toString(),
      r
    ) : o[a] = i));
  }
  return o;
}
function $S(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, r) => es(n, r, "", e), {})
  );
}
const FS = $S(), RS = xp(() => {
  const e = q(/* @__PURE__ */ new Map()), t = q(), n = W(() => {
    for (const i of e.value.values())
      if (i)
        return !0;
    return !1;
  }), r = Bs({
    scrollBody: q(!0)
  });
  let o = null;
  const a = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Ec && (o == null || o()), t.value = void 0;
  };
  return pe(n, (i, s) => {
    var f;
    if (!Zt)
      return;
    if (!i) {
      s && a();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const c = window.innerWidth - document.documentElement.clientWidth, l = { padding: c, margin: 0 }, u = (f = r.scrollBody) != null && f.value ? typeof r.scrollBody.value == "object" ? FS({
      padding: r.scrollBody.value.padding === !0 ? c : r.scrollBody.value.padding,
      margin: r.scrollBody.value.margin === !0 ? c : r.scrollBody.value.margin
    }, l) : l : { padding: 0, margin: 0 };
    c > 0 && (document.body.style.paddingRight = typeof u.padding == "number" ? `${u.padding}px` : String(u.padding), document.body.style.marginRight = typeof u.margin == "number" ? `${u.margin}px` : String(u.margin), document.body.style.setProperty("--scrollbar-width", `${c}px`), document.body.style.overflow = "hidden"), Ec && (o = cr(
      document,
      "touchmove",
      (p) => LS(p),
      { passive: !1 }
    )), ze(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function IS(e) {
  const t = Math.random().toString(36).substring(2, 7), n = RS();
  n.value.set(t, e ?? !1);
  const r = W({
    get: () => n.value.get(t) ?? !1,
    set: (o) => n.value.set(t, o)
  });
  return G2(() => {
    n.value.delete(t);
  }), r;
}
function Ip(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : Ip(n);
  }
}
function LS(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && Ip(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const NS = /* @__PURE__ */ te({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = X2();
    return (n, r) => C(t) || n.forceMount ? (A(), G(Mc, {
      key: 0,
      to: n.to,
      disabled: n.disabled,
      defer: n.defer
    }, [
      V(n.$slots, "default")
    ], 8, ["to", "disabled", "defer"])) : Y("", !0);
  }
});
function _S(e) {
  const t = hn(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, a) => {
    const i = (t == null ? void 0 : t.type.props[a]).default;
    return i !== void 0 && (o[a] = i), o;
  }, {}), r = fh(e);
  return W(() => {
    const o = {}, a = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(a).forEach((i) => {
      o[_c(i)] = a[i];
    }), Object.keys({ ...n, ...o }).reduce((i, s) => (r.value[s] !== void 0 && (i[s] = r.value[s]), i), {});
  });
}
function Fo(e, t) {
  const n = _S(e), r = t ? kp(t) : {};
  return W(() => ({
    ...n.value,
    ...r
  }));
}
function kc() {
  const e = q(), t = W(() => {
    var n, r;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (r = e.value) == null ? void 0 : r.$el.nextElementSibling : qn(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const Tc = "data-reka-collection-item";
function Lp(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, r = `${t}CollectionProvider`;
  let o;
  if (n) {
    const u = q(/* @__PURE__ */ new Map());
    o = {
      collectionRef: q(),
      itemMap: u
    }, rs(r, o);
  } else
    o = ns(r);
  const a = (u = !1) => {
    const f = o.collectionRef.value;
    if (!f)
      return [];
    const p = Array.from(f.querySelectorAll(`[${Tc}]`)), d = Array.from(o.itemMap.value.values()).sort(
      (w, g) => p.indexOf(w.ref) - p.indexOf(g.ref)
    );
    return u ? d : d.filter((w) => w.ref.dataset.disabled !== "");
  }, i = te({
    name: "CollectionSlot",
    setup(u, { slots: f }) {
      const { primitiveElement: p, currentElement: h } = kc();
      return pe(h, () => {
        o.collectionRef.value = h.value;
      }), () => Me(Ji, { ref: p }, f);
    }
  }), s = te({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: {
      value: {
        // It accepts any value
        validator: () => !0
      }
    },
    setup(u, { slots: f, attrs: p }) {
      const { primitiveElement: h, currentElement: d } = kc();
      return St((w) => {
        if (d.value) {
          const g = si(d.value);
          o.itemMap.value.set(g, { ref: d.value, value: u.value }), w(() => o.itemMap.value.delete(g));
        }
      }), () => Me(Ji, { ...p, [Tc]: "", ref: h }, f);
    }
  }), c = W(() => Array.from(o.itemMap.value.values())), l = W(() => o.itemMap.value.size);
  return { getItems: a, reactiveItems: c, itemMapSize: l, CollectionSlot: i, CollectionItem: s };
}
const MS = "rovingFocusGroup.onEntryFocus", BS = { bubbles: !1, cancelable: !0 };
function jS(e, t = !1) {
  const n = rt();
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), rt() !== n))
      return;
}
const [uA, qS] = Nt("RovingFocusGroup"), US = /* @__PURE__ */ te({
  __name: "RovingFocusGroup",
  props: {
    orientation: { default: void 0 },
    dir: {},
    loop: { type: Boolean, default: !1 },
    currentTabStopId: {},
    defaultCurrentTabStopId: {},
    preventScrollOnEntryFocus: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["entryFocus", "update:currentTabStopId"],
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n, { loop: a, orientation: i, dir: s } = pn(r), c = js(s), l = $o(r, "currentTabStopId", o, {
      defaultValue: r.defaultCurrentTabStopId,
      passive: r.currentTabStopId === void 0
    }), u = q(!1), f = q(!1), p = q(0), { getItems: h, CollectionSlot: d } = Lp({ isProvider: !0 });
    function w(y) {
      const v = !f.value;
      if (y.currentTarget && y.target === y.currentTarget && v && !u.value) {
        const b = new CustomEvent(MS, BS);
        if (y.currentTarget.dispatchEvent(b), o("entryFocus", b), !b.defaultPrevented) {
          const E = h().map((B) => B.ref).filter((B) => B.dataset.disabled !== ""), P = E.find((B) => B.getAttribute("data-active") === ""), $ = E.find(
            (B) => B.id === l.value
          ), F = [P, $, ...E].filter(
            Boolean
          );
          jS(F, r.preventScrollOnEntryFocus);
        }
      }
      f.value = !1;
    }
    function g() {
      setTimeout(() => {
        f.value = !1;
      }, 1);
    }
    return t({
      getItems: h
    }), qS({
      loop: a,
      dir: c,
      orientation: i,
      currentTabStopId: l,
      onItemFocus: (y) => {
        l.value = y;
      },
      onItemShiftTab: () => {
        u.value = !0;
      },
      onFocusableItemAdd: () => {
        p.value++;
      },
      onFocusableItemRemove: () => {
        p.value--;
      }
    }), (y, v) => (A(), G(C(d), null, {
      default: K(() => [
        Z(C(ht), {
          tabindex: u.value || p.value === 0 ? -1 : 0,
          "data-orientation": C(i),
          as: y.as,
          "as-child": y.asChild,
          dir: C(c),
          style: { outline: "none" },
          onMousedown: v[0] || (v[0] = (b) => f.value = !0),
          onMouseup: g,
          onFocus: w,
          onBlur: v[1] || (v[1] = (b) => u.value = !1)
        }, {
          default: K(() => [
            V(y.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), [Np, zS] = Nt("PopperRoot"), VS = /* @__PURE__ */ te({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = q();
    return zS({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, r) => V(n.$slots, "default");
  }
}), HS = /* @__PURE__ */ te({
  __name: "PopperAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: r } = Ie(), o = Np();
    return Bc(() => {
      o.onAnchorChange(t.reference ?? r.value);
    }), (a, i) => (A(), G(C(ht), {
      ref: C(n),
      as: a.as,
      "as-child": a.asChild
    }, {
      default: K(() => [
        V(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function WS(e) {
  return e !== null;
}
function KS(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var g, y, v;
      const { placement: n, rects: r, middlewareData: o } = t, i = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0, s = i ? 0 : e.arrowWidth, c = i ? 0 : e.arrowHeight, [l, u] = ts(n), f = { start: "0%", center: "50%", end: "100%" }[u], p = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + s / 2, h = (((v = o.arrow) == null ? void 0 : v.y) ?? 0) + c / 2;
      let d = "", w = "";
      return l === "bottom" ? (d = i ? f : `${p}px`, w = `${-c}px`) : l === "top" ? (d = i ? f : `${p}px`, w = `${r.floating.height + c}px`) : l === "right" ? (d = `${-c}px`, w = i ? f : `${h}px`) : l === "left" && (d = `${r.floating.width + c}px`, w = i ? f : `${h}px`), { data: { x: d, y: w } };
    }
  };
}
function ts(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
function GS(e) {
  const t = q(), n = W(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), r = W(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return Re(() => {
    const o = qn(e);
    if (o) {
      t.value = { width: o.offsetWidth, height: o.offsetHeight };
      const a = new ResizeObserver((i) => {
        if (!Array.isArray(i) || !i.length)
          return;
        const s = i[0];
        let c, l;
        if ("borderBoxSize" in s) {
          const u = s.borderBoxSize, f = Array.isArray(u) ? u[0] : u;
          c = f.inlineSize, l = f.blockSize;
        } else
          c = o.offsetWidth, l = o.offsetHeight;
        t.value = { width: c, height: l };
      });
      return a.observe(o, { box: "border-box" }), () => a.unobserve(o);
    } else
      t.value = void 0;
  }), {
    width: n,
    height: r
  };
}
const _p = {
  side: "bottom",
  sideOffset: 0,
  align: "center",
  alignOffset: 0,
  arrowPadding: 0,
  avoidCollisions: !0,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: !1,
  positionStrategy: "fixed",
  updatePositionStrategy: "optimized",
  prioritizePosition: !1
}, [cA, YS] = Nt("PopperContent"), XS = /* @__PURE__ */ te({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ jc({
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {}
  }, {
    ..._p
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Np(), { forwardRef: a, currentElement: i } = Ie(), s = q(), c = q(), { width: l, height: u } = GS(c), f = W(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), p = W(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), h = W(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), d = W(() => ({
      padding: p.value,
      boundary: h.value.filter(WS),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: h.value.length > 0
    })), w = j2(() => [
      T2({
        mainAxis: n.sideOffset + u.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && Sc({
        ...d.value
      }),
      n.avoidCollisions && D2({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? I2() : void 0,
        ...d.value
      }),
      !n.prioritizePosition && n.avoidCollisions && Sc({
        ...d.value
      }),
      $2({
        ...d.value,
        apply: ({ elements: _, rects: m, availableWidth: S, availableHeight: O }) => {
          const { width: x, height: z } = m.reference, M = _.floating.style;
          M.setProperty(
            "--reka-popper-available-width",
            `${S}px`
          ), M.setProperty(
            "--reka-popper-available-height",
            `${O}px`
          ), M.setProperty(
            "--reka-popper-anchor-width",
            `${x}px`
          ), M.setProperty(
            "--reka-popper-anchor-height",
            `${z}px`
          );
        }
      }),
      c.value && _2({ element: c.value, padding: n.arrowPadding }),
      KS({
        arrowWidth: l.value,
        arrowHeight: u.value
      }),
      n.hideWhenDetached && F2({ strategy: "referenceHidden", ...d.value })
    ]), g = W(() => n.reference ?? o.anchor.value), { floatingStyles: y, placement: v, isPositioned: b, middlewareData: E } = M2(
      g,
      s,
      {
        strategy: n.positionStrategy,
        placement: f,
        whileElementsMounted: (..._) => k2(..._, {
          layoutShift: !n.disableUpdateOnLayoutShift,
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: w
      }
    ), P = W(
      () => ts(v.value)[0]
    ), $ = W(
      () => ts(v.value)[1]
    );
    Bc(() => {
      b.value && r("placed");
    });
    const F = W(
      () => {
        var _;
        return ((_ = E.value.arrow) == null ? void 0 : _.centerOffset) !== 0;
      }
    ), B = q("");
    St(() => {
      i.value && (B.value = window.getComputedStyle(i.value).zIndex);
    });
    const T = W(() => {
      var _;
      return ((_ = E.value.arrow) == null ? void 0 : _.x) ?? 0;
    }), k = W(() => {
      var _;
      return ((_ = E.value.arrow) == null ? void 0 : _.y) ?? 0;
    });
    return YS({
      placedSide: P,
      onArrowChange: (_) => c.value = _,
      arrowX: T,
      arrowY: k,
      shouldHideArrow: F
    }), (_, m) => {
      var S, O, x;
      return A(), N("div", {
        ref_key: "floatingRef",
        ref: s,
        "data-reka-popper-content-wrapper": "",
        style: Vt({
          ...C(y),
          transform: C(b) ? C(y).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: B.value,
          "--reka-popper-transform-origin": [
            (S = C(E).transformOrigin) == null ? void 0 : S.x,
            (O = C(E).transformOrigin) == null ? void 0 : O.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((x = C(E).hide) == null ? void 0 : x.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        Z(C(ht), Se({ ref: C(a) }, _.$attrs, {
          "as-child": n.asChild,
          as: _.as,
          "data-side": P.value,
          "data-align": $.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: C(b) ? void 0 : "none"
          }
        }), {
          default: K(() => [
            V(_.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
});
function JS(e) {
  const t = K2("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (o, a) => {
      t.value = t.value + o;
      {
        const i = rt(), s = a.map((p) => {
          var h, d;
          return {
            ...p,
            textValue: ((h = p.value) == null ? void 0 : h.textValue) ?? ((d = p.ref.textContent) == null ? void 0 : d.trim()) ?? ""
          };
        }), c = s.find((p) => p.ref === i), l = s.map((p) => p.textValue), u = ZS(l, t.value, c == null ? void 0 : c.textValue), f = s.find((p) => p.textValue === u);
        return f && f.ref.focus(), f == null ? void 0 : f.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function QS(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function ZS(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let i = QS(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((l) => l !== n));
  const c = i.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function eO() {
  const e = q(!1);
  return Re(() => {
    cr("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), cr(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const tO = xp(eO), [Ro, nO] = Nt(["MenuRoot", "MenuSub"], "MenuContext"), [Us, rO] = Nt("MenuRoot"), oO = /* @__PURE__ */ te({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, r = t, { modal: o, dir: a } = pn(n), i = js(a), s = $o(n, "open", r), c = q(), l = tO();
    return nO({
      open: s,
      onOpenChange: (u) => {
        s.value = u;
      },
      content: c,
      onContentChange: (u) => {
        c.value = u;
      }
    }), rO({
      onClose: () => {
        s.value = !1;
      },
      isUsingKeyboardRef: l,
      dir: i,
      modal: o
    }), (u, f) => (A(), G(C(VS), null, {
      default: K(() => [
        V(u.$slots, "default")
      ]),
      _: 3
    }));
  }
});
let ai = 0;
function aO() {
  St((e) => {
    if (!Zt)
      return;
    const t = document.querySelectorAll("[data-reka-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? Dc()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? Dc()
    ), ai++, e(() => {
      ai === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((n) => n.remove()), ai--;
    });
  });
}
function Dc() {
  const e = document.createElement("span");
  return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
const [Mp, iO] = Nt("MenuContent"), Bp = /* @__PURE__ */ te({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ jc({
    loop: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    disableOutsideScroll: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {}
  }, {
    ..._p
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Ro(), a = Us(), { trapFocus: i, disableOutsidePointerEvents: s, loop: c } = pn(n);
    aO(), IS(s.value);
    const l = q(""), u = q(0), f = q(0), p = q(null), h = q("right"), d = q(0), w = q(null), g = q(), { forwardRef: y, currentElement: v } = Ie(), { handleTypeaheadSearch: b } = JS();
    pe(v, (T) => {
      o.onContentChange(T);
    }), Qt(() => {
      window.clearTimeout(u.value);
    });
    function E(T) {
      var _, m;
      return h.value === ((_ = p.value) == null ? void 0 : _.side) && gS(T, (m = p.value) == null ? void 0 : m.area);
    }
    async function P(T) {
      var k;
      r("openAutoFocus", T), !T.defaultPrevented && (T.preventDefault(), (k = v.value) == null || k.focus({
        preventScroll: !0
      }));
    }
    function $(T) {
      var M;
      if (T.defaultPrevented)
        return;
      const _ = T.target.closest("[data-reka-menu-content]") === T.currentTarget, m = T.ctrlKey || T.altKey || T.metaKey, S = T.key.length === 1, O = nS(
        T,
        rt(),
        v.value,
        {
          loop: c.value,
          arrowKeyOptions: "vertical",
          dir: a == null ? void 0 : a.dir.value,
          focus: !0,
          attributeName: "[data-reka-collection-item]:not([data-disabled])"
        }
      );
      if (O)
        return O == null ? void 0 : O.focus();
      if (T.code === "Space")
        return;
      const x = ((M = g.value) == null ? void 0 : M.getItems()) ?? [];
      if (_ && (T.key === "Tab" && T.preventDefault(), !m && S && b(T.key, x)), T.target !== v.value || !pS.includes(T.key))
        return;
      T.preventDefault();
      const z = [...x.map((I) => I.ref)];
      $p.includes(T.key) && z.reverse(), mS(z);
    }
    function F(T) {
      var k, _;
      (_ = (k = T == null ? void 0 : T.currentTarget) == null ? void 0 : k.contains) != null && _.call(k, T.target) || (window.clearTimeout(u.value), l.value = "");
    }
    function B(T) {
      var m;
      if (!Zi(T))
        return;
      const k = T.target, _ = d.value !== T.clientX;
      if ((m = T == null ? void 0 : T.currentTarget) != null && m.contains(k) && _) {
        const S = T.clientX > d.value ? "right" : "left";
        h.value = S, d.value = T.clientX;
      }
    }
    return iO({
      onItemEnter: (T) => !!E(T),
      onItemLeave: (T) => {
        var k;
        E(T) || ((k = v.value) == null || k.focus(), w.value = null);
      },
      onTriggerLeave: (T) => !!E(T),
      searchRef: l,
      pointerGraceTimerRef: f,
      onPointerGraceIntentChange: (T) => {
        p.value = T;
      }
    }), (T, k) => (A(), G(C(AS), {
      "as-child": "",
      trapped: C(i),
      onMountAutoFocus: P,
      onUnmountAutoFocus: k[7] || (k[7] = (_) => r("closeAutoFocus", _))
    }, {
      default: K(() => [
        Z(C(cS), {
          "as-child": "",
          "disable-outside-pointer-events": C(s),
          onEscapeKeyDown: k[2] || (k[2] = (_) => r("escapeKeyDown", _)),
          onPointerDownOutside: k[3] || (k[3] = (_) => r("pointerDownOutside", _)),
          onFocusOutside: k[4] || (k[4] = (_) => r("focusOutside", _)),
          onInteractOutside: k[5] || (k[5] = (_) => r("interactOutside", _)),
          onDismiss: k[6] || (k[6] = (_) => r("dismiss"))
        }, {
          default: K(() => [
            Z(C(US), {
              ref_key: "rovingFocusGroupRef",
              ref: g,
              "current-tab-stop-id": w.value,
              "onUpdate:currentTabStopId": k[0] || (k[0] = (_) => w.value = _),
              "as-child": "",
              orientation: "vertical",
              dir: C(a).dir.value,
              loop: C(c),
              onEntryFocus: k[1] || (k[1] = (_) => {
                r("entryFocus", _), C(a).isUsingKeyboardRef.value || _.preventDefault();
              })
            }, {
              default: K(() => [
                Z(C(XS), {
                  ref: C(y),
                  role: "menu",
                  as: T.as,
                  "as-child": T.asChild,
                  "aria-orientation": "vertical",
                  "data-reka-menu-content": "",
                  "data-state": C(hS)(C(o).open.value),
                  dir: C(a).dir.value,
                  side: T.side,
                  "side-offset": T.sideOffset,
                  align: T.align,
                  "align-offset": T.alignOffset,
                  "avoid-collisions": T.avoidCollisions,
                  "collision-boundary": T.collisionBoundary,
                  "collision-padding": T.collisionPadding,
                  "arrow-padding": T.arrowPadding,
                  "prioritize-position": T.prioritizePosition,
                  "position-strategy": T.positionStrategy,
                  "update-position-strategy": T.updatePositionStrategy,
                  sticky: T.sticky,
                  "hide-when-detached": T.hideWhenDetached,
                  reference: T.reference,
                  onKeydown: $,
                  onBlur: F,
                  onPointermove: B
                }, {
                  default: K(() => [
                    V(T.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["as", "as-child", "data-state", "dir", "side", "side-offset", "align", "align-offset", "avoid-collisions", "collision-boundary", "collision-padding", "arrow-padding", "prioritize-position", "position-strategy", "update-position-strategy", "sticky", "hide-when-detached", "reference"])
              ]),
              _: 3
            }, 8, ["current-tab-stop-id", "dir", "loop"])
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), sO = /* @__PURE__ */ te({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Mp(), { forwardRef: r } = Ie(), { CollectionItem: o } = Lp(), a = q(!1);
    async function i(c) {
      if (!c.defaultPrevented && Zi(c)) {
        if (t.disabled)
          n.onItemLeave(c);
        else if (!n.onItemEnter(c)) {
          const u = c.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function s(c) {
      await ze(), !c.defaultPrevented && Zi(c) && n.onItemLeave(c);
    }
    return (c, l) => (A(), G(C(o), {
      value: { textValue: c.textValue }
    }, {
      default: K(() => [
        Z(C(ht), Se({
          ref: C(r),
          role: "menuitem",
          tabindex: "-1"
        }, c.$attrs, {
          as: c.as,
          "as-child": c.asChild,
          "aria-disabled": c.disabled || void 0,
          "data-disabled": c.disabled ? "" : void 0,
          "data-highlighted": a.value ? "" : void 0,
          onPointermove: i,
          onPointerleave: s,
          onFocus: l[0] || (l[0] = async (u) => {
            await ze(), !(u.defaultPrevented || c.disabled) && (a.value = !0);
          }),
          onBlur: l[1] || (l[1] = async (u) => {
            await ze(), !u.defaultPrevented && (a.value = !1);
          })
        }), {
          default: K(() => [
            V(c.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), lO = /* @__PURE__ */ te({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, r = t, { forwardRef: o, currentElement: a } = Ie(), i = Us(), s = Mp(), c = q(!1);
    async function l() {
      const u = a.value;
      if (!n.disabled && u) {
        const f = new CustomEvent(fS, {
          bubbles: !0,
          cancelable: !0
        });
        r("select", f), await ze(), f.defaultPrevented ? c.value = !1 : i.onClose();
      }
    }
    return (u, f) => (A(), G(sO, Se(n, {
      ref: C(o),
      onClick: l,
      onPointerdown: f[0] || (f[0] = () => {
        c.value = !0;
      }),
      onPointerup: f[1] || (f[1] = async (p) => {
        var h;
        await ze(), !p.defaultPrevented && (c.value || (h = p.currentTarget) == null || h.click());
      }),
      onKeydown: f[2] || (f[2] = async (p) => {
        const h = C(s).searchRef.value !== "";
        u.disabled || h && p.key === " " || C(Qi).includes(p.key) && (p.currentTarget.click(), p.preventDefault());
      })
    }), {
      default: K(() => [
        V(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uO = /* @__PURE__ */ te({
  __name: "MenuRootContentModal",
  props: {
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Fo(n, r), a = Ro(), { forwardRef: i, currentElement: s } = Ie();
    return DS(s), (c, l) => (A(), G(Bp, Se(C(o), {
      ref: C(i),
      "trap-focus": C(a).open.value,
      "disable-outside-pointer-events": C(a).open.value,
      "disable-outside-scroll": !0,
      onDismiss: l[0] || (l[0] = (u) => C(a).onOpenChange(!1)),
      onFocusOutside: l[1] || (l[1] = Tt((u) => r("focusOutside", u), ["prevent"]))
    }), {
      default: K(() => [
        V(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), cO = /* @__PURE__ */ te({
  __name: "MenuRootContentNonModal",
  props: {
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const o = Fo(e, t), a = Ro();
    return (i, s) => (A(), G(Bp, Se(C(o), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: s[0] || (s[0] = (c) => C(a).onOpenChange(!1))
    }), {
      default: K(() => [
        V(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fO = /* @__PURE__ */ te({
  __name: "MenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const o = Fo(e, t), a = Ro(), i = Us();
    return (s, c) => (A(), G(C(Ap), {
      present: s.forceMount || C(a).open.value
    }, {
      default: K(() => [
        C(i).modal.value ? (A(), G(uO, xe(Se({ key: 0 }, { ...s.$attrs, ...C(o) })), {
          default: K(() => [
            V(s.$slots, "default")
          ]),
          _: 3
        }, 16)) : (A(), G(cO, xe(Se({ key: 1 }, { ...s.$attrs, ...C(o) })), {
          default: K(() => [
            V(s.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), dO = /* @__PURE__ */ te({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (A(), G(C(NS), xe(De(t)), {
      default: K(() => [
        V(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pO = /* @__PURE__ */ te({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, r) => (A(), G(C(ht), Se(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: K(() => [
        V(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hO = /* @__PURE__ */ te({
  __name: "MenuAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, r) => (A(), G(C(HS), xe(De(t)), {
      default: K(() => [
        V(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [jp, mO] = Nt("DropdownMenuRoot"), qp = /* @__PURE__ */ te({
  __name: "DropdownMenuRoot",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, r = t;
    Ie();
    const o = $o(n, "open", r, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), a = q(), { modal: i, dir: s } = pn(n), c = js(s);
    return mO({
      open: o,
      onOpenChange: (l) => {
        o.value = l;
      },
      onOpenToggle: () => {
        o.value = !o.value;
      },
      triggerId: "",
      triggerElement: a,
      contentId: "",
      modal: i,
      dir: c
    }), (l, u) => (A(), G(C(oO), {
      open: C(o),
      "onUpdate:open": u[0] || (u[0] = (f) => dh(o) ? o.value = f : null),
      dir: C(c),
      modal: C(i)
    }, {
      default: K(() => [
        V(l.$slots, "default", { open: C(o) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), Up = /* @__PURE__ */ te({
  __name: "DropdownMenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const o = Fo(e, t);
    Ie();
    const a = jp(), i = q(!1);
    function s(c) {
      c.defaultPrevented || (i.value || setTimeout(() => {
        var l;
        (l = a.triggerElement.value) == null || l.focus();
      }, 0), i.value = !1, c.preventDefault());
    }
    return a.contentId || (a.contentId = qs(void 0, "reka-dropdown-menu-content")), (c, l) => {
      var u;
      return A(), G(C(fO), Se(C(o), {
        id: C(a).contentId,
        "aria-labelledby": (u = C(a)) == null ? void 0 : u.triggerId,
        style: {
          "--reka-dropdown-menu-content-transform-origin": "var(--reka-popper-transform-origin)",
          "--reka-dropdown-menu-content-available-width": "var(--reka-popper-available-width)",
          "--reka-dropdown-menu-content-available-height": "var(--reka-popper-available-height)",
          "--reka-dropdown-menu-trigger-width": "var(--reka-popper-anchor-width)",
          "--reka-dropdown-menu-trigger-height": "var(--reka-popper-anchor-height)"
        },
        onCloseAutoFocus: s,
        onInteractOutside: l[0] || (l[0] = (f) => {
          var w;
          if (f.defaultPrevented) return;
          const p = f.detail.originalEvent, h = p.button === 0 && p.ctrlKey === !0, d = p.button === 2 || h;
          (!C(a).modal.value || d) && (i.value = !0), (w = C(a).triggerElement.value) != null && w.contains(f.target) && f.preventDefault();
        })
      }), {
        default: K(() => [
          V(c.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), yO = /* @__PURE__ */ te({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = kp(t);
    return Ie(), (a, i) => (A(), G(C(lO), xe(De({ ...n, ...C(o) })), {
      default: K(() => [
        V(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zp = /* @__PURE__ */ te({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (A(), G(C(dO), xe(De(t)), {
      default: K(() => [
        V(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gO = /* @__PURE__ */ te({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return Ie(), (n, r) => (A(), G(C(pO), xe(De(t)), {
      default: K(() => [
        V(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vp = /* @__PURE__ */ te({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = jp(), { forwardRef: r, currentElement: o } = Ie();
    return Re(() => {
      n.triggerElement = o;
    }), n.triggerId || (n.triggerId = qs(void 0, "reka-dropdown-menu-trigger")), (a, i) => (A(), G(C(hO), { "as-child": "" }, {
      default: K(() => [
        Z(C(ht), {
          id: C(n).triggerId,
          ref: C(r),
          type: a.as === "button" ? "button" : void 0,
          "as-child": t.asChild,
          as: a.as,
          "aria-haspopup": "menu",
          "aria-expanded": C(n).open.value,
          "aria-controls": C(n).open.value ? C(n).contentId : void 0,
          "data-disabled": a.disabled ? "" : void 0,
          disabled: a.disabled,
          "data-state": C(n).open.value ? "open" : "closed",
          onClick: i[0] || (i[0] = async (s) => {
            var c;
            !a.disabled && s.button === 0 && s.ctrlKey === !1 && ((c = C(n)) == null || c.onOpenToggle(), await ze(), C(n).open.value && s.preventDefault());
          }),
          onKeydown: i[1] || (i[1] = nn(
            (s) => {
              a.disabled || (["Enter", " "].includes(s.key) && C(n).onOpenToggle(), s.key === "ArrowDown" && C(n).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: K(() => [
            V(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), vO = { class: "text-primary overflow-clip w-5" }, bO = { key: 0 }, wO = {
  __name: "CollapsableSection",
  props: {
    header: String,
    open: {
      type: Boolean,
      default: !1
    },
    headerColor: {
      type: String
    }
  },
  setup(e) {
    const t = e, n = q(t.open);
    return pe(
      () => t.open,
      (r) => n.value = r
    ), Re(() => {
      n.value = t.open;
    }), (r, o) => (A(), G(C(Op), {
      defaultOpen: e.open,
      open: n.value,
      "onUpdate:open": o[0] || (o[0] = (a) => n.value = a),
      class: "mt-2 rounded-lg border-2 border-gray-200 dark:border-gray-700"
    }, {
      default: K(() => [
        Z(C(Pp), {
          class: "focusable relative flex w-full items-center gap-2 justify-center cursor-pointer rounded-lg border-b-2 border-gray-200 bg-neutral-50 px-6 py-1 text-center",
          style: Vt({ backgroundColor: e.headerColor })
        }, {
          default: K(() => [
            j("div", vO, [
              Z(sn, {
                name: "collapse-icon",
                mode: "out-in"
              }, {
                default: K(() => [
                  n.value ? (A(), G(C(Ue), {
                    key: 0,
                    icon: C(Ny)
                  }, null, 8, ["icon"])) : (A(), G(C(Ue), {
                    key: 1,
                    icon: C(Af)
                  }, null, 8, ["icon"]))
                ]),
                _: 1
              })
            ]),
            e.header ? (A(), N("div", bO, Q(e.header), 1)) : V(r.$slots, "trigger", { key: 1 })
          ]),
          _: 3
        }, 8, ["style"]),
        Z(C(Cp), { class: "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden" }, {
          default: K(() => [
            j("div", {
              class: J(["mt-2", { "px-4 pb-2": e.header }])
            }, [
              V(r.$slots, "default")
            ], 2)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["defaultOpen", "open"]));
  }
}, ao = {
  START: "start",
  CENTER: "center",
  END: "end"
}, fA = /* @__PURE__ */ te({
  __name: "Dropdown",
  props: {
    align: {
      type: String,
      default: ao.START,
      validator(e) {
        return Object.values(ao).includes(e);
      }
    },
    alignOffset: {
      type: Number,
      default: 5
    }
  },
  setup(e) {
    const t = q(!1);
    return (n, r) => (A(), G(C(qp), {
      open: t.value,
      "onUpdate:open": r[0] || (r[0] = (o) => t.value = o)
    }, {
      default: K(() => [
        Z(C(Vp), { "aria-label": "Dropdown" }, {
          default: K(() => [
            V(n.$slots, "trigger")
          ]),
          _: 3
        }),
        Z(C(zp), null, {
          default: K(() => [
            Z(C(Up), Se({ alignOffset: e.alignOffset }, n.$attrs, {
              align: e.align,
              class: "ring-opacity-5 z-50 mt-2 rounded bg-white shadow ring-1 ring-gray-400 will-change-[opacity,transform] data-[side=top]:animate-slide-down-fade data-[side=right]:animate-slide-left-fade data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade"
            }), {
              default: K(() => [
                V(n.$slots, "content")
              ]),
              _: 3
            }, 16, ["alignOffset", "align"])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), dA = {
  __name: "DropdownLink",
  props: {
    href: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (A(), G(C(yO), null, {
      default: K(() => [
        Z(C(ut), Se(t.$attrs, {
          href: e.href,
          class: "focusable block w-full rounded px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-hidden"
        }), {
          default: K(() => [
            V(t.$slots, "default")
          ]),
          _: 3
        }, 16, ["href"])
      ]),
      _: 3
    }));
  }
}, pA = {
  __name: "DropdownSeparator",
  setup(e) {
    return (t, n) => (A(), G(C(gO), { class: "mx-1 my-px h-px bg-gray-300" }));
  }
}, xO = ["href", "target"], hA = {
  __name: "LinkButton",
  props: {
    href: String,
    colourClasses: {
      default: () => ["bg-primary", "text-white", "hover:bg-primary-700"]
    },
    target: {
      default: () => "_self"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    method: String,
    data: Object
  },
  setup(e) {
    const t = e, n = () => t.disabled ? [...t.colourClasses, ["opacity-50", "pointer-events-none"]] : t.colourClasses;
    return (r, o) => e.href && (e.method || e.data) ? (A(), G(C(ut), {
      key: 0,
      href: e.href,
      method: e.method,
      data: e.data,
      class: J(["focusable inline-flex cursor-pointer select-none items-center justify-center gap-1 rounded px-2 text-sm font-medium leading-normal", n()]),
      as: "button",
      tabindex: "0"
    }, {
      default: K(() => [
        V(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "method", "data", "class"])) : (A(), N("a", {
      key: 1,
      href: e.href,
      target: e.target,
      class: J(["focusable inline-flex cursor-pointer select-none items-center justify-center gap-1 rounded px-2 text-sm font-medium leading-normal", n()]),
      tabindex: "0"
    }, [
      V(r.$slots, "default")
    ], 10, xO));
  }
}, SO = {
  class: "focusable flex items-center whitespace-nowrap rounded bg-primary px-2 text-sm text-white hover:bg-primary-700 motion-reduce:transition-none",
  type: "button"
}, OO = { class: "mx-1 w-2" }, EO = ["aria-labelledby"], mA = /* @__PURE__ */ te({
  __name: "LinkDropdownButton",
  props: {
    align: {
      type: String,
      default: ao.START,
      validator(e) {
        return Object.values(ao).includes(e);
      }
    },
    alignOffset: {
      type: Number,
      default: 5
    },
    title: String
  },
  setup(e) {
    const t = q(!1);
    return (n, r) => (A(), G(C(qp), {
      open: t.value,
      "onUpdate:open": r[0] || (r[0] = (o) => t.value = o)
    }, {
      default: K(() => [
        Z(C(Vp), {
          "aria-label": "Dropdown",
          asChild: ""
        }, {
          default: K(() => [
            j("button", SO, [
              me(Q(e.title) + " ", 1),
              j("span", OO, [
                Z(C(Ue), { icon: C(Ef) }, null, 8, ["icon"])
              ])
            ])
          ]),
          _: 1
        }),
        Z(C(zp), null, {
          default: K(() => [
            Z(C(Up), Se({ alignOffset: e.alignOffset }, n.$attrs, {
              align: e.align,
              class: "ring-opacity-5 z-50 mt-2 rounded bg-white shadow ring-1 ring-gray-400 will-change-[opacity,transform] data-[side=top]:animate-slide-down-fade data-[side=right]:animate-slide-left-fade data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade"
            }), {
              default: K(() => [
                j("ul", {
                  class: "absolute z-1000 float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 data-te-dropdown-show:block",
                  "aria-labelledby": e.title,
                  "data-te-dropdown-menu-ref": ""
                }, [
                  V(n.$slots, "default")
                ], 8, EO)
              ]),
              _: 3
            }, 16, ["alignOffset", "align"])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), AO = ["href"], yA = {
  __name: "LinkDropdownButtonItem",
  props: {
    href: String,
    title: String
  },
  setup(e) {
    return (t, n) => (A(), N("li", null, [
      j("a", {
        class: "focusable inline-flex w-full items-center justify-center whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600",
        href: e.href
      }, Q(e.title), 9, AO)
    ]));
  }
}, gA = {
  __name: "Logs",
  props: {
    header: { default: "Logs" },
    logs: Object
  },
  setup(e) {
    return (t, n) => (A(), G(C(wO), { header: e.header }, {
      default: K(() => [
        Z(C(qO), { logs: e.logs }, null, 8, ["logs"])
      ]),
      _: 1
    }, 8, ["header"]));
  }
}, CO = {
  key: 0,
  class: "flex w-full items-center justify-center"
}, PO = {
  key: 1,
  class: "mt-1",
  id: "logs"
}, kO = {
  key: 0,
  class: "text-center"
}, TO = {
  key: 1,
  class: "ml-3 border-l-2 border-primary"
}, DO = { class: "flex-start w-full md:flex" }, $O = { class: "-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-primary text-xs text-white" }, FO = { class: "mb-3 ml-2 block w-full rounded-lg bg-neutral-50 px-3 py-2 shadow-md shadow-black/5" }, RO = { class: "mb-1 flex justify-between" }, IO = { class: "text-sm text-neutral-500" }, LO = {
  key: 0,
  class: "text-bold mr-0.5 text-sm text-primary-500"
}, NO = {
  key: 1,
  class: "text-sm text-primary-500"
}, _O = { class: "text-sm text-neutral-500" }, MO = { class: "font-medium" }, BO = {
  key: 0,
  class: "line-through"
}, jO = ["innerHTML"], qO = {
  __name: "LogsContent",
  props: {
    logs: Object
  },
  setup(e) {
    return hr.add(Af, Ci, My, Fy, _y), (t, n) => e.logs == null ? (A(), N("div", CO, [
      Z(C(Kp))
    ])) : (A(), N("div", PO, [
      e.logs.total ? (A(), N("ol", TO, [
        (A(!0), N(ie, null, Qe(e.logs.data, (r) => (A(), N("li", {
          key: r.id
        }, [
          j("div", DO, [
            j("div", $O, [
              Z(C(Ue), {
                icon: r.icon
              }, null, 8, ["icon"])
            ]),
            j("div", FO, [
              j("div", RO, [
                j("span", IO, [
                  me(Q(r.event_formatted) + " ", 1),
                  r.reference ? (A(), N("span", LO, Q(r.reference), 1)) : Y("", !0),
                  r.causer ? (A(), N(ie, { key: 1 }, [
                    r.causer.id ? (A(), G(C(ut), {
                      key: 0,
                      href: t.route("users.show", r.causer.id),
                      class: "text-sm text-primary-500"
                    }, {
                      default: K(() => [
                        me(" (" + Q(r.causer.first_name) + ") ", 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])) : (A(), N("span", NO, "(" + Q(r.causer.first_name) + ")", 1))
                  ], 64)) : Y("", !0)
                ]),
                j("span", _O, Q(r.created_date_full), 1)
              ]),
              (A(!0), N(ie, null, Qe(r.changes_formatted, (o, a) => (A(), N("p", {
                key: a,
                class: "mb-0 text-neutral-700"
              }, [
                j("span", MO, Q(a) + ":", 1),
                o.old ? (A(), N("span", BO, Q(o.old), 1)) : Y("", !0),
                me(" " + Q(o.new), 1)
              ]))), 128)),
              r.description_details ? (A(), N("p", {
                key: 0,
                class: "text-neutral-700",
                innerHTML: r.description_details
              }, null, 8, jO)) : Y("", !0)
            ])
          ])
        ]))), 128))
      ])) : (A(), N("p", kO, "No Data")),
      e.logs.links ? (A(), G(C(Hp), {
        key: 2,
        class: "mt-6",
        links: e.logs.links,
        logs: !0
      }, null, 8, ["links"])) : Y("", !0)
    ]));
  }
}, vA = /* @__PURE__ */ te({
  __name: "Modal",
  props: {
    show: {
      type: Boolean,
      default: !1
    },
    maxWidth: {
      type: String,
      default: "2xl"
    },
    closeable: {
      type: Boolean,
      default: !0
    },
    hideOverflow: {
      type: Boolean,
      default: !0
    },
    backdropDuration: {
      type: Number,
      default: 200
    },
    modalDuration: {
      type: Number,
      default: 200
    },
    alignCenter: {
      type: Boolean,
      default: !1
    },
    showBorder: {
      type: Boolean,
      default: !1
    },
    modalCustomClass: {
      type: String,
      default: ""
    },
    backdropCustomClass: {
      type: String,
      default: ""
    },
    resizable: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = q(null);
    pe(
      () => n.show,
      () => {
        n.show ? document.body.style.overflow = "hidden" : document.body.style.overflow = null;
      }
    );
    const a = () => {
      n.closeable && r("close");
    }, i = (b) => {
      b.key === "Escape" && n.show && a();
    };
    Re(() => document.addEventListener("keydown", i)), Qt(() => {
      document.removeEventListener("keydown", i), document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", y), document.body.style.overflow = null;
    });
    const s = W(() => {
      let b = [];
      return b.push(
        {
          sm: "sm:max-w-sm",
          md: "sm:max-w-md",
          lg: "sm:max-w-lg",
          xl: "sm:max-w-xl",
          "2xl": "sm:max-w-2xl",
          "3xl": "sm:max-w-3xl",
          "4xl": "sm:max-w-4xl",
          "5xl": "sm:max-w-5xl",
          "6xl": "sm:max-w-6xl",
          "7xl": "sm:max-w-7xl",
          "50%": "sm:max-w-[50%]",
          "60%": "sm:max-w-[60%]",
          "75%": "sm:max-w-[75%]",
          "80%": "sm:max-w-[80%]",
          "90%": "sm:max-w-[90%]",
          "95%": "sm:max-w-[95%]"
        }[n.maxWidth]
      ), n.hideOverflow && b.push("overflow-hidden"), b.join(" ");
    }), c = q(!1), l = q(null), u = q(0), f = q(0), p = q(0), h = q(0), d = q(null), w = q(null), g = (b, E) => {
      c.value = !0, document.addEventListener("mousemove", v), document.addEventListener("mouseup", y), l.value = E, u.value = b.clientX, f.value = b.clientY, p.value = o.value.offsetWidth, h.value = o.value.offsetHeight;
    }, y = (b) => {
      c.value = !1, document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", y);
    }, v = (b) => {
      if (!c.value) return;
      const E = (b.clientX - u.value) * 2, P = b.clientY - f.value;
      l.value.includes("x") && (d.value = p.value + E + "px"), l.value.includes("-x") && (d.value = p.value - E + "px"), l.value.includes("y") && (w.value = h.value + P + "px");
    };
    return (b, E) => (A(), G(Mc, { to: "body" }, [
      Z(sn, { "leave-active-class": "duration-200" }, {
        default: K(() => [
          nt(j("div", {
            class: J(["modal fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0", { flex: e.alignCenter, "mb-16 items-center justify-center": e.alignCenter }]),
            "scroll-region": ""
          }, [
            Z(sn, {
              "enter-active-class": `backdrop-transition enter ease-out duration-[${e.backdropDuration}ms]`,
              "enter-from-class": "opacity-0",
              "enter-to-class": "opacity-100",
              "leave-active-class": `backdrop-transition leave ease-in duration-[${e.backdropDuration}ms]`,
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: K(() => [
                nt(j("div", {
                  class: "fixed inset-0 transform transition-all",
                  onClick: a
                }, [
                  j("div", {
                    class: J(["backdrop absolute inset-0 bg-gray-500 opacity-75", { [e.backdropCustomClass]: !!e.backdropCustomClass }])
                  }, null, 2)
                ], 512), [
                  [kn, e.show]
                ])
              ]),
              _: 1
            }, 8, ["enter-active-class", "leave-active-class"]),
            Z(sn, {
              "enter-active-class": `modal-transition enter ease-out duration-[${e.modalDuration}ms]`,
              "enter-from-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              "enter-to-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-active-class": `modal-transition leave ease-in duration-[${e.modalDuration}ms]`,
              "leave-from-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-to-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            }, {
              default: K(() => [
                nt(j("div", {
                  ref_key: "modalContent",
                  ref: o,
                  class: J(["mb-6 transform rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full", {
                    [s.value]: !!s.value,
                    "border-pink rounded-md border-2 border-solid": e.showBorder,
                    [e.modalCustomClass]: !!e.modalCustomClass
                  }]),
                  style: Vt({
                    userSelect: c.value ? "none" : "auto",
                    transition: c.value ? "none" : "",
                    width: d.value || "",
                    height: w.value || "",
                    maxWidth: d.value || "",
                    maxHeight: w.value || ""
                  })
                }, [
                  e.show ? V(b.$slots, "default", { key: 0 }) : Y("", !0),
                  e.resizable ? (A(), N(ie, { key: 1 }, [
                    j("div", {
                      class: "absolute bottom-0 left-0 h-1 w-full cursor-row-resize",
                      onMousedown: E[0] || (E[0] = (P) => g(P, "y")),
                      onMouseup: y
                    }, null, 32),
                    j("div", {
                      class: "absolute left-0 top-0 h-full w-1 cursor-col-resize",
                      onMousedown: E[1] || (E[1] = (P) => g(P, "-x")),
                      onMouseup: y
                    }, null, 32),
                    j("div", {
                      class: "absolute right-0 top-0 h-full w-1 cursor-col-resize",
                      onMousedown: E[2] || (E[2] = (P) => g(P, "x")),
                      onMouseup: y
                    }, null, 32),
                    j("div", {
                      class: "absolute bottom-0 right-0 h-1 w-1 cursor-se-resize",
                      onMousedown: E[3] || (E[3] = (P) => g(P, "xy")),
                      onMouseup: y
                    }, null, 32),
                    j("div", {
                      class: "absolute bottom-0 left-0 h-1 w-1 cursor-sw-resize",
                      onMousedown: E[4] || (E[4] = (P) => g(P, "-xy")),
                      onMouseup: y
                    }, null, 32)
                  ], 64)) : Y("", !0)
                ], 6), [
                  [kn, e.show]
                ])
              ]),
              _: 3
            }, 8, ["enter-active-class", "leave-active-class"])
          ], 2), [
            [kn, e.show]
          ])
        ]),
        _: 3
      })
    ]));
  }
}), UO = { class: "ml-3 flex-1 whitespace-nowrap" }, bA = {
  __name: "NavLink",
  props: {
    href: String,
    active: Boolean
  },
  setup(e) {
    const t = e, n = W(
      () => t.active ? "focusable flex items-center p-2 text-base font-normal bg-accent text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700" : "focusable flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    );
    return (r, o) => (A(), G(C(ut), {
      href: e.href,
      class: J(n.value)
    }, {
      default: K(() => [
        V(r.$slots, "icon"),
        j("span", UO, [
          V(r.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}, zO = { class: "pagination flex justify-between" }, VO = ["value", "selected"], HO = {
  key: 0,
  "aria-label": "Page navigation"
}, WO = ["innerHTML"], KO = ["innerHTML", "onClick"], Hp = {
  __name: "Pagination",
  props: {
    links: Array,
    linkReturn: {
      type: Boolean,
      default: !1
    },
    maxPagesToShow: {
      type: Number,
      default: 20
    },
    logs: {
      type: Boolean,
      default: !1
    },
    customLinkClass: {
      type: String,
      default: ""
    },
    customActiveLinkClass: {
      type: String,
      default: ""
    },
    customListClass: {
      type: String,
      default: ""
    },
    preserveScroll: {
      type: Boolean,
      default: !1
    },
    preserveState: {
      type: Boolean,
      default: !1
    },
    only: {
      type: Array,
      default: []
    },
    showPerPage: {
      type: Boolean,
      default: !1
    },
    defaultPerPage: {
      type: Number,
      default: 100
    }
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = t, r = e, o = q(r.defaultPerPage), a = [10, 25, 50, 100, 250], i = W(() => {
      if (!r.links || r.links.length <= 3)
        return r.links;
      const l = r.links[0], u = r.links[r.links.length - 1], f = r.links.findIndex((d) => d.active);
      let p = Math.max(1, f - Math.floor(r.maxPagesToShow / 2)), h = Math.min(r.links.length - 2, p + r.maxPagesToShow - 1);
      return h - p < r.maxPagesToShow - 1 && (p = Math.max(1, h - r.maxPagesToShow + 1)), [l, ...r.links.slice(p, h + 1), u];
    }), s = (l) => {
      n("change", l);
    }, c = (l) => {
      let u = new URL(window.location.href);
      if (u.searchParams.set("per_page", l.target.value), r.linkReturn) {
        s(u.href);
        return;
      }
      window.location.href = u.href;
    };
    return (l, u) => (A(), N("div", zO, [
      j("div", null, [
        e.showPerPage ? (A(), G(C(Jy), {
          key: 0,
          type: "select",
          modelValue: o.value,
          "onUpdate:modelValue": u[0] || (u[0] = (f) => o.value = f),
          class: "per-page-input w-20",
          onChanged: c
        }, {
          default: K(() => [
            (A(), N(ie, null, Qe(a, (f) => j("option", {
              key: f,
              value: f,
              selected: f == o.value
            }, Q(f), 9, VO)), 64))
          ]),
          _: 1
        }, 8, ["modelValue"])) : Y("", !0)
      ]),
      i.value.length > 3 ? (A(), N("nav", HO, [
        j("ul", {
          class: J(["list-style-none flex", { [e.customListClass]: e.customListClass }])
        }, [
          (A(!0), N(ie, null, Qe(i.value, (f, p) => (A(), N("li", { key: p }, [
            e.linkReturn ? (A(), N(ie, { key: 0 }, [
              f.url === null ? (A(), N("button", {
                key: 0,
                class: J(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [e.customLinkClass]: e.customLinkClass
                }]),
                innerHTML: f.label,
                onClick: u[1] || (u[1] = (h) => s(""))
              }, null, 10, WO)) : (A(), N("button", {
                key: 1,
                class: J(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", {
                  "font-bold text-primary": f.active,
                  [e.customLinkClass]: e.customLinkClass,
                  [e.customActiveLinkClass]: f.active && e.customActiveLinkClass
                }]),
                innerHTML: f.label,
                onClick: (h) => s(f.url)
              }, null, 10, KO))
            ], 64)) : (A(), N(ie, { key: 1 }, [
              f.url === null ? (A(), G(C(ut), {
                key: 0,
                class: J(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [e.customLinkClass]: e.customLinkClass
                }]),
                innerHTML: f.label,
                href: ""
              }, null, 8, ["class", "innerHTML"])) : (A(), G(C(ut), {
                key: 1,
                class: J(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", {
                  "font-bold text-primary": f.active,
                  [e.customLinkClass]: e.customLinkClass,
                  [e.customActiveLinkClass]: f.active && e.customActiveLinkClass
                }]),
                href: f.url,
                innerHTML: f.label,
                preserveScroll: e.preserveScroll || e.logs,
                preserveState: e.preserveState || e.logs,
                only: e.logs ? ["logs"] : e.only
              }, null, 8, ["class", "href", "innerHTML", "preserveScroll", "preserveState", "only"]))
            ], 64))
          ]))), 128))
        ], 2)
      ])) : Y("", !0),
      u[2] || (u[2] = j("div", null, null, -1))
    ]));
  }
}, GO = ["type", "disabled"], Wp = {
  __name: "PrimaryButton",
  props: {
    type: {
      type: String,
      default: "submit"
    },
    disabled: Boolean,
    customButtonClass: {
      type: String
    }
  },
  setup(e) {
    return (t, n) => (A(), N("button", {
      type: e.type,
      disabled: e.disabled,
      class: J({
        [e.customButtonClass]: !!e.customButtonClass,
        "focusable inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-primary-700 focus:bg-primary-700 focus:outline-hidden focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 active:bg-primary-700 disabled:cursor-not-allowed disabled:brightness-125 disabled:grayscale-[30%]": !e.customButtonClass
      })
    }, [
      V(t.$slots, "default")
    ], 10, GO));
  }
}, YO = ["type", "disabled"], wA = {
  __name: "DangerButton",
  props: {
    type: {
      type: String,
      default: "submit"
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, n) => (A(), N("button", {
      type: e.type,
      disabled: e.disabled,
      class: "focusable inline-flex items-center rounded border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-hidden focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700 disabled:cursor-not-allowed disabled:brightness-125 disabled:grayscale-[30%]"
    }, [
      V(t.$slots, "default")
    ], 8, YO));
  }
}, xA = {
  __name: "ResponsiveNavLink",
  props: ["href", "active"],
  setup(e) {
    const t = e, n = W(
      () => t.active ? "focusable block w-full pl-3 pr-4 py-2 border-l-4 border-accent-400 text-left text-base font-medium text-accent-700 bg-accent-50 focus:outline-hidden focus:text-accent-800 focus:bg-accent-100 focus:border-accent-700 transition duration-150 ease-in-out" : "focusable block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-hidden focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (r, o) => (A(), G(C(ut), {
      href: e.href,
      class: J(n.value)
    }, {
      default: K(() => [
        V(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}, XO = ["type"], SA = {
  __name: "SecondaryButton",
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(e) {
    return (t, n) => (A(), N("button", {
      type: e.type,
      class: "focusable inline-flex items-center rounded border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-hidden focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:opacity-25"
    }, [
      V(t.$slots, "default")
    ], 8, XO));
  }
}, JO = {
  key: 0,
  class: "relative mb-2 rounded-lg border-b-2 border-gray-200 bg-neutral-50 px-6 py-1 text-center"
}, QO = {
  key: 0,
  class: "absolute right-0 top-0 mr-2 mt-1"
}, OA = {
  __name: "Section",
  props: {
    header: String,
    overflow: {
      default: !1,
      type: Boolean
    }
  },
  setup(e) {
    return (t, n) => (A(), N("div", {
      class: J(["rounded-lg border-2 border-gray-200 bg-white dark:border-gray-700", { "px-4 py-2": !e.header, "overflow-hidden": e.overflow }])
    }, [
      j("div", {
        class: J(["sm:rounded-lg", { "p-1": !e.header }])
      }, [
        e.header ? (A(), N("div", JO, [
          j("span", null, Q(e.header), 1),
          t.$slots.headerButton ? (A(), N("div", QO, [
            V(t.$slots, "headerButton")
          ])) : Y("", !0)
        ])) : Y("", !0),
        j("div", {
          class: J({ "px-4 pb-2": e.header })
        }, [
          V(t.$slots, "default")
        ], 2)
      ], 2)
    ], 2));
  }
}, ZO = {}, eE = {
  class: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]",
  role: "status"
};
function tE(e, t) {
  return A(), N("div", eE, t[0] || (t[0] = [
    j("span", { class: "absolute! -m-px! h-px! w-px! overflow-hidden! whitespace-nowrap! border-0! p-0! [clip:rect(0,0,0,0)]!" }, "Loading...", -1)
  ]));
}
const Kp = /* @__PURE__ */ po(ZO, [["render", tE]]), nE = ["onClick"], rE = { class: "h:10 rounded-t-lg bg-white py-1 text-center md:h-10 md:py-2" }, EA = {
  __name: "Stats",
  props: {
    stats: Object,
    statusName: {
      type: String,
      default: null
    },
    customContainerClass: {
      type: String,
      default: ""
    },
    customStatClass: {
      type: String,
      default: ""
    },
    customStatLabelClass: {
      type: String,
      default: ""
    },
    customStatValueClass: {
      type: String,
      default: ""
    }
  },
  setup(e, { emit: t }) {
    const n = t, r = e, o = (i) => {
      a(i) && (i = null), n("updateSearch", i);
    }, a = (i) => r.statusName != null ? route().params[r.statusName] == i : route().params.status == i;
    return (i, s) => (A(), N("div", null, [
      j("div", {
        class: J(["flex flex-wrap gap-2 lg:flex-nowrap", { [e.customContainerClass]: e.customContainerClass }])
      }, [
        (A(!0), N(ie, null, Qe(e.stats, (c) => (A(), N("div", {
          class: J(["flex w-full cursor-pointer flex-col rounded-lg border bg-gray-100 shadow", {
            "border-primary bg-primary-50 shadow-primary-50": a(c.name),
            [e.customStatClass]: e.customStatClass
          }]),
          onClick: (l) => o(c.name),
          key: c.value
        }, [
          j("div", null, [
            j("div", rE, [
              j("h5", {
                class: J(["text-xl font-medium leading-tight text-neutral-800", { [e.customStatValueClass]: e.customStatValueClass }])
              }, Q(c.value), 3)
            ])
          ]),
          j("div", {
            class: J(["flex flex-auto flex-col gap-y-4 p-1 text-center md:py-2", { [e.customStatLabelClass]: e.customStatLabelClass }])
          }, Q(c.label ?? c.name), 3)
        ], 10, nE))), 128))
      ], 2)
    ]));
  }
}, AA = {
  __name: "Select2ajax",
  props: {
    id: {
      type: String,
      required: !0
    },
    label: {
      type: String
    },
    optionValue: {
      type: String,
      default: "value"
    },
    optionText: {
      type: String,
      default: "label"
    },
    optionDisabled: {
      type: String,
      default: "disabled"
    },
    placeholder: {
      type: String
    },
    field: String,
    form: Object,
    modelValue: {},
    noLabel: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    noForm: {
      type: Boolean,
      default: !1
    },
    required: Boolean,
    // ajax specific props
    url: {
      type: String,
      required: !0
    },
    queryParams: {
      type: Object
    }
  },
  emits: ["update:modelValue", "changed"],
  setup(e, { expose: t, emit: n }) {
    var y;
    const r = e, o = n, a = q([]), i = q(1), s = q(!0), c = q(0), l = q(""), u = q(((y = r.form) == null ? void 0 : y[r.field]) || r.modelValue), f = q(u.value), p = q(null), h = (v) => {
      f.value = u.value, u.value = v, o("update:modelValue", v), o("changed", v), v || (d(""), p.value = null);
    }, d = (v) => {
      v == "" && u.value && u.value !== f.value || (i.value = 1, c.value = 0, l.value = v, w());
    }, w = async (v = !1) => {
      const b = new URLSearchParams();
      b.append("term", l.value), b.append("page", i.value), r.queryParams && Object.keys(r.queryParams).forEach(($) => {
        b.append($, r.queryParams[$]);
      }), v && u.value && b.append("ajax_id", u.value);
      const P = await (await fetch(`${r.url}?${b.toString()}`)).json();
      if (s.value = P.current_page < P.last_page, i.value === 1) {
        if (a.value = P.data, u.value) {
          const $ = a.value.find((F) => F[r.optionValue] == u.value);
          p.value = $ ? $[r.optionText] : null;
        }
        return;
      }
      a.value = a.value.concat(P.data);
    };
    return Re(() => {
      w(!0);
      const v = document.getElementById(r.id).parentNode.querySelector(".menu");
      v == null || v.addEventListener(
        "scroll",
        (b) => {
          b.target.scrollTop > c.value && b.target.scrollTop + b.target.clientHeight >= b.target.scrollHeight && s.value && (i.value++, w());
        },
        {
          passive: !0
        }
      );
    }), t({ getCurrentOption: () => a.value.find((v) => v[r.optionValue] == u.value) }), (v, b) => (A(), G(C(tv), {
      id: e.id,
      label: e.label,
      list: a.value,
      optionValue: e.optionValue,
      optionText: e.optionText,
      optionDisabled: e.optionDisabled,
      placeholder: p.value ?? e.placeholder,
      field: e.field,
      form: e.form,
      modelValue: u.value,
      noLabel: e.noLabel,
      disabled: e.disabled,
      noForm: e.noForm,
      required: e.required,
      "onUpdate:modelValue": b[0] || (b[0] = (E) => h(E)),
      onSearchchange: d,
      filterPredicate: (E, P) => !0
    }, null, 8, ["id", "label", "list", "optionValue", "optionText", "optionDisabled", "placeholder", "field", "form", "modelValue", "noLabel", "disabled", "noForm", "required"]));
  }
}, oE = ["id"], aE = { class: "ml-3 flex-1 whitespace-nowrap text-left" }, iE = { class: "space-y-1 px-4" }, CA = {
  __name: "NavCollapse",
  props: {
    open: { type: Boolean, default: !1 },
    name: String
  },
  setup(e) {
    const t = e, n = q(t.open);
    return pe(
      () => t.open,
      (r) => n.value = r
    ), (r, o) => (A(), N("li", null, [
      Z(C(Op), {
        defaultOpen: e.open,
        open: n.value,
        "onUpdate:open": o[1] || (o[1] = (a) => n.value = a)
      }, {
        default: K(() => [
          Z(C(Pp), { asChild: "" }, {
            default: K(() => [
              j("button", {
                id: e.name,
                onClick: o[0] || (o[0] = (...a) => r.onClick && r.onClick(...a)),
                class: "focusable group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              }, [
                V(r.$slots, "icon"),
                j("span", aE, Q(e.name), 1),
                Z(C(Ue), {
                  icon: C(Ef),
                  class: J(["transition-all", { "rotate-180": n.value }])
                }, null, 8, ["icon", "class"])
              ], 8, oE)
            ]),
            _: 3
          }),
          Z(C(Cp), { class: "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden" }, {
            default: K(() => [
              j("ul", iE, [
                V(r.$slots, "default")
              ])
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["defaultOpen", "open"])
    ]));
  }
}, sE = { class: "border-t border-gray-100" }, lE = { class: "divide-y divide-gray-100" }, PA = {
  __name: "DescriptionList",
  props: {
    form: {
      type: Object,
      required: !1
    },
    stopEditOnSubmit: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { expose: t }) {
    const n = e, r = q(!1);
    pe(
      () => {
        var l;
        return (l = n.form) == null ? void 0 : l.processing;
      },
      (l) => {
        if (l) {
          r.value = !0;
          return;
        }
        r.value && (r.value = !1, n.stopEditOnSubmit && s());
      }
    );
    const o = q([]);
    rs("registerItem", (l) => {
      o.value.push(l);
    });
    const i = () => {
      o.value.forEach((l) => {
        l && typeof l.startEditing == "function" && l.startEditing();
      });
    }, s = () => {
      o.value.forEach((l) => {
        l && typeof l.stopEditing == "function" && l.stopEditing();
      });
    };
    return t({
      startEditing: i,
      stopEditing: s,
      toggleEditing: () => {
        o.value.forEach((l) => {
          l && typeof l.toggleEditing == "function" && l.toggleEditing();
        });
      }
    }), (l, u) => (A(), N("div", sE, [
      j("dl", lE, [
        V(l.$slots, "default")
      ])
    ]));
  }
}, uE = { class: "description-list-item px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" }, cE = { class: "flex items-center text-sm font-medium" }, fE = {
  key: 0,
  class: "ml-1 text-red-500"
}, dE = { class: "mt-1 min-h-[42px] text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0" }, pE = { class: "flex min-h-full items-center" }, hE = { class: "slot-content grow" }, mE = { class: "ml-4 shrink-0" }, yE = { class: "slot-edit grow" }, gE = { class: "ml-4 shrink-0" }, kA = {
  __name: "DescriptionListItem",
  props: {
    editable: {
      type: Boolean,
      default: !1
    },
    label: {
      type: String,
      default: ""
    },
    value: {
      type: String
    },
    forceEditing: {
      type: Boolean,
      default: !1
    },
    required: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["editToggled"],
  setup(e, { expose: t, emit: n }) {
    hr.add(Ci, Dl);
    const r = e, o = n, a = q(r.editable ? r.forceEditing : !1), i = () => {
      r.editable && (a.value = !a.value, o("editToggled", a.value));
    };
    pe(
      () => r.forceEditing,
      (f) => {
        r.editable && (a.value = f);
      }
    );
    const s = () => {
      r.editable && (a.value = !0);
    }, c = () => {
      r.editable && (a.value = !1);
    }, l = ns("registerItem");
    return Re(() => {
      l && l({ startEditing: s, stopEditing: c, toggleEditing: i });
    }), t({
      toggleEditing: i,
      startEditing: s,
      stopEditing: c,
      isEditing: () => a.value
    }), (f, p) => (A(), N("div", uE, [
      j("dt", cE, [
        me(Q(e.label) + " ", 1),
        V(f.$slots, "label"),
        e.required ? (A(), N("span", fE, "*")) : Y("", !0)
      ]),
      j("dd", dE, [
        j("div", pE, [
          a.value ? (A(), N(ie, { key: 1 }, [
            j("div", yE, [
              V(f.$slots, "edit")
            ]),
            j("span", gE, [
              j("button", {
                type: "button",
                onClick: i,
                class: "text-xl font-bold text-primary hover:text-primary-400"
              }, [
                Z(C(Ue), { icon: C(Dl) }, null, 8, ["icon"])
              ])
            ])
          ], 64)) : (A(), N(ie, { key: 0 }, [
            j("div", hE, [
              V(f.$slots, "default"),
              me(" " + Q(e.value), 1)
            ]),
            j("span", mE, [
              e.editable ? (A(), N("button", {
                key: 0,
                type: "button",
                onClick: i,
                class: "text-lg font-bold text-primary hover:text-primary-400"
              }, [
                Z(C(Ue), { icon: C(Ci) }, null, 8, ["icon"])
              ])) : Y("", !0),
              V(f.$slots, "buttons")
            ])
          ], 64))
        ])
      ])
    ]));
  }
};
var ii = { exports: {} };
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.8.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2023
 * @license MIT
 */
var $c;
function vE() {
  return $c || ($c = 1, function(e) {
    (function() {
      var t = "input is invalid type", n = "finalize already called", r = typeof window == "object", o = r ? window : {};
      o.JS_MD5_NO_WINDOW && (r = !1);
      var a = !r && typeof self == "object", i = !o.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
      i ? o = Ti : a && (o = self);
      var s = !o.JS_MD5_NO_COMMON_JS && !0 && e.exports, c = !o.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", l = "0123456789abcdef".split(""), u = [128, 32768, 8388608, -2147483648], f = [0, 8, 16, 24], p = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), d = [], w;
      if (c) {
        var g = new ArrayBuffer(68);
        w = new Uint8Array(g), d = new Uint32Array(g);
      }
      var y = Array.isArray;
      (o.JS_MD5_NO_NODE_JS || !y) && (y = function(m) {
        return Object.prototype.toString.call(m) === "[object Array]";
      });
      var v = ArrayBuffer.isView;
      c && (o.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !v) && (v = function(m) {
        return typeof m == "object" && m.buffer && m.buffer.constructor === ArrayBuffer;
      });
      var b = function(m) {
        var S = typeof m;
        if (S === "string")
          return [m, !0];
        if (S !== "object" || m === null)
          throw new Error(t);
        if (c && m.constructor === ArrayBuffer)
          return [new Uint8Array(m), !1];
        if (!y(m) && !v(m))
          throw new Error(t);
        return [m, !1];
      }, E = function(m) {
        return function(S) {
          return new T(!0).update(S)[m]();
        };
      }, P = function() {
        var m = E("hex");
        i && (m = $(m)), m.create = function() {
          return new T();
        }, m.update = function(x) {
          return m.create().update(x);
        };
        for (var S = 0; S < p.length; ++S) {
          var O = p[S];
          m[O] = E(O);
        }
        return m;
      }, $ = function(m) {
        var S = Di, O = Di.Buffer, x;
        O.from && !o.JS_MD5_NO_BUFFER_FROM ? x = O.from : x = function(M) {
          return new O(M);
        };
        var z = function(M) {
          if (typeof M == "string")
            return S.createHash("md5").update(M, "utf8").digest("hex");
          if (M == null)
            throw new Error(t);
          return M.constructor === ArrayBuffer && (M = new Uint8Array(M)), y(M) || v(M) || M.constructor === O ? S.createHash("md5").update(x(M)).digest("hex") : m(M);
        };
        return z;
      }, F = function(m) {
        return function(S, O) {
          return new k(S, !0).update(O)[m]();
        };
      }, B = function() {
        var m = F("hex");
        m.create = function(x) {
          return new k(x);
        }, m.update = function(x, z) {
          return m.create(x).update(z);
        };
        for (var S = 0; S < p.length; ++S) {
          var O = p[S];
          m[O] = F(O);
        }
        return m;
      };
      function T(m) {
        if (m)
          d[0] = d[16] = d[1] = d[2] = d[3] = d[4] = d[5] = d[6] = d[7] = d[8] = d[9] = d[10] = d[11] = d[12] = d[13] = d[14] = d[15] = 0, this.blocks = d, this.buffer8 = w;
        else if (c) {
          var S = new ArrayBuffer(68);
          this.buffer8 = new Uint8Array(S), this.blocks = new Uint32Array(S);
        } else
          this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
      }
      T.prototype.update = function(m) {
        if (this.finalized)
          throw new Error(n);
        var S = b(m);
        m = S[0];
        for (var O = S[1], x, z = 0, M, I = m.length, H = this.blocks, oe = this.buffer8; z < I; ) {
          if (this.hashed && (this.hashed = !1, H[0] = H[16], H[16] = H[1] = H[2] = H[3] = H[4] = H[5] = H[6] = H[7] = H[8] = H[9] = H[10] = H[11] = H[12] = H[13] = H[14] = H[15] = 0), O)
            if (c)
              for (M = this.start; z < I && M < 64; ++z)
                x = m.charCodeAt(z), x < 128 ? oe[M++] = x : x < 2048 ? (oe[M++] = 192 | x >>> 6, oe[M++] = 128 | x & 63) : x < 55296 || x >= 57344 ? (oe[M++] = 224 | x >>> 12, oe[M++] = 128 | x >>> 6 & 63, oe[M++] = 128 | x & 63) : (x = 65536 + ((x & 1023) << 10 | m.charCodeAt(++z) & 1023), oe[M++] = 240 | x >>> 18, oe[M++] = 128 | x >>> 12 & 63, oe[M++] = 128 | x >>> 6 & 63, oe[M++] = 128 | x & 63);
            else
              for (M = this.start; z < I && M < 64; ++z)
                x = m.charCodeAt(z), x < 128 ? H[M >>> 2] |= x << f[M++ & 3] : x < 2048 ? (H[M >>> 2] |= (192 | x >>> 6) << f[M++ & 3], H[M >>> 2] |= (128 | x & 63) << f[M++ & 3]) : x < 55296 || x >= 57344 ? (H[M >>> 2] |= (224 | x >>> 12) << f[M++ & 3], H[M >>> 2] |= (128 | x >>> 6 & 63) << f[M++ & 3], H[M >>> 2] |= (128 | x & 63) << f[M++ & 3]) : (x = 65536 + ((x & 1023) << 10 | m.charCodeAt(++z) & 1023), H[M >>> 2] |= (240 | x >>> 18) << f[M++ & 3], H[M >>> 2] |= (128 | x >>> 12 & 63) << f[M++ & 3], H[M >>> 2] |= (128 | x >>> 6 & 63) << f[M++ & 3], H[M >>> 2] |= (128 | x & 63) << f[M++ & 3]);
          else if (c)
            for (M = this.start; z < I && M < 64; ++z)
              oe[M++] = m[z];
          else
            for (M = this.start; z < I && M < 64; ++z)
              H[M >>> 2] |= m[z] << f[M++ & 3];
          this.lastByteIndex = M, this.bytes += M - this.start, M >= 64 ? (this.start = M - 64, this.hash(), this.hashed = !0) : this.start = M;
        }
        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
      }, T.prototype.finalize = function() {
        if (!this.finalized) {
          this.finalized = !0;
          var m = this.blocks, S = this.lastByteIndex;
          m[S >>> 2] |= u[S & 3], S >= 56 && (this.hashed || this.hash(), m[0] = m[16], m[16] = m[1] = m[2] = m[3] = m[4] = m[5] = m[6] = m[7] = m[8] = m[9] = m[10] = m[11] = m[12] = m[13] = m[14] = m[15] = 0), m[14] = this.bytes << 3, m[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
        }
      }, T.prototype.hash = function() {
        var m, S, O, x, z, M, I = this.blocks;
        this.first ? (m = I[0] - 680876937, m = (m << 7 | m >>> 25) - 271733879 << 0, x = (-1732584194 ^ m & 2004318071) + I[1] - 117830708, x = (x << 12 | x >>> 20) + m << 0, O = (-271733879 ^ x & (m ^ -271733879)) + I[2] - 1126478375, O = (O << 17 | O >>> 15) + x << 0, S = (m ^ O & (x ^ m)) + I[3] - 1316259209, S = (S << 22 | S >>> 10) + O << 0) : (m = this.h0, S = this.h1, O = this.h2, x = this.h3, m += (x ^ S & (O ^ x)) + I[0] - 680876936, m = (m << 7 | m >>> 25) + S << 0, x += (O ^ m & (S ^ O)) + I[1] - 389564586, x = (x << 12 | x >>> 20) + m << 0, O += (S ^ x & (m ^ S)) + I[2] + 606105819, O = (O << 17 | O >>> 15) + x << 0, S += (m ^ O & (x ^ m)) + I[3] - 1044525330, S = (S << 22 | S >>> 10) + O << 0), m += (x ^ S & (O ^ x)) + I[4] - 176418897, m = (m << 7 | m >>> 25) + S << 0, x += (O ^ m & (S ^ O)) + I[5] + 1200080426, x = (x << 12 | x >>> 20) + m << 0, O += (S ^ x & (m ^ S)) + I[6] - 1473231341, O = (O << 17 | O >>> 15) + x << 0, S += (m ^ O & (x ^ m)) + I[7] - 45705983, S = (S << 22 | S >>> 10) + O << 0, m += (x ^ S & (O ^ x)) + I[8] + 1770035416, m = (m << 7 | m >>> 25) + S << 0, x += (O ^ m & (S ^ O)) + I[9] - 1958414417, x = (x << 12 | x >>> 20) + m << 0, O += (S ^ x & (m ^ S)) + I[10] - 42063, O = (O << 17 | O >>> 15) + x << 0, S += (m ^ O & (x ^ m)) + I[11] - 1990404162, S = (S << 22 | S >>> 10) + O << 0, m += (x ^ S & (O ^ x)) + I[12] + 1804603682, m = (m << 7 | m >>> 25) + S << 0, x += (O ^ m & (S ^ O)) + I[13] - 40341101, x = (x << 12 | x >>> 20) + m << 0, O += (S ^ x & (m ^ S)) + I[14] - 1502002290, O = (O << 17 | O >>> 15) + x << 0, S += (m ^ O & (x ^ m)) + I[15] + 1236535329, S = (S << 22 | S >>> 10) + O << 0, m += (O ^ x & (S ^ O)) + I[1] - 165796510, m = (m << 5 | m >>> 27) + S << 0, x += (S ^ O & (m ^ S)) + I[6] - 1069501632, x = (x << 9 | x >>> 23) + m << 0, O += (m ^ S & (x ^ m)) + I[11] + 643717713, O = (O << 14 | O >>> 18) + x << 0, S += (x ^ m & (O ^ x)) + I[0] - 373897302, S = (S << 20 | S >>> 12) + O << 0, m += (O ^ x & (S ^ O)) + I[5] - 701558691, m = (m << 5 | m >>> 27) + S << 0, x += (S ^ O & (m ^ S)) + I[10] + 38016083, x = (x << 9 | x >>> 23) + m << 0, O += (m ^ S & (x ^ m)) + I[15] - 660478335, O = (O << 14 | O >>> 18) + x << 0, S += (x ^ m & (O ^ x)) + I[4] - 405537848, S = (S << 20 | S >>> 12) + O << 0, m += (O ^ x & (S ^ O)) + I[9] + 568446438, m = (m << 5 | m >>> 27) + S << 0, x += (S ^ O & (m ^ S)) + I[14] - 1019803690, x = (x << 9 | x >>> 23) + m << 0, O += (m ^ S & (x ^ m)) + I[3] - 187363961, O = (O << 14 | O >>> 18) + x << 0, S += (x ^ m & (O ^ x)) + I[8] + 1163531501, S = (S << 20 | S >>> 12) + O << 0, m += (O ^ x & (S ^ O)) + I[13] - 1444681467, m = (m << 5 | m >>> 27) + S << 0, x += (S ^ O & (m ^ S)) + I[2] - 51403784, x = (x << 9 | x >>> 23) + m << 0, O += (m ^ S & (x ^ m)) + I[7] + 1735328473, O = (O << 14 | O >>> 18) + x << 0, S += (x ^ m & (O ^ x)) + I[12] - 1926607734, S = (S << 20 | S >>> 12) + O << 0, z = S ^ O, m += (z ^ x) + I[5] - 378558, m = (m << 4 | m >>> 28) + S << 0, x += (z ^ m) + I[8] - 2022574463, x = (x << 11 | x >>> 21) + m << 0, M = x ^ m, O += (M ^ S) + I[11] + 1839030562, O = (O << 16 | O >>> 16) + x << 0, S += (M ^ O) + I[14] - 35309556, S = (S << 23 | S >>> 9) + O << 0, z = S ^ O, m += (z ^ x) + I[1] - 1530992060, m = (m << 4 | m >>> 28) + S << 0, x += (z ^ m) + I[4] + 1272893353, x = (x << 11 | x >>> 21) + m << 0, M = x ^ m, O += (M ^ S) + I[7] - 155497632, O = (O << 16 | O >>> 16) + x << 0, S += (M ^ O) + I[10] - 1094730640, S = (S << 23 | S >>> 9) + O << 0, z = S ^ O, m += (z ^ x) + I[13] + 681279174, m = (m << 4 | m >>> 28) + S << 0, x += (z ^ m) + I[0] - 358537222, x = (x << 11 | x >>> 21) + m << 0, M = x ^ m, O += (M ^ S) + I[3] - 722521979, O = (O << 16 | O >>> 16) + x << 0, S += (M ^ O) + I[6] + 76029189, S = (S << 23 | S >>> 9) + O << 0, z = S ^ O, m += (z ^ x) + I[9] - 640364487, m = (m << 4 | m >>> 28) + S << 0, x += (z ^ m) + I[12] - 421815835, x = (x << 11 | x >>> 21) + m << 0, M = x ^ m, O += (M ^ S) + I[15] + 530742520, O = (O << 16 | O >>> 16) + x << 0, S += (M ^ O) + I[2] - 995338651, S = (S << 23 | S >>> 9) + O << 0, m += (O ^ (S | ~x)) + I[0] - 198630844, m = (m << 6 | m >>> 26) + S << 0, x += (S ^ (m | ~O)) + I[7] + 1126891415, x = (x << 10 | x >>> 22) + m << 0, O += (m ^ (x | ~S)) + I[14] - 1416354905, O = (O << 15 | O >>> 17) + x << 0, S += (x ^ (O | ~m)) + I[5] - 57434055, S = (S << 21 | S >>> 11) + O << 0, m += (O ^ (S | ~x)) + I[12] + 1700485571, m = (m << 6 | m >>> 26) + S << 0, x += (S ^ (m | ~O)) + I[3] - 1894986606, x = (x << 10 | x >>> 22) + m << 0, O += (m ^ (x | ~S)) + I[10] - 1051523, O = (O << 15 | O >>> 17) + x << 0, S += (x ^ (O | ~m)) + I[1] - 2054922799, S = (S << 21 | S >>> 11) + O << 0, m += (O ^ (S | ~x)) + I[8] + 1873313359, m = (m << 6 | m >>> 26) + S << 0, x += (S ^ (m | ~O)) + I[15] - 30611744, x = (x << 10 | x >>> 22) + m << 0, O += (m ^ (x | ~S)) + I[6] - 1560198380, O = (O << 15 | O >>> 17) + x << 0, S += (x ^ (O | ~m)) + I[13] + 1309151649, S = (S << 21 | S >>> 11) + O << 0, m += (O ^ (S | ~x)) + I[4] - 145523070, m = (m << 6 | m >>> 26) + S << 0, x += (S ^ (m | ~O)) + I[11] - 1120210379, x = (x << 10 | x >>> 22) + m << 0, O += (m ^ (x | ~S)) + I[2] + 718787259, O = (O << 15 | O >>> 17) + x << 0, S += (x ^ (O | ~m)) + I[9] - 343485551, S = (S << 21 | S >>> 11) + O << 0, this.first ? (this.h0 = m + 1732584193 << 0, this.h1 = S - 271733879 << 0, this.h2 = O - 1732584194 << 0, this.h3 = x + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + m << 0, this.h1 = this.h1 + S << 0, this.h2 = this.h2 + O << 0, this.h3 = this.h3 + x << 0);
      }, T.prototype.hex = function() {
        this.finalize();
        var m = this.h0, S = this.h1, O = this.h2, x = this.h3;
        return l[m >>> 4 & 15] + l[m & 15] + l[m >>> 12 & 15] + l[m >>> 8 & 15] + l[m >>> 20 & 15] + l[m >>> 16 & 15] + l[m >>> 28 & 15] + l[m >>> 24 & 15] + l[S >>> 4 & 15] + l[S & 15] + l[S >>> 12 & 15] + l[S >>> 8 & 15] + l[S >>> 20 & 15] + l[S >>> 16 & 15] + l[S >>> 28 & 15] + l[S >>> 24 & 15] + l[O >>> 4 & 15] + l[O & 15] + l[O >>> 12 & 15] + l[O >>> 8 & 15] + l[O >>> 20 & 15] + l[O >>> 16 & 15] + l[O >>> 28 & 15] + l[O >>> 24 & 15] + l[x >>> 4 & 15] + l[x & 15] + l[x >>> 12 & 15] + l[x >>> 8 & 15] + l[x >>> 20 & 15] + l[x >>> 16 & 15] + l[x >>> 28 & 15] + l[x >>> 24 & 15];
      }, T.prototype.toString = T.prototype.hex, T.prototype.digest = function() {
        this.finalize();
        var m = this.h0, S = this.h1, O = this.h2, x = this.h3;
        return [
          m & 255,
          m >>> 8 & 255,
          m >>> 16 & 255,
          m >>> 24 & 255,
          S & 255,
          S >>> 8 & 255,
          S >>> 16 & 255,
          S >>> 24 & 255,
          O & 255,
          O >>> 8 & 255,
          O >>> 16 & 255,
          O >>> 24 & 255,
          x & 255,
          x >>> 8 & 255,
          x >>> 16 & 255,
          x >>> 24 & 255
        ];
      }, T.prototype.array = T.prototype.digest, T.prototype.arrayBuffer = function() {
        this.finalize();
        var m = new ArrayBuffer(16), S = new Uint32Array(m);
        return S[0] = this.h0, S[1] = this.h1, S[2] = this.h2, S[3] = this.h3, m;
      }, T.prototype.buffer = T.prototype.arrayBuffer, T.prototype.base64 = function() {
        for (var m, S, O, x = "", z = this.array(), M = 0; M < 15; )
          m = z[M++], S = z[M++], O = z[M++], x += h[m >>> 2] + h[(m << 4 | S >>> 4) & 63] + h[(S << 2 | O >>> 6) & 63] + h[O & 63];
        return m = z[M], x += h[m >>> 2] + h[m << 4 & 63] + "==", x;
      };
      function k(m, S) {
        var O, x = b(m);
        if (m = x[0], x[1]) {
          var z = [], M = m.length, I = 0, H;
          for (O = 0; O < M; ++O)
            H = m.charCodeAt(O), H < 128 ? z[I++] = H : H < 2048 ? (z[I++] = 192 | H >>> 6, z[I++] = 128 | H & 63) : H < 55296 || H >= 57344 ? (z[I++] = 224 | H >>> 12, z[I++] = 128 | H >>> 6 & 63, z[I++] = 128 | H & 63) : (H = 65536 + ((H & 1023) << 10 | m.charCodeAt(++O) & 1023), z[I++] = 240 | H >>> 18, z[I++] = 128 | H >>> 12 & 63, z[I++] = 128 | H >>> 6 & 63, z[I++] = 128 | H & 63);
          m = z;
        }
        m.length > 64 && (m = new T(!0).update(m).array());
        var oe = [], Ae = [];
        for (O = 0; O < 64; ++O) {
          var We = m[O] || 0;
          oe[O] = 92 ^ We, Ae[O] = 54 ^ We;
        }
        T.call(this, S), this.update(Ae), this.oKeyPad = oe, this.inner = !0, this.sharedMemory = S;
      }
      k.prototype = new T(), k.prototype.finalize = function() {
        if (T.prototype.finalize.call(this), this.inner) {
          this.inner = !1;
          var m = this.array();
          T.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(m), T.prototype.finalize.call(this);
        }
      };
      var _ = P();
      _.md5 = _, _.md5.hmac = B(), s ? e.exports = _ : o.md5 = _;
    })();
  }(ii)), ii.exports;
}
var bE = vE();
const wE = ["src", "alt"], TA = {
  __name: "GravatarImg",
  props: {
    email: {
      type: String,
      required: !0
    },
    size: {
      type: Number,
      default: 100
    }
  },
  setup(e) {
    const t = e, n = W(() => bE.md5(t.email.trim().toLowerCase())), r = W(() => `https://www.gravatar.com/avatar/${n.value}?s=${t.size}`), o = W(() => `Gravatar for ${t.email}`);
    return (a, i) => (A(), N("img", {
      src: r.value,
      alt: o.value
    }, null, 8, wE));
  }
}, DA = {
  __name: "TdCollapseHandler",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(e) {
    return (t, n) => (A(), G(Cs, {
      "data-te-collapse-init": "",
      "data-te-target": "#" + e.collapse_id,
      "aria-expanded": "false",
      "aria-controls": e.collapse_id,
      class: "cursor-pointer"
    }, {
      default: K(() => [
        V(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-te-target", "aria-controls"]));
  }
}, xE = {
  install(e) {
    for (const t in components)
      e.component(t, components[t]);
  }
};
export {
  sA as Alert,
  OE as Checkbox,
  wO as CollapsableSection,
  wO as CollapsibleSection,
  wA as DangerButton,
  PA as DescriptionList,
  kA as DescriptionListItem,
  fA as Dropdown,
  dA as DropdownLink,
  AE as DropdownSearchbar,
  pA as DropdownSeparator,
  XE as FileDropZoneInput,
  TA as GravatarImg,
  JE as Images,
  Jy as Input,
  mr as InputError,
  ys as InputLabel,
  hA as LinkButton,
  mA as LinkDropdownButton,
  yA as LinkDropdownButtonItem,
  gA as Logs,
  qO as LogsContent,
  vA as Modal,
  CA as NavCollapse,
  bA as NavLink,
  Hp as Pagination,
  Wp as PrimaryButton,
  QE as RadioButton,
  xA as ResponsiveNavLink,
  tv as SearchSelect,
  SA as SecondaryButton,
  OA as Section,
  AA as Select2ajax,
  Kp as Spinner,
  EA as Stats,
  lc as SubmitButton,
  ZE as Table,
  iA as TableItemCard,
  tA as Tbody,
  Cs as Td,
  DA as TdCollapseHandler,
  og as TextInput,
  EE as Textarea,
  nA as Th,
  eA as Thead,
  oA as TrCollapse,
  rA as TrCollapseHandler,
  aA as TrPlaceholder,
  xE as default,
  C1 as getInertiaPage,
  vr as getInertiaRouter,
  KE as hasPermission,
  A1 as moneyFormat,
  WE as numberFormat,
  YE as setInertiaPage,
  GE as setInertiaRouter
};
