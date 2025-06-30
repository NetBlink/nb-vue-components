import * as dl from "vue";
import { computed as W, withDirectives as ot, createElementBlock as F, openBlock as E, normalizeClass as ee, vModelCheckbox as Vc, defineComponent as X, watch as de, h as qe, mergeModels as hi, ref as q, useModel as Hc, onMounted as be, createBlock as V, createCommentVNode as J, createElementVNode as z, unref as b, renderSlot as j, toDisplayString as Z, createVNode as Y, Transition as un, withCtx as M, vModelSelect as Oh, Fragment as le, vModelText as Wc, createTextVNode as pe, vShow as $n, resolveDirective as Eh, normalizeProps as ve, guardReactiveProps as Ae, renderList as et, resolveDynamicComponent as zr, mergeProps as ae, toHandlers as Kc, withModifiers as wt, withKeys as on, normalizeStyle as Ft, shallowRef as mr, markRaw as mi, onUnmounted as Nt, reactive as yr, toRefs as jt, getCurrentScope as Gc, onScopeDispose as Yc, shallowReadonly as An, Comment as Xc, cloneVNode as Ah, readonly as Jc, effectScope as Qc, toValue as It, onBeforeUnmount as Ch, watchEffect as at, customRef as Ph, getCurrentInstance as gn, nextTick as _e, inject as fs, provide as ds, toHandlerKey as kh, camelize as Zc, Teleport as ef, toRef as Th, watchPostEffect as tf, mergeDefaults as nf, isRef as Dh, useSlots as $h } from "vue";
const Fh = ["value"], kA = {
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
    return (a, i) => ot((E(), F("input", {
      type: "checkbox",
      value: e.value,
      "onUpdate:modelValue": i[0] || (i[0] = (s) => o.value = s),
      class: ee(["rounded border-gray-300 text-accent-600 shadow focus:ring-accent-500", { [e.customClass]: e.customClass }])
    }, null, 10, Fh)), [
      [Vc, o.value]
    ]);
  }
};
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function Ih(e, t, n) {
  return (t = Lh(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function pl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pl(Object(n), !0).forEach(function(r) {
      Ih(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pl(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Rh(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Lh(e) {
  var t = Rh(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const hl = () => {
};
let ps = {}, rf = {}, of = null, af = {
  mark: hl,
  measure: hl
};
try {
  typeof window < "u" && (ps = window), typeof document < "u" && (rf = document), typeof MutationObserver < "u" && (of = MutationObserver), typeof performance < "u" && (af = performance);
} catch {
}
const {
  userAgent: ml = ""
} = ps.navigator || {}, Xt = ps, ye = rf, yl = of, Ir = af;
Xt.document;
const qt = !!ye.documentElement && !!ye.head && typeof ye.addEventListener == "function" && typeof ye.createElement == "function", sf = ~ml.indexOf("MSIE") || ~ml.indexOf("Trident/");
var _h = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Bh = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, lf = {
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
}, Mh = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, uf = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Be = "classic", yo = "duotone", Nh = "sharp", jh = "sharp-duotone", cf = [Be, yo, Nh, jh], qh = {
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
}, Uh = {
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
}, zh = /* @__PURE__ */ new Map([["classic", {
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
}]]), Vh = {
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
}, Hh = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], gl = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Wh = ["kit"], Kh = {
  kit: {
    "fa-kit": "fak"
  }
}, Gh = ["fak", "fakd"], Yh = {
  kit: {
    fak: "fa-kit"
  }
}, vl = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, Rr = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Xh = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Jh = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Qh = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Zh = {
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
}, em = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, yi = {
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
}, tm = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], gi = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...Xh, ...tm], nm = ["solid", "regular", "light", "thin", "duotone", "brands"], ff = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], rm = ff.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), om = [...Object.keys(em), ...nm, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Rr.GROUP, Rr.SWAP_OPACITY, Rr.PRIMARY, Rr.SECONDARY].concat(ff.map((e) => "".concat(e, "x"))).concat(rm.map((e) => "w-".concat(e))), am = {
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
const Lt = "___FONT_AWESOME___", vi = 16, df = "fa", pf = "svg-inline--fa", fn = "data-fa-i2svg", bi = "data-fa-pseudo-element", im = "data-fa-pseudo-element-pending", hs = "data-prefix", ms = "data-icon", bl = "fontawesome-i2svg", sm = "async", lm = ["HTML", "HEAD", "STYLE", "SCRIPT"], hf = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function gr(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[Be];
    }
  });
}
const mf = H({}, lf);
mf[Be] = H(H(H(H({}, {
  "fa-duotone": "duotone"
}), lf[Be]), gl.kit), gl["kit-duotone"]);
const um = gr(mf), wi = H({}, Vh);
wi[Be] = H(H(H(H({}, {
  duotone: "fad"
}), wi[Be]), vl.kit), vl["kit-duotone"]);
const wl = gr(wi), xi = H({}, yi);
xi[Be] = H(H({}, xi[Be]), Yh.kit);
const ys = gr(xi), Si = H({}, Zh);
Si[Be] = H(H({}, Si[Be]), Kh.kit);
gr(Si);
const cm = _h, yf = "fa-layers-text", fm = Bh, dm = H({}, qh);
gr(dm);
const pm = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Jo = Mh, hm = [...Wh, ...om], ar = Xt.FontAwesomeConfig || {};
function mm(e) {
  var t = ye.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function ym(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
ye && typeof ye.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const o = ym(mm(n));
  o != null && (ar[r] = o);
});
const gf = {
  styleDefault: "solid",
  familyDefault: Be,
  cssPrefix: df,
  replacementClass: pf,
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
ar.familyPrefix && (ar.cssPrefix = ar.familyPrefix);
const Ln = H(H({}, gf), ar);
Ln.autoReplaceSvg || (Ln.observeMutations = !1);
const Q = {};
Object.keys(gf).forEach((e) => {
  Object.defineProperty(Q, e, {
    enumerable: !0,
    set: function(t) {
      Ln[e] = t, ir.forEach((n) => n(Q));
    },
    get: function() {
      return Ln[e];
    }
  });
});
Object.defineProperty(Q, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Ln.cssPrefix = e, ir.forEach((t) => t(Q));
  },
  get: function() {
    return Ln.cssPrefix;
  }
});
Xt.FontAwesomeConfig = Q;
const ir = [];
function gm(e) {
  return ir.push(e), () => {
    ir.splice(ir.indexOf(e), 1);
  };
}
const Wt = vi, xt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function vm(e) {
  if (!e || !qt)
    return;
  const t = ye.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = ye.head.childNodes;
  let r = null;
  for (let o = n.length - 1; o > -1; o--) {
    const a = n[o], i = (a.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(i) > -1 && (r = a);
  }
  return ye.head.insertBefore(t, r), e;
}
const bm = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function cr() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += bm[Math.random() * 62 | 0];
  return t;
}
function Mn(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function gs(e) {
  return e.classList ? Mn(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function vf(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function wm(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(vf(e[n]), '" '), "").trim();
}
function go(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function vs(e) {
  return e.size !== xt.size || e.x !== xt.x || e.y !== xt.y || e.rotate !== xt.rotate || e.flipX || e.flipY;
}
function xm(e) {
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
function Sm(e) {
  let {
    transform: t,
    width: n = vi,
    height: r = vi,
    startCentered: o = !1
  } = e, a = "";
  return o && sf ? a += "translate(".concat(t.x / Wt - n / 2, "em, ").concat(t.y / Wt - r / 2, "em) ") : o ? a += "translate(calc(-50% + ".concat(t.x / Wt, "em), calc(-50% + ").concat(t.y / Wt, "em)) ") : a += "translate(".concat(t.x / Wt, "em, ").concat(t.y / Wt, "em) "), a += "scale(".concat(t.size / Wt * (t.flipX ? -1 : 1), ", ").concat(t.size / Wt * (t.flipY ? -1 : 1), ") "), a += "rotate(".concat(t.rotate, "deg) "), a;
}
var Om = `:root, :host {
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
function bf() {
  const e = df, t = pf, n = Q.cssPrefix, r = Q.replacementClass;
  let o = Om;
  if (n !== e || r !== t) {
    const a = new RegExp("\\.".concat(e, "\\-"), "g"), i = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    o = o.replace(a, ".".concat(n, "-")).replace(i, "--".concat(n, "-")).replace(s, ".".concat(r));
  }
  return o;
}
let xl = !1;
function Qo() {
  Q.autoAddCss && !xl && (vm(bf()), xl = !0);
}
var Em = {
  mixout() {
    return {
      dom: {
        css: bf,
        insertCss: Qo
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Qo();
      },
      beforeI2svg() {
        Qo();
      }
    };
  }
};
const _t = Xt || {};
_t[Lt] || (_t[Lt] = {});
_t[Lt].styles || (_t[Lt].styles = {});
_t[Lt].hooks || (_t[Lt].hooks = {});
_t[Lt].shims || (_t[Lt].shims = []);
var St = _t[Lt];
const wf = [], xf = function() {
  ye.removeEventListener("DOMContentLoaded", xf), eo = 1, wf.map((e) => e());
};
let eo = !1;
qt && (eo = (ye.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(ye.readyState), eo || ye.addEventListener("DOMContentLoaded", xf));
function Am(e) {
  qt && (eo ? setTimeout(e, 0) : wf.push(e));
}
function vr(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? vf(e) : "<".concat(t, " ").concat(wm(n), ">").concat(r.map(vr).join(""), "</").concat(t, ">");
}
function Sl(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var Zo = function(t, n, r, o) {
  var a = Object.keys(t), i = a.length, s = n, c, l, u;
  for (r === void 0 ? (c = 1, u = t[a[0]]) : (c = 0, u = r); c < i; c++)
    l = a[c], u = s(u, t[l], l, t);
  return u;
};
function Cm(e) {
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
function Oi(e) {
  const t = Cm(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Pm(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), o;
  return r >= 55296 && r <= 56319 && n > t + 1 && (o = e.charCodeAt(t + 1), o >= 56320 && o <= 57343) ? (r - 55296) * 1024 + o - 56320 + 65536 : r;
}
function Ol(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function Ei(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, o = Ol(t);
  typeof St.hooks.addPack == "function" && !r ? St.hooks.addPack(e, Ol(t)) : St.styles[e] = H(H({}, St.styles[e] || {}), o), e === "fas" && Ei("fa", t);
}
const {
  styles: fr,
  shims: km
} = St, Sf = Object.keys(ys), Tm = Sf.reduce((e, t) => (e[t] = Object.keys(ys[t]), e), {});
let bs = null, Of = {}, Ef = {}, Af = {}, Cf = {}, Pf = {};
function Dm(e) {
  return ~hm.indexOf(e);
}
function $m(e, t) {
  const n = t.split("-"), r = n[0], o = n.slice(1).join("-");
  return r === e && o !== "" && !Dm(o) ? o : null;
}
const kf = () => {
  const e = (r) => Zo(fr, (o, a, i) => (o[i] = Zo(a, r, {}), o), {});
  Of = e((r, o, a) => (o[3] && (r[o[3]] = a), o[2] && o[2].filter((s) => typeof s == "number").forEach((s) => {
    r[s.toString(16)] = a;
  }), r)), Ef = e((r, o, a) => (r[a] = a, o[2] && o[2].filter((s) => typeof s == "string").forEach((s) => {
    r[s] = a;
  }), r)), Pf = e((r, o, a) => {
    const i = o[2];
    return r[a] = a, i.forEach((s) => {
      r[s] = a;
    }), r;
  });
  const t = "far" in fr || Q.autoFetchSvg, n = Zo(km, (r, o) => {
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
  Af = n.names, Cf = n.unicodes, bs = vo(Q.styleDefault, {
    family: Q.familyDefault
  });
};
gm((e) => {
  bs = vo(e.styleDefault, {
    family: Q.familyDefault
  });
});
kf();
function ws(e, t) {
  return (Of[e] || {})[t];
}
function Fm(e, t) {
  return (Ef[e] || {})[t];
}
function an(e, t) {
  return (Pf[e] || {})[t];
}
function Tf(e) {
  return Af[e] || {
    prefix: null,
    iconName: null
  };
}
function Im(e) {
  const t = Cf[e], n = ws("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Jt() {
  return bs;
}
const Df = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Rm(e) {
  let t = Be;
  const n = Sf.reduce((r, o) => (r[o] = "".concat(Q.cssPrefix, "-").concat(o), r), {});
  return cf.forEach((r) => {
    (e.includes(n[r]) || e.some((o) => Tm[r].includes(o))) && (t = r);
  }), t;
}
function vo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = Be
  } = t, r = um[n][e];
  if (n === yo && !e)
    return "fad";
  const o = wl[n][e] || wl[n][r], a = e in St.styles ? e : null;
  return o || a || null;
}
function Lm(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const o = $m(Q.cssPrefix, r);
    o ? n = o : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function El(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function bo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const o = gi.concat(Jh), a = El(e.filter((f) => o.includes(f))), i = El(e.filter((f) => !gi.includes(f))), s = a.filter((f) => (r = f, !uf.includes(f))), [c = null] = s, l = Rm(a), u = H(H({}, Lm(i)), {}, {
    prefix: vo(c, {
      family: l
    })
  });
  return H(H(H({}, u), Nm({
    values: e,
    family: l,
    styles: fr,
    config: Q,
    canonical: u,
    givenPrefix: r
  })), _m(n, r, u));
}
function _m(e, t, n) {
  let {
    prefix: r,
    iconName: o
  } = n;
  if (e || !r || !o)
    return {
      prefix: r,
      iconName: o
    };
  const a = t === "fa" ? Tf(o) : {}, i = an(r, o);
  return o = a.iconName || i || o, r = a.prefix || r, r === "far" && !fr.far && fr.fas && !Q.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: o
  };
}
const Bm = cf.filter((e) => e !== Be || e !== yo), Mm = Object.keys(yi).filter((e) => e !== Be).map((e) => Object.keys(yi[e])).flat();
function Nm(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: o = "",
    styles: a = {},
    config: i = {}
  } = e, s = n === yo, c = t.includes("fa-duotone") || t.includes("fad"), l = i.familyDefault === "duotone", u = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!s && (c || l || u) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && Bm.includes(n) && (Object.keys(a).find((p) => Mm.includes(p)) || i.autoFetchSvg)) {
    const p = zh.get(n).defaultShortPrefixId;
    r.prefix = p, r.iconName = an(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || o === "fa") && (r.prefix = Jt() || "fas"), r;
}
class jm {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const o = n.reduce(this._pullDefinitions, {});
    Object.keys(o).forEach((a) => {
      this.definitions[a] = H(H({}, this.definitions[a] || {}), o[a]), Ei(a, o[a]);
      const i = ys[Be][a];
      i && Ei(i, o[a]), kf();
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
let Al = [], Tn = {};
const Fn = {}, qm = Object.keys(Fn);
function Um(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return Al = e, Tn = {}, Object.keys(Fn).forEach((r) => {
    qm.indexOf(r) === -1 && delete Fn[r];
  }), Al.forEach((r) => {
    const o = r.mixout ? r.mixout() : {};
    if (Object.keys(o).forEach((a) => {
      typeof o[a] == "function" && (n[a] = o[a]), typeof o[a] == "object" && Object.keys(o[a]).forEach((i) => {
        n[a] || (n[a] = {}), n[a][i] = o[a][i];
      });
    }), r.hooks) {
      const a = r.hooks();
      Object.keys(a).forEach((i) => {
        Tn[i] || (Tn[i] = []), Tn[i].push(a[i]);
      });
    }
    r.provides && r.provides(Fn);
  }), n;
}
function Ai(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    r[o - 2] = arguments[o];
  return (Tn[e] || []).forEach((i) => {
    t = i.apply(null, [t, ...r]);
  }), t;
}
function dn(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (Tn[e] || []).forEach((a) => {
    a.apply(null, n);
  });
}
function Qt() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Fn[e] ? Fn[e].apply(null, t) : void 0;
}
function Ci(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || Jt();
  if (t)
    return t = an(n, t) || t, Sl($f.definitions, n, t) || Sl(St.styles, n, t);
}
const $f = new jm(), zm = () => {
  Q.autoReplaceSvg = !1, Q.observeMutations = !1, dn("noAuto");
}, Vm = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return qt ? (dn("beforeI2svg", e), Qt("pseudoElements2svg", e), Qt("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    Q.autoReplaceSvg === !1 && (Q.autoReplaceSvg = !0), Q.observeMutations = !0, Am(() => {
      Wm({
        autoReplaceSvgRoot: t
      }), dn("watch", e);
    });
  }
}, Hm = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: an(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = vo(e[0]);
      return {
        prefix: n,
        iconName: an(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(Q.cssPrefix, "-")) > -1 || e.match(cm))) {
      const t = bo(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || Jt(),
        iconName: an(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = Jt();
      return {
        prefix: t,
        iconName: an(t, e) || e
      };
    }
  }
}, tt = {
  noAuto: zm,
  config: Q,
  dom: Vm,
  parse: Hm,
  library: $f,
  findIconDefinition: Ci,
  toHtml: vr
}, Wm = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = ye
  } = e;
  (Object.keys(St.styles).length > 0 || Q.autoFetchSvg) && qt && Q.autoReplaceSvg && tt.dom.i2svg({
    node: t
  });
};
function wo(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => vr(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!qt) return;
      const n = ye.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function Km(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: o,
    styles: a,
    transform: i
  } = e;
  if (vs(i) && n.found && !r.found) {
    const {
      width: s,
      height: c
    } = n, l = {
      x: s / c / 2,
      y: 0.5
    };
    o.style = go(H(H({}, a), {}, {
      "transform-origin": "".concat(l.x + i.x / 16, "em ").concat(l.y + i.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: o,
    children: t
  }];
}
function Gm(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: o,
    symbol: a
  } = e;
  const i = a === !0 ? "".concat(t, "-").concat(Q.cssPrefix, "-").concat(n) : a;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: H(H({}, o), {}, {
        id: i
      }),
      children: r
    }]
  }];
}
function xs(e) {
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
  } = n.found ? n : t, d = Gh.includes(r), x = [Q.replacementClass, o ? "".concat(Q.cssPrefix, "-").concat(o) : ""].filter((P) => u.classes.indexOf(P) === -1).filter((P) => P !== "" || !!P).concat(u.classes).join(" ");
  let g = {
    children: [],
    attributes: H(H({}, u.attributes), {}, {
      "data-prefix": r,
      "data-icon": o,
      class: x,
      role: u.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(p, " ").concat(h)
    })
  };
  const m = d && !~u.classes.indexOf("fa-fw") ? {
    width: "".concat(p / h * 16 * 0.0625, "em")
  } : {};
  f && (g.attributes[fn] = ""), s && (g.children.push({
    tag: "title",
    attributes: {
      id: g.attributes["aria-labelledby"] || "title-".concat(l || cr())
    },
    children: [s]
  }), delete g.attributes.title);
  const v = H(H({}, g), {}, {
    prefix: r,
    iconName: o,
    main: t,
    mask: n,
    maskId: c,
    transform: a,
    symbol: i,
    styles: H(H({}, m), u.styles)
  }), {
    children: w,
    attributes: C
  } = n.found && t.found ? Qt("generateAbstractMask", v) || {
    children: [],
    attributes: {}
  } : Qt("generateAbstractIcon", v) || {
    children: [],
    attributes: {}
  };
  return v.children = w, v.attributes = C, i ? Gm(v) : Km(v);
}
function Cl(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: o,
    title: a,
    extra: i,
    watchable: s = !1
  } = e, c = H(H(H({}, i.attributes), a ? {
    title: a
  } : {}), {}, {
    class: i.classes.join(" ")
  });
  s && (c[fn] = "");
  const l = H({}, i.styles);
  vs(o) && (l.transform = Sm({
    transform: o,
    startCentered: !0,
    width: n,
    height: r
  }), l["-webkit-transform"] = l.transform);
  const u = go(l);
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
function Ym(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, o = H(H(H({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), a = go(r.styles);
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
  styles: ea
} = St;
function Pi(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let o = null;
  return Array.isArray(r) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(Q.cssPrefix, "-").concat(Jo.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(Q.cssPrefix, "-").concat(Jo.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(Q.cssPrefix, "-").concat(Jo.PRIMARY),
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
const Xm = {
  found: !1,
  width: 512,
  height: 512
};
function Jm(e, t) {
  !hf && !Q.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function ki(e, t) {
  let n = t;
  return t === "fa" && Q.styleDefault !== null && (t = Jt()), new Promise((r, o) => {
    if (n === "fa") {
      const a = Tf(e) || {};
      e = a.iconName || e, t = a.prefix || t;
    }
    if (e && t && ea[t] && ea[t][e]) {
      const a = ea[t][e];
      return r(Pi(a));
    }
    Jm(e, t), r(H(H({}, Xm), {}, {
      icon: Q.showMissingIcons && e ? Qt("missingIconAbstract") || {} : {}
    }));
  });
}
const Pl = () => {
}, Ti = Q.measurePerformance && Ir && Ir.mark && Ir.measure ? Ir : {
  mark: Pl,
  measure: Pl
}, er = 'FA "6.7.2"', Qm = (e) => (Ti.mark("".concat(er, " ").concat(e, " begins")), () => Ff(e)), Ff = (e) => {
  Ti.mark("".concat(er, " ").concat(e, " ends")), Ti.measure("".concat(er, " ").concat(e), "".concat(er, " ").concat(e, " begins"), "".concat(er, " ").concat(e, " ends"));
};
var Ss = {
  begin: Qm,
  end: Ff
};
const Vr = () => {
};
function kl(e) {
  return typeof (e.getAttribute ? e.getAttribute(fn) : null) == "string";
}
function Zm(e) {
  const t = e.getAttribute ? e.getAttribute(hs) : null, n = e.getAttribute ? e.getAttribute(ms) : null;
  return t && n;
}
function ey(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(Q.replacementClass);
}
function ty() {
  return Q.autoReplaceSvg === !0 ? Hr.replace : Hr[Q.autoReplaceSvg] || Hr.replace;
}
function ny(e) {
  return ye.createElementNS("http://www.w3.org/2000/svg", e);
}
function ry(e) {
  return ye.createElement(e);
}
function If(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? ny : ry
  } = t;
  if (typeof e == "string")
    return ye.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(a) {
    r.setAttribute(a, e.attributes[a]);
  }), (e.children || []).forEach(function(a) {
    r.appendChild(If(a, {
      ceFn: n
    }));
  }), r;
}
function oy(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Hr = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(If(n), t);
      }), t.getAttribute(fn) === null && Q.keepOriginalSource) {
        let n = ye.createComment(oy(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~gs(t).indexOf(Q.replacementClass))
      return Hr.replace(e);
    const r = new RegExp("".concat(Q.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const a = n[0].attributes.class.split(" ").reduce((i, s) => (s === Q.replacementClass || s.match(r) ? i.toSvg.push(s) : i.toNode.push(s), i), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", a.toNode.join(" "));
    }
    const o = n.map((a) => vr(a)).join(`
`);
    t.setAttribute(fn, ""), t.innerHTML = o;
  }
};
function Tl(e) {
  e();
}
function Rf(e, t) {
  const n = typeof t == "function" ? t : Vr;
  if (e.length === 0)
    n();
  else {
    let r = Tl;
    Q.mutateApproach === sm && (r = Xt.requestAnimationFrame || Tl), r(() => {
      const o = ty(), a = Ss.begin("mutate");
      e.map(o), a(), n();
    });
  }
}
let Os = !1;
function Lf() {
  Os = !0;
}
function Di() {
  Os = !1;
}
let to = null;
function Dl(e) {
  if (!yl || !Q.observeMutations)
    return;
  const {
    treeCallback: t = Vr,
    nodeCallback: n = Vr,
    pseudoElementsCallback: r = Vr,
    observeMutationsRoot: o = ye
  } = e;
  to = new yl((a) => {
    if (Os) return;
    const i = Jt();
    Mn(a).forEach((s) => {
      if (s.type === "childList" && s.addedNodes.length > 0 && !kl(s.addedNodes[0]) && (Q.searchPseudoElements && r(s.target), t(s.target)), s.type === "attributes" && s.target.parentNode && Q.searchPseudoElements && r(s.target.parentNode), s.type === "attributes" && kl(s.target) && ~pm.indexOf(s.attributeName))
        if (s.attributeName === "class" && Zm(s.target)) {
          const {
            prefix: c,
            iconName: l
          } = bo(gs(s.target));
          s.target.setAttribute(hs, c || i), l && s.target.setAttribute(ms, l);
        } else ey(s.target) && n(s.target);
    });
  }), qt && to.observe(o, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function ay() {
  to && to.disconnect();
}
function iy(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, o) => {
    const a = o.split(":"), i = a[0], s = a.slice(1);
    return i && s.length > 0 && (r[i] = s.join(":").trim()), r;
  }, {})), n;
}
function sy(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let o = bo(gs(e));
  return o.prefix || (o.prefix = Jt()), t && n && (o.prefix = t, o.iconName = n), o.iconName && o.prefix || (o.prefix && r.length > 0 && (o.iconName = Fm(o.prefix, e.innerText) || ws(o.prefix, Oi(e.innerText))), !o.iconName && Q.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (o.iconName = e.firstChild.data)), o;
}
function ly(e) {
  const t = Mn(e.attributes).reduce((o, a) => (o.name !== "class" && o.name !== "style" && (o[a.name] = a.value), o), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return Q.autoA11y && (n ? t["aria-labelledby"] = "".concat(Q.replacementClass, "-title-").concat(r || cr()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function uy() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: xt,
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
function $l(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: o
  } = sy(e), a = ly(e), i = Ai("parseNodeAttributes", {}, e);
  let s = t.styleParser ? iy(e) : [];
  return H({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: xt,
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
  styles: cy
} = St;
function _f(e) {
  const t = Q.autoReplaceSvg === "nest" ? $l(e, {
    styleParser: !1
  }) : $l(e);
  return ~t.extra.classes.indexOf(yf) ? Qt("generateLayersText", e, t) : Qt("generateSvgReplacementMutation", e, t);
}
function fy() {
  return [...Hh, ...gi];
}
function Fl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!qt) return Promise.resolve();
  const n = ye.documentElement.classList, r = (u) => n.add("".concat(bl, "-").concat(u)), o = (u) => n.remove("".concat(bl, "-").concat(u)), a = Q.autoFetchSvg ? fy() : uf.concat(Object.keys(cy));
  a.includes("fa") || a.push("fa");
  const i = [".".concat(yf, ":not([").concat(fn, "])")].concat(a.map((u) => ".".concat(u, ":not([").concat(fn, "])"))).join(", ");
  if (i.length === 0)
    return Promise.resolve();
  let s = [];
  try {
    s = Mn(e.querySelectorAll(i));
  } catch {
  }
  if (s.length > 0)
    r("pending"), o("complete");
  else
    return Promise.resolve();
  const c = Ss.begin("onTree"), l = s.reduce((u, f) => {
    try {
      const p = _f(f);
      p && u.push(p);
    } catch (p) {
      hf || p.name === "MissingIcon" && console.error(p);
    }
    return u;
  }, []);
  return new Promise((u, f) => {
    Promise.all(l).then((p) => {
      Rf(p, () => {
        r("active"), r("complete"), o("pending"), typeof t == "function" && t(), c(), u();
      });
    }).catch((p) => {
      c(), f(p);
    });
  });
}
function dy(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  _f(e).then((n) => {
    n && Rf([n], t);
  });
}
function py(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : Ci(t || {});
    let {
      mask: o
    } = n;
    return o && (o = (o || {}).icon ? o : Ci(o || {})), e(r, H(H({}, n), {}, {
      mask: o
    }));
  };
}
const hy = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = xt,
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
  return wo(H({
    type: "icon"
  }, e), () => (dn("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), Q.autoA11y && (i ? l["aria-labelledby"] = "".concat(Q.replacementClass, "-title-").concat(s || cr()) : (l["aria-hidden"] = "true", l.focusable = "false")), xs({
    icons: {
      main: Pi(h),
      mask: o ? Pi(o.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: f,
    iconName: p,
    transform: H(H({}, xt), n),
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
var my = {
  mixout() {
    return {
      icon: py(hy)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = Fl, e.nodeCallback = dy, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = ye,
        callback: r = () => {
        }
      } = t;
      return Fl(n, r);
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
        Promise.all([ki(r, i), l.iconName ? ki(l.iconName, l.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((d) => {
          let [x, g] = d;
          p([t, xs({
            icons: {
              main: x,
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
      const s = go(i);
      s.length > 0 && (r.style = s);
      let c;
      return vs(a) && (c = Qt("generateAbstractTransformGrouping", {
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
}, yy = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return wo({
          type: "layer"
        }, () => {
          dn("beforeDOMElementCreation", {
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
              class: ["".concat(Q.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, gy = {
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
        return wo({
          type: "counter",
          content: e
        }, () => (dn("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Ym({
          content: e.toString(),
          title: n,
          extra: {
            attributes: o,
            styles: a,
            classes: ["".concat(Q.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, vy = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = xt,
          title: r = null,
          classes: o = [],
          attributes: a = {},
          styles: i = {}
        } = t;
        return wo({
          type: "text",
          content: e
        }, () => (dn("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Cl({
          content: e,
          transform: H(H({}, xt), n),
          title: r,
          extra: {
            attributes: a,
            styles: i,
            classes: ["".concat(Q.cssPrefix, "-layers-text"), ...o]
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
      if (sf) {
        const c = parseInt(getComputedStyle(t).fontSize, 10), l = t.getBoundingClientRect();
        i = l.width / c, s = l.height / c;
      }
      return Q.autoA11y && !r && (a.attributes["aria-hidden"] = "true"), Promise.resolve([t, Cl({
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
const by = new RegExp('"', "ug"), Il = [1105920, 1112319], Rl = H(H(H(H({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Uh), am), Qh), $i = Object.keys(Rl).reduce((e, t) => (e[t.toLowerCase()] = Rl[t], e), {}), wy = Object.keys($i).reduce((e, t) => {
  const n = $i[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function xy(e) {
  const t = e.replace(by, ""), n = Pm(t, 0), r = n >= Il[0] && n <= Il[1], o = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: Oi(o ? t[0] : t),
    isSecondary: r || o
  };
}
function Sy(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), o = isNaN(r) ? "normal" : r;
  return ($i[n] || {})[o] || wy[n];
}
function Ll(e, t) {
  const n = "".concat(im).concat(t.replace(":", "-"));
  return new Promise((r, o) => {
    if (e.getAttribute(n) !== null)
      return r();
    const i = Mn(e.children).filter((p) => p.getAttribute(bi) === t)[0], s = Xt.getComputedStyle(e, t), c = s.getPropertyValue("font-family"), l = c.match(fm), u = s.getPropertyValue("font-weight"), f = s.getPropertyValue("content");
    if (i && !l)
      return e.removeChild(i), r();
    if (l && f !== "none" && f !== "") {
      const p = s.getPropertyValue("content");
      let h = Sy(c, u);
      const {
        value: d,
        isSecondary: x
      } = xy(p), g = l[0].startsWith("FontAwesome");
      let m = ws(h, d), v = m;
      if (g) {
        const w = Im(d);
        w.iconName && w.prefix && (m = w.iconName, h = w.prefix);
      }
      if (m && !x && (!i || i.getAttribute(hs) !== h || i.getAttribute(ms) !== v)) {
        e.setAttribute(n, v), i && e.removeChild(i);
        const w = uy(), {
          extra: C
        } = w;
        C.attributes[bi] = t, ki(m, h).then((P) => {
          const $ = xs(H(H({}, w), {}, {
            icons: {
              main: P,
              mask: Df()
            },
            prefix: h,
            iconName: v,
            extra: C,
            watchable: !0
          })), I = ye.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(I, e.firstChild) : e.appendChild(I), I.outerHTML = $.map((U) => vr(U)).join(`
`), e.removeAttribute(n), r();
        }).catch(o);
      } else
        r();
    } else
      r();
  });
}
function Oy(e) {
  return Promise.all([Ll(e, "::before"), Ll(e, "::after")]);
}
function Ey(e) {
  return e.parentNode !== document.head && !~lm.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(bi) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function _l(e) {
  if (qt)
    return new Promise((t, n) => {
      const r = Mn(e.querySelectorAll("*")).filter(Ey).map(Oy), o = Ss.begin("searchPseudoElements");
      Lf(), Promise.all(r).then(() => {
        o(), Di(), t();
      }).catch(() => {
        o(), Di(), n();
      });
    });
}
var Ay = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = _l, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = ye
      } = t;
      Q.searchPseudoElements && _l(n);
    };
  }
};
let Bl = !1;
var Cy = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Lf(), Bl = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        Dl(Ai("mutationObserverCallbacks", {}));
      },
      noAuto() {
        ay();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        Bl ? Di() : Dl(Ai("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const Ml = (e) => {
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
var Py = {
  mixout() {
    return {
      parse: {
        transform: (e) => Ml(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = Ml(n)), e;
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
        attributes: H({}, p.outer),
        children: [{
          tag: "g",
          attributes: H({}, p.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: H(H({}, n.icon.attributes), p.path)
          }]
        }]
      };
    };
  }
};
const ta = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Nl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function ky(e) {
  return e.tag === "g" ? e.children : [e];
}
var Ty = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? bo(n.split(" ").map((o) => o.trim())) : Df();
        return r.prefix || (r.prefix = Jt()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
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
      } = a, p = xm({
        transform: s,
        containerWidth: u,
        iconWidth: c
      }), h = {
        tag: "rect",
        attributes: H(H({}, ta), {}, {
          fill: "white"
        })
      }, d = l.children ? {
        children: l.children.map(Nl)
      } : {}, x = {
        tag: "g",
        attributes: H({}, p.inner),
        children: [Nl(H({
          tag: l.tag,
          attributes: H(H({}, l.attributes), p.path)
        }, d))]
      }, g = {
        tag: "g",
        attributes: H({}, p.outer),
        children: [x]
      }, m = "mask-".concat(i || cr()), v = "clip-".concat(i || cr()), w = {
        tag: "mask",
        attributes: H(H({}, ta), {}, {
          id: m,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [h, g]
      }, C = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: v
          },
          children: ky(f)
        }, w]
      };
      return n.push(C, {
        tag: "rect",
        attributes: H({
          fill: "currentColor",
          "clip-path": "url(#".concat(v, ")"),
          mask: "url(#".concat(m, ")")
        }, ta)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, Dy = {
  provides(e) {
    let t = !1;
    Xt.matchMedia && (t = Xt.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, o = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: H(H({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const a = H(H({}, o), {}, {
        attributeName: "opacity"
      }), i = {
        tag: "circle",
        attributes: H(H({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || i.children.push({
        tag: "animate",
        attributes: H(H({}, o), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: H(H({}, a), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(i), n.push({
        tag: "path",
        attributes: H(H({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: H(H({}, a), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: H(H({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: H(H({}, a), {}, {
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
}, $y = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, Fy = [Em, my, yy, gy, vy, Ay, Cy, Py, Ty, Dy, $y];
Um(Fy, {
  mixoutsTo: tt
});
tt.noAuto;
const Bf = tt.config, Nn = tt.library;
tt.dom;
const no = tt.parse;
tt.findIconDefinition;
tt.toHtml;
const Iy = tt.icon;
tt.layer;
const Ry = tt.text;
tt.counter;
function jl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ft(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jl(Object(n), !0).forEach(function(r) {
      ze(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jl(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ly(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _y(e) {
  var t = Ly(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ro(e) {
  "@babel/helpers - typeof";
  return ro = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ro(e);
}
function ze(e, t, n) {
  return t = _y(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function By(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function My(e, t) {
  if (e == null) return {};
  var n = By(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Fi(e) {
  return Ny(e) || jy(e) || qy(e) || Uy();
}
function Ny(e) {
  if (Array.isArray(e)) return Ii(e);
}
function jy(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function qy(e, t) {
  if (e) {
    if (typeof e == "string") return Ii(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ii(e, t);
  }
}
function Ii(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Uy() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var zy = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Mf = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(m, v, w) {
      if (!l(v) || f(v) || p(v) || h(v) || c(v))
        return v;
      var C, P = 0, $ = 0;
      if (u(v))
        for (C = [], $ = v.length; P < $; P++)
          C.push(n(m, v[P], w));
      else {
        C = {};
        for (var I in v)
          Object.prototype.hasOwnProperty.call(v, I) && (C[m(I, w)] = n(m, v[I], w));
      }
      return C;
    }, r = function(m, v) {
      v = v || {};
      var w = v.separator || "_", C = v.split || /(?=[A-Z])/;
      return m.split(C).join(w);
    }, o = function(m) {
      return d(m) ? m : (m = m.replace(/[\-_\s]+(.)?/g, function(v, w) {
        return w ? w.toUpperCase() : "";
      }), m.substr(0, 1).toLowerCase() + m.substr(1));
    }, a = function(m) {
      var v = o(m);
      return v.substr(0, 1).toUpperCase() + v.substr(1);
    }, i = function(m, v) {
      return r(m, v).toLowerCase();
    }, s = Object.prototype.toString, c = function(m) {
      return typeof m == "function";
    }, l = function(m) {
      return m === Object(m);
    }, u = function(m) {
      return s.call(m) == "[object Array]";
    }, f = function(m) {
      return s.call(m) == "[object Date]";
    }, p = function(m) {
      return s.call(m) == "[object RegExp]";
    }, h = function(m) {
      return s.call(m) == "[object Boolean]";
    }, d = function(m) {
      return m = m - 0, m === m;
    }, x = function(m, v) {
      var w = v && "process" in v ? v.process : v;
      return typeof w != "function" ? m : function(C, P) {
        return w(C, m, P);
      };
    }, g = {
      camelize: o,
      decamelize: i,
      pascalize: a,
      depascalize: i,
      camelizeKeys: function(m, v) {
        return n(x(o, v), m);
      },
      decamelizeKeys: function(m, v) {
        return n(x(i, v), m, v);
      },
      pascalizeKeys: function(m, v) {
        return n(x(a, v), m);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = g : t.humps = g;
  })(zy);
})(Mf);
var Vy = Mf.exports, Hy = ["class", "style"];
function Wy(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), o = Vy.camelize(n.slice(0, r)), a = n.slice(r + 1).trim();
    return t[o] = a, t;
  }, {});
}
function Ky(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function Es(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var r = (e.children || []).map(function(c) {
    return Es(c);
  }), o = Object.keys(e.attributes || {}).reduce(function(c, l) {
    var u = e.attributes[l];
    switch (l) {
      case "class":
        c.class = Ky(u);
        break;
      case "style":
        c.style = Wy(u);
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
  var a = n.style, i = a === void 0 ? {} : a, s = My(n, Hy);
  return qe(e.tag, ft(ft(ft({}, t), {}, {
    class: o.class,
    style: ft(ft({}, o.style), i)
  }, o.attrs), s), r);
}
var Nf = !1;
try {
  Nf = process.env.NODE_ENV === "production";
} catch {
}
function Gy() {
  if (!Nf && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function sr(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? ze({}, e, t) : {};
}
function Yy(e) {
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
  }, ze(ze(ze(ze(ze(ze(ze(ze(ze(ze(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), "fa-flash", e.flash), ze(ze(t, "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse));
  return Object.keys(n).map(function(r) {
    return n[r] ? r : null;
  }).filter(function(r) {
    return r;
  });
}
function ql(e) {
  if (e && ro(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (no.icon)
    return no.icon(e);
  if (e === null)
    return null;
  if (ro(e) === "object" && e.prefix && e.iconName)
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
var De = X({
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
      return ql(t.icon);
    }), a = W(function() {
      return sr("classes", Yy(t));
    }), i = W(function() {
      return sr("transform", typeof t.transform == "string" ? no.transform(t.transform) : t.transform);
    }), s = W(function() {
      return sr("mask", ql(t.mask));
    }), c = W(function() {
      return Iy(o.value, ft(ft(ft(ft({}, a.value), i.value), s.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    de(c, function(u) {
      if (!u)
        return Gy("Could not find one or more icon(s)", o.value, s.value);
    }, {
      immediate: !0
    });
    var l = W(function() {
      return c.value ? Es(c.value.abstract[0], {}, r) : null;
    });
    return function() {
      return l.value;
    };
  }
});
X({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var r = n.slots, o = Bf.familyPrefix, a = W(function() {
      return ["".concat(o, "-layers")].concat(Fi(t.fixedWidth ? ["".concat(o, "-fw")] : []));
    });
    return function() {
      return qe("div", {
        class: a.value
      }, r.default ? r.default() : []);
    };
  }
});
X({
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
    var r = n.attrs, o = Bf.familyPrefix, a = W(function() {
      return sr("classes", [].concat(Fi(t.counter ? ["".concat(o, "-layers-counter")] : []), Fi(t.position ? ["".concat(o, "-layers-").concat(t.position)] : [])));
    }), i = W(function() {
      return sr("transform", typeof t.transform == "string" ? no.transform(t.transform) : t.transform);
    }), s = W(function() {
      var l = Ry(t.value.toString(), ft(ft({}, i.value), a.value)), u = l.abstract;
      return t.counter && (u[0].attributes.class = u[0].attributes.class.replace("fa-layers-text", "")), u[0];
    }), c = W(function() {
      return Es(s.value, {}, r);
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
const Xy = {
  prefix: "fas",
  iconName: "sort-down",
  icon: [320, 512, ["sort-desc"], "f0dd", "M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"]
}, Ri = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, Jy = {
  prefix: "fas",
  iconName: "box-archive",
  icon: [512, 512, ["archive"], "f187", "M32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64C0 46.3 14.3 32 32 32zm0 128l448 0 0 256c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-256zm128 80c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16z"]
}, Ul = {
  prefix: "fas",
  iconName: "pen-ruler",
  icon: [512, 512, ["pencil-ruler"], "f5ae", "M469.3 19.3l23.4 23.4c25 25 25 65.5 0 90.5l-56.4 56.4L322.3 75.7l56.4-56.4c25-25 65.5-25 90.5 0zM44.9 353.2L299.7 98.3 413.7 212.3 158.8 467.1c-6.7 6.7-15.1 11.6-24.2 14.2l-104 29.7c-8.4 2.4-17.4 .1-23.6-6.1s-8.5-15.2-6.1-23.6l29.7-104c2.6-9.2 7.5-17.5 14.2-24.2zM249.4 103.4L103.4 249.4 16 161.9c-18.7-18.7-18.7-49.1 0-67.9L94.1 16c18.7-18.7 49.1-18.7 67.9 0l19.8 19.8c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1l45.1 45.1zM408.6 262.6l45.1 45.1c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1L496 350.1c18.7 18.7 18.7 49.1 0 67.9L417.9 496c-18.7 18.7-49.1 18.7-67.9 0l-87.4-87.4L408.6 262.6z"]
}, Qy = {
  prefix: "fas",
  iconName: "circle-chevron-down",
  icon: [512, 512, ["chevron-circle-down"], "f13a", "M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"]
}, xo = Qy, Zy = {
  prefix: "fas",
  iconName: "square-check",
  icon: [448, 512, [9745, 9989, 61510, "check-square"], "f14a", "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, zl = {
  prefix: "fas",
  iconName: "eye-slash",
  icon: [640, 512, [], "f070", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]
}, eg = {
  prefix: "fas",
  iconName: "circle-chevron-up",
  icon: [512, 512, ["chevron-circle-up"], "f139", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM377 271c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-87-87-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 167c9.4-9.4 24.6-9.4 33.9 0L377 271z"]
}, tg = eg, Li = {
  prefix: "fas",
  iconName: "circle-question",
  icon: [512, 512, [62108, "question-circle"], "f059", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, Vl = {
  prefix: "fas",
  iconName: "eye",
  icon: [576, 512, [128065], "f06e", "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]
}, ng = {
  prefix: "fas",
  iconName: "sort-up",
  icon: [320, 512, ["sort-asc"], "f0de", "M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]
}, rg = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]
}, og = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, ag = og, ig = {
  prefix: "fas",
  iconName: "spinner",
  icon: [512, 512, [], "f110", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]
}, sg = {
  prefix: "fas",
  iconName: "calendar",
  icon: [448, 512, [128197, 128198], "f133", "M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"]
};
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const lg = {
  prefix: "far",
  iconName: "square",
  icon: [448, 512, [9632, 9723, 9724, 61590], "f0c8", "M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]
};
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const jf = {
  prefix: "fab",
  iconName: "whatsapp",
  icon: [448, 512, [], "f232", "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]
}, So = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, ug = { class: "relative flex w-full max-w-full items-stretch" }, cg = {
  key: 0,
  class: "flex items-center"
}, fg = {
  key: 1,
  class: "mr-1"
}, dg = ["id", "disabled", "required", "name"], pg = { key: 5 }, hg = ["id", "required", "disabled", "name"], mg = {
  key: 0,
  class: "border-gray flex items-center rounded rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center whitespace-nowrap text-gray-500"
}, yg = ["id", "rows", "required", "disabled", "autocomplete", "placeholder", "autofocus", "name"], gg = {
  key: 2,
  class: "relative flex w-full"
}, vg = ["href"], bg = {
  __name: "Input",
  props: /* @__PURE__ */ hi({
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
    error: String,
    tooltip: String
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ hi(["changed", "update:modelValue"], ["update:modelValue"]),
  setup(e, { expose: t, emit: n }) {
    Nn.add(jf, Zy, lg, Vl, zl, Li);
    const r = e;
    function o(x) {
      let g = [];
      return x.split("_").join(" ").split(" ").map(function(m) {
        g.push(m[0].toUpperCase() + m.slice(1));
      }), g.join(" ");
    }
    const a = n, i = q(!1), s = Hc(e, "modelValue"), c = q(), l = q(), u = q(r.type);
    be(() => {
      i.value = !r.form, c.value = i.value ? s.value : r.form[r.field];
    }), de(
      () => c.value,
      (x, g) => {
        if (x !== g) {
          if (i.value ? s.value = x : r.form[r.field] = x, l.value = g, a("update:modelValue", x), f.value) {
            f.value = !1;
            return;
          }
          a("changed", { value: x, old_value: g });
        }
      }
    );
    const f = q(!1), p = (x) => {
      c.value = x, f.value = !0;
    }, h = () => l.value;
    de(
      () => r.field ? r.form[r.field] : null,
      (x) => {
        c.value = i.value ? s.value : x;
      },
      {
        deep: !0
      }
    ), de(
      () => s.value,
      (x) => {
        c.value = x;
      }
    );
    const d = () => {
      u.value = u.value === "password" ? "text" : "password";
    };
    return t({
      togglePassword: d,
      setValueSilently: p,
      getPreviousValue: h
    }), (x, g) => {
      var m, v, w, C, P, $, I, U, T;
      return E(), F("div", {
        class: ee(e.noLabel ? "mb-2" : "mb-4")
      }, [
        e.noLabel ? J("", !0) : (E(), V(b(As), {
          key: 0,
          customClass: e.labelCustomClass,
          for: e.field,
          value: e.label ? e.label : e.field ? o(e.field) : "",
          sublabel: e.sublabel,
          required: e.required,
          tooltip: e.tooltip
        }, null, 8, ["customClass", "for", "value", "sublabel", "required", "tooltip"])),
        z("div", ug, [
          e.type === "switch" || e.type === "checkbox" ? (E(), F("label", cg, [
            (m = x.$slots) != null && m.leftDescription ? j(x.$slots, "leftDescription", { key: 0 }, void 0, !0) : e.leftDescription ? (E(), F("span", fg, Z(e.leftDescription ? e.leftDescription : "Disable"), 1)) : J("", !0),
            ot(z("input", {
              id: e.field,
              type: "checkbox",
              class: "hidden",
              "onUpdate:modelValue": g[0] || (g[0] = (k) => c.value = k),
              disabled: r.disabled,
              required: r.required,
              name: e.name ?? e.field
            }, null, 8, dg), [
              [Vc, c.value]
            ]),
            e.type === "switch" ? (E(), F("div", {
              key: 2,
              tabindex: "0",
              class: ee(["toggle-switch focusable ml-0!", {
                checked: c.value,
                disabled: r.disabled
              }])
            }, null, 2)) : (E(), F("div", {
              key: 3,
              tabindex: "0",
              class: ee(["focusable text-primary mr-1 p-1", {
                "text-gray-500!": r.disabled,
                [e.checkboxCustomClass]: e.checkboxCustomClass
              }])
            }, [
              Y(un, {
                name: "popup",
                mode: "out-in"
              }, {
                default: M(() => [
                  r.form[e.field] ? (E(), V(b(De), {
                    key: "checked",
                    icon: "fas fa-square-check"
                  })) : (E(), V(b(De), {
                    key: "unchecked",
                    icon: "far fa-square"
                  }))
                ]),
                _: 1
              })
            ], 2)),
            (v = x.$slots) != null && v.rightDescription ? j(x.$slots, "rightDescription", { key: 4 }, void 0, !0) : e.rightDescription ? (E(), F("span", pg, Z(e.rightDescription), 1)) : J("", !0)
          ])) : e.type === "select" ? ot((E(), F("select", {
            key: 1,
            "onUpdate:modelValue": g[1] || (g[1] = (k) => c.value = k),
            id: e.field,
            required: r.required,
            disabled: r.disabled,
            name: e.name ?? e.field,
            class: ee(["focusable block w-full rounded disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500", { [e.inputCustomClass]: !!e.inputCustomClass }])
          }, [
            j(x.$slots, "default", {}, void 0, !0)
          ], 10, hg)), [
            [Oh, c.value]
          ]) : (E(), F(le, { key: 2 }, [
            e.addon ? (E(), F("span", mg, Z(e.addon), 1)) : J("", !0),
            e.type === "textarea" ? ot((E(), F("textarea", {
              key: 1,
              id: e.field,
              class: ee(["focusable relative m-0 block w-full flex-auto disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", {
                "rounded-l-none!": e.addon,
                "rounded-r-none!": !!e.submitBtn || e.whatsApp || ((w = x.$slots) == null ? void 0 : w.submit),
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
            }, null, 10, yg)), [
              [Wc, c.value]
            ]) : (E(), F("div", gg, [
              Y(b(Pg), {
                id: e.field,
                type: u.value,
                class: ee(["focusable relative m-0 block w-full flex-auto disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", {
                  "rounded-l-none!": e.addon,
                  "rounded-r-none!": !!e.submitBtn || e.whatsApp || ((C = x.$slots) == null ? void 0 : C.submit),
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
              e.type == "password" && !e.hidePasswordToggler ? (E(), F("div", {
                key: 0,
                onClick: d,
                class: "absolute top-0 right-0 z-2 flex h-full w-11 cursor-pointer items-center justify-center text-lg leading-normal text-black"
              }, [
                u.value === "password" ? (E(), V(b(De), {
                  key: 0,
                  icon: b(Vl)
                }, null, 8, ["icon"])) : (E(), V(b(De), {
                  key: 1,
                  icon: b(zl)
                }, null, 8, ["icon"]))
              ])) : J("", !0)
            ])),
            e.form ? (E(), F(le, { key: 3 }, [
              e.submitBtn ? (E(), V(b(wc), {
                key: 0,
                form: e.form,
                class: ee(["z-2 inline-block rounded-l-none", e.buttonCustomClass]),
                id: `submit-button-${e.field}`
              }, {
                default: M(() => [
                  pe(Z(e.submitBtn), 1)
                ]),
                _: 1
              }, 8, ["form", "class", "id"])) : J("", !0),
              (P = x.$slots) != null && P.submit ? (E(), V(b(wc), {
                key: 1,
                form: e.form,
                class: ee(["z-2 inline-block rounded-l-none", e.buttonCustomClass]),
                id: "button-input"
              }, {
                default: M(() => [
                  j(x.$slots, "submit", {}, void 0, !0)
                ]),
                _: 3
              }, 8, ["form", "class"])) : J("", !0)
            ], 64)) : J("", !0),
            e.whatsApp ? (E(), F("a", {
              key: 4,
              class: ee(["bg-primary hover:bg-primary-700 focus:bg-primary-600 active:bg-primary-700 z-2 inline-block rounded-r px-2 py-2 text-xs leading-normal font-medium text-white uppercase shadow transition duration-150 ease-in-out hover:shadow-lg focus:z-3 focus:shadow-lg focus:ring-0 focus:outline-hidden active:shadow-lg", e.buttonCustomClass]),
              href: e.whatsApp,
              target: "_blank"
            }, [
              Y(b(De), {
                icon: "fab fa-whatsapp",
                size: "2xl"
              })
            ], 10, vg)) : J("", !0)
          ], 64))
        ]),
        e.error || (I = ($ = e.form) == null ? void 0 : $.errors) != null && I[e.field] ? (E(), V(b(br), {
          key: 1,
          message: e.error ? e.error : (T = (U = e.form) == null ? void 0 : U.errors) == null ? void 0 : T[e.field],
          class: "mt-2"
        }, null, 8, ["message"])) : J("", !0)
      ], 2);
    };
  }
}, wg = /* @__PURE__ */ So(bg, [["__scopeId", "data-v-9b72b33c"]]), xg = { class: "text-sm text-red-600" }, br = {
  __name: "InputError",
  props: ["message"],
  setup(e) {
    return (t, n) => ot((E(), F("div", null, [
      z("p", xg, Z(e.message), 1)
    ], 512)), [
      [$n, e.message]
    ]);
  }
}, Sg = { key: 0 }, Og = { key: 1 }, Eg = {
  key: 3,
  class: "ml-2 text-xs text-gray-500"
}, Ag = {
  key: 4,
  class: "ml-1 text-red-500"
}, As = {
  __name: "InputLabel",
  props: ["value", "sublabel", "required", "customClass", "tooltip"],
  setup(e) {
    return Nn.add(Li), (t, n) => (E(), F("label", {
      class: ee(["mb-1 block text-sm font-medium text-gray-700", e.customClass])
    }, [
      e.value ? (E(), F("span", Sg, Z(e.value), 1)) : (E(), F("span", Og, [
        j(t.$slots, "default")
      ])),
      e.tooltip ? (E(), V(b(CA), {
        key: 2,
        content: e.tooltip,
        class: "ml-1 inline-block"
      }, {
        default: M(() => [
          Y(b(De), {
            icon: b(Li),
            class: "mx-1 cursor-help"
          }, null, 8, ["icon"])
        ]),
        _: 1
      }, 8, ["content"])) : J("", !0),
      e.sublabel ? (E(), F("span", Eg, Z(e.sublabel), 1)) : J("", !0),
      e.required ? (E(), F("span", Ag, "*")) : J("", !0)
    ], 2));
  }
}, Cg = ["value"], Pg = {
  __name: "TextInput",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(e, { expose: t }) {
    const n = q(null);
    return be(() => {
      n.value.hasAttribute("autofocus") && n.value.focus();
    }), t({ focus: () => n.value.focus() }), (r, o) => (E(), F("input", {
      class: "max-w-full rounded border-gray-300 shadow focus:border-accent-500 focus:ring-accent-500",
      value: e.modelValue,
      onInput: o[0] || (o[0] = (a) => r.$emit("update:modelValue", a.target.value)),
      ref_key: "input",
      ref: n
    }, null, 40, Cg));
  }
}, kg = { class: "relative mb-4 flex w-full flex-wrap items-stretch" }, Tg = ["id", "required", "disabled", "autocomplete", "placeholder", "autofocus", "rows"], TA = {
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
    return (r, o) => (E(), F("div", null, [
      e.noLabel ? J("", !0) : (E(), V(b(As), {
        key: 0,
        for: e.field,
        value: e.label ? e.label : n(e.field),
        required: e.required
      }, null, 8, ["for", "value", "required"])),
      z("div", kg, [
        ot(z("textarea", {
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
        }, null, 40, Tg), [
          [Wc, t.form[e.field]]
        ])
      ]),
      Y(b(br), {
        class: "mt-2",
        message: t.form.errors[e.field]
      }, null, 8, ["message"])
    ]));
  }
};
var Dg = Object.defineProperty, $g = Object.defineProperties, Fg = Object.getOwnPropertyDescriptors, Hl = Object.getOwnPropertySymbols, Ig = Object.prototype.hasOwnProperty, Rg = Object.prototype.propertyIsEnumerable, Wl = (e, t, n) => t in e ? Dg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Cn = (e, t) => {
  for (var n in t || (t = {}))
    Ig.call(t, n) && Wl(e, n, t[n]);
  if (Hl)
    for (var n of Hl(t))
      Rg.call(t, n) && Wl(e, n, t[n]);
  return e;
}, Kl = (e, t) => $g(e, Fg(t));
const Lg = {
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
}, _g = {
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
}, Bg = {
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
}, Cs = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Mg = {}, Ng = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, jg = /* @__PURE__ */ z("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), qg = [
  jg
];
function Ug(e, t) {
  return E(), F("svg", Ng, qg);
}
const zg = /* @__PURE__ */ Cs(Mg, [["render", Ug]]), Vg = {}, Hg = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, Wg = /* @__PURE__ */ z("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), Kg = [
  Wg
];
function Gg(e, t) {
  return E(), F("svg", Hg, Kg);
}
const Yg = /* @__PURE__ */ Cs(Vg, [["render", Gg]]), Gl = {
  Deselect: zg,
  OpenIndicator: Yg
}, Xg = {
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
function Jg(e) {
  const t = {};
  return Object.keys(e).sort().forEach((n) => {
    t[n] = e[n];
  }), JSON.stringify(t);
}
let Qg = 0;
function Zg() {
  return ++Qg;
}
const ev = {
  components: Cn({}, Gl),
  directives: { appendToBody: Xg },
  mixins: [Lg, _g, Bg],
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
          return e.hasOwnProperty("id") ? e.id : Jg(e);
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
      default: () => Zg()
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
          attributes: Cn({
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
        header: Kl(Cn({}, e), { deselect: this.deselect }),
        footer: Kl(Cn({}, e), { deselect: this.deselect })
      };
    },
    childComponents() {
      return Cn(Cn({}, Gl), this.components);
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
}, tv = ["dir"], nv = ["id", "aria-expanded", "aria-owns"], rv = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, ov = ["disabled", "title", "aria-label", "onClick"], av = {
  ref: "actions",
  class: "vs__actions"
}, iv = ["disabled"], sv = { class: "vs__spinner" }, lv = ["id"], uv = ["id", "aria-selected", "onMouseover", "onClick"], cv = {
  key: 0,
  class: "vs__no-options"
}, fv = /* @__PURE__ */ pe(" Sorry, no matching options. "), dv = ["id"];
function pv(e, t, n, r, o, a) {
  const i = Eh("append-to-body");
  return E(), F("div", {
    dir: n.dir,
    class: ee(["v-select", a.stateClasses])
  }, [
    j(e.$slots, "header", ve(Ae(a.scope.header))),
    z("div", {
      id: `vs${n.uid}__combobox`,
      ref: "toggle",
      class: "vs__dropdown-toggle",
      role: "combobox",
      "aria-expanded": a.dropdownOpen.toString(),
      "aria-owns": `vs${n.uid}__listbox`,
      "aria-label": "Search for option",
      onMousedown: t[1] || (t[1] = (s) => a.toggleDropdown(s))
    }, [
      z("div", rv, [
        (E(!0), F(le, null, et(a.selectedValue, (s, c) => j(e.$slots, "selected-option-container", {
          option: a.normalizeOptionForSlot(s),
          deselect: a.deselect,
          multiple: n.multiple,
          disabled: n.disabled
        }, () => [
          (E(), F("span", {
            key: n.getOptionKey(s),
            class: "vs__selected"
          }, [
            j(e.$slots, "selected-option", ve(Ae(a.normalizeOptionForSlot(s))), () => [
              pe(Z(n.getOptionLabel(s)), 1)
            ]),
            n.multiple ? (E(), F("button", {
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
              (E(), V(zr(a.childComponents.Deselect)))
            ], 8, ov)) : J("", !0)
          ]))
        ])), 256)),
        j(e.$slots, "search", ve(Ae(a.scope.search)), () => [
          z("input", ae({ class: "vs__search" }, a.scope.search.attributes, Kc(a.scope.search.events)), null, 16)
        ])
      ], 512),
      z("div", av, [
        ot(z("button", {
          ref: "clearButton",
          disabled: n.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: t[0] || (t[0] = (...s) => a.clearSelection && a.clearSelection(...s))
        }, [
          (E(), V(zr(a.childComponents.Deselect)))
        ], 8, iv), [
          [$n, a.showClearButton]
        ]),
        j(e.$slots, "open-indicator", ve(Ae(a.scope.openIndicator)), () => [
          n.noDrop ? J("", !0) : (E(), V(zr(a.childComponents.OpenIndicator), ve(ae({ key: 0 }, a.scope.openIndicator.attributes)), null, 16))
        ]),
        j(e.$slots, "spinner", ve(Ae(a.scope.spinner)), () => [
          ot(z("div", sv, "Loading...", 512), [
            [$n, e.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, nv),
    Y(un, { name: n.transition }, {
      default: M(() => [
        a.dropdownOpen ? ot((E(), F("ul", {
          id: `vs${n.uid}__listbox`,
          ref: "dropdownMenu",
          key: `vs${n.uid}__listbox`,
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1",
          onMousedown: t[2] || (t[2] = wt((...s) => a.onMousedown && a.onMousedown(...s), ["prevent"])),
          onMouseup: t[3] || (t[3] = (...s) => a.onMouseUp && a.onMouseUp(...s))
        }, [
          j(e.$slots, "list-header", ve(Ae(a.scope.listHeader))),
          (E(!0), F(le, null, et(a.filteredOptions, (s, c) => (E(), F("li", {
            id: `vs${n.uid}__option-${c}`,
            key: n.getOptionKey(s),
            role: "option",
            class: ee(["vs__dropdown-option", {
              "vs__dropdown-option--deselect": a.isOptionDeselectable(s) && c === e.typeAheadPointer,
              "vs__dropdown-option--selected": a.isOptionSelected(s),
              "vs__dropdown-option--highlight": c === e.typeAheadPointer,
              "vs__dropdown-option--disabled": !n.selectable(s)
            }]),
            "aria-selected": c === e.typeAheadPointer ? !0 : null,
            onMouseover: (l) => n.selectable(s) ? e.typeAheadPointer = c : null,
            onClick: wt((l) => n.selectable(s) ? a.select(s) : null, ["prevent", "stop"])
          }, [
            j(e.$slots, "option", ve(Ae(a.normalizeOptionForSlot(s))), () => [
              pe(Z(n.getOptionLabel(s)), 1)
            ])
          ], 42, uv))), 128)),
          a.filteredOptions.length === 0 ? (E(), F("li", cv, [
            j(e.$slots, "no-options", ve(Ae(a.scope.noOptions)), () => [
              fv
            ])
          ])) : J("", !0),
          j(e.$slots, "list-footer", ve(Ae(a.scope.listFooter)))
        ], 40, lv)), [
          [i]
        ]) : (E(), F("ul", {
          key: 1,
          id: `vs${n.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, dv))
      ]),
      _: 3
    }, 8, ["name"]),
    j(e.$slots, "footer", ve(Ae(a.scope.footer)))
  ], 10, tv);
}
const hv = /* @__PURE__ */ Cs(ev, [["render", pv]]), DA = {
  __name: "DropdownSearchbar",
  props: {
    options: Array,
    label: String,
    placeholder: String
  },
  setup(e) {
    return Nn.add(jf), (t, n) => (E(), V(b(hv), {
      options: e.options,
      label: e.label,
      placeholder: e.placeholder,
      class: "min-w-44"
    }, null, 8, ["options", "label", "placeholder"]));
  }
}, Tt = {
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
function mv(e) {
  return new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
}
const qf = {
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
      default: (e, t) => e.match(mv(t))
    }
  }
}, yv = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, gv = {
  name: "ModelSelect",
  mixins: [qf],
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
      Tt.openOptions(this);
    },
    blurInput() {
      Tt.blurInput(this);
    },
    closeOptions() {
      Tt.closeOptions(this);
    },
    prevItem() {
      Tt.prevItem(this);
    },
    nextItem() {
      Tt.nextItem(this);
    },
    enterItem() {
      Tt.enterItem(this);
    },
    pointerSet(e) {
      Tt.pointerSet(this, e);
    },
    pointerAdjust() {
      Tt.pointerAdjust(this);
    },
    mousedownItem() {
      Tt.mousedownItem(this);
    },
    selectItem(e) {
      this.searchText = "", this.closeOptions(), typeof this.modelValue == "object" && this.modelValue ? this.$emit("update:modelValue", e) : (this.$emit("update:modelValue", e.value), e.value !== void 0 && e.value === e.text && (this.searchText = e.value));
    },
    optionValue(e) {
      return typeof e == "object" && e !== null ? e.value : e;
    }
  }
}, vv = /* @__PURE__ */ z("i", { class: "dropdown icon" }, null, -1), bv = ["disabled", "tabindex", "id", "name", "value"], wv = ["data-vss-custom-attr"], xv = ["data-vss-custom-attr", "onClick", "onMouseenter"];
function Sv(e, t, n, r, o, a) {
  return E(), F("div", {
    class: ee(["ui fluid search selection dropdown", { "active visible": o.showMenu, error: e.isError, disabled: e.isDisabled }]),
    onClick: t[11] || (t[11] = (...i) => a.openOptions && a.openOptions(...i)),
    onFocus: t[12] || (t[12] = (...i) => a.openOptions && a.openOptions(...i))
  }, [
    vv,
    z("input", {
      class: "search",
      autocomplete: "off",
      disabled: e.isDisabled,
      tabindex: e.isDisabled ? -1 : 0,
      id: e.id,
      name: e.name,
      value: o.searchText,
      onInput: t[0] || (t[0] = (i) => o.searchText = i.target.value),
      ref: "input",
      onFocus: t[1] || (t[1] = wt((...i) => a.openOptions && a.openOptions(...i), ["prevent"])),
      onKeyup: [
        t[2] || (t[2] = on((...i) => a.closeOptions && a.closeOptions(...i), ["esc"])),
        t[7] || (t[7] = on(wt((...i) => a.enterItem && a.enterItem(...i), ["prevent"]), ["enter"]))
      ],
      onBlur: t[3] || (t[3] = (...i) => a.blurInput && a.blurInput(...i)),
      onKeydown: [
        t[4] || (t[4] = on((...i) => a.prevItem && a.prevItem(...i), ["up"])),
        t[5] || (t[5] = on((...i) => a.nextItem && a.nextItem(...i), ["down"])),
        t[6] || (t[6] = on(wt(() => {
        }, ["prevent"]), ["enter"])),
        t[8] || (t[8] = on((...i) => a.deleteTextOrItem && a.deleteTextOrItem(...i), ["delete"]))
      ]
    }, null, 40, bv),
    z("div", {
      class: ee(["text", a.textClass]),
      "data-vss-custom-attr": a.searchTextCustomAttr
    }, Z(a.inputText), 11, wv),
    z("div", {
      class: ee(["menu", a.menuClass]),
      ref: "menu",
      onMousedown: t[10] || (t[10] = wt(() => {
      }, ["prevent"])),
      style: Ft(a.menuStyle),
      tabindex: "-1"
    }, [
      (E(!0), F(le, null, et(a.filteredOptions, (i, s) => (E(), F("div", {
        key: s,
        class: ee(["item", { selected: i.selected || o.pointer === s, disabled: i.disabled }]),
        "data-vss-custom-attr": a.customAttrs[s] ? a.customAttrs[s] : "",
        onClick: wt((c) => a.selectItem(i), ["stop"]),
        onMousedown: t[9] || (t[9] = (...c) => a.mousedownItem && a.mousedownItem(...c)),
        onMouseenter: (c) => a.pointerSet(s)
      }, [
        j(e.$slots, "default", {
          option: i,
          idx: s
        }, () => [
          pe(Z(i.text), 1)
        ])
      ], 42, xv))), 128))
    ], 38)
  ], 34);
}
const Yl = /* @__PURE__ */ yv(gv, [["render", Sv]]), Xl = {
  name: "ModelListSelect",
  mixins: [qf],
  emits: ["blur", "searchchange", "update:modelValue"],
  render: function() {
    return qe(Yl, {
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
    ModelSelect: Yl
  }
}, Ov = {
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
    return (o, a) => (E(), F("div", null, [
      !e.noLabel && (e.label || e.field) ? (E(), V(b(As), {
        key: 0,
        for: e.id ?? e.field,
        value: r(e.label ?? e.field),
        required: e.required
      }, null, 8, ["for", "value", "required"])) : J("", !0),
      e.noForm ? (E(), V(b(Xl), {
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
      }, null, 8, ["id", "list", "modelValue", "option-value", "option-text", "option-disabled", "placeholder", "is-disabled", "filterPredicate"])) : (E(), F(le, { key: 2 }, [
        Y(b(Xl), {
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
        Y(b(br), {
          message: e.form.errors[e.field]
        }, null, 8, ["message"])
      ], 64))
    ]));
  }
}, Ev = /* @__PURE__ */ So(Ov, [["__scopeId", "data-v-c8f3c7c8"]]);
function Av(e) {
  return typeof e == "symbol" || e instanceof Symbol;
}
function Cv() {
}
function Pv(e) {
  return e == null || typeof e != "object" && typeof e != "function";
}
function kv(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function _i(e) {
  return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
function oo(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
const Uf = "[object RegExp]", zf = "[object String]", Vf = "[object Number]", Hf = "[object Boolean]", Bi = "[object Arguments]", Wf = "[object Symbol]", Kf = "[object Date]", Gf = "[object Map]", Yf = "[object Set]", Xf = "[object Array]", Tv = "[object Function]", Jf = "[object ArrayBuffer]", Wr = "[object Object]", Dv = "[object Error]", Qf = "[object DataView]", Zf = "[object Uint8Array]", ed = "[object Uint8ClampedArray]", td = "[object Uint16Array]", nd = "[object Uint32Array]", $v = "[object BigUint64Array]", rd = "[object Int8Array]", od = "[object Int16Array]", ad = "[object Int32Array]", Fv = "[object BigInt64Array]", id = "[object Float32Array]", sd = "[object Float64Array]";
function Dn(e, t, n, r = /* @__PURE__ */ new Map(), o = void 0) {
  const a = o == null ? void 0 : o(e, t, n, r);
  if (a != null)
    return a;
  if (Pv(e))
    return e;
  if (r.has(e))
    return r.get(e);
  if (Array.isArray(e)) {
    const i = new Array(e.length);
    r.set(e, i);
    for (let s = 0; s < e.length; s++)
      i[s] = Dn(e[s], s, n, r, o);
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
      i.set(s, Dn(c, s, n, r, o));
    return i;
  }
  if (e instanceof Set) {
    const i = /* @__PURE__ */ new Set();
    r.set(e, i);
    for (const s of e)
      i.add(Dn(s, void 0, n, r, o));
    return i;
  }
  if (typeof Buffer < "u" && Buffer.isBuffer(e))
    return e.subarray();
  if (kv(e)) {
    const i = new (Object.getPrototypeOf(e)).constructor(e.length);
    r.set(e, i);
    for (let s = 0; s < e.length; s++)
      i[s] = Dn(e[s], s, n, r, o);
    return i;
  }
  if (e instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer)
    return e.slice(0);
  if (e instanceof DataView) {
    const i = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
    return r.set(e, i), Yn(i, e, n, r, o), i;
  }
  if (typeof File < "u" && e instanceof File) {
    const i = new File([e], e.name, {
      type: e.type
    });
    return r.set(e, i), Yn(i, e, n, r, o), i;
  }
  if (e instanceof Blob) {
    const i = new Blob([e], { type: e.type });
    return r.set(e, i), Yn(i, e, n, r, o), i;
  }
  if (e instanceof Error) {
    const i = new e.constructor();
    return r.set(e, i), i.message = e.message, i.name = e.name, i.stack = e.stack, i.cause = e.cause, Yn(i, e, n, r, o), i;
  }
  if (typeof e == "object" && Iv(e)) {
    const i = Object.create(Object.getPrototypeOf(e));
    return r.set(e, i), Yn(i, e, n, r, o), i;
  }
  return e;
}
function Yn(e, t, n = e, r, o) {
  const a = [...Object.keys(t), ..._i(t)];
  for (let i = 0; i < a.length; i++) {
    const s = a[i], c = Object.getOwnPropertyDescriptor(e, s);
    (c == null || c.writable) && (e[s] = Dn(t[s], s, n, r, o));
  }
}
function Iv(e) {
  switch (oo(e)) {
    case Bi:
    case Xf:
    case Jf:
    case Qf:
    case Hf:
    case Kf:
    case id:
    case sd:
    case rd:
    case od:
    case ad:
    case Gf:
    case Vf:
    case Wr:
    case Uf:
    case Yf:
    case zf:
    case Wf:
    case Zf:
    case ed:
    case td:
    case nd:
      return !0;
    default:
      return !1;
  }
}
function ut(e) {
  return Dn(e, void 0, e, /* @__PURE__ */ new Map(), void 0);
}
function ao(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype || Object.getPrototypeOf(t) === null ? Object.prototype.toString.call(e) === "[object Object]" : !1;
}
function tr(e, t) {
  const n = Object.keys(t);
  for (let r = 0; r < n.length; r++) {
    const o = n[r], a = t[o], i = e[o];
    Array.isArray(a) ? Array.isArray(i) ? e[o] = tr(i, a) : e[o] = tr([], a) : ao(a) ? ao(i) ? e[o] = tr(i, a) : e[o] = tr({}, a) : (i === void 0 || a !== void 0) && (e[o] = a);
  }
  return e;
}
function ld(e, t) {
  return e === t || Number.isNaN(e) && Number.isNaN(t);
}
function Rv(e, t, n) {
  return nr(e, t, void 0, void 0, void 0, void 0, n);
}
function nr(e, t, n, r, o, a, i) {
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
        return lr(e, t, a, i);
    }
  return lr(e, t, a, i);
}
function lr(e, t, n, r) {
  if (Object.is(e, t))
    return !0;
  let o = oo(e), a = oo(t);
  if (o === Bi && (o = Wr), a === Bi && (a = Wr), o !== a)
    return !1;
  switch (o) {
    case zf:
      return e.toString() === t.toString();
    case Vf: {
      const c = e.valueOf(), l = t.valueOf();
      return ld(c, l);
    }
    case Hf:
    case Kf:
    case Wf:
      return Object.is(e.valueOf(), t.valueOf());
    case Uf:
      return e.source === t.source && e.flags === t.flags;
    case Tv:
      return e === t;
  }
  n = n ?? /* @__PURE__ */ new Map();
  const i = n.get(e), s = n.get(t);
  if (i != null && s != null)
    return i === t;
  n.set(e, t), n.set(t, e);
  try {
    switch (o) {
      case Gf: {
        if (e.size !== t.size)
          return !1;
        for (const [c, l] of e.entries())
          if (!t.has(c) || !nr(l, t.get(c), c, e, t, n, r))
            return !1;
        return !0;
      }
      case Yf: {
        if (e.size !== t.size)
          return !1;
        const c = Array.from(e.values()), l = Array.from(t.values());
        for (let u = 0; u < c.length; u++) {
          const f = c[u], p = l.findIndex((h) => nr(f, h, void 0, e, t, n, r));
          if (p === -1)
            return !1;
          l.splice(p, 1);
        }
        return !0;
      }
      case Xf:
      case Zf:
      case ed:
      case td:
      case nd:
      case $v:
      case rd:
      case od:
      case ad:
      case Fv:
      case id:
      case sd: {
        if (typeof Buffer < "u" && Buffer.isBuffer(e) !== Buffer.isBuffer(t) || e.length !== t.length)
          return !1;
        for (let c = 0; c < e.length; c++)
          if (!nr(e[c], t[c], c, e, t, n, r))
            return !1;
        return !0;
      }
      case Jf:
        return e.byteLength !== t.byteLength ? !1 : lr(new Uint8Array(e), new Uint8Array(t), n, r);
      case Qf:
        return e.byteLength !== t.byteLength || e.byteOffset !== t.byteOffset ? !1 : lr(new Uint8Array(e), new Uint8Array(t), n, r);
      case Dv:
        return e.name === t.name && e.message === t.message;
      case Wr: {
        if (!(lr(e.constructor, t.constructor, n, r) || ao(e) && ao(t)))
          return !1;
        const l = [...Object.keys(e), ..._i(e)], u = [...Object.keys(t), ..._i(t)];
        if (l.length !== u.length)
          return !1;
        for (let f = 0; f < l.length; f++) {
          const p = l[f], h = e[p];
          if (!Object.hasOwn(t, p))
            return !1;
          const d = t[p];
          if (!nr(h, d, p, e, t, n, r))
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
function Lv(e, t) {
  return Rv(e, t, Cv);
}
var Mi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _v(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Bv(e) {
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
var na, Jl;
function jn() {
  return Jl || (Jl = 1, na = TypeError), na;
}
const Mv = {}, Nv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mv
}, Symbol.toStringTag, { value: "Module" })), Ni = /* @__PURE__ */ Bv(Nv);
var ra, Ql;
function Oo() {
  if (Ql) return ra;
  Ql = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, n = e && t && typeof t.get == "function" ? t.get : null, r = e && Map.prototype.forEach, o = typeof Set == "function" && Set.prototype, a = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, i = o && a && typeof a.get == "function" ? a.get : null, s = o && Set.prototype.forEach, c = typeof WeakMap == "function" && WeakMap.prototype, l = c ? WeakMap.prototype.has : null, u = typeof WeakSet == "function" && WeakSet.prototype, f = u ? WeakSet.prototype.has : null, p = typeof WeakRef == "function" && WeakRef.prototype, h = p ? WeakRef.prototype.deref : null, d = Boolean.prototype.valueOf, x = Object.prototype.toString, g = Function.prototype.toString, m = String.prototype.match, v = String.prototype.slice, w = String.prototype.replace, C = String.prototype.toUpperCase, P = String.prototype.toLowerCase, $ = RegExp.prototype.test, I = Array.prototype.concat, U = Array.prototype.join, T = Array.prototype.slice, k = Math.floor, B = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, y = Object.getOwnPropertySymbols, O = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, A = typeof Symbol == "function" && typeof Symbol.iterator == "object", S = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === A || !0) ? Symbol.toStringTag : null, K = Object.prototype.propertyIsEnumerable, N = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(D) {
    return D.__proto__;
  } : null);
  function L(D, R) {
    if (D === 1 / 0 || D === -1 / 0 || D !== D || D && D > -1e3 && D < 1e3 || $.call(/e/, R))
      return R;
    var ue = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof D == "number") {
      var he = D < 0 ? -k(-D) : k(D);
      if (he !== D) {
        var me = String(he), re = v.call(R, me.length + 1);
        return w.call(me, ue, "$&_") + "." + w.call(w.call(re, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return w.call(R, ue, "$&_");
  }
  var G = Ni, oe = G.custom, Te = Fe(oe) ? oe : null, Ge = {
    __proto__: null,
    double: '"',
    single: "'"
  }, Pe = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  ra = function D(R, ue, he, me) {
    var re = ue || {};
    if (Ue(re, "quoteStyle") && !Ue(Ge, re.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (Ue(re, "maxStringLength") && (typeof re.maxStringLength == "number" ? re.maxStringLength < 0 && re.maxStringLength !== 1 / 0 : re.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var Vt = Ue(re, "customInspect") ? re.customInspect : !0;
    if (typeof Vt != "boolean" && Vt !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (Ue(re, "indent") && re.indent !== null && re.indent !== "	" && !(parseInt(re.indent, 10) === re.indent && re.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (Ue(re, "numericSeparator") && typeof re.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var nn = re.numericSeparator;
    if (typeof R > "u")
      return "undefined";
    if (R === null)
      return "null";
    if (typeof R == "boolean")
      return R ? "true" : "false";
    if (typeof R == "string")
      return nl(R, re);
    if (typeof R == "number") {
      if (R === 0)
        return 1 / 0 / R > 0 ? "0" : "-0";
      var Ye = String(R);
      return nn ? L(R, Ye) : Ye;
    }
    if (typeof R == "bigint") {
      var Ht = String(R) + "n";
      return nn ? L(R, Ht) : Ht;
    }
    var Vo = typeof re.depth > "u" ? 5 : re.depth;
    if (typeof he > "u" && (he = 0), he >= Vo && Vo > 0 && typeof R == "object")
      return gt(R) ? "[Array]" : "[Object]";
    var On = wh(re, he);
    if (typeof me > "u")
      me = [];
    else if (zt(me, R) >= 0)
      return "[Circular]";
    function lt(En, Fr, Sh) {
      if (Fr && (me = T.call(me), me.push(Fr)), Sh) {
        var fl = {
          depth: re.depth
        };
        return Ue(re, "quoteStyle") && (fl.quoteStyle = re.quoteStyle), D(En, fl, he + 1, me);
      }
      return D(En, re, he + 1, me);
    }
    if (typeof R == "function" && !Ee(R)) {
      var ol = bn(R), al = Dr(R, lt);
      return "[Function" + (ol ? ": " + ol : " (anonymous)") + "]" + (al.length > 0 ? " { " + U.call(al, ", ") + " }" : "");
    }
    if (Fe(R)) {
      var il = A ? w.call(String(R), /^(Symbol\(.*\))_[^)]*$/, "$1") : O.call(R);
      return typeof R == "object" && !A ? Kn(il) : il;
    }
    if (gh(R)) {
      for (var Gn = "<" + P.call(String(R.nodeName)), Ho = R.attributes || [], $r = 0; $r < Ho.length; $r++)
        Gn += " " + Ho[$r].name + "=" + Me($e(Ho[$r].value), "double", re);
      return Gn += ">", R.childNodes && R.childNodes.length && (Gn += "..."), Gn += "</" + P.call(String(R.nodeName)) + ">", Gn;
    }
    if (gt(R)) {
      if (R.length === 0)
        return "[]";
      var Wo = Dr(R, lt);
      return On && !bh(Wo) ? "[" + zo(Wo, On) + "]" : "[ " + U.call(Wo, ", ") + " ]";
    }
    if (se(R)) {
      var Ko = Dr(R, lt);
      return !("cause" in Error.prototype) && "cause" in R && !K.call(R, "cause") ? "{ [" + String(R) + "] " + U.call(I.call("[cause]: " + lt(R.cause), Ko), ", ") + " }" : Ko.length === 0 ? "[" + String(R) + "]" : "{ [" + String(R) + "] " + U.call(Ko, ", ") + " }";
    }
    if (typeof R == "object" && Vt) {
      if (Te && typeof R[Te] == "function" && G)
        return G(R, { depth: Vo - he });
      if (Vt !== "symbol" && typeof R.inspect == "function")
        return R.inspect();
    }
    if (st(R)) {
      var sl = [];
      return r && r.call(R, function(En, Fr) {
        sl.push(lt(Fr, R, !0) + " => " + lt(En, R));
      }), rl("Map", n.call(R), sl, On);
    }
    if (Sn(R)) {
      var ll = [];
      return s && s.call(R, function(En) {
        ll.push(lt(En, R));
      }), rl("Set", i.call(R), ll, On);
    }
    if (wn(R))
      return Uo("WeakMap");
    if (yh(R))
      return Uo("WeakSet");
    if (xn(R))
      return Uo("WeakRef");
    if (fe(R))
      return Kn(lt(Number(R)));
    if (nt(R))
      return Kn(lt(B.call(R)));
    if (xe(R))
      return Kn(d.call(R));
    if (ge(R))
      return Kn(lt(String(R)));
    if (typeof window < "u" && R === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && R === globalThis || typeof Mi < "u" && R === Mi)
      return "{ [object globalThis] }";
    if (!vt(R) && !Ee(R)) {
      var Go = Dr(R, lt), ul = N ? N(R) === Object.prototype : R instanceof Object || R.constructor === Object, Yo = R instanceof Object ? "" : "null prototype", cl = !ul && S && Object(R) === R && S in R ? v.call(rt(R), 8, -1) : Yo ? "Object" : "", xh = ul || typeof R.constructor != "function" ? "" : R.constructor.name ? R.constructor.name + " " : "", Xo = xh + (cl || Yo ? "[" + U.call(I.call([], cl || [], Yo || []), ": ") + "] " : "");
      return Go.length === 0 ? Xo + "{}" : On ? Xo + "{" + zo(Go, On) + "}" : Xo + "{ " + U.call(Go, ", ") + " }";
    }
    return String(R);
  };
  function Me(D, R, ue) {
    var he = ue.quoteStyle || R, me = Ge[he];
    return me + D + me;
  }
  function $e(D) {
    return w.call(String(D), /"/g, "&quot;");
  }
  function Ne(D) {
    return !S || !(typeof D == "object" && (S in D || typeof D[S] < "u"));
  }
  function gt(D) {
    return rt(D) === "[object Array]" && Ne(D);
  }
  function vt(D) {
    return rt(D) === "[object Date]" && Ne(D);
  }
  function Ee(D) {
    return rt(D) === "[object RegExp]" && Ne(D);
  }
  function se(D) {
    return rt(D) === "[object Error]" && Ne(D);
  }
  function ge(D) {
    return rt(D) === "[object String]" && Ne(D);
  }
  function fe(D) {
    return rt(D) === "[object Number]" && Ne(D);
  }
  function xe(D) {
    return rt(D) === "[object Boolean]" && Ne(D);
  }
  function Fe(D) {
    if (A)
      return D && typeof D == "object" && D instanceof Symbol;
    if (typeof D == "symbol")
      return !0;
    if (!D || typeof D != "object" || !O)
      return !1;
    try {
      return O.call(D), !0;
    } catch {
    }
    return !1;
  }
  function nt(D) {
    if (!D || typeof D != "object" || !B)
      return !1;
    try {
      return B.call(D), !0;
    } catch {
    }
    return !1;
  }
  var Ie = Object.prototype.hasOwnProperty || function(D) {
    return D in this;
  };
  function Ue(D, R) {
    return Ie.call(D, R);
  }
  function rt(D) {
    return x.call(D);
  }
  function bn(D) {
    if (D.name)
      return D.name;
    var R = m.call(g.call(D), /^function\s*([\w$]+)/);
    return R ? R[1] : null;
  }
  function zt(D, R) {
    if (D.indexOf)
      return D.indexOf(R);
    for (var ue = 0, he = D.length; ue < he; ue++)
      if (D[ue] === R)
        return ue;
    return -1;
  }
  function st(D) {
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
  function wn(D) {
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
  function xn(D) {
    if (!h || !D || typeof D != "object")
      return !1;
    try {
      return h.call(D), !0;
    } catch {
    }
    return !1;
  }
  function Sn(D) {
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
  function yh(D) {
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
  function gh(D) {
    return !D || typeof D != "object" ? !1 : typeof HTMLElement < "u" && D instanceof HTMLElement ? !0 : typeof D.nodeName == "string" && typeof D.getAttribute == "function";
  }
  function nl(D, R) {
    if (D.length > R.maxStringLength) {
      var ue = D.length - R.maxStringLength, he = "... " + ue + " more character" + (ue > 1 ? "s" : "");
      return nl(v.call(D, 0, R.maxStringLength), R) + he;
    }
    var me = Pe[R.quoteStyle || "single"];
    me.lastIndex = 0;
    var re = w.call(w.call(D, me, "\\$1"), /[\x00-\x1f]/g, vh);
    return Me(re, "single", R);
  }
  function vh(D) {
    var R = D.charCodeAt(0), ue = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[R];
    return ue ? "\\" + ue : "\\x" + (R < 16 ? "0" : "") + C.call(R.toString(16));
  }
  function Kn(D) {
    return "Object(" + D + ")";
  }
  function Uo(D) {
    return D + " { ? }";
  }
  function rl(D, R, ue, he) {
    var me = he ? zo(ue, he) : U.call(ue, ", ");
    return D + " (" + R + ") {" + me + "}";
  }
  function bh(D) {
    for (var R = 0; R < D.length; R++)
      if (zt(D[R], `
`) >= 0)
        return !1;
    return !0;
  }
  function wh(D, R) {
    var ue;
    if (D.indent === "	")
      ue = "	";
    else if (typeof D.indent == "number" && D.indent > 0)
      ue = U.call(Array(D.indent + 1), " ");
    else
      return null;
    return {
      base: ue,
      prev: U.call(Array(R + 1), ue)
    };
  }
  function zo(D, R) {
    if (D.length === 0)
      return "";
    var ue = `
` + R.prev + R.base;
    return ue + U.call(D, "," + ue) + `
` + R.prev;
  }
  function Dr(D, R) {
    var ue = gt(D), he = [];
    if (ue) {
      he.length = D.length;
      for (var me = 0; me < D.length; me++)
        he[me] = Ue(D, me) ? R(D[me], D) : "";
    }
    var re = typeof y == "function" ? y(D) : [], Vt;
    if (A) {
      Vt = {};
      for (var nn = 0; nn < re.length; nn++)
        Vt["$" + re[nn]] = re[nn];
    }
    for (var Ye in D)
      Ue(D, Ye) && (ue && String(Number(Ye)) === Ye && Ye < D.length || A && Vt["$" + Ye] instanceof Symbol || ($.call(/[^\w$]/, Ye) ? he.push(R(Ye, D) + ": " + R(D[Ye], D)) : he.push(Ye + ": " + R(D[Ye], D))));
    if (typeof y == "function")
      for (var Ht = 0; Ht < re.length; Ht++)
        K.call(D, re[Ht]) && he.push("[" + R(re[Ht]) + "]: " + R(D[re[Ht]], D));
    return he;
  }
  return ra;
}
var oa, Zl;
function jv() {
  if (Zl) return oa;
  Zl = 1;
  var e = /* @__PURE__ */ Oo(), t = /* @__PURE__ */ jn(), n = function(s, c, l) {
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
  return oa = function() {
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
  }, oa;
}
var aa, eu;
function ud() {
  return eu || (eu = 1, aa = Object), aa;
}
var ia, tu;
function qv() {
  return tu || (tu = 1, ia = Error), ia;
}
var sa, nu;
function Uv() {
  return nu || (nu = 1, sa = EvalError), sa;
}
var la, ru;
function zv() {
  return ru || (ru = 1, la = RangeError), la;
}
var ua, ou;
function Vv() {
  return ou || (ou = 1, ua = ReferenceError), ua;
}
var ca, au;
function Hv() {
  return au || (au = 1, ca = SyntaxError), ca;
}
var fa, iu;
function Wv() {
  return iu || (iu = 1, fa = URIError), fa;
}
var da, su;
function Kv() {
  return su || (su = 1, da = Math.abs), da;
}
var pa, lu;
function Gv() {
  return lu || (lu = 1, pa = Math.floor), pa;
}
var ha, uu;
function Yv() {
  return uu || (uu = 1, ha = Math.max), ha;
}
var ma, cu;
function Xv() {
  return cu || (cu = 1, ma = Math.min), ma;
}
var ya, fu;
function Jv() {
  return fu || (fu = 1, ya = Math.pow), ya;
}
var ga, du;
function Qv() {
  return du || (du = 1, ga = Math.round), ga;
}
var va, pu;
function Zv() {
  return pu || (pu = 1, va = Number.isNaN || function(t) {
    return t !== t;
  }), va;
}
var ba, hu;
function e0() {
  if (hu) return ba;
  hu = 1;
  var e = /* @__PURE__ */ Zv();
  return ba = function(n) {
    return e(n) || n === 0 ? n : n < 0 ? -1 : 1;
  }, ba;
}
var wa, mu;
function t0() {
  return mu || (mu = 1, wa = Object.getOwnPropertyDescriptor), wa;
}
var xa, yu;
function cd() {
  if (yu) return xa;
  yu = 1;
  var e = /* @__PURE__ */ t0();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return xa = e, xa;
}
var Sa, gu;
function n0() {
  if (gu) return Sa;
  gu = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Sa = e, Sa;
}
var Oa, vu;
function r0() {
  return vu || (vu = 1, Oa = function() {
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
  }), Oa;
}
var Ea, bu;
function o0() {
  if (bu) return Ea;
  bu = 1;
  var e = typeof Symbol < "u" && Symbol, t = r0();
  return Ea = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, Ea;
}
var Aa, wu;
function fd() {
  return wu || (wu = 1, Aa = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Aa;
}
var Ca, xu;
function dd() {
  if (xu) return Ca;
  xu = 1;
  var e = /* @__PURE__ */ ud();
  return Ca = e.getPrototypeOf || null, Ca;
}
var Pa, Su;
function a0() {
  if (Su) return Pa;
  Su = 1;
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
  return Pa = function(c) {
    var l = this;
    if (typeof l != "function" || t.apply(l) !== r)
      throw new TypeError(e + l);
    for (var u = a(arguments, 1), f, p = function() {
      if (this instanceof f) {
        var m = l.apply(
          this,
          o(u, arguments)
        );
        return Object(m) === m ? m : this;
      }
      return l.apply(
        c,
        o(u, arguments)
      );
    }, h = n(0, l.length - u.length), d = [], x = 0; x < h; x++)
      d[x] = "$" + x;
    if (f = Function("binder", "return function (" + i(d, ",") + "){ return binder.apply(this,arguments); }")(p), l.prototype) {
      var g = function() {
      };
      g.prototype = l.prototype, f.prototype = new g(), g.prototype = null;
    }
    return f;
  }, Pa;
}
var ka, Ou;
function Eo() {
  if (Ou) return ka;
  Ou = 1;
  var e = a0();
  return ka = Function.prototype.bind || e, ka;
}
var Ta, Eu;
function Ps() {
  return Eu || (Eu = 1, Ta = Function.prototype.call), Ta;
}
var Da, Au;
function pd() {
  return Au || (Au = 1, Da = Function.prototype.apply), Da;
}
var $a, Cu;
function i0() {
  return Cu || (Cu = 1, $a = typeof Reflect < "u" && Reflect && Reflect.apply), $a;
}
var Fa, Pu;
function s0() {
  if (Pu) return Fa;
  Pu = 1;
  var e = Eo(), t = pd(), n = Ps(), r = i0();
  return Fa = r || e.call(n, t), Fa;
}
var Ia, ku;
function hd() {
  if (ku) return Ia;
  ku = 1;
  var e = Eo(), t = /* @__PURE__ */ jn(), n = Ps(), r = s0();
  return Ia = function(a) {
    if (a.length < 1 || typeof a[0] != "function")
      throw new t("a function is required");
    return r(e, n, a);
  }, Ia;
}
var Ra, Tu;
function l0() {
  if (Tu) return Ra;
  Tu = 1;
  var e = hd(), t = /* @__PURE__ */ cd(), n;
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
  return Ra = r && typeof r.get == "function" ? e([r.get]) : typeof a == "function" ? (
    /** @type {import('./get')} */
    function(s) {
      return a(s == null ? s : o(s));
    }
  ) : !1, Ra;
}
var La, Du;
function u0() {
  if (Du) return La;
  Du = 1;
  var e = fd(), t = dd(), n = /* @__PURE__ */ l0();
  return La = e ? function(o) {
    return e(o);
  } : t ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return t(o);
  } : n ? function(o) {
    return n(o);
  } : null, La;
}
var _a, $u;
function c0() {
  if ($u) return _a;
  $u = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, n = Eo();
  return _a = n.call(e, t), _a;
}
var Ba, Fu;
function ks() {
  if (Fu) return Ba;
  Fu = 1;
  var e, t = /* @__PURE__ */ ud(), n = /* @__PURE__ */ qv(), r = /* @__PURE__ */ Uv(), o = /* @__PURE__ */ zv(), a = /* @__PURE__ */ Vv(), i = /* @__PURE__ */ Hv(), s = /* @__PURE__ */ jn(), c = /* @__PURE__ */ Wv(), l = /* @__PURE__ */ Kv(), u = /* @__PURE__ */ Gv(), f = /* @__PURE__ */ Yv(), p = /* @__PURE__ */ Xv(), h = /* @__PURE__ */ Jv(), d = /* @__PURE__ */ Qv(), x = /* @__PURE__ */ e0(), g = Function, m = function(Ee) {
    try {
      return g('"use strict"; return (' + Ee + ").constructor;")();
    } catch {
    }
  }, v = /* @__PURE__ */ cd(), w = /* @__PURE__ */ n0(), C = function() {
    throw new s();
  }, P = v ? function() {
    try {
      return arguments.callee, C;
    } catch {
      try {
        return v(arguments, "callee").get;
      } catch {
        return C;
      }
    }
  }() : C, $ = o0()(), I = u0(), U = dd(), T = fd(), k = pd(), B = Ps(), y = {}, O = typeof Uint8Array > "u" || !I ? e : I(Uint8Array), A = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": $ && I ? I([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": y,
    "%AsyncGenerator%": y,
    "%AsyncGeneratorFunction%": y,
    "%AsyncIteratorPrototype%": y,
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
    "%GeneratorFunction%": y,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": $ && I ? I(I([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !$ || !I ? e : I((/* @__PURE__ */ new Map())[Symbol.iterator]()),
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
    "%SetIteratorPrototype%": typeof Set > "u" || !$ || !I ? e : I((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": $ && I ? I(""[Symbol.iterator]()) : e,
    "%Symbol%": $ ? Symbol : e,
    "%SyntaxError%": i,
    "%ThrowTypeError%": P,
    "%TypedArray%": O,
    "%TypeError%": s,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": c,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": B,
    "%Function.prototype.apply%": k,
    "%Object.defineProperty%": w,
    "%Object.getPrototypeOf%": U,
    "%Math.abs%": l,
    "%Math.floor%": u,
    "%Math.max%": f,
    "%Math.min%": p,
    "%Math.pow%": h,
    "%Math.round%": d,
    "%Math.sign%": x,
    "%Reflect.getPrototypeOf%": T
  };
  if (I)
    try {
      null.error;
    } catch (Ee) {
      var S = I(I(Ee));
      A["%Error.prototype%"] = S;
    }
  var K = function Ee(se) {
    var ge;
    if (se === "%AsyncFunction%")
      ge = m("async function () {}");
    else if (se === "%GeneratorFunction%")
      ge = m("function* () {}");
    else if (se === "%AsyncGeneratorFunction%")
      ge = m("async function* () {}");
    else if (se === "%AsyncGenerator%") {
      var fe = Ee("%AsyncGeneratorFunction%");
      fe && (ge = fe.prototype);
    } else if (se === "%AsyncIteratorPrototype%") {
      var xe = Ee("%AsyncGenerator%");
      xe && I && (ge = I(xe.prototype));
    }
    return A[se] = ge, ge;
  }, N = {
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
  }, L = Eo(), G = /* @__PURE__ */ c0(), oe = L.call(B, Array.prototype.concat), Te = L.call(k, Array.prototype.splice), Ge = L.call(B, String.prototype.replace), Pe = L.call(B, String.prototype.slice), Me = L.call(B, RegExp.prototype.exec), $e = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Ne = /\\(\\)?/g, gt = function(se) {
    var ge = Pe(se, 0, 1), fe = Pe(se, -1);
    if (ge === "%" && fe !== "%")
      throw new i("invalid intrinsic syntax, expected closing `%`");
    if (fe === "%" && ge !== "%")
      throw new i("invalid intrinsic syntax, expected opening `%`");
    var xe = [];
    return Ge(se, $e, function(Fe, nt, Ie, Ue) {
      xe[xe.length] = Ie ? Ge(Ue, Ne, "$1") : nt || Fe;
    }), xe;
  }, vt = function(se, ge) {
    var fe = se, xe;
    if (G(N, fe) && (xe = N[fe], fe = "%" + xe[0] + "%"), G(A, fe)) {
      var Fe = A[fe];
      if (Fe === y && (Fe = K(fe)), typeof Fe > "u" && !ge)
        throw new s("intrinsic " + se + " exists, but is not available. Please file an issue!");
      return {
        alias: xe,
        name: fe,
        value: Fe
      };
    }
    throw new i("intrinsic " + se + " does not exist!");
  };
  return Ba = function(se, ge) {
    if (typeof se != "string" || se.length === 0)
      throw new s("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof ge != "boolean")
      throw new s('"allowMissing" argument must be a boolean');
    if (Me(/^%?[^%]*%?$/, se) === null)
      throw new i("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var fe = gt(se), xe = fe.length > 0 ? fe[0] : "", Fe = vt("%" + xe + "%", ge), nt = Fe.name, Ie = Fe.value, Ue = !1, rt = Fe.alias;
    rt && (xe = rt[0], Te(fe, oe([0, 1], rt)));
    for (var bn = 1, zt = !0; bn < fe.length; bn += 1) {
      var st = fe[bn], wn = Pe(st, 0, 1), xn = Pe(st, -1);
      if ((wn === '"' || wn === "'" || wn === "`" || xn === '"' || xn === "'" || xn === "`") && wn !== xn)
        throw new i("property names with quotes must have matching quotes");
      if ((st === "constructor" || !zt) && (Ue = !0), xe += "." + st, nt = "%" + xe + "%", G(A, nt))
        Ie = A[nt];
      else if (Ie != null) {
        if (!(st in Ie)) {
          if (!ge)
            throw new s("base intrinsic for " + se + " exists, but the property is not available.");
          return;
        }
        if (v && bn + 1 >= fe.length) {
          var Sn = v(Ie, st);
          zt = !!Sn, zt && "get" in Sn && !("originalValue" in Sn.get) ? Ie = Sn.get : Ie = Ie[st];
        } else
          zt = G(Ie, st), Ie = Ie[st];
        zt && !Ue && (A[nt] = Ie);
      }
    }
    return Ie;
  }, Ba;
}
var Ma, Iu;
function md() {
  if (Iu) return Ma;
  Iu = 1;
  var e = /* @__PURE__ */ ks(), t = hd(), n = t([e("%String.prototype.indexOf%")]);
  return Ma = function(o, a) {
    var i = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(o, !!a)
    );
    return typeof i == "function" && n(o, ".prototype.") > -1 ? t(
      /** @type {const} */
      [i]
    ) : i;
  }, Ma;
}
var Na, Ru;
function yd() {
  if (Ru) return Na;
  Ru = 1;
  var e = /* @__PURE__ */ ks(), t = /* @__PURE__ */ md(), n = /* @__PURE__ */ Oo(), r = /* @__PURE__ */ jn(), o = e("%Map%", !0), a = t("Map.prototype.get", !0), i = t("Map.prototype.set", !0), s = t("Map.prototype.has", !0), c = t("Map.prototype.delete", !0), l = t("Map.prototype.size", !0);
  return Na = !!o && /** @type {Exclude<import('.'), false>} */
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
  }, Na;
}
var ja, Lu;
function f0() {
  if (Lu) return ja;
  Lu = 1;
  var e = /* @__PURE__ */ ks(), t = /* @__PURE__ */ md(), n = /* @__PURE__ */ Oo(), r = yd(), o = /* @__PURE__ */ jn(), a = e("%WeakMap%", !0), i = t("WeakMap.prototype.get", !0), s = t("WeakMap.prototype.set", !0), c = t("WeakMap.prototype.has", !0), l = t("WeakMap.prototype.delete", !0);
  return ja = a ? (
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
        set: function(d, x) {
          a && d && (typeof d == "object" || typeof d == "function") ? (f || (f = new a()), s(f, d, x)) : r && (p || (p = r()), p.set(d, x));
        }
      };
      return h;
    }
  ) : r, ja;
}
var qa, _u;
function d0() {
  if (_u) return qa;
  _u = 1;
  var e = /* @__PURE__ */ jn(), t = /* @__PURE__ */ Oo(), n = jv(), r = yd(), o = f0(), a = o || r || n;
  return qa = function() {
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
  }, qa;
}
var Ua, Bu;
function Ts() {
  if (Bu) return Ua;
  Bu = 1;
  var e = String.prototype.replace, t = /%20/g, n = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return Ua = {
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
  }, Ua;
}
var za, Mu;
function gd() {
  if (Mu) return za;
  Mu = 1;
  var e = /* @__PURE__ */ Ts(), t = Object.prototype.hasOwnProperty, n = Array.isArray, r = function() {
    for (var g = [], m = 0; m < 256; ++m)
      g.push("%" + ((m < 16 ? "0" : "") + m.toString(16)).toUpperCase());
    return g;
  }(), o = function(m) {
    for (; m.length > 1; ) {
      var v = m.pop(), w = v.obj[v.prop];
      if (n(w)) {
        for (var C = [], P = 0; P < w.length; ++P)
          typeof w[P] < "u" && C.push(w[P]);
        v.obj[v.prop] = C;
      }
    }
  }, a = function(m, v) {
    for (var w = v && v.plainObjects ? { __proto__: null } : {}, C = 0; C < m.length; ++C)
      typeof m[C] < "u" && (w[C] = m[C]);
    return w;
  }, i = function g(m, v, w) {
    if (!v)
      return m;
    if (typeof v != "object" && typeof v != "function") {
      if (n(m))
        m.push(v);
      else if (m && typeof m == "object")
        (w && (w.plainObjects || w.allowPrototypes) || !t.call(Object.prototype, v)) && (m[v] = !0);
      else
        return [m, v];
      return m;
    }
    if (!m || typeof m != "object")
      return [m].concat(v);
    var C = m;
    return n(m) && !n(v) && (C = a(m, w)), n(m) && n(v) ? (v.forEach(function(P, $) {
      if (t.call(m, $)) {
        var I = m[$];
        I && typeof I == "object" && P && typeof P == "object" ? m[$] = g(I, P, w) : m.push(P);
      } else
        m[$] = P;
    }), m) : Object.keys(v).reduce(function(P, $) {
      var I = v[$];
      return t.call(P, $) ? P[$] = g(P[$], I, w) : P[$] = I, P;
    }, C);
  }, s = function(m, v) {
    return Object.keys(v).reduce(function(w, C) {
      return w[C] = v[C], w;
    }, m);
  }, c = function(g, m, v) {
    var w = g.replace(/\+/g, " ");
    if (v === "iso-8859-1")
      return w.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(w);
    } catch {
      return w;
    }
  }, l = 1024, u = function(m, v, w, C, P) {
    if (m.length === 0)
      return m;
    var $ = m;
    if (typeof m == "symbol" ? $ = Symbol.prototype.toString.call(m) : typeof m != "string" && ($ = String(m)), w === "iso-8859-1")
      return escape($).replace(/%u[0-9a-f]{4}/gi, function(O) {
        return "%26%23" + parseInt(O.slice(2), 16) + "%3B";
      });
    for (var I = "", U = 0; U < $.length; U += l) {
      for (var T = $.length >= l ? $.slice(U, U + l) : $, k = [], B = 0; B < T.length; ++B) {
        var y = T.charCodeAt(B);
        if (y === 45 || y === 46 || y === 95 || y === 126 || y >= 48 && y <= 57 || y >= 65 && y <= 90 || y >= 97 && y <= 122 || P === e.RFC1738 && (y === 40 || y === 41)) {
          k[k.length] = T.charAt(B);
          continue;
        }
        if (y < 128) {
          k[k.length] = r[y];
          continue;
        }
        if (y < 2048) {
          k[k.length] = r[192 | y >> 6] + r[128 | y & 63];
          continue;
        }
        if (y < 55296 || y >= 57344) {
          k[k.length] = r[224 | y >> 12] + r[128 | y >> 6 & 63] + r[128 | y & 63];
          continue;
        }
        B += 1, y = 65536 + ((y & 1023) << 10 | T.charCodeAt(B) & 1023), k[k.length] = r[240 | y >> 18] + r[128 | y >> 12 & 63] + r[128 | y >> 6 & 63] + r[128 | y & 63];
      }
      I += k.join("");
    }
    return I;
  }, f = function(m) {
    for (var v = [{ obj: { o: m }, prop: "o" }], w = [], C = 0; C < v.length; ++C)
      for (var P = v[C], $ = P.obj[P.prop], I = Object.keys($), U = 0; U < I.length; ++U) {
        var T = I[U], k = $[T];
        typeof k == "object" && k !== null && w.indexOf(k) === -1 && (v.push({ obj: $, prop: T }), w.push(k));
      }
    return o(v), m;
  }, p = function(m) {
    return Object.prototype.toString.call(m) === "[object RegExp]";
  }, h = function(m) {
    return !m || typeof m != "object" ? !1 : !!(m.constructor && m.constructor.isBuffer && m.constructor.isBuffer(m));
  }, d = function(m, v) {
    return [].concat(m, v);
  }, x = function(m, v) {
    if (n(m)) {
      for (var w = [], C = 0; C < m.length; C += 1)
        w.push(v(m[C]));
      return w;
    }
    return v(m);
  };
  return za = {
    arrayToObject: a,
    assign: s,
    combine: d,
    compact: f,
    decode: c,
    encode: u,
    isBuffer: h,
    isRegExp: p,
    maybeMap: x,
    merge: i
  }, za;
}
var Va, Nu;
function p0() {
  if (Nu) return Va;
  Nu = 1;
  var e = d0(), t = /* @__PURE__ */ gd(), n = /* @__PURE__ */ Ts(), r = Object.prototype.hasOwnProperty, o = {
    brackets: function(g) {
      return g + "[]";
    },
    comma: "comma",
    indices: function(g, m) {
      return g + "[" + m + "]";
    },
    repeat: function(g) {
      return g;
    }
  }, a = Array.isArray, i = Array.prototype.push, s = function(x, g) {
    i.apply(x, a(g) ? g : [g]);
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
  }, p = {}, h = function x(g, m, v, w, C, P, $, I, U, T, k, B, y, O, A, S, K, N) {
    for (var L = g, G = N, oe = 0, Te = !1; (G = G.get(p)) !== void 0 && !Te; ) {
      var Ge = G.get(g);
      if (oe += 1, typeof Ge < "u") {
        if (Ge === oe)
          throw new RangeError("Cyclic object value");
        Te = !0;
      }
      typeof G.get(p) > "u" && (oe = 0);
    }
    if (typeof T == "function" ? L = T(m, L) : L instanceof Date ? L = y(L) : v === "comma" && a(L) && (L = t.maybeMap(L, function(nt) {
      return nt instanceof Date ? y(nt) : nt;
    })), L === null) {
      if (P)
        return U && !S ? U(m, u.encoder, K, "key", O) : m;
      L = "";
    }
    if (f(L) || t.isBuffer(L)) {
      if (U) {
        var Pe = S ? m : U(m, u.encoder, K, "key", O);
        return [A(Pe) + "=" + A(U(L, u.encoder, K, "value", O))];
      }
      return [A(m) + "=" + A(String(L))];
    }
    var Me = [];
    if (typeof L > "u")
      return Me;
    var $e;
    if (v === "comma" && a(L))
      S && U && (L = t.maybeMap(L, U)), $e = [{ value: L.length > 0 ? L.join(",") || null : void 0 }];
    else if (a(T))
      $e = T;
    else {
      var Ne = Object.keys(L);
      $e = k ? Ne.sort(k) : Ne;
    }
    var gt = I ? String(m).replace(/\./g, "%2E") : String(m), vt = w && a(L) && L.length === 1 ? gt + "[]" : gt;
    if (C && a(L) && L.length === 0)
      return vt + "[]";
    for (var Ee = 0; Ee < $e.length; ++Ee) {
      var se = $e[Ee], ge = typeof se == "object" && se && typeof se.value < "u" ? se.value : L[se];
      if (!($ && ge === null)) {
        var fe = B && I ? String(se).replace(/\./g, "%2E") : String(se), xe = a(L) ? typeof v == "function" ? v(vt, fe) : vt : vt + (B ? "." + fe : "[" + fe + "]");
        N.set(g, oe);
        var Fe = e();
        Fe.set(p, N), s(Me, x(
          ge,
          xe,
          v,
          w,
          C,
          P,
          $,
          I,
          v === "comma" && S && a(L) ? null : U,
          T,
          k,
          B,
          y,
          O,
          A,
          S,
          K,
          Fe
        ));
      }
    }
    return Me;
  }, d = function(g) {
    if (!g)
      return u;
    if (typeof g.allowEmptyArrays < "u" && typeof g.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof g.encodeDotInKeys < "u" && typeof g.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (g.encoder !== null && typeof g.encoder < "u" && typeof g.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var m = g.charset || u.charset;
    if (typeof g.charset < "u" && g.charset !== "utf-8" && g.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var v = n.default;
    if (typeof g.format < "u") {
      if (!r.call(n.formatters, g.format))
        throw new TypeError("Unknown format option provided.");
      v = g.format;
    }
    var w = n.formatters[v], C = u.filter;
    (typeof g.filter == "function" || a(g.filter)) && (C = g.filter);
    var P;
    if (g.arrayFormat in o ? P = g.arrayFormat : "indices" in g ? P = g.indices ? "indices" : "repeat" : P = u.arrayFormat, "commaRoundTrip" in g && typeof g.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var $ = typeof g.allowDots > "u" ? g.encodeDotInKeys === !0 ? !0 : u.allowDots : !!g.allowDots;
    return {
      addQueryPrefix: typeof g.addQueryPrefix == "boolean" ? g.addQueryPrefix : u.addQueryPrefix,
      allowDots: $,
      allowEmptyArrays: typeof g.allowEmptyArrays == "boolean" ? !!g.allowEmptyArrays : u.allowEmptyArrays,
      arrayFormat: P,
      charset: m,
      charsetSentinel: typeof g.charsetSentinel == "boolean" ? g.charsetSentinel : u.charsetSentinel,
      commaRoundTrip: !!g.commaRoundTrip,
      delimiter: typeof g.delimiter > "u" ? u.delimiter : g.delimiter,
      encode: typeof g.encode == "boolean" ? g.encode : u.encode,
      encodeDotInKeys: typeof g.encodeDotInKeys == "boolean" ? g.encodeDotInKeys : u.encodeDotInKeys,
      encoder: typeof g.encoder == "function" ? g.encoder : u.encoder,
      encodeValuesOnly: typeof g.encodeValuesOnly == "boolean" ? g.encodeValuesOnly : u.encodeValuesOnly,
      filter: C,
      format: v,
      formatter: w,
      serializeDate: typeof g.serializeDate == "function" ? g.serializeDate : u.serializeDate,
      skipNulls: typeof g.skipNulls == "boolean" ? g.skipNulls : u.skipNulls,
      sort: typeof g.sort == "function" ? g.sort : null,
      strictNullHandling: typeof g.strictNullHandling == "boolean" ? g.strictNullHandling : u.strictNullHandling
    };
  };
  return Va = function(x, g) {
    var m = x, v = d(g), w, C;
    typeof v.filter == "function" ? (C = v.filter, m = C("", m)) : a(v.filter) && (C = v.filter, w = C);
    var P = [];
    if (typeof m != "object" || m === null)
      return "";
    var $ = o[v.arrayFormat], I = $ === "comma" && v.commaRoundTrip;
    w || (w = Object.keys(m)), v.sort && w.sort(v.sort);
    for (var U = e(), T = 0; T < w.length; ++T) {
      var k = w[T], B = m[k];
      v.skipNulls && B === null || s(P, h(
        B,
        k,
        $,
        I,
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
        U
      ));
    }
    var y = P.join(v.delimiter), O = v.addQueryPrefix === !0 ? "?" : "";
    return v.charsetSentinel && (v.charset === "iso-8859-1" ? O += "utf8=%26%2310003%3B&" : O += "utf8=%E2%9C%93&"), y.length > 0 ? O + y : "";
  }, Va;
}
var Ha, ju;
function h0() {
  if (ju) return Ha;
  ju = 1;
  var e = /* @__PURE__ */ gd(), t = Object.prototype.hasOwnProperty, n = Array.isArray, r = {
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
    var x = { __proto__: null }, g = d.ignoreQueryPrefix ? h.replace(/^\?/, "") : h;
    g = g.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var m = d.parameterLimit === 1 / 0 ? void 0 : d.parameterLimit, v = g.split(
      d.delimiter,
      d.throwOnLimitExceeded ? m + 1 : m
    );
    if (d.throwOnLimitExceeded && v.length > m)
      throw new RangeError("Parameter limit exceeded. Only " + m + " parameter" + (m === 1 ? "" : "s") + " allowed.");
    var w = -1, C, P = d.charset;
    if (d.charsetSentinel)
      for (C = 0; C < v.length; ++C)
        v[C].indexOf("utf8=") === 0 && (v[C] === s ? P = "utf-8" : v[C] === i && (P = "iso-8859-1"), w = C, C = v.length);
    for (C = 0; C < v.length; ++C)
      if (C !== w) {
        var $ = v[C], I = $.indexOf("]="), U = I === -1 ? $.indexOf("=") : I + 1, T, k;
        U === -1 ? (T = d.decoder($, r.decoder, P, "key"), k = d.strictNullHandling ? null : "") : (T = d.decoder($.slice(0, U), r.decoder, P, "key"), k = e.maybeMap(
          a(
            $.slice(U + 1),
            d,
            n(x[T]) ? x[T].length : 0
          ),
          function(y) {
            return d.decoder(y, r.decoder, P, "value");
          }
        )), k && d.interpretNumericEntities && P === "iso-8859-1" && (k = o(String(k))), $.indexOf("[]=") > -1 && (k = n(k) ? [k] : k);
        var B = t.call(x, T);
        B && d.duplicates === "combine" ? x[T] = e.combine(x[T], k) : (!B || d.duplicates === "last") && (x[T] = k);
      }
    return x;
  }, l = function(p, h, d, x) {
    var g = 0;
    if (p.length > 0 && p[p.length - 1] === "[]") {
      var m = p.slice(0, -1).join("");
      g = Array.isArray(h) && h[m] ? h[m].length : 0;
    }
    for (var v = x ? h : a(h, d, g), w = p.length - 1; w >= 0; --w) {
      var C, P = p[w];
      if (P === "[]" && d.parseArrays)
        C = d.allowEmptyArrays && (v === "" || d.strictNullHandling && v === null) ? [] : e.combine([], v);
      else {
        C = d.plainObjects ? { __proto__: null } : {};
        var $ = P.charAt(0) === "[" && P.charAt(P.length - 1) === "]" ? P.slice(1, -1) : P, I = d.decodeDotInKeys ? $.replace(/%2E/g, ".") : $, U = parseInt(I, 10);
        !d.parseArrays && I === "" ? C = { 0: v } : !isNaN(U) && P !== I && String(U) === I && U >= 0 && d.parseArrays && U <= d.arrayLimit ? (C = [], C[U] = v) : I !== "__proto__" && (C[I] = v);
      }
      v = C;
    }
    return v;
  }, u = function(h, d, x, g) {
    if (h) {
      var m = x.allowDots ? h.replace(/\.([^.[]+)/g, "[$1]") : h, v = /(\[[^[\]]*])/, w = /(\[[^[\]]*])/g, C = x.depth > 0 && v.exec(m), P = C ? m.slice(0, C.index) : m, $ = [];
      if (P) {
        if (!x.plainObjects && t.call(Object.prototype, P) && !x.allowPrototypes)
          return;
        $.push(P);
      }
      for (var I = 0; x.depth > 0 && (C = w.exec(m)) !== null && I < x.depth; ) {
        if (I += 1, !x.plainObjects && t.call(Object.prototype, C[1].slice(1, -1)) && !x.allowPrototypes)
          return;
        $.push(C[1]);
      }
      if (C) {
        if (x.strictDepth === !0)
          throw new RangeError("Input depth exceeded depth option of " + x.depth + " and strictDepth is true");
        $.push("[" + m.slice(C.index) + "]");
      }
      return l($, d, x, g);
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
    var d = typeof h.charset > "u" ? r.charset : h.charset, x = typeof h.duplicates > "u" ? r.duplicates : h.duplicates;
    if (x !== "combine" && x !== "first" && x !== "last")
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
      duplicates: x,
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
  return Ha = function(p, h) {
    var d = f(h);
    if (p === "" || p === null || typeof p > "u")
      return d.plainObjects ? { __proto__: null } : {};
    for (var x = typeof p == "string" ? c(p, d) : p, g = d.plainObjects ? { __proto__: null } : {}, m = Object.keys(x), v = 0; v < m.length; ++v) {
      var w = m[v], C = u(w, x[w], d, typeof p == "string");
      g = e.merge(g, C, d);
    }
    return d.allowSparse === !0 ? g : e.compact(g);
  }, Ha;
}
var Wa, qu;
function m0() {
  if (qu) return Wa;
  qu = 1;
  var e = /* @__PURE__ */ p0(), t = /* @__PURE__ */ h0(), n = /* @__PURE__ */ Ts();
  return Wa = {
    formats: n,
    parse: t,
    stringify: e
  }, Wa;
}
var Uu = /* @__PURE__ */ m0();
function vd(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: y0 } = Object.prototype, { getPrototypeOf: Ds } = Object, { iterator: Ao, toStringTag: bd } = Symbol, Co = /* @__PURE__ */ ((e) => (t) => {
  const n = y0.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), mt = (e) => (e = e.toLowerCase(), (t) => Co(t) === e), Po = (e) => (t) => typeof t === e, { isArray: qn } = Array, dr = Po("undefined");
function g0(e) {
  return e !== null && !dr(e) && e.constructor !== null && !dr(e.constructor) && He(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const wd = mt("ArrayBuffer");
function v0(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && wd(e.buffer), t;
}
const b0 = Po("string"), He = Po("function"), xd = Po("number"), ko = (e) => e !== null && typeof e == "object", w0 = (e) => e === !0 || e === !1, Kr = (e) => {
  if (Co(e) !== "object")
    return !1;
  const t = Ds(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(bd in e) && !(Ao in e);
}, x0 = mt("Date"), S0 = mt("File"), O0 = mt("Blob"), E0 = mt("FileList"), A0 = (e) => ko(e) && He(e.pipe), C0 = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || He(e.append) && ((t = Co(e)) === "formdata" || // detect form-data instance
  t === "object" && He(e.toString) && e.toString() === "[object FormData]"));
}, P0 = mt("URLSearchParams"), [k0, T0, D0, $0] = ["ReadableStream", "Request", "Response", "Headers"].map(mt), F0 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function wr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), qn(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = a.length;
    let s;
    for (r = 0; r < i; r++)
      s = a[r], t.call(null, e[s], s, e);
  }
}
function Sd(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const sn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Od = (e) => !dr(e) && e !== sn;
function ji() {
  const { caseless: e } = Od(this) && this || {}, t = {}, n = (r, o) => {
    const a = e && Sd(t, o) || o;
    Kr(t[a]) && Kr(r) ? t[a] = ji(t[a], r) : Kr(r) ? t[a] = ji({}, r) : qn(r) ? t[a] = r.slice() : t[a] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && wr(arguments[r], n);
  return t;
}
const I0 = (e, t, n, { allOwnKeys: r } = {}) => (wr(t, (o, a) => {
  n && He(o) ? e[a] = vd(o, n) : e[a] = o;
}, { allOwnKeys: r }), e), R0 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), L0 = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, _0 = (e, t, n, r) => {
  let o, a, i;
  const s = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      i = o[a], (!r || r(i, e, t)) && !s[i] && (t[i] = e[i], s[i] = !0);
    e = n !== !1 && Ds(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, B0 = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, M0 = (e) => {
  if (!e) return null;
  if (qn(e)) return e;
  let t = e.length;
  if (!xd(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, N0 = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ds(Uint8Array)), j0 = (e, t) => {
  const r = (e && e[Ao]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, q0 = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, U0 = mt("HTMLFormElement"), z0 = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), zu = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), V0 = mt("RegExp"), Ed = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  wr(n, (o, a) => {
    let i;
    (i = t(o, a, e)) !== !1 && (r[a] = i || o);
  }), Object.defineProperties(e, r);
}, H0 = (e) => {
  Ed(e, (t, n) => {
    if (He(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (He(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, W0 = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((a) => {
      n[a] = !0;
    });
  };
  return qn(e) ? r(e) : r(String(e).split(t)), n;
}, K0 = () => {
}, G0 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Y0(e) {
  return !!(e && He(e.append) && e[bd] === "FormData" && e[Ao]);
}
const X0 = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (ko(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const a = qn(r) ? [] : {};
        return wr(r, (i, s) => {
          const c = n(i, o + 1);
          !dr(c) && (a[s] = c);
        }), t[o] = void 0, a;
      }
    }
    return r;
  };
  return n(e, 0);
}, J0 = mt("AsyncFunction"), Q0 = (e) => e && (ko(e) || He(e)) && He(e.then) && He(e.catch), Ad = ((e, t) => e ? setImmediate : t ? ((n, r) => (sn.addEventListener("message", ({ source: o, data: a }) => {
  o === sn && a === n && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), sn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  He(sn.postMessage)
), Z0 = typeof queueMicrotask < "u" ? queueMicrotask.bind(sn) : typeof process < "u" && process.nextTick || Ad, eb = (e) => e != null && He(e[Ao]), _ = {
  isArray: qn,
  isArrayBuffer: wd,
  isBuffer: g0,
  isFormData: C0,
  isArrayBufferView: v0,
  isString: b0,
  isNumber: xd,
  isBoolean: w0,
  isObject: ko,
  isPlainObject: Kr,
  isReadableStream: k0,
  isRequest: T0,
  isResponse: D0,
  isHeaders: $0,
  isUndefined: dr,
  isDate: x0,
  isFile: S0,
  isBlob: O0,
  isRegExp: V0,
  isFunction: He,
  isStream: A0,
  isURLSearchParams: P0,
  isTypedArray: N0,
  isFileList: E0,
  forEach: wr,
  merge: ji,
  extend: I0,
  trim: F0,
  stripBOM: R0,
  inherits: L0,
  toFlatObject: _0,
  kindOf: Co,
  kindOfTest: mt,
  endsWith: B0,
  toArray: M0,
  forEachEntry: j0,
  matchAll: q0,
  isHTMLForm: U0,
  hasOwnProperty: zu,
  hasOwnProp: zu,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ed,
  freezeMethods: H0,
  toObjectSet: W0,
  toCamelCase: z0,
  noop: K0,
  toFiniteNumber: G0,
  findKey: Sd,
  global: sn,
  isContextDefined: Od,
  isSpecCompliantForm: Y0,
  toJSONObject: X0,
  isAsyncFn: J0,
  isThenable: Q0,
  setImmediate: Ad,
  asap: Z0,
  isIterable: eb
};
function ne(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
_.inherits(ne, Error, {
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
      config: _.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Cd = ne.prototype, Pd = {};
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
  Pd[e] = { value: e };
});
Object.defineProperties(ne, Pd);
Object.defineProperty(Cd, "isAxiosError", { value: !0 });
ne.from = (e, t, n, r, o, a) => {
  const i = Object.create(Cd);
  return _.toFlatObject(e, i, function(c) {
    return c !== Error.prototype;
  }, (s) => s !== "isAxiosError"), ne.call(i, e.message, t, n, r, o), i.cause = e, i.name = e.name, a && Object.assign(i, a), i;
};
const tb = null;
function qi(e) {
  return _.isPlainObject(e) || _.isArray(e);
}
function kd(e) {
  return _.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Vu(e, t, n) {
  return e ? e.concat(t).map(function(o, a) {
    return o = kd(o), !n && a ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function nb(e) {
  return _.isArray(e) && !e.some(qi);
}
const rb = _.toFlatObject(_, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function To(e, t, n) {
  if (!_.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = _.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(x, g) {
    return !_.isUndefined(g[x]);
  });
  const r = n.metaTokens, o = n.visitor || u, a = n.dots, i = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && _.isSpecCompliantForm(t);
  if (!_.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(d) {
    if (d === null) return "";
    if (_.isDate(d))
      return d.toISOString();
    if (!c && _.isBlob(d))
      throw new ne("Blob is not supported. Use a Buffer instead.");
    return _.isArrayBuffer(d) || _.isTypedArray(d) ? c && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function u(d, x, g) {
    let m = d;
    if (d && !g && typeof d == "object") {
      if (_.endsWith(x, "{}"))
        x = r ? x : x.slice(0, -2), d = JSON.stringify(d);
      else if (_.isArray(d) && nb(d) || (_.isFileList(d) || _.endsWith(x, "[]")) && (m = _.toArray(d)))
        return x = kd(x), m.forEach(function(w, C) {
          !(_.isUndefined(w) || w === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Vu([x], C, a) : i === null ? x : x + "[]",
            l(w)
          );
        }), !1;
    }
    return qi(d) ? !0 : (t.append(Vu(g, x, a), l(d)), !1);
  }
  const f = [], p = Object.assign(rb, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: qi
  });
  function h(d, x) {
    if (!_.isUndefined(d)) {
      if (f.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      f.push(d), _.forEach(d, function(m, v) {
        (!(_.isUndefined(m) || m === null) && o.call(
          t,
          m,
          _.isString(v) ? v.trim() : v,
          x,
          p
        )) === !0 && h(m, x ? x.concat(v) : [v]);
      }), f.pop();
    }
  }
  if (!_.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function Hu(e) {
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
function $s(e, t) {
  this._pairs = [], e && To(e, this, t);
}
const Td = $s.prototype;
Td.append = function(t, n) {
  this._pairs.push([t, n]);
};
Td.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Hu);
  } : Hu;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function ob(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Dd(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || ob;
  _.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let a;
  if (o ? a = o(t, n) : a = _.isURLSearchParams(t) ? t.toString() : new $s(t, n).toString(r), a) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class Wu {
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
    _.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const $d = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ab = typeof URLSearchParams < "u" ? URLSearchParams : $s, ib = typeof FormData < "u" ? FormData : null, sb = typeof Blob < "u" ? Blob : null, lb = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ab,
    FormData: ib,
    Blob: sb
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Fs = typeof window < "u" && typeof document < "u", Ui = typeof navigator == "object" && navigator || void 0, ub = Fs && (!Ui || ["ReactNative", "NativeScript", "NS"].indexOf(Ui.product) < 0), cb = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", fb = Fs && window.location.href || "http://localhost", db = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Fs,
  hasStandardBrowserEnv: ub,
  hasStandardBrowserWebWorkerEnv: cb,
  navigator: Ui,
  origin: fb
}, Symbol.toStringTag, { value: "Module" })), Le = {
  ...db,
  ...lb
};
function pb(e, t) {
  return To(e, new Le.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, a) {
      return Le.isNode && _.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function hb(e) {
  return _.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function mb(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let a;
  for (r = 0; r < o; r++)
    a = n[r], t[a] = e[a];
  return t;
}
function Fd(e) {
  function t(n, r, o, a) {
    let i = n[a++];
    if (i === "__proto__") return !0;
    const s = Number.isFinite(+i), c = a >= n.length;
    return i = !i && _.isArray(o) ? o.length : i, c ? (_.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r, !s) : ((!o[i] || !_.isObject(o[i])) && (o[i] = []), t(n, r, o[i], a) && _.isArray(o[i]) && (o[i] = mb(o[i])), !s);
  }
  if (_.isFormData(e) && _.isFunction(e.entries)) {
    const n = {};
    return _.forEachEntry(e, (r, o) => {
      t(hb(r), o, n, 0);
    }), n;
  }
  return null;
}
function yb(e, t, n) {
  if (_.isString(e))
    try {
      return (t || JSON.parse)(e), _.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const xr = {
  transitional: $d,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, a = _.isObject(t);
    if (a && _.isHTMLForm(t) && (t = new FormData(t)), _.isFormData(t))
      return o ? JSON.stringify(Fd(t)) : t;
    if (_.isArrayBuffer(t) || _.isBuffer(t) || _.isStream(t) || _.isFile(t) || _.isBlob(t) || _.isReadableStream(t))
      return t;
    if (_.isArrayBufferView(t))
      return t.buffer;
    if (_.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (a) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return pb(t, this.formSerializer).toString();
      if ((s = _.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return To(
          s ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return a || o ? (n.setContentType("application/json", !1), yb(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || xr.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (_.isResponse(t) || _.isReadableStream(t))
      return t;
    if (t && _.isString(t) && (r && !this.responseType || o)) {
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
    FormData: Le.classes.FormData,
    Blob: Le.classes.Blob
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
_.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  xr.headers[e] = {};
});
const gb = _.toObjectSet([
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
]), vb = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || t[n] && gb[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Ku = Symbol("internals");
function Xn(e) {
  return e && String(e).trim().toLowerCase();
}
function Gr(e) {
  return e === !1 || e == null ? e : _.isArray(e) ? e.map(Gr) : String(e);
}
function bb(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const wb = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ka(e, t, n, r, o) {
  if (_.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!_.isString(t)) {
    if (_.isString(r))
      return t.indexOf(r) !== -1;
    if (_.isRegExp(r))
      return r.test(t);
  }
}
function xb(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Sb(e, t) {
  const n = _.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, a, i) {
        return this[r].call(this, t, o, a, i);
      },
      configurable: !0
    });
  });
}
let We = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function a(s, c, l) {
      const u = Xn(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = _.findKey(o, u);
      (!f || o[f] === void 0 || l === !0 || l === void 0 && o[f] !== !1) && (o[f || c] = Gr(s));
    }
    const i = (s, c) => _.forEach(s, (l, u) => a(l, u, c));
    if (_.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (_.isString(t) && (t = t.trim()) && !wb(t))
      i(vb(t), n);
    else if (_.isObject(t) && _.isIterable(t)) {
      let s = {}, c, l;
      for (const u of t) {
        if (!_.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        s[l = u[0]] = (c = s[l]) ? _.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1];
      }
      i(s, n);
    } else
      t != null && a(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Xn(t), t) {
      const r = _.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return bb(o);
        if (_.isFunction(n))
          return n.call(this, o, r);
        if (_.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Xn(t), t) {
      const r = _.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Ka(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function a(i) {
      if (i = Xn(i), i) {
        const s = _.findKey(r, i);
        s && (!n || Ka(r, r[s], s, n)) && (delete r[s], o = !0);
      }
    }
    return _.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || Ka(this, this[a], a, t, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return _.forEach(this, (o, a) => {
      const i = _.findKey(r, a);
      if (i) {
        n[i] = Gr(o), delete n[a];
        return;
      }
      const s = t ? xb(a) : String(a).trim();
      s !== a && delete n[a], n[s] = Gr(o), r[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return _.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && _.isArray(r) ? r.join(", ") : r);
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
    const r = (this[Ku] = this[Ku] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(i) {
      const s = Xn(i);
      r[s] || (Sb(o, i), r[s] = !0);
    }
    return _.isArray(t) ? t.forEach(a) : a(t), this;
  }
};
We.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
_.reduceDescriptors(We.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
_.freezeMethods(We);
function Ga(e, t) {
  const n = this || xr, r = t || n, o = We.from(r.headers);
  let a = r.data;
  return _.forEach(e, function(s) {
    a = s.call(n, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function Id(e) {
  return !!(e && e.__CANCEL__);
}
function Un(e, t, n) {
  ne.call(this, e ?? "canceled", ne.ERR_CANCELED, t, n), this.name = "CanceledError";
}
_.inherits(Un, ne, {
  __CANCEL__: !0
});
function Rd(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new ne(
    "Request failed with status code " + n.status,
    [ne.ERR_BAD_REQUEST, ne.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Ob(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Eb(e, t) {
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
function Ab(e, t) {
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
const io = (e, t, n = 3) => {
  let r = 0;
  const o = Eb(50, 250);
  return Ab((a) => {
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
}, Gu = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Yu = (e) => (...t) => _.asap(() => e(...t)), Cb = Le.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, Le.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(Le.origin),
  Le.navigator && /(msie|trident)/i.test(Le.navigator.userAgent)
) : () => !0, Pb = Le.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, a) {
      const i = [e + "=" + encodeURIComponent(t)];
      _.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), _.isString(r) && i.push("path=" + r), _.isString(o) && i.push("domain=" + o), a === !0 && i.push("secure"), document.cookie = i.join("; ");
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
function kb(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Tb(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ld(e, t, n) {
  let r = !kb(t);
  return e && (r || n == !1) ? Tb(e, t) : t;
}
const Xu = (e) => e instanceof We ? { ...e } : e;
function pn(e, t) {
  t = t || {};
  const n = {};
  function r(l, u, f, p) {
    return _.isPlainObject(l) && _.isPlainObject(u) ? _.merge.call({ caseless: p }, l, u) : _.isPlainObject(u) ? _.merge({}, u) : _.isArray(u) ? u.slice() : u;
  }
  function o(l, u, f, p) {
    if (_.isUndefined(u)) {
      if (!_.isUndefined(l))
        return r(void 0, l, f, p);
    } else return r(l, u, f, p);
  }
  function a(l, u) {
    if (!_.isUndefined(u))
      return r(void 0, u);
  }
  function i(l, u) {
    if (_.isUndefined(u)) {
      if (!_.isUndefined(l))
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
    headers: (l, u, f) => o(Xu(l), Xu(u), f, !0)
  };
  return _.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const f = c[u] || o, p = f(e[u], t[u], u);
    _.isUndefined(p) && f !== s || (n[u] = p);
  }), n;
}
const _d = (e) => {
  const t = pn({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: a, headers: i, auth: s } = t;
  t.headers = i = We.from(i), t.url = Dd(Ld(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), s && i.set(
    "Authorization",
    "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))
  );
  let c;
  if (_.isFormData(n)) {
    if (Le.hasStandardBrowserEnv || Le.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((c = i.getContentType()) !== !1) {
      const [l, ...u] = c ? c.split(";").map((f) => f.trim()).filter(Boolean) : [];
      i.setContentType([l || "multipart/form-data", ...u].join("; "));
    }
  }
  if (Le.hasStandardBrowserEnv && (r && _.isFunction(r) && (r = r(t)), r || r !== !1 && Cb(t.url))) {
    const l = o && a && Pb.read(a);
    l && i.set(o, l);
  }
  return t;
}, Db = typeof XMLHttpRequest < "u", $b = Db && function(e) {
  return new Promise(function(n, r) {
    const o = _d(e);
    let a = o.data;
    const i = We.from(o.headers).normalize();
    let { responseType: s, onUploadProgress: c, onDownloadProgress: l } = o, u, f, p, h, d;
    function x() {
      h && h(), d && d(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let g = new XMLHttpRequest();
    g.open(o.method.toUpperCase(), o.url, !0), g.timeout = o.timeout;
    function m() {
      if (!g)
        return;
      const w = We.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), P = {
        data: !s || s === "text" || s === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: w,
        config: e,
        request: g
      };
      Rd(function(I) {
        n(I), x();
      }, function(I) {
        r(I), x();
      }, P), g = null;
    }
    "onloadend" in g ? g.onloadend = m : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(m);
    }, g.onabort = function() {
      g && (r(new ne("Request aborted", ne.ECONNABORTED, e, g)), g = null);
    }, g.onerror = function() {
      r(new ne("Network Error", ne.ERR_NETWORK, e, g)), g = null;
    }, g.ontimeout = function() {
      let C = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const P = o.transitional || $d;
      o.timeoutErrorMessage && (C = o.timeoutErrorMessage), r(new ne(
        C,
        P.clarifyTimeoutError ? ne.ETIMEDOUT : ne.ECONNABORTED,
        e,
        g
      )), g = null;
    }, a === void 0 && i.setContentType(null), "setRequestHeader" in g && _.forEach(i.toJSON(), function(C, P) {
      g.setRequestHeader(P, C);
    }), _.isUndefined(o.withCredentials) || (g.withCredentials = !!o.withCredentials), s && s !== "json" && (g.responseType = o.responseType), l && ([p, d] = io(l, !0), g.addEventListener("progress", p)), c && g.upload && ([f, h] = io(c), g.upload.addEventListener("progress", f), g.upload.addEventListener("loadend", h)), (o.cancelToken || o.signal) && (u = (w) => {
      g && (r(!w || w.type ? new Un(null, e, g) : w), g.abort(), g = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const v = Ob(o.url);
    if (v && Le.protocols.indexOf(v) === -1) {
      r(new ne("Unsupported protocol " + v + ":", ne.ERR_BAD_REQUEST, e));
      return;
    }
    g.send(a || null);
  });
}, Fb = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const a = function(l) {
      if (!o) {
        o = !0, s();
        const u = l instanceof Error ? l : this.reason;
        r.abort(u instanceof ne ? u : new Un(u instanceof Error ? u.message : u));
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
    return c.unsubscribe = () => _.asap(s), c;
  }
}, Ib = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, Rb = async function* (e, t) {
  for await (const n of Lb(e))
    yield* Ib(n, t);
}, Lb = async function* (e) {
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
}, Ju = (e, t, n, r) => {
  const o = Rb(e, t);
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
}, Do = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Bd = Do && typeof ReadableStream == "function", _b = Do && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Md = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Bb = Bd && Md(() => {
  let e = !1;
  const t = new Request(Le.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Qu = 64 * 1024, zi = Bd && Md(() => _.isReadableStream(new Response("").body)), so = {
  stream: zi && ((e) => e.body)
};
Do && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !so[t] && (so[t] = _.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new ne(`Response type '${t}' is not supported`, ne.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Mb = async (e) => {
  if (e == null)
    return 0;
  if (_.isBlob(e))
    return e.size;
  if (_.isSpecCompliantForm(e))
    return (await new Request(Le.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (_.isArrayBufferView(e) || _.isArrayBuffer(e))
    return e.byteLength;
  if (_.isURLSearchParams(e) && (e = e + ""), _.isString(e))
    return (await _b(e)).byteLength;
}, Nb = async (e, t) => {
  const n = _.toFiniteNumber(e.getContentLength());
  return n ?? Mb(t);
}, jb = Do && (async (e) => {
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
  } = _d(e);
  l = l ? (l + "").toLowerCase() : "text";
  let h = Fb([o, a && a.toAbortSignal()], i), d;
  const x = h && h.unsubscribe && (() => {
    h.unsubscribe();
  });
  let g;
  try {
    if (c && Bb && n !== "get" && n !== "head" && (g = await Nb(u, r)) !== 0) {
      let P = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), $;
      if (_.isFormData(r) && ($ = P.headers.get("content-type")) && u.setContentType($), P.body) {
        const [I, U] = Gu(
          g,
          io(Yu(c))
        );
        r = Ju(P.body, Qu, I, U);
      }
    }
    _.isString(f) || (f = f ? "include" : "omit");
    const m = "credentials" in Request.prototype;
    d = new Request(t, {
      ...p,
      signal: h,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: m ? f : void 0
    });
    let v = await fetch(d);
    const w = zi && (l === "stream" || l === "response");
    if (zi && (s || w && x)) {
      const P = {};
      ["status", "statusText", "headers"].forEach((T) => {
        P[T] = v[T];
      });
      const $ = _.toFiniteNumber(v.headers.get("content-length")), [I, U] = s && Gu(
        $,
        io(Yu(s), !0)
      ) || [];
      v = new Response(
        Ju(v.body, Qu, I, () => {
          U && U(), x && x();
        }),
        P
      );
    }
    l = l || "text";
    let C = await so[_.findKey(so, l) || "text"](v, e);
    return !w && x && x(), await new Promise((P, $) => {
      Rd(P, $, {
        data: C,
        headers: We.from(v.headers),
        status: v.status,
        statusText: v.statusText,
        config: e,
        request: d
      });
    });
  } catch (m) {
    throw x && x(), m && m.name === "TypeError" && /Load failed|fetch/i.test(m.message) ? Object.assign(
      new ne("Network Error", ne.ERR_NETWORK, e, d),
      {
        cause: m.cause || m
      }
    ) : ne.from(m, m && m.code, e, d);
  }
}), Vi = {
  http: tb,
  xhr: $b,
  fetch: jb
};
_.forEach(Vi, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Zu = (e) => `- ${e}`, qb = (e) => _.isFunction(e) || e === null || e === !1, Nd = {
  getAdapter: (e) => {
    e = _.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let a = 0; a < t; a++) {
      n = e[a];
      let i;
      if (r = n, !qb(n) && (r = Vi[(i = String(n)).toLowerCase()], r === void 0))
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
` + a.map(Zu).join(`
`) : " " + Zu(a[0]) : "as no adapter specified";
      throw new ne(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Vi
};
function Ya(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Un(null, e);
}
function ec(e) {
  return Ya(e), e.headers = We.from(e.headers), e.data = Ga.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Nd.getAdapter(e.adapter || xr.adapter)(e).then(function(r) {
    return Ya(e), r.data = Ga.call(
      e,
      e.transformResponse,
      r
    ), r.headers = We.from(r.headers), r;
  }, function(r) {
    return Id(r) || (Ya(e), r && r.response && (r.response.data = Ga.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = We.from(r.response.headers))), Promise.reject(r);
  });
}
const jd = "1.9.0", $o = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  $o[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const tc = {};
$o.transitional = function(t, n, r) {
  function o(a, i) {
    return "[Axios v" + jd + "] Transitional option '" + a + "'" + i + (r ? ". " + r : "");
  }
  return (a, i, s) => {
    if (t === !1)
      throw new ne(
        o(i, " has been removed" + (n ? " in " + n : "")),
        ne.ERR_DEPRECATED
      );
    return n && !tc[i] && (tc[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(a, i, s) : !0;
  };
};
$o.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Ub(e, t, n) {
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
const Yr = {
  assertOptions: Ub,
  validators: $o
}, bt = Yr.validators;
let cn = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Wu(),
      response: new Wu()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = pn(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: a } = n;
    r !== void 0 && Yr.assertOptions(r, {
      silentJSONParsing: bt.transitional(bt.boolean),
      forcedJSONParsing: bt.transitional(bt.boolean),
      clarifyTimeoutError: bt.transitional(bt.boolean)
    }, !1), o != null && (_.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Yr.assertOptions(o, {
      encode: bt.function,
      serialize: bt.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Yr.assertOptions(n, {
      baseUrl: bt.spelling("baseURL"),
      withXsrfToken: bt.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = a && _.merge(
      a.common,
      a[n.method]
    );
    a && _.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete a[d];
      }
    ), n.headers = We.concat(i, a);
    const s = [];
    let c = !0;
    this.interceptors.request.forEach(function(x) {
      typeof x.runWhen == "function" && x.runWhen(n) === !1 || (c = c && x.synchronous, s.unshift(x.fulfilled, x.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(x) {
      l.push(x.fulfilled, x.rejected);
    });
    let u, f = 0, p;
    if (!c) {
      const d = [ec.bind(this), void 0];
      for (d.unshift.apply(d, s), d.push.apply(d, l), p = d.length, u = Promise.resolve(n); f < p; )
        u = u.then(d[f++], d[f++]);
      return u;
    }
    p = s.length;
    let h = n;
    for (f = 0; f < p; ) {
      const d = s[f++], x = s[f++];
      try {
        h = d(h);
      } catch (g) {
        x.call(this, g);
        break;
      }
    }
    try {
      u = ec.call(this, h);
    } catch (d) {
      return Promise.reject(d);
    }
    for (f = 0, p = l.length; f < p; )
      u = u.then(l[f++], l[f++]);
    return u;
  }
  getUri(t) {
    t = pn(this.defaults, t);
    const n = Ld(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Dd(n, t.params, t.paramsSerializer);
  }
};
_.forEach(["delete", "get", "head", "options"], function(t) {
  cn.prototype[t] = function(n, r) {
    return this.request(pn(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
_.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(a, i, s) {
      return this.request(pn(s || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: i
      }));
    };
  }
  cn.prototype[t] = n(), cn.prototype[t + "Form"] = n(!0);
});
let zb = class qd {
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
      r.reason || (r.reason = new Un(a, i, s), n(r.reason));
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
      token: new qd(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function Vb(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Hb(e) {
  return _.isObject(e) && e.isAxiosError === !0;
}
const Hi = {
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
Object.entries(Hi).forEach(([e, t]) => {
  Hi[t] = e;
});
function Ud(e) {
  const t = new cn(e), n = vd(cn.prototype.request, t);
  return _.extend(n, cn.prototype, t, { allOwnKeys: !0 }), _.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Ud(pn(e, o));
  }, n;
}
const we = Ud(xr);
we.Axios = cn;
we.CanceledError = Un;
we.CancelToken = zb;
we.isCancel = Id;
we.VERSION = jd;
we.toFormData = To;
we.AxiosError = ne;
we.Cancel = we.CanceledError;
we.all = function(t) {
  return Promise.all(t);
};
we.spread = Vb;
we.isAxiosError = Hb;
we.mergeConfig = pn;
we.AxiosHeaders = We;
we.formToJSON = (e) => Fd(_.isHTMLForm(e) ? new FormData(e) : e);
we.getAdapter = Nd.getAdapter;
we.HttpStatusCode = Hi;
we.default = we;
const {
  Axios: IA,
  AxiosError: RA,
  CanceledError: LA,
  isCancel: _A,
  CancelToken: BA,
  VERSION: MA,
  all: NA,
  Cancel: jA,
  isAxiosError: qA,
  spread: UA,
  toFormData: zA,
  AxiosHeaders: VA,
  HttpStatusCode: HA,
  formToJSON: WA,
  getAdapter: KA,
  mergeConfig: GA
} = we;
function Wi(e, t) {
  let n;
  return function(...r) {
    clearTimeout(n), n = setTimeout(() => e.apply(this, r), t);
  };
}
function yt(e, t) {
  return document.dispatchEvent(new CustomEvent(`inertia:${e}`, t));
}
var nc = (e) => yt("before", { cancelable: !0, detail: { visit: e } }), Wb = (e) => yt("error", { detail: { errors: e } }), Kb = (e) => yt("exception", { cancelable: !0, detail: { exception: e } }), Gb = (e) => yt("finish", { detail: { visit: e } }), Yb = (e) => yt("invalid", { cancelable: !0, detail: { response: e } }), ur = (e) => yt("navigate", { detail: { page: e } }), Xb = (e) => yt("progress", { detail: { progress: e } }), Jb = (e) => yt("start", { detail: { visit: e } }), Qb = (e) => yt("success", { detail: { page: e } }), Zb = (e, t) => yt("prefetched", { detail: { fetchedAt: Date.now(), response: e.data, visit: t } }), e1 = (e) => yt("prefetching", { detail: { visit: e } }), je = class {
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
je.locationVisitKey = "inertiaLocationVisit";
var t1 = async (e) => {
  if (typeof window > "u") throw new Error("Unable to encrypt history");
  let t = zd(), n = await Vd(), r = await s1(n);
  if (!r) throw new Error("Unable to encrypt history");
  return await r1(t, r, e);
}, _n = { key: "historyKey", iv: "historyIv" }, n1 = async (e) => {
  let t = zd(), n = await Vd();
  if (!n) throw new Error("Unable to decrypt history");
  return await o1(t, n, e);
}, r1 = async (e, t, n) => {
  if (typeof window > "u") throw new Error("Unable to encrypt history");
  if (typeof window.crypto.subtle > "u") return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(n);
  let r = new TextEncoder(), o = JSON.stringify(n), a = new Uint8Array(o.length * 3), i = r.encodeInto(o, a);
  return window.crypto.subtle.encrypt({ name: "AES-GCM", iv: e }, t, a.subarray(0, i.written));
}, o1 = async (e, t, n) => {
  if (typeof window.crypto.subtle > "u") return console.warn("Decryption is not supported in this environment. SSL is required."), Promise.resolve(n);
  let r = await window.crypto.subtle.decrypt({ name: "AES-GCM", iv: e }, t, n);
  return JSON.parse(new TextDecoder().decode(r));
}, zd = () => {
  let e = je.get(_n.iv);
  if (e) return new Uint8Array(e);
  let t = window.crypto.getRandomValues(new Uint8Array(12));
  return je.set(_n.iv, Array.from(t)), t;
}, a1 = async () => typeof window.crypto.subtle > "u" ? (console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(null)) : window.crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, !0, ["encrypt", "decrypt"]), i1 = async (e) => {
  if (typeof window.crypto.subtle > "u") return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve();
  let t = await window.crypto.subtle.exportKey("raw", e);
  je.set(_n.key, Array.from(new Uint8Array(t)));
}, s1 = async (e) => {
  if (e) return e;
  let t = await a1();
  return t ? (await i1(t), t) : null;
}, Vd = async () => {
  let e = je.get(_n.key);
  return e ? await window.crypto.subtle.importKey("raw", new Uint8Array(e), { name: "AES-GCM", length: 256 }, !0, ["encrypt", "decrypt"]) : null;
}, ct = class {
  static save() {
    ce.saveScrollPositions(Array.from(this.regions()).map((e) => ({ top: e.scrollTop, left: e.scrollLeft })));
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
    let e = ce.getDocumentScrollPosition();
    typeof window < "u" && window.scrollTo(e.left, e.top);
  }
  static onScroll(e) {
    let t = e.target;
    typeof t.hasAttribute == "function" && t.hasAttribute("scroll-region") && this.save();
  }
  static onWindowScroll() {
    ce.saveDocumentScrollPosition({ top: window.scrollY, left: window.scrollX });
  }
};
function Ki(e) {
  return e instanceof File || e instanceof Blob || e instanceof FileList && e.length > 0 || e instanceof FormData && Array.from(e.values()).some((t) => Ki(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => Ki(t));
}
var rc = (e) => e instanceof FormData;
function Hd(e, t = new FormData(), n = null) {
  e = e || {};
  for (let r in e) Object.prototype.hasOwnProperty.call(e, r) && Kd(t, Wd(n, r), e[r]);
  return t;
}
function Wd(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Kd(e, t, n) {
  if (Array.isArray(n)) return Array.from(n.keys()).forEach((r) => Kd(e, Wd(t, r.toString()), n[r]));
  if (n instanceof Date) return e.append(t, n.toISOString());
  if (n instanceof File) return e.append(t, n, n.name);
  if (n instanceof Blob) return e.append(t, n);
  if (typeof n == "boolean") return e.append(t, n ? "1" : "0");
  if (typeof n == "string") return e.append(t, n);
  if (typeof n == "number") return e.append(t, `${n}`);
  if (n == null) return e.append(t, "");
  Hd(n, e, t);
}
function Yt(e) {
  return new URL(e.toString(), typeof window > "u" ? void 0 : window.location.toString());
}
var l1 = (e, t, n, r, o) => {
  let a = typeof e == "string" ? Yt(e) : e;
  if ((Ki(t) || r) && !rc(t) && (t = Hd(t)), rc(t)) return [a, t];
  let [i, s] = Is(n, a, t, o);
  return [Yt(i), s];
};
function Is(e, t, n, r = "brackets") {
  let o = /^https?:\/\//.test(t.toString()), a = o || t.toString().startsWith("/"), i = !a && !t.toString().startsWith("#") && !t.toString().startsWith("?"), s = t.toString().includes("?") || e === "get" && Object.keys(n).length, c = t.toString().includes("#"), l = new URL(t.toString(), "http://localhost");
  return e === "get" && Object.keys(n).length && (l.search = Uu.stringify(tr(Uu.parse(l.search, { ignoreQueryPrefix: !0 }), n), { encodeValuesOnly: !0, arrayFormat: r }), n = {}), [[o ? `${l.protocol}//${l.host}` : "", a ? l.pathname : "", i ? l.pathname.substring(1) : "", s ? l.search : "", c ? l.hash : ""].join(""), n];
}
function lo(e) {
  return e = new URL(e.href), e.hash = "", e;
}
var oc = (e, t) => {
  e.hash && !t.hash && lo(e).href === t.href && (t.hash = e.hash);
}, Gi = (e, t) => lo(e).href === lo(t).href, u1 = class {
  constructor() {
    this.componentId = {}, this.listeners = [], this.isFirstPageLoad = !0, this.cleared = !1;
  }
  init({ initialPage: e, swapComponent: t, resolveComponent: n }) {
    return this.page = e, this.swapComponent = t, this.resolveComponent = n, this;
  }
  set(e, { replace: t = !1, preserveScroll: n = !1, preserveState: r = !1 } = {}) {
    this.componentId = {};
    let o = this.componentId;
    return e.clearHistory && ce.clear(), this.resolve(e.component).then((a) => {
      if (o !== this.componentId) return;
      e.rememberedState ?? (e.rememberedState = {});
      let i = typeof window < "u" ? window.location : new URL(e.url);
      return t = t || Gi(Yt(e.url), i), new Promise((s) => {
        t ? ce.replaceState(e, () => s(null)) : ce.pushState(e, () => s(null));
      }).then(() => {
        let s = !this.isTheSame(e);
        return this.page = e, this.cleared = !1, s && this.fireEventsFor("newComponent"), this.isFirstPageLoad && this.fireEventsFor("firstLoad"), this.isFirstPageLoad = !1, this.swap({ component: a, page: e, preserveState: r }).then(() => {
          n || ct.reset(), ln.fireInternalEvent("loadDeferredProps"), t || ur(e);
        });
      });
    });
  }
  setQuietly(e, { preserveState: t = !1 } = {}) {
    return this.resolve(e.component).then((n) => (this.page = e, this.cleared = !1, ce.setCurrent(e), this.swap({ component: n, page: e, preserveState: t })));
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
}, te = new u1(), Gd = class {
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
}, rr = typeof window > "u", Jn = new Gd(), ac = !rr && /CriOS/.test(window.navigator.userAgent), c1 = class {
  constructor() {
    this.rememberedState = "rememberedState", this.scrollRegions = "scrollRegions", this.preserveUrl = !1, this.current = {}, this.initialState = null;
  }
  remember(e, t) {
    var n;
    this.replaceState({ ...te.get(), rememberedState: { ...((n = te.get()) == null ? void 0 : n.rememberedState) ?? {}, [t]: e } });
  }
  restore(e) {
    var t, n;
    if (!rr) return (n = (t = this.initialState) == null ? void 0 : t[this.rememberedState]) == null ? void 0 : n[e];
  }
  pushState(e, t = null) {
    if (!rr) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, Jn.add(() => this.getPageData(e).then((n) => {
        let r = () => {
          this.doPushState({ page: n }, e.url), t && t();
        };
        ac ? setTimeout(r) : r();
      }));
    }
  }
  getPageData(e) {
    return new Promise((t) => e.encryptHistory ? t1(e).then(t) : t(e));
  }
  processQueue() {
    return Jn.process();
  }
  decrypt(e = null) {
    var n;
    if (rr) return Promise.resolve(e ?? te.get());
    let t = e ?? ((n = window.history.state) == null ? void 0 : n.page);
    return this.decryptPageData(t).then((r) => {
      if (!r) throw new Error("Unable to decrypt history");
      return this.initialState === null ? this.initialState = r ?? void 0 : this.current = r ?? {}, r;
    });
  }
  decryptPageData(e) {
    return e instanceof ArrayBuffer ? n1(e) : Promise.resolve(e);
  }
  saveScrollPositions(e) {
    Jn.add(() => Promise.resolve().then(() => {
      var t;
      (t = window.history.state) != null && t.page && this.doReplaceState({ page: window.history.state.page, scrollRegions: e });
    }));
  }
  saveDocumentScrollPosition(e) {
    Jn.add(() => Promise.resolve().then(() => {
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
    if (te.merge(e), !rr) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, Jn.add(() => this.getPageData(e).then((n) => {
        let r = () => {
          this.doReplaceState({ page: n }, e.url), t && t();
        };
        ac ? setTimeout(r) : r();
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
    je.remove(_n.key), je.remove(_n.iv);
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
var ce = new c1(), f1 = class {
  constructor() {
    this.internalListeners = [];
  }
  init() {
    typeof window < "u" && (window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), window.addEventListener("scroll", Wi(ct.onWindowScroll.bind(ct), 100), !0)), typeof document < "u" && document.addEventListener("scroll", Wi(ct.onScroll.bind(ct), 100), !0);
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
    te.clear(), this.fireInternalEvent("missingHistoryItem");
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
      let n = Yt(te.get().url);
      n.hash = window.location.hash, ce.replaceState({ ...te.get(), url: n.href }), ct.reset();
      return;
    }
    if (!ce.isValidState(t)) return this.onMissingHistoryItem();
    ce.decrypt(t.page).then((n) => {
      te.setQuietly(n, { preserveState: !1 }).then(() => {
        ct.restore(ce.getScrollRegions()), ur(te.get());
      });
    }).catch(() => {
      this.onMissingHistoryItem();
    });
  }
}, ln = new f1(), d1 = class {
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
}, Xa = new d1(), p1 = class {
  static handle() {
    this.clearRememberedStateOnReload(), [this.handleBackForward, this.handleLocation, this.handleDefault].find((e) => e.bind(this)());
  }
  static clearRememberedStateOnReload() {
    Xa.isReload() && ce.deleteState(ce.rememberedState);
  }
  static handleBackForward() {
    if (!Xa.isBackForward() || !ce.hasAnyState()) return !1;
    let e = ce.getScrollRegions();
    return ce.decrypt().then((t) => {
      te.set(t, { preserveScroll: !0, preserveState: !0 }).then(() => {
        ct.restore(e), ur(te.get());
      });
    }).catch(() => {
      ln.onMissingHistoryItem();
    }), !0;
  }
  static handleLocation() {
    if (!je.exists(je.locationVisitKey)) return !1;
    let e = je.get(je.locationVisitKey) || {};
    return je.remove(je.locationVisitKey), typeof window < "u" && te.setUrlHash(window.location.hash), ce.decrypt(te.get()).then(() => {
      let t = ce.getState(ce.rememberedState, {}), n = ce.getScrollRegions();
      te.remember(t), te.set(te.get(), { preserveScroll: e.preserveScroll, preserveState: !0 }).then(() => {
        e.preserveScroll && ct.restore(n), ur(te.get());
      });
    }).catch(() => {
      ln.onMissingHistoryItem();
    }), !0;
  }
  static handleDefault() {
    typeof window < "u" && te.setUrlHash(window.location.hash), te.set(te.get(), { preserveScroll: !0, preserveState: !0 }).then(() => {
      Xa.isReload() && ct.restore(ce.getScrollRegions()), ur(te.get());
    });
  }
}, h1 = class {
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
}, m1 = class {
  constructor() {
    this.polls = [], this.setupVisibilityListener();
  }
  add(e, t, n) {
    let r = new h1(e, t, n);
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
}, y1 = new m1(), Yd = (e, t, n) => {
  if (e === t) return !0;
  for (let r in e) if (!n.includes(r) && e[r] !== t[r] && !g1(e[r], t[r])) return !1;
  return !0;
}, g1 = (e, t) => {
  switch (typeof e) {
    case "object":
      return Yd(e, t, []);
    case "function":
      return e.toString() === t.toString();
    default:
      return e === t;
  }
}, v1 = { ms: 1, s: 1e3, m: 6e4, h: 36e5, d: 864e5 }, ic = (e) => {
  if (typeof e == "number") return e;
  for (let [t, n] of Object.entries(v1)) if (e.endsWith(t)) return parseFloat(e) * n;
  return parseInt(e);
}, b1 = class {
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
    return [ic(t), ic(n)];
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
    return Yd(e, t, ["showProgress", "replace", "prefetch", "onBefore", "onStart", "onProgress", "onFinish", "onCancel", "onSuccess", "onError", "onPrefetched", "onCancelToken", "onPrefetching", "async"]);
  }
}, rn = new b1(), w1 = class Xd {
  constructor(t) {
    if (this.callbacks = [], !t.prefetch) this.params = t;
    else {
      let n = { onBefore: this.wrapCallback(t, "onBefore"), onStart: this.wrapCallback(t, "onStart"), onProgress: this.wrapCallback(t, "onProgress"), onFinish: this.wrapCallback(t, "onFinish"), onCancel: this.wrapCallback(t, "onCancel"), onSuccess: this.wrapCallback(t, "onSuccess"), onError: this.wrapCallback(t, "onError"), onCancelToken: this.wrapCallback(t, "onCancelToken"), onPrefetched: this.wrapCallback(t, "onPrefetched"), onPrefetching: this.wrapCallback(t, "onPrefetching") };
      this.params = { ...t, ...n, onPrefetchResponse: t.onPrefetchResponse || (() => {
      }) };
    }
  }
  static create(t) {
    return new Xd(t);
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
    this.isPartial() && (t["X-Inertia-Partial-Component"] = te.get().component);
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
}, x1 = { modal: null, listener: null, show(e) {
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
} }, S1 = new Gd(), sc = class Jd {
  constructor(t, n, r) {
    this.requestParams = t, this.response = n, this.originatingPage = r;
  }
  static create(t, n, r) {
    return new Jd(t, n, r);
  }
  async handlePrefetch() {
    Gi(this.requestParams.all().url, window.location) && this.handle();
  }
  async handle() {
    return S1.add(() => this.process());
  }
  async process() {
    if (this.requestParams.all().prefetch) return this.requestParams.all().prefetch = !1, this.requestParams.all().onPrefetched(this.response, this.requestParams.all()), Zb(this.response, this.requestParams.all()), Promise.resolve();
    if (this.requestParams.runCallbacks(), !this.isInertiaResponse()) return this.handleNonInertiaResponse();
    await ce.processQueue(), ce.preserveUrl = this.requestParams.all().preserveUrl, await this.setPage();
    let t = te.get().props.errors || {};
    if (Object.keys(t).length > 0) {
      let n = this.getScopedErrors(t);
      return Wb(n), this.requestParams.all().onError(n);
    }
    Qb(te.get()), await this.requestParams.all().onSuccess(te.get()), ce.preserveUrl = !1;
  }
  mergeParams(t) {
    this.requestParams.merge(t);
  }
  async handleNonInertiaResponse() {
    if (this.isLocationVisit()) {
      let n = Yt(this.getHeader("x-inertia-location"));
      return oc(this.requestParams.all().url, n), this.locationVisit(n);
    }
    let t = { ...this.response, data: this.getDataFromResponse(this.response.data) };
    if (Yb(t)) return x1.show(t.data);
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
      if (je.set(je.locationVisitKey, { preserveScroll: this.requestParams.all().preserveScroll === !0 }), typeof window > "u") return;
      Gi(window.location, t) ? window.location.reload() : window.location.href = t.href;
    } catch {
      return !1;
    }
  }
  async setPage() {
    let t = this.getDataFromResponse(this.response.data);
    return this.shouldSetPage(t) ? (this.mergeProps(t), await this.setRememberedState(t), this.requestParams.setPreserveOptions(t), t.url = ce.preserveUrl ? te.get().url : this.pageUrl(t), te.set(t, { replace: this.requestParams.all().replace, preserveScroll: this.requestParams.all().preserveScroll, preserveState: this.requestParams.all().preserveState })) : Promise.resolve();
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
    if (this.originatingPage.component !== te.get().component) return !1;
    let n = Yt(this.originatingPage.url), r = Yt(te.get().url);
    return n.origin === r.origin && n.pathname === r.pathname;
  }
  pageUrl(t) {
    let n = Yt(t.url);
    return oc(this.requestParams.all().url, n), n.pathname + n.search + n.hash;
  }
  mergeProps(t) {
    if (!this.requestParams.isPartial() || t.component !== te.get().component) return;
    let n = t.mergeProps || [], r = t.deepMergeProps || [];
    n.forEach((o) => {
      let a = t.props[o];
      Array.isArray(a) ? t.props[o] = [...te.get().props[o] || [], ...a] : typeof a == "object" && a !== null && (t.props[o] = { ...te.get().props[o] || [], ...a });
    }), r.forEach((o) => {
      let a = t.props[o], i = te.get().props[o], s = (c, l) => Array.isArray(l) ? [...Array.isArray(c) ? c : [], ...l] : typeof l == "object" && l !== null ? Object.keys(l).reduce((u, f) => (u[f] = s(c ? c[f] : void 0, l[f]), u), { ...c }) : l;
      t.props[o] = s(i, a);
    }), t.props = { ...te.get().props, ...t.props };
  }
  async setRememberedState(t) {
    let n = await ce.getState(ce.rememberedState, {});
    this.requestParams.all().preserveState && n && t.component === te.get().component && (t.rememberedState = n);
  }
  getScopedErrors(t) {
    return this.requestParams.all().errorBag ? t[this.requestParams.all().errorBag || ""] || {} : t;
  }
}, lc = class Qd {
  constructor(t, n) {
    this.page = n, this.requestHasFinished = !1, this.requestParams = w1.create(t), this.cancelToken = new AbortController();
  }
  static create(t, n) {
    return new Qd(t, n);
  }
  async send() {
    this.requestParams.onCancelToken(() => this.cancel({ cancelled: !0 })), Jb(this.requestParams.all()), this.requestParams.onStart(), this.requestParams.all().prefetch && (this.requestParams.onPrefetching(), e1(this.requestParams.all()));
    let t = this.requestParams.all().prefetch;
    return we({ method: this.requestParams.all().method, url: lo(this.requestParams.all().url).href, data: this.requestParams.data(), params: this.requestParams.queryParams(), signal: this.cancelToken.signal, headers: this.getHeaders(), onUploadProgress: this.onProgress.bind(this), responseType: "text" }).then((n) => (this.response = sc.create(this.requestParams, n, this.page), this.response.handle())).catch((n) => n != null && n.response ? (this.response = sc.create(this.requestParams, n.response, this.page), this.response.handle()) : Promise.reject(n)).catch((n) => {
      if (!we.isCancel(n) && Kb(n)) return Promise.reject(n);
    }).finally(() => {
      this.finish(), t && this.response && this.requestParams.onPrefetchResponse(this.response);
    });
  }
  finish() {
    this.requestParams.wasCancelledAtAll() || (this.requestParams.markAsFinished(), this.fireFinishEvents());
  }
  fireFinishEvents() {
    this.requestHasFinished || (this.requestHasFinished = !0, Gb(this.requestParams.all()), this.requestParams.onFinish());
  }
  cancel({ cancelled: t = !1, interrupted: n = !1 }) {
    this.requestHasFinished || (this.cancelToken.abort(), this.requestParams.markAsCancelled({ cancelled: t, interrupted: n }), this.fireFinishEvents());
  }
  onProgress(t) {
    this.requestParams.data() instanceof FormData && (t.percentage = t.progress ? Math.round(t.progress * 100) : 0, Xb(t), this.requestParams.all().onProgress(t));
  }
  getHeaders() {
    let t = { ...this.requestParams.headers(), Accept: "text/html, application/xhtml+xml", "X-Requested-With": "XMLHttpRequest", "X-Inertia": !0 };
    return te.get().version && (t["X-Inertia-Version"] = te.get().version), t;
  }
}, uc = class {
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
}, O1 = class {
  constructor() {
    this.syncRequestStream = new uc({ maxConcurrent: 1, interruptible: !0 }), this.asyncRequestStream = new uc({ maxConcurrent: 1 / 0, interruptible: !1 });
  }
  init({ initialPage: e, resolveComponent: t, swapComponent: n }) {
    te.init({ initialPage: e, resolveComponent: t, swapComponent: n }), p1.handle(), ln.init(), ln.on("missingHistoryItem", () => {
      typeof window < "u" && this.visit(window.location.href, { preserveState: !0, preserveScroll: !0, replace: !0 });
    }), ln.on("loadDeferredProps", () => {
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
    ce.remember(e, t);
  }
  restore(e = "default") {
    return ce.restore(e);
  }
  on(e, t) {
    return typeof window > "u" ? () => {
    } : ln.onGlobalEvent(e, t);
  }
  cancel() {
    this.syncRequestStream.cancelInFlight();
  }
  cancelAll() {
    this.asyncRequestStream.cancelInFlight(), this.syncRequestStream.cancelInFlight();
  }
  poll(e, t = {}, n = {}) {
    return y1.add(e, () => this.reload(t), { autoStart: n.autoStart ?? !0, keepAlive: n.keepAlive ?? !1 });
  }
  visit(e, t = {}) {
    let n = this.getPendingVisit(e, { ...t, showProgress: t.showProgress ?? !t.async }), r = this.getVisitEvents(t);
    if (r.onBefore(n) === !1 || !nc(n)) return;
    let o = n.async ? this.asyncRequestStream : this.syncRequestStream;
    o.interruptInFlight(), !te.isCleared() && !n.preserveUrl && ct.save();
    let a = { ...n, ...r }, i = rn.get(a);
    i ? (cc(i.inFlight), rn.use(i, a)) : (cc(!0), o.send(lc.create(a, te.get())));
  }
  getCached(e, t = {}) {
    return rn.findCached(this.getPrefetchParams(e, t));
  }
  flush(e, t = {}) {
    rn.remove(this.getPrefetchParams(e, t));
  }
  flushAll() {
    rn.removeAll();
  }
  getPrefetching(e, t = {}) {
    return rn.findInFlight(this.getPrefetchParams(e, t));
  }
  prefetch(e, t = {}, { cacheFor: n = 3e4 }) {
    if (t.method !== "get") throw new Error("Prefetch requests must use the GET method");
    let r = this.getPendingVisit(e, { ...t, async: !0, showProgress: !1, prefetch: !0 }), o = r.url.origin + r.url.pathname + r.url.search, a = window.location.origin + window.location.pathname + window.location.search;
    if (o === a) return;
    let i = this.getVisitEvents(t);
    if (i.onBefore(r) === !1 || !nc(r)) return;
    L1(), this.asyncRequestStream.interruptInFlight();
    let s = { ...r, ...i };
    new Promise((c) => {
      let l = () => {
        te.get() ? c() : setTimeout(l, 50);
      };
      l();
    }).then(() => {
      rn.add(s, (c) => {
        this.asyncRequestStream.send(lc.create(c, te.get()));
      }, { cacheFor: n });
    });
  }
  clearHistory() {
    ce.clear();
  }
  decryptHistory() {
    return ce.decrypt();
  }
  replace(e) {
    this.clientVisit(e, { replace: !0 });
  }
  push(e) {
    this.clientVisit(e);
  }
  clientVisit(e, { replace: t = !1 } = {}) {
    let n = te.get(), r = typeof e.props == "function" ? e.props(n.props) : e.props ?? n.props;
    te.set({ ...n, ...e, props: r }, { replace: t, preserveScroll: e.preserveScroll, preserveState: e.preserveState });
  }
  getPrefetchParams(e, t) {
    return { ...this.getPendingVisit(e, { ...t, async: !0, showProgress: !1, prefetch: !0 }), ...this.getVisitEvents(t) };
  }
  getPendingVisit(e, t, n = {}) {
    let r = { method: "get", data: {}, replace: !1, preserveScroll: !1, preserveState: !1, only: [], except: [], headers: {}, errorBag: "", forceFormData: !1, queryStringArrayFormat: "brackets", async: !1, showProgress: !0, fresh: !1, reset: [], preserveUrl: !1, prefetch: !1, ...t }, [o, a] = l1(e, r.data, r.method, r.forceFormData, r.queryStringArrayFormat);
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
    let e = (t = te.get()) == null ? void 0 : t.deferredProps;
    e && Object.entries(e).forEach(([n, r]) => {
      this.reload({ only: r });
    });
  }
}, E1 = { buildDOMElement(e) {
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
}, update: Wi(function(e) {
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
function A1(e, t, n) {
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
      let x = d.match(/ inertia="[^"]+"/);
      return x ? h[x[0]] = d : h[Object.keys(h).length] = d, h;
    }, f);
    return Object.values(p);
  }
  function l() {
    e ? n(c()) : E1.update(c());
  }
  return l(), { forceUpdate: l, createProvider: function() {
    let u = a();
    return { update: (f) => s(u, f), disconnect: () => i(u) };
  } };
}
var Se = "nprogress", ke = { minimum: 0.08, easing: "linear", positionUsing: "translate3d", speed: 200, trickle: !0, trickleSpeed: 200, showSpinner: !0, barSelector: '[role="bar"]', spinnerSelector: '[role="spinner"]', parent: "body", color: "#29d", includeCSS: !0, template: ['<div class="bar" role="bar">', '<div class="peg"></div>', "</div>", '<div class="spinner" role="spinner">', '<div class="spinner-icon"></div>', "</div>"].join("") }, Zt = null, C1 = (e) => {
  Object.assign(ke, e), ke.includeCSS && F1(ke.color);
}, Fo = (e) => {
  let t = Zd();
  e = op(e, ke.minimum, 1), Zt = e === 1 ? null : e;
  let n = k1(!t), r = n.querySelector(ke.barSelector), o = ke.speed, a = ke.easing;
  n.offsetWidth, $1((i) => {
    let s = ke.positionUsing === "translate3d" ? { transition: `all ${o}ms ${a}`, transform: `translate3d(${Xr(e)}%,0,0)` } : ke.positionUsing === "translate" ? { transition: `all ${o}ms ${a}`, transform: `translate(${Xr(e)}%,0)` } : { marginLeft: `${Xr(e)}%` };
    for (let c in s) r.style[c] = s[c];
    if (e !== 1) return setTimeout(i, o);
    n.style.transition = "none", n.style.opacity = "1", n.offsetWidth, setTimeout(() => {
      n.style.transition = `all ${o}ms linear`, n.style.opacity = "0", setTimeout(() => {
        rp(), i();
      }, o);
    }, o);
  });
}, Zd = () => typeof Zt == "number", ep = () => {
  Zt || Fo(0);
  let e = function() {
    setTimeout(function() {
      Zt && (tp(), e());
    }, ke.trickleSpeed);
  };
  ke.trickle && e();
}, P1 = (e) => {
  !e && !Zt || (tp(0.3 + 0.5 * Math.random()), Fo(1));
}, tp = (e) => {
  let t = Zt;
  if (t === null) return ep();
  if (!(t > 1)) return e = typeof e == "number" ? e : (() => {
    let n = { 0.1: [0, 0.2], 0.04: [0.2, 0.5], 0.02: [0.5, 0.8], 5e-3: [0.8, 0.99] };
    for (let r in n) if (t >= n[r][0] && t < n[r][1]) return parseFloat(r);
    return 0;
  })(), Fo(op(t + e, 0, 0.994));
}, k1 = (e) => {
  var a;
  if (T1()) return document.getElementById(Se);
  document.documentElement.classList.add(`${Se}-busy`);
  let t = document.createElement("div");
  t.id = Se, t.innerHTML = ke.template;
  let n = t.querySelector(ke.barSelector), r = e ? "-100" : Xr(Zt || 0), o = np();
  return n.style.transition = "all 0 linear", n.style.transform = `translate3d(${r}%,0,0)`, ke.showSpinner || ((a = t.querySelector(ke.spinnerSelector)) == null || a.remove()), o !== document.body && o.classList.add(`${Se}-custom-parent`), o.appendChild(t), t;
}, np = () => D1(ke.parent) ? ke.parent : document.querySelector(ke.parent), rp = () => {
  var e;
  document.documentElement.classList.remove(`${Se}-busy`), np().classList.remove(`${Se}-custom-parent`), (e = document.getElementById(Se)) == null || e.remove();
}, T1 = () => document.getElementById(Se) !== null, D1 = (e) => typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
function op(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
var Xr = (e) => (-1 + e) * 100, $1 = /* @__PURE__ */ (() => {
  let e = [], t = () => {
    let n = e.shift();
    n && n(t);
  };
  return (n) => {
    e.push(n), e.length === 1 && t();
  };
})(), F1 = (e) => {
  let t = document.createElement("style");
  t.textContent = `
    #${Se} {
      pointer-events: none;
    }

    #${Se} .bar {
      background: ${e};

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #${Se} .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
      opacity: 1.0;

      transform: rotate(3deg) translate(0px, -4px);
    }

    #${Se} .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #${Se} .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${e};
      border-left-color: ${e};
      border-radius: 50%;

      animation: ${Se}-spinner 400ms linear infinite;
    }

    .${Se}-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .${Se}-custom-parent #${Se} .spinner,
    .${Se}-custom-parent #${Se} .bar {
      position: absolute;
    }

    @keyframes ${Se}-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `, document.head.appendChild(t);
}, In = (() => {
  if (typeof document > "u") return null;
  let e = document.createElement("style");
  return e.innerHTML = `#${Se} { display: none; }`, e;
})(), I1 = () => {
  if (In && document.head.contains(In)) return document.head.removeChild(In);
}, R1 = () => {
  In && !document.head.contains(In) && document.head.appendChild(In);
}, ap = { configure: C1, isStarted: Zd, done: P1, set: Fo, remove: rp, start: ep, status: Zt, show: I1, hide: R1 }, Jr = 0, cc = (e = !1) => {
  Jr = Math.max(0, Jr - 1), (e || Jr === 0) && ap.show();
}, L1 = () => {
  Jr++, ap.hide();
};
function Qr(e) {
  let t = e.currentTarget.tagName.toLowerCase() === "a";
  return !(e.target && (e == null ? void 0 : e.target).isContentEditable || e.defaultPrevented || t && e.altKey || t && e.ctrlKey || t && e.metaKey || t && e.shiftKey || t && "button" in e && e.button !== 0);
}
var Ot = new O1();
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
* @license MIT */
function ip(e) {
  switch (typeof e) {
    case "number":
    case "symbol":
      return !1;
    case "string":
      return e.includes(".") || e.includes("[") || e.includes("]");
  }
}
function sp(e) {
  var t;
  return typeof e == "string" || typeof e == "symbol" ? e : Object.is((t = e == null ? void 0 : e.valueOf) == null ? void 0 : t.call(e), -0) ? "-0" : String(e);
}
function Rs(e) {
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
function Zr(e, t, n) {
  if (e == null)
    return n;
  switch (typeof t) {
    case "string": {
      const r = e[t];
      return r === void 0 ? ip(t) ? Zr(e, Rs(t), n) : n : r;
    }
    case "number":
    case "symbol": {
      typeof t == "number" && (t = sp(t));
      const r = e[t];
      return r === void 0 ? n : r;
    }
    default: {
      if (Array.isArray(t))
        return _1(e, t, n);
      Object.is(t == null ? void 0 : t.valueOf(), -0) ? t = "-0" : t = String(t);
      const r = e[t];
      return r === void 0 ? n : r;
    }
  }
}
function _1(e, t, n) {
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
function fc(e) {
  return e !== null && (typeof e == "object" || typeof e == "function");
}
const B1 = /^(?:0|[1-9]\d*)$/;
function lp(e, t = Number.MAX_SAFE_INTEGER) {
  switch (typeof e) {
    case "number":
      return Number.isInteger(e) && e >= 0 && e < t;
    case "symbol":
      return !1;
    case "string":
      return B1.test(e);
  }
}
function M1(e) {
  return e !== null && typeof e == "object" && oo(e) === "[object Arguments]";
}
function N1(e, t) {
  let n;
  if (Array.isArray(t) ? n = t : typeof t == "string" && ip(t) && (e == null ? void 0 : e[t]) == null ? n = Rs(t) : n = [t], n.length === 0)
    return !1;
  let r = e;
  for (let o = 0; o < n.length; o++) {
    const a = n[o];
    if ((r == null || !Object.hasOwn(r, a)) && !((Array.isArray(r) || M1(r)) && lp(a) && a < r.length))
      return !1;
    r = r[a];
  }
  return !0;
}
const j1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, q1 = /^\w*$/;
function U1(e, t) {
  return Array.isArray(e) ? !1 : typeof e == "number" || typeof e == "boolean" || e == null || Av(e) ? !0 : typeof e == "string" && (q1.test(e) || !j1.test(e)) || t != null && Object.hasOwn(t, e);
}
const z1 = (e, t, n) => {
  const r = e[t];
  (!(Object.hasOwn(e, t) && ld(r, n)) || n === void 0 && !(t in e)) && (e[t] = n);
};
function V1(e, t, n, r) {
  if (e == null && !fc(e))
    return e;
  const o = U1(t, e) ? [t] : Array.isArray(t) ? t : typeof t == "string" ? Rs(t) : [t];
  let a = e;
  for (let i = 0; i < o.length && a != null; i++) {
    const s = sp(o[i]);
    let c;
    if (i === o.length - 1)
      c = n(a[s]);
    else {
      const l = a[s], u = r(l);
      c = u !== void 0 ? u : fc(l) ? l : lp(o[i + 1]) ? [] : {};
    }
    z1(a, s, c), a = a[s];
  }
  return e;
}
function Lr(e, t, n) {
  return V1(e, t, () => n, () => {
  });
}
function H1(e, t) {
  let n = typeof e == "string" ? e : null, r = (typeof e == "string" ? t : e) ?? {}, o = n ? Ot.restore(n) : null, a = ut(typeof r == "function" ? r() : r), i = null, s = null, c = (u) => u, l = yr({ ...o ? o.data : ut(a), isDirty: !1, errors: o ? o.errors : {}, hasErrors: !1, processing: !1, progress: null, wasSuccessful: !1, recentlySuccessful: !1, data() {
    return Object.keys(a).reduce((u, f) => Lr(u, f, Zr(this, f)), {});
  }, transform(u) {
    return c = u, this;
  }, defaults(u, f) {
    if (typeof r == "function") throw new Error("You cannot call `defaults()` when using a function to define your form data.");
    return typeof u > "u" ? (a = ut(this.data()), this.isDirty = !1) : a = typeof u == "string" ? Lr(ut(a), u, f) : Object.assign({}, ut(a), u), this;
  }, reset(...u) {
    let f = ut(typeof r == "function" ? r() : a), p = ut(f);
    return u.length === 0 ? (a = p, Object.assign(this, f)) : u.filter((h) => N1(p, h)).forEach((h) => {
      Lr(a, h, Zr(p, h)), Lr(this, h, Zr(f, h));
    }), this;
  }, setError(u, f) {
    return Object.assign(this.errors, typeof u == "string" ? { [u]: f } : u), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, clearErrors(...u) {
    return this.errors = Object.keys(this.errors).reduce((f, p) => ({ ...f, ...u.length > 0 && !u.includes(p) ? { [p]: this.errors[p] } : {} }), {}), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, submit(...u) {
    let f = typeof u[0] == "object", p = f ? u[0].method : u[0], h = f ? u[0].url : u[1], d = (f ? u[1] : u[2]) ?? {}, x = c(this.data()), g = { ...d, onCancelToken: (m) => {
      if (i = m, d.onCancelToken) return d.onCancelToken(m);
    }, onBefore: (m) => {
      if (this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(s), d.onBefore) return d.onBefore(m);
    }, onStart: (m) => {
      if (this.processing = !0, d.onStart) return d.onStart(m);
    }, onProgress: (m) => {
      if (this.progress = m, d.onProgress) return d.onProgress(m);
    }, onSuccess: async (m) => {
      this.processing = !1, this.progress = null, this.clearErrors(), this.wasSuccessful = !0, this.recentlySuccessful = !0, s = setTimeout(() => this.recentlySuccessful = !1, 2e3);
      let v = d.onSuccess ? await d.onSuccess(m) : null;
      return a = ut(this.data()), this.isDirty = !1, v;
    }, onError: (m) => {
      if (this.processing = !1, this.progress = null, this.clearErrors().setError(m), d.onError) return d.onError(m);
    }, onCancel: () => {
      if (this.processing = !1, this.progress = null, d.onCancel) return d.onCancel();
    }, onFinish: (m) => {
      if (this.processing = !1, this.progress = null, i = null, d.onFinish) return d.onFinish(m);
    } };
    p === "delete" ? Ot.delete(h, { ...g, data: x }) : Ot[p](h, x, g);
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
  return de(l, (u) => {
    l.isDirty = !Lv(l.data(), a), n && Ot.remember(ut(u.__remember()), n);
  }, { immediate: !0, deep: !0 }), l;
}
var Xe = q(null), Ve = q(null), Ja = mr(null), _r = q(null), dc = null;
X({ name: "Inertia", props: { initialPage: { type: Object, required: !0 }, initialComponent: { type: Object, required: !1 }, resolveComponent: { type: Function, required: !1 }, titleCallback: { type: Function, required: !1, default: (e) => e }, onHeadUpdate: { type: Function, required: !1, default: () => () => {
} } }, setup({ initialPage: e, initialComponent: t, resolveComponent: n, titleCallback: r, onHeadUpdate: o }) {
  Xe.value = t ? mi(t) : null, Ve.value = e, _r.value = null;
  let a = typeof window > "u";
  return dc = A1(a, r, o), a || (Ot.init({ initialPage: e, resolveComponent: n, swapComponent: async (i) => {
    Xe.value = mi(i.component), Ve.value = i.page, _r.value = i.preserveState ? _r.value : Date.now();
  } }), Ot.on("navigate", () => dc.forceUpdate())), () => {
    if (Xe.value) {
      Xe.value.inheritAttrs = !!Xe.value.inheritAttrs;
      let i = qe(Xe.value, { ...Ve.value.props, key: _r.value });
      return Ja.value && (Xe.value.layout = Ja.value, Ja.value = null), Xe.value.layout ? typeof Xe.value.layout == "function" ? Xe.value.layout(qe, i) : (Array.isArray(Xe.value.layout) ? Xe.value.layout : [Xe.value.layout]).concat(i).reverse().reduce((s, c) => (c.inheritAttrs = !!c.inheritAttrs, qe(c, { ...Ve.value.props }, () => s))) : i;
    }
  };
} });
function W1() {
  return yr({ props: W(() => {
    var e;
    return (e = Ve.value) == null ? void 0 : e.props;
  }), url: W(() => {
    var e;
    return (e = Ve.value) == null ? void 0 : e.url;
  }), component: W(() => {
    var e;
    return (e = Ve.value) == null ? void 0 : e.component;
  }), version: W(() => {
    var e;
    return (e = Ve.value) == null ? void 0 : e.version;
  }), clearHistory: W(() => {
    var e;
    return (e = Ve.value) == null ? void 0 : e.clearHistory;
  }), deferredProps: W(() => {
    var e;
    return (e = Ve.value) == null ? void 0 : e.deferredProps;
  }), mergeProps: W(() => {
    var e;
    return (e = Ve.value) == null ? void 0 : e.mergeProps;
  }), deepMergeProps: W(() => {
    var e;
    return (e = Ve.value) == null ? void 0 : e.deepMergeProps;
  }), rememberedState: W(() => {
    var e;
    return (e = Ve.value) == null ? void 0 : e.rememberedState;
  }), encryptHistory: W(() => {
    var e;
    return (e = Ve.value) == null ? void 0 : e.encryptHistory;
  }) });
}
var K1 = X({ name: "Deferred", props: { data: { type: [String, Array], required: !0 } }, render() {
  let e = Array.isArray(this.$props.data) ? this.$props.data : [this.$props.data];
  if (!this.$slots.fallback) throw new Error("`<Deferred>` requires a `<template #fallback>` slot");
  return e.every((t) => this.$page.props[t] !== void 0) ? this.$slots.default() : this.$slots.fallback();
} });
X({ props: { title: { type: String, required: !1 } }, data() {
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
X({ name: "Link", props: { as: { type: String, default: "a" }, data: { type: Object, default: () => ({}) }, href: { type: [String, Object], required: !0 }, method: { type: String, default: "get" }, replace: { type: Boolean, default: !1 }, preserveScroll: { type: Boolean, default: !1 }, preserveState: { type: Boolean, default: null }, only: { type: Array, default: () => [] }, except: { type: Array, default: () => [] }, headers: { type: Object, default: () => ({}) }, queryStringArrayFormat: { type: String, default: "brackets" }, async: { type: Boolean, default: !1 }, prefetch: { type: [Boolean, String, Array], default: !1 }, cacheFor: { type: [Number, String, Array], default: 0 }, onStart: { type: Function, default: (e) => {
} }, onProgress: { type: Function, default: () => {
} }, onFinish: { type: Function, default: () => {
} }, onBefore: { type: Function, default: () => {
} }, onCancel: { type: Function, default: () => {
} }, onSuccess: { type: Function, default: () => {
} }, onError: { type: Function, default: () => {
} }, onCancelToken: { type: Function, default: () => {
} } }, setup(e, { slots: t, attrs: n }) {
  let r = q(0), o = q(null), a = e.prefetch === !0 ? ["hover"] : e.prefetch === !1 ? [] : Array.isArray(e.prefetch) ? e.prefetch : [e.prefetch], i = e.cacheFor !== 0 ? e.cacheFor : a.length === 1 && a[0] === "click" ? 0 : 3e4;
  be(() => {
    a.includes("mount") && x();
  }), Nt(() => {
    clearTimeout(o.value);
  });
  let s = typeof e.href == "object" ? e.href.method : e.method.toLowerCase(), c = s !== "get" ? "button" : e.as.toLowerCase(), l = W(() => Is(s, typeof e.href == "object" ? e.href.url : e.href || "", e.data, e.queryStringArrayFormat)), u = W(() => l.value[0]), f = W(() => l.value[1]), p = W(() => ({ a: { href: u.value }, button: { type: "button" } })), h = { data: f.value, method: s, replace: e.replace, preserveScroll: e.preserveScroll, preserveState: e.preserveState ?? s !== "get", only: e.only, except: e.except, headers: e.headers, async: e.async }, d = { ...h, onCancelToken: e.onCancelToken, onBefore: e.onBefore, onStart: (w) => {
    r.value++, e.onStart(w);
  }, onProgress: e.onProgress, onFinish: (w) => {
    r.value--, e.onFinish(w);
  }, onCancel: e.onCancel, onSuccess: e.onSuccess, onError: e.onError }, x = () => {
    Ot.prefetch(u.value, h, { cacheFor: i });
  }, g = { onClick: (w) => {
    Qr(w) && (w.preventDefault(), Ot.visit(u.value, d));
  } }, m = { onMouseenter: () => {
    o.value = setTimeout(() => {
      x();
    }, 75);
  }, onMouseleave: () => {
    clearTimeout(o.value);
  }, onClick: g.onClick }, v = { onMousedown: (w) => {
    Qr(w) && (w.preventDefault(), x());
  }, onMouseup: (w) => {
    w.preventDefault(), Ot.visit(u.value, d);
  }, onClick: (w) => {
    Qr(w) && w.preventDefault();
  } };
  return () => qe(c, { ...n, ...p.value[c] || {}, "data-loading": r.value > 0 ? "" : void 0, ...a.includes("hover") ? m : a.includes("click") ? v : g }, t);
} });
X({ name: "WhenVisible", props: { data: { type: [String, Array] }, params: { type: Object }, buffer: { type: Number, default: 0 }, as: { type: String, default: "div" }, always: { type: Boolean, default: !1 } }, data() {
  return { loaded: !1, fetching: !1, observer: null };
}, unmounted() {
  var e;
  (e = this.observer) == null || e.disconnect();
}, mounted() {
  this.observer = new IntersectionObserver((e) => {
    if (!e[0].isIntersecting || (this.$props.always || this.observer.disconnect(), this.fetching)) return;
    this.fetching = !0;
    let t = this.getReloadParams();
    Ot.reload({ ...t, onStart: (n) => {
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
  return (this.$props.always || !this.loaded) && e.push(qe(this.$props.as)), this.loaded ? this.$slots.default && e.push(this.$slots.default()) : e.push(this.$slots.fallback ? this.$slots.fallback() : null), e;
} });
function JA(e) {
  return e.toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
function G1(e) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP"
  }).format(e);
}
function QA(e) {
  return W1().props.auth.permissions.includes(e);
}
let Yi = null;
function ZA(e) {
  Yi = e;
}
function Sr() {
  return Yi === null && console.error(
    `Inertia router is not set. Please set it first:

// app.js
import { setInertiaRouter } from '@nb/vue-components';
import { router } from '@inertiajs/vue3';
// createInertiaApp(...);
setInertiaRouter(router);

`
  ), Yi;
}
let Xi = null;
function eC(e) {
  Xi = e;
}
function Y1() {
  return Xi === null && console.error(
    `Inertia page is not set. Please set it first:

// app.js
import { setInertiaPage } from '@nb/vue-components';
// createInertiaApp(...);
setInertiaPage(page);

`
  ), Xi;
}
const dt = X({
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
      const r = Sr(), o = e.as.toLowerCase(), a = e.method.toLowerCase(), [i, s] = Is(
        a,
        e.href || "",
        e.data,
        e.queryStringArrayFormat
      );
      return o === "a" && a !== "get" && console.warn(
        `Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${i}" method="${a}" as="button">...</Link>`
      ), qe(
        e.as,
        {
          ...n,
          ...o === "a" ? { href: i } : {},
          onClick: (c) => {
            Qr(c) && (c.preventDefault(), r.visit(i, {
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
function Or(e, t, n, r) {
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
function Er(e, t) {
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
function X1(e, t) {
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
function J1() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(X1(arguments[t]));
  return e;
}
var Q1 = /* @__PURE__ */ new Map([
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
function Io(e, t) {
  var n = Z1(e);
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
function Z1(e) {
  var t = e.name, n = t && t.lastIndexOf(".") !== -1;
  if (n && !e.type) {
    var r = t.split(".").pop().toLowerCase(), o = Q1.get(r);
    o && Object.defineProperty(e, "type", {
      value: o,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
var ew = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function tw(e) {
  return Or(this, void 0, void 0, function() {
    return Er(this, function(t) {
      return [2, nw(e) && e.dataTransfer ? aw(e.dataTransfer, e.type) : rw(e)];
    });
  });
}
function nw(e) {
  return !!e.dataTransfer;
}
function rw(e) {
  var t = ow(e.target) ? e.target.files ? Ji(e.target.files) : [] : [];
  return t.map(function(n) {
    return Io(n);
  });
}
function ow(e) {
  return e !== null;
}
function aw(e, t) {
  return Or(this, void 0, void 0, function() {
    var n, r;
    return Er(this, function(o) {
      switch (o.label) {
        case 0:
          return e.items ? (n = Ji(e.items).filter(function(a) {
            return a.kind === "file";
          }), t !== "drop" ? [2, n] : [4, Promise.all(n.map(iw))]) : [3, 2];
        case 1:
          return r = o.sent(), [2, pc(up(r))];
        case 2:
          return [2, pc(Ji(e.files).map(function(a) {
            return Io(a);
          }))];
      }
    });
  });
}
function pc(e) {
  return e.filter(function(t) {
    return ew.indexOf(t.name) === -1;
  });
}
function Ji(e) {
  for (var t = [], n = 0; n < e.length; n++) {
    var r = e[n];
    t.push(r);
  }
  return t;
}
function iw(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return hc(e);
  var t = e.webkitGetAsEntry();
  return t && t.isDirectory ? cp(t) : hc(e);
}
function up(e) {
  return e.reduce(function(t, n) {
    return J1(t, Array.isArray(n) ? up(n) : [n]);
  }, []);
}
function hc(e) {
  var t = e.getAsFile();
  if (!t)
    return Promise.reject(e + " is not a File");
  var n = Io(t);
  return Promise.resolve(n);
}
function sw(e) {
  return Or(this, void 0, void 0, function() {
    return Er(this, function(t) {
      return [2, e.isDirectory ? cp(e) : lw(e)];
    });
  });
}
function cp(e) {
  var t = e.createReader();
  return new Promise(function(n, r) {
    var o = [];
    function a() {
      var i = this;
      t.readEntries(function(s) {
        return Or(i, void 0, void 0, function() {
          var c, l, u;
          return Er(this, function(f) {
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
                u = Promise.all(s.map(sw)), o.push(u), a(), f.label = 6;
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
function lw(e) {
  return Or(this, void 0, void 0, function() {
    return Er(this, function(t) {
      return [2, new Promise(function(n, r) {
        e.file(function(o) {
          var a = Io(o, e.fullPath);
          n(a);
        }, function(o) {
          r(o);
        });
      })];
    });
  });
}
var Br = {}, mc;
function uw() {
  return mc || (mc = 1, Br.__esModule = !0, Br.default = function(e, t) {
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
  }), Br;
}
var cw = uw();
const fp = /* @__PURE__ */ _v(cw);
var Je = function() {
  return Je = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Je.apply(this, arguments);
};
function yc(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function fw(e, t, n, r) {
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
function dw(e, t) {
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
function Qi(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function pw(e) {
  return e.includes("MSIE") || e.includes("Trident/");
}
function hw(e) {
  return e.includes("Edge/");
}
function mw(e) {
  return e === void 0 && (e = window.navigator.userAgent), pw(e) || hw(e);
}
function gc(e) {
  e.preventDefault();
}
function Mr(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
    return t === "Files" || t === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function uo(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
var yw = "file-invalid-type", gw = "file-too-large", vw = "file-too-small", bw = "too-many-files", ww = {
  code: bw,
  message: "Too many files"
}, xw = function(e) {
  e = Array.isArray(e) && e.length === 1 ? e[0] : e;
  var t = Array.isArray(e) ? "one of ".concat(e.join(", ")) : e;
  return {
    code: yw,
    message: "File type must be ".concat(t)
  };
};
function Qn(e) {
  return e != null;
}
var Sw = fp.default, Ow = Sw || fp;
function dp(e, t) {
  var n = e.type === "application/x-moz-file" || Ow(e, t);
  return [n, n ? null : xw(t)];
}
var vc = function(e) {
  return {
    code: gw,
    message: "File is larger than ".concat(e, " bytes")
  };
}, bc = function(e) {
  return {
    code: vw,
    message: "File is smaller than ".concat(e, " bytes")
  };
};
function pp(e, t, n) {
  if (Qn(e.size) && e.size)
    if (Qn(t) && Qn(n)) {
      if (e.size > n)
        return [!1, vc(n)];
      if (e.size < t)
        return [!1, bc(t)];
    } else {
      if (Qn(t) && e.size < t)
        return [!1, bc(t)];
      if (Qn(n) && e.size > n)
        return [!1, vc(n)];
    }
  return [!0, null];
}
function Dt() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return function(n) {
    for (var r = [], o = 1; o < arguments.length; o++)
      r[o - 1] = arguments[o];
    return e.some(function(a) {
      return !uo(n) && a && a.apply(void 0, Qi([n], r, !1)), uo(n);
    });
  };
}
function Ew(e) {
  var t = e.files, n = e.accept, r = e.minSize, o = e.maxSize, a = e.multiple, i = e.maxFiles;
  return !a && t.length > 1 || a && i >= 1 && t.length > i ? !1 : t.every(function(s) {
    var c = dp(s, n)[0], l = pp(s, r, o)[0];
    return c && l;
  });
}
var Aw = {
  disabled: !1,
  getFilesFromEvent: tw,
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
function hp(e) {
  e === void 0 && (e = {});
  var t = q(Je(Je({}, Aw), e));
  de(function() {
    return Je({}, e);
  }, function(k) {
    t.value = Je(Je({}, t.value), k);
  });
  var n = q(), r = q(), o = yr({
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
        var B = r.value.files;
        B && !B.length && (o.isFileDialogActive = !1, typeof k == "function" && k());
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
    k || (mw() ? setTimeout(a, 0) : a());
  }
  var u = q([]), f = function(k) {
    if (n.value) {
      var B = n.value.$el || n.value;
      B.contains(k.target) || (k.preventDefault(), u.value = []);
    }
  };
  be(function() {
    window.addEventListener("focus", i, !1);
    var k = t.value.preventDropOnDocument;
    k && (document.addEventListener("dragover", gc, !1), document.addEventListener("drop", f, !1));
  }), Nt(function() {
    window.removeEventListener("focus", i, !1);
    var k = t.value.preventDropOnDocument;
    k && (document.removeEventListener("dragover", gc), document.removeEventListener("drop", f));
  });
  function p(k) {
    var B = t.value.noDragEventsBubbling;
    B && k.stopPropagation();
  }
  function h(k) {
    return fw(this, void 0, void 0, function() {
      var B, y, O, A, S;
      return dw(this, function(K) {
        switch (K.label) {
          case 0:
            return B = t.value, y = B.getFilesFromEvent, O = B.noDragEventsBubbling, A = B.onDragEnter, k.preventDefault(), p(k), u.value = Qi(Qi([], u.value, !0), [k.target], !1), Mr(k) ? y ? [4, y(k)] : [2] : [3, 2];
          case 1:
            if (S = K.sent(), S || (S = []), uo(k) && !O)
              return [2];
            o.draggedFiles = S, o.isDragActive = !0, A && A(k), K.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }
  function d(k) {
    var B = t.value.onDragOver;
    if (k.preventDefault(), p(k), k.dataTransfer)
      try {
        k.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return Mr(k) && B && B(k), !1;
  }
  function x(k) {
    k.preventDefault(), p(k);
    var B = u.value.filter(function(A) {
      if (!n.value)
        return !1;
      var S = n.value.$el || n.value;
      return S.contains(A);
    }), y = B.indexOf(k.target);
    if (y !== -1 && B.splice(y, 1), u.value = B, !(B.length > 0)) {
      o.draggedFiles = [], o.isDragActive = !1;
      var O = t.value.onDragLeave;
      Mr(k) && O && O(k);
    }
  }
  function g(k) {
    k.preventDefault(), p(k), u.value = [];
    var B = t.value, y = B.getFilesFromEvent, O = B.noDragEventsBubbling, A = B.accept, S = B.minSize, K = B.maxSize, N = B.multiple, L = B.maxFiles, G = B.onDrop, oe = B.onDropRejected, Te = B.onDropAccepted;
    if (Mr(k)) {
      if (!y)
        return;
      Promise.resolve(y(k)).then(function(Ge) {
        if (!(uo(k) && !O)) {
          var Pe = [], Me = [];
          Ge.forEach(function($e) {
            var Ne = dp($e, A), gt = Ne[0], vt = Ne[1], Ee = pp($e, S, K), se = Ee[0], ge = Ee[1];
            if (gt && se)
              Pe.push($e);
            else {
              var fe = [vt, ge].filter(function(xe) {
                return xe;
              });
              Me.push({ file: $e, errors: fe });
            }
          }), (!N && Pe.length > 1 || N && L >= 1 && Pe.length > L) && (Pe.forEach(function($e) {
            Me.push({ file: $e, errors: [ww] });
          }), Pe.splice(0)), o.acceptedFiles = Pe, o.fileRejections = Me, G && G(Pe, Me, k), Me.length > 0 && oe && oe(Me, k), Pe.length > 0 && Te && Te(Pe, k);
        }
      });
    }
    o.isFileDialogActive = !1, o.isDragActive = !1, o.draggedFiles = [], o.acceptedFiles = [], o.fileRejections = [];
  }
  var m = function(k) {
    return t.value.disabled ? void 0 : k;
  }, v = function(k) {
    return t.value.noKeyboard ? void 0 : m(k);
  }, w = function(k) {
    return t.value.noDrag ? void 0 : m(k);
  }, C = function(k) {
    k === void 0 && (k = {});
    var B = k.onFocus, y = k.onBlur, O = k.onClick, A = k.onDragEnter, S = k.onDragenter, K = k.onDragOver, N = k.onDragover, L = k.onDragLeave, G = k.onDragleave, oe = k.onDrop, Te = yc(k, ["onFocus", "onBlur", "onClick", "onDragEnter", "onDragenter", "onDragOver", "onDragover", "onDragLeave", "onDragleave", "onDrop"]);
    return Je(Je({ onFocus: v(Dt(B, s)), onBlur: v(Dt(y, c)), onClick: m(Dt(O, l)), onDragenter: w(Dt(A, S, h)), onDragover: w(Dt(K, N, d)), onDragleave: w(Dt(L, G, x)), onDrop: w(Dt(oe, g)), ref: n }, !t.value.disabled && !t.value.noKeyboard ? { tabIndex: 0 } : {}), Te);
  }, P = function(k) {
    k.stopPropagation();
  };
  function $(k) {
    k === void 0 && (k = {});
    var B = k.onChange, y = k.onClick, O = yc(k, ["onChange", "onClick"]), A = {
      accept: t.value.accept,
      multiple: t.value.multiple,
      style: "display: none",
      type: "file",
      onChange: m(Dt(B, g)),
      onClick: m(Dt(y, P)),
      autoComplete: "off",
      tabIndex: -1,
      ref: r
    };
    return Je(Je({}, A), O);
  }
  var I = W(function() {
    return o.draggedFiles ? o.draggedFiles.length : 0;
  }), U = W(function() {
    return I.value > 0 && Ew({
      files: o.draggedFiles,
      accept: t.value.accept,
      minSize: t.value.minSize,
      maxSize: t.value.maxSize,
      multiple: t.value.multiple,
      maxFiles: t.value.maxFiles
    });
  }), T = W(function() {
    return I.value > 0 && !U.value;
  });
  return Je(Je({}, jt(o)), { isDragAccept: U, isDragReject: T, isFocused: W(function() {
    return o.isFocused && !t.value.disabled;
  }), getRootProps: C, getInputProps: $, rootRef: n, inputRef: r, open: m(a) });
}
const Cw = { class: "flex w-full flex-col" }, Pw = {
  key: 0,
  class: "select-none text-black"
}, kw = ["name"], Tw = {
  key: 1,
  class: "select-none"
}, Dw = { key: 2 }, $w = {
  key: 3,
  class: "select-none"
}, tC = {
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
    Sr();
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
    }, { getRootProps: a, getInputProps: i, isDragActive: s, ...c } = hp({
      onDrop: o,
      multiple: t.multiple,
      accept: t.accept
    });
    return (l, u) => {
      var f;
      return E(), F("div", Cw, [
        z("div", {
          class: ee(["w-full rounded-lg border-2 border-dashed border-primary-200 bg-primary-50 text-primary-200 transition duration-100 ease-in-out hover:border-primary-600 hover:text-primary", {
            "border-primary-400 bg-primary-100": b(s),
            "border-red-600 bg-primary-100": t.form.errors[e.field] ?? n.value,
            [e.FileDropCustomClass]: !!e.FileDropCustomClass
          }])
        }, [
          z("div", ae({ class: "p-4' flex h-20 w-full cursor-copy flex-col items-center justify-center font-medium" }, b(a)()), [
            e.label ? (E(), F("p", Pw, Z(e.label), 1)) : J("", !0),
            z("input", ae(b(i)(), { name: e.field }), null, 16, kw),
            b(s) ? (E(), F("span", Tw, "Drop the " + Z(r(e.field)) + " here ...", 1)) : e.form[e.field] ? (E(), F("span", Dw, Z(((f = e.form[e.field]) == null ? void 0 : f.path) ?? "File prepared"), 1)) : (E(), F("span", $w, "Drag 'n' drop " + Z(r(e.field)) + " here", 1))
          ], 16)
        ], 2),
        Y(b(br), {
          class: "mt-2",
          message: t.form.errors[e.field] ?? n.value
        }, null, 8, ["message"])
      ]);
    };
  }
}, Fw = { class: "flex w-full" }, Iw = { key: 0 }, Rw = { key: 1 }, Lw = {
  key: 0,
  class: "flex flex-wrap gap-2 p-4"
}, _w = ["onClick"], Bw = ["src"], Mw = ["value"], Nw = { class: "flex items-center gap-4" }, jw = {
  key: 0,
  class: "text-sm text-gray-600"
}, qw = {
  key: 1,
  class: "mt-2"
}, Uw = { class: "container mx-auto px-5 py-2 lg:px-8 lg:pt-8" }, zw = { class: "-m-1 flex flex-wrap md:-m-2" }, Vw = { class: "flex w-1/3 flex-wrap" }, Hw = { class: "h-full w-full p-1 shadow md:p-2" }, Ww = ["src"], nC = {
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
    const t = Sr(), n = e, r = H1({
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
    const { getRootProps: c, getInputProps: l, ...u } = hp({
      onDrop: i,
      multiple: !0,
      accept: "image/*"
    });
    return (f, p) => (E(), F(le, null, [
      e.canUpload ? (E(), F("form", {
        key: 0,
        onSubmit: wt(o, ["prevent"]),
        class: "w-full"
      }, [
        z("div", Fw, [
          z("div", {
            class: ee(["w-full rounded-l-lg border-2 border-r-0 border-dashed border-primary-200 bg-primary-50 transition duration-100 ease-in-out hover:border-primary-600 hover:text-primary", { "border-primary-400 bg-primary-100": f.dragEneted }])
          }, [
            z("div", ae({ class: "p-4' flex h-20 w-full cursor-copy items-center justify-center font-medium" }, b(c)()), [
              z("input", ve(Ae(b(l)())), null, 16),
              f.isDragActive ? (E(), F("span", Iw, "Drop the files here ...")) : (E(), F("span", Rw, "Drag 'n' drop images here"))
            ], 16),
            b(r).image.length > 0 ? (E(), F("div", Lw, [
              (E(!0), F(le, null, et(b(r).image, (h, d) => (E(), F("div", {
                class: "relative cursor-pointer select-none",
                onClick: (x) => s(d),
                key: d
              }, [
                p[0] || (p[0] = z("div", { class: "absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 font-bold text-white" }, " - ", -1)),
                z("img", {
                  src: h.dataUrl,
                  class: "h-auto max-w-[150px]"
                }, null, 8, Bw)
              ], 8, _w))), 128))
            ])) : J("", !0)
          ], 2),
          Y(b(hh), {
            class: ee(["inline rounded-l-none", { "cursor-not-allowed": b(r).image.length == 0 }]),
            disabled: b(r).image.length == 0
          }, {
            default: M(() => p[1] || (p[1] = [
              pe(" Upload ")
            ])),
            _: 1
          }, 8, ["class", "disabled"]),
          b(r).progress ? (E(), F("progress", {
            key: 0,
            value: b(r).progress.percentage,
            max: "100"
          }, Z(b(r).progress.percentage) + "%", 9, Mw)) : J("", !0)
        ]),
        f.$page.props.errors.image ? (E(), V(b(br), {
          key: 0,
          class: "mt-2",
          message: f.$page.props.errors.image
        }, null, 8, ["message"])) : J("", !0),
        z("div", Nw, [
          Y(un, {
            "enter-from-class": "opacity-0",
            "leave-to-class": "opacity-0",
            class: "transition ease-in-out"
          }, {
            default: M(() => [
              b(r).recentlySuccessful ? (E(), F("p", jw, "Images uploaded.")) : J("", !0)
            ]),
            _: 1
          })
        ])
      ], 32)) : J("", !0),
      e.images.length ? (E(), F("div", qw, [
        p[3] || (p[3] = z("hr", null, null, -1)),
        z("div", Uw, [
          z("div", zw, [
            (E(!0), F(le, null, et(e.images, (h) => (E(), F("div", Vw, [
              z("div", Hw, [
                z("img", {
                  alt: "gallery",
                  class: "block h-auto w-auto rounded-lg object-cover object-center",
                  src: h.url
                }, null, 8, Ww),
                e.canUpload ? (E(), V(b(dt), {
                  key: 0,
                  href: f.route("images.delete", h.id),
                  method: "delete",
                  class: "mt-1 w-full items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-center text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-hidden focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700",
                  as: "button"
                }, {
                  default: M(() => p[2] || (p[2] = [
                    pe(" Delete Image ")
                  ])),
                  _: 2
                }, 1032, ["href"])) : J("", !0)
              ])
            ]))), 256))
          ])
        ])
      ])) : J("", !0)
    ], 64));
  }
}, Kw = { class: "mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]" }, Gw = ["name", "value", "id", "checked"], Yw = ["for"], rC = {
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
    return (o, a) => (E(), F("div", Kw, [
      z("input", {
        class: "relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 ring-accent before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-1 after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-accent checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-accent checked:after:bg-accent checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-hidden focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-accent checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px] checked:focus:before:shadow-primary checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]",
        type: "radio",
        name: e.name,
        value: e.value,
        id: e.id,
        checked: e.modelValue === e.value,
        onChange: r
      }, null, 40, Gw),
      z("label", {
        class: "mt-px inline-block pl-[0.15rem] hover:cursor-pointer",
        for: e.id
      }, Z(e.label), 9, Yw)
    ]));
  }
}, Xw = {
  key: 0,
  class: "absolute inset-2 flex items-center justify-center"
}, wc = {
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
      return E(), V(b(hh), {
        disabled: e.loading || ((r = e.form) == null ? void 0 : r.processing) || e.disabled,
        type: e.type,
        class: "focusable",
        customButtonClass: e.customButtonClass
      }, {
        default: M(() => {
          var o, a;
          return [
            z("div", {
              class: ee({ "opacity-25": ((o = e.form) == null ? void 0 : o.processing) || e.loading })
            }, [
              j(t.$slots, "default")
            ], 2),
            (a = e.form) != null && a.processing || e.loading ? (E(), F("div", Xw, [
              Y(b(mh), { class: "aspect-square h-full! w-auto! text-white" })
            ])) : J("", !0)
          ];
        }),
        _: 3
      }, 8, ["disabled", "type", "customButtonClass"]);
    };
  }
}, Jw = ["id"], Qw = {
  key: 0,
  class: "text-sm text-gray-600"
}, Zw = { class: "flex flex-col" }, oC = {
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
    Sr();
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
    return t.sticky && (be(() => {
      c(), window.addEventListener("scroll", i, { passive: !0 }), window.addEventListener("resize", c, { passive: !0 }), r.value.addEventListener("scroll", s, { passive: !0 });
    }), Nt(() => {
      var l;
      window.removeEventListener("scroll", i), window.removeEventListener("resize", c), (l = r.value) == null || l.removeEventListener("scroll", s);
    })), (l, u) => (E(), F("div", {
      class: ee({
        "visible! hidden": e.collapsable,
        "overflow-hidden": e.overflow
      }),
      id: e.collapse_id,
      "data-te-collapse-item": ""
    }, [
      e.total != null ? (E(), F("p", Qw, "Found: " + Z(e.total), 1)) : J("", !0),
      z("div", Zw, [
        z("div", {
          class: ee({ "overflow-x-auto": e.overflow }),
          ref_key: "table_container",
          ref: r
        }, [
          z("table", {
            class: ee(["min-w-full text-left text-sm font-light", {
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
            e.sticky ? (E(), F("div", {
              key: 0,
              ref_key: "sticky_wrapper",
              ref: o,
              class: "fixed isolate z-40 hidden w-full overflow-hidden bg-neutral-100"
            }, [
              z("div", {
                ref_key: "sticky_header",
                ref: a,
                class: ee(["w-max [&>th]:align-middle", {
                  "max-sm:hidden": e.responsive
                }])
              }, null, 2)
            ], 512)) : J("", !0),
            j(l.$slots, "default")
          ], 2)
        ], 2)
      ]),
      l.$slots.pagination ? j(l.$slots, "pagination", { key: 1 }) : e.links ? (E(), V(b(ph), {
        key: 2,
        class: "mt-6",
        links: e.links,
        showPerPage: e.showPerPage,
        defaultPerPage: e.defaultPerPage
      }, null, 8, ["links", "showPerPage", "defaultPerPage"])) : J("", !0)
    ], 10, Jw));
  }
}, e2 = {}, t2 = { class: "border-b bg-neutral-100 font-medium dark:border-neutral-500" };
function n2(e, t) {
  return E(), F("thead", t2, [
    j(e.$slots, "default")
  ]);
}
const aC = /* @__PURE__ */ So(e2, [["render", n2]]), r2 = { key: 0 }, iC = {
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
      let o = Y1().props[t.data] ?? null;
      return t.recordsFromPagination ? o.data ?? null : o;
    });
    return (r, o) => (E(), F("tbody", null, [
      Y(b(K1), {
        data: t.data
      }, {
        fallback: M(() => [
          e.hidePlaceholder ? J("", !0) : (E(), V(b(f2), { key: 0 }))
        ]),
        default: M(() => [
          !e.hideNoRecordsMessage && n.value ? (E(), F(le, { key: 0 }, [
            n.value.length ? J("", !0) : (E(), F("tr", r2, [
              Y(b(Ls), {
                colspan: "999",
                class: "no-records-message text-center! text-gray-500"
              }, {
                default: M(() => [
                  pe(Z(e.noRecordsMessage), 1)
                ]),
                _: 1
              })
            ]))
          ], 64)) : J("", !0),
          j(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["data"])
    ]));
  }
}, o2 = { class: "flex items-center justify-between" }, a2 = {
  key: 0,
  class: "order-arrows flex h-full w-4 items-center md:right-4"
}, sC = {
  __name: "Th",
  props: {
    orderBy: String
  },
  setup(e) {
    Nn.add(ng, Xy);
    const t = e, n = q("asc"), r = q(!1);
    let o = null;
    const a = Sr();
    be(() => {
      t.orderBy && (o = a.on("navigate", i));
    }), Nt(() => {
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
    return (l, u) => (E(), F("th", {
      scope: "col",
      class: ee(["relative py-4 text-center md:px-6 md:text-left", e.orderBy ? "cursor-pointer" : ""]),
      onClick: s
    }, [
      z("div", o2, [
        j(l.$slots, "default"),
        e.orderBy ? (E(), F("span", a2, [
          Y(b(De), {
            icon: "fa-sort-up",
            class: ee(["absolute", c("desc")])
          }, null, 8, ["class"]),
          Y(b(De), {
            icon: "fa-sort-down",
            class: ee(["absolute", c("asc")])
          }, null, 8, ["class"])
        ])) : J("", !0)
      ])
    ], 2));
  }
}, i2 = { class: "whitespace-nowrap py-2 text-center md:px-6 md:py-4 md:text-left" }, s2 = { class: "td-label hidden font-bold" }, Ls = {
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
    return (n, r) => (E(), F("td", i2, [
      z("span", s2, Z(t.label), 1),
      j(n.$slots, "default")
    ]));
  }
}, l2 = ["data-te-target", "aria-controls"], lC = {
  __name: "TrCollapseHandler",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(e) {
    return (t, n) => (E(), F("tr", {
      "data-te-collapse-init": "",
      "data-te-target": "#" + e.collapse_id,
      "aria-expanded": "false",
      "aria-controls": e.collapse_id
    }, [
      j(t.$slots, "default")
    ], 8, l2));
  }
}, u2 = { colspan: "999" }, c2 = ["id"], uC = {
  __name: "TrCollapse",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(e) {
    return (t, n) => (E(), F("tr", null, [
      z("td", u2, [
        z("div", {
          id: e.collapse_id,
          class: "visible! hidden",
          "data-te-collapse-item": ""
        }, [
          j(t.$slots, "default")
        ], 8, c2)
      ])
    ]));
  }
}, f2 = {
  __name: "TrPlaceholder",
  props: {
    placeholders: {
      type: Number,
      required: !1,
      default: 5
    }
  },
  setup(e) {
    return (t, n) => (E(!0), F(le, null, et(e.placeholders, (r) => (E(), F("tr", null, [
      Y(b(Ls), { colspan: "999" }, {
        default: M(() => n[0] || (n[0] = [
          z("div", { class: "tr-placeholder h-8 w-full animate-pulse rounded-md bg-gray-500 bg-opacity-75" }, null, -1)
        ])),
        _: 1
      })
    ]))), 256));
  }
}, d2 = { class: "mb-2 flex w-full flex-wrap justify-between text-sm text-gray-600 max-xxs:text-xxs" }, p2 = {
  key: 0,
  class: "mb-2 h-fit w-full xs:w-fit"
}, h2 = { key: 0 }, m2 = {
  key: 1,
  class: "ml-1"
}, y2 = { class: "flex w-fit flex-wrap" }, g2 = {
  key: 0,
  class: "font-semibold"
}, v2 = { class: "mb-1" }, b2 = {
  key: 0,
  class: "w-full whitespace-normal font-semibold text-primary"
}, w2 = { class: "w-full break-words" }, x2 = { class: "mb-1 flex flex-col" }, S2 = { key: 1 }, cC = {
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
      return E(), F("div", {
        key: t.key,
        class: "mt-3 rounded-md border border-gray-300 bg-white px-4 py-3 lg:border lg:border-gray-300"
      }, [
        z("div", d2, [
          t.itemId || t.timeStamp ? (E(), F("div", p2, [
            t.itemId ? (E(), F(le, { key: 0 }, [
              t.itemId.routeName ? (E(), V(b(dt), {
                key: 1,
                href: n.route(t.itemId.routeName, t.itemId.routeData ? t.itemId.routeData : t.itemId.id)
              }, {
                default: M(() => [
                  t.itemId.prefix || t.itemId.prefix == null ? (E(), F(le, { key: 0 }, [
                    pe("#")
                  ], 64)) : J("", !0),
                  pe(" " + Z(t.itemId.id), 1)
                ]),
                _: 1
              }, 8, ["href"])) : (E(), F("span", h2, [
                t.itemId.prefix || t.itemId.prefix == null ? (E(), F(le, { key: 0 }, [
                  pe("#")
                ], 64)) : J("", !0),
                pe(" " + Z(t.itemId.id), 1)
              ]))
            ], 64)) : J("", !0),
            t.timeStamp ? (E(), F("span", m2, [
              t.itemId ? (E(), F(le, { key: 0 }, [
                pe("-")
              ], 64)) : J("", !0),
              pe(" " + Z(t.timeStamp), 1)
            ])) : J("", !0)
          ])) : J("", !0),
          z("div", y2, [
            (E(!0), F(le, null, et(e.pills, (a, i) => (E(), F(le, { key: i }, [
              a.text ? (E(), F("span", {
                key: 0,
                class: "whitespace-nowrap rounded-md border bg-primary p-1 px-2 text-white",
                style: Ft({
                  backgroundColor: a.color ? a.color : null
                })
              }, Z(a.text), 5)) : J("", !0)
            ], 64))), 128))
          ])
        ]),
        t.title ? (E(), F(le, { key: 0 }, [
          !t.title.routeName && !t.title.href ? (E(), F("p", g2, Z(t.title.text), 1)) : (E(), V(b(dt), {
            key: 1,
            href: t.title.href ? t.title.href : n.route(t.title.routeName, t.title.routeData),
            class: "font-semibold"
          }, {
            default: M(() => [
              pe(Z(t.title.text), 1)
            ]),
            _: 1
          }, 8, ["href"]))
        ], 64)) : J("", !0),
        z("div", v2, [
          t.extraText ? (E(), F("p", b2, [
            r[0] || (r[0] = pe(" Engineer Note: ")),
            z("span", w2, Z(t.extraText), 1)
          ])) : J("", !0)
        ]),
        z("div", x2, [
          (E(!0), F(le, null, et(e.options, (a, i) => (E(), F(le, null, [
            !a.routeName && !a.href ? (E(), F("span", {
              key: 0,
              style: Ft({ color: a.color ? a.color : "#000" })
            }, Z(a.text), 5)) : (E(), V(b(dt), {
              key: 1,
              href: a.href ? a.href : n.route(a.routeName, a.routeData),
              style: Ft({ color: a.color ? a.color : "#000" })
            }, {
              default: M(() => [
                pe(Z(a.text), 1)
              ]),
              _: 2
            }, 1032, ["href", "style"]))
          ], 64))), 256))
        ]),
        (o = t.amount) != null && o.amount ? (E(), F("div", S2, [
          z("span", null, Z(t.amount.text + b(G1)(t.amount.amount)), 1)
        ])) : J("", !0),
        z("div", null, [
          j(n.$slots, "default")
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
const Qa = /* @__PURE__ */ (() => {
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
})(), Za = {
  setData(e, t, n) {
    Qa.set(e, t, n);
  },
  getData(e, t) {
    return Qa.get(e, t);
  },
  removeData(e, t) {
    Qa.delete(e, t);
  }
}, O2 = 1e6, E2 = 1e3, Zi = "transitionend", A2 = (e) => e == null ? `${e}` : {}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(), C2 = (e) => {
  do
    e += Math.floor(Math.random() * O2);
  while (document.getElementById(e));
  return e;
}, mp = (e) => {
  let t = e.getAttribute("data-te-target");
  if (!t || t === "#") {
    let n = e.getAttribute("href");
    if (!n || !n.includes("#") && !n.startsWith("."))
      return null;
    n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), t = n && n !== "#" ? n.trim() : null;
  }
  return t;
}, P2 = (e) => {
  const t = mp(e);
  return t && document.querySelector(t) ? t : null;
}, _s = (e) => {
  const t = mp(e);
  return t ? document.querySelector(t) : null;
}, k2 = (e) => {
  if (!e)
    return 0;
  let { transitionDuration: t, transitionDelay: n } = window.getComputedStyle(e);
  const r = Number.parseFloat(t), o = Number.parseFloat(n);
  return !r && !o ? 0 : (t = t.split(",")[0], n = n.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(n)) * E2);
}, T2 = (e) => {
  e.dispatchEvent(new Event(Zi));
}, yp = (e) => !e || typeof e != "object" ? !1 : (typeof e.jquery < "u" && (e = e[0]), typeof e.nodeType < "u"), xc = (e) => yp(e) ? e.jquery ? e[0] : e : typeof e == "string" && e.length > 0 ? document.querySelector(e) : null, Sc = (e, t, n) => {
  Object.keys(n).forEach((r) => {
    const o = n[r], a = t[r], i = a && yp(a) ? "element" : A2(a);
    if (!new RegExp(o).test(i))
      throw new Error(
        `${e.toUpperCase()}: Option "${r}" provided type "${i}" but expected type "${o}".`
      );
  });
}, Ro = (e) => {
  if (!e || e.getClientRects().length === 0)
    return !1;
  if (e.style && e.parentNode && e.parentNode.style) {
    const t = getComputedStyle(e), n = getComputedStyle(e.parentNode);
    return getComputedStyle(e).getPropertyValue("visibility") === "visible" || t.display !== "none" && n.display !== "none" && t.visibility !== "hidden";
  }
  return !1;
}, Lo = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled") ? !0 : typeof e.disabled < "u" ? e.disabled : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false", gp = () => {
  const { jQuery: e } = window;
  return e && !document.body.hasAttribute("data-te-no-jquery") ? e : null;
}, ei = [], D2 = (e) => {
  document.readyState === "loading" ? (ei.length || document.addEventListener("DOMContentLoaded", () => {
    ei.forEach((t) => t());
  }), ei.push(e)) : e();
}, At = () => document.documentElement.dir === "rtl", $2 = (e) => document.createElement(e), Oc = (e) => {
  typeof e == "function" && e();
}, F2 = (e, t, n = !0) => {
  if (!n) {
    Oc(e);
    return;
  }
  const r = 5, o = k2(t) + r;
  let a = !1;
  const i = ({ target: s }) => {
    s === t && (a = !0, t.removeEventListener(Zi, i), Oc(e));
  };
  t.addEventListener(Zi, i), setTimeout(() => {
    a || T2(t);
  }, o);
}, I2 = /[^.]*(?=\..*)\.|.*/, R2 = /\..*/, L2 = /::\d+$/, ti = {};
let Ec = 1;
const _2 = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, B2 = /^(mouseenter|mouseleave)/i, vp = /* @__PURE__ */ new Set([
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
function bp(e, t) {
  return t && `${t}::${Ec++}` || e.uidEvent || Ec++;
}
function wp(e) {
  const t = bp(e);
  return e.uidEvent = t, ti[t] = ti[t] || {}, ti[t];
}
function M2(e, t) {
  return function n(r) {
    return r.delegateTarget = e, n.oneOff && Oe.off(e, r.type, t), t.apply(e, [r]);
  };
}
function N2(e, t, n) {
  return function r(o) {
    const a = e.querySelectorAll(t);
    for (let { target: i } = o; i && i !== this; i = i.parentNode)
      for (let s = a.length; s--; "")
        if (a[s] === i)
          return o.delegateTarget = i, r.oneOff && Oe.off(e, o.type, n), n.apply(i, [o]);
    return null;
  };
}
function xp(e, t, n = null) {
  const r = Object.keys(e);
  for (let o = 0, a = r.length; o < a; o++) {
    const i = e[r[o]];
    if (i.originalHandler === t && i.delegationSelector === n)
      return i;
  }
  return null;
}
function Sp(e, t, n) {
  const r = typeof t == "string", o = r ? n : t;
  let a = Op(e);
  return vp.has(a) || (a = e), [r, o, a];
}
function Ac(e, t, n, r, o) {
  if (typeof t != "string" || !e)
    return;
  if (n || (n = r, r = null), B2.test(t)) {
    const h = (d) => function(x) {
      if (!x.relatedTarget || x.relatedTarget !== x.delegateTarget && !x.delegateTarget.contains(x.relatedTarget))
        return d.call(this, x);
    };
    r ? r = h(r) : n = h(n);
  }
  const [a, i, s] = Sp(
    t,
    n,
    r
  ), c = wp(e), l = c[s] || (c[s] = {}), u = xp(
    l,
    i,
    a ? n : null
  );
  if (u) {
    u.oneOff = u.oneOff && o;
    return;
  }
  const f = bp(
    i,
    t.replace(I2, "")
  ), p = a ? N2(e, n, r) : M2(e, n);
  p.delegationSelector = a ? n : null, p.originalHandler = i, p.oneOff = o, p.uidEvent = f, l[f] = p, e.addEventListener(s, p, a);
}
function es(e, t, n, r, o) {
  const a = xp(t[n], r, o);
  a && (e.removeEventListener(n, a, !!o), delete t[n][a.uidEvent]);
}
function j2(e, t, n, r) {
  const o = t[n] || {};
  Object.keys(o).forEach((a) => {
    if (a.includes(r)) {
      const i = o[a];
      es(
        e,
        t,
        n,
        i.originalHandler,
        i.delegationSelector
      );
    }
  });
}
function Op(e) {
  return e = e.replace(R2, ""), _2[e] || e;
}
const Oe = {
  on(e, t, n, r) {
    Ac(e, t, n, r, !1);
  },
  one(e, t, n, r) {
    Ac(e, t, n, r, !0);
  },
  off(e, t, n, r) {
    if (typeof t != "string" || !e)
      return;
    const [o, a, i] = Sp(
      t,
      n,
      r
    ), s = i !== t, c = wp(e), l = t.startsWith(".");
    if (typeof a < "u") {
      if (!c || !c[i])
        return;
      es(
        e,
        c,
        i,
        a,
        o ? n : null
      );
      return;
    }
    l && Object.keys(c).forEach((f) => {
      j2(
        e,
        c,
        f,
        t.slice(1)
      );
    });
    const u = c[i] || {};
    Object.keys(u).forEach((f) => {
      const p = f.replace(L2, "");
      if (!s || t.includes(p)) {
        const h = u[f];
        es(
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
    const r = gp(), o = Op(t), a = t !== o, i = vp.has(o);
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
}, q2 = "5.1.3";
class U2 {
  constructor(t) {
    t = xc(t), t && (this._element = t, Za.setData(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    Za.removeData(this._element, this.constructor.DATA_KEY), Oe.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t) => {
      this[t] = null;
    });
  }
  _queueCallback(t, n, r = !0) {
    F2(t, n, r);
  }
  /** Static */
  static getInstance(t) {
    return Za.getData(xc(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, n = {}) {
    return this.getInstance(t) || new this(t, typeof n == "object" ? n : null);
  }
  static get VERSION() {
    return q2;
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
function ni(e) {
  return e === "true" ? !0 : e === "false" ? !1 : e === Number(e).toString() ? Number(e) : e === "" || e === "null" ? null : e;
}
function ri(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const Re = {
  setDataAttribute(e, t, n) {
    e.setAttribute(`data-te-${ri(t)}`, n);
  },
  removeDataAttribute(e, t) {
    e.removeAttribute(`data-te-${ri(t)}`);
  },
  getDataAttributes(e) {
    if (!e)
      return {};
    const t = {};
    return Object.keys(e.dataset).filter((n) => n.startsWith("te")).forEach((n) => {
      if (n.startsWith("teClass"))
        return;
      let r = n.replace(/^te/, "");
      r = r.charAt(0).toLowerCase() + r.slice(1, r.length), t[r] = ni(e.dataset[n]);
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
      r = r.charAt(0).toLowerCase() + r.slice(1, r.length), t[r] = ni(t[n]);
    }), t;
  },
  getDataAttribute(e, t) {
    return ni(
      e.getAttribute(`data-te-${ri(t)}`)
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
    e && oi(t).forEach((n) => {
      e.classList.contains(n) ? e.classList.remove(n) : e.classList.add(n);
    });
  },
  addClass(e, t) {
    oi(t).forEach(
      (n) => !e.classList.contains(n) && e.classList.add(n)
    );
  },
  addStyle(e, t) {
    Object.keys(t).forEach((n) => {
      e.style[n] = t[n];
    });
  },
  removeClass(e, t) {
    oi(t).forEach(
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
function oi(e) {
  return typeof e == "string" ? e.split(" ") : Array.isArray(e) ? e : !1;
}
const z2 = 3, zn = {
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
    for (; r && r.nodeType === Node.ELEMENT_NODE && r.nodeType !== z2; )
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
      (n) => !Lo(n) && Ro(n)
    );
  }
};
At();
At();
At();
At();
At();
At();
let Cc = [];
const V2 = (e, t = "hide") => {
  const n = `click.dismiss${e.EVENT_KEY}`, r = e.NAME;
  Cc.includes(r) || (Cc.push(r), Oe.on(
    document,
    n,
    `[data-te-${r}-dismiss]`,
    function(o) {
      if (["A", "AREA"].includes(this.tagName) && o.preventDefault(), Lo(this))
        return;
      const a = _s(this) || this.closest(`.${r}`) || this.closest(`[data-te-${r}-init]`);
      a && e.getOrCreateInstance(a)[t]();
    }
  ));
}, ai = "alert", H2 = "te.alert", Ep = `.${H2}`, W2 = `close${Ep}`, K2 = `closed${Ep}`, Zn = "data-te-alert-show", G2 = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, Pc = {
  animation: !0,
  autohide: !0,
  delay: 1e3
}, Y2 = {
  fadeIn: "animate-[fade-in_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none",
  fadeOut: "animate-[fade-out_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none"
}, X2 = {
  fadeIn: "string",
  fadeOut: "string"
};
class co extends U2 {
  constructor(t, n, r) {
    super(t), this._element = t, this._config = this._getConfig(n), this._classes = this._getClasses(r), this._didInit = !1, this._init();
  }
  // Getters
  static get DefaultType() {
    return G2;
  }
  static get Default() {
    return Pc;
  }
  static get NAME() {
    return ai;
  }
  // Public
  close() {
    if (Oe.trigger(this._element, W2).defaultPrevented)
      return;
    let t = 0;
    this._config.animation && (t = 300, Re.addClass(this._element, this._classes.fadeOut)), this._element.removeAttribute(Zn), setTimeout(() => {
      this._queueCallback(
        () => this._destroyElement(),
        this._element,
        this._config.animation
      );
    }, t);
  }
  show() {
    if (this._element) {
      if (this._config.autohide && this._setupAutohide(), !this._element.hasAttribute(Zn) && (Re.removeClass(this._element, "hidden"), Re.addClass(this._element, "block"), Ro(this._element))) {
        const t = (n) => {
          Re.removeClass(this._element, "hidden"), Re.addClass(this._element, "block"), Oe.off(n.target, "animationend", t);
        };
        this._element.setAttribute(Zn, ""), Oe.on(this._element, "animationend", t);
      }
      this._config.animation && (Re.removeClass(this._element, this._classes.fadeOut), Re.addClass(this._element, this._classes.fadeIn));
    }
  }
  hide() {
    if (this._element && this._element.hasAttribute(Zn)) {
      this._element.removeAttribute(Zn);
      const t = (n) => {
        Re.addClass(this._element, "hidden"), Re.removeClass(this._element, "block"), this._timeout !== null && (clearTimeout(this._timeout), this._timeout = null), Oe.off(n.target, "animationend", t);
      };
      Oe.on(this._element, "animationend", t), Re.removeClass(this._element, this._classes.fadeIn), Re.addClass(this._element, this._classes.fadeOut);
    }
  }
  // Private
  _init() {
    this._didInit || (V2(co, "close"), this._didInit = !0);
  }
  _getConfig(t) {
    return t = {
      ...Pc,
      ...Re.getDataAttributes(this._element),
      ...typeof t == "object" && t ? t : {}
    }, Sc(ai, t, this.constructor.DefaultType), t;
  }
  _getClasses(t) {
    const n = Re.getDataClassAttributes(this._element);
    return t = {
      ...Y2,
      ...n,
      ...t
    }, Sc(ai, t, X2), t;
  }
  _setupAutohide() {
    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }
  _destroyElement() {
    this._element.remove(), Oe.trigger(this._element, K2), this.dispose();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = co.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
At(), At();
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
      var w = {};
      return function(C) {
        if (w[C] === void 0) {
          var P = document.querySelector(C);
          if (window.HTMLIFrameElement && P instanceof window.HTMLIFrameElement)
            try {
              P = P.contentDocument.head;
            } catch {
              P = null;
            }
          w[C] = P;
        }
        return w[C];
      };
    }(), c = [];
    function l(w) {
      for (var C = -1, P = 0; P < c.length; P++)
        if (c[P].identifier === w) {
          C = P;
          break;
        }
      return C;
    }
    function u(w, C) {
      for (var P = {}, $ = [], I = 0; I < w.length; I++) {
        var U = w[I], T = C.base ? U[0] + C.base : U[0], k = P[T] || 0, B = "".concat(T, " ").concat(k);
        P[T] = k + 1;
        var y = l(B), O = { css: U[1], media: U[2], sourceMap: U[3] };
        y !== -1 ? (c[y].references++, c[y].updater(O)) : c.push({ identifier: B, updater: v(O, C), references: 1 }), $.push(B);
      }
      return $;
    }
    function f(w) {
      var C = document.createElement("style"), P = w.attributes || {};
      if (P.nonce === void 0) {
        var $ = a.nc;
        $ && (P.nonce = $);
      }
      if (Object.keys(P).forEach(function(U) {
        C.setAttribute(U, P[U]);
      }), typeof w.insert == "function")
        w.insert(C);
      else {
        var I = s(w.insert || "head");
        if (!I)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        I.appendChild(C);
      }
      return C;
    }
    var p, h = (p = [], function(w, C) {
      return p[w] = C, p.filter(Boolean).join(`
`);
    });
    function d(w, C, P, $) {
      var I = P ? "" : $.media ? "@media ".concat($.media, " {").concat($.css, "}") : $.css;
      if (w.styleSheet)
        w.styleSheet.cssText = h(C, I);
      else {
        var U = document.createTextNode(I), T = w.childNodes;
        T[C] && w.removeChild(T[C]), T.length ? w.insertBefore(U, T[C]) : w.appendChild(U);
      }
    }
    function x(w, C, P) {
      var $ = P.css, I = P.media, U = P.sourceMap;
      if (I ? w.setAttribute("media", I) : w.removeAttribute("media"), U && typeof btoa < "u" && ($ += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(U)))), " */")), w.styleSheet)
        w.styleSheet.cssText = $;
      else {
        for (; w.firstChild; )
          w.removeChild(w.firstChild);
        w.appendChild(document.createTextNode($));
      }
    }
    var g = null, m = 0;
    function v(w, C) {
      var P, $, I;
      if (C.singleton) {
        var U = m++;
        P = g || (g = f(C)), $ = d.bind(null, P, U, !1), I = d.bind(null, P, U, !0);
      } else
        P = f(C), $ = x.bind(null, P, C), I = function() {
          (function(T) {
            if (T.parentNode === null)
              return !1;
            T.parentNode.removeChild(T);
          })(P);
        };
      return $(w), function(T) {
        if (T) {
          if (T.css === w.css && T.media === w.media && T.sourceMap === w.sourceMap)
            return;
          $(w = T);
        } else
          I();
      };
    }
    r.exports = function(w, C) {
      (C = C || {}).singleton || typeof C.singleton == "boolean" || (C.singleton = (i === void 0 && (i = !!(window && document && document.all && !window.atob)), i));
      var P = u(w = w || [], C);
      return function($) {
        if ($ = $ || [], Object.prototype.toString.call($) === "[object Array]") {
          for (var I = 0; I < P.length; I++) {
            var U = l(P[I]);
            c[U].references--;
          }
          for (var T = u($, C), k = 0; k < P.length; k++) {
            var B = l(P[k]);
            c[B].references === 0 && (c[B].updater(), c.splice(B, 1));
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
At();
At();
C2("chips-input-");
const Kt = {
  plugins: {
    legend: {
      labels: {
        color: "rgb(102,102,102)"
      }
    }
  }
}, J2 = {
  line: {
    options: {
      ...Kt,
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
      ...Kt,
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
      ...Kt,
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
      ...Kt,
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
      ...Kt,
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
      ...Kt,
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
      ...Kt,
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
      ...Kt,
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
var _o = function(e) {
  this.element = e, this.handlers = {};
}, Ap = { isEmpty: { configurable: !0 } };
_o.prototype.bind = function(e, t) {
  typeof this.handlers[e] > "u" && (this.handlers[e] = []), this.handlers[e].push(t), this.element.addEventListener(e, t, !1);
};
_o.prototype.unbind = function(e, t) {
  var n = this;
  this.handlers[e] = this.handlers[e].filter(function(r) {
    return t && r !== t ? !0 : (n.element.removeEventListener(e, r, !1), !1);
  });
};
_o.prototype.unbindAll = function() {
  for (var e in this.handlers)
    this.unbind(e);
};
Ap.isEmpty.get = function() {
  var e = this;
  return Object.keys(this.handlers).every(
    function(t) {
      return e.handlers[t].length === 0;
    }
  );
};
Object.defineProperties(_o.prototype, Ap);
typeof document < "u" && "WebkitAppearance" in document.documentElement.style;
$2("div");
const Q2 = (e) => {
  D2(() => {
    const t = gp();
    if (t) {
      const n = e.NAME, r = t.fn[n];
      t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = () => (t.fn[n] = r, e.jQueryInterface);
    }
  });
}, Z2 = (e, t) => {
  Oe.on(
    document,
    `click.te.${e.NAME}`,
    t,
    function(n) {
      n.preventDefault(), e.getOrCreateInstance(this).toggle();
    }
  );
}, ex = (e, t) => {
  Oe.on(
    document,
    `click.te.${e.NAME}.data-api`,
    t,
    function(n) {
      ["A", "AREA"].includes(this.tagName) && n.preventDefault(), !Lo(this) && e.getOrCreateInstance(this).show();
    }
  );
}, tx = (e, t) => {
  Oe.on(
    document,
    `click.te.${e.NAME}.data-api`,
    t,
    function(n) {
      const r = _s(this);
      if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), Lo(this))
        return;
      Oe.one(r, e.EVENT_HIDDEN, () => {
        Ro(this) && this.focus();
      });
      const o = zn.findOne(e.OPEN_SELECTOR);
      o && o !== r && e.getInstance(o).hide(), e.getOrCreateInstance(r).toggle(this);
    }
  );
}, nx = (e, t) => {
  Oe.on(
    document,
    `click.te.${e.NAME}`,
    t,
    (n) => {
      n.preventDefault();
      const r = n.target.closest(t);
      e.getOrCreateInstance(r).toggle();
    }
  );
}, rx = (e, t) => {
  Oe.on(
    document,
    `click.te.${e.NAME}`,
    t,
    function(n) {
      const r = _s(this);
      ["A", "AREA"].includes(this.tagName) && n.preventDefault(), Oe.one(r, e.EVENT_SHOW, (a) => {
        a.defaultPrevented || Oe.one(r, e.EVENT_HIDDEN, () => {
          Ro(this) && this.focus();
        });
      });
      const o = zn.findOne(
        `[${e.OPEN_SELECTOR}="true"]`
      );
      o && e.getInstance(o).hide(), e.getOrCreateInstance(r).toggle(this);
    }
  );
}, ox = (e, t) => {
  Oe.one(
    document,
    "mousedown",
    t,
    e.autoInitial(new e())
  );
}, ax = (e, t) => {
  Oe.on(
    document,
    `click.te.${e.NAME}.data-api`,
    t,
    function(n) {
      (n.target.tagName === "A" || n.delegateTarget && n.delegateTarget.tagName === "A") && n.preventDefault();
      const r = P2(this);
      zn.find(r).forEach((o) => {
        e.getOrCreateInstance(o, { toggle: !1 }).toggle();
      });
    }
  );
}, ix = (e, t) => {
  [].slice.call(
    document.querySelectorAll(t)
  ).map(function(n) {
    return new e(n);
  });
}, sx = (e, t) => {
  [].slice.call(
    document.querySelectorAll(t)
  ).map(function(n) {
    return new e(n);
  });
}, lx = (e, t) => {
  zn.find(t).forEach((n) => {
    new e(n);
  }), Oe.on(
    document,
    `click.te.${e.NAME}.data-api`,
    `${t} img:not([data-te-lightbox-disabled])`,
    e.toggle()
  );
}, ux = (e, t) => {
  const n = (a) => a[0] === "{" && a[a.length - 1] === "}" || a[0] === "[" && a[a.length - 1] === "]", r = (a) => typeof a != "string" ? a : n(a) ? JSON.parse(a.replace(/'/g, '"')) : a, o = (a) => {
    const i = {};
    return Object.keys(a).forEach((s) => {
      if (s.match(/dataset.*/)) {
        const c = s.slice(7, 8).toLowerCase().concat(s.slice(8));
        i[c] = r(a[s]);
      }
    }), i;
  };
  zn.find(t).forEach((a) => {
    if (Re.getDataAttribute(a, "chart") !== "bubble" && Re.getDataAttribute(a, "chart") !== "scatter") {
      const i = Re.getDataAttributes(a), s = {
        data: {
          datasets: [o(i)]
        }
      };
      return i.chart && (s.type = i.chart), i.labels && (s.data.labels = JSON.parse(i.labels.replace(/'/g, '"'))), new e(a, {
        ...s,
        ...J2[s.type]
      });
    }
    return null;
  });
};
class cx {
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
const ts = new cx(), or = {
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
    advanced: ux
  },
  // togglers
  button: {
    name: "Button",
    selector: "[data-te-toggle='button']",
    isToggler: !0,
    callback: nx
  },
  collapse: {
    name: "Collapse",
    selector: "[data-te-collapse-init]",
    isToggler: !0,
    callback: ax
  },
  dropdown: {
    name: "Dropdown",
    selector: "[data-te-dropdown-toggle-ref]",
    isToggler: !0,
    callback: Z2
  },
  modal: {
    name: "Modal",
    selector: "[data-te-toggle='modal']",
    isToggler: !0,
    callback: rx
  },
  ripple: {
    name: "Ripple",
    selector: "[data-te-ripple-init]",
    isToggler: !0,
    callback: ox
  },
  offcanvas: {
    name: "Offcanvas",
    selector: "[data-te-offcanvas-toggle]",
    isToggler: !0,
    callback: tx
  },
  tab: {
    name: "Tab",
    selector: "[data-te-toggle='tab'], [data-te-toggle='pill'], [data-te-toggle='list']",
    isToggler: !0,
    callback: ex
  },
  tooltip: {
    name: "Tooltip",
    selector: "[data-te-toggle='tooltip']",
    isToggler: !1,
    callback: ix
  },
  popover: {
    name: "Popover",
    selector: "[data-te-toggle='popover']",
    isToggler: !0,
    callback: sx
  },
  lightbox: {
    name: "Lightbox",
    selector: "[data-te-lightbox-init]",
    isToggler: !0,
    callback: lx
  },
  touch: {
    name: "Touch",
    selector: "[data-te-touch-init]"
  }
}, fx = (e) => or[e.NAME] || null, dx = (e, t) => {
  if (!e || !t.allowReinits && ts.isInited(e.NAME))
    return;
  ts.add(e.NAME);
  const n = fx(e), r = (n == null ? void 0 : n.isToggler) || !1;
  if (Q2(e), n != null && n.advanced) {
    n == null || n.advanced(e, n == null ? void 0 : n.selector);
    return;
  }
  if (r) {
    n == null || n.callback(e, n == null ? void 0 : n.selector);
    return;
  }
  zn.find(n == null ? void 0 : n.selector).forEach((o) => {
    let a = e.getInstance(o);
    a || (a = new e(o), n != null && n.onInit && a[n.onInit]());
  });
}, px = (e, t) => {
  e.forEach((n) => dx(n, t));
}, hx = {
  allowReinits: !1,
  checkOtherImports: !1
}, mx = (e, t = {}) => {
  t = { ...hx, ...t };
  const n = Object.keys(or).map((r) => {
    if (document.querySelector(or[r].selector)) {
      const o = e[or[r].name];
      return !o && !ts.isInited(r) && t.checkOtherImports && console.warn(
        `Please import ${or[r].name} from "tw-elements" package and add it to a object parameter inside "initTE" function`
      ), o;
    }
  });
  px(n, t);
}, yx = { role: "alert" }, gx = {
  class: "mt-2 hidden w-full items-center rounded bg-primary-100 px-6 py-1 text-base text-neutral-800 shadow-xs data-te-alert-show:inline-flex sm:rounded-lg",
  role: "alert",
  "data-te-alert-init": "",
  "data-te-alert-show": ""
}, fC = {
  __name: "Alert",
  props: {
    message: String
  },
  setup(e) {
    return be(() => {
      mx({ Alert: co });
    }), (t, n) => (E(), F("div", yx, [
      z("div", null, [
        z("div", gx, [
          j(t.$slots, "default"),
          n[0] || (n[0] = z("button", {
            type: "button",
            class: "ml-auto box-content rounded-none border-none p-1 text-neutral-900 opacity-50 hover:text-neutral-900 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-hidden",
            "data-te-alert-dismiss": "",
            "aria-label": "Close"
          }, [
            z("span", { class: "w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25" }, [
              z("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                class: "h-6 w-6"
              }, [
                z("path", {
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
}, vx = ["top", "right", "bottom", "left"], en = Math.min, Qe = Math.max, fo = Math.round, Nr = Math.floor, Et = (e) => ({
  x: e,
  y: e
}), bx = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, wx = {
  start: "end",
  end: "start"
};
function ns(e, t, n) {
  return Qe(e, en(t, n));
}
function Bt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Mt(e) {
  return e.split("-")[0];
}
function Vn(e) {
  return e.split("-")[1];
}
function Bs(e) {
  return e === "x" ? "y" : "x";
}
function Ms(e) {
  return e === "y" ? "height" : "width";
}
function Rt(e) {
  return ["top", "bottom"].includes(Mt(e)) ? "y" : "x";
}
function Ns(e) {
  return Bs(Rt(e));
}
function xx(e, t, n) {
  n === void 0 && (n = !1);
  const r = Vn(e), o = Ns(e), a = Ms(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = po(i)), [i, po(i)];
}
function Sx(e) {
  const t = po(e);
  return [rs(e), t, rs(t)];
}
function rs(e) {
  return e.replace(/start|end/g, (t) => wx[t]);
}
function Ox(e, t, n) {
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
function Ex(e, t, n, r) {
  const o = Vn(e);
  let a = Ox(Mt(e), n === "start", r);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(rs)))), a;
}
function po(e) {
  return e.replace(/left|right|bottom|top/g, (t) => bx[t]);
}
function Ax(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Cp(e) {
  return typeof e != "number" ? Ax(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ho(e) {
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
function kc(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = Rt(t), i = Ns(t), s = Ms(i), c = Mt(t), l = a === "y", u = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, p = r[s] / 2 - o[s] / 2;
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
  switch (Vn(t)) {
    case "start":
      h[i] -= p * (n && l ? -1 : 1);
      break;
    case "end":
      h[i] += p * (n && l ? -1 : 1);
      break;
  }
  return h;
}
const Cx = async (e, t, n) => {
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
  } = kc(l, r, c), p = r, h = {}, d = 0;
  for (let x = 0; x < s.length; x++) {
    const {
      name: g,
      fn: m
    } = s[x], {
      x: v,
      y: w,
      data: C,
      reset: P
    } = await m({
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
    u = v ?? u, f = w ?? f, h = {
      ...h,
      [g]: {
        ...h[g],
        ...C
      }
    }, P && d <= 50 && (d++, typeof P == "object" && (P.placement && (p = P.placement), P.rects && (l = P.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : P.rects), {
      x: u,
      y: f
    } = kc(l, p, c)), x = -1);
  }
  return {
    x: u,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: h
  };
};
async function pr(e, t) {
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
  } = Bt(t, e), d = Cp(h), g = s[p ? f === "floating" ? "reference" : "floating" : f], m = ho(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), v = f === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, w = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), C = await (a.isElement == null ? void 0 : a.isElement(w)) ? await (a.getScale == null ? void 0 : a.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, P = ho(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: v,
    offsetParent: w,
    strategy: c
  }) : v);
  return {
    top: (m.top - P.top + d.top) / C.y,
    bottom: (P.bottom - m.bottom + d.bottom) / C.y,
    left: (m.left - P.left + d.left) / C.x,
    right: (P.right - m.right + d.right) / C.x
  };
}
const Px = (e) => ({
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
    } = Bt(e, t) || {};
    if (l == null)
      return {};
    const f = Cp(u), p = {
      x: n,
      y: r
    }, h = Ns(o), d = Ms(h), x = await i.getDimensions(l), g = h === "y", m = g ? "top" : "left", v = g ? "bottom" : "right", w = g ? "clientHeight" : "clientWidth", C = a.reference[d] + a.reference[h] - p[h] - a.floating[d], P = p[h] - a.reference[h], $ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
    let I = $ ? $[w] : 0;
    (!I || !await (i.isElement == null ? void 0 : i.isElement($))) && (I = s.floating[w] || a.floating[d]);
    const U = C / 2 - P / 2, T = I / 2 - x[d] / 2 - 1, k = en(f[m], T), B = en(f[v], T), y = k, O = I - x[d] - B, A = I / 2 - x[d] / 2 + U, S = ns(y, A, O), K = !c.arrow && Vn(o) != null && A !== S && a.reference[d] / 2 - (A < y ? k : B) - x[d] / 2 < 0, N = K ? A < y ? A - y : A - O : 0;
    return {
      [h]: p[h] + N,
      data: {
        [h]: S,
        centerOffset: A - S - N,
        ...K && {
          alignmentOffset: N
        }
      },
      reset: K
    };
  }
}), kx = function(e) {
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
        flipAlignment: x = !0,
        ...g
      } = Bt(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const m = Mt(o), v = Rt(s), w = Mt(s) === s, C = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), P = p || (w || !x ? [po(s)] : Sx(s)), $ = d !== "none";
      !p && $ && P.push(...Ex(s, x, d, C));
      const I = [s, ...P], U = await pr(t, g), T = [];
      let k = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (u && T.push(U[m]), f) {
        const S = xx(o, i, C);
        T.push(U[S[0]], U[S[1]]);
      }
      if (k = [...k, {
        placement: o,
        overflows: T
      }], !T.every((S) => S <= 0)) {
        var B, y;
        const S = (((B = a.flip) == null ? void 0 : B.index) || 0) + 1, K = I[S];
        if (K) {
          var O;
          const L = f === "alignment" ? v !== Rt(K) : !1, G = ((O = k[0]) == null ? void 0 : O.overflows[0]) > 0;
          if (!L || G)
            return {
              data: {
                index: S,
                overflows: k
              },
              reset: {
                placement: K
              }
            };
        }
        let N = (y = k.filter((L) => L.overflows[0] <= 0).sort((L, G) => L.overflows[1] - G.overflows[1])[0]) == null ? void 0 : y.placement;
        if (!N)
          switch (h) {
            case "bestFit": {
              var A;
              const L = (A = k.filter((G) => {
                if ($) {
                  const oe = Rt(G.placement);
                  return oe === v || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  oe === "y";
                }
                return !0;
              }).map((G) => [G.placement, G.overflows.filter((oe) => oe > 0).reduce((oe, Te) => oe + Te, 0)]).sort((G, oe) => G[1] - oe[1])[0]) == null ? void 0 : A[0];
              L && (N = L);
              break;
            }
            case "initialPlacement":
              N = s;
              break;
          }
        if (o !== N)
          return {
            reset: {
              placement: N
            }
          };
      }
      return {};
    }
  };
};
function Tc(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Dc(e) {
  return vx.some((t) => e[t] >= 0);
}
const Tx = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Bt(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await pr(t, {
            ...o,
            elementContext: "reference"
          }), i = Tc(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Dc(i)
            }
          };
        }
        case "escaped": {
          const a = await pr(t, {
            ...o,
            altBoundary: !0
          }), i = Tc(a, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Dc(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Dx(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = Mt(n), s = Vn(n), c = Rt(n) === "y", l = ["left", "top"].includes(i) ? -1 : 1, u = a && c ? -1 : 1, f = Bt(t, e);
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
const $x = function(e) {
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
      } = t, c = await Dx(t, e);
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
}, Fx = function(e) {
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
              x: m,
              y: v
            } = g;
            return {
              x: m,
              y: v
            };
          }
        },
        ...c
      } = Bt(e, t), l = {
        x: n,
        y: r
      }, u = await pr(t, c), f = Rt(Mt(o)), p = Bs(f);
      let h = l[p], d = l[f];
      if (a) {
        const g = p === "y" ? "top" : "left", m = p === "y" ? "bottom" : "right", v = h + u[g], w = h - u[m];
        h = ns(v, h, w);
      }
      if (i) {
        const g = f === "y" ? "top" : "left", m = f === "y" ? "bottom" : "right", v = d + u[g], w = d - u[m];
        d = ns(v, d, w);
      }
      const x = s.fn({
        ...t,
        [p]: h,
        [f]: d
      });
      return {
        ...x,
        data: {
          x: x.x - n,
          y: x.y - r,
          enabled: {
            [p]: a,
            [f]: i
          }
        }
      };
    }
  };
}, Ix = function(e) {
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
      } = Bt(e, t), u = {
        x: n,
        y: r
      }, f = Rt(o), p = Bs(f);
      let h = u[p], d = u[f];
      const x = Bt(s, t), g = typeof x == "number" ? {
        mainAxis: x,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...x
      };
      if (c) {
        const w = p === "y" ? "height" : "width", C = a.reference[p] - a.floating[w] + g.mainAxis, P = a.reference[p] + a.reference[w] - g.mainAxis;
        h < C ? h = C : h > P && (h = P);
      }
      if (l) {
        var m, v;
        const w = p === "y" ? "width" : "height", C = ["top", "left"].includes(Mt(o)), P = a.reference[f] - a.floating[w] + (C && ((m = i.offset) == null ? void 0 : m[f]) || 0) + (C ? 0 : g.crossAxis), $ = a.reference[f] + a.reference[w] + (C ? 0 : ((v = i.offset) == null ? void 0 : v[f]) || 0) - (C ? g.crossAxis : 0);
        d < P ? d = P : d > $ && (d = $);
      }
      return {
        [p]: h,
        [f]: d
      };
    }
  };
}, Rx = function(e) {
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
      } = Bt(e, t), u = await pr(t, l), f = Mt(o), p = Vn(o), h = Rt(o) === "y", {
        width: d,
        height: x
      } = a.floating;
      let g, m;
      f === "top" || f === "bottom" ? (g = f, m = p === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (m = f, g = p === "end" ? "top" : "bottom");
      const v = x - u.top - u.bottom, w = d - u.left - u.right, C = en(x - u[g], v), P = en(d - u[m], w), $ = !t.middlewareData.shift;
      let I = C, U = P;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (U = w), (r = t.middlewareData.shift) != null && r.enabled.y && (I = v), $ && !p) {
        const k = Qe(u.left, 0), B = Qe(u.right, 0), y = Qe(u.top, 0), O = Qe(u.bottom, 0);
        h ? U = d - 2 * (k !== 0 || B !== 0 ? k + B : Qe(u.left, u.right)) : I = x - 2 * (y !== 0 || O !== 0 ? y + O : Qe(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: U,
        availableHeight: I
      });
      const T = await i.getDimensions(s.floating);
      return d !== T.width || x !== T.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Bo() {
  return typeof window < "u";
}
function vn(e) {
  return js(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ze(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Pt(e) {
  var t;
  return (t = (js(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function js(e) {
  return Bo() ? e instanceof Node || e instanceof Ze(e).Node : !1;
}
function pt(e) {
  return Bo() ? e instanceof Element || e instanceof Ze(e).Element : !1;
}
function Ct(e) {
  return Bo() ? e instanceof HTMLElement || e instanceof Ze(e).HTMLElement : !1;
}
function $c(e) {
  return !Bo() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ze(e).ShadowRoot;
}
function Ar(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ht(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Lx(e) {
  return ["table", "td", "th"].includes(vn(e));
}
function Mo(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function qs(e) {
  const t = Us(), n = pt(e) ? ht(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function _x(e) {
  let t = tn(e);
  for (; Ct(t) && !Bn(t); ) {
    if (qs(t))
      return t;
    if (Mo(t))
      return null;
    t = tn(t);
  }
  return null;
}
function Us() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Bn(e) {
  return ["html", "body", "#document"].includes(vn(e));
}
function ht(e) {
  return Ze(e).getComputedStyle(e);
}
function No(e) {
  return pt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function tn(e) {
  if (vn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    $c(e) && e.host || // Fallback.
    Pt(e)
  );
  return $c(t) ? t.host : t;
}
function Pp(e) {
  const t = tn(e);
  return Bn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ct(t) && Ar(t) ? t : Pp(t);
}
function hr(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Pp(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = Ze(o);
  if (a) {
    const s = os(i);
    return t.concat(i, i.visualViewport || [], Ar(o) ? o : [], s && n ? hr(s) : []);
  }
  return t.concat(o, hr(o, [], n));
}
function os(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function kp(e) {
  const t = ht(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Ct(e), a = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, s = fo(n) !== a || fo(r) !== i;
  return s && (n = a, r = i), {
    width: n,
    height: r,
    $: s
  };
}
function zs(e) {
  return pt(e) ? e : e.contextElement;
}
function Rn(e) {
  const t = zs(e);
  if (!Ct(t))
    return Et(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = kp(t);
  let i = (a ? fo(n.width) : n.width) / r, s = (a ? fo(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const Bx = /* @__PURE__ */ Et(0);
function Tp(e) {
  const t = Ze(e);
  return !Us() || !t.visualViewport ? Bx : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Mx(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ze(e) ? !1 : t;
}
function hn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = zs(e);
  let i = Et(1);
  t && (r ? pt(r) && (i = Rn(r)) : i = Rn(e));
  const s = Mx(a, n, r) ? Tp(a) : Et(0);
  let c = (o.left + s.x) / i.x, l = (o.top + s.y) / i.y, u = o.width / i.x, f = o.height / i.y;
  if (a) {
    const p = Ze(a), h = r && pt(r) ? Ze(r) : r;
    let d = p, x = os(d);
    for (; x && r && h !== d; ) {
      const g = Rn(x), m = x.getBoundingClientRect(), v = ht(x), w = m.left + (x.clientLeft + parseFloat(v.paddingLeft)) * g.x, C = m.top + (x.clientTop + parseFloat(v.paddingTop)) * g.y;
      c *= g.x, l *= g.y, u *= g.x, f *= g.y, c += w, l += C, d = Ze(x), x = os(d);
    }
  }
  return ho({
    width: u,
    height: f,
    x: c,
    y: l
  });
}
function Vs(e, t) {
  const n = No(e).scrollLeft;
  return t ? t.left + n : hn(Pt(e)).left + n;
}
function Dp(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Vs(e, r)
  )), a = r.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function Nx(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", i = Pt(r), s = t ? Mo(t.floating) : !1;
  if (r === i || s && a)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Et(1);
  const u = Et(0), f = Ct(r);
  if ((f || !f && !a) && ((vn(r) !== "body" || Ar(i)) && (c = No(r)), Ct(r))) {
    const h = hn(r);
    l = Rn(r), u.x = h.x + r.clientLeft, u.y = h.y + r.clientTop;
  }
  const p = i && !f && !a ? Dp(i, c, !0) : Et(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + p.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + p.y
  };
}
function jx(e) {
  return Array.from(e.getClientRects());
}
function qx(e) {
  const t = Pt(e), n = No(e), r = e.ownerDocument.body, o = Qe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Qe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Vs(e);
  const s = -n.scrollTop;
  return ht(r).direction === "rtl" && (i += Qe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
function Ux(e, t) {
  const n = Ze(e), r = Pt(e), o = n.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, s = 0, c = 0;
  if (o) {
    a = o.width, i = o.height;
    const l = Us();
    (!l || l && t === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: c
  };
}
function zx(e, t) {
  const n = hn(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = Ct(e) ? Rn(e) : Et(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: i,
    height: s,
    x: c,
    y: l
  };
}
function Fc(e, t, n) {
  let r;
  if (t === "viewport")
    r = Ux(e, n);
  else if (t === "document")
    r = qx(Pt(e));
  else if (pt(t))
    r = zx(t, n);
  else {
    const o = Tp(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return ho(r);
}
function $p(e, t) {
  const n = tn(e);
  return n === t || !pt(n) || Bn(n) ? !1 : ht(n).position === "fixed" || $p(n, t);
}
function Vx(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = hr(e, [], !1).filter((s) => pt(s) && vn(s) !== "body"), o = null;
  const a = ht(e).position === "fixed";
  let i = a ? tn(e) : e;
  for (; pt(i) && !Bn(i); ) {
    const s = ht(i), c = qs(i);
    !c && s.position === "fixed" && (o = null), (a ? !c && !o : !c && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Ar(i) && !c && $p(e, i)) ? r = r.filter((u) => u !== i) : o = s, i = tn(i);
  }
  return t.set(e, r), r;
}
function Hx(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Mo(t) ? [] : Vx(t, this._c) : [].concat(n), r], s = i[0], c = i.reduce((l, u) => {
    const f = Fc(t, u, o);
    return l.top = Qe(f.top, l.top), l.right = en(f.right, l.right), l.bottom = en(f.bottom, l.bottom), l.left = Qe(f.left, l.left), l;
  }, Fc(t, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Wx(e) {
  const {
    width: t,
    height: n
  } = kp(e);
  return {
    width: t,
    height: n
  };
}
function Kx(e, t, n) {
  const r = Ct(t), o = Pt(t), a = n === "fixed", i = hn(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Et(0);
  function l() {
    c.x = Vs(o);
  }
  if (r || !r && !a)
    if ((vn(t) !== "body" || Ar(o)) && (s = No(t)), r) {
      const h = hn(t, !0, a, t);
      c.x = h.x + t.clientLeft, c.y = h.y + t.clientTop;
    } else o && l();
  a && !r && o && l();
  const u = o && !r && !a ? Dp(o, s) : Et(0), f = i.left + s.scrollLeft - c.x - u.x, p = i.top + s.scrollTop - c.y - u.y;
  return {
    x: f,
    y: p,
    width: i.width,
    height: i.height
  };
}
function ii(e) {
  return ht(e).position === "static";
}
function Ic(e, t) {
  if (!Ct(e) || ht(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Pt(e) === n && (n = n.ownerDocument.body), n;
}
function Fp(e, t) {
  const n = Ze(e);
  if (Mo(e))
    return n;
  if (!Ct(e)) {
    let o = tn(e);
    for (; o && !Bn(o); ) {
      if (pt(o) && !ii(o))
        return o;
      o = tn(o);
    }
    return n;
  }
  let r = Ic(e, t);
  for (; r && Lx(r) && ii(r); )
    r = Ic(r, t);
  return r && Bn(r) && ii(r) && !qs(r) ? n : r || _x(e) || n;
}
const Gx = async function(e) {
  const t = this.getOffsetParent || Fp, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Kx(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Yx(e) {
  return ht(e).direction === "rtl";
}
const Xx = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Nx,
  getDocumentElement: Pt,
  getClippingRect: Hx,
  getOffsetParent: Fp,
  getElementRects: Gx,
  getClientRects: jx,
  getDimensions: Wx,
  getScale: Rn,
  isElement: pt,
  isRTL: Yx
};
function Ip(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Jx(e, t) {
  let n = null, r;
  const o = Pt(e);
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
    const d = Nr(f), x = Nr(o.clientWidth - (u + p)), g = Nr(o.clientHeight - (f + h)), m = Nr(u), w = {
      rootMargin: -d + "px " + -x + "px " + -g + "px " + -m + "px",
      threshold: Qe(0, en(1, c)) || 1
    };
    let C = !0;
    function P($) {
      const I = $[0].intersectionRatio;
      if (I !== c) {
        if (!C)
          return i();
        I ? i(!1, I) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      I === 1 && !Ip(l, e.getBoundingClientRect()) && i(), C = !1;
    }
    try {
      n = new IntersectionObserver(P, {
        ...w,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(P, w);
    }
    n.observe(e);
  }
  return i(!0), a;
}
function Qx(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = zs(e), u = o || a ? [...l ? hr(l) : [], ...hr(t)] : [];
  u.forEach((m) => {
    o && m.addEventListener("scroll", n, {
      passive: !0
    }), a && m.addEventListener("resize", n);
  });
  const f = l && s ? Jx(l, n) : null;
  let p = -1, h = null;
  i && (h = new ResizeObserver((m) => {
    let [v] = m;
    v && v.target === l && h && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var w;
      (w = h) == null || w.observe(t);
    })), n();
  }), l && !c && h.observe(l), h.observe(t));
  let d, x = c ? hn(e) : null;
  c && g();
  function g() {
    const m = hn(e);
    x && !Ip(x, m) && n(), x = m, d = requestAnimationFrame(g);
  }
  return n(), () => {
    var m;
    u.forEach((v) => {
      o && v.removeEventListener("scroll", n), a && v.removeEventListener("resize", n);
    }), f == null || f(), (m = h) == null || m.disconnect(), h = null, c && cancelAnimationFrame(d);
  };
}
const Zx = $x, eS = Fx, Rc = kx, tS = Rx, nS = Tx, rS = Px, oS = Ix, aS = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Xx,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return Cx(e, t, {
    ...o,
    platform: a
  });
};
function iS(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function as(e) {
  if (iS(e)) {
    const t = e.$el;
    return js(t) && vn(t) === "#comment" ? null : t;
  }
  return e;
}
function kn(e) {
  return typeof e == "function" ? e() : b(e);
}
function sS(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = as(kn(e.element));
      return n == null ? {} : rS({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Rp(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Lc(e, t) {
  const n = Rp(e);
  return Math.round(t * n) / n;
}
function lS(e, t, n) {
  n === void 0 && (n = {});
  const r = n.whileElementsMounted, o = W(() => {
    var I;
    return (I = kn(n.open)) != null ? I : !0;
  }), a = W(() => kn(n.middleware)), i = W(() => {
    var I;
    return (I = kn(n.placement)) != null ? I : "bottom";
  }), s = W(() => {
    var I;
    return (I = kn(n.strategy)) != null ? I : "absolute";
  }), c = W(() => {
    var I;
    return (I = kn(n.transform)) != null ? I : !0;
  }), l = W(() => as(e.value)), u = W(() => as(t.value)), f = q(0), p = q(0), h = q(s.value), d = q(i.value), x = mr({}), g = q(!1), m = W(() => {
    const I = {
      position: h.value,
      left: "0",
      top: "0"
    };
    if (!u.value)
      return I;
    const U = Lc(u.value, f.value), T = Lc(u.value, p.value);
    return c.value ? {
      ...I,
      transform: "translate(" + U + "px, " + T + "px)",
      ...Rp(u.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: h.value,
      left: U + "px",
      top: T + "px"
    };
  });
  let v;
  function w() {
    if (l.value == null || u.value == null)
      return;
    const I = o.value;
    aS(l.value, u.value, {
      middleware: a.value,
      placement: i.value,
      strategy: s.value
    }).then((U) => {
      f.value = U.x, p.value = U.y, h.value = U.strategy, d.value = U.placement, x.value = U.middlewareData, g.value = I !== !1;
    });
  }
  function C() {
    typeof v == "function" && (v(), v = void 0);
  }
  function P() {
    if (C(), r === void 0) {
      w();
      return;
    }
    if (l.value != null && u.value != null) {
      v = r(l.value, u.value, w);
      return;
    }
  }
  function $() {
    o.value || (g.value = !1);
  }
  return de([a, i, s, o], w, {
    flush: "sync"
  }), de([l, u], P, {
    flush: "sync"
  }), de(o, $, {
    flush: "sync"
  }), Gc() && Yc(C), {
    x: An(f),
    y: An(p),
    strategy: An(h),
    placement: An(d),
    middlewareData: An(x),
    isPositioned: An(g),
    floatingStyles: m,
    update: w
  };
}
function Hs(e) {
  return e ? e.flatMap((t) => t.type === le ? Hs(t.children) : [t]) : [];
}
const is = X({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var c, l;
      if (!n.default)
        return null;
      const r = Hs(n.default()), o = r.findIndex((u) => u.type !== Xc);
      if (o === -1)
        return r;
      const a = r[o];
      (c = a.props) == null || delete c.ref;
      const i = a.props ? ae(t, a.props) : t;
      t.class && ((l = a.props) != null && l.class) && delete a.props.class;
      const s = Ah(a, i);
      for (const u in i)
        u.startsWith("on") && (s.props || (s.props = {}), s.props[u] = i[u]);
      return r.length === 1 ? s : (r[o] = s, r);
    };
  }
}), uS = ["area", "img", "input"], Ce = X({
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
    return typeof r == "string" && uS.includes(r) ? () => qe(r, t) : r !== "template" ? () => qe(e.as, t, { default: n.default }) : () => qe(is, t, { default: n.default });
  }
}), cS = /* @__PURE__ */ X({
  __name: "VisuallyHidden",
  props: {
    feature: { default: "focusable" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (E(), V(b(Ce), {
      as: t.as,
      "as-child": t.asChild,
      "aria-hidden": t.feature === "focusable" ? "true" : void 0,
      "data-hidden": t.feature === "fully-hidden" ? "" : void 0,
      tabindex: t.feature === "fully-hidden" ? "-1" : void 0,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: "1px",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        clipPath: "inset(50%)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
      }
    }, {
      default: M(() => [
        j(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-hidden", "data-hidden", "tabindex"]));
  }
});
function fS(e, t) {
  var n;
  const r = mr();
  return at(() => {
    r.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), Jc(r);
}
function Cr(e) {
  return Gc() ? (Yc(e), !0) : !1;
}
function dS() {
  const e = /* @__PURE__ */ new Set(), t = (a) => {
    e.delete(a);
  };
  return {
    on: (a) => {
      e.add(a);
      const i = () => t(a);
      return Cr(i), {
        off: i
      };
    },
    off: t,
    trigger: (...a) => Promise.all(Array.from(e).map((i) => i(...a))),
    clear: () => {
      e.clear();
    }
  };
}
function pS(e) {
  let t = !1, n;
  const r = Qc(!0);
  return (...o) => (t || (n = r.run(() => e(...o)), t = !0), n);
}
function Lp(e) {
  let t = 0, n, r;
  const o = () => {
    t -= 1, r && t <= 0 && (r.stop(), n = void 0, r = void 0);
  };
  return (...a) => (t += 1, r || (r = Qc(!0), n = r.run(() => e(...a))), Cr(o), n);
}
const Ut = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const hS = (e) => typeof e < "u", mS = Object.prototype.toString, yS = (e) => mS.call(e) === "[object Object]", _c = /* @__PURE__ */ gS();
function gS() {
  var e, t;
  return Ut && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function vS(e) {
  return gn();
}
function si(e) {
  return Array.isArray(e) ? e : [e];
}
function _p(e, t = 1e4) {
  return Ph((n, r) => {
    let o = It(e), a;
    const i = () => setTimeout(() => {
      o = It(e), r();
    }, It(t));
    return Cr(() => {
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
function bS(e, t) {
  vS() && Ch(e, t);
}
function Bp(e, t, n = {}) {
  const {
    immediate: r = !0,
    immediateCallback: o = !1
  } = n, a = mr(!1);
  let i = null;
  function s() {
    i && (clearTimeout(i), i = null);
  }
  function c() {
    a.value = !1, s();
  }
  function l(...u) {
    o && e(), s(), a.value = !0, i = setTimeout(() => {
      a.value = !1, i = null, e(...u);
    }, It(t));
  }
  return r && (a.value = !0, Ut && l()), Cr(c), {
    isPending: Jc(a),
    start: l,
    stop: c
  };
}
function wS(e, t, n) {
  return de(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const Ws = Ut ? window : void 0;
function Hn(e) {
  var t;
  const n = It(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function mn(...e) {
  const t = [], n = () => {
    t.forEach((s) => s()), t.length = 0;
  }, r = (s, c, l, u) => (s.addEventListener(c, l, u), () => s.removeEventListener(c, l, u)), o = W(() => {
    const s = si(It(e[0])).filter((c) => c != null);
    return s.every((c) => typeof c != "string") ? s : void 0;
  }), a = wS(
    () => {
      var s, c;
      return [
        (c = (s = o.value) == null ? void 0 : s.map((l) => Hn(l))) != null ? c : [Ws].filter((l) => l != null),
        si(It(o.value ? e[1] : e[0])),
        si(b(o.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        It(o.value ? e[3] : e[2])
      ];
    },
    ([s, c, l, u]) => {
      if (n(), !(s != null && s.length) || !(c != null && c.length) || !(l != null && l.length))
        return;
      const f = yS(u) ? { ...u } : u;
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
  return Cr(n), i;
}
function xS() {
  const e = mr(!1), t = gn();
  return t && be(() => {
    e.value = !0;
  }, t), e;
}
function SS(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function OS(...e) {
  let t, n, r = {};
  e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = Ws,
    eventName: a = "keydown",
    passive: i = !1,
    dedupe: s = !1
  } = r, c = SS(t);
  return mn(o, a, (u) => {
    u.repeat && It(s) || c(u) && n(u);
  }, i);
}
function ES(e) {
  return JSON.parse(JSON.stringify(e));
}
function Wn(e, t, n, r = {}) {
  var o, a, i;
  const {
    clone: s = !1,
    passive: c = !1,
    eventName: l,
    deep: u = !1,
    defaultValue: f,
    shouldEmit: p
  } = r, h = gn(), d = n || (h == null ? void 0 : h.emit) || ((o = h == null ? void 0 : h.$emit) == null ? void 0 : o.bind(h)) || ((i = (a = h == null ? void 0 : h.proxy) == null ? void 0 : a.$emit) == null ? void 0 : i.bind(h == null ? void 0 : h.proxy));
  let x = l;
  t || (t = "modelValue"), x = x || `update:${t.toString()}`;
  const g = (w) => s ? typeof s == "function" ? s(w) : ES(w) : w, m = () => hS(e[t]) ? g(e[t]) : f, v = (w) => {
    p ? p(w) && d(x, w) : d(x, w);
  };
  if (c) {
    const w = m(), C = q(w);
    let P = !1;
    return de(
      () => e[t],
      ($) => {
        P || (P = !0, C.value = g($), _e(() => P = !1));
      }
    ), de(
      C,
      ($) => {
        !P && ($ !== e[t] || u) && v($);
      },
      { deep: u }
    ), C;
  } else
    return W({
      get() {
        return m();
      },
      set(w) {
        v(w);
      }
    });
}
function it(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, r = Symbol(n);
  return [(i) => {
    const s = fs(r, i);
    if (s || s === null)
      return s;
    throw new Error(
      `Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (i) => (ds(r, i), i)];
}
const [Ks, dC] = it("ConfigProvider");
function Gs(e) {
  const t = Ks({
    dir: q("ltr")
  });
  return W(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function ie() {
  const e = gn(), t = q(), n = W(() => {
    var i, s;
    return ["#text", "#comment"].includes((i = t.value) == null ? void 0 : i.$el.nodeName) ? (s = t.value) == null ? void 0 : s.$el.nextElementSibling : Hn(t);
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
const [Mp, AS] = it("CollapsibleRoot"), Ys = /* @__PURE__ */ X({
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
    const r = e, a = Wn(r, "open", n, {
      defaultValue: r.defaultOpen,
      passive: r.open === void 0
    }), { disabled: i, unmountOnHide: s } = jt(r);
    return AS({
      contentId: "",
      disabled: i,
      open: a,
      unmountOnHide: s,
      onOpenToggle: () => {
        a.value = !a.value;
      }
    }), t({ open: a }), ie(), (c, l) => (E(), V(b(Ce), {
      as: c.as,
      "as-child": r.asChild,
      "data-state": b(a) ? "open" : "closed",
      "data-disabled": b(i) ? "" : void 0
    }, {
      default: M(() => [
        j(c.$slots, "default", { open: b(a) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), CS = ["INPUT", "TEXTAREA"];
function PS(e, t, n, r = {}) {
  if (!t || r.enableIgnoredElement && CS.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: a = "[data-reka-collection-item]",
    itemsArray: i = [],
    loop: s = !0,
    dir: c = "ltr",
    preventScroll: l = !0,
    focus: u = !1
  } = r, [f, p, h, d, x, g] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], m = h || d, v = f || p;
  if (!x && !g && (!m && !v || o === "vertical" && v || o === "horizontal" && m))
    return null;
  const w = n ? Array.from(n.querySelectorAll(a)) : i;
  if (!w.length)
    return null;
  l && e.preventDefault();
  let C = null;
  return v || m ? C = Np(w, t, {
    goForward: m ? d : c === "ltr" ? f : p,
    loop: s
  }) : x ? C = w.at(0) || null : g && (C = w.at(-1) || null), u && (C == null || C.focus()), C;
}
function Np(e, t, n, r = e.length) {
  if (--r === 0)
    return null;
  const o = e.indexOf(t), a = n.goForward ? o + 1 : o - 1;
  if (!n.loop && (a < 0 || a >= e.length))
    return null;
  const i = (a + e.length) % e.length, s = e[i];
  return s ? s.hasAttribute("disabled") && s.getAttribute("disabled") !== "false" ? Np(
    e,
    s,
    n,
    r
  ) : s : null;
}
let kS = 0;
function yn(e, t = "reka") {
  const n = Ks({ useId: void 0 });
  return dl.useId ? `${t}-${dl.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++kS}`;
}
function TS(e, t) {
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
function DS(e, t) {
  var g;
  const n = q({}), r = q("none"), o = q(e), a = e.value ? "mounted" : "unmounted";
  let i;
  const s = ((g = t.value) == null ? void 0 : g.ownerDocument.defaultView) ?? Ws, { state: c, dispatch: l } = TS(a, {
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
  }), u = (m) => {
    var v;
    if (Ut) {
      const w = new CustomEvent(m, { bubbles: !1, cancelable: !1 });
      (v = t.value) == null || v.dispatchEvent(w);
    }
  };
  de(
    e,
    async (m, v) => {
      var C;
      const w = v !== m;
      if (await _e(), w) {
        const P = r.value, $ = jr(t.value);
        m ? (l("MOUNT"), u("enter"), $ === "none" && u("after-enter")) : $ === "none" || $ === "undefined" || ((C = n.value) == null ? void 0 : C.display) === "none" ? (l("UNMOUNT"), u("leave"), u("after-leave")) : v && P !== $ ? (l("ANIMATION_OUT"), u("leave")) : (l("UNMOUNT"), u("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const f = (m) => {
    const v = jr(t.value), w = v.includes(
      m.animationName
    ), C = c.value === "mounted" ? "enter" : "leave";
    if (m.target === t.value && w && (u(`after-${C}`), l("ANIMATION_END"), !o.value)) {
      const P = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", i = s == null ? void 0 : s.setTimeout(() => {
        var $;
        (($ = t.value) == null ? void 0 : $.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = P);
      });
    }
    m.target === t.value && v === "none" && l("ANIMATION_END");
  }, p = (m) => {
    m.target === t.value && (r.value = jr(t.value));
  }, h = de(
    t,
    (m, v) => {
      m ? (n.value = getComputedStyle(m), m.addEventListener("animationstart", p), m.addEventListener("animationcancel", f), m.addEventListener("animationend", f)) : (l("ANIMATION_END"), i !== void 0 && (s == null || s.clearTimeout(i)), v == null || v.removeEventListener("animationstart", p), v == null || v.removeEventListener("animationcancel", f), v == null || v.removeEventListener("animationend", f));
    },
    { immediate: !0 }
  ), d = de(c, () => {
    const m = jr(t.value);
    r.value = c.value === "mounted" ? m : "none";
  });
  return Nt(() => {
    h(), d();
  }), {
    isPresent: W(
      () => ["mounted", "unmountSuspended"].includes(c.value)
    )
  };
}
function jr(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Pr = X({
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
    const { present: r, forceMount: o } = jt(e), a = q(), { isPresent: i } = DS(r, a);
    n({ present: i });
    let s = t.default({ present: i.value });
    s = Hs(s || []);
    const c = gn();
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
    return () => o.value || r.value || i.value ? qe(t.default({ present: i.value })[0], {
      ref: (u) => {
        const f = Hn(u);
        return typeof (f == null ? void 0 : f.hasAttribute) > "u" || (f != null && f.hasAttribute("data-reka-popper-content-wrapper") ? a.value = f.firstElementChild : a.value = f), f;
      }
    }) : null;
  }
}), Xs = /* @__PURE__ */ X({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["contentFound"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Mp();
    o.contentId || (o.contentId = yn(void 0, "reka-collapsible-content"));
    const a = q(), { forwardRef: i, currentElement: s } = ie(), c = q(0), l = q(0), u = W(() => o.open.value), f = q(u.value), p = q();
    de(
      () => {
        var d;
        return [u.value, (d = a.value) == null ? void 0 : d.present];
      },
      async () => {
        await _e();
        const d = s.value;
        if (!d)
          return;
        p.value = p.value || {
          transitionDuration: d.style.transitionDuration,
          animationName: d.style.animationName
        }, d.style.transitionDuration = "0s", d.style.animationName = "none";
        const x = d.getBoundingClientRect();
        l.value = x.height, c.value = x.width, f.value || (d.style.transitionDuration = p.value.transitionDuration, d.style.animationName = p.value.animationName);
      },
      {
        immediate: !0
      }
    );
    const h = W(() => f.value && o.open.value);
    return be(() => {
      requestAnimationFrame(() => {
        f.value = !1;
      });
    }), mn(s, "beforematch", (d) => {
      requestAnimationFrame(() => {
        o.onOpenToggle(), r("contentFound");
      });
    }), (d, x) => (E(), V(b(Pr), {
      ref_key: "presentRef",
      ref: a,
      present: d.forceMount || b(o).open.value,
      "force-mount": !0
    }, {
      default: M(({ present: g }) => {
        var m;
        return [
          Y(b(Ce), ae(d.$attrs, {
            id: b(o).contentId,
            ref: b(i),
            "as-child": n.asChild,
            as: d.as,
            hidden: g ? void 0 : b(o).unmountOnHide.value ? "" : "until-found",
            "data-state": h.value ? void 0 : b(o).open.value ? "open" : "closed",
            "data-disabled": (m = b(o).disabled) != null && m.value ? "" : void 0,
            style: {
              "--reka-collapsible-content-height": `${l.value}px`,
              "--reka-collapsible-content-width": `${c.value}px`
            }
          }), {
            default: M(() => [
              !b(o).unmountOnHide.value || g ? j(d.$slots, "default", { key: 0 }) : J("", !0)
            ]),
            _: 2
          }, 1040, ["id", "as-child", "as", "hidden", "data-state", "data-disabled", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
}), Js = /* @__PURE__ */ X({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    ie();
    const n = Mp();
    return (r, o) => {
      var a, i;
      return E(), V(b(Ce), {
        type: r.as === "button" ? "button" : void 0,
        as: r.as,
        "as-child": t.asChild,
        "aria-controls": b(n).contentId,
        "aria-expanded": b(n).open.value,
        "data-state": b(n).open.value ? "open" : "closed",
        "data-disabled": (a = b(n).disabled) != null && a.value ? "" : void 0,
        disabled: (i = b(n).disabled) == null ? void 0 : i.value,
        onClick: b(n).onOpenToggle
      }, {
        default: M(() => [
          j(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
}), [kt, $S] = it("DialogRoot"), FS = /* @__PURE__ */ X({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = Wn(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), a = q(), i = q(), { modal: s } = jt(n);
    return $S({
      open: o,
      modal: s,
      openModal: () => {
        o.value = !0;
      },
      onOpenChange: (c) => {
        o.value = c;
      },
      onOpenToggle: () => {
        o.value = !o.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement: a,
      contentElement: i
    }), (c, l) => j(c.$slots, "default", { open: b(o) });
  }
}), IS = /* @__PURE__ */ X({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    ie();
    const n = kt();
    return (r, o) => (E(), V(b(Ce), ae(t, {
      type: r.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (a) => b(n).onOpenChange(!1))
    }), {
      default: M(() => [
        j(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
});
function kr(e) {
  const t = gn(), n = t == null ? void 0 : t.type.emits, r = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((o) => {
    r[kh(Zc(o))] = (...a) => e(o, ...a);
  }), r;
}
function jp(e, t, n) {
  const r = n.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && r.addEventListener(e, t, { once: !0 }), r.dispatchEvent(o);
}
const RS = "dismissableLayer.pointerDownOutside", LS = "dismissableLayer.focusOutside";
function qp(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), r = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && (r === n || o.indexOf(r) < o.indexOf(n)));
}
function _S(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = q(!1), o = q(() => {
  });
  return at((i) => {
    if (!Ut)
      return;
    const s = async (l) => {
      const u = l.target;
      if (!(!(t != null && t.value) || !u)) {
        if (qp(t.value, u)) {
          r.value = !1;
          return;
        }
        if (l.target && !r.value) {
          let f = function() {
            jp(
              RS,
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
function BS(e, t) {
  var o;
  const n = ((o = t == null ? void 0 : t.value) == null ? void 0 : o.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = q(!1);
  return at((a) => {
    if (!Ut)
      return;
    const i = async (s) => {
      if (!(t != null && t.value))
        return;
      await _e(), await _e();
      const c = s.target;
      !t.value || !c || qp(t.value, c) || s.target && !r.value && jp(
        LS,
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
const $t = yr({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Qs = /* @__PURE__ */ X({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, r = t, { forwardRef: o, currentElement: a } = ie(), i = W(
      () => {
        var d;
        return ((d = a.value) == null ? void 0 : d.ownerDocument) ?? globalThis.document;
      }
    ), s = W(() => $t.layersRoot), c = W(() => a.value ? Array.from(s.value).indexOf(a.value) : -1), l = W(() => $t.layersWithOutsidePointerEventsDisabled.size > 0), u = W(() => {
      const d = Array.from(s.value), [x] = [...$t.layersWithOutsidePointerEventsDisabled].slice(-1), g = d.indexOf(x);
      return c.value >= g;
    }), f = _S(async (d) => {
      const x = [...$t.branches].some(
        (g) => g == null ? void 0 : g.contains(d.target)
      );
      !u.value || x || (r("pointerDownOutside", d), r("interactOutside", d), await _e(), d.defaultPrevented || r("dismiss"));
    }, a), p = BS((d) => {
      [...$t.branches].some(
        (g) => g == null ? void 0 : g.contains(d.target)
      ) || (r("focusOutside", d), r("interactOutside", d), d.defaultPrevented || r("dismiss"));
    }, a);
    OS("Escape", (d) => {
      c.value === s.value.size - 1 && (r("escapeKeyDown", d), d.defaultPrevented || r("dismiss"));
    });
    let h;
    return at((d) => {
      a.value && (n.disableOutsidePointerEvents && ($t.layersWithOutsidePointerEventsDisabled.size === 0 && (h = i.value.body.style.pointerEvents, i.value.body.style.pointerEvents = "none"), $t.layersWithOutsidePointerEventsDisabled.add(a.value)), s.value.add(a.value), d(() => {
        n.disableOutsidePointerEvents && $t.layersWithOutsidePointerEventsDisabled.size === 1 && (i.value.body.style.pointerEvents = h);
      }));
    }), at((d) => {
      d(() => {
        a.value && (s.value.delete(a.value), $t.layersWithOutsidePointerEventsDisabled.delete(a.value));
      });
    }), (d, x) => (E(), V(b(Ce), {
      ref: b(o),
      "as-child": d.asChild,
      as: d.as,
      "data-dismissable-layer": "",
      style: Ft({
        pointerEvents: l.value ? u.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: b(p).onFocusCapture,
      onBlurCapture: b(p).onBlurCapture,
      onPointerdownCapture: b(f).onPointerDownCapture
    }, {
      default: M(() => [
        j(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
});
function Ke() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
const MS = "menu.itemSelect", ss = ["Enter", " "], NS = ["ArrowDown", "PageUp", "Home"], Up = ["ArrowUp", "PageDown", "End"], jS = [...NS, ...Up];
[...ss], [...ss];
function zp(e) {
  return e ? "open" : "closed";
}
function qS(e) {
  const t = Ke();
  for (const n of e)
    if (n === t || (n.focus(), Ke() !== t))
      return;
}
function US(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a].x, c = t[a].y, l = t[i].x, u = t[i].y;
    c > r != u > r && n < (l - s) * (r - c) / (u - c) + s && (o = !o);
  }
  return o;
}
function zS(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return US(n, t);
}
function ls(e) {
  return e.pointerType === "mouse";
}
const VS = "DialogTitle", HS = "DialogContent";
function WS({
  titleName: e = VS,
  contentName: t = HS,
  componentLink: n = "dialog.html#title",
  titleId: r,
  descriptionId: o,
  contentElement: a
}) {
  const i = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.reka-ui.com/docs/components/${n}`, s = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  be(() => {
    var u;
    document.getElementById(r) || console.warn(i);
    const l = (u = a.value) == null ? void 0 : u.getAttribute("aria-describedby");
    o && l && (document.getElementById(o) || console.warn(s));
  });
}
const KS = pS(() => q([]));
function GS() {
  const e = KS();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = Bc(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = Bc(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function Bc(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function YS(e) {
  return e.filter((t) => t.tagName !== "A");
}
const li = "focusScope.autoFocusOnMount", ui = "focusScope.autoFocusOnUnmount", Mc = { bubbles: !1, cancelable: !0 };
function XS(e, { select: t = !1 } = {}) {
  const n = Ke();
  for (const r of e)
    if (Gt(r, { select: t }), Ke() !== n)
      return !0;
}
function JS(e) {
  const t = Vp(e), n = Nc(t, e), r = Nc(t.reverse(), e);
  return [n, r];
}
function Vp(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Nc(e, t) {
  for (const n of e)
    if (!QS(n, { upTo: t }))
      return n;
}
function QS(e, { upTo: t }) {
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
function ZS(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Gt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = Ke();
    e.focus({ preventScroll: !0 }), e !== n && ZS(e) && t && e.select();
  }
}
const Hp = /* @__PURE__ */ X({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = t, { currentRef: o, currentElement: a } = ie(), i = q(null), s = GS(), c = yr({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    at((u) => {
      if (!Ut)
        return;
      const f = a.value;
      if (!n.trapped)
        return;
      function p(g) {
        if (c.paused || !f)
          return;
        const m = g.target;
        f.contains(m) ? i.value = m : Gt(i.value, { select: !0 });
      }
      function h(g) {
        if (c.paused || !f)
          return;
        const m = g.relatedTarget;
        m !== null && (f.contains(m) || Gt(i.value, { select: !0 }));
      }
      function d(g) {
        f.contains(i.value) || Gt(f);
      }
      document.addEventListener("focusin", p), document.addEventListener("focusout", h);
      const x = new MutationObserver(d);
      f && x.observe(f, { childList: !0, subtree: !0 }), u(() => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", h), x.disconnect();
      });
    }), at(async (u) => {
      const f = a.value;
      if (await _e(), !f)
        return;
      s.add(c);
      const p = Ke();
      if (!f.contains(p)) {
        const d = new CustomEvent(li, Mc);
        f.addEventListener(li, (x) => r("mountAutoFocus", x)), f.dispatchEvent(d), d.defaultPrevented || (XS(YS(Vp(f)), {
          select: !0
        }), Ke() === p && Gt(f));
      }
      u(() => {
        f.removeEventListener(li, (g) => r("mountAutoFocus", g));
        const d = new CustomEvent(ui, Mc), x = (g) => {
          r("unmountAutoFocus", g);
        };
        f.addEventListener(ui, x), f.dispatchEvent(d), setTimeout(() => {
          d.defaultPrevented || Gt(p ?? document.body, { select: !0 }), f.removeEventListener(ui, x), s.remove(c);
        }, 0);
      });
    });
    function l(u) {
      if (!n.loop && !n.trapped || c.paused)
        return;
      const f = u.key === "Tab" && !u.altKey && !u.ctrlKey && !u.metaKey, p = Ke();
      if (f && p) {
        const h = u.currentTarget, [d, x] = JS(h);
        d && x ? !u.shiftKey && p === x ? (u.preventDefault(), n.loop && Gt(d, { select: !0 })) : u.shiftKey && p === d && (u.preventDefault(), n.loop && Gt(x, { select: !0 })) : p === h && u.preventDefault();
      }
    }
    return (u, f) => (E(), V(b(Ce), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": u.asChild,
      as: u.as,
      onKeydown: l
    }, {
      default: M(() => [
        j(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Wp = /* @__PURE__ */ X({
  __name: "DialogContentImpl",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = kt(), { forwardRef: a, currentElement: i } = ie();
    return o.titleId || (o.titleId = yn(void 0, "reka-dialog-title")), o.descriptionId || (o.descriptionId = yn(void 0, "reka-dialog-description")), be(() => {
      o.contentElement = i, Ke() !== document.body && (o.triggerElement.value = Ke());
    }), process.env.NODE_ENV !== "production" && WS({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: i
    }), (s, c) => (E(), V(b(Hp), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: c[5] || (c[5] = (l) => r("openAutoFocus", l)),
      onUnmountAutoFocus: c[6] || (c[6] = (l) => r("closeAutoFocus", l))
    }, {
      default: M(() => [
        Y(b(Qs), ae({
          id: b(o).contentId,
          ref: b(a),
          as: s.as,
          "as-child": s.asChild,
          "disable-outside-pointer-events": s.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": b(o).descriptionId,
          "aria-labelledby": b(o).titleId,
          "data-state": b(zp)(b(o).open.value)
        }, s.$attrs, {
          onDismiss: c[0] || (c[0] = (l) => b(o).onOpenChange(!1)),
          onEscapeKeyDown: c[1] || (c[1] = (l) => r("escapeKeyDown", l)),
          onFocusOutside: c[2] || (c[2] = (l) => r("focusOutside", l)),
          onInteractOutside: c[3] || (c[3] = (l) => r("interactOutside", l)),
          onPointerDownOutside: c[4] || (c[4] = (l) => r("pointerDownOutside", l))
        }), {
          default: M(() => [
            j(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
});
var eO = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Pn = /* @__PURE__ */ new WeakMap(), qr = /* @__PURE__ */ new WeakMap(), Ur = {}, ci = 0, Kp = function(e) {
  return e && (e.host || Kp(e.parentNode));
}, tO = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Kp(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, nO = function(e, t, n, r) {
  var o = tO(t, Array.isArray(e) ? e : [e]);
  Ur[n] || (Ur[n] = /* @__PURE__ */ new WeakMap());
  var a = Ur[n], i = [], s = /* @__PURE__ */ new Set(), c = new Set(o), l = function(f) {
    !f || s.has(f) || (s.add(f), l(f.parentNode));
  };
  o.forEach(l);
  var u = function(f) {
    !f || c.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (s.has(p))
        u(p);
      else
        try {
          var h = p.getAttribute(r), d = h !== null && h !== "false", x = (Pn.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
          Pn.set(p, x), a.set(p, g), i.push(p), x === 1 && d && qr.set(p, !0), g === 1 && p.setAttribute(n, "true"), d || p.setAttribute(r, "true");
        } catch (m) {
          console.error("aria-hidden: cannot operate on ", p, m);
        }
    });
  };
  return u(t), s.clear(), ci++, function() {
    i.forEach(function(f) {
      var p = Pn.get(f) - 1, h = a.get(f) - 1;
      Pn.set(f, p), a.set(f, h), p || (qr.has(f) || f.removeAttribute(r), qr.delete(f)), h || f.removeAttribute(n);
    }), ci--, ci || (Pn = /* @__PURE__ */ new WeakMap(), Pn = /* @__PURE__ */ new WeakMap(), qr = /* @__PURE__ */ new WeakMap(), Ur = {});
  };
}, rO = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = eO(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), nO(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function Gp(e) {
  let t;
  de(() => Hn(e), (n) => {
    n ? t = rO(n) : t && t();
  }), Nt(() => {
    t && t();
  });
}
const oO = /* @__PURE__ */ X({
  __name: "DialogContentModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = kt(), a = kr(r), { forwardRef: i, currentElement: s } = ie();
    return Gp(s), (c, l) => (E(), V(Wp, ae({ ...n, ...b(a) }, {
      ref: b(i),
      "trap-focus": b(o).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: l[0] || (l[0] = (u) => {
        var f;
        u.defaultPrevented || (u.preventDefault(), (f = b(o).triggerElement.value) == null || f.focus());
      }),
      onPointerDownOutside: l[1] || (l[1] = (u) => {
        const f = u.detail.originalEvent, p = f.button === 0 && f.ctrlKey === !0;
        (f.button === 2 || p) && u.preventDefault();
      }),
      onFocusOutside: l[2] || (l[2] = (u) => {
        u.preventDefault();
      })
    }), {
      default: M(() => [
        j(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), aO = /* @__PURE__ */ X({
  __name: "DialogContentNonModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = kr(t);
    ie();
    const a = kt(), i = q(!1), s = q(!1);
    return (c, l) => (E(), V(Wp, ae({ ...n, ...b(o) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: l[0] || (l[0] = (u) => {
        var f;
        u.defaultPrevented || (i.value || (f = b(a).triggerElement.value) == null || f.focus(), u.preventDefault()), i.value = !1, s.value = !1;
      }),
      onInteractOutside: l[1] || (l[1] = (u) => {
        var h;
        u.defaultPrevented || (i.value = !0, u.detail.originalEvent.type === "pointerdown" && (s.value = !0));
        const f = u.target;
        ((h = b(a).triggerElement.value) == null ? void 0 : h.contains(f)) && u.preventDefault(), u.detail.originalEvent.type === "focusin" && s.value && u.preventDefault();
      })
    }), {
      default: M(() => [
        j(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), iO = /* @__PURE__ */ X({
  __name: "DialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = kt(), a = kr(r), { forwardRef: i } = ie();
    return (s, c) => (E(), V(b(Pr), {
      present: s.forceMount || b(o).open.value
    }, {
      default: M(() => [
        b(o).modal.value ? (E(), V(oO, ae({
          key: 0,
          ref: b(i)
        }, { ...n, ...b(a), ...s.$attrs }), {
          default: M(() => [
            j(s.$slots, "default")
          ]),
          _: 3
        }, 16)) : (E(), V(aO, ae({
          key: 1,
          ref: b(i)
        }, { ...n, ...b(a), ...s.$attrs }), {
          default: M(() => [
            j(s.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), sO = /* @__PURE__ */ X({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    ie();
    const n = kt();
    return (r, o) => (E(), V(b(Ce), ae(t, {
      id: b(n).descriptionId
    }), {
      default: M(() => [
        j(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function fi(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function us(e, t, n = ".", r) {
  if (!fi(t))
    return us(e, {}, n, r);
  const o = Object.assign({}, t);
  for (const a in e) {
    if (a === "__proto__" || a === "constructor")
      continue;
    const i = e[a];
    i != null && (r && r(o, a, i, n) || (Array.isArray(i) && Array.isArray(o[a]) ? o[a] = [...i, ...o[a]] : fi(i) && fi(o[a]) ? o[a] = us(
      i,
      o[a],
      (n ? `${n}.` : "") + a.toString(),
      r
    ) : o[a] = i));
  }
  return o;
}
function lO(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, r) => us(n, r, "", e), {})
  );
}
const uO = lO(), cO = Lp(() => {
  const e = q(/* @__PURE__ */ new Map()), t = q(), n = W(() => {
    for (const i of e.value.values())
      if (i)
        return !0;
    return !1;
  }), r = Ks({
    scrollBody: q(!0)
  });
  let o = null;
  const a = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", _c && (o == null || o()), t.value = void 0;
  };
  return de(n, (i, s) => {
    var f;
    if (!Ut)
      return;
    if (!i) {
      s && a();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const c = window.innerWidth - document.documentElement.clientWidth, l = { padding: c, margin: 0 }, u = (f = r.scrollBody) != null && f.value ? typeof r.scrollBody.value == "object" ? uO({
      padding: r.scrollBody.value.padding === !0 ? c : r.scrollBody.value.padding,
      margin: r.scrollBody.value.margin === !0 ? c : r.scrollBody.value.margin
    }, l) : l : { padding: 0, margin: 0 };
    c > 0 && (document.body.style.paddingRight = typeof u.padding == "number" ? `${u.padding}px` : String(u.padding), document.body.style.marginRight = typeof u.margin == "number" ? `${u.margin}px` : String(u.margin), document.body.style.setProperty("--scrollbar-width", `${c}px`), document.body.style.overflow = "hidden"), _c && (o = mn(
      document,
      "touchmove",
      (p) => fO(p),
      { passive: !1 }
    )), _e(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function Yp(e) {
  const t = Math.random().toString(36).substring(2, 7), n = cO();
  n.value.set(t, e ?? !1);
  const r = W({
    get: () => n.value.get(t) ?? !1,
    set: (o) => n.value.set(t, o)
  });
  return bS(() => {
    n.value.delete(t);
  }), r;
}
function Xp(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : Xp(n);
  }
}
function fO(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && Xp(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const dO = /* @__PURE__ */ X({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = kt();
    return Yp(!0), ie(), (n, r) => (E(), V(b(Ce), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": b(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: M(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), pO = /* @__PURE__ */ X({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = kt(), { forwardRef: n } = ie();
    return (r, o) => {
      var a;
      return (a = b(t)) != null && a.modal.value ? (E(), V(b(Pr), {
        key: 0,
        present: r.forceMount || b(t).open.value
      }, {
        default: M(() => [
          Y(dO, ae(r.$attrs, {
            ref: b(n),
            as: r.as,
            "as-child": r.asChild
          }), {
            default: M(() => [
              j(r.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : J("", !0);
    };
  }
}), Zs = /* @__PURE__ */ X({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = xS();
    return (n, r) => b(t) || n.forceMount ? (E(), V(ef, {
      key: 0,
      to: n.to,
      disabled: n.disabled,
      defer: n.defer
    }, [
      j(n.$slots, "default")
    ], 8, ["to", "disabled", "defer"])) : J("", !0);
  }
});
function Jp(e) {
  const t = gn(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, a) => {
    const i = (t == null ? void 0 : t.type.props[a]).default;
    return i !== void 0 && (o[a] = i), o;
  }, {}), r = Th(e);
  return W(() => {
    const o = {}, a = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(a).forEach((i) => {
      o[Zc(i)] = a[i];
    }), Object.keys({ ...n, ...o }).reduce((i, s) => (r.value[s] !== void 0 && (i[s] = r.value[s]), i), {});
  });
}
function Tr(e, t) {
  const n = Jp(e), r = t ? kr(t) : {};
  return W(() => ({
    ...n.value,
    ...r
  }));
}
const hO = /* @__PURE__ */ X({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = kt();
    return ie(), (r, o) => (E(), V(b(Ce), ae(t, {
      id: b(n).titleId
    }), {
      default: M(() => [
        j(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), mO = /* @__PURE__ */ X({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = kt(), { forwardRef: r, currentElement: o } = ie();
    return n.contentId || (n.contentId = yn(void 0, "reka-dialog-content")), be(() => {
      n.triggerElement.value = o.value;
    }), (a, i) => (E(), V(b(Ce), ae(t, {
      ref: b(r),
      type: a.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": b(n).open.value || !1,
      "aria-controls": b(n).open.value ? b(n).contentId : void 0,
      "data-state": b(n).open.value ? "open" : "closed",
      onClick: b(n).onOpenToggle
    }), {
      default: M(() => [
        j(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
});
function jc() {
  const e = q(), t = W(() => {
    var n, r;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (r = e.value) == null ? void 0 : r.$el.nextElementSibling : Hn(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const qc = "data-reka-collection-item";
function Qp(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, r = `${t}CollectionProvider`;
  let o;
  if (n) {
    const u = q(/* @__PURE__ */ new Map());
    o = {
      collectionRef: q(),
      itemMap: u
    }, ds(r, o);
  } else
    o = fs(r);
  const a = (u = !1) => {
    const f = o.collectionRef.value;
    if (!f)
      return [];
    const p = Array.from(f.querySelectorAll(`[${qc}]`)), d = Array.from(o.itemMap.value.values()).sort(
      (x, g) => p.indexOf(x.ref) - p.indexOf(g.ref)
    );
    return u ? d : d.filter((x) => x.ref.dataset.disabled !== "");
  }, i = X({
    name: "CollectionSlot",
    setup(u, { slots: f }) {
      const { primitiveElement: p, currentElement: h } = jc();
      return de(h, () => {
        o.collectionRef.value = h.value;
      }), () => qe(is, { ref: p }, f);
    }
  }), s = X({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: {
      value: {
        // It accepts any value
        validator: () => !0
      }
    },
    setup(u, { slots: f, attrs: p }) {
      const { primitiveElement: h, currentElement: d } = jc();
      return at((x) => {
        if (d.value) {
          const g = mi(d.value);
          o.itemMap.value.set(g, { ref: d.value, value: u.value }), x(() => o.itemMap.value.delete(g));
        }
      }), () => qe(is, { ...p, [qc]: "", ref: h }, f);
    }
  }), c = W(() => Array.from(o.itemMap.value.values())), l = W(() => o.itemMap.value.size);
  return { getItems: a, reactiveItems: c, itemMapSize: l, CollectionSlot: i, CollectionItem: s };
}
const yO = "rovingFocusGroup.onEntryFocus", gO = { bubbles: !1, cancelable: !0 };
function vO(e, t = !1) {
  const n = Ke();
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), Ke() !== n))
      return;
}
const [pC, bO] = it("RovingFocusGroup"), wO = /* @__PURE__ */ X({
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
    const r = e, o = n, { loop: a, orientation: i, dir: s } = jt(r), c = Gs(s), l = Wn(r, "currentTabStopId", o, {
      defaultValue: r.defaultCurrentTabStopId,
      passive: r.currentTabStopId === void 0
    }), u = q(!1), f = q(!1), p = q(0), { getItems: h, CollectionSlot: d } = Qp({ isProvider: !0 });
    function x(m) {
      const v = !f.value;
      if (m.currentTarget && m.target === m.currentTarget && v && !u.value) {
        const w = new CustomEvent(yO, gO);
        if (m.currentTarget.dispatchEvent(w), o("entryFocus", w), !w.defaultPrevented) {
          const C = h().map((U) => U.ref).filter((U) => U.dataset.disabled !== ""), P = C.find((U) => U.getAttribute("data-active") === ""), $ = C.find(
            (U) => U.id === l.value
          ), I = [P, $, ...C].filter(
            Boolean
          );
          vO(I, r.preventScrollOnEntryFocus);
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
    }), bO({
      loop: a,
      dir: c,
      orientation: i,
      currentTabStopId: l,
      onItemFocus: (m) => {
        l.value = m;
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
    }), (m, v) => (E(), V(b(d), null, {
      default: M(() => [
        Y(b(Ce), {
          tabindex: u.value || p.value === 0 ? -1 : 0,
          "data-orientation": b(i),
          as: m.as,
          "as-child": m.asChild,
          dir: b(c),
          style: { outline: "none" },
          onMousedown: v[0] || (v[0] = (w) => f.value = !0),
          onMouseup: g,
          onFocus: x,
          onBlur: v[1] || (v[1] = (w) => u.value = !1)
        }, {
          default: M(() => [
            j(m.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), [Zp, xO] = it("PopperRoot"), eh = /* @__PURE__ */ X({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = q();
    return xO({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, r) => j(n.$slots, "default");
  }
}), th = /* @__PURE__ */ X({
  __name: "PopperAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: r } = ie(), o = Zp();
    return tf(() => {
      o.onAnchorChange(t.reference ?? r.value);
    }), (a, i) => (E(), V(b(Ce), {
      ref: b(n),
      as: a.as,
      "as-child": a.asChild
    }, {
      default: M(() => [
        j(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), SO = {
  key: 0,
  d: "M0 0L6 6L12 0"
}, OO = {
  key: 1,
  d: "M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"
}, EO = /* @__PURE__ */ X({
  __name: "Arrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    rounded: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(e) {
    const t = e;
    return ie(), (n, r) => (E(), V(b(Ce), ae(t, {
      width: n.width,
      height: n.height,
      viewBox: n.asChild ? void 0 : "0 0 12 6",
      preserveAspectRatio: n.asChild ? void 0 : "none"
    }), {
      default: M(() => [
        j(n.$slots, "default", {}, () => [
          n.rounded ? (E(), F("path", OO)) : (E(), F("path", SO))
        ])
      ]),
      _: 3
    }, 16, ["width", "height", "viewBox", "preserveAspectRatio"]));
  }
});
function AO(e) {
  return e !== null;
}
function CO(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var g, m, v;
      const { placement: n, rects: r, middlewareData: o } = t, i = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0, s = i ? 0 : e.arrowWidth, c = i ? 0 : e.arrowHeight, [l, u] = cs(n), f = { start: "0%", center: "50%", end: "100%" }[u], p = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + s / 2, h = (((v = o.arrow) == null ? void 0 : v.y) ?? 0) + c / 2;
      let d = "", x = "";
      return l === "bottom" ? (d = i ? f : `${p}px`, x = `${-c}px`) : l === "top" ? (d = i ? f : `${p}px`, x = `${r.floating.height + c}px`) : l === "right" ? (d = `${-c}px`, x = i ? f : `${h}px`) : l === "left" && (d = `${r.floating.width + c}px`, x = i ? f : `${h}px`), { data: { x: d, y: x } };
    }
  };
}
function cs(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
function PO(e) {
  const t = q(), n = W(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), r = W(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return be(() => {
    const o = Hn(e);
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
const nh = {
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
}, [kO, TO] = it("PopperContent"), rh = /* @__PURE__ */ X({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ nf({
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
    ...nh
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Zp(), { forwardRef: a, currentElement: i } = ie(), s = q(), c = q(), { width: l, height: u } = PO(c), f = W(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), p = W(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), h = W(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), d = W(() => ({
      padding: p.value,
      boundary: h.value.filter(AO),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: h.value.length > 0
    })), x = fS(() => [
      Zx({
        mainAxis: n.sideOffset + u.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && Rc({
        ...d.value
      }),
      n.avoidCollisions && eS({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? oS() : void 0,
        ...d.value
      }),
      !n.prioritizePosition && n.avoidCollisions && Rc({
        ...d.value
      }),
      tS({
        ...d.value,
        apply: ({ elements: B, rects: y, availableWidth: O, availableHeight: A }) => {
          const { width: S, height: K } = y.reference, N = B.floating.style;
          N.setProperty(
            "--reka-popper-available-width",
            `${O}px`
          ), N.setProperty(
            "--reka-popper-available-height",
            `${A}px`
          ), N.setProperty(
            "--reka-popper-anchor-width",
            `${S}px`
          ), N.setProperty(
            "--reka-popper-anchor-height",
            `${K}px`
          );
        }
      }),
      c.value && sS({ element: c.value, padding: n.arrowPadding }),
      CO({
        arrowWidth: l.value,
        arrowHeight: u.value
      }),
      n.hideWhenDetached && nS({ strategy: "referenceHidden", ...d.value })
    ]), g = W(() => n.reference ?? o.anchor.value), { floatingStyles: m, placement: v, isPositioned: w, middlewareData: C } = lS(
      g,
      s,
      {
        strategy: n.positionStrategy,
        placement: f,
        whileElementsMounted: (...B) => Qx(...B, {
          layoutShift: !n.disableUpdateOnLayoutShift,
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: x
      }
    ), P = W(
      () => cs(v.value)[0]
    ), $ = W(
      () => cs(v.value)[1]
    );
    tf(() => {
      w.value && r("placed");
    });
    const I = W(
      () => {
        var B;
        return ((B = C.value.arrow) == null ? void 0 : B.centerOffset) !== 0;
      }
    ), U = q("");
    at(() => {
      i.value && (U.value = window.getComputedStyle(i.value).zIndex);
    });
    const T = W(() => {
      var B;
      return ((B = C.value.arrow) == null ? void 0 : B.x) ?? 0;
    }), k = W(() => {
      var B;
      return ((B = C.value.arrow) == null ? void 0 : B.y) ?? 0;
    });
    return TO({
      placedSide: P,
      onArrowChange: (B) => c.value = B,
      arrowX: T,
      arrowY: k,
      shouldHideArrow: I
    }), (B, y) => {
      var O, A, S;
      return E(), F("div", {
        ref_key: "floatingRef",
        ref: s,
        "data-reka-popper-content-wrapper": "",
        style: Ft({
          ...b(m),
          transform: b(w) ? b(m).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: U.value,
          "--reka-popper-transform-origin": [
            (O = b(C).transformOrigin) == null ? void 0 : O.x,
            (A = b(C).transformOrigin) == null ? void 0 : A.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((S = b(C).hide) == null ? void 0 : S.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        Y(b(Ce), ae({ ref: b(a) }, B.$attrs, {
          "as-child": n.asChild,
          as: B.as,
          "data-side": P.value,
          "data-align": $.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: b(w) ? void 0 : "none"
          }
        }), {
          default: M(() => [
            j(B.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), DO = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, $O = /* @__PURE__ */ X({
  inheritAttrs: !1,
  __name: "PopperArrow",
  props: {
    width: {},
    height: {},
    rounded: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(e) {
    const { forwardRef: t } = ie(), n = kO(), r = W(() => DO[n.placedSide.value]);
    return (o, a) => {
      var i, s, c, l;
      return E(), F("span", {
        ref: (u) => {
          b(n).onArrowChange(u);
        },
        style: Ft({
          position: "absolute",
          left: (i = b(n).arrowX) != null && i.value ? `${(s = b(n).arrowX) == null ? void 0 : s.value}px` : void 0,
          top: (c = b(n).arrowY) != null && c.value ? `${(l = b(n).arrowY) == null ? void 0 : l.value}px` : void 0,
          [r.value]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[b(n).placedSide.value],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[b(n).placedSide.value],
          visibility: b(n).shouldHideArrow.value ? "hidden" : void 0
        })
      }, [
        Y(EO, ae(o.$attrs, {
          ref: b(t),
          style: {
            display: "block"
          },
          as: o.as,
          "as-child": o.asChild,
          rounded: o.rounded,
          width: o.width,
          height: o.height
        }), {
          default: M(() => [
            j(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "rounded", "width", "height"])
      ], 4);
    };
  }
});
function FO(e) {
  const t = _p("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (o, a) => {
      t.value = t.value + o;
      {
        const i = Ke(), s = a.map((p) => {
          var h, d;
          return {
            ...p,
            textValue: ((h = p.value) == null ? void 0 : h.textValue) ?? ((d = p.ref.textContent) == null ? void 0 : d.trim()) ?? ""
          };
        }), c = s.find((p) => p.ref === i), l = s.map((p) => p.textValue), u = RO(l, t.value, c == null ? void 0 : c.textValue), f = s.find((p) => p.textValue === u);
        return f && f.ref.focus(), f == null ? void 0 : f.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function IO(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function RO(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let i = IO(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((l) => l !== n));
  const c = i.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function LO() {
  const e = q(!1);
  return be(() => {
    mn("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), mn(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const _O = Lp(LO), [jo, BO] = it(["MenuRoot", "MenuSub"], "MenuContext"), [el, MO] = it("MenuRoot"), NO = /* @__PURE__ */ X({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, r = t, { modal: o, dir: a } = jt(n), i = Gs(a), s = Wn(n, "open", r), c = q(), l = _O();
    return BO({
      open: s,
      onOpenChange: (u) => {
        s.value = u;
      },
      content: c,
      onContentChange: (u) => {
        c.value = u;
      }
    }), MO({
      onClose: () => {
        s.value = !1;
      },
      isUsingKeyboardRef: l,
      dir: i,
      modal: o
    }), (u, f) => (E(), V(b(eh), null, {
      default: M(() => [
        j(u.$slots, "default")
      ]),
      _: 3
    }));
  }
});
let di = 0;
function jO() {
  at((e) => {
    if (!Ut)
      return;
    const t = document.querySelectorAll("[data-reka-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? Uc()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? Uc()
    ), di++, e(() => {
      di === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((n) => n.remove()), di--;
    });
  });
}
function Uc() {
  const e = document.createElement("span");
  return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
const [oh, qO] = it("MenuContent"), ah = /* @__PURE__ */ X({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ nf({
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
    ...nh
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = jo(), a = el(), { trapFocus: i, disableOutsidePointerEvents: s, loop: c } = jt(n);
    jO(), Yp(s.value);
    const l = q(""), u = q(0), f = q(0), p = q(null), h = q("right"), d = q(0), x = q(null), g = q(), { forwardRef: m, currentElement: v } = ie(), { handleTypeaheadSearch: w } = FO();
    de(v, (T) => {
      o.onContentChange(T);
    }), Nt(() => {
      window.clearTimeout(u.value);
    });
    function C(T) {
      var B, y;
      return h.value === ((B = p.value) == null ? void 0 : B.side) && zS(T, (y = p.value) == null ? void 0 : y.area);
    }
    async function P(T) {
      var k;
      r("openAutoFocus", T), !T.defaultPrevented && (T.preventDefault(), (k = v.value) == null || k.focus({
        preventScroll: !0
      }));
    }
    function $(T) {
      var N;
      if (T.defaultPrevented)
        return;
      const B = T.target.closest("[data-reka-menu-content]") === T.currentTarget, y = T.ctrlKey || T.altKey || T.metaKey, O = T.key.length === 1, A = PS(
        T,
        Ke(),
        v.value,
        {
          loop: c.value,
          arrowKeyOptions: "vertical",
          dir: a == null ? void 0 : a.dir.value,
          focus: !0,
          attributeName: "[data-reka-collection-item]:not([data-disabled])"
        }
      );
      if (A)
        return A == null ? void 0 : A.focus();
      if (T.code === "Space")
        return;
      const S = ((N = g.value) == null ? void 0 : N.getItems()) ?? [];
      if (B && (T.key === "Tab" && T.preventDefault(), !y && O && w(T.key, S)), T.target !== v.value || !jS.includes(T.key))
        return;
      T.preventDefault();
      const K = [...S.map((L) => L.ref)];
      Up.includes(T.key) && K.reverse(), qS(K);
    }
    function I(T) {
      var k, B;
      (B = (k = T == null ? void 0 : T.currentTarget) == null ? void 0 : k.contains) != null && B.call(k, T.target) || (window.clearTimeout(u.value), l.value = "");
    }
    function U(T) {
      var y;
      if (!ls(T))
        return;
      const k = T.target, B = d.value !== T.clientX;
      if ((y = T == null ? void 0 : T.currentTarget) != null && y.contains(k) && B) {
        const O = T.clientX > d.value ? "right" : "left";
        h.value = O, d.value = T.clientX;
      }
    }
    return qO({
      onItemEnter: (T) => !!C(T),
      onItemLeave: (T) => {
        var k;
        C(T) || ((k = v.value) == null || k.focus(), x.value = null);
      },
      onTriggerLeave: (T) => !!C(T),
      searchRef: l,
      pointerGraceTimerRef: f,
      onPointerGraceIntentChange: (T) => {
        p.value = T;
      }
    }), (T, k) => (E(), V(b(Hp), {
      "as-child": "",
      trapped: b(i),
      onMountAutoFocus: P,
      onUnmountAutoFocus: k[7] || (k[7] = (B) => r("closeAutoFocus", B))
    }, {
      default: M(() => [
        Y(b(Qs), {
          "as-child": "",
          "disable-outside-pointer-events": b(s),
          onEscapeKeyDown: k[2] || (k[2] = (B) => r("escapeKeyDown", B)),
          onPointerDownOutside: k[3] || (k[3] = (B) => r("pointerDownOutside", B)),
          onFocusOutside: k[4] || (k[4] = (B) => r("focusOutside", B)),
          onInteractOutside: k[5] || (k[5] = (B) => r("interactOutside", B)),
          onDismiss: k[6] || (k[6] = (B) => r("dismiss"))
        }, {
          default: M(() => [
            Y(b(wO), {
              ref_key: "rovingFocusGroupRef",
              ref: g,
              "current-tab-stop-id": x.value,
              "onUpdate:currentTabStopId": k[0] || (k[0] = (B) => x.value = B),
              "as-child": "",
              orientation: "vertical",
              dir: b(a).dir.value,
              loop: b(c),
              onEntryFocus: k[1] || (k[1] = (B) => {
                r("entryFocus", B), b(a).isUsingKeyboardRef.value || B.preventDefault();
              })
            }, {
              default: M(() => [
                Y(b(rh), {
                  ref: b(m),
                  role: "menu",
                  as: T.as,
                  "as-child": T.asChild,
                  "aria-orientation": "vertical",
                  "data-reka-menu-content": "",
                  "data-state": b(zp)(b(o).open.value),
                  dir: b(a).dir.value,
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
                  onBlur: I,
                  onPointermove: U
                }, {
                  default: M(() => [
                    j(T.$slots, "default")
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
}), UO = /* @__PURE__ */ X({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = oh(), { forwardRef: r } = ie(), { CollectionItem: o } = Qp(), a = q(!1);
    async function i(c) {
      if (!c.defaultPrevented && ls(c)) {
        if (t.disabled)
          n.onItemLeave(c);
        else if (!n.onItemEnter(c)) {
          const u = c.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function s(c) {
      await _e(), !c.defaultPrevented && ls(c) && n.onItemLeave(c);
    }
    return (c, l) => (E(), V(b(o), {
      value: { textValue: c.textValue }
    }, {
      default: M(() => [
        Y(b(Ce), ae({
          ref: b(r),
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
            await _e(), !(u.defaultPrevented || c.disabled) && (a.value = !0);
          }),
          onBlur: l[1] || (l[1] = async (u) => {
            await _e(), !u.defaultPrevented && (a.value = !1);
          })
        }), {
          default: M(() => [
            j(c.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), zO = /* @__PURE__ */ X({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, r = t, { forwardRef: o, currentElement: a } = ie(), i = el(), s = oh(), c = q(!1);
    async function l() {
      const u = a.value;
      if (!n.disabled && u) {
        const f = new CustomEvent(MS, {
          bubbles: !0,
          cancelable: !0
        });
        r("select", f), await _e(), f.defaultPrevented ? c.value = !1 : i.onClose();
      }
    }
    return (u, f) => (E(), V(UO, ae(n, {
      ref: b(o),
      onClick: l,
      onPointerdown: f[0] || (f[0] = () => {
        c.value = !0;
      }),
      onPointerup: f[1] || (f[1] = async (p) => {
        var h;
        await _e(), !p.defaultPrevented && (c.value || (h = p.currentTarget) == null || h.click());
      }),
      onKeydown: f[2] || (f[2] = async (p) => {
        const h = b(s).searchRef.value !== "";
        u.disabled || h && p.key === " " || b(ss).includes(p.key) && (p.currentTarget.click(), p.preventDefault());
      })
    }), {
      default: M(() => [
        j(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), VO = /* @__PURE__ */ X({
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
    const n = e, r = t, o = Tr(n, r), a = jo(), { forwardRef: i, currentElement: s } = ie();
    return Gp(s), (c, l) => (E(), V(ah, ae(b(o), {
      ref: b(i),
      "trap-focus": b(a).open.value,
      "disable-outside-pointer-events": b(a).open.value,
      "disable-outside-scroll": !0,
      onDismiss: l[0] || (l[0] = (u) => b(a).onOpenChange(!1)),
      onFocusOutside: l[1] || (l[1] = wt((u) => r("focusOutside", u), ["prevent"]))
    }), {
      default: M(() => [
        j(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), HO = /* @__PURE__ */ X({
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
    const o = Tr(e, t), a = jo();
    return (i, s) => (E(), V(ah, ae(b(o), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: s[0] || (s[0] = (c) => b(a).onOpenChange(!1))
    }), {
      default: M(() => [
        j(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), WO = /* @__PURE__ */ X({
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
    const o = Tr(e, t), a = jo(), i = el();
    return (s, c) => (E(), V(b(Pr), {
      present: s.forceMount || b(a).open.value
    }, {
      default: M(() => [
        b(i).modal.value ? (E(), V(VO, ve(ae({ key: 0 }, { ...s.$attrs, ...b(o) })), {
          default: M(() => [
            j(s.$slots, "default")
          ]),
          _: 3
        }, 16)) : (E(), V(HO, ve(ae({ key: 1 }, { ...s.$attrs, ...b(o) })), {
          default: M(() => [
            j(s.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), KO = /* @__PURE__ */ X({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (E(), V(b(Zs), ve(Ae(t)), {
      default: M(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), GO = /* @__PURE__ */ X({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, r) => (E(), V(b(Ce), ae(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: M(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), YO = /* @__PURE__ */ X({
  __name: "MenuAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, r) => (E(), V(b(th), ve(Ae(t)), {
      default: M(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), XO = /* @__PURE__ */ X({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (E(), V(b(Zs), ve(Ae(t)), {
      default: M(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ih, JO] = it("DropdownMenuRoot"), sh = /* @__PURE__ */ X({
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
    ie();
    const o = Wn(n, "open", r, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), a = q(), { modal: i, dir: s } = jt(n), c = Gs(s);
    return JO({
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
    }), (l, u) => (E(), V(b(NO), {
      open: b(o),
      "onUpdate:open": u[0] || (u[0] = (f) => Dh(o) ? o.value = f : null),
      dir: b(c),
      modal: b(i)
    }, {
      default: M(() => [
        j(l.$slots, "default", { open: b(o) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), lh = /* @__PURE__ */ X({
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
    const o = Tr(e, t);
    ie();
    const a = ih(), i = q(!1);
    function s(c) {
      c.defaultPrevented || (i.value || setTimeout(() => {
        var l;
        (l = a.triggerElement.value) == null || l.focus();
      }, 0), i.value = !1, c.preventDefault());
    }
    return a.contentId || (a.contentId = yn(void 0, "reka-dropdown-menu-content")), (c, l) => {
      var u;
      return E(), V(b(WO), ae(b(o), {
        id: b(a).contentId,
        "aria-labelledby": (u = b(a)) == null ? void 0 : u.triggerId,
        style: {
          "--reka-dropdown-menu-content-transform-origin": "var(--reka-popper-transform-origin)",
          "--reka-dropdown-menu-content-available-width": "var(--reka-popper-available-width)",
          "--reka-dropdown-menu-content-available-height": "var(--reka-popper-available-height)",
          "--reka-dropdown-menu-trigger-width": "var(--reka-popper-anchor-width)",
          "--reka-dropdown-menu-trigger-height": "var(--reka-popper-anchor-height)"
        },
        onCloseAutoFocus: s,
        onInteractOutside: l[0] || (l[0] = (f) => {
          var x;
          if (f.defaultPrevented) return;
          const p = f.detail.originalEvent, h = p.button === 0 && p.ctrlKey === !0, d = p.button === 2 || h;
          (!b(a).modal.value || d) && (i.value = !0), (x = b(a).triggerElement.value) != null && x.contains(f.target) && f.preventDefault();
        })
      }), {
        default: M(() => [
          j(c.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), QO = /* @__PURE__ */ X({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = kr(t);
    return ie(), (a, i) => (E(), V(b(zO), ve(Ae({ ...n, ...b(o) })), {
      default: M(() => [
        j(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uh = /* @__PURE__ */ X({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (E(), V(b(KO), ve(Ae(t)), {
      default: M(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ZO = /* @__PURE__ */ X({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return ie(), (n, r) => (E(), V(b(GO), ve(Ae(t)), {
      default: M(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ch = /* @__PURE__ */ X({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = ih(), { forwardRef: r, currentElement: o } = ie();
    return be(() => {
      n.triggerElement = o;
    }), n.triggerId || (n.triggerId = yn(void 0, "reka-dropdown-menu-trigger")), (a, i) => (E(), V(b(YO), { "as-child": "" }, {
      default: M(() => [
        Y(b(Ce), {
          id: b(n).triggerId,
          ref: b(r),
          type: a.as === "button" ? "button" : void 0,
          "as-child": t.asChild,
          as: a.as,
          "aria-haspopup": "menu",
          "aria-expanded": b(n).open.value,
          "aria-controls": b(n).open.value ? b(n).contentId : void 0,
          "data-disabled": a.disabled ? "" : void 0,
          disabled: a.disabled,
          "data-state": b(n).open.value ? "open" : "closed",
          onClick: i[0] || (i[0] = async (s) => {
            var c;
            !a.disabled && s.button === 0 && s.ctrlKey === !1 && ((c = b(n)) == null || c.onOpenToggle(), await _e(), b(n).open.value && s.preventDefault());
          }),
          onKeydown: i[1] || (i[1] = on(
            (s) => {
              a.disabled || (["Enter", " "].includes(s.key) && b(n).onOpenToggle(), s.key === "ArrowDown" && b(n).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: M(() => [
            j(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
});
function eE(e, t) {
  const n = _p(!1, 300), r = q(null), o = dS();
  function a() {
    r.value = null, n.value = !1;
  }
  function i(s, c) {
    const l = s.currentTarget, u = { x: s.clientX, y: s.clientY }, f = tE(u, l.getBoundingClientRect()), p = nE(u, f), h = rE(c.getBoundingClientRect()), d = aE([...p, ...h]);
    r.value = d, n.value = !0;
  }
  return at((s) => {
    if (e.value && t.value) {
      const c = (u) => i(u, t.value), l = (u) => i(u, e.value);
      e.value.addEventListener("pointerleave", c), t.value.addEventListener("pointerleave", l), s(() => {
        var u, f;
        (u = e.value) == null || u.removeEventListener("pointerleave", c), (f = t.value) == null || f.removeEventListener("pointerleave", l);
      });
    }
  }), at((s) => {
    var c;
    if (r.value) {
      const l = (u) => {
        var g, m;
        if (!r.value || !(u.target instanceof HTMLElement))
          return;
        const f = u.target, p = { x: u.clientX, y: u.clientY }, h = ((g = e.value) == null ? void 0 : g.contains(f)) || ((m = t.value) == null ? void 0 : m.contains(f)), d = !oE(p, r.value), x = !!f.closest("[data-grace-area-trigger]");
        h ? a() : (d || x) && (a(), o.trigger());
      };
      (c = e.value) == null || c.ownerDocument.addEventListener("pointermove", l), s(() => {
        var u;
        return (u = e.value) == null ? void 0 : u.ownerDocument.removeEventListener("pointermove", l);
      });
    }
  }), {
    isPointerInTransit: n,
    onPointerExit: o.on
  };
}
function tE(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, a)) {
    case a:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function nE(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      r.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return r;
}
function rE(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function oE(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a].x, c = t[a].y, l = t[i].x, u = t[i].y;
    c > r != u > r && n < (l - s) * (r - c) / (u - c) + s && (o = !o);
  }
  return o;
}
function aE(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), iE(t);
}
function iE(e) {
  if (e.length <= 1)
    return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], i = t[t.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x))
        t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const a = n[n.length - 1], i = n[n.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x))
        n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
const sE = /* @__PURE__ */ X({
  __name: "TooltipArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(e) {
    const t = e;
    return ie(), (n, r) => (E(), V(b($O), ve(Ae(t)), {
      default: M(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fh = "tooltip.open", [tl, lE] = it("TooltipProvider"), uE = /* @__PURE__ */ X({
  inheritAttrs: !1,
  __name: "TooltipProvider",
  props: {
    delayDuration: { default: 700 },
    skipDelayDuration: { default: 300 },
    disableHoverableContent: { type: Boolean, default: !1 },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, { delayDuration: n, skipDelayDuration: r, disableHoverableContent: o, disableClosingTrigger: a, ignoreNonKeyboardFocus: i, disabled: s } = jt(t);
    ie();
    const c = q(!0), l = q(!1), { start: u, stop: f } = Bp(() => {
      c.value = !0;
    }, r, { immediate: !1 });
    return lE({
      isOpenDelayed: c,
      delayDuration: n,
      onOpen() {
        f(), c.value = !1;
      },
      onClose() {
        u();
      },
      isPointerInTransitRef: l,
      disableHoverableContent: o,
      disableClosingTrigger: a,
      disabled: s,
      ignoreNonKeyboardFocus: i
    }), (p, h) => j(p.$slots, "default");
  }
}), [qo, cE] = it("TooltipRoot"), fE = /* @__PURE__ */ X({
  __name: "TooltipRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    delayDuration: { default: void 0 },
    disableHoverableContent: { type: Boolean, default: void 0 },
    disableClosingTrigger: { type: Boolean, default: void 0 },
    disabled: { type: Boolean, default: void 0 },
    ignoreNonKeyboardFocus: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, r = t;
    ie();
    const o = tl(), a = W(() => n.disableHoverableContent ?? o.disableHoverableContent.value), i = W(() => n.disableClosingTrigger ?? o.disableClosingTrigger.value), s = W(() => n.disabled ?? o.disabled.value), c = W(() => n.delayDuration ?? o.delayDuration.value), l = W(() => n.ignoreNonKeyboardFocus ?? o.ignoreNonKeyboardFocus.value), u = Wn(n, "open", r, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    de(u, (w) => {
      o.onClose && (w ? (o.onOpen(), document.dispatchEvent(new CustomEvent(fh))) : o.onClose());
    });
    const f = q(!1), p = q(), h = W(() => u.value ? f.value ? "delayed-open" : "instant-open" : "closed"), { start: d, stop: x } = Bp(() => {
      f.value = !0, u.value = !0;
    }, c, { immediate: !1 });
    function g() {
      x(), f.value = !1, u.value = !0;
    }
    function m() {
      x(), u.value = !1;
    }
    function v() {
      d();
    }
    return cE({
      contentId: "",
      open: u,
      stateAttribute: h,
      trigger: p,
      onTriggerChange(w) {
        p.value = w;
      },
      onTriggerEnter() {
        o.isOpenDelayed.value ? v() : g();
      },
      onTriggerLeave() {
        a.value ? m() : x();
      },
      onOpen: g,
      onClose: m,
      disableHoverableContent: a,
      disableClosingTrigger: i,
      disabled: s,
      ignoreNonKeyboardFocus: l
    }), (w, C) => (E(), V(b(eh), null, {
      default: M(() => [
        j(w.$slots, "default", { open: b(u) })
      ]),
      _: 3
    }));
  }
}), dh = /* @__PURE__ */ X({
  __name: "TooltipContentImpl",
  props: {
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: { default: "top" },
    sideOffset: { default: 0 },
    align: { default: "center" },
    alignOffset: {},
    avoidCollisions: { type: Boolean, default: !0 },
    collisionBoundary: { default: () => [] },
    collisionPadding: { default: 0 },
    arrowPadding: { default: 0 },
    sticky: { default: "partial" },
    hideWhenDetached: { type: Boolean, default: !1 },
    positionStrategy: {},
    updatePositionStrategy: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = qo(), { forwardRef: a } = ie(), i = $h(), s = W(() => {
      var u;
      return (u = i.default) == null ? void 0 : u.call(i, {});
    }), c = W(() => {
      var p;
      if (n.ariaLabel)
        return n.ariaLabel;
      let u = "";
      function f(h) {
        typeof h.children == "string" && h.type !== Xc ? u += h.children : Array.isArray(h.children) && h.children.forEach((d) => f(d));
      }
      return (p = s.value) == null || p.forEach((h) => f(h)), u;
    }), l = W(() => {
      const { ariaLabel: u, ...f } = n;
      return f;
    });
    return be(() => {
      mn(window, "scroll", (u) => {
        const f = u.target;
        f != null && f.contains(o.trigger.value) && o.onClose();
      }), mn(window, fh, o.onClose);
    }), (u, f) => (E(), V(b(Qs), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: f[0] || (f[0] = (p) => r("escapeKeyDown", p)),
      onPointerDownOutside: f[1] || (f[1] = (p) => {
        var h;
        b(o).disableClosingTrigger.value && ((h = b(o).trigger.value) != null && h.contains(p.target)) && p.preventDefault(), r("pointerDownOutside", p);
      }),
      onFocusOutside: f[2] || (f[2] = wt(() => {
      }, ["prevent"])),
      onDismiss: f[3] || (f[3] = (p) => b(o).onClose())
    }, {
      default: M(() => [
        Y(b(rh), ae({
          ref: b(a),
          "data-state": b(o).stateAttribute.value
        }, { ...u.$attrs, ...l.value }, { style: {
          "--reka-tooltip-content-transform-origin": "var(--reka-popper-transform-origin)",
          "--reka-tooltip-content-available-width": "var(--reka-popper-available-width)",
          "--reka-tooltip-content-available-height": "var(--reka-popper-available-height)",
          "--reka-tooltip-trigger-width": "var(--reka-popper-anchor-width)",
          "--reka-tooltip-trigger-height": "var(--reka-popper-anchor-height)"
        } }), {
          default: M(() => [
            j(u.$slots, "default"),
            Y(b(cS), {
              id: b(o).contentId,
              role: "tooltip"
            }, {
              default: M(() => [
                pe(Z(c.value), 1)
              ]),
              _: 1
            }, 8, ["id"])
          ]),
          _: 3
        }, 16, ["data-state"])
      ]),
      _: 3
    }));
  }
}), dE = /* @__PURE__ */ X({
  __name: "TooltipContentHoverable",
  props: {
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
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
    updatePositionStrategy: {}
  },
  setup(e) {
    const n = Jp(e), { forwardRef: r, currentElement: o } = ie(), { trigger: a, onClose: i } = qo(), s = tl(), { isPointerInTransit: c, onPointerExit: l } = eE(a, o);
    return s.isPointerInTransitRef = c, l(() => {
      i();
    }), (u, f) => (E(), V(dh, ae({ ref: b(r) }, b(n)), {
      default: M(() => [
        j(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pE = /* @__PURE__ */ X({
  __name: "TooltipContent",
  props: {
    forceMount: { type: Boolean },
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: { default: "top" },
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
    updatePositionStrategy: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = qo(), a = Tr(n, r), { forwardRef: i } = ie();
    return (s, c) => (E(), V(b(Pr), {
      present: s.forceMount || b(o).open.value
    }, {
      default: M(() => [
        (E(), V(zr(b(o).disableHoverableContent.value ? dh : dE), ae({ ref: b(i) }, b(a)), {
          default: M(() => [
            j(s.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), hE = /* @__PURE__ */ X({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (E(), V(b(Zs), ve(Ae(t)), {
      default: M(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mE = /* @__PURE__ */ X({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = qo(), r = tl();
    n.contentId || (n.contentId = yn(void 0, "reka-tooltip-content"));
    const { forwardRef: o, currentElement: a } = ie(), i = q(!1), s = q(!1), c = W(() => n.disabled.value ? {} : {
      click: x,
      focus: h,
      pointermove: f,
      pointerleave: p,
      pointerdown: u,
      blur: d
    });
    be(() => {
      n.onTriggerChange(a.value);
    });
    function l() {
      setTimeout(() => {
        i.value = !1;
      }, 1);
    }
    function u() {
      n.open && n.onClose(), i.value = !0, document.addEventListener("pointerup", l, { once: !0 });
    }
    function f(g) {
      g.pointerType !== "touch" && !s.value && !r.isPointerInTransitRef.value && (n.onTriggerEnter(), s.value = !0);
    }
    function p() {
      n.onTriggerLeave(), s.value = !1;
    }
    function h(g) {
      var m, v;
      i.value || n.ignoreNonKeyboardFocus.value && !((v = (m = g.target).matches) != null && v.call(m, ":focus-visible")) || n.onOpen();
    }
    function d() {
      n.onClose();
    }
    function x() {
      n.disableClosingTrigger.value || n.onClose();
    }
    return (g, m) => (E(), V(b(th), {
      "as-child": "",
      reference: g.reference
    }, {
      default: M(() => [
        Y(b(Ce), ae({
          ref: b(o),
          "aria-describedby": b(n).open.value ? b(n).contentId : void 0,
          "data-state": b(n).stateAttribute.value,
          as: g.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, Kc(c.value)), {
          default: M(() => [
            j(g.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }, 8, ["reference"]));
  }
}), yE = { key: 0 }, gE = { class: "text-primary mx-1 w-5 overflow-clip" }, vE = {
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
    return de(
      () => t.open,
      (r) => n.value = r
    ), be(() => {
      n.value = t.open;
    }), (r, o) => (E(), V(b(Ys), {
      defaultOpen: e.open,
      open: n.value,
      "onUpdate:open": o[0] || (o[0] = (a) => n.value = a),
      class: "mt-2 rounded-lg border-2 border-gray-200 dark:border-gray-700"
    }, {
      default: M(() => [
        Y(b(Js), {
          class: "focusable relative flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border-b-2 border-gray-200 bg-neutral-50 px-6 py-1 text-center",
          style: Ft({ backgroundColor: e.headerColor })
        }, {
          default: M(() => [
            e.header ? (E(), F("div", yE, Z(e.header), 1)) : j(r.$slots, "trigger", { key: 1 }),
            z("div", gE, [
              Y(un, {
                name: "collapse-icon",
                mode: "out-in"
              }, {
                default: M(() => [
                  n.value ? (E(), V(b(De), {
                    key: 0,
                    icon: b(tg)
                  }, null, 8, ["icon"])) : (E(), V(b(De), {
                    key: 1,
                    icon: b(xo)
                  }, null, 8, ["icon"]))
                ]),
                _: 1
              })
            ])
          ]),
          _: 3
        }, 8, ["style"]),
        Y(b(Xs), { class: "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden" }, {
          default: M(() => [
            z("div", {
              class: ee(["mt-2", { "px-4 pb-2": e.header }])
            }, [
              j(r.$slots, "default")
            ], 2)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["defaultOpen", "open"]));
  }
}, mo = {
  START: "start",
  CENTER: "center",
  END: "end"
}, hC = /* @__PURE__ */ X({
  __name: "Dropdown",
  props: {
    align: {
      type: String,
      default: mo.START,
      validator(e) {
        return Object.values(mo).includes(e);
      }
    },
    alignOffset: {
      type: Number,
      default: 5
    },
    openOnHover: {
      type: Boolean,
      default: !1
    },
    hoverDelay: {
      type: Number,
      default: 150
    }
  },
  setup(e) {
    const t = e, n = q(!1);
    let r = null;
    const o = async () => {
      t.openOnHover && (r && (clearTimeout(r), r = null), await _e(), n.value = !0);
    }, a = () => {
      t.openOnHover && (r = setTimeout(async () => {
        await _e(), n.value = !1, r = null;
      }, t.hoverDelay));
    }, i = (s) => {
      n.value = s;
    };
    return (s, c) => (E(), V(b(sh), {
      open: n.value,
      "onUpdate:open": [
        c[0] || (c[0] = (l) => n.value = l),
        i
      ],
      onMouseenter: o,
      onMouseleave: a
    }, {
      default: M(() => [
        Y(b(ch), { "aria-label": "Dropdown" }, {
          default: M(() => [
            j(s.$slots, "trigger")
          ]),
          _: 3
        }),
        Y(b(uh), null, {
          default: M(() => [
            Y(b(lh), ae({ alignOffset: e.alignOffset }, s.$attrs, {
              align: e.align,
              class: "ring-opacity-5 data-[side=top]:animate-slide-down-fade data-[side=right]:animate-slide-left-fade data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade z-50 mt-2 cursor-pointer rounded bg-white shadow ring-1 ring-gray-400 will-change-[opacity,transform]",
              onMouseenter: o,
              onMouseleave: a
            }), {
              default: M(() => [
                j(s.$slots, "content")
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
}), mC = {
  __name: "DropdownLink",
  props: {
    href: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (E(), V(b(QO), null, {
      default: M(() => [
        Y(b(dt), ae(t.$attrs, {
          href: e.href,
          class: "focusable flex w-full items-center gap-2 rounded px-8 py-6 text-left text-base leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-hidden"
        }), {
          default: M(() => [
            j(t.$slots, "default")
          ]),
          _: 3
        }, 16, ["href"])
      ]),
      _: 3
    }));
  }
}, yC = {
  __name: "DropdownSeparator",
  setup(e) {
    return (t, n) => (E(), V(b(ZO), { class: "mx-1 my-px h-px bg-gray-300" }));
  }
}, bE = ["href", "target"], gC = {
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
    return (r, o) => e.href && (e.method || e.data) ? (E(), V(b(dt), {
      key: 0,
      href: e.href,
      method: e.method,
      data: e.data,
      class: ee(["focusable inline-flex cursor-pointer items-center justify-center gap-1.5 rounded px-2 text-sm leading-normal font-medium select-none", n()]),
      as: "button",
      tabindex: "0"
    }, {
      default: M(() => [
        j(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "method", "data", "class"])) : (E(), F("a", {
      key: 1,
      href: e.href,
      target: e.target,
      class: ee(["focusable inline-flex cursor-pointer items-center justify-center gap-1.5 rounded px-2 text-sm leading-normal font-medium select-none", n()]),
      tabindex: "0"
    }, [
      j(r.$slots, "default")
    ], 10, bE));
  }
}, wE = {
  class: "focusable bg-primary hover:bg-primary-700 flex cursor-pointer items-center rounded px-2 text-sm whitespace-nowrap text-white motion-reduce:transition-none",
  type: "button"
}, xE = { class: "mx-1 w-2" }, SE = ["aria-labelledby"], vC = /* @__PURE__ */ X({
  __name: "LinkDropdownButton",
  props: {
    align: {
      type: String,
      default: mo.START,
      validator(e) {
        return Object.values(mo).includes(e);
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
    return (n, r) => (E(), V(b(sh), {
      open: t.value,
      "onUpdate:open": r[0] || (r[0] = (o) => t.value = o)
    }, {
      default: M(() => [
        Y(b(ch), {
          "aria-label": "Dropdown",
          asChild: ""
        }, {
          default: M(() => [
            z("button", wE, [
              pe(Z(e.title) + " ", 1),
              z("span", xE, [
                Y(b(De), { icon: b(xo) }, null, 8, ["icon"])
              ])
            ])
          ]),
          _: 1
        }),
        Y(b(uh), null, {
          default: M(() => [
            Y(b(lh), ae({ alignOffset: e.alignOffset }, n.$attrs, {
              align: e.align,
              class: "ring-opacity-5 data-[side=top]:animate-slide-down-fade data-[side=right]:animate-slide-left-fade data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade z-50 mt-2 rounded bg-white shadow ring-1 ring-gray-400 will-change-[opacity,transform]"
            }), {
              default: M(() => [
                z("ul", {
                  class: "absolute z-1000 float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-te-dropdown-show:block dark:bg-neutral-700",
                  "aria-labelledby": e.title,
                  "data-te-dropdown-menu-ref": ""
                }, [
                  j(n.$slots, "default")
                ], 8, SE)
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
}), OE = ["href"], bC = {
  __name: "LinkDropdownButtonItem",
  props: {
    href: String,
    title: String
  },
  setup(e) {
    return (t, n) => (E(), F("li", null, [
      z("a", {
        class: "focusable inline-flex w-full items-center justify-center whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600",
        href: e.href
      }, Z(e.title), 9, OE)
    ]));
  }
}, wC = {
  __name: "Logs",
  props: {
    header: { default: "Logs" },
    logs: Object
  },
  setup(e) {
    return (t, n) => (E(), V(b(vE), { header: e.header }, {
      default: M(() => [
        Y(b(NE), { logs: e.logs }, null, 8, ["logs"])
      ]),
      _: 1
    }, 8, ["header"]));
  }
}, EE = {
  key: 0,
  class: "flex w-full items-center justify-center"
}, AE = {
  key: 1,
  class: "mt-1",
  id: "logs"
}, CE = {
  key: 0,
  class: "text-center"
}, PE = {
  key: 1,
  class: "ml-3 border-l-2 border-primary"
}, kE = { class: "flex-start w-full md:flex" }, TE = { class: "-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-primary text-xs text-white" }, DE = { class: "mb-3 ml-2 block w-full rounded-lg bg-neutral-50 px-3 py-2 shadow-md shadow-black/5" }, $E = { class: "mb-1 flex justify-between" }, FE = { class: "text-sm text-neutral-500" }, IE = {
  key: 0,
  class: "text-bold mr-0.5 text-sm text-primary-500"
}, RE = {
  key: 1,
  class: "text-sm text-primary-500"
}, LE = { class: "text-sm text-neutral-500" }, _E = { class: "font-medium" }, BE = {
  key: 0,
  class: "line-through"
}, ME = ["innerHTML"], NE = {
  __name: "LogsContent",
  props: {
    logs: Object
  },
  setup(e) {
    return Nn.add(rg, Ri, sg, Jy, ig), (t, n) => e.logs == null ? (E(), F("div", EE, [
      Y(b(mh))
    ])) : (E(), F("div", AE, [
      e.logs.total ? (E(), F("ol", PE, [
        (E(!0), F(le, null, et(e.logs.data, (r) => (E(), F("li", {
          key: r.id
        }, [
          z("div", kE, [
            z("div", TE, [
              Y(b(De), {
                icon: r.icon
              }, null, 8, ["icon"])
            ]),
            z("div", DE, [
              z("div", $E, [
                z("span", FE, [
                  pe(Z(r.event_formatted) + " ", 1),
                  r.reference ? (E(), F("span", IE, Z(r.reference), 1)) : J("", !0),
                  r.causer ? (E(), F(le, { key: 1 }, [
                    r.causer.id ? (E(), V(b(dt), {
                      key: 0,
                      href: t.route("users.show", r.causer.id),
                      class: "text-sm text-primary-500"
                    }, {
                      default: M(() => [
                        pe(" (" + Z(r.causer.first_name) + ") ", 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])) : (E(), F("span", RE, "(" + Z(r.causer.first_name) + ")", 1))
                  ], 64)) : J("", !0)
                ]),
                z("span", LE, Z(r.created_date_full), 1)
              ]),
              (E(!0), F(le, null, et(r.changes_formatted, (o, a) => (E(), F("p", {
                key: a,
                class: "mb-0 text-neutral-700"
              }, [
                z("span", _E, Z(a) + ":", 1),
                o.old ? (E(), F("span", BE, Z(o.old), 1)) : J("", !0),
                pe(" " + Z(o.new), 1)
              ]))), 128)),
              r.description_details ? (E(), F("p", {
                key: 0,
                class: "text-neutral-700",
                innerHTML: r.description_details
              }, null, 8, ME)) : J("", !0)
            ])
          ])
        ]))), 128))
      ])) : (E(), F("p", CE, "No Data")),
      e.logs.links ? (E(), V(b(ph), {
        key: 2,
        class: "mt-6",
        links: e.logs.links,
        logs: !0
      }, null, 8, ["links"])) : J("", !0)
    ]));
  }
}, xC = /* @__PURE__ */ X({
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
    de(
      () => n.show,
      () => {
        n.show ? document.body.style.overflow = "hidden" : document.body.style.overflow = null;
      }
    );
    const a = () => {
      n.closeable && r("close");
    }, i = (w) => {
      w.key === "Escape" && n.show && a();
    };
    be(() => document.addEventListener("keydown", i)), Nt(() => {
      document.removeEventListener("keydown", i), document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", m), document.body.style.overflow = null;
    });
    const s = W(() => {
      let w = [];
      return w.push(
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
      ), n.hideOverflow && w.push("overflow-hidden"), w.join(" ");
    }), c = q(!1), l = q(null), u = q(0), f = q(0), p = q(0), h = q(0), d = q(null), x = q(null), g = (w, C) => {
      c.value = !0, document.addEventListener("mousemove", v), document.addEventListener("mouseup", m), l.value = C, u.value = w.clientX, f.value = w.clientY, p.value = o.value.offsetWidth, h.value = o.value.offsetHeight;
    }, m = (w) => {
      c.value = !1, document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", m);
    }, v = (w) => {
      if (!c.value) return;
      const C = (w.clientX - u.value) * 2, P = w.clientY - f.value;
      l.value.includes("x") && (d.value = p.value + C + "px"), l.value.includes("-x") && (d.value = p.value - C + "px"), l.value.includes("y") && (x.value = h.value + P + "px");
    };
    return (w, C) => (E(), V(ef, { to: "body" }, [
      Y(un, { "leave-active-class": "duration-200" }, {
        default: M(() => [
          ot(z("div", {
            class: ee(["modal fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0", { flex: e.alignCenter, "mb-16 items-center justify-center": e.alignCenter }]),
            "scroll-region": ""
          }, [
            Y(un, {
              "enter-active-class": `backdrop-transition enter ease-out duration-[${e.backdropDuration}ms]`,
              "enter-from-class": "opacity-0",
              "enter-to-class": "opacity-100",
              "leave-active-class": `backdrop-transition leave ease-in duration-[${e.backdropDuration}ms]`,
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: M(() => [
                ot(z("div", {
                  class: "fixed inset-0 transform transition-all",
                  onClick: a
                }, [
                  z("div", {
                    class: ee(["backdrop absolute inset-0 bg-gray-500 opacity-75", { [e.backdropCustomClass]: !!e.backdropCustomClass }])
                  }, null, 2)
                ], 512), [
                  [$n, e.show]
                ])
              ]),
              _: 1
            }, 8, ["enter-active-class", "leave-active-class"]),
            Y(un, {
              "enter-active-class": `modal-transition enter ease-out duration-[${e.modalDuration}ms]`,
              "enter-from-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              "enter-to-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-active-class": `modal-transition leave ease-in duration-[${e.modalDuration}ms]`,
              "leave-from-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-to-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            }, {
              default: M(() => [
                ot(z("div", {
                  ref_key: "modalContent",
                  ref: o,
                  class: ee(["mb-6 transform rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full", {
                    [s.value]: !!s.value,
                    "border-pink rounded-md border-2 border-solid": e.showBorder,
                    [e.modalCustomClass]: !!e.modalCustomClass
                  }]),
                  style: Ft({
                    userSelect: c.value ? "none" : "auto",
                    transition: c.value ? "none" : "",
                    width: d.value || "",
                    height: x.value || "",
                    maxWidth: d.value || "",
                    maxHeight: x.value || ""
                  })
                }, [
                  e.show ? j(w.$slots, "default", { key: 0 }) : J("", !0),
                  e.resizable ? (E(), F(le, { key: 1 }, [
                    z("div", {
                      class: "absolute bottom-0 left-0 h-1 w-full cursor-row-resize",
                      onMousedown: C[0] || (C[0] = (P) => g(P, "y")),
                      onMouseup: m
                    }, null, 32),
                    z("div", {
                      class: "absolute left-0 top-0 h-full w-1 cursor-col-resize",
                      onMousedown: C[1] || (C[1] = (P) => g(P, "-x")),
                      onMouseup: m
                    }, null, 32),
                    z("div", {
                      class: "absolute right-0 top-0 h-full w-1 cursor-col-resize",
                      onMousedown: C[2] || (C[2] = (P) => g(P, "x")),
                      onMouseup: m
                    }, null, 32),
                    z("div", {
                      class: "absolute bottom-0 right-0 h-1 w-1 cursor-se-resize",
                      onMousedown: C[3] || (C[3] = (P) => g(P, "xy")),
                      onMouseup: m
                    }, null, 32),
                    z("div", {
                      class: "absolute bottom-0 left-0 h-1 w-1 cursor-sw-resize",
                      onMousedown: C[4] || (C[4] = (P) => g(P, "-xy")),
                      onMouseup: m
                    }, null, 32)
                  ], 64)) : J("", !0)
                ], 6), [
                  [$n, e.show]
                ])
              ]),
              _: 3
            }, 8, ["enter-active-class", "leave-active-class"])
          ], 2), [
            [$n, e.show]
          ])
        ]),
        _: 3
      })
    ]));
  }
}), jE = {
  key: 2,
  class: "mb-3"
}, qE = {
  key: 3,
  class: "mt-5 flex justify-end gap-1.5"
}, SC = /* @__PURE__ */ X({
  __name: "NewModal",
  props: /* @__PURE__ */ hi({
    title: {
      type: String
    },
    description: {
      type: String
    },
    defaultOpen: {
      type: Boolean,
      default: !1
    }
  }, {
    modelValue: {
      type: Boolean,
      default: !1
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = Hc(e, "modelValue"), r = (o) => {
      n.value = o;
    };
    return be(() => {
      t.defaultOpen && (n.value = !0);
    }), Nt(() => {
      n.value = !1;
    }), de(
      () => t.defaultOpen,
      (o) => {
        n.value = o;
      }
    ), (o, a) => (E(), V(b(FS), {
      defaultOpen: e.defaultOpen,
      open: n.value,
      "onUpdate:open": [
        a[0] || (a[0] = (i) => n.value = i),
        r
      ]
    }, {
      default: M(() => [
        o.$slots.trigger ? (E(), V(b(mO), {
          key: 0,
          asChild: ""
        }, {
          default: M(() => [
            j(o.$slots, "trigger")
          ]),
          _: 3
        })) : J("", !0),
        Y(b(XO), null, {
          default: M(() => [
            Y(b(pO), { class: "bg-dark/50 data-[state=open]:animate-fade-in fixed inset-0 z-30" }),
            Y(b(iO), ae({ class: "data-[state=open]:animate-slide-up-fade fixed top-[50%] left-[50%] z-[100] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] overflow-y-auto rounded bg-white p-5 shadow-lg/20 focus:outline-none" }, o.$attrs), {
              default: M(() => [
                e.title || o.$slots.header ? (E(), V(b(hO), {
                  key: 0,
                  class: "m-0 text-lg font-semibold"
                }, {
                  default: M(() => [
                    j(o.$slots, "header", {}, () => [
                      pe(Z(e.title), 1)
                    ])
                  ]),
                  _: 3
                })) : J("", !0),
                e.description || o.$slots.description ? (E(), V(b(sO), {
                  key: 1,
                  class: "mt-2 text-sm leading-normal"
                }, {
                  default: M(() => [
                    j(o.$slots, "description", {}, () => [
                      pe(Z(e.description), 1)
                    ])
                  ]),
                  _: 3
                })) : J("", !0),
                e.title || o.$slots.header || e.description || o.$slots.description ? (E(), F("div", jE)) : J("", !0),
                j(o.$slots, "default"),
                o.$slots.footer ? (E(), F("div", qE, [
                  j(o.$slots, "footer")
                ])) : J("", !0),
                Y(b(IS), {
                  class: "focusable text-dark hover:bg-primary/50 focus:bg-primary/60 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] cursor-pointer appearance-none items-center justify-center rounded-full transition-all focus:shadow-[0_0_0_2px] focus:outline-none",
                  "aria-label": "Close"
                }, {
                  default: M(() => [
                    Y(b(De), { icon: b(ag) }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["defaultOpen", "open"]));
  }
}), UE = {
  key: 0,
  class: "size-4"
}, zE = { class: "ml-3 flex-1 whitespace-nowrap" }, OC = {
  __name: "NavLink",
  props: {
    href: String,
    active: Boolean
  },
  setup(e) {
    const t = e, n = W(
      () => t.active ? "cursor-pointer focusable flex items-center p-2 text-base font-normal bg-accent text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700" : "cursor-pointer focusable flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    );
    return (r, o) => (E(), V(b(dt), {
      href: e.href,
      class: ee(n.value)
    }, {
      default: M(() => [
        r.$slots.icon ? (E(), F("div", UE, [
          j(r.$slots, "icon")
        ])) : J("", !0),
        z("span", zE, [
          j(r.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}, VE = { class: "pagination flex justify-between" }, HE = ["value", "selected"], WE = {
  key: 0,
  "aria-label": "Page navigation"
}, KE = ["innerHTML"], GE = ["innerHTML", "onClick"], ph = {
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
    return (l, u) => (E(), F("div", VE, [
      z("div", null, [
        e.showPerPage ? (E(), V(b(wg), {
          key: 0,
          type: "select",
          modelValue: o.value,
          "onUpdate:modelValue": u[0] || (u[0] = (f) => o.value = f),
          class: "per-page-input w-20",
          onChanged: c
        }, {
          default: M(() => [
            (E(), F(le, null, et(a, (f) => z("option", {
              key: f,
              value: f,
              selected: f == o.value
            }, Z(f), 9, HE)), 64))
          ]),
          _: 1
        }, 8, ["modelValue"])) : J("", !0)
      ]),
      i.value.length > 3 ? (E(), F("nav", WE, [
        z("ul", {
          class: ee(["list-style-none flex", { [e.customListClass]: e.customListClass }])
        }, [
          (E(!0), F(le, null, et(i.value, (f, p) => (E(), F("li", { key: p }, [
            e.linkReturn ? (E(), F(le, { key: 0 }, [
              f.url === null ? (E(), F("button", {
                key: 0,
                class: ee(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [e.customLinkClass]: e.customLinkClass
                }]),
                innerHTML: f.label,
                onClick: u[1] || (u[1] = (h) => s(""))
              }, null, 10, KE)) : (E(), F("button", {
                key: 1,
                class: ee(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", {
                  "font-bold text-primary": f.active,
                  [e.customLinkClass]: e.customLinkClass,
                  [e.customActiveLinkClass]: f.active && e.customActiveLinkClass
                }]),
                innerHTML: f.label,
                onClick: (h) => s(f.url)
              }, null, 10, GE))
            ], 64)) : (E(), F(le, { key: 1 }, [
              f.url === null ? (E(), V(b(dt), {
                key: 0,
                class: ee(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [e.customLinkClass]: e.customLinkClass
                }]),
                innerHTML: f.label,
                href: ""
              }, null, 8, ["class", "innerHTML"])) : (E(), V(b(dt), {
                key: 1,
                class: ee(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", {
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
      ])) : J("", !0),
      u[2] || (u[2] = z("div", null, null, -1))
    ]));
  }
}, YE = ["type", "disabled"], hh = {
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
    return (t, n) => (E(), F("button", {
      type: e.type,
      disabled: e.disabled,
      class: ee({
        [e.customButtonClass]: !!e.customButtonClass,
        "focusable bg-primary hover:bg-primary-700 focus:bg-primary-700 focus:ring-primary-500 active:bg-primary-700 inline-flex cursor-pointer items-center rounded-md border border-transparent px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:cursor-not-allowed disabled:brightness-125 disabled:grayscale-[30%]": !e.customButtonClass
      })
    }, [
      j(t.$slots, "default")
    ], 10, YE));
  }
}, XE = ["type", "disabled"], EC = {
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
    return (t, n) => (E(), F("button", {
      type: e.type,
      disabled: e.disabled,
      class: "focusable inline-flex cursor-pointer items-center rounded border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out hover:bg-red-500 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-hidden active:bg-red-700 disabled:cursor-not-allowed disabled:brightness-125 disabled:grayscale-[30%]"
    }, [
      j(t.$slots, "default")
    ], 8, XE));
  }
}, AC = {
  __name: "ResponsiveNavLink",
  props: ["href", "active"],
  setup(e) {
    const t = e, n = W(
      () => t.active ? "cursor-pointer focusable block w-full pl-3 pr-4 py-2 border-l-4 border-accent-400 text-left text-base font-medium text-accent-700 bg-accent-50 focus:outline-hidden focus:text-accent-800 focus:bg-accent-100 focus:border-accent-700 transition duration-150 ease-in-out" : "cursor-pointer focusable block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-hidden focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (r, o) => (E(), V(b(dt), {
      href: e.href,
      class: ee(n.value)
    }, {
      default: M(() => [
        j(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}, JE = ["type"], QE = {
  __name: "SecondaryButton",
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(e) {
    return (t, n) => (E(), F("button", {
      type: e.type,
      class: "focusable focus:ring-accent-500 inline-flex cursor-pointer items-center rounded border border-gray-300 bg-white px-4 py-2 text-xs font-semibold tracking-widest text-gray-700 uppercase shadow transition duration-150 ease-in-out hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:opacity-25"
    }, [
      j(t.$slots, "default")
    ], 8, JE));
  }
}, ZE = {
  key: 0,
  class: "relative mb-2 rounded-lg border-b-2 border-gray-200 bg-neutral-50 px-6 py-1 text-center"
}, eA = {
  key: 0,
  class: "absolute right-0 top-0 mr-2 mt-1"
}, CC = {
  __name: "Section",
  props: {
    header: String,
    overflow: {
      default: !1,
      type: Boolean
    }
  },
  setup(e) {
    return (t, n) => (E(), F("div", {
      class: ee(["rounded-lg border-2 border-gray-200 bg-white dark:border-gray-700", { "px-4 py-2": !e.header, "overflow-hidden": e.overflow }])
    }, [
      z("div", {
        class: ee(["sm:rounded-lg", { "p-1": !e.header }])
      }, [
        e.header ? (E(), F("div", ZE, [
          z("span", null, Z(e.header), 1),
          t.$slots.headerButton ? (E(), F("div", eA, [
            j(t.$slots, "headerButton")
          ])) : J("", !0)
        ])) : J("", !0),
        z("div", {
          class: ee({ "px-4 pb-2": e.header })
        }, [
          j(t.$slots, "default")
        ], 2)
      ], 2)
    ], 2));
  }
}, tA = {}, nA = {
  class: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]",
  role: "status"
};
function rA(e, t) {
  return E(), F("div", nA, t[0] || (t[0] = [
    z("span", { class: "absolute! -m-px! h-px! w-px! overflow-hidden! whitespace-nowrap! border-0! p-0! [clip:rect(0,0,0,0)]!" }, "Loading...", -1)
  ]));
}
const mh = /* @__PURE__ */ So(tA, [["render", rA]]), oA = ["onClick"], aA = { class: "h:10 rounded-t-lg bg-white py-1 text-center md:h-10 md:py-2" }, PC = {
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
    return (i, s) => (E(), F("div", null, [
      z("div", {
        class: ee(["flex flex-wrap gap-2 lg:flex-nowrap", { [e.customContainerClass]: e.customContainerClass }])
      }, [
        (E(!0), F(le, null, et(e.stats, (c) => (E(), F("div", {
          class: ee(["flex w-full cursor-pointer flex-col rounded-lg border bg-gray-100 shadow", {
            "border-primary bg-primary-50 shadow-primary-50": a(c.name),
            [e.customStatClass]: e.customStatClass
          }]),
          onClick: (l) => o(c.name),
          key: c.value
        }, [
          z("div", null, [
            z("div", aA, [
              z("h5", {
                class: ee(["text-xl font-medium leading-tight text-neutral-800", { [e.customStatValueClass]: e.customStatValueClass }])
              }, Z(c.value), 3)
            ])
          ]),
          z("div", {
            class: ee(["flex flex-auto flex-col gap-y-4 p-1 text-center md:py-2", { [e.customStatLabelClass]: e.customStatLabelClass }])
          }, Z(c.label ?? c.name), 3)
        ], 10, oA))), 128))
      ], 2)
    ]));
  }
}, kC = {
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
    var m;
    const r = e, o = n, a = q([]), i = q(1), s = q(!0), c = q(0), l = q(""), u = q(((m = r.form) == null ? void 0 : m[r.field]) || r.modelValue), f = q(u.value), p = q(null), h = (v) => {
      f.value = u.value, u.value = v, o("update:modelValue", v), o("changed", v), v || (d(""), p.value = null);
    }, d = (v) => {
      v == "" && u.value && u.value !== f.value || (i.value = 1, c.value = 0, l.value = v, x());
    }, x = async (v = !1) => {
      const w = new URLSearchParams();
      w.append("term", l.value), w.append("page", i.value), r.queryParams && Object.keys(r.queryParams).forEach(($) => {
        w.append($, r.queryParams[$]);
      }), v && u.value && w.append("ajax_id", u.value);
      const P = await (await fetch(`${r.url}?${w.toString()}`)).json();
      if (s.value = P.current_page < P.last_page, i.value === 1) {
        if (a.value = P.data, u.value) {
          const $ = a.value.find((I) => I[r.optionValue] == u.value);
          p.value = $ ? $[r.optionText] : null;
        }
        return;
      }
      a.value = a.value.concat(P.data);
    };
    return be(() => {
      x(!0);
      const v = document.getElementById(r.id).parentNode.querySelector(".menu");
      v == null || v.addEventListener(
        "scroll",
        (w) => {
          w.target.scrollTop > c.value && w.target.scrollTop + w.target.clientHeight >= w.target.scrollHeight && s.value && (i.value++, x());
        },
        {
          passive: !0
        }
      );
    }), t({ getCurrentOption: () => a.value.find((v) => v[r.optionValue] == u.value) }), (v, w) => (E(), V(b(Ev), {
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
      "onUpdate:modelValue": w[0] || (w[0] = (C) => h(C)),
      onSearchchange: d,
      filterPredicate: (C, P) => !0
    }, null, 8, ["id", "label", "list", "optionValue", "optionText", "optionDisabled", "placeholder", "field", "form", "modelValue", "noLabel", "disabled", "noForm", "required"]));
  }
}, iA = ["id"], sA = {
  key: 0,
  class: "size-4"
}, lA = { class: "ml-3 flex-1 text-left whitespace-nowrap" }, uA = { class: "space-y-1 px-4 py-1" }, TC = {
  __name: "NavCollapse",
  props: {
    open: { type: Boolean, default: !1 },
    name: String
  },
  setup(e) {
    const t = e, n = q(t.open);
    return de(
      () => t.open,
      (r) => n.value = r
    ), (r, o) => (E(), F("li", null, [
      Y(b(Ys), {
        defaultOpen: e.open,
        open: n.value,
        "onUpdate:open": o[1] || (o[1] = (a) => n.value = a)
      }, {
        default: M(() => [
          Y(b(Js), { asChild: "" }, {
            default: M(() => [
              z("button", {
                id: e.name,
                onClick: o[0] || (o[0] = (...a) => r.onClick && r.onClick(...a)),
                class: "focusable group flex w-full cursor-pointer items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              }, [
                r.$slots.icon ? (E(), F("div", sA, [
                  j(r.$slots, "icon")
                ])) : J("", !0),
                z("span", lA, Z(e.name), 1),
                Y(b(De), {
                  icon: b(xo),
                  class: ee(["transition-all", { "rotate-180": n.value }])
                }, null, 8, ["icon", "class"])
              ], 8, iA)
            ]),
            _: 3
          }),
          Y(b(Xs), { class: "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden" }, {
            default: M(() => [
              z("ul", uA, [
                j(r.$slots, "default")
              ])
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["defaultOpen", "open"])
    ]));
  }
}, cA = { class: "border-t border-gray-100" }, fA = { class: "divide-y divide-gray-100" }, DC = {
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
    de(
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
    ds("registerItem", (l) => {
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
    }), (l, u) => (E(), F("div", cA, [
      z("dl", fA, [
        j(l.$slots, "default")
      ])
    ]));
  }
}, dA = { class: "description-list-item px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" }, pA = { class: "flex items-center text-sm font-medium" }, hA = {
  key: 0,
  class: "ml-1 text-red-500"
}, mA = { class: "mt-1 min-h-[42px] text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0" }, yA = { class: "flex min-h-full items-center" }, gA = { class: "slot-content grow" }, vA = { class: "ml-4 shrink-0" }, bA = { class: "slot-edit grow" }, wA = { class: "ml-4 shrink-0" }, $C = {
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
    Nn.add(Ri, Ul);
    const r = e, o = n, a = q(r.editable ? r.forceEditing : !1), i = () => {
      r.editable && (a.value = !a.value, o("editToggled", a.value));
    };
    de(
      () => r.forceEditing,
      (f) => {
        r.editable && (a.value = f);
      }
    );
    const s = () => {
      r.editable && (a.value = !0);
    }, c = () => {
      r.editable && (a.value = !1);
    }, l = fs("registerItem");
    return be(() => {
      l && l({ startEditing: s, stopEditing: c, toggleEditing: i });
    }), t({
      toggleEditing: i,
      startEditing: s,
      stopEditing: c,
      isEditing: () => a.value
    }), (f, p) => (E(), F("div", dA, [
      z("dt", pA, [
        pe(Z(e.label) + " ", 1),
        j(f.$slots, "label"),
        e.required ? (E(), F("span", hA, "*")) : J("", !0)
      ]),
      z("dd", mA, [
        z("div", yA, [
          a.value ? (E(), F(le, { key: 1 }, [
            z("div", bA, [
              j(f.$slots, "edit")
            ]),
            z("span", wA, [
              z("button", {
                type: "button",
                onClick: i,
                class: "text-xl font-bold text-primary hover:text-primary-400"
              }, [
                Y(b(De), { icon: b(Ul) }, null, 8, ["icon"])
              ])
            ])
          ], 64)) : (E(), F(le, { key: 0 }, [
            z("div", gA, [
              j(f.$slots, "default"),
              pe(" " + Z(e.value), 1)
            ]),
            z("span", vA, [
              e.editable ? (E(), F("button", {
                key: 0,
                type: "button",
                onClick: i,
                class: "text-lg font-bold text-primary hover:text-primary-400"
              }, [
                Y(b(De), { icon: b(Ri) }, null, 8, ["icon"])
              ])) : J("", !0),
              j(f.$slots, "buttons")
            ])
          ], 64))
        ])
      ])
    ]));
  }
};
var pi = { exports: {} };
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.8.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2023
 * @license MIT
 */
var zc;
function xA() {
  return zc || (zc = 1, function(e) {
    (function() {
      var t = "input is invalid type", n = "finalize already called", r = typeof window == "object", o = r ? window : {};
      o.JS_MD5_NO_WINDOW && (r = !1);
      var a = !r && typeof self == "object", i = !o.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
      i ? o = Mi : a && (o = self);
      var s = !o.JS_MD5_NO_COMMON_JS && !0 && e.exports, c = !o.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", l = "0123456789abcdef".split(""), u = [128, 32768, 8388608, -2147483648], f = [0, 8, 16, 24], p = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), d = [], x;
      if (c) {
        var g = new ArrayBuffer(68);
        x = new Uint8Array(g), d = new Uint32Array(g);
      }
      var m = Array.isArray;
      (o.JS_MD5_NO_NODE_JS || !m) && (m = function(y) {
        return Object.prototype.toString.call(y) === "[object Array]";
      });
      var v = ArrayBuffer.isView;
      c && (o.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !v) && (v = function(y) {
        return typeof y == "object" && y.buffer && y.buffer.constructor === ArrayBuffer;
      });
      var w = function(y) {
        var O = typeof y;
        if (O === "string")
          return [y, !0];
        if (O !== "object" || y === null)
          throw new Error(t);
        if (c && y.constructor === ArrayBuffer)
          return [new Uint8Array(y), !1];
        if (!m(y) && !v(y))
          throw new Error(t);
        return [y, !1];
      }, C = function(y) {
        return function(O) {
          return new T(!0).update(O)[y]();
        };
      }, P = function() {
        var y = C("hex");
        i && (y = $(y)), y.create = function() {
          return new T();
        }, y.update = function(S) {
          return y.create().update(S);
        };
        for (var O = 0; O < p.length; ++O) {
          var A = p[O];
          y[A] = C(A);
        }
        return y;
      }, $ = function(y) {
        var O = Ni, A = Ni.Buffer, S;
        A.from && !o.JS_MD5_NO_BUFFER_FROM ? S = A.from : S = function(N) {
          return new A(N);
        };
        var K = function(N) {
          if (typeof N == "string")
            return O.createHash("md5").update(N, "utf8").digest("hex");
          if (N == null)
            throw new Error(t);
          return N.constructor === ArrayBuffer && (N = new Uint8Array(N)), m(N) || v(N) || N.constructor === A ? O.createHash("md5").update(S(N)).digest("hex") : y(N);
        };
        return K;
      }, I = function(y) {
        return function(O, A) {
          return new k(O, !0).update(A)[y]();
        };
      }, U = function() {
        var y = I("hex");
        y.create = function(S) {
          return new k(S);
        }, y.update = function(S, K) {
          return y.create(S).update(K);
        };
        for (var O = 0; O < p.length; ++O) {
          var A = p[O];
          y[A] = I(A);
        }
        return y;
      };
      function T(y) {
        if (y)
          d[0] = d[16] = d[1] = d[2] = d[3] = d[4] = d[5] = d[6] = d[7] = d[8] = d[9] = d[10] = d[11] = d[12] = d[13] = d[14] = d[15] = 0, this.blocks = d, this.buffer8 = x;
        else if (c) {
          var O = new ArrayBuffer(68);
          this.buffer8 = new Uint8Array(O), this.blocks = new Uint32Array(O);
        } else
          this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
      }
      T.prototype.update = function(y) {
        if (this.finalized)
          throw new Error(n);
        var O = w(y);
        y = O[0];
        for (var A = O[1], S, K = 0, N, L = y.length, G = this.blocks, oe = this.buffer8; K < L; ) {
          if (this.hashed && (this.hashed = !1, G[0] = G[16], G[16] = G[1] = G[2] = G[3] = G[4] = G[5] = G[6] = G[7] = G[8] = G[9] = G[10] = G[11] = G[12] = G[13] = G[14] = G[15] = 0), A)
            if (c)
              for (N = this.start; K < L && N < 64; ++K)
                S = y.charCodeAt(K), S < 128 ? oe[N++] = S : S < 2048 ? (oe[N++] = 192 | S >>> 6, oe[N++] = 128 | S & 63) : S < 55296 || S >= 57344 ? (oe[N++] = 224 | S >>> 12, oe[N++] = 128 | S >>> 6 & 63, oe[N++] = 128 | S & 63) : (S = 65536 + ((S & 1023) << 10 | y.charCodeAt(++K) & 1023), oe[N++] = 240 | S >>> 18, oe[N++] = 128 | S >>> 12 & 63, oe[N++] = 128 | S >>> 6 & 63, oe[N++] = 128 | S & 63);
            else
              for (N = this.start; K < L && N < 64; ++K)
                S = y.charCodeAt(K), S < 128 ? G[N >>> 2] |= S << f[N++ & 3] : S < 2048 ? (G[N >>> 2] |= (192 | S >>> 6) << f[N++ & 3], G[N >>> 2] |= (128 | S & 63) << f[N++ & 3]) : S < 55296 || S >= 57344 ? (G[N >>> 2] |= (224 | S >>> 12) << f[N++ & 3], G[N >>> 2] |= (128 | S >>> 6 & 63) << f[N++ & 3], G[N >>> 2] |= (128 | S & 63) << f[N++ & 3]) : (S = 65536 + ((S & 1023) << 10 | y.charCodeAt(++K) & 1023), G[N >>> 2] |= (240 | S >>> 18) << f[N++ & 3], G[N >>> 2] |= (128 | S >>> 12 & 63) << f[N++ & 3], G[N >>> 2] |= (128 | S >>> 6 & 63) << f[N++ & 3], G[N >>> 2] |= (128 | S & 63) << f[N++ & 3]);
          else if (c)
            for (N = this.start; K < L && N < 64; ++K)
              oe[N++] = y[K];
          else
            for (N = this.start; K < L && N < 64; ++K)
              G[N >>> 2] |= y[K] << f[N++ & 3];
          this.lastByteIndex = N, this.bytes += N - this.start, N >= 64 ? (this.start = N - 64, this.hash(), this.hashed = !0) : this.start = N;
        }
        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
      }, T.prototype.finalize = function() {
        if (!this.finalized) {
          this.finalized = !0;
          var y = this.blocks, O = this.lastByteIndex;
          y[O >>> 2] |= u[O & 3], O >= 56 && (this.hashed || this.hash(), y[0] = y[16], y[16] = y[1] = y[2] = y[3] = y[4] = y[5] = y[6] = y[7] = y[8] = y[9] = y[10] = y[11] = y[12] = y[13] = y[14] = y[15] = 0), y[14] = this.bytes << 3, y[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
        }
      }, T.prototype.hash = function() {
        var y, O, A, S, K, N, L = this.blocks;
        this.first ? (y = L[0] - 680876937, y = (y << 7 | y >>> 25) - 271733879 << 0, S = (-1732584194 ^ y & 2004318071) + L[1] - 117830708, S = (S << 12 | S >>> 20) + y << 0, A = (-271733879 ^ S & (y ^ -271733879)) + L[2] - 1126478375, A = (A << 17 | A >>> 15) + S << 0, O = (y ^ A & (S ^ y)) + L[3] - 1316259209, O = (O << 22 | O >>> 10) + A << 0) : (y = this.h0, O = this.h1, A = this.h2, S = this.h3, y += (S ^ O & (A ^ S)) + L[0] - 680876936, y = (y << 7 | y >>> 25) + O << 0, S += (A ^ y & (O ^ A)) + L[1] - 389564586, S = (S << 12 | S >>> 20) + y << 0, A += (O ^ S & (y ^ O)) + L[2] + 606105819, A = (A << 17 | A >>> 15) + S << 0, O += (y ^ A & (S ^ y)) + L[3] - 1044525330, O = (O << 22 | O >>> 10) + A << 0), y += (S ^ O & (A ^ S)) + L[4] - 176418897, y = (y << 7 | y >>> 25) + O << 0, S += (A ^ y & (O ^ A)) + L[5] + 1200080426, S = (S << 12 | S >>> 20) + y << 0, A += (O ^ S & (y ^ O)) + L[6] - 1473231341, A = (A << 17 | A >>> 15) + S << 0, O += (y ^ A & (S ^ y)) + L[7] - 45705983, O = (O << 22 | O >>> 10) + A << 0, y += (S ^ O & (A ^ S)) + L[8] + 1770035416, y = (y << 7 | y >>> 25) + O << 0, S += (A ^ y & (O ^ A)) + L[9] - 1958414417, S = (S << 12 | S >>> 20) + y << 0, A += (O ^ S & (y ^ O)) + L[10] - 42063, A = (A << 17 | A >>> 15) + S << 0, O += (y ^ A & (S ^ y)) + L[11] - 1990404162, O = (O << 22 | O >>> 10) + A << 0, y += (S ^ O & (A ^ S)) + L[12] + 1804603682, y = (y << 7 | y >>> 25) + O << 0, S += (A ^ y & (O ^ A)) + L[13] - 40341101, S = (S << 12 | S >>> 20) + y << 0, A += (O ^ S & (y ^ O)) + L[14] - 1502002290, A = (A << 17 | A >>> 15) + S << 0, O += (y ^ A & (S ^ y)) + L[15] + 1236535329, O = (O << 22 | O >>> 10) + A << 0, y += (A ^ S & (O ^ A)) + L[1] - 165796510, y = (y << 5 | y >>> 27) + O << 0, S += (O ^ A & (y ^ O)) + L[6] - 1069501632, S = (S << 9 | S >>> 23) + y << 0, A += (y ^ O & (S ^ y)) + L[11] + 643717713, A = (A << 14 | A >>> 18) + S << 0, O += (S ^ y & (A ^ S)) + L[0] - 373897302, O = (O << 20 | O >>> 12) + A << 0, y += (A ^ S & (O ^ A)) + L[5] - 701558691, y = (y << 5 | y >>> 27) + O << 0, S += (O ^ A & (y ^ O)) + L[10] + 38016083, S = (S << 9 | S >>> 23) + y << 0, A += (y ^ O & (S ^ y)) + L[15] - 660478335, A = (A << 14 | A >>> 18) + S << 0, O += (S ^ y & (A ^ S)) + L[4] - 405537848, O = (O << 20 | O >>> 12) + A << 0, y += (A ^ S & (O ^ A)) + L[9] + 568446438, y = (y << 5 | y >>> 27) + O << 0, S += (O ^ A & (y ^ O)) + L[14] - 1019803690, S = (S << 9 | S >>> 23) + y << 0, A += (y ^ O & (S ^ y)) + L[3] - 187363961, A = (A << 14 | A >>> 18) + S << 0, O += (S ^ y & (A ^ S)) + L[8] + 1163531501, O = (O << 20 | O >>> 12) + A << 0, y += (A ^ S & (O ^ A)) + L[13] - 1444681467, y = (y << 5 | y >>> 27) + O << 0, S += (O ^ A & (y ^ O)) + L[2] - 51403784, S = (S << 9 | S >>> 23) + y << 0, A += (y ^ O & (S ^ y)) + L[7] + 1735328473, A = (A << 14 | A >>> 18) + S << 0, O += (S ^ y & (A ^ S)) + L[12] - 1926607734, O = (O << 20 | O >>> 12) + A << 0, K = O ^ A, y += (K ^ S) + L[5] - 378558, y = (y << 4 | y >>> 28) + O << 0, S += (K ^ y) + L[8] - 2022574463, S = (S << 11 | S >>> 21) + y << 0, N = S ^ y, A += (N ^ O) + L[11] + 1839030562, A = (A << 16 | A >>> 16) + S << 0, O += (N ^ A) + L[14] - 35309556, O = (O << 23 | O >>> 9) + A << 0, K = O ^ A, y += (K ^ S) + L[1] - 1530992060, y = (y << 4 | y >>> 28) + O << 0, S += (K ^ y) + L[4] + 1272893353, S = (S << 11 | S >>> 21) + y << 0, N = S ^ y, A += (N ^ O) + L[7] - 155497632, A = (A << 16 | A >>> 16) + S << 0, O += (N ^ A) + L[10] - 1094730640, O = (O << 23 | O >>> 9) + A << 0, K = O ^ A, y += (K ^ S) + L[13] + 681279174, y = (y << 4 | y >>> 28) + O << 0, S += (K ^ y) + L[0] - 358537222, S = (S << 11 | S >>> 21) + y << 0, N = S ^ y, A += (N ^ O) + L[3] - 722521979, A = (A << 16 | A >>> 16) + S << 0, O += (N ^ A) + L[6] + 76029189, O = (O << 23 | O >>> 9) + A << 0, K = O ^ A, y += (K ^ S) + L[9] - 640364487, y = (y << 4 | y >>> 28) + O << 0, S += (K ^ y) + L[12] - 421815835, S = (S << 11 | S >>> 21) + y << 0, N = S ^ y, A += (N ^ O) + L[15] + 530742520, A = (A << 16 | A >>> 16) + S << 0, O += (N ^ A) + L[2] - 995338651, O = (O << 23 | O >>> 9) + A << 0, y += (A ^ (O | ~S)) + L[0] - 198630844, y = (y << 6 | y >>> 26) + O << 0, S += (O ^ (y | ~A)) + L[7] + 1126891415, S = (S << 10 | S >>> 22) + y << 0, A += (y ^ (S | ~O)) + L[14] - 1416354905, A = (A << 15 | A >>> 17) + S << 0, O += (S ^ (A | ~y)) + L[5] - 57434055, O = (O << 21 | O >>> 11) + A << 0, y += (A ^ (O | ~S)) + L[12] + 1700485571, y = (y << 6 | y >>> 26) + O << 0, S += (O ^ (y | ~A)) + L[3] - 1894986606, S = (S << 10 | S >>> 22) + y << 0, A += (y ^ (S | ~O)) + L[10] - 1051523, A = (A << 15 | A >>> 17) + S << 0, O += (S ^ (A | ~y)) + L[1] - 2054922799, O = (O << 21 | O >>> 11) + A << 0, y += (A ^ (O | ~S)) + L[8] + 1873313359, y = (y << 6 | y >>> 26) + O << 0, S += (O ^ (y | ~A)) + L[15] - 30611744, S = (S << 10 | S >>> 22) + y << 0, A += (y ^ (S | ~O)) + L[6] - 1560198380, A = (A << 15 | A >>> 17) + S << 0, O += (S ^ (A | ~y)) + L[13] + 1309151649, O = (O << 21 | O >>> 11) + A << 0, y += (A ^ (O | ~S)) + L[4] - 145523070, y = (y << 6 | y >>> 26) + O << 0, S += (O ^ (y | ~A)) + L[11] - 1120210379, S = (S << 10 | S >>> 22) + y << 0, A += (y ^ (S | ~O)) + L[2] + 718787259, A = (A << 15 | A >>> 17) + S << 0, O += (S ^ (A | ~y)) + L[9] - 343485551, O = (O << 21 | O >>> 11) + A << 0, this.first ? (this.h0 = y + 1732584193 << 0, this.h1 = O - 271733879 << 0, this.h2 = A - 1732584194 << 0, this.h3 = S + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + y << 0, this.h1 = this.h1 + O << 0, this.h2 = this.h2 + A << 0, this.h3 = this.h3 + S << 0);
      }, T.prototype.hex = function() {
        this.finalize();
        var y = this.h0, O = this.h1, A = this.h2, S = this.h3;
        return l[y >>> 4 & 15] + l[y & 15] + l[y >>> 12 & 15] + l[y >>> 8 & 15] + l[y >>> 20 & 15] + l[y >>> 16 & 15] + l[y >>> 28 & 15] + l[y >>> 24 & 15] + l[O >>> 4 & 15] + l[O & 15] + l[O >>> 12 & 15] + l[O >>> 8 & 15] + l[O >>> 20 & 15] + l[O >>> 16 & 15] + l[O >>> 28 & 15] + l[O >>> 24 & 15] + l[A >>> 4 & 15] + l[A & 15] + l[A >>> 12 & 15] + l[A >>> 8 & 15] + l[A >>> 20 & 15] + l[A >>> 16 & 15] + l[A >>> 28 & 15] + l[A >>> 24 & 15] + l[S >>> 4 & 15] + l[S & 15] + l[S >>> 12 & 15] + l[S >>> 8 & 15] + l[S >>> 20 & 15] + l[S >>> 16 & 15] + l[S >>> 28 & 15] + l[S >>> 24 & 15];
      }, T.prototype.toString = T.prototype.hex, T.prototype.digest = function() {
        this.finalize();
        var y = this.h0, O = this.h1, A = this.h2, S = this.h3;
        return [
          y & 255,
          y >>> 8 & 255,
          y >>> 16 & 255,
          y >>> 24 & 255,
          O & 255,
          O >>> 8 & 255,
          O >>> 16 & 255,
          O >>> 24 & 255,
          A & 255,
          A >>> 8 & 255,
          A >>> 16 & 255,
          A >>> 24 & 255,
          S & 255,
          S >>> 8 & 255,
          S >>> 16 & 255,
          S >>> 24 & 255
        ];
      }, T.prototype.array = T.prototype.digest, T.prototype.arrayBuffer = function() {
        this.finalize();
        var y = new ArrayBuffer(16), O = new Uint32Array(y);
        return O[0] = this.h0, O[1] = this.h1, O[2] = this.h2, O[3] = this.h3, y;
      }, T.prototype.buffer = T.prototype.arrayBuffer, T.prototype.base64 = function() {
        for (var y, O, A, S = "", K = this.array(), N = 0; N < 15; )
          y = K[N++], O = K[N++], A = K[N++], S += h[y >>> 2] + h[(y << 4 | O >>> 4) & 63] + h[(O << 2 | A >>> 6) & 63] + h[A & 63];
        return y = K[N], S += h[y >>> 2] + h[y << 4 & 63] + "==", S;
      };
      function k(y, O) {
        var A, S = w(y);
        if (y = S[0], S[1]) {
          var K = [], N = y.length, L = 0, G;
          for (A = 0; A < N; ++A)
            G = y.charCodeAt(A), G < 128 ? K[L++] = G : G < 2048 ? (K[L++] = 192 | G >>> 6, K[L++] = 128 | G & 63) : G < 55296 || G >= 57344 ? (K[L++] = 224 | G >>> 12, K[L++] = 128 | G >>> 6 & 63, K[L++] = 128 | G & 63) : (G = 65536 + ((G & 1023) << 10 | y.charCodeAt(++A) & 1023), K[L++] = 240 | G >>> 18, K[L++] = 128 | G >>> 12 & 63, K[L++] = 128 | G >>> 6 & 63, K[L++] = 128 | G & 63);
          y = K;
        }
        y.length > 64 && (y = new T(!0).update(y).array());
        var oe = [], Te = [];
        for (A = 0; A < 64; ++A) {
          var Ge = y[A] || 0;
          oe[A] = 92 ^ Ge, Te[A] = 54 ^ Ge;
        }
        T.call(this, O), this.update(Te), this.oKeyPad = oe, this.inner = !0, this.sharedMemory = O;
      }
      k.prototype = new T(), k.prototype.finalize = function() {
        if (T.prototype.finalize.call(this), this.inner) {
          this.inner = !1;
          var y = this.array();
          T.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(y), T.prototype.finalize.call(this);
        }
      };
      var B = P();
      B.md5 = B, B.md5.hmac = U(), s ? e.exports = B : o.md5 = B;
    })();
  }(pi)), pi.exports;
}
var SA = xA();
const OA = ["src", "alt"], FC = {
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
    const t = e, n = W(() => SA.md5(t.email.trim().toLowerCase())), r = W(() => `https://www.gravatar.com/avatar/${n.value}?s=${t.size}`), o = W(() => `Gravatar for ${t.email}`);
    return (a, i) => (E(), F("img", {
      src: r.value,
      alt: o.value
    }, null, 8, OA));
  }
}, IC = {
  __name: "TdCollapseHandler",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(e) {
    return (t, n) => (E(), V(Ls, {
      "data-te-collapse-init": "",
      "data-te-target": "#" + e.collapse_id,
      "aria-expanded": "false",
      "aria-controls": e.collapse_id,
      class: "cursor-pointer"
    }, {
      default: M(() => [
        j(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-te-target", "aria-controls"]));
  }
}, EA = { class: "mt-2" }, RC = {
  __name: "Collapse",
  props: {
    open: {
      type: Boolean,
      default: !1
    },
    button: {
      type: Array,
      default: () => ["Show more", "Show less"]
    }
  },
  setup(e) {
    const t = e, n = q(t.open);
    return de(
      () => t.open,
      (r) => n.value = r
    ), be(() => {
      n.value = t.open;
    }), (r, o) => (E(), V(b(Ys), {
      defaultOpen: e.open,
      open: n.value,
      "onUpdate:open": o[0] || (o[0] = (a) => n.value = a)
    }, {
      default: M(() => [
        Y(b(Js), { asChild: "" }, {
          default: M(() => [
            j(r.$slots, "trigger", {}, () => [
              Y(QE, ve(Ae(r.$attrs)), {
                default: M(() => [
                  z("span", null, Z(n.value ? e.button[1] : e.button[0]), 1),
                  Y(b(De), {
                    icon: b(xo),
                    class: ee(["transition-all", { "rotate-180": n.value }])
                  }, null, 8, ["icon", "class"])
                ]),
                _: 1
              }, 16)
            ])
          ]),
          _: 3
        }),
        Y(b(Xs), { class: "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden" }, {
          default: M(() => [
            z("div", EA, [
              j(r.$slots, "default")
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["defaultOpen", "open"]));
  }
}, AA = "fill-primary-100 stroke-primary-200", CA = /* @__PURE__ */ X({
  __name: "Tooltip",
  props: {
    content: {},
    side: { default: "top" },
    delayDuration: { default: 100 },
    disabled: { type: Boolean, default: !1 },
    contentClass: { default: "" },
    arrowClass: { default: "" },
    sideOffset: { default: 4 },
    collisionPadding: { default: 8 }
  },
  setup(e) {
    const t = e, n = W(() => ["top", "bottom", "left", "right"].includes(t.side) ? t.side : "top"), r = [
      "z-50",
      "overflow-hidden",
      "rounded-md",
      "bg-primary-100",
      "border",
      "border-primary-200",
      "px-3",
      "py-2",
      "text-sm",
      "text-neutral-800",
      "shadow-md",
      "animate-in",
      "fade-in-0",
      "zoom-in-95",
      "data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0",
      "data-[state=closed]:zoom-out-95",
      "data-[side=bottom]:slide-in-from-top-2",
      "data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2",
      "data-[side=top]:slide-in-from-bottom-2"
    ].join(" ");
    return (o, a) => (E(), V(b(uE), { "delay-duration": o.delayDuration }, {
      default: M(() => [
        Y(b(fE), { disabled: o.disabled }, {
          default: M(() => [
            Y(b(mE), { "as-child": "" }, {
              default: M(() => [
                j(o.$slots, "default")
              ]),
              _: 3
            }),
            Y(b(hE), null, {
              default: M(() => [
                Y(b(pE), {
                  side: n.value,
                  sideOffset: o.sideOffset,
                  collisionPadding: o.collisionPadding,
                  class: ee([b(r), o.contentClass])
                }, {
                  default: M(() => [
                    pe(Z(o.content) + " ", 1),
                    Y(b(sE), {
                      class: ee([AA, o.arrowClass])
                    }, null, 8, ["class"])
                  ]),
                  _: 1
                }, 8, ["side", "sideOffset", "collisionPadding", "class"])
              ]),
              _: 1
            })
          ]),
          _: 3
        }, 8, ["disabled"])
      ]),
      _: 3
    }, 8, ["delay-duration"]));
  }
}), LC = {
  install(e) {
    for (const t in components)
      e.component(t, components[t]);
  }
};
export {
  fC as Alert,
  kA as Checkbox,
  vE as CollapsableSection,
  RC as Collapse,
  vE as CollapsibleSection,
  EC as DangerButton,
  DC as DescriptionList,
  $C as DescriptionListItem,
  hC as Dropdown,
  mC as DropdownLink,
  DA as DropdownSearchbar,
  yC as DropdownSeparator,
  tC as FileDropZoneInput,
  FC as GravatarImg,
  nC as Images,
  wg as Input,
  br as InputError,
  As as InputLabel,
  gC as LinkButton,
  vC as LinkDropdownButton,
  bC as LinkDropdownButtonItem,
  wC as Logs,
  NE as LogsContent,
  xC as Modal,
  TC as NavCollapse,
  OC as NavLink,
  SC as NewModal,
  ph as Pagination,
  hh as PrimaryButton,
  rC as RadioButton,
  AC as ResponsiveNavLink,
  Ev as SearchSelect,
  QE as SecondaryButton,
  CC as Section,
  kC as Select2ajax,
  mh as Spinner,
  PC as Stats,
  wc as SubmitButton,
  oC as Table,
  cC as TableItemCard,
  iC as Tbody,
  Ls as Td,
  IC as TdCollapseHandler,
  Pg as TextInput,
  TA as Textarea,
  sC as Th,
  aC as Thead,
  CA as Tooltip,
  uC as TrCollapse,
  lC as TrCollapseHandler,
  f2 as TrPlaceholder,
  LC as default,
  Y1 as getInertiaPage,
  Sr as getInertiaRouter,
  QA as hasPermission,
  G1 as moneyFormat,
  JA as numberFormat,
  eC as setInertiaPage,
  ZA as setInertiaRouter
};
