import { computed as ne, withDirectives as qe, openBlock as x, createElementBlock as O, normalizeClass as K, vModelCheckbox as wu, defineComponent as St, watch as $t, h as Ft, mergeModels as bl, ref as Q, useModel as zd, onMounted as Ke, createBlock as oe, unref as M, createCommentVNode as G, createElementVNode as $, renderSlot as J, toDisplayString as Z, createVNode as ge, Transition as pr, withCtx as de, vModelSelect as Ud, Fragment as ce, vModelText as xu, createTextVNode as ye, vShow as Ht, resolveDirective as Vd, normalizeProps as Xe, guardReactiveProps as rt, renderList as Ge, resolveDynamicComponent as fi, mergeProps as Fn, toHandlers as Hd, withModifiers as qt, withKeys as $r, normalizeStyle as Mr, shallowRef as Wd, markRaw as wl, onUnmounted as Yr, reactive as zs, toRefs as Gd, Teleport as Kd, provide as Yd, inject as Jd } from "vue";
const Xd = ["value"], o4 = {
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
    const r = t, n = e, a = ne({
      get() {
        return n.checked;
      },
      set(o) {
        r("update:checked", o);
      }
    });
    return (o, i) => qe((x(), O("input", {
      type: "checkbox",
      value: e.value,
      "onUpdate:modelValue": i[0] || (i[0] = (l) => a.value = l),
      class: K(["rounded border-gray-300 text-accent-600 shadow focus:ring-accent-500", { [e.customClass]: e.customClass }])
    }, null, 10, Xd)), [
      [wu, a.value]
    ]);
  }
};
/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function Qd(e, t, r) {
  return (t = ep(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function xl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xl(Object(r), !0).forEach(function(n) {
      Qd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Zd(e, t) {
  if (typeof e != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ep(e) {
  var t = Zd(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const Sl = () => {
};
let Us = {}, Su = {}, Au = null, Eu = {
  mark: Sl,
  measure: Sl
};
try {
  typeof window < "u" && (Us = window), typeof document < "u" && (Su = document), typeof MutationObserver < "u" && (Au = MutationObserver), typeof performance < "u" && (Eu = performance);
} catch {
}
const {
  userAgent: Al = ""
} = Us.navigator || {}, Wt = Us, me = Su, El = Au, ya = Eu;
Wt.document;
const Lt = !!me.documentElement && !!me.head && typeof me.addEventListener == "function" && typeof me.createElement == "function", Ou = ~Al.indexOf("MSIE") || ~Al.indexOf("Trident/");
var tp = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, rp = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Cu = {
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
}, np = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Pu = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Ie = "classic", to = "duotone", ap = "sharp", op = "sharp-duotone", _u = [Ie, to, ap, op], ip = {
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
}, sp = {
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
}, lp = /* @__PURE__ */ new Map([["classic", {
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
}]]), cp = {
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
}, up = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Ol = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, fp = ["kit"], dp = {
  kit: {
    "fa-kit": "fak"
  },
  "kit-duotone": {
    "fa-kit-duotone": "fakd"
  }
}, pp = ["fak", "fakd"], hp = {
  kit: {
    fak: "fa-kit"
  },
  "kit-duotone": {
    fakd: "fa-kit-duotone"
  }
}, Cl = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, va = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, mp = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], gp = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], yp = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, vp = {
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
}, bp = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, Qi = {
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
}, wp = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], Zi = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...mp, ...wp], xp = ["solid", "regular", "light", "thin", "duotone", "brands"], ku = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Sp = ku.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Ap = [...Object.keys(bp), ...xp, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", va.GROUP, va.SWAP_OPACITY, va.PRIMARY, va.SECONDARY].concat(ku.map((e) => "".concat(e, "x"))).concat(Sp.map((e) => "w-".concat(e))), Ep = {
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
const It = "___FONT_AWESOME___", es = 16, Tu = "fa", $u = "svg-inline--fa", mr = "data-fa-i2svg", ts = "data-fa-pseudo-element", Op = "data-fa-pseudo-element-pending", Vs = "data-prefix", Hs = "data-icon", Pl = "fontawesome-i2svg", Cp = "async", Pp = ["HTML", "HEAD", "STYLE", "SCRIPT"], Fu = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function Bn(e) {
  return new Proxy(e, {
    get(t, r) {
      return r in t ? t[r] : t[Ie];
    }
  });
}
const Iu = N({}, Cu);
Iu[Ie] = N(N(N(N({}, {
  "fa-duotone": "duotone"
}), Cu[Ie]), Ol.kit), Ol["kit-duotone"]);
const _p = Bn(Iu), rs = N({}, cp);
rs[Ie] = N(N(N(N({}, {
  duotone: "fad"
}), rs[Ie]), Cl.kit), Cl["kit-duotone"]);
const _l = Bn(rs), ns = N({}, Qi);
ns[Ie] = N(N({}, ns[Ie]), hp.kit);
const Ws = Bn(ns), as = N({}, vp);
as[Ie] = N(N({}, as[Ie]), dp.kit);
Bn(as);
const kp = tp, Du = "fa-layers-text", Tp = rp, $p = N({}, ip);
Bn($p);
const Fp = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], di = np, Ip = [...fp, ...Ap], On = Wt.FontAwesomeConfig || {};
function Dp(e) {
  var t = me.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function Lp(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
me && typeof me.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [r, n] = t;
  const a = Lp(Dp(r));
  a != null && (On[n] = a);
});
const Lu = {
  styleDefault: "solid",
  familyDefault: Ie,
  cssPrefix: Tu,
  replacementClass: $u,
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
On.familyPrefix && (On.cssPrefix = On.familyPrefix);
const Ur = N(N({}, Lu), On);
Ur.autoReplaceSvg || (Ur.observeMutations = !1);
const H = {};
Object.keys(Lu).forEach((e) => {
  Object.defineProperty(H, e, {
    enumerable: !0,
    set: function(t) {
      Ur[e] = t, Cn.forEach((r) => r(H));
    },
    get: function() {
      return Ur[e];
    }
  });
});
Object.defineProperty(H, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Ur.cssPrefix = e, Cn.forEach((t) => t(H));
  },
  get: function() {
    return Ur.cssPrefix;
  }
});
Wt.FontAwesomeConfig = H;
const Cn = [];
function Rp(e) {
  return Cn.push(e), () => {
    Cn.splice(Cn.indexOf(e), 1);
  };
}
const Bt = es, vt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Np(e) {
  if (!e || !Lt)
    return;
  const t = me.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const r = me.head.childNodes;
  let n = null;
  for (let a = r.length - 1; a > -1; a--) {
    const o = r[a], i = (o.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(i) > -1 && (n = o);
  }
  return me.head.insertBefore(t, n), e;
}
const Mp = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function In() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += Mp[Math.random() * 62 | 0];
  return t;
}
function Jr(e) {
  const t = [];
  for (let r = (e || []).length >>> 0; r--; )
    t[r] = e[r];
  return t;
}
function Gs(e) {
  return e.classList ? Jr(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function Ru(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Bp(e) {
  return Object.keys(e || {}).reduce((t, r) => t + "".concat(r, '="').concat(Ru(e[r]), '" '), "").trim();
}
function ro(e) {
  return Object.keys(e || {}).reduce((t, r) => t + "".concat(r, ": ").concat(e[r].trim(), ";"), "");
}
function Ks(e) {
  return e.size !== vt.size || e.x !== vt.x || e.y !== vt.y || e.rotate !== vt.rotate || e.flipX || e.flipY;
}
function jp(e) {
  let {
    transform: t,
    containerWidth: r,
    iconWidth: n
  } = e;
  const a = {
    transform: "translate(".concat(r / 2, " 256)")
  }, o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), i = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), l = "rotate(".concat(t.rotate, " 0 0)"), f = {
    transform: "".concat(o, " ").concat(i, " ").concat(l)
  }, c = {
    transform: "translate(".concat(n / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: f,
    path: c
  };
}
function qp(e) {
  let {
    transform: t,
    width: r = es,
    height: n = es,
    startCentered: a = !1
  } = e, o = "";
  return a && Ou ? o += "translate(".concat(t.x / Bt - r / 2, "em, ").concat(t.y / Bt - n / 2, "em) ") : a ? o += "translate(calc(-50% + ".concat(t.x / Bt, "em), calc(-50% + ").concat(t.y / Bt, "em)) ") : o += "translate(".concat(t.x / Bt, "em, ").concat(t.y / Bt, "em) "), o += "scale(".concat(t.size / Bt * (t.flipX ? -1 : 1), ", ").concat(t.size / Bt * (t.flipY ? -1 : 1), ") "), o += "rotate(".concat(t.rotate, "deg) "), o;
}
var zp = `:root, :host {
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
function Nu() {
  const e = Tu, t = $u, r = H.cssPrefix, n = H.replacementClass;
  let a = zp;
  if (r !== e || n !== t) {
    const o = new RegExp("\\.".concat(e, "\\-"), "g"), i = new RegExp("\\--".concat(e, "\\-"), "g"), l = new RegExp("\\.".concat(t), "g");
    a = a.replace(o, ".".concat(r, "-")).replace(i, "--".concat(r, "-")).replace(l, ".".concat(n));
  }
  return a;
}
let kl = !1;
function pi() {
  H.autoAddCss && !kl && (Np(Nu()), kl = !0);
}
var Up = {
  mixout() {
    return {
      dom: {
        css: Nu,
        insertCss: pi
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        pi();
      },
      beforeI2svg() {
        pi();
      }
    };
  }
};
const Dt = Wt || {};
Dt[It] || (Dt[It] = {});
Dt[It].styles || (Dt[It].styles = {});
Dt[It].hooks || (Dt[It].hooks = {});
Dt[It].shims || (Dt[It].shims = []);
var bt = Dt[It];
const Mu = [], Bu = function() {
  me.removeEventListener("DOMContentLoaded", Bu), Ma = 1, Mu.map((e) => e());
};
let Ma = !1;
Lt && (Ma = (me.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(me.readyState), Ma || me.addEventListener("DOMContentLoaded", Bu));
function Vp(e) {
  Lt && (Ma ? setTimeout(e, 0) : Mu.push(e));
}
function jn(e) {
  const {
    tag: t,
    attributes: r = {},
    children: n = []
  } = e;
  return typeof e == "string" ? Ru(e) : "<".concat(t, " ").concat(Bp(r), ">").concat(n.map(jn).join(""), "</").concat(t, ">");
}
function Tl(e, t, r) {
  if (e && e[t] && e[t][r])
    return {
      prefix: t,
      iconName: r,
      icon: e[t][r]
    };
}
var Hp = function(t, r) {
  return function(n, a, o, i) {
    return t.call(r, n, a, o, i);
  };
}, hi = function(t, r, n, a) {
  var o = Object.keys(t), i = o.length, l = a !== void 0 ? Hp(r, a) : r, f, c, u;
  for (n === void 0 ? (f = 1, u = t[o[0]]) : (f = 0, u = n); f < i; f++)
    c = o[f], u = l(u, t[c], c, t);
  return u;
};
function Wp(e) {
  const t = [];
  let r = 0;
  const n = e.length;
  for (; r < n; ) {
    const a = e.charCodeAt(r++);
    if (a >= 55296 && a <= 56319 && r < n) {
      const o = e.charCodeAt(r++);
      (o & 64512) == 56320 ? t.push(((a & 1023) << 10) + (o & 1023) + 65536) : (t.push(a), r--);
    } else
      t.push(a);
  }
  return t;
}
function os(e) {
  const t = Wp(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Gp(e, t) {
  const r = e.length;
  let n = e.charCodeAt(t), a;
  return n >= 55296 && n <= 56319 && r > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (n - 55296) * 1024 + a - 56320 + 65536 : n;
}
function $l(e) {
  return Object.keys(e).reduce((t, r) => {
    const n = e[r];
    return !!n.icon ? t[n.iconName] = n.icon : t[r] = n, t;
  }, {});
}
function is(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: n = !1
  } = r, a = $l(t);
  typeof bt.hooks.addPack == "function" && !n ? bt.hooks.addPack(e, $l(t)) : bt.styles[e] = N(N({}, bt.styles[e] || {}), a), e === "fas" && is("fa", t);
}
const {
  styles: Dn,
  shims: Kp
} = bt, ju = Object.keys(Ws), Yp = ju.reduce((e, t) => (e[t] = Object.keys(Ws[t]), e), {});
let Ys = null, qu = {}, zu = {}, Uu = {}, Vu = {}, Hu = {};
function Jp(e) {
  return ~Ip.indexOf(e);
}
function Xp(e, t) {
  const r = t.split("-"), n = r[0], a = r.slice(1).join("-");
  return n === e && a !== "" && !Jp(a) ? a : null;
}
const Wu = () => {
  const e = (n) => hi(Dn, (a, o, i) => (a[i] = hi(o, n, {}), a), {});
  qu = e((n, a, o) => (a[3] && (n[a[3]] = o), a[2] && a[2].filter((l) => typeof l == "number").forEach((l) => {
    n[l.toString(16)] = o;
  }), n)), zu = e((n, a, o) => (n[o] = o, a[2] && a[2].filter((l) => typeof l == "string").forEach((l) => {
    n[l] = o;
  }), n)), Hu = e((n, a, o) => {
    const i = a[2];
    return n[o] = o, i.forEach((l) => {
      n[l] = o;
    }), n;
  });
  const t = "far" in Dn || H.autoFetchSvg, r = hi(Kp, (n, a) => {
    const o = a[0];
    let i = a[1];
    const l = a[2];
    return i === "far" && !t && (i = "fas"), typeof o == "string" && (n.names[o] = {
      prefix: i,
      iconName: l
    }), typeof o == "number" && (n.unicodes[o.toString(16)] = {
      prefix: i,
      iconName: l
    }), n;
  }, {
    names: {},
    unicodes: {}
  });
  Uu = r.names, Vu = r.unicodes, Ys = no(H.styleDefault, {
    family: H.familyDefault
  });
};
Rp((e) => {
  Ys = no(e.styleDefault, {
    family: H.familyDefault
  });
});
Wu();
function Js(e, t) {
  return (qu[e] || {})[t];
}
function Qp(e, t) {
  return (zu[e] || {})[t];
}
function ur(e, t) {
  return (Hu[e] || {})[t];
}
function Gu(e) {
  return Uu[e] || {
    prefix: null,
    iconName: null
  };
}
function Zp(e) {
  const t = Vu[e], r = Js("fas", e);
  return t || (r ? {
    prefix: "fas",
    iconName: r
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Gt() {
  return Ys;
}
const Ku = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function eh(e) {
  let t = Ie;
  const r = ju.reduce((n, a) => (n[a] = "".concat(H.cssPrefix, "-").concat(a), n), {});
  return _u.forEach((n) => {
    (e.includes(r[n]) || e.some((a) => Yp[n].includes(a))) && (t = n);
  }), t;
}
function no(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: r = Ie
  } = t, n = _p[r][e];
  if (r === to && !e)
    return "fad";
  const a = _l[r][e] || _l[r][n], o = e in bt.styles ? e : null;
  return a || o || null;
}
function th(e) {
  let t = [], r = null;
  return e.forEach((n) => {
    const a = Xp(H.cssPrefix, n);
    a ? r = a : n && t.push(n);
  }), {
    iconName: r,
    rest: t
  };
}
function Fl(e) {
  return e.sort().filter((t, r, n) => n.indexOf(t) === r);
}
function ao(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: r = !1
  } = t;
  let n = null;
  const a = Zi.concat(gp), o = Fl(e.filter((p) => a.includes(p))), i = Fl(e.filter((p) => !Zi.includes(p))), l = o.filter((p) => (n = p, !Pu.includes(p))), [f = null] = l, c = eh(o), u = N(N({}, th(i)), {}, {
    prefix: no(f, {
      family: c
    })
  });
  return N(N(N({}, u), oh({
    values: e,
    family: c,
    styles: Dn,
    config: H,
    canonical: u,
    givenPrefix: n
  })), rh(r, n, u));
}
function rh(e, t, r) {
  let {
    prefix: n,
    iconName: a
  } = r;
  if (e || !n || !a)
    return {
      prefix: n,
      iconName: a
    };
  const o = t === "fa" ? Gu(a) : {}, i = ur(n, a);
  return a = o.iconName || i || a, n = o.prefix || n, n === "far" && !Dn.far && Dn.fas && !H.autoFetchSvg && (n = "fas"), {
    prefix: n,
    iconName: a
  };
}
const nh = _u.filter((e) => e !== Ie || e !== to), ah = Object.keys(Qi).filter((e) => e !== Ie).map((e) => Object.keys(Qi[e])).flat();
function oh(e) {
  const {
    values: t,
    family: r,
    canonical: n,
    givenPrefix: a = "",
    styles: o = {},
    config: i = {}
  } = e, l = r === to, f = t.includes("fa-duotone") || t.includes("fad"), c = i.familyDefault === "duotone", u = n.prefix === "fad" || n.prefix === "fa-duotone";
  if (!l && (f || c || u) && (n.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (n.prefix = "fab"), !n.prefix && nh.includes(r) && (Object.keys(o).find((m) => ah.includes(m)) || i.autoFetchSvg)) {
    const m = lp.get(r).defaultShortPrefixId;
    n.prefix = m, n.iconName = ur(n.prefix, n.iconName) || n.iconName;
  }
  return (n.prefix === "fa" || a === "fa") && (n.prefix = Gt() || "fas"), n;
}
class ih {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    const a = r.reduce(this._pullDefinitions, {});
    Object.keys(a).forEach((o) => {
      this.definitions[o] = N(N({}, this.definitions[o] || {}), a[o]), is(o, a[o]);
      const i = Ws[Ie][o];
      i && is(i, a[o]), Wu();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, r) {
    const n = r.prefix && r.iconName && r.icon ? {
      0: r
    } : r;
    return Object.keys(n).map((a) => {
      const {
        prefix: o,
        iconName: i,
        icon: l
      } = n[a], f = l[2];
      t[o] || (t[o] = {}), f.length > 0 && f.forEach((c) => {
        typeof c == "string" && (t[o][c] = l);
      }), t[o][i] = l;
    }), t;
  }
}
let Il = [], Rr = {};
const Br = {}, sh = Object.keys(Br);
function lh(e, t) {
  let {
    mixoutsTo: r
  } = t;
  return Il = e, Rr = {}, Object.keys(Br).forEach((n) => {
    sh.indexOf(n) === -1 && delete Br[n];
  }), Il.forEach((n) => {
    const a = n.mixout ? n.mixout() : {};
    if (Object.keys(a).forEach((o) => {
      typeof a[o] == "function" && (r[o] = a[o]), typeof a[o] == "object" && Object.keys(a[o]).forEach((i) => {
        r[o] || (r[o] = {}), r[o][i] = a[o][i];
      });
    }), n.hooks) {
      const o = n.hooks();
      Object.keys(o).forEach((i) => {
        Rr[i] || (Rr[i] = []), Rr[i].push(o[i]);
      });
    }
    n.provides && n.provides(Br);
  }), r;
}
function ss(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    n[a - 2] = arguments[a];
  return (Rr[e] || []).forEach((i) => {
    t = i.apply(null, [t, ...n]);
  }), t;
}
function gr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  (Rr[e] || []).forEach((o) => {
    o.apply(null, r);
  });
}
function Kt() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Br[e] ? Br[e].apply(null, t) : void 0;
}
function ls(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const r = e.prefix || Gt();
  if (t)
    return t = ur(r, t) || t, Tl(Yu.definitions, r, t) || Tl(bt.styles, r, t);
}
const Yu = new ih(), ch = () => {
  H.autoReplaceSvg = !1, H.observeMutations = !1, gr("noAuto");
}, uh = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Lt ? (gr("beforeI2svg", e), Kt("pseudoElements2svg", e), Kt("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    H.autoReplaceSvg === !1 && (H.autoReplaceSvg = !0), H.observeMutations = !0, Vp(() => {
      dh({
        autoReplaceSvgRoot: t
      }), gr("watch", e);
    });
  }
}, fh = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: ur(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], r = no(e[0]);
      return {
        prefix: r,
        iconName: ur(r, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(H.cssPrefix, "-")) > -1 || e.match(kp))) {
      const t = ao(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || Gt(),
        iconName: ur(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = Gt();
      return {
        prefix: t,
        iconName: ur(t, e) || e
      };
    }
  }
}, Ye = {
  noAuto: ch,
  config: H,
  dom: uh,
  parse: fh,
  library: Yu,
  findIconDefinition: ls,
  toHtml: jn
}, dh = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = me
  } = e;
  (Object.keys(bt.styles).length > 0 || H.autoFetchSvg) && Lt && H.autoReplaceSvg && Ye.dom.i2svg({
    node: t
  });
};
function oo(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((r) => jn(r));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!Lt)
        return;
      const r = me.createElement("div");
      return r.innerHTML = e.html, r.children;
    }
  }), e;
}
function ph(e) {
  let {
    children: t,
    main: r,
    mask: n,
    attributes: a,
    styles: o,
    transform: i
  } = e;
  if (Ks(i) && r.found && !n.found) {
    const {
      width: l,
      height: f
    } = r, c = {
      x: l / f / 2,
      y: 0.5
    };
    a.style = ro(N(N({}, o), {}, {
      "transform-origin": "".concat(c.x + i.x / 16, "em ").concat(c.y + i.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function hh(e) {
  let {
    prefix: t,
    iconName: r,
    children: n,
    attributes: a,
    symbol: o
  } = e;
  const i = o === !0 ? "".concat(t, "-").concat(H.cssPrefix, "-").concat(r) : o;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: N(N({}, a), {}, {
        id: i
      }),
      children: n
    }]
  }];
}
function Xs(e) {
  const {
    icons: {
      main: t,
      mask: r
    },
    prefix: n,
    iconName: a,
    transform: o,
    symbol: i,
    title: l,
    maskId: f,
    titleId: c,
    extra: u,
    watchable: p = !1
  } = e, {
    width: m,
    height: E
  } = r.found ? r : t, S = pp.includes(n), A = [H.replacementClass, a ? "".concat(H.cssPrefix, "-").concat(a) : ""].filter((D) => u.classes.indexOf(D) === -1).filter((D) => D !== "" || !!D).concat(u.classes).join(" ");
  let C = {
    children: [],
    attributes: N(N({}, u.attributes), {}, {
      "data-prefix": n,
      "data-icon": a,
      class: A,
      role: u.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(m, " ").concat(E)
    })
  };
  const _ = S && !~u.classes.indexOf("fa-fw") ? {
    width: "".concat(m / E * 16 * 0.0625, "em")
  } : {};
  p && (C.attributes[mr] = ""), l && (C.children.push({
    tag: "title",
    attributes: {
      id: C.attributes["aria-labelledby"] || "title-".concat(c || In())
    },
    children: [l]
  }), delete C.attributes.title);
  const T = N(N({}, C), {}, {
    prefix: n,
    iconName: a,
    main: t,
    mask: r,
    maskId: f,
    transform: o,
    symbol: i,
    styles: N(N({}, _), u.styles)
  }), {
    children: w,
    attributes: I
  } = r.found && t.found ? Kt("generateAbstractMask", T) || {
    children: [],
    attributes: {}
  } : Kt("generateAbstractIcon", T) || {
    children: [],
    attributes: {}
  };
  return T.children = w, T.attributes = I, i ? hh(T) : ph(T);
}
function Dl(e) {
  const {
    content: t,
    width: r,
    height: n,
    transform: a,
    title: o,
    extra: i,
    watchable: l = !1
  } = e, f = N(N(N({}, i.attributes), o ? {
    title: o
  } : {}), {}, {
    class: i.classes.join(" ")
  });
  l && (f[mr] = "");
  const c = N({}, i.styles);
  Ks(a) && (c.transform = qp({
    transform: a,
    startCentered: !0,
    width: r,
    height: n
  }), c["-webkit-transform"] = c.transform);
  const u = ro(c);
  u.length > 0 && (f.style = u);
  const p = [];
  return p.push({
    tag: "span",
    attributes: f,
    children: [t]
  }), o && p.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [o]
  }), p;
}
function mh(e) {
  const {
    content: t,
    title: r,
    extra: n
  } = e, a = N(N(N({}, n.attributes), r ? {
    title: r
  } : {}), {}, {
    class: n.classes.join(" ")
  }), o = ro(n.styles);
  o.length > 0 && (a.style = o);
  const i = [];
  return i.push({
    tag: "span",
    attributes: a,
    children: [t]
  }), r && i.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [r]
  }), i;
}
const {
  styles: mi
} = bt;
function cs(e) {
  const t = e[0], r = e[1], [n] = e.slice(4);
  let a = null;
  return Array.isArray(n) ? a = {
    tag: "g",
    attributes: {
      class: "".concat(H.cssPrefix, "-").concat(di.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(H.cssPrefix, "-").concat(di.SECONDARY),
        fill: "currentColor",
        d: n[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(H.cssPrefix, "-").concat(di.PRIMARY),
        fill: "currentColor",
        d: n[1]
      }
    }]
  } : a = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: n
    }
  }, {
    found: !0,
    width: t,
    height: r,
    icon: a
  };
}
const gh = {
  found: !1,
  width: 512,
  height: 512
};
function yh(e, t) {
  !Fu && !H.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function us(e, t) {
  let r = t;
  return t === "fa" && H.styleDefault !== null && (t = Gt()), new Promise((n, a) => {
    if (r === "fa") {
      const o = Gu(e) || {};
      e = o.iconName || e, t = o.prefix || t;
    }
    if (e && t && mi[t] && mi[t][e]) {
      const o = mi[t][e];
      return n(cs(o));
    }
    yh(e, t), n(N(N({}, gh), {}, {
      icon: H.showMissingIcons && e ? Kt("missingIconAbstract") || {} : {}
    }));
  });
}
const Ll = () => {
}, fs = H.measurePerformance && ya && ya.mark && ya.measure ? ya : {
  mark: Ll,
  measure: Ll
}, An = 'FA "6.7.1"', vh = (e) => (fs.mark("".concat(An, " ").concat(e, " begins")), () => Ju(e)), Ju = (e) => {
  fs.mark("".concat(An, " ").concat(e, " ends")), fs.measure("".concat(An, " ").concat(e), "".concat(An, " ").concat(e, " begins"), "".concat(An, " ").concat(e, " ends"));
};
var Qs = {
  begin: vh,
  end: Ju
};
const Oa = () => {
};
function Rl(e) {
  return typeof (e.getAttribute ? e.getAttribute(mr) : null) == "string";
}
function bh(e) {
  const t = e.getAttribute ? e.getAttribute(Vs) : null, r = e.getAttribute ? e.getAttribute(Hs) : null;
  return t && r;
}
function wh(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(H.replacementClass);
}
function xh() {
  return H.autoReplaceSvg === !0 ? Ca.replace : Ca[H.autoReplaceSvg] || Ca.replace;
}
function Sh(e) {
  return me.createElementNS("http://www.w3.org/2000/svg", e);
}
function Ah(e) {
  return me.createElement(e);
}
function Xu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: r = e.tag === "svg" ? Sh : Ah
  } = t;
  if (typeof e == "string")
    return me.createTextNode(e);
  const n = r(e.tag);
  return Object.keys(e.attributes || []).forEach(function(o) {
    n.setAttribute(o, e.attributes[o]);
  }), (e.children || []).forEach(function(o) {
    n.appendChild(Xu(o, {
      ceFn: r
    }));
  }), n;
}
function Eh(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Ca = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((r) => {
        t.parentNode.insertBefore(Xu(r), t);
      }), t.getAttribute(mr) === null && H.keepOriginalSource) {
        let r = me.createComment(Eh(t));
        t.parentNode.replaceChild(r, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], r = e[1];
    if (~Gs(t).indexOf(H.replacementClass))
      return Ca.replace(e);
    const n = new RegExp("".concat(H.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      const o = r[0].attributes.class.split(" ").reduce((i, l) => (l === H.replacementClass || l.match(n) ? i.toSvg.push(l) : i.toNode.push(l), i), {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = o.toSvg.join(" "), o.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", o.toNode.join(" "));
    }
    const a = r.map((o) => jn(o)).join(`
`);
    t.setAttribute(mr, ""), t.innerHTML = a;
  }
};
function Nl(e) {
  e();
}
function Qu(e, t) {
  const r = typeof t == "function" ? t : Oa;
  if (e.length === 0)
    r();
  else {
    let n = Nl;
    H.mutateApproach === Cp && (n = Wt.requestAnimationFrame || Nl), n(() => {
      const a = xh(), o = Qs.begin("mutate");
      e.map(a), o(), r();
    });
  }
}
let Zs = !1;
function Zu() {
  Zs = !0;
}
function ds() {
  Zs = !1;
}
let Ba = null;
function Ml(e) {
  if (!El || !H.observeMutations)
    return;
  const {
    treeCallback: t = Oa,
    nodeCallback: r = Oa,
    pseudoElementsCallback: n = Oa,
    observeMutationsRoot: a = me
  } = e;
  Ba = new El((o) => {
    if (Zs)
      return;
    const i = Gt();
    Jr(o).forEach((l) => {
      if (l.type === "childList" && l.addedNodes.length > 0 && !Rl(l.addedNodes[0]) && (H.searchPseudoElements && n(l.target), t(l.target)), l.type === "attributes" && l.target.parentNode && H.searchPseudoElements && n(l.target.parentNode), l.type === "attributes" && Rl(l.target) && ~Fp.indexOf(l.attributeName))
        if (l.attributeName === "class" && bh(l.target)) {
          const {
            prefix: f,
            iconName: c
          } = ao(Gs(l.target));
          l.target.setAttribute(Vs, f || i), c && l.target.setAttribute(Hs, c);
        } else
          wh(l.target) && r(l.target);
    });
  }), Lt && Ba.observe(a, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function Oh() {
  Ba && Ba.disconnect();
}
function Ch(e) {
  const t = e.getAttribute("style");
  let r = [];
  return t && (r = t.split(";").reduce((n, a) => {
    const o = a.split(":"), i = o[0], l = o.slice(1);
    return i && l.length > 0 && (n[i] = l.join(":").trim()), n;
  }, {})), r;
}
function Ph(e) {
  const t = e.getAttribute("data-prefix"), r = e.getAttribute("data-icon"), n = e.innerText !== void 0 ? e.innerText.trim() : "";
  let a = ao(Gs(e));
  return a.prefix || (a.prefix = Gt()), t && r && (a.prefix = t, a.iconName = r), a.iconName && a.prefix || (a.prefix && n.length > 0 && (a.iconName = Qp(a.prefix, e.innerText) || Js(a.prefix, os(e.innerText))), !a.iconName && H.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function _h(e) {
  const t = Jr(e.attributes).reduce((a, o) => (a.name !== "class" && a.name !== "style" && (a[o.name] = o.value), a), {}), r = e.getAttribute("title"), n = e.getAttribute("data-fa-title-id");
  return H.autoA11y && (r ? t["aria-labelledby"] = "".concat(H.replacementClass, "-title-").concat(n || In()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function kh() {
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
function Bl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: r,
    prefix: n,
    rest: a
  } = Ph(e), o = _h(e), i = ss("parseNodeAttributes", {}, e);
  let l = t.styleParser ? Ch(e) : [];
  return N({
    iconName: r,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: n,
    transform: vt,
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
  styles: Th
} = bt;
function ef(e) {
  const t = H.autoReplaceSvg === "nest" ? Bl(e, {
    styleParser: !1
  }) : Bl(e);
  return ~t.extra.classes.indexOf(Du) ? Kt("generateLayersText", e, t) : Kt("generateSvgReplacementMutation", e, t);
}
function $h() {
  return [...up, ...Zi];
}
function jl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Lt)
    return Promise.resolve();
  const r = me.documentElement.classList, n = (u) => r.add("".concat(Pl, "-").concat(u)), a = (u) => r.remove("".concat(Pl, "-").concat(u)), o = H.autoFetchSvg ? $h() : Pu.concat(Object.keys(Th));
  o.includes("fa") || o.push("fa");
  const i = [".".concat(Du, ":not([").concat(mr, "])")].concat(o.map((u) => ".".concat(u, ":not([").concat(mr, "])"))).join(", ");
  if (i.length === 0)
    return Promise.resolve();
  let l = [];
  try {
    l = Jr(e.querySelectorAll(i));
  } catch {
  }
  if (l.length > 0)
    n("pending"), a("complete");
  else
    return Promise.resolve();
  const f = Qs.begin("onTree"), c = l.reduce((u, p) => {
    try {
      const m = ef(p);
      m && u.push(m);
    } catch (m) {
      Fu || m.name === "MissingIcon" && console.error(m);
    }
    return u;
  }, []);
  return new Promise((u, p) => {
    Promise.all(c).then((m) => {
      Qu(m, () => {
        n("active"), n("complete"), a("pending"), typeof t == "function" && t(), f(), u();
      });
    }).catch((m) => {
      f(), p(m);
    });
  });
}
function Fh(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  ef(e).then((r) => {
    r && Qu([r], t);
  });
}
function Ih(e) {
  return function(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = (t || {}).icon ? t : ls(t || {});
    let {
      mask: a
    } = r;
    return a && (a = (a || {}).icon ? a : ls(a || {})), e(n, N(N({}, r), {}, {
      mask: a
    }));
  };
}
const Dh = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: r = vt,
    symbol: n = !1,
    mask: a = null,
    maskId: o = null,
    title: i = null,
    titleId: l = null,
    classes: f = [],
    attributes: c = {},
    styles: u = {}
  } = t;
  if (!e)
    return;
  const {
    prefix: p,
    iconName: m,
    icon: E
  } = e;
  return oo(N({
    type: "icon"
  }, e), () => (gr("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), H.autoA11y && (i ? c["aria-labelledby"] = "".concat(H.replacementClass, "-title-").concat(l || In()) : (c["aria-hidden"] = "true", c.focusable = "false")), Xs({
    icons: {
      main: cs(E),
      mask: a ? cs(a.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: p,
    iconName: m,
    transform: N(N({}, vt), r),
    symbol: n,
    title: i,
    maskId: o,
    titleId: l,
    extra: {
      attributes: c,
      styles: u,
      classes: f
    }
  })));
};
var Lh = {
  mixout() {
    return {
      icon: Ih(Dh)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = jl, e.nodeCallback = Fh, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: r = me,
        callback: n = () => {
        }
      } = t;
      return jl(r, n);
    }, e.generateSvgReplacementMutation = function(t, r) {
      const {
        iconName: n,
        title: a,
        titleId: o,
        prefix: i,
        transform: l,
        symbol: f,
        mask: c,
        maskId: u,
        extra: p
      } = r;
      return new Promise((m, E) => {
        Promise.all([us(n, i), c.iconName ? us(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((S) => {
          let [A, C] = S;
          m([t, Xs({
            icons: {
              main: A,
              mask: C
            },
            prefix: i,
            iconName: n,
            transform: l,
            symbol: f,
            maskId: u,
            title: a,
            titleId: o,
            extra: p,
            watchable: !0
          })]);
        }).catch(E);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: r,
        attributes: n,
        main: a,
        transform: o,
        styles: i
      } = t;
      const l = ro(i);
      l.length > 0 && (n.style = l);
      let f;
      return Ks(o) && (f = Kt("generateAbstractTransformGrouping", {
        main: a,
        transform: o,
        containerWidth: a.width,
        iconWidth: a.width
      })), r.push(f || a.icon), {
        children: r,
        attributes: n
      };
    };
  }
}, Rh = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: r = []
        } = t;
        return oo({
          type: "layer"
        }, () => {
          gr("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let n = [];
          return e((a) => {
            Array.isArray(a) ? a.map((o) => {
              n = n.concat(o.abstract);
            }) : n = n.concat(a.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(H.cssPrefix, "-layers"), ...r].join(" ")
            },
            children: n
          }];
        });
      }
    };
  }
}, Nh = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: r = null,
          classes: n = [],
          attributes: a = {},
          styles: o = {}
        } = t;
        return oo({
          type: "counter",
          content: e
        }, () => (gr("beforeDOMElementCreation", {
          content: e,
          params: t
        }), mh({
          content: e.toString(),
          title: r,
          extra: {
            attributes: a,
            styles: o,
            classes: ["".concat(H.cssPrefix, "-layers-counter"), ...n]
          }
        })));
      }
    };
  }
}, Mh = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: r = vt,
          title: n = null,
          classes: a = [],
          attributes: o = {},
          styles: i = {}
        } = t;
        return oo({
          type: "text",
          content: e
        }, () => (gr("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Dl({
          content: e,
          transform: N(N({}, vt), r),
          title: n,
          extra: {
            attributes: o,
            styles: i,
            classes: ["".concat(H.cssPrefix, "-layers-text"), ...a]
          }
        })));
      }
    };
  },
  provides(e) {
    e.generateLayersText = function(t, r) {
      const {
        title: n,
        transform: a,
        extra: o
      } = r;
      let i = null, l = null;
      if (Ou) {
        const f = parseInt(getComputedStyle(t).fontSize, 10), c = t.getBoundingClientRect();
        i = c.width / f, l = c.height / f;
      }
      return H.autoA11y && !n && (o.attributes["aria-hidden"] = "true"), Promise.resolve([t, Dl({
        content: t.innerHTML,
        width: i,
        height: l,
        transform: a,
        title: n,
        extra: o,
        watchable: !0
      })]);
    };
  }
};
const Bh = new RegExp('"', "ug"), ql = [1105920, 1112319], zl = N(N(N(N({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), sp), Ep), yp), ps = Object.keys(zl).reduce((e, t) => (e[t.toLowerCase()] = zl[t], e), {}), jh = Object.keys(ps).reduce((e, t) => {
  const r = ps[t];
  return e[t] = r[900] || [...Object.entries(r)][0][1], e;
}, {});
function qh(e) {
  const t = e.replace(Bh, ""), r = Gp(t, 0), n = r >= ql[0] && r <= ql[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: os(a ? t[0] : t),
    isSecondary: n || a
  };
}
function zh(e, t) {
  const r = e.replace(/^['"]|['"]$/g, "").toLowerCase(), n = parseInt(t), a = isNaN(n) ? "normal" : n;
  return (ps[r] || {})[a] || jh[r];
}
function Ul(e, t) {
  const r = "".concat(Op).concat(t.replace(":", "-"));
  return new Promise((n, a) => {
    if (e.getAttribute(r) !== null)
      return n();
    const i = Jr(e.children).filter((m) => m.getAttribute(ts) === t)[0], l = Wt.getComputedStyle(e, t), f = l.getPropertyValue("font-family"), c = f.match(Tp), u = l.getPropertyValue("font-weight"), p = l.getPropertyValue("content");
    if (i && !c)
      return e.removeChild(i), n();
    if (c && p !== "none" && p !== "") {
      const m = l.getPropertyValue("content");
      let E = zh(f, u);
      const {
        value: S,
        isSecondary: A
      } = qh(m), C = c[0].startsWith("FontAwesome");
      let _ = Js(E, S), T = _;
      if (C) {
        const w = Zp(S);
        w.iconName && w.prefix && (_ = w.iconName, E = w.prefix);
      }
      if (_ && !A && (!i || i.getAttribute(Vs) !== E || i.getAttribute(Hs) !== T)) {
        e.setAttribute(r, T), i && e.removeChild(i);
        const w = kh(), {
          extra: I
        } = w;
        I.attributes[ts] = t, us(_, E).then((D) => {
          const B = Xs(N(N({}, w), {}, {
            icons: {
              main: D,
              mask: Ku()
            },
            prefix: E,
            iconName: T,
            extra: I,
            watchable: !0
          })), z = me.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(z, e.firstChild) : e.appendChild(z), z.outerHTML = B.map((ee) => jn(ee)).join(`
`), e.removeAttribute(r), n();
        }).catch(a);
      } else
        n();
    } else
      n();
  });
}
function Uh(e) {
  return Promise.all([Ul(e, "::before"), Ul(e, "::after")]);
}
function Vh(e) {
  return e.parentNode !== document.head && !~Pp.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(ts) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Vl(e) {
  if (Lt)
    return new Promise((t, r) => {
      const n = Jr(e.querySelectorAll("*")).filter(Vh).map(Uh), a = Qs.begin("searchPseudoElements");
      Zu(), Promise.all(n).then(() => {
        a(), ds(), t();
      }).catch(() => {
        a(), ds(), r();
      });
    });
}
var Hh = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = Vl, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: r = me
      } = t;
      H.searchPseudoElements && Vl(r);
    };
  }
};
let Hl = !1;
var Wh = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Zu(), Hl = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        Ml(ss("mutationObserverCallbacks", {}));
      },
      noAuto() {
        Oh();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        Hl ? ds() : Ml(ss("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const Wl = (e) => {
  let t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((r, n) => {
    const a = n.toLowerCase().split("-"), o = a[0];
    let i = a.slice(1).join("-");
    if (o && i === "h")
      return r.flipX = !0, r;
    if (o && i === "v")
      return r.flipY = !0, r;
    if (i = parseFloat(i), isNaN(i))
      return r;
    switch (o) {
      case "grow":
        r.size = r.size + i;
        break;
      case "shrink":
        r.size = r.size - i;
        break;
      case "left":
        r.x = r.x - i;
        break;
      case "right":
        r.x = r.x + i;
        break;
      case "up":
        r.y = r.y - i;
        break;
      case "down":
        r.y = r.y + i;
        break;
      case "rotate":
        r.rotate = r.rotate + i;
        break;
    }
    return r;
  }, t);
};
var Gh = {
  mixout() {
    return {
      parse: {
        transform: (e) => Wl(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const r = t.getAttribute("data-fa-transform");
        return r && (e.transform = Wl(r)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: r,
        transform: n,
        containerWidth: a,
        iconWidth: o
      } = t;
      const i = {
        transform: "translate(".concat(a / 2, " 256)")
      }, l = "translate(".concat(n.x * 32, ", ").concat(n.y * 32, ") "), f = "scale(".concat(n.size / 16 * (n.flipX ? -1 : 1), ", ").concat(n.size / 16 * (n.flipY ? -1 : 1), ") "), c = "rotate(".concat(n.rotate, " 0 0)"), u = {
        transform: "".concat(l, " ").concat(f, " ").concat(c)
      }, p = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, m = {
        outer: i,
        inner: u,
        path: p
      };
      return {
        tag: "g",
        attributes: N({}, m.outer),
        children: [{
          tag: "g",
          attributes: N({}, m.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: N(N({}, r.icon.attributes), m.path)
          }]
        }]
      };
    };
  }
};
const gi = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Gl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Kh(e) {
  return e.tag === "g" ? e.children : [e];
}
var Yh = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const r = t.getAttribute("data-fa-mask"), n = r ? ao(r.split(" ").map((a) => a.trim())) : Ku();
        return n.prefix || (n.prefix = Gt()), e.mask = n, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: r,
        attributes: n,
        main: a,
        mask: o,
        maskId: i,
        transform: l
      } = t;
      const {
        width: f,
        icon: c
      } = a, {
        width: u,
        icon: p
      } = o, m = jp({
        transform: l,
        containerWidth: u,
        iconWidth: f
      }), E = {
        tag: "rect",
        attributes: N(N({}, gi), {}, {
          fill: "white"
        })
      }, S = c.children ? {
        children: c.children.map(Gl)
      } : {}, A = {
        tag: "g",
        attributes: N({}, m.inner),
        children: [Gl(N({
          tag: c.tag,
          attributes: N(N({}, c.attributes), m.path)
        }, S))]
      }, C = {
        tag: "g",
        attributes: N({}, m.outer),
        children: [A]
      }, _ = "mask-".concat(i || In()), T = "clip-".concat(i || In()), w = {
        tag: "mask",
        attributes: N(N({}, gi), {}, {
          id: _,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [E, C]
      }, I = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: T
          },
          children: Kh(p)
        }, w]
      };
      return r.push(I, {
        tag: "rect",
        attributes: N({
          fill: "currentColor",
          "clip-path": "url(#".concat(T, ")"),
          mask: "url(#".concat(_, ")")
        }, gi)
      }), {
        children: r,
        attributes: n
      };
    };
  }
}, Jh = {
  provides(e) {
    let t = !1;
    Wt.matchMedia && (t = Wt.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const r = [], n = {
        fill: "currentColor"
      }, a = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: N(N({}, n), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const o = N(N({}, a), {}, {
        attributeName: "opacity"
      }), i = {
        tag: "circle",
        attributes: N(N({}, n), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || i.children.push({
        tag: "animate",
        attributes: N(N({}, a), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: N(N({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(i), r.push({
        tag: "path",
        attributes: N(N({}, n), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: N(N({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || r.push({
        tag: "path",
        attributes: N(N({}, n), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: N(N({}, o), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: r
      };
    };
  }
}, Xh = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const r = t.getAttribute("data-fa-symbol"), n = r === null ? !1 : r === "" ? !0 : r;
        return e.symbol = n, e;
      }
    };
  }
}, Qh = [Up, Lh, Rh, Nh, Mh, Hh, Wh, Gh, Yh, Jh, Xh];
lh(Qh, {
  mixoutsTo: Ye
});
Ye.noAuto;
const tf = Ye.config, qn = Ye.library;
Ye.dom;
const ja = Ye.parse;
Ye.findIconDefinition;
Ye.toHtml;
const Zh = Ye.icon;
Ye.layer;
const em = Ye.text;
Ye.counter;
function Kl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function nt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kl(Object(r), !0).forEach(function(n) {
      Be(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tm(e, t) {
  if (typeof e != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function rm(e) {
  var t = tm(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function qa(e) {
  "@babel/helpers - typeof";
  return qa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qa(e);
}
function Be(e, t, r) {
  return t = rm(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function nm(e, t) {
  if (e == null)
    return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0)
        continue;
      r[n] = e[n];
    }
  return r;
}
function am(e, t) {
  if (e == null)
    return {};
  var r = nm(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      n = o[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function hs(e) {
  return om(e) || im(e) || sm(e) || lm();
}
function om(e) {
  if (Array.isArray(e))
    return ms(e);
}
function im(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function sm(e, t) {
  if (e) {
    if (typeof e == "string")
      return ms(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ms(e, t);
  }
}
function ms(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function lm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var cm = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, rf = { exports: {} };
(function(e) {
  (function(t) {
    var r = function(_, T, w) {
      if (!c(T) || p(T) || m(T) || E(T) || f(T))
        return T;
      var I, D = 0, B = 0;
      if (u(T))
        for (I = [], B = T.length; D < B; D++)
          I.push(r(_, T[D], w));
      else {
        I = {};
        for (var z in T)
          Object.prototype.hasOwnProperty.call(T, z) && (I[_(z, w)] = r(_, T[z], w));
      }
      return I;
    }, n = function(_, T) {
      T = T || {};
      var w = T.separator || "_", I = T.split || /(?=[A-Z])/;
      return _.split(I).join(w);
    }, a = function(_) {
      return S(_) ? _ : (_ = _.replace(/[\-_\s]+(.)?/g, function(T, w) {
        return w ? w.toUpperCase() : "";
      }), _.substr(0, 1).toLowerCase() + _.substr(1));
    }, o = function(_) {
      var T = a(_);
      return T.substr(0, 1).toUpperCase() + T.substr(1);
    }, i = function(_, T) {
      return n(_, T).toLowerCase();
    }, l = Object.prototype.toString, f = function(_) {
      return typeof _ == "function";
    }, c = function(_) {
      return _ === Object(_);
    }, u = function(_) {
      return l.call(_) == "[object Array]";
    }, p = function(_) {
      return l.call(_) == "[object Date]";
    }, m = function(_) {
      return l.call(_) == "[object RegExp]";
    }, E = function(_) {
      return l.call(_) == "[object Boolean]";
    }, S = function(_) {
      return _ = _ - 0, _ === _;
    }, A = function(_, T) {
      var w = T && "process" in T ? T.process : T;
      return typeof w != "function" ? _ : function(I, D) {
        return w(I, _, D);
      };
    }, C = {
      camelize: a,
      decamelize: i,
      pascalize: o,
      depascalize: i,
      camelizeKeys: function(_, T) {
        return r(A(a, T), _);
      },
      decamelizeKeys: function(_, T) {
        return r(A(i, T), _, T);
      },
      pascalizeKeys: function(_, T) {
        return r(A(o, T), _);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = C : t.humps = C;
  })(cm);
})(rf);
var um = rf.exports, fm = ["class", "style"];
function dm(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, r) {
    var n = r.indexOf(":"), a = um.camelize(r.slice(0, n)), o = r.slice(n + 1).trim();
    return t[a] = o, t;
  }, {});
}
function pm(e) {
  return e.split(/\s+/).reduce(function(t, r) {
    return t[r] = !0, t;
  }, {});
}
function el(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var n = (e.children || []).map(function(f) {
    return el(f);
  }), a = Object.keys(e.attributes || {}).reduce(function(f, c) {
    var u = e.attributes[c];
    switch (c) {
      case "class":
        f.class = pm(u);
        break;
      case "style":
        f.style = dm(u);
        break;
      default:
        f.attrs[c] = u;
    }
    return f;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  r.class;
  var o = r.style, i = o === void 0 ? {} : o, l = am(r, fm);
  return Ft(e.tag, nt(nt(nt({}, t), {}, {
    class: a.class,
    style: nt(nt({}, a.style), i)
  }, a.attrs), l), n);
}
var nf = !1;
try {
  nf = process.env.NODE_ENV === "production";
} catch {
}
function hm() {
  if (!nf && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Pn(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Be({}, e, t) : {};
}
function mm(e) {
  var t, r = (t = {
    "fa-spin": e.spin,
    "fa-pulse": e.pulse,
    "fa-fw": e.fixedWidth,
    "fa-border": e.border,
    "fa-li": e.listItem,
    "fa-inverse": e.inverse,
    "fa-flip": e.flip === !0,
    "fa-flip-horizontal": e.flip === "horizontal" || e.flip === "both",
    "fa-flip-vertical": e.flip === "vertical" || e.flip === "both"
  }, Be(Be(Be(Be(Be(Be(Be(Be(Be(Be(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), "fa-flash", e.flash), Be(Be(t, "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse));
  return Object.keys(r).map(function(n) {
    return r[n] ? n : null;
  }).filter(function(n) {
    return n;
  });
}
function Yl(e) {
  if (e && qa(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (ja.icon)
    return ja.icon(e);
  if (e === null)
    return null;
  if (qa(e) === "object" && e.prefix && e.iconName)
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
var yt = St({
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
  setup: function(t, r) {
    var n = r.attrs, a = ne(function() {
      return Yl(t.icon);
    }), o = ne(function() {
      return Pn("classes", mm(t));
    }), i = ne(function() {
      return Pn("transform", typeof t.transform == "string" ? ja.transform(t.transform) : t.transform);
    }), l = ne(function() {
      return Pn("mask", Yl(t.mask));
    }), f = ne(function() {
      return Zh(a.value, nt(nt(nt(nt({}, o.value), i.value), l.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    $t(f, function(u) {
      if (!u)
        return hm("Could not find one or more icon(s)", a.value, l.value);
    }, {
      immediate: !0
    });
    var c = ne(function() {
      return f.value ? el(f.value.abstract[0], {}, n) : null;
    });
    return function() {
      return c.value;
    };
  }
});
St({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, r) {
    var n = r.slots, a = tf.familyPrefix, o = ne(function() {
      return ["".concat(a, "-layers")].concat(hs(t.fixedWidth ? ["".concat(a, "-fw")] : []));
    });
    return function() {
      return Ft("div", {
        class: o.value
      }, n.default ? n.default() : []);
    };
  }
});
St({
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
  setup: function(t, r) {
    var n = r.attrs, a = tf.familyPrefix, o = ne(function() {
      return Pn("classes", [].concat(hs(t.counter ? ["".concat(a, "-layers-counter")] : []), hs(t.position ? ["".concat(a, "-layers-").concat(t.position)] : [])));
    }), i = ne(function() {
      return Pn("transform", typeof t.transform == "string" ? ja.transform(t.transform) : t.transform);
    }), l = ne(function() {
      var c = em(t.value.toString(), nt(nt({}, i.value), o.value)), u = c.abstract;
      return t.counter && (u[0].attributes.class = u[0].attributes.class.replace("fa-layers-text", "")), u[0];
    }), f = ne(function() {
      return el(l.value, {}, n);
    });
    return function() {
      return f.value;
    };
  }
});
/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const gm = {
  prefix: "fas",
  iconName: "sort-down",
  icon: [320, 512, ["sort-desc"], "f0dd", "M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"]
}, gs = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, ym = {
  prefix: "fas",
  iconName: "box-archive",
  icon: [512, 512, ["archive"], "f187", "M32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64C0 46.3 14.3 32 32 32zm0 128l448 0 0 256c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-256zm128 80c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16z"]
}, Jl = {
  prefix: "fas",
  iconName: "pen-ruler",
  icon: [512, 512, ["pencil-ruler"], "f5ae", "M469.3 19.3l23.4 23.4c25 25 25 65.5 0 90.5l-56.4 56.4L322.3 75.7l56.4-56.4c25-25 65.5-25 90.5 0zM44.9 353.2L299.7 98.3 413.7 212.3 158.8 467.1c-6.7 6.7-15.1 11.6-24.2 14.2l-104 29.7c-8.4 2.4-17.4 .1-23.6-6.1s-8.5-15.2-6.1-23.6l29.7-104c2.6-9.2 7.5-17.5 14.2-24.2zM249.4 103.4L103.4 249.4 16 161.9c-18.7-18.7-18.7-49.1 0-67.9L94.1 16c18.7-18.7 49.1-18.7 67.9 0l19.8 19.8c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1l45.1 45.1zM408.6 262.6l45.1 45.1c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1L496 350.1c18.7 18.7 18.7 49.1 0 67.9L417.9 496c-18.7 18.7-49.1 18.7-67.9 0l-87.4-87.4L408.6 262.6z"]
}, vm = {
  prefix: "fas",
  iconName: "square-check",
  icon: [448, 512, [9745, 9989, 61510, "check-square"], "f14a", "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, Xl = {
  prefix: "fas",
  iconName: "eye-slash",
  icon: [640, 512, [], "f070", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]
}, Ql = {
  prefix: "fas",
  iconName: "eye",
  icon: [576, 512, [128065], "f06e", "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]
}, bm = {
  prefix: "fas",
  iconName: "sort-up",
  icon: [320, 512, ["sort-asc"], "f0de", "M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]
}, wm = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]
}, xm = {
  prefix: "fas",
  iconName: "spinner",
  icon: [512, 512, [], "f110", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]
}, Sm = {
  prefix: "fas",
  iconName: "calendar",
  icon: [448, 512, [128197, 128198], "f133", "M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"]
};
/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Am = {
  prefix: "far",
  iconName: "square",
  icon: [448, 512, [9632, 9723, 9724, 61590], "f0c8", "M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]
};
/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const af = {
  prefix: "fab",
  iconName: "whatsapp",
  icon: [448, 512, [], "f232", "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]
};
const zn = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, a] of t)
    r[n] = a;
  return r;
}, Em = { class: "relative flex w-full max-w-full items-stretch" }, Om = {
  key: 0,
  class: "flex items-center"
}, Cm = {
  key: 1,
  class: "mr-1"
}, Pm = ["id", "disabled", "required", "name"], _m = { key: 5 }, km = ["id", "required", "disabled", "name"], Tm = {
  key: 0,
  class: "border-gray flex items-center whitespace-nowrap rounded rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center text-gray-500"
}, $m = ["id", "rows", "required", "disabled", "autocomplete", "placeholder", "autofocus", "name"], Fm = {
  key: 2,
  class: "relative flex w-full"
}, Im = ["href"], Dm = {
  __name: "Input",
  props: /* @__PURE__ */ bl({
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
  emits: /* @__PURE__ */ bl(["changed", "update:modelValue"], ["update:modelValue"]),
  setup(e, { expose: t, emit: r }) {
    qn.add(af, vm, Am, Ql, Xl);
    const n = e;
    function a(A) {
      let C = [];
      return A.split("_").join(" ").split(" ").map(function(_) {
        C.push(_[0].toUpperCase() + _.slice(1));
      }), C.join(" ");
    }
    const o = r, i = Q(!1), l = zd(e, "modelValue"), f = Q(), c = Q(), u = Q(n.type);
    Ke(() => {
      i.value = !n.form, f.value = i.value ? l.value : n.form[n.field];
    }), $t(
      () => f.value,
      (A, C) => {
        if (A !== C) {
          if (i.value ? l.value = A : n.form[n.field] = A, c.value = C, o("update:modelValue", A), p.value) {
            p.value = !1;
            return;
          }
          o("changed", { value: A, old_value: C });
        }
      }
    );
    const p = Q(!1), m = (A) => {
      f.value = A, p.value = !0;
    }, E = () => c.value;
    $t(
      () => n.field ? n.form[n.field] : null,
      (A) => {
        f.value = i.value ? l.value : A;
      },
      {
        deep: !0
      }
    ), $t(
      () => l.value,
      (A) => {
        f.value = A;
      }
    );
    const S = () => {
      u.value = u.value === "password" ? "text" : "password";
    };
    return t({
      togglePassword: S,
      setValueSilently: m,
      getPreviousValue: E
    }), (A, C) => {
      var _, T, w, I, D, B, z, ee, q;
      return x(), O("div", {
        class: K(e.noLabel ? "mb-2" : "mb-4")
      }, [
        e.noLabel ? G("", !0) : (x(), oe(M(tl), {
          key: 0,
          customClass: e.labelCustomClass,
          for: e.field,
          value: e.label ? e.label : e.field ? a(e.field) : "",
          sublabel: e.sublabel,
          required: e.required
        }, null, 8, ["customClass", "for", "value", "sublabel", "required"])),
        $("div", Em, [
          e.type === "switch" || e.type === "checkbox" ? (x(), O("label", Om, [
            (_ = A.$slots) != null && _.leftDescription ? J(A.$slots, "leftDescription", { key: 0 }, void 0, !0) : e.leftDescription ? (x(), O("span", Cm, Z(e.leftDescription ? e.leftDescription : "Disable"), 1)) : G("", !0),
            qe($("input", {
              id: e.field,
              type: "checkbox",
              class: "hidden",
              "onUpdate:modelValue": C[0] || (C[0] = (F) => f.value = F),
              disabled: n.disabled,
              required: n.required,
              name: e.name ?? e.field
            }, null, 8, Pm), [
              [wu, f.value]
            ]),
            e.type === "switch" ? (x(), O("div", {
              key: 2,
              tabindex: "0",
              class: K(["toggle-switch focusable !ml-0", {
                checked: f.value,
                disabled: n.disabled
              }])
            }, null, 2)) : (x(), O("div", {
              key: 3,
              tabindex: "0",
              class: K(["focusable mr-1 p-1 text-primary", {
                "!text-gray-500": n.disabled,
                [e.checkboxCustomClass]: e.checkboxCustomClass
              }])
            }, [
              ge(pr, {
                name: "popup",
                mode: "out-in"
              }, {
                default: de(() => [
                  n.form[e.field] ? (x(), oe(M(yt), {
                    key: "checked",
                    icon: "fas fa-square-check"
                  })) : (x(), oe(M(yt), {
                    key: "unchecked",
                    icon: "far fa-square"
                  }))
                ]),
                _: 1
              })
            ], 2)),
            (T = A.$slots) != null && T.rightDescription ? J(A.$slots, "rightDescription", { key: 4 }, void 0, !0) : e.rightDescription ? (x(), O("span", _m, Z(e.rightDescription), 1)) : G("", !0)
          ])) : e.type === "select" ? qe((x(), O("select", {
            key: 1,
            "onUpdate:modelValue": C[1] || (C[1] = (F) => f.value = F),
            id: e.field,
            required: n.required,
            disabled: n.disabled,
            name: e.name ?? e.field,
            class: K(["focusable block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", { [e.inputCustomClass]: !!e.inputCustomClass }])
          }, [
            J(A.$slots, "default", {}, void 0, !0)
          ], 10, km)), [
            [Ud, f.value]
          ]) : (x(), O(ce, { key: 2 }, [
            e.addon ? (x(), O("span", Tm, Z(e.addon), 1)) : G("", !0),
            e.type === "textarea" ? qe((x(), O("textarea", {
              key: 1,
              id: e.field,
              class: K(["focusable relative m-0 block w-full flex-auto disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", {
                "!rounded-l-none": e.addon,
                "!rounded-r-none": !!e.submitBtn || e.whatsApp || ((w = A.$slots) == null ? void 0 : w.submit),
                [e.inputCustomClass]: !!e.inputCustomClass
              }]),
              rows: n.rows,
              "onUpdate:modelValue": C[2] || (C[2] = (F) => f.value = F),
              required: n.required,
              disabled: n.disabled,
              autocomplete: e.autocomplete ?? e.field,
              placeholder: n.placeholder,
              autofocus: n.autofocus,
              name: e.name ?? e.field
            }, null, 10, $m)), [
              [xu, f.value]
            ]) : (x(), O("div", Fm, [
              ge(M(zm), {
                id: e.field,
                type: u.value,
                class: K(["focusable relative m-0 block w-full flex-auto disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", {
                  "!rounded-l-none": e.addon,
                  "!rounded-r-none": !!e.submitBtn || e.whatsApp || ((I = A.$slots) == null ? void 0 : I.submit),
                  [e.inputCustomClass]: !!e.inputCustomClass
                }]),
                modelValue: f.value,
                "onUpdate:modelValue": C[3] || (C[3] = (F) => f.value = F),
                required: n.required,
                disabled: n.disabled,
                autocomplete: e.autocomplete ?? e.field,
                min: n.min,
                max: n.max,
                step: n.step,
                placeholder: n.placeholder,
                autofocus: n.autofocus,
                pattern: n.pattern,
                name: e.name ?? e.field
              }, null, 8, ["id", "type", "class", "modelValue", "required", "disabled", "autocomplete", "min", "max", "step", "placeholder", "autofocus", "pattern", "name"]),
              e.type == "password" && !e.hidePasswordToggler ? (x(), O("div", {
                key: 0,
                onClick: S,
                class: "absolute right-0 top-0 z-[2] flex h-full w-11 cursor-pointer items-center justify-center text-lg leading-normal text-black"
              }, [
                u.value === "password" ? (x(), oe(M(yt), {
                  key: 0,
                  icon: M(Ql)
                }, null, 8, ["icon"])) : (x(), oe(M(yt), {
                  key: 1,
                  icon: M(Xl)
                }, null, 8, ["icon"]))
              ])) : G("", !0)
            ])),
            e.form ? (x(), O(ce, { key: 3 }, [
              e.submitBtn ? (x(), oe(M(uu), {
                key: 0,
                form: e.form,
                class: K(["z-[2] inline-block rounded-l-none", e.buttonCustomClass]),
                id: `submit-button-${e.field}`
              }, {
                default: de(() => [
                  ye(Z(e.submitBtn), 1)
                ]),
                _: 1
              }, 8, ["form", "class", "id"])) : G("", !0),
              (D = A.$slots) != null && D.submit ? (x(), oe(M(uu), {
                key: 1,
                form: e.form,
                class: K(["z-[2] inline-block rounded-l-none", e.buttonCustomClass]),
                id: "button-input"
              }, {
                default: de(() => [
                  J(A.$slots, "submit", {}, void 0, !0)
                ]),
                _: 3
              }, 8, ["form", "class"])) : G("", !0)
            ], 64)) : G("", !0),
            e.whatsApp ? (x(), O("a", {
              key: 4,
              class: K(["z-[2] inline-block rounded-r bg-primary px-2 py-2 text-xs font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:z-[3] focus:bg-primary-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-lg", e.buttonCustomClass]),
              href: e.whatsApp,
              target: "_blank"
            }, [
              ge(M(yt), {
                icon: "fab fa-whatsapp",
                size: "2xl"
              })
            ], 10, Im)) : G("", !0)
          ], 64))
        ]),
        e.error || (z = (B = e.form) == null ? void 0 : B.errors) != null && z[e.field] ? (x(), oe(M(Un), {
          key: 1,
          message: e.error ? e.error : (q = (ee = e.form) == null ? void 0 : ee.errors) == null ? void 0 : q[e.field],
          class: "mt-2"
        }, null, 8, ["message"])) : G("", !0)
      ], 2);
    };
  }
}, Lm = /* @__PURE__ */ zn(Dm, [["__scopeId", "data-v-4f38f3b9"]]), Rm = { class: "text-sm text-red-600" }, Un = {
  __name: "InputError",
  props: ["message"],
  setup(e) {
    return (t, r) => qe((x(), O("div", null, [
      $("p", Rm, Z(e.message), 1)
    ], 512)), [
      [Ht, e.message]
    ]);
  }
}, Nm = { key: 0 }, Mm = { key: 1 }, Bm = {
  key: 2,
  class: "ml-2 text-xs text-gray-500"
}, jm = {
  key: 3,
  class: "ml-1 text-red-500"
}, tl = {
  __name: "InputLabel",
  props: ["value", "sublabel", "required", "customClass"],
  setup(e) {
    return (t, r) => (x(), O("label", {
      class: K(["mb-1 block text-sm font-medium text-gray-700", e.customClass])
    }, [
      e.value ? (x(), O("span", Nm, Z(e.value), 1)) : (x(), O("span", Mm, [
        J(t.$slots, "default")
      ])),
      e.sublabel ? (x(), O("span", Bm, Z(e.sublabel), 1)) : G("", !0),
      e.required ? (x(), O("span", jm, "*")) : G("", !0)
    ], 2));
  }
}, qm = ["value"], zm = {
  __name: "TextInput",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(e, { expose: t }) {
    const r = Q(null);
    return Ke(() => {
      r.value.hasAttribute("autofocus") && r.value.focus();
    }), t({ focus: () => r.value.focus() }), (n, a) => (x(), O("input", {
      class: "max-w-full rounded border-gray-300 shadow focus:border-accent-500 focus:ring-accent-500",
      value: e.modelValue,
      onInput: a[0] || (a[0] = (o) => n.$emit("update:modelValue", o.target.value)),
      ref_key: "input",
      ref: r
    }, null, 40, qm));
  }
}, Um = { class: "relative mb-4 flex w-full flex-wrap items-stretch" }, Vm = ["id", "required", "disabled", "autocomplete", "placeholder", "autofocus", "rows"], i4 = {
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
    function r(n) {
      let a = [];
      return n.split("_").join(" ").split(" ").map(function(o) {
        a.push(o[0].toUpperCase() + o.slice(1));
      }), a.join(" ");
    }
    return (n, a) => (x(), O("div", null, [
      e.noLabel ? G("", !0) : (x(), oe(M(tl), {
        key: 0,
        for: e.field,
        value: e.label ? e.label : r(e.field),
        required: e.required
      }, null, 8, ["for", "value", "required"])),
      $("div", Um, [
        qe($("textarea", {
          id: e.field,
          class: "relative m-0 block flex-auto rounded border-gray-300 shadow focus:border-accent-500 focus:ring-accent-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none",
          "onUpdate:modelValue": a[0] || (a[0] = (o) => t.form[e.field] = o),
          required: t.required,
          disabled: t.disabled,
          autocomplete: e.field,
          placeholder: t.placeholder,
          autofocus: t.autofocus,
          rows: t.rows,
          onInput: a[1] || (a[1] = (o) => n.$emit("update:modelValue", o.target.value))
        }, null, 40, Vm), [
          [xu, t.form[e.field]]
        ])
      ]),
      ge(M(Un), {
        class: "mt-2",
        message: t.form.errors[e.field]
      }, null, 8, ["message"])
    ]));
  }
};
var Hm = Object.defineProperty, Wm = Object.defineProperties, Gm = Object.getOwnPropertyDescriptors, Zl = Object.getOwnPropertySymbols, Km = Object.prototype.hasOwnProperty, Ym = Object.prototype.propertyIsEnumerable, ec = (e, t, r) => t in e ? Hm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Fr = (e, t) => {
  for (var r in t || (t = {}))
    Km.call(t, r) && ec(e, r, t[r]);
  if (Zl)
    for (var r of Zl(t))
      Ym.call(t, r) && ec(e, r, t[r]);
  return e;
}, tc = (e, t) => Wm(e, Gm(t));
const Jm = {
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
        const r = this.getDropdownViewport(), { top: n, bottom: a, height: o } = t.getBoundingClientRect();
        if (n < r.top)
          return this.$refs.dropdownMenu.scrollTop = t.offsetTop;
        if (a > r.bottom)
          return this.$refs.dropdownMenu.scrollTop = t.offsetTop - (r.height - o);
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
}, Xm = {
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
}, Qm = {
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
}, rl = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, a] of t)
    r[n] = a;
  return r;
}, Zm = {}, eg = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, tg = /* @__PURE__ */ $("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), rg = [
  tg
];
function ng(e, t) {
  return x(), O("svg", eg, rg);
}
const ag = /* @__PURE__ */ rl(Zm, [["render", ng]]), og = {}, ig = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, sg = /* @__PURE__ */ $("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), lg = [
  sg
];
function cg(e, t) {
  return x(), O("svg", ig, lg);
}
const ug = /* @__PURE__ */ rl(og, [["render", cg]]), rc = {
  Deselect: ag,
  OpenIndicator: ug
}, fg = {
  mounted(e, { instance: t }) {
    if (t.appendToBody) {
      const {
        height: r,
        top: n,
        left: a,
        width: o
      } = t.$refs.toggle.getBoundingClientRect();
      let i = window.scrollX || window.pageXOffset, l = window.scrollY || window.pageYOffset;
      e.unbindPosition = t.calculatePosition(e, t, {
        width: o + "px",
        left: i + a + "px",
        top: l + n + r + "px"
      }), document.body.appendChild(e);
    }
  },
  unmounted(e, { instance: t }) {
    t.appendToBody && (e.unbindPosition && typeof e.unbindPosition == "function" && e.unbindPosition(), e.parentNode && e.parentNode.removeChild(e));
  }
};
function dg(e) {
  const t = {};
  return Object.keys(e).sort().forEach((r) => {
    t[r] = e[r];
  }), JSON.stringify(t);
}
let pg = 0;
function hg() {
  return ++pg;
}
const mg = {
  components: Fr({}, rc),
  directives: { appendToBody: fg },
  mixins: [Jm, Xm, Qm],
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
          return e.hasOwnProperty("id") ? e.id : dg(e);
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
      default(e, t, r) {
        return (t || "").toLocaleLowerCase().indexOf(r.toLocaleLowerCase()) > -1;
      }
    },
    filter: {
      type: Function,
      default(e, t) {
        return e.filter((r) => {
          let n = this.getOptionLabel(r);
          return typeof n == "number" && (n = n.toString()), this.filterBy(r, n, t);
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
      default(e, t, { width: r, top: n, left: a }) {
        e.style.top = n, e.style.left = a, e.style.width = r;
      }
    },
    dropdownShouldOpen: {
      type: Function,
      default({ noDrop: e, open: t, mutableLoading: r }) {
        return e ? !1 : t && !r;
      }
    },
    uid: {
      type: [String, Number],
      default: () => hg()
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
          attributes: Fr({
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
        header: tc(Fr({}, e), { deselect: this.deselect }),
        footer: tc(Fr({}, e), { deselect: this.deselect })
      };
    },
    childComponents() {
      return Fr(Fr({}, rc), this.components);
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
        const r = this.createOption(this.search);
        this.optionExists(r) || t.unshift(r);
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
      const r = () => typeof this.resetOnOptionsChange == "function" ? this.resetOnOptionsChange(e, t, this.selectedValue) : this.resetOnOptionsChange;
      !this.taggable && r() && this.clearSelection(), this.modelValue && this.isTrackingValues && this.setInternalValueFromOptions(this.modelValue);
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
      const r = [
        ...this.deselectButtons || [],
        this.$refs.clearButton
      ];
      if (this.searchEl === void 0 || r.filter(Boolean).some((n) => n.contains(e.target) || n === e.target)) {
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
      const t = (n) => JSON.stringify(this.reduce(n)) === JSON.stringify(e), r = [...this.options, ...this.pushedTags].filter(t);
      return r.length === 1 ? r[0] : r.find((n) => this.optionComparator(n, this.$data._value)) || e;
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
      const t = (a) => (a.preventDefault(), !this.isComposing && this.typeAheadSelect()), r = {
        8: (a) => this.maybeDeleteValue(),
        9: (a) => this.onTab(),
        27: (a) => this.onEscape(),
        38: (a) => (a.preventDefault(), this.typeAheadUp()),
        40: (a) => (a.preventDefault(), this.typeAheadDown())
      };
      this.selectOnKeyCodes.forEach((a) => r[a] = t);
      const n = this.mapKeydown(r, this);
      if (typeof n[e.keyCode] == "function")
        return n[e.keyCode](e);
    }
  }
}, gg = ["dir"], yg = ["id", "aria-expanded", "aria-owns"], vg = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, bg = ["disabled", "title", "aria-label", "onClick"], wg = {
  ref: "actions",
  class: "vs__actions"
}, xg = ["disabled"], Sg = { class: "vs__spinner" }, Ag = ["id"], Eg = ["id", "aria-selected", "onMouseover", "onClick"], Og = {
  key: 0,
  class: "vs__no-options"
}, Cg = /* @__PURE__ */ ye(" Sorry, no matching options. "), Pg = ["id"];
function _g(e, t, r, n, a, o) {
  const i = Vd("append-to-body");
  return x(), O("div", {
    dir: r.dir,
    class: K(["v-select", o.stateClasses])
  }, [
    J(e.$slots, "header", Xe(rt(o.scope.header))),
    $("div", {
      id: `vs${r.uid}__combobox`,
      ref: "toggle",
      class: "vs__dropdown-toggle",
      role: "combobox",
      "aria-expanded": o.dropdownOpen.toString(),
      "aria-owns": `vs${r.uid}__listbox`,
      "aria-label": "Search for option",
      onMousedown: t[1] || (t[1] = (l) => o.toggleDropdown(l))
    }, [
      $("div", vg, [
        (x(!0), O(ce, null, Ge(o.selectedValue, (l, f) => J(e.$slots, "selected-option-container", {
          option: o.normalizeOptionForSlot(l),
          deselect: o.deselect,
          multiple: r.multiple,
          disabled: r.disabled
        }, () => [
          (x(), O("span", {
            key: r.getOptionKey(l),
            class: "vs__selected"
          }, [
            J(e.$slots, "selected-option", Xe(rt(o.normalizeOptionForSlot(l))), () => [
              ye(Z(r.getOptionLabel(l)), 1)
            ]),
            r.multiple ? (x(), O("button", {
              key: 0,
              ref_for: !0,
              ref: (c) => a.deselectButtons[f] = c,
              disabled: r.disabled,
              type: "button",
              class: "vs__deselect",
              title: `Deselect ${r.getOptionLabel(l)}`,
              "aria-label": `Deselect ${r.getOptionLabel(l)}`,
              onClick: (c) => o.deselect(l)
            }, [
              (x(), oe(fi(o.childComponents.Deselect)))
            ], 8, bg)) : G("", !0)
          ]))
        ])), 256)),
        J(e.$slots, "search", Xe(rt(o.scope.search)), () => [
          $("input", Fn({ class: "vs__search" }, o.scope.search.attributes, Hd(o.scope.search.events)), null, 16)
        ])
      ], 512),
      $("div", wg, [
        qe($("button", {
          ref: "clearButton",
          disabled: r.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: t[0] || (t[0] = (...l) => o.clearSelection && o.clearSelection(...l))
        }, [
          (x(), oe(fi(o.childComponents.Deselect)))
        ], 8, xg), [
          [Ht, o.showClearButton]
        ]),
        J(e.$slots, "open-indicator", Xe(rt(o.scope.openIndicator)), () => [
          r.noDrop ? G("", !0) : (x(), oe(fi(o.childComponents.OpenIndicator), Xe(Fn({ key: 0 }, o.scope.openIndicator.attributes)), null, 16))
        ]),
        J(e.$slots, "spinner", Xe(rt(o.scope.spinner)), () => [
          qe($("div", Sg, "Loading...", 512), [
            [Ht, e.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, yg),
    ge(pr, { name: r.transition }, {
      default: de(() => [
        o.dropdownOpen ? qe((x(), O("ul", {
          id: `vs${r.uid}__listbox`,
          ref: "dropdownMenu",
          key: `vs${r.uid}__listbox`,
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1",
          onMousedown: t[2] || (t[2] = qt((...l) => o.onMousedown && o.onMousedown(...l), ["prevent"])),
          onMouseup: t[3] || (t[3] = (...l) => o.onMouseUp && o.onMouseUp(...l))
        }, [
          J(e.$slots, "list-header", Xe(rt(o.scope.listHeader))),
          (x(!0), O(ce, null, Ge(o.filteredOptions, (l, f) => (x(), O("li", {
            id: `vs${r.uid}__option-${f}`,
            key: r.getOptionKey(l),
            role: "option",
            class: K(["vs__dropdown-option", {
              "vs__dropdown-option--deselect": o.isOptionDeselectable(l) && f === e.typeAheadPointer,
              "vs__dropdown-option--selected": o.isOptionSelected(l),
              "vs__dropdown-option--highlight": f === e.typeAheadPointer,
              "vs__dropdown-option--disabled": !r.selectable(l)
            }]),
            "aria-selected": f === e.typeAheadPointer ? !0 : null,
            onMouseover: (c) => r.selectable(l) ? e.typeAheadPointer = f : null,
            onClick: qt((c) => r.selectable(l) ? o.select(l) : null, ["prevent", "stop"])
          }, [
            J(e.$slots, "option", Xe(rt(o.normalizeOptionForSlot(l))), () => [
              ye(Z(r.getOptionLabel(l)), 1)
            ])
          ], 42, Eg))), 128)),
          o.filteredOptions.length === 0 ? (x(), O("li", Og, [
            J(e.$slots, "no-options", Xe(rt(o.scope.noOptions)), () => [
              Cg
            ])
          ])) : G("", !0),
          J(e.$slots, "list-footer", Xe(rt(o.scope.listFooter)))
        ], 40, Ag)), [
          [i]
        ]) : (x(), O("ul", {
          key: 1,
          id: `vs${r.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, Pg))
      ]),
      _: 3
    }, 8, ["name"]),
    J(e.$slots, "footer", Xe(rt(o.scope.footer)))
  ], 10, gg);
}
const kg = /* @__PURE__ */ rl(mg, [["render", _g]]);
const s4 = {
  __name: "DropdownSearchbar",
  props: {
    options: Array,
    label: String,
    placeholder: String
  },
  setup(e) {
    return qn.add(af), (t, r) => (x(), oe(M(kg), {
      options: e.options,
      label: e.label,
      placeholder: e.placeholder,
      class: "min-w-44"
    }, null, 8, ["options", "label", "placeholder"]));
  }
}, Pt = {
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
    const t = e.pointer - 1, r = e.$el.offsetHeight * t;
    t >= 0 && (e.pointer = t), e.$refs.menu.scrollTop = r;
  },
  /**
   *
   * down arrow key
   * ページsizeを計算してずれたらmove
   * calculate page size. If different between itemPage and currentPage move scroll
   */
  nextItem(e) {
    const t = e.pointer + 1, r = e.$el.offsetHeight * t;
    t <= e.filteredOptions.length - 1 && (e.pointer = t);
    const n = e.$refs.menu.offsetHeight, a = Math.ceil((e.$refs.menu.scrollTop + e.$el.offsetHeight) / n), o = Math.ceil(r / n);
    a !== o && (e.$refs.menu.scrollTop = (o - 1) * e.$refs.menu.offsetHeight);
  },
  // down enter key
  enterItem(e) {
    const t = e.filteredOptions[e.pointer], r = t.disabled;
    t && !r && e.selectItem(t);
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
function Tg(e) {
  return new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
}
const of = {
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
      default: (e, t) => e.match(Tg(t))
    }
  }
}, $g = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, a] of t)
    r[n] = a;
  return r;
}, Fg = {
  name: "ModelSelect",
  mixins: [of],
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
      Pt.openOptions(this);
    },
    blurInput() {
      Pt.blurInput(this);
    },
    closeOptions() {
      Pt.closeOptions(this);
    },
    prevItem() {
      Pt.prevItem(this);
    },
    nextItem() {
      Pt.nextItem(this);
    },
    enterItem() {
      Pt.enterItem(this);
    },
    pointerSet(e) {
      Pt.pointerSet(this, e);
    },
    pointerAdjust() {
      Pt.pointerAdjust(this);
    },
    mousedownItem() {
      Pt.mousedownItem(this);
    },
    selectItem(e) {
      this.searchText = "", this.closeOptions(), typeof this.modelValue == "object" && this.modelValue ? this.$emit("update:modelValue", e) : (this.$emit("update:modelValue", e.value), e.value !== void 0 && e.value === e.text && (this.searchText = e.value));
    },
    optionValue(e) {
      return typeof e == "object" && e !== null ? e.value : e;
    }
  }
}, Ig = /* @__PURE__ */ $("i", { class: "dropdown icon" }, null, -1), Dg = ["disabled", "tabindex", "id", "name", "value"], Lg = ["data-vss-custom-attr"], Rg = ["data-vss-custom-attr", "onClick", "onMouseenter"];
function Ng(e, t, r, n, a, o) {
  return x(), O("div", {
    class: K(["ui fluid search selection dropdown", { "active visible": a.showMenu, error: e.isError, disabled: e.isDisabled }]),
    onClick: t[11] || (t[11] = (...i) => o.openOptions && o.openOptions(...i)),
    onFocus: t[12] || (t[12] = (...i) => o.openOptions && o.openOptions(...i))
  }, [
    Ig,
    $("input", {
      class: "search",
      autocomplete: "off",
      disabled: e.isDisabled,
      tabindex: e.isDisabled ? -1 : 0,
      id: e.id,
      name: e.name,
      value: a.searchText,
      onInput: t[0] || (t[0] = (i) => a.searchText = i.target.value),
      ref: "input",
      onFocus: t[1] || (t[1] = qt((...i) => o.openOptions && o.openOptions(...i), ["prevent"])),
      onKeyup: [
        t[2] || (t[2] = $r((...i) => o.closeOptions && o.closeOptions(...i), ["esc"])),
        t[7] || (t[7] = $r(qt((...i) => o.enterItem && o.enterItem(...i), ["prevent"]), ["enter"]))
      ],
      onBlur: t[3] || (t[3] = (...i) => o.blurInput && o.blurInput(...i)),
      onKeydown: [
        t[4] || (t[4] = $r((...i) => o.prevItem && o.prevItem(...i), ["up"])),
        t[5] || (t[5] = $r((...i) => o.nextItem && o.nextItem(...i), ["down"])),
        t[6] || (t[6] = $r(qt(() => {
        }, ["prevent"]), ["enter"])),
        t[8] || (t[8] = $r((...i) => o.deleteTextOrItem && o.deleteTextOrItem(...i), ["delete"]))
      ]
    }, null, 40, Dg),
    $("div", {
      class: K(["text", o.textClass]),
      "data-vss-custom-attr": o.searchTextCustomAttr
    }, Z(o.inputText), 11, Lg),
    $("div", {
      class: K(["menu", o.menuClass]),
      ref: "menu",
      onMousedown: t[10] || (t[10] = qt(() => {
      }, ["prevent"])),
      style: Mr(o.menuStyle),
      tabindex: "-1"
    }, [
      (x(!0), O(ce, null, Ge(o.filteredOptions, (i, l) => (x(), O("div", {
        key: l,
        class: K(["item", { selected: i.selected || a.pointer === l, disabled: i.disabled }]),
        "data-vss-custom-attr": o.customAttrs[l] ? o.customAttrs[l] : "",
        onClick: qt((f) => o.selectItem(i), ["stop"]),
        onMousedown: t[9] || (t[9] = (...f) => o.mousedownItem && o.mousedownItem(...f)),
        onMouseenter: (f) => o.pointerSet(l)
      }, [
        J(e.$slots, "default", {
          option: i,
          idx: l
        }, () => [
          ye(Z(i.text), 1)
        ])
      ], 42, Rg))), 128))
    ], 38)
  ], 34);
}
const nc = /* @__PURE__ */ $g(Fg, [["render", Ng]]), ac = {
  name: "ModelListSelect",
  mixins: [of],
  emits: ["blur", "searchchange", "update:modelValue"],
  render: function() {
    return Ft(nc, {
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
        const t = this.list.find((r) => r[this.optionValue] === e.value);
        this.$emit("update:modelValue", t);
      } else
        this.$emit("update:modelValue", e);
    }
  },
  components: {
    ModelSelect: nc
  }
};
const Mg = {
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
    const r = t, n = (a) => {
      let o = [];
      return a.split("_").join(" ").split(" ").map(function(i) {
        o.push(i[0].toUpperCase() + i.slice(1));
      }), o.join(" ");
    };
    return (a, o) => (x(), O("div", null, [
      !e.noLabel && (e.label || e.field) ? (x(), oe(M(tl), {
        key: 0,
        for: e.id ?? e.field,
        value: n(e.label ?? e.field),
        required: e.required
      }, null, 8, ["for", "value", "required"])) : G("", !0),
      e.noForm ? (x(), oe(M(ac), {
        key: 1,
        id: e.id ?? e.field,
        list: e.list,
        modelValue: e.modelValue,
        "option-value": e.optionValue,
        "option-text": e.optionText,
        "option-disabled": e.optionDisabled,
        placeholder: e.placeholder,
        class: "model-list !relative !mt-0 h-[42px] !max-w-full !rounded !border-gray-300 !shadow",
        "onUpdate:modelValue": o[0] || (o[0] = (i) => r("update:modelValue", i)),
        onSearchchange: o[1] || (o[1] = (i) => r("searchchange", i)),
        "is-disabled": e.disabled,
        filterPredicate: e.filterPredicate
      }, null, 8, ["id", "list", "modelValue", "option-value", "option-text", "option-disabled", "placeholder", "is-disabled", "filterPredicate"])) : (x(), O(ce, { key: 2 }, [
        ge(M(ac), {
          id: e.id ?? e.field,
          list: e.list,
          modelValue: e.form[e.field],
          "onUpdate:modelValue": [
            o[2] || (o[2] = (i) => e.form[e.field] = i),
            o[3] || (o[3] = (i) => r("update:modelValue", i))
          ],
          "option-value": e.optionValue,
          "option-text": e.optionText,
          "option-disabled": e.optionDisabled,
          placeholder: e.placeholder,
          class: "model-list !relative !mt-0 h-[42px] !max-w-full !rounded !border-gray-300 !px-3 !shadow",
          onSearchchange: o[4] || (o[4] = (i) => r("searchchange", i)),
          "is-disabled": e.disabled,
          filterPredicate: e.filterPredicate
        }, null, 8, ["id", "list", "modelValue", "option-value", "option-text", "option-disabled", "placeholder", "is-disabled", "filterPredicate"]),
        ge(M(Un), {
          message: e.form.errors[e.field]
        }, null, 8, ["message"])
      ], 64))
    ]));
  }
}, Bg = /* @__PURE__ */ zn(Mg, [["__scopeId", "data-v-80742e76"]]);
var at = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function nl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function jg(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var a = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var qg = function(t) {
  return zg(t) && !Ug(t);
};
function zg(e) {
  return !!e && typeof e == "object";
}
function Ug(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || Wg(e);
}
var Vg = typeof Symbol == "function" && Symbol.for, Hg = Vg ? Symbol.for("react.element") : 60103;
function Wg(e) {
  return e.$$typeof === Hg;
}
function Gg(e) {
  return Array.isArray(e) ? [] : {};
}
function Ln(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? Vr(Gg(e), e, t) : e;
}
function Kg(e, t, r) {
  return e.concat(t).map(function(n) {
    return Ln(n, r);
  });
}
function Yg(e, t) {
  if (!t.customMerge)
    return Vr;
  var r = t.customMerge(e);
  return typeof r == "function" ? r : Vr;
}
function Jg(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function oc(e) {
  return Object.keys(e).concat(Jg(e));
}
function sf(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function Xg(e, t) {
  return sf(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function Qg(e, t, r) {
  var n = {};
  return r.isMergeableObject(e) && oc(e).forEach(function(a) {
    n[a] = Ln(e[a], r);
  }), oc(t).forEach(function(a) {
    Xg(e, a) || (sf(e, a) && r.isMergeableObject(t[a]) ? n[a] = Yg(a, r)(e[a], t[a], r) : n[a] = Ln(t[a], r));
  }), n;
}
function Vr(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || Kg, r.isMergeableObject = r.isMergeableObject || qg, r.cloneUnlessOtherwiseSpecified = Ln;
  var n = Array.isArray(t), a = Array.isArray(e), o = n === a;
  return o ? n ? r.arrayMerge(e, t, r) : Qg(e, t, r) : Ln(t, r);
}
Vr.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(n, a) {
    return Vr(n, a, r);
  }, {});
};
var Zg = Vr, ey = Zg;
const ty = /* @__PURE__ */ nl(ey);
var Xr = TypeError;
const ry = {}, ny = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ry
}, Symbol.toStringTag, { value: "Module" })), ys = /* @__PURE__ */ jg(ny);
var al = typeof Map == "function" && Map.prototype, yi = Object.getOwnPropertyDescriptor && al ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, za = al && yi && typeof yi.get == "function" ? yi.get : null, ic = al && Map.prototype.forEach, ol = typeof Set == "function" && Set.prototype, vi = Object.getOwnPropertyDescriptor && ol ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Ua = ol && vi && typeof vi.get == "function" ? vi.get : null, sc = ol && Set.prototype.forEach, ay = typeof WeakMap == "function" && WeakMap.prototype, _n = ay ? WeakMap.prototype.has : null, oy = typeof WeakSet == "function" && WeakSet.prototype, kn = oy ? WeakSet.prototype.has : null, iy = typeof WeakRef == "function" && WeakRef.prototype, lc = iy ? WeakRef.prototype.deref : null, sy = Boolean.prototype.valueOf, ly = Object.prototype.toString, cy = Function.prototype.toString, uy = String.prototype.match, il = String.prototype.slice, zt = String.prototype.replace, fy = String.prototype.toUpperCase, cc = String.prototype.toLowerCase, lf = RegExp.prototype.test, uc = Array.prototype.concat, gt = Array.prototype.join, dy = Array.prototype.slice, fc = Math.floor, vs = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, bi = Object.getOwnPropertySymbols, bs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Hr = typeof Symbol == "function" && typeof Symbol.iterator == "object", De = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Hr || "symbol") ? Symbol.toStringTag : null, cf = Object.prototype.propertyIsEnumerable, dc = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function pc(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || lf.call(/e/, t))
    return t;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var n = e < 0 ? -fc(-e) : fc(e);
    if (n !== e) {
      var a = String(n), o = il.call(t, a.length + 1);
      return zt.call(a, r, "$&_") + "." + zt.call(zt.call(o, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return zt.call(t, r, "$&_");
}
var ws = ys, hc = ws.custom, mc = df(hc) ? hc : null, uf = {
  __proto__: null,
  double: '"',
  single: "'"
}, py = {
  __proto__: null,
  double: /(["\\])/g,
  single: /(['\\])/g
}, io = function e(t, r, n, a) {
  var o = r || {};
  if (Tt(o, "quoteStyle") && !Tt(uf, o.quoteStyle))
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (Tt(o, "maxStringLength") && (typeof o.maxStringLength == "number" ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0 : o.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var i = Tt(o, "customInspect") ? o.customInspect : !0;
  if (typeof i != "boolean" && i !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (Tt(o, "indent") && o.indent !== null && o.indent !== "	" && !(parseInt(o.indent, 10) === o.indent && o.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (Tt(o, "numericSeparator") && typeof o.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var l = o.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return hf(t, o);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var f = String(t);
    return l ? pc(t, f) : f;
  }
  if (typeof t == "bigint") {
    var c = String(t) + "n";
    return l ? pc(t, c) : c;
  }
  var u = typeof o.depth > "u" ? 5 : o.depth;
  if (typeof n > "u" && (n = 0), n >= u && u > 0 && typeof t == "object")
    return xs(t) ? "[Array]" : "[Object]";
  var p = $y(o, n);
  if (typeof a > "u")
    a = [];
  else if (pf(a, t) >= 0)
    return "[Circular]";
  function m(y, b, g) {
    if (b && (a = dy.call(a), a.push(b)), g) {
      var j = {
        depth: o.depth
      };
      return Tt(o, "quoteStyle") && (j.quoteStyle = o.quoteStyle), e(y, j, n + 1, a);
    }
    return e(y, o, n + 1, a);
  }
  if (typeof t == "function" && !gc(t)) {
    var E = Sy(t), S = ba(t, m);
    return "[Function" + (E ? ": " + E : " (anonymous)") + "]" + (S.length > 0 ? " { " + gt.call(S, ", ") + " }" : "");
  }
  if (df(t)) {
    var A = Hr ? zt.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : bs.call(t);
    return typeof t == "object" && !Hr ? bn(A) : A;
  }
  if (_y(t)) {
    for (var C = "<" + cc.call(String(t.nodeName)), _ = t.attributes || [], T = 0; T < _.length; T++)
      C += " " + _[T].name + "=" + ff(hy(_[T].value), "double", o);
    return C += ">", t.childNodes && t.childNodes.length && (C += "..."), C += "</" + cc.call(String(t.nodeName)) + ">", C;
  }
  if (xs(t)) {
    if (t.length === 0)
      return "[]";
    var w = ba(t, m);
    return p && !Ty(w) ? "[" + Ss(w, p) + "]" : "[ " + gt.call(w, ", ") + " ]";
  }
  if (gy(t)) {
    var I = ba(t, m);
    return !("cause" in Error.prototype) && "cause" in t && !cf.call(t, "cause") ? "{ [" + String(t) + "] " + gt.call(uc.call("[cause]: " + m(t.cause), I), ", ") + " }" : I.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + gt.call(I, ", ") + " }";
  }
  if (typeof t == "object" && i) {
    if (mc && typeof t[mc] == "function" && ws)
      return ws(t, { depth: u - n });
    if (i !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (Ay(t)) {
    var D = [];
    return ic && ic.call(t, function(y, b) {
      D.push(m(b, t, !0) + " => " + m(y, t));
    }), yc("Map", za.call(t), D, p);
  }
  if (Cy(t)) {
    var B = [];
    return sc && sc.call(t, function(y) {
      B.push(m(y, t));
    }), yc("Set", Ua.call(t), B, p);
  }
  if (Ey(t))
    return wi("WeakMap");
  if (Py(t))
    return wi("WeakSet");
  if (Oy(t))
    return wi("WeakRef");
  if (vy(t))
    return bn(m(Number(t)));
  if (wy(t))
    return bn(m(vs.call(t)));
  if (by(t))
    return bn(sy.call(t));
  if (yy(t))
    return bn(m(String(t)));
  if (typeof window < "u" && t === window)
    return "{ [object Window] }";
  if (typeof globalThis < "u" && t === globalThis || typeof at < "u" && t === at)
    return "{ [object globalThis] }";
  if (!my(t) && !gc(t)) {
    var z = ba(t, m), ee = dc ? dc(t) === Object.prototype : t instanceof Object || t.constructor === Object, q = t instanceof Object ? "" : "null prototype", F = !ee && De && Object(t) === t && De in t ? il.call(Jt(t), 8, -1) : q ? "Object" : "", U = ee || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", h = U + (F || q ? "[" + gt.call(uc.call([], F || [], q || []), ": ") + "] " : "");
    return z.length === 0 ? h + "{}" : p ? h + "{" + Ss(z, p) + "}" : h + "{ " + gt.call(z, ", ") + " }";
  }
  return String(t);
};
function ff(e, t, r) {
  var n = r.quoteStyle || t, a = uf[n];
  return a + e + a;
}
function hy(e) {
  return zt.call(String(e), /"/g, "&quot;");
}
function xs(e) {
  return Jt(e) === "[object Array]" && (!De || !(typeof e == "object" && De in e));
}
function my(e) {
  return Jt(e) === "[object Date]" && (!De || !(typeof e == "object" && De in e));
}
function gc(e) {
  return Jt(e) === "[object RegExp]" && (!De || !(typeof e == "object" && De in e));
}
function gy(e) {
  return Jt(e) === "[object Error]" && (!De || !(typeof e == "object" && De in e));
}
function yy(e) {
  return Jt(e) === "[object String]" && (!De || !(typeof e == "object" && De in e));
}
function vy(e) {
  return Jt(e) === "[object Number]" && (!De || !(typeof e == "object" && De in e));
}
function by(e) {
  return Jt(e) === "[object Boolean]" && (!De || !(typeof e == "object" && De in e));
}
function df(e) {
  if (Hr)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !bs)
    return !1;
  try {
    return bs.call(e), !0;
  } catch {
  }
  return !1;
}
function wy(e) {
  if (!e || typeof e != "object" || !vs)
    return !1;
  try {
    return vs.call(e), !0;
  } catch {
  }
  return !1;
}
var xy = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function Tt(e, t) {
  return xy.call(e, t);
}
function Jt(e) {
  return ly.call(e);
}
function Sy(e) {
  if (e.name)
    return e.name;
  var t = uy.call(cy.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function pf(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var r = 0, n = e.length; r < n; r++)
    if (e[r] === t)
      return r;
  return -1;
}
function Ay(e) {
  if (!za || !e || typeof e != "object")
    return !1;
  try {
    za.call(e);
    try {
      Ua.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function Ey(e) {
  if (!_n || !e || typeof e != "object")
    return !1;
  try {
    _n.call(e, _n);
    try {
      kn.call(e, kn);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function Oy(e) {
  if (!lc || !e || typeof e != "object")
    return !1;
  try {
    return lc.call(e), !0;
  } catch {
  }
  return !1;
}
function Cy(e) {
  if (!Ua || !e || typeof e != "object")
    return !1;
  try {
    Ua.call(e);
    try {
      za.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function Py(e) {
  if (!kn || !e || typeof e != "object")
    return !1;
  try {
    kn.call(e, kn);
    try {
      _n.call(e, _n);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function _y(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function hf(e, t) {
  if (e.length > t.maxStringLength) {
    var r = e.length - t.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return hf(il.call(e, 0, t.maxStringLength), t) + n;
  }
  var a = py[t.quoteStyle || "single"];
  a.lastIndex = 0;
  var o = zt.call(zt.call(e, a, "\\$1"), /[\x00-\x1f]/g, ky);
  return ff(o, "single", t);
}
function ky(e) {
  var t = e.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + fy.call(t.toString(16));
}
function bn(e) {
  return "Object(" + e + ")";
}
function wi(e) {
  return e + " { ? }";
}
function yc(e, t, r, n) {
  var a = n ? Ss(r, n) : gt.call(r, ", ");
  return e + " (" + t + ") {" + a + "}";
}
function Ty(e) {
  for (var t = 0; t < e.length; t++)
    if (pf(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function $y(e, t) {
  var r;
  if (e.indent === "	")
    r = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    r = gt.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: gt.call(Array(t + 1), r)
  };
}
function Ss(e, t) {
  if (e.length === 0)
    return "";
  var r = `
` + t.prev + t.base;
  return r + gt.call(e, "," + r) + `
` + t.prev;
}
function ba(e, t) {
  var r = xs(e), n = [];
  if (r) {
    n.length = e.length;
    for (var a = 0; a < e.length; a++)
      n[a] = Tt(e, a) ? t(e[a], e) : "";
  }
  var o = typeof bi == "function" ? bi(e) : [], i;
  if (Hr) {
    i = {};
    for (var l = 0; l < o.length; l++)
      i["$" + o[l]] = o[l];
  }
  for (var f in e)
    Tt(e, f) && (r && String(Number(f)) === f && f < e.length || Hr && i["$" + f] instanceof Symbol || (lf.call(/[^\w$]/, f) ? n.push(t(f, e) + ": " + t(e[f], e)) : n.push(f + ": " + t(e[f], e))));
  if (typeof bi == "function")
    for (var c = 0; c < o.length; c++)
      cf.call(e, o[c]) && n.push("[" + t(o[c]) + "]: " + t(e[o[c]], e));
  return n;
}
var Fy = io, Iy = Xr, so = function(e, t, r) {
  for (var n = e, a; (a = n.next) != null; n = a)
    if (a.key === t)
      return n.next = a.next, r || (a.next = /** @type {NonNullable<typeof list.next>} */
      e.next, e.next = a), a;
}, Dy = function(e, t) {
  if (e) {
    var r = so(e, t);
    return r && r.value;
  }
}, Ly = function(e, t, r) {
  var n = so(e, t);
  n ? n.value = r : e.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: t,
    next: e.next,
    value: r
  };
}, Ry = function(e, t) {
  return e ? !!so(e, t) : !1;
}, Ny = function(e, t) {
  if (e)
    return so(e, t, !0);
}, My = function() {
  var t, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new Iy("Side channel does not contain " + Fy(n));
    },
    delete: function(n) {
      var a = t && t.next, o = Ny(t, n);
      return o && a && a === o && (t = void 0), !!o;
    },
    get: function(n) {
      return Dy(t, n);
    },
    has: function(n) {
      return Ry(t, n);
    },
    set: function(n, a) {
      t || (t = {
        next: void 0
      }), Ly(
        /** @type {NonNullable<typeof $o>} */
        t,
        n,
        a
      );
    }
  };
  return r;
}, mf = Object, By = Error, jy = EvalError, qy = RangeError, zy = ReferenceError, Uy = SyntaxError, Vy = URIError, Hy = Math.abs, Wy = Math.floor, Gy = Math.max, Ky = Math.min, Yy = Math.pow, Jy = Math.round, Xy = Number.isNaN || function(t) {
  return t !== t;
}, Qy = Xy, Zy = function(t) {
  return Qy(t) || t === 0 ? t : t < 0 ? -1 : 1;
}, e0 = Object.getOwnPropertyDescriptor, Pa = e0;
if (Pa)
  try {
    Pa([], "length");
  } catch {
    Pa = null;
  }
var gf = Pa, _a = Object.defineProperty || !1;
if (_a)
  try {
    _a({}, "a", { value: 1 });
  } catch {
    _a = !1;
  }
var t0 = _a, xi, vc;
function r0() {
  return vc || (vc = 1, xi = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, r = Symbol("test"), n = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return !1;
    var a = 42;
    t[r] = a;
    for (var o in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var i = Object.getOwnPropertySymbols(t);
    if (i.length !== 1 || i[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var l = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, r)
      );
      if (l.value !== a || l.enumerable !== !0)
        return !1;
    }
    return !0;
  }), xi;
}
var Si, bc;
function n0() {
  if (bc)
    return Si;
  bc = 1;
  var e = typeof Symbol < "u" && Symbol, t = r0();
  return Si = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, Si;
}
var Ai, wc;
function yf() {
  return wc || (wc = 1, Ai = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Ai;
}
var Ei, xc;
function vf() {
  if (xc)
    return Ei;
  xc = 1;
  var e = mf;
  return Ei = e.getPrototypeOf || null, Ei;
}
var Oi, Sc;
function a0() {
  if (Sc)
    return Oi;
  Sc = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, n = "[object Function]", a = function(f, c) {
    for (var u = [], p = 0; p < f.length; p += 1)
      u[p] = f[p];
    for (var m = 0; m < c.length; m += 1)
      u[m + f.length] = c[m];
    return u;
  }, o = function(f, c) {
    for (var u = [], p = c || 0, m = 0; p < f.length; p += 1, m += 1)
      u[m] = f[p];
    return u;
  }, i = function(l, f) {
    for (var c = "", u = 0; u < l.length; u += 1)
      c += l[u], u + 1 < l.length && (c += f);
    return c;
  };
  return Oi = function(f) {
    var c = this;
    if (typeof c != "function" || t.apply(c) !== n)
      throw new TypeError(e + c);
    for (var u = o(arguments, 1), p, m = function() {
      if (this instanceof p) {
        var _ = c.apply(
          this,
          a(u, arguments)
        );
        return Object(_) === _ ? _ : this;
      }
      return c.apply(
        f,
        a(u, arguments)
      );
    }, E = r(0, c.length - u.length), S = [], A = 0; A < E; A++)
      S[A] = "$" + A;
    if (p = Function("binder", "return function (" + i(S, ",") + "){ return binder.apply(this,arguments); }")(m), c.prototype) {
      var C = function() {
      };
      C.prototype = c.prototype, p.prototype = new C(), C.prototype = null;
    }
    return p;
  }, Oi;
}
var Ci, Ac;
function lo() {
  if (Ac)
    return Ci;
  Ac = 1;
  var e = a0();
  return Ci = Function.prototype.bind || e, Ci;
}
var Pi, Ec;
function sl() {
  return Ec || (Ec = 1, Pi = Function.prototype.call), Pi;
}
var _i, Oc;
function bf() {
  return Oc || (Oc = 1, _i = Function.prototype.apply), _i;
}
var o0 = typeof Reflect < "u" && Reflect && Reflect.apply, i0 = lo(), s0 = bf(), l0 = sl(), c0 = o0, u0 = c0 || i0.call(l0, s0), f0 = lo(), d0 = Xr, p0 = sl(), h0 = u0, wf = function(t) {
  if (t.length < 1 || typeof t[0] != "function")
    throw new d0("a function is required");
  return h0(f0, p0, t);
}, ki, Cc;
function m0() {
  if (Cc)
    return ki;
  Cc = 1;
  var e = wf, t = gf, r;
  try {
    r = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (i) {
    if (!i || typeof i != "object" || !("code" in i) || i.code !== "ERR_PROTO_ACCESS")
      throw i;
  }
  var n = !!r && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), a = Object, o = a.getPrototypeOf;
  return ki = n && typeof n.get == "function" ? e([n.get]) : typeof o == "function" ? (
    /** @type {import('./get')} */
    function(l) {
      return o(l == null ? l : a(l));
    }
  ) : !1, ki;
}
var Ti, Pc;
function g0() {
  if (Pc)
    return Ti;
  Pc = 1;
  var e = yf(), t = vf(), r = m0();
  return Ti = e ? function(a) {
    return e(a);
  } : t ? function(a) {
    if (!a || typeof a != "object" && typeof a != "function")
      throw new TypeError("getProto: not an object");
    return t(a);
  } : r ? function(a) {
    return r(a);
  } : null, Ti;
}
var $i, _c;
function y0() {
  if (_c)
    return $i;
  _c = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = lo();
  return $i = r.call(e, t), $i;
}
var ae, v0 = mf, b0 = By, w0 = jy, x0 = qy, S0 = zy, Wr = Uy, jr = Xr, A0 = Vy, E0 = Hy, O0 = Wy, C0 = Gy, P0 = Ky, _0 = Yy, k0 = Jy, T0 = Zy, xf = Function, Fi = function(e) {
  try {
    return xf('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, Rn = gf, $0 = t0, Ii = function() {
  throw new jr();
}, F0 = Rn ? function() {
  try {
    return arguments.callee, Ii;
  } catch {
    try {
      return Rn(arguments, "callee").get;
    } catch {
      return Ii;
    }
  }
}() : Ii, Ir = n0()(), Oe = g0(), I0 = vf(), D0 = yf(), Sf = bf(), Vn = sl(), Lr = {}, L0 = typeof Uint8Array > "u" || !Oe ? ae : Oe(Uint8Array), hr = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? ae : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? ae : ArrayBuffer,
  "%ArrayIteratorPrototype%": Ir && Oe ? Oe([][Symbol.iterator]()) : ae,
  "%AsyncFromSyncIteratorPrototype%": ae,
  "%AsyncFunction%": Lr,
  "%AsyncGenerator%": Lr,
  "%AsyncGeneratorFunction%": Lr,
  "%AsyncIteratorPrototype%": Lr,
  "%Atomics%": typeof Atomics > "u" ? ae : Atomics,
  "%BigInt%": typeof BigInt > "u" ? ae : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? ae : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? ae : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? ae : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": b0,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": w0,
  "%Float32Array%": typeof Float32Array > "u" ? ae : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? ae : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? ae : FinalizationRegistry,
  "%Function%": xf,
  "%GeneratorFunction%": Lr,
  "%Int8Array%": typeof Int8Array > "u" ? ae : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? ae : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? ae : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Ir && Oe ? Oe(Oe([][Symbol.iterator]())) : ae,
  "%JSON%": typeof JSON == "object" ? JSON : ae,
  "%Map%": typeof Map > "u" ? ae : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Ir || !Oe ? ae : Oe((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": v0,
  "%Object.getOwnPropertyDescriptor%": Rn,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? ae : Promise,
  "%Proxy%": typeof Proxy > "u" ? ae : Proxy,
  "%RangeError%": x0,
  "%ReferenceError%": S0,
  "%Reflect%": typeof Reflect > "u" ? ae : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? ae : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Ir || !Oe ? ae : Oe((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? ae : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Ir && Oe ? Oe(""[Symbol.iterator]()) : ae,
  "%Symbol%": Ir ? Symbol : ae,
  "%SyntaxError%": Wr,
  "%ThrowTypeError%": F0,
  "%TypedArray%": L0,
  "%TypeError%": jr,
  "%Uint8Array%": typeof Uint8Array > "u" ? ae : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? ae : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? ae : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? ae : Uint32Array,
  "%URIError%": A0,
  "%WeakMap%": typeof WeakMap > "u" ? ae : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? ae : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? ae : WeakSet,
  "%Function.prototype.call%": Vn,
  "%Function.prototype.apply%": Sf,
  "%Object.defineProperty%": $0,
  "%Object.getPrototypeOf%": I0,
  "%Math.abs%": E0,
  "%Math.floor%": O0,
  "%Math.max%": C0,
  "%Math.min%": P0,
  "%Math.pow%": _0,
  "%Math.round%": k0,
  "%Math.sign%": T0,
  "%Reflect.getPrototypeOf%": D0
};
if (Oe)
  try {
    null.error;
  } catch (e) {
    var R0 = Oe(Oe(e));
    hr["%Error.prototype%"] = R0;
  }
var N0 = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = Fi("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = Fi("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = Fi("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var n = e("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var a = e("%AsyncGenerator%");
    a && Oe && (r = Oe(a.prototype));
  }
  return hr[t] = r, r;
}, kc = {
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
}, Hn = lo(), Va = y0(), M0 = Hn.call(Vn, Array.prototype.concat), B0 = Hn.call(Sf, Array.prototype.splice), Tc = Hn.call(Vn, String.prototype.replace), Ha = Hn.call(Vn, String.prototype.slice), j0 = Hn.call(Vn, RegExp.prototype.exec), q0 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, z0 = /\\(\\)?/g, U0 = function(t) {
  var r = Ha(t, 0, 1), n = Ha(t, -1);
  if (r === "%" && n !== "%")
    throw new Wr("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new Wr("invalid intrinsic syntax, expected opening `%`");
  var a = [];
  return Tc(t, q0, function(o, i, l, f) {
    a[a.length] = l ? Tc(f, z0, "$1") : i || o;
  }), a;
}, V0 = function(t, r) {
  var n = t, a;
  if (Va(kc, n) && (a = kc[n], n = "%" + a[0] + "%"), Va(hr, n)) {
    var o = hr[n];
    if (o === Lr && (o = N0(n)), typeof o > "u" && !r)
      throw new jr("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: a,
      name: n,
      value: o
    };
  }
  throw new Wr("intrinsic " + t + " does not exist!");
}, ll = function(t, r) {
  if (typeof t != "string" || t.length === 0)
    throw new jr("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new jr('"allowMissing" argument must be a boolean');
  if (j0(/^%?[^%]*%?$/, t) === null)
    throw new Wr("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = U0(t), a = n.length > 0 ? n[0] : "", o = V0("%" + a + "%", r), i = o.name, l = o.value, f = !1, c = o.alias;
  c && (a = c[0], B0(n, M0([0, 1], c)));
  for (var u = 1, p = !0; u < n.length; u += 1) {
    var m = n[u], E = Ha(m, 0, 1), S = Ha(m, -1);
    if ((E === '"' || E === "'" || E === "`" || S === '"' || S === "'" || S === "`") && E !== S)
      throw new Wr("property names with quotes must have matching quotes");
    if ((m === "constructor" || !p) && (f = !0), a += "." + m, i = "%" + a + "%", Va(hr, i))
      l = hr[i];
    else if (l != null) {
      if (!(m in l)) {
        if (!r)
          throw new jr("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (Rn && u + 1 >= n.length) {
        var A = Rn(l, m);
        p = !!A, p && "get" in A && !("originalValue" in A.get) ? l = A.get : l = l[m];
      } else
        p = Va(l, m), l = l[m];
      p && !f && (hr[i] = l);
    }
  }
  return l;
}, Af = ll, Ef = wf, H0 = Ef([Af("%String.prototype.indexOf%")]), Of = function(t, r) {
  var n = (
    /** @type {Parameters<typeof callBindBasic>[0][0]} */
    Af(t, !!r)
  );
  return typeof n == "function" && H0(t, ".prototype.") > -1 ? Ef([n]) : n;
}, W0 = ll, Wn = Of, G0 = io, K0 = Xr, $c = W0("%Map%", !0), Y0 = Wn("Map.prototype.get", !0), J0 = Wn("Map.prototype.set", !0), X0 = Wn("Map.prototype.has", !0), Q0 = Wn("Map.prototype.delete", !0), Z0 = Wn("Map.prototype.size", !0), Cf = !!$c && /** @type {Exclude<import('.'), false>} */
function() {
  var t, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new K0("Side channel does not contain " + G0(n));
    },
    delete: function(n) {
      if (t) {
        var a = Q0(t, n);
        return Z0(t) === 0 && (t = void 0), a;
      }
      return !1;
    },
    get: function(n) {
      if (t)
        return Y0(t, n);
    },
    has: function(n) {
      return t ? X0(t, n) : !1;
    },
    set: function(n, a) {
      t || (t = new $c()), J0(t, n, a);
    }
  };
  return r;
}, ev = ll, co = Of, tv = io, wa = Cf, rv = Xr, Dr = ev("%WeakMap%", !0), nv = co("WeakMap.prototype.get", !0), av = co("WeakMap.prototype.set", !0), ov = co("WeakMap.prototype.has", !0), iv = co("WeakMap.prototype.delete", !0), sv = Dr ? (
  /** @type {Exclude<import('.'), false>} */
  function() {
    var t, r, n = {
      assert: function(a) {
        if (!n.has(a))
          throw new rv("Side channel does not contain " + tv(a));
      },
      delete: function(a) {
        if (Dr && a && (typeof a == "object" || typeof a == "function")) {
          if (t)
            return iv(t, a);
        } else if (wa && r)
          return r.delete(a);
        return !1;
      },
      get: function(a) {
        return Dr && a && (typeof a == "object" || typeof a == "function") && t ? nv(t, a) : r && r.get(a);
      },
      has: function(a) {
        return Dr && a && (typeof a == "object" || typeof a == "function") && t ? ov(t, a) : !!r && r.has(a);
      },
      set: function(a, o) {
        Dr && a && (typeof a == "object" || typeof a == "function") ? (t || (t = new Dr()), av(t, a, o)) : wa && (r || (r = wa()), r.set(a, o));
      }
    };
    return n;
  }
) : wa, lv = Xr, cv = io, uv = My, fv = Cf, dv = sv, pv = dv || fv || uv, hv = function() {
  var t, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new lv("Side channel does not contain " + cv(n));
    },
    delete: function(n) {
      return !!t && t.delete(n);
    },
    get: function(n) {
      return t && t.get(n);
    },
    has: function(n) {
      return !!t && t.has(n);
    },
    set: function(n, a) {
      t || (t = pv()), t.set(n, a);
    }
  };
  return r;
}, mv = String.prototype.replace, gv = /%20/g, Di = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, cl = {
  default: Di.RFC3986,
  formatters: {
    RFC1738: function(e) {
      return mv.call(e, gv, "+");
    },
    RFC3986: function(e) {
      return String(e);
    }
  },
  RFC1738: Di.RFC1738,
  RFC3986: Di.RFC3986
}, yv = cl, Li = Object.prototype.hasOwnProperty, cr = Array.isArray, pt = function() {
  for (var e = [], t = 0; t < 256; ++t)
    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
  return e;
}(), vv = function(t) {
  for (; t.length > 1; ) {
    var r = t.pop(), n = r.obj[r.prop];
    if (cr(n)) {
      for (var a = [], o = 0; o < n.length; ++o)
        typeof n[o] < "u" && a.push(n[o]);
      r.obj[r.prop] = a;
    }
  }
}, Pf = function(t, r) {
  for (var n = r && r.plainObjects ? { __proto__: null } : {}, a = 0; a < t.length; ++a)
    typeof t[a] < "u" && (n[a] = t[a]);
  return n;
}, bv = function e(t, r, n) {
  if (!r)
    return t;
  if (typeof r != "object" && typeof r != "function") {
    if (cr(t))
      t.push(r);
    else if (t && typeof t == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !Li.call(Object.prototype, r)) && (t[r] = !0);
    else
      return [t, r];
    return t;
  }
  if (!t || typeof t != "object")
    return [t].concat(r);
  var a = t;
  return cr(t) && !cr(r) && (a = Pf(t, n)), cr(t) && cr(r) ? (r.forEach(function(o, i) {
    if (Li.call(t, i)) {
      var l = t[i];
      l && typeof l == "object" && o && typeof o == "object" ? t[i] = e(l, o, n) : t.push(o);
    } else
      t[i] = o;
  }), t) : Object.keys(r).reduce(function(o, i) {
    var l = r[i];
    return Li.call(o, i) ? o[i] = e(o[i], l, n) : o[i] = l, o;
  }, a);
}, wv = function(t, r) {
  return Object.keys(r).reduce(function(n, a) {
    return n[a] = r[a], n;
  }, t);
}, xv = function(e, t, r) {
  var n = e.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, Ri = 1024, Sv = function(t, r, n, a, o) {
  if (t.length === 0)
    return t;
  var i = t;
  if (typeof t == "symbol" ? i = Symbol.prototype.toString.call(t) : typeof t != "string" && (i = String(t)), n === "iso-8859-1")
    return escape(i).replace(/%u[0-9a-f]{4}/gi, function(E) {
      return "%26%23" + parseInt(E.slice(2), 16) + "%3B";
    });
  for (var l = "", f = 0; f < i.length; f += Ri) {
    for (var c = i.length >= Ri ? i.slice(f, f + Ri) : i, u = [], p = 0; p < c.length; ++p) {
      var m = c.charCodeAt(p);
      if (m === 45 || m === 46 || m === 95 || m === 126 || m >= 48 && m <= 57 || m >= 65 && m <= 90 || m >= 97 && m <= 122 || o === yv.RFC1738 && (m === 40 || m === 41)) {
        u[u.length] = c.charAt(p);
        continue;
      }
      if (m < 128) {
        u[u.length] = pt[m];
        continue;
      }
      if (m < 2048) {
        u[u.length] = pt[192 | m >> 6] + pt[128 | m & 63];
        continue;
      }
      if (m < 55296 || m >= 57344) {
        u[u.length] = pt[224 | m >> 12] + pt[128 | m >> 6 & 63] + pt[128 | m & 63];
        continue;
      }
      p += 1, m = 65536 + ((m & 1023) << 10 | c.charCodeAt(p) & 1023), u[u.length] = pt[240 | m >> 18] + pt[128 | m >> 12 & 63] + pt[128 | m >> 6 & 63] + pt[128 | m & 63];
    }
    l += u.join("");
  }
  return l;
}, Av = function(t) {
  for (var r = [{ obj: { o: t }, prop: "o" }], n = [], a = 0; a < r.length; ++a)
    for (var o = r[a], i = o.obj[o.prop], l = Object.keys(i), f = 0; f < l.length; ++f) {
      var c = l[f], u = i[c];
      typeof u == "object" && u !== null && n.indexOf(u) === -1 && (r.push({ obj: i, prop: c }), n.push(u));
    }
  return vv(r), t;
}, Ev = function(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}, Ov = function(t) {
  return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
}, Cv = function(t, r) {
  return [].concat(t, r);
}, Pv = function(t, r) {
  if (cr(t)) {
    for (var n = [], a = 0; a < t.length; a += 1)
      n.push(r(t[a]));
    return n;
  }
  return r(t);
}, _f = {
  arrayToObject: Pf,
  assign: wv,
  combine: Cv,
  compact: Av,
  decode: xv,
  encode: Sv,
  isBuffer: Ov,
  isRegExp: Ev,
  maybeMap: Pv,
  merge: bv
}, kf = hv, ka = _f, Tn = cl, _v = Object.prototype.hasOwnProperty, Tf = {
  brackets: function(t) {
    return t + "[]";
  },
  comma: "comma",
  indices: function(t, r) {
    return t + "[" + r + "]";
  },
  repeat: function(t) {
    return t;
  }
}, mt = Array.isArray, kv = Array.prototype.push, $f = function(e, t) {
  kv.apply(e, mt(t) ? t : [t]);
}, Tv = Date.prototype.toISOString, Fc = Tn.default, Ee = {
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
  encoder: ka.encode,
  encodeValuesOnly: !1,
  filter: void 0,
  format: Fc,
  formatter: Tn.formatters[Fc],
  // deprecated
  indices: !1,
  serializeDate: function(t) {
    return Tv.call(t);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, $v = function(t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint";
}, Ni = {}, Fv = function e(t, r, n, a, o, i, l, f, c, u, p, m, E, S, A, C, _, T) {
  for (var w = t, I = T, D = 0, B = !1; (I = I.get(Ni)) !== void 0 && !B; ) {
    var z = I.get(t);
    if (D += 1, typeof z < "u") {
      if (z === D)
        throw new RangeError("Cyclic object value");
      B = !0;
    }
    typeof I.get(Ni) > "u" && (D = 0);
  }
  if (typeof u == "function" ? w = u(r, w) : w instanceof Date ? w = E(w) : n === "comma" && mt(w) && (w = ka.maybeMap(w, function(Y) {
    return Y instanceof Date ? E(Y) : Y;
  })), w === null) {
    if (i)
      return c && !C ? c(r, Ee.encoder, _, "key", S) : r;
    w = "";
  }
  if ($v(w) || ka.isBuffer(w)) {
    if (c) {
      var ee = C ? r : c(r, Ee.encoder, _, "key", S);
      return [A(ee) + "=" + A(c(w, Ee.encoder, _, "value", S))];
    }
    return [A(r) + "=" + A(String(w))];
  }
  var q = [];
  if (typeof w > "u")
    return q;
  var F;
  if (n === "comma" && mt(w))
    C && c && (w = ka.maybeMap(w, c)), F = [{ value: w.length > 0 ? w.join(",") || null : void 0 }];
  else if (mt(u))
    F = u;
  else {
    var U = Object.keys(w);
    F = p ? U.sort(p) : U;
  }
  var h = f ? String(r).replace(/\./g, "%2E") : String(r), y = a && mt(w) && w.length === 1 ? h + "[]" : h;
  if (o && mt(w) && w.length === 0)
    return y + "[]";
  for (var b = 0; b < F.length; ++b) {
    var g = F[b], j = typeof g == "object" && g && typeof g.value < "u" ? g.value : w[g];
    if (!(l && j === null)) {
      var R = m && f ? String(g).replace(/\./g, "%2E") : String(g), L = mt(w) ? typeof n == "function" ? n(y, R) : y : y + (m ? "." + R : "[" + R + "]");
      T.set(t, D);
      var V = kf();
      V.set(Ni, T), $f(q, e(
        j,
        L,
        n,
        a,
        o,
        i,
        l,
        f,
        n === "comma" && C && mt(w) ? null : c,
        u,
        p,
        m,
        E,
        S,
        A,
        C,
        _,
        V
      ));
    }
  }
  return q;
}, Iv = function(t) {
  if (!t)
    return Ee;
  if (typeof t.allowEmptyArrays < "u" && typeof t.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof t.encodeDotInKeys < "u" && typeof t.encodeDotInKeys != "boolean")
    throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = t.charset || Ee.charset;
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = Tn.default;
  if (typeof t.format < "u") {
    if (!_v.call(Tn.formatters, t.format))
      throw new TypeError("Unknown format option provided.");
    n = t.format;
  }
  var a = Tn.formatters[n], o = Ee.filter;
  (typeof t.filter == "function" || mt(t.filter)) && (o = t.filter);
  var i;
  if (t.arrayFormat in Tf ? i = t.arrayFormat : "indices" in t ? i = t.indices ? "indices" : "repeat" : i = Ee.arrayFormat, "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var l = typeof t.allowDots > "u" ? t.encodeDotInKeys === !0 ? !0 : Ee.allowDots : !!t.allowDots;
  return {
    addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : Ee.addQueryPrefix,
    allowDots: l,
    allowEmptyArrays: typeof t.allowEmptyArrays == "boolean" ? !!t.allowEmptyArrays : Ee.allowEmptyArrays,
    arrayFormat: i,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : Ee.charsetSentinel,
    commaRoundTrip: !!t.commaRoundTrip,
    delimiter: typeof t.delimiter > "u" ? Ee.delimiter : t.delimiter,
    encode: typeof t.encode == "boolean" ? t.encode : Ee.encode,
    encodeDotInKeys: typeof t.encodeDotInKeys == "boolean" ? t.encodeDotInKeys : Ee.encodeDotInKeys,
    encoder: typeof t.encoder == "function" ? t.encoder : Ee.encoder,
    encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : Ee.encodeValuesOnly,
    filter: o,
    format: n,
    formatter: a,
    serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : Ee.serializeDate,
    skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : Ee.skipNulls,
    sort: typeof t.sort == "function" ? t.sort : null,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : Ee.strictNullHandling
  };
}, Dv = function(e, t) {
  var r = e, n = Iv(t), a, o;
  typeof n.filter == "function" ? (o = n.filter, r = o("", r)) : mt(n.filter) && (o = n.filter, a = o);
  var i = [];
  if (typeof r != "object" || r === null)
    return "";
  var l = Tf[n.arrayFormat], f = l === "comma" && n.commaRoundTrip;
  a || (a = Object.keys(r)), n.sort && a.sort(n.sort);
  for (var c = kf(), u = 0; u < a.length; ++u) {
    var p = a[u], m = r[p];
    n.skipNulls && m === null || $f(i, Fv(
      m,
      p,
      l,
      f,
      n.allowEmptyArrays,
      n.strictNullHandling,
      n.skipNulls,
      n.encodeDotInKeys,
      n.encode ? n.encoder : null,
      n.filter,
      n.sort,
      n.allowDots,
      n.serializeDate,
      n.format,
      n.formatter,
      n.encodeValuesOnly,
      n.charset,
      c
    ));
  }
  var E = i.join(n.delimiter), S = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? S += "utf8=%26%2310003%3B&" : S += "utf8=%E2%9C%93&"), E.length > 0 ? S + E : "";
}, Gr = _f, As = Object.prototype.hasOwnProperty, Lv = Array.isArray, ve = {
  allowDots: !1,
  allowEmptyArrays: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decodeDotInKeys: !1,
  decoder: Gr.decode,
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
}, Rv = function(e) {
  return e.replace(/&#(\d+);/g, function(t, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, Ff = function(e, t) {
  return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
}, Nv = "utf8=%26%2310003%3B", Mv = "utf8=%E2%9C%93", Bv = function(t, r) {
  var n = { __proto__: null }, a = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t;
  a = a.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  var o = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, i = a.split(r.delimiter, o), l = -1, f, c = r.charset;
  if (r.charsetSentinel)
    for (f = 0; f < i.length; ++f)
      i[f].indexOf("utf8=") === 0 && (i[f] === Mv ? c = "utf-8" : i[f] === Nv && (c = "iso-8859-1"), l = f, f = i.length);
  for (f = 0; f < i.length; ++f)
    if (f !== l) {
      var u = i[f], p = u.indexOf("]="), m = p === -1 ? u.indexOf("=") : p + 1, E, S;
      m === -1 ? (E = r.decoder(u, ve.decoder, c, "key"), S = r.strictNullHandling ? null : "") : (E = r.decoder(u.slice(0, m), ve.decoder, c, "key"), S = Gr.maybeMap(
        Ff(u.slice(m + 1), r),
        function(C) {
          return r.decoder(C, ve.decoder, c, "value");
        }
      )), S && r.interpretNumericEntities && c === "iso-8859-1" && (S = Rv(String(S))), u.indexOf("[]=") > -1 && (S = Lv(S) ? [S] : S);
      var A = As.call(n, E);
      A && r.duplicates === "combine" ? n[E] = Gr.combine(n[E], S) : (!A || r.duplicates === "last") && (n[E] = S);
    }
  return n;
}, jv = function(e, t, r, n) {
  for (var a = n ? t : Ff(t, r), o = e.length - 1; o >= 0; --o) {
    var i, l = e[o];
    if (l === "[]" && r.parseArrays)
      i = r.allowEmptyArrays && (a === "" || r.strictNullHandling && a === null) ? [] : [].concat(a);
    else {
      i = r.plainObjects ? { __proto__: null } : {};
      var f = l.charAt(0) === "[" && l.charAt(l.length - 1) === "]" ? l.slice(1, -1) : l, c = r.decodeDotInKeys ? f.replace(/%2E/g, ".") : f, u = parseInt(c, 10);
      !r.parseArrays && c === "" ? i = { 0: a } : !isNaN(u) && l !== c && String(u) === c && u >= 0 && r.parseArrays && u <= r.arrayLimit ? (i = [], i[u] = a) : c !== "__proto__" && (i[c] = a);
    }
    a = i;
  }
  return a;
}, qv = function(t, r, n, a) {
  if (t) {
    var o = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, i = /(\[[^[\]]*])/, l = /(\[[^[\]]*])/g, f = n.depth > 0 && i.exec(o), c = f ? o.slice(0, f.index) : o, u = [];
    if (c) {
      if (!n.plainObjects && As.call(Object.prototype, c) && !n.allowPrototypes)
        return;
      u.push(c);
    }
    for (var p = 0; n.depth > 0 && (f = l.exec(o)) !== null && p < n.depth; ) {
      if (p += 1, !n.plainObjects && As.call(Object.prototype, f[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      u.push(f[1]);
    }
    if (f) {
      if (n.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + n.depth + " and strictDepth is true");
      u.push("[" + o.slice(f.index) + "]");
    }
    return jv(u, r, n, a);
  }
}, zv = function(t) {
  if (!t)
    return ve;
  if (typeof t.allowEmptyArrays < "u" && typeof t.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof t.decodeDotInKeys < "u" && typeof t.decodeDotInKeys != "boolean")
    throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
  if (t.decoder !== null && typeof t.decoder < "u" && typeof t.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = typeof t.charset > "u" ? ve.charset : t.charset, n = typeof t.duplicates > "u" ? ve.duplicates : t.duplicates;
  if (n !== "combine" && n !== "first" && n !== "last")
    throw new TypeError("The duplicates option must be either combine, first, or last");
  var a = typeof t.allowDots > "u" ? t.decodeDotInKeys === !0 ? !0 : ve.allowDots : !!t.allowDots;
  return {
    allowDots: a,
    allowEmptyArrays: typeof t.allowEmptyArrays == "boolean" ? !!t.allowEmptyArrays : ve.allowEmptyArrays,
    allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : ve.allowPrototypes,
    allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : ve.allowSparse,
    arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : ve.arrayLimit,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : ve.charsetSentinel,
    comma: typeof t.comma == "boolean" ? t.comma : ve.comma,
    decodeDotInKeys: typeof t.decodeDotInKeys == "boolean" ? t.decodeDotInKeys : ve.decodeDotInKeys,
    decoder: typeof t.decoder == "function" ? t.decoder : ve.decoder,
    delimiter: typeof t.delimiter == "string" || Gr.isRegExp(t.delimiter) ? t.delimiter : ve.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : ve.depth,
    duplicates: n,
    ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : ve.interpretNumericEntities,
    parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : ve.parameterLimit,
    parseArrays: t.parseArrays !== !1,
    plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : ve.plainObjects,
    strictDepth: typeof t.strictDepth == "boolean" ? !!t.strictDepth : ve.strictDepth,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : ve.strictNullHandling
  };
}, Uv = function(e, t) {
  var r = zv(t);
  if (e === "" || e === null || typeof e > "u")
    return r.plainObjects ? { __proto__: null } : {};
  for (var n = typeof e == "string" ? Bv(e, r) : e, a = r.plainObjects ? { __proto__: null } : {}, o = Object.keys(n), i = 0; i < o.length; ++i) {
    var l = o[i], f = qv(l, n[l], r, typeof e == "string");
    a = Gr.merge(a, f, r);
  }
  return r.allowSparse === !0 ? a : Gr.compact(a);
}, Vv = Dv, Hv = Uv, Wv = cl, Ic = {
  formats: Wv,
  parse: Hv,
  stringify: Vv
};
function If(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Gv } = Object.prototype, { getPrototypeOf: ul } = Object, uo = ((e) => (t) => {
  const r = Gv.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), st = (e) => (e = e.toLowerCase(), (t) => uo(t) === e), fo = (e) => (t) => typeof t === e, { isArray: Qr } = Array, Nn = fo("undefined");
function Kv(e) {
  return e !== null && !Nn(e) && e.constructor !== null && !Nn(e.constructor) && We(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Df = st("ArrayBuffer");
function Yv(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Df(e.buffer), t;
}
const Jv = fo("string"), We = fo("function"), Lf = fo("number"), po = (e) => e !== null && typeof e == "object", Xv = (e) => e === !0 || e === !1, Ta = (e) => {
  if (uo(e) !== "object")
    return !1;
  const t = ul(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Qv = st("Date"), Zv = st("File"), eb = st("Blob"), tb = st("FileList"), rb = (e) => po(e) && We(e.pipe), nb = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || We(e.append) && ((t = uo(e)) === "formdata" || // detect form-data instance
  t === "object" && We(e.toString) && e.toString() === "[object FormData]"));
}, ab = st("URLSearchParams"), [ob, ib, sb, lb] = ["ReadableStream", "Request", "Response", "Headers"].map(st), cb = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Gn(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, a;
  if (typeof e != "object" && (e = [e]), Qr(e))
    for (n = 0, a = e.length; n < a; n++)
      t.call(null, e[n], n, e);
  else {
    const o = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let l;
    for (n = 0; n < i; n++)
      l = o[n], t.call(null, e[l], l, e);
  }
}
function Rf(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, a;
  for (; n-- > 0; )
    if (a = r[n], t === a.toLowerCase())
      return a;
  return null;
}
const fr = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Nf = (e) => !Nn(e) && e !== fr;
function Es() {
  const { caseless: e } = Nf(this) && this || {}, t = {}, r = (n, a) => {
    const o = e && Rf(t, a) || a;
    Ta(t[o]) && Ta(n) ? t[o] = Es(t[o], n) : Ta(n) ? t[o] = Es({}, n) : Qr(n) ? t[o] = n.slice() : t[o] = n;
  };
  for (let n = 0, a = arguments.length; n < a; n++)
    arguments[n] && Gn(arguments[n], r);
  return t;
}
const ub = (e, t, r, { allOwnKeys: n } = {}) => (Gn(t, (a, o) => {
  r && We(a) ? e[o] = If(a, r) : e[o] = a;
}, { allOwnKeys: n }), e), fb = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), db = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, pb = (e, t, r, n) => {
  let a, o, i;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (a = Object.getOwnPropertyNames(e), o = a.length; o-- > 0; )
      i = a[o], (!n || n(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = r !== !1 && ul(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, hb = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, mb = (e) => {
  if (!e)
    return null;
  if (Qr(e))
    return e;
  let t = e.length;
  if (!Lf(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, gb = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ul(Uint8Array)), yb = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = n.next()) && !a.done; ) {
    const o = a.value;
    t.call(e, o[0], o[1]);
  }
}, vb = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, bb = st("HTMLFormElement"), wb = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, a) {
    return n.toUpperCase() + a;
  }
), Dc = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), xb = st("RegExp"), Mf = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Gn(r, (a, o) => {
    let i;
    (i = t(a, o, e)) !== !1 && (n[o] = i || a);
  }), Object.defineProperties(e, n);
}, Sb = (e) => {
  Mf(e, (t, r) => {
    if (We(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (We(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Ab = (e, t) => {
  const r = {}, n = (a) => {
    a.forEach((o) => {
      r[o] = !0;
    });
  };
  return Qr(e) ? n(e) : n(String(e).split(t)), r;
}, Eb = () => {
}, Ob = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, Mi = "abcdefghijklmnopqrstuvwxyz", Lc = "0123456789", Bf = {
  DIGIT: Lc,
  ALPHA: Mi,
  ALPHA_DIGIT: Mi + Mi.toUpperCase() + Lc
}, Cb = (e = 16, t = Bf.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function Pb(e) {
  return !!(e && We(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const _b = (e) => {
  const t = new Array(10), r = (n, a) => {
    if (po(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[a] = n;
        const o = Qr(n) ? [] : {};
        return Gn(n, (i, l) => {
          const f = r(i, a + 1);
          !Nn(f) && (o[l] = f);
        }), t[a] = void 0, o;
      }
    }
    return n;
  };
  return r(e, 0);
}, kb = st("AsyncFunction"), Tb = (e) => e && (po(e) || We(e)) && We(e.then) && We(e.catch), jf = ((e, t) => e ? setImmediate : t ? ((r, n) => (fr.addEventListener("message", ({ source: a, data: o }) => {
  a === fr && o === r && n.length && n.shift()();
}, !1), (a) => {
  n.push(a), fr.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  We(fr.postMessage)
), $b = typeof queueMicrotask < "u" ? queueMicrotask.bind(fr) : typeof process < "u" && process.nextTick || jf, P = {
  isArray: Qr,
  isArrayBuffer: Df,
  isBuffer: Kv,
  isFormData: nb,
  isArrayBufferView: Yv,
  isString: Jv,
  isNumber: Lf,
  isBoolean: Xv,
  isObject: po,
  isPlainObject: Ta,
  isReadableStream: ob,
  isRequest: ib,
  isResponse: sb,
  isHeaders: lb,
  isUndefined: Nn,
  isDate: Qv,
  isFile: Zv,
  isBlob: eb,
  isRegExp: xb,
  isFunction: We,
  isStream: rb,
  isURLSearchParams: ab,
  isTypedArray: gb,
  isFileList: tb,
  forEach: Gn,
  merge: Es,
  extend: ub,
  trim: cb,
  stripBOM: fb,
  inherits: db,
  toFlatObject: pb,
  kindOf: uo,
  kindOfTest: st,
  endsWith: hb,
  toArray: mb,
  forEachEntry: yb,
  matchAll: vb,
  isHTMLForm: bb,
  hasOwnProperty: Dc,
  hasOwnProp: Dc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Mf,
  freezeMethods: Sb,
  toObjectSet: Ab,
  toCamelCase: wb,
  noop: Eb,
  toFiniteNumber: Ob,
  findKey: Rf,
  global: fr,
  isContextDefined: Nf,
  ALPHABET: Bf,
  generateString: Cb,
  isSpecCompliantForm: Pb,
  toJSONObject: _b,
  isAsyncFn: kb,
  isThenable: Tb,
  setImmediate: jf,
  asap: $b
};
function re(e, t, r, n, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), a && (this.response = a, this.status = a.status ? a.status : null);
}
P.inherits(re, Error, {
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
      config: P.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const qf = re.prototype, zf = {};
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
  zf[e] = { value: e };
});
Object.defineProperties(re, zf);
Object.defineProperty(qf, "isAxiosError", { value: !0 });
re.from = (e, t, r, n, a, o) => {
  const i = Object.create(qf);
  return P.toFlatObject(e, i, function(f) {
    return f !== Error.prototype;
  }, (l) => l !== "isAxiosError"), re.call(i, e.message, t, r, n, a), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Fb = null;
function Os(e) {
  return P.isPlainObject(e) || P.isArray(e);
}
function Uf(e) {
  return P.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Rc(e, t, r) {
  return e ? e.concat(t).map(function(a, o) {
    return a = Uf(a), !r && o ? "[" + a + "]" : a;
  }).join(r ? "." : "") : t;
}
function Ib(e) {
  return P.isArray(e) && !e.some(Os);
}
const Db = P.toFlatObject(P, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ho(e, t, r) {
  if (!P.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = P.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(A, C) {
    return !P.isUndefined(C[A]);
  });
  const n = r.metaTokens, a = r.visitor || u, o = r.dots, i = r.indexes, f = (r.Blob || typeof Blob < "u" && Blob) && P.isSpecCompliantForm(t);
  if (!P.isFunction(a))
    throw new TypeError("visitor must be a function");
  function c(S) {
    if (S === null)
      return "";
    if (P.isDate(S))
      return S.toISOString();
    if (!f && P.isBlob(S))
      throw new re("Blob is not supported. Use a Buffer instead.");
    return P.isArrayBuffer(S) || P.isTypedArray(S) ? f && typeof Blob == "function" ? new Blob([S]) : Buffer.from(S) : S;
  }
  function u(S, A, C) {
    let _ = S;
    if (S && !C && typeof S == "object") {
      if (P.endsWith(A, "{}"))
        A = n ? A : A.slice(0, -2), S = JSON.stringify(S);
      else if (P.isArray(S) && Ib(S) || (P.isFileList(S) || P.endsWith(A, "[]")) && (_ = P.toArray(S)))
        return A = Uf(A), _.forEach(function(w, I) {
          !(P.isUndefined(w) || w === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Rc([A], I, o) : i === null ? A : A + "[]",
            c(w)
          );
        }), !1;
    }
    return Os(S) ? !0 : (t.append(Rc(C, A, o), c(S)), !1);
  }
  const p = [], m = Object.assign(Db, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: Os
  });
  function E(S, A) {
    if (!P.isUndefined(S)) {
      if (p.indexOf(S) !== -1)
        throw Error("Circular reference detected in " + A.join("."));
      p.push(S), P.forEach(S, function(_, T) {
        (!(P.isUndefined(_) || _ === null) && a.call(
          t,
          _,
          P.isString(T) ? T.trim() : T,
          A,
          m
        )) === !0 && E(_, A ? A.concat(T) : [T]);
      }), p.pop();
    }
  }
  if (!P.isObject(e))
    throw new TypeError("data must be an object");
  return E(e), t;
}
function Nc(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function fl(e, t) {
  this._pairs = [], e && ho(e, this, t);
}
const Vf = fl.prototype;
Vf.append = function(t, r) {
  this._pairs.push([t, r]);
};
Vf.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Nc);
  } : Nc;
  return this._pairs.map(function(a) {
    return r(a[0]) + "=" + r(a[1]);
  }, "").join("&");
};
function Lb(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Hf(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || Lb;
  P.isFunction(r) && (r = {
    serialize: r
  });
  const a = r && r.serialize;
  let o;
  if (a ? o = a(t, r) : o = P.isURLSearchParams(t) ? t.toString() : new fl(t, r).toString(n), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Rb {
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
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
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
    P.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Mc = Rb, Wf = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Nb = typeof URLSearchParams < "u" ? URLSearchParams : fl, Mb = typeof FormData < "u" ? FormData : null, Bb = typeof Blob < "u" ? Blob : null, jb = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Nb,
    FormData: Mb,
    Blob: Bb
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, dl = typeof window < "u" && typeof document < "u", Cs = typeof navigator == "object" && navigator || void 0, qb = dl && (!Cs || ["ReactNative", "NativeScript", "NS"].indexOf(Cs.product) < 0), zb = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Ub = dl && window.location.href || "http://localhost", Vb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: dl,
  hasStandardBrowserEnv: qb,
  hasStandardBrowserWebWorkerEnv: zb,
  navigator: Cs,
  origin: Ub
}, Symbol.toStringTag, { value: "Module" })), Fe = {
  ...Vb,
  ...jb
};
function Hb(e, t) {
  return ho(e, new Fe.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, a, o) {
      return Fe.isNode && P.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Wb(e) {
  return P.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Gb(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const a = r.length;
  let o;
  for (n = 0; n < a; n++)
    o = r[n], t[o] = e[o];
  return t;
}
function Gf(e) {
  function t(r, n, a, o) {
    let i = r[o++];
    if (i === "__proto__")
      return !0;
    const l = Number.isFinite(+i), f = o >= r.length;
    return i = !i && P.isArray(a) ? a.length : i, f ? (P.hasOwnProp(a, i) ? a[i] = [a[i], n] : a[i] = n, !l) : ((!a[i] || !P.isObject(a[i])) && (a[i] = []), t(r, n, a[i], o) && P.isArray(a[i]) && (a[i] = Gb(a[i])), !l);
  }
  if (P.isFormData(e) && P.isFunction(e.entries)) {
    const r = {};
    return P.forEachEntry(e, (n, a) => {
      t(Wb(n), a, r, 0);
    }), r;
  }
  return null;
}
function Kb(e, t, r) {
  if (P.isString(e))
    try {
      return (t || JSON.parse)(e), P.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const pl = {
  transitional: Wf,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", a = n.indexOf("application/json") > -1, o = P.isObject(t);
    if (o && P.isHTMLForm(t) && (t = new FormData(t)), P.isFormData(t))
      return a ? JSON.stringify(Gf(t)) : t;
    if (P.isArrayBuffer(t) || P.isBuffer(t) || P.isStream(t) || P.isFile(t) || P.isBlob(t) || P.isReadableStream(t))
      return t;
    if (P.isArrayBufferView(t))
      return t.buffer;
    if (P.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (o) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Hb(t, this.formSerializer).toString();
      if ((l = P.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return ho(
          l ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return o || a ? (r.setContentType("application/json", !1), Kb(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || pl.transitional, n = r && r.forcedJSONParsing, a = this.responseType === "json";
    if (P.isResponse(t) || P.isReadableStream(t))
      return t;
    if (t && P.isString(t) && (n && !this.responseType || a)) {
      const i = !(r && r.silentJSONParsing) && a;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (i)
          throw l.name === "SyntaxError" ? re.from(l, re.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
    FormData: Fe.classes.FormData,
    Blob: Fe.classes.Blob
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
P.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  pl.headers[e] = {};
});
const hl = pl, Yb = P.toObjectSet([
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
]), Jb = (e) => {
  const t = {};
  let r, n, a;
  return e && e.split(`
`).forEach(function(i) {
    a = i.indexOf(":"), r = i.substring(0, a).trim().toLowerCase(), n = i.substring(a + 1).trim(), !(!r || t[r] && Yb[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Bc = Symbol("internals");
function wn(e) {
  return e && String(e).trim().toLowerCase();
}
function $a(e) {
  return e === !1 || e == null ? e : P.isArray(e) ? e.map($a) : String(e);
}
function Xb(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Qb = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Bi(e, t, r, n, a) {
  if (P.isFunction(n))
    return n.call(this, t, r);
  if (a && (t = r), !!P.isString(t)) {
    if (P.isString(n))
      return t.indexOf(n) !== -1;
    if (P.isRegExp(n))
      return n.test(t);
  }
}
function Zb(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function e1(e, t) {
  const r = P.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(a, o, i) {
        return this[n].call(this, t, a, o, i);
      },
      configurable: !0
    });
  });
}
class mo {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const a = this;
    function o(l, f, c) {
      const u = wn(f);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const p = P.findKey(a, u);
      (!p || a[p] === void 0 || c === !0 || c === void 0 && a[p] !== !1) && (a[p || f] = $a(l));
    }
    const i = (l, f) => P.forEach(l, (c, u) => o(c, u, f));
    if (P.isPlainObject(t) || t instanceof this.constructor)
      i(t, r);
    else if (P.isString(t) && (t = t.trim()) && !Qb(t))
      i(Jb(t), r);
    else if (P.isHeaders(t))
      for (const [l, f] of t.entries())
        o(f, l, n);
    else
      t != null && o(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = wn(t), t) {
      const n = P.findKey(this, t);
      if (n) {
        const a = this[n];
        if (!r)
          return a;
        if (r === !0)
          return Xb(a);
        if (P.isFunction(r))
          return r.call(this, a, n);
        if (P.isRegExp(r))
          return r.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = wn(t), t) {
      const n = P.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Bi(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let a = !1;
    function o(i) {
      if (i = wn(i), i) {
        const l = P.findKey(n, i);
        l && (!r || Bi(n, n[l], l, r)) && (delete n[l], a = !0);
      }
    }
    return P.isArray(t) ? t.forEach(o) : o(t), a;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, a = !1;
    for (; n--; ) {
      const o = r[n];
      (!t || Bi(this, this[o], o, t, !0)) && (delete this[o], a = !0);
    }
    return a;
  }
  normalize(t) {
    const r = this, n = {};
    return P.forEach(this, (a, o) => {
      const i = P.findKey(n, o);
      if (i) {
        r[i] = $a(a), delete r[o];
        return;
      }
      const l = t ? Zb(o) : String(o).trim();
      l !== o && delete r[o], r[l] = $a(a), n[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return P.forEach(this, (n, a) => {
      n != null && n !== !1 && (r[a] = t && P.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((a) => n.set(a)), n;
  }
  static accessor(t) {
    const n = (this[Bc] = this[Bc] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function o(i) {
      const l = wn(i);
      n[l] || (e1(a, i), n[l] = !0);
    }
    return P.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
mo.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
P.reduceDescriptors(mo.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
P.freezeMethods(mo);
const ot = mo;
function ji(e, t) {
  const r = this || hl, n = t || r, a = ot.from(n.headers);
  let o = n.data;
  return P.forEach(e, function(l) {
    o = l.call(r, o, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), o;
}
function Kf(e) {
  return !!(e && e.__CANCEL__);
}
function Zr(e, t, r) {
  re.call(this, e ?? "canceled", re.ERR_CANCELED, t, r), this.name = "CanceledError";
}
P.inherits(Zr, re, {
  __CANCEL__: !0
});
function Yf(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new re(
    "Request failed with status code " + r.status,
    [re.ERR_BAD_REQUEST, re.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function t1(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function r1(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let a = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const c = Date.now(), u = n[o];
    i || (i = c), r[a] = f, n[a] = c;
    let p = o, m = 0;
    for (; p !== a; )
      m += r[p++], p = p % e;
    if (a = (a + 1) % e, a === o && (o = (o + 1) % e), c - i < t)
      return;
    const E = u && c - u;
    return E ? Math.round(m * 1e3 / E) : void 0;
  };
}
function n1(e, t) {
  let r = 0, n = 1e3 / t, a, o;
  const i = (c, u = Date.now()) => {
    r = u, a = null, o && (clearTimeout(o), o = null), e.apply(null, c);
  };
  return [(...c) => {
    const u = Date.now(), p = u - r;
    p >= n ? i(c, u) : (a = c, o || (o = setTimeout(() => {
      o = null, i(a);
    }, n - p)));
  }, () => a && i(a)];
}
const Wa = (e, t, r = 3) => {
  let n = 0;
  const a = r1(50, 250);
  return n1((o) => {
    const i = o.loaded, l = o.lengthComputable ? o.total : void 0, f = i - n, c = a(f), u = i <= l;
    n = i;
    const p = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: f,
      rate: c || void 0,
      estimated: c && l && u ? (l - i) / c : void 0,
      event: o,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(p);
  }, r);
}, jc = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, qc = (e) => (...t) => P.asap(() => e(...t)), a1 = Fe.hasStandardBrowserEnv ? ((e, t) => (r) => (r = new URL(r, Fe.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(Fe.origin),
  Fe.navigator && /(msie|trident)/i.test(Fe.navigator.userAgent)
) : () => !0, o1 = Fe.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, a, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      P.isNumber(r) && i.push("expires=" + new Date(r).toGMTString()), P.isString(n) && i.push("path=" + n), P.isString(a) && i.push("domain=" + a), o === !0 && i.push("secure"), document.cookie = i.join("; ");
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
function i1(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function s1(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Jf(e, t) {
  return e && !i1(t) ? s1(e, t) : t;
}
const zc = (e) => e instanceof ot ? { ...e } : e;
function yr(e, t) {
  t = t || {};
  const r = {};
  function n(c, u, p, m) {
    return P.isPlainObject(c) && P.isPlainObject(u) ? P.merge.call({ caseless: m }, c, u) : P.isPlainObject(u) ? P.merge({}, u) : P.isArray(u) ? u.slice() : u;
  }
  function a(c, u, p, m) {
    if (P.isUndefined(u)) {
      if (!P.isUndefined(c))
        return n(void 0, c, p, m);
    } else
      return n(c, u, p, m);
  }
  function o(c, u) {
    if (!P.isUndefined(u))
      return n(void 0, u);
  }
  function i(c, u) {
    if (P.isUndefined(u)) {
      if (!P.isUndefined(c))
        return n(void 0, c);
    } else
      return n(void 0, u);
  }
  function l(c, u, p) {
    if (p in t)
      return n(c, u);
    if (p in e)
      return n(void 0, c);
  }
  const f = {
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
    headers: (c, u, p) => a(zc(c), zc(u), p, !0)
  };
  return P.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const p = f[u] || a, m = p(e[u], t[u], u);
    P.isUndefined(m) && p !== l || (r[u] = m);
  }), r;
}
const Xf = (e) => {
  const t = yr({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: a, xsrfCookieName: o, headers: i, auth: l } = t;
  t.headers = i = ot.from(i), t.url = Hf(Jf(t.baseURL, t.url), e.params, e.paramsSerializer), l && i.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let f;
  if (P.isFormData(r)) {
    if (Fe.hasStandardBrowserEnv || Fe.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((f = i.getContentType()) !== !1) {
      const [c, ...u] = f ? f.split(";").map((p) => p.trim()).filter(Boolean) : [];
      i.setContentType([c || "multipart/form-data", ...u].join("; "));
    }
  }
  if (Fe.hasStandardBrowserEnv && (n && P.isFunction(n) && (n = n(t)), n || n !== !1 && a1(t.url))) {
    const c = a && o && o1.read(o);
    c && i.set(a, c);
  }
  return t;
}, l1 = typeof XMLHttpRequest < "u", c1 = l1 && function(e) {
  return new Promise(function(r, n) {
    const a = Xf(e);
    let o = a.data;
    const i = ot.from(a.headers).normalize();
    let { responseType: l, onUploadProgress: f, onDownloadProgress: c } = a, u, p, m, E, S;
    function A() {
      E && E(), S && S(), a.cancelToken && a.cancelToken.unsubscribe(u), a.signal && a.signal.removeEventListener("abort", u);
    }
    let C = new XMLHttpRequest();
    C.open(a.method.toUpperCase(), a.url, !0), C.timeout = a.timeout;
    function _() {
      if (!C)
        return;
      const w = ot.from(
        "getAllResponseHeaders" in C && C.getAllResponseHeaders()
      ), D = {
        data: !l || l === "text" || l === "json" ? C.responseText : C.response,
        status: C.status,
        statusText: C.statusText,
        headers: w,
        config: e,
        request: C
      };
      Yf(function(z) {
        r(z), A();
      }, function(z) {
        n(z), A();
      }, D), C = null;
    }
    "onloadend" in C ? C.onloadend = _ : C.onreadystatechange = function() {
      !C || C.readyState !== 4 || C.status === 0 && !(C.responseURL && C.responseURL.indexOf("file:") === 0) || setTimeout(_);
    }, C.onabort = function() {
      C && (n(new re("Request aborted", re.ECONNABORTED, e, C)), C = null);
    }, C.onerror = function() {
      n(new re("Network Error", re.ERR_NETWORK, e, C)), C = null;
    }, C.ontimeout = function() {
      let I = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const D = a.transitional || Wf;
      a.timeoutErrorMessage && (I = a.timeoutErrorMessage), n(new re(
        I,
        D.clarifyTimeoutError ? re.ETIMEDOUT : re.ECONNABORTED,
        e,
        C
      )), C = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in C && P.forEach(i.toJSON(), function(I, D) {
      C.setRequestHeader(D, I);
    }), P.isUndefined(a.withCredentials) || (C.withCredentials = !!a.withCredentials), l && l !== "json" && (C.responseType = a.responseType), c && ([m, S] = Wa(c, !0), C.addEventListener("progress", m)), f && C.upload && ([p, E] = Wa(f), C.upload.addEventListener("progress", p), C.upload.addEventListener("loadend", E)), (a.cancelToken || a.signal) && (u = (w) => {
      C && (n(!w || w.type ? new Zr(null, e, C) : w), C.abort(), C = null);
    }, a.cancelToken && a.cancelToken.subscribe(u), a.signal && (a.signal.aborted ? u() : a.signal.addEventListener("abort", u)));
    const T = t1(a.url);
    if (T && Fe.protocols.indexOf(T) === -1) {
      n(new re("Unsupported protocol " + T + ":", re.ERR_BAD_REQUEST, e));
      return;
    }
    C.send(o || null);
  });
}, u1 = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), a;
    const o = function(c) {
      if (!a) {
        a = !0, l();
        const u = c instanceof Error ? c : this.reason;
        n.abort(u instanceof re ? u : new Zr(u instanceof Error ? u.message : u));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new re(`timeout ${t} of ms exceeded`, re.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(o) : c.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((c) => c.addEventListener("abort", o));
    const { signal: f } = n;
    return f.unsubscribe = () => P.asap(l), f;
  }
}, f1 = u1, d1 = function* (e, t) {
  let r = e.byteLength;
  if (!t || r < t) {
    yield e;
    return;
  }
  let n = 0, a;
  for (; n < r; )
    a = n + t, yield e.slice(n, a), n = a;
}, p1 = async function* (e, t) {
  for await (const r of h1(e))
    yield* d1(r, t);
}, h1 = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await t.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, Uc = (e, t, r, n) => {
  const a = p1(e, t);
  let o = 0, i, l = (f) => {
    i || (i = !0, n && n(f));
  };
  return new ReadableStream({
    async pull(f) {
      try {
        const { done: c, value: u } = await a.next();
        if (c) {
          l(), f.close();
          return;
        }
        let p = u.byteLength;
        if (r) {
          let m = o += p;
          r(m);
        }
        f.enqueue(new Uint8Array(u));
      } catch (c) {
        throw l(c), c;
      }
    },
    cancel(f) {
      return l(f), a.return();
    }
  }, {
    highWaterMark: 2
  });
}, go = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Qf = go && typeof ReadableStream == "function", m1 = go && (typeof TextEncoder == "function" ? ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Zf = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, g1 = Qf && Zf(() => {
  let e = !1;
  const t = new Request(Fe.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Vc = 64 * 1024, Ps = Qf && Zf(() => P.isReadableStream(new Response("").body)), Ga = {
  stream: Ps && ((e) => e.body)
};
go && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Ga[t] && (Ga[t] = P.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new re(`Response type '${t}' is not supported`, re.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const y1 = async (e) => {
  if (e == null)
    return 0;
  if (P.isBlob(e))
    return e.size;
  if (P.isSpecCompliantForm(e))
    return (await new Request(Fe.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (P.isArrayBufferView(e) || P.isArrayBuffer(e))
    return e.byteLength;
  if (P.isURLSearchParams(e) && (e = e + ""), P.isString(e))
    return (await m1(e)).byteLength;
}, v1 = async (e, t) => {
  const r = P.toFiniteNumber(e.getContentLength());
  return r ?? y1(t);
}, b1 = go && (async (e) => {
  let {
    url: t,
    method: r,
    data: n,
    signal: a,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: l,
    onUploadProgress: f,
    responseType: c,
    headers: u,
    withCredentials: p = "same-origin",
    fetchOptions: m
  } = Xf(e);
  c = c ? (c + "").toLowerCase() : "text";
  let E = f1([a, o && o.toAbortSignal()], i), S;
  const A = E && E.unsubscribe && (() => {
    E.unsubscribe();
  });
  let C;
  try {
    if (f && g1 && r !== "get" && r !== "head" && (C = await v1(u, n)) !== 0) {
      let D = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), B;
      if (P.isFormData(n) && (B = D.headers.get("content-type")) && u.setContentType(B), D.body) {
        const [z, ee] = jc(
          C,
          Wa(qc(f))
        );
        n = Uc(D.body, Vc, z, ee);
      }
    }
    P.isString(p) || (p = p ? "include" : "omit");
    const _ = "credentials" in Request.prototype;
    S = new Request(t, {
      ...m,
      signal: E,
      method: r.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: _ ? p : void 0
    });
    let T = await fetch(S);
    const w = Ps && (c === "stream" || c === "response");
    if (Ps && (l || w && A)) {
      const D = {};
      ["status", "statusText", "headers"].forEach((q) => {
        D[q] = T[q];
      });
      const B = P.toFiniteNumber(T.headers.get("content-length")), [z, ee] = l && jc(
        B,
        Wa(qc(l), !0)
      ) || [];
      T = new Response(
        Uc(T.body, Vc, z, () => {
          ee && ee(), A && A();
        }),
        D
      );
    }
    c = c || "text";
    let I = await Ga[P.findKey(Ga, c) || "text"](T, e);
    return !w && A && A(), await new Promise((D, B) => {
      Yf(D, B, {
        data: I,
        headers: ot.from(T.headers),
        status: T.status,
        statusText: T.statusText,
        config: e,
        request: S
      });
    });
  } catch (_) {
    throw A && A(), _ && _.name === "TypeError" && /fetch/i.test(_.message) ? Object.assign(
      new re("Network Error", re.ERR_NETWORK, e, S),
      {
        cause: _.cause || _
      }
    ) : re.from(_, _ && _.code, e, S);
  }
}), _s = {
  http: Fb,
  xhr: c1,
  fetch: b1
};
P.forEach(_s, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Hc = (e) => `- ${e}`, w1 = (e) => P.isFunction(e) || e === null || e === !1, ed = {
  getAdapter: (e) => {
    e = P.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const a = {};
    for (let o = 0; o < t; o++) {
      r = e[o];
      let i;
      if (n = r, !w1(r) && (n = _s[(i = String(r)).toLowerCase()], n === void 0))
        throw new re(`Unknown adapter '${i}'`);
      if (n)
        break;
      a[i || "#" + o] = n;
    }
    if (!n) {
      const o = Object.entries(a).map(
        ([l, f]) => `adapter ${l} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(Hc).join(`
`) : " " + Hc(o[0]) : "as no adapter specified";
      throw new re(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: _s
};
function qi(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Zr(null, e);
}
function Wc(e) {
  return qi(e), e.headers = ot.from(e.headers), e.data = ji.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ed.getAdapter(e.adapter || hl.adapter)(e).then(function(n) {
    return qi(e), n.data = ji.call(
      e,
      e.transformResponse,
      n
    ), n.headers = ot.from(n.headers), n;
  }, function(n) {
    return Kf(n) || (qi(e), n && n.response && (n.response.data = ji.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = ot.from(n.response.headers))), Promise.reject(n);
  });
}
const td = "1.7.9", yo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  yo[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Gc = {};
yo.transitional = function(t, r, n) {
  function a(o, i) {
    return "[Axios v" + td + "] Transitional option '" + o + "'" + i + (n ? ". " + n : "");
  }
  return (o, i, l) => {
    if (t === !1)
      throw new re(
        a(i, " has been removed" + (r ? " in " + r : "")),
        re.ERR_DEPRECATED
      );
    return r && !Gc[i] && (Gc[i] = !0, console.warn(
      a(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(o, i, l) : !0;
  };
};
yo.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function x1(e, t, r) {
  if (typeof e != "object")
    throw new re("options must be an object", re.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let a = n.length;
  for (; a-- > 0; ) {
    const o = n[a], i = t[o];
    if (i) {
      const l = e[o], f = l === void 0 || i(l, o, e);
      if (f !== !0)
        throw new re("option " + o + " must be " + f, re.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new re("Unknown option " + o, re.ERR_BAD_OPTION);
  }
}
const Fa = {
  assertOptions: x1,
  validators: yo
}, ht = Fa.validators;
class Ka {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Mc(),
      response: new Mc()
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
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let a = {};
        Error.captureStackTrace ? Error.captureStackTrace(a) : a = new Error();
        const o = a.stack ? a.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? o && !String(n.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + o) : n.stack = o;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = yr(this.defaults, r);
    const { transitional: n, paramsSerializer: a, headers: o } = r;
    n !== void 0 && Fa.assertOptions(n, {
      silentJSONParsing: ht.transitional(ht.boolean),
      forcedJSONParsing: ht.transitional(ht.boolean),
      clarifyTimeoutError: ht.transitional(ht.boolean)
    }, !1), a != null && (P.isFunction(a) ? r.paramsSerializer = {
      serialize: a
    } : Fa.assertOptions(a, {
      encode: ht.function,
      serialize: ht.function
    }, !0)), Fa.assertOptions(r, {
      baseUrl: ht.spelling("baseURL"),
      withXsrfToken: ht.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i = o && P.merge(
      o.common,
      o[r.method]
    );
    o && P.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (S) => {
        delete o[S];
      }
    ), r.headers = ot.concat(i, o);
    const l = [];
    let f = !0;
    this.interceptors.request.forEach(function(A) {
      typeof A.runWhen == "function" && A.runWhen(r) === !1 || (f = f && A.synchronous, l.unshift(A.fulfilled, A.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(A) {
      c.push(A.fulfilled, A.rejected);
    });
    let u, p = 0, m;
    if (!f) {
      const S = [Wc.bind(this), void 0];
      for (S.unshift.apply(S, l), S.push.apply(S, c), m = S.length, u = Promise.resolve(r); p < m; )
        u = u.then(S[p++], S[p++]);
      return u;
    }
    m = l.length;
    let E = r;
    for (p = 0; p < m; ) {
      const S = l[p++], A = l[p++];
      try {
        E = S(E);
      } catch (C) {
        A.call(this, C);
        break;
      }
    }
    try {
      u = Wc.call(this, E);
    } catch (S) {
      return Promise.reject(S);
    }
    for (p = 0, m = c.length; p < m; )
      u = u.then(c[p++], c[p++]);
    return u;
  }
  getUri(t) {
    t = yr(this.defaults, t);
    const r = Jf(t.baseURL, t.url);
    return Hf(r, t.params, t.paramsSerializer);
  }
}
P.forEach(["delete", "get", "head", "options"], function(t) {
  Ka.prototype[t] = function(r, n) {
    return this.request(yr(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
P.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(o, i, l) {
      return this.request(yr(l || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  Ka.prototype[t] = r(), Ka.prototype[t + "Form"] = r(!0);
});
const Ia = Ka;
class ml {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(o) {
      r = o;
    });
    const n = this;
    this.promise.then((a) => {
      if (!n._listeners)
        return;
      let o = n._listeners.length;
      for (; o-- > 0; )
        n._listeners[o](a);
      n._listeners = null;
    }), this.promise.then = (a) => {
      let o;
      const i = new Promise((l) => {
        n.subscribe(l), o = l;
      }).then(a);
      return i.cancel = function() {
        n.unsubscribe(o);
      }, i;
    }, t(function(o, i, l) {
      n.reason || (n.reason = new Zr(o, i, l), r(n.reason));
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
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (n) => {
      t.abort(n);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new ml(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
}
const S1 = ml;
function A1(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function E1(e) {
  return P.isObject(e) && e.isAxiosError === !0;
}
const ks = {
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
Object.entries(ks).forEach(([e, t]) => {
  ks[t] = e;
});
const O1 = ks;
function rd(e) {
  const t = new Ia(e), r = If(Ia.prototype.request, t);
  return P.extend(r, Ia.prototype, t, { allOwnKeys: !0 }), P.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(a) {
    return rd(yr(e, a));
  }, r;
}
const Se = rd(hl);
Se.Axios = Ia;
Se.CanceledError = Zr;
Se.CancelToken = S1;
Se.isCancel = Kf;
Se.VERSION = td;
Se.toFormData = ho;
Se.AxiosError = re;
Se.Cancel = Se.CanceledError;
Se.all = function(t) {
  return Promise.all(t);
};
Se.spread = A1;
Se.isAxiosError = E1;
Se.mergeConfig = yr;
Se.AxiosHeaders = ot;
Se.formToJSON = (e) => Gf(P.isHTMLForm(e) ? new FormData(e) : e);
Se.getAdapter = ed.getAdapter;
Se.HttpStatusCode = O1;
Se.default = Se;
const Kc = Se;
function nd(e, t) {
  let r;
  return function(...n) {
    clearTimeout(r), r = setTimeout(() => e.apply(this, n), t);
  };
}
function lt(e, t) {
  return document.dispatchEvent(new CustomEvent(`inertia:${e}`, t));
}
var Yc = (e) => lt("before", { cancelable: !0, detail: { visit: e } }), C1 = (e) => lt("error", { detail: { errors: e } }), P1 = (e) => lt("exception", { cancelable: !0, detail: { exception: e } }), _1 = (e) => lt("finish", { detail: { visit: e } }), k1 = (e) => lt("invalid", { cancelable: !0, detail: { response: e } }), $n = (e) => lt("navigate", { detail: { page: e } }), T1 = (e) => lt("progress", { detail: { progress: e } }), $1 = (e) => lt("start", { detail: { visit: e } }), F1 = (e) => lt("success", { detail: { page: e } }), I1 = (e, t) => lt("prefetched", { detail: { fetchedAt: Date.now(), response: e.data, visit: t } }), D1 = (e) => lt("prefetching", { detail: { visit: e } }), Re = class {
  static set(e, t) {
    typeof window < "u" && window.sessionStorage.setItem(e, JSON.stringify(t));
  }
  static get(e) {
    if (typeof window < "u")
      return JSON.parse(window.sessionStorage.getItem(e) || "null");
  }
  static merge(e, t) {
    let r = this.get(e);
    r === null ? this.set(e, t) : this.set(e, { ...r, ...t });
  }
  static remove(e) {
    typeof window < "u" && window.sessionStorage.removeItem(e);
  }
  static removeNested(e, t) {
    let r = this.get(e);
    r !== null && (delete r[t], this.set(e, r));
  }
  static exists(e) {
    try {
      return this.get(e) !== null;
    } catch {
      return !1;
    }
  }
  static clear() {
    typeof window < "u" && window.sessionStorage.clear();
  }
};
Re.locationVisitKey = "inertiaLocationVisit";
var L1 = async (e) => {
  if (typeof window > "u")
    throw new Error("Unable to encrypt history");
  let t = ad(), r = await od(), n = await q1(r);
  if (!n)
    throw new Error("Unable to encrypt history");
  return await N1(t, n, e);
}, Kr = { key: "historyKey", iv: "historyIv" }, R1 = async (e) => {
  let t = ad(), r = await od();
  if (!r)
    throw new Error("Unable to decrypt history");
  return await M1(t, r, e);
}, N1 = async (e, t, r) => {
  if (typeof window > "u")
    throw new Error("Unable to encrypt history");
  if (typeof window.crypto.subtle > "u")
    return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(r);
  let n = new TextEncoder(), a = JSON.stringify(r), o = new Uint8Array(a.length * 3), i = n.encodeInto(a, o);
  return window.crypto.subtle.encrypt({ name: "AES-GCM", iv: e }, t, o.subarray(0, i.written));
}, M1 = async (e, t, r) => {
  if (typeof window.crypto.subtle > "u")
    return console.warn("Decryption is not supported in this environment. SSL is required."), Promise.resolve(r);
  let n = await window.crypto.subtle.decrypt({ name: "AES-GCM", iv: e }, t, r);
  return JSON.parse(new TextDecoder().decode(n));
}, ad = () => {
  let e = Re.get(Kr.iv);
  if (e)
    return new Uint8Array(e);
  let t = window.crypto.getRandomValues(new Uint8Array(12));
  return Re.set(Kr.iv, Array.from(t)), t;
}, B1 = async () => typeof window.crypto.subtle > "u" ? (console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(null)) : window.crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, !0, ["encrypt", "decrypt"]), j1 = async (e) => {
  if (typeof window.crypto.subtle > "u")
    return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve();
  let t = await window.crypto.subtle.exportKey("raw", e);
  Re.set(Kr.key, Array.from(new Uint8Array(t)));
}, q1 = async (e) => {
  if (e)
    return e;
  let t = await B1();
  return t ? (await j1(t), t) : null;
}, od = async () => {
  let e = Re.get(Kr.key);
  return e ? await window.crypto.subtle.importKey("raw", new Uint8Array(e), { name: "AES-GCM", length: 256 }, !0, ["encrypt", "decrypt"]) : null;
}, Ut = class {
  static save(e) {
    pe.replaceState({ ...e, scrollRegions: Array.from(this.regions()).map((t) => ({ top: t.scrollTop, left: t.scrollLeft })) });
  }
  static regions() {
    return document.querySelectorAll("[scroll-region]");
  }
  static reset(e) {
    typeof window < "u" && window.scrollTo(0, 0), this.regions().forEach((t) => {
      typeof t.scrollTo == "function" ? t.scrollTo(0, 0) : (t.scrollTop = 0, t.scrollLeft = 0);
    }), this.save(e), window.location.hash && setTimeout(() => {
      var t;
      return (t = document.getElementById(window.location.hash.slice(1))) == null ? void 0 : t.scrollIntoView();
    });
  }
  static restore(e) {
    e.scrollRegions && this.regions().forEach((t, r) => {
      let n = e.scrollRegions[r];
      n && (typeof t.scrollTo == "function" ? t.scrollTo(n.left, n.top) : (t.scrollTop = n.top, t.scrollLeft = n.left));
    });
  }
  static onScroll(e) {
    let t = e.target;
    typeof t.hasAttribute == "function" && t.hasAttribute("scroll-region") && this.save(X.get());
  }
};
function Ts(e) {
  return e instanceof File || e instanceof Blob || e instanceof FileList && e.length > 0 || e instanceof FormData && Array.from(e.values()).some((t) => Ts(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => Ts(t));
}
var Jc = (e) => e instanceof FormData;
function id(e, t = new FormData(), r = null) {
  e = e || {};
  for (let n in e)
    Object.prototype.hasOwnProperty.call(e, n) && ld(t, sd(r, n), e[n]);
  return t;
}
function sd(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function ld(e, t, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => ld(e, sd(t, n.toString()), r[n]));
  if (r instanceof Date)
    return e.append(t, r.toISOString());
  if (r instanceof File)
    return e.append(t, r, r.name);
  if (r instanceof Blob)
    return e.append(t, r);
  if (typeof r == "boolean")
    return e.append(t, r ? "1" : "0");
  if (typeof r == "string")
    return e.append(t, r);
  if (typeof r == "number")
    return e.append(t, `${r}`);
  if (r == null)
    return e.append(t, "");
  id(r, e, t);
}
function Vt(e) {
  return new URL(e.toString(), typeof window > "u" ? void 0 : window.location.toString());
}
var z1 = (e, t, r, n, a) => {
  let o = typeof e == "string" ? Vt(e) : e;
  if ((Ts(t) || n) && !Jc(t) && (t = id(t)), Jc(t))
    return [o, t];
  let [i, l] = gl(r, o, t, a);
  return [Vt(i), l];
};
function gl(e, t, r, n = "brackets") {
  let a = /^https?:\/\//.test(t.toString()), o = a || t.toString().startsWith("/"), i = !o && !t.toString().startsWith("#") && !t.toString().startsWith("?"), l = t.toString().includes("?") || e === "get" && Object.keys(r).length, f = t.toString().includes("#"), c = new URL(t.toString(), "http://localhost");
  return e === "get" && Object.keys(r).length && (c.search = Ic.stringify(ty(Ic.parse(c.search, { ignoreQueryPrefix: !0 }), r), { encodeValuesOnly: !0, arrayFormat: n }), r = {}), [[a ? `${c.protocol}//${c.host}` : "", o ? c.pathname : "", i ? c.pathname.substring(1) : "", l ? c.search : "", f ? c.hash : ""].join(""), r];
}
function Ya(e) {
  return e = new URL(e.href), e.hash = "", e;
}
var Xc = (e, t) => {
  e.hash && !t.hash && Ya(e).href === t.href && (t.hash = e.hash);
}, $s = (e, t) => Ya(e).href === Ya(t).href, U1 = class {
  constructor() {
    this.componentId = {}, this.listeners = [], this.isFirstPageLoad = !0, this.cleared = !1;
  }
  init({ initialPage: e, swapComponent: t, resolveComponent: r }) {
    return this.page = e, this.swapComponent = t, this.resolveComponent = r, this;
  }
  set(e, { replace: t = !1, preserveScroll: r = !1, preserveState: n = !1 } = {}) {
    this.componentId = {};
    let a = this.componentId;
    return e.clearHistory && pe.clear(), this.resolve(e.component).then((o) => {
      if (a !== this.componentId)
        return;
      e.scrollRegions ?? (e.scrollRegions = []), e.rememberedState ?? (e.rememberedState = {});
      let i = typeof window < "u" ? window.location : new URL(e.url);
      return t = t || $s(Vt(e.url), i), new Promise((l) => {
        t ? pe.replaceState(e, () => l(null)) : pe.pushState(e, () => l(null));
      }).then(() => {
        let l = !this.isTheSame(e);
        return this.page = e, this.cleared = !1, l && this.fireEventsFor("newComponent"), this.isFirstPageLoad && this.fireEventsFor("firstLoad"), this.isFirstPageLoad = !1, this.swap({ component: o, page: e, preserveState: n }).then(() => {
          r || Ut.reset(e), dr.fireInternalEvent("loadDeferredProps"), t || $n(e);
        });
      });
    });
  }
  setQuietly(e, { preserveState: t = !1 } = {}) {
    return this.resolve(e.component).then((r) => (this.page = e, this.cleared = !1, this.swap({ component: r, page: e, preserveState: t })));
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
    this.page.url += e;
  }
  remember(e) {
    this.page.rememberedState = e;
  }
  scrollRegions(e) {
    this.page.scrollRegions = e;
  }
  swap({ component: e, page: t, preserveState: r }) {
    return this.swapComponent({ component: e, page: t, preserveState: r });
  }
  resolve(e) {
    return Promise.resolve(this.resolveComponent(e));
  }
  isTheSame(e) {
    return this.page.component === e.component;
  }
  on(e, t) {
    return this.listeners.push({ event: e, callback: t }), () => {
      this.listeners = this.listeners.filter((r) => r.event !== e && r.callback !== t);
    };
  }
  fireEventsFor(e) {
    this.listeners.filter((t) => t.event === e).forEach((t) => t.callback());
  }
}, X = new U1(), xa = typeof window > "u", V1 = class {
  constructor() {
    this.rememberedState = "rememberedState", this.scrollRegions = "scrollRegions", this.preserveUrl = !1, this.current = {}, this.queue = [], this.initialState = null;
  }
  remember(e, t) {
    var r;
    this.replaceState({ ...X.get(), rememberedState: { ...((r = X.get()) == null ? void 0 : r.rememberedState) ?? {}, [t]: e } });
  }
  restore(e) {
    var t, r;
    if (!xa)
      return (r = (t = this.initialState) == null ? void 0 : t[this.rememberedState]) == null ? void 0 : r[e];
  }
  pushState(e, t = null) {
    xa || this.preserveUrl || (this.current = e, this.addToQueue(() => this.getPageData(e).then((r) => {
      window.history.pushState({ page: r, timestamp: Date.now() }, "", e.url), t && t();
    })));
  }
  getPageData(e) {
    return new Promise((t) => e.encryptHistory ? L1(e).then(t) : t(e));
  }
  processQueue() {
    let e = this.queue.shift();
    return e ? e().then(() => this.processQueue()) : Promise.resolve();
  }
  decrypt(e = null) {
    var r;
    if (xa)
      return Promise.resolve(e ?? X.get());
    let t = e ?? ((r = window.history.state) == null ? void 0 : r.page);
    return this.decryptPageData(t).then((n) => {
      if (!n)
        throw new Error("Unable to decrypt history");
      return this.initialState === null ? this.initialState = n ?? void 0 : this.current = n ?? {}, n;
    });
  }
  decryptPageData(e) {
    return e instanceof ArrayBuffer ? R1(e) : Promise.resolve(e);
  }
  replaceState(e, t = null) {
    X.merge(e), !(xa || this.preserveUrl) && (this.current = e, this.addToQueue(() => this.getPageData(e).then((r) => {
      window.history.replaceState({ page: r, timestamp: Date.now() }, "", e.url), t && t();
    })));
  }
  addToQueue(e) {
    this.queue.push(e), this.processQueue();
  }
  getState(e, t) {
    var r;
    return ((r = this.current) == null ? void 0 : r[e]) ?? t;
  }
  deleteState(e) {
    this.current[e] !== void 0 && (delete this.current[e], this.replaceState(this.current));
  }
  hasAnyState() {
    return !!this.getAllState();
  }
  clear() {
    Re.remove(Kr.key), Re.remove(Kr.iv);
  }
  isValidState(e) {
    return !!e.page;
  }
  getAllState() {
    return this.current;
  }
}, pe = new V1(), H1 = class {
  constructor() {
    this.internalListeners = [];
  }
  init() {
    typeof window < "u" && window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), typeof document < "u" && document.addEventListener("scroll", nd(Ut.onScroll.bind(Ut), 100), !0);
  }
  onGlobalEvent(t, r) {
    let n = (a) => {
      let o = r(a);
      a.cancelable && !a.defaultPrevented && o === !1 && a.preventDefault();
    };
    return this.registerListener(`inertia:${t}`, n);
  }
  on(t, r) {
    return this.internalListeners.push({ event: t, listener: r }), () => {
      this.internalListeners = this.internalListeners.filter((n) => n.listener !== r);
    };
  }
  onMissingHistoryItem() {
    X.clear(), this.fireInternalEvent("missingHistoryItem");
  }
  fireInternalEvent(t) {
    this.internalListeners.filter((r) => r.event === t).forEach((r) => r.listener());
  }
  registerListener(t, r) {
    return document.addEventListener(t, r), () => document.removeEventListener(t, r);
  }
  handlePopstateEvent(t) {
    let r = t.state || null;
    if (r === null) {
      let n = Vt(X.get().url);
      n.hash = window.location.hash, pe.replaceState({ ...X.get(), url: n.href }), Ut.reset(X.get());
      return;
    }
    if (pe.isValidState(r)) {
      pe.decrypt(r.page).then((n) => {
        X.setQuietly(n, { preserveState: !1 }).then(() => {
          Ut.restore(X.get()), $n(X.get());
        });
      }).catch(() => {
        this.onMissingHistoryItem();
      });
      return;
    }
    this.onMissingHistoryItem();
  }
}, dr = new H1(), W1 = class {
  constructor() {
    typeof window < "u" && (window == null ? void 0 : window.performance.getEntriesByType("navigation").length) > 0 ? this.type = window.performance.getEntriesByType("navigation")[0].type : this.type = "navigate";
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
}, Qc = new W1(), G1 = class {
  static handle() {
    this.clearRememberedStateOnReload(), [this.handleBackForward, this.handleLocation, this.handleDefault].find((e) => e.bind(this)());
  }
  static clearRememberedStateOnReload() {
    Qc.isReload() && pe.deleteState(pe.rememberedState);
  }
  static handleBackForward() {
    return !Qc.isBackForward() || !pe.hasAnyState() ? !1 : (pe.decrypt().then((e) => {
      X.set(e, { preserveScroll: !0, preserveState: !0 }).then(() => {
        Ut.restore(X.get()), $n(X.get());
      });
    }).catch(() => {
      dr.onMissingHistoryItem();
    }), !0);
  }
  static handleLocation() {
    if (!Re.exists(Re.locationVisitKey))
      return !1;
    let e = Re.get(Re.locationVisitKey) || {};
    return Re.remove(Re.locationVisitKey), typeof window < "u" && X.setUrlHash(window.location.hash), pe.decrypt().then(() => {
      let t = pe.getState(pe.rememberedState, {}), r = pe.getState(pe.scrollRegions, []);
      X.remember(t), X.scrollRegions(r), X.set(X.get(), { preserveScroll: e.preserveScroll, preserveState: !0 }).then(() => {
        e.preserveScroll && Ut.restore(X.get()), $n(X.get());
      });
    }).catch(() => {
      dr.onMissingHistoryItem();
    }), !0;
  }
  static handleDefault() {
    typeof window < "u" && X.setUrlHash(window.location.hash), X.set(X.get(), { preserveState: !0 }).then(() => {
      $n(X.get());
    });
  }
}, K1 = class {
  constructor(t, r, n) {
    this.id = null, this.throttle = !1, this.keepAlive = !1, this.cbCount = 0, this.keepAlive = n.keepAlive ?? !1, this.cb = r, this.interval = t, (n.autoStart ?? !0) && this.start();
  }
  stop() {
    this.id && clearInterval(this.id);
  }
  start() {
    typeof window > "u" || (this.stop(), this.id = window.setInterval(() => {
      (!this.throttle || this.cbCount % 10 === 0) && this.cb(), this.throttle && this.cbCount++;
    }, this.interval));
  }
  isInBackground(t) {
    this.throttle = this.keepAlive ? !1 : t, this.throttle && (this.cbCount = 0);
  }
}, Y1 = class {
  constructor() {
    this.polls = [], this.setupVisibilityListener();
  }
  add(e, t, r) {
    let n = new K1(e, t, r);
    return this.polls.push(n), { stop: () => n.stop(), start: () => n.start() };
  }
  clear() {
    this.polls.forEach((e) => e.stop()), this.polls = [];
  }
  setupVisibilityListener() {
    typeof document > "u" || document.addEventListener("visibilitychange", () => {
      this.polls.forEach((e) => e.isInBackground(document.hidden));
    }, !1);
  }
}, J1 = new Y1(), cd = (e, t, r) => {
  if (e === t)
    return !0;
  for (let n in e)
    if (!r.includes(n) && e[n] !== t[n] && !X1(e[n], t[n]))
      return !1;
  return !0;
}, X1 = (e, t) => {
  switch (typeof e) {
    case "object":
      return cd(e, t, []);
    case "function":
      return e.toString() === t.toString();
    default:
      return e === t;
  }
}, Q1 = { ms: 1, s: 1e3, m: 6e4, h: 36e5, d: 864e5 }, Zc = (e) => {
  if (typeof e == "number")
    return e;
  for (let [t, r] of Object.entries(Q1))
    if (e.endsWith(t))
      return parseFloat(e) * r;
  return parseInt(e);
}, Z1 = class {
  constructor() {
    this.cached = [], this.inFlightRequests = [], this.removalTimers = [], this.currentUseId = null;
  }
  add(e, t, { cacheFor: r }) {
    if (this.findInFlight(e))
      return Promise.resolve();
    let n = this.findCached(e);
    if (!e.fresh && n && n.staleTimestamp > Date.now())
      return Promise.resolve();
    let [a, o] = this.extractStaleValues(r), i = new Promise((l, f) => {
      t({ ...e, onCancel: () => {
        this.remove(e), e.onCancel(), f();
      }, onError: (c) => {
        this.remove(e), e.onError(c), f();
      }, onPrefetching(c) {
        e.onPrefetching(c);
      }, onPrefetched(c, u) {
        e.onPrefetched(c, u);
      }, onPrefetchResponse(c) {
        l(c);
      } });
    }).then((l) => (this.remove(e), this.cached.push({ params: { ...e }, staleTimestamp: Date.now() + a, response: i, singleUse: r === 0, timestamp: Date.now(), inFlight: !1 }), this.scheduleForRemoval(e, o), this.inFlightRequests = this.inFlightRequests.filter((f) => !this.paramsAreEqual(f.params, e)), l.handlePrefetch(), l));
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
    let [t, r] = this.cacheForToStaleAndExpires(e);
    return [Zc(t), Zc(r)];
  }
  cacheForToStaleAndExpires(e) {
    if (!Array.isArray(e))
      return [e, e];
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
    let t = this.removalTimers.find((r) => this.paramsAreEqual(r.params, e));
    t && (clearTimeout(t.timer), this.removalTimers = this.removalTimers.filter((r) => r !== t));
  }
  scheduleForRemoval(e, t) {
    if (!(typeof window > "u") && (this.clearTimer(e), t > 0)) {
      let r = window.setTimeout(() => this.remove(e), t);
      this.removalTimers.push({ params: e, timer: r });
    }
  }
  get(e) {
    return this.findCached(e) || this.findInFlight(e);
  }
  use(e, t) {
    let r = `${t.url.pathname}-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    return this.currentUseId = r, e.response.then((n) => {
      if (this.currentUseId === r)
        return n.mergeParams({ ...t, onPrefetched: () => {
        } }), this.removeSingleUseItems(t), n.handle();
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
    return cd(e, t, ["showProgress", "replace", "prefetch", "onBefore", "onStart", "onProgress", "onFinish", "onCancel", "onSuccess", "onError", "onPrefetched", "onCancelToken", "onPrefetching", "async"]);
  }
}, lr = new Z1(), ud = class {
  constructor(t) {
    if (this.callbacks = [], !t.prefetch)
      this.params = t;
    else {
      let r = { onBefore: this.wrapCallback(t, "onBefore"), onStart: this.wrapCallback(t, "onStart"), onProgress: this.wrapCallback(t, "onProgress"), onFinish: this.wrapCallback(t, "onFinish"), onCancel: this.wrapCallback(t, "onCancel"), onSuccess: this.wrapCallback(t, "onSuccess"), onError: this.wrapCallback(t, "onError"), onCancelToken: this.wrapCallback(t, "onCancelToken"), onPrefetched: this.wrapCallback(t, "onPrefetched"), onPrefetching: this.wrapCallback(t, "onPrefetching") };
      this.params = { ...t, ...r, onPrefetchResponse: t.onPrefetchResponse || (() => {
      }) };
    }
  }
  static create(t) {
    return new ud(t);
  }
  data() {
    return this.params.method === "get" ? {} : this.params.data;
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
  markAsCancelled({ cancelled: t = !0, interrupted: r = !1 }) {
    this.params.onCancel(), this.params.completed = !1, this.params.cancelled = t, this.params.interrupted = r;
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
    this.isPartial() && (t["X-Inertia-Partial-Component"] = X.get().component);
    let r = this.params.only.concat(this.params.reset);
    return r.length > 0 && (t["X-Inertia-Partial-Data"] = r.join(",")), this.params.except.length > 0 && (t["X-Inertia-Partial-Except"] = this.params.except.join(",")), this.params.reset.length > 0 && (t["X-Inertia-Reset"] = this.params.reset.join(",")), this.params.errorBag && this.params.errorBag.length > 0 && (t["X-Inertia-Error-Bag"] = this.params.errorBag), t;
  }
  setPreserveOptions(t) {
    this.params.preserveScroll = this.resolvePreserveOption(this.params.preserveScroll, t), this.params.preserveState = this.resolvePreserveOption(this.params.preserveState, t);
  }
  runCallbacks() {
    this.callbacks.forEach(({ name: t, args: r }) => {
      this.params[t](...r);
    });
  }
  merge(t) {
    this.params = { ...this.params, ...t };
  }
  wrapCallback(t, r) {
    return (...n) => {
      this.recordCallback(r, n), t[r](...n);
    };
  }
  recordCallback(t, r) {
    this.callbacks.push({ name: t, args: r });
  }
  resolvePreserveOption(t, r) {
    return typeof t == "function" ? t(r) : t === "errors" ? Object.keys(r.props.errors || {}).length > 0 : t;
  }
}, ew = { modal: null, listener: null, show(e) {
  typeof e == "object" && (e = `All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(e)}`);
  let t = document.createElement("html");
  t.innerHTML = e, t.querySelectorAll("a").forEach((n) => n.setAttribute("target", "_top")), this.modal = document.createElement("div"), this.modal.style.position = "fixed", this.modal.style.width = "100vw", this.modal.style.height = "100vh", this.modal.style.padding = "50px", this.modal.style.boxSizing = "border-box", this.modal.style.backgroundColor = "rgba(0, 0, 0, .6)", this.modal.style.zIndex = 2e5, this.modal.addEventListener("click", () => this.hide());
  let r = document.createElement("iframe");
  if (r.style.backgroundColor = "white", r.style.borderRadius = "5px", r.style.width = "100%", r.style.height = "100%", this.modal.appendChild(r), document.body.prepend(this.modal), document.body.style.overflow = "hidden", !r.contentWindow)
    throw new Error("iframe not yet ready.");
  r.contentWindow.document.open(), r.contentWindow.document.write(t.outerHTML), r.contentWindow.document.close(), this.listener = this.hideOnEscape.bind(this), document.addEventListener("keydown", this.listener);
}, hide() {
  this.modal.outerHTML = "", this.modal = null, document.body.style.overflow = "visible", document.removeEventListener("keydown", this.listener);
}, hideOnEscape(e) {
  e.keyCode === 27 && this.hide();
} }, tw = class {
  constructor() {
    this.queue = [], this.processing = !1;
  }
  add(e) {
    this.queue.push(e);
  }
  async process() {
    return this.processing || (this.processing = !0, await this.processQueue(), this.processing = !1), Promise.resolve();
  }
  async processQueue() {
    let e = this.queue.shift();
    return e ? (await e.process(), this.processQueue()) : Promise.resolve();
  }
}, eu = new tw(), Fs = class {
  constructor(e, t, r) {
    this.requestParams = e, this.response = t, this.originatingPage = r;
  }
  static create(e, t, r) {
    return new Fs(e, t, r);
  }
  async handlePrefetch() {
    $s(this.requestParams.all().url, window.location) && this.handle();
  }
  async handle() {
    return eu.add(this), eu.process();
  }
  async process() {
    if (this.requestParams.all().prefetch)
      return this.requestParams.all().prefetch = !1, this.requestParams.all().onPrefetched(this.response, this.requestParams.all()), I1(this.response, this.requestParams.all()), Promise.resolve();
    if (this.requestParams.runCallbacks(), !this.isInertiaResponse())
      return this.handleNonInertiaResponse();
    await pe.processQueue(), pe.preserveUrl = this.requestParams.all().preserveUrl, await this.setPage();
    let e = X.get().props.errors || {};
    if (Object.keys(e).length > 0) {
      let t = this.getScopedErrors(e);
      return C1(t), this.requestParams.all().onError(t);
    }
    F1(X.get()), await this.requestParams.all().onSuccess(X.get()), pe.preserveUrl = !1;
  }
  mergeParams(e) {
    this.requestParams.merge(e);
  }
  async handleNonInertiaResponse() {
    if (this.isLocationVisit()) {
      let t = Vt(this.getHeader("x-inertia-location"));
      return Xc(this.requestParams.all().url, t), this.locationVisit(t);
    }
    let e = { ...this.response, data: this.getDataFromResponse(this.response.data) };
    if (k1(e))
      return ew.show(e.data);
  }
  isInertiaResponse() {
    return this.hasHeader("x-inertia");
  }
  hasStatus(e) {
    return this.response.status === e;
  }
  getHeader(e) {
    return this.response.headers[e];
  }
  hasHeader(e) {
    return this.getHeader(e) !== void 0;
  }
  isLocationVisit() {
    return this.hasStatus(409) && this.hasHeader("x-inertia-location");
  }
  locationVisit(e) {
    try {
      if (Re.set(Re.locationVisitKey, { preserveScroll: this.requestParams.all().preserveScroll === !0 }), typeof window > "u")
        return;
      $s(window.location, e) ? window.location.reload() : window.location.href = e.href;
    } catch {
      return !1;
    }
  }
  async setPage() {
    let e = this.getDataFromResponse(this.response.data);
    return this.shouldSetPage(e) ? (this.mergeProps(e), await this.setRememberedState(e), this.requestParams.setPreserveOptions(e), e.url = pe.preserveUrl ? X.get().url : this.pageUrl(e), X.set(e, { replace: this.requestParams.all().replace, preserveScroll: this.requestParams.all().preserveScroll, preserveState: this.requestParams.all().preserveState })) : Promise.resolve();
  }
  getDataFromResponse(e) {
    if (typeof e != "string")
      return e;
    try {
      return JSON.parse(e);
    } catch {
      return e;
    }
  }
  shouldSetPage(e) {
    if (!this.requestParams.all().async || this.originatingPage.component !== e.component)
      return !0;
    if (this.originatingPage.component !== X.get().component)
      return !1;
    let t = Vt(this.originatingPage.url), r = Vt(X.get().url);
    return t.origin === r.origin && t.pathname === r.pathname;
  }
  pageUrl(e) {
    let t = Vt(e.url);
    return Xc(this.requestParams.all().url, t), t.href.split(t.host).pop();
  }
  mergeProps(e) {
    this.requestParams.isPartial() && e.component === X.get().component && ((e.mergeProps || []).forEach((t) => {
      let r = e.props[t];
      Array.isArray(r) ? e.props[t] = [...X.get().props[t] || [], ...r] : typeof r == "object" && (e.props[t] = { ...X.get().props[t] || [], ...r });
    }), e.props = { ...X.get().props, ...e.props });
  }
  async setRememberedState(e) {
    let t = await pe.getState(pe.rememberedState, {});
    this.requestParams.all().preserveState && t && e.component === X.get().component && (e.rememberedState = t);
  }
  getScopedErrors(e) {
    return this.requestParams.all().errorBag ? e[this.requestParams.all().errorBag || ""] || {} : e;
  }
}, Is = class {
  constructor(e, t) {
    this.page = t, this.requestHasFinished = !1, this.requestParams = ud.create(e), this.cancelToken = new AbortController();
  }
  static create(e, t) {
    return new Is(e, t);
  }
  async send() {
    this.requestParams.onCancelToken(() => this.cancel({ cancelled: !0 })), $1(this.requestParams.all()), this.requestParams.onStart(), this.requestParams.all().prefetch && (this.requestParams.onPrefetching(), D1(this.requestParams.all()));
    let e = this.requestParams.all().prefetch;
    return Kc({ method: this.requestParams.all().method, url: Ya(this.requestParams.all().url).href, data: this.requestParams.data(), params: this.requestParams.queryParams(), signal: this.cancelToken.signal, headers: this.getHeaders(), onUploadProgress: this.onProgress.bind(this), responseType: "text" }).then((t) => (this.response = Fs.create(this.requestParams, t, this.page), this.response.handle())).catch((t) => t != null && t.response ? (this.response = Fs.create(this.requestParams, t.response, this.page), this.response.handle()) : Promise.reject(t)).catch((t) => {
      if (!Kc.isCancel(t) && P1(t))
        return Promise.reject(t);
    }).finally(() => {
      this.finish(), e && this.response && this.requestParams.onPrefetchResponse(this.response);
    });
  }
  finish() {
    this.requestParams.wasCancelledAtAll() || (this.requestParams.markAsFinished(), this.fireFinishEvents());
  }
  fireFinishEvents() {
    this.requestHasFinished || (this.requestHasFinished = !0, _1(this.requestParams.all()), this.requestParams.onFinish());
  }
  cancel({ cancelled: e = !1, interrupted: t = !1 }) {
    this.requestHasFinished || (this.cancelToken.abort(), this.requestParams.markAsCancelled({ cancelled: e, interrupted: t }), this.fireFinishEvents());
  }
  onProgress(e) {
    this.requestParams.data() instanceof FormData && (e.percentage = e.progress ? Math.round(e.progress * 100) : 0, T1(e), this.requestParams.all().onProgress(e));
  }
  getHeaders() {
    let e = { ...this.requestParams.headers(), Accept: "text/html, application/xhtml+xml", "X-Requested-With": "XMLHttpRequest", "X-Inertia": !0 };
    return X.get().version && (e["X-Inertia-Version"] = X.get().version), e;
  }
}, tu = class {
  constructor({ maxConcurrent: t, interruptible: r }) {
    this.requests = [], this.maxConcurrent = t, this.interruptible = r;
  }
  send(t) {
    this.requests.push(t), t.send().then(() => {
      this.requests = this.requests.filter((r) => r !== t);
    });
  }
  interruptInFlight() {
    this.cancel({ interrupted: !0 }, !1);
  }
  cancelInFlight() {
    this.cancel({ cancelled: !0 }, !0);
  }
  cancel({ cancelled: t = !1, interrupted: r = !1 } = {}, n) {
    var a;
    this.shouldCancel(n) && ((a = this.requests.shift()) == null || a.cancel({ interrupted: r, cancelled: t }));
  }
  shouldCancel(t) {
    return t ? !0 : this.interruptible && this.requests.length >= this.maxConcurrent;
  }
}, rw = class {
  constructor() {
    this.syncRequestStream = new tu({ maxConcurrent: 1, interruptible: !0 }), this.asyncRequestStream = new tu({ maxConcurrent: 1 / 0, interruptible: !1 });
  }
  init({ initialPage: t, resolveComponent: r, swapComponent: n }) {
    X.init({ initialPage: t, resolveComponent: r, swapComponent: n }), G1.handle(), dr.init(), dr.on("missingHistoryItem", () => {
      typeof window < "u" && this.visit(window.location.href, { preserveState: !0, preserveScroll: !0, replace: !0 });
    }), dr.on("loadDeferredProps", () => {
      this.loadDeferredProps();
    });
  }
  get(t, r = {}, n = {}) {
    return this.visit(t, { ...n, method: "get", data: r });
  }
  post(t, r = {}, n = {}) {
    return this.visit(t, { preserveState: !0, ...n, method: "post", data: r });
  }
  put(t, r = {}, n = {}) {
    return this.visit(t, { preserveState: !0, ...n, method: "put", data: r });
  }
  patch(t, r = {}, n = {}) {
    return this.visit(t, { preserveState: !0, ...n, method: "patch", data: r });
  }
  delete(t, r = {}) {
    return this.visit(t, { preserveState: !0, ...r, method: "delete" });
  }
  reload(t = {}) {
    if (!(typeof window > "u"))
      return this.visit(window.location.href, { ...t, preserveScroll: !0, preserveState: !0, async: !0, headers: { ...t.headers || {}, "Cache-Control": "no-cache" } });
  }
  remember(t, r = "default") {
    pe.remember(t, r);
  }
  restore(t = "default") {
    return pe.restore(t);
  }
  on(t, r) {
    return dr.onGlobalEvent(t, r);
  }
  cancel() {
    this.syncRequestStream.cancelInFlight();
  }
  cancelAll() {
    this.asyncRequestStream.cancelInFlight(), this.syncRequestStream.cancelInFlight();
  }
  poll(t, r = {}, n = {}) {
    return J1.add(t, () => this.reload(r), { autoStart: n.autoStart ?? !0, keepAlive: n.keepAlive ?? !1 });
  }
  visit(t, r = {}) {
    let n = this.getPendingVisit(t, { ...r, showProgress: r.showProgress ?? !r.async }), a = this.getVisitEvents(r);
    if (a.onBefore(n) === !1 || !Yc(n))
      return;
    let o = n.async ? this.asyncRequestStream : this.syncRequestStream;
    o.interruptInFlight(), !X.isCleared() && !n.preserveUrl && Ut.save(X.get());
    let i = { ...n, ...a }, l = lr.get(i);
    l ? (ru(l.inFlight), lr.use(l, i)) : (ru(!0), o.send(Is.create(i, X.get())));
  }
  getCached(t, r = {}) {
    return lr.findCached(this.getPrefetchParams(t, r));
  }
  flush(t, r = {}) {
    lr.remove(this.getPrefetchParams(t, r));
  }
  flushAll() {
    lr.removeAll();
  }
  getPrefetching(t, r = {}) {
    return lr.findInFlight(this.getPrefetchParams(t, r));
  }
  prefetch(t, r = {}, { cacheFor: n }) {
    if (r.method !== "get")
      throw new Error("Prefetch requests must use the GET method");
    let a = this.getPendingVisit(t, { ...r, async: !0, showProgress: !1, prefetch: !0 }), o = a.url.origin + a.url.pathname + a.url.search, i = window.location.origin + window.location.pathname + window.location.search;
    if (o === i)
      return;
    let l = this.getVisitEvents(r);
    if (l.onBefore(a) === !1 || !Yc(a))
      return;
    hw(), this.asyncRequestStream.interruptInFlight();
    let f = { ...a, ...l };
    (() => new Promise((c) => {
      let u = () => {
        X.get() ? c() : setTimeout(u, 50);
      };
      u();
    }))().then(() => {
      lr.add(f, (c) => {
        this.asyncRequestStream.send(Is.create(c, X.get()));
      }, { cacheFor: n });
    });
  }
  clearHistory() {
    pe.clear();
  }
  decryptHistory() {
    return pe.decrypt();
  }
  replace(t) {
    this.clientVisit(t, { replace: !0 });
  }
  push(t) {
    this.clientVisit(t);
  }
  clientVisit(t, { replace: r = !1 } = {}) {
    let n = X.get(), a = typeof t.props == "function" ? t.props(n.props) : t.props ?? n.props;
    X.set({ ...n, ...t, props: a }, { replace: r, preserveScroll: t.preserveScroll, preserveState: t.preserveState });
  }
  getPrefetchParams(t, r) {
    return { ...this.getPendingVisit(t, { ...r, async: !0, showProgress: !1, prefetch: !0 }), ...this.getVisitEvents(r) };
  }
  getPendingVisit(t, r, n = {}) {
    let a = { method: "get", data: {}, replace: !1, preserveScroll: !1, preserveState: !1, only: [], except: [], headers: {}, errorBag: "", forceFormData: !1, queryStringArrayFormat: "brackets", async: !1, showProgress: !0, fresh: !1, reset: [], preserveUrl: !1, prefetch: !1, ...r }, [o, i] = z1(t, a.data, a.method, a.forceFormData, a.queryStringArrayFormat);
    return { cancelled: !1, completed: !1, interrupted: !1, ...a, ...n, url: o, data: i };
  }
  getVisitEvents(t) {
    return { onCancelToken: t.onCancelToken || (() => {
    }), onBefore: t.onBefore || (() => {
    }), onStart: t.onStart || (() => {
    }), onProgress: t.onProgress || (() => {
    }), onFinish: t.onFinish || (() => {
    }), onCancel: t.onCancel || (() => {
    }), onSuccess: t.onSuccess || (() => {
    }), onError: t.onError || (() => {
    }), onPrefetched: t.onPrefetched || (() => {
    }), onPrefetching: t.onPrefetching || (() => {
    }) };
  }
  loadDeferredProps() {
    var r;
    let t = (r = X.get()) == null ? void 0 : r.deferredProps;
    t && Object.entries(t).forEach(([n, a]) => {
      this.reload({ only: a });
    });
  }
}, nw = { buildDOMElement(e) {
  let t = document.createElement("template");
  t.innerHTML = e;
  let r = t.content.firstChild;
  if (!e.startsWith("<script "))
    return r;
  let n = document.createElement("script");
  return n.innerHTML = r.innerHTML, r.getAttributeNames().forEach((a) => {
    n.setAttribute(a, r.getAttribute(a) || "");
  }), n;
}, isInertiaManagedElement(e) {
  return e.nodeType === Node.ELEMENT_NODE && e.getAttribute("inertia") !== null;
}, findMatchingElementIndex(e, t) {
  let r = e.getAttribute("inertia");
  return r !== null ? t.findIndex((n) => n.getAttribute("inertia") === r) : -1;
}, update: nd(function(e) {
  let t = e.map((r) => this.buildDOMElement(r));
  Array.from(document.head.childNodes).filter((r) => this.isInertiaManagedElement(r)).forEach((r) => {
    var o, i;
    let n = this.findMatchingElementIndex(r, t);
    if (n === -1) {
      (o = r == null ? void 0 : r.parentNode) == null || o.removeChild(r);
      return;
    }
    let a = t.splice(n, 1)[0];
    a && !r.isEqualNode(a) && ((i = r == null ? void 0 : r.parentNode) == null || i.replaceChild(a, r));
  }), t.forEach((r) => document.head.appendChild(r));
}, 1) };
function aw(e, t, r) {
  let n = {}, a = 0;
  function o() {
    let u = a += 1;
    return n[u] = [], u.toString();
  }
  function i(u) {
    u === null || Object.keys(n).indexOf(u) === -1 || (delete n[u], c());
  }
  function l(u, p = []) {
    u !== null && Object.keys(n).indexOf(u) > -1 && (n[u] = p), c();
  }
  function f() {
    let u = t(""), p = { ...u ? { title: `<title inertia="">${u}</title>` } : {} }, m = Object.values(n).reduce((E, S) => E.concat(S), []).reduce((E, S) => {
      if (S.indexOf("<") === -1)
        return E;
      if (S.indexOf("<title ") === 0) {
        let C = S.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return E.title = C ? `${C[1]}${t(C[2])}${C[3]}` : S, E;
      }
      let A = S.match(/ inertia="[^"]+"/);
      return A ? E[A[0]] = S : E[Object.keys(E).length] = S, E;
    }, p);
    return Object.values(m);
  }
  function c() {
    e ? r(f()) : nw.update(f());
  }
  return c(), { forceUpdate: c, createProvider: function() {
    let u = o();
    return { update: (p) => l(u, p), disconnect: () => i(u) };
  } };
}
var we = "nprogress", Ce = { minimum: 0.08, easing: "linear", positionUsing: "translate3d", speed: 200, trickle: !0, trickleSpeed: 200, showSpinner: !0, barSelector: '[role="bar"]', spinnerSelector: '[role="spinner"]', parent: "body", color: "#29d", includeCSS: !0, template: ['<div class="bar" role="bar">', '<div class="peg"></div>', "</div>", '<div class="spinner" role="spinner">', '<div class="spinner-icon"></div>', "</div>"].join("") }, Yt = null, ow = (e) => {
  Object.assign(Ce, e), Ce.includeCSS && fw(Ce.color);
}, vo = (e) => {
  let t = fd();
  e = gd(e, Ce.minimum, 1), Yt = e === 1 ? null : e;
  let r = sw(!t), n = r.querySelector(Ce.barSelector), a = Ce.speed, o = Ce.easing;
  r.offsetWidth, uw((i) => {
    let l = (() => Ce.positionUsing === "translate3d" ? { transition: `all ${a}ms ${o}`, transform: `translate3d(${Da(e)}%,0,0)` } : Ce.positionUsing === "translate" ? { transition: `all ${a}ms ${o}`, transform: `translate(${Da(e)}%,0)` } : { marginLeft: `${Da(e)}%` })();
    for (let f in l)
      n.style[f] = l[f];
    if (e !== 1)
      return setTimeout(i, a);
    r.style.transition = "none", r.style.opacity = "1", r.offsetWidth, setTimeout(() => {
      r.style.transition = `all ${a}ms linear`, r.style.opacity = "0", setTimeout(() => {
        md(), i();
      }, a);
    }, a);
  });
}, fd = () => typeof Yt == "number", dd = () => {
  Yt || vo(0);
  let e = function() {
    setTimeout(function() {
      Yt && (pd(), e());
    }, Ce.trickleSpeed);
  };
  Ce.trickle && e();
}, iw = (e) => {
  !e && !Yt || (pd(0.3 + 0.5 * Math.random()), vo(1));
}, pd = (e) => {
  let t = Yt;
  if (t === null)
    return dd();
  if (!(t > 1))
    return e = typeof e == "number" ? e : (() => {
      let r = { 0.1: [0, 0.2], 0.04: [0.2, 0.5], 0.02: [0.5, 0.8], 5e-3: [0.8, 0.99] };
      for (let n in r)
        if (t >= r[n][0] && t < r[n][1])
          return parseFloat(n);
      return 0;
    })(), vo(gd(t + e, 0, 0.994));
}, sw = (e) => {
  var o;
  if (lw())
    return document.getElementById(we);
  document.documentElement.classList.add(`${we}-busy`);
  let t = document.createElement("div");
  t.id = we, t.innerHTML = Ce.template;
  let r = t.querySelector(Ce.barSelector), n = e ? "-100" : Da(Yt || 0), a = hd();
  return r.style.transition = "all 0 linear", r.style.transform = `translate3d(${n}%,0,0)`, Ce.showSpinner || ((o = t.querySelector(Ce.spinnerSelector)) == null || o.remove()), a !== document.body && a.classList.add(`${we}-custom-parent`), a.appendChild(t), t;
}, hd = () => cw(Ce.parent) ? Ce.parent : document.querySelector(Ce.parent), md = () => {
  var e;
  document.documentElement.classList.remove(`${we}-busy`), hd().classList.remove(`${we}-custom-parent`), (e = document.getElementById(we)) == null || e.remove();
}, lw = () => document.getElementById(we) !== null, cw = (e) => typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
function gd(e, t, r) {
  return e < t ? t : e > r ? r : e;
}
var Da = (e) => (-1 + e) * 100, uw = (() => {
  let e = [], t = () => {
    let r = e.shift();
    r && r(t);
  };
  return (r) => {
    e.push(r), e.length === 1 && t();
  };
})(), fw = (e) => {
  let t = document.createElement("style");
  t.textContent = `
    #${we} {
      pointer-events: none;
    }

    #${we} .bar {
      background: ${e};

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #${we} .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
      opacity: 1.0;

      transform: rotate(3deg) translate(0px, -4px);
    }

    #${we} .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #${we} .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${e};
      border-left-color: ${e};
      border-radius: 50%;

      animation: ${we}-spinner 400ms linear infinite;
    }

    .${we}-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .${we}-custom-parent #${we} .spinner,
    .${we}-custom-parent #${we} .bar {
      position: absolute;
    }

    @keyframes ${we}-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `, document.head.appendChild(t);
}, qr = (() => {
  if (typeof document > "u")
    return null;
  let e = document.createElement("style");
  return e.innerHTML = `#${we} { display: none; }`, e;
})(), dw = () => {
  if (qr && document.head.contains(qr))
    return document.head.removeChild(qr);
}, pw = () => {
  qr && !document.head.contains(qr) && document.head.appendChild(qr);
}, yd = { configure: ow, isStarted: fd, done: iw, set: vo, remove: md, start: dd, status: Yt, show: dw, hide: pw }, La = 0, ru = (e = !1) => {
  La = Math.max(0, La - 1), (e || La === 0) && yd.show();
}, hw = () => {
  La++, yd.hide();
};
function Ra(e) {
  let t = e.currentTarget.tagName.toLowerCase() === "a";
  return !(e.target && (e == null ? void 0 : e.target).isContentEditable || e.defaultPrevented || t && e.which > 1 || t && e.altKey || t && e.ctrlKey || t && e.metaKey || t && e.shiftKey || t && "button" in e && e.button !== 0);
}
var wt = new rw();
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
* @license MIT */
var Ja = { exports: {} };
Ja.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", a = 9007199254740991, o = "[object Arguments]", i = "[object Array]", l = "[object Boolean]", f = "[object Date]", c = "[object Error]", u = "[object Function]", p = "[object GeneratorFunction]", m = "[object Map]", E = "[object Number]", S = "[object Object]", A = "[object Promise]", C = "[object RegExp]", _ = "[object Set]", T = "[object String]", w = "[object Symbol]", I = "[object WeakMap]", D = "[object ArrayBuffer]", B = "[object DataView]", z = "[object Float32Array]", ee = "[object Float64Array]", q = "[object Int8Array]", F = "[object Int16Array]", U = "[object Int32Array]", h = "[object Uint8Array]", y = "[object Uint8ClampedArray]", b = "[object Uint16Array]", g = "[object Uint32Array]", j = /[\\^$.*+?()[\]{}|]/g, R = /\w*$/, L = /^\[object .+?Constructor\]$/, V = /^(?:0|[1-9]\d*)$/, Y = {};
  Y[o] = Y[i] = Y[D] = Y[B] = Y[l] = Y[f] = Y[z] = Y[ee] = Y[q] = Y[F] = Y[U] = Y[m] = Y[E] = Y[S] = Y[C] = Y[_] = Y[T] = Y[w] = Y[h] = Y[y] = Y[b] = Y[g] = !0, Y[c] = Y[u] = Y[I] = !1;
  var Qe = typeof at == "object" && at && at.Object === Object && at, Rt = typeof self == "object" && self && self.Object === Object && self, be = Qe || Rt || Function("return this")(), Ze = t && !t.nodeType && t, ie = Ze && !0 && e && !e.nodeType && e, Xt = ie && ie.exports === Ze;
  function en(s, d) {
    return s.set(d[0], d[1]), s;
  }
  function ze(s, d) {
    return s.add(d), s;
  }
  function Qt(s, d) {
    for (var v = -1, k = s ? s.length : 0; ++v < k && d(s[v], v, s) !== !1; )
      ;
    return s;
  }
  function vr(s, d) {
    for (var v = -1, k = d.length, te = s.length; ++v < k; )
      s[te + v] = d[v];
    return s;
  }
  function Zt(s, d, v, k) {
    var te = -1, W = s ? s.length : 0;
    for (k && W && (v = s[++te]); ++te < W; )
      v = d(v, s[te], te, s);
    return v;
  }
  function er(s, d) {
    for (var v = -1, k = Array(s); ++v < s; )
      k[v] = d(v);
    return k;
  }
  function br(s, d) {
    return s == null ? void 0 : s[d];
  }
  function tn(s) {
    var d = !1;
    if (s != null && typeof s.toString != "function")
      try {
        d = !!(s + "");
      } catch {
      }
    return d;
  }
  function Xn(s) {
    var d = -1, v = Array(s.size);
    return s.forEach(function(k, te) {
      v[++d] = [te, k];
    }), v;
  }
  function rn(s, d) {
    return function(v) {
      return s(d(v));
    };
  }
  function Qn(s) {
    var d = -1, v = Array(s.size);
    return s.forEach(function(k) {
      v[++d] = k;
    }), v;
  }
  var Eo = Array.prototype, Oo = Function.prototype, wr = Object.prototype, nn = be["__core-js_shared__"], Zn = function() {
    var s = /[^.]+$/.exec(nn && nn.keys && nn.keys.IE_PROTO || "");
    return s ? "Symbol(src)_1." + s : "";
  }(), ea = Oo.toString, ct = wr.hasOwnProperty, xr = wr.toString, Co = RegExp(
    "^" + ea.call(ct).replace(j, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), tr = Xt ? be.Buffer : void 0, Sr = be.Symbol, an = be.Uint8Array, Je = rn(Object.getPrototypeOf, Object), ta = Object.create, ra = wr.propertyIsEnumerable, Po = Eo.splice, on = Object.getOwnPropertySymbols, Ar = tr ? tr.isBuffer : void 0, na = rn(Object.keys, Object), Er = tt(be, "DataView"), rr = tt(be, "Map"), et = tt(be, "Promise"), Or = tt(be, "Set"), sn = tt(be, "WeakMap"), nr = tt(Object, "create"), ln = Le(Er), ar = Le(rr), cn = Le(et), un = Le(Or), fn = Le(sn), Nt = Sr ? Sr.prototype : void 0, aa = Nt ? Nt.valueOf : void 0;
  function At(s) {
    var d = -1, v = s ? s.length : 0;
    for (this.clear(); ++d < v; ) {
      var k = s[d];
      this.set(k[0], k[1]);
    }
  }
  function _o() {
    this.__data__ = nr ? nr(null) : {};
  }
  function ko(s) {
    return this.has(s) && delete this.__data__[s];
  }
  function To(s) {
    var d = this.__data__;
    if (nr) {
      var v = d[s];
      return v === n ? void 0 : v;
    }
    return ct.call(d, s) ? d[s] : void 0;
  }
  function oa(s) {
    var d = this.__data__;
    return nr ? d[s] !== void 0 : ct.call(d, s);
  }
  function dn(s, d) {
    var v = this.__data__;
    return v[s] = nr && d === void 0 ? n : d, this;
  }
  At.prototype.clear = _o, At.prototype.delete = ko, At.prototype.get = To, At.prototype.has = oa, At.prototype.set = dn;
  function Pe(s) {
    var d = -1, v = s ? s.length : 0;
    for (this.clear(); ++d < v; ) {
      var k = s[d];
      this.set(k[0], k[1]);
    }
  }
  function $o() {
    this.__data__ = [];
  }
  function Fo(s) {
    var d = this.__data__, v = Pr(d, s);
    if (v < 0)
      return !1;
    var k = d.length - 1;
    return v == k ? d.pop() : Po.call(d, v, 1), !0;
  }
  function Io(s) {
    var d = this.__data__, v = Pr(d, s);
    return v < 0 ? void 0 : d[v][1];
  }
  function Do(s) {
    return Pr(this.__data__, s) > -1;
  }
  function Lo(s, d) {
    var v = this.__data__, k = Pr(v, s);
    return k < 0 ? v.push([s, d]) : v[k][1] = d, this;
  }
  Pe.prototype.clear = $o, Pe.prototype.delete = Fo, Pe.prototype.get = Io, Pe.prototype.has = Do, Pe.prototype.set = Lo;
  function ke(s) {
    var d = -1, v = s ? s.length : 0;
    for (this.clear(); ++d < v; ) {
      var k = s[d];
      this.set(k[0], k[1]);
    }
  }
  function Ro() {
    this.__data__ = {
      hash: new At(),
      map: new (rr || Pe)(),
      string: new At()
    };
  }
  function No(s) {
    return ir(this, s).delete(s);
  }
  function Mo(s) {
    return ir(this, s).get(s);
  }
  function Bo(s) {
    return ir(this, s).has(s);
  }
  function jo(s, d) {
    return ir(this, s).set(s, d), this;
  }
  ke.prototype.clear = Ro, ke.prototype.delete = No, ke.prototype.get = Mo, ke.prototype.has = Bo, ke.prototype.set = jo;
  function Ne(s) {
    this.__data__ = new Pe(s);
  }
  function qo() {
    this.__data__ = new Pe();
  }
  function zo(s) {
    return this.__data__.delete(s);
  }
  function Uo(s) {
    return this.__data__.get(s);
  }
  function Vo(s) {
    return this.__data__.has(s);
  }
  function Ho(s, d) {
    var v = this.__data__;
    if (v instanceof Pe) {
      var k = v.__data__;
      if (!rr || k.length < r - 1)
        return k.push([s, d]), this;
      v = this.__data__ = new ke(k);
    }
    return v.set(s, d), this;
  }
  Ne.prototype.clear = qo, Ne.prototype.delete = zo, Ne.prototype.get = Uo, Ne.prototype.has = Vo, Ne.prototype.set = Ho;
  function Cr(s, d) {
    var v = gn(s) || kr(s) ? er(s.length, String) : [], k = v.length, te = !!k;
    for (var W in s)
      (d || ct.call(s, W)) && !(te && (W == "length" || oi(W, k))) && v.push(W);
    return v;
  }
  function ia(s, d, v) {
    var k = s[d];
    (!(ct.call(s, d) && fa(k, v)) || v === void 0 && !(d in s)) && (s[d] = v);
  }
  function Pr(s, d) {
    for (var v = s.length; v--; )
      if (fa(s[v][0], d))
        return v;
    return -1;
  }
  function ut(s, d) {
    return s && mn(d, vn(d), s);
  }
  function pn(s, d, v, k, te, W, se) {
    var le;
    if (k && (le = W ? k(s, te, W, se) : k(s)), le !== void 0)
      return le;
    if (!dt(s))
      return s;
    var xe = gn(s);
    if (xe) {
      if (le = ni(s), !d)
        return ei(s, le);
    } else {
      var ue = Ot(s), Te = ue == u || ue == p;
      if (da(s))
        return _r(s, d);
      if (ue == S || ue == o || Te && !W) {
        if (tn(s))
          return W ? s : {};
        if (le = ft(Te ? {} : s), !d)
          return ti(s, ut(le, s));
      } else {
        if (!Y[ue])
          return W ? s : {};
        le = ai(s, ue, pn, d);
      }
    }
    se || (se = new Ne());
    var Me = se.get(s);
    if (Me)
      return Me;
    if (se.set(s, le), !xe)
      var Ae = v ? ri(s) : vn(s);
    return Qt(Ae || s, function($e, _e) {
      Ae && (_e = $e, $e = s[_e]), ia(le, _e, pn($e, d, v, k, _e, s, se));
    }), le;
  }
  function Wo(s) {
    return dt(s) ? ta(s) : {};
  }
  function Go(s, d, v) {
    var k = d(s);
    return gn(s) ? k : vr(k, v(s));
  }
  function Ko(s) {
    return xr.call(s);
  }
  function Yo(s) {
    if (!dt(s) || si(s))
      return !1;
    var d = yn(s) || tn(s) ? Co : L;
    return d.test(Le(s));
  }
  function Jo(s) {
    if (!ca(s))
      return na(s);
    var d = [];
    for (var v in Object(s))
      ct.call(s, v) && v != "constructor" && d.push(v);
    return d;
  }
  function _r(s, d) {
    if (d)
      return s.slice();
    var v = new s.constructor(s.length);
    return s.copy(v), v;
  }
  function hn(s) {
    var d = new s.constructor(s.byteLength);
    return new an(d).set(new an(s)), d;
  }
  function or(s, d) {
    var v = d ? hn(s.buffer) : s.buffer;
    return new s.constructor(v, s.byteOffset, s.byteLength);
  }
  function sa(s, d, v) {
    var k = d ? v(Xn(s), !0) : Xn(s);
    return Zt(k, en, new s.constructor());
  }
  function la(s) {
    var d = new s.constructor(s.source, R.exec(s));
    return d.lastIndex = s.lastIndex, d;
  }
  function Xo(s, d, v) {
    var k = d ? v(Qn(s), !0) : Qn(s);
    return Zt(k, ze, new s.constructor());
  }
  function Qo(s) {
    return aa ? Object(aa.call(s)) : {};
  }
  function Zo(s, d) {
    var v = d ? hn(s.buffer) : s.buffer;
    return new s.constructor(v, s.byteOffset, s.length);
  }
  function ei(s, d) {
    var v = -1, k = s.length;
    for (d || (d = Array(k)); ++v < k; )
      d[v] = s[v];
    return d;
  }
  function mn(s, d, v, k) {
    v || (v = {});
    for (var te = -1, W = d.length; ++te < W; ) {
      var se = d[te], le = k ? k(v[se], s[se], se, v, s) : void 0;
      ia(v, se, le === void 0 ? s[se] : le);
    }
    return v;
  }
  function ti(s, d) {
    return mn(s, Et(s), d);
  }
  function ri(s) {
    return Go(s, vn, Et);
  }
  function ir(s, d) {
    var v = s.__data__;
    return ii(d) ? v[typeof d == "string" ? "string" : "hash"] : v.map;
  }
  function tt(s, d) {
    var v = br(s, d);
    return Yo(v) ? v : void 0;
  }
  var Et = on ? rn(on, Object) : ci, Ot = Ko;
  (Er && Ot(new Er(new ArrayBuffer(1))) != B || rr && Ot(new rr()) != m || et && Ot(et.resolve()) != A || Or && Ot(new Or()) != _ || sn && Ot(new sn()) != I) && (Ot = function(s) {
    var d = xr.call(s), v = d == S ? s.constructor : void 0, k = v ? Le(v) : void 0;
    if (k)
      switch (k) {
        case ln:
          return B;
        case ar:
          return m;
        case cn:
          return A;
        case un:
          return _;
        case fn:
          return I;
      }
    return d;
  });
  function ni(s) {
    var d = s.length, v = s.constructor(d);
    return d && typeof s[0] == "string" && ct.call(s, "index") && (v.index = s.index, v.input = s.input), v;
  }
  function ft(s) {
    return typeof s.constructor == "function" && !ca(s) ? Wo(Je(s)) : {};
  }
  function ai(s, d, v, k) {
    var te = s.constructor;
    switch (d) {
      case D:
        return hn(s);
      case l:
      case f:
        return new te(+s);
      case B:
        return or(s, k);
      case z:
      case ee:
      case q:
      case F:
      case U:
      case h:
      case y:
      case b:
      case g:
        return Zo(s, k);
      case m:
        return sa(s, k, v);
      case E:
      case T:
        return new te(s);
      case C:
        return la(s);
      case _:
        return Xo(s, k, v);
      case w:
        return Qo(s);
    }
  }
  function oi(s, d) {
    return d = d ?? a, !!d && (typeof s == "number" || V.test(s)) && s > -1 && s % 1 == 0 && s < d;
  }
  function ii(s) {
    var d = typeof s;
    return d == "string" || d == "number" || d == "symbol" || d == "boolean" ? s !== "__proto__" : s === null;
  }
  function si(s) {
    return !!Zn && Zn in s;
  }
  function ca(s) {
    var d = s && s.constructor, v = typeof d == "function" && d.prototype || wr;
    return s === v;
  }
  function Le(s) {
    if (s != null) {
      try {
        return ea.call(s);
      } catch {
      }
      try {
        return s + "";
      } catch {
      }
    }
    return "";
  }
  function ua(s) {
    return pn(s, !0, !0);
  }
  function fa(s, d) {
    return s === d || s !== s && d !== d;
  }
  function kr(s) {
    return li(s) && ct.call(s, "callee") && (!ra.call(s, "callee") || xr.call(s) == o);
  }
  var gn = Array.isArray;
  function Tr(s) {
    return s != null && pa(s.length) && !yn(s);
  }
  function li(s) {
    return ha(s) && Tr(s);
  }
  var da = Ar || ui;
  function yn(s) {
    var d = dt(s) ? xr.call(s) : "";
    return d == u || d == p;
  }
  function pa(s) {
    return typeof s == "number" && s > -1 && s % 1 == 0 && s <= a;
  }
  function dt(s) {
    var d = typeof s;
    return !!s && (d == "object" || d == "function");
  }
  function ha(s) {
    return !!s && typeof s == "object";
  }
  function vn(s) {
    return Tr(s) ? Cr(s) : Jo(s);
  }
  function ci() {
    return [];
  }
  function ui() {
    return !1;
  }
  e.exports = ua;
})(Ja, Ja.exports);
var mw = Ja.exports;
const _t = /* @__PURE__ */ nl(mw);
var Xa = { exports: {} };
Xa.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", a = 1, o = 2, i = 9007199254740991, l = "[object Arguments]", f = "[object Array]", c = "[object AsyncFunction]", u = "[object Boolean]", p = "[object Date]", m = "[object Error]", E = "[object Function]", S = "[object GeneratorFunction]", A = "[object Map]", C = "[object Number]", _ = "[object Null]", T = "[object Object]", w = "[object Promise]", I = "[object Proxy]", D = "[object RegExp]", B = "[object Set]", z = "[object String]", ee = "[object Symbol]", q = "[object Undefined]", F = "[object WeakMap]", U = "[object ArrayBuffer]", h = "[object DataView]", y = "[object Float32Array]", b = "[object Float64Array]", g = "[object Int8Array]", j = "[object Int16Array]", R = "[object Int32Array]", L = "[object Uint8Array]", V = "[object Uint8ClampedArray]", Y = "[object Uint16Array]", Qe = "[object Uint32Array]", Rt = /[\\^$.*+?()[\]{}|]/g, be = /^\[object .+?Constructor\]$/, Ze = /^(?:0|[1-9]\d*)$/, ie = {};
  ie[y] = ie[b] = ie[g] = ie[j] = ie[R] = ie[L] = ie[V] = ie[Y] = ie[Qe] = !0, ie[l] = ie[f] = ie[U] = ie[u] = ie[h] = ie[p] = ie[m] = ie[E] = ie[A] = ie[C] = ie[T] = ie[D] = ie[B] = ie[z] = ie[F] = !1;
  var Xt = typeof at == "object" && at && at.Object === Object && at, en = typeof self == "object" && self && self.Object === Object && self, ze = Xt || en || Function("return this")(), Qt = t && !t.nodeType && t, vr = Qt && !0 && e && !e.nodeType && e, Zt = vr && vr.exports === Qt, er = Zt && Xt.process, br = function() {
    try {
      return er && er.binding && er.binding("util");
    } catch {
    }
  }(), tn = br && br.isTypedArray;
  function Xn(s, d) {
    for (var v = -1, k = s == null ? 0 : s.length, te = 0, W = []; ++v < k; ) {
      var se = s[v];
      d(se, v, s) && (W[te++] = se);
    }
    return W;
  }
  function rn(s, d) {
    for (var v = -1, k = d.length, te = s.length; ++v < k; )
      s[te + v] = d[v];
    return s;
  }
  function Qn(s, d) {
    for (var v = -1, k = s == null ? 0 : s.length; ++v < k; )
      if (d(s[v], v, s))
        return !0;
    return !1;
  }
  function Eo(s, d) {
    for (var v = -1, k = Array(s); ++v < s; )
      k[v] = d(v);
    return k;
  }
  function Oo(s) {
    return function(d) {
      return s(d);
    };
  }
  function wr(s, d) {
    return s.has(d);
  }
  function nn(s, d) {
    return s == null ? void 0 : s[d];
  }
  function Zn(s) {
    var d = -1, v = Array(s.size);
    return s.forEach(function(k, te) {
      v[++d] = [te, k];
    }), v;
  }
  function ea(s, d) {
    return function(v) {
      return s(d(v));
    };
  }
  function ct(s) {
    var d = -1, v = Array(s.size);
    return s.forEach(function(k) {
      v[++d] = k;
    }), v;
  }
  var xr = Array.prototype, Co = Function.prototype, tr = Object.prototype, Sr = ze["__core-js_shared__"], an = Co.toString, Je = tr.hasOwnProperty, ta = function() {
    var s = /[^.]+$/.exec(Sr && Sr.keys && Sr.keys.IE_PROTO || "");
    return s ? "Symbol(src)_1." + s : "";
  }(), ra = tr.toString, Po = RegExp(
    "^" + an.call(Je).replace(Rt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), on = Zt ? ze.Buffer : void 0, Ar = ze.Symbol, na = ze.Uint8Array, Er = tr.propertyIsEnumerable, rr = xr.splice, et = Ar ? Ar.toStringTag : void 0, Or = Object.getOwnPropertySymbols, sn = on ? on.isBuffer : void 0, nr = ea(Object.keys, Object), ln = Et(ze, "DataView"), ar = Et(ze, "Map"), cn = Et(ze, "Promise"), un = Et(ze, "Set"), fn = Et(ze, "WeakMap"), Nt = Et(Object, "create"), aa = Le(ln), At = Le(ar), _o = Le(cn), ko = Le(un), To = Le(fn), oa = Ar ? Ar.prototype : void 0, dn = oa ? oa.valueOf : void 0;
  function Pe(s) {
    var d = -1, v = s == null ? 0 : s.length;
    for (this.clear(); ++d < v; ) {
      var k = s[d];
      this.set(k[0], k[1]);
    }
  }
  function $o() {
    this.__data__ = Nt ? Nt(null) : {}, this.size = 0;
  }
  function Fo(s) {
    var d = this.has(s) && delete this.__data__[s];
    return this.size -= d ? 1 : 0, d;
  }
  function Io(s) {
    var d = this.__data__;
    if (Nt) {
      var v = d[s];
      return v === n ? void 0 : v;
    }
    return Je.call(d, s) ? d[s] : void 0;
  }
  function Do(s) {
    var d = this.__data__;
    return Nt ? d[s] !== void 0 : Je.call(d, s);
  }
  function Lo(s, d) {
    var v = this.__data__;
    return this.size += this.has(s) ? 0 : 1, v[s] = Nt && d === void 0 ? n : d, this;
  }
  Pe.prototype.clear = $o, Pe.prototype.delete = Fo, Pe.prototype.get = Io, Pe.prototype.has = Do, Pe.prototype.set = Lo;
  function ke(s) {
    var d = -1, v = s == null ? 0 : s.length;
    for (this.clear(); ++d < v; ) {
      var k = s[d];
      this.set(k[0], k[1]);
    }
  }
  function Ro() {
    this.__data__ = [], this.size = 0;
  }
  function No(s) {
    var d = this.__data__, v = _r(d, s);
    if (v < 0)
      return !1;
    var k = d.length - 1;
    return v == k ? d.pop() : rr.call(d, v, 1), --this.size, !0;
  }
  function Mo(s) {
    var d = this.__data__, v = _r(d, s);
    return v < 0 ? void 0 : d[v][1];
  }
  function Bo(s) {
    return _r(this.__data__, s) > -1;
  }
  function jo(s, d) {
    var v = this.__data__, k = _r(v, s);
    return k < 0 ? (++this.size, v.push([s, d])) : v[k][1] = d, this;
  }
  ke.prototype.clear = Ro, ke.prototype.delete = No, ke.prototype.get = Mo, ke.prototype.has = Bo, ke.prototype.set = jo;
  function Ne(s) {
    var d = -1, v = s == null ? 0 : s.length;
    for (this.clear(); ++d < v; ) {
      var k = s[d];
      this.set(k[0], k[1]);
    }
  }
  function qo() {
    this.size = 0, this.__data__ = {
      hash: new Pe(),
      map: new (ar || ke)(),
      string: new Pe()
    };
  }
  function zo(s) {
    var d = tt(this, s).delete(s);
    return this.size -= d ? 1 : 0, d;
  }
  function Uo(s) {
    return tt(this, s).get(s);
  }
  function Vo(s) {
    return tt(this, s).has(s);
  }
  function Ho(s, d) {
    var v = tt(this, s), k = v.size;
    return v.set(s, d), this.size += v.size == k ? 0 : 1, this;
  }
  Ne.prototype.clear = qo, Ne.prototype.delete = zo, Ne.prototype.get = Uo, Ne.prototype.has = Vo, Ne.prototype.set = Ho;
  function Cr(s) {
    var d = -1, v = s == null ? 0 : s.length;
    for (this.__data__ = new Ne(); ++d < v; )
      this.add(s[d]);
  }
  function ia(s) {
    return this.__data__.set(s, n), this;
  }
  function Pr(s) {
    return this.__data__.has(s);
  }
  Cr.prototype.add = Cr.prototype.push = ia, Cr.prototype.has = Pr;
  function ut(s) {
    var d = this.__data__ = new ke(s);
    this.size = d.size;
  }
  function pn() {
    this.__data__ = new ke(), this.size = 0;
  }
  function Wo(s) {
    var d = this.__data__, v = d.delete(s);
    return this.size = d.size, v;
  }
  function Go(s) {
    return this.__data__.get(s);
  }
  function Ko(s) {
    return this.__data__.has(s);
  }
  function Yo(s, d) {
    var v = this.__data__;
    if (v instanceof ke) {
      var k = v.__data__;
      if (!ar || k.length < r - 1)
        return k.push([s, d]), this.size = ++v.size, this;
      v = this.__data__ = new Ne(k);
    }
    return v.set(s, d), this.size = v.size, this;
  }
  ut.prototype.clear = pn, ut.prototype.delete = Wo, ut.prototype.get = Go, ut.prototype.has = Ko, ut.prototype.set = Yo;
  function Jo(s, d) {
    var v = kr(s), k = !v && fa(s), te = !v && !k && Tr(s), W = !v && !k && !te && ha(s), se = v || k || te || W, le = se ? Eo(s.length, String) : [], xe = le.length;
    for (var ue in s)
      (d || Je.call(s, ue)) && !(se && // Safari 9 has enumerable `arguments.length` in strict mode.
      (ue == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      te && (ue == "offset" || ue == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      W && (ue == "buffer" || ue == "byteLength" || ue == "byteOffset") || // Skip index properties.
      ai(ue, xe))) && le.push(ue);
    return le;
  }
  function _r(s, d) {
    for (var v = s.length; v--; )
      if (ua(s[v][0], d))
        return v;
    return -1;
  }
  function hn(s, d, v) {
    var k = d(s);
    return kr(s) ? k : rn(k, v(s));
  }
  function or(s) {
    return s == null ? s === void 0 ? q : _ : et && et in Object(s) ? Ot(s) : ca(s);
  }
  function sa(s) {
    return dt(s) && or(s) == l;
  }
  function la(s, d, v, k, te) {
    return s === d ? !0 : s == null || d == null || !dt(s) && !dt(d) ? s !== s && d !== d : Xo(s, d, v, k, la, te);
  }
  function Xo(s, d, v, k, te, W) {
    var se = kr(s), le = kr(d), xe = se ? f : ft(s), ue = le ? f : ft(d);
    xe = xe == l ? T : xe, ue = ue == l ? T : ue;
    var Te = xe == T, Me = ue == T, Ae = xe == ue;
    if (Ae && Tr(s)) {
      if (!Tr(d))
        return !1;
      se = !0, Te = !1;
    }
    if (Ae && !Te)
      return W || (W = new ut()), se || ha(s) ? mn(s, d, v, k, te, W) : ti(s, d, xe, v, k, te, W);
    if (!(v & a)) {
      var $e = Te && Je.call(s, "__wrapped__"), _e = Me && Je.call(d, "__wrapped__");
      if ($e || _e) {
        var Mt = $e ? s.value() : s, Ct = _e ? d.value() : d;
        return W || (W = new ut()), te(Mt, Ct, v, k, W);
      }
    }
    return Ae ? (W || (W = new ut()), ri(s, d, v, k, te, W)) : !1;
  }
  function Qo(s) {
    if (!pa(s) || ii(s))
      return !1;
    var d = da(s) ? Po : be;
    return d.test(Le(s));
  }
  function Zo(s) {
    return dt(s) && yn(s.length) && !!ie[or(s)];
  }
  function ei(s) {
    if (!si(s))
      return nr(s);
    var d = [];
    for (var v in Object(s))
      Je.call(s, v) && v != "constructor" && d.push(v);
    return d;
  }
  function mn(s, d, v, k, te, W) {
    var se = v & a, le = s.length, xe = d.length;
    if (le != xe && !(se && xe > le))
      return !1;
    var ue = W.get(s);
    if (ue && W.get(d))
      return ue == d;
    var Te = -1, Me = !0, Ae = v & o ? new Cr() : void 0;
    for (W.set(s, d), W.set(d, s); ++Te < le; ) {
      var $e = s[Te], _e = d[Te];
      if (k)
        var Mt = se ? k(_e, $e, Te, d, s, W) : k($e, _e, Te, s, d, W);
      if (Mt !== void 0) {
        if (Mt)
          continue;
        Me = !1;
        break;
      }
      if (Ae) {
        if (!Qn(d, function(Ct, sr) {
          if (!wr(Ae, sr) && ($e === Ct || te($e, Ct, v, k, W)))
            return Ae.push(sr);
        })) {
          Me = !1;
          break;
        }
      } else if (!($e === _e || te($e, _e, v, k, W))) {
        Me = !1;
        break;
      }
    }
    return W.delete(s), W.delete(d), Me;
  }
  function ti(s, d, v, k, te, W, se) {
    switch (v) {
      case h:
        if (s.byteLength != d.byteLength || s.byteOffset != d.byteOffset)
          return !1;
        s = s.buffer, d = d.buffer;
      case U:
        return !(s.byteLength != d.byteLength || !W(new na(s), new na(d)));
      case u:
      case p:
      case C:
        return ua(+s, +d);
      case m:
        return s.name == d.name && s.message == d.message;
      case D:
      case z:
        return s == d + "";
      case A:
        var le = Zn;
      case B:
        var xe = k & a;
        if (le || (le = ct), s.size != d.size && !xe)
          return !1;
        var ue = se.get(s);
        if (ue)
          return ue == d;
        k |= o, se.set(s, d);
        var Te = mn(le(s), le(d), k, te, W, se);
        return se.delete(s), Te;
      case ee:
        if (dn)
          return dn.call(s) == dn.call(d);
    }
    return !1;
  }
  function ri(s, d, v, k, te, W) {
    var se = v & a, le = ir(s), xe = le.length, ue = ir(d), Te = ue.length;
    if (xe != Te && !se)
      return !1;
    for (var Me = xe; Me--; ) {
      var Ae = le[Me];
      if (!(se ? Ae in d : Je.call(d, Ae)))
        return !1;
    }
    var $e = W.get(s);
    if ($e && W.get(d))
      return $e == d;
    var _e = !0;
    W.set(s, d), W.set(d, s);
    for (var Mt = se; ++Me < xe; ) {
      Ae = le[Me];
      var Ct = s[Ae], sr = d[Ae];
      if (k)
        var vl = se ? k(sr, Ct, Ae, d, s, W) : k(Ct, sr, Ae, s, d, W);
      if (!(vl === void 0 ? Ct === sr || te(Ct, sr, v, k, W) : vl)) {
        _e = !1;
        break;
      }
      Mt || (Mt = Ae == "constructor");
    }
    if (_e && !Mt) {
      var ma = s.constructor, ga = d.constructor;
      ma != ga && "constructor" in s && "constructor" in d && !(typeof ma == "function" && ma instanceof ma && typeof ga == "function" && ga instanceof ga) && (_e = !1);
    }
    return W.delete(s), W.delete(d), _e;
  }
  function ir(s) {
    return hn(s, vn, ni);
  }
  function tt(s, d) {
    var v = s.__data__;
    return oi(d) ? v[typeof d == "string" ? "string" : "hash"] : v.map;
  }
  function Et(s, d) {
    var v = nn(s, d);
    return Qo(v) ? v : void 0;
  }
  function Ot(s) {
    var d = Je.call(s, et), v = s[et];
    try {
      s[et] = void 0;
      var k = !0;
    } catch {
    }
    var te = ra.call(s);
    return k && (d ? s[et] = v : delete s[et]), te;
  }
  var ni = Or ? function(s) {
    return s == null ? [] : (s = Object(s), Xn(Or(s), function(d) {
      return Er.call(s, d);
    }));
  } : ci, ft = or;
  (ln && ft(new ln(new ArrayBuffer(1))) != h || ar && ft(new ar()) != A || cn && ft(cn.resolve()) != w || un && ft(new un()) != B || fn && ft(new fn()) != F) && (ft = function(s) {
    var d = or(s), v = d == T ? s.constructor : void 0, k = v ? Le(v) : "";
    if (k)
      switch (k) {
        case aa:
          return h;
        case At:
          return A;
        case _o:
          return w;
        case ko:
          return B;
        case To:
          return F;
      }
    return d;
  });
  function ai(s, d) {
    return d = d ?? i, !!d && (typeof s == "number" || Ze.test(s)) && s > -1 && s % 1 == 0 && s < d;
  }
  function oi(s) {
    var d = typeof s;
    return d == "string" || d == "number" || d == "symbol" || d == "boolean" ? s !== "__proto__" : s === null;
  }
  function ii(s) {
    return !!ta && ta in s;
  }
  function si(s) {
    var d = s && s.constructor, v = typeof d == "function" && d.prototype || tr;
    return s === v;
  }
  function ca(s) {
    return ra.call(s);
  }
  function Le(s) {
    if (s != null) {
      try {
        return an.call(s);
      } catch {
      }
      try {
        return s + "";
      } catch {
      }
    }
    return "";
  }
  function ua(s, d) {
    return s === d || s !== s && d !== d;
  }
  var fa = sa(function() {
    return arguments;
  }()) ? sa : function(s) {
    return dt(s) && Je.call(s, "callee") && !Er.call(s, "callee");
  }, kr = Array.isArray;
  function gn(s) {
    return s != null && yn(s.length) && !da(s);
  }
  var Tr = sn || ui;
  function li(s, d) {
    return la(s, d);
  }
  function da(s) {
    if (!pa(s))
      return !1;
    var d = or(s);
    return d == E || d == S || d == c || d == I;
  }
  function yn(s) {
    return typeof s == "number" && s > -1 && s % 1 == 0 && s <= i;
  }
  function pa(s) {
    var d = typeof s;
    return s != null && (d == "object" || d == "function");
  }
  function dt(s) {
    return s != null && typeof s == "object";
  }
  var ha = tn ? Oo(tn) : Zo;
  function vn(s) {
    return gn(s) ? Jo(s) : ei(s);
  }
  function ci() {
    return [];
  }
  function ui() {
    return !1;
  }
  e.exports = li;
})(Xa, Xa.exports);
var gw = Xa.exports;
const yw = /* @__PURE__ */ nl(gw);
function vw(e, t) {
  let r = typeof e == "string" ? e : null, n = typeof e == "string" ? t : e, a = r ? wt.restore(r) : null, o = _t(typeof n == "object" ? n : n()), i = null, l = null, f = (u) => u, c = zs({ ...a ? a.data : _t(o), isDirty: !1, errors: a ? a.errors : {}, hasErrors: !1, processing: !1, progress: null, wasSuccessful: !1, recentlySuccessful: !1, data() {
    return Object.keys(o).reduce((u, p) => (u[p] = this[p], u), {});
  }, transform(u) {
    return f = u, this;
  }, defaults(u, p) {
    if (typeof n == "function")
      throw new Error("You cannot call `defaults()` when using a function to define your form data.");
    return typeof u > "u" ? o = this.data() : o = Object.assign({}, _t(o), typeof u == "string" ? { [u]: p } : u), this;
  }, reset(...u) {
    let p = _t(typeof n == "object" ? o : n()), m = _t(p);
    return u.length === 0 ? (o = m, Object.assign(this, p)) : Object.keys(p).filter((E) => u.includes(E)).forEach((E) => {
      o[E] = m[E], this[E] = p[E];
    }), this;
  }, setError(u, p) {
    return Object.assign(this.errors, typeof u == "string" ? { [u]: p } : u), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, clearErrors(...u) {
    return this.errors = Object.keys(this.errors).reduce((p, m) => ({ ...p, ...u.length > 0 && !u.includes(m) ? { [m]: this.errors[m] } : {} }), {}), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, submit(u, p, m = {}) {
    let E = f(this.data()), S = { ...m, onCancelToken: (A) => {
      if (i = A, m.onCancelToken)
        return m.onCancelToken(A);
    }, onBefore: (A) => {
      if (this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(l), m.onBefore)
        return m.onBefore(A);
    }, onStart: (A) => {
      if (this.processing = !0, m.onStart)
        return m.onStart(A);
    }, onProgress: (A) => {
      if (this.progress = A, m.onProgress)
        return m.onProgress(A);
    }, onSuccess: async (A) => {
      this.processing = !1, this.progress = null, this.clearErrors(), this.wasSuccessful = !0, this.recentlySuccessful = !0, l = setTimeout(() => this.recentlySuccessful = !1, 2e3);
      let C = m.onSuccess ? await m.onSuccess(A) : null;
      return o = _t(this.data()), this.isDirty = !1, C;
    }, onError: (A) => {
      if (this.processing = !1, this.progress = null, this.clearErrors().setError(A), m.onError)
        return m.onError(A);
    }, onCancel: () => {
      if (this.processing = !1, this.progress = null, m.onCancel)
        return m.onCancel();
    }, onFinish: (A) => {
      if (this.processing = !1, this.progress = null, i = null, m.onFinish)
        return m.onFinish(A);
    } };
    u === "delete" ? wt.delete(p, { ...S, data: E }) : wt[u](p, E, S);
  }, get(u, p) {
    this.submit("get", u, p);
  }, post(u, p) {
    this.submit("post", u, p);
  }, put(u, p) {
    this.submit("put", u, p);
  }, patch(u, p) {
    this.submit("patch", u, p);
  }, delete(u, p) {
    this.submit("delete", u, p);
  }, cancel() {
    i && i.cancel();
  }, __rememberable: r === null, __remember() {
    return { data: this.data(), errors: this.errors };
  }, __restore(u) {
    Object.assign(this, u.data), this.setError(u.errors);
  } });
  return $t(c, (u) => {
    c.isDirty = !yw(c.data(), o), r && wt.remember(_t(u.__remember()), r);
  }, { immediate: !0, deep: !0 }), c;
}
var Ue = Q(null), je = Q(null), zi = Wd(null), Sa = Q(null), nu = null;
St({ name: "Inertia", props: { initialPage: { type: Object, required: !0 }, initialComponent: { type: Object, required: !1 }, resolveComponent: { type: Function, required: !1 }, titleCallback: { type: Function, required: !1, default: (e) => e }, onHeadUpdate: { type: Function, required: !1, default: () => () => {
} } }, setup({ initialPage: e, initialComponent: t, resolveComponent: r, titleCallback: n, onHeadUpdate: a }) {
  Ue.value = t ? wl(t) : null, je.value = e, Sa.value = null;
  let o = typeof window > "u";
  return nu = aw(o, n, a), o || (wt.init({ initialPage: e, resolveComponent: r, swapComponent: async (i) => {
    Ue.value = wl(i.component), je.value = i.page, Sa.value = i.preserveState ? Sa.value : Date.now();
  } }), wt.on("navigate", () => nu.forceUpdate())), () => {
    if (Ue.value) {
      Ue.value.inheritAttrs = !!Ue.value.inheritAttrs;
      let i = Ft(Ue.value, { ...je.value.props, key: Sa.value });
      return zi.value && (Ue.value.layout = zi.value, zi.value = null), Ue.value.layout ? typeof Ue.value.layout == "function" ? Ue.value.layout(Ft, i) : (Array.isArray(Ue.value.layout) ? Ue.value.layout : [Ue.value.layout]).concat(i).reverse().reduce((l, f) => (f.inheritAttrs = !!f.inheritAttrs, Ft(f, { ...je.value.props }, () => l))) : i;
    }
  };
} });
function bw() {
  return zs({ props: ne(() => {
    var e;
    return (e = je.value) == null ? void 0 : e.props;
  }), url: ne(() => {
    var e;
    return (e = je.value) == null ? void 0 : e.url;
  }), component: ne(() => {
    var e;
    return (e = je.value) == null ? void 0 : e.component;
  }), version: ne(() => {
    var e;
    return (e = je.value) == null ? void 0 : e.version;
  }), clearHistory: ne(() => {
    var e;
    return (e = je.value) == null ? void 0 : e.clearHistory;
  }), deferredProps: ne(() => {
    var e;
    return (e = je.value) == null ? void 0 : e.deferredProps;
  }), mergeProps: ne(() => {
    var e;
    return (e = je.value) == null ? void 0 : e.mergeProps;
  }), scrollRegions: ne(() => {
    var e;
    return (e = je.value) == null ? void 0 : e.scrollRegions;
  }), rememberedState: ne(() => {
    var e;
    return (e = je.value) == null ? void 0 : e.rememberedState;
  }), encryptHistory: ne(() => {
    var e;
    return (e = je.value) == null ? void 0 : e.encryptHistory;
  }) });
}
var ww = St({ name: "Deferred", props: { data: { type: [String, Array], required: !0 } }, render() {
  let e = Array.isArray(this.$props.data) ? this.$props.data : [this.$props.data];
  if (!this.$slots.fallback)
    throw new Error("`<Deferred>` requires a `<template #fallback>` slot");
  return e.every((t) => this.$page.props[t] !== void 0) ? this.$slots.default() : this.$slots.fallback();
} });
St({ props: { title: { type: String, required: !1 } }, data() {
  return { provider: this.$headManager.createProvider() };
}, beforeUnmount() {
  this.provider.disconnect();
}, methods: { isUnaryTag(e) {
  return ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"].indexOf(e.type) > -1;
}, renderTagStart(e) {
  e.props = e.props || {}, e.props.inertia = e.props["head-key"] !== void 0 ? e.props["head-key"] : "";
  let t = Object.keys(e.props).reduce((r, n) => {
    let a = e.props[n];
    return ["key", "head-key"].includes(n) ? r : a === "" ? r + ` ${n}` : r + ` ${n}="${a}"`;
  }, "");
  return `<${e.type}${t}>`;
}, renderTagChildren(e) {
  return typeof e.children == "string" ? e.children : e.children.reduce((t, r) => t + this.renderTag(r), "");
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
St({ name: "Link", props: { as: { type: String, default: "a" }, data: { type: Object, default: () => ({}) }, href: { type: String, required: !0 }, method: { type: String, default: "get" }, replace: { type: Boolean, default: !1 }, preserveScroll: { type: Boolean, default: !1 }, preserveState: { type: Boolean, default: null }, only: { type: Array, default: () => [] }, except: { type: Array, default: () => [] }, headers: { type: Object, default: () => ({}) }, queryStringArrayFormat: { type: String, default: "brackets" }, async: { type: Boolean, default: !1 }, prefetch: { type: [Boolean, String, Array], default: !1 }, cacheFor: { type: [Number, String, Array], default: 0 }, onStart: { type: Function, default: (e) => {
} }, onProgress: { type: Function, default: () => {
} }, onFinish: { type: Function, default: () => {
} }, onBefore: { type: Function, default: () => {
} }, onCancel: { type: Function, default: () => {
} }, onSuccess: { type: Function, default: () => {
} }, onError: { type: Function, default: () => {
} }, onCancelToken: { type: Function, default: () => {
} } }, setup(e, { slots: t, attrs: r }) {
  let n = Q(0), a = Q(null), o = (() => e.prefetch === !0 ? ["hover"] : e.prefetch === !1 ? [] : Array.isArray(e.prefetch) ? e.prefetch : [e.prefetch])(), i = (() => e.cacheFor !== 0 ? e.cacheFor : o.length === 1 && o[0] === "click" ? 0 : 3e4)();
  Ke(() => {
    o.includes("mount") && A();
  }), Yr(() => {
    clearTimeout(a.value);
  });
  let l = e.method.toLowerCase(), f = l !== "get" ? "button" : e.as.toLowerCase(), c = ne(() => gl(l, e.href || "", e.data, e.queryStringArrayFormat)), u = ne(() => c.value[0]), p = ne(() => c.value[1]), m = ne(() => ({ a: { href: u.value }, button: { type: "button" } })), E = { data: p.value, method: l, replace: e.replace, preserveScroll: e.preserveScroll, preserveState: e.preserveState ?? l !== "get", only: e.only, except: e.except, headers: e.headers, async: e.async }, S = { ...E, onCancelToken: e.onCancelToken, onBefore: e.onBefore, onStart: (w) => {
    n.value++, e.onStart(w);
  }, onProgress: e.onProgress, onFinish: (w) => {
    n.value--, e.onFinish(w);
  }, onCancel: e.onCancel, onSuccess: e.onSuccess, onError: e.onError }, A = () => {
    wt.prefetch(u.value, E, { cacheFor: i });
  }, C = { onClick: (w) => {
    Ra(w) && (w.preventDefault(), wt.visit(u.value, S));
  } }, _ = { onMouseenter: () => {
    a.value = setTimeout(() => {
      A();
    }, 75);
  }, onMouseleave: () => {
    clearTimeout(a.value);
  }, onClick: C.onClick }, T = { onMousedown: (w) => {
    Ra(w) && (w.preventDefault(), A());
  }, onMouseup: (w) => {
    w.preventDefault(), wt.visit(u.value, S);
  }, onClick: (w) => {
    Ra(w) && w.preventDefault();
  } };
  return () => Ft(f, { ...r, ...m.value[f] || {}, "data-loading": n.value > 0 ? "" : void 0, ...(() => o.includes("hover") ? _ : o.includes("click") ? T : C)() }, t);
} });
St({ name: "WhenVisible", props: { data: { type: [String, Array] }, params: { type: Object }, buffer: { type: Number, default: 0 }, as: { type: String, default: "div" }, always: { type: Boolean, default: !1 } }, data() {
  return { loaded: !1, fetching: !1, observer: null };
}, unmounted() {
  var e;
  (e = this.observer) == null || e.disconnect();
}, mounted() {
  this.observer = new IntersectionObserver((e) => {
    if (!e[0].isIntersecting || (this.$props.always || this.observer.disconnect(), this.fetching))
      return;
    this.fetching = !0;
    let t = this.getReloadParams();
    wt.reload({ ...t, onStart: (r) => {
      var n;
      this.fetching = !0, (n = t.onStart) == null || n.call(t, r);
    }, onFinish: (r) => {
      var n;
      this.loaded = !0, this.fetching = !1, (n = t.onFinish) == null || n.call(t, r);
    } });
  }, { rootMargin: `${this.$props.buffer}px` }), this.observer.observe(this.$el.nextSibling);
}, methods: { getReloadParams() {
  if (this.$props.data)
    return { only: Array.isArray(this.$props.data) ? this.$props.data : [this.$props.data] };
  if (!this.$props.params)
    throw new Error("You must provide either a `data` or `params` prop.");
  return this.$props.params;
} }, render() {
  let e = [];
  return (this.$props.always || !this.loaded) && e.push(Ft(this.$props.as)), this.loaded ? this.$slots.default && e.push(this.$slots.default()) : e.push(this.$slots.fallback ? this.$slots.fallback() : null), e;
} });
function p4(e) {
  return e.toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
function xw(e) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP"
  }).format(e);
}
function h4(e) {
  return bw().props.auth.permissions.includes(e);
}
let Ds = null;
function m4(e) {
  Ds = e;
}
function Kn() {
  return Ds === null && console.error(
    `Inertia router is not set. Please set it first:

// app.js
import { setInertiaRouter } from '@nb/vue-components';
import { router } from '@inertiajs/vue3';
// createInertiaApp(...);
setInertiaRouter(router);

`
  ), Ds;
}
let Ls = null;
function g4(e) {
  Ls = e;
}
function Sw() {
  return Ls === null && console.error(
    `Inertia page is not set. Please set it first:

// app.js
import { setInertiaPage } from '@nb/vue-components';
// createInertiaApp(...);
setInertiaPage(page);

`
  ), Ls;
}
const it = St({
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
  setup(e, { slots: t, attrs: r }) {
    return () => {
      const n = Kn(), a = e.as.toLowerCase(), o = e.method.toLowerCase(), [i, l] = gl(
        o,
        e.href || "",
        e.data,
        e.queryStringArrayFormat
      );
      return a === "a" && o !== "get" && console.warn(
        `Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${i}" method="${o}" as="button">...</Link>`
      ), Ft(
        e.as,
        {
          ...r,
          ...a === "a" ? { href: i } : {},
          onClick: (f) => {
            Ra(f) && (f.preventDefault(), n.visit(i, {
              data: l,
              method: o,
              replace: e.replace,
              preserveScroll: e.preserveScroll,
              preserveState: e.preserveState ?? o !== "get",
              only: e.only,
              headers: e.headers,
              onCancelToken: r.onCancelToken || (() => ({})),
              onBefore: r.onBefore || (() => ({})),
              onStart: r.onStart || (() => ({})),
              onProgress: r.onProgress || (() => ({})),
              onFinish: r.onFinish || (() => ({})),
              onCancel: r.onCancel || (() => ({})),
              onSuccess: r.onSuccess || (() => ({})),
              onError: r.onError || (() => ({}))
            }));
          }
        },
        t
      );
    };
  }
});
function Yn(e, t, r, n) {
  function a(o) {
    return o instanceof r ? o : new r(function(i) {
      i(o);
    });
  }
  return new (r || (r = Promise))(function(o, i) {
    function l(u) {
      try {
        c(n.next(u));
      } catch (p) {
        i(p);
      }
    }
    function f(u) {
      try {
        c(n.throw(u));
      } catch (p) {
        i(p);
      }
    }
    function c(u) {
      u.done ? o(u.value) : a(u.value).then(l, f);
    }
    c((n = n.apply(e, t || [])).next());
  });
}
function Jn(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, a, o, i = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return i.next = l(0), i.throw = l(1), i.return = l(2), typeof Symbol == "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function l(c) {
    return function(u) {
      return f([c, u]);
    };
  }
  function f(c) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; i && (i = 0, c[0] && (r = 0)), r; )
      try {
        if (n = 1, a && (o = c[0] & 2 ? a.return : c[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, c[1])).done)
          return o;
        switch (a = 0, o && (c = [c[0] & 2, o.value]), c[0]) {
          case 0:
          case 1:
            o = c;
            break;
          case 4:
            return r.label++, { value: c[1], done: !1 };
          case 5:
            r.label++, a = c[1], c = [0];
            continue;
          case 7:
            c = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!o || c[1] > o[0] && c[1] < o[3])) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = c;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(c);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        c = t.call(e, r);
      } catch (u) {
        c = [6, u], a = 0;
      } finally {
        n = o = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function Aw(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), a, o = [], i;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = n.next()).done; )
      o.push(a.value);
  } catch (l) {
    i = { error: l };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return o;
}
function Ew() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(Aw(arguments[t]));
  return e;
}
var Ow = /* @__PURE__ */ new Map([
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
function bo(e, t) {
  var r = Cw(e);
  if (typeof r.path != "string") {
    var n = e.webkitRelativePath;
    Object.defineProperty(r, "path", {
      value: typeof t == "string" ? t : typeof n == "string" && n.length > 0 ? n : e.name,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return r;
}
function Cw(e) {
  var t = e.name, r = t && t.lastIndexOf(".") !== -1;
  if (r && !e.type) {
    var n = t.split(".").pop().toLowerCase(), a = Ow.get(n);
    a && Object.defineProperty(e, "type", {
      value: a,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
var Pw = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function _w(e) {
  return Yn(this, void 0, void 0, function() {
    return Jn(this, function(t) {
      return [2, kw(e) && e.dataTransfer ? Fw(e.dataTransfer, e.type) : Tw(e)];
    });
  });
}
function kw(e) {
  return !!e.dataTransfer;
}
function Tw(e) {
  var t = $w(e.target) ? e.target.files ? Rs(e.target.files) : [] : [];
  return t.map(function(r) {
    return bo(r);
  });
}
function $w(e) {
  return e !== null;
}
function Fw(e, t) {
  return Yn(this, void 0, void 0, function() {
    var r, n;
    return Jn(this, function(a) {
      switch (a.label) {
        case 0:
          return e.items ? (r = Rs(e.items).filter(function(o) {
            return o.kind === "file";
          }), t !== "drop" ? [2, r] : [4, Promise.all(r.map(Iw))]) : [3, 2];
        case 1:
          return n = a.sent(), [2, au(vd(n))];
        case 2:
          return [2, au(Rs(e.files).map(function(o) {
            return bo(o);
          }))];
      }
    });
  });
}
function au(e) {
  return e.filter(function(t) {
    return Pw.indexOf(t.name) === -1;
  });
}
function Rs(e) {
  for (var t = [], r = 0; r < e.length; r++) {
    var n = e[r];
    t.push(n);
  }
  return t;
}
function Iw(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return ou(e);
  var t = e.webkitGetAsEntry();
  return t && t.isDirectory ? bd(t) : ou(e);
}
function vd(e) {
  return e.reduce(function(t, r) {
    return Ew(t, Array.isArray(r) ? vd(r) : [r]);
  }, []);
}
function ou(e) {
  var t = e.getAsFile();
  if (!t)
    return Promise.reject(e + " is not a File");
  var r = bo(t);
  return Promise.resolve(r);
}
function Dw(e) {
  return Yn(this, void 0, void 0, function() {
    return Jn(this, function(t) {
      return [2, e.isDirectory ? bd(e) : Lw(e)];
    });
  });
}
function bd(e) {
  var t = e.createReader();
  return new Promise(function(r, n) {
    var a = [];
    function o() {
      var i = this;
      t.readEntries(function(l) {
        return Yn(i, void 0, void 0, function() {
          var f, c, u;
          return Jn(this, function(p) {
            switch (p.label) {
              case 0:
                if (l.length)
                  return [3, 5];
                p.label = 1;
              case 1:
                return p.trys.push([1, 3, , 4]), [4, Promise.all(a)];
              case 2:
                return f = p.sent(), r(f), [3, 4];
              case 3:
                return c = p.sent(), n(c), [3, 4];
              case 4:
                return [3, 6];
              case 5:
                u = Promise.all(l.map(Dw)), a.push(u), o(), p.label = 6;
              case 6:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, function(l) {
        n(l);
      });
    }
    o();
  });
}
function Lw(e) {
  return Yn(this, void 0, void 0, function() {
    return Jn(this, function(t) {
      return [2, new Promise(function(r, n) {
        e.file(function(a) {
          var o = bo(a, e.fullPath);
          r(o);
        }, function(a) {
          n(a);
        });
      })];
    });
  });
}
var wd = function(e, t) {
  if (e && t) {
    var r = Array.isArray(t) ? t : t.split(",");
    if (r.length === 0)
      return !0;
    var n = e.name || "", a = (e.type || "").toLowerCase(), o = a.replace(/\/.*$/, "");
    return r.some(function(i) {
      var l = i.trim().toLowerCase();
      return l.charAt(0) === "." ? n.toLowerCase().endsWith(l) : l.endsWith("/*") ? o === l.replace(/\/.*$/, "") : a === l;
    });
  }
  return !0;
}, Ve = function() {
  return Ve = Object.assign || function(t) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
    }
    return t;
  }, Ve.apply(this, arguments);
};
function iu(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
}
function Rw(e, t, r, n) {
  function a(o) {
    return o instanceof r ? o : new r(function(i) {
      i(o);
    });
  }
  return new (r || (r = Promise))(function(o, i) {
    function l(u) {
      try {
        c(n.next(u));
      } catch (p) {
        i(p);
      }
    }
    function f(u) {
      try {
        c(n.throw(u));
      } catch (p) {
        i(p);
      }
    }
    function c(u) {
      u.done ? o(u.value) : a(u.value).then(l, f);
    }
    c((n = n.apply(e, t || [])).next());
  });
}
function Nw(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, a, o, i;
  return i = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function l(c) {
    return function(u) {
      return f([c, u]);
    };
  }
  function f(c) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; i && (i = 0, c[0] && (r = 0)), r; )
      try {
        if (n = 1, a && (o = c[0] & 2 ? a.return : c[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, c[1])).done)
          return o;
        switch (a = 0, o && (c = [c[0] & 2, o.value]), c[0]) {
          case 0:
          case 1:
            o = c;
            break;
          case 4:
            return r.label++, { value: c[1], done: !1 };
          case 5:
            r.label++, a = c[1], c = [0];
            continue;
          case 7:
            c = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!o || c[1] > o[0] && c[1] < o[3])) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = c;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(c);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        c = t.call(e, r);
      } catch (u) {
        c = [6, u], a = 0;
      } finally {
        n = o = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function Ns(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, o; n < a; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
}
function Mw(e) {
  return e.includes("MSIE") || e.includes("Trident/");
}
function Bw(e) {
  return e.includes("Edge/");
}
function jw(e) {
  return e === void 0 && (e = window.navigator.userAgent), Mw(e) || Bw(e);
}
function su(e) {
  e.preventDefault();
}
function Aa(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
    return t === "Files" || t === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function Qa(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
var qw = "file-invalid-type", zw = "file-too-large", Uw = "file-too-small", Vw = "too-many-files", Hw = {
  code: Vw,
  message: "Too many files"
}, Ww = function(e) {
  e = Array.isArray(e) && e.length === 1 ? e[0] : e;
  var t = Array.isArray(e) ? "one of ".concat(e.join(", ")) : e;
  return {
    code: qw,
    message: "File type must be ".concat(t)
  };
};
function xn(e) {
  return e != null;
}
var Gw = wd.default, Kw = Gw || wd;
function xd(e, t) {
  var r = e.type === "application/x-moz-file" || Kw(e, t);
  return [r, r ? null : Ww(t)];
}
var lu = function(e) {
  return {
    code: zw,
    message: "File is larger than ".concat(e, " bytes")
  };
}, cu = function(e) {
  return {
    code: Uw,
    message: "File is smaller than ".concat(e, " bytes")
  };
};
function Sd(e, t, r) {
  if (xn(e.size) && e.size)
    if (xn(t) && xn(r)) {
      if (e.size > r)
        return [!1, lu(r)];
      if (e.size < t)
        return [!1, cu(t)];
    } else {
      if (xn(t) && e.size < t)
        return [!1, cu(t)];
      if (xn(r) && e.size > r)
        return [!1, lu(r)];
    }
  return [!0, null];
}
function kt() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return function(r) {
    for (var n = [], a = 1; a < arguments.length; a++)
      n[a - 1] = arguments[a];
    return e.some(function(o) {
      return !Qa(r) && o && o.apply(void 0, Ns([r], n, !1)), Qa(r);
    });
  };
}
function Yw(e) {
  var t = e.files, r = e.accept, n = e.minSize, a = e.maxSize, o = e.multiple, i = e.maxFiles;
  return !o && t.length > 1 || o && i >= 1 && t.length > i ? !1 : t.every(function(l) {
    var f = xd(l, r)[0], c = Sd(l, n, a)[0];
    return f && c;
  });
}
var Jw = {
  disabled: !1,
  getFilesFromEvent: _w,
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
function Ad(e) {
  e === void 0 && (e = {});
  var t = Q(Ve(Ve({}, Jw), e));
  $t(function() {
    return Ve({}, e);
  }, function(F) {
    t.value = Ve(Ve({}, t.value), F);
  });
  var r = Q(), n = Q(), a = zs({
    isFocused: !1,
    isFileDialogActive: !1,
    isDragActive: !1,
    isDragAccept: !1,
    isDragReject: !1,
    draggedFiles: [],
    acceptedFiles: [],
    fileRejections: []
  }), o = function() {
    n.value && (a.isFileDialogActive = !0, n.value.value = "", n.value.click());
  }, i = function() {
    var F = t.value.onFileDialogCancel;
    a.isFileDialogActive && setTimeout(function() {
      if (n.value) {
        var U = n.value.files;
        U && !U.length && (a.isFileDialogActive = !1, typeof F == "function" && F());
      }
    }, 300);
  };
  function l() {
    a.isFocused = !0;
  }
  function f() {
    a.isFocused = !1;
  }
  function c() {
    var F = t.value.noClick;
    F || (jw() ? setTimeout(o, 0) : o());
  }
  var u = Q([]), p = function(F) {
    if (r.value) {
      var U = r.value.$el || r.value;
      U.contains(F.target) || (F.preventDefault(), u.value = []);
    }
  };
  Ke(function() {
    window.addEventListener("focus", i, !1);
    var F = t.value.preventDropOnDocument;
    F && (document.addEventListener("dragover", su, !1), document.addEventListener("drop", p, !1));
  }), Yr(function() {
    window.removeEventListener("focus", i, !1);
    var F = t.value.preventDropOnDocument;
    F && (document.removeEventListener("dragover", su), document.removeEventListener("drop", p));
  });
  function m(F) {
    var U = t.value.noDragEventsBubbling;
    U && F.stopPropagation();
  }
  function E(F) {
    return Rw(this, void 0, void 0, function() {
      var U, h, y, b, g;
      return Nw(this, function(j) {
        switch (j.label) {
          case 0:
            return U = t.value, h = U.getFilesFromEvent, y = U.noDragEventsBubbling, b = U.onDragEnter, F.preventDefault(), m(F), u.value = Ns(Ns([], u.value, !0), [F.target], !1), Aa(F) ? h ? [4, h(F)] : [2] : [3, 2];
          case 1:
            if (g = j.sent(), g || (g = []), Qa(F) && !y)
              return [2];
            a.draggedFiles = g, a.isDragActive = !0, b && b(F), j.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }
  function S(F) {
    var U = t.value.onDragOver;
    if (F.preventDefault(), m(F), F.dataTransfer)
      try {
        F.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return Aa(F) && U && U(F), !1;
  }
  function A(F) {
    F.preventDefault(), m(F);
    var U = u.value.filter(function(b) {
      if (!r.value)
        return !1;
      var g = r.value.$el || r.value;
      return g.contains(b);
    }), h = U.indexOf(F.target);
    if (h !== -1 && U.splice(h, 1), u.value = U, !(U.length > 0)) {
      a.draggedFiles = [], a.isDragActive = !1;
      var y = t.value.onDragLeave;
      Aa(F) && y && y(F);
    }
  }
  function C(F) {
    F.preventDefault(), m(F), u.value = [];
    var U = t.value, h = U.getFilesFromEvent, y = U.noDragEventsBubbling, b = U.accept, g = U.minSize, j = U.maxSize, R = U.multiple, L = U.maxFiles, V = U.onDrop, Y = U.onDropRejected, Qe = U.onDropAccepted;
    if (Aa(F)) {
      if (!h)
        return;
      Promise.resolve(h(F)).then(function(Rt) {
        if (!(Qa(F) && !y)) {
          var be = [], Ze = [];
          Rt.forEach(function(ie) {
            var Xt = xd(ie, b), en = Xt[0], ze = Xt[1], Qt = Sd(ie, g, j), vr = Qt[0], Zt = Qt[1];
            if (en && vr)
              be.push(ie);
            else {
              var er = [ze, Zt].filter(function(br) {
                return br;
              });
              Ze.push({ file: ie, errors: er });
            }
          }), (!R && be.length > 1 || R && L >= 1 && be.length > L) && (be.forEach(function(ie) {
            Ze.push({ file: ie, errors: [Hw] });
          }), be.splice(0)), a.acceptedFiles = be, a.fileRejections = Ze, V && V(be, Ze, F), Ze.length > 0 && Y && Y(Ze, F), be.length > 0 && Qe && Qe(be, F);
        }
      });
    }
    a.isFileDialogActive = !1, a.isDragActive = !1, a.draggedFiles = [], a.acceptedFiles = [], a.fileRejections = [];
  }
  var _ = function(F) {
    return t.value.disabled ? void 0 : F;
  }, T = function(F) {
    return t.value.noKeyboard ? void 0 : _(F);
  }, w = function(F) {
    return t.value.noDrag ? void 0 : _(F);
  }, I = function(F) {
    F === void 0 && (F = {});
    var U = F.onFocus, h = F.onBlur, y = F.onClick, b = F.onDragEnter, g = F.onDragenter, j = F.onDragOver, R = F.onDragover, L = F.onDragLeave, V = F.onDragleave, Y = F.onDrop, Qe = iu(F, ["onFocus", "onBlur", "onClick", "onDragEnter", "onDragenter", "onDragOver", "onDragover", "onDragLeave", "onDragleave", "onDrop"]);
    return Ve(Ve({ onFocus: T(kt(U, l)), onBlur: T(kt(h, f)), onClick: _(kt(y, c)), onDragenter: w(kt(b, g, E)), onDragover: w(kt(j, R, S)), onDragleave: w(kt(L, V, A)), onDrop: w(kt(Y, C)), ref: r }, !t.value.disabled && !t.value.noKeyboard ? { tabIndex: 0 } : {}), Qe);
  }, D = function(F) {
    F.stopPropagation();
  };
  function B(F) {
    F === void 0 && (F = {});
    var U = F.onChange, h = F.onClick, y = iu(F, ["onChange", "onClick"]), b = {
      accept: t.value.accept,
      multiple: t.value.multiple,
      style: "display: none",
      type: "file",
      onChange: _(kt(U, C)),
      onClick: _(kt(h, D)),
      autoComplete: "off",
      tabIndex: -1,
      ref: n
    };
    return Ve(Ve({}, b), y);
  }
  var z = ne(function() {
    return a.draggedFiles ? a.draggedFiles.length : 0;
  }), ee = ne(function() {
    return z.value > 0 && Yw({
      files: a.draggedFiles,
      accept: t.value.accept,
      minSize: t.value.minSize,
      maxSize: t.value.maxSize,
      multiple: t.value.multiple,
      maxFiles: t.value.maxFiles
    });
  }), q = ne(function() {
    return z.value > 0 && !ee.value;
  });
  return Ve(Ve({}, Gd(a)), { isDragAccept: ee, isDragReject: q, isFocused: ne(function() {
    return a.isFocused && !t.value.disabled;
  }), getRootProps: I, getInputProps: B, rootRef: r, inputRef: n, open: _(o) });
}
const Xw = { class: "flex w-full flex-col" }, Qw = {
  key: 0,
  class: "select-none text-black"
}, Zw = ["name"], e2 = {
  key: 1,
  class: "select-none"
}, t2 = { key: 2 }, r2 = {
  key: 3,
  class: "select-none"
}, y4 = {
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
    Kn();
    const t = e, r = Q(null), n = (c) => {
      let u = [];
      return c.split("_").join(" ").split(" ").map(function(p) {
        u.push(p[0].toUpperCase() + p.slice(1));
      }), u.join(" ");
    }, a = (c, u) => {
      var p;
      if (r.value = null, u && u.length > 0) {
        u[0].errors && (r.value = (p = u[0]) == null ? void 0 : p.errors.map((m) => m.message).join(", ")), console.error(u);
        return;
      }
      if (!c || c.length === 0) {
        r.value = `${t.field} is required`;
        return;
      }
      t.multiple ? t.form[t.field] = c : t.form[t.field] = c[0];
    }, { getRootProps: o, getInputProps: i, isDragActive: l, ...f } = Ad({
      onDrop: a,
      multiple: t.multiple,
      accept: t.accept
    });
    return (c, u) => {
      var p;
      return x(), O("div", Xw, [
        $("div", {
          class: K(["w-full rounded-lg border-2 border-dashed border-primary-200 bg-primary-50 text-primary-200 transition duration-100 ease-in-out hover:border-primary-600 hover:text-primary", {
            "border-primary-400 bg-primary-100": M(l),
            "border-red-600 bg-primary-100": t.form.errors[e.field] ?? r.value,
            [e.FileDropCustomClass]: !!e.FileDropCustomClass
          }])
        }, [
          $("div", Fn({ class: "p-4' flex h-20 w-full cursor-copy flex-col items-center justify-center font-medium" }, M(o)()), [
            e.label ? (x(), O("p", Qw, Z(e.label), 1)) : G("", !0),
            $("input", Fn(M(i)(), { name: e.field }), null, 16, Zw),
            M(l) ? (x(), O("span", e2, "Drop the " + Z(n(e.field)) + " here ...", 1)) : e.form[e.field] ? (x(), O("span", t2, Z(((p = e.form[e.field]) == null ? void 0 : p.path) ?? "File prepared"), 1)) : (x(), O("span", r2, "Drag 'n' drop " + Z(n(e.field)) + " here", 1))
          ], 16)
        ], 2),
        ge(M(Un), {
          class: "mt-2",
          message: t.form.errors[e.field] ?? r.value
        }, null, 8, ["message"])
      ]);
    };
  }
}, n2 = { class: "flex w-full" }, a2 = { key: 0 }, o2 = { key: 1 }, i2 = {
  key: 0,
  class: "flex flex-wrap gap-2 p-4"
}, s2 = ["onClick"], l2 = ["src"], c2 = ["value"], u2 = { class: "flex items-center gap-4" }, f2 = {
  key: 0,
  class: "text-sm text-gray-600"
}, d2 = {
  key: 1,
  class: "mt-2"
}, p2 = { class: "container mx-auto px-5 py-2 lg:px-8 lg:pt-8" }, h2 = { class: "-m-1 flex flex-wrap md:-m-2" }, m2 = { class: "flex w-1/3 flex-wrap" }, g2 = { class: "h-full w-full p-1 shadow md:p-2" }, y2 = ["src"], v4 = {
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
    const t = Kn(), r = e, n = vw({
      image: []
    });
    function a() {
      let p = new FormData();
      n.image.forEach((m, E) => {
        p.append(`image[${E}]`, m.file);
      }), p.append("item_type", r.itemType), p.append("item_id", r.itemId), t.post(route(r.endPoint), p, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        _method: "post",
        forceFormData: !0,
        onFinish: () => {
          n.recentlySuccessful = !0, n.image = [];
        }
      });
    }
    function o(p) {
      p.forEach((m) => {
        let E = new FileReader();
        E.onload = (S) => {
          n.image.push({ file: m, dataUrl: S.target.result });
        }, E.readAsDataURL(m);
      });
    }
    const i = (p, m) => {
      if (m && m.length > 0) {
        console.error(m);
        return;
      }
      o(p);
    };
    function l(p) {
      n.image.splice(p, 1);
    }
    const { getRootProps: f, getInputProps: c, ...u } = Ad({
      onDrop: i,
      multiple: !0,
      accept: "image/*"
    });
    return (p, m) => (x(), O(ce, null, [
      e.canUpload ? (x(), O("form", {
        key: 0,
        onSubmit: qt(a, ["prevent"]),
        class: "w-full"
      }, [
        $("div", n2, [
          $("div", {
            class: K(["w-full rounded-l-lg border-2 border-r-0 border-dashed border-primary-200 bg-primary-50 transition duration-100 ease-in-out hover:border-primary-600 hover:text-primary", { "border-primary-400 bg-primary-100": p.dragEneted }])
          }, [
            $("div", Fn({ class: "p-4' flex h-20 w-full cursor-copy items-center justify-center font-medium" }, M(f)()), [
              $("input", Xe(rt(M(c)())), null, 16),
              p.isDragActive ? (x(), O("span", a2, "Drop the files here ...")) : (x(), O("span", o2, "Drag 'n' drop images here"))
            ], 16),
            M(n).image.length > 0 ? (x(), O("div", i2, [
              (x(!0), O(ce, null, Ge(M(n).image, (E, S) => (x(), O("div", {
                class: "relative cursor-pointer select-none",
                onClick: (A) => l(S),
                key: S
              }, [
                m[0] || (m[0] = $("div", { class: "absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 font-bold text-white" }, " - ", -1)),
                $("img", {
                  src: E.dataUrl,
                  class: "h-auto max-w-[150px]"
                }, null, 8, l2)
              ], 8, s2))), 128))
            ])) : G("", !0)
          ], 2),
          ge(M(Bd), {
            class: K(["inline rounded-l-none", { "cursor-not-allowed": M(n).image.length == 0 }]),
            disabled: M(n).image.length == 0
          }, {
            default: de(() => m[1] || (m[1] = [
              ye(" Upload ")
            ])),
            _: 1
          }, 8, ["class", "disabled"]),
          M(n).progress ? (x(), O("progress", {
            key: 0,
            value: M(n).progress.percentage,
            max: "100"
          }, Z(M(n).progress.percentage) + "%", 9, c2)) : G("", !0)
        ]),
        p.$page.props.errors.image ? (x(), oe(M(Un), {
          key: 0,
          class: "mt-2",
          message: p.$page.props.errors.image
        }, null, 8, ["message"])) : G("", !0),
        $("div", u2, [
          ge(pr, {
            "enter-from-class": "opacity-0",
            "leave-to-class": "opacity-0",
            class: "transition ease-in-out"
          }, {
            default: de(() => [
              M(n).recentlySuccessful ? (x(), O("p", f2, "Images uploaded.")) : G("", !0)
            ]),
            _: 1
          })
        ])
      ], 32)) : G("", !0),
      e.images.length ? (x(), O("div", d2, [
        m[3] || (m[3] = $("hr", null, null, -1)),
        $("div", p2, [
          $("div", h2, [
            (x(!0), O(ce, null, Ge(e.images, (E) => (x(), O("div", m2, [
              $("div", g2, [
                $("img", {
                  alt: "gallery",
                  class: "block h-auto w-auto rounded-lg object-cover object-center",
                  src: E.url
                }, null, 8, y2),
                e.canUpload ? (x(), oe(M(it), {
                  key: 0,
                  href: p.route("images.delete", E.id),
                  method: "delete",
                  class: "mt-1 w-full items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-center text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700",
                  as: "button"
                }, {
                  default: de(() => m[2] || (m[2] = [
                    ye(" Delete Image ")
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
}, v2 = { class: "mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]" }, b2 = ["name", "value", "id", "checked"], w2 = ["for"], b4 = {
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
    const r = t, n = (a) => {
      r("update:modelValue", a.target.value);
    };
    return (a, o) => (x(), O("div", v2, [
      $("input", {
        class: "relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 ring-accent before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-accent checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-accent checked:after:bg-accent checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-accent checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px] checked:focus:before:shadow-primary checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]",
        type: "radio",
        name: e.name,
        value: e.value,
        id: e.id,
        checked: e.modelValue === e.value,
        onChange: n
      }, null, 40, b2),
      $("label", {
        class: "mt-px inline-block pl-[0.15rem] hover:cursor-pointer",
        for: e.id
      }, Z(e.label), 9, w2)
    ]));
  }
}, x2 = {
  key: 0,
  class: "absolute inset-2 flex items-center justify-center"
}, uu = {
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
    return (t, r) => {
      var n;
      return x(), oe(M(Bd), {
        disabled: e.loading || ((n = e.form) == null ? void 0 : n.processing) || e.disabled,
        type: e.type,
        class: "focusable",
        customButtonClass: e.customButtonClass
      }, {
        default: de(() => {
          var a, o;
          return [
            $("div", {
              class: K({ "opacity-25": ((a = e.form) == null ? void 0 : a.processing) || e.loading })
            }, [
              J(t.$slots, "default")
            ], 2),
            (o = e.form) != null && o.processing || e.loading ? (x(), O("div", x2, [
              ge(M(jd), { class: "aspect-square !h-full !w-auto text-white" })
            ])) : G("", !0)
          ];
        }),
        _: 3
      }, 8, ["disabled", "type", "customButtonClass"]);
    };
  }
}, S2 = ["id"], A2 = {
  key: 0,
  class: "text-sm text-gray-600"
}, E2 = { class: "flex flex-col" }, w4 = {
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
    Kn();
    const t = e, r = Q(null), n = Q(null), a = Q(null), o = Q(null), i = () => {
      const c = r.value, u = c.getBoundingClientRect().top, p = document.querySelector("nav").offsetHeight, m = u - p, E = a.value, S = c.getBoundingClientRect().height + u - p * 2;
      if (m <= 0 && S > 0) {
        if (E.dataset.sticky === "true")
          return;
        f(), E.style.display = "block", E.dataset.sticky = "true", E.style.top = `${p}px`, E.style.width = n.value.offsetWidth + "px";
        return;
      }
      E.dataset.sticky = "", E.style.display = "";
    }, l = () => {
      o.value.style.marginLeft = -n.value.scrollLeft + "px";
    }, f = () => {
      if (!r.value)
        return;
      const c = r.value.querySelector("thead tr");
      let u = o.value;
      u.innerHTML = "";
      let p = c == null ? void 0 : c.querySelectorAll("th");
      p == null || p.forEach((E) => {
        const S = E.cloneNode(!0);
        S.style.width = E.offsetWidth + "px", u.appendChild(S), S.addEventListener("click", () => {
          E.click();
        });
      });
      const m = a.value;
      m.style.width = n.value.offsetWidth + "px";
    };
    return t.sticky && (Ke(() => {
      f(), window.addEventListener("scroll", i, { passive: !0 }), window.addEventListener("resize", f, { passive: !0 }), n.value.addEventListener("scroll", l, { passive: !0 });
    }), Yr(() => {
      var c;
      window.removeEventListener("scroll", i), window.removeEventListener("resize", f), (c = n.value) == null || c.removeEventListener("scroll", l);
    })), (c, u) => (x(), O("div", {
      class: K({
        "!visible hidden": e.collapsable,
        "overflow-hidden": e.overflow
      }),
      id: e.collapse_id,
      "data-te-collapse-item": ""
    }, [
      e.total != null ? (x(), O("p", A2, "Found: " + Z(e.total), 1)) : G("", !0),
      $("div", E2, [
        $("div", {
          class: K({ "overflow-x-auto": e.overflow }),
          ref_key: "table_container",
          ref: n
        }, [
          $("table", {
            class: K(["min-w-full text-left text-sm font-light", {
              "mb-14 [&>*>tr]:border-l-4 [&>*>tr]:border-l-primary-500": e.collapsable,
              " border-separate border-spacing-y-5 px-2": e.seperate,
              // reponsive classes
              // thead & tbody
              " [&_thead]:max-sm:hidden": e.responsive,
              // td&th
              " [&_.td-label]:max-sm:!block [&_td:last-child]:max-sm:!border-b-0 [&_td]:max-sm:flex [&_td]:max-sm:justify-between [&_td]:max-sm:border-b [&_td]:max-sm:!px-2": e.responsive,
              // tr
              " [&_tr]:max-sm:mb-2 [&_tr]:max-sm:flex [&_tr]:max-sm:flex-col [&_tr]:max-sm:rounded-md [&_tr]:max-sm:border [&_tr]:max-sm:border-gray-200 [&_tr]:max-sm:shadow-md": e.responsive
            }]),
            ref_key: "table",
            ref: r
          }, [
            e.sticky ? (x(), O("div", {
              key: 0,
              ref_key: "sticky_wrapper",
              ref: a,
              class: "fixed isolate z-40 hidden w-full overflow-hidden bg-neutral-100"
            }, [
              $("div", {
                ref_key: "sticky_header",
                ref: o,
                class: K(["w-max [&>th]:align-middle", {
                  "max-sm:hidden": e.responsive
                }])
              }, null, 2)
            ], 512)) : G("", !0),
            J(c.$slots, "default")
          ], 2)
        ], 2)
      ]),
      c.$slots.pagination ? J(c.$slots, "pagination", { key: 1 }) : e.links ? (x(), oe(M(Md), {
        key: 2,
        class: "mt-6",
        links: e.links,
        showPerPage: e.showPerPage,
        defaultPerPage: e.defaultPerPage
      }, null, 8, ["links", "showPerPage", "defaultPerPage"])) : G("", !0)
    ], 10, S2));
  }
}, O2 = {}, C2 = { class: "border-b bg-neutral-100 font-medium dark:border-neutral-500" };
function P2(e, t) {
  return x(), O("thead", C2, [
    J(e.$slots, "default")
  ]);
}
const x4 = /* @__PURE__ */ zn(O2, [["render", P2]]), _2 = { key: 0 }, S4 = {
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
    const t = e, r = ne(() => {
      let a = Sw().props[t.data] ?? null;
      return t.recordsFromPagination ? a.data ?? null : a;
    });
    return (n, a) => (x(), O("tbody", null, [
      ge(M(ww), {
        data: t.data
      }, {
        fallback: de(() => [
          e.hidePlaceholder ? G("", !0) : (x(), oe(M(n4), { key: 0 }))
        ]),
        default: de(() => [
          !e.hideNoRecordsMessage && r.value ? (x(), O(ce, { key: 0 }, [
            r.value.length ? G("", !0) : (x(), O("tr", _2, [
              ge(M(yl), {
                colspan: "999",
                class: "no-records-message !text-center text-gray-500"
              }, {
                default: de(() => [
                  ye(Z(e.noRecordsMessage), 1)
                ]),
                _: 1
              })
            ]))
          ], 64)) : G("", !0),
          J(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["data"])
    ]));
  }
}, k2 = { class: "flex items-center justify-between" }, T2 = {
  key: 0,
  class: "order-arrows flex h-full w-4 items-center md:right-4"
}, A4 = {
  __name: "Th",
  props: {
    orderBy: String
  },
  setup(e) {
    qn.add(bm, gm);
    const t = e, r = Q("asc"), n = Q(!1);
    let a = null;
    const o = Kn();
    Ke(() => {
      t.orderBy && (a = o.on("navigate", i));
    }), Yr(() => {
      a == null || a();
    });
    const i = () => {
      const c = route().params;
      if (c.order_by === t.orderBy) {
        r.value = c.order_dir, n.value = !0;
        return;
      }
      n.value = !1;
    }, l = () => {
      if (!t.orderBy)
        return;
      const c = r.value === "asc" ? "desc" : "asc", u = route().params;
      u.order_by = t.orderBy, u.order_dir = c, o.get(route(route().current()), u, {
        preserveState: !0
      }), r.value = c, n.value = !0;
    }, f = (c) => r.value === c && n.value ? "active text-primary" : "text-gray-400";
    return (c, u) => (x(), O("th", {
      scope: "col",
      class: K(["relative py-4 text-center md:px-6 md:text-left", e.orderBy ? "cursor-pointer" : ""]),
      onClick: l
    }, [
      $("div", k2, [
        J(c.$slots, "default"),
        e.orderBy ? (x(), O("span", T2, [
          ge(M(yt), {
            icon: "fa-sort-up",
            class: K(["absolute", f("desc")])
          }, null, 8, ["class"]),
          ge(M(yt), {
            icon: "fa-sort-down",
            class: K(["absolute", f("asc")])
          }, null, 8, ["class"])
        ])) : G("", !0)
      ])
    ], 2));
  }
}, $2 = { class: "whitespace-nowrap py-2 text-center md:px-6 md:py-4 md:text-left" }, F2 = { class: "td-label hidden font-bold" }, yl = {
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
    return (r, n) => (x(), O("td", $2, [
      $("span", F2, Z(t.label), 1),
      J(r.$slots, "default")
    ]));
  }
}, I2 = ["data-te-target", "aria-controls"], E4 = {
  __name: "TrCollapseHandler",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(e) {
    return (t, r) => (x(), O("tr", {
      "data-te-collapse-init": "",
      "data-te-target": "#" + e.collapse_id,
      "aria-expanded": "false",
      "aria-controls": e.collapse_id
    }, [
      J(t.$slots, "default")
    ], 8, I2));
  }
}, D2 = { colspan: "999" }, L2 = ["id"], O4 = {
  __name: "TrCollapse",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(e) {
    return (t, r) => (x(), O("tr", null, [
      $("td", D2, [
        $("div", {
          id: e.collapse_id,
          class: "!visible hidden",
          "data-te-collapse-item": ""
        }, [
          J(t.$slots, "default")
        ], 8, L2)
      ])
    ]));
  }
}, C4 = {
  __name: "TrPlaceholder",
  props: {
    placeholders: {
      type: Number,
      required: !1,
      default: 5
    }
  },
  setup(e) {
    return (t, r) => (x(!0), O(ce, null, Ge(e.placeholders, (n) => (x(), O("tr", null, [
      ge(M(yl), { colspan: "999" }, {
        default: de(() => r[0] || (r[0] = [
          $("div", { class: "tr-placeholder h-8 w-full animate-pulse rounded-md bg-gray-500 bg-opacity-75" }, null, -1)
        ])),
        _: 1
      })
    ]))), 256));
  }
}, R2 = { class: "mb-2 flex w-full flex-wrap justify-between text-sm text-gray-600 max-xxs:text-xxs" }, N2 = {
  key: 0,
  class: "mb-2 h-fit w-full xs:w-fit"
}, M2 = { key: 0 }, B2 = {
  key: 1,
  class: "ml-1"
}, j2 = { class: "flex w-fit flex-wrap" }, q2 = {
  key: 0,
  class: "font-semibold"
}, z2 = { class: "mb-1" }, U2 = {
  key: 0,
  class: "w-full whitespace-normal font-semibold text-primary"
}, V2 = { class: "w-full break-words" }, H2 = { class: "mb-1 flex flex-col" }, W2 = { key: 1 }, P4 = {
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
    return (r, n) => {
      var a;
      return x(), O("div", {
        key: t.key,
        class: "mt-3 rounded-md border border-gray-300 bg-white px-4 py-3 lg:border lg:border-gray-300"
      }, [
        $("div", R2, [
          t.itemId || t.timeStamp ? (x(), O("div", N2, [
            t.itemId ? (x(), O(ce, { key: 0 }, [
              t.itemId.routeName ? (x(), oe(M(it), {
                key: 1,
                href: r.route(t.itemId.routeName, t.itemId.routeData ? t.itemId.routeData : t.itemId.id)
              }, {
                default: de(() => [
                  t.itemId.prefix || t.itemId.prefix == null ? (x(), O(ce, { key: 0 }, [
                    ye("#")
                  ], 64)) : G("", !0),
                  ye(" " + Z(t.itemId.id), 1)
                ]),
                _: 1
              }, 8, ["href"])) : (x(), O("span", M2, [
                t.itemId.prefix || t.itemId.prefix == null ? (x(), O(ce, { key: 0 }, [
                  ye("#")
                ], 64)) : G("", !0),
                ye(" " + Z(t.itemId.id), 1)
              ]))
            ], 64)) : G("", !0),
            t.timeStamp ? (x(), O("span", B2, [
              t.itemId ? (x(), O(ce, { key: 0 }, [
                ye("-")
              ], 64)) : G("", !0),
              ye(" " + Z(t.timeStamp), 1)
            ])) : G("", !0)
          ])) : G("", !0),
          $("div", j2, [
            (x(!0), O(ce, null, Ge(e.pills, (o, i) => (x(), O(ce, { key: i }, [
              o.text ? (x(), O("span", {
                key: 0,
                class: "whitespace-nowrap rounded-md border bg-primary p-1 px-2 text-white",
                style: Mr({
                  backgroundColor: o.color ? o.color : null
                })
              }, Z(o.text), 5)) : G("", !0)
            ], 64))), 128))
          ])
        ]),
        t.title ? (x(), O(ce, { key: 0 }, [
          !t.title.routeName && !t.title.href ? (x(), O("p", q2, Z(t.title.text), 1)) : (x(), oe(M(it), {
            key: 1,
            href: t.title.href ? t.title.href : r.route(t.title.routeName, t.title.routeData),
            class: "font-semibold"
          }, {
            default: de(() => [
              ye(Z(t.title.text), 1)
            ]),
            _: 1
          }, 8, ["href"]))
        ], 64)) : G("", !0),
        $("div", z2, [
          t.extraText ? (x(), O("p", U2, [
            n[0] || (n[0] = ye(" Engineer Note: ")),
            $("span", V2, Z(t.extraText), 1)
          ])) : G("", !0)
        ]),
        $("div", H2, [
          (x(!0), O(ce, null, Ge(e.options, (o, i) => (x(), O(ce, null, [
            !o.routeName && !o.href ? (x(), O("span", {
              key: 0,
              style: Mr({ color: o.color ? o.color : "#000" })
            }, Z(o.text), 5)) : (x(), oe(M(it), {
              key: 1,
              href: o.href ? o.href : r.route(o.routeName, o.routeData),
              style: Mr({ color: o.color ? o.color : "#000" })
            }, {
              default: de(() => [
                ye(Z(o.text), 1)
              ]),
              _: 2
            }, 1032, ["href", "style"]))
          ], 64))), 256))
        ]),
        (a = t.amount) != null && a.amount ? (x(), O("div", W2, [
          $("span", null, Z(t.amount.text + M(xw)(t.amount.amount)), 1)
        ])) : G("", !0),
        $("div", null, [
          J(r.$slots, "default")
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
const Ui = (() => {
  const e = {};
  let t = 1;
  return {
    set(r, n, a) {
      typeof r[n] > "u" && (r[n] = {
        key: n,
        id: t
      }, t++), e[r[n].id] = a;
    },
    get(r, n) {
      if (!r || typeof r[n] > "u")
        return null;
      const a = r[n];
      return a.key === n ? e[a.id] : null;
    },
    delete(r, n) {
      if (typeof r[n] > "u")
        return;
      const a = r[n];
      a.key === n && (delete e[a.id], delete r[n]);
    }
  };
})(), Na = {
  setData(e, t, r) {
    Ui.set(e, t, r);
  },
  getData(e, t) {
    return Ui.get(e, t);
  },
  removeData(e, t) {
    Ui.delete(e, t);
  }
}, G2 = 1e6, K2 = 1e3, Ms = "transitionend", Y2 = (e) => e == null ? `${e}` : {}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(), J2 = (e) => {
  do
    e += Math.floor(Math.random() * G2);
  while (document.getElementById(e));
  return e;
}, Ed = (e) => {
  let t = e.getAttribute("data-te-target");
  if (!t || t === "#") {
    let r = e.getAttribute("href");
    if (!r || !r.includes("#") && !r.startsWith("."))
      return null;
    r.includes("#") && !r.startsWith("#") && (r = `#${r.split("#")[1]}`), t = r && r !== "#" ? r.trim() : null;
  }
  return t;
}, Od = (e) => {
  const t = Ed(e);
  return t && document.querySelector(t) ? t : null;
}, Mn = (e) => {
  const t = Ed(e);
  return t ? document.querySelector(t) : null;
}, X2 = (e) => {
  if (!e)
    return 0;
  let { transitionDuration: t, transitionDelay: r } = window.getComputedStyle(e);
  const n = Number.parseFloat(t), a = Number.parseFloat(r);
  return !n && !a ? 0 : (t = t.split(",")[0], r = r.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(r)) * K2);
}, Q2 = (e) => {
  e.dispatchEvent(new Event(Ms));
}, Cd = (e) => !e || typeof e != "object" ? !1 : (typeof e.jquery < "u" && (e = e[0]), typeof e.nodeType < "u"), Bs = (e) => Cd(e) ? e.jquery ? e[0] : e : typeof e == "string" && e.length > 0 ? document.querySelector(e) : null, Za = (e, t, r) => {
  Object.keys(r).forEach((n) => {
    const a = r[n], o = t[n], i = o && Cd(o) ? "element" : Y2(o);
    if (!new RegExp(a).test(i))
      throw new Error(
        `${e.toUpperCase()}: Option "${n}" provided type "${i}" but expected type "${a}".`
      );
  });
}, wo = (e) => {
  if (!e || e.getClientRects().length === 0)
    return !1;
  if (e.style && e.parentNode && e.parentNode.style) {
    const t = getComputedStyle(e), r = getComputedStyle(e.parentNode);
    return getComputedStyle(e).getPropertyValue("visibility") === "visible" || t.display !== "none" && r.display !== "none" && t.visibility !== "hidden";
  }
  return !1;
}, xo = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled") ? !0 : typeof e.disabled < "u" ? e.disabled : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false", Z2 = (e) => {
  e.offsetHeight;
}, Pd = () => {
  const { jQuery: e } = window;
  return e && !document.body.hasAttribute("data-te-no-jquery") ? e : null;
}, Vi = [], ex = (e) => {
  document.readyState === "loading" ? (Vi.length || document.addEventListener("DOMContentLoaded", () => {
    Vi.forEach((t) => t());
  }), Vi.push(e)) : e();
}, xt = () => document.documentElement.dir === "rtl", tx = (e) => document.createElement(e), fu = (e) => {
  typeof e == "function" && e();
}, rx = (e, t, r = !0) => {
  if (!r) {
    fu(e);
    return;
  }
  const n = 5, a = X2(t) + n;
  let o = !1;
  const i = ({ target: l }) => {
    l === t && (o = !0, t.removeEventListener(Ms, i), fu(e));
  };
  t.addEventListener(Ms, i), setTimeout(() => {
    o || Q2(t);
  }, a);
}, nx = /[^.]*(?=\..*)\.|.*/, ax = /\..*/, ox = /::\d+$/, Hi = {};
let du = 1;
const ix = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, sx = /^(mouseenter|mouseleave)/i, _d = /* @__PURE__ */ new Set([
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
function kd(e, t) {
  return t && `${t}::${du++}` || e.uidEvent || du++;
}
function Td(e) {
  const t = kd(e);
  return e.uidEvent = t, Hi[t] = Hi[t] || {}, Hi[t];
}
function lx(e, t) {
  return function r(n) {
    return n.delegateTarget = e, r.oneOff && he.off(e, n.type, t), t.apply(e, [n]);
  };
}
function cx(e, t, r) {
  return function n(a) {
    const o = e.querySelectorAll(t);
    for (let { target: i } = a; i && i !== this; i = i.parentNode)
      for (let l = o.length; l--; "")
        if (o[l] === i)
          return a.delegateTarget = i, n.oneOff && he.off(e, a.type, r), r.apply(i, [a]);
    return null;
  };
}
function $d(e, t, r = null) {
  const n = Object.keys(e);
  for (let a = 0, o = n.length; a < o; a++) {
    const i = e[n[a]];
    if (i.originalHandler === t && i.delegationSelector === r)
      return i;
  }
  return null;
}
function Fd(e, t, r) {
  const n = typeof t == "string", a = n ? r : t;
  let o = Id(e);
  return _d.has(o) || (o = e), [n, a, o];
}
function pu(e, t, r, n, a) {
  if (typeof t != "string" || !e)
    return;
  if (r || (r = n, n = null), sx.test(t)) {
    const E = (S) => function(A) {
      if (!A.relatedTarget || A.relatedTarget !== A.delegateTarget && !A.delegateTarget.contains(A.relatedTarget))
        return S.call(this, A);
    };
    n ? n = E(n) : r = E(r);
  }
  const [o, i, l] = Fd(
    t,
    r,
    n
  ), f = Td(e), c = f[l] || (f[l] = {}), u = $d(
    c,
    i,
    o ? r : null
  );
  if (u) {
    u.oneOff = u.oneOff && a;
    return;
  }
  const p = kd(
    i,
    t.replace(nx, "")
  ), m = o ? cx(e, r, n) : lx(e, r);
  m.delegationSelector = o ? r : null, m.originalHandler = i, m.oneOff = a, m.uidEvent = p, c[p] = m, e.addEventListener(l, m, o);
}
function js(e, t, r, n, a) {
  const o = $d(t[r], n, a);
  o && (e.removeEventListener(r, o, !!a), delete t[r][o.uidEvent]);
}
function ux(e, t, r, n) {
  const a = t[r] || {};
  Object.keys(a).forEach((o) => {
    if (o.includes(n)) {
      const i = a[o];
      js(
        e,
        t,
        r,
        i.originalHandler,
        i.delegationSelector
      );
    }
  });
}
function Id(e) {
  return e = e.replace(ax, ""), ix[e] || e;
}
const he = {
  on(e, t, r, n) {
    pu(e, t, r, n, !1);
  },
  one(e, t, r, n) {
    pu(e, t, r, n, !0);
  },
  off(e, t, r, n) {
    if (typeof t != "string" || !e)
      return;
    const [a, o, i] = Fd(
      t,
      r,
      n
    ), l = i !== t, f = Td(e), c = t.startsWith(".");
    if (typeof o < "u") {
      if (!f || !f[i])
        return;
      js(
        e,
        f,
        i,
        o,
        a ? r : null
      );
      return;
    }
    c && Object.keys(f).forEach((p) => {
      ux(
        e,
        f,
        p,
        t.slice(1)
      );
    });
    const u = f[i] || {};
    Object.keys(u).forEach((p) => {
      const m = p.replace(ox, "");
      if (!l || t.includes(m)) {
        const E = u[p];
        js(
          e,
          f,
          i,
          E.originalHandler,
          E.delegationSelector
        );
      }
    });
  },
  trigger(e, t, r) {
    if (typeof t != "string" || !e)
      return null;
    const n = Pd(), a = Id(t), o = t !== a, i = _d.has(a);
    let l, f = !0, c = !0, u = !1, p = null;
    return o && n && (l = n.Event(t, r), n(e).trigger(l), f = !l.isPropagationStopped(), c = !l.isImmediatePropagationStopped(), u = l.isDefaultPrevented()), i ? (p = document.createEvent("HTMLEvents"), p.initEvent(a, f, !0)) : p = new CustomEvent(t, {
      bubbles: f,
      cancelable: !0
    }), typeof r < "u" && Object.keys(r).forEach((m) => {
      Object.defineProperty(p, m, {
        get() {
          return r[m];
        }
      });
    }), u && p.preventDefault(), c && e.dispatchEvent(p), p.defaultPrevented && typeof l < "u" && l.preventDefault(), p;
  }
}, fx = "5.1.3";
class Dd {
  constructor(t) {
    t = Bs(t), t && (this._element = t, Na.setData(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    Na.removeData(this._element, this.constructor.DATA_KEY), he.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t) => {
      this[t] = null;
    });
  }
  _queueCallback(t, r, n = !0) {
    rx(t, r, n);
  }
  /** Static */
  static getInstance(t) {
    return Na.getData(Bs(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, r = {}) {
    return this.getInstance(t) || new this(t, typeof r == "object" ? r : null);
  }
  static get VERSION() {
    return fx;
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
function Wi(e) {
  return e === "true" ? !0 : e === "false" ? !1 : e === Number(e).toString() ? Number(e) : e === "" || e === "null" ? null : e;
}
function Gi(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const fe = {
  setDataAttribute(e, t, r) {
    e.setAttribute(`data-te-${Gi(t)}`, r);
  },
  removeDataAttribute(e, t) {
    e.removeAttribute(`data-te-${Gi(t)}`);
  },
  getDataAttributes(e) {
    if (!e)
      return {};
    const t = {};
    return Object.keys(e.dataset).filter((r) => r.startsWith("te")).forEach((r) => {
      if (r.startsWith("teClass"))
        return;
      let n = r.replace(/^te/, "");
      n = n.charAt(0).toLowerCase() + n.slice(1, n.length), t[n] = Wi(e.dataset[r]);
    }), t;
  },
  getDataClassAttributes(e) {
    if (!e)
      return {};
    const t = {
      ...e.dataset
    };
    return Object.keys(t).filter((r) => r.startsWith("teClass")).forEach((r) => {
      let n = r.replace(/^teClass/, "");
      n = n.charAt(0).toLowerCase() + n.slice(1, n.length), t[n] = Wi(t[r]);
    }), t;
  },
  getDataAttribute(e, t) {
    return Wi(
      e.getAttribute(`data-te-${Gi(t)}`)
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
    e && Ki(t).forEach((r) => {
      e.classList.contains(r) ? e.classList.remove(r) : e.classList.add(r);
    });
  },
  addClass(e, t) {
    Ki(t).forEach(
      (r) => !e.classList.contains(r) && e.classList.add(r)
    );
  },
  addStyle(e, t) {
    Object.keys(t).forEach((r) => {
      e.style[r] = t[r];
    });
  },
  removeClass(e, t) {
    Ki(t).forEach(
      (r) => e.classList.contains(r) && e.classList.remove(r)
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
function Ki(e) {
  return typeof e == "string" ? e.split(" ") : Array.isArray(e) ? e : !1;
}
const dx = 3, He = {
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
    return [].concat(...e.children).filter((r) => r.matches(t));
  },
  parents(e, t) {
    const r = [];
    let n = e.parentNode;
    for (; n && n.nodeType === Node.ELEMENT_NODE && n.nodeType !== dx; )
      this.matches(n, t) && r.push(n), n = n.parentNode;
    return r;
  },
  prev(e, t) {
    let r = e.previousElementSibling;
    for (; r; ) {
      if (r.matches(t))
        return [r];
      r = r.previousElementSibling;
    }
    return [];
  },
  next(e, t) {
    let r = e.nextElementSibling;
    for (; r; ) {
      if (this.matches(r, t))
        return [r];
      r = r.nextElementSibling;
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
    ].map((r) => `${r}:not([tabindex^="-"])`).join(", ");
    return this.find(t, e).filter(
      (r) => !xo(r) && wo(r)
    );
  }
};
xt();
xt();
xt();
xt();
xt();
xt();
const Yi = "collapse", Ld = "te.collapse", So = `.${Ld}`, hu = {
  toggle: !0,
  parent: null
}, px = {
  toggle: "boolean",
  parent: "(null|element)"
}, hx = `show${So}`, mx = `shown${So}`, gx = `hide${So}`, yx = `hidden${So}`, Ji = "data-te-collapse-show", mu = "data-te-collapse-collapsed", Ea = "data-te-collapse-collapsing", vx = "data-te-collapse-horizontal", Nr = "data-te-collapse-item", gu = `:scope [${Nr}] [${Nr}]`, bx = "width", wx = "height", xx = "[data-te-collapse-item][data-te-collapse-show], [data-te-collapse-item][data-te-collapse-collapsing]", yu = "[data-te-collapse-init]", Sx = {
  visible: "!visible",
  hidden: "hidden",
  baseTransition: "overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsing: "h-0 transition-[height] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsingHorizontal: "w-0 h-auto transition-[width] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
}, Ax = {
  visible: "string",
  hidden: "string",
  baseTransition: "string",
  collapsing: "string",
  collapsingHorizontal: "string"
};
class zr extends Dd {
  constructor(t, r, n) {
    super(t), this._isTransitioning = !1, this._config = this._getConfig(r), this._classes = this._getClasses(n), this._triggerArray = [];
    const a = He.find(yu);
    for (let o = 0, i = a.length; o < i; o++) {
      const l = a[o], f = Od(l), c = He.find(f).filter(
        (u) => u === this._element
      );
      f !== null && c.length && (this._selector = f, this._triggerArray.push(l));
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return hu;
  }
  static get NAME() {
    return Yi;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let t = [], r;
    if (this._config.parent) {
      const f = He.find(
        gu,
        this._config.parent
      );
      t = He.find(
        xx,
        this._config.parent
      ).filter((c) => !f.includes(c));
    }
    const n = He.findOne(this._selector);
    if (t.length) {
      const f = t.find((c) => n !== c);
      if (r = f ? zr.getInstance(f) : null, r && r._isTransitioning)
        return;
    }
    if (he.trigger(this._element, hx).defaultPrevented)
      return;
    t.forEach((f) => {
      n !== f && zr.getOrCreateInstance(f, { toggle: !1 }).hide(), r || Na.setData(f, Ld, null);
    });
    const a = this._getDimension(), o = a === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    fe.removeClass(this._element, this._classes.visible), fe.removeClass(this._element, this._classes.hidden), fe.addClass(this._element, o), this._element.removeAttribute(Nr), this._element.setAttribute(Ea, ""), this._element.style[a] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const i = () => {
      this._isTransitioning = !1, fe.removeClass(this._element, this._classes.hidden), fe.removeClass(this._element, o), fe.addClass(this._element, this._classes.visible), this._element.removeAttribute(Ea), this._element.setAttribute(Nr, ""), this._element.setAttribute(Ji, ""), this._element.style[a] = "", he.trigger(this._element, mx);
    }, l = `scroll${a[0].toUpperCase() + a.slice(1)}`;
    this._queueCallback(i, this._element, !0), this._element.style[a] = `${this._element[l]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || he.trigger(this._element, gx).defaultPrevented)
      return;
    const t = this._getDimension(), r = t === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, Z2(this._element), fe.addClass(this._element, r), fe.removeClass(this._element, this._classes.visible), fe.removeClass(this._element, this._classes.hidden), this._element.setAttribute(Ea, ""), this._element.removeAttribute(Nr), this._element.removeAttribute(Ji);
    const n = this._triggerArray.length;
    for (let o = 0; o < n; o++) {
      const i = this._triggerArray[o], l = Mn(i);
      l && !this._isShown(l) && this._addAriaAndCollapsedClass([i], !1);
    }
    this._isTransitioning = !0;
    const a = () => {
      this._isTransitioning = !1, fe.removeClass(this._element, r), fe.addClass(this._element, this._classes.visible), fe.addClass(this._element, this._classes.hidden), this._element.removeAttribute(Ea), this._element.setAttribute(Nr, ""), he.trigger(this._element, yx);
    };
    this._element.style[t] = "", this._queueCallback(a, this._element, !0);
  }
  _isShown(t = this._element) {
    return t.hasAttribute(Ji);
  }
  // Private
  _getConfig(t) {
    return t = {
      ...hu,
      ...fe.getDataAttributes(this._element),
      ...t
    }, t.toggle = !!t.toggle, t.parent = Bs(t.parent), Za(Yi, t, px), t;
  }
  _getClasses(t) {
    const r = fe.getDataClassAttributes(this._element);
    return t = {
      ...Sx,
      ...r,
      ...t
    }, Za(Yi, t, Ax), t;
  }
  _getDimension() {
    return this._element.hasAttribute(vx) ? bx : wx;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const t = He.find(
      gu,
      this._config.parent
    );
    He.find(yu, this._config.parent).filter((r) => !t.includes(r)).forEach((r) => {
      const n = Mn(r);
      n && this._addAriaAndCollapsedClass([r], this._isShown(n));
    });
  }
  _addAriaAndCollapsedClass(t, r) {
    t.length && t.forEach((n) => {
      r ? n.removeAttribute(mu) : n.setAttribute(`${mu}`, ""), n.setAttribute("aria-expanded", r);
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const r = {};
      typeof t == "string" && /show|hide/.test(t) && (r.toggle = !1);
      const n = zr.getOrCreateInstance(this, r);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
let vu = [];
const Ex = (e, t = "hide") => {
  const r = `click.dismiss${e.EVENT_KEY}`, n = e.NAME;
  vu.includes(n) || (vu.push(n), he.on(
    document,
    r,
    `[data-te-${n}-dismiss]`,
    function(a) {
      if (["A", "AREA"].includes(this.tagName) && a.preventDefault(), xo(this))
        return;
      const o = Mn(this) || this.closest(`.${n}`) || this.closest(`[data-te-${n}-init]`);
      o && e.getOrCreateInstance(o)[t]();
    }
  ));
}, Xi = "alert", Ox = "te.alert", Rd = `.${Ox}`, Cx = `close${Rd}`, Px = `closed${Rd}`, Sn = "data-te-alert-show", _x = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, bu = {
  animation: !0,
  autohide: !0,
  delay: 1e3
}, kx = {
  fadeIn: "animate-[fade-in_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none",
  fadeOut: "animate-[fade-out_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none"
}, Tx = {
  fadeIn: "string",
  fadeOut: "string"
};
class eo extends Dd {
  constructor(t, r, n) {
    super(t), this._element = t, this._config = this._getConfig(r), this._classes = this._getClasses(n), this._didInit = !1, this._init();
  }
  // Getters
  static get DefaultType() {
    return _x;
  }
  static get Default() {
    return bu;
  }
  static get NAME() {
    return Xi;
  }
  // Public
  close() {
    if (he.trigger(this._element, Cx).defaultPrevented)
      return;
    let t = 0;
    this._config.animation && (t = 300, fe.addClass(this._element, this._classes.fadeOut)), this._element.removeAttribute(Sn), setTimeout(() => {
      this._queueCallback(
        () => this._destroyElement(),
        this._element,
        this._config.animation
      );
    }, t);
  }
  show() {
    if (this._element) {
      if (this._config.autohide && this._setupAutohide(), !this._element.hasAttribute(Sn) && (fe.removeClass(this._element, "hidden"), fe.addClass(this._element, "block"), wo(this._element))) {
        const t = (r) => {
          fe.removeClass(this._element, "hidden"), fe.addClass(this._element, "block"), he.off(r.target, "animationend", t);
        };
        this._element.setAttribute(Sn, ""), he.on(this._element, "animationend", t);
      }
      this._config.animation && (fe.removeClass(this._element, this._classes.fadeOut), fe.addClass(this._element, this._classes.fadeIn));
    }
  }
  hide() {
    if (this._element && this._element.hasAttribute(Sn)) {
      this._element.removeAttribute(Sn);
      const t = (r) => {
        fe.addClass(this._element, "hidden"), fe.removeClass(this._element, "block"), this._timeout !== null && (clearTimeout(this._timeout), this._timeout = null), he.off(r.target, "animationend", t);
      };
      he.on(this._element, "animationend", t), fe.removeClass(this._element, this._classes.fadeIn), fe.addClass(this._element, this._classes.fadeOut);
    }
  }
  // Private
  _init() {
    this._didInit || (Ex(eo, "close"), this._didInit = !0);
  }
  _getConfig(t) {
    return t = {
      ...bu,
      ...fe.getDataAttributes(this._element),
      ...typeof t == "object" && t ? t : {}
    }, Za(Xi, t, this.constructor.DefaultType), t;
  }
  _getClasses(t) {
    const r = fe.getDataClassAttributes(this._element);
    return t = {
      ...kx,
      ...r,
      ...t
    }, Za(Xi, t, Tx), t;
  }
  _setupAutohide() {
    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }
  _destroyElement() {
    this._element.remove(), he.trigger(this._element, Px), this.dispose();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const r = eo.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (r[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        r[t](this);
      }
    });
  }
}
xt(), xt();
(() => {
  var e = { 454: (n, a, o) => {
    o.d(a, { Z: () => f });
    var i = o(645), l = o.n(i)()(function(c) {
      return c[1];
    });
    l.push([n.id, "INPUT:-webkit-autofill,SELECT:-webkit-autofill,TEXTAREA:-webkit-autofill{animation-name:onautofillstart}INPUT:not(:-webkit-autofill),SELECT:not(:-webkit-autofill),TEXTAREA:not(:-webkit-autofill){animation-name:onautofillcancel}@keyframes onautofillstart{}@keyframes onautofillcancel{}", ""]);
    const f = l;
  }, 645: (n) => {
    n.exports = function(a) {
      var o = [];
      return o.toString = function() {
        return this.map(function(i) {
          var l = a(i);
          return i[2] ? "@media ".concat(i[2], " {").concat(l, "}") : l;
        }).join("");
      }, o.i = function(i, l, f) {
        typeof i == "string" && (i = [[null, i, ""]]);
        var c = {};
        if (f)
          for (var u = 0; u < this.length; u++) {
            var p = this[u][0];
            p != null && (c[p] = !0);
          }
        for (var m = 0; m < i.length; m++) {
          var E = [].concat(i[m]);
          f && c[E[0]] || (l && (E[2] ? E[2] = "".concat(l, " and ").concat(E[2]) : E[2] = l), o.push(E));
        }
      }, o;
    };
  }, 810: () => {
    (function() {
      if (typeof window < "u")
        try {
          var n = new window.CustomEvent("test", { cancelable: !0 });
          if (n.preventDefault(), n.defaultPrevented !== !0)
            throw new Error("Could not prevent default");
        } catch {
          var a = function(o, i) {
            var l, f;
            return (i = i || {}).bubbles = !!i.bubbles, i.cancelable = !!i.cancelable, (l = document.createEvent("CustomEvent")).initCustomEvent(o, i.bubbles, i.cancelable, i.detail), f = l.preventDefault, l.preventDefault = function() {
              f.call(this);
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
  }, 379: (n, a, o) => {
    var i, l = function() {
      var w = {};
      return function(I) {
        if (w[I] === void 0) {
          var D = document.querySelector(I);
          if (window.HTMLIFrameElement && D instanceof window.HTMLIFrameElement)
            try {
              D = D.contentDocument.head;
            } catch {
              D = null;
            }
          w[I] = D;
        }
        return w[I];
      };
    }(), f = [];
    function c(w) {
      for (var I = -1, D = 0; D < f.length; D++)
        if (f[D].identifier === w) {
          I = D;
          break;
        }
      return I;
    }
    function u(w, I) {
      for (var D = {}, B = [], z = 0; z < w.length; z++) {
        var ee = w[z], q = I.base ? ee[0] + I.base : ee[0], F = D[q] || 0, U = "".concat(q, " ").concat(F);
        D[q] = F + 1;
        var h = c(U), y = { css: ee[1], media: ee[2], sourceMap: ee[3] };
        h !== -1 ? (f[h].references++, f[h].updater(y)) : f.push({ identifier: U, updater: T(y, I), references: 1 }), B.push(U);
      }
      return B;
    }
    function p(w) {
      var I = document.createElement("style"), D = w.attributes || {};
      if (D.nonce === void 0) {
        var B = o.nc;
        B && (D.nonce = B);
      }
      if (Object.keys(D).forEach(function(ee) {
        I.setAttribute(ee, D[ee]);
      }), typeof w.insert == "function")
        w.insert(I);
      else {
        var z = l(w.insert || "head");
        if (!z)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        z.appendChild(I);
      }
      return I;
    }
    var m, E = (m = [], function(w, I) {
      return m[w] = I, m.filter(Boolean).join(`
`);
    });
    function S(w, I, D, B) {
      var z = D ? "" : B.media ? "@media ".concat(B.media, " {").concat(B.css, "}") : B.css;
      if (w.styleSheet)
        w.styleSheet.cssText = E(I, z);
      else {
        var ee = document.createTextNode(z), q = w.childNodes;
        q[I] && w.removeChild(q[I]), q.length ? w.insertBefore(ee, q[I]) : w.appendChild(ee);
      }
    }
    function A(w, I, D) {
      var B = D.css, z = D.media, ee = D.sourceMap;
      if (z ? w.setAttribute("media", z) : w.removeAttribute("media"), ee && typeof btoa < "u" && (B += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(ee)))), " */")), w.styleSheet)
        w.styleSheet.cssText = B;
      else {
        for (; w.firstChild; )
          w.removeChild(w.firstChild);
        w.appendChild(document.createTextNode(B));
      }
    }
    var C = null, _ = 0;
    function T(w, I) {
      var D, B, z;
      if (I.singleton) {
        var ee = _++;
        D = C || (C = p(I)), B = S.bind(null, D, ee, !1), z = S.bind(null, D, ee, !0);
      } else
        D = p(I), B = A.bind(null, D, I), z = function() {
          (function(q) {
            if (q.parentNode === null)
              return !1;
            q.parentNode.removeChild(q);
          })(D);
        };
      return B(w), function(q) {
        if (q) {
          if (q.css === w.css && q.media === w.media && q.sourceMap === w.sourceMap)
            return;
          B(w = q);
        } else
          z();
      };
    }
    n.exports = function(w, I) {
      (I = I || {}).singleton || typeof I.singleton == "boolean" || (I.singleton = (i === void 0 && (i = !!(window && document && document.all && !window.atob)), i));
      var D = u(w = w || [], I);
      return function(B) {
        if (B = B || [], Object.prototype.toString.call(B) === "[object Array]") {
          for (var z = 0; z < D.length; z++) {
            var ee = c(D[z]);
            f[ee].references--;
          }
          for (var q = u(B, I), F = 0; F < D.length; F++) {
            var U = c(D[F]);
            f[U].references === 0 && (f[U].updater(), f.splice(U, 1));
          }
          D = q;
        }
      };
    };
  } }, t = {};
  function r(n) {
    var a = t[n];
    if (a !== void 0)
      return a.exports;
    var o = t[n] = { id: n, exports: {} };
    return e[n](o, o.exports, r), o.exports;
  }
  r.n = (n) => {
    var a = n && n.__esModule ? () => n.default : () => n;
    return r.d(a, { a }), a;
  }, r.d = (n, a) => {
    for (var o in a)
      r.o(a, o) && !r.o(n, o) && Object.defineProperty(n, o, { enumerable: !0, get: a[o] });
  }, r.o = (n, a) => Object.prototype.hasOwnProperty.call(n, a), (() => {
    var n = r(379), a = r.n(n), o = r(454);
    function i(f) {
      if (!f.hasAttribute("autocompleted")) {
        f.setAttribute("autocompleted", "");
        var c = new window.CustomEvent("onautocomplete", { bubbles: !0, cancelable: !0, detail: null });
        f.dispatchEvent(c) || (f.value = "");
      }
    }
    function l(f) {
      f.hasAttribute("autocompleted") && (f.removeAttribute("autocompleted"), f.dispatchEvent(new window.CustomEvent("onautocomplete", { bubbles: !0, cancelable: !1, detail: null })));
    }
    a()(o.Z, { insert: "head", singleton: !1 }), o.Z.locals, r(810), document.addEventListener("animationstart", function(f) {
      f.animationName === "onautofillstart" ? i(f.target) : l(f.target);
    }, !0), document.addEventListener("input", function(f) {
      f.inputType !== "insertReplacementText" && "data" in f ? l(f.target) : i(f.target);
    }, !0);
  })();
})();
xt();
xt();
J2("chips-input-");
const jt = {
  plugins: {
    legend: {
      labels: {
        color: "rgb(102,102,102)"
      }
    }
  }
}, $x = {
  line: {
    options: {
      ...jt,
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
      ...jt,
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
      ...jt,
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
      ...jt,
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
      ...jt,
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
      ...jt,
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
      ...jt,
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
      ...jt,
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
var Ao = function(e) {
  this.element = e, this.handlers = {};
}, Nd = { isEmpty: { configurable: !0 } };
Ao.prototype.bind = function(e, t) {
  typeof this.handlers[e] > "u" && (this.handlers[e] = []), this.handlers[e].push(t), this.element.addEventListener(e, t, !1);
};
Ao.prototype.unbind = function(e, t) {
  var r = this;
  this.handlers[e] = this.handlers[e].filter(function(n) {
    return t && n !== t ? !0 : (r.element.removeEventListener(e, n, !1), !1);
  });
};
Ao.prototype.unbindAll = function() {
  for (var e in this.handlers)
    this.unbind(e);
};
Nd.isEmpty.get = function() {
  var e = this;
  return Object.keys(this.handlers).every(
    function(t) {
      return e.handlers[t].length === 0;
    }
  );
};
Object.defineProperties(Ao.prototype, Nd);
typeof document < "u" && "WebkitAppearance" in document.documentElement.style, typeof window < "u" && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch), typeof navigator < "u" && navigator.msMaxTouchPoints, typeof navigator < "u" && /Chrome/i.test(navigator && navigator.userAgent);
tx("div");
const Fx = (e) => {
  ex(() => {
    const t = Pd();
    if (t) {
      const r = e.NAME, n = t.fn[r];
      t.fn[r] = e.jQueryInterface, t.fn[r].Constructor = e, t.fn[r].noConflict = () => (t.fn[r] = n, e.jQueryInterface);
    }
  });
}, Ix = (e, t) => {
  he.on(
    document,
    `click.te.${e.NAME}`,
    t,
    function(r) {
      r.preventDefault(), e.getOrCreateInstance(this).toggle();
    }
  );
}, Dx = (e, t) => {
  he.on(
    document,
    `click.te.${e.NAME}.data-api`,
    t,
    function(r) {
      ["A", "AREA"].includes(this.tagName) && r.preventDefault(), !xo(this) && e.getOrCreateInstance(this).show();
    }
  );
}, Lx = (e, t) => {
  he.on(
    document,
    `click.te.${e.NAME}.data-api`,
    t,
    function(r) {
      const n = Mn(this);
      if (["A", "AREA"].includes(this.tagName) && r.preventDefault(), xo(this))
        return;
      he.one(n, e.EVENT_HIDDEN, () => {
        wo(this) && this.focus();
      });
      const a = He.findOne(e.OPEN_SELECTOR);
      a && a !== n && e.getInstance(a).hide(), e.getOrCreateInstance(n).toggle(this);
    }
  );
}, Rx = (e, t) => {
  he.on(
    document,
    `click.te.${e.NAME}`,
    t,
    (r) => {
      r.preventDefault();
      const n = r.target.closest(t);
      e.getOrCreateInstance(n).toggle();
    }
  );
}, Nx = (e, t) => {
  he.on(
    document,
    `click.te.${e.NAME}`,
    t,
    function(r) {
      const n = Mn(this);
      ["A", "AREA"].includes(this.tagName) && r.preventDefault(), he.one(n, e.EVENT_SHOW, (o) => {
        o.defaultPrevented || he.one(n, e.EVENT_HIDDEN, () => {
          wo(this) && this.focus();
        });
      });
      const a = He.findOne(
        `[${e.OPEN_SELECTOR}="true"]`
      );
      a && e.getInstance(a).hide(), e.getOrCreateInstance(n).toggle(this);
    }
  );
}, Mx = (e, t) => {
  he.one(
    document,
    "mousedown",
    t,
    e.autoInitial(new e())
  );
}, Bx = (e, t) => {
  he.on(
    document,
    `click.te.${e.NAME}.data-api`,
    t,
    function(r) {
      (r.target.tagName === "A" || r.delegateTarget && r.delegateTarget.tagName === "A") && r.preventDefault();
      const n = Od(this);
      He.find(n).forEach((a) => {
        e.getOrCreateInstance(a, { toggle: !1 }).toggle();
      });
    }
  );
}, jx = (e, t) => {
  [].slice.call(
    document.querySelectorAll(t)
  ).map(function(r) {
    return new e(r);
  });
}, qx = (e, t) => {
  [].slice.call(
    document.querySelectorAll(t)
  ).map(function(r) {
    return new e(r);
  });
}, zx = (e, t) => {
  He.find(t).forEach((r) => {
    new e(r);
  }), he.on(
    document,
    `click.te.${e.NAME}.data-api`,
    `${t} img:not([data-te-lightbox-disabled])`,
    e.toggle()
  );
}, Ux = (e, t) => {
  const r = (o) => o[0] === "{" && o[o.length - 1] === "}" || o[0] === "[" && o[o.length - 1] === "]", n = (o) => typeof o != "string" ? o : r(o) ? JSON.parse(o.replace(/'/g, '"')) : o, a = (o) => {
    const i = {};
    return Object.keys(o).forEach((l) => {
      if (l.match(/dataset.*/)) {
        const f = l.slice(7, 8).toLowerCase().concat(l.slice(8));
        i[f] = n(o[l]);
      }
    }), i;
  };
  He.find(t).forEach((o) => {
    if (fe.getDataAttribute(o, "chart") !== "bubble" && fe.getDataAttribute(o, "chart") !== "scatter") {
      const i = fe.getDataAttributes(o), l = {
        data: {
          datasets: [a(i)]
        }
      };
      return i.chart && (l.type = i.chart), i.labels && (l.data.labels = JSON.parse(i.labels.replace(/'/g, '"'))), new e(o, {
        ...l,
        ...$x[l.type]
      });
    }
    return null;
  });
};
class Vx {
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
const qs = new Vx(), En = {
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
    advanced: Ux
  },
  // togglers
  button: {
    name: "Button",
    selector: "[data-te-toggle='button']",
    isToggler: !0,
    callback: Rx
  },
  collapse: {
    name: "Collapse",
    selector: "[data-te-collapse-init]",
    isToggler: !0,
    callback: Bx
  },
  dropdown: {
    name: "Dropdown",
    selector: "[data-te-dropdown-toggle-ref]",
    isToggler: !0,
    callback: Ix
  },
  modal: {
    name: "Modal",
    selector: "[data-te-toggle='modal']",
    isToggler: !0,
    callback: Nx
  },
  ripple: {
    name: "Ripple",
    selector: "[data-te-ripple-init]",
    isToggler: !0,
    callback: Mx
  },
  offcanvas: {
    name: "Offcanvas",
    selector: "[data-te-offcanvas-toggle]",
    isToggler: !0,
    callback: Lx
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
    callback: jx
  },
  popover: {
    name: "Popover",
    selector: "[data-te-toggle='popover']",
    isToggler: !0,
    callback: qx
  },
  lightbox: {
    name: "Lightbox",
    selector: "[data-te-lightbox-init]",
    isToggler: !0,
    callback: zx
  },
  touch: {
    name: "Touch",
    selector: "[data-te-touch-init]"
  }
}, Hx = (e) => En[e.NAME] || null, Wx = (e, t) => {
  if (!e || !t.allowReinits && qs.isInited(e.NAME))
    return;
  qs.add(e.NAME);
  const r = Hx(e), n = (r == null ? void 0 : r.isToggler) || !1;
  if (Fx(e), r != null && r.advanced) {
    r == null || r.advanced(e, r == null ? void 0 : r.selector);
    return;
  }
  if (n) {
    r == null || r.callback(e, r == null ? void 0 : r.selector);
    return;
  }
  He.find(r == null ? void 0 : r.selector).forEach((a) => {
    let o = e.getInstance(a);
    o || (o = new e(a), r != null && r.onInit && o[r.onInit]());
  });
}, Gx = (e, t) => {
  e.forEach((r) => Wx(r, t));
}, Kx = {
  allowReinits: !1,
  checkOtherImports: !1
}, Yx = (e, t = {}) => {
  t = { ...Kx, ...t };
  const r = Object.keys(En).map((n) => {
    if (document.querySelector(En[n].selector)) {
      const a = e[En[n].name];
      return !a && !qs.isInited(n) && t.checkOtherImports && console.warn(
        `Please import ${En[n].name} from "tw-elements" package and add it to a object parameter inside "initTE" function`
      ), a;
    }
  });
  Gx(r, t);
}, Jx = { role: "alert" }, Xx = {
  class: "mt-2 hidden w-full items-center rounded bg-primary-100 px-6 py-1 text-base text-neutral-800 shadow-sm data-[te-alert-show]:inline-flex sm:rounded-lg",
  role: "alert",
  "data-te-alert-init": "",
  "data-te-alert-show": ""
}, _4 = {
  __name: "Alert",
  props: {
    message: String
  },
  setup(e) {
    return Ke(() => {
      Yx({ Alert: eo });
    }), (t, r) => (x(), O("div", Jx, [
      $("div", null, [
        $("div", Xx, [
          J(t.$slots, "default"),
          r[0] || (r[0] = $("button", {
            type: "button",
            class: "ml-auto box-content rounded-none border-none p-1 text-neutral-900 opacity-50 hover:text-neutral-900 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none",
            "data-te-alert-dismiss": "",
            "aria-label": "Close"
          }, [
            $("span", { class: "w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25" }, [
              $("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                class: "h-6 w-6"
              }, [
                $("path", {
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
}, Qx = ["aria-controls"], Zx = {
  class: "text-xs font-semibold uppercase leading-normal text-primary hover:text-primary-700",
  type: "button"
}, eS = ["id"], tS = {
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
    const t = e, r = Q(null), n = Q(null), a = Q(t.open);
    Ke(() => {
      n.value = new zr(r.value, {
        toggle: t.open
      });
    });
    const o = () => {
      n.value.toggle(), a.value = !a.value;
    };
    return (i, l) => (x(), O("div", {
      class: K(["mt-2 rounded-lg border-2 border-gray-200 dark:border-gray-700", { "px-4 py-2": !e.header }])
    }, [
      $("div", {
        class: K(["bg-white sm:rounded-lg", { "p-1": !e.header }])
      }, [
        $("div", {
          onClick: o,
          class: "focusable !block rounded-lg border-b-2 border-gray-200 bg-neutral-50 px-6 py-1 text-center",
          tabindex: "0",
          "aria-controls": e.header ? e.header.replaceAll(" ", "_") : "collapsable",
          style: Mr({ backgroundColor: e.headerColor })
        }, [
          ye(Z(e.header) + " ", 1),
          $("button", Zx, Z(a.value ? "Hide" : "Show"), 1)
        ], 12, Qx),
        $("div", {
          class: "!visible hidden overflow-hidden",
          id: e.header ? e.header.replaceAll(" ", "_") : "collapsable",
          ref_key: "collapseRef",
          ref: r
        }, [
          $("div", {
            class: K([{ "px-4 pb-2": e.header }, "mt-2"])
          }, [
            J(i.$slots, "default")
          ], 2)
        ], 8, eS)
      ], 2)
    ], 2));
  }
}, rS = { class: "relative" }, k4 = {
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
    const t = e, r = (i) => {
      o.value && i.key === "Escape" && (o.value = !1);
    };
    Ke(() => document.addEventListener("keydown", r)), Yr(() => document.removeEventListener("keydown", r));
    const n = ne(() => isNaN(parseInt(t.width)) ? t.width : "w-" + t.width), a = ne(() => t.align === "left" ? "origin-top-left left-0" : t.align === "right" ? "origin-top-right right-0" : "origin-top"), o = Q(!1);
    return (i, l) => (x(), O("div", rS, [
      $("div", {
        onClick: l[0] || (l[0] = (f) => o.value = !o.value)
      }, [
        J(i.$slots, "trigger")
      ]),
      qe($("div", {
        class: "fixed inset-0 z-40",
        onClick: l[1] || (l[1] = (f) => o.value = !1)
      }, null, 512), [
        [Ht, o.value]
      ]),
      ge(pr, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95"
      }, {
        default: de(() => [
          qe($("div", {
            class: K(["absolute z-50 mt-2 rounded-md shadow-lg", [n.value, a.value]]),
            style: { display: "none" },
            onClick: l[2] || (l[2] = (f) => o.value = !1)
          }, [
            $("div", {
              class: K(["rounded ring-1 ring-black ring-opacity-5", e.contentClasses])
            }, [
              J(i.$slots, "content")
            ], 2)
          ], 2), [
            [Ht, o.value]
          ])
        ]),
        _: 3
      })
    ]));
  }
}, T4 = {
  __name: "DropdownLink",
  setup(e) {
    return (t, r) => (x(), oe(M(it), { class: "focusable block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none" }, {
      default: de(() => [
        J(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}, nS = ["href", "target"], $4 = {
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
    const t = e, r = () => t.disabled ? [...t.colourClasses, ["opacity-50", "pointer-events-none"]] : t.colourClasses;
    return (n, a) => e.href && (e.method || e.data) ? (x(), oe(M(it), {
      key: 0,
      href: e.href,
      method: e.method,
      data: e.data,
      class: K(["focusable inline-flex cursor-pointer select-none items-center justify-center gap-1 rounded px-2 text-sm font-medium leading-normal", r()]),
      as: "button",
      tabindex: "0"
    }, {
      default: de(() => [
        J(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "method", "data", "class"])) : (x(), O("a", {
      key: 1,
      href: e.href,
      target: e.target,
      class: K(["focusable inline-flex cursor-pointer select-none items-center justify-center gap-1 rounded px-2 text-sm font-medium leading-normal", r()]),
      tabindex: "0"
    }, [
      J(n.$slots, "default")
    ], 10, nS));
  }
}, aS = {
  class: "relative inline-flex",
  "data-te-dropdown-ref": ""
}, oS = ["id"], iS = ["aria-labelledby"], F4 = {
  __name: "LinkDropdownButton",
  props: {
    title: String
  },
  setup(e) {
    return (t, r) => (x(), O("div", aS, [
      $("button", {
        class: "focusable flex items-center whitespace-nowrap rounded bg-primary px-2 text-sm text-white hover:bg-primary-700 motion-reduce:transition-none",
        type: "button",
        id: e.title,
        "data-te-dropdown-toggle-ref": "",
        "aria-expanded": "false",
        "data-te-ripple-init": "",
        "data-te-ripple-color": "light"
      }, [
        ye(Z(e.title) + " ", 1),
        r[0] || (r[0] = $("span", { class: "mx-1 w-2" }, [
          $("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            class: "h-5 w-5"
          }, [
            $("path", {
              "fill-rule": "evenodd",
              d: "M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",
              "clip-rule": "evenodd"
            })
          ])
        ], -1))
      ], 8, oS),
      $("ul", {
        class: "absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block",
        "aria-labelledby": e.title,
        "data-te-dropdown-menu-ref": ""
      }, [
        J(t.$slots, "default")
      ], 8, iS)
    ]));
  }
}, sS = ["href"], I4 = {
  __name: "LinkDropdownButtonItem",
  props: {
    href: String,
    title: String
  },
  setup(e) {
    return (t, r) => (x(), O("li", null, [
      $("a", {
        class: "focusable inline-flex w-full items-center justify-center whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600",
        href: e.href,
        "data-te-dropdown-item-ref": ""
      }, Z(e.title), 9, sS)
    ]));
  }
}, D4 = {
  __name: "Logs",
  props: {
    header: { default: "Logs" },
    logs: Object
  },
  setup(e) {
    return (t, r) => (x(), oe(M(tS), { header: e.header }, {
      default: de(() => [
        ge(M(AS), { logs: e.logs }, null, 8, ["logs"])
      ]),
      _: 1
    }, 8, ["header"]));
  }
}, lS = {
  key: 0,
  class: "flex w-full items-center justify-center"
}, cS = {
  key: 1,
  class: "mt-1",
  id: "logs"
}, uS = {
  key: 0,
  class: "text-center"
}, fS = {
  key: 1,
  class: "ml-3 border-l-2 border-primary"
}, dS = { class: "flex-start w-full md:flex" }, pS = { class: "-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-primary text-xs text-white" }, hS = { class: "mb-3 ml-2 block w-full rounded-lg bg-neutral-50 px-3 py-2 shadow-md shadow-black/5" }, mS = { class: "mb-1 flex justify-between" }, gS = { class: "text-sm text-neutral-500" }, yS = {
  key: 0,
  class: "text-bold mr-0.5 text-sm text-primary-500"
}, vS = {
  key: 1,
  class: "text-sm text-primary-500"
}, bS = { class: "text-sm text-neutral-500" }, wS = { class: "font-medium" }, xS = {
  key: 0,
  class: "line-through"
}, SS = ["innerHTML"], AS = {
  __name: "LogsContent",
  props: {
    logs: Object
  },
  setup(e) {
    return qn.add(wm, gs, Sm, ym, xm), (t, r) => e.logs == null ? (x(), O("div", lS, [
      ge(M(jd))
    ])) : (x(), O("div", cS, [
      e.logs.total ? (x(), O("ol", fS, [
        (x(!0), O(ce, null, Ge(e.logs.data, (n) => (x(), O("li", {
          key: n.id
        }, [
          $("div", dS, [
            $("div", pS, [
              ge(M(yt), {
                icon: n.icon
              }, null, 8, ["icon"])
            ]),
            $("div", hS, [
              $("div", mS, [
                $("span", gS, [
                  ye(Z(n.event_formatted) + " ", 1),
                  n.reference ? (x(), O("span", yS, Z(n.reference), 1)) : G("", !0),
                  n.causer ? (x(), O(ce, { key: 1 }, [
                    n.causer.id ? (x(), oe(M(it), {
                      key: 0,
                      href: t.route("users.show", n.causer.id),
                      class: "text-sm text-primary-500"
                    }, {
                      default: de(() => [
                        ye(" (" + Z(n.causer.first_name) + ") ", 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])) : (x(), O("span", vS, "(" + Z(n.causer.first_name) + ")", 1))
                  ], 64)) : G("", !0)
                ]),
                $("span", bS, Z(n.created_date_full), 1)
              ]),
              (x(!0), O(ce, null, Ge(n.changes_formatted, (a, o) => (x(), O("p", {
                key: o,
                class: "mb-0 text-neutral-700"
              }, [
                $("span", wS, Z(o) + ":", 1),
                a.old ? (x(), O("span", xS, Z(a.old), 1)) : G("", !0),
                ye(" " + Z(a.new), 1)
              ]))), 128)),
              n.description_details ? (x(), O("p", {
                key: 0,
                class: "text-neutral-700",
                innerHTML: n.description_details
              }, null, 8, SS)) : G("", !0)
            ])
          ])
        ]))), 128))
      ])) : (x(), O("p", uS, "No Data")),
      e.logs.links ? (x(), oe(M(Md), {
        key: 2,
        class: "mt-6",
        links: e.logs.links,
        logs: !0
      }, null, 8, ["links"])) : G("", !0)
    ]));
  }
}, L4 = /* @__PURE__ */ St({
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
    const r = e, n = t, a = Q(null);
    $t(
      () => r.show,
      () => {
        r.show ? document.body.style.overflow = "hidden" : document.body.style.overflow = null;
      }
    );
    const o = () => {
      r.closeable && n("close");
    }, i = (w) => {
      w.key === "Escape" && r.show && o();
    };
    Ke(() => document.addEventListener("keydown", i)), Yr(() => {
      document.removeEventListener("keydown", i), document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", _), document.body.style.overflow = null;
    });
    const l = ne(() => {
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
        }[r.maxWidth]
      ), r.hideOverflow && w.push("overflow-hidden"), w.join(" ");
    }), f = Q(!1), c = Q(null), u = Q(0), p = Q(0), m = Q(0), E = Q(0), S = Q(null), A = Q(null), C = (w, I) => {
      f.value = !0, document.addEventListener("mousemove", T), document.addEventListener("mouseup", _), c.value = I, u.value = w.clientX, p.value = w.clientY, m.value = a.value.offsetWidth, E.value = a.value.offsetHeight;
    }, _ = (w) => {
      f.value = !1, document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", _);
    }, T = (w) => {
      if (!f.value)
        return;
      const I = (w.clientX - u.value) * 2, D = w.clientY - p.value;
      c.value.includes("x") && (S.value = m.value + I + "px"), c.value.includes("-x") && (S.value = m.value - I + "px"), c.value.includes("y") && (A.value = E.value + D + "px");
    };
    return (w, I) => (x(), oe(Kd, { to: "body" }, [
      ge(pr, { "leave-active-class": "duration-200" }, {
        default: de(() => [
          qe($("div", {
            class: K(["modal fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0", { flex: e.alignCenter, "mb-16 items-center justify-center": e.alignCenter }]),
            "scroll-region": ""
          }, [
            ge(pr, {
              "enter-active-class": `backdrop-transition enter ease-out duration-[${e.backdropDuration}ms]`,
              "enter-from-class": "opacity-0",
              "enter-to-class": "opacity-100",
              "leave-active-class": `backdrop-transition leave ease-in duration-[${e.backdropDuration}ms]`,
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: de(() => [
                qe($("div", {
                  class: "fixed inset-0 transform transition-all",
                  onClick: o
                }, [
                  $("div", {
                    class: K(["backdrop absolute inset-0 bg-gray-500 opacity-75", { [e.backdropCustomClass]: !!e.backdropCustomClass }])
                  }, null, 2)
                ], 512), [
                  [Ht, e.show]
                ])
              ]),
              _: 1
            }, 8, ["enter-active-class", "leave-active-class"]),
            ge(pr, {
              "enter-active-class": `modal-transition enter ease-out duration-[${e.modalDuration}ms]`,
              "enter-from-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              "enter-to-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-active-class": `modal-transition leave ease-in duration-[${e.modalDuration}ms]`,
              "leave-from-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-to-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            }, {
              default: de(() => [
                qe($("div", {
                  ref_key: "modalContent",
                  ref: a,
                  class: K(["mb-6 transform rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full", {
                    [l.value]: !!l.value,
                    "border-pink rounded-md border-2 border-solid": e.showBorder,
                    [e.modalCustomClass]: !!e.modalCustomClass
                  }]),
                  style: Mr({
                    userSelect: f.value ? "none" : "auto",
                    transition: f.value ? "none" : "",
                    width: S.value || "",
                    height: A.value || "",
                    maxWidth: S.value || "",
                    maxHeight: A.value || ""
                  })
                }, [
                  e.show ? J(w.$slots, "default", { key: 0 }) : G("", !0),
                  e.resizable ? (x(), O(ce, { key: 1 }, [
                    $("div", {
                      class: "absolute bottom-0 left-0 h-1 w-full cursor-row-resize",
                      onMousedown: I[0] || (I[0] = (D) => C(D, "y")),
                      onMouseup: _
                    }, null, 32),
                    $("div", {
                      class: "absolute left-0 top-0 h-full w-1 cursor-col-resize",
                      onMousedown: I[1] || (I[1] = (D) => C(D, "-x")),
                      onMouseup: _
                    }, null, 32),
                    $("div", {
                      class: "absolute right-0 top-0 h-full w-1 cursor-col-resize",
                      onMousedown: I[2] || (I[2] = (D) => C(D, "x")),
                      onMouseup: _
                    }, null, 32),
                    $("div", {
                      class: "absolute bottom-0 right-0 h-1 w-1 cursor-se-resize",
                      onMousedown: I[3] || (I[3] = (D) => C(D, "xy")),
                      onMouseup: _
                    }, null, 32),
                    $("div", {
                      class: "absolute bottom-0 left-0 h-1 w-1 cursor-sw-resize",
                      onMousedown: I[4] || (I[4] = (D) => C(D, "-xy")),
                      onMouseup: _
                    }, null, 32)
                  ], 64)) : G("", !0)
                ], 6), [
                  [Ht, e.show]
                ])
              ]),
              _: 3
            }, 8, ["enter-active-class", "leave-active-class"])
          ], 2), [
            [Ht, e.show]
          ])
        ]),
        _: 3
      })
    ]));
  }
}), ES = { class: "ml-3 flex-1 whitespace-nowrap" }, R4 = {
  __name: "NavLink",
  props: {
    href: String,
    active: Boolean
  },
  setup(e) {
    const t = e, r = ne(
      () => t.active ? "focusable flex items-center p-2 text-base font-normal bg-accent text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700" : "focusable flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    );
    return (n, a) => (x(), oe(M(it), {
      href: e.href,
      class: K(r.value)
    }, {
      default: de(() => [
        J(n.$slots, "icon"),
        $("span", ES, [
          J(n.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}, OS = { class: "pagination flex justify-between" }, CS = ["value", "selected"], PS = {
  key: 0,
  "aria-label": "Page navigation"
}, _S = ["innerHTML"], kS = ["innerHTML", "onClick"], Md = {
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
    const r = t, n = e, a = Q(n.defaultPerPage), o = [10, 25, 50, 100, 250], i = ne(() => {
      if (!n.links || n.links.length <= 3)
        return n.links;
      const c = n.links[0], u = n.links[n.links.length - 1], p = n.links.findIndex((S) => S.active);
      let m = Math.max(1, p - Math.floor(n.maxPagesToShow / 2)), E = Math.min(n.links.length - 2, m + n.maxPagesToShow - 1);
      return E - m < n.maxPagesToShow - 1 && (m = Math.max(1, E - n.maxPagesToShow + 1)), [c, ...n.links.slice(m, E + 1), u];
    }), l = (c) => {
      r("change", c);
    }, f = (c) => {
      let u = new URL(window.location.href);
      if (u.searchParams.set("per_page", c.target.value), n.linkReturn) {
        l(u.href);
        return;
      }
      window.location.href = u.href;
    };
    return (c, u) => (x(), O("div", OS, [
      $("div", null, [
        e.showPerPage ? (x(), oe(M(Lm), {
          key: 0,
          type: "select",
          modelValue: a.value,
          "onUpdate:modelValue": u[0] || (u[0] = (p) => a.value = p),
          class: "per-page-input w-20",
          onChanged: f
        }, {
          default: de(() => [
            (x(), O(ce, null, Ge(o, (p) => $("option", {
              key: p,
              value: p,
              selected: p == a.value
            }, Z(p), 9, CS)), 64))
          ]),
          _: 1
        }, 8, ["modelValue"])) : G("", !0)
      ]),
      i.value.length > 3 ? (x(), O("nav", PS, [
        $("ul", {
          class: K(["list-style-none flex", { [e.customListClass]: e.customListClass }])
        }, [
          (x(!0), O(ce, null, Ge(i.value, (p, m) => (x(), O("li", { key: m }, [
            e.linkReturn ? (x(), O(ce, { key: 0 }, [
              p.url === null ? (x(), O("button", {
                key: 0,
                class: K(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [e.customLinkClass]: e.customLinkClass
                }]),
                innerHTML: p.label,
                onClick: u[1] || (u[1] = (E) => l(""))
              }, null, 10, _S)) : (x(), O("button", {
                key: 1,
                class: K(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", {
                  "font-bold text-primary": p.active,
                  [e.customLinkClass]: e.customLinkClass,
                  [e.customActiveLinkClass]: p.active && e.customActiveLinkClass
                }]),
                innerHTML: p.label,
                onClick: (E) => l(p.url)
              }, null, 10, kS))
            ], 64)) : (x(), O(ce, { key: 1 }, [
              p.url === null ? (x(), oe(M(it), {
                key: 0,
                class: K(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [e.customLinkClass]: e.customLinkClass
                }]),
                innerHTML: p.label,
                href: ""
              }, null, 8, ["class", "innerHTML"])) : (x(), oe(M(it), {
                key: 1,
                class: K(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", {
                  "font-bold text-primary": p.active,
                  [e.customLinkClass]: e.customLinkClass,
                  [e.customActiveLinkClass]: p.active && e.customActiveLinkClass
                }]),
                href: p.url,
                innerHTML: p.label,
                preserveScroll: e.preserveScroll || e.logs,
                preserveState: e.preserveState || e.logs,
                only: e.logs ? ["logs"] : e.only
              }, null, 8, ["class", "href", "innerHTML", "preserveScroll", "preserveState", "only"]))
            ], 64))
          ]))), 128))
        ], 2)
      ])) : G("", !0),
      u[2] || (u[2] = $("div", null, null, -1))
    ]));
  }
}, TS = ["type", "disabled"], Bd = {
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
    return (t, r) => (x(), O("button", {
      type: e.type,
      disabled: e.disabled,
      class: K({
        [e.customButtonClass]: !!e.customButtonClass,
        "focusable inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-primary-700 focus:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 active:bg-primary-700 disabled:cursor-not-allowed disabled:brightness-125 disabled:grayscale-[30%]": !e.customButtonClass
      })
    }, [
      J(t.$slots, "default")
    ], 10, TS));
  }
}, $S = ["type", "disabled"], N4 = {
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
    return (t, r) => (x(), O("button", {
      type: e.type,
      disabled: e.disabled,
      class: "focusable inline-flex items-center rounded border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700 disabled:cursor-not-allowed disabled:brightness-125 disabled:grayscale-[30%]"
    }, [
      J(t.$slots, "default")
    ], 8, $S));
  }
}, M4 = {
  __name: "ResponsiveNavLink",
  props: ["href", "active"],
  setup(e) {
    const t = e, r = ne(
      () => t.active ? "focusable block w-full pl-3 pr-4 py-2 border-l-4 border-accent-400 text-left text-base font-medium text-accent-700 bg-accent-50 focus:outline-none focus:text-accent-800 focus:bg-accent-100 focus:border-accent-700 transition duration-150 ease-in-out" : "focusable block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (n, a) => (x(), oe(M(it), {
      href: e.href,
      class: K(r.value)
    }, {
      default: de(() => [
        J(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}, FS = ["type"], B4 = {
  __name: "SecondaryButton",
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(e) {
    return (t, r) => (x(), O("button", {
      type: e.type,
      class: "focusable inline-flex items-center rounded border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:opacity-25"
    }, [
      J(t.$slots, "default")
    ], 8, FS));
  }
}, IS = {
  key: 0,
  class: "relative mb-2 rounded-lg border-b-2 border-gray-200 bg-neutral-50 px-6 py-1 text-center"
}, DS = {
  key: 0,
  class: "absolute right-0 top-0 mr-2 mt-1"
}, j4 = {
  __name: "Section",
  props: {
    header: String,
    overflow: {
      default: !1,
      type: Boolean
    }
  },
  setup(e) {
    return (t, r) => (x(), O("div", {
      class: K(["rounded-lg border-2 border-gray-200 bg-white dark:border-gray-700", { "px-4 py-2": !e.header, "overflow-hidden": e.overflow }])
    }, [
      $("div", {
        class: K(["sm:rounded-lg", { "p-1": !e.header }])
      }, [
        e.header ? (x(), O("div", IS, [
          $("span", null, Z(e.header), 1),
          t.$slots.headerButton ? (x(), O("div", DS, [
            J(t.$slots, "headerButton")
          ])) : G("", !0)
        ])) : G("", !0),
        $("div", {
          class: K({ "px-4 pb-2": e.header })
        }, [
          J(t.$slots, "default")
        ], 2)
      ], 2)
    ], 2));
  }
}, LS = {}, RS = {
  class: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]",
  role: "status"
};
function NS(e, t) {
  return x(), O("div", RS, t[0] || (t[0] = [
    $("span", { class: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" }, "Loading...", -1)
  ]));
}
const jd = /* @__PURE__ */ zn(LS, [["render", NS]]), MS = ["onClick"], BS = { class: "h:10 rounded-t-lg bg-white py-1 text-center md:h-10 md:py-2" }, q4 = {
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
    const r = t, n = e, a = (i) => {
      o(i) && (i = null), r("updateSearch", i);
    }, o = (i) => n.statusName != null ? route().params[n.statusName] == i : route().params.status == i;
    return (i, l) => (x(), O("div", null, [
      $("div", {
        class: K(["flex flex-wrap gap-2 lg:flex-nowrap", { [e.customContainerClass]: e.customContainerClass }])
      }, [
        (x(!0), O(ce, null, Ge(e.stats, (f) => (x(), O("div", {
          class: K(["flex w-full cursor-pointer flex-col rounded-lg border bg-gray-100 shadow", {
            "border-primary bg-primary-50 shadow-primary-50": o(f.name),
            [e.customStatClass]: e.customStatClass
          }]),
          onClick: (c) => a(f.name),
          key: f.value
        }, [
          $("div", null, [
            $("div", BS, [
              $("h5", {
                class: K(["text-xl font-medium leading-tight text-neutral-800", { [e.customStatValueClass]: e.customStatValueClass }])
              }, Z(f.value), 3)
            ])
          ]),
          $("div", {
            class: K(["flex flex-auto flex-col gap-y-4 p-1 text-center md:py-2", { [e.customStatLabelClass]: e.customStatLabelClass }])
          }, Z(f.label ?? f.name), 3)
        ], 10, MS))), 128))
      ], 2)
    ]));
  }
}, z4 = {
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
  setup(e, { expose: t, emit: r }) {
    var _;
    const n = e, a = r, o = Q([]), i = Q(1), l = Q(!0), f = Q(0), c = Q(""), u = Q(((_ = n.form) == null ? void 0 : _[n.field]) || n.modelValue), p = Q(u.value), m = Q(null), E = (T) => {
      p.value = u.value, u.value = T, a("update:modelValue", T), a("changed", T), T || (S(""), m.value = null);
    }, S = (T) => {
      T == "" && u.value && u.value !== p.value || (i.value = 1, f.value = 0, c.value = T, A());
    }, A = async (T = !1) => {
      const w = new URLSearchParams();
      w.append("term", c.value), w.append("page", i.value), n.queryParams && Object.keys(n.queryParams).forEach((B) => {
        w.append(B, n.queryParams[B]);
      }), T && u.value && w.append("ajax_id", u.value);
      const D = await (await fetch(`${n.url}?${w.toString()}`)).json();
      if (l.value = D.current_page < D.last_page, i.value === 1) {
        if (o.value = D.data, u.value) {
          const B = o.value.find((z) => z[n.optionValue] == u.value);
          m.value = B ? B[n.optionText] : null;
        }
        return;
      }
      o.value = o.value.concat(D.data);
    };
    return Ke(() => {
      A(!0);
      const T = document.getElementById(n.id).parentNode.querySelector(".menu");
      T == null || T.addEventListener(
        "scroll",
        (w) => {
          w.target.scrollTop > f.value && w.target.scrollTop + w.target.clientHeight >= w.target.scrollHeight && l.value && (i.value++, A());
        },
        {
          passive: !0
        }
      );
    }), t({ getCurrentOption: () => o.value.find((T) => T[n.optionValue] == u.value) }), (T, w) => (x(), oe(M(Bg), {
      id: e.id,
      label: e.label,
      list: o.value,
      optionValue: e.optionValue,
      optionText: e.optionText,
      optionDisabled: e.optionDisabled,
      placeholder: m.value ?? e.placeholder,
      field: e.field,
      form: e.form,
      modelValue: u.value,
      noLabel: e.noLabel,
      disabled: e.disabled,
      noForm: e.noForm,
      required: e.required,
      "onUpdate:modelValue": w[0] || (w[0] = (I) => E(I)),
      onSearchchange: S,
      filterPredicate: (I, D) => !0
    }, null, 8, ["id", "label", "list", "optionValue", "optionText", "optionDisabled", "placeholder", "field", "form", "modelValue", "noLabel", "disabled", "noForm", "required"]));
  }
};
const jS = ["id", "aria-controls"], qS = { class: "ml-3 flex-1 whitespace-nowrap text-left" }, zS = ["id"], US = {
  __name: "NavCollapse",
  props: {
    show: { type: Boolean, default: !1 },
    name: String
  },
  setup(e) {
    const t = e, r = Q(null), n = Q(null), a = Q(t.show);
    Ke(() => {
      n.value = new zr(r.value, {
        toggle: t.show
      });
    });
    const o = () => {
      n.value.toggle(), a.value = !a.value;
    };
    return (i, l) => (x(), O("li", null, [
      $("button", {
        id: e.name,
        onClick: o,
        class: "focusable group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
        "aria-controls": e.name ? e.name.replaceAll(" ", "_") : "collapsable"
      }, [
        J(i.$slots, "icon", {}, void 0, !0),
        $("span", qS, Z(e.name), 1),
        l[0] || (l[0] = $("svg", {
          class: "h-3 w-3 transform",
          "aria-hidden": "true",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 10 6"
        }, [
          $("path", {
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "m1 1 4 4 4-4"
          })
        ], -1))
      ], 8, jS),
      $("ul", {
        class: "!visible hidden space-y-1 px-4",
        id: e.name ? e.name.replaceAll(" ", "_") : "collapsable",
        ref_key: "collapseRef",
        ref: r
      }, [
        J(i.$slots, "default", {}, void 0, !0)
      ], 8, zS)
    ]));
  }
}, U4 = /* @__PURE__ */ zn(US, [["__scopeId", "data-v-03a62b00"]]), VS = { class: "border-t border-gray-100" }, HS = { class: "divide-y divide-gray-100" }, V4 = {
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
    const r = e, n = Q(!1);
    $t(
      () => {
        var c;
        return (c = r.form) == null ? void 0 : c.processing;
      },
      (c) => {
        if (c) {
          n.value = !0;
          return;
        }
        n.value && (n.value = !1, r.stopEditOnSubmit && l());
      }
    );
    const a = Q([]);
    Yd("registerItem", (c) => {
      a.value.push(c);
    });
    const i = () => {
      a.value.forEach((c) => {
        c && typeof c.startEditing == "function" && c.startEditing();
      });
    }, l = () => {
      a.value.forEach((c) => {
        c && typeof c.stopEditing == "function" && c.stopEditing();
      });
    };
    return t({
      startEditing: i,
      stopEditing: l,
      toggleEditing: () => {
        a.value.forEach((c) => {
          c && typeof c.toggleEditing == "function" && c.toggleEditing();
        });
      }
    }), (c, u) => (x(), O("div", VS, [
      $("dl", HS, [
        J(c.$slots, "default")
      ])
    ]));
  }
}, WS = { class: "description-list-item px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" }, GS = { class: "flex items-center text-sm font-medium" }, KS = {
  key: 0,
  class: "ml-1 text-red-500"
}, YS = { class: "mt-1 min-h-[42px] text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0" }, JS = { class: "flex min-h-full items-center" }, XS = { class: "slot-content flex-grow" }, QS = { class: "ml-4 flex-shrink-0" }, ZS = { class: "slot-edit flex-grow" }, e4 = { class: "ml-4 flex-shrink-0" }, H4 = {
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
  setup(e, { expose: t, emit: r }) {
    qn.add(gs, Jl);
    const n = e, a = r, o = Q(n.editable ? n.forceEditing : !1), i = () => {
      n.editable && (o.value = !o.value, a("editToggled", o.value));
    };
    $t(
      () => n.forceEditing,
      (p) => {
        n.editable && (o.value = p);
      }
    );
    const l = () => {
      n.editable && (o.value = !0);
    }, f = () => {
      n.editable && (o.value = !1);
    }, c = Jd("registerItem");
    return Ke(() => {
      c && c({ startEditing: l, stopEditing: f, toggleEditing: i });
    }), t({
      toggleEditing: i,
      startEditing: l,
      stopEditing: f,
      isEditing: () => o.value
    }), (p, m) => (x(), O("div", WS, [
      $("dt", GS, [
        ye(Z(e.label) + " ", 1),
        J(p.$slots, "label"),
        e.required ? (x(), O("span", KS, "*")) : G("", !0)
      ]),
      $("dd", YS, [
        $("div", JS, [
          o.value ? (x(), O(ce, { key: 1 }, [
            $("div", ZS, [
              J(p.$slots, "edit")
            ]),
            $("span", e4, [
              $("button", {
                type: "button",
                onClick: i,
                class: "text-xl font-bold text-primary hover:text-primary-400"
              }, [
                ge(M(yt), { icon: M(Jl) }, null, 8, ["icon"])
              ])
            ])
          ], 64)) : (x(), O(ce, { key: 0 }, [
            $("div", XS, [
              J(p.$slots, "default"),
              ye(" " + Z(e.value), 1)
            ]),
            $("span", QS, [
              e.editable ? (x(), O("button", {
                key: 0,
                type: "button",
                onClick: i,
                class: "text-lg font-bold text-primary hover:text-primary-400"
              }, [
                ge(M(yt), { icon: M(gs) }, null, 8, ["icon"])
              ])) : G("", !0),
              J(p.$slots, "buttons")
            ])
          ], 64))
        ])
      ])
    ]));
  }
};
var qd = { exports: {} };
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
    var t = "input is invalid type", r = "finalize already called", n = typeof window == "object", a = n ? window : {};
    a.JS_MD5_NO_WINDOW && (n = !1);
    var o = !n && typeof self == "object", i = !a.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    i ? a = at : o && (a = self);
    var l = !a.JS_MD5_NO_COMMON_JS && !0 && e.exports, f = !a.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", c = "0123456789abcdef".split(""), u = [128, 32768, 8388608, -2147483648], p = [0, 8, 16, 24], m = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], E = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), S = [], A;
    if (f) {
      var C = new ArrayBuffer(68);
      A = new Uint8Array(C), S = new Uint32Array(C);
    }
    var _ = Array.isArray;
    (a.JS_MD5_NO_NODE_JS || !_) && (_ = function(h) {
      return Object.prototype.toString.call(h) === "[object Array]";
    });
    var T = ArrayBuffer.isView;
    f && (a.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !T) && (T = function(h) {
      return typeof h == "object" && h.buffer && h.buffer.constructor === ArrayBuffer;
    });
    var w = function(h) {
      var y = typeof h;
      if (y === "string")
        return [h, !0];
      if (y !== "object" || h === null)
        throw new Error(t);
      if (f && h.constructor === ArrayBuffer)
        return [new Uint8Array(h), !1];
      if (!_(h) && !T(h))
        throw new Error(t);
      return [h, !1];
    }, I = function(h) {
      return function(y) {
        return new q(!0).update(y)[h]();
      };
    }, D = function() {
      var h = I("hex");
      i && (h = B(h)), h.create = function() {
        return new q();
      }, h.update = function(g) {
        return h.create().update(g);
      };
      for (var y = 0; y < m.length; ++y) {
        var b = m[y];
        h[b] = I(b);
      }
      return h;
    }, B = function(h) {
      var y = ys, b = ys.Buffer, g;
      b.from && !a.JS_MD5_NO_BUFFER_FROM ? g = b.from : g = function(R) {
        return new b(R);
      };
      var j = function(R) {
        if (typeof R == "string")
          return y.createHash("md5").update(R, "utf8").digest("hex");
        if (R == null)
          throw new Error(t);
        return R.constructor === ArrayBuffer && (R = new Uint8Array(R)), _(R) || T(R) || R.constructor === b ? y.createHash("md5").update(g(R)).digest("hex") : h(R);
      };
      return j;
    }, z = function(h) {
      return function(y, b) {
        return new F(y, !0).update(b)[h]();
      };
    }, ee = function() {
      var h = z("hex");
      h.create = function(g) {
        return new F(g);
      }, h.update = function(g, j) {
        return h.create(g).update(j);
      };
      for (var y = 0; y < m.length; ++y) {
        var b = m[y];
        h[b] = z(b);
      }
      return h;
    };
    function q(h) {
      if (h)
        S[0] = S[16] = S[1] = S[2] = S[3] = S[4] = S[5] = S[6] = S[7] = S[8] = S[9] = S[10] = S[11] = S[12] = S[13] = S[14] = S[15] = 0, this.blocks = S, this.buffer8 = A;
      else if (f) {
        var y = new ArrayBuffer(68);
        this.buffer8 = new Uint8Array(y), this.blocks = new Uint32Array(y);
      } else
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
    }
    q.prototype.update = function(h) {
      if (this.finalized)
        throw new Error(r);
      var y = w(h);
      h = y[0];
      for (var b = y[1], g, j = 0, R, L = h.length, V = this.blocks, Y = this.buffer8; j < L; ) {
        if (this.hashed && (this.hashed = !1, V[0] = V[16], V[16] = V[1] = V[2] = V[3] = V[4] = V[5] = V[6] = V[7] = V[8] = V[9] = V[10] = V[11] = V[12] = V[13] = V[14] = V[15] = 0), b)
          if (f)
            for (R = this.start; j < L && R < 64; ++j)
              g = h.charCodeAt(j), g < 128 ? Y[R++] = g : g < 2048 ? (Y[R++] = 192 | g >>> 6, Y[R++] = 128 | g & 63) : g < 55296 || g >= 57344 ? (Y[R++] = 224 | g >>> 12, Y[R++] = 128 | g >>> 6 & 63, Y[R++] = 128 | g & 63) : (g = 65536 + ((g & 1023) << 10 | h.charCodeAt(++j) & 1023), Y[R++] = 240 | g >>> 18, Y[R++] = 128 | g >>> 12 & 63, Y[R++] = 128 | g >>> 6 & 63, Y[R++] = 128 | g & 63);
          else
            for (R = this.start; j < L && R < 64; ++j)
              g = h.charCodeAt(j), g < 128 ? V[R >>> 2] |= g << p[R++ & 3] : g < 2048 ? (V[R >>> 2] |= (192 | g >>> 6) << p[R++ & 3], V[R >>> 2] |= (128 | g & 63) << p[R++ & 3]) : g < 55296 || g >= 57344 ? (V[R >>> 2] |= (224 | g >>> 12) << p[R++ & 3], V[R >>> 2] |= (128 | g >>> 6 & 63) << p[R++ & 3], V[R >>> 2] |= (128 | g & 63) << p[R++ & 3]) : (g = 65536 + ((g & 1023) << 10 | h.charCodeAt(++j) & 1023), V[R >>> 2] |= (240 | g >>> 18) << p[R++ & 3], V[R >>> 2] |= (128 | g >>> 12 & 63) << p[R++ & 3], V[R >>> 2] |= (128 | g >>> 6 & 63) << p[R++ & 3], V[R >>> 2] |= (128 | g & 63) << p[R++ & 3]);
        else if (f)
          for (R = this.start; j < L && R < 64; ++j)
            Y[R++] = h[j];
        else
          for (R = this.start; j < L && R < 64; ++j)
            V[R >>> 2] |= h[j] << p[R++ & 3];
        this.lastByteIndex = R, this.bytes += R - this.start, R >= 64 ? (this.start = R - 64, this.hash(), this.hashed = !0) : this.start = R;
      }
      return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
    }, q.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = !0;
        var h = this.blocks, y = this.lastByteIndex;
        h[y >>> 2] |= u[y & 3], y >= 56 && (this.hashed || this.hash(), h[0] = h[16], h[16] = h[1] = h[2] = h[3] = h[4] = h[5] = h[6] = h[7] = h[8] = h[9] = h[10] = h[11] = h[12] = h[13] = h[14] = h[15] = 0), h[14] = this.bytes << 3, h[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
      }
    }, q.prototype.hash = function() {
      var h, y, b, g, j, R, L = this.blocks;
      this.first ? (h = L[0] - 680876937, h = (h << 7 | h >>> 25) - 271733879 << 0, g = (-1732584194 ^ h & 2004318071) + L[1] - 117830708, g = (g << 12 | g >>> 20) + h << 0, b = (-271733879 ^ g & (h ^ -271733879)) + L[2] - 1126478375, b = (b << 17 | b >>> 15) + g << 0, y = (h ^ b & (g ^ h)) + L[3] - 1316259209, y = (y << 22 | y >>> 10) + b << 0) : (h = this.h0, y = this.h1, b = this.h2, g = this.h3, h += (g ^ y & (b ^ g)) + L[0] - 680876936, h = (h << 7 | h >>> 25) + y << 0, g += (b ^ h & (y ^ b)) + L[1] - 389564586, g = (g << 12 | g >>> 20) + h << 0, b += (y ^ g & (h ^ y)) + L[2] + 606105819, b = (b << 17 | b >>> 15) + g << 0, y += (h ^ b & (g ^ h)) + L[3] - 1044525330, y = (y << 22 | y >>> 10) + b << 0), h += (g ^ y & (b ^ g)) + L[4] - 176418897, h = (h << 7 | h >>> 25) + y << 0, g += (b ^ h & (y ^ b)) + L[5] + 1200080426, g = (g << 12 | g >>> 20) + h << 0, b += (y ^ g & (h ^ y)) + L[6] - 1473231341, b = (b << 17 | b >>> 15) + g << 0, y += (h ^ b & (g ^ h)) + L[7] - 45705983, y = (y << 22 | y >>> 10) + b << 0, h += (g ^ y & (b ^ g)) + L[8] + 1770035416, h = (h << 7 | h >>> 25) + y << 0, g += (b ^ h & (y ^ b)) + L[9] - 1958414417, g = (g << 12 | g >>> 20) + h << 0, b += (y ^ g & (h ^ y)) + L[10] - 42063, b = (b << 17 | b >>> 15) + g << 0, y += (h ^ b & (g ^ h)) + L[11] - 1990404162, y = (y << 22 | y >>> 10) + b << 0, h += (g ^ y & (b ^ g)) + L[12] + 1804603682, h = (h << 7 | h >>> 25) + y << 0, g += (b ^ h & (y ^ b)) + L[13] - 40341101, g = (g << 12 | g >>> 20) + h << 0, b += (y ^ g & (h ^ y)) + L[14] - 1502002290, b = (b << 17 | b >>> 15) + g << 0, y += (h ^ b & (g ^ h)) + L[15] + 1236535329, y = (y << 22 | y >>> 10) + b << 0, h += (b ^ g & (y ^ b)) + L[1] - 165796510, h = (h << 5 | h >>> 27) + y << 0, g += (y ^ b & (h ^ y)) + L[6] - 1069501632, g = (g << 9 | g >>> 23) + h << 0, b += (h ^ y & (g ^ h)) + L[11] + 643717713, b = (b << 14 | b >>> 18) + g << 0, y += (g ^ h & (b ^ g)) + L[0] - 373897302, y = (y << 20 | y >>> 12) + b << 0, h += (b ^ g & (y ^ b)) + L[5] - 701558691, h = (h << 5 | h >>> 27) + y << 0, g += (y ^ b & (h ^ y)) + L[10] + 38016083, g = (g << 9 | g >>> 23) + h << 0, b += (h ^ y & (g ^ h)) + L[15] - 660478335, b = (b << 14 | b >>> 18) + g << 0, y += (g ^ h & (b ^ g)) + L[4] - 405537848, y = (y << 20 | y >>> 12) + b << 0, h += (b ^ g & (y ^ b)) + L[9] + 568446438, h = (h << 5 | h >>> 27) + y << 0, g += (y ^ b & (h ^ y)) + L[14] - 1019803690, g = (g << 9 | g >>> 23) + h << 0, b += (h ^ y & (g ^ h)) + L[3] - 187363961, b = (b << 14 | b >>> 18) + g << 0, y += (g ^ h & (b ^ g)) + L[8] + 1163531501, y = (y << 20 | y >>> 12) + b << 0, h += (b ^ g & (y ^ b)) + L[13] - 1444681467, h = (h << 5 | h >>> 27) + y << 0, g += (y ^ b & (h ^ y)) + L[2] - 51403784, g = (g << 9 | g >>> 23) + h << 0, b += (h ^ y & (g ^ h)) + L[7] + 1735328473, b = (b << 14 | b >>> 18) + g << 0, y += (g ^ h & (b ^ g)) + L[12] - 1926607734, y = (y << 20 | y >>> 12) + b << 0, j = y ^ b, h += (j ^ g) + L[5] - 378558, h = (h << 4 | h >>> 28) + y << 0, g += (j ^ h) + L[8] - 2022574463, g = (g << 11 | g >>> 21) + h << 0, R = g ^ h, b += (R ^ y) + L[11] + 1839030562, b = (b << 16 | b >>> 16) + g << 0, y += (R ^ b) + L[14] - 35309556, y = (y << 23 | y >>> 9) + b << 0, j = y ^ b, h += (j ^ g) + L[1] - 1530992060, h = (h << 4 | h >>> 28) + y << 0, g += (j ^ h) + L[4] + 1272893353, g = (g << 11 | g >>> 21) + h << 0, R = g ^ h, b += (R ^ y) + L[7] - 155497632, b = (b << 16 | b >>> 16) + g << 0, y += (R ^ b) + L[10] - 1094730640, y = (y << 23 | y >>> 9) + b << 0, j = y ^ b, h += (j ^ g) + L[13] + 681279174, h = (h << 4 | h >>> 28) + y << 0, g += (j ^ h) + L[0] - 358537222, g = (g << 11 | g >>> 21) + h << 0, R = g ^ h, b += (R ^ y) + L[3] - 722521979, b = (b << 16 | b >>> 16) + g << 0, y += (R ^ b) + L[6] + 76029189, y = (y << 23 | y >>> 9) + b << 0, j = y ^ b, h += (j ^ g) + L[9] - 640364487, h = (h << 4 | h >>> 28) + y << 0, g += (j ^ h) + L[12] - 421815835, g = (g << 11 | g >>> 21) + h << 0, R = g ^ h, b += (R ^ y) + L[15] + 530742520, b = (b << 16 | b >>> 16) + g << 0, y += (R ^ b) + L[2] - 995338651, y = (y << 23 | y >>> 9) + b << 0, h += (b ^ (y | ~g)) + L[0] - 198630844, h = (h << 6 | h >>> 26) + y << 0, g += (y ^ (h | ~b)) + L[7] + 1126891415, g = (g << 10 | g >>> 22) + h << 0, b += (h ^ (g | ~y)) + L[14] - 1416354905, b = (b << 15 | b >>> 17) + g << 0, y += (g ^ (b | ~h)) + L[5] - 57434055, y = (y << 21 | y >>> 11) + b << 0, h += (b ^ (y | ~g)) + L[12] + 1700485571, h = (h << 6 | h >>> 26) + y << 0, g += (y ^ (h | ~b)) + L[3] - 1894986606, g = (g << 10 | g >>> 22) + h << 0, b += (h ^ (g | ~y)) + L[10] - 1051523, b = (b << 15 | b >>> 17) + g << 0, y += (g ^ (b | ~h)) + L[1] - 2054922799, y = (y << 21 | y >>> 11) + b << 0, h += (b ^ (y | ~g)) + L[8] + 1873313359, h = (h << 6 | h >>> 26) + y << 0, g += (y ^ (h | ~b)) + L[15] - 30611744, g = (g << 10 | g >>> 22) + h << 0, b += (h ^ (g | ~y)) + L[6] - 1560198380, b = (b << 15 | b >>> 17) + g << 0, y += (g ^ (b | ~h)) + L[13] + 1309151649, y = (y << 21 | y >>> 11) + b << 0, h += (b ^ (y | ~g)) + L[4] - 145523070, h = (h << 6 | h >>> 26) + y << 0, g += (y ^ (h | ~b)) + L[11] - 1120210379, g = (g << 10 | g >>> 22) + h << 0, b += (h ^ (g | ~y)) + L[2] + 718787259, b = (b << 15 | b >>> 17) + g << 0, y += (g ^ (b | ~h)) + L[9] - 343485551, y = (y << 21 | y >>> 11) + b << 0, this.first ? (this.h0 = h + 1732584193 << 0, this.h1 = y - 271733879 << 0, this.h2 = b - 1732584194 << 0, this.h3 = g + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + h << 0, this.h1 = this.h1 + y << 0, this.h2 = this.h2 + b << 0, this.h3 = this.h3 + g << 0);
    }, q.prototype.hex = function() {
      this.finalize();
      var h = this.h0, y = this.h1, b = this.h2, g = this.h3;
      return c[h >>> 4 & 15] + c[h & 15] + c[h >>> 12 & 15] + c[h >>> 8 & 15] + c[h >>> 20 & 15] + c[h >>> 16 & 15] + c[h >>> 28 & 15] + c[h >>> 24 & 15] + c[y >>> 4 & 15] + c[y & 15] + c[y >>> 12 & 15] + c[y >>> 8 & 15] + c[y >>> 20 & 15] + c[y >>> 16 & 15] + c[y >>> 28 & 15] + c[y >>> 24 & 15] + c[b >>> 4 & 15] + c[b & 15] + c[b >>> 12 & 15] + c[b >>> 8 & 15] + c[b >>> 20 & 15] + c[b >>> 16 & 15] + c[b >>> 28 & 15] + c[b >>> 24 & 15] + c[g >>> 4 & 15] + c[g & 15] + c[g >>> 12 & 15] + c[g >>> 8 & 15] + c[g >>> 20 & 15] + c[g >>> 16 & 15] + c[g >>> 28 & 15] + c[g >>> 24 & 15];
    }, q.prototype.toString = q.prototype.hex, q.prototype.digest = function() {
      this.finalize();
      var h = this.h0, y = this.h1, b = this.h2, g = this.h3;
      return [
        h & 255,
        h >>> 8 & 255,
        h >>> 16 & 255,
        h >>> 24 & 255,
        y & 255,
        y >>> 8 & 255,
        y >>> 16 & 255,
        y >>> 24 & 255,
        b & 255,
        b >>> 8 & 255,
        b >>> 16 & 255,
        b >>> 24 & 255,
        g & 255,
        g >>> 8 & 255,
        g >>> 16 & 255,
        g >>> 24 & 255
      ];
    }, q.prototype.array = q.prototype.digest, q.prototype.arrayBuffer = function() {
      this.finalize();
      var h = new ArrayBuffer(16), y = new Uint32Array(h);
      return y[0] = this.h0, y[1] = this.h1, y[2] = this.h2, y[3] = this.h3, h;
    }, q.prototype.buffer = q.prototype.arrayBuffer, q.prototype.base64 = function() {
      for (var h, y, b, g = "", j = this.array(), R = 0; R < 15; )
        h = j[R++], y = j[R++], b = j[R++], g += E[h >>> 2] + E[(h << 4 | y >>> 4) & 63] + E[(y << 2 | b >>> 6) & 63] + E[b & 63];
      return h = j[R], g += E[h >>> 2] + E[h << 4 & 63] + "==", g;
    };
    function F(h, y) {
      var b, g = w(h);
      if (h = g[0], g[1]) {
        var j = [], R = h.length, L = 0, V;
        for (b = 0; b < R; ++b)
          V = h.charCodeAt(b), V < 128 ? j[L++] = V : V < 2048 ? (j[L++] = 192 | V >>> 6, j[L++] = 128 | V & 63) : V < 55296 || V >= 57344 ? (j[L++] = 224 | V >>> 12, j[L++] = 128 | V >>> 6 & 63, j[L++] = 128 | V & 63) : (V = 65536 + ((V & 1023) << 10 | h.charCodeAt(++b) & 1023), j[L++] = 240 | V >>> 18, j[L++] = 128 | V >>> 12 & 63, j[L++] = 128 | V >>> 6 & 63, j[L++] = 128 | V & 63);
        h = j;
      }
      h.length > 64 && (h = new q(!0).update(h).array());
      var Y = [], Qe = [];
      for (b = 0; b < 64; ++b) {
        var Rt = h[b] || 0;
        Y[b] = 92 ^ Rt, Qe[b] = 54 ^ Rt;
      }
      q.call(this, y), this.update(Qe), this.oKeyPad = Y, this.inner = !0, this.sharedMemory = y;
    }
    F.prototype = new q(), F.prototype.finalize = function() {
      if (q.prototype.finalize.call(this), this.inner) {
        this.inner = !1;
        var h = this.array();
        q.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(h), q.prototype.finalize.call(this);
      }
    };
    var U = D();
    U.md5 = U, U.md5.hmac = ee(), l ? e.exports = U : a.md5 = U;
  })();
})(qd);
var t4 = qd.exports;
const r4 = ["src", "alt"], W4 = {
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
    const t = e, r = ne(() => t4.md5(t.email.trim().toLowerCase())), n = ne(() => `https://www.gravatar.com/avatar/${r.value}?s=${t.size}`), a = ne(() => `Gravatar for ${t.email}`);
    return (o, i) => (x(), O("img", {
      src: n.value,
      alt: a.value
    }, null, 8, r4));
  }
}, G4 = {
  __name: "TdCollapseHandler",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(e) {
    return (t, r) => (x(), oe(yl, {
      "data-te-collapse-init": "",
      "data-te-target": "#" + e.collapse_id,
      "aria-expanded": "false",
      "aria-controls": e.collapse_id,
      class: "cursor-pointer"
    }, {
      default: de(() => [
        J(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-te-target", "aria-controls"]));
  }
}, n4 = {
  install(e) {
    for (const t in components)
      e.component(t, components[t]);
  }
};
export {
  _4 as Alert,
  o4 as Checkbox,
  tS as CollapsableSection,
  tS as CollapsibleSection,
  N4 as DangerButton,
  V4 as DescriptionList,
  H4 as DescriptionListItem,
  k4 as Dropdown,
  T4 as DropdownLink,
  s4 as DropdownSearchbar,
  y4 as FileDropZoneInput,
  W4 as GravatarImg,
  v4 as Images,
  Lm as Input,
  Un as InputError,
  tl as InputLabel,
  $4 as LinkButton,
  F4 as LinkDropdownButton,
  I4 as LinkDropdownButtonItem,
  D4 as Logs,
  AS as LogsContent,
  L4 as Modal,
  U4 as NavCollapse,
  R4 as NavLink,
  Md as Pagination,
  Bd as PrimaryButton,
  b4 as RadioButton,
  M4 as ResponsiveNavLink,
  Bg as SearchSelect,
  B4 as SecondaryButton,
  j4 as Section,
  z4 as Select2ajax,
  jd as Spinner,
  q4 as Stats,
  uu as SubmitButton,
  w4 as Table,
  P4 as TableItemCard,
  S4 as Tbody,
  yl as Td,
  G4 as TdCollapseHandler,
  zm as TextInput,
  i4 as Textarea,
  A4 as Th,
  x4 as Thead,
  O4 as TrCollapse,
  E4 as TrCollapseHandler,
  C4 as TrPlaceholder,
  n4 as default,
  Sw as getInertiaPage,
  Kn as getInertiaRouter,
  h4 as hasPermission,
  xw as moneyFormat,
  p4 as numberFormat,
  g4 as setInertiaPage,
  m4 as setInertiaRouter
};
