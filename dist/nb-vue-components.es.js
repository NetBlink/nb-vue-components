import { computed as le, withDirectives as Ve, openBlock as A, createElementBlock as T, normalizeClass as X, vModelCheckbox as uf, defineComponent as hr, watch as jt, h as zt, mergeModels as eu, ref as Z, useModel as Qp, onMounted as Je, createBlock as oe, unref as q, createCommentVNode as K, createElementVNode as D, renderSlot as J, toDisplayString as Q, createVNode as ve, Transition as lr, withCtx as ye, vModelSelect as Zp, Fragment as fe, createTextVNode as ge, vShow as Ut, vModelText as eh, resolveDirective as th, normalizeProps as Ge, guardReactiveProps as tt, renderList as Ye, resolveDynamicComponent as $o, mergeProps as Mn, toHandlers as rh, withModifiers as Mt, withKeys as Pr, normalizeStyle as Nr, shallowRef as nh, markRaw as tu, reactive as hl, onUnmounted as Kn, toRefs as ih, nextTick as ah, Teleport as oh, provide as sh, inject as lh } from "vue";
const uh = ["value"], JE = {
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
  setup(t, { emit: e }) {
    const r = e, n = t, i = le({
      get() {
        return n.checked;
      },
      set(a) {
        r("update:checked", a);
      }
    });
    return (a, o) => Ve((A(), T("input", {
      type: "checkbox",
      value: t.value,
      "onUpdate:modelValue": o[0] || (o[0] = (s) => i.value = s),
      class: X(["rounded border-gray-300 text-accent-600 shadow focus:ring-accent-500", { [t.customClass]: t.customClass }])
    }, null, 10, uh)), [
      [uf, i.value]
    ]);
  }
};
/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function ch(t, e, r) {
  return (e = dh(e)) in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function ru(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function M(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ru(Object(r), !0).forEach(function(n) {
      ch(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ru(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function fh(t, e) {
  if (typeof t != "object" || !t)
    return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (typeof n != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function dh(t) {
  var e = fh(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
const nu = () => {
};
let ml = {}, cf = {}, ff = null, df = {
  mark: nu,
  measure: nu
};
try {
  typeof window < "u" && (ml = window), typeof document < "u" && (cf = document), typeof MutationObserver < "u" && (ff = MutationObserver), typeof performance < "u" && (df = performance);
} catch {
}
const {
  userAgent: iu = ""
} = ml.navigator || {}, Vt = ml, he = cf, au = ff, _i = df;
Vt.document;
const $t = !!he.documentElement && !!he.head && typeof he.addEventListener == "function" && typeof he.createElement == "function", pf = ~iu.indexOf("MSIE") || ~iu.indexOf("Trident/");
var ph = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, hh = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, hf = {
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
}, mh = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, mf = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Ie = "classic", wa = "duotone", gh = "sharp", yh = "sharp-duotone", gf = [Ie, wa, gh, yh], bh = {
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
}, vh = {
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
}, wh = /* @__PURE__ */ new Map([["classic", {
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
}]]), xh = {
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
}, Sh = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], ou = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Oh = ["kit"], Eh = {
  kit: {
    "fa-kit": "fak"
  },
  "kit-duotone": {
    "fa-kit-duotone": "fakd"
  }
}, Ah = ["fak", "fakd"], Ch = {
  kit: {
    fak: "fa-kit"
  },
  "kit-duotone": {
    fakd: "fa-kit-duotone"
  }
}, su = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, ki = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, _h = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], kh = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Ph = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Th = {
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
}, $h = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, ps = {
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
}, Ih = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], hs = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ..._h, ...Ih], Dh = ["solid", "regular", "light", "thin", "duotone", "brands"], yf = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Rh = yf.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Fh = [...Object.keys($h), ...Dh, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", ki.GROUP, ki.SWAP_OPACITY, ki.PRIMARY, ki.SECONDARY].concat(yf.map((t) => "".concat(t, "x"))).concat(Rh.map((t) => "w-".concat(t))), Lh = {
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
const kt = "___FONT_AWESOME___", ms = 16, bf = "fa", vf = "svg-inline--fa", fr = "data-fa-i2svg", gs = "data-fa-pseudo-element", Nh = "data-fa-pseudo-element-pending", gl = "data-prefix", yl = "data-icon", lu = "fontawesome-i2svg", Mh = "async", Bh = ["HTML", "HEAD", "STYLE", "SCRIPT"], wf = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function Yn(t) {
  return new Proxy(t, {
    get(e, r) {
      return r in e ? e[r] : e[Ie];
    }
  });
}
const xf = M({}, hf);
xf[Ie] = M(M(M(M({}, {
  "fa-duotone": "duotone"
}), hf[Ie]), ou.kit), ou["kit-duotone"]);
const jh = Yn(xf), ys = M({}, xh);
ys[Ie] = M(M(M(M({}, {
  duotone: "fad"
}), ys[Ie]), su.kit), su["kit-duotone"]);
const uu = Yn(ys), bs = M({}, ps);
bs[Ie] = M(M({}, bs[Ie]), Ch.kit);
const bl = Yn(bs), vs = M({}, Th);
vs[Ie] = M(M({}, vs[Ie]), Eh.kit);
Yn(vs);
const zh = ph, Sf = "fa-layers-text", Uh = hh, Vh = M({}, bh);
Yn(Vh);
const qh = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Io = mh, Wh = [...Oh, ...Fh], In = Vt.FontAwesomeConfig || {};
function Hh(t) {
  var e = he.querySelector("script[" + t + "]");
  if (e)
    return e.getAttribute(t);
}
function Gh(t) {
  return t === "" ? !0 : t === "false" ? !1 : t === "true" ? !0 : t;
}
he && typeof he.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((e) => {
  let [r, n] = e;
  const i = Gh(Hh(r));
  i != null && (In[n] = i);
});
const Of = {
  styleDefault: "solid",
  familyDefault: Ie,
  cssPrefix: bf,
  replacementClass: vf,
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
In.familyPrefix && (In.cssPrefix = In.familyPrefix);
const zr = M(M({}, Of), In);
zr.autoReplaceSvg || (zr.observeMutations = !1);
const H = {};
Object.keys(Of).forEach((t) => {
  Object.defineProperty(H, t, {
    enumerable: !0,
    set: function(e) {
      zr[t] = e, Dn.forEach((r) => r(H));
    },
    get: function() {
      return zr[t];
    }
  });
});
Object.defineProperty(H, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    zr.cssPrefix = t, Dn.forEach((e) => e(H));
  },
  get: function() {
    return zr.cssPrefix;
  }
});
Vt.FontAwesomeConfig = H;
const Dn = [];
function Kh(t) {
  return Dn.push(t), () => {
    Dn.splice(Dn.indexOf(t), 1);
  };
}
const Lt = ms, yt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Yh(t) {
  if (!t || !$t)
    return;
  const e = he.createElement("style");
  e.setAttribute("type", "text/css"), e.innerHTML = t;
  const r = he.head.childNodes;
  let n = null;
  for (let i = r.length - 1; i > -1; i--) {
    const a = r[i], o = (a.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(o) > -1 && (n = a);
  }
  return he.head.insertBefore(e, n), t;
}
const Jh = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Bn() {
  let t = 12, e = "";
  for (; t-- > 0; )
    e += Jh[Math.random() * 62 | 0];
  return e;
}
function Yr(t) {
  const e = [];
  for (let r = (t || []).length >>> 0; r--; )
    e[r] = t[r];
  return e;
}
function vl(t) {
  return t.classList ? Yr(t.classList) : (t.getAttribute("class") || "").split(" ").filter((e) => e);
}
function Ef(t) {
  return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Xh(t) {
  return Object.keys(t || {}).reduce((e, r) => e + "".concat(r, '="').concat(Ef(t[r]), '" '), "").trim();
}
function xa(t) {
  return Object.keys(t || {}).reduce((e, r) => e + "".concat(r, ": ").concat(t[r].trim(), ";"), "");
}
function wl(t) {
  return t.size !== yt.size || t.x !== yt.x || t.y !== yt.y || t.rotate !== yt.rotate || t.flipX || t.flipY;
}
function Qh(t) {
  let {
    transform: e,
    containerWidth: r,
    iconWidth: n
  } = t;
  const i = {
    transform: "translate(".concat(r / 2, " 256)")
  }, a = "translate(".concat(e.x * 32, ", ").concat(e.y * 32, ") "), o = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "), s = "rotate(".concat(e.rotate, " 0 0)"), u = {
    transform: "".concat(a, " ").concat(o, " ").concat(s)
  }, c = {
    transform: "translate(".concat(n / 2 * -1, " -256)")
  };
  return {
    outer: i,
    inner: u,
    path: c
  };
}
function Zh(t) {
  let {
    transform: e,
    width: r = ms,
    height: n = ms,
    startCentered: i = !1
  } = t, a = "";
  return i && pf ? a += "translate(".concat(e.x / Lt - r / 2, "em, ").concat(e.y / Lt - n / 2, "em) ") : i ? a += "translate(calc(-50% + ".concat(e.x / Lt, "em), calc(-50% + ").concat(e.y / Lt, "em)) ") : a += "translate(".concat(e.x / Lt, "em, ").concat(e.y / Lt, "em) "), a += "scale(".concat(e.size / Lt * (e.flipX ? -1 : 1), ", ").concat(e.size / Lt * (e.flipY ? -1 : 1), ") "), a += "rotate(".concat(e.rotate, "deg) "), a;
}
var em = `:root, :host {
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
function Af() {
  const t = bf, e = vf, r = H.cssPrefix, n = H.replacementClass;
  let i = em;
  if (r !== t || n !== e) {
    const a = new RegExp("\\.".concat(t, "\\-"), "g"), o = new RegExp("\\--".concat(t, "\\-"), "g"), s = new RegExp("\\.".concat(e), "g");
    i = i.replace(a, ".".concat(r, "-")).replace(o, "--".concat(r, "-")).replace(s, ".".concat(n));
  }
  return i;
}
let cu = !1;
function Do() {
  H.autoAddCss && !cu && (Yh(Af()), cu = !0);
}
var tm = {
  mixout() {
    return {
      dom: {
        css: Af,
        insertCss: Do
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Do();
      },
      beforeI2svg() {
        Do();
      }
    };
  }
};
const Pt = Vt || {};
Pt[kt] || (Pt[kt] = {});
Pt[kt].styles || (Pt[kt].styles = {});
Pt[kt].hooks || (Pt[kt].hooks = {});
Pt[kt].shims || (Pt[kt].shims = []);
var bt = Pt[kt];
const Cf = [], _f = function() {
  he.removeEventListener("DOMContentLoaded", _f), ea = 1, Cf.map((t) => t());
};
let ea = !1;
$t && (ea = (he.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(he.readyState), ea || he.addEventListener("DOMContentLoaded", _f));
function rm(t) {
  $t && (ea ? setTimeout(t, 0) : Cf.push(t));
}
function Jn(t) {
  const {
    tag: e,
    attributes: r = {},
    children: n = []
  } = t;
  return typeof t == "string" ? Ef(t) : "<".concat(e, " ").concat(Xh(r), ">").concat(n.map(Jn).join(""), "</").concat(e, ">");
}
function fu(t, e, r) {
  if (t && t[e] && t[e][r])
    return {
      prefix: e,
      iconName: r,
      icon: t[e][r]
    };
}
var nm = function(e, r) {
  return function(n, i, a, o) {
    return e.call(r, n, i, a, o);
  };
}, Ro = function(e, r, n, i) {
  var a = Object.keys(e), o = a.length, s = i !== void 0 ? nm(r, i) : r, u, c, f;
  for (n === void 0 ? (u = 1, f = e[a[0]]) : (u = 0, f = n); u < o; u++)
    c = a[u], f = s(f, e[c], c, e);
  return f;
};
function im(t) {
  const e = [];
  let r = 0;
  const n = t.length;
  for (; r < n; ) {
    const i = t.charCodeAt(r++);
    if (i >= 55296 && i <= 56319 && r < n) {
      const a = t.charCodeAt(r++);
      (a & 64512) == 56320 ? e.push(((i & 1023) << 10) + (a & 1023) + 65536) : (e.push(i), r--);
    } else
      e.push(i);
  }
  return e;
}
function ws(t) {
  const e = im(t);
  return e.length === 1 ? e[0].toString(16) : null;
}
function am(t, e) {
  const r = t.length;
  let n = t.charCodeAt(e), i;
  return n >= 55296 && n <= 56319 && r > e + 1 && (i = t.charCodeAt(e + 1), i >= 56320 && i <= 57343) ? (n - 55296) * 1024 + i - 56320 + 65536 : n;
}
function du(t) {
  return Object.keys(t).reduce((e, r) => {
    const n = t[r];
    return !!n.icon ? e[n.iconName] = n.icon : e[r] = n, e;
  }, {});
}
function xs(t, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: n = !1
  } = r, i = du(e);
  typeof bt.hooks.addPack == "function" && !n ? bt.hooks.addPack(t, du(e)) : bt.styles[t] = M(M({}, bt.styles[t] || {}), i), t === "fas" && xs("fa", e);
}
const {
  styles: jn,
  shims: om
} = bt, kf = Object.keys(bl), sm = kf.reduce((t, e) => (t[e] = Object.keys(bl[e]), t), {});
let xl = null, Pf = {}, Tf = {}, $f = {}, If = {}, Df = {};
function lm(t) {
  return ~Wh.indexOf(t);
}
function um(t, e) {
  const r = e.split("-"), n = r[0], i = r.slice(1).join("-");
  return n === t && i !== "" && !lm(i) ? i : null;
}
const Rf = () => {
  const t = (n) => Ro(jn, (i, a, o) => (i[o] = Ro(a, n, {}), i), {});
  Pf = t((n, i, a) => (i[3] && (n[i[3]] = a), i[2] && i[2].filter((s) => typeof s == "number").forEach((s) => {
    n[s.toString(16)] = a;
  }), n)), Tf = t((n, i, a) => (n[a] = a, i[2] && i[2].filter((s) => typeof s == "string").forEach((s) => {
    n[s] = a;
  }), n)), Df = t((n, i, a) => {
    const o = i[2];
    return n[a] = a, o.forEach((s) => {
      n[s] = a;
    }), n;
  });
  const e = "far" in jn || H.autoFetchSvg, r = Ro(om, (n, i) => {
    const a = i[0];
    let o = i[1];
    const s = i[2];
    return o === "far" && !e && (o = "fas"), typeof a == "string" && (n.names[a] = {
      prefix: o,
      iconName: s
    }), typeof a == "number" && (n.unicodes[a.toString(16)] = {
      prefix: o,
      iconName: s
    }), n;
  }, {
    names: {},
    unicodes: {}
  });
  $f = r.names, If = r.unicodes, xl = Sa(H.styleDefault, {
    family: H.familyDefault
  });
};
Kh((t) => {
  xl = Sa(t.styleDefault, {
    family: H.familyDefault
  });
});
Rf();
function Sl(t, e) {
  return (Pf[t] || {})[e];
}
function cm(t, e) {
  return (Tf[t] || {})[e];
}
function ar(t, e) {
  return (Df[t] || {})[e];
}
function Ff(t) {
  return $f[t] || {
    prefix: null,
    iconName: null
  };
}
function fm(t) {
  const e = If[t], r = Sl("fas", t);
  return e || (r ? {
    prefix: "fas",
    iconName: r
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function qt() {
  return xl;
}
const Lf = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function dm(t) {
  let e = Ie;
  const r = kf.reduce((n, i) => (n[i] = "".concat(H.cssPrefix, "-").concat(i), n), {});
  return gf.forEach((n) => {
    (t.includes(r[n]) || t.some((i) => sm[n].includes(i))) && (e = n);
  }), e;
}
function Sa(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: r = Ie
  } = e, n = jh[r][t];
  if (r === wa && !t)
    return "fad";
  const i = uu[r][t] || uu[r][n], a = t in bt.styles ? t : null;
  return i || a || null;
}
function pm(t) {
  let e = [], r = null;
  return t.forEach((n) => {
    const i = um(H.cssPrefix, n);
    i ? r = i : n && e.push(n);
  }), {
    iconName: r,
    rest: e
  };
}
function pu(t) {
  return t.sort().filter((e, r, n) => n.indexOf(e) === r);
}
function Oa(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: r = !1
  } = e;
  let n = null;
  const i = hs.concat(kh), a = pu(t.filter((p) => i.includes(p))), o = pu(t.filter((p) => !hs.includes(p))), s = a.filter((p) => (n = p, !mf.includes(p))), [u = null] = s, c = dm(a), f = M(M({}, pm(o)), {}, {
    prefix: Sa(u, {
      family: c
    })
  });
  return M(M(M({}, f), ym({
    values: t,
    family: c,
    styles: jn,
    config: H,
    canonical: f,
    givenPrefix: n
  })), hm(r, n, f));
}
function hm(t, e, r) {
  let {
    prefix: n,
    iconName: i
  } = r;
  if (t || !n || !i)
    return {
      prefix: n,
      iconName: i
    };
  const a = e === "fa" ? Ff(i) : {}, o = ar(n, i);
  return i = a.iconName || o || i, n = a.prefix || n, n === "far" && !jn.far && jn.fas && !H.autoFetchSvg && (n = "fas"), {
    prefix: n,
    iconName: i
  };
}
const mm = gf.filter((t) => t !== Ie || t !== wa), gm = Object.keys(ps).filter((t) => t !== Ie).map((t) => Object.keys(ps[t])).flat();
function ym(t) {
  const {
    values: e,
    family: r,
    canonical: n,
    givenPrefix: i = "",
    styles: a = {},
    config: o = {}
  } = t, s = r === wa, u = e.includes("fa-duotone") || e.includes("fad"), c = o.familyDefault === "duotone", f = n.prefix === "fad" || n.prefix === "fa-duotone";
  if (!s && (u || c || f) && (n.prefix = "fad"), (e.includes("fa-brands") || e.includes("fab")) && (n.prefix = "fab"), !n.prefix && mm.includes(r) && (Object.keys(a).find((m) => gm.includes(m)) || o.autoFetchSvg)) {
    const m = wh.get(r).defaultShortPrefixId;
    n.prefix = m, n.iconName = ar(n.prefix, n.iconName) || n.iconName;
  }
  return (n.prefix === "fa" || i === "fa") && (n.prefix = qt() || "fas"), n;
}
class bm {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
      r[n] = arguments[n];
    const i = r.reduce(this._pullDefinitions, {});
    Object.keys(i).forEach((a) => {
      this.definitions[a] = M(M({}, this.definitions[a] || {}), i[a]), xs(a, i[a]);
      const o = bl[Ie][a];
      o && xs(o, i[a]), Rf();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(e, r) {
    const n = r.prefix && r.iconName && r.icon ? {
      0: r
    } : r;
    return Object.keys(n).map((i) => {
      const {
        prefix: a,
        iconName: o,
        icon: s
      } = n[i], u = s[2];
      e[a] || (e[a] = {}), u.length > 0 && u.forEach((c) => {
        typeof c == "string" && (e[a][c] = s);
      }), e[a][o] = s;
    }), e;
  }
}
let hu = [], Fr = {};
const Mr = {}, vm = Object.keys(Mr);
function wm(t, e) {
  let {
    mixoutsTo: r
  } = e;
  return hu = t, Fr = {}, Object.keys(Mr).forEach((n) => {
    vm.indexOf(n) === -1 && delete Mr[n];
  }), hu.forEach((n) => {
    const i = n.mixout ? n.mixout() : {};
    if (Object.keys(i).forEach((a) => {
      typeof i[a] == "function" && (r[a] = i[a]), typeof i[a] == "object" && Object.keys(i[a]).forEach((o) => {
        r[a] || (r[a] = {}), r[a][o] = i[a][o];
      });
    }), n.hooks) {
      const a = n.hooks();
      Object.keys(a).forEach((o) => {
        Fr[o] || (Fr[o] = []), Fr[o].push(a[o]);
      });
    }
    n.provides && n.provides(Mr);
  }), r;
}
function Ss(t, e) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    n[i - 2] = arguments[i];
  return (Fr[t] || []).forEach((o) => {
    e = o.apply(null, [e, ...n]);
  }), e;
}
function dr(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  (Fr[t] || []).forEach((a) => {
    a.apply(null, r);
  });
}
function Wt() {
  const t = arguments[0], e = Array.prototype.slice.call(arguments, 1);
  return Mr[t] ? Mr[t].apply(null, e) : void 0;
}
function Os(t) {
  t.prefix === "fa" && (t.prefix = "fas");
  let {
    iconName: e
  } = t;
  const r = t.prefix || qt();
  if (e)
    return e = ar(r, e) || e, fu(Nf.definitions, r, e) || fu(bt.styles, r, e);
}
const Nf = new bm(), xm = () => {
  H.autoReplaceSvg = !1, H.observeMutations = !1, dr("noAuto");
}, Sm = {
  i2svg: function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return $t ? (dr("beforeI2svg", t), Wt("pseudoElements2svg", t), Wt("i2svg", t)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: e
    } = t;
    H.autoReplaceSvg === !1 && (H.autoReplaceSvg = !0), H.observeMutations = !0, rm(() => {
      Em({
        autoReplaceSvgRoot: e
      }), dr("watch", t);
    });
  }
}, Om = {
  icon: (t) => {
    if (t === null)
      return null;
    if (typeof t == "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: ar(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      const e = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], r = Sa(t[0]);
      return {
        prefix: r,
        iconName: ar(r, e) || e
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(H.cssPrefix, "-")) > -1 || t.match(zh))) {
      const e = Oa(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: e.prefix || qt(),
        iconName: ar(e.prefix, e.iconName) || e.iconName
      };
    }
    if (typeof t == "string") {
      const e = qt();
      return {
        prefix: e,
        iconName: ar(e, t) || t
      };
    }
  }
}, We = {
  noAuto: xm,
  config: H,
  dom: Sm,
  parse: Om,
  library: Nf,
  findIconDefinition: Os,
  toHtml: Jn
}, Em = function() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: e = he
  } = t;
  (Object.keys(bt.styles).length > 0 || H.autoFetchSvg) && $t && H.autoReplaceSvg && We.dom.i2svg({
    node: e
  });
};
function Ea(t, e) {
  return Object.defineProperty(t, "abstract", {
    get: e
  }), Object.defineProperty(t, "html", {
    get: function() {
      return t.abstract.map((r) => Jn(r));
    }
  }), Object.defineProperty(t, "node", {
    get: function() {
      if (!$t)
        return;
      const r = he.createElement("div");
      return r.innerHTML = t.html, r.children;
    }
  }), t;
}
function Am(t) {
  let {
    children: e,
    main: r,
    mask: n,
    attributes: i,
    styles: a,
    transform: o
  } = t;
  if (wl(o) && r.found && !n.found) {
    const {
      width: s,
      height: u
    } = r, c = {
      x: s / u / 2,
      y: 0.5
    };
    i.style = xa(M(M({}, a), {}, {
      "transform-origin": "".concat(c.x + o.x / 16, "em ").concat(c.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: i,
    children: e
  }];
}
function Cm(t) {
  let {
    prefix: e,
    iconName: r,
    children: n,
    attributes: i,
    symbol: a
  } = t;
  const o = a === !0 ? "".concat(e, "-").concat(H.cssPrefix, "-").concat(r) : a;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: M(M({}, i), {}, {
        id: o
      }),
      children: n
    }]
  }];
}
function Ol(t) {
  const {
    icons: {
      main: e,
      mask: r
    },
    prefix: n,
    iconName: i,
    transform: a,
    symbol: o,
    title: s,
    maskId: u,
    titleId: c,
    extra: f,
    watchable: p = !1
  } = t, {
    width: m,
    height: O
  } = r.found ? r : e, g = Ah.includes(n), S = [H.replacementClass, i ? "".concat(H.cssPrefix, "-").concat(i) : ""].filter((I) => f.classes.indexOf(I) === -1).filter((I) => I !== "" || !!I).concat(f.classes).join(" ");
  let v = {
    children: [],
    attributes: M(M({}, f.attributes), {}, {
      "data-prefix": n,
      "data-icon": i,
      class: S,
      role: f.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(m, " ").concat(O)
    })
  };
  const C = g && !~f.classes.indexOf("fa-fw") ? {
    width: "".concat(m / O * 16 * 0.0625, "em")
  } : {};
  p && (v.attributes[fr] = ""), s && (v.children.push({
    tag: "title",
    attributes: {
      id: v.attributes["aria-labelledby"] || "title-".concat(c || Bn())
    },
    children: [s]
  }), delete v.attributes.title);
  const P = M(M({}, v), {}, {
    prefix: n,
    iconName: i,
    main: e,
    mask: r,
    maskId: u,
    transform: a,
    symbol: o,
    styles: M(M({}, C), f.styles)
  }), {
    children: E,
    attributes: _
  } = r.found && e.found ? Wt("generateAbstractMask", P) || {
    children: [],
    attributes: {}
  } : Wt("generateAbstractIcon", P) || {
    children: [],
    attributes: {}
  };
  return P.children = E, P.attributes = _, o ? Cm(P) : Am(P);
}
function mu(t) {
  const {
    content: e,
    width: r,
    height: n,
    transform: i,
    title: a,
    extra: o,
    watchable: s = !1
  } = t, u = M(M(M({}, o.attributes), a ? {
    title: a
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  s && (u[fr] = "");
  const c = M({}, o.styles);
  wl(i) && (c.transform = Zh({
    transform: i,
    startCentered: !0,
    width: r,
    height: n
  }), c["-webkit-transform"] = c.transform);
  const f = xa(c);
  f.length > 0 && (u.style = f);
  const p = [];
  return p.push({
    tag: "span",
    attributes: u,
    children: [e]
  }), a && p.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [a]
  }), p;
}
function _m(t) {
  const {
    content: e,
    title: r,
    extra: n
  } = t, i = M(M(M({}, n.attributes), r ? {
    title: r
  } : {}), {}, {
    class: n.classes.join(" ")
  }), a = xa(n.styles);
  a.length > 0 && (i.style = a);
  const o = [];
  return o.push({
    tag: "span",
    attributes: i,
    children: [e]
  }), r && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [r]
  }), o;
}
const {
  styles: Fo
} = bt;
function Es(t) {
  const e = t[0], r = t[1], [n] = t.slice(4);
  let i = null;
  return Array.isArray(n) ? i = {
    tag: "g",
    attributes: {
      class: "".concat(H.cssPrefix, "-").concat(Io.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(H.cssPrefix, "-").concat(Io.SECONDARY),
        fill: "currentColor",
        d: n[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(H.cssPrefix, "-").concat(Io.PRIMARY),
        fill: "currentColor",
        d: n[1]
      }
    }]
  } : i = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: n
    }
  }, {
    found: !0,
    width: e,
    height: r,
    icon: i
  };
}
const km = {
  found: !1,
  width: 512,
  height: 512
};
function Pm(t, e) {
  !wf && !H.showMissingIcons && t && console.error('Icon with name "'.concat(t, '" and prefix "').concat(e, '" is missing.'));
}
function As(t, e) {
  let r = e;
  return e === "fa" && H.styleDefault !== null && (e = qt()), new Promise((n, i) => {
    if (r === "fa") {
      const a = Ff(t) || {};
      t = a.iconName || t, e = a.prefix || e;
    }
    if (t && e && Fo[e] && Fo[e][t]) {
      const a = Fo[e][t];
      return n(Es(a));
    }
    Pm(t, e), n(M(M({}, km), {}, {
      icon: H.showMissingIcons && t ? Wt("missingIconAbstract") || {} : {}
    }));
  });
}
const gu = () => {
}, Cs = H.measurePerformance && _i && _i.mark && _i.measure ? _i : {
  mark: gu,
  measure: gu
}, Tn = 'FA "6.7.1"', Tm = (t) => (Cs.mark("".concat(Tn, " ").concat(t, " begins")), () => Mf(t)), Mf = (t) => {
  Cs.mark("".concat(Tn, " ").concat(t, " ends")), Cs.measure("".concat(Tn, " ").concat(t), "".concat(Tn, " ").concat(t, " begins"), "".concat(Tn, " ").concat(t, " ends"));
};
var El = {
  begin: Tm,
  end: Mf
};
const Vi = () => {
};
function yu(t) {
  return typeof (t.getAttribute ? t.getAttribute(fr) : null) == "string";
}
function $m(t) {
  const e = t.getAttribute ? t.getAttribute(gl) : null, r = t.getAttribute ? t.getAttribute(yl) : null;
  return e && r;
}
function Im(t) {
  return t && t.classList && t.classList.contains && t.classList.contains(H.replacementClass);
}
function Dm() {
  return H.autoReplaceSvg === !0 ? qi.replace : qi[H.autoReplaceSvg] || qi.replace;
}
function Rm(t) {
  return he.createElementNS("http://www.w3.org/2000/svg", t);
}
function Fm(t) {
  return he.createElement(t);
}
function Bf(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: r = t.tag === "svg" ? Rm : Fm
  } = e;
  if (typeof t == "string")
    return he.createTextNode(t);
  const n = r(t.tag);
  return Object.keys(t.attributes || []).forEach(function(a) {
    n.setAttribute(a, t.attributes[a]);
  }), (t.children || []).forEach(function(a) {
    n.appendChild(Bf(a, {
      ceFn: r
    }));
  }), n;
}
function Lm(t) {
  let e = " ".concat(t.outerHTML, " ");
  return e = "".concat(e, "Font Awesome fontawesome.com "), e;
}
const qi = {
  replace: function(t) {
    const e = t[0];
    if (e.parentNode)
      if (t[1].forEach((r) => {
        e.parentNode.insertBefore(Bf(r), e);
      }), e.getAttribute(fr) === null && H.keepOriginalSource) {
        let r = he.createComment(Lm(e));
        e.parentNode.replaceChild(r, e);
      } else
        e.remove();
  },
  nest: function(t) {
    const e = t[0], r = t[1];
    if (~vl(e).indexOf(H.replacementClass))
      return qi.replace(t);
    const n = new RegExp("".concat(H.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      const a = r[0].attributes.class.split(" ").reduce((o, s) => (s === H.replacementClass || s.match(n) ? o.toSvg.push(s) : o.toNode.push(s), o), {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? e.removeAttribute("class") : e.setAttribute("class", a.toNode.join(" "));
    }
    const i = r.map((a) => Jn(a)).join(`
`);
    e.setAttribute(fr, ""), e.innerHTML = i;
  }
};
function bu(t) {
  t();
}
function jf(t, e) {
  const r = typeof e == "function" ? e : Vi;
  if (t.length === 0)
    r();
  else {
    let n = bu;
    H.mutateApproach === Mh && (n = Vt.requestAnimationFrame || bu), n(() => {
      const i = Dm(), a = El.begin("mutate");
      t.map(i), a(), r();
    });
  }
}
let Al = !1;
function zf() {
  Al = !0;
}
function _s() {
  Al = !1;
}
let ta = null;
function vu(t) {
  if (!au || !H.observeMutations)
    return;
  const {
    treeCallback: e = Vi,
    nodeCallback: r = Vi,
    pseudoElementsCallback: n = Vi,
    observeMutationsRoot: i = he
  } = t;
  ta = new au((a) => {
    if (Al)
      return;
    const o = qt();
    Yr(a).forEach((s) => {
      if (s.type === "childList" && s.addedNodes.length > 0 && !yu(s.addedNodes[0]) && (H.searchPseudoElements && n(s.target), e(s.target)), s.type === "attributes" && s.target.parentNode && H.searchPseudoElements && n(s.target.parentNode), s.type === "attributes" && yu(s.target) && ~qh.indexOf(s.attributeName))
        if (s.attributeName === "class" && $m(s.target)) {
          const {
            prefix: u,
            iconName: c
          } = Oa(vl(s.target));
          s.target.setAttribute(gl, u || o), c && s.target.setAttribute(yl, c);
        } else
          Im(s.target) && r(s.target);
    });
  }), $t && ta.observe(i, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function Nm() {
  ta && ta.disconnect();
}
function Mm(t) {
  const e = t.getAttribute("style");
  let r = [];
  return e && (r = e.split(";").reduce((n, i) => {
    const a = i.split(":"), o = a[0], s = a.slice(1);
    return o && s.length > 0 && (n[o] = s.join(":").trim()), n;
  }, {})), r;
}
function Bm(t) {
  const e = t.getAttribute("data-prefix"), r = t.getAttribute("data-icon"), n = t.innerText !== void 0 ? t.innerText.trim() : "";
  let i = Oa(vl(t));
  return i.prefix || (i.prefix = qt()), e && r && (i.prefix = e, i.iconName = r), i.iconName && i.prefix || (i.prefix && n.length > 0 && (i.iconName = cm(i.prefix, t.innerText) || Sl(i.prefix, ws(t.innerText))), !i.iconName && H.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = t.firstChild.data)), i;
}
function jm(t) {
  const e = Yr(t.attributes).reduce((i, a) => (i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i), {}), r = t.getAttribute("title"), n = t.getAttribute("data-fa-title-id");
  return H.autoA11y && (r ? e["aria-labelledby"] = "".concat(H.replacementClass, "-title-").concat(n || Bn()) : (e["aria-hidden"] = "true", e.focusable = "false")), e;
}
function zm() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: yt,
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
function wu(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: r,
    prefix: n,
    rest: i
  } = Bm(t), a = jm(t), o = Ss("parseNodeAttributes", {}, t);
  let s = e.styleParser ? Mm(t) : [];
  return M({
    iconName: r,
    title: t.getAttribute("title"),
    titleId: t.getAttribute("data-fa-title-id"),
    prefix: n,
    transform: yt,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: s,
      attributes: a
    }
  }, o);
}
const {
  styles: Um
} = bt;
function Uf(t) {
  const e = H.autoReplaceSvg === "nest" ? wu(t, {
    styleParser: !1
  }) : wu(t);
  return ~e.extra.classes.indexOf(Sf) ? Wt("generateLayersText", t, e) : Wt("generateSvgReplacementMutation", t, e);
}
function Vm() {
  return [...Sh, ...hs];
}
function xu(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!$t)
    return Promise.resolve();
  const r = he.documentElement.classList, n = (f) => r.add("".concat(lu, "-").concat(f)), i = (f) => r.remove("".concat(lu, "-").concat(f)), a = H.autoFetchSvg ? Vm() : mf.concat(Object.keys(Um));
  a.includes("fa") || a.push("fa");
  const o = [".".concat(Sf, ":not([").concat(fr, "])")].concat(a.map((f) => ".".concat(f, ":not([").concat(fr, "])"))).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  let s = [];
  try {
    s = Yr(t.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    n("pending"), i("complete");
  else
    return Promise.resolve();
  const u = El.begin("onTree"), c = s.reduce((f, p) => {
    try {
      const m = Uf(p);
      m && f.push(m);
    } catch (m) {
      wf || m.name === "MissingIcon" && console.error(m);
    }
    return f;
  }, []);
  return new Promise((f, p) => {
    Promise.all(c).then((m) => {
      jf(m, () => {
        n("active"), n("complete"), i("pending"), typeof e == "function" && e(), u(), f();
      });
    }).catch((m) => {
      u(), p(m);
    });
  });
}
function qm(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Uf(t).then((r) => {
    r && jf([r], e);
  });
}
function Wm(t) {
  return function(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = (e || {}).icon ? e : Os(e || {});
    let {
      mask: i
    } = r;
    return i && (i = (i || {}).icon ? i : Os(i || {})), t(n, M(M({}, r), {}, {
      mask: i
    }));
  };
}
const Hm = function(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: r = yt,
    symbol: n = !1,
    mask: i = null,
    maskId: a = null,
    title: o = null,
    titleId: s = null,
    classes: u = [],
    attributes: c = {},
    styles: f = {}
  } = e;
  if (!t)
    return;
  const {
    prefix: p,
    iconName: m,
    icon: O
  } = t;
  return Ea(M({
    type: "icon"
  }, t), () => (dr("beforeDOMElementCreation", {
    iconDefinition: t,
    params: e
  }), H.autoA11y && (o ? c["aria-labelledby"] = "".concat(H.replacementClass, "-title-").concat(s || Bn()) : (c["aria-hidden"] = "true", c.focusable = "false")), Ol({
    icons: {
      main: Es(O),
      mask: i ? Es(i.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: p,
    iconName: m,
    transform: M(M({}, yt), r),
    symbol: n,
    title: o,
    maskId: a,
    titleId: s,
    extra: {
      attributes: c,
      styles: f,
      classes: u
    }
  })));
};
var Gm = {
  mixout() {
    return {
      icon: Wm(Hm)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(t) {
        return t.treeCallback = xu, t.nodeCallback = qm, t;
      }
    };
  },
  provides(t) {
    t.i2svg = function(e) {
      const {
        node: r = he,
        callback: n = () => {
        }
      } = e;
      return xu(r, n);
    }, t.generateSvgReplacementMutation = function(e, r) {
      const {
        iconName: n,
        title: i,
        titleId: a,
        prefix: o,
        transform: s,
        symbol: u,
        mask: c,
        maskId: f,
        extra: p
      } = r;
      return new Promise((m, O) => {
        Promise.all([As(n, o), c.iconName ? As(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((g) => {
          let [S, v] = g;
          m([e, Ol({
            icons: {
              main: S,
              mask: v
            },
            prefix: o,
            iconName: n,
            transform: s,
            symbol: u,
            maskId: f,
            title: i,
            titleId: a,
            extra: p,
            watchable: !0
          })]);
        }).catch(O);
      });
    }, t.generateAbstractIcon = function(e) {
      let {
        children: r,
        attributes: n,
        main: i,
        transform: a,
        styles: o
      } = e;
      const s = xa(o);
      s.length > 0 && (n.style = s);
      let u;
      return wl(a) && (u = Wt("generateAbstractTransformGrouping", {
        main: i,
        transform: a,
        containerWidth: i.width,
        iconWidth: i.width
      })), r.push(u || i.icon), {
        children: r,
        attributes: n
      };
    };
  }
}, Km = {
  mixout() {
    return {
      layer(t) {
        let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: r = []
        } = e;
        return Ea({
          type: "layer"
        }, () => {
          dr("beforeDOMElementCreation", {
            assembler: t,
            params: e
          });
          let n = [];
          return t((i) => {
            Array.isArray(i) ? i.map((a) => {
              n = n.concat(a.abstract);
            }) : n = n.concat(i.abstract);
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
}, Ym = {
  mixout() {
    return {
      counter(t) {
        let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: r = null,
          classes: n = [],
          attributes: i = {},
          styles: a = {}
        } = e;
        return Ea({
          type: "counter",
          content: t
        }, () => (dr("beforeDOMElementCreation", {
          content: t,
          params: e
        }), _m({
          content: t.toString(),
          title: r,
          extra: {
            attributes: i,
            styles: a,
            classes: ["".concat(H.cssPrefix, "-layers-counter"), ...n]
          }
        })));
      }
    };
  }
}, Jm = {
  mixout() {
    return {
      text(t) {
        let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: r = yt,
          title: n = null,
          classes: i = [],
          attributes: a = {},
          styles: o = {}
        } = e;
        return Ea({
          type: "text",
          content: t
        }, () => (dr("beforeDOMElementCreation", {
          content: t,
          params: e
        }), mu({
          content: t,
          transform: M(M({}, yt), r),
          title: n,
          extra: {
            attributes: a,
            styles: o,
            classes: ["".concat(H.cssPrefix, "-layers-text"), ...i]
          }
        })));
      }
    };
  },
  provides(t) {
    t.generateLayersText = function(e, r) {
      const {
        title: n,
        transform: i,
        extra: a
      } = r;
      let o = null, s = null;
      if (pf) {
        const u = parseInt(getComputedStyle(e).fontSize, 10), c = e.getBoundingClientRect();
        o = c.width / u, s = c.height / u;
      }
      return H.autoA11y && !n && (a.attributes["aria-hidden"] = "true"), Promise.resolve([e, mu({
        content: e.innerHTML,
        width: o,
        height: s,
        transform: i,
        title: n,
        extra: a,
        watchable: !0
      })]);
    };
  }
};
const Xm = new RegExp('"', "ug"), Su = [1105920, 1112319], Ou = M(M(M(M({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), vh), Lh), Ph), ks = Object.keys(Ou).reduce((t, e) => (t[e.toLowerCase()] = Ou[e], t), {}), Qm = Object.keys(ks).reduce((t, e) => {
  const r = ks[e];
  return t[e] = r[900] || [...Object.entries(r)][0][1], t;
}, {});
function Zm(t) {
  const e = t.replace(Xm, ""), r = am(e, 0), n = r >= Su[0] && r <= Su[1], i = e.length === 2 ? e[0] === e[1] : !1;
  return {
    value: ws(i ? e[0] : e),
    isSecondary: n || i
  };
}
function eg(t, e) {
  const r = t.replace(/^['"]|['"]$/g, "").toLowerCase(), n = parseInt(e), i = isNaN(n) ? "normal" : n;
  return (ks[r] || {})[i] || Qm[r];
}
function Eu(t, e) {
  const r = "".concat(Nh).concat(e.replace(":", "-"));
  return new Promise((n, i) => {
    if (t.getAttribute(r) !== null)
      return n();
    const o = Yr(t.children).filter((m) => m.getAttribute(gs) === e)[0], s = Vt.getComputedStyle(t, e), u = s.getPropertyValue("font-family"), c = u.match(Uh), f = s.getPropertyValue("font-weight"), p = s.getPropertyValue("content");
    if (o && !c)
      return t.removeChild(o), n();
    if (c && p !== "none" && p !== "") {
      const m = s.getPropertyValue("content");
      let O = eg(u, f);
      const {
        value: g,
        isSecondary: S
      } = Zm(m), v = c[0].startsWith("FontAwesome");
      let C = Sl(O, g), P = C;
      if (v) {
        const E = fm(g);
        E.iconName && E.prefix && (C = E.iconName, O = E.prefix);
      }
      if (C && !S && (!o || o.getAttribute(gl) !== O || o.getAttribute(yl) !== P)) {
        t.setAttribute(r, P), o && t.removeChild(o);
        const E = zm(), {
          extra: _
        } = E;
        _.attributes[gs] = e, As(C, O).then((I) => {
          const j = Ol(M(M({}, E), {}, {
            icons: {
              main: I,
              mask: Lf()
            },
            prefix: O,
            iconName: P,
            extra: _,
            watchable: !0
          })), z = he.createElementNS("http://www.w3.org/2000/svg", "svg");
          e === "::before" ? t.insertBefore(z, t.firstChild) : t.appendChild(z), z.outerHTML = j.map((B) => Jn(B)).join(`
`), t.removeAttribute(r), n();
        }).catch(i);
      } else
        n();
    } else
      n();
  });
}
function tg(t) {
  return Promise.all([Eu(t, "::before"), Eu(t, "::after")]);
}
function rg(t) {
  return t.parentNode !== document.head && !~Bh.indexOf(t.tagName.toUpperCase()) && !t.getAttribute(gs) && (!t.parentNode || t.parentNode.tagName !== "svg");
}
function Au(t) {
  if ($t)
    return new Promise((e, r) => {
      const n = Yr(t.querySelectorAll("*")).filter(rg).map(tg), i = El.begin("searchPseudoElements");
      zf(), Promise.all(n).then(() => {
        i(), _s(), e();
      }).catch(() => {
        i(), _s(), r();
      });
    });
}
var ng = {
  hooks() {
    return {
      mutationObserverCallbacks(t) {
        return t.pseudoElementsCallback = Au, t;
      }
    };
  },
  provides(t) {
    t.pseudoElements2svg = function(e) {
      const {
        node: r = he
      } = e;
      H.searchPseudoElements && Au(r);
    };
  }
};
let Cu = !1;
var ig = {
  mixout() {
    return {
      dom: {
        unwatch() {
          zf(), Cu = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        vu(Ss("mutationObserverCallbacks", {}));
      },
      noAuto() {
        Nm();
      },
      watch(t) {
        const {
          observeMutationsRoot: e
        } = t;
        Cu ? _s() : vu(Ss("mutationObserverCallbacks", {
          observeMutationsRoot: e
        }));
      }
    };
  }
};
const _u = (t) => {
  let e = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce((r, n) => {
    const i = n.toLowerCase().split("-"), a = i[0];
    let o = i.slice(1).join("-");
    if (a && o === "h")
      return r.flipX = !0, r;
    if (a && o === "v")
      return r.flipY = !0, r;
    if (o = parseFloat(o), isNaN(o))
      return r;
    switch (a) {
      case "grow":
        r.size = r.size + o;
        break;
      case "shrink":
        r.size = r.size - o;
        break;
      case "left":
        r.x = r.x - o;
        break;
      case "right":
        r.x = r.x + o;
        break;
      case "up":
        r.y = r.y - o;
        break;
      case "down":
        r.y = r.y + o;
        break;
      case "rotate":
        r.rotate = r.rotate + o;
        break;
    }
    return r;
  }, e);
};
var ag = {
  mixout() {
    return {
      parse: {
        transform: (t) => _u(t)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(t, e) {
        const r = e.getAttribute("data-fa-transform");
        return r && (t.transform = _u(r)), t;
      }
    };
  },
  provides(t) {
    t.generateAbstractTransformGrouping = function(e) {
      let {
        main: r,
        transform: n,
        containerWidth: i,
        iconWidth: a
      } = e;
      const o = {
        transform: "translate(".concat(i / 2, " 256)")
      }, s = "translate(".concat(n.x * 32, ", ").concat(n.y * 32, ") "), u = "scale(".concat(n.size / 16 * (n.flipX ? -1 : 1), ", ").concat(n.size / 16 * (n.flipY ? -1 : 1), ") "), c = "rotate(".concat(n.rotate, " 0 0)"), f = {
        transform: "".concat(s, " ").concat(u, " ").concat(c)
      }, p = {
        transform: "translate(".concat(a / 2 * -1, " -256)")
      }, m = {
        outer: o,
        inner: f,
        path: p
      };
      return {
        tag: "g",
        attributes: M({}, m.outer),
        children: [{
          tag: "g",
          attributes: M({}, m.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: M(M({}, r.icon.attributes), m.path)
          }]
        }]
      };
    };
  }
};
const Lo = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function ku(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return t.attributes && (t.attributes.fill || e) && (t.attributes.fill = "black"), t;
}
function og(t) {
  return t.tag === "g" ? t.children : [t];
}
var sg = {
  hooks() {
    return {
      parseNodeAttributes(t, e) {
        const r = e.getAttribute("data-fa-mask"), n = r ? Oa(r.split(" ").map((i) => i.trim())) : Lf();
        return n.prefix || (n.prefix = qt()), t.mask = n, t.maskId = e.getAttribute("data-fa-mask-id"), t;
      }
    };
  },
  provides(t) {
    t.generateAbstractMask = function(e) {
      let {
        children: r,
        attributes: n,
        main: i,
        mask: a,
        maskId: o,
        transform: s
      } = e;
      const {
        width: u,
        icon: c
      } = i, {
        width: f,
        icon: p
      } = a, m = Qh({
        transform: s,
        containerWidth: f,
        iconWidth: u
      }), O = {
        tag: "rect",
        attributes: M(M({}, Lo), {}, {
          fill: "white"
        })
      }, g = c.children ? {
        children: c.children.map(ku)
      } : {}, S = {
        tag: "g",
        attributes: M({}, m.inner),
        children: [ku(M({
          tag: c.tag,
          attributes: M(M({}, c.attributes), m.path)
        }, g))]
      }, v = {
        tag: "g",
        attributes: M({}, m.outer),
        children: [S]
      }, C = "mask-".concat(o || Bn()), P = "clip-".concat(o || Bn()), E = {
        tag: "mask",
        attributes: M(M({}, Lo), {}, {
          id: C,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [O, v]
      }, _ = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: P
          },
          children: og(p)
        }, E]
      };
      return r.push(_, {
        tag: "rect",
        attributes: M({
          fill: "currentColor",
          "clip-path": "url(#".concat(P, ")"),
          mask: "url(#".concat(C, ")")
        }, Lo)
      }), {
        children: r,
        attributes: n
      };
    };
  }
}, lg = {
  provides(t) {
    let e = !1;
    Vt.matchMedia && (e = Vt.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      const r = [], n = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: M(M({}, n), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const a = M(M({}, i), {}, {
        attributeName: "opacity"
      }), o = {
        tag: "circle",
        attributes: M(M({}, n), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return e || o.children.push({
        tag: "animate",
        attributes: M(M({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: M(M({}, a), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(o), r.push({
        tag: "path",
        attributes: M(M({}, n), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: e ? [] : [{
          tag: "animate",
          attributes: M(M({}, a), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), e || r.push({
        tag: "path",
        attributes: M(M({}, n), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: M(M({}, a), {}, {
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
}, ug = {
  hooks() {
    return {
      parseNodeAttributes(t, e) {
        const r = e.getAttribute("data-fa-symbol"), n = r === null ? !1 : r === "" ? !0 : r;
        return t.symbol = n, t;
      }
    };
  }
}, cg = [tm, Gm, Km, Ym, Jm, ng, ig, ag, sg, lg, ug];
wm(cg, {
  mixoutsTo: We
});
We.noAuto;
const Vf = We.config, Xn = We.library;
We.dom;
const ra = We.parse;
We.findIconDefinition;
We.toHtml;
const fg = We.icon;
We.layer;
const dg = We.text;
We.counter;
function Pu(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Pu(Object(r), !0).forEach(function(n) {
      Ne(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Pu(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function pg(t, e) {
  if (typeof t != "object" || !t)
    return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (typeof n != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function hg(t) {
  var e = pg(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function na(t) {
  "@babel/helpers - typeof";
  return na = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, na(t);
}
function Ne(t, e, r) {
  return e = hg(e), e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function mg(t, e) {
  if (t == null)
    return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0)
        continue;
      r[n] = t[n];
    }
  return r;
}
function gg(t, e) {
  if (t == null)
    return {};
  var r = mg(t, e), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      n = a[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function Ps(t) {
  return yg(t) || bg(t) || vg(t) || wg();
}
function yg(t) {
  if (Array.isArray(t))
    return Ts(t);
}
function bg(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function vg(t, e) {
  if (t) {
    if (typeof t == "string")
      return Ts(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ts(t, e);
  }
}
function Ts(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function wg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var xg = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, qf = { exports: {} };
(function(t) {
  (function(e) {
    var r = function(C, P, E) {
      if (!c(P) || p(P) || m(P) || O(P) || u(P))
        return P;
      var _, I = 0, j = 0;
      if (f(P))
        for (_ = [], j = P.length; I < j; I++)
          _.push(r(C, P[I], E));
      else {
        _ = {};
        for (var z in P)
          Object.prototype.hasOwnProperty.call(P, z) && (_[C(z, E)] = r(C, P[z], E));
      }
      return _;
    }, n = function(C, P) {
      P = P || {};
      var E = P.separator || "_", _ = P.split || /(?=[A-Z])/;
      return C.split(_).join(E);
    }, i = function(C) {
      return g(C) ? C : (C = C.replace(/[\-_\s]+(.)?/g, function(P, E) {
        return E ? E.toUpperCase() : "";
      }), C.substr(0, 1).toLowerCase() + C.substr(1));
    }, a = function(C) {
      var P = i(C);
      return P.substr(0, 1).toUpperCase() + P.substr(1);
    }, o = function(C, P) {
      return n(C, P).toLowerCase();
    }, s = Object.prototype.toString, u = function(C) {
      return typeof C == "function";
    }, c = function(C) {
      return C === Object(C);
    }, f = function(C) {
      return s.call(C) == "[object Array]";
    }, p = function(C) {
      return s.call(C) == "[object Date]";
    }, m = function(C) {
      return s.call(C) == "[object RegExp]";
    }, O = function(C) {
      return s.call(C) == "[object Boolean]";
    }, g = function(C) {
      return C = C - 0, C === C;
    }, S = function(C, P) {
      var E = P && "process" in P ? P.process : P;
      return typeof E != "function" ? C : function(_, I) {
        return E(_, C, I);
      };
    }, v = {
      camelize: i,
      decamelize: o,
      pascalize: a,
      depascalize: o,
      camelizeKeys: function(C, P) {
        return r(S(i, P), C);
      },
      decamelizeKeys: function(C, P) {
        return r(S(o, P), C, P);
      },
      pascalizeKeys: function(C, P) {
        return r(S(a, P), C);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    t.exports ? t.exports = v : e.humps = v;
  })(xg);
})(qf);
var Sg = qf.exports, Og = ["class", "style"];
function Eg(t) {
  return t.split(";").map(function(e) {
    return e.trim();
  }).filter(function(e) {
    return e;
  }).reduce(function(e, r) {
    var n = r.indexOf(":"), i = Sg.camelize(r.slice(0, n)), a = r.slice(n + 1).trim();
    return e[i] = a, e;
  }, {});
}
function Ag(t) {
  return t.split(/\s+/).reduce(function(e, r) {
    return e[r] = !0, e;
  }, {});
}
function Cl(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var n = (t.children || []).map(function(u) {
    return Cl(u);
  }), i = Object.keys(t.attributes || {}).reduce(function(u, c) {
    var f = t.attributes[c];
    switch (c) {
      case "class":
        u.class = Ag(f);
        break;
      case "style":
        u.style = Eg(f);
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
  r.class;
  var a = r.style, o = a === void 0 ? {} : a, s = gg(r, Og);
  return zt(t.tag, rt(rt(rt({}, e), {}, {
    class: i.class,
    style: rt(rt({}, i.style), o)
  }, i.attrs), s), n);
}
var Wf = !1;
try {
  Wf = process.env.NODE_ENV === "production";
} catch {
}
function Cg() {
  if (!Wf && console && typeof console.error == "function") {
    var t;
    (t = console).error.apply(t, arguments);
  }
}
function Rn(t, e) {
  return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? Ne({}, t, e) : {};
}
function _g(t) {
  var e, r = (e = {
    "fa-spin": t.spin,
    "fa-pulse": t.pulse,
    "fa-fw": t.fixedWidth,
    "fa-border": t.border,
    "fa-li": t.listItem,
    "fa-inverse": t.inverse,
    "fa-flip": t.flip === !0,
    "fa-flip-horizontal": t.flip === "horizontal" || t.flip === "both",
    "fa-flip-vertical": t.flip === "vertical" || t.flip === "both"
  }, Ne(Ne(Ne(Ne(Ne(Ne(Ne(Ne(Ne(Ne(e, "fa-".concat(t.size), t.size !== null), "fa-rotate-".concat(t.rotation), t.rotation !== null), "fa-pull-".concat(t.pull), t.pull !== null), "fa-swap-opacity", t.swapOpacity), "fa-bounce", t.bounce), "fa-shake", t.shake), "fa-beat", t.beat), "fa-fade", t.fade), "fa-beat-fade", t.beatFade), "fa-flash", t.flash), Ne(Ne(e, "fa-spin-pulse", t.spinPulse), "fa-spin-reverse", t.spinReverse));
  return Object.keys(r).map(function(n) {
    return r[n] ? n : null;
  }).filter(function(n) {
    return n;
  });
}
function Tu(t) {
  if (t && na(t) === "object" && t.prefix && t.iconName && t.icon)
    return t;
  if (ra.icon)
    return ra.icon(t);
  if (t === null)
    return null;
  if (na(t) === "object" && t.prefix && t.iconName)
    return t;
  if (Array.isArray(t) && t.length === 2)
    return {
      prefix: t[0],
      iconName: t[1]
    };
  if (typeof t == "string")
    return {
      prefix: "fas",
      iconName: t
    };
}
var gt = hr({
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
      validator: function(e) {
        return [!0, !1, "horizontal", "vertical", "both"].indexOf(e) > -1;
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
      validator: function(e) {
        return ["right", "left"].indexOf(e) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: !1
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function(e) {
        return [90, 180, 270].indexOf(Number.parseInt(e, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null,
      validator: function(e) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(e) > -1;
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
  setup: function(e, r) {
    var n = r.attrs, i = le(function() {
      return Tu(e.icon);
    }), a = le(function() {
      return Rn("classes", _g(e));
    }), o = le(function() {
      return Rn("transform", typeof e.transform == "string" ? ra.transform(e.transform) : e.transform);
    }), s = le(function() {
      return Rn("mask", Tu(e.mask));
    }), u = le(function() {
      return fg(i.value, rt(rt(rt(rt({}, a.value), o.value), s.value), {}, {
        symbol: e.symbol,
        title: e.title,
        titleId: e.titleId,
        maskId: e.maskId
      }));
    });
    jt(u, function(f) {
      if (!f)
        return Cg("Could not find one or more icon(s)", i.value, s.value);
    }, {
      immediate: !0
    });
    var c = le(function() {
      return u.value ? Cl(u.value.abstract[0], {}, n) : null;
    });
    return function() {
      return c.value;
    };
  }
});
hr({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(e, r) {
    var n = r.slots, i = Vf.familyPrefix, a = le(function() {
      return ["".concat(i, "-layers")].concat(Ps(e.fixedWidth ? ["".concat(i, "-fw")] : []));
    });
    return function() {
      return zt("div", {
        class: a.value
      }, n.default ? n.default() : []);
    };
  }
});
hr({
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
      validator: function(e) {
        return ["bottom-left", "bottom-right", "top-left", "top-right"].indexOf(e) > -1;
      }
    }
  },
  setup: function(e, r) {
    var n = r.attrs, i = Vf.familyPrefix, a = le(function() {
      return Rn("classes", [].concat(Ps(e.counter ? ["".concat(i, "-layers-counter")] : []), Ps(e.position ? ["".concat(i, "-layers-").concat(e.position)] : [])));
    }), o = le(function() {
      return Rn("transform", typeof e.transform == "string" ? ra.transform(e.transform) : e.transform);
    }), s = le(function() {
      var c = dg(e.value.toString(), rt(rt({}, o.value), a.value)), f = c.abstract;
      return e.counter && (f[0].attributes.class = f[0].attributes.class.replace("fa-layers-text", "")), f[0];
    }), u = le(function() {
      return Cl(s.value, {}, n);
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
const kg = {
  prefix: "fas",
  iconName: "sort-down",
  icon: [320, 512, ["sort-desc"], "f0dd", "M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"]
}, $s = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, Pg = {
  prefix: "fas",
  iconName: "box-archive",
  icon: [512, 512, ["archive"], "f187", "M32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64C0 46.3 14.3 32 32 32zm0 128l448 0 0 256c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-256zm128 80c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16z"]
}, $u = {
  prefix: "fas",
  iconName: "pen-ruler",
  icon: [512, 512, ["pencil-ruler"], "f5ae", "M469.3 19.3l23.4 23.4c25 25 25 65.5 0 90.5l-56.4 56.4L322.3 75.7l56.4-56.4c25-25 65.5-25 90.5 0zM44.9 353.2L299.7 98.3 413.7 212.3 158.8 467.1c-6.7 6.7-15.1 11.6-24.2 14.2l-104 29.7c-8.4 2.4-17.4 .1-23.6-6.1s-8.5-15.2-6.1-23.6l29.7-104c2.6-9.2 7.5-17.5 14.2-24.2zM249.4 103.4L103.4 249.4 16 161.9c-18.7-18.7-18.7-49.1 0-67.9L94.1 16c18.7-18.7 49.1-18.7 67.9 0l19.8 19.8c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1l45.1 45.1zM408.6 262.6l45.1 45.1c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1L496 350.1c18.7 18.7 18.7 49.1 0 67.9L417.9 496c-18.7 18.7-49.1 18.7-67.9 0l-87.4-87.4L408.6 262.6z"]
}, Tg = {
  prefix: "fas",
  iconName: "square-check",
  icon: [448, 512, [9745, 9989, 61510, "check-square"], "f14a", "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, Iu = {
  prefix: "fas",
  iconName: "eye-slash",
  icon: [640, 512, [], "f070", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]
}, Du = {
  prefix: "fas",
  iconName: "eye",
  icon: [576, 512, [128065], "f06e", "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]
}, $g = {
  prefix: "fas",
  iconName: "sort-up",
  icon: [320, 512, ["sort-asc"], "f0de", "M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]
}, Ig = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]
}, Dg = {
  prefix: "fas",
  iconName: "spinner",
  icon: [512, 512, [], "f110", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]
}, Rg = {
  prefix: "fas",
  iconName: "calendar",
  icon: [448, 512, [128197, 128198], "f133", "M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"]
};
/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Fg = {
  prefix: "far",
  iconName: "square",
  icon: [448, 512, [9632, 9723, 9724, 61590], "f0c8", "M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]
};
/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Hf = {
  prefix: "fab",
  iconName: "whatsapp",
  icon: [448, 512, [], "f232", "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]
};
const Jr = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, i] of e)
    r[n] = i;
  return r;
}, Lg = { class: "relative flex w-full max-w-full items-stretch" }, Ng = {
  key: 0,
  class: "flex items-center"
}, Mg = {
  key: 1,
  class: "mr-1"
}, Bg = ["id", "disabled", "required", "name"], jg = { key: 5 }, zg = ["required", "disabled", "name"], Ug = {
  key: 0,
  class: "border-gray flex items-center whitespace-nowrap rounded rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center text-gray-500"
}, Vg = { class: "relative flex w-full" }, qg = ["href"], Wg = {
  __name: "Input",
  props: /* @__PURE__ */ eu({
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
  emits: /* @__PURE__ */ eu(["changed", "update:modelValue"], ["update:modelValue"]),
  setup(t, { expose: e, emit: r }) {
    Xn.add(Hf, Tg, Fg, Du, Iu);
    const n = t;
    function i(S) {
      let v = [];
      return S.split("_").join(" ").split(" ").map(function(C) {
        v.push(C[0].toUpperCase() + C.slice(1));
      }), v.join(" ");
    }
    const a = r, o = Z(!1), s = Qp(t, "modelValue"), u = Z(), c = Z(), f = Z(n.type);
    Je(() => {
      o.value = !n.form, u.value = o.value ? s.value : n.form[n.field];
    }), jt(
      () => u.value,
      (S, v) => {
        if (S !== v) {
          if (o.value ? s.value = S : n.form[n.field] = S, c.value = v, a("update:modelValue", S), p.value) {
            p.value = !1;
            return;
          }
          a("changed", { value: S, old_value: v });
        }
      }
    );
    const p = Z(!1), m = (S) => {
      u.value = S, p.value = !0;
    }, O = () => c.value;
    jt(
      () => n.field ? n.form[n.field] : null,
      (S) => {
        u.value = o.value ? s.value : S;
      },
      {
        deep: !0
      }
    ), jt(
      () => s.value,
      (S) => {
        u.value = S;
      }
    );
    const g = () => {
      f.value = f.value === "password" ? "text" : "password";
    };
    return e({
      togglePassword: g,
      setValueSilently: m,
      getPreviousValue: O
    }), (S, v) => {
      var C, P, E, _, I, j, z, B;
      return A(), T("div", {
        class: X(t.noLabel ? "mb-2" : "mb-4")
      }, [
        t.noLabel ? K("", !0) : (A(), oe(q(_l), {
          key: 0,
          customClass: t.labelCustomClass,
          for: t.field,
          value: t.label ? t.label : t.field ? i(t.field) : "",
          sublabel: t.sublabel,
          required: t.required
        }, null, 8, ["customClass", "for", "value", "sublabel", "required"])),
        D("div", Lg, [
          t.type === "switch" || t.type === "checkbox" ? (A(), T("label", Ng, [
            (C = S.$slots) != null && C.leftDescription ? J(S.$slots, "leftDescription", { key: 0 }, void 0, !0) : t.leftDescription ? (A(), T("span", Mg, Q(t.leftDescription ? t.leftDescription : "Disable"), 1)) : K("", !0),
            Ve(D("input", {
              id: t.field,
              type: "checkbox",
              class: "hidden",
              "onUpdate:modelValue": v[0] || (v[0] = (N) => u.value = N),
              disabled: n.disabled,
              required: n.required,
              name: t.name ?? t.field
            }, null, 8, Bg), [
              [uf, u.value]
            ]),
            t.type === "switch" ? (A(), T("div", {
              key: 2,
              tabindex: "0",
              class: X(["toggle-switch focusable !ml-0", {
                checked: u.value,
                disabled: n.disabled
              }])
            }, null, 2)) : (A(), T("div", {
              key: 3,
              tabindex: "0",
              class: X(["focusable mr-1 p-1 text-primary", {
                "!text-gray-500": n.disabled,
                [t.checkboxCustomClass]: t.checkboxCustomClass
              }])
            }, [
              ve(lr, {
                name: "popup",
                mode: "out-in"
              }, {
                default: ye(() => [
                  n.form[t.field] ? (A(), oe(q(gt), {
                    key: "checked",
                    icon: "fas fa-square-check"
                  })) : (A(), oe(q(gt), {
                    key: "unchecked",
                    icon: "far fa-square"
                  }))
                ]),
                _: 1
              })
            ], 2)),
            (P = S.$slots) != null && P.rightDescription ? J(S.$slots, "rightDescription", { key: 4 }, void 0, !0) : t.rightDescription ? (A(), T("span", jg, Q(t.rightDescription), 1)) : K("", !0)
          ])) : t.type === "select" ? Ve((A(), T("select", {
            key: 1,
            "onUpdate:modelValue": v[1] || (v[1] = (N) => u.value = N),
            required: n.required,
            disabled: n.disabled,
            name: t.name ?? t.field,
            class: X(["focusable block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", { [t.inputCustomClass]: !!t.inputCustomClass }])
          }, [
            J(S.$slots, "default", {}, void 0, !0)
          ], 10, zg)), [
            [Zp, u.value]
          ]) : (A(), T(fe, { key: 2 }, [
            t.addon ? (A(), T("span", Ug, Q(t.addon), 1)) : K("", !0),
            D("div", Vg, [
              ve(q(Zg), {
                id: t.field,
                type: f.value,
                class: X(["focusable relative m-0 block w-full flex-auto disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", {
                  "!rounded-l-none": t.addon,
                  "!rounded-r-none": !!t.submitBtn || t.whatsApp || ((E = S.$slots) == null ? void 0 : E.submit),
                  [t.inputCustomClass]: !!t.inputCustomClass
                }]),
                modelValue: u.value,
                "onUpdate:modelValue": v[2] || (v[2] = (N) => u.value = N),
                required: n.required,
                disabled: n.disabled,
                autocomplete: t.autocomplete ?? t.field,
                min: n.min,
                max: n.max,
                step: n.step,
                placeholder: n.placeholder,
                autofocus: n.autofocus,
                pattern: n.pattern,
                name: t.name ?? t.field
              }, null, 8, ["id", "type", "class", "modelValue", "required", "disabled", "autocomplete", "min", "max", "step", "placeholder", "autofocus", "pattern", "name"]),
              t.type == "password" && !t.hidePasswordToggler ? (A(), T("div", {
                key: 0,
                onClick: g,
                class: "absolute right-0 top-0 z-[2] flex h-full w-11 cursor-pointer items-center justify-center text-lg leading-normal text-black"
              }, [
                f.value === "password" ? (A(), oe(q(gt), {
                  key: 0,
                  icon: q(Du)
                }, null, 8, ["icon"])) : (A(), oe(q(gt), {
                  key: 1,
                  icon: q(Iu)
                }, null, 8, ["icon"]))
              ])) : K("", !0)
            ]),
            t.form ? (A(), T(fe, { key: 1 }, [
              t.submitBtn ? (A(), oe(q(Fc), {
                key: 0,
                form: t.form,
                class: X(["z-[2] inline-block rounded-l-none", t.buttonCustomClass]),
                id: `submit-button-${t.field}`
              }, {
                default: ye(() => [
                  ge(Q(t.submitBtn), 1)
                ]),
                _: 1
              }, 8, ["form", "class", "id"])) : K("", !0),
              (_ = S.$slots) != null && _.submit ? (A(), oe(q(Fc), {
                key: 1,
                form: t.form,
                class: X(["z-[2] inline-block rounded-l-none", t.buttonCustomClass]),
                id: "button-input"
              }, {
                default: ye(() => [
                  J(S.$slots, "submit", {}, void 0, !0)
                ]),
                _: 3
              }, 8, ["form", "class"])) : K("", !0)
            ], 64)) : K("", !0),
            t.whatsApp ? (A(), T("a", {
              key: 2,
              class: X(["z-[2] inline-block rounded-r bg-primary px-2 py-2 text-xs font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:z-[3] focus:bg-primary-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-lg", t.buttonCustomClass]),
              href: t.whatsApp,
              target: "_blank"
            }, [
              ve(q(gt), {
                icon: "fab fa-whatsapp",
                size: "2xl"
              })
            ], 10, qg)) : K("", !0)
          ], 64))
        ]),
        t.error || (j = (I = t.form) == null ? void 0 : I.errors) != null && j[t.field] ? (A(), oe(q(Qn), {
          key: 1,
          message: t.error ? t.error : (B = (z = t.form) == null ? void 0 : z.errors) == null ? void 0 : B[t.field],
          class: "mt-2"
        }, null, 8, ["message"])) : K("", !0)
      ], 2);
    };
  }
}, Hg = /* @__PURE__ */ Jr(Wg, [["__scopeId", "data-v-10eb1ddb"]]), Gg = { class: "text-sm text-red-600" }, Qn = {
  __name: "InputError",
  props: ["message"],
  setup(t) {
    return (e, r) => Ve((A(), T("div", null, [
      D("p", Gg, Q(t.message), 1)
    ], 512)), [
      [Ut, t.message]
    ]);
  }
}, Kg = { key: 0 }, Yg = { key: 1 }, Jg = {
  key: 2,
  class: "ml-2 text-xs text-gray-500"
}, Xg = {
  key: 3,
  class: "ml-1 text-red-500"
}, _l = {
  __name: "InputLabel",
  props: ["value", "sublabel", "required", "customClass"],
  setup(t) {
    return (e, r) => (A(), T("label", {
      class: X(["mb-1 block text-sm font-medium text-gray-700", t.customClass])
    }, [
      t.value ? (A(), T("span", Kg, Q(t.value), 1)) : (A(), T("span", Yg, [
        J(e.$slots, "default")
      ])),
      t.sublabel ? (A(), T("span", Jg, Q(t.sublabel), 1)) : K("", !0),
      t.required ? (A(), T("span", Xg, "*")) : K("", !0)
    ], 2));
  }
}, Qg = ["value"], Zg = {
  __name: "TextInput",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(t, { expose: e }) {
    const r = Z(null);
    return Je(() => {
      r.value.hasAttribute("autofocus") && r.value.focus();
    }), e({ focus: () => r.value.focus() }), (n, i) => (A(), T("input", {
      class: "max-w-full rounded border-gray-300 shadow focus:border-accent-500 focus:ring-accent-500",
      value: t.modelValue,
      onInput: i[0] || (i[0] = (a) => n.$emit("update:modelValue", a.target.value)),
      ref_key: "input",
      ref: r
    }, null, 40, Qg));
  }
}, ey = { class: "relative mb-4 flex w-full flex-wrap items-stretch" }, ty = ["id", "required", "disabled", "autocomplete", "placeholder", "autofocus", "rows"], XE = {
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
  setup(t) {
    const e = t;
    function r(n) {
      let i = [];
      return n.split("_").join(" ").split(" ").map(function(a) {
        i.push(a[0].toUpperCase() + a.slice(1));
      }), i.join(" ");
    }
    return (n, i) => (A(), T("div", null, [
      t.noLabel ? K("", !0) : (A(), oe(q(_l), {
        key: 0,
        for: t.field,
        value: t.label ? t.label : r(t.field),
        required: t.required
      }, null, 8, ["for", "value", "required"])),
      D("div", ey, [
        Ve(D("textarea", {
          id: t.field,
          class: "relative m-0 block flex-auto rounded border-gray-300 shadow focus:border-accent-500 focus:ring-accent-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none",
          "onUpdate:modelValue": i[0] || (i[0] = (a) => e.form[t.field] = a),
          required: e.required,
          disabled: e.disabled,
          autocomplete: t.field,
          placeholder: e.placeholder,
          autofocus: e.autofocus,
          rows: e.rows,
          onInput: i[1] || (i[1] = (a) => n.$emit("update:modelValue", a.target.value))
        }, null, 40, ty), [
          [eh, e.form[t.field]]
        ])
      ]),
      ve(q(Qn), {
        class: "mt-2",
        message: e.form.errors[t.field]
      }, null, 8, ["message"])
    ]));
  }
};
var ry = Object.defineProperty, ny = Object.defineProperties, iy = Object.getOwnPropertyDescriptors, Ru = Object.getOwnPropertySymbols, ay = Object.prototype.hasOwnProperty, oy = Object.prototype.propertyIsEnumerable, Fu = (t, e, r) => e in t ? ry(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Tr = (t, e) => {
  for (var r in e || (e = {}))
    ay.call(e, r) && Fu(t, r, e[r]);
  if (Ru)
    for (var r of Ru(e))
      oy.call(e, r) && Fu(t, r, e[r]);
  return t;
}, Lu = (t, e) => ny(t, iy(e));
const sy = {
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
    open(t) {
      this.autoscroll && t && this.$nextTick(() => this.maybeAdjustScroll());
    }
  },
  methods: {
    maybeAdjustScroll() {
      var t;
      const e = ((t = this.$refs.dropdownMenu) == null ? void 0 : t.children[this.typeAheadPointer]) || !1;
      if (e) {
        const r = this.getDropdownViewport(), { top: n, bottom: i, height: a } = e.getBoundingClientRect();
        if (n < r.top)
          return this.$refs.dropdownMenu.scrollTop = e.offsetTop;
        if (i > r.bottom)
          return this.$refs.dropdownMenu.scrollTop = e.offsetTop - (r.height - a);
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
}, ly = {
  data() {
    return {
      typeAheadPointer: -1
    };
  },
  watch: {
    filteredOptions() {
      for (let t = 0; t < this.filteredOptions.length; t++)
        if (this.selectable(this.filteredOptions[t])) {
          this.typeAheadPointer = t;
          break;
        }
    },
    open(t) {
      t && this.typeAheadToLastSelected();
    },
    selectedValue() {
      this.open && this.typeAheadToLastSelected();
    }
  },
  methods: {
    typeAheadUp() {
      for (let t = this.typeAheadPointer - 1; t >= 0; t--)
        if (this.selectable(this.filteredOptions[t])) {
          this.typeAheadPointer = t;
          break;
        }
    },
    typeAheadDown() {
      for (let t = this.typeAheadPointer + 1; t < this.filteredOptions.length; t++)
        if (this.selectable(this.filteredOptions[t])) {
          this.typeAheadPointer = t;
          break;
        }
    },
    typeAheadSelect() {
      const t = this.filteredOptions[this.typeAheadPointer];
      t && this.selectable(t) && this.select(t);
    },
    typeAheadToLastSelected() {
      this.typeAheadPointer = this.selectedValue.length !== 0 ? this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length - 1]) : -1;
    }
  }
}, uy = {
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
    loading(t) {
      this.mutableLoading = t;
    }
  },
  methods: {
    toggleLoading(t = null) {
      return t == null ? this.mutableLoading = !this.mutableLoading : this.mutableLoading = t;
    }
  }
}, kl = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, i] of e)
    r[n] = i;
  return r;
}, cy = {}, fy = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, dy = /* @__PURE__ */ D("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), py = [
  dy
];
function hy(t, e) {
  return A(), T("svg", fy, py);
}
const my = /* @__PURE__ */ kl(cy, [["render", hy]]), gy = {}, yy = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, by = /* @__PURE__ */ D("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), vy = [
  by
];
function wy(t, e) {
  return A(), T("svg", yy, vy);
}
const xy = /* @__PURE__ */ kl(gy, [["render", wy]]), Nu = {
  Deselect: my,
  OpenIndicator: xy
}, Sy = {
  mounted(t, { instance: e }) {
    if (e.appendToBody) {
      const {
        height: r,
        top: n,
        left: i,
        width: a
      } = e.$refs.toggle.getBoundingClientRect();
      let o = window.scrollX || window.pageXOffset, s = window.scrollY || window.pageYOffset;
      t.unbindPosition = e.calculatePosition(t, e, {
        width: a + "px",
        left: o + i + "px",
        top: s + n + r + "px"
      }), document.body.appendChild(t);
    }
  },
  unmounted(t, { instance: e }) {
    e.appendToBody && (t.unbindPosition && typeof t.unbindPosition == "function" && t.unbindPosition(), t.parentNode && t.parentNode.removeChild(t));
  }
};
function Oy(t) {
  const e = {};
  return Object.keys(t).sort().forEach((r) => {
    e[r] = t[r];
  }), JSON.stringify(e);
}
let Ey = 0;
function Ay() {
  return ++Ey;
}
const Cy = {
  components: Tr({}, Nu),
  directives: { appendToBody: Sy },
  mixins: [sy, ly, uy],
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
      default: (t) => t
    },
    selectable: {
      type: Function,
      default: (t) => !0
    },
    getOptionLabel: {
      type: Function,
      default(t) {
        return typeof t == "object" ? t.hasOwnProperty(this.label) ? t[this.label] : console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(t)}.
https://vue-select.org/api/props.html#getoptionlabel`) : t;
      }
    },
    getOptionKey: {
      type: Function,
      default(t) {
        if (typeof t != "object")
          return t;
        try {
          return t.hasOwnProperty("id") ? t.id : Oy(t);
        } catch (e) {
          return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`, t, e);
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
      default(t, e, r) {
        return (e || "").toLocaleLowerCase().indexOf(r.toLocaleLowerCase()) > -1;
      }
    },
    filter: {
      type: Function,
      default(t, e) {
        return t.filter((r) => {
          let n = this.getOptionLabel(r);
          return typeof n == "number" && (n = n.toString()), this.filterBy(r, n, e);
        });
      }
    },
    createOption: {
      type: Function,
      default(t) {
        return typeof this.optionList[0] == "object" ? { [this.label]: t } : t;
      }
    },
    resetOnOptionsChange: {
      default: !1,
      validator: (t) => ["function", "boolean"].includes(typeof t)
    },
    clearSearchOnBlur: {
      type: Function,
      default: function({ clearSearchOnSelect: t, multiple: e }) {
        return t && !e;
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
      default: (t, e) => t
    },
    appendToBody: {
      type: Boolean,
      default: !1
    },
    calculatePosition: {
      type: Function,
      default(t, e, { width: r, top: n, left: i }) {
        t.style.top = n, t.style.left = i, t.style.width = r;
      }
    },
    dropdownShouldOpen: {
      type: Function,
      default({ noDrop: t, open: e, mutableLoading: r }) {
        return t ? !1 : e && !r;
      }
    },
    uid: {
      type: [String, Number],
      default: () => Ay()
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
      let t = this.modelValue;
      return this.isTrackingValues && (t = this.$data._value), t != null && t !== "" ? [].concat(t) : [];
    },
    optionList() {
      return this.options.concat(this.pushTags ? this.pushedTags : []);
    },
    searchEl() {
      return this.$slots.search ? this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector) : this.$refs.search;
    },
    scope() {
      const t = {
        search: this.search,
        loading: this.loading,
        searching: this.searching,
        filteredOptions: this.filteredOptions
      };
      return {
        search: {
          attributes: Tr({
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
            input: (e) => this.search = e.target.value
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
        listHeader: t,
        listFooter: t,
        header: Lu(Tr({}, t), { deselect: this.deselect }),
        footer: Lu(Tr({}, t), { deselect: this.deselect })
      };
    },
    childComponents() {
      return Tr(Tr({}, Nu), this.components);
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
      const t = [].concat(this.optionList);
      if (!this.filterable && !this.taggable)
        return t;
      const e = this.search.length ? this.filter(t, this.search, this) : t;
      if (this.taggable && this.search.length) {
        const r = this.createOption(this.search);
        this.optionExists(r) || e.unshift(r);
      }
      return e;
    },
    isValueEmpty() {
      return this.selectedValue.length === 0;
    },
    showClearButton() {
      return !this.multiple && this.clearable && !this.open && !this.isValueEmpty;
    }
  },
  watch: {
    options(t, e) {
      const r = () => typeof this.resetOnOptionsChange == "function" ? this.resetOnOptionsChange(t, e, this.selectedValue) : this.resetOnOptionsChange;
      !this.taggable && r() && this.clearSelection(), this.modelValue && this.isTrackingValues && this.setInternalValueFromOptions(this.modelValue);
    },
    modelValue: {
      immediate: !0,
      handler(t) {
        this.isTrackingValues && this.setInternalValueFromOptions(t);
      }
    },
    multiple() {
      this.clearSelection();
    },
    open(t) {
      this.$emit(t ? "open" : "close");
    }
  },
  created() {
    this.mutableLoading = this.loading;
  },
  methods: {
    setInternalValueFromOptions(t) {
      Array.isArray(t) ? this.$data._value = t.map((e) => this.findOptionFromReducedValue(e)) : this.$data._value = this.findOptionFromReducedValue(t);
    },
    select(t) {
      this.$emit("option:selecting", t), this.isOptionSelected(t) ? this.deselectFromDropdown && (this.clearable || this.multiple && this.selectedValue.length > 1) && this.deselect(t) : (this.taggable && !this.optionExists(t) && (this.$emit("option:created", t), this.pushTag(t)), this.multiple && (t = this.selectedValue.concat(t)), this.updateValue(t), this.$emit("option:selected", t)), this.onAfterSelect(t);
    },
    deselect(t) {
      this.$emit("option:deselecting", t), this.updateValue(this.selectedValue.filter((e) => !this.optionComparator(e, t))), this.$emit("option:deselected", t);
    },
    clearSelection() {
      this.updateValue(this.multiple ? [] : null);
    },
    onAfterSelect(t) {
      this.closeOnSelect && (this.open = !this.open, this.searchEl.blur()), this.clearSearchOnSelect && (this.search = "");
    },
    updateValue(t) {
      typeof this.modelValue > "u" && (this.$data._value = t), t !== null && (Array.isArray(t) ? t = t.map((e) => this.reduce(e)) : t = this.reduce(t)), this.$emit("update:modelValue", t);
    },
    toggleDropdown(t) {
      const e = t.target !== this.searchEl;
      e && t.preventDefault();
      const r = [
        ...this.deselectButtons || [],
        this.$refs.clearButton
      ];
      if (this.searchEl === void 0 || r.filter(Boolean).some((n) => n.contains(t.target) || n === t.target)) {
        t.preventDefault();
        return;
      }
      this.open && e ? this.searchEl.blur() : this.disabled || (this.open = !0, this.searchEl.focus());
    },
    isOptionSelected(t) {
      return this.selectedValue.some((e) => this.optionComparator(e, t));
    },
    isOptionDeselectable(t) {
      return this.isOptionSelected(t) && this.deselectFromDropdown;
    },
    optionComparator(t, e) {
      return this.getOptionKey(t) === this.getOptionKey(e);
    },
    findOptionFromReducedValue(t) {
      const e = (n) => JSON.stringify(this.reduce(n)) === JSON.stringify(t), r = [...this.options, ...this.pushedTags].filter(e);
      return r.length === 1 ? r[0] : r.find((n) => this.optionComparator(n, this.$data._value)) || t;
    },
    closeSearchOptions() {
      this.open = !1, this.$emit("search:blur");
    },
    maybeDeleteValue() {
      if (!this.searchEl.value.length && this.selectedValue && this.selectedValue.length && this.clearable) {
        let t = null;
        this.multiple && (t = [
          ...this.selectedValue.slice(0, this.selectedValue.length - 1)
        ]), this.updateValue(t);
      }
    },
    optionExists(t) {
      return this.optionList.some((e) => this.optionComparator(e, t));
    },
    normalizeOptionForSlot(t) {
      return typeof t == "object" ? t : { [this.label]: t };
    },
    pushTag(t) {
      this.pushedTags.push(t);
    },
    onEscape() {
      this.search.length ? this.search = "" : this.searchEl.blur();
    },
    onSearchBlur() {
      if (this.mousedown && !this.searching)
        this.mousedown = !1;
      else {
        const { clearSearchOnSelect: t, multiple: e } = this;
        this.clearSearchOnBlur({ clearSearchOnSelect: t, multiple: e }) && (this.search = ""), this.closeSearchOptions();
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
    onSearchKeyDown(t) {
      const e = (i) => (i.preventDefault(), !this.isComposing && this.typeAheadSelect()), r = {
        8: (i) => this.maybeDeleteValue(),
        9: (i) => this.onTab(),
        27: (i) => this.onEscape(),
        38: (i) => (i.preventDefault(), this.typeAheadUp()),
        40: (i) => (i.preventDefault(), this.typeAheadDown())
      };
      this.selectOnKeyCodes.forEach((i) => r[i] = e);
      const n = this.mapKeydown(r, this);
      if (typeof n[t.keyCode] == "function")
        return n[t.keyCode](t);
    }
  }
}, _y = ["dir"], ky = ["id", "aria-expanded", "aria-owns"], Py = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, Ty = ["disabled", "title", "aria-label", "onClick"], $y = {
  ref: "actions",
  class: "vs__actions"
}, Iy = ["disabled"], Dy = { class: "vs__spinner" }, Ry = ["id"], Fy = ["id", "aria-selected", "onMouseover", "onClick"], Ly = {
  key: 0,
  class: "vs__no-options"
}, Ny = /* @__PURE__ */ ge(" Sorry, no matching options. "), My = ["id"];
function By(t, e, r, n, i, a) {
  const o = th("append-to-body");
  return A(), T("div", {
    dir: r.dir,
    class: X(["v-select", a.stateClasses])
  }, [
    J(t.$slots, "header", Ge(tt(a.scope.header))),
    D("div", {
      id: `vs${r.uid}__combobox`,
      ref: "toggle",
      class: "vs__dropdown-toggle",
      role: "combobox",
      "aria-expanded": a.dropdownOpen.toString(),
      "aria-owns": `vs${r.uid}__listbox`,
      "aria-label": "Search for option",
      onMousedown: e[1] || (e[1] = (s) => a.toggleDropdown(s))
    }, [
      D("div", Py, [
        (A(!0), T(fe, null, Ye(a.selectedValue, (s, u) => J(t.$slots, "selected-option-container", {
          option: a.normalizeOptionForSlot(s),
          deselect: a.deselect,
          multiple: r.multiple,
          disabled: r.disabled
        }, () => [
          (A(), T("span", {
            key: r.getOptionKey(s),
            class: "vs__selected"
          }, [
            J(t.$slots, "selected-option", Ge(tt(a.normalizeOptionForSlot(s))), () => [
              ge(Q(r.getOptionLabel(s)), 1)
            ]),
            r.multiple ? (A(), T("button", {
              key: 0,
              ref_for: !0,
              ref: (c) => i.deselectButtons[u] = c,
              disabled: r.disabled,
              type: "button",
              class: "vs__deselect",
              title: `Deselect ${r.getOptionLabel(s)}`,
              "aria-label": `Deselect ${r.getOptionLabel(s)}`,
              onClick: (c) => a.deselect(s)
            }, [
              (A(), oe($o(a.childComponents.Deselect)))
            ], 8, Ty)) : K("", !0)
          ]))
        ])), 256)),
        J(t.$slots, "search", Ge(tt(a.scope.search)), () => [
          D("input", Mn({ class: "vs__search" }, a.scope.search.attributes, rh(a.scope.search.events)), null, 16)
        ])
      ], 512),
      D("div", $y, [
        Ve(D("button", {
          ref: "clearButton",
          disabled: r.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: e[0] || (e[0] = (...s) => a.clearSelection && a.clearSelection(...s))
        }, [
          (A(), oe($o(a.childComponents.Deselect)))
        ], 8, Iy), [
          [Ut, a.showClearButton]
        ]),
        J(t.$slots, "open-indicator", Ge(tt(a.scope.openIndicator)), () => [
          r.noDrop ? K("", !0) : (A(), oe($o(a.childComponents.OpenIndicator), Ge(Mn({ key: 0 }, a.scope.openIndicator.attributes)), null, 16))
        ]),
        J(t.$slots, "spinner", Ge(tt(a.scope.spinner)), () => [
          Ve(D("div", Dy, "Loading...", 512), [
            [Ut, t.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, ky),
    ve(lr, { name: r.transition }, {
      default: ye(() => [
        a.dropdownOpen ? Ve((A(), T("ul", {
          id: `vs${r.uid}__listbox`,
          ref: "dropdownMenu",
          key: `vs${r.uid}__listbox`,
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1",
          onMousedown: e[2] || (e[2] = Mt((...s) => a.onMousedown && a.onMousedown(...s), ["prevent"])),
          onMouseup: e[3] || (e[3] = (...s) => a.onMouseUp && a.onMouseUp(...s))
        }, [
          J(t.$slots, "list-header", Ge(tt(a.scope.listHeader))),
          (A(!0), T(fe, null, Ye(a.filteredOptions, (s, u) => (A(), T("li", {
            id: `vs${r.uid}__option-${u}`,
            key: r.getOptionKey(s),
            role: "option",
            class: X(["vs__dropdown-option", {
              "vs__dropdown-option--deselect": a.isOptionDeselectable(s) && u === t.typeAheadPointer,
              "vs__dropdown-option--selected": a.isOptionSelected(s),
              "vs__dropdown-option--highlight": u === t.typeAheadPointer,
              "vs__dropdown-option--disabled": !r.selectable(s)
            }]),
            "aria-selected": u === t.typeAheadPointer ? !0 : null,
            onMouseover: (c) => r.selectable(s) ? t.typeAheadPointer = u : null,
            onClick: Mt((c) => r.selectable(s) ? a.select(s) : null, ["prevent", "stop"])
          }, [
            J(t.$slots, "option", Ge(tt(a.normalizeOptionForSlot(s))), () => [
              ge(Q(r.getOptionLabel(s)), 1)
            ])
          ], 42, Fy))), 128)),
          a.filteredOptions.length === 0 ? (A(), T("li", Ly, [
            J(t.$slots, "no-options", Ge(tt(a.scope.noOptions)), () => [
              Ny
            ])
          ])) : K("", !0),
          J(t.$slots, "list-footer", Ge(tt(a.scope.listFooter)))
        ], 40, Ry)), [
          [o]
        ]) : (A(), T("ul", {
          key: 1,
          id: `vs${r.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, My))
      ]),
      _: 3
    }, 8, ["name"]),
    J(t.$slots, "footer", Ge(tt(a.scope.footer)))
  ], 10, _y);
}
const jy = /* @__PURE__ */ kl(Cy, [["render", By]]);
const QE = {
  __name: "DropdownSearchbar",
  props: {
    options: Array,
    label: String,
    placeholder: String
  },
  setup(t) {
    return Xn.add(Hf), (e, r) => (A(), oe(q(jy), {
      options: t.options,
      label: t.label,
      placeholder: t.placeholder,
      class: "min-w-44"
    }, null, 8, ["options", "label", "placeholder"]));
  }
}, Et = {
  // cursor on input
  openOptions(t) {
    t.$refs.input.focus(), t.showMenu = !0, t.mousedownState = !1;
  },
  blurInput(t) {
    t.mousedownState || (t.searchText = "", t.closeOptions()), t.$emit("blur");
  },
  closeOptions(t) {
    t.$refs.input.blur(), t.showMenu = !1;
  },
  /**
   * up arrow key
   * 上の移動するときには新しいscroll位置を毎回セットする
   * Always scroll move, when "up arrow key" entered
   */
  prevItem(t) {
    const e = t.pointer - 1, r = t.$el.offsetHeight * e;
    e >= 0 && (t.pointer = e), t.$refs.menu.scrollTop = r;
  },
  /**
   *
   * down arrow key
   * ページsizeを計算してずれたらmove
   * calculate page size. If different between itemPage and currentPage move scroll
   */
  nextItem(t) {
    const e = t.pointer + 1, r = t.$el.offsetHeight * e;
    e <= t.filteredOptions.length - 1 && (t.pointer = e);
    const n = t.$refs.menu.offsetHeight, i = Math.ceil((t.$refs.menu.scrollTop + t.$el.offsetHeight) / n), a = Math.ceil(r / n);
    i !== a && (t.$refs.menu.scrollTop = (a - 1) * t.$refs.menu.offsetHeight);
  },
  // down enter key
  enterItem(t) {
    const e = t.filteredOptions[t.pointer], r = e.disabled;
    e && !r && t.selectItem(e);
  },
  // mouse enter event on item
  pointerSet(t, e) {
    t.pointer = e;
  },
  pointerAdjust(t) {
    t.pointer >= t.filteredOptions.length - 1 && (t.pointer = t.filteredOptions.length ? t.filteredOptions.length - 1 : 0);
  },
  mousedownItem(t) {
    t.mousedownState = !0;
  }
};
function zy(t) {
  return new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
}
const Gf = {
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
      default: (t, e) => t.match(zy(e))
    }
  }
}, Uy = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, i] of e)
    r[n] = i;
  return r;
}, Vy = {
  name: "ModelSelect",
  mixins: [Gf],
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
    value(t) {
      this.pointer = this.filteredOptions.findIndex((e) => e.value === this.optionValue(t));
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
        let t = this.placeholder;
        return this.selectedOption && (t = this.selectedOption.text), t;
      }
    },
    customAttrs() {
      try {
        if (Array.isArray(this.options))
          return this.options.map((t) => this.customAttr(t));
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
      return this.searchText ? this.options.filter((t) => {
        try {
          return this.filterPredicate(t.text, this.searchText);
        } catch {
          return !0;
        }
      }) : this.options;
    },
    selectedOption() {
      return this.options.find((t) => t.value === this.optionValue(this.modelValue));
    }
  },
  methods: {
    deleteTextOrItem() {
      !this.searchText && this.modelValue && (this.selectItem({}), this.openOptions());
    },
    openOptions() {
      Et.openOptions(this);
    },
    blurInput() {
      Et.blurInput(this);
    },
    closeOptions() {
      Et.closeOptions(this);
    },
    prevItem() {
      Et.prevItem(this);
    },
    nextItem() {
      Et.nextItem(this);
    },
    enterItem() {
      Et.enterItem(this);
    },
    pointerSet(t) {
      Et.pointerSet(this, t);
    },
    pointerAdjust() {
      Et.pointerAdjust(this);
    },
    mousedownItem() {
      Et.mousedownItem(this);
    },
    selectItem(t) {
      this.searchText = "", this.closeOptions(), typeof this.modelValue == "object" && this.modelValue ? this.$emit("update:modelValue", t) : (this.$emit("update:modelValue", t.value), t.value !== void 0 && t.value === t.text && (this.searchText = t.value));
    },
    optionValue(t) {
      return typeof t == "object" && t !== null ? t.value : t;
    }
  }
}, qy = /* @__PURE__ */ D("i", { class: "dropdown icon" }, null, -1), Wy = ["disabled", "tabindex", "id", "name", "value"], Hy = ["data-vss-custom-attr"], Gy = ["data-vss-custom-attr", "onClick", "onMouseenter"];
function Ky(t, e, r, n, i, a) {
  return A(), T("div", {
    class: X(["ui fluid search selection dropdown", { "active visible": i.showMenu, error: t.isError, disabled: t.isDisabled }]),
    onClick: e[11] || (e[11] = (...o) => a.openOptions && a.openOptions(...o)),
    onFocus: e[12] || (e[12] = (...o) => a.openOptions && a.openOptions(...o))
  }, [
    qy,
    D("input", {
      class: "search",
      autocomplete: "off",
      disabled: t.isDisabled,
      tabindex: t.isDisabled ? -1 : 0,
      id: t.id,
      name: t.name,
      value: i.searchText,
      onInput: e[0] || (e[0] = (o) => i.searchText = o.target.value),
      ref: "input",
      onFocus: e[1] || (e[1] = Mt((...o) => a.openOptions && a.openOptions(...o), ["prevent"])),
      onKeyup: [
        e[2] || (e[2] = Pr((...o) => a.closeOptions && a.closeOptions(...o), ["esc"])),
        e[7] || (e[7] = Pr(Mt((...o) => a.enterItem && a.enterItem(...o), ["prevent"]), ["enter"]))
      ],
      onBlur: e[3] || (e[3] = (...o) => a.blurInput && a.blurInput(...o)),
      onKeydown: [
        e[4] || (e[4] = Pr((...o) => a.prevItem && a.prevItem(...o), ["up"])),
        e[5] || (e[5] = Pr((...o) => a.nextItem && a.nextItem(...o), ["down"])),
        e[6] || (e[6] = Pr(Mt(() => {
        }, ["prevent"]), ["enter"])),
        e[8] || (e[8] = Pr((...o) => a.deleteTextOrItem && a.deleteTextOrItem(...o), ["delete"]))
      ]
    }, null, 40, Wy),
    D("div", {
      class: X(["text", a.textClass]),
      "data-vss-custom-attr": a.searchTextCustomAttr
    }, Q(a.inputText), 11, Hy),
    D("div", {
      class: X(["menu", a.menuClass]),
      ref: "menu",
      onMousedown: e[10] || (e[10] = Mt(() => {
      }, ["prevent"])),
      style: Nr(a.menuStyle),
      tabindex: "-1"
    }, [
      (A(!0), T(fe, null, Ye(a.filteredOptions, (o, s) => (A(), T("div", {
        key: s,
        class: X(["item", { selected: o.selected || i.pointer === s, disabled: o.disabled }]),
        "data-vss-custom-attr": a.customAttrs[s] ? a.customAttrs[s] : "",
        onClick: Mt((u) => a.selectItem(o), ["stop"]),
        onMousedown: e[9] || (e[9] = (...u) => a.mousedownItem && a.mousedownItem(...u)),
        onMouseenter: (u) => a.pointerSet(s)
      }, [
        J(t.$slots, "default", {
          option: o,
          idx: s
        }, () => [
          ge(Q(o.text), 1)
        ])
      ], 42, Gy))), 128))
    ], 38)
  ], 34);
}
const Mu = /* @__PURE__ */ Uy(Vy, [["render", Ky]]), Bu = {
  name: "ModelListSelect",
  mixins: [Gf],
  emits: ["blur", "searchchange", "update:modelValue"],
  render: function() {
    return zt(Mu, {
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
      onSearchchange: (t) => this.$emit("searchchange", t)
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
      return this.list.map((t) => ({ value: t[this.optionValue], text: this.buildText(t), disabled: !!t[this.optionDisabled] }));
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
    buildText(t) {
      return t[this.optionValue] !== void 0 ? this.customText ? this.customText(t) : t[this.optionText] : "";
    },
    onInput(t) {
      if (t === void 0)
        return this.$emit("update:modelValue", "");
      if (Object.keys(t).length === 0 && t.constructor === Object)
        this.$emit("update:modelValue", t);
      else if (typeof t == "object") {
        const e = this.list.find((r) => r[this.optionValue] === t.value);
        this.$emit("update:modelValue", e);
      } else
        this.$emit("update:modelValue", t);
    }
  },
  components: {
    ModelSelect: Mu
  }
};
const Yy = {
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
      default: (t, e) => t.toLowerCase().includes(e.toLowerCase())
    },
    required: Boolean
  },
  emits: ["update:modelValue", "searchchange"],
  setup(t, { emit: e }) {
    const r = e, n = (i) => {
      let a = [];
      return i.split("_").join(" ").split(" ").map(function(o) {
        a.push(o[0].toUpperCase() + o.slice(1));
      }), a.join(" ");
    };
    return (i, a) => (A(), T("div", null, [
      !t.noLabel && (t.label || t.field) ? (A(), oe(q(_l), {
        key: 0,
        for: t.id ?? t.field,
        value: n(t.label ?? t.field),
        required: t.required
      }, null, 8, ["for", "value", "required"])) : K("", !0),
      t.noForm ? (A(), oe(q(Bu), {
        key: 1,
        id: t.id ?? t.field,
        list: t.list,
        modelValue: t.modelValue,
        "option-value": t.optionValue,
        "option-text": t.optionText,
        "option-disabled": t.optionDisabled,
        placeholder: t.placeholder,
        class: "model-list !relative !mt-0 h-[42px] !max-w-full !rounded !border-gray-300 !shadow",
        "onUpdate:modelValue": a[0] || (a[0] = (o) => r("update:modelValue", o)),
        onSearchchange: a[1] || (a[1] = (o) => r("searchchange", o)),
        "is-disabled": t.disabled,
        filterPredicate: t.filterPredicate
      }, null, 8, ["id", "list", "modelValue", "option-value", "option-text", "option-disabled", "placeholder", "is-disabled", "filterPredicate"])) : (A(), T(fe, { key: 2 }, [
        ve(q(Bu), {
          id: t.id ?? t.field,
          list: t.list,
          modelValue: t.form[t.field],
          "onUpdate:modelValue": [
            a[2] || (a[2] = (o) => t.form[t.field] = o),
            a[3] || (a[3] = (o) => r("update:modelValue", o))
          ],
          "option-value": t.optionValue,
          "option-text": t.optionText,
          "option-disabled": t.optionDisabled,
          placeholder: t.placeholder,
          class: "model-list !relative !mt-0 h-[42px] !max-w-full !rounded !border-gray-300 !px-3 !shadow",
          onSearchchange: a[4] || (a[4] = (o) => r("searchchange", o)),
          "is-disabled": t.disabled,
          filterPredicate: t.filterPredicate
        }, null, 8, ["id", "list", "modelValue", "option-value", "option-text", "option-disabled", "placeholder", "is-disabled", "filterPredicate"]),
        ve(q(Qn), {
          message: t.form.errors[t.field]
        }, null, 8, ["message"])
      ], 64))
    ]));
  }
}, Jy = /* @__PURE__ */ Jr(Yy, [["__scopeId", "data-v-80742e76"]]);
function Kf(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: Xy } = Object.prototype, { getPrototypeOf: Pl } = Object, Aa = ((t) => (e) => {
  const r = Xy.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), at = (t) => (t = t.toLowerCase(), (e) => Aa(e) === t), Ca = (t) => (e) => typeof e === t, { isArray: Xr } = Array, zn = Ca("undefined");
function Qy(t) {
  return t !== null && !zn(t) && t.constructor !== null && !zn(t.constructor) && qe(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Yf = at("ArrayBuffer");
function Zy(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Yf(t.buffer), e;
}
const e0 = Ca("string"), qe = Ca("function"), Jf = Ca("number"), _a = (t) => t !== null && typeof t == "object", t0 = (t) => t === !0 || t === !1, Wi = (t) => {
  if (Aa(t) !== "object")
    return !1;
  const e = Pl(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, r0 = at("Date"), n0 = at("File"), i0 = at("Blob"), a0 = at("FileList"), o0 = (t) => _a(t) && qe(t.pipe), s0 = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || qe(t.append) && ((e = Aa(t)) === "formdata" || // detect form-data instance
  e === "object" && qe(t.toString) && t.toString() === "[object FormData]"));
}, l0 = at("URLSearchParams"), [u0, c0, f0, d0] = ["ReadableStream", "Request", "Response", "Headers"].map(at), p0 = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Zn(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, i;
  if (typeof t != "object" && (t = [t]), Xr(t))
    for (n = 0, i = t.length; n < i; n++)
      e.call(null, t[n], n, t);
  else {
    const a = r ? Object.getOwnPropertyNames(t) : Object.keys(t), o = a.length;
    let s;
    for (n = 0; n < o; n++)
      s = a[n], e.call(null, t[s], s, t);
  }
}
function Xf(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], e === i.toLowerCase())
      return i;
  return null;
}
const or = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Qf = (t) => !zn(t) && t !== or;
function Is() {
  const { caseless: t } = Qf(this) && this || {}, e = {}, r = (n, i) => {
    const a = t && Xf(e, i) || i;
    Wi(e[a]) && Wi(n) ? e[a] = Is(e[a], n) : Wi(n) ? e[a] = Is({}, n) : Xr(n) ? e[a] = n.slice() : e[a] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && Zn(arguments[n], r);
  return e;
}
const h0 = (t, e, r, { allOwnKeys: n } = {}) => (Zn(e, (i, a) => {
  r && qe(i) ? t[a] = Kf(i, r) : t[a] = i;
}, { allOwnKeys: n }), t), m0 = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), g0 = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, y0 = (t, e, r, n) => {
  let i, a, o;
  const s = {};
  if (e = e || {}, t == null)
    return e;
  do {
    for (i = Object.getOwnPropertyNames(t), a = i.length; a-- > 0; )
      o = i[a], (!n || n(o, t, e)) && !s[o] && (e[o] = t[o], s[o] = !0);
    t = r !== !1 && Pl(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, b0 = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, v0 = (t) => {
  if (!t)
    return null;
  if (Xr(t))
    return t;
  let e = t.length;
  if (!Jf(e))
    return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, w0 = ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Pl(Uint8Array)), x0 = (t, e) => {
  const n = (t && t[Symbol.iterator]).call(t);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const a = i.value;
    e.call(t, a[0], a[1]);
  }
}, S0 = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, O0 = at("HTMLFormElement"), E0 = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), ju = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), A0 = at("RegExp"), Zf = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  Zn(r, (i, a) => {
    let o;
    (o = e(i, a, t)) !== !1 && (n[a] = o || i);
  }), Object.defineProperties(t, n);
}, C0 = (t) => {
  Zf(t, (e, r) => {
    if (qe(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = t[r];
    if (qe(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, _0 = (t, e) => {
  const r = {}, n = (i) => {
    i.forEach((a) => {
      r[a] = !0;
    });
  };
  return Xr(t) ? n(t) : n(String(t).split(e)), r;
}, k0 = () => {
}, P0 = (t, e) => t != null && Number.isFinite(t = +t) ? t : e, No = "abcdefghijklmnopqrstuvwxyz", zu = "0123456789", ed = {
  DIGIT: zu,
  ALPHA: No,
  ALPHA_DIGIT: No + No.toUpperCase() + zu
}, T0 = (t = 16, e = ed.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = e;
  for (; t--; )
    r += e[Math.random() * n | 0];
  return r;
};
function $0(t) {
  return !!(t && qe(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const I0 = (t) => {
  const e = new Array(10), r = (n, i) => {
    if (_a(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[i] = n;
        const a = Xr(n) ? [] : {};
        return Zn(n, (o, s) => {
          const u = r(o, i + 1);
          !zn(u) && (a[s] = u);
        }), e[i] = void 0, a;
      }
    }
    return n;
  };
  return r(t, 0);
}, D0 = at("AsyncFunction"), R0 = (t) => t && (_a(t) || qe(t)) && qe(t.then) && qe(t.catch), td = ((t, e) => t ? setImmediate : e ? ((r, n) => (or.addEventListener("message", ({ source: i, data: a }) => {
  i === or && a === r && n.length && n.shift()();
}, !1), (i) => {
  n.push(i), or.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  qe(or.postMessage)
), F0 = typeof queueMicrotask < "u" ? queueMicrotask.bind(or) : typeof process < "u" && process.nextTick || td, k = {
  isArray: Xr,
  isArrayBuffer: Yf,
  isBuffer: Qy,
  isFormData: s0,
  isArrayBufferView: Zy,
  isString: e0,
  isNumber: Jf,
  isBoolean: t0,
  isObject: _a,
  isPlainObject: Wi,
  isReadableStream: u0,
  isRequest: c0,
  isResponse: f0,
  isHeaders: d0,
  isUndefined: zn,
  isDate: r0,
  isFile: n0,
  isBlob: i0,
  isRegExp: A0,
  isFunction: qe,
  isStream: o0,
  isURLSearchParams: l0,
  isTypedArray: w0,
  isFileList: a0,
  forEach: Zn,
  merge: Is,
  extend: h0,
  trim: p0,
  stripBOM: m0,
  inherits: g0,
  toFlatObject: y0,
  kindOf: Aa,
  kindOfTest: at,
  endsWith: b0,
  toArray: v0,
  forEachEntry: x0,
  matchAll: S0,
  isHTMLForm: O0,
  hasOwnProperty: ju,
  hasOwnProp: ju,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Zf,
  freezeMethods: C0,
  toObjectSet: _0,
  toCamelCase: E0,
  noop: k0,
  toFiniteNumber: P0,
  findKey: Xf,
  global: or,
  isContextDefined: Qf,
  ALPHABET: ed,
  generateString: T0,
  isSpecCompliantForm: $0,
  toJSONObject: I0,
  isAsyncFn: D0,
  isThenable: R0,
  setImmediate: td,
  asap: F0
};
function te(t, e, r, n, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), i && (this.response = i, this.status = i.status ? i.status : null);
}
k.inherits(te, Error, {
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
      config: k.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const rd = te.prototype, nd = {};
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
].forEach((t) => {
  nd[t] = { value: t };
});
Object.defineProperties(te, nd);
Object.defineProperty(rd, "isAxiosError", { value: !0 });
te.from = (t, e, r, n, i, a) => {
  const o = Object.create(rd);
  return k.toFlatObject(t, o, function(u) {
    return u !== Error.prototype;
  }, (s) => s !== "isAxiosError"), te.call(o, t.message, e, r, n, i), o.cause = t, o.name = t.name, a && Object.assign(o, a), o;
};
const L0 = null;
function Ds(t) {
  return k.isPlainObject(t) || k.isArray(t);
}
function id(t) {
  return k.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Uu(t, e, r) {
  return t ? t.concat(e).map(function(i, a) {
    return i = id(i), !r && a ? "[" + i + "]" : i;
  }).join(r ? "." : "") : e;
}
function N0(t) {
  return k.isArray(t) && !t.some(Ds);
}
const M0 = k.toFlatObject(k, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function ka(t, e, r) {
  if (!k.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = k.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(S, v) {
    return !k.isUndefined(v[S]);
  });
  const n = r.metaTokens, i = r.visitor || f, a = r.dots, o = r.indexes, u = (r.Blob || typeof Blob < "u" && Blob) && k.isSpecCompliantForm(e);
  if (!k.isFunction(i))
    throw new TypeError("visitor must be a function");
  function c(g) {
    if (g === null)
      return "";
    if (k.isDate(g))
      return g.toISOString();
    if (!u && k.isBlob(g))
      throw new te("Blob is not supported. Use a Buffer instead.");
    return k.isArrayBuffer(g) || k.isTypedArray(g) ? u && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function f(g, S, v) {
    let C = g;
    if (g && !v && typeof g == "object") {
      if (k.endsWith(S, "{}"))
        S = n ? S : S.slice(0, -2), g = JSON.stringify(g);
      else if (k.isArray(g) && N0(g) || (k.isFileList(g) || k.endsWith(S, "[]")) && (C = k.toArray(g)))
        return S = id(S), C.forEach(function(E, _) {
          !(k.isUndefined(E) || E === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Uu([S], _, a) : o === null ? S : S + "[]",
            c(E)
          );
        }), !1;
    }
    return Ds(g) ? !0 : (e.append(Uu(v, S, a), c(g)), !1);
  }
  const p = [], m = Object.assign(M0, {
    defaultVisitor: f,
    convertValue: c,
    isVisitable: Ds
  });
  function O(g, S) {
    if (!k.isUndefined(g)) {
      if (p.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + S.join("."));
      p.push(g), k.forEach(g, function(C, P) {
        (!(k.isUndefined(C) || C === null) && i.call(
          e,
          C,
          k.isString(P) ? P.trim() : P,
          S,
          m
        )) === !0 && O(C, S ? S.concat(P) : [P]);
      }), p.pop();
    }
  }
  if (!k.isObject(t))
    throw new TypeError("data must be an object");
  return O(t), e;
}
function Vu(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(n) {
    return e[n];
  });
}
function Tl(t, e) {
  this._pairs = [], t && ka(t, this, e);
}
const ad = Tl.prototype;
ad.append = function(e, r) {
  this._pairs.push([e, r]);
};
ad.toString = function(e) {
  const r = e ? function(n) {
    return e.call(this, n, Vu);
  } : Vu;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function B0(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function od(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || B0;
  k.isFunction(r) && (r = {
    serialize: r
  });
  const i = r && r.serialize;
  let a;
  if (i ? a = i(e, r) : a = k.isURLSearchParams(e) ? e.toString() : new Tl(e, r).toString(n), a) {
    const o = t.indexOf("#");
    o !== -1 && (t = t.slice(0, o)), t += (t.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return t;
}
class j0 {
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
  use(e, r, n) {
    return this.handlers.push({
      fulfilled: e,
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
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
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
  forEach(e) {
    k.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
const qu = j0, sd = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, z0 = typeof URLSearchParams < "u" ? URLSearchParams : Tl, U0 = typeof FormData < "u" ? FormData : null, V0 = typeof Blob < "u" ? Blob : null, q0 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: z0,
    FormData: U0,
    Blob: V0
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, $l = typeof window < "u" && typeof document < "u", Rs = typeof navigator == "object" && navigator || void 0, W0 = $l && (!Rs || ["ReactNative", "NativeScript", "NS"].indexOf(Rs.product) < 0), H0 = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), G0 = $l && window.location.href || "http://localhost", K0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: $l,
  hasStandardBrowserEnv: W0,
  hasStandardBrowserWebWorkerEnv: H0,
  navigator: Rs,
  origin: G0
}, Symbol.toStringTag, { value: "Module" })), $e = {
  ...K0,
  ...q0
};
function Y0(t, e) {
  return ka(t, new $e.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, i, a) {
      return $e.isNode && k.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function J0(t) {
  return k.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function X0(t) {
  const e = {}, r = Object.keys(t);
  let n;
  const i = r.length;
  let a;
  for (n = 0; n < i; n++)
    a = r[n], e[a] = t[a];
  return e;
}
function ld(t) {
  function e(r, n, i, a) {
    let o = r[a++];
    if (o === "__proto__")
      return !0;
    const s = Number.isFinite(+o), u = a >= r.length;
    return o = !o && k.isArray(i) ? i.length : o, u ? (k.hasOwnProp(i, o) ? i[o] = [i[o], n] : i[o] = n, !s) : ((!i[o] || !k.isObject(i[o])) && (i[o] = []), e(r, n, i[o], a) && k.isArray(i[o]) && (i[o] = X0(i[o])), !s);
  }
  if (k.isFormData(t) && k.isFunction(t.entries)) {
    const r = {};
    return k.forEachEntry(t, (n, i) => {
      e(J0(n), i, r, 0);
    }), r;
  }
  return null;
}
function Q0(t, e, r) {
  if (k.isString(t))
    try {
      return (e || JSON.parse)(t), k.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(t);
}
const Il = {
  transitional: sd,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, a = k.isObject(e);
    if (a && k.isHTMLForm(e) && (e = new FormData(e)), k.isFormData(e))
      return i ? JSON.stringify(ld(e)) : e;
    if (k.isArrayBuffer(e) || k.isBuffer(e) || k.isStream(e) || k.isFile(e) || k.isBlob(e) || k.isReadableStream(e))
      return e;
    if (k.isArrayBufferView(e))
      return e.buffer;
    if (k.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let s;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Y0(e, this.formSerializer).toString();
      if ((s = k.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return ka(
          s ? { "files[]": e } : e,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return a || i ? (r.setContentType("application/json", !1), Q0(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || Il.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
    if (k.isResponse(e) || k.isReadableStream(e))
      return e;
    if (e && k.isString(e) && (n && !this.responseType || i)) {
      const o = !(r && r.silentJSONParsing) && i;
      try {
        return JSON.parse(e);
      } catch (s) {
        if (o)
          throw s.name === "SyntaxError" ? te.from(s, te.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    }
    return e;
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
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
k.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Il.headers[t] = {};
});
const Dl = Il, Z0 = k.toObjectSet([
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
]), eb = (t) => {
  const e = {};
  let r, n, i;
  return t && t.split(`
`).forEach(function(o) {
    i = o.indexOf(":"), r = o.substring(0, i).trim().toLowerCase(), n = o.substring(i + 1).trim(), !(!r || e[r] && Z0[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, Wu = Symbol("internals");
function wn(t) {
  return t && String(t).trim().toLowerCase();
}
function Hi(t) {
  return t === !1 || t == null ? t : k.isArray(t) ? t.map(Hi) : String(t);
}
function tb(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
const rb = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Mo(t, e, r, n, i) {
  if (k.isFunction(n))
    return n.call(this, e, r);
  if (i && (e = r), !!k.isString(e)) {
    if (k.isString(n))
      return e.indexOf(n) !== -1;
    if (k.isRegExp(n))
      return n.test(e);
  }
}
function nb(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function ib(t, e) {
  const r = k.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(t, n + r, {
      value: function(i, a, o) {
        return this[n].call(this, e, i, a, o);
      },
      configurable: !0
    });
  });
}
class Pa {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, n) {
    const i = this;
    function a(s, u, c) {
      const f = wn(u);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const p = k.findKey(i, f);
      (!p || i[p] === void 0 || c === !0 || c === void 0 && i[p] !== !1) && (i[p || u] = Hi(s));
    }
    const o = (s, u) => k.forEach(s, (c, f) => a(c, f, u));
    if (k.isPlainObject(e) || e instanceof this.constructor)
      o(e, r);
    else if (k.isString(e) && (e = e.trim()) && !rb(e))
      o(eb(e), r);
    else if (k.isHeaders(e))
      for (const [s, u] of e.entries())
        a(u, s, n);
    else
      e != null && a(r, e, n);
    return this;
  }
  get(e, r) {
    if (e = wn(e), e) {
      const n = k.findKey(this, e);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return tb(i);
        if (k.isFunction(r))
          return r.call(this, i, n);
        if (k.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = wn(e), e) {
      const n = k.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!r || Mo(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let i = !1;
    function a(o) {
      if (o = wn(o), o) {
        const s = k.findKey(n, o);
        s && (!r || Mo(n, n[s], s, r)) && (delete n[s], i = !0);
      }
    }
    return k.isArray(e) ? e.forEach(a) : a(e), i;
  }
  clear(e) {
    const r = Object.keys(this);
    let n = r.length, i = !1;
    for (; n--; ) {
      const a = r[n];
      (!e || Mo(this, this[a], a, e, !0)) && (delete this[a], i = !0);
    }
    return i;
  }
  normalize(e) {
    const r = this, n = {};
    return k.forEach(this, (i, a) => {
      const o = k.findKey(n, a);
      if (o) {
        r[o] = Hi(i), delete r[a];
        return;
      }
      const s = e ? nb(a) : String(a).trim();
      s !== a && delete r[a], r[s] = Hi(i), n[s] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const r = /* @__PURE__ */ Object.create(null);
    return k.forEach(this, (n, i) => {
      n != null && n !== !1 && (r[i] = e && k.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, r]) => e + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...r) {
    const n = new this(e);
    return r.forEach((i) => n.set(i)), n;
  }
  static accessor(e) {
    const n = (this[Wu] = this[Wu] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function a(o) {
      const s = wn(o);
      n[s] || (ib(i, o), n[s] = !0);
    }
    return k.isArray(e) ? e.forEach(a) : a(e), this;
  }
}
Pa.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
k.reduceDescriptors(Pa.prototype, ({ value: t }, e) => {
  let r = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(n) {
      this[r] = n;
    }
  };
});
k.freezeMethods(Pa);
const nt = Pa;
function Bo(t, e) {
  const r = this || Dl, n = e || r, i = nt.from(n.headers);
  let a = n.data;
  return k.forEach(t, function(s) {
    a = s.call(r, a, i.normalize(), e ? e.status : void 0);
  }), i.normalize(), a;
}
function ud(t) {
  return !!(t && t.__CANCEL__);
}
function Qr(t, e, r) {
  te.call(this, t ?? "canceled", te.ERR_CANCELED, e, r), this.name = "CanceledError";
}
k.inherits(Qr, te, {
  __CANCEL__: !0
});
function cd(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new te(
    "Request failed with status code " + r.status,
    [te.ERR_BAD_REQUEST, te.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function ab(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function ob(t, e) {
  t = t || 10;
  const r = new Array(t), n = new Array(t);
  let i = 0, a = 0, o;
  return e = e !== void 0 ? e : 1e3, function(u) {
    const c = Date.now(), f = n[a];
    o || (o = c), r[i] = u, n[i] = c;
    let p = a, m = 0;
    for (; p !== i; )
      m += r[p++], p = p % t;
    if (i = (i + 1) % t, i === a && (a = (a + 1) % t), c - o < e)
      return;
    const O = f && c - f;
    return O ? Math.round(m * 1e3 / O) : void 0;
  };
}
function sb(t, e) {
  let r = 0, n = 1e3 / e, i, a;
  const o = (c, f = Date.now()) => {
    r = f, i = null, a && (clearTimeout(a), a = null), t.apply(null, c);
  };
  return [(...c) => {
    const f = Date.now(), p = f - r;
    p >= n ? o(c, f) : (i = c, a || (a = setTimeout(() => {
      a = null, o(i);
    }, n - p)));
  }, () => i && o(i)];
}
const ia = (t, e, r = 3) => {
  let n = 0;
  const i = ob(50, 250);
  return sb((a) => {
    const o = a.loaded, s = a.lengthComputable ? a.total : void 0, u = o - n, c = i(u), f = o <= s;
    n = o;
    const p = {
      loaded: o,
      total: s,
      progress: s ? o / s : void 0,
      bytes: u,
      rate: c || void 0,
      estimated: c && s && f ? (s - o) / c : void 0,
      event: a,
      lengthComputable: s != null,
      [e ? "download" : "upload"]: !0
    };
    t(p);
  }, r);
}, Hu = (t, e) => {
  const r = t != null;
  return [(n) => e[0]({
    lengthComputable: r,
    total: t,
    loaded: n
  }), e[1]];
}, Gu = (t) => (...e) => k.asap(() => t(...e)), lb = $e.hasStandardBrowserEnv ? ((t, e) => (r) => (r = new URL(r, $e.origin), t.protocol === r.protocol && t.host === r.host && (e || t.port === r.port)))(
  new URL($e.origin),
  $e.navigator && /(msie|trident)/i.test($e.navigator.userAgent)
) : () => !0, ub = $e.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, r, n, i, a) {
      const o = [t + "=" + encodeURIComponent(e)];
      k.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()), k.isString(n) && o.push("path=" + n), k.isString(i) && o.push("domain=" + i), a === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(t) {
      const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return e ? decodeURIComponent(e[3]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5);
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
function cb(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function fb(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function fd(t, e) {
  return t && !cb(e) ? fb(t, e) : e;
}
const Ku = (t) => t instanceof nt ? { ...t } : t;
function pr(t, e) {
  e = e || {};
  const r = {};
  function n(c, f, p, m) {
    return k.isPlainObject(c) && k.isPlainObject(f) ? k.merge.call({ caseless: m }, c, f) : k.isPlainObject(f) ? k.merge({}, f) : k.isArray(f) ? f.slice() : f;
  }
  function i(c, f, p, m) {
    if (k.isUndefined(f)) {
      if (!k.isUndefined(c))
        return n(void 0, c, p, m);
    } else
      return n(c, f, p, m);
  }
  function a(c, f) {
    if (!k.isUndefined(f))
      return n(void 0, f);
  }
  function o(c, f) {
    if (k.isUndefined(f)) {
      if (!k.isUndefined(c))
        return n(void 0, c);
    } else
      return n(void 0, f);
  }
  function s(c, f, p) {
    if (p in e)
      return n(c, f);
    if (p in t)
      return n(void 0, c);
  }
  const u = {
    url: a,
    method: a,
    data: a,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: s,
    headers: (c, f, p) => i(Ku(c), Ku(f), p, !0)
  };
  return k.forEach(Object.keys(Object.assign({}, t, e)), function(f) {
    const p = u[f] || i, m = p(t[f], e[f], f);
    k.isUndefined(m) && p !== s || (r[f] = m);
  }), r;
}
const dd = (t) => {
  const e = pr({}, t);
  let { data: r, withXSRFToken: n, xsrfHeaderName: i, xsrfCookieName: a, headers: o, auth: s } = e;
  e.headers = o = nt.from(o), e.url = od(fd(e.baseURL, e.url), t.params, t.paramsSerializer), s && o.set(
    "Authorization",
    "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))
  );
  let u;
  if (k.isFormData(r)) {
    if ($e.hasStandardBrowserEnv || $e.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((u = o.getContentType()) !== !1) {
      const [c, ...f] = u ? u.split(";").map((p) => p.trim()).filter(Boolean) : [];
      o.setContentType([c || "multipart/form-data", ...f].join("; "));
    }
  }
  if ($e.hasStandardBrowserEnv && (n && k.isFunction(n) && (n = n(e)), n || n !== !1 && lb(e.url))) {
    const c = i && a && ub.read(a);
    c && o.set(i, c);
  }
  return e;
}, db = typeof XMLHttpRequest < "u", pb = db && function(t) {
  return new Promise(function(r, n) {
    const i = dd(t);
    let a = i.data;
    const o = nt.from(i.headers).normalize();
    let { responseType: s, onUploadProgress: u, onDownloadProgress: c } = i, f, p, m, O, g;
    function S() {
      O && O(), g && g(), i.cancelToken && i.cancelToken.unsubscribe(f), i.signal && i.signal.removeEventListener("abort", f);
    }
    let v = new XMLHttpRequest();
    v.open(i.method.toUpperCase(), i.url, !0), v.timeout = i.timeout;
    function C() {
      if (!v)
        return;
      const E = nt.from(
        "getAllResponseHeaders" in v && v.getAllResponseHeaders()
      ), I = {
        data: !s || s === "text" || s === "json" ? v.responseText : v.response,
        status: v.status,
        statusText: v.statusText,
        headers: E,
        config: t,
        request: v
      };
      cd(function(z) {
        r(z), S();
      }, function(z) {
        n(z), S();
      }, I), v = null;
    }
    "onloadend" in v ? v.onloadend = C : v.onreadystatechange = function() {
      !v || v.readyState !== 4 || v.status === 0 && !(v.responseURL && v.responseURL.indexOf("file:") === 0) || setTimeout(C);
    }, v.onabort = function() {
      v && (n(new te("Request aborted", te.ECONNABORTED, t, v)), v = null);
    }, v.onerror = function() {
      n(new te("Network Error", te.ERR_NETWORK, t, v)), v = null;
    }, v.ontimeout = function() {
      let _ = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const I = i.transitional || sd;
      i.timeoutErrorMessage && (_ = i.timeoutErrorMessage), n(new te(
        _,
        I.clarifyTimeoutError ? te.ETIMEDOUT : te.ECONNABORTED,
        t,
        v
      )), v = null;
    }, a === void 0 && o.setContentType(null), "setRequestHeader" in v && k.forEach(o.toJSON(), function(_, I) {
      v.setRequestHeader(I, _);
    }), k.isUndefined(i.withCredentials) || (v.withCredentials = !!i.withCredentials), s && s !== "json" && (v.responseType = i.responseType), c && ([m, g] = ia(c, !0), v.addEventListener("progress", m)), u && v.upload && ([p, O] = ia(u), v.upload.addEventListener("progress", p), v.upload.addEventListener("loadend", O)), (i.cancelToken || i.signal) && (f = (E) => {
      v && (n(!E || E.type ? new Qr(null, t, v) : E), v.abort(), v = null);
    }, i.cancelToken && i.cancelToken.subscribe(f), i.signal && (i.signal.aborted ? f() : i.signal.addEventListener("abort", f)));
    const P = ab(i.url);
    if (P && $e.protocols.indexOf(P) === -1) {
      n(new te("Unsupported protocol " + P + ":", te.ERR_BAD_REQUEST, t));
      return;
    }
    v.send(a || null);
  });
}, hb = (t, e) => {
  const { length: r } = t = t ? t.filter(Boolean) : [];
  if (e || r) {
    let n = new AbortController(), i;
    const a = function(c) {
      if (!i) {
        i = !0, s();
        const f = c instanceof Error ? c : this.reason;
        n.abort(f instanceof te ? f : new Qr(f instanceof Error ? f.message : f));
      }
    };
    let o = e && setTimeout(() => {
      o = null, a(new te(`timeout ${e} of ms exceeded`, te.ETIMEDOUT));
    }, e);
    const s = () => {
      t && (o && clearTimeout(o), o = null, t.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(a) : c.removeEventListener("abort", a);
      }), t = null);
    };
    t.forEach((c) => c.addEventListener("abort", a));
    const { signal: u } = n;
    return u.unsubscribe = () => k.asap(s), u;
  }
}, mb = hb, gb = function* (t, e) {
  let r = t.byteLength;
  if (!e || r < e) {
    yield t;
    return;
  }
  let n = 0, i;
  for (; n < r; )
    i = n + e, yield t.slice(n, i), n = i;
}, yb = async function* (t, e) {
  for await (const r of bb(t))
    yield* gb(r, e);
}, bb = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const e = t.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await e.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await e.cancel();
  }
}, Yu = (t, e, r, n) => {
  const i = yb(t, e);
  let a = 0, o, s = (u) => {
    o || (o = !0, n && n(u));
  };
  return new ReadableStream({
    async pull(u) {
      try {
        const { done: c, value: f } = await i.next();
        if (c) {
          s(), u.close();
          return;
        }
        let p = f.byteLength;
        if (r) {
          let m = a += p;
          r(m);
        }
        u.enqueue(new Uint8Array(f));
      } catch (c) {
        throw s(c), c;
      }
    },
    cancel(u) {
      return s(u), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ta = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", pd = Ta && typeof ReadableStream == "function", vb = Ta && (typeof TextEncoder == "function" ? ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), hd = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, wb = pd && hd(() => {
  let t = !1;
  const e = new Request($e.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), Ju = 64 * 1024, Fs = pd && hd(() => k.isReadableStream(new Response("").body)), aa = {
  stream: Fs && ((t) => t.body)
};
Ta && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !aa[e] && (aa[e] = k.isFunction(t[e]) ? (r) => r[e]() : (r, n) => {
      throw new te(`Response type '${e}' is not supported`, te.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const xb = async (t) => {
  if (t == null)
    return 0;
  if (k.isBlob(t))
    return t.size;
  if (k.isSpecCompliantForm(t))
    return (await new Request($e.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (k.isArrayBufferView(t) || k.isArrayBuffer(t))
    return t.byteLength;
  if (k.isURLSearchParams(t) && (t = t + ""), k.isString(t))
    return (await vb(t)).byteLength;
}, Sb = async (t, e) => {
  const r = k.toFiniteNumber(t.getContentLength());
  return r ?? xb(e);
}, Ob = Ta && (async (t) => {
  let {
    url: e,
    method: r,
    data: n,
    signal: i,
    cancelToken: a,
    timeout: o,
    onDownloadProgress: s,
    onUploadProgress: u,
    responseType: c,
    headers: f,
    withCredentials: p = "same-origin",
    fetchOptions: m
  } = dd(t);
  c = c ? (c + "").toLowerCase() : "text";
  let O = mb([i, a && a.toAbortSignal()], o), g;
  const S = O && O.unsubscribe && (() => {
    O.unsubscribe();
  });
  let v;
  try {
    if (u && wb && r !== "get" && r !== "head" && (v = await Sb(f, n)) !== 0) {
      let I = new Request(e, {
        method: "POST",
        body: n,
        duplex: "half"
      }), j;
      if (k.isFormData(n) && (j = I.headers.get("content-type")) && f.setContentType(j), I.body) {
        const [z, B] = Hu(
          v,
          ia(Gu(u))
        );
        n = Yu(I.body, Ju, z, B);
      }
    }
    k.isString(p) || (p = p ? "include" : "omit");
    const C = "credentials" in Request.prototype;
    g = new Request(e, {
      ...m,
      signal: O,
      method: r.toUpperCase(),
      headers: f.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: C ? p : void 0
    });
    let P = await fetch(g);
    const E = Fs && (c === "stream" || c === "response");
    if (Fs && (s || E && S)) {
      const I = {};
      ["status", "statusText", "headers"].forEach((N) => {
        I[N] = P[N];
      });
      const j = k.toFiniteNumber(P.headers.get("content-length")), [z, B] = s && Hu(
        j,
        ia(Gu(s), !0)
      ) || [];
      P = new Response(
        Yu(P.body, Ju, z, () => {
          B && B(), S && S();
        }),
        I
      );
    }
    c = c || "text";
    let _ = await aa[k.findKey(aa, c) || "text"](P, t);
    return !E && S && S(), await new Promise((I, j) => {
      cd(I, j, {
        data: _,
        headers: nt.from(P.headers),
        status: P.status,
        statusText: P.statusText,
        config: t,
        request: g
      });
    });
  } catch (C) {
    throw S && S(), C && C.name === "TypeError" && /fetch/i.test(C.message) ? Object.assign(
      new te("Network Error", te.ERR_NETWORK, t, g),
      {
        cause: C.cause || C
      }
    ) : te.from(C, C && C.code, t, g);
  }
}), Ls = {
  http: L0,
  xhr: pb,
  fetch: Ob
};
k.forEach(Ls, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Xu = (t) => `- ${t}`, Eb = (t) => k.isFunction(t) || t === null || t === !1, md = {
  getAdapter: (t) => {
    t = k.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    const i = {};
    for (let a = 0; a < e; a++) {
      r = t[a];
      let o;
      if (n = r, !Eb(r) && (n = Ls[(o = String(r)).toLowerCase()], n === void 0))
        throw new te(`Unknown adapter '${o}'`);
      if (n)
        break;
      i[o || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(i).map(
        ([s, u]) => `adapter ${s} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = e ? a.length > 1 ? `since :
` + a.map(Xu).join(`
`) : " " + Xu(a[0]) : "as no adapter specified";
      throw new te(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Ls
};
function jo(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Qr(null, t);
}
function Qu(t) {
  return jo(t), t.headers = nt.from(t.headers), t.data = Bo.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), md.getAdapter(t.adapter || Dl.adapter)(t).then(function(n) {
    return jo(t), n.data = Bo.call(
      t,
      t.transformResponse,
      n
    ), n.headers = nt.from(n.headers), n;
  }, function(n) {
    return ud(n) || (jo(t), n && n.response && (n.response.data = Bo.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = nt.from(n.response.headers))), Promise.reject(n);
  });
}
const gd = "1.7.8", $a = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  $a[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Zu = {};
$a.transitional = function(e, r, n) {
  function i(a, o) {
    return "[Axios v" + gd + "] Transitional option '" + a + "'" + o + (n ? ". " + n : "");
  }
  return (a, o, s) => {
    if (e === !1)
      throw new te(
        i(o, " has been removed" + (r ? " in " + r : "")),
        te.ERR_DEPRECATED
      );
    return r && !Zu[o] && (Zu[o] = !0, console.warn(
      i(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(a, o, s) : !0;
  };
};
$a.spelling = function(e) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
};
function Ab(t, e, r) {
  if (typeof t != "object")
    throw new te("options must be an object", te.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let i = n.length;
  for (; i-- > 0; ) {
    const a = n[i], o = e[a];
    if (o) {
      const s = t[a], u = s === void 0 || o(s, a, t);
      if (u !== !0)
        throw new te("option " + a + " must be " + u, te.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new te("Unknown option " + a, te.ERR_BAD_OPTION);
  }
}
const Gi = {
  assertOptions: Ab,
  validators: $a
}, ct = Gi.validators;
class oa {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new qu(),
      response: new qu()
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
  async request(e, r) {
    try {
      return await this._request(e, r);
    } catch (n) {
      if (n instanceof Error) {
        let i = {};
        Error.captureStackTrace ? Error.captureStackTrace(i) : i = new Error();
        const a = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? a && !String(n.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + a) : n.stack = a;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(e, r) {
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = pr(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: a } = r;
    n !== void 0 && Gi.assertOptions(n, {
      silentJSONParsing: ct.transitional(ct.boolean),
      forcedJSONParsing: ct.transitional(ct.boolean),
      clarifyTimeoutError: ct.transitional(ct.boolean)
    }, !1), i != null && (k.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : Gi.assertOptions(i, {
      encode: ct.function,
      serialize: ct.function
    }, !0)), Gi.assertOptions(r, {
      baseUrl: ct.spelling("baseURL"),
      withXsrfToken: ct.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let o = a && k.merge(
      a.common,
      a[r.method]
    );
    a && k.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete a[g];
      }
    ), r.headers = nt.concat(o, a);
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function(S) {
      typeof S.runWhen == "function" && S.runWhen(r) === !1 || (u = u && S.synchronous, s.unshift(S.fulfilled, S.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(S) {
      c.push(S.fulfilled, S.rejected);
    });
    let f, p = 0, m;
    if (!u) {
      const g = [Qu.bind(this), void 0];
      for (g.unshift.apply(g, s), g.push.apply(g, c), m = g.length, f = Promise.resolve(r); p < m; )
        f = f.then(g[p++], g[p++]);
      return f;
    }
    m = s.length;
    let O = r;
    for (p = 0; p < m; ) {
      const g = s[p++], S = s[p++];
      try {
        O = g(O);
      } catch (v) {
        S.call(this, v);
        break;
      }
    }
    try {
      f = Qu.call(this, O);
    } catch (g) {
      return Promise.reject(g);
    }
    for (p = 0, m = c.length; p < m; )
      f = f.then(c[p++], c[p++]);
    return f;
  }
  getUri(e) {
    e = pr(this.defaults, e);
    const r = fd(e.baseURL, e.url);
    return od(r, e.params, e.paramsSerializer);
  }
}
k.forEach(["delete", "get", "head", "options"], function(e) {
  oa.prototype[e] = function(r, n) {
    return this.request(pr(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
k.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(a, o, s) {
      return this.request(pr(s || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: o
      }));
    };
  }
  oa.prototype[e] = r(), oa.prototype[e + "Form"] = r(!0);
});
const Ki = oa;
class Rl {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(a) {
      r = a;
    });
    const n = this;
    this.promise.then((i) => {
      if (!n._listeners)
        return;
      let a = n._listeners.length;
      for (; a-- > 0; )
        n._listeners[a](i);
      n._listeners = null;
    }), this.promise.then = (i) => {
      let a;
      const o = new Promise((s) => {
        n.subscribe(s), a = s;
      }).then(i);
      return o.cancel = function() {
        n.unsubscribe(a);
      }, o;
    }, e(function(a, o, s) {
      n.reason || (n.reason = new Qr(a, o, s), r(n.reason));
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
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(e);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), r = (n) => {
      e.abort(n);
    };
    return this.subscribe(r), e.signal.unsubscribe = () => this.unsubscribe(r), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new Rl(function(i) {
        e = i;
      }),
      cancel: e
    };
  }
}
const Cb = Rl;
function _b(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function kb(t) {
  return k.isObject(t) && t.isAxiosError === !0;
}
const Ns = {
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
Object.entries(Ns).forEach(([t, e]) => {
  Ns[e] = t;
});
const Pb = Ns;
function yd(t) {
  const e = new Ki(t), r = Kf(Ki.prototype.request, e);
  return k.extend(r, Ki.prototype, e, { allOwnKeys: !0 }), k.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(i) {
    return yd(pr(t, i));
  }, r;
}
const Se = yd(Dl);
Se.Axios = Ki;
Se.CanceledError = Qr;
Se.CancelToken = Cb;
Se.isCancel = ud;
Se.VERSION = gd;
Se.toFormData = ka;
Se.AxiosError = te;
Se.Cancel = Se.CanceledError;
Se.all = function(e) {
  return Promise.all(e);
};
Se.spread = _b;
Se.isAxiosError = kb;
Se.mergeConfig = pr;
Se.AxiosHeaders = nt;
Se.formToJSON = (t) => ld(k.isHTMLForm(t) ? new FormData(t) : t);
Se.getAdapter = md.getAdapter;
Se.HttpStatusCode = Pb;
Se.default = Se;
const ec = Se;
var Ke = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ia(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Tb(t) {
  if (t.__esModule)
    return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), r;
}
var $b = function(e) {
  return Ib(e) && !Db(e);
};
function Ib(t) {
  return !!t && typeof t == "object";
}
function Db(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || Lb(t);
}
var Rb = typeof Symbol == "function" && Symbol.for, Fb = Rb ? Symbol.for("react.element") : 60103;
function Lb(t) {
  return t.$$typeof === Fb;
}
function Nb(t) {
  return Array.isArray(t) ? [] : {};
}
function Un(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? Ur(Nb(t), t, e) : t;
}
function Mb(t, e, r) {
  return t.concat(e).map(function(n) {
    return Un(n, r);
  });
}
function Bb(t, e) {
  if (!e.customMerge)
    return Ur;
  var r = e.customMerge(t);
  return typeof r == "function" ? r : Ur;
}
function jb(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function tc(t) {
  return Object.keys(t).concat(jb(t));
}
function bd(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function zb(t, e) {
  return bd(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function Ub(t, e, r) {
  var n = {};
  return r.isMergeableObject(t) && tc(t).forEach(function(i) {
    n[i] = Un(t[i], r);
  }), tc(e).forEach(function(i) {
    zb(t, i) || (bd(t, i) && r.isMergeableObject(e[i]) ? n[i] = Bb(i, r)(t[i], e[i], r) : n[i] = Un(e[i], r));
  }), n;
}
function Ur(t, e, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || Mb, r.isMergeableObject = r.isMergeableObject || $b, r.cloneUnlessOtherwiseSpecified = Un;
  var n = Array.isArray(e), i = Array.isArray(t), a = n === i;
  return a ? n ? r.arrayMerge(t, e, r) : Ub(t, e, r) : Un(e, r);
}
Ur.all = function(e, r) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(n, i) {
    return Ur(n, i, r);
  }, {});
};
var Vb = Ur, qb = Vb;
const Wb = /* @__PURE__ */ Ia(qb);
var Hb = Error, Gb = EvalError, Kb = RangeError, Yb = ReferenceError, vd = SyntaxError, ei = TypeError, Jb = URIError, Xb = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var e = {}, r = Symbol("test"), n = Object(r);
  if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
    return !1;
  var i = 42;
  e[r] = i;
  for (var a in e)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
    return !1;
  var o = Object.getOwnPropertySymbols(e);
  if (o.length !== 1 || o[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var s = (
      /** @type {PropertyDescriptor} */
      Object.getOwnPropertyDescriptor(e, r)
    );
    if (s.value !== i || s.enumerable !== !0)
      return !1;
  }
  return !0;
}, rc = typeof Symbol < "u" && Symbol, Qb = Xb, Zb = function() {
  return typeof rc != "function" || typeof Symbol != "function" || typeof rc("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Qb();
}, zo = {
  __proto__: null,
  foo: {}
}, e1 = { __proto__: zo }.foo === zo.foo && !(zo instanceof Object), t1 = function() {
  return e1;
}, r1 = "Function.prototype.bind called on incompatible ", n1 = Object.prototype.toString, i1 = Math.max, a1 = "[object Function]", nc = function(e, r) {
  for (var n = [], i = 0; i < e.length; i += 1)
    n[i] = e[i];
  for (var a = 0; a < r.length; a += 1)
    n[a + e.length] = r[a];
  return n;
}, o1 = function(e, r) {
  for (var n = [], i = r || 0, a = 0; i < e.length; i += 1, a += 1)
    n[a] = e[i];
  return n;
}, s1 = function(t, e) {
  for (var r = "", n = 0; n < t.length; n += 1)
    r += t[n], n + 1 < t.length && (r += e);
  return r;
}, l1 = function(e) {
  var r = this;
  if (typeof r != "function" || n1.apply(r) !== a1)
    throw new TypeError(r1 + r);
  for (var n = o1(arguments, 1), i, a = function() {
    if (this instanceof i) {
      var f = r.apply(
        this,
        nc(n, arguments)
      );
      return Object(f) === f ? f : this;
    }
    return r.apply(
      e,
      nc(n, arguments)
    );
  }, o = i1(0, r.length - n.length), s = [], u = 0; u < o; u++)
    s[u] = "$" + u;
  if (i = Function("binder", "return function (" + s1(s, ",") + "){ return binder.apply(this,arguments); }")(a), r.prototype) {
    var c = function() {
    };
    c.prototype = r.prototype, i.prototype = new c(), c.prototype = null;
  }
  return i;
}, u1 = l1, Fl = Function.prototype.bind || u1, c1 = Function.prototype.call, f1 = Object.prototype.hasOwnProperty, d1 = Fl, p1 = d1.call(c1, f1), ne, h1 = Hb, m1 = Gb, g1 = Kb, y1 = Yb, Vr = vd, Br = ei, b1 = Jb, wd = Function, Uo = function(t) {
  try {
    return wd('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, ur = Object.getOwnPropertyDescriptor;
if (ur)
  try {
    ur({}, "");
  } catch {
    ur = null;
  }
var Vo = function() {
  throw new Br();
}, v1 = ur ? function() {
  try {
    return arguments.callee, Vo;
  } catch {
    try {
      return ur(arguments, "callee").get;
    } catch {
      return Vo;
    }
  }
}() : Vo, $r = Zb(), w1 = t1(), Ae = Object.getPrototypeOf || (w1 ? function(t) {
  return t.__proto__;
} : null), Rr = {}, x1 = typeof Uint8Array > "u" || !Ae ? ne : Ae(Uint8Array), cr = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? ne : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? ne : ArrayBuffer,
  "%ArrayIteratorPrototype%": $r && Ae ? Ae([][Symbol.iterator]()) : ne,
  "%AsyncFromSyncIteratorPrototype%": ne,
  "%AsyncFunction%": Rr,
  "%AsyncGenerator%": Rr,
  "%AsyncGeneratorFunction%": Rr,
  "%AsyncIteratorPrototype%": Rr,
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
  "%Error%": h1,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": m1,
  "%Float32Array%": typeof Float32Array > "u" ? ne : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? ne : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? ne : FinalizationRegistry,
  "%Function%": wd,
  "%GeneratorFunction%": Rr,
  "%Int8Array%": typeof Int8Array > "u" ? ne : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? ne : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? ne : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": $r && Ae ? Ae(Ae([][Symbol.iterator]())) : ne,
  "%JSON%": typeof JSON == "object" ? JSON : ne,
  "%Map%": typeof Map > "u" ? ne : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !$r || !Ae ? ne : Ae((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? ne : Promise,
  "%Proxy%": typeof Proxy > "u" ? ne : Proxy,
  "%RangeError%": g1,
  "%ReferenceError%": y1,
  "%Reflect%": typeof Reflect > "u" ? ne : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? ne : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !$r || !Ae ? ne : Ae((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? ne : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": $r && Ae ? Ae(""[Symbol.iterator]()) : ne,
  "%Symbol%": $r ? Symbol : ne,
  "%SyntaxError%": Vr,
  "%ThrowTypeError%": v1,
  "%TypedArray%": x1,
  "%TypeError%": Br,
  "%Uint8Array%": typeof Uint8Array > "u" ? ne : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? ne : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? ne : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? ne : Uint32Array,
  "%URIError%": b1,
  "%WeakMap%": typeof WeakMap > "u" ? ne : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? ne : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? ne : WeakSet
};
if (Ae)
  try {
    null.error;
  } catch (t) {
    var S1 = Ae(Ae(t));
    cr["%Error.prototype%"] = S1;
  }
var O1 = function t(e) {
  var r;
  if (e === "%AsyncFunction%")
    r = Uo("async function () {}");
  else if (e === "%GeneratorFunction%")
    r = Uo("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    r = Uo("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var n = t("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var i = t("%AsyncGenerator%");
    i && Ae && (r = Ae(i.prototype));
  }
  return cr[e] = r, r;
}, ic = {
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
}, ti = Fl, sa = p1, E1 = ti.call(Function.call, Array.prototype.concat), A1 = ti.call(Function.apply, Array.prototype.splice), ac = ti.call(Function.call, String.prototype.replace), la = ti.call(Function.call, String.prototype.slice), C1 = ti.call(Function.call, RegExp.prototype.exec), _1 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, k1 = /\\(\\)?/g, P1 = function(e) {
  var r = la(e, 0, 1), n = la(e, -1);
  if (r === "%" && n !== "%")
    throw new Vr("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new Vr("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return ac(e, _1, function(a, o, s, u) {
    i[i.length] = s ? ac(u, k1, "$1") : o || a;
  }), i;
}, T1 = function(e, r) {
  var n = e, i;
  if (sa(ic, n) && (i = ic[n], n = "%" + i[0] + "%"), sa(cr, n)) {
    var a = cr[n];
    if (a === Rr && (a = O1(n)), typeof a > "u" && !r)
      throw new Br("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: n,
      value: a
    };
  }
  throw new Vr("intrinsic " + e + " does not exist!");
}, Zr = function(e, r) {
  if (typeof e != "string" || e.length === 0)
    throw new Br("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new Br('"allowMissing" argument must be a boolean');
  if (C1(/^%?[^%]*%?$/, e) === null)
    throw new Vr("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = P1(e), i = n.length > 0 ? n[0] : "", a = T1("%" + i + "%", r), o = a.name, s = a.value, u = !1, c = a.alias;
  c && (i = c[0], A1(n, E1([0, 1], c)));
  for (var f = 1, p = !0; f < n.length; f += 1) {
    var m = n[f], O = la(m, 0, 1), g = la(m, -1);
    if ((O === '"' || O === "'" || O === "`" || g === '"' || g === "'" || g === "`") && O !== g)
      throw new Vr("property names with quotes must have matching quotes");
    if ((m === "constructor" || !p) && (u = !0), i += "." + m, o = "%" + i + "%", sa(cr, o))
      s = cr[o];
    else if (s != null) {
      if (!(m in s)) {
        if (!r)
          throw new Br("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (ur && f + 1 >= n.length) {
        var S = ur(s, m);
        p = !!S, p && "get" in S && !("originalValue" in S.get) ? s = S.get : s = s[m];
      } else
        p = sa(s, m), s = s[m];
      p && !u && (cr[o] = s);
    }
  }
  return s;
}, xd = { exports: {} }, qo, oc;
function Ll() {
  if (oc)
    return qo;
  oc = 1;
  var t = Zr, e = t("%Object.defineProperty%", !0) || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return qo = e, qo;
}
var $1 = Zr, Yi = $1("%Object.getOwnPropertyDescriptor%", !0);
if (Yi)
  try {
    Yi([], "length");
  } catch {
    Yi = null;
  }
var Sd = Yi, sc = Ll(), I1 = vd, Ir = ei, lc = Sd, D1 = function(e, r, n) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new Ir("`obj` must be an object or a function`");
  if (typeof r != "string" && typeof r != "symbol")
    throw new Ir("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new Ir("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new Ir("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new Ir("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new Ir("`loose`, if provided, must be a boolean");
  var i = arguments.length > 3 ? arguments[3] : null, a = arguments.length > 4 ? arguments[4] : null, o = arguments.length > 5 ? arguments[5] : null, s = arguments.length > 6 ? arguments[6] : !1, u = !!lc && lc(e, r);
  if (sc)
    sc(e, r, {
      configurable: o === null && u ? u.configurable : !o,
      enumerable: i === null && u ? u.enumerable : !i,
      value: n,
      writable: a === null && u ? u.writable : !a
    });
  else if (s || !i && !a && !o)
    e[r] = n;
  else
    throw new I1("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, Ms = Ll(), Od = function() {
  return !!Ms;
};
Od.hasArrayLengthDefineBug = function() {
  if (!Ms)
    return null;
  try {
    return Ms([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var R1 = Od, F1 = Zr, uc = D1, L1 = R1(), cc = Sd, fc = ei, N1 = F1("%Math.floor%"), M1 = function(e, r) {
  if (typeof e != "function")
    throw new fc("`fn` is not a function");
  if (typeof r != "number" || r < 0 || r > 4294967295 || N1(r) !== r)
    throw new fc("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], i = !0, a = !0;
  if ("length" in e && cc) {
    var o = cc(e, "length");
    o && !o.configurable && (i = !1), o && !o.writable && (a = !1);
  }
  return (i || a || !n) && (L1 ? uc(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    r,
    !0,
    !0
  ) : uc(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    r
  )), e;
};
(function(t) {
  var e = Fl, r = Zr, n = M1, i = ei, a = r("%Function.prototype.apply%"), o = r("%Function.prototype.call%"), s = r("%Reflect.apply%", !0) || e.call(o, a), u = Ll(), c = r("%Math.max%");
  t.exports = function(m) {
    if (typeof m != "function")
      throw new i("a function is required");
    var O = s(e, o, arguments);
    return n(
      O,
      1 + c(0, m.length - (arguments.length - 1)),
      !0
    );
  };
  var f = function() {
    return s(e, a, arguments);
  };
  u ? u(t.exports, "apply", { value: f }) : t.exports.apply = f;
})(xd);
var B1 = xd.exports, Ed = Zr, Ad = B1, j1 = Ad(Ed("String.prototype.indexOf")), z1 = function(e, r) {
  var n = Ed(e, !!r);
  return typeof n == "function" && j1(e, ".prototype.") > -1 ? Ad(n) : n;
};
const U1 = {}, V1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: U1
}, Symbol.toStringTag, { value: "Module" })), Me = /* @__PURE__ */ Tb(V1);
var Nl = typeof Map == "function" && Map.prototype, Wo = Object.getOwnPropertyDescriptor && Nl ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, ua = Nl && Wo && typeof Wo.get == "function" ? Wo.get : null, dc = Nl && Map.prototype.forEach, Ml = typeof Set == "function" && Set.prototype, Ho = Object.getOwnPropertyDescriptor && Ml ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, ca = Ml && Ho && typeof Ho.get == "function" ? Ho.get : null, pc = Ml && Set.prototype.forEach, q1 = typeof WeakMap == "function" && WeakMap.prototype, Fn = q1 ? WeakMap.prototype.has : null, W1 = typeof WeakSet == "function" && WeakSet.prototype, Ln = W1 ? WeakSet.prototype.has : null, H1 = typeof WeakRef == "function" && WeakRef.prototype, hc = H1 ? WeakRef.prototype.deref : null, G1 = Boolean.prototype.valueOf, K1 = Object.prototype.toString, Y1 = Function.prototype.toString, J1 = String.prototype.match, Bl = String.prototype.slice, Bt = String.prototype.replace, X1 = String.prototype.toUpperCase, mc = String.prototype.toLowerCase, Cd = RegExp.prototype.test, gc = Array.prototype.concat, ht = Array.prototype.join, Q1 = Array.prototype.slice, yc = Math.floor, Bs = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Go = Object.getOwnPropertySymbols, js = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, qr = typeof Symbol == "function" && typeof Symbol.iterator == "object", De = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === qr || "symbol") ? Symbol.toStringTag : null, _d = Object.prototype.propertyIsEnumerable, bc = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
  return t.__proto__;
} : null);
function vc(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Cd.call(/e/, e))
    return e;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var n = t < 0 ? -yc(-t) : yc(t);
    if (n !== t) {
      var i = String(n), a = Bl.call(e, i.length + 1);
      return Bt.call(i, r, "$&_") + "." + Bt.call(Bt.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Bt.call(e, r, "$&_");
}
var zs = Me, wc = zs.custom, xc = Td(wc) ? wc : null, kd = {
  __proto__: null,
  double: '"',
  single: "'"
}, Z1 = {
  __proto__: null,
  double: /(["\\])/g,
  single: /(['\\])/g
}, ev = function t(e, r, n, i) {
  var a = r || {};
  if (_t(a, "quoteStyle") && !_t(kd, a.quoteStyle))
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (_t(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var o = _t(a, "customInspect") ? a.customInspect : !0;
  if (typeof o != "boolean" && o !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (_t(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (_t(a, "numericSeparator") && typeof a.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var s = a.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return Id(e, a);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var u = String(e);
    return s ? vc(e, u) : u;
  }
  if (typeof e == "bigint") {
    var c = String(e) + "n";
    return s ? vc(e, c) : c;
  }
  var f = typeof a.depth > "u" ? 5 : a.depth;
  if (typeof n > "u" && (n = 0), n >= f && f > 0 && typeof e == "object")
    return Us(e) ? "[Array]" : "[Object]";
  var p = bv(a, n);
  if (typeof i > "u")
    i = [];
  else if ($d(i, e) >= 0)
    return "[Circular]";
  function m(b, x, y) {
    if (x && (i = Q1.call(i), i.push(x)), y) {
      var U = {
        depth: a.depth
      };
      return _t(a, "quoteStyle") && (U.quoteStyle = a.quoteStyle), t(b, U, n + 1, i);
    }
    return t(b, a, n + 1, i);
  }
  if (typeof e == "function" && !Sc(e)) {
    var O = uv(e), g = Pi(e, m);
    return "[Function" + (O ? ": " + O : " (anonymous)") + "]" + (g.length > 0 ? " { " + ht.call(g, ", ") + " }" : "");
  }
  if (Td(e)) {
    var S = qr ? Bt.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : js.call(e);
    return typeof e == "object" && !qr ? xn(S) : S;
  }
  if (mv(e)) {
    for (var v = "<" + mc.call(String(e.nodeName)), C = e.attributes || [], P = 0; P < C.length; P++)
      v += " " + C[P].name + "=" + Pd(tv(C[P].value), "double", a);
    return v += ">", e.childNodes && e.childNodes.length && (v += "..."), v += "</" + mc.call(String(e.nodeName)) + ">", v;
  }
  if (Us(e)) {
    if (e.length === 0)
      return "[]";
    var E = Pi(e, m);
    return p && !yv(E) ? "[" + Vs(E, p) + "]" : "[ " + ht.call(E, ", ") + " ]";
  }
  if (nv(e)) {
    var _ = Pi(e, m);
    return !("cause" in Error.prototype) && "cause" in e && !_d.call(e, "cause") ? "{ [" + String(e) + "] " + ht.call(gc.call("[cause]: " + m(e.cause), _), ", ") + " }" : _.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + ht.call(_, ", ") + " }";
  }
  if (typeof e == "object" && o) {
    if (xc && typeof e[xc] == "function" && zs)
      return zs(e, { depth: f - n });
    if (o !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (cv(e)) {
    var I = [];
    return dc && dc.call(e, function(b, x) {
      I.push(m(x, e, !0) + " => " + m(b, e));
    }), Oc("Map", ua.call(e), I, p);
  }
  if (pv(e)) {
    var j = [];
    return pc && pc.call(e, function(b) {
      j.push(m(b, e));
    }), Oc("Set", ca.call(e), j, p);
  }
  if (fv(e))
    return Ko("WeakMap");
  if (hv(e))
    return Ko("WeakSet");
  if (dv(e))
    return Ko("WeakRef");
  if (av(e))
    return xn(m(Number(e)));
  if (sv(e))
    return xn(m(Bs.call(e)));
  if (ov(e))
    return xn(G1.call(e));
  if (iv(e))
    return xn(m(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (typeof globalThis < "u" && e === globalThis || typeof Ke < "u" && e === Ke)
    return "{ [object globalThis] }";
  if (!rv(e) && !Sc(e)) {
    var z = Pi(e, m), B = bc ? bc(e) === Object.prototype : e instanceof Object || e.constructor === Object, N = e instanceof Object ? "" : "null prototype", R = !B && De && Object(e) === e && De in e ? Bl.call(Ht(e), 8, -1) : N ? "Object" : "", V = B || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", h = V + (R || N ? "[" + ht.call(gc.call([], R || [], N || []), ": ") + "] " : "");
    return z.length === 0 ? h + "{}" : p ? h + "{" + Vs(z, p) + "}" : h + "{ " + ht.call(z, ", ") + " }";
  }
  return String(e);
};
function Pd(t, e, r) {
  var n = r.quoteStyle || e, i = kd[n];
  return i + t + i;
}
function tv(t) {
  return Bt.call(String(t), /"/g, "&quot;");
}
function Us(t) {
  return Ht(t) === "[object Array]" && (!De || !(typeof t == "object" && De in t));
}
function rv(t) {
  return Ht(t) === "[object Date]" && (!De || !(typeof t == "object" && De in t));
}
function Sc(t) {
  return Ht(t) === "[object RegExp]" && (!De || !(typeof t == "object" && De in t));
}
function nv(t) {
  return Ht(t) === "[object Error]" && (!De || !(typeof t == "object" && De in t));
}
function iv(t) {
  return Ht(t) === "[object String]" && (!De || !(typeof t == "object" && De in t));
}
function av(t) {
  return Ht(t) === "[object Number]" && (!De || !(typeof t == "object" && De in t));
}
function ov(t) {
  return Ht(t) === "[object Boolean]" && (!De || !(typeof t == "object" && De in t));
}
function Td(t) {
  if (qr)
    return t && typeof t == "object" && t instanceof Symbol;
  if (typeof t == "symbol")
    return !0;
  if (!t || typeof t != "object" || !js)
    return !1;
  try {
    return js.call(t), !0;
  } catch {
  }
  return !1;
}
function sv(t) {
  if (!t || typeof t != "object" || !Bs)
    return !1;
  try {
    return Bs.call(t), !0;
  } catch {
  }
  return !1;
}
var lv = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function _t(t, e) {
  return lv.call(t, e);
}
function Ht(t) {
  return K1.call(t);
}
function uv(t) {
  if (t.name)
    return t.name;
  var e = J1.call(Y1.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function $d(t, e) {
  if (t.indexOf)
    return t.indexOf(e);
  for (var r = 0, n = t.length; r < n; r++)
    if (t[r] === e)
      return r;
  return -1;
}
function cv(t) {
  if (!ua || !t || typeof t != "object")
    return !1;
  try {
    ua.call(t);
    try {
      ca.call(t);
    } catch {
      return !0;
    }
    return t instanceof Map;
  } catch {
  }
  return !1;
}
function fv(t) {
  if (!Fn || !t || typeof t != "object")
    return !1;
  try {
    Fn.call(t, Fn);
    try {
      Ln.call(t, Ln);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {
  }
  return !1;
}
function dv(t) {
  if (!hc || !t || typeof t != "object")
    return !1;
  try {
    return hc.call(t), !0;
  } catch {
  }
  return !1;
}
function pv(t) {
  if (!ca || !t || typeof t != "object")
    return !1;
  try {
    ca.call(t);
    try {
      ua.call(t);
    } catch {
      return !0;
    }
    return t instanceof Set;
  } catch {
  }
  return !1;
}
function hv(t) {
  if (!Ln || !t || typeof t != "object")
    return !1;
  try {
    Ln.call(t, Ln);
    try {
      Fn.call(t, Fn);
    } catch {
      return !0;
    }
    return t instanceof WeakSet;
  } catch {
  }
  return !1;
}
function mv(t) {
  return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function Id(t, e) {
  if (t.length > e.maxStringLength) {
    var r = t.length - e.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return Id(Bl.call(t, 0, e.maxStringLength), e) + n;
  }
  var i = Z1[e.quoteStyle || "single"];
  i.lastIndex = 0;
  var a = Bt.call(Bt.call(t, i, "\\$1"), /[\x00-\x1f]/g, gv);
  return Pd(a, "single", e);
}
function gv(t) {
  var e = t.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + X1.call(e.toString(16));
}
function xn(t) {
  return "Object(" + t + ")";
}
function Ko(t) {
  return t + " { ? }";
}
function Oc(t, e, r, n) {
  var i = n ? Vs(r, n) : ht.call(r, ", ");
  return t + " (" + e + ") {" + i + "}";
}
function yv(t) {
  for (var e = 0; e < t.length; e++)
    if ($d(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function bv(t, e) {
  var r;
  if (t.indent === "	")
    r = "	";
  else if (typeof t.indent == "number" && t.indent > 0)
    r = ht.call(Array(t.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: ht.call(Array(e + 1), r)
  };
}
function Vs(t, e) {
  if (t.length === 0)
    return "";
  var r = `
` + e.prev + e.base;
  return r + ht.call(t, "," + r) + `
` + e.prev;
}
function Pi(t, e) {
  var r = Us(t), n = [];
  if (r) {
    n.length = t.length;
    for (var i = 0; i < t.length; i++)
      n[i] = _t(t, i) ? e(t[i], t) : "";
  }
  var a = typeof Go == "function" ? Go(t) : [], o;
  if (qr) {
    o = {};
    for (var s = 0; s < a.length; s++)
      o["$" + a[s]] = a[s];
  }
  for (var u in t)
    _t(t, u) && (r && String(Number(u)) === u && u < t.length || qr && o["$" + u] instanceof Symbol || (Cd.call(/[^\w$]/, u) ? n.push(e(u, t) + ": " + e(t[u], t)) : n.push(u + ": " + e(t[u], t))));
  if (typeof Go == "function")
    for (var c = 0; c < a.length; c++)
      _d.call(t, a[c]) && n.push("[" + e(a[c]) + "]: " + e(t[a[c]], t));
  return n;
}
var Dd = Zr, en = z1, vv = ev, wv = ei, Ti = Dd("%WeakMap%", !0), $i = Dd("%Map%", !0), xv = en("WeakMap.prototype.get", !0), Sv = en("WeakMap.prototype.set", !0), Ov = en("WeakMap.prototype.has", !0), Ev = en("Map.prototype.get", !0), Av = en("Map.prototype.set", !0), Cv = en("Map.prototype.has", !0), jl = function(t, e) {
  for (var r = t, n; (n = r.next) !== null; r = n)
    if (n.key === e)
      return r.next = n.next, n.next = /** @type {NonNullable<typeof list.next>} */
      t.next, t.next = n, n;
}, _v = function(t, e) {
  var r = jl(t, e);
  return r && r.value;
}, kv = function(t, e, r) {
  var n = jl(t, e);
  n ? n.value = r : t.next = /** @type {import('.').ListNode<typeof value>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: e,
    next: t.next,
    value: r
  };
}, Pv = function(t, e) {
  return !!jl(t, e);
}, Tv = function() {
  var e, r, n, i = {
    assert: function(a) {
      if (!i.has(a))
        throw new wv("Side channel does not contain " + vv(a));
    },
    get: function(a) {
      if (Ti && a && (typeof a == "object" || typeof a == "function")) {
        if (e)
          return xv(e, a);
      } else if ($i) {
        if (r)
          return Ev(r, a);
      } else if (n)
        return _v(n, a);
    },
    has: function(a) {
      if (Ti && a && (typeof a == "object" || typeof a == "function")) {
        if (e)
          return Ov(e, a);
      } else if ($i) {
        if (r)
          return Cv(r, a);
      } else if (n)
        return Pv(n, a);
      return !1;
    },
    set: function(a, o) {
      Ti && a && (typeof a == "object" || typeof a == "function") ? (e || (e = new Ti()), Sv(e, a, o)) : $i ? (r || (r = new $i()), Av(r, a, o)) : (n || (n = { key: {}, next: null }), kv(n, a, o));
    }
  };
  return i;
}, $v = String.prototype.replace, Iv = /%20/g, Yo = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, zl = {
  default: Yo.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return $v.call(t, Iv, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: Yo.RFC1738,
  RFC3986: Yo.RFC3986
}, Dv = zl, Jo = Object.prototype.hasOwnProperty, ir = Array.isArray, ft = function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
}(), Rv = function(e) {
  for (; e.length > 1; ) {
    var r = e.pop(), n = r.obj[r.prop];
    if (ir(n)) {
      for (var i = [], a = 0; a < n.length; ++a)
        typeof n[a] < "u" && i.push(n[a]);
      r.obj[r.prop] = i;
    }
  }
}, Rd = function(e, r) {
  for (var n = r && r.plainObjects ? { __proto__: null } : {}, i = 0; i < e.length; ++i)
    typeof e[i] < "u" && (n[i] = e[i]);
  return n;
}, Fv = function t(e, r, n) {
  if (!r)
    return e;
  if (typeof r != "object" && typeof r != "function") {
    if (ir(e))
      e.push(r);
    else if (e && typeof e == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !Jo.call(Object.prototype, r)) && (e[r] = !0);
    else
      return [e, r];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(r);
  var i = e;
  return ir(e) && !ir(r) && (i = Rd(e, n)), ir(e) && ir(r) ? (r.forEach(function(a, o) {
    if (Jo.call(e, o)) {
      var s = e[o];
      s && typeof s == "object" && a && typeof a == "object" ? e[o] = t(s, a, n) : e.push(a);
    } else
      e[o] = a;
  }), e) : Object.keys(r).reduce(function(a, o) {
    var s = r[o];
    return Jo.call(a, o) ? a[o] = t(a[o], s, n) : a[o] = s, a;
  }, i);
}, Lv = function(e, r) {
  return Object.keys(r).reduce(function(n, i) {
    return n[i] = r[i], n;
  }, e);
}, Nv = function(t, e, r) {
  var n = t.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, Xo = 1024, Mv = function(e, r, n, i, a) {
  if (e.length === 0)
    return e;
  var o = e;
  if (typeof e == "symbol" ? o = Symbol.prototype.toString.call(e) : typeof e != "string" && (o = String(e)), n === "iso-8859-1")
    return escape(o).replace(/%u[0-9a-f]{4}/gi, function(O) {
      return "%26%23" + parseInt(O.slice(2), 16) + "%3B";
    });
  for (var s = "", u = 0; u < o.length; u += Xo) {
    for (var c = o.length >= Xo ? o.slice(u, u + Xo) : o, f = [], p = 0; p < c.length; ++p) {
      var m = c.charCodeAt(p);
      if (m === 45 || m === 46 || m === 95 || m === 126 || m >= 48 && m <= 57 || m >= 65 && m <= 90 || m >= 97 && m <= 122 || a === Dv.RFC1738 && (m === 40 || m === 41)) {
        f[f.length] = c.charAt(p);
        continue;
      }
      if (m < 128) {
        f[f.length] = ft[m];
        continue;
      }
      if (m < 2048) {
        f[f.length] = ft[192 | m >> 6] + ft[128 | m & 63];
        continue;
      }
      if (m < 55296 || m >= 57344) {
        f[f.length] = ft[224 | m >> 12] + ft[128 | m >> 6 & 63] + ft[128 | m & 63];
        continue;
      }
      p += 1, m = 65536 + ((m & 1023) << 10 | c.charCodeAt(p) & 1023), f[f.length] = ft[240 | m >> 18] + ft[128 | m >> 12 & 63] + ft[128 | m >> 6 & 63] + ft[128 | m & 63];
    }
    s += f.join("");
  }
  return s;
}, Bv = function(e) {
  for (var r = [{ obj: { o: e }, prop: "o" }], n = [], i = 0; i < r.length; ++i)
    for (var a = r[i], o = a.obj[a.prop], s = Object.keys(o), u = 0; u < s.length; ++u) {
      var c = s[u], f = o[c];
      typeof f == "object" && f !== null && n.indexOf(f) === -1 && (r.push({ obj: o, prop: c }), n.push(f));
    }
  return Rv(r), e;
}, jv = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, zv = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, Uv = function(e, r) {
  return [].concat(e, r);
}, Vv = function(e, r) {
  if (ir(e)) {
    for (var n = [], i = 0; i < e.length; i += 1)
      n.push(r(e[i]));
    return n;
  }
  return r(e);
}, Fd = {
  arrayToObject: Rd,
  assign: Lv,
  combine: Uv,
  compact: Bv,
  decode: Nv,
  encode: Mv,
  isBuffer: zv,
  isRegExp: jv,
  maybeMap: Vv,
  merge: Fv
}, Ld = Tv, Ji = Fd, Nn = zl, qv = Object.prototype.hasOwnProperty, Nd = {
  brackets: function(e) {
    return e + "[]";
  },
  comma: "comma",
  indices: function(e, r) {
    return e + "[" + r + "]";
  },
  repeat: function(e) {
    return e;
  }
}, pt = Array.isArray, Wv = Array.prototype.push, Md = function(t, e) {
  Wv.apply(t, pt(e) ? e : [e]);
}, Hv = Date.prototype.toISOString, Ec = Nn.default, Ee = {
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
  encoder: Ji.encode,
  encodeValuesOnly: !1,
  filter: void 0,
  format: Ec,
  formatter: Nn.formatters[Ec],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return Hv.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, Gv = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, Qo = {}, Kv = function t(e, r, n, i, a, o, s, u, c, f, p, m, O, g, S, v, C, P) {
  for (var E = e, _ = P, I = 0, j = !1; (_ = _.get(Qo)) !== void 0 && !j; ) {
    var z = _.get(e);
    if (I += 1, typeof z < "u") {
      if (z === I)
        throw new RangeError("Cyclic object value");
      j = !0;
    }
    typeof _.get(Qo) > "u" && (I = 0);
  }
  if (typeof f == "function" ? E = f(r, E) : E instanceof Date ? E = O(E) : n === "comma" && pt(E) && (E = Ji.maybeMap(E, function(Y) {
    return Y instanceof Date ? O(Y) : Y;
  })), E === null) {
    if (o)
      return c && !v ? c(r, Ee.encoder, C, "key", g) : r;
    E = "";
  }
  if (Gv(E) || Ji.isBuffer(E)) {
    if (c) {
      var B = v ? r : c(r, Ee.encoder, C, "key", g);
      return [S(B) + "=" + S(c(E, Ee.encoder, C, "value", g))];
    }
    return [S(r) + "=" + S(String(E))];
  }
  var N = [];
  if (typeof E > "u")
    return N;
  var R;
  if (n === "comma" && pt(E))
    v && c && (E = Ji.maybeMap(E, c)), R = [{ value: E.length > 0 ? E.join(",") || null : void 0 }];
  else if (pt(f))
    R = f;
  else {
    var V = Object.keys(E);
    R = p ? V.sort(p) : V;
  }
  var h = u ? String(r).replace(/\./g, "%2E") : String(r), b = i && pt(E) && E.length === 1 ? h + "[]" : h;
  if (a && pt(E) && E.length === 0)
    return b + "[]";
  for (var x = 0; x < R.length; ++x) {
    var y = R[x], U = typeof y == "object" && y && typeof y.value < "u" ? y.value : E[y];
    if (!(s && U === null)) {
      var L = m && u ? String(y).replace(/\./g, "%2E") : String(y), F = pt(E) ? typeof n == "function" ? n(b, L) : b : b + (m ? "." + L : "[" + L + "]");
      P.set(e, I);
      var W = Ld();
      W.set(Qo, P), Md(N, t(
        U,
        F,
        n,
        i,
        a,
        o,
        s,
        u,
        n === "comma" && v && pt(E) ? null : c,
        f,
        p,
        m,
        O,
        g,
        S,
        v,
        C,
        W
      ));
    }
  }
  return N;
}, Yv = function(e) {
  if (!e)
    return Ee;
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.encodeDotInKeys < "u" && typeof e.encodeDotInKeys != "boolean")
    throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = e.charset || Ee.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = Nn.default;
  if (typeof e.format < "u") {
    if (!qv.call(Nn.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  var i = Nn.formatters[n], a = Ee.filter;
  (typeof e.filter == "function" || pt(e.filter)) && (a = e.filter);
  var o;
  if (e.arrayFormat in Nd ? o = e.arrayFormat : "indices" in e ? o = e.indices ? "indices" : "repeat" : o = Ee.arrayFormat, "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var s = typeof e.allowDots > "u" ? e.encodeDotInKeys === !0 ? !0 : Ee.allowDots : !!e.allowDots;
  return {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : Ee.addQueryPrefix,
    allowDots: s,
    allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : Ee.allowEmptyArrays,
    arrayFormat: o,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : Ee.charsetSentinel,
    commaRoundTrip: !!e.commaRoundTrip,
    delimiter: typeof e.delimiter > "u" ? Ee.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : Ee.encode,
    encodeDotInKeys: typeof e.encodeDotInKeys == "boolean" ? e.encodeDotInKeys : Ee.encodeDotInKeys,
    encoder: typeof e.encoder == "function" ? e.encoder : Ee.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : Ee.encodeValuesOnly,
    filter: a,
    format: n,
    formatter: i,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : Ee.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : Ee.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Ee.strictNullHandling
  };
}, Jv = function(t, e) {
  var r = t, n = Yv(e), i, a;
  typeof n.filter == "function" ? (a = n.filter, r = a("", r)) : pt(n.filter) && (a = n.filter, i = a);
  var o = [];
  if (typeof r != "object" || r === null)
    return "";
  var s = Nd[n.arrayFormat], u = s === "comma" && n.commaRoundTrip;
  i || (i = Object.keys(r)), n.sort && i.sort(n.sort);
  for (var c = Ld(), f = 0; f < i.length; ++f) {
    var p = i[f], m = r[p];
    n.skipNulls && m === null || Md(o, Kv(
      m,
      p,
      s,
      u,
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
  var O = o.join(n.delimiter), g = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? g += "utf8=%26%2310003%3B&" : g += "utf8=%E2%9C%93&"), O.length > 0 ? g + O : "";
}, Wr = Fd, qs = Object.prototype.hasOwnProperty, Xv = Array.isArray, be = {
  allowDots: !1,
  allowEmptyArrays: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decodeDotInKeys: !1,
  decoder: Wr.decode,
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
}, Qv = function(t) {
  return t.replace(/&#(\d+);/g, function(e, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, Bd = function(t, e) {
  return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
}, Zv = "utf8=%26%2310003%3B", ew = "utf8=%E2%9C%93", tw = function(e, r) {
  var n = { __proto__: null }, i = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e;
  i = i.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  var a = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, o = i.split(r.delimiter, a), s = -1, u, c = r.charset;
  if (r.charsetSentinel)
    for (u = 0; u < o.length; ++u)
      o[u].indexOf("utf8=") === 0 && (o[u] === ew ? c = "utf-8" : o[u] === Zv && (c = "iso-8859-1"), s = u, u = o.length);
  for (u = 0; u < o.length; ++u)
    if (u !== s) {
      var f = o[u], p = f.indexOf("]="), m = p === -1 ? f.indexOf("=") : p + 1, O, g;
      m === -1 ? (O = r.decoder(f, be.decoder, c, "key"), g = r.strictNullHandling ? null : "") : (O = r.decoder(f.slice(0, m), be.decoder, c, "key"), g = Wr.maybeMap(
        Bd(f.slice(m + 1), r),
        function(v) {
          return r.decoder(v, be.decoder, c, "value");
        }
      )), g && r.interpretNumericEntities && c === "iso-8859-1" && (g = Qv(String(g))), f.indexOf("[]=") > -1 && (g = Xv(g) ? [g] : g);
      var S = qs.call(n, O);
      S && r.duplicates === "combine" ? n[O] = Wr.combine(n[O], g) : (!S || r.duplicates === "last") && (n[O] = g);
    }
  return n;
}, rw = function(t, e, r, n) {
  for (var i = n ? e : Bd(e, r), a = t.length - 1; a >= 0; --a) {
    var o, s = t[a];
    if (s === "[]" && r.parseArrays)
      o = r.allowEmptyArrays && (i === "" || r.strictNullHandling && i === null) ? [] : [].concat(i);
    else {
      o = r.plainObjects ? { __proto__: null } : {};
      var u = s.charAt(0) === "[" && s.charAt(s.length - 1) === "]" ? s.slice(1, -1) : s, c = r.decodeDotInKeys ? u.replace(/%2E/g, ".") : u, f = parseInt(c, 10);
      !r.parseArrays && c === "" ? o = { 0: i } : !isNaN(f) && s !== c && String(f) === c && f >= 0 && r.parseArrays && f <= r.arrayLimit ? (o = [], o[f] = i) : c !== "__proto__" && (o[c] = i);
    }
    i = o;
  }
  return i;
}, nw = function(e, r, n, i) {
  if (e) {
    var a = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, o = /(\[[^[\]]*])/, s = /(\[[^[\]]*])/g, u = n.depth > 0 && o.exec(a), c = u ? a.slice(0, u.index) : a, f = [];
    if (c) {
      if (!n.plainObjects && qs.call(Object.prototype, c) && !n.allowPrototypes)
        return;
      f.push(c);
    }
    for (var p = 0; n.depth > 0 && (u = s.exec(a)) !== null && p < n.depth; ) {
      if (p += 1, !n.plainObjects && qs.call(Object.prototype, u[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      f.push(u[1]);
    }
    if (u) {
      if (n.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + n.depth + " and strictDepth is true");
      f.push("[" + a.slice(u.index) + "]");
    }
    return rw(f, r, n, i);
  }
}, iw = function(e) {
  if (!e)
    return be;
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.decodeDotInKeys < "u" && typeof e.decodeDotInKeys != "boolean")
    throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.decoder !== null && typeof e.decoder < "u" && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = typeof e.charset > "u" ? be.charset : e.charset, n = typeof e.duplicates > "u" ? be.duplicates : e.duplicates;
  if (n !== "combine" && n !== "first" && n !== "last")
    throw new TypeError("The duplicates option must be either combine, first, or last");
  var i = typeof e.allowDots > "u" ? e.decodeDotInKeys === !0 ? !0 : be.allowDots : !!e.allowDots;
  return {
    allowDots: i,
    allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : be.allowEmptyArrays,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : be.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : be.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : be.arrayLimit,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : be.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : be.comma,
    decodeDotInKeys: typeof e.decodeDotInKeys == "boolean" ? e.decodeDotInKeys : be.decodeDotInKeys,
    decoder: typeof e.decoder == "function" ? e.decoder : be.decoder,
    delimiter: typeof e.delimiter == "string" || Wr.isRegExp(e.delimiter) ? e.delimiter : be.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : be.depth,
    duplicates: n,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : be.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : be.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : be.plainObjects,
    strictDepth: typeof e.strictDepth == "boolean" ? !!e.strictDepth : be.strictDepth,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : be.strictNullHandling
  };
}, aw = function(t, e) {
  var r = iw(e);
  if (t === "" || t === null || typeof t > "u")
    return r.plainObjects ? { __proto__: null } : {};
  for (var n = typeof t == "string" ? tw(t, r) : t, i = r.plainObjects ? { __proto__: null } : {}, a = Object.keys(n), o = 0; o < a.length; ++o) {
    var s = a[o], u = nw(s, n[s], r, typeof t == "string");
    i = Wr.merge(i, u, r);
  }
  return r.allowSparse === !0 ? i : Wr.compact(i);
}, ow = Jv, sw = aw, lw = zl, Ac = {
  formats: lw,
  parse: sw,
  stringify: ow
}, uw = { exports: {} };
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(Ke, function() {
    var r = {};
    r.version = "0.2.0";
    var n = r.settings = {
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
    r.configure = function(g) {
      var S, v;
      for (S in g)
        v = g[S], v !== void 0 && g.hasOwnProperty(S) && (n[S] = v);
      return this;
    }, r.status = null, r.set = function(g) {
      var S = r.isStarted();
      g = i(g, n.minimum, 1), r.status = g === 1 ? null : g;
      var v = r.render(!S), C = v.querySelector(n.barSelector), P = n.speed, E = n.easing;
      return v.offsetWidth, s(function(_) {
        n.positionUsing === "" && (n.positionUsing = r.getPositioningCSS()), u(C, o(g, P, E)), g === 1 ? (u(v, {
          transition: "none",
          opacity: 1
        }), v.offsetWidth, setTimeout(function() {
          u(v, {
            transition: "all " + P + "ms linear",
            opacity: 0
          }), setTimeout(function() {
            r.remove(), _();
          }, P);
        }, P)) : setTimeout(_, P);
      }), this;
    }, r.isStarted = function() {
      return typeof r.status == "number";
    }, r.start = function() {
      r.status || r.set(0);
      var g = function() {
        setTimeout(function() {
          r.status && (r.trickle(), g());
        }, n.trickleSpeed);
      };
      return n.trickle && g(), this;
    }, r.done = function(g) {
      return !g && !r.status ? this : r.inc(0.3 + 0.5 * Math.random()).set(1);
    }, r.inc = function(g) {
      var S = r.status;
      return S ? (typeof g != "number" && (g = (1 - S) * i(Math.random() * S, 0.1, 0.95)), S = i(S + g, 0, 0.994), r.set(S)) : r.start();
    }, r.trickle = function() {
      return r.inc(Math.random() * n.trickleRate);
    }, function() {
      var g = 0, S = 0;
      r.promise = function(v) {
        return !v || v.state() === "resolved" ? this : (S === 0 && r.start(), g++, S++, v.always(function() {
          S--, S === 0 ? (g = 0, r.done()) : r.set((g - S) / g);
        }), this);
      };
    }(), r.render = function(g) {
      if (r.isRendered())
        return document.getElementById("nprogress");
      f(document.documentElement, "nprogress-busy");
      var S = document.createElement("div");
      S.id = "nprogress", S.innerHTML = n.template;
      var v = S.querySelector(n.barSelector), C = g ? "-100" : a(r.status || 0), P = document.querySelector(n.parent), E;
      return u(v, {
        transition: "all 0 linear",
        transform: "translate3d(" + C + "%,0,0)"
      }), n.showSpinner || (E = S.querySelector(n.spinnerSelector), E && O(E)), P != document.body && f(P, "nprogress-custom-parent"), P.appendChild(S), S;
    }, r.remove = function() {
      p(document.documentElement, "nprogress-busy"), p(document.querySelector(n.parent), "nprogress-custom-parent");
      var g = document.getElementById("nprogress");
      g && O(g);
    }, r.isRendered = function() {
      return !!document.getElementById("nprogress");
    }, r.getPositioningCSS = function() {
      var g = document.body.style, S = "WebkitTransform" in g ? "Webkit" : "MozTransform" in g ? "Moz" : "msTransform" in g ? "ms" : "OTransform" in g ? "O" : "";
      return S + "Perspective" in g ? "translate3d" : S + "Transform" in g ? "translate" : "margin";
    };
    function i(g, S, v) {
      return g < S ? S : g > v ? v : g;
    }
    function a(g) {
      return (-1 + g) * 100;
    }
    function o(g, S, v) {
      var C;
      return n.positionUsing === "translate3d" ? C = { transform: "translate3d(" + a(g) + "%,0,0)" } : n.positionUsing === "translate" ? C = { transform: "translate(" + a(g) + "%,0)" } : C = { "margin-left": a(g) + "%" }, C.transition = "all " + S + "ms " + v, C;
    }
    var s = function() {
      var g = [];
      function S() {
        var v = g.shift();
        v && v(S);
      }
      return function(v) {
        g.push(v), g.length == 1 && S();
      };
    }(), u = function() {
      var g = ["Webkit", "O", "Moz", "ms"], S = {};
      function v(_) {
        return _.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(I, j) {
          return j.toUpperCase();
        });
      }
      function C(_) {
        var I = document.body.style;
        if (_ in I)
          return _;
        for (var j = g.length, z = _.charAt(0).toUpperCase() + _.slice(1), B; j--; )
          if (B = g[j] + z, B in I)
            return B;
        return _;
      }
      function P(_) {
        return _ = v(_), S[_] || (S[_] = C(_));
      }
      function E(_, I, j) {
        I = P(I), _.style[I] = j;
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
    function c(g, S) {
      var v = typeof g == "string" ? g : m(g);
      return v.indexOf(" " + S + " ") >= 0;
    }
    function f(g, S) {
      var v = m(g), C = v + S;
      c(v, S) || (g.className = C.substring(1));
    }
    function p(g, S) {
      var v = m(g), C;
      c(g, S) && (C = v.replace(" " + S + " ", " "), g.className = C.substring(1, C.length - 1));
    }
    function m(g) {
      return (" " + (g.className || "") + " ").replace(/\s+/gi, " ");
    }
    function O(g) {
      g && g.parentNode && g.parentNode.removeChild(g);
    }
    return r;
  });
})(uw);
function jd(t, e) {
  let r;
  return function(...n) {
    clearTimeout(r), r = setTimeout(() => t.apply(this, n), e);
  };
}
function It(t, e) {
  return document.dispatchEvent(new CustomEvent(`inertia:${t}`, e));
}
var cw = (t) => It("before", { cancelable: !0, detail: { visit: t } }), fw = (t) => It("error", { detail: { errors: t } }), dw = (t) => It("exception", { cancelable: !0, detail: { exception: t } }), Cc = (t) => It("finish", { detail: { visit: t } }), pw = (t) => It("invalid", { cancelable: !0, detail: { response: t } }), Sn = (t) => It("navigate", { detail: { page: t } }), hw = (t) => It("progress", { detail: { progress: t } }), mw = (t) => It("start", { detail: { visit: t } }), gw = (t) => It("success", { detail: { page: t } });
function Ws(t) {
  return t instanceof File || t instanceof Blob || t instanceof FileList && t.length > 0 || t instanceof FormData && Array.from(t.values()).some((e) => Ws(e)) || typeof t == "object" && t !== null && Object.values(t).some((e) => Ws(e));
}
function zd(t, e = new FormData(), r = null) {
  t = t || {};
  for (let n in t)
    Object.prototype.hasOwnProperty.call(t, n) && Vd(e, Ud(r, n), t[n]);
  return e;
}
function Ud(t, e) {
  return t ? t + "[" + e + "]" : e;
}
function Vd(t, e, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => Vd(t, Ud(e, n.toString()), r[n]));
  if (r instanceof Date)
    return t.append(e, r.toISOString());
  if (r instanceof File)
    return t.append(e, r, r.name);
  if (r instanceof Blob)
    return t.append(e, r);
  if (typeof r == "boolean")
    return t.append(e, r ? "1" : "0");
  if (typeof r == "string")
    return t.append(e, r);
  if (typeof r == "number")
    return t.append(e, `${r}`);
  if (r == null)
    return t.append(e, "");
  zd(r, t, e);
}
var yw = { modal: null, listener: null, show(t) {
  typeof t == "object" && (t = `All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(t)}`);
  let e = document.createElement("html");
  e.innerHTML = t, e.querySelectorAll("a").forEach((n) => n.setAttribute("target", "_top")), this.modal = document.createElement("div"), this.modal.style.position = "fixed", this.modal.style.width = "100vw", this.modal.style.height = "100vh", this.modal.style.padding = "50px", this.modal.style.boxSizing = "border-box", this.modal.style.backgroundColor = "rgba(0, 0, 0, .6)", this.modal.style.zIndex = 2e5, this.modal.addEventListener("click", () => this.hide());
  let r = document.createElement("iframe");
  if (r.style.backgroundColor = "white", r.style.borderRadius = "5px", r.style.width = "100%", r.style.height = "100%", this.modal.appendChild(r), document.body.prepend(this.modal), document.body.style.overflow = "hidden", !r.contentWindow)
    throw new Error("iframe not yet ready.");
  r.contentWindow.document.open(), r.contentWindow.document.write(e.outerHTML), r.contentWindow.document.close(), this.listener = this.hideOnEscape.bind(this), document.addEventListener("keydown", this.listener);
}, hide() {
  this.modal.outerHTML = "", this.modal = null, document.body.style.overflow = "visible", document.removeEventListener("keydown", this.listener);
}, hideOnEscape(t) {
  t.keyCode === 27 && this.hide();
} };
function Dr(t) {
  return new URL(t.toString(), window.location.toString());
}
function Ul(t, e, r, n = "brackets") {
  let i = /^https?:\/\//.test(e.toString()), a = i || e.toString().startsWith("/"), o = !a && !e.toString().startsWith("#") && !e.toString().startsWith("?"), s = e.toString().includes("?") || t === "get" && Object.keys(r).length, u = e.toString().includes("#"), c = new URL(e.toString(), "http://localhost");
  return t === "get" && Object.keys(r).length && (c.search = Ac.stringify(Wb(Ac.parse(c.search, { ignoreQueryPrefix: !0 }), r), { encodeValuesOnly: !0, arrayFormat: n }), r = {}), [[i ? `${c.protocol}//${c.host}` : "", a ? c.pathname : "", o ? c.pathname.substring(1) : "", s ? c.search : "", u ? c.hash : ""].join(""), r];
}
function On(t) {
  return t = new URL(t.href), t.hash = "", t;
}
var _c = typeof window > "u", bw = class {
  constructor() {
    this.visitId = null;
  }
  init({ initialPage: t, resolveComponent: e, swapComponent: r }) {
    this.page = t, this.resolveComponent = e, this.swapComponent = r, this.setNavigationType(), this.clearRememberedStateOnReload(), this.isBackForwardVisit() ? this.handleBackForwardVisit(this.page) : this.isLocationVisit() ? this.handleLocationVisit(this.page) : this.handleInitialPageVisit(this.page), this.setupEventListeners();
  }
  setNavigationType() {
    this.navigationType = window.performance && window.performance.getEntriesByType("navigation").length > 0 ? window.performance.getEntriesByType("navigation")[0].type : "navigate";
  }
  clearRememberedStateOnReload() {
    var t;
    this.navigationType === "reload" && ((t = window.history.state) != null && t.rememberedState) && delete window.history.state.rememberedState;
  }
  handleInitialPageVisit(t) {
    this.page.url += window.location.hash, this.setPage(t, { preserveState: !0 }).then(() => Sn(t));
  }
  setupEventListeners() {
    window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), document.addEventListener("scroll", jd(this.handleScrollEvent.bind(this), 100), !0);
  }
  scrollRegions() {
    return document.querySelectorAll("[scroll-region]");
  }
  handleScrollEvent(t) {
    typeof t.target.hasAttribute == "function" && t.target.hasAttribute("scroll-region") && this.saveScrollPositions();
  }
  saveScrollPositions() {
    this.replaceState({ ...this.page, scrollRegions: Array.from(this.scrollRegions()).map((t) => ({ top: t.scrollTop, left: t.scrollLeft })) });
  }
  resetScrollPositions() {
    window.scrollTo(0, 0), this.scrollRegions().forEach((t) => {
      typeof t.scrollTo == "function" ? t.scrollTo(0, 0) : (t.scrollTop = 0, t.scrollLeft = 0);
    }), this.saveScrollPositions(), window.location.hash && setTimeout(() => {
      var t;
      return (t = document.getElementById(window.location.hash.slice(1))) == null ? void 0 : t.scrollIntoView();
    });
  }
  restoreScrollPositions() {
    this.page.scrollRegions && this.scrollRegions().forEach((t, e) => {
      let r = this.page.scrollRegions[e];
      if (r)
        typeof t.scrollTo == "function" ? t.scrollTo(r.left, r.top) : (t.scrollTop = r.top, t.scrollLeft = r.left);
      else
        return;
    });
  }
  isBackForwardVisit() {
    return window.history.state && this.navigationType === "back_forward";
  }
  handleBackForwardVisit(t) {
    window.history.state.version = t.version, this.setPage(window.history.state, { preserveScroll: !0, preserveState: !0 }).then(() => {
      this.restoreScrollPositions(), Sn(t);
    });
  }
  locationVisit(t, e) {
    try {
      let r = { preserveScroll: e };
      window.sessionStorage.setItem("inertiaLocationVisit", JSON.stringify(r)), window.location.href = t.href, On(window.location).href === On(t).href && window.location.reload();
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
  handleLocationVisit(t) {
    var r, n;
    let e = JSON.parse(window.sessionStorage.getItem("inertiaLocationVisit") || "");
    window.sessionStorage.removeItem("inertiaLocationVisit"), t.url += window.location.hash, t.rememberedState = ((r = window.history.state) == null ? void 0 : r.rememberedState) ?? {}, t.scrollRegions = ((n = window.history.state) == null ? void 0 : n.scrollRegions) ?? [], this.setPage(t, { preserveScroll: e.preserveScroll, preserveState: !0 }).then(() => {
      e.preserveScroll && this.restoreScrollPositions(), Sn(t);
    });
  }
  isLocationVisitResponse(t) {
    return !!(t && t.status === 409 && t.headers["x-inertia-location"]);
  }
  isInertiaResponse(t) {
    return !!(t != null && t.headers["x-inertia"]);
  }
  createVisitId() {
    return this.visitId = {}, this.visitId;
  }
  cancelVisit(t, { cancelled: e = !1, interrupted: r = !1 }) {
    t && !t.completed && !t.cancelled && !t.interrupted && (t.cancelToken.abort(), t.onCancel(), t.completed = !1, t.cancelled = e, t.interrupted = r, Cc(t), t.onFinish(t));
  }
  finishVisit(t) {
    !t.cancelled && !t.interrupted && (t.completed = !0, t.cancelled = !1, t.interrupted = !1, Cc(t), t.onFinish(t));
  }
  resolvePreserveOption(t, e) {
    return typeof t == "function" ? t(e) : t === "errors" ? Object.keys(e.props.errors || {}).length > 0 : t;
  }
  cancel() {
    this.activeVisit && this.cancelVisit(this.activeVisit, { cancelled: !0 });
  }
  visit(t, { method: e = "get", data: r = {}, replace: n = !1, preserveScroll: i = !1, preserveState: a = !1, only: o = [], except: s = [], headers: u = {}, errorBag: c = "", forceFormData: f = !1, onCancelToken: p = () => {
  }, onBefore: m = () => {
  }, onStart: O = () => {
  }, onProgress: g = () => {
  }, onFinish: S = () => {
  }, onCancel: v = () => {
  }, onSuccess: C = () => {
  }, onError: P = () => {
  }, queryStringArrayFormat: E = "brackets" } = {}) {
    let _ = typeof t == "string" ? Dr(t) : t;
    if ((Ws(r) || f) && !(r instanceof FormData) && (r = zd(r)), !(r instanceof FormData)) {
      let [B, N] = Ul(e, _, r, E);
      _ = Dr(B), r = N;
    }
    let I = { url: _, method: e, data: r, replace: n, preserveScroll: i, preserveState: a, only: o, except: s, headers: u, errorBag: c, forceFormData: f, queryStringArrayFormat: E, cancelled: !1, completed: !1, interrupted: !1 };
    if (m(I) === !1 || !cw(I))
      return;
    this.activeVisit && this.cancelVisit(this.activeVisit, { interrupted: !0 }), this.saveScrollPositions();
    let j = this.createVisitId();
    this.activeVisit = { ...I, onCancelToken: p, onBefore: m, onStart: O, onProgress: g, onFinish: S, onCancel: v, onSuccess: C, onError: P, queryStringArrayFormat: E, cancelToken: new AbortController() }, p({ cancel: () => {
      this.activeVisit && this.cancelVisit(this.activeVisit, { cancelled: !0 });
    } }), mw(I), O(I);
    let z = !!(o.length || s.length);
    ec({ method: e, url: On(_).href, data: e === "get" ? {} : r, params: e === "get" ? r : {}, signal: this.activeVisit.cancelToken.signal, headers: { ...u, Accept: "text/html, application/xhtml+xml", "X-Requested-With": "XMLHttpRequest", "X-Inertia": !0, ...z ? { "X-Inertia-Partial-Component": this.page.component } : {}, ...o.length ? { "X-Inertia-Partial-Data": o.join(",") } : {}, ...s.length ? { "X-Inertia-Partial-Except": s.join(",") } : {}, ...c && c.length ? { "X-Inertia-Error-Bag": c } : {}, ...this.page.version ? { "X-Inertia-Version": this.page.version } : {} }, onUploadProgress: (B) => {
      r instanceof FormData && (B.percentage = B.progress ? Math.round(B.progress * 100) : 0, hw(B), g(B));
    } }).then((B) => {
      var h;
      if (!this.isInertiaResponse(B))
        return Promise.reject({ response: B });
      let N = B.data;
      z && N.component === this.page.component && (N.props = { ...this.page.props, ...N.props }), i = this.resolvePreserveOption(i, N), a = this.resolvePreserveOption(a, N), a && ((h = window.history.state) != null && h.rememberedState) && N.component === this.page.component && (N.rememberedState = window.history.state.rememberedState);
      let R = _, V = Dr(N.url);
      return R.hash && !V.hash && On(R).href === V.href && (V.hash = R.hash, N.url = V.href), this.setPage(N, { visitId: j, replace: n, preserveScroll: i, preserveState: a });
    }).then(() => {
      let B = this.page.props.errors || {};
      if (Object.keys(B).length > 0) {
        let N = c ? B[c] ? B[c] : {} : B;
        return fw(N), P(N);
      }
      return gw(this.page), C(this.page);
    }).catch((B) => {
      if (this.isInertiaResponse(B.response))
        return this.setPage(B.response.data, { visitId: j });
      if (this.isLocationVisitResponse(B.response)) {
        let N = Dr(B.response.headers["x-inertia-location"]), R = _;
        R.hash && !N.hash && On(R).href === N.href && (N.hash = R.hash), this.locationVisit(N, i === !0);
      } else if (B.response)
        pw(B.response) && yw.show(B.response.data);
      else
        return Promise.reject(B);
    }).then(() => {
      this.activeVisit && this.finishVisit(this.activeVisit);
    }).catch((B) => {
      if (!ec.isCancel(B)) {
        let N = dw(B);
        if (this.activeVisit && this.finishVisit(this.activeVisit), N)
          return Promise.reject(B);
      }
    });
  }
  setPage(t, { visitId: e = this.createVisitId(), replace: r = !1, preserveScroll: n = !1, preserveState: i = !1 } = {}) {
    return Promise.resolve(this.resolveComponent(t.component)).then((a) => {
      e === this.visitId && (t.scrollRegions = t.scrollRegions || [], t.rememberedState = t.rememberedState || {}, r = r || Dr(t.url).href === window.location.href, r ? this.replaceState(t) : this.pushState(t), this.swapComponent({ component: a, page: t, preserveState: i }).then(() => {
        n || this.resetScrollPositions(), r || Sn(t);
      }));
    });
  }
  pushState(t) {
    this.page = t, window.history.pushState(t, "", t.url);
  }
  replaceState(t) {
    this.page = t, window.history.replaceState(t, "", t.url);
  }
  handlePopstateEvent(t) {
    if (t.state !== null) {
      let e = t.state, r = this.createVisitId();
      Promise.resolve(this.resolveComponent(e.component)).then((n) => {
        r === this.visitId && (this.page = e, this.swapComponent({ component: n, page: e, preserveState: !1 }).then(() => {
          this.restoreScrollPositions(), Sn(e);
        }));
      });
    } else {
      let e = Dr(this.page.url);
      e.hash = window.location.hash, this.replaceState({ ...this.page, url: e.href }), this.resetScrollPositions();
    }
  }
  get(t, e = {}, r = {}) {
    return this.visit(t, { ...r, method: "get", data: e });
  }
  reload(t = {}) {
    return this.visit(window.location.href, { ...t, preserveScroll: !0, preserveState: !0 });
  }
  replace(t, e = {}) {
    return console.warn(`Inertia.replace() has been deprecated and will be removed in a future release. Please use Inertia.${e.method ?? "get"}() instead.`), this.visit(t, { preserveState: !0, ...e, replace: !0 });
  }
  post(t, e = {}, r = {}) {
    return this.visit(t, { preserveState: !0, ...r, method: "post", data: e });
  }
  put(t, e = {}, r = {}) {
    return this.visit(t, { preserveState: !0, ...r, method: "put", data: e });
  }
  patch(t, e = {}, r = {}) {
    return this.visit(t, { preserveState: !0, ...r, method: "patch", data: e });
  }
  delete(t, e = {}) {
    return this.visit(t, { preserveState: !0, ...e, method: "delete" });
  }
  remember(t, e = "default") {
    var r;
    _c || this.replaceState({ ...this.page, rememberedState: { ...(r = this.page) == null ? void 0 : r.rememberedState, [e]: t } });
  }
  restore(t = "default") {
    var e, r;
    if (!_c)
      return (r = (e = window.history.state) == null ? void 0 : e.rememberedState) == null ? void 0 : r[t];
  }
  on(t, e) {
    let r = (n) => {
      let i = e(n);
      n.cancelable && !n.defaultPrevented && i === !1 && n.preventDefault();
    };
    return document.addEventListener(`inertia:${t}`, r), () => document.removeEventListener(`inertia:${t}`, r);
  }
}, vw = { buildDOMElement(t) {
  let e = document.createElement("template");
  e.innerHTML = t;
  let r = e.content.firstChild;
  if (!t.startsWith("<script "))
    return r;
  let n = document.createElement("script");
  return n.innerHTML = r.innerHTML, r.getAttributeNames().forEach((i) => {
    n.setAttribute(i, r.getAttribute(i) || "");
  }), n;
}, isInertiaManagedElement(t) {
  return t.nodeType === Node.ELEMENT_NODE && t.getAttribute("inertia") !== null;
}, findMatchingElementIndex(t, e) {
  let r = t.getAttribute("inertia");
  return r !== null ? e.findIndex((n) => n.getAttribute("inertia") === r) : -1;
}, update: jd(function(t) {
  let e = t.map((r) => this.buildDOMElement(r));
  Array.from(document.head.childNodes).filter((r) => this.isInertiaManagedElement(r)).forEach((r) => {
    var a, o;
    let n = this.findMatchingElementIndex(r, e);
    if (n === -1) {
      (a = r == null ? void 0 : r.parentNode) == null || a.removeChild(r);
      return;
    }
    let i = e.splice(n, 1)[0];
    i && !r.isEqualNode(i) && ((o = r == null ? void 0 : r.parentNode) == null || o.replaceChild(i, r));
  }), e.forEach((r) => document.head.appendChild(r));
}, 1) };
function ww(t, e, r) {
  let n = {}, i = 0;
  function a() {
    let f = i += 1;
    return n[f] = [], f.toString();
  }
  function o(f) {
    f === null || Object.keys(n).indexOf(f) === -1 || (delete n[f], c());
  }
  function s(f, p = []) {
    f !== null && Object.keys(n).indexOf(f) > -1 && (n[f] = p), c();
  }
  function u() {
    let f = e(""), p = { ...f ? { title: `<title inertia="">${f}</title>` } : {} }, m = Object.values(n).reduce((O, g) => O.concat(g), []).reduce((O, g) => {
      if (g.indexOf("<") === -1)
        return O;
      if (g.indexOf("<title ") === 0) {
        let v = g.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return O.title = v ? `${v[1]}${e(v[2])}${v[3]}` : g, O;
      }
      let S = g.match(/ inertia="[^"]+"/);
      return S ? O[S[0]] = g : O[Object.keys(O).length] = g, O;
    }, p);
    return Object.values(m);
  }
  function c() {
    t ? r(u()) : vw.update(u());
  }
  return c(), { forceUpdate: c, createProvider: function() {
    let f = a();
    return { update: (p) => s(f, p), disconnect: () => o(f) };
  } };
}
function qd(t) {
  let e = t.currentTarget.tagName.toLowerCase() === "a";
  return !(t.target && (t == null ? void 0 : t.target).isContentEditable || t.defaultPrevented || e && t.which > 1 || e && t.altKey || e && t.ctrlKey || e && t.metaKey || e && t.shiftKey);
}
var sr = new bw(), fa = { exports: {} };
fa.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", i = 9007199254740991, a = "[object Arguments]", o = "[object Array]", s = "[object Boolean]", u = "[object Date]", c = "[object Error]", f = "[object Function]", p = "[object GeneratorFunction]", m = "[object Map]", O = "[object Number]", g = "[object Object]", S = "[object Promise]", v = "[object RegExp]", C = "[object Set]", P = "[object String]", E = "[object Symbol]", _ = "[object WeakMap]", I = "[object ArrayBuffer]", j = "[object DataView]", z = "[object Float32Array]", B = "[object Float64Array]", N = "[object Int8Array]", R = "[object Int16Array]", V = "[object Int32Array]", h = "[object Uint8Array]", b = "[object Uint8ClampedArray]", x = "[object Uint16Array]", y = "[object Uint32Array]", U = /[\\^$.*+?()[\]{}|]/g, L = /\w*$/, F = /^\[object .+?Constructor\]$/, W = /^(?:0|[1-9]\d*)$/, Y = {};
  Y[a] = Y[o] = Y[I] = Y[j] = Y[s] = Y[u] = Y[z] = Y[B] = Y[N] = Y[R] = Y[V] = Y[m] = Y[O] = Y[g] = Y[v] = Y[C] = Y[P] = Y[E] = Y[h] = Y[b] = Y[x] = Y[y] = !0, Y[c] = Y[f] = Y[_] = !1;
  var Xe = typeof Ke == "object" && Ke && Ke.Object === Object && Ke, Dt = typeof self == "object" && self && self.Object === Object && self, we = Xe || Dt || Function("return this")(), Qe = e && !e.nodeType && e, ie = Qe && !0 && t && !t.nodeType && t, Gt = ie && ie.exports === Qe;
  function tn(l, d) {
    return l.set(d[0], d[1]), l;
  }
  function Be(l, d) {
    return l.add(d), l;
  }
  function Kt(l, d) {
    for (var w = -1, $ = l ? l.length : 0; ++w < $ && d(l[w], w, l) !== !1; )
      ;
    return l;
  }
  function gr(l, d) {
    for (var w = -1, $ = d.length, ee = l.length; ++w < $; )
      l[ee + w] = d[w];
    return l;
  }
  function Yt(l, d, w, $) {
    var ee = -1, G = l ? l.length : 0;
    for ($ && G && (w = l[++ee]); ++ee < G; )
      w = d(w, l[ee], ee, l);
    return w;
  }
  function Jt(l, d) {
    for (var w = -1, $ = Array(l); ++w < l; )
      $[w] = d(w);
    return $;
  }
  function yr(l, d) {
    return l == null ? void 0 : l[d];
  }
  function rn(l) {
    var d = !1;
    if (l != null && typeof l.toString != "function")
      try {
        d = !!(l + "");
      } catch {
      }
    return d;
  }
  function si(l) {
    var d = -1, w = Array(l.size);
    return l.forEach(function($, ee) {
      w[++d] = [ee, $];
    }), w;
  }
  function nn(l, d) {
    return function(w) {
      return l(d(w));
    };
  }
  function li(l) {
    var d = -1, w = Array(l.size);
    return l.forEach(function($) {
      w[++d] = $;
    }), w;
  }
  var Va = Array.prototype, qa = Function.prototype, br = Object.prototype, an = we["__core-js_shared__"], ui = function() {
    var l = /[^.]+$/.exec(an && an.keys && an.keys.IE_PROTO || "");
    return l ? "Symbol(src)_1." + l : "";
  }(), ci = qa.toString, ot = br.hasOwnProperty, vr = br.toString, Wa = RegExp(
    "^" + ci.call(ot).replace(U, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Xt = Gt ? we.Buffer : void 0, wr = we.Symbol, on = we.Uint8Array, He = nn(Object.getPrototypeOf, Object), fi = Object.create, di = br.propertyIsEnumerable, Ha = Va.splice, sn = Object.getOwnPropertySymbols, xr = Xt ? Xt.isBuffer : void 0, pi = nn(Object.keys, Object), Sr = et(we, "DataView"), Qt = et(we, "Map"), Ze = et(we, "Promise"), Or = et(we, "Set"), ln = et(we, "WeakMap"), Zt = et(Object, "create"), un = Re(Sr), er = Re(Qt), cn = Re(Ze), fn = Re(Or), dn = Re(ln), Rt = wr ? wr.prototype : void 0, hi = Rt ? Rt.valueOf : void 0;
  function wt(l) {
    var d = -1, w = l ? l.length : 0;
    for (this.clear(); ++d < w; ) {
      var $ = l[d];
      this.set($[0], $[1]);
    }
  }
  function Ga() {
    this.__data__ = Zt ? Zt(null) : {};
  }
  function Ka(l) {
    return this.has(l) && delete this.__data__[l];
  }
  function Ya(l) {
    var d = this.__data__;
    if (Zt) {
      var w = d[l];
      return w === n ? void 0 : w;
    }
    return ot.call(d, l) ? d[l] : void 0;
  }
  function mi(l) {
    var d = this.__data__;
    return Zt ? d[l] !== void 0 : ot.call(d, l);
  }
  function pn(l, d) {
    var w = this.__data__;
    return w[l] = Zt && d === void 0 ? n : d, this;
  }
  wt.prototype.clear = Ga, wt.prototype.delete = Ka, wt.prototype.get = Ya, wt.prototype.has = mi, wt.prototype.set = pn;
  function Ce(l) {
    var d = -1, w = l ? l.length : 0;
    for (this.clear(); ++d < w; ) {
      var $ = l[d];
      this.set($[0], $[1]);
    }
  }
  function Ja() {
    this.__data__ = [];
  }
  function Xa(l) {
    var d = this.__data__, w = Ar(d, l);
    if (w < 0)
      return !1;
    var $ = d.length - 1;
    return w == $ ? d.pop() : Ha.call(d, w, 1), !0;
  }
  function Qa(l) {
    var d = this.__data__, w = Ar(d, l);
    return w < 0 ? void 0 : d[w][1];
  }
  function Za(l) {
    return Ar(this.__data__, l) > -1;
  }
  function eo(l, d) {
    var w = this.__data__, $ = Ar(w, l);
    return $ < 0 ? w.push([l, d]) : w[$][1] = d, this;
  }
  Ce.prototype.clear = Ja, Ce.prototype.delete = Xa, Ce.prototype.get = Qa, Ce.prototype.has = Za, Ce.prototype.set = eo;
  function ke(l) {
    var d = -1, w = l ? l.length : 0;
    for (this.clear(); ++d < w; ) {
      var $ = l[d];
      this.set($[0], $[1]);
    }
  }
  function to() {
    this.__data__ = {
      hash: new wt(),
      map: new (Qt || Ce)(),
      string: new wt()
    };
  }
  function ro(l) {
    return rr(this, l).delete(l);
  }
  function no(l) {
    return rr(this, l).get(l);
  }
  function io(l) {
    return rr(this, l).has(l);
  }
  function ao(l, d) {
    return rr(this, l).set(l, d), this;
  }
  ke.prototype.clear = to, ke.prototype.delete = ro, ke.prototype.get = no, ke.prototype.has = io, ke.prototype.set = ao;
  function Fe(l) {
    this.__data__ = new Ce(l);
  }
  function oo() {
    this.__data__ = new Ce();
  }
  function so(l) {
    return this.__data__.delete(l);
  }
  function lo(l) {
    return this.__data__.get(l);
  }
  function uo(l) {
    return this.__data__.has(l);
  }
  function co(l, d) {
    var w = this.__data__;
    if (w instanceof Ce) {
      var $ = w.__data__;
      if (!Qt || $.length < r - 1)
        return $.push([l, d]), this;
      w = this.__data__ = new ke($);
    }
    return w.set(l, d), this;
  }
  Fe.prototype.clear = oo, Fe.prototype.delete = so, Fe.prototype.get = lo, Fe.prototype.has = uo, Fe.prototype.set = co;
  function Er(l, d) {
    var w = yn(l) || _r(l) ? Jt(l.length, String) : [], $ = w.length, ee = !!$;
    for (var G in l)
      (d || ot.call(l, G)) && !(ee && (G == "length" || Ao(G, $))) && w.push(G);
    return w;
  }
  function gi(l, d, w) {
    var $ = l[d];
    (!(ot.call(l, d) && xi($, w)) || w === void 0 && !(d in l)) && (l[d] = w);
  }
  function Ar(l, d) {
    for (var w = l.length; w--; )
      if (xi(l[w][0], d))
        return w;
    return -1;
  }
  function st(l, d) {
    return l && gn(d, vn(d), l);
  }
  function hn(l, d, w, $, ee, G, ae) {
    var se;
    if ($ && (se = G ? $(l, ee, G, ae) : $(l)), se !== void 0)
      return se;
    if (!ut(l))
      return l;
    var xe = yn(l);
    if (xe) {
      if (se = Oo(l), !d)
        return wo(l, se);
    } else {
      var ue = St(l), Pe = ue == f || ue == p;
      if (Si(l))
        return Cr(l, d);
      if (ue == g || ue == a || Pe && !G) {
        if (rn(l))
          return G ? l : {};
        if (se = lt(Pe ? {} : l), !d)
          return xo(l, st(se, l));
      } else {
        if (!Y[ue])
          return G ? l : {};
        se = Eo(l, ue, hn, d);
      }
    }
    ae || (ae = new Fe());
    var Le = ae.get(l);
    if (Le)
      return Le;
    if (ae.set(l, se), !xe)
      var Oe = w ? So(l) : vn(l);
    return Kt(Oe || l, function(Te, _e) {
      Oe && (_e = Te, Te = l[_e]), gi(se, _e, hn(Te, d, w, $, _e, l, ae));
    }), se;
  }
  function fo(l) {
    return ut(l) ? fi(l) : {};
  }
  function po(l, d, w) {
    var $ = d(l);
    return yn(l) ? $ : gr($, w(l));
  }
  function ho(l) {
    return vr.call(l);
  }
  function mo(l) {
    if (!ut(l) || _o(l))
      return !1;
    var d = bn(l) || rn(l) ? Wa : F;
    return d.test(Re(l));
  }
  function go(l) {
    if (!vi(l))
      return pi(l);
    var d = [];
    for (var w in Object(l))
      ot.call(l, w) && w != "constructor" && d.push(w);
    return d;
  }
  function Cr(l, d) {
    if (d)
      return l.slice();
    var w = new l.constructor(l.length);
    return l.copy(w), w;
  }
  function mn(l) {
    var d = new l.constructor(l.byteLength);
    return new on(d).set(new on(l)), d;
  }
  function tr(l, d) {
    var w = d ? mn(l.buffer) : l.buffer;
    return new l.constructor(w, l.byteOffset, l.byteLength);
  }
  function yi(l, d, w) {
    var $ = d ? w(si(l), !0) : si(l);
    return Yt($, tn, new l.constructor());
  }
  function bi(l) {
    var d = new l.constructor(l.source, L.exec(l));
    return d.lastIndex = l.lastIndex, d;
  }
  function yo(l, d, w) {
    var $ = d ? w(li(l), !0) : li(l);
    return Yt($, Be, new l.constructor());
  }
  function bo(l) {
    return hi ? Object(hi.call(l)) : {};
  }
  function vo(l, d) {
    var w = d ? mn(l.buffer) : l.buffer;
    return new l.constructor(w, l.byteOffset, l.length);
  }
  function wo(l, d) {
    var w = -1, $ = l.length;
    for (d || (d = Array($)); ++w < $; )
      d[w] = l[w];
    return d;
  }
  function gn(l, d, w, $) {
    w || (w = {});
    for (var ee = -1, G = d.length; ++ee < G; ) {
      var ae = d[ee], se = $ ? $(w[ae], l[ae], ae, w, l) : void 0;
      gi(w, ae, se === void 0 ? l[ae] : se);
    }
    return w;
  }
  function xo(l, d) {
    return gn(l, xt(l), d);
  }
  function So(l) {
    return po(l, vn, xt);
  }
  function rr(l, d) {
    var w = l.__data__;
    return Co(d) ? w[typeof d == "string" ? "string" : "hash"] : w.map;
  }
  function et(l, d) {
    var w = yr(l, d);
    return mo(w) ? w : void 0;
  }
  var xt = sn ? nn(sn, Object) : Po, St = ho;
  (Sr && St(new Sr(new ArrayBuffer(1))) != j || Qt && St(new Qt()) != m || Ze && St(Ze.resolve()) != S || Or && St(new Or()) != C || ln && St(new ln()) != _) && (St = function(l) {
    var d = vr.call(l), w = d == g ? l.constructor : void 0, $ = w ? Re(w) : void 0;
    if ($)
      switch ($) {
        case un:
          return j;
        case er:
          return m;
        case cn:
          return S;
        case fn:
          return C;
        case dn:
          return _;
      }
    return d;
  });
  function Oo(l) {
    var d = l.length, w = l.constructor(d);
    return d && typeof l[0] == "string" && ot.call(l, "index") && (w.index = l.index, w.input = l.input), w;
  }
  function lt(l) {
    return typeof l.constructor == "function" && !vi(l) ? fo(He(l)) : {};
  }
  function Eo(l, d, w, $) {
    var ee = l.constructor;
    switch (d) {
      case I:
        return mn(l);
      case s:
      case u:
        return new ee(+l);
      case j:
        return tr(l, $);
      case z:
      case B:
      case N:
      case R:
      case V:
      case h:
      case b:
      case x:
      case y:
        return vo(l, $);
      case m:
        return yi(l, $, w);
      case O:
      case P:
        return new ee(l);
      case v:
        return bi(l);
      case C:
        return yo(l, $, w);
      case E:
        return bo(l);
    }
  }
  function Ao(l, d) {
    return d = d ?? i, !!d && (typeof l == "number" || W.test(l)) && l > -1 && l % 1 == 0 && l < d;
  }
  function Co(l) {
    var d = typeof l;
    return d == "string" || d == "number" || d == "symbol" || d == "boolean" ? l !== "__proto__" : l === null;
  }
  function _o(l) {
    return !!ui && ui in l;
  }
  function vi(l) {
    var d = l && l.constructor, w = typeof d == "function" && d.prototype || br;
    return l === w;
  }
  function Re(l) {
    if (l != null) {
      try {
        return ci.call(l);
      } catch {
      }
      try {
        return l + "";
      } catch {
      }
    }
    return "";
  }
  function wi(l) {
    return hn(l, !0, !0);
  }
  function xi(l, d) {
    return l === d || l !== l && d !== d;
  }
  function _r(l) {
    return ko(l) && ot.call(l, "callee") && (!di.call(l, "callee") || vr.call(l) == a);
  }
  var yn = Array.isArray;
  function kr(l) {
    return l != null && Oi(l.length) && !bn(l);
  }
  function ko(l) {
    return Ei(l) && kr(l);
  }
  var Si = xr || To;
  function bn(l) {
    var d = ut(l) ? vr.call(l) : "";
    return d == f || d == p;
  }
  function Oi(l) {
    return typeof l == "number" && l > -1 && l % 1 == 0 && l <= i;
  }
  function ut(l) {
    var d = typeof l;
    return !!l && (d == "object" || d == "function");
  }
  function Ei(l) {
    return !!l && typeof l == "object";
  }
  function vn(l) {
    return kr(l) ? Er(l) : go(l);
  }
  function Po() {
    return [];
  }
  function To() {
    return !1;
  }
  t.exports = wi;
})(fa, fa.exports);
var xw = fa.exports;
const At = /* @__PURE__ */ Ia(xw);
var da = { exports: {} };
da.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", i = 1, a = 2, o = 9007199254740991, s = "[object Arguments]", u = "[object Array]", c = "[object AsyncFunction]", f = "[object Boolean]", p = "[object Date]", m = "[object Error]", O = "[object Function]", g = "[object GeneratorFunction]", S = "[object Map]", v = "[object Number]", C = "[object Null]", P = "[object Object]", E = "[object Promise]", _ = "[object Proxy]", I = "[object RegExp]", j = "[object Set]", z = "[object String]", B = "[object Symbol]", N = "[object Undefined]", R = "[object WeakMap]", V = "[object ArrayBuffer]", h = "[object DataView]", b = "[object Float32Array]", x = "[object Float64Array]", y = "[object Int8Array]", U = "[object Int16Array]", L = "[object Int32Array]", F = "[object Uint8Array]", W = "[object Uint8ClampedArray]", Y = "[object Uint16Array]", Xe = "[object Uint32Array]", Dt = /[\\^$.*+?()[\]{}|]/g, we = /^\[object .+?Constructor\]$/, Qe = /^(?:0|[1-9]\d*)$/, ie = {};
  ie[b] = ie[x] = ie[y] = ie[U] = ie[L] = ie[F] = ie[W] = ie[Y] = ie[Xe] = !0, ie[s] = ie[u] = ie[V] = ie[f] = ie[h] = ie[p] = ie[m] = ie[O] = ie[S] = ie[v] = ie[P] = ie[I] = ie[j] = ie[z] = ie[R] = !1;
  var Gt = typeof Ke == "object" && Ke && Ke.Object === Object && Ke, tn = typeof self == "object" && self && self.Object === Object && self, Be = Gt || tn || Function("return this")(), Kt = e && !e.nodeType && e, gr = Kt && !0 && t && !t.nodeType && t, Yt = gr && gr.exports === Kt, Jt = Yt && Gt.process, yr = function() {
    try {
      return Jt && Jt.binding && Jt.binding("util");
    } catch {
    }
  }(), rn = yr && yr.isTypedArray;
  function si(l, d) {
    for (var w = -1, $ = l == null ? 0 : l.length, ee = 0, G = []; ++w < $; ) {
      var ae = l[w];
      d(ae, w, l) && (G[ee++] = ae);
    }
    return G;
  }
  function nn(l, d) {
    for (var w = -1, $ = d.length, ee = l.length; ++w < $; )
      l[ee + w] = d[w];
    return l;
  }
  function li(l, d) {
    for (var w = -1, $ = l == null ? 0 : l.length; ++w < $; )
      if (d(l[w], w, l))
        return !0;
    return !1;
  }
  function Va(l, d) {
    for (var w = -1, $ = Array(l); ++w < l; )
      $[w] = d(w);
    return $;
  }
  function qa(l) {
    return function(d) {
      return l(d);
    };
  }
  function br(l, d) {
    return l.has(d);
  }
  function an(l, d) {
    return l == null ? void 0 : l[d];
  }
  function ui(l) {
    var d = -1, w = Array(l.size);
    return l.forEach(function($, ee) {
      w[++d] = [ee, $];
    }), w;
  }
  function ci(l, d) {
    return function(w) {
      return l(d(w));
    };
  }
  function ot(l) {
    var d = -1, w = Array(l.size);
    return l.forEach(function($) {
      w[++d] = $;
    }), w;
  }
  var vr = Array.prototype, Wa = Function.prototype, Xt = Object.prototype, wr = Be["__core-js_shared__"], on = Wa.toString, He = Xt.hasOwnProperty, fi = function() {
    var l = /[^.]+$/.exec(wr && wr.keys && wr.keys.IE_PROTO || "");
    return l ? "Symbol(src)_1." + l : "";
  }(), di = Xt.toString, Ha = RegExp(
    "^" + on.call(He).replace(Dt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), sn = Yt ? Be.Buffer : void 0, xr = Be.Symbol, pi = Be.Uint8Array, Sr = Xt.propertyIsEnumerable, Qt = vr.splice, Ze = xr ? xr.toStringTag : void 0, Or = Object.getOwnPropertySymbols, ln = sn ? sn.isBuffer : void 0, Zt = ci(Object.keys, Object), un = xt(Be, "DataView"), er = xt(Be, "Map"), cn = xt(Be, "Promise"), fn = xt(Be, "Set"), dn = xt(Be, "WeakMap"), Rt = xt(Object, "create"), hi = Re(un), wt = Re(er), Ga = Re(cn), Ka = Re(fn), Ya = Re(dn), mi = xr ? xr.prototype : void 0, pn = mi ? mi.valueOf : void 0;
  function Ce(l) {
    var d = -1, w = l == null ? 0 : l.length;
    for (this.clear(); ++d < w; ) {
      var $ = l[d];
      this.set($[0], $[1]);
    }
  }
  function Ja() {
    this.__data__ = Rt ? Rt(null) : {}, this.size = 0;
  }
  function Xa(l) {
    var d = this.has(l) && delete this.__data__[l];
    return this.size -= d ? 1 : 0, d;
  }
  function Qa(l) {
    var d = this.__data__;
    if (Rt) {
      var w = d[l];
      return w === n ? void 0 : w;
    }
    return He.call(d, l) ? d[l] : void 0;
  }
  function Za(l) {
    var d = this.__data__;
    return Rt ? d[l] !== void 0 : He.call(d, l);
  }
  function eo(l, d) {
    var w = this.__data__;
    return this.size += this.has(l) ? 0 : 1, w[l] = Rt && d === void 0 ? n : d, this;
  }
  Ce.prototype.clear = Ja, Ce.prototype.delete = Xa, Ce.prototype.get = Qa, Ce.prototype.has = Za, Ce.prototype.set = eo;
  function ke(l) {
    var d = -1, w = l == null ? 0 : l.length;
    for (this.clear(); ++d < w; ) {
      var $ = l[d];
      this.set($[0], $[1]);
    }
  }
  function to() {
    this.__data__ = [], this.size = 0;
  }
  function ro(l) {
    var d = this.__data__, w = Cr(d, l);
    if (w < 0)
      return !1;
    var $ = d.length - 1;
    return w == $ ? d.pop() : Qt.call(d, w, 1), --this.size, !0;
  }
  function no(l) {
    var d = this.__data__, w = Cr(d, l);
    return w < 0 ? void 0 : d[w][1];
  }
  function io(l) {
    return Cr(this.__data__, l) > -1;
  }
  function ao(l, d) {
    var w = this.__data__, $ = Cr(w, l);
    return $ < 0 ? (++this.size, w.push([l, d])) : w[$][1] = d, this;
  }
  ke.prototype.clear = to, ke.prototype.delete = ro, ke.prototype.get = no, ke.prototype.has = io, ke.prototype.set = ao;
  function Fe(l) {
    var d = -1, w = l == null ? 0 : l.length;
    for (this.clear(); ++d < w; ) {
      var $ = l[d];
      this.set($[0], $[1]);
    }
  }
  function oo() {
    this.size = 0, this.__data__ = {
      hash: new Ce(),
      map: new (er || ke)(),
      string: new Ce()
    };
  }
  function so(l) {
    var d = et(this, l).delete(l);
    return this.size -= d ? 1 : 0, d;
  }
  function lo(l) {
    return et(this, l).get(l);
  }
  function uo(l) {
    return et(this, l).has(l);
  }
  function co(l, d) {
    var w = et(this, l), $ = w.size;
    return w.set(l, d), this.size += w.size == $ ? 0 : 1, this;
  }
  Fe.prototype.clear = oo, Fe.prototype.delete = so, Fe.prototype.get = lo, Fe.prototype.has = uo, Fe.prototype.set = co;
  function Er(l) {
    var d = -1, w = l == null ? 0 : l.length;
    for (this.__data__ = new Fe(); ++d < w; )
      this.add(l[d]);
  }
  function gi(l) {
    return this.__data__.set(l, n), this;
  }
  function Ar(l) {
    return this.__data__.has(l);
  }
  Er.prototype.add = Er.prototype.push = gi, Er.prototype.has = Ar;
  function st(l) {
    var d = this.__data__ = new ke(l);
    this.size = d.size;
  }
  function hn() {
    this.__data__ = new ke(), this.size = 0;
  }
  function fo(l) {
    var d = this.__data__, w = d.delete(l);
    return this.size = d.size, w;
  }
  function po(l) {
    return this.__data__.get(l);
  }
  function ho(l) {
    return this.__data__.has(l);
  }
  function mo(l, d) {
    var w = this.__data__;
    if (w instanceof ke) {
      var $ = w.__data__;
      if (!er || $.length < r - 1)
        return $.push([l, d]), this.size = ++w.size, this;
      w = this.__data__ = new Fe($);
    }
    return w.set(l, d), this.size = w.size, this;
  }
  st.prototype.clear = hn, st.prototype.delete = fo, st.prototype.get = po, st.prototype.has = ho, st.prototype.set = mo;
  function go(l, d) {
    var w = _r(l), $ = !w && xi(l), ee = !w && !$ && kr(l), G = !w && !$ && !ee && Ei(l), ae = w || $ || ee || G, se = ae ? Va(l.length, String) : [], xe = se.length;
    for (var ue in l)
      (d || He.call(l, ue)) && !(ae && // Safari 9 has enumerable `arguments.length` in strict mode.
      (ue == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      ee && (ue == "offset" || ue == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      G && (ue == "buffer" || ue == "byteLength" || ue == "byteOffset") || // Skip index properties.
      Eo(ue, xe))) && se.push(ue);
    return se;
  }
  function Cr(l, d) {
    for (var w = l.length; w--; )
      if (wi(l[w][0], d))
        return w;
    return -1;
  }
  function mn(l, d, w) {
    var $ = d(l);
    return _r(l) ? $ : nn($, w(l));
  }
  function tr(l) {
    return l == null ? l === void 0 ? N : C : Ze && Ze in Object(l) ? St(l) : vi(l);
  }
  function yi(l) {
    return ut(l) && tr(l) == s;
  }
  function bi(l, d, w, $, ee) {
    return l === d ? !0 : l == null || d == null || !ut(l) && !ut(d) ? l !== l && d !== d : yo(l, d, w, $, bi, ee);
  }
  function yo(l, d, w, $, ee, G) {
    var ae = _r(l), se = _r(d), xe = ae ? u : lt(l), ue = se ? u : lt(d);
    xe = xe == s ? P : xe, ue = ue == s ? P : ue;
    var Pe = xe == P, Le = ue == P, Oe = xe == ue;
    if (Oe && kr(l)) {
      if (!kr(d))
        return !1;
      ae = !0, Pe = !1;
    }
    if (Oe && !Pe)
      return G || (G = new st()), ae || Ei(l) ? gn(l, d, w, $, ee, G) : xo(l, d, xe, w, $, ee, G);
    if (!(w & i)) {
      var Te = Pe && He.call(l, "__wrapped__"), _e = Le && He.call(d, "__wrapped__");
      if (Te || _e) {
        var Ft = Te ? l.value() : l, Ot = _e ? d.value() : d;
        return G || (G = new st()), ee(Ft, Ot, w, $, G);
      }
    }
    return Oe ? (G || (G = new st()), So(l, d, w, $, ee, G)) : !1;
  }
  function bo(l) {
    if (!Oi(l) || Co(l))
      return !1;
    var d = Si(l) ? Ha : we;
    return d.test(Re(l));
  }
  function vo(l) {
    return ut(l) && bn(l.length) && !!ie[tr(l)];
  }
  function wo(l) {
    if (!_o(l))
      return Zt(l);
    var d = [];
    for (var w in Object(l))
      He.call(l, w) && w != "constructor" && d.push(w);
    return d;
  }
  function gn(l, d, w, $, ee, G) {
    var ae = w & i, se = l.length, xe = d.length;
    if (se != xe && !(ae && xe > se))
      return !1;
    var ue = G.get(l);
    if (ue && G.get(d))
      return ue == d;
    var Pe = -1, Le = !0, Oe = w & a ? new Er() : void 0;
    for (G.set(l, d), G.set(d, l); ++Pe < se; ) {
      var Te = l[Pe], _e = d[Pe];
      if ($)
        var Ft = ae ? $(_e, Te, Pe, d, l, G) : $(Te, _e, Pe, l, d, G);
      if (Ft !== void 0) {
        if (Ft)
          continue;
        Le = !1;
        break;
      }
      if (Oe) {
        if (!li(d, function(Ot, nr) {
          if (!br(Oe, nr) && (Te === Ot || ee(Te, Ot, w, $, G)))
            return Oe.push(nr);
        })) {
          Le = !1;
          break;
        }
      } else if (!(Te === _e || ee(Te, _e, w, $, G))) {
        Le = !1;
        break;
      }
    }
    return G.delete(l), G.delete(d), Le;
  }
  function xo(l, d, w, $, ee, G, ae) {
    switch (w) {
      case h:
        if (l.byteLength != d.byteLength || l.byteOffset != d.byteOffset)
          return !1;
        l = l.buffer, d = d.buffer;
      case V:
        return !(l.byteLength != d.byteLength || !G(new pi(l), new pi(d)));
      case f:
      case p:
      case v:
        return wi(+l, +d);
      case m:
        return l.name == d.name && l.message == d.message;
      case I:
      case z:
        return l == d + "";
      case S:
        var se = ui;
      case j:
        var xe = $ & i;
        if (se || (se = ot), l.size != d.size && !xe)
          return !1;
        var ue = ae.get(l);
        if (ue)
          return ue == d;
        $ |= a, ae.set(l, d);
        var Pe = gn(se(l), se(d), $, ee, G, ae);
        return ae.delete(l), Pe;
      case B:
        if (pn)
          return pn.call(l) == pn.call(d);
    }
    return !1;
  }
  function So(l, d, w, $, ee, G) {
    var ae = w & i, se = rr(l), xe = se.length, ue = rr(d), Pe = ue.length;
    if (xe != Pe && !ae)
      return !1;
    for (var Le = xe; Le--; ) {
      var Oe = se[Le];
      if (!(ae ? Oe in d : He.call(d, Oe)))
        return !1;
    }
    var Te = G.get(l);
    if (Te && G.get(d))
      return Te == d;
    var _e = !0;
    G.set(l, d), G.set(d, l);
    for (var Ft = ae; ++Le < xe; ) {
      Oe = se[Le];
      var Ot = l[Oe], nr = d[Oe];
      if ($)
        var Zl = ae ? $(nr, Ot, Oe, d, l, G) : $(Ot, nr, Oe, l, d, G);
      if (!(Zl === void 0 ? Ot === nr || ee(Ot, nr, w, $, G) : Zl)) {
        _e = !1;
        break;
      }
      Ft || (Ft = Oe == "constructor");
    }
    if (_e && !Ft) {
      var Ai = l.constructor, Ci = d.constructor;
      Ai != Ci && "constructor" in l && "constructor" in d && !(typeof Ai == "function" && Ai instanceof Ai && typeof Ci == "function" && Ci instanceof Ci) && (_e = !1);
    }
    return G.delete(l), G.delete(d), _e;
  }
  function rr(l) {
    return mn(l, vn, Oo);
  }
  function et(l, d) {
    var w = l.__data__;
    return Ao(d) ? w[typeof d == "string" ? "string" : "hash"] : w.map;
  }
  function xt(l, d) {
    var w = an(l, d);
    return bo(w) ? w : void 0;
  }
  function St(l) {
    var d = He.call(l, Ze), w = l[Ze];
    try {
      l[Ze] = void 0;
      var $ = !0;
    } catch {
    }
    var ee = di.call(l);
    return $ && (d ? l[Ze] = w : delete l[Ze]), ee;
  }
  var Oo = Or ? function(l) {
    return l == null ? [] : (l = Object(l), si(Or(l), function(d) {
      return Sr.call(l, d);
    }));
  } : Po, lt = tr;
  (un && lt(new un(new ArrayBuffer(1))) != h || er && lt(new er()) != S || cn && lt(cn.resolve()) != E || fn && lt(new fn()) != j || dn && lt(new dn()) != R) && (lt = function(l) {
    var d = tr(l), w = d == P ? l.constructor : void 0, $ = w ? Re(w) : "";
    if ($)
      switch ($) {
        case hi:
          return h;
        case wt:
          return S;
        case Ga:
          return E;
        case Ka:
          return j;
        case Ya:
          return R;
      }
    return d;
  });
  function Eo(l, d) {
    return d = d ?? o, !!d && (typeof l == "number" || Qe.test(l)) && l > -1 && l % 1 == 0 && l < d;
  }
  function Ao(l) {
    var d = typeof l;
    return d == "string" || d == "number" || d == "symbol" || d == "boolean" ? l !== "__proto__" : l === null;
  }
  function Co(l) {
    return !!fi && fi in l;
  }
  function _o(l) {
    var d = l && l.constructor, w = typeof d == "function" && d.prototype || Xt;
    return l === w;
  }
  function vi(l) {
    return di.call(l);
  }
  function Re(l) {
    if (l != null) {
      try {
        return on.call(l);
      } catch {
      }
      try {
        return l + "";
      } catch {
      }
    }
    return "";
  }
  function wi(l, d) {
    return l === d || l !== l && d !== d;
  }
  var xi = yi(function() {
    return arguments;
  }()) ? yi : function(l) {
    return ut(l) && He.call(l, "callee") && !Sr.call(l, "callee");
  }, _r = Array.isArray;
  function yn(l) {
    return l != null && bn(l.length) && !Si(l);
  }
  var kr = ln || To;
  function ko(l, d) {
    return bi(l, d);
  }
  function Si(l) {
    if (!Oi(l))
      return !1;
    var d = tr(l);
    return d == O || d == g || d == c || d == _;
  }
  function bn(l) {
    return typeof l == "number" && l > -1 && l % 1 == 0 && l <= o;
  }
  function Oi(l) {
    var d = typeof l;
    return l != null && (d == "object" || d == "function");
  }
  function ut(l) {
    return l != null && typeof l == "object";
  }
  var Ei = rn ? qa(rn) : vo;
  function vn(l) {
    return yn(l) ? go(l) : wo(l);
  }
  function Po() {
    return [];
  }
  function To() {
    return !1;
  }
  t.exports = ko;
})(da, da.exports);
var Sw = da.exports;
const Ow = /* @__PURE__ */ Ia(Sw);
function Ew(t, e) {
  let r = typeof t == "string" ? t : null, n = typeof t == "string" ? e : t, i = r ? sr.restore(r) : null, a = At(typeof n == "object" ? n : n()), o = null, s = null, u = (f) => f, c = hl({ ...i ? i.data : At(a), isDirty: !1, errors: i ? i.errors : {}, hasErrors: !1, processing: !1, progress: null, wasSuccessful: !1, recentlySuccessful: !1, data() {
    return Object.keys(a).reduce((f, p) => (f[p] = this[p], f), {});
  }, transform(f) {
    return u = f, this;
  }, defaults(f, p) {
    if (typeof n == "function")
      throw new Error("You cannot call `defaults()` when using a function to define your form data.");
    return typeof f > "u" ? a = this.data() : a = Object.assign({}, At(a), typeof f == "string" ? { [f]: p } : f), this;
  }, reset(...f) {
    let p = At(typeof n == "object" ? a : n()), m = At(p);
    return f.length === 0 ? (a = m, Object.assign(this, p)) : Object.keys(p).filter((O) => f.includes(O)).forEach((O) => {
      a[O] = m[O], this[O] = p[O];
    }), this;
  }, setError(f, p) {
    return Object.assign(this.errors, typeof f == "string" ? { [f]: p } : f), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, clearErrors(...f) {
    return this.errors = Object.keys(this.errors).reduce((p, m) => ({ ...p, ...f.length > 0 && !f.includes(m) ? { [m]: this.errors[m] } : {} }), {}), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, submit(f, p, m = {}) {
    let O = u(this.data()), g = { ...m, onCancelToken: (S) => {
      if (o = S, m.onCancelToken)
        return m.onCancelToken(S);
    }, onBefore: (S) => {
      if (this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(s), m.onBefore)
        return m.onBefore(S);
    }, onStart: (S) => {
      if (this.processing = !0, m.onStart)
        return m.onStart(S);
    }, onProgress: (S) => {
      if (this.progress = S, m.onProgress)
        return m.onProgress(S);
    }, onSuccess: async (S) => {
      this.processing = !1, this.progress = null, this.clearErrors(), this.wasSuccessful = !0, this.recentlySuccessful = !0, s = setTimeout(() => this.recentlySuccessful = !1, 2e3);
      let v = m.onSuccess ? await m.onSuccess(S) : null;
      return a = At(this.data()), this.isDirty = !1, v;
    }, onError: (S) => {
      if (this.processing = !1, this.progress = null, this.clearErrors().setError(S), m.onError)
        return m.onError(S);
    }, onCancel: () => {
      if (this.processing = !1, this.progress = null, m.onCancel)
        return m.onCancel();
    }, onFinish: (S) => {
      if (this.processing = !1, this.progress = null, o = null, m.onFinish)
        return m.onFinish(S);
    } };
    f === "delete" ? sr.delete(p, { ...g, data: O }) : sr[f](p, O, g);
  }, get(f, p) {
    this.submit("get", f, p);
  }, post(f, p) {
    this.submit("post", f, p);
  }, put(f, p) {
    this.submit("put", f, p);
  }, patch(f, p) {
    this.submit("patch", f, p);
  }, delete(f, p) {
    this.submit("delete", f, p);
  }, cancel() {
    o && o.cancel();
  }, __rememberable: r === null, __remember() {
    return { data: this.data(), errors: this.errors };
  }, __restore(f) {
    Object.assign(this, f.data), this.setError(f.errors);
  } });
  return jt(c, (f) => {
    c.isDirty = !Ow(c.data(), a), r && sr.remember(At(f.__remember()), r);
  }, { immediate: !0, deep: !0 }), c;
}
var je = Z(null), mt = Z(null), Zo = nh(null), Ii = Z(null), kc = null;
hr({ name: "Inertia", props: { initialPage: { type: Object, required: !0 }, initialComponent: { type: Object, required: !1 }, resolveComponent: { type: Function, required: !1 }, titleCallback: { type: Function, required: !1, default: (t) => t }, onHeadUpdate: { type: Function, required: !1, default: () => () => {
} } }, setup({ initialPage: t, initialComponent: e, resolveComponent: r, titleCallback: n, onHeadUpdate: i }) {
  je.value = e ? tu(e) : null, mt.value = t, Ii.value = null;
  let a = typeof window > "u";
  return kc = ww(a, n, i), a || (sr.init({ initialPage: t, resolveComponent: r, swapComponent: async (o) => {
    je.value = tu(o.component), mt.value = o.page, Ii.value = o.preserveState ? Ii.value : Date.now();
  } }), sr.on("navigate", () => kc.forceUpdate())), () => {
    if (je.value) {
      je.value.inheritAttrs = !!je.value.inheritAttrs;
      let o = zt(je.value, { ...mt.value.props, key: Ii.value });
      return Zo.value && (je.value.layout = Zo.value, Zo.value = null), je.value.layout ? typeof je.value.layout == "function" ? je.value.layout(zt, o) : (Array.isArray(je.value.layout) ? je.value.layout : [je.value.layout]).concat(o).reverse().reduce((s, u) => (u.inheritAttrs = !!u.inheritAttrs, zt(u, { ...mt.value.props }, () => s))) : o;
    }
  };
} });
function Aw() {
  return hl({ props: le(() => {
    var t;
    return (t = mt.value) == null ? void 0 : t.props;
  }), url: le(() => {
    var t;
    return (t = mt.value) == null ? void 0 : t.url;
  }), component: le(() => {
    var t;
    return (t = mt.value) == null ? void 0 : t.component;
  }), version: le(() => {
    var t;
    return (t = mt.value) == null ? void 0 : t.version;
  }), scrollRegions: le(() => {
    var t;
    return (t = mt.value) == null ? void 0 : t.scrollRegions;
  }), rememberedState: le(() => {
    var t;
    return (t = mt.value) == null ? void 0 : t.rememberedState;
  }) });
}
hr({ props: { title: { type: String, required: !1 } }, data() {
  return { provider: this.$headManager.createProvider() };
}, beforeUnmount() {
  this.provider.disconnect();
}, methods: { isUnaryTag(t) {
  return ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"].indexOf(t.type) > -1;
}, renderTagStart(t) {
  t.props = t.props || {}, t.props.inertia = t.props["head-key"] !== void 0 ? t.props["head-key"] : "";
  let e = Object.keys(t.props).reduce((r, n) => {
    let i = t.props[n];
    return ["key", "head-key"].includes(n) ? r : i === "" ? r + ` ${n}` : r + ` ${n}="${i}"`;
  }, "");
  return `<${t.type}${e}>`;
}, renderTagChildren(t) {
  return typeof t.children == "string" ? t.children : t.children.reduce((e, r) => e + this.renderTag(r), "");
}, isFunctionNode(t) {
  return typeof t.type == "function";
}, isComponentNode(t) {
  return typeof t.type == "object";
}, isCommentNode(t) {
  return /(comment|cmt)/i.test(t.type.toString());
}, isFragmentNode(t) {
  return /(fragment|fgt|symbol\(\))/i.test(t.type.toString());
}, isTextNode(t) {
  return /(text|txt)/i.test(t.type.toString());
}, renderTag(t) {
  if (this.isTextNode(t))
    return t.children;
  if (this.isFragmentNode(t) || this.isCommentNode(t))
    return "";
  let e = this.renderTagStart(t);
  return t.children && (e += this.renderTagChildren(t)), this.isUnaryTag(t) || (e += `</${t.type}>`), e;
}, addTitleElement(t) {
  return this.title && !t.find((e) => e.startsWith("<title")) && t.push(`<title inertia>${this.title}</title>`), t;
}, renderNodes(t) {
  return this.addTitleElement(t.flatMap((e) => this.resolveNode(e)).map((e) => this.renderTag(e)).filter((e) => e));
}, resolveNode(t) {
  return this.isFunctionNode(t) ? this.resolveNode(t.type()) : this.isComponentNode(t) ? (console.warn("Using components in the <Head> component is not supported."), []) : this.isTextNode(t) && t.children ? t : this.isFragmentNode(t) && t.children ? t.children.flatMap((e) => this.resolveNode(e)) : this.isCommentNode(t) ? [] : t;
} }, render() {
  this.provider.update(this.renderNodes(this.$slots.default ? this.$slots.default() : []));
} });
hr({ name: "Link", props: { as: { type: String, default: "a" }, data: { type: Object, default: () => ({}) }, href: { type: String, required: !0 }, method: { type: String, default: "get" }, replace: { type: Boolean, default: !1 }, preserveScroll: { type: Boolean, default: !1 }, preserveState: { type: Boolean, default: null }, only: { type: Array, default: () => [] }, except: { type: Array, default: () => [] }, headers: { type: Object, default: () => ({}) }, queryStringArrayFormat: { type: String, default: "brackets" } }, setup(t, { slots: e, attrs: r }) {
  return () => {
    let n = t.as.toLowerCase(), i = t.method.toLowerCase(), [a, o] = Ul(i, t.href || "", t.data, t.queryStringArrayFormat);
    return n === "a" && i !== "get" && console.warn(`Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${a}" method="${i}" as="button">...</Link>`), zt(t.as, { ...r, ...n === "a" ? { href: a } : {}, onClick: (s) => {
      qd(s) && (s.preventDefault(), sr.visit(a, { data: o, method: i, replace: t.replace, preserveScroll: t.preserveScroll, preserveState: t.preserveState ?? i !== "get", only: t.only, except: t.except, headers: t.headers, onCancelToken: r.onCancelToken || (() => ({})), onBefore: r.onBefore || (() => ({})), onStart: r.onStart || (() => ({})), onProgress: r.onProgress || (() => ({})), onFinish: r.onFinish || (() => ({})), onCancel: r.onCancel || (() => ({})), onSuccess: r.onSuccess || (() => ({})), onError: r.onError || (() => ({})) }));
    } }, e);
  };
} });
function ZE(t) {
  return t.toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
function Cw(t) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP"
  }).format(t);
}
function e4(t) {
  return Aw().props.auth.permissions.includes(t);
}
let Hs = null;
function t4(t) {
  Hs = t;
}
function ri() {
  return Hs === null && console.error(
    `Inertia router is not set. Please set it first:

// app.js
import { setInertiaRouter } from '@nb/vue-components';
import { router } from '@inertiajs/vue3';
// createInertiaApp(...);
setInertiaRouter(router);

`
  ), Hs;
}
const it = hr({
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
  setup(t, { slots: e, attrs: r }) {
    return () => {
      const n = ri(), i = t.as.toLowerCase(), a = t.method.toLowerCase(), [o, s] = Ul(
        a,
        t.href || "",
        t.data,
        t.queryStringArrayFormat
      );
      return i === "a" && a !== "get" && console.warn(
        `Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${o}" method="${a}" as="button">...</Link>`
      ), zt(
        t.as,
        {
          ...r,
          ...i === "a" ? { href: o } : {},
          onClick: (u) => {
            qd(u) && (u.preventDefault(), n.visit(o, {
              data: s,
              method: a,
              replace: t.replace,
              preserveScroll: t.preserveScroll,
              preserveState: t.preserveState ?? a !== "get",
              only: t.only,
              headers: t.headers,
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
        e
      );
    };
  }
});
function ni(t, e, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(o) {
      o(a);
    });
  }
  return new (r || (r = Promise))(function(a, o) {
    function s(f) {
      try {
        c(n.next(f));
      } catch (p) {
        o(p);
      }
    }
    function u(f) {
      try {
        c(n.throw(f));
      } catch (p) {
        o(p);
      }
    }
    function c(f) {
      f.done ? a(f.value) : i(f.value).then(s, u);
    }
    c((n = n.apply(t, e || [])).next());
  });
}
function ii(t, e) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(c) {
    return function(f) {
      return u([c, f]);
    };
  }
  function u(c) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, c[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (a = c[0] & 2 ? i.return : c[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, c[1])).done)
          return a;
        switch (i = 0, a && (c = [c[0] & 2, a.value]), c[0]) {
          case 0:
          case 1:
            a = c;
            break;
          case 4:
            return r.label++, { value: c[1], done: !1 };
          case 5:
            r.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!a || c[1] > a[0] && c[1] < a[3])) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < a[1]) {
              r.label = a[1], a = c;
              break;
            }
            if (a && r.label < a[2]) {
              r.label = a[2], r.ops.push(c);
              break;
            }
            a[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        c = e.call(t, r);
      } catch (f) {
        c = [6, f], i = 0;
      } finally {
        n = a = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function _w(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), i, a = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = n.next()).done; )
      a.push(i.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return a;
}
function kw() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(_w(arguments[e]));
  return t;
}
var Pw = /* @__PURE__ */ new Map([
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
function Da(t, e) {
  var r = Tw(t);
  if (typeof r.path != "string") {
    var n = t.webkitRelativePath;
    Object.defineProperty(r, "path", {
      value: typeof e == "string" ? e : typeof n == "string" && n.length > 0 ? n : t.name,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return r;
}
function Tw(t) {
  var e = t.name, r = e && e.lastIndexOf(".") !== -1;
  if (r && !t.type) {
    var n = e.split(".").pop().toLowerCase(), i = Pw.get(n);
    i && Object.defineProperty(t, "type", {
      value: i,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return t;
}
var $w = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function Iw(t) {
  return ni(this, void 0, void 0, function() {
    return ii(this, function(e) {
      return [2, Dw(t) && t.dataTransfer ? Lw(t.dataTransfer, t.type) : Rw(t)];
    });
  });
}
function Dw(t) {
  return !!t.dataTransfer;
}
function Rw(t) {
  var e = Fw(t.target) ? t.target.files ? Gs(t.target.files) : [] : [];
  return e.map(function(r) {
    return Da(r);
  });
}
function Fw(t) {
  return t !== null;
}
function Lw(t, e) {
  return ni(this, void 0, void 0, function() {
    var r, n;
    return ii(this, function(i) {
      switch (i.label) {
        case 0:
          return t.items ? (r = Gs(t.items).filter(function(a) {
            return a.kind === "file";
          }), e !== "drop" ? [2, r] : [4, Promise.all(r.map(Nw))]) : [3, 2];
        case 1:
          return n = i.sent(), [2, Pc(Wd(n))];
        case 2:
          return [2, Pc(Gs(t.files).map(function(a) {
            return Da(a);
          }))];
      }
    });
  });
}
function Pc(t) {
  return t.filter(function(e) {
    return $w.indexOf(e.name) === -1;
  });
}
function Gs(t) {
  for (var e = [], r = 0; r < t.length; r++) {
    var n = t[r];
    e.push(n);
  }
  return e;
}
function Nw(t) {
  if (typeof t.webkitGetAsEntry != "function")
    return Tc(t);
  var e = t.webkitGetAsEntry();
  return e && e.isDirectory ? Hd(e) : Tc(t);
}
function Wd(t) {
  return t.reduce(function(e, r) {
    return kw(e, Array.isArray(r) ? Wd(r) : [r]);
  }, []);
}
function Tc(t) {
  var e = t.getAsFile();
  if (!e)
    return Promise.reject(t + " is not a File");
  var r = Da(e);
  return Promise.resolve(r);
}
function Mw(t) {
  return ni(this, void 0, void 0, function() {
    return ii(this, function(e) {
      return [2, t.isDirectory ? Hd(t) : Bw(t)];
    });
  });
}
function Hd(t) {
  var e = t.createReader();
  return new Promise(function(r, n) {
    var i = [];
    function a() {
      var o = this;
      e.readEntries(function(s) {
        return ni(o, void 0, void 0, function() {
          var u, c, f;
          return ii(this, function(p) {
            switch (p.label) {
              case 0:
                if (s.length)
                  return [3, 5];
                p.label = 1;
              case 1:
                return p.trys.push([1, 3, , 4]), [4, Promise.all(i)];
              case 2:
                return u = p.sent(), r(u), [3, 4];
              case 3:
                return c = p.sent(), n(c), [3, 4];
              case 4:
                return [3, 6];
              case 5:
                f = Promise.all(s.map(Mw)), i.push(f), a(), p.label = 6;
              case 6:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, function(s) {
        n(s);
      });
    }
    a();
  });
}
function Bw(t) {
  return ni(this, void 0, void 0, function() {
    return ii(this, function(e) {
      return [2, new Promise(function(r, n) {
        t.file(function(i) {
          var a = Da(i, t.fullPath);
          r(a);
        }, function(i) {
          n(i);
        });
      })];
    });
  });
}
var Gd = function(t, e) {
  if (t && e) {
    var r = Array.isArray(e) ? e : e.split(",");
    if (r.length === 0)
      return !0;
    var n = t.name || "", i = (t.type || "").toLowerCase(), a = i.replace(/\/.*$/, "");
    return r.some(function(o) {
      var s = o.trim().toLowerCase();
      return s.charAt(0) === "." ? n.toLowerCase().endsWith(s) : s.endsWith("/*") ? a === s.replace(/\/.*$/, "") : i === s;
    });
  }
  return !0;
}, ze = function() {
  return ze = Object.assign || function(e) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ze.apply(this, arguments);
};
function $c(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
  return r;
}
function jw(t, e, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(o) {
      o(a);
    });
  }
  return new (r || (r = Promise))(function(a, o) {
    function s(f) {
      try {
        c(n.next(f));
      } catch (p) {
        o(p);
      }
    }
    function u(f) {
      try {
        c(n.throw(f));
      } catch (p) {
        o(p);
      }
    }
    function c(f) {
      f.done ? a(f.value) : i(f.value).then(s, u);
    }
    c((n = n.apply(t, e || [])).next());
  });
}
function zw(t, e) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, o;
  return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(c) {
    return function(f) {
      return u([c, f]);
    };
  }
  function u(c) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, c[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (a = c[0] & 2 ? i.return : c[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, c[1])).done)
          return a;
        switch (i = 0, a && (c = [c[0] & 2, a.value]), c[0]) {
          case 0:
          case 1:
            a = c;
            break;
          case 4:
            return r.label++, { value: c[1], done: !1 };
          case 5:
            r.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!a || c[1] > a[0] && c[1] < a[3])) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < a[1]) {
              r.label = a[1], a = c;
              break;
            }
            if (a && r.label < a[2]) {
              r.label = a[2], r.ops.push(c);
              break;
            }
            a[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        c = e.call(t, r);
      } catch (f) {
        c = [6, f], i = 0;
      } finally {
        n = a = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function Ks(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = e.length, a; n < i; n++)
      (a || !(n in e)) && (a || (a = Array.prototype.slice.call(e, 0, n)), a[n] = e[n]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function Uw(t) {
  return t.includes("MSIE") || t.includes("Trident/");
}
function Vw(t) {
  return t.includes("Edge/");
}
function qw(t) {
  return t === void 0 && (t = window.navigator.userAgent), Uw(t) || Vw(t);
}
function Ic(t) {
  t.preventDefault();
}
function Di(t) {
  return t.dataTransfer ? Array.prototype.some.call(t.dataTransfer.types, function(e) {
    return e === "Files" || e === "application/x-moz-file";
  }) : !!t.target && !!t.target.files;
}
function pa(t) {
  return typeof t.isPropagationStopped == "function" ? t.isPropagationStopped() : typeof t.cancelBubble < "u" ? t.cancelBubble : !1;
}
var Ww = "file-invalid-type", Hw = "file-too-large", Gw = "file-too-small", Kw = "too-many-files", Yw = {
  code: Kw,
  message: "Too many files"
}, Jw = function(t) {
  t = Array.isArray(t) && t.length === 1 ? t[0] : t;
  var e = Array.isArray(t) ? "one of ".concat(t.join(", ")) : t;
  return {
    code: Ww,
    message: "File type must be ".concat(e)
  };
};
function En(t) {
  return t != null;
}
var Xw = Gd.default, Qw = Xw || Gd;
function Kd(t, e) {
  var r = t.type === "application/x-moz-file" || Qw(t, e);
  return [r, r ? null : Jw(e)];
}
var Dc = function(t) {
  return {
    code: Hw,
    message: "File is larger than ".concat(t, " bytes")
  };
}, Rc = function(t) {
  return {
    code: Gw,
    message: "File is smaller than ".concat(t, " bytes")
  };
};
function Yd(t, e, r) {
  if (En(t.size) && t.size)
    if (En(e) && En(r)) {
      if (t.size > r)
        return [!1, Dc(r)];
      if (t.size < e)
        return [!1, Rc(e)];
    } else {
      if (En(e) && t.size < e)
        return [!1, Rc(e)];
      if (En(r) && t.size > r)
        return [!1, Dc(r)];
    }
  return [!0, null];
}
function Ct() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return function(r) {
    for (var n = [], i = 1; i < arguments.length; i++)
      n[i - 1] = arguments[i];
    return t.some(function(a) {
      return !pa(r) && a && a.apply(void 0, Ks([r], n, !1)), pa(r);
    });
  };
}
function Zw(t) {
  var e = t.files, r = t.accept, n = t.minSize, i = t.maxSize, a = t.multiple, o = t.maxFiles;
  return !a && e.length > 1 || a && o >= 1 && e.length > o ? !1 : e.every(function(s) {
    var u = Kd(s, r)[0], c = Yd(s, n, i)[0];
    return u && c;
  });
}
var e2 = {
  disabled: !1,
  getFilesFromEvent: Iw,
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
function Jd(t) {
  t === void 0 && (t = {});
  var e = Z(ze(ze({}, e2), t));
  jt(function() {
    return ze({}, t);
  }, function(R) {
    e.value = ze(ze({}, e.value), R);
  });
  var r = Z(), n = Z(), i = hl({
    isFocused: !1,
    isFileDialogActive: !1,
    isDragActive: !1,
    isDragAccept: !1,
    isDragReject: !1,
    draggedFiles: [],
    acceptedFiles: [],
    fileRejections: []
  }), a = function() {
    n.value && (i.isFileDialogActive = !0, n.value.value = "", n.value.click());
  }, o = function() {
    var R = e.value.onFileDialogCancel;
    i.isFileDialogActive && setTimeout(function() {
      if (n.value) {
        var V = n.value.files;
        V && !V.length && (i.isFileDialogActive = !1, typeof R == "function" && R());
      }
    }, 300);
  };
  function s() {
    i.isFocused = !0;
  }
  function u() {
    i.isFocused = !1;
  }
  function c() {
    var R = e.value.noClick;
    R || (qw() ? setTimeout(a, 0) : a());
  }
  var f = Z([]), p = function(R) {
    if (r.value) {
      var V = r.value.$el || r.value;
      V.contains(R.target) || (R.preventDefault(), f.value = []);
    }
  };
  Je(function() {
    window.addEventListener("focus", o, !1);
    var R = e.value.preventDropOnDocument;
    R && (document.addEventListener("dragover", Ic, !1), document.addEventListener("drop", p, !1));
  }), Kn(function() {
    window.removeEventListener("focus", o, !1);
    var R = e.value.preventDropOnDocument;
    R && (document.removeEventListener("dragover", Ic), document.removeEventListener("drop", p));
  });
  function m(R) {
    var V = e.value.noDragEventsBubbling;
    V && R.stopPropagation();
  }
  function O(R) {
    return jw(this, void 0, void 0, function() {
      var V, h, b, x, y;
      return zw(this, function(U) {
        switch (U.label) {
          case 0:
            return V = e.value, h = V.getFilesFromEvent, b = V.noDragEventsBubbling, x = V.onDragEnter, R.preventDefault(), m(R), f.value = Ks(Ks([], f.value, !0), [R.target], !1), Di(R) ? h ? [4, h(R)] : [2] : [3, 2];
          case 1:
            if (y = U.sent(), y || (y = []), pa(R) && !b)
              return [2];
            i.draggedFiles = y, i.isDragActive = !0, x && x(R), U.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }
  function g(R) {
    var V = e.value.onDragOver;
    if (R.preventDefault(), m(R), R.dataTransfer)
      try {
        R.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return Di(R) && V && V(R), !1;
  }
  function S(R) {
    R.preventDefault(), m(R);
    var V = f.value.filter(function(x) {
      if (!r.value)
        return !1;
      var y = r.value.$el || r.value;
      return y.contains(x);
    }), h = V.indexOf(R.target);
    if (h !== -1 && V.splice(h, 1), f.value = V, !(V.length > 0)) {
      i.draggedFiles = [], i.isDragActive = !1;
      var b = e.value.onDragLeave;
      Di(R) && b && b(R);
    }
  }
  function v(R) {
    R.preventDefault(), m(R), f.value = [];
    var V = e.value, h = V.getFilesFromEvent, b = V.noDragEventsBubbling, x = V.accept, y = V.minSize, U = V.maxSize, L = V.multiple, F = V.maxFiles, W = V.onDrop, Y = V.onDropRejected, Xe = V.onDropAccepted;
    if (Di(R)) {
      if (!h)
        return;
      Promise.resolve(h(R)).then(function(Dt) {
        if (!(pa(R) && !b)) {
          var we = [], Qe = [];
          Dt.forEach(function(ie) {
            var Gt = Kd(ie, x), tn = Gt[0], Be = Gt[1], Kt = Yd(ie, y, U), gr = Kt[0], Yt = Kt[1];
            if (tn && gr)
              we.push(ie);
            else {
              var Jt = [Be, Yt].filter(function(yr) {
                return yr;
              });
              Qe.push({ file: ie, errors: Jt });
            }
          }), (!L && we.length > 1 || L && F >= 1 && we.length > F) && (we.forEach(function(ie) {
            Qe.push({ file: ie, errors: [Yw] });
          }), we.splice(0)), i.acceptedFiles = we, i.fileRejections = Qe, W && W(we, Qe, R), Qe.length > 0 && Y && Y(Qe, R), we.length > 0 && Xe && Xe(we, R);
        }
      });
    }
    i.isFileDialogActive = !1, i.isDragActive = !1, i.draggedFiles = [], i.acceptedFiles = [], i.fileRejections = [];
  }
  var C = function(R) {
    return e.value.disabled ? void 0 : R;
  }, P = function(R) {
    return e.value.noKeyboard ? void 0 : C(R);
  }, E = function(R) {
    return e.value.noDrag ? void 0 : C(R);
  }, _ = function(R) {
    R === void 0 && (R = {});
    var V = R.onFocus, h = R.onBlur, b = R.onClick, x = R.onDragEnter, y = R.onDragenter, U = R.onDragOver, L = R.onDragover, F = R.onDragLeave, W = R.onDragleave, Y = R.onDrop, Xe = $c(R, ["onFocus", "onBlur", "onClick", "onDragEnter", "onDragenter", "onDragOver", "onDragover", "onDragLeave", "onDragleave", "onDrop"]);
    return ze(ze({ onFocus: P(Ct(V, s)), onBlur: P(Ct(h, u)), onClick: C(Ct(b, c)), onDragenter: E(Ct(x, y, O)), onDragover: E(Ct(U, L, g)), onDragleave: E(Ct(F, W, S)), onDrop: E(Ct(Y, v)), ref: r }, !e.value.disabled && !e.value.noKeyboard ? { tabIndex: 0 } : {}), Xe);
  }, I = function(R) {
    R.stopPropagation();
  };
  function j(R) {
    R === void 0 && (R = {});
    var V = R.onChange, h = R.onClick, b = $c(R, ["onChange", "onClick"]), x = {
      accept: e.value.accept,
      multiple: e.value.multiple,
      style: "display: none",
      type: "file",
      onChange: C(Ct(V, v)),
      onClick: C(Ct(h, I)),
      autoComplete: "off",
      tabIndex: -1,
      ref: n
    };
    return ze(ze({}, x), b);
  }
  var z = le(function() {
    return i.draggedFiles ? i.draggedFiles.length : 0;
  }), B = le(function() {
    return z.value > 0 && Zw({
      files: i.draggedFiles,
      accept: e.value.accept,
      minSize: e.value.minSize,
      maxSize: e.value.maxSize,
      multiple: e.value.multiple,
      maxFiles: e.value.maxFiles
    });
  }), N = le(function() {
    return z.value > 0 && !B.value;
  });
  return ze(ze({}, ih(i)), { isDragAccept: B, isDragReject: N, isFocused: le(function() {
    return i.isFocused && !e.value.disabled;
  }), getRootProps: _, getInputProps: j, rootRef: r, inputRef: n, open: C(a) });
}
const t2 = { class: "flex w-full flex-col" }, r2 = {
  key: 0,
  class: "select-none text-black"
}, n2 = ["name"], i2 = {
  key: 1,
  class: "select-none"
}, a2 = { key: 2 }, o2 = {
  key: 3,
  class: "select-none"
}, r4 = {
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
  setup(t) {
    ri();
    const e = t, r = Z(null), n = (c) => {
      let f = [];
      return c.split("_").join(" ").split(" ").map(function(p) {
        f.push(p[0].toUpperCase() + p.slice(1));
      }), f.join(" ");
    }, i = (c, f) => {
      var p;
      if (r.value = null, f && f.length > 0) {
        f[0].errors && (r.value = (p = f[0]) == null ? void 0 : p.errors.map((m) => m.message).join(", ")), console.error(f);
        return;
      }
      if (!c || c.length === 0) {
        r.value = `${e.field} is required`;
        return;
      }
      e.multiple ? e.form[e.field] = c : e.form[e.field] = c[0];
    }, { getRootProps: a, getInputProps: o, isDragActive: s, ...u } = Jd({
      onDrop: i,
      multiple: e.multiple,
      accept: e.accept
    });
    return (c, f) => {
      var p;
      return A(), T("div", t2, [
        D("div", {
          class: X(["w-full rounded-lg border-2 border-dashed border-primary-200 bg-primary-50 text-primary-200 transition duration-100 ease-in-out hover:border-primary-600 hover:text-primary", {
            "border-primary-400 bg-primary-100": q(s),
            "border-red-600 bg-primary-100": e.form.errors[t.field] ?? r.value
          }])
        }, [
          D("div", Mn({ class: "p-4' flex h-20 w-full cursor-copy flex-col items-center justify-center font-medium" }, q(a)()), [
            t.label ? (A(), T("p", r2, Q(t.label), 1)) : K("", !0),
            D("input", Mn(q(o)(), { name: t.field }), null, 16, n2),
            q(s) ? (A(), T("span", i2, "Drop the " + Q(n(t.field)) + " here ...", 1)) : t.form[t.field] ? (A(), T("span", a2, Q(((p = t.form[t.field]) == null ? void 0 : p.path) ?? "File prepared"), 1)) : (A(), T("span", o2, "Drag 'n' drop " + Q(n(t.field)) + " here", 1))
          ], 16)
        ], 2),
        ve(q(Qn), {
          class: "mt-2",
          message: e.form.errors[t.field] ?? r.value
        }, null, 8, ["message"])
      ]);
    };
  }
}, s2 = { class: "flex w-full" }, l2 = { key: 0 }, u2 = { key: 1 }, c2 = {
  key: 0,
  class: "flex flex-wrap gap-2 p-4"
}, f2 = ["onClick"], d2 = ["src"], p2 = ["value"], h2 = { class: "flex items-center gap-4" }, m2 = {
  key: 0,
  class: "text-sm text-gray-600"
}, g2 = {
  key: 1,
  class: "mt-2"
}, y2 = { class: "container mx-auto px-5 py-2 lg:px-8 lg:pt-8" }, b2 = { class: "-m-1 flex flex-wrap md:-m-2" }, v2 = { class: "flex w-1/3 flex-wrap" }, w2 = { class: "h-full w-full p-1 shadow md:p-2" }, x2 = ["src"], n4 = {
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
  setup(t) {
    const e = ri(), r = t, n = Ew({
      image: []
    });
    function i() {
      let p = new FormData();
      n.image.forEach((m, O) => {
        p.append(`image[${O}]`, m.file);
      }), p.append("item_type", r.itemType), p.append("item_id", r.itemId), e.post(route(r.endPoint), p, {
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
    function a(p) {
      p.forEach((m) => {
        let O = new FileReader();
        O.onload = (g) => {
          n.image.push({ file: m, dataUrl: g.target.result });
        }, O.readAsDataURL(m);
      });
    }
    const o = (p, m) => {
      if (m && m.length > 0) {
        console.error(m);
        return;
      }
      a(p);
    };
    function s(p) {
      n.image.splice(p, 1);
    }
    const { getRootProps: u, getInputProps: c, ...f } = Jd({
      onDrop: o,
      multiple: !0,
      accept: "image/*"
    });
    return (p, m) => (A(), T(fe, null, [
      t.canUpload ? (A(), T("form", {
        key: 0,
        onSubmit: Mt(i, ["prevent"]),
        class: "w-full"
      }, [
        D("div", s2, [
          D("div", {
            class: X(["w-full rounded-l-lg border-2 border-r-0 border-dashed border-primary-200 bg-primary-50 transition duration-100 ease-in-out hover:border-primary-600 hover:text-primary", { "border-primary-400 bg-primary-100": p.dragEneted }])
          }, [
            D("div", Mn({ class: "p-4' flex h-20 w-full cursor-copy items-center justify-center font-medium" }, q(u)()), [
              D("input", Ge(tt(q(c)())), null, 16),
              p.isDragActive ? (A(), T("span", l2, "Drop the files here ...")) : (A(), T("span", u2, "Drag 'n' drop images here"))
            ], 16),
            q(n).image.length > 0 ? (A(), T("div", c2, [
              (A(!0), T(fe, null, Ye(q(n).image, (O, g) => (A(), T("div", {
                class: "relative cursor-pointer select-none",
                onClick: (S) => s(g),
                key: g
              }, [
                m[0] || (m[0] = D("div", { class: "absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 font-bold text-white" }, " - ", -1)),
                D("img", {
                  src: O.dataUrl,
                  class: "h-auto max-w-[150px]"
                }, null, 8, d2)
              ], 8, f2))), 128))
            ])) : K("", !0)
          ], 2),
          ve(q(Yp), {
            class: X(["inline rounded-l-none", { "cursor-not-allowed": q(n).image.length == 0 }]),
            disabled: q(n).image.length == 0
          }, {
            default: ye(() => m[1] || (m[1] = [
              ge(" Upload ")
            ])),
            _: 1
          }, 8, ["class", "disabled"]),
          q(n).progress ? (A(), T("progress", {
            key: 0,
            value: q(n).progress.percentage,
            max: "100"
          }, Q(q(n).progress.percentage) + "%", 9, p2)) : K("", !0)
        ]),
        p.$page.props.errors.image ? (A(), oe(q(Qn), {
          key: 0,
          class: "mt-2",
          message: p.$page.props.errors.image
        }, null, 8, ["message"])) : K("", !0),
        D("div", h2, [
          ve(lr, {
            "enter-from-class": "opacity-0",
            "leave-to-class": "opacity-0",
            class: "transition ease-in-out"
          }, {
            default: ye(() => [
              q(n).recentlySuccessful ? (A(), T("p", m2, "Images uploaded.")) : K("", !0)
            ]),
            _: 1
          })
        ])
      ], 32)) : K("", !0),
      t.images.length ? (A(), T("div", g2, [
        m[3] || (m[3] = D("hr", null, null, -1)),
        D("div", y2, [
          D("div", b2, [
            (A(!0), T(fe, null, Ye(t.images, (O) => (A(), T("div", v2, [
              D("div", w2, [
                D("img", {
                  alt: "gallery",
                  class: "block h-auto w-auto rounded-lg object-cover object-center",
                  src: O.url
                }, null, 8, x2),
                t.canUpload ? (A(), oe(q(it), {
                  key: 0,
                  href: p.route("images.delete", O.id),
                  method: "delete",
                  class: "mt-1 w-full items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-center text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700",
                  as: "button"
                }, {
                  default: ye(() => m[2] || (m[2] = [
                    ge(" Delete Image ")
                  ])),
                  _: 2
                }, 1032, ["href"])) : K("", !0)
              ])
            ]))), 256))
          ])
        ])
      ])) : K("", !0)
    ], 64));
  }
}, S2 = { class: "mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]" }, O2 = ["name", "value", "id", "checked"], E2 = ["for"], i4 = {
  __name: "RadioButton",
  props: {
    id: String,
    name: String,
    value: String | null,
    isChecked: {
      type: Boolean,
      default: !1
    },
    modelValue: String,
    // This is used with v-model on the parent component
    label: String
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const r = e, n = (i) => {
      r("update:modelValue", i.target.value);
    };
    return (i, a) => (A(), T("div", S2, [
      D("input", {
        class: "relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 ring-accent before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-accent checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-accent checked:after:bg-accent checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-accent checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px] checked:focus:before:shadow-primary checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]",
        type: "radio",
        name: t.name,
        value: t.value,
        id: t.id,
        checked: t.modelValue === t.value,
        onChange: n
      }, null, 40, O2),
      D("label", {
        class: "mt-px inline-block pl-[0.15rem] hover:cursor-pointer",
        for: t.id
      }, Q(t.label), 9, E2)
    ]));
  }
}, A2 = {
  key: 0,
  class: "absolute inset-2 flex items-center justify-center"
}, Fc = {
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
  setup(t) {
    return (e, r) => {
      var n;
      return A(), oe(q(Yp), {
        disabled: t.loading || ((n = t.form) == null ? void 0 : n.processing) || t.disabled,
        type: t.type,
        class: "focusable"
      }, {
        default: ye(() => {
          var i, a;
          return [
            D("div", {
              class: X({ "opacity-25": ((i = t.form) == null ? void 0 : i.processing) || t.loading })
            }, [
              J(e.$slots, "default")
            ], 2),
            (a = t.form) != null && a.processing || t.loading ? (A(), T("div", A2, [
              ve(q(Jp), { class: "aspect-square !h-full !w-auto text-white" })
            ])) : K("", !0)
          ];
        }),
        _: 3
      }, 8, ["disabled", "type"]);
    };
  }
}, C2 = ["id"], _2 = {
  key: 0,
  class: "text-sm text-gray-600"
}, k2 = { class: "flex flex-col" }, a4 = {
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
  setup(t) {
    const e = ri(), r = t, n = Z(null), i = Z(null), a = Z(null), o = Z(null), s = () => {
      const f = n.value, p = f.getBoundingClientRect().top, m = document.querySelector("nav").offsetHeight, O = p - m, g = a.value, S = f.getBoundingClientRect().height + p - m * 2;
      if (O <= 0 && S > 0) {
        if (g.dataset.sticky === "true")
          return;
        g.style.display = "block", g.dataset.sticky = "true", g.style.top = `${m}px`, g.style.width = i.value.offsetWidth + "px";
        return;
      }
      g.dataset.sticky = "", g.style.display = "";
    }, u = () => {
      o.value.style.marginLeft = -i.value.scrollLeft + "px";
    }, c = () => {
      if (!n.value)
        return;
      const f = n.value.querySelector("thead tr");
      let p = o.value;
      p.innerHTML = "";
      let m = f == null ? void 0 : f.querySelectorAll("th");
      m == null || m.forEach((g) => {
        const S = g.cloneNode(!0);
        S.style.width = g.offsetWidth + "px", p.appendChild(S);
      });
      const O = a.value;
      O.style.width = i.value.offsetWidth + "px";
    };
    return r.sticky && (e.on("navigate", () => {
      ah(() => {
        c();
      });
    }), Je(() => {
      c(), window.addEventListener("scroll", s, { passive: !0 }), window.addEventListener("resize", c, { passive: !0 }), i.value.addEventListener("scroll", u, { passive: !0 });
    }), Kn(() => {
      var f;
      window.removeEventListener("scroll", s), window.removeEventListener("resize", c), (f = i.value) == null || f.removeEventListener("scroll", u);
    })), (f, p) => (A(), T("div", {
      class: X({
        "!visible hidden": t.collapsable,
        "overflow-hidden": t.overflow
      }),
      id: t.collapse_id,
      "data-te-collapse-item": ""
    }, [
      t.total ? (A(), T("p", _2, "Found: " + Q(t.total), 1)) : K("", !0),
      D("div", k2, [
        D("div", {
          class: X({ "overflow-x-auto": t.overflow }),
          ref_key: "table_container",
          ref: i
        }, [
          D("table", {
            class: X(["min-w-full text-left text-sm font-light", {
              "mb-14 [&>*>tr]:border-l-4 [&>*>tr]:border-l-primary-500": t.collapsable,
              " border-separate border-spacing-y-5 px-2": t.seperate
            }]),
            ref_key: "table",
            ref: n
          }, [
            t.sticky ? (A(), T("div", {
              key: 0,
              ref_key: "sticky_wrapper",
              ref: a,
              class: "fixed isolate z-40 hidden w-full overflow-hidden bg-neutral-100"
            }, [
              D("div", {
                ref_key: "sticky_header",
                ref: o,
                class: "w-max [&>th]:align-middle"
              }, null, 512)
            ], 512)) : K("", !0),
            J(f.$slots, "default")
          ], 2)
        ], 2)
      ]),
      f.$slots.pagination ? J(f.$slots, "pagination", { key: 1 }) : t.links ? (A(), oe(q(Kp), {
        key: 2,
        class: "mt-6",
        links: t.links,
        showPerPage: t.showPerPage,
        defaultPerPage: t.defaultPerPage
      }, null, 8, ["links", "showPerPage", "defaultPerPage"])) : K("", !0)
    ], 10, C2));
  }
}, P2 = {}, T2 = { class: "border-b bg-neutral-100 font-medium dark:border-neutral-500" };
function $2(t, e) {
  return A(), T("thead", T2, [
    J(t.$slots, "default")
  ]);
}
const o4 = /* @__PURE__ */ Jr(P2, [["render", $2]]), I2 = { class: "flex items-center justify-between" }, D2 = {
  key: 0,
  class: "order-arrows flex h-full w-4 items-center md:right-4"
}, s4 = {
  __name: "Th",
  props: {
    orderBy: String
  },
  setup(t) {
    Xn.add($g, kg);
    const e = t, r = Z("asc"), n = Z(!1);
    let i = null;
    const a = ri();
    Je(() => {
      e.orderBy && (i = a.on("navigate", o));
    }), Kn(() => {
      i == null || i();
    });
    const o = () => {
      const c = route().params;
      if (c.order_by === e.orderBy) {
        r.value = c.order_dir, n.value = !0;
        return;
      }
      n.value = !1;
    }, s = () => {
      if (!e.orderBy)
        return;
      const c = r.value === "asc" ? "desc" : "asc", f = route().params;
      f.order_by = e.orderBy, f.order_dir = c, a.get(route(route().current()), f, {
        preserveState: !0
      }), r.value = c, n.value = !0;
    }, u = (c) => r.value === c && n.value ? "active text-primary" : "text-gray-400";
    return (c, f) => (A(), T("th", {
      scope: "col",
      class: X(["relative py-4 text-center md:px-6 md:text-left", t.orderBy ? "cursor-pointer" : ""]),
      onClick: s
    }, [
      D("div", I2, [
        J(c.$slots, "default"),
        t.orderBy ? (A(), T("span", D2, [
          ve(q(gt), {
            icon: "fa-sort-up",
            class: X(["absolute", u("desc")])
          }, null, 8, ["class"]),
          ve(q(gt), {
            icon: "fa-sort-down",
            class: X(["absolute", u("asc")])
          }, null, 8, ["class"])
        ])) : K("", !0)
      ])
    ], 2));
  }
}, R2 = {}, F2 = { class: "whitespace-nowrap py-2 text-center md:px-6 md:py-4 md:text-left" };
function L2(t, e) {
  return A(), T("td", F2, [
    J(t.$slots, "default")
  ]);
}
const N2 = /* @__PURE__ */ Jr(R2, [["render", L2]]), M2 = ["data-te-target", "aria-controls"], l4 = {
  __name: "TrCollapseHandler",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(t) {
    return (e, r) => (A(), T("tr", {
      "data-te-collapse-init": "",
      "data-te-target": "#" + t.collapse_id,
      "aria-expanded": "false",
      "aria-controls": t.collapse_id
    }, [
      J(e.$slots, "default")
    ], 8, M2));
  }
}, B2 = { colspan: "999" }, j2 = ["id"], u4 = {
  __name: "TrCollapse",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(t) {
    return (e, r) => (A(), T("tr", null, [
      D("td", B2, [
        D("div", {
          id: t.collapse_id,
          class: "!visible hidden",
          "data-te-collapse-item": ""
        }, [
          J(e.$slots, "default")
        ], 8, j2)
      ])
    ]));
  }
};
var Vl = { exports: {} }, re = String, Xd = function() {
  return { isColorSupported: !1, reset: re, bold: re, dim: re, italic: re, underline: re, inverse: re, hidden: re, strikethrough: re, black: re, red: re, green: re, yellow: re, blue: re, magenta: re, cyan: re, white: re, gray: re, bgBlack: re, bgRed: re, bgGreen: re, bgYellow: re, bgBlue: re, bgMagenta: re, bgCyan: re, bgWhite: re, blackBright: re, redBright: re, greenBright: re, yellowBright: re, blueBright: re, magentaBright: re, cyanBright: re, whiteBright: re, bgBlackBright: re, bgRedBright: re, bgGreenBright: re, bgYellowBright: re, bgBlueBright: re, bgMagentaBright: re, bgCyanBright: re, bgWhiteBright: re };
};
Vl.exports = Xd();
Vl.exports.createColors = Xd;
var z2 = Vl.exports;
let Lc = z2, Nc = Me, Ys = class Qd extends Error {
  constructor(e, r, n, i, a, o) {
    super(e), this.name = "CssSyntaxError", this.reason = e, a && (this.file = a), i && (this.source = i), o && (this.plugin = o), typeof r < "u" && typeof n < "u" && (typeof r == "number" ? (this.line = r, this.column = n) : (this.line = r.line, this.column = r.column, this.endLine = n.line, this.endColumn = n.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, Qd);
  }
  setMessage() {
    this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
  }
  showSourceCode(e) {
    if (!this.source)
      return "";
    let r = this.source;
    e == null && (e = Lc.isColorSupported);
    let n = (f) => f, i = (f) => f, a = (f) => f;
    if (e) {
      let { bold: f, gray: p, red: m } = Lc.createColors(!0);
      i = (O) => f(m(O)), n = (O) => p(O), Nc && (a = (O) => Nc(O));
    }
    let o = r.split(/\r?\n/), s = Math.max(this.line - 3, 0), u = Math.min(this.line + 2, o.length), c = String(u).length;
    return o.slice(s, u).map((f, p) => {
      let m = s + 1 + p, O = " " + (" " + m).slice(-c) + " | ";
      if (m === this.line) {
        if (f.length > 160) {
          let S = 20, v = Math.max(0, this.column - S), C = Math.max(
            this.column + S,
            this.endColumn + S
          ), P = f.slice(v, C), E = n(O.replace(/\d/g, " ")) + f.slice(0, Math.min(this.column - 1, S - 1)).replace(/[^\t]/g, " ");
          return i(">") + n(O) + a(P) + `
 ` + E + i("^");
        }
        let g = n(O.replace(/\d/g, " ")) + f.slice(0, this.column - 1).replace(/[^\t]/g, " ");
        return i(">") + n(O) + a(f) + `
 ` + g + i("^");
      }
      return " " + n(O) + a(f);
    }).join(`
`);
  }
  toString() {
    let e = this.showSourceCode();
    return e && (e = `

` + e + `
`), this.name + ": " + this.message + e;
  }
};
var ql = Ys;
Ys.default = Ys;
const Mc = {
  after: `
`,
  beforeClose: `
`,
  beforeComment: `
`,
  beforeDecl: `
`,
  beforeOpen: " ",
  beforeRule: `
`,
  colon: ": ",
  commentLeft: " ",
  commentRight: " ",
  emptyBody: "",
  indent: "    ",
  semicolon: !1
};
function U2(t) {
  return t[0].toUpperCase() + t.slice(1);
}
let Js = class {
  constructor(e) {
    this.builder = e;
  }
  atrule(e, r) {
    let n = "@" + e.name, i = e.params ? this.rawValue(e, "params") : "";
    if (typeof e.raws.afterName < "u" ? n += e.raws.afterName : i && (n += " "), e.nodes)
      this.block(e, n + i);
    else {
      let a = (e.raws.between || "") + (r ? ";" : "");
      this.builder(n + i + a, e);
    }
  }
  beforeAfter(e, r) {
    let n;
    e.type === "decl" ? n = this.raw(e, null, "beforeDecl") : e.type === "comment" ? n = this.raw(e, null, "beforeComment") : r === "before" ? n = this.raw(e, null, "beforeRule") : n = this.raw(e, null, "beforeClose");
    let i = e.parent, a = 0;
    for (; i && i.type !== "root"; )
      a += 1, i = i.parent;
    if (n.includes(`
`)) {
      let o = this.raw(e, null, "indent");
      if (o.length)
        for (let s = 0; s < a; s++)
          n += o;
    }
    return n;
  }
  block(e, r) {
    let n = this.raw(e, "between", "beforeOpen");
    this.builder(r + n + "{", e, "start");
    let i;
    e.nodes && e.nodes.length ? (this.body(e), i = this.raw(e, "after")) : i = this.raw(e, "after", "emptyBody"), i && this.builder(i), this.builder("}", e, "end");
  }
  body(e) {
    let r = e.nodes.length - 1;
    for (; r > 0 && e.nodes[r].type === "comment"; )
      r -= 1;
    let n = this.raw(e, "semicolon");
    for (let i = 0; i < e.nodes.length; i++) {
      let a = e.nodes[i], o = this.raw(a, "before");
      o && this.builder(o), this.stringify(a, r !== i || n);
    }
  }
  comment(e) {
    let r = this.raw(e, "left", "commentLeft"), n = this.raw(e, "right", "commentRight");
    this.builder("/*" + r + e.text + n + "*/", e);
  }
  decl(e, r) {
    let n = this.raw(e, "between", "colon"), i = e.prop + n + this.rawValue(e, "value");
    e.important && (i += e.raws.important || " !important"), r && (i += ";"), this.builder(i, e);
  }
  document(e) {
    this.body(e);
  }
  raw(e, r, n) {
    let i;
    if (n || (n = r), r && (i = e.raws[r], typeof i < "u"))
      return i;
    let a = e.parent;
    if (n === "before" && (!a || a.type === "root" && a.first === e || a && a.type === "document"))
      return "";
    if (!a)
      return Mc[n];
    let o = e.root();
    if (o.rawCache || (o.rawCache = {}), typeof o.rawCache[n] < "u")
      return o.rawCache[n];
    if (n === "before" || n === "after")
      return this.beforeAfter(e, n);
    {
      let s = "raw" + U2(n);
      this[s] ? i = this[s](o, e) : o.walk((u) => {
        if (i = u.raws[r], typeof i < "u")
          return !1;
      });
    }
    return typeof i > "u" && (i = Mc[n]), o.rawCache[n] = i, i;
  }
  rawBeforeClose(e) {
    let r;
    return e.walk((n) => {
      if (n.nodes && n.nodes.length > 0 && typeof n.raws.after < "u")
        return r = n.raws.after, r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")), !1;
    }), r && (r = r.replace(/\S/g, "")), r;
  }
  rawBeforeComment(e, r) {
    let n;
    return e.walkComments((i) => {
      if (typeof i.raws.before < "u")
        return n = i.raws.before, n.includes(`
`) && (n = n.replace(/[^\n]+$/, "")), !1;
    }), typeof n > "u" ? n = this.raw(r, null, "beforeDecl") : n && (n = n.replace(/\S/g, "")), n;
  }
  rawBeforeDecl(e, r) {
    let n;
    return e.walkDecls((i) => {
      if (typeof i.raws.before < "u")
        return n = i.raws.before, n.includes(`
`) && (n = n.replace(/[^\n]+$/, "")), !1;
    }), typeof n > "u" ? n = this.raw(r, null, "beforeRule") : n && (n = n.replace(/\S/g, "")), n;
  }
  rawBeforeOpen(e) {
    let r;
    return e.walk((n) => {
      if (n.type !== "decl" && (r = n.raws.between, typeof r < "u"))
        return !1;
    }), r;
  }
  rawBeforeRule(e) {
    let r;
    return e.walk((n) => {
      if (n.nodes && (n.parent !== e || e.first !== n) && typeof n.raws.before < "u")
        return r = n.raws.before, r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")), !1;
    }), r && (r = r.replace(/\S/g, "")), r;
  }
  rawColon(e) {
    let r;
    return e.walkDecls((n) => {
      if (typeof n.raws.between < "u")
        return r = n.raws.between.replace(/[^\s:]/g, ""), !1;
    }), r;
  }
  rawEmptyBody(e) {
    let r;
    return e.walk((n) => {
      if (n.nodes && n.nodes.length === 0 && (r = n.raws.after, typeof r < "u"))
        return !1;
    }), r;
  }
  rawIndent(e) {
    if (e.raws.indent)
      return e.raws.indent;
    let r;
    return e.walk((n) => {
      let i = n.parent;
      if (i && i !== e && i.parent && i.parent === e && typeof n.raws.before < "u") {
        let a = n.raws.before.split(`
`);
        return r = a[a.length - 1], r = r.replace(/\S/g, ""), !1;
      }
    }), r;
  }
  rawSemicolon(e) {
    let r;
    return e.walk((n) => {
      if (n.nodes && n.nodes.length && n.last.type === "decl" && (r = n.raws.semicolon, typeof r < "u"))
        return !1;
    }), r;
  }
  rawValue(e, r) {
    let n = e[r], i = e.raws[r];
    return i && i.value === n ? i.raw : n;
  }
  root(e) {
    this.body(e), e.raws.after && this.builder(e.raws.after);
  }
  rule(e) {
    this.block(e, this.rawValue(e, "selector")), e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, "end");
  }
  stringify(e, r) {
    if (!this[e.type])
      throw new Error(
        "Unknown AST node type " + e.type + ". Maybe you need to change PostCSS stringifier."
      );
    this[e.type](e, r);
  }
};
var Zd = Js;
Js.default = Js;
let V2 = Zd;
function Xs(t, e) {
  new V2(e).stringify(t);
}
var Ra = Xs;
Xs.default = Xs;
var ai = {};
ai.isClean = Symbol("isClean");
ai.my = Symbol("my");
let q2 = ql, W2 = Zd, H2 = Ra, { isClean: An, my: G2 } = ai;
function Qs(t, e) {
  let r = new t.constructor();
  for (let n in t) {
    if (!Object.prototype.hasOwnProperty.call(t, n) || n === "proxyCache")
      continue;
    let i = t[n], a = typeof i;
    n === "parent" && a === "object" ? e && (r[n] = e) : n === "source" ? r[n] = i : Array.isArray(i) ? r[n] = i.map((o) => Qs(o, r)) : (a === "object" && i !== null && (i = Qs(i)), r[n] = i);
  }
  return r;
}
function Cn(t, e) {
  if (e && typeof e.offset < "u")
    return e.offset;
  let r = 1, n = 1, i = 0;
  for (let a = 0; a < t.length; a++) {
    if (n === e.line && r === e.column) {
      i = a;
      break;
    }
    t[a] === `
` ? (r = 1, n += 1) : r += 1;
  }
  return i;
}
let Zs = class {
  constructor(e = {}) {
    this.raws = {}, this[An] = !1, this[G2] = !0;
    for (let r in e)
      if (r === "nodes") {
        this.nodes = [];
        for (let n of e[r])
          typeof n.clone == "function" ? this.append(n.clone()) : this.append(n);
      } else
        this[r] = e[r];
  }
  addToError(e) {
    if (e.postcssNode = this, e.stack && this.source && /\n\s{4}at /.test(e.stack)) {
      let r = this.source;
      e.stack = e.stack.replace(
        /\n\s{4}at /,
        `$&${r.input.from}:${r.start.line}:${r.start.column}$&`
      );
    }
    return e;
  }
  after(e) {
    return this.parent.insertAfter(this, e), this;
  }
  assign(e = {}) {
    for (let r in e)
      this[r] = e[r];
    return this;
  }
  before(e) {
    return this.parent.insertBefore(this, e), this;
  }
  cleanRaws(e) {
    delete this.raws.before, delete this.raws.after, e || delete this.raws.between;
  }
  clone(e = {}) {
    let r = Qs(this);
    for (let n in e)
      r[n] = e[n];
    return r;
  }
  cloneAfter(e = {}) {
    let r = this.clone(e);
    return this.parent.insertAfter(this, r), r;
  }
  cloneBefore(e = {}) {
    let r = this.clone(e);
    return this.parent.insertBefore(this, r), r;
  }
  error(e, r = {}) {
    if (this.source) {
      let { end: n, start: i } = this.rangeBy(r);
      return this.source.input.error(
        e,
        { column: i.column, line: i.line },
        { column: n.column, line: n.line },
        r
      );
    }
    return new q2(e);
  }
  getProxyProcessor() {
    return {
      get(e, r) {
        return r === "proxyOf" ? e : r === "root" ? () => e.root().toProxy() : e[r];
      },
      set(e, r, n) {
        return e[r] === n || (e[r] = n, (r === "prop" || r === "value" || r === "name" || r === "params" || r === "important" || /* c8 ignore next */
        r === "text") && e.markDirty()), !0;
      }
    };
  }
  /* c8 ignore next 3 */
  markClean() {
    this[An] = !0;
  }
  markDirty() {
    if (this[An]) {
      this[An] = !1;
      let e = this;
      for (; e = e.parent; )
        e[An] = !1;
    }
  }
  next() {
    if (!this.parent)
      return;
    let e = this.parent.index(this);
    return this.parent.nodes[e + 1];
  }
  positionBy(e) {
    let r = this.source.start;
    if (e.index)
      r = this.positionInside(e.index);
    else if (e.word) {
      let i = this.source.input.css.slice(
        Cn(this.source.input.css, this.source.start),
        Cn(this.source.input.css, this.source.end)
      ).indexOf(e.word);
      i !== -1 && (r = this.positionInside(i));
    }
    return r;
  }
  positionInside(e) {
    let r = this.source.start.column, n = this.source.start.line, i = Cn(this.source.input.css, this.source.start), a = i + e;
    for (let o = i; o < a; o++)
      this.source.input.css[o] === `
` ? (r = 1, n += 1) : r += 1;
    return { column: r, line: n };
  }
  prev() {
    if (!this.parent)
      return;
    let e = this.parent.index(this);
    return this.parent.nodes[e - 1];
  }
  rangeBy(e) {
    let r = {
      column: this.source.start.column,
      line: this.source.start.line
    }, n = this.source.end ? {
      column: this.source.end.column + 1,
      line: this.source.end.line
    } : {
      column: r.column + 1,
      line: r.line
    };
    if (e.word) {
      let a = this.source.input.css.slice(
        Cn(this.source.input.css, this.source.start),
        Cn(this.source.input.css, this.source.end)
      ).indexOf(e.word);
      a !== -1 && (r = this.positionInside(a), n = this.positionInside(
        a + e.word.length
      ));
    } else
      e.start ? r = {
        column: e.start.column,
        line: e.start.line
      } : e.index && (r = this.positionInside(e.index)), e.end ? n = {
        column: e.end.column,
        line: e.end.line
      } : typeof e.endIndex == "number" ? n = this.positionInside(e.endIndex) : e.index && (n = this.positionInside(e.index + 1));
    return (n.line < r.line || n.line === r.line && n.column <= r.column) && (n = { column: r.column + 1, line: r.line }), { end: n, start: r };
  }
  raw(e, r) {
    return new W2().raw(this, e, r);
  }
  remove() {
    return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
  }
  replaceWith(...e) {
    if (this.parent) {
      let r = this, n = !1;
      for (let i of e)
        i === this ? n = !0 : n ? (this.parent.insertAfter(r, i), r = i) : this.parent.insertBefore(r, i);
      n || this.remove();
    }
    return this;
  }
  root() {
    let e = this;
    for (; e.parent && e.parent.type !== "document"; )
      e = e.parent;
    return e;
  }
  toJSON(e, r) {
    let n = {}, i = r == null;
    r = r || /* @__PURE__ */ new Map();
    let a = 0;
    for (let o in this) {
      if (!Object.prototype.hasOwnProperty.call(this, o) || o === "parent" || o === "proxyCache")
        continue;
      let s = this[o];
      if (Array.isArray(s))
        n[o] = s.map((u) => typeof u == "object" && u.toJSON ? u.toJSON(null, r) : u);
      else if (typeof s == "object" && s.toJSON)
        n[o] = s.toJSON(null, r);
      else if (o === "source") {
        let u = r.get(s.input);
        u == null && (u = a, r.set(s.input, a), a++), n[o] = {
          end: s.end,
          inputId: u,
          start: s.start
        };
      } else
        n[o] = s;
    }
    return i && (n.inputs = [...r.keys()].map((o) => o.toJSON())), n;
  }
  toProxy() {
    return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
  }
  toString(e = H2) {
    e.stringify && (e = e.stringify);
    let r = "";
    return e(this, (n) => {
      r += n;
    }), r;
  }
  warn(e, r, n) {
    let i = { node: this };
    for (let a in n)
      i[a] = n[a];
    return e.warn(r, i);
  }
  get proxyOf() {
    return this;
  }
};
var Fa = Zs;
Zs.default = Zs;
let K2 = Fa, el = class extends K2 {
  constructor(e) {
    super(e), this.type = "comment";
  }
};
var La = el;
el.default = el;
let Y2 = Fa, tl = class extends Y2 {
  constructor(e) {
    e && typeof e.value < "u" && typeof e.value != "string" && (e = { ...e, value: String(e.value) }), super(e), this.type = "decl";
  }
  get variable() {
    return this.prop.startsWith("--") || this.prop[0] === "$";
  }
};
var Na = tl;
tl.default = tl;
let ep = La, tp = Na, J2 = Fa, { isClean: rp, my: np } = ai, Wl, ip, ap, Hl;
function op(t) {
  return t.map((e) => (e.nodes && (e.nodes = op(e.nodes)), delete e.source, e));
}
function sp(t) {
  if (t[rp] = !1, t.proxyOf.nodes)
    for (let e of t.proxyOf.nodes)
      sp(e);
}
let Tt = class lp extends J2 {
  append(...e) {
    for (let r of e) {
      let n = this.normalize(r, this.last);
      for (let i of n)
        this.proxyOf.nodes.push(i);
    }
    return this.markDirty(), this;
  }
  cleanRaws(e) {
    if (super.cleanRaws(e), this.nodes)
      for (let r of this.nodes)
        r.cleanRaws(e);
  }
  each(e) {
    if (!this.proxyOf.nodes)
      return;
    let r = this.getIterator(), n, i;
    for (; this.indexes[r] < this.proxyOf.nodes.length && (n = this.indexes[r], i = e(this.proxyOf.nodes[n], n), i !== !1); )
      this.indexes[r] += 1;
    return delete this.indexes[r], i;
  }
  every(e) {
    return this.nodes.every(e);
  }
  getIterator() {
    this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
    let e = this.lastEach;
    return this.indexes[e] = 0, e;
  }
  getProxyProcessor() {
    return {
      get(e, r) {
        return r === "proxyOf" ? e : e[r] ? r === "each" || typeof r == "string" && r.startsWith("walk") ? (...n) => e[r](
          ...n.map((i) => typeof i == "function" ? (a, o) => i(a.toProxy(), o) : i)
        ) : r === "every" || r === "some" ? (n) => e[r](
          (i, ...a) => n(i.toProxy(), ...a)
        ) : r === "root" ? () => e.root().toProxy() : r === "nodes" ? e.nodes.map((n) => n.toProxy()) : r === "first" || r === "last" ? e[r].toProxy() : e[r] : e[r];
      },
      set(e, r, n) {
        return e[r] === n || (e[r] = n, (r === "name" || r === "params" || r === "selector") && e.markDirty()), !0;
      }
    };
  }
  index(e) {
    return typeof e == "number" ? e : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e));
  }
  insertAfter(e, r) {
    let n = this.index(e), i = this.normalize(r, this.proxyOf.nodes[n]).reverse();
    n = this.index(e);
    for (let o of i)
      this.proxyOf.nodes.splice(n + 1, 0, o);
    let a;
    for (let o in this.indexes)
      a = this.indexes[o], n < a && (this.indexes[o] = a + i.length);
    return this.markDirty(), this;
  }
  insertBefore(e, r) {
    let n = this.index(e), i = n === 0 ? "prepend" : !1, a = this.normalize(
      r,
      this.proxyOf.nodes[n],
      i
    ).reverse();
    n = this.index(e);
    for (let s of a)
      this.proxyOf.nodes.splice(n, 0, s);
    let o;
    for (let s in this.indexes)
      o = this.indexes[s], n <= o && (this.indexes[s] = o + a.length);
    return this.markDirty(), this;
  }
  normalize(e, r) {
    if (typeof e == "string")
      e = op(ip(e).nodes);
    else if (typeof e > "u")
      e = [];
    else if (Array.isArray(e)) {
      e = e.slice(0);
      for (let i of e)
        i.parent && i.parent.removeChild(i, "ignore");
    } else if (e.type === "root" && this.type !== "document") {
      e = e.nodes.slice(0);
      for (let i of e)
        i.parent && i.parent.removeChild(i, "ignore");
    } else if (e.type)
      e = [e];
    else if (e.prop) {
      if (typeof e.value > "u")
        throw new Error("Value field is missed in node creation");
      typeof e.value != "string" && (e.value = String(e.value)), e = [new tp(e)];
    } else if (e.selector || e.selectors)
      e = [new Hl(e)];
    else if (e.name)
      e = [new Wl(e)];
    else if (e.text)
      e = [new ep(e)];
    else
      throw new Error("Unknown node type in node creation");
    return e.map((i) => (i[np] || lp.rebuild(i), i = i.proxyOf, i.parent && i.parent.removeChild(i), i[rp] && sp(i), i.raws || (i.raws = {}), typeof i.raws.before > "u" && r && typeof r.raws.before < "u" && (i.raws.before = r.raws.before.replace(/\S/g, "")), i.parent = this.proxyOf, i));
  }
  prepend(...e) {
    e = e.reverse();
    for (let r of e) {
      let n = this.normalize(r, this.first, "prepend").reverse();
      for (let i of n)
        this.proxyOf.nodes.unshift(i);
      for (let i in this.indexes)
        this.indexes[i] = this.indexes[i] + n.length;
    }
    return this.markDirty(), this;
  }
  push(e) {
    return e.parent = this, this.proxyOf.nodes.push(e), this;
  }
  removeAll() {
    for (let e of this.proxyOf.nodes)
      e.parent = void 0;
    return this.proxyOf.nodes = [], this.markDirty(), this;
  }
  removeChild(e) {
    e = this.index(e), this.proxyOf.nodes[e].parent = void 0, this.proxyOf.nodes.splice(e, 1);
    let r;
    for (let n in this.indexes)
      r = this.indexes[n], r >= e && (this.indexes[n] = r - 1);
    return this.markDirty(), this;
  }
  replaceValues(e, r, n) {
    return n || (n = r, r = {}), this.walkDecls((i) => {
      r.props && !r.props.includes(i.prop) || r.fast && !i.value.includes(r.fast) || (i.value = i.value.replace(e, n));
    }), this.markDirty(), this;
  }
  some(e) {
    return this.nodes.some(e);
  }
  walk(e) {
    return this.each((r, n) => {
      let i;
      try {
        i = e(r, n);
      } catch (a) {
        throw r.addToError(a);
      }
      return i !== !1 && r.walk && (i = r.walk(e)), i;
    });
  }
  walkAtRules(e, r) {
    return r ? e instanceof RegExp ? this.walk((n, i) => {
      if (n.type === "atrule" && e.test(n.name))
        return r(n, i);
    }) : this.walk((n, i) => {
      if (n.type === "atrule" && n.name === e)
        return r(n, i);
    }) : (r = e, this.walk((n, i) => {
      if (n.type === "atrule")
        return r(n, i);
    }));
  }
  walkComments(e) {
    return this.walk((r, n) => {
      if (r.type === "comment")
        return e(r, n);
    });
  }
  walkDecls(e, r) {
    return r ? e instanceof RegExp ? this.walk((n, i) => {
      if (n.type === "decl" && e.test(n.prop))
        return r(n, i);
    }) : this.walk((n, i) => {
      if (n.type === "decl" && n.prop === e)
        return r(n, i);
    }) : (r = e, this.walk((n, i) => {
      if (n.type === "decl")
        return r(n, i);
    }));
  }
  walkRules(e, r) {
    return r ? e instanceof RegExp ? this.walk((n, i) => {
      if (n.type === "rule" && e.test(n.selector))
        return r(n, i);
    }) : this.walk((n, i) => {
      if (n.type === "rule" && n.selector === e)
        return r(n, i);
    }) : (r = e, this.walk((n, i) => {
      if (n.type === "rule")
        return r(n, i);
    }));
  }
  get first() {
    if (this.proxyOf.nodes)
      return this.proxyOf.nodes[0];
  }
  get last() {
    if (this.proxyOf.nodes)
      return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
  }
};
Tt.registerParse = (t) => {
  ip = t;
};
Tt.registerRule = (t) => {
  Hl = t;
};
Tt.registerAtRule = (t) => {
  Wl = t;
};
Tt.registerRoot = (t) => {
  ap = t;
};
var mr = Tt;
Tt.default = Tt;
Tt.rebuild = (t) => {
  t.type === "atrule" ? Object.setPrototypeOf(t, Wl.prototype) : t.type === "rule" ? Object.setPrototypeOf(t, Hl.prototype) : t.type === "decl" ? Object.setPrototypeOf(t, tp.prototype) : t.type === "comment" ? Object.setPrototypeOf(t, ep.prototype) : t.type === "root" && Object.setPrototypeOf(t, ap.prototype), t[np] = !0, t.nodes && t.nodes.forEach((e) => {
    Tt.rebuild(e);
  });
};
let up = mr, ha = class extends up {
  constructor(e) {
    super(e), this.type = "atrule";
  }
  append(...e) {
    return this.proxyOf.nodes || (this.nodes = []), super.append(...e);
  }
  prepend(...e) {
    return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e);
  }
};
var Gl = ha;
ha.default = ha;
up.registerAtRule(ha);
let X2 = mr, cp, fp, Vn = class extends X2 {
  constructor(e) {
    super({ type: "document", ...e }), this.nodes || (this.nodes = []);
  }
  toResult(e = {}) {
    return new cp(new fp(), this, e).stringify();
  }
};
Vn.registerLazyResult = (t) => {
  cp = t;
};
Vn.registerProcessor = (t) => {
  fp = t;
};
var Kl = Vn;
Vn.default = Vn;
let Q2 = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Z2 = (t, e = 21) => (r = e) => {
  let n = "", i = r | 0;
  for (; i--; )
    n += t[Math.random() * t.length | 0];
  return n;
}, ex = (t = 21) => {
  let e = "", r = t | 0;
  for (; r--; )
    e += Q2[Math.random() * 64 | 0];
  return e;
};
var tx = { nanoid: ex, customAlphabet: Z2 };
let { existsSync: rx, readFileSync: nx } = Me, { dirname: es, join: ix } = Me, { SourceMapConsumer: Bc, SourceMapGenerator: jc } = Me;
function ax(t) {
  return Buffer ? Buffer.from(t, "base64").toString() : window.atob(t);
}
let rl = class {
  constructor(e, r) {
    if (r.map === !1)
      return;
    this.loadAnnotation(e), this.inline = this.startWith(this.annotation, "data:");
    let n = r.map ? r.map.prev : void 0, i = this.loadMap(r.from, n);
    !this.mapFile && r.from && (this.mapFile = r.from), this.mapFile && (this.root = es(this.mapFile)), i && (this.text = i);
  }
  consumer() {
    return this.consumerCache || (this.consumerCache = new Bc(this.text)), this.consumerCache;
  }
  decodeInline(e) {
    let r = /^data:application\/json;charset=utf-?8;base64,/, n = /^data:application\/json;base64,/, i = /^data:application\/json;charset=utf-?8,/, a = /^data:application\/json,/, o = e.match(i) || e.match(a);
    if (o)
      return decodeURIComponent(e.substr(o[0].length));
    let s = e.match(r) || e.match(n);
    if (s)
      return ax(e.substr(s[0].length));
    let u = e.match(/data:application\/json;([^,]+),/)[1];
    throw new Error("Unsupported source map encoding " + u);
  }
  getAnnotationURL(e) {
    return e.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
  }
  isMap(e) {
    return typeof e != "object" ? !1 : typeof e.mappings == "string" || typeof e._mappings == "string" || Array.isArray(e.sections);
  }
  loadAnnotation(e) {
    let r = e.match(/\/\*\s*# sourceMappingURL=/g);
    if (!r)
      return;
    let n = e.lastIndexOf(r.pop()), i = e.indexOf("*/", n);
    n > -1 && i > -1 && (this.annotation = this.getAnnotationURL(e.substring(n, i)));
  }
  loadFile(e) {
    if (this.root = es(e), rx(e))
      return this.mapFile = e, nx(e, "utf-8").toString().trim();
  }
  loadMap(e, r) {
    if (r === !1)
      return !1;
    if (r) {
      if (typeof r == "string")
        return r;
      if (typeof r == "function") {
        let n = r(e);
        if (n) {
          let i = this.loadFile(n);
          if (!i)
            throw new Error(
              "Unable to load previous source map: " + n.toString()
            );
          return i;
        }
      } else {
        if (r instanceof Bc)
          return jc.fromSourceMap(r).toString();
        if (r instanceof jc)
          return r.toString();
        if (this.isMap(r))
          return JSON.stringify(r);
        throw new Error(
          "Unsupported previous source map format: " + r.toString()
        );
      }
    } else {
      if (this.inline)
        return this.decodeInline(this.annotation);
      if (this.annotation) {
        let n = this.annotation;
        return e && (n = ix(es(e), n)), this.loadFile(n);
      }
    }
  }
  startWith(e, r) {
    return e ? e.substr(0, r.length) === r : !1;
  }
  withContent() {
    return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
  }
};
var dp = rl;
rl.default = rl;
let { nanoid: ox } = tx, { isAbsolute: nl, resolve: il } = Me, { SourceMapConsumer: sx, SourceMapGenerator: lx } = Me, { fileURLToPath: zc, pathToFileURL: Ri } = Me, Uc = ql, ux = dp, ts = Me, rs = Symbol("fromOffsetCache"), cx = !!(sx && lx), Vc = !!(il && nl), ma = class {
  constructor(e, r = {}) {
    if (e === null || typeof e > "u" || typeof e == "object" && !e.toString)
      throw new Error(`PostCSS received ${e} instead of CSS string`);
    if (this.css = e.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, r.from && (!Vc || /^\w+:\/\//.test(r.from) || nl(r.from) ? this.file = r.from : this.file = il(r.from)), Vc && cx) {
      let n = new ux(this.css, r);
      if (n.text) {
        this.map = n;
        let i = n.consumer().file;
        !this.file && i && (this.file = this.mapResolve(i));
      }
    }
    this.file || (this.id = "<input css " + ox(6) + ">"), this.map && (this.map.file = this.from);
  }
  error(e, r, n, i = {}) {
    let a, o, s;
    if (r && typeof r == "object") {
      let c = r, f = n;
      if (typeof c.offset == "number") {
        let p = this.fromOffset(c.offset);
        r = p.line, n = p.col;
      } else
        r = c.line, n = c.column;
      if (typeof f.offset == "number") {
        let p = this.fromOffset(f.offset);
        o = p.line, a = p.col;
      } else
        o = f.line, a = f.column;
    } else if (!n) {
      let c = this.fromOffset(r);
      r = c.line, n = c.col;
    }
    let u = this.origin(r, n, o, a);
    return u ? s = new Uc(
      e,
      u.endLine === void 0 ? u.line : { column: u.column, line: u.line },
      u.endLine === void 0 ? u.column : { column: u.endColumn, line: u.endLine },
      u.source,
      u.file,
      i.plugin
    ) : s = new Uc(
      e,
      o === void 0 ? r : { column: n, line: r },
      o === void 0 ? n : { column: a, line: o },
      this.css,
      this.file,
      i.plugin
    ), s.input = { column: n, endColumn: a, endLine: o, line: r, source: this.css }, this.file && (Ri && (s.input.url = Ri(this.file).toString()), s.input.file = this.file), s;
  }
  fromOffset(e) {
    let r, n;
    if (this[rs])
      n = this[rs];
    else {
      let a = this.css.split(`
`);
      n = new Array(a.length);
      let o = 0;
      for (let s = 0, u = a.length; s < u; s++)
        n[s] = o, o += a[s].length + 1;
      this[rs] = n;
    }
    r = n[n.length - 1];
    let i = 0;
    if (e >= r)
      i = n.length - 1;
    else {
      let a = n.length - 2, o;
      for (; i < a; )
        if (o = i + (a - i >> 1), e < n[o])
          a = o - 1;
        else if (e >= n[o + 1])
          i = o + 1;
        else {
          i = o;
          break;
        }
    }
    return {
      col: e - n[i] + 1,
      line: i + 1
    };
  }
  mapResolve(e) {
    return /^\w+:\/\//.test(e) ? e : il(this.map.consumer().sourceRoot || this.map.root || ".", e);
  }
  origin(e, r, n, i) {
    if (!this.map)
      return !1;
    let a = this.map.consumer(), o = a.originalPositionFor({ column: r, line: e });
    if (!o.source)
      return !1;
    let s;
    typeof n == "number" && (s = a.originalPositionFor({ column: i, line: n }));
    let u;
    nl(o.source) ? u = Ri(o.source) : u = new URL(
      o.source,
      this.map.consumer().sourceRoot || Ri(this.map.mapFile)
    );
    let c = {
      column: o.column,
      endColumn: s && s.column,
      endLine: s && s.line,
      line: o.line,
      url: u.toString()
    };
    if (u.protocol === "file:")
      if (zc)
        c.file = zc(u);
      else
        throw new Error("file: protocol is not available in this PostCSS build");
    let f = a.sourceContentFor(o.source);
    return f && (c.source = f), c;
  }
  toJSON() {
    let e = {};
    for (let r of ["hasBOM", "css", "file", "id"])
      this[r] != null && (e[r] = this[r]);
    return this.map && (e.map = { ...this.map }, e.map.consumerCache && (e.map.consumerCache = void 0)), e;
  }
  get from() {
    return this.file || this.id;
  }
};
var Ma = ma;
ma.default = ma;
ts && ts.registerInput && ts.registerInput(ma);
let pp = mr, hp, mp, Hr = class extends pp {
  constructor(e) {
    super(e), this.type = "root", this.nodes || (this.nodes = []);
  }
  normalize(e, r, n) {
    let i = super.normalize(e);
    if (r) {
      if (n === "prepend")
        this.nodes.length > 1 ? r.raws.before = this.nodes[1].raws.before : delete r.raws.before;
      else if (this.first !== r)
        for (let a of i)
          a.raws.before = r.raws.before;
    }
    return i;
  }
  removeChild(e, r) {
    let n = this.index(e);
    return !r && n === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[n].raws.before), super.removeChild(e);
  }
  toResult(e = {}) {
    return new hp(new mp(), this, e).stringify();
  }
};
Hr.registerLazyResult = (t) => {
  hp = t;
};
Hr.registerProcessor = (t) => {
  mp = t;
};
var oi = Hr;
Hr.default = Hr;
pp.registerRoot(Hr);
let qn = {
  comma(t) {
    return qn.split(t, [","], !0);
  },
  space(t) {
    let e = [" ", `
`, "	"];
    return qn.split(t, e);
  },
  split(t, e, r) {
    let n = [], i = "", a = !1, o = 0, s = !1, u = "", c = !1;
    for (let f of t)
      c ? c = !1 : f === "\\" ? c = !0 : s ? f === u && (s = !1) : f === '"' || f === "'" ? (s = !0, u = f) : f === "(" ? o += 1 : f === ")" ? o > 0 && (o -= 1) : o === 0 && e.includes(f) && (a = !0), a ? (i !== "" && n.push(i.trim()), i = "", a = !1) : i += f;
    return (r || i !== "") && n.push(i.trim()), n;
  }
};
var gp = qn;
qn.default = qn;
let yp = mr, fx = gp, ga = class extends yp {
  constructor(e) {
    super(e), this.type = "rule", this.nodes || (this.nodes = []);
  }
  get selectors() {
    return fx.comma(this.selector);
  }
  set selectors(e) {
    let r = this.selector ? this.selector.match(/,\s*/) : null, n = r ? r[0] : "," + this.raw("between", "beforeOpen");
    this.selector = e.join(n);
  }
};
var Yl = ga;
ga.default = ga;
yp.registerRule(ga);
let dx = Gl, px = La, hx = Na, mx = Ma, gx = dp, yx = oi, bx = Yl;
function Wn(t, e) {
  if (Array.isArray(t))
    return t.map((i) => Wn(i));
  let { inputs: r, ...n } = t;
  if (r) {
    e = [];
    for (let i of r) {
      let a = { ...i, __proto__: mx.prototype };
      a.map && (a.map = {
        ...a.map,
        __proto__: gx.prototype
      }), e.push(a);
    }
  }
  if (n.nodes && (n.nodes = t.nodes.map((i) => Wn(i, e))), n.source) {
    let { inputId: i, ...a } = n.source;
    n.source = a, i != null && (n.source.input = e[i]);
  }
  if (n.type === "root")
    return new yx(n);
  if (n.type === "decl")
    return new hx(n);
  if (n.type === "rule")
    return new bx(n);
  if (n.type === "comment")
    return new px(n);
  if (n.type === "atrule")
    return new dx(n);
  throw new Error("Unknown node type: " + t.type);
}
var vx = Wn;
Wn.default = Wn;
let { dirname: Xi, relative: bp, resolve: vp, sep: wp } = Me, { SourceMapConsumer: xp, SourceMapGenerator: Qi } = Me, { pathToFileURL: qc } = Me, wx = Ma, xx = !!(xp && Qi), Sx = !!(Xi && vp && bp && wp), Ox = class {
  constructor(e, r, n, i) {
    this.stringify = e, this.mapOpts = n.map || {}, this.root = r, this.opts = n, this.css = i, this.originalCSS = i, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = /* @__PURE__ */ new Map(), this.memoizedPaths = /* @__PURE__ */ new Map(), this.memoizedURLs = /* @__PURE__ */ new Map();
  }
  addAnnotation() {
    let e;
    this.isInline() ? e = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? e = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? e = this.mapOpts.annotation(this.opts.to, this.root) : e = this.outputFile() + ".map";
    let r = `
`;
    this.css.includes(`\r
`) && (r = `\r
`), this.css += r + "/*# sourceMappingURL=" + e + " */";
  }
  applyPrevMaps() {
    for (let e of this.previous()) {
      let r = this.toUrl(this.path(e.file)), n = e.root || Xi(e.file), i;
      this.mapOpts.sourcesContent === !1 ? (i = new xp(e.text), i.sourcesContent && (i.sourcesContent = null)) : i = e.consumer(), this.map.applySourceMap(i, r, this.toUrl(this.path(n)));
    }
  }
  clearAnnotation() {
    if (this.mapOpts.annotation !== !1)
      if (this.root) {
        let e;
        for (let r = this.root.nodes.length - 1; r >= 0; r--)
          e = this.root.nodes[r], e.type === "comment" && e.text.startsWith("# sourceMappingURL=") && this.root.removeChild(r);
      } else
        this.css && (this.css = this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm, ""));
  }
  generate() {
    if (this.clearAnnotation(), Sx && xx && this.isMap())
      return this.generateMap();
    {
      let e = "";
      return this.stringify(this.root, (r) => {
        e += r;
      }), [e];
    }
  }
  generateMap() {
    if (this.root)
      this.generateString();
    else if (this.previous().length === 1) {
      let e = this.previous()[0].consumer();
      e.file = this.outputFile(), this.map = Qi.fromSourceMap(e, {
        ignoreInvalidMapping: !0
      });
    } else
      this.map = new Qi({
        file: this.outputFile(),
        ignoreInvalidMapping: !0
      }), this.map.addMapping({
        generated: { column: 0, line: 1 },
        original: { column: 0, line: 1 },
        source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
      });
    return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map];
  }
  generateString() {
    this.css = "", this.map = new Qi({
      file: this.outputFile(),
      ignoreInvalidMapping: !0
    });
    let e = 1, r = 1, n = "<no source>", i = {
      generated: { column: 0, line: 0 },
      original: { column: 0, line: 0 },
      source: ""
    }, a, o;
    this.stringify(this.root, (s, u, c) => {
      if (this.css += s, u && c !== "end" && (i.generated.line = e, i.generated.column = r - 1, u.source && u.source.start ? (i.source = this.sourcePath(u), i.original.line = u.source.start.line, i.original.column = u.source.start.column - 1, this.map.addMapping(i)) : (i.source = n, i.original.line = 1, i.original.column = 0, this.map.addMapping(i))), o = s.match(/\n/g), o ? (e += o.length, a = s.lastIndexOf(`
`), r = s.length - a) : r += s.length, u && c !== "start") {
        let f = u.parent || { raws: {} };
        (!(u.type === "decl" || u.type === "atrule" && !u.nodes) || u !== f.last || f.raws.semicolon) && (u.source && u.source.end ? (i.source = this.sourcePath(u), i.original.line = u.source.end.line, i.original.column = u.source.end.column - 1, i.generated.line = e, i.generated.column = r - 2, this.map.addMapping(i)) : (i.source = n, i.original.line = 1, i.original.column = 0, i.generated.line = e, i.generated.column = r - 1, this.map.addMapping(i)));
      }
    });
  }
  isAnnotation() {
    return this.isInline() ? !0 : typeof this.mapOpts.annotation < "u" ? this.mapOpts.annotation : this.previous().length ? this.previous().some((e) => e.annotation) : !0;
  }
  isInline() {
    if (typeof this.mapOpts.inline < "u")
      return this.mapOpts.inline;
    let e = this.mapOpts.annotation;
    return typeof e < "u" && e !== !0 ? !1 : this.previous().length ? this.previous().some((r) => r.inline) : !0;
  }
  isMap() {
    return typeof this.opts.map < "u" ? !!this.opts.map : this.previous().length > 0;
  }
  isSourcesContent() {
    return typeof this.mapOpts.sourcesContent < "u" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some((e) => e.withContent()) : !0;
  }
  outputFile() {
    return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css";
  }
  path(e) {
    if (this.mapOpts.absolute || e.charCodeAt(0) === 60 || /^\w+:\/\//.test(e))
      return e;
    let r = this.memoizedPaths.get(e);
    if (r)
      return r;
    let n = this.opts.to ? Xi(this.opts.to) : ".";
    typeof this.mapOpts.annotation == "string" && (n = Xi(vp(n, this.mapOpts.annotation)));
    let i = bp(n, e);
    return this.memoizedPaths.set(e, i), i;
  }
  previous() {
    if (!this.previousMaps)
      if (this.previousMaps = [], this.root)
        this.root.walk((e) => {
          if (e.source && e.source.input.map) {
            let r = e.source.input.map;
            this.previousMaps.includes(r) || this.previousMaps.push(r);
          }
        });
      else {
        let e = new wx(this.originalCSS, this.opts);
        e.map && this.previousMaps.push(e.map);
      }
    return this.previousMaps;
  }
  setSourcesContent() {
    let e = {};
    if (this.root)
      this.root.walk((r) => {
        if (r.source) {
          let n = r.source.input.from;
          if (n && !e[n]) {
            e[n] = !0;
            let i = this.usesFileUrls ? this.toFileUrl(n) : this.toUrl(this.path(n));
            this.map.setSourceContent(i, r.source.input.css);
          }
        }
      });
    else if (this.css) {
      let r = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
      this.map.setSourceContent(r, this.css);
    }
  }
  sourcePath(e) {
    return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(e.source.input.from) : this.toUrl(this.path(e.source.input.from));
  }
  toBase64(e) {
    return Buffer ? Buffer.from(e).toString("base64") : window.btoa(unescape(encodeURIComponent(e)));
  }
  toFileUrl(e) {
    let r = this.memoizedFileURLs.get(e);
    if (r)
      return r;
    if (qc) {
      let n = qc(e).toString();
      return this.memoizedFileURLs.set(e, n), n;
    } else
      throw new Error(
        "`map.absolute` option is not available in this PostCSS build"
      );
  }
  toUrl(e) {
    let r = this.memoizedURLs.get(e);
    if (r)
      return r;
    wp === "\\" && (e = e.replace(/\\/g, "/"));
    let n = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
    return this.memoizedURLs.set(e, n), n;
  }
};
var Sp = Ox;
const ns = "'".charCodeAt(0), Wc = '"'.charCodeAt(0), Fi = "\\".charCodeAt(0), Hc = "/".charCodeAt(0), Li = `
`.charCodeAt(0), _n = " ".charCodeAt(0), Ni = "\f".charCodeAt(0), Mi = "	".charCodeAt(0), Bi = "\r".charCodeAt(0), Ex = "[".charCodeAt(0), Ax = "]".charCodeAt(0), Cx = "(".charCodeAt(0), _x = ")".charCodeAt(0), kx = "{".charCodeAt(0), Px = "}".charCodeAt(0), Tx = ";".charCodeAt(0), $x = "*".charCodeAt(0), Ix = ":".charCodeAt(0), Dx = "@".charCodeAt(0), ji = /[\t\n\f\r "#'()/;[\\\]{}]/g, zi = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, Rx = /.[\r\n"'(/\\]/, Gc = /[\da-f]/i;
var Fx = function(e, r = {}) {
  let n = e.css.valueOf(), i = r.ignoreErrors, a, o, s, u, c, f, p, m, O, g, S = n.length, v = 0, C = [], P = [];
  function E() {
    return v;
  }
  function _(B) {
    throw e.error("Unclosed " + B, v);
  }
  function I() {
    return P.length === 0 && v >= S;
  }
  function j(B) {
    if (P.length)
      return P.pop();
    if (v >= S)
      return;
    let N = B ? B.ignoreUnclosed : !1;
    switch (a = n.charCodeAt(v), a) {
      case Li:
      case _n:
      case Mi:
      case Bi:
      case Ni: {
        u = v;
        do
          u += 1, a = n.charCodeAt(u);
        while (a === _n || a === Li || a === Mi || a === Bi || a === Ni);
        f = ["space", n.slice(v, u)], v = u - 1;
        break;
      }
      case Ex:
      case Ax:
      case kx:
      case Px:
      case Ix:
      case Tx:
      case _x: {
        let R = String.fromCharCode(a);
        f = [R, R, v];
        break;
      }
      case Cx: {
        if (g = C.length ? C.pop()[1] : "", O = n.charCodeAt(v + 1), g === "url" && O !== ns && O !== Wc && O !== _n && O !== Li && O !== Mi && O !== Ni && O !== Bi) {
          u = v;
          do {
            if (p = !1, u = n.indexOf(")", u + 1), u === -1)
              if (i || N) {
                u = v;
                break;
              } else
                _("bracket");
            for (m = u; n.charCodeAt(m - 1) === Fi; )
              m -= 1, p = !p;
          } while (p);
          f = ["brackets", n.slice(v, u + 1), v, u], v = u;
        } else
          u = n.indexOf(")", v + 1), o = n.slice(v, u + 1), u === -1 || Rx.test(o) ? f = ["(", "(", v] : (f = ["brackets", o, v, u], v = u);
        break;
      }
      case ns:
      case Wc: {
        c = a === ns ? "'" : '"', u = v;
        do {
          if (p = !1, u = n.indexOf(c, u + 1), u === -1)
            if (i || N) {
              u = v + 1;
              break;
            } else
              _("string");
          for (m = u; n.charCodeAt(m - 1) === Fi; )
            m -= 1, p = !p;
        } while (p);
        f = ["string", n.slice(v, u + 1), v, u], v = u;
        break;
      }
      case Dx: {
        ji.lastIndex = v + 1, ji.test(n), ji.lastIndex === 0 ? u = n.length - 1 : u = ji.lastIndex - 2, f = ["at-word", n.slice(v, u + 1), v, u], v = u;
        break;
      }
      case Fi: {
        for (u = v, s = !0; n.charCodeAt(u + 1) === Fi; )
          u += 1, s = !s;
        if (a = n.charCodeAt(u + 1), s && a !== Hc && a !== _n && a !== Li && a !== Mi && a !== Bi && a !== Ni && (u += 1, Gc.test(n.charAt(u)))) {
          for (; Gc.test(n.charAt(u + 1)); )
            u += 1;
          n.charCodeAt(u + 1) === _n && (u += 1);
        }
        f = ["word", n.slice(v, u + 1), v, u], v = u;
        break;
      }
      default: {
        a === Hc && n.charCodeAt(v + 1) === $x ? (u = n.indexOf("*/", v + 2) + 1, u === 0 && (i || N ? u = n.length : _("comment")), f = ["comment", n.slice(v, u + 1), v, u], v = u) : (zi.lastIndex = v + 1, zi.test(n), zi.lastIndex === 0 ? u = n.length - 1 : u = zi.lastIndex - 2, f = ["word", n.slice(v, u + 1), v, u], C.push(f), v = u);
        break;
      }
    }
    return v++, f;
  }
  function z(B) {
    P.push(B);
  }
  return {
    back: z,
    endOfFile: I,
    nextToken: j,
    position: E
  };
};
let Lx = Gl, Nx = La, Mx = Na, Bx = oi, Kc = Yl, jx = Fx;
const Yc = {
  empty: !0,
  space: !0
};
function zx(t) {
  for (let e = t.length - 1; e >= 0; e--) {
    let r = t[e], n = r[3] || r[2];
    if (n)
      return n;
  }
}
let Ux = class {
  constructor(e) {
    this.input = e, this.root = new Bx(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = { input: e, start: { column: 1, line: 1, offset: 0 } };
  }
  atrule(e) {
    let r = new Lx();
    r.name = e[1].slice(1), r.name === "" && this.unnamedAtrule(r, e), this.init(r, e[2]);
    let n, i, a, o = !1, s = !1, u = [], c = [];
    for (; !this.tokenizer.endOfFile(); ) {
      if (e = this.tokenizer.nextToken(), n = e[0], n === "(" || n === "[" ? c.push(n === "(" ? ")" : "]") : n === "{" && c.length > 0 ? c.push("}") : n === c[c.length - 1] && c.pop(), c.length === 0)
        if (n === ";") {
          r.source.end = this.getPosition(e[2]), r.source.end.offset++, this.semicolon = !0;
          break;
        } else if (n === "{") {
          s = !0;
          break;
        } else if (n === "}") {
          if (u.length > 0) {
            for (a = u.length - 1, i = u[a]; i && i[0] === "space"; )
              i = u[--a];
            i && (r.source.end = this.getPosition(i[3] || i[2]), r.source.end.offset++);
          }
          this.end(e);
          break;
        } else
          u.push(e);
      else
        u.push(e);
      if (this.tokenizer.endOfFile()) {
        o = !0;
        break;
      }
    }
    r.raws.between = this.spacesAndCommentsFromEnd(u), u.length ? (r.raws.afterName = this.spacesAndCommentsFromStart(u), this.raw(r, "params", u), o && (e = u[u.length - 1], r.source.end = this.getPosition(e[3] || e[2]), r.source.end.offset++, this.spaces = r.raws.between, r.raws.between = "")) : (r.raws.afterName = "", r.params = ""), s && (r.nodes = [], this.current = r);
  }
  checkMissedSemicolon(e) {
    let r = this.colon(e);
    if (r === !1)
      return;
    let n = 0, i;
    for (let a = r - 1; a >= 0 && (i = e[a], !(i[0] !== "space" && (n += 1, n === 2))); a--)
      ;
    throw this.input.error(
      "Missed semicolon",
      i[0] === "word" ? i[3] + 1 : i[2]
    );
  }
  colon(e) {
    let r = 0, n, i, a;
    for (let [o, s] of e.entries()) {
      if (i = s, a = i[0], a === "(" && (r += 1), a === ")" && (r -= 1), r === 0 && a === ":")
        if (!n)
          this.doubleColon(i);
        else {
          if (n[0] === "word" && n[1] === "progid")
            continue;
          return o;
        }
      n = i;
    }
    return !1;
  }
  comment(e) {
    let r = new Nx();
    this.init(r, e[2]), r.source.end = this.getPosition(e[3] || e[2]), r.source.end.offset++;
    let n = e[1].slice(2, -2);
    if (/^\s*$/.test(n))
      r.text = "", r.raws.left = n, r.raws.right = "";
    else {
      let i = n.match(/^(\s*)([^]*\S)(\s*)$/);
      r.text = i[2], r.raws.left = i[1], r.raws.right = i[3];
    }
  }
  createTokenizer() {
    this.tokenizer = jx(this.input);
  }
  decl(e, r) {
    let n = new Mx();
    this.init(n, e[0][2]);
    let i = e[e.length - 1];
    for (i[0] === ";" && (this.semicolon = !0, e.pop()), n.source.end = this.getPosition(
      i[3] || i[2] || zx(e)
    ), n.source.end.offset++; e[0][0] !== "word"; )
      e.length === 1 && this.unknownWord(e), n.raws.before += e.shift()[1];
    for (n.source.start = this.getPosition(e[0][2]), n.prop = ""; e.length; ) {
      let c = e[0][0];
      if (c === ":" || c === "space" || c === "comment")
        break;
      n.prop += e.shift()[1];
    }
    n.raws.between = "";
    let a;
    for (; e.length; )
      if (a = e.shift(), a[0] === ":") {
        n.raws.between += a[1];
        break;
      } else
        a[0] === "word" && /\w/.test(a[1]) && this.unknownWord([a]), n.raws.between += a[1];
    (n.prop[0] === "_" || n.prop[0] === "*") && (n.raws.before += n.prop[0], n.prop = n.prop.slice(1));
    let o = [], s;
    for (; e.length && (s = e[0][0], !(s !== "space" && s !== "comment")); )
      o.push(e.shift());
    this.precheckMissedSemicolon(e);
    for (let c = e.length - 1; c >= 0; c--) {
      if (a = e[c], a[1].toLowerCase() === "!important") {
        n.important = !0;
        let f = this.stringFrom(e, c);
        f = this.spacesFromEnd(e) + f, f !== " !important" && (n.raws.important = f);
        break;
      } else if (a[1].toLowerCase() === "important") {
        let f = e.slice(0), p = "";
        for (let m = c; m > 0; m--) {
          let O = f[m][0];
          if (p.trim().startsWith("!") && O !== "space")
            break;
          p = f.pop()[1] + p;
        }
        p.trim().startsWith("!") && (n.important = !0, n.raws.important = p, e = f);
      }
      if (a[0] !== "space" && a[0] !== "comment")
        break;
    }
    e.some((c) => c[0] !== "space" && c[0] !== "comment") && (n.raws.between += o.map((c) => c[1]).join(""), o = []), this.raw(n, "value", o.concat(e), r), n.value.includes(":") && !r && this.checkMissedSemicolon(e);
  }
  doubleColon(e) {
    throw this.input.error(
      "Double colon",
      { offset: e[2] },
      { offset: e[2] + e[1].length }
    );
  }
  emptyRule(e) {
    let r = new Kc();
    this.init(r, e[2]), r.selector = "", r.raws.between = "", this.current = r;
  }
  end(e) {
    this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(e[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(e);
  }
  endFile() {
    this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position());
  }
  freeSemicolon(e) {
    if (this.spaces += e[1], this.current.nodes) {
      let r = this.current.nodes[this.current.nodes.length - 1];
      r && r.type === "rule" && !r.raws.ownSemicolon && (r.raws.ownSemicolon = this.spaces, this.spaces = "");
    }
  }
  // Helpers
  getPosition(e) {
    let r = this.input.fromOffset(e);
    return {
      column: r.col,
      line: r.line,
      offset: e
    };
  }
  init(e, r) {
    this.current.push(e), e.source = {
      input: this.input,
      start: this.getPosition(r)
    }, e.raws.before = this.spaces, this.spaces = "", e.type !== "comment" && (this.semicolon = !1);
  }
  other(e) {
    let r = !1, n = null, i = !1, a = null, o = [], s = e[1].startsWith("--"), u = [], c = e;
    for (; c; ) {
      if (n = c[0], u.push(c), n === "(" || n === "[")
        a || (a = c), o.push(n === "(" ? ")" : "]");
      else if (s && i && n === "{")
        a || (a = c), o.push("}");
      else if (o.length === 0)
        if (n === ";")
          if (i) {
            this.decl(u, s);
            return;
          } else
            break;
        else if (n === "{") {
          this.rule(u);
          return;
        } else if (n === "}") {
          this.tokenizer.back(u.pop()), r = !0;
          break;
        } else
          n === ":" && (i = !0);
      else
        n === o[o.length - 1] && (o.pop(), o.length === 0 && (a = null));
      c = this.tokenizer.nextToken();
    }
    if (this.tokenizer.endOfFile() && (r = !0), o.length > 0 && this.unclosedBracket(a), r && i) {
      if (!s)
        for (; u.length && (c = u[u.length - 1][0], !(c !== "space" && c !== "comment")); )
          this.tokenizer.back(u.pop());
      this.decl(u, s);
    } else
      this.unknownWord(u);
  }
  parse() {
    let e;
    for (; !this.tokenizer.endOfFile(); )
      switch (e = this.tokenizer.nextToken(), e[0]) {
        case "space":
          this.spaces += e[1];
          break;
        case ";":
          this.freeSemicolon(e);
          break;
        case "}":
          this.end(e);
          break;
        case "comment":
          this.comment(e);
          break;
        case "at-word":
          this.atrule(e);
          break;
        case "{":
          this.emptyRule(e);
          break;
        default:
          this.other(e);
          break;
      }
    this.endFile();
  }
  precheckMissedSemicolon() {
  }
  raw(e, r, n, i) {
    let a, o, s = n.length, u = "", c = !0, f, p;
    for (let m = 0; m < s; m += 1)
      a = n[m], o = a[0], o === "space" && m === s - 1 && !i ? c = !1 : o === "comment" ? (p = n[m - 1] ? n[m - 1][0] : "empty", f = n[m + 1] ? n[m + 1][0] : "empty", !Yc[p] && !Yc[f] ? u.slice(-1) === "," ? c = !1 : u += a[1] : c = !1) : u += a[1];
    if (!c) {
      let m = n.reduce((O, g) => O + g[1], "");
      e.raws[r] = { raw: m, value: u };
    }
    e[r] = u;
  }
  rule(e) {
    e.pop();
    let r = new Kc();
    this.init(r, e[0][2]), r.raws.between = this.spacesAndCommentsFromEnd(e), this.raw(r, "selector", e), this.current = r;
  }
  spacesAndCommentsFromEnd(e) {
    let r, n = "";
    for (; e.length && (r = e[e.length - 1][0], !(r !== "space" && r !== "comment")); )
      n = e.pop()[1] + n;
    return n;
  }
  // Errors
  spacesAndCommentsFromStart(e) {
    let r, n = "";
    for (; e.length && (r = e[0][0], !(r !== "space" && r !== "comment")); )
      n += e.shift()[1];
    return n;
  }
  spacesFromEnd(e) {
    let r, n = "";
    for (; e.length && (r = e[e.length - 1][0], r === "space"); )
      n = e.pop()[1] + n;
    return n;
  }
  stringFrom(e, r) {
    let n = "";
    for (let i = r; i < e.length; i++)
      n += e[i][1];
    return e.splice(r, e.length - r), n;
  }
  unclosedBlock() {
    let e = this.current.source.start;
    throw this.input.error("Unclosed block", e.line, e.column);
  }
  unclosedBracket(e) {
    throw this.input.error(
      "Unclosed bracket",
      { offset: e[2] },
      { offset: e[2] + 1 }
    );
  }
  unexpectedClose(e) {
    throw this.input.error(
      "Unexpected }",
      { offset: e[2] },
      { offset: e[2] + 1 }
    );
  }
  unknownWord(e) {
    throw this.input.error(
      "Unknown word",
      { offset: e[0][2] },
      { offset: e[0][2] + e[0][1].length }
    );
  }
  unnamedAtrule(e, r) {
    throw this.input.error(
      "At-rule without name",
      { offset: r[2] },
      { offset: r[2] + r[1].length }
    );
  }
};
var Vx = Ux;
let qx = mr, Wx = Ma, Hx = Vx;
function ya(t, e) {
  let r = new Wx(t, e), n = new Hx(r);
  try {
    n.parse();
  } catch (i) {
    throw process.env.NODE_ENV !== "production" && i.name === "CssSyntaxError" && e && e.from && (/\.scss$/i.test(e.from) ? i.message += `
You tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser` : /\.sass/i.test(e.from) ? i.message += `
You tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser` : /\.less$/i.test(e.from) && (i.message += `
You tried to parse Less with the standard CSS parser; try again with the postcss-less parser`)), i;
  }
  return n.root;
}
var Jl = ya;
ya.default = ya;
qx.registerParse(ya);
let al = class {
  constructor(e, r = {}) {
    if (this.type = "warning", this.text = e, r.node && r.node.source) {
      let n = r.node.rangeBy(r);
      this.line = n.start.line, this.column = n.start.column, this.endLine = n.end.line, this.endColumn = n.end.column;
    }
    for (let n in r)
      this[n] = r[n];
  }
  toString() {
    return this.node ? this.node.error(this.text, {
      index: this.index,
      plugin: this.plugin,
      word: this.word
    }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
  }
};
var Op = al;
al.default = al;
let Gx = Op, ol = class {
  constructor(e, r, n) {
    this.processor = e, this.messages = [], this.root = r, this.opts = n, this.css = void 0, this.map = void 0;
  }
  toString() {
    return this.css;
  }
  warn(e, r = {}) {
    r.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (r.plugin = this.lastPlugin.postcssPlugin);
    let n = new Gx(e, r);
    return this.messages.push(n), n;
  }
  warnings() {
    return this.messages.filter((e) => e.type === "warning");
  }
  get content() {
    return this.css;
  }
};
var Xl = ol;
ol.default = ol;
let Jc = {};
var Ep = function(e) {
  Jc[e] || (Jc[e] = !0, typeof console < "u" && console.warn && console.warn(e));
};
let Kx = mr, Yx = Kl, Jx = Sp, Xx = Jl, Xc = Xl, Qx = oi, Zx = Ra, { isClean: dt, my: eS } = ai, tS = Ep;
const rS = {
  atrule: "AtRule",
  comment: "Comment",
  decl: "Declaration",
  document: "Document",
  root: "Root",
  rule: "Rule"
}, nS = {
  AtRule: !0,
  AtRuleExit: !0,
  Comment: !0,
  CommentExit: !0,
  Declaration: !0,
  DeclarationExit: !0,
  Document: !0,
  DocumentExit: !0,
  Once: !0,
  OnceExit: !0,
  postcssPlugin: !0,
  prepare: !0,
  Root: !0,
  RootExit: !0,
  Rule: !0,
  RuleExit: !0
}, iS = {
  Once: !0,
  postcssPlugin: !0,
  prepare: !0
}, Gr = 0;
function kn(t) {
  return typeof t == "object" && typeof t.then == "function";
}
function Ap(t) {
  let e = !1, r = rS[t.type];
  return t.type === "decl" ? e = t.prop.toLowerCase() : t.type === "atrule" && (e = t.name.toLowerCase()), e && t.append ? [
    r,
    r + "-" + e,
    Gr,
    r + "Exit",
    r + "Exit-" + e
  ] : e ? [r, r + "-" + e, r + "Exit", r + "Exit-" + e] : t.append ? [r, Gr, r + "Exit"] : [r, r + "Exit"];
}
function Qc(t) {
  let e;
  return t.type === "document" ? e = ["Document", Gr, "DocumentExit"] : t.type === "root" ? e = ["Root", Gr, "RootExit"] : e = Ap(t), {
    eventIndex: 0,
    events: e,
    iterator: 0,
    node: t,
    visitorIndex: 0,
    visitors: []
  };
}
function sl(t) {
  return t[dt] = !1, t.nodes && t.nodes.forEach((e) => sl(e)), t;
}
let ll = {}, Kr = class Cp {
  constructor(e, r, n) {
    this.stringified = !1, this.processed = !1;
    let i;
    if (typeof r == "object" && r !== null && (r.type === "root" || r.type === "document"))
      i = sl(r);
    else if (r instanceof Cp || r instanceof Xc)
      i = sl(r.root), r.map && (typeof n.map > "u" && (n.map = {}), n.map.inline || (n.map.inline = !1), n.map.prev = r.map);
    else {
      let a = Xx;
      n.syntax && (a = n.syntax.parse), n.parser && (a = n.parser), a.parse && (a = a.parse);
      try {
        i = a(r, n);
      } catch (o) {
        this.processed = !0, this.error = o;
      }
      i && !i[eS] && Kx.rebuild(i);
    }
    this.result = new Xc(e, i, n), this.helpers = { ...ll, postcss: ll, result: this.result }, this.plugins = this.processor.plugins.map((a) => typeof a == "object" && a.prepare ? { ...a, ...a.prepare(this.result) } : a);
  }
  async() {
    return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
  }
  catch(e) {
    return this.async().catch(e);
  }
  finally(e) {
    return this.async().then(e, e);
  }
  getAsyncError() {
    throw new Error("Use process(css).then(cb) to work with async plugins");
  }
  handleError(e, r) {
    let n = this.result.lastPlugin;
    try {
      if (r && r.addToError(e), this.error = e, e.name === "CssSyntaxError" && !e.plugin)
        e.plugin = n.postcssPlugin, e.setMessage();
      else if (n.postcssVersion && process.env.NODE_ENV !== "production") {
        let i = n.postcssPlugin, a = n.postcssVersion, o = this.result.processor.version, s = a.split("."), u = o.split(".");
        (s[0] !== u[0] || parseInt(s[1]) > parseInt(u[1])) && console.error(
          "Unknown error from PostCSS plugin. Your current PostCSS version is " + o + ", but " + i + " uses " + a + ". Perhaps this is the source of the error below."
        );
      }
    } catch (i) {
      console && console.error && console.error(i);
    }
    return e;
  }
  prepareVisitors() {
    this.listeners = {};
    let e = (r, n, i) => {
      this.listeners[n] || (this.listeners[n] = []), this.listeners[n].push([r, i]);
    };
    for (let r of this.plugins)
      if (typeof r == "object")
        for (let n in r) {
          if (!nS[n] && /^[A-Z]/.test(n))
            throw new Error(
              `Unknown event ${n} in ${r.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
            );
          if (!iS[n])
            if (typeof r[n] == "object")
              for (let i in r[n])
                i === "*" ? e(r, n, r[n][i]) : e(
                  r,
                  n + "-" + i.toLowerCase(),
                  r[n][i]
                );
            else
              typeof r[n] == "function" && e(r, n, r[n]);
        }
    this.hasListener = Object.keys(this.listeners).length > 0;
  }
  async runAsync() {
    this.plugin = 0;
    for (let e = 0; e < this.plugins.length; e++) {
      let r = this.plugins[e], n = this.runOnRoot(r);
      if (kn(n))
        try {
          await n;
        } catch (i) {
          throw this.handleError(i);
        }
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[dt]; ) {
        e[dt] = !0;
        let r = [Qc(e)];
        for (; r.length > 0; ) {
          let n = this.visitTick(r);
          if (kn(n))
            try {
              await n;
            } catch (i) {
              let a = r[r.length - 1].node;
              throw this.handleError(i, a);
            }
        }
      }
      if (this.listeners.OnceExit)
        for (let [r, n] of this.listeners.OnceExit) {
          this.result.lastPlugin = r;
          try {
            if (e.type === "document") {
              let i = e.nodes.map(
                (a) => n(a, this.helpers)
              );
              await Promise.all(i);
            } else
              await n(e, this.helpers);
          } catch (i) {
            throw this.handleError(i);
          }
        }
    }
    return this.processed = !0, this.stringify();
  }
  runOnRoot(e) {
    this.result.lastPlugin = e;
    try {
      if (typeof e == "object" && e.Once) {
        if (this.result.root.type === "document") {
          let r = this.result.root.nodes.map(
            (n) => e.Once(n, this.helpers)
          );
          return kn(r[0]) ? Promise.all(r) : r;
        }
        return e.Once(this.result.root, this.helpers);
      } else if (typeof e == "function")
        return e(this.result.root, this.result);
    } catch (r) {
      throw this.handleError(r);
    }
  }
  stringify() {
    if (this.error)
      throw this.error;
    if (this.stringified)
      return this.result;
    this.stringified = !0, this.sync();
    let e = this.result.opts, r = Zx;
    e.syntax && (r = e.syntax.stringify), e.stringifier && (r = e.stringifier), r.stringify && (r = r.stringify);
    let i = new Jx(r, this.result.root, this.result.opts).generate();
    return this.result.css = i[0], this.result.map = i[1], this.result;
  }
  sync() {
    if (this.error)
      throw this.error;
    if (this.processed)
      return this.result;
    if (this.processed = !0, this.processing)
      throw this.getAsyncError();
    for (let e of this.plugins) {
      let r = this.runOnRoot(e);
      if (kn(r))
        throw this.getAsyncError();
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[dt]; )
        e[dt] = !0, this.walkSync(e);
      if (this.listeners.OnceExit)
        if (e.type === "document")
          for (let r of e.nodes)
            this.visitSync(this.listeners.OnceExit, r);
        else
          this.visitSync(this.listeners.OnceExit, e);
    }
    return this.result;
  }
  then(e, r) {
    return process.env.NODE_ENV !== "production" && ("from" in this.opts || tS(
      "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
    )), this.async().then(e, r);
  }
  toString() {
    return this.css;
  }
  visitSync(e, r) {
    for (let [n, i] of e) {
      this.result.lastPlugin = n;
      let a;
      try {
        a = i(r, this.helpers);
      } catch (o) {
        throw this.handleError(o, r.proxyOf);
      }
      if (r.type !== "root" && r.type !== "document" && !r.parent)
        return !0;
      if (kn(a))
        throw this.getAsyncError();
    }
  }
  visitTick(e) {
    let r = e[e.length - 1], { node: n, visitors: i } = r;
    if (n.type !== "root" && n.type !== "document" && !n.parent) {
      e.pop();
      return;
    }
    if (i.length > 0 && r.visitorIndex < i.length) {
      let [o, s] = i[r.visitorIndex];
      r.visitorIndex += 1, r.visitorIndex === i.length && (r.visitors = [], r.visitorIndex = 0), this.result.lastPlugin = o;
      try {
        return s(n.toProxy(), this.helpers);
      } catch (u) {
        throw this.handleError(u, n);
      }
    }
    if (r.iterator !== 0) {
      let o = r.iterator, s;
      for (; s = n.nodes[n.indexes[o]]; )
        if (n.indexes[o] += 1, !s[dt]) {
          s[dt] = !0, e.push(Qc(s));
          return;
        }
      r.iterator = 0, delete n.indexes[o];
    }
    let a = r.events;
    for (; r.eventIndex < a.length; ) {
      let o = a[r.eventIndex];
      if (r.eventIndex += 1, o === Gr) {
        n.nodes && n.nodes.length && (n[dt] = !0, r.iterator = n.getIterator());
        return;
      } else if (this.listeners[o]) {
        r.visitors = this.listeners[o];
        return;
      }
    }
    e.pop();
  }
  walkSync(e) {
    e[dt] = !0;
    let r = Ap(e);
    for (let n of r)
      if (n === Gr)
        e.nodes && e.each((i) => {
          i[dt] || this.walkSync(i);
        });
      else {
        let i = this.listeners[n];
        if (i && this.visitSync(i, e.toProxy()))
          return;
      }
  }
  warnings() {
    return this.sync().warnings();
  }
  get content() {
    return this.stringify().content;
  }
  get css() {
    return this.stringify().css;
  }
  get map() {
    return this.stringify().map;
  }
  get messages() {
    return this.sync().messages;
  }
  get opts() {
    return this.result.opts;
  }
  get processor() {
    return this.result.processor;
  }
  get root() {
    return this.sync().root;
  }
  get [Symbol.toStringTag]() {
    return "LazyResult";
  }
};
Kr.registerPostcss = (t) => {
  ll = t;
};
var _p = Kr;
Kr.default = Kr;
Qx.registerLazyResult(Kr);
Yx.registerLazyResult(Kr);
let aS = Sp, oS = Jl;
const sS = Xl;
let lS = Ra, uS = Ep, ul = class {
  constructor(e, r, n) {
    r = r.toString(), this.stringified = !1, this._processor = e, this._css = r, this._opts = n, this._map = void 0;
    let i, a = lS;
    this.result = new sS(this._processor, i, this._opts), this.result.css = r;
    let o = this;
    Object.defineProperty(this.result, "root", {
      get() {
        return o.root;
      }
    });
    let s = new aS(a, i, this._opts, r);
    if (s.isMap()) {
      let [u, c] = s.generate();
      u && (this.result.css = u), c && (this.result.map = c);
    } else
      s.clearAnnotation(), this.result.css = s.css;
  }
  async() {
    return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
  }
  catch(e) {
    return this.async().catch(e);
  }
  finally(e) {
    return this.async().then(e, e);
  }
  sync() {
    if (this.error)
      throw this.error;
    return this.result;
  }
  then(e, r) {
    return process.env.NODE_ENV !== "production" && ("from" in this._opts || uS(
      "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
    )), this.async().then(e, r);
  }
  toString() {
    return this._css;
  }
  warnings() {
    return [];
  }
  get content() {
    return this.result.css;
  }
  get css() {
    return this.result.css;
  }
  get map() {
    return this.result.map;
  }
  get messages() {
    return [];
  }
  get opts() {
    return this.result.opts;
  }
  get processor() {
    return this.result.processor;
  }
  get root() {
    if (this._root)
      return this._root;
    let e, r = oS;
    try {
      e = r(this._css, this._opts);
    } catch (n) {
      this.error = n;
    }
    if (this.error)
      throw this.error;
    return this._root = e, e;
  }
  get [Symbol.toStringTag]() {
    return "NoWorkResult";
  }
};
var cS = ul;
ul.default = ul;
let fS = Kl, dS = _p, pS = cS, hS = oi, Hn = class {
  constructor(e = []) {
    this.version = "8.4.49", this.plugins = this.normalize(e);
  }
  normalize(e) {
    let r = [];
    for (let n of e)
      if (n.postcss === !0 ? n = n() : n.postcss && (n = n.postcss), typeof n == "object" && Array.isArray(n.plugins))
        r = r.concat(n.plugins);
      else if (typeof n == "object" && n.postcssPlugin)
        r.push(n);
      else if (typeof n == "function")
        r.push(n);
      else if (typeof n == "object" && (n.parse || n.stringify)) {
        if (process.env.NODE_ENV !== "production")
          throw new Error(
            "PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation."
          );
      } else
        throw new Error(n + " is not a PostCSS plugin");
    return r;
  }
  process(e, r = {}) {
    return !this.plugins.length && !r.parser && !r.stringifier && !r.syntax ? new pS(this, e, r) : new dS(this, e, r);
  }
  use(e) {
    return this.plugins = this.plugins.concat(this.normalize([e])), this;
  }
};
var mS = Hn;
Hn.default = Hn;
hS.registerProcessor(Hn);
fS.registerProcessor(Hn);
let kp = Gl, Pp = La, gS = mr, yS = ql, Tp = Na, $p = Kl, bS = vx, vS = Ma, wS = _p, xS = gp, SS = Fa, OS = Jl, Ql = mS, ES = Xl, Ip = oi, Dp = Yl, AS = Ra, CS = Op;
function de(...t) {
  return t.length === 1 && Array.isArray(t[0]) && (t = t[0]), new Ql(t);
}
de.plugin = function(e, r) {
  let n = !1;
  function i(...o) {
    console && console.warn && !n && (n = !0, console.warn(
      e + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`
    ), process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(
      e + `: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`
    ));
    let s = r(...o);
    return s.postcssPlugin = e, s.postcssVersion = new Ql().version, s;
  }
  let a;
  return Object.defineProperty(i, "postcss", {
    get() {
      return a || (a = i()), a;
    }
  }), i.process = function(o, s, u) {
    return de([i(u)]).process(o, s);
  }, i;
};
de.stringify = AS;
de.parse = OS;
de.fromJSON = bS;
de.list = xS;
de.comment = (t) => new Pp(t);
de.atRule = (t) => new kp(t);
de.decl = (t) => new Tp(t);
de.rule = (t) => new Dp(t);
de.root = (t) => new Ip(t);
de.document = (t) => new $p(t);
de.CssSyntaxError = yS;
de.Declaration = Tp;
de.Container = gS;
de.Processor = Ql;
de.Document = $p;
de.Comment = Pp;
de.Warning = CS;
de.AtRule = kp;
de.Result = ES;
de.Input = vS;
de.Rule = Dp;
de.Root = Ip;
de.Node = SS;
wS.registerPostcss(de);
var _S = de;
de.default = de;
const me = /* @__PURE__ */ Ia(_S);
me.stringify;
me.fromJSON;
me.plugin;
me.parse;
me.list;
me.document;
me.comment;
me.atRule;
me.rule;
me.decl;
me.root;
me.CssSyntaxError;
me.Declaration;
me.Container;
me.Processor;
me.Document;
me.Comment;
me.Warning;
me.AtRule;
me.Result;
me.Input;
me.Rule;
me.Root;
me.Node;
const kS = { class: "mb-2 flex w-full flex-wrap justify-between text-sm text-gray-600 max-xxs:text-xxs" }, PS = {
  key: 0,
  class: "mb-2 h-fit w-full xs:w-fit"
}, TS = { key: 0 }, $S = {
  key: 1,
  class: "ml-1"
}, IS = { class: "flex w-fit flex-wrap" }, DS = {
  key: 0,
  class: "font-semibold"
}, RS = { class: "mb-1" }, FS = {
  key: 0,
  class: "w-full whitespace-normal font-semibold text-primary"
}, LS = { class: "w-full break-words" }, NS = { class: "mb-1 flex flex-col" }, MS = { key: 1 }, C4 = {
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
  setup(t) {
    const e = t;
    return (r, n) => {
      var i;
      return A(), T("div", {
        key: e.key,
        class: "mt-3 rounded-md border border-gray-300 bg-white px-4 py-3 lg:border lg:border-gray-300"
      }, [
        D("div", kS, [
          e.itemId || e.timeStamp ? (A(), T("div", PS, [
            e.itemId ? (A(), T(fe, { key: 0 }, [
              e.itemId.routeName ? (A(), oe(q(it), {
                key: 1,
                href: r.route(e.itemId.routeName, e.itemId.routeData ? e.itemId.routeData : e.itemId.id)
              }, {
                default: ye(() => [
                  e.itemId.prefix || e.itemId.prefix == null ? (A(), T(fe, { key: 0 }, [
                    ge("#")
                  ], 64)) : K("", !0),
                  ge(" " + Q(e.itemId.id), 1)
                ]),
                _: 1
              }, 8, ["href"])) : (A(), T("span", TS, [
                e.itemId.prefix || e.itemId.prefix == null ? (A(), T(fe, { key: 0 }, [
                  ge("#")
                ], 64)) : K("", !0),
                ge(" " + Q(e.itemId.id), 1)
              ]))
            ], 64)) : K("", !0),
            e.timeStamp ? (A(), T("span", $S, [
              e.itemId ? (A(), T(fe, { key: 0 }, [
                ge("-")
              ], 64)) : K("", !0),
              ge(" " + Q(e.timeStamp), 1)
            ])) : K("", !0)
          ])) : K("", !0),
          D("div", IS, [
            (A(!0), T(fe, null, Ye(t.pills, (a, o) => (A(), T(fe, { key: o }, [
              a.text ? (A(), T("span", {
                key: 0,
                class: "whitespace-nowrap rounded-md border bg-primary p-1 px-2 text-white",
                style: Nr({
                  backgroundColor: a.color ? a.color : null
                })
              }, Q(a.text), 5)) : K("", !0)
            ], 64))), 128))
          ])
        ]),
        e.title ? (A(), T(fe, { key: 0 }, [
          !e.title.routeName && !e.title.href ? (A(), T("p", DS, Q(e.title.text), 1)) : (A(), oe(q(it), {
            key: 1,
            href: e.title.href ? e.title.href : r.route(e.title.routeName, e.title.routeData),
            class: "font-semibold"
          }, {
            default: ye(() => [
              ge(Q(e.title.text), 1)
            ]),
            _: 1
          }, 8, ["href"]))
        ], 64)) : K("", !0),
        D("div", RS, [
          e.extraText ? (A(), T("p", FS, [
            n[0] || (n[0] = ge(" Engineer Note: ")),
            D("span", LS, Q(e.extraText), 1)
          ])) : K("", !0)
        ]),
        D("div", NS, [
          (A(!0), T(fe, null, Ye(t.options, (a, o) => (A(), T(fe, null, [
            !a.routeName && !a.href ? (A(), T("span", {
              key: 0,
              style: Nr({ color: a.color ? a.color : "#000" })
            }, Q(a.text), 5)) : (A(), oe(q(it), {
              key: 1,
              href: a.href ? a.href : r.route(a.routeName, a.routeData),
              style: Nr({ color: a.color ? a.color : "#000" })
            }, {
              default: ye(() => [
                ge(Q(a.text), 1)
              ]),
              _: 2
            }, 1032, ["href", "style"]))
          ], 64))), 256))
        ]),
        (i = e.amount) != null && i.amount ? (A(), T("div", MS, [
          D("span", null, Q(e.amount.text + q(Cw)(e.amount.amount)), 1)
        ])) : K("", !0),
        D("div", null, [
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
const is = (() => {
  const t = {};
  let e = 1;
  return {
    set(r, n, i) {
      typeof r[n] > "u" && (r[n] = {
        key: n,
        id: e
      }, e++), t[r[n].id] = i;
    },
    get(r, n) {
      if (!r || typeof r[n] > "u")
        return null;
      const i = r[n];
      return i.key === n ? t[i.id] : null;
    },
    delete(r, n) {
      if (typeof r[n] > "u")
        return;
      const i = r[n];
      i.key === n && (delete t[i.id], delete r[n]);
    }
  };
})(), Zi = {
  setData(t, e, r) {
    is.set(t, e, r);
  },
  getData(t, e) {
    return is.get(t, e);
  },
  removeData(t, e) {
    is.delete(t, e);
  }
}, BS = 1e6, jS = 1e3, cl = "transitionend", zS = (t) => t == null ? `${t}` : {}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(), US = (t) => {
  do
    t += Math.floor(Math.random() * BS);
  while (document.getElementById(t));
  return t;
}, Rp = (t) => {
  let e = t.getAttribute("data-te-target");
  if (!e || e === "#") {
    let r = t.getAttribute("href");
    if (!r || !r.includes("#") && !r.startsWith("."))
      return null;
    r.includes("#") && !r.startsWith("#") && (r = `#${r.split("#")[1]}`), e = r && r !== "#" ? r.trim() : null;
  }
  return e;
}, Fp = (t) => {
  const e = Rp(t);
  return e && document.querySelector(e) ? e : null;
}, Gn = (t) => {
  const e = Rp(t);
  return e ? document.querySelector(e) : null;
}, VS = (t) => {
  if (!t)
    return 0;
  let { transitionDuration: e, transitionDelay: r } = window.getComputedStyle(t);
  const n = Number.parseFloat(e), i = Number.parseFloat(r);
  return !n && !i ? 0 : (e = e.split(",")[0], r = r.split(",")[0], (Number.parseFloat(e) + Number.parseFloat(r)) * jS);
}, qS = (t) => {
  t.dispatchEvent(new Event(cl));
}, Lp = (t) => !t || typeof t != "object" ? !1 : (typeof t.jquery < "u" && (t = t[0]), typeof t.nodeType < "u"), fl = (t) => Lp(t) ? t.jquery ? t[0] : t : typeof t == "string" && t.length > 0 ? document.querySelector(t) : null, ba = (t, e, r) => {
  Object.keys(r).forEach((n) => {
    const i = r[n], a = e[n], o = a && Lp(a) ? "element" : zS(a);
    if (!new RegExp(i).test(o))
      throw new Error(
        `${t.toUpperCase()}: Option "${n}" provided type "${o}" but expected type "${i}".`
      );
  });
}, Ba = (t) => {
  if (!t || t.getClientRects().length === 0)
    return !1;
  if (t.style && t.parentNode && t.parentNode.style) {
    const e = getComputedStyle(t), r = getComputedStyle(t.parentNode);
    return getComputedStyle(t).getPropertyValue("visibility") === "visible" || e.display !== "none" && r.display !== "none" && e.visibility !== "hidden";
  }
  return !1;
}, ja = (t) => !t || t.nodeType !== Node.ELEMENT_NODE || t.classList.contains("disabled") ? !0 : typeof t.disabled < "u" ? t.disabled : t.hasAttribute("disabled") && t.getAttribute("disabled") !== "false", WS = (t) => {
  t.offsetHeight;
}, Np = () => {
  const { jQuery: t } = window;
  return t && !document.body.hasAttribute("data-te-no-jquery") ? t : null;
}, as = [], HS = (t) => {
  document.readyState === "loading" ? (as.length || document.addEventListener("DOMContentLoaded", () => {
    as.forEach((e) => e());
  }), as.push(t)) : t();
}, vt = () => document.documentElement.dir === "rtl", GS = (t) => document.createElement(t), Zc = (t) => {
  typeof t == "function" && t();
}, KS = (t, e, r = !0) => {
  if (!r) {
    Zc(t);
    return;
  }
  const n = 5, i = VS(e) + n;
  let a = !1;
  const o = ({ target: s }) => {
    s === e && (a = !0, e.removeEventListener(cl, o), Zc(t));
  };
  e.addEventListener(cl, o), setTimeout(() => {
    a || qS(e);
  }, i);
}, YS = /[^.]*(?=\..*)\.|.*/, JS = /\..*/, XS = /::\d+$/, os = {};
let ef = 1;
const QS = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, ZS = /^(mouseenter|mouseleave)/i, Mp = /* @__PURE__ */ new Set([
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
function Bp(t, e) {
  return e && `${e}::${ef++}` || t.uidEvent || ef++;
}
function jp(t) {
  const e = Bp(t);
  return t.uidEvent = e, os[e] = os[e] || {}, os[e];
}
function eO(t, e) {
  return function r(n) {
    return n.delegateTarget = t, r.oneOff && pe.off(t, n.type, e), e.apply(t, [n]);
  };
}
function tO(t, e, r) {
  return function n(i) {
    const a = t.querySelectorAll(e);
    for (let { target: o } = i; o && o !== this; o = o.parentNode)
      for (let s = a.length; s--; "")
        if (a[s] === o)
          return i.delegateTarget = o, n.oneOff && pe.off(t, i.type, r), r.apply(o, [i]);
    return null;
  };
}
function zp(t, e, r = null) {
  const n = Object.keys(t);
  for (let i = 0, a = n.length; i < a; i++) {
    const o = t[n[i]];
    if (o.originalHandler === e && o.delegationSelector === r)
      return o;
  }
  return null;
}
function Up(t, e, r) {
  const n = typeof e == "string", i = n ? r : e;
  let a = Vp(t);
  return Mp.has(a) || (a = t), [n, i, a];
}
function tf(t, e, r, n, i) {
  if (typeof e != "string" || !t)
    return;
  if (r || (r = n, n = null), ZS.test(e)) {
    const O = (g) => function(S) {
      if (!S.relatedTarget || S.relatedTarget !== S.delegateTarget && !S.delegateTarget.contains(S.relatedTarget))
        return g.call(this, S);
    };
    n ? n = O(n) : r = O(r);
  }
  const [a, o, s] = Up(
    e,
    r,
    n
  ), u = jp(t), c = u[s] || (u[s] = {}), f = zp(
    c,
    o,
    a ? r : null
  );
  if (f) {
    f.oneOff = f.oneOff && i;
    return;
  }
  const p = Bp(
    o,
    e.replace(YS, "")
  ), m = a ? tO(t, r, n) : eO(t, r);
  m.delegationSelector = a ? r : null, m.originalHandler = o, m.oneOff = i, m.uidEvent = p, c[p] = m, t.addEventListener(s, m, a);
}
function dl(t, e, r, n, i) {
  const a = zp(e[r], n, i);
  a && (t.removeEventListener(r, a, !!i), delete e[r][a.uidEvent]);
}
function rO(t, e, r, n) {
  const i = e[r] || {};
  Object.keys(i).forEach((a) => {
    if (a.includes(n)) {
      const o = i[a];
      dl(
        t,
        e,
        r,
        o.originalHandler,
        o.delegationSelector
      );
    }
  });
}
function Vp(t) {
  return t = t.replace(JS, ""), QS[t] || t;
}
const pe = {
  on(t, e, r, n) {
    tf(t, e, r, n, !1);
  },
  one(t, e, r, n) {
    tf(t, e, r, n, !0);
  },
  off(t, e, r, n) {
    if (typeof e != "string" || !t)
      return;
    const [i, a, o] = Up(
      e,
      r,
      n
    ), s = o !== e, u = jp(t), c = e.startsWith(".");
    if (typeof a < "u") {
      if (!u || !u[o])
        return;
      dl(
        t,
        u,
        o,
        a,
        i ? r : null
      );
      return;
    }
    c && Object.keys(u).forEach((p) => {
      rO(
        t,
        u,
        p,
        e.slice(1)
      );
    });
    const f = u[o] || {};
    Object.keys(f).forEach((p) => {
      const m = p.replace(XS, "");
      if (!s || e.includes(m)) {
        const O = f[p];
        dl(
          t,
          u,
          o,
          O.originalHandler,
          O.delegationSelector
        );
      }
    });
  },
  trigger(t, e, r) {
    if (typeof e != "string" || !t)
      return null;
    const n = Np(), i = Vp(e), a = e !== i, o = Mp.has(i);
    let s, u = !0, c = !0, f = !1, p = null;
    return a && n && (s = n.Event(e, r), n(t).trigger(s), u = !s.isPropagationStopped(), c = !s.isImmediatePropagationStopped(), f = s.isDefaultPrevented()), o ? (p = document.createEvent("HTMLEvents"), p.initEvent(i, u, !0)) : p = new CustomEvent(e, {
      bubbles: u,
      cancelable: !0
    }), typeof r < "u" && Object.keys(r).forEach((m) => {
      Object.defineProperty(p, m, {
        get() {
          return r[m];
        }
      });
    }), f && p.preventDefault(), c && t.dispatchEvent(p), p.defaultPrevented && typeof s < "u" && s.preventDefault(), p;
  }
}, nO = "5.1.3";
class qp {
  constructor(e) {
    e = fl(e), e && (this._element = e, Zi.setData(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    Zi.removeData(this._element, this.constructor.DATA_KEY), pe.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((e) => {
      this[e] = null;
    });
  }
  _queueCallback(e, r, n = !0) {
    KS(e, r, n);
  }
  /** Static */
  static getInstance(e) {
    return Zi.getData(fl(e), this.DATA_KEY);
  }
  static getOrCreateInstance(e, r = {}) {
    return this.getInstance(e) || new this(e, typeof r == "object" ? r : null);
  }
  static get VERSION() {
    return nO;
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
function ss(t) {
  return t === "true" ? !0 : t === "false" ? !1 : t === Number(t).toString() ? Number(t) : t === "" || t === "null" ? null : t;
}
function ls(t) {
  return t.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
const ce = {
  setDataAttribute(t, e, r) {
    t.setAttribute(`data-te-${ls(e)}`, r);
  },
  removeDataAttribute(t, e) {
    t.removeAttribute(`data-te-${ls(e)}`);
  },
  getDataAttributes(t) {
    if (!t)
      return {};
    const e = {};
    return Object.keys(t.dataset).filter((r) => r.startsWith("te")).forEach((r) => {
      if (r.startsWith("teClass"))
        return;
      let n = r.replace(/^te/, "");
      n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = ss(t.dataset[r]);
    }), e;
  },
  getDataClassAttributes(t) {
    if (!t)
      return {};
    const e = {
      ...t.dataset
    };
    return Object.keys(e).filter((r) => r.startsWith("teClass")).forEach((r) => {
      let n = r.replace(/^teClass/, "");
      n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = ss(e[r]);
    }), e;
  },
  getDataAttribute(t, e) {
    return ss(
      t.getAttribute(`data-te-${ls(e)}`)
    );
  },
  offset(t) {
    const e = t.getBoundingClientRect();
    return {
      top: e.top + document.body.scrollTop,
      left: e.left + document.body.scrollLeft
    };
  },
  position(t) {
    return {
      top: t.offsetTop,
      left: t.offsetLeft
    };
  },
  style(t, e) {
    Object.assign(t.style, e);
  },
  toggleClass(t, e) {
    t && us(e).forEach((r) => {
      t.classList.contains(r) ? t.classList.remove(r) : t.classList.add(r);
    });
  },
  addClass(t, e) {
    us(e).forEach(
      (r) => !t.classList.contains(r) && t.classList.add(r)
    );
  },
  addStyle(t, e) {
    Object.keys(e).forEach((r) => {
      t.style[r] = e[r];
    });
  },
  removeClass(t, e) {
    us(e).forEach(
      (r) => t.classList.contains(r) && t.classList.remove(r)
    );
  },
  hasClass(t, e) {
    return t.classList.contains(e);
  },
  maxOffset(t) {
    const e = t.getBoundingClientRect();
    return {
      top: e.top + Math.max(
        document.body.scrollTop,
        document.documentElement.scrollTop,
        window.scrollY
      ),
      left: e.left + Math.max(
        document.body.scrollLeft,
        document.documentElement.scrollLeft,
        window.scrollX
      )
    };
  }
};
function us(t) {
  return typeof t == "string" ? t.split(" ") : Array.isArray(t) ? t : !1;
}
const iO = 3, Ue = {
  closest(t, e) {
    return t.closest(e);
  },
  matches(t, e) {
    return t.matches(e);
  },
  find(t, e = document.documentElement) {
    return [].concat(
      ...Element.prototype.querySelectorAll.call(e, t)
    );
  },
  findOne(t, e = document.documentElement) {
    return Element.prototype.querySelector.call(e, t);
  },
  children(t, e) {
    return [].concat(...t.children).filter((r) => r.matches(e));
  },
  parents(t, e) {
    const r = [];
    let n = t.parentNode;
    for (; n && n.nodeType === Node.ELEMENT_NODE && n.nodeType !== iO; )
      this.matches(n, e) && r.push(n), n = n.parentNode;
    return r;
  },
  prev(t, e) {
    let r = t.previousElementSibling;
    for (; r; ) {
      if (r.matches(e))
        return [r];
      r = r.previousElementSibling;
    }
    return [];
  },
  next(t, e) {
    let r = t.nextElementSibling;
    for (; r; ) {
      if (this.matches(r, e))
        return [r];
      r = r.nextElementSibling;
    }
    return [];
  },
  focusableChildren(t) {
    const e = [
      "a",
      "button",
      "input",
      "textarea",
      "select",
      "details",
      "[tabindex]",
      '[contenteditable="true"]'
    ].map((r) => `${r}:not([tabindex^="-"])`).join(", ");
    return this.find(e, t).filter(
      (r) => !ja(r) && Ba(r)
    );
  }
};
vt();
vt();
vt();
vt();
vt();
vt();
const cs = "collapse", Wp = "te.collapse", za = `.${Wp}`, rf = {
  toggle: !0,
  parent: null
}, aO = {
  toggle: "boolean",
  parent: "(null|element)"
}, oO = `show${za}`, sO = `shown${za}`, lO = `hide${za}`, uO = `hidden${za}`, fs = "data-te-collapse-show", nf = "data-te-collapse-collapsed", Ui = "data-te-collapse-collapsing", cO = "data-te-collapse-horizontal", Lr = "data-te-collapse-item", af = `:scope [${Lr}] [${Lr}]`, fO = "width", dO = "height", pO = "[data-te-collapse-item][data-te-collapse-show], [data-te-collapse-item][data-te-collapse-collapsing]", of = "[data-te-collapse-init]", hO = {
  visible: "!visible",
  hidden: "hidden",
  baseTransition: "overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsing: "h-0 transition-[height] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsingHorizontal: "w-0 h-auto transition-[width] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
}, mO = {
  visible: "string",
  hidden: "string",
  baseTransition: "string",
  collapsing: "string",
  collapsingHorizontal: "string"
};
class jr extends qp {
  constructor(e, r, n) {
    super(e), this._isTransitioning = !1, this._config = this._getConfig(r), this._classes = this._getClasses(n), this._triggerArray = [];
    const i = Ue.find(of);
    for (let a = 0, o = i.length; a < o; a++) {
      const s = i[a], u = Fp(s), c = Ue.find(u).filter(
        (f) => f === this._element
      );
      u !== null && c.length && (this._selector = u, this._triggerArray.push(s));
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return rf;
  }
  static get NAME() {
    return cs;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let e = [], r;
    if (this._config.parent) {
      const u = Ue.find(
        af,
        this._config.parent
      );
      e = Ue.find(
        pO,
        this._config.parent
      ).filter((c) => !u.includes(c));
    }
    const n = Ue.findOne(this._selector);
    if (e.length) {
      const u = e.find((c) => n !== c);
      if (r = u ? jr.getInstance(u) : null, r && r._isTransitioning)
        return;
    }
    if (pe.trigger(this._element, oO).defaultPrevented)
      return;
    e.forEach((u) => {
      n !== u && jr.getOrCreateInstance(u, { toggle: !1 }).hide(), r || Zi.setData(u, Wp, null);
    });
    const i = this._getDimension(), a = i === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    ce.removeClass(this._element, this._classes.visible), ce.removeClass(this._element, this._classes.hidden), ce.addClass(this._element, a), this._element.removeAttribute(Lr), this._element.setAttribute(Ui, ""), this._element.style[i] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const o = () => {
      this._isTransitioning = !1, ce.removeClass(this._element, this._classes.hidden), ce.removeClass(this._element, a), ce.addClass(this._element, this._classes.visible), this._element.removeAttribute(Ui), this._element.setAttribute(Lr, ""), this._element.setAttribute(fs, ""), this._element.style[i] = "", pe.trigger(this._element, sO);
    }, s = `scroll${i[0].toUpperCase() + i.slice(1)}`;
    this._queueCallback(o, this._element, !0), this._element.style[i] = `${this._element[s]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || pe.trigger(this._element, lO).defaultPrevented)
      return;
    const e = this._getDimension(), r = e === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, WS(this._element), ce.addClass(this._element, r), ce.removeClass(this._element, this._classes.visible), ce.removeClass(this._element, this._classes.hidden), this._element.setAttribute(Ui, ""), this._element.removeAttribute(Lr), this._element.removeAttribute(fs);
    const n = this._triggerArray.length;
    for (let a = 0; a < n; a++) {
      const o = this._triggerArray[a], s = Gn(o);
      s && !this._isShown(s) && this._addAriaAndCollapsedClass([o], !1);
    }
    this._isTransitioning = !0;
    const i = () => {
      this._isTransitioning = !1, ce.removeClass(this._element, r), ce.addClass(this._element, this._classes.visible), ce.addClass(this._element, this._classes.hidden), this._element.removeAttribute(Ui), this._element.setAttribute(Lr, ""), pe.trigger(this._element, uO);
    };
    this._element.style[e] = "", this._queueCallback(i, this._element, !0);
  }
  _isShown(e = this._element) {
    return e.hasAttribute(fs);
  }
  // Private
  _getConfig(e) {
    return e = {
      ...rf,
      ...ce.getDataAttributes(this._element),
      ...e
    }, e.toggle = !!e.toggle, e.parent = fl(e.parent), ba(cs, e, aO), e;
  }
  _getClasses(e) {
    const r = ce.getDataClassAttributes(this._element);
    return e = {
      ...hO,
      ...r,
      ...e
    }, ba(cs, e, mO), e;
  }
  _getDimension() {
    return this._element.hasAttribute(cO) ? fO : dO;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const e = Ue.find(
      af,
      this._config.parent
    );
    Ue.find(of, this._config.parent).filter((r) => !e.includes(r)).forEach((r) => {
      const n = Gn(r);
      n && this._addAriaAndCollapsedClass([r], this._isShown(n));
    });
  }
  _addAriaAndCollapsedClass(e, r) {
    e.length && e.forEach((n) => {
      r ? n.removeAttribute(nf) : n.setAttribute(`${nf}`, ""), n.setAttribute("aria-expanded", r);
    });
  }
  // Static
  static jQueryInterface(e) {
    return this.each(function() {
      const r = {};
      typeof e == "string" && /show|hide/.test(e) && (r.toggle = !1);
      const n = jr.getOrCreateInstance(this, r);
      if (typeof e == "string") {
        if (typeof n[e] > "u")
          throw new TypeError(`No method named "${e}"`);
        n[e]();
      }
    });
  }
}
let sf = [];
const gO = (t, e = "hide") => {
  const r = `click.dismiss${t.EVENT_KEY}`, n = t.NAME;
  sf.includes(n) || (sf.push(n), pe.on(
    document,
    r,
    `[data-te-${n}-dismiss]`,
    function(i) {
      if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), ja(this))
        return;
      const a = Gn(this) || this.closest(`.${n}`) || this.closest(`[data-te-${n}-init]`);
      a && t.getOrCreateInstance(a)[e]();
    }
  ));
}, ds = "alert", yO = "te.alert", Hp = `.${yO}`, bO = `close${Hp}`, vO = `closed${Hp}`, Pn = "data-te-alert-show", wO = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, lf = {
  animation: !0,
  autohide: !0,
  delay: 1e3
}, xO = {
  fadeIn: "animate-[fade-in_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none",
  fadeOut: "animate-[fade-out_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none"
}, SO = {
  fadeIn: "string",
  fadeOut: "string"
};
class va extends qp {
  constructor(e, r, n) {
    super(e), this._element = e, this._config = this._getConfig(r), this._classes = this._getClasses(n), this._didInit = !1, this._init();
  }
  // Getters
  static get DefaultType() {
    return wO;
  }
  static get Default() {
    return lf;
  }
  static get NAME() {
    return ds;
  }
  // Public
  close() {
    if (pe.trigger(this._element, bO).defaultPrevented)
      return;
    let e = 0;
    this._config.animation && (e = 300, ce.addClass(this._element, this._classes.fadeOut)), this._element.removeAttribute(Pn), setTimeout(() => {
      this._queueCallback(
        () => this._destroyElement(),
        this._element,
        this._config.animation
      );
    }, e);
  }
  show() {
    if (this._element) {
      if (this._config.autohide && this._setupAutohide(), !this._element.hasAttribute(Pn) && (ce.removeClass(this._element, "hidden"), ce.addClass(this._element, "block"), Ba(this._element))) {
        const e = (r) => {
          ce.removeClass(this._element, "hidden"), ce.addClass(this._element, "block"), pe.off(r.target, "animationend", e);
        };
        this._element.setAttribute(Pn, ""), pe.on(this._element, "animationend", e);
      }
      this._config.animation && (ce.removeClass(this._element, this._classes.fadeOut), ce.addClass(this._element, this._classes.fadeIn));
    }
  }
  hide() {
    if (this._element && this._element.hasAttribute(Pn)) {
      this._element.removeAttribute(Pn);
      const e = (r) => {
        ce.addClass(this._element, "hidden"), ce.removeClass(this._element, "block"), this._timeout !== null && (clearTimeout(this._timeout), this._timeout = null), pe.off(r.target, "animationend", e);
      };
      pe.on(this._element, "animationend", e), ce.removeClass(this._element, this._classes.fadeIn), ce.addClass(this._element, this._classes.fadeOut);
    }
  }
  // Private
  _init() {
    this._didInit || (gO(va, "close"), this._didInit = !0);
  }
  _getConfig(e) {
    return e = {
      ...lf,
      ...ce.getDataAttributes(this._element),
      ...typeof e == "object" && e ? e : {}
    }, ba(ds, e, this.constructor.DefaultType), e;
  }
  _getClasses(e) {
    const r = ce.getDataClassAttributes(this._element);
    return e = {
      ...xO,
      ...r,
      ...e
    }, ba(ds, e, SO), e;
  }
  _setupAutohide() {
    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }
  _destroyElement() {
    this._element.remove(), pe.trigger(this._element, vO), this.dispose();
  }
  // Static
  static jQueryInterface(e) {
    return this.each(function() {
      const r = va.getOrCreateInstance(this);
      if (typeof e == "string") {
        if (r[e] === void 0 || e.startsWith("_") || e === "constructor")
          throw new TypeError(`No method named "${e}"`);
        r[e](this);
      }
    });
  }
}
vt(), vt();
(() => {
  var t = { 454: (n, i, a) => {
    a.d(i, { Z: () => u });
    var o = a(645), s = a.n(o)()(function(c) {
      return c[1];
    });
    s.push([n.id, "INPUT:-webkit-autofill,SELECT:-webkit-autofill,TEXTAREA:-webkit-autofill{animation-name:onautofillstart}INPUT:not(:-webkit-autofill),SELECT:not(:-webkit-autofill),TEXTAREA:not(:-webkit-autofill){animation-name:onautofillcancel}@keyframes onautofillstart{}@keyframes onautofillcancel{}", ""]);
    const u = s;
  }, 645: (n) => {
    n.exports = function(i) {
      var a = [];
      return a.toString = function() {
        return this.map(function(o) {
          var s = i(o);
          return o[2] ? "@media ".concat(o[2], " {").concat(s, "}") : s;
        }).join("");
      }, a.i = function(o, s, u) {
        typeof o == "string" && (o = [[null, o, ""]]);
        var c = {};
        if (u)
          for (var f = 0; f < this.length; f++) {
            var p = this[f][0];
            p != null && (c[p] = !0);
          }
        for (var m = 0; m < o.length; m++) {
          var O = [].concat(o[m]);
          u && c[O[0]] || (s && (O[2] ? O[2] = "".concat(s, " and ").concat(O[2]) : O[2] = s), a.push(O));
        }
      }, a;
    };
  }, 810: () => {
    (function() {
      if (typeof window < "u")
        try {
          var n = new window.CustomEvent("test", { cancelable: !0 });
          if (n.preventDefault(), n.defaultPrevented !== !0)
            throw new Error("Could not prevent default");
        } catch {
          var i = function(a, o) {
            var s, u;
            return (o = o || {}).bubbles = !!o.bubbles, o.cancelable = !!o.cancelable, (s = document.createEvent("CustomEvent")).initCustomEvent(a, o.bubbles, o.cancelable, o.detail), u = s.preventDefault, s.preventDefault = function() {
              u.call(this);
              try {
                Object.defineProperty(this, "defaultPrevented", { get: function() {
                  return !0;
                } });
              } catch {
                this.defaultPrevented = !0;
              }
            }, s;
          };
          i.prototype = window.Event.prototype, window.CustomEvent = i;
        }
    })();
  }, 379: (n, i, a) => {
    var o, s = function() {
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
        var B = E[z], N = _.base ? B[0] + _.base : B[0], R = I[N] || 0, V = "".concat(N, " ").concat(R);
        I[N] = R + 1;
        var h = c(V), b = { css: B[1], media: B[2], sourceMap: B[3] };
        h !== -1 ? (u[h].references++, u[h].updater(b)) : u.push({ identifier: V, updater: P(b, _), references: 1 }), j.push(V);
      }
      return j;
    }
    function p(E) {
      var _ = document.createElement("style"), I = E.attributes || {};
      if (I.nonce === void 0) {
        var j = a.nc;
        j && (I.nonce = j);
      }
      if (Object.keys(I).forEach(function(B) {
        _.setAttribute(B, I[B]);
      }), typeof E.insert == "function")
        E.insert(_);
      else {
        var z = s(E.insert || "head");
        if (!z)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        z.appendChild(_);
      }
      return _;
    }
    var m, O = (m = [], function(E, _) {
      return m[E] = _, m.filter(Boolean).join(`
`);
    });
    function g(E, _, I, j) {
      var z = I ? "" : j.media ? "@media ".concat(j.media, " {").concat(j.css, "}") : j.css;
      if (E.styleSheet)
        E.styleSheet.cssText = O(_, z);
      else {
        var B = document.createTextNode(z), N = E.childNodes;
        N[_] && E.removeChild(N[_]), N.length ? E.insertBefore(B, N[_]) : E.appendChild(B);
      }
    }
    function S(E, _, I) {
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
    var v = null, C = 0;
    function P(E, _) {
      var I, j, z;
      if (_.singleton) {
        var B = C++;
        I = v || (v = p(_)), j = g.bind(null, I, B, !1), z = g.bind(null, I, B, !0);
      } else
        I = p(_), j = S.bind(null, I, _), z = function() {
          (function(N) {
            if (N.parentNode === null)
              return !1;
            N.parentNode.removeChild(N);
          })(I);
        };
      return j(E), function(N) {
        if (N) {
          if (N.css === E.css && N.media === E.media && N.sourceMap === E.sourceMap)
            return;
          j(E = N);
        } else
          z();
      };
    }
    n.exports = function(E, _) {
      (_ = _ || {}).singleton || typeof _.singleton == "boolean" || (_.singleton = (o === void 0 && (o = !!(window && document && document.all && !window.atob)), o));
      var I = f(E = E || [], _);
      return function(j) {
        if (j = j || [], Object.prototype.toString.call(j) === "[object Array]") {
          for (var z = 0; z < I.length; z++) {
            var B = c(I[z]);
            u[B].references--;
          }
          for (var N = f(j, _), R = 0; R < I.length; R++) {
            var V = c(I[R]);
            u[V].references === 0 && (u[V].updater(), u.splice(V, 1));
          }
          I = N;
        }
      };
    };
  } }, e = {};
  function r(n) {
    var i = e[n];
    if (i !== void 0)
      return i.exports;
    var a = e[n] = { id: n, exports: {} };
    return t[n](a, a.exports, r), a.exports;
  }
  r.n = (n) => {
    var i = n && n.__esModule ? () => n.default : () => n;
    return r.d(i, { a: i }), i;
  }, r.d = (n, i) => {
    for (var a in i)
      r.o(i, a) && !r.o(n, a) && Object.defineProperty(n, a, { enumerable: !0, get: i[a] });
  }, r.o = (n, i) => Object.prototype.hasOwnProperty.call(n, i), (() => {
    var n = r(379), i = r.n(n), a = r(454);
    function o(u) {
      if (!u.hasAttribute("autocompleted")) {
        u.setAttribute("autocompleted", "");
        var c = new window.CustomEvent("onautocomplete", { bubbles: !0, cancelable: !0, detail: null });
        u.dispatchEvent(c) || (u.value = "");
      }
    }
    function s(u) {
      u.hasAttribute("autocompleted") && (u.removeAttribute("autocompleted"), u.dispatchEvent(new window.CustomEvent("onautocomplete", { bubbles: !0, cancelable: !1, detail: null })));
    }
    i()(a.Z, { insert: "head", singleton: !1 }), a.Z.locals, r(810), document.addEventListener("animationstart", function(u) {
      u.animationName === "onautofillstart" ? o(u.target) : s(u.target);
    }, !0), document.addEventListener("input", function(u) {
      u.inputType !== "insertReplacementText" && "data" in u ? s(u.target) : o(u.target);
    }, !0);
  })();
})();
vt();
vt();
US("chips-input-");
const Nt = {
  plugins: {
    legend: {
      labels: {
        color: "rgb(102,102,102)"
      }
    }
  }
}, OO = {
  line: {
    options: {
      ...Nt,
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
      ...Nt,
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
      ...Nt,
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
      ...Nt,
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
      ...Nt,
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
      ...Nt,
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
      ...Nt,
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
      ...Nt,
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
var Ua = function(t) {
  this.element = t, this.handlers = {};
}, Gp = { isEmpty: { configurable: !0 } };
Ua.prototype.bind = function(t, e) {
  typeof this.handlers[t] > "u" && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, !1);
};
Ua.prototype.unbind = function(t, e) {
  var r = this;
  this.handlers[t] = this.handlers[t].filter(function(n) {
    return e && n !== e ? !0 : (r.element.removeEventListener(t, n, !1), !1);
  });
};
Ua.prototype.unbindAll = function() {
  for (var t in this.handlers)
    this.unbind(t);
};
Gp.isEmpty.get = function() {
  var t = this;
  return Object.keys(this.handlers).every(
    function(e) {
      return t.handlers[e].length === 0;
    }
  );
};
Object.defineProperties(Ua.prototype, Gp);
typeof document < "u" && "WebkitAppearance" in document.documentElement.style, typeof window < "u" && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch), typeof navigator < "u" && navigator.msMaxTouchPoints, typeof navigator < "u" && /Chrome/i.test(navigator && navigator.userAgent);
GS("div");
const EO = (t) => {
  HS(() => {
    const e = Np();
    if (e) {
      const r = t.NAME, n = e.fn[r];
      e.fn[r] = t.jQueryInterface, e.fn[r].Constructor = t, e.fn[r].noConflict = () => (e.fn[r] = n, t.jQueryInterface);
    }
  });
}, AO = (t, e) => {
  pe.on(
    document,
    `click.te.${t.NAME}`,
    e,
    function(r) {
      r.preventDefault(), t.getOrCreateInstance(this).toggle();
    }
  );
}, CO = (t, e) => {
  pe.on(
    document,
    `click.te.${t.NAME}.data-api`,
    e,
    function(r) {
      ["A", "AREA"].includes(this.tagName) && r.preventDefault(), !ja(this) && t.getOrCreateInstance(this).show();
    }
  );
}, _O = (t, e) => {
  pe.on(
    document,
    `click.te.${t.NAME}.data-api`,
    e,
    function(r) {
      const n = Gn(this);
      if (["A", "AREA"].includes(this.tagName) && r.preventDefault(), ja(this))
        return;
      pe.one(n, t.EVENT_HIDDEN, () => {
        Ba(this) && this.focus();
      });
      const i = Ue.findOne(t.OPEN_SELECTOR);
      i && i !== n && t.getInstance(i).hide(), t.getOrCreateInstance(n).toggle(this);
    }
  );
}, kO = (t, e) => {
  pe.on(
    document,
    `click.te.${t.NAME}`,
    e,
    (r) => {
      r.preventDefault();
      const n = r.target.closest(e);
      t.getOrCreateInstance(n).toggle();
    }
  );
}, PO = (t, e) => {
  pe.on(
    document,
    `click.te.${t.NAME}`,
    e,
    function(r) {
      const n = Gn(this);
      ["A", "AREA"].includes(this.tagName) && r.preventDefault(), pe.one(n, t.EVENT_SHOW, (a) => {
        a.defaultPrevented || pe.one(n, t.EVENT_HIDDEN, () => {
          Ba(this) && this.focus();
        });
      });
      const i = Ue.findOne(
        `[${t.OPEN_SELECTOR}="true"]`
      );
      i && t.getInstance(i).hide(), t.getOrCreateInstance(n).toggle(this);
    }
  );
}, TO = (t, e) => {
  pe.one(
    document,
    "mousedown",
    e,
    t.autoInitial(new t())
  );
}, $O = (t, e) => {
  pe.on(
    document,
    `click.te.${t.NAME}.data-api`,
    e,
    function(r) {
      (r.target.tagName === "A" || r.delegateTarget && r.delegateTarget.tagName === "A") && r.preventDefault();
      const n = Fp(this);
      Ue.find(n).forEach((i) => {
        t.getOrCreateInstance(i, { toggle: !1 }).toggle();
      });
    }
  );
}, IO = (t, e) => {
  [].slice.call(
    document.querySelectorAll(e)
  ).map(function(r) {
    return new t(r);
  });
}, DO = (t, e) => {
  [].slice.call(
    document.querySelectorAll(e)
  ).map(function(r) {
    return new t(r);
  });
}, RO = (t, e) => {
  Ue.find(e).forEach((r) => {
    new t(r);
  }), pe.on(
    document,
    `click.te.${t.NAME}.data-api`,
    `${e} img:not([data-te-lightbox-disabled])`,
    t.toggle()
  );
}, FO = (t, e) => {
  const r = (a) => a[0] === "{" && a[a.length - 1] === "}" || a[0] === "[" && a[a.length - 1] === "]", n = (a) => typeof a != "string" ? a : r(a) ? JSON.parse(a.replace(/'/g, '"')) : a, i = (a) => {
    const o = {};
    return Object.keys(a).forEach((s) => {
      if (s.match(/dataset.*/)) {
        const u = s.slice(7, 8).toLowerCase().concat(s.slice(8));
        o[u] = n(a[s]);
      }
    }), o;
  };
  Ue.find(e).forEach((a) => {
    if (ce.getDataAttribute(a, "chart") !== "bubble" && ce.getDataAttribute(a, "chart") !== "scatter") {
      const o = ce.getDataAttributes(a), s = {
        data: {
          datasets: [i(o)]
        }
      };
      return o.chart && (s.type = o.chart), o.labels && (s.data.labels = JSON.parse(o.labels.replace(/'/g, '"'))), new t(a, {
        ...s,
        ...OO[s.type]
      });
    }
    return null;
  });
};
class LO {
  constructor() {
    this.inits = [];
  }
  get initialized() {
    return this.inits;
  }
  isInited(e) {
    return this.inits.includes(e);
  }
  add(e) {
    this.isInited(e) || this.inits.push(e);
  }
}
const pl = new LO(), $n = {
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
    advanced: FO
  },
  // togglers
  button: {
    name: "Button",
    selector: "[data-te-toggle='button']",
    isToggler: !0,
    callback: kO
  },
  collapse: {
    name: "Collapse",
    selector: "[data-te-collapse-init]",
    isToggler: !0,
    callback: $O
  },
  dropdown: {
    name: "Dropdown",
    selector: "[data-te-dropdown-toggle-ref]",
    isToggler: !0,
    callback: AO
  },
  modal: {
    name: "Modal",
    selector: "[data-te-toggle='modal']",
    isToggler: !0,
    callback: PO
  },
  ripple: {
    name: "Ripple",
    selector: "[data-te-ripple-init]",
    isToggler: !0,
    callback: TO
  },
  offcanvas: {
    name: "Offcanvas",
    selector: "[data-te-offcanvas-toggle]",
    isToggler: !0,
    callback: _O
  },
  tab: {
    name: "Tab",
    selector: "[data-te-toggle='tab'], [data-te-toggle='pill'], [data-te-toggle='list']",
    isToggler: !0,
    callback: CO
  },
  tooltip: {
    name: "Tooltip",
    selector: "[data-te-toggle='tooltip']",
    isToggler: !1,
    callback: IO
  },
  popover: {
    name: "Popover",
    selector: "[data-te-toggle='popover']",
    isToggler: !0,
    callback: DO
  },
  lightbox: {
    name: "Lightbox",
    selector: "[data-te-lightbox-init]",
    isToggler: !0,
    callback: RO
  },
  touch: {
    name: "Touch",
    selector: "[data-te-touch-init]"
  }
}, NO = (t) => $n[t.NAME] || null, MO = (t, e) => {
  if (!t || !e.allowReinits && pl.isInited(t.NAME))
    return;
  pl.add(t.NAME);
  const r = NO(t), n = (r == null ? void 0 : r.isToggler) || !1;
  if (EO(t), r != null && r.advanced) {
    r == null || r.advanced(t, r == null ? void 0 : r.selector);
    return;
  }
  if (n) {
    r == null || r.callback(t, r == null ? void 0 : r.selector);
    return;
  }
  Ue.find(r == null ? void 0 : r.selector).forEach((i) => {
    let a = t.getInstance(i);
    a || (a = new t(i), r != null && r.onInit && a[r.onInit]());
  });
}, BO = (t, e) => {
  t.forEach((r) => MO(r, e));
}, jO = {
  allowReinits: !1,
  checkOtherImports: !1
}, zO = (t, e = {}) => {
  e = { ...jO, ...e };
  const r = Object.keys($n).map((n) => {
    if (document.querySelector($n[n].selector)) {
      const i = t[$n[n].name];
      return !i && !pl.isInited(n) && e.checkOtherImports && console.warn(
        `Please import ${$n[n].name} from "tw-elements" package and add it to a object parameter inside "initTE" function`
      ), i;
    }
  });
  BO(r, e);
}, UO = { role: "alert" }, VO = {
  class: "mt-2 hidden w-full items-center rounded bg-primary-100 px-6 py-1 text-base text-neutral-800 shadow-sm data-[te-alert-show]:inline-flex sm:rounded-lg",
  role: "alert",
  "data-te-alert-init": "",
  "data-te-alert-show": ""
}, _4 = {
  __name: "Alert",
  props: {
    message: String
  },
  setup(t) {
    return Je(() => {
      zO({ Alert: va });
    }), (e, r) => (A(), T("div", UO, [
      D("div", null, [
        D("div", VO, [
          J(e.$slots, "default"),
          r[0] || (r[0] = D("button", {
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
}, qO = ["aria-controls"], WO = {
  class: "text-xs font-semibold uppercase leading-normal text-primary hover:text-primary-700",
  type: "button"
}, HO = ["id"], GO = {
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
  setup(t) {
    const e = t, r = Z(null), n = Z(null), i = Z(e.open);
    Je(() => {
      n.value = new jr(r.value, {
        toggle: e.open
      });
    });
    const a = () => {
      n.value.toggle(), i.value = !i.value;
    };
    return (o, s) => (A(), T("div", {
      class: X(["mt-2 rounded-lg border-2 border-gray-200 dark:border-gray-700", { "px-4 py-2": !t.header }])
    }, [
      D("div", {
        class: X(["bg-white sm:rounded-lg", { "p-1": !t.header }])
      }, [
        D("div", {
          onClick: a,
          class: "focusable !block rounded-lg border-b-2 border-gray-200 bg-neutral-50 px-6 py-1 text-center",
          tabindex: "0",
          "aria-controls": t.header ? t.header.replaceAll(" ", "_") : "collapsable",
          style: Nr({ backgroundColor: t.headerColor })
        }, [
          ge(Q(t.header) + " ", 1),
          D("button", WO, Q(i.value ? "Hide" : "Show"), 1)
        ], 12, qO),
        D("div", {
          class: "!visible hidden overflow-hidden",
          id: t.header ? t.header.replaceAll(" ", "_") : "collapsable",
          ref_key: "collapseRef",
          ref: r
        }, [
          D("div", {
            class: X([{ "px-4 pb-2": t.header }, "mt-2"])
          }, [
            J(o.$slots, "default")
          ], 2)
        ], 8, HO)
      ], 2)
    ], 2));
  }
}, KO = { class: "relative" }, k4 = {
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
  setup(t) {
    const e = t, r = (o) => {
      a.value && o.key === "Escape" && (a.value = !1);
    };
    Je(() => document.addEventListener("keydown", r)), Kn(() => document.removeEventListener("keydown", r));
    const n = le(() => isNaN(parseInt(e.width)) ? e.width : "w-" + e.width), i = le(() => e.align === "left" ? "origin-top-left left-0" : e.align === "right" ? "origin-top-right right-0" : "origin-top"), a = Z(!1);
    return (o, s) => (A(), T("div", KO, [
      D("div", {
        onClick: s[0] || (s[0] = (u) => a.value = !a.value)
      }, [
        J(o.$slots, "trigger")
      ]),
      Ve(D("div", {
        class: "fixed inset-0 z-40",
        onClick: s[1] || (s[1] = (u) => a.value = !1)
      }, null, 512), [
        [Ut, a.value]
      ]),
      ve(lr, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95"
      }, {
        default: ye(() => [
          Ve(D("div", {
            class: X(["absolute z-50 mt-2 rounded-md shadow-lg", [n.value, i.value]]),
            style: { display: "none" },
            onClick: s[2] || (s[2] = (u) => a.value = !1)
          }, [
            D("div", {
              class: X(["rounded ring-1 ring-black ring-opacity-5", t.contentClasses])
            }, [
              J(o.$slots, "content")
            ], 2)
          ], 2), [
            [Ut, a.value]
          ])
        ]),
        _: 3
      })
    ]));
  }
}, P4 = {
  __name: "DropdownLink",
  setup(t) {
    return (e, r) => (A(), oe(q(it), { class: "focusable block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none" }, {
      default: ye(() => [
        J(e.$slots, "default")
      ]),
      _: 3
    }));
  }
}, YO = ["href", "target"], T4 = {
  __name: "LinkButton",
  props: {
    href: String,
    colourClasses: {
      default: () => ["bg-primary", "text-white", "hover:bg-primary-700"]
    },
    target: {
      default: () => ["_self"]
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    method: String,
    data: Object
  },
  setup(t) {
    const e = t, r = () => e.disabled ? [...e.colourClasses, ["opacity-50", "pointer-events-none"]] : e.colourClasses;
    return (n, i) => t.href && (t.method || t.data) ? (A(), oe(q(it), {
      key: 0,
      href: t.href,
      method: t.method,
      data: t.data,
      class: X(["focusable inline-flex cursor-pointer select-none items-center justify-center gap-1 rounded px-2 text-sm font-medium leading-normal", r()]),
      as: "button",
      tabindex: "0"
    }, {
      default: ye(() => [
        J(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "method", "data", "class"])) : (A(), T("a", {
      key: 1,
      href: t.href,
      target: t.target,
      class: X(["focusable inline-flex cursor-pointer select-none items-center justify-center gap-1 rounded px-2 text-sm font-medium leading-normal", r()]),
      tabindex: "0"
    }, [
      J(n.$slots, "default")
    ], 10, YO));
  }
}, JO = {
  class: "relative inline-flex",
  "data-te-dropdown-ref": ""
}, XO = ["id"], QO = ["aria-labelledby"], $4 = {
  __name: "LinkDropdownButton",
  props: {
    title: String
  },
  setup(t) {
    return (e, r) => (A(), T("div", JO, [
      D("button", {
        class: "focusable flex items-center whitespace-nowrap rounded bg-primary px-2 text-sm text-white hover:bg-primary-700 motion-reduce:transition-none",
        type: "button",
        id: t.title,
        "data-te-dropdown-toggle-ref": "",
        "aria-expanded": "false",
        "data-te-ripple-init": "",
        "data-te-ripple-color": "light"
      }, [
        ge(Q(t.title) + " ", 1),
        r[0] || (r[0] = D("span", { class: "mx-1 w-2" }, [
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
      ], 8, XO),
      D("ul", {
        class: "absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block",
        "aria-labelledby": t.title,
        "data-te-dropdown-menu-ref": ""
      }, [
        J(e.$slots, "default")
      ], 8, QO)
    ]));
  }
}, ZO = ["href"], I4 = {
  __name: "LinkDropdownButtonItem",
  props: {
    href: String,
    title: String
  },
  setup(t) {
    return (e, r) => (A(), T("li", null, [
      D("a", {
        class: "focusable inline-flex w-full items-center justify-center whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600",
        href: t.href,
        "data-te-dropdown-item-ref": ""
      }, Q(t.title), 9, ZO)
    ]));
  }
}, D4 = {
  __name: "Logs",
  props: {
    header: { default: "Logs" },
    logs: Object
  },
  setup(t) {
    return (e, r) => (A(), oe(q(GO), { header: t.header }, {
      default: ye(() => [
        ve(q(mE), { logs: t.logs }, null, 8, ["logs"])
      ]),
      _: 1
    }, 8, ["header"]));
  }
}, eE = {
  key: 0,
  class: "flex w-full items-center justify-center"
}, tE = {
  key: 1,
  class: "mt-1",
  id: "logs"
}, rE = {
  key: 0,
  class: "text-center"
}, nE = {
  key: 1,
  class: "ml-3 border-l-2 border-primary"
}, iE = { class: "flex-start w-full md:flex" }, aE = { class: "-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-primary text-xs text-white" }, oE = { class: "mb-3 ml-2 block w-full rounded-lg bg-neutral-50 px-3 py-2 shadow-md shadow-black/5" }, sE = { class: "mb-1 flex justify-between" }, lE = { class: "text-sm text-neutral-500" }, uE = {
  key: 0,
  class: "text-bold mr-0.5 text-sm text-primary-500"
}, cE = {
  key: 1,
  class: "text-sm text-primary-500"
}, fE = { class: "text-sm text-neutral-500" }, dE = { class: "font-medium" }, pE = {
  key: 0,
  class: "line-through"
}, hE = ["innerHTML"], mE = {
  __name: "LogsContent",
  props: {
    logs: Object
  },
  setup(t) {
    return Xn.add(Ig, $s, Rg, Pg, Dg), (e, r) => t.logs == null ? (A(), T("div", eE, [
      ve(q(Jp))
    ])) : (A(), T("div", tE, [
      t.logs.total ? (A(), T("ol", nE, [
        (A(!0), T(fe, null, Ye(t.logs.data, (n) => (A(), T("li", {
          key: n.id
        }, [
          D("div", iE, [
            D("div", aE, [
              ve(q(gt), {
                icon: n.icon
              }, null, 8, ["icon"])
            ]),
            D("div", oE, [
              D("div", sE, [
                D("span", lE, [
                  ge(Q(n.event_formatted) + " ", 1),
                  n.reference ? (A(), T("span", uE, Q(n.reference), 1)) : K("", !0),
                  n.causer ? (A(), T(fe, { key: 1 }, [
                    n.causer.id ? (A(), oe(q(it), {
                      key: 0,
                      href: e.route("users.show", n.causer.id),
                      class: "text-sm text-primary-500"
                    }, {
                      default: ye(() => [
                        ge(" (" + Q(n.causer.first_name) + ") ", 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])) : (A(), T("span", cE, "(" + Q(n.causer.first_name) + ")", 1))
                  ], 64)) : K("", !0)
                ]),
                D("span", fE, Q(n.created_date_full), 1)
              ]),
              (A(!0), T(fe, null, Ye(n.changes_formatted, (i, a) => (A(), T("p", {
                key: a,
                class: "mb-0 text-neutral-700"
              }, [
                D("span", dE, Q(a) + ":", 1),
                i.old ? (A(), T("span", pE, Q(i.old), 1)) : K("", !0),
                ge(" " + Q(i.new), 1)
              ]))), 128)),
              n.description_details ? (A(), T("p", {
                key: 0,
                class: "text-neutral-700",
                innerHTML: n.description_details
              }, null, 8, hE)) : K("", !0)
            ])
          ])
        ]))), 128))
      ])) : (A(), T("p", rE, "No Data")),
      t.logs.links ? (A(), oe(q(Kp), {
        key: 2,
        class: "mt-6",
        links: t.logs.links,
        logs: !0
      }, null, 8, ["links"])) : K("", !0)
    ]));
  }
}, R4 = {
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
  setup(t, { emit: e }) {
    const r = t, n = e, i = Z(null);
    jt(
      () => r.show,
      () => {
        r.show ? document.body.style.overflow = "hidden" : document.body.style.overflow = null;
      }
    );
    const a = () => {
      r.closeable && n("close");
    }, o = (E) => {
      E.key === "Escape" && r.show && a();
    };
    Je(() => document.addEventListener("keydown", o)), Kn(() => {
      document.removeEventListener("keydown", o), document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", C), document.body.style.overflow = null;
    });
    const s = le(() => {
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
        }[r.maxWidth]
      ), r.hideOverflow && E.push("overflow-hidden"), E.join(" ");
    }), u = Z(!1), c = Z(null), f = Z(0), p = Z(0), m = Z(0), O = Z(0), g = Z(null), S = Z(null), v = (E, _) => {
      u.value = !0, document.addEventListener("mousemove", P), document.addEventListener("mouseup", C), c.value = _, f.value = E.clientX, p.value = E.clientY, m.value = i.value.offsetWidth, O.value = i.value.offsetHeight;
    }, C = (E) => {
      u.value = !1, document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", C);
    }, P = (E) => {
      if (!u.value)
        return;
      const _ = (E.clientX - f.value) * 2, I = E.clientY - p.value;
      c.value.includes("x") && (g.value = m.value + _ + "px"), c.value.includes("-x") && (g.value = m.value - _ + "px"), c.value.includes("y") && (S.value = O.value + I + "px");
    };
    return (E, _) => (A(), oe(oh, { to: "body" }, [
      ve(lr, { "leave-active-class": "duration-200" }, {
        default: ye(() => [
          Ve(D("div", {
            class: X(["modal fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0", { flex: t.alignCenter, "mb-16 items-center justify-center": t.alignCenter }]),
            "scroll-region": ""
          }, [
            ve(lr, {
              "enter-active-class": `backdrop-transition enter ease-out duration-[${t.backdropDuration}ms]`,
              "enter-from-class": "opacity-0",
              "enter-to-class": "opacity-100",
              "leave-active-class": `backdrop-transition leave ease-in duration-[${t.backdropDuration}ms]`,
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: ye(() => [
                Ve(D("div", {
                  class: "fixed inset-0 transform transition-all",
                  onClick: a
                }, _[5] || (_[5] = [
                  D("div", { class: "backdrop absolute inset-0 bg-gray-500 opacity-75" }, null, -1)
                ]), 512), [
                  [Ut, t.show]
                ])
              ]),
              _: 1
            }, 8, ["enter-active-class", "leave-active-class"]),
            ve(lr, {
              "enter-active-class": `modal-transition enter ease-out duration-[${t.modalDuration}ms]`,
              "enter-from-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              "enter-to-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-active-class": `modal-transition leave ease-in duration-[${t.modalDuration}ms]`,
              "leave-from-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-to-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            }, {
              default: ye(() => [
                Ve(D("div", {
                  ref_key: "modalContent",
                  ref: i,
                  class: X(["mb-6 transform rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full", s.value + (t.showBorder ? " border-pink rounded-md border-2 border-solid" : "")]),
                  style: Nr({
                    userSelect: u.value ? "none" : "auto",
                    transition: u.value ? "none" : "",
                    width: g.value || "",
                    height: S.value || "",
                    maxWidth: g.value || "",
                    maxHeight: S.value || ""
                  })
                }, [
                  t.show ? J(E.$slots, "default", { key: 0 }) : K("", !0),
                  t.resizable ? (A(), T(fe, { key: 1 }, [
                    D("div", {
                      class: "absolute bottom-0 left-0 h-1 w-full cursor-row-resize",
                      onMousedown: _[0] || (_[0] = (I) => v(I, "y")),
                      onMouseup: C
                    }, null, 32),
                    D("div", {
                      class: "absolute left-0 top-0 h-full w-1 cursor-col-resize",
                      onMousedown: _[1] || (_[1] = (I) => v(I, "-x")),
                      onMouseup: C
                    }, null, 32),
                    D("div", {
                      class: "absolute right-0 top-0 h-full w-1 cursor-col-resize",
                      onMousedown: _[2] || (_[2] = (I) => v(I, "x")),
                      onMouseup: C
                    }, null, 32),
                    D("div", {
                      class: "absolute bottom-0 right-0 h-1 w-1 cursor-se-resize",
                      onMousedown: _[3] || (_[3] = (I) => v(I, "xy")),
                      onMouseup: C
                    }, null, 32),
                    D("div", {
                      class: "absolute bottom-0 left-0 h-1 w-1 cursor-sw-resize",
                      onMousedown: _[4] || (_[4] = (I) => v(I, "-xy")),
                      onMouseup: C
                    }, null, 32)
                  ], 64)) : K("", !0)
                ], 6), [
                  [Ut, t.show]
                ])
              ]),
              _: 3
            }, 8, ["enter-active-class", "leave-active-class"])
          ], 2), [
            [Ut, t.show]
          ])
        ]),
        _: 3
      })
    ]));
  }
}, gE = { class: "ml-3 flex-1 whitespace-nowrap" }, F4 = {
  __name: "NavLink",
  props: {
    href: String,
    active: Boolean
  },
  setup(t) {
    const e = t, r = le(
      () => e.active ? "focusable flex items-center p-2 text-base font-normal bg-accent text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700" : "focusable flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    );
    return (n, i) => (A(), oe(q(it), {
      href: t.href,
      class: X(r.value)
    }, {
      default: ye(() => [
        J(n.$slots, "icon"),
        D("span", gE, [
          J(n.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}, yE = { class: "flex justify-between pagination" }, bE = ["value", "selected"], vE = {
  key: 0,
  "aria-label": "Page navigation"
}, wE = ["innerHTML"], xE = ["innerHTML", "onClick"], Kp = {
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
  setup(t, { emit: e }) {
    const r = e, n = t, i = Z(n.defaultPerPage), a = [
      10,
      25,
      50,
      100,
      250
    ], o = le(() => {
      if (!n.links || n.links.length <= 3)
        return n.links;
      const c = n.links[0], f = n.links[n.links.length - 1], p = n.links.findIndex((g) => g.active);
      let m = Math.max(1, p - Math.floor(n.maxPagesToShow / 2)), O = Math.min(n.links.length - 2, m + n.maxPagesToShow - 1);
      return O - m < n.maxPagesToShow - 1 && (m = Math.max(1, O - n.maxPagesToShow + 1)), [c, ...n.links.slice(m, O + 1), f];
    }), s = (c) => {
      r("change", c);
    }, u = (c) => {
      let f = new URL(window.location.href);
      if (f.searchParams.set("per_page", c.target.value), n.linkReturn) {
        s(f.href);
        return;
      }
      window.location.href = f.href;
    };
    return (c, f) => (A(), T("div", yE, [
      D("div", null, [
        t.showPerPage ? (A(), oe(q(Hg), {
          key: 0,
          type: "select",
          modelValue: i.value,
          "onUpdate:modelValue": f[0] || (f[0] = (p) => i.value = p),
          class: "w-20 per-page-input",
          onChanged: u
        }, {
          default: ye(() => [
            (A(), T(fe, null, Ye(a, (p) => D("option", {
              key: p,
              value: p,
              selected: p == i.value
            }, Q(p), 9, bE)), 64))
          ]),
          _: 1
        }, 8, ["modelValue"])) : K("", !0)
      ]),
      o.value.length > 3 ? (A(), T("nav", vE, [
        D("ul", {
          class: X(["list-style-none flex", { [t.customListClass]: t.customListClass }])
        }, [
          (A(!0), T(fe, null, Ye(o.value, (p, m) => (A(), T("li", { key: m }, [
            t.linkReturn ? (A(), T(fe, { key: 0 }, [
              p.url === null ? (A(), T("button", {
                key: 0,
                class: X(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [t.customLinkClass]: t.customLinkClass
                }]),
                innerHTML: p.label,
                onClick: f[1] || (f[1] = (O) => s(""))
              }, null, 10, wE)) : (A(), T("button", {
                key: 1,
                class: X(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", {
                  "font-bold text-primary": p.active,
                  [t.customLinkClass]: t.customLinkClass,
                  [t.customActiveLinkClass]: p.active && t.customActiveLinkClass
                }]),
                innerHTML: p.label,
                onClick: (O) => s(p.url)
              }, null, 10, xE))
            ], 64)) : (A(), T(fe, { key: 1 }, [
              p.url === null ? (A(), oe(q(it), {
                key: 0,
                class: X(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [t.customLinkClass]: t.customLinkClass
                }]),
                innerHTML: p.label,
                href: ""
              }, null, 8, ["class", "innerHTML"])) : (A(), oe(q(it), {
                key: 1,
                class: X(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", {
                  "font-bold text-primary": p.active,
                  [t.customLinkClass]: t.customLinkClass,
                  [t.customActiveLinkClass]: p.active && t.customActiveLinkClass
                }]),
                href: p.url,
                innerHTML: p.label,
                preserveScroll: t.preserveScroll || t.logs,
                preserveState: t.preserveState || t.logs,
                only: t.logs ? ["logs"] : t.only
              }, null, 8, ["class", "href", "innerHTML", "preserveScroll", "preserveState", "only"]))
            ], 64))
          ]))), 128))
        ], 2)
      ])) : K("", !0),
      f[2] || (f[2] = D("div", null, null, -1))
    ]));
  }
}, SE = ["type", "disabled"], Yp = {
  __name: "PrimaryButton",
  props: {
    type: {
      type: String,
      default: "submit"
    },
    disabled: Boolean
  },
  setup(t) {
    return (e, r) => (A(), T("button", {
      type: t.type,
      disabled: t.disabled,
      class: "focusable inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-primary-700 focus:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 active:bg-primary-700 disabled:cursor-not-allowed disabled:brightness-125 disabled:grayscale-[30%]"
    }, [
      J(e.$slots, "default")
    ], 8, SE));
  }
}, OE = ["type", "disabled"], L4 = {
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
  setup(t) {
    return (e, r) => (A(), T("button", {
      type: t.type,
      disabled: t.disabled,
      class: "focusable inline-flex items-center rounded border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700 disabled:cursor-not-allowed disabled:brightness-125 disabled:grayscale-[30%]"
    }, [
      J(e.$slots, "default")
    ], 8, OE));
  }
}, N4 = {
  __name: "ResponsiveNavLink",
  props: ["href", "active"],
  setup(t) {
    const e = t, r = le(
      () => e.active ? "focusable block w-full pl-3 pr-4 py-2 border-l-4 border-accent-400 text-left text-base font-medium text-accent-700 bg-accent-50 focus:outline-none focus:text-accent-800 focus:bg-accent-100 focus:border-accent-700 transition duration-150 ease-in-out" : "focusable block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (n, i) => (A(), oe(q(it), {
      href: t.href,
      class: X(r.value)
    }, {
      default: ye(() => [
        J(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}, EE = ["type"], M4 = {
  __name: "SecondaryButton",
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(t) {
    return (e, r) => (A(), T("button", {
      type: t.type,
      class: "focusable inline-flex items-center rounded border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:opacity-25"
    }, [
      J(e.$slots, "default")
    ], 8, EE));
  }
}, AE = {
  key: 0,
  class: "relative mb-2 rounded-lg border-b-2 border-gray-200 bg-neutral-50 px-6 py-1 text-center"
}, CE = {
  key: 0,
  class: "absolute right-0 top-0 mr-2 mt-1"
}, B4 = {
  __name: "Section",
  props: {
    header: String,
    overflow: {
      default: !1,
      type: Boolean
    }
  },
  setup(t) {
    return (e, r) => (A(), T("div", {
      class: X(["rounded-lg border-2 border-gray-200 bg-white dark:border-gray-700", { "px-4 py-2": !t.header, "overflow-hidden": t.overflow }])
    }, [
      D("div", {
        class: X(["sm:rounded-lg", { "p-1": !t.header }])
      }, [
        t.header ? (A(), T("div", AE, [
          D("span", null, Q(t.header), 1),
          e.$slots.headerButton ? (A(), T("div", CE, [
            J(e.$slots, "headerButton")
          ])) : K("", !0)
        ])) : K("", !0),
        D("div", {
          class: X({ "px-4 pb-2": t.header })
        }, [
          J(e.$slots, "default")
        ], 2)
      ], 2)
    ], 2));
  }
}, _E = {}, kE = {
  class: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]",
  role: "status"
};
function PE(t, e) {
  return A(), T("div", kE, e[0] || (e[0] = [
    D("span", { class: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" }, "Loading...", -1)
  ]));
}
const Jp = /* @__PURE__ */ Jr(_E, [["render", PE]]), TE = ["onClick"], $E = { class: "h:10 rounded-t-lg bg-white py-1 text-center md:h-10 md:py-2" }, j4 = {
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
  setup(t, { emit: e }) {
    const r = e, n = t, i = (o) => {
      a(o) && (o = null), r("updateSearch", o);
    }, a = (o) => n.statusName != null ? route().params[n.statusName] == o : route().params.status == o;
    return (o, s) => (A(), T("div", null, [
      D("div", {
        class: X(["flex flex-wrap gap-2 lg:flex-nowrap", { [t.customContainerClass]: t.customContainerClass }])
      }, [
        (A(!0), T(fe, null, Ye(t.stats, (u) => (A(), T("div", {
          class: X(["flex w-full cursor-pointer flex-col rounded-lg border bg-gray-100 shadow", {
            "border-primary bg-primary-50 shadow-primary-50": a(u.name),
            [t.customStatClass]: t.customStatClass
          }]),
          onClick: (c) => i(u.name),
          key: u.value
        }, [
          D("div", null, [
            D("div", $E, [
              D("h5", {
                class: X(["text-xl font-medium leading-tight text-neutral-800", { [t.customStatValueClass]: t.customStatValueClass }])
              }, Q(u.value), 3)
            ])
          ]),
          D("div", {
            class: X(["flex flex-auto flex-col gap-y-4 p-1 text-center md:py-2", { [t.customStatLabelClass]: t.customStatLabelClass }])
          }, Q(u.label ?? u.name), 3)
        ], 10, TE))), 128))
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
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    var S;
    const r = t, n = e, i = Z([]), a = Z(1), o = Z(!0), s = Z(0), u = Z(""), c = Z(((S = r.form) == null ? void 0 : S[r.field]) || r.modelValue), f = Z(c.value), p = Z(null), m = (v) => {
      f.value = c.value, c.value = v, n("update:modelValue", v), v || (O(""), p.value = null);
    }, O = (v) => {
      v == "" && c.value && c.value !== f.value || (a.value = 1, s.value = 0, u.value = v, g());
    }, g = async (v = !1) => {
      const C = new URLSearchParams();
      C.append("term", u.value), C.append("page", a.value), r.queryParams && Object.keys(r.queryParams).forEach((_) => {
        C.append(_, r.queryParams[_]);
      }), v && c.value && C.append("ajax_id", c.value);
      const E = await (await fetch(`${r.url}?${C.toString()}`)).json();
      if (o.value = E.current_page < E.last_page, a.value === 1) {
        if (i.value = E.data, c.value) {
          const _ = i.value.find((I) => I[r.optionValue] == c.value);
          p.value = _ ? _[r.optionText] : null;
        }
        return;
      }
      i.value = i.value.concat(E.data);
    };
    return Je(() => {
      g(!0);
      const v = document.getElementById(r.id).parentNode.querySelector(".menu");
      v == null || v.addEventListener(
        "scroll",
        (C) => {
          C.target.scrollTop > s.value && C.target.scrollTop + C.target.clientHeight >= C.target.scrollHeight && o.value && (a.value++, g());
        },
        {
          passive: !0
        }
      );
    }), (v, C) => (A(), oe(q(Jy), {
      id: t.id,
      label: t.label,
      list: i.value,
      optionValue: t.optionValue,
      optionText: t.optionText,
      optionDisabled: t.optionDisabled,
      placeholder: p.value ?? t.placeholder,
      field: t.field,
      form: t.form,
      modelValue: c.value,
      noLabel: t.noLabel,
      disabled: t.disabled,
      noForm: t.noForm,
      required: t.required,
      "onUpdate:modelValue": C[0] || (C[0] = (P) => m(P)),
      onSearchchange: O,
      filterPredicate: (P, E) => !0
    }, null, 8, ["id", "label", "list", "optionValue", "optionText", "optionDisabled", "placeholder", "field", "form", "modelValue", "noLabel", "disabled", "noForm", "required"]));
  }
};
const IE = ["id", "aria-controls"], DE = { class: "ml-3 flex-1 whitespace-nowrap text-left" }, RE = ["id"], FE = {
  __name: "NavCollapse",
  props: {
    show: { type: Boolean, default: !1 },
    name: String
  },
  setup(t) {
    const e = t, r = Z(null), n = Z(null), i = Z(e.show);
    Je(() => {
      n.value = new jr(r.value, {
        toggle: e.show
      });
    });
    const a = () => {
      n.value.toggle(), i.value = !i.value;
    };
    return (o, s) => (A(), T("li", null, [
      D("button", {
        id: t.name,
        onClick: a,
        class: "focusable group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
        "aria-controls": t.name ? t.name.replaceAll(" ", "_") : "collapsable"
      }, [
        J(o.$slots, "icon", {}, void 0, !0),
        D("span", DE, Q(t.name), 1),
        s[0] || (s[0] = D("svg", {
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
      ], 8, IE),
      D("ul", {
        class: "!visible hidden space-y-1 px-4",
        id: t.name ? t.name.replaceAll(" ", "_") : "collapsable",
        ref_key: "collapseRef",
        ref: r
      }, [
        J(o.$slots, "default", {}, void 0, !0)
      ], 8, RE)
    ]));
  }
}, U4 = /* @__PURE__ */ Jr(FE, [["__scopeId", "data-v-03a62b00"]]), LE = { class: "border-t border-gray-100" }, NE = { class: "divide-y divide-gray-100" }, V4 = {
  __name: "DescriptionList",
  setup(t, { expose: e }) {
    const r = Z([]);
    return sh("registerItem", (s) => {
      r.value.push(s);
    }), e({
      startEditing: () => {
        r.value.forEach((s) => {
          s && typeof s.startEditing == "function" && s.startEditing();
        });
      },
      stopEditing: () => {
        r.value.forEach((s) => {
          s && typeof s.stopEditing == "function" && s.stopEditing();
        });
      },
      toggleEditing: () => {
        r.value.forEach((s) => {
          s && typeof s.toggleEditing == "function" && s.toggleEditing();
        });
      }
    }), (s, u) => (A(), T("div", LE, [
      D("dl", NE, [
        J(s.$slots, "default")
      ])
    ]));
  }
}, ME = { class: "description-list-item px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" }, BE = { class: "flex items-center text-sm font-medium" }, jE = {
  key: 0,
  class: "ml-1 text-red-500"
}, zE = { class: "mt-1 min-h-[42px] text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0" }, UE = { class: "flex min-h-full items-center" }, VE = { class: "slot-content flex-grow" }, qE = { class: "ml-4 flex-shrink-0" }, WE = { class: "slot-edit flex-grow" }, HE = { class: "ml-4 flex-shrink-0" }, q4 = {
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
  setup(t, { expose: e }) {
    Xn.add($s, $u);
    const r = t, n = Z(r.editable ? r.forceEditing : !1), i = () => {
      r.editable && (n.value = !n.value);
    };
    jt(
      () => r.forceEditing,
      (u) => {
        r.editable && (n.value = u);
      }
    );
    const a = () => {
      r.editable && (n.value = !0);
    }, o = () => {
      r.editable && (n.value = !1);
    }, s = lh("registerItem");
    return Je(() => {
      s && s({ startEditing: a, stopEditing: o, toggleEditing: i });
    }), e({
      toggleEditing: i,
      startEditing: a,
      stopEditing: o
    }), (u, c) => (A(), T("div", ME, [
      D("dt", BE, [
        ge(Q(t.label) + " ", 1),
        J(u.$slots, "label"),
        t.required ? (A(), T("span", jE, "*")) : K("", !0)
      ]),
      D("dd", zE, [
        D("div", UE, [
          n.value ? (A(), T(fe, { key: 1 }, [
            D("div", WE, [
              J(u.$slots, "edit")
            ]),
            D("span", HE, [
              D("button", {
                type: "button",
                onClick: i,
                class: "text-xl font-bold text-primary hover:text-primary-400"
              }, [
                ve(q(gt), { icon: q($u) }, null, 8, ["icon"])
              ])
            ])
          ], 64)) : (A(), T(fe, { key: 0 }, [
            D("div", VE, [
              J(u.$slots, "default"),
              ge(" " + Q(t.value), 1)
            ]),
            D("span", qE, [
              t.editable ? (A(), T("button", {
                key: 0,
                type: "button",
                onClick: i,
                class: "text-lg font-bold text-primary hover:text-primary-400"
              }, [
                ve(q(gt), { icon: q($s) }, null, 8, ["icon"])
              ])) : K("", !0),
              J(u.$slots, "buttons")
            ])
          ], 64))
        ])
      ])
    ]));
  }
};
var Xp = { exports: {} };
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.8.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2023
 * @license MIT
 */
(function(t) {
  (function() {
    var e = "input is invalid type", r = "finalize already called", n = typeof window == "object", i = n ? window : {};
    i.JS_MD5_NO_WINDOW && (n = !1);
    var a = !n && typeof self == "object", o = !i.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    o ? i = Ke : a && (i = self);
    var s = !i.JS_MD5_NO_COMMON_JS && !0 && t.exports, u = !i.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", c = "0123456789abcdef".split(""), f = [128, 32768, 8388608, -2147483648], p = [0, 8, 16, 24], m = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], O = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), g = [], S;
    if (u) {
      var v = new ArrayBuffer(68);
      S = new Uint8Array(v), g = new Uint32Array(v);
    }
    var C = Array.isArray;
    (i.JS_MD5_NO_NODE_JS || !C) && (C = function(h) {
      return Object.prototype.toString.call(h) === "[object Array]";
    });
    var P = ArrayBuffer.isView;
    u && (i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !P) && (P = function(h) {
      return typeof h == "object" && h.buffer && h.buffer.constructor === ArrayBuffer;
    });
    var E = function(h) {
      var b = typeof h;
      if (b === "string")
        return [h, !0];
      if (b !== "object" || h === null)
        throw new Error(e);
      if (u && h.constructor === ArrayBuffer)
        return [new Uint8Array(h), !1];
      if (!C(h) && !P(h))
        throw new Error(e);
      return [h, !1];
    }, _ = function(h) {
      return function(b) {
        return new N(!0).update(b)[h]();
      };
    }, I = function() {
      var h = _("hex");
      o && (h = j(h)), h.create = function() {
        return new N();
      }, h.update = function(y) {
        return h.create().update(y);
      };
      for (var b = 0; b < m.length; ++b) {
        var x = m[b];
        h[x] = _(x);
      }
      return h;
    }, j = function(h) {
      var b = Me, x = Me.Buffer, y;
      x.from && !i.JS_MD5_NO_BUFFER_FROM ? y = x.from : y = function(L) {
        return new x(L);
      };
      var U = function(L) {
        if (typeof L == "string")
          return b.createHash("md5").update(L, "utf8").digest("hex");
        if (L == null)
          throw new Error(e);
        return L.constructor === ArrayBuffer && (L = new Uint8Array(L)), C(L) || P(L) || L.constructor === x ? b.createHash("md5").update(y(L)).digest("hex") : h(L);
      };
      return U;
    }, z = function(h) {
      return function(b, x) {
        return new R(b, !0).update(x)[h]();
      };
    }, B = function() {
      var h = z("hex");
      h.create = function(y) {
        return new R(y);
      }, h.update = function(y, U) {
        return h.create(y).update(U);
      };
      for (var b = 0; b < m.length; ++b) {
        var x = m[b];
        h[x] = z(x);
      }
      return h;
    };
    function N(h) {
      if (h)
        g[0] = g[16] = g[1] = g[2] = g[3] = g[4] = g[5] = g[6] = g[7] = g[8] = g[9] = g[10] = g[11] = g[12] = g[13] = g[14] = g[15] = 0, this.blocks = g, this.buffer8 = S;
      else if (u) {
        var b = new ArrayBuffer(68);
        this.buffer8 = new Uint8Array(b), this.blocks = new Uint32Array(b);
      } else
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
    }
    N.prototype.update = function(h) {
      if (this.finalized)
        throw new Error(r);
      var b = E(h);
      h = b[0];
      for (var x = b[1], y, U = 0, L, F = h.length, W = this.blocks, Y = this.buffer8; U < F; ) {
        if (this.hashed && (this.hashed = !1, W[0] = W[16], W[16] = W[1] = W[2] = W[3] = W[4] = W[5] = W[6] = W[7] = W[8] = W[9] = W[10] = W[11] = W[12] = W[13] = W[14] = W[15] = 0), x)
          if (u)
            for (L = this.start; U < F && L < 64; ++U)
              y = h.charCodeAt(U), y < 128 ? Y[L++] = y : y < 2048 ? (Y[L++] = 192 | y >>> 6, Y[L++] = 128 | y & 63) : y < 55296 || y >= 57344 ? (Y[L++] = 224 | y >>> 12, Y[L++] = 128 | y >>> 6 & 63, Y[L++] = 128 | y & 63) : (y = 65536 + ((y & 1023) << 10 | h.charCodeAt(++U) & 1023), Y[L++] = 240 | y >>> 18, Y[L++] = 128 | y >>> 12 & 63, Y[L++] = 128 | y >>> 6 & 63, Y[L++] = 128 | y & 63);
          else
            for (L = this.start; U < F && L < 64; ++U)
              y = h.charCodeAt(U), y < 128 ? W[L >>> 2] |= y << p[L++ & 3] : y < 2048 ? (W[L >>> 2] |= (192 | y >>> 6) << p[L++ & 3], W[L >>> 2] |= (128 | y & 63) << p[L++ & 3]) : y < 55296 || y >= 57344 ? (W[L >>> 2] |= (224 | y >>> 12) << p[L++ & 3], W[L >>> 2] |= (128 | y >>> 6 & 63) << p[L++ & 3], W[L >>> 2] |= (128 | y & 63) << p[L++ & 3]) : (y = 65536 + ((y & 1023) << 10 | h.charCodeAt(++U) & 1023), W[L >>> 2] |= (240 | y >>> 18) << p[L++ & 3], W[L >>> 2] |= (128 | y >>> 12 & 63) << p[L++ & 3], W[L >>> 2] |= (128 | y >>> 6 & 63) << p[L++ & 3], W[L >>> 2] |= (128 | y & 63) << p[L++ & 3]);
        else if (u)
          for (L = this.start; U < F && L < 64; ++U)
            Y[L++] = h[U];
        else
          for (L = this.start; U < F && L < 64; ++U)
            W[L >>> 2] |= h[U] << p[L++ & 3];
        this.lastByteIndex = L, this.bytes += L - this.start, L >= 64 ? (this.start = L - 64, this.hash(), this.hashed = !0) : this.start = L;
      }
      return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
    }, N.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = !0;
        var h = this.blocks, b = this.lastByteIndex;
        h[b >>> 2] |= f[b & 3], b >= 56 && (this.hashed || this.hash(), h[0] = h[16], h[16] = h[1] = h[2] = h[3] = h[4] = h[5] = h[6] = h[7] = h[8] = h[9] = h[10] = h[11] = h[12] = h[13] = h[14] = h[15] = 0), h[14] = this.bytes << 3, h[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
      }
    }, N.prototype.hash = function() {
      var h, b, x, y, U, L, F = this.blocks;
      this.first ? (h = F[0] - 680876937, h = (h << 7 | h >>> 25) - 271733879 << 0, y = (-1732584194 ^ h & 2004318071) + F[1] - 117830708, y = (y << 12 | y >>> 20) + h << 0, x = (-271733879 ^ y & (h ^ -271733879)) + F[2] - 1126478375, x = (x << 17 | x >>> 15) + y << 0, b = (h ^ x & (y ^ h)) + F[3] - 1316259209, b = (b << 22 | b >>> 10) + x << 0) : (h = this.h0, b = this.h1, x = this.h2, y = this.h3, h += (y ^ b & (x ^ y)) + F[0] - 680876936, h = (h << 7 | h >>> 25) + b << 0, y += (x ^ h & (b ^ x)) + F[1] - 389564586, y = (y << 12 | y >>> 20) + h << 0, x += (b ^ y & (h ^ b)) + F[2] + 606105819, x = (x << 17 | x >>> 15) + y << 0, b += (h ^ x & (y ^ h)) + F[3] - 1044525330, b = (b << 22 | b >>> 10) + x << 0), h += (y ^ b & (x ^ y)) + F[4] - 176418897, h = (h << 7 | h >>> 25) + b << 0, y += (x ^ h & (b ^ x)) + F[5] + 1200080426, y = (y << 12 | y >>> 20) + h << 0, x += (b ^ y & (h ^ b)) + F[6] - 1473231341, x = (x << 17 | x >>> 15) + y << 0, b += (h ^ x & (y ^ h)) + F[7] - 45705983, b = (b << 22 | b >>> 10) + x << 0, h += (y ^ b & (x ^ y)) + F[8] + 1770035416, h = (h << 7 | h >>> 25) + b << 0, y += (x ^ h & (b ^ x)) + F[9] - 1958414417, y = (y << 12 | y >>> 20) + h << 0, x += (b ^ y & (h ^ b)) + F[10] - 42063, x = (x << 17 | x >>> 15) + y << 0, b += (h ^ x & (y ^ h)) + F[11] - 1990404162, b = (b << 22 | b >>> 10) + x << 0, h += (y ^ b & (x ^ y)) + F[12] + 1804603682, h = (h << 7 | h >>> 25) + b << 0, y += (x ^ h & (b ^ x)) + F[13] - 40341101, y = (y << 12 | y >>> 20) + h << 0, x += (b ^ y & (h ^ b)) + F[14] - 1502002290, x = (x << 17 | x >>> 15) + y << 0, b += (h ^ x & (y ^ h)) + F[15] + 1236535329, b = (b << 22 | b >>> 10) + x << 0, h += (x ^ y & (b ^ x)) + F[1] - 165796510, h = (h << 5 | h >>> 27) + b << 0, y += (b ^ x & (h ^ b)) + F[6] - 1069501632, y = (y << 9 | y >>> 23) + h << 0, x += (h ^ b & (y ^ h)) + F[11] + 643717713, x = (x << 14 | x >>> 18) + y << 0, b += (y ^ h & (x ^ y)) + F[0] - 373897302, b = (b << 20 | b >>> 12) + x << 0, h += (x ^ y & (b ^ x)) + F[5] - 701558691, h = (h << 5 | h >>> 27) + b << 0, y += (b ^ x & (h ^ b)) + F[10] + 38016083, y = (y << 9 | y >>> 23) + h << 0, x += (h ^ b & (y ^ h)) + F[15] - 660478335, x = (x << 14 | x >>> 18) + y << 0, b += (y ^ h & (x ^ y)) + F[4] - 405537848, b = (b << 20 | b >>> 12) + x << 0, h += (x ^ y & (b ^ x)) + F[9] + 568446438, h = (h << 5 | h >>> 27) + b << 0, y += (b ^ x & (h ^ b)) + F[14] - 1019803690, y = (y << 9 | y >>> 23) + h << 0, x += (h ^ b & (y ^ h)) + F[3] - 187363961, x = (x << 14 | x >>> 18) + y << 0, b += (y ^ h & (x ^ y)) + F[8] + 1163531501, b = (b << 20 | b >>> 12) + x << 0, h += (x ^ y & (b ^ x)) + F[13] - 1444681467, h = (h << 5 | h >>> 27) + b << 0, y += (b ^ x & (h ^ b)) + F[2] - 51403784, y = (y << 9 | y >>> 23) + h << 0, x += (h ^ b & (y ^ h)) + F[7] + 1735328473, x = (x << 14 | x >>> 18) + y << 0, b += (y ^ h & (x ^ y)) + F[12] - 1926607734, b = (b << 20 | b >>> 12) + x << 0, U = b ^ x, h += (U ^ y) + F[5] - 378558, h = (h << 4 | h >>> 28) + b << 0, y += (U ^ h) + F[8] - 2022574463, y = (y << 11 | y >>> 21) + h << 0, L = y ^ h, x += (L ^ b) + F[11] + 1839030562, x = (x << 16 | x >>> 16) + y << 0, b += (L ^ x) + F[14] - 35309556, b = (b << 23 | b >>> 9) + x << 0, U = b ^ x, h += (U ^ y) + F[1] - 1530992060, h = (h << 4 | h >>> 28) + b << 0, y += (U ^ h) + F[4] + 1272893353, y = (y << 11 | y >>> 21) + h << 0, L = y ^ h, x += (L ^ b) + F[7] - 155497632, x = (x << 16 | x >>> 16) + y << 0, b += (L ^ x) + F[10] - 1094730640, b = (b << 23 | b >>> 9) + x << 0, U = b ^ x, h += (U ^ y) + F[13] + 681279174, h = (h << 4 | h >>> 28) + b << 0, y += (U ^ h) + F[0] - 358537222, y = (y << 11 | y >>> 21) + h << 0, L = y ^ h, x += (L ^ b) + F[3] - 722521979, x = (x << 16 | x >>> 16) + y << 0, b += (L ^ x) + F[6] + 76029189, b = (b << 23 | b >>> 9) + x << 0, U = b ^ x, h += (U ^ y) + F[9] - 640364487, h = (h << 4 | h >>> 28) + b << 0, y += (U ^ h) + F[12] - 421815835, y = (y << 11 | y >>> 21) + h << 0, L = y ^ h, x += (L ^ b) + F[15] + 530742520, x = (x << 16 | x >>> 16) + y << 0, b += (L ^ x) + F[2] - 995338651, b = (b << 23 | b >>> 9) + x << 0, h += (x ^ (b | ~y)) + F[0] - 198630844, h = (h << 6 | h >>> 26) + b << 0, y += (b ^ (h | ~x)) + F[7] + 1126891415, y = (y << 10 | y >>> 22) + h << 0, x += (h ^ (y | ~b)) + F[14] - 1416354905, x = (x << 15 | x >>> 17) + y << 0, b += (y ^ (x | ~h)) + F[5] - 57434055, b = (b << 21 | b >>> 11) + x << 0, h += (x ^ (b | ~y)) + F[12] + 1700485571, h = (h << 6 | h >>> 26) + b << 0, y += (b ^ (h | ~x)) + F[3] - 1894986606, y = (y << 10 | y >>> 22) + h << 0, x += (h ^ (y | ~b)) + F[10] - 1051523, x = (x << 15 | x >>> 17) + y << 0, b += (y ^ (x | ~h)) + F[1] - 2054922799, b = (b << 21 | b >>> 11) + x << 0, h += (x ^ (b | ~y)) + F[8] + 1873313359, h = (h << 6 | h >>> 26) + b << 0, y += (b ^ (h | ~x)) + F[15] - 30611744, y = (y << 10 | y >>> 22) + h << 0, x += (h ^ (y | ~b)) + F[6] - 1560198380, x = (x << 15 | x >>> 17) + y << 0, b += (y ^ (x | ~h)) + F[13] + 1309151649, b = (b << 21 | b >>> 11) + x << 0, h += (x ^ (b | ~y)) + F[4] - 145523070, h = (h << 6 | h >>> 26) + b << 0, y += (b ^ (h | ~x)) + F[11] - 1120210379, y = (y << 10 | y >>> 22) + h << 0, x += (h ^ (y | ~b)) + F[2] + 718787259, x = (x << 15 | x >>> 17) + y << 0, b += (y ^ (x | ~h)) + F[9] - 343485551, b = (b << 21 | b >>> 11) + x << 0, this.first ? (this.h0 = h + 1732584193 << 0, this.h1 = b - 271733879 << 0, this.h2 = x - 1732584194 << 0, this.h3 = y + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + h << 0, this.h1 = this.h1 + b << 0, this.h2 = this.h2 + x << 0, this.h3 = this.h3 + y << 0);
    }, N.prototype.hex = function() {
      this.finalize();
      var h = this.h0, b = this.h1, x = this.h2, y = this.h3;
      return c[h >>> 4 & 15] + c[h & 15] + c[h >>> 12 & 15] + c[h >>> 8 & 15] + c[h >>> 20 & 15] + c[h >>> 16 & 15] + c[h >>> 28 & 15] + c[h >>> 24 & 15] + c[b >>> 4 & 15] + c[b & 15] + c[b >>> 12 & 15] + c[b >>> 8 & 15] + c[b >>> 20 & 15] + c[b >>> 16 & 15] + c[b >>> 28 & 15] + c[b >>> 24 & 15] + c[x >>> 4 & 15] + c[x & 15] + c[x >>> 12 & 15] + c[x >>> 8 & 15] + c[x >>> 20 & 15] + c[x >>> 16 & 15] + c[x >>> 28 & 15] + c[x >>> 24 & 15] + c[y >>> 4 & 15] + c[y & 15] + c[y >>> 12 & 15] + c[y >>> 8 & 15] + c[y >>> 20 & 15] + c[y >>> 16 & 15] + c[y >>> 28 & 15] + c[y >>> 24 & 15];
    }, N.prototype.toString = N.prototype.hex, N.prototype.digest = function() {
      this.finalize();
      var h = this.h0, b = this.h1, x = this.h2, y = this.h3;
      return [
        h & 255,
        h >>> 8 & 255,
        h >>> 16 & 255,
        h >>> 24 & 255,
        b & 255,
        b >>> 8 & 255,
        b >>> 16 & 255,
        b >>> 24 & 255,
        x & 255,
        x >>> 8 & 255,
        x >>> 16 & 255,
        x >>> 24 & 255,
        y & 255,
        y >>> 8 & 255,
        y >>> 16 & 255,
        y >>> 24 & 255
      ];
    }, N.prototype.array = N.prototype.digest, N.prototype.arrayBuffer = function() {
      this.finalize();
      var h = new ArrayBuffer(16), b = new Uint32Array(h);
      return b[0] = this.h0, b[1] = this.h1, b[2] = this.h2, b[3] = this.h3, h;
    }, N.prototype.buffer = N.prototype.arrayBuffer, N.prototype.base64 = function() {
      for (var h, b, x, y = "", U = this.array(), L = 0; L < 15; )
        h = U[L++], b = U[L++], x = U[L++], y += O[h >>> 2] + O[(h << 4 | b >>> 4) & 63] + O[(b << 2 | x >>> 6) & 63] + O[x & 63];
      return h = U[L], y += O[h >>> 2] + O[h << 4 & 63] + "==", y;
    };
    function R(h, b) {
      var x, y = E(h);
      if (h = y[0], y[1]) {
        var U = [], L = h.length, F = 0, W;
        for (x = 0; x < L; ++x)
          W = h.charCodeAt(x), W < 128 ? U[F++] = W : W < 2048 ? (U[F++] = 192 | W >>> 6, U[F++] = 128 | W & 63) : W < 55296 || W >= 57344 ? (U[F++] = 224 | W >>> 12, U[F++] = 128 | W >>> 6 & 63, U[F++] = 128 | W & 63) : (W = 65536 + ((W & 1023) << 10 | h.charCodeAt(++x) & 1023), U[F++] = 240 | W >>> 18, U[F++] = 128 | W >>> 12 & 63, U[F++] = 128 | W >>> 6 & 63, U[F++] = 128 | W & 63);
        h = U;
      }
      h.length > 64 && (h = new N(!0).update(h).array());
      var Y = [], Xe = [];
      for (x = 0; x < 64; ++x) {
        var Dt = h[x] || 0;
        Y[x] = 92 ^ Dt, Xe[x] = 54 ^ Dt;
      }
      N.call(this, b), this.update(Xe), this.oKeyPad = Y, this.inner = !0, this.sharedMemory = b;
    }
    R.prototype = new N(), R.prototype.finalize = function() {
      if (N.prototype.finalize.call(this), this.inner) {
        this.inner = !1;
        var h = this.array();
        N.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(h), N.prototype.finalize.call(this);
      }
    };
    var V = I();
    V.md5 = V, V.md5.hmac = B(), s ? t.exports = V : i.md5 = V;
  })();
})(Xp);
var GE = Xp.exports;
const KE = ["src", "alt"], W4 = {
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
  setup(t) {
    const e = t, r = le(() => GE.md5(e.email.trim().toLowerCase())), n = le(() => `https://www.gravatar.com/avatar/${r.value}?s=${e.size}`), i = le(() => `Gravatar for ${e.email}`);
    return (a, o) => (A(), T("img", {
      src: n.value,
      alt: i.value
    }, null, 8, KE));
  }
}, H4 = {
  __name: "TdCollapseHandler",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(t) {
    return (e, r) => (A(), oe(N2, {
      "data-te-collapse-init": "",
      "data-te-target": "#" + t.collapse_id,
      "aria-expanded": "false",
      "aria-controls": t.collapse_id,
      class: "cursor-pointer"
    }, {
      default: ye(() => [
        J(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-te-target", "aria-controls"]));
  }
}, G4 = {
  install(t) {
    for (const e in components)
      t.component(e, components[e]);
  }
};
export {
  _4 as Alert,
  JE as Checkbox,
  GO as CollapsableSection,
  GO as CollapsibleSection,
  L4 as DangerButton,
  V4 as DescriptionList,
  q4 as DescriptionListItem,
  k4 as Dropdown,
  P4 as DropdownLink,
  QE as DropdownSearchbar,
  r4 as FileDropZoneInput,
  W4 as GravatarImg,
  n4 as Images,
  Hg as Input,
  Qn as InputError,
  _l as InputLabel,
  T4 as LinkButton,
  $4 as LinkDropdownButton,
  I4 as LinkDropdownButtonItem,
  D4 as Logs,
  mE as LogsContent,
  R4 as Modal,
  U4 as NavCollapse,
  F4 as NavLink,
  Kp as Pagination,
  Yp as PrimaryButton,
  i4 as RadioButton,
  N4 as ResponsiveNavLink,
  Jy as SearchSelect,
  M4 as SecondaryButton,
  B4 as Section,
  z4 as Select2ajax,
  Jp as Spinner,
  j4 as Stats,
  Fc as SubmitButton,
  a4 as Table,
  C4 as TableItemCard,
  N2 as Td,
  H4 as TdCollapseHandler,
  Zg as TextInput,
  XE as Textarea,
  s4 as Th,
  o4 as Thead,
  u4 as TrCollapse,
  l4 as TrCollapseHandler,
  G4 as default,
  ri as getInertiaRouter,
  e4 as hasPermission,
  Cw as moneyFormat,
  ZE as numberFormat,
  t4 as setInertiaRouter
};
