import { computed as se, withDirectives as Be, openBlock as A, createElementBlock as k, normalizeClass as X, vModelCheckbox as Ic, defineComponent as jt, watch as Ft, h as Lt, mergeModels as zs, ref as Z, useModel as Bf, onMounted as We, createBlock as oe, unref as q, createCommentVNode as G, createElementVNode as D, renderSlot as J, toDisplayString as Q, createVNode as ge, Transition as rn, withCtx as he, vModelSelect as jf, Fragment as ue, createTextVNode as pe, vShow as Nt, vModelText as zf, resolveDirective as Uf, normalizeProps as Ve, guardReactiveProps as Xe, renderList as He, resolveDynamicComponent as Ho, mergeProps as Ar, toHandlers as Vf, withModifiers as It, withKeys as En, normalizeStyle as $n, shallowRef as qf, markRaw as Us, reactive as us, onUnmounted as Pr, toRefs as Hf, nextTick as Wf, Teleport as Kf, provide as Gf, inject as Yf } from "vue";
const Jf = ["value"], Jw = {
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
    const n = t, r = e, a = se({
      get() {
        return r.checked;
      },
      set(o) {
        n("update:checked", o);
      }
    });
    return (o, i) => Be((A(), k("input", {
      type: "checkbox",
      value: e.value,
      "onUpdate:modelValue": i[0] || (i[0] = (l) => a.value = l),
      class: X(["rounded border-gray-300 text-accent-600 shadow focus:ring-accent-500", { [e.customClass]: e.customClass }])
    }, null, 10, Jf)), [
      [Ic, a.value]
    ]);
  }
};
/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function Xf(e, t, n) {
  return (t = Zf(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Vs(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vs(Object(n), !0).forEach(function(r) {
      Xf(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Vs(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Qf(e, t) {
  if (typeof e != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Zf(e) {
  var t = Qf(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const qs = () => {
};
let fs = {}, Dc = {}, Fc = null, Lc = {
  mark: qs,
  measure: qs
};
try {
  typeof window < "u" && (fs = window), typeof document < "u" && (Dc = document), typeof MutationObserver < "u" && (Fc = MutationObserver), typeof performance < "u" && (Lc = performance);
} catch {
}
const {
  userAgent: Hs = ""
} = fs.navigator || {}, Rt = fs, de = Dc, Ws = Fc, sa = Lc;
Rt.document;
const Ot = !!de.documentElement && !!de.head && typeof de.addEventListener == "function" && typeof de.createElement == "function", Nc = ~Hs.indexOf("MSIE") || ~Hs.indexOf("Trident/");
var ed = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, td = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Rc = {
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
}, nd = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Mc = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], ke = "classic", ja = "duotone", rd = "sharp", ad = "sharp-duotone", Bc = [ke, ja, rd, ad], od = {
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
}, id = {
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
}, sd = /* @__PURE__ */ new Map([["classic", {
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
}]]), ld = {
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
}, cd = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Ks = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, ud = ["kit"], fd = {
  kit: {
    "fa-kit": "fak"
  },
  "kit-duotone": {
    "fa-kit-duotone": "fakd"
  }
}, dd = ["fak", "fakd"], pd = {
  kit: {
    fak: "fa-kit"
  },
  "kit-duotone": {
    fakd: "fa-kit-duotone"
  }
}, Gs = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, la = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, hd = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], md = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], gd = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, yd = {
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
}, bd = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, Ei = {
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
}, vd = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], Ai = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...hd, ...vd], wd = ["solid", "regular", "light", "thin", "duotone", "brands"], jc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], xd = jc.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Sd = [...Object.keys(bd), ...wd, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", la.GROUP, la.SWAP_OPACITY, la.PRIMARY, la.SECONDARY].concat(jc.map((e) => "".concat(e, "x"))).concat(xd.map((e) => "w-".concat(e))), Ed = {
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
const Et = "___FONT_AWESOME___", Oi = 16, zc = "fa", Uc = "svg-inline--fa", sn = "data-fa-i2svg", Ci = "data-fa-pseudo-element", Ad = "data-fa-pseudo-element-pending", ds = "data-prefix", ps = "data-icon", Ys = "fontawesome-i2svg", Od = "async", Cd = ["HTML", "HEAD", "STYLE", "SCRIPT"], Vc = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function $r(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[ke];
    }
  });
}
const qc = R({}, Rc);
qc[ke] = R(R(R(R({}, {
  "fa-duotone": "duotone"
}), Rc[ke]), Ks.kit), Ks["kit-duotone"]);
const _d = $r(qc), _i = R({}, ld);
_i[ke] = R(R(R(R({}, {
  duotone: "fad"
}), _i[ke]), Gs.kit), Gs["kit-duotone"]);
const Js = $r(_i), Ti = R({}, Ei);
Ti[ke] = R(R({}, Ti[ke]), pd.kit);
const hs = $r(Ti), ki = R({}, yd);
ki[ke] = R(R({}, ki[ke]), fd.kit);
$r(ki);
const Td = ed, Hc = "fa-layers-text", kd = td, Pd = R({}, od);
$r(Pd);
const $d = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Wo = nd, Id = [...ud, ...Sd], br = Rt.FontAwesomeConfig || {};
function Dd(e) {
  var t = de.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function Fd(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
de && typeof de.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const a = Fd(Dd(n));
  a != null && (br[r] = a);
});
const Wc = {
  styleDefault: "solid",
  familyDefault: ke,
  cssPrefix: zc,
  replacementClass: Uc,
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
br.familyPrefix && (br.cssPrefix = br.familyPrefix);
const Ln = R(R({}, Wc), br);
Ln.autoReplaceSvg || (Ln.observeMutations = !1);
const W = {};
Object.keys(Wc).forEach((e) => {
  Object.defineProperty(W, e, {
    enumerable: !0,
    set: function(t) {
      Ln[e] = t, vr.forEach((n) => n(W));
    },
    get: function() {
      return Ln[e];
    }
  });
});
Object.defineProperty(W, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Ln.cssPrefix = e, vr.forEach((t) => t(W));
  },
  get: function() {
    return Ln.cssPrefix;
  }
});
Rt.FontAwesomeConfig = W;
const vr = [];
function Ld(e) {
  return vr.push(e), () => {
    vr.splice(vr.indexOf(e), 1);
  };
}
const Pt = Oi, dt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Nd(e) {
  if (!e || !Ot)
    return;
  const t = de.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = de.head.childNodes;
  let r = null;
  for (let a = n.length - 1; a > -1; a--) {
    const o = n[a], i = (o.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(i) > -1 && (r = o);
  }
  return de.head.insertBefore(t, r), e;
}
const Rd = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Or() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += Rd[Math.random() * 62 | 0];
  return t;
}
function jn(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function ms(e) {
  return e.classList ? jn(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function Kc(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Md(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(Kc(e[n]), '" '), "").trim();
}
function za(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function gs(e) {
  return e.size !== dt.size || e.x !== dt.x || e.y !== dt.y || e.rotate !== dt.rotate || e.flipX || e.flipY;
}
function Bd(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const a = {
    transform: "translate(".concat(n / 2, " 256)")
  }, o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), i = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), l = "rotate(".concat(t.rotate, " 0 0)"), u = {
    transform: "".concat(o, " ").concat(i, " ").concat(l)
  }, c = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: u,
    path: c
  };
}
function jd(e) {
  let {
    transform: t,
    width: n = Oi,
    height: r = Oi,
    startCentered: a = !1
  } = e, o = "";
  return a && Nc ? o += "translate(".concat(t.x / Pt - n / 2, "em, ").concat(t.y / Pt - r / 2, "em) ") : a ? o += "translate(calc(-50% + ".concat(t.x / Pt, "em), calc(-50% + ").concat(t.y / Pt, "em)) ") : o += "translate(".concat(t.x / Pt, "em, ").concat(t.y / Pt, "em) "), o += "scale(".concat(t.size / Pt * (t.flipX ? -1 : 1), ", ").concat(t.size / Pt * (t.flipY ? -1 : 1), ") "), o += "rotate(".concat(t.rotate, "deg) "), o;
}
var zd = `:root, :host {
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
function Gc() {
  const e = zc, t = Uc, n = W.cssPrefix, r = W.replacementClass;
  let a = zd;
  if (n !== e || r !== t) {
    const o = new RegExp("\\.".concat(e, "\\-"), "g"), i = new RegExp("\\--".concat(e, "\\-"), "g"), l = new RegExp("\\.".concat(t), "g");
    a = a.replace(o, ".".concat(n, "-")).replace(i, "--".concat(n, "-")).replace(l, ".".concat(r));
  }
  return a;
}
let Xs = !1;
function Ko() {
  W.autoAddCss && !Xs && (Nd(Gc()), Xs = !0);
}
var Ud = {
  mixout() {
    return {
      dom: {
        css: Gc,
        insertCss: Ko
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Ko();
      },
      beforeI2svg() {
        Ko();
      }
    };
  }
};
const At = Rt || {};
At[Et] || (At[Et] = {});
At[Et].styles || (At[Et].styles = {});
At[Et].hooks || (At[Et].hooks = {});
At[Et].shims || (At[Et].shims = []);
var pt = At[Et];
const Yc = [], Jc = function() {
  de.removeEventListener("DOMContentLoaded", Jc), Aa = 1, Yc.map((e) => e());
};
let Aa = !1;
Ot && (Aa = (de.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(de.readyState), Aa || de.addEventListener("DOMContentLoaded", Jc));
function Vd(e) {
  Ot && (Aa ? setTimeout(e, 0) : Yc.push(e));
}
function Ir(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? Kc(e) : "<".concat(t, " ").concat(Md(n), ">").concat(r.map(Ir).join(""), "</").concat(t, ">");
}
function Qs(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var qd = function(t, n) {
  return function(r, a, o, i) {
    return t.call(n, r, a, o, i);
  };
}, Go = function(t, n, r, a) {
  var o = Object.keys(t), i = o.length, l = a !== void 0 ? qd(n, a) : n, u, c, f;
  for (r === void 0 ? (u = 1, f = t[o[0]]) : (u = 0, f = r); u < i; u++)
    c = o[u], f = l(f, t[c], c, t);
  return f;
};
function Hd(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r; ) {
    const a = e.charCodeAt(n++);
    if (a >= 55296 && a <= 56319 && n < r) {
      const o = e.charCodeAt(n++);
      (o & 64512) == 56320 ? t.push(((a & 1023) << 10) + (o & 1023) + 65536) : (t.push(a), n--);
    } else
      t.push(a);
  }
  return t;
}
function Pi(e) {
  const t = Hd(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Wd(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), a;
  return r >= 55296 && r <= 56319 && n > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function Zs(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function $i(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, a = Zs(t);
  typeof pt.hooks.addPack == "function" && !r ? pt.hooks.addPack(e, Zs(t)) : pt.styles[e] = R(R({}, pt.styles[e] || {}), a), e === "fas" && $i("fa", t);
}
const {
  styles: Cr,
  shims: Kd
} = pt, Xc = Object.keys(hs), Gd = Xc.reduce((e, t) => (e[t] = Object.keys(hs[t]), e), {});
let ys = null, Qc = {}, Zc = {}, eu = {}, tu = {}, nu = {};
function Yd(e) {
  return ~Id.indexOf(e);
}
function Jd(e, t) {
  const n = t.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === e && a !== "" && !Yd(a) ? a : null;
}
const ru = () => {
  const e = (r) => Go(Cr, (a, o, i) => (a[i] = Go(o, r, {}), a), {});
  Qc = e((r, a, o) => (a[3] && (r[a[3]] = o), a[2] && a[2].filter((l) => typeof l == "number").forEach((l) => {
    r[l.toString(16)] = o;
  }), r)), Zc = e((r, a, o) => (r[o] = o, a[2] && a[2].filter((l) => typeof l == "string").forEach((l) => {
    r[l] = o;
  }), r)), nu = e((r, a, o) => {
    const i = a[2];
    return r[o] = o, i.forEach((l) => {
      r[l] = o;
    }), r;
  });
  const t = "far" in Cr || W.autoFetchSvg, n = Go(Kd, (r, a) => {
    const o = a[0];
    let i = a[1];
    const l = a[2];
    return i === "far" && !t && (i = "fas"), typeof o == "string" && (r.names[o] = {
      prefix: i,
      iconName: l
    }), typeof o == "number" && (r.unicodes[o.toString(16)] = {
      prefix: i,
      iconName: l
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  eu = n.names, tu = n.unicodes, ys = Ua(W.styleDefault, {
    family: W.familyDefault
  });
};
Ld((e) => {
  ys = Ua(e.styleDefault, {
    family: W.familyDefault
  });
});
ru();
function bs(e, t) {
  return (Qc[e] || {})[t];
}
function Xd(e, t) {
  return (Zc[e] || {})[t];
}
function en(e, t) {
  return (nu[e] || {})[t];
}
function au(e) {
  return eu[e] || {
    prefix: null,
    iconName: null
  };
}
function Qd(e) {
  const t = tu[e], n = bs("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Mt() {
  return ys;
}
const ou = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Zd(e) {
  let t = ke;
  const n = Xc.reduce((r, a) => (r[a] = "".concat(W.cssPrefix, "-").concat(a), r), {});
  return Bc.forEach((r) => {
    (e.includes(n[r]) || e.some((a) => Gd[r].includes(a))) && (t = r);
  }), t;
}
function Ua(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = ke
  } = t, r = _d[n][e];
  if (n === ja && !e)
    return "fad";
  const a = Js[n][e] || Js[n][r], o = e in pt.styles ? e : null;
  return a || o || null;
}
function ep(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const a = Jd(W.cssPrefix, r);
    a ? n = a : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function el(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function Va(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const a = Ai.concat(md), o = el(e.filter((h) => a.includes(h))), i = el(e.filter((h) => !Ai.includes(h))), l = o.filter((h) => (r = h, !Mc.includes(h))), [u = null] = l, c = Zd(o), f = R(R({}, ep(i)), {}, {
    prefix: Ua(u, {
      family: c
    })
  });
  return R(R(R({}, f), ap({
    values: e,
    family: c,
    styles: Cr,
    config: W,
    canonical: f,
    givenPrefix: r
  })), tp(n, r, f));
}
function tp(e, t, n) {
  let {
    prefix: r,
    iconName: a
  } = n;
  if (e || !r || !a)
    return {
      prefix: r,
      iconName: a
    };
  const o = t === "fa" ? au(a) : {}, i = en(r, a);
  return a = o.iconName || i || a, r = o.prefix || r, r === "far" && !Cr.far && Cr.fas && !W.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: a
  };
}
const np = Bc.filter((e) => e !== ke || e !== ja), rp = Object.keys(Ei).filter((e) => e !== ke).map((e) => Object.keys(Ei[e])).flat();
function ap(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: a = "",
    styles: o = {},
    config: i = {}
  } = e, l = n === ja, u = t.includes("fa-duotone") || t.includes("fad"), c = i.familyDefault === "duotone", f = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!l && (u || c || f) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && np.includes(n) && (Object.keys(o).find((g) => rp.includes(g)) || i.autoFetchSvg)) {
    const g = sd.get(n).defaultShortPrefixId;
    r.prefix = g, r.iconName = en(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || a === "fa") && (r.prefix = Mt() || "fas"), r;
}
class op {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const a = n.reduce(this._pullDefinitions, {});
    Object.keys(a).forEach((o) => {
      this.definitions[o] = R(R({}, this.definitions[o] || {}), a[o]), $i(o, a[o]);
      const i = hs[ke][o];
      i && $i(i, a[o]), ru();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, n) {
    const r = n.prefix && n.iconName && n.icon ? {
      0: n
    } : n;
    return Object.keys(r).map((a) => {
      const {
        prefix: o,
        iconName: i,
        icon: l
      } = r[a], u = l[2];
      t[o] || (t[o] = {}), u.length > 0 && u.forEach((c) => {
        typeof c == "string" && (t[o][c] = l);
      }), t[o][i] = l;
    }), t;
  }
}
let tl = [], kn = {};
const In = {}, ip = Object.keys(In);
function sp(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return tl = e, kn = {}, Object.keys(In).forEach((r) => {
    ip.indexOf(r) === -1 && delete In[r];
  }), tl.forEach((r) => {
    const a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach((o) => {
      typeof a[o] == "function" && (n[o] = a[o]), typeof a[o] == "object" && Object.keys(a[o]).forEach((i) => {
        n[o] || (n[o] = {}), n[o][i] = a[o][i];
      });
    }), r.hooks) {
      const o = r.hooks();
      Object.keys(o).forEach((i) => {
        kn[i] || (kn[i] = []), kn[i].push(o[i]);
      });
    }
    r.provides && r.provides(In);
  }), n;
}
function Ii(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    r[a - 2] = arguments[a];
  return (kn[e] || []).forEach((i) => {
    t = i.apply(null, [t, ...r]);
  }), t;
}
function ln(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (kn[e] || []).forEach((o) => {
    o.apply(null, n);
  });
}
function Bt() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return In[e] ? In[e].apply(null, t) : void 0;
}
function Di(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || Mt();
  if (t)
    return t = en(n, t) || t, Qs(iu.definitions, n, t) || Qs(pt.styles, n, t);
}
const iu = new op(), lp = () => {
  W.autoReplaceSvg = !1, W.observeMutations = !1, ln("noAuto");
}, cp = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Ot ? (ln("beforeI2svg", e), Bt("pseudoElements2svg", e), Bt("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    W.autoReplaceSvg === !1 && (W.autoReplaceSvg = !0), W.observeMutations = !0, Vd(() => {
      fp({
        autoReplaceSvgRoot: t
      }), ln("watch", e);
    });
  }
}, up = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: en(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Ua(e[0]);
      return {
        prefix: n,
        iconName: en(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(W.cssPrefix, "-")) > -1 || e.match(Td))) {
      const t = Va(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || Mt(),
        iconName: en(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = Mt();
      return {
        prefix: t,
        iconName: en(t, e) || e
      };
    }
  }
}, ze = {
  noAuto: lp,
  config: W,
  dom: cp,
  parse: up,
  library: iu,
  findIconDefinition: Di,
  toHtml: Ir
}, fp = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = de
  } = e;
  (Object.keys(pt.styles).length > 0 || W.autoFetchSvg) && Ot && W.autoReplaceSvg && ze.dom.i2svg({
    node: t
  });
};
function qa(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => Ir(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!Ot)
        return;
      const n = de.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function dp(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: a,
    styles: o,
    transform: i
  } = e;
  if (gs(i) && n.found && !r.found) {
    const {
      width: l,
      height: u
    } = n, c = {
      x: l / u / 2,
      y: 0.5
    };
    a.style = za(R(R({}, o), {}, {
      "transform-origin": "".concat(c.x + i.x / 16, "em ").concat(c.y + i.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function pp(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: a,
    symbol: o
  } = e;
  const i = o === !0 ? "".concat(t, "-").concat(W.cssPrefix, "-").concat(n) : o;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: R(R({}, a), {}, {
        id: i
      }),
      children: r
    }]
  }];
}
function vs(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: r,
    iconName: a,
    transform: o,
    symbol: i,
    title: l,
    maskId: u,
    titleId: c,
    extra: f,
    watchable: h = !1
  } = e, {
    width: g,
    height: C
  } = n.found ? n : t, m = dd.includes(r), x = [W.replacementClass, a ? "".concat(W.cssPrefix, "-").concat(a) : ""].filter((I) => f.classes.indexOf(I) === -1).filter((I) => I !== "" || !!I).concat(f.classes).join(" ");
  let S = {
    children: [],
    attributes: R(R({}, f.attributes), {}, {
      "data-prefix": r,
      "data-icon": a,
      class: x,
      role: f.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(g, " ").concat(C)
    })
  };
  const O = m && !~f.classes.indexOf("fa-fw") ? {
    width: "".concat(g / C * 16 * 0.0625, "em")
  } : {};
  h && (S.attributes[sn] = ""), l && (S.children.push({
    tag: "title",
    attributes: {
      id: S.attributes["aria-labelledby"] || "title-".concat(c || Or())
    },
    children: [l]
  }), delete S.attributes.title);
  const $ = R(R({}, S), {}, {
    prefix: r,
    iconName: a,
    main: t,
    mask: n,
    maskId: u,
    transform: o,
    symbol: i,
    styles: R(R({}, O), f.styles)
  }), {
    children: E,
    attributes: _
  } = n.found && t.found ? Bt("generateAbstractMask", $) || {
    children: [],
    attributes: {}
  } : Bt("generateAbstractIcon", $) || {
    children: [],
    attributes: {}
  };
  return $.children = E, $.attributes = _, i ? pp($) : dp($);
}
function nl(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: a,
    title: o,
    extra: i,
    watchable: l = !1
  } = e, u = R(R(R({}, i.attributes), o ? {
    title: o
  } : {}), {}, {
    class: i.classes.join(" ")
  });
  l && (u[sn] = "");
  const c = R({}, i.styles);
  gs(a) && (c.transform = jd({
    transform: a,
    startCentered: !0,
    width: n,
    height: r
  }), c["-webkit-transform"] = c.transform);
  const f = za(c);
  f.length > 0 && (u.style = f);
  const h = [];
  return h.push({
    tag: "span",
    attributes: u,
    children: [t]
  }), o && h.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [o]
  }), h;
}
function hp(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, a = R(R(R({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), o = za(r.styles);
  o.length > 0 && (a.style = o);
  const i = [];
  return i.push({
    tag: "span",
    attributes: a,
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
  styles: Yo
} = pt;
function Fi(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let a = null;
  return Array.isArray(r) ? a = {
    tag: "g",
    attributes: {
      class: "".concat(W.cssPrefix, "-").concat(Wo.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(W.cssPrefix, "-").concat(Wo.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(W.cssPrefix, "-").concat(Wo.PRIMARY),
        fill: "currentColor",
        d: r[1]
      }
    }]
  } : a = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: r
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: a
  };
}
const mp = {
  found: !1,
  width: 512,
  height: 512
};
function gp(e, t) {
  !Vc && !W.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Li(e, t) {
  let n = t;
  return t === "fa" && W.styleDefault !== null && (t = Mt()), new Promise((r, a) => {
    if (n === "fa") {
      const o = au(e) || {};
      e = o.iconName || e, t = o.prefix || t;
    }
    if (e && t && Yo[t] && Yo[t][e]) {
      const o = Yo[t][e];
      return r(Fi(o));
    }
    gp(e, t), r(R(R({}, mp), {}, {
      icon: W.showMissingIcons && e ? Bt("missingIconAbstract") || {} : {}
    }));
  });
}
const rl = () => {
}, Ni = W.measurePerformance && sa && sa.mark && sa.measure ? sa : {
  mark: rl,
  measure: rl
}, gr = 'FA "6.7.1"', yp = (e) => (Ni.mark("".concat(gr, " ").concat(e, " begins")), () => su(e)), su = (e) => {
  Ni.mark("".concat(gr, " ").concat(e, " ends")), Ni.measure("".concat(gr, " ").concat(e), "".concat(gr, " ").concat(e, " begins"), "".concat(gr, " ").concat(e, " ends"));
};
var ws = {
  begin: yp,
  end: su
};
const ma = () => {
};
function al(e) {
  return typeof (e.getAttribute ? e.getAttribute(sn) : null) == "string";
}
function bp(e) {
  const t = e.getAttribute ? e.getAttribute(ds) : null, n = e.getAttribute ? e.getAttribute(ps) : null;
  return t && n;
}
function vp(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(W.replacementClass);
}
function wp() {
  return W.autoReplaceSvg === !0 ? ga.replace : ga[W.autoReplaceSvg] || ga.replace;
}
function xp(e) {
  return de.createElementNS("http://www.w3.org/2000/svg", e);
}
function Sp(e) {
  return de.createElement(e);
}
function lu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? xp : Sp
  } = t;
  if (typeof e == "string")
    return de.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(o) {
    r.setAttribute(o, e.attributes[o]);
  }), (e.children || []).forEach(function(o) {
    r.appendChild(lu(o, {
      ceFn: n
    }));
  }), r;
}
function Ep(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const ga = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(lu(n), t);
      }), t.getAttribute(sn) === null && W.keepOriginalSource) {
        let n = de.createComment(Ep(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~ms(t).indexOf(W.replacementClass))
      return ga.replace(e);
    const r = new RegExp("".concat(W.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const o = n[0].attributes.class.split(" ").reduce((i, l) => (l === W.replacementClass || l.match(r) ? i.toSvg.push(l) : i.toNode.push(l), i), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = o.toSvg.join(" "), o.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", o.toNode.join(" "));
    }
    const a = n.map((o) => Ir(o)).join(`
`);
    t.setAttribute(sn, ""), t.innerHTML = a;
  }
};
function ol(e) {
  e();
}
function cu(e, t) {
  const n = typeof t == "function" ? t : ma;
  if (e.length === 0)
    n();
  else {
    let r = ol;
    W.mutateApproach === Od && (r = Rt.requestAnimationFrame || ol), r(() => {
      const a = wp(), o = ws.begin("mutate");
      e.map(a), o(), n();
    });
  }
}
let xs = !1;
function uu() {
  xs = !0;
}
function Ri() {
  xs = !1;
}
let Oa = null;
function il(e) {
  if (!Ws || !W.observeMutations)
    return;
  const {
    treeCallback: t = ma,
    nodeCallback: n = ma,
    pseudoElementsCallback: r = ma,
    observeMutationsRoot: a = de
  } = e;
  Oa = new Ws((o) => {
    if (xs)
      return;
    const i = Mt();
    jn(o).forEach((l) => {
      if (l.type === "childList" && l.addedNodes.length > 0 && !al(l.addedNodes[0]) && (W.searchPseudoElements && r(l.target), t(l.target)), l.type === "attributes" && l.target.parentNode && W.searchPseudoElements && r(l.target.parentNode), l.type === "attributes" && al(l.target) && ~$d.indexOf(l.attributeName))
        if (l.attributeName === "class" && bp(l.target)) {
          const {
            prefix: u,
            iconName: c
          } = Va(ms(l.target));
          l.target.setAttribute(ds, u || i), c && l.target.setAttribute(ps, c);
        } else
          vp(l.target) && n(l.target);
    });
  }), Ot && Oa.observe(a, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function Ap() {
  Oa && Oa.disconnect();
}
function Op(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, a) => {
    const o = a.split(":"), i = o[0], l = o.slice(1);
    return i && l.length > 0 && (r[i] = l.join(":").trim()), r;
  }, {})), n;
}
function Cp(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let a = Va(ms(e));
  return a.prefix || (a.prefix = Mt()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = Xd(a.prefix, e.innerText) || bs(a.prefix, Pi(e.innerText))), !a.iconName && W.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function _p(e) {
  const t = jn(e.attributes).reduce((a, o) => (a.name !== "class" && a.name !== "style" && (a[o.name] = o.value), a), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return W.autoA11y && (n ? t["aria-labelledby"] = "".concat(W.replacementClass, "-title-").concat(r || Or()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function Tp() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: dt,
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
function sl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: a
  } = Cp(e), o = _p(e), i = Ii("parseNodeAttributes", {}, e);
  let l = t.styleParser ? Op(e) : [];
  return R({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: dt,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: a,
      styles: l,
      attributes: o
    }
  }, i);
}
const {
  styles: kp
} = pt;
function fu(e) {
  const t = W.autoReplaceSvg === "nest" ? sl(e, {
    styleParser: !1
  }) : sl(e);
  return ~t.extra.classes.indexOf(Hc) ? Bt("generateLayersText", e, t) : Bt("generateSvgReplacementMutation", e, t);
}
function Pp() {
  return [...cd, ...Ai];
}
function ll(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Ot)
    return Promise.resolve();
  const n = de.documentElement.classList, r = (f) => n.add("".concat(Ys, "-").concat(f)), a = (f) => n.remove("".concat(Ys, "-").concat(f)), o = W.autoFetchSvg ? Pp() : Mc.concat(Object.keys(kp));
  o.includes("fa") || o.push("fa");
  const i = [".".concat(Hc, ":not([").concat(sn, "])")].concat(o.map((f) => ".".concat(f, ":not([").concat(sn, "])"))).join(", ");
  if (i.length === 0)
    return Promise.resolve();
  let l = [];
  try {
    l = jn(e.querySelectorAll(i));
  } catch {
  }
  if (l.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  const u = ws.begin("onTree"), c = l.reduce((f, h) => {
    try {
      const g = fu(h);
      g && f.push(g);
    } catch (g) {
      Vc || g.name === "MissingIcon" && console.error(g);
    }
    return f;
  }, []);
  return new Promise((f, h) => {
    Promise.all(c).then((g) => {
      cu(g, () => {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), u(), f();
      });
    }).catch((g) => {
      u(), h(g);
    });
  });
}
function $p(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  fu(e).then((n) => {
    n && cu([n], t);
  });
}
function Ip(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : Di(t || {});
    let {
      mask: a
    } = n;
    return a && (a = (a || {}).icon ? a : Di(a || {})), e(r, R(R({}, n), {}, {
      mask: a
    }));
  };
}
const Dp = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = dt,
    symbol: r = !1,
    mask: a = null,
    maskId: o = null,
    title: i = null,
    titleId: l = null,
    classes: u = [],
    attributes: c = {},
    styles: f = {}
  } = t;
  if (!e)
    return;
  const {
    prefix: h,
    iconName: g,
    icon: C
  } = e;
  return qa(R({
    type: "icon"
  }, e), () => (ln("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), W.autoA11y && (i ? c["aria-labelledby"] = "".concat(W.replacementClass, "-title-").concat(l || Or()) : (c["aria-hidden"] = "true", c.focusable = "false")), vs({
    icons: {
      main: Fi(C),
      mask: a ? Fi(a.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: h,
    iconName: g,
    transform: R(R({}, dt), n),
    symbol: r,
    title: i,
    maskId: o,
    titleId: l,
    extra: {
      attributes: c,
      styles: f,
      classes: u
    }
  })));
};
var Fp = {
  mixout() {
    return {
      icon: Ip(Dp)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = ll, e.nodeCallback = $p, e;
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
      return ll(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: a,
        titleId: o,
        prefix: i,
        transform: l,
        symbol: u,
        mask: c,
        maskId: f,
        extra: h
      } = n;
      return new Promise((g, C) => {
        Promise.all([Li(r, i), c.iconName ? Li(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((m) => {
          let [x, S] = m;
          g([t, vs({
            icons: {
              main: x,
              mask: S
            },
            prefix: i,
            iconName: r,
            transform: l,
            symbol: u,
            maskId: f,
            title: a,
            titleId: o,
            extra: h,
            watchable: !0
          })]);
        }).catch(C);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: a,
        transform: o,
        styles: i
      } = t;
      const l = za(i);
      l.length > 0 && (r.style = l);
      let u;
      return gs(o) && (u = Bt("generateAbstractTransformGrouping", {
        main: a,
        transform: o,
        containerWidth: a.width,
        iconWidth: a.width
      })), n.push(u || a.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, Lp = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return qa({
          type: "layer"
        }, () => {
          ln("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let r = [];
          return e((a) => {
            Array.isArray(a) ? a.map((o) => {
              r = r.concat(o.abstract);
            }) : r = r.concat(a.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(W.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, Np = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: r = [],
          attributes: a = {},
          styles: o = {}
        } = t;
        return qa({
          type: "counter",
          content: e
        }, () => (ln("beforeDOMElementCreation", {
          content: e,
          params: t
        }), hp({
          content: e.toString(),
          title: n,
          extra: {
            attributes: a,
            styles: o,
            classes: ["".concat(W.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, Rp = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = dt,
          title: r = null,
          classes: a = [],
          attributes: o = {},
          styles: i = {}
        } = t;
        return qa({
          type: "text",
          content: e
        }, () => (ln("beforeDOMElementCreation", {
          content: e,
          params: t
        }), nl({
          content: e,
          transform: R(R({}, dt), n),
          title: r,
          extra: {
            attributes: o,
            styles: i,
            classes: ["".concat(W.cssPrefix, "-layers-text"), ...a]
          }
        })));
      }
    };
  },
  provides(e) {
    e.generateLayersText = function(t, n) {
      const {
        title: r,
        transform: a,
        extra: o
      } = n;
      let i = null, l = null;
      if (Nc) {
        const u = parseInt(getComputedStyle(t).fontSize, 10), c = t.getBoundingClientRect();
        i = c.width / u, l = c.height / u;
      }
      return W.autoA11y && !r && (o.attributes["aria-hidden"] = "true"), Promise.resolve([t, nl({
        content: t.innerHTML,
        width: i,
        height: l,
        transform: a,
        title: r,
        extra: o,
        watchable: !0
      })]);
    };
  }
};
const Mp = new RegExp('"', "ug"), cl = [1105920, 1112319], ul = R(R(R(R({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), id), Ed), gd), Mi = Object.keys(ul).reduce((e, t) => (e[t.toLowerCase()] = ul[t], e), {}), Bp = Object.keys(Mi).reduce((e, t) => {
  const n = Mi[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function jp(e) {
  const t = e.replace(Mp, ""), n = Wd(t, 0), r = n >= cl[0] && n <= cl[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: Pi(a ? t[0] : t),
    isSecondary: r || a
  };
}
function zp(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), a = isNaN(r) ? "normal" : r;
  return (Mi[n] || {})[a] || Bp[n];
}
function fl(e, t) {
  const n = "".concat(Ad).concat(t.replace(":", "-"));
  return new Promise((r, a) => {
    if (e.getAttribute(n) !== null)
      return r();
    const i = jn(e.children).filter((g) => g.getAttribute(Ci) === t)[0], l = Rt.getComputedStyle(e, t), u = l.getPropertyValue("font-family"), c = u.match(kd), f = l.getPropertyValue("font-weight"), h = l.getPropertyValue("content");
    if (i && !c)
      return e.removeChild(i), r();
    if (c && h !== "none" && h !== "") {
      const g = l.getPropertyValue("content");
      let C = zp(u, f);
      const {
        value: m,
        isSecondary: x
      } = jp(g), S = c[0].startsWith("FontAwesome");
      let O = bs(C, m), $ = O;
      if (S) {
        const E = Qd(m);
        E.iconName && E.prefix && (O = E.iconName, C = E.prefix);
      }
      if (O && !x && (!i || i.getAttribute(ds) !== C || i.getAttribute(ps) !== $)) {
        e.setAttribute(n, $), i && e.removeChild(i);
        const E = Tp(), {
          extra: _
        } = E;
        _.attributes[Ci] = t, Li(O, C).then((I) => {
          const j = vs(R(R({}, E), {}, {
            icons: {
              main: I,
              mask: ou()
            },
            prefix: C,
            iconName: $,
            extra: _,
            watchable: !0
          })), z = de.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(z, e.firstChild) : e.appendChild(z), z.outerHTML = j.map((B) => Ir(B)).join(`
`), e.removeAttribute(n), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function Up(e) {
  return Promise.all([fl(e, "::before"), fl(e, "::after")]);
}
function Vp(e) {
  return e.parentNode !== document.head && !~Cd.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Ci) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function dl(e) {
  if (Ot)
    return new Promise((t, n) => {
      const r = jn(e.querySelectorAll("*")).filter(Vp).map(Up), a = ws.begin("searchPseudoElements");
      uu(), Promise.all(r).then(() => {
        a(), Ri(), t();
      }).catch(() => {
        a(), Ri(), n();
      });
    });
}
var qp = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = dl, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = de
      } = t;
      W.searchPseudoElements && dl(n);
    };
  }
};
let pl = !1;
var Hp = {
  mixout() {
    return {
      dom: {
        unwatch() {
          uu(), pl = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        il(Ii("mutationObserverCallbacks", {}));
      },
      noAuto() {
        Ap();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        pl ? Ri() : il(Ii("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const hl = (e) => {
  let t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((n, r) => {
    const a = r.toLowerCase().split("-"), o = a[0];
    let i = a.slice(1).join("-");
    if (o && i === "h")
      return n.flipX = !0, n;
    if (o && i === "v")
      return n.flipY = !0, n;
    if (i = parseFloat(i), isNaN(i))
      return n;
    switch (o) {
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
var Wp = {
  mixout() {
    return {
      parse: {
        transform: (e) => hl(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = hl(n)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: n,
        transform: r,
        containerWidth: a,
        iconWidth: o
      } = t;
      const i = {
        transform: "translate(".concat(a / 2, " 256)")
      }, l = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), u = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), c = "rotate(".concat(r.rotate, " 0 0)"), f = {
        transform: "".concat(l, " ").concat(u, " ").concat(c)
      }, h = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, g = {
        outer: i,
        inner: f,
        path: h
      };
      return {
        tag: "g",
        attributes: R({}, g.outer),
        children: [{
          tag: "g",
          attributes: R({}, g.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: R(R({}, n.icon.attributes), g.path)
          }]
        }]
      };
    };
  }
};
const Jo = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function ml(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Kp(e) {
  return e.tag === "g" ? e.children : [e];
}
var Gp = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? Va(n.split(" ").map((a) => a.trim())) : ou();
        return r.prefix || (r.prefix = Mt()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: n,
        attributes: r,
        main: a,
        mask: o,
        maskId: i,
        transform: l
      } = t;
      const {
        width: u,
        icon: c
      } = a, {
        width: f,
        icon: h
      } = o, g = Bd({
        transform: l,
        containerWidth: f,
        iconWidth: u
      }), C = {
        tag: "rect",
        attributes: R(R({}, Jo), {}, {
          fill: "white"
        })
      }, m = c.children ? {
        children: c.children.map(ml)
      } : {}, x = {
        tag: "g",
        attributes: R({}, g.inner),
        children: [ml(R({
          tag: c.tag,
          attributes: R(R({}, c.attributes), g.path)
        }, m))]
      }, S = {
        tag: "g",
        attributes: R({}, g.outer),
        children: [x]
      }, O = "mask-".concat(i || Or()), $ = "clip-".concat(i || Or()), E = {
        tag: "mask",
        attributes: R(R({}, Jo), {}, {
          id: O,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [C, S]
      }, _ = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: $
          },
          children: Kp(h)
        }, E]
      };
      return n.push(_, {
        tag: "rect",
        attributes: R({
          fill: "currentColor",
          "clip-path": "url(#".concat($, ")"),
          mask: "url(#".concat(O, ")")
        }, Jo)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, Yp = {
  provides(e) {
    let t = !1;
    Rt.matchMedia && (t = Rt.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, a = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: R(R({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const o = R(R({}, a), {}, {
        attributeName: "opacity"
      }), i = {
        tag: "circle",
        attributes: R(R({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || i.children.push({
        tag: "animate",
        attributes: R(R({}, a), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: R(R({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(i), n.push({
        tag: "path",
        attributes: R(R({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: R(R({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: R(R({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: R(R({}, o), {}, {
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
}, Jp = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, Xp = [Ud, Fp, Lp, Np, Rp, qp, Hp, Wp, Gp, Yp, Jp];
sp(Xp, {
  mixoutsTo: ze
});
ze.noAuto;
const du = ze.config, Dr = ze.library;
ze.dom;
const Ca = ze.parse;
ze.findIconDefinition;
ze.toHtml;
const Qp = ze.icon;
ze.layer;
const Zp = ze.text;
ze.counter;
function gl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gl(Object(n), !0).forEach(function(r) {
      Fe(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gl(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function eh(e, t) {
  if (typeof e != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function th(e) {
  var t = eh(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function _a(e) {
  "@babel/helpers - typeof";
  return _a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _a(e);
}
function Fe(e, t, n) {
  return t = th(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function nh(e, t) {
  if (e == null)
    return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0)
        continue;
      n[r] = e[r];
    }
  return n;
}
function rh(e, t) {
  if (e == null)
    return {};
  var n = nh(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Bi(e) {
  return ah(e) || oh(e) || ih(e) || sh();
}
function ah(e) {
  if (Array.isArray(e))
    return ji(e);
}
function oh(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function ih(e, t) {
  if (e) {
    if (typeof e == "string")
      return ji(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ji(e, t);
  }
}
function ji(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function sh() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var lh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, pu = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(O, $, E) {
      if (!c($) || h($) || g($) || C($) || u($))
        return $;
      var _, I = 0, j = 0;
      if (f($))
        for (_ = [], j = $.length; I < j; I++)
          _.push(n(O, $[I], E));
      else {
        _ = {};
        for (var z in $)
          Object.prototype.hasOwnProperty.call($, z) && (_[O(z, E)] = n(O, $[z], E));
      }
      return _;
    }, r = function(O, $) {
      $ = $ || {};
      var E = $.separator || "_", _ = $.split || /(?=[A-Z])/;
      return O.split(_).join(E);
    }, a = function(O) {
      return m(O) ? O : (O = O.replace(/[\-_\s]+(.)?/g, function($, E) {
        return E ? E.toUpperCase() : "";
      }), O.substr(0, 1).toLowerCase() + O.substr(1));
    }, o = function(O) {
      var $ = a(O);
      return $.substr(0, 1).toUpperCase() + $.substr(1);
    }, i = function(O, $) {
      return r(O, $).toLowerCase();
    }, l = Object.prototype.toString, u = function(O) {
      return typeof O == "function";
    }, c = function(O) {
      return O === Object(O);
    }, f = function(O) {
      return l.call(O) == "[object Array]";
    }, h = function(O) {
      return l.call(O) == "[object Date]";
    }, g = function(O) {
      return l.call(O) == "[object RegExp]";
    }, C = function(O) {
      return l.call(O) == "[object Boolean]";
    }, m = function(O) {
      return O = O - 0, O === O;
    }, x = function(O, $) {
      var E = $ && "process" in $ ? $.process : $;
      return typeof E != "function" ? O : function(_, I) {
        return E(_, O, I);
      };
    }, S = {
      camelize: a,
      decamelize: i,
      pascalize: o,
      depascalize: i,
      camelizeKeys: function(O, $) {
        return n(x(a, $), O);
      },
      decamelizeKeys: function(O, $) {
        return n(x(i, $), O, $);
      },
      pascalizeKeys: function(O, $) {
        return n(x(o, $), O);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = S : t.humps = S;
  })(lh);
})(pu);
var ch = pu.exports, uh = ["class", "style"];
function fh(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), a = ch.camelize(n.slice(0, r)), o = n.slice(r + 1).trim();
    return t[a] = o, t;
  }, {});
}
function dh(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function Ss(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var r = (e.children || []).map(function(u) {
    return Ss(u);
  }), a = Object.keys(e.attributes || {}).reduce(function(u, c) {
    var f = e.attributes[c];
    switch (c) {
      case "class":
        u.class = dh(f);
        break;
      case "style":
        u.style = fh(f);
        break;
      default:
        u.attrs[c] = f;
    }
    return u;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var o = n.style, i = o === void 0 ? {} : o, l = rh(n, uh);
  return Lt(e.tag, Qe(Qe(Qe({}, t), {}, {
    class: a.class,
    style: Qe(Qe({}, a.style), i)
  }, a.attrs), l), r);
}
var hu = !1;
try {
  hu = process.env.NODE_ENV === "production";
} catch {
}
function ph() {
  if (!hu && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function wr(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Fe({}, e, t) : {};
}
function hh(e) {
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
  }, Fe(Fe(Fe(Fe(Fe(Fe(Fe(Fe(Fe(Fe(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), "fa-flash", e.flash), Fe(Fe(t, "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse));
  return Object.keys(n).map(function(r) {
    return n[r] ? r : null;
  }).filter(function(r) {
    return r;
  });
}
function yl(e) {
  if (e && _a(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Ca.icon)
    return Ca.icon(e);
  if (e === null)
    return null;
  if (_a(e) === "object" && e.prefix && e.iconName)
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
var ft = jt({
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
    var r = n.attrs, a = se(function() {
      return yl(t.icon);
    }), o = se(function() {
      return wr("classes", hh(t));
    }), i = se(function() {
      return wr("transform", typeof t.transform == "string" ? Ca.transform(t.transform) : t.transform);
    }), l = se(function() {
      return wr("mask", yl(t.mask));
    }), u = se(function() {
      return Qp(a.value, Qe(Qe(Qe(Qe({}, o.value), i.value), l.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    Ft(u, function(f) {
      if (!f)
        return ph("Could not find one or more icon(s)", a.value, l.value);
    }, {
      immediate: !0
    });
    var c = se(function() {
      return u.value ? Ss(u.value.abstract[0], {}, r) : null;
    });
    return function() {
      return c.value;
    };
  }
});
jt({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var r = n.slots, a = du.familyPrefix, o = se(function() {
      return ["".concat(a, "-layers")].concat(Bi(t.fixedWidth ? ["".concat(a, "-fw")] : []));
    });
    return function() {
      return Lt("div", {
        class: o.value
      }, r.default ? r.default() : []);
    };
  }
});
jt({
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
    var r = n.attrs, a = du.familyPrefix, o = se(function() {
      return wr("classes", [].concat(Bi(t.counter ? ["".concat(a, "-layers-counter")] : []), Bi(t.position ? ["".concat(a, "-layers-").concat(t.position)] : [])));
    }), i = se(function() {
      return wr("transform", typeof t.transform == "string" ? Ca.transform(t.transform) : t.transform);
    }), l = se(function() {
      var c = Zp(t.value.toString(), Qe(Qe({}, i.value), o.value)), f = c.abstract;
      return t.counter && (f[0].attributes.class = f[0].attributes.class.replace("fa-layers-text", "")), f[0];
    }), u = se(function() {
      return Ss(l.value, {}, r);
    });
    return function() {
      return u.value;
    };
  }
});
/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const mh = {
  prefix: "fas",
  iconName: "sort-down",
  icon: [320, 512, ["sort-desc"], "f0dd", "M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"]
}, zi = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, gh = {
  prefix: "fas",
  iconName: "box-archive",
  icon: [512, 512, ["archive"], "f187", "M32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64C0 46.3 14.3 32 32 32zm0 128l448 0 0 256c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-256zm128 80c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16z"]
}, bl = {
  prefix: "fas",
  iconName: "pen-ruler",
  icon: [512, 512, ["pencil-ruler"], "f5ae", "M469.3 19.3l23.4 23.4c25 25 25 65.5 0 90.5l-56.4 56.4L322.3 75.7l56.4-56.4c25-25 65.5-25 90.5 0zM44.9 353.2L299.7 98.3 413.7 212.3 158.8 467.1c-6.7 6.7-15.1 11.6-24.2 14.2l-104 29.7c-8.4 2.4-17.4 .1-23.6-6.1s-8.5-15.2-6.1-23.6l29.7-104c2.6-9.2 7.5-17.5 14.2-24.2zM249.4 103.4L103.4 249.4 16 161.9c-18.7-18.7-18.7-49.1 0-67.9L94.1 16c18.7-18.7 49.1-18.7 67.9 0l19.8 19.8c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1l45.1 45.1zM408.6 262.6l45.1 45.1c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1L496 350.1c18.7 18.7 18.7 49.1 0 67.9L417.9 496c-18.7 18.7-49.1 18.7-67.9 0l-87.4-87.4L408.6 262.6z"]
}, yh = {
  prefix: "fas",
  iconName: "square-check",
  icon: [448, 512, [9745, 9989, 61510, "check-square"], "f14a", "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, vl = {
  prefix: "fas",
  iconName: "eye-slash",
  icon: [640, 512, [], "f070", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]
}, wl = {
  prefix: "fas",
  iconName: "eye",
  icon: [576, 512, [128065], "f06e", "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]
}, bh = {
  prefix: "fas",
  iconName: "sort-up",
  icon: [320, 512, ["sort-asc"], "f0de", "M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]
}, vh = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]
}, wh = {
  prefix: "fas",
  iconName: "spinner",
  icon: [512, 512, [], "f110", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]
}, xh = {
  prefix: "fas",
  iconName: "calendar",
  icon: [448, 512, [128197, 128198], "f133", "M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"]
};
/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Sh = {
  prefix: "far",
  iconName: "square",
  icon: [448, 512, [9632, 9723, 9724, 61590], "f0c8", "M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]
};
/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const mu = {
  prefix: "fab",
  iconName: "whatsapp",
  icon: [448, 512, [], "f232", "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]
};
const zn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, Eh = { class: "relative flex w-full max-w-full items-stretch" }, Ah = {
  key: 0,
  class: "flex items-center"
}, Oh = {
  key: 1,
  class: "mr-1"
}, Ch = ["id", "disabled", "required", "name"], _h = { key: 5 }, Th = ["required", "disabled", "name"], kh = {
  key: 0,
  class: "border-gray flex items-center whitespace-nowrap rounded rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center text-gray-500"
}, Ph = { class: "relative flex w-full" }, $h = ["href"], Ih = {
  __name: "Input",
  props: /* @__PURE__ */ zs({
    type: String,
    field: String,
    label: String,
    name: String,
    required: Boolean,
    disabled: Boolean,
    min: { type: [Number, String] },
    max: { type: [Number, String] },
    step: { type: [Number, String] },
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
  emits: /* @__PURE__ */ zs(["changed", "update:modelValue"], ["update:modelValue"]),
  setup(e, { expose: t, emit: n }) {
    Dr.add(mu, yh, Sh, wl, vl);
    const r = e;
    function a(x) {
      let S = [];
      return x.split("_").join(" ").split(" ").map(function(O) {
        S.push(O[0].toUpperCase() + O.slice(1));
      }), S.join(" ");
    }
    const o = n, i = Z(!1), l = Bf(e, "modelValue"), u = Z(), c = Z(), f = Z(r.type);
    We(() => {
      i.value = !r.form, u.value = i.value ? l.value : r.form[r.field];
    }), Ft(
      () => u.value,
      (x, S) => {
        if (x !== S) {
          if (i.value ? l.value = x : r.form[r.field] = x, c.value = S, o("update:modelValue", x), h.value) {
            h.value = !1;
            return;
          }
          o("changed", { value: x, old_value: S });
        }
      }
    );
    const h = Z(!1), g = (x) => {
      u.value = x, h.value = !0;
    }, C = () => c.value;
    Ft(
      () => r.field ? r.form[r.field] : null,
      (x) => {
        u.value = i.value ? l.value : x;
      },
      {
        deep: !0
      }
    ), Ft(
      () => l.value,
      (x) => {
        u.value = x;
      }
    );
    const m = () => {
      f.value = f.value === "password" ? "text" : "password";
    };
    return t({
      togglePassword: m,
      setValueSilently: g,
      getPreviousValue: C
    }), (x, S) => {
      var O, $, E, _, I, j, z, B;
      return A(), k("div", {
        class: X(e.noLabel ? "mb-2" : "mb-4")
      }, [
        e.noLabel ? G("", !0) : (A(), oe(q(Es), {
          key: 0,
          customClass: e.labelCustomClass,
          for: e.field,
          value: e.label ? e.label : e.field ? a(e.field) : "",
          sublabel: e.sublabel,
          required: e.required
        }, null, 8, ["customClass", "for", "value", "sublabel", "required"])),
        D("div", Eh, [
          e.type === "switch" || e.type === "checkbox" ? (A(), k("label", Ah, [
            (O = x.$slots) != null && O.leftDescription ? J(x.$slots, "leftDescription", { key: 0 }, void 0, !0) : e.leftDescription ? (A(), k("span", Oh, Q(e.leftDescription ? e.leftDescription : "Disable"), 1)) : G("", !0),
            Be(D("input", {
              id: e.field,
              type: "checkbox",
              class: "hidden",
              "onUpdate:modelValue": S[0] || (S[0] = (M) => u.value = M),
              disabled: r.disabled,
              required: r.required,
              name: e.name ?? e.field
            }, null, 8, Ch), [
              [Ic, u.value]
            ]),
            e.type === "switch" ? (A(), k("div", {
              key: 2,
              tabindex: "0",
              class: X(["toggle-switch focusable !ml-0", {
                checked: u.value,
                disabled: r.disabled
              }])
            }, null, 2)) : (A(), k("div", {
              key: 3,
              tabindex: "0",
              class: X(["focusable mr-1 p-1 text-primary", {
                "!text-gray-500": r.disabled,
                [e.checkboxCustomClass]: e.checkboxCustomClass
              }])
            }, [
              ge(rn, {
                name: "popup",
                mode: "out-in"
              }, {
                default: he(() => [
                  r.form[e.field] ? (A(), oe(q(ft), {
                    key: "checked",
                    icon: "fas fa-square-check"
                  })) : (A(), oe(q(ft), {
                    key: "unchecked",
                    icon: "far fa-square"
                  }))
                ]),
                _: 1
              })
            ], 2)),
            ($ = x.$slots) != null && $.rightDescription ? J(x.$slots, "rightDescription", { key: 4 }, void 0, !0) : e.rightDescription ? (A(), k("span", _h, Q(e.rightDescription), 1)) : G("", !0)
          ])) : e.type === "select" ? Be((A(), k("select", {
            key: 1,
            "onUpdate:modelValue": S[1] || (S[1] = (M) => u.value = M),
            required: r.required,
            disabled: r.disabled,
            name: e.name ?? e.field,
            class: X(["focusable block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", { [e.inputCustomClass]: !!e.inputCustomClass }])
          }, [
            J(x.$slots, "default", {}, void 0, !0)
          ], 10, Th)), [
            [jf, u.value]
          ]) : (A(), k(ue, { key: 2 }, [
            e.addon ? (A(), k("span", kh, Q(e.addon), 1)) : G("", !0),
            D("div", Ph, [
              ge(q(jh), {
                id: e.field,
                type: f.value,
                class: X(["focusable relative m-0 block w-full flex-auto disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", {
                  "!rounded-l-none": e.addon,
                  "!rounded-r-none": !!e.submitBtn || e.whatsApp || ((E = x.$slots) == null ? void 0 : E.submit),
                  [e.inputCustomClass]: !!e.inputCustomClass
                }]),
                modelValue: u.value,
                "onUpdate:modelValue": S[2] || (S[2] = (M) => u.value = M),
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
              e.type == "password" && !e.hidePasswordToggler ? (A(), k("div", {
                key: 0,
                onClick: m,
                class: "absolute right-0 top-0 z-[2] flex h-full w-11 cursor-pointer items-center justify-center text-lg leading-normal text-black"
              }, [
                f.value === "password" ? (A(), oe(q(ft), {
                  key: 0,
                  icon: q(wl)
                }, null, 8, ["icon"])) : (A(), oe(q(ft), {
                  key: 1,
                  icon: q(vl)
                }, null, 8, ["icon"]))
              ])) : G("", !0)
            ]),
            e.form ? (A(), k(ue, { key: 1 }, [
              e.submitBtn ? (A(), oe(q(Sc), {
                key: 0,
                form: e.form,
                class: X(["z-[2] inline-block rounded-l-none", e.buttonCustomClass]),
                id: `submit-button-${e.field}`
              }, {
                default: he(() => [
                  pe(Q(e.submitBtn), 1)
                ]),
                _: 1
              }, 8, ["form", "class", "id"])) : G("", !0),
              (_ = x.$slots) != null && _.submit ? (A(), oe(q(Sc), {
                key: 1,
                form: e.form,
                class: X(["z-[2] inline-block rounded-l-none", e.buttonCustomClass]),
                id: "button-input"
              }, {
                default: he(() => [
                  J(x.$slots, "submit", {}, void 0, !0)
                ]),
                _: 3
              }, 8, ["form", "class"])) : G("", !0)
            ], 64)) : G("", !0),
            e.whatsApp ? (A(), k("a", {
              key: 2,
              class: X(["z-[2] inline-block rounded-r bg-primary px-2 py-2 text-xs font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:z-[3] focus:bg-primary-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-lg", e.buttonCustomClass]),
              href: e.whatsApp,
              target: "_blank"
            }, [
              ge(q(ft), {
                icon: "fab fa-whatsapp",
                size: "2xl"
              })
            ], 10, $h)) : G("", !0)
          ], 64))
        ]),
        e.error || (j = (I = e.form) == null ? void 0 : I.errors) != null && j[e.field] ? (A(), oe(q(Fr), {
          key: 1,
          message: e.error ? e.error : (B = (z = e.form) == null ? void 0 : z.errors) == null ? void 0 : B[e.field],
          class: "mt-2"
        }, null, 8, ["message"])) : G("", !0)
      ], 2);
    };
  }
}, Dh = /* @__PURE__ */ zn(Ih, [["__scopeId", "data-v-10eb1ddb"]]), Fh = { class: "text-sm text-red-600" }, Fr = {
  __name: "InputError",
  props: ["message"],
  setup(e) {
    return (t, n) => Be((A(), k("div", null, [
      D("p", Fh, Q(e.message), 1)
    ], 512)), [
      [Nt, e.message]
    ]);
  }
}, Lh = { key: 0 }, Nh = { key: 1 }, Rh = {
  key: 2,
  class: "ml-2 text-xs text-gray-500"
}, Mh = {
  key: 3,
  class: "ml-1 text-red-500"
}, Es = {
  __name: "InputLabel",
  props: ["value", "sublabel", "required", "customClass"],
  setup(e) {
    return (t, n) => (A(), k("label", {
      class: X(["mb-1 block text-sm font-medium text-gray-700", e.customClass])
    }, [
      e.value ? (A(), k("span", Lh, Q(e.value), 1)) : (A(), k("span", Nh, [
        J(t.$slots, "default")
      ])),
      e.sublabel ? (A(), k("span", Rh, Q(e.sublabel), 1)) : G("", !0),
      e.required ? (A(), k("span", Mh, "*")) : G("", !0)
    ], 2));
  }
}, Bh = ["value"], jh = {
  __name: "TextInput",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(e, { expose: t }) {
    const n = Z(null);
    return We(() => {
      n.value.hasAttribute("autofocus") && n.value.focus();
    }), t({ focus: () => n.value.focus() }), (r, a) => (A(), k("input", {
      class: "max-w-full rounded border-gray-300 shadow focus:border-accent-500 focus:ring-accent-500",
      value: e.modelValue,
      onInput: a[0] || (a[0] = (o) => r.$emit("update:modelValue", o.target.value)),
      ref_key: "input",
      ref: n
    }, null, 40, Bh));
  }
}, zh = { class: "relative mb-4 flex w-full flex-wrap items-stretch" }, Uh = ["id", "required", "disabled", "autocomplete", "placeholder", "autofocus", "rows"], Xw = {
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
      let a = [];
      return r.split("_").join(" ").split(" ").map(function(o) {
        a.push(o[0].toUpperCase() + o.slice(1));
      }), a.join(" ");
    }
    return (r, a) => (A(), k("div", null, [
      e.noLabel ? G("", !0) : (A(), oe(q(Es), {
        key: 0,
        for: e.field,
        value: e.label ? e.label : n(e.field),
        required: e.required
      }, null, 8, ["for", "value", "required"])),
      D("div", zh, [
        Be(D("textarea", {
          id: e.field,
          class: "relative m-0 block flex-auto rounded border-gray-300 shadow focus:border-accent-500 focus:ring-accent-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none",
          "onUpdate:modelValue": a[0] || (a[0] = (o) => t.form[e.field] = o),
          required: t.required,
          disabled: t.disabled,
          autocomplete: e.field,
          placeholder: t.placeholder,
          autofocus: t.autofocus,
          rows: t.rows,
          onInput: a[1] || (a[1] = (o) => r.$emit("update:modelValue", o.target.value))
        }, null, 40, Uh), [
          [zf, t.form[e.field]]
        ])
      ]),
      ge(q(Fr), {
        class: "mt-2",
        message: t.form.errors[e.field]
      }, null, 8, ["message"])
    ]));
  }
};
var Vh = Object.defineProperty, qh = Object.defineProperties, Hh = Object.getOwnPropertyDescriptors, xl = Object.getOwnPropertySymbols, Wh = Object.prototype.hasOwnProperty, Kh = Object.prototype.propertyIsEnumerable, Sl = (e, t, n) => t in e ? Vh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, An = (e, t) => {
  for (var n in t || (t = {}))
    Wh.call(t, n) && Sl(e, n, t[n]);
  if (xl)
    for (var n of xl(t))
      Kh.call(t, n) && Sl(e, n, t[n]);
  return e;
}, El = (e, t) => qh(e, Hh(t));
const Gh = {
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
        const n = this.getDropdownViewport(), { top: r, bottom: a, height: o } = t.getBoundingClientRect();
        if (r < n.top)
          return this.$refs.dropdownMenu.scrollTop = t.offsetTop;
        if (a > n.bottom)
          return this.$refs.dropdownMenu.scrollTop = t.offsetTop - (n.height - o);
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
}, Yh = {
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
}, Jh = {
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
}, As = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, Xh = {}, Qh = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, Zh = /* @__PURE__ */ D("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), em = [
  Zh
];
function tm(e, t) {
  return A(), k("svg", Qh, em);
}
const nm = /* @__PURE__ */ As(Xh, [["render", tm]]), rm = {}, am = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, om = /* @__PURE__ */ D("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), im = [
  om
];
function sm(e, t) {
  return A(), k("svg", am, im);
}
const lm = /* @__PURE__ */ As(rm, [["render", sm]]), Al = {
  Deselect: nm,
  OpenIndicator: lm
}, cm = {
  mounted(e, { instance: t }) {
    if (t.appendToBody) {
      const {
        height: n,
        top: r,
        left: a,
        width: o
      } = t.$refs.toggle.getBoundingClientRect();
      let i = window.scrollX || window.pageXOffset, l = window.scrollY || window.pageYOffset;
      e.unbindPosition = t.calculatePosition(e, t, {
        width: o + "px",
        left: i + a + "px",
        top: l + r + n + "px"
      }), document.body.appendChild(e);
    }
  },
  unmounted(e, { instance: t }) {
    t.appendToBody && (e.unbindPosition && typeof e.unbindPosition == "function" && e.unbindPosition(), e.parentNode && e.parentNode.removeChild(e));
  }
};
function um(e) {
  const t = {};
  return Object.keys(e).sort().forEach((n) => {
    t[n] = e[n];
  }), JSON.stringify(t);
}
let fm = 0;
function dm() {
  return ++fm;
}
const pm = {
  components: An({}, Al),
  directives: { appendToBody: cm },
  mixins: [Gh, Yh, Jh],
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
          return e.hasOwnProperty("id") ? e.id : um(e);
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
      default(e, t, { width: n, top: r, left: a }) {
        e.style.top = r, e.style.left = a, e.style.width = n;
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
      default: () => dm()
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
          attributes: An({
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
        header: El(An({}, e), { deselect: this.deselect }),
        footer: El(An({}, e), { deselect: this.deselect })
      };
    },
    childComponents() {
      return An(An({}, Al), this.components);
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
      const t = (a) => (a.preventDefault(), !this.isComposing && this.typeAheadSelect()), n = {
        8: (a) => this.maybeDeleteValue(),
        9: (a) => this.onTab(),
        27: (a) => this.onEscape(),
        38: (a) => (a.preventDefault(), this.typeAheadUp()),
        40: (a) => (a.preventDefault(), this.typeAheadDown())
      };
      this.selectOnKeyCodes.forEach((a) => n[a] = t);
      const r = this.mapKeydown(n, this);
      if (typeof r[e.keyCode] == "function")
        return r[e.keyCode](e);
    }
  }
}, hm = ["dir"], mm = ["id", "aria-expanded", "aria-owns"], gm = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, ym = ["disabled", "title", "aria-label", "onClick"], bm = {
  ref: "actions",
  class: "vs__actions"
}, vm = ["disabled"], wm = { class: "vs__spinner" }, xm = ["id"], Sm = ["id", "aria-selected", "onMouseover", "onClick"], Em = {
  key: 0,
  class: "vs__no-options"
}, Am = /* @__PURE__ */ pe(" Sorry, no matching options. "), Om = ["id"];
function Cm(e, t, n, r, a, o) {
  const i = Uf("append-to-body");
  return A(), k("div", {
    dir: n.dir,
    class: X(["v-select", o.stateClasses])
  }, [
    J(e.$slots, "header", Ve(Xe(o.scope.header))),
    D("div", {
      id: `vs${n.uid}__combobox`,
      ref: "toggle",
      class: "vs__dropdown-toggle",
      role: "combobox",
      "aria-expanded": o.dropdownOpen.toString(),
      "aria-owns": `vs${n.uid}__listbox`,
      "aria-label": "Search for option",
      onMousedown: t[1] || (t[1] = (l) => o.toggleDropdown(l))
    }, [
      D("div", gm, [
        (A(!0), k(ue, null, He(o.selectedValue, (l, u) => J(e.$slots, "selected-option-container", {
          option: o.normalizeOptionForSlot(l),
          deselect: o.deselect,
          multiple: n.multiple,
          disabled: n.disabled
        }, () => [
          (A(), k("span", {
            key: n.getOptionKey(l),
            class: "vs__selected"
          }, [
            J(e.$slots, "selected-option", Ve(Xe(o.normalizeOptionForSlot(l))), () => [
              pe(Q(n.getOptionLabel(l)), 1)
            ]),
            n.multiple ? (A(), k("button", {
              key: 0,
              ref_for: !0,
              ref: (c) => a.deselectButtons[u] = c,
              disabled: n.disabled,
              type: "button",
              class: "vs__deselect",
              title: `Deselect ${n.getOptionLabel(l)}`,
              "aria-label": `Deselect ${n.getOptionLabel(l)}`,
              onClick: (c) => o.deselect(l)
            }, [
              (A(), oe(Ho(o.childComponents.Deselect)))
            ], 8, ym)) : G("", !0)
          ]))
        ])), 256)),
        J(e.$slots, "search", Ve(Xe(o.scope.search)), () => [
          D("input", Ar({ class: "vs__search" }, o.scope.search.attributes, Vf(o.scope.search.events)), null, 16)
        ])
      ], 512),
      D("div", bm, [
        Be(D("button", {
          ref: "clearButton",
          disabled: n.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: t[0] || (t[0] = (...l) => o.clearSelection && o.clearSelection(...l))
        }, [
          (A(), oe(Ho(o.childComponents.Deselect)))
        ], 8, vm), [
          [Nt, o.showClearButton]
        ]),
        J(e.$slots, "open-indicator", Ve(Xe(o.scope.openIndicator)), () => [
          n.noDrop ? G("", !0) : (A(), oe(Ho(o.childComponents.OpenIndicator), Ve(Ar({ key: 0 }, o.scope.openIndicator.attributes)), null, 16))
        ]),
        J(e.$slots, "spinner", Ve(Xe(o.scope.spinner)), () => [
          Be(D("div", wm, "Loading...", 512), [
            [Nt, e.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, mm),
    ge(rn, { name: n.transition }, {
      default: he(() => [
        o.dropdownOpen ? Be((A(), k("ul", {
          id: `vs${n.uid}__listbox`,
          ref: "dropdownMenu",
          key: `vs${n.uid}__listbox`,
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1",
          onMousedown: t[2] || (t[2] = It((...l) => o.onMousedown && o.onMousedown(...l), ["prevent"])),
          onMouseup: t[3] || (t[3] = (...l) => o.onMouseUp && o.onMouseUp(...l))
        }, [
          J(e.$slots, "list-header", Ve(Xe(o.scope.listHeader))),
          (A(!0), k(ue, null, He(o.filteredOptions, (l, u) => (A(), k("li", {
            id: `vs${n.uid}__option-${u}`,
            key: n.getOptionKey(l),
            role: "option",
            class: X(["vs__dropdown-option", {
              "vs__dropdown-option--deselect": o.isOptionDeselectable(l) && u === e.typeAheadPointer,
              "vs__dropdown-option--selected": o.isOptionSelected(l),
              "vs__dropdown-option--highlight": u === e.typeAheadPointer,
              "vs__dropdown-option--disabled": !n.selectable(l)
            }]),
            "aria-selected": u === e.typeAheadPointer ? !0 : null,
            onMouseover: (c) => n.selectable(l) ? e.typeAheadPointer = u : null,
            onClick: It((c) => n.selectable(l) ? o.select(l) : null, ["prevent", "stop"])
          }, [
            J(e.$slots, "option", Ve(Xe(o.normalizeOptionForSlot(l))), () => [
              pe(Q(n.getOptionLabel(l)), 1)
            ])
          ], 42, Sm))), 128)),
          o.filteredOptions.length === 0 ? (A(), k("li", Em, [
            J(e.$slots, "no-options", Ve(Xe(o.scope.noOptions)), () => [
              Am
            ])
          ])) : G("", !0),
          J(e.$slots, "list-footer", Ve(Xe(o.scope.listFooter)))
        ], 40, xm)), [
          [i]
        ]) : (A(), k("ul", {
          key: 1,
          id: `vs${n.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, Om))
      ]),
      _: 3
    }, 8, ["name"]),
    J(e.$slots, "footer", Ve(Xe(o.scope.footer)))
  ], 10, hm);
}
const _m = /* @__PURE__ */ As(pm, [["render", Cm]]);
const Qw = {
  __name: "DropdownSearchbar",
  props: {
    options: Array,
    label: String,
    placeholder: String
  },
  setup(e) {
    return Dr.add(mu), (t, n) => (A(), oe(q(_m), {
      options: e.options,
      label: e.label,
      placeholder: e.placeholder,
      class: "min-w-44"
    }, null, 8, ["options", "label", "placeholder"]));
  }
}, vt = {
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
    const r = e.$refs.menu.offsetHeight, a = Math.ceil((e.$refs.menu.scrollTop + e.$el.offsetHeight) / r), o = Math.ceil(n / r);
    a !== o && (e.$refs.menu.scrollTop = (o - 1) * e.$refs.menu.offsetHeight);
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
function Tm(e) {
  return new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
}
const gu = {
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
      default: (e, t) => e.match(Tm(t))
    }
  }
}, km = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, Pm = {
  name: "ModelSelect",
  mixins: [gu],
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
      vt.openOptions(this);
    },
    blurInput() {
      vt.blurInput(this);
    },
    closeOptions() {
      vt.closeOptions(this);
    },
    prevItem() {
      vt.prevItem(this);
    },
    nextItem() {
      vt.nextItem(this);
    },
    enterItem() {
      vt.enterItem(this);
    },
    pointerSet(e) {
      vt.pointerSet(this, e);
    },
    pointerAdjust() {
      vt.pointerAdjust(this);
    },
    mousedownItem() {
      vt.mousedownItem(this);
    },
    selectItem(e) {
      this.searchText = "", this.closeOptions(), typeof this.modelValue == "object" && this.modelValue ? this.$emit("update:modelValue", e) : (this.$emit("update:modelValue", e.value), e.value !== void 0 && e.value === e.text && (this.searchText = e.value));
    },
    optionValue(e) {
      return typeof e == "object" && e !== null ? e.value : e;
    }
  }
}, $m = /* @__PURE__ */ D("i", { class: "dropdown icon" }, null, -1), Im = ["disabled", "tabindex", "id", "name", "value"], Dm = ["data-vss-custom-attr"], Fm = ["data-vss-custom-attr", "onClick", "onMouseenter"];
function Lm(e, t, n, r, a, o) {
  return A(), k("div", {
    class: X(["ui fluid search selection dropdown", { "active visible": a.showMenu, error: e.isError, disabled: e.isDisabled }]),
    onClick: t[11] || (t[11] = (...i) => o.openOptions && o.openOptions(...i)),
    onFocus: t[12] || (t[12] = (...i) => o.openOptions && o.openOptions(...i))
  }, [
    $m,
    D("input", {
      class: "search",
      autocomplete: "off",
      disabled: e.isDisabled,
      tabindex: e.isDisabled ? -1 : 0,
      id: e.id,
      name: e.name,
      value: a.searchText,
      onInput: t[0] || (t[0] = (i) => a.searchText = i.target.value),
      ref: "input",
      onFocus: t[1] || (t[1] = It((...i) => o.openOptions && o.openOptions(...i), ["prevent"])),
      onKeyup: [
        t[2] || (t[2] = En((...i) => o.closeOptions && o.closeOptions(...i), ["esc"])),
        t[7] || (t[7] = En(It((...i) => o.enterItem && o.enterItem(...i), ["prevent"]), ["enter"]))
      ],
      onBlur: t[3] || (t[3] = (...i) => o.blurInput && o.blurInput(...i)),
      onKeydown: [
        t[4] || (t[4] = En((...i) => o.prevItem && o.prevItem(...i), ["up"])),
        t[5] || (t[5] = En((...i) => o.nextItem && o.nextItem(...i), ["down"])),
        t[6] || (t[6] = En(It(() => {
        }, ["prevent"]), ["enter"])),
        t[8] || (t[8] = En((...i) => o.deleteTextOrItem && o.deleteTextOrItem(...i), ["delete"]))
      ]
    }, null, 40, Im),
    D("div", {
      class: X(["text", o.textClass]),
      "data-vss-custom-attr": o.searchTextCustomAttr
    }, Q(o.inputText), 11, Dm),
    D("div", {
      class: X(["menu", o.menuClass]),
      ref: "menu",
      onMousedown: t[10] || (t[10] = It(() => {
      }, ["prevent"])),
      style: $n(o.menuStyle),
      tabindex: "-1"
    }, [
      (A(!0), k(ue, null, He(o.filteredOptions, (i, l) => (A(), k("div", {
        key: l,
        class: X(["item", { selected: i.selected || a.pointer === l, disabled: i.disabled }]),
        "data-vss-custom-attr": o.customAttrs[l] ? o.customAttrs[l] : "",
        onClick: It((u) => o.selectItem(i), ["stop"]),
        onMousedown: t[9] || (t[9] = (...u) => o.mousedownItem && o.mousedownItem(...u)),
        onMouseenter: (u) => o.pointerSet(l)
      }, [
        J(e.$slots, "default", {
          option: i,
          idx: l
        }, () => [
          pe(Q(i.text), 1)
        ])
      ], 42, Fm))), 128))
    ], 38)
  ], 34);
}
const Ol = /* @__PURE__ */ km(Pm, [["render", Lm]]), Cl = {
  name: "ModelListSelect",
  mixins: [gu],
  emits: ["blur", "searchchange", "update:modelValue"],
  render: function() {
    return Lt(Ol, {
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
    ModelSelect: Ol
  }
};
const Nm = {
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
    const n = t, r = (a) => {
      let o = [];
      return a.split("_").join(" ").split(" ").map(function(i) {
        o.push(i[0].toUpperCase() + i.slice(1));
      }), o.join(" ");
    };
    return (a, o) => (A(), k("div", null, [
      !e.noLabel && (e.label || e.field) ? (A(), oe(q(Es), {
        key: 0,
        for: e.id ?? e.field,
        value: r(e.label ?? e.field),
        required: e.required
      }, null, 8, ["for", "value", "required"])) : G("", !0),
      e.noForm ? (A(), oe(q(Cl), {
        key: 1,
        id: e.id ?? e.field,
        list: e.list,
        modelValue: e.modelValue,
        "option-value": e.optionValue,
        "option-text": e.optionText,
        "option-disabled": e.optionDisabled,
        placeholder: e.placeholder,
        class: "model-list !relative !mt-0 h-[42px] !max-w-full !rounded !border-gray-300 !shadow",
        "onUpdate:modelValue": o[0] || (o[0] = (i) => n("update:modelValue", i)),
        onSearchchange: o[1] || (o[1] = (i) => n("searchchange", i)),
        "is-disabled": e.disabled,
        filterPredicate: e.filterPredicate
      }, null, 8, ["id", "list", "modelValue", "option-value", "option-text", "option-disabled", "placeholder", "is-disabled", "filterPredicate"])) : (A(), k(ue, { key: 2 }, [
        ge(q(Cl), {
          id: e.id ?? e.field,
          list: e.list,
          modelValue: e.form[e.field],
          "onUpdate:modelValue": [
            o[2] || (o[2] = (i) => e.form[e.field] = i),
            o[3] || (o[3] = (i) => n("update:modelValue", i))
          ],
          "option-value": e.optionValue,
          "option-text": e.optionText,
          "option-disabled": e.optionDisabled,
          placeholder: e.placeholder,
          class: "model-list !relative !mt-0 h-[42px] !max-w-full !rounded !border-gray-300 !px-3 !shadow",
          onSearchchange: o[4] || (o[4] = (i) => n("searchchange", i)),
          "is-disabled": e.disabled,
          filterPredicate: e.filterPredicate
        }, null, 8, ["id", "list", "modelValue", "option-value", "option-text", "option-disabled", "placeholder", "is-disabled", "filterPredicate"]),
        ge(q(Fr), {
          message: e.form.errors[e.field]
        }, null, 8, ["message"])
      ], 64))
    ]));
  }
}, Rm = /* @__PURE__ */ zn(Nm, [["__scopeId", "data-v-80742e76"]]);
function yu(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Mm } = Object.prototype, { getPrototypeOf: Os } = Object, Ha = ((e) => (t) => {
  const n = Mm.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), tt = (e) => (e = e.toLowerCase(), (t) => Ha(t) === e), Wa = (e) => (t) => typeof t === e, { isArray: Un } = Array, _r = Wa("undefined");
function Bm(e) {
  return e !== null && !_r(e) && e.constructor !== null && !_r(e.constructor) && je(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const bu = tt("ArrayBuffer");
function jm(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && bu(e.buffer), t;
}
const zm = Wa("string"), je = Wa("function"), vu = Wa("number"), Ka = (e) => e !== null && typeof e == "object", Um = (e) => e === !0 || e === !1, ya = (e) => {
  if (Ha(e) !== "object")
    return !1;
  const t = Os(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Vm = tt("Date"), qm = tt("File"), Hm = tt("Blob"), Wm = tt("FileList"), Km = (e) => Ka(e) && je(e.pipe), Gm = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || je(e.append) && ((t = Ha(e)) === "formdata" || // detect form-data instance
  t === "object" && je(e.toString) && e.toString() === "[object FormData]"));
}, Ym = tt("URLSearchParams"), [Jm, Xm, Qm, Zm] = ["ReadableStream", "Request", "Response", "Headers"].map(tt), eg = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Lr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, a;
  if (typeof e != "object" && (e = [e]), Un(e))
    for (r = 0, a = e.length; r < a; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let l;
    for (r = 0; r < i; r++)
      l = o[r], t.call(null, e[l], l, e);
  }
}
function wu(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, a;
  for (; r-- > 0; )
    if (a = n[r], t === a.toLowerCase())
      return a;
  return null;
}
const tn = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), xu = (e) => !_r(e) && e !== tn;
function Ui() {
  const { caseless: e } = xu(this) && this || {}, t = {}, n = (r, a) => {
    const o = e && wu(t, a) || a;
    ya(t[o]) && ya(r) ? t[o] = Ui(t[o], r) : ya(r) ? t[o] = Ui({}, r) : Un(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, a = arguments.length; r < a; r++)
    arguments[r] && Lr(arguments[r], n);
  return t;
}
const tg = (e, t, n, { allOwnKeys: r } = {}) => (Lr(t, (a, o) => {
  n && je(a) ? e[o] = yu(a, n) : e[o] = a;
}, { allOwnKeys: r }), e), ng = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), rg = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, ag = (e, t, n, r) => {
  let a, o, i;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (a = Object.getOwnPropertyNames(e), o = a.length; o-- > 0; )
      i = a[o], (!r || r(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && Os(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, og = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, ig = (e) => {
  if (!e)
    return null;
  if (Un(e))
    return e;
  let t = e.length;
  if (!vu(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, sg = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Os(Uint8Array)), lg = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const o = a.value;
    t.call(e, o[0], o[1]);
  }
}, cg = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, ug = tt("HTMLFormElement"), fg = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, a) {
    return r.toUpperCase() + a;
  }
), _l = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), dg = tt("RegExp"), Su = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Lr(n, (a, o) => {
    let i;
    (i = t(a, o, e)) !== !1 && (r[o] = i || a);
  }), Object.defineProperties(e, r);
}, pg = (e) => {
  Su(e, (t, n) => {
    if (je(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (je(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, hg = (e, t) => {
  const n = {}, r = (a) => {
    a.forEach((o) => {
      n[o] = !0;
    });
  };
  return Un(e) ? r(e) : r(String(e).split(t)), n;
}, mg = () => {
}, gg = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, Xo = "abcdefghijklmnopqrstuvwxyz", Tl = "0123456789", Eu = {
  DIGIT: Tl,
  ALPHA: Xo,
  ALPHA_DIGIT: Xo + Xo.toUpperCase() + Tl
}, yg = (e = 16, t = Eu.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function bg(e) {
  return !!(e && je(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const vg = (e) => {
  const t = new Array(10), n = (r, a) => {
    if (Ka(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[a] = r;
        const o = Un(r) ? [] : {};
        return Lr(r, (i, l) => {
          const u = n(i, a + 1);
          !_r(u) && (o[l] = u);
        }), t[a] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, wg = tt("AsyncFunction"), xg = (e) => e && (Ka(e) || je(e)) && je(e.then) && je(e.catch), Au = ((e, t) => e ? setImmediate : t ? ((n, r) => (tn.addEventListener("message", ({ source: a, data: o }) => {
  a === tn && o === n && r.length && r.shift()();
}, !1), (a) => {
  r.push(a), tn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  je(tn.postMessage)
), Sg = typeof queueMicrotask < "u" ? queueMicrotask.bind(tn) : typeof process < "u" && process.nextTick || Au, T = {
  isArray: Un,
  isArrayBuffer: bu,
  isBuffer: Bm,
  isFormData: Gm,
  isArrayBufferView: jm,
  isString: zm,
  isNumber: vu,
  isBoolean: Um,
  isObject: Ka,
  isPlainObject: ya,
  isReadableStream: Jm,
  isRequest: Xm,
  isResponse: Qm,
  isHeaders: Zm,
  isUndefined: _r,
  isDate: Vm,
  isFile: qm,
  isBlob: Hm,
  isRegExp: dg,
  isFunction: je,
  isStream: Km,
  isURLSearchParams: Ym,
  isTypedArray: sg,
  isFileList: Wm,
  forEach: Lr,
  merge: Ui,
  extend: tg,
  trim: eg,
  stripBOM: ng,
  inherits: rg,
  toFlatObject: ag,
  kindOf: Ha,
  kindOfTest: tt,
  endsWith: og,
  toArray: ig,
  forEachEntry: lg,
  matchAll: cg,
  isHTMLForm: ug,
  hasOwnProperty: _l,
  hasOwnProp: _l,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Su,
  freezeMethods: pg,
  toObjectSet: hg,
  toCamelCase: fg,
  noop: mg,
  toFiniteNumber: gg,
  findKey: wu,
  global: tn,
  isContextDefined: xu,
  ALPHABET: Eu,
  generateString: yg,
  isSpecCompliantForm: bg,
  toJSONObject: vg,
  isAsyncFn: wg,
  isThenable: xg,
  setImmediate: Au,
  asap: Sg
};
function te(e, t, n, r, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), a && (this.response = a, this.status = a.status ? a.status : null);
}
T.inherits(te, Error, {
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
      config: T.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Ou = te.prototype, Cu = {};
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
  Cu[e] = { value: e };
});
Object.defineProperties(te, Cu);
Object.defineProperty(Ou, "isAxiosError", { value: !0 });
te.from = (e, t, n, r, a, o) => {
  const i = Object.create(Ou);
  return T.toFlatObject(e, i, function(u) {
    return u !== Error.prototype;
  }, (l) => l !== "isAxiosError"), te.call(i, e.message, t, n, r, a), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Eg = null;
function Vi(e) {
  return T.isPlainObject(e) || T.isArray(e);
}
function _u(e) {
  return T.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function kl(e, t, n) {
  return e ? e.concat(t).map(function(a, o) {
    return a = _u(a), !n && o ? "[" + a + "]" : a;
  }).join(n ? "." : "") : t;
}
function Ag(e) {
  return T.isArray(e) && !e.some(Vi);
}
const Og = T.toFlatObject(T, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ga(e, t, n) {
  if (!T.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = T.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(x, S) {
    return !T.isUndefined(S[x]);
  });
  const r = n.metaTokens, a = n.visitor || f, o = n.dots, i = n.indexes, u = (n.Blob || typeof Blob < "u" && Blob) && T.isSpecCompliantForm(t);
  if (!T.isFunction(a))
    throw new TypeError("visitor must be a function");
  function c(m) {
    if (m === null)
      return "";
    if (T.isDate(m))
      return m.toISOString();
    if (!u && T.isBlob(m))
      throw new te("Blob is not supported. Use a Buffer instead.");
    return T.isArrayBuffer(m) || T.isTypedArray(m) ? u && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function f(m, x, S) {
    let O = m;
    if (m && !S && typeof m == "object") {
      if (T.endsWith(x, "{}"))
        x = r ? x : x.slice(0, -2), m = JSON.stringify(m);
      else if (T.isArray(m) && Ag(m) || (T.isFileList(m) || T.endsWith(x, "[]")) && (O = T.toArray(m)))
        return x = _u(x), O.forEach(function(E, _) {
          !(T.isUndefined(E) || E === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? kl([x], _, o) : i === null ? x : x + "[]",
            c(E)
          );
        }), !1;
    }
    return Vi(m) ? !0 : (t.append(kl(S, x, o), c(m)), !1);
  }
  const h = [], g = Object.assign(Og, {
    defaultVisitor: f,
    convertValue: c,
    isVisitable: Vi
  });
  function C(m, x) {
    if (!T.isUndefined(m)) {
      if (h.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      h.push(m), T.forEach(m, function(O, $) {
        (!(T.isUndefined(O) || O === null) && a.call(
          t,
          O,
          T.isString($) ? $.trim() : $,
          x,
          g
        )) === !0 && C(O, x ? x.concat($) : [$]);
      }), h.pop();
    }
  }
  if (!T.isObject(e))
    throw new TypeError("data must be an object");
  return C(e), t;
}
function Pl(e) {
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
function Cs(e, t) {
  this._pairs = [], e && Ga(e, this, t);
}
const Tu = Cs.prototype;
Tu.append = function(t, n) {
  this._pairs.push([t, n]);
};
Tu.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Pl);
  } : Pl;
  return this._pairs.map(function(a) {
    return n(a[0]) + "=" + n(a[1]);
  }, "").join("&");
};
function Cg(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ku(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Cg;
  T.isFunction(n) && (n = {
    serialize: n
  });
  const a = n && n.serialize;
  let o;
  if (a ? o = a(t, n) : o = T.isURLSearchParams(t) ? t.toString() : new Cs(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class _g {
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
    T.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const $l = _g, Pu = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Tg = typeof URLSearchParams < "u" ? URLSearchParams : Cs, kg = typeof FormData < "u" ? FormData : null, Pg = typeof Blob < "u" ? Blob : null, $g = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Tg,
    FormData: kg,
    Blob: Pg
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, _s = typeof window < "u" && typeof document < "u", qi = typeof navigator == "object" && navigator || void 0, Ig = _s && (!qi || ["ReactNative", "NativeScript", "NS"].indexOf(qi.product) < 0), Dg = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Fg = _s && window.location.href || "http://localhost", Lg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: _s,
  hasStandardBrowserEnv: Ig,
  hasStandardBrowserWebWorkerEnv: Dg,
  navigator: qi,
  origin: Fg
}, Symbol.toStringTag, { value: "Module" })), Te = {
  ...Lg,
  ...$g
};
function Ng(e, t) {
  return Ga(e, new Te.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, a, o) {
      return Te.isNode && T.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Rg(e) {
  return T.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Mg(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const a = n.length;
  let o;
  for (r = 0; r < a; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function $u(e) {
  function t(n, r, a, o) {
    let i = n[o++];
    if (i === "__proto__")
      return !0;
    const l = Number.isFinite(+i), u = o >= n.length;
    return i = !i && T.isArray(a) ? a.length : i, u ? (T.hasOwnProp(a, i) ? a[i] = [a[i], r] : a[i] = r, !l) : ((!a[i] || !T.isObject(a[i])) && (a[i] = []), t(n, r, a[i], o) && T.isArray(a[i]) && (a[i] = Mg(a[i])), !l);
  }
  if (T.isFormData(e) && T.isFunction(e.entries)) {
    const n = {};
    return T.forEachEntry(e, (r, a) => {
      t(Rg(r), a, n, 0);
    }), n;
  }
  return null;
}
function Bg(e, t, n) {
  if (T.isString(e))
    try {
      return (t || JSON.parse)(e), T.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ts = {
  transitional: Pu,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", a = r.indexOf("application/json") > -1, o = T.isObject(t);
    if (o && T.isHTMLForm(t) && (t = new FormData(t)), T.isFormData(t))
      return a ? JSON.stringify($u(t)) : t;
    if (T.isArrayBuffer(t) || T.isBuffer(t) || T.isStream(t) || T.isFile(t) || T.isBlob(t) || T.isReadableStream(t))
      return t;
    if (T.isArrayBufferView(t))
      return t.buffer;
    if (T.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Ng(t, this.formSerializer).toString();
      if ((l = T.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return Ga(
          l ? { "files[]": t } : t,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return o || a ? (n.setContentType("application/json", !1), Bg(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Ts.transitional, r = n && n.forcedJSONParsing, a = this.responseType === "json";
    if (T.isResponse(t) || T.isReadableStream(t))
      return t;
    if (t && T.isString(t) && (r && !this.responseType || a)) {
      const i = !(n && n.silentJSONParsing) && a;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (i)
          throw l.name === "SyntaxError" ? te.from(l, te.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
    FormData: Te.classes.FormData,
    Blob: Te.classes.Blob
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
T.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ts.headers[e] = {};
});
const ks = Ts, jg = T.toObjectSet([
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
]), zg = (e) => {
  const t = {};
  let n, r, a;
  return e && e.split(`
`).forEach(function(i) {
    a = i.indexOf(":"), n = i.substring(0, a).trim().toLowerCase(), r = i.substring(a + 1).trim(), !(!n || t[n] && jg[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Il = Symbol("internals");
function ur(e) {
  return e && String(e).trim().toLowerCase();
}
function ba(e) {
  return e === !1 || e == null ? e : T.isArray(e) ? e.map(ba) : String(e);
}
function Ug(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Vg = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Qo(e, t, n, r, a) {
  if (T.isFunction(r))
    return r.call(this, t, n);
  if (a && (t = n), !!T.isString(t)) {
    if (T.isString(r))
      return t.indexOf(r) !== -1;
    if (T.isRegExp(r))
      return r.test(t);
  }
}
function qg(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Hg(e, t) {
  const n = T.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(a, o, i) {
        return this[r].call(this, t, a, o, i);
      },
      configurable: !0
    });
  });
}
class Ya {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const a = this;
    function o(l, u, c) {
      const f = ur(u);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const h = T.findKey(a, f);
      (!h || a[h] === void 0 || c === !0 || c === void 0 && a[h] !== !1) && (a[h || u] = ba(l));
    }
    const i = (l, u) => T.forEach(l, (c, f) => o(c, f, u));
    if (T.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (T.isString(t) && (t = t.trim()) && !Vg(t))
      i(zg(t), n);
    else if (T.isHeaders(t))
      for (const [l, u] of t.entries())
        o(u, l, r);
    else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = ur(t), t) {
      const r = T.findKey(this, t);
      if (r) {
        const a = this[r];
        if (!n)
          return a;
        if (n === !0)
          return Ug(a);
        if (T.isFunction(n))
          return n.call(this, a, r);
        if (T.isRegExp(n))
          return n.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = ur(t), t) {
      const r = T.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Qo(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let a = !1;
    function o(i) {
      if (i = ur(i), i) {
        const l = T.findKey(r, i);
        l && (!n || Qo(r, r[l], l, n)) && (delete r[l], a = !0);
      }
    }
    return T.isArray(t) ? t.forEach(o) : o(t), a;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, a = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Qo(this, this[o], o, t, !0)) && (delete this[o], a = !0);
    }
    return a;
  }
  normalize(t) {
    const n = this, r = {};
    return T.forEach(this, (a, o) => {
      const i = T.findKey(r, o);
      if (i) {
        n[i] = ba(a), delete n[o];
        return;
      }
      const l = t ? qg(o) : String(o).trim();
      l !== o && delete n[o], n[l] = ba(a), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return T.forEach(this, (r, a) => {
      r != null && r !== !1 && (n[a] = t && T.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((a) => r.set(a)), r;
  }
  static accessor(t) {
    const r = (this[Il] = this[Il] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function o(i) {
      const l = ur(i);
      r[l] || (Hg(a, i), r[l] = !0);
    }
    return T.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Ya.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
T.reduceDescriptors(Ya.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
T.freezeMethods(Ya);
const Ze = Ya;
function Zo(e, t) {
  const n = this || ks, r = t || n, a = Ze.from(r.headers);
  let o = r.data;
  return T.forEach(e, function(l) {
    o = l.call(n, o, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), o;
}
function Iu(e) {
  return !!(e && e.__CANCEL__);
}
function Vn(e, t, n) {
  te.call(this, e ?? "canceled", te.ERR_CANCELED, t, n), this.name = "CanceledError";
}
T.inherits(Vn, te, {
  __CANCEL__: !0
});
function Du(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new te(
    "Request failed with status code " + n.status,
    [te.ERR_BAD_REQUEST, te.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Wg(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Kg(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let a = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const c = Date.now(), f = r[o];
    i || (i = c), n[a] = u, r[a] = c;
    let h = o, g = 0;
    for (; h !== a; )
      g += n[h++], h = h % e;
    if (a = (a + 1) % e, a === o && (o = (o + 1) % e), c - i < t)
      return;
    const C = f && c - f;
    return C ? Math.round(g * 1e3 / C) : void 0;
  };
}
function Gg(e, t) {
  let n = 0, r = 1e3 / t, a, o;
  const i = (c, f = Date.now()) => {
    n = f, a = null, o && (clearTimeout(o), o = null), e.apply(null, c);
  };
  return [(...c) => {
    const f = Date.now(), h = f - n;
    h >= r ? i(c, f) : (a = c, o || (o = setTimeout(() => {
      o = null, i(a);
    }, r - h)));
  }, () => a && i(a)];
}
const Ta = (e, t, n = 3) => {
  let r = 0;
  const a = Kg(50, 250);
  return Gg((o) => {
    const i = o.loaded, l = o.lengthComputable ? o.total : void 0, u = i - r, c = a(u), f = i <= l;
    r = i;
    const h = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: u,
      rate: c || void 0,
      estimated: c && l && f ? (l - i) / c : void 0,
      event: o,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(h);
  }, n);
}, Dl = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Fl = (e) => (...t) => T.asap(() => e(...t)), Yg = Te.hasStandardBrowserEnv ? ((e, t) => (n) => (n = new URL(n, Te.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(Te.origin),
  Te.navigator && /(msie|trident)/i.test(Te.navigator.userAgent)
) : () => !0, Jg = Te.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, a, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      T.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), T.isString(r) && i.push("path=" + r), T.isString(a) && i.push("domain=" + a), o === !0 && i.push("secure"), document.cookie = i.join("; ");
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
function Xg(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Qg(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Fu(e, t) {
  return e && !Xg(t) ? Qg(e, t) : t;
}
const Ll = (e) => e instanceof Ze ? { ...e } : e;
function cn(e, t) {
  t = t || {};
  const n = {};
  function r(c, f, h, g) {
    return T.isPlainObject(c) && T.isPlainObject(f) ? T.merge.call({ caseless: g }, c, f) : T.isPlainObject(f) ? T.merge({}, f) : T.isArray(f) ? f.slice() : f;
  }
  function a(c, f, h, g) {
    if (T.isUndefined(f)) {
      if (!T.isUndefined(c))
        return r(void 0, c, h, g);
    } else
      return r(c, f, h, g);
  }
  function o(c, f) {
    if (!T.isUndefined(f))
      return r(void 0, f);
  }
  function i(c, f) {
    if (T.isUndefined(f)) {
      if (!T.isUndefined(c))
        return r(void 0, c);
    } else
      return r(void 0, f);
  }
  function l(c, f, h) {
    if (h in t)
      return r(c, f);
    if (h in e)
      return r(void 0, c);
  }
  const u = {
    url: o,
    method: o,
    data: o,
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
    validateStatus: l,
    headers: (c, f, h) => a(Ll(c), Ll(f), h, !0)
  };
  return T.forEach(Object.keys(Object.assign({}, e, t)), function(f) {
    const h = u[f] || a, g = h(e[f], t[f], f);
    T.isUndefined(g) && h !== l || (n[f] = g);
  }), n;
}
const Lu = (e) => {
  const t = cn({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: a, xsrfCookieName: o, headers: i, auth: l } = t;
  t.headers = i = Ze.from(i), t.url = ku(Fu(t.baseURL, t.url), e.params, e.paramsSerializer), l && i.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let u;
  if (T.isFormData(n)) {
    if (Te.hasStandardBrowserEnv || Te.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((u = i.getContentType()) !== !1) {
      const [c, ...f] = u ? u.split(";").map((h) => h.trim()).filter(Boolean) : [];
      i.setContentType([c || "multipart/form-data", ...f].join("; "));
    }
  }
  if (Te.hasStandardBrowserEnv && (r && T.isFunction(r) && (r = r(t)), r || r !== !1 && Yg(t.url))) {
    const c = a && o && Jg.read(o);
    c && i.set(a, c);
  }
  return t;
}, Zg = typeof XMLHttpRequest < "u", ey = Zg && function(e) {
  return new Promise(function(n, r) {
    const a = Lu(e);
    let o = a.data;
    const i = Ze.from(a.headers).normalize();
    let { responseType: l, onUploadProgress: u, onDownloadProgress: c } = a, f, h, g, C, m;
    function x() {
      C && C(), m && m(), a.cancelToken && a.cancelToken.unsubscribe(f), a.signal && a.signal.removeEventListener("abort", f);
    }
    let S = new XMLHttpRequest();
    S.open(a.method.toUpperCase(), a.url, !0), S.timeout = a.timeout;
    function O() {
      if (!S)
        return;
      const E = Ze.from(
        "getAllResponseHeaders" in S && S.getAllResponseHeaders()
      ), I = {
        data: !l || l === "text" || l === "json" ? S.responseText : S.response,
        status: S.status,
        statusText: S.statusText,
        headers: E,
        config: e,
        request: S
      };
      Du(function(z) {
        n(z), x();
      }, function(z) {
        r(z), x();
      }, I), S = null;
    }
    "onloadend" in S ? S.onloadend = O : S.onreadystatechange = function() {
      !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0) || setTimeout(O);
    }, S.onabort = function() {
      S && (r(new te("Request aborted", te.ECONNABORTED, e, S)), S = null);
    }, S.onerror = function() {
      r(new te("Network Error", te.ERR_NETWORK, e, S)), S = null;
    }, S.ontimeout = function() {
      let _ = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const I = a.transitional || Pu;
      a.timeoutErrorMessage && (_ = a.timeoutErrorMessage), r(new te(
        _,
        I.clarifyTimeoutError ? te.ETIMEDOUT : te.ECONNABORTED,
        e,
        S
      )), S = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in S && T.forEach(i.toJSON(), function(_, I) {
      S.setRequestHeader(I, _);
    }), T.isUndefined(a.withCredentials) || (S.withCredentials = !!a.withCredentials), l && l !== "json" && (S.responseType = a.responseType), c && ([g, m] = Ta(c, !0), S.addEventListener("progress", g)), u && S.upload && ([h, C] = Ta(u), S.upload.addEventListener("progress", h), S.upload.addEventListener("loadend", C)), (a.cancelToken || a.signal) && (f = (E) => {
      S && (r(!E || E.type ? new Vn(null, e, S) : E), S.abort(), S = null);
    }, a.cancelToken && a.cancelToken.subscribe(f), a.signal && (a.signal.aborted ? f() : a.signal.addEventListener("abort", f)));
    const $ = Wg(a.url);
    if ($ && Te.protocols.indexOf($) === -1) {
      r(new te("Unsupported protocol " + $ + ":", te.ERR_BAD_REQUEST, e));
      return;
    }
    S.send(o || null);
  });
}, ty = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), a;
    const o = function(c) {
      if (!a) {
        a = !0, l();
        const f = c instanceof Error ? c : this.reason;
        r.abort(f instanceof te ? f : new Vn(f instanceof Error ? f.message : f));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new te(`timeout ${t} of ms exceeded`, te.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(o) : c.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((c) => c.addEventListener("abort", o));
    const { signal: u } = r;
    return u.unsubscribe = () => T.asap(l), u;
  }
}, ny = ty, ry = function* (e, t) {
  let n = e.byteLength;
  if (!t || n < t) {
    yield e;
    return;
  }
  let r = 0, a;
  for (; r < n; )
    a = r + t, yield e.slice(r, a), r = a;
}, ay = async function* (e, t) {
  for await (const n of oy(e))
    yield* ry(n, t);
}, oy = async function* (e) {
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
}, Nl = (e, t, n, r) => {
  const a = ay(e, t);
  let o = 0, i, l = (u) => {
    i || (i = !0, r && r(u));
  };
  return new ReadableStream({
    async pull(u) {
      try {
        const { done: c, value: f } = await a.next();
        if (c) {
          l(), u.close();
          return;
        }
        let h = f.byteLength;
        if (n) {
          let g = o += h;
          n(g);
        }
        u.enqueue(new Uint8Array(f));
      } catch (c) {
        throw l(c), c;
      }
    },
    cancel(u) {
      return l(u), a.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ja = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Nu = Ja && typeof ReadableStream == "function", iy = Ja && (typeof TextEncoder == "function" ? ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Ru = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, sy = Nu && Ru(() => {
  let e = !1;
  const t = new Request(Te.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Rl = 64 * 1024, Hi = Nu && Ru(() => T.isReadableStream(new Response("").body)), ka = {
  stream: Hi && ((e) => e.body)
};
Ja && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !ka[t] && (ka[t] = T.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new te(`Response type '${t}' is not supported`, te.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const ly = async (e) => {
  if (e == null)
    return 0;
  if (T.isBlob(e))
    return e.size;
  if (T.isSpecCompliantForm(e))
    return (await new Request(Te.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (T.isArrayBufferView(e) || T.isArrayBuffer(e))
    return e.byteLength;
  if (T.isURLSearchParams(e) && (e = e + ""), T.isString(e))
    return (await iy(e)).byteLength;
}, cy = async (e, t) => {
  const n = T.toFiniteNumber(e.getContentLength());
  return n ?? ly(t);
}, uy = Ja && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: a,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: l,
    onUploadProgress: u,
    responseType: c,
    headers: f,
    withCredentials: h = "same-origin",
    fetchOptions: g
  } = Lu(e);
  c = c ? (c + "").toLowerCase() : "text";
  let C = ny([a, o && o.toAbortSignal()], i), m;
  const x = C && C.unsubscribe && (() => {
    C.unsubscribe();
  });
  let S;
  try {
    if (u && sy && n !== "get" && n !== "head" && (S = await cy(f, r)) !== 0) {
      let I = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), j;
      if (T.isFormData(r) && (j = I.headers.get("content-type")) && f.setContentType(j), I.body) {
        const [z, B] = Dl(
          S,
          Ta(Fl(u))
        );
        r = Nl(I.body, Rl, z, B);
      }
    }
    T.isString(h) || (h = h ? "include" : "omit");
    const O = "credentials" in Request.prototype;
    m = new Request(t, {
      ...g,
      signal: C,
      method: n.toUpperCase(),
      headers: f.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: O ? h : void 0
    });
    let $ = await fetch(m);
    const E = Hi && (c === "stream" || c === "response");
    if (Hi && (l || E && x)) {
      const I = {};
      ["status", "statusText", "headers"].forEach((M) => {
        I[M] = $[M];
      });
      const j = T.toFiniteNumber($.headers.get("content-length")), [z, B] = l && Dl(
        j,
        Ta(Fl(l), !0)
      ) || [];
      $ = new Response(
        Nl($.body, Rl, z, () => {
          B && B(), x && x();
        }),
        I
      );
    }
    c = c || "text";
    let _ = await ka[T.findKey(ka, c) || "text"]($, e);
    return !E && x && x(), await new Promise((I, j) => {
      Du(I, j, {
        data: _,
        headers: Ze.from($.headers),
        status: $.status,
        statusText: $.statusText,
        config: e,
        request: m
      });
    });
  } catch (O) {
    throw x && x(), O && O.name === "TypeError" && /fetch/i.test(O.message) ? Object.assign(
      new te("Network Error", te.ERR_NETWORK, e, m),
      {
        cause: O.cause || O
      }
    ) : te.from(O, O && O.code, e, m);
  }
}), Wi = {
  http: Eg,
  xhr: ey,
  fetch: uy
};
T.forEach(Wi, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ml = (e) => `- ${e}`, fy = (e) => T.isFunction(e) || e === null || e === !1, Mu = {
  getAdapter: (e) => {
    e = T.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const a = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !fy(n) && (r = Wi[(i = String(n)).toLowerCase()], r === void 0))
        throw new te(`Unknown adapter '${i}'`);
      if (r)
        break;
      a[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(a).map(
        ([l, u]) => `adapter ${l} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(Ml).join(`
`) : " " + Ml(o[0]) : "as no adapter specified";
      throw new te(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Wi
};
function ei(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Vn(null, e);
}
function Bl(e) {
  return ei(e), e.headers = Ze.from(e.headers), e.data = Zo.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Mu.getAdapter(e.adapter || ks.adapter)(e).then(function(r) {
    return ei(e), r.data = Zo.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Ze.from(r.headers), r;
  }, function(r) {
    return Iu(r) || (ei(e), r && r.response && (r.response.data = Zo.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Ze.from(r.response.headers))), Promise.reject(r);
  });
}
const Bu = "1.7.8", Xa = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Xa[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const jl = {};
Xa.transitional = function(t, n, r) {
  function a(o, i) {
    return "[Axios v" + Bu + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, l) => {
    if (t === !1)
      throw new te(
        a(i, " has been removed" + (n ? " in " + n : "")),
        te.ERR_DEPRECATED
      );
    return n && !jl[i] && (jl[i] = !0, console.warn(
      a(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, l) : !0;
  };
};
Xa.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function dy(e, t, n) {
  if (typeof e != "object")
    throw new te("options must be an object", te.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let a = r.length;
  for (; a-- > 0; ) {
    const o = r[a], i = t[o];
    if (i) {
      const l = e[o], u = l === void 0 || i(l, o, e);
      if (u !== !0)
        throw new te("option " + o + " must be " + u, te.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new te("Unknown option " + o, te.ERR_BAD_OPTION);
  }
}
const va = {
  assertOptions: dy,
  validators: Xa
}, it = va.validators;
class Pa {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new $l(),
      response: new $l()
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
        let a = {};
        Error.captureStackTrace ? Error.captureStackTrace(a) : a = new Error();
        const o = a.stack ? a.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = cn(this.defaults, n);
    const { transitional: r, paramsSerializer: a, headers: o } = n;
    r !== void 0 && va.assertOptions(r, {
      silentJSONParsing: it.transitional(it.boolean),
      forcedJSONParsing: it.transitional(it.boolean),
      clarifyTimeoutError: it.transitional(it.boolean)
    }, !1), a != null && (T.isFunction(a) ? n.paramsSerializer = {
      serialize: a
    } : va.assertOptions(a, {
      encode: it.function,
      serialize: it.function
    }, !0)), va.assertOptions(n, {
      baseUrl: it.spelling("baseURL"),
      withXsrfToken: it.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && T.merge(
      o.common,
      o[n.method]
    );
    o && T.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete o[m];
      }
    ), n.headers = Ze.concat(i, o);
    const l = [];
    let u = !0;
    this.interceptors.request.forEach(function(x) {
      typeof x.runWhen == "function" && x.runWhen(n) === !1 || (u = u && x.synchronous, l.unshift(x.fulfilled, x.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(x) {
      c.push(x.fulfilled, x.rejected);
    });
    let f, h = 0, g;
    if (!u) {
      const m = [Bl.bind(this), void 0];
      for (m.unshift.apply(m, l), m.push.apply(m, c), g = m.length, f = Promise.resolve(n); h < g; )
        f = f.then(m[h++], m[h++]);
      return f;
    }
    g = l.length;
    let C = n;
    for (h = 0; h < g; ) {
      const m = l[h++], x = l[h++];
      try {
        C = m(C);
      } catch (S) {
        x.call(this, S);
        break;
      }
    }
    try {
      f = Bl.call(this, C);
    } catch (m) {
      return Promise.reject(m);
    }
    for (h = 0, g = c.length; h < g; )
      f = f.then(c[h++], c[h++]);
    return f;
  }
  getUri(t) {
    t = cn(this.defaults, t);
    const n = Fu(t.baseURL, t.url);
    return ku(n, t.params, t.paramsSerializer);
  }
}
T.forEach(["delete", "get", "head", "options"], function(t) {
  Pa.prototype[t] = function(n, r) {
    return this.request(cn(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
T.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, l) {
      return this.request(cn(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  Pa.prototype[t] = n(), Pa.prototype[t + "Form"] = n(!0);
});
const wa = Pa;
class Ps {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((a) => {
      if (!r._listeners)
        return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](a);
      r._listeners = null;
    }), this.promise.then = (a) => {
      let o;
      const i = new Promise((l) => {
        r.subscribe(l), o = l;
      }).then(a);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, l) {
      r.reason || (r.reason = new Vn(o, i, l), n(r.reason));
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
      token: new Ps(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
}
const py = Ps;
function hy(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function my(e) {
  return T.isObject(e) && e.isAxiosError === !0;
}
const Ki = {
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
Object.entries(Ki).forEach(([e, t]) => {
  Ki[t] = e;
});
const gy = Ki;
function ju(e) {
  const t = new wa(e), n = yu(wa.prototype.request, t);
  return T.extend(n, wa.prototype, t, { allOwnKeys: !0 }), T.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(a) {
    return ju(cn(e, a));
  }, n;
}
const ve = ju(ks);
ve.Axios = wa;
ve.CanceledError = Vn;
ve.CancelToken = py;
ve.isCancel = Iu;
ve.VERSION = Bu;
ve.toFormData = Ga;
ve.AxiosError = te;
ve.Cancel = ve.CanceledError;
ve.all = function(t) {
  return Promise.all(t);
};
ve.spread = hy;
ve.isAxiosError = my;
ve.mergeConfig = cn;
ve.AxiosHeaders = Ze;
ve.formToJSON = (e) => $u(T.isHTMLForm(e) ? new FormData(e) : e);
ve.getAdapter = Mu.getAdapter;
ve.HttpStatusCode = gy;
ve.default = ve;
const zl = ve;
var qe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $s(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function yy(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var a = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var by = function(t) {
  return vy(t) && !wy(t);
};
function vy(e) {
  return !!e && typeof e == "object";
}
function wy(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || Ey(e);
}
var xy = typeof Symbol == "function" && Symbol.for, Sy = xy ? Symbol.for("react.element") : 60103;
function Ey(e) {
  return e.$$typeof === Sy;
}
function Ay(e) {
  return Array.isArray(e) ? [] : {};
}
function Tr(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? Nn(Ay(e), e, t) : e;
}
function Oy(e, t, n) {
  return e.concat(t).map(function(r) {
    return Tr(r, n);
  });
}
function Cy(e, t) {
  if (!t.customMerge)
    return Nn;
  var n = t.customMerge(e);
  return typeof n == "function" ? n : Nn;
}
function _y(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function Ul(e) {
  return Object.keys(e).concat(_y(e));
}
function zu(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function Ty(e, t) {
  return zu(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function ky(e, t, n) {
  var r = {};
  return n.isMergeableObject(e) && Ul(e).forEach(function(a) {
    r[a] = Tr(e[a], n);
  }), Ul(t).forEach(function(a) {
    Ty(e, a) || (zu(e, a) && n.isMergeableObject(t[a]) ? r[a] = Cy(a, n)(e[a], t[a], n) : r[a] = Tr(t[a], n));
  }), r;
}
function Nn(e, t, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || Oy, n.isMergeableObject = n.isMergeableObject || by, n.cloneUnlessOtherwiseSpecified = Tr;
  var r = Array.isArray(t), a = Array.isArray(e), o = r === a;
  return o ? r ? n.arrayMerge(e, t, n) : ky(e, t, n) : Tr(t, n);
}
Nn.all = function(t, n) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(r, a) {
    return Nn(r, a, n);
  }, {});
};
var Py = Nn, $y = Py;
const Iy = /* @__PURE__ */ $s($y);
var Dy = Error, Fy = EvalError, Ly = RangeError, Ny = ReferenceError, Uu = SyntaxError, Nr = TypeError, Ry = URIError, My = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var t = {}, n = Symbol("test"), r = Object(n);
  if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
    return !1;
  var a = 42;
  t[n] = a;
  for (var o in t)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
    return !1;
  var i = Object.getOwnPropertySymbols(t);
  if (i.length !== 1 || i[0] !== n || !Object.prototype.propertyIsEnumerable.call(t, n))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var l = (
      /** @type {PropertyDescriptor} */
      Object.getOwnPropertyDescriptor(t, n)
    );
    if (l.value !== a || l.enumerable !== !0)
      return !1;
  }
  return !0;
}, Vl = typeof Symbol < "u" && Symbol, By = My, jy = function() {
  return typeof Vl != "function" || typeof Symbol != "function" || typeof Vl("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : By();
}, ti = {
  __proto__: null,
  foo: {}
}, zy = { __proto__: ti }.foo === ti.foo && !(ti instanceof Object), Uy = function() {
  return zy;
}, Vy = "Function.prototype.bind called on incompatible ", qy = Object.prototype.toString, Hy = Math.max, Wy = "[object Function]", ql = function(t, n) {
  for (var r = [], a = 0; a < t.length; a += 1)
    r[a] = t[a];
  for (var o = 0; o < n.length; o += 1)
    r[o + t.length] = n[o];
  return r;
}, Ky = function(t, n) {
  for (var r = [], a = n || 0, o = 0; a < t.length; a += 1, o += 1)
    r[o] = t[a];
  return r;
}, Gy = function(e, t) {
  for (var n = "", r = 0; r < e.length; r += 1)
    n += e[r], r + 1 < e.length && (n += t);
  return n;
}, Yy = function(t) {
  var n = this;
  if (typeof n != "function" || qy.apply(n) !== Wy)
    throw new TypeError(Vy + n);
  for (var r = Ky(arguments, 1), a, o = function() {
    if (this instanceof a) {
      var f = n.apply(
        this,
        ql(r, arguments)
      );
      return Object(f) === f ? f : this;
    }
    return n.apply(
      t,
      ql(r, arguments)
    );
  }, i = Hy(0, n.length - r.length), l = [], u = 0; u < i; u++)
    l[u] = "$" + u;
  if (a = Function("binder", "return function (" + Gy(l, ",") + "){ return binder.apply(this,arguments); }")(o), n.prototype) {
    var c = function() {
    };
    c.prototype = n.prototype, a.prototype = new c(), c.prototype = null;
  }
  return a;
}, Jy = Yy, Is = Function.prototype.bind || Jy, Xy = Function.prototype.call, Qy = Object.prototype.hasOwnProperty, Zy = Is, e0 = Zy.call(Xy, Qy), ne, t0 = Dy, n0 = Fy, r0 = Ly, a0 = Ny, Rn = Uu, Dn = Nr, o0 = Ry, Vu = Function, ni = function(e) {
  try {
    return Vu('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, an = Object.getOwnPropertyDescriptor;
if (an)
  try {
    an({}, "");
  } catch {
    an = null;
  }
var ri = function() {
  throw new Dn();
}, i0 = an ? function() {
  try {
    return arguments.callee, ri;
  } catch {
    try {
      return an(arguments, "callee").get;
    } catch {
      return ri;
    }
  }
}() : ri, On = jy(), s0 = Uy(), Se = Object.getPrototypeOf || (s0 ? function(e) {
  return e.__proto__;
} : null), Tn = {}, l0 = typeof Uint8Array > "u" || !Se ? ne : Se(Uint8Array), on = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? ne : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? ne : ArrayBuffer,
  "%ArrayIteratorPrototype%": On && Se ? Se([][Symbol.iterator]()) : ne,
  "%AsyncFromSyncIteratorPrototype%": ne,
  "%AsyncFunction%": Tn,
  "%AsyncGenerator%": Tn,
  "%AsyncGeneratorFunction%": Tn,
  "%AsyncIteratorPrototype%": Tn,
  "%Atomics%": typeof Atomics > "u" ? ne : Atomics,
  "%BigInt%": typeof BigInt > "u" ? ne : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? ne : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? ne : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? ne : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": t0,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": n0,
  "%Float32Array%": typeof Float32Array > "u" ? ne : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? ne : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? ne : FinalizationRegistry,
  "%Function%": Vu,
  "%GeneratorFunction%": Tn,
  "%Int8Array%": typeof Int8Array > "u" ? ne : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? ne : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? ne : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": On && Se ? Se(Se([][Symbol.iterator]())) : ne,
  "%JSON%": typeof JSON == "object" ? JSON : ne,
  "%Map%": typeof Map > "u" ? ne : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !On || !Se ? ne : Se((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? ne : Promise,
  "%Proxy%": typeof Proxy > "u" ? ne : Proxy,
  "%RangeError%": r0,
  "%ReferenceError%": a0,
  "%Reflect%": typeof Reflect > "u" ? ne : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? ne : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !On || !Se ? ne : Se((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? ne : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": On && Se ? Se(""[Symbol.iterator]()) : ne,
  "%Symbol%": On ? Symbol : ne,
  "%SyntaxError%": Rn,
  "%ThrowTypeError%": i0,
  "%TypedArray%": l0,
  "%TypeError%": Dn,
  "%Uint8Array%": typeof Uint8Array > "u" ? ne : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? ne : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? ne : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? ne : Uint32Array,
  "%URIError%": o0,
  "%WeakMap%": typeof WeakMap > "u" ? ne : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? ne : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? ne : WeakSet
};
if (Se)
  try {
    null.error;
  } catch (e) {
    var c0 = Se(Se(e));
    on["%Error.prototype%"] = c0;
  }
var u0 = function e(t) {
  var n;
  if (t === "%AsyncFunction%")
    n = ni("async function () {}");
  else if (t === "%GeneratorFunction%")
    n = ni("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    n = ni("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var r = e("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var a = e("%AsyncGenerator%");
    a && Se && (n = Se(a.prototype));
  }
  return on[t] = n, n;
}, Hl = {
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
}, Rr = Is, $a = e0, f0 = Rr.call(Function.call, Array.prototype.concat), d0 = Rr.call(Function.apply, Array.prototype.splice), Wl = Rr.call(Function.call, String.prototype.replace), Ia = Rr.call(Function.call, String.prototype.slice), p0 = Rr.call(Function.call, RegExp.prototype.exec), h0 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, m0 = /\\(\\)?/g, g0 = function(t) {
  var n = Ia(t, 0, 1), r = Ia(t, -1);
  if (n === "%" && r !== "%")
    throw new Rn("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new Rn("invalid intrinsic syntax, expected opening `%`");
  var a = [];
  return Wl(t, h0, function(o, i, l, u) {
    a[a.length] = l ? Wl(u, m0, "$1") : i || o;
  }), a;
}, y0 = function(t, n) {
  var r = t, a;
  if ($a(Hl, r) && (a = Hl[r], r = "%" + a[0] + "%"), $a(on, r)) {
    var o = on[r];
    if (o === Tn && (o = u0(r)), typeof o > "u" && !n)
      throw new Dn("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: a,
      name: r,
      value: o
    };
  }
  throw new Rn("intrinsic " + t + " does not exist!");
}, qn = function(t, n) {
  if (typeof t != "string" || t.length === 0)
    throw new Dn("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new Dn('"allowMissing" argument must be a boolean');
  if (p0(/^%?[^%]*%?$/, t) === null)
    throw new Rn("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = g0(t), a = r.length > 0 ? r[0] : "", o = y0("%" + a + "%", n), i = o.name, l = o.value, u = !1, c = o.alias;
  c && (a = c[0], d0(r, f0([0, 1], c)));
  for (var f = 1, h = !0; f < r.length; f += 1) {
    var g = r[f], C = Ia(g, 0, 1), m = Ia(g, -1);
    if ((C === '"' || C === "'" || C === "`" || m === '"' || m === "'" || m === "`") && C !== m)
      throw new Rn("property names with quotes must have matching quotes");
    if ((g === "constructor" || !h) && (u = !0), a += "." + g, i = "%" + a + "%", $a(on, i))
      l = on[i];
    else if (l != null) {
      if (!(g in l)) {
        if (!n)
          throw new Dn("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (an && f + 1 >= r.length) {
        var x = an(l, g);
        h = !!x, h && "get" in x && !("originalValue" in x.get) ? l = x.get : l = l[g];
      } else
        h = $a(l, g), l = l[g];
      h && !u && (on[i] = l);
    }
  }
  return l;
}, qu = { exports: {} }, ai, Kl;
function Ds() {
  if (Kl)
    return ai;
  Kl = 1;
  var e = qn, t = e("%Object.defineProperty%", !0) || !1;
  if (t)
    try {
      t({}, "a", { value: 1 });
    } catch {
      t = !1;
    }
  return ai = t, ai;
}
var b0 = qn, xa = b0("%Object.getOwnPropertyDescriptor%", !0);
if (xa)
  try {
    xa([], "length");
  } catch {
    xa = null;
  }
var Hu = xa, Gl = Ds(), v0 = Uu, Cn = Nr, Yl = Hu, w0 = function(t, n, r) {
  if (!t || typeof t != "object" && typeof t != "function")
    throw new Cn("`obj` must be an object or a function`");
  if (typeof n != "string" && typeof n != "symbol")
    throw new Cn("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new Cn("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new Cn("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new Cn("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new Cn("`loose`, if provided, must be a boolean");
  var a = arguments.length > 3 ? arguments[3] : null, o = arguments.length > 4 ? arguments[4] : null, i = arguments.length > 5 ? arguments[5] : null, l = arguments.length > 6 ? arguments[6] : !1, u = !!Yl && Yl(t, n);
  if (Gl)
    Gl(t, n, {
      configurable: i === null && u ? u.configurable : !i,
      enumerable: a === null && u ? u.enumerable : !a,
      value: r,
      writable: o === null && u ? u.writable : !o
    });
  else if (l || !a && !o && !i)
    t[n] = r;
  else
    throw new v0("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, Gi = Ds(), Wu = function() {
  return !!Gi;
};
Wu.hasArrayLengthDefineBug = function() {
  if (!Gi)
    return null;
  try {
    return Gi([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var x0 = Wu, S0 = qn, Jl = w0, E0 = x0(), Xl = Hu, Ql = Nr, A0 = S0("%Math.floor%"), O0 = function(t, n) {
  if (typeof t != "function")
    throw new Ql("`fn` is not a function");
  if (typeof n != "number" || n < 0 || n > 4294967295 || A0(n) !== n)
    throw new Ql("`length` must be a positive 32-bit integer");
  var r = arguments.length > 2 && !!arguments[2], a = !0, o = !0;
  if ("length" in t && Xl) {
    var i = Xl(t, "length");
    i && !i.configurable && (a = !1), i && !i.writable && (o = !1);
  }
  return (a || o || !r) && (E0 ? Jl(
    /** @type {Parameters<define>[0]} */
    t,
    "length",
    n,
    !0,
    !0
  ) : Jl(
    /** @type {Parameters<define>[0]} */
    t,
    "length",
    n
  )), t;
};
(function(e) {
  var t = Is, n = qn, r = O0, a = Nr, o = n("%Function.prototype.apply%"), i = n("%Function.prototype.call%"), l = n("%Reflect.apply%", !0) || t.call(i, o), u = Ds(), c = n("%Math.max%");
  e.exports = function(g) {
    if (typeof g != "function")
      throw new a("a function is required");
    var C = l(t, i, arguments);
    return r(
      C,
      1 + c(0, g.length - (arguments.length - 1)),
      !0
    );
  };
  var f = function() {
    return l(t, o, arguments);
  };
  u ? u(e.exports, "apply", { value: f }) : e.exports.apply = f;
})(qu);
var C0 = qu.exports, Ku = qn, Gu = C0, _0 = Gu(Ku("String.prototype.indexOf")), T0 = function(t, n) {
  var r = Ku(t, !!n);
  return typeof r == "function" && _0(t, ".prototype.") > -1 ? Gu(r) : r;
};
const k0 = {}, P0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: k0
}, Symbol.toStringTag, { value: "Module" })), Yi = /* @__PURE__ */ yy(P0);
var Fs = typeof Map == "function" && Map.prototype, oi = Object.getOwnPropertyDescriptor && Fs ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Da = Fs && oi && typeof oi.get == "function" ? oi.get : null, Zl = Fs && Map.prototype.forEach, Ls = typeof Set == "function" && Set.prototype, ii = Object.getOwnPropertyDescriptor && Ls ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Fa = Ls && ii && typeof ii.get == "function" ? ii.get : null, ec = Ls && Set.prototype.forEach, $0 = typeof WeakMap == "function" && WeakMap.prototype, xr = $0 ? WeakMap.prototype.has : null, I0 = typeof WeakSet == "function" && WeakSet.prototype, Sr = I0 ? WeakSet.prototype.has : null, D0 = typeof WeakRef == "function" && WeakRef.prototype, tc = D0 ? WeakRef.prototype.deref : null, F0 = Boolean.prototype.valueOf, L0 = Object.prototype.toString, N0 = Function.prototype.toString, R0 = String.prototype.match, Ns = String.prototype.slice, Dt = String.prototype.replace, M0 = String.prototype.toUpperCase, nc = String.prototype.toLowerCase, Yu = RegExp.prototype.test, rc = Array.prototype.concat, ct = Array.prototype.join, B0 = Array.prototype.slice, ac = Math.floor, Ji = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, si = Object.getOwnPropertySymbols, Xi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Mn = typeof Symbol == "function" && typeof Symbol.iterator == "object", Pe = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Mn || "symbol") ? Symbol.toStringTag : null, Ju = Object.prototype.propertyIsEnumerable, oc = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function ic(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || Yu.call(/e/, t))
    return t;
  var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var r = e < 0 ? -ac(-e) : ac(e);
    if (r !== e) {
      var a = String(r), o = Ns.call(t, a.length + 1);
      return Dt.call(a, n, "$&_") + "." + Dt.call(Dt.call(o, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Dt.call(t, n, "$&_");
}
var Qi = Yi, sc = Qi.custom, lc = Zu(sc) ? sc : null, Xu = {
  __proto__: null,
  double: '"',
  single: "'"
}, j0 = {
  __proto__: null,
  double: /(["\\])/g,
  single: /(['\\])/g
}, z0 = function e(t, n, r, a) {
  var o = n || {};
  if (St(o, "quoteStyle") && !St(Xu, o.quoteStyle))
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (St(o, "maxStringLength") && (typeof o.maxStringLength == "number" ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0 : o.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var i = St(o, "customInspect") ? o.customInspect : !0;
  if (typeof i != "boolean" && i !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (St(o, "indent") && o.indent !== null && o.indent !== "	" && !(parseInt(o.indent, 10) === o.indent && o.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (St(o, "numericSeparator") && typeof o.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var l = o.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return tf(t, o);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var u = String(t);
    return l ? ic(t, u) : u;
  }
  if (typeof t == "bigint") {
    var c = String(t) + "n";
    return l ? ic(t, c) : c;
  }
  var f = typeof o.depth > "u" ? 5 : o.depth;
  if (typeof r > "u" && (r = 0), r >= f && f > 0 && typeof t == "object")
    return Zi(t) ? "[Array]" : "[Object]";
  var h = ob(o, r);
  if (typeof a > "u")
    a = [];
  else if (ef(a, t) >= 0)
    return "[Circular]";
  function g(b, w, y) {
    if (w && (a = B0.call(a), a.push(w)), y) {
      var U = {
        depth: o.depth
      };
      return St(o, "quoteStyle") && (U.quoteStyle = o.quoteStyle), e(b, U, r + 1, a);
    }
    return e(b, o, r + 1, a);
  }
  if (typeof t == "function" && !cc(t)) {
    var C = J0(t), m = ca(t, g);
    return "[Function" + (C ? ": " + C : " (anonymous)") + "]" + (m.length > 0 ? " { " + ct.call(m, ", ") + " }" : "");
  }
  if (Zu(t)) {
    var x = Mn ? Dt.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Xi.call(t);
    return typeof t == "object" && !Mn ? fr(x) : x;
  }
  if (nb(t)) {
    for (var S = "<" + nc.call(String(t.nodeName)), O = t.attributes || [], $ = 0; $ < O.length; $++)
      S += " " + O[$].name + "=" + Qu(U0(O[$].value), "double", o);
    return S += ">", t.childNodes && t.childNodes.length && (S += "..."), S += "</" + nc.call(String(t.nodeName)) + ">", S;
  }
  if (Zi(t)) {
    if (t.length === 0)
      return "[]";
    var E = ca(t, g);
    return h && !ab(E) ? "[" + es(E, h) + "]" : "[ " + ct.call(E, ", ") + " ]";
  }
  if (q0(t)) {
    var _ = ca(t, g);
    return !("cause" in Error.prototype) && "cause" in t && !Ju.call(t, "cause") ? "{ [" + String(t) + "] " + ct.call(rc.call("[cause]: " + g(t.cause), _), ", ") + " }" : _.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + ct.call(_, ", ") + " }";
  }
  if (typeof t == "object" && i) {
    if (lc && typeof t[lc] == "function" && Qi)
      return Qi(t, { depth: f - r });
    if (i !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (X0(t)) {
    var I = [];
    return Zl && Zl.call(t, function(b, w) {
      I.push(g(w, t, !0) + " => " + g(b, t));
    }), uc("Map", Da.call(t), I, h);
  }
  if (eb(t)) {
    var j = [];
    return ec && ec.call(t, function(b) {
      j.push(g(b, t));
    }), uc("Set", Fa.call(t), j, h);
  }
  if (Q0(t))
    return li("WeakMap");
  if (tb(t))
    return li("WeakSet");
  if (Z0(t))
    return li("WeakRef");
  if (W0(t))
    return fr(g(Number(t)));
  if (G0(t))
    return fr(g(Ji.call(t)));
  if (K0(t))
    return fr(F0.call(t));
  if (H0(t))
    return fr(g(String(t)));
  if (typeof window < "u" && t === window)
    return "{ [object Window] }";
  if (typeof globalThis < "u" && t === globalThis || typeof qe < "u" && t === qe)
    return "{ [object globalThis] }";
  if (!V0(t) && !cc(t)) {
    var z = ca(t, g), B = oc ? oc(t) === Object.prototype : t instanceof Object || t.constructor === Object, M = t instanceof Object ? "" : "null prototype", F = !B && Pe && Object(t) === t && Pe in t ? Ns.call(zt(t), 8, -1) : M ? "Object" : "", V = B || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", p = V + (F || M ? "[" + ct.call(rc.call([], F || [], M || []), ": ") + "] " : "");
    return z.length === 0 ? p + "{}" : h ? p + "{" + es(z, h) + "}" : p + "{ " + ct.call(z, ", ") + " }";
  }
  return String(t);
};
function Qu(e, t, n) {
  var r = n.quoteStyle || t, a = Xu[r];
  return a + e + a;
}
function U0(e) {
  return Dt.call(String(e), /"/g, "&quot;");
}
function Zi(e) {
  return zt(e) === "[object Array]" && (!Pe || !(typeof e == "object" && Pe in e));
}
function V0(e) {
  return zt(e) === "[object Date]" && (!Pe || !(typeof e == "object" && Pe in e));
}
function cc(e) {
  return zt(e) === "[object RegExp]" && (!Pe || !(typeof e == "object" && Pe in e));
}
function q0(e) {
  return zt(e) === "[object Error]" && (!Pe || !(typeof e == "object" && Pe in e));
}
function H0(e) {
  return zt(e) === "[object String]" && (!Pe || !(typeof e == "object" && Pe in e));
}
function W0(e) {
  return zt(e) === "[object Number]" && (!Pe || !(typeof e == "object" && Pe in e));
}
function K0(e) {
  return zt(e) === "[object Boolean]" && (!Pe || !(typeof e == "object" && Pe in e));
}
function Zu(e) {
  if (Mn)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !Xi)
    return !1;
  try {
    return Xi.call(e), !0;
  } catch {
  }
  return !1;
}
function G0(e) {
  if (!e || typeof e != "object" || !Ji)
    return !1;
  try {
    return Ji.call(e), !0;
  } catch {
  }
  return !1;
}
var Y0 = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function St(e, t) {
  return Y0.call(e, t);
}
function zt(e) {
  return L0.call(e);
}
function J0(e) {
  if (e.name)
    return e.name;
  var t = R0.call(N0.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function ef(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var n = 0, r = e.length; n < r; n++)
    if (e[n] === t)
      return n;
  return -1;
}
function X0(e) {
  if (!Da || !e || typeof e != "object")
    return !1;
  try {
    Da.call(e);
    try {
      Fa.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function Q0(e) {
  if (!xr || !e || typeof e != "object")
    return !1;
  try {
    xr.call(e, xr);
    try {
      Sr.call(e, Sr);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function Z0(e) {
  if (!tc || !e || typeof e != "object")
    return !1;
  try {
    return tc.call(e), !0;
  } catch {
  }
  return !1;
}
function eb(e) {
  if (!Fa || !e || typeof e != "object")
    return !1;
  try {
    Fa.call(e);
    try {
      Da.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function tb(e) {
  if (!Sr || !e || typeof e != "object")
    return !1;
  try {
    Sr.call(e, Sr);
    try {
      xr.call(e, xr);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function nb(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function tf(e, t) {
  if (e.length > t.maxStringLength) {
    var n = e.length - t.maxStringLength, r = "... " + n + " more character" + (n > 1 ? "s" : "");
    return tf(Ns.call(e, 0, t.maxStringLength), t) + r;
  }
  var a = j0[t.quoteStyle || "single"];
  a.lastIndex = 0;
  var o = Dt.call(Dt.call(e, a, "\\$1"), /[\x00-\x1f]/g, rb);
  return Qu(o, "single", t);
}
function rb(e) {
  var t = e.charCodeAt(0), n = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return n ? "\\" + n : "\\x" + (t < 16 ? "0" : "") + M0.call(t.toString(16));
}
function fr(e) {
  return "Object(" + e + ")";
}
function li(e) {
  return e + " { ? }";
}
function uc(e, t, n, r) {
  var a = r ? es(n, r) : ct.call(n, ", ");
  return e + " (" + t + ") {" + a + "}";
}
function ab(e) {
  for (var t = 0; t < e.length; t++)
    if (ef(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function ob(e, t) {
  var n;
  if (e.indent === "	")
    n = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    n = ct.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: n,
    prev: ct.call(Array(t + 1), n)
  };
}
function es(e, t) {
  if (e.length === 0)
    return "";
  var n = `
` + t.prev + t.base;
  return n + ct.call(e, "," + n) + `
` + t.prev;
}
function ca(e, t) {
  var n = Zi(e), r = [];
  if (n) {
    r.length = e.length;
    for (var a = 0; a < e.length; a++)
      r[a] = St(e, a) ? t(e[a], e) : "";
  }
  var o = typeof si == "function" ? si(e) : [], i;
  if (Mn) {
    i = {};
    for (var l = 0; l < o.length; l++)
      i["$" + o[l]] = o[l];
  }
  for (var u in e)
    St(e, u) && (n && String(Number(u)) === u && u < e.length || Mn && i["$" + u] instanceof Symbol || (Yu.call(/[^\w$]/, u) ? r.push(t(u, e) + ": " + t(e[u], e)) : r.push(u + ": " + t(e[u], e))));
  if (typeof si == "function")
    for (var c = 0; c < o.length; c++)
      Ju.call(e, o[c]) && r.push("[" + t(o[c]) + "]: " + t(e[o[c]], e));
  return r;
}
var nf = qn, Hn = T0, ib = z0, sb = Nr, ua = nf("%WeakMap%", !0), fa = nf("%Map%", !0), lb = Hn("WeakMap.prototype.get", !0), cb = Hn("WeakMap.prototype.set", !0), ub = Hn("WeakMap.prototype.has", !0), fb = Hn("Map.prototype.get", !0), db = Hn("Map.prototype.set", !0), pb = Hn("Map.prototype.has", !0), Rs = function(e, t) {
  for (var n = e, r; (r = n.next) !== null; n = r)
    if (r.key === t)
      return n.next = r.next, r.next = /** @type {NonNullable<typeof list.next>} */
      e.next, e.next = r, r;
}, hb = function(e, t) {
  var n = Rs(e, t);
  return n && n.value;
}, mb = function(e, t, n) {
  var r = Rs(e, t);
  r ? r.value = n : e.next = /** @type {import('.').ListNode<typeof value>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: t,
    next: e.next,
    value: n
  };
}, gb = function(e, t) {
  return !!Rs(e, t);
}, yb = function() {
  var t, n, r, a = {
    assert: function(o) {
      if (!a.has(o))
        throw new sb("Side channel does not contain " + ib(o));
    },
    get: function(o) {
      if (ua && o && (typeof o == "object" || typeof o == "function")) {
        if (t)
          return lb(t, o);
      } else if (fa) {
        if (n)
          return fb(n, o);
      } else if (r)
        return hb(r, o);
    },
    has: function(o) {
      if (ua && o && (typeof o == "object" || typeof o == "function")) {
        if (t)
          return ub(t, o);
      } else if (fa) {
        if (n)
          return pb(n, o);
      } else if (r)
        return gb(r, o);
      return !1;
    },
    set: function(o, i) {
      ua && o && (typeof o == "object" || typeof o == "function") ? (t || (t = new ua()), cb(t, o, i)) : fa ? (n || (n = new fa()), db(n, o, i)) : (r || (r = { key: {}, next: null }), mb(r, o, i));
    }
  };
  return a;
}, bb = String.prototype.replace, vb = /%20/g, ci = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Ms = {
  default: ci.RFC3986,
  formatters: {
    RFC1738: function(e) {
      return bb.call(e, vb, "+");
    },
    RFC3986: function(e) {
      return String(e);
    }
  },
  RFC1738: ci.RFC1738,
  RFC3986: ci.RFC3986
}, wb = Ms, ui = Object.prototype.hasOwnProperty, Zt = Array.isArray, st = function() {
  for (var e = [], t = 0; t < 256; ++t)
    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
  return e;
}(), xb = function(t) {
  for (; t.length > 1; ) {
    var n = t.pop(), r = n.obj[n.prop];
    if (Zt(r)) {
      for (var a = [], o = 0; o < r.length; ++o)
        typeof r[o] < "u" && a.push(r[o]);
      n.obj[n.prop] = a;
    }
  }
}, rf = function(t, n) {
  for (var r = n && n.plainObjects ? { __proto__: null } : {}, a = 0; a < t.length; ++a)
    typeof t[a] < "u" && (r[a] = t[a]);
  return r;
}, Sb = function e(t, n, r) {
  if (!n)
    return t;
  if (typeof n != "object" && typeof n != "function") {
    if (Zt(t))
      t.push(n);
    else if (t && typeof t == "object")
      (r && (r.plainObjects || r.allowPrototypes) || !ui.call(Object.prototype, n)) && (t[n] = !0);
    else
      return [t, n];
    return t;
  }
  if (!t || typeof t != "object")
    return [t].concat(n);
  var a = t;
  return Zt(t) && !Zt(n) && (a = rf(t, r)), Zt(t) && Zt(n) ? (n.forEach(function(o, i) {
    if (ui.call(t, i)) {
      var l = t[i];
      l && typeof l == "object" && o && typeof o == "object" ? t[i] = e(l, o, r) : t.push(o);
    } else
      t[i] = o;
  }), t) : Object.keys(n).reduce(function(o, i) {
    var l = n[i];
    return ui.call(o, i) ? o[i] = e(o[i], l, r) : o[i] = l, o;
  }, a);
}, Eb = function(t, n) {
  return Object.keys(n).reduce(function(r, a) {
    return r[a] = n[a], r;
  }, t);
}, Ab = function(e, t, n) {
  var r = e.replace(/\+/g, " ");
  if (n === "iso-8859-1")
    return r.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(r);
  } catch {
    return r;
  }
}, fi = 1024, Ob = function(t, n, r, a, o) {
  if (t.length === 0)
    return t;
  var i = t;
  if (typeof t == "symbol" ? i = Symbol.prototype.toString.call(t) : typeof t != "string" && (i = String(t)), r === "iso-8859-1")
    return escape(i).replace(/%u[0-9a-f]{4}/gi, function(C) {
      return "%26%23" + parseInt(C.slice(2), 16) + "%3B";
    });
  for (var l = "", u = 0; u < i.length; u += fi) {
    for (var c = i.length >= fi ? i.slice(u, u + fi) : i, f = [], h = 0; h < c.length; ++h) {
      var g = c.charCodeAt(h);
      if (g === 45 || g === 46 || g === 95 || g === 126 || g >= 48 && g <= 57 || g >= 65 && g <= 90 || g >= 97 && g <= 122 || o === wb.RFC1738 && (g === 40 || g === 41)) {
        f[f.length] = c.charAt(h);
        continue;
      }
      if (g < 128) {
        f[f.length] = st[g];
        continue;
      }
      if (g < 2048) {
        f[f.length] = st[192 | g >> 6] + st[128 | g & 63];
        continue;
      }
      if (g < 55296 || g >= 57344) {
        f[f.length] = st[224 | g >> 12] + st[128 | g >> 6 & 63] + st[128 | g & 63];
        continue;
      }
      h += 1, g = 65536 + ((g & 1023) << 10 | c.charCodeAt(h) & 1023), f[f.length] = st[240 | g >> 18] + st[128 | g >> 12 & 63] + st[128 | g >> 6 & 63] + st[128 | g & 63];
    }
    l += f.join("");
  }
  return l;
}, Cb = function(t) {
  for (var n = [{ obj: { o: t }, prop: "o" }], r = [], a = 0; a < n.length; ++a)
    for (var o = n[a], i = o.obj[o.prop], l = Object.keys(i), u = 0; u < l.length; ++u) {
      var c = l[u], f = i[c];
      typeof f == "object" && f !== null && r.indexOf(f) === -1 && (n.push({ obj: i, prop: c }), r.push(f));
    }
  return xb(n), t;
}, _b = function(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}, Tb = function(t) {
  return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
}, kb = function(t, n) {
  return [].concat(t, n);
}, Pb = function(t, n) {
  if (Zt(t)) {
    for (var r = [], a = 0; a < t.length; a += 1)
      r.push(n(t[a]));
    return r;
  }
  return n(t);
}, af = {
  arrayToObject: rf,
  assign: Eb,
  combine: kb,
  compact: Cb,
  decode: Ab,
  encode: Ob,
  isBuffer: Tb,
  isRegExp: _b,
  maybeMap: Pb,
  merge: Sb
}, of = yb, Sa = af, Er = Ms, $b = Object.prototype.hasOwnProperty, sf = {
  brackets: function(t) {
    return t + "[]";
  },
  comma: "comma",
  indices: function(t, n) {
    return t + "[" + n + "]";
  },
  repeat: function(t) {
    return t;
  }
}, lt = Array.isArray, Ib = Array.prototype.push, lf = function(e, t) {
  Ib.apply(e, lt(t) ? t : [t]);
}, Db = Date.prototype.toISOString, fc = Er.default, xe = {
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
  encoder: Sa.encode,
  encodeValuesOnly: !1,
  filter: void 0,
  format: fc,
  formatter: Er.formatters[fc],
  // deprecated
  indices: !1,
  serializeDate: function(t) {
    return Db.call(t);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, Fb = function(t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint";
}, di = {}, Lb = function e(t, n, r, a, o, i, l, u, c, f, h, g, C, m, x, S, O, $) {
  for (var E = t, _ = $, I = 0, j = !1; (_ = _.get(di)) !== void 0 && !j; ) {
    var z = _.get(t);
    if (I += 1, typeof z < "u") {
      if (z === I)
        throw new RangeError("Cyclic object value");
      j = !0;
    }
    typeof _.get(di) > "u" && (I = 0);
  }
  if (typeof f == "function" ? E = f(n, E) : E instanceof Date ? E = C(E) : r === "comma" && lt(E) && (E = Sa.maybeMap(E, function(Y) {
    return Y instanceof Date ? C(Y) : Y;
  })), E === null) {
    if (i)
      return c && !S ? c(n, xe.encoder, O, "key", m) : n;
    E = "";
  }
  if (Fb(E) || Sa.isBuffer(E)) {
    if (c) {
      var B = S ? n : c(n, xe.encoder, O, "key", m);
      return [x(B) + "=" + x(c(E, xe.encoder, O, "value", m))];
    }
    return [x(n) + "=" + x(String(E))];
  }
  var M = [];
  if (typeof E > "u")
    return M;
  var F;
  if (r === "comma" && lt(E))
    S && c && (E = Sa.maybeMap(E, c)), F = [{ value: E.length > 0 ? E.join(",") || null : void 0 }];
  else if (lt(f))
    F = f;
  else {
    var V = Object.keys(E);
    F = h ? V.sort(h) : V;
  }
  var p = u ? String(n).replace(/\./g, "%2E") : String(n), b = a && lt(E) && E.length === 1 ? p + "[]" : p;
  if (o && lt(E) && E.length === 0)
    return b + "[]";
  for (var w = 0; w < F.length; ++w) {
    var y = F[w], U = typeof y == "object" && y && typeof y.value < "u" ? y.value : E[y];
    if (!(l && U === null)) {
      var N = g && u ? String(y).replace(/\./g, "%2E") : String(y), L = lt(E) ? typeof r == "function" ? r(b, N) : b : b + (g ? "." + N : "[" + N + "]");
      $.set(t, I);
      var H = of();
      H.set(di, $), lf(M, e(
        U,
        L,
        r,
        a,
        o,
        i,
        l,
        u,
        r === "comma" && S && lt(E) ? null : c,
        f,
        h,
        g,
        C,
        m,
        x,
        S,
        O,
        H
      ));
    }
  }
  return M;
}, Nb = function(t) {
  if (!t)
    return xe;
  if (typeof t.allowEmptyArrays < "u" && typeof t.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof t.encodeDotInKeys < "u" && typeof t.encodeDotInKeys != "boolean")
    throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var n = t.charset || xe.charset;
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = Er.default;
  if (typeof t.format < "u") {
    if (!$b.call(Er.formatters, t.format))
      throw new TypeError("Unknown format option provided.");
    r = t.format;
  }
  var a = Er.formatters[r], o = xe.filter;
  (typeof t.filter == "function" || lt(t.filter)) && (o = t.filter);
  var i;
  if (t.arrayFormat in sf ? i = t.arrayFormat : "indices" in t ? i = t.indices ? "indices" : "repeat" : i = xe.arrayFormat, "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var l = typeof t.allowDots > "u" ? t.encodeDotInKeys === !0 ? !0 : xe.allowDots : !!t.allowDots;
  return {
    addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : xe.addQueryPrefix,
    allowDots: l,
    allowEmptyArrays: typeof t.allowEmptyArrays == "boolean" ? !!t.allowEmptyArrays : xe.allowEmptyArrays,
    arrayFormat: i,
    charset: n,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : xe.charsetSentinel,
    commaRoundTrip: !!t.commaRoundTrip,
    delimiter: typeof t.delimiter > "u" ? xe.delimiter : t.delimiter,
    encode: typeof t.encode == "boolean" ? t.encode : xe.encode,
    encodeDotInKeys: typeof t.encodeDotInKeys == "boolean" ? t.encodeDotInKeys : xe.encodeDotInKeys,
    encoder: typeof t.encoder == "function" ? t.encoder : xe.encoder,
    encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : xe.encodeValuesOnly,
    filter: o,
    format: r,
    formatter: a,
    serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : xe.serializeDate,
    skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : xe.skipNulls,
    sort: typeof t.sort == "function" ? t.sort : null,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : xe.strictNullHandling
  };
}, Rb = function(e, t) {
  var n = e, r = Nb(t), a, o;
  typeof r.filter == "function" ? (o = r.filter, n = o("", n)) : lt(r.filter) && (o = r.filter, a = o);
  var i = [];
  if (typeof n != "object" || n === null)
    return "";
  var l = sf[r.arrayFormat], u = l === "comma" && r.commaRoundTrip;
  a || (a = Object.keys(n)), r.sort && a.sort(r.sort);
  for (var c = of(), f = 0; f < a.length; ++f) {
    var h = a[f], g = n[h];
    r.skipNulls && g === null || lf(i, Lb(
      g,
      h,
      l,
      u,
      r.allowEmptyArrays,
      r.strictNullHandling,
      r.skipNulls,
      r.encodeDotInKeys,
      r.encode ? r.encoder : null,
      r.filter,
      r.sort,
      r.allowDots,
      r.serializeDate,
      r.format,
      r.formatter,
      r.encodeValuesOnly,
      r.charset,
      c
    ));
  }
  var C = i.join(r.delimiter), m = r.addQueryPrefix === !0 ? "?" : "";
  return r.charsetSentinel && (r.charset === "iso-8859-1" ? m += "utf8=%26%2310003%3B&" : m += "utf8=%E2%9C%93&"), C.length > 0 ? m + C : "";
}, Bn = af, ts = Object.prototype.hasOwnProperty, Mb = Array.isArray, me = {
  allowDots: !1,
  allowEmptyArrays: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decodeDotInKeys: !1,
  decoder: Bn.decode,
  delimiter: "&",
  depth: 5,
  duplicates: "combine",
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictDepth: !1,
  strictNullHandling: !1
}, Bb = function(e) {
  return e.replace(/&#(\d+);/g, function(t, n) {
    return String.fromCharCode(parseInt(n, 10));
  });
}, cf = function(e, t) {
  return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
}, jb = "utf8=%26%2310003%3B", zb = "utf8=%E2%9C%93", Ub = function(t, n) {
  var r = { __proto__: null }, a = n.ignoreQueryPrefix ? t.replace(/^\?/, "") : t;
  a = a.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  var o = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit, i = a.split(n.delimiter, o), l = -1, u, c = n.charset;
  if (n.charsetSentinel)
    for (u = 0; u < i.length; ++u)
      i[u].indexOf("utf8=") === 0 && (i[u] === zb ? c = "utf-8" : i[u] === jb && (c = "iso-8859-1"), l = u, u = i.length);
  for (u = 0; u < i.length; ++u)
    if (u !== l) {
      var f = i[u], h = f.indexOf("]="), g = h === -1 ? f.indexOf("=") : h + 1, C, m;
      g === -1 ? (C = n.decoder(f, me.decoder, c, "key"), m = n.strictNullHandling ? null : "") : (C = n.decoder(f.slice(0, g), me.decoder, c, "key"), m = Bn.maybeMap(
        cf(f.slice(g + 1), n),
        function(S) {
          return n.decoder(S, me.decoder, c, "value");
        }
      )), m && n.interpretNumericEntities && c === "iso-8859-1" && (m = Bb(String(m))), f.indexOf("[]=") > -1 && (m = Mb(m) ? [m] : m);
      var x = ts.call(r, C);
      x && n.duplicates === "combine" ? r[C] = Bn.combine(r[C], m) : (!x || n.duplicates === "last") && (r[C] = m);
    }
  return r;
}, Vb = function(e, t, n, r) {
  for (var a = r ? t : cf(t, n), o = e.length - 1; o >= 0; --o) {
    var i, l = e[o];
    if (l === "[]" && n.parseArrays)
      i = n.allowEmptyArrays && (a === "" || n.strictNullHandling && a === null) ? [] : [].concat(a);
    else {
      i = n.plainObjects ? { __proto__: null } : {};
      var u = l.charAt(0) === "[" && l.charAt(l.length - 1) === "]" ? l.slice(1, -1) : l, c = n.decodeDotInKeys ? u.replace(/%2E/g, ".") : u, f = parseInt(c, 10);
      !n.parseArrays && c === "" ? i = { 0: a } : !isNaN(f) && l !== c && String(f) === c && f >= 0 && n.parseArrays && f <= n.arrayLimit ? (i = [], i[f] = a) : c !== "__proto__" && (i[c] = a);
    }
    a = i;
  }
  return a;
}, qb = function(t, n, r, a) {
  if (t) {
    var o = r.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, i = /(\[[^[\]]*])/, l = /(\[[^[\]]*])/g, u = r.depth > 0 && i.exec(o), c = u ? o.slice(0, u.index) : o, f = [];
    if (c) {
      if (!r.plainObjects && ts.call(Object.prototype, c) && !r.allowPrototypes)
        return;
      f.push(c);
    }
    for (var h = 0; r.depth > 0 && (u = l.exec(o)) !== null && h < r.depth; ) {
      if (h += 1, !r.plainObjects && ts.call(Object.prototype, u[1].slice(1, -1)) && !r.allowPrototypes)
        return;
      f.push(u[1]);
    }
    if (u) {
      if (r.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + r.depth + " and strictDepth is true");
      f.push("[" + o.slice(u.index) + "]");
    }
    return Vb(f, n, r, a);
  }
}, Hb = function(t) {
  if (!t)
    return me;
  if (typeof t.allowEmptyArrays < "u" && typeof t.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof t.decodeDotInKeys < "u" && typeof t.decodeDotInKeys != "boolean")
    throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
  if (t.decoder !== null && typeof t.decoder < "u" && typeof t.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = typeof t.charset > "u" ? me.charset : t.charset, r = typeof t.duplicates > "u" ? me.duplicates : t.duplicates;
  if (r !== "combine" && r !== "first" && r !== "last")
    throw new TypeError("The duplicates option must be either combine, first, or last");
  var a = typeof t.allowDots > "u" ? t.decodeDotInKeys === !0 ? !0 : me.allowDots : !!t.allowDots;
  return {
    allowDots: a,
    allowEmptyArrays: typeof t.allowEmptyArrays == "boolean" ? !!t.allowEmptyArrays : me.allowEmptyArrays,
    allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : me.allowPrototypes,
    allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : me.allowSparse,
    arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : me.arrayLimit,
    charset: n,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : me.charsetSentinel,
    comma: typeof t.comma == "boolean" ? t.comma : me.comma,
    decodeDotInKeys: typeof t.decodeDotInKeys == "boolean" ? t.decodeDotInKeys : me.decodeDotInKeys,
    decoder: typeof t.decoder == "function" ? t.decoder : me.decoder,
    delimiter: typeof t.delimiter == "string" || Bn.isRegExp(t.delimiter) ? t.delimiter : me.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : me.depth,
    duplicates: r,
    ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : me.interpretNumericEntities,
    parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : me.parameterLimit,
    parseArrays: t.parseArrays !== !1,
    plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : me.plainObjects,
    strictDepth: typeof t.strictDepth == "boolean" ? !!t.strictDepth : me.strictDepth,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : me.strictNullHandling
  };
}, Wb = function(e, t) {
  var n = Hb(t);
  if (e === "" || e === null || typeof e > "u")
    return n.plainObjects ? { __proto__: null } : {};
  for (var r = typeof e == "string" ? Ub(e, n) : e, a = n.plainObjects ? { __proto__: null } : {}, o = Object.keys(r), i = 0; i < o.length; ++i) {
    var l = o[i], u = qb(l, r[l], n, typeof e == "string");
    a = Bn.merge(a, u, n);
  }
  return n.allowSparse === !0 ? a : Bn.compact(a);
}, Kb = Rb, Gb = Wb, Yb = Ms, dc = {
  formats: Yb,
  parse: Gb,
  stringify: Kb
}, Jb = { exports: {} };
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(qe, function() {
    var n = {};
    n.version = "0.2.0";
    var r = n.settings = {
      minimum: 0.08,
      easing: "ease",
      positionUsing: "",
      speed: 200,
      trickle: !0,
      trickleRate: 0.02,
      trickleSpeed: 800,
      showSpinner: !0,
      barSelector: '[role="bar"]',
      spinnerSelector: '[role="spinner"]',
      parent: "body",
      template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    n.configure = function(m) {
      var x, S;
      for (x in m)
        S = m[x], S !== void 0 && m.hasOwnProperty(x) && (r[x] = S);
      return this;
    }, n.status = null, n.set = function(m) {
      var x = n.isStarted();
      m = a(m, r.minimum, 1), n.status = m === 1 ? null : m;
      var S = n.render(!x), O = S.querySelector(r.barSelector), $ = r.speed, E = r.easing;
      return S.offsetWidth, l(function(_) {
        r.positionUsing === "" && (r.positionUsing = n.getPositioningCSS()), u(O, i(m, $, E)), m === 1 ? (u(S, {
          transition: "none",
          opacity: 1
        }), S.offsetWidth, setTimeout(function() {
          u(S, {
            transition: "all " + $ + "ms linear",
            opacity: 0
          }), setTimeout(function() {
            n.remove(), _();
          }, $);
        }, $)) : setTimeout(_, $);
      }), this;
    }, n.isStarted = function() {
      return typeof n.status == "number";
    }, n.start = function() {
      n.status || n.set(0);
      var m = function() {
        setTimeout(function() {
          n.status && (n.trickle(), m());
        }, r.trickleSpeed);
      };
      return r.trickle && m(), this;
    }, n.done = function(m) {
      return !m && !n.status ? this : n.inc(0.3 + 0.5 * Math.random()).set(1);
    }, n.inc = function(m) {
      var x = n.status;
      return x ? (typeof m != "number" && (m = (1 - x) * a(Math.random() * x, 0.1, 0.95)), x = a(x + m, 0, 0.994), n.set(x)) : n.start();
    }, n.trickle = function() {
      return n.inc(Math.random() * r.trickleRate);
    }, function() {
      var m = 0, x = 0;
      n.promise = function(S) {
        return !S || S.state() === "resolved" ? this : (x === 0 && n.start(), m++, x++, S.always(function() {
          x--, x === 0 ? (m = 0, n.done()) : n.set((m - x) / m);
        }), this);
      };
    }(), n.render = function(m) {
      if (n.isRendered())
        return document.getElementById("nprogress");
      f(document.documentElement, "nprogress-busy");
      var x = document.createElement("div");
      x.id = "nprogress", x.innerHTML = r.template;
      var S = x.querySelector(r.barSelector), O = m ? "-100" : o(n.status || 0), $ = document.querySelector(r.parent), E;
      return u(S, {
        transition: "all 0 linear",
        transform: "translate3d(" + O + "%,0,0)"
      }), r.showSpinner || (E = x.querySelector(r.spinnerSelector), E && C(E)), $ != document.body && f($, "nprogress-custom-parent"), $.appendChild(x), x;
    }, n.remove = function() {
      h(document.documentElement, "nprogress-busy"), h(document.querySelector(r.parent), "nprogress-custom-parent");
      var m = document.getElementById("nprogress");
      m && C(m);
    }, n.isRendered = function() {
      return !!document.getElementById("nprogress");
    }, n.getPositioningCSS = function() {
      var m = document.body.style, x = "WebkitTransform" in m ? "Webkit" : "MozTransform" in m ? "Moz" : "msTransform" in m ? "ms" : "OTransform" in m ? "O" : "";
      return x + "Perspective" in m ? "translate3d" : x + "Transform" in m ? "translate" : "margin";
    };
    function a(m, x, S) {
      return m < x ? x : m > S ? S : m;
    }
    function o(m) {
      return (-1 + m) * 100;
    }
    function i(m, x, S) {
      var O;
      return r.positionUsing === "translate3d" ? O = { transform: "translate3d(" + o(m) + "%,0,0)" } : r.positionUsing === "translate" ? O = { transform: "translate(" + o(m) + "%,0)" } : O = { "margin-left": o(m) + "%" }, O.transition = "all " + x + "ms " + S, O;
    }
    var l = function() {
      var m = [];
      function x() {
        var S = m.shift();
        S && S(x);
      }
      return function(S) {
        m.push(S), m.length == 1 && x();
      };
    }(), u = function() {
      var m = ["Webkit", "O", "Moz", "ms"], x = {};
      function S(_) {
        return _.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(I, j) {
          return j.toUpperCase();
        });
      }
      function O(_) {
        var I = document.body.style;
        if (_ in I)
          return _;
        for (var j = m.length, z = _.charAt(0).toUpperCase() + _.slice(1), B; j--; )
          if (B = m[j] + z, B in I)
            return B;
        return _;
      }
      function $(_) {
        return _ = S(_), x[_] || (x[_] = O(_));
      }
      function E(_, I, j) {
        I = $(I), _.style[I] = j;
      }
      return function(_, I) {
        var j = arguments, z, B;
        if (j.length == 2)
          for (z in I)
            B = I[z], B !== void 0 && I.hasOwnProperty(z) && E(_, z, B);
        else
          E(_, j[1], j[2]);
      };
    }();
    function c(m, x) {
      var S = typeof m == "string" ? m : g(m);
      return S.indexOf(" " + x + " ") >= 0;
    }
    function f(m, x) {
      var S = g(m), O = S + x;
      c(S, x) || (m.className = O.substring(1));
    }
    function h(m, x) {
      var S = g(m), O;
      c(m, x) && (O = S.replace(" " + x + " ", " "), m.className = O.substring(1, O.length - 1));
    }
    function g(m) {
      return (" " + (m.className || "") + " ").replace(/\s+/gi, " ");
    }
    function C(m) {
      m && m.parentNode && m.parentNode.removeChild(m);
    }
    return n;
  });
})(Jb);
function uf(e, t) {
  let n;
  return function(...r) {
    clearTimeout(n), n = setTimeout(() => e.apply(this, r), t);
  };
}
function Ct(e, t) {
  return document.dispatchEvent(new CustomEvent(`inertia:${e}`, t));
}
var Xb = (e) => Ct("before", { cancelable: !0, detail: { visit: e } }), Qb = (e) => Ct("error", { detail: { errors: e } }), Zb = (e) => Ct("exception", { cancelable: !0, detail: { exception: e } }), pc = (e) => Ct("finish", { detail: { visit: e } }), e1 = (e) => Ct("invalid", { cancelable: !0, detail: { response: e } }), dr = (e) => Ct("navigate", { detail: { page: e } }), t1 = (e) => Ct("progress", { detail: { progress: e } }), n1 = (e) => Ct("start", { detail: { visit: e } }), r1 = (e) => Ct("success", { detail: { page: e } });
function ns(e) {
  return e instanceof File || e instanceof Blob || e instanceof FileList && e.length > 0 || e instanceof FormData && Array.from(e.values()).some((t) => ns(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => ns(t));
}
function ff(e, t = new FormData(), n = null) {
  e = e || {};
  for (let r in e)
    Object.prototype.hasOwnProperty.call(e, r) && pf(t, df(n, r), e[r]);
  return t;
}
function df(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function pf(e, t, n) {
  if (Array.isArray(n))
    return Array.from(n.keys()).forEach((r) => pf(e, df(t, r.toString()), n[r]));
  if (n instanceof Date)
    return e.append(t, n.toISOString());
  if (n instanceof File)
    return e.append(t, n, n.name);
  if (n instanceof Blob)
    return e.append(t, n);
  if (typeof n == "boolean")
    return e.append(t, n ? "1" : "0");
  if (typeof n == "string")
    return e.append(t, n);
  if (typeof n == "number")
    return e.append(t, `${n}`);
  if (n == null)
    return e.append(t, "");
  ff(n, e, t);
}
var a1 = { modal: null, listener: null, show(e) {
  typeof e == "object" && (e = `All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(e)}`);
  let t = document.createElement("html");
  t.innerHTML = e, t.querySelectorAll("a").forEach((r) => r.setAttribute("target", "_top")), this.modal = document.createElement("div"), this.modal.style.position = "fixed", this.modal.style.width = "100vw", this.modal.style.height = "100vh", this.modal.style.padding = "50px", this.modal.style.boxSizing = "border-box", this.modal.style.backgroundColor = "rgba(0, 0, 0, .6)", this.modal.style.zIndex = 2e5, this.modal.addEventListener("click", () => this.hide());
  let n = document.createElement("iframe");
  if (n.style.backgroundColor = "white", n.style.borderRadius = "5px", n.style.width = "100%", n.style.height = "100%", this.modal.appendChild(n), document.body.prepend(this.modal), document.body.style.overflow = "hidden", !n.contentWindow)
    throw new Error("iframe not yet ready.");
  n.contentWindow.document.open(), n.contentWindow.document.write(t.outerHTML), n.contentWindow.document.close(), this.listener = this.hideOnEscape.bind(this), document.addEventListener("keydown", this.listener);
}, hide() {
  this.modal.outerHTML = "", this.modal = null, document.body.style.overflow = "visible", document.removeEventListener("keydown", this.listener);
}, hideOnEscape(e) {
  e.keyCode === 27 && this.hide();
} };
function _n(e) {
  return new URL(e.toString(), window.location.toString());
}
function Bs(e, t, n, r = "brackets") {
  let a = /^https?:\/\//.test(t.toString()), o = a || t.toString().startsWith("/"), i = !o && !t.toString().startsWith("#") && !t.toString().startsWith("?"), l = t.toString().includes("?") || e === "get" && Object.keys(n).length, u = t.toString().includes("#"), c = new URL(t.toString(), "http://localhost");
  return e === "get" && Object.keys(n).length && (c.search = dc.stringify(Iy(dc.parse(c.search, { ignoreQueryPrefix: !0 }), n), { encodeValuesOnly: !0, arrayFormat: r }), n = {}), [[a ? `${c.protocol}//${c.host}` : "", o ? c.pathname : "", i ? c.pathname.substring(1) : "", l ? c.search : "", u ? c.hash : ""].join(""), n];
}
function pr(e) {
  return e = new URL(e.href), e.hash = "", e;
}
var hc = typeof window > "u", o1 = class {
  constructor() {
    this.visitId = null;
  }
  init({ initialPage: e, resolveComponent: t, swapComponent: n }) {
    this.page = e, this.resolveComponent = t, this.swapComponent = n, this.setNavigationType(), this.clearRememberedStateOnReload(), this.isBackForwardVisit() ? this.handleBackForwardVisit(this.page) : this.isLocationVisit() ? this.handleLocationVisit(this.page) : this.handleInitialPageVisit(this.page), this.setupEventListeners();
  }
  setNavigationType() {
    this.navigationType = window.performance && window.performance.getEntriesByType("navigation").length > 0 ? window.performance.getEntriesByType("navigation")[0].type : "navigate";
  }
  clearRememberedStateOnReload() {
    var e;
    this.navigationType === "reload" && ((e = window.history.state) != null && e.rememberedState) && delete window.history.state.rememberedState;
  }
  handleInitialPageVisit(e) {
    this.page.url += window.location.hash, this.setPage(e, { preserveState: !0 }).then(() => dr(e));
  }
  setupEventListeners() {
    window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), document.addEventListener("scroll", uf(this.handleScrollEvent.bind(this), 100), !0);
  }
  scrollRegions() {
    return document.querySelectorAll("[scroll-region]");
  }
  handleScrollEvent(e) {
    typeof e.target.hasAttribute == "function" && e.target.hasAttribute("scroll-region") && this.saveScrollPositions();
  }
  saveScrollPositions() {
    this.replaceState({ ...this.page, scrollRegions: Array.from(this.scrollRegions()).map((e) => ({ top: e.scrollTop, left: e.scrollLeft })) });
  }
  resetScrollPositions() {
    window.scrollTo(0, 0), this.scrollRegions().forEach((e) => {
      typeof e.scrollTo == "function" ? e.scrollTo(0, 0) : (e.scrollTop = 0, e.scrollLeft = 0);
    }), this.saveScrollPositions(), window.location.hash && setTimeout(() => {
      var e;
      return (e = document.getElementById(window.location.hash.slice(1))) == null ? void 0 : e.scrollIntoView();
    });
  }
  restoreScrollPositions() {
    this.page.scrollRegions && this.scrollRegions().forEach((e, t) => {
      let n = this.page.scrollRegions[t];
      if (n)
        typeof e.scrollTo == "function" ? e.scrollTo(n.left, n.top) : (e.scrollTop = n.top, e.scrollLeft = n.left);
      else
        return;
    });
  }
  isBackForwardVisit() {
    return window.history.state && this.navigationType === "back_forward";
  }
  handleBackForwardVisit(e) {
    window.history.state.version = e.version, this.setPage(window.history.state, { preserveScroll: !0, preserveState: !0 }).then(() => {
      this.restoreScrollPositions(), dr(e);
    });
  }
  locationVisit(e, t) {
    try {
      let n = { preserveScroll: t };
      window.sessionStorage.setItem("inertiaLocationVisit", JSON.stringify(n)), window.location.href = e.href, pr(window.location).href === pr(e).href && window.location.reload();
    } catch {
      return !1;
    }
  }
  isLocationVisit() {
    try {
      return window.sessionStorage.getItem("inertiaLocationVisit") !== null;
    } catch {
      return !1;
    }
  }
  handleLocationVisit(e) {
    var n, r;
    let t = JSON.parse(window.sessionStorage.getItem("inertiaLocationVisit") || "");
    window.sessionStorage.removeItem("inertiaLocationVisit"), e.url += window.location.hash, e.rememberedState = ((n = window.history.state) == null ? void 0 : n.rememberedState) ?? {}, e.scrollRegions = ((r = window.history.state) == null ? void 0 : r.scrollRegions) ?? [], this.setPage(e, { preserveScroll: t.preserveScroll, preserveState: !0 }).then(() => {
      t.preserveScroll && this.restoreScrollPositions(), dr(e);
    });
  }
  isLocationVisitResponse(e) {
    return !!(e && e.status === 409 && e.headers["x-inertia-location"]);
  }
  isInertiaResponse(e) {
    return !!(e != null && e.headers["x-inertia"]);
  }
  createVisitId() {
    return this.visitId = {}, this.visitId;
  }
  cancelVisit(e, { cancelled: t = !1, interrupted: n = !1 }) {
    e && !e.completed && !e.cancelled && !e.interrupted && (e.cancelToken.abort(), e.onCancel(), e.completed = !1, e.cancelled = t, e.interrupted = n, pc(e), e.onFinish(e));
  }
  finishVisit(e) {
    !e.cancelled && !e.interrupted && (e.completed = !0, e.cancelled = !1, e.interrupted = !1, pc(e), e.onFinish(e));
  }
  resolvePreserveOption(e, t) {
    return typeof e == "function" ? e(t) : e === "errors" ? Object.keys(t.props.errors || {}).length > 0 : e;
  }
  cancel() {
    this.activeVisit && this.cancelVisit(this.activeVisit, { cancelled: !0 });
  }
  visit(e, { method: t = "get", data: n = {}, replace: r = !1, preserveScroll: a = !1, preserveState: o = !1, only: i = [], except: l = [], headers: u = {}, errorBag: c = "", forceFormData: f = !1, onCancelToken: h = () => {
  }, onBefore: g = () => {
  }, onStart: C = () => {
  }, onProgress: m = () => {
  }, onFinish: x = () => {
  }, onCancel: S = () => {
  }, onSuccess: O = () => {
  }, onError: $ = () => {
  }, queryStringArrayFormat: E = "brackets" } = {}) {
    let _ = typeof e == "string" ? _n(e) : e;
    if ((ns(n) || f) && !(n instanceof FormData) && (n = ff(n)), !(n instanceof FormData)) {
      let [B, M] = Bs(t, _, n, E);
      _ = _n(B), n = M;
    }
    let I = { url: _, method: t, data: n, replace: r, preserveScroll: a, preserveState: o, only: i, except: l, headers: u, errorBag: c, forceFormData: f, queryStringArrayFormat: E, cancelled: !1, completed: !1, interrupted: !1 };
    if (g(I) === !1 || !Xb(I))
      return;
    this.activeVisit && this.cancelVisit(this.activeVisit, { interrupted: !0 }), this.saveScrollPositions();
    let j = this.createVisitId();
    this.activeVisit = { ...I, onCancelToken: h, onBefore: g, onStart: C, onProgress: m, onFinish: x, onCancel: S, onSuccess: O, onError: $, queryStringArrayFormat: E, cancelToken: new AbortController() }, h({ cancel: () => {
      this.activeVisit && this.cancelVisit(this.activeVisit, { cancelled: !0 });
    } }), n1(I), C(I);
    let z = !!(i.length || l.length);
    zl({ method: t, url: pr(_).href, data: t === "get" ? {} : n, params: t === "get" ? n : {}, signal: this.activeVisit.cancelToken.signal, headers: { ...u, Accept: "text/html, application/xhtml+xml", "X-Requested-With": "XMLHttpRequest", "X-Inertia": !0, ...z ? { "X-Inertia-Partial-Component": this.page.component } : {}, ...i.length ? { "X-Inertia-Partial-Data": i.join(",") } : {}, ...l.length ? { "X-Inertia-Partial-Except": l.join(",") } : {}, ...c && c.length ? { "X-Inertia-Error-Bag": c } : {}, ...this.page.version ? { "X-Inertia-Version": this.page.version } : {} }, onUploadProgress: (B) => {
      n instanceof FormData && (B.percentage = B.progress ? Math.round(B.progress * 100) : 0, t1(B), m(B));
    } }).then((B) => {
      var p;
      if (!this.isInertiaResponse(B))
        return Promise.reject({ response: B });
      let M = B.data;
      z && M.component === this.page.component && (M.props = { ...this.page.props, ...M.props }), a = this.resolvePreserveOption(a, M), o = this.resolvePreserveOption(o, M), o && ((p = window.history.state) != null && p.rememberedState) && M.component === this.page.component && (M.rememberedState = window.history.state.rememberedState);
      let F = _, V = _n(M.url);
      return F.hash && !V.hash && pr(F).href === V.href && (V.hash = F.hash, M.url = V.href), this.setPage(M, { visitId: j, replace: r, preserveScroll: a, preserveState: o });
    }).then(() => {
      let B = this.page.props.errors || {};
      if (Object.keys(B).length > 0) {
        let M = c ? B[c] ? B[c] : {} : B;
        return Qb(M), $(M);
      }
      return r1(this.page), O(this.page);
    }).catch((B) => {
      if (this.isInertiaResponse(B.response))
        return this.setPage(B.response.data, { visitId: j });
      if (this.isLocationVisitResponse(B.response)) {
        let M = _n(B.response.headers["x-inertia-location"]), F = _;
        F.hash && !M.hash && pr(F).href === M.href && (M.hash = F.hash), this.locationVisit(M, a === !0);
      } else if (B.response)
        e1(B.response) && a1.show(B.response.data);
      else
        return Promise.reject(B);
    }).then(() => {
      this.activeVisit && this.finishVisit(this.activeVisit);
    }).catch((B) => {
      if (!zl.isCancel(B)) {
        let M = Zb(B);
        if (this.activeVisit && this.finishVisit(this.activeVisit), M)
          return Promise.reject(B);
      }
    });
  }
  setPage(e, { visitId: t = this.createVisitId(), replace: n = !1, preserveScroll: r = !1, preserveState: a = !1 } = {}) {
    return Promise.resolve(this.resolveComponent(e.component)).then((o) => {
      t === this.visitId && (e.scrollRegions = e.scrollRegions || [], e.rememberedState = e.rememberedState || {}, n = n || _n(e.url).href === window.location.href, n ? this.replaceState(e) : this.pushState(e), this.swapComponent({ component: o, page: e, preserveState: a }).then(() => {
        r || this.resetScrollPositions(), n || dr(e);
      }));
    });
  }
  pushState(e) {
    this.page = e, window.history.pushState(e, "", e.url);
  }
  replaceState(e) {
    this.page = e, window.history.replaceState(e, "", e.url);
  }
  handlePopstateEvent(e) {
    if (e.state !== null) {
      let t = e.state, n = this.createVisitId();
      Promise.resolve(this.resolveComponent(t.component)).then((r) => {
        n === this.visitId && (this.page = t, this.swapComponent({ component: r, page: t, preserveState: !1 }).then(() => {
          this.restoreScrollPositions(), dr(t);
        }));
      });
    } else {
      let t = _n(this.page.url);
      t.hash = window.location.hash, this.replaceState({ ...this.page, url: t.href }), this.resetScrollPositions();
    }
  }
  get(e, t = {}, n = {}) {
    return this.visit(e, { ...n, method: "get", data: t });
  }
  reload(e = {}) {
    return this.visit(window.location.href, { ...e, preserveScroll: !0, preserveState: !0 });
  }
  replace(e, t = {}) {
    return console.warn(`Inertia.replace() has been deprecated and will be removed in a future release. Please use Inertia.${t.method ?? "get"}() instead.`), this.visit(e, { preserveState: !0, ...t, replace: !0 });
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
  remember(e, t = "default") {
    var n;
    hc || this.replaceState({ ...this.page, rememberedState: { ...(n = this.page) == null ? void 0 : n.rememberedState, [t]: e } });
  }
  restore(e = "default") {
    var t, n;
    if (!hc)
      return (n = (t = window.history.state) == null ? void 0 : t.rememberedState) == null ? void 0 : n[e];
  }
  on(e, t) {
    let n = (r) => {
      let a = t(r);
      r.cancelable && !r.defaultPrevented && a === !1 && r.preventDefault();
    };
    return document.addEventListener(`inertia:${e}`, n), () => document.removeEventListener(`inertia:${e}`, n);
  }
}, i1 = { buildDOMElement(e) {
  let t = document.createElement("template");
  t.innerHTML = e;
  let n = t.content.firstChild;
  if (!e.startsWith("<script "))
    return n;
  let r = document.createElement("script");
  return r.innerHTML = n.innerHTML, n.getAttributeNames().forEach((a) => {
    r.setAttribute(a, n.getAttribute(a) || "");
  }), r;
}, isInertiaManagedElement(e) {
  return e.nodeType === Node.ELEMENT_NODE && e.getAttribute("inertia") !== null;
}, findMatchingElementIndex(e, t) {
  let n = e.getAttribute("inertia");
  return n !== null ? t.findIndex((r) => r.getAttribute("inertia") === n) : -1;
}, update: uf(function(e) {
  let t = e.map((n) => this.buildDOMElement(n));
  Array.from(document.head.childNodes).filter((n) => this.isInertiaManagedElement(n)).forEach((n) => {
    var o, i;
    let r = this.findMatchingElementIndex(n, t);
    if (r === -1) {
      (o = n == null ? void 0 : n.parentNode) == null || o.removeChild(n);
      return;
    }
    let a = t.splice(r, 1)[0];
    a && !n.isEqualNode(a) && ((i = n == null ? void 0 : n.parentNode) == null || i.replaceChild(a, n));
  }), t.forEach((n) => document.head.appendChild(n));
}, 1) };
function s1(e, t, n) {
  let r = {}, a = 0;
  function o() {
    let f = a += 1;
    return r[f] = [], f.toString();
  }
  function i(f) {
    f === null || Object.keys(r).indexOf(f) === -1 || (delete r[f], c());
  }
  function l(f, h = []) {
    f !== null && Object.keys(r).indexOf(f) > -1 && (r[f] = h), c();
  }
  function u() {
    let f = t(""), h = { ...f ? { title: `<title inertia="">${f}</title>` } : {} }, g = Object.values(r).reduce((C, m) => C.concat(m), []).reduce((C, m) => {
      if (m.indexOf("<") === -1)
        return C;
      if (m.indexOf("<title ") === 0) {
        let S = m.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return C.title = S ? `${S[1]}${t(S[2])}${S[3]}` : m, C;
      }
      let x = m.match(/ inertia="[^"]+"/);
      return x ? C[x[0]] = m : C[Object.keys(C).length] = m, C;
    }, h);
    return Object.values(g);
  }
  function c() {
    e ? n(u()) : i1.update(u());
  }
  return c(), { forceUpdate: c, createProvider: function() {
    let f = o();
    return { update: (h) => l(f, h), disconnect: () => i(f) };
  } };
}
function hf(e) {
  let t = e.currentTarget.tagName.toLowerCase() === "a";
  return !(e.target && (e == null ? void 0 : e.target).isContentEditable || e.defaultPrevented || t && e.which > 1 || t && e.altKey || t && e.ctrlKey || t && e.metaKey || t && e.shiftKey);
}
var nn = new o1(), La = { exports: {} };
La.exports;
(function(e, t) {
  var n = 200, r = "__lodash_hash_undefined__", a = 9007199254740991, o = "[object Arguments]", i = "[object Array]", l = "[object Boolean]", u = "[object Date]", c = "[object Error]", f = "[object Function]", h = "[object GeneratorFunction]", g = "[object Map]", C = "[object Number]", m = "[object Object]", x = "[object Promise]", S = "[object RegExp]", O = "[object Set]", $ = "[object String]", E = "[object Symbol]", _ = "[object WeakMap]", I = "[object ArrayBuffer]", j = "[object DataView]", z = "[object Float32Array]", B = "[object Float64Array]", M = "[object Int8Array]", F = "[object Int16Array]", V = "[object Int32Array]", p = "[object Uint8Array]", b = "[object Uint8ClampedArray]", w = "[object Uint16Array]", y = "[object Uint32Array]", U = /[\\^$.*+?()[\]{}|]/g, N = /\w*$/, L = /^\[object .+?Constructor\]$/, H = /^(?:0|[1-9]\d*)$/, Y = {};
  Y[o] = Y[i] = Y[I] = Y[j] = Y[l] = Y[u] = Y[z] = Y[B] = Y[M] = Y[F] = Y[V] = Y[g] = Y[C] = Y[m] = Y[S] = Y[O] = Y[$] = Y[E] = Y[p] = Y[b] = Y[w] = Y[y] = !0, Y[c] = Y[f] = Y[_] = !1;
  var Ke = typeof qe == "object" && qe && qe.Object === Object && qe, _t = typeof self == "object" && self && self.Object === Object && self, ye = Ke || _t || Function("return this")(), Ge = t && !t.nodeType && t, re = Ge && !0 && e && !e.nodeType && e, Ut = re && re.exports === Ge;
  function Wn(s, d) {
    return s.set(d[0], d[1]), s;
  }
  function Le(s, d) {
    return s.add(d), s;
  }
  function Vt(s, d) {
    for (var v = -1, P = s ? s.length : 0; ++v < P && d(s[v], v, s) !== !1; )
      ;
    return s;
  }
  function un(s, d) {
    for (var v = -1, P = d.length, ee = s.length; ++v < P; )
      s[ee + v] = d[v];
    return s;
  }
  function qt(s, d, v, P) {
    var ee = -1, K = s ? s.length : 0;
    for (P && K && (v = s[++ee]); ++ee < K; )
      v = d(v, s[ee], ee, s);
    return v;
  }
  function Ht(s, d) {
    for (var v = -1, P = Array(s); ++v < s; )
      P[v] = d(v);
    return P;
  }
  function fn(s, d) {
    return s == null ? void 0 : s[d];
  }
  function Kn(s) {
    var d = !1;
    if (s != null && typeof s.toString != "function")
      try {
        d = !!(s + "");
      } catch {
      }
    return d;
  }
  function zr(s) {
    var d = -1, v = Array(s.size);
    return s.forEach(function(P, ee) {
      v[++d] = [ee, P];
    }), v;
  }
  function Gn(s, d) {
    return function(v) {
      return s(d(v));
    };
  }
  function Ur(s) {
    var d = -1, v = Array(s.size);
    return s.forEach(function(P) {
      v[++d] = P;
    }), v;
  }
  var ro = Array.prototype, ao = Function.prototype, dn = Object.prototype, Yn = ye["__core-js_shared__"], Vr = function() {
    var s = /[^.]+$/.exec(Yn && Yn.keys && Yn.keys.IE_PROTO || "");
    return s ? "Symbol(src)_1." + s : "";
  }(), qr = ao.toString, nt = dn.hasOwnProperty, pn = dn.toString, oo = RegExp(
    "^" + qr.call(nt).replace(U, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Wt = Ut ? ye.Buffer : void 0, hn = ye.Symbol, Jn = ye.Uint8Array, Ue = Gn(Object.getPrototypeOf, Object), Hr = Object.create, Wr = dn.propertyIsEnumerable, io = ro.splice, Xn = Object.getOwnPropertySymbols, mn = Wt ? Wt.isBuffer : void 0, Kr = Gn(Object.keys, Object), gn = Je(ye, "DataView"), Kt = Je(ye, "Map"), Ye = Je(ye, "Promise"), yn = Je(ye, "Set"), Qn = Je(ye, "WeakMap"), Gt = Je(Object, "create"), Zn = $e(gn), Yt = $e(Kt), er = $e(Ye), tr = $e(yn), nr = $e(Qn), Tt = hn ? hn.prototype : void 0, Gr = Tt ? Tt.valueOf : void 0;
  function mt(s) {
    var d = -1, v = s ? s.length : 0;
    for (this.clear(); ++d < v; ) {
      var P = s[d];
      this.set(P[0], P[1]);
    }
  }
  function so() {
    this.__data__ = Gt ? Gt(null) : {};
  }
  function lo(s) {
    return this.has(s) && delete this.__data__[s];
  }
  function co(s) {
    var d = this.__data__;
    if (Gt) {
      var v = d[s];
      return v === r ? void 0 : v;
    }
    return nt.call(d, s) ? d[s] : void 0;
  }
  function Yr(s) {
    var d = this.__data__;
    return Gt ? d[s] !== void 0 : nt.call(d, s);
  }
  function rr(s, d) {
    var v = this.__data__;
    return v[s] = Gt && d === void 0 ? r : d, this;
  }
  mt.prototype.clear = so, mt.prototype.delete = lo, mt.prototype.get = co, mt.prototype.has = Yr, mt.prototype.set = rr;
  function Ee(s) {
    var d = -1, v = s ? s.length : 0;
    for (this.clear(); ++d < v; ) {
      var P = s[d];
      this.set(P[0], P[1]);
    }
  }
  function uo() {
    this.__data__ = [];
  }
  function fo(s) {
    var d = this.__data__, v = vn(d, s);
    if (v < 0)
      return !1;
    var P = d.length - 1;
    return v == P ? d.pop() : io.call(d, v, 1), !0;
  }
  function po(s) {
    var d = this.__data__, v = vn(d, s);
    return v < 0 ? void 0 : d[v][1];
  }
  function ho(s) {
    return vn(this.__data__, s) > -1;
  }
  function mo(s, d) {
    var v = this.__data__, P = vn(v, s);
    return P < 0 ? v.push([s, d]) : v[P][1] = d, this;
  }
  Ee.prototype.clear = uo, Ee.prototype.delete = fo, Ee.prototype.get = po, Ee.prototype.has = ho, Ee.prototype.set = mo;
  function Oe(s) {
    var d = -1, v = s ? s.length : 0;
    for (this.clear(); ++d < v; ) {
      var P = s[d];
      this.set(P[0], P[1]);
    }
  }
  function go() {
    this.__data__ = {
      hash: new mt(),
      map: new (Kt || Ee)(),
      string: new mt()
    };
  }
  function yo(s) {
    return Xt(this, s).delete(s);
  }
  function bo(s) {
    return Xt(this, s).get(s);
  }
  function vo(s) {
    return Xt(this, s).has(s);
  }
  function wo(s, d) {
    return Xt(this, s).set(s, d), this;
  }
  Oe.prototype.clear = go, Oe.prototype.delete = yo, Oe.prototype.get = bo, Oe.prototype.has = vo, Oe.prototype.set = wo;
  function Ie(s) {
    this.__data__ = new Ee(s);
  }
  function xo() {
    this.__data__ = new Ee();
  }
  function So(s) {
    return this.__data__.delete(s);
  }
  function Eo(s) {
    return this.__data__.get(s);
  }
  function Ao(s) {
    return this.__data__.has(s);
  }
  function Oo(s, d) {
    var v = this.__data__;
    if (v instanceof Ee) {
      var P = v.__data__;
      if (!Kt || P.length < n - 1)
        return P.push([s, d]), this;
      v = this.__data__ = new Oe(P);
    }
    return v.set(s, d), this;
  }
  Ie.prototype.clear = xo, Ie.prototype.delete = So, Ie.prototype.get = Eo, Ie.prototype.has = Ao, Ie.prototype.set = Oo;
  function bn(s, d) {
    var v = sr(s) || xn(s) ? Ht(s.length, String) : [], P = v.length, ee = !!P;
    for (var K in s)
      (d || nt.call(s, K)) && !(ee && (K == "length" || Bo(K, P))) && v.push(K);
    return v;
  }
  function Jr(s, d, v) {
    var P = s[d];
    (!(nt.call(s, d) && ta(P, v)) || v === void 0 && !(d in s)) && (s[d] = v);
  }
  function vn(s, d) {
    for (var v = s.length; v--; )
      if (ta(s[v][0], d))
        return v;
    return -1;
  }
  function rt(s, d) {
    return s && ir(d, cr(d), s);
  }
  function ar(s, d, v, P, ee, K, ae) {
    var ie;
    if (P && (ie = K ? P(s, ee, K, ae) : P(s)), ie !== void 0)
      return ie;
    if (!ot(s))
      return s;
    var be = sr(s);
    if (be) {
      if (ie = Ro(s), !d)
        return Fo(s, ie);
    } else {
      var le = yt(s), Ce = le == f || le == h;
      if (na(s))
        return wn(s, d);
      if (le == m || le == o || Ce && !K) {
        if (Kn(s))
          return K ? s : {};
        if (ie = at(Ce ? {} : s), !d)
          return Lo(s, rt(ie, s));
      } else {
        if (!Y[le])
          return K ? s : {};
        ie = Mo(s, le, ar, d);
      }
    }
    ae || (ae = new Ie());
    var De = ae.get(s);
    if (De)
      return De;
    if (ae.set(s, ie), !be)
      var we = v ? No(s) : cr(s);
    return Vt(we || s, function(_e, Ae) {
      we && (Ae = _e, _e = s[Ae]), Jr(ie, Ae, ar(_e, d, v, P, Ae, s, ae));
    }), ie;
  }
  function Co(s) {
    return ot(s) ? Hr(s) : {};
  }
  function _o(s, d, v) {
    var P = d(s);
    return sr(s) ? P : un(P, v(s));
  }
  function To(s) {
    return pn.call(s);
  }
  function ko(s) {
    if (!ot(s) || zo(s))
      return !1;
    var d = lr(s) || Kn(s) ? oo : L;
    return d.test($e(s));
  }
  function Po(s) {
    if (!Zr(s))
      return Kr(s);
    var d = [];
    for (var v in Object(s))
      nt.call(s, v) && v != "constructor" && d.push(v);
    return d;
  }
  function wn(s, d) {
    if (d)
      return s.slice();
    var v = new s.constructor(s.length);
    return s.copy(v), v;
  }
  function or(s) {
    var d = new s.constructor(s.byteLength);
    return new Jn(d).set(new Jn(s)), d;
  }
  function Jt(s, d) {
    var v = d ? or(s.buffer) : s.buffer;
    return new s.constructor(v, s.byteOffset, s.byteLength);
  }
  function Xr(s, d, v) {
    var P = d ? v(zr(s), !0) : zr(s);
    return qt(P, Wn, new s.constructor());
  }
  function Qr(s) {
    var d = new s.constructor(s.source, N.exec(s));
    return d.lastIndex = s.lastIndex, d;
  }
  function $o(s, d, v) {
    var P = d ? v(Ur(s), !0) : Ur(s);
    return qt(P, Le, new s.constructor());
  }
  function Io(s) {
    return Gr ? Object(Gr.call(s)) : {};
  }
  function Do(s, d) {
    var v = d ? or(s.buffer) : s.buffer;
    return new s.constructor(v, s.byteOffset, s.length);
  }
  function Fo(s, d) {
    var v = -1, P = s.length;
    for (d || (d = Array(P)); ++v < P; )
      d[v] = s[v];
    return d;
  }
  function ir(s, d, v, P) {
    v || (v = {});
    for (var ee = -1, K = d.length; ++ee < K; ) {
      var ae = d[ee], ie = P ? P(v[ae], s[ae], ae, v, s) : void 0;
      Jr(v, ae, ie === void 0 ? s[ae] : ie);
    }
    return v;
  }
  function Lo(s, d) {
    return ir(s, gt(s), d);
  }
  function No(s) {
    return _o(s, cr, gt);
  }
  function Xt(s, d) {
    var v = s.__data__;
    return jo(d) ? v[typeof d == "string" ? "string" : "hash"] : v.map;
  }
  function Je(s, d) {
    var v = fn(s, d);
    return ko(v) ? v : void 0;
  }
  var gt = Xn ? Gn(Xn, Object) : Vo, yt = To;
  (gn && yt(new gn(new ArrayBuffer(1))) != j || Kt && yt(new Kt()) != g || Ye && yt(Ye.resolve()) != x || yn && yt(new yn()) != O || Qn && yt(new Qn()) != _) && (yt = function(s) {
    var d = pn.call(s), v = d == m ? s.constructor : void 0, P = v ? $e(v) : void 0;
    if (P)
      switch (P) {
        case Zn:
          return j;
        case Yt:
          return g;
        case er:
          return x;
        case tr:
          return O;
        case nr:
          return _;
      }
    return d;
  });
  function Ro(s) {
    var d = s.length, v = s.constructor(d);
    return d && typeof s[0] == "string" && nt.call(s, "index") && (v.index = s.index, v.input = s.input), v;
  }
  function at(s) {
    return typeof s.constructor == "function" && !Zr(s) ? Co(Ue(s)) : {};
  }
  function Mo(s, d, v, P) {
    var ee = s.constructor;
    switch (d) {
      case I:
        return or(s);
      case l:
      case u:
        return new ee(+s);
      case j:
        return Jt(s, P);
      case z:
      case B:
      case M:
      case F:
      case V:
      case p:
      case b:
      case w:
      case y:
        return Do(s, P);
      case g:
        return Xr(s, P, v);
      case C:
      case $:
        return new ee(s);
      case S:
        return Qr(s);
      case O:
        return $o(s, P, v);
      case E:
        return Io(s);
    }
  }
  function Bo(s, d) {
    return d = d ?? a, !!d && (typeof s == "number" || H.test(s)) && s > -1 && s % 1 == 0 && s < d;
  }
  function jo(s) {
    var d = typeof s;
    return d == "string" || d == "number" || d == "symbol" || d == "boolean" ? s !== "__proto__" : s === null;
  }
  function zo(s) {
    return !!Vr && Vr in s;
  }
  function Zr(s) {
    var d = s && s.constructor, v = typeof d == "function" && d.prototype || dn;
    return s === v;
  }
  function $e(s) {
    if (s != null) {
      try {
        return qr.call(s);
      } catch {
      }
      try {
        return s + "";
      } catch {
      }
    }
    return "";
  }
  function ea(s) {
    return ar(s, !0, !0);
  }
  function ta(s, d) {
    return s === d || s !== s && d !== d;
  }
  function xn(s) {
    return Uo(s) && nt.call(s, "callee") && (!Wr.call(s, "callee") || pn.call(s) == o);
  }
  var sr = Array.isArray;
  function Sn(s) {
    return s != null && ra(s.length) && !lr(s);
  }
  function Uo(s) {
    return aa(s) && Sn(s);
  }
  var na = mn || qo;
  function lr(s) {
    var d = ot(s) ? pn.call(s) : "";
    return d == f || d == h;
  }
  function ra(s) {
    return typeof s == "number" && s > -1 && s % 1 == 0 && s <= a;
  }
  function ot(s) {
    var d = typeof s;
    return !!s && (d == "object" || d == "function");
  }
  function aa(s) {
    return !!s && typeof s == "object";
  }
  function cr(s) {
    return Sn(s) ? bn(s) : Po(s);
  }
  function Vo() {
    return [];
  }
  function qo() {
    return !1;
  }
  e.exports = ea;
})(La, La.exports);
var l1 = La.exports;
const wt = /* @__PURE__ */ $s(l1);
var Na = { exports: {} };
Na.exports;
(function(e, t) {
  var n = 200, r = "__lodash_hash_undefined__", a = 1, o = 2, i = 9007199254740991, l = "[object Arguments]", u = "[object Array]", c = "[object AsyncFunction]", f = "[object Boolean]", h = "[object Date]", g = "[object Error]", C = "[object Function]", m = "[object GeneratorFunction]", x = "[object Map]", S = "[object Number]", O = "[object Null]", $ = "[object Object]", E = "[object Promise]", _ = "[object Proxy]", I = "[object RegExp]", j = "[object Set]", z = "[object String]", B = "[object Symbol]", M = "[object Undefined]", F = "[object WeakMap]", V = "[object ArrayBuffer]", p = "[object DataView]", b = "[object Float32Array]", w = "[object Float64Array]", y = "[object Int8Array]", U = "[object Int16Array]", N = "[object Int32Array]", L = "[object Uint8Array]", H = "[object Uint8ClampedArray]", Y = "[object Uint16Array]", Ke = "[object Uint32Array]", _t = /[\\^$.*+?()[\]{}|]/g, ye = /^\[object .+?Constructor\]$/, Ge = /^(?:0|[1-9]\d*)$/, re = {};
  re[b] = re[w] = re[y] = re[U] = re[N] = re[L] = re[H] = re[Y] = re[Ke] = !0, re[l] = re[u] = re[V] = re[f] = re[p] = re[h] = re[g] = re[C] = re[x] = re[S] = re[$] = re[I] = re[j] = re[z] = re[F] = !1;
  var Ut = typeof qe == "object" && qe && qe.Object === Object && qe, Wn = typeof self == "object" && self && self.Object === Object && self, Le = Ut || Wn || Function("return this")(), Vt = t && !t.nodeType && t, un = Vt && !0 && e && !e.nodeType && e, qt = un && un.exports === Vt, Ht = qt && Ut.process, fn = function() {
    try {
      return Ht && Ht.binding && Ht.binding("util");
    } catch {
    }
  }(), Kn = fn && fn.isTypedArray;
  function zr(s, d) {
    for (var v = -1, P = s == null ? 0 : s.length, ee = 0, K = []; ++v < P; ) {
      var ae = s[v];
      d(ae, v, s) && (K[ee++] = ae);
    }
    return K;
  }
  function Gn(s, d) {
    for (var v = -1, P = d.length, ee = s.length; ++v < P; )
      s[ee + v] = d[v];
    return s;
  }
  function Ur(s, d) {
    for (var v = -1, P = s == null ? 0 : s.length; ++v < P; )
      if (d(s[v], v, s))
        return !0;
    return !1;
  }
  function ro(s, d) {
    for (var v = -1, P = Array(s); ++v < s; )
      P[v] = d(v);
    return P;
  }
  function ao(s) {
    return function(d) {
      return s(d);
    };
  }
  function dn(s, d) {
    return s.has(d);
  }
  function Yn(s, d) {
    return s == null ? void 0 : s[d];
  }
  function Vr(s) {
    var d = -1, v = Array(s.size);
    return s.forEach(function(P, ee) {
      v[++d] = [ee, P];
    }), v;
  }
  function qr(s, d) {
    return function(v) {
      return s(d(v));
    };
  }
  function nt(s) {
    var d = -1, v = Array(s.size);
    return s.forEach(function(P) {
      v[++d] = P;
    }), v;
  }
  var pn = Array.prototype, oo = Function.prototype, Wt = Object.prototype, hn = Le["__core-js_shared__"], Jn = oo.toString, Ue = Wt.hasOwnProperty, Hr = function() {
    var s = /[^.]+$/.exec(hn && hn.keys && hn.keys.IE_PROTO || "");
    return s ? "Symbol(src)_1." + s : "";
  }(), Wr = Wt.toString, io = RegExp(
    "^" + Jn.call(Ue).replace(_t, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Xn = qt ? Le.Buffer : void 0, mn = Le.Symbol, Kr = Le.Uint8Array, gn = Wt.propertyIsEnumerable, Kt = pn.splice, Ye = mn ? mn.toStringTag : void 0, yn = Object.getOwnPropertySymbols, Qn = Xn ? Xn.isBuffer : void 0, Gt = qr(Object.keys, Object), Zn = gt(Le, "DataView"), Yt = gt(Le, "Map"), er = gt(Le, "Promise"), tr = gt(Le, "Set"), nr = gt(Le, "WeakMap"), Tt = gt(Object, "create"), Gr = $e(Zn), mt = $e(Yt), so = $e(er), lo = $e(tr), co = $e(nr), Yr = mn ? mn.prototype : void 0, rr = Yr ? Yr.valueOf : void 0;
  function Ee(s) {
    var d = -1, v = s == null ? 0 : s.length;
    for (this.clear(); ++d < v; ) {
      var P = s[d];
      this.set(P[0], P[1]);
    }
  }
  function uo() {
    this.__data__ = Tt ? Tt(null) : {}, this.size = 0;
  }
  function fo(s) {
    var d = this.has(s) && delete this.__data__[s];
    return this.size -= d ? 1 : 0, d;
  }
  function po(s) {
    var d = this.__data__;
    if (Tt) {
      var v = d[s];
      return v === r ? void 0 : v;
    }
    return Ue.call(d, s) ? d[s] : void 0;
  }
  function ho(s) {
    var d = this.__data__;
    return Tt ? d[s] !== void 0 : Ue.call(d, s);
  }
  function mo(s, d) {
    var v = this.__data__;
    return this.size += this.has(s) ? 0 : 1, v[s] = Tt && d === void 0 ? r : d, this;
  }
  Ee.prototype.clear = uo, Ee.prototype.delete = fo, Ee.prototype.get = po, Ee.prototype.has = ho, Ee.prototype.set = mo;
  function Oe(s) {
    var d = -1, v = s == null ? 0 : s.length;
    for (this.clear(); ++d < v; ) {
      var P = s[d];
      this.set(P[0], P[1]);
    }
  }
  function go() {
    this.__data__ = [], this.size = 0;
  }
  function yo(s) {
    var d = this.__data__, v = wn(d, s);
    if (v < 0)
      return !1;
    var P = d.length - 1;
    return v == P ? d.pop() : Kt.call(d, v, 1), --this.size, !0;
  }
  function bo(s) {
    var d = this.__data__, v = wn(d, s);
    return v < 0 ? void 0 : d[v][1];
  }
  function vo(s) {
    return wn(this.__data__, s) > -1;
  }
  function wo(s, d) {
    var v = this.__data__, P = wn(v, s);
    return P < 0 ? (++this.size, v.push([s, d])) : v[P][1] = d, this;
  }
  Oe.prototype.clear = go, Oe.prototype.delete = yo, Oe.prototype.get = bo, Oe.prototype.has = vo, Oe.prototype.set = wo;
  function Ie(s) {
    var d = -1, v = s == null ? 0 : s.length;
    for (this.clear(); ++d < v; ) {
      var P = s[d];
      this.set(P[0], P[1]);
    }
  }
  function xo() {
    this.size = 0, this.__data__ = {
      hash: new Ee(),
      map: new (Yt || Oe)(),
      string: new Ee()
    };
  }
  function So(s) {
    var d = Je(this, s).delete(s);
    return this.size -= d ? 1 : 0, d;
  }
  function Eo(s) {
    return Je(this, s).get(s);
  }
  function Ao(s) {
    return Je(this, s).has(s);
  }
  function Oo(s, d) {
    var v = Je(this, s), P = v.size;
    return v.set(s, d), this.size += v.size == P ? 0 : 1, this;
  }
  Ie.prototype.clear = xo, Ie.prototype.delete = So, Ie.prototype.get = Eo, Ie.prototype.has = Ao, Ie.prototype.set = Oo;
  function bn(s) {
    var d = -1, v = s == null ? 0 : s.length;
    for (this.__data__ = new Ie(); ++d < v; )
      this.add(s[d]);
  }
  function Jr(s) {
    return this.__data__.set(s, r), this;
  }
  function vn(s) {
    return this.__data__.has(s);
  }
  bn.prototype.add = bn.prototype.push = Jr, bn.prototype.has = vn;
  function rt(s) {
    var d = this.__data__ = new Oe(s);
    this.size = d.size;
  }
  function ar() {
    this.__data__ = new Oe(), this.size = 0;
  }
  function Co(s) {
    var d = this.__data__, v = d.delete(s);
    return this.size = d.size, v;
  }
  function _o(s) {
    return this.__data__.get(s);
  }
  function To(s) {
    return this.__data__.has(s);
  }
  function ko(s, d) {
    var v = this.__data__;
    if (v instanceof Oe) {
      var P = v.__data__;
      if (!Yt || P.length < n - 1)
        return P.push([s, d]), this.size = ++v.size, this;
      v = this.__data__ = new Ie(P);
    }
    return v.set(s, d), this.size = v.size, this;
  }
  rt.prototype.clear = ar, rt.prototype.delete = Co, rt.prototype.get = _o, rt.prototype.has = To, rt.prototype.set = ko;
  function Po(s, d) {
    var v = xn(s), P = !v && ta(s), ee = !v && !P && Sn(s), K = !v && !P && !ee && aa(s), ae = v || P || ee || K, ie = ae ? ro(s.length, String) : [], be = ie.length;
    for (var le in s)
      (d || Ue.call(s, le)) && !(ae && // Safari 9 has enumerable `arguments.length` in strict mode.
      (le == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      ee && (le == "offset" || le == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      K && (le == "buffer" || le == "byteLength" || le == "byteOffset") || // Skip index properties.
      Mo(le, be))) && ie.push(le);
    return ie;
  }
  function wn(s, d) {
    for (var v = s.length; v--; )
      if (ea(s[v][0], d))
        return v;
    return -1;
  }
  function or(s, d, v) {
    var P = d(s);
    return xn(s) ? P : Gn(P, v(s));
  }
  function Jt(s) {
    return s == null ? s === void 0 ? M : O : Ye && Ye in Object(s) ? yt(s) : Zr(s);
  }
  function Xr(s) {
    return ot(s) && Jt(s) == l;
  }
  function Qr(s, d, v, P, ee) {
    return s === d ? !0 : s == null || d == null || !ot(s) && !ot(d) ? s !== s && d !== d : $o(s, d, v, P, Qr, ee);
  }
  function $o(s, d, v, P, ee, K) {
    var ae = xn(s), ie = xn(d), be = ae ? u : at(s), le = ie ? u : at(d);
    be = be == l ? $ : be, le = le == l ? $ : le;
    var Ce = be == $, De = le == $, we = be == le;
    if (we && Sn(s)) {
      if (!Sn(d))
        return !1;
      ae = !0, Ce = !1;
    }
    if (we && !Ce)
      return K || (K = new rt()), ae || aa(s) ? ir(s, d, v, P, ee, K) : Lo(s, d, be, v, P, ee, K);
    if (!(v & a)) {
      var _e = Ce && Ue.call(s, "__wrapped__"), Ae = De && Ue.call(d, "__wrapped__");
      if (_e || Ae) {
        var kt = _e ? s.value() : s, bt = Ae ? d.value() : d;
        return K || (K = new rt()), ee(kt, bt, v, P, K);
      }
    }
    return we ? (K || (K = new rt()), No(s, d, v, P, ee, K)) : !1;
  }
  function Io(s) {
    if (!ra(s) || jo(s))
      return !1;
    var d = na(s) ? io : ye;
    return d.test($e(s));
  }
  function Do(s) {
    return ot(s) && lr(s.length) && !!re[Jt(s)];
  }
  function Fo(s) {
    if (!zo(s))
      return Gt(s);
    var d = [];
    for (var v in Object(s))
      Ue.call(s, v) && v != "constructor" && d.push(v);
    return d;
  }
  function ir(s, d, v, P, ee, K) {
    var ae = v & a, ie = s.length, be = d.length;
    if (ie != be && !(ae && be > ie))
      return !1;
    var le = K.get(s);
    if (le && K.get(d))
      return le == d;
    var Ce = -1, De = !0, we = v & o ? new bn() : void 0;
    for (K.set(s, d), K.set(d, s); ++Ce < ie; ) {
      var _e = s[Ce], Ae = d[Ce];
      if (P)
        var kt = ae ? P(Ae, _e, Ce, d, s, K) : P(_e, Ae, Ce, s, d, K);
      if (kt !== void 0) {
        if (kt)
          continue;
        De = !1;
        break;
      }
      if (we) {
        if (!Ur(d, function(bt, Qt) {
          if (!dn(we, Qt) && (_e === bt || ee(_e, bt, v, P, K)))
            return we.push(Qt);
        })) {
          De = !1;
          break;
        }
      } else if (!(_e === Ae || ee(_e, Ae, v, P, K))) {
        De = !1;
        break;
      }
    }
    return K.delete(s), K.delete(d), De;
  }
  function Lo(s, d, v, P, ee, K, ae) {
    switch (v) {
      case p:
        if (s.byteLength != d.byteLength || s.byteOffset != d.byteOffset)
          return !1;
        s = s.buffer, d = d.buffer;
      case V:
        return !(s.byteLength != d.byteLength || !K(new Kr(s), new Kr(d)));
      case f:
      case h:
      case S:
        return ea(+s, +d);
      case g:
        return s.name == d.name && s.message == d.message;
      case I:
      case z:
        return s == d + "";
      case x:
        var ie = Vr;
      case j:
        var be = P & a;
        if (ie || (ie = nt), s.size != d.size && !be)
          return !1;
        var le = ae.get(s);
        if (le)
          return le == d;
        P |= o, ae.set(s, d);
        var Ce = ir(ie(s), ie(d), P, ee, K, ae);
        return ae.delete(s), Ce;
      case B:
        if (rr)
          return rr.call(s) == rr.call(d);
    }
    return !1;
  }
  function No(s, d, v, P, ee, K) {
    var ae = v & a, ie = Xt(s), be = ie.length, le = Xt(d), Ce = le.length;
    if (be != Ce && !ae)
      return !1;
    for (var De = be; De--; ) {
      var we = ie[De];
      if (!(ae ? we in d : Ue.call(d, we)))
        return !1;
    }
    var _e = K.get(s);
    if (_e && K.get(d))
      return _e == d;
    var Ae = !0;
    K.set(s, d), K.set(d, s);
    for (var kt = ae; ++De < be; ) {
      we = ie[De];
      var bt = s[we], Qt = d[we];
      if (P)
        var js = ae ? P(Qt, bt, we, d, s, K) : P(bt, Qt, we, s, d, K);
      if (!(js === void 0 ? bt === Qt || ee(bt, Qt, v, P, K) : js)) {
        Ae = !1;
        break;
      }
      kt || (kt = we == "constructor");
    }
    if (Ae && !kt) {
      var oa = s.constructor, ia = d.constructor;
      oa != ia && "constructor" in s && "constructor" in d && !(typeof oa == "function" && oa instanceof oa && typeof ia == "function" && ia instanceof ia) && (Ae = !1);
    }
    return K.delete(s), K.delete(d), Ae;
  }
  function Xt(s) {
    return or(s, cr, Ro);
  }
  function Je(s, d) {
    var v = s.__data__;
    return Bo(d) ? v[typeof d == "string" ? "string" : "hash"] : v.map;
  }
  function gt(s, d) {
    var v = Yn(s, d);
    return Io(v) ? v : void 0;
  }
  function yt(s) {
    var d = Ue.call(s, Ye), v = s[Ye];
    try {
      s[Ye] = void 0;
      var P = !0;
    } catch {
    }
    var ee = Wr.call(s);
    return P && (d ? s[Ye] = v : delete s[Ye]), ee;
  }
  var Ro = yn ? function(s) {
    return s == null ? [] : (s = Object(s), zr(yn(s), function(d) {
      return gn.call(s, d);
    }));
  } : Vo, at = Jt;
  (Zn && at(new Zn(new ArrayBuffer(1))) != p || Yt && at(new Yt()) != x || er && at(er.resolve()) != E || tr && at(new tr()) != j || nr && at(new nr()) != F) && (at = function(s) {
    var d = Jt(s), v = d == $ ? s.constructor : void 0, P = v ? $e(v) : "";
    if (P)
      switch (P) {
        case Gr:
          return p;
        case mt:
          return x;
        case so:
          return E;
        case lo:
          return j;
        case co:
          return F;
      }
    return d;
  });
  function Mo(s, d) {
    return d = d ?? i, !!d && (typeof s == "number" || Ge.test(s)) && s > -1 && s % 1 == 0 && s < d;
  }
  function Bo(s) {
    var d = typeof s;
    return d == "string" || d == "number" || d == "symbol" || d == "boolean" ? s !== "__proto__" : s === null;
  }
  function jo(s) {
    return !!Hr && Hr in s;
  }
  function zo(s) {
    var d = s && s.constructor, v = typeof d == "function" && d.prototype || Wt;
    return s === v;
  }
  function Zr(s) {
    return Wr.call(s);
  }
  function $e(s) {
    if (s != null) {
      try {
        return Jn.call(s);
      } catch {
      }
      try {
        return s + "";
      } catch {
      }
    }
    return "";
  }
  function ea(s, d) {
    return s === d || s !== s && d !== d;
  }
  var ta = Xr(function() {
    return arguments;
  }()) ? Xr : function(s) {
    return ot(s) && Ue.call(s, "callee") && !gn.call(s, "callee");
  }, xn = Array.isArray;
  function sr(s) {
    return s != null && lr(s.length) && !na(s);
  }
  var Sn = Qn || qo;
  function Uo(s, d) {
    return Qr(s, d);
  }
  function na(s) {
    if (!ra(s))
      return !1;
    var d = Jt(s);
    return d == C || d == m || d == c || d == _;
  }
  function lr(s) {
    return typeof s == "number" && s > -1 && s % 1 == 0 && s <= i;
  }
  function ra(s) {
    var d = typeof s;
    return s != null && (d == "object" || d == "function");
  }
  function ot(s) {
    return s != null && typeof s == "object";
  }
  var aa = Kn ? ao(Kn) : Do;
  function cr(s) {
    return sr(s) ? Po(s) : Fo(s);
  }
  function Vo() {
    return [];
  }
  function qo() {
    return !1;
  }
  e.exports = Uo;
})(Na, Na.exports);
var c1 = Na.exports;
const u1 = /* @__PURE__ */ $s(c1);
function f1(e, t) {
  let n = typeof e == "string" ? e : null, r = typeof e == "string" ? t : e, a = n ? nn.restore(n) : null, o = wt(typeof r == "object" ? r : r()), i = null, l = null, u = (f) => f, c = us({ ...a ? a.data : wt(o), isDirty: !1, errors: a ? a.errors : {}, hasErrors: !1, processing: !1, progress: null, wasSuccessful: !1, recentlySuccessful: !1, data() {
    return Object.keys(o).reduce((f, h) => (f[h] = this[h], f), {});
  }, transform(f) {
    return u = f, this;
  }, defaults(f, h) {
    if (typeof r == "function")
      throw new Error("You cannot call `defaults()` when using a function to define your form data.");
    return typeof f > "u" ? o = this.data() : o = Object.assign({}, wt(o), typeof f == "string" ? { [f]: h } : f), this;
  }, reset(...f) {
    let h = wt(typeof r == "object" ? o : r()), g = wt(h);
    return f.length === 0 ? (o = g, Object.assign(this, h)) : Object.keys(h).filter((C) => f.includes(C)).forEach((C) => {
      o[C] = g[C], this[C] = h[C];
    }), this;
  }, setError(f, h) {
    return Object.assign(this.errors, typeof f == "string" ? { [f]: h } : f), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, clearErrors(...f) {
    return this.errors = Object.keys(this.errors).reduce((h, g) => ({ ...h, ...f.length > 0 && !f.includes(g) ? { [g]: this.errors[g] } : {} }), {}), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, submit(f, h, g = {}) {
    let C = u(this.data()), m = { ...g, onCancelToken: (x) => {
      if (i = x, g.onCancelToken)
        return g.onCancelToken(x);
    }, onBefore: (x) => {
      if (this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(l), g.onBefore)
        return g.onBefore(x);
    }, onStart: (x) => {
      if (this.processing = !0, g.onStart)
        return g.onStart(x);
    }, onProgress: (x) => {
      if (this.progress = x, g.onProgress)
        return g.onProgress(x);
    }, onSuccess: async (x) => {
      this.processing = !1, this.progress = null, this.clearErrors(), this.wasSuccessful = !0, this.recentlySuccessful = !0, l = setTimeout(() => this.recentlySuccessful = !1, 2e3);
      let S = g.onSuccess ? await g.onSuccess(x) : null;
      return o = wt(this.data()), this.isDirty = !1, S;
    }, onError: (x) => {
      if (this.processing = !1, this.progress = null, this.clearErrors().setError(x), g.onError)
        return g.onError(x);
    }, onCancel: () => {
      if (this.processing = !1, this.progress = null, g.onCancel)
        return g.onCancel();
    }, onFinish: (x) => {
      if (this.processing = !1, this.progress = null, i = null, g.onFinish)
        return g.onFinish(x);
    } };
    f === "delete" ? nn.delete(h, { ...m, data: C }) : nn[f](h, C, m);
  }, get(f, h) {
    this.submit("get", f, h);
  }, post(f, h) {
    this.submit("post", f, h);
  }, put(f, h) {
    this.submit("put", f, h);
  }, patch(f, h) {
    this.submit("patch", f, h);
  }, delete(f, h) {
    this.submit("delete", f, h);
  }, cancel() {
    i && i.cancel();
  }, __rememberable: n === null, __remember() {
    return { data: this.data(), errors: this.errors };
  }, __restore(f) {
    Object.assign(this, f.data), this.setError(f.errors);
  } });
  return Ft(c, (f) => {
    c.isDirty = !u1(c.data(), o), n && nn.remember(wt(f.__remember()), n);
  }, { immediate: !0, deep: !0 }), c;
}
var Ne = Z(null), ut = Z(null), pi = qf(null), da = Z(null), mc = null;
jt({ name: "Inertia", props: { initialPage: { type: Object, required: !0 }, initialComponent: { type: Object, required: !1 }, resolveComponent: { type: Function, required: !1 }, titleCallback: { type: Function, required: !1, default: (e) => e }, onHeadUpdate: { type: Function, required: !1, default: () => () => {
} } }, setup({ initialPage: e, initialComponent: t, resolveComponent: n, titleCallback: r, onHeadUpdate: a }) {
  Ne.value = t ? Us(t) : null, ut.value = e, da.value = null;
  let o = typeof window > "u";
  return mc = s1(o, r, a), o || (nn.init({ initialPage: e, resolveComponent: n, swapComponent: async (i) => {
    Ne.value = Us(i.component), ut.value = i.page, da.value = i.preserveState ? da.value : Date.now();
  } }), nn.on("navigate", () => mc.forceUpdate())), () => {
    if (Ne.value) {
      Ne.value.inheritAttrs = !!Ne.value.inheritAttrs;
      let i = Lt(Ne.value, { ...ut.value.props, key: da.value });
      return pi.value && (Ne.value.layout = pi.value, pi.value = null), Ne.value.layout ? typeof Ne.value.layout == "function" ? Ne.value.layout(Lt, i) : (Array.isArray(Ne.value.layout) ? Ne.value.layout : [Ne.value.layout]).concat(i).reverse().reduce((l, u) => (u.inheritAttrs = !!u.inheritAttrs, Lt(u, { ...ut.value.props }, () => l))) : i;
    }
  };
} });
function d1() {
  return us({ props: se(() => {
    var e;
    return (e = ut.value) == null ? void 0 : e.props;
  }), url: se(() => {
    var e;
    return (e = ut.value) == null ? void 0 : e.url;
  }), component: se(() => {
    var e;
    return (e = ut.value) == null ? void 0 : e.component;
  }), version: se(() => {
    var e;
    return (e = ut.value) == null ? void 0 : e.version;
  }), scrollRegions: se(() => {
    var e;
    return (e = ut.value) == null ? void 0 : e.scrollRegions;
  }), rememberedState: se(() => {
    var e;
    return (e = ut.value) == null ? void 0 : e.rememberedState;
  }) });
}
jt({ props: { title: { type: String, required: !1 } }, data() {
  return { provider: this.$headManager.createProvider() };
}, beforeUnmount() {
  this.provider.disconnect();
}, methods: { isUnaryTag(e) {
  return ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"].indexOf(e.type) > -1;
}, renderTagStart(e) {
  e.props = e.props || {}, e.props.inertia = e.props["head-key"] !== void 0 ? e.props["head-key"] : "";
  let t = Object.keys(e.props).reduce((n, r) => {
    let a = e.props[r];
    return ["key", "head-key"].includes(r) ? n : a === "" ? n + ` ${r}` : n + ` ${r}="${a}"`;
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
  if (this.isTextNode(e))
    return e.children;
  if (this.isFragmentNode(e) || this.isCommentNode(e))
    return "";
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
jt({ name: "Link", props: { as: { type: String, default: "a" }, data: { type: Object, default: () => ({}) }, href: { type: String, required: !0 }, method: { type: String, default: "get" }, replace: { type: Boolean, default: !1 }, preserveScroll: { type: Boolean, default: !1 }, preserveState: { type: Boolean, default: null }, only: { type: Array, default: () => [] }, except: { type: Array, default: () => [] }, headers: { type: Object, default: () => ({}) }, queryStringArrayFormat: { type: String, default: "brackets" } }, setup(e, { slots: t, attrs: n }) {
  return () => {
    let r = e.as.toLowerCase(), a = e.method.toLowerCase(), [o, i] = Bs(a, e.href || "", e.data, e.queryStringArrayFormat);
    return r === "a" && a !== "get" && console.warn(`Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${o}" method="${a}" as="button">...</Link>`), Lt(e.as, { ...n, ...r === "a" ? { href: o } : {}, onClick: (l) => {
      hf(l) && (l.preventDefault(), nn.visit(o, { data: i, method: a, replace: e.replace, preserveScroll: e.preserveScroll, preserveState: e.preserveState ?? a !== "get", only: e.only, except: e.except, headers: e.headers, onCancelToken: n.onCancelToken || (() => ({})), onBefore: n.onBefore || (() => ({})), onStart: n.onStart || (() => ({})), onProgress: n.onProgress || (() => ({})), onFinish: n.onFinish || (() => ({})), onCancel: n.onCancel || (() => ({})), onSuccess: n.onSuccess || (() => ({})), onError: n.onError || (() => ({})) }));
    } }, t);
  };
} });
function Zw(e) {
  return e.toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
function p1(e) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP"
  }).format(e);
}
function ex(e) {
  return d1().props.auth.permissions.includes(e);
}
let rs = null;
function tx(e) {
  rs = e;
}
function Mr() {
  return rs === null && console.error(
    `Inertia router is not set. Please set it first:

// app.js
import { setInertiaRouter } from '@nb/vue-components';
import { router } from '@inertiajs/vue3';
// createInertiaApp(...);
setInertiaRouter(router);

`
  ), rs;
}
const et = jt({
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
      const r = Mr(), a = e.as.toLowerCase(), o = e.method.toLowerCase(), [i, l] = Bs(
        o,
        e.href || "",
        e.data,
        e.queryStringArrayFormat
      );
      return a === "a" && o !== "get" && console.warn(
        `Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${i}" method="${o}" as="button">...</Link>`
      ), Lt(
        e.as,
        {
          ...n,
          ...a === "a" ? { href: i } : {},
          onClick: (u) => {
            hf(u) && (u.preventDefault(), r.visit(i, {
              data: l,
              method: o,
              replace: e.replace,
              preserveScroll: e.preserveScroll,
              preserveState: e.preserveState ?? o !== "get",
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
function Br(e, t, n, r) {
  function a(o) {
    return o instanceof n ? o : new n(function(i) {
      i(o);
    });
  }
  return new (n || (n = Promise))(function(o, i) {
    function l(f) {
      try {
        c(r.next(f));
      } catch (h) {
        i(h);
      }
    }
    function u(f) {
      try {
        c(r.throw(f));
      } catch (h) {
        i(h);
      }
    }
    function c(f) {
      f.done ? o(f.value) : a(f.value).then(l, u);
    }
    c((r = r.apply(e, t || [])).next());
  });
}
function jr(e, t) {
  var n = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, r, a, o, i = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return i.next = l(0), i.throw = l(1), i.return = l(2), typeof Symbol == "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function l(c) {
    return function(f) {
      return u([c, f]);
    };
  }
  function u(c) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; i && (i = 0, c[0] && (n = 0)), n; )
      try {
        if (r = 1, a && (o = c[0] & 2 ? a.return : c[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, c[1])).done)
          return o;
        switch (a = 0, o && (c = [c[0] & 2, o.value]), c[0]) {
          case 0:
          case 1:
            o = c;
            break;
          case 4:
            return n.label++, { value: c[1], done: !1 };
          case 5:
            n.label++, a = c[1], c = [0];
            continue;
          case 7:
            c = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              n = 0;
              continue;
            }
            if (c[0] === 3 && (!o || c[1] > o[0] && c[1] < o[3])) {
              n.label = c[1];
              break;
            }
            if (c[0] === 6 && n.label < o[1]) {
              n.label = o[1], o = c;
              break;
            }
            if (o && n.label < o[2]) {
              n.label = o[2], n.ops.push(c);
              break;
            }
            o[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        c = t.call(e, n);
      } catch (f) {
        c = [6, f], a = 0;
      } finally {
        r = o = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function h1(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var r = n.call(e), a, o = [], i;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = r.next()).done; )
      o.push(a.value);
  } catch (l) {
    i = { error: l };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return o;
}
function m1() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(h1(arguments[t]));
  return e;
}
var g1 = /* @__PURE__ */ new Map([
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
function Qa(e, t) {
  var n = y1(e);
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
function y1(e) {
  var t = e.name, n = t && t.lastIndexOf(".") !== -1;
  if (n && !e.type) {
    var r = t.split(".").pop().toLowerCase(), a = g1.get(r);
    a && Object.defineProperty(e, "type", {
      value: a,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
var b1 = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function v1(e) {
  return Br(this, void 0, void 0, function() {
    return jr(this, function(t) {
      return [2, w1(e) && e.dataTransfer ? E1(e.dataTransfer, e.type) : x1(e)];
    });
  });
}
function w1(e) {
  return !!e.dataTransfer;
}
function x1(e) {
  var t = S1(e.target) ? e.target.files ? as(e.target.files) : [] : [];
  return t.map(function(n) {
    return Qa(n);
  });
}
function S1(e) {
  return e !== null;
}
function E1(e, t) {
  return Br(this, void 0, void 0, function() {
    var n, r;
    return jr(this, function(a) {
      switch (a.label) {
        case 0:
          return e.items ? (n = as(e.items).filter(function(o) {
            return o.kind === "file";
          }), t !== "drop" ? [2, n] : [4, Promise.all(n.map(A1))]) : [3, 2];
        case 1:
          return r = a.sent(), [2, gc(mf(r))];
        case 2:
          return [2, gc(as(e.files).map(function(o) {
            return Qa(o);
          }))];
      }
    });
  });
}
function gc(e) {
  return e.filter(function(t) {
    return b1.indexOf(t.name) === -1;
  });
}
function as(e) {
  for (var t = [], n = 0; n < e.length; n++) {
    var r = e[n];
    t.push(r);
  }
  return t;
}
function A1(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return yc(e);
  var t = e.webkitGetAsEntry();
  return t && t.isDirectory ? gf(t) : yc(e);
}
function mf(e) {
  return e.reduce(function(t, n) {
    return m1(t, Array.isArray(n) ? mf(n) : [n]);
  }, []);
}
function yc(e) {
  var t = e.getAsFile();
  if (!t)
    return Promise.reject(e + " is not a File");
  var n = Qa(t);
  return Promise.resolve(n);
}
function O1(e) {
  return Br(this, void 0, void 0, function() {
    return jr(this, function(t) {
      return [2, e.isDirectory ? gf(e) : C1(e)];
    });
  });
}
function gf(e) {
  var t = e.createReader();
  return new Promise(function(n, r) {
    var a = [];
    function o() {
      var i = this;
      t.readEntries(function(l) {
        return Br(i, void 0, void 0, function() {
          var u, c, f;
          return jr(this, function(h) {
            switch (h.label) {
              case 0:
                if (l.length)
                  return [3, 5];
                h.label = 1;
              case 1:
                return h.trys.push([1, 3, , 4]), [4, Promise.all(a)];
              case 2:
                return u = h.sent(), n(u), [3, 4];
              case 3:
                return c = h.sent(), r(c), [3, 4];
              case 4:
                return [3, 6];
              case 5:
                f = Promise.all(l.map(O1)), a.push(f), o(), h.label = 6;
              case 6:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, function(l) {
        r(l);
      });
    }
    o();
  });
}
function C1(e) {
  return Br(this, void 0, void 0, function() {
    return jr(this, function(t) {
      return [2, new Promise(function(n, r) {
        e.file(function(a) {
          var o = Qa(a, e.fullPath);
          n(o);
        }, function(a) {
          r(a);
        });
      })];
    });
  });
}
var yf = function(e, t) {
  if (e && t) {
    var n = Array.isArray(t) ? t : t.split(",");
    if (n.length === 0)
      return !0;
    var r = e.name || "", a = (e.type || "").toLowerCase(), o = a.replace(/\/.*$/, "");
    return n.some(function(i) {
      var l = i.trim().toLowerCase();
      return l.charAt(0) === "." ? r.toLowerCase().endsWith(l) : l.endsWith("/*") ? o === l.replace(/\/.*$/, "") : a === l;
    });
  }
  return !0;
}, Re = function() {
  return Re = Object.assign || function(t) {
    for (var n, r = 1, a = arguments.length; r < a; r++) {
      n = arguments[r];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Re.apply(this, arguments);
};
function bc(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function _1(e, t, n, r) {
  function a(o) {
    return o instanceof n ? o : new n(function(i) {
      i(o);
    });
  }
  return new (n || (n = Promise))(function(o, i) {
    function l(f) {
      try {
        c(r.next(f));
      } catch (h) {
        i(h);
      }
    }
    function u(f) {
      try {
        c(r.throw(f));
      } catch (h) {
        i(h);
      }
    }
    function c(f) {
      f.done ? o(f.value) : a(f.value).then(l, u);
    }
    c((r = r.apply(e, t || [])).next());
  });
}
function T1(e, t) {
  var n = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, r, a, o, i;
  return i = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function l(c) {
    return function(f) {
      return u([c, f]);
    };
  }
  function u(c) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; i && (i = 0, c[0] && (n = 0)), n; )
      try {
        if (r = 1, a && (o = c[0] & 2 ? a.return : c[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, c[1])).done)
          return o;
        switch (a = 0, o && (c = [c[0] & 2, o.value]), c[0]) {
          case 0:
          case 1:
            o = c;
            break;
          case 4:
            return n.label++, { value: c[1], done: !1 };
          case 5:
            n.label++, a = c[1], c = [0];
            continue;
          case 7:
            c = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              n = 0;
              continue;
            }
            if (c[0] === 3 && (!o || c[1] > o[0] && c[1] < o[3])) {
              n.label = c[1];
              break;
            }
            if (c[0] === 6 && n.label < o[1]) {
              n.label = o[1], o = c;
              break;
            }
            if (o && n.label < o[2]) {
              n.label = o[2], n.ops.push(c);
              break;
            }
            o[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        c = t.call(e, n);
      } catch (f) {
        c = [6, f], a = 0;
      } finally {
        r = o = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function os(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, a = t.length, o; r < a; r++)
      (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
function k1(e) {
  return e.includes("MSIE") || e.includes("Trident/");
}
function P1(e) {
  return e.includes("Edge/");
}
function $1(e) {
  return e === void 0 && (e = window.navigator.userAgent), k1(e) || P1(e);
}
function vc(e) {
  e.preventDefault();
}
function pa(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
    return t === "Files" || t === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function Ra(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
var I1 = "file-invalid-type", D1 = "file-too-large", F1 = "file-too-small", L1 = "too-many-files", N1 = {
  code: L1,
  message: "Too many files"
}, R1 = function(e) {
  e = Array.isArray(e) && e.length === 1 ? e[0] : e;
  var t = Array.isArray(e) ? "one of ".concat(e.join(", ")) : e;
  return {
    code: I1,
    message: "File type must be ".concat(t)
  };
};
function hr(e) {
  return e != null;
}
var M1 = yf.default, B1 = M1 || yf;
function bf(e, t) {
  var n = e.type === "application/x-moz-file" || B1(e, t);
  return [n, n ? null : R1(t)];
}
var wc = function(e) {
  return {
    code: D1,
    message: "File is larger than ".concat(e, " bytes")
  };
}, xc = function(e) {
  return {
    code: F1,
    message: "File is smaller than ".concat(e, " bytes")
  };
};
function vf(e, t, n) {
  if (hr(e.size) && e.size)
    if (hr(t) && hr(n)) {
      if (e.size > n)
        return [!1, wc(n)];
      if (e.size < t)
        return [!1, xc(t)];
    } else {
      if (hr(t) && e.size < t)
        return [!1, xc(t)];
      if (hr(n) && e.size > n)
        return [!1, wc(n)];
    }
  return [!0, null];
}
function xt() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return function(n) {
    for (var r = [], a = 1; a < arguments.length; a++)
      r[a - 1] = arguments[a];
    return e.some(function(o) {
      return !Ra(n) && o && o.apply(void 0, os([n], r, !1)), Ra(n);
    });
  };
}
function j1(e) {
  var t = e.files, n = e.accept, r = e.minSize, a = e.maxSize, o = e.multiple, i = e.maxFiles;
  return !o && t.length > 1 || o && i >= 1 && t.length > i ? !1 : t.every(function(l) {
    var u = bf(l, n)[0], c = vf(l, r, a)[0];
    return u && c;
  });
}
var z1 = {
  disabled: !1,
  getFilesFromEvent: v1,
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
function wf(e) {
  e === void 0 && (e = {});
  var t = Z(Re(Re({}, z1), e));
  Ft(function() {
    return Re({}, e);
  }, function(F) {
    t.value = Re(Re({}, t.value), F);
  });
  var n = Z(), r = Z(), a = us({
    isFocused: !1,
    isFileDialogActive: !1,
    isDragActive: !1,
    isDragAccept: !1,
    isDragReject: !1,
    draggedFiles: [],
    acceptedFiles: [],
    fileRejections: []
  }), o = function() {
    r.value && (a.isFileDialogActive = !0, r.value.value = "", r.value.click());
  }, i = function() {
    var F = t.value.onFileDialogCancel;
    a.isFileDialogActive && setTimeout(function() {
      if (r.value) {
        var V = r.value.files;
        V && !V.length && (a.isFileDialogActive = !1, typeof F == "function" && F());
      }
    }, 300);
  };
  function l() {
    a.isFocused = !0;
  }
  function u() {
    a.isFocused = !1;
  }
  function c() {
    var F = t.value.noClick;
    F || ($1() ? setTimeout(o, 0) : o());
  }
  var f = Z([]), h = function(F) {
    if (n.value) {
      var V = n.value.$el || n.value;
      V.contains(F.target) || (F.preventDefault(), f.value = []);
    }
  };
  We(function() {
    window.addEventListener("focus", i, !1);
    var F = t.value.preventDropOnDocument;
    F && (document.addEventListener("dragover", vc, !1), document.addEventListener("drop", h, !1));
  }), Pr(function() {
    window.removeEventListener("focus", i, !1);
    var F = t.value.preventDropOnDocument;
    F && (document.removeEventListener("dragover", vc), document.removeEventListener("drop", h));
  });
  function g(F) {
    var V = t.value.noDragEventsBubbling;
    V && F.stopPropagation();
  }
  function C(F) {
    return _1(this, void 0, void 0, function() {
      var V, p, b, w, y;
      return T1(this, function(U) {
        switch (U.label) {
          case 0:
            return V = t.value, p = V.getFilesFromEvent, b = V.noDragEventsBubbling, w = V.onDragEnter, F.preventDefault(), g(F), f.value = os(os([], f.value, !0), [F.target], !1), pa(F) ? p ? [4, p(F)] : [2] : [3, 2];
          case 1:
            if (y = U.sent(), y || (y = []), Ra(F) && !b)
              return [2];
            a.draggedFiles = y, a.isDragActive = !0, w && w(F), U.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }
  function m(F) {
    var V = t.value.onDragOver;
    if (F.preventDefault(), g(F), F.dataTransfer)
      try {
        F.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return pa(F) && V && V(F), !1;
  }
  function x(F) {
    F.preventDefault(), g(F);
    var V = f.value.filter(function(w) {
      if (!n.value)
        return !1;
      var y = n.value.$el || n.value;
      return y.contains(w);
    }), p = V.indexOf(F.target);
    if (p !== -1 && V.splice(p, 1), f.value = V, !(V.length > 0)) {
      a.draggedFiles = [], a.isDragActive = !1;
      var b = t.value.onDragLeave;
      pa(F) && b && b(F);
    }
  }
  function S(F) {
    F.preventDefault(), g(F), f.value = [];
    var V = t.value, p = V.getFilesFromEvent, b = V.noDragEventsBubbling, w = V.accept, y = V.minSize, U = V.maxSize, N = V.multiple, L = V.maxFiles, H = V.onDrop, Y = V.onDropRejected, Ke = V.onDropAccepted;
    if (pa(F)) {
      if (!p)
        return;
      Promise.resolve(p(F)).then(function(_t) {
        if (!(Ra(F) && !b)) {
          var ye = [], Ge = [];
          _t.forEach(function(re) {
            var Ut = bf(re, w), Wn = Ut[0], Le = Ut[1], Vt = vf(re, y, U), un = Vt[0], qt = Vt[1];
            if (Wn && un)
              ye.push(re);
            else {
              var Ht = [Le, qt].filter(function(fn) {
                return fn;
              });
              Ge.push({ file: re, errors: Ht });
            }
          }), (!N && ye.length > 1 || N && L >= 1 && ye.length > L) && (ye.forEach(function(re) {
            Ge.push({ file: re, errors: [N1] });
          }), ye.splice(0)), a.acceptedFiles = ye, a.fileRejections = Ge, H && H(ye, Ge, F), Ge.length > 0 && Y && Y(Ge, F), ye.length > 0 && Ke && Ke(ye, F);
        }
      });
    }
    a.isFileDialogActive = !1, a.isDragActive = !1, a.draggedFiles = [], a.acceptedFiles = [], a.fileRejections = [];
  }
  var O = function(F) {
    return t.value.disabled ? void 0 : F;
  }, $ = function(F) {
    return t.value.noKeyboard ? void 0 : O(F);
  }, E = function(F) {
    return t.value.noDrag ? void 0 : O(F);
  }, _ = function(F) {
    F === void 0 && (F = {});
    var V = F.onFocus, p = F.onBlur, b = F.onClick, w = F.onDragEnter, y = F.onDragenter, U = F.onDragOver, N = F.onDragover, L = F.onDragLeave, H = F.onDragleave, Y = F.onDrop, Ke = bc(F, ["onFocus", "onBlur", "onClick", "onDragEnter", "onDragenter", "onDragOver", "onDragover", "onDragLeave", "onDragleave", "onDrop"]);
    return Re(Re({ onFocus: $(xt(V, l)), onBlur: $(xt(p, u)), onClick: O(xt(b, c)), onDragenter: E(xt(w, y, C)), onDragover: E(xt(U, N, m)), onDragleave: E(xt(L, H, x)), onDrop: E(xt(Y, S)), ref: n }, !t.value.disabled && !t.value.noKeyboard ? { tabIndex: 0 } : {}), Ke);
  }, I = function(F) {
    F.stopPropagation();
  };
  function j(F) {
    F === void 0 && (F = {});
    var V = F.onChange, p = F.onClick, b = bc(F, ["onChange", "onClick"]), w = {
      accept: t.value.accept,
      multiple: t.value.multiple,
      style: "display: none",
      type: "file",
      onChange: O(xt(V, S)),
      onClick: O(xt(p, I)),
      autoComplete: "off",
      tabIndex: -1,
      ref: r
    };
    return Re(Re({}, w), b);
  }
  var z = se(function() {
    return a.draggedFiles ? a.draggedFiles.length : 0;
  }), B = se(function() {
    return z.value > 0 && j1({
      files: a.draggedFiles,
      accept: t.value.accept,
      minSize: t.value.minSize,
      maxSize: t.value.maxSize,
      multiple: t.value.multiple,
      maxFiles: t.value.maxFiles
    });
  }), M = se(function() {
    return z.value > 0 && !B.value;
  });
  return Re(Re({}, Hf(a)), { isDragAccept: B, isDragReject: M, isFocused: se(function() {
    return a.isFocused && !t.value.disabled;
  }), getRootProps: _, getInputProps: j, rootRef: n, inputRef: r, open: O(o) });
}
const U1 = { class: "flex w-full flex-col" }, V1 = {
  key: 0,
  class: "select-none text-black"
}, q1 = ["name"], H1 = {
  key: 1,
  class: "select-none"
}, W1 = { key: 2 }, K1 = {
  key: 3,
  class: "select-none"
}, nx = {
  __name: "FileDropZoneInput",
  props: {
    accept: { String, default: "image/*" },
    multiple: { Boolean, default: !1 },
    label: String,
    form: Object,
    field: String,
    required: Boolean,
    disabled: Boolean
  },
  setup(e) {
    Mr();
    const t = e, n = Z(null), r = (c) => {
      let f = [];
      return c.split("_").join(" ").split(" ").map(function(h) {
        f.push(h[0].toUpperCase() + h.slice(1));
      }), f.join(" ");
    }, a = (c, f) => {
      var h;
      if (n.value = null, f && f.length > 0) {
        f[0].errors && (n.value = (h = f[0]) == null ? void 0 : h.errors.map((g) => g.message).join(", ")), console.error(f);
        return;
      }
      if (!c || c.length === 0) {
        n.value = `${t.field} is required`;
        return;
      }
      t.multiple ? t.form[t.field] = c : t.form[t.field] = c[0];
    }, { getRootProps: o, getInputProps: i, isDragActive: l, ...u } = wf({
      onDrop: a,
      multiple: t.multiple,
      accept: t.accept
    });
    return (c, f) => {
      var h;
      return A(), k("div", U1, [
        D("div", {
          class: X(["w-full rounded-lg border-2 border-dashed border-primary-200 bg-primary-50 text-primary-200 transition duration-100 ease-in-out hover:border-primary-600 hover:text-primary", {
            "border-primary-400 bg-primary-100": q(l),
            "border-red-600 bg-primary-100": t.form.errors[e.field] ?? n.value
          }])
        }, [
          D("div", Ar({ class: "p-4' flex h-20 w-full cursor-copy flex-col items-center justify-center font-medium" }, q(o)()), [
            e.label ? (A(), k("p", V1, Q(e.label), 1)) : G("", !0),
            D("input", Ar(q(i)(), { name: e.field }), null, 16, q1),
            q(l) ? (A(), k("span", H1, "Drop the " + Q(r(e.field)) + " here ...", 1)) : e.form[e.field] ? (A(), k("span", W1, Q(((h = e.form[e.field]) == null ? void 0 : h.path) ?? "File prepared"), 1)) : (A(), k("span", K1, "Drag 'n' drop " + Q(r(e.field)) + " here", 1))
          ], 16)
        ], 2),
        ge(q(Fr), {
          class: "mt-2",
          message: t.form.errors[e.field] ?? n.value
        }, null, 8, ["message"])
      ]);
    };
  }
}, G1 = { class: "flex w-full" }, Y1 = { key: 0 }, J1 = { key: 1 }, X1 = {
  key: 0,
  class: "flex flex-wrap gap-2 p-4"
}, Q1 = ["onClick"], Z1 = ["src"], ev = ["value"], tv = { class: "flex items-center gap-4" }, nv = {
  key: 0,
  class: "text-sm text-gray-600"
}, rv = {
  key: 1,
  class: "mt-2"
}, av = { class: "container mx-auto px-5 py-2 lg:px-8 lg:pt-8" }, ov = { class: "-m-1 flex flex-wrap md:-m-2" }, iv = { class: "flex w-1/3 flex-wrap" }, sv = { class: "h-full w-full p-1 shadow md:p-2" }, lv = ["src"], rx = {
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
    const t = Mr(), n = e, r = f1({
      image: []
    });
    function a() {
      let h = new FormData();
      r.image.forEach((g, C) => {
        h.append(`image[${C}]`, g.file);
      }), h.append("item_type", n.itemType), h.append("item_id", n.itemId), t.post(route(n.endPoint), h, {
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
    function o(h) {
      h.forEach((g) => {
        let C = new FileReader();
        C.onload = (m) => {
          r.image.push({ file: g, dataUrl: m.target.result });
        }, C.readAsDataURL(g);
      });
    }
    const i = (h, g) => {
      if (g && g.length > 0) {
        console.error(g);
        return;
      }
      o(h);
    };
    function l(h) {
      r.image.splice(h, 1);
    }
    const { getRootProps: u, getInputProps: c, ...f } = wf({
      onDrop: i,
      multiple: !0,
      accept: "image/*"
    });
    return (h, g) => (A(), k(ue, null, [
      e.canUpload ? (A(), k("form", {
        key: 0,
        onSubmit: It(a, ["prevent"]),
        class: "w-full"
      }, [
        D("div", G1, [
          D("div", {
            class: X(["w-full rounded-l-lg border-2 border-r-0 border-dashed border-primary-200 bg-primary-50 transition duration-100 ease-in-out hover:border-primary-600 hover:text-primary", { "border-primary-400 bg-primary-100": h.dragEneted }])
          }, [
            D("div", Ar({ class: "p-4' flex h-20 w-full cursor-copy items-center justify-center font-medium" }, q(u)()), [
              D("input", Ve(Xe(q(c)())), null, 16),
              h.isDragActive ? (A(), k("span", Y1, "Drop the files here ...")) : (A(), k("span", J1, "Drag 'n' drop images here"))
            ], 16),
            q(r).image.length > 0 ? (A(), k("div", X1, [
              (A(!0), k(ue, null, He(q(r).image, (C, m) => (A(), k("div", {
                class: "relative cursor-pointer select-none",
                onClick: (x) => l(m),
                key: m
              }, [
                g[0] || (g[0] = D("div", { class: "absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 font-bold text-white" }, " - ", -1)),
                D("img", {
                  src: C.dataUrl,
                  class: "h-auto max-w-[150px]"
                }, null, 8, Z1)
              ], 8, Q1))), 128))
            ])) : G("", !0)
          ], 2),
          ge(q(Nf), {
            class: X(["inline rounded-l-none", { "cursor-not-allowed": q(r).image.length == 0 }]),
            disabled: q(r).image.length == 0
          }, {
            default: he(() => g[1] || (g[1] = [
              pe(" Upload ")
            ])),
            _: 1
          }, 8, ["class", "disabled"]),
          q(r).progress ? (A(), k("progress", {
            key: 0,
            value: q(r).progress.percentage,
            max: "100"
          }, Q(q(r).progress.percentage) + "%", 9, ev)) : G("", !0)
        ]),
        h.$page.props.errors.image ? (A(), oe(q(Fr), {
          key: 0,
          class: "mt-2",
          message: h.$page.props.errors.image
        }, null, 8, ["message"])) : G("", !0),
        D("div", tv, [
          ge(rn, {
            "enter-from-class": "opacity-0",
            "leave-to-class": "opacity-0",
            class: "transition ease-in-out"
          }, {
            default: he(() => [
              q(r).recentlySuccessful ? (A(), k("p", nv, "Images uploaded.")) : G("", !0)
            ]),
            _: 1
          })
        ])
      ], 32)) : G("", !0),
      e.images.length ? (A(), k("div", rv, [
        g[3] || (g[3] = D("hr", null, null, -1)),
        D("div", av, [
          D("div", ov, [
            (A(!0), k(ue, null, He(e.images, (C) => (A(), k("div", iv, [
              D("div", sv, [
                D("img", {
                  alt: "gallery",
                  class: "block h-auto w-auto rounded-lg object-cover object-center",
                  src: C.url
                }, null, 8, lv),
                e.canUpload ? (A(), oe(q(et), {
                  key: 0,
                  href: h.route("images.delete", C.id),
                  method: "delete",
                  class: "mt-1 w-full items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-center text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700",
                  as: "button"
                }, {
                  default: he(() => g[2] || (g[2] = [
                    pe(" Delete Image ")
                  ])),
                  _: 2
                }, 1032, ["href"])) : G("", !0)
              ])
            ]))), 256))
          ])
        ])
      ])) : G("", !0)
    ], 64));
  }
}, cv = { class: "mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]" }, uv = ["name", "value", "id", "checked"], fv = ["for"], ax = {
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
    const n = t, r = (a) => {
      n("update:modelValue", a.target.value);
    };
    return (a, o) => (A(), k("div", cv, [
      D("input", {
        class: "relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 ring-accent before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-accent checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-accent checked:after:bg-accent checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-accent checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px] checked:focus:before:shadow-primary checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]",
        type: "radio",
        name: e.name,
        value: e.value,
        id: e.id,
        checked: e.modelValue === e.value,
        onChange: r
      }, null, 40, uv),
      D("label", {
        class: "mt-px inline-block pl-[0.15rem] hover:cursor-pointer",
        for: e.id
      }, Q(e.label), 9, fv)
    ]));
  }
}, dv = {
  key: 0,
  class: "absolute inset-2 flex items-center justify-center"
}, Sc = {
  __name: "SubmitButton",
  props: {
    type: {
      type: String,
      default: "submit"
    },
    disabled: Boolean,
    form: Object,
    loading: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return A(), oe(q(Nf), {
        disabled: e.loading || ((r = e.form) == null ? void 0 : r.processing) || e.disabled,
        type: e.type,
        class: "focusable"
      }, {
        default: he(() => {
          var a, o;
          return [
            D("div", {
              class: X({ "opacity-25": ((a = e.form) == null ? void 0 : a.processing) || e.loading })
            }, [
              J(t.$slots, "default")
            ], 2),
            (o = e.form) != null && o.processing || e.loading ? (A(), k("div", dv, [
              ge(q(Rf), { class: "aspect-square !h-full !w-auto text-white" })
            ])) : G("", !0)
          ];
        }),
        _: 3
      }, 8, ["disabled", "type"]);
    };
  }
}, pv = ["id"], hv = {
  key: 0,
  class: "text-sm text-gray-600"
}, mv = { class: "flex flex-col" }, ox = {
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
    }
  },
  setup(e) {
    const t = Mr(), n = e, r = Z(null), a = Z(null), o = Z(null), i = Z(null), l = () => {
      const f = r.value, h = f.getBoundingClientRect().top, g = document.querySelector("nav").offsetHeight, C = h - g, m = o.value, x = f.getBoundingClientRect().height + h - g * 2;
      if (C <= 0 && x > 0) {
        if (m.dataset.sticky === "true")
          return;
        m.style.display = "block", m.dataset.sticky = "true", m.style.top = `${g}px`, m.style.width = a.value.offsetWidth + "px";
        return;
      }
      m.dataset.sticky = "", m.style.display = "";
    }, u = () => {
      i.value.style.marginLeft = -a.value.scrollLeft + "px";
    }, c = () => {
      if (!r.value)
        return;
      const f = r.value.querySelector("thead tr");
      let h = i.value;
      h.innerHTML = "";
      let g = f == null ? void 0 : f.querySelectorAll("th");
      g == null || g.forEach((m) => {
        const x = m.cloneNode(!0);
        x.style.width = m.offsetWidth + "px", h.appendChild(x);
      });
      const C = o.value;
      C.style.width = a.value.offsetWidth + "px";
    };
    return n.sticky && (t.on("navigate", () => {
      Wf(() => {
        c();
      });
    }), We(() => {
      c(), window.addEventListener("scroll", l, { passive: !0 }), window.addEventListener("resize", c, { passive: !0 }), a.value.addEventListener("scroll", u, { passive: !0 });
    }), Pr(() => {
      var f;
      window.removeEventListener("scroll", l), window.removeEventListener("resize", c), (f = a.value) == null || f.removeEventListener("scroll", u);
    })), (f, h) => (A(), k("div", {
      class: X({
        "!visible hidden": e.collapsable,
        "overflow-hidden": e.overflow
      }),
      id: e.collapse_id,
      "data-te-collapse-item": ""
    }, [
      e.total ? (A(), k("p", hv, "Found: " + Q(e.total), 1)) : G("", !0),
      D("div", mv, [
        D("div", {
          class: X({ "overflow-x-auto": e.overflow }),
          ref_key: "table_container",
          ref: a
        }, [
          D("table", {
            class: X(["min-w-full text-left text-sm font-light", {
              "mb-14 [&>*>tr]:border-l-4 [&>*>tr]:border-l-primary-500": e.collapsable,
              " border-separate border-spacing-y-5 px-2": e.seperate
            }]),
            ref_key: "table",
            ref: r
          }, [
            e.sticky ? (A(), k("div", {
              key: 0,
              ref_key: "sticky_wrapper",
              ref: o,
              class: "fixed isolate z-40 hidden w-full overflow-hidden bg-neutral-100"
            }, [
              D("div", {
                ref_key: "sticky_header",
                ref: i,
                class: "w-max [&>th]:align-middle"
              }, null, 512)
            ], 512)) : G("", !0),
            J(f.$slots, "default")
          ], 2)
        ], 2)
      ]),
      f.$slots.pagination ? J(f.$slots, "pagination", { key: 1 }) : e.links ? (A(), oe(q(Lf), {
        key: 2,
        class: "mt-6",
        links: e.links,
        showPerPage: e.showPerPage,
        defaultPerPage: e.defaultPerPage
      }, null, 8, ["links", "showPerPage", "defaultPerPage"])) : G("", !0)
    ], 10, pv));
  }
}, gv = {}, yv = { class: "border-b bg-neutral-100 font-medium dark:border-neutral-500" };
function bv(e, t) {
  return A(), k("thead", yv, [
    J(e.$slots, "default")
  ]);
}
const ix = /* @__PURE__ */ zn(gv, [["render", bv]]), vv = { class: "flex items-center justify-between" }, wv = {
  key: 0,
  class: "order-arrows flex h-full w-4 items-center md:right-4"
}, sx = {
  __name: "Th",
  props: {
    orderBy: String
  },
  setup(e) {
    Dr.add(bh, mh);
    const t = e, n = Z("asc"), r = Z(!1);
    let a = null;
    const o = Mr();
    We(() => {
      t.orderBy && (a = o.on("navigate", i));
    }), Pr(() => {
      a == null || a();
    });
    const i = () => {
      const c = route().params;
      if (c.order_by === t.orderBy) {
        n.value = c.order_dir, r.value = !0;
        return;
      }
      r.value = !1;
    }, l = () => {
      if (!t.orderBy)
        return;
      const c = n.value === "asc" ? "desc" : "asc", f = route().params;
      f.order_by = t.orderBy, f.order_dir = c, o.get(route(route().current()), f, {
        preserveState: !0
      }), n.value = c, r.value = !0;
    }, u = (c) => n.value === c && r.value ? "active text-primary" : "text-gray-400";
    return (c, f) => (A(), k("th", {
      scope: "col",
      class: X(["relative py-4 text-center md:px-6 md:text-left", e.orderBy ? "cursor-pointer" : ""]),
      onClick: l
    }, [
      D("div", vv, [
        J(c.$slots, "default"),
        e.orderBy ? (A(), k("span", wv, [
          ge(q(ft), {
            icon: "fa-sort-up",
            class: X(["absolute", u("desc")])
          }, null, 8, ["class"]),
          ge(q(ft), {
            icon: "fa-sort-down",
            class: X(["absolute", u("asc")])
          }, null, 8, ["class"])
        ])) : G("", !0)
      ])
    ], 2));
  }
}, xv = {}, Sv = { class: "whitespace-nowrap py-2 text-center md:px-6 md:py-4 md:text-left" };
function Ev(e, t) {
  return A(), k("td", Sv, [
    J(e.$slots, "default")
  ]);
}
const Av = /* @__PURE__ */ zn(xv, [["render", Ev]]), Ov = ["data-te-target", "aria-controls"], lx = {
  __name: "TrCollapseHandler",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(e) {
    return (t, n) => (A(), k("tr", {
      "data-te-collapse-init": "",
      "data-te-target": "#" + e.collapse_id,
      "aria-expanded": "false",
      "aria-controls": e.collapse_id
    }, [
      J(t.$slots, "default")
    ], 8, Ov));
  }
}, Cv = { colspan: "999" }, _v = ["id"], cx = {
  __name: "TrCollapse",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(e) {
    return (t, n) => (A(), k("tr", null, [
      D("td", Cv, [
        D("div", {
          id: e.collapse_id,
          class: "!visible hidden",
          "data-te-collapse-item": ""
        }, [
          J(t.$slots, "default")
        ], 8, _v)
      ])
    ]));
  }
}, Tv = { class: "mb-2 flex w-full flex-wrap justify-between text-sm text-gray-600 max-xxs:text-xxs" }, kv = {
  key: 0,
  class: "mb-2 h-fit w-full xs:w-fit"
}, Pv = { key: 0 }, $v = {
  key: 1,
  class: "ml-1"
}, Iv = { class: "flex w-fit flex-wrap" }, Dv = {
  key: 0,
  class: "font-semibold"
}, Fv = { class: "mb-1" }, Lv = {
  key: 0,
  class: "w-full whitespace-normal font-semibold text-primary"
}, Nv = { class: "w-full break-words" }, Rv = { class: "mb-1 flex flex-col" }, Mv = { key: 1 }, ux = {
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
      var a;
      return A(), k("div", {
        key: t.key,
        class: "mt-3 rounded-md border border-gray-300 bg-white px-4 py-3 lg:border lg:border-gray-300"
      }, [
        D("div", Tv, [
          t.itemId || t.timeStamp ? (A(), k("div", kv, [
            t.itemId ? (A(), k(ue, { key: 0 }, [
              t.itemId.routeName ? (A(), oe(q(et), {
                key: 1,
                href: n.route(t.itemId.routeName, t.itemId.routeData ? t.itemId.routeData : t.itemId.id)
              }, {
                default: he(() => [
                  t.itemId.prefix || t.itemId.prefix == null ? (A(), k(ue, { key: 0 }, [
                    pe("#")
                  ], 64)) : G("", !0),
                  pe(" " + Q(t.itemId.id), 1)
                ]),
                _: 1
              }, 8, ["href"])) : (A(), k("span", Pv, [
                t.itemId.prefix || t.itemId.prefix == null ? (A(), k(ue, { key: 0 }, [
                  pe("#")
                ], 64)) : G("", !0),
                pe(" " + Q(t.itemId.id), 1)
              ]))
            ], 64)) : G("", !0),
            t.timeStamp ? (A(), k("span", $v, [
              t.itemId ? (A(), k(ue, { key: 0 }, [
                pe("-")
              ], 64)) : G("", !0),
              pe(" " + Q(t.timeStamp), 1)
            ])) : G("", !0)
          ])) : G("", !0),
          D("div", Iv, [
            (A(!0), k(ue, null, He(e.pills, (o, i) => (A(), k(ue, { key: i }, [
              o.text ? (A(), k("span", {
                key: 0,
                class: "whitespace-nowrap rounded-md border bg-primary p-1 px-2 text-white",
                style: $n({
                  backgroundColor: o.color ? o.color : null
                })
              }, Q(o.text), 5)) : G("", !0)
            ], 64))), 128))
          ])
        ]),
        t.title ? (A(), k(ue, { key: 0 }, [
          !t.title.routeName && !t.title.href ? (A(), k("p", Dv, Q(t.title.text), 1)) : (A(), oe(q(et), {
            key: 1,
            href: t.title.href ? t.title.href : n.route(t.title.routeName, t.title.routeData),
            class: "font-semibold"
          }, {
            default: he(() => [
              pe(Q(t.title.text), 1)
            ]),
            _: 1
          }, 8, ["href"]))
        ], 64)) : G("", !0),
        D("div", Fv, [
          t.extraText ? (A(), k("p", Lv, [
            r[0] || (r[0] = pe(" Engineer Note: ")),
            D("span", Nv, Q(t.extraText), 1)
          ])) : G("", !0)
        ]),
        D("div", Rv, [
          (A(!0), k(ue, null, He(e.options, (o, i) => (A(), k(ue, null, [
            !o.routeName && !o.href ? (A(), k("span", {
              key: 0,
              style: $n({ color: o.color ? o.color : "#000" })
            }, Q(o.text), 5)) : (A(), oe(q(et), {
              key: 1,
              href: o.href ? o.href : n.route(o.routeName, o.routeData),
              style: $n({ color: o.color ? o.color : "#000" })
            }, {
              default: he(() => [
                pe(Q(o.text), 1)
              ]),
              _: 2
            }, 1032, ["href", "style"]))
          ], 64))), 256))
        ]),
        (a = t.amount) != null && a.amount ? (A(), k("div", Mv, [
          D("span", null, Q(t.amount.text + q(p1)(t.amount.amount)), 1)
        ])) : G("", !0),
        D("div", null, [
          J(n.$slots, "default")
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
const hi = (() => {
  const e = {};
  let t = 1;
  return {
    set(n, r, a) {
      typeof n[r] > "u" && (n[r] = {
        key: r,
        id: t
      }, t++), e[n[r].id] = a;
    },
    get(n, r) {
      if (!n || typeof n[r] > "u")
        return null;
      const a = n[r];
      return a.key === r ? e[a.id] : null;
    },
    delete(n, r) {
      if (typeof n[r] > "u")
        return;
      const a = n[r];
      a.key === r && (delete e[a.id], delete n[r]);
    }
  };
})(), Ea = {
  setData(e, t, n) {
    hi.set(e, t, n);
  },
  getData(e, t) {
    return hi.get(e, t);
  },
  removeData(e, t) {
    hi.delete(e, t);
  }
}, Bv = 1e6, jv = 1e3, is = "transitionend", zv = (e) => e == null ? `${e}` : {}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(), Uv = (e) => {
  do
    e += Math.floor(Math.random() * Bv);
  while (document.getElementById(e));
  return e;
}, xf = (e) => {
  let t = e.getAttribute("data-te-target");
  if (!t || t === "#") {
    let n = e.getAttribute("href");
    if (!n || !n.includes("#") && !n.startsWith("."))
      return null;
    n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), t = n && n !== "#" ? n.trim() : null;
  }
  return t;
}, Sf = (e) => {
  const t = xf(e);
  return t && document.querySelector(t) ? t : null;
}, kr = (e) => {
  const t = xf(e);
  return t ? document.querySelector(t) : null;
}, Vv = (e) => {
  if (!e)
    return 0;
  let { transitionDuration: t, transitionDelay: n } = window.getComputedStyle(e);
  const r = Number.parseFloat(t), a = Number.parseFloat(n);
  return !r && !a ? 0 : (t = t.split(",")[0], n = n.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(n)) * jv);
}, qv = (e) => {
  e.dispatchEvent(new Event(is));
}, Ef = (e) => !e || typeof e != "object" ? !1 : (typeof e.jquery < "u" && (e = e[0]), typeof e.nodeType < "u"), ss = (e) => Ef(e) ? e.jquery ? e[0] : e : typeof e == "string" && e.length > 0 ? document.querySelector(e) : null, Ma = (e, t, n) => {
  Object.keys(n).forEach((r) => {
    const a = n[r], o = t[r], i = o && Ef(o) ? "element" : zv(o);
    if (!new RegExp(a).test(i))
      throw new Error(
        `${e.toUpperCase()}: Option "${r}" provided type "${i}" but expected type "${a}".`
      );
  });
}, Za = (e) => {
  if (!e || e.getClientRects().length === 0)
    return !1;
  if (e.style && e.parentNode && e.parentNode.style) {
    const t = getComputedStyle(e), n = getComputedStyle(e.parentNode);
    return getComputedStyle(e).getPropertyValue("visibility") === "visible" || t.display !== "none" && n.display !== "none" && t.visibility !== "hidden";
  }
  return !1;
}, eo = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled") ? !0 : typeof e.disabled < "u" ? e.disabled : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false", Hv = (e) => {
  e.offsetHeight;
}, Af = () => {
  const { jQuery: e } = window;
  return e && !document.body.hasAttribute("data-te-no-jquery") ? e : null;
}, mi = [], Wv = (e) => {
  document.readyState === "loading" ? (mi.length || document.addEventListener("DOMContentLoaded", () => {
    mi.forEach((t) => t());
  }), mi.push(e)) : e();
}, ht = () => document.documentElement.dir === "rtl", Kv = (e) => document.createElement(e), Ec = (e) => {
  typeof e == "function" && e();
}, Gv = (e, t, n = !0) => {
  if (!n) {
    Ec(e);
    return;
  }
  const r = 5, a = Vv(t) + r;
  let o = !1;
  const i = ({ target: l }) => {
    l === t && (o = !0, t.removeEventListener(is, i), Ec(e));
  };
  t.addEventListener(is, i), setTimeout(() => {
    o || qv(t);
  }, a);
}, Yv = /[^.]*(?=\..*)\.|.*/, Jv = /\..*/, Xv = /::\d+$/, gi = {};
let Ac = 1;
const Qv = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, Zv = /^(mouseenter|mouseleave)/i, Of = /* @__PURE__ */ new Set([
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
function Cf(e, t) {
  return t && `${t}::${Ac++}` || e.uidEvent || Ac++;
}
function _f(e) {
  const t = Cf(e);
  return e.uidEvent = t, gi[t] = gi[t] || {}, gi[t];
}
function e2(e, t) {
  return function n(r) {
    return r.delegateTarget = e, n.oneOff && fe.off(e, r.type, t), t.apply(e, [r]);
  };
}
function t2(e, t, n) {
  return function r(a) {
    const o = e.querySelectorAll(t);
    for (let { target: i } = a; i && i !== this; i = i.parentNode)
      for (let l = o.length; l--; "")
        if (o[l] === i)
          return a.delegateTarget = i, r.oneOff && fe.off(e, a.type, n), n.apply(i, [a]);
    return null;
  };
}
function Tf(e, t, n = null) {
  const r = Object.keys(e);
  for (let a = 0, o = r.length; a < o; a++) {
    const i = e[r[a]];
    if (i.originalHandler === t && i.delegationSelector === n)
      return i;
  }
  return null;
}
function kf(e, t, n) {
  const r = typeof t == "string", a = r ? n : t;
  let o = Pf(e);
  return Of.has(o) || (o = e), [r, a, o];
}
function Oc(e, t, n, r, a) {
  if (typeof t != "string" || !e)
    return;
  if (n || (n = r, r = null), Zv.test(t)) {
    const C = (m) => function(x) {
      if (!x.relatedTarget || x.relatedTarget !== x.delegateTarget && !x.delegateTarget.contains(x.relatedTarget))
        return m.call(this, x);
    };
    r ? r = C(r) : n = C(n);
  }
  const [o, i, l] = kf(
    t,
    n,
    r
  ), u = _f(e), c = u[l] || (u[l] = {}), f = Tf(
    c,
    i,
    o ? n : null
  );
  if (f) {
    f.oneOff = f.oneOff && a;
    return;
  }
  const h = Cf(
    i,
    t.replace(Yv, "")
  ), g = o ? t2(e, n, r) : e2(e, n);
  g.delegationSelector = o ? n : null, g.originalHandler = i, g.oneOff = a, g.uidEvent = h, c[h] = g, e.addEventListener(l, g, o);
}
function ls(e, t, n, r, a) {
  const o = Tf(t[n], r, a);
  o && (e.removeEventListener(n, o, !!a), delete t[n][o.uidEvent]);
}
function n2(e, t, n, r) {
  const a = t[n] || {};
  Object.keys(a).forEach((o) => {
    if (o.includes(r)) {
      const i = a[o];
      ls(
        e,
        t,
        n,
        i.originalHandler,
        i.delegationSelector
      );
    }
  });
}
function Pf(e) {
  return e = e.replace(Jv, ""), Qv[e] || e;
}
const fe = {
  on(e, t, n, r) {
    Oc(e, t, n, r, !1);
  },
  one(e, t, n, r) {
    Oc(e, t, n, r, !0);
  },
  off(e, t, n, r) {
    if (typeof t != "string" || !e)
      return;
    const [a, o, i] = kf(
      t,
      n,
      r
    ), l = i !== t, u = _f(e), c = t.startsWith(".");
    if (typeof o < "u") {
      if (!u || !u[i])
        return;
      ls(
        e,
        u,
        i,
        o,
        a ? n : null
      );
      return;
    }
    c && Object.keys(u).forEach((h) => {
      n2(
        e,
        u,
        h,
        t.slice(1)
      );
    });
    const f = u[i] || {};
    Object.keys(f).forEach((h) => {
      const g = h.replace(Xv, "");
      if (!l || t.includes(g)) {
        const C = f[h];
        ls(
          e,
          u,
          i,
          C.originalHandler,
          C.delegationSelector
        );
      }
    });
  },
  trigger(e, t, n) {
    if (typeof t != "string" || !e)
      return null;
    const r = Af(), a = Pf(t), o = t !== a, i = Of.has(a);
    let l, u = !0, c = !0, f = !1, h = null;
    return o && r && (l = r.Event(t, n), r(e).trigger(l), u = !l.isPropagationStopped(), c = !l.isImmediatePropagationStopped(), f = l.isDefaultPrevented()), i ? (h = document.createEvent("HTMLEvents"), h.initEvent(a, u, !0)) : h = new CustomEvent(t, {
      bubbles: u,
      cancelable: !0
    }), typeof n < "u" && Object.keys(n).forEach((g) => {
      Object.defineProperty(h, g, {
        get() {
          return n[g];
        }
      });
    }), f && h.preventDefault(), c && e.dispatchEvent(h), h.defaultPrevented && typeof l < "u" && l.preventDefault(), h;
  }
}, r2 = "5.1.3";
class $f {
  constructor(t) {
    t = ss(t), t && (this._element = t, Ea.setData(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    Ea.removeData(this._element, this.constructor.DATA_KEY), fe.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t) => {
      this[t] = null;
    });
  }
  _queueCallback(t, n, r = !0) {
    Gv(t, n, r);
  }
  /** Static */
  static getInstance(t) {
    return Ea.getData(ss(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, n = {}) {
    return this.getInstance(t) || new this(t, typeof n == "object" ? n : null);
  }
  static get VERSION() {
    return r2;
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
function yi(e) {
  return e === "true" ? !0 : e === "false" ? !1 : e === Number(e).toString() ? Number(e) : e === "" || e === "null" ? null : e;
}
function bi(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const ce = {
  setDataAttribute(e, t, n) {
    e.setAttribute(`data-te-${bi(t)}`, n);
  },
  removeDataAttribute(e, t) {
    e.removeAttribute(`data-te-${bi(t)}`);
  },
  getDataAttributes(e) {
    if (!e)
      return {};
    const t = {};
    return Object.keys(e.dataset).filter((n) => n.startsWith("te")).forEach((n) => {
      if (n.startsWith("teClass"))
        return;
      let r = n.replace(/^te/, "");
      r = r.charAt(0).toLowerCase() + r.slice(1, r.length), t[r] = yi(e.dataset[n]);
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
      r = r.charAt(0).toLowerCase() + r.slice(1, r.length), t[r] = yi(t[n]);
    }), t;
  },
  getDataAttribute(e, t) {
    return yi(
      e.getAttribute(`data-te-${bi(t)}`)
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
    e && vi(t).forEach((n) => {
      e.classList.contains(n) ? e.classList.remove(n) : e.classList.add(n);
    });
  },
  addClass(e, t) {
    vi(t).forEach(
      (n) => !e.classList.contains(n) && e.classList.add(n)
    );
  },
  addStyle(e, t) {
    Object.keys(t).forEach((n) => {
      e.style[n] = t[n];
    });
  },
  removeClass(e, t) {
    vi(t).forEach(
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
function vi(e) {
  return typeof e == "string" ? e.split(" ") : Array.isArray(e) ? e : !1;
}
const a2 = 3, Me = {
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
    for (; r && r.nodeType === Node.ELEMENT_NODE && r.nodeType !== a2; )
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
      (n) => !eo(n) && Za(n)
    );
  }
};
ht();
ht();
ht();
ht();
ht();
ht();
const wi = "collapse", If = "te.collapse", to = `.${If}`, Cc = {
  toggle: !0,
  parent: null
}, o2 = {
  toggle: "boolean",
  parent: "(null|element)"
}, i2 = `show${to}`, s2 = `shown${to}`, l2 = `hide${to}`, c2 = `hidden${to}`, xi = "data-te-collapse-show", _c = "data-te-collapse-collapsed", ha = "data-te-collapse-collapsing", u2 = "data-te-collapse-horizontal", Pn = "data-te-collapse-item", Tc = `:scope [${Pn}] [${Pn}]`, f2 = "width", d2 = "height", p2 = "[data-te-collapse-item][data-te-collapse-show], [data-te-collapse-item][data-te-collapse-collapsing]", kc = "[data-te-collapse-init]", h2 = {
  visible: "!visible",
  hidden: "hidden",
  baseTransition: "overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsing: "h-0 transition-[height] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsingHorizontal: "w-0 h-auto transition-[width] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
}, m2 = {
  visible: "string",
  hidden: "string",
  baseTransition: "string",
  collapsing: "string",
  collapsingHorizontal: "string"
};
class Fn extends $f {
  constructor(t, n, r) {
    super(t), this._isTransitioning = !1, this._config = this._getConfig(n), this._classes = this._getClasses(r), this._triggerArray = [];
    const a = Me.find(kc);
    for (let o = 0, i = a.length; o < i; o++) {
      const l = a[o], u = Sf(l), c = Me.find(u).filter(
        (f) => f === this._element
      );
      u !== null && c.length && (this._selector = u, this._triggerArray.push(l));
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return Cc;
  }
  static get NAME() {
    return wi;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let t = [], n;
    if (this._config.parent) {
      const u = Me.find(
        Tc,
        this._config.parent
      );
      t = Me.find(
        p2,
        this._config.parent
      ).filter((c) => !u.includes(c));
    }
    const r = Me.findOne(this._selector);
    if (t.length) {
      const u = t.find((c) => r !== c);
      if (n = u ? Fn.getInstance(u) : null, n && n._isTransitioning)
        return;
    }
    if (fe.trigger(this._element, i2).defaultPrevented)
      return;
    t.forEach((u) => {
      r !== u && Fn.getOrCreateInstance(u, { toggle: !1 }).hide(), n || Ea.setData(u, If, null);
    });
    const a = this._getDimension(), o = a === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    ce.removeClass(this._element, this._classes.visible), ce.removeClass(this._element, this._classes.hidden), ce.addClass(this._element, o), this._element.removeAttribute(Pn), this._element.setAttribute(ha, ""), this._element.style[a] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const i = () => {
      this._isTransitioning = !1, ce.removeClass(this._element, this._classes.hidden), ce.removeClass(this._element, o), ce.addClass(this._element, this._classes.visible), this._element.removeAttribute(ha), this._element.setAttribute(Pn, ""), this._element.setAttribute(xi, ""), this._element.style[a] = "", fe.trigger(this._element, s2);
    }, l = `scroll${a[0].toUpperCase() + a.slice(1)}`;
    this._queueCallback(i, this._element, !0), this._element.style[a] = `${this._element[l]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || fe.trigger(this._element, l2).defaultPrevented)
      return;
    const t = this._getDimension(), n = t === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, Hv(this._element), ce.addClass(this._element, n), ce.removeClass(this._element, this._classes.visible), ce.removeClass(this._element, this._classes.hidden), this._element.setAttribute(ha, ""), this._element.removeAttribute(Pn), this._element.removeAttribute(xi);
    const r = this._triggerArray.length;
    for (let o = 0; o < r; o++) {
      const i = this._triggerArray[o], l = kr(i);
      l && !this._isShown(l) && this._addAriaAndCollapsedClass([i], !1);
    }
    this._isTransitioning = !0;
    const a = () => {
      this._isTransitioning = !1, ce.removeClass(this._element, n), ce.addClass(this._element, this._classes.visible), ce.addClass(this._element, this._classes.hidden), this._element.removeAttribute(ha), this._element.setAttribute(Pn, ""), fe.trigger(this._element, c2);
    };
    this._element.style[t] = "", this._queueCallback(a, this._element, !0);
  }
  _isShown(t = this._element) {
    return t.hasAttribute(xi);
  }
  // Private
  _getConfig(t) {
    return t = {
      ...Cc,
      ...ce.getDataAttributes(this._element),
      ...t
    }, t.toggle = !!t.toggle, t.parent = ss(t.parent), Ma(wi, t, o2), t;
  }
  _getClasses(t) {
    const n = ce.getDataClassAttributes(this._element);
    return t = {
      ...h2,
      ...n,
      ...t
    }, Ma(wi, t, m2), t;
  }
  _getDimension() {
    return this._element.hasAttribute(u2) ? f2 : d2;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const t = Me.find(
      Tc,
      this._config.parent
    );
    Me.find(kc, this._config.parent).filter((n) => !t.includes(n)).forEach((n) => {
      const r = kr(n);
      r && this._addAriaAndCollapsedClass([n], this._isShown(r));
    });
  }
  _addAriaAndCollapsedClass(t, n) {
    t.length && t.forEach((r) => {
      n ? r.removeAttribute(_c) : r.setAttribute(`${_c}`, ""), r.setAttribute("aria-expanded", n);
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = {};
      typeof t == "string" && /show|hide/.test(t) && (n.toggle = !1);
      const r = Fn.getOrCreateInstance(this, n);
      if (typeof t == "string") {
        if (typeof r[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        r[t]();
      }
    });
  }
}
let Pc = [];
const g2 = (e, t = "hide") => {
  const n = `click.dismiss${e.EVENT_KEY}`, r = e.NAME;
  Pc.includes(r) || (Pc.push(r), fe.on(
    document,
    n,
    `[data-te-${r}-dismiss]`,
    function(a) {
      if (["A", "AREA"].includes(this.tagName) && a.preventDefault(), eo(this))
        return;
      const o = kr(this) || this.closest(`.${r}`) || this.closest(`[data-te-${r}-init]`);
      o && e.getOrCreateInstance(o)[t]();
    }
  ));
}, Si = "alert", y2 = "te.alert", Df = `.${y2}`, b2 = `close${Df}`, v2 = `closed${Df}`, mr = "data-te-alert-show", w2 = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, $c = {
  animation: !0,
  autohide: !0,
  delay: 1e3
}, x2 = {
  fadeIn: "animate-[fade-in_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none",
  fadeOut: "animate-[fade-out_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none"
}, S2 = {
  fadeIn: "string",
  fadeOut: "string"
};
class Ba extends $f {
  constructor(t, n, r) {
    super(t), this._element = t, this._config = this._getConfig(n), this._classes = this._getClasses(r), this._didInit = !1, this._init();
  }
  // Getters
  static get DefaultType() {
    return w2;
  }
  static get Default() {
    return $c;
  }
  static get NAME() {
    return Si;
  }
  // Public
  close() {
    if (fe.trigger(this._element, b2).defaultPrevented)
      return;
    let t = 0;
    this._config.animation && (t = 300, ce.addClass(this._element, this._classes.fadeOut)), this._element.removeAttribute(mr), setTimeout(() => {
      this._queueCallback(
        () => this._destroyElement(),
        this._element,
        this._config.animation
      );
    }, t);
  }
  show() {
    if (this._element) {
      if (this._config.autohide && this._setupAutohide(), !this._element.hasAttribute(mr) && (ce.removeClass(this._element, "hidden"), ce.addClass(this._element, "block"), Za(this._element))) {
        const t = (n) => {
          ce.removeClass(this._element, "hidden"), ce.addClass(this._element, "block"), fe.off(n.target, "animationend", t);
        };
        this._element.setAttribute(mr, ""), fe.on(this._element, "animationend", t);
      }
      this._config.animation && (ce.removeClass(this._element, this._classes.fadeOut), ce.addClass(this._element, this._classes.fadeIn));
    }
  }
  hide() {
    if (this._element && this._element.hasAttribute(mr)) {
      this._element.removeAttribute(mr);
      const t = (n) => {
        ce.addClass(this._element, "hidden"), ce.removeClass(this._element, "block"), this._timeout !== null && (clearTimeout(this._timeout), this._timeout = null), fe.off(n.target, "animationend", t);
      };
      fe.on(this._element, "animationend", t), ce.removeClass(this._element, this._classes.fadeIn), ce.addClass(this._element, this._classes.fadeOut);
    }
  }
  // Private
  _init() {
    this._didInit || (g2(Ba, "close"), this._didInit = !0);
  }
  _getConfig(t) {
    return t = {
      ...$c,
      ...ce.getDataAttributes(this._element),
      ...typeof t == "object" && t ? t : {}
    }, Ma(Si, t, this.constructor.DefaultType), t;
  }
  _getClasses(t) {
    const n = ce.getDataClassAttributes(this._element);
    return t = {
      ...x2,
      ...n,
      ...t
    }, Ma(Si, t, S2), t;
  }
  _setupAutohide() {
    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }
  _destroyElement() {
    this._element.remove(), fe.trigger(this._element, v2), this.dispose();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Ba.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
ht(), ht();
(() => {
  var e = { 454: (r, a, o) => {
    o.d(a, { Z: () => u });
    var i = o(645), l = o.n(i)()(function(c) {
      return c[1];
    });
    l.push([r.id, "INPUT:-webkit-autofill,SELECT:-webkit-autofill,TEXTAREA:-webkit-autofill{animation-name:onautofillstart}INPUT:not(:-webkit-autofill),SELECT:not(:-webkit-autofill),TEXTAREA:not(:-webkit-autofill){animation-name:onautofillcancel}@keyframes onautofillstart{}@keyframes onautofillcancel{}", ""]);
    const u = l;
  }, 645: (r) => {
    r.exports = function(a) {
      var o = [];
      return o.toString = function() {
        return this.map(function(i) {
          var l = a(i);
          return i[2] ? "@media ".concat(i[2], " {").concat(l, "}") : l;
        }).join("");
      }, o.i = function(i, l, u) {
        typeof i == "string" && (i = [[null, i, ""]]);
        var c = {};
        if (u)
          for (var f = 0; f < this.length; f++) {
            var h = this[f][0];
            h != null && (c[h] = !0);
          }
        for (var g = 0; g < i.length; g++) {
          var C = [].concat(i[g]);
          u && c[C[0]] || (l && (C[2] ? C[2] = "".concat(l, " and ").concat(C[2]) : C[2] = l), o.push(C));
        }
      }, o;
    };
  }, 810: () => {
    (function() {
      if (typeof window < "u")
        try {
          var r = new window.CustomEvent("test", { cancelable: !0 });
          if (r.preventDefault(), r.defaultPrevented !== !0)
            throw new Error("Could not prevent default");
        } catch {
          var a = function(o, i) {
            var l, u;
            return (i = i || {}).bubbles = !!i.bubbles, i.cancelable = !!i.cancelable, (l = document.createEvent("CustomEvent")).initCustomEvent(o, i.bubbles, i.cancelable, i.detail), u = l.preventDefault, l.preventDefault = function() {
              u.call(this);
              try {
                Object.defineProperty(this, "defaultPrevented", { get: function() {
                  return !0;
                } });
              } catch {
                this.defaultPrevented = !0;
              }
            }, l;
          };
          a.prototype = window.Event.prototype, window.CustomEvent = a;
        }
    })();
  }, 379: (r, a, o) => {
    var i, l = function() {
      var E = {};
      return function(_) {
        if (E[_] === void 0) {
          var I = document.querySelector(_);
          if (window.HTMLIFrameElement && I instanceof window.HTMLIFrameElement)
            try {
              I = I.contentDocument.head;
            } catch {
              I = null;
            }
          E[_] = I;
        }
        return E[_];
      };
    }(), u = [];
    function c(E) {
      for (var _ = -1, I = 0; I < u.length; I++)
        if (u[I].identifier === E) {
          _ = I;
          break;
        }
      return _;
    }
    function f(E, _) {
      for (var I = {}, j = [], z = 0; z < E.length; z++) {
        var B = E[z], M = _.base ? B[0] + _.base : B[0], F = I[M] || 0, V = "".concat(M, " ").concat(F);
        I[M] = F + 1;
        var p = c(V), b = { css: B[1], media: B[2], sourceMap: B[3] };
        p !== -1 ? (u[p].references++, u[p].updater(b)) : u.push({ identifier: V, updater: $(b, _), references: 1 }), j.push(V);
      }
      return j;
    }
    function h(E) {
      var _ = document.createElement("style"), I = E.attributes || {};
      if (I.nonce === void 0) {
        var j = o.nc;
        j && (I.nonce = j);
      }
      if (Object.keys(I).forEach(function(B) {
        _.setAttribute(B, I[B]);
      }), typeof E.insert == "function")
        E.insert(_);
      else {
        var z = l(E.insert || "head");
        if (!z)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        z.appendChild(_);
      }
      return _;
    }
    var g, C = (g = [], function(E, _) {
      return g[E] = _, g.filter(Boolean).join(`
`);
    });
    function m(E, _, I, j) {
      var z = I ? "" : j.media ? "@media ".concat(j.media, " {").concat(j.css, "}") : j.css;
      if (E.styleSheet)
        E.styleSheet.cssText = C(_, z);
      else {
        var B = document.createTextNode(z), M = E.childNodes;
        M[_] && E.removeChild(M[_]), M.length ? E.insertBefore(B, M[_]) : E.appendChild(B);
      }
    }
    function x(E, _, I) {
      var j = I.css, z = I.media, B = I.sourceMap;
      if (z ? E.setAttribute("media", z) : E.removeAttribute("media"), B && typeof btoa < "u" && (j += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(B)))), " */")), E.styleSheet)
        E.styleSheet.cssText = j;
      else {
        for (; E.firstChild; )
          E.removeChild(E.firstChild);
        E.appendChild(document.createTextNode(j));
      }
    }
    var S = null, O = 0;
    function $(E, _) {
      var I, j, z;
      if (_.singleton) {
        var B = O++;
        I = S || (S = h(_)), j = m.bind(null, I, B, !1), z = m.bind(null, I, B, !0);
      } else
        I = h(_), j = x.bind(null, I, _), z = function() {
          (function(M) {
            if (M.parentNode === null)
              return !1;
            M.parentNode.removeChild(M);
          })(I);
        };
      return j(E), function(M) {
        if (M) {
          if (M.css === E.css && M.media === E.media && M.sourceMap === E.sourceMap)
            return;
          j(E = M);
        } else
          z();
      };
    }
    r.exports = function(E, _) {
      (_ = _ || {}).singleton || typeof _.singleton == "boolean" || (_.singleton = (i === void 0 && (i = !!(window && document && document.all && !window.atob)), i));
      var I = f(E = E || [], _);
      return function(j) {
        if (j = j || [], Object.prototype.toString.call(j) === "[object Array]") {
          for (var z = 0; z < I.length; z++) {
            var B = c(I[z]);
            u[B].references--;
          }
          for (var M = f(j, _), F = 0; F < I.length; F++) {
            var V = c(I[F]);
            u[V].references === 0 && (u[V].updater(), u.splice(V, 1));
          }
          I = M;
        }
      };
    };
  } }, t = {};
  function n(r) {
    var a = t[r];
    if (a !== void 0)
      return a.exports;
    var o = t[r] = { id: r, exports: {} };
    return e[r](o, o.exports, n), o.exports;
  }
  n.n = (r) => {
    var a = r && r.__esModule ? () => r.default : () => r;
    return n.d(a, { a }), a;
  }, n.d = (r, a) => {
    for (var o in a)
      n.o(a, o) && !n.o(r, o) && Object.defineProperty(r, o, { enumerable: !0, get: a[o] });
  }, n.o = (r, a) => Object.prototype.hasOwnProperty.call(r, a), (() => {
    var r = n(379), a = n.n(r), o = n(454);
    function i(u) {
      if (!u.hasAttribute("autocompleted")) {
        u.setAttribute("autocompleted", "");
        var c = new window.CustomEvent("onautocomplete", { bubbles: !0, cancelable: !0, detail: null });
        u.dispatchEvent(c) || (u.value = "");
      }
    }
    function l(u) {
      u.hasAttribute("autocompleted") && (u.removeAttribute("autocompleted"), u.dispatchEvent(new window.CustomEvent("onautocomplete", { bubbles: !0, cancelable: !1, detail: null })));
    }
    a()(o.Z, { insert: "head", singleton: !1 }), o.Z.locals, n(810), document.addEventListener("animationstart", function(u) {
      u.animationName === "onautofillstart" ? i(u.target) : l(u.target);
    }, !0), document.addEventListener("input", function(u) {
      u.inputType !== "insertReplacementText" && "data" in u ? l(u.target) : i(u.target);
    }, !0);
  })();
})();
ht();
ht();
Uv("chips-input-");
const $t = {
  plugins: {
    legend: {
      labels: {
        color: "rgb(102,102,102)"
      }
    }
  }
}, E2 = {
  line: {
    options: {
      ...$t,
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
      ...$t,
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
      ...$t,
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
      ...$t,
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
      ...$t,
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
      ...$t,
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
      ...$t,
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
      ...$t,
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
var no = function(e) {
  this.element = e, this.handlers = {};
}, Ff = { isEmpty: { configurable: !0 } };
no.prototype.bind = function(e, t) {
  typeof this.handlers[e] > "u" && (this.handlers[e] = []), this.handlers[e].push(t), this.element.addEventListener(e, t, !1);
};
no.prototype.unbind = function(e, t) {
  var n = this;
  this.handlers[e] = this.handlers[e].filter(function(r) {
    return t && r !== t ? !0 : (n.element.removeEventListener(e, r, !1), !1);
  });
};
no.prototype.unbindAll = function() {
  for (var e in this.handlers)
    this.unbind(e);
};
Ff.isEmpty.get = function() {
  var e = this;
  return Object.keys(this.handlers).every(
    function(t) {
      return e.handlers[t].length === 0;
    }
  );
};
Object.defineProperties(no.prototype, Ff);
typeof document < "u" && "WebkitAppearance" in document.documentElement.style, typeof window < "u" && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch), typeof navigator < "u" && navigator.msMaxTouchPoints, typeof navigator < "u" && /Chrome/i.test(navigator && navigator.userAgent);
Kv("div");
const A2 = (e) => {
  Wv(() => {
    const t = Af();
    if (t) {
      const n = e.NAME, r = t.fn[n];
      t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = () => (t.fn[n] = r, e.jQueryInterface);
    }
  });
}, O2 = (e, t) => {
  fe.on(
    document,
    `click.te.${e.NAME}`,
    t,
    function(n) {
      n.preventDefault(), e.getOrCreateInstance(this).toggle();
    }
  );
}, C2 = (e, t) => {
  fe.on(
    document,
    `click.te.${e.NAME}.data-api`,
    t,
    function(n) {
      ["A", "AREA"].includes(this.tagName) && n.preventDefault(), !eo(this) && e.getOrCreateInstance(this).show();
    }
  );
}, _2 = (e, t) => {
  fe.on(
    document,
    `click.te.${e.NAME}.data-api`,
    t,
    function(n) {
      const r = kr(this);
      if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), eo(this))
        return;
      fe.one(r, e.EVENT_HIDDEN, () => {
        Za(this) && this.focus();
      });
      const a = Me.findOne(e.OPEN_SELECTOR);
      a && a !== r && e.getInstance(a).hide(), e.getOrCreateInstance(r).toggle(this);
    }
  );
}, T2 = (e, t) => {
  fe.on(
    document,
    `click.te.${e.NAME}`,
    t,
    (n) => {
      n.preventDefault();
      const r = n.target.closest(t);
      e.getOrCreateInstance(r).toggle();
    }
  );
}, k2 = (e, t) => {
  fe.on(
    document,
    `click.te.${e.NAME}`,
    t,
    function(n) {
      const r = kr(this);
      ["A", "AREA"].includes(this.tagName) && n.preventDefault(), fe.one(r, e.EVENT_SHOW, (o) => {
        o.defaultPrevented || fe.one(r, e.EVENT_HIDDEN, () => {
          Za(this) && this.focus();
        });
      });
      const a = Me.findOne(
        `[${e.OPEN_SELECTOR}="true"]`
      );
      a && e.getInstance(a).hide(), e.getOrCreateInstance(r).toggle(this);
    }
  );
}, P2 = (e, t) => {
  fe.one(
    document,
    "mousedown",
    t,
    e.autoInitial(new e())
  );
}, $2 = (e, t) => {
  fe.on(
    document,
    `click.te.${e.NAME}.data-api`,
    t,
    function(n) {
      (n.target.tagName === "A" || n.delegateTarget && n.delegateTarget.tagName === "A") && n.preventDefault();
      const r = Sf(this);
      Me.find(r).forEach((a) => {
        e.getOrCreateInstance(a, { toggle: !1 }).toggle();
      });
    }
  );
}, I2 = (e, t) => {
  [].slice.call(
    document.querySelectorAll(t)
  ).map(function(n) {
    return new e(n);
  });
}, D2 = (e, t) => {
  [].slice.call(
    document.querySelectorAll(t)
  ).map(function(n) {
    return new e(n);
  });
}, F2 = (e, t) => {
  Me.find(t).forEach((n) => {
    new e(n);
  }), fe.on(
    document,
    `click.te.${e.NAME}.data-api`,
    `${t} img:not([data-te-lightbox-disabled])`,
    e.toggle()
  );
}, L2 = (e, t) => {
  const n = (o) => o[0] === "{" && o[o.length - 1] === "}" || o[0] === "[" && o[o.length - 1] === "]", r = (o) => typeof o != "string" ? o : n(o) ? JSON.parse(o.replace(/'/g, '"')) : o, a = (o) => {
    const i = {};
    return Object.keys(o).forEach((l) => {
      if (l.match(/dataset.*/)) {
        const u = l.slice(7, 8).toLowerCase().concat(l.slice(8));
        i[u] = r(o[l]);
      }
    }), i;
  };
  Me.find(t).forEach((o) => {
    if (ce.getDataAttribute(o, "chart") !== "bubble" && ce.getDataAttribute(o, "chart") !== "scatter") {
      const i = ce.getDataAttributes(o), l = {
        data: {
          datasets: [a(i)]
        }
      };
      return i.chart && (l.type = i.chart), i.labels && (l.data.labels = JSON.parse(i.labels.replace(/'/g, '"'))), new e(o, {
        ...l,
        ...E2[l.type]
      });
    }
    return null;
  });
};
class N2 {
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
const cs = new N2(), yr = {
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
    advanced: L2
  },
  // togglers
  button: {
    name: "Button",
    selector: "[data-te-toggle='button']",
    isToggler: !0,
    callback: T2
  },
  collapse: {
    name: "Collapse",
    selector: "[data-te-collapse-init]",
    isToggler: !0,
    callback: $2
  },
  dropdown: {
    name: "Dropdown",
    selector: "[data-te-dropdown-toggle-ref]",
    isToggler: !0,
    callback: O2
  },
  modal: {
    name: "Modal",
    selector: "[data-te-toggle='modal']",
    isToggler: !0,
    callback: k2
  },
  ripple: {
    name: "Ripple",
    selector: "[data-te-ripple-init]",
    isToggler: !0,
    callback: P2
  },
  offcanvas: {
    name: "Offcanvas",
    selector: "[data-te-offcanvas-toggle]",
    isToggler: !0,
    callback: _2
  },
  tab: {
    name: "Tab",
    selector: "[data-te-toggle='tab'], [data-te-toggle='pill'], [data-te-toggle='list']",
    isToggler: !0,
    callback: C2
  },
  tooltip: {
    name: "Tooltip",
    selector: "[data-te-toggle='tooltip']",
    isToggler: !1,
    callback: I2
  },
  popover: {
    name: "Popover",
    selector: "[data-te-toggle='popover']",
    isToggler: !0,
    callback: D2
  },
  lightbox: {
    name: "Lightbox",
    selector: "[data-te-lightbox-init]",
    isToggler: !0,
    callback: F2
  },
  touch: {
    name: "Touch",
    selector: "[data-te-touch-init]"
  }
}, R2 = (e) => yr[e.NAME] || null, M2 = (e, t) => {
  if (!e || !t.allowReinits && cs.isInited(e.NAME))
    return;
  cs.add(e.NAME);
  const n = R2(e), r = (n == null ? void 0 : n.isToggler) || !1;
  if (A2(e), n != null && n.advanced) {
    n == null || n.advanced(e, n == null ? void 0 : n.selector);
    return;
  }
  if (r) {
    n == null || n.callback(e, n == null ? void 0 : n.selector);
    return;
  }
  Me.find(n == null ? void 0 : n.selector).forEach((a) => {
    let o = e.getInstance(a);
    o || (o = new e(a), n != null && n.onInit && o[n.onInit]());
  });
}, B2 = (e, t) => {
  e.forEach((n) => M2(n, t));
}, j2 = {
  allowReinits: !1,
  checkOtherImports: !1
}, z2 = (e, t = {}) => {
  t = { ...j2, ...t };
  const n = Object.keys(yr).map((r) => {
    if (document.querySelector(yr[r].selector)) {
      const a = e[yr[r].name];
      return !a && !cs.isInited(r) && t.checkOtherImports && console.warn(
        `Please import ${yr[r].name} from "tw-elements" package and add it to a object parameter inside "initTE" function`
      ), a;
    }
  });
  B2(n, t);
}, U2 = { role: "alert" }, V2 = {
  class: "mt-2 hidden w-full items-center rounded bg-primary-100 px-6 py-1 text-base text-neutral-800 shadow-sm data-[te-alert-show]:inline-flex sm:rounded-lg",
  role: "alert",
  "data-te-alert-init": "",
  "data-te-alert-show": ""
}, fx = {
  __name: "Alert",
  props: {
    message: String
  },
  setup(e) {
    return We(() => {
      z2({ Alert: Ba });
    }), (t, n) => (A(), k("div", U2, [
      D("div", null, [
        D("div", V2, [
          J(t.$slots, "default"),
          n[0] || (n[0] = D("button", {
            type: "button",
            class: "ml-auto box-content rounded-none border-none p-1 text-neutral-900 opacity-50 hover:text-neutral-900 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none",
            "data-te-alert-dismiss": "",
            "aria-label": "Close"
          }, [
            D("span", { class: "w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25" }, [
              D("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                class: "h-6 w-6"
              }, [
                D("path", {
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
}, q2 = ["aria-controls"], H2 = {
  class: "text-xs font-semibold uppercase leading-normal text-primary hover:text-primary-700",
  type: "button"
}, W2 = ["id"], K2 = {
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
    const t = e, n = Z(null), r = Z(null), a = Z(t.open);
    We(() => {
      r.value = new Fn(n.value, {
        toggle: t.open
      });
    });
    const o = () => {
      r.value.toggle(), a.value = !a.value;
    };
    return (i, l) => (A(), k("div", {
      class: X(["mt-2 rounded-lg border-2 border-gray-200 dark:border-gray-700", { "px-4 py-2": !e.header }])
    }, [
      D("div", {
        class: X(["bg-white sm:rounded-lg", { "p-1": !e.header }])
      }, [
        D("div", {
          onClick: o,
          class: "focusable !block rounded-lg border-b-2 border-gray-200 bg-neutral-50 px-6 py-1 text-center",
          tabindex: "0",
          "aria-controls": e.header ? e.header.replaceAll(" ", "_") : "collapsable",
          style: $n({ backgroundColor: e.headerColor })
        }, [
          pe(Q(e.header) + " ", 1),
          D("button", H2, Q(a.value ? "Hide" : "Show"), 1)
        ], 12, q2),
        D("div", {
          class: "!visible hidden overflow-hidden",
          id: e.header ? e.header.replaceAll(" ", "_") : "collapsable",
          ref_key: "collapseRef",
          ref: n
        }, [
          D("div", {
            class: X([{ "px-4 pb-2": e.header }, "mt-2"])
          }, [
            J(i.$slots, "default")
          ], 2)
        ], 8, W2)
      ], 2)
    ], 2));
  }
}, G2 = { class: "relative" }, dx = {
  __name: "Dropdown",
  props: {
    align: {
      default: "right"
    },
    width: {
      default: "48"
    },
    contentClasses: {
      default: () => ["py-1", "bg-white"]
    }
  },
  setup(e) {
    const t = e, n = (i) => {
      o.value && i.key === "Escape" && (o.value = !1);
    };
    We(() => document.addEventListener("keydown", n)), Pr(() => document.removeEventListener("keydown", n));
    const r = se(() => isNaN(parseInt(t.width)) ? t.width : "w-" + t.width), a = se(() => t.align === "left" ? "origin-top-left left-0" : t.align === "right" ? "origin-top-right right-0" : "origin-top"), o = Z(!1);
    return (i, l) => (A(), k("div", G2, [
      D("div", {
        onClick: l[0] || (l[0] = (u) => o.value = !o.value)
      }, [
        J(i.$slots, "trigger")
      ]),
      Be(D("div", {
        class: "fixed inset-0 z-40",
        onClick: l[1] || (l[1] = (u) => o.value = !1)
      }, null, 512), [
        [Nt, o.value]
      ]),
      ge(rn, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95"
      }, {
        default: he(() => [
          Be(D("div", {
            class: X(["absolute z-50 mt-2 rounded-md shadow-lg", [r.value, a.value]]),
            style: { display: "none" },
            onClick: l[2] || (l[2] = (u) => o.value = !1)
          }, [
            D("div", {
              class: X(["rounded ring-1 ring-black ring-opacity-5", e.contentClasses])
            }, [
              J(i.$slots, "content")
            ], 2)
          ], 2), [
            [Nt, o.value]
          ])
        ]),
        _: 3
      })
    ]));
  }
}, px = {
  __name: "DropdownLink",
  setup(e) {
    return (t, n) => (A(), oe(q(et), { class: "focusable block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none" }, {
      default: he(() => [
        J(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}, Y2 = ["href", "target"], hx = {
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
    return (r, a) => e.href && (e.method || e.data) ? (A(), oe(q(et), {
      key: 0,
      href: e.href,
      method: e.method,
      data: e.data,
      class: X(["focusable inline-flex cursor-pointer select-none items-center justify-center gap-1 rounded px-2 text-sm font-medium leading-normal", n()]),
      as: "button",
      tabindex: "0"
    }, {
      default: he(() => [
        J(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "method", "data", "class"])) : (A(), k("a", {
      key: 1,
      href: e.href,
      target: e.target,
      class: X(["focusable inline-flex cursor-pointer select-none items-center justify-center gap-1 rounded px-2 text-sm font-medium leading-normal", n()]),
      tabindex: "0"
    }, [
      J(r.$slots, "default")
    ], 10, Y2));
  }
}, J2 = {
  class: "relative inline-flex",
  "data-te-dropdown-ref": ""
}, X2 = ["id"], Q2 = ["aria-labelledby"], mx = {
  __name: "LinkDropdownButton",
  props: {
    title: String
  },
  setup(e) {
    return (t, n) => (A(), k("div", J2, [
      D("button", {
        class: "focusable flex items-center whitespace-nowrap rounded bg-primary px-2 text-sm text-white hover:bg-primary-700 motion-reduce:transition-none",
        type: "button",
        id: e.title,
        "data-te-dropdown-toggle-ref": "",
        "aria-expanded": "false",
        "data-te-ripple-init": "",
        "data-te-ripple-color": "light"
      }, [
        pe(Q(e.title) + " ", 1),
        n[0] || (n[0] = D("span", { class: "mx-1 w-2" }, [
          D("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            class: "h-5 w-5"
          }, [
            D("path", {
              "fill-rule": "evenodd",
              d: "M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",
              "clip-rule": "evenodd"
            })
          ])
        ], -1))
      ], 8, X2),
      D("ul", {
        class: "absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block",
        "aria-labelledby": e.title,
        "data-te-dropdown-menu-ref": ""
      }, [
        J(t.$slots, "default")
      ], 8, Q2)
    ]));
  }
}, Z2 = ["href"], gx = {
  __name: "LinkDropdownButtonItem",
  props: {
    href: String,
    title: String
  },
  setup(e) {
    return (t, n) => (A(), k("li", null, [
      D("a", {
        class: "focusable inline-flex w-full items-center justify-center whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600",
        href: e.href,
        "data-te-dropdown-item-ref": ""
      }, Q(e.title), 9, Z2)
    ]));
  }
}, yx = {
  __name: "Logs",
  props: {
    header: { default: "Logs" },
    logs: Object
  },
  setup(e) {
    return (t, n) => (A(), oe(q(K2), { header: e.header }, {
      default: he(() => [
        ge(q(mw), { logs: e.logs }, null, 8, ["logs"])
      ]),
      _: 1
    }, 8, ["header"]));
  }
}, ew = {
  key: 0,
  class: "flex w-full items-center justify-center"
}, tw = {
  key: 1,
  class: "mt-1",
  id: "logs"
}, nw = {
  key: 0,
  class: "text-center"
}, rw = {
  key: 1,
  class: "ml-3 border-l-2 border-primary"
}, aw = { class: "flex-start w-full md:flex" }, ow = { class: "-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-primary text-xs text-white" }, iw = { class: "mb-3 ml-2 block w-full rounded-lg bg-neutral-50 px-3 py-2 shadow-md shadow-black/5" }, sw = { class: "mb-1 flex justify-between" }, lw = { class: "text-sm text-neutral-500" }, cw = {
  key: 0,
  class: "text-bold mr-0.5 text-sm text-primary-500"
}, uw = {
  key: 1,
  class: "text-sm text-primary-500"
}, fw = { class: "text-sm text-neutral-500" }, dw = { class: "font-medium" }, pw = {
  key: 0,
  class: "line-through"
}, hw = ["innerHTML"], mw = {
  __name: "LogsContent",
  props: {
    logs: Object
  },
  setup(e) {
    return Dr.add(vh, zi, xh, gh, wh), (t, n) => e.logs == null ? (A(), k("div", ew, [
      ge(q(Rf))
    ])) : (A(), k("div", tw, [
      e.logs.total ? (A(), k("ol", rw, [
        (A(!0), k(ue, null, He(e.logs.data, (r) => (A(), k("li", {
          key: r.id
        }, [
          D("div", aw, [
            D("div", ow, [
              ge(q(ft), {
                icon: r.icon
              }, null, 8, ["icon"])
            ]),
            D("div", iw, [
              D("div", sw, [
                D("span", lw, [
                  pe(Q(r.event_formatted) + " ", 1),
                  r.reference ? (A(), k("span", cw, Q(r.reference), 1)) : G("", !0),
                  r.causer ? (A(), k(ue, { key: 1 }, [
                    r.causer.id ? (A(), oe(q(et), {
                      key: 0,
                      href: t.route("users.show", r.causer.id),
                      class: "text-sm text-primary-500"
                    }, {
                      default: he(() => [
                        pe(" (" + Q(r.causer.first_name) + ") ", 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])) : (A(), k("span", uw, "(" + Q(r.causer.first_name) + ")", 1))
                  ], 64)) : G("", !0)
                ]),
                D("span", fw, Q(r.created_date_full), 1)
              ]),
              (A(!0), k(ue, null, He(r.changes_formatted, (a, o) => (A(), k("p", {
                key: o,
                class: "mb-0 text-neutral-700"
              }, [
                D("span", dw, Q(o) + ":", 1),
                a.old ? (A(), k("span", pw, Q(a.old), 1)) : G("", !0),
                pe(" " + Q(a.new), 1)
              ]))), 128)),
              r.description_details ? (A(), k("p", {
                key: 0,
                class: "text-neutral-700",
                innerHTML: r.description_details
              }, null, 8, hw)) : G("", !0)
            ])
          ])
        ]))), 128))
      ])) : (A(), k("p", nw, "No Data")),
      e.logs.links ? (A(), oe(q(Lf), {
        key: 2,
        class: "mt-6",
        links: e.logs.links,
        logs: !0
      }, null, 8, ["links"])) : G("", !0)
    ]));
  }
}, bx = /* @__PURE__ */ jt({
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
    resizable: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = e, r = t, a = Z(null);
    Ft(
      () => n.show,
      () => {
        n.show ? document.body.style.overflow = "hidden" : document.body.style.overflow = null;
      }
    );
    const o = () => {
      n.closeable && r("close");
    }, i = (E) => {
      E.key === "Escape" && n.show && o();
    };
    We(() => document.addEventListener("keydown", i)), Pr(() => {
      document.removeEventListener("keydown", i), document.removeEventListener("mousemove", $), document.removeEventListener("mouseup", O), document.body.style.overflow = null;
    });
    const l = se(() => {
      let E = [];
      return E.push(
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
      ), n.hideOverflow && E.push("overflow-hidden"), E.join(" ");
    }), u = Z(!1), c = Z(null), f = Z(0), h = Z(0), g = Z(0), C = Z(0), m = Z(null), x = Z(null), S = (E, _) => {
      u.value = !0, document.addEventListener("mousemove", $), document.addEventListener("mouseup", O), c.value = _, f.value = E.clientX, h.value = E.clientY, g.value = a.value.offsetWidth, C.value = a.value.offsetHeight;
    }, O = (E) => {
      u.value = !1, document.removeEventListener("mousemove", $), document.removeEventListener("mouseup", O);
    }, $ = (E) => {
      if (!u.value)
        return;
      const _ = (E.clientX - f.value) * 2, I = E.clientY - h.value;
      c.value.includes("x") && (m.value = g.value + _ + "px"), c.value.includes("-x") && (m.value = g.value - _ + "px"), c.value.includes("y") && (x.value = C.value + I + "px");
    };
    return (E, _) => (A(), oe(Kf, { to: "body" }, [
      ge(rn, { "leave-active-class": "duration-200" }, {
        default: he(() => [
          Be(D("div", {
            class: X(["modal fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0", { flex: e.alignCenter, "mb-16 items-center justify-center": e.alignCenter }]),
            "scroll-region": ""
          }, [
            ge(rn, {
              "enter-active-class": `backdrop-transition enter ease-out duration-[${e.backdropDuration}ms]`,
              "enter-from-class": "opacity-0",
              "enter-to-class": "opacity-100",
              "leave-active-class": `backdrop-transition leave ease-in duration-[${e.backdropDuration}ms]`,
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: he(() => [
                Be(D("div", {
                  class: "fixed inset-0 transform transition-all",
                  onClick: o
                }, _[5] || (_[5] = [
                  D("div", { class: "backdrop absolute inset-0 bg-gray-500 opacity-75" }, null, -1)
                ]), 512), [
                  [Nt, e.show]
                ])
              ]),
              _: 1
            }, 8, ["enter-active-class", "leave-active-class"]),
            ge(rn, {
              "enter-active-class": `modal-transition enter ease-out duration-[${e.modalDuration}ms]`,
              "enter-from-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              "enter-to-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-active-class": `modal-transition leave ease-in duration-[${e.modalDuration}ms]`,
              "leave-from-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-to-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            }, {
              default: he(() => [
                Be(D("div", {
                  ref_key: "modalContent",
                  ref: a,
                  class: X(["mb-6 transform rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full", l.value + (e.showBorder ? " border-pink rounded-md border-2 border-solid" : "")]),
                  style: $n({
                    userSelect: u.value ? "none" : "auto",
                    transition: u.value ? "none" : "",
                    width: m.value || "",
                    height: x.value || "",
                    maxWidth: m.value || "",
                    maxHeight: x.value || ""
                  })
                }, [
                  e.show ? J(E.$slots, "default", { key: 0 }) : G("", !0),
                  e.resizable ? (A(), k(ue, { key: 1 }, [
                    D("div", {
                      class: "absolute bottom-0 left-0 h-1 w-full cursor-row-resize",
                      onMousedown: _[0] || (_[0] = (I) => S(I, "y")),
                      onMouseup: O
                    }, null, 32),
                    D("div", {
                      class: "absolute left-0 top-0 h-full w-1 cursor-col-resize",
                      onMousedown: _[1] || (_[1] = (I) => S(I, "-x")),
                      onMouseup: O
                    }, null, 32),
                    D("div", {
                      class: "absolute right-0 top-0 h-full w-1 cursor-col-resize",
                      onMousedown: _[2] || (_[2] = (I) => S(I, "x")),
                      onMouseup: O
                    }, null, 32),
                    D("div", {
                      class: "absolute bottom-0 right-0 h-1 w-1 cursor-se-resize",
                      onMousedown: _[3] || (_[3] = (I) => S(I, "xy")),
                      onMouseup: O
                    }, null, 32),
                    D("div", {
                      class: "absolute bottom-0 left-0 h-1 w-1 cursor-sw-resize",
                      onMousedown: _[4] || (_[4] = (I) => S(I, "-xy")),
                      onMouseup: O
                    }, null, 32)
                  ], 64)) : G("", !0)
                ], 6), [
                  [Nt, e.show]
                ])
              ]),
              _: 3
            }, 8, ["enter-active-class", "leave-active-class"])
          ], 2), [
            [Nt, e.show]
          ])
        ]),
        _: 3
      })
    ]));
  }
}), gw = { class: "ml-3 flex-1 whitespace-nowrap" }, vx = {
  __name: "NavLink",
  props: {
    href: String,
    active: Boolean
  },
  setup(e) {
    const t = e, n = se(
      () => t.active ? "focusable flex items-center p-2 text-base font-normal bg-accent text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700" : "focusable flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    );
    return (r, a) => (A(), oe(q(et), {
      href: e.href,
      class: X(n.value)
    }, {
      default: he(() => [
        J(r.$slots, "icon"),
        D("span", gw, [
          J(r.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}, yw = { class: "pagination flex justify-between" }, bw = ["value", "selected"], vw = {
  key: 0,
  "aria-label": "Page navigation"
}, ww = ["innerHTML"], xw = ["innerHTML", "onClick"], Lf = {
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
    const n = t, r = e, a = Z(r.defaultPerPage), o = [10, 25, 50, 100, 250], i = se(() => {
      if (!r.links || r.links.length <= 3)
        return r.links;
      const c = r.links[0], f = r.links[r.links.length - 1], h = r.links.findIndex((m) => m.active);
      let g = Math.max(1, h - Math.floor(r.maxPagesToShow / 2)), C = Math.min(r.links.length - 2, g + r.maxPagesToShow - 1);
      return C - g < r.maxPagesToShow - 1 && (g = Math.max(1, C - r.maxPagesToShow + 1)), [c, ...r.links.slice(g, C + 1), f];
    }), l = (c) => {
      n("change", c);
    }, u = (c) => {
      let f = new URL(window.location.href);
      if (f.searchParams.set("per_page", c.target.value), r.linkReturn) {
        l(f.href);
        return;
      }
      window.location.href = f.href;
    };
    return (c, f) => (A(), k("div", yw, [
      D("div", null, [
        e.showPerPage ? (A(), oe(q(Dh), {
          key: 0,
          type: "select",
          modelValue: a.value,
          "onUpdate:modelValue": f[0] || (f[0] = (h) => a.value = h),
          class: "per-page-input w-20",
          onChanged: u
        }, {
          default: he(() => [
            (A(), k(ue, null, He(o, (h) => D("option", {
              key: h,
              value: h,
              selected: h == a.value
            }, Q(h), 9, bw)), 64))
          ]),
          _: 1
        }, 8, ["modelValue"])) : G("", !0)
      ]),
      i.value.length > 3 ? (A(), k("nav", vw, [
        D("ul", {
          class: X(["list-style-none flex", { [e.customListClass]: e.customListClass }])
        }, [
          (A(!0), k(ue, null, He(i.value, (h, g) => (A(), k("li", { key: g }, [
            e.linkReturn ? (A(), k(ue, { key: 0 }, [
              h.url === null ? (A(), k("button", {
                key: 0,
                class: X(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [e.customLinkClass]: e.customLinkClass
                }]),
                innerHTML: h.label,
                onClick: f[1] || (f[1] = (C) => l(""))
              }, null, 10, ww)) : (A(), k("button", {
                key: 1,
                class: X(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", {
                  "font-bold text-primary": h.active,
                  [e.customLinkClass]: e.customLinkClass,
                  [e.customActiveLinkClass]: h.active && e.customActiveLinkClass
                }]),
                innerHTML: h.label,
                onClick: (C) => l(h.url)
              }, null, 10, xw))
            ], 64)) : (A(), k(ue, { key: 1 }, [
              h.url === null ? (A(), oe(q(et), {
                key: 0,
                class: X(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [e.customLinkClass]: e.customLinkClass
                }]),
                innerHTML: h.label,
                href: ""
              }, null, 8, ["class", "innerHTML"])) : (A(), oe(q(et), {
                key: 1,
                class: X(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", {
                  "font-bold text-primary": h.active,
                  [e.customLinkClass]: e.customLinkClass,
                  [e.customActiveLinkClass]: h.active && e.customActiveLinkClass
                }]),
                href: h.url,
                innerHTML: h.label,
                preserveScroll: e.preserveScroll || e.logs,
                preserveState: e.preserveState || e.logs,
                only: e.logs ? ["logs"] : e.only
              }, null, 8, ["class", "href", "innerHTML", "preserveScroll", "preserveState", "only"]))
            ], 64))
          ]))), 128))
        ], 2)
      ])) : G("", !0),
      f[2] || (f[2] = D("div", null, null, -1))
    ]));
  }
}, Sw = ["type", "disabled"], Nf = {
  __name: "PrimaryButton",
  props: {
    type: {
      type: String,
      default: "submit"
    },
    disabled: Boolean
  },
  setup(e) {
    return (t, n) => (A(), k("button", {
      type: e.type,
      disabled: e.disabled,
      class: "focusable inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-primary-700 focus:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 active:bg-primary-700 disabled:cursor-not-allowed disabled:brightness-125 disabled:grayscale-[30%]"
    }, [
      J(t.$slots, "default")
    ], 8, Sw));
  }
}, Ew = ["type", "disabled"], wx = {
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
    return (t, n) => (A(), k("button", {
      type: e.type,
      disabled: e.disabled,
      class: "focusable inline-flex items-center rounded border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700 disabled:cursor-not-allowed disabled:brightness-125 disabled:grayscale-[30%]"
    }, [
      J(t.$slots, "default")
    ], 8, Ew));
  }
}, xx = {
  __name: "ResponsiveNavLink",
  props: ["href", "active"],
  setup(e) {
    const t = e, n = se(
      () => t.active ? "focusable block w-full pl-3 pr-4 py-2 border-l-4 border-accent-400 text-left text-base font-medium text-accent-700 bg-accent-50 focus:outline-none focus:text-accent-800 focus:bg-accent-100 focus:border-accent-700 transition duration-150 ease-in-out" : "focusable block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (r, a) => (A(), oe(q(et), {
      href: e.href,
      class: X(n.value)
    }, {
      default: he(() => [
        J(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}, Aw = ["type"], Sx = {
  __name: "SecondaryButton",
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(e) {
    return (t, n) => (A(), k("button", {
      type: e.type,
      class: "focusable inline-flex items-center rounded border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:opacity-25"
    }, [
      J(t.$slots, "default")
    ], 8, Aw));
  }
}, Ow = {
  key: 0,
  class: "relative mb-2 rounded-lg border-b-2 border-gray-200 bg-neutral-50 px-6 py-1 text-center"
}, Cw = {
  key: 0,
  class: "absolute right-0 top-0 mr-2 mt-1"
}, Ex = {
  __name: "Section",
  props: {
    header: String,
    overflow: {
      default: !1,
      type: Boolean
    }
  },
  setup(e) {
    return (t, n) => (A(), k("div", {
      class: X(["rounded-lg border-2 border-gray-200 bg-white dark:border-gray-700", { "px-4 py-2": !e.header, "overflow-hidden": e.overflow }])
    }, [
      D("div", {
        class: X(["sm:rounded-lg", { "p-1": !e.header }])
      }, [
        e.header ? (A(), k("div", Ow, [
          D("span", null, Q(e.header), 1),
          t.$slots.headerButton ? (A(), k("div", Cw, [
            J(t.$slots, "headerButton")
          ])) : G("", !0)
        ])) : G("", !0),
        D("div", {
          class: X({ "px-4 pb-2": e.header })
        }, [
          J(t.$slots, "default")
        ], 2)
      ], 2)
    ], 2));
  }
}, _w = {}, Tw = {
  class: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]",
  role: "status"
};
function kw(e, t) {
  return A(), k("div", Tw, t[0] || (t[0] = [
    D("span", { class: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" }, "Loading...", -1)
  ]));
}
const Rf = /* @__PURE__ */ zn(_w, [["render", kw]]), Pw = ["onClick"], $w = { class: "h:10 rounded-t-lg bg-white py-1 text-center md:h-10 md:py-2" }, Ax = {
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
    const n = t, r = e, a = (i) => {
      o(i) && (i = null), n("updateSearch", i);
    }, o = (i) => r.statusName != null ? route().params[r.statusName] == i : route().params.status == i;
    return (i, l) => (A(), k("div", null, [
      D("div", {
        class: X(["flex flex-wrap gap-2 lg:flex-nowrap", { [e.customContainerClass]: e.customContainerClass }])
      }, [
        (A(!0), k(ue, null, He(e.stats, (u) => (A(), k("div", {
          class: X(["flex w-full cursor-pointer flex-col rounded-lg border bg-gray-100 shadow", {
            "border-primary bg-primary-50 shadow-primary-50": o(u.name),
            [e.customStatClass]: e.customStatClass
          }]),
          onClick: (c) => a(u.name),
          key: u.value
        }, [
          D("div", null, [
            D("div", $w, [
              D("h5", {
                class: X(["text-xl font-medium leading-tight text-neutral-800", { [e.customStatValueClass]: e.customStatValueClass }])
              }, Q(u.value), 3)
            ])
          ]),
          D("div", {
            class: X(["flex flex-auto flex-col gap-y-4 p-1 text-center md:py-2", { [e.customStatLabelClass]: e.customStatLabelClass }])
          }, Q(u.label ?? u.name), 3)
        ], 10, Pw))), 128))
      ], 2)
    ]));
  }
}, Ox = {
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
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    var x;
    const n = e, r = t, a = Z([]), o = Z(1), i = Z(!0), l = Z(0), u = Z(""), c = Z(((x = n.form) == null ? void 0 : x[n.field]) || n.modelValue), f = Z(c.value), h = Z(null), g = (S) => {
      f.value = c.value, c.value = S, r("update:modelValue", S), S || (C(""), h.value = null);
    }, C = (S) => {
      S == "" && c.value && c.value !== f.value || (o.value = 1, l.value = 0, u.value = S, m());
    }, m = async (S = !1) => {
      const O = new URLSearchParams();
      O.append("term", u.value), O.append("page", o.value), n.queryParams && Object.keys(n.queryParams).forEach((_) => {
        O.append(_, n.queryParams[_]);
      }), S && c.value && O.append("ajax_id", c.value);
      const E = await (await fetch(`${n.url}?${O.toString()}`)).json();
      if (i.value = E.current_page < E.last_page, o.value === 1) {
        if (a.value = E.data, c.value) {
          const _ = a.value.find((I) => I[n.optionValue] == c.value);
          h.value = _ ? _[n.optionText] : null;
        }
        return;
      }
      a.value = a.value.concat(E.data);
    };
    return We(() => {
      m(!0);
      const S = document.getElementById(n.id).parentNode.querySelector(".menu");
      S == null || S.addEventListener(
        "scroll",
        (O) => {
          O.target.scrollTop > l.value && O.target.scrollTop + O.target.clientHeight >= O.target.scrollHeight && i.value && (o.value++, m());
        },
        {
          passive: !0
        }
      );
    }), (S, O) => (A(), oe(q(Rm), {
      id: e.id,
      label: e.label,
      list: a.value,
      optionValue: e.optionValue,
      optionText: e.optionText,
      optionDisabled: e.optionDisabled,
      placeholder: h.value ?? e.placeholder,
      field: e.field,
      form: e.form,
      modelValue: c.value,
      noLabel: e.noLabel,
      disabled: e.disabled,
      noForm: e.noForm,
      required: e.required,
      "onUpdate:modelValue": O[0] || (O[0] = ($) => g($)),
      onSearchchange: C,
      filterPredicate: ($, E) => !0
    }, null, 8, ["id", "label", "list", "optionValue", "optionText", "optionDisabled", "placeholder", "field", "form", "modelValue", "noLabel", "disabled", "noForm", "required"]));
  }
};
const Iw = ["id", "aria-controls"], Dw = { class: "ml-3 flex-1 whitespace-nowrap text-left" }, Fw = ["id"], Lw = {
  __name: "NavCollapse",
  props: {
    show: { type: Boolean, default: !1 },
    name: String
  },
  setup(e) {
    const t = e, n = Z(null), r = Z(null), a = Z(t.show);
    We(() => {
      r.value = new Fn(n.value, {
        toggle: t.show
      });
    });
    const o = () => {
      r.value.toggle(), a.value = !a.value;
    };
    return (i, l) => (A(), k("li", null, [
      D("button", {
        id: e.name,
        onClick: o,
        class: "focusable group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
        "aria-controls": e.name ? e.name.replaceAll(" ", "_") : "collapsable"
      }, [
        J(i.$slots, "icon", {}, void 0, !0),
        D("span", Dw, Q(e.name), 1),
        l[0] || (l[0] = D("svg", {
          class: "h-3 w-3 transform",
          "aria-hidden": "true",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 10 6"
        }, [
          D("path", {
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "m1 1 4 4 4-4"
          })
        ], -1))
      ], 8, Iw),
      D("ul", {
        class: "!visible hidden space-y-1 px-4",
        id: e.name ? e.name.replaceAll(" ", "_") : "collapsable",
        ref_key: "collapseRef",
        ref: n
      }, [
        J(i.$slots, "default", {}, void 0, !0)
      ], 8, Fw)
    ]));
  }
}, Cx = /* @__PURE__ */ zn(Lw, [["__scopeId", "data-v-03a62b00"]]), Nw = { class: "border-t border-gray-100" }, Rw = { class: "divide-y divide-gray-100" }, _x = {
  __name: "DescriptionList",
  setup(e, { expose: t }) {
    const n = Z([]);
    return Gf("registerItem", (l) => {
      n.value.push(l);
    }), t({
      startEditing: () => {
        n.value.forEach((l) => {
          l && typeof l.startEditing == "function" && l.startEditing();
        });
      },
      stopEditing: () => {
        n.value.forEach((l) => {
          l && typeof l.stopEditing == "function" && l.stopEditing();
        });
      },
      toggleEditing: () => {
        n.value.forEach((l) => {
          l && typeof l.toggleEditing == "function" && l.toggleEditing();
        });
      }
    }), (l, u) => (A(), k("div", Nw, [
      D("dl", Rw, [
        J(l.$slots, "default")
      ])
    ]));
  }
}, Mw = { class: "description-list-item px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" }, Bw = { class: "flex items-center text-sm font-medium" }, jw = {
  key: 0,
  class: "ml-1 text-red-500"
}, zw = { class: "mt-1 min-h-[42px] text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0" }, Uw = { class: "flex min-h-full items-center" }, Vw = { class: "slot-content flex-grow" }, qw = { class: "ml-4 flex-shrink-0" }, Hw = { class: "slot-edit flex-grow" }, Ww = { class: "ml-4 flex-shrink-0" }, Tx = {
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
  setup(e, { expose: t }) {
    Dr.add(zi, bl);
    const n = e, r = Z(n.editable ? n.forceEditing : !1), a = () => {
      n.editable && (r.value = !r.value);
    };
    Ft(
      () => n.forceEditing,
      (u) => {
        n.editable && (r.value = u);
      }
    );
    const o = () => {
      n.editable && (r.value = !0);
    }, i = () => {
      n.editable && (r.value = !1);
    }, l = Yf("registerItem");
    return We(() => {
      l && l({ startEditing: o, stopEditing: i, toggleEditing: a });
    }), t({
      toggleEditing: a,
      startEditing: o,
      stopEditing: i
    }), (u, c) => (A(), k("div", Mw, [
      D("dt", Bw, [
        pe(Q(e.label) + " ", 1),
        J(u.$slots, "label"),
        e.required ? (A(), k("span", jw, "*")) : G("", !0)
      ]),
      D("dd", zw, [
        D("div", Uw, [
          r.value ? (A(), k(ue, { key: 1 }, [
            D("div", Hw, [
              J(u.$slots, "edit")
            ]),
            D("span", Ww, [
              D("button", {
                type: "button",
                onClick: a,
                class: "text-xl font-bold text-primary hover:text-primary-400"
              }, [
                ge(q(ft), { icon: q(bl) }, null, 8, ["icon"])
              ])
            ])
          ], 64)) : (A(), k(ue, { key: 0 }, [
            D("div", Vw, [
              J(u.$slots, "default"),
              pe(" " + Q(e.value), 1)
            ]),
            D("span", qw, [
              e.editable ? (A(), k("button", {
                key: 0,
                type: "button",
                onClick: a,
                class: "text-lg font-bold text-primary hover:text-primary-400"
              }, [
                ge(q(ft), { icon: q(zi) }, null, 8, ["icon"])
              ])) : G("", !0),
              J(u.$slots, "buttons")
            ])
          ], 64))
        ])
      ])
    ]));
  }
};
var Mf = { exports: {} };
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.8.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2023
 * @license MIT
 */
(function(e) {
  (function() {
    var t = "input is invalid type", n = "finalize already called", r = typeof window == "object", a = r ? window : {};
    a.JS_MD5_NO_WINDOW && (r = !1);
    var o = !r && typeof self == "object", i = !a.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    i ? a = qe : o && (a = self);
    var l = !a.JS_MD5_NO_COMMON_JS && !0 && e.exports, u = !a.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", c = "0123456789abcdef".split(""), f = [128, 32768, 8388608, -2147483648], h = [0, 8, 16, 24], g = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], C = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), m = [], x;
    if (u) {
      var S = new ArrayBuffer(68);
      x = new Uint8Array(S), m = new Uint32Array(S);
    }
    var O = Array.isArray;
    (a.JS_MD5_NO_NODE_JS || !O) && (O = function(p) {
      return Object.prototype.toString.call(p) === "[object Array]";
    });
    var $ = ArrayBuffer.isView;
    u && (a.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !$) && ($ = function(p) {
      return typeof p == "object" && p.buffer && p.buffer.constructor === ArrayBuffer;
    });
    var E = function(p) {
      var b = typeof p;
      if (b === "string")
        return [p, !0];
      if (b !== "object" || p === null)
        throw new Error(t);
      if (u && p.constructor === ArrayBuffer)
        return [new Uint8Array(p), !1];
      if (!O(p) && !$(p))
        throw new Error(t);
      return [p, !1];
    }, _ = function(p) {
      return function(b) {
        return new M(!0).update(b)[p]();
      };
    }, I = function() {
      var p = _("hex");
      i && (p = j(p)), p.create = function() {
        return new M();
      }, p.update = function(y) {
        return p.create().update(y);
      };
      for (var b = 0; b < g.length; ++b) {
        var w = g[b];
        p[w] = _(w);
      }
      return p;
    }, j = function(p) {
      var b = Yi, w = Yi.Buffer, y;
      w.from && !a.JS_MD5_NO_BUFFER_FROM ? y = w.from : y = function(N) {
        return new w(N);
      };
      var U = function(N) {
        if (typeof N == "string")
          return b.createHash("md5").update(N, "utf8").digest("hex");
        if (N == null)
          throw new Error(t);
        return N.constructor === ArrayBuffer && (N = new Uint8Array(N)), O(N) || $(N) || N.constructor === w ? b.createHash("md5").update(y(N)).digest("hex") : p(N);
      };
      return U;
    }, z = function(p) {
      return function(b, w) {
        return new F(b, !0).update(w)[p]();
      };
    }, B = function() {
      var p = z("hex");
      p.create = function(y) {
        return new F(y);
      }, p.update = function(y, U) {
        return p.create(y).update(U);
      };
      for (var b = 0; b < g.length; ++b) {
        var w = g[b];
        p[w] = z(w);
      }
      return p;
    };
    function M(p) {
      if (p)
        m[0] = m[16] = m[1] = m[2] = m[3] = m[4] = m[5] = m[6] = m[7] = m[8] = m[9] = m[10] = m[11] = m[12] = m[13] = m[14] = m[15] = 0, this.blocks = m, this.buffer8 = x;
      else if (u) {
        var b = new ArrayBuffer(68);
        this.buffer8 = new Uint8Array(b), this.blocks = new Uint32Array(b);
      } else
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
    }
    M.prototype.update = function(p) {
      if (this.finalized)
        throw new Error(n);
      var b = E(p);
      p = b[0];
      for (var w = b[1], y, U = 0, N, L = p.length, H = this.blocks, Y = this.buffer8; U < L; ) {
        if (this.hashed && (this.hashed = !1, H[0] = H[16], H[16] = H[1] = H[2] = H[3] = H[4] = H[5] = H[6] = H[7] = H[8] = H[9] = H[10] = H[11] = H[12] = H[13] = H[14] = H[15] = 0), w)
          if (u)
            for (N = this.start; U < L && N < 64; ++U)
              y = p.charCodeAt(U), y < 128 ? Y[N++] = y : y < 2048 ? (Y[N++] = 192 | y >>> 6, Y[N++] = 128 | y & 63) : y < 55296 || y >= 57344 ? (Y[N++] = 224 | y >>> 12, Y[N++] = 128 | y >>> 6 & 63, Y[N++] = 128 | y & 63) : (y = 65536 + ((y & 1023) << 10 | p.charCodeAt(++U) & 1023), Y[N++] = 240 | y >>> 18, Y[N++] = 128 | y >>> 12 & 63, Y[N++] = 128 | y >>> 6 & 63, Y[N++] = 128 | y & 63);
          else
            for (N = this.start; U < L && N < 64; ++U)
              y = p.charCodeAt(U), y < 128 ? H[N >>> 2] |= y << h[N++ & 3] : y < 2048 ? (H[N >>> 2] |= (192 | y >>> 6) << h[N++ & 3], H[N >>> 2] |= (128 | y & 63) << h[N++ & 3]) : y < 55296 || y >= 57344 ? (H[N >>> 2] |= (224 | y >>> 12) << h[N++ & 3], H[N >>> 2] |= (128 | y >>> 6 & 63) << h[N++ & 3], H[N >>> 2] |= (128 | y & 63) << h[N++ & 3]) : (y = 65536 + ((y & 1023) << 10 | p.charCodeAt(++U) & 1023), H[N >>> 2] |= (240 | y >>> 18) << h[N++ & 3], H[N >>> 2] |= (128 | y >>> 12 & 63) << h[N++ & 3], H[N >>> 2] |= (128 | y >>> 6 & 63) << h[N++ & 3], H[N >>> 2] |= (128 | y & 63) << h[N++ & 3]);
        else if (u)
          for (N = this.start; U < L && N < 64; ++U)
            Y[N++] = p[U];
        else
          for (N = this.start; U < L && N < 64; ++U)
            H[N >>> 2] |= p[U] << h[N++ & 3];
        this.lastByteIndex = N, this.bytes += N - this.start, N >= 64 ? (this.start = N - 64, this.hash(), this.hashed = !0) : this.start = N;
      }
      return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
    }, M.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = !0;
        var p = this.blocks, b = this.lastByteIndex;
        p[b >>> 2] |= f[b & 3], b >= 56 && (this.hashed || this.hash(), p[0] = p[16], p[16] = p[1] = p[2] = p[3] = p[4] = p[5] = p[6] = p[7] = p[8] = p[9] = p[10] = p[11] = p[12] = p[13] = p[14] = p[15] = 0), p[14] = this.bytes << 3, p[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
      }
    }, M.prototype.hash = function() {
      var p, b, w, y, U, N, L = this.blocks;
      this.first ? (p = L[0] - 680876937, p = (p << 7 | p >>> 25) - 271733879 << 0, y = (-1732584194 ^ p & 2004318071) + L[1] - 117830708, y = (y << 12 | y >>> 20) + p << 0, w = (-271733879 ^ y & (p ^ -271733879)) + L[2] - 1126478375, w = (w << 17 | w >>> 15) + y << 0, b = (p ^ w & (y ^ p)) + L[3] - 1316259209, b = (b << 22 | b >>> 10) + w << 0) : (p = this.h0, b = this.h1, w = this.h2, y = this.h3, p += (y ^ b & (w ^ y)) + L[0] - 680876936, p = (p << 7 | p >>> 25) + b << 0, y += (w ^ p & (b ^ w)) + L[1] - 389564586, y = (y << 12 | y >>> 20) + p << 0, w += (b ^ y & (p ^ b)) + L[2] + 606105819, w = (w << 17 | w >>> 15) + y << 0, b += (p ^ w & (y ^ p)) + L[3] - 1044525330, b = (b << 22 | b >>> 10) + w << 0), p += (y ^ b & (w ^ y)) + L[4] - 176418897, p = (p << 7 | p >>> 25) + b << 0, y += (w ^ p & (b ^ w)) + L[5] + 1200080426, y = (y << 12 | y >>> 20) + p << 0, w += (b ^ y & (p ^ b)) + L[6] - 1473231341, w = (w << 17 | w >>> 15) + y << 0, b += (p ^ w & (y ^ p)) + L[7] - 45705983, b = (b << 22 | b >>> 10) + w << 0, p += (y ^ b & (w ^ y)) + L[8] + 1770035416, p = (p << 7 | p >>> 25) + b << 0, y += (w ^ p & (b ^ w)) + L[9] - 1958414417, y = (y << 12 | y >>> 20) + p << 0, w += (b ^ y & (p ^ b)) + L[10] - 42063, w = (w << 17 | w >>> 15) + y << 0, b += (p ^ w & (y ^ p)) + L[11] - 1990404162, b = (b << 22 | b >>> 10) + w << 0, p += (y ^ b & (w ^ y)) + L[12] + 1804603682, p = (p << 7 | p >>> 25) + b << 0, y += (w ^ p & (b ^ w)) + L[13] - 40341101, y = (y << 12 | y >>> 20) + p << 0, w += (b ^ y & (p ^ b)) + L[14] - 1502002290, w = (w << 17 | w >>> 15) + y << 0, b += (p ^ w & (y ^ p)) + L[15] + 1236535329, b = (b << 22 | b >>> 10) + w << 0, p += (w ^ y & (b ^ w)) + L[1] - 165796510, p = (p << 5 | p >>> 27) + b << 0, y += (b ^ w & (p ^ b)) + L[6] - 1069501632, y = (y << 9 | y >>> 23) + p << 0, w += (p ^ b & (y ^ p)) + L[11] + 643717713, w = (w << 14 | w >>> 18) + y << 0, b += (y ^ p & (w ^ y)) + L[0] - 373897302, b = (b << 20 | b >>> 12) + w << 0, p += (w ^ y & (b ^ w)) + L[5] - 701558691, p = (p << 5 | p >>> 27) + b << 0, y += (b ^ w & (p ^ b)) + L[10] + 38016083, y = (y << 9 | y >>> 23) + p << 0, w += (p ^ b & (y ^ p)) + L[15] - 660478335, w = (w << 14 | w >>> 18) + y << 0, b += (y ^ p & (w ^ y)) + L[4] - 405537848, b = (b << 20 | b >>> 12) + w << 0, p += (w ^ y & (b ^ w)) + L[9] + 568446438, p = (p << 5 | p >>> 27) + b << 0, y += (b ^ w & (p ^ b)) + L[14] - 1019803690, y = (y << 9 | y >>> 23) + p << 0, w += (p ^ b & (y ^ p)) + L[3] - 187363961, w = (w << 14 | w >>> 18) + y << 0, b += (y ^ p & (w ^ y)) + L[8] + 1163531501, b = (b << 20 | b >>> 12) + w << 0, p += (w ^ y & (b ^ w)) + L[13] - 1444681467, p = (p << 5 | p >>> 27) + b << 0, y += (b ^ w & (p ^ b)) + L[2] - 51403784, y = (y << 9 | y >>> 23) + p << 0, w += (p ^ b & (y ^ p)) + L[7] + 1735328473, w = (w << 14 | w >>> 18) + y << 0, b += (y ^ p & (w ^ y)) + L[12] - 1926607734, b = (b << 20 | b >>> 12) + w << 0, U = b ^ w, p += (U ^ y) + L[5] - 378558, p = (p << 4 | p >>> 28) + b << 0, y += (U ^ p) + L[8] - 2022574463, y = (y << 11 | y >>> 21) + p << 0, N = y ^ p, w += (N ^ b) + L[11] + 1839030562, w = (w << 16 | w >>> 16) + y << 0, b += (N ^ w) + L[14] - 35309556, b = (b << 23 | b >>> 9) + w << 0, U = b ^ w, p += (U ^ y) + L[1] - 1530992060, p = (p << 4 | p >>> 28) + b << 0, y += (U ^ p) + L[4] + 1272893353, y = (y << 11 | y >>> 21) + p << 0, N = y ^ p, w += (N ^ b) + L[7] - 155497632, w = (w << 16 | w >>> 16) + y << 0, b += (N ^ w) + L[10] - 1094730640, b = (b << 23 | b >>> 9) + w << 0, U = b ^ w, p += (U ^ y) + L[13] + 681279174, p = (p << 4 | p >>> 28) + b << 0, y += (U ^ p) + L[0] - 358537222, y = (y << 11 | y >>> 21) + p << 0, N = y ^ p, w += (N ^ b) + L[3] - 722521979, w = (w << 16 | w >>> 16) + y << 0, b += (N ^ w) + L[6] + 76029189, b = (b << 23 | b >>> 9) + w << 0, U = b ^ w, p += (U ^ y) + L[9] - 640364487, p = (p << 4 | p >>> 28) + b << 0, y += (U ^ p) + L[12] - 421815835, y = (y << 11 | y >>> 21) + p << 0, N = y ^ p, w += (N ^ b) + L[15] + 530742520, w = (w << 16 | w >>> 16) + y << 0, b += (N ^ w) + L[2] - 995338651, b = (b << 23 | b >>> 9) + w << 0, p += (w ^ (b | ~y)) + L[0] - 198630844, p = (p << 6 | p >>> 26) + b << 0, y += (b ^ (p | ~w)) + L[7] + 1126891415, y = (y << 10 | y >>> 22) + p << 0, w += (p ^ (y | ~b)) + L[14] - 1416354905, w = (w << 15 | w >>> 17) + y << 0, b += (y ^ (w | ~p)) + L[5] - 57434055, b = (b << 21 | b >>> 11) + w << 0, p += (w ^ (b | ~y)) + L[12] + 1700485571, p = (p << 6 | p >>> 26) + b << 0, y += (b ^ (p | ~w)) + L[3] - 1894986606, y = (y << 10 | y >>> 22) + p << 0, w += (p ^ (y | ~b)) + L[10] - 1051523, w = (w << 15 | w >>> 17) + y << 0, b += (y ^ (w | ~p)) + L[1] - 2054922799, b = (b << 21 | b >>> 11) + w << 0, p += (w ^ (b | ~y)) + L[8] + 1873313359, p = (p << 6 | p >>> 26) + b << 0, y += (b ^ (p | ~w)) + L[15] - 30611744, y = (y << 10 | y >>> 22) + p << 0, w += (p ^ (y | ~b)) + L[6] - 1560198380, w = (w << 15 | w >>> 17) + y << 0, b += (y ^ (w | ~p)) + L[13] + 1309151649, b = (b << 21 | b >>> 11) + w << 0, p += (w ^ (b | ~y)) + L[4] - 145523070, p = (p << 6 | p >>> 26) + b << 0, y += (b ^ (p | ~w)) + L[11] - 1120210379, y = (y << 10 | y >>> 22) + p << 0, w += (p ^ (y | ~b)) + L[2] + 718787259, w = (w << 15 | w >>> 17) + y << 0, b += (y ^ (w | ~p)) + L[9] - 343485551, b = (b << 21 | b >>> 11) + w << 0, this.first ? (this.h0 = p + 1732584193 << 0, this.h1 = b - 271733879 << 0, this.h2 = w - 1732584194 << 0, this.h3 = y + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + p << 0, this.h1 = this.h1 + b << 0, this.h2 = this.h2 + w << 0, this.h3 = this.h3 + y << 0);
    }, M.prototype.hex = function() {
      this.finalize();
      var p = this.h0, b = this.h1, w = this.h2, y = this.h3;
      return c[p >>> 4 & 15] + c[p & 15] + c[p >>> 12 & 15] + c[p >>> 8 & 15] + c[p >>> 20 & 15] + c[p >>> 16 & 15] + c[p >>> 28 & 15] + c[p >>> 24 & 15] + c[b >>> 4 & 15] + c[b & 15] + c[b >>> 12 & 15] + c[b >>> 8 & 15] + c[b >>> 20 & 15] + c[b >>> 16 & 15] + c[b >>> 28 & 15] + c[b >>> 24 & 15] + c[w >>> 4 & 15] + c[w & 15] + c[w >>> 12 & 15] + c[w >>> 8 & 15] + c[w >>> 20 & 15] + c[w >>> 16 & 15] + c[w >>> 28 & 15] + c[w >>> 24 & 15] + c[y >>> 4 & 15] + c[y & 15] + c[y >>> 12 & 15] + c[y >>> 8 & 15] + c[y >>> 20 & 15] + c[y >>> 16 & 15] + c[y >>> 28 & 15] + c[y >>> 24 & 15];
    }, M.prototype.toString = M.prototype.hex, M.prototype.digest = function() {
      this.finalize();
      var p = this.h0, b = this.h1, w = this.h2, y = this.h3;
      return [
        p & 255,
        p >>> 8 & 255,
        p >>> 16 & 255,
        p >>> 24 & 255,
        b & 255,
        b >>> 8 & 255,
        b >>> 16 & 255,
        b >>> 24 & 255,
        w & 255,
        w >>> 8 & 255,
        w >>> 16 & 255,
        w >>> 24 & 255,
        y & 255,
        y >>> 8 & 255,
        y >>> 16 & 255,
        y >>> 24 & 255
      ];
    }, M.prototype.array = M.prototype.digest, M.prototype.arrayBuffer = function() {
      this.finalize();
      var p = new ArrayBuffer(16), b = new Uint32Array(p);
      return b[0] = this.h0, b[1] = this.h1, b[2] = this.h2, b[3] = this.h3, p;
    }, M.prototype.buffer = M.prototype.arrayBuffer, M.prototype.base64 = function() {
      for (var p, b, w, y = "", U = this.array(), N = 0; N < 15; )
        p = U[N++], b = U[N++], w = U[N++], y += C[p >>> 2] + C[(p << 4 | b >>> 4) & 63] + C[(b << 2 | w >>> 6) & 63] + C[w & 63];
      return p = U[N], y += C[p >>> 2] + C[p << 4 & 63] + "==", y;
    };
    function F(p, b) {
      var w, y = E(p);
      if (p = y[0], y[1]) {
        var U = [], N = p.length, L = 0, H;
        for (w = 0; w < N; ++w)
          H = p.charCodeAt(w), H < 128 ? U[L++] = H : H < 2048 ? (U[L++] = 192 | H >>> 6, U[L++] = 128 | H & 63) : H < 55296 || H >= 57344 ? (U[L++] = 224 | H >>> 12, U[L++] = 128 | H >>> 6 & 63, U[L++] = 128 | H & 63) : (H = 65536 + ((H & 1023) << 10 | p.charCodeAt(++w) & 1023), U[L++] = 240 | H >>> 18, U[L++] = 128 | H >>> 12 & 63, U[L++] = 128 | H >>> 6 & 63, U[L++] = 128 | H & 63);
        p = U;
      }
      p.length > 64 && (p = new M(!0).update(p).array());
      var Y = [], Ke = [];
      for (w = 0; w < 64; ++w) {
        var _t = p[w] || 0;
        Y[w] = 92 ^ _t, Ke[w] = 54 ^ _t;
      }
      M.call(this, b), this.update(Ke), this.oKeyPad = Y, this.inner = !0, this.sharedMemory = b;
    }
    F.prototype = new M(), F.prototype.finalize = function() {
      if (M.prototype.finalize.call(this), this.inner) {
        this.inner = !1;
        var p = this.array();
        M.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(p), M.prototype.finalize.call(this);
      }
    };
    var V = I();
    V.md5 = V, V.md5.hmac = B(), l ? e.exports = V : a.md5 = V;
  })();
})(Mf);
var Kw = Mf.exports;
const Gw = ["src", "alt"], kx = {
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
    const t = e, n = se(() => Kw.md5(t.email.trim().toLowerCase())), r = se(() => `https://www.gravatar.com/avatar/${n.value}?s=${t.size}`), a = se(() => `Gravatar for ${t.email}`);
    return (o, i) => (A(), k("img", {
      src: r.value,
      alt: a.value
    }, null, 8, Gw));
  }
}, Px = {
  __name: "TdCollapseHandler",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(e) {
    return (t, n) => (A(), oe(Av, {
      "data-te-collapse-init": "",
      "data-te-target": "#" + e.collapse_id,
      "aria-expanded": "false",
      "aria-controls": e.collapse_id,
      class: "cursor-pointer"
    }, {
      default: he(() => [
        J(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-te-target", "aria-controls"]));
  }
}, $x = {
  install(e) {
    for (const t in components)
      e.component(t, components[t]);
  }
};
export {
  fx as Alert,
  Jw as Checkbox,
  K2 as CollapsableSection,
  K2 as CollapsibleSection,
  wx as DangerButton,
  _x as DescriptionList,
  Tx as DescriptionListItem,
  dx as Dropdown,
  px as DropdownLink,
  Qw as DropdownSearchbar,
  nx as FileDropZoneInput,
  kx as GravatarImg,
  rx as Images,
  Dh as Input,
  Fr as InputError,
  Es as InputLabel,
  hx as LinkButton,
  mx as LinkDropdownButton,
  gx as LinkDropdownButtonItem,
  yx as Logs,
  mw as LogsContent,
  bx as Modal,
  Cx as NavCollapse,
  vx as NavLink,
  Lf as Pagination,
  Nf as PrimaryButton,
  ax as RadioButton,
  xx as ResponsiveNavLink,
  Rm as SearchSelect,
  Sx as SecondaryButton,
  Ex as Section,
  Ox as Select2ajax,
  Rf as Spinner,
  Ax as Stats,
  Sc as SubmitButton,
  ox as Table,
  ux as TableItemCard,
  Av as Td,
  Px as TdCollapseHandler,
  jh as TextInput,
  Xw as Textarea,
  sx as Th,
  ix as Thead,
  cx as TrCollapse,
  lx as TrCollapseHandler,
  $x as default,
  Mr as getInertiaRouter,
  ex as hasPermission,
  p1 as moneyFormat,
  Zw as numberFormat,
  tx as setInertiaRouter
};
