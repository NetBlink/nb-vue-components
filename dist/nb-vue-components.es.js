import * as rl from "vue";
import { computed as G, withDirectives as ot, createElementBlock as L, openBlock as C, normalizeClass as ee, vModelCheckbox as Lc, defineComponent as J, watch as de, h as je, mergeModels as fi, ref as q, useModel as _c, onMounted as Ee, createBlock as H, createCommentVNode as Y, createElementVNode as j, unref as S, renderSlot as U, toDisplayString as Z, createVNode as Q, Transition as un, withCtx as z, vModelSelect as ch, Fragment as ie, vModelText as Nc, createTextVNode as me, vShow as Dn, resolveDirective as fh, normalizeProps as Oe, guardReactiveProps as ke, renderList as et, resolveDynamicComponent as Ko, mergeProps as ue, toHandlers as dh, withModifiers as $t, withKeys as on, normalizeStyle as Wt, shallowRef as co, markRaw as di, onUnmounted as Nt, reactive as pr, toRefs as en, getCurrentScope as Mc, onScopeDispose as Bc, shallowReadonly as On, Comment as ph, cloneVNode as hh, effectScope as jc, onBeforeUnmount as mh, getCurrentInstance as mn, customRef as yh, toValue as Kt, watchEffect as St, readonly as gh, nextTick as Ve, inject as ss, provide as ls, toHandlerKey as vh, camelize as qc, Teleport as Uc, toRef as bh, watchPostEffect as zc, mergeDefaults as Vc, isRef as wh } from "vue";
const xh = ["value"], zE = {
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
    const n = t, r = e, o = G({
      get() {
        return r.checked;
      },
      set(a) {
        n("update:checked", a);
      }
    });
    return (a, i) => ot((C(), L("input", {
      type: "checkbox",
      value: e.value,
      "onUpdate:modelValue": i[0] || (i[0] = (s) => o.value = s),
      class: ee(["rounded border-gray-300 text-accent-600 shadow focus:ring-accent-500", { [e.customClass]: e.customClass }])
    }, null, 10, xh)), [
      [Lc, o.value]
    ]);
  }
};
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function Sh(e, t, n) {
  return (t = Eh(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function ol(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ol(Object(n), !0).forEach(function(r) {
      Sh(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ol(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Oh(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Eh(e) {
  var t = Oh(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const al = () => {
};
let us = {}, Hc = {}, Wc = null, Kc = {
  mark: al,
  measure: al
};
try {
  typeof window < "u" && (us = window), typeof document < "u" && (Hc = document), typeof MutationObserver < "u" && (Wc = MutationObserver), typeof performance < "u" && (Kc = performance);
} catch {
}
const {
  userAgent: il = ""
} = us.navigator || {}, Gt = us, ye = Hc, sl = Wc, Dr = Kc;
Gt.document;
const Mt = !!ye.documentElement && !!ye.head && typeof ye.addEventListener == "function" && typeof ye.createElement == "function", Gc = ~il.indexOf("MSIE") || ~il.indexOf("Trident/");
var Ah = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Ch = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Yc = {
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
}, Ph = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Xc = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Re = "classic", fo = "duotone", kh = "sharp", Dh = "sharp-duotone", Jc = [Re, fo, kh, Dh], Th = {
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
}, $h = {
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
}, Fh = /* @__PURE__ */ new Map([["classic", {
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
}]]), Ih = {
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
}, Rh = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], ll = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Lh = ["kit"], _h = {
  kit: {
    "fa-kit": "fak"
  }
}, Nh = ["fak", "fakd"], Mh = {
  kit: {
    fak: "fa-kit"
  }
}, ul = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, Tr = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Bh = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], jh = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], qh = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Uh = {
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
}, zh = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, pi = {
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
}, Vh = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], hi = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...Bh, ...Vh], Hh = ["solid", "regular", "light", "thin", "duotone", "brands"], Qc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Wh = Qc.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Kh = [...Object.keys(zh), ...Hh, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Tr.GROUP, Tr.SWAP_OPACITY, Tr.PRIMARY, Tr.SECONDARY].concat(Qc.map((e) => "".concat(e, "x"))).concat(Wh.map((e) => "w-".concat(e))), Gh = {
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
const It = "___FONT_AWESOME___", mi = 16, Zc = "fa", ef = "svg-inline--fa", fn = "data-fa-i2svg", yi = "data-fa-pseudo-element", Yh = "data-fa-pseudo-element-pending", cs = "data-prefix", fs = "data-icon", cl = "fontawesome-i2svg", Xh = "async", Jh = ["HTML", "HEAD", "STYLE", "SCRIPT"], tf = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function hr(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[Re];
    }
  });
}
const nf = V({}, Yc);
nf[Re] = V(V(V(V({}, {
  "fa-duotone": "duotone"
}), Yc[Re]), ll.kit), ll["kit-duotone"]);
const Qh = hr(nf), gi = V({}, Ih);
gi[Re] = V(V(V(V({}, {
  duotone: "fad"
}), gi[Re]), ul.kit), ul["kit-duotone"]);
const fl = hr(gi), vi = V({}, pi);
vi[Re] = V(V({}, vi[Re]), Mh.kit);
const ds = hr(vi), bi = V({}, Uh);
bi[Re] = V(V({}, bi[Re]), _h.kit);
hr(bi);
const Zh = Ah, rf = "fa-layers-text", em = Ch, tm = V({}, Th);
hr(tm);
const nm = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Go = Ph, rm = [...Lh, ...Kh], nr = Gt.FontAwesomeConfig || {};
function om(e) {
  var t = ye.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function am(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
ye && typeof ye.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const o = am(om(n));
  o != null && (nr[r] = o);
});
const of = {
  styleDefault: "solid",
  familyDefault: Re,
  cssPrefix: Zc,
  replacementClass: ef,
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
nr.familyPrefix && (nr.cssPrefix = nr.familyPrefix);
const In = V(V({}, of), nr);
In.autoReplaceSvg || (In.observeMutations = !1);
const X = {};
Object.keys(of).forEach((e) => {
  Object.defineProperty(X, e, {
    enumerable: !0,
    set: function(t) {
      In[e] = t, rr.forEach((n) => n(X));
    },
    get: function() {
      return In[e];
    }
  });
});
Object.defineProperty(X, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    In.cssPrefix = e, rr.forEach((t) => t(X));
  },
  get: function() {
    return In.cssPrefix;
  }
});
Gt.FontAwesomeConfig = X;
const rr = [];
function im(e) {
  return rr.push(e), () => {
    rr.splice(rr.indexOf(e), 1);
  };
}
const Ut = mi, vt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function sm(e) {
  if (!e || !Mt)
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
const lm = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function sr() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += lm[Math.random() * 62 | 0];
  return t;
}
function Nn(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function ps(e) {
  return e.classList ? Nn(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function af(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function um(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(af(e[n]), '" '), "").trim();
}
function po(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function hs(e) {
  return e.size !== vt.size || e.x !== vt.x || e.y !== vt.y || e.rotate !== vt.rotate || e.flipX || e.flipY;
}
function cm(e) {
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
function fm(e) {
  let {
    transform: t,
    width: n = mi,
    height: r = mi,
    startCentered: o = !1
  } = e, a = "";
  return o && Gc ? a += "translate(".concat(t.x / Ut - n / 2, "em, ").concat(t.y / Ut - r / 2, "em) ") : o ? a += "translate(calc(-50% + ".concat(t.x / Ut, "em), calc(-50% + ").concat(t.y / Ut, "em)) ") : a += "translate(".concat(t.x / Ut, "em, ").concat(t.y / Ut, "em) "), a += "scale(".concat(t.size / Ut * (t.flipX ? -1 : 1), ", ").concat(t.size / Ut * (t.flipY ? -1 : 1), ") "), a += "rotate(".concat(t.rotate, "deg) "), a;
}
var dm = `:root, :host {
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
function sf() {
  const e = Zc, t = ef, n = X.cssPrefix, r = X.replacementClass;
  let o = dm;
  if (n !== e || r !== t) {
    const a = new RegExp("\\.".concat(e, "\\-"), "g"), i = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    o = o.replace(a, ".".concat(n, "-")).replace(i, "--".concat(n, "-")).replace(s, ".".concat(r));
  }
  return o;
}
let dl = !1;
function Yo() {
  X.autoAddCss && !dl && (sm(sf()), dl = !0);
}
var pm = {
  mixout() {
    return {
      dom: {
        css: sf,
        insertCss: Yo
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Yo();
      },
      beforeI2svg() {
        Yo();
      }
    };
  }
};
const Rt = Gt || {};
Rt[It] || (Rt[It] = {});
Rt[It].styles || (Rt[It].styles = {});
Rt[It].hooks || (Rt[It].hooks = {});
Rt[It].shims || (Rt[It].shims = []);
var bt = Rt[It];
const lf = [], uf = function() {
  ye.removeEventListener("DOMContentLoaded", uf), Yr = 1, lf.map((e) => e());
};
let Yr = !1;
Mt && (Yr = (ye.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(ye.readyState), Yr || ye.addEventListener("DOMContentLoaded", uf));
function hm(e) {
  Mt && (Yr ? setTimeout(e, 0) : lf.push(e));
}
function mr(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? af(e) : "<".concat(t, " ").concat(um(n), ">").concat(r.map(mr).join(""), "</").concat(t, ">");
}
function pl(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var Xo = function(t, n, r, o) {
  var a = Object.keys(t), i = a.length, s = n, c, l, u;
  for (r === void 0 ? (c = 1, u = t[a[0]]) : (c = 0, u = r); c < i; c++)
    l = a[c], u = s(u, t[l], l, t);
  return u;
};
function mm(e) {
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
function wi(e) {
  const t = mm(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function ym(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), o;
  return r >= 55296 && r <= 56319 && n > t + 1 && (o = e.charCodeAt(t + 1), o >= 56320 && o <= 57343) ? (r - 55296) * 1024 + o - 56320 + 65536 : r;
}
function hl(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function xi(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, o = hl(t);
  typeof bt.hooks.addPack == "function" && !r ? bt.hooks.addPack(e, hl(t)) : bt.styles[e] = V(V({}, bt.styles[e] || {}), o), e === "fas" && xi("fa", t);
}
const {
  styles: lr,
  shims: gm
} = bt, cf = Object.keys(ds), vm = cf.reduce((e, t) => (e[t] = Object.keys(ds[t]), e), {});
let ms = null, ff = {}, df = {}, pf = {}, hf = {}, mf = {};
function bm(e) {
  return ~rm.indexOf(e);
}
function wm(e, t) {
  const n = t.split("-"), r = n[0], o = n.slice(1).join("-");
  return r === e && o !== "" && !bm(o) ? o : null;
}
const yf = () => {
  const e = (r) => Xo(lr, (o, a, i) => (o[i] = Xo(a, r, {}), o), {});
  ff = e((r, o, a) => (o[3] && (r[o[3]] = a), o[2] && o[2].filter((s) => typeof s == "number").forEach((s) => {
    r[s.toString(16)] = a;
  }), r)), df = e((r, o, a) => (r[a] = a, o[2] && o[2].filter((s) => typeof s == "string").forEach((s) => {
    r[s] = a;
  }), r)), mf = e((r, o, a) => {
    const i = o[2];
    return r[a] = a, i.forEach((s) => {
      r[s] = a;
    }), r;
  });
  const t = "far" in lr || X.autoFetchSvg, n = Xo(gm, (r, o) => {
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
  pf = n.names, hf = n.unicodes, ms = ho(X.styleDefault, {
    family: X.familyDefault
  });
};
im((e) => {
  ms = ho(e.styleDefault, {
    family: X.familyDefault
  });
});
yf();
function ys(e, t) {
  return (ff[e] || {})[t];
}
function xm(e, t) {
  return (df[e] || {})[t];
}
function an(e, t) {
  return (mf[e] || {})[t];
}
function gf(e) {
  return pf[e] || {
    prefix: null,
    iconName: null
  };
}
function Sm(e) {
  const t = hf[e], n = ys("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Yt() {
  return ms;
}
const vf = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Om(e) {
  let t = Re;
  const n = cf.reduce((r, o) => (r[o] = "".concat(X.cssPrefix, "-").concat(o), r), {});
  return Jc.forEach((r) => {
    (e.includes(n[r]) || e.some((o) => vm[r].includes(o))) && (t = r);
  }), t;
}
function ho(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = Re
  } = t, r = Qh[n][e];
  if (n === fo && !e)
    return "fad";
  const o = fl[n][e] || fl[n][r], a = e in bt.styles ? e : null;
  return o || a || null;
}
function Em(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const o = wm(X.cssPrefix, r);
    o ? n = o : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function ml(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function mo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const o = hi.concat(jh), a = ml(e.filter((f) => o.includes(f))), i = ml(e.filter((f) => !hi.includes(f))), s = a.filter((f) => (r = f, !Xc.includes(f))), [c = null] = s, l = Om(a), u = V(V({}, Em(i)), {}, {
    prefix: ho(c, {
      family: l
    })
  });
  return V(V(V({}, u), km({
    values: e,
    family: l,
    styles: lr,
    config: X,
    canonical: u,
    givenPrefix: r
  })), Am(n, r, u));
}
function Am(e, t, n) {
  let {
    prefix: r,
    iconName: o
  } = n;
  if (e || !r || !o)
    return {
      prefix: r,
      iconName: o
    };
  const a = t === "fa" ? gf(o) : {}, i = an(r, o);
  return o = a.iconName || i || o, r = a.prefix || r, r === "far" && !lr.far && lr.fas && !X.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: o
  };
}
const Cm = Jc.filter((e) => e !== Re || e !== fo), Pm = Object.keys(pi).filter((e) => e !== Re).map((e) => Object.keys(pi[e])).flat();
function km(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: o = "",
    styles: a = {},
    config: i = {}
  } = e, s = n === fo, c = t.includes("fa-duotone") || t.includes("fad"), l = i.familyDefault === "duotone", u = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!s && (c || l || u) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && Cm.includes(n) && (Object.keys(a).find((p) => Pm.includes(p)) || i.autoFetchSvg)) {
    const p = Fh.get(n).defaultShortPrefixId;
    r.prefix = p, r.iconName = an(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || o === "fa") && (r.prefix = Yt() || "fas"), r;
}
class Dm {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const o = n.reduce(this._pullDefinitions, {});
    Object.keys(o).forEach((a) => {
      this.definitions[a] = V(V({}, this.definitions[a] || {}), o[a]), xi(a, o[a]);
      const i = ds[Re][a];
      i && xi(i, o[a]), yf();
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
let yl = [], Pn = {};
const Tn = {}, Tm = Object.keys(Tn);
function $m(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return yl = e, Pn = {}, Object.keys(Tn).forEach((r) => {
    Tm.indexOf(r) === -1 && delete Tn[r];
  }), yl.forEach((r) => {
    const o = r.mixout ? r.mixout() : {};
    if (Object.keys(o).forEach((a) => {
      typeof o[a] == "function" && (n[a] = o[a]), typeof o[a] == "object" && Object.keys(o[a]).forEach((i) => {
        n[a] || (n[a] = {}), n[a][i] = o[a][i];
      });
    }), r.hooks) {
      const a = r.hooks();
      Object.keys(a).forEach((i) => {
        Pn[i] || (Pn[i] = []), Pn[i].push(a[i]);
      });
    }
    r.provides && r.provides(Tn);
  }), n;
}
function Si(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    r[o - 2] = arguments[o];
  return (Pn[e] || []).forEach((i) => {
    t = i.apply(null, [t, ...r]);
  }), t;
}
function dn(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (Pn[e] || []).forEach((a) => {
    a.apply(null, n);
  });
}
function Xt() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Tn[e] ? Tn[e].apply(null, t) : void 0;
}
function Oi(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || Yt();
  if (t)
    return t = an(n, t) || t, pl(bf.definitions, n, t) || pl(bt.styles, n, t);
}
const bf = new Dm(), Fm = () => {
  X.autoReplaceSvg = !1, X.observeMutations = !1, dn("noAuto");
}, Im = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Mt ? (dn("beforeI2svg", e), Xt("pseudoElements2svg", e), Xt("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    X.autoReplaceSvg === !1 && (X.autoReplaceSvg = !0), X.observeMutations = !0, hm(() => {
      Lm({
        autoReplaceSvgRoot: t
      }), dn("watch", e);
    });
  }
}, Rm = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: an(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = ho(e[0]);
      return {
        prefix: n,
        iconName: an(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(X.cssPrefix, "-")) > -1 || e.match(Zh))) {
      const t = mo(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || Yt(),
        iconName: an(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = Yt();
      return {
        prefix: t,
        iconName: an(t, e) || e
      };
    }
  }
}, tt = {
  noAuto: Fm,
  config: X,
  dom: Im,
  parse: Rm,
  library: bf,
  findIconDefinition: Oi,
  toHtml: mr
}, Lm = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = ye
  } = e;
  (Object.keys(bt.styles).length > 0 || X.autoFetchSvg) && Mt && X.autoReplaceSvg && tt.dom.i2svg({
    node: t
  });
};
function yo(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => mr(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!Mt) return;
      const n = ye.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function _m(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: o,
    styles: a,
    transform: i
  } = e;
  if (hs(i) && n.found && !r.found) {
    const {
      width: s,
      height: c
    } = n, l = {
      x: s / c / 2,
      y: 0.5
    };
    o.style = po(V(V({}, a), {}, {
      "transform-origin": "".concat(l.x + i.x / 16, "em ").concat(l.y + i.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: o,
    children: t
  }];
}
function Nm(e) {
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
      attributes: V(V({}, o), {}, {
        id: i
      }),
      children: r
    }]
  }];
}
function gs(e) {
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
  } = n.found ? n : t, d = Nh.includes(r), w = [X.replacementClass, o ? "".concat(X.cssPrefix, "-").concat(o) : ""].filter((P) => u.classes.indexOf(P) === -1).filter((P) => P !== "" || !!P).concat(u.classes).join(" ");
  let g = {
    children: [],
    attributes: V(V({}, u.attributes), {}, {
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
  f && (g.attributes[fn] = ""), s && (g.children.push({
    tag: "title",
    attributes: {
      id: g.attributes["aria-labelledby"] || "title-".concat(l || sr())
    },
    children: [s]
  }), delete g.attributes.title);
  const v = V(V({}, g), {}, {
    prefix: r,
    iconName: o,
    main: t,
    mask: n,
    maskId: c,
    transform: a,
    symbol: i,
    styles: V(V({}, y), u.styles)
  }), {
    children: b,
    attributes: A
  } = n.found && t.found ? Xt("generateAbstractMask", v) || {
    children: [],
    attributes: {}
  } : Xt("generateAbstractIcon", v) || {
    children: [],
    attributes: {}
  };
  return v.children = b, v.attributes = A, i ? Nm(v) : _m(v);
}
function gl(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: o,
    title: a,
    extra: i,
    watchable: s = !1
  } = e, c = V(V(V({}, i.attributes), a ? {
    title: a
  } : {}), {}, {
    class: i.classes.join(" ")
  });
  s && (c[fn] = "");
  const l = V({}, i.styles);
  hs(o) && (l.transform = fm({
    transform: o,
    startCentered: !0,
    width: n,
    height: r
  }), l["-webkit-transform"] = l.transform);
  const u = po(l);
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
function Mm(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, o = V(V(V({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), a = po(r.styles);
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
  styles: Jo
} = bt;
function Ei(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let o = null;
  return Array.isArray(r) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(X.cssPrefix, "-").concat(Go.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(X.cssPrefix, "-").concat(Go.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(X.cssPrefix, "-").concat(Go.PRIMARY),
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
const Bm = {
  found: !1,
  width: 512,
  height: 512
};
function jm(e, t) {
  !tf && !X.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Ai(e, t) {
  let n = t;
  return t === "fa" && X.styleDefault !== null && (t = Yt()), new Promise((r, o) => {
    if (n === "fa") {
      const a = gf(e) || {};
      e = a.iconName || e, t = a.prefix || t;
    }
    if (e && t && Jo[t] && Jo[t][e]) {
      const a = Jo[t][e];
      return r(Ei(a));
    }
    jm(e, t), r(V(V({}, Bm), {}, {
      icon: X.showMissingIcons && e ? Xt("missingIconAbstract") || {} : {}
    }));
  });
}
const vl = () => {
}, Ci = X.measurePerformance && Dr && Dr.mark && Dr.measure ? Dr : {
  mark: vl,
  measure: vl
}, Jn = 'FA "6.7.2"', qm = (e) => (Ci.mark("".concat(Jn, " ").concat(e, " begins")), () => wf(e)), wf = (e) => {
  Ci.mark("".concat(Jn, " ").concat(e, " ends")), Ci.measure("".concat(Jn, " ").concat(e), "".concat(Jn, " ").concat(e, " begins"), "".concat(Jn, " ").concat(e, " ends"));
};
var vs = {
  begin: qm,
  end: wf
};
const Br = () => {
};
function bl(e) {
  return typeof (e.getAttribute ? e.getAttribute(fn) : null) == "string";
}
function Um(e) {
  const t = e.getAttribute ? e.getAttribute(cs) : null, n = e.getAttribute ? e.getAttribute(fs) : null;
  return t && n;
}
function zm(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(X.replacementClass);
}
function Vm() {
  return X.autoReplaceSvg === !0 ? jr.replace : jr[X.autoReplaceSvg] || jr.replace;
}
function Hm(e) {
  return ye.createElementNS("http://www.w3.org/2000/svg", e);
}
function Wm(e) {
  return ye.createElement(e);
}
function xf(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? Hm : Wm
  } = t;
  if (typeof e == "string")
    return ye.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(a) {
    r.setAttribute(a, e.attributes[a]);
  }), (e.children || []).forEach(function(a) {
    r.appendChild(xf(a, {
      ceFn: n
    }));
  }), r;
}
function Km(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const jr = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(xf(n), t);
      }), t.getAttribute(fn) === null && X.keepOriginalSource) {
        let n = ye.createComment(Km(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~ps(t).indexOf(X.replacementClass))
      return jr.replace(e);
    const r = new RegExp("".concat(X.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const a = n[0].attributes.class.split(" ").reduce((i, s) => (s === X.replacementClass || s.match(r) ? i.toSvg.push(s) : i.toNode.push(s), i), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", a.toNode.join(" "));
    }
    const o = n.map((a) => mr(a)).join(`
`);
    t.setAttribute(fn, ""), t.innerHTML = o;
  }
};
function wl(e) {
  e();
}
function Sf(e, t) {
  const n = typeof t == "function" ? t : Br;
  if (e.length === 0)
    n();
  else {
    let r = wl;
    X.mutateApproach === Xh && (r = Gt.requestAnimationFrame || wl), r(() => {
      const o = Vm(), a = vs.begin("mutate");
      e.map(o), a(), n();
    });
  }
}
let bs = !1;
function Of() {
  bs = !0;
}
function Pi() {
  bs = !1;
}
let Xr = null;
function xl(e) {
  if (!sl || !X.observeMutations)
    return;
  const {
    treeCallback: t = Br,
    nodeCallback: n = Br,
    pseudoElementsCallback: r = Br,
    observeMutationsRoot: o = ye
  } = e;
  Xr = new sl((a) => {
    if (bs) return;
    const i = Yt();
    Nn(a).forEach((s) => {
      if (s.type === "childList" && s.addedNodes.length > 0 && !bl(s.addedNodes[0]) && (X.searchPseudoElements && r(s.target), t(s.target)), s.type === "attributes" && s.target.parentNode && X.searchPseudoElements && r(s.target.parentNode), s.type === "attributes" && bl(s.target) && ~nm.indexOf(s.attributeName))
        if (s.attributeName === "class" && Um(s.target)) {
          const {
            prefix: c,
            iconName: l
          } = mo(ps(s.target));
          s.target.setAttribute(cs, c || i), l && s.target.setAttribute(fs, l);
        } else zm(s.target) && n(s.target);
    });
  }), Mt && Xr.observe(o, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function Gm() {
  Xr && Xr.disconnect();
}
function Ym(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, o) => {
    const a = o.split(":"), i = a[0], s = a.slice(1);
    return i && s.length > 0 && (r[i] = s.join(":").trim()), r;
  }, {})), n;
}
function Xm(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let o = mo(ps(e));
  return o.prefix || (o.prefix = Yt()), t && n && (o.prefix = t, o.iconName = n), o.iconName && o.prefix || (o.prefix && r.length > 0 && (o.iconName = xm(o.prefix, e.innerText) || ys(o.prefix, wi(e.innerText))), !o.iconName && X.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (o.iconName = e.firstChild.data)), o;
}
function Jm(e) {
  const t = Nn(e.attributes).reduce((o, a) => (o.name !== "class" && o.name !== "style" && (o[a.name] = a.value), o), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return X.autoA11y && (n ? t["aria-labelledby"] = "".concat(X.replacementClass, "-title-").concat(r || sr()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function Qm() {
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
function Sl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: o
  } = Xm(e), a = Jm(e), i = Si("parseNodeAttributes", {}, e);
  let s = t.styleParser ? Ym(e) : [];
  return V({
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
  styles: Zm
} = bt;
function Ef(e) {
  const t = X.autoReplaceSvg === "nest" ? Sl(e, {
    styleParser: !1
  }) : Sl(e);
  return ~t.extra.classes.indexOf(rf) ? Xt("generateLayersText", e, t) : Xt("generateSvgReplacementMutation", e, t);
}
function ey() {
  return [...Rh, ...hi];
}
function Ol(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Mt) return Promise.resolve();
  const n = ye.documentElement.classList, r = (u) => n.add("".concat(cl, "-").concat(u)), o = (u) => n.remove("".concat(cl, "-").concat(u)), a = X.autoFetchSvg ? ey() : Xc.concat(Object.keys(Zm));
  a.includes("fa") || a.push("fa");
  const i = [".".concat(rf, ":not([").concat(fn, "])")].concat(a.map((u) => ".".concat(u, ":not([").concat(fn, "])"))).join(", ");
  if (i.length === 0)
    return Promise.resolve();
  let s = [];
  try {
    s = Nn(e.querySelectorAll(i));
  } catch {
  }
  if (s.length > 0)
    r("pending"), o("complete");
  else
    return Promise.resolve();
  const c = vs.begin("onTree"), l = s.reduce((u, f) => {
    try {
      const p = Ef(f);
      p && u.push(p);
    } catch (p) {
      tf || p.name === "MissingIcon" && console.error(p);
    }
    return u;
  }, []);
  return new Promise((u, f) => {
    Promise.all(l).then((p) => {
      Sf(p, () => {
        r("active"), r("complete"), o("pending"), typeof t == "function" && t(), c(), u();
      });
    }).catch((p) => {
      c(), f(p);
    });
  });
}
function ty(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Ef(e).then((n) => {
    n && Sf([n], t);
  });
}
function ny(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : Oi(t || {});
    let {
      mask: o
    } = n;
    return o && (o = (o || {}).icon ? o : Oi(o || {})), e(r, V(V({}, n), {}, {
      mask: o
    }));
  };
}
const ry = function(e) {
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
  return yo(V({
    type: "icon"
  }, e), () => (dn("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), X.autoA11y && (i ? l["aria-labelledby"] = "".concat(X.replacementClass, "-title-").concat(s || sr()) : (l["aria-hidden"] = "true", l.focusable = "false")), gs({
    icons: {
      main: Ei(h),
      mask: o ? Ei(o.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: f,
    iconName: p,
    transform: V(V({}, vt), n),
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
var oy = {
  mixout() {
    return {
      icon: ny(ry)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = Ol, e.nodeCallback = ty, e;
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
      return Ol(n, r);
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
        Promise.all([Ai(r, i), l.iconName ? Ai(l.iconName, l.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((d) => {
          let [w, g] = d;
          p([t, gs({
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
      const s = po(i);
      s.length > 0 && (r.style = s);
      let c;
      return hs(a) && (c = Xt("generateAbstractTransformGrouping", {
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
}, ay = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return yo({
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
              class: ["".concat(X.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, iy = {
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
        return yo({
          type: "counter",
          content: e
        }, () => (dn("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Mm({
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
}, sy = {
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
        return yo({
          type: "text",
          content: e
        }, () => (dn("beforeDOMElementCreation", {
          content: e,
          params: t
        }), gl({
          content: e,
          transform: V(V({}, vt), n),
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
      if (Gc) {
        const c = parseInt(getComputedStyle(t).fontSize, 10), l = t.getBoundingClientRect();
        i = l.width / c, s = l.height / c;
      }
      return X.autoA11y && !r && (a.attributes["aria-hidden"] = "true"), Promise.resolve([t, gl({
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
const ly = new RegExp('"', "ug"), El = [1105920, 1112319], Al = V(V(V(V({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), $h), Gh), qh), ki = Object.keys(Al).reduce((e, t) => (e[t.toLowerCase()] = Al[t], e), {}), uy = Object.keys(ki).reduce((e, t) => {
  const n = ki[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function cy(e) {
  const t = e.replace(ly, ""), n = ym(t, 0), r = n >= El[0] && n <= El[1], o = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: wi(o ? t[0] : t),
    isSecondary: r || o
  };
}
function fy(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), o = isNaN(r) ? "normal" : r;
  return (ki[n] || {})[o] || uy[n];
}
function Cl(e, t) {
  const n = "".concat(Yh).concat(t.replace(":", "-"));
  return new Promise((r, o) => {
    if (e.getAttribute(n) !== null)
      return r();
    const i = Nn(e.children).filter((p) => p.getAttribute(yi) === t)[0], s = Gt.getComputedStyle(e, t), c = s.getPropertyValue("font-family"), l = c.match(em), u = s.getPropertyValue("font-weight"), f = s.getPropertyValue("content");
    if (i && !l)
      return e.removeChild(i), r();
    if (l && f !== "none" && f !== "") {
      const p = s.getPropertyValue("content");
      let h = fy(c, u);
      const {
        value: d,
        isSecondary: w
      } = cy(p), g = l[0].startsWith("FontAwesome");
      let y = ys(h, d), v = y;
      if (g) {
        const b = Sm(d);
        b.iconName && b.prefix && (y = b.iconName, h = b.prefix);
      }
      if (y && !w && (!i || i.getAttribute(cs) !== h || i.getAttribute(fs) !== v)) {
        e.setAttribute(n, v), i && e.removeChild(i);
        const b = Qm(), {
          extra: A
        } = b;
        A.attributes[yi] = t, Ai(y, h).then((P) => {
          const $ = gs(V(V({}, b), {}, {
            icons: {
              main: P,
              mask: vf()
            },
            prefix: h,
            iconName: v,
            extra: A,
            watchable: !0
          })), F = ye.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(F, e.firstChild) : e.appendChild(F), F.outerHTML = $.map((B) => mr(B)).join(`
`), e.removeAttribute(n), r();
        }).catch(o);
      } else
        r();
    } else
      r();
  });
}
function dy(e) {
  return Promise.all([Cl(e, "::before"), Cl(e, "::after")]);
}
function py(e) {
  return e.parentNode !== document.head && !~Jh.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(yi) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Pl(e) {
  if (Mt)
    return new Promise((t, n) => {
      const r = Nn(e.querySelectorAll("*")).filter(py).map(dy), o = vs.begin("searchPseudoElements");
      Of(), Promise.all(r).then(() => {
        o(), Pi(), t();
      }).catch(() => {
        o(), Pi(), n();
      });
    });
}
var hy = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = Pl, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = ye
      } = t;
      X.searchPseudoElements && Pl(n);
    };
  }
};
let kl = !1;
var my = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Of(), kl = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        xl(Si("mutationObserverCallbacks", {}));
      },
      noAuto() {
        Gm();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        kl ? Pi() : xl(Si("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const Dl = (e) => {
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
var yy = {
  mixout() {
    return {
      parse: {
        transform: (e) => Dl(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = Dl(n)), e;
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
        attributes: V({}, p.outer),
        children: [{
          tag: "g",
          attributes: V({}, p.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: V(V({}, n.icon.attributes), p.path)
          }]
        }]
      };
    };
  }
};
const Qo = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Tl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function gy(e) {
  return e.tag === "g" ? e.children : [e];
}
var vy = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? mo(n.split(" ").map((o) => o.trim())) : vf();
        return r.prefix || (r.prefix = Yt()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
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
      } = a, p = cm({
        transform: s,
        containerWidth: u,
        iconWidth: c
      }), h = {
        tag: "rect",
        attributes: V(V({}, Qo), {}, {
          fill: "white"
        })
      }, d = l.children ? {
        children: l.children.map(Tl)
      } : {}, w = {
        tag: "g",
        attributes: V({}, p.inner),
        children: [Tl(V({
          tag: l.tag,
          attributes: V(V({}, l.attributes), p.path)
        }, d))]
      }, g = {
        tag: "g",
        attributes: V({}, p.outer),
        children: [w]
      }, y = "mask-".concat(i || sr()), v = "clip-".concat(i || sr()), b = {
        tag: "mask",
        attributes: V(V({}, Qo), {}, {
          id: y,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [h, g]
      }, A = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: v
          },
          children: gy(f)
        }, b]
      };
      return n.push(A, {
        tag: "rect",
        attributes: V({
          fill: "currentColor",
          "clip-path": "url(#".concat(v, ")"),
          mask: "url(#".concat(y, ")")
        }, Qo)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, by = {
  provides(e) {
    let t = !1;
    Gt.matchMedia && (t = Gt.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, o = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: V(V({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const a = V(V({}, o), {}, {
        attributeName: "opacity"
      }), i = {
        tag: "circle",
        attributes: V(V({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || i.children.push({
        tag: "animate",
        attributes: V(V({}, o), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: V(V({}, a), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(i), n.push({
        tag: "path",
        attributes: V(V({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: V(V({}, a), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: V(V({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: V(V({}, a), {}, {
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
}, wy = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, xy = [pm, oy, ay, iy, sy, hy, my, yy, vy, by, wy];
$m(xy, {
  mixoutsTo: tt
});
tt.noAuto;
const Af = tt.config, yr = tt.library;
tt.dom;
const Jr = tt.parse;
tt.findIconDefinition;
tt.toHtml;
const Sy = tt.icon;
tt.layer;
const Oy = tt.text;
tt.counter;
function $l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ut(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $l(Object(n), !0).forEach(function(r) {
      Ue(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $l(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ey(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ay(e) {
  var t = Ey(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Qr(e) {
  "@babel/helpers - typeof";
  return Qr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qr(e);
}
function Ue(e, t, n) {
  return t = Ay(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Cy(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Py(e, t) {
  if (e == null) return {};
  var n = Cy(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Di(e) {
  return ky(e) || Dy(e) || Ty(e) || $y();
}
function ky(e) {
  if (Array.isArray(e)) return Ti(e);
}
function Dy(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Ty(e, t) {
  if (e) {
    if (typeof e == "string") return Ti(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ti(e, t);
  }
}
function Ti(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function $y() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Fy = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Cf = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(y, v, b) {
      if (!l(v) || f(v) || p(v) || h(v) || c(v))
        return v;
      var A, P = 0, $ = 0;
      if (u(v))
        for (A = [], $ = v.length; P < $; P++)
          A.push(n(y, v[P], b));
      else {
        A = {};
        for (var F in v)
          Object.prototype.hasOwnProperty.call(v, F) && (A[y(F, b)] = n(y, v[F], b));
      }
      return A;
    }, r = function(y, v) {
      v = v || {};
      var b = v.separator || "_", A = v.split || /(?=[A-Z])/;
      return y.split(A).join(b);
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
      return typeof b != "function" ? y : function(A, P) {
        return b(A, y, P);
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
  })(Fy);
})(Cf);
var Iy = Cf.exports, Ry = ["class", "style"];
function Ly(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), o = Iy.camelize(n.slice(0, r)), a = n.slice(r + 1).trim();
    return t[o] = a, t;
  }, {});
}
function _y(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function ws(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var r = (e.children || []).map(function(c) {
    return ws(c);
  }), o = Object.keys(e.attributes || {}).reduce(function(c, l) {
    var u = e.attributes[l];
    switch (l) {
      case "class":
        c.class = _y(u);
        break;
      case "style":
        c.style = Ly(u);
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
  var a = n.style, i = a === void 0 ? {} : a, s = Py(n, Ry);
  return je(e.tag, ut(ut(ut({}, t), {}, {
    class: o.class,
    style: ut(ut({}, o.style), i)
  }, o.attrs), s), r);
}
var Pf = !1;
try {
  Pf = process.env.NODE_ENV === "production";
} catch {
}
function Ny() {
  if (!Pf && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function or(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Ue({}, e, t) : {};
}
function My(e) {
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
  }, Ue(Ue(Ue(Ue(Ue(Ue(Ue(Ue(Ue(Ue(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), "fa-flash", e.flash), Ue(Ue(t, "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse));
  return Object.keys(n).map(function(r) {
    return n[r] ? r : null;
  }).filter(function(r) {
    return r;
  });
}
function Fl(e) {
  if (e && Qr(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Jr.icon)
    return Jr.icon(e);
  if (e === null)
    return null;
  if (Qr(e) === "object" && e.prefix && e.iconName)
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
var Be = J({
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
    var r = n.attrs, o = G(function() {
      return Fl(t.icon);
    }), a = G(function() {
      return or("classes", My(t));
    }), i = G(function() {
      return or("transform", typeof t.transform == "string" ? Jr.transform(t.transform) : t.transform);
    }), s = G(function() {
      return or("mask", Fl(t.mask));
    }), c = G(function() {
      return Sy(o.value, ut(ut(ut(ut({}, a.value), i.value), s.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    de(c, function(u) {
      if (!u)
        return Ny("Could not find one or more icon(s)", o.value, s.value);
    }, {
      immediate: !0
    });
    var l = G(function() {
      return c.value ? ws(c.value.abstract[0], {}, r) : null;
    });
    return function() {
      return l.value;
    };
  }
});
J({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var r = n.slots, o = Af.familyPrefix, a = G(function() {
      return ["".concat(o, "-layers")].concat(Di(t.fixedWidth ? ["".concat(o, "-fw")] : []));
    });
    return function() {
      return je("div", {
        class: a.value
      }, r.default ? r.default() : []);
    };
  }
});
J({
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
    var r = n.attrs, o = Af.familyPrefix, a = G(function() {
      return or("classes", [].concat(Di(t.counter ? ["".concat(o, "-layers-counter")] : []), Di(t.position ? ["".concat(o, "-layers-").concat(t.position)] : [])));
    }), i = G(function() {
      return or("transform", typeof t.transform == "string" ? Jr.transform(t.transform) : t.transform);
    }), s = G(function() {
      var l = Oy(t.value.toString(), ut(ut({}, i.value), a.value)), u = l.abstract;
      return t.counter && (u[0].attributes.class = u[0].attributes.class.replace("fa-layers-text", "")), u[0];
    }), c = G(function() {
      return ws(s.value, {}, r);
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
const By = {
  prefix: "fas",
  iconName: "sort-down",
  icon: [320, 512, ["sort-desc"], "f0dd", "M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"]
}, $i = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, jy = {
  prefix: "fas",
  iconName: "box-archive",
  icon: [512, 512, ["archive"], "f187", "M32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64C0 46.3 14.3 32 32 32zm0 128l448 0 0 256c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-256zm128 80c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16z"]
}, Il = {
  prefix: "fas",
  iconName: "pen-ruler",
  icon: [512, 512, ["pencil-ruler"], "f5ae", "M469.3 19.3l23.4 23.4c25 25 25 65.5 0 90.5l-56.4 56.4L322.3 75.7l56.4-56.4c25-25 65.5-25 90.5 0zM44.9 353.2L299.7 98.3 413.7 212.3 158.8 467.1c-6.7 6.7-15.1 11.6-24.2 14.2l-104 29.7c-8.4 2.4-17.4 .1-23.6-6.1s-8.5-15.2-6.1-23.6l29.7-104c2.6-9.2 7.5-17.5 14.2-24.2zM249.4 103.4L103.4 249.4 16 161.9c-18.7-18.7-18.7-49.1 0-67.9L94.1 16c18.7-18.7 49.1-18.7 67.9 0l19.8 19.8c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1l45.1 45.1zM408.6 262.6l45.1 45.1c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1L496 350.1c18.7 18.7 18.7 49.1 0 67.9L417.9 496c-18.7 18.7-49.1 18.7-67.9 0l-87.4-87.4L408.6 262.6z"]
}, qy = {
  prefix: "fas",
  iconName: "circle-chevron-down",
  icon: [512, 512, ["chevron-circle-down"], "f13a", "M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"]
}, kf = qy, Uy = {
  prefix: "fas",
  iconName: "square-check",
  icon: [448, 512, [9745, 9989, 61510, "check-square"], "f14a", "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, Rl = {
  prefix: "fas",
  iconName: "eye-slash",
  icon: [640, 512, [], "f070", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]
}, Ll = {
  prefix: "fas",
  iconName: "eye",
  icon: [576, 512, [128065], "f06e", "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]
}, zy = {
  prefix: "fas",
  iconName: "sort-up",
  icon: [320, 512, ["sort-asc"], "f0de", "M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]
}, Vy = {
  prefix: "fas",
  iconName: "minus",
  icon: [448, 512, [8211, 8722, 10134, "subtract"], "f068", "M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]
}, Df = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]
}, Hy = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, Wy = Hy, Ky = {
  prefix: "fas",
  iconName: "spinner",
  icon: [512, 512, [], "f110", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]
}, Gy = {
  prefix: "fas",
  iconName: "calendar",
  icon: [448, 512, [128197, 128198], "f133", "M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"]
};
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Yy = {
  prefix: "far",
  iconName: "square",
  icon: [448, 512, [9632, 9723, 9724, 61590], "f0c8", "M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]
};
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Tf = {
  prefix: "fab",
  iconName: "whatsapp",
  icon: [448, 512, [], "f232", "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]
}, go = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Xy = { class: "relative flex w-full max-w-full items-stretch" }, Jy = {
  key: 0,
  class: "flex items-center"
}, Qy = {
  key: 1,
  class: "mr-1"
}, Zy = ["id", "disabled", "required", "name"], eg = { key: 5 }, tg = ["id", "required", "disabled", "name"], ng = {
  key: 0,
  class: "border-gray flex items-center whitespace-nowrap rounded rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center text-gray-500"
}, rg = ["id", "rows", "required", "disabled", "autocomplete", "placeholder", "autofocus", "name"], og = {
  key: 2,
  class: "relative flex w-full"
}, ag = ["href"], ig = {
  __name: "Input",
  props: /* @__PURE__ */ fi({
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
  emits: /* @__PURE__ */ fi(["changed", "update:modelValue"], ["update:modelValue"]),
  setup(e, { expose: t, emit: n }) {
    yr.add(Tf, Uy, Yy, Ll, Rl);
    const r = e;
    function o(w) {
      let g = [];
      return w.split("_").join(" ").split(" ").map(function(y) {
        g.push(y[0].toUpperCase() + y.slice(1));
      }), g.join(" ");
    }
    const a = n, i = q(!1), s = _c(e, "modelValue"), c = q(), l = q(), u = q(r.type);
    Ee(() => {
      i.value = !r.form, c.value = i.value ? s.value : r.form[r.field];
    }), de(
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
    de(
      () => r.field ? r.form[r.field] : null,
      (w) => {
        c.value = i.value ? s.value : w;
      },
      {
        deep: !0
      }
    ), de(
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
      var y, v, b, A, P, $, F, B, D;
      return C(), L("div", {
        class: ee(e.noLabel ? "mb-2" : "mb-4")
      }, [
        e.noLabel ? Y("", !0) : (C(), H(S(xs), {
          key: 0,
          customClass: e.labelCustomClass,
          for: e.field,
          value: e.label ? e.label : e.field ? o(e.field) : "",
          sublabel: e.sublabel,
          required: e.required
        }, null, 8, ["customClass", "for", "value", "sublabel", "required"])),
        j("div", Xy, [
          e.type === "switch" || e.type === "checkbox" ? (C(), L("label", Jy, [
            (y = w.$slots) != null && y.leftDescription ? U(w.$slots, "leftDescription", { key: 0 }, void 0, !0) : e.leftDescription ? (C(), L("span", Qy, Z(e.leftDescription ? e.leftDescription : "Disable"), 1)) : Y("", !0),
            ot(j("input", {
              id: e.field,
              type: "checkbox",
              class: "hidden",
              "onUpdate:modelValue": g[0] || (g[0] = (k) => c.value = k),
              disabled: r.disabled,
              required: r.required,
              name: e.name ?? e.field
            }, null, 8, Zy), [
              [Lc, c.value]
            ]),
            e.type === "switch" ? (C(), L("div", {
              key: 2,
              tabindex: "0",
              class: ee(["toggle-switch focusable ml-0!", {
                checked: c.value,
                disabled: r.disabled
              }])
            }, null, 2)) : (C(), L("div", {
              key: 3,
              tabindex: "0",
              class: ee(["focusable mr-1 p-1 text-primary", {
                "text-gray-500!": r.disabled,
                [e.checkboxCustomClass]: e.checkboxCustomClass
              }])
            }, [
              Q(un, {
                name: "popup",
                mode: "out-in"
              }, {
                default: z(() => [
                  r.form[e.field] ? (C(), H(S(Be), {
                    key: "checked",
                    icon: "fas fa-square-check"
                  })) : (C(), H(S(Be), {
                    key: "unchecked",
                    icon: "far fa-square"
                  }))
                ]),
                _: 1
              })
            ], 2)),
            (v = w.$slots) != null && v.rightDescription ? U(w.$slots, "rightDescription", { key: 4 }, void 0, !0) : e.rightDescription ? (C(), L("span", eg, Z(e.rightDescription), 1)) : Y("", !0)
          ])) : e.type === "select" ? ot((C(), L("select", {
            key: 1,
            "onUpdate:modelValue": g[1] || (g[1] = (k) => c.value = k),
            id: e.field,
            required: r.required,
            disabled: r.disabled,
            name: e.name ?? e.field,
            class: ee(["focusable shadow-xs block w-full rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", { [e.inputCustomClass]: !!e.inputCustomClass }])
          }, [
            U(w.$slots, "default", {}, void 0, !0)
          ], 10, tg)), [
            [ch, c.value]
          ]) : (C(), L(ie, { key: 2 }, [
            e.addon ? (C(), L("span", ng, Z(e.addon), 1)) : Y("", !0),
            e.type === "textarea" ? ot((C(), L("textarea", {
              key: 1,
              id: e.field,
              class: ee(["focusable relative m-0 block w-full flex-auto disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", {
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
            }, null, 10, rg)), [
              [Nc, c.value]
            ]) : (C(), L("div", og, [
              Q(S(hg), {
                id: e.field,
                type: u.value,
                class: ee(["focusable relative m-0 block w-full flex-auto disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", {
                  "rounded-l-none!": e.addon,
                  "rounded-r-none!": !!e.submitBtn || e.whatsApp || ((A = w.$slots) == null ? void 0 : A.submit),
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
              e.type == "password" && !e.hidePasswordToggler ? (C(), L("div", {
                key: 0,
                onClick: d,
                class: "z-2 absolute right-0 top-0 flex h-full w-11 cursor-pointer items-center justify-center text-lg leading-normal text-black"
              }, [
                u.value === "password" ? (C(), H(S(Be), {
                  key: 0,
                  icon: S(Ll)
                }, null, 8, ["icon"])) : (C(), H(S(Be), {
                  key: 1,
                  icon: S(Rl)
                }, null, 8, ["icon"]))
              ])) : Y("", !0)
            ])),
            e.form ? (C(), L(ie, { key: 3 }, [
              e.submitBtn ? (C(), H(S(fc), {
                key: 0,
                form: e.form,
                class: ee(["z-2 inline-block rounded-l-none", e.buttonCustomClass]),
                id: `submit-button-${e.field}`
              }, {
                default: z(() => [
                  me(Z(e.submitBtn), 1)
                ]),
                _: 1
              }, 8, ["form", "class", "id"])) : Y("", !0),
              (P = w.$slots) != null && P.submit ? (C(), H(S(fc), {
                key: 1,
                form: e.form,
                class: ee(["z-2 inline-block rounded-l-none", e.buttonCustomClass]),
                id: "button-input"
              }, {
                default: z(() => [
                  U(w.$slots, "submit", {}, void 0, !0)
                ]),
                _: 3
              }, 8, ["form", "class"])) : Y("", !0)
            ], 64)) : Y("", !0),
            e.whatsApp ? (C(), L("a", {
              key: 4,
              class: ee(["z-2 focus:z-3 focus:outline-hidden inline-block rounded-r bg-primary px-2 py-2 text-xs font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-600 focus:shadow-lg focus:ring-0 active:bg-primary-700 active:shadow-lg", e.buttonCustomClass]),
              href: e.whatsApp,
              target: "_blank"
            }, [
              Q(S(Be), {
                icon: "fab fa-whatsapp",
                size: "2xl"
              })
            ], 10, ag)) : Y("", !0)
          ], 64))
        ]),
        e.error || (F = ($ = e.form) == null ? void 0 : $.errors) != null && F[e.field] ? (C(), H(S(gr), {
          key: 1,
          message: e.error ? e.error : (D = (B = e.form) == null ? void 0 : B.errors) == null ? void 0 : D[e.field],
          class: "mt-2"
        }, null, 8, ["message"])) : Y("", !0)
      ], 2);
    };
  }
}, sg = /* @__PURE__ */ go(ig, [["__scopeId", "data-v-8dce32f1"]]), lg = { class: "text-sm text-red-600" }, gr = {
  __name: "InputError",
  props: ["message"],
  setup(e) {
    return (t, n) => ot((C(), L("div", null, [
      j("p", lg, Z(e.message), 1)
    ], 512)), [
      [Dn, e.message]
    ]);
  }
}, ug = { key: 0 }, cg = { key: 1 }, fg = {
  key: 2,
  class: "ml-2 text-xs text-gray-500"
}, dg = {
  key: 3,
  class: "ml-1 text-red-500"
}, xs = {
  __name: "InputLabel",
  props: ["value", "sublabel", "required", "customClass"],
  setup(e) {
    return (t, n) => (C(), L("label", {
      class: ee(["mb-1 block text-sm font-medium text-gray-700", e.customClass])
    }, [
      e.value ? (C(), L("span", ug, Z(e.value), 1)) : (C(), L("span", cg, [
        U(t.$slots, "default")
      ])),
      e.sublabel ? (C(), L("span", fg, Z(e.sublabel), 1)) : Y("", !0),
      e.required ? (C(), L("span", dg, "*")) : Y("", !0)
    ], 2));
  }
}, pg = ["value"], hg = {
  __name: "TextInput",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(e, { expose: t }) {
    const n = q(null);
    return Ee(() => {
      n.value.hasAttribute("autofocus") && n.value.focus();
    }), t({ focus: () => n.value.focus() }), (r, o) => (C(), L("input", {
      class: "max-w-full rounded border-gray-300 shadow focus:border-accent-500 focus:ring-accent-500",
      value: e.modelValue,
      onInput: o[0] || (o[0] = (a) => r.$emit("update:modelValue", a.target.value)),
      ref_key: "input",
      ref: n
    }, null, 40, pg));
  }
}, mg = { class: "relative mb-4 flex w-full flex-wrap items-stretch" }, yg = ["id", "required", "disabled", "autocomplete", "placeholder", "autofocus", "rows"], VE = {
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
    return (r, o) => (C(), L("div", null, [
      e.noLabel ? Y("", !0) : (C(), H(S(xs), {
        key: 0,
        for: e.field,
        value: e.label ? e.label : n(e.field),
        required: e.required
      }, null, 8, ["for", "value", "required"])),
      j("div", mg, [
        ot(j("textarea", {
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
        }, null, 40, yg), [
          [Nc, t.form[e.field]]
        ])
      ]),
      Q(S(gr), {
        class: "mt-2",
        message: t.form.errors[e.field]
      }, null, 8, ["message"])
    ]));
  }
};
var gg = Object.defineProperty, vg = Object.defineProperties, bg = Object.getOwnPropertyDescriptors, _l = Object.getOwnPropertySymbols, wg = Object.prototype.hasOwnProperty, xg = Object.prototype.propertyIsEnumerable, Nl = (e, t, n) => t in e ? gg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, En = (e, t) => {
  for (var n in t || (t = {}))
    wg.call(t, n) && Nl(e, n, t[n]);
  if (_l)
    for (var n of _l(t))
      xg.call(t, n) && Nl(e, n, t[n]);
  return e;
}, Ml = (e, t) => vg(e, bg(t));
const Sg = {
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
}, Og = {
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
}, Eg = {
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
}, Ss = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Ag = {}, Cg = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, Pg = /* @__PURE__ */ j("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), kg = [
  Pg
];
function Dg(e, t) {
  return C(), L("svg", Cg, kg);
}
const Tg = /* @__PURE__ */ Ss(Ag, [["render", Dg]]), $g = {}, Fg = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, Ig = /* @__PURE__ */ j("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), Rg = [
  Ig
];
function Lg(e, t) {
  return C(), L("svg", Fg, Rg);
}
const _g = /* @__PURE__ */ Ss($g, [["render", Lg]]), Bl = {
  Deselect: Tg,
  OpenIndicator: _g
}, Ng = {
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
function Mg(e) {
  const t = {};
  return Object.keys(e).sort().forEach((n) => {
    t[n] = e[n];
  }), JSON.stringify(t);
}
let Bg = 0;
function jg() {
  return ++Bg;
}
const qg = {
  components: En({}, Bl),
  directives: { appendToBody: Ng },
  mixins: [Sg, Og, Eg],
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
          return e.hasOwnProperty("id") ? e.id : Mg(e);
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
      default: () => jg()
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
          attributes: En({
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
        header: Ml(En({}, e), { deselect: this.deselect }),
        footer: Ml(En({}, e), { deselect: this.deselect })
      };
    },
    childComponents() {
      return En(En({}, Bl), this.components);
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
}, Ug = ["dir"], zg = ["id", "aria-expanded", "aria-owns"], Vg = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, Hg = ["disabled", "title", "aria-label", "onClick"], Wg = {
  ref: "actions",
  class: "vs__actions"
}, Kg = ["disabled"], Gg = { class: "vs__spinner" }, Yg = ["id"], Xg = ["id", "aria-selected", "onMouseover", "onClick"], Jg = {
  key: 0,
  class: "vs__no-options"
}, Qg = /* @__PURE__ */ me(" Sorry, no matching options. "), Zg = ["id"];
function ev(e, t, n, r, o, a) {
  const i = fh("append-to-body");
  return C(), L("div", {
    dir: n.dir,
    class: ee(["v-select", a.stateClasses])
  }, [
    U(e.$slots, "header", Oe(ke(a.scope.header))),
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
      j("div", Vg, [
        (C(!0), L(ie, null, et(a.selectedValue, (s, c) => U(e.$slots, "selected-option-container", {
          option: a.normalizeOptionForSlot(s),
          deselect: a.deselect,
          multiple: n.multiple,
          disabled: n.disabled
        }, () => [
          (C(), L("span", {
            key: n.getOptionKey(s),
            class: "vs__selected"
          }, [
            U(e.$slots, "selected-option", Oe(ke(a.normalizeOptionForSlot(s))), () => [
              me(Z(n.getOptionLabel(s)), 1)
            ]),
            n.multiple ? (C(), L("button", {
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
              (C(), H(Ko(a.childComponents.Deselect)))
            ], 8, Hg)) : Y("", !0)
          ]))
        ])), 256)),
        U(e.$slots, "search", Oe(ke(a.scope.search)), () => [
          j("input", ue({ class: "vs__search" }, a.scope.search.attributes, dh(a.scope.search.events)), null, 16)
        ])
      ], 512),
      j("div", Wg, [
        ot(j("button", {
          ref: "clearButton",
          disabled: n.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: t[0] || (t[0] = (...s) => a.clearSelection && a.clearSelection(...s))
        }, [
          (C(), H(Ko(a.childComponents.Deselect)))
        ], 8, Kg), [
          [Dn, a.showClearButton]
        ]),
        U(e.$slots, "open-indicator", Oe(ke(a.scope.openIndicator)), () => [
          n.noDrop ? Y("", !0) : (C(), H(Ko(a.childComponents.OpenIndicator), Oe(ue({ key: 0 }, a.scope.openIndicator.attributes)), null, 16))
        ]),
        U(e.$slots, "spinner", Oe(ke(a.scope.spinner)), () => [
          ot(j("div", Gg, "Loading...", 512), [
            [Dn, e.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, zg),
    Q(un, { name: n.transition }, {
      default: z(() => [
        a.dropdownOpen ? ot((C(), L("ul", {
          id: `vs${n.uid}__listbox`,
          ref: "dropdownMenu",
          key: `vs${n.uid}__listbox`,
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1",
          onMousedown: t[2] || (t[2] = $t((...s) => a.onMousedown && a.onMousedown(...s), ["prevent"])),
          onMouseup: t[3] || (t[3] = (...s) => a.onMouseUp && a.onMouseUp(...s))
        }, [
          U(e.$slots, "list-header", Oe(ke(a.scope.listHeader))),
          (C(!0), L(ie, null, et(a.filteredOptions, (s, c) => (C(), L("li", {
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
            onClick: $t((l) => n.selectable(s) ? a.select(s) : null, ["prevent", "stop"])
          }, [
            U(e.$slots, "option", Oe(ke(a.normalizeOptionForSlot(s))), () => [
              me(Z(n.getOptionLabel(s)), 1)
            ])
          ], 42, Xg))), 128)),
          a.filteredOptions.length === 0 ? (C(), L("li", Jg, [
            U(e.$slots, "no-options", Oe(ke(a.scope.noOptions)), () => [
              Qg
            ])
          ])) : Y("", !0),
          U(e.$slots, "list-footer", Oe(ke(a.scope.listFooter)))
        ], 40, Yg)), [
          [i]
        ]) : (C(), L("ul", {
          key: 1,
          id: `vs${n.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, Zg))
      ]),
      _: 3
    }, 8, ["name"]),
    U(e.$slots, "footer", Oe(ke(a.scope.footer)))
  ], 10, Ug);
}
const tv = /* @__PURE__ */ Ss(qg, [["render", ev]]), HE = {
  __name: "DropdownSearchbar",
  props: {
    options: Array,
    label: String,
    placeholder: String
  },
  setup(e) {
    return yr.add(Tf), (t, n) => (C(), H(S(tv), {
      options: e.options,
      label: e.label,
      placeholder: e.placeholder,
      class: "min-w-44"
    }, null, 8, ["options", "label", "placeholder"]));
  }
}, kt = {
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
function nv(e) {
  return new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
}
const $f = {
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
      default: (e, t) => e.match(nv(t))
    }
  }
}, rv = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, ov = {
  name: "ModelSelect",
  mixins: [$f],
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
      kt.openOptions(this);
    },
    blurInput() {
      kt.blurInput(this);
    },
    closeOptions() {
      kt.closeOptions(this);
    },
    prevItem() {
      kt.prevItem(this);
    },
    nextItem() {
      kt.nextItem(this);
    },
    enterItem() {
      kt.enterItem(this);
    },
    pointerSet(e) {
      kt.pointerSet(this, e);
    },
    pointerAdjust() {
      kt.pointerAdjust(this);
    },
    mousedownItem() {
      kt.mousedownItem(this);
    },
    selectItem(e) {
      this.searchText = "", this.closeOptions(), typeof this.modelValue == "object" && this.modelValue ? this.$emit("update:modelValue", e) : (this.$emit("update:modelValue", e.value), e.value !== void 0 && e.value === e.text && (this.searchText = e.value));
    },
    optionValue(e) {
      return typeof e == "object" && e !== null ? e.value : e;
    }
  }
}, av = /* @__PURE__ */ j("i", { class: "dropdown icon" }, null, -1), iv = ["disabled", "tabindex", "id", "name", "value"], sv = ["data-vss-custom-attr"], lv = ["data-vss-custom-attr", "onClick", "onMouseenter"];
function uv(e, t, n, r, o, a) {
  return C(), L("div", {
    class: ee(["ui fluid search selection dropdown", { "active visible": o.showMenu, error: e.isError, disabled: e.isDisabled }]),
    onClick: t[11] || (t[11] = (...i) => a.openOptions && a.openOptions(...i)),
    onFocus: t[12] || (t[12] = (...i) => a.openOptions && a.openOptions(...i))
  }, [
    av,
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
      onFocus: t[1] || (t[1] = $t((...i) => a.openOptions && a.openOptions(...i), ["prevent"])),
      onKeyup: [
        t[2] || (t[2] = on((...i) => a.closeOptions && a.closeOptions(...i), ["esc"])),
        t[7] || (t[7] = on($t((...i) => a.enterItem && a.enterItem(...i), ["prevent"]), ["enter"]))
      ],
      onBlur: t[3] || (t[3] = (...i) => a.blurInput && a.blurInput(...i)),
      onKeydown: [
        t[4] || (t[4] = on((...i) => a.prevItem && a.prevItem(...i), ["up"])),
        t[5] || (t[5] = on((...i) => a.nextItem && a.nextItem(...i), ["down"])),
        t[6] || (t[6] = on($t(() => {
        }, ["prevent"]), ["enter"])),
        t[8] || (t[8] = on((...i) => a.deleteTextOrItem && a.deleteTextOrItem(...i), ["delete"]))
      ]
    }, null, 40, iv),
    j("div", {
      class: ee(["text", a.textClass]),
      "data-vss-custom-attr": a.searchTextCustomAttr
    }, Z(a.inputText), 11, sv),
    j("div", {
      class: ee(["menu", a.menuClass]),
      ref: "menu",
      onMousedown: t[10] || (t[10] = $t(() => {
      }, ["prevent"])),
      style: Wt(a.menuStyle),
      tabindex: "-1"
    }, [
      (C(!0), L(ie, null, et(a.filteredOptions, (i, s) => (C(), L("div", {
        key: s,
        class: ee(["item", { selected: i.selected || o.pointer === s, disabled: i.disabled }]),
        "data-vss-custom-attr": a.customAttrs[s] ? a.customAttrs[s] : "",
        onClick: $t((c) => a.selectItem(i), ["stop"]),
        onMousedown: t[9] || (t[9] = (...c) => a.mousedownItem && a.mousedownItem(...c)),
        onMouseenter: (c) => a.pointerSet(s)
      }, [
        U(e.$slots, "default", {
          option: i,
          idx: s
        }, () => [
          me(Z(i.text), 1)
        ])
      ], 42, lv))), 128))
    ], 38)
  ], 34);
}
const jl = /* @__PURE__ */ rv(ov, [["render", uv]]), ql = {
  name: "ModelListSelect",
  mixins: [$f],
  emits: ["blur", "searchchange", "update:modelValue"],
  render: function() {
    return je(jl, {
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
    ModelSelect: jl
  }
}, cv = {
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
    return (o, a) => (C(), L("div", null, [
      !e.noLabel && (e.label || e.field) ? (C(), H(S(xs), {
        key: 0,
        for: e.id ?? e.field,
        value: r(e.label ?? e.field),
        required: e.required
      }, null, 8, ["for", "value", "required"])) : Y("", !0),
      e.noForm ? (C(), H(S(ql), {
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
      }, null, 8, ["id", "list", "modelValue", "option-value", "option-text", "option-disabled", "placeholder", "is-disabled", "filterPredicate"])) : (C(), L(ie, { key: 2 }, [
        Q(S(ql), {
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
        Q(S(gr), {
          message: e.form.errors[e.field]
        }, null, 8, ["message"])
      ], 64))
    ]));
  }
}, fv = /* @__PURE__ */ go(cv, [["__scopeId", "data-v-c8f3c7c8"]]);
function dv(e) {
  return typeof e == "symbol" || e instanceof Symbol;
}
function pv() {
}
function hv(e) {
  return e == null || typeof e != "object" && typeof e != "function";
}
function mv(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Fi(e) {
  return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
function Zr(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
const Ff = "[object RegExp]", If = "[object String]", Rf = "[object Number]", Lf = "[object Boolean]", Ii = "[object Arguments]", _f = "[object Symbol]", Nf = "[object Date]", Mf = "[object Map]", Bf = "[object Set]", jf = "[object Array]", yv = "[object Function]", qf = "[object ArrayBuffer]", qr = "[object Object]", gv = "[object Error]", Uf = "[object DataView]", zf = "[object Uint8Array]", Vf = "[object Uint8ClampedArray]", Hf = "[object Uint16Array]", Wf = "[object Uint32Array]", vv = "[object BigUint64Array]", Kf = "[object Int8Array]", Gf = "[object Int16Array]", Yf = "[object Int32Array]", bv = "[object BigInt64Array]", Xf = "[object Float32Array]", Jf = "[object Float64Array]";
function kn(e, t, n, r = /* @__PURE__ */ new Map(), o = void 0) {
  const a = o == null ? void 0 : o(e, t, n, r);
  if (a != null)
    return a;
  if (hv(e))
    return e;
  if (r.has(e))
    return r.get(e);
  if (Array.isArray(e)) {
    const i = new Array(e.length);
    r.set(e, i);
    for (let s = 0; s < e.length; s++)
      i[s] = kn(e[s], s, n, r, o);
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
      i.set(s, kn(c, s, n, r, o));
    return i;
  }
  if (e instanceof Set) {
    const i = /* @__PURE__ */ new Set();
    r.set(e, i);
    for (const s of e)
      i.add(kn(s, void 0, n, r, o));
    return i;
  }
  if (typeof Buffer < "u" && Buffer.isBuffer(e))
    return e.subarray();
  if (mv(e)) {
    const i = new (Object.getPrototypeOf(e)).constructor(e.length);
    r.set(e, i);
    for (let s = 0; s < e.length; s++)
      i[s] = kn(e[s], s, n, r, o);
    return i;
  }
  if (e instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer)
    return e.slice(0);
  if (e instanceof DataView) {
    const i = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
    return r.set(e, i), Wn(i, e, n, r, o), i;
  }
  if (typeof File < "u" && e instanceof File) {
    const i = new File([e], e.name, {
      type: e.type
    });
    return r.set(e, i), Wn(i, e, n, r, o), i;
  }
  if (e instanceof Blob) {
    const i = new Blob([e], { type: e.type });
    return r.set(e, i), Wn(i, e, n, r, o), i;
  }
  if (e instanceof Error) {
    const i = new e.constructor();
    return r.set(e, i), i.message = e.message, i.name = e.name, i.stack = e.stack, i.cause = e.cause, Wn(i, e, n, r, o), i;
  }
  if (typeof e == "object" && wv(e)) {
    const i = Object.create(Object.getPrototypeOf(e));
    return r.set(e, i), Wn(i, e, n, r, o), i;
  }
  return e;
}
function Wn(e, t, n = e, r, o) {
  const a = [...Object.keys(t), ...Fi(t)];
  for (let i = 0; i < a.length; i++) {
    const s = a[i], c = Object.getOwnPropertyDescriptor(e, s);
    (c == null || c.writable) && (e[s] = kn(t[s], s, n, r, o));
  }
}
function wv(e) {
  switch (Zr(e)) {
    case Ii:
    case jf:
    case qf:
    case Uf:
    case Lf:
    case Nf:
    case Xf:
    case Jf:
    case Kf:
    case Gf:
    case Yf:
    case Mf:
    case Rf:
    case qr:
    case Ff:
    case Bf:
    case If:
    case _f:
    case zf:
    case Vf:
    case Hf:
    case Wf:
      return !0;
    default:
      return !1;
  }
}
function st(e) {
  return kn(e, void 0, e, /* @__PURE__ */ new Map(), void 0);
}
function eo(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype || Object.getPrototypeOf(t) === null ? Object.prototype.toString.call(e) === "[object Object]" : !1;
}
function Qn(e, t) {
  const n = Object.keys(t);
  for (let r = 0; r < n.length; r++) {
    const o = n[r], a = t[o], i = e[o];
    Array.isArray(a) ? Array.isArray(i) ? e[o] = Qn(i, a) : e[o] = Qn([], a) : eo(a) ? eo(i) ? e[o] = Qn(i, a) : e[o] = Qn({}, a) : (i === void 0 || a !== void 0) && (e[o] = a);
  }
  return e;
}
function Qf(e, t) {
  return e === t || Number.isNaN(e) && Number.isNaN(t);
}
function xv(e, t, n) {
  return Zn(e, t, void 0, void 0, void 0, void 0, n);
}
function Zn(e, t, n, r, o, a, i) {
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
        return ar(e, t, a, i);
    }
  return ar(e, t, a, i);
}
function ar(e, t, n, r) {
  if (Object.is(e, t))
    return !0;
  let o = Zr(e), a = Zr(t);
  if (o === Ii && (o = qr), a === Ii && (a = qr), o !== a)
    return !1;
  switch (o) {
    case If:
      return e.toString() === t.toString();
    case Rf: {
      const c = e.valueOf(), l = t.valueOf();
      return Qf(c, l);
    }
    case Lf:
    case Nf:
    case _f:
      return Object.is(e.valueOf(), t.valueOf());
    case Ff:
      return e.source === t.source && e.flags === t.flags;
    case yv:
      return e === t;
  }
  n = n ?? /* @__PURE__ */ new Map();
  const i = n.get(e), s = n.get(t);
  if (i != null && s != null)
    return i === t;
  n.set(e, t), n.set(t, e);
  try {
    switch (o) {
      case Mf: {
        if (e.size !== t.size)
          return !1;
        for (const [c, l] of e.entries())
          if (!t.has(c) || !Zn(l, t.get(c), c, e, t, n, r))
            return !1;
        return !0;
      }
      case Bf: {
        if (e.size !== t.size)
          return !1;
        const c = Array.from(e.values()), l = Array.from(t.values());
        for (let u = 0; u < c.length; u++) {
          const f = c[u], p = l.findIndex((h) => Zn(f, h, void 0, e, t, n, r));
          if (p === -1)
            return !1;
          l.splice(p, 1);
        }
        return !0;
      }
      case jf:
      case zf:
      case Vf:
      case Hf:
      case Wf:
      case vv:
      case Kf:
      case Gf:
      case Yf:
      case bv:
      case Xf:
      case Jf: {
        if (typeof Buffer < "u" && Buffer.isBuffer(e) !== Buffer.isBuffer(t) || e.length !== t.length)
          return !1;
        for (let c = 0; c < e.length; c++)
          if (!Zn(e[c], t[c], c, e, t, n, r))
            return !1;
        return !0;
      }
      case qf:
        return e.byteLength !== t.byteLength ? !1 : ar(new Uint8Array(e), new Uint8Array(t), n, r);
      case Uf:
        return e.byteLength !== t.byteLength || e.byteOffset !== t.byteOffset ? !1 : ar(new Uint8Array(e), new Uint8Array(t), n, r);
      case gv:
        return e.name === t.name && e.message === t.message;
      case qr: {
        if (!(ar(e.constructor, t.constructor, n, r) || eo(e) && eo(t)))
          return !1;
        const l = [...Object.keys(e), ...Fi(e)], u = [...Object.keys(t), ...Fi(t)];
        if (l.length !== u.length)
          return !1;
        for (let f = 0; f < l.length; f++) {
          const p = l[f], h = e[p];
          if (!Object.hasOwn(t, p))
            return !1;
          const d = t[p];
          if (!Zn(h, d, p, e, t, n, r))
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
function Sv(e, t) {
  return xv(e, t, pv);
}
var Ri = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ov(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ev(e) {
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
var Zo, Ul;
function Mn() {
  return Ul || (Ul = 1, Zo = TypeError), Zo;
}
const Av = {}, Cv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Av
}, Symbol.toStringTag, { value: "Module" })), Li = /* @__PURE__ */ Ev(Cv);
var ea, zl;
function vo() {
  if (zl) return ea;
  zl = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, n = e && t && typeof t.get == "function" ? t.get : null, r = e && Map.prototype.forEach, o = typeof Set == "function" && Set.prototype, a = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, i = o && a && typeof a.get == "function" ? a.get : null, s = o && Set.prototype.forEach, c = typeof WeakMap == "function" && WeakMap.prototype, l = c ? WeakMap.prototype.has : null, u = typeof WeakSet == "function" && WeakSet.prototype, f = u ? WeakSet.prototype.has : null, p = typeof WeakRef == "function" && WeakRef.prototype, h = p ? WeakRef.prototype.deref : null, d = Boolean.prototype.valueOf, w = Object.prototype.toString, g = Function.prototype.toString, y = String.prototype.match, v = String.prototype.slice, b = String.prototype.replace, A = String.prototype.toUpperCase, P = String.prototype.toLowerCase, $ = RegExp.prototype.test, F = Array.prototype.concat, B = Array.prototype.join, D = Array.prototype.slice, k = Math.floor, N = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, m = Object.getOwnPropertySymbols, O = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, E = typeof Symbol == "function" && typeof Symbol.iterator == "object", x = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === E || !0) ? Symbol.toStringTag : null, W = Object.prototype.propertyIsEnumerable, M = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(T) {
    return T.__proto__;
  } : null);
  function R(T, I) {
    if (T === 1 / 0 || T === -1 / 0 || T !== T || T && T > -1e3 && T < 1e3 || $.call(/e/, I))
      return I;
    var se = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof T == "number") {
      var fe = T < 0 ? -k(-T) : k(T);
      if (fe !== T) {
        var he = String(fe), re = v.call(I, he.length + 1);
        return b.call(he, se, "$&_") + "." + b.call(b.call(re, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return b.call(I, se, "$&_");
  }
  var K = Li, oe = K.custom, Pe = Te(oe) ? oe : null, Ge = {
    __proto__: null,
    double: '"',
    single: "'"
  }, Ae = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  ea = function T(I, se, fe, he) {
    var re = se || {};
    if (qe(re, "quoteStyle") && !qe(Ge, re.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (qe(re, "maxStringLength") && (typeof re.maxStringLength == "number" ? re.maxStringLength < 0 && re.maxStringLength !== 1 / 0 : re.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var jt = qe(re, "customInspect") ? re.customInspect : !0;
    if (typeof jt != "boolean" && jt !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (qe(re, "indent") && re.indent !== null && re.indent !== "	" && !(parseInt(re.indent, 10) === re.indent && re.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (qe(re, "numericSeparator") && typeof re.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var nn = re.numericSeparator;
    if (typeof I > "u")
      return "undefined";
    if (I === null)
      return "null";
    if (typeof I == "boolean")
      return I ? "true" : "false";
    if (typeof I == "string")
      return Ks(I, re);
    if (typeof I == "number") {
      if (I === 0)
        return 1 / 0 / I > 0 ? "0" : "-0";
      var Ye = String(I);
      return nn ? R(I, Ye) : Ye;
    }
    if (typeof I == "bigint") {
      var qt = String(I) + "n";
      return nn ? R(I, qt) : qt;
    }
    var jo = typeof re.depth > "u" ? 5 : re.depth;
    if (typeof fe > "u" && (fe = 0), fe >= jo && jo > 0 && typeof I == "object")
      return mt(I) ? "[Array]" : "[Object]";
    var xn = sh(re, fe);
    if (typeof he > "u")
      he = [];
    else if (Bt(he, I) >= 0)
      return "[Circular]";
    function it(Sn, kr, uh) {
      if (kr && (he = D.call(he), he.push(kr)), uh) {
        var nl = {
          depth: re.depth
        };
        return qe(re, "quoteStyle") && (nl.quoteStyle = re.quoteStyle), T(Sn, nl, fe + 1, he);
      }
      return T(Sn, re, fe + 1, he);
    }
    if (typeof I == "function" && !Se(I)) {
      var Ys = gn(I), Xs = Cr(I, it);
      return "[Function" + (Ys ? ": " + Ys : " (anonymous)") + "]" + (Xs.length > 0 ? " { " + B.call(Xs, ", ") + " }" : "");
    }
    if (Te(I)) {
      var Js = E ? b.call(String(I), /^(Symbol\(.*\))_[^)]*$/, "$1") : O.call(I);
      return typeof I == "object" && !E ? Vn(Js) : Js;
    }
    if (oh(I)) {
      for (var Hn = "<" + P.call(String(I.nodeName)), qo = I.attributes || [], Pr = 0; Pr < qo.length; Pr++)
        Hn += " " + qo[Pr].name + "=" + _e(De(qo[Pr].value), "double", re);
      return Hn += ">", I.childNodes && I.childNodes.length && (Hn += "..."), Hn += "</" + P.call(String(I.nodeName)) + ">", Hn;
    }
    if (mt(I)) {
      if (I.length === 0)
        return "[]";
      var Uo = Cr(I, it);
      return xn && !ih(Uo) ? "[" + Bo(Uo, xn) + "]" : "[ " + B.call(Uo, ", ") + " ]";
    }
    if (ae(I)) {
      var zo = Cr(I, it);
      return !("cause" in Error.prototype) && "cause" in I && !W.call(I, "cause") ? "{ [" + String(I) + "] " + B.call(F.call("[cause]: " + it(I.cause), zo), ", ") + " }" : zo.length === 0 ? "[" + String(I) + "]" : "{ [" + String(I) + "] " + B.call(zo, ", ") + " }";
    }
    if (typeof I == "object" && jt) {
      if (Pe && typeof I[Pe] == "function" && K)
        return K(I, { depth: jo - fe });
      if (jt !== "symbol" && typeof I.inspect == "function")
        return I.inspect();
    }
    if (at(I)) {
      var Qs = [];
      return r && r.call(I, function(Sn, kr) {
        Qs.push(it(kr, I, !0) + " => " + it(Sn, I));
      }), Gs("Map", n.call(I), Qs, xn);
    }
    if (wn(I)) {
      var Zs = [];
      return s && s.call(I, function(Sn) {
        Zs.push(it(Sn, I));
      }), Gs("Set", i.call(I), Zs, xn);
    }
    if (vn(I))
      return Mo("WeakMap");
    if (rh(I))
      return Mo("WeakSet");
    if (bn(I))
      return Mo("WeakRef");
    if (ce(I))
      return Vn(it(Number(I)));
    if (nt(I))
      return Vn(it(N.call(I)));
    if (be(I))
      return Vn(d.call(I));
    if (ge(I))
      return Vn(it(String(I)));
    if (typeof window < "u" && I === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && I === globalThis || typeof Ri < "u" && I === Ri)
      return "{ [object globalThis] }";
    if (!yt(I) && !Se(I)) {
      var Vo = Cr(I, it), el = M ? M(I) === Object.prototype : I instanceof Object || I.constructor === Object, Ho = I instanceof Object ? "" : "null prototype", tl = !el && x && Object(I) === I && x in I ? v.call(rt(I), 8, -1) : Ho ? "Object" : "", lh = el || typeof I.constructor != "function" ? "" : I.constructor.name ? I.constructor.name + " " : "", Wo = lh + (tl || Ho ? "[" + B.call(F.call([], tl || [], Ho || []), ": ") + "] " : "");
      return Vo.length === 0 ? Wo + "{}" : xn ? Wo + "{" + Bo(Vo, xn) + "}" : Wo + "{ " + B.call(Vo, ", ") + " }";
    }
    return String(I);
  };
  function _e(T, I, se) {
    var fe = se.quoteStyle || I, he = Ge[fe];
    return he + T + he;
  }
  function De(T) {
    return b.call(String(T), /"/g, "&quot;");
  }
  function Ne(T) {
    return !x || !(typeof T == "object" && (x in T || typeof T[x] < "u"));
  }
  function mt(T) {
    return rt(T) === "[object Array]" && Ne(T);
  }
  function yt(T) {
    return rt(T) === "[object Date]" && Ne(T);
  }
  function Se(T) {
    return rt(T) === "[object RegExp]" && Ne(T);
  }
  function ae(T) {
    return rt(T) === "[object Error]" && Ne(T);
  }
  function ge(T) {
    return rt(T) === "[object String]" && Ne(T);
  }
  function ce(T) {
    return rt(T) === "[object Number]" && Ne(T);
  }
  function be(T) {
    return rt(T) === "[object Boolean]" && Ne(T);
  }
  function Te(T) {
    if (E)
      return T && typeof T == "object" && T instanceof Symbol;
    if (typeof T == "symbol")
      return !0;
    if (!T || typeof T != "object" || !O)
      return !1;
    try {
      return O.call(T), !0;
    } catch {
    }
    return !1;
  }
  function nt(T) {
    if (!T || typeof T != "object" || !N)
      return !1;
    try {
      return N.call(T), !0;
    } catch {
    }
    return !1;
  }
  var $e = Object.prototype.hasOwnProperty || function(T) {
    return T in this;
  };
  function qe(T, I) {
    return $e.call(T, I);
  }
  function rt(T) {
    return w.call(T);
  }
  function gn(T) {
    if (T.name)
      return T.name;
    var I = y.call(g.call(T), /^function\s*([\w$]+)/);
    return I ? I[1] : null;
  }
  function Bt(T, I) {
    if (T.indexOf)
      return T.indexOf(I);
    for (var se = 0, fe = T.length; se < fe; se++)
      if (T[se] === I)
        return se;
    return -1;
  }
  function at(T) {
    if (!n || !T || typeof T != "object")
      return !1;
    try {
      n.call(T);
      try {
        i.call(T);
      } catch {
        return !0;
      }
      return T instanceof Map;
    } catch {
    }
    return !1;
  }
  function vn(T) {
    if (!l || !T || typeof T != "object")
      return !1;
    try {
      l.call(T, l);
      try {
        f.call(T, f);
      } catch {
        return !0;
      }
      return T instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function bn(T) {
    if (!h || !T || typeof T != "object")
      return !1;
    try {
      return h.call(T), !0;
    } catch {
    }
    return !1;
  }
  function wn(T) {
    if (!i || !T || typeof T != "object")
      return !1;
    try {
      i.call(T);
      try {
        n.call(T);
      } catch {
        return !0;
      }
      return T instanceof Set;
    } catch {
    }
    return !1;
  }
  function rh(T) {
    if (!f || !T || typeof T != "object")
      return !1;
    try {
      f.call(T, f);
      try {
        l.call(T, l);
      } catch {
        return !0;
      }
      return T instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function oh(T) {
    return !T || typeof T != "object" ? !1 : typeof HTMLElement < "u" && T instanceof HTMLElement ? !0 : typeof T.nodeName == "string" && typeof T.getAttribute == "function";
  }
  function Ks(T, I) {
    if (T.length > I.maxStringLength) {
      var se = T.length - I.maxStringLength, fe = "... " + se + " more character" + (se > 1 ? "s" : "");
      return Ks(v.call(T, 0, I.maxStringLength), I) + fe;
    }
    var he = Ae[I.quoteStyle || "single"];
    he.lastIndex = 0;
    var re = b.call(b.call(T, he, "\\$1"), /[\x00-\x1f]/g, ah);
    return _e(re, "single", I);
  }
  function ah(T) {
    var I = T.charCodeAt(0), se = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[I];
    return se ? "\\" + se : "\\x" + (I < 16 ? "0" : "") + A.call(I.toString(16));
  }
  function Vn(T) {
    return "Object(" + T + ")";
  }
  function Mo(T) {
    return T + " { ? }";
  }
  function Gs(T, I, se, fe) {
    var he = fe ? Bo(se, fe) : B.call(se, ", ");
    return T + " (" + I + ") {" + he + "}";
  }
  function ih(T) {
    for (var I = 0; I < T.length; I++)
      if (Bt(T[I], `
`) >= 0)
        return !1;
    return !0;
  }
  function sh(T, I) {
    var se;
    if (T.indent === "	")
      se = "	";
    else if (typeof T.indent == "number" && T.indent > 0)
      se = B.call(Array(T.indent + 1), " ");
    else
      return null;
    return {
      base: se,
      prev: B.call(Array(I + 1), se)
    };
  }
  function Bo(T, I) {
    if (T.length === 0)
      return "";
    var se = `
` + I.prev + I.base;
    return se + B.call(T, "," + se) + `
` + I.prev;
  }
  function Cr(T, I) {
    var se = mt(T), fe = [];
    if (se) {
      fe.length = T.length;
      for (var he = 0; he < T.length; he++)
        fe[he] = qe(T, he) ? I(T[he], T) : "";
    }
    var re = typeof m == "function" ? m(T) : [], jt;
    if (E) {
      jt = {};
      for (var nn = 0; nn < re.length; nn++)
        jt["$" + re[nn]] = re[nn];
    }
    for (var Ye in T)
      qe(T, Ye) && (se && String(Number(Ye)) === Ye && Ye < T.length || E && jt["$" + Ye] instanceof Symbol || ($.call(/[^\w$]/, Ye) ? fe.push(I(Ye, T) + ": " + I(T[Ye], T)) : fe.push(Ye + ": " + I(T[Ye], T))));
    if (typeof m == "function")
      for (var qt = 0; qt < re.length; qt++)
        W.call(T, re[qt]) && fe.push("[" + I(re[qt]) + "]: " + I(T[re[qt]], T));
    return fe;
  }
  return ea;
}
var ta, Vl;
function Pv() {
  if (Vl) return ta;
  Vl = 1;
  var e = /* @__PURE__ */ vo(), t = /* @__PURE__ */ Mn(), n = function(s, c, l) {
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
  return ta = function() {
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
  }, ta;
}
var na, Hl;
function Zf() {
  return Hl || (Hl = 1, na = Object), na;
}
var ra, Wl;
function kv() {
  return Wl || (Wl = 1, ra = Error), ra;
}
var oa, Kl;
function Dv() {
  return Kl || (Kl = 1, oa = EvalError), oa;
}
var aa, Gl;
function Tv() {
  return Gl || (Gl = 1, aa = RangeError), aa;
}
var ia, Yl;
function $v() {
  return Yl || (Yl = 1, ia = ReferenceError), ia;
}
var sa, Xl;
function Fv() {
  return Xl || (Xl = 1, sa = SyntaxError), sa;
}
var la, Jl;
function Iv() {
  return Jl || (Jl = 1, la = URIError), la;
}
var ua, Ql;
function Rv() {
  return Ql || (Ql = 1, ua = Math.abs), ua;
}
var ca, Zl;
function Lv() {
  return Zl || (Zl = 1, ca = Math.floor), ca;
}
var fa, eu;
function _v() {
  return eu || (eu = 1, fa = Math.max), fa;
}
var da, tu;
function Nv() {
  return tu || (tu = 1, da = Math.min), da;
}
var pa, nu;
function Mv() {
  return nu || (nu = 1, pa = Math.pow), pa;
}
var ha, ru;
function Bv() {
  return ru || (ru = 1, ha = Math.round), ha;
}
var ma, ou;
function jv() {
  return ou || (ou = 1, ma = Number.isNaN || function(t) {
    return t !== t;
  }), ma;
}
var ya, au;
function qv() {
  if (au) return ya;
  au = 1;
  var e = /* @__PURE__ */ jv();
  return ya = function(n) {
    return e(n) || n === 0 ? n : n < 0 ? -1 : 1;
  }, ya;
}
var ga, iu;
function Uv() {
  return iu || (iu = 1, ga = Object.getOwnPropertyDescriptor), ga;
}
var va, su;
function ed() {
  if (su) return va;
  su = 1;
  var e = /* @__PURE__ */ Uv();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return va = e, va;
}
var ba, lu;
function zv() {
  if (lu) return ba;
  lu = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return ba = e, ba;
}
var wa, uu;
function Vv() {
  return uu || (uu = 1, wa = function() {
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
  }), wa;
}
var xa, cu;
function Hv() {
  if (cu) return xa;
  cu = 1;
  var e = typeof Symbol < "u" && Symbol, t = Vv();
  return xa = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, xa;
}
var Sa, fu;
function td() {
  return fu || (fu = 1, Sa = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Sa;
}
var Oa, du;
function nd() {
  if (du) return Oa;
  du = 1;
  var e = /* @__PURE__ */ Zf();
  return Oa = e.getPrototypeOf || null, Oa;
}
var Ea, pu;
function Wv() {
  if (pu) return Ea;
  pu = 1;
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
  return Ea = function(c) {
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
  }, Ea;
}
var Aa, hu;
function bo() {
  if (hu) return Aa;
  hu = 1;
  var e = Wv();
  return Aa = Function.prototype.bind || e, Aa;
}
var Ca, mu;
function Os() {
  return mu || (mu = 1, Ca = Function.prototype.call), Ca;
}
var Pa, yu;
function rd() {
  return yu || (yu = 1, Pa = Function.prototype.apply), Pa;
}
var ka, gu;
function Kv() {
  return gu || (gu = 1, ka = typeof Reflect < "u" && Reflect && Reflect.apply), ka;
}
var Da, vu;
function Gv() {
  if (vu) return Da;
  vu = 1;
  var e = bo(), t = rd(), n = Os(), r = Kv();
  return Da = r || e.call(n, t), Da;
}
var Ta, bu;
function od() {
  if (bu) return Ta;
  bu = 1;
  var e = bo(), t = /* @__PURE__ */ Mn(), n = Os(), r = Gv();
  return Ta = function(a) {
    if (a.length < 1 || typeof a[0] != "function")
      throw new t("a function is required");
    return r(e, n, a);
  }, Ta;
}
var $a, wu;
function Yv() {
  if (wu) return $a;
  wu = 1;
  var e = od(), t = /* @__PURE__ */ ed(), n;
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
  return $a = r && typeof r.get == "function" ? e([r.get]) : typeof a == "function" ? (
    /** @type {import('./get')} */
    function(s) {
      return a(s == null ? s : o(s));
    }
  ) : !1, $a;
}
var Fa, xu;
function Xv() {
  if (xu) return Fa;
  xu = 1;
  var e = td(), t = nd(), n = /* @__PURE__ */ Yv();
  return Fa = e ? function(o) {
    return e(o);
  } : t ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return t(o);
  } : n ? function(o) {
    return n(o);
  } : null, Fa;
}
var Ia, Su;
function Jv() {
  if (Su) return Ia;
  Su = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, n = bo();
  return Ia = n.call(e, t), Ia;
}
var Ra, Ou;
function Es() {
  if (Ou) return Ra;
  Ou = 1;
  var e, t = /* @__PURE__ */ Zf(), n = /* @__PURE__ */ kv(), r = /* @__PURE__ */ Dv(), o = /* @__PURE__ */ Tv(), a = /* @__PURE__ */ $v(), i = /* @__PURE__ */ Fv(), s = /* @__PURE__ */ Mn(), c = /* @__PURE__ */ Iv(), l = /* @__PURE__ */ Rv(), u = /* @__PURE__ */ Lv(), f = /* @__PURE__ */ _v(), p = /* @__PURE__ */ Nv(), h = /* @__PURE__ */ Mv(), d = /* @__PURE__ */ Bv(), w = /* @__PURE__ */ qv(), g = Function, y = function(Se) {
    try {
      return g('"use strict"; return (' + Se + ").constructor;")();
    } catch {
    }
  }, v = /* @__PURE__ */ ed(), b = /* @__PURE__ */ zv(), A = function() {
    throw new s();
  }, P = v ? function() {
    try {
      return arguments.callee, A;
    } catch {
      try {
        return v(arguments, "callee").get;
      } catch {
        return A;
      }
    }
  }() : A, $ = Hv()(), F = Xv(), B = nd(), D = td(), k = rd(), N = Os(), m = {}, O = typeof Uint8Array > "u" || !F ? e : F(Uint8Array), E = {
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
    "%Function.prototype.call%": N,
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
    "%Reflect.getPrototypeOf%": D
  };
  if (F)
    try {
      null.error;
    } catch (Se) {
      var x = F(F(Se));
      E["%Error.prototype%"] = x;
    }
  var W = function Se(ae) {
    var ge;
    if (ae === "%AsyncFunction%")
      ge = y("async function () {}");
    else if (ae === "%GeneratorFunction%")
      ge = y("function* () {}");
    else if (ae === "%AsyncGeneratorFunction%")
      ge = y("async function* () {}");
    else if (ae === "%AsyncGenerator%") {
      var ce = Se("%AsyncGeneratorFunction%");
      ce && (ge = ce.prototype);
    } else if (ae === "%AsyncIteratorPrototype%") {
      var be = Se("%AsyncGenerator%");
      be && F && (ge = F(be.prototype));
    }
    return E[ae] = ge, ge;
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
  }, R = bo(), K = /* @__PURE__ */ Jv(), oe = R.call(N, Array.prototype.concat), Pe = R.call(k, Array.prototype.splice), Ge = R.call(N, String.prototype.replace), Ae = R.call(N, String.prototype.slice), _e = R.call(N, RegExp.prototype.exec), De = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Ne = /\\(\\)?/g, mt = function(ae) {
    var ge = Ae(ae, 0, 1), ce = Ae(ae, -1);
    if (ge === "%" && ce !== "%")
      throw new i("invalid intrinsic syntax, expected closing `%`");
    if (ce === "%" && ge !== "%")
      throw new i("invalid intrinsic syntax, expected opening `%`");
    var be = [];
    return Ge(ae, De, function(Te, nt, $e, qe) {
      be[be.length] = $e ? Ge(qe, Ne, "$1") : nt || Te;
    }), be;
  }, yt = function(ae, ge) {
    var ce = ae, be;
    if (K(M, ce) && (be = M[ce], ce = "%" + be[0] + "%"), K(E, ce)) {
      var Te = E[ce];
      if (Te === m && (Te = W(ce)), typeof Te > "u" && !ge)
        throw new s("intrinsic " + ae + " exists, but is not available. Please file an issue!");
      return {
        alias: be,
        name: ce,
        value: Te
      };
    }
    throw new i("intrinsic " + ae + " does not exist!");
  };
  return Ra = function(ae, ge) {
    if (typeof ae != "string" || ae.length === 0)
      throw new s("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof ge != "boolean")
      throw new s('"allowMissing" argument must be a boolean');
    if (_e(/^%?[^%]*%?$/, ae) === null)
      throw new i("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var ce = mt(ae), be = ce.length > 0 ? ce[0] : "", Te = yt("%" + be + "%", ge), nt = Te.name, $e = Te.value, qe = !1, rt = Te.alias;
    rt && (be = rt[0], Pe(ce, oe([0, 1], rt)));
    for (var gn = 1, Bt = !0; gn < ce.length; gn += 1) {
      var at = ce[gn], vn = Ae(at, 0, 1), bn = Ae(at, -1);
      if ((vn === '"' || vn === "'" || vn === "`" || bn === '"' || bn === "'" || bn === "`") && vn !== bn)
        throw new i("property names with quotes must have matching quotes");
      if ((at === "constructor" || !Bt) && (qe = !0), be += "." + at, nt = "%" + be + "%", K(E, nt))
        $e = E[nt];
      else if ($e != null) {
        if (!(at in $e)) {
          if (!ge)
            throw new s("base intrinsic for " + ae + " exists, but the property is not available.");
          return;
        }
        if (v && gn + 1 >= ce.length) {
          var wn = v($e, at);
          Bt = !!wn, Bt && "get" in wn && !("originalValue" in wn.get) ? $e = wn.get : $e = $e[at];
        } else
          Bt = K($e, at), $e = $e[at];
        Bt && !qe && (E[nt] = $e);
      }
    }
    return $e;
  }, Ra;
}
var La, Eu;
function ad() {
  if (Eu) return La;
  Eu = 1;
  var e = /* @__PURE__ */ Es(), t = od(), n = t([e("%String.prototype.indexOf%")]);
  return La = function(o, a) {
    var i = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(o, !!a)
    );
    return typeof i == "function" && n(o, ".prototype.") > -1 ? t(
      /** @type {const} */
      [i]
    ) : i;
  }, La;
}
var _a, Au;
function id() {
  if (Au) return _a;
  Au = 1;
  var e = /* @__PURE__ */ Es(), t = /* @__PURE__ */ ad(), n = /* @__PURE__ */ vo(), r = /* @__PURE__ */ Mn(), o = e("%Map%", !0), a = t("Map.prototype.get", !0), i = t("Map.prototype.set", !0), s = t("Map.prototype.has", !0), c = t("Map.prototype.delete", !0), l = t("Map.prototype.size", !0);
  return _a = !!o && /** @type {Exclude<import('.'), false>} */
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
  }, _a;
}
var Na, Cu;
function Qv() {
  if (Cu) return Na;
  Cu = 1;
  var e = /* @__PURE__ */ Es(), t = /* @__PURE__ */ ad(), n = /* @__PURE__ */ vo(), r = id(), o = /* @__PURE__ */ Mn(), a = e("%WeakMap%", !0), i = t("WeakMap.prototype.get", !0), s = t("WeakMap.prototype.set", !0), c = t("WeakMap.prototype.has", !0), l = t("WeakMap.prototype.delete", !0);
  return Na = a ? (
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
  ) : r, Na;
}
var Ma, Pu;
function Zv() {
  if (Pu) return Ma;
  Pu = 1;
  var e = /* @__PURE__ */ Mn(), t = /* @__PURE__ */ vo(), n = Pv(), r = id(), o = Qv(), a = o || r || n;
  return Ma = function() {
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
  }, Ma;
}
var Ba, ku;
function As() {
  if (ku) return Ba;
  ku = 1;
  var e = String.prototype.replace, t = /%20/g, n = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return Ba = {
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
  }, Ba;
}
var ja, Du;
function sd() {
  if (Du) return ja;
  Du = 1;
  var e = /* @__PURE__ */ As(), t = Object.prototype.hasOwnProperty, n = Array.isArray, r = function() {
    for (var g = [], y = 0; y < 256; ++y)
      g.push("%" + ((y < 16 ? "0" : "") + y.toString(16)).toUpperCase());
    return g;
  }(), o = function(y) {
    for (; y.length > 1; ) {
      var v = y.pop(), b = v.obj[v.prop];
      if (n(b)) {
        for (var A = [], P = 0; P < b.length; ++P)
          typeof b[P] < "u" && A.push(b[P]);
        v.obj[v.prop] = A;
      }
    }
  }, a = function(y, v) {
    for (var b = v && v.plainObjects ? { __proto__: null } : {}, A = 0; A < y.length; ++A)
      typeof y[A] < "u" && (b[A] = y[A]);
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
    var A = y;
    return n(y) && !n(v) && (A = a(y, b)), n(y) && n(v) ? (v.forEach(function(P, $) {
      if (t.call(y, $)) {
        var F = y[$];
        F && typeof F == "object" && P && typeof P == "object" ? y[$] = g(F, P, b) : y.push(P);
      } else
        y[$] = P;
    }), y) : Object.keys(v).reduce(function(P, $) {
      var F = v[$];
      return t.call(P, $) ? P[$] = g(P[$], F, b) : P[$] = F, P;
    }, A);
  }, s = function(y, v) {
    return Object.keys(v).reduce(function(b, A) {
      return b[A] = v[A], b;
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
  }, l = 1024, u = function(y, v, b, A, P) {
    if (y.length === 0)
      return y;
    var $ = y;
    if (typeof y == "symbol" ? $ = Symbol.prototype.toString.call(y) : typeof y != "string" && ($ = String(y)), b === "iso-8859-1")
      return escape($).replace(/%u[0-9a-f]{4}/gi, function(O) {
        return "%26%23" + parseInt(O.slice(2), 16) + "%3B";
      });
    for (var F = "", B = 0; B < $.length; B += l) {
      for (var D = $.length >= l ? $.slice(B, B + l) : $, k = [], N = 0; N < D.length; ++N) {
        var m = D.charCodeAt(N);
        if (m === 45 || m === 46 || m === 95 || m === 126 || m >= 48 && m <= 57 || m >= 65 && m <= 90 || m >= 97 && m <= 122 || P === e.RFC1738 && (m === 40 || m === 41)) {
          k[k.length] = D.charAt(N);
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
        N += 1, m = 65536 + ((m & 1023) << 10 | D.charCodeAt(N) & 1023), k[k.length] = r[240 | m >> 18] + r[128 | m >> 12 & 63] + r[128 | m >> 6 & 63] + r[128 | m & 63];
      }
      F += k.join("");
    }
    return F;
  }, f = function(y) {
    for (var v = [{ obj: { o: y }, prop: "o" }], b = [], A = 0; A < v.length; ++A)
      for (var P = v[A], $ = P.obj[P.prop], F = Object.keys($), B = 0; B < F.length; ++B) {
        var D = F[B], k = $[D];
        typeof k == "object" && k !== null && b.indexOf(k) === -1 && (v.push({ obj: $, prop: D }), b.push(k));
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
      for (var b = [], A = 0; A < y.length; A += 1)
        b.push(v(y[A]));
      return b;
    }
    return v(y);
  };
  return ja = {
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
  }, ja;
}
var qa, Tu;
function e0() {
  if (Tu) return qa;
  Tu = 1;
  var e = Zv(), t = /* @__PURE__ */ sd(), n = /* @__PURE__ */ As(), r = Object.prototype.hasOwnProperty, o = {
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
  }, p = {}, h = function w(g, y, v, b, A, P, $, F, B, D, k, N, m, O, E, x, W, M) {
    for (var R = g, K = M, oe = 0, Pe = !1; (K = K.get(p)) !== void 0 && !Pe; ) {
      var Ge = K.get(g);
      if (oe += 1, typeof Ge < "u") {
        if (Ge === oe)
          throw new RangeError("Cyclic object value");
        Pe = !0;
      }
      typeof K.get(p) > "u" && (oe = 0);
    }
    if (typeof D == "function" ? R = D(y, R) : R instanceof Date ? R = m(R) : v === "comma" && a(R) && (R = t.maybeMap(R, function(nt) {
      return nt instanceof Date ? m(nt) : nt;
    })), R === null) {
      if (P)
        return B && !x ? B(y, u.encoder, W, "key", O) : y;
      R = "";
    }
    if (f(R) || t.isBuffer(R)) {
      if (B) {
        var Ae = x ? y : B(y, u.encoder, W, "key", O);
        return [E(Ae) + "=" + E(B(R, u.encoder, W, "value", O))];
      }
      return [E(y) + "=" + E(String(R))];
    }
    var _e = [];
    if (typeof R > "u")
      return _e;
    var De;
    if (v === "comma" && a(R))
      x && B && (R = t.maybeMap(R, B)), De = [{ value: R.length > 0 ? R.join(",") || null : void 0 }];
    else if (a(D))
      De = D;
    else {
      var Ne = Object.keys(R);
      De = k ? Ne.sort(k) : Ne;
    }
    var mt = F ? String(y).replace(/\./g, "%2E") : String(y), yt = b && a(R) && R.length === 1 ? mt + "[]" : mt;
    if (A && a(R) && R.length === 0)
      return yt + "[]";
    for (var Se = 0; Se < De.length; ++Se) {
      var ae = De[Se], ge = typeof ae == "object" && ae && typeof ae.value < "u" ? ae.value : R[ae];
      if (!($ && ge === null)) {
        var ce = N && F ? String(ae).replace(/\./g, "%2E") : String(ae), be = a(R) ? typeof v == "function" ? v(yt, ce) : yt : yt + (N ? "." + ce : "[" + ce + "]");
        M.set(g, oe);
        var Te = e();
        Te.set(p, M), s(_e, w(
          ge,
          be,
          v,
          b,
          A,
          P,
          $,
          F,
          v === "comma" && x && a(R) ? null : B,
          D,
          k,
          N,
          m,
          O,
          E,
          x,
          W,
          Te
        ));
      }
    }
    return _e;
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
    var b = n.formatters[v], A = u.filter;
    (typeof g.filter == "function" || a(g.filter)) && (A = g.filter);
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
      filter: A,
      format: v,
      formatter: b,
      serializeDate: typeof g.serializeDate == "function" ? g.serializeDate : u.serializeDate,
      skipNulls: typeof g.skipNulls == "boolean" ? g.skipNulls : u.skipNulls,
      sort: typeof g.sort == "function" ? g.sort : null,
      strictNullHandling: typeof g.strictNullHandling == "boolean" ? g.strictNullHandling : u.strictNullHandling
    };
  };
  return qa = function(w, g) {
    var y = w, v = d(g), b, A;
    typeof v.filter == "function" ? (A = v.filter, y = A("", y)) : a(v.filter) && (A = v.filter, b = A);
    var P = [];
    if (typeof y != "object" || y === null)
      return "";
    var $ = o[v.arrayFormat], F = $ === "comma" && v.commaRoundTrip;
    b || (b = Object.keys(y)), v.sort && b.sort(v.sort);
    for (var B = e(), D = 0; D < b.length; ++D) {
      var k = b[D], N = y[k];
      v.skipNulls && N === null || s(P, h(
        N,
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
    var m = P.join(v.delimiter), O = v.addQueryPrefix === !0 ? "?" : "";
    return v.charsetSentinel && (v.charset === "iso-8859-1" ? O += "utf8=%26%2310003%3B&" : O += "utf8=%E2%9C%93&"), m.length > 0 ? O + m : "";
  }, qa;
}
var Ua, $u;
function t0() {
  if ($u) return Ua;
  $u = 1;
  var e = /* @__PURE__ */ sd(), t = Object.prototype.hasOwnProperty, n = Array.isArray, r = {
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
    var b = -1, A, P = d.charset;
    if (d.charsetSentinel)
      for (A = 0; A < v.length; ++A)
        v[A].indexOf("utf8=") === 0 && (v[A] === s ? P = "utf-8" : v[A] === i && (P = "iso-8859-1"), b = A, A = v.length);
    for (A = 0; A < v.length; ++A)
      if (A !== b) {
        var $ = v[A], F = $.indexOf("]="), B = F === -1 ? $.indexOf("=") : F + 1, D, k;
        B === -1 ? (D = d.decoder($, r.decoder, P, "key"), k = d.strictNullHandling ? null : "") : (D = d.decoder($.slice(0, B), r.decoder, P, "key"), k = e.maybeMap(
          a(
            $.slice(B + 1),
            d,
            n(w[D]) ? w[D].length : 0
          ),
          function(m) {
            return d.decoder(m, r.decoder, P, "value");
          }
        )), k && d.interpretNumericEntities && P === "iso-8859-1" && (k = o(String(k))), $.indexOf("[]=") > -1 && (k = n(k) ? [k] : k);
        var N = t.call(w, D);
        N && d.duplicates === "combine" ? w[D] = e.combine(w[D], k) : (!N || d.duplicates === "last") && (w[D] = k);
      }
    return w;
  }, l = function(p, h, d, w) {
    var g = 0;
    if (p.length > 0 && p[p.length - 1] === "[]") {
      var y = p.slice(0, -1).join("");
      g = Array.isArray(h) && h[y] ? h[y].length : 0;
    }
    for (var v = w ? h : a(h, d, g), b = p.length - 1; b >= 0; --b) {
      var A, P = p[b];
      if (P === "[]" && d.parseArrays)
        A = d.allowEmptyArrays && (v === "" || d.strictNullHandling && v === null) ? [] : e.combine([], v);
      else {
        A = d.plainObjects ? { __proto__: null } : {};
        var $ = P.charAt(0) === "[" && P.charAt(P.length - 1) === "]" ? P.slice(1, -1) : P, F = d.decodeDotInKeys ? $.replace(/%2E/g, ".") : $, B = parseInt(F, 10);
        !d.parseArrays && F === "" ? A = { 0: v } : !isNaN(B) && P !== F && String(B) === F && B >= 0 && d.parseArrays && B <= d.arrayLimit ? (A = [], A[B] = v) : F !== "__proto__" && (A[F] = v);
      }
      v = A;
    }
    return v;
  }, u = function(h, d, w, g) {
    if (h) {
      var y = w.allowDots ? h.replace(/\.([^.[]+)/g, "[$1]") : h, v = /(\[[^[\]]*])/, b = /(\[[^[\]]*])/g, A = w.depth > 0 && v.exec(y), P = A ? y.slice(0, A.index) : y, $ = [];
      if (P) {
        if (!w.plainObjects && t.call(Object.prototype, P) && !w.allowPrototypes)
          return;
        $.push(P);
      }
      for (var F = 0; w.depth > 0 && (A = b.exec(y)) !== null && F < w.depth; ) {
        if (F += 1, !w.plainObjects && t.call(Object.prototype, A[1].slice(1, -1)) && !w.allowPrototypes)
          return;
        $.push(A[1]);
      }
      if (A) {
        if (w.strictDepth === !0)
          throw new RangeError("Input depth exceeded depth option of " + w.depth + " and strictDepth is true");
        $.push("[" + y.slice(A.index) + "]");
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
  return Ua = function(p, h) {
    var d = f(h);
    if (p === "" || p === null || typeof p > "u")
      return d.plainObjects ? { __proto__: null } : {};
    for (var w = typeof p == "string" ? c(p, d) : p, g = d.plainObjects ? { __proto__: null } : {}, y = Object.keys(w), v = 0; v < y.length; ++v) {
      var b = y[v], A = u(b, w[b], d, typeof p == "string");
      g = e.merge(g, A, d);
    }
    return d.allowSparse === !0 ? g : e.compact(g);
  }, Ua;
}
var za, Fu;
function n0() {
  if (Fu) return za;
  Fu = 1;
  var e = /* @__PURE__ */ e0(), t = /* @__PURE__ */ t0(), n = /* @__PURE__ */ As();
  return za = {
    formats: n,
    parse: t,
    stringify: e
  }, za;
}
var Iu = /* @__PURE__ */ n0();
function ld(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: r0 } = Object.prototype, { getPrototypeOf: Cs } = Object, { iterator: wo, toStringTag: ud } = Symbol, xo = /* @__PURE__ */ ((e) => (t) => {
  const n = r0.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), pt = (e) => (e = e.toLowerCase(), (t) => xo(t) === e), So = (e) => (t) => typeof t === e, { isArray: Bn } = Array, ur = So("undefined");
function o0(e) {
  return e !== null && !ur(e) && e.constructor !== null && !ur(e.constructor) && He(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const cd = pt("ArrayBuffer");
function a0(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && cd(e.buffer), t;
}
const i0 = So("string"), He = So("function"), fd = So("number"), Oo = (e) => e !== null && typeof e == "object", s0 = (e) => e === !0 || e === !1, Ur = (e) => {
  if (xo(e) !== "object")
    return !1;
  const t = Cs(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(ud in e) && !(wo in e);
}, l0 = pt("Date"), u0 = pt("File"), c0 = pt("Blob"), f0 = pt("FileList"), d0 = (e) => Oo(e) && He(e.pipe), p0 = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || He(e.append) && ((t = xo(e)) === "formdata" || // detect form-data instance
  t === "object" && He(e.toString) && e.toString() === "[object FormData]"));
}, h0 = pt("URLSearchParams"), [m0, y0, g0, v0] = ["ReadableStream", "Request", "Response", "Headers"].map(pt), b0 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function vr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), Bn(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = a.length;
    let s;
    for (r = 0; r < i; r++)
      s = a[r], t.call(null, e[s], s, e);
  }
}
function dd(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const sn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, pd = (e) => !ur(e) && e !== sn;
function _i() {
  const { caseless: e } = pd(this) && this || {}, t = {}, n = (r, o) => {
    const a = e && dd(t, o) || o;
    Ur(t[a]) && Ur(r) ? t[a] = _i(t[a], r) : Ur(r) ? t[a] = _i({}, r) : Bn(r) ? t[a] = r.slice() : t[a] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && vr(arguments[r], n);
  return t;
}
const w0 = (e, t, n, { allOwnKeys: r } = {}) => (vr(t, (o, a) => {
  n && He(o) ? e[a] = ld(o, n) : e[a] = o;
}, { allOwnKeys: r }), e), x0 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), S0 = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, O0 = (e, t, n, r) => {
  let o, a, i;
  const s = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      i = o[a], (!r || r(i, e, t)) && !s[i] && (t[i] = e[i], s[i] = !0);
    e = n !== !1 && Cs(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, E0 = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, A0 = (e) => {
  if (!e) return null;
  if (Bn(e)) return e;
  let t = e.length;
  if (!fd(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, C0 = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Cs(Uint8Array)), P0 = (e, t) => {
  const r = (e && e[wo]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, k0 = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, D0 = pt("HTMLFormElement"), T0 = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), Ru = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), $0 = pt("RegExp"), hd = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  vr(n, (o, a) => {
    let i;
    (i = t(o, a, e)) !== !1 && (r[a] = i || o);
  }), Object.defineProperties(e, r);
}, F0 = (e) => {
  hd(e, (t, n) => {
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
}, I0 = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((a) => {
      n[a] = !0;
    });
  };
  return Bn(e) ? r(e) : r(String(e).split(t)), n;
}, R0 = () => {
}, L0 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function _0(e) {
  return !!(e && He(e.append) && e[ud] === "FormData" && e[wo]);
}
const N0 = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (Oo(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const a = Bn(r) ? [] : {};
        return vr(r, (i, s) => {
          const c = n(i, o + 1);
          !ur(c) && (a[s] = c);
        }), t[o] = void 0, a;
      }
    }
    return r;
  };
  return n(e, 0);
}, M0 = pt("AsyncFunction"), B0 = (e) => e && (Oo(e) || He(e)) && He(e.then) && He(e.catch), md = ((e, t) => e ? setImmediate : t ? ((n, r) => (sn.addEventListener("message", ({ source: o, data: a }) => {
  o === sn && a === n && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), sn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  He(sn.postMessage)
), j0 = typeof queueMicrotask < "u" ? queueMicrotask.bind(sn) : typeof process < "u" && process.nextTick || md, q0 = (e) => e != null && He(e[wo]), _ = {
  isArray: Bn,
  isArrayBuffer: cd,
  isBuffer: o0,
  isFormData: p0,
  isArrayBufferView: a0,
  isString: i0,
  isNumber: fd,
  isBoolean: s0,
  isObject: Oo,
  isPlainObject: Ur,
  isReadableStream: m0,
  isRequest: y0,
  isResponse: g0,
  isHeaders: v0,
  isUndefined: ur,
  isDate: l0,
  isFile: u0,
  isBlob: c0,
  isRegExp: $0,
  isFunction: He,
  isStream: d0,
  isURLSearchParams: h0,
  isTypedArray: C0,
  isFileList: f0,
  forEach: vr,
  merge: _i,
  extend: w0,
  trim: b0,
  stripBOM: x0,
  inherits: S0,
  toFlatObject: O0,
  kindOf: xo,
  kindOfTest: pt,
  endsWith: E0,
  toArray: A0,
  forEachEntry: P0,
  matchAll: k0,
  isHTMLForm: D0,
  hasOwnProperty: Ru,
  hasOwnProp: Ru,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: hd,
  freezeMethods: F0,
  toObjectSet: I0,
  toCamelCase: T0,
  noop: R0,
  toFiniteNumber: L0,
  findKey: dd,
  global: sn,
  isContextDefined: pd,
  isSpecCompliantForm: _0,
  toJSONObject: N0,
  isAsyncFn: M0,
  isThenable: B0,
  setImmediate: md,
  asap: j0,
  isIterable: q0
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
const yd = ne.prototype, gd = {};
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
  gd[e] = { value: e };
});
Object.defineProperties(ne, gd);
Object.defineProperty(yd, "isAxiosError", { value: !0 });
ne.from = (e, t, n, r, o, a) => {
  const i = Object.create(yd);
  return _.toFlatObject(e, i, function(c) {
    return c !== Error.prototype;
  }, (s) => s !== "isAxiosError"), ne.call(i, e.message, t, n, r, o), i.cause = e, i.name = e.name, a && Object.assign(i, a), i;
};
const U0 = null;
function Ni(e) {
  return _.isPlainObject(e) || _.isArray(e);
}
function vd(e) {
  return _.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Lu(e, t, n) {
  return e ? e.concat(t).map(function(o, a) {
    return o = vd(o), !n && a ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function z0(e) {
  return _.isArray(e) && !e.some(Ni);
}
const V0 = _.toFlatObject(_, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Eo(e, t, n) {
  if (!_.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = _.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(w, g) {
    return !_.isUndefined(g[w]);
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
  function u(d, w, g) {
    let y = d;
    if (d && !g && typeof d == "object") {
      if (_.endsWith(w, "{}"))
        w = r ? w : w.slice(0, -2), d = JSON.stringify(d);
      else if (_.isArray(d) && z0(d) || (_.isFileList(d) || _.endsWith(w, "[]")) && (y = _.toArray(d)))
        return w = vd(w), y.forEach(function(b, A) {
          !(_.isUndefined(b) || b === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Lu([w], A, a) : i === null ? w : w + "[]",
            l(b)
          );
        }), !1;
    }
    return Ni(d) ? !0 : (t.append(Lu(g, w, a), l(d)), !1);
  }
  const f = [], p = Object.assign(V0, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: Ni
  });
  function h(d, w) {
    if (!_.isUndefined(d)) {
      if (f.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      f.push(d), _.forEach(d, function(y, v) {
        (!(_.isUndefined(y) || y === null) && o.call(
          t,
          y,
          _.isString(v) ? v.trim() : v,
          w,
          p
        )) === !0 && h(y, w ? w.concat(v) : [v]);
      }), f.pop();
    }
  }
  if (!_.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function _u(e) {
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
function Ps(e, t) {
  this._pairs = [], e && Eo(e, this, t);
}
const bd = Ps.prototype;
bd.append = function(t, n) {
  this._pairs.push([t, n]);
};
bd.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, _u);
  } : _u;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function H0(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function wd(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || H0;
  _.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let a;
  if (o ? a = o(t, n) : a = _.isURLSearchParams(t) ? t.toString() : new Ps(t, n).toString(r), a) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class Nu {
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
const xd = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, W0 = typeof URLSearchParams < "u" ? URLSearchParams : Ps, K0 = typeof FormData < "u" ? FormData : null, G0 = typeof Blob < "u" ? Blob : null, Y0 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: W0,
    FormData: K0,
    Blob: G0
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ks = typeof window < "u" && typeof document < "u", Mi = typeof navigator == "object" && navigator || void 0, X0 = ks && (!Mi || ["ReactNative", "NativeScript", "NS"].indexOf(Mi.product) < 0), J0 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Q0 = ks && window.location.href || "http://localhost", Z0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ks,
  hasStandardBrowserEnv: X0,
  hasStandardBrowserWebWorkerEnv: J0,
  navigator: Mi,
  origin: Q0
}, Symbol.toStringTag, { value: "Module" })), Ie = {
  ...Z0,
  ...Y0
};
function eb(e, t) {
  return Eo(e, new Ie.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, a) {
      return Ie.isNode && _.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function tb(e) {
  return _.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function nb(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let a;
  for (r = 0; r < o; r++)
    a = n[r], t[a] = e[a];
  return t;
}
function Sd(e) {
  function t(n, r, o, a) {
    let i = n[a++];
    if (i === "__proto__") return !0;
    const s = Number.isFinite(+i), c = a >= n.length;
    return i = !i && _.isArray(o) ? o.length : i, c ? (_.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r, !s) : ((!o[i] || !_.isObject(o[i])) && (o[i] = []), t(n, r, o[i], a) && _.isArray(o[i]) && (o[i] = nb(o[i])), !s);
  }
  if (_.isFormData(e) && _.isFunction(e.entries)) {
    const n = {};
    return _.forEachEntry(e, (r, o) => {
      t(tb(r), o, n, 0);
    }), n;
  }
  return null;
}
function rb(e, t, n) {
  if (_.isString(e))
    try {
      return (t || JSON.parse)(e), _.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const br = {
  transitional: xd,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, a = _.isObject(t);
    if (a && _.isHTMLForm(t) && (t = new FormData(t)), _.isFormData(t))
      return o ? JSON.stringify(Sd(t)) : t;
    if (_.isArrayBuffer(t) || _.isBuffer(t) || _.isStream(t) || _.isFile(t) || _.isBlob(t) || _.isReadableStream(t))
      return t;
    if (_.isArrayBufferView(t))
      return t.buffer;
    if (_.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (a) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return eb(t, this.formSerializer).toString();
      if ((s = _.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Eo(
          s ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return a || o ? (n.setContentType("application/json", !1), rb(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || br.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
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
    FormData: Ie.classes.FormData,
    Blob: Ie.classes.Blob
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
  br.headers[e] = {};
});
const ob = _.toObjectSet([
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
]), ab = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || t[n] && ob[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Mu = Symbol("internals");
function Kn(e) {
  return e && String(e).trim().toLowerCase();
}
function zr(e) {
  return e === !1 || e == null ? e : _.isArray(e) ? e.map(zr) : String(e);
}
function ib(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const sb = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Va(e, t, n, r, o) {
  if (_.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!_.isString(t)) {
    if (_.isString(r))
      return t.indexOf(r) !== -1;
    if (_.isRegExp(r))
      return r.test(t);
  }
}
function lb(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function ub(e, t) {
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
      const u = Kn(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = _.findKey(o, u);
      (!f || o[f] === void 0 || l === !0 || l === void 0 && o[f] !== !1) && (o[f || c] = zr(s));
    }
    const i = (s, c) => _.forEach(s, (l, u) => a(l, u, c));
    if (_.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (_.isString(t) && (t = t.trim()) && !sb(t))
      i(ab(t), n);
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
    if (t = Kn(t), t) {
      const r = _.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return ib(o);
        if (_.isFunction(n))
          return n.call(this, o, r);
        if (_.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Kn(t), t) {
      const r = _.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Va(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function a(i) {
      if (i = Kn(i), i) {
        const s = _.findKey(r, i);
        s && (!n || Va(r, r[s], s, n)) && (delete r[s], o = !0);
      }
    }
    return _.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || Va(this, this[a], a, t, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return _.forEach(this, (o, a) => {
      const i = _.findKey(r, a);
      if (i) {
        n[i] = zr(o), delete n[a];
        return;
      }
      const s = t ? lb(a) : String(a).trim();
      s !== a && delete n[a], n[s] = zr(o), r[s] = !0;
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
    const r = (this[Mu] = this[Mu] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(i) {
      const s = Kn(i);
      r[s] || (ub(o, i), r[s] = !0);
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
function Ha(e, t) {
  const n = this || br, r = t || n, o = We.from(r.headers);
  let a = r.data;
  return _.forEach(e, function(s) {
    a = s.call(n, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function Od(e) {
  return !!(e && e.__CANCEL__);
}
function jn(e, t, n) {
  ne.call(this, e ?? "canceled", ne.ERR_CANCELED, t, n), this.name = "CanceledError";
}
_.inherits(jn, ne, {
  __CANCEL__: !0
});
function Ed(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new ne(
    "Request failed with status code " + n.status,
    [ne.ERR_BAD_REQUEST, ne.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function cb(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function fb(e, t) {
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
function db(e, t) {
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
const to = (e, t, n = 3) => {
  let r = 0;
  const o = fb(50, 250);
  return db((a) => {
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
}, Bu = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, ju = (e) => (...t) => _.asap(() => e(...t)), pb = Ie.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, Ie.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(Ie.origin),
  Ie.navigator && /(msie|trident)/i.test(Ie.navigator.userAgent)
) : () => !0, hb = Ie.hasStandardBrowserEnv ? (
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
function mb(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function yb(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ad(e, t, n) {
  let r = !mb(t);
  return e && (r || n == !1) ? yb(e, t) : t;
}
const qu = (e) => e instanceof We ? { ...e } : e;
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
    headers: (l, u, f) => o(qu(l), qu(u), f, !0)
  };
  return _.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const f = c[u] || o, p = f(e[u], t[u], u);
    _.isUndefined(p) && f !== s || (n[u] = p);
  }), n;
}
const Cd = (e) => {
  const t = pn({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: a, headers: i, auth: s } = t;
  t.headers = i = We.from(i), t.url = wd(Ad(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), s && i.set(
    "Authorization",
    "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))
  );
  let c;
  if (_.isFormData(n)) {
    if (Ie.hasStandardBrowserEnv || Ie.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((c = i.getContentType()) !== !1) {
      const [l, ...u] = c ? c.split(";").map((f) => f.trim()).filter(Boolean) : [];
      i.setContentType([l || "multipart/form-data", ...u].join("; "));
    }
  }
  if (Ie.hasStandardBrowserEnv && (r && _.isFunction(r) && (r = r(t)), r || r !== !1 && pb(t.url))) {
    const l = o && a && hb.read(a);
    l && i.set(o, l);
  }
  return t;
}, gb = typeof XMLHttpRequest < "u", vb = gb && function(e) {
  return new Promise(function(n, r) {
    const o = Cd(e);
    let a = o.data;
    const i = We.from(o.headers).normalize();
    let { responseType: s, onUploadProgress: c, onDownloadProgress: l } = o, u, f, p, h, d;
    function w() {
      h && h(), d && d(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let g = new XMLHttpRequest();
    g.open(o.method.toUpperCase(), o.url, !0), g.timeout = o.timeout;
    function y() {
      if (!g)
        return;
      const b = We.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), P = {
        data: !s || s === "text" || s === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: b,
        config: e,
        request: g
      };
      Ed(function(F) {
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
      let A = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const P = o.transitional || xd;
      o.timeoutErrorMessage && (A = o.timeoutErrorMessage), r(new ne(
        A,
        P.clarifyTimeoutError ? ne.ETIMEDOUT : ne.ECONNABORTED,
        e,
        g
      )), g = null;
    }, a === void 0 && i.setContentType(null), "setRequestHeader" in g && _.forEach(i.toJSON(), function(A, P) {
      g.setRequestHeader(P, A);
    }), _.isUndefined(o.withCredentials) || (g.withCredentials = !!o.withCredentials), s && s !== "json" && (g.responseType = o.responseType), l && ([p, d] = to(l, !0), g.addEventListener("progress", p)), c && g.upload && ([f, h] = to(c), g.upload.addEventListener("progress", f), g.upload.addEventListener("loadend", h)), (o.cancelToken || o.signal) && (u = (b) => {
      g && (r(!b || b.type ? new jn(null, e, g) : b), g.abort(), g = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const v = cb(o.url);
    if (v && Ie.protocols.indexOf(v) === -1) {
      r(new ne("Unsupported protocol " + v + ":", ne.ERR_BAD_REQUEST, e));
      return;
    }
    g.send(a || null);
  });
}, bb = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const a = function(l) {
      if (!o) {
        o = !0, s();
        const u = l instanceof Error ? l : this.reason;
        r.abort(u instanceof ne ? u : new jn(u instanceof Error ? u.message : u));
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
}, wb = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, xb = async function* (e, t) {
  for await (const n of Sb(e))
    yield* wb(n, t);
}, Sb = async function* (e) {
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
}, Uu = (e, t, n, r) => {
  const o = xb(e, t);
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
}, Ao = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Pd = Ao && typeof ReadableStream == "function", Ob = Ao && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), kd = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Eb = Pd && kd(() => {
  let e = !1;
  const t = new Request(Ie.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), zu = 64 * 1024, Bi = Pd && kd(() => _.isReadableStream(new Response("").body)), no = {
  stream: Bi && ((e) => e.body)
};
Ao && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !no[t] && (no[t] = _.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new ne(`Response type '${t}' is not supported`, ne.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Ab = async (e) => {
  if (e == null)
    return 0;
  if (_.isBlob(e))
    return e.size;
  if (_.isSpecCompliantForm(e))
    return (await new Request(Ie.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (_.isArrayBufferView(e) || _.isArrayBuffer(e))
    return e.byteLength;
  if (_.isURLSearchParams(e) && (e = e + ""), _.isString(e))
    return (await Ob(e)).byteLength;
}, Cb = async (e, t) => {
  const n = _.toFiniteNumber(e.getContentLength());
  return n ?? Ab(t);
}, Pb = Ao && (async (e) => {
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
  } = Cd(e);
  l = l ? (l + "").toLowerCase() : "text";
  let h = bb([o, a && a.toAbortSignal()], i), d;
  const w = h && h.unsubscribe && (() => {
    h.unsubscribe();
  });
  let g;
  try {
    if (c && Eb && n !== "get" && n !== "head" && (g = await Cb(u, r)) !== 0) {
      let P = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), $;
      if (_.isFormData(r) && ($ = P.headers.get("content-type")) && u.setContentType($), P.body) {
        const [F, B] = Bu(
          g,
          to(ju(c))
        );
        r = Uu(P.body, zu, F, B);
      }
    }
    _.isString(f) || (f = f ? "include" : "omit");
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
    const b = Bi && (l === "stream" || l === "response");
    if (Bi && (s || b && w)) {
      const P = {};
      ["status", "statusText", "headers"].forEach((D) => {
        P[D] = v[D];
      });
      const $ = _.toFiniteNumber(v.headers.get("content-length")), [F, B] = s && Bu(
        $,
        to(ju(s), !0)
      ) || [];
      v = new Response(
        Uu(v.body, zu, F, () => {
          B && B(), w && w();
        }),
        P
      );
    }
    l = l || "text";
    let A = await no[_.findKey(no, l) || "text"](v, e);
    return !b && w && w(), await new Promise((P, $) => {
      Ed(P, $, {
        data: A,
        headers: We.from(v.headers),
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
}), ji = {
  http: U0,
  xhr: vb,
  fetch: Pb
};
_.forEach(ji, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Vu = (e) => `- ${e}`, kb = (e) => _.isFunction(e) || e === null || e === !1, Dd = {
  getAdapter: (e) => {
    e = _.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let a = 0; a < t; a++) {
      n = e[a];
      let i;
      if (r = n, !kb(n) && (r = ji[(i = String(n)).toLowerCase()], r === void 0))
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
` + a.map(Vu).join(`
`) : " " + Vu(a[0]) : "as no adapter specified";
      throw new ne(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: ji
};
function Wa(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new jn(null, e);
}
function Hu(e) {
  return Wa(e), e.headers = We.from(e.headers), e.data = Ha.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Dd.getAdapter(e.adapter || br.adapter)(e).then(function(r) {
    return Wa(e), r.data = Ha.call(
      e,
      e.transformResponse,
      r
    ), r.headers = We.from(r.headers), r;
  }, function(r) {
    return Od(r) || (Wa(e), r && r.response && (r.response.data = Ha.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = We.from(r.response.headers))), Promise.reject(r);
  });
}
const Td = "1.9.0", Co = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Co[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Wu = {};
Co.transitional = function(t, n, r) {
  function o(a, i) {
    return "[Axios v" + Td + "] Transitional option '" + a + "'" + i + (r ? ". " + r : "");
  }
  return (a, i, s) => {
    if (t === !1)
      throw new ne(
        o(i, " has been removed" + (n ? " in " + n : "")),
        ne.ERR_DEPRECATED
      );
    return n && !Wu[i] && (Wu[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(a, i, s) : !0;
  };
};
Co.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Db(e, t, n) {
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
const Vr = {
  assertOptions: Db,
  validators: Co
}, gt = Vr.validators;
let cn = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Nu(),
      response: new Nu()
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
    r !== void 0 && Vr.assertOptions(r, {
      silentJSONParsing: gt.transitional(gt.boolean),
      forcedJSONParsing: gt.transitional(gt.boolean),
      clarifyTimeoutError: gt.transitional(gt.boolean)
    }, !1), o != null && (_.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Vr.assertOptions(o, {
      encode: gt.function,
      serialize: gt.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Vr.assertOptions(n, {
      baseUrl: gt.spelling("baseURL"),
      withXsrfToken: gt.spelling("withXSRFToken")
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
    this.interceptors.request.forEach(function(w) {
      typeof w.runWhen == "function" && w.runWhen(n) === !1 || (c = c && w.synchronous, s.unshift(w.fulfilled, w.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(w) {
      l.push(w.fulfilled, w.rejected);
    });
    let u, f = 0, p;
    if (!c) {
      const d = [Hu.bind(this), void 0];
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
      u = Hu.call(this, h);
    } catch (d) {
      return Promise.reject(d);
    }
    for (f = 0, p = l.length; f < p; )
      u = u.then(l[f++], l[f++]);
    return u;
  }
  getUri(t) {
    t = pn(this.defaults, t);
    const n = Ad(t.baseURL, t.url, t.allowAbsoluteUrls);
    return wd(n, t.params, t.paramsSerializer);
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
let Tb = class $d {
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
      r.reason || (r.reason = new jn(a, i, s), n(r.reason));
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
      token: new $d(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function $b(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Fb(e) {
  return _.isObject(e) && e.isAxiosError === !0;
}
const qi = {
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
Object.entries(qi).forEach(([e, t]) => {
  qi[t] = e;
});
function Fd(e) {
  const t = new cn(e), n = ld(cn.prototype.request, t);
  return _.extend(n, cn.prototype, t, { allOwnKeys: !0 }), _.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Fd(pn(e, o));
  }, n;
}
const ve = Fd(br);
ve.Axios = cn;
ve.CanceledError = jn;
ve.CancelToken = Tb;
ve.isCancel = Od;
ve.VERSION = Td;
ve.toFormData = Eo;
ve.AxiosError = ne;
ve.Cancel = ve.CanceledError;
ve.all = function(t) {
  return Promise.all(t);
};
ve.spread = $b;
ve.isAxiosError = Fb;
ve.mergeConfig = pn;
ve.AxiosHeaders = We;
ve.formToJSON = (e) => Sd(_.isHTMLForm(e) ? new FormData(e) : e);
ve.getAdapter = Dd.getAdapter;
ve.HttpStatusCode = qi;
ve.default = ve;
const {
  Axios: GE,
  AxiosError: YE,
  CanceledError: XE,
  isCancel: JE,
  CancelToken: QE,
  VERSION: ZE,
  all: eA,
  Cancel: tA,
  isAxiosError: nA,
  spread: rA,
  toFormData: oA,
  AxiosHeaders: aA,
  HttpStatusCode: iA,
  formToJSON: sA,
  getAdapter: lA,
  mergeConfig: uA
} = ve;
function Ui(e, t) {
  let n;
  return function(...r) {
    clearTimeout(n), n = setTimeout(() => e.apply(this, r), t);
  };
}
function ht(e, t) {
  return document.dispatchEvent(new CustomEvent(`inertia:${e}`, t));
}
var Ku = (e) => ht("before", { cancelable: !0, detail: { visit: e } }), Ib = (e) => ht("error", { detail: { errors: e } }), Rb = (e) => ht("exception", { cancelable: !0, detail: { exception: e } }), Lb = (e) => ht("finish", { detail: { visit: e } }), _b = (e) => ht("invalid", { cancelable: !0, detail: { response: e } }), ir = (e) => ht("navigate", { detail: { page: e } }), Nb = (e) => ht("progress", { detail: { progress: e } }), Mb = (e) => ht("start", { detail: { visit: e } }), Bb = (e) => ht("success", { detail: { page: e } }), jb = (e, t) => ht("prefetched", { detail: { fetchedAt: Date.now(), response: e.data, visit: t } }), qb = (e) => ht("prefetching", { detail: { visit: e } }), Me = class {
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
Me.locationVisitKey = "inertiaLocationVisit";
var Ub = async (e) => {
  if (typeof window > "u") throw new Error("Unable to encrypt history");
  let t = Id(), n = await Rd(), r = await Gb(n);
  if (!r) throw new Error("Unable to encrypt history");
  return await Vb(t, r, e);
}, Rn = { key: "historyKey", iv: "historyIv" }, zb = async (e) => {
  let t = Id(), n = await Rd();
  if (!n) throw new Error("Unable to decrypt history");
  return await Hb(t, n, e);
}, Vb = async (e, t, n) => {
  if (typeof window > "u") throw new Error("Unable to encrypt history");
  if (typeof window.crypto.subtle > "u") return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(n);
  let r = new TextEncoder(), o = JSON.stringify(n), a = new Uint8Array(o.length * 3), i = r.encodeInto(o, a);
  return window.crypto.subtle.encrypt({ name: "AES-GCM", iv: e }, t, a.subarray(0, i.written));
}, Hb = async (e, t, n) => {
  if (typeof window.crypto.subtle > "u") return console.warn("Decryption is not supported in this environment. SSL is required."), Promise.resolve(n);
  let r = await window.crypto.subtle.decrypt({ name: "AES-GCM", iv: e }, t, n);
  return JSON.parse(new TextDecoder().decode(r));
}, Id = () => {
  let e = Me.get(Rn.iv);
  if (e) return new Uint8Array(e);
  let t = window.crypto.getRandomValues(new Uint8Array(12));
  return Me.set(Rn.iv, Array.from(t)), t;
}, Wb = async () => typeof window.crypto.subtle > "u" ? (console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(null)) : window.crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, !0, ["encrypt", "decrypt"]), Kb = async (e) => {
  if (typeof window.crypto.subtle > "u") return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve();
  let t = await window.crypto.subtle.exportKey("raw", e);
  Me.set(Rn.key, Array.from(new Uint8Array(t)));
}, Gb = async (e) => {
  if (e) return e;
  let t = await Wb();
  return t ? (await Kb(t), t) : null;
}, Rd = async () => {
  let e = Me.get(Rn.key);
  return e ? await window.crypto.subtle.importKey("raw", new Uint8Array(e), { name: "AES-GCM", length: 256 }, !0, ["encrypt", "decrypt"]) : null;
}, lt = class {
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
function zi(e) {
  return e instanceof File || e instanceof Blob || e instanceof FileList && e.length > 0 || e instanceof FormData && Array.from(e.values()).some((t) => zi(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => zi(t));
}
var Gu = (e) => e instanceof FormData;
function Ld(e, t = new FormData(), n = null) {
  e = e || {};
  for (let r in e) Object.prototype.hasOwnProperty.call(e, r) && Nd(t, _d(n, r), e[r]);
  return t;
}
function _d(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Nd(e, t, n) {
  if (Array.isArray(n)) return Array.from(n.keys()).forEach((r) => Nd(e, _d(t, r.toString()), n[r]));
  if (n instanceof Date) return e.append(t, n.toISOString());
  if (n instanceof File) return e.append(t, n, n.name);
  if (n instanceof Blob) return e.append(t, n);
  if (typeof n == "boolean") return e.append(t, n ? "1" : "0");
  if (typeof n == "string") return e.append(t, n);
  if (typeof n == "number") return e.append(t, `${n}`);
  if (n == null) return e.append(t, "");
  Ld(n, e, t);
}
function Ht(e) {
  return new URL(e.toString(), typeof window > "u" ? void 0 : window.location.toString());
}
var Yb = (e, t, n, r, o) => {
  let a = typeof e == "string" ? Ht(e) : e;
  if ((zi(t) || r) && !Gu(t) && (t = Ld(t)), Gu(t)) return [a, t];
  let [i, s] = Ds(n, a, t, o);
  return [Ht(i), s];
};
function Ds(e, t, n, r = "brackets") {
  let o = /^https?:\/\//.test(t.toString()), a = o || t.toString().startsWith("/"), i = !a && !t.toString().startsWith("#") && !t.toString().startsWith("?"), s = t.toString().includes("?") || e === "get" && Object.keys(n).length, c = t.toString().includes("#"), l = new URL(t.toString(), "http://localhost");
  return e === "get" && Object.keys(n).length && (l.search = Iu.stringify(Qn(Iu.parse(l.search, { ignoreQueryPrefix: !0 }), n), { encodeValuesOnly: !0, arrayFormat: r }), n = {}), [[o ? `${l.protocol}//${l.host}` : "", a ? l.pathname : "", i ? l.pathname.substring(1) : "", s ? l.search : "", c ? l.hash : ""].join(""), n];
}
function ro(e) {
  return e = new URL(e.href), e.hash = "", e;
}
var Yu = (e, t) => {
  e.hash && !t.hash && ro(e).href === t.href && (t.hash = e.hash);
}, Vi = (e, t) => ro(e).href === ro(t).href, Xb = class {
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
      return t = t || Vi(Ht(e.url), i), new Promise((s) => {
        t ? le.replaceState(e, () => s(null)) : le.pushState(e, () => s(null));
      }).then(() => {
        let s = !this.isTheSame(e);
        return this.page = e, this.cleared = !1, s && this.fireEventsFor("newComponent"), this.isFirstPageLoad && this.fireEventsFor("firstLoad"), this.isFirstPageLoad = !1, this.swap({ component: a, page: e, preserveState: r }).then(() => {
          n || lt.reset(), ln.fireInternalEvent("loadDeferredProps"), t || ir(e);
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
}, te = new Xb(), Md = class {
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
}, er = typeof window > "u", Gn = new Md(), Xu = !er && /CriOS/.test(window.navigator.userAgent), Jb = class {
  constructor() {
    this.rememberedState = "rememberedState", this.scrollRegions = "scrollRegions", this.preserveUrl = !1, this.current = {}, this.initialState = null;
  }
  remember(e, t) {
    var n;
    this.replaceState({ ...te.get(), rememberedState: { ...((n = te.get()) == null ? void 0 : n.rememberedState) ?? {}, [t]: e } });
  }
  restore(e) {
    var t, n;
    if (!er) return (n = (t = this.initialState) == null ? void 0 : t[this.rememberedState]) == null ? void 0 : n[e];
  }
  pushState(e, t = null) {
    if (!er) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, Gn.add(() => this.getPageData(e).then((n) => {
        let r = () => {
          this.doPushState({ page: n }, e.url), t && t();
        };
        Xu ? setTimeout(r) : r();
      }));
    }
  }
  getPageData(e) {
    return new Promise((t) => e.encryptHistory ? Ub(e).then(t) : t(e));
  }
  processQueue() {
    return Gn.process();
  }
  decrypt(e = null) {
    var n;
    if (er) return Promise.resolve(e ?? te.get());
    let t = e ?? ((n = window.history.state) == null ? void 0 : n.page);
    return this.decryptPageData(t).then((r) => {
      if (!r) throw new Error("Unable to decrypt history");
      return this.initialState === null ? this.initialState = r ?? void 0 : this.current = r ?? {}, r;
    });
  }
  decryptPageData(e) {
    return e instanceof ArrayBuffer ? zb(e) : Promise.resolve(e);
  }
  saveScrollPositions(e) {
    Gn.add(() => Promise.resolve().then(() => {
      var t;
      (t = window.history.state) != null && t.page && this.doReplaceState({ page: window.history.state.page, scrollRegions: e });
    }));
  }
  saveDocumentScrollPosition(e) {
    Gn.add(() => Promise.resolve().then(() => {
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
    if (te.merge(e), !er) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, Gn.add(() => this.getPageData(e).then((n) => {
        let r = () => {
          this.doReplaceState({ page: n }, e.url), t && t();
        };
        Xu ? setTimeout(r) : r();
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
    Me.remove(Rn.key), Me.remove(Rn.iv);
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
var le = new Jb(), Qb = class {
  constructor() {
    this.internalListeners = [];
  }
  init() {
    typeof window < "u" && (window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), window.addEventListener("scroll", Ui(lt.onWindowScroll.bind(lt), 100), !0)), typeof document < "u" && document.addEventListener("scroll", Ui(lt.onScroll.bind(lt), 100), !0);
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
      let n = Ht(te.get().url);
      n.hash = window.location.hash, le.replaceState({ ...te.get(), url: n.href }), lt.reset();
      return;
    }
    if (!le.isValidState(t)) return this.onMissingHistoryItem();
    le.decrypt(t.page).then((n) => {
      te.setQuietly(n, { preserveState: !1 }).then(() => {
        lt.restore(le.getScrollRegions()), ir(te.get());
      });
    }).catch(() => {
      this.onMissingHistoryItem();
    });
  }
}, ln = new Qb(), Zb = class {
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
}, Ka = new Zb(), e1 = class {
  static handle() {
    this.clearRememberedStateOnReload(), [this.handleBackForward, this.handleLocation, this.handleDefault].find((e) => e.bind(this)());
  }
  static clearRememberedStateOnReload() {
    Ka.isReload() && le.deleteState(le.rememberedState);
  }
  static handleBackForward() {
    if (!Ka.isBackForward() || !le.hasAnyState()) return !1;
    let e = le.getScrollRegions();
    return le.decrypt().then((t) => {
      te.set(t, { preserveScroll: !0, preserveState: !0 }).then(() => {
        lt.restore(e), ir(te.get());
      });
    }).catch(() => {
      ln.onMissingHistoryItem();
    }), !0;
  }
  static handleLocation() {
    if (!Me.exists(Me.locationVisitKey)) return !1;
    let e = Me.get(Me.locationVisitKey) || {};
    return Me.remove(Me.locationVisitKey), typeof window < "u" && te.setUrlHash(window.location.hash), le.decrypt(te.get()).then(() => {
      let t = le.getState(le.rememberedState, {}), n = le.getScrollRegions();
      te.remember(t), te.set(te.get(), { preserveScroll: e.preserveScroll, preserveState: !0 }).then(() => {
        e.preserveScroll && lt.restore(n), ir(te.get());
      });
    }).catch(() => {
      ln.onMissingHistoryItem();
    }), !0;
  }
  static handleDefault() {
    typeof window < "u" && te.setUrlHash(window.location.hash), te.set(te.get(), { preserveScroll: !0, preserveState: !0 }).then(() => {
      Ka.isReload() && lt.restore(le.getScrollRegions()), ir(te.get());
    });
  }
}, t1 = class {
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
}, n1 = class {
  constructor() {
    this.polls = [], this.setupVisibilityListener();
  }
  add(e, t, n) {
    let r = new t1(e, t, n);
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
}, r1 = new n1(), Bd = (e, t, n) => {
  if (e === t) return !0;
  for (let r in e) if (!n.includes(r) && e[r] !== t[r] && !o1(e[r], t[r])) return !1;
  return !0;
}, o1 = (e, t) => {
  switch (typeof e) {
    case "object":
      return Bd(e, t, []);
    case "function":
      return e.toString() === t.toString();
    default:
      return e === t;
  }
}, a1 = { ms: 1, s: 1e3, m: 6e4, h: 36e5, d: 864e5 }, Ju = (e) => {
  if (typeof e == "number") return e;
  for (let [t, n] of Object.entries(a1)) if (e.endsWith(t)) return parseFloat(e) * n;
  return parseInt(e);
}, i1 = class {
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
    return [Ju(t), Ju(n)];
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
    return Bd(e, t, ["showProgress", "replace", "prefetch", "onBefore", "onStart", "onProgress", "onFinish", "onCancel", "onSuccess", "onError", "onPrefetched", "onCancelToken", "onPrefetching", "async"]);
  }
}, rn = new i1(), s1 = class jd {
  constructor(t) {
    if (this.callbacks = [], !t.prefetch) this.params = t;
    else {
      let n = { onBefore: this.wrapCallback(t, "onBefore"), onStart: this.wrapCallback(t, "onStart"), onProgress: this.wrapCallback(t, "onProgress"), onFinish: this.wrapCallback(t, "onFinish"), onCancel: this.wrapCallback(t, "onCancel"), onSuccess: this.wrapCallback(t, "onSuccess"), onError: this.wrapCallback(t, "onError"), onCancelToken: this.wrapCallback(t, "onCancelToken"), onPrefetched: this.wrapCallback(t, "onPrefetched"), onPrefetching: this.wrapCallback(t, "onPrefetching") };
      this.params = { ...t, ...n, onPrefetchResponse: t.onPrefetchResponse || (() => {
      }) };
    }
  }
  static create(t) {
    return new jd(t);
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
}, l1 = { modal: null, listener: null, show(e) {
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
} }, u1 = new Md(), Qu = class qd {
  constructor(t, n, r) {
    this.requestParams = t, this.response = n, this.originatingPage = r;
  }
  static create(t, n, r) {
    return new qd(t, n, r);
  }
  async handlePrefetch() {
    Vi(this.requestParams.all().url, window.location) && this.handle();
  }
  async handle() {
    return u1.add(() => this.process());
  }
  async process() {
    if (this.requestParams.all().prefetch) return this.requestParams.all().prefetch = !1, this.requestParams.all().onPrefetched(this.response, this.requestParams.all()), jb(this.response, this.requestParams.all()), Promise.resolve();
    if (this.requestParams.runCallbacks(), !this.isInertiaResponse()) return this.handleNonInertiaResponse();
    await le.processQueue(), le.preserveUrl = this.requestParams.all().preserveUrl, await this.setPage();
    let t = te.get().props.errors || {};
    if (Object.keys(t).length > 0) {
      let n = this.getScopedErrors(t);
      return Ib(n), this.requestParams.all().onError(n);
    }
    Bb(te.get()), await this.requestParams.all().onSuccess(te.get()), le.preserveUrl = !1;
  }
  mergeParams(t) {
    this.requestParams.merge(t);
  }
  async handleNonInertiaResponse() {
    if (this.isLocationVisit()) {
      let n = Ht(this.getHeader("x-inertia-location"));
      return Yu(this.requestParams.all().url, n), this.locationVisit(n);
    }
    let t = { ...this.response, data: this.getDataFromResponse(this.response.data) };
    if (_b(t)) return l1.show(t.data);
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
      if (Me.set(Me.locationVisitKey, { preserveScroll: this.requestParams.all().preserveScroll === !0 }), typeof window > "u") return;
      Vi(window.location, t) ? window.location.reload() : window.location.href = t.href;
    } catch {
      return !1;
    }
  }
  async setPage() {
    let t = this.getDataFromResponse(this.response.data);
    return this.shouldSetPage(t) ? (this.mergeProps(t), await this.setRememberedState(t), this.requestParams.setPreserveOptions(t), t.url = le.preserveUrl ? te.get().url : this.pageUrl(t), te.set(t, { replace: this.requestParams.all().replace, preserveScroll: this.requestParams.all().preserveScroll, preserveState: this.requestParams.all().preserveState })) : Promise.resolve();
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
    let n = Ht(this.originatingPage.url), r = Ht(te.get().url);
    return n.origin === r.origin && n.pathname === r.pathname;
  }
  pageUrl(t) {
    let n = Ht(t.url);
    return Yu(this.requestParams.all().url, n), n.pathname + n.search + n.hash;
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
    let n = await le.getState(le.rememberedState, {});
    this.requestParams.all().preserveState && n && t.component === te.get().component && (t.rememberedState = n);
  }
  getScopedErrors(t) {
    return this.requestParams.all().errorBag ? t[this.requestParams.all().errorBag || ""] || {} : t;
  }
}, Zu = class Ud {
  constructor(t, n) {
    this.page = n, this.requestHasFinished = !1, this.requestParams = s1.create(t), this.cancelToken = new AbortController();
  }
  static create(t, n) {
    return new Ud(t, n);
  }
  async send() {
    this.requestParams.onCancelToken(() => this.cancel({ cancelled: !0 })), Mb(this.requestParams.all()), this.requestParams.onStart(), this.requestParams.all().prefetch && (this.requestParams.onPrefetching(), qb(this.requestParams.all()));
    let t = this.requestParams.all().prefetch;
    return ve({ method: this.requestParams.all().method, url: ro(this.requestParams.all().url).href, data: this.requestParams.data(), params: this.requestParams.queryParams(), signal: this.cancelToken.signal, headers: this.getHeaders(), onUploadProgress: this.onProgress.bind(this), responseType: "text" }).then((n) => (this.response = Qu.create(this.requestParams, n, this.page), this.response.handle())).catch((n) => n != null && n.response ? (this.response = Qu.create(this.requestParams, n.response, this.page), this.response.handle()) : Promise.reject(n)).catch((n) => {
      if (!ve.isCancel(n) && Rb(n)) return Promise.reject(n);
    }).finally(() => {
      this.finish(), t && this.response && this.requestParams.onPrefetchResponse(this.response);
    });
  }
  finish() {
    this.requestParams.wasCancelledAtAll() || (this.requestParams.markAsFinished(), this.fireFinishEvents());
  }
  fireFinishEvents() {
    this.requestHasFinished || (this.requestHasFinished = !0, Lb(this.requestParams.all()), this.requestParams.onFinish());
  }
  cancel({ cancelled: t = !1, interrupted: n = !1 }) {
    this.requestHasFinished || (this.cancelToken.abort(), this.requestParams.markAsCancelled({ cancelled: t, interrupted: n }), this.fireFinishEvents());
  }
  onProgress(t) {
    this.requestParams.data() instanceof FormData && (t.percentage = t.progress ? Math.round(t.progress * 100) : 0, Nb(t), this.requestParams.all().onProgress(t));
  }
  getHeaders() {
    let t = { ...this.requestParams.headers(), Accept: "text/html, application/xhtml+xml", "X-Requested-With": "XMLHttpRequest", "X-Inertia": !0 };
    return te.get().version && (t["X-Inertia-Version"] = te.get().version), t;
  }
}, ec = class {
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
}, c1 = class {
  constructor() {
    this.syncRequestStream = new ec({ maxConcurrent: 1, interruptible: !0 }), this.asyncRequestStream = new ec({ maxConcurrent: 1 / 0, interruptible: !1 });
  }
  init({ initialPage: e, resolveComponent: t, swapComponent: n }) {
    te.init({ initialPage: e, resolveComponent: t, swapComponent: n }), e1.handle(), ln.init(), ln.on("missingHistoryItem", () => {
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
    le.remember(e, t);
  }
  restore(e = "default") {
    return le.restore(e);
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
    return r1.add(e, () => this.reload(t), { autoStart: n.autoStart ?? !0, keepAlive: n.keepAlive ?? !1 });
  }
  visit(e, t = {}) {
    let n = this.getPendingVisit(e, { ...t, showProgress: t.showProgress ?? !t.async }), r = this.getVisitEvents(t);
    if (r.onBefore(n) === !1 || !Ku(n)) return;
    let o = n.async ? this.asyncRequestStream : this.syncRequestStream;
    o.interruptInFlight(), !te.isCleared() && !n.preserveUrl && lt.save();
    let a = { ...n, ...r }, i = rn.get(a);
    i ? (tc(i.inFlight), rn.use(i, a)) : (tc(!0), o.send(Zu.create(a, te.get())));
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
    if (i.onBefore(r) === !1 || !Ku(r)) return;
    S1(), this.asyncRequestStream.interruptInFlight();
    let s = { ...r, ...i };
    new Promise((c) => {
      let l = () => {
        te.get() ? c() : setTimeout(l, 50);
      };
      l();
    }).then(() => {
      rn.add(s, (c) => {
        this.asyncRequestStream.send(Zu.create(c, te.get()));
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
    let n = te.get(), r = typeof e.props == "function" ? e.props(n.props) : e.props ?? n.props;
    te.set({ ...n, ...e, props: r }, { replace: t, preserveScroll: e.preserveScroll, preserveState: e.preserveState });
  }
  getPrefetchParams(e, t) {
    return { ...this.getPendingVisit(e, { ...t, async: !0, showProgress: !1, prefetch: !0 }), ...this.getVisitEvents(t) };
  }
  getPendingVisit(e, t, n = {}) {
    let r = { method: "get", data: {}, replace: !1, preserveScroll: !1, preserveState: !1, only: [], except: [], headers: {}, errorBag: "", forceFormData: !1, queryStringArrayFormat: "brackets", async: !1, showProgress: !0, fresh: !1, reset: [], preserveUrl: !1, prefetch: !1, ...t }, [o, a] = Yb(e, r.data, r.method, r.forceFormData, r.queryStringArrayFormat);
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
}, f1 = { buildDOMElement(e) {
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
}, update: Ui(function(e) {
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
function d1(e, t, n) {
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
    e ? n(c()) : f1.update(c());
  }
  return l(), { forceUpdate: l, createProvider: function() {
    let u = a();
    return { update: (f) => s(u, f), disconnect: () => i(u) };
  } };
}
var we = "nprogress", Ce = { minimum: 0.08, easing: "linear", positionUsing: "translate3d", speed: 200, trickle: !0, trickleSpeed: 200, showSpinner: !0, barSelector: '[role="bar"]', spinnerSelector: '[role="spinner"]', parent: "body", color: "#29d", includeCSS: !0, template: ['<div class="bar" role="bar">', '<div class="peg"></div>', "</div>", '<div class="spinner" role="spinner">', '<div class="spinner-icon"></div>', "</div>"].join("") }, Jt = null, p1 = (e) => {
  Object.assign(Ce, e), Ce.includeCSS && b1(Ce.color);
}, Po = (e) => {
  let t = zd();
  e = Gd(e, Ce.minimum, 1), Jt = e === 1 ? null : e;
  let n = m1(!t), r = n.querySelector(Ce.barSelector), o = Ce.speed, a = Ce.easing;
  n.offsetWidth, v1((i) => {
    let s = Ce.positionUsing === "translate3d" ? { transition: `all ${o}ms ${a}`, transform: `translate3d(${Hr(e)}%,0,0)` } : Ce.positionUsing === "translate" ? { transition: `all ${o}ms ${a}`, transform: `translate(${Hr(e)}%,0)` } : { marginLeft: `${Hr(e)}%` };
    for (let c in s) r.style[c] = s[c];
    if (e !== 1) return setTimeout(i, o);
    n.style.transition = "none", n.style.opacity = "1", n.offsetWidth, setTimeout(() => {
      n.style.transition = `all ${o}ms linear`, n.style.opacity = "0", setTimeout(() => {
        Kd(), i();
      }, o);
    }, o);
  });
}, zd = () => typeof Jt == "number", Vd = () => {
  Jt || Po(0);
  let e = function() {
    setTimeout(function() {
      Jt && (Hd(), e());
    }, Ce.trickleSpeed);
  };
  Ce.trickle && e();
}, h1 = (e) => {
  !e && !Jt || (Hd(0.3 + 0.5 * Math.random()), Po(1));
}, Hd = (e) => {
  let t = Jt;
  if (t === null) return Vd();
  if (!(t > 1)) return e = typeof e == "number" ? e : (() => {
    let n = { 0.1: [0, 0.2], 0.04: [0.2, 0.5], 0.02: [0.5, 0.8], 5e-3: [0.8, 0.99] };
    for (let r in n) if (t >= n[r][0] && t < n[r][1]) return parseFloat(r);
    return 0;
  })(), Po(Gd(t + e, 0, 0.994));
}, m1 = (e) => {
  var a;
  if (y1()) return document.getElementById(we);
  document.documentElement.classList.add(`${we}-busy`);
  let t = document.createElement("div");
  t.id = we, t.innerHTML = Ce.template;
  let n = t.querySelector(Ce.barSelector), r = e ? "-100" : Hr(Jt || 0), o = Wd();
  return n.style.transition = "all 0 linear", n.style.transform = `translate3d(${r}%,0,0)`, Ce.showSpinner || ((a = t.querySelector(Ce.spinnerSelector)) == null || a.remove()), o !== document.body && o.classList.add(`${we}-custom-parent`), o.appendChild(t), t;
}, Wd = () => g1(Ce.parent) ? Ce.parent : document.querySelector(Ce.parent), Kd = () => {
  var e;
  document.documentElement.classList.remove(`${we}-busy`), Wd().classList.remove(`${we}-custom-parent`), (e = document.getElementById(we)) == null || e.remove();
}, y1 = () => document.getElementById(we) !== null, g1 = (e) => typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
function Gd(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
var Hr = (e) => (-1 + e) * 100, v1 = /* @__PURE__ */ (() => {
  let e = [], t = () => {
    let n = e.shift();
    n && n(t);
  };
  return (n) => {
    e.push(n), e.length === 1 && t();
  };
})(), b1 = (e) => {
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
}, $n = (() => {
  if (typeof document > "u") return null;
  let e = document.createElement("style");
  return e.innerHTML = `#${we} { display: none; }`, e;
})(), w1 = () => {
  if ($n && document.head.contains($n)) return document.head.removeChild($n);
}, x1 = () => {
  $n && !document.head.contains($n) && document.head.appendChild($n);
}, Yd = { configure: p1, isStarted: zd, done: h1, set: Po, remove: Kd, start: Vd, status: Jt, show: w1, hide: x1 }, Wr = 0, tc = (e = !1) => {
  Wr = Math.max(0, Wr - 1), (e || Wr === 0) && Yd.show();
}, S1 = () => {
  Wr++, Yd.hide();
};
function Kr(e) {
  let t = e.currentTarget.tagName.toLowerCase() === "a";
  return !(e.target && (e == null ? void 0 : e.target).isContentEditable || e.defaultPrevented || t && e.altKey || t && e.ctrlKey || t && e.metaKey || t && e.shiftKey || t && "button" in e && e.button !== 0);
}
var wt = new c1();
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
* @license MIT */
function Xd(e) {
  switch (typeof e) {
    case "number":
    case "symbol":
      return !1;
    case "string":
      return e.includes(".") || e.includes("[") || e.includes("]");
  }
}
function Jd(e) {
  var t;
  return typeof e == "string" || typeof e == "symbol" ? e : Object.is((t = e == null ? void 0 : e.valueOf) == null ? void 0 : t.call(e), -0) ? "-0" : String(e);
}
function Ts(e) {
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
function Gr(e, t, n) {
  if (e == null)
    return n;
  switch (typeof t) {
    case "string": {
      const r = e[t];
      return r === void 0 ? Xd(t) ? Gr(e, Ts(t), n) : n : r;
    }
    case "number":
    case "symbol": {
      typeof t == "number" && (t = Jd(t));
      const r = e[t];
      return r === void 0 ? n : r;
    }
    default: {
      if (Array.isArray(t))
        return O1(e, t, n);
      Object.is(t == null ? void 0 : t.valueOf(), -0) ? t = "-0" : t = String(t);
      const r = e[t];
      return r === void 0 ? n : r;
    }
  }
}
function O1(e, t, n) {
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
function nc(e) {
  return e !== null && (typeof e == "object" || typeof e == "function");
}
const E1 = /^(?:0|[1-9]\d*)$/;
function Qd(e, t = Number.MAX_SAFE_INTEGER) {
  switch (typeof e) {
    case "number":
      return Number.isInteger(e) && e >= 0 && e < t;
    case "symbol":
      return !1;
    case "string":
      return E1.test(e);
  }
}
function A1(e) {
  return e !== null && typeof e == "object" && Zr(e) === "[object Arguments]";
}
function C1(e, t) {
  let n;
  if (Array.isArray(t) ? n = t : typeof t == "string" && Xd(t) && (e == null ? void 0 : e[t]) == null ? n = Ts(t) : n = [t], n.length === 0)
    return !1;
  let r = e;
  for (let o = 0; o < n.length; o++) {
    const a = n[o];
    if ((r == null || !Object.hasOwn(r, a)) && !((Array.isArray(r) || A1(r)) && Qd(a) && a < r.length))
      return !1;
    r = r[a];
  }
  return !0;
}
const P1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, k1 = /^\w*$/;
function D1(e, t) {
  return Array.isArray(e) ? !1 : typeof e == "number" || typeof e == "boolean" || e == null || dv(e) ? !0 : typeof e == "string" && (k1.test(e) || !P1.test(e)) || t != null && Object.hasOwn(t, e);
}
const T1 = (e, t, n) => {
  const r = e[t];
  (!(Object.hasOwn(e, t) && Qf(r, n)) || n === void 0 && !(t in e)) && (e[t] = n);
};
function $1(e, t, n, r) {
  if (e == null && !nc(e))
    return e;
  const o = D1(t, e) ? [t] : Array.isArray(t) ? t : typeof t == "string" ? Ts(t) : [t];
  let a = e;
  for (let i = 0; i < o.length && a != null; i++) {
    const s = Jd(o[i]);
    let c;
    if (i === o.length - 1)
      c = n(a[s]);
    else {
      const l = a[s], u = r(l);
      c = u !== void 0 ? u : nc(l) ? l : Qd(o[i + 1]) ? [] : {};
    }
    T1(a, s, c), a = a[s];
  }
  return e;
}
function $r(e, t, n) {
  return $1(e, t, () => n, () => {
  });
}
function F1(e, t) {
  let n = typeof e == "string" ? e : null, r = (typeof e == "string" ? t : e) ?? {}, o = n ? wt.restore(n) : null, a = st(typeof r == "function" ? r() : r), i = null, s = null, c = (u) => u, l = pr({ ...o ? o.data : st(a), isDirty: !1, errors: o ? o.errors : {}, hasErrors: !1, processing: !1, progress: null, wasSuccessful: !1, recentlySuccessful: !1, data() {
    return Object.keys(a).reduce((u, f) => $r(u, f, Gr(this, f)), {});
  }, transform(u) {
    return c = u, this;
  }, defaults(u, f) {
    if (typeof r == "function") throw new Error("You cannot call `defaults()` when using a function to define your form data.");
    return typeof u > "u" ? (a = st(this.data()), this.isDirty = !1) : a = typeof u == "string" ? $r(st(a), u, f) : Object.assign({}, st(a), u), this;
  }, reset(...u) {
    let f = st(typeof r == "function" ? r() : a), p = st(f);
    return u.length === 0 ? (a = p, Object.assign(this, f)) : u.filter((h) => C1(p, h)).forEach((h) => {
      $r(a, h, Gr(p, h)), $r(this, h, Gr(f, h));
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
      return a = st(this.data()), this.isDirty = !1, v;
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
  return de(l, (u) => {
    l.isDirty = !Sv(l.data(), a), n && wt.remember(st(u.__remember()), n);
  }, { immediate: !0, deep: !0 }), l;
}
var Xe = q(null), ze = q(null), Ga = co(null), Fr = q(null), rc = null;
J({ name: "Inertia", props: { initialPage: { type: Object, required: !0 }, initialComponent: { type: Object, required: !1 }, resolveComponent: { type: Function, required: !1 }, titleCallback: { type: Function, required: !1, default: (e) => e }, onHeadUpdate: { type: Function, required: !1, default: () => () => {
} } }, setup({ initialPage: e, initialComponent: t, resolveComponent: n, titleCallback: r, onHeadUpdate: o }) {
  Xe.value = t ? di(t) : null, ze.value = e, Fr.value = null;
  let a = typeof window > "u";
  return rc = d1(a, r, o), a || (wt.init({ initialPage: e, resolveComponent: n, swapComponent: async (i) => {
    Xe.value = di(i.component), ze.value = i.page, Fr.value = i.preserveState ? Fr.value : Date.now();
  } }), wt.on("navigate", () => rc.forceUpdate())), () => {
    if (Xe.value) {
      Xe.value.inheritAttrs = !!Xe.value.inheritAttrs;
      let i = je(Xe.value, { ...ze.value.props, key: Fr.value });
      return Ga.value && (Xe.value.layout = Ga.value, Ga.value = null), Xe.value.layout ? typeof Xe.value.layout == "function" ? Xe.value.layout(je, i) : (Array.isArray(Xe.value.layout) ? Xe.value.layout : [Xe.value.layout]).concat(i).reverse().reduce((s, c) => (c.inheritAttrs = !!c.inheritAttrs, je(c, { ...ze.value.props }, () => s))) : i;
    }
  };
} });
function I1() {
  return pr({ props: G(() => {
    var e;
    return (e = ze.value) == null ? void 0 : e.props;
  }), url: G(() => {
    var e;
    return (e = ze.value) == null ? void 0 : e.url;
  }), component: G(() => {
    var e;
    return (e = ze.value) == null ? void 0 : e.component;
  }), version: G(() => {
    var e;
    return (e = ze.value) == null ? void 0 : e.version;
  }), clearHistory: G(() => {
    var e;
    return (e = ze.value) == null ? void 0 : e.clearHistory;
  }), deferredProps: G(() => {
    var e;
    return (e = ze.value) == null ? void 0 : e.deferredProps;
  }), mergeProps: G(() => {
    var e;
    return (e = ze.value) == null ? void 0 : e.mergeProps;
  }), deepMergeProps: G(() => {
    var e;
    return (e = ze.value) == null ? void 0 : e.deepMergeProps;
  }), rememberedState: G(() => {
    var e;
    return (e = ze.value) == null ? void 0 : e.rememberedState;
  }), encryptHistory: G(() => {
    var e;
    return (e = ze.value) == null ? void 0 : e.encryptHistory;
  }) });
}
var R1 = J({ name: "Deferred", props: { data: { type: [String, Array], required: !0 } }, render() {
  let e = Array.isArray(this.$props.data) ? this.$props.data : [this.$props.data];
  if (!this.$slots.fallback) throw new Error("`<Deferred>` requires a `<template #fallback>` slot");
  return e.every((t) => this.$page.props[t] !== void 0) ? this.$slots.default() : this.$slots.fallback();
} });
J({ props: { title: { type: String, required: !1 } }, data() {
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
J({ name: "Link", props: { as: { type: String, default: "a" }, data: { type: Object, default: () => ({}) }, href: { type: [String, Object], required: !0 }, method: { type: String, default: "get" }, replace: { type: Boolean, default: !1 }, preserveScroll: { type: Boolean, default: !1 }, preserveState: { type: Boolean, default: null }, only: { type: Array, default: () => [] }, except: { type: Array, default: () => [] }, headers: { type: Object, default: () => ({}) }, queryStringArrayFormat: { type: String, default: "brackets" }, async: { type: Boolean, default: !1 }, prefetch: { type: [Boolean, String, Array], default: !1 }, cacheFor: { type: [Number, String, Array], default: 0 }, onStart: { type: Function, default: (e) => {
} }, onProgress: { type: Function, default: () => {
} }, onFinish: { type: Function, default: () => {
} }, onBefore: { type: Function, default: () => {
} }, onCancel: { type: Function, default: () => {
} }, onSuccess: { type: Function, default: () => {
} }, onError: { type: Function, default: () => {
} }, onCancelToken: { type: Function, default: () => {
} } }, setup(e, { slots: t, attrs: n }) {
  let r = q(0), o = q(null), a = e.prefetch === !0 ? ["hover"] : e.prefetch === !1 ? [] : Array.isArray(e.prefetch) ? e.prefetch : [e.prefetch], i = e.cacheFor !== 0 ? e.cacheFor : a.length === 1 && a[0] === "click" ? 0 : 3e4;
  Ee(() => {
    a.includes("mount") && w();
  }), Nt(() => {
    clearTimeout(o.value);
  });
  let s = typeof e.href == "object" ? e.href.method : e.method.toLowerCase(), c = s !== "get" ? "button" : e.as.toLowerCase(), l = G(() => Ds(s, typeof e.href == "object" ? e.href.url : e.href || "", e.data, e.queryStringArrayFormat)), u = G(() => l.value[0]), f = G(() => l.value[1]), p = G(() => ({ a: { href: u.value }, button: { type: "button" } })), h = { data: f.value, method: s, replace: e.replace, preserveScroll: e.preserveScroll, preserveState: e.preserveState ?? s !== "get", only: e.only, except: e.except, headers: e.headers, async: e.async }, d = { ...h, onCancelToken: e.onCancelToken, onBefore: e.onBefore, onStart: (b) => {
    r.value++, e.onStart(b);
  }, onProgress: e.onProgress, onFinish: (b) => {
    r.value--, e.onFinish(b);
  }, onCancel: e.onCancel, onSuccess: e.onSuccess, onError: e.onError }, w = () => {
    wt.prefetch(u.value, h, { cacheFor: i });
  }, g = { onClick: (b) => {
    Kr(b) && (b.preventDefault(), wt.visit(u.value, d));
  } }, y = { onMouseenter: () => {
    o.value = setTimeout(() => {
      w();
    }, 75);
  }, onMouseleave: () => {
    clearTimeout(o.value);
  }, onClick: g.onClick }, v = { onMousedown: (b) => {
    Kr(b) && (b.preventDefault(), w());
  }, onMouseup: (b) => {
    b.preventDefault(), wt.visit(u.value, d);
  }, onClick: (b) => {
    Kr(b) && b.preventDefault();
  } };
  return () => je(c, { ...n, ...p.value[c] || {}, "data-loading": r.value > 0 ? "" : void 0, ...a.includes("hover") ? y : a.includes("click") ? v : g }, t);
} });
J({ name: "WhenVisible", props: { data: { type: [String, Array] }, params: { type: Object }, buffer: { type: Number, default: 0 }, as: { type: String, default: "div" }, always: { type: Boolean, default: !1 } }, data() {
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
  return (this.$props.always || !this.loaded) && e.push(je(this.$props.as)), this.loaded ? this.$slots.default && e.push(this.$slots.default()) : e.push(this.$slots.fallback ? this.$slots.fallback() : null), e;
} });
function dA(e) {
  return e.toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
function L1(e) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP"
  }).format(e);
}
function pA(e) {
  return I1().props.auth.permissions.includes(e);
}
let Hi = null;
function hA(e) {
  Hi = e;
}
function wr() {
  return Hi === null && console.error(
    `Inertia router is not set. Please set it first:

// app.js
import { setInertiaRouter } from '@nb/vue-components';
import { router } from '@inertiajs/vue3';
// createInertiaApp(...);
setInertiaRouter(router);

`
  ), Hi;
}
let Wi = null;
function mA(e) {
  Wi = e;
}
function _1() {
  return Wi === null && console.error(
    `Inertia page is not set. Please set it first:

// app.js
import { setInertiaPage } from '@nb/vue-components';
// createInertiaApp(...);
setInertiaPage(page);

`
  ), Wi;
}
const ct = J({
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
      const r = wr(), o = e.as.toLowerCase(), a = e.method.toLowerCase(), [i, s] = Ds(
        a,
        e.href || "",
        e.data,
        e.queryStringArrayFormat
      );
      return o === "a" && a !== "get" && console.warn(
        `Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${i}" method="${a}" as="button">...</Link>`
      ), je(
        e.as,
        {
          ...n,
          ...o === "a" ? { href: i } : {},
          onClick: (c) => {
            Kr(c) && (c.preventDefault(), r.visit(i, {
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
function xr(e, t, n, r) {
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
function Sr(e, t) {
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
function N1(e, t) {
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
function M1() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(N1(arguments[t]));
  return e;
}
var B1 = /* @__PURE__ */ new Map([
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
function ko(e, t) {
  var n = j1(e);
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
function j1(e) {
  var t = e.name, n = t && t.lastIndexOf(".") !== -1;
  if (n && !e.type) {
    var r = t.split(".").pop().toLowerCase(), o = B1.get(r);
    o && Object.defineProperty(e, "type", {
      value: o,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
var q1 = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function U1(e) {
  return xr(this, void 0, void 0, function() {
    return Sr(this, function(t) {
      return [2, z1(e) && e.dataTransfer ? W1(e.dataTransfer, e.type) : V1(e)];
    });
  });
}
function z1(e) {
  return !!e.dataTransfer;
}
function V1(e) {
  var t = H1(e.target) ? e.target.files ? Ki(e.target.files) : [] : [];
  return t.map(function(n) {
    return ko(n);
  });
}
function H1(e) {
  return e !== null;
}
function W1(e, t) {
  return xr(this, void 0, void 0, function() {
    var n, r;
    return Sr(this, function(o) {
      switch (o.label) {
        case 0:
          return e.items ? (n = Ki(e.items).filter(function(a) {
            return a.kind === "file";
          }), t !== "drop" ? [2, n] : [4, Promise.all(n.map(K1))]) : [3, 2];
        case 1:
          return r = o.sent(), [2, oc(Zd(r))];
        case 2:
          return [2, oc(Ki(e.files).map(function(a) {
            return ko(a);
          }))];
      }
    });
  });
}
function oc(e) {
  return e.filter(function(t) {
    return q1.indexOf(t.name) === -1;
  });
}
function Ki(e) {
  for (var t = [], n = 0; n < e.length; n++) {
    var r = e[n];
    t.push(r);
  }
  return t;
}
function K1(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return ac(e);
  var t = e.webkitGetAsEntry();
  return t && t.isDirectory ? ep(t) : ac(e);
}
function Zd(e) {
  return e.reduce(function(t, n) {
    return M1(t, Array.isArray(n) ? Zd(n) : [n]);
  }, []);
}
function ac(e) {
  var t = e.getAsFile();
  if (!t)
    return Promise.reject(e + " is not a File");
  var n = ko(t);
  return Promise.resolve(n);
}
function G1(e) {
  return xr(this, void 0, void 0, function() {
    return Sr(this, function(t) {
      return [2, e.isDirectory ? ep(e) : Y1(e)];
    });
  });
}
function ep(e) {
  var t = e.createReader();
  return new Promise(function(n, r) {
    var o = [];
    function a() {
      var i = this;
      t.readEntries(function(s) {
        return xr(i, void 0, void 0, function() {
          var c, l, u;
          return Sr(this, function(f) {
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
                u = Promise.all(s.map(G1)), o.push(u), a(), f.label = 6;
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
function Y1(e) {
  return xr(this, void 0, void 0, function() {
    return Sr(this, function(t) {
      return [2, new Promise(function(n, r) {
        e.file(function(o) {
          var a = ko(o, e.fullPath);
          n(a);
        }, function(o) {
          r(o);
        });
      })];
    });
  });
}
var Ir = {}, ic;
function X1() {
  return ic || (ic = 1, Ir.__esModule = !0, Ir.default = function(e, t) {
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
  }), Ir;
}
var J1 = X1();
const tp = /* @__PURE__ */ Ov(J1);
var Je = function() {
  return Je = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Je.apply(this, arguments);
};
function sc(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Q1(e, t, n, r) {
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
function Z1(e, t) {
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
function Gi(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function ew(e) {
  return e.includes("MSIE") || e.includes("Trident/");
}
function tw(e) {
  return e.includes("Edge/");
}
function nw(e) {
  return e === void 0 && (e = window.navigator.userAgent), ew(e) || tw(e);
}
function lc(e) {
  e.preventDefault();
}
function Rr(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
    return t === "Files" || t === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function oo(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
var rw = "file-invalid-type", ow = "file-too-large", aw = "file-too-small", iw = "too-many-files", sw = {
  code: iw,
  message: "Too many files"
}, lw = function(e) {
  e = Array.isArray(e) && e.length === 1 ? e[0] : e;
  var t = Array.isArray(e) ? "one of ".concat(e.join(", ")) : e;
  return {
    code: rw,
    message: "File type must be ".concat(t)
  };
};
function Yn(e) {
  return e != null;
}
var uw = tp.default, cw = uw || tp;
function np(e, t) {
  var n = e.type === "application/x-moz-file" || cw(e, t);
  return [n, n ? null : lw(t)];
}
var uc = function(e) {
  return {
    code: ow,
    message: "File is larger than ".concat(e, " bytes")
  };
}, cc = function(e) {
  return {
    code: aw,
    message: "File is smaller than ".concat(e, " bytes")
  };
};
function rp(e, t, n) {
  if (Yn(e.size) && e.size)
    if (Yn(t) && Yn(n)) {
      if (e.size > n)
        return [!1, uc(n)];
      if (e.size < t)
        return [!1, cc(t)];
    } else {
      if (Yn(t) && e.size < t)
        return [!1, cc(t)];
      if (Yn(n) && e.size > n)
        return [!1, uc(n)];
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
      return !oo(n) && a && a.apply(void 0, Gi([n], r, !1)), oo(n);
    });
  };
}
function fw(e) {
  var t = e.files, n = e.accept, r = e.minSize, o = e.maxSize, a = e.multiple, i = e.maxFiles;
  return !a && t.length > 1 || a && i >= 1 && t.length > i ? !1 : t.every(function(s) {
    var c = np(s, n)[0], l = rp(s, r, o)[0];
    return c && l;
  });
}
var dw = {
  disabled: !1,
  getFilesFromEvent: U1,
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
function op(e) {
  e === void 0 && (e = {});
  var t = q(Je(Je({}, dw), e));
  de(function() {
    return Je({}, e);
  }, function(k) {
    t.value = Je(Je({}, t.value), k);
  });
  var n = q(), r = q(), o = pr({
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
        var N = r.value.files;
        N && !N.length && (o.isFileDialogActive = !1, typeof k == "function" && k());
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
    k || (nw() ? setTimeout(a, 0) : a());
  }
  var u = q([]), f = function(k) {
    if (n.value) {
      var N = n.value.$el || n.value;
      N.contains(k.target) || (k.preventDefault(), u.value = []);
    }
  };
  Ee(function() {
    window.addEventListener("focus", i, !1);
    var k = t.value.preventDropOnDocument;
    k && (document.addEventListener("dragover", lc, !1), document.addEventListener("drop", f, !1));
  }), Nt(function() {
    window.removeEventListener("focus", i, !1);
    var k = t.value.preventDropOnDocument;
    k && (document.removeEventListener("dragover", lc), document.removeEventListener("drop", f));
  });
  function p(k) {
    var N = t.value.noDragEventsBubbling;
    N && k.stopPropagation();
  }
  function h(k) {
    return Q1(this, void 0, void 0, function() {
      var N, m, O, E, x;
      return Z1(this, function(W) {
        switch (W.label) {
          case 0:
            return N = t.value, m = N.getFilesFromEvent, O = N.noDragEventsBubbling, E = N.onDragEnter, k.preventDefault(), p(k), u.value = Gi(Gi([], u.value, !0), [k.target], !1), Rr(k) ? m ? [4, m(k)] : [2] : [3, 2];
          case 1:
            if (x = W.sent(), x || (x = []), oo(k) && !O)
              return [2];
            o.draggedFiles = x, o.isDragActive = !0, E && E(k), W.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }
  function d(k) {
    var N = t.value.onDragOver;
    if (k.preventDefault(), p(k), k.dataTransfer)
      try {
        k.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return Rr(k) && N && N(k), !1;
  }
  function w(k) {
    k.preventDefault(), p(k);
    var N = u.value.filter(function(E) {
      if (!n.value)
        return !1;
      var x = n.value.$el || n.value;
      return x.contains(E);
    }), m = N.indexOf(k.target);
    if (m !== -1 && N.splice(m, 1), u.value = N, !(N.length > 0)) {
      o.draggedFiles = [], o.isDragActive = !1;
      var O = t.value.onDragLeave;
      Rr(k) && O && O(k);
    }
  }
  function g(k) {
    k.preventDefault(), p(k), u.value = [];
    var N = t.value, m = N.getFilesFromEvent, O = N.noDragEventsBubbling, E = N.accept, x = N.minSize, W = N.maxSize, M = N.multiple, R = N.maxFiles, K = N.onDrop, oe = N.onDropRejected, Pe = N.onDropAccepted;
    if (Rr(k)) {
      if (!m)
        return;
      Promise.resolve(m(k)).then(function(Ge) {
        if (!(oo(k) && !O)) {
          var Ae = [], _e = [];
          Ge.forEach(function(De) {
            var Ne = np(De, E), mt = Ne[0], yt = Ne[1], Se = rp(De, x, W), ae = Se[0], ge = Se[1];
            if (mt && ae)
              Ae.push(De);
            else {
              var ce = [yt, ge].filter(function(be) {
                return be;
              });
              _e.push({ file: De, errors: ce });
            }
          }), (!M && Ae.length > 1 || M && R >= 1 && Ae.length > R) && (Ae.forEach(function(De) {
            _e.push({ file: De, errors: [sw] });
          }), Ae.splice(0)), o.acceptedFiles = Ae, o.fileRejections = _e, K && K(Ae, _e, k), _e.length > 0 && oe && oe(_e, k), Ae.length > 0 && Pe && Pe(Ae, k);
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
  }, A = function(k) {
    k === void 0 && (k = {});
    var N = k.onFocus, m = k.onBlur, O = k.onClick, E = k.onDragEnter, x = k.onDragenter, W = k.onDragOver, M = k.onDragover, R = k.onDragLeave, K = k.onDragleave, oe = k.onDrop, Pe = sc(k, ["onFocus", "onBlur", "onClick", "onDragEnter", "onDragenter", "onDragOver", "onDragover", "onDragLeave", "onDragleave", "onDrop"]);
    return Je(Je({ onFocus: v(Dt(N, s)), onBlur: v(Dt(m, c)), onClick: y(Dt(O, l)), onDragenter: b(Dt(E, x, h)), onDragover: b(Dt(W, M, d)), onDragleave: b(Dt(R, K, w)), onDrop: b(Dt(oe, g)), ref: n }, !t.value.disabled && !t.value.noKeyboard ? { tabIndex: 0 } : {}), Pe);
  }, P = function(k) {
    k.stopPropagation();
  };
  function $(k) {
    k === void 0 && (k = {});
    var N = k.onChange, m = k.onClick, O = sc(k, ["onChange", "onClick"]), E = {
      accept: t.value.accept,
      multiple: t.value.multiple,
      style: "display: none",
      type: "file",
      onChange: y(Dt(N, g)),
      onClick: y(Dt(m, P)),
      autoComplete: "off",
      tabIndex: -1,
      ref: r
    };
    return Je(Je({}, E), O);
  }
  var F = G(function() {
    return o.draggedFiles ? o.draggedFiles.length : 0;
  }), B = G(function() {
    return F.value > 0 && fw({
      files: o.draggedFiles,
      accept: t.value.accept,
      minSize: t.value.minSize,
      maxSize: t.value.maxSize,
      multiple: t.value.multiple,
      maxFiles: t.value.maxFiles
    });
  }), D = G(function() {
    return F.value > 0 && !B.value;
  });
  return Je(Je({}, en(o)), { isDragAccept: B, isDragReject: D, isFocused: G(function() {
    return o.isFocused && !t.value.disabled;
  }), getRootProps: A, getInputProps: $, rootRef: n, inputRef: r, open: y(a) });
}
const pw = { class: "flex w-full flex-col" }, hw = {
  key: 0,
  class: "select-none text-black"
}, mw = ["name"], yw = {
  key: 1,
  class: "select-none"
}, gw = { key: 2 }, vw = {
  key: 3,
  class: "select-none"
}, yA = {
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
    wr();
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
    }, { getRootProps: a, getInputProps: i, isDragActive: s, ...c } = op({
      onDrop: o,
      multiple: t.multiple,
      accept: t.accept
    });
    return (l, u) => {
      var f;
      return C(), L("div", pw, [
        j("div", {
          class: ee(["w-full rounded-lg border-2 border-dashed border-primary-200 bg-primary-50 text-primary-200 transition duration-100 ease-in-out hover:border-primary-600 hover:text-primary", {
            "border-primary-400 bg-primary-100": S(s),
            "border-red-600 bg-primary-100": t.form.errors[e.field] ?? n.value,
            [e.FileDropCustomClass]: !!e.FileDropCustomClass
          }])
        }, [
          j("div", ue({ class: "p-4' flex h-20 w-full cursor-copy flex-col items-center justify-center font-medium" }, S(a)()), [
            e.label ? (C(), L("p", hw, Z(e.label), 1)) : Y("", !0),
            j("input", ue(S(i)(), { name: e.field }), null, 16, mw),
            S(s) ? (C(), L("span", yw, "Drop the " + Z(r(e.field)) + " here ...", 1)) : e.form[e.field] ? (C(), L("span", gw, Z(((f = e.form[e.field]) == null ? void 0 : f.path) ?? "File prepared"), 1)) : (C(), L("span", vw, "Drag 'n' drop " + Z(r(e.field)) + " here", 1))
          ], 16)
        ], 2),
        Q(S(gr), {
          class: "mt-2",
          message: t.form.errors[e.field] ?? n.value
        }, null, 8, ["message"])
      ]);
    };
  }
}, bw = { class: "flex w-full" }, ww = { key: 0 }, xw = { key: 1 }, Sw = {
  key: 0,
  class: "flex flex-wrap gap-2 p-4"
}, Ow = ["onClick"], Ew = ["src"], Aw = ["value"], Cw = { class: "flex items-center gap-4" }, Pw = {
  key: 0,
  class: "text-sm text-gray-600"
}, kw = {
  key: 1,
  class: "mt-2"
}, Dw = { class: "container mx-auto px-5 py-2 lg:px-8 lg:pt-8" }, Tw = { class: "-m-1 flex flex-wrap md:-m-2" }, $w = { class: "flex w-1/3 flex-wrap" }, Fw = { class: "h-full w-full p-1 shadow md:p-2" }, Iw = ["src"], gA = {
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
    const t = wr(), n = e, r = F1({
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
    const { getRootProps: c, getInputProps: l, ...u } = op({
      onDrop: i,
      multiple: !0,
      accept: "image/*"
    });
    return (f, p) => (C(), L(ie, null, [
      e.canUpload ? (C(), L("form", {
        key: 0,
        onSubmit: $t(o, ["prevent"]),
        class: "w-full"
      }, [
        j("div", bw, [
          j("div", {
            class: ee(["w-full rounded-l-lg border-2 border-r-0 border-dashed border-primary-200 bg-primary-50 transition duration-100 ease-in-out hover:border-primary-600 hover:text-primary", { "border-primary-400 bg-primary-100": f.dragEneted }])
          }, [
            j("div", ue({ class: "p-4' flex h-20 w-full cursor-copy items-center justify-center font-medium" }, S(c)()), [
              j("input", Oe(ke(S(l)())), null, 16),
              f.isDragActive ? (C(), L("span", ww, "Drop the files here ...")) : (C(), L("span", xw, "Drag 'n' drop images here"))
            ], 16),
            S(r).image.length > 0 ? (C(), L("div", Sw, [
              (C(!0), L(ie, null, et(S(r).image, (h, d) => (C(), L("div", {
                class: "relative cursor-pointer select-none",
                onClick: (w) => s(d),
                key: d
              }, [
                p[0] || (p[0] = j("div", { class: "absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 font-bold text-white" }, " - ", -1)),
                j("img", {
                  src: h.dataUrl,
                  class: "h-auto max-w-[150px]"
                }, null, 8, Ew)
              ], 8, Ow))), 128))
            ])) : Y("", !0)
          ], 2),
          Q(S(th), {
            class: ee(["inline rounded-l-none", { "cursor-not-allowed": S(r).image.length == 0 }]),
            disabled: S(r).image.length == 0
          }, {
            default: z(() => p[1] || (p[1] = [
              me(" Upload ")
            ])),
            _: 1
          }, 8, ["class", "disabled"]),
          S(r).progress ? (C(), L("progress", {
            key: 0,
            value: S(r).progress.percentage,
            max: "100"
          }, Z(S(r).progress.percentage) + "%", 9, Aw)) : Y("", !0)
        ]),
        f.$page.props.errors.image ? (C(), H(S(gr), {
          key: 0,
          class: "mt-2",
          message: f.$page.props.errors.image
        }, null, 8, ["message"])) : Y("", !0),
        j("div", Cw, [
          Q(un, {
            "enter-from-class": "opacity-0",
            "leave-to-class": "opacity-0",
            class: "transition ease-in-out"
          }, {
            default: z(() => [
              S(r).recentlySuccessful ? (C(), L("p", Pw, "Images uploaded.")) : Y("", !0)
            ]),
            _: 1
          })
        ])
      ], 32)) : Y("", !0),
      e.images.length ? (C(), L("div", kw, [
        p[3] || (p[3] = j("hr", null, null, -1)),
        j("div", Dw, [
          j("div", Tw, [
            (C(!0), L(ie, null, et(e.images, (h) => (C(), L("div", $w, [
              j("div", Fw, [
                j("img", {
                  alt: "gallery",
                  class: "block h-auto w-auto rounded-lg object-cover object-center",
                  src: h.url
                }, null, 8, Iw),
                e.canUpload ? (C(), H(S(ct), {
                  key: 0,
                  href: f.route("images.delete", h.id),
                  method: "delete",
                  class: "mt-1 w-full items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-center text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-hidden focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700",
                  as: "button"
                }, {
                  default: z(() => p[2] || (p[2] = [
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
}, Rw = { class: "mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]" }, Lw = ["name", "value", "id", "checked"], _w = ["for"], vA = {
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
    return (o, a) => (C(), L("div", Rw, [
      j("input", {
        class: "relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 ring-accent before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-1 after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-accent checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-accent checked:after:bg-accent checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-hidden focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-accent checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px] checked:focus:before:shadow-primary checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]",
        type: "radio",
        name: e.name,
        value: e.value,
        id: e.id,
        checked: e.modelValue === e.value,
        onChange: r
      }, null, 40, Lw),
      j("label", {
        class: "mt-px inline-block pl-[0.15rem] hover:cursor-pointer",
        for: e.id
      }, Z(e.label), 9, _w)
    ]));
  }
}, Nw = {
  key: 0,
  class: "absolute inset-2 flex items-center justify-center"
}, fc = {
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
      return C(), H(S(th), {
        disabled: e.loading || ((r = e.form) == null ? void 0 : r.processing) || e.disabled,
        type: e.type,
        class: "focusable",
        customButtonClass: e.customButtonClass
      }, {
        default: z(() => {
          var o, a;
          return [
            j("div", {
              class: ee({ "opacity-25": ((o = e.form) == null ? void 0 : o.processing) || e.loading })
            }, [
              U(t.$slots, "default")
            ], 2),
            (a = e.form) != null && a.processing || e.loading ? (C(), L("div", Nw, [
              Q(S(nh), { class: "aspect-square h-full! w-auto! text-white" })
            ])) : Y("", !0)
          ];
        }),
        _: 3
      }, 8, ["disabled", "type", "customButtonClass"]);
    };
  }
}, Mw = ["id"], Bw = {
  key: 0,
  class: "text-sm text-gray-600"
}, jw = { class: "flex flex-col" }, bA = {
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
    wr();
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
    return t.sticky && (Ee(() => {
      c(), window.addEventListener("scroll", i, { passive: !0 }), window.addEventListener("resize", c, { passive: !0 }), r.value.addEventListener("scroll", s, { passive: !0 });
    }), Nt(() => {
      var l;
      window.removeEventListener("scroll", i), window.removeEventListener("resize", c), (l = r.value) == null || l.removeEventListener("scroll", s);
    })), (l, u) => (C(), L("div", {
      class: ee({
        "visible! hidden": e.collapsable,
        "overflow-hidden": e.overflow
      }),
      id: e.collapse_id,
      "data-te-collapse-item": ""
    }, [
      e.total != null ? (C(), L("p", Bw, "Found: " + Z(e.total), 1)) : Y("", !0),
      j("div", jw, [
        j("div", {
          class: ee({ "overflow-x-auto": e.overflow }),
          ref_key: "table_container",
          ref: r
        }, [
          j("table", {
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
            e.sticky ? (C(), L("div", {
              key: 0,
              ref_key: "sticky_wrapper",
              ref: o,
              class: "fixed isolate z-40 hidden w-full overflow-hidden bg-neutral-100"
            }, [
              j("div", {
                ref_key: "sticky_header",
                ref: a,
                class: ee(["w-max [&>th]:align-middle", {
                  "max-sm:hidden": e.responsive
                }])
              }, null, 2)
            ], 512)) : Y("", !0),
            U(l.$slots, "default")
          ], 2)
        ], 2)
      ]),
      l.$slots.pagination ? U(l.$slots, "pagination", { key: 1 }) : e.links ? (C(), H(S(eh), {
        key: 2,
        class: "mt-6",
        links: e.links,
        showPerPage: e.showPerPage,
        defaultPerPage: e.defaultPerPage
      }, null, 8, ["links", "showPerPage", "defaultPerPage"])) : Y("", !0)
    ], 10, Mw));
  }
}, qw = {}, Uw = { class: "border-b bg-neutral-100 font-medium dark:border-neutral-500" };
function zw(e, t) {
  return C(), L("thead", Uw, [
    U(e.$slots, "default")
  ]);
}
const wA = /* @__PURE__ */ go(qw, [["render", zw]]), Vw = { key: 0 }, xA = {
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
    const t = e, n = G(() => {
      let o = _1().props[t.data] ?? null;
      return t.recordsFromPagination ? o.data ?? null : o;
    });
    return (r, o) => (C(), L("tbody", null, [
      Q(S(R1), {
        data: t.data
      }, {
        fallback: z(() => [
          e.hidePlaceholder ? Y("", !0) : (C(), H(S(Qw), { key: 0 }))
        ]),
        default: z(() => [
          !e.hideNoRecordsMessage && n.value ? (C(), L(ie, { key: 0 }, [
            n.value.length ? Y("", !0) : (C(), L("tr", Vw, [
              Q(S($s), {
                colspan: "999",
                class: "no-records-message text-center! text-gray-500"
              }, {
                default: z(() => [
                  me(Z(e.noRecordsMessage), 1)
                ]),
                _: 1
              })
            ]))
          ], 64)) : Y("", !0),
          U(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["data"])
    ]));
  }
}, Hw = { class: "flex items-center justify-between" }, Ww = {
  key: 0,
  class: "order-arrows flex h-full w-4 items-center md:right-4"
}, SA = {
  __name: "Th",
  props: {
    orderBy: String
  },
  setup(e) {
    yr.add(zy, By);
    const t = e, n = q("asc"), r = q(!1);
    let o = null;
    const a = wr();
    Ee(() => {
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
    return (l, u) => (C(), L("th", {
      scope: "col",
      class: ee(["relative py-4 text-center md:px-6 md:text-left", e.orderBy ? "cursor-pointer" : ""]),
      onClick: s
    }, [
      j("div", Hw, [
        U(l.$slots, "default"),
        e.orderBy ? (C(), L("span", Ww, [
          Q(S(Be), {
            icon: "fa-sort-up",
            class: ee(["absolute", c("desc")])
          }, null, 8, ["class"]),
          Q(S(Be), {
            icon: "fa-sort-down",
            class: ee(["absolute", c("asc")])
          }, null, 8, ["class"])
        ])) : Y("", !0)
      ])
    ], 2));
  }
}, Kw = { class: "whitespace-nowrap py-2 text-center md:px-6 md:py-4 md:text-left" }, Gw = { class: "td-label hidden font-bold" }, $s = {
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
    return (n, r) => (C(), L("td", Kw, [
      j("span", Gw, Z(t.label), 1),
      U(n.$slots, "default")
    ]));
  }
}, Yw = ["data-te-target", "aria-controls"], OA = {
  __name: "TrCollapseHandler",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(e) {
    return (t, n) => (C(), L("tr", {
      "data-te-collapse-init": "",
      "data-te-target": "#" + e.collapse_id,
      "aria-expanded": "false",
      "aria-controls": e.collapse_id
    }, [
      U(t.$slots, "default")
    ], 8, Yw));
  }
}, Xw = { colspan: "999" }, Jw = ["id"], EA = {
  __name: "TrCollapse",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(e) {
    return (t, n) => (C(), L("tr", null, [
      j("td", Xw, [
        j("div", {
          id: e.collapse_id,
          class: "visible! hidden",
          "data-te-collapse-item": ""
        }, [
          U(t.$slots, "default")
        ], 8, Jw)
      ])
    ]));
  }
}, Qw = {
  __name: "TrPlaceholder",
  props: {
    placeholders: {
      type: Number,
      required: !1,
      default: 5
    }
  },
  setup(e) {
    return (t, n) => (C(!0), L(ie, null, et(e.placeholders, (r) => (C(), L("tr", null, [
      Q(S($s), { colspan: "999" }, {
        default: z(() => n[0] || (n[0] = [
          j("div", { class: "tr-placeholder h-8 w-full animate-pulse rounded-md bg-gray-500 bg-opacity-75" }, null, -1)
        ])),
        _: 1
      })
    ]))), 256));
  }
}, Zw = { class: "mb-2 flex w-full flex-wrap justify-between text-sm text-gray-600 max-xxs:text-xxs" }, e2 = {
  key: 0,
  class: "mb-2 h-fit w-full xs:w-fit"
}, t2 = { key: 0 }, n2 = {
  key: 1,
  class: "ml-1"
}, r2 = { class: "flex w-fit flex-wrap" }, o2 = {
  key: 0,
  class: "font-semibold"
}, a2 = { class: "mb-1" }, i2 = {
  key: 0,
  class: "w-full whitespace-normal font-semibold text-primary"
}, s2 = { class: "w-full break-words" }, l2 = { class: "mb-1 flex flex-col" }, u2 = { key: 1 }, AA = {
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
      return C(), L("div", {
        key: t.key,
        class: "mt-3 rounded-md border border-gray-300 bg-white px-4 py-3 lg:border lg:border-gray-300"
      }, [
        j("div", Zw, [
          t.itemId || t.timeStamp ? (C(), L("div", e2, [
            t.itemId ? (C(), L(ie, { key: 0 }, [
              t.itemId.routeName ? (C(), H(S(ct), {
                key: 1,
                href: n.route(t.itemId.routeName, t.itemId.routeData ? t.itemId.routeData : t.itemId.id)
              }, {
                default: z(() => [
                  t.itemId.prefix || t.itemId.prefix == null ? (C(), L(ie, { key: 0 }, [
                    me("#")
                  ], 64)) : Y("", !0),
                  me(" " + Z(t.itemId.id), 1)
                ]),
                _: 1
              }, 8, ["href"])) : (C(), L("span", t2, [
                t.itemId.prefix || t.itemId.prefix == null ? (C(), L(ie, { key: 0 }, [
                  me("#")
                ], 64)) : Y("", !0),
                me(" " + Z(t.itemId.id), 1)
              ]))
            ], 64)) : Y("", !0),
            t.timeStamp ? (C(), L("span", n2, [
              t.itemId ? (C(), L(ie, { key: 0 }, [
                me("-")
              ], 64)) : Y("", !0),
              me(" " + Z(t.timeStamp), 1)
            ])) : Y("", !0)
          ])) : Y("", !0),
          j("div", r2, [
            (C(!0), L(ie, null, et(e.pills, (a, i) => (C(), L(ie, { key: i }, [
              a.text ? (C(), L("span", {
                key: 0,
                class: "whitespace-nowrap rounded-md border bg-primary p-1 px-2 text-white",
                style: Wt({
                  backgroundColor: a.color ? a.color : null
                })
              }, Z(a.text), 5)) : Y("", !0)
            ], 64))), 128))
          ])
        ]),
        t.title ? (C(), L(ie, { key: 0 }, [
          !t.title.routeName && !t.title.href ? (C(), L("p", o2, Z(t.title.text), 1)) : (C(), H(S(ct), {
            key: 1,
            href: t.title.href ? t.title.href : n.route(t.title.routeName, t.title.routeData),
            class: "font-semibold"
          }, {
            default: z(() => [
              me(Z(t.title.text), 1)
            ]),
            _: 1
          }, 8, ["href"]))
        ], 64)) : Y("", !0),
        j("div", a2, [
          t.extraText ? (C(), L("p", i2, [
            r[0] || (r[0] = me(" Engineer Note: ")),
            j("span", s2, Z(t.extraText), 1)
          ])) : Y("", !0)
        ]),
        j("div", l2, [
          (C(!0), L(ie, null, et(e.options, (a, i) => (C(), L(ie, null, [
            !a.routeName && !a.href ? (C(), L("span", {
              key: 0,
              style: Wt({ color: a.color ? a.color : "#000" })
            }, Z(a.text), 5)) : (C(), H(S(ct), {
              key: 1,
              href: a.href ? a.href : n.route(a.routeName, a.routeData),
              style: Wt({ color: a.color ? a.color : "#000" })
            }, {
              default: z(() => [
                me(Z(a.text), 1)
              ]),
              _: 2
            }, 1032, ["href", "style"]))
          ], 64))), 256))
        ]),
        (o = t.amount) != null && o.amount ? (C(), L("div", u2, [
          j("span", null, Z(t.amount.text + S(L1)(t.amount.amount)), 1)
        ])) : Y("", !0),
        j("div", null, [
          U(n.$slots, "default")
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
const Ya = /* @__PURE__ */ (() => {
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
})(), Xa = {
  setData(e, t, n) {
    Ya.set(e, t, n);
  },
  getData(e, t) {
    return Ya.get(e, t);
  },
  removeData(e, t) {
    Ya.delete(e, t);
  }
}, c2 = 1e6, f2 = 1e3, Yi = "transitionend", d2 = (e) => e == null ? `${e}` : {}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(), p2 = (e) => {
  do
    e += Math.floor(Math.random() * c2);
  while (document.getElementById(e));
  return e;
}, ap = (e) => {
  let t = e.getAttribute("data-te-target");
  if (!t || t === "#") {
    let n = e.getAttribute("href");
    if (!n || !n.includes("#") && !n.startsWith("."))
      return null;
    n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), t = n && n !== "#" ? n.trim() : null;
  }
  return t;
}, h2 = (e) => {
  const t = ap(e);
  return t && document.querySelector(t) ? t : null;
}, Fs = (e) => {
  const t = ap(e);
  return t ? document.querySelector(t) : null;
}, m2 = (e) => {
  if (!e)
    return 0;
  let { transitionDuration: t, transitionDelay: n } = window.getComputedStyle(e);
  const r = Number.parseFloat(t), o = Number.parseFloat(n);
  return !r && !o ? 0 : (t = t.split(",")[0], n = n.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(n)) * f2);
}, y2 = (e) => {
  e.dispatchEvent(new Event(Yi));
}, ip = (e) => !e || typeof e != "object" ? !1 : (typeof e.jquery < "u" && (e = e[0]), typeof e.nodeType < "u"), dc = (e) => ip(e) ? e.jquery ? e[0] : e : typeof e == "string" && e.length > 0 ? document.querySelector(e) : null, pc = (e, t, n) => {
  Object.keys(n).forEach((r) => {
    const o = n[r], a = t[r], i = a && ip(a) ? "element" : d2(a);
    if (!new RegExp(o).test(i))
      throw new Error(
        `${e.toUpperCase()}: Option "${r}" provided type "${i}" but expected type "${o}".`
      );
  });
}, Do = (e) => {
  if (!e || e.getClientRects().length === 0)
    return !1;
  if (e.style && e.parentNode && e.parentNode.style) {
    const t = getComputedStyle(e), n = getComputedStyle(e.parentNode);
    return getComputedStyle(e).getPropertyValue("visibility") === "visible" || t.display !== "none" && n.display !== "none" && t.visibility !== "hidden";
  }
  return !1;
}, To = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled") ? !0 : typeof e.disabled < "u" ? e.disabled : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false", sp = () => {
  const { jQuery: e } = window;
  return e && !document.body.hasAttribute("data-te-no-jquery") ? e : null;
}, Ja = [], g2 = (e) => {
  document.readyState === "loading" ? (Ja.length || document.addEventListener("DOMContentLoaded", () => {
    Ja.forEach((t) => t());
  }), Ja.push(e)) : e();
}, Ot = () => document.documentElement.dir === "rtl", v2 = (e) => document.createElement(e), hc = (e) => {
  typeof e == "function" && e();
}, b2 = (e, t, n = !0) => {
  if (!n) {
    hc(e);
    return;
  }
  const r = 5, o = m2(t) + r;
  let a = !1;
  const i = ({ target: s }) => {
    s === t && (a = !0, t.removeEventListener(Yi, i), hc(e));
  };
  t.addEventListener(Yi, i), setTimeout(() => {
    a || y2(t);
  }, o);
}, w2 = /[^.]*(?=\..*)\.|.*/, x2 = /\..*/, S2 = /::\d+$/, Qa = {};
let mc = 1;
const O2 = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, E2 = /^(mouseenter|mouseleave)/i, lp = /* @__PURE__ */ new Set([
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
function up(e, t) {
  return t && `${t}::${mc++}` || e.uidEvent || mc++;
}
function cp(e) {
  const t = up(e);
  return e.uidEvent = t, Qa[t] = Qa[t] || {}, Qa[t];
}
function A2(e, t) {
  return function n(r) {
    return r.delegateTarget = e, n.oneOff && xe.off(e, r.type, t), t.apply(e, [r]);
  };
}
function C2(e, t, n) {
  return function r(o) {
    const a = e.querySelectorAll(t);
    for (let { target: i } = o; i && i !== this; i = i.parentNode)
      for (let s = a.length; s--; "")
        if (a[s] === i)
          return o.delegateTarget = i, r.oneOff && xe.off(e, o.type, n), n.apply(i, [o]);
    return null;
  };
}
function fp(e, t, n = null) {
  const r = Object.keys(e);
  for (let o = 0, a = r.length; o < a; o++) {
    const i = e[r[o]];
    if (i.originalHandler === t && i.delegationSelector === n)
      return i;
  }
  return null;
}
function dp(e, t, n) {
  const r = typeof t == "string", o = r ? n : t;
  let a = pp(e);
  return lp.has(a) || (a = e), [r, o, a];
}
function yc(e, t, n, r, o) {
  if (typeof t != "string" || !e)
    return;
  if (n || (n = r, r = null), E2.test(t)) {
    const h = (d) => function(w) {
      if (!w.relatedTarget || w.relatedTarget !== w.delegateTarget && !w.delegateTarget.contains(w.relatedTarget))
        return d.call(this, w);
    };
    r ? r = h(r) : n = h(n);
  }
  const [a, i, s] = dp(
    t,
    n,
    r
  ), c = cp(e), l = c[s] || (c[s] = {}), u = fp(
    l,
    i,
    a ? n : null
  );
  if (u) {
    u.oneOff = u.oneOff && o;
    return;
  }
  const f = up(
    i,
    t.replace(w2, "")
  ), p = a ? C2(e, n, r) : A2(e, n);
  p.delegationSelector = a ? n : null, p.originalHandler = i, p.oneOff = o, p.uidEvent = f, l[f] = p, e.addEventListener(s, p, a);
}
function Xi(e, t, n, r, o) {
  const a = fp(t[n], r, o);
  a && (e.removeEventListener(n, a, !!o), delete t[n][a.uidEvent]);
}
function P2(e, t, n, r) {
  const o = t[n] || {};
  Object.keys(o).forEach((a) => {
    if (a.includes(r)) {
      const i = o[a];
      Xi(
        e,
        t,
        n,
        i.originalHandler,
        i.delegationSelector
      );
    }
  });
}
function pp(e) {
  return e = e.replace(x2, ""), O2[e] || e;
}
const xe = {
  on(e, t, n, r) {
    yc(e, t, n, r, !1);
  },
  one(e, t, n, r) {
    yc(e, t, n, r, !0);
  },
  off(e, t, n, r) {
    if (typeof t != "string" || !e)
      return;
    const [o, a, i] = dp(
      t,
      n,
      r
    ), s = i !== t, c = cp(e), l = t.startsWith(".");
    if (typeof a < "u") {
      if (!c || !c[i])
        return;
      Xi(
        e,
        c,
        i,
        a,
        o ? n : null
      );
      return;
    }
    l && Object.keys(c).forEach((f) => {
      P2(
        e,
        c,
        f,
        t.slice(1)
      );
    });
    const u = c[i] || {};
    Object.keys(u).forEach((f) => {
      const p = f.replace(S2, "");
      if (!s || t.includes(p)) {
        const h = u[f];
        Xi(
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
    const r = sp(), o = pp(t), a = t !== o, i = lp.has(o);
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
}, k2 = "5.1.3";
class D2 {
  constructor(t) {
    t = dc(t), t && (this._element = t, Xa.setData(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    Xa.removeData(this._element, this.constructor.DATA_KEY), xe.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t) => {
      this[t] = null;
    });
  }
  _queueCallback(t, n, r = !0) {
    b2(t, n, r);
  }
  /** Static */
  static getInstance(t) {
    return Xa.getData(dc(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, n = {}) {
    return this.getInstance(t) || new this(t, typeof n == "object" ? n : null);
  }
  static get VERSION() {
    return k2;
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
function Za(e) {
  return e === "true" ? !0 : e === "false" ? !1 : e === Number(e).toString() ? Number(e) : e === "" || e === "null" ? null : e;
}
function ei(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const Fe = {
  setDataAttribute(e, t, n) {
    e.setAttribute(`data-te-${ei(t)}`, n);
  },
  removeDataAttribute(e, t) {
    e.removeAttribute(`data-te-${ei(t)}`);
  },
  getDataAttributes(e) {
    if (!e)
      return {};
    const t = {};
    return Object.keys(e.dataset).filter((n) => n.startsWith("te")).forEach((n) => {
      if (n.startsWith("teClass"))
        return;
      let r = n.replace(/^te/, "");
      r = r.charAt(0).toLowerCase() + r.slice(1, r.length), t[r] = Za(e.dataset[n]);
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
      r = r.charAt(0).toLowerCase() + r.slice(1, r.length), t[r] = Za(t[n]);
    }), t;
  },
  getDataAttribute(e, t) {
    return Za(
      e.getAttribute(`data-te-${ei(t)}`)
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
    e && ti(t).forEach((n) => {
      e.classList.contains(n) ? e.classList.remove(n) : e.classList.add(n);
    });
  },
  addClass(e, t) {
    ti(t).forEach(
      (n) => !e.classList.contains(n) && e.classList.add(n)
    );
  },
  addStyle(e, t) {
    Object.keys(t).forEach((n) => {
      e.style[n] = t[n];
    });
  },
  removeClass(e, t) {
    ti(t).forEach(
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
function ti(e) {
  return typeof e == "string" ? e.split(" ") : Array.isArray(e) ? e : !1;
}
const T2 = 3, qn = {
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
    for (; r && r.nodeType === Node.ELEMENT_NODE && r.nodeType !== T2; )
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
      (n) => !To(n) && Do(n)
    );
  }
};
Ot();
Ot();
Ot();
Ot();
Ot();
Ot();
let gc = [];
const $2 = (e, t = "hide") => {
  const n = `click.dismiss${e.EVENT_KEY}`, r = e.NAME;
  gc.includes(r) || (gc.push(r), xe.on(
    document,
    n,
    `[data-te-${r}-dismiss]`,
    function(o) {
      if (["A", "AREA"].includes(this.tagName) && o.preventDefault(), To(this))
        return;
      const a = Fs(this) || this.closest(`.${r}`) || this.closest(`[data-te-${r}-init]`);
      a && e.getOrCreateInstance(a)[t]();
    }
  ));
}, ni = "alert", F2 = "te.alert", hp = `.${F2}`, I2 = `close${hp}`, R2 = `closed${hp}`, Xn = "data-te-alert-show", L2 = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, vc = {
  animation: !0,
  autohide: !0,
  delay: 1e3
}, _2 = {
  fadeIn: "animate-[fade-in_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none",
  fadeOut: "animate-[fade-out_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none"
}, N2 = {
  fadeIn: "string",
  fadeOut: "string"
};
class ao extends D2 {
  constructor(t, n, r) {
    super(t), this._element = t, this._config = this._getConfig(n), this._classes = this._getClasses(r), this._didInit = !1, this._init();
  }
  // Getters
  static get DefaultType() {
    return L2;
  }
  static get Default() {
    return vc;
  }
  static get NAME() {
    return ni;
  }
  // Public
  close() {
    if (xe.trigger(this._element, I2).defaultPrevented)
      return;
    let t = 0;
    this._config.animation && (t = 300, Fe.addClass(this._element, this._classes.fadeOut)), this._element.removeAttribute(Xn), setTimeout(() => {
      this._queueCallback(
        () => this._destroyElement(),
        this._element,
        this._config.animation
      );
    }, t);
  }
  show() {
    if (this._element) {
      if (this._config.autohide && this._setupAutohide(), !this._element.hasAttribute(Xn) && (Fe.removeClass(this._element, "hidden"), Fe.addClass(this._element, "block"), Do(this._element))) {
        const t = (n) => {
          Fe.removeClass(this._element, "hidden"), Fe.addClass(this._element, "block"), xe.off(n.target, "animationend", t);
        };
        this._element.setAttribute(Xn, ""), xe.on(this._element, "animationend", t);
      }
      this._config.animation && (Fe.removeClass(this._element, this._classes.fadeOut), Fe.addClass(this._element, this._classes.fadeIn));
    }
  }
  hide() {
    if (this._element && this._element.hasAttribute(Xn)) {
      this._element.removeAttribute(Xn);
      const t = (n) => {
        Fe.addClass(this._element, "hidden"), Fe.removeClass(this._element, "block"), this._timeout !== null && (clearTimeout(this._timeout), this._timeout = null), xe.off(n.target, "animationend", t);
      };
      xe.on(this._element, "animationend", t), Fe.removeClass(this._element, this._classes.fadeIn), Fe.addClass(this._element, this._classes.fadeOut);
    }
  }
  // Private
  _init() {
    this._didInit || ($2(ao, "close"), this._didInit = !0);
  }
  _getConfig(t) {
    return t = {
      ...vc,
      ...Fe.getDataAttributes(this._element),
      ...typeof t == "object" && t ? t : {}
    }, pc(ni, t, this.constructor.DefaultType), t;
  }
  _getClasses(t) {
    const n = Fe.getDataClassAttributes(this._element);
    return t = {
      ..._2,
      ...n,
      ...t
    }, pc(ni, t, N2), t;
  }
  _setupAutohide() {
    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }
  _destroyElement() {
    this._element.remove(), xe.trigger(this._element, R2), this.dispose();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = ao.getOrCreateInstance(this);
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
      return function(A) {
        if (b[A] === void 0) {
          var P = document.querySelector(A);
          if (window.HTMLIFrameElement && P instanceof window.HTMLIFrameElement)
            try {
              P = P.contentDocument.head;
            } catch {
              P = null;
            }
          b[A] = P;
        }
        return b[A];
      };
    }(), c = [];
    function l(b) {
      for (var A = -1, P = 0; P < c.length; P++)
        if (c[P].identifier === b) {
          A = P;
          break;
        }
      return A;
    }
    function u(b, A) {
      for (var P = {}, $ = [], F = 0; F < b.length; F++) {
        var B = b[F], D = A.base ? B[0] + A.base : B[0], k = P[D] || 0, N = "".concat(D, " ").concat(k);
        P[D] = k + 1;
        var m = l(N), O = { css: B[1], media: B[2], sourceMap: B[3] };
        m !== -1 ? (c[m].references++, c[m].updater(O)) : c.push({ identifier: N, updater: v(O, A), references: 1 }), $.push(N);
      }
      return $;
    }
    function f(b) {
      var A = document.createElement("style"), P = b.attributes || {};
      if (P.nonce === void 0) {
        var $ = a.nc;
        $ && (P.nonce = $);
      }
      if (Object.keys(P).forEach(function(B) {
        A.setAttribute(B, P[B]);
      }), typeof b.insert == "function")
        b.insert(A);
      else {
        var F = s(b.insert || "head");
        if (!F)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        F.appendChild(A);
      }
      return A;
    }
    var p, h = (p = [], function(b, A) {
      return p[b] = A, p.filter(Boolean).join(`
`);
    });
    function d(b, A, P, $) {
      var F = P ? "" : $.media ? "@media ".concat($.media, " {").concat($.css, "}") : $.css;
      if (b.styleSheet)
        b.styleSheet.cssText = h(A, F);
      else {
        var B = document.createTextNode(F), D = b.childNodes;
        D[A] && b.removeChild(D[A]), D.length ? b.insertBefore(B, D[A]) : b.appendChild(B);
      }
    }
    function w(b, A, P) {
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
    function v(b, A) {
      var P, $, F;
      if (A.singleton) {
        var B = y++;
        P = g || (g = f(A)), $ = d.bind(null, P, B, !1), F = d.bind(null, P, B, !0);
      } else
        P = f(A), $ = w.bind(null, P, A), F = function() {
          (function(D) {
            if (D.parentNode === null)
              return !1;
            D.parentNode.removeChild(D);
          })(P);
        };
      return $(b), function(D) {
        if (D) {
          if (D.css === b.css && D.media === b.media && D.sourceMap === b.sourceMap)
            return;
          $(b = D);
        } else
          F();
      };
    }
    r.exports = function(b, A) {
      (A = A || {}).singleton || typeof A.singleton == "boolean" || (A.singleton = (i === void 0 && (i = !!(window && document && document.all && !window.atob)), i));
      var P = u(b = b || [], A);
      return function($) {
        if ($ = $ || [], Object.prototype.toString.call($) === "[object Array]") {
          for (var F = 0; F < P.length; F++) {
            var B = l(P[F]);
            c[B].references--;
          }
          for (var D = u($, A), k = 0; k < P.length; k++) {
            var N = l(P[k]);
            c[N].references === 0 && (c[N].updater(), c.splice(N, 1));
          }
          P = D;
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
p2("chips-input-");
const zt = {
  plugins: {
    legend: {
      labels: {
        color: "rgb(102,102,102)"
      }
    }
  }
}, M2 = {
  line: {
    options: {
      ...zt,
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
      ...zt,
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
      ...zt,
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
      ...zt,
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
      ...zt,
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
      ...zt,
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
      ...zt,
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
      ...zt,
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
var $o = function(e) {
  this.element = e, this.handlers = {};
}, mp = { isEmpty: { configurable: !0 } };
$o.prototype.bind = function(e, t) {
  typeof this.handlers[e] > "u" && (this.handlers[e] = []), this.handlers[e].push(t), this.element.addEventListener(e, t, !1);
};
$o.prototype.unbind = function(e, t) {
  var n = this;
  this.handlers[e] = this.handlers[e].filter(function(r) {
    return t && r !== t ? !0 : (n.element.removeEventListener(e, r, !1), !1);
  });
};
$o.prototype.unbindAll = function() {
  for (var e in this.handlers)
    this.unbind(e);
};
mp.isEmpty.get = function() {
  var e = this;
  return Object.keys(this.handlers).every(
    function(t) {
      return e.handlers[t].length === 0;
    }
  );
};
Object.defineProperties($o.prototype, mp);
typeof document < "u" && "WebkitAppearance" in document.documentElement.style;
v2("div");
const B2 = (e) => {
  g2(() => {
    const t = sp();
    if (t) {
      const n = e.NAME, r = t.fn[n];
      t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = () => (t.fn[n] = r, e.jQueryInterface);
    }
  });
}, j2 = (e, t) => {
  xe.on(
    document,
    `click.te.${e.NAME}`,
    t,
    function(n) {
      n.preventDefault(), e.getOrCreateInstance(this).toggle();
    }
  );
}, q2 = (e, t) => {
  xe.on(
    document,
    `click.te.${e.NAME}.data-api`,
    t,
    function(n) {
      ["A", "AREA"].includes(this.tagName) && n.preventDefault(), !To(this) && e.getOrCreateInstance(this).show();
    }
  );
}, U2 = (e, t) => {
  xe.on(
    document,
    `click.te.${e.NAME}.data-api`,
    t,
    function(n) {
      const r = Fs(this);
      if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), To(this))
        return;
      xe.one(r, e.EVENT_HIDDEN, () => {
        Do(this) && this.focus();
      });
      const o = qn.findOne(e.OPEN_SELECTOR);
      o && o !== r && e.getInstance(o).hide(), e.getOrCreateInstance(r).toggle(this);
    }
  );
}, z2 = (e, t) => {
  xe.on(
    document,
    `click.te.${e.NAME}`,
    t,
    (n) => {
      n.preventDefault();
      const r = n.target.closest(t);
      e.getOrCreateInstance(r).toggle();
    }
  );
}, V2 = (e, t) => {
  xe.on(
    document,
    `click.te.${e.NAME}`,
    t,
    function(n) {
      const r = Fs(this);
      ["A", "AREA"].includes(this.tagName) && n.preventDefault(), xe.one(r, e.EVENT_SHOW, (a) => {
        a.defaultPrevented || xe.one(r, e.EVENT_HIDDEN, () => {
          Do(this) && this.focus();
        });
      });
      const o = qn.findOne(
        `[${e.OPEN_SELECTOR}="true"]`
      );
      o && e.getInstance(o).hide(), e.getOrCreateInstance(r).toggle(this);
    }
  );
}, H2 = (e, t) => {
  xe.one(
    document,
    "mousedown",
    t,
    e.autoInitial(new e())
  );
}, W2 = (e, t) => {
  xe.on(
    document,
    `click.te.${e.NAME}.data-api`,
    t,
    function(n) {
      (n.target.tagName === "A" || n.delegateTarget && n.delegateTarget.tagName === "A") && n.preventDefault();
      const r = h2(this);
      qn.find(r).forEach((o) => {
        e.getOrCreateInstance(o, { toggle: !1 }).toggle();
      });
    }
  );
}, K2 = (e, t) => {
  [].slice.call(
    document.querySelectorAll(t)
  ).map(function(n) {
    return new e(n);
  });
}, G2 = (e, t) => {
  [].slice.call(
    document.querySelectorAll(t)
  ).map(function(n) {
    return new e(n);
  });
}, Y2 = (e, t) => {
  qn.find(t).forEach((n) => {
    new e(n);
  }), xe.on(
    document,
    `click.te.${e.NAME}.data-api`,
    `${t} img:not([data-te-lightbox-disabled])`,
    e.toggle()
  );
}, X2 = (e, t) => {
  const n = (a) => a[0] === "{" && a[a.length - 1] === "}" || a[0] === "[" && a[a.length - 1] === "]", r = (a) => typeof a != "string" ? a : n(a) ? JSON.parse(a.replace(/'/g, '"')) : a, o = (a) => {
    const i = {};
    return Object.keys(a).forEach((s) => {
      if (s.match(/dataset.*/)) {
        const c = s.slice(7, 8).toLowerCase().concat(s.slice(8));
        i[c] = r(a[s]);
      }
    }), i;
  };
  qn.find(t).forEach((a) => {
    if (Fe.getDataAttribute(a, "chart") !== "bubble" && Fe.getDataAttribute(a, "chart") !== "scatter") {
      const i = Fe.getDataAttributes(a), s = {
        data: {
          datasets: [o(i)]
        }
      };
      return i.chart && (s.type = i.chart), i.labels && (s.data.labels = JSON.parse(i.labels.replace(/'/g, '"'))), new e(a, {
        ...s,
        ...M2[s.type]
      });
    }
    return null;
  });
};
class J2 {
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
const Ji = new J2(), tr = {
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
    advanced: X2
  },
  // togglers
  button: {
    name: "Button",
    selector: "[data-te-toggle='button']",
    isToggler: !0,
    callback: z2
  },
  collapse: {
    name: "Collapse",
    selector: "[data-te-collapse-init]",
    isToggler: !0,
    callback: W2
  },
  dropdown: {
    name: "Dropdown",
    selector: "[data-te-dropdown-toggle-ref]",
    isToggler: !0,
    callback: j2
  },
  modal: {
    name: "Modal",
    selector: "[data-te-toggle='modal']",
    isToggler: !0,
    callback: V2
  },
  ripple: {
    name: "Ripple",
    selector: "[data-te-ripple-init]",
    isToggler: !0,
    callback: H2
  },
  offcanvas: {
    name: "Offcanvas",
    selector: "[data-te-offcanvas-toggle]",
    isToggler: !0,
    callback: U2
  },
  tab: {
    name: "Tab",
    selector: "[data-te-toggle='tab'], [data-te-toggle='pill'], [data-te-toggle='list']",
    isToggler: !0,
    callback: q2
  },
  tooltip: {
    name: "Tooltip",
    selector: "[data-te-toggle='tooltip']",
    isToggler: !1,
    callback: K2
  },
  popover: {
    name: "Popover",
    selector: "[data-te-toggle='popover']",
    isToggler: !0,
    callback: G2
  },
  lightbox: {
    name: "Lightbox",
    selector: "[data-te-lightbox-init]",
    isToggler: !0,
    callback: Y2
  },
  touch: {
    name: "Touch",
    selector: "[data-te-touch-init]"
  }
}, Q2 = (e) => tr[e.NAME] || null, Z2 = (e, t) => {
  if (!e || !t.allowReinits && Ji.isInited(e.NAME))
    return;
  Ji.add(e.NAME);
  const n = Q2(e), r = (n == null ? void 0 : n.isToggler) || !1;
  if (B2(e), n != null && n.advanced) {
    n == null || n.advanced(e, n == null ? void 0 : n.selector);
    return;
  }
  if (r) {
    n == null || n.callback(e, n == null ? void 0 : n.selector);
    return;
  }
  qn.find(n == null ? void 0 : n.selector).forEach((o) => {
    let a = e.getInstance(o);
    a || (a = new e(o), n != null && n.onInit && a[n.onInit]());
  });
}, ex = (e, t) => {
  e.forEach((n) => Z2(n, t));
}, tx = {
  allowReinits: !1,
  checkOtherImports: !1
}, nx = (e, t = {}) => {
  t = { ...tx, ...t };
  const n = Object.keys(tr).map((r) => {
    if (document.querySelector(tr[r].selector)) {
      const o = e[tr[r].name];
      return !o && !Ji.isInited(r) && t.checkOtherImports && console.warn(
        `Please import ${tr[r].name} from "tw-elements" package and add it to a object parameter inside "initTE" function`
      ), o;
    }
  });
  ex(n, t);
}, rx = { role: "alert" }, ox = {
  class: "mt-2 hidden w-full items-center rounded bg-primary-100 px-6 py-1 text-base text-neutral-800 shadow-xs data-te-alert-show:inline-flex sm:rounded-lg",
  role: "alert",
  "data-te-alert-init": "",
  "data-te-alert-show": ""
}, CA = {
  __name: "Alert",
  props: {
    message: String
  },
  setup(e) {
    return Ee(() => {
      nx({ Alert: ao });
    }), (t, n) => (C(), L("div", rx, [
      j("div", null, [
        j("div", ox, [
          U(t.$slots, "default"),
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
}, ax = ["top", "right", "bottom", "left"], Qt = Math.min, Qe = Math.max, io = Math.round, Lr = Math.floor, xt = (e) => ({
  x: e,
  y: e
}), ix = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, sx = {
  start: "end",
  end: "start"
};
function Qi(e, t, n) {
  return Qe(e, Qt(t, n));
}
function Lt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function _t(e) {
  return e.split("-")[0];
}
function Un(e) {
  return e.split("-")[1];
}
function Is(e) {
  return e === "x" ? "y" : "x";
}
function Rs(e) {
  return e === "y" ? "height" : "width";
}
function Ft(e) {
  return ["top", "bottom"].includes(_t(e)) ? "y" : "x";
}
function Ls(e) {
  return Is(Ft(e));
}
function lx(e, t, n) {
  n === void 0 && (n = !1);
  const r = Un(e), o = Ls(e), a = Rs(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = so(i)), [i, so(i)];
}
function ux(e) {
  const t = so(e);
  return [Zi(e), t, Zi(t)];
}
function Zi(e) {
  return e.replace(/start|end/g, (t) => sx[t]);
}
function cx(e, t, n) {
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
function fx(e, t, n, r) {
  const o = Un(e);
  let a = cx(_t(e), n === "start", r);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(Zi)))), a;
}
function so(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ix[t]);
}
function dx(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function yp(e) {
  return typeof e != "number" ? dx(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function lo(e) {
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
function bc(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = Ft(t), i = Ls(t), s = Rs(i), c = _t(t), l = a === "y", u = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, p = r[s] / 2 - o[s] / 2;
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
  switch (Un(t)) {
    case "start":
      h[i] -= p * (n && l ? -1 : 1);
      break;
    case "end":
      h[i] += p * (n && l ? -1 : 1);
      break;
  }
  return h;
}
const px = async (e, t, n) => {
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
  } = bc(l, r, c), p = r, h = {}, d = 0;
  for (let w = 0; w < s.length; w++) {
    const {
      name: g,
      fn: y
    } = s[w], {
      x: v,
      y: b,
      data: A,
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
        ...A
      }
    }, P && d <= 50 && (d++, typeof P == "object" && (P.placement && (p = P.placement), P.rects && (l = P.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : P.rects), {
      x: u,
      y: f
    } = bc(l, p, c)), w = -1);
  }
  return {
    x: u,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: h
  };
};
async function cr(e, t) {
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
  } = Lt(t, e), d = yp(h), g = s[p ? f === "floating" ? "reference" : "floating" : f], y = lo(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), v = f === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, b = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), A = await (a.isElement == null ? void 0 : a.isElement(b)) ? await (a.getScale == null ? void 0 : a.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, P = lo(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: v,
    offsetParent: b,
    strategy: c
  }) : v);
  return {
    top: (y.top - P.top + d.top) / A.y,
    bottom: (P.bottom - y.bottom + d.bottom) / A.y,
    left: (y.left - P.left + d.left) / A.x,
    right: (P.right - y.right + d.right) / A.x
  };
}
const hx = (e) => ({
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
    } = Lt(e, t) || {};
    if (l == null)
      return {};
    const f = yp(u), p = {
      x: n,
      y: r
    }, h = Ls(o), d = Rs(h), w = await i.getDimensions(l), g = h === "y", y = g ? "top" : "left", v = g ? "bottom" : "right", b = g ? "clientHeight" : "clientWidth", A = a.reference[d] + a.reference[h] - p[h] - a.floating[d], P = p[h] - a.reference[h], $ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
    let F = $ ? $[b] : 0;
    (!F || !await (i.isElement == null ? void 0 : i.isElement($))) && (F = s.floating[b] || a.floating[d]);
    const B = A / 2 - P / 2, D = F / 2 - w[d] / 2 - 1, k = Qt(f[y], D), N = Qt(f[v], D), m = k, O = F - w[d] - N, E = F / 2 - w[d] / 2 + B, x = Qi(m, E, O), W = !c.arrow && Un(o) != null && E !== x && a.reference[d] / 2 - (E < m ? k : N) - w[d] / 2 < 0, M = W ? E < m ? E - m : E - O : 0;
    return {
      [h]: p[h] + M,
      data: {
        [h]: x,
        centerOffset: E - x - M,
        ...W && {
          alignmentOffset: M
        }
      },
      reset: W
    };
  }
}), mx = function(e) {
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
      } = Lt(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const y = _t(o), v = Ft(s), b = _t(s) === s, A = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), P = p || (b || !w ? [so(s)] : ux(s)), $ = d !== "none";
      !p && $ && P.push(...fx(s, w, d, A));
      const F = [s, ...P], B = await cr(t, g), D = [];
      let k = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (u && D.push(B[y]), f) {
        const x = lx(o, i, A);
        D.push(B[x[0]], B[x[1]]);
      }
      if (k = [...k, {
        placement: o,
        overflows: D
      }], !D.every((x) => x <= 0)) {
        var N, m;
        const x = (((N = a.flip) == null ? void 0 : N.index) || 0) + 1, W = F[x];
        if (W) {
          var O;
          const R = f === "alignment" ? v !== Ft(W) : !1, K = ((O = k[0]) == null ? void 0 : O.overflows[0]) > 0;
          if (!R || K)
            return {
              data: {
                index: x,
                overflows: k
              },
              reset: {
                placement: W
              }
            };
        }
        let M = (m = k.filter((R) => R.overflows[0] <= 0).sort((R, K) => R.overflows[1] - K.overflows[1])[0]) == null ? void 0 : m.placement;
        if (!M)
          switch (h) {
            case "bestFit": {
              var E;
              const R = (E = k.filter((K) => {
                if ($) {
                  const oe = Ft(K.placement);
                  return oe === v || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  oe === "y";
                }
                return !0;
              }).map((K) => [K.placement, K.overflows.filter((oe) => oe > 0).reduce((oe, Pe) => oe + Pe, 0)]).sort((K, oe) => K[1] - oe[1])[0]) == null ? void 0 : E[0];
              R && (M = R);
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
function wc(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function xc(e) {
  return ax.some((t) => e[t] >= 0);
}
const yx = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Lt(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await cr(t, {
            ...o,
            elementContext: "reference"
          }), i = wc(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: xc(i)
            }
          };
        }
        case "escaped": {
          const a = await cr(t, {
            ...o,
            altBoundary: !0
          }), i = wc(a, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: xc(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function gx(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = _t(n), s = Un(n), c = Ft(n) === "y", l = ["left", "top"].includes(i) ? -1 : 1, u = a && c ? -1 : 1, f = Lt(t, e);
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
const vx = function(e) {
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
      } = t, c = await gx(t, e);
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
}, bx = function(e) {
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
      } = Lt(e, t), l = {
        x: n,
        y: r
      }, u = await cr(t, c), f = Ft(_t(o)), p = Is(f);
      let h = l[p], d = l[f];
      if (a) {
        const g = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", v = h + u[g], b = h - u[y];
        h = Qi(v, h, b);
      }
      if (i) {
        const g = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", v = d + u[g], b = d - u[y];
        d = Qi(v, d, b);
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
}, wx = function(e) {
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
      } = Lt(e, t), u = {
        x: n,
        y: r
      }, f = Ft(o), p = Is(f);
      let h = u[p], d = u[f];
      const w = Lt(s, t), g = typeof w == "number" ? {
        mainAxis: w,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...w
      };
      if (c) {
        const b = p === "y" ? "height" : "width", A = a.reference[p] - a.floating[b] + g.mainAxis, P = a.reference[p] + a.reference[b] - g.mainAxis;
        h < A ? h = A : h > P && (h = P);
      }
      if (l) {
        var y, v;
        const b = p === "y" ? "width" : "height", A = ["top", "left"].includes(_t(o)), P = a.reference[f] - a.floating[b] + (A && ((y = i.offset) == null ? void 0 : y[f]) || 0) + (A ? 0 : g.crossAxis), $ = a.reference[f] + a.reference[b] + (A ? 0 : ((v = i.offset) == null ? void 0 : v[f]) || 0) - (A ? g.crossAxis : 0);
        d < P ? d = P : d > $ && (d = $);
      }
      return {
        [p]: h,
        [f]: d
      };
    }
  };
}, xx = function(e) {
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
      } = Lt(e, t), u = await cr(t, l), f = _t(o), p = Un(o), h = Ft(o) === "y", {
        width: d,
        height: w
      } = a.floating;
      let g, y;
      f === "top" || f === "bottom" ? (g = f, y = p === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (y = f, g = p === "end" ? "top" : "bottom");
      const v = w - u.top - u.bottom, b = d - u.left - u.right, A = Qt(w - u[g], v), P = Qt(d - u[y], b), $ = !t.middlewareData.shift;
      let F = A, B = P;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (B = b), (r = t.middlewareData.shift) != null && r.enabled.y && (F = v), $ && !p) {
        const k = Qe(u.left, 0), N = Qe(u.right, 0), m = Qe(u.top, 0), O = Qe(u.bottom, 0);
        h ? B = d - 2 * (k !== 0 || N !== 0 ? k + N : Qe(u.left, u.right)) : F = w - 2 * (m !== 0 || O !== 0 ? m + O : Qe(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: B,
        availableHeight: F
      });
      const D = await i.getDimensions(s.floating);
      return d !== D.width || w !== D.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Fo() {
  return typeof window < "u";
}
function yn(e) {
  return _s(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ze(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function At(e) {
  var t;
  return (t = (_s(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function _s(e) {
  return Fo() ? e instanceof Node || e instanceof Ze(e).Node : !1;
}
function ft(e) {
  return Fo() ? e instanceof Element || e instanceof Ze(e).Element : !1;
}
function Et(e) {
  return Fo() ? e instanceof HTMLElement || e instanceof Ze(e).HTMLElement : !1;
}
function Sc(e) {
  return !Fo() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ze(e).ShadowRoot;
}
function Or(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = dt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Sx(e) {
  return ["table", "td", "th"].includes(yn(e));
}
function Io(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Ns(e) {
  const t = Ms(), n = ft(e) ? dt(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Ox(e) {
  let t = Zt(e);
  for (; Et(t) && !Ln(t); ) {
    if (Ns(t))
      return t;
    if (Io(t))
      return null;
    t = Zt(t);
  }
  return null;
}
function Ms() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ln(e) {
  return ["html", "body", "#document"].includes(yn(e));
}
function dt(e) {
  return Ze(e).getComputedStyle(e);
}
function Ro(e) {
  return ft(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Zt(e) {
  if (yn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Sc(e) && e.host || // Fallback.
    At(e)
  );
  return Sc(t) ? t.host : t;
}
function gp(e) {
  const t = Zt(e);
  return Ln(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Et(t) && Or(t) ? t : gp(t);
}
function fr(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = gp(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = Ze(o);
  if (a) {
    const s = es(i);
    return t.concat(i, i.visualViewport || [], Or(o) ? o : [], s && n ? fr(s) : []);
  }
  return t.concat(o, fr(o, [], n));
}
function es(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function vp(e) {
  const t = dt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Et(e), a = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, s = io(n) !== a || io(r) !== i;
  return s && (n = a, r = i), {
    width: n,
    height: r,
    $: s
  };
}
function Bs(e) {
  return ft(e) ? e : e.contextElement;
}
function Fn(e) {
  const t = Bs(e);
  if (!Et(t))
    return xt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = vp(t);
  let i = (a ? io(n.width) : n.width) / r, s = (a ? io(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const Ex = /* @__PURE__ */ xt(0);
function bp(e) {
  const t = Ze(e);
  return !Ms() || !t.visualViewport ? Ex : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ax(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ze(e) ? !1 : t;
}
function hn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Bs(e);
  let i = xt(1);
  t && (r ? ft(r) && (i = Fn(r)) : i = Fn(e));
  const s = Ax(a, n, r) ? bp(a) : xt(0);
  let c = (o.left + s.x) / i.x, l = (o.top + s.y) / i.y, u = o.width / i.x, f = o.height / i.y;
  if (a) {
    const p = Ze(a), h = r && ft(r) ? Ze(r) : r;
    let d = p, w = es(d);
    for (; w && r && h !== d; ) {
      const g = Fn(w), y = w.getBoundingClientRect(), v = dt(w), b = y.left + (w.clientLeft + parseFloat(v.paddingLeft)) * g.x, A = y.top + (w.clientTop + parseFloat(v.paddingTop)) * g.y;
      c *= g.x, l *= g.y, u *= g.x, f *= g.y, c += b, l += A, d = Ze(w), w = es(d);
    }
  }
  return lo({
    width: u,
    height: f,
    x: c,
    y: l
  });
}
function js(e, t) {
  const n = Ro(e).scrollLeft;
  return t ? t.left + n : hn(At(e)).left + n;
}
function wp(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    js(e, r)
  )), a = r.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function Cx(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", i = At(r), s = t ? Io(t.floating) : !1;
  if (r === i || s && a)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = xt(1);
  const u = xt(0), f = Et(r);
  if ((f || !f && !a) && ((yn(r) !== "body" || Or(i)) && (c = Ro(r)), Et(r))) {
    const h = hn(r);
    l = Fn(r), u.x = h.x + r.clientLeft, u.y = h.y + r.clientTop;
  }
  const p = i && !f && !a ? wp(i, c, !0) : xt(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + p.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + p.y
  };
}
function Px(e) {
  return Array.from(e.getClientRects());
}
function kx(e) {
  const t = At(e), n = Ro(e), r = e.ownerDocument.body, o = Qe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Qe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + js(e);
  const s = -n.scrollTop;
  return dt(r).direction === "rtl" && (i += Qe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
function Dx(e, t) {
  const n = Ze(e), r = At(e), o = n.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, s = 0, c = 0;
  if (o) {
    a = o.width, i = o.height;
    const l = Ms();
    (!l || l && t === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: c
  };
}
function Tx(e, t) {
  const n = hn(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = Et(e) ? Fn(e) : xt(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: i,
    height: s,
    x: c,
    y: l
  };
}
function Oc(e, t, n) {
  let r;
  if (t === "viewport")
    r = Dx(e, n);
  else if (t === "document")
    r = kx(At(e));
  else if (ft(t))
    r = Tx(t, n);
  else {
    const o = bp(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return lo(r);
}
function xp(e, t) {
  const n = Zt(e);
  return n === t || !ft(n) || Ln(n) ? !1 : dt(n).position === "fixed" || xp(n, t);
}
function $x(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = fr(e, [], !1).filter((s) => ft(s) && yn(s) !== "body"), o = null;
  const a = dt(e).position === "fixed";
  let i = a ? Zt(e) : e;
  for (; ft(i) && !Ln(i); ) {
    const s = dt(i), c = Ns(i);
    !c && s.position === "fixed" && (o = null), (a ? !c && !o : !c && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Or(i) && !c && xp(e, i)) ? r = r.filter((u) => u !== i) : o = s, i = Zt(i);
  }
  return t.set(e, r), r;
}
function Fx(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Io(t) ? [] : $x(t, this._c) : [].concat(n), r], s = i[0], c = i.reduce((l, u) => {
    const f = Oc(t, u, o);
    return l.top = Qe(f.top, l.top), l.right = Qt(f.right, l.right), l.bottom = Qt(f.bottom, l.bottom), l.left = Qe(f.left, l.left), l;
  }, Oc(t, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Ix(e) {
  const {
    width: t,
    height: n
  } = vp(e);
  return {
    width: t,
    height: n
  };
}
function Rx(e, t, n) {
  const r = Et(t), o = At(t), a = n === "fixed", i = hn(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = xt(0);
  function l() {
    c.x = js(o);
  }
  if (r || !r && !a)
    if ((yn(t) !== "body" || Or(o)) && (s = Ro(t)), r) {
      const h = hn(t, !0, a, t);
      c.x = h.x + t.clientLeft, c.y = h.y + t.clientTop;
    } else o && l();
  a && !r && o && l();
  const u = o && !r && !a ? wp(o, s) : xt(0), f = i.left + s.scrollLeft - c.x - u.x, p = i.top + s.scrollTop - c.y - u.y;
  return {
    x: f,
    y: p,
    width: i.width,
    height: i.height
  };
}
function ri(e) {
  return dt(e).position === "static";
}
function Ec(e, t) {
  if (!Et(e) || dt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return At(e) === n && (n = n.ownerDocument.body), n;
}
function Sp(e, t) {
  const n = Ze(e);
  if (Io(e))
    return n;
  if (!Et(e)) {
    let o = Zt(e);
    for (; o && !Ln(o); ) {
      if (ft(o) && !ri(o))
        return o;
      o = Zt(o);
    }
    return n;
  }
  let r = Ec(e, t);
  for (; r && Sx(r) && ri(r); )
    r = Ec(r, t);
  return r && Ln(r) && ri(r) && !Ns(r) ? n : r || Ox(e) || n;
}
const Lx = async function(e) {
  const t = this.getOffsetParent || Sp, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Rx(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function _x(e) {
  return dt(e).direction === "rtl";
}
const Nx = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Cx,
  getDocumentElement: At,
  getClippingRect: Fx,
  getOffsetParent: Sp,
  getElementRects: Lx,
  getClientRects: Px,
  getDimensions: Ix,
  getScale: Fn,
  isElement: ft,
  isRTL: _x
};
function Op(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Mx(e, t) {
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
    const d = Lr(f), w = Lr(o.clientWidth - (u + p)), g = Lr(o.clientHeight - (f + h)), y = Lr(u), b = {
      rootMargin: -d + "px " + -w + "px " + -g + "px " + -y + "px",
      threshold: Qe(0, Qt(1, c)) || 1
    };
    let A = !0;
    function P($) {
      const F = $[0].intersectionRatio;
      if (F !== c) {
        if (!A)
          return i();
        F ? i(!1, F) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      F === 1 && !Op(l, e.getBoundingClientRect()) && i(), A = !1;
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
function Bx(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = Bs(e), u = o || a ? [...l ? fr(l) : [], ...fr(t)] : [];
  u.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), a && y.addEventListener("resize", n);
  });
  const f = l && s ? Mx(l, n) : null;
  let p = -1, h = null;
  i && (h = new ResizeObserver((y) => {
    let [v] = y;
    v && v.target === l && h && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var b;
      (b = h) == null || b.observe(t);
    })), n();
  }), l && !c && h.observe(l), h.observe(t));
  let d, w = c ? hn(e) : null;
  c && g();
  function g() {
    const y = hn(e);
    w && !Op(w, y) && n(), w = y, d = requestAnimationFrame(g);
  }
  return n(), () => {
    var y;
    u.forEach((v) => {
      o && v.removeEventListener("scroll", n), a && v.removeEventListener("resize", n);
    }), f == null || f(), (y = h) == null || y.disconnect(), h = null, c && cancelAnimationFrame(d);
  };
}
const jx = vx, qx = bx, Ac = mx, Ux = xx, zx = yx, Vx = hx, Hx = wx, Wx = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Nx,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return px(e, t, {
    ...o,
    platform: a
  });
};
function Kx(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function ts(e) {
  if (Kx(e)) {
    const t = e.$el;
    return _s(t) && yn(t) === "#comment" ? null : t;
  }
  return e;
}
function Cn(e) {
  return typeof e == "function" ? e() : S(e);
}
function Gx(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = ts(Cn(e.element));
      return n == null ? {} : Vx({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Ep(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Cc(e, t) {
  const n = Ep(e);
  return Math.round(t * n) / n;
}
function Yx(e, t, n) {
  n === void 0 && (n = {});
  const r = n.whileElementsMounted, o = G(() => {
    var F;
    return (F = Cn(n.open)) != null ? F : !0;
  }), a = G(() => Cn(n.middleware)), i = G(() => {
    var F;
    return (F = Cn(n.placement)) != null ? F : "bottom";
  }), s = G(() => {
    var F;
    return (F = Cn(n.strategy)) != null ? F : "absolute";
  }), c = G(() => {
    var F;
    return (F = Cn(n.transform)) != null ? F : !0;
  }), l = G(() => ts(e.value)), u = G(() => ts(t.value)), f = q(0), p = q(0), h = q(s.value), d = q(i.value), w = co({}), g = q(!1), y = G(() => {
    const F = {
      position: h.value,
      left: "0",
      top: "0"
    };
    if (!u.value)
      return F;
    const B = Cc(u.value, f.value), D = Cc(u.value, p.value);
    return c.value ? {
      ...F,
      transform: "translate(" + B + "px, " + D + "px)",
      ...Ep(u.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: h.value,
      left: B + "px",
      top: D + "px"
    };
  });
  let v;
  function b() {
    if (l.value == null || u.value == null)
      return;
    const F = o.value;
    Wx(l.value, u.value, {
      middleware: a.value,
      placement: i.value,
      strategy: s.value
    }).then((B) => {
      f.value = B.x, p.value = B.y, h.value = B.strategy, d.value = B.placement, w.value = B.middlewareData, g.value = F !== !1;
    });
  }
  function A() {
    typeof v == "function" && (v(), v = void 0);
  }
  function P() {
    if (A(), r === void 0) {
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
  return de([a, i, s, o], b, {
    flush: "sync"
  }), de([l, u], P, {
    flush: "sync"
  }), de(o, $, {
    flush: "sync"
  }), Mc() && Bc(A), {
    x: On(f),
    y: On(p),
    strategy: On(h),
    placement: On(d),
    middlewareData: On(w),
    isPositioned: On(g),
    floatingStyles: y,
    update: b
  };
}
function qs(e) {
  return e ? e.flatMap((t) => t.type === ie ? qs(t.children) : [t]) : [];
}
const ns = J({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var c, l;
      if (!n.default)
        return null;
      const r = qs(n.default()), o = r.findIndex((u) => u.type !== ph);
      if (o === -1)
        return r;
      const a = r[o];
      (c = a.props) == null || delete c.ref;
      const i = a.props ? ue(t, a.props) : t;
      t.class && ((l = a.props) != null && l.class) && delete a.props.class;
      const s = hh(a, i);
      for (const u in i)
        u.startsWith("on") && (s.props || (s.props = {}), s.props[u] = i[u]);
      return r.length === 1 ? s : (r[o] = s, r);
    };
  }
}), Xx = ["area", "img", "input"], Le = J({
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
    return typeof r == "string" && Xx.includes(r) ? () => je(r, t) : r !== "template" ? () => je(e.as, t, { default: n.default }) : () => je(ns, t, { default: n.default });
  }
});
function Jx(e, t) {
  var n;
  const r = co();
  return St(() => {
    r.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), gh(r);
}
function Us(e) {
  return Mc() ? (Bc(e), !0) : !1;
}
function Qx(e) {
  let t = !1, n;
  const r = jc(!0);
  return (...o) => (t || (n = r.run(() => e(...o)), t = !0), n);
}
function Ap(e) {
  let t = 0, n, r;
  const o = () => {
    t -= 1, r && t <= 0 && (r.stop(), n = void 0, r = void 0);
  };
  return (...a) => (t += 1, r || (r = jc(!0), n = r.run(() => e(...a))), Us(o), n);
}
const tn = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Zx = (e) => typeof e < "u", eS = Object.prototype.toString, tS = (e) => eS.call(e) === "[object Object]", Pc = /* @__PURE__ */ nS();
function nS() {
  var e, t;
  return tn && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function rS(e) {
  return mn();
}
function oi(e) {
  return Array.isArray(e) ? e : [e];
}
function oS(e, t = 1e4) {
  return yh((n, r) => {
    let o = Kt(e), a;
    const i = () => setTimeout(() => {
      o = Kt(e), r();
    }, Kt(t));
    return Us(() => {
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
function aS(e, t) {
  rS() && mh(e, t);
}
function iS(e, t, n) {
  return de(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const zs = tn ? window : void 0;
function zn(e) {
  var t;
  const n = Kt(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function dr(...e) {
  const t = [], n = () => {
    t.forEach((s) => s()), t.length = 0;
  }, r = (s, c, l, u) => (s.addEventListener(c, l, u), () => s.removeEventListener(c, l, u)), o = G(() => {
    const s = oi(Kt(e[0])).filter((c) => c != null);
    return s.every((c) => typeof c != "string") ? s : void 0;
  }), a = iS(
    () => {
      var s, c;
      return [
        (c = (s = o.value) == null ? void 0 : s.map((l) => zn(l))) != null ? c : [zs].filter((l) => l != null),
        oi(Kt(o.value ? e[1] : e[0])),
        oi(S(o.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Kt(o.value ? e[3] : e[2])
      ];
    },
    ([s, c, l, u]) => {
      if (n(), !(s != null && s.length) || !(c != null && c.length) || !(l != null && l.length))
        return;
      const f = tS(u) ? { ...u } : u;
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
  return Us(n), i;
}
function sS() {
  const e = co(!1), t = mn();
  return t && Ee(() => {
    e.value = !0;
  }, t), e;
}
function lS(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function uS(...e) {
  let t, n, r = {};
  e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = zs,
    eventName: a = "keydown",
    passive: i = !1,
    dedupe: s = !1
  } = r, c = lS(t);
  return dr(o, a, (u) => {
    u.repeat && Kt(s) || c(u) && n(u);
  }, i);
}
function cS(e) {
  return JSON.parse(JSON.stringify(e));
}
function Er(e, t, n, r = {}) {
  var o, a, i;
  const {
    clone: s = !1,
    passive: c = !1,
    eventName: l,
    deep: u = !1,
    defaultValue: f,
    shouldEmit: p
  } = r, h = mn(), d = n || (h == null ? void 0 : h.emit) || ((o = h == null ? void 0 : h.$emit) == null ? void 0 : o.bind(h)) || ((i = (a = h == null ? void 0 : h.proxy) == null ? void 0 : a.$emit) == null ? void 0 : i.bind(h == null ? void 0 : h.proxy));
  let w = l;
  t || (t = "modelValue"), w = w || `update:${t.toString()}`;
  const g = (b) => s ? typeof s == "function" ? s(b) : cS(b) : b, y = () => Zx(e[t]) ? g(e[t]) : f, v = (b) => {
    p ? p(b) && d(w, b) : d(w, b);
  };
  if (c) {
    const b = y(), A = q(b);
    let P = !1;
    return de(
      () => e[t],
      ($) => {
        P || (P = !0, A.value = g($), Ve(() => P = !1));
      }
    ), de(
      A,
      ($) => {
        !P && ($ !== e[t] || u) && v($);
      },
      { deep: u }
    ), A;
  } else
    return G({
      get() {
        return y();
      },
      set(b) {
        v(b);
      }
    });
}
function Ct(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, r = Symbol(n);
  return [(i) => {
    const s = ss(r, i);
    if (s || s === null)
      return s;
    throw new Error(
      `Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (i) => (ls(r, i), i)];
}
const [Vs, PA] = Ct("ConfigProvider");
function Hs(e) {
  const t = Vs({
    dir: q("ltr")
  });
  return G(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function pe() {
  const e = mn(), t = q(), n = G(() => {
    var i, s;
    return ["#text", "#comment"].includes((i = t.value) == null ? void 0 : i.$el.nodeName) ? (s = t.value) == null ? void 0 : s.$el.nextElementSibling : zn(t);
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
const [Cp, fS] = Ct("CollapsibleRoot"), Pp = /* @__PURE__ */ J({
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
    const r = e, a = Er(r, "open", n, {
      defaultValue: r.defaultOpen,
      passive: r.open === void 0
    }), { disabled: i, unmountOnHide: s } = en(r);
    return fS({
      contentId: "",
      disabled: i,
      open: a,
      unmountOnHide: s,
      onOpenToggle: () => {
        a.value = !a.value;
      }
    }), t({ open: a }), pe(), (c, l) => (C(), H(S(Le), {
      as: c.as,
      "as-child": r.asChild,
      "data-state": S(a) ? "open" : "closed",
      "data-disabled": S(i) ? "" : void 0
    }, {
      default: z(() => [
        U(c.$slots, "default", { open: S(a) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), dS = ["INPUT", "TEXTAREA"];
function pS(e, t, n, r = {}) {
  if (!t || r.enableIgnoredElement && dS.includes(t.nodeName))
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
  let A = null;
  return v || y ? A = kp(b, t, {
    goForward: y ? d : c === "ltr" ? f : p,
    loop: s
  }) : w ? A = b.at(0) || null : g && (A = b.at(-1) || null), u && (A == null || A.focus()), A;
}
function kp(e, t, n, r = e.length) {
  if (--r === 0)
    return null;
  const o = e.indexOf(t), a = n.goForward ? o + 1 : o - 1;
  if (!n.loop && (a < 0 || a >= e.length))
    return null;
  const i = (a + e.length) % e.length, s = e[i];
  return s ? s.hasAttribute("disabled") && s.getAttribute("disabled") !== "false" ? kp(
    e,
    s,
    n,
    r
  ) : s : null;
}
let hS = 0;
function _n(e, t = "reka") {
  const n = Vs({ useId: void 0 });
  return rl.useId ? `${t}-${rl.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++hS}`;
}
function mS(e, t) {
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
function yS(e, t) {
  var g;
  const n = q({}), r = q("none"), o = q(e), a = e.value ? "mounted" : "unmounted";
  let i;
  const s = ((g = t.value) == null ? void 0 : g.ownerDocument.defaultView) ?? zs, { state: c, dispatch: l } = mS(a, {
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
    if (tn) {
      const b = new CustomEvent(y, { bubbles: !1, cancelable: !1 });
      (v = t.value) == null || v.dispatchEvent(b);
    }
  };
  de(
    e,
    async (y, v) => {
      var A;
      const b = v !== y;
      if (await Ve(), b) {
        const P = r.value, $ = _r(t.value);
        y ? (l("MOUNT"), u("enter"), $ === "none" && u("after-enter")) : $ === "none" || $ === "undefined" || ((A = n.value) == null ? void 0 : A.display) === "none" ? (l("UNMOUNT"), u("leave"), u("after-leave")) : v && P !== $ ? (l("ANIMATION_OUT"), u("leave")) : (l("UNMOUNT"), u("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const f = (y) => {
    const v = _r(t.value), b = v.includes(
      y.animationName
    ), A = c.value === "mounted" ? "enter" : "leave";
    if (y.target === t.value && b && (u(`after-${A}`), l("ANIMATION_END"), !o.value)) {
      const P = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", i = s == null ? void 0 : s.setTimeout(() => {
        var $;
        (($ = t.value) == null ? void 0 : $.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = P);
      });
    }
    y.target === t.value && v === "none" && l("ANIMATION_END");
  }, p = (y) => {
    y.target === t.value && (r.value = _r(t.value));
  }, h = de(
    t,
    (y, v) => {
      y ? (n.value = getComputedStyle(y), y.addEventListener("animationstart", p), y.addEventListener("animationcancel", f), y.addEventListener("animationend", f)) : (l("ANIMATION_END"), i !== void 0 && (s == null || s.clearTimeout(i)), v == null || v.removeEventListener("animationstart", p), v == null || v.removeEventListener("animationcancel", f), v == null || v.removeEventListener("animationend", f));
    },
    { immediate: !0 }
  ), d = de(c, () => {
    const y = _r(t.value);
    r.value = c.value === "mounted" ? y : "none";
  });
  return Nt(() => {
    h(), d();
  }), {
    isPresent: G(
      () => ["mounted", "unmountSuspended"].includes(c.value)
    )
  };
}
function _r(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Lo = J({
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
    const { present: r, forceMount: o } = en(e), a = q(), { isPresent: i } = yS(r, a);
    n({ present: i });
    let s = t.default({ present: i.value });
    s = qs(s || []);
    const c = mn();
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
    return () => o.value || r.value || i.value ? je(t.default({ present: i.value })[0], {
      ref: (u) => {
        const f = zn(u);
        return typeof (f == null ? void 0 : f.hasAttribute) > "u" || (f != null && f.hasAttribute("data-reka-popper-content-wrapper") ? a.value = f.firstElementChild : a.value = f), f;
      }
    }) : null;
  }
}), Dp = /* @__PURE__ */ J({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["contentFound"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Cp();
    o.contentId || (o.contentId = _n(void 0, "reka-collapsible-content"));
    const a = q(), { forwardRef: i, currentElement: s } = pe(), c = q(0), l = q(0), u = G(() => o.open.value), f = q(u.value), p = q();
    de(
      () => {
        var d;
        return [u.value, (d = a.value) == null ? void 0 : d.present];
      },
      async () => {
        await Ve();
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
    const h = G(() => f.value && o.open.value);
    return Ee(() => {
      requestAnimationFrame(() => {
        f.value = !1;
      });
    }), dr(s, "beforematch", (d) => {
      requestAnimationFrame(() => {
        o.onOpenToggle(), r("contentFound");
      });
    }), (d, w) => (C(), H(S(Lo), {
      ref_key: "presentRef",
      ref: a,
      present: d.forceMount || S(o).open.value,
      "force-mount": !0
    }, {
      default: z(({ present: g }) => {
        var y;
        return [
          Q(S(Le), ue(d.$attrs, {
            id: S(o).contentId,
            ref: S(i),
            "as-child": n.asChild,
            as: d.as,
            hidden: g ? void 0 : S(o).unmountOnHide.value ? "" : "until-found",
            "data-state": h.value ? void 0 : S(o).open.value ? "open" : "closed",
            "data-disabled": (y = S(o).disabled) != null && y.value ? "" : void 0,
            style: {
              "--reka-collapsible-content-height": `${l.value}px`,
              "--reka-collapsible-content-width": `${c.value}px`
            }
          }), {
            default: z(() => [
              !S(o).unmountOnHide.value || g ? U(d.$slots, "default", { key: 0 }) : Y("", !0)
            ]),
            _: 2
          }, 1040, ["id", "as-child", "as", "hidden", "data-state", "data-disabled", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
}), Tp = /* @__PURE__ */ J({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    pe();
    const n = Cp();
    return (r, o) => {
      var a, i;
      return C(), H(S(Le), {
        type: r.as === "button" ? "button" : void 0,
        as: r.as,
        "as-child": t.asChild,
        "aria-controls": S(n).contentId,
        "aria-expanded": S(n).open.value,
        "data-state": S(n).open.value ? "open" : "closed",
        "data-disabled": (a = S(n).disabled) != null && a.value ? "" : void 0,
        disabled: (i = S(n).disabled) == null ? void 0 : i.value,
        onClick: S(n).onOpenToggle
      }, {
        default: z(() => [
          U(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
}), [Pt, gS] = Ct("DialogRoot"), vS = /* @__PURE__ */ J({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = Er(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), a = q(), i = q(), { modal: s } = en(n);
    return gS({
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
    }), (c, l) => U(c.$slots, "default", { open: S(o) });
  }
}), bS = /* @__PURE__ */ J({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    pe();
    const n = Pt();
    return (r, o) => (C(), H(S(Le), ue(t, {
      type: r.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (a) => S(n).onOpenChange(!1))
    }), {
      default: z(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
});
function Ar(e) {
  const t = mn(), n = t == null ? void 0 : t.type.emits, r = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((o) => {
    r[vh(qc(o))] = (...a) => e(o, ...a);
  }), r;
}
function $p(e, t, n) {
  const r = n.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && r.addEventListener(e, t, { once: !0 }), r.dispatchEvent(o);
}
const wS = "dismissableLayer.pointerDownOutside", xS = "dismissableLayer.focusOutside";
function Fp(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), r = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && (r === n || o.indexOf(r) < o.indexOf(n)));
}
function SS(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = q(!1), o = q(() => {
  });
  return St((i) => {
    if (!tn)
      return;
    const s = async (l) => {
      const u = l.target;
      if (!(!(t != null && t.value) || !u)) {
        if (Fp(t.value, u)) {
          r.value = !1;
          return;
        }
        if (l.target && !r.value) {
          let f = function() {
            $p(
              wS,
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
function OS(e, t) {
  var o;
  const n = ((o = t == null ? void 0 : t.value) == null ? void 0 : o.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = q(!1);
  return St((a) => {
    if (!tn)
      return;
    const i = async (s) => {
      if (!(t != null && t.value))
        return;
      await Ve(), await Ve();
      const c = s.target;
      !t.value || !c || Fp(t.value, c) || s.target && !r.value && $p(
        xS,
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
const Tt = pr({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Ip = /* @__PURE__ */ J({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, r = t, { forwardRef: o, currentElement: a } = pe(), i = G(
      () => {
        var d;
        return ((d = a.value) == null ? void 0 : d.ownerDocument) ?? globalThis.document;
      }
    ), s = G(() => Tt.layersRoot), c = G(() => a.value ? Array.from(s.value).indexOf(a.value) : -1), l = G(() => Tt.layersWithOutsidePointerEventsDisabled.size > 0), u = G(() => {
      const d = Array.from(s.value), [w] = [...Tt.layersWithOutsidePointerEventsDisabled].slice(-1), g = d.indexOf(w);
      return c.value >= g;
    }), f = SS(async (d) => {
      const w = [...Tt.branches].some(
        (g) => g == null ? void 0 : g.contains(d.target)
      );
      !u.value || w || (r("pointerDownOutside", d), r("interactOutside", d), await Ve(), d.defaultPrevented || r("dismiss"));
    }, a), p = OS((d) => {
      [...Tt.branches].some(
        (g) => g == null ? void 0 : g.contains(d.target)
      ) || (r("focusOutside", d), r("interactOutside", d), d.defaultPrevented || r("dismiss"));
    }, a);
    uS("Escape", (d) => {
      c.value === s.value.size - 1 && (r("escapeKeyDown", d), d.defaultPrevented || r("dismiss"));
    });
    let h;
    return St((d) => {
      a.value && (n.disableOutsidePointerEvents && (Tt.layersWithOutsidePointerEventsDisabled.size === 0 && (h = i.value.body.style.pointerEvents, i.value.body.style.pointerEvents = "none"), Tt.layersWithOutsidePointerEventsDisabled.add(a.value)), s.value.add(a.value), d(() => {
        n.disableOutsidePointerEvents && Tt.layersWithOutsidePointerEventsDisabled.size === 1 && (i.value.body.style.pointerEvents = h);
      }));
    }), St((d) => {
      d(() => {
        a.value && (s.value.delete(a.value), Tt.layersWithOutsidePointerEventsDisabled.delete(a.value));
      });
    }), (d, w) => (C(), H(S(Le), {
      ref: S(o),
      "as-child": d.asChild,
      as: d.as,
      "data-dismissable-layer": "",
      style: Wt({
        pointerEvents: l.value ? u.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: S(p).onFocusCapture,
      onBlurCapture: S(p).onBlurCapture,
      onPointerdownCapture: S(f).onPointerDownCapture
    }, {
      default: z(() => [
        U(d.$slots, "default")
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
const ES = "menu.itemSelect", rs = ["Enter", " "], AS = ["ArrowDown", "PageUp", "Home"], Rp = ["ArrowUp", "PageDown", "End"], CS = [...AS, ...Rp];
[...rs], [...rs];
function Lp(e) {
  return e ? "open" : "closed";
}
function PS(e) {
  const t = Ke();
  for (const n of e)
    if (n === t || (n.focus(), Ke() !== t))
      return;
}
function kS(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a].x, c = t[a].y, l = t[i].x, u = t[i].y;
    c > r != u > r && n < (l - s) * (r - c) / (u - c) + s && (o = !o);
  }
  return o;
}
function DS(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return kS(n, t);
}
function os(e) {
  return e.pointerType === "mouse";
}
const TS = "DialogTitle", $S = "DialogContent";
function FS({
  titleName: e = TS,
  contentName: t = $S,
  componentLink: n = "dialog.html#title",
  titleId: r,
  descriptionId: o,
  contentElement: a
}) {
  const i = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.reka-ui.com/docs/components/${n}`, s = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  Ee(() => {
    var u;
    document.getElementById(r) || console.warn(i);
    const l = (u = a.value) == null ? void 0 : u.getAttribute("aria-describedby");
    o && l && (document.getElementById(o) || console.warn(s));
  });
}
const IS = Qx(() => q([]));
function RS() {
  const e = IS();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = kc(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = kc(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function kc(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function LS(e) {
  return e.filter((t) => t.tagName !== "A");
}
const ai = "focusScope.autoFocusOnMount", ii = "focusScope.autoFocusOnUnmount", Dc = { bubbles: !1, cancelable: !0 };
function _S(e, { select: t = !1 } = {}) {
  const n = Ke();
  for (const r of e)
    if (Vt(r, { select: t }), Ke() !== n)
      return !0;
}
function NS(e) {
  const t = _p(e), n = Tc(t, e), r = Tc(t.reverse(), e);
  return [n, r];
}
function _p(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Tc(e, t) {
  for (const n of e)
    if (!MS(n, { upTo: t }))
      return n;
}
function MS(e, { upTo: t }) {
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
function BS(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Vt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = Ke();
    e.focus({ preventScroll: !0 }), e !== n && BS(e) && t && e.select();
  }
}
const Np = /* @__PURE__ */ J({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = t, { currentRef: o, currentElement: a } = pe(), i = q(null), s = RS(), c = pr({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    St((u) => {
      if (!tn)
        return;
      const f = a.value;
      if (!n.trapped)
        return;
      function p(g) {
        if (c.paused || !f)
          return;
        const y = g.target;
        f.contains(y) ? i.value = y : Vt(i.value, { select: !0 });
      }
      function h(g) {
        if (c.paused || !f)
          return;
        const y = g.relatedTarget;
        y !== null && (f.contains(y) || Vt(i.value, { select: !0 }));
      }
      function d(g) {
        f.contains(i.value) || Vt(f);
      }
      document.addEventListener("focusin", p), document.addEventListener("focusout", h);
      const w = new MutationObserver(d);
      f && w.observe(f, { childList: !0, subtree: !0 }), u(() => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", h), w.disconnect();
      });
    }), St(async (u) => {
      const f = a.value;
      if (await Ve(), !f)
        return;
      s.add(c);
      const p = Ke();
      if (!f.contains(p)) {
        const d = new CustomEvent(ai, Dc);
        f.addEventListener(ai, (w) => r("mountAutoFocus", w)), f.dispatchEvent(d), d.defaultPrevented || (_S(LS(_p(f)), {
          select: !0
        }), Ke() === p && Vt(f));
      }
      u(() => {
        f.removeEventListener(ai, (g) => r("mountAutoFocus", g));
        const d = new CustomEvent(ii, Dc), w = (g) => {
          r("unmountAutoFocus", g);
        };
        f.addEventListener(ii, w), f.dispatchEvent(d), setTimeout(() => {
          d.defaultPrevented || Vt(p ?? document.body, { select: !0 }), f.removeEventListener(ii, w), s.remove(c);
        }, 0);
      });
    });
    function l(u) {
      if (!n.loop && !n.trapped || c.paused)
        return;
      const f = u.key === "Tab" && !u.altKey && !u.ctrlKey && !u.metaKey, p = Ke();
      if (f && p) {
        const h = u.currentTarget, [d, w] = NS(h);
        d && w ? !u.shiftKey && p === w ? (u.preventDefault(), n.loop && Vt(d, { select: !0 })) : u.shiftKey && p === d && (u.preventDefault(), n.loop && Vt(w, { select: !0 })) : p === h && u.preventDefault();
      }
    }
    return (u, f) => (C(), H(S(Le), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": u.asChild,
      as: u.as,
      onKeydown: l
    }, {
      default: z(() => [
        U(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Mp = /* @__PURE__ */ J({
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
    const n = e, r = t, o = Pt(), { forwardRef: a, currentElement: i } = pe();
    return o.titleId || (o.titleId = _n(void 0, "reka-dialog-title")), o.descriptionId || (o.descriptionId = _n(void 0, "reka-dialog-description")), Ee(() => {
      o.contentElement = i, Ke() !== document.body && (o.triggerElement.value = Ke());
    }), process.env.NODE_ENV !== "production" && FS({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: i
    }), (s, c) => (C(), H(S(Np), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: c[5] || (c[5] = (l) => r("openAutoFocus", l)),
      onUnmountAutoFocus: c[6] || (c[6] = (l) => r("closeAutoFocus", l))
    }, {
      default: z(() => [
        Q(S(Ip), ue({
          id: S(o).contentId,
          ref: S(a),
          as: s.as,
          "as-child": s.asChild,
          "disable-outside-pointer-events": s.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": S(o).descriptionId,
          "aria-labelledby": S(o).titleId,
          "data-state": S(Lp)(S(o).open.value)
        }, s.$attrs, {
          onDismiss: c[0] || (c[0] = (l) => S(o).onOpenChange(!1)),
          onEscapeKeyDown: c[1] || (c[1] = (l) => r("escapeKeyDown", l)),
          onFocusOutside: c[2] || (c[2] = (l) => r("focusOutside", l)),
          onInteractOutside: c[3] || (c[3] = (l) => r("interactOutside", l)),
          onPointerDownOutside: c[4] || (c[4] = (l) => r("pointerDownOutside", l))
        }), {
          default: z(() => [
            U(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
});
var jS = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, An = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap(), Mr = {}, si = 0, Bp = function(e) {
  return e && (e.host || Bp(e.parentNode));
}, qS = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Bp(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, US = function(e, t, n, r) {
  var o = qS(t, Array.isArray(e) ? e : [e]);
  Mr[n] || (Mr[n] = /* @__PURE__ */ new WeakMap());
  var a = Mr[n], i = [], s = /* @__PURE__ */ new Set(), c = new Set(o), l = function(f) {
    !f || s.has(f) || (s.add(f), l(f.parentNode));
  };
  o.forEach(l);
  var u = function(f) {
    !f || c.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (s.has(p))
        u(p);
      else
        try {
          var h = p.getAttribute(r), d = h !== null && h !== "false", w = (An.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
          An.set(p, w), a.set(p, g), i.push(p), w === 1 && d && Nr.set(p, !0), g === 1 && p.setAttribute(n, "true"), d || p.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", p, y);
        }
    });
  };
  return u(t), s.clear(), si++, function() {
    i.forEach(function(f) {
      var p = An.get(f) - 1, h = a.get(f) - 1;
      An.set(f, p), a.set(f, h), p || (Nr.has(f) || f.removeAttribute(r), Nr.delete(f)), h || f.removeAttribute(n);
    }), si--, si || (An = /* @__PURE__ */ new WeakMap(), An = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap(), Mr = {});
  };
}, zS = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = jS(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), US(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function jp(e) {
  let t;
  de(() => zn(e), (n) => {
    n ? t = zS(n) : t && t();
  }), Nt(() => {
    t && t();
  });
}
const VS = /* @__PURE__ */ J({
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
    const n = e, r = t, o = Pt(), a = Ar(r), { forwardRef: i, currentElement: s } = pe();
    return jp(s), (c, l) => (C(), H(Mp, ue({ ...n, ...S(a) }, {
      ref: S(i),
      "trap-focus": S(o).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: l[0] || (l[0] = (u) => {
        var f;
        u.defaultPrevented || (u.preventDefault(), (f = S(o).triggerElement.value) == null || f.focus());
      }),
      onPointerDownOutside: l[1] || (l[1] = (u) => {
        const f = u.detail.originalEvent, p = f.button === 0 && f.ctrlKey === !0;
        (f.button === 2 || p) && u.preventDefault();
      }),
      onFocusOutside: l[2] || (l[2] = (u) => {
        u.preventDefault();
      })
    }), {
      default: z(() => [
        U(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), HS = /* @__PURE__ */ J({
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
    const n = e, o = Ar(t);
    pe();
    const a = Pt(), i = q(!1), s = q(!1);
    return (c, l) => (C(), H(Mp, ue({ ...n, ...S(o) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: l[0] || (l[0] = (u) => {
        var f;
        u.defaultPrevented || (i.value || (f = S(a).triggerElement.value) == null || f.focus(), u.preventDefault()), i.value = !1, s.value = !1;
      }),
      onInteractOutside: l[1] || (l[1] = (u) => {
        var h;
        u.defaultPrevented || (i.value = !0, u.detail.originalEvent.type === "pointerdown" && (s.value = !0));
        const f = u.target;
        ((h = S(a).triggerElement.value) == null ? void 0 : h.contains(f)) && u.preventDefault(), u.detail.originalEvent.type === "focusin" && s.value && u.preventDefault();
      })
    }), {
      default: z(() => [
        U(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), WS = /* @__PURE__ */ J({
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
    const n = e, r = t, o = Pt(), a = Ar(r), { forwardRef: i } = pe();
    return (s, c) => (C(), H(S(Lo), {
      present: s.forceMount || S(o).open.value
    }, {
      default: z(() => [
        S(o).modal.value ? (C(), H(VS, ue({
          key: 0,
          ref: S(i)
        }, { ...n, ...S(a), ...s.$attrs }), {
          default: z(() => [
            U(s.$slots, "default")
          ]),
          _: 3
        }, 16)) : (C(), H(HS, ue({
          key: 1,
          ref: S(i)
        }, { ...n, ...S(a), ...s.$attrs }), {
          default: z(() => [
            U(s.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), KS = /* @__PURE__ */ J({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    pe();
    const n = Pt();
    return (r, o) => (C(), H(S(Le), ue(t, {
      id: S(n).descriptionId
    }), {
      default: z(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function li(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function as(e, t, n = ".", r) {
  if (!li(t))
    return as(e, {}, n, r);
  const o = Object.assign({}, t);
  for (const a in e) {
    if (a === "__proto__" || a === "constructor")
      continue;
    const i = e[a];
    i != null && (r && r(o, a, i, n) || (Array.isArray(i) && Array.isArray(o[a]) ? o[a] = [...i, ...o[a]] : li(i) && li(o[a]) ? o[a] = as(
      i,
      o[a],
      (n ? `${n}.` : "") + a.toString(),
      r
    ) : o[a] = i));
  }
  return o;
}
function GS(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, r) => as(n, r, "", e), {})
  );
}
const YS = GS(), XS = Ap(() => {
  const e = q(/* @__PURE__ */ new Map()), t = q(), n = G(() => {
    for (const i of e.value.values())
      if (i)
        return !0;
    return !1;
  }), r = Vs({
    scrollBody: q(!0)
  });
  let o = null;
  const a = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Pc && (o == null || o()), t.value = void 0;
  };
  return de(n, (i, s) => {
    var f;
    if (!tn)
      return;
    if (!i) {
      s && a();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const c = window.innerWidth - document.documentElement.clientWidth, l = { padding: c, margin: 0 }, u = (f = r.scrollBody) != null && f.value ? typeof r.scrollBody.value == "object" ? YS({
      padding: r.scrollBody.value.padding === !0 ? c : r.scrollBody.value.padding,
      margin: r.scrollBody.value.margin === !0 ? c : r.scrollBody.value.margin
    }, l) : l : { padding: 0, margin: 0 };
    c > 0 && (document.body.style.paddingRight = typeof u.padding == "number" ? `${u.padding}px` : String(u.padding), document.body.style.marginRight = typeof u.margin == "number" ? `${u.margin}px` : String(u.margin), document.body.style.setProperty("--scrollbar-width", `${c}px`), document.body.style.overflow = "hidden"), Pc && (o = dr(
      document,
      "touchmove",
      (p) => JS(p),
      { passive: !1 }
    )), Ve(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function qp(e) {
  const t = Math.random().toString(36).substring(2, 7), n = XS();
  n.value.set(t, e ?? !1);
  const r = G({
    get: () => n.value.get(t) ?? !1,
    set: (o) => n.value.set(t, o)
  });
  return aS(() => {
    n.value.delete(t);
  }), r;
}
function Up(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : Up(n);
  }
}
function JS(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && Up(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const QS = /* @__PURE__ */ J({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Pt();
    return qp(!0), pe(), (n, r) => (C(), H(S(Le), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": S(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: z(() => [
        U(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), ZS = /* @__PURE__ */ J({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Pt(), { forwardRef: n } = pe();
    return (r, o) => {
      var a;
      return (a = S(t)) != null && a.modal.value ? (C(), H(S(Lo), {
        key: 0,
        present: r.forceMount || S(t).open.value
      }, {
        default: z(() => [
          Q(QS, ue(r.$attrs, {
            ref: S(n),
            as: r.as,
            "as-child": r.asChild
          }), {
            default: z(() => [
              U(r.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : Y("", !0);
    };
  }
}), zp = /* @__PURE__ */ J({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = sS();
    return (n, r) => S(t) || n.forceMount ? (C(), H(Uc, {
      key: 0,
      to: n.to,
      disabled: n.disabled,
      defer: n.defer
    }, [
      U(n.$slots, "default")
    ], 8, ["to", "disabled", "defer"])) : Y("", !0);
  }
});
function eO(e) {
  const t = mn(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, a) => {
    const i = (t == null ? void 0 : t.type.props[a]).default;
    return i !== void 0 && (o[a] = i), o;
  }, {}), r = bh(e);
  return G(() => {
    const o = {}, a = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(a).forEach((i) => {
      o[qc(i)] = a[i];
    }), Object.keys({ ...n, ...o }).reduce((i, s) => (r.value[s] !== void 0 && (i[s] = r.value[s]), i), {});
  });
}
function _o(e, t) {
  const n = eO(e), r = t ? Ar(t) : {};
  return G(() => ({
    ...n.value,
    ...r
  }));
}
const tO = /* @__PURE__ */ J({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = Pt();
    return pe(), (r, o) => (C(), H(S(Le), ue(t, {
      id: S(n).titleId
    }), {
      default: z(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), nO = /* @__PURE__ */ J({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Pt(), { forwardRef: r, currentElement: o } = pe();
    return n.contentId || (n.contentId = _n(void 0, "reka-dialog-content")), Ee(() => {
      n.triggerElement.value = o.value;
    }), (a, i) => (C(), H(S(Le), ue(t, {
      ref: S(r),
      type: a.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": S(n).open.value || !1,
      "aria-controls": S(n).open.value ? S(n).contentId : void 0,
      "data-state": S(n).open.value ? "open" : "closed",
      onClick: S(n).onOpenToggle
    }), {
      default: z(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
});
function $c() {
  const e = q(), t = G(() => {
    var n, r;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (r = e.value) == null ? void 0 : r.$el.nextElementSibling : zn(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const Fc = "data-reka-collection-item";
function Vp(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, r = `${t}CollectionProvider`;
  let o;
  if (n) {
    const u = q(/* @__PURE__ */ new Map());
    o = {
      collectionRef: q(),
      itemMap: u
    }, ls(r, o);
  } else
    o = ss(r);
  const a = (u = !1) => {
    const f = o.collectionRef.value;
    if (!f)
      return [];
    const p = Array.from(f.querySelectorAll(`[${Fc}]`)), d = Array.from(o.itemMap.value.values()).sort(
      (w, g) => p.indexOf(w.ref) - p.indexOf(g.ref)
    );
    return u ? d : d.filter((w) => w.ref.dataset.disabled !== "");
  }, i = J({
    name: "CollectionSlot",
    setup(u, { slots: f }) {
      const { primitiveElement: p, currentElement: h } = $c();
      return de(h, () => {
        o.collectionRef.value = h.value;
      }), () => je(ns, { ref: p }, f);
    }
  }), s = J({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: {
      value: {
        // It accepts any value
        validator: () => !0
      }
    },
    setup(u, { slots: f, attrs: p }) {
      const { primitiveElement: h, currentElement: d } = $c();
      return St((w) => {
        if (d.value) {
          const g = di(d.value);
          o.itemMap.value.set(g, { ref: d.value, value: u.value }), w(() => o.itemMap.value.delete(g));
        }
      }), () => je(ns, { ...p, [Fc]: "", ref: h }, f);
    }
  }), c = G(() => Array.from(o.itemMap.value.values())), l = G(() => o.itemMap.value.size);
  return { getItems: a, reactiveItems: c, itemMapSize: l, CollectionSlot: i, CollectionItem: s };
}
const rO = "rovingFocusGroup.onEntryFocus", oO = { bubbles: !1, cancelable: !0 };
function aO(e, t = !1) {
  const n = Ke();
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), Ke() !== n))
      return;
}
const [kA, iO] = Ct("RovingFocusGroup"), sO = /* @__PURE__ */ J({
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
    const r = e, o = n, { loop: a, orientation: i, dir: s } = en(r), c = Hs(s), l = Er(r, "currentTabStopId", o, {
      defaultValue: r.defaultCurrentTabStopId,
      passive: r.currentTabStopId === void 0
    }), u = q(!1), f = q(!1), p = q(0), { getItems: h, CollectionSlot: d } = Vp({ isProvider: !0 });
    function w(y) {
      const v = !f.value;
      if (y.currentTarget && y.target === y.currentTarget && v && !u.value) {
        const b = new CustomEvent(rO, oO);
        if (y.currentTarget.dispatchEvent(b), o("entryFocus", b), !b.defaultPrevented) {
          const A = h().map((B) => B.ref).filter((B) => B.dataset.disabled !== ""), P = A.find((B) => B.getAttribute("data-active") === ""), $ = A.find(
            (B) => B.id === l.value
          ), F = [P, $, ...A].filter(
            Boolean
          );
          aO(F, r.preventScrollOnEntryFocus);
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
    }), iO({
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
    }), (y, v) => (C(), H(S(d), null, {
      default: z(() => [
        Q(S(Le), {
          tabindex: u.value || p.value === 0 ? -1 : 0,
          "data-orientation": S(i),
          as: y.as,
          "as-child": y.asChild,
          dir: S(c),
          style: { outline: "none" },
          onMousedown: v[0] || (v[0] = (b) => f.value = !0),
          onMouseup: g,
          onFocus: w,
          onBlur: v[1] || (v[1] = (b) => u.value = !1)
        }, {
          default: z(() => [
            U(y.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), [Hp, lO] = Ct("PopperRoot"), uO = /* @__PURE__ */ J({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = q();
    return lO({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, r) => U(n.$slots, "default");
  }
}), cO = /* @__PURE__ */ J({
  __name: "PopperAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: r } = pe(), o = Hp();
    return zc(() => {
      o.onAnchorChange(t.reference ?? r.value);
    }), (a, i) => (C(), H(S(Le), {
      ref: S(n),
      as: a.as,
      "as-child": a.asChild
    }, {
      default: z(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function fO(e) {
  return e !== null;
}
function dO(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var g, y, v;
      const { placement: n, rects: r, middlewareData: o } = t, i = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0, s = i ? 0 : e.arrowWidth, c = i ? 0 : e.arrowHeight, [l, u] = is(n), f = { start: "0%", center: "50%", end: "100%" }[u], p = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + s / 2, h = (((v = o.arrow) == null ? void 0 : v.y) ?? 0) + c / 2;
      let d = "", w = "";
      return l === "bottom" ? (d = i ? f : `${p}px`, w = `${-c}px`) : l === "top" ? (d = i ? f : `${p}px`, w = `${r.floating.height + c}px`) : l === "right" ? (d = `${-c}px`, w = i ? f : `${h}px`) : l === "left" && (d = `${r.floating.width + c}px`, w = i ? f : `${h}px`), { data: { x: d, y: w } };
    }
  };
}
function is(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
function pO(e) {
  const t = q(), n = G(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), r = G(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return Ee(() => {
    const o = zn(e);
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
const Wp = {
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
}, [DA, hO] = Ct("PopperContent"), mO = /* @__PURE__ */ J({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Vc({
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
    ...Wp
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Hp(), { forwardRef: a, currentElement: i } = pe(), s = q(), c = q(), { width: l, height: u } = pO(c), f = G(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), p = G(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), h = G(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), d = G(() => ({
      padding: p.value,
      boundary: h.value.filter(fO),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: h.value.length > 0
    })), w = Jx(() => [
      jx({
        mainAxis: n.sideOffset + u.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && Ac({
        ...d.value
      }),
      n.avoidCollisions && qx({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? Hx() : void 0,
        ...d.value
      }),
      !n.prioritizePosition && n.avoidCollisions && Ac({
        ...d.value
      }),
      Ux({
        ...d.value,
        apply: ({ elements: N, rects: m, availableWidth: O, availableHeight: E }) => {
          const { width: x, height: W } = m.reference, M = N.floating.style;
          M.setProperty(
            "--reka-popper-available-width",
            `${O}px`
          ), M.setProperty(
            "--reka-popper-available-height",
            `${E}px`
          ), M.setProperty(
            "--reka-popper-anchor-width",
            `${x}px`
          ), M.setProperty(
            "--reka-popper-anchor-height",
            `${W}px`
          );
        }
      }),
      c.value && Gx({ element: c.value, padding: n.arrowPadding }),
      dO({
        arrowWidth: l.value,
        arrowHeight: u.value
      }),
      n.hideWhenDetached && zx({ strategy: "referenceHidden", ...d.value })
    ]), g = G(() => n.reference ?? o.anchor.value), { floatingStyles: y, placement: v, isPositioned: b, middlewareData: A } = Yx(
      g,
      s,
      {
        strategy: n.positionStrategy,
        placement: f,
        whileElementsMounted: (...N) => Bx(...N, {
          layoutShift: !n.disableUpdateOnLayoutShift,
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: w
      }
    ), P = G(
      () => is(v.value)[0]
    ), $ = G(
      () => is(v.value)[1]
    );
    zc(() => {
      b.value && r("placed");
    });
    const F = G(
      () => {
        var N;
        return ((N = A.value.arrow) == null ? void 0 : N.centerOffset) !== 0;
      }
    ), B = q("");
    St(() => {
      i.value && (B.value = window.getComputedStyle(i.value).zIndex);
    });
    const D = G(() => {
      var N;
      return ((N = A.value.arrow) == null ? void 0 : N.x) ?? 0;
    }), k = G(() => {
      var N;
      return ((N = A.value.arrow) == null ? void 0 : N.y) ?? 0;
    });
    return hO({
      placedSide: P,
      onArrowChange: (N) => c.value = N,
      arrowX: D,
      arrowY: k,
      shouldHideArrow: F
    }), (N, m) => {
      var O, E, x;
      return C(), L("div", {
        ref_key: "floatingRef",
        ref: s,
        "data-reka-popper-content-wrapper": "",
        style: Wt({
          ...S(y),
          transform: S(b) ? S(y).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: B.value,
          "--reka-popper-transform-origin": [
            (O = S(A).transformOrigin) == null ? void 0 : O.x,
            (E = S(A).transformOrigin) == null ? void 0 : E.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((x = S(A).hide) == null ? void 0 : x.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        Q(S(Le), ue({ ref: S(a) }, N.$attrs, {
          "as-child": n.asChild,
          as: N.as,
          "data-side": P.value,
          "data-align": $.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: S(b) ? void 0 : "none"
          }
        }), {
          default: z(() => [
            U(N.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
});
function yO(e) {
  const t = oS("", 1e3);
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
        }), c = s.find((p) => p.ref === i), l = s.map((p) => p.textValue), u = vO(l, t.value, c == null ? void 0 : c.textValue), f = s.find((p) => p.textValue === u);
        return f && f.ref.focus(), f == null ? void 0 : f.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function gO(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function vO(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let i = gO(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((l) => l !== n));
  const c = i.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function bO() {
  const e = q(!1);
  return Ee(() => {
    dr("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), dr(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const wO = Ap(bO), [No, xO] = Ct(["MenuRoot", "MenuSub"], "MenuContext"), [Ws, SO] = Ct("MenuRoot"), OO = /* @__PURE__ */ J({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, r = t, { modal: o, dir: a } = en(n), i = Hs(a), s = Er(n, "open", r), c = q(), l = wO();
    return xO({
      open: s,
      onOpenChange: (u) => {
        s.value = u;
      },
      content: c,
      onContentChange: (u) => {
        c.value = u;
      }
    }), SO({
      onClose: () => {
        s.value = !1;
      },
      isUsingKeyboardRef: l,
      dir: i,
      modal: o
    }), (u, f) => (C(), H(S(uO), null, {
      default: z(() => [
        U(u.$slots, "default")
      ]),
      _: 3
    }));
  }
});
let ui = 0;
function EO() {
  St((e) => {
    if (!tn)
      return;
    const t = document.querySelectorAll("[data-reka-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? Ic()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? Ic()
    ), ui++, e(() => {
      ui === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((n) => n.remove()), ui--;
    });
  });
}
function Ic() {
  const e = document.createElement("span");
  return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
const [Kp, AO] = Ct("MenuContent"), Gp = /* @__PURE__ */ J({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Vc({
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
    ...Wp
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = No(), a = Ws(), { trapFocus: i, disableOutsidePointerEvents: s, loop: c } = en(n);
    EO(), qp(s.value);
    const l = q(""), u = q(0), f = q(0), p = q(null), h = q("right"), d = q(0), w = q(null), g = q(), { forwardRef: y, currentElement: v } = pe(), { handleTypeaheadSearch: b } = yO();
    de(v, (D) => {
      o.onContentChange(D);
    }), Nt(() => {
      window.clearTimeout(u.value);
    });
    function A(D) {
      var N, m;
      return h.value === ((N = p.value) == null ? void 0 : N.side) && DS(D, (m = p.value) == null ? void 0 : m.area);
    }
    async function P(D) {
      var k;
      r("openAutoFocus", D), !D.defaultPrevented && (D.preventDefault(), (k = v.value) == null || k.focus({
        preventScroll: !0
      }));
    }
    function $(D) {
      var M;
      if (D.defaultPrevented)
        return;
      const N = D.target.closest("[data-reka-menu-content]") === D.currentTarget, m = D.ctrlKey || D.altKey || D.metaKey, O = D.key.length === 1, E = pS(
        D,
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
      if (E)
        return E == null ? void 0 : E.focus();
      if (D.code === "Space")
        return;
      const x = ((M = g.value) == null ? void 0 : M.getItems()) ?? [];
      if (N && (D.key === "Tab" && D.preventDefault(), !m && O && b(D.key, x)), D.target !== v.value || !CS.includes(D.key))
        return;
      D.preventDefault();
      const W = [...x.map((R) => R.ref)];
      Rp.includes(D.key) && W.reverse(), PS(W);
    }
    function F(D) {
      var k, N;
      (N = (k = D == null ? void 0 : D.currentTarget) == null ? void 0 : k.contains) != null && N.call(k, D.target) || (window.clearTimeout(u.value), l.value = "");
    }
    function B(D) {
      var m;
      if (!os(D))
        return;
      const k = D.target, N = d.value !== D.clientX;
      if ((m = D == null ? void 0 : D.currentTarget) != null && m.contains(k) && N) {
        const O = D.clientX > d.value ? "right" : "left";
        h.value = O, d.value = D.clientX;
      }
    }
    return AO({
      onItemEnter: (D) => !!A(D),
      onItemLeave: (D) => {
        var k;
        A(D) || ((k = v.value) == null || k.focus(), w.value = null);
      },
      onTriggerLeave: (D) => !!A(D),
      searchRef: l,
      pointerGraceTimerRef: f,
      onPointerGraceIntentChange: (D) => {
        p.value = D;
      }
    }), (D, k) => (C(), H(S(Np), {
      "as-child": "",
      trapped: S(i),
      onMountAutoFocus: P,
      onUnmountAutoFocus: k[7] || (k[7] = (N) => r("closeAutoFocus", N))
    }, {
      default: z(() => [
        Q(S(Ip), {
          "as-child": "",
          "disable-outside-pointer-events": S(s),
          onEscapeKeyDown: k[2] || (k[2] = (N) => r("escapeKeyDown", N)),
          onPointerDownOutside: k[3] || (k[3] = (N) => r("pointerDownOutside", N)),
          onFocusOutside: k[4] || (k[4] = (N) => r("focusOutside", N)),
          onInteractOutside: k[5] || (k[5] = (N) => r("interactOutside", N)),
          onDismiss: k[6] || (k[6] = (N) => r("dismiss"))
        }, {
          default: z(() => [
            Q(S(sO), {
              ref_key: "rovingFocusGroupRef",
              ref: g,
              "current-tab-stop-id": w.value,
              "onUpdate:currentTabStopId": k[0] || (k[0] = (N) => w.value = N),
              "as-child": "",
              orientation: "vertical",
              dir: S(a).dir.value,
              loop: S(c),
              onEntryFocus: k[1] || (k[1] = (N) => {
                r("entryFocus", N), S(a).isUsingKeyboardRef.value || N.preventDefault();
              })
            }, {
              default: z(() => [
                Q(S(mO), {
                  ref: S(y),
                  role: "menu",
                  as: D.as,
                  "as-child": D.asChild,
                  "aria-orientation": "vertical",
                  "data-reka-menu-content": "",
                  "data-state": S(Lp)(S(o).open.value),
                  dir: S(a).dir.value,
                  side: D.side,
                  "side-offset": D.sideOffset,
                  align: D.align,
                  "align-offset": D.alignOffset,
                  "avoid-collisions": D.avoidCollisions,
                  "collision-boundary": D.collisionBoundary,
                  "collision-padding": D.collisionPadding,
                  "arrow-padding": D.arrowPadding,
                  "prioritize-position": D.prioritizePosition,
                  "position-strategy": D.positionStrategy,
                  "update-position-strategy": D.updatePositionStrategy,
                  sticky: D.sticky,
                  "hide-when-detached": D.hideWhenDetached,
                  reference: D.reference,
                  onKeydown: $,
                  onBlur: F,
                  onPointermove: B
                }, {
                  default: z(() => [
                    U(D.$slots, "default")
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
}), CO = /* @__PURE__ */ J({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Kp(), { forwardRef: r } = pe(), { CollectionItem: o } = Vp(), a = q(!1);
    async function i(c) {
      if (!c.defaultPrevented && os(c)) {
        if (t.disabled)
          n.onItemLeave(c);
        else if (!n.onItemEnter(c)) {
          const u = c.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function s(c) {
      await Ve(), !c.defaultPrevented && os(c) && n.onItemLeave(c);
    }
    return (c, l) => (C(), H(S(o), {
      value: { textValue: c.textValue }
    }, {
      default: z(() => [
        Q(S(Le), ue({
          ref: S(r),
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
            await Ve(), !(u.defaultPrevented || c.disabled) && (a.value = !0);
          }),
          onBlur: l[1] || (l[1] = async (u) => {
            await Ve(), !u.defaultPrevented && (a.value = !1);
          })
        }), {
          default: z(() => [
            U(c.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), PO = /* @__PURE__ */ J({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, r = t, { forwardRef: o, currentElement: a } = pe(), i = Ws(), s = Kp(), c = q(!1);
    async function l() {
      const u = a.value;
      if (!n.disabled && u) {
        const f = new CustomEvent(ES, {
          bubbles: !0,
          cancelable: !0
        });
        r("select", f), await Ve(), f.defaultPrevented ? c.value = !1 : i.onClose();
      }
    }
    return (u, f) => (C(), H(CO, ue(n, {
      ref: S(o),
      onClick: l,
      onPointerdown: f[0] || (f[0] = () => {
        c.value = !0;
      }),
      onPointerup: f[1] || (f[1] = async (p) => {
        var h;
        await Ve(), !p.defaultPrevented && (c.value || (h = p.currentTarget) == null || h.click());
      }),
      onKeydown: f[2] || (f[2] = async (p) => {
        const h = S(s).searchRef.value !== "";
        u.disabled || h && p.key === " " || S(rs).includes(p.key) && (p.currentTarget.click(), p.preventDefault());
      })
    }), {
      default: z(() => [
        U(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kO = /* @__PURE__ */ J({
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
    const n = e, r = t, o = _o(n, r), a = No(), { forwardRef: i, currentElement: s } = pe();
    return jp(s), (c, l) => (C(), H(Gp, ue(S(o), {
      ref: S(i),
      "trap-focus": S(a).open.value,
      "disable-outside-pointer-events": S(a).open.value,
      "disable-outside-scroll": !0,
      onDismiss: l[0] || (l[0] = (u) => S(a).onOpenChange(!1)),
      onFocusOutside: l[1] || (l[1] = $t((u) => r("focusOutside", u), ["prevent"]))
    }), {
      default: z(() => [
        U(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), DO = /* @__PURE__ */ J({
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
    const o = _o(e, t), a = No();
    return (i, s) => (C(), H(Gp, ue(S(o), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: s[0] || (s[0] = (c) => S(a).onOpenChange(!1))
    }), {
      default: z(() => [
        U(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), TO = /* @__PURE__ */ J({
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
    const o = _o(e, t), a = No(), i = Ws();
    return (s, c) => (C(), H(S(Lo), {
      present: s.forceMount || S(a).open.value
    }, {
      default: z(() => [
        S(i).modal.value ? (C(), H(kO, Oe(ue({ key: 0 }, { ...s.$attrs, ...S(o) })), {
          default: z(() => [
            U(s.$slots, "default")
          ]),
          _: 3
        }, 16)) : (C(), H(DO, Oe(ue({ key: 1 }, { ...s.$attrs, ...S(o) })), {
          default: z(() => [
            U(s.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), $O = /* @__PURE__ */ J({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (C(), H(S(zp), Oe(ke(t)), {
      default: z(() => [
        U(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), FO = /* @__PURE__ */ J({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, r) => (C(), H(S(Le), ue(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: z(() => [
        U(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), IO = /* @__PURE__ */ J({
  __name: "MenuAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, r) => (C(), H(S(cO), Oe(ke(t)), {
      default: z(() => [
        U(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), RO = /* @__PURE__ */ J({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (C(), H(S(zp), Oe(ke(t)), {
      default: z(() => [
        U(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Yp, LO] = Ct("DropdownMenuRoot"), Xp = /* @__PURE__ */ J({
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
    pe();
    const o = Er(n, "open", r, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), a = q(), { modal: i, dir: s } = en(n), c = Hs(s);
    return LO({
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
    }), (l, u) => (C(), H(S(OO), {
      open: S(o),
      "onUpdate:open": u[0] || (u[0] = (f) => wh(o) ? o.value = f : null),
      dir: S(c),
      modal: S(i)
    }, {
      default: z(() => [
        U(l.$slots, "default", { open: S(o) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), Jp = /* @__PURE__ */ J({
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
    const o = _o(e, t);
    pe();
    const a = Yp(), i = q(!1);
    function s(c) {
      c.defaultPrevented || (i.value || setTimeout(() => {
        var l;
        (l = a.triggerElement.value) == null || l.focus();
      }, 0), i.value = !1, c.preventDefault());
    }
    return a.contentId || (a.contentId = _n(void 0, "reka-dropdown-menu-content")), (c, l) => {
      var u;
      return C(), H(S(TO), ue(S(o), {
        id: S(a).contentId,
        "aria-labelledby": (u = S(a)) == null ? void 0 : u.triggerId,
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
          (!S(a).modal.value || d) && (i.value = !0), (w = S(a).triggerElement.value) != null && w.contains(f.target) && f.preventDefault();
        })
      }), {
        default: z(() => [
          U(c.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), _O = /* @__PURE__ */ J({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = Ar(t);
    return pe(), (a, i) => (C(), H(S(PO), Oe(ke({ ...n, ...S(o) })), {
      default: z(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qp = /* @__PURE__ */ J({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (C(), H(S($O), Oe(ke(t)), {
      default: z(() => [
        U(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), NO = /* @__PURE__ */ J({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return pe(), (n, r) => (C(), H(S(FO), Oe(ke(t)), {
      default: z(() => [
        U(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zp = /* @__PURE__ */ J({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Yp(), { forwardRef: r, currentElement: o } = pe();
    return Ee(() => {
      n.triggerElement = o;
    }), n.triggerId || (n.triggerId = _n(void 0, "reka-dropdown-menu-trigger")), (a, i) => (C(), H(S(IO), { "as-child": "" }, {
      default: z(() => [
        Q(S(Le), {
          id: S(n).triggerId,
          ref: S(r),
          type: a.as === "button" ? "button" : void 0,
          "as-child": t.asChild,
          as: a.as,
          "aria-haspopup": "menu",
          "aria-expanded": S(n).open.value,
          "aria-controls": S(n).open.value ? S(n).contentId : void 0,
          "data-disabled": a.disabled ? "" : void 0,
          disabled: a.disabled,
          "data-state": S(n).open.value ? "open" : "closed",
          onClick: i[0] || (i[0] = async (s) => {
            var c;
            !a.disabled && s.button === 0 && s.ctrlKey === !1 && ((c = S(n)) == null || c.onOpenToggle(), await Ve(), S(n).open.value && s.preventDefault());
          }),
          onKeydown: i[1] || (i[1] = on(
            (s) => {
              a.disabled || (["Enter", " "].includes(s.key) && S(n).onOpenToggle(), s.key === "ArrowDown" && S(n).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: z(() => [
            U(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), MO = { class: "text-primary overflow-clip w-5" }, BO = { key: 0 }, jO = {
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
    ), Ee(() => {
      n.value = t.open;
    }), (r, o) => (C(), H(S(Pp), {
      defaultOpen: e.open,
      open: n.value,
      "onUpdate:open": o[0] || (o[0] = (a) => n.value = a),
      class: "mt-2 rounded-lg border-2 border-gray-200 dark:border-gray-700"
    }, {
      default: z(() => [
        Q(S(Tp), {
          class: "focusable relative flex w-full items-center gap-2 justify-center cursor-pointer rounded-lg border-b-2 border-gray-200 bg-neutral-50 px-6 py-1 text-center",
          style: Wt({ backgroundColor: e.headerColor })
        }, {
          default: z(() => [
            j("div", MO, [
              Q(un, {
                name: "collapse-icon",
                mode: "out-in"
              }, {
                default: z(() => [
                  n.value ? (C(), H(S(Be), {
                    key: 0,
                    icon: S(Vy)
                  }, null, 8, ["icon"])) : (C(), H(S(Be), {
                    key: 1,
                    icon: S(Df)
                  }, null, 8, ["icon"]))
                ]),
                _: 1
              })
            ]),
            e.header ? (C(), L("div", BO, Z(e.header), 1)) : U(r.$slots, "trigger", { key: 1 })
          ]),
          _: 3
        }, 8, ["style"]),
        Q(S(Dp), { class: "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden" }, {
          default: z(() => [
            j("div", {
              class: ee(["mt-2", { "px-4 pb-2": e.header }])
            }, [
              U(r.$slots, "default")
            ], 2)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["defaultOpen", "open"]));
  }
}, uo = {
  START: "start",
  CENTER: "center",
  END: "end"
}, TA = /* @__PURE__ */ J({
  __name: "Dropdown",
  props: {
    align: {
      type: String,
      default: uo.START,
      validator(e) {
        return Object.values(uo).includes(e);
      }
    },
    alignOffset: {
      type: Number,
      default: 5
    }
  },
  setup(e) {
    const t = q(!1);
    return (n, r) => (C(), H(S(Xp), {
      open: t.value,
      "onUpdate:open": r[0] || (r[0] = (o) => t.value = o)
    }, {
      default: z(() => [
        Q(S(Zp), { "aria-label": "Dropdown" }, {
          default: z(() => [
            U(n.$slots, "trigger")
          ]),
          _: 3
        }),
        Q(S(Qp), null, {
          default: z(() => [
            Q(S(Jp), ue({ alignOffset: e.alignOffset }, n.$attrs, {
              align: e.align,
              class: "ring-opacity-5 z-50 mt-2 rounded bg-white shadow ring-1 ring-gray-400 will-change-[opacity,transform] data-[side=top]:animate-slide-down-fade data-[side=right]:animate-slide-left-fade data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade"
            }), {
              default: z(() => [
                U(n.$slots, "content")
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
}), $A = {
  __name: "DropdownLink",
  props: {
    href: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (C(), H(S(_O), null, {
      default: z(() => [
        Q(S(ct), ue(t.$attrs, {
          href: e.href,
          class: "focusable block w-full rounded px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-hidden"
        }), {
          default: z(() => [
            U(t.$slots, "default")
          ]),
          _: 3
        }, 16, ["href"])
      ]),
      _: 3
    }));
  }
}, FA = {
  __name: "DropdownSeparator",
  setup(e) {
    return (t, n) => (C(), H(S(NO), { class: "mx-1 my-px h-px bg-gray-300" }));
  }
}, qO = ["href", "target"], IA = {
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
    return (r, o) => e.href && (e.method || e.data) ? (C(), H(S(ct), {
      key: 0,
      href: e.href,
      method: e.method,
      data: e.data,
      class: ee(["focusable inline-flex cursor-pointer select-none items-center justify-center gap-2 rounded px-2 text-sm font-medium leading-normal", n()]),
      as: "button",
      tabindex: "0"
    }, {
      default: z(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "method", "data", "class"])) : (C(), L("a", {
      key: 1,
      href: e.href,
      target: e.target,
      class: ee(["focusable inline-flex cursor-pointer select-none items-center justify-center gap-2 rounded px-2 text-sm font-medium leading-normal", n()]),
      tabindex: "0"
    }, [
      U(r.$slots, "default")
    ], 10, qO));
  }
}, UO = {
  class: "focusable flex items-center whitespace-nowrap rounded bg-primary px-2 text-sm text-white hover:bg-primary-700 motion-reduce:transition-none",
  type: "button"
}, zO = { class: "mx-1 w-2" }, VO = ["aria-labelledby"], RA = /* @__PURE__ */ J({
  __name: "LinkDropdownButton",
  props: {
    align: {
      type: String,
      default: uo.START,
      validator(e) {
        return Object.values(uo).includes(e);
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
    return (n, r) => (C(), H(S(Xp), {
      open: t.value,
      "onUpdate:open": r[0] || (r[0] = (o) => t.value = o)
    }, {
      default: z(() => [
        Q(S(Zp), {
          "aria-label": "Dropdown",
          asChild: ""
        }, {
          default: z(() => [
            j("button", UO, [
              me(Z(e.title) + " ", 1),
              j("span", zO, [
                Q(S(Be), { icon: S(kf) }, null, 8, ["icon"])
              ])
            ])
          ]),
          _: 1
        }),
        Q(S(Qp), null, {
          default: z(() => [
            Q(S(Jp), ue({ alignOffset: e.alignOffset }, n.$attrs, {
              align: e.align,
              class: "ring-opacity-5 z-50 mt-2 rounded bg-white shadow ring-1 ring-gray-400 will-change-[opacity,transform] data-[side=top]:animate-slide-down-fade data-[side=right]:animate-slide-left-fade data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade"
            }), {
              default: z(() => [
                j("ul", {
                  class: "absolute z-1000 float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 data-te-dropdown-show:block",
                  "aria-labelledby": e.title,
                  "data-te-dropdown-menu-ref": ""
                }, [
                  U(n.$slots, "default")
                ], 8, VO)
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
}), HO = ["href"], LA = {
  __name: "LinkDropdownButtonItem",
  props: {
    href: String,
    title: String
  },
  setup(e) {
    return (t, n) => (C(), L("li", null, [
      j("a", {
        class: "focusable inline-flex w-full items-center justify-center whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600",
        href: e.href
      }, Z(e.title), 9, HO)
    ]));
  }
}, _A = {
  __name: "Logs",
  props: {
    header: { default: "Logs" },
    logs: Object
  },
  setup(e) {
    return (t, n) => (C(), H(S(jO), { header: e.header }, {
      default: z(() => [
        Q(S(sE), { logs: e.logs }, null, 8, ["logs"])
      ]),
      _: 1
    }, 8, ["header"]));
  }
}, WO = {
  key: 0,
  class: "flex w-full items-center justify-center"
}, KO = {
  key: 1,
  class: "mt-1",
  id: "logs"
}, GO = {
  key: 0,
  class: "text-center"
}, YO = {
  key: 1,
  class: "ml-3 border-l-2 border-primary"
}, XO = { class: "flex-start w-full md:flex" }, JO = { class: "-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-primary text-xs text-white" }, QO = { class: "mb-3 ml-2 block w-full rounded-lg bg-neutral-50 px-3 py-2 shadow-md shadow-black/5" }, ZO = { class: "mb-1 flex justify-between" }, eE = { class: "text-sm text-neutral-500" }, tE = {
  key: 0,
  class: "text-bold mr-0.5 text-sm text-primary-500"
}, nE = {
  key: 1,
  class: "text-sm text-primary-500"
}, rE = { class: "text-sm text-neutral-500" }, oE = { class: "font-medium" }, aE = {
  key: 0,
  class: "line-through"
}, iE = ["innerHTML"], sE = {
  __name: "LogsContent",
  props: {
    logs: Object
  },
  setup(e) {
    return yr.add(Df, $i, Gy, jy, Ky), (t, n) => e.logs == null ? (C(), L("div", WO, [
      Q(S(nh))
    ])) : (C(), L("div", KO, [
      e.logs.total ? (C(), L("ol", YO, [
        (C(!0), L(ie, null, et(e.logs.data, (r) => (C(), L("li", {
          key: r.id
        }, [
          j("div", XO, [
            j("div", JO, [
              Q(S(Be), {
                icon: r.icon
              }, null, 8, ["icon"])
            ]),
            j("div", QO, [
              j("div", ZO, [
                j("span", eE, [
                  me(Z(r.event_formatted) + " ", 1),
                  r.reference ? (C(), L("span", tE, Z(r.reference), 1)) : Y("", !0),
                  r.causer ? (C(), L(ie, { key: 1 }, [
                    r.causer.id ? (C(), H(S(ct), {
                      key: 0,
                      href: t.route("users.show", r.causer.id),
                      class: "text-sm text-primary-500"
                    }, {
                      default: z(() => [
                        me(" (" + Z(r.causer.first_name) + ") ", 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])) : (C(), L("span", nE, "(" + Z(r.causer.first_name) + ")", 1))
                  ], 64)) : Y("", !0)
                ]),
                j("span", rE, Z(r.created_date_full), 1)
              ]),
              (C(!0), L(ie, null, et(r.changes_formatted, (o, a) => (C(), L("p", {
                key: a,
                class: "mb-0 text-neutral-700"
              }, [
                j("span", oE, Z(a) + ":", 1),
                o.old ? (C(), L("span", aE, Z(o.old), 1)) : Y("", !0),
                me(" " + Z(o.new), 1)
              ]))), 128)),
              r.description_details ? (C(), L("p", {
                key: 0,
                class: "text-neutral-700",
                innerHTML: r.description_details
              }, null, 8, iE)) : Y("", !0)
            ])
          ])
        ]))), 128))
      ])) : (C(), L("p", GO, "No Data")),
      e.logs.links ? (C(), H(S(eh), {
        key: 2,
        class: "mt-6",
        links: e.logs.links,
        logs: !0
      }, null, 8, ["links"])) : Y("", !0)
    ]));
  }
}, NA = /* @__PURE__ */ J({
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
    }, i = (b) => {
      b.key === "Escape" && n.show && a();
    };
    Ee(() => document.addEventListener("keydown", i)), Nt(() => {
      document.removeEventListener("keydown", i), document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", y), document.body.style.overflow = null;
    });
    const s = G(() => {
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
    }), c = q(!1), l = q(null), u = q(0), f = q(0), p = q(0), h = q(0), d = q(null), w = q(null), g = (b, A) => {
      c.value = !0, document.addEventListener("mousemove", v), document.addEventListener("mouseup", y), l.value = A, u.value = b.clientX, f.value = b.clientY, p.value = o.value.offsetWidth, h.value = o.value.offsetHeight;
    }, y = (b) => {
      c.value = !1, document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", y);
    }, v = (b) => {
      if (!c.value) return;
      const A = (b.clientX - u.value) * 2, P = b.clientY - f.value;
      l.value.includes("x") && (d.value = p.value + A + "px"), l.value.includes("-x") && (d.value = p.value - A + "px"), l.value.includes("y") && (w.value = h.value + P + "px");
    };
    return (b, A) => (C(), H(Uc, { to: "body" }, [
      Q(un, { "leave-active-class": "duration-200" }, {
        default: z(() => [
          ot(j("div", {
            class: ee(["modal fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0", { flex: e.alignCenter, "mb-16 items-center justify-center": e.alignCenter }]),
            "scroll-region": ""
          }, [
            Q(un, {
              "enter-active-class": `backdrop-transition enter ease-out duration-[${e.backdropDuration}ms]`,
              "enter-from-class": "opacity-0",
              "enter-to-class": "opacity-100",
              "leave-active-class": `backdrop-transition leave ease-in duration-[${e.backdropDuration}ms]`,
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: z(() => [
                ot(j("div", {
                  class: "fixed inset-0 transform transition-all",
                  onClick: a
                }, [
                  j("div", {
                    class: ee(["backdrop absolute inset-0 bg-gray-500 opacity-75", { [e.backdropCustomClass]: !!e.backdropCustomClass }])
                  }, null, 2)
                ], 512), [
                  [Dn, e.show]
                ])
              ]),
              _: 1
            }, 8, ["enter-active-class", "leave-active-class"]),
            Q(un, {
              "enter-active-class": `modal-transition enter ease-out duration-[${e.modalDuration}ms]`,
              "enter-from-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              "enter-to-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-active-class": `modal-transition leave ease-in duration-[${e.modalDuration}ms]`,
              "leave-from-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-to-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            }, {
              default: z(() => [
                ot(j("div", {
                  ref_key: "modalContent",
                  ref: o,
                  class: ee(["mb-6 transform rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full", {
                    [s.value]: !!s.value,
                    "border-pink rounded-md border-2 border-solid": e.showBorder,
                    [e.modalCustomClass]: !!e.modalCustomClass
                  }]),
                  style: Wt({
                    userSelect: c.value ? "none" : "auto",
                    transition: c.value ? "none" : "",
                    width: d.value || "",
                    height: w.value || "",
                    maxWidth: d.value || "",
                    maxHeight: w.value || ""
                  })
                }, [
                  e.show ? U(b.$slots, "default", { key: 0 }) : Y("", !0),
                  e.resizable ? (C(), L(ie, { key: 1 }, [
                    j("div", {
                      class: "absolute bottom-0 left-0 h-1 w-full cursor-row-resize",
                      onMousedown: A[0] || (A[0] = (P) => g(P, "y")),
                      onMouseup: y
                    }, null, 32),
                    j("div", {
                      class: "absolute left-0 top-0 h-full w-1 cursor-col-resize",
                      onMousedown: A[1] || (A[1] = (P) => g(P, "-x")),
                      onMouseup: y
                    }, null, 32),
                    j("div", {
                      class: "absolute right-0 top-0 h-full w-1 cursor-col-resize",
                      onMousedown: A[2] || (A[2] = (P) => g(P, "x")),
                      onMouseup: y
                    }, null, 32),
                    j("div", {
                      class: "absolute bottom-0 right-0 h-1 w-1 cursor-se-resize",
                      onMousedown: A[3] || (A[3] = (P) => g(P, "xy")),
                      onMouseup: y
                    }, null, 32),
                    j("div", {
                      class: "absolute bottom-0 left-0 h-1 w-1 cursor-sw-resize",
                      onMousedown: A[4] || (A[4] = (P) => g(P, "-xy")),
                      onMouseup: y
                    }, null, 32)
                  ], 64)) : Y("", !0)
                ], 6), [
                  [Dn, e.show]
                ])
              ]),
              _: 3
            }, 8, ["enter-active-class", "leave-active-class"])
          ], 2), [
            [Dn, e.show]
          ])
        ]),
        _: 3
      })
    ]));
  }
}), lE = {
  key: 2,
  class: "mt-5 flex justify-end"
}, MA = /* @__PURE__ */ J({
  __name: "NewModal",
  props: /* @__PURE__ */ fi({
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
    const t = e, n = _c(e, "modelValue"), r = (o) => {
      n.value = o;
    };
    return Ee(() => {
      t.defaultOpen && (n.value = !0);
    }), Nt(() => {
      n.value = !1;
    }), de(() => t.defaultOpen, (o) => {
      n.value = o;
    }), (o, a) => (C(), H(S(vS), {
      defaultOpen: e.defaultOpen,
      open: n.value,
      "onUpdate:open": [
        a[0] || (a[0] = (i) => n.value = i),
        r
      ]
    }, {
      default: z(() => [
        o.$slots.trigger ? (C(), H(S(nO), {
          key: 0,
          asChild: ""
        }, {
          default: z(() => [
            U(o.$slots, "trigger")
          ]),
          _: 3
        })) : Y("", !0),
        Q(S(RO), null, {
          default: z(() => [
            Q(S(ZS), { class: "bg-dark/50 data-[state=open]:animate-fade-in fixed inset-0 z-30" }),
            Q(S(WS), ue({ class: "data-[state=open]:animate-slide-up-fade fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded bg-white p-5 shadow-lg/20 focus:outline-none z-[100]" }, o.$attrs), {
              default: z(() => [
                e.title || o.$slots.header ? (C(), H(S(tO), {
                  key: 0,
                  class: "m-0 text-lg font-semibold"
                }, {
                  default: z(() => [
                    U(o.$slots, "header", {}, () => [
                      me(Z(e.title), 1)
                    ])
                  ]),
                  _: 3
                })) : Y("", !0),
                e.description || o.$slots.description ? (C(), H(S(KS), {
                  key: 1,
                  class: "mt-2 mb-5 text-sm leading-normal"
                }, {
                  default: z(() => [
                    U(o.$slots, "description", {}, () => [
                      me(Z(e.description), 1)
                    ])
                  ]),
                  _: 3
                })) : Y("", !0),
                U(o.$slots, "default"),
                o.$slots.footer ? (C(), L("div", lE, [
                  U(o.$slots, "footer")
                ])) : Y("", !0),
                Q(S(bS), {
                  class: "focusable cursor-pointer text-dark hover:bg-primary/50 focus:bg-primary/60 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none transition-all",
                  "aria-label": "Close"
                }, {
                  default: z(() => [
                    Q(S(Be), { icon: S(Wy) }, null, 8, ["icon"])
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
}), uE = { class: "ml-3 flex-1 whitespace-nowrap" }, BA = {
  __name: "NavLink",
  props: {
    href: String,
    active: Boolean
  },
  setup(e) {
    const t = e, n = G(
      () => t.active ? "focusable flex items-center p-2 text-base font-normal bg-accent text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700" : "focusable flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    );
    return (r, o) => (C(), H(S(ct), {
      href: e.href,
      class: ee(n.value)
    }, {
      default: z(() => [
        U(r.$slots, "icon"),
        j("span", uE, [
          U(r.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}, cE = { class: "pagination flex justify-between" }, fE = ["value", "selected"], dE = {
  key: 0,
  "aria-label": "Page navigation"
}, pE = ["innerHTML"], hE = ["innerHTML", "onClick"], eh = {
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
    const n = t, r = e, o = q(r.defaultPerPage), a = [10, 25, 50, 100, 250], i = G(() => {
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
    return (l, u) => (C(), L("div", cE, [
      j("div", null, [
        e.showPerPage ? (C(), H(S(sg), {
          key: 0,
          type: "select",
          modelValue: o.value,
          "onUpdate:modelValue": u[0] || (u[0] = (f) => o.value = f),
          class: "per-page-input w-20",
          onChanged: c
        }, {
          default: z(() => [
            (C(), L(ie, null, et(a, (f) => j("option", {
              key: f,
              value: f,
              selected: f == o.value
            }, Z(f), 9, fE)), 64))
          ]),
          _: 1
        }, 8, ["modelValue"])) : Y("", !0)
      ]),
      i.value.length > 3 ? (C(), L("nav", dE, [
        j("ul", {
          class: ee(["list-style-none flex", { [e.customListClass]: e.customListClass }])
        }, [
          (C(!0), L(ie, null, et(i.value, (f, p) => (C(), L("li", { key: p }, [
            e.linkReturn ? (C(), L(ie, { key: 0 }, [
              f.url === null ? (C(), L("button", {
                key: 0,
                class: ee(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [e.customLinkClass]: e.customLinkClass
                }]),
                innerHTML: f.label,
                onClick: u[1] || (u[1] = (h) => s(""))
              }, null, 10, pE)) : (C(), L("button", {
                key: 1,
                class: ee(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", {
                  "font-bold text-primary": f.active,
                  [e.customLinkClass]: e.customLinkClass,
                  [e.customActiveLinkClass]: f.active && e.customActiveLinkClass
                }]),
                innerHTML: f.label,
                onClick: (h) => s(f.url)
              }, null, 10, hE))
            ], 64)) : (C(), L(ie, { key: 1 }, [
              f.url === null ? (C(), H(S(ct), {
                key: 0,
                class: ee(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [e.customLinkClass]: e.customLinkClass
                }]),
                innerHTML: f.label,
                href: ""
              }, null, 8, ["class", "innerHTML"])) : (C(), H(S(ct), {
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
      ])) : Y("", !0),
      u[2] || (u[2] = j("div", null, null, -1))
    ]));
  }
}, mE = ["type", "disabled"], th = {
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
    return (t, n) => (C(), L("button", {
      type: e.type,
      disabled: e.disabled,
      class: ee({
        [e.customButtonClass]: !!e.customButtonClass,
        "focusable inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-primary-700 focus:bg-primary-700 focus:outline-hidden focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 active:bg-primary-700 disabled:cursor-not-allowed disabled:brightness-125 disabled:grayscale-[30%]": !e.customButtonClass
      })
    }, [
      U(t.$slots, "default")
    ], 10, mE));
  }
}, yE = ["type", "disabled"], jA = {
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
    return (t, n) => (C(), L("button", {
      type: e.type,
      disabled: e.disabled,
      class: "focusable inline-flex items-center rounded border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-hidden focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700 disabled:cursor-not-allowed disabled:brightness-125 disabled:grayscale-[30%]"
    }, [
      U(t.$slots, "default")
    ], 8, yE));
  }
}, qA = {
  __name: "ResponsiveNavLink",
  props: ["href", "active"],
  setup(e) {
    const t = e, n = G(
      () => t.active ? "focusable block w-full pl-3 pr-4 py-2 border-l-4 border-accent-400 text-left text-base font-medium text-accent-700 bg-accent-50 focus:outline-hidden focus:text-accent-800 focus:bg-accent-100 focus:border-accent-700 transition duration-150 ease-in-out" : "focusable block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-hidden focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (r, o) => (C(), H(S(ct), {
      href: e.href,
      class: ee(n.value)
    }, {
      default: z(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}, gE = ["type"], UA = {
  __name: "SecondaryButton",
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(e) {
    return (t, n) => (C(), L("button", {
      type: e.type,
      class: "focusable inline-flex items-center rounded border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-hidden focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:opacity-25"
    }, [
      U(t.$slots, "default")
    ], 8, gE));
  }
}, vE = {
  key: 0,
  class: "relative mb-2 rounded-lg border-b-2 border-gray-200 bg-neutral-50 px-6 py-1 text-center"
}, bE = {
  key: 0,
  class: "absolute right-0 top-0 mr-2 mt-1"
}, zA = {
  __name: "Section",
  props: {
    header: String,
    overflow: {
      default: !1,
      type: Boolean
    }
  },
  setup(e) {
    return (t, n) => (C(), L("div", {
      class: ee(["rounded-lg border-2 border-gray-200 bg-white dark:border-gray-700", { "px-4 py-2": !e.header, "overflow-hidden": e.overflow }])
    }, [
      j("div", {
        class: ee(["sm:rounded-lg", { "p-1": !e.header }])
      }, [
        e.header ? (C(), L("div", vE, [
          j("span", null, Z(e.header), 1),
          t.$slots.headerButton ? (C(), L("div", bE, [
            U(t.$slots, "headerButton")
          ])) : Y("", !0)
        ])) : Y("", !0),
        j("div", {
          class: ee({ "px-4 pb-2": e.header })
        }, [
          U(t.$slots, "default")
        ], 2)
      ], 2)
    ], 2));
  }
}, wE = {}, xE = {
  class: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]",
  role: "status"
};
function SE(e, t) {
  return C(), L("div", xE, t[0] || (t[0] = [
    j("span", { class: "absolute! -m-px! h-px! w-px! overflow-hidden! whitespace-nowrap! border-0! p-0! [clip:rect(0,0,0,0)]!" }, "Loading...", -1)
  ]));
}
const nh = /* @__PURE__ */ go(wE, [["render", SE]]), OE = ["onClick"], EE = { class: "h:10 rounded-t-lg bg-white py-1 text-center md:h-10 md:py-2" }, VA = {
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
    return (i, s) => (C(), L("div", null, [
      j("div", {
        class: ee(["flex flex-wrap gap-2 lg:flex-nowrap", { [e.customContainerClass]: e.customContainerClass }])
      }, [
        (C(!0), L(ie, null, et(e.stats, (c) => (C(), L("div", {
          class: ee(["flex w-full cursor-pointer flex-col rounded-lg border bg-gray-100 shadow", {
            "border-primary bg-primary-50 shadow-primary-50": a(c.name),
            [e.customStatClass]: e.customStatClass
          }]),
          onClick: (l) => o(c.name),
          key: c.value
        }, [
          j("div", null, [
            j("div", EE, [
              j("h5", {
                class: ee(["text-xl font-medium leading-tight text-neutral-800", { [e.customStatValueClass]: e.customStatValueClass }])
              }, Z(c.value), 3)
            ])
          ]),
          j("div", {
            class: ee(["flex flex-auto flex-col gap-y-4 p-1 text-center md:py-2", { [e.customStatLabelClass]: e.customStatLabelClass }])
          }, Z(c.label ?? c.name), 3)
        ], 10, OE))), 128))
      ], 2)
    ]));
  }
}, HA = {
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
    return Ee(() => {
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
    }), t({ getCurrentOption: () => a.value.find((v) => v[r.optionValue] == u.value) }), (v, b) => (C(), H(S(fv), {
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
      "onUpdate:modelValue": b[0] || (b[0] = (A) => h(A)),
      onSearchchange: d,
      filterPredicate: (A, P) => !0
    }, null, 8, ["id", "label", "list", "optionValue", "optionText", "optionDisabled", "placeholder", "field", "form", "modelValue", "noLabel", "disabled", "noForm", "required"]));
  }
}, AE = ["id"], CE = { class: "ml-3 flex-1 whitespace-nowrap text-left" }, PE = { class: "space-y-1 px-4" }, WA = {
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
    ), (r, o) => (C(), L("li", null, [
      Q(S(Pp), {
        defaultOpen: e.open,
        open: n.value,
        "onUpdate:open": o[1] || (o[1] = (a) => n.value = a)
      }, {
        default: z(() => [
          Q(S(Tp), { asChild: "" }, {
            default: z(() => [
              j("button", {
                id: e.name,
                onClick: o[0] || (o[0] = (...a) => r.onClick && r.onClick(...a)),
                class: "focusable group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              }, [
                U(r.$slots, "icon"),
                j("span", CE, Z(e.name), 1),
                Q(S(Be), {
                  icon: S(kf),
                  class: ee(["transition-all", { "rotate-180": n.value }])
                }, null, 8, ["icon", "class"])
              ], 8, AE)
            ]),
            _: 3
          }),
          Q(S(Dp), { class: "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden" }, {
            default: z(() => [
              j("ul", PE, [
                U(r.$slots, "default")
              ])
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["defaultOpen", "open"])
    ]));
  }
}, kE = { class: "border-t border-gray-100" }, DE = { class: "divide-y divide-gray-100" }, KA = {
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
    ls("registerItem", (l) => {
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
    }), (l, u) => (C(), L("div", kE, [
      j("dl", DE, [
        U(l.$slots, "default")
      ])
    ]));
  }
}, TE = { class: "description-list-item px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" }, $E = { class: "flex items-center text-sm font-medium" }, FE = {
  key: 0,
  class: "ml-1 text-red-500"
}, IE = { class: "mt-1 min-h-[42px] text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0" }, RE = { class: "flex min-h-full items-center" }, LE = { class: "slot-content grow" }, _E = { class: "ml-4 shrink-0" }, NE = { class: "slot-edit grow" }, ME = { class: "ml-4 shrink-0" }, GA = {
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
    yr.add($i, Il);
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
    }, l = ss("registerItem");
    return Ee(() => {
      l && l({ startEditing: s, stopEditing: c, toggleEditing: i });
    }), t({
      toggleEditing: i,
      startEditing: s,
      stopEditing: c,
      isEditing: () => a.value
    }), (f, p) => (C(), L("div", TE, [
      j("dt", $E, [
        me(Z(e.label) + " ", 1),
        U(f.$slots, "label"),
        e.required ? (C(), L("span", FE, "*")) : Y("", !0)
      ]),
      j("dd", IE, [
        j("div", RE, [
          a.value ? (C(), L(ie, { key: 1 }, [
            j("div", NE, [
              U(f.$slots, "edit")
            ]),
            j("span", ME, [
              j("button", {
                type: "button",
                onClick: i,
                class: "text-xl font-bold text-primary hover:text-primary-400"
              }, [
                Q(S(Be), { icon: S(Il) }, null, 8, ["icon"])
              ])
            ])
          ], 64)) : (C(), L(ie, { key: 0 }, [
            j("div", LE, [
              U(f.$slots, "default"),
              me(" " + Z(e.value), 1)
            ]),
            j("span", _E, [
              e.editable ? (C(), L("button", {
                key: 0,
                type: "button",
                onClick: i,
                class: "text-lg font-bold text-primary hover:text-primary-400"
              }, [
                Q(S(Be), { icon: S($i) }, null, 8, ["icon"])
              ])) : Y("", !0),
              U(f.$slots, "buttons")
            ])
          ], 64))
        ])
      ])
    ]));
  }
};
var ci = { exports: {} };
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.8.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2023
 * @license MIT
 */
var Rc;
function BE() {
  return Rc || (Rc = 1, function(e) {
    (function() {
      var t = "input is invalid type", n = "finalize already called", r = typeof window == "object", o = r ? window : {};
      o.JS_MD5_NO_WINDOW && (r = !1);
      var a = !r && typeof self == "object", i = !o.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
      i ? o = Ri : a && (o = self);
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
        var O = typeof m;
        if (O === "string")
          return [m, !0];
        if (O !== "object" || m === null)
          throw new Error(t);
        if (c && m.constructor === ArrayBuffer)
          return [new Uint8Array(m), !1];
        if (!y(m) && !v(m))
          throw new Error(t);
        return [m, !1];
      }, A = function(m) {
        return function(O) {
          return new D(!0).update(O)[m]();
        };
      }, P = function() {
        var m = A("hex");
        i && (m = $(m)), m.create = function() {
          return new D();
        }, m.update = function(x) {
          return m.create().update(x);
        };
        for (var O = 0; O < p.length; ++O) {
          var E = p[O];
          m[E] = A(E);
        }
        return m;
      }, $ = function(m) {
        var O = Li, E = Li.Buffer, x;
        E.from && !o.JS_MD5_NO_BUFFER_FROM ? x = E.from : x = function(M) {
          return new E(M);
        };
        var W = function(M) {
          if (typeof M == "string")
            return O.createHash("md5").update(M, "utf8").digest("hex");
          if (M == null)
            throw new Error(t);
          return M.constructor === ArrayBuffer && (M = new Uint8Array(M)), y(M) || v(M) || M.constructor === E ? O.createHash("md5").update(x(M)).digest("hex") : m(M);
        };
        return W;
      }, F = function(m) {
        return function(O, E) {
          return new k(O, !0).update(E)[m]();
        };
      }, B = function() {
        var m = F("hex");
        m.create = function(x) {
          return new k(x);
        }, m.update = function(x, W) {
          return m.create(x).update(W);
        };
        for (var O = 0; O < p.length; ++O) {
          var E = p[O];
          m[E] = F(E);
        }
        return m;
      };
      function D(m) {
        if (m)
          d[0] = d[16] = d[1] = d[2] = d[3] = d[4] = d[5] = d[6] = d[7] = d[8] = d[9] = d[10] = d[11] = d[12] = d[13] = d[14] = d[15] = 0, this.blocks = d, this.buffer8 = w;
        else if (c) {
          var O = new ArrayBuffer(68);
          this.buffer8 = new Uint8Array(O), this.blocks = new Uint32Array(O);
        } else
          this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
      }
      D.prototype.update = function(m) {
        if (this.finalized)
          throw new Error(n);
        var O = b(m);
        m = O[0];
        for (var E = O[1], x, W = 0, M, R = m.length, K = this.blocks, oe = this.buffer8; W < R; ) {
          if (this.hashed && (this.hashed = !1, K[0] = K[16], K[16] = K[1] = K[2] = K[3] = K[4] = K[5] = K[6] = K[7] = K[8] = K[9] = K[10] = K[11] = K[12] = K[13] = K[14] = K[15] = 0), E)
            if (c)
              for (M = this.start; W < R && M < 64; ++W)
                x = m.charCodeAt(W), x < 128 ? oe[M++] = x : x < 2048 ? (oe[M++] = 192 | x >>> 6, oe[M++] = 128 | x & 63) : x < 55296 || x >= 57344 ? (oe[M++] = 224 | x >>> 12, oe[M++] = 128 | x >>> 6 & 63, oe[M++] = 128 | x & 63) : (x = 65536 + ((x & 1023) << 10 | m.charCodeAt(++W) & 1023), oe[M++] = 240 | x >>> 18, oe[M++] = 128 | x >>> 12 & 63, oe[M++] = 128 | x >>> 6 & 63, oe[M++] = 128 | x & 63);
            else
              for (M = this.start; W < R && M < 64; ++W)
                x = m.charCodeAt(W), x < 128 ? K[M >>> 2] |= x << f[M++ & 3] : x < 2048 ? (K[M >>> 2] |= (192 | x >>> 6) << f[M++ & 3], K[M >>> 2] |= (128 | x & 63) << f[M++ & 3]) : x < 55296 || x >= 57344 ? (K[M >>> 2] |= (224 | x >>> 12) << f[M++ & 3], K[M >>> 2] |= (128 | x >>> 6 & 63) << f[M++ & 3], K[M >>> 2] |= (128 | x & 63) << f[M++ & 3]) : (x = 65536 + ((x & 1023) << 10 | m.charCodeAt(++W) & 1023), K[M >>> 2] |= (240 | x >>> 18) << f[M++ & 3], K[M >>> 2] |= (128 | x >>> 12 & 63) << f[M++ & 3], K[M >>> 2] |= (128 | x >>> 6 & 63) << f[M++ & 3], K[M >>> 2] |= (128 | x & 63) << f[M++ & 3]);
          else if (c)
            for (M = this.start; W < R && M < 64; ++W)
              oe[M++] = m[W];
          else
            for (M = this.start; W < R && M < 64; ++W)
              K[M >>> 2] |= m[W] << f[M++ & 3];
          this.lastByteIndex = M, this.bytes += M - this.start, M >= 64 ? (this.start = M - 64, this.hash(), this.hashed = !0) : this.start = M;
        }
        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
      }, D.prototype.finalize = function() {
        if (!this.finalized) {
          this.finalized = !0;
          var m = this.blocks, O = this.lastByteIndex;
          m[O >>> 2] |= u[O & 3], O >= 56 && (this.hashed || this.hash(), m[0] = m[16], m[16] = m[1] = m[2] = m[3] = m[4] = m[5] = m[6] = m[7] = m[8] = m[9] = m[10] = m[11] = m[12] = m[13] = m[14] = m[15] = 0), m[14] = this.bytes << 3, m[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
        }
      }, D.prototype.hash = function() {
        var m, O, E, x, W, M, R = this.blocks;
        this.first ? (m = R[0] - 680876937, m = (m << 7 | m >>> 25) - 271733879 << 0, x = (-1732584194 ^ m & 2004318071) + R[1] - 117830708, x = (x << 12 | x >>> 20) + m << 0, E = (-271733879 ^ x & (m ^ -271733879)) + R[2] - 1126478375, E = (E << 17 | E >>> 15) + x << 0, O = (m ^ E & (x ^ m)) + R[3] - 1316259209, O = (O << 22 | O >>> 10) + E << 0) : (m = this.h0, O = this.h1, E = this.h2, x = this.h3, m += (x ^ O & (E ^ x)) + R[0] - 680876936, m = (m << 7 | m >>> 25) + O << 0, x += (E ^ m & (O ^ E)) + R[1] - 389564586, x = (x << 12 | x >>> 20) + m << 0, E += (O ^ x & (m ^ O)) + R[2] + 606105819, E = (E << 17 | E >>> 15) + x << 0, O += (m ^ E & (x ^ m)) + R[3] - 1044525330, O = (O << 22 | O >>> 10) + E << 0), m += (x ^ O & (E ^ x)) + R[4] - 176418897, m = (m << 7 | m >>> 25) + O << 0, x += (E ^ m & (O ^ E)) + R[5] + 1200080426, x = (x << 12 | x >>> 20) + m << 0, E += (O ^ x & (m ^ O)) + R[6] - 1473231341, E = (E << 17 | E >>> 15) + x << 0, O += (m ^ E & (x ^ m)) + R[7] - 45705983, O = (O << 22 | O >>> 10) + E << 0, m += (x ^ O & (E ^ x)) + R[8] + 1770035416, m = (m << 7 | m >>> 25) + O << 0, x += (E ^ m & (O ^ E)) + R[9] - 1958414417, x = (x << 12 | x >>> 20) + m << 0, E += (O ^ x & (m ^ O)) + R[10] - 42063, E = (E << 17 | E >>> 15) + x << 0, O += (m ^ E & (x ^ m)) + R[11] - 1990404162, O = (O << 22 | O >>> 10) + E << 0, m += (x ^ O & (E ^ x)) + R[12] + 1804603682, m = (m << 7 | m >>> 25) + O << 0, x += (E ^ m & (O ^ E)) + R[13] - 40341101, x = (x << 12 | x >>> 20) + m << 0, E += (O ^ x & (m ^ O)) + R[14] - 1502002290, E = (E << 17 | E >>> 15) + x << 0, O += (m ^ E & (x ^ m)) + R[15] + 1236535329, O = (O << 22 | O >>> 10) + E << 0, m += (E ^ x & (O ^ E)) + R[1] - 165796510, m = (m << 5 | m >>> 27) + O << 0, x += (O ^ E & (m ^ O)) + R[6] - 1069501632, x = (x << 9 | x >>> 23) + m << 0, E += (m ^ O & (x ^ m)) + R[11] + 643717713, E = (E << 14 | E >>> 18) + x << 0, O += (x ^ m & (E ^ x)) + R[0] - 373897302, O = (O << 20 | O >>> 12) + E << 0, m += (E ^ x & (O ^ E)) + R[5] - 701558691, m = (m << 5 | m >>> 27) + O << 0, x += (O ^ E & (m ^ O)) + R[10] + 38016083, x = (x << 9 | x >>> 23) + m << 0, E += (m ^ O & (x ^ m)) + R[15] - 660478335, E = (E << 14 | E >>> 18) + x << 0, O += (x ^ m & (E ^ x)) + R[4] - 405537848, O = (O << 20 | O >>> 12) + E << 0, m += (E ^ x & (O ^ E)) + R[9] + 568446438, m = (m << 5 | m >>> 27) + O << 0, x += (O ^ E & (m ^ O)) + R[14] - 1019803690, x = (x << 9 | x >>> 23) + m << 0, E += (m ^ O & (x ^ m)) + R[3] - 187363961, E = (E << 14 | E >>> 18) + x << 0, O += (x ^ m & (E ^ x)) + R[8] + 1163531501, O = (O << 20 | O >>> 12) + E << 0, m += (E ^ x & (O ^ E)) + R[13] - 1444681467, m = (m << 5 | m >>> 27) + O << 0, x += (O ^ E & (m ^ O)) + R[2] - 51403784, x = (x << 9 | x >>> 23) + m << 0, E += (m ^ O & (x ^ m)) + R[7] + 1735328473, E = (E << 14 | E >>> 18) + x << 0, O += (x ^ m & (E ^ x)) + R[12] - 1926607734, O = (O << 20 | O >>> 12) + E << 0, W = O ^ E, m += (W ^ x) + R[5] - 378558, m = (m << 4 | m >>> 28) + O << 0, x += (W ^ m) + R[8] - 2022574463, x = (x << 11 | x >>> 21) + m << 0, M = x ^ m, E += (M ^ O) + R[11] + 1839030562, E = (E << 16 | E >>> 16) + x << 0, O += (M ^ E) + R[14] - 35309556, O = (O << 23 | O >>> 9) + E << 0, W = O ^ E, m += (W ^ x) + R[1] - 1530992060, m = (m << 4 | m >>> 28) + O << 0, x += (W ^ m) + R[4] + 1272893353, x = (x << 11 | x >>> 21) + m << 0, M = x ^ m, E += (M ^ O) + R[7] - 155497632, E = (E << 16 | E >>> 16) + x << 0, O += (M ^ E) + R[10] - 1094730640, O = (O << 23 | O >>> 9) + E << 0, W = O ^ E, m += (W ^ x) + R[13] + 681279174, m = (m << 4 | m >>> 28) + O << 0, x += (W ^ m) + R[0] - 358537222, x = (x << 11 | x >>> 21) + m << 0, M = x ^ m, E += (M ^ O) + R[3] - 722521979, E = (E << 16 | E >>> 16) + x << 0, O += (M ^ E) + R[6] + 76029189, O = (O << 23 | O >>> 9) + E << 0, W = O ^ E, m += (W ^ x) + R[9] - 640364487, m = (m << 4 | m >>> 28) + O << 0, x += (W ^ m) + R[12] - 421815835, x = (x << 11 | x >>> 21) + m << 0, M = x ^ m, E += (M ^ O) + R[15] + 530742520, E = (E << 16 | E >>> 16) + x << 0, O += (M ^ E) + R[2] - 995338651, O = (O << 23 | O >>> 9) + E << 0, m += (E ^ (O | ~x)) + R[0] - 198630844, m = (m << 6 | m >>> 26) + O << 0, x += (O ^ (m | ~E)) + R[7] + 1126891415, x = (x << 10 | x >>> 22) + m << 0, E += (m ^ (x | ~O)) + R[14] - 1416354905, E = (E << 15 | E >>> 17) + x << 0, O += (x ^ (E | ~m)) + R[5] - 57434055, O = (O << 21 | O >>> 11) + E << 0, m += (E ^ (O | ~x)) + R[12] + 1700485571, m = (m << 6 | m >>> 26) + O << 0, x += (O ^ (m | ~E)) + R[3] - 1894986606, x = (x << 10 | x >>> 22) + m << 0, E += (m ^ (x | ~O)) + R[10] - 1051523, E = (E << 15 | E >>> 17) + x << 0, O += (x ^ (E | ~m)) + R[1] - 2054922799, O = (O << 21 | O >>> 11) + E << 0, m += (E ^ (O | ~x)) + R[8] + 1873313359, m = (m << 6 | m >>> 26) + O << 0, x += (O ^ (m | ~E)) + R[15] - 30611744, x = (x << 10 | x >>> 22) + m << 0, E += (m ^ (x | ~O)) + R[6] - 1560198380, E = (E << 15 | E >>> 17) + x << 0, O += (x ^ (E | ~m)) + R[13] + 1309151649, O = (O << 21 | O >>> 11) + E << 0, m += (E ^ (O | ~x)) + R[4] - 145523070, m = (m << 6 | m >>> 26) + O << 0, x += (O ^ (m | ~E)) + R[11] - 1120210379, x = (x << 10 | x >>> 22) + m << 0, E += (m ^ (x | ~O)) + R[2] + 718787259, E = (E << 15 | E >>> 17) + x << 0, O += (x ^ (E | ~m)) + R[9] - 343485551, O = (O << 21 | O >>> 11) + E << 0, this.first ? (this.h0 = m + 1732584193 << 0, this.h1 = O - 271733879 << 0, this.h2 = E - 1732584194 << 0, this.h3 = x + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + m << 0, this.h1 = this.h1 + O << 0, this.h2 = this.h2 + E << 0, this.h3 = this.h3 + x << 0);
      }, D.prototype.hex = function() {
        this.finalize();
        var m = this.h0, O = this.h1, E = this.h2, x = this.h3;
        return l[m >>> 4 & 15] + l[m & 15] + l[m >>> 12 & 15] + l[m >>> 8 & 15] + l[m >>> 20 & 15] + l[m >>> 16 & 15] + l[m >>> 28 & 15] + l[m >>> 24 & 15] + l[O >>> 4 & 15] + l[O & 15] + l[O >>> 12 & 15] + l[O >>> 8 & 15] + l[O >>> 20 & 15] + l[O >>> 16 & 15] + l[O >>> 28 & 15] + l[O >>> 24 & 15] + l[E >>> 4 & 15] + l[E & 15] + l[E >>> 12 & 15] + l[E >>> 8 & 15] + l[E >>> 20 & 15] + l[E >>> 16 & 15] + l[E >>> 28 & 15] + l[E >>> 24 & 15] + l[x >>> 4 & 15] + l[x & 15] + l[x >>> 12 & 15] + l[x >>> 8 & 15] + l[x >>> 20 & 15] + l[x >>> 16 & 15] + l[x >>> 28 & 15] + l[x >>> 24 & 15];
      }, D.prototype.toString = D.prototype.hex, D.prototype.digest = function() {
        this.finalize();
        var m = this.h0, O = this.h1, E = this.h2, x = this.h3;
        return [
          m & 255,
          m >>> 8 & 255,
          m >>> 16 & 255,
          m >>> 24 & 255,
          O & 255,
          O >>> 8 & 255,
          O >>> 16 & 255,
          O >>> 24 & 255,
          E & 255,
          E >>> 8 & 255,
          E >>> 16 & 255,
          E >>> 24 & 255,
          x & 255,
          x >>> 8 & 255,
          x >>> 16 & 255,
          x >>> 24 & 255
        ];
      }, D.prototype.array = D.prototype.digest, D.prototype.arrayBuffer = function() {
        this.finalize();
        var m = new ArrayBuffer(16), O = new Uint32Array(m);
        return O[0] = this.h0, O[1] = this.h1, O[2] = this.h2, O[3] = this.h3, m;
      }, D.prototype.buffer = D.prototype.arrayBuffer, D.prototype.base64 = function() {
        for (var m, O, E, x = "", W = this.array(), M = 0; M < 15; )
          m = W[M++], O = W[M++], E = W[M++], x += h[m >>> 2] + h[(m << 4 | O >>> 4) & 63] + h[(O << 2 | E >>> 6) & 63] + h[E & 63];
        return m = W[M], x += h[m >>> 2] + h[m << 4 & 63] + "==", x;
      };
      function k(m, O) {
        var E, x = b(m);
        if (m = x[0], x[1]) {
          var W = [], M = m.length, R = 0, K;
          for (E = 0; E < M; ++E)
            K = m.charCodeAt(E), K < 128 ? W[R++] = K : K < 2048 ? (W[R++] = 192 | K >>> 6, W[R++] = 128 | K & 63) : K < 55296 || K >= 57344 ? (W[R++] = 224 | K >>> 12, W[R++] = 128 | K >>> 6 & 63, W[R++] = 128 | K & 63) : (K = 65536 + ((K & 1023) << 10 | m.charCodeAt(++E) & 1023), W[R++] = 240 | K >>> 18, W[R++] = 128 | K >>> 12 & 63, W[R++] = 128 | K >>> 6 & 63, W[R++] = 128 | K & 63);
          m = W;
        }
        m.length > 64 && (m = new D(!0).update(m).array());
        var oe = [], Pe = [];
        for (E = 0; E < 64; ++E) {
          var Ge = m[E] || 0;
          oe[E] = 92 ^ Ge, Pe[E] = 54 ^ Ge;
        }
        D.call(this, O), this.update(Pe), this.oKeyPad = oe, this.inner = !0, this.sharedMemory = O;
      }
      k.prototype = new D(), k.prototype.finalize = function() {
        if (D.prototype.finalize.call(this), this.inner) {
          this.inner = !1;
          var m = this.array();
          D.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(m), D.prototype.finalize.call(this);
        }
      };
      var N = P();
      N.md5 = N, N.md5.hmac = B(), s ? e.exports = N : o.md5 = N;
    })();
  }(ci)), ci.exports;
}
var jE = BE();
const qE = ["src", "alt"], YA = {
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
    const t = e, n = G(() => jE.md5(t.email.trim().toLowerCase())), r = G(() => `https://www.gravatar.com/avatar/${n.value}?s=${t.size}`), o = G(() => `Gravatar for ${t.email}`);
    return (a, i) => (C(), L("img", {
      src: r.value,
      alt: o.value
    }, null, 8, qE));
  }
}, XA = {
  __name: "TdCollapseHandler",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(e) {
    return (t, n) => (C(), H($s, {
      "data-te-collapse-init": "",
      "data-te-target": "#" + e.collapse_id,
      "aria-expanded": "false",
      "aria-controls": e.collapse_id,
      class: "cursor-pointer"
    }, {
      default: z(() => [
        U(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-te-target", "aria-controls"]));
  }
}, JA = {
  install(e) {
    for (const t in components)
      e.component(t, components[t]);
  }
};
export {
  CA as Alert,
  zE as Checkbox,
  jO as CollapsableSection,
  jO as CollapsibleSection,
  jA as DangerButton,
  KA as DescriptionList,
  GA as DescriptionListItem,
  TA as Dropdown,
  $A as DropdownLink,
  HE as DropdownSearchbar,
  FA as DropdownSeparator,
  yA as FileDropZoneInput,
  YA as GravatarImg,
  gA as Images,
  sg as Input,
  gr as InputError,
  xs as InputLabel,
  IA as LinkButton,
  RA as LinkDropdownButton,
  LA as LinkDropdownButtonItem,
  _A as Logs,
  sE as LogsContent,
  NA as Modal,
  WA as NavCollapse,
  BA as NavLink,
  MA as NewModal,
  eh as Pagination,
  th as PrimaryButton,
  vA as RadioButton,
  qA as ResponsiveNavLink,
  fv as SearchSelect,
  UA as SecondaryButton,
  zA as Section,
  HA as Select2ajax,
  nh as Spinner,
  VA as Stats,
  fc as SubmitButton,
  bA as Table,
  AA as TableItemCard,
  xA as Tbody,
  $s as Td,
  XA as TdCollapseHandler,
  hg as TextInput,
  VE as Textarea,
  SA as Th,
  wA as Thead,
  EA as TrCollapse,
  OA as TrCollapseHandler,
  Qw as TrPlaceholder,
  JA as default,
  _1 as getInertiaPage,
  wr as getInertiaRouter,
  pA as hasPermission,
  L1 as moneyFormat,
  dA as numberFormat,
  mA as setInertiaPage,
  hA as setInertiaRouter
};
